// 朔㷰磐·音游曲库索引 - Muse Dash
// 功能: 收录Muse Dash全部章节/曲包曲目，搜索曲名或章节名查看，专辑字段可复制曲名
module.exports = {
    platform: "Muse Dash曲库",
    author: "朔㷰磐",
    version: "1.0.0",
    primaryKey: ["id"],
    cacheControl: "no-cache",
    hints: {
        importMusicItem: ["搜索“Muse Dash”或“菜单”查看全部章节分类。", "直接搜索曲名定位。", "专辑字段为曲名，点击即可复制。"],
        importMusicSheet: []
    },

    _categories: [
        // 基础包
        { name: "Muse Dash-基础包", parent: "Muse Dash", items: ["Magical Wonderland (More colorful mix)","Iyaiya","Wonderful Pain","Breaking Dawn","单向地铁 Feat.karin","Stra Stella","Echo over you...","Heart Message feat. Aoi Tokimori","夢追う者よ feat. をとは - Neko Hacker","Frost Land","Heart-Pounding Flight","Pancake is Love","时光涂鸦","Evolution","海豚与广播 feat.乌拉喵","雪の雫 · 雨の音","Best One feat.墨橙","糖果色恋爱学","Night Wander (cnsouka Remix)","ドーナドーナのうた","Spring Carnival","DISCO NIGHT","恋のMoonlight","恋爱语音导航 feat. yousa","Lights of Muse","midstream jam","你好，Confession","Galaxy Striker","Departure Road","Bass Telekinesis","Cage of Almeria","Ira","Blackest Luxury Car","Medicine of Sing","irregulyze","クリスマスなんて興味ないけど","Imaginary World","Dysthymia","新世界より","偽顔","Say!ファンファーレ!","流星车手","Formation","心层麻醉","Mezame Eurythmics","Shenri Kuaira -repeat-","Latitude","Aqua Stars","粉骨砕身カジノゥ","Clock Room & Spiritual World","INTERNET OVERDOSE (Aiobahn feat.KOTOKO)","徒 花","無人区-Vacuum Track#ADD8E6-","MilK","umpopoff","もぺもぺ"] },

        // 经费在燃烧 Vol.1
        { name: "Muse Dash-经费在燃烧 Vol.1", parent: "Muse Dash", items: ["Out of Sense","My Life Is For You","Etude -Sunset-","翘班","Stargazer","Lys Tourbillon"] },

        // 经费在燃烧：纳米核心
        { name: "Muse Dash-经费在燃烧：纳米核心", parent: "Muse Dash", items: ["Glimmer feat. 祈Inory","EXIST feat.米雅","Irreplaceable feat.夏铜子"] },

        // 鸣潮先约电台
        { name: "Muse Dash-鸣潮先约电台", parent: "Muse Dash", items: ["逐光筑昼","CATCH ME IF YOU CAN","RUNNING FOR YOUR LIFE"] },

        // 暮色电台 FM101
        { name: "Muse Dash-暮色电台 FM101", parent: "Muse Dash", items: ["tape/stop/night","Pixel Galaxy","Notice","sᴛʀᴀᴡʙᴇʀʀʏ ɢᴏᴅᴢɪʟʟᴀ","OKIMOCHI EXPRESSION","君とpool disco"] },

        // 暮色电台 FM102
        { name: "Muse Dash-暮色电台 FM102", parent: "Muse Dash", items: ["去剪海的日子","happy hour","世纪末的夏天","twinkle night","アルヤハレルヤ","Blush(feat. MYLK)","裸のSummer","BLESS ME(Samplingsource)"] },

        // 惊喜！心跳！情人节！
        { name: "Muse Dash-惊喜！心跳！情人节！", parent: "Muse Dash", items: ["Pray a LOVE","恋愛回避依存症","Daisuki Dayo feat.Wotoha"] },

        // 喵宇宙！
        { name: "Muse Dash-喵宇宙！", parent: "Muse Dash", items: ["Nyan Cat","ペロペロ in the Universe","陰キャ陽キャ陰陽師","KABOOOOOM!!!!","Doppelganger"] },

        // 成为虚拟偶像吧
        { name: "Muse Dash-成为虚拟偶像吧", parent: "Muse Dash", items: ["假面日记","Reminiscence","堕堕天使","D.I.Y.","男子in☆バーチャランド","夔"] },

        // 暮色电台 FM103
        { name: "Muse Dash-暮色电台 FM103", parent: "Muse Dash", items: ["夜的搁浅","daydream girl","Ornamentじゃない(Muse Dash Mix)","Baby Pink (w/ YUC'e)","ここにいる (I'm Here)"] },

        // 欧拉快跑OlaDash
        { name: "Muse Dash-欧拉快跑OlaDash", parent: "Muse Dash", items: ["MuseDashヵヽﾞ何ヵヽ干∋ッ`⊂ぉヵヽＵ＜ﾅょッﾅﾆ気ヵヽﾞ￡ゑょ","Aleph-0","ぶっとばスーパーノヴァ","Rush-Hour","3rd Avenue","WORLDINVADER"] },

        // 暮色电台 FM104
        { name: "Muse Dash-暮色电台 FM104", parent: "Muse Dash", items: ["Doki Doki Jump! (feat. ぷにぷに電機)","100年モノのストリーマーズ・ハイ","恋爱巡航","Mahorova feat.omoto","夜の街","INTERNET YAMERO（Aiobahn feat.KOTOKO）"] },

        // 宇宙电台PEROLIST
        { name: "Muse Dash-宇宙电台PEROLIST", parent: "Muse Dash", items: ["すとり～ま～FIRE!?!?","Tanuki Step","Space Stationery","曲はサビが9割 feat. まめこ","Kawaiク華麗に宇宙怪盗","ナイトシティ・ランウェイ","Chaos Shotgun feat. ChumuNote","mew mew magical summer"] },

        // 形影博弈
        { name: "Muse Dash-形影博弈", parent: "Muse Dash", items: ["New York Back Raise","slic.hertz","Fuzzy-Navel","Swing Edge","Twisted Escape","Swing Sweet Twee Dance"] },

        // Valentine Stage
        { name: "Muse Dash-Valentine Stage", parent: "Muse Dash", items: ["Sweet Dream(VIVINOS - 'Alien Stage OST Part.2')","Ruler Of My Heart(VIVINOS - 'Alien Stage Pt5')","Reality Show","SIG feat.Tobokegao","薔薇の恋心 feat.AKA","Euphoria"] },

        // 暮色斗士传奇
        { name: "Muse Dash-暮色斗士传奇", parent: "Muse Dash", items: ["P E R O P E R O兄✰貴✰乱✰舞（feat.音游部, howsoon）","PA☆PPA☆PANIC","How To Make 音ゲ～曲！","Ré：Ré","マーマレード·ツインズ","DOMINATOR","てしかに（TESHiKANi）"] },

        // 新手上路包
        { name: "Muse Dash-新手上路包", parent: "Muse Dash", items: ["SUPERHERO","夏めきハイウェイ -Highway Summer-","Mx. Black Box","Sweet Encounter"] },

        // 暮色电台 FM105
        { name: "Muse Dash-暮色电台 FM105", parent: "Muse Dash", items: ["disco light","room light feat.chancylemon","Invisible","圣诞季-LLABB"] },

        // 无尽旋舞
        { name: "Muse Dash-无尽旋舞", parent: "Muse Dash", items: ["Eve Avenir","Silverstring","Melusia","Devil's Castle","Abatement","アザレア","Brightly World","We'll meet in every world ★★★","Collapsar","Parousia"] },

        // 宇宙电台 2024
        { name: "Muse Dash-宇宙电台 2024", parent: "Muse Dash", items: ["LUNATiC CiRCUiT","Synthesis.","COSMiC FANFARE!!!!","Sharp Bubbles","再生","宇宙残骸少女"] },

        // 喵斯快跑传奇
        { name: "Muse Dash-喵斯快跑传奇", parent: "Muse Dash", items: ["喵斯摇 (feat.春哥, 渊神)","AIに古の電波ソングを作ってもらった結果wwwww","非日常スケッチブック","TransientTears","SHOOTING☆STAR feat.るなっち☆ほし","青い鳥はもう死んだのに"] },

        // 暮色电台 FM106
        { name: "Muse Dash-暮色电台 FM106", parent: "Muse Dash", items: ["Othello feat.Uiro","Midnight Blue","overwork feat.Uoonoo","SUPER CITYLIGHTS"] },

        // 奇航秘宝
        { name: "Muse Dash-奇航秘宝", parent: "Muse Dash", items: ["Flametide","Embrace (feat. Kiyon)","Magazines (feat. Nia Suzune)","Temptation","PwP","I Can Show You"] },

        // 出院后48小时
        { name: "Muse Dash-出院后48小时", parent: "Muse Dash", items: ["WILDCARD","全部夢だった！","サイエンス","ヒットメーカー","サ終あざした","存在证明论"] },

        // 宇宙电台 2025
        { name: "Muse Dash-宇宙电台 2025", parent: "Muse Dash", items: ["CHAOTiC BATTLE","FATAL GAME","Aria","+1(UNKNOWN)-NUMBER","彼方へ、名もなき海辺より","REK421"] },

        // 爱♡马
        { name: "Muse Dash-爱♡马", parent: "Muse Dash", items: ["喵儿跑传说","Not Regret","通りゃんな-我不原諒你喔！-","アイスクリーム・エンジェルズ","MEGA TSKR","777 (Vocal ver.) feat.ななひら"] },

        // 肥宅快乐包 Vol.1 - Vol.20
        { name: "Muse Dash-肥宅快乐包 Vol.1", parent: "Muse Dash", items: ["Maharajah","keep on running","Käfig","-+","天理鶴情","Adjudicatorz-断罪-"] },
        { name: "Muse Dash-肥宅快乐包 Vol.2", parent: "Muse Dash", items: ["MUSEDASH!!!!","Imprinting","Skyward","La nuit de vif","Bit-alize","GOODTEK(Hyper Edit)"] },
        { name: "Muse Dash-肥宅快乐包 Vol.3", parent: "Muse Dash", items: ["Thirty Million Persona","conflict","演華舞踊 ~Enka Dance Music~","XING","天翔ける蒼穹のセレナーデ","Gift box"] },
        { name: "Muse Dash-肥宅快乐包 Vol.4", parent: "Muse Dash", items: ["Leave It Alone","翼の折れた天使たちのレクイエム","Chronomia","Dandelion's Daydream","ロリキート ~Flat design~","GOODRAGE"] },
        { name: "Muse Dash-肥宅快乐包 Vol.5", parent: "Muse Dash", items: ["Brave My Heart","Sakura Fubuki","8bit Adventurer","Suffering of screw","tiny lady","Power Attack"] },
        { name: "Muse Dash-肥宅快乐包 Vol.6", parent: "Muse Dash", items: ["Elysion's Old Mans","AXION","Amnesia","温泉大作戦","Gleam Stone","GOODWORLD"] },
        { name: "Muse Dash-肥宅快乐包 Vol.7", parent: "Muse Dash", items: ["Cotton Candy Wonderland","プナイプナイたいそう","Fly↑High","prejudice","The 89's Momentum","energy night(DASH mix)"] },
        { name: "Muse Dash-肥宅快乐包 Vol.8", parent: "Muse Dash", items: ["Moonlight Banquet","Flashdance","INFiNiTE ENERZY -Overdoze-","One Way Street","This Club is Not 4 U","ULTRA MEGA HAPPY PARTY!!!"] },
        { name: "Muse Dash-肥宅快乐包 Vol.9", parent: "Muse Dash", items: ["The Last Page","IKAROS","月夜見","Future Stream","FULi AUTO SHOOTER","GOODFORTUNE"] },
        { name: "Muse Dash-肥宅快乐包 Vol.10", parent: "Muse Dash", items: ["弊社御社","Ginevra","Paracelestia","un secret","Good Life","ニニ-邇々-"] },
        { name: "Muse Dash-肥宅快乐包 Vol.11", parent: "Muse Dash", items: ["The 90's Decision","Medusa","Final Step!","MAGENTA POTION","Cross†Ray (feat.月下Lia)","Square Lake"] },
        { name: "Muse Dash-肥宅快乐包 SP", parent: "Muse Dash", items: ["MuseDashを作っているPeroPeroGamesさんが倒産しちゃったよ～","MARENOL","僕の和风本当上手","Rush B","DataErr0r","Burn"] },
        { name: "Muse Dash-肥宅快乐包 Vol.12", parent: "Muse Dash", items: ["Rush-More","Kill My Fortune","よさり 月蛍澄み昇りて","JUMP! HardCandy","雲雀","OCCHOCO-REST-LESS"] },
        { name: "Muse Dash-肥宅快乐包 Vol.13", parent: "Muse Dash", items: ["Party in the HOLLOWood feat. ななひら","嘤嘤大作战","Howlin' Pumpkin"] },
        { name: "Muse Dash-肥宅快乐包 Vol.14", parent: "Muse Dash", items: ["Bang!!","Paradise Ⅱ","Symbol","ネコジャラシ","A Philosophical Wanderer","异想天"] },
        { name: "Muse Dash-肥宅快乐包 Vol.15", parent: "Muse Dash", items: ["On And On!!","Trip!","ほしのおとしもの","Plucky Race","Fantasia Sonata Destiny","Run through"] },
        { name: "Muse Dash-肥宅快乐包 Vol.16", parent: "Muse Dash", items: ["ときめき★メテオストライク","Down Low","LOUDER MACHINE","それはもうらぶちゅ","Rave_Tech","Brilliant & Shining! (Game Edit.)"] },
        { name: "Muse Dash-肥宅快乐包 Vol.17", parent: "Muse Dash", items: ["【东爱璃Lovely】Lovely","森海の船","応為","沼った！！","SATELLITE","Fantasia Sonata Colorful feat. V!C"] },
        { name: "Muse Dash-肥宅快乐包 Vol.18", parent: "Muse Dash", items: ["レイニーエンジェル","Gullinkambi","RakiRaki Rebuilders!!!","Laniakea","OTTAMA GAZER","Sleep Tight feat. まこと"] },
        { name: "Muse Dash-肥宅快乐包 Vol.19", parent: "Muse Dash", items: ["Urban Magic","Maid's Prank","Dance Dance 晚安舞会","Ops:Limone","NOVA","Heaven's Gradius"] },
        { name: "Muse Dash-肥宅快乐包 Vol.20", parent: "Muse Dash", items: ["Äventyr","Raintain","穿云破浪(feat.渊)","Save Yourself","Menace","Dangling"] },

        // 可爱即正义 Vol.1 - Vol.7
        { name: "Muse Dash-可爱即正义 Vol.1", parent: "Muse Dash", items: ["八月雨后，初晴与彩虹","魔法数字","Dreaming Girl","Daruma-san Fell Over","Different","The Future of the Phantom"] },
        { name: "Muse Dash-可爱即正义 Vol.2", parent: "Muse Dash", items: ["速溶霓虹 feat.熊子","星球上的追溯诗","我要买买买","约会宣言","初雪","心上华海"] },
        { name: "Muse Dash-可爱即正义 Vol.3", parent: "Muse Dash", items: ["魔咒 feat.早木旋子","斑斓星","彩绘","旅行诗","Satell Knight","Black River Feat.Mes","生而为人，我很抱歉","飢えた鳥たち"] },
        { name: "Muse Dash-可爱即正义 Vol.4", parent: "Muse Dash", items: ["SWEETSWEETSWEET","深蓝与夜的呼吸","Joy Connection","任性 Ver.B","就是不听话","草蛇惊一"] },
        { name: "Muse Dash-可爱即正义 Vol.5", parent: "Muse Dash", items: ["雨后甜点","告白应援方程式","Omatsuri feat.兔子ST","FUTUREPOP","The Breeze","ウォー・アイ・レタス炒飯！！"] },
        { name: "Muse Dash-可爱即正义 Vol.6", parent: "Muse Dash", items: ["Girly Cupid","sheep in the light","ブレーカーシティ","heterodoxy","コンピューターミュージックガール","焦点 feat.早木旋子"] },
        { name: "Muse Dash-可爱即正义 Vol.7", parent: "Muse Dash", items: ["琉璃色前奏曲","ネオンライト","花たちに希望を","5月30日、自転車日和","SKY↑HIGH","妄想♡ちゅー!!"] },

        // 放弃治疗 Vol.1 - Vol.11
        { name: "Muse Dash-放弃治疗 Vol.1", parent: "Muse Dash", items: ["Oriens","PUPA","Luna Express 2032","浮世絵横丁","Alice in Misanthrope -厭世アリス-","GOODMEN"] },
        { name: "Muse Dash-放弃治疗 Vol.2", parent: "Muse Dash", items: ["Brave My Soul","Halcyon","Crimson Nightingle","Invader","Lyrith -迷宮リリス-","GOODBOUNCE (Groove Edit)"] },
        { name: "Muse Dash-放弃治疗 Vol.3", parent: "Muse Dash", items: ["Altale","Brain Power","Berry Go!!","Sweet* Witch* Girl*","trippers feeling!","Lilith ambivalence lovers"] },
        { name: "Muse Dash-放弃治疗 Vol.4", parent: "Muse Dash", items: ["Destr0yer","Noël","狂喜蘭舞","Two Phace","Fly Again","ouroVoros"] },
        { name: "Muse Dash-放弃治疗 Vol.5", parent: "Muse Dash", items: ["蓋棺クリサリス","Sterelogue","Cheshire's Dance","Skrik","Soda Pop Canva5!","ЯUBY:LINTe"] },
        { name: "Muse Dash-放弃治疗 Vol.6", parent: "Muse Dash", items: ["Future Dive","Re：End of a Dream","Etude -Storm-","Unlimited Katharsis","Magic Knight Girl","Eeliaas"] },
        { name: "Muse Dash-放弃治疗 Vol.7", parent: "Muse Dash", items: ["INFINITY","プナイプナイせんそう","Maxi","YInMn Blue","Plumage","Dr.Techro"] },
        { name: "Muse Dash-放弃治疗 Vol.8", parent: "Muse Dash", items: ["The NightScape","FREEDOM DiVE↓","Φ","Lueur de la nuit","Creamy Sugary OVERDRIVE!!!","Disorder (feat.YURI)"] },
        { name: "Muse Dash-放弃治疗 Vol.9", parent: "Muse Dash", items: ["東方兔傳說 -SKY DEFENDER-","ENERGY SYNERGY MATRIX","プナイプナイげんそう ～プナイプナイinワンダーランド～","Better Graphic Animation","Variant Cross","Ultra Happy Miracle Bazoooooka!!"] },
        { name: "Muse Dash-放弃治疗 Vol.10", parent: "Muse Dash", items: ["NightTheater","Cutter","竹","enchanted love","c.s.q.n.","Booouncing!!"] },
        { name: "Muse Dash-放弃治疗 Vol.11", parent: "Muse Dash", items: ["Psyched Fevereiro","インフェルノシティ","Paradigm Shift","Snapdragon","Prestige and Vestige","Tiny Fate"] },

        // Nanahira Festival 等特殊联动
        { name: "Muse Dash-Nanahira Festival", parent: "Muse Dash", items: ["ベースラインやってる?笑","ゲーミング☆Everything","レンジで好吃☆電子調理器使用中華料理四千年歴史瞬間調理完了武闘的料理長☆","You Make My Life 1UP","ニワカ三年オタ八年、インターネッツはforever","お願い！コンコンお稲荷さま"] },
        { name: "Muse Dash-Let's GROOVE!", parent: "Muse Dash", items: ["Groove Prayer","FUJIN Rumble","Marry me, Nightmare","HG魔改造ポリビニル少年","聖者の息吹","ouroboros -twin stroke of the end-"] },
        { name: "Muse Dash-一起干坏事吧", parent: "Muse Dash", items: ["プレパララ","Whatcha;Whatcha Doin'","斑","pICARESq","Desastre","Shoot for the Moon"] },
        { name: "Muse Dash-cyTus", parent: "Muse Dash", items: ["Fireflies (Funk Fiction remix)","Light up my love!!","Happiness Breeze","Chrome VOX","CHAOS","Saika","Standby for Action","Hydrangea","Amenemhat","三灯火","「妖怪録、我し来にけり。」","Blah!!"] },
        { name: "Muse Dash-HARDCORE TANO*C", parent: "Muse Dash", items: ["ALiVE","BATTLE NO.1","Cthugha","TWINKLE★MAGIC","Comet Coaster","XODUS"] },
        { name: "Muse Dash-Phigros", parent: "Muse Dash", items: ["NO ONE YES MAN","雪降り、メリクリ （MD edit）","Igallta"] },
        { name: "Muse Dash-7th Beat Games", parent: "Muse Dash", items: ["超·东方不眠夜","嗅炸弹的博美犬","轮滑迪斯科震颤","玫瑰花园","EMOMOMO","赫拉克勒斯"] },
        { name: "Muse Dash-东方暮乐团 -壹-", parent: "Muse Dash", items: ["Bad Apple!! feat. Nomico","色は匂へど散りぬるを","チルノのパーフェクトさんすう教室","緋色月下、狂咲ノ絶","花月夜","無意識レクイエム"] },
        { name: "Muse Dash-WACCA Horizon", parent: "Muse Dash", items: ["ONOMATO Pairing!!!","with U","Chariot","GASHATT","LIN NE KRO NE feat. lasah","天使光輪"] },
        { name: "Muse Dash-Arcaea", parent: "Muse Dash", items: ["秋の陽炎","GIMME DA BLOOD","Libertas","Cyaegha"] },
        { name: "Muse Dash-DJMAX Reflect", parent: "Muse Dash", items: ["glory day","Bright Dream","Groovin Up","I Want You","OBLIVION","Elastic STAR","U.A.D","Jealousy","Memory of Beach","Don't Die","Y (CE Ver.)","Fancy Night","Can We Talk","Give Me 5","Nightmare"] },
        { name: "Muse Dash-MEGAREX THE FUTURE", parent: "Muse Dash", items: ["White Canvas (feat. 藍月なくる)","Gloomy Flash (feat. Mami)","今月のおすすめプレイリストを検索します (feat. Yozumina)","Sunday Night (feat. Kanata.N)","Goodbye Goodnight (feat. Shully)","ENDLESS CIDER (feat. Such)"] },
        { name: "Muse Dash-东方暮乐团 -贰-", parent: "Muse Dash", items: ["月に叢雲華に風","パチュリーズ・ベストヒットGSK","物凄いスペースシャトルでこいしが物凄いうた","囲い無き世は一期の月影","サイケデリック鬼桜同盟","悪戯センセーション"] },
        { name: "Muse Dash-Nanahira Paradise", parent: "Muse Dash", items: ["People People","Endless Error Loop","Forbidden Pizza!","ボーカルに無茶させんな"] },
        { name: "Muse Dash-MSR特选曲目组合包_Vol.01", parent: "Muse Dash", items: ["Boiling Blood","ManiFesto：","Operation Blade","Radiant","Renegade","Speed of Light","多索雷斯假日","秋绪"] },
        { name: "Muse Dash-舞萌DX期间限定组曲", parent: "Muse Dash", items: ["N3V3R G3T OV3R","Oshama Scramble!","Valsqotch","超常マイマイン","花と、雪と、ドラムンベース。","天火明命"] },
        { name: "Muse Dash-霓虹深渊 Neon Abyss", parent: "Muse Dash", items: ["颅内幻痛","My Focus!","ABABABA BURST","ULTRA HIGHER"] },
        { name: "Muse Dash-Miku in Museland", parent: "Muse Dash", items: ["39みゅーじっく！","Hand in Hand","シニカルナイトプラン","神っぽいな","ダーリンダンス","初音天地開闢神話","ヴァンパイア","フューチャー・イヴ","アンノウン・マザーグース","春嵐"] },
        { name: "Muse Dash-东方暮乐团 -叁-", parent: "Muse Dash", items: ["彷徨いの冥～天～","インターネットサバイバー","酒鬼☆RaiRai!!!","HELLOHELL","Calamity Fortune","つるぺったん"] },
        { name: "Muse Dash-Rin·Len's Mirrorland", parent: "Muse Dash", items: ["劣等上等","テレキャスタービーボーイ","い～やい～やい～や","ねぇねぇねぇ。","Chaotic Love Revolution","しかばねの踊り","ビターチョコデコレーション","ダンスロボットダンス","Sweet Devil","Someday'z Coming"] },
        { name: "Muse Dash-CHUNITHM CLASS MUSE", parent: "Muse Dash", items: ["光線チューニング","World Vanquisher","月詠に鳴る","The wheel to the right","Climax","蜘蛛の糸"] },
        { name: "Muse Dash-Let's 音游趴体！", parent: "Muse Dash", items: ["漂流","The Whole Rest","Hydra","Pastel Lines","LINK x LIN#S","Arcade ViruZ"] },
        { name: "Muse Dash-花雨合奏秘闻", parent: "Muse Dash", items: ["Gunners in the Rain","Halzion","SHOWTIME!!","Achromic Riddle","空の巣"] },
        { name: "Muse Dash-东方暮乐团 -肆-", parent: "Muse Dash", items: ["最終鬼畜妹フランドール・S","华鸟风月","メイドノココロハ アヤツリドール","Trance dance anarchy","fairy stage","スカーレット警察のゲットーパトロール24時"] },
        { name: "Muse Dash-MD级战术教育光盘", parent: "Muse Dash", items: ["Unwelcome School","Usagi Flap","RE Aoharu","Operation☆DOTABATA!"] },
        { name: "Muse Dash-MSR特选曲目组合包_Vol.02", parent: "Muse Dash", items: ["冲破穹顶","浸春芜","Everything's Alright","Operation Ashring","Misty Memory (Day Version)","Misty Memory (Night Version)","Arsonist","Operation Deepness","ALL!!!"] },
        { name: "Muse Dash-阿古亚星兜风指南", parent: "Muse Dash", items: ["Inverted World","翠杜","The Promised Land","Alfheim's faith","Heaven's Cage","Broomstick adventure!"] },
        { name: "Muse Dash-我要成为节奏大师！", parent: "Muse Dash", items: ["梦幻时光","永夜城","君往何处","暗夜苏醒","无可言喻","大家好，天使回响"] },
        { name: "Muse Dash-五维回响", parent: "Muse Dash", items: ["假花没有枯萎的权利","静止时间","Stranded Siren","灯火","极星流浪夜","追逐月光"] },
        { name: "Muse Dash-HARDCORE MOTTO TANO*C", parent: "Muse Dash", items: ["Fantasista LAST END","Colorful Universe","Future Flux","SOMEONE STOP ME!!!","Azathoth","Change the Game feat. 松永依織"] },
        { name: "Muse Dash-欢迎来到蓝洞！", parent: "Muse Dash", items: ["班乔师傅的寿司课"] },
        { name: "Muse Dash-DASH AND SHOOT!", parent: "Muse Dash", items: ["Don't Fight The Music","Viyella's Scream","Final Flash Flight","YURUSHITE","girls.exe","Baqeela"] },

        // MD补完计划（曲目数量庞大，已全部列出）
        { name: "Muse Dash-MD补完计划", parent: "Muse Dash", items: [
            "The Happycore Idol","天津甕星","ARIGA THESIS","ナイト・オブ・ナイツ","#サイケデリック目黒川","can you feel it","Midnight O'clock","Rin","Smile-mileS","信仰与存在","カタリスト","don't！stop！eroero！","pa pi pu pi pu pi pa","Sand Maze","Diffraction","悪夢 / feat.つぐ","Queen Aluett","DROPS (feat. Such)","物凄い狂っとるフランちゃんが物凄いうた","snooze","Kuishinbo Hacker feat.Kuishinbo Akachan","犬之歌","Prism Fountain","福音","天灵灵地灵灵","定飑芙蕖 feat. EZ-Ven","天照らす律動","Record one's Dream","Lunatic","旧梦","The Day We Become Family","Silver Bullet","Random","めっちゃ煽ってくるタイプの音ゲーボス曲ちゃんなんかに負けないが？？？？？","烏兎","SyZyGy","人鱼电台","Helixir","Highway Cruisin'","JACK PT BOSS","タイムカプセル","NICE TYPE feat. monii","三妖精SAY YA!!!","ゆけむり魂温泉 II","暮色小诗","All My Friends (feat. RANASOL)","Heartache","Blue Lemonade","Haunted Dance","なぁ、ヴィンセント。","Meteor (feat. TEA)","自己愛主義天使","AlterLuna","二騎当千","HIT ME UP","TEST ME (feat. Uyeon)","Assault TAXI","No","Pop it","心跳叮叮咚 iKz feat.Warma","Necromantic","つよつよナースブロウちゃん！","Cubism（きゅびずむ）","Cubibibibism（きゅびびびびずむ）","LET'S TOAST!!","#病みカワ","Rainy Step","OHO·SHI·KA·TSU","Kirakira Noel Story!!","超デジタル超デトックス","Otsukimi Koete Otsukiai","おべんきょうたいむ","Retry Now","电波妄想美少女Q"
        ] },

        // 隐藏曲目
        { name: "Muse Dash-隐藏曲目", parent: "Muse Dash", items: ["CHAOS (Glitch)","FM 17314 SUGAR RADIO"] }
    ],

    _flatItems: null,

    _buildFlatItems: function() {
        if (this._flatItems) return;
        this._flatItems = [];
        for (var i = 0; i < this._categories.length; i++) {
            var cat = this._categories[i];
            var path = (cat.parent ? cat.parent + "/" : "") + cat.name;
            for (var j = 0; j < cat.items.length; j++) {
                this._flatItems.push({ term: cat.items[j], path: path, id: "md_" + i + "_" + j });
            }
        }
    },

    search: async function (query, page, type) {
        page = page || 1;
        this._buildFlatItems();
        var flat = this._flatItems;

        if (query === "菜单" || query === "分类" || query === "帮助" || query.toLowerCase() === "muse dash" || query.toLowerCase() === "musedash") {
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