(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{7823:function(e,t,n){Promise.resolve().then(n.bind(n,7867)),Promise.resolve().then(n.bind(n,1085)),Promise.resolve().then(n.bind(n,575)),Promise.resolve().then(n.bind(n,7659)),Promise.resolve().then(n.bind(n,6066)),Promise.resolve().then(n.bind(n,4766)),Promise.resolve().then(n.bind(n,5312)),Promise.resolve().then(n.bind(n,5472)),Promise.resolve().then(n.bind(n,124)),Promise.resolve().then(n.bind(n,2477)),Promise.resolve().then(n.bind(n,2092)),Promise.resolve().then(n.bind(n,6709)),Promise.resolve().then(n.bind(n,4330)),Promise.resolve().then(n.bind(n,6356)),Promise.resolve().then(n.bind(n,8829)),Promise.resolve().then(n.bind(n,1e3)),Promise.resolve().then(n.bind(n,6749)),Promise.resolve().then(n.bind(n,3404)),Promise.resolve().then(n.bind(n,2258)),Promise.resolve().then(n.bind(n,1162)),Promise.resolve().then(n.bind(n,911)),Promise.resolve().then(n.bind(n,5094)),Promise.resolve().then(n.bind(n,9316)),Promise.resolve().then(n.bind(n,1177)),Promise.resolve().then(n.bind(n,7868)),Promise.resolve().then(n.bind(n,3580)),Promise.resolve().then(n.bind(n,404)),Promise.resolve().then(n.bind(n,5022)),Promise.resolve().then(n.bind(n,9678)),Promise.resolve().then(n.bind(n,5234)),Promise.resolve().then(n.bind(n,3500)),Promise.resolve().then(n.bind(n,9670)),Promise.resolve().then(n.bind(n,6204)),Promise.resolve().then(n.bind(n,435)),Promise.resolve().then(n.bind(n,4630)),Promise.resolve().then(n.bind(n,7330)),Promise.resolve().then(n.bind(n,5731)),Promise.resolve().then(n.bind(n,8780)),Promise.resolve().then(n.bind(n,1467)),Promise.resolve().then(n.bind(n,9511)),Promise.resolve().then(n.bind(n,1908)),Promise.resolve().then(n.bind(n,5995)),Promise.resolve().then(n.bind(n,6983)),Promise.resolve().then(n.bind(n,8651)),Promise.resolve().then(n.bind(n,6948)),Promise.resolve().then(n.bind(n,2060)),Promise.resolve().then(n.bind(n,6694)),Promise.resolve().then(n.bind(n,9909)),Promise.resolve().then(n.bind(n,197)),Promise.resolve().then(n.bind(n,3714)),Promise.resolve().then(n.bind(n,6537)),Promise.resolve().then(n.bind(n,2796)),Promise.resolve().then(n.bind(n,2468))},1360:function(e,t,n){"use strict";function r(e,t){var n=t&&t.cache?t.cache:s,r=t&&t.serializer?t.serializer:a;return(t&&t.strategy?t.strategy:function(e,t){var n,r,a=1===e.length?o:i;return n=t.cache.create(),r=t.serializer,a.bind(this,e,n,r)})(e,{cache:n,serializer:r})}function o(e,t,n,r){var o=null==r||"number"==typeof r||"boolean"==typeof r?r:n(r),i=t.get(o);return void 0===i&&(i=e.call(this,r),t.set(o,i)),i}function i(e,t,n){var r=Array.prototype.slice.call(arguments,3),o=n(r),i=t.get(o);return void 0===i&&(i=e.apply(this,r),t.set(o,i)),i}n.r(t),n.d(t,{memoize:function(){return r},strategies:function(){return c}});var a=function(){return JSON.stringify(arguments)},l=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(e){return this.cache[e]},e.prototype.set=function(e,t){this.cache[e]=t},e}(),s={create:function(){return new l}},c={variadic:function(e,t){var n,r;return n=t.cache.create(),r=t.serializer,i.bind(this,e,n,r)},monadic:function(e,t){var n,r;return n=t.cache.create(),r=t.serializer,o.bind(this,e,n,r)}}},9988:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}n.d(t,{g:function(){return r}})},7867:function(e,t,n){"use strict";n.d(t,{default:function(){return s}});var r=n(9988),o=n(7648),i=n(9376),a=n(2265),l=n(8706),s=(0,a.forwardRef)(function(e,t){let{defaultLocale:n,href:s,locale:c,localeCookie:u,onClick:f,prefetch:d,unprefixed:h,...m}=e,v=(0,l.Z)(),p=null!=c&&c!==v,b=c||v,g=function(){let[e,t]=(0,a.useState)();return(0,a.useEffect)(()=>{t(window.location.host)},[]),e}(),P=g&&h&&(h.domains[g]===b||!Object.keys(h.domains).includes(g)&&v===n&&!c)?h.pathname:s,y=(0,i.usePathname)();return p&&(d&&console.error("The `prefetch` prop is currently not supported when using the `locale` prop on `Link` to switch the locale.`"),d=!1),a.createElement(o.default,(0,r.g)({ref:t,href:P,hrefLang:p?c:void 0,onClick:function(e){(function(e,t,n,r){if(!e||!(r!==n&&null!=r)||!t)return;let o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.pathname;return"/"===e?t:t.replace(e,"")}(t),{name:i,...a}=e;a.path||(a.path=""!==o?o:"/");let l="".concat(i,"=").concat(r,";");for(let[e,t]of Object.entries(a))l+="".concat("maxAge"===e?"max-age":e),"boolean"!=typeof t&&(l+="="+t),l+=";";document.cookie=l})(u,y,v,c),f&&f(e)},prefetch:d},m))})},1085:function(e,t,n){"use strict";n.d(t,{default:function(){return f}});var r=n(9988),o=n(9376),i=n(2265),a=n(8706);function l(e){return("object"==typeof e?null==e.host&&null==e.hostname:!/^[a-z]+:/i.test(e))&&!function(e){let t="object"==typeof e?e.pathname:e;return null!=t&&!t.startsWith("/")}(e)}function s(e,t){let n;return"string"==typeof e?n=c(t,e):(n={...e},e.pathname&&(n.pathname=c(t,e.pathname))),n}function c(e,t){let n=e;return/^\/(\?.*)?$/.test(t)&&(t=t.slice(1)),n+=t}n(257);var u=n(7867);let f=(0,i.forwardRef)(function(e,t){let{href:n,locale:c,localeCookie:f,localePrefixMode:d,prefix:h,...m}=e,v=(0,o.usePathname)(),p=(0,a.Z)(),b=c!==p,[g,P]=(0,i.useState)(()=>l(n)&&("never"!==d||b)?s(n,h):n);return(0,i.useEffect)(()=>{v&&P(function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;if(!l(e))return e;let i=r===o||r.startsWith("".concat(o,"/"));return(t!==n||i)&&null!=o?s(e,o):e}(n,c,p,v,h))},[p,n,c,v,h]),i.createElement(u.default,(0,r.g)({ref:t,href:g,locale:c,localeCookie:f},m))});f.displayName="ClientLink"},8706:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(9376),o=n(526);let i="locale";function a(){let e;let t=(0,r.useParams)();try{e=(0,o.useLocale)()}catch(n){if("string"!=typeof(null==t?void 0:t[i]))throw n;e=t[i]}return e}},575:function(e,t,n){"use strict";n.d(t,{default:function(){return a}});var r=n(9988),o=n(2265),i=n(9362);function a(e){let{locale:t,...n}=e;if(!t)throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl.dev/docs/configuration#locale");return o.createElement(i.IntlProvider,(0,r.g)({locale:t},n))}},9376:function(e,t,n){"use strict";n.r(t);var r=n(5475),o={};for(var i in r)"default"!==i&&(o[i]=(function(e){return r[e]}).bind(0,i));n.d(t,o)},257:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(4227)},4227:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var s=[],c=!1,u=-1;function f(){c&&r&&(c=!1,r.length?s=r.concat(s):u=-1,s.length&&d())}function d(){if(!c){var e=l(f);c=!0;for(var t=s.length;t;){for(r=s,s=[];++u<t;)r&&r[u].run();u=-1,t=s.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||c||l(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,r),a=!1}finally{a&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},3442:function(e,t,n){"use strict";let r=n(2265).createContext(void 0);t.IntlContext=r},9362:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2265),o=n(4563),i=n(3442);n(1360);var a=r&&r.__esModule?r:{default:r};t.IntlProvider=function(e){let{children:t,defaultTranslationValues:n,formats:l,getMessageFallback:s,locale:c,messages:u,now:f,onError:d,timeZone:h}=e,m=r.useMemo(()=>o.createCache(),[c]),v=r.useMemo(()=>o.createIntlFormatters(m),[m]),p=r.useMemo(()=>({...o.initializeConfig({locale:c,defaultTranslationValues:n,formats:l,getMessageFallback:s,messages:u,now:f,onError:d,timeZone:h}),formatters:v,cache:m}),[m,n,l,v,s,c,u,f,d,h]);return a.default.createElement(i.IntlContext.Provider,{value:p},t)}},6357:function(e,t,n){"use strict";var r=n(2265),o=n(3442);function i(){let e=r.useContext(o.IntlContext);if(!e)throw Error(void 0);return e}t.useIntlContext=i,t.useLocale=function(){return i().locale}},526:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6357);n(2265),n(3442),t.useLocale=r.useLocale},4563:function(e,t,n){"use strict";var r=n(1360);function o(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(".")}function i(e){return o(e.namespace,e.key)}function a(e){console.error(e)}function l(e,t){return r.memoize(e,{cache:{create:()=>({get:e=>t[e],set(e,n){t[e]=n}})},strategy:r.strategies.variadic})}function s(e,t){return l(function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return new e(...n)},t)}t.createCache=function(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}},t.createIntlFormatters=function(e){return{getDateTimeFormat:s(Intl.DateTimeFormat,e.dateTime),getNumberFormat:s(Intl.NumberFormat,e.number),getPluralRules:s(Intl.PluralRules,e.pluralRules),getRelativeTimeFormat:s(Intl.RelativeTimeFormat,e.relativeTime),getListFormat:s(Intl.ListFormat,e.list),getDisplayNames:s(Intl.DisplayNames,e.displayNames)}},t.defaultGetMessageFallback=i,t.defaultOnError=a,t.initializeConfig=function(e){let{getMessageFallback:t,messages:n,onError:r,...o}=e;return{...o,messages:n,onError:r||a,getMessageFallback:t||i}},t.joinPath=o,t.memoFn=l},7659:function(e,t,n){"use strict";n.d(t,{default:function(){return l}});var r=n(7437),o=n(7187),i=n(4725),a=n.n(i);function l(e){let{post:t,thumbnail:n}=e;return(0,r.jsx)(o.IW,{className:a().hover,style:{textDecoration:"none",margin:"0",height:"fit-content"},href:"/blog/".concat(t.slug),children:(0,r.jsxs)(o.kC,{position:"relative",mobileDirection:"column",fillWidth:!0,paddingY:"12",paddingX:"16",gap:"32",children:[t.metadata.image&&n&&(0,r.jsx)(o.kC,{maxWidth:20,fillWidth:!0,className:a().image,children:(0,r.jsx)(o.Fd,{priority:!0,sizes:"640px",style:{cursor:"pointer",border:"1px solid var(--neutral-alpha-weak)"},radius:"m",src:t.metadata.image,alt:"Thumbnail of "+t.metadata.title,aspectRatio:"16 / 9"})}),(0,r.jsxs)(o.kC,{position:"relative",fillWidth:!0,gap:"8",direction:"column",justifyContent:"center",children:[(0,r.jsx)(o.X6,{as:"h2",variant:"heading-strong-l",wrap:"balance",children:t.metadata.title}),(0,r.jsx)(o.xv,{variant:"label-default-s",onBackground:"neutral-weak",children:function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Date;e.includes("T")||(e="".concat(e,"T00:00:00"));let r=new Date(e),o=n.getFullYear()-r.getFullYear(),i=n.getMonth()-r.getMonth(),a=n.getDate()-r.getDate(),l="";l=o>0?"".concat(o,"y ago"):i>0?"".concat(i,"mo ago"):a>0?"".concat(a,"d ago"):"Today";let s=r.toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"});return t?"".concat(s," (").concat(l,")"):s}(t.metadata.publishedAt,!1)}),t.metadata.tag&&(0,r.jsx)(o.Vp,{className:"mt-8",label:t.metadata.tag,variant:"neutral"})]})]})},t.slug)}},4725:function(e){e.exports={hover:"Posts_hover__ngBEd"}}},function(e){e.O(0,[208,665,240,516,464,187,971,117,744],function(){return e(e.s=7823)}),_N_E=e.O()}]);