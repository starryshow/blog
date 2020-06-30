// 定义 Github 项目，文章会从这里读取
const github_base = "starryshow/blog";

// 设置站点信息
var default_title	 = "Starry、风-Blog - 星空工作室";					                // 站点标题（显示在浏览器标题栏）
var default_intitle	 = "Starry、风-Blog";								    // 站点名称（显示在首页）
var default_description  = "欢迎访问 Starry、风-Blog 官方博客，本博客分享与 iPhone 相关的技术以及记录一些日常。";  // 站点简介，有利于 SEO
var site_domain		 = "wintv.xyz";								             // 站点域名
var site_subtitle	 = "On the clock of time,there are only two words now.";			     // 站点副标题
var site_favicon	 = "https://xkshow.gitee.io/blog/img/logo.png";				             // 站点 Logo

// 博主信息
var owner_name = "Starry、风";				       // 博主名字
var owner_logo = "https://xkshow.gitee.io/blog/img/logo.png"	// 博主头像
var owner_desc = "在时间的大钟上，只有两个字现在";		    // 博主简介

// 设置站点资源文件地址
var css_bootstrap	 = "https://xkshow.gitee.io/blog/css/bootstrap.min.css";	         // Boostrap css 文件地址
var css_function         = "https://xkshow.gitee.io/blog/css/function.min.css?v=6.0.020191205";  // Function css 地址
var css_handsome         = "https://xkshow.gitee.io/blog/css/handsome.min.css?v=6.0.020191205";  // handsome css 地址
var css_jquery           = "https://xkshow.gitee.io/blog/css/jquery.fancybox.min.css?v=6.0.020191205";  // jquery css 地址
var css_newblack         = "https://xkshow.gitee.io/blog/css/newblack.min.css?v=6.0.020191205";  // newblack css 地址
var css_zenburn          = "https://xkshow.gitee.io/blog/css/zenburn.min.css?v=6.0.020191205";  // zenburn css 地址
var css_font             = "https://xkshow.gitee.io/blog/css/font.min.css?v=6.0.020191205";  // font css 地址
var js_jquery		 = "https://xkshow.gitee.io/blog/js/jquery.min.js";		                 // JQuery 地址
var js_fancyMorph	 = "https://xkshow.gitee.io/blog/js/fancyMorph.min.js";	                // fancyMorph 地址
var js_bootstrap         = "https://xkshow.gitee.io/blog/js/bootstrap.min.js";	// bootstrap 地址
var js_jquerypjax	 = "https://xkshow.gitee.io/blog/js/jquery.pjax.min.js";		// jquerypjax 地址
var js_SmoothScroll      = "https://xkshow.gitee.io/blog/js/SmoothScroll.min.js";	// SmoothScroll  地址
var js_feather	         = "https://xkshow.gitee.io/blog/js/feather.min.js?v=6.0.020191205";	// feather 地址
var js_fancybox          = "https://xkshow.gitee.io/blog/js/jquery.fancybox.min.js?v=6.0.020191205";		// fancybox pack 地址
var js_easypiechart      = "https://xkshow.gitee.io/blog/js/easypiechart.min.js?v=6.0.020191205";		// easypiechart 地址
var js_OwO               = "https://xkshow.gitee.io/blog/js/OwO.min.js?v=6.0.020191205";		// OwO 地址
var js_html2canvas       = "https://xkshow.gitee.io/blog/js/html2canvas.min.js";		// html2canvas 地址
var js_function          = "https://xkshow.gitee.io/blog/js/function.min.js?v=6.0.020191205";		// function 地址
var js_core          = "https://xkshow.gitee.io/blog/js/core.min.js?v=6.0.020191205";		// core 地址
var js_music          = "https://xkshow.gitee.io/blog/js/music.min.js?v=6.0.020191205";		// music 地址

// 这是一些临时变量，无需修改
var title = "";
var intitle = "";
var title2 = "";
var description = "";
var ctime = "unknown";
var isunknown = "";

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
});

