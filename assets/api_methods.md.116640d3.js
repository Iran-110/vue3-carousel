import{_ as e,c as a,o as s,N as l}from"./chunks/framework.b688ad8d.js";const y=JSON.parse('{"title":"Methods","description":"","frontmatter":{},"headers":[],"relativePath":"api/methods.md"}'),t={name:"api/methods.md"},o=l(`<h1 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h1><p>To use the API methods, add a reference to the carousel element and then call methods from that reference.</p><p>Example:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Carousel</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">myCarousel</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ... </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Carousel</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myCarousel </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Methods are available in this reference</span></span>
<span class="line"><span style="color:#A6ACCD;">myCarousel</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">myCarousel</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">updateSlideWidth</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><h2 id="slideto-index-number" tabindex="-1">slideTo(index: number) <a class="header-anchor" href="#slideto-index-number" aria-label="Permalink to &quot;slideTo(index: number)&quot;">​</a></h2><p>Slide to specific slide index</p><h2 id="next" tabindex="-1">next() <a class="header-anchor" href="#next" aria-label="Permalink to &quot;next()&quot;">​</a></h2><p>Slide to the next slide</p><h2 id="prev" tabindex="-1">prev() <a class="header-anchor" href="#prev" aria-label="Permalink to &quot;prev()&quot;">​</a></h2><p>Slide to the previous slide</p><h2 id="updateslidewidth" tabindex="-1">updateSlideWidth() <a class="header-anchor" href="#updateslidewidth" aria-label="Permalink to &quot;updateSlideWidth()&quot;">​</a></h2><p>Update <code>slideWidth</code> value based on <code>itemsToShow</code> and the current carousel width</p><h2 id="updatebreakpointsconfigs" tabindex="-1">updateBreakpointsConfigs() <a class="header-anchor" href="#updatebreakpointsconfigs" aria-label="Permalink to &quot;updateBreakpointsConfigs()&quot;">​</a></h2><p>Update the current carousel configs based on <code>breakpoints</code> settings and screen width</p><h2 id="updateslidesdata" tabindex="-1">updateSlidesData() <a class="header-anchor" href="#updateslidesdata" aria-label="Permalink to &quot;updateSlidesData()&quot;">​</a></h2><p>Update all the slide related date includes:</p><ul><li><code>currentSlideIndex</code></li><li><code>middleSlide</code></li><li><code>maxSlide</code></li><li><code>minSlide</code></li></ul><h2 id="initdefaultconfigs" tabindex="-1">initDefaultConfigs() <a class="header-anchor" href="#initdefaultconfigs" aria-label="Permalink to &quot;initDefaultConfigs()&quot;">​</a></h2><p>Init carousel default configurations</p><h2 id="restartcarousel" tabindex="-1">restartCarousel() <a class="header-anchor" href="#restartcarousel" aria-label="Permalink to &quot;restartCarousel()&quot;">​</a></h2><p>Restart the carousel settings and data, internally it calls:</p><ul><li><code>initDefaultConfigs</code></li><li><code>resetAutoplay</code></li><li><code>updateBreakpointsConfigs</code></li><li><code>updateSlidesData</code></li><li><code>updateSlideWidth</code></li></ul>`,23),n=[o];function p(i,r,d,c,h,u){return s(),a("div",null,n)}const C=e(t,[["render",p]]);export{y as __pageData,C as default};