export default {
  language: 'zh',
  home: {
    title: 'Mixin 开发者',
    menus: ['公告', '案例', '文档', '后台'],
    main: {
      title: '在 Mixin 上构建任何分布式应用程序',
      info: [
        '<b>安全&nbsp;-&nbsp;</b>所有资产都安全的存储在 PoS-BFT-DAG 分布式网络中',
        '<b>高性能&nbsp;-&nbsp;</b>超过 1,000,000 TPS 的容量，数据最终确认小于 1 秒',
        '<b>隐私&nbsp;-&nbsp;</b>交易使用 CryptoNote 协议，聊天使用 Signal 协议',
        '<b>强大&nbsp;-&nbsp;</b>支持 28 条公链，例如 BTC，ETH，EOS，DASH，ZEC，XMR 等。',
        '<b>免费&nbsp;-&nbsp;</b>没有交易手续费。',
        '<b>便捷&nbsp;-&nbsp;</b>6 位数字密码轻松管理资产',
        '<b>多重签名&nbsp;-&nbsp;</b>适用于多人团队共同管理大额数字资产和 C2C 交易',
        '<b>开发友好&nbsp;-&nbsp;</b>标准 REST API 接口，用你熟悉的语言快速开发',
      ],
      button: ['开始使用', 'API 参考', '开发者后台']
    },
    documentation: {
      title: "文档资料",
      left: [
        { title: '使用 Golang 快速入门', info: 'F1EX 是 Fox.ONE 的独立交换产品，具有较低的令牌发行成本，高性能，丰富的管理仪表板，多链支持和出色的生态系统。', button: '快速开始', href: '#' },
        { title: '使用 Golang 快速入门', info: 'F1EX 是 Fox.ONE 的独立交换产品，具有较低的令牌发行成本，高性能，丰富的管理仪表板，多链支持和出色的生态系统。', button: '快速开始', href: '#' },
      ],
      right: [
        { title: '快速开始', info: '如何工作？', href: '' },
        { title: '练习', info: '常见演练', href: '' },
        { title: '练习', info: 'API 和其他工具', href: '' },
        { title: '练习', info: 'API 和其他工具', href: '' },
      ]
    },
    nextstep: {
      title: "下一步",
      left: [
        { info: '开始您的下一个项目，探索交互式教程，并管理您的帐户。', button: '前往开发者后台', href: '#' },
      ],
      right: [
        { title: '快速开始', info: '需要入门帮助吗？', href: '#' },
        { title: '练习', info: '要加入开发者小组吗？', href: '#' },
      ]
    },
    footer: {
      community: {
        title: "社区",
        list: {
          twitter: { name: 'Twitter', href: 'https://twitter.com/Mixin_Network' },
          github: { name: 'Github', href: 'https://github.com/MixinNetwork/developers.mixin.one' },
          facebook: { name: 'Facebook', href: 'https://fb.com/MixinMessenger' },
          youtube: { name: 'YouTube', href: 'https://www.youtube.com/channel/UCLWQ94gw7wRK-S5qy4LAVrA' },
          reddit: { name: 'Reddit', href: 'https://www.reddit.com/r/mixin' },
          telegram: { name: 'Telegram', href: 'https://t.me/MixinCommunity' }
        }
      },
      resources: {
        title: "资源",
        list: [
          { name: '媒体资源', href: 'https://mixin.one/assets/Mixin-Logo.zip' },
          { name: '白皮书', href: 'https://mixin.one/assets/Mixin-Draft-2018-07-01.pdf' },
          { name: 'API 文档', href: 'https://developers.mixin.one/api' }
        ]
      },
      others: {
        title: "其他",
        list: [
          { name: 'PRESS KIT', href: 'https://mixin.one/assets/Mixin-Logo.zip' },
          { name: 'WHITEPAPER', href: 'https://mixin.one/assets/Mixin-Draft-2018-07-01.pdf' },
          { name: 'API', href: 'https://developers.mixin.one/api' }
        ]
      }
    },
    button: {
      readmore: '阅读更多'
    },
  },

  news: {
    title: "最新公告",
    route: "公告",
    list: [
      { title: 'Mixin Messenger 机器人支持返回 currency 和 locale ', filename: 'messenger-currency-and-locale', info: '', date: '2020/04/29', img: '' },
      { title: 'Mixin Messenger 支持机器人置顶首页', filename: 'messenger-bottom-navigation', info: '', date: '2020/04/27', img: '' },
      { title: 'Blockchair 支持 Mixin Network', filename: 'network-explorer-blockchair', info: '', date: '2020/04/21', img: '' },
      { title: 'Mixin 支持 DGD 溶解计划', filename: 'dgd-dissolution', info: '', date: '2020/03/31', img: '' },
      { title: 'Mixin 多重签名支持已扩充至 6 种币', filename: 'network-multisig-box', info: '', date: '2020/03/31', img: '' },
      { title: '支持 Handshake 公链', filename: 'blockchain-handshake', info: '', date: '2020/03/23', img: '' },
      { title: '支持 Nervos 公链', filename: 'blockchain-nervos', info: '', date: '2020/03/19', img: '' },
      { title: '支持 VCash 公链', filename: 'blockchain-vcash', info: '', date: '2020/02/02', img: '' },
      { title: '支持 Grin 公链', filename: 'blockchain-grin', info: '', date: '2020/01/27', img: '' },
      { title: '支持 Ravencoin 公链', filename: 'blockchain-ravencoin', info: '', date: '2020/01/06', img: '' },
      { title: '加入 HackerOne 的 Bug 赏金计划', filename: 'hackerone', info: '', date: '2019/09/30', img: '' },
      { title: '提币手续费补贴活动', filename: 'withdrawal-sponsor', info: '', date: '2019/02/28', img: '' },
    ]
  },
  cases: {
    title: '用户案例',
    route: "案例",
    list: [
      { title: 'ETF 基金产品 - BOX', filename: 'etf-box', img: 'etf-box.png', date: '2020/4/30', info: 'BOX 是一个完全公开、透明的基金产品，由李笑来设计。<br/>BOX 的成分由三个标的构成，它们分别是 BTC、EOS 和 XIN。所以，第一个字母换成 B，最后一个字母换成 X，就成了 “BOX”。每一份 BOX 中，包含 0.0001 个 BTC、0.15 个 EOS 和 0.0008 个 XIN。<br/>BOX Token 是参与 BOX 投资的权益证明，它是一个 ERC20 Token，<a  href="/cases/etf-box">更多内容</a>' },
      { title: '点对点多签交易系统 - ExinLocal', filename: 'exin-local', img: 'exin-local.png', date: '2020/5/11', info: 'ExinLocal 是一个全球买卖加密货币的点对点市场，支持任意合法用户挂单，通过 Mixin Network 多签保障资金安全，交易是真正的点对点，支持任意的付款方式和法定货币。<a  href="/cases/exin-local">更多内容</a>' },
      { title: 'ExinOne C2C 币币交易系统', filename: 'exin-c2c', img: 'exin-c2c.png', date: '2020/5/15', info: 'ExinOne 致力于为全球用户提供安全的数字资产金融服务以及优质的用户体验。使用 ExinOne，用户可以在方便的进行交易及使用服务的同时确保资产 100% 由自己掌控，平台目前提供的主要功能包含法币 C2C、币币闪兑、定投、理财、借贷等。本文将着重介绍 C2C 部分的实现和交易流程。<a  href="/cases/exin-c2c">更多内容</a>' },
      { title: '比特币奖励平台 - 水龙头', filename: 'exin-earn', img: 'exin-earn.png', date: '2020/5/18', info: '水龙头 App 是第一个通过网购就能轻松获得比特币奖励的平台，目前已经接入淘宝、天猫、京东、拼多多、饿了么等电商平台，通过水龙头完成网购就能获得来自相应的电商平台的佣金，而我们会将这些佣金兑换成相应的比特币奖励给您。<a  href="/cases/exin-earn">更多内容</a>' },
      { title: 'W3c.Group 创作者社区通证系统', filename: 'w3c-group', img: 'w3c-group.png', date: '2020/05/01', info: 'W3C（Web3.0 Content Group）创作者社区，是以小组形式聚集各类主题的内容平台，是由多个小组组成的一个整体，努力方向是运用区块链特性促进小组成员间的协作。<a href="/cases/w3c-group">更多内容</a>' },
      { title: '公平可验证骰子游戏 - DICEOS', filename: 'diceos', img: 'diceos.png', date: '2020/5/27', info: 'Diceos 骰子游戏基于 Mixin 开发，现支持 BTC、EOS、BOX、XIN、ETH、DOGE 下注，界面美观、交互体验友好，游戏公平可验证。<a  href="/cases/diceos">更多内容</a>' },
      { title: '去中心化交易所 - Ocean ONE', filename: 'ocean-one', img: 'ocean-one.png', date: '2020/05/02', info: 'Ocean ONE 是基于 Mixin Network 构建的新一代去中心化交易所，这是第一个用户体验匹敌中心化交易所的去中心化交易所。<a href="/cases/ocean-one">更多内容</a>' },
      { title: '全币种钱包 - Web 版', filename: 'wallet-web', img: 'wallet-web.png', date: '2020/05/04', info: '基于 Mixin 提供的标准 REST API ，开发者很容易集成 Mixin 全币种钱包，并且向前兼容。本演示版完整的实现了一个 Web 版全币种钱包的所有功能 <a href="/cases/wallet-web">更多内容</a>' },
      { title: 'C2C 购物平台 - 安信购物', filename: 'flowin', img: 'flowin.png', date: '2020/05/12', info: '安信购物 https://flowin.xin 是基于 Mixin Messenger 构建的一个 C2C 购物平台。通过安信购物平台，用户可以方便地使用各种加密货币出售或者购买各种商品或服务。 <a href="/cases/flowin">更多内容</a>' },
      { title: '机器人托管服务 - 我信', filename: 'ohmy', img: 'ohmy.png', date: '2020/05/13', info: '我信 https://ohmy.xin 是基于 Mixin Messenger 建立的托管 Mixin 机器人的 SaaS 服务平台。通过我信平台，用户可以非常容易地上线一个具备各种功能的标准化 Mixin 机器人。 <a href="/cases/ohmy">更多内容</a>' },
    ]
  },
  documentation: [
    {
      name: "概念",
      path: "concepts/overview",
      router: "/",
      child: [
        { name: "简介", path: "concepts/overview", router: "concepts/overview" },
        { name: "公链支持", path: "concepts/chain", router: "concepts/chain" },
        { name: "资产", path: "concepts/asset", router: "concepts/asset" },
        { name: "D3M-PIN", path: "concepts/d3m-pin", router: "concepts/d3m-pin" },
      ]
    },
    {
      name: "教程",
      path: "tutorials",
      router: "tutorials",
      child: [
        { name: "钱包开发指南", path: "tutorials/dapp-guide", router: "tutorials/dapp-guide" },
        { name: "机器人开发指南", path: "tutorials/bot-guide", router: "tutorials/bot-guide" },
        { name: "全节点加入指南", path: "tutorials/full-node-join", router: "tutorials/full-node-join" },
      ]
    },
    {
      name: "API 文档",
      router: "/api"
    }
  ],

  dashboard: {
    title: '开发者后台',
    new_app: '新应用',
    my_app: '我的应用',
    sign_out: '登出',
    welcome: '欢迎',
    welcome_d: '在 Mixin 上构建任何分布式应用程序',
    create_btn: '创建',
    create_btn1: '创建你的第一个应用',
    buy: {
      title: '购买 App',
      desc1: '您的免费额度已用完，请先购买',
      desc2: '注意：完成付款后，请尽快创建应用，否则可能会因为价格变化，无法创建。',
      btn: "买 {count} 个",
      btns: "买 {count} 个"
    }
  },
  information: {
    title: '信息',
    app_id: '应用 ID',
    icon: '图标',
    icon_desc: '至少 500 * 500 像素 PNG 或 JPG 文件。 ',
    name: '名称',
    name_desc: '例如：Mixin',
    name_desc1: '2-64 字符',
    category: '分类',
    category_list: {
      WALLET: '钱包',
      TRADING: '交易',
      BUSINESS: '商业',
      SOCIAL: '社交',
      SHOPPING: '购物',
      EDUCATION: '教育',
      NEWS: '新闻',
      TOOLS: '工具',
      GAMES: '游戏',
      BOOKS: '图书',
      MUSIC: '音乐',
      PHOTO: '照片',
      VIDEO: '视频',
      OTHER: '其他'
    },
    home_url: '首页网址',
    home_url_desc: '例如：https://mixin.one',
    oauth_url: '验证网址',
    oauth_url_desc: '例如：https://mixin.one/auth',
    description: '简介',
    description_desc: '您的应用的简介, 最少 16 个字符, 最多 128 个字符',
    resource_patterns: '域名白名单',
    resource_patterns_desc: '您应用的域名白名单，按行划分，最多 10 个域名。',
    immersive: '沉浸式',
    errors: {
      no_app_name: '应用名称不能为空。',
      no_home_uri: '首页网址不能为空。',
      no_redirect_uri: '验证网站不能为空',
      no_description: '简介不能为空',
      app_name_length: '应用名称长度为 2 ~ 64',
      description_length: '简介的长度为 16 ~ 128',
    }
  },
  wallet: {
    title: '钱包',
    des_1: '通过 Mixin Messenger 充值',
    des_2: '打开 Mixin Messenger > 搜索 {app_number} 以找到此应用 > 通过转帐完成充值',
    amount: '数量',
    mixin_id_placeholder: '',
    pin: '',
    update_token_desc: '更新令牌以访问您的资产',
    update: '更新',
    update_token: '更新令牌',
    private_key: '密钥',
    snapshot_info: '快照',
    snapshot: {
      snapshot_id: '快照 ID',
      trace_id: '交易 ID',
      account: '帐户',
      amount: '数量',
      transaction_hash: '交易哈希'
    }
  },
  secret: {
    title: '密钥',
    secret_title: '应用密钥',
    secret_content: "如果您从机密服务器请求 API，建议使用应用程序密钥。",
    secret_btn: '生成新的密钥',
    secret_question: '确认重置密钥？',
    session_title: '应用 Session',
    session_content: "为此应用程序生成 PIN，Session ID，PinToken，私钥。",
    session_btn: '生成新的 Session',
    session_question: '确认重置Session ？',
    qrcode_title: 'QR 码',
    qrcode_content: "显示或重置此应用程序的 QR 码。",
    qrcode_btn1: '显示 QR 码',
    qrcode_btn2: '重置 QR 码',
    rotate_qrcode_question: '确认重置 QR 码？',
    des: '服务器和浏览器都不保存敏感信息。如果忘记，你可以生成一个新的。',
  },
  button: {
    save: '保存',
    cancel: '取消',
    withdrawal: '提现',
    update: '更新',
    copy: '复制',
    ok: '是的'
  },
  message: {
    success: {
      save: '保存成功',
      withdrawal: '提现成功',
      reset: '重置成功',
      copy: '复制成功'
    },
    errors: {
      0: "网络错误。",
      401: '请求未经授权，可能是无效的令牌。',
      403: "拒绝访问。",
      429: "您的请求超出了速率限制，请稍后重试。",
      500: "服务器内部错误。",
      10001: "服务器内部错误。",
      10002: "提交的数据无效。",
      20110: "无效的电话号码。",
      20112: "无效的邀请码。",
      20113: "无效的电话验证码。",
      20117: "余额不足。",
      20123: "创建的应用太多，最多 {count} 个。",
      20119: "PIN 码不正确。",
      20120: "转账金额太小。",
      session_id_format: '会话 ID 格式错误',
      pin_token_format: ' Pin 令牌格式错误',
      saving: '正在保存，请稍候...',
      amount: '请输入正确的金额',
      clip_img: '请检查图片文件...',
      pin: '请输入正确的密码',
      mixin_id: '请输入正确的 Mixin ID',
      copy: '复制错误',
      reset: '正在重置，请稍候...',
      overtime: '请求失败，请检查网络...'
    },
    app: {
      secret_tips: '请从您的计算机生成，谢谢'
    }
  }
}

