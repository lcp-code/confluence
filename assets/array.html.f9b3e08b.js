import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as c,c as l,a as n,b as e,w as i,e as u,d as s}from"./app.770c4fad.js";const r={},d=u(`<p>\u6570\u7EC4\u662F\u4E00\u79CD\u7C7B\u5217\u8868\u5BF9\u8C61\uFF0C\u5B83\u7684\u539F\u578B\u4E2D\u63D0\u4F9B\u4E86\u904D\u5386\u548C\u4FEE\u6539\u5143\u7D20\u7684\u76F8\u5173\u64CD\u4F5C\u3002JavaScript \u6570\u7EC4\u7684\u957F\u5EA6\u548C\u5143\u7D20\u7C7B\u578B\u90FD\u662F\u975E\u56FA\u5B9A\u7684\u3002\u56E0\u4E3A\u6570\u7EC4\u7684\u957F\u5EA6\u53EF\u968F\u65F6\u6539\u53D8\uFF0C\u5E76\u4E14\u5176\u6570\u636E\u5728\u5185\u5B58\u4E2D\u4E5F\u53EF\u4EE5\u4E0D\u8FDE\u7EED\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u7528\u5143\u7D20\u7684\u7D22\u5F15\uFF08index\uFF09\u6765\u83B7\u53D6\u6570\u7EC4\u7684\u9879\u3002\u6570\u7EC4\u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u6570\u7EC4\u5143\u7D20\u5217\u8868\u662F\u5206\u5F00\u5B58\u50A8\u7684\u3002</p><h3 id="\u5E38\u89C1\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u64CD\u4F5C" aria-hidden="true">#</a> <strong>\u5E38\u89C1\u64CD\u4F5C</strong></h3><h4 id="\u521B\u5EFA\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6570\u7EC4" aria-hidden="true">#</a> \u521B\u5EFA\u6570\u7EC4</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> people <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5C0F\u5F3A&#39;</span><span class="token punctuation">]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>people<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u901A\u8FC7\u7D22\u5F15\u8BBF\u95EE\u6570\u7EC4\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u7D22\u5F15\u8BBF\u95EE\u6570\u7EC4\u5143\u7D20" aria-hidden="true">#</a> \u901A\u8FC7\u7D22\u5F15\u8BBF\u95EE\u6570\u7EC4\u5143\u7D20</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> first <span class="token operator">=</span> people<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token comment">// \u5C0F\u660E</span>

<span class="token keyword">let</span> last <span class="token operator">=</span> people<span class="token punctuation">[</span>people<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token comment">// \u5C0F\u5F3A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u904D\u5386\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386\u6570\u7EC4" aria-hidden="true">#</a> \u904D\u5386\u6570\u7EC4</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>people<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u5C0F\u660E 0</span>
<span class="token comment">// \u5C0F\u5F3A 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6DFB\u52A0\u5143\u7D20\u5230\u6570\u7EC4\u7684\u672B\u5C3E" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u5143\u7D20\u5230\u6570\u7EC4\u7684\u672B\u5C3E" aria-hidden="true">#</a> \u6DFB\u52A0\u5143\u7D20\u5230\u6570\u7EC4\u7684\u672B\u5C3E</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> newLength <span class="token operator">=</span> people<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u5C0F&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// [&quot;\u5C0F\u660E&quot;, &quot;\u5C0F\u5F3A&quot;, &quot;\u5C0F\u5C0F&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5220\u9664\u6570\u7EC4\u672B\u5C3E\u7684\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6570\u7EC4\u672B\u5C3E\u7684\u5143\u7D20" aria-hidden="true">#</a> \u5220\u9664\u6570\u7EC4\u672B\u5C3E\u7684\u5143\u7D20</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> first <span class="token operator">=</span> people<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// [&quot;\u5C0F\u5F3A&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6DFB\u52A0\u5143\u7D20\u5230\u6570\u7EC4\u7684\u5934\u90E8" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u5143\u7D20\u5230\u6570\u7EC4\u7684\u5934\u90E8" aria-hidden="true">#</a> \u6DFB\u52A0\u5143\u7D20\u5230\u6570\u7EC4\u7684\u5934\u90E8</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> newLength <span class="token operator">=</span> people<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token string">&#39;\u7B11\u7B11&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// [&quot;\u7B11\u7B11&quot;, &quot;\u5C0F\u660E&quot;, &quot;\u5C0F\u5F3A&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u627E\u51FA\u67D0\u4E2A\u5143\u7D20\u5728\u6570\u7EC4\u4E2D\u7684\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u627E\u51FA\u67D0\u4E2A\u5143\u7D20\u5728\u6570\u7EC4\u4E2D\u7684\u7D22\u5F15" aria-hidden="true">#</a> \u627E\u51FA\u67D0\u4E2A\u5143\u7D20\u5728\u6570\u7EC4\u4E2D\u7684\u7D22\u5F15</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>people<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;\u7B11\u7B11&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// [&quot;\u5C0F\u660E&quot;, &quot;\u5C0F\u5F3A&quot;, &quot;\u7B11\u7B11&quot;]</span>

<span class="token keyword">let</span> pos <span class="token operator">=</span> people<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u5F3A&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u901A\u8FC7\u7D22\u5F15\u5220\u9664\u67D0\u4E2A\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u7D22\u5F15\u5220\u9664\u67D0\u4E2A\u5143\u7D20" aria-hidden="true">#</a> \u901A\u8FC7\u7D22\u5F15\u5220\u9664\u67D0\u4E2A\u5143\u7D20</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> removedItem <span class="token operator">=</span> people<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>pos<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">// [&quot;\u5C0F\u660E&quot;, &quot;\u5C0F\u5F3A&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4ECE\u4E00\u4E2A\u7D22\u5F15\u4F4D\u7F6E\u5220\u9664\u591A\u4E2A\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u4E00\u4E2A\u7D22\u5F15\u4F4D\u7F6E\u5220\u9664\u591A\u4E2A\u5143\u7D20" aria-hidden="true">#</a> \u4ECE\u4E00\u4E2A\u7D22\u5F15\u4F4D\u7F6E\u5220\u9664\u591A\u4E2A\u5143\u7D20</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> people <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5C0F\u5F3A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5C0F\u5C0F&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u7B11\u7B11&#39;</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>people<span class="token punctuation">)</span>
<span class="token comment">// [&quot;\u5C0F\u660E&quot;, &quot;\u5C0F\u5F3A&quot;, &quot;\u5C0F\u5C0F&quot;, &quot;\u7B11\u7B11&quot;]</span>

<span class="token keyword">let</span> pos <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">2</span>

<span class="token keyword">let</span> removedItems <span class="token operator">=</span> people<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>pos<span class="token punctuation">,</span> n<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>people<span class="token punctuation">)</span>
<span class="token comment">// [&quot;\u5C0F\u660E&quot;, &quot;\u7B11\u7B11&quot;] (\u539F\u6570\u7EC4\u88AB\u6539\u53D8)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>removedItems<span class="token punctuation">)</span>
<span class="token comment">// [&quot;\u5C0F\u5F3A&quot;, &quot;\u5C0F\u5C0F&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u590D\u5236\u4E00\u4E2A\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u590D\u5236\u4E00\u4E2A\u6570\u7EC4" aria-hidden="true">#</a> \u590D\u5236\u4E00\u4E2A\u6570\u7EC4</h4><p>\u53EA\u5BF9\u7B2C\u4E00\u5C42\u505A\u503C\u590D\u5236\uFF0C\u5176\u4ED6\u5C42\u82E5\u6709\u6570\u7EC4\u6216\u5BF9\u8C61\uFF0C\u53EA\u662F\u5F15\u7528\u590D\u5236</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> shallowCopy <span class="token operator">=</span> people<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// [&quot;\u5C0F\u660E&quot;, &quot;\u5C0F\u5F3A&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8BBF\u95EE\u6570\u7EC4\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u6570\u7EC4\u5143\u7D20" aria-hidden="true">#</a> \u8BBF\u95EE\u6570\u7EC4\u5143\u7D20</h4><p>JavaScript \u6570\u7EC4\u7684\u7D22\u5F15\u662F\u4ECE 0 \u5F00\u59CB\u7684\uFF0C\u7B2C\u4E00\u4E2A\u5143\u7D20\u7684\u7D22\u5F15\u4E3A 0\uFF0C\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u7684\u7D22\u5F15\u7B49\u4E8E\u8BE5\u6570\u7EC4\u7684 \u957F\u5EA6 \u51CF 1\u3002</p><p>\u5982\u679C\u6307\u5B9A\u7684\u7D22\u5F15\u662F\u4E00\u4E2A\u65E0\u6548\u503C\uFF0CJavaScript \u6570\u7EC4\u5E76\u4E0D\u4F1A\u62A5\u9519\uFF0C\u800C\u662F\u4F1A\u8FD4\u56DE undefined\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5C0F\u5F3A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5C0F\u5C0F&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>              <span class="token comment">// logs &#39;\u5C0F\u660E&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>              <span class="token comment">// logs &#39;\u5C0F\u5F3A&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// logs &#39;\u5C0F\u5C0F&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// logs undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6570\u7EC4\u7684\u6D45\u590D\u5236\u4E0E\u6DF1\u590D\u5236" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u7684\u6D45\u590D\u5236\u4E0E\u6DF1\u590D\u5236" aria-hidden="true">#</a> <strong>\u6570\u7EC4\u7684\u6D45\u590D\u5236\u4E0E\u6DF1\u590D\u5236</strong></h4><p>\u6570\u7EC4\u7684\u6D45\u590D\u5236\u662F\u5F15\u7528\u590D\u5236\uFF0C\u4FEE\u6539\u65F6\uFF0C\u65B0\u65E7\u6570\u7EC4\u90FD\u4F1A\u53D8\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6D45\u590D\u5236</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> newArr <span class="token operator">=</span> arr<span class="token punctuation">;</span>
newArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 12</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DF1\u590D\u5236\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\uFF0C\u662F\u503C\u590D\u5236\uFF0C\u4FEE\u6539\u6570\u636E\u65F6\uFF0C\u76F8\u4E92\u4E4B\u95F4\u4E0D\u5F71\u54CD\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6DF1\u590D\u5236</span>
<span class="token keyword">const</span> <span class="token function-variable function">copy</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr1<span class="token punctuation">,</span>arr2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr1<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    arr2<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> newAr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">copy</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>newArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
newArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 12</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5BF9\u8C61\u6570\u7EC4\u7ED3\u5408\u7684\u6DF1\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u6570\u7EC4\u7ED3\u5408\u7684\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a> <strong>\u5BF9\u8C61\u6570\u7EC4\u7ED3\u5408\u7684\u6DF1\u62F7\u8D1D</strong></h4>`,34),k=s("\u89C1"),v=s("\u6DF1\u62F7\u8D1DdeepClone\u8BE6\u89E3"),m=n("h3",{id:"\u6570\u7EC4\u7684\u7528\u9014",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6570\u7EC4\u7684\u7528\u9014","aria-hidden":"true"},"#"),s(),n("strong",null,"\u6570\u7EC4\u7684\u7528\u9014")],-1),b=n("p",null,"\u5B58\u50A8\u5217\u8868\u578B\u6570\u636E\uFF0C\u53EF\u4EE5\u662F\u5355\u7C7B\u578B\u6570\u7EC4\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5BF9\u8C61\u6570\u7EC4\u3002",-1),h=n("ul",null,[n("li",null,"\u53EF\u4EE5\u7528\u6765\u7BA1\u7406list\u6570\u636E"),n("li",null,"\u53EF\u4EE5\u501F\u52A9\u6570\u7EC4\u6765\u5B9E\u73B0\u961F\u5217\u3001\u6808\u7B49\u6570\u636E\u7ED3\u6784\u3002"),n("li",null,"\u53EF\u4EE5\u7528\u4E8C\u7EF4\u6570\u7EC4\u5B9E\u73B0excel\u6570\u636E\u5B58\u53D6\u3002"),n("li",null,"\u6570\u7EC4\u548C\u5BF9\u8C61\u7ED3\u5408\u5B9E\u73B0DSL\u6570\u636E\u7ED3\u6784\u3002")],-1),g=n("p",null,"\u53C2\u8003",-1),f={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"},q=s("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array");function j(x,_){const t=a("RouterLink"),p=a("ExternalLinkIcon");return c(),l("div",null,[d,n("p",null,[k,e(t,{to:"/zh/universal/data-structure/faq/deep-clone.html"},{default:i(()=>[v]),_:1})]),m,b,h,g,n("ul",null,[n("li",null,[n("a",f,[q,e(p)])])])])}var A=o(r,[["render",j],["__file","array.html.vue"]]);export{A as default};