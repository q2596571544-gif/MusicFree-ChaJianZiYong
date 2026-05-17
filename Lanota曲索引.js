// 朔㷰磐·音游曲库索引 - Lanota
// 功能: 收录Lanota全部章节/曲包曲目，搜索曲名或章节名查看，专辑字段可复制曲名
module.exports = {
    platform: "Lanota曲库",
    author: "朔㷰磐",
    version: "1.0.0",
    primaryKey: ["id"],
    cacheControl: "no-cache",
    hints: {
        importMusicItem: ["搜索“Lanota”或“菜单”查看全部章节分类。", "直接搜索曲名定位。", "专辑字段为曲名，点击即可复制。"],
        importMusicSheet: []
    },

    _categories: [
        { name: "Lanota-主线序章", parent: "Lanota", items: ["Dream goes on","Only the place where truth has engraved","Chronosis song","Dream goes on (Legacy)","Only the place where truth has engraved (Legacy)","Chronosis song (Legacy)"] },
        { name: "Lanota-主线第一章", parent: "Lanota", items: ["vivid color","Ne m'oubliez pas","ciel nocturne","Night Yacht","DARSANA","Prism","Trauma","Frey's Philosophy","vivid color (Legacy)","Ne m'oubliez pas (Legacy)","ciel nocturne (Legacy)","Night Yacht (Legacy)","DARSANA (Legacy)","Prism (Legacy)","Trauma (Legacy)"] },
        { name: "Lanota-主线第二章", parent: "Lanota", items: ["Bokura no michi","Eternal Love","Matane","Reclaim","Journey","cyanine"] },
        { name: "Lanota-主线第三章", parent: "Lanota", items: ["Apocalypse","Song for Sprites","Phoebus","Duelo","Androgynos","You are the Miserable"] },
        { name: "Lanota-主线第四章", parent: "Lanota", items: ["Raise(Radio Edit)","Geranium","edge of the world","NIENTE","Protoflicker","Stasis"] },
        { name: "Lanota-主线第五章", parent: "Lanota", items: ["Yukianesa","Lightning","Rainmaker","ΤεμπεΣΤ","SolarOrbit -Connected with the Espabrother-"] },
        { name: "Lanota-主线第六章", parent: "Lanota", items: ["monolith","Tithonus","Weg","Destiny","Horizon Blue","Bloody Marquis","Wolves Standing Towards Enemies"] },
        { name: "Lanota-主线第七章", parent: "Lanota", items: ["Inorganyx Prayer","Living Will","Nobo -outflowing heart-","The Daybreak Will Never Come Again.","Astaroth"] },
        { name: "Lanota-主线第八章", parent: "Lanota", items: ["KNEEL","Level Up","PANGRAMIST","Potlatch","Nemexis","Drama Queen","Vengeance of the \"V\"","Immaculate"] },
        { name: "Lanota-支线第一章", parent: "Lanota", items: ["Just a Fairy Tale","The Lonely Wolf","Vortex","Ryusa No Toba -Casino de Quicksand-","Promised Heaven","Memoria"] },
        { name: "Lanota-支线第二章", parent: "Lanota", items: ["The Journey to Eden","Colorful Note","Umioto","LSDJACK","Little Painter","Nagi"] },
        { name: "Lanota-扩充A", parent: "Lanota", items: ["Broken Marionette","3rd Avenue","Hall of Mirrors","Tokyo Snorkel (feat. nicamoq)","Time To Rock","Janus Ending to Begin","New World feat.Hitomi Takahashi","Tenten (New Vocal Version)"] },
        { name: "Lanota-扩充B", parent: "Lanota", items: ["Unshakable","Savage Hardcore","Reignite","Funky Life","ZENITHALIZE(Alternative Guitar Solo ver.)"] },
        { name: "Lanota-扩充C", parent: "Lanota", items: ["Shining Girl","Shyness Love","Returner","May and December","MilK","Lonely Departure"] },
        { name: "Lanota-扩充D", parent: "Lanota", items: ["Sakura Saku(feat. nicamoq)","Glamorous Girl","MINAZUKI","Hayabusa","Specta","Sein ft. kuroa x Aramaki"] },
        { name: "Lanota-扩充E", parent: "Lanota", items: ["Ever Free","Nayuta","Sol e Mar","Oblivion of pecado","Memento Mori"] },
        { name: "Lanota-扩充F", parent: "Lanota", items: ["Get Ready","Pusha Plucka!!","Anesthesia","Aihana (2017 Revived)","Beast in the Dream"] },
        { name: "Lanota-扩充G", parent: "Lanota", items: ["Remaining days","Kiss me","How is life?","Internet neurose","We like girls"] },
        { name: "Lanota-扩充H", parent: "Lanota", items: ["Romance Wars","Ignotus","Quon","Lethaeus","Lumia"] },
        { name: "Lanota-扩充I", parent: "Lanota", items: ["Tobitate! DREAM PARTY","Scarlet Lance","FUJIN Rumble","Black MInD","Got more raves?"] },
        { name: "Lanota-扩充J", parent: "Lanota", items: ["Sign Mellow","Misty Farewell","Mints - Clubmix - 2017","The Promised Land","PYONTA"] },
        { name: "Lanota-扩充K", parent: "Lanota", items: ["MariannE (Lanota Edit)","Fortuna","Science-kun","Clock Atelier","Aishiteirunante kantanni iuyouna lovesong ga kiraidatta"] },
        { name: "Lanota-扩充L", parent: "Lanota", items: ["Let the Music Play","Pulsation","Tears of Gaia","Unforgiven Souls","Lively Festival"] },
        { name: "Lanota-扩充M", parent: "Lanota", items: ["Misunderstanding","Far Away","Miracle Sugite Yabai (feat. shully)","bristle grass","Tommy Gun"] },
        { name: "Lanota-扩充N", parent: "Lanota", items: ["Birds of Plague","shattered","Show Your Style","VR in the Virtual World","Final Resonance"] },
        { name: "Lanota-扩充O", parent: "Lanota", items: ["Chocolate Adventure feat. Nanahira","ZIGOKUNOGOUKADE YAKINIKUTAIKAI","Vegetarian of revenge","The Fatal Fantasia","Refill"] },
        { name: "Lanota-扩充P", parent: "Lanota", items: ["Tea With Mr.Cui","Mulan","Remembering Madam Gongsun","The Peony","Farewell"] },
        { name: "Lanota-扩充Q", parent: "Lanota", items: ["Euphoric World","RAINBOW HARDCORE","Surface (w/ KIKYO MONDAI)","PaleScreen","Hate The Most","Broken Stars"] },
        { name: "Lanota-扩充R", parent: "Lanota", items: ["Let you DIVE!","Knight Rider","ADAM","LETHAL;WEAPON","ANGEL HALO"] },
        { name: "Lanota-扩充S", parent: "Lanota", items: ["Icebreaker","Yeti Escape","The Contemporary Genesis","Paranoia Sonatina","Impromptu AD2021＃1-Y"] },
        { name: "Lanota-扩充T", parent: "Lanota", items: ["sankayou","anata","Épine rouge","Route1","fukanzen na shiawase"] },
        { name: "Lanota-扩充U", parent: "Lanota", items: ["Leave All Behind","Clock Paradox","Concvssion","Rrhar'il","Igallta"] },
        { name: "Lanota-扩充V", parent: "Lanota", items: ["Psychometry","Flutter Echo","fallin' fallin' (prod. INFX, Ella Jung, Limpid)","Binary Wonderland","Eschatology"] },
        { name: "Lanota-扩充W", parent: "Lanota", items: ["White Knight","Among Wolves","Orphe","Avys","Le Porteur d'Ombre"] },
        { name: "Lanota-扩充X", parent: "Lanota", items: ["The Promised Land","Secret Illumination","Spinel","amethyst","GALACTIC WARZONE"] },
        { name: "Lanota-扩充Y", parent: "Lanota", items: ["Gray：MachineGang","Turning POINT","Summer Memories","Yokyuumi","Vehicle Zero"] },
        { name: "Lanota-散落回声1", parent: "Lanota", items: ["Burn","Autism","IN","Regain","Poppy"] },
        { name: "Lanota-虚拟歌手精选辑", parent: "Lanota", items: ["Clockwork girl","Dance Robot Dance","Getting Faster and Faster","Seyana.","Tetoris"] },
        { name: "Lanota-PinocchioP精选辑", parent: "Lanota", items: ["God-ish","Anonymous M","Magical Girl and Chocolate"] },
        { name: "Lanota-扩充Z", parent: "Lanota", items: ["Reverie","AMEMOYOU","Fairy's Crown","Recreant of the Everlasting","Antikythera"] }
    ],

    _flatItems: null,

    _buildFlatItems: function() {
        if (this._flatItems) return;
        this._flatItems = [];
        for (var i = 0; i < this._categories.length; i++) {
            var cat = this._categories[i];
            var path = (cat.parent ? cat.parent + "/" : "") + cat.name;
            for (var j = 0; j < cat.items.length; j++) {
                this._flatItems.push({ term: cat.items[j], path: path, id: "lan_" + i + "_" + j });
            }
        }
    },

    search: async function (query, page, type) {
        page = page || 1;
        this._buildFlatItems();
        var flat = this._flatItems;

        if (query === "菜单" || query === "分类" || query === "帮助" || query.toLowerCase() === "lanota") {
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