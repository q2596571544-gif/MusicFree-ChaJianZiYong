// 朔㷰磐·必应搜索 - 多源切换版（谷歌已移除）
// 功能: 基础为必应搜索，搜索“菜单”显示多源入口，指令切换英文维基/HackerNews
module.exports = {
    platform: "多源搜",
    author: "朔㷰磐",
    version: "1.1.0",
    primaryKey: ["id"],
    cacheControl: "no-cache",
    hints: {
        importMusicItem: ["搜索“菜单”查看多源入口。", "#en 关键词→英文维基", "#hn 关键词→HackerNews", "直接输入关键词→必应搜索"],
        importMusicSheet: []
    },

    search: async function (query, page, type) {
        page = page || 1;

        // ─── 指令1: 英文维基百科 ───
        if (query.startsWith("#en ")) {
            return await this._searchWiki(query.replace("#en ", ""), page);
        }
        // ─── 指令2: HackerNews ───
        if (query.startsWith("#hn ")) {
            return await this._searchHackerNews(query.replace("#hn ", ""), page);
        }

        // ─── 菜单：前2条为其他搜索引擎入口 ───
        if (query === "菜单" || query === "帮助" || query === "搜索") {
            const menuItems = [
                {
                    id: "menu_enwiki",
                    title: "英文维基百科",
                    artist: "指令 #en 关键词",
                    album: "https://en.wikipedia.org",
                    duration: 0,
                    artwork: ""
                },
                {
                    id: "menu_hn",
                    title: "HackerNews",
                    artist: "指令 #hn 关键词",
                    album: "https://news.ycombinator.com",
                    duration: 0,
                    artwork: ""
                }
            ];

            // 菜单后面追加必应搜索结果
            const bingResult = await this._searchBing("热门", page);
            const bingItems = bingResult.data || [];

            return {
                isEnd: bingResult.isEnd,
                data: menuItems.concat(bingItems)
            };
        }

        // ─── 默认：必应搜索 ───
        return await this._searchBing(query, page);
    },

    // ==================== 必应搜索 ====================
    _searchBing: async function(query, page) {
        try {
            const url = `https://www.bing.com/search?q=${encodeURIComponent(query)}&count=10&offset=${(page - 1) * 10}&setlang=zh-Hans`;
            const resp = await fetch(url, {
                headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" }
            });
            if (!resp.ok) throw new Error("HTTP " + resp.status);
            const html = await resp.text();
            const results = parseBing(html);
            const items = results.map((r, i) => ({
                id: `bing_${page}_${i}_${Date.now()}`,
                title: r.title,
                artist: "Bing",
                album: r.url,
                duration: 0,
                artwork: ""
            }));
            return { isEnd: results.length < 10, data: items };
        } catch (e) {
            return { isEnd: true, data: [{ id: "err", title: "Bing搜索失败", artist: e.message, album: "", duration: 0, artwork: "" }] };
        }
    },

    // ==================== 英文维基百科 ====================
    _searchWiki: async function(query, page) {
        const resultsPerPage = 10;
        const offset = (page - 1) * resultsPerPage;
        const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&srlimit=${resultsPerPage}&sroffset=${offset}&origin=*`;

        try {
            const resp = await fetch(url, {
                headers: { "User-Agent": "MusicFree-Plugin/1.0" }
            });
            if (!resp.ok) throw new Error("HTTP " + resp.status);
            const data = await resp.json();
            const searchResults = data.query?.search;
            const results = searchResults && searchResults.length > 0 
                ? searchResults.map(item => ({
                    title: item.title,
                    url: `https://en.wikipedia.org/wiki/${encodeURIComponent(item.title)}`,
                    snippet: item.snippet ? item.snippet.replace(/<\/?[^>]+>/g, "") : "",
                    source: "英文维基百科"
                  }))
                : [];
            const items = results.map((r, i) => ({
                id: `wiki_${page}_${i}_${Date.now()}`,
                title: r.title,
                artist: "英文维基百科",
                album: r.url,
                duration: 0,
                artwork: "",
                _url: r.url,
                _snippet: r.snippet || ""
            }));
            return { isEnd: results.length < resultsPerPage, data: items.length > 0 ? items : [{ id: "no", title: "英文维基百科暂无结果", artist: "请尝试其他英文关键词", album: "", duration: 0, artwork: "" }] };
        } catch (e) {
            return { isEnd: true, data: [{ id: "err", title: "英文维基百科请求失败", artist: e.message, album: "", duration: 0, artwork: "" }] };
        }
    },

    // ==================== HackerNews ====================
    _searchHackerNews: async function(query, page) {
        try {
            const url = `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(query)}&tags=story&hitsPerPage=10&page=${page - 1}`;
            const resp = await fetch(url);
            const data = await resp.json();
            const results = (data.hits || []).map(h => ({
                title: h.title || h.story_title,
                url: h.url || `https://news.ycombinator.com/item?id=${h.objectID}`,
                source: "HackerNews"
            }));
            const items = results.map((r, i) => ({
                id: `hn_${page}_${i}_${Date.now()}`,
                title: r.title,
                artist: "HackerNews",
                album: r.url,
                duration: 0,
                artwork: ""
            }));
            return { isEnd: results.length < 10, data: items.length > 0 ? items : [{ id: "no", title: "无结果", artist: "", album: "", duration: 0, artwork: "" }] };
        } catch (e) {
            return { isEnd: true, data: [{ id: "err", title: "HackerNews失败", artist: e.message, album: "", duration: 0, artwork: "" }] };
        }
    },

    getMediaSource: function() { return { url: "", headers: {}, userAgent: "" }; },
    getMusicInfo: function(item) { return { id: item.id, title: item.title, artist: item.artist, album: item.album, duration: 0, _url: item._url, _snippet: item._snippet }; },
    getLyric: function(item) { return `[ti:${item.title}]\n[ar:${item.artist}]\n[00:00.00]标题：${item.title}\n[00:10.00]链接：${item.album}\n[00:20.00]摘要：${item._snippet || "无"}`; },
    getAlbumInfo: async function() { return { isEnd: true, data: [] }; },
    getMusicSheetInfo: async function() { return { isEnd: true, data: [] }; },
    getArtistWorks: async function() { return { isEnd: true, data: [] }; },
    importMusicItem: async function() { return null; },
    importMusicSheet: async function() { return null; },
    getTopLists: async function() { return []; },
    getTopListDetail: async function() { return { isEnd: true, data: [] }; }
};

// 解析 Bing 搜索结果
function parseBing(html) {
    const results = [];
    const regex = /<li class="b_algo"[^>]*>[\s\S]*?<h2[^>]*>[\s\S]*?<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
    let match;
    while ((match = regex.exec(html)) !== null) {
        const title = match[2].replace(/<[^>]+>/g, "").trim();
        if (title && match[1]) results.push({ title, url: match[1] });
        if (results.length >= 10) break;
    }
    return results;
}