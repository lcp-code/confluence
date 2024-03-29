---
title: js
icon: config
order: 2
category:
  - 前端指南
  - web/移动h5
  - js
tag:
  - js
---

**normal：**

[google-web](https://developers.google.com/web/fundamentals) Google's opinionated reference for building amazing web experiences.

- [google-performance使用介绍](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance)
- [使用 RAIL 模型评估性能](https://developers.google.com/web/fundamentals/performance/rail)

[developer.mozilla](https://developer.mozilla.org/zh-CN/) MDN 的一切（文档和网站本身）都是由一个开放的开发者社区创造

[Web API 接口参考](https://developer.mozilla.org/zh-CN/docs/Web/API) 在使用 JavaScript 编写 Web 代码时，有许多 Web API 可供调用。以下是所有接口（即对象类型）的列表，你可以在开发网站或 Web 应用程序时使用它们。Web API主要用于JavaScript，但也可能有例外。

- [Web 图形开发](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Graphics)
- [优化和性能](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Performance)
  - [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
  - [Lighthouse](https://developers.google.com/web/tools/lighthouse/)
  - [WebPageTest](https://www.webpagetest.org/)
  - 浏览器开发工具
  - [web性能](https://developer.mozilla.org/zh-CN/docs/Web/Performance)
- [FormData 对象的使用](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/Using_FormData_Objects)
- [FileReader](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader)
- [/API/Element对象](https://developer.mozilla.org/zh-CN/docs/Web/API/Element)
  - [Web/API/Element/animate](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/animate)
- [JavaScript 标准内置对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)
  - [RegExp对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp) [JavaScript RegExp 对象](https://www.w3school.com.cn/jsref/jsref_obj_regexp.asp)
  - [Proxy对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
  - [Reflect对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect) 的一些方法与 [Object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)相同, 尽管二者之间存在 [某些细微上的差别](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods) .
  - [String对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)
    - [replace](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
  - [Function对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - [Number对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)
    - Number.MAX_VALUE
    - Number.isNaN()
    - Number.isFinite()
    - eg:
      - -Number.MAX_VALUE - Number.MAX_VALUE === -Infinity
  - [Map对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)
    - [Objects 和 maps 的比较](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_和_maps_的比较)
  - [Object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)
    - [is](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 方法判断两个值是否为同一个值。
  - [WeakMap](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
    - [Why WeakMap?](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap#why_weakmap_？)
    - [ES6之WeakMap](https://www.jianshu.com/p/8c4ffa77b346)
  - [Set](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)
  - [WeakSet](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
    - [检测循环引用](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet#检测循环引用)
  - [Symbol.for和Symbol()区别](https://www.h5w3.com/17690.html)
  - [Array 类型化数组](https://www.cnblogs.com/toward-the-sun/p/7682956.html)
  - [Blob对象](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob) Blob 对象表示一个不可变、原始数据的类文件对象。
    - 文章
    - [二进制数据：ArrayBuffer和blob总结(实战)，以及相互转换方法](https://blog.csdn.net/qq_38974163/article/details/119862253)
    - [JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换](https://blog.csdn.net/tiven_/article/details/124153793)
    - [前端处理后端返回的二进制流图片](https://www.jianshu.com/p/2447fa3e9b21)
    - [js操作文件流转音频Buffer](https://blog.csdn.net/zfz5720/article/details/118544446?spm=1001.2101.3001.6650.9&utm_medium=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromBaidu~Rate-9-118544446-blog-117766683.pc_relevant_paycolumn_v3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromBaidu~Rate-9-118544446-blog-117766683.pc_relevant_paycolumn_v3)
- **js调用时机：**
- [MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver) DOM发生变化时被调用 创建并返回一个新的 MutationObserver 它会在指定的DOM发生变化时被调用
- [requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame) 帧数控制调用 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
- [requestIdleCallback](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback) 闲时调用 方法将在浏览器的空闲时段内调用的函数排队。react fabric优化使用
- [web worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker) 多线程调用 [例子](https://hub.fastgit.xyz/mdn/simple-web-worker)
- [IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver/IntersectionObserver) 进入可视区调用 当元素可见比例超过指定阈值后，会调用一个回调函数
- [Events](https://developer.mozilla.org/zh-CN/docs/Web/Events)
  - [在线和离线事件](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine)
  - [Drag](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/drag_event)
    - 拖放事件：
      - 跟被拖拽元素有关事件
        - [drag](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/drag_event)
        - [dragstart](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/dragstart_event)
        - [dragend](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/dragend_event)
    - 跟拖放目标元素有关事件
      - [dragover](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/dragover_event)
      - [dragenter](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/dragenter_event)
      - [dragleave](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/dragleave_event)
      - [dragexit](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/dragexit_event)
      - [drop](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/drop_event)
    - [MouseEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent) [JS鼠标事件（非常详细）](http://c.biancheng.net/view/5944.html)
  - 确定滚动元素位置是否在窗口可视范围通过offsetTop和pageYOffset来判断，动态添加样式可控制元素出入场动画。参考库[aos](https://github.com/michalsnik/aos)
  - [IndexedDB_API](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API) IndexedDB 是一种底层 API，用于在客户端存储大量的结构化数据（也包括文件/二进制大型对象（blobs））。
  - [postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage) 方法可以安全地实现跨源通信
- [Web Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components) Web components 的一个重要属性是封装——可以将标记结构、样式和行为隐藏起来，并与页面上的其他代码相隔离，保证不同的部分不会混在一起，可使代码更加干净、整洁
  - [使用 shadow DOM](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM) Shadow DOM 接口是关键所在，它可以将一个隐藏的、独立的 DOM 附加到一个元素上。本篇文章将会介绍 Shadow DOM 的基础使用。
    - 例子
    - [popup-info-box-external-stylesheet](https://github.com/mdn/web-components-examples/blob/master/popup-info-box-external-stylesheet/main.js)
- [awesome-javascript](https://github.com/sorrycc/awesome-javascript) 🐢 A collection of awesome browser-side JavaScript libraries, resources and shiny things. （云谦）
- [javascript-patterns](https://github.com/shichuan/javascript-patterns) JavaScript Patterns 
- [javascript](https://github.com/airbnb/javascript) airbnb JavaScript Style Guide 代码整洁
- [standard](https://github.com/standard/standard) 🌟 JavaScript Style Guide, with linter & automatic code fixer  [中文文档](https://standardjs.com/readme-zhcn.html)
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [es6语法大全](http://es6.ruanyifeng.com/#README) 阮一峰
  - [装饰器](https://es6.ruanyifeng.com/#docs/decorator)
  - [mixin](https://es6.ruanyifeng.com/#docs/decorator%23Mixin)
- [es2018语言规范](https://ecma262.docschina.org/#sec-scope)
- [skill-tree](https://github.com/TabSpace/skill-tree) 用于积累个人关注的资源
- [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS) A book series on JavaScript. [@YDKJS](https://github.com/YDKJS) on twitter.
- [JavaScript框架、类库、工具汇总](https://www.ctolib.com/topics-120868.html)
- [js 中动态执行代码的几种方法](https://zhuanlan.zhihu.com/p/415818516)
- [webpack和原生框架动态加载js的方法小结](https://segmentfault.com/a/1190000022508340)
- [可编辑div中如何在光标位置添加内容](https://blog.csdn.net/u011081244/article/details/52160531)
- [jsfiddle](https://jsfiddle.net/becarchal/9u8L7d1a/7/)在线网站工具
- [pageSwitch](https://github.com/qiqiboy/pageSwitch) Just a page-Switch Javascript Library  [效果预览](http://u.boy.im/pageswitch/pic.html)
- [js事件列表](https://www.cnblogs.com/simith/p/3834626.html)
- [JavaScript 事件冒泡和阻止冒泡](https://zhuanlan.zhihu.com/p/139584174)
- [Javascript之ES7详解](https://www.jianshu.com/p/13c5d002478b)
- [window事件属性](http://www.w3school.com.cn/tags/html_ref_eventattributes.asp)
- [fullPage.js](https://github.com/alvarotrigo/fullPage.js) fullPage plugin by Alvaro Trigo. Create full screen pages fast and simple
- [如何使用cryptoJs配合java进行AES加密和解密](https://www.cnblogs.com/yuyutianxia/p/7694195.html)
- [nodeJs 和 android中java加密一致性问题](https://www.cnblogs.com/maomingchao/p/8022654.html)
- [jquery-pagewalkthrough](https://github.com/jwarby/jquery-pagewalkthrough) Page Walkthrough is a flexible system for designing interactive, multimedia, educational walkthroughs. 新手引导
- [用html5实现图片和文字拖拽到下面的文本框里的Demo](https://blog.csdn.net/Stay_Hungry_Stay/article/details/81225034)
- js注释：
  - [jsdoc](https://github.com/jsdoc3/jsdoc) An API documentation generator for JavaScript.  [文档](https://jsdoc.app/)
  - [jsDoc guide](http://yuri4ever.github.io/jsdoc/#@func)
    - [jsDoc记录对象数组](https://www.it1352.com/241345.html)
  - [js注释](https://www.cnblogs.com/SLchuck/p/4376200.html)
  - [js注释规范](https://blog.csdn.net/lianlin21212411/article/details/78530913)
- [Promise实现原理（附源码）](https://www.jianshu.com/p/43de678e918a)
- [vue项目中自动拉取更新阿里巴巴Iconfont](https://blog.csdn.net/shentibeitaokong/article/details/82463941)
- [js数组、对象、Set、Map数据结构迭代器遍历方法比较](https://es6.ruanyifeng.com/#docs/iterator#与其他遍历语法的比较)（for\forEach\map\for in\for of）
- [js 跳出for/for in/for of/each/for each 循环](https://www.cnblogs.com/juneling/p/10046880.html)[for await](http://es6.ruanyifeng.com/#docs/async)[…](http://es6.ruanyifeng.com/#docs/async)[of](http://es6.ruanyifeng.com/#docs/async) 
- for...of循环用于遍历同步的 Iterator 接口。新引入的for await...of循环，则是用于遍历异步的 Iterator 接口。
- [for..of vs. for..in 语句的区别](https://www.tslang.cn/docs/handbook/iterators-and-generators.html)
- [JavaScript 语言的 Thunk 函数](http://es6.ruanyifeng.com/#docs/generator-async) JavaScript 语言是传值调用，它的 Thunk 函数含义有所不同。在 JavaScript 语言中，Thunk 函数替换的不是表达式，而是多参数函数，将其替换成一个只接受回调函数作为参数的单参数函数。
- [typeof与instanceof的异同?](https://blog.csdn.net/qq_38601916/article/details/81275091)
- [JS使用in和hasOwnProperty获取对象属性的区别](https://blog.csdn.net/happyqyt/article/details/90577797)
- [判断某个属性是否属于某个对象](https://blog.csdn.net/baidu_39067385/article/details/106159506)
- [javascript 原型属性（prototype 属性）与 实例属性（自身属性）](https://blog.csdn.net/tashanhongye/article/details/74277061)
- [取值函数（getter）和存值函数（setter)](http://es6.ruanyifeng.com/%23docs/class ) 对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
- [静态方法](http://es6.ruanyifeng.com/%23docs/class  ) 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。如果静态方法包含this关键字，这个this指的是类，而不是实例。
- [类的方法内部如果含有](http://es6.ruanyifeng.com/%23docs/class  )[this](http://es6.ruanyifeng.com/%23docs/class  )[，它默认指向类的实例。](http://es6.ruanyifeng.com/%23docs/class  )
- [js中各种情况的this](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 来源MDN web docs
- [super 关键字](https://es6.ruanyifeng.com/#docs/class-extends%23super-关键字) super这个关键字，既可以当作函数使用，也可以当作对象使用。super作为函数调用时，代表父类的构造函数。。super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
- 微信小程序[背景图片在编辑器中可以展示，但是手机预览时无法显示。](https://www.jianshu.com/p/18aaac940df2)
- [微信小程序解决 text 设置行高 line-height 无效的问题](https://www.jianshu.com/p/50182f1adc27)
- [小程序 mpvue 生命周期一览](https://blog.csdn.net/solocao/article/details/87188710)
- [不同设备html5 ](http://www.fynas.com/ua/search?b=&d=荣耀) [User-Agent查询工具](http://www.fynas.com/ua/search?b=&d=荣耀)
- [js获取手机型号及系统](https://blog.csdn.net/szs860806/article/details/70316556/)
- [驼峰转中线或下划线](https://blog.csdn.net/luzhongk/article/details/78918489)
- [Vue源码解析：this.$data、this._data、this.xxx 为什么都能获取数据？data为什么是个函数？](https://blog.csdn.net/weixin_41845146/article/details/85257924)
- [void 0 与 undefined的区别](https://blog.csdn.net/juzipchy/article/details/86367565)
- [利用a标签导出csv文件](https://www.cnblogs.com/shcrk/p/9297426.html)
- [require.js的用法-阮一峰](https://blog.csdn.net/p312011150/article/details/83504255) [requirejs](https://requirejs.org/)
- [借助Service Worker和cacheStorage缓存及离线开发](https://www.zhangxinxu.com/wordpress/2017/07/service-worker-cachestorage-offline-develop/) [https-demo](https://github.com/zhangxinxu/https-demo)
- [CacheStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/CacheStorage)
- [React和Vue中，是如何监听变量变化的](https://www.cnblogs.com/lalalagq/p/9956845.html)
- [JS中的dataTransfer对象 拖拽值传递](https://www.jianshu.com/p/55039f5136cb) 值必须是字符串
- [datatransfer](https://html.spec.whatwg.org/multipage/dnd.html#datatransfer) This section defines an event-based drag-and-drop mechanism
- [javascript深拷贝(deepClone)详解](https://blog.csdn.net/qq_34629352/article/details/84641161)
- [深入浅出Object.defineProperty()](https://www.jianshu.com/p/8fe1382ba135)
- [Object.create()](https://www.jianshu.com/p/28d85bebe599)
- [echarts中关于自定义legend图例文字](https://blog.csdn.net/ypjmfc/article/details/78979319) formatter自定义
- [Web Workers 分类及 5 个使用场景](https://segmentfault.com/a/1190000014938305)
- [ES6-函数的扩展-双冒号运算符](https://blog.csdn.net/ww430430/article/details/78492439)
- [原生js获取dom元素节点的偏移量](http://www.jsphp.net/js/show-9-382-1.html)
- [理解和使用ES6中的Symbol](https://www.jianshu.com/p/f40a77bbd74e)
- [输入框事件监听(一)：keydown、keyup、input](https://blog.csdn.net/yiifaa/article/details/52372022)
- [js动态创建变量](https://www.cnblogs.com/Marydon20170307/p/9253957.html)
- [JavaScript 严格模式(use strict)](https://www.runoob.com/js/js-strict.html)
- [深入解析ES Module（一）：禁用export default object](https://zhuanlan.zhihu.com/p/40733281)
- [深入解析ES Module（二）：彻底禁用default export](https://zhuanlan.zhihu.com/p/97335917)
- [iframe之间的postMessage传参](https://www.cnblogs.com/sanqianjin/p/10767470.html)
- [js 宏任务和微任务](https://www.cnblogs.com/wangziye/p/9566454.html)
  - [这一次，彻底弄懂 JavaScript 执行机制](https://juejin.cn/post/6844903512845860872)
  - [微任务、宏任务与Event-Loop](https://www.cnblogs.com/jiasm/p/9482443.html)
- [MVVM](https://www.jianshu.com/p/423a214757ba)
- [requestAnimationFrame详解](https://www.jianshu.com/p/fa5512dfb4f5)
- [自定义事件：CustomEvent 或document.createEvent](https://app.yinxiang.com/shard/s69/nl/14678950/a64d9755-0c23-46f6-a799-082abf8924d6)
- [深入理解 window.onload](http://eux.baidu.com/blog/fe/深入理解window.onload)
- [cookie, sessionStorage,localStorage,indexDB总结 【前言】](https://juejin.cn/post/6844904161041973256)
  - [indexeddb-对象](https://wangdoc.com/javascript/bom/indexeddb.html#indexeddb-对象)
- [详解 & 0xff 的作用](https://blog.csdn.net/i6223671/article/details/88924481) [byte为什么要与上0xff？](https://www.cnblogs.com/think-in-java/p/5527389.html)
- [原生 JS 实现全局发布订阅事件](https://www.cnblogs.com/hq2020/p/13967154.html)
- [如何优雅的实现消息通信？](https://segmentfault.com/a/1190000023782318)
- [+new Date()](https://blog.csdn.net/weixin_34258782/article/details/91431424)
- [Global 对象属性和方法](https://www.cnblogs.com/elfpower/p/12711194.html)
- [禁用浏览器的缩放功能（js）](https://blog.csdn.net/jbj6568839z/article/details/103665222)
- [执行 innerHTML 里的 ](https://www.cnblogs.com/libin-1/p/6565458.html)
- [js动态添加script脚本、检测script脚本、删除script脚本](https://blog.51cto.com/u_15127686/3558334)
- [JS实现文字转语音播放](https://www.cnblogs.com/panchanggui/p/14863631.html?ivk_sa=1024320u)
- [20220604js-copy](https://app.yinxiang.com/shard/s69/nl/14678950/c580592f-e3d4-433b-8533-312aad9afebd)
- **web安全：**
- [Web 安全漏洞之 XSS 攻击](https://zhuanlan.zhihu.com/p/50277809)
- [web-安全概念](https://eggjs.org/zh-cn/core/security.html#web-安全概念)
- **项目例子：**
- [遥感控制器效果](https://codepen.io/krischan77/pen/zYxPNPy?__cf_chl_jschl_tk__=d35ce4bc9959b85a82de986a9f55bc99ebf99c70-1585234895-0-AYp-hShzORuemEhqr-AeGnWMFLWSMTDhLwItLCVPvygGKDvK-tebUM1iHdQVX-Zf1q1AMFK-HVXCeY0Il5B6lV-EjdLRkJVRrIBGqgcTOLHEfM2Ddprywwr3rtC8y93IvKYrmQF4enw5GUnmkb8Z8JkgcCxYcDUvcGGz6kEWWitJSTK3YtWKHpTvcy7kT6SyHVC-j3sw-ox12ah822YIL2NR5Hwx8DyRTwe_5IYS-q2DjdRK7gEmkQTqDhGdS3TrzlAN6zFACR_MXDTISNAlvbZGoXhJbNX2MqaYyjyeQNVuVfI6XFpCjvQ-iQKJw4tmA6uKpUpEkk1oVmK4gWUio0FfKfvCpuqscCrcyjTX7vep)
- [js实例](https://www.runoob.com/js/js-examples.html)
- **单元测试：**
- 单元测试文章：
  - [vue单元测试](https://www.jianshu.com/p/ba76cfcac72c)
  - [前端单元测试](https://www.jianshu.com/p/12f0e14de514) 
- 单元测试适用场景及最简洁例子单元测试开源项目案例：
  - [react-handsontable](https://github.com/handsontable/react-handsontable) React Data Grid with Spreadsheet Look & Feel. Official React wrapper for Handsontable. [ demo](https://handsontable.com/examples?manual-resize&manual-move&conditional-formatting&context-menu&filters&dropdown-menu&headers&sorting&merge-cells&fixed&multi-column-sorting&csv-export&column-summary&nested-headers&collapsible-columns&trim-rows)
  - [dva](https://github.com/dvajs/dva) 🌱 React and redux based, lightweight and elm-style framework. (Inspired by elm and choo)  [中文文档](https://dvajs.com/api/#effects)
- 问题解决
  - [使用monaco编辑器 报错Can only have one anonymous define call per script file](https://blog.csdn.net/m0_38050352/article/details/109378179)