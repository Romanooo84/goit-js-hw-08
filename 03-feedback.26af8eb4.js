function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,c=l||f||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var o,i,r,a,u,l,f=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,f=t,a=e.apply(r,n)}function S(e){return f=e,u=setTimeout(h,t),c?b(e):a}function j(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-f>=r}function h(){var e=v();if(j(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-l);return s?m(n,r-(e-f)):n}(e))}function w(e){return u=void 0,g&&o?b(e):(o=i=void 0,a)}function T(){var e=v(),n=j(e);if(o=arguments,i=this,l=e,n){if(void 0===u)return S(l);if(s)return u=setTimeout(h,t),b(l)}return void 0===u&&(u=setTimeout(h,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==u&&clearTimeout(u),f=0,o=l=i=u=void 0},T.flush=function(){return void 0===u?a:w(v())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};let b=document.querySelector("input[type='email']"),S=document.querySelector("textarea[name='message']");const j=document.querySelector("button[type='submit']");let h=localStorage.getItem("email"),w=localStorage.getItem("message");b.value=h,S.value=w;let T=e(t)((function(){const e=b.value,t=S.value;localStorage.setItem("email",e),localStorage.setItem("message",t)}),500);b.addEventListener("input",T),S.addEventListener("input",T),j.addEventListener("click",(function(){localStorage.removeItem("email"),localStorage.removeItem("message"),console.log("cleared")}));
//# sourceMappingURL=03-feedback.26af8eb4.js.map
