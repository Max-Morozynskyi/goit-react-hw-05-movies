"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{189:function(n,t,r){r.d(t,{Df:function(){return p},Pg:function(){return v},Ph:function(){return f},tx:function(){return m},zv:function(){return x}});var e=r(5861),a=r(4687),c=r.n(a),u=r(1912),i="https://api.themoviedb.org/3",o="321ca123fc0a63a77ea7b403d8c1a88c",s=function(){var n=window.localStorage.getItem("language");return n?JSON.parse(n):"en-US"},p=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/trending/movie/week?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t,r){var e,a,p;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.trim(),a=s(),n.next=4,u.Z.get("".concat(i,"/search/movie"),{params:{api_key:o,query:e,language:a,page:r,include_adult:!1}});case 4:return p=n.sent,n.abrupt("return",p.data);case 6:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=s(),n.next=3,u.Z.get("".concat(i,"/movie/").concat(t),{params:{api_key:o,language:r}});case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=s(),n.next=3,u.Z.get("".concat(i,"/movie/").concat(t,"/reviews"),{params:{api_key:o,language:r,page:1}});case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=s(),n.next=3,u.Z.get("".concat(i,"/movie/").concat(t,"/credits"),{params:{api_key:o,language:r}});case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},9544:function(n,t,r){r.r(t);var e=r(9439),a=r(189),c=r(2791),u=r(7398),i=r(7689),o=r(1087),s=r(184);t.default=function(){var n=(0,c.useState)([]),t=(0,e.Z)(n,2),r=t[0],p=t[1],f=(0,i.TH)();return(0,c.useEffect)((function(){(0,a.Df)().then((function(n){var t=n.results;return p(t)})).catch((function(n){return n}))}),[]),(0,s.jsxs)("main",{children:[(0,s.jsx)(u.eA,{children:"TOP-movies of this week"}),(0,s.jsx)(u.sS,{children:r.map((function(n){var t=n.title,r=n.id,e=n.poster_path;return(0,s.jsx)(u.sE,{children:(0,s.jsx)(o.rU,{to:"movies/".concat(r),state:{from:f},children:(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w400".concat(e),alt:t})})},r)}))})]})}},7398:function(n,t,r){r.d(t,{eA:function(){return o},sE:function(){return p},sS:function(){return s}});var e,a,c,u=r(168),i=r(9654),o=i.Z.h2(e||(e=(0,u.Z)(["\n  text-align: center;\n  margin: 20px 0;\n"]))),s=i.Z.ul(a||(a=(0,u.Z)(["\n  max-width: 100vw;\n  margin-bottom: 20px;\n\n  display: flex;\n  gap: 15px;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),p=i.Z.li(c||(c=(0,u.Z)(["\n  cursor: pointer;\n  max-width: 400px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,\n    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;\n  transition: transform 500ms;\n  :hover {\n    transform: scale(1.05);\n  }\n"])))}}]);
//# sourceMappingURL=544.252a7f63.chunk.js.map