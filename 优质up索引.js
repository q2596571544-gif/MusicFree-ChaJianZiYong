// 朔㷰磐·B站优质UP主索引
// 功能: 口碑好、不滥接广告的UP主，搜索“UP主”或“菜单”查看分类
module.exports = {
    platform: "优质UP主",
    author: "朔㷰磐",
    version: "1.0.0",
    primaryKey: ["id"],
    cacheControl: "no-cache",
    hints: {
        importMusicItem: ["搜索“UP主”或“菜单”查看分类。", "专辑字段为UP主名，点击即可复制。"],
        importMusicSheet: []
    },

    _categories: [
        { name: "硬件数码", parent: "UP主", items: ["极客湾Geekerwan","影视飓风","硬件茶谈","笔吧评测室","51972","远古时代装机猿","科技美学"] },
        { name: "知识科普", parent: "UP主", items: ["无穷小亮的科普日常","毕导","小Lin说","差评君","大圆镜科普","小约翰可汗","历史调研室","安州牧","稚嫩的魔法师","芳斯塔芙","龙女之声"] },
        { name: "影视解说", parent: "UP主", items: ["木鱼水心","绝命墨菲","1900影剧室","吸奇侠","青蛙刀圣","M的蒙太奇笔记","一条闲木鱼","小片片说大片"] },
        { name: "音乐", parent: "UP主", items: ["HOPICO","郭莽莽呀"] },
        { name: "美食", parent: "UP主", items: ["盗月社食遇记","餐饮研究员王刚","赛博食录","食事史馆","主厨neil在澳洲","世界美食official"] },
        { name: "文学读书", parent: "UP主", items: ["大澜的文学午安","拣尽南枝"] },
        { name: "游戏", parent: "UP主", items: ["Lunamos","达奇上校","努力的lorre","BB姬Studio","芒果冰OL","公孙雅量","DarkCarrot","冷面叶星星IKGN","尚在天国EX","中二电波台"] },
        { name: "生活", parent: "UP主", items: ["城阳电工电路","住家吴阿姨","老花医","castelu","左克朋"] },
        { name: "语言学习", parent: "UP主", items: ["语老炮儿马思瑞"] }
    ],

    _flatItems: null,

    _buildFlatItems: function() {
        if (this._flatItems) return;
        this._flatItems = [];
        for (var i = 0; i < this._categories.length; i++) {
            var cat = this._categories[i];
            var path = (cat.parent ? cat.parent + "/" : "") + cat.name;
            for (var j = 0; j < cat.items.length; j++) {
                this._flatItems.push({
                    term: cat.items[j],
                    path: path,
                    id: "up_" + i + "_" + j
                });
            }
        }
    },

    search: async function (query, page, type) {
        page = page || 1;
        this._buildFlatItems();
        var flat = this._flatItems;

        if (query === "分类" || query === "菜单" || query === "帮助" || query === "UP主") {
            var cats = this._categories;
            var items = [];
            for (var i = 0; i < cats.length; i++) {
                items.push({
                    id: "cat_" + i,
                    title: cats[i].name,
                    artist: "",
                    album: cats[i].name,
                    duration: 0,
                    artwork: ""
                });
            }
            var pageSize = 10;
            var start = (page - 1) * pageSize;
            var end = start + pageSize;
            var pageItems = items.slice(start, end);
            return { isEnd: end >= items.length, data: pageItems };
        }

        var q = query.toLowerCase();
        var matched = [];
        for (var i = 0; i < flat.length; i++) {
            var item = flat[i];
            if (item.term.toLowerCase().indexOf(q) !== -1 || item.path.toLowerCase().indexOf(q) !== -1) {
                matched.push(item);
            }
        }

        var pageSize = 10;
        var start = (page - 1) * pageSize;
        var end = start + pageSize;
        var pageItems = matched.slice(start, end);
        var isEnd = end >= matched.length;

        var items = [];
        for (var j = 0; j < pageItems.length; j++) {
            var m = pageItems[j];
            items.push({
                id: m.id + "_" + (page * 1000 + j),
                title: m.term,
                artist: "",
                album: m.term,
                duration: 0,
                artwork: ""
            });
        }

        return { isEnd: isEnd, data: items };
    },

    getMediaSource: function (item, quality) {
        return { url: "", headers: {}, userAgent: "" };
    },
    getMusicInfo: function (item) {
        return { id: item.id, title: item.title, artist: "", album: item.album, duration: 0 };
    },
    getLyric: function (item) {
        return "UP主：" + item.title;
    },
    getAlbumInfo: async function () { return { isEnd: true, data: [] }; },
    getMusicSheetInfo: async function () { return { isEnd: true, data: [] }; },
    getArtistWorks: async function () { return { isEnd: true, data: [] }; },
    importMusicItem: async function () { return null; },
    importMusicSheet: async function () { return null; },
    getTopLists: async function () { return []; },
    getTopListDetail: async function () { return { isEnd: true, data: [] }; }
};