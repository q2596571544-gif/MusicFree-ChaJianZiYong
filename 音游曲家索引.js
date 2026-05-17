// 朔㷰磐·音游作曲家名曲索引
// 功能: 收录t+pazolite、削除、Laur、xi等24位音游作曲家及其代表曲目
// 搜索作曲家名查看其全部曲目，搜索曲名直接定位，专辑字段可复制曲名
module.exports = {
    platform: "音游曲家",
    author: "朔㷰磐",
    version: "1.0.0",
    primaryKey: ["id"],
    cacheControl: "no-cache",
    hints: {
        importMusicItem: ["搜索作曲家名(如“t+pazolite”)查看其全部曲目。", "搜索“菜单”或“作曲家”查看全部作曲家列表。", "专辑字段为曲名，点击即可复制。"],
        importMusicSheet: []
    },

    _categories: [
        // ==================== t+pazolite ====================
        { name: "t+pazolite", parent: "音游作曲家", items: ["Oshama Scramble!","Tempestissimo","You Are the Miserable","QZKago Requiem","Garakuta Doll Play","Chrome VOX","IZANA","Pandemonium","56 Seconds Later","DEKKKKKA","First Rendezvous","Zanshi Midnight","Drizzling","Bass Potion","Seizure","Transcended Love","Ma [χ] Zo","Chuten","Urosousetsu","Our Wrenally","Contrapasso -paradiso-","Hardcore ASMR","Hanavision","Dogbite","Blew Moon","déjà Vu","Party in the HOLLOWood","失礼しますが、RIP❤","Mittsies","VOX Diamond","ONOMATO Pairing!!!","ニエソナエ","ピコPicoとらんすれーしょんっ！","Callima Karma","with U","Prism Fountain","Sanctuary","Ama","Buzy Lake"] },

        // ==================== 削除 (Sakuzyo) ====================
        { name: "削除 (Sakuzyo)", parent: "音游作曲家", items: ["Altale","VALLISTA","Kronos","怪獣になりたい","Nein","Lost Memory","Neurotoxin","Agiel","L'aventale","Eden","reAdvent","Piano Sonata - I -","STORIA","World's end loneliness","薄明のクオリア","零時の鐘が鳴る前に","Selentia","ATLAS RUSH","Löschen","Piano History","Cinderlla Ball"] },

        // ==================== Laur ====================
        { name: "Laur", parent: "音游作曲家", items: ["PRAGMATISM -RESURRECTION-","Viyella's Malice","Arghena","ÆTERNUM AXIOMA","Grievous Lady","Sheriruth","Dement after legend","First Snow","Vindication","Callima Karma","Aegleseeker","Lost Desire","Lucid Traveler","Kanagawa Cyber Culvert","Alexandrite","Climax","Pandemonium","Tempestissimo","Cyaegha","Infinite Strife"] },

        // ==================== xi ====================
        { name: "xi", parent: "音游作曲家", items: ["Halcyon","Freedom Dive","Anima","Parousia","Xaleid◇scopiX","Titania","SuddeИDeath","Ascalon","Aragami","Blue Zenith","Happy End of the World","Longinus","Evolve Cybernation","Wish upon Twin Stars","Vanitas","Akasha","SolarOrbit","Niflheimr","Ascension to Heaven","Bad Elixir","Double Helix","Heavenly Blast","Aiolos","Grand Chariot","Doppelganger","Quietus Ray","Spasmodic","Halcyon (MRM REMIX)"] },

        // ==================== モリモリあつし ====================
        { name: "モリモリあつし", parent: "音游作曲家", items: ["PUPA","Re：End of a Dream","GLORY：ROAD","Grand-Guignol","粉骨砕身カジノゥ","Larva","Floor of Lava","Paradigm Shift","Paradox","Doppelganger","SuddeИDeath","Halcyon (MRM REMIX)","PUPA -Floor of Larva Remix-","PUPA (uma Remix)","PUPA (Yesod Remix)","タイムカプセル","uma vs. モリモリあつし"] },

        // ==================== Kobaryo ====================
        { name: "Kobaryo", parent: "音游作曲家", items: ["Invisible Frenzy","Vicious Heroism","Bookmaker","Blackbird","Villain Virus","Glitched Character","Speed Complexxx","Galaxy Friends","Delete The World","Recollection","HUG AND KILL","Breaking Dawn","Yura-Yura Sweet Genocide","Darkmoon Dissolve","Endless Adventure","Dimension Hacker","Cyber Networks","My Music Playlist","Future Downloader","VANDALIZED AI","kawAIi","烈華RESONANCE","Unlimited Hyperlink","Raven Emperor","Radical Jinja","Elixir","K+Nock Out","Nin Mint","Biscuits Have Arrived In The Aquarium","Resurrection","No Future Terror","Sparkling Software","Atmospherize","Clock Control","Yggdrasil","Volatile Memory","FLUFFY FLASH"] },

        // ==================== USAO ====================
        { name: "USAO", parent: "音游作曲家", items: ["Climax","Cthugha","Cyaegha","Big Daddy","WildFire","XTREME","Kick's for Liberation","Break Out Uprising","Aftershock","Breakout White","Sonic Boom","Victory of the Homeland","Got It Bad","Becouse of You","BATTLE NO.1"] },

        // ==================== LeaF ====================
        { name: "LeaF", parent: "音游作曲家", items: ["MARENOL","狂喜蘭舞","Lyrith -迷宮リリス-","Aleph-0","Doppelganger","Calamity Fortune","ATHAZA","Kyoukiranbu","Poison AND÷OR Affection","Wizdomiot","Heavensdoor","Armageddon","Mopemope","Lifill","PANDORA PARADOXXX"] },

        // ==================== DJ Myosuke ====================
        { name: "DJ Myosuke", parent: "音游作曲家", items: ["Break The Speakers","FLATLINE","推活天使ビビアンちゃん","Abnormal","Anguish","Hex","Pray for メメメメメ","Unknown","SATORU","Warning","XODUS","BATTLE NO.1"] },

        // ==================== BlackY ====================
        { name: "BlackY", parent: "音游作曲家", items: ["Sakura Vortex","Meligh'","Sideline","The Chosen One","Löschen","Lemonade Fizz","Banbard's Summer","ATLAS RUSH","Axeria","BlackY's BEATFLOOR"] },

        // ==================== 黒魔 (Chroma) ====================
        { name: "黒魔 (Chroma)", parent: "音游作曲家", items: ["To the Milky Way","薄明のクオリア","翠杜","Overjoy ★ OVERDOSE!!","amethyst","Deus Judicium","MVURBD","Uchronia","シークレット・プラネット"] },

        // ==================== Silentroom ====================
        { name: "Silentroom", parent: "音游作曲家", items: ["Nhelv","Protoflicker","Fallensquare","Aegleseeker","Rainshower","驟雨の狭間","Lethaeus","Random","REBIRTH","Sense","Angel Echo","Meta-Morphose","A Little Harbinger","The Boy's Nostalgia","A Ticket to Ride","Earthwaves","Silent Rhapsody","Bhutesha","9876734123","Untrodden Morn","Nulctrl","Red and Blue"] },

        // ==================== ak+q ====================
        { name: "ak+q", parent: "音游作曲家", items: ["Axium Crisis","Hyperion Dreamer","ikasu","variations on a soul","white.roses","petals of obsidian skies","qualia -ideaesthesia-","Ignotus","Red and Blue and Green","amygdata"] },

        // ==================== M2U ====================
        { name: "M2U", parent: "音游作曲家", items: ["Marigold","Magnolia","Gypsy Tronic","The Prince of Darkness","Nemesis","Quo Vadis","Dione","A Bella!","Masquerade","Stardust","Myosotis","Wicked Fate","The Prince of Darkness (Extended)","Placebo Dying","Lady Killer","Space of Soul","BlythE","Memory of Beach","Seeker","Eternity"] },

        // ==================== nitro (lowiro) ====================
        { name: "nitro (lowiro)", parent: "音游作曲家", items: ["qualia -ideaesthesia-","Ignotus Afterburn","Red and Blue and Green","amygdata","Singularity VVVIP","overdead.","Let you DIVE! (nitro rmx)","0xe0e1ccull","ultradiaxon-N3","zephyrlasting"] },

        // ==================== かねこちはる ====================
        { name: "かねこちはる", parent: "音游作曲家", items: ["Urosousetsu","Chuten","Titania","amethyst","翠杜","シークレット・プラネット"] },

        // ==================== Frums ====================
        { name: "Frums", parent: "音游作曲家", items: ["Aegleseeker","Angel Echo","Red and Blue and Green","overdead.","0xe0e1ccull","Memory Forest","Singularity","Kissing Lucifer","On And On!!","MVURBD"] },

        // ==================== Daily ====================
        { name: "Daily", parent: "音游作曲家", items: ["無人区-Vacuum Track#ADD8E6-","無人区-Vacuum Track#ADD8E6- (Extended)","無人区-Vacuum Track#ADD8E6- (Remix)"] },

        // ==================== 光吉猛修 ====================
        { name: "光吉猛修", parent: "音游作曲家", items: ["BATTLE NO.1","烈華RESONANCE","光線チューニング","宿星審判","超常マイマイン","超常マイマイン (Extended)"] },

        // ==================== void (Mournfinale) ====================
        { name: "void (Mournfinale)", parent: "音游作曲家", items: ["Nadir","Grievous Lady","Sheriruth","Axium Crisis","Fracture Ray","Tempestissimo","Dantalion","Arcahv","Vicious Heroism","Lethaeus"] },

        // ==================== Juggernaut. ====================
        { name: "Juggernaut.", parent: "音游作曲家", items: ["BATTLE NO.1","Viyella's Malice","Tempestissimo","Grievous Lady","Sheriruth","Dement after legend"] },

        // ==================== Puru ====================
        { name: "Puru", parent: "音游作曲家", items: ["Callima Karma","Aegleseeker","Tempestissimo","Grievous Lady","Sheriruth"] },

        // ==================== EBIMAYO ====================
        { name: "EBIMAYO", parent: "音游作曲家", items: ["GOODTEK","GOODBOUNCE","GOODRAGE","GOODFORTUNE","GOODWORLD","GOODDRILL","GOODTEK (Extended)","GOODBOUNCE (Extended)"] },

        // ==================== Team Grimoire ====================
        { name: "Team Grimoire", parent: "音游作曲家", items: ["Rrhar'il","Arghena","ÆTERNUM AXIOMA","Grievous Lady","Sheriruth","Dement after legend"] },

        // ==================== Feryquitous ====================
        { name: "Feryquitous", parent: "音游作曲家", items: ["Angel's Salad","Dstorv","Katalisma","Aleph-0"] }
    ],

    _flatItems: null,

    _buildFlatItems: function() {
        if (this._flatItems) return;
        this._flatItems = [];
        for (var i = 0; i < this._categories.length; i++) {
            var cat = this._categories[i];
            var path = (cat.parent ? cat.parent + "/" : "") + cat.name;
            for (var j = 0; j < cat.items.length; j++) {
                this._flatItems.push({ term: cat.items[j], path: path, id: "cp_" + i + "_" + j });
            }
        }
    },

    search: async function (query, page, type) {
        page = page || 1;
        this._buildFlatItems();
        var flat = this._flatItems;

        // 菜单触发
        if (query === "菜单" || query === "分类" || query === "帮助" || query === "作曲家") {
            var cats = this._categories;
            var items = [];
            for (var i = 0; i < cats.length; i++) {
                items.push({ id: "cat_" + i, title: cats[i].name, artist: "", album: cats[i].name, duration: 0, artwork: "" });
            }
            var ps = 10, s = (page - 1) * ps, e = s + ps;
            return { isEnd: e >= items.length, data: items.slice(s, e) };
        }

        // 精确匹配作曲家名 → 展开其全部曲目
        var q = query.toLowerCase();
        for (var i = 0; i < this._categories.length; i++) {
            if (this._categories[i].name.toLowerCase() === q) {
                var songs = this._categories[i].items;
                var ps = 10, s = (page - 1) * ps, e = s + ps, pageSongs = songs.slice(s, e);
                var items = [];
                for (var j = 0; j < pageSongs.length; j++) {
                    items.push({ id: "song_" + i + "_" + (s + j), title: pageSongs[j], artist: this._categories[i].name, album: pageSongs[j], duration: 0, artwork: "" });
                }
                return { isEnd: e >= songs.length, data: items };
            }
        }

        // 模糊匹配曲名或作曲家名
        var matched = [];
        for (var i = 0; i < flat.length; i++) {
            if (flat[i].term.toLowerCase().indexOf(q) !== -1 || flat[i].path.toLowerCase().indexOf(q) !== -1) {
                matched.push(flat[i]);
            }
        }
        var ps = 10, s = (page - 1) * ps, e = s + ps, pItems = matched.slice(s, e);
        var items = [];
        for (var j = 0; j < pItems.length; j++) {
            items.push({ id: pItems[j].id + "_" + (page * 1000 + j), title: pItems[j].term.length > 20 ? pItems[j].term.substring(0, 20) + "..." : pItems[j].term, artist: pItems[j].path, album: pItems[j].term, duration: 0, artwork: "" });
        }
        return { isEnd: e >= matched.length, data: items };
    },

    getMediaSource: function() { return { url: "", headers: {}, userAgent: "" }; },
    getMusicInfo: function(item) { return { id: item.id, title: item.title, artist: item.artist, album: item.album, duration: 0 }; },
    getLyric: function(item) { return "曲目：" + item.album + "\n作曲家：" + (item.artist || ""); },
    getAlbumInfo: async function() { return { isEnd: true, data: [] }; },
    getMusicSheetInfo: async function() { return { isEnd: true, data: [] }; },
    getArtistWorks: async function() { return { isEnd: true, data: [] }; },
    importMusicItem: async function() { return null; },
    importMusicSheet: async function() { return null; },
    getTopLists: async function() { return []; },
    getTopListDetail: async function() { return { isEnd: true, data: [] }; }
};