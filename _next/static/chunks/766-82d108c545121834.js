(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[766],{39463:function(e,t,n){"use strict";n.d(t,{W2:function(){return g},Mp:function(){return h},X2:function(){return x},JX:function(){return y}});var r=n(92809),o=n(91164),c=n(94184),a=n.n(c),i=n(62877),s=n(85893),l=["display","breakpoint","fixed","stickyTop","children","className"],u=["display","fixed","stickyTop","children","className"],d=["cols","gutters","guttersX","guttersY","children","className"],f=["display","col","offset","children","className"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){var t=e.display,n=e.breakpoint,r=e.fixed,c=e.stickyTop,u=e.children,d=e.className,f=(0,o.Z)(e,l),p=n?"-".concat(n):"",g=t?"d-".concat(t):"";return(0,s.jsx)("div",m(m({className:a()("container".concat(p),g,r&&(0,i.Yu)(r),c&&(0,i.xj)(c),d)},f),{},{children:u}))},h=function(e){var t=e.display,n=e.fixed,r=e.stickyTop,c=e.children,l=e.className,d=(0,o.Z)(e,u),f=t?"d-".concat(t):"";return(0,s.jsx)("div",m(m({className:a()("container-fluid",f,n&&(0,i.Yu)(n),r&&(0,i.xj)(r),l)},d),{},{children:c}))},x=function(e){var t=e.cols,n=e.gutters,r=e.guttersX,c=e.guttersY,l=e.children,u=e.className,f=(0,o.Z)(e,d),p=t?"object"===typeof t?(0,i.MG)(t,"row-cols"):"row-cols-".concat(t):"",g=n?"object"===typeof n?(0,i.MG)(n,"g"):"g-".concat(n):"",h=r?"object"===typeof r?(0,i.MG)(r,"gx"):"gx-".concat(r):"",x=c?"object"===typeof c?(0,i.MG)(c,"gy"):"gy-".concat(c):"";return(0,s.jsx)("div",m(m({className:a()("row",p,g,h,x,u)},f),{},{children:l}))},y=function(e){var t=e.display,n=e.col,r=e.offset,c=e.children,l=e.className,u=(0,o.Z)(e,f),d=t?"d-".concat(t):"",p=n?"object"===typeof n?(0,i.MG)(n,"col"):"col-".concat(n):"",g=r?"object"===typeof r?(0,i.MG)(r,"offset"):"offset-".concat(r):"";return(0,s.jsx)("div",m(m({className:a()("col",p,g,d,l)},u),{},{children:c}))}},62877:function(e,t,n){"use strict";n.d(t,{MG:function(){return r},Yu:function(){return c},xj:function(){return a},rr:function(){return i}});var r=function(e,t,n){return Object.keys(e).map((function(r){return"".concat(t,"-").concat("xs"===r?"":r+"-").concat(e[r]).concat(n?"-".concat(n):"")})).join(" ")},o=function(e,t,n){return t?!0===t?"".concat(e).concat(n?"-".concat(n):""):Object.keys(t).filter((function(e){return!0===t[e]})).map((function(t){return"".concat(e,"-").concat(t).concat(n?"-".concat(n):"")})).join(" "):""},c=function(e){return e?"fixed-".concat(e):""},a=function(e){return o("sticky",e,"top")},i=function(e){return o("list-group-horizontal",e)}},64766:function(e,t,n){"use strict";n.d(t,{X:function(){return A}});var r={};n.r(r),n.d(r,{get:function(){return p},has:function(){return x},remove:function(){return g},reset:function(){return h},set:function(){return m}});var o={};n.r(o),n.d(o,{get:function(){return j},has:function(){return b},remove:function(){return N},reset:function(){return k},set:function(){return v}});var c=n(39463),a=n(9008),i=n(65988),s=n(41664),l=n(11163),u=n(49756),d=n(17547),f=n(67294),p=function(e){return localStorage.getItem(e)},m=function(e,t){return localStorage.setItem(e,"string"===typeof t?t:JSON.stringify(t))},g=function(e){localStorage.removeItem(e)},h=function(){return localStorage.clear()},x=function(e){return void 0!==localStorage.getItem(e)},y=n(76489),j=function(e,t){var n=t.req;if(n)return n.cookies[e]},b=function(e,t){var n=t.req;if(!n)return!1;var r=n.cookies;return Object.prototype.hasOwnProperty.call(r,e)},v=function(e,t,n){var r=n.res,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(r){var c="object"===typeof t?"j:"+JSON.stringify(t):String(t);o.maxAge&&(o.expires=new Date(Date.now()+o.maxAge),o.maxAge/=1e3),r.setHeader("Set-Cookie",(0,y.q)(e,c,o))}},N=function(e,t){},k=function(e){var t=e.res;t&&t.setHeader("Set-Cookie","")},_="object"===typeof document?r:o,w=n(85893),C="color-scheme",O={theme:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return _.get(e,t)}(C)||"light",setTheme:function(e){}},S=(0,f.createContext)(O);S.displayName="ThemeContext";var T=n(34849),B=n.n(T),P=[["Home","/home"],["Tags","/post-tags"],["Categories","/post-categories"],["About","/about"]],M=function(e){var t,n=e.brand,r=e.navItems,o=void 0===r?P:r,a=(0,l.useRouter)();return(0,w.jsx)(u.Z,{expand:"md",bg:"light",children:(0,w.jsxs)(c.Mp,{children:[n&&(0,w.jsx)(s.default,{href:n.link,children:(0,w.jsx)("a",{className:"navbar-brand",children:n.name})}),(0,w.jsx)(u.Z.Toggle,{"aria-controls":B().navbarSupportedContent}),(0,w.jsx)(u.Z.Collapse,{id:B().navbarSupportedContent,children:(0,w.jsx)(d.Z,{className:"me-auto mb-2 mb-lg-0",activeKey:a.asPath,children:(t=o,(0,w.jsx)(w.Fragment,{children:t.map((function(e){return(0,w.jsx)(s.default,{href:e[1],passHref:!0,children:(0,w.jsx)(d.Z.Link,{children:e[0]})},e[1])}))}))})})]})})},X=n(48728),Z=n.n(X),G=function(e){var t=e.siteName,n=void 0===t?"PK":t;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("header",{className:i.default.dynamic([["2985435109",[Z().headerBgColor]]])+" layout-header",children:(0,w.jsx)(c.W2,{className:"px-0",children:(0,w.jsx)(c.X2,{children:(0,w.jsx)(c.JX,{children:(0,w.jsx)(M,{brand:{name:n,link:"/"}})})})})}),(0,w.jsx)(i.default,{id:"2985435109",dynamic:[Z().headerBgColor],children:[".layout-header.__jsx-style-dynamic-selector:{background-color:".concat(Z().headerBgColor,";}")]})]})},D=function(e){var t=e.siteName,n=void 0===t?"PK":t,r=e.pageTitle,o=e.ogImageUrl;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(a.default,{children:[(0,w.jsx)("title",{children:"".concat(r&&r+" | ").concat(n)}),(0,w.jsx)("meta",{property:"og:image",content:o||""})]}),(0,w.jsx)(G,{})]})},I=function(e){var t=e.copyright;e.adsense;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("footer",{className:i.default.dynamic([["1578747781",[Z().footerBgColor]]])+" layout-footer",children:(0,w.jsx)(c.Mp,{className:"pt-2",children:(0,w.jsx)(c.X2,{children:(0,w.jsxs)(c.JX,{display:"flex",className:"notice-container justify-content-end align-items-end",children:[(0,w.jsx)("p",{className:i.default.dynamic([["1578747781",[Z().footerBgColor]]])+" pe-1",children:t||"\xa9 2005-2021"}),(0,w.jsxs)("h4",{className:i.default.dynamic([["1578747781",[Z().footerBgColor]]]),children:["Based on ",(0,w.jsx)("a",{href:"https://github.com/aistyler",className:i.default.dynamic([["1578747781",[Z().footerBgColor]]]),children:"Vanadium"}),"."]})]})})})}),(0,w.jsx)(i.default,{id:"1578747781",dynamic:[Z().footerBgColor],children:[".layout-footer.__jsx-style-dynamic-selector{background-color:".concat(Z().footerBgColor,";color:$indigo;}"),".notice-container.__jsx-style-dynamic-selector h4.__jsx-style-dynamic-selector,.notice-container.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{text-align:end;margin:0;}",".locale-list-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}"]})]})},J=function(e){var t=e.copyright,n=e.adsense;return(0,w.jsx)(I,{copyright:t,adsense:n})},Y=n(80578),F=n.n(Y),K=function(e){var t=e.pageTitle,n=e.children;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(D,{pageTitle:t}),(0,w.jsx)(c.Mp,{className:"px-0 ".concat(F().main),children:(0,w.jsx)(c.X2,{children:(0,w.jsx)(c.JX,{children:(0,w.jsx)(c.W2,{children:(0,w.jsx)("main",{children:n})})})})}),(0,w.jsx)(J,{copyright:"",adsense:""})]})},A=function(e){var t=e.pageTitle,n=e.children;return(0,w.jsx)(K,{pageTitle:t,children:n})}},80578:function(e){e.exports={main:"layout_main__TaK_R","link-no-style":"layout_link-no-style__4jLKC"}},34849:function(e){e.exports={navbarSupportedContent:"navbar_navbarSupportedContent__YNnW3"}},48728:function(e){e.exports={transitionTimeout:"100ms",footerBgColor:"#e9ecef",headerBgColor:"#f8f9fa",primary:"#03a9f4",secondary:"#868e96",success:"#8bc34a",info:"#00bcd4",warning:"#ffab00",danger:"#f44336",light:"#f8f9fa",dark:"#212529","custom-color":"#00990d"}}}]);