!function(t){var e={};function n(o){if(e[o])return e[o].exports;var c=e[o]={i:o,l:!1,exports:{}};return t[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(o,c,function(e){return t[e]}.bind(null,c));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(){const t=document.querySelectorAll(".goods .card"),e=document.getElementById("discount-checkbox"),n=document.getElementById("min"),o=document.getElementById("max"),c=document.querySelector(".search-wrapper_input"),r=document.querySelector(".search-btn"),l=document.querySelector(".goods"),a=document.querySelector(".catalog-list li.active");function d(){t.forEach(t=>{const e=t.querySelector(".card-price"),c=parseFloat(e.textContent);n.value&&c<n.value||o.value&&c>o.value?t.parentNode.remove():l.appendChild(t.parentNode)})}e.addEventListener("click",()=>{t.forEach(t=>{e.checked?t.querySelector(".card-sale")||t.parentNode.remove():(l.appendChild(t.parentNode),d())})}),n.addEventListener("change",d),o.addEventListener("change",d);const s=document.querySelector(".catalog-list").querySelectorAll("li");r.addEventListener("click",()=>{const e=new RegExp(c.value.trim(),"i");t.forEach(t=>{const n=t.querySelector(".card-title");e.test(n.textContent)?a&&(t.parentNode.style.display=""):t.parentNode.style.display="none"}),c.value="",s.forEach(t=>{t.classList.remove("active")})})}n.r(e),function(){const t=document.querySelector(".goods");return fetch("http://git.lekua.in.ua/o-ozon/db/db.json").then(t=>{if(t.ok)return t.json();throw new Error("Данные не были получены. Ошибка: "+t.status)}).then(t=>t).catch(e=>{console.warn(e),t.innerHTML='<div style ="color: red; font-size: 30px"> Упс что-то пошло не так </div>'})}().then(t=>{!function(t){const e=document.querySelector(".goods");t.goods.forEach(t=>{const n=document.createElement("div");n.className="col-12 col-md-6 col-lg-4 col-xl-3",n.innerHTML=`\n                                <div class="card" data-category="${t.category}">\n                                ${t.sale?'<div class="card-sale">🔥Hot Sale🔥</div>':""}\n\t\t\t\t\t\t\t\t\t<div class="card-img-wrapper">\n\t\t\t\t\t\t\t\t\t\t<span class="card-img-top"\n\t\t\t\t\t\t\t\t\t\t\tstyle="background-image: url('${t.img}')"></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="card-body justify-content-between">\n\t\t\t\t\t\t\t\t\t\t<div class="card-price" style="${t.sale?"color:red":""}">${t.price} ₽</div>\n\t\t\t\t\t\t\t\t\t\t<h5 class="card-title">${t.title}</h5>\n\t\t\t\t\t\t\t\t\t\t<button class="btn btn-primary">В корзину</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n        `,e.appendChild(n)})}(t),function(){const t=document.querySelectorAll(".goods .card"),e=new Set,n=document.querySelector(".catalog-button"),c=document.querySelector(".catalog"),r=document.querySelector(".catalog-list");t.forEach(t=>{e.add(t.dataset.category)}),e.forEach(t=>{const e=document.createElement("li");e.textContent=t,r.appendChild(e)});const l=r.querySelectorAll("li");n.addEventListener("click",e=>{c.style.display?c.style.display="":c.style.display="block","LI"===e.target.tagName&&(t.forEach(t=>{t.dataset.category!==e.target.textContent?t.parentNode.style.display="none":t.parentNode.style.display=""}),l.forEach(t=>{t===e.target?t.classList.add("active"):t.classList.remove("active")}),o())})}(),o(),function(){const t=document.querySelectorAll(".goods .card"),e=document.querySelector(".cart-wrapper"),n=document.getElementById("cart-empty");function o(){const t=e.querySelectorAll(".card");document.querySelector(".counter").textContent=t.length;const o=e.querySelectorAll(".card-price"),c=document.querySelector(".cart-total span");let r=0;o.forEach(t=>{let e=parseFloat(t.textContent);r+=e}),c.textContent=r,0!==t.length?n.remove():e.appendChild(n)}t.forEach(t=>{t.querySelector("button").addEventListener("click",()=>{const n=t.cloneNode(!0);e.appendChild(n),o();const c=n.querySelector(".btn");c.textContent="Убрать из корзины",c.addEventListener("click",()=>{n.remove(),o()})})})}(),function(){const t=document.getElementById("cart"),e=document.querySelector(".cart"),n=document.querySelector(".cart-close");t.addEventListener("click",function(){e.style.display="flex",document.body.style.overflow="hidden"}),n.addEventListener("click",function(){e.style.display="",document.body.style.overflow=""})}(),document.querySelectorAll("#discount-checkbox").forEach(t=>{t.addEventListener("change",function(){this.checked?this.nextElementSibling.classList.add("checked"):this.nextElementSibling.classList.remove("checked")})})})}]);