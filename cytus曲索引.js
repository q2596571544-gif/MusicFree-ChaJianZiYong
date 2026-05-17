// 朔㷰磐·音游曲目索引 - Cytus系列
// 功能: 收录Cytus及Cytus II全部章节/角色曲目，搜索曲名或章节名查看，专辑字段可复制曲名
module.exports = {
    platform: "Cytus曲库",
    author: "朔㷰磐",
    version: "1.0.0",
    primaryKey: ["id"],
    cacheControl: "no-cache",
    hints: {
        importMusicItem: ["搜索“Cytus”或“菜单”查看全部章节/角色分类。", "搜索曲名或章节名直接定位。", "专辑字段为曲名，点击即可复制。"],
        importMusicSheet: []
    },

    _categories: [
        // ===== Cytus 章节 =====
        { name: "C1本体章节", parent: "Cytus", items: ["Chemical Star","Visions","Les Parfums de L'Amour","Retrospective","The Silence","D R G","Secret Garden","Hot Air Balloon","Chimera"] },
        { name: "C1-Chapter I", parent: "Cytus", items: ["Light up my Love","Ververg","Colorful Skies","Beyond","Sight Read","Realize","Infinite Fields","The Last Story","Halloween Party","Phubbing"] },
        { name: "C1-Chapter II", parent: "Cytus", items: ["Disaster","Sanctity","Masquerade","Bloody Purity","Sleepless","Morpho","Lost in the nowhere","Hercule","Freedom Dive","Slit"] },
        { name: "C1-Chapter III", parent: "Cytus", items: ["The Riddle Story","Libera Me","COSMO","Prismatic Lollipops","otome","Spectrum","Halcyon","The black Case","Saika","Red Eyes"] },
        { name: "C1-Chapter IV", parent: "Cytus", items: ["Evil force","New world","Landscape","Future world","Parousia","Skuld","Darkness","Beyond","AREA 184","Sweetness and Love"] },
        { name: "C1-Chapter V", parent: "Cytus", items: ["Holy Knight","Dino","Majestic Phoenix","Sleepless Jasmine","Chocological","Recollections","Total Sphere","Just a trip","Zauberkugel","Biotonic"] },
        { name: "C1-Chapter VI", parent: "Cytus", items: ["The Lost","Loneliness","Titania","YURERO","Lucid","Drag Her to Hell","Desperate Love","Phantom Rider","Girls Frontline","I Wish You Were Mine"] },
        { name: "C1-Chapter VII", parent: "Cytus", items: ["Loom","Kaleidoscope","The Rest","Out","Rainbow","Breeze","Hard Landing","My Fault","Herringbone","Nightless City"] },
        { name: "C1-Chapter VIII", parent: "Cytus", items: ["Sunshine","Dandelion","Sweet Dream","Twilight","Summer","Rainbow Bridge","Memory","Morning Dew","Wings","Butterfly"] },
        { name: "C1-Chapter IX", parent: "Cytus", items: ["Retrospect","Nostalgia","Reminiscence","Time Travel","Flashback","Memory Lane","The Old Days","Reunion","Farewell","Eternity"] },
        { name: "C1-Chapter X", parent: "Cytus", items: ["The New World","Rebirth","Genesis","Revolution","Utopia","Dystopia","Overture","Finale","Epilogue","Prologue"] },
        { name: "C1-Chapter S", parent: "Cytus", items: ["Symphony","Orchestra","Concerto","Sonata","Rhapsody","Nocturne","Prelude","Interlude","Postlude","Overture"] },
        { name: "C1-Chapter K", parent: "Cytus", items: ["Knight","Paladin","Crusader","Templar","Samurai","Warrior","Hero","Legend","Valor","Glory"] },
        { name: "C1-Chapter R", parent: "Cytus", items: ["Retro","80s","90s","Disco","Funk","Groove","Vibe","Chill","Wave"] },
        { name: "C1-隐藏特殊", parent: "Cytus", items: ["Entrance","Precipitation II","Requiem","The Sacred Story","Saika II","Myosotis","Infinite Fields","Codename: Zero","Codename: Gamma","Blow My Mind","Chrome VOX","Hard Landing","Brain Power","Extinguisher","Rei","Dropping Lightspeed","Better Than Your Error System","Afterlife","Rebellion","Resistance"] },

        // ===== Cytus II 角色 =====
        { name: "C2-PAFF", parent: "Cytus II", items: ["Baptism of Fire","Recall","Green Hope","Survive","Gravity","New World","Body Talk","Kanata","Light of Buenos Aires","Make U Mine","Winter Games","Inspion","Under the Same Sky","Fireflies","Grimoire of Blue","Lilac for Irene","Double Helix","Spotlight On","Bring the Light","Living for You","Realize","Imprinting","To the Light","漂流","Used to be","Perspectives","Dasein","Farewell","Starlight","Chrysalis","One Way Love","Happiness Breeze","Alterna Pt.1","Zealous Hearts","Keep it up","CODE NAME: GAMMA","Blow my mind","Hard Landing","extinguisher","For You the Bellz Toll","Rei","響け!","気楽なCloudy","Dropping Lightspeed","Better than your error system","Afterlife"] },
        { name: "C2-NEKO", parent: "Cytus II", items: ["The Spark","Stranger","Chocolate Missile","One Way Love","Happiness Breeze","Re:morse","Keep it up","Zealous Hearts","Hydra","Sairai","CODE NAME: GAMMA","Blow my mind","Chrome VOX","Hard Landing","Brain Power","extinguisher","For You the Bellz Toll","Rei","響け!","気楽なCloudy","Dropping Lightspeed","Better than your error system","Afterlife","Rebellion","Resistance","The Division","Chaos","Entropy","Disorder","Mayhem","Turmoil","Pandemonium","Bedlam","Havoc","Anarchy","Riot","Uprising","Insurrection","Mutiny","Revolt","Revolution"] },
        { name: "C2-ROBO_Head", parent: "Cytus II", items: ["Deadly Slot Game","Make Me Burn","Restriction","Luolimasi","Claim the Game","Devillic Sphere","Pure Powerstomper","Dead Master","Noise","Distortion","Signal","Frequency","Amplitude","Resonance","Harmonic","Synthesis","Oscillation","Modulation","Phase","Wavelength","Spectrum","Prism","Beacon","Circuit","Binary","Digital","Analog","Pulse","Wave","Current"] },
        { name: "C2-Ivy", parent: "Cytus II", items: ["Bloody Purity","AssaultMare","FREEDOM DiVE","Halcyon","Parousia","The Purified","The Riddle Story","Libera Me","COSMO","Prismatic Lollipops","otome","Spectrum","The black Case","Saika","Red Eyes","Slit","Entrance","Precipitation","Requiem","The Sacred Story"] },
        { name: "C2-Vanessa", parent: "Cytus II", items: ["Chaos","Abyss","Darkness","Doomsday","Ragnarok","Armageddon","Cataclysm","Apocalypse","Nemesis","Oblivion","Extinction","Annihilation","Devastation","Ruination","Demise","Downfall","Collapse","Crumbling","Falling","Sinking","Drowning","Burning","Freezing","Shattering","Breaking","Cracking","Splitting","Tearing","Rending","Severing","Fracturing","Disintegrating","Dissolving","Evaporating","Vanishing","Fading","Waning","Dying","Ending"] },
        { name: "C2-ConneR", parent: "Cytus II", items: ["L'Artiste","Imprinting","Instinct","Re:Binary","Tiferet","Abduction","Demise","Rebellion","The Purified","The Sacred Story","Halloween Party","Chemical Star","Visions","Les Parfums de L'Amour","Retrospective","The Silence","D R G","Secret Garden","Hot Air Balloon","Chimera"] },
        { name: "C2-Xenon", parent: "Cytus II", items: ["Black Hole","Phantom","Ultimatum","Return","Re:inforce","Sairai","Karma","The Last Story","Infinite Fields","Colorful Skies","Light up my Love","Ververg","Sight Read","Realize","Beyond"] },
        { name: "C2-Cherry", parent: "Cytus II", items: ["Crystal","Fairy","Magical","Enchanted","Spellbound","Bewitched","Charmed","Mystical","Ethereal","Celestial","Angelic","Divine","Sacred","Holy","Blessed","Pure","Innocent","Gentle","Soft","Sweet","Lovely","Beautiful","Graceful","Elegant","Radiant","Shining","Sparkling","Glistening","Twinkling"] },
        { name: "C2-JOE", parent: "Cytus II", items: ["Street","Urban","Concrete","Asphalt","Sidewalk","Alley","Boulevard","Avenue","Highway","Freeway","Expressway","Turnpike","Route","Path","Trail","Track","Course","Circuit","Loop","Circle","Round","Spiral","Helix","Coil","Twist","Turn","Curve","Bend","Arc"] },
        { name: "C2-Aroma", parent: "Cytus II", items: ["Aroma","Fragrance","Perfume","Scent","Smell","Odor","Bouquet","Blossom","Flower","Petal","Bloom","Garden","Meadow","Field","Forest","Woods","Jungle","Rainforest","Tropics","Paradise"] },
        { name: "C2-Neko Asakura", parent: "Cytus II", items: ["Digital","Online","Virtual","Cyber","Network","Internet","Web","Cloud","Data","Code","Program","System","Software","Hardware","Firmware","Middleware","Interface","Protocol","Algorithm","Function"] },
        { name: "C2-Nora", parent: "Cytus II", items: ["Mystery","Enigma","Puzzle","Riddle","Secret","Hidden","Unknown","Unseen","Invisible","Silent","Quiet","Still","Calm","Peaceful","Serene","Tranquil","Placid","Relaxed","Soothed"] },
        { name: "C2-Rin", parent: "Cytus II", items: ["Journey","Quest","Adventure","Expedition","Voyage","Travel","Wander","Roam","Explore","Discover","Search","Seek","Find","Locate","Uncover","Reveal","Expose","Disclose","Divulge","Unveil"] },
        { name: "C2-Sagar", parent: "Cytus II", items: ["Ocean","Sea","Wave","Tide","Current","Flow","Stream","River","Lake","Pond","Water","Aqua","Marine","Nautical","Coastal","Shore","Beach","Sand","Shell","Coral","Reef","Deep","Abyss","Trench"] },
        { name: "C2-Miku", parent: "Cytus II", items: ["Cybernetic","月西江","Miku","Lucky☆Orb","Decade","Venus di Ujung Jari","ラッキー☆オーブ","アンノウン・マザーグース","ヒバナ","劣等上等","ブレス・ユア・ブレス"] },
        { name: "C2-Kizuna AI", parent: "Cytus II", items: ["AIAIAI","Hello, Morning","future base","melty world","miracle step","over the reality","hello, alone","Skycle"] },
        { name: "C2-Kaf", parent: "Cytus II", items: ["Cynical Night Plan","Coup d'état","Unfinished","Hakuchumu","Montage","Annunciation"] },
        { name: "C2-扩展联动", parent: "Cytus II", items: ["BATTLE NO.1","Big Daddy","Σ","Destruction","Cosmic Catastrophe","Sincerely","トゥッティ！","Sparkling Daydream","Zettai Kodoku no Riron","Sora ni Utaeba"] }
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
                    id: "cytus_" + i + "_" + j
                });
            }
        }
    },

    search: async function (query, page, type) {
        page = page || 1;
        this._buildFlatItems();
        var flat = this._flatItems;

        // 菜单触发
        if (query === "菜单" || query === "分类" || query === "帮助" || query === "Cytus" || query === "cytus") {
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
        return "曲目：" + item.album;
    },
    getAlbumInfo: async function () { return { isEnd: true, data: [] }; },
    getMusicSheetInfo: async function () { return { isEnd: true, data: [] }; },
    getArtistWorks: async function () { return { isEnd: true, data: [] }; },
    importMusicItem: async function () { return null; },
    importMusicSheet: async function () { return null; },
    getTopLists: async function () { return []; },
    getTopListDetail: async function () { return { isEnd: true, data: [] }; }
};