var header = `<!DOCTYPE HTML>
<html class="no-js" lang="zh-cmn-Hans">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta charset="UTF-8">
    <!--IE 8浏览器的页面渲染方式-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <!--默认使用极速内核：针对国内浏览器产商-->
    <meta name="renderer" content="webkit">
    <!--chrome Android 地址栏颜色-->
        <meta name="theme-color" content="#3a3f51" />
    
    <meta http-equiv="x-dns-prefetch-control" content="on">
    <title>Starry、风-Blog</title>
            <link rel="icon" type="image/ico" href="https://xkshow.gitee.io/blog/img/logo.png">
        <meta name="description" content="星空工作室 - 每个人都是独立的经济体，保持好奇心来拥抱世界。" />
<meta name="keywords" content="Starry,星空" />
<meta name="generator" content="Typecho 1.1/17.10.30" />
<meta name="template" content="handsome" />
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="/action/xmlrpc?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="/action/xmlrpc?wlw" />
<link rel="alternate" type="application/rss+xml" title="Starry、风-Blog &raquo; RSS 2.0" href="/feed/" />
<link rel="alternate" type="application/rdf+xml" title="Starry、风-Blog &raquo; RSS 1.0" href="/feed/rss/" />
<link rel="alternate" type="application/atom+xml" title="Starry、风-Blog &raquo; ATOM 1.0" href="/feed/atom/" />
        <!-- 第三方CDN加载CSS -->
        <link href="${css_bootstrap}" rel="stylesheet">
    <!-- 本地css静态资源 -->
    <link rel="stylesheet" href="${css_function}" type="text/css" />
    <link rel="stylesheet" href="${css_handsome}" type="text/css" />
    <!--主题组件css文件加载-->
        <link rel="stylesheet" href="${css_jquery}" type="text/css" />
        <link rel="stylesheet" href="${css_newblack}" type="text/css" />
        <link rel="stylesheet" href="${css_zenburn}" type="text/css" />
    
    <!--引入英文字体文件-->
        <link rel="stylesheet" href="${css_font}" type="text/css" />
    
    <style type="text/css">
        
        html.bg {
        background: #F5F8FA
        }
        .cool-transparent .off-screen+* .app-content-body {
        background: #F5F8FA
        }
@media (max-width:767px){
    html.bg {
        background: #EFEFEF
        }
        .cool-transparent .off-screen+* .app-content-body {
        background: #EFEFEF
        }
}
pull-right hidden-xs text-ellipsis{
    display: none;
}
.hideContent {
    text-align: left;
}
.no-container #post-panel, .no-container .blog-posts{
    max-width: 980px;
}
.bg-light .lter, .bg-light.lter{
background-color: #f1f3f4;
}
.text-muted{
color:#555;
}
.bg-white{
color: #000;
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
    background-color: rgba(255,255,255,0.72);
}
.text-title{
color: #000;
}
body{
color: #282828;
}
.bg-light{
color: #999;
background-color: #212121;
}
.badge{
background-color: #282828;
}
.bg-white .text-muted{
color: #999!important;
}#aside .wrapper:hover {
	background: url(https://xkshow.gitee.io/blog/img/snow.gif);
	background-size: cover;
	color: #999;
}    </style>
    <!--全站jquery-->
    <script src="${js_jquery}"></script>
    <!--网站统计代码-->
    <!-- Global site tag (gtag.js) - Google Analytics - 跟踪 ID：UA-105820054-1 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-105820054-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-105820054-1');
</script>
<!-- Hotjar Tracking Code for https://www.baidu.com -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1272612,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
    <script src="${js_fancyMorph}"></script>
</head>
<body id="body" class="fix-padding">
  <!-- aside -->
    
  <div id="alllayout" class="app app-aside-fix no-container app-header-fixed ">  <!-- headnav -->
      <header id="header" class="fix-padding app-header navbar box-shadow-bottom-lg" role="menu">
      <!-- navbar header（交集处） -->
        <div class="text-ellipsis navbar-header bg-white">
        <button class="pull-right visible-xs" ui-toggle-class="show animated animated-lento fadeIn" target=".navbar-collapse">
            <span class="menu-icons"><i data-feather="search"></i></span>
        </button>
        <button class="pull-left visible-xs" ui-toggle-class="off-screen animated" target=".app-aside" ui-scroll="app">
            <span class="menu-icons"><i data-feather="menu"></i></span>
        </button>
        <!-- brand -->
        <a href="/" class="navbar-brand text-lt">
                                                <i class=" "></i>
                                <span class="hidden-folded m-l-xs">Starry、风-Blog</span>
                    </a>
        <!-- / brand -->
      </div>
      <!-- / navbar header -->
      <!-- navbar collapse（顶部导航栏） -->
    <div class="collapse pos-rlt navbar-collapse bg-white">
        <!-- search form -->
        <form id="searchform1" class="searchform navbar-form navbar-form-sm navbar-left shift" method="post"
              role="search">
          <div class="form-group">
            <div class="input-group rounded bg-white-pure box-shadow-wrap-normal">
              <input  autocomplete="off" id="search_input" type="search" name="s" class="transparent rounded form-control input-sm no-borders padder" required placeholder="输入关键词搜索…">
                <!--搜索提示-->
                <ul id="search_tips_drop" class="small-scroll-bar dropdown-menu hide" style="display: block;top: 
                30px; left: 0px;">
                </ul>
              <span id="search_submit" class="transparent input-group-btn">
                  <button  type="submit" class="transparent btn btn-sm">
                      <span class="feathericons" id="icon-search"><i data-feather="search"></i></span>
                      <span class="feathericons animate-spin  hide" id="spin-search"><i
                                  data-feather="loader"></i></span>
<!--                      <i class="fontello fontello-search" id="icon-search"></i>-->
<!--                      <i class="animate-spin  fontello fontello-spinner hide" id="spin-search"></i>-->
                  </button>
              </span>
            </div>
          </div>
        </form>
          <a href="" style="display: none" id="searchUrl"></a>
        <!-- / search form -->
                <ul class="nav navbar-nav navbar-right">
                        <li class="music-box hidden-xs hidden-sm">
                <div id="skPlayer"></div>
            </li>
            <li class="dropdown "><a class="skPlayer-list-switch dropdown-toggle
            feathericons"><i
                            data-feather="disc"></i><span class="visible-xs-inline"></span></a></li>
                                              <!--闲言碎语-->
          <li class="dropdown">
            <a href="#" data-toggle="dropdown" class="feathericons dropdown-toggle">
                <i data-feather="twitch"></i>
                <span class="visible-xs-inline">
              闲言碎语              </span>
              <span class="badge badge-sm up bg-danger pull-right-xs"></span>
            </a>
            <!-- dropdown -->
            <div class="dropdown-menu w-xl animated fadeInUp">
              <div class="panel bg-white">
                <div class="panel-heading b-light bg-light">
                  <strong>
              闲言碎语                  </strong>
                </div>
                <div class="list-group" id="smallRecording">
                  <a href="/1" class="list-group-item"><span class="clear block m-b-none words_contents">好用的产品，做活动基本不用啥落地页来装 一个完美的 Word 说明即可：https://www.yuque.com/yuque/yuque-desktop/download<br><small class="text-muted">2020-5-13 21:14:27</small></span></a><a href="/1" class="list-group-item"><span class="clear block m-b-none words_contents">小时候特别喜欢画画，但是爸爸非常讨厌我去画画，每次画画都说我不务正业……结果，那份逆反心理让自己对绘画变得更加喜欢😄<br><small class="text-muted">2020-5-7 22:00:46</small></span></a><a href="/1" class="list-group-item"><span class="clear block m-b-none words_contents">点击查看详情<br><small class="text-muted">2020-4-4 01:30:16</small></span></a>                </div>
              </div>
            </div>
          </li>
          <!--/闲言碎语-->
                                </ul>
      </div>
      <!-- / navbar collapse -->
  </header>
  <!-- / headnav -->
  <!--选择侧边栏的颜色-->
  <aside id="aside" class="app-aside hidden-xs bg-white ">  <!--<aside>-->
        <div class="aside-wrap" layout="column">
        <div class="navi-wrap scroll-y scroll-hide" flex>
          <!-- user -->
          <div class="clearfix hidden-xs text-center hide  show" id="aside-user">
            <div class="dropdown wrapper vertical-wrapper">
                <div ui-nav>
                          <a href="/starry">
                            <span class="thumb-lg w-auto-folded avatar m-t-sm  vertical-avatar">
                  <img src="${owner_logo}" class="img-full img-circle normal-shadow">
                </span>
              </a>
                </div>
              <a href="#" data-toggle="dropdown" class="dropdown-toggle hidden-folded  vertical-flex">
                <span class="clear">
                  <span class="block m-t-sm">
                    <strong class="font-bold text-lt"><strong style=" text-align:left;">Starry、风</strong></strong>
                    <b class="caret"></b>
                  </span>
                  <span class="text-muted text-xs block">Blog</span>
                </span>
              </a>
              <!-- dropdown -->
              <ul class="dropdown-menu animated fadeInRight w hidden-folded no-padder">
                <li class="wrapper b-b m-b-sm bg-info m-n">
                  <span class="arrow top hidden-folded arrow-info"></span>
                  <div>
                                                  <p>在时间的大钟上，只有两个字现在</p>
                                  </div>
                  <div class="progress progress-xs m-b-none dker">
                    <div class="progress-bar bg-white" data-toggle="tooltip" data-original-title="时间" style="width: 100%"></div>
                  </div>
                </li>
              </ul>
              <!-- / dropdown -->
            </div>
          </div>
          <!-- / user -->
          <!-- nav -->
          <nav ui-nav class="navi clearfix">
            <ul class="nav">
             <!--index-->
                <div class="line dk hidden-folded"></div>
                <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                <span>导航</span>
              </li>
                                          <!--主页-->
              <li>
                <a href="/" class="auto">
                    <span class="nav-icon"><i data-feather="home"></i></span>
                    <span>首页</span>
                </a>
              </li>
              <!-- /主页 -->
                            <li> <a target="_self" href="/2" class ="auto"><span class="nav-icon"><i data-feather="archive"></i></span><span>归档</span></a></li>
                            <li> <a target="_self" href="/3" class ="auto"><span class="nav-icon"><i data-feather="square"></i></span><span>软件</span></a></li>
                            <li> <a target="_self" href="/4" class ="auto"><span class="nav-icon"><i data-feather="github"></i></span><span>仓库</span></a></li>
                            <li> <a target="_self" href="/5" class ="auto"><span class="nav-icon"><i data-feather="heart"></i></span><span>朋友</span></a></li>                              <li class="line dk"></li>
			<!--Components-->
              <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                <span>组成</span>
              </li>
              <!--分类category-->
                              <li class="active">
                <a class="auto">
                  <span class="pull-right text-muted">
                    <i class="fontello icon-fw fontello-angle-right text"></i>
                    <i class="fontello icon-fw fontello-angle-down text-active"></i>
                  </span>
<!--                  <i class="glyphicon glyphicon-th"></i>-->
                    <span class="nav-icon"><i data-feather="grid"></i></span>
                    <span>分类</span>
                </a>
                <ul class="nav nav-sub dk">
                  <li class="nav-sub-header">
                    <a>
                      <span>分类</span>
                    </a>
                  </li>
                  <!--循环输出分类-->
                    <li><a href="/6"><b class="badge pull-right">11</b><span>UI / UX</span></a></li><li><a href="/7"><b class="badge pull-right">14</b><span>互联网</span></a></li><li><a href=/8"><b class="badge pull-right">20</b><span>笔记</span></a></li><li><a href="/9"><b class="badge pull-right">14</b><span>软件</span></a></li><li><a href="/10"><b class="badge pull-right">1</b><span>GAME</span></a></li>                </ul>
              </li>
              <!--独立页面pages-->
              <li>
                <a class="auto">
                  <span class="pull-right text-muted">
                    <i class="fontello icon-fw fontello-angle-right text"></i>
                    <i class="fontello icon-fw fontello-angle-down text-active"></i>
                  </span>
                    <span class="nav-icon"><i data-feather="file"></i></span>
                  <span>页面</span>
                </a>
                <ul class="nav nav-sub dk">
                  <li class="nav-sub-header">
                    <a data-no-instant>
                      <span>页面</span>
                    </a>
                  </li><!--这个字段不会被显示出来-->
                  <!--循环输出独立页面-->
                                                     </ul>
              </li>
              <!--友情链接-->
              <li>
                <a class="auto">
                  <span class="pull-right text-muted">
                    <i class="fontello icon-fw fontello-angle-right text"></i>
                    <i class="fontello icon-fw fontello-angle-down text-active"></i>
                  </span>
                    <span class="nav-icon"><i data-feather="user"></i></span>
                  <span>友链</span>
                </a>
                <ul class="nav nav-sub dk">
                  <li class="nav-sub-header">
                    <a data-no-instant>
                      <span>友链</span>
                    </a>
                  </li>
                  <!--使用links插件，输出全站友链-->
                 <li data-original-title="星空工作室" data-toggle="tooltip" data-placement="top"><a href="https://starryshow.cn/" target="_blank"><span>星空工作室</span></a></li>
                <li data-original-title="星空工作室" data-toggle="tooltip" data-placement="top"><a href="https://xkshow.top/" target="_blank"><span>星空工作室</span></a></li>                </ul>
              </li>
                            </ul>
          </nav>
          <!-- nav -->
        </div>
          <!--end of .navi-wrap-->
          <!--left_footer-->
                    <div id="left_footer" class="footer wrapper-xs text-center nav-xs lt">
                  
                                    <div class="col-xs-6 no-padder">
                      <a target="_blank" class="tinav" href="/feed" title="" data-toggle="tooltip" data-placement="top" data-original-title="文章RSS地址">
                          <span class="left-bottom-icons block"><i data-feather="rss"></i></span>
                          <small class="text-muted">文章</small>
                      </a>
                  </div>
                  <div class="col-xs-6 no-padder">
                      <a target="_blank" href="/feed/comments" title="" data-toggle="tooltip" data-placement="top" data-original-title="评论RSS地址">
                          <span class="left-bottom-icons block"><i data-feather="message-square"></i></span>
                          <small class="text-muted">评论</small>
                      </a>
                  </div>
          </div>
          
      </div><!--.aside-wrap-->
  </aside>
<!-- content -->
<div id="content" class="app-content">
    <!--loading animate-->
    <div id="loading" class="butterbar active hide">
            <span class="bar"></span>
        </div>  <!-- / aside -->
		<!-- <div id="content" class="app-content"> -->
  <a class="off-screen-toggle hide"></a>
  <main class="app-content-body animated fadeIn">
    <div class="hbox hbox-auto-xs hbox-auto-sm">
      <div class="col center-part">
                  <header class="bg-light lter wrapper-md">
          <h1 class="m-n font-thin text-black l-h">Starry、风</h1>
          <small class="text-muted letterspacing indexWords">On the clock of time,there are only two words now.</small>
          </header>
        <div class="wrapper-md" id="post-panel">
                        <!--首页输出文章-->
						`;

