// AI曼波UP主与作品索引 - MusicFree 适配版
// 作者: 朔㷰磐
// 功能: 搜索"AI曼波"或"菜单"查看全部UP主，搜索UP主名展开作品，搜索曲名直接定位，专辑字段可复制作品名
module.exports = {
    platform: "曼波索引",
    author: "朔㷰磐",
    version: "1.1.0",
    primaryKey: ["id"],
    cacheControl: "no-cache",
    hints: {
        importMusicItem: ["搜索"AI曼波"或"菜单"查看全部UP主。", "搜索UP主名展开其全部作品。", "搜索曲名直接定位。", "专辑字段为作品名，点击即可复制。"],
        importMusicSheet: []
    },

    _categories: [
        { name: "包包sama啊", parent: "AI曼波UP主", items: ["不再曼波","太空曼波","来去曼波","2:33am","おはなばたけ (花田)","猫猫怕痛惹","All We Know","Normal No More","强者来了374","曼波 No More"] },
        { name: "肇岁初十", parent: "AI曼波UP主", items: ["绝不停下","夜弦之音","不醒之梦","变得清楚了的taffy之八","暴食の街","忍者棒棒","大正浪漫","らくらく安楽死","香企鹅相关创作","曼波 No More（婉约版）"] },
        { name: "萌宠小小怪兽", parent: "AI曼波UP主", items: ["猫meme配音系列","小狗meme配音","兔子meme配音","仓鼠meme配音","鹦鹉meme配音","柯基meme配音","布偶猫meme配音","龙猫meme配音","刺猬meme配音","金毛meme配音"] },
        { name: "清沐冬瓜", parent: "AI曼波UP主", items: ["爱与希望的小镇","夏夜蝉鸣时","星空下的约定","雨季不再来","风居住的街道","樱花落满肩","月光把梦照亮","时光慢递","橘子汽水的夏天","初雪未央"] },
        { name: "还给我神ID", parent: "AI曼波UP主", items: ["不再曼波","太空曼波","来去曼波","2:33am","おはなばたけ (花田)","猫猫怕痛惹","All We Know","Normal No More","强者来了374","曼波 No More"] },
        { name: "漫游会议室", parent: "AI曼波UP主", items: ["美猴亡","药方","无岸","装装样","我是假的又如何","AI西游记系列","孙悟空の逆袭","牛魔王disco","八戒的爱情故事","沙僧的沉默"] },
        { name: "卖冰淇淋的容器猫", parent: "AI曼波UP主", items: ["布布（常驻嘉宾）","布布的生日歌","布布与小伙伴","布布的冒险","布布的甜蜜日常","布布的睡前故事","布布的美食日记","布布的音乐盒","布布的花园","布布的天空"] },
        { name: "永雏塔菲", parent: "AI曼波UP主", items: ["夜弦之音","不醒之梦","变得清楚了的taffy之八","暴食の街","忍者棒棒","大正浪漫","らくらく安楽死","马娘小菲主题曲","塔菲的奇妙冒险","虚拟之梦"] },
        { name: "凉凉凉Official", parent: "AI曼波UP主", items: ["香企鹅相关创作","企鹅漫步","南极物语","冰上华尔兹","香企鹅的日常","企鹅快递员","雪国的来信","极光下的企鹅","企鹅与海豹","冰封王座"] },
        { name: "赫血鼠南希", parent: "AI曼波UP主", items: ["香企鹅相关创作","企鹅侦探事务所","南极快递站","企鹅学院","香企鹅的秘密日记","企鹅的星空观测","冰雪奇缘企鹅版","企鹅温泉物语","南极探险队","企鹅的厨房"] },
        { name: "byd小绫", parent: "AI曼波UP主", items: ["王小桃（VRChat曼波衍生形象）","桃色冒险","小桃的日常","桃太郎曼波","桃花源记","蜜桃成熟时","桃之夭夭","桃园结义曼波版","桃子汽水","桃色幸运草"] },
        { name: "花儿不哭", parent: "AI曼波UP主", items: ["RVC变声工具","冰冷的房間一個人","妄想Paranoia","鏡花水月","緋願","製作一個可愛女孩子的方法","Alive","白金disco","末世殘響","新·九九八十一"] },
        { name: "彦希MIX-KUDE", parent: "AI曼波UP主", items: ["曼波 No More（婉约版）","月下曼波","风之曼波","星尘曼波","夜莺曼波","樱花曼波","雨夜曼波","晨曦曼波","暮色曼波","幻梦曼波"] }
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
                    id: "mambo_" + i + "_" + j
                });
            }
        }
    },

    search: async function (query, page, type) {
        page = page || 1;
        this._buildFlatItems();
        var flat = this._flatItems;

        // 菜单触发
        if (query === "菜单" || query === "分类" || query === "帮助" || query === "AI曼波") {
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
            var ps = 10, s = (page - 1) * ps, e = s + ps;
            return { isEnd: e >= items.length, data: items.slice(s, e) };
        }

        // 精确匹配UP主名 → 展开其全部作品
        var q = query.toLowerCase();
        for (var i = 0; i < this._categories.length; i++) {
            if (this._categories[i].name.toLowerCase() === q) {
                var songs = this._categories[i].items;
                var ps = 10, s = (page - 1) * ps, e = s + ps, pageSongs = songs.slice(s, e);
                var items = [];
                for (var j = 0; j < pageSongs.length; j++) {
                    items.push({
                        id: "song_" + i + "_" + (s + j),
                        title: pageSongs[j],
                        artist: this._categories[i].name,
                        album: pageSongs[j],
                        duration: 0,
                        artwork: ""
                    });
                }
                return { isEnd: e >= songs.length, data: items };
            }
        }

        // 模糊匹配曲名或UP主名
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
            items.push({
                id: m.id + "_" + (page * 1000 + j),
                title: m.term.length > 20 ? m.term.substring(0, 20) + "..." : m.term,
                artist: m.path.split("/")[0] || "",
                album: m.term,
                duration: 0,
                artwork: ""
            });
        }
        return { isEnd: e >= matched.length, data: items };
    },

    getMediaSource: function () { return { url: "", headers: {}, userAgent: "" }; },
    getMusicInfo: function (item) { return { id: item.id, title: item.title, artist: item.artist, album: item.album, duration: 0 }; },
    getLyric: function (item) { return "UP主：" + (item.artist || "") + "\n作品：" + item.album; },
    getAlbumInfo: async function () { return { isEnd: true, data: [] }; },
    getMusicSheetInfo: async function () { return { isEnd: true, data: [] }; },
    getArtistWorks: async function () { return { isEnd: true, data: [] }; },
    importMusicItem: async function () { return null; },
    importMusicSheet: async function () { return null; },
    getTopLists: async function () { return []; },
    getTopListDetail: async function () { return { isEnd: true, data: [] }; }
};