!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";var r=window.localStorage,a=function(){var e=JSON.parse(r.getItem("contacts")),n=document.querySelector("#contact-list");e?(n.innerHTML="",e.forEach((function(e){var t=document.createElement("div");t.innerHTML='\n  <div class="ui column">\n        <div class="ui card">\n            <div class="image"><img src="https://semantic-ui.com/images/avatar/large/daniel.jpg"></div>\n          <div class="content">\n            <a class="header">'+e.name+'</a>\n            <div class="meta">\n              <span class="date">Joined in 2013</span>\n            </div>\n            <div class="description">\n                <h2>'+e.company+"</h2>\n                <p>"+e.notes+"</p>\n                <p>"+e.email+' |\n                <a href="https://www.twitter.com/'+e.twitter+'">@'+e.twitter+'</a></p>\n            </div>\n          </div>\n          <div class="extra content">\n              <a>\n                <i class="user icon"></i>\n                22 Friends\n              </a>\n          </div>\n        </div>\n  </div>\n \n',n.appendChild(t)}))):n.innerHTML="<p>These are not the contacts you are looking for</p>"};document.addEventListener("DOMContentLoaded",(function(){a();var e=document.querySelector("#new-contact-form");e.addEventListener("submit",(function(n){n.preventDefault();var t=e.elements,o=t.name,i=t.email,c=t.phone,s=t.company,u=t.notes,l=t.twitter,d={id:Date.now(),name:o.value,email:i.value,phone:c.value,company:s.value,notes:u.value,twitter:l.value};console.log("Saving the following contact: "+JSON.stringify(d));var v=JSON.parse(r.getItem("contacts"))||[];v.push(d),r.setItem("contacts",JSON.stringify(v)),a(),e.reset()}))}))}]);