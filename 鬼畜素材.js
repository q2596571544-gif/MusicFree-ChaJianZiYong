// 朔㷰磐·鬼畜素材历史人物索引
// 功能: 收录鬼畜区常用历史人物，按朝代分类，搜索人名或分类名查看，专辑字段可复制人名
module.exports = {
    platform: "鬼畜素材",
    author: "朔㷰磐",
    version: "1.0.0",
    primaryKey: ["id"],
    cacheControl: "no-cache",
    hints: {
        importMusicItem: ["搜索“鬼畜”或“菜单”查看全部朝代分类。", "搜索人名直接定位。", "专辑字段为人名，点击即可复制。"],
        importMusicSheet: []
    },

    _categories: [
        { name: "三国·蜀汉", parent: "鬼畜素材", items: ["诸葛亮","刘备","关羽","张飞","赵云","姜维","刘禅"] },
        { name: "三国·曹魏", parent: "鬼畜素材", items: ["曹操","王朗","司马懿","许褚","张辽","夏侯惇"] },
        { name: "三国·东吴", parent: "鬼畜素材", items: ["孙权","周瑜","黄盖","鲁肃","吕蒙"] },
        { name: "秦汉", parent: "鬼畜素材", items: ["秦始皇","刘邦","项羽","韩信","张良"] },
        { name: "唐朝", parent: "鬼畜素材", items: ["李世民","武则天","魏征","房玄龄","杜如晦"] },
        { name: "宋元", parent: "鬼畜素材", items: ["宋江","武松","岳飞","成吉思汗"] },
        { name: "明清", parent: "鬼畜素材", items: ["朱元璋","康熙","雍正","乾隆","崇祯"] },
        { name: "诗人/文人", parent: "鬼畜素材", items: ["李白","杜甫","苏轼","王安石","欧阳修"] },
        { name: "远古/其他", parent: "鬼畜素材", items: ["炎帝","黄帝","蚩尤","大禹","纣王","妲己","管仲","鬼谷子"] }
    ],

    _flatItems: null,

    _buildFlatItems: function() {
        if (this._flatItems) return;
        this._flatItems = [];
        for (var i = 0; i < this._categories.length; i++) {
            var cat = this._categories[i];
            var path = (cat.parent ? cat.parent + "/" : "") + cat.name;
            for (var j = 0; j < cat.items.length; j++) {
                this._flatItems.push({ term: cat.items[j], path: path, id: "gck_" + i + "_" + j });
            }
        }
    },

    search: async function (query, page, type) {
        page = page || 1;
        this._buildFlatItems();
        var flat = this._flatItems;

        if (query === "菜单" || query === "分类" || query === "帮助" || query === "鬼畜") {
            var cats = this._categories;
            var items = [];
            for (var i = 0; i < cats.length; i++) {
                items.push({ id: "cat_" + i, title: cats[i].name, artist: "", album: cats[i].name, duration: 0, artwork: "" });
            }
            var ps = 10, s = (page - 1) * ps, e = s + ps;
            return { isEnd: e >= items.length, data: items.slice(s, e) };
        }

        var q = query.toLowerCase();
        for (var i = 0; i < this._categories.length; i++) {
            if (this._categories[i].name.toLowerCase() === q) {
                var songs = this._categories[i].items;
                var ps = 10, s = (page - 1) * ps, e = s + ps, pageSongs = songs.slice(s, e);
                var items = [];
                for (var j = 0; j < pageSongs.length; j++) {
                    items.push({ id: "gck_s_" + i + "_" + j, title: pageSongs[j], artist: this._categories[i].name, album: pageSongs[j], duration: 0, artwork: "" });
                }
                return { isEnd: e >= songs.length, data: items };
            }
        }

        var matched = [];
        for (var i = 0; i < flat.length; i++) {
            if (flat[i].term.toLowerCase().indexOf(q) !== -1 || flat[i].path.toLowerCase().indexOf(q) !== -1) {
                matched.push(flat[i]);
            }
        }
        var ps = 10, s = (page - 1) * ps, e = s + ps, pItems = matched.slice(s, e);
        var items = [];
        for (var j = 0; j < pItems.length; j++) {
            var m = pItems[j];
            items.push({ id: m.id + "_" + (page * 1000 + j), title: m.term, artist: m.path.split("/")[0] || "", album: m.term, duration: 0, artwork: "" });
        }
        return { isEnd: e >= matched.length, data: items };
    },

    getMediaSource: function () { return { url: "", headers: {}, userAgent: "" }; },
    getMusicInfo: function (item) { return { id: item.id, title: item.title, artist: item.artist, album: item.album, duration: 0 }; },
    getLyric: function (item) { return "分类：" + (item.artist || "") + "\n人物：" + item.album; },
    getAlbumInfo: async function () { return { isEnd: true, data: [] }; },
    getMusicSheetInfo: async function () { return { isEnd: true, data: [] }; },
    getArtistWorks: async function () { return { isEnd: true, data: [] }; },
    importMusicItem: async function () { return null; },
    importMusicSheet: async function () { return null; },
    getTopLists: async function () { return []; },
    getTopListDetail: async function () { return { isEnd: true, data: [] }; }
};