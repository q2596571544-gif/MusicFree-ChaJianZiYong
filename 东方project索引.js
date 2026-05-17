// 朔㷰磐·音游曲库索引 - 东方Project
// 功能: 收录东方Project TH01-TH06全部曲目，搜索曲名或章节名查看，专辑字段可复制曲名
module.exports = {
    platform: "东方Project曲库",
    author: "朔㷰磐",
    version: "1.0.0",
    primaryKey: ["id"],
    cacheControl: "no-cache",
    hints: {
        importMusicItem: ["搜索“东方”或“菜单”查看全部章节分类。", "直接搜索曲名定位。", "专辑字段为曲名，点击即可复制。"],
        importMusicSheet: []
    },

    _categories: [
        {
            name: "TH01 东方灵异传",
            parent: "东方Project",
            items: ["A Sacred Lot","永远之巫女","Positive and Negative","Highly Responsive to Prayers","东方怪奇谈","天使传说","Oriental Magician","破邪的小太刀","魔镜","The Legend of KAGE","来吧，直到倒地死去的那一刻","同归于尽"]
        },
        {
            name: "TH02 东方封魔录",
            parent: "东方Project",
            items: ["东方封魔录 ～净土曼荼罗","博丽 ～Eastern Wind","She's in a temper!!","End of Daylight","黑暗的力量","幻梦界","以死相赌","神篱，如紫色火焰般燃烧","恋色Magic","东方封魔录 ～幽幻乱舞","Complete Darkness","Extra Love","战车娘所做的梦","远野之森","传说中的仙境","博丽神社境内","夕阳下落","封魔终演"]
        },
        {
            name: "TH03 东方梦时空",
            parent: "东方Project",
            items: ["梦想超越时空","Selection","东方妖恋谈","Reincarnation","Dim. Dream","Tabula rasa ～空白少女","Maniacal Princess","梦消失 ～Lost Dream","梦幻游戏 ～Dream War","魔法决战！～Fight it out!","Sailor of Time","Strawberry Crisis!!","非统一魔法世界论","魔法钟爱","久远之梦","东方的蓝色天空","永远的满月","Maple Dream...","灵人的休息日","胜利对话","Game Over","时之风","Starbow Dream","Phantasmagoria"]
        },
        {
            name: "TH04 东方幻想乡",
            parent: "东方Project",
            items: ["幻想乡 ～Lotus Land Story","Witching Dream","Selene's light","装饰战 ～Decoration Battle","Break the Sabbath","红响曲 ～Scarlet Phoneme","Bad Apple!!","灵战 ～Perdition crisis","Alice Maestra","少女绮想曲 ～Capriccio","星之器 ～Casket of Star","Lotus Love","沉睡的恐怖 ～Sleeping Terror","Dream Land","幽梦 ～Inanimate Dream","不可不禁止的游戏","女仆幻想 ～Icemilk Magic","可爱的恶魔 ～Innocence","Days","Peaceful","Arcadian Dream","幻想的居民","Lotus Road","Dreamy pilot","Incomplete Plot","Border Land","Magic Shop of Raspberry","Crescent Dream","Init"]
        },
        {
            name: "TH05 东方怪绮谈",
            parent: "东方Project",
            items: ["怪绮谈 ～Mystic Square","Dream Express","魔法阵 ～Magic Square","梦想时空","灵天 ～Spiritual Heaven","Romantic Children","Plastic Mind","Maple Wise","禁忌的魔法 ～Forbidden Magic","绯红的少女 ～Crimson Dead!!","背叛的少女 ～Judas Kiss","the Last Judgement","可悲的人偶 ～Doll of Misery","世界的尽头 ～World's End","神话幻想 ～Infinite Being","不可思议之国的爱丽丝","the Grimoire of Alice","神社","Endless","永远的乐园","Mystic Dream","Peaceful Romancer","灵魂安息之所"]
        },
        {
            name: "TH06 东方红魔乡",
            parent: "东方Project",
            items: ["比赤色更红的梦","如鬼灯般的红色之魂","妖魔夜行","Lunate Elf","活泼的纯情小姑娘","上海红茶馆 ～Chinese Tea","明治十七年的上海爱丽丝","巴瓦鲁魔法图书馆","Locked Girl ～少女密室","女仆与血之怀表","月时计 ～Luna Dial","特佩斯的年幼末裔","献给已逝公主的七重奏","魔法少女们的百年祭","U.N.OWEN就是她吗？","比红色更虚无的永远","红楼 ～Eastern Dream..."]
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
                this._flatItems.push({ term: cat.items[j], path: path, id: "th_" + i + "_" + j });
            }
        }
    },

    search: async function (query, page, type) {
        page = page || 1;
        this._buildFlatItems();
        var flat = this._flatItems;

        if (query === "菜单" || query === "分类" || query === "帮助" || query.toLowerCase().indexOf("东方") !== -1 && query.length <= 3) {
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
            if (flat[i].term.toLowerCase().indexOf(q) !== -1 || flat[i].path.toLowerCase().indexOf(q) !== -1) matched.push(flat[i]);
        }
        var ps = 10, s = (page - 1) * ps, e = s + ps, pItems = matched.slice(s, e);
        var items = [];
        for (var j = 0; j < pItems.length; j++) {
            items.push({ id: pItems[j].id + "_" + (page * 1000 + j), title: pItems[j].term.length > 20 ? pItems[j].term.substring(0, 20) + "..." : pItems[j].term, artist: "", album: pItems[j].term, duration: 0, artwork: "" });
        }
        return { isEnd: e >= matched.length, data: items };
    },

    getMediaSource: function () { return { url: "", headers: {}, userAgent: "" }; },
    getMusicInfo: function (item) { return { id: item.id, title: item.title, artist: "", album: item.album, duration: 0 }; },
    getLyric: function (item) { return "曲目：" + item.album; },
    getAlbumInfo: async function () { return { isEnd: true, data: [] }; },
    getMusicSheetInfo: async function () { return { isEnd: true, data: [] }; },
    getArtistWorks: async function () { return { isEnd: true, data: [] }; },
    importMusicItem: async function () { return null; },
    importMusicSheet: async function () { return null; },
    getTopLists: async function () { return []; },
    getTopListDetail: async function () { return { isEnd: true, data: [] }; }
};