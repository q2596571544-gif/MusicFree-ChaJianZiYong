// 朔㷰磐·Galgame音乐索引
// 功能: 收录多部经典Galgame与视觉小说的原声音乐，搜索游戏名或“菜单”查看章节，搜索曲名直接定位，专辑字段可复制曲名
module.exports = {
    platform: "Galgame音乐",
    author: "朔㷰磐",
    version: "1.0.0",
    primaryKey: ["id"],
    cacheControl: "no-cache",
    hints: {
        importMusicItem: ["搜索游戏名或“菜单”查看全部分类。", "直接搜索曲名定位。", "专辑字段为曲名，点击即可复制。"],
        importMusicSheet: []
    },

    _categories: [
        {
            name: "ATRI -My Dear Moments-",
            parent: "Galgame音乐",
            items: [
                "海中都市", "希望の光", "暖かな時間", "目眩", "おぼろげな輪郭", "ごきげん戦闘ロボ",
                "こんにちは太陽", "窒息寸前", "黄昏期の風景", "澄み渡る風", "Working", "ハレーション",
                "ポンコツステップ", "子供たちのひととき", "凪", "さぁ、海へ！", "暗い足音", "日常を刻む",
                "涙が輝く瞬間", "親愛なるあの日々へ", "光放て！", "光放て！inst ver.", "光放て！short ver.",
                "Dear Moments", "Dear Moments inst ver.", "Dear Moments short ver."
            ]
        },
        {
            name: "海市蜃楼之馆",
            parent: "Galgame音乐",
            items: [
                "Giselle", "Luciole", "A Fleeting Fata Morgana", "The House in Fata Morgana",
                "Another Episode Original Soundtrack", "Symphonic of Fata Morgana",
                "原声带全65曲(35首人声·葡萄牙语歌词)"
            ]
        },
        {
            name: "三色绘恋",
            parent: "Galgame音乐",
            items: [
                "三色绘恋", "慵懒的阳光", "珍贵的课间", "紫水晶之瞳", "橙色的小伞",
                "木头脑袋", "Excuse me!", "静谧之夜", "脆弱的温柔", "约定", "心底的颜色Ver.Orange", "尘埃落定"
            ]
        },
        {
            name: "夏末白夜",
            parent: "Galgame音乐",
            items: [
                "Encounter", "Le voleur d'ombres", "Stake your soul!", "The unique solution",
                "白日倚梦", "光与影的舞步", "恒常不变的夏天", "流光溯影", "你也想跳舞吗我的小伯爵",
                "瓶中烟花", "青蓝色的尽头", "赏味期限", "盛夏方程式", "十分之一的苦涩",
                "逃往B612", "微小的光芒", "午后的太阳光", "消失的关键帧", "星火浮尘", "寻心启事", "逐光者"
            ]
        },
        {
            name: "GINKA",
            parent: "Galgame音乐",
            items: [
                "Star Trail（OP）", "夢の繭", "カタシロと願い", "少女と夏の日差し",
                "朝顔とプランタ", "マジックアワー"
            ]
        },
        {
            name: "9-nine-系列",
            parent: "Galgame音乐",
            items: [
                "ReAliZe", "ふたり", "ソラノキオク", "ここにある空", "ハルトキ～Spring Moment～",
                "そして愛になる", "DEAR MY WAKER", "Squall", "Be braver!", "InFINITE Line",
                "drowsing morning", "as always as usual", "under the moon", "with sweetness",
                "dance! dance! dance!", "can't wait daybreak", "uneasiness", "scent of danger",
                "unavoidable", "I have you...", "make the heart grow fonder", "dream moments",
                "signpost", "Innocence!", "Lively so", "never forget", "The pea conflict",
                "sidedness breeze", "sacred Warmth", "Zepto EarnesT", "Sanity extraneous",
                "mile likelihood", "fellow assembly", "Strict resT", "Lovesick Magic", "Sweet Pop",
                "floating Heart", "The Order…"
            ]
        },
        {
            name: "近月少女的礼仪",
            parent: "Galgame音乐",
            items: [
                "COMPLETE SOUNDTRACK（Navel社发行·多首BGM及主题旋律）"
            ]
        },
        {
            name: "魔女的夜宴",
            parent: "Galgame音乐",
            items: [
                "恋せよ乙女！（OP）", "Re：Start～君とまた出逢えて～", "天使の羽とクリスタル",
                "スカート", "君がくれた光", "Without You", "大好き", "気の合う仲間たち",
                "スクールデーズ", "ちょっとアンニュイ", "不思議なチカラ", "ありえない",
                "後悔先立たず", "朝の陽気", "ふぁっ？", "お悩み中", "夢現", "Schwarze Katze",
                "優しい風", "充実生活", "魔法の光", "まったり日和", "できるかな", "晴れ晴れ気分",
                "風紀紊亂", "説教タイム", "Movement!", "友達", "使命", "思い出のファーストデート",
                "sweet treasure", "リアルフレンド", "Sweet Sweetアリス", "Midday Star",
                "Little Guitarist", "代償", "葉わぬ願い", "望みの果てに", "切なくて",
                "二人の魔法", "確かめ合う想い", "恋せよ乙女！Guitar Version", "恋せよ乙女！Piano Version"
            ]
        },
        {
            name: "时钟机关的Ley-line",
            parent: "Galgame音乐",
            items: [
                "黄昏時のレイライン", "残影の夜が明ける時", "Clockwork Ley-Line -The Last episode-",
                "黄昏時のレイライン～from A Clockwork Ley-Line～", "Places where you are"
            ]
        },
        {
            name: "千恋万花",
            parent: "Galgame音乐",
            items: [
                "恋ひ恋ふ縁（OP）", "愛しさと感謝の気持ち（芳乃ED）", "ふたりで（茉子ED）",
                "ふたつの影（丛雨ED）", "キミのとなり（芦花ED）", "GIFT（蕾娜ED）",
                "Love flower（小春ED）", "とおりゃんせ～甘美風来（芳乃角色歌）",
                "茉子の日常（茉子角色歌）", "キズナヒトツ（丛雨角色歌）",
                "Blue sky（蕾娜角色歌）", "BGM全47曲收录于3枚CD中"
            ]
        },
        {
            name: "人狼村之谜",
            parent: "Galgame音乐",
            items: [
                "Last Acceleration", "仏舎利ロック", "人狼狂詩曲", "原声带包含多首BGM及休水民谣清唱曲目"
            ]
        },
        {
            name: "壳之少女",
            parent: "Galgame音乐",
            items: [
                "琉璃之鳥（OP）", "エス", "殻の少女", "多首BGM曲目"
            ]
        },
        {
            name: "虚之少女",
            parent: "Galgame音乐",
            items: [
                "虚之少女OP1", "虚之少女OP2", "系列延续BGM曲目"
            ]
        },
        {
            name: "天之少女",
            parent: "Galgame音乐",
            items: [
                "プレリュード", "メインテーマ", "メインテーマarrange ver.",
                "Days III", "Days III arrange ver.", "輪廻の糸（ED）"
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
                this._flatItems.push({ term: cat.items[j], path: path, id: "gal_" + i + "_" + j });
            }
        }
    },

    search: async function (query, page, type) {
        page = page || 1;
        this._buildFlatItems();
        var flat = this._flatItems;

        var gameNames = [
            "ATRI", "海市蜃楼之馆", "三色绘恋", "夏末白夜", "GINKA",
            "9-nine", "近月少女", "魔女的夜宴", "时钟机关", "千恋万花",
            "人狼村", "壳之少女", "虚之少女", "天之少女"
        ];
        var isMenu = query === "菜单" || query === "分类" || query === "帮助";
        for (var g = 0; g < gameNames.length; g++) {
            if (query.indexOf(gameNames[g]) !== -1) { isMenu = true; break; }
        }

        if (isMenu) {
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