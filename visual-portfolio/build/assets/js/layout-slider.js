(()=>{"use strict";var t={1929:t=>{t.exports=function(t){return"number"==typeof t?t-t==0:"string"==typeof t&&""!==t.trim()&&(Number.isFinite?Number.isFinite(+t):isFinite(+t))}}},o={};function i(e){var r=o[e];if(void 0!==r)return r.exports;var n=o[e]={exports:{}};return t[e](n,n.exports,i),n.exports}i.n=t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return i.d(o,{a:o}),o},i.d=(t,o)=>{for(var e in o)i.o(o,e)&&!i.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})},i.o=(t,o)=>Object.prototype.hasOwnProperty.call(t,o),(()=>{var t=i(1929),o=i.n(t);const e=window.jQuery;var r=i.n(e);const{ResizeObserver:n}=window,p=new n(function(t,o,i){var e,r=i||{},n=r.noTrailing,p=void 0!==n&&n,s=r.noLeading,a=void 0!==s&&s,l=r.debounceMode,d=void 0===l?void 0:l,u=!1,m=0;function f(){e&&clearTimeout(e)}function v(){for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];var s=this,l=Date.now()-m;function v(){m=Date.now(),o.apply(s,r)}function h(){e=void 0}u||(a||!d||e||v(),f(),void 0===d&&l>t?a?(m=Date.now(),p||(e=setTimeout(d?h:v,t))):v():!0!==p&&(e=setTimeout(d?h:v,void 0===d?t-l:t)))}return v.cancel=function(t){var o=(t||{}).upcomingOnly,i=void 0!==o&&o;f(),u=!i},v}(100,(t=>{t.forEach((({target:t})=>{if(t&&t.vpf){const o=t.vpf,i=o.$item.width()*parseFloat(o.options.sliderItemsHeight)/100;t.querySelector(".vp-portfolio__items-wrap").style.setProperty("--vp-layout-slider--auto-items__height",`${i}px`)}}))})));r()(document).on("initLayout.vpf",((t,i)=>{"vpf"===t.namespace&&"slider"===i.options.layout&&(["items","thumbnails"].forEach((t=>{let e="items"===t?i.options.sliderItemsHeight:i.options.sliderThumbnailsHeight;if("auto"===e)return;const r=t.replace(/s$/g,"");let n="items"===t?i.options.sliderItemsMinHeight:0;if(e=o()(e)?`${e}px`:e,n&&i.isPreview()&&/vh/.test(n)&&(n=0),"auto"===("items"===t?i.options.sliderSlidesPerView:i.options.sliderThumbnailsPerView)){let o="auto";"items"===t&&"fade"===i.options.sliderEffect&&(o="100%"),e.indexOf("%")===e.length-1?p.observe(i.$item[0]):i.addStyle(`.vp-portfolio__${t}-wrap`,{"--vp-layout-slider--auto-items__height":e}),i.addStyle(`.vp-portfolio__${r}-wrap`,{width:"auto"}),i.addStyle(`.vp-portfolio__${r} .vp-portfolio__${r}-img img`,{width:o,height:"var(--vp-layout-slider--auto-items__height)"}),n&&i.addStyle(`.vp-portfolio__${r} .vp-portfolio__${r}-img img`,{"min-height":n})}else i.addStyle(`.vp-portfolio__${r}-img-wrap::before`,{"padding-top":e}),i.addStyle(`.vp-portfolio__${r}-img img`,{position:"absolute",top:0,right:0,bottom:0,left:0}),i.addStyle(`.vp-portfolio__${r}-img`,{position:"absolute",top:0,right:0,bottom:0,left:0}),i.addStyle(`.vp-portfolio__${r} .vp-portfolio__${r}-img img`,{width:"100%",height:"100%"}),n&&i.addStyle(`.vp-portfolio__${r}-img-wrap::before`,{"min-height":n})})),i.options.sliderThumbnailsGap&&i.addStyle(".vp-portfolio__thumbnails-wrap",{"margin-top":`${i.options.sliderThumbnailsGap}px`}))}))})()})();