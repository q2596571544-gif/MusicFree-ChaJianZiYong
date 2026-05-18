// 朔㷰磐·英文词汇索引
// 功能: 收录通用爆款、科幻概念、音乐、艺术四类英文词汇，标题为中文解释+英文原词，专辑字段为英文可复制
module.exports = {
    platform: "英文索引",
    author: "朔㷰磐",
    version: "1.0.2",
    primaryKey: ["id"],
    cacheControl: "no-cache",
    hints: {
        importMusicItem: ["搜索“词汇”或“菜单”查看四大分类。", "搜索中英文关键词匹配。", "专辑字段为英文原词，点击即可复制。"],
        importMusicSheet: []
    },

    _categories: [
        {
            name: "通用爆款词汇",
            parent: "英文词汇",
            items: [
                "Welcome 欢迎","Journey 旅程","Transformation 转变","Mystery 神秘",
                "Unveil 揭晓","The Secret of ……的秘密","The Truth About 关于……的真相",
                "Answer 答案","Future 未来","Discovery 发现","Origin 起源",
                "Hidden 隐藏的","Awakening 觉醒","Revelation 启示","Ultimate 终极",
                "Beyond 超越","Inside 深入内部","Explained 解释","Decoded 解码",
                "Breakdown 拆解分析","Evolution 进化","Revolution 革命","Vision 愿景",
                "Destiny 命运","Legend 传奇","Legacy 遗产/传承","Paradox 悖论",
                "Phenomenon 现象","Eclipse 日食/月食","Horizon 地平线","Odyssey 漫长旅程/史诗"
            ]
        },
        {
            name: "科幻概念词汇",
            parent: "英文词汇",
            items: [
                "Sci-Fi 科幻","Cyborg 半机械人/赛博格","Cyberspace 网络空间",
                "Dystopia 反乌托邦","Fantasy 奇幻","Galaxy 星系","Hologram 全息影像",
                "Infinite 无限","Matrix 矩阵","Multiverse 多元宇宙","Nebula 星云",
                "Quantum 量子","Singularity 奇点","Synthetic 人造的/合成的",
                "Virtual Reality 虚拟现实","Time Loop 时间循环","Parallel Universe 平行宇宙",
                "Simulation 模拟","Cybernetic 控制论的/赛博","Nanotech 纳米技术",
                "Alien 外星人","Exoplanet 系外行星","Hyperspace 超空间","Wormhole 虫洞",
                "Teleportation 瞬间传输","Post-Apocalyptic 后末日","Space Opera 太空歌剧",
                "Alternate Timeline 替代时间线","Artificial Intelligence 人工智能",
                "Superintelligence 超级智能","Biohacking 生物黑客","Transhumanism 超人类主义",
                "Retro Futurism 复古未来主义","Solarpunk 太阳能朋克","Cyberpunk 赛博朋克",
                "Steampunk 蒸汽朋克","Stellar 恒星的","Void 虚空","Terraform 地球化改造",
                "Cryosleep 冷冻休眠","Dark Matter 暗物质","Event Horizon 事件视界",
                "First Contact 首次接触","Light Speed 光速","Neural Link 神经链接",
                "Orbital 轨道的","Plasma 等离子体","Space Colony 太空殖民地",
                "Star Gate 星际之门","Xenobiology 外星生物学","Zero Gravity 零重力"
            ]
        },
        {
            name: "音乐词汇",
            parent: "英文词汇",
            items: [
                "Music 音乐","Song 歌曲","Cover 翻唱/翻奏","Original 原创",
                "Instrumental 纯器乐/无人声","Piano 钢琴","Guitar 吉他","Violin 小提琴",
                "Symphony 交响乐","Orchestra 管弦乐团","Concert 音乐会","Live 现场演出",
                "Performance 表演","Rehearsal 排练","Practice 练习","Composing 作曲",
                "Production 音乐制作","Beat 节拍","Remix 混音版","Mashup 混搭",
                "Acoustic 原声/不插电","Orchestral 管弦乐的","Lo-fi 低保真",
                "Synthwave 合成器浪潮","Ambient 氛围音乐","Improvisation 即兴演奏",
                "Sight-reading 视奏","Chord Progression 和弦进行","Melody 旋律",
                "Harmony 和声","Rhythm 节奏","Conducting 指挥","Masterclass 大师课",
                "Vocal 人声","Chorus 副歌","Duet 二重奏/二重唱","Solo 独奏/独唱",
                "Ensemble 合奏团","Soundtrack 原声带","Unplugged 不插电","Demo 小样",
                "Freestyle 即兴说唱/自由发挥","Sampling 采样","Mixing 混音",
                "Mastering 母带处理","Drop 引爆点(电子乐术语)"
            ]
        },
        {
            name: "艺术/视觉词汇",
            parent: "英文词汇",
            items: [
                "Speedpaint 快速绘画(视频)","Digital Art 数字艺术","Drawing 素描",
                "Sketch 速写","Process 创作过程","Timelapse 延时摄影/过程",
                "Art Challenge 绘画挑战","Ink Drawing 墨水画","Watercolor 水彩画",
                "Character Design 角色设计","Animation 动画","Storyboard 故事板",
                "Fan Art 同人图","Concept Art 概念设计","Gesture Drawing 动态速写",
                "Figure Drawing 人体素描","Portrait 肖像画","Landscape 风景画",
                "Still Life 静物画","Oil Painting 油画","Digital Painting 数字绘画",
                "Pixel Art 像素画","3D Modeling 3D建模","Sculpting 雕刻(数字/传统)",
                "Calligraphy 书法","Typography 字体排印","Color Palette 调色板/配色",
                "Composition 构图","Perspective 透视","Shading 明暗处理",
                "Line Art 线稿","Doodle 涂鸦","Collage 拼贴画","Mixed Media 综合媒介",
                "Generative Art 生成式艺术","Vector Art 矢量艺术","Brushwork 笔法",
                "Canvas 画布","Ceramics 陶艺"
            ]
        }
    ],

    _flatItems: null,

    _buildFlatItems: function() {
        if (this._flatItems) return;
        this._flatItems = [];
        for (var i = 0; i < this._categories.length; i++) {
            var cat = this._categories[i];
            for (var j = 0; j < cat.items.length; j++) {
                var term = cat.items[j];
                var spaceIdx = term.indexOf(" ");
                var en = spaceIdx > -1 ? term.substring(0, spaceIdx) : term;
                this._flatItems.push({
                    term: term,
                    en: en,
                    catName: cat.name,
                    id: "word_" + i + "_" + j
                });
            }
        }
    },

    search: async function (query, page, type) {
        page = page || 1;
        this._buildFlatItems();
        var flat = this._flatItems;

        // 菜单触发：搜索“词汇”“菜单”“分类”“帮助”时显示所有大类
        if (query === "词汇" || query === "菜单" || query === "分类" || query === "帮助") {
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

        // 精确匹配分类名 → 展开该分类下所有词汇
        var q = query.toLowerCase();
        for (var i = 0; i < this._categories.length; i++) {
            if (this._categories[i].name.toLowerCase() === q) {
                var cat = this._categories[i];
                var ps = 10, s = (page - 1) * ps, e = s + ps, pageItems = cat.items.slice(s, e);
                var items = [];
                for (var j = 0; j < pageItems.length; j++) {
                    var term = pageItems[j];
                    var spaceIdx = term.indexOf(" ");
                    var en = spaceIdx > -1 ? term.substring(0, spaceIdx) : term;
                    var zh = spaceIdx > -1 ? term.substring(spaceIdx + 1) : "";
                    items.push({
                        id: "cat_item_" + i + "_" + (s + j),
                        title: zh + " (" + en + ")",
                        artist: cat.name,
                        album: en,
                        duration: 0,
                        artwork: ""
                    });
                }
                return { isEnd: e >= cat.items.length, data: items };
            }
        }

        // 模糊搜索：匹配中英文关键词
        var matched = [];
        for (var i = 0; i < flat.length; i++) {
            if (flat[i].term.toLowerCase().indexOf(q) !== -1) {
                matched.push(flat[i]);
            }
        }
        var ps = 10, s = (page - 1) * ps, e = s + ps, pItems = matched.slice(s, e);
        var items = [];
        for (var j = 0; j < pItems.length; j++) {
            var m = pItems[j];
            var spaceIdx = m.term.indexOf(" ");
            var zh = spaceIdx > -1 ? m.term.substring(spaceIdx + 1) : "";
            items.push({
                id: m.id + "_" + (page * 1000 + j),
                title: zh + " (" + m.en + ")",
                artist: m.catName,
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