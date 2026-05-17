// 朔㷰磐·哈基米热门歌曲索引
// 功能：搜索“哈基米”查看100首热门歌曲，按热度排序，专辑字段可复制歌名
module.exports = {
    platform: "哈基米",
    author: "朔㷰磐",
    version: "1.0.0",
    primaryKey: ["id"],
    cacheControl: "no-cache",
    hints: {
        importMusicItem: ["搜索“哈基米”或“菜单”查看100首热门歌曲。", "搜索关键词可过滤歌曲。", "专辑字段为歌名，点击即可复制。"],
        importMusicSheet: []
    },

    _categories: [
        {
            name: "2025年度哈基米TOP10",
            parent: "哈基米",
            items: [
                "打火基 (哈基米曼波Remix)",
                "Bad Chimi!!",
                "最后一哈 (完整版)",
                "古典哈基米：西班牙斗耄士进行曲",
                "弥渡山歌-哈基米版",
                "哈基米啊南北绿豆",
                "圆头监狱",
                "约德尔曼波",
                "基米没茅台",
                "死一样的哈过"
            ]
        },
        {
            name: "哈基米十大名曲",
            parent: "哈基米",
            items: [
                "跳楼基",
                "基祥三宝",
                "不再曼波",
                "蓝莲哈",
                "哈基米起床曲",
                "孤独的哈基米",
                "神曼波",
                "太空曼波",
                "哈雪大冒险",
                "百变基米"
            ]
        },
        {
            name: "古典哈基米系列",
            parent: "哈基米",
            items: [
                "古典哈基米：野哈飞舞",
                "古典哈基米：威廉退尔序曲",
                "古典哈基米：西班牙斗耄士进行曲",
                "哈基米：谐谑曲",
                "哈基米：幽默曲",
                "哈基米：流浪之歌",
                "哈基米之诗",
                "哈基米：我无怨无悔",
                "哈基米：My Soul",
                "哈基米咏叹调：复仇的火焰在我心中燃烧"
            ]
        },
        {
            name: "曼波系列",
            parent: "哈基米",
            items: [
                "不再曼波",
                "太空曼波",
                "约德尔曼波",
                "神曼波",
                "曼波时代 (Gee)",
                "曼波恩典",
                "来去曼波",
                "AI曼波：出哈",
                "曼波节",
                "晚夜基米问曼波"
            ]
        },
        {
            name: "基米系列",
            parent: "哈基米",
            items: [
                "基祥三宝",
                "百变基米",
                "找自基",
                "基米斜街",
                "基米没茅台",
                "基米说 (伯虎说)",
                "基米Circus",
                "基米on your lawn",
                "波基米亚狂想曲",
                "基米抄"
            ]
        },
        {
            name: "哈气系列",
            parent: "哈基米",
            items: [
                "死一样的哈过",
                "哈气到西洲",
                "六兆年一夜哈气",
                "哈尽天下",
                "哈起天阑",
                "半壶哈",
                "琴哈",
                "不哈梦",
                "惊鸿一哈",
                "哈基米：WAKE UP!"
            ]
        },
        {
            name: "哈基米改编金曲",
            parent: "哈基米",
            items: [
                "哈基米：Billie Jean",
                "哈基米：Axel F",
                "哈基米：The Way I Still Love You",
                "哈基米南北绿豆 (打火机Remix)",
                "夜曲 (哈基米版)",
                "月光 (哈基米版)",
                "烟哈易冷 (R&B版)",
                "哈如雪",
                "哈基米：老人与海",
                "哈基米：Level!"
            ]
        },
        {
            name: "暗杠读秒p系列",
            parent: "哈基米",
            items: [
                "哈雪大冒险",
                "哈雪大耄险",
                "圆头监狱",
                "基祥三宝"
            ]
        },
        {
            name: "法兰西诗歌剧系列",
            parent: "哈基米",
            items: [
                "跳楼基",
                "孤独的哈基米",
                "流浪猫之歌",
                "哈基米：Conundrum"
            ]
        },
        {
            name: "还给我神ID系列",
            parent: "哈基米",
            items: [
                "不再曼波",
                "太空曼波",
                "世界上最小的哈基米",
                "2:33am",
                "来去曼波",
                "爱哈之城",
                "哈基谷物语：耄耋镇"
            ]
        }
    ],

    _flatItems: null,

    _buildFlatItems: function() {
        if (this._flatItems) return;
        this._flatItems = [];
        for (var i = 0; i < this._categories.length; i++) {
            var cat = this._categories[i];
            var path = (cat.parent ? cat.parent + "/" : "") + cat.name;
            for (var j = 0; j < cat.items.length; j++) {
                this._flatItems.push({ term: cat.items[j], path: path, id: "hk_" + i + "_" + j });
            }
        }
    },

    search: async function(query, page, type) {
        page = page || 1;
        this._buildFlatItems();
        var flat = this._flatItems;

        if (query === "菜单" || query === "分类" || query === "帮助" || query === "哈基米") {
            var cats = this._categories;
            var items = [];
            for (var i = 0; i < cats.length; i++) {
                items.push({ id: "cat_" + i, title: cats[i].name, artist: "", album: cats[i].name, duration: 0, artwork: "" });
            }
            var ps = 10, s = (page - 1) * ps, e = s + ps;
            return { isEnd: e >= items.length, data: items.slice(s, e) };
        }

        var q = query.toLowerCase(), matched = [];
        for (var i = 0; i < flat.length; i++) {
            if (flat[i].term.toLowerCase().indexOf(q) !== -1 || flat[i].path.toLowerCase().indexOf(q) !== -1) {
                matched.push(flat[i]);
            }
        }
        var ps = 10, s = (page - 1) * ps, e = s + ps, pItems = matched.slice(s, e);
        var items = [];
        for (var j = 0; j < pItems.length; j++) {
            items.push({
                id: pItems[j].id + "_" + (page * 1000 + j),
                title: pItems[j].term.length > 20 ? pItems[j].term.substring(0, 20) + "..." : pItems[j].term,
                artist: "",
                album: pItems[j].term,
                duration: 0,
                artwork: ""
            });
        }
        return { isEnd: e >= matched.length, data: items };
    },

    getMediaSource: function() { return { url: "", headers: {}, userAgent: "" }; },
    getMusicInfo: function(item) { return { id: item.id, title: item.title, artist: "", album: item.album, duration: 0 }; },
    getLyric: function(item) { return "哈基米歌曲：" + item.album; },
    getAlbumInfo: async function() { return { isEnd: true, data: [] }; },
    getMusicSheetInfo: async function() { return { isEnd: true, data: [] }; },
    getArtistWorks: async function() { return { isEnd: true, data: [] }; },
    importMusicItem: async function() { return null; },
    importMusicSheet: async function() { return null; },
    getTopLists: async function() { return []; },
    getTopListDetail: async function() { return { isEnd: true, data: [] }; }
};