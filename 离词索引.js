// 朔㷰磐·离谱标题索引
// 功能: 收录B站发疯文学、抽象流等离谱标题，搜索关键词查看，专辑字段可复制完整标题
module.exports = {
    platform: "离谱标题",
    author: "朔㷰磐",
    version: "1.0.0",
    primaryKey: ["id"],
    cacheControl: "no-cache",
    hints: {
        importMusicItem: ["搜索“离谱”或“菜单”查看分类。", "搜索关键词匹配标题。", "专辑字段为完整标题，点击即可复制。"],
        importMusicSheet: []
    },

    _categories: [
        { name: "发疯文学", parent: "离谱标题", items: [
            "地铁是银河系第八大行星",
            "根据薛定谔的点赞定律，你既已看到此条，又尚未决定是否三连",
            "依据《精神卫生法》第二十七条，本人现正式申请将“不想上班”列为法定节假日",
            "我的闹钟是狌狌所化，每响一次就吞掉我三年寿命",
            "我宣誓，从今天起，所有让我感到压力的东西都将被视为违禁品",
            "早上醒来发现被子已经把我拉黑了",
            "根据《宇宙反内卷条约》第∞条，本人正式退出人类绩效考核系统",
            "我的脑子刚刚发来辞职信，理由是工作环境过于嘈杂",
            "此视频已获得“不想上班协会”官方认证",
            "刚才和我的床进行了深度谈判，它拒绝放我离开",
            "根据今天的气压和风向，我决定不努力了",
            "我的拖延症已经发展成了拖延癌晚期",
            "这个视频是我在梦里剪的，醒来发现还真存在",
            "我的精神状态已经达到了“看啥都想笑”的境界",
            "大家好，我是精神状态不太稳定的UP主",
            "隐忍三年，此视频值得百万播放量",
            "他们隐忍三年才做出这样一条视频",
            "就是因为没人看，我才敢发上来的",
            "反正没人看，随便发发",
            "社死不存在的反正没人看",
            "这也叫打戏。。？",
            "他现在是离不开浓妆了吗。。。",
            "花里胡哨得没眼看。。。。。。",
            "不是吧？？？这哥又不顾配角死活吗？",
            "粉色也能当战袍？！还空中一字马是什么意思？",
            "他现在怎么变成这样了？？？",
            "该起什么标题呢，不能剧透啊...",
            "不要相信四年级小天的话",
            "啊！我不填了，一楼就是标题，审核求放过啊",
            "连作者也不知道标题该取什么",
            "不知道取什么标题，所以没有标题",
            "本来想搞笑轻松的剪出来，但这是我的真实经历，有点笑不出来",
            "国产讽刺喜剧巅峰之作，巨星云集，比春晚还要好看",
            "怎么连意林也有homo啊(恼)",
            "不要轻易和朋友玩“印象九宫格”",
            "颠公颠婆参加接力赛",
            "谁敢信这是11年的小孩？！这也太成熟了吧！",
            "一个美食博主终于忍不住对脚下手了",
            "我勒个狂猪日寄啊！",
            "《爱情个锤子！家都没了，毁灭吧！》",
            "《走一步，算一步，实在不行死半路》",
            "烧脑程度不亚于九子夺嫡",
            "建议添加一个答辩区",
            "收藏竟然会跳舞！?",
            "00后现状：人均CEO",
            "制裁侮辱猪神母牛狗"
        ] },
        { name: "抽象流", parent: "离谱标题", items: [
            "拼尽全力依旧无法绷住⚡37⚡",
            "一切心理问题都是因为⭐压抑",
            "七夕奋斗一整晚榨出来的抽象逆天难绷memes",
            "去地狱偷来的抽象逆天难绷memes",
            "抽象到连我自己都不知道在做什么",
            "绷不住了但我还在笑",
            "这视频的含金量约等于零但很好笑",
            "从平行宇宙搬运来的抽象memes",
            "当AI开始制作memes时会发生什么",
            "我的大脑在制作这个视频时处于离线状态",
            "这可能是全网最没有意义的视频",
            "抽象艺术不需要解释只需要感受",
            "我花了三小时做了个没人能看懂的视频",
            "这个标题本身就是个谜语",
            "欢迎来到抽象宇宙的第∞层",
            "当生活太正常时就该看看这个",
            "大事不妙雷霆猪",
            "全B站最没用，最意义不明的视频",
            "巨抽象的逆天难绷视频集锦",
            "看了这个视频的人都说不出话",
            "全屏都是马赛克但你仍然看得津津有味",
            "这件艺术品揭示了宇宙的终极奥秘：你猜是什么",
            "从头到尾只有一个像素点在动但你看完了",
            "标题比视频内容还要长而且毫无关联",
            "当你试图解读这个抽象标题时就已经上当了",
            "熬夜爆肝七十二小时做了一团浆糊出来",
            "如果你看懂了请告诉我因为我自己也没看懂",
            "这段影像其实没有任何含义但我就是想发出来",
            "恭喜你发现了史上最无聊但忍不住看完的视频",
            "当你点击的那一刻就已经输给了我的谜语",
            "我也不知道为什么做这个视频可能只是单纯想发疯",
            "看完后大脑自动宕机重启中",
            "精神状态极度不稳定时产出的电子废料",
            "⚡史 上 最 差 的 一 届⚡",
            "很好，鬼畜区又有新素材了",
            "都怪舅舅的急刹车",
            "无所谓，反正评论区会起标题",
            "没吃过石的可以@好友一起吃",
            "限时任务：截到你认为最帅的图",
            "把人都整神了",
            "炸糊的花生米戴黄帽",
            "当你上厕所有只苍蝇：？？？？？？？？",
            "马了顶大",
            "《男人都有BUG》",
            "假如你一辈子不停的跳舞，会长成什么样？",
            "大菠萝，大菠萝，大菠萝，大菠萝，大菠萝，大菠萝，大菠萝，大菠萝，大菠萝，大菠萝..."
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
                    id: "title_" + i + "_" + j
                });
            }
        }
    },

    search: async function (query, page, type) {
        page = page || 1;
        this._buildFlatItems();
        var flat = this._flatItems;

        // 菜单触发
        if (query === "菜单" || query === "分类" || query === "帮助" || query.indexOf("离谱") !== -1) {
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

        // 搜索匹配
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
                title: m.term.length > 20 ? m.term.substring(0, 20) + "..." : m.term,
                artist: "",
                album: m.term,   // 专辑放完整标题，可复制
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
        return "离谱标题：" + item.album;
    },
    getAlbumInfo: async function () { return { isEnd: true, data: [] }; },
    getMusicSheetInfo: async function () { return { isEnd: true, data: [] }; },
    getArtistWorks: async function () { return { isEnd: true, data: [] }; },
    importMusicItem: async function () { return null; },
    importMusicSheet: async function () { return null; },
    getTopLists: async function () { return []; },
    getTopListDetail: async function () { return { isEnd: true, data: [] }; }
};