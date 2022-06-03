"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,v=u["".concat(d,".").concat(m)]||u[m]||l[m]||r;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={id:"devops-guide-start",title:"Self-Hosting Guide - Overview",sidebar_label:"Overview"},d=void 0,p={unversionedId:"devops-guide/devops-guide-start",id:"devops-guide/devops-guide-start",title:"Self-Hosting Guide - Overview",description:"Welcome to the Self-Hosting guide!",source:"@site/docs/devops-guide/devops-guide.md",sourceDirName:"devops-guide",slug:"/devops-guide/",permalink:"/handbook/docs/devops-guide/",editUrl:"https://github.com/jitsi/handbook/edit/master/docs/devops-guide/devops-guide.md",tags:[],version:"current",lastUpdatedAt:1654235675,formattedLastUpdatedAt:"6/3/2022",frontMatter:{id:"devops-guide-start",title:"Self-Hosting Guide - Overview",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"iOS SDK",permalink:"/handbook/docs/dev-guide/dev-guide-ios-sdk"},next:{title:"Requirements",permalink:"/handbook/docs/devops-guide/devops-guide-requirements"}},c={},l=[],u={toc:l};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to the Self-Hosting guide!"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"These guides help you to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"host your own Jitsi-Meet server")),".",(0,r.kt)("br",{parentName:"p"}),"\n","If you want to have a video conference without setting up any infrastructure, use ",(0,r.kt)("a",{parentName:"p",href:"https://meet.jit.si"},"https://meet.jit.si")," instead."))),(0,r.kt)("p",null,"The content is divided in 3 guides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/handbook/docs/devops-guide/devops-guide-quickstart"},"Debian/Ubuntu server guide"),": Describes the quick installation on Debian-based distributions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/handbook/docs/devops-guide/devops-guide-docker"},"Docker guide"),": Describes how to use the official Docker image of Jitsi-Meet.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/handbook/docs/devops-guide/devops-guide-manual"},"Manual installation guide"),": Describes the manual installation of all components (adaptable for other distributions)."))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"First, a bit of general advice")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Jitsi Meet being based on ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/WebRTC"},"WebRTC"),", an encrypted communication link (https) is ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"necessary"))," to get working multimedia, and the setup is not always trivial."),(0,r.kt)("p",{parentName:"div"},"The best option is an Internet server with a certificate for a domain registered in the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain_Name_System#Domain_name_registration"},"DNS"),"."),(0,r.kt)("p",{parentName:"div"},"While it's possible to setup a server on a private network and/or a self-signed certificate, it can be less straightforward and you can expect difficulties, first if you want access both from the private network and the public internet, and second when using phones as these clients often don't accept self-signed certificates."),(0,r.kt)("p",{parentName:"div"},"In case of trouble with clients using phones, ",(0,r.kt)("a",{parentName:"p",href:"https://whatsmychaincert.com"},"check your certificate"),"."))))}m.isMDXComponent=!0}}]);