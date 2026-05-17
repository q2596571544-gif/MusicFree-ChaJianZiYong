// 朔㷰磐·米哈游及其它二游音乐索引
// 功能: 收录原神/崩坏星穹铁道/绝区零/鸣潮/重返未来1999/物华弥新 官方音乐
// 搜索游戏名或“菜单”查看章节，搜索曲名直接定位，专辑字段可复制曲名
module.exports = {
    platform: "二游曲索引",
    author: "朔㷰磐",
    version: "1.0.0",
    primaryKey: ["id"],
    cacheControl: "no-cache",
    hints: {
        importMusicItem: ["搜索游戏名或“菜单”查看全部分类。", "直接搜索曲名定位。", "专辑字段为曲名，点击即可复制。"],
        importMusicSheet: []
    },

    _categories: [
        // ==================== 原神 ====================
        { name: "原神-角色演示PV", parent: "原神", items: ["神女劈观·唤情","让风告诉你","奥奇坎金曲","何妄何执","皎洁的笑颜","岩壑之崩","尘世闲游","喧繁之港","神狐的祝福","纯真的歌谣","我不曾忘记","快意新词","飞彩镌流年","风花的邀约","明霄升海平","叶落荒波","艾尔海森角色PV","甘露花海","时暮的思眷","咏歌与凯旋","吞星之鲸","净念相继","太古时光的遗孤","褪色的眷恋","六轮一露狂诗曲","三千娑世御咏歌","天遒歌","终天的闭幕曲","山巅雪国的记忆","冰风的协奏曲","薙除杂妄","战斗的秘仪","流光过隙","永无谢幕的演出","原神主题曲","蒙德主题曲","稻妻主题曲","须弥主题曲","枫丹主题曲","纳塔主题曲","璃月主题曲"] },
        { name: "原神-地区主题曲", parent: "原神", items: ["风与异乡人","风与牧歌之城","皎月云间之梦","闪耀的群星","漩涡、落星与冰山","珍珠之歌","寂远无妄之国","精选原声带","闪耀的群星Vol.2","佚落迁忘之岛","千岩旷望","珍珠之歌2","流星的轨迹","智妙明论之林","闪耀的群星Vol.3","啁哳流变之砂","珍珠之歌3","白露澈明之泉","闪耀的群星Vol.4","万流始源之海","沉玉沐芳","金律永谐","珍珠之歌4","炽炎交逐之原","遥古喁望之阳","闪耀的群星Vol.5"] },
        { name: "原神-战斗音乐", parent: "原神", items: ["疾如猛火","寒光裂涛","堙谷的铙歌","狮尾之舞","何妄何执","皎洁的笑颜","岩壑之崩","尘世闲游","喧繁之港","神狐的祝福","纯真的歌谣","我不曾忘记","快意新词","六轮一露狂诗曲","三千娑世御咏歌","天遒歌","终天的闭幕曲","山巅雪国的记忆","冰风的协奏曲","薙除杂妄","战斗的秘仪","流光过隙","永无谢幕的演出","吞星之鲸","净念相继","太古时光的遗孤","褪色的眷恋","咏歌与凯旋","飞彩镌流年","风花的邀约","明霄升海平","甘露花海","时暮的思眷"] },
        { name: "原神-场景探索", parent: "原神", items: ["宽怀的传说","漾影逐波","逸兴欢跃","安谧的海原","悠游逐浪","渊水遗落之城","深泓浮湛","纵然时岁流转","叶落荒波","飞彩镌流年","风花的邀约","明霄升海平","甘露花海","净念相继","太古时光的遗孤","褪色的眷恋","咏歌与凯旋","吞星之鲸","时暮的思眷","三千娑世御咏歌","六轮一露狂诗曲","天遒歌","终天的闭幕曲","山巅雪国的记忆","冰风的协奏曲","薙除杂妄","战斗的秘仪","流光过隙","永无谢幕的演出"] },
        { name: "原神-活动与EP", parent: "原神", items: ["飞彩镌流年EP","轻涟EP","烬火EP","未行之路EP","经过EP","青灯玉砚EP","神女劈观·唤情","让风告诉你","奥奇坎金曲","我不曾忘记","纯真的歌谣","尘世闲游","时暮的思眷","咏歌与凯旋","吞星之鲸","净念相继","太古时光的遗孤","褪色的眷恋","飞彩镌流年","风花的邀约","明霄升海平","甘露花海","疾如猛火","寒光裂涛","堙谷的铙歌","狮尾之舞","宽怀的传说","漾影逐波","逸兴欢跃","安谧的海原","悠游逐浪","渊水遗落之城","深泓浮湛","纵然时岁流转"] },

        // ==================== 崩坏：星穹铁道 ====================
        { name: "崩铁-主题曲与OP", parent: "崩坏：星穹铁道", items: ["不眠之夜","星间旅行","何者","水龙吟","在银河中孤独摇摆","拂晓","耀斑","使一颗心免于哀伤","昔涟","野火","若我不曾见过太阳","不虚此行","不乱不破","痴人说梦","天生鬼才","星间旅行Interstellar Journey","不眠之夜WHITE NIGHT","何者Nameless Faces","不虚此行On the Journey","昔涟Ripples of Past Reverie","耀斑Flares of the Blazing Sun","不乱不破No Dazzle No Break","痴人说梦Ravings","神说要有笑","天生鬼才Side Quest King"] },
        { name: "崩铁-角色EP单曲", parent: "崩坏：星穹铁道", items: ["空气蛹","希望有羽毛和翅膀","在银河中孤独摇摆","使一颗心免于哀伤","昔涟","若我不曾见过太阳","不虚此行","不乱不破","痴人说梦","天生鬼才","卡卡瓦夏","石心十人","谐乐鸽","星海浮沉录","白日梦酒店","一起出去玩嘛","阮声落华裳","失控","雪融于烬","长生梦短","行于命途","星空剧场","行于命途2","飞来波的圣状上篇","飞来波的圣状下篇","行于命途3","星空剧场2","洞穴寓言上篇","行于命途4","洞穴寓言中篇","洞穴寓言下篇","星空剧场3","行于命途5"] },
        { name: "崩铁-战斗与BOSS战", parent: "崩坏：星穹铁道", items: ["野火","水龙吟","耀斑","拂晓","何者","星间旅行","不眠之夜","使一颗心免于哀伤","在银河中孤独摇摆","希望有羽毛和翅膀","若我不曾见过太阳","不虚此行","不乱不破","痴人说梦","天生鬼才","卡卡瓦夏","石心十人","谐乐鸽","星海浮沉录","失控","雪融于烬","长生梦短","行于命途","星空剧场","空气蛹"] },
        { name: "崩铁-场景与剧情", parent: "崩坏：星穹铁道", items: ["白日梦酒店","一起出去玩嘛","阮声落华裳","谐乐鸽","星海浮沉录","卡卡瓦夏","石心十人","失控","雪融于烬","长生梦短","行于命途","星空剧场","行于命途2","飞来波的圣状上篇","飞来波的圣状下篇","行于命途3","星空剧场2","洞穴寓言上篇","行于命途4","洞穴寓言中篇","洞穴寓言下篇","星空剧场3","行于命途5","星间旅行","不眠之夜","何者","不虚此行","昔涟","耀斑","不乱不破","空气蛹","痴人说梦","神说要有笑","天生鬼才","使一颗心免于哀伤","在银河中孤独摇摆","希望有羽毛和翅膀","水龙吟"] },

        // ==================== 绝区零 ====================
        { name: "绝区零-角色EP", parent: "绝区零", items: ["BITE! 咬合力","原色","DAMIDAMI","食通万物修心修身","Gold Sign_f","FURYON 狂怒觉醒","千万次初见","晓","My Curse My Fate","Stars Align 当群星交汇","乐园梦游计","艾莲EP","朱鸢EP","妮可EP","比利EP","安比EP","猫又EP","可琳EP","11号EP","珂蕾妲EP","格莉丝EP","丽娜EP","莱卡恩EP","苍角EP","露西EP","派派EP","赛斯EP","简EP","青衣EP","柏妮思EP"] },
        { name: "绝区零-场景与战斗", parent: "绝区零", items: ["极限委托","极限委托PV原声集","天琴座","Loading","BITE! 咬合力","原色","DAMIDAMI","食通万物修心修身","Gold Sign_f","FURYON 狂怒觉醒","千万次初见","晓","My Curse My Fate","Stars Align","乐园梦游计"] },
        { name: "绝区零-专辑原声", parent: "绝区零", items: ["极限委托","极限委托PV原声集","天琴座","Loading","BITE! 咬合力","原色","DAMIDAMI","食通万物修心修身","Gold Sign_f","FURYON 狂怒觉醒","千万次初见","晓","My Curse My Fate","Stars Align","乐园梦游计"] },

        // ==================== 鸣潮 ====================
        { name: "鸣潮-主题曲与EP", parent: "鸣潮", items: ["未尽之歌","Daisy Crown","彼岸的安魂曲","Against the Tide","Running For Your Life","沉沦幻海","灵魂之王","Everflow","Lulala! Lululala!","下班","今夜不属于月亮","未黯之光","Endless Pulse","远光点","Beautiful Tomorrow","不辞远","破茧之华","Catch Me If You Can","Unwritten in the Stars","飞行雪绒","往岁乘霄","月华如愿","ONE","给你呀"] },
        { name: "鸣潮-场景探索", parent: "鸣潮", items: ["致新世界","五浔深处","我","白日的入梦曲","群星交错Vol.1","幻昼狂想","夜回奇宴","真伪之塔","悠久诗篇","永不结束的歌","旋律渐叙","酣欢荣耀","无名长诗","梦寐深海","逐日者的征行","不可度量的独一","若期待鎏金","旧夜群星闪耀时"] },
        { name: "鸣潮-战斗音乐", parent: "鸣潮", items: ["Against the Tide","Running For Your Life","沉沦幻海","灵魂之王","Everflow","Lulala! Lululala!","下班","今夜不属于月亮","未黯之光","Endless Pulse","远光点","Beautiful Tomorrow","不辞远","破茧之华","Catch Me If You Can","Unwritten in the Stars","飞行雪绒","往岁乘霄","月华如愿","ONE","未尽之歌","Daisy Crown","彼岸的安魂曲","鸣潮战斗音乐1"] },

        // ==================== 重返未来：1999 ====================
        { name: "重返未来-版本主题曲", parent: "重返未来：1999", items: ["酒神颂","雨中曲 dust to dust","与火同行 Go Together","Catch You Now","心流光","行过的路","雷米特杯失窃案","绿湖噩梦","行至摩卢旁卡","洞穴的囚徒","复兴乌卢鲁运动会","朔日手记","今夜星光灿烂","再见来亚什基","孤独之歌","飞驰明日之城","77号往事","忧郁的热带","东区黎明","地球上最后的夜晚","唐人街影话","疯癫与文明","1987宇宙组曲","1999版本主题曲1"] },
        { name: "重返未来-场景剧情", parent: "重返未来：1999", items: ["苏芙比府邸BGM","暴雨·维尔汀印象曲","1.7主线BOSS战音乐","1.5版本音乐","1.7歌剧音乐","酒神颂","雨中曲","与火同行","Catch You Now","心流光","行过的路","雷米特杯","绿湖噩梦","行至摩卢旁卡","洞穴的囚徒","复兴乌卢鲁运动会","朔日手记","今夜星光灿烂","再见来亚什基","孤独之歌","飞驰明日之城","77号往事"] },

        // ==================== 物华弥新 ====================
        { name: "物华弥新-主题曲与活动", parent: "物华弥新", items: ["清音迭奏","航灯","协韵行歌一","协韵行歌二","协韵行歌三","籁古新音","初逢音","初逢音二","初逢音三","散乐单曲一","散乐单曲二","散乐单曲三","散乐单曲四","散乐单曲五","活动音乐一","活动音乐二","活动音乐三","活动音乐四","活动音乐五"] },
        { name: "物华弥新-场景与战斗", parent: "物华弥新", items: ["场景BGM一","场景BGM二","场景BGM三","场景BGM四","场景BGM五","战斗音乐一","战斗音乐二","战斗音乐三","战斗音乐四","战斗音乐五","角色曲一","角色曲二","角色曲三","角色曲四","角色曲五","Cytus Re联动曲一","Cytus Re联动曲二","Cytus Re联动曲三","Cytus Re联动曲四","Cytus Re联动曲五"] }
    ],

    _flatItems: null,

    _buildFlatItems: function() {
        if (this._flatItems) return;
        this._flatItems = [];
        for (var i = 0; i < this._categories.length; i++) {
            var cat = this._categories[i];
            var path = (cat.parent ? cat.parent + "/" : "") + cat.name;
            for (var j = 0; j < cat.items.length; j++) {
                this._flatItems.push({ term: cat.items[j], path: path, id: "mi_" + i + "_" + j });
            }
        }
    },

    search: async function (query, page, type) {
        page = page || 1;
        this._buildFlatItems();
        var flat = this._flatItems;

        var gameNames = ["原神","崩坏：星穹铁道","绝区零","鸣潮","重返未来：1999","物华弥新"];
        var isMenu = query === "菜单" || query === "分类" || query === "帮助";
        for (var g = 0; g < gameNames.length; g++) {
            if (query === gameNames[g]) { isMenu = true; break; }
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