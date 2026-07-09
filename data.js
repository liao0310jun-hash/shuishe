// ============================================================
//  水榭年华 · 网站数据文件（改这里就能改网站，不用碰其他文件）
//  修改后刷新浏览器即可生效
//
//  ★★★ 最方便添加技师：照抄下面这段，改3个地方就行 ★★★
//
//  添加一名技师（复制到对应套餐的 staff: [ ] 里面）：
//    { id: "88", img: "images/staff-mingyue-88.jpg", desc: "" },
//
//  改这3处：
//    ① id: "88"           → 改成技师号码
//    ② staff-mingyue-88   → 改成你的照片文件名
//    ③ desc: ""           → 留空就行（可不改）
//
//  【照片怎么放】
//  第一步：把照片命名好（如 staff-mingyue-88.jpg）放进 images/ 文件夹
//  第二步：在上面 img: 后面写 "images/你的文件名.jpg"
// ============================================================

var SITE_DATA = {

  // ---- 基本信息 ----
  shopName: "水榭年华娱乐休闲会所",
  phone: "0751-8609686",
  wechat: "sx8609686",
  wechatQrCode: "images/wechat-qrcode.jpg",   // 微信二维码图片
  address: "武江区新华南路与五祖路口交界处 水榭年华娱乐休闲会所",

  // ---- 微信分享卡片配置 ----
  // 客人把链接发给微信好友时，显示这张图片和这段文字
  // 图片需要是【完整网址】，不能写 images/xxx.jpg
  // 怎么拿到完整网址？→ 看下面的【图片上传教程】
  share: {
    title: "水榭年华娱乐休闲会所 · 技师风采",
    desc:  "K歌沐足·轻奢SPA·养生足浴 | 10公里免费接送 | 韶关武江区",
    image: ""   // 填上图片完整网址，例如 "https://xxx.com/share.jpg"
  },

  // ---- 顶部卖点横幅（想改文字在这里改）----
  uspTags: [
    "🚗 10公里免费接送",
    "🍊 水果茶水简餐",
    "🎤 K歌沐足一体"
  ],

  // ---- 环境轮播图 ----
  envImages: [
    "images/env-spa.jpg",      // SPA养生房
    "images/env-tea.jpg",      // 茶艺文化墙
    "images/env-hallway.jpg"   // 走廊
    // 有更多？继续加： "images/env-4.jpg",
  ],

  // ---- 服务项目 ----
  // ★ 后期加技师照片只改这里的 staff 部分 ★
  projects: [

    // ===== 项目一：K歌沐足 =====
    {
      name: "K歌沐足",
      icon: "🎤",
      packages: [
        {
          name: "貂蝉拜月",
          price: 168,
          staff: []
        },
        {
          name: "贵妃醉酒",
          price: 178,
          staff: [
            { id: "222", img: "images/staff-guifei-222.jpg", desc: "" },
            { id: "555", img: "images/staff-guifei-555.jpg", desc: "" },
            { id: "182", img: "images/staff-guifei-82.jpg", desc: "" },
            { id: "2", img: "images/staff-guifei-2.jpg", desc: "" }
          ]
        }
      ]
    },

    // ===== 项目二：轻奢SPA =====
    {
      name: "轻奢SPA",
      icon: "💆",
      packages: [
        {
          name: "清风一凡",
          price: 188,
          staff: [
            { id: "218", img: "images/staff-qingfeng-218.jpg", desc: "" }
          ]
        },
        {
          name: "明月禅尘",
          price: 208,
          staff: [
            { id: "58", img: "images/staff-mingyue-58.jpg", desc: "" },
            { id: "68", img: "images/staff-mingyue-68.jpg", desc: "" }
          ]
        }
      ]
    },

    // ===== 项目三：养生足浴 =====
    {
      name: "养生足浴",
      icon: "🌸",
      packages: [
        {
          name: "玉指兰香",
          price: 128,
          staff: []
        },
        {
          name: "竹影寒纱",
          price: 168,
          staff: [
            { id: "183", img: "images/staff-guifei-183.jpg", desc: "" }
          ]
        },
        {
          name: "特色小项（四选一）",
          price: 58,
          miniItems: ["刮痧", "采耳", "修脚", "拔罐"],
          staff: [
            { id: "333", img: "images/staff-mini-333.jpg", desc: "" }
          ]
        }
      ]
    }

  ]

};
