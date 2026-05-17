// 朔㷰磐·音游曲库索引 - Deemo / Phigros / VOEZ
// 功能: 收录Deemo、Phigros、VOEZ三款音游按章节分类的全部曲目
// 搜索游戏名或“菜单”查看章节，搜索曲名直接定位，专辑字段可复制曲名
module.exports = {
    platform: "音游曲库1",
    author: "朔㷰磐",
    version: "1.0.0",
    primaryKey: ["id"],
    cacheControl: "no-cache",
    hints: {
        importMusicItem: ["搜索游戏名或“菜单”查看全部分类。", "直接搜索曲名定位。", "专辑字段为曲名，点击即可复制。"],
        importMusicSheet: []
    },

    _categories: [
        // ==================== Deemo ====================
        { name: "Deemo-Vol.1A", parent: "Deemo", items: ["Dream","Reflection (Mirror Night)","Jumpy Star","Wings of piano","Nine point eight","Light pollution","Undo","Platinum","Utopiosphere","Reverse - Parallel Universe","I hate to tell you","Saika","YUBIKIRI-GENMAN"] },
        { name: "Deemo-Vol.1B", parent: "Deemo", items: ["Evolution Era","Invite","Run Go Run","Yawning Lion","Pulses","Electron","Untitled2","Walking by the sea","Beyond the stratus","Sairai","Entrance","Magnolia","Angelic Sphere","Leviathan"] },
        { name: "Deemo-Vol.2", parent: "Deemo", items: ["Suspenseful third day","Living In The one","Legacy","Sunset","Sakura iro no yume","La Promesse","ANiMA","The Beautiful Moonlight","Fluquor","Myosotis","Altale"] },
        { name: "Deemo-Shattered Memories", parent: "Deemo", items: ["Run Lads Run","Starting Wind","Farewell Waltz","Revival","Ark of Desire","Futarimiti","Shadow in the mirrow","Nightfall","Yaoyue","Kimi ga Nokoshita Sekai de","Guardian","Rainbow's End","Post-script","H","Tree of Dreams","White Rain","Infinite Puzzle","Spring Snowflake Flower","Little Love","Lonely Pianist","Miracle of Daybreak","Waltz in Devil's Playground"] },
        { name: "Deemo-Shattered Memories 2", parent: "Deemo", items: ["Aquamarine","Go or Stay","Ruins in the Mirage","White Fantasy","Last Promise","tomoshibi","Out of Natura","ripples","A Little Servant","Clover Snow","Ensenble Curtain Fall","Aquarelle: 010","Out of the Box","Shedding Season","Still-Waking Sleep (DEEMO edit)","If I Can See You Again","Ray Of Sunshine","Witch Hunting","LandScape","Empedrado","Hana no Kotoba","Lavuestia Mutanz","Matricaria -Paza cfzj ze Epfbfzm-","Dance in the midnight","Tempest","Arekstrar Nornir","saeru","in a cradle","Lose my mind"] },
        { name: "Deemo-Epilogue", parent: "Deemo", items: ["Alice good night","Deemo Goodbye","Toshi no kokyu","Path and Period"] },
        { name: "Deemo-Collaboration", parent: "Deemo", items: ["Go Adventure!","The Story Unfolds","Hesitant Blade","Rayark 7th Main Theme","HYAKKA RYOURAN","Knots Way","Randall","Will","Land of Giants"] },
        { name: "Deemo-Samsara", parent: "Deemo", items: ["Voice of Cell","Valle De Los Caídos","Lost in the nowhere","The 105th Days","Reverence (Deemo ver)","Aragami","Parodia Sonatina Var.II","Amber Wishes (DEEMO edit)","The way home","Marigold"] },
        { name: "Deemo-Etude", parent: "Deemo", items: ["Tristesse","Intermezzo in A Major","Rhapsody in B minor","Pathetique","Ballade No.1","Invention No.1","Aufschwung","Turkish March","Moonlight","Flight of the Bumblebee","Impromptu No.3","Venetian Gondellied","Piano Sonata No.3","Waltz No.1","La Campenella"] },
        { name: "Deemo-Rayark 12th", parent: "Deemo", items: ["Pie War","Katakoi Syndrome","Chance","Page 0","Elysian Volitation"] },
        { name: "Deemo-Adventure", parent: "Deemo", items: ["The secret tale","Starry Sky Embrace","Out of Ctrl","Out of Sense","Amagiri"] },
        { name: "Deemo-Hundotte", parent: "Deemo", items: ["A Collection of names","Rhapsody on a Theme of Aud Beaf","u7228","Locum )-( Janus","Sonata for Bygone Piano"] },
        { name: "Deemo-Mirai", parent: "Deemo", items: ["Starry night","Three Years Diary","Girl meets World","doll eyes","naughty Cats"] },
        { name: "Deemo-RS Vol.1", parent: "Deemo", items: ["Metal Hypnotized","Rainy Memory","Peach Lady","Hey Boy","Pilot","Vivere La vita"] },
        { name: "Deemo-RS Vol.2", parent: "Deemo", items: ["Friction","I race the dawn","Moon without the stars","Sanctity","Hua Sui Yue"] },
        { name: "Deemo-RS Vol.3", parent: "Deemo", items: ["Little Corgi's Dream","Morning Drops","The Letter","The Truth That You Leave","Veritas"] },
        { name: "Deemo-RAC 1", parent: "Deemo", items: ["AciculignosA","blooming spring","Lifill","Toys Etude","Re: the Full moon World."] },
        { name: "Deemo-RAC 2", parent: "Deemo", items: ["Alice in Secret Circus","Anticipation","Graduation Song","LILI","Sprout"] },
        { name: "Deemo-RAC 3", parent: "Deemo", items: ["Level Zero","PUPA","Ragnarok","To next page","Memory of Skyblue"] },
        { name: "Deemo-RAC 4", parent: "Deemo", items: ["Butterfly","DIARY","Fis-sure","Wish upon a shooting star","They seem like blossoms yet ..."] },
        { name: "Deemo-RAC 5", parent: "Deemo", items: ["Yoake o matsu kimi no uta","Final Rush","Like Asian Spirit","Paraline","Scherzo"] },
        { name: "Deemo-RAC 6", parent: "Deemo", items: ["Ancient Rose","Carnation","Delusion (Yume-Maboroshi)","Frozen Emotion","Scent"] },
        { name: "Deemo-MILI", parent: "Deemo", items: ["Fable","Past the Stargazing Season","Ephemeal","Rosetta","Witch's Invitation"] },
        { name: "Deemo-MILI Vol.2", parent: "Deemo", items: ["A Turtle's Heart","Cerebrite","Imagined Flight","Space Colony","UFO"] },
        { name: "Deemo-MILI Vol.3", parent: "Deemo", items: ["Bathtub Mermaid","DK","Ga1ahad and Scientific Witchery","Ikutoshitsuki","Milk"] },
        { name: "Deemo-Knight Iris", parent: "Deemo", items: ["The Way We Were","The Sanctuary","The Red Coronation","Forbidden Codex","Knight Of Firmament"] },
        { name: "Deemo-Knight Rosabell", parent: "Deemo", items: ["Lord Of Crimson Rose","Predawn","The Fallen Bloom","Where You Are Not","Music. The Eternity of Us"] },
        { name: "Deemo-Cytus Vol.1", parent: "Deemo", items: ["DRG","Libera me","Precipitation","Sacred","The Black Case"] },
        { name: "Deemo-Cytus Vol.2", parent: "Deemo", items: ["Future World","Holy Knight","Niflheimr","Parousia","Recollections"] },
        { name: "Deemo-L: The Lower", parent: "Deemo", items: ["L1: Loneliness","L2: Liberation","L3: Leverage","L4: Latent","L5: Lapse"] },
        { name: "Deemo-L: The Upper", parent: "Deemo", items: ["L6: Lunatic","L7: Legion","L8: Lost","L9: Lament","L10: Largo"] },
        { name: "Deemo-V.K.", parent: "Deemo", items: ["Atlantis Love","Melody Of Elves","Paper Plane's Adventure","Pure White","Xue Wu"] },
        { name: "Deemo-Brian Crain", parent: "Deemo", items: ["Dream of Dreams","Finding Home","Imagining","Reminiscence","Time Forgotten"] },
        { name: "Deemo-Eshen", parent: "Deemo", items: ["Sea Side Road","Run Away Run","Falling Ears","Flowers Above Your Head","Almost Morning"] },
        { name: "Deemo-Rabpit", parent: "Deemo", items: ["Delivery","Encumbrance","Expansion","Mellow","Overlong"] },
        { name: "Deemo-Aioi", parent: "Deemo", items: ["CREAM STEW (DEEMO Ver.)","I can not say (DEEMO Ver.)","Image (DEEMO Ver.)","kireigoto (DEEMO Ver.)","NEW WORLD (DEEMO Ver.)"] },
        { name: "Deemo-Aioi Vol.2", parent: "Deemo", items: ["Everybody Koishiteru (DEEMO Ver.)","Hello (Deemo Ver.)","Lassi (DEEMO Ver.)","Platonic Electro (DEEMO Ver.)","Travelling (DEEMO Ver.)"] },
        { name: "Deemo-Timeline", parent: "Deemo", items: ["Penglai Movement","Money & Money","Phubbing","Protest","A New Home"] },
        { name: "Deemo-Sakuzyo", parent: "Deemo", items: ["AngelFalse","imp","MagiCatz","Poem of Rapture","Rondo for 97Keys"] },
        { name: "Deemo-Cranky", parent: "Deemo", items: ["Rain of Flowers","The Bisque Doll and 14 Bunnies","Another Katharsis","Eternity","Conflict (VILA Remix)"] },
        { name: "Deemo-DS:PIANO", parent: "Deemo", items: ["Eltina","Samishigariya no gaisen","Caramel Custard","Noblesse Oblige","Hanomai"] },
        { name: "Deemo-AD:PIANO", parent: "Deemo", items: ["Oceanus","Dedication","Snowscape","White Palette","Long Summer"] },
        { name: "Deemo-AD:PIANO 2", parent: "Deemo", items: ["Discovered Attack","Monochrome Anomaly","Kyuten Sekai no Shonen","Longinus","Mirage of Mind"] },
        { name: "Deemo-M2U×Nicode", parent: "Deemo", items: ["Loadstar","Lune","Moon Halo","Stellar","Wicked Fate"] },
        { name: "Deemo-M2U×Nicode Vol.2", parent: "Deemo", items: ["Cradle Waltz","Deerstalker","Nyanya no Uta","Sagashimono","Sandglass","Yoake no Uta"] },
        { name: "Deemo-Feryquitous", parent: "Deemo", items: ["Adaptation Window","CydraL","Erua","Koqurow","Rhuzerv"] },
        { name: "Deemo-Book of Alice", parent: "Deemo", items: ["Daylight","from RestedPoint","Rise Up","Rebellion","Need Your Luv"] },
        { name: "Deemo-Book of Celia", parent: "Deemo", items: ["Earlier Than Today","For Sis","Say Hi"] },
        { name: "Deemo-Yamajet", parent: "Deemo", items: ["Am I delicious","Merry go round girl","Monokuro no kaze","Orca","Sincerity"] },
        { name: "Deemo-N.M.S.T.", parent: "Deemo", items: ["Farewell","Winter (Deemo ver.)","Fluffie Partie","Snowflakes","kouyou"] },
        { name: "Deemo-N.M.S.T. 2", parent: "Deemo", items: ["Beyond the Altostratus (DEEMO Ver.)","Cheezie Bountie","Continuum (DEEMO Ver.)","Midnight Alleys","Fur War","Pur War"] },
        { name: "Deemo-Vocal", parent: "Deemo", items: ["Aurarobe","Pharmacy of heart","Red Storm Sentiment","Ukakuf Kins","vandarhythm"] },
        { name: "Deemo-Funkot", parent: "Deemo", items: ["Are You Ready","Dusk to Dawn","En ga Chop","Funky Quest","I lost my flp"] },
        { name: "Deemo-Kobayashi", parent: "Deemo", items: ["Artemis","Elysion","The beauties of nature","Don't go - stay with me forever","A song for you"] },
        { name: "Deemo-Team Grimoire", parent: "Deemo", items: ["Alexithymia","CHAOS MAGNVM","Dyslexia","Grimoire of Blue","Librum clausi"] },
        { name: "Deemo-Ice", parent: "Deemo", items: ["Determination","10 -ichizero-","Pandora's Box","RE:UNION -Duo Blade Against-","Scherzo -pain in rain-"] },
        { name: "Deemo-DJMAX", parent: "Deemo", items: ["glory day (DEEMO Arr.)","Far East Princess (DEEMO Arr.)","OBLIVION (DEEMO Arr.)","Heart of Witch (DEEMO Arr.)","Nightmare (DEEMO Arr.)"] },
        { name: "Deemo-Sdorica", parent: "Deemo", items: ["Mirage","Blurred Distance","Thief of the Gleaming Star","Show Start!","Fighting Spirit"] },
        { name: "Deemo-Spring", parent: "Deemo", items: ["The Daydreaming Girl","Wisteria","Falling Star","Spring Breeze","Valentining"] },
        { name: "Deemo-Emotional Addict", parent: "Deemo", items: ["Glim","snow thaw","The Last Decision","Hakoniwa Daybreak","Never Ending Tales"] },
        { name: "Deemo-AD:PIANO 3", parent: "Deemo", items: ["Abiogenesis","Kaguya","Quimi (DEEMO Edit)","Soaring","FEHLT -DEEMO edition-"] },
        { name: "Deemo-Feryquitous 2", parent: "Deemo", items: ["Inperfects","Chat perdu","Beyond that Notes","ALiUS","Sonitus orationis"] },
        { name: "Deemo-Cytus II Vol.1", parent: "Deemo", items: ["One Way Love","Blossoms for Life","Juicy Gossip","Light of Buenos Aires","Chocolate Missile"] },
        { name: "Deemo-Reborn", parent: "Deemo", items: ["eterno","liar","Blue evenfall","Exodus","Squeaky Mind"] },
        { name: "Deemo-Autumn", parent: "Deemo", items: ["Reincarnation","Miocene","Funeral of Stars","Attic Dancer","Liquid Labyrinth"] },
        { name: "Deemo-Cytus II Vol.2", parent: "Deemo", items: ["Cristalisia","Nidhogg","Aya","Instinct","XYZ"] },
        { name: "Deemo-Taishi", parent: "Deemo", items: ["Stare at Your Enemies","Little Dissonance","Clematis","The Day It Blooms","Alternative Choice"] },
        { name: "Deemo-Sakuzyo Vol.2", parent: "Deemo", items: ["I Want You Back","Let's Meet Here Again","Rainbow Time Machine","Symphonic Poem \"Forbidden Love\"","Clock of fifth"] },
        { name: "Deemo-xi", parent: "Deemo", items: ["To Live","Hypnos","Cloud9","Bad Elixir","Mistilteinn"] },
        { name: "Deemo-Taiko", parent: "Deemo", items: ["3piece-JazzParty!","RIN","KAICHUTEIEN WO MOTSU SYOUJO","No Gravity","Toryu"] },
        { name: "Deemo-Capchii", parent: "Deemo", items: ["Hello From Planet","Night Code Cinderella","Purification","Demonic Pray","Ever After Story"] },
        { name: "Deemo-Sherwin", parent: "Deemo", items: ["Glaciology","Berlin Station Chief","Sikar","If Any","No Man's Land"] },
        { name: "Deemo-Ayatsugu_Otowa", parent: "Deemo", items: ["Wondering Luv","Shiny!","Queen on Ice","Chaos and Abyss -2nd Movement-","Ms.Velmunda and the Crystal Ark"] },

        // ==================== Phigros ====================
        { name: "Phigros-过去的章节", parent: "Phigros", items: ["Glaciaxion","Eradication Catastrophe","Credits","Dlyrotz","Engine x Start!! (melody mix)","光","Winter↑cube↓","混乱-Confusion","Cipher: /2&//<|0","FULi AUTO SHOOTER","HumaN","[PRAW]","Cereris","Pixel Rebelz","Non-Melodic Ragez","Sultan Rage","Class Memories","-SURREALISM-","Bonus Time","ENERGY SYNERGY MATRIX"] },
        { name: "Phigros-霓虹灯牌", parent: "Phigros", items: ["NYA!!!（Phigros ver.）","JunXion Between Life And Death(VIP Mix)","cryout","Reimei","尊师 ～The Guru～","Spasmodic","Leave All Behind"] },
        { name: "Phigros-方舟蜃景", parent: "Phigros", items: ["Colorful Days♪","micro.wav","重生","NO ONE YES MAN","望影の方舟Six","Igallta"] },
        { name: "Phigros-时钟链接", parent: "Phigros", items: ["Clock Paradox","Chronologika","Nick of Time","Chronomia","Chronos Collapse -La Campanella-","Rrhar'il"] },
        { name: "Phigros-凌日潮汐", parent: "Phigros", items: ["Crave Wave","The Chariot REVIIVAL","Luminenscence","Retribution","Destruction 3","2","1","Distorted Fate"] },
        { name: "Phigros-忘忧宫", parent: "Phigros", items: ["Ποσειδών","WATER","Miracle Forest (VIP Mix)","MOBILYS","Lyrith -迷宫リリス-"] },
        { name: "Phigros-弭刻日", parent: "Phigros", items: ["Demiurge","Demonkin","Re_Nascence（Psystyle Ver.）","Ark","After Dawn","INFiNiTE ENERZY -Overdoze-"] },
        { name: "Phigros-盗乐行", parent: "Phigros", items: ["Khalid","Quantum Hyperspace","Freaky Undulations Noble Knights of Tune","PANIC PARADISE","Re：End of a Dream"] },
        { name: "Phigros-无相乡", parent: "Phigros", items: ["心の记忆","Spotlight","NightTheater","Ramification","Der Richter","ATHAZA"] },
        { name: "Phigros-Rising Sun Traxx", parent: "Phigros", items: ["Another Me","mechanted","life flashes before weeb eyes","Break Through The Barrier","Chronostasis"] },
        { name: "Phigros-HyuN", parent: "Phigros", items: ["Infinity Heaven","Disorder","CROSS†SOUL"] },
        { name: "Phigros-GOOD", parent: "Phigros", items: ["GOODTEK","GOODBOUNCE","GOODWORLD","GOODFORTUNE","GOODRAGE"] },
        { name: "Phigros-姜米条", parent: "Phigros", items: ["Shadow","心之所向","inferior"] },
        { name: "Phigros-WAVEAT", parent: "Phigros", items: ["Initialize","桜树街道","Get Ready!!","volcanic"] },
        { name: "Phigros-Muse Dash", parent: "Phigros", items: ["XING","Final Step!","Cthugha"] },
        { name: "Phigros-KALPA", parent: "Phigros", items: ["Time to Night Sky (feat. Lee Yu Jin)","HAZARD","Another Me","Don't Never Around","RESSiSTANCE"] },
        { name: "Phigros-Lanota", parent: "Phigros", items: ["Apocalypse","Protoflicker","Horizon Blue","You are the Miserable","Stasis"] },
        { name: "Phigros-单曲精选集", parent: "Phigros", items: ["dB doll","もぺもぺ","Next Time","Dash","Rubbish Sorting","云女孩","Sparkle New Life","Aphasia","Wavetapper","游园地","Apocalyptic","With You","萤火虫の怨","Dead Soul","Snow Desert","Electron","万吨匿名信","Äventyr","开心病","风屿","華灯爱","Get Back","Orthodox","End Me","Unorthodox Thoughts","Eltaw","狂喜兰舞","Parallel Retrogression(Game Ver.)","The Mountain Eater","Find_Me","Drop It","MARENOL","Magenta Potion","Hardcore Kwaya","Cervelle Connexion","Träne","Speed Up!","modulus","Khronostasis Katharsis","Starduster","Burn","Doppelganger","Sein","Better Graphic Animation","energy trixxx","雪降り、メリクリ","Aleph-0","SIGMA","Palescreen","RIPPER","青丘","インフェルノシティ","Upshift","Poison AND÷OR Affection","Random","零号车辆","Bougainvillea"] },
        { name: "Phigros-2024-2025新增", parent: "Phigros", items: ["聖夜讃歌","G.V.N. (Glitter, Vomitus and Neon)","Crush BETA","Broken Sky","BRAIN HACKER","Antithese","PRAGMATISM -RESURRECTION-","Shine After","Bloom","今天不是明天","Bounded Quietude","Grimheart","Thrash force","Originally","Schadenfreude","Le temps perdu","Fixations Toward the Stars","valor/starcross","Alice in a xxxxxxxx","Frozen Heart","Helios","雪降り 雪が降っている","Retribution  Cycle of Redemption ","000 -Ain Soph Aur-","So laggy! (feat. Uzumaki)","BANGING STRIKE","Locomotive","最高傑作","ABYSS MOTION 192.333","彼方へ、名もなき海辺より","Xenophobia","Verrückt","After ZABANIYA (MUG Edit)","下一秒","TECHNOPOLIS 2085","Radiance","Diamond Dust","Stardust:RAY","Aphrodite's Child (short ver.)","DevIAtiOn (short ver.)","NO x"] },

        // ==================== VOEZ ====================
        { name: "VOEZ-常规曲库", parent: "VOEZ", items: ["Akari","Alice in Secret Circus","Alice Music","Ancient Rose","And More Or Less","Aquamarine","Aquarius","ARCANA","Asian Dance","Atropos","Back to Basics","Bataille Industrielle","Beat it Beep","Beyond the Horizon","BLANKET","Bloody Purity","Brightness","Butterfly","Capella","Carnation","CERBERUS","Chandelier Garden","Checkmate","Chicken-Hearted","Chromium","CitanLu","COMANTA LEBU","Conflict","Crystal Cradle","Cyberdynez","Czarte","DainsleiF","Durandal -Magical Freezing-","Dynamo","Eastern Horoscope","Eclipse","ELECTRiCiTY","Emotion In Motion","Event Horizon","Extreme Attack","Fading Star","Farewell Waltz","Fis-sure","Frozen Emotion","Flame Dark","Flash Gun","FREEDOM DiVE","FUSE","Gamegame","Gigantic Saga","Go or Stay","Graduation SongPieces of Memory","Gumballs World","Heartless Diary","Highlander","Holy Knight","Hop Step Adventure☆","Imaginary Friends (VOEZ edit)","Imperium","Infinite Puzzle","Infinite Wonderland","iNSPiRED","Interstellar Experience","Ire","Keep You Safe","Kimi to mita sora no uta","Kokoro","Labyrinth of LOVE","LAST ESCAPE","Leviathan","Lexus Cyanixs","Lifill","Like Asian Spirit","LILI","Lost in the nowhere","Lv.0","MadteK","Masquerade","Matsurizuki","Merry Merry Rayark Xmas","MUSIC BOX","NO NIGHT MORE SOUL!","Noël","Ouroboros Infinite Circulation","Overclock","Owari to Hajimari no Oto","Paraline","Party Rave","Persona Circus","pheneX","Platinum","popotnik  The Traveller of Ljubljana","post-script","PrayStation","PRETTY DOG","PUPA","Qualia","Ragnarok","RAINBOW","Rainbow Adventure","Ready For The Fight","Re:sound","From the Full moon World.","Refel","Revival","Rotating Sky","Ruination","Run Lads Run","Sacred","Saika","Sanctity","Sayonara Express","Scent","Scherzo","Second Breath","seek","Shamisen Drives The Wind","Silent Voice","Sky-HIGH","Sky Love Fantasia","SMILE GENERATION","SnowFlake","Snowflakes","Snowman","Something Spicy","Sonic Stream","Soul in Call","Spring","Spring snowflake flower","Sprout","Statical Improvement","SupaMax","The Black Case","The Graduate","The Longest Night","They seem like blossoms yet...","Time Phase Pt.1","Time Travel","Time Traveller","Tipsy Dessert","To My Friend","To next page","Today was a bad day","-tokashite-","Tougenkyou","Toys Etude","Transparency","Tsuioku","Tsukiyura","Twinkle wink","Ultimate Weapon pt.2","Unbalance Voice","UNiCoЯE","Until the Blue Moon Rises","Valle De Los Caídos","Vieille Ville","Violet","Warp Drive","White Dwarf Stars","Wilt","Wish upon a shooting star","WonderWing","Yaoyue","Yggdrasil","Yoake o matsu kimi no uta","双龙飞闪-Dual Dragoon-"] },
        { name: "VOEZ-Switch限定", parent: "VOEZ", items: ["Ascension to Heaven","Blue Heat Haze"] },
        { name: "VOEZ-已下架", parent: "VOEZ", items: ["52Hz","I love you.","Big world, small world.","Cupid needs love.","Gamegame?"] },
        { name: "VOEZ-主题曲", parent: "VOEZ", items: ["Colorful Voice"] }
    ],

    _flatItems: null,

    _buildFlatItems: function() {
        if (this._flatItems) return;
        this._flatItems = [];
        for (var i = 0; i < this._categories.length; i++) {
            var cat = this._categories[i];
            var path = (cat.parent ? cat.parent + "/" : "") + cat.name;
            for (var j = 0; j < cat.items.length; j++) {
                this._flatItems.push({ term: cat.items[j], path: path, id: "sg_" + i + "_" + j });
            }
        }
    },

    search: async function (query, page, type) {
        page = page || 1;
        this._buildFlatItems();
        var flat = this._flatItems;

        // 菜单触发
        if (query === "菜单" || query === "分类" || query === "帮助" || query.toLowerCase() === "deemo" || query.toLowerCase() === "phigros" || query.toLowerCase() === "voez") {
            var cats = this._categories;
            var items = [];
            for (var i = 0; i < cats.length; i++) {
                items.push({ id: "cat_" + i, title: cats[i].name, artist: "", album: cats[i].name, duration: 0, artwork: "" });
            }
            var ps = 10, s = (page - 1) * ps, e = s + ps;
            return { isEnd: e >= items.length, data: items.slice(s, e) };
        }

        // 搜索匹配
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