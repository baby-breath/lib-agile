var j=Object.defineProperty;var I=(i,t,e)=>t in i?j(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var c=(i,t,e)=>(I(i,typeof t!="symbol"?t+"":t,e),e);import{i as $}from"./chunks/type.Cd6JyH-x.js";import{d as R,k as f,o as F,c as b,r as G,n as B,p as C,Q as q,a3 as O,h as D,y as Q,l as H,a4 as Y,m as r,J as y,a5 as J,w as k,F as U,G as X,a2 as T}from"./chunks/framework.B_s5zxe9.js";import{_ as L}from"./chunks/index.vue_vue_type_style_index_0_lang.B1tDqORJ.js";const K={name:"LAvGrid"},W=R({...K,props:{num:{type:Number},gutter:{type:[Number,Array]},align:{type:String}},setup(i){const t=i,e=f(()=>t.align&&{start:"align-start",center:"align-center",end:"align-end"}[t.align]||""),s=f(()=>{const o={};return t.num&&(o["grid-template-columns"]=`repeat(${t.num}, 1fr)`),t.gutter&&$(t.gutter)&&(o["grid-gap"]=t.gutter+"px"),o});return(o,n)=>(F(),b("div",{class:B(["lib-av-grid",[C(e)]]),style:q(C(s))},[G(o.$slots,"default")],6))}}),Z={theme:{type:String,default:"light"},color:{type:String,default:"#000000"},quickColorsDefault:{type:Array,default:()=>["#000000","#FFFFFF","#FF1900","#F47365","#FFB243","#FFE623","#6EFF2A","#1BC7B1","#00BEFF","#2E81FF","#5D61FF","#FF89CF","#FC3CAD","#BF3DCE","#8E00A7","rgba(0,0,0,0)"]}},A=(i,t,e,s,o,n)=>{const a=i==="l",l=t.createLinearGradient(0,0,a?e:0,a?0:s);l.addColorStop(.01,o),l.addColorStop(.99,n),t.fillStyle=l,t.fillRect(0,0,e,s)};function z({r:i,g:t,b:e},s){const o=a=>("0"+Number(a).toString(16)).slice(-2),n=`#${o(i)}${o(t)}${o(e)}`;return s?n.toUpperCase():n}function tt(i){i=i.slice(1);const t=e=>parseInt(e,16)||0;return{r:t(i.slice(0,2)),g:t(i.slice(2,4)),b:t(i.slice(4,6))}}function P(i){return typeof i=="string"?(i=(/rgba?\((.*?)\)/.exec(i)||["","0,0,0,1"])[1].split(","),{r:Number(i[0])||0,g:Number(i[1])||0,b:Number(i[2])||0,a:Number(i[3]?i[3]:1)}):i}function et({r:i,g:t,b:e}){i=i/255,t=t/255,e=e/255;const s=Math.max(i,t,e),o=Math.min(i,t,e),n=s-o;let a=0;s===o?a=0:s===i?t>=e?a=60*(t-e)/n:a=60*(t-e)/n+360:s===t?a=60*(e-i)/n+120:s===e&&(a=60*(i-t)/n+240),a=Math.floor(a);const l=parseFloat((s===0?0:1-o/s).toFixed(2)),d=parseFloat(s.toFixed(2));return{h:a,s:l,v:d}}function st(i){let t={r:0,g:0,b:0,a:1};/#/.test(i)?t=tt(i):/rgb/.test(i)?t=P(i):typeof i=="string"?t=P(`rgba(${i})`):Object.prototype.toString.call(i)==="[object Object]"&&(t=i);const{r:e,g:s,b:o,a:n}=t,{h:a,s:l,v:d}=et(t);return{r:e,g:s,b:o,a:n===void 0?1:n,h:a,s:l,v:d}}function it(i){const t=document.createElement("canvas"),e=t.getContext("2d"),s=i*2;return t.width=s,t.height=s,e.fillStyle="#ffffff",e.fillRect(0,0,s,s),e.fillStyle="#ccd5db",e.fillRect(0,0,i,i),e.fillRect(i,i,i,i),t}class ot{constructor(t){c(this,"el");c(this,"ctx");c(this,"width",152);c(this,"height",152);c(this,"onChange");const e=t.querySelector("canvas");this.ctx=e==null?void 0:e.getContext("2d"),this.el=t,this.el.addEventListener("mousedown",s=>{this.onMouseDown(s)})}load(t,e){this.ctx.fillStyle=t,this.ctx.fillRect(0,0,this.width,this.height),A("l",this.ctx,this.width,this.height,"#FFFFFF","rgba(255,255,255,0)"),A("p",this.ctx,this.width,this.height,"rgba(0,0,0,0)","#000000"),this.renderSlide(e.s*this.width-5,(1-e.v)*this.height-5)}unload(){this.el.removeEventListener("mousedown",this.onMouseDown)}renderSlide(t,e){const s=this.el.querySelector(".slide");s.style.left=t+"px",s.style.top=e+"px"}onMouseDown(t){const{top:e,left:s}=this.el.getBoundingClientRect(),o=a=>{let l=a.clientX-s,d=a.clientY-e;l<0&&(l=0),d<0&&(d=0),l>this.width&&(l=this.width),d>this.height&&(d=this.height),this.renderSlide(l-5,d-5);const _=this.ctx.getImageData(Math.min(l,this.width-1),Math.min(d,this.height-1),1,1),[E,x,u]=_.data;this.onChange&&this.onChange({r:E,g:x,b:u})};o(t);const n=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",n)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",n)}}class at{constructor(t){c(this,"el");c(this,"ctx");c(this,"width",16);c(this,"height",152);c(this,"onChange");const e=t.querySelector("canvas");this.ctx=e==null?void 0:e.getContext("2d"),this.el=t,this.el.addEventListener("mousedown",s=>{this.onMouseDown(s)})}load(t){const e=this.ctx.createLinearGradient(0,0,0,this.height);e.addColorStop(0,"#FF0000"),e.addColorStop(.17*1,"#FF00FF"),e.addColorStop(.17*2,"#0000FF"),e.addColorStop(.17*3,"#00FFFF"),e.addColorStop(.17*4,"#00FF00"),e.addColorStop(.17*5,"#FFFF00"),e.addColorStop(1,"#FF0000"),this.ctx.fillStyle=e,this.ctx.fillRect(0,0,this.width,this.height),this.renderSlide((1-t.h/360)*this.height-2)}unload(){this.el.removeEventListener("mousedown",this.onMouseDown)}renderSlide(t){const e=this.el.querySelector(".slide");e.style.top=t+"px"}onMouseDown(t){const{top:e}=this.el.getBoundingClientRect(),s=n=>{let a=n.clientY-e;a<0&&(a=0),a>this.height&&(a=this.height),this.renderSlide(a-2);const l=this.ctx.getImageData(0,Math.min(a,this.height-1),1,1),[d,_,E]=l.data;this.onChange&&this.onChange({r:d,g:_,b:E})};s(t);const o=()=>{document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",o)}}class nt{constructor(t){c(this,"el");c(this,"ctx");c(this,"width",16);c(this,"height",152);c(this,"onChange");const e=t.querySelector("canvas");this.ctx=e==null?void 0:e.getContext("2d"),this.el=t,this.el.addEventListener("mousedown",s=>{this.onMouseDown(s)})}load(t,e){const s=it(5);this.ctx.fillStyle=this.ctx.createPattern(s,"repeat"),this.ctx.fillRect(0,0,this.width,this.height),A("p",this.ctx,this.width,this.height,"rgba(255,255,255,0)",t),this.renderSlide(e*this.height-2)}unload(){this.el.removeEventListener("mousedown",this.onMouseDown)}renderSlide(t){const e=this.el.querySelector(".slide");e.style.top=t+"px"}onMouseDown(t){const{top:e}=this.el.getBoundingClientRect(),s=n=>{let a=n.clientY-e;a<0&&(a=0),a>this.height&&(a=this.height);const l=parseFloat((a/this.height).toFixed(2));this.renderSlide(l*this.height-2),this.onChange&&this.onChange(l)};s(t);const o=()=>{document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",o)}}const lt={class:"color-set-area"},rt=r("canvas",{width:"152",height:"152"},null,-1),ht=r("div",{class:"slide"},null,-1),ct=[rt,ht],dt=r("canvas",{width:"16",height:"152"},null,-1),ut=r("div",{class:"slide"},null,-1),pt=[dt,ut],gt=r("canvas",{width:"16",height:"152"},null,-1),mt=r("div",{class:"slide"},null,-1),vt=[gt,mt],kt={class:"show-box transparent-bg"},ft=r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-12 -12 48 48"},[r("path",{d:"M13.1,8.2l5.6,5.6c0.4,0.4,0.5,1.1,0.1,1.5s-1.1,0.5-1.5,0.1c0,0-0.1,0-0.1-0.1l-1.4-1.4l-7.7,7.7C7.9,21.9,7.6,22,7.3,22H3.1C2.5,22,2,21.5,2,20.9l0,0v-4.2c0-0.3,0.1-0.6,0.3-0.8l5.8-5.8C8.5,9.7,9.2,9.6,9.7,10s0.5,1.1,0.1,1.5c0,0,0,0.1-0.1,0.1l-5.5,5.5v2.7h2.7l7.4-7.4L8.7,6.8c-0.5-0.4-0.5-1-0.1-1.5s1.1-0.5,1.5-0.1c0,0,0.1,0,0.1,0.1l1.4,1.4l3.5-3.5c1.6-1.6,4.1-1.6,5.8-0.1c1.6,1.6,1.6,4.1,0.1,5.8L20.9,9l-3.6,3.6c-0.4,0.4-1.1,0.5-1.5,0.1"})],-1),_t=[ft],Et=r("div",{class:"name"},"HEX",-1),yt=["value"],Ft=r("div",{class:"name"},"rgba",-1),bt=["value"],Ct=["onClick"],xt={name:"LColorPicker"},St=R({...xt,props:Z,emits:["change","selectQuickColor"],setup(i,{emit:t}){const e=i,s=O({isPickColor:!!window.EyeDropper,colorMeta:{r:0,g:0,b:0,a:1,h:0,s:0,v:0}}),o=f(()=>({h:s.colorMeta.h,s:s.colorMeta.s,v:s.colorMeta.v})),n=f(()=>`rgb(${s.colorMeta.r}, ${s.colorMeta.g}, ${s.colorMeta.b})`),a=f(()=>`${s.colorMeta.r}, ${s.colorMeta.g}, ${s.colorMeta.b}, ${s.colorMeta.a}`),l=f(()=>`rgba(${a.value})`),d=f(()=>z({r:s.colorMeta.r,g:s.colorMeta.g,b:s.colorMeta.b},!0)),_=D(null),E=D(null),x=D(null);let u=null,g=null,m=null;const v=(h,p)=>{if($(h))s.colorMeta.a=h;else{const M=st(h);Object.assign(s.colorMeta,M)}u&&!p&&u.load(n.value,o.value),g&&!p&&g.load(o.value),m&&!p&&m.load(n.value,s.colorMeta.a)};v(e.color);const N=()=>{new EyeDropper().open().then(p=>{v(p.sRGBHex)}).catch(p=>{console.log(p)})};Q(()=>e.color,(h,p)=>{S.hex!==h&&S.rgba!==h&&v(e.color)});let S={};const w=()=>{S={rgba:l.value,hsv:o.value,hex:d.value},t("change",S)},V=h=>{v(h),w(),t("selectQuickColor",h)};return H(()=>{u=new ot(_.value),u.load(n.value,o.value),u.onChange=h=>{v(h,!0),w()},g=new at(E.value),g.load(o.value),g.onChange=h=>{v(h),w()},m=new nt(x.value),m.load(n.value,s.colorMeta.a),m.onChange=h=>{v(h,!0),w()}}),Y(()=>{u&&(u.unload(),u=null),g&&(g.unload(),g=null),m&&(m.unload(),m=null)}),(h,p)=>(F(),b("div",{class:B(["lib-color-picker",[e.theme]])},[r("div",lt,[r("div",{ref_key:"saturationRef",ref:_,class:"saturation"},ct,512),r("div",{ref_key:"hueRef",ref:E,class:"hue"},pt,512),r("div",{ref_key:"alphaRef",ref:x,class:"color-alpha"},vt,512)]),y(L,{class:"color-display"},J({default:k(()=>[r("div",kt,[r("div",{style:q({"background-color":C(l)})},null,4)])]),_:2},[s.isPickColor?{name:"end",fn:k(()=>[r("div",{class:"sucker",onClick:N},_t)]),key:"0"}:void 0]),1024),y(L,{class:"color-value"},{start:k(()=>[Et]),default:k(()=>[r("input",{value:C(d)},null,8,yt)]),_:1}),y(L,{class:"color-value"},{start:k(()=>[Ft]),default:k(()=>[r("input",{value:C(l)},null,8,bt)]),_:1}),y(W,{class:"color-quick-selection",num:8,gutter:10},{default:k(()=>[(F(!0),b(U,null,X(e.quickColorsDefault,M=>(F(),b("div",{class:"quick-item transparent-bg",onClick:Lt=>V(M)},[r("div",{style:q({"background-color":M})},null,4)],8,Ct))),256))]),_:1})],2))}}),wt=T(`<h1 id="颜色选择器" tabindex="-1">颜色选择器 <a class="header-anchor" href="#颜色选择器" aria-label="Permalink to &quot;颜色选择器&quot;">​</a></h1><p>颜色选择</p><h2 id="按需引入" tabindex="-1">按需引入 <a class="header-anchor" href="#按需引入" aria-label="Permalink to &quot;按需引入&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ColorPicker </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;lib-agile/es/components/colorPicker/index.vue.js&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;lib-agile/es/components/colorPicker/index.css&#39;</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2>`,5),Mt=T(`<details><summary>查看代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">colorPicker</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></details><h2 id="api" tabindex="-1">api <a class="header-anchor" href="#api" aria-label="Permalink to &quot;api&quot;">​</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>color</td><td>当前选中颜色</td><td>string</td><td>#000000</td></tr><tr><td>theme</td><td>主题 light 或 dark</td><td>string</td><td>light</td></tr><tr><td>quickColorsDefault</td><td>快捷颜色默认列表</td><td>Array</td><td>[&#39;#000000&#39;]</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>颜色变动后触发</td><td>function(colorValue)</td></tr><tr><td>selectQuickColor</td><td>选择快捷颜色后触发</td><td>function(color)</td></tr></tbody></table>`,6),Rt=JSON.parse('{"title":"颜色选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/vue/colorPicker.md","filePath":"components/vue/colorPicker.md"}'),Dt={name:"components/vue/colorPicker.md"},Bt=Object.assign(Dt,{setup(i){return(t,e)=>(F(),b("div",null,[wt,y(St),Mt]))}});export{Rt as __pageData,Bt as default};
