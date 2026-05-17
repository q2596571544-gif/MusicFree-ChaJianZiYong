// 朔㷰磐·综合名词索引
// 功能: 收录键政、丧葬、经济、哲学等领域名词，搜索关键词查看，专辑字段可复制名词
module.exports = {
    platform: "名词",
    author: "朔㷰磐",
    version: "1.0.0",
    primaryKey: ["id"],
    cacheControl: "no-cache",
    hints: {
        importMusicItem: ["搜索“名词”或“菜单”查看分类。", "搜索关键词匹配名词。", "专辑字段为名词，点击即可复制。"],
        importMusicSheet: []
    },

    _categories: [
        {
            name: "网络键政",
            parent: "名词索引",
            items: [
                "入关学", "粉红", "小粉红", "左圈", "右圈", "境外势力", "自由", "口罩时期", "看片",
                "民族名义", "国家立场", "宝宝巴士", "巴博斯", "户晨风", "MHYYYY", "讲师", "波尔布特陷阱", "无知之幕", "哈基米",
                "键政", "键政圈", "乳法", "辱华", "政治正确", "白左", "黑命贵", "女拳", "男拳", "二极管", "理中客", "加速主义",
                "塔西佗陷阱", "修昔底德陷阱", "中等收入陷阱", "马尔萨斯陷阱", "内卷", "躺平", "摆烂", "润", "远程养殖", "来电了",
                "50万", "1450", "4v", "蛙蛙", "台巴子", "井蛙", "南波湾", "惠台", "穷台", "留岛不留人", "核平", "虽远必诛",
                "战狼", "爱国贼", "碍国者", "低级红", "高级黑", "低级红高级黑", "低级绿", "指鼠为鸭", "指鸭为鼠", "鼠头鸭脖", "鸭脖鼠头",
                "恶意讨薪", "恶意返乡", "恶意上访", "恶意提问", "恶意还款", "恶意怀孕", "合法伤害权", "口袋罪", "寻衅滋事", "非法经营",
                "煽动颠覆国家政权", "妄议", "喝茶", "查水表", "跨省", "训诫", "社会性死亡", "社死", "公开处刑", "游街示众",
                "大字报", "扣帽子", "打棍子", "上纲上线", "文字狱", "因言获罪", "妄议中央", "妄议朝廷", "妄议朝政", "妄议大政方针"
            ]
        },
        {
            name: "丧葬哀悼",
            parent: "名词索引",
            items: [
                "初终", "讣告", "报庙", "挂孝帘", "小殓", "大殓", "含殓", "成服", "赐杖", "五服",
                "披麻戴孝", "守灵", "吊唁", "辞灵", "出殡", "发引", "引魂幡", "摔盆", "安葬", "招魂",
                "复山", "超度", "放泼洒", "升龛", "打丧鼓", "莫搓搓", "赶尸", "停棺待葬", "陶器葬",
                "纸扎", "明器", "殉葬", "陪葬", "陵墓", "墓志铭", "祭文", "悼词", "哀辞", "挽联",
                "挽幛", "花圈", "黑纱", "白花", "默哀", "哀乐", "追悼会", "遗体告别", "火化", "骨灰",
                "骨灰盒", "灵堂", "灵位", "牌位", "神主", "遗像", "长明灯", "烧七", "做七", "七七",
                "百日", "周年", "忌日", "扫墓", "祭祖", "寒衣节", "中元节", "清明节", "盂兰盆会", "水陆法会",
                "焰口", "蒙山施食", "往生", "净土", "极乐世界", "西方接引", "轮回", "投胎", "孟婆汤", "奈何桥",
                "望乡台", "鬼门关", "黄泉路", "阴间", "冥府", "阎王", "判官", "牛头马面", "黑白无常", "城隍", "土地"
            ]
        },
        {
            name: "经济金融",
            parent: "名词索引",
            items: [
                "GDP", "CPI", "PPI", "PMI", "M0", "M1", "M2", "M3", "LPR", "MLF", "SLF", "PSL", "OMO",
                "QE", "QT", "零利率", "负利率", "通货膨胀", "通货紧缩", "滞胀", "流动性", "货币政策", "财政政策",
                "加息", "降息", "降准", "升值", "贬值", "汇率", "外汇储备", "贸易顺差", "贸易逆差", "关税",
                "壁垒", "自由贸易", "保护主义", "供给侧", "需求侧", "去杠杆", "去产能", "去库存", "降成本", "补短板",
                "硬着陆", "软着陆", "中等收入陷阱", "基尼系数", "恩格尔系数", "灰犀牛", "黑天鹅", "明斯基时刻",
                "郁金香泡沫", "南海泡沫", "密西西比泡沫", "大萧条", "次贷危机", "欧债危机", "金融危机", "经济危机",
                "经济周期", "繁荣", "衰退", "萧条", "复苏", "边际效用", "机会成本", "沉没成本", "比较优势", "绝对优势",
                "看不见的手", "看得见的手", "凯恩斯主义", "货币主义", "新自由主义", "奥地利学派", "芝加哥学派", "供给学派",
                "理性预期", "有效市场假说", "随机漫步", "羊群效应", "博傻理论", "庞氏骗局", "老鼠仓", "内幕交易",
                "操纵市场", "IPO", "上市", "退市", "借壳上市", "重组", "并购", "市值管理", "高送转", "除权",
                "除息", "填权", "贴权", "涨停板", "跌停板", "熔断", "做空", "做多", "杠杆", "配资",
                "爆仓", "穿仓", "多头", "空头", "逼空", "轧空", "套牢", "解套", "割肉", "止损", "止盈"
            ]
        },
        {
            name: "哲学理论",
            parent: "名词索引",
            items: [
                "形而上学", "辩证法", "唯物主义", "唯心主义", "一元论", "二元论", "多元论", "可知论", "不可知论",
                "决定论", "非决定论", "宿命论", "自由意志", "因果律", "目的论", "机械论", "有机论",
                "实体", "属性", "本质", "现象", "内容", "形式", "原因", "结果", "必然性", "偶然性",
                "可能性", "现实性", "感性", "知性", "理性", "直觉", "顿悟", "经验", "先验", "超验",
                "本体", "认识", "真理", "谬误", "绝对真理", "相对真理", "实践", "实验", "归纳", "演绎",
                "分析", "综合", "悖论", "二律背反", "异化", "物化", "对象化", "外化", "内化", "扬弃",
                "否定之否定", "正反合", "主奴辩证法", "存在", "此在", "曾在", "将在", "向死而生", "烦", "畏",
                "沉沦", "常人", "共在", "语言是存在之家", "诗意栖居", "逻各斯", "努斯", "理念", "形式", "质料",
                "潜能", "现实", "四因说", "第一推动者", "我思故我在", "天赋观念", "白板说", "经验论", "唯理论",
                "独断论", "批判哲学", "物自体", "绝对命令", "人为自然立法", "人为道德立法", "理性为自己立法",
                "实体即主体", "绝对精神", "历史与逻辑统一", "世界精神", "理性的狡计", "存在的都是合理的", "合理的都是存在的",
                "悲苦意识", "苦恼意识", "自我意识", "主人与奴隶", "烦恼的自我意识", "快乐的自我意识", "静观的自我意识",
                "宗教的自我意识", "分析的自我意识", "综合的自我意识", "直观的自我意识", "概念的自我意识", "判断的自我意识",
                "推理的自我意识", "欲望", "生命", "搏斗", "承认", "普遍性", "个别性", "特殊性"
            ]
        }
    ],

    _flatItems: null,

    _buildFlatItems: function () {
        if (this._flatItems) return;
        this._flatItems = [];
        for (var i = 0; i < this._categories.length; i++) {
            var cat = this._categories[i];
            var path = (cat.parent ? cat.parent + "/" : "") + cat.name;
            for (var j = 0; j < cat.items.length; j++) {
                this._flatItems.push({
                    term: cat.items[j],
                    path: path,
                    id: "term_" + i + "_" + j
                });
            }
        }
    },

    search: async function (query, page, type) {
        page = page || 1;
        this._buildFlatItems();
        var flat = this._flatItems;

        // 菜单触发词
        if (query === "菜单" || query === "分类" || query === "帮助" || query === "名词") {
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

        // 关键词搜索
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
                album: m.term,   // 专辑放完整名词，可复制
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
        return "名词：" + item.album;
    },
    getAlbumInfo: async function () { return { isEnd: true, data: [] }; },
    getMusicSheetInfo: async function () { return { isEnd: true, data: [] }; },
    getArtistWorks: async function () { return { isEnd: true, data: [] }; },
    importMusicItem: async function () { return null; },
    importMusicSheet: async function () { return null; },
    getTopLists: async function () { return []; },
    getTopListDetail: async function () { return { isEnd: true, data: [] }; }
};