"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[758],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,b=u["".concat(l,".").concat(m)]||u[m]||s[m]||a;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5472:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>d,toc:()=>s});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],p={id:"mobile-dropbox",title:"Setting up Dropbox integration"},l=void 0,d={unversionedId:"dev-guide/mobile-dropbox",id:"dev-guide/mobile-dropbox",title:"Setting up Dropbox integration",description:"1. Create a Dropbox app.",source:"@site/../docs/dev-guide/mobile-dropbox.md",sourceDirName:"dev-guide",slug:"/dev-guide/mobile-dropbox",permalink:"/handbook/docs/dev-guide/mobile-dropbox",editUrl:"https://github.com/jitsi/handbook/edit/master/website/../docs/dev-guide/mobile-dropbox.md",tags:[],version:"current",lastUpdatedBy:"Sa\xfal Ibarra Corretg\xe9",lastUpdatedAt:1647003221,formattedLastUpdatedAt:"3/11/2022",frontMatter:{id:"mobile-dropbox",title:"Setting up Dropbox integration"}},c={},s=[],u={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a Dropbox app."),(0,a.kt)("li",{parentName:"ol"},"Add the following to ",(0,a.kt)("inlineCode",{parentName:"li"},"ios/app/src/Info.plist")," by replacing ",(0,a.kt)("inlineCode",{parentName:"li"},"<APP_KEY>"),"\nwith your own Dropbox app key (which can be found in the\n",(0,a.kt)("a",{parentName:"li",href:"https://www.dropbox.com/developers/apps"},"App Console"),"):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<key>CFBundleURLTypes</key>\n<array>\n  <dict>\n    <key>CFBundleURLName</key>\n    <string></string>\n    <key>CFBundleURLSchemes</key>\n    <array>\n      <string>db-<APP_KEY></string>\n    </array>\n  </dict>\n</array>\n<key>LSApplicationQueriesSchemes</key>\n<array>\n  <string>dbapi-2</string>\n  <string>dbapi-8-emm</string>\n</array>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," Both Android and iOS builds of the apps will parse the Dropbox app key\nfrom ",(0,a.kt)("inlineCode",{parentName:"p"},"ios/app/src/Info.plist"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," See ",(0,a.kt)("a",{parentName:"p",href:"https://www.dropbox.com/developers/reference/developer-guide"},"Dropbox developer guide")," for more information"))}m.isMDXComponent=!0}}]);