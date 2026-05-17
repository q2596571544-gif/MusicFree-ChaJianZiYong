// B站音乐UP主与频道索引 - MusicFree 本地分类插件（修复版）
// 作者: 朔㷰磐
// 功能: 搜索UP主名称或分类关键词，展示B站音乐区UP主和频道索引，纯本地数据，无需联网
// 修复: 专辑字段改为UP主/频道名，点击即可复制
module.exports = {
    platform: "B站音乐索引",
    author: "朔㷰磐",
    version: "1.1.0",
    primaryKey: ["id"],
    cacheControl: "no-cache",
    hints: {
        importMusicItem: ["搜索UP主名称或分类关键词，展示B站音乐区索引。", "搜索“分类”或“菜单”查看所有大类。", "专辑字段为UP主/频道名，点击即可复制。"],
        importMusicSheet: []
    },

    _categories: [
        // ===== 频道类 =====
        { name: "综合歌单", parent: "频道", items: ["JLRS日落fm","聆听最好的世界","挽风丶Sama","北流嘉措","醉心日推音乐","桓桓Aileen","童童音乐","音乐共享中心","音乐私藏馆","宝藏音乐计划","音乐菌来了","每日音乐热推","音乐汪Star","音乐罐头厂","深夜唱片屋","耳机里的浪漫","汽水音乐台","音乐记事本","热歌速递员","治愈旋律收容所"] },
        { name: "氛围纯音", parent: "频道", items: ["Eternal-L","轻音乐时代","纯音乐博物馆","氛围音乐舱","背景音乐精选","枕边音乐台","自习室背景音","工作学习BGM","专注音乐流","梦境氛围音乐","舒缓钢琴集","助眠白噪音","冥想音乐频道","读书背景乐","咖啡厅歌单"] },
        { name: "风格场景", parent: "频道", items: ["Phonk电音社","夜行音乐列车","蒸汽波派对","动漫音乐库","游戏原声带","影视金曲库","经典老歌回放","怀旧金曲频道","欧美音乐速递","日语歌单屋","韩流音乐站","古风音乐阁","国风音乐集","民谣小屋","摇滚唱片架","说唱磁带电台"] },
        { name: "AI二创", parent: "频道", items: ["AI音乐星河","未来音乐工坊","虚拟歌手中心","歌声合成站","音乐二创坊","歌曲改编实验室","旋律重构计划","老歌新唱机","经典重编曲","热门Remix","歌曲拼接怪","副歌收藏夹","高潮剪辑师","旋律裁缝铺","前奏收藏家"] },

        // ===== UP主类 =====
        { name: "音乐分享", parent: "UP主", items: ["JLRS日落fm","音乐私藏馆","橙子青提","CHAOSLAB混沌实验室","peach63","shareplaylist","无态度-音乐电台","小猪音乐坊PMW"] },
        { name: "动漫二次元", parent: "UP主", items: ["小小佐仓千代","音乐饭君","呦猫UNEKO","起名费劲太郎","泠鸢yousa","三无MarBlue","茶理理理子","封茗囧菌","Akie秋绘","祈Inory","凑诗","喵酱油"] },
        { name: "电子制作", parent: "UP主", items: ["EBIMAYO","Marshmellomusic","小可儿","一只PYZ","AlanWalker官方频道","拓金Takuau"] },
        { name: "国风古风", parent: "UP主", items: ["音乐人关大洲","宁采臣丶在唱歌","慕寒MH","十七的77","曦琦广播站","双笙","玄觞","西瓜JUN","泥鳅Niko","王胖子","叶洛洛","李常超","音频怪物","河图","银临","董真"] },
        { name: "乐器演奏", parent: "UP主", items: ["BiBiPiano","自然音乐","竖琴小杏仁","TwoSetViolin","王微致","可可桃交响乐团","VINHETEIRO","掘火档案","OriginLab","brucknerfan","方锦龙","Vicky宣宣","桃子鱼仔ukulele教室"] },
        { name: "虚拟翻唱", parent: "UP主", items: ["黑崎子","Animenzzz","祖娅纳惜","萧忆情Alex","KBShinya","哦漏QAQ","苏杉杉"] },

        // ===== 独立UP主 =====
        { name: "独立UP主", parent: "UP主", items: ["Marcin_Official","肇岁初十","ProjectMili"] }
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
                    id: "bili_" + i + "_" + j
                });
            }
        }
    },

    search: async function (query, page, type) {
        page = page || 1;
        this._buildFlatItems();
        var flat = this._flatItems;

        // 分类菜单
        if (query === "分类" || query === "菜单" || query === "帮助") {
            var cats = this._categories;
            var items = [];
            for (var i = 0; i < cats.length; i++) {
                items.push({
                    id: "cat_" + i,
                    title: this._truncate(cats[i].name, 10),
                    artist: "",
                    album: cats[i].name,  // 专辑放分类名，可复制
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

        // 分页
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
                title: this._truncate(m.term, 10),
                artist: "",
                album: m.term,  // 专辑直接放UP主/频道名，点击即可复制
                duration: 0,
                artwork: ""
            });
        }

        return { isEnd: isEnd, data: items };
    },

    _truncate: function(str, len) {
        return str.length > len ? str.substring(0, len) : str;
    },

    getMediaSource: function (item, quality) {
        return { url: "", headers: {}, userAgent: "" };
    },
    getMusicInfo: function (item) {
        return { id: item.id, title: item.title, artist: "", album: item.album, duration: 0 };
    },
    getLyric: function (item) {
        return "UP主/频道：" + item.title + "\n分类：" + item.album;
    },
    getAlbumInfo: async function () { return { isEnd: true, data: [] }; },
    getMusicSheetInfo: async function () { return { isEnd: true, data: [] }; },
    getArtistWorks: async function () { return { isEnd: true, data: [] }; },
    importMusicItem: async function () { return null; },
    importMusicSheet: async function () { return null; },
    getTopLists: async function () { return []; },
    getTopListDetail: async function () { return { isEnd: true, data: [] }; }
};