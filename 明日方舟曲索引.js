// 朔㷰磐·明日方舟音乐索引
// 功能: 收录明日方舟全部章节/活动/EP/OST曲目，搜索曲名或章节名查看，专辑字段可复制曲名
module.exports = {
    platform: "明日方舟音乐",
    author: "朔㷰磐",
    version: "1.0.0",
    primaryKey: ["id"],
    cacheControl: "no-cache",
    hints: {
        importMusicItem: ["搜索“明日方舟”或“菜单”查看全部章节分类。", "直接搜索曲名定位。", "专辑字段为曲名，点击即可复制。"],
        importMusicSheet: []
    },

    _categories: [
        // 主线章节
        { name: "主线黑暗时代", parent: "明日方舟", items: ["生命流","Synthetech","逃亡 part2","旅途前方"] },
        { name: "主线异卵同生", parent: "明日方舟", items: ["0:00:01"] },
        { name: "主线二次呼吸", parent: "明日方舟", items: ["0:00:01"] },
        { name: "主线急性衰竭", parent: "明日方舟", items: ["旅途前方"] },
        { name: "主线靶向药物", parent: "明日方舟", items: ["近卫局攻坚小队","龙门近卫局"] },
        { name: "主线局部坏死", parent: "明日方舟", items: ["来自雪原的回响","尽归霜雪"] },
        { name: "主线苦难摇篮", parent: "明日方舟", items: ["风雨欲来","往事","迷雾重重"] },
        { name: "主线怒号光明", parent: "明日方舟", items: ["独行长路","冬涤"] },
        { name: "主线慈悲灯塔", parent: "明日方舟", items: ["Merciful Broken Sun","RATIO ULTIMA","Antiphon of the Agonies Old","Succession"] },
        { name: "主线离解复合", parent: "明日方舟", items: ["离解复合"] },
        { name: "主线反常光谱", parent: "明日方舟", items: ["反常光谱","无序频谱","ложь","纯白礼赞"] },

        // SideStory
        { name: "骑兵与猎人", parent: "明日方舟", items: ["猎人"] },
        { name: "火蓝之心", parent: "明日方舟", items: ["Speed of Light","Zone 10⁻⁸","Boiling Blood"] },
        { name: "喧闹法则", parent: "明日方舟", items: ["示岁","独行长路"] },
        { name: "生于黑夜", parent: "明日方舟", items: ["Operation Barrenland","故乡的风","春弦","Curtain Call","Renegade","Requiem","Sparkling Hydraulics","Reversed Time","从那高地上远眺","Everything's Alright","Lily of the Valley","夏浪","El Brillo Solitario","Evolutionary Mechanization","ALIVE","Reconnection","秋绪","Stay Gold","CONFRONT","Lullabye","LITHOS","Tipsy","Rock the Night Away"] },
        { name: "沃伦姆德的薄暮", parent: "明日方舟", items: ["Till the Bell Tolls","冬涤","尽波澜","更阑影","观心","Daydaydream","Gearing Up","Feels","Voices","Immutable","Real Me","Keep the torch","Across the wind","Y1K","Towards Her Light","Bridge to the Dawn","Radiant","Field in the Light","Heal the World","Melting White"] },
        { name: "密林悍将归来", parent: "明日方舟", items: ["Silver Lining","醉飞尘","却阑珊","随意随意呀","Spark for Dream","Прощание","Eternal Flame","March On!","A Grand Adventure","Awaken","Rapier","Bluish Light","Your Star","Ständchen","行文之韵","Magic Theorem","A Long Vacation","All hail Savior!","Undertopia","Ensheath","A Sweet Rendez-vous","Stainless Heart","Rekindle","Thorns In You","Sentenced","Go My Way","Flame Shadow","Snowy Night","A Cold Call"] },
        { name: "玛莉娅·临光", parent: "明日方舟", items: ["定风波","近尘烟","兔兔在哪里？","春岚","Squad Unknown","Endospore","Morning Dew","Dormant Craving","The cure","Stained","Before Summer","Before & After","Mortal Eye","Miss You","Missy","Beautiful & Lovely","Water Quench","Settle Into Ash","Best Moments of...","Revealing","Illuminate","Lessing","Blade Catcher","Snow Parade","Believing"] },
        { name: "孤岛风云", parent: "明日方舟", items: ["Winged Step","浸春芜","清平乐","Yanking","ONE BY ONE","Arsonist","Whistle Stop","Echoism","I Will Touch the Sky","Vows of the Sea","Chase the Light","Warm and Small Light","Mystic Light Quest","Nightmare's Descent","Reforge","Unmask","Bloodstained Oath","Figure It Out","Sailing For","WE","Tranquil Snow"] },
        { name: "画中人", parent: "明日方舟", items: ["更阑影","观心","山水烬尽"] },
        { name: "源石尘行动", parent: "明日方舟", items: ["Operation Barrenland"] },
        { name: "遗尘漫步", parent: "明日方舟", items: ["走过漫漫时空","Immutable"] },
        { name: "覆潮之下", parent: "明日方舟", items: ["Under Tides"] },
        { name: "多索雷斯假日", parent: "明日方舟", items: ["夏浪","El Brillo Solitario","多索雷斯假日"] },
        { name: "长夜临光", parent: "明日方舟", items: ["大骑士领","Radiant"] },
        { name: "风雪过境", parent: "明日方舟", items: ["First Crevasse on the Frozen Lake","Day Train to Lake Siberneherze"] },
        { name: "将进酒", parent: "明日方舟", items: ["客醉久","独衔杯","浊杯照影","敬属春山","寻隐"] },
        { name: "吾导先路", parent: "明日方舟", items: ["潜在危机","殉道之人"] },
        { name: "愚人号", parent: "明日方舟", items: ["深渊梦呓","愚人曲","黄金时代的遗产"] },
        { name: "尘影余音", parent: "明日方舟", items: ["急行","尘影余音"] },
        { name: "绿野幻梦", parent: "明日方舟", items: ["绿野幻梦"] },
        { name: "叙拉古人", parent: "明日方舟", items: ["狼之主"] },
        { name: "照我以火", parent: "明日方舟", items: ["火与灰","深池之影","湮佚诗歌","Flame Shadow"] },
        { name: "登临意", parent: "明日方舟", items: ["定风波","近尘烟","度关山","挽流云","访孤城"] },
        { name: "孤星", parent: "明日方舟", items: ["群星见我","特里蒙的天空","The Coming of the Future","Control's wishes","Ad astra"] },
        { name: "空想花庭", parent: "明日方舟", items: ["窒息","裁决日"] },
        { name: "火山旅梦", parent: "明日方舟", items: ["Misty Memory (Day Version)","Misty Memory (Night Version)","Misty Memory (Acoustic Version)","Effervescence","Counting Sheep","Sheepnado Decimates Nomadic City","Adele's Dream","So Long for Another Summer","Drifting Blossom"] },
        { name: "不义之财", parent: "明日方舟", items: ["The Survivor the Winner","巴伦巨舰"] },
        { name: "崔林特尔梅之金", parent: "明日方舟", items: ["Underneath the Spires","Der Hexenkönig","Visage","心灵之音","Revealing"] },
        { name: "银心湖列车", parent: "明日方舟", items: ["First Crevasse on the Frozen Lake"] },
        { name: "怀黍离", parent: "明日方舟", items: ["浸春芜","清平乐","祥风时雨","击壤歌","赴大荒","锦绣山河"] },
        { name: "太阳甩在身后", parent: "明日方舟", items: ["城市觉醒","大巴扎午后"] },
        { name: "理想城", parent: "明日方舟", items: ["沙滩小憩","滑梯冲浪","水花","冲破穹顶"] },
        { name: "泰拉饭", parent: "明日方舟", items: ["嚎叫进食进行曲","料理的旅程","地下城探秘"] },
        { name: "揭幕者们", parent: "明日方舟", items: ["Don't Waste the Joke","Ambiguous Morality","Menacing Dance","Il Signore del Carnevale"] },
        { name: "出苍白海", parent: "明日方舟", items: ["Las Salvas","El Muerto Vivo","A Toda Vela"] },
        { name: "相见欢", parent: "明日方舟", items: ["相见欢"] },
        { name: "挽歌燃烧殆尽", parent: "明日方舟", items: ["开赴迷雾之中","幻象斑驳"] },
        { name: "红丝绒", parent: "明日方舟", items: ["Suspense (Alt Mix)","Alienation"] },
        { name: "墟", parent: "明日方舟", items: ["刀刃所栖之物","夏日潜行","与你在黄昏街角相遇"] },
        { name: "雪山降临1101", parent: "明日方舟", items: ["圣女蒙召","心之呼号","雪山降临1101"] },
        { name: "未许之地", parent: "明日方舟", items: ["Dr Oxygen Ready For Launch!","递归"] },

        // 故事集
        { name: "战地秘闻", parent: "明日方舟", items: ["生命流"] },
        { name: "烘炉示岁", parent: "明日方舟", items: ["示岁"] },
        { name: "午间逸话", parent: "明日方舟", items: ["午间逸话"] },
        { name: "乌萨斯的孩子们", parent: "明日方舟", items: ["乌萨斯的孩子们"] },
        { name: "踏寻往昔之风", parent: "明日方舟", items: ["踏寻往昔之风"] },
        { name: "此地之外", parent: "明日方舟", items: ["此地之外"] },
        { name: "灯火序曲", parent: "明日方舟", items: ["灯火序曲"] },
        { name: "风暴瞭望", parent: "明日方舟", items: ["风暴瞭望"] },
        { name: "红松林", parent: "明日方舟", items: ["红松林"] },
        { name: "未尽篇章", parent: "明日方舟", items: ["未尽篇章"] },
        { name: "日暮寻路", parent: "明日方舟", items: ["日暮寻路"] },
        { name: "去咧嘴谷", parent: "明日方舟", items: ["微茫"] },
        { name: "眠于树影之中", parent: "明日方舟", items: ["银凇止境"] },
        { name: "我们明日见", parent: "明日方舟", items: ["See you soon"] },
        { name: "春分", parent: "明日方舟", items: ["春分"] },

        // 危机合约
        { name: "荒芜行动", parent: "明日方舟", items: ["Operation Barrenland","荒芜开拓"] },
        { name: "黄铁行动", parent: "明日方舟", items: ["Operation Pyrite","峡谷暗流","黄铁重铸"] },
        { name: "利刃行动", parent: "明日方舟", items: ["Operation Blade"] },
        { name: "燃灰行动", parent: "明日方舟", items: ["Operation Cinder","风蚀尘埃","燃灰不息"] },
        { name: "铅封行动", parent: "明日方舟", items: ["Operation Lead Seal","矿区深秘","铅封将裂"] },
        { name: "光谱行动", parent: "明日方舟", items: ["Operation Spectrum","Operation Spectrum Battle Theme"] },
        { name: "蛮鳞行动", parent: "明日方舟", items: ["Operation Wild Scales"] },
        { name: "松烟行动", parent: "明日方舟", items: ["Operation Pine Soot","松烟留痕"] },
        { name: "寻昼行动", parent: "明日方舟", items: ["Operation Dawnseeker","Fading Sky"] },
        { name: "渊默行动", parent: "明日方舟", items: ["Operation Deepness","涌潮急奏"] },
        { name: "尘环行动", parent: "明日方舟", items: ["Operation Ashring","Crawling Forward!"] },
        { name: "赝波行动", parent: "明日方舟", items: ["Operation Fake Waves","Artificial Currents"] },
        { name: "起源行动", parent: "明日方舟", items: ["Operation Basepoint","ZeroPoint"] },
        { name: "浊燃作战", parent: "明日方舟", items: ["Battleplan Pyrolysis","Wavering Flame"] },
        { name: "潮曦作战", parent: "明日方舟", items: ["Battleplan Underdawn","Chasing Dawn","Unsinkable"] },
        { name: "净罪作战", parent: "明日方舟", items: ["Battleplan Extinguished Sins"] },
        { name: "弧光作战", parent: "明日方舟", items: ["BATTLEPLAN ARCLIGHT","LEVIATION"] },
        { name: "尖灭测试作战", parent: "明日方舟", items: ["尖灭之庭","金铁之刻"] },

        // 集成战略
        { name: "刻俄柏灰蕈迷境", parent: "明日方舟", items: ["会动的......蘑菇？","再来一把！","Encounter","坏家伙来了！"] },
        { name: "傀影与猩红孤钻", parent: "明日方舟", items: ["猩红孤钻","浅尝不止","深层迷醉"] },
        { name: "水月与深蓝之树", parent: "明日方舟", items: ["深蓝之树","倒置树影","族群歌谣","离群悲歌","倾听","共振","大群之殇","旅者征服者","沉溺浅洋","跌坠海渊","正当交易","海愿"] },
        { name: "探索者银凇止境", parent: "明日方舟", items: ["银凇止境","因非冰原","归还荒野","泯灭","猎食","呼魂"] },
        { name: "萨卡兹无终奇语", parent: "明日方舟", items: ["界园志异","自有乾坤","盘桓千古","岁陵漫步"] },

        // 生息演算
        { name: "沙中之火", parent: "明日方舟", items: ["沙中之火","陌域暗访","采掇"] },
        { name: "沙洲遗闻", parent: "明日方舟", items: ["沙洲遗闻"] },

        // 促融共竞 / 矢量突破 / 卫戍协议 / 众生行记
        { name: "促融共竞", parent: "明日方舟", items: ["促融共竞","绿茵大合唱","罗德行进曲","Against the Rising Tide"] },
        { name: "矢量突破", parent: "明日方舟", items: ["Challenger","Inference","Neo-vector","无机物","巫术之夜"] },
        { name: "卫戍协议", parent: "明日方舟", items: ["Protocol","Restore"] },
        { name: "众生行记", parent: "明日方舟", items: ["Touch of the Law","Halo Universalization","The Pilgrimage","Faith Enlightenment","The Birth","Underneath"] },

        // 塞壬唱片角色EP 2019-2026
        { name: "角色EP2019", parent: "明日方舟", items: ["Speed of Light","Zone 10⁻⁸","Boiling Blood"] },
        { name: "角色EP2020", parent: "明日方舟", items: ["示岁","独行长路","Operation Barrenland","故乡的风","春弦","Curtain Call","Renegade","Requiem","Sparkling Hydraulics","Reversed Time","从那高地上远眺","Everything's Alright","Lily of the Valley","夏浪","El Brillo Solitario","Evolutionary Mechanization","ALIVE","Reconnection","秋绪","Stay Gold","CONFRONT","Lullabye","LITHOS","Tipsy","Rock the Night Away"] },
        { name: "角色EP2021", parent: "明日方舟", items: ["Till the Bell Tolls","冬涤","尽波澜","更阑影","观心","Daydaydream","Gearing Up","Feels","Voices","Immutable","Real Me","Keep the torch","Across the wind","Y1K","Towards Her Light","Bridge to the Dawn","Radiant","Field in the Light","Heal the World","Melting White"] },
        { name: "角色EP2022", parent: "明日方舟", items: ["Silver Lining","醉飞尘","却阑珊","随意随意呀","Spark for Dream","Прощание","Eternal Flame","March On!","A Grand Adventure","Awaken","Rapier","Bluish Light","Your Star","Ständchen","行文之韵","Magic Theorem","A Long Vacation","All hail Savior!","Undertopia","Ensheath","A Sweet Rendez-vous","Stainless Heart","Rekindle","Thorns In You","Sentenced","Go My Way","Flame Shadow","Snowy Night","A Cold Call"] },
        { name: "角色EP2023", parent: "明日方舟", items: ["定风波","近尘烟","兔兔在哪里？","春岚","Squad Unknown","Endospore","Morning Dew","Dormant Craving","The cure","Stained","Before Summer","Before & After","Mortal Eye","Miss You","Missy","Beautiful & Lovely","Water Quench","Settle Into Ash","Best Moments of...","Revealing","Illuminate","Lessing","Blade Catcher","Snow Parade","Believing"] },
        { name: "角色EP2024", parent: "明日方舟", items: ["Winged Step","浸春芜","清平乐","Yanking","ONE BY ONE","Arsonist","Whistle Stop","Echoism","I Will Touch the Sky","Vows of the Sea","Chase the Light","Warm and Small Light","Mystic Light Quest","Nightmare's Descent","Reforge","Unmask","Bloodstained Oath","Figure It Out","Sailing For","WE","Tranquil Snow"] },
        { name: "角色EP2025", parent: "明日方舟", items: ["铁花飞","碧い瞳の中に","ARKnoNIGHTS","(Re)union stream","Skeletal Wings","矢量突破无机物","墟","众生行记","Still the Same","From Ash to Fire","Sanctuary Inside","相见欢","促融共竞","挽歌燃烧殆尽","红丝绒","未许之地"] },
        { name: "角色EP2026", parent: "明日方舟", items: ["铁花飞"] },

        // 印象曲与纪念曲
        { name: "印象曲纪念曲", parent: "明日方舟", items: ["Last Of Me","End Like This","Ain't Seen Nothing Like This","Hunter's Song","Day By Day","Blues with you","Unbreakable","When We Were the Most Beautiful","Running In the Dark","Grown-Up's Paradise","Little Wish","CanNot Wait For","春弦","秋绪","冬涤","尽波澜","更阑影","观心","定风波","近尘烟","浸春芜","清平乐","铁花飞"] },

        // 动画相关
        { name: "动画相关", parent: "明日方舟", items: ["Hunter's Song","焰烬曙明","碧い瞳の中に","When We Were the Most Beautiful","KiLLKiSS"] },

        // 合作曲
        { name: "合作曲", parent: "明日方舟", items: ["Last Of Me","End Like This","Ain't Seen Nothing Like This","Day By Day","Unbreakable","Monster","Telescope","INFECTION"] },

        // OST
        { name: "OST1", parent: "明日方舟", items: ["血液","执棋者之骨","永冻症","人性","短兵相接","大柏墟","终局抵抗者","生命流","泛用型自动化解决方案0.3.2.9f2","Synthetech","逃亡 part2","旅途前方"] },
        { name: "OST2", parent: "明日方舟", items: ["尽归霜雪","0:00:01","迷雾重重"] },
        { name: "OST3", parent: "明日方舟", items: ["往事","异乡","黑夜喃语"] },
        { name: "OST4", parent: "明日方舟", items: ["慈悲灯塔","离解复合","反常光谱","无序频谱","ложь","纯白礼赞"] },
        { name: "OST5", parent: "明日方舟", items: ["众生行记","Touch of the Law","Halo Universalization","The Pilgrimage","Faith Enlightenment","The Birth","Underneath"] },
        { name: "火蓝之心原声带", parent: "明日方舟", items: ["Speed of Light","Zone 10⁻⁸","Boiling Blood"] },
        { name: "危机合约原声带1", parent: "明日方舟", items: ["Operation Pyrite","Operation Blade","Operation Cinder"] },
        { name: "危机合约原声带2", parent: "明日方舟", items: ["Operation Lead Seal","Operation Spectrum","Operation Wild Scales"] }
    ],

    _flatItems: null,

    _buildFlatItems: function() {
        if (this._flatItems) return;
        this._flatItems = [];
        for (var i = 0; i < this._categories.length; i++) {
            var cat = this._categories[i];
            var path = (cat.parent ? cat.parent + "/" : "") + cat.name;
            for (var j = 0; j < cat.items.length; j++) {
                this._flatItems.push({ term: cat.items[j], path: path, id: "ak_" + i + "_" + j });
            }
        }
    },

    search: async function (query, page, type) {
        page = page || 1;
        this._buildFlatItems();
        var flat = this._flatItems;

        if (query === "菜单" || query === "分类" || query === "帮助" || query === "明日方舟") {
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