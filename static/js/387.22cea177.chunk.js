"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{189:function(n,t,r){r.d(t,{Df:function(){return p},Pg:function(){return d},Ph:function(){return f},tx:function(){return l},zv:function(){return v}});var e=r(5861),a=r(4687),u=r.n(a),c=r(1912),i="https://api.themoviedb.org/3",o="321ca123fc0a63a77ea7b403d8c1a88c",s=function(){var n=window.localStorage.getItem("language");return n?JSON.parse(n):"en-US"},p=function(){var n=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"/trending/movie/week?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t,r){var e,a,p;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.trim(),a=s(),n.next=4,c.Z.get("".concat(i,"/search/movie"),{params:{api_key:o,query:e,language:a,page:r,include_adult:!1}});case 4:return p=n.sent,n.abrupt("return",p.data);case 6:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=s(),n.next=3,c.Z.get("".concat(i,"/movie/").concat(t),{params:{api_key:o,language:r}});case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=s(),n.next=3,c.Z.get("".concat(i,"/movie/").concat(t,"/reviews"),{params:{api_key:o,language:r,page:1}});case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=s(),n.next=3,c.Z.get("".concat(i,"/movie/").concat(t,"/credits"),{params:{api_key:o,language:r}});case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4387:function(n,t,r){r.r(t),r.d(t,{default:function(){return v}});var e,a,u=r(9439),c=r(189),i=r(2791),o=r(7689),s=r(168),p=r(9654),f=p.Z.li(e||(e=(0,s.Z)(["\n  position: relative;\n  margin: 15px;\n  padding: 10px;\n  background-color: #ededd5;\n  border: 1px solid rgba(199, 199, 179, 0.7);\n  border-radius: 20px;\n"]))),d=p.Z.span(a||(a=(0,s.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  font-style: italic;\n  font-size: 14px;\n"]))),l=r(184),v=function(){var n=(0,o.UO)().movieId,t=(0,i.useState)([]),r=(0,u.Z)(t,2),e=r[0],a=r[1];return(0,i.useEffect)((function(){return(0,c.tx)(n).then((function(n){return a(n.results)})),a([])}),[n]),(0,l.jsxs)("ul",{children:[0===e.length&&(0,l.jsx)("div",{style:{marginTop:"15px"},children:"No reviews found!"}),e.map((function(n){var t=n.author,r=n.content,e=n.created_at,a=n.id;return(0,l.jsxs)(f,{children:[(0,l.jsxs)("h4",{children:["Author: ",t]}),(0,l.jsx)(d,{children:e.slice(0,16).split("T").reverse().join(" ")}),(0,l.jsx)("p",{children:r})]},a)}))]})}}}]);
//# sourceMappingURL=387.22cea177.chunk.js.map