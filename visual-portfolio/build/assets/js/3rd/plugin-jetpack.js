(()=>{"use strict";var e={n:o=>{var n=o&&o.__esModule?()=>o.default:()=>o;return e.d(n,{a:n}),n},d:(o,n)=>{for(var t in n)e.o(n,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:n[t]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)};const o=window.jQuery;var n=e.n(o);let t;try{t=new Event("jetpack-lazy-images-load",{bubbles:!0,cancelable:!0})}catch(e){t=document.createEvent("Event"),t.initEvent("jetpack-lazy-images-load",!0,!0)}n()(document).on("loadedNewItems.vpf",(function(e){"vpf"===e.namespace&&n()("body").get(0).dispatchEvent(t)}));const a=function(e,o,n){var t,a=n||{},i=a.noTrailing,c=void 0!==i&&i,d=a.noLeading,r=void 0!==d&&d,v=a.debounceMode,l=void 0===v?void 0:v,u=!1,s=0;function p(){t&&clearTimeout(t)}function f(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];var d=this,v=Date.now()-s;function f(){s=Date.now(),o.apply(d,a)}function m(){t=void 0}u||(r||!l||t||f(),p(),void 0===l&&v>e?r?(s=Date.now(),c||(t=setTimeout(l?m:f,e))):f():!0!==c&&(t=setTimeout(l?m:f,void 0===l?e-v:e)))}return f.cancel=function(e){var o=(e||{}).upcomingOnly,n=void 0!==o&&o;p(),u=!n},f}(200,(e=>{e.vpf("imagesLoaded")}),{debounceMode:!1!==(void 0!==(i={}.atBegin)&&i)});var i;n()(document.body).on("jetpack-lazy-loaded-image",".vp-portfolio",(function(){const e=n()(this).closest(".vp-portfolio");e&&e.length&&a(e)}))})();