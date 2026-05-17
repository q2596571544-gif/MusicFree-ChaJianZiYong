// 朔㷰磐·听书小说索引
// 功能: 汇总听书UP主、热门小说分类与文学UP主，搜索关键词即可查看，专辑字段可复制名称
module.exports = {
    platform: "听书小说",
    author: "朔㷰磐",
    version: "1.0.0",
    primaryKey: ["id"],
    cacheControl: "no-cache",
    hints: {
        importMusicItem: ["搜索“听书”“小说”或“菜单”查看全部分类。", "搜索具体UP主或书名直接定位。", "专辑字段为条目名，点击即可复制。"],
        importMusicSheet: []
    },

    _categories: [
        // 听书UP主
        { name: "听书UP主", parent: "听书与小说", items: [
            "小说家Puckio","幻海航行","海河听书","狸哩的读书节目","蔡丹君","杜素娟聊文学",
            "一只萧包子","桃子同学","玫瑰叔","奇怪的隔壁","轩邈Elias","轩轩文漫社",
            "白兰九Channel","轻小说迷","懒人有声书","一鸭有声小说","ZH有声便利店",
            "高起起兮","北墟归工作室","墨璃轩广播剧社","风飞语","被窝读物","猫头鹰阿洛",
            "我是怪异君","十三兰德","大东彦","烟老叭","口罩君的书房","配音演员王勇","丹羽道"
        ] },
        // 小说子类
        { name: "悬疑刑侦", parent: "热门小说", items: [
            "侯大利刑侦笔记","余罪","心理罪","暗黑者","无罪之证","殉罪者",
            "清明上河图密码","生吞","19年间谋杀小叙","长夜难明","坏小孩",
            "隐秘的角落","沉默的真相","破云","吞海","默读","死亡通知单",
            "第十一根手指","幸存者","法医秦明系列","燃烧的蜂鸟","遗忘者"
        ] },
        { name: "科幻史诗", parent: "热门小说", items: [
            "三体","流浪地球","球状闪电","超新星纪元","赡养人类","诗云",
            "镜子","地火","带上她的眼睛","赡养上帝","银河帝国","基地",
            "永恒的终结","神们自己","沙丘","海伯利安","安德的游戏","死者代言人",
            "你一生的故事","呼吸","深渊上的火","天渊"
        ] },
        { name: "历史权谋", parent: "热门小说", items: [
            "大唐兴亡三百年","明朝那些事儿","万历十五年","流血的仕途",
            "长安十二时辰","风起陇西","古董局中局","大秦帝国","张居正",
            "雍正皇帝","康熙大帝","大明王朝1566","庆余年","赘婿",
            "知否知否应是绿肥红瘦","锦衣夜行","回到明朝当王爷","官居一品",
            "新宋","上品寒士"
        ] },
        { name: "武侠江湖", parent: "热门小说", items: [
            "天龙八部","射雕英雄传","神雕侠侣","倚天屠龙记","笑傲江湖",
            "鹿鼎记","连城诀","侠客行","多情剑客无情剑","楚留香传奇",
            "陆小凤传奇","绝代双骄","英雄无泪","七种武器","白发魔女传",
            "七剑下天山","云海玉弓缘","萍踪侠影录","大唐游侠传","雪中悍刀行"
        ] },
        { name: "玄幻仙侠", parent: "热门小说", items: [
            "斗破苍穹","斗罗大陆","凡人修仙传","遮天","完美世界","仙逆",
            "求魔","星辰变","盘龙","莽荒纪","牧神记","剑来","大奉打更人",
            "诡秘之主","奥数神座","一世之尊","烂柯棋缘","玄鉴仙族",
            "苟在妖武乱世修仙","轮回乐园"
        ] },
        { name: "文学读书UP主", parent: "听书与小说", items: [
            "拣尽南枝","大澜的文学午安","毕导","小Lin说","差评君",
            "无穷小亮的科普日常","小约翰可汗","历史调研室","安州牧","稚嫩的魔法师"
        ] }
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
                    id: "tx_" + i + "_" + j
                });
            }
        }
    },

    search: async function (query, page, type) {
        page = page || 1;
        this._buildFlatItems();
        var flat = this._flatItems;

        // 触发分类菜单：包含“听书”“小说”“菜单”“分类”等
        if (query === "菜单" || query === "分类" || query === "帮助" || query.indexOf("听书") !== -1 || query.indexOf("小说") !== -1) {
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

        // 普通搜索匹配
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
        return "条目：" + item.title + "\n分类：" + (item.album || "");
    },
    getAlbumInfo: async function () { return { isEnd: true, data: [] }; },
    getMusicSheetInfo: async function () { return { isEnd: true, data: [] }; },
    getArtistWorks: async function () { return { isEnd: true, data: [] }; },
    importMusicItem: async function () { return null; },
    importMusicSheet: async function () { return null; },
    getTopLists: async function () { return []; },
    getTopListDetail: async function () { return { isEnd: true, data: [] }; }
};