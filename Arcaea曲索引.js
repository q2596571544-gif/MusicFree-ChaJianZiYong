// 朔㷰磐·音游曲库索引 - Arcaea
// 功能: 收录Arcaea全部章节/曲包曲目，搜索曲名或章节名查看，专辑字段可复制曲名
module.exports = {
    platform: "Arcaea曲库",
    author: "朔㷰磐",
    version: "1.0.0",
    primaryKey: ["id"],
    cacheControl: "no-cache",
    hints: {
        importMusicItem: ["搜索“Arcaea”或“菜单”查看全部章节分类。", "直接搜索曲名定位。", "专辑字段为曲名，点击即可复制。"],
        importMusicSheet: []
    },

    _categories: [
        // ==================== 免费包 ====================
        { name: "Arcaea-免费包", parent: "Arcaea", items: ["Sayonara Hatsukoi","Fairytale","Vexaria","Rise","Lucifer","Snow White","Shades of Light in a Transcendent Realm","Babaroque","Lost Civilization","GOODTEK (Arcaea Edit)","qualia -ideaesthesia-","Dement after legend","Dandelion","Infinity Heaven","Anokumene","Brand new world","Chronostasis","Kanagawa Cyber Culvert","Clotho and the stargazer","Ignotus","Harutopia Utopia of Spring","Rabbit In The Black Room","One Last Drive","Dreamin' Attraction!!","Red and Blue","Reinvent","Syro","Blaster","Cybernecia Catharsis","inkar-usi","Suomi","Bookmaker (2D Version)","Illegal Paradise","Nhelv","LunarOrbit -believe in the Espebranch road-","Purgatorium","Rugie","Grimheart","ReviXy","VECTOЯ","SUPERNOVA","Diode","FREEF4LL","Monochrome Princess","Senkyou","world.execute(me);","Oblivia","Ävril -Flicka i krans-","NULCTRL","Sakura Fubuki","DDD","Dancin' on a Cat's Paw","san skia","Altair (feat. spiLa)","Redraw the Colorless World","Trap Crow","Dialnote","Remind the Souls (Short Version)","The Formula","Jingle","Hidden Rainbows of Epicurus","SATISFACTION","Dematerialized","Gimme Caramel Popcorn!"] },

        // ==================== World Extend ====================
        { name: "Arcaea-World Extend 4", parent: "Arcaea", items: ["mod","Paradox Palette","Wake in Hour","Particle","Xxium and Purple haze","taboo tears you up 2017","undefined","+","OMAJINAI","The Forgotten Forest Haven","Vallista","3rd Avenue","Riot in the System","MIRROR - kamome sano remix"] },

        // ==================== Memory Archive ====================
        { name: "Arcaea-Memory Archive", parent: "Arcaea", items: ["DataErr0r","CROSS†SOUL","Your voice so... feat. Such","Impure Bird","Auxesia","Modelista","Surrender","Yosakura Fubuki","Metallic Punisher","carmine:scythe","guardina","Be There","Call My Name feat. Yukacco","dropdead","Fallensquare","Alexandrite","Astral tale","Phantasia","Empire of Winter","Libertas","Dot to Dot feat. shully","Dreadnought","Mirzam","Heavenly caress","Filament","Avant Raze","BATTLE NO.1","La'qryma of the Wasteland","Einherjar Joker","IZANA","SAIKYO STRONGER","amygdata","Altale","Feels So Right feat. Renko","Scarlet Cage","Terigma","MAHOROBA","BADTEK","Malicious Mischance","BUCHiGiRE Berserker","Galaxy Friends","Xeraphinite","Xanatos","AttraqtiA","GIMME DA BLOOD","Can I Friend You on Bassbook? Lol","THE ULTIMACY","REKKA RESONANCE","Sheriruth (Laur Remix)","Evening in Scarlet","goldenslaughterer","lastendconductor","Redolent Shape","Summer Fireworks of Love","init()","INTERNET OVERDOSE","Kissing Lucifer","Macrocosmic Modulation","NEO WINGS","Head BONK ache","Aurgelmir","PICO-Pico-Translation!","μ","PUPA","cocorocosmetic","Free Myself","Capella","NULL APOPHENIA","Crimson Throne","Manic Jeer","Hiiro Gekka","Kyoushou no Zetsu (nayuta 2017 ver.)","PRIMITIVE LIGHTS","New York Back Raise","The Survivor (Game Edit)","To the Milky Way","Lost in the Abyss","Galactic Love","INTERNET YAMERO","SACRIFICE feat. ayame","To the Furthest Dream","B.B.K.K.B.K.K.","Wish Upon a Snow","LIVHT MY WΔY","Kanbu de Tomatte Sugu Tokeru","Luna Rossa","Innocence","IONOSTREAM","Masquerade Legion","KYOREN ROMANCE","Qovat","MIRINAE","ultradiaxon-N3","Distorted Fate","Floating World","Chromafill","Désive","Twilight Concerto","Beautiful Dreamer","Back to Basics","HYPER VISION","STARGATE EXTREME","shrink","Rain of Conflict in a Radiant Abyss","Gensou no Satellite","Dies irae","Spirit of the Dauntless","Third Sun","Crimson Quartz","MEGALOVANIA (Camellia Remix)","Placebo Battler","Shinchoku Doudesuka?","Dull Blade","Tic! Tac! Toe!","Don't Die","Miles","Acheron","Eternity Break","Xterfusion","Angel's Boundary","Grandspell","Paranoid Arc","Subsphere in Eclosion","The 'Raft' taught me: your heart will always find a way.","+1(UNKNOWN)-NUMBER","Cryogenic","GOODRAGE","Desertrealm"] },

        // ==================== Extend Archive ====================
        { name: "Arcaea-Extend 1", parent: "Arcaea", items: ["Vivid Theory","1F√","Gekka (Short Version)","Give Me a Nightmare","Black Lotus","Faint Light (Arcaea Edit)","CROSS†OVER","Lapis","Purple Verse","Glow","enchanted love","Bamboo","Life is PIANO","Vandalism","Turbocharger","False Embellishment","HIVEMIND","blue comet","ENERGY SYNERGY MATRIX","G e n g a o z o"] },
        { name: "Arcaea-Extend 2", parent: "Arcaea", items: ["Tsuki ni Murakumo, Hana ni Kaze","MANTIS (Arcaea Ultra-Bloodrush VIP)","Astra walkthrough","World Fragment III(radio edit)","Chronicle","Let's Rock (Arcaea mix)","GIMMICK","Lost Emotion feat. nomico","Lawless Point","Hybris (The one who shattered)","Ultimate taste","RGB","Kanjou no Matenrou Arr.Demetori","Dynitikós","Amekagura","FANTA5Y","Alone & Lorn","felys final remix","On And On!! feat. Jenga","Aleph-0"] },
        { name: "Arcaea-Extend 3", parent: "Arcaea", items: ["HELLOHELL","MORNINGLOOM","〇、","Awaken In Ruins","Lethal Voltage","Leave All Behind","Old School Salvage","Distortion Human","epitaxy","FURETE-MITAI","Hailstone","Prayer","astral.exe","Black Mirror on the Wall","TRPNO","τ (tau)","Won't Back Down","Someday","disintergration","ROST PAGE GENE"] },

        // ==================== 主线故事包 ====================
        { name: "Arcaea-Eternal Core", parent: "Arcaea", items: ["cry of viyella","I've heard it said","memoryfactory.lzh","Relentless","Lumia","Essence of Twilight","PRAGMATISM","Sheriruth","Solitary Dream"] },
        { name: "Arcaea-Vicious Labyrinth", parent: "Arcaea", items: ["Iconoclast","SOUNDWiTCH","trappola bewitching","conflict","Axium Crisis","Grievous Lady"] },
        { name: "Arcaea-Luminous Sky", parent: "Arcaea", items: ["Maze No.9","The Message","Sulfur","Halcyon","Ether Strike","Fracture Ray"] },
        { name: "Arcaea-Adverse Prelude", parent: "Arcaea", items: ["Saint or Sinner","Vindication","Heavensdoor","Ringed Genesis","BLRINK"] },
        { name: "Arcaea-Black Fate", parent: "Arcaea", items: ["Equilibrium","Antagonism","Lost Desire","Dantalion","#1f1e33","Tempestissimo","Arcahv"] },
        { name: "Arcaea-Final Verdict", parent: "Arcaea", items: ["Defection","Infinite Strife","World Ender","Pentiment","Arcana Eden","Testify","Loveless Dress","Last","Callima Karma"] },
        { name: "Arcaea-Lasting/Severed Eden", parent: "Arcaea", items: ["WAIT FOR DAWN","Raven's Pride","Rise of the World","UNKNOWN LEVELS","Abstruse Dilemma","Primeval Texture","Technicolour","Logos","Ego Eimi","Arghena","Transient Space","Nameless Passion","TeraVolt"] },
        { name: "Arcaea-Absolute Nihil", parent: "Arcaea", items: ["In Vain","Hypnotize","Ashen 6oundary","Judgement","ALTER EGO"] },
        { name: "Arcaea-Lucent Historia", parent: "Arcaea", items: ["Swan Song","Renegade","Rays of Remnant","Breach of Faith","Lament Rain","Designant.","Astral Quantization"] },
        { name: "Arcaea-Liminal Eclipse", parent: "Arcaea", items: ["Viola Illyria","Vainspire","No Way Back","ANDORXOR","Undying Macula"] },

        // ==================== 支线故事包 ====================
        { name: "Arcaea-Crimson Solace", parent: "Arcaea", items: ["Paradise","Flashback","Flyburg and Endroll","Party Vinyl","Nirv lucE","GLORY：ROAD"] },
        { name: "Arcaea-Ambivalent Vision", parent: "Arcaea", items: ["Blossoms","Romance Wars","Moonheart","Genesis","Lethaeus","corps-sans-organes"] },
        { name: "Arcaea-Binary Enfold", parent: "Arcaea", items: ["next to you","Silent Rush","Strongholds","Memory Forest","Singularity","Cosmica","Ascent","Live Fast Die Young"] },
        { name: "Arcaea-Absolute Reason", parent: "Arcaea", items: ["Antithese","Black Territory","Corruption","Vicious Heroism","Cyaegha"] },
        { name: "Arcaea-Sunset Radiance", parent: "Arcaea", items: ["Chelsea","AI[UE]OON","A Wandering Melody of Love","Tie me down gently","Valhalla:0","Hotarubi no Yuki"] },
        { name: "Arcaea-Ephemeral Page", parent: "Arcaea", items: ["Eccentric Tale","Alice à la mode","Alice's Suitcase","Jump","Felis","Beside You","Heart Jackin'","To: Alice Liddell"] },
        { name: "Arcaea-Divided Heart", parent: "Arcaea", items: ["First Snow","Blue Rose","Blocked Library","neo kosmo","Lightning Screw"] },
        { name: "Arcaea-Esoteric Order", parent: "Arcaea", items: ["Paper Witch","Crystal Gravity","Far Away Light","Löschen","Aegleseeker","Seclusion","Coastal Highway","ΟΔΥΣΣΕΙΑ","Overwhelm","Small Cloud Sugar Candy","AlterAle","Divine Light of Myriad"] },
        { name: "Arcaea-Extant Anima", parent: "Arcaea", items: ["See the Lights!","Scarlet Lunar Empress","Dual Dependency","Lilly","Extradimensional Cosmic Phenomenon","Factorder","incomplete the one","CHAOSBLAST","Welcome, Queen of Fiction.","AlterGate"] },

        // ==================== 联动包 ====================
        { name: "Arcaea-Dynamix联动", parent: "Arcaea", items: ["Moonlight of Sand Castle","REconstruction","Evoltex (poppi'n mix)","Oracle","aterlbus"] },
        { name: "Arcaea-Lanota联动", parent: "Arcaea", items: ["Dream goes on","Journey","Specta","Quon","cyanine","Prism","Protoflicker","Stasis"] },
        { name: "Arcaea-Tone Sphere联动", parent: "Arcaea", items: ["Hikari","Hall of Mirrors","STAGER (ALL STAGE CLEAR)","Linear Accelerator","Tiferet"] },
        { name: "Arcaea-Groove Coaster联动", parent: "Arcaea", items: ["MERLIN","DX Choseinou Full Metal Shojo","OMAKENO Stroke","Scarlet Lance","ouroboros -twin stroke of the end-","Got hive of Ra","Sign of \"10.5km\"","10pt8ion","Black MInD"] },
        { name: "Arcaea-CHUNITHM联动", parent: "Arcaea", items: ["Garakuta Doll Play","Ikazuchi","World Vanquisher","Climax","Last Celebration","Misdeed -la bonté de Dieu et l'origine du mal-","Cosmo Pop Funclub","IMPACT","Genesis","Trrricksters!!","Spider's Thread","Ignition","BlazinG AIR","8-EM","DA'AT -The First Seeker of Souls-","Aether Crest: Astral"] },
        { name: "Arcaea-ONGEKI联动", parent: "Arcaea", items: ["Lazy Addiction","Dazzle hop","Viyella's Tears","w4","Heart","Ai Drew","FLUFFY FLASH","Good bye, Merry-Go-Round.","LAMIA","LiftOff","SUPER AMBULANCE","Don't Fight The Music","And Revive The Melody"] },
        { name: "Arcaea-maimai联动", parent: "Arcaea", items: ["April showers","7thSense","Oshama Scramble!","AMAZING MIGHTYYYY!!!!","CYCLES","MAXRAGE","[X]","TEmPTaTiON","BREaK! BREaK! BREaK!","Straight into the lights","ViRTUS","yomibito_shirazu"] },
        { name: "Arcaea-WACCA联动", parent: "Arcaea", items: ["Quon","Let you DIVE! (nitro rmx)","with U","Mazy Metroplex","GENOCIDER","Stratoliner","Ouvertüre","XTREME","eden","Meta-Mysteria"] },
        { name: "Arcaea-Muse Dash联动", parent: "Arcaea", items: ["Lights of Muse","Final Step!","Haze of Autumn","Medusa"] },
        { name: "Arcaea-Cytus II联动", parent: "Arcaea", items: ["Bullet Waiting for Me (James Landino remix)","Used to be","Devillic Sphere","Lucid Traveler","CHAOS","syūten","DRG","99 Glooms","II","Magnolia"] },
        { name: "Arcaea-Rotaeno联动", parent: "Arcaea", items: ["Dual Doom Deathmatch","Waltz for Lorelei","Inverted World","MVURBD","Vulcānus"] },
        { name: "Arcaea-UNDERTALE联动", parent: "Arcaea", items: ["Heartache","Death By Glamour","Your Best Nightmare","Last Goodbye","MEGALOVANIA","Spider Dance","Spear of Justice","ASGORE"] },
        { name: "Arcaea-DJMAX联动", parent: "Arcaea", items: ["Ladymade Star","U.A.D","End of The Moonlight","OBLIVION","Nightmare","I want You","BlythE","Syriana","Liar","We're All Gonna Die"] },
        { name: "Arcaea-Next Stage", parent: "Arcaea", items: ["INFINITE DIMENSION","INCARNATOR₀₀","zephyrlasting","MARENYX","Code: Oblivion","ΛZΛLEΛ"] },
        { name: "Arcaea-MEGAREX联动", parent: "Arcaea", items: ["CHAIN2NITE","My life is mine alone!","Melty Rhapsody","One Step Closer","Signal"] }
    ],

    _flatItems: null,

    _buildFlatItems: function() {
        if (this._flatItems) return;
        this._flatItems = [];
        for (var i = 0; i < this._categories.length; i++) {
            var cat = this._categories[i];
            var path = (cat.parent ? cat.parent + "/" : "") + cat.name;
            for (var j = 0; j < cat.items.length; j++) {
                this._flatItems.push({ term: cat.items[j], path: path, id: "arc_" + i + "_" + j });
            }
        }
    },

    search: async function (query, page, type) {
        page = page || 1;
        this._buildFlatItems();
        var flat = this._flatItems;

        if (query === "菜单" || query === "分类" || query === "帮助" || query.toLowerCase() === "arcaea") {
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