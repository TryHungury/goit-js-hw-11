(function n(e,t,o){function r(a,c){if(!t[a]){if(!e[a]){var s=void 0;if(!c&&s)return s(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=t[a]={exports:{}};e[a][0].call(u.exports,(function(n){return r(e[a][1][n]||n)}),u,u.exports,n,e,t,o)}return t[a].exports}for(var i=void 0,a=0;a<o.length;a++)r(o[a]);return r})({1:[function(n,e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var o=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");return t.innerHTML=n.trim(),!0===e?t.children:t.firstChild},r=function(n,e){var t=n.children;return 1===t.length&&t[0].tagName===e},i=function(n){return null!=(n=n||document.querySelector(".basicLightbox"))&&!0===n.ownerDocument.body.contains(n)};t.visible=i,t.create=function(n,e){var t=function(n,e){var t=o('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=t.querySelector(".basicLightbox__placeholder");n.forEach((function(n){return i.appendChild(n)}));var a=r(i,"IMG"),c=r(i,"VIDEO"),s=r(i,"IFRAME");return!0===a&&t.classList.add("basicLightbox--img"),!0===c&&t.classList.add("basicLightbox--video"),!0===s&&t.classList.add("basicLightbox--iframe"),t}(n=function(n){var e="string"==typeof n,t=n instanceof HTMLElement==1;if(!1===e&&!1===t)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(o(n,!0)):"TEMPLATE"===n.tagName?[n.content.cloneNode(!0)]:Array.from(n.children)}(n),e=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(n=Object.assign({},n)).closable&&(n.closable=!0),null==n.className&&(n.className=""),null==n.onShow&&(n.onShow=function(){}),null==n.onClose&&(n.onClose=function(){}),"boolean"!=typeof n.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof n.className)throw new Error("Property `className` must be a string");if("function"!=typeof n.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof n.onClose)throw new Error("Property `onClose` must be a function");return n}(e)),a=function(n){return!1!==e.onClose(c)&&function(n,e){return n.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(n)||n.parentElement.removeChild(n),e()}),410),!0}(t,(function(){if("function"==typeof n)return n(c)}))};!0===e.closable&&t.addEventListener("click",(function(n){n.target===t&&a()}));var c={element:function(){return t},visible:function(){return i(t)},show:function(n){return!1!==e.onShow(c)&&function(n,e){return document.body.appendChild(n),setTimeout((function(){requestAnimationFrame((function(){return n.classList.add("basicLightbox--visible"),e()}))}),10),!0}(t,(function(){if("function"==typeof n)return n(c)}))},close:a};return c}},{}]},{},[1])(1).create('\n    <img src="assets/images/image.png" width="800" height="600" alt="Котик">\n').show();
//# sourceMappingURL=index.68557d72.js.map
