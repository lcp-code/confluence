---
title: css
head:
  - - meta
    - name: description
      content: css资料大全、css库、less、sass、stylus、postcss、styled-components、tailwindcss、字体工具、主题切换、css变量教程、css自定义属性、主题切换、vite、webpack、umi、css参考、盒子模型、bfc、动画、布局、css权威指南、flex布局、css modules、css伪类、css预处理、媒体查询、瀑布流、grid、css抽象语法树、css样式重置。
# 原创申明
isOriginal: true
icon: config
order: 3
category:
  - 前端指南
  - web/移动h5
  - css
tag:
  - css
---

### **normal：**
- [caniuse](https://caniuse.com/) web前端兼容性列表
### **css库：**
- [materialize](https://github.com/Dogfalo/materialize) Materialize, a CSS Framework based on Material Design [文档](https://materializecss.com/#)
- [awesome-css](https://github.com/awesome-css-group/awesome-css) 🎨 A curated contents of amazing CSS🙂
- [less](https://github.com/less/less.js) Less. The dynamic stylesheet language. [文档](http://lesscss.org/) [中文文档](https://less.bootcss.com/#概览)
  - 文章：
  - [Less的@import指令](https://blog.csdn.net/ixygj197875/article/details/78588751)
- [sass](https://github.com/sass/sass) Scss/Sass makes CSS fun again. Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more. It's translated to well-formatted, standard CSS using the command line tool or a plugin for your build system. [文档](https://sass-lang.com/documentation/at-rules)
  - [SASS用法指南](https://blog.csdn.net/wangningjing87/article/details/100918868)
  - [Future CSS Syntax](https://hub.fastgit.xyz/postcss/postcss/blob/main/docs/plugins.md#future-css-syntax)
  - [postcss-preset-env](https://www.npmjs.com/package/postcss-preset-env) [文档](https://preset-env.cssdb.org/)
- [stylus](https://github.com/stylus/stylus/) Expressive, robust, feature-rich CSS language built for nodejs  [文档](https://stylus.bootcss.com/)
- [styled-jsx](https://github.com/zeit/styled-jsx) Full CSS support for JSX without compromises
- [styled-components](https://www.npmjs.com/package/styled-components) 
- [css-to-react-native](https://www.npmjs.com/package/css-to-react-native) Converts CSS text to a React Native stylesheet object.
- [postcss](https://www.npmjs.com/package/postcss) PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.
  - [PostCSS Plugins](https://hub.fastgit.xyz/postcss/postcss/blob/main/docs/plugins.md)
- [postcss-js](https://www.npmjs.com/package/postcss-js) PostCSS for React Inline Styles, Radium, JSS and other CSS-in-JS.
- [inline-style-prefixer](https://www.npmjs.com/package/inline-style-prefixer) A small, simple and fast vendor prefixer from JavaScript style object.
- [postcss-px2rem](https://www.npmjs.com/package/postcss-px2rem) This is a postcss plugin of px2rem.
- [reactcss](https://www.npmjs.com/package/reactcss) Inline Styles in JS with support for React, React Native, Autoprefixing, Hover, Pseudo-Elements & Media Queries [文档](http://ww1.reactcss.com/)
- [react-with-styles](https://www.npmjs.com/package/react-with-styles) Use CSS-in-JavaScript for your React components without being tightly coupled to one implementation
- [insert-css](https://www.npmjs.com/package/insert-css) insert a string of css into the head
- [tailwindcss](https://www.npmjs.com/package/tailwindcss) A utility-first CSS framework for rapidly building custom user interfaces. [文档](https://tailwindcss.com/)
- [@ant-design/colors](https://www.npmjs.com/package/@ant-design/colors) 🎨 Color palettes calculator of Ant Design.
### **字体工具：**
- [transfonter](https://transfonter.org/) Modern and simple css @font-face generator
### **主题切换：**
- [使用CSS自定义属性（变量）](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)
- [css 变量教程](http://www.ruanyifeng.com/blog/2017/05/css-variables.html)
  - 应用示例：
    - [盒马生鲜的rex-design](https://alibaba.github.io/rex-design/docs#切换颜色模式与设备)
    - [ant-design在线颜色切换](https://hub.fastgit.xyz/ant-design/ant-design/blob/master/site/theme/template/Layout/Footer.tsx#L344)
      - dist/less.min.js 文件大小151kb
    - vue-vben-admin
      - [效果参考](https://vvbin.cn/next/#/frame/antv)
      - 代码参考
        - [界面功能](https://github.com/anncwb/vue-vben-admin/tree/main/src/layouts/default/setting)
        - [样式变量设计](https://github.com/anncwb/vue-vben-admin/tree/main/src/design)
        - [修改主题样式方法](https://github.com/anncwb/vue-vben-admin/tree/main/src/logics/theme)
    - ant-design-pro[效果参考](https://preview.pro.ant.design/dashboard/analysis?primaryColor=volcano)
- [less-vars-to-js](https://www.npmjs.com/package/less-vars-to-js) Read LESS variables from the contents of a file and return them as a javascript object.
- [@ant-design/colors](https://www.npmjs.com/package/@ant-design/colors) 🎨 Color palettes calculator of Ant Design.
- 配合打包工具切换主题
  - vite
    - [vite-plugin-theme](https://www.npmjs.com/package/vite-plugin-theme) Vite plugin for dynamically changing the theme color of the interface. After vite processes the css and dynamically analyzes the color value in the css text that matches the plug-in configuration, extract the specified color style code from all output css files. And create a app-theme-style.css file containing only color styles, dynamically insert it into the specified position (the bottom of the default body), and then replace the custom style/component library style color used with the new color, In order to achieve the purpose of dynamically changing the theme color of the project
  - webpack
    - [webpack-theme-color-replacer](https://www.npmjs.com/package/webpack-theme-color-replacer) This plugin can extract theme color styles from all the outputed css files (such as element-ui theme colors), and make a 'theme-colors.css' file which only contains color styles. At runtime in your web page, the client part will help you to download this css file, and then replace the colors into new customized colors dynamicly.
  - umi
    - [umi-plugin-setting-drawer](https://www.npmjs.com/package/umi-plugin-setting-drawer) 
    - [antd-theme-webpack-plugin](https://www.npmjs.com/package/antd-theme-webpack-plugin) This webpack plugin is to generate color specific less/css and inject into your index.html file so that you can change Ant Design specific color theme in browser.
      - [cra中使用](https://github.com/mzohaibqc/antd-theme-webpack-plugin/blob/master/examples/customize-cra/config-overrides.js)
        - [customize-cra](https://github.com/mzohaibqc/antd-theme-webpack-plugin/blob/master/examples/customize-cra/config-overrides.js)
        - [cra](https://github.com/mzohaibqc/antd-theme-webpack-plugin/blob/master/examples/create-react-app/config-overrides.js)
      - [webpack配置](https://github.com/mzohaibqc/antd-theme-webpack-plugin/blob/master/examples/antd-init/webpack.config.js)
    - [在线更换主题](https://pro.ant.design/zh-CN/blog/change-theme)
### **文章：**
- [CSS（层叠样式表）](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
  - [css参考](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)
    - [选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference#选择器)
  - [transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)
  - [transform-function/perspective](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/perspective)
  - [CSS3 filter(滤镜) 属性](https://www.runoob.com/cssref/css3-pr-filter.html)
  - [caret-color](https://developer.mozilla.org/zh-CN/docs/Web/CSS/caret-color) 光标颜色
  - [Layout_cookbook](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook)
  - **CSS 关键概念:**
  - [语言语法和形式](https://developer.mozilla.org/zh-CN/docs/CSS/Syntax)（The [syntax and forms of the language](https://developer.mozilla.org/en-US/docs/CSS/Syntax)）
  - [特殊性（另译优先级）](https://developer.mozilla.org/zh-CN/docs/CSS/Specificity)、[继承](https://developer.mozilla.org/zh-CN/docs/CSS/inheritance)和[级联](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Cascade)（[Specificity](https://developer.mozilla.org/en-US/docs/CSS/Specificity), [inheritance](https://developer.mozilla.org/en-US/docs/CSS/inheritance)[ ](https://developer.mozilla.org/en-US/docs/CSS/inheritance)and [the Cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)）
  - [盒子模型](https://developer.mozilla.org/zh-CN/docs/CSS/box_model)和[外边距合并](https://developer.mozilla.org/zh-CN/docs/CSS/margin_collapsing)（[Box model](https://developer.mozilla.org/en-US/docs/CSS/box_model) and [margin collapse](https://developer.mozilla.org/en-US/docs/CSS/margin_collapsing)）
  - [包含块](https://developer.mozilla.org/zh-CN/docs/Web/CSS/All_About_The_Containing_Block)（The [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block)）
  - [堆叠](https://developer.mozilla.org/zh-CN/docs/CSS/Understanding_z-index/The_stacking_context)和[块格式化](https://developer.mozilla.org/zh-CN/docs/CSS/block_formatting_context)上下文（[Stacking](https://developer.mozilla.org/en-US/docs/CSS/Understanding_z-index/The_stacking_context) and [block-formatting](https://developer.mozilla.org/en-US/docs/CSS/block_formatting_context) contexts）
  - [初始值](https://developer.mozilla.org/zh-CN/docs/CSS/initial_value)、[计算值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/computed_value)、[应用值](https://developer.mozilla.org/zh-CN/docs/CSS/used_value)和[实际值](https://developer.mozilla.org/zh-CN/docs/CSS/actual_value)（[Initial](https://developer.mozilla.org/en-US/docs/CSS/initial_value), [computed](https://developer.mozilla.org/en-US/docs/CSS/computed_value), [used](https://developer.mozilla.org/en-US/docs/CSS/used_value), and [actual](https://developer.mozilla.org/en-US/docs/CSS/actual_value) values）
  - [CSS 简写属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Shorthand_properties)（[CSS shorthand properties](https://developer.mozilla.org/en-US/docs/CSS/Shorthand_properties)）
  - [CSS 弹性盒子布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout) ([CSS Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout))
    - [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)
      - [简写值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex#values)
  - [CSS 网格布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout)[ ](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout)([Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout))
  - [媒体查询](https://developer.mozilla.org/zh-CN/docs/Web/CSS/媒体查询)
  - [动画](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)
  - **其它样式：**
  - [-webkit-scrollbar](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-scrollbar)
- [responsive-web-design](https://developers.google.com/web/fundamentals/design-and-ux/responsive/)
- [静态布局、自适应布局、流式布局、响应式布局、弹性布局等的概念和区别](https://www.cnblogs.com/yanayana/p/7066948.html)
- [PC端自适应布局](https://blog.csdn.net/sunshine940326/article/details/55194861)
- [Autoprefixer CSS online](http://autoprefixer.github.io/)
- [css权威指南](https://www.processon.com/view/5792477be4b0d617ce2df122)
- [css浏览器兼容写法](https://www.cnblogs.com/duyingxuan/p/6517933.html)
- [CSS选取第几个标签元素：nth-child(n)、first-child、last-child](https://blog.csdn.net/longgeaisisi/article/details/78154169)
- [彻底搞定vertical-align垂直居中不起作用疑难杂症](https://blog.csdn.net/weixin_33739523/article/details/87987274)
- [Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html) [Flex 布局教程：实例篇](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
- [CSS Modules 用法教程](http://www.ruanyifeng.com/blog/2016/06/css_modules.html) 
- [CSS Grid 网格布局教程](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html) [强大的display:grid](https://www.jianshu.com/p/41c038baf994) [在线演示](http://cssgridgarden.com/)
- [响应式下的雪碧图解决方案 － 活用background-size / background-position](https://www.cnblogs.com/hity-tt/p/6345007.html?utm_source=itdadao&utm_medium=referral)
- [深入理解CSS：line-height、vertical-align](https://www.cnblogs.com/wfeicherish/p/8884903.html)
- [绝对定位如何在不同分辨率下的电脑正常显示位置](http://www.360doc.com/content/17/0528/23/43317249_658095767.shtml)
- [table表格，让thead固定，tbody有滚动条，关键是都对齐的纯css写法。](https://www.cnblogs.com/webSong/p/6242444.html)
- [移动端屏幕适配和css美化浏览器自带的滚动条](https://www.cnblogs.com/amylis_chen/p/11995324.html)
- [在 Web 内容中使用系统字体](https://csspod.com/using-the-system-font-in-web-content/)
- [伪类中（：before 为例）添加添加图片方法](https://blog.csdn.net/qq_31898845/article/details/70553025)
- [解决CSS transform: scale(); in Chrome后导致文字抖动以及模糊的解决办法](https://stackoverflow.com/questions/14677490/blurry-text-after-using-css-transform-scale-in-chrome)
- [CSS抗锯齿 font-smoothing 属性介绍](https://www.cnblogs.com/sunshq/p/4595673.html)
- [antd栅格grid布局示例](https://codesandbox.io/s/zhagepeizhiqi-ant-design-demo-26v42?file=/index.js)
- [flex实现栅格布局](evernote:///view/49307766/s275/7779bc1e-f3c0-45f4-b1bb-8d98b84a1365/7779bc1e-f3c0-45f4-b1bb-8d98b84a1365/)
- [两张图详解解元素位置宽度的属性（offsetHeight/ClientHeight/ScrollHeight/getBoundingClientRect）](https://cloud.tencent.com/developer/article/1499096)
- [CSS 预处理器 sass,less,stylus优缺点 ](https://www.jianshu.com/p/9d84bb5043bb)
- [web颜色搭配方案](https://coolors.co/palettes/trending)
- [:after/::after和:before/::before的区别](https://blog.csdn.net/u013778905/article/details/52901880)
- [媒体查询](https://guide.aotu.io/docs/css/query.html)
- [CSS中可以和不可以继承的属性](https://www.cnblogs.com/thislbq/p/5882105.html)
- [IntersectionObserver API 使用教程](http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html)
- [详说 Block Formatting Contexts (块级格式化上下文)](https://www.cnblogs.com/leejersey/p/3991400.html)
- [CSS3中的content和attr的用法](https://www.webhek.com/post/css-content-and-attr.html)
- [input的placeholder字体大小无法修改？](http://feg.netease.com/archives/placeholder-about.html)
- [Antd Design中a-input标签中placeholder属性样式的修改](https://blog.csdn.net/gaowie/article/details/110953284)
- [outline与border的区别](https://www.cnblogs.com/Likebard/p/6979940.html)
- [Warning: Updating a style property during rerender .... To avoid this, don't mix shorthand and non-shorthand properties](https://github.com/Khan/react-multi-select/issues/69)
- [cursor 属性](https://www.jianshu.com/p/b06270a9bb1a)
- [谈谈一些有趣的CSS题目（十五）-- 谈谈 CSS 关键字 initial、inherit 和 unset](https://cloud.tencent.com/developer/article/1136722)
- align-items: stretch 与height: 100% 撑开div高度
- [Multi-columns](https://developer.mozilla.org/zh-CN/docs/Web/CSS/columns) CSS属性 columns 用来设置元素的列宽和列数。
- [20211203grid样式](https://app.yinxiang.com/shard/s69/nl/14678950/aa9d309d-1231-4134-8807-959e3c948a32)
- [20210916瀑布流](https://app.yinxiang.com/shard/s69/nl/14678950/ce6fff14-fe0e-429e-8666-e7ff9b051d60)
  - [「中高级前端」干货！深度解析瀑布流布局](https://blog.csdn.net/cqf546710115/article/details/103270223) multi-column、grid、Flexbox三种方式实现瀑布流
    - [完整示例](https://codesandbox.io/s/masonry-grid-2-u5h2w)
- [关于父元素设置min-height，子元素设置 height 100% 不生效的问题](https://blog.csdn.net/weixin_42335036/article/details/109102609)
### **布局：**
- [阿里fusion的模块布局方式](https://fusion.design/pc/design/doc/20)
- [盒马跨端设计系统 ReX Design For OS](https://app.yinxiang.com/shard/s69/nl/14678950/d737637e-da98-4463-95bf-4b234938d977)
### **抽象语法树：**
- [关于css 的AST 语法树的理解](https://blog.csdn.net/weixin_30408309/article/details/97323091)
- **webpack的css相关配置问题：**
- [解决css-loader不同文件拥有相同的hash:base64的bug](https://gitissue.com/issues/5b3acfa4617e7a079646cf78)
- [【面试题】前端css经典面试题 50道](https://zhuanlan.zhihu.com/p/75132250)[CSS水平垂直居中常见方法总结](https://blog.csdn.net/qq_27576607/article/details/78697812)
### **需求点思考**：
  - css绝对定位的父层级可以指定，目前不能指定，默认用最近标为position: relative 或 absolute属性的父节点
  - 同时form的submit功能又要求，button需在form内，如此，就无法实现，form内的元素依赖form外面高层级父节点进行定位

### **样式重置**：
移动端：
```css
* { -webkit-tap-highlight-color: transparent; outline: 0; margin: 0; padding: 0; vertical-align: baseline; }

body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin: 0; padding: 0; vertical-align: baseline; }

img { border: 0 none; vertical-align: top; }

i, em { font-style: normal; }

ol, ul { list-style: none; }

input, select, button, h1, h2, h3, h4, h5, h6 { font-size: 100%; font-family: inherit; }

table { border-collapse: collapse; border-spacing: 0; }

a { text-decoration: none; color: #666; }

body { margin: 0 auto; min-width: 320px; max-width: 640px; height: 100%; font-size: 14px; font-family: -apple-system,Helvetica,sans-serif; line-height: 1.5; color: #666; -webkit-text-size-adjust: 100% !important; text-size-adjust: 100% !important; }

```

pc端：
```css
html, body, div, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, ul, li, fieldset, form, label, input, legend, table, caption, tbody, tfoot, thead, tr, th, td, textarea, article, aside, audio, canvas, figure, footer, header, mark, menu, nav, section, time, video { margin: 0; padding: 0; }

h1, h2, h3, h4, h5, h6 { font-size: 100%; font-weight: normal }

article, aside, dialog, figure, footer, header, hgroup, nav, section, blockquote { display: block; }

ul, ol { list-style: none; }

img { border: 0 none; vertical-align: top; }

blockquote, q { quotes: none; }

blockquote:before, blockquote:after, q:before, q:after { content: none; }

table { border-collapse: collapse; border-spacing: 0; }

strong, em, i { font-style: normal; font-weight: normal; }

ins { text-decoration: underline; }

del { text-decoration: line-through; }

mark { background: none; }

input::-ms-clear { display: none !important; }

body { font: 12px/1.5 \5FAE\8F6F\96C5\9ED1, \5B8B\4F53, "Hiragino Sans GB", STHeiti, "WenQuanYi Micro Hei", "Droid Sans Fallback", SimSun, sans-serif; background: #fff; }

a { text-decoration: none; color: #333; }

a:hover { text-decoration: underline; }
```