var modifyHeader = {};
var cookieText = "";

function getRequestParams(str) {
	var index = str.indexOf("?");
	str = str.substring(index + 1, str.length);
	if(typeof(str) == "string"){
		u = str.split("&");
		var get = {};
		for(var i in u){
			var j = u[i].split("=");
			get[j[0]] = j[1];
		}
		return get;
	} else {
		return {};
	}
}

async function bloghandle(request) {
	var cookie = {};
	var clist = undefined;
	try {
		cookieText.split(';').forEach(l => {
			var parts = l.split('=');
			cookie[parts[0].trim()] = unescape((parts[1] || '').trim());
		});
	} catch(e) {
		// 无可奉告
	}
	var $_GET = getRequestParams(request.url);
	var urls = new URL(request.url);
	var data = header;
	if(urls.pathname == "/") {
		var url = "https://raw.githubusercontent.com/" + github_base + "/master/list.json";
		const init = {
		method: "GET"
		};
		const response = await fetch(url, init);
		var resptxt = await response.text();
		if(cookie['list'] == undefined) {
			var Days = 30; 
			var exp = new Date(); 
			exp.setTime(exp.getTime() + Days*24*60*60*1000); 
			modifyHeader = {
				"Set-Cookie" : "list="+ escape (resptxt) + ";expires=" + exp.toGMTString()
			};
		}
		var json = JSON.parse(resptxt);
		// console.log(json);
		data += `<p>所有文章</p>
						`;
		var before_page = 0;
		var current_page = 1;
		var next_page = 2;
		var pagenow = json.length;
		var pageval = json.length - 5;
		if($_GET['p'] != undefined && $_GET['p'] != "") {
			pageval = json.length - (parseInt($_GET['p']) * 5);
			pagenow = json.length - ((parseInt($_GET['p']) - 1) * 5) - 1;
			next_page = parseInt($_GET['p']) + 1;
			current_page = parseInt($_GET['p']);
			before_page = parseInt($_GET['p']) - 1;
		}
		console.log(pageval);
		var update_i = 0;
		for(var i = pagenow;i >= pageval;i--) {
		try {
			var tmpfilename = encodeURIComponent(json[i].file
			.replace(/"/g, "").replace(/posts\//ig, "").replace(/\.md/ig, ""));
			var tmptitles = json[i].titles;
			var tmpimg = json[i].img;
			var tmptime = json[i].time;
			var tmptitle = json[i].title;
			data += `<div class="blog-post"><div class="panel-small single-post box-shadow-wrap-normal">
                                 <div class="index-post-img-small post-feature index-img-small">
                                 <a href="/${tmpfilename}">
                                 <div class="item-thumb-small lazy"  style="background-image: url(${tmpimg})"></div>
                                 </a>
                                   </div><div class="post-meta wrapper-lg">    <h2 class="m-t-none text-ellipsis index-post-title text-title"><a href="/${tmpfilename}">${tmptitle}</a></h2><p class="summary l-h-2x text-muted">${tmptitles}</p><div class="line line-lg b-b b-light"></div>
                                   <div class="text-muted post-item-foot-icon text-ellipsis list-inline">
                                  <li>
                                  <span class="m-r-sm right-small-icons"><i data-feather="user"></i></span><a href="/">${owner_name}</a></li>
                                <li><span class="right-small-icons m-r-sm"><i data-feather="clock"></i></span>${tmptime}</li><li><span class="right-small-icons m-r-sm"><i data-feather="message-square"></i></span><a href="/driver.html#comments">暂无评论</a></li></div></div></div>
						`;
			update_i++;
		} catch(e) {
			// 收声
		}
		}
		console.log(update_i);
		if(update_i == 0) {
		data += `<p><blockquote>暂时没有文章！</blockquote></p>
				`
		}
		data += `<br>
						<p class="text-left pageid">当前在第 ${current_page} 页</p>
						<p class="text-right">
							`;
		if(current_page > 1) {
		data += `<a href="/?p=${before_page}"><button class="btn btn-default">上一页</button></a>&nbsp; &nbsp;`;
		}
		if(update_i >= 5) {
		data += `<a href="/?p=${next_page}"><button class="btn btn-default">下一页</button></a>`;
		}
		data += `
						</p>
					</div>
				`;
		title = default_title;
		intitle = default_intitle;
		title2 = "";
	} else {
		var uname = unescape("posts" + urls.pathname + ".md");
		try {
		clist = cookie['list'];
		} catch(e) {
		var url = "https://raw.githubusercontent.com/" + github_base + "/master/list.json";
		const init = {
			method: "GET"
		};
		const response = await fetch(url, init);
		clist = await response.text();
		}
		if(clist != undefined) {
			try {
				var json = JSON.parse(clist);
				var found = false;
				for(var i in json) {
					tmpfilename = json[i].file.replace(/"/g, "");
					tmptitles = json[i].titles;
					tmpimg = json[i].img;
					tmptime = json[i].time;
					tmptitle = json[i].title;
					if(tmpfilename == uname) {
						titles = tmptitles;
						img = tmpimg;
						title = tmptitle;
						intitle = tmptitle;
						ctime = tmptime;
						found = true;
					}
				}
				if(!found) {
					var url = "https://raw.githubusercontent.com/" + github_base + "/master/list.json";
					const init = {
						method: "GET"
					};
					const response = await fetch(url, init);
					clist = await response.text();
					var json = JSON.parse(clist);
					for(var i in json) {
						tmpfilename = json[i].file.replace(/"/g, "");
						tmptitles = json[i].titles;
						tmpimg = json[i].img;
						tmptime = json[i].time;
						tmptitle = json[i].title;
						if(tmpfilename == uname) {
							titles = tmptitles;
							img = tmpimg;
							title = tmptitle;
							intitle = tmptitle;
							ctime = tmptime;
						}
					}
					var Days = 30; 
					var exp = new Date(); 
					exp.setTime(exp.getTime() + Days*24*60*60*1000); 
					modifyHeader = {
						"Set-Cookie" : "list="+ escape (clist) + ";expires=" + exp.toGMTString()
					};
				}
			} catch(e) {
				// 收声
			}
		} else {
			var url = "https://raw.githubusercontent.com/" + github_base + "/master/list.json";
			const init = {
				method: "GET"
			};
			const response = await fetch(url, init);
			var clist = await response.text();
			var json = JSON.parse(clist);
			for(var i in json) {
				tmpfilename = json[i].file.replace(/"/g, "");
				tmptitles = json[i].titles;
				tmpimg = json[i].img;
				tmptime = json[i].time;
				tmptitle = json[i].title;
				if(tmpfilename == uname) {
					titles = tmptitles;
					img = tmpimg;
					title = tmptitle;
					intitle = tmptitle;
					ctime = tmptime;
				}
			}
			var Days = 30; 
			var exp = new Date(); 
			exp.setTime(exp.getTime() + Days*24*60*60*1000); 
			modifyHeader = {
				"Set-Cookie" : "list="+ escape (clist) + ";expires=" + exp.toGMTString()
			};
		}
		data += `</div>
         <div id="postpage" class="blog-post">
        <article class="single-post panel">
		<div id="post-content" class="wrapper-lg">
          <div class="entry-content l-h-2x">`;
		var url = "https://raw.githubusercontent.com/" + github_base + "/master/posts" + urls.pathname + ".md";
		const init = {
			method: "GET"
		};
		const response = await fetch(url, init);
		if(response.status == 200) {
			var resptxt = await response.text();
			data += resptxt.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">");
			description = resptxt.substring(0, 128).replace(/"/ig, "").replace(/\n/g, "\n");
			data += `</textarea>
					<hr>
</div>
<div class="support-author">
                 <button data-toggle="modal" data-target="#myModal" class="btn btn-pay btn-danger btn-rounded"><i class="fontello fontello-wallet" aria-hidden="true"></i>赞赏</button>
                 <div class="mt20 text-center article__reward-info">
                     <span class="mr10">如果觉得我的文章对你有用，请随意赞赏</span>
                 </div>
             </div>
             <div id="myModal" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                 <div class="modal-dialog modal-sm" role="document">
                     <div class="modal-content">
                         <div class="modal-header">
                             <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                             <h4 class="modal-title">赞赏作者</h4>
                         </div>
                         <div class="modal-body">
                             <p class="text-center article__reward"> <strong class="article__reward-text">扫一扫支付</strong> </p>
                             <div class="tab-content"><img noGallery aria-labelledby="alipay-tab" class="pay-img tab-pane fade in active" id="alipay_author" role="tabpanel" src="https://xkshow.gitee.io/blog/img/zfbfk.jpg" /><img noGallery aria-labelledby="wechatpay-tab" class="pay-img tab-pane fade" id="wechatpay_author" role="tabpanel" src="https://xkshow.gitee.io/blog/img/wxfk.jpg" /></div>
                             <div class="article__reward-border mb20 mt10"></div>

                             <div class="text-center" role="tablist"><div class="pay-button" role="presentation" class="active"><button  href="#alipay_author" id="alipay-tab" aria-controls="alipay_author" role="tab" data-toggle="tab" class="btn m-b-xs m-r-xs btn-info"><i class="iconfont icon-alipay" aria-hidden="true"></i><span>支付宝支付</span></button>
                                 </div><div class="pay-button" role="presentation"><button href="#wechatpay_author" id="wechatpay-tab" aria-controls="wechatpay_author" role="tab" data-toggle="tab" class="btn m-b-xs btn-success"><i class="iconfont icon-wechatpay" aria-hidden="true"></i><span>微信支付</span></button>
                                 </div></div>
                         </div>
                     </div>
                 </div>
             </div><hr>
					<div id="comments" style="text-align:center;">发表于${ctime}</div>
				`;
		} else {
			data += `<p class="text-center">### 404 Not Found</p>
<p class="text-center">未找到您访问的页面，原因可能是：</p>
<p class="text-center">- 该文章已被删除</p>
<p class="text-center">- 该文章已经更改名称</p>
<p class="text-center">- 您输入的链接不正确</p>
<p class="text-center"><a href="/">返回 ${default_intitle} 首页</a></p>
					</textarea>
				`;
			title = `404 Not Found`;
			title2 = ` - ${default_title}`;
			intitle = `未找到指定的页面`;
			description = ``;
			isunknown = " hidden";
		}
		title2 = ` - ${default_title}`;
	}
	data += `<footer id="footer" class="app-footer" role="footer">
    <div class="wrapper bg-light" style="text-align:center;">
      <span class="pull-right hidden-xs text-ellipsis"">
      粤ICP备3867547号       
      </span>
        <span class="text-ellipsis">Copyright ©2020 Starry、风</span>
    </div>
      <!--可以去除主题版权信息，最好保留版权信息或者添加主题信息到友链，谢谢你的理解-->
            <style>
          .topButton>.btn{
              top: 0;
          }
          </style>
      
      <div class="topButton panel panel-default">
          <button id="goToTop" class="btn btn-default no-shadow pos-abt hide  border-radius-half-left" data-toggle="tooltip" data-placement="left" data-original-title="返回顶部">
              <i class="fontello fontello-chevron-circle-up" aria-hidden="true"></i>
          </button>
      </div>
  </footer>
  </div><!--end of .app app-header-fixed-->
<script>
SearchConfig = {
    url : "/search"
}
</script>
    <!--定义全局变量-->
    <script type="text/javascript">
        window['LocalConst'] = {
            COMMENT_NAME_INFO: '必须填写昵称或姓名',
            COMMENT_EMAIL_INFO: '必须填写电子邮箱地址',
            COMMENT_EMAIL_LEGAL_INFO: '邮箱地址不合法',
            COMMENT_CONTENT_INFO: '必须填写评论内容',
            COMMENT_SUBMIT_ERROR: '提交失败，请重试！',
            COMMENT_CONTENT_LEGAL_INFO: '提交失败,评论被拦截，可能发言太快或内容不符合规则',
            LOGIN_USERNAME_INFO: '必须填写用户名',
            LOGIN_PASSWORD_INFO: '请填写密码',
            LOGIN_SUBMIT_ERROR: '登录失败，请重新登录',
            LOGIN_SUBMIT_INFO: '用户名或者密码错误，请重试',
            LOGIN_SUBMIT_SUCCESS: '登录成功',
            CLICK_TO_REFRESH: '点击以刷新页面',
            LOGOUT_SUCCESS_REFRESH: '退出成功，正在刷新当前页面',
            LOGOUT_ERROR: '退出失败，请重试',
            LOGOUT_SUCCESS: '退出成功',
            SUBMIT_PASSWORD_INFO: '密码错误，请重试',
            COMMENT_TITLE: '评论通知',
            LOGIN_TITLE: '登录通知',
            ChANGYAN_APP_KEY: '',
            CHANGYAN_CONF: '',
            COMMENT_SYSTEM: '0',
            COMMENT_SYSTEM_ROOT: '0',
            COMMENT_SYSTEM_CHANGYAN: '1',
            COMMENT_SYSTEM_OTHERS: '2',
            EMOJI: '表情',
            IS_PJAX: '1',
            IS_PAJX_COMMENT: '1',
            BASE_SCRIPT_URL: '/',
            BLOG_URL: '/',
            BLOG_URL_PHP: '/',
            THEME_COLOR: '14',
            THEME_COLOR_EDIT: 'white-white-white ',
            THEME_HEADER_FIX: '1',
            THEME_ASIDE_FIX: '1',
            THEME_ASIDE_FOLDED: '',
            THEME_ASIDE_DOCK: '',
            THEME_CONTAINER_BOX: '',
            THEME_HIGHLIGHT_CODE: '1',
            THEME_TOC: '1',
            TOC_TITLE: '文章目录',
            HEADER_FIX: '固定头部',
            ASIDE_FIX: '固定导航',
            ASIDE_FOLDED: '折叠导航',
            ASIDE_DOCK: '置顶导航',
            CONTAINER_BOX: '盒子模型',
            OFF_SCROLL_HEIGHT: '50',
            COMMENT_REJECT_PLACEHOLDER: '居然什么也不说，哼',
            COMMENT_PLACEHOLDER: '说点什么吧……',
            SHOW_SETTING_BUTTON: '',
            THEME_VERSION: '6.0.020191205',
            OPERATION_NOTICE: '操作通知',
            SCREENSHOT_BEGIN: '正在生成当前页面截图……',
            SCREENSHOT_NOTICE: '点击顶部下载按钮保存当前卡片',
            SCREENSHORT_ERROR: '由于图片跨域原因导致截图失败',
            SCREENSHORT_SUCCESS: '截图成功',
            MUSIC_NOTICE: '播放通知',
            MUSIC_FAILE: '当前音乐地址无效，自动为您播放下一首',
            MUSIC_FAILE_END: '当前音乐地址无效',
            MUSIC_LIST_SUCCESS: '歌单歌曲加载成功',
            CDN_NAME: 'QINIU',
            LAZY_LOAD: ''
        };
    </script>
<!--CDN加载-->
<script src="${js_bootstrap}"></script>
    <script src="${js_jquerypjax}" type="text/javascript"></script>
    <script>
        $(document).pjax('a[href^="https://blog.wubin.design/"]:not(a[target="_blank"], a[no-pjax])', {
            container: '#content',
            fragment: '#content',
            timeout: 8000
        }).on('pjax:send',function () {
                        $('#loading').removeClass('hide');
                    }).on('pjax:click', function() {
            window['Page'].doPJAXClickAction();
            
                        $('body,html').animate({scrollTop:0},100);
            
        }).on('pjax:complete', function() {
            window['Page'].doPJAXCompleteAction();
            if ($(".post-position").length > 0){
                window['Page'].doPJAXCompletePostAction();
            }
                                    $('#loading').addClass('hide');
            
                        
        })
    </script>
<!--主题组件js加载-->
    <!--平滑滚动组件-->
    <script src="${js_SmoothScroll}"></script>
<!--pjax动画组件-->
<script src="${js_feather}"></script>
<!--lightgallery必备组件-->
<script src="${js_fancybox}"></script>
<script src="${js_easypiechart}"></script>
    <!--component/comments.php 页面必需js（只有选择了原生评论的时候才会加载）-->
    <script src="${js_OwO}"></script>
    <!--component/comments.php 必需js结束-->
<!--截图插件-->
<script src="${js_html2canvas}"></script>
<!--主题组件js加载结束-->
<!--主题核心js-->
    <script src="${js_function}"></script>
    <script src="${js_core}"></script>
    <!--全局播放器组件-->
    <script src="${js_music}"></script>
    <script>
                var player = new skPlayer({"autoplay":false,"listshow":false,"mode":"listloop","music":{"type":"cloud","source":"3186927696","media":"netease"}});
    </script>
    <script type="text/javascript">
              </script>
</body>
</html>
	`;
	data = data.replace(/\{title\}/ig, title)
		.replace(/\{intitle\}/ig, intitle)
		.replace(/\{title\_2\}/ig, title2)
		.replace(/\{isunknown\}/ig, isunknown)
		.replace(/\{description\}/ig, description);
	return data;
}

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
	if(new URL(request.url).protocol != "https:") {
		var rhttps = new Response("Location to https", {status: 301});
		rhttps.headers.set("Location", request.url.replace("http://", "https://"));
		return rhttps;
	}
	cookieText = request.headers.get("cookie");
	var resp = new Response(await bloghandle(request), {status: 200});
	resp.headers.set("Content-Type", "text/html");
	if(modifyHeader != undefined) {
		for(var index in modifyHeader) {
		resp.headers.set(index, modifyHeader[index]);
		}
	}
	return resp;
}
