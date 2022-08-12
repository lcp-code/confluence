import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.11b077a9.js";const t={},o=p(`<p>\u7B80\u5355\u7B97\u6CD5\u9898\u4E00\u53E5\u8BDD\u603B\u7ED3</p><h3 id="\u6570\u7EC4\u62CD\u5E73" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u62CD\u5E73" aria-hidden="true">#</a> <strong>\u6570\u7EC4\u62CD\u5E73</strong></h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6570\u7EC4\u62CD\u5E73\uFF1A\u9879\u4E3A\u6570\u7EC4\u7684\u9012\u5F52\u62CD\u5E73\u518D\u8FDE\u63A5\uFF0C\u4E0D\u4E3A\u6570\u7EC4\u7684\u76F4\u63A5push</span>
<span class="token keyword">const</span> <span class="token function-variable function">flatArr</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        newArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token function">flatArr</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        newArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> newArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">22</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;flatArr&quot;</span><span class="token punctuation">,</span> <span class="token function">flatArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> <strong>\u6570\u7EC4\u53BB\u91CD</strong></h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6570\u7EC4\u53BB\u91CD\uFF1A\u5B57\u5178\u53BB\u91CD</span>
<span class="token keyword">const</span> <span class="token function-variable function">uniq</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> mapDict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>mapDict<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mapDict<span class="token punctuation">[</span>item<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        newArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> newArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">uniq</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6700\u5C0F\u6808" tabindex="-1"><a class="header-anchor" href="#\u6700\u5C0F\u6808" aria-hidden="true">#</a> <strong>\u6700\u5C0F\u6808</strong></h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6700\u5C0F\u6808\uFF1A\u53CC\u6808\u5206\u522B\u5B58\u6B63\u5E38\u503C\u548C\u6700\u5C0F\u503C</span>
<span class="token keyword">class</span> <span class="token class-name">MinStack</span> <span class="token punctuation">{</span>
  stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  minStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">Infinity</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token function-variable function">push</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>minStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
      Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>minStack<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>minStack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function-variable function">pop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>minStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function-variable function">top</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function-variable function">getMin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>minStack<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>minStack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MinStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">getMin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u83B7\u53D6\u968F\u673A\u6574\u6570" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u968F\u673A\u6574\u6570" aria-hidden="true">#</a> <strong>\u83B7\u53D6\u968F\u673A\u6574\u6570</strong></h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u83B7\u53D6\u968F\u673A\u6574\u6570: \u8303\u56F4\u5185\u6700\u5927\u503C\u51CF\u6700\u5C0F\u503C\uFF0C\u968F\u673A\u540E\u518D\u52A0\u4E0A\u6700\u5C0F\u503C</span>
<span class="token keyword">const</span> <span class="token function-variable function">getRandomInt</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num<span class="token punctuation">,</span> range</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> random <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>random <span class="token operator">*</span> <span class="token punctuation">(</span>range<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> range<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> range<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u968F\u673A\u53D1\u7EA2\u5305" tabindex="-1"><a class="header-anchor" href="#\u968F\u673A\u53D1\u7EA2\u5305" aria-hidden="true">#</a> <strong>\u968F\u673A\u53D1\u7EA2\u5305</strong></h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u968F\u673A\u53D1\u7EA2\u5305\uFF1A\u5FAA\u73AF\u4E00\u8F6E\uFF0C\u5728\u5269\u4F59\u7684\u94B1\u548C\u6570\u91CF\u4E2D\u968F\u673A\uFF0C\u51CF\u94B1\u51CF\u6570\u91CF\uFF0C\u6240\u6709\u968F\u673A\u91D1\u989D\u5B58\u5165\u6570\u7EC4\uFF0C\u6700\u540E\u5269\u4F59\u94B1\u4E0D\u968F\u673A\u76F4\u63A5\u653E\u5165\u3002</span>
<span class="token comment">// \u516C\u5F0F\uFF1A \u6BCF\u6B21\u62A2\u5230\u91D1\u989D = \u968F\u673A\u533A\u95F4(0, M/N)\uFF1B\u3010M\uFF1A\u5269\u4F59\u91D1\u989D\uFF0CN\uFF1A\u5269\u4F59\u7EA2\u5305\u4E2A\u6570\u3011</span>
<span class="token keyword">const</span> <span class="token function-variable function">divide</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">money<span class="token punctuation">,</span> count</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> leftMoney <span class="token operator">=</span> money<span class="token punctuation">;</span>
  <span class="token keyword">let</span> leftCount <span class="token operator">=</span> count<span class="token punctuation">;</span>
  <span class="token keyword">const</span> packetArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentMoney <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> leftMoney<span class="token punctuation">)</span> <span class="token operator">/</span> leftCount <span class="token operator">+</span> <span class="token number">0.01</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    packetArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>currentMoney<span class="token punctuation">)</span><span class="token punctuation">;</span>
    leftMoney <span class="token operator">-=</span> currentMoney<span class="token punctuation">;</span>
    leftCount<span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  packetArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">parseFloat</span><span class="token punctuation">(</span>leftMoney<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> packetArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
  <span class="token string">&quot;divide&quot;</span><span class="token punctuation">,</span>
  <span class="token function">divide</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">divide</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">Number</span><span class="token punctuation">(</span>pre<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u722C\u697C\u68AF" tabindex="-1"><a class="header-anchor" href="#\u722C\u697C\u68AF" aria-hidden="true">#</a> <strong>\u722C\u697C\u68AF</strong></h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u722C\u697C\u68AF\uFF1A\u5FAA\u73AF\u4E00\u8F6E\uFF0C\u7B2C\u4E09\u9879\u7B49\u524D\u4E24\u9879\u4E4B\u548C</span>
<span class="token keyword">const</span> <span class="token function-variable function">climbStairs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    q <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  r <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p <span class="token operator">=</span> q<span class="token punctuation">;</span>
    q <span class="token operator">=</span> r<span class="token punctuation">;</span>
    r <span class="token operator">=</span> p <span class="token operator">+</span> q<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> r<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">climbStairs</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div>`,14),c=[o];function e(u,i){return s(),a("div",null,c)}var r=n(t,[["render",e],["__file","algorithmic-topics.html.vue"]]);export{r as default};