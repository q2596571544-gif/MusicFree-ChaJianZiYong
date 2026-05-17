// 朔㷰磐·音游曲库索引 - 东方Project二创
// 功能: 收录东方Project二创热门曲目约400首，按音乐类型分类，搜索曲名或分类名查看，专辑字段可复制曲名
module.exports = {
    platform: "东方Project二创",
    author: "朔㷰磐",
    version: "1.0.0",
    primaryKey: ["id"],
    cacheControl: "no-cache",
    hints: {
        importMusicItem: ["搜索“东方二创”或“菜单”查看全部音乐类型分类。", "直接搜索曲名或社团名定位。", "专辑字段为曲名，点击即可复制。"],
        importMusicSheet: []
    },

    _categories: [
        {
            name: "超人气传说级",
            parent: "东方二创",
            items: [
                "Bad Apple!! feat.nomico", "魔理沙は大変なものを盗んでいきました", "患部で止まってすぐ溶ける ～狂気の優曇華院",
                "チルノのパーフェクトさんすう教室", "ナイト・オブ・ナイツ", "最終鬼畜妹フランドール・S",
                "サドマミホリック", "Help me, ERINNNNNN!!", "超最終鬼畜妹フランドール・S",
                "マツヨイナイトバグ", "スカーレット警察のゲットーパトロール24時", "絡繰りドール",
                "PRESERVED VAMPIRE", "パリピフラン", "月に叢雲華に風", "色は匂へど散りぬるを",
                "華鳥風月", "泡沫、哀のまほろば", "悪戯センセーション", "有頂天ドリーマーズ",
                "HANIPAGANDA", "HELLOHELL", "Rock 'n' Rock 'n' Beat", "WARNING×WARNING×WARNING",
                "ソリッド", "待チ人ハ来ズ", "Unprivileged Access", "Scream out!",
                "ゆけむり魂温泉Ⅱ", "星の器", "Hands", "壊れた人形のマーチ",
                "Calamity Fortune", "CENSORED!!", "バブルの呪文はシュー！ポッ！プッシュ！",
                "彼方への旅路", "VERMILLION EARTH", "PEEK-A-BOO", "境界の宴", "東方音銃夢"
            ]
        },
        {
            name: "J-POP与流行摇滚",
            parent: "东方二创",
            items: [
                "小悪魔りんご", "手のひらピアニッシモ", "感情ケミストリー", "ミゼラブルの雫", "レプリカの恋",
                "シンデレラアバター", "カフカなる群青へ", "θで突き刺して", "指先チョコレイト", "魂の語りに導かれて",
                "特異点の怪物的感情", "瞳に隠された想ヒ", "静寂のヒトミ", "荒れ果てた地上の唄", "善悪の頂にある真実",
                "無謀さえ美しく、華さえ灰になる", "その神のジレンマに", "綴れぬ森の少女", "零れずの願いゴト", "今、誰が為のかがり火へ",
                "届かぬ願いの果てに", "玉響咲いた背後の永久", "永遠に効く薬", "泡を抱いたままで", "幻想を切り分けて",
                "創造の地平線を見つめて", "花とあめ", "万物の王", "造花であろうとした者", "紅-KURENAI-",
                "濡れた髪に触れられた時", "夜桜に君を隠して", "魔法が生まれた日", "鉄雪", "残響は鳴り止まず",
                "想いが歴史に変わる時", "漸う夢の如く", "涙のアクセサリー", "辿り着くオアシス", "ReStart",
                "面妖にユートピア", "明鏡止水", "閑雲遮月 清風襲花", "三千世界", "森羅万象に触れて",
                "驚かないでね", "君だけのセカイで咲く華", "想秋", "Dreaming", "Alice Maestera",
                "Shanhai Alice in 1884", "The Last Judgement", "Saigetsu", "For Your Pieces", "賢者の極北",
                "Nostalgia", "Starlight Vision", "Hydrangea", "Survive", "月齢11.3のキャンドルマジック",
                "ナルキッソスにさよなら", "CONTEND WiNG", "SHiNY WiNG", "MiRACLE WiNG", "iMPACT WiNG",
                "春の闇", "KINBAKU", "いつもと同じ空", "ドリームキャッチャー", "Live Go Wings", "LEGEND WiNG 2016",
                "Who loves your world", "inverted RAINBOW", "クロス", "Around the world", "Destiny", "winter wind", "Reflect",
                "MIND READER", "OPEN MY EYES", "山の河風", "時の音景", "Soldier Cats", "不滅の夜のレジスタンス", "無辺の自由を求めて",
                "フラッターガール", "笑顔のままで", "A Blossom Day", "恋色限定.", "Urban Girl", "春色小径～fleur Rouge",
                "Liminality", "物凄いあややがぶっちゃけ物凄いうた", "ソリッド", "待チ人ハ来ズ", "フィンガー21",
                "とある深夜の奇想曲", "つむじ風のサウダージ", "今たぶん後ろにいる", "ここは楽園ではないけれど", "紅い姉妹ケーキと賢いモンブラン"
            ]
        },
        {
            name: "电子/Trance/House",
            parent: "东方二创",
            items: [
                "死奏怜音、玲珑ノ终", "绯色月下、狂咲ノ绝", "水のない海", "raging waves", "自己=证明",
                "Modularity of mind", "悦楽カーニヴァル", "伪证・证明", "contrivance", "Lycoris isolation",
                "Urahara ff", "ヒカリマツリ", "Long time ago", "relate", "雾中の境界", "无炎舞踊≠循环",
                "星霜轮廻～Repeat～", "sound of carnation", "Intense desire", "PiPiPiPARU", "I:solation",
                "爱情パンデミック", "Emotional Logic", "infinite universe", "Crescunt Falsa", "Cherish Days",
                "Adrasteia", "梦と光", "clear vision", "LOVE&HAPPY!", "远く舞う华", "noise canceller", "儚",
                "inanimateness", "MOBIUS", "locus", "悖徳数列组曲", "miss illusion", "红 6.0 Records",
                "风导星歌、黎明ノ景", "花は幻想の果てに", "有色透明・无色透明", "Absolute zero -273.15-",
                "解放-Infinity-", "binary star", "几千梦想", "KaNaDE VaRiaTiON", "Fly away", "咏奏妖华～明镜止水～",
                "蒲公英", "盲想", "Colorless night", "梦々～Never end～", "桜∞friendship", "ひとしずく",
                "コモレビ・デイドリーム", "Lucent Wish", "mind rain", "かくて私はルートを辿る", "苍月下零度",
                "Titleless Sights", "终奏叙情曲-lycoris-", "アクセル・オーバー", "囚-トラワレ-", "etching summary",
                "Lazy kiss", "intense", "幽音绝花、缭乱ノ彩", "White Wish", "princess coronation",
                "Blazing Silver", "人形よ问うコトなかれ", "Noisy Noisemaker", "彩祭雷礼", "Soaring princess",
                "Future Megalopolis Kyoto", "Judgment", "Black Lotus", "片月下円舞曲", "One Day's Memory",
                "Steady night", "Run up shooting star", "My direction", "极白色のエデン", "Your Color",
                "dark wing complex", "booklet choir", "Alegro?", "nothing guilty", "songs", "Proof of River",
                "桜影彩艶", "红凰优楼", "Replay & Review", "stillness", "理～Just dreamy～", "梦～KAGEROU～",
                "imaginary number", "the Law of Cause and Effect", "Lemures Prelude", "桜华闪辉",
                "empyreal energy", "Cloudy,flowing", "iconic", "separation", "恋スルキモチ",
                "Endless～また逢えるから～", "Dear me!", "lunareclpse", "silvery white", "Unlimited Colors",
                "Hello!", "绝炎～Burning Beat～", "MELTY MELTY", "Desire", "Beat-Spiral-Beat",
                "解放-Infinity-", "Rot in hell !!", "demarcation line", "Locked My World", "Red Deception",
                "视えない旅路～a final state～", "[人]人～ひと～", "effulgence", "Star Light", "Crescent Night",
                "Non stop dream", "Step-by-Step", "East!", "Fantastic Sequence", "Miniature Garden",
                "Blood clot", "Plastic Memories", "Inscribe your soul", "asterisk", "Missing Sorrow",
                "A.M.2:14", "Fractal Cage", "Black Butterfly"
            ]
        },
        {
            name: "电波/鬼畜/萌系高速",
            parent: "东方二创",
            items: [
                "月夜を隠さない程度の能力？", "歪んだ廊下と月の狂気B", "東方永雀峰", "東方風櫻宴", "東方乙女囃子",
                "東方ですけど何か？", "ごっすんとかのからおけ", "おさいせんとかのからおけ", "二つの翼", "運命狂サディスティック",
                "B・E・E・R", "レータイスパークEx", "東方インストラッシュ", "東方インストライク", "レザマリでもつらくないっ！"
            ]
        },
        {
            name: "EUROBEAT与舞曲",
            parent: "东方二创",
            items: [
                "Castle Rave", "Pure Furies ALR REMIX", "magic evolve", "絡繰りドール", "PRESERVED VAMPIRE", "VERMILLION EARTH"
            ]
        },
        {
            name: "金属/核/硬摇滚",
            parent: "东方二创",
            items: [
                "HANIPAGANDA", "HELLOHELL", "Rock 'n' Rock 'n' Beat", "WARNING×WARNING×WARNING",
                "悪戯センセーション", "有頂天ドリーマーズ", "PEEK-A-BOO", "Grimoire of RED Hell",
                "Death and Rebirth", "Phantom Phannk Orchestra", "幻想クライシス", "ヴァイローチャナの呪い",
                "夢に抱かれて眠る", "満月の楽しみ", "紫と茶の絡み", "彼岸帰航でメタルっぽい何か",
                "死体旅行でメタルっぽい何か", "霊知の太陽信仰でメタルっぽい何か", "兎が舞い降りたのでメタルっぽい何か",
                "霧雨魔理沙でメタルっぽい何か", "体当たり系マジシャン", "懐旧ステップ", "星外赴任観光紀",
                "敵味方の匙加減", "そして彼女は一人", "特臭幻想狂", "異臭幻想狂", "序臭幻想狂",
                "鋭鋒乃風標", "東方満月響", "人間の歴史は愛の炎", "謀叛和楽陣", "積極懐古団",
                "月面弾幕会", "かっぱっぱ考え中"
            ]
        },
        {
            name: "交响/管弦Arrange",
            parent: "东方二创",
            items: [
                "幻想風穴 ～Loop Place", "ナナヒカリ音アソビ", "令・瞑コード零",
                "追憶のシンフォニック・スイート", "Cinderella Cage", "Alice of Alice", "Overwhelm",
                "Echo Peak", "epilogue", "Ancient Groove", "Blue Regret", "風ノ紅", "IS THERE A GOD？",
                "Melodic Battle", "Little Prayer"
            ]
        },
        {
            name: "爵士/融合Arrange",
            parent: "东方二创",
            items: [
                "東方爆音ジャズ系列", "ナナヒカリ音アソビ", "令・瞑コード零", "幻想風穴 ～Loop Place",
                "Ancient Groove", "Green Limits"
            ]
        },
        {
            name: "钢琴/轻音乐Arrange",
            parent: "东方二创",
            items: [
                "幻想遊戯＜激＞", "幻想遊戯＜雅＞", "幻想遊戯＜花＞", "幻想遊戯＜永＞",
                "Bad Apple", "お宇佐さまの素い幡", "千年幻想郷", "Re＊Circulation",
                "帽子とネクタイと白シャツと", "たったひとつの小さな嘘", "月妃余語り"
            ]
        },
        {
            name: "电子纯音/Techno",
            parent: "东方二创",
            items: [
                "Lossy Logic", "Hell", "Echo Peak", "PURELY TECHNO HELL", "Meditation in the Red Wind", "AR10",
                "Unfound", "メイドと血の懐中時計 MRM REMIX", "パリピサクヤ", "Gemini Star",
                "Dead or Alive", "パリピユユコ", "CODE-G"
            ]
        },
        {
            name: "说唱/HipHop",
            parent: "东方二创",
            items: [
                "ゆけむり魂温泉Ⅱ", "星の器 feat.らっぷびと", "Hands feat.AO,らっぷびと"
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
                this._flatItems.push({ term: cat.items[j], path: path, id: "th2_" + i + "_" + j });
            }
        }
    },

    search: async function (query, page, type) {
        page = page || 1;
        this._buildFlatItems();
        var flat = this._flatItems;

        if (query === "菜单" || query === "分类" || query === "帮助" || query.toLowerCase().indexOf("东方二创") !== -1) {
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