(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(a,b){var c,d; /*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !function(){"use strict";var e={}.hasOwnProperty;function f(){for(var a=[],b=0;b<arguments.length;b++){var c=arguments[b];if(c){var d=typeof c;if("string"===d||"number"===d)a.push(c);else if(Array.isArray(c)){if(c.length){var g=f.apply(null,c);g&&a.push(g)}}else if("object"===d){if(c.toString===Object.prototype.toString)for(var h in c)e.call(c,h)&&c[h]&&a.push(h);else a.push(c.toString())}}}return a.join(" ")}a.exports?(f.default=f,a.exports=f):void 0!==(d=(function(){return f}).apply(b,c=[]))&&(a.exports=d)}()},5557:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(3678)}])},1309:function(a,b,c){"use strict";var d=c(5893),e=c(4184),f=c.n(e);c(7294);var g=function(a){var b=a.onClick,c=a.label,e=a.icon,g=a.color,h=a.block,i=a.className,j=a.disabled,k=a.selected,l=a.loading;return(0,d.jsx)("button",{className:f()("btn","normal-case","font-normal","".concat("primary"!=g||k?"":"btn-primary text-secondary"),"".concat("secondary"!=g||k?"":"btn-secondary text-white"),"".concat("accent"!=g||k?"":"btn-accent text-white"),"".concat("light"!=g||k?"":"bg-white border-white text-black"),"".concat(k?"btn-accent text-white":""),"rounded-[5px]","".concat(h?"btn-block":""),"".concat(j?"btn-disabled":""),"".concat(l?"loading":""),i),onClick:b,children:(0,d.jsxs)("div",{className:"flex gap-x-2 items-center",children:[e&&!k&&!l&&(0,d.jsx)("img",{src:e}),!k&&!l&&c,k&&!l&&(0,d.jsx)("img",{src:"/icons/ic_circle_done_white.svg"})]})})};b.Z=g},2548:function(a,b,c){"use strict";c.d(b,{o:function(){return e},n:function(){return g}});var d=c(5893);function e(a){var b=a.children;return(0,d.jsxs)("div",{className:"absolute -z-10 min-h-screen w-full bg-hero pb-[100px]",children:[(0,d.jsx)("img",{className:"fixed top-0 right-0 -z-10 mobile:w-[123px] mobile:h-[130px]",src:"/images/bg_1.svg"}),(0,d.jsx)("img",{className:"fixed bottom-0 left-0 -z-10 mobile:w-[123px] mobile:h-[130px]",src:"/images/bg_2.svg"}),(0,d.jsx)("img",{className:"absolute top-0 mobile:mx-auto mobile:right-0 mobile:left-0 mt-10 ml-14 -z-10",src:"/icons/fr_icon.svg"}),(0,d.jsx)("div",{className:"container mt-44 bg-transparent mx-auto pb-44",children:b})]})}var f=c(7485);function g(a){var b=a.children,c=a.error,e=a.success;return(0,d.jsxs)("div",{className:"absolute -z-10 min-h-screen w-full bg-white",children:[(0,d.jsx)("img",{className:"w-[252px] h-[265px] mobile:w-[123px] mobile:h-[130px] fixed top-0 right-0 -z-10 ",src:"/images/bg_1.svg"}),(0,d.jsx)("img",{className:"w-[252px] h-[265px] mobile:w-[123px] mobile:h-[130px] fixed bottom-0 left-0 -z-10",src:"/images/bg_2.svg"}),(0,d.jsx)("img",{className:"absolute top-0 mobile:mx-auto mobile:right-0 mobile:left-0 left-0 mt-10 ml-14 -z-10",src:"/icons/fr_icon.svg"}),(0,d.jsx)("div",{className:"container bg-transparent pt-40 mobile:pt-[130px] mx-auto pb-[100px]",children:b}),(0,d.jsx)(f.u4,{error:c,success:e})]})}},7485:function(a,b,c){"use strict";c.d(b,{bW:function(){return h},u4:function(){return i}});var d=c(5893),e=c(7294),f=c(4184),g=c.n(f),h=function(a){return{id:Math.random(),value:a}},i=function(a){var b=a.error,c=void 0===b?{id:0,value:""}:b,f=a.success,h=void 0===f?{id:0,value:""}:f,i=(0,e.useState)(""),j=i[0],k=i[1],l=(0,e.useState)(!1),m=l[0],n=l[1],o=(0,e.useState)(!1),p=o[0],q=o[1];return(0,e.useEffect)(function(){return k(c.value),q(!0),n(!1),setTimeout(function(){q(!1),n(!1),k("")},5e3),function(){clearTimeout()}},[c.id]),(0,e.useEffect)(function(){return k(h.value),n(!0),q(!1),setTimeout(function(){q(!1),n(!1),k("")},5e3),function(){clearTimeout()}},[h.id]),(0,d.jsx)(d.Fragment,{children:j&&(0,d.jsx)("div",{className:g()("fixed top-0 right-0 rounded-[5px] m-5 w-auto alert text-white",m?"alert-success":"",p?"alert-error":""),children:(0,d.jsxs)("div",{children:[m&&(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),p&&(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,d.jsx)("span",{children:j})]})})})}},3678:function(a,b,c){"use strict";c.r(b);var d=c(5893),e=c(9008),f=c.n(e),g=c(1163),h=c(2548),i=c(1309),j=c(2295),k=function(){var a=(0,g.useRouter)(),b=(0,j.Z)().isMobile;return(0,d.jsxs)(h.o,{children:[(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:"RunRide | Homepage"}),(0,d.jsx)("meta",{name:"description",content:"Run ride description"}),(0,d.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,d.jsxs)("div",{className:"flex justify-center flex-col mt-[250px]",children:[(0,d.jsx)(i.Z,{className:"w-[103px] !max-h-[37px] self-center mt-5 absolute top-0 right-0 mr-5",color:"light",icon:"/icons/ic_lock.svg",onClick:function(){a.push("login")},label:"Login"}),(0,d.jsxs)("span",{className:"fr-text-display-3 mobile:fr-text-display-2 mobile:px-[62px] text-center text-secondary self-center font-poppins font-extrabold",children:["PUPR ",b&&(0,d.jsx)("br",{}),"FUN RUN & RIDE"]}),(0,d.jsxs)("span",{className:"fr-text-title-1 self-center font-poppins mobile:mt-[7px] mobile:px-[48px] text-center",children:["Dalam memperingati"," ",(0,d.jsx)("span",{className:"text-black font-bold",children:"HUT RI 77"})]}),(0,d.jsx)(i.Z,{className:"w-[242px] h-[61px] self-center mt-[49px] mobile:mt-[40px]",color:"primary",onClick:function(){a.push("register/personal-information")},label:"Daftar Sekarang"})]})]})};b.default=k},2295:function(a,b,c){"use strict";var d=c(7294),e=c(1852);b.Z=function(){var a=(0,d.useState)(!1),b=a[0],c=a[1],f=(0,e.useMediaQuery)({maxWidth:"1023px"});return(0,d.useEffect)(function(){c(!0)},[]),{isMobile:!!b&&f}}},9008:function(a,b,c){a.exports=c(5443)},1163:function(a,b,c){a.exports=c(387)}},function(a){a.O(0,[852,774,888,179],function(){var b;return a(a.s=5557)}),_N_E=a.O()}])