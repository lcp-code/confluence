import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as b,c as y,a as s,b as n,w as l,d as e,e as c}from"./app.6acf8a6b.js";const f={},A=s("p",null,"VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.",-1),w=s("p",null,"You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.",-1),C=s("h2",{id:"markdown-introduction",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-introduction","aria-hidden":"true"},"#"),e(" Markdown Introduction")],-1),x=e("If you are a new learner and don\u2019t know how to write Markdown, please read "),D={href:"https://vuepress-theme-hope.github.io/v2/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},z=e("Markdown Intro"),E=e(" and "),B={href:"https://vuepress-theme-hope.github.io/v2/cookbook/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},T=e("Markdown Demo"),V=e("."),S=s("h2",{id:"markdown-config",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-config","aria-hidden":"true"},"#"),e(" Markdown Config")],-1),M=s("p",null,"VuePress introduce configuration for each markdown page using Frontmatter.",-1),P={class:"custom-container info"},F=s("p",{class:"custom-container-title"},"Info",-1),I=e("Frontmatter is a important concept in VuePress. If you don\u2019t know it, you need to read "),j={href:"https://vuepress-theme-hope.github.io/v2/cookbook/vuepress/page.html#front-matter",target:"_blank",rel:"noopener noreferrer"},L=e("Frontmatter Introduction"),q=e("."),J=s("h2",{id:"markdown-extension",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-extension","aria-hidden":"true"},"#"),e(" Markdown Extension")],-1),N=e("The Markdown content in VuePress will be parsed by "),H={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},Y=e("markdown-it"),O=e(", which supports "),W={href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"},G=e("syntax extensions"),K=e(" via markdown-it plugins."),Q=s("h3",{id:"vuepress-enhancement",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress-enhancement","aria-hidden":"true"},"#"),e(" VuePress Enhancement")],-1),R=s("p",null,"To enrich document writing, VuePress has extended Markdown syntax.",-1),U=e("For these extensions, please read "),X={href:"https://vuepress-theme-hope.github.io/v2/basic/vuepress/markdown.html",target:"_blank",rel:"noopener noreferrer"},Z=e("Markdown extensions in VuePress"),$=e("."),ss=s("h3",{id:"theme-enhancement",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#theme-enhancement","aria-hidden":"true"},"#"),e(" Theme Enhancement")],-1),es=e("By using "),ns={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/",target:"_blank",rel:"noopener noreferrer"},ts=s("code",null,"vuepress-plugin-md-enhance",-1),as=e(", the theme extends more Markdown syntax and provides richer writing functions."),ls={class:"custom-container tip"},is=s("p",{class:"custom-container-title"},"Enable all",-1),os=e("You can set "),rs=s("code",null,"plugins.mdEnhance.enableAll: true",-1),cs=e(" in theme options to enable all features of the "),ps={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/",target:"_blank",rel:"noopener noreferrer"},ms=e("md-enhance"),ds=e(" plugin."),us=s("div",{class:"language-typescript ext-ts line-numbers-mode"},[s("pre",{class:"language-typescript"},[s("code",null,[s("span",{class:"token keyword"},"import"),e(),s("span",{class:"token punctuation"},"{"),e(" hopeTheme "),s("span",{class:"token punctuation"},"}"),e(),s("span",{class:"token keyword"},"from"),e(),s("span",{class:"token string"},'"vuepress-theme-hope"'),s("span",{class:"token punctuation"},";"),e(`

`),s("span",{class:"token keyword"},"export"),e(),s("span",{class:"token keyword"},"default"),e(),s("span",{class:"token punctuation"},"{"),e(`
  theme`),s("span",{class:"token operator"},":"),e(),s("span",{class:"token function"},"hopeTheme"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),e(`
    plugins`),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"{"),e(`
      mdEnhance`),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"{"),e(`
        enableAll`),s("span",{class:"token operator"},":"),e(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},","),e(`
      `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),e(`
    `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),e(`
  `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},","),e(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},";"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),hs=s("div",{class:"language-javascript ext-js line-numbers-mode"},[s("pre",{class:"language-javascript"},[s("code",null,[s("span",{class:"token keyword"},"const"),e(),s("span",{class:"token punctuation"},"{"),e(" hopeTheme "),s("span",{class:"token punctuation"},"}"),e(),s("span",{class:"token operator"},"="),e(),s("span",{class:"token function"},"require"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"vuepress-theme-hope"'),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),e(`

module`),s("span",{class:"token punctuation"},"."),e("exports "),s("span",{class:"token operator"},"="),e(),s("span",{class:"token punctuation"},"{"),e(`
  `),s("span",{class:"token literal-property property"},"theme"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token function"},"hopeTheme"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),e(`
    `),s("span",{class:"token literal-property property"},"plugins"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"{"),e(`
      `),s("span",{class:"token literal-property property"},"mdEnhance"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"{"),e(`
        `),s("span",{class:"token literal-property property"},"enableAll"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},","),e(`
      `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),e(`
    `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),e(`
  `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},","),e(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},";"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),gs=c(`<h4 id="custom-container" tabindex="-1"><a class="header-anchor" href="#custom-container" aria-hidden="true">#</a> Custom Container</h4><div><p>Safely use {{ variable }} in Markdown.</p></div><div class="custom-container info"><p class="custom-container-title">Custom Title</p><p>A custom information container with <code>code</code>, <a href="#markdown">link</a>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">Custom Title</p><p>A custom tip container</p></div><div class="custom-container warning"><p class="custom-container-title">Custom Title</p><p>A custom warning container</p></div><div class="custom-container danger"><p class="custom-container-title">Custom Title</p><p>A custom danger container</p></div><details class="custom-container details"><summary>Custom Title</summary><p>A custom details container</p></details><details class="custom-container details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: v-pre

Safely use {{ variable }} in Markdown.

:::

::: info Custom Title

A custom information container

:::

::: tip Custom Title

A custom tip container

:::

::: warning Custom Title

A custom warning container

:::

::: danger Custom Title

A custom danger container

:::

::: details Custom Title

A custom details container

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,8),vs={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/container.html",target:"_blank",rel:"noopener noreferrer"},_s=e("View Detail"),ks=s("h3",{id:"tabs",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tabs","aria-hidden":"true"},"#"),e(" Tabs")],-1),bs=s("p",null,"Apple",-1),ys=s("p",null,"Banana",-1),fs=s("p",null,"Orange",-1),As={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/tabs.html",target:"_blank",rel:"noopener noreferrer"},ws=e("View Detail"),Cs=s("h4",{id:"code-tabs",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#code-tabs","aria-hidden":"true"},"#"),e(" Code Tabs")],-1),xs=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"pnpm"),e(),s("span",{class:"token function"},"add"),e(` -D vuepress-theme-hope
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),Ds=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),e(),s("span",{class:"token function"},"add"),e(` -D vuepress-theme-hope
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),zs=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),e(` i -D vuepress-theme-hope
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),Es={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},Bs=e("View Detail"),Ts=s("h4",{id:"superscript-and-subscript",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#superscript-and-subscript","aria-hidden":"true"},"#"),e(" Superscript and Subscript")],-1),Vs=s("p",null,[e("19"),s("sup",null,"th"),e(" H"),s("sub",null,"2"),e("O")],-1),Ss={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/sup-sub.html",target:"_blank",rel:"noopener noreferrer"},Ms=e("View Detail"),Ps=s("h4",{id:"align",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#align","aria-hidden":"true"},"#"),e(" Align")],-1),Fs=s("div",{style:{"text-align":"center"}},[s("p",null,"I am center")],-1),Is=s("div",{style:{"text-align":"right"}},[s("p",null,"I am right align")],-1),js={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/align.html",target:"_blank",rel:"noopener noreferrer"},Ls=e("View Detail"),qs=c('<h4 id="footnote" tabindex="-1"><a class="header-anchor" href="#footnote" aria-hidden="true">#</a> Footnote</h4><p>This text has footnote<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p>',2),Js={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/footnote.html",target:"_blank",rel:"noopener noreferrer"},Ns=e("View Detail"),Hs=s("h4",{id:"mark",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mark","aria-hidden":"true"},"#"),e(" Mark")],-1),Ys=s("p",null,[e("You can mark "),s("mark",null,"important words"),e(" .")],-1),Os={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/mark.html",target:"_blank",rel:"noopener noreferrer"},Ws=e("View Detail"),Gs=s("h4",{id:"tasklist",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tasklist","aria-hidden":"true"},"#"),e(" Tasklist")],-1),Ks={class:"task-list-container"},Qs=c('<li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> Plan A</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> Plan B</label></p></li>',2),Rs={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/tasklist.html",target:"_blank",rel:"noopener noreferrer"},Us=e("View Detail"),Xs=s("h4",{id:"image-enhancement",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#image-enhancement","aria-hidden":"true"},"#"),e(" Image Enhancement")],-1),Zs=s("p",null,"Support setting color scheme and size",-1),$s={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/image.md",target:"_blank",rel:"noopener noreferrer"},se=e("View Detail"),ee=s("h4",{id:"chart",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#chart","aria-hidden":"true"},"#"),e(" Chart")],-1),ne={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/chart.html",target:"_blank",rel:"noopener noreferrer"},te=e("View Detail"),ae=s("h4",{id:"echarts",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#echarts","aria-hidden":"true"},"#"),e(" Echarts")],-1),le={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/echarts.html",target:"_blank",rel:"noopener noreferrer"},ie=e("View Detail"),oe=s("h3",{id:"flowchart",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#flowchart","aria-hidden":"true"},"#"),e(" Flowchart")],-1),re={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/flowchart.html",target:"_blank",rel:"noopener noreferrer"},ce=e("View Detail"),pe=s("h3",{id:"mermaid",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mermaid","aria-hidden":"true"},"#"),e(" Mermaid")],-1),me={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/mermaid.html",target:"_blank",rel:"noopener noreferrer"},de=e("View Detail"),ue=s("h3",{id:"tex",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tex","aria-hidden":"true"},"#"),e(" Tex")],-1),he=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("msup",null,[s("mi",{mathvariant:"normal"},"\u2202"),s("mi",null,"r")]),s("mrow",null,[s("mi",{mathvariant:"normal"},"\u2202"),s("msup",null,[s("mi",null,"\u03C9"),s("mi",null,"r")])])]),s("mrow",null,[s("mo",{fence:"true"},"("),s("mfrac",null,[s("msup",null,[s("mi",null,"y"),s("mi",null,"\u03C9")]),s("mi",null,"\u03C9")]),s("mo",{fence:"true"},")")]),s("mo",null,"="),s("mrow",null,[s("mo",{fence:"true"},"("),s("mfrac",null,[s("msup",null,[s("mi",null,"y"),s("mi",null,"\u03C9")]),s("mi",null,"\u03C9")]),s("mo",{fence:"true"},")")]),s("mrow",null,[s("mo",{fence:"true"},"{"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"\u2061"),s("mi",null,"y"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mi",null,"r")]),s("mo",null,"+"),s("munderover",null,[s("mo",null,"\u2211"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"r")]),s("mfrac",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mo",null,"\u2212"),s("mn",null,"1"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mi",null,"i")]),s("mi",null,"r"),s("mo",null,"\u22EF"),s("mo",{stretchy:"false"},"("),s("mi",null,"r"),s("mo",null,"\u2212"),s("mi",null,"i"),s("mo",null,"+"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"\u2061"),s("mi",null,"y"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mrow",null,[s("mi",null,"r"),s("mo",null,"\u2212"),s("mi",null,"i")])])]),s("msup",null,[s("mi",null,"\u03C9"),s("mi",null,"i")])]),s("mo",{fence:"true"},"}")])]),s("annotation",{encoding:"application/x-tex"},"\\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right\\} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.4em","vertical-align":"-0.95em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3714em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"\u2202"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"\u03C9"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.5904em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"\u2202"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])])])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},"(")]),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3414em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"\u03C9")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"\u03C9")])])])])])])])])])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},")")])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"3.0277em","vertical-align":"-1.2777em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},"(")]),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3414em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"\u03C9")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"\u03C9")])])])])])])])])])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},")")])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size4"},"{")]),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[e("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7144em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.6514em"}},[s("span",{style:{top:"-1.8723em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"\u2211")])]),s("span",{style:{top:"-4.3em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2777em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.5017em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"\u03C9"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7507em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mord"},"\u2212"),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8247em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])])])])])]),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},"\u22EF"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"\u2212"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")"),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[e("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8247em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mbin mtight"},"\u2212"),s("span",{class:"mord mathnormal mtight"},"i")])])])])])])])])])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size4"},"}")])])])])])])],-1),ge={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/tex.html",target:"_blank",rel:"noopener noreferrer"},ve=e("View Detail"),_e=s("h3",{id:"include-files",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#include-files","aria-hidden":"true"},"#"),e(" Include files")],-1),ke=s("p",null,"File not found",-1),be={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/include.md",target:"_blank",rel:"noopener noreferrer"},ye=e("View Detail"),fe=s("h3",{id:"code-demo",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#code-demo","aria-hidden":"true"},"#"),e(" Code Demo")],-1),Ae=s("div",{class:"language-html ext-html line-numbers-mode"},[s("pre",{class:"language-html"},[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),e("h1")]),s("span",{class:"token punctuation"},">")]),e("VuePress Theme Hope"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),e("h1")]),s("span",{class:"token punctuation"},">")]),e(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),e("p")]),s("span",{class:"token punctuation"},">")]),e("Is "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),e("span")]),e(),s("span",{class:"token attr-name"},"id"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),e("very"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),e("very"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),e("span")]),s("span",{class:"token punctuation"},">")]),e(" powerful!"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),e("p")]),s("span",{class:"token punctuation"},">")]),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),we=s("div",{class:"language-javascript ext-js line-numbers-mode"},[s("pre",{class:"language-javascript"},[s("code",null,[e("document"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"querySelector"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"#very"'),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"addEventListener"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"click"'),s("span",{class:"token punctuation"},","),e(),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),e(),s("span",{class:"token operator"},"=>"),e(),s("span",{class:"token punctuation"},"{"),e(`
  `),s("span",{class:"token function"},"alert"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"Very powerful!"'),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),e(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Ce=s("div",{class:"language-css ext-css line-numbers-mode"},[s("pre",{class:"language-css"},[s("code",null,[s("span",{class:"token selector"},"span"),e(),s("span",{class:"token punctuation"},"{"),e(`
  `),s("span",{class:"token property"},"color"),s("span",{class:"token punctuation"},":"),e(" red"),s("span",{class:"token punctuation"},";"),e(`
`),s("span",{class:"token punctuation"},"}"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),xe={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},De=e("View Detail"),ze=s("h3",{id:"presentation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#presentation","aria-hidden":"true"},"#"),e(" Presentation")],-1),Ee={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/presentation.html",target:"_blank",rel:"noopener noreferrer"},Be=e("View Detail"),Te=s("h3",{id:"stylize",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#stylize","aria-hidden":"true"},"#"),e(" Stylize")],-1),Ve=s("p",null,[e("Setting this to a invalid stytax "),s("span",{style:{color:"red"}},"doesn't"),e(" have any effect.")],-1),Se={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/stylize.md",target:"_blank",rel:"noopener noreferrer"},Me=e("View Detail"),Pe=c('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>This is footnote content <a href="#footnote-ref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>',2);function Fe(Ie,je){const t=a("ExternalLinkIcon"),p=a("CodeTabs"),m=a("Tabs"),d=a("ChartJS"),u=a("ECharts"),h=a("FlowChart"),g=a("Mermaid"),v=a("CodeDemo"),_=a("Presentation");return b(),y("div",null,[A,w,C,s("p",null,[x,s("a",D,[z,n(t)]),E,s("a",B,[T,n(t)]),V]),S,M,s("div",P,[F,s("p",null,[I,s("a",j,[L,n(t)]),q])]),J,s("p",null,[N,s("a",H,[Y,n(t)]),O,s("a",W,[G,n(t)]),K]),Q,R,s("p",null,[U,s("a",X,[Z,n(t)]),$]),ss,s("p",null,[es,s("a",ns,[ts,n(t)]),as]),s("div",ls,[is,s("p",null,[os,rs,cs,s("a",ps,[ms,n(t)]),ds]),n(p,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:l(({title:i,value:o,isActive:r})=>[us]),tab1:l(({title:i,value:o,isActive:r})=>[hs]),_:1})]),gs,s("ul",null,[s("li",null,[s("a",vs,[_s,n(t)])])]),ks,n(m,{data:[{title:"apple"},{title:"banana"},{title:"orange"}],"tab-id":"fruit"},{tab0:l(({title:i,value:o,isActive:r})=>[bs]),tab1:l(({title:i,value:o,isActive:r})=>[ys]),tab2:l(({title:i,value:o,isActive:r})=>[fs]),_:1}),s("ul",null,[s("li",null,[s("a",As,[ws,n(t)])])]),Cs,n(p,{data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],active:2},{tab0:l(({title:i,value:o,isActive:r})=>[xs]),tab1:l(({title:i,value:o,isActive:r})=>[Ds]),tab2:l(({title:i,value:o,isActive:r})=>[zs]),_:1}),s("ul",null,[s("li",null,[s("a",Es,[Bs,n(t)])])]),Ts,Vs,s("ul",null,[s("li",null,[s("a",Ss,[Ms,n(t)])])]),Ps,Fs,Is,s("ul",null,[s("li",null,[s("a",js,[Ls,n(t)])])]),qs,s("ul",null,[s("li",null,[s("a",Js,[Ns,n(t)])])]),Hs,Ys,s("ul",null,[s("li",null,[s("a",Os,[Ws,n(t)])])]),Gs,s("ul",Ks,[Qs,s("li",null,[s("p",null,[s("a",Rs,[Us,n(t)])])])]),Xs,Zs,s("ul",null,[s("li",null,[s("a",$s,[se,n(t)])])]),ee,n(d,{id:"chart-64a56866",config:"%7B%0A%20%20%22type%22%3A%20%22scatter%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22Scatter%20Dataset%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%20-10%2C%20%22y%22%3A%200%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%200%2C%20%22y%22%3A%2010%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%2010%2C%20%22y%22%3A%205%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%200.5%2C%20%22y%22%3A%205.5%20%7D%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%22rgb(255%2C%2099%2C%20132)%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%22options%22%3A%20%7B%0A%20%20%20%20%22scales%22%3A%20%7B%0A%20%20%20%20%20%20%22x%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22type%22%3A%20%22linear%22%2C%0A%20%20%20%20%20%20%20%20%22position%22%3A%20%22bottom%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A",title:"A%20Scatter%20Chart",type:"json"}),s("ul",null,[s("li",null,[s("a",ne,[te,n(t)])])]),ae,n(u,{id:"echarts-64a56822",config:"%7B%0A%20%20%22xAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22category%22%2C%0A%20%20%20%20%22data%22%3A%20%5B%22Mon%22%2C%20%22Tue%22%2C%20%22Wed%22%2C%20%22Thu%22%2C%20%22Fri%22%2C%20%22Sat%22%2C%20%22Sun%22%5D%0A%20%20%7D%2C%0A%20%20%22yAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22value%22%0A%20%20%7D%2C%0A%20%20%22series%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22data%22%3A%20%5B150%2C%20230%2C%20224%2C%20218%2C%20135%2C%20147%2C%20260%5D%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22line%22%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A",title:"A%20line%20chart",type:"json"}),s("ul",null,[s("li",null,[s("a",le,[ie,n(t)])])]),oe,n(h,{id:"flowchart-64a567b4",code:"cond%3D%3Econdition%3A%20Process%3F%0Aprocess%3D%3Eoperation%3A%20Process%0Ae%3D%3Eend%3A%20End%0A%0Acond(yes)-%3Eprocess-%3Ee%0Acond(no)-%3Ee%0A",preset:"vue"}),s("ul",null,[s("li",null,[s("a",re,[ce,n(t)])])]),pe,n(g,{id:"mermaid-64a56774",code:"flowchart%20TB%0A%20%20%20%20c1--%3Ea2%0A%20%20%20%20subgraph%20one%0A%20%20%20%20a1--%3Ea2%0A%20%20%20%20end%0A%20%20%20%20subgraph%20two%0A%20%20%20%20b1--%3Eb2%0A%20%20%20%20end%0A%20%20%20%20subgraph%20three%0A%20%20%20%20c1--%3Ec2%0A%20%20%20%20end%0A%20%20%20%20one%20--%3E%20two%0A%20%20%20%20three%20--%3E%20two%0A%20%20%20%20two%20--%3E%20c2%0A"}),s("ul",null,[s("li",null,[s("a",me,[de,n(t)])])]),ue,he,s("ul",null,[s("li",null,[s("a",ge,[ve,n(t)])])]),_e,ke,s("ul",null,[s("li",null,[s("a",be,[ye,n(t)])])]),fe,n(v,{id:"code-demo-531a6052",type:"normal",title:"A%20normal%20demo",code:"%7B%22html%22%3A%22%3Ch1%3EVuePress%20Theme%20Hope%3C%2Fh1%3E%5Cn%3Cp%3EIs%20%3Cspan%20id%3D%5C%22very%5C%22%3Every%3C%2Fspan%3E%20powerful!%3C%2Fp%3E%5Cn%22%2C%22js%22%3A%22document.querySelector(%5C%22%23very%5C%22).addEventListener(%5C%22click%5C%22%2C%20()%20%3D%3E%20%7B%5Cn%20%20alert(%5C%22Very%20powerful!%5C%22)%3B%5Cn%7D)%3B%5Cn%22%2C%22css%22%3A%22span%20%7B%5Cn%20%20color%3A%20red%3B%5Cn%7D%5Cn%22%7D"},{default:l(()=>[Ae,we,Ce]),_:1}),s("ul",null,[s("li",null,[s("a",xe,[De,n(t)])])]),ze,n(_,{id:"presentation-64a56128","data-code":"%0A%23%23%20Slide%201%0A%0AA%20paragraph%20with%20some%20text%20and%20a%20%5Blink%5D(https%3A%2F%2Fmrhope.site)%0A%0A---%0A%0A%23%23%20Slide%202%0A%0A-%20Item%201%0A-%20Item%202%0A%0A---%0A%0A%23%23%20Slide%203.1%0A%0A%60%60%60js%0Aconst%20a%20%3D%201%3B%0A%60%60%60%0A%0A--%0A%0A%23%23%20Slide%203.2%0A%0A%24%24%0AJ(%5Ctheta_0%2C%5Ctheta_1)%20%3D%20%5Csum_%7Bi%3D0%7D%0A%24%24%0A",theme:"auto"}),s("ul",null,[s("li",null,[s("a",Ee,[Be,n(t)])])]),Te,Ve,s("ul",null,[s("li",null,[s("a",Se,[Me,n(t)])])]),Pe])}var Je=k(f,[["render",Fe],["__file","markdown.html.vue"]]);export{Je as default};
