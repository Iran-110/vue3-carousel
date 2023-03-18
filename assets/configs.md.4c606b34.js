import{_ as a,o,c as d,t as h,n as _,x as l,a as t,C as n,N as g,D as m}from"./chunks/framework.f2884a8b.js";const y={name:"Badge",props:{text:"",type:""}};function C(i,c,e,p,r,u){return o(),d("span",{class:_(["badge",e.type])},h(e.text),3)}const b=a(y,[["render",C],["__scopeId","data-v-5c8b1cba"]]),D={components:{Badge:b}},K=JSON.parse('{"title":"Configs","description":"","frontmatter":{},"headers":[],"relativePath":"configs.md"}'),A=l("h1",{id:"configs",tabindex:"-1"},[t("Configs "),l("a",{class:"header-anchor",href:"#configs","aria-label":'Permalink to "Configs"'},"​")],-1),f=l("h2",{id:"available-props",tabindex:"-1"},[t("Available Props "),l("a",{class:"header-anchor",href:"#available-props","aria-label":'Permalink to "Available Props"'},"​")],-1),v=l("thead",null,[l("tr",null,[l("th",null,"Prop"),l("th",null,"Default"),l("th",null,"Description")])],-1),F=l("tr",null,[l("td",null,[l("code",null,"itemsToShow")]),l("td",null,"1"),l("td",null,"count of items to showed per view (can be a fraction).")],-1),x=l("tr",null,[l("td",null,[l("code",null,"itemsToScroll")]),l("td",null,"1"),l("td",null,"number of slides to be scrolled")],-1),q=l("td",null,[l("s",null,[l("code",null,"currentSlide")])],-1),S=l("td",null,[l("s",null,"0")],-1),k=l("s",null,"index number of the initial slide.",-1),P=l("tr",null,[l("td",null,[l("code",null,"wrapAround")]),l("td",null,"false"),l("td",null,"enable infinite scrolling mode.")],-1),N=l("tr",null,[l("td",null,[l("code",null,"snapAlign")]),l("td",null,"'center'"),l("td",null,"controls the carousel position alignment, can be 'start', 'end', 'center[-odd|-even]'")],-1),T=l("tr",null,[l("td",null,[l("code",null,"transition")]),l("td",null,"300"),l("td",null,"sliding transition time in ms.")],-1),B=l("tr",null,[l("td",null,[l("code",null,"autoplay")]),l("td",null,"0"),l("td",null,"Auto play time in ms.")],-1),$=l("tr",null,[l("td",null,[l("code",null,"settings")]),l("td"),l("td",null,"an object to pass all settings.")],-1),V=l("tr",null,[l("td",null,[l("code",null,"breakpoints")]),l("td",null,"null"),l("td",null,"an object to pass all the breakpoints settings.")],-1),w=l("td",null,[l("code",null,"modelValue")],-1),E=l("td",null,"0",-1),I=l("td",null,[l("code",null,"mouseDrag")],-1),j=l("td",null,"true",-1),O=l("td",null,[l("code",null,"touchDrag")],-1),U=l("td",null,"true",-1),z=l("td",null,[l("code",null,"pauseAutoplayOnHover")],-1),H=l("td",null,"false",-1),J=l("td",null,[l("code",null,"dir")],-1),R=l("td",null,"ltr",-1),W=g(`<h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><h3 id="slides-default" tabindex="-1">Slides/Default <a class="header-anchor" href="#slides-default" aria-label="Permalink to &quot;Slides/Default&quot;">​</a></h3><p>Used to render the carousel items. You can use either the default slot or wrap element in <code>slides</code> slot.</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Carousel</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;template #slides&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Slide v-for=&quot;slide in 10&quot; :key=&quot;slide&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/Slide&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/template&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Carousel</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="addons" tabindex="-1">Addons <a class="header-anchor" href="#addons" aria-label="Permalink to &quot;Addons&quot;">​</a></h3><p>Used to add display carousel addons components.</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Carousel</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;template #addons&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Navigation /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Pagination /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/template&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Carousel</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="slots-attributes" tabindex="-1">Slots Attributes <a class="header-anchor" href="#slots-attributes" aria-label="Permalink to &quot;Slots Attributes&quot;">​</a></h3><table><thead><tr><th>Prop</th><th>Description</th></tr></thead><tbody><tr><td><code>slideWidth</code></td><td>the width of a single slide element.</td></tr><tr><td><code>currentSlide</code></td><td>index number of the current slide.</td></tr><tr><td><code>slidesCount</code></td><td>the count of all slides</td></tr></tbody></table><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Carousel</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;Slide v-for=&quot;slide in slides&quot; :key=&quot;slide&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;carousel__item&quot;&gt;{{ slide }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/Slide&gt;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  &lt;template #addons=&quot;{ slidesCount }&quot;&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    &lt;Navigation v-if=&quot;slidesCount &gt; 1&quot; /&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  &lt;/template&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Carousel</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,11);function Y(i,c,e,p,r,u){const s=m("Badge");return o(),d("div",null,[A,f,l("table",null,[v,l("tbody",null,[F,x,l("tr",null,[q,S,l("td",null,[k,t(),n(s,{text:"Deprecated 0.1.20",type:"danger"})])]),P,N,T,B,$,V,l("tr",null,[w,E,l("td",null,[t("index number of the initial slide. "),n(s,{text:"0.1.20"})])]),l("tr",null,[I,j,l("td",null,[t("toggle mouse dragging "),n(s,{text:"0.1.23"})])]),l("tr",null,[O,U,l("td",null,[t("toggle pointer touch dragging "),n(s,{text:"0.1.23"})])]),l("tr",null,[z,H,l("td",null,[t("toggle if auto play should pause on mouse hover "),n(s,{text:"0.1.25"})])]),l("tr",null,[J,R,l("td",null,[t("controls the carousel direction. Available values 'ltr', 'rtl' "),n(s,{text:"0.1.38"})])])])]),W])}const L=a(D,[["render",Y]]);export{K as __pageData,L as default};
