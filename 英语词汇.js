// 朔㷰磐·英文词汇索引
// 功能: 收录通用爆款、科幻概念、音乐、艺术四类英文词汇，搜索关键词查看，专辑字段为英文词可复制，标题为中文解释
module.exports = {
    platform: "英文词汇",
    author: "朔㷰磐",
    version: "1.0.0",
    primaryKey: ["id"],
    cacheControl: "no-cache",
    hints: {
        importMusicItem: ["搜索“词汇”或“菜单”查看四大分类。", "搜索中英文关键词匹配。", "专辑字段为英文原词，点击即可复制。", "标题为中文解释。"],
        importMusicSheet: []
    },

    _categories: [
        {
            name: "通用爆款词汇",
            parent: "英文词汇",
            items: [
                { en: "Welcome", zh: "欢迎" },
                { en: "Journey", zh: "旅程" },
                { en: "Transformation", zh: "转变" },
                { en: "Mystery", zh: "神秘" },
                { en: "Unveil", zh: "揭晓" },
                { en: "The Secret of", zh: "……的秘密" },
                { en: "The Truth About", zh: "关于……的真相" },
                { en: "Answer", zh: "答案" },
                { en: "Future", zh: "未来" },
                { en: "Discovery", zh: "发现" },
                { en: "Origin", zh: "起源" },
                { en: "Hidden", zh: "隐藏的" },
                { en: "Awakening", zh: "觉醒" },
                { en: "Revelation", zh: "启示" },
                { en: "Ultimate", zh: "终极" },
                { en: "Beyond", zh: "超越" },
                { en: "Inside", zh: "深入内部" },
                { en: "Explained", zh: "解释" },
                { en: "Decoded", zh: "解码" },
                { en: "Breakdown", zh: "拆解分析" },
                { en: "Evolution", zh: "进化" },
                { en: "Revolution", zh: "革命" },
                { en: "Vision", zh: "愿景" },
                { en: "Destiny", zh: "命运" },
                { en: "Legend", zh: "传奇" },
                { en: "Legacy", zh: "遗产/传承" },
                { en: "Paradox", zh: "悖论" },
                { en: "Phenomenon", zh: "现象" },
                { en: "Eclipse", zh: "日食/月食" },
                { en: "Horizon", zh: "地平线" },
                { en: "Odyssey", zh: "漫长旅程/史诗" }
            ]
        },
        {
            name: "科幻概念词汇",
            parent: "英文词汇",
            items: [
                { en: "Sci-Fi", zh: "科幻" },
                { en: "Cyborg", zh: "半机械人/赛博格" },
                { en: "Cyberspace", zh: "网络空间" },
                { en: "Dystopia", zh: "反乌托邦" },
                { en: "Fantasy", zh: "奇幻" },
                { en: "Galaxy", zh: "星系" },
                { en: "Hologram", zh: "全息影像" },
                { en: "Infinite", zh: "无限" },
                { en: "Matrix", zh: "矩阵" },
                { en: "Multiverse", zh: "多元宇宙" },
                { en: "Nebula", zh: "星云" },
                { en: "Quantum", zh: "量子" },
                { en: "Singularity", zh: "奇点" },
                { en: "Synthetic", zh: "人造的/合成的" },
                { en: "Virtual Reality", zh: "虚拟现实" },
                { en: "Time Loop", zh: "时间循环" },
                { en: "Parallel Universe", zh: "平行宇宙" },
                { en: "Simulation", zh: "模拟" },
                { en: "Cybernetic", zh: "控制论的/赛博" },
                { en: "Nanotech", zh: "纳米技术" },
                { en: "Alien", zh: "外星人" },
                { en: "Exoplanet", zh: "系外行星" },
                { en: "Hyperspace", zh: "超空间" },
                { en: "Wormhole", zh: "虫洞" },
                { en: "Teleportation", zh: "瞬间传输" },
                { en: "Post-Apocalyptic", zh: "后末日" },
                { en: "Space Opera", zh: "太空歌剧" },
                { en: "Alternate Timeline", zh: "替代时间线" },
                { en: "Artificial Intelligence", zh: "人工智能" },
                { en: "Superintelligence", zh: "超级智能" },
                { en: "Biohacking", zh: "生物黑客" },
                { en: "Transhumanism", zh: "超人类主义" },
                { en: "Retro Futurism", zh: "复古未来主义" },
                { en: "Solarpunk", zh: "太阳能朋克" },
                { en: "Cyberpunk", zh: "赛博朋克" },
                { en: "Steampunk", zh: "蒸汽朋克" },
                { en: "Stellar", zh: "恒星的" },
                { en: "Void", zh: "虚空" },
                { en: "Terraform", zh: "地球化改造" },
                { en: "Cryosleep", zh: "冷冻休眠" },
                { en: "Dark Matter", zh: "暗物质" },
                { en: "Event Horizon", zh: "事件视界" },
                { en: "First Contact", zh: "首次接触" },
                { en: "Light Speed", zh: "光速" },
                { en: "Neural Link", zh: "神经链接" },
                { en: "Orbital", zh: "轨道的" },
                { en: "Plasma", zh: "等离子体" },
                { en: "Space Colony", zh: "太空殖民地" },
                { en: "Star Gate", zh: "星际之门" },
                { en: "Xenobiology", zh: "外星生物学" },
                { en: "Zero Gravity", zh: "零重力" }
            ]
        },
        {
            name: "音乐词汇",
            parent: "英文词汇",
            items: [
                { en: "Music", zh: "音乐" },
                { en: "Song", zh: "歌曲" },
                { en: "Cover", zh: "翻唱/翻奏" },
                { en: "Original", zh: "原创" },
                { en: "Instrumental", zh: "纯器乐/无人声" },
                { en: "Piano", zh: "钢琴" },
                { en: "Guitar", zh: "吉他" },
                { en: "Violin", zh: "小提琴" },
                { en: "Symphony", zh: "交响乐" },
                { en: "Orchestra", zh: "管弦乐团" },
                { en: "Concert", zh: "音乐会" },
                { en: "Live", zh: "现场演出" },
                { en: "Performance", zh: "表演" },
                { en: "Rehearsal", zh: "排练" },
                { en: "Practice", zh: "练习" },
                { en: "Composing", zh: "作曲" },
                { en: "Production", zh: "音乐制作" },
                { en: "Beat", zh: "节拍" },
                { en: "Remix", zh: "混音版" },
                { en: "Mashup", zh: "混搭" },
                { en: "Acoustic", zh: "原声/不插电" },
                { en: "Orchestral", zh: "管弦乐的" },
                { en: "Lo-fi", zh: "低保真" },
                { en: "Synthwave", zh: "合成器浪潮" },
                { en: "Ambient", zh: "氛围音乐" },
                { en: "Improvisation", zh: "即兴演奏" },
                { en: "Sight-reading", zh: "视奏" },
                { en: "Chord Progression", zh: "和弦进行" },
                { en: "Melody", zh: "旋律" },
                { en: "Harmony", zh: "和声" },
                { en: "Rhythm", zh: "节奏" },
                { en: "Conducting", zh: "指挥" },
                { en: "Masterclass", zh: "大师课" },
                { en: "Vocal", zh: "人声" },
                { en: "Chorus", zh: "副歌" },
                { en: "Duet", zh: "二重奏/二重唱" },
                { en: "Solo", zh: "独奏/独唱" },
                { en: "Ensemble", zh: "合奏团" },
                { en: "Soundtrack", zh: "原声带" },
                { en: "Unplugged", zh: "不插电" },
                { en: "Demo", zh: "小样" },
                { en: "Freestyle", zh: "即兴说唱/自由发挥" },
                { en: "Sampling", zh: "采样" },
                { en: "Mixing", zh: "混音" },
                { en: "Mastering", zh: "母带处理" },
                { en: "Drop", zh: "引爆点(电子乐术语)" }
            ]
        },
        {
            name: "艺术/视觉词汇",
            parent: "英文词汇",
            items: [
                { en: "Speedpaint", zh: "快速绘画(视频)" },
                { en: "Digital Art", zh: "数字艺术" },
                { en: "Drawing", zh: "素描" },
                { en: "Sketch", zh: "速写" },
                { en: "Process", zh: "创作过程" },
                { en: "Timelapse", zh: "延时摄影/过程" },
                { en: "Art Challenge", zh: "绘画挑战" },
                { en: "Ink Drawing", zh: "墨水画" },
                { en: "Watercolor", zh: "水彩画" },
                { en: "Character Design", zh: "角色设计" },
                { en: "Animation", zh: "动画" },
                { en: "Storyboard", zh: "故事板" },
                { en: "Fan Art", zh: "同人图" },
                { en: "Concept Art", zh: "概念设计" },
                { en: "Gesture Drawing", zh: "动态速写" },
                { en: "Figure Drawing", zh: "人体素描" },
                { en: "Portrait", zh: "肖像画" },
                { en: "Landscape", zh: "风景画" },
                { en: "Still Life", zh: "静物画" },
                { en: "Oil Painting", zh: "油画" },
                { en: "Digital Painting", zh: "数字绘画" },
                { en: "Pixel Art", zh: "像素画" },
                { en: "3D Modeling", zh: "3D建模" },
                { en: "Sculpting", zh: "雕刻(数字/传统)" },
                { en: "Calligraphy", zh: "书法" },
                { en: "Typography", zh: "字体排印" },
                { en: "Color Palette", zh: "调色板/配色" },
                { en: "Composition", zh: "构图" },
                { en: "Perspective", zh: "透视" },
                { en: "Shading", zh: "明暗处理" },
                { en: "Line Art", zh: "线稿" },
                { en: "Doodle", zh: "涂鸦" },
                { en: "Collage", zh: "拼贴画" },
                { en: "Mixed Media", zh: "综合媒介" },
                { en: "Generative Art", zh: "生成式艺术" },
                { en: "Vector Art", zh: "矢量艺术" },
                { en: "Brushwork", zh: "笔法" },
                { en: "Canvas", zh: "画布" },
                { en: "Ceramics", zh: "陶艺" }
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
                this._flatItems.push({
                    term: cat.items[j].en + " " + cat.items[j].zh,
                    en: cat.items[j].en,
                    zh: cat.items[j].zh,
                    path: path,
                    id: "word_" + i + "_" + j
                });
            }
        }
    },

    search: async function (query, page, type) {
        page = page || 1;
        this._buildFlatItems();
        var flat = this._flatItems;

        if (query === "菜单" || query === "分类" || query === "帮助" || query === "词汇") {
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
            var ps = 10, s = (page - 1) * ps, e = s + ps;
            return { isEnd: e >= items.length, data: items.slice(s, e) };
        }

        var q = query.toLowerCase(), matched = [];
        for (var i = 0; i < flat.length; i++) {
            if (flat[i].term.toLowerCase().indexOf(q) !== -1) {
                matched.push(flat[i]);
            }
        }
        var ps = 10, s = (page - 1) * ps, e = s + ps, pItems = matched.slice(s, e);
        var items = [];
        for (var j = 0; j < pItems.length; j++) {
            var m = pItems[j];
            items.push({
                id: m.id + "_" + (page * 1000 + j),
                title: m.zh.length > 15 ? m.zh.substring(0, 15) + "…" : m.zh,
                artist: m.path.split("/")[0] || "",
                album: m.en,
                duration: 0,
                artwork: ""
            });
        }
        return { isEnd: e >= matched.length, data: items };
    },

    getMediaSource: function () { return { url: "", headers: {}, userAgent: "" }; },
    getMusicInfo: function (item) { return { id: item.id, title: item.title, artist: item.artist, album: item.album, duration: 0 }; },
    getLyric: function (item) { return "英文：" + item.album + "\n中文：" + item.title; },
    getAlbumInfo: async function () { return { isEnd: true, data: [] }; },
    getMusicSheetInfo: async function () { return { isEnd: true, data: [] }; },
    getArtistWorks: async function () { return { isEnd: true, data: [] }; },
    importMusicItem: async function () { return null; },
    importMusicSheet: async function () { return null; },
    getTopLists: async function () { return []; },
    getTopListDetail: async function () { return { isEnd: true, data: [] }; }
};