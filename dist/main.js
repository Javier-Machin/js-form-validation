!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){!function(){const e=document.getElementById("content"),t=document.createElement("form"),n=document.createElement("input"),r=document.createElement("input"),i=document.createElement("h3"),o=document.createElement("label"),a=document.createElement("input"),d=document.createElement("label"),l=document.createElement("input"),c=document.createElement("label"),u=document.createElement("input"),p=document.createElement("input");t.classList.add("to-do-form"),t.onsubmit=function(){alert("The form is valid, cheers")},n.type="text",n.name="name",n.placeholder="Enter name",n.pattern=".{3,30}",n.title="Must be between 3 and 30 characters long",n.required=!0,r.type="text",r.name="description",r.placeholder="Enter a short description",r.pattern=".{3,50}",r.title="Must be between 3 and 50 characters long",r.required=!0,i.innerHTML="Priority: ",o.innerHTML="Low",a.type="radio",a.name="priority",a.value="Low",a.classList.add("radio-btn"),d.innerHTML="Normal",l.type="radio",l.name="priority",l.value="Normal",l.checked=!0,l.classList.add("radio-btn"),c.innerHTML="High",u.type="radio",u.name="priority",u.value="High",u.classList.add("radio-btn"),p.type="submit",p.innerHTML="Create",p.classList.add("submit-form-btn"),t.appendChild(n),t.appendChild(r),t.appendChild(i),o.insertBefore(a,o.firstChild),t.appendChild(o),d.insertBefore(l,d.firstChild),t.appendChild(d),c.insertBefore(u,c.firstChild),t.appendChild(c),t.appendChild(p),e.appendChild(t)}()}]);