import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as u,c as i,a as n,b as a,w as p,d as s,e as c}from"./app.6acf8a6b.js";const r={},k=s("\u5728\u4E0A\u4E00\u7BC7\u5DF2\u7ECF\u8BB2\u4E86\u6DF1\u590D\u5236\u548C\u6D45\u590D\u5236\u7684\u533A\u522B\uFF0C\u5C31\u662F\u5F15\u7528\u590D\u5236\u548C\u503C\u590D\u5236\u7684\u533A\u522B\u3002\u89C1"),d=s("\u6570\u7EC4"),h=s("\u3002"),v=c(`<ul><li>\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7684\u7279\u70B9\uFF1A\u6570\u636E\u76F4\u63A5\u5B58\u50A8\u5728\u6808(stack)\u5185\u5B58\u4E2D</li><li>\u5F15\u7528\u6570\u636E\u7C7B\u578B\u7684\u7279\u70B9\uFF1A\u5728\u6808\u4E2D\u5B58\u50A8\u7684\u662F\u8BE5\u5BF9\u8C61\u5F15\u7528\uFF0C\u771F\u5B9E\u7684\u6570\u636E\u5B58\u653E\u5728\u5806\u5185\u5B58\u91CC</li></ul><h3 id="\u5B9E\u73B0\u65B9\u5F0F\u4E00-\u501F\u52A9json\u65B9\u6CD5-\u4E0D\u80FD\u6DF1\u62F7\u8D1D\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u5F0F\u4E00-\u501F\u52A9json\u65B9\u6CD5-\u4E0D\u80FD\u6DF1\u62F7\u8D1D\u51FD\u6570" aria-hidden="true">#</a> <strong>\u5B9E\u73B0\u65B9\u5F0F\u4E00\uFF1A\u501F\u52A9JSON\u65B9\u6CD5\uFF0C\u4E0D\u80FD\u6DF1\u62F7\u8D1D\u51FD\u6570</strong></h3><p>JSON.stringify()\uFF1A\u7528\u4E8E\u5C06 JavaScript \u503C\u8F6C\u6362\u4E3A JSON \u5B57\u7B26\u4E32 JSON.parse()\uFF1A\u7528\u4E8E\u5C06\u4E00\u4E2A JSON \u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u5BF9\u8C61\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;str&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
arr1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span> <span class="token comment">// [{ value: 3}, { value: 2}, &#39;str&#39;]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span> <span class="token comment">// [{ value: 1}, { value: 2}, &#39;str&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u65B9\u5F0F\u4E8C-\u624B\u5199\u51FD\u6570\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u5F0F\u4E8C-\u624B\u5199\u51FD\u6570\u5B9E\u73B0" aria-hidden="true">#</a> <strong>\u5B9E\u73B0\u65B9\u5F0F\u4E8C\uFF1A\u624B\u5199\u51FD\u6570\u5B9E\u73B0</strong></h3>`,5),_=s("\u8981\u6DF1\u62F7\u8D1D\u5B9E\u73B0\u503C\u590D\u5236\uFF0C\u5C31\u662F\u4E0D\u5F97\u4E0D\u5224\u65AD\u503C\u7684\u7C7B\u578B\uFF08getType\u89C1"),m=s("\u7C7B\u578B\u5224\u65AD\u7684\u51E0\u79CD\u65B9\u5F0F"),f=s("\uFF09\uFF0C\u4EE5\u8FDB\u4E00\u6B65\u9009\u62E9\u8D4B\u503C\u65B9\u5F0F\u3002"),b=n("mark",null,"\u6838\u5FC3\u601D\u60F3\uFF1A\u9012\u5F52\u904D\u5386\u6570\u7EC4\u3001\u5BF9\u8C61\u505A\u503C\u590D\u5236",-1),y=c(`<ul><li>\u975E\u5F15\u7528\u590D\u5236\uFF0C\u76F4\u63A5\u8D4B\u503C</li><li>\u5F15\u7528\u8D4B\u503C\uFF0C\u904D\u5386\u9012\u5F52\u8D4B\u503C</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">deepClone</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> type <span class="token operator">=</span> <span class="token function">getType</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> tempValue<span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;array&#39;</span> <span class="token operator">||</span> type <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;array&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    tempValue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    data<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      tempValue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">deepClone</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> tempValue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    tempValue <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        tempValue<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> tempValue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u867D\u7136\u5927\u6982\u610F\u601D\u5B9E\u73B0\u4E86\uFF0C\u4F46\u662F\u5728\u751F\u4EA7\u73AF\u5883\u5EFA\u8BAE\u4F7F\u7528underscore\u6216lodash\uFF0C\u4ED6\u4EEC\u8003\u8651\u4E86\u66F4\u52A0\u5B8C\u6574\u7684\u60C5\u51B5\uFF0C\u6BD4\u5982function\u3001Map\u3001Set\u7684\u5904\u7406\u7B49\u3002</p><p>\u9644\u52A0\u6D45\u62F7\u8D1D\u7684\u5B9E\u73B0\u65B9\u5F0F</p><ul><li>Object.assign</li><li>Array.prototype.concat</li><li>Array.prototype.slice</li></ul><p>\u672C\u6587\u5730\u5740\uFF1A</p>`,6),g={href:"https://confluence.uuyang.cn/universal/data-structure/faq/deep-clone.html",target:"_blank",rel:"noopener noreferrer"},w=s("https://confluence.uuyang.cn/universal/data-structure/faq/deep-clone.html"),j=n("p",null,"\u53C2\u8003",-1),x=s("underscore\u7684\u5B9E\u73B0 "),N={href:"https://github.com/jashkenas/underscore",target:"_blank",rel:"noopener noreferrer"},V=s("https://github.com/jashkenas/underscore"),S=s("lodash\u7684\u5B9E\u73B0 "),O={href:"https://github.com/lodash/lodash",target:"_blank",rel:"noopener noreferrer"},J=s("https://github.com/lodash/lodash"),C={href:"https://zhuanlan.zhihu.com/p/56741046",target:"_blank",rel:"noopener noreferrer"},q=s("https://zhuanlan.zhihu.com/p/56741046"),z=n("p",null,"\u76F8\u5173\u6587\u7AE0\u63A8\u8350",-1),E=s("js\u6570\u636E\u7C7B\u578B\u5224\u65AD\u7684\u51E0\u79CD\u65B9\u5F0F"),L=s("\u624B\u5199debounce\u3001throttle"),B={href:"https://github.com/lcp-code/code-base",target:"_blank",rel:"noopener noreferrer"},T=s("\u5404\u8BED\u8A00\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5\u5B9E\u64CD"),A=s("c\u3001c++\u3001java\u3001go\u3001python\u3001javascript\u7B49\u5404\u8BED\u8A00\u7279\u6027\uFF0C\u85AA\u8D44\u5206\u5E03");function I(R,M){const t=o("RouterLink"),e=o("ExternalLinkIcon");return u(),i("div",null,[n("p",null,[k,a(t,{to:"/universal/data-structure/linear/array.html"},{default:p(()=>[d]),_:1}),h]),v,n("p",null,[_,a(t,{to:"/universal/data-structure/faq/get-type.html"},{default:p(()=>[m]),_:1}),f,b]),y,n("ul",null,[n("li",null,[n("a",g,[w,a(e)])])]),j,n("ul",null,[n("li",null,[x,n("a",N,[V,a(e)])]),n("li",null,[S,n("a",O,[J,a(e)])]),n("li",null,[n("a",C,[q,a(e)])])]),z,n("ul",null,[n("li",null,[a(t,{to:"/universal/data-structure/faq/get-type.html"},{default:p(()=>[E]),_:1})]),n("li",null,[a(t,{to:"/universal/data-structure/faq/debounce-throttle.html"},{default:p(()=>[L]),_:1})]),n("li",null,[n("a",B,[T,a(e)])]),n("li",null,[a(t,{to:"/universal/lang/lang-feature.html"},{default:p(()=>[A]),_:1})])])])}var F=l(r,[["render",I],["__file","deep-clone.html.vue"]]);export{F as default};
