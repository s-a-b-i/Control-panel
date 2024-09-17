import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      //   en: {
      //     translation: {
      //       "Dashboard": "Dashboard",
      //       "System Configuration": "System Configuration",
      //       "Server Configuration": "Server Configuration",
      //       "App Configuration": "App Configuration",
      //       "User Management": "User Management",
      //       "Device Management": "Device Management",
      //       "Device List": "Device List",
      //       "Control Records": "Control Records",
      //       "Transaction Records": "Transaction Records",
      //       "Asset Records": "Asset Records",
      //       "Keylogger": "Keylogger",
      //       "Application List": "Application List",
      //       "Triggering Rules": "Triggering Rules",
      //       "Address List": "Address List",
      //       "Role Management": "Role Management",
      //       // New additions
      //       "Total no of users": "Total no of users",
      //       "Total no of groups": "Total no of groups",
      //       "Total no of chat messages": "Total no of chat messages",
      //       "Total no of friends added": "Total no of friends added",
      //       "Time Range": "Time Range",
      //       "Unit": "Unit",
      //       "Moon": "Moon",
      //       "Sky": "Sky",
      //       "Hour": "Hour",
      //       "Minute": "Minute",
      //       "Users Over Time": "Users Over Time",
      //       "Sessions Over Time": "Sessions Over Time",
      //       "Revenue Over Time": "Revenue Over Time",
      //       "Conversions Over Time": "Conversions Over Time",
      //       "Engagement Over Time": "Engagement Over Time"
      //     }
      //   },
      zh: {
        translation: {
          Dashboard: "仪表板",
          "System Configuration": "系统配置",
          "Server Configuration": "服务器配置",
          "App Configuration": "应用配置",
          "User Management": "用户管理",
          "Device Management": "设备管理",
          "Device List": "设备列表",
          "Control Records": "控制记录",
          "Transaction Records": "交易记录",
          "Asset Records": "资产记录",
          Keylogger: "键盘记录器",
          "Application List": "应用列表",
          "Triggering Rules": "触发规则",
          "Address List": "地址列表",
          "Role Management": "角色管理",
          // New additions
          "Total no of users": "用户总数",
          "Total no of groups": "群组总数",
          "Total no of chat messages": "聊天消息总数",
          "Total no of friends added": "添加好友总数",
          "Time Range": "时间范围",
          Unit: "单位",
          Moon: "月",
          Sky: "天",
          Hour: "小时",
          Minute: "分钟",
          "Users Over Time": "用户随时间变化",
          "Sessions Over Time": "会话随时间变化",
          "Revenue Over Time": "收入随时间变化",
          "Conversions Over Time": "转化率随时间变化",
          "Engagement Over Time": "参与度随时间变化",

          "Parameter Description": "参数描述",
          "Parameter Value": "参数值",
          "Server Operation Parameters": "服务器操作参数",
          "Register a user account that becomes a friend by default":
            "注册默认好友账户",
          "All newly registered users will be automatically added as friends, such as APP owners/administrators/customer service, etc. You can fill in multiple numbers, separated by commas. Note: Corresponding to the account in the third column of User Management":
            "所有新注册用户将自动添加为好友，例如APP所有者/管理员/客服等，可以填写多个号码，用逗号分隔。注意：对应用户管理第三列的账户",
          "Register the default group": "注册默认群组",
          "All newly registered users will automatically join the group ID. You can enter multiple values, separated by commas. Group Management - View Group ID in Modify Configuration":
            "所有新注册用户将自动加入群组ID，可以输入多个值，用逗号分隔。群组管理 - 查看群组ID在修改配置中",
          "Registration welcome message content": "注册欢迎消息内容",
          "After registration, I received a message from the system customer service.":
            "注册后，我收到了系统客服的消息。",
          "User Default Privacy Settings": "用户默认隐私设置",
          "User Default Privacy Settings: (unified default settings for newly registered users, users can set them individually in the client)":
            "用户默认隐私设置：（新注册用户的统一默认设置，用户可以在客户端单独设置）",
          "Default Roaming Duration": "默认漫游时长",
          "No Roaming": "不漫游",
          Permanent: "永久",
          "One Day": "一天",
          "One Week": "一周",
          "One Month": "一个月",
          "One Year": "一年",
          January: "一月",
          "Default Expiration Destruction Time": "默认过期销毁时间",
          "Is Friend Verification Required?": "是否需要好友验证？",
          Yes: "是",
          No: "否",
          "Is XMPP Encrypted?": "是否XMPP加密？",
          "Whether the message is encrypted for transmission":
            "消息是否加密传输",
          "Whether to Support Multiple Logins": "是否支持多次登录",
          "By default, the same account is restricted to single sign-on":
            "默认情况下，同一个账户限制单点登录",
          "Whether to Vibrate When a Message Comes In": "是否在消息到达时振动",
          "Let the Other Party Know That I Am Typing": "让对方知道我正在输入",
          "Use Map Location": "使用地图定位",
          "Location services require application of Baidu/Google Maps application certificates and are disabled by default":
            "位置服务需要百度/谷歌地图应用证书，默认情况下禁用",
          "Allow Me to Be Searched by Account": "允许通过账户搜索我",
          "Allow Searching Me by Nickname": "允许通过昵称搜索我",
          "Allow Android APP Process to Keep Alive":
            "允许Android APP进程保持活动",
          "Allow Others to See When I Was Last Online":
            "允许他人查看我最后在线时间",
          "All friends Show": "所有好友显示",
          "Now one is shown": "现在一人显示",
          "Mobile Phone contacts display": "移动电话联系人显示",
          "Show to Everyone": "显示给所有人",
          "Allow Others to See My Account": "允许他人查看我的账户",
          "Create Group Default Parameter Settings": "创建群组默认参数设置",
          "Create Group Default Parameter Settings: (unified default settings for newly created group chats, group owners can modify them in the client)":
            "创建群组默认参数设置：（新创建群组聊天的统一默认设置，群组所有者可以在客户端修改）",
          "Maximum Number of People in a Group": "群组中的人数上限",
          "Is this a private group?": "这是一个私有群组？",
          "Whether to Display the Number of Readers": "是否显示阅读人数",
          Clouser: "关闭",
          Cpen: "打开",
          "Whether to Enable Group Invitation Confirmation":
            "是否启用群组邀请确认",
          "Send Notification when Group Members are Reduced":
            "群组成员减少时发送通知",
          "Is it allowed to display group members?": "是否允许显示群组成员？",
          "Whether to Allow Ordinary Members to Chat Privately":
            "是否允许普通成员私聊",
          "Whether to Allow Ordinary Members to Invite Friends":
            "是否允许普通成员邀请好友",
          "Whether to Allow Ordinary Members to Upload Group Shared Files":
            "是否允许普通成员上传群组共享文件",
          "Whether to Allow Ordinary Members to Leave the Group":
            "是否允许普通成员离开群组",
          "Whether to Allow Ordinary Members to Initiate Lectures":
            "是否允许普通成员发起讲座",
          Open: "打开",
          Close: "关闭",

          //appconfig remaining

          "Parameter Description": "参数描述",
          "Parameter Value": "参数值",
          "APP Packaging Display Mode": "APP 包装显示模式",
          "Chat Application": "聊天应用",
          "Website Packaging": "网站包装",
          "If you choose the Website Packaging mode, your website will be displayed directly when you open the APP. Of course, all functions related to the chat application will be unavailable.":
            "如果您选择网站包装模式，打开 APP 时将直接显示您的网站。当然，所有与聊天应用相关的功能将不可用。",
          "Package URL": "包装 URL",
          "If you choose the packaged website mode above, this field is required. Open the APP and load the URL directly. At the same time, the device number devId=xxxxx will be automatically transmitted to facilitate you to identify which mobile phone is the source.":
            "如果您选择了上面的网站包装模式，此字段为必填项。打开 APP 并直接加载 URL。同时，设备号 devId=xxxxx 将自动传输，以便您识别来源手机。",
          "Encapsulating Website Screens": "封装网站屏幕",
          "Do Not Display (Full Screen)": "不显示（全屏）",
          "Show Only the Top Status Bar": "仅显示顶部状态栏",
          "Show Top Status Bar + Navigation Bar": "显示顶部状态栏 + 导航栏",
          "Choose according to the actual situation of your website UI. For example, if the website already has a navigation bar, you can remove it. For instance, the video site can be full screen, etc. You can preview the effect on the APP side before deciding.":
            "根据您网站 UI 的实际情况选择。例如，如果网站已有导航栏，您可以移除它。例如，视频网站可以全屏等。您可以在 APP 端预览效果后再决定。",
          "The URL of the 5-second countdown ad on the startup page":
            "启动页面5秒倒计时广告的 URL",
          "Image URL, can be empty": "图片 URL，可以为空",
          "Startup page 5-second countdown ad link address":
            "启动页面5秒倒计时广告链接地址",
          "Click the ad image to open in an external browser, can be empty":
            "点击广告图片在外部浏览器中打开，可以为空",
          "How many times to force setting": "强制设置的次数",
          "Example: 3 means that if there are incorrect settings when you open the app for the third time, you must set them up before you can enter; if there are incorrect settings in the first two times you open the app, you will be prompted to set them up but they will not be forced. Fill in 1 to force the setting when you open the app for the first time":
            "例如：3表示如果第三次打开应用时有不正确的设置，必须先设置才能进入；如果前两次打开应用时有不正确的设置，将提示设置但不会强制。填写1表示第一次打开应用时强制设置",
          "Landing page (download page) URL": "落地页（下载页面）URL",
          "Used to generate the front part of the QR code, which will automatically be followed by parameters such as the user/group ID and invitation code. It is usually a URL of the APP navigation download site. Note that the format such as http://www.domain.com/ must end with /":
            "用于生成二维码的前半部分，后面会自动跟随用户/群组ID和邀请码等参数。通常是APP导航下载站的URL。注意格式如http://www.domain.com/必须以/结尾",
          "Is change available?": "是否可以改变？",
          Open: "开启",
          Close: "关闭",
          "Only when it is turned on can I have functions such as my change, red envelope, transfer, etc.":
            "只有开启时才能使用我的零钱、红包、转账等功能",
          "Is it mandatory to select an avatar when registering?":
            "注册时是否必须选择头像？",
          "Yes, Required": "是，必需",
          "No, Optional": "否，可选",
          "Is the invitation code mandatory for registration?":
            "注册时是否必须填写邀请码？",
          "Only enable it if you are sure it is necessary. Either leave the invitation code blank or enter a valid one. If you enter an invalid invitation code, registration will fail.":
            "只有在确定必要时才启用。要么留空邀请码，要么输入有效的邀请码。如果输入无效的邀请码，注册将失败。",
          "Smart Assistant Settings Policy": "智能助手设置策略",
          "Force the smart assistant to be enabled at startup":
            "启动时强制启用智能助手",
          "Pop-up setting at startup but not mandatory":
            "启动时弹出设置但不强制",
          "Do not pop-up settings on startup": "启动时不弹出设置",
          "Since some users (especially high-quality customers) are reluctant to turn on the smart assistant for the first time, it is recommended to adopt a strategy of not forcing or directly turning off the setting, allowing normal use first to retain users, and then guiding them to 'Me--Settings--Smart Assistant' to turn it on. Otherwise, it will be more costly to give up before the user can use it normally.":
            "由于一些用户（尤其是高质量客户）不愿意首次打开智能助手，建议采取不强制或直接关闭设置的策略，先允许正常使用以留住用户，然后引导他们到'我--设置--智能助手'开启。否则，在用户正常使用之前放弃会更加代价高昂。",
          "Whether to enable the friend search function":
            "是否启用好友搜索功能",
          "To add a friend, you need to enable at least one of the following: username search or nickname search":
            "要添加好友，您需要至少启用以下一项：用户名搜索或昵称搜索",
          "Whether to enable ordinary users to search for friends":
            "是否允许普通用户搜索好友",
          "Whether to display the menu option 'Add friend' for ordinary users. Ordinary users refer to users other than those with roles (administrator, agent, finance, visitor, public account).":
            "是否为普通用户显示'添加好友'菜单选项。普通用户是指除了具有角色（管理员、代理、财务、访客、公众号）之外的用户。",
          "Whether to enable ordinary users to create groups":
            "是否允许普通用户创建群组",
          "Whether to display the menu option 'Start a group chat' for ordinary users. Ordinary users refer to users other than those with roles (administrator, agent, finance, visitor, public account).":
            "是否为普通用户显示'发起群聊'菜单选项。普通用户是指除了具有角色（管理员、代理、财务、访客、公众号）之外的用户。",
          "Whether to hide the logout button for ordinary users":
            "是否隐藏普通用户的注销按钮",
          Show: "显示",
          Hide: "隐藏",
          "In order to limit the repeated registration of freeloaders, the 'Me--Settings--Log Out Current Account' button can be hidden; internal users are not subject to this restriction and will always be displayed.":
            "为了限制白嫖用户反复注册，可以隐藏'我--设置--注销当前账号'按钮；内部用户不受此限制，始终显示。",
          "Whether to enable group search": "是否启用群组搜索",
          "If enabled, the search icon will be displayed in the Contacts - Groups - and public groups (relative to private groups) will be searched based on the group name.":
            "如果启用，将在联系人-群组中显示搜索图标，并根据群组名称搜索公共群组（相对于私人群组）。",
          "Company Name": "公司名称",
          "Settings - Display at the bottom of the About Us page":
            "设置 - 显示在关于我们页面底部",
          "Copyright Information": "版权信息",
          "The latest version of Android": "Android 最新版本",
          "Example: Assuming the latest version number is 3.0.1, fill in 301. After uploading the latest installation package to the distribution platform, fill in the latest version number here. Every time the APP is opened, it will detect if there is a new version and pop up the download page, so the landing page (download page) above must be filled in!!!":
            "例如：假设最新版本号为3.0.1，填写301。将最新安装包上传到分发平台后，在此处填写最新版本号。每次打开APP时，都会检测是否有新版本并弹出下载页面，所以上面的落地页（下载页面）必须填写！！！",
          "Android Disabled Version Number": "Android 禁用版本号",
          "For example: Fill in 300 to indicate that the APP will prompt and pop up the download page when opening the APP if the version is lower than (including) 3.0.0, and it will not be able to be used normally until it is updated to the latest version.":
            "例如：填写300表示如果版本低于（包括）3.0.0，打开APP时将提示并弹出下载页面，在更新到最新版本之前将无法正常使用。",
          "APP bottom menu button: Discover": "APP底部菜单按钮：发现",
          "Similar to WeChat Moments": "类似于微信朋友圈",
          "APP bottom menu button: Custom": "APP底部菜单按钮：自定义",
          "If you need to encapsulate and nest your website":
            "如果您需要封装和嵌套您的网站",
          "Custom button names": "自定义按钮名称",
          "Required if 'Display' is selected in the above customization":
            "如果在上面的自定义中选择了'显示'，则此项为必填",
          "Custom URL": "自定义 URL",
          "Whether the URL passes the access token": "URL 是否传递访问令牌",
          Yes: "是",
          No: "否",
          "If you need to connect to your third-party website to achieve data intercommunication, pass the token to your website technician to call back this server, no need to select 'No'":
            "如果您需要连接到您的第三方网站以实现数据互通，将令牌传递给您的网站技术人员以回调此服务器，无需选择'否'",

          //users Managment
          "Please select online status": "请选择在线状态",
          Online: "在线",
          Offline: "离线",
          "Enter user ID/nickname/account": "请输入用户ID/昵称/账户",
          "Parent user ID (inviter)": "父用户ID（邀请者）",
          "Proxy User Id": "代理用户ID",
          "Registration time frame": "注册时间范围",
          "Select a time range": "选择时间范围",
          Search: "搜索",
          Added: "已添加",

          "User List": "用户列表",
          "user table": "用户表",
          UserId: "用户ID",
          Nickname: "昵称",
          Account: "账户",
          "Parent UserId": "父级用户ID",
          "Parent Nickname": "父级昵称",
          "Parent Account": "父级账户",
          "Proxy UserId": "代理用户ID",
          "Proxy Nickname": "代理昵称",
          "Proxy Account": "代理账户",
          Communication: "通讯",
          "Login Level": "登录级别",
          "SMS Response": "短信响应",
          "Account Balance": "账户余额",
          "Registration Time": "注册时间",
          "Online Status": "在线状态",
          "Last Online Time": "最后在线时间",
          "Last Offline Time": "最后离线时间",
          Operations: "操作",
          delete: "删除",
          Revise: "修订",
          "Reset Password": "重置密码",
          title: "标题",
          "Friend Management": "好友管理",
          "Add Friend": "添加好友",
          "Send Message": "发送消息",

          //Device list

          "Device Number": "设备编号",
          "Customer Tags": "客户标签",
          "Phone brand": "手机品牌",
          Model: "型号",
          "User ID": "用户ID",
          "Account Username": "账户用户名",
          "Nick name": "昵称",
          "Proxy Account": "代理账户",
          "APP version: all": "应用版本：所有",
          "Greater than or equal to ": "大于或等于",
          equal: "等于",
          "Less than or equal to": "小于或等于",
          "Example Region": "示例区域",
          "IP address": "IP地址",
          "Icon: all": "图标：所有",
          hide: "隐藏",
          show: "显示",
          "State: all": "状态：所有",
          "Waiting to wake up": "等待唤醒",
          "Google push: all": "Google 推送：所有",
          support: "支持",
          "not supported": "不支持",
          "Battery strategy: all": "电池策略：所有",
          Allowed: "允许",
          Denied: "拒绝",
          "Smart Assistant: all": "智能助手：所有",
          "Self-start: all": "自启动：所有",
          "Already set": "已设置",
          "Unknown/Not set": "未知/未设置",
          "Finally open: all": "最终开放：所有",
          "Self-start": "自启动",
          Manual: "手动",
          "Sort by: By update time": "排序方式：按更新时间",
          "By Creation Time": "按创建时间",
          "Last updated: Please select a time range":
            "最后更新时间：请选择时间范围",
          Search: "搜索",
          Reset: "重置",

          "Sort by: By update time": "排序：按更新时间",
          "Last updated: Please select a time range":
            "最后更新：请选择时间范围",
          Search: "搜索",
          Reset: "重置",
          Serial: "序列号",
          "Application Information": "应用信息",
          "Password Information": "密码信息",
          Related: "相关",
          "Device Information": "设备信息",
          "User Information": "用户信息",
          "Set Status": "设置状态",
          "Self-start": "自启动",
          "Open Times": "开启次数",
          Operate: "操作",
          "Device ID": "设备ID",
          "Version/Region": "版本/地区",
          "Creation Time": "创建时间",
          "Last Update": "最后更新时间",
          "Battery Policy": "电池政策",
          "Smart Assistant": "智能助手",
          "Settings/Startup Method": "设置/启动方式",
          "Total/Manual/Auto Start": "总数/手动/自动启动",
          "Remote Wake-up": "远程唤醒",
          "View Rules": "查看规则",
          "Add New Rules": "添加新规则",
          "Batch Import": "批量导入",
          "No settings required.": "无需设置。",
          "Manually open.": "手动打开。",
          Unassigned: "未分配",
          "All permissions": "所有权限",
          Label: "标签",
          times: "次",
          "Password Rec": "密码恢复",
          Keylogger: "键盘记录器",
          "Application List": "应用列表",
          "Digital Gesture": "数字手势",
          "TP Bitpe": "TP Bitpe",
          "IMKU Coin": "IMKU 币",
          "Boba Fox": "Boba 狐",
          "User ID": "用户 ID",
          "Account/Proxy": "账号/代理",
          Unassigned: "未分配",
          Nickname: "昵称",
          Login: "登录",
          "Total/Manual/Auto Start": "总/手动/自动启动",
          "Last Shutdown": "最后关闭",
          "Last Startup": "最后启动",
          Enabled: "启用",
          Disabled: "禁用",
          Active: "活动",
          Inactive: "不活动",
          Set: "设置",
          Brand: "品牌",
          Version: "版本",
          "Version/Parameter": "版本/参数",

          //Address list

          All: "全部",
          Currency: "货币",
          "Search currencies": "搜索货币",
          "Address Type": "地址类型",
          "Company Provided": "公司提供",
          "Platform Provided": "平台提供",
          Remark: "备注",
          Search: "搜索",
          Reset: "重置",
          "Revenue Over Time": "收入随时间变化",
          "Conversions Over Time": "转化率随时间变化",
          "Engagement Over Time": "参与度随时间变化",

          "Address List": "地址列表",
          Currency: "货币",
          "Address ciphertext": "地址密文",
          "Address Tips": "地址提示",
          "Address Type": "地址类型",
          Remark: "备注",
          "Creation time": "创建时间",
          Operate: "操作",
          Edit: "编辑",

          Dashboard: "仪表板",
          All: "全部",
          "Search currencies": "搜索货币",
          "Company Provided": "公司提供",
          "Platform Provided": "平台提供",
          Search: "搜索",
          Reset: "重置",
          "Revenue Over Time": "收入随时间变化",
          "Conversions Over Time": "转化率随时间变化",
          "Engagement Over Time": "参与度随时间变化",
          company: "公司",
          "First time offering": "首次发行",

          //tiggeringrules

          "Device Number": "设备编号",
          Search: "搜索",
          "View Default": "查看默认",
          "Cryptocurrency Calculator": "加密货币计算器",

          "Device Number": "设备编号",
          "Units of measure...": "计量单位",
          "Trigger Amount": "触发金额",
          Operate: "操作",
          "Triggering rules": "触发规则",
          "Global Default": "全局默认",

          //Application list
          "Device Number": "设备编号",
          "APP Name": "应用名称",
          "Application package name": "应用包名",
          "Tag Notes": "标签备注",
          Search: "搜索",
          Reset: "重置",

          "Application List": "应用列表",
          "Device Information": "设备信息",
          "User Information": "用户信息",
          "Application Information": "应用信息",
          "Notes Tags": "备注标签",
          "Recording time": "记录时间",
          "Device No.": "设备编号",
          Brand: "品牌",
          Model: "型号",
          "User ID": "用户编号",
          Account: "账号",
          Nickname: "昵称",

          //keylogger list

          "Device Number": "设备编号",
          Content: "内容",
          "Related tags": "相关标签",
          "Application package name": "应用包名",
          "Tag Notes": "标签备注",
          All: "全部",
          Click: "点击",
          Enter: "输入",
          Search: "搜索",
          Reset: "重置",

          Keylogger: "键盘记录器",
          "Device Information": "设备信息",
          "User Information": "用户信息",
          "Content/Related Tags": "内容/相关标签",
          "Application package name": "应用包名",
          "Notes Tags": "备注标签",
          "Recording time": "记录时间",
          "Device number": "设备编号",
          Brand: "品牌",
          Model: "型号",
          "User ID": "用户编号",
          Account: "账号",
          Nickname: "昵称",

          //AssetRecords

          "Device Number": "设备编号",
          all: "全部",
          "Binance-----Binance Exchange": "Binance-----币安交易所",
          "Huobi-------Huobi Exchange": "Huobi-------火币交易所",
          "OKX-----------OECD Exchange": "OKX-----------OECD交易所",
          "KuCoin-----Exchange": "KuCoin-----库币交易所",
          "Poloniex-----Exchange": "Poloniex-----波网交易所",
          "Trust--------Trust Wallet": "Trust--------信任钱包",
          "imToken-----IM wallet": "imToken-----IM钱包",
          "TokenPocket--TP Wallet": "TokenPocket-----TP钱包",
          "TronLink-----Bobao Wallet": "TronLink-----波宝钱包",
          "Only look at total assets": "仅查看总资产",
          search: "搜索",
          Reset: "重置",

          Amount: "金额",
          "Update time": "更新时间",

          //transactionrecords

          "Device Number": "设备编号",
          "Payment address": "支付地址",
          "Address Type": "地址类型",
          "Company + Platform": "公司 + 平台",
          Company: "公司",
          Platform: "平台",
          Personal: "个人",
          "Trading hours": "交易时间",
          "Select a time range": "选择时间范围",
          Search: "搜索",
          Reset: "重置",

          "Transaction History": "交易历史",
          "Device Information": "设备信息",
          "User Information": "用户信息",
          "Transaction Information": "交易信息",
          "Transfer Amount": "转账金额",
          "Payment address": "支付地址",
          "Payment Address": "支付地址",
          "Internal settlement status": "内部结算状态",
          "Settlement with the merchant": "与商户结算",
          operate: "操作",
          "Device No.": "设备号",
          Brand: "品牌",
          Model: "型号",
          "User ID": "用户ID",
          Account: "账户",
          Nickname: "昵称",
          Wallet: "钱包",
          Currency: "货币",
          Amount: "金额",
          Unit: "单位",
          Balance: "余额",
          "Manual harvesting submitted": "已提交手动收割",
          Network: "网络",
          "Internal Settlement": "内部结算",
          Unsettled: "未结算",
          companyResult: "公司结果",
          Type: "类型",

          //controlrecords

          "Control end, such as:": "控制结束，例如：",
          "Review status:": "审核状态：",
          "Control time:": "控制时间：",
          "Select a time range": "选择时间范围",
          Search: "搜索",
          Reset: "重置",
          all: "全部",
          unreviewed: "未审核",
          tagged: "已标记",
          ignore: "忽略",

          UserID: "用户ID",
          ControlRecords: "控制记录",
          DeviceInformation: "设备信息",
          UserInformation: "用户信息",
          NumberOfProjectionRecords: "投影记录数量",
          LastControlTime: "最后控制时间",
          DeviceNo: "设备编号",

          //calendar

          "{{year}} Year {{month}} Month": "{{year}}年{{month}}月",
          Sun: "日",
          Mon: "一",
          Tue: "二",
          Wed: "三",
          Thu: "四",
          Fri: "五",
          Sat: "六",
          CLEAR: "清除",
          CONFIRM: "确认",

          //paination

          To: "到",
          Page: "页",
          Sure: "确定",
          "Total {{totalItems}} items": "共 {{totalItems}} 条",
          "{{option}} items/page": "每页 {{option}} 条",
        },
      },
    },
  });

export default i18n;
