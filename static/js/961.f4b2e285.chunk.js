"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[961],{189:function(n,r,e){e.d(r,{Df:function(){return p},Pg:function(){return l},Ph:function(){return d},tx:function(){return f},zv:function(){return x}});var t=e(5861),o=e(4687),i=e.n(o),a=e(1912),c="https://api.themoviedb.org/3",s="321ca123fc0a63a77ea7b403d8c1a88c",u=function(){var n=window.localStorage.getItem("language");return n?JSON.parse(n):"en-US"},p=function(){var n=(0,t.Z)(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(c,"/trending/movie/week?api_key=").concat(s));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(r,e){var t,o,p;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.trim(),o=u(),n.next=4,a.Z.get("".concat(c,"/search/movie"),{params:{api_key:s,query:t,language:o,page:e,include_adult:!1}});case 4:return p=n.sent,n.abrupt("return",p.data);case 6:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(r){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=u(),n.next=3,a.Z.get("".concat(c,"/movie/").concat(r),{params:{api_key:s,language:e}});case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(i().mark((function n(r){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=u(),n.next=3,a.Z.get("".concat(c,"/movie/").concat(r,"/reviews"),{params:{api_key:s,language:e,page:1}});case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),x=function(){var n=(0,t.Z)(i().mark((function n(r){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=u(),n.next=3,a.Z.get("".concat(c,"/movie/").concat(r,"/credits"),{params:{api_key:s,language:e}});case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},7961:function(n,r,e){e.r(r);var t=e(9439),o=e(189),i=e(2791),a=e(7689),c=e(9126),s=e(3640),u=e(155),p=e(1051),d=e(3301),l=e(184);r.default=function(){var n,r,e=(0,a.UO)().movieId,f=(0,i.useState)({}),x=(0,t.Z)(f,2),h=x[0],g=x[1],v=(0,i.useState)(!0),m=(0,t.Z)(v,2),b=m[0],w=m[1],k=h.title,Z=h.genres,y=h.overview,j=h.poster_path,_=h.tagline,z=null!==(n=null===(r=(0,a.TH)().state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/",S=(0,a.s0)();(0,i.useEffect)((function(){return(0,o.Pg)(e).then((function(n){return g(n)})).catch((function(n){console.log(n),S("../mamkin/programmer",{replace:!0})})).finally(w(!1)),g({})}),[e,S]);return(0,l.jsxs)(u.W2,{children:[(0,l.jsxs)(s.TP,{to:z,children:[(0,l.jsx)(c.And,{})," Go Back"]}),b&&(0,l.jsx)(p.p,{}),!b&&(0,l.jsxs)(s.uA,{children:[(0,l.jsx)("div",{style:{minWidth:"500px"},children:(0,l.jsx)("img",{src:j?"https://image.tmdb.org/t/p/w500".concat(j):d,alt:k+" poster",width:"500px"})}),(0,l.jsxs)("div",{children:[(0,l.jsxs)(s.qw,{children:[(0,l.jsx)("h3",{children:k}),(0,l.jsx)("p",{style:{fontStyle:"italic"},children:_}),(0,l.jsx)("h4",{children:"Overview"}),(0,l.jsx)("p",{children:y}),(0,l.jsx)("h5",{children:"Genres"}),(0,l.jsx)("p",{children:function(){if(void 0!==Z)return Z.map((function(n){return n.name})).join(" ")}()}),(0,l.jsx)("h4",{children:"Additional information"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(s.gB,{to:"cast",state:{from:z},children:"Cast"}),(0,l.jsx)(s.gB,{to:"reviews",state:{from:z},children:"Reviews"}),(0,l.jsx)(s.gB,{to:"",state:{from:z},children:"Hide All"})]}),(0,l.jsx)(a.j3,{})]})]})]})}},3640:function(n,r,e){e.d(r,{TP:function(){return f},gB:function(){return l},qw:function(){return d},uA:function(){return p}});var t,o,i,a,c=e(168),s=e(9654),u=e(1087),p=s.Z.section(t||(t=(0,c.Z)(["\n  display: flex;\n  gap: 40px;\n  margin: 20px auto;\n"]))),d=s.Z.div(o||(o=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 600px;\n  gap: 15px;\n"]))),l=(0,s.Z)(u.rU)(i||(i=(0,c.Z)(["\n  margin: 10px 5px;\n  background-color: #fff;\n  background-position: 0 90%;\n  background-repeat: repeat no-repeat;\n  background-size: 4px 3px;\n  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;\n  border-style: solid;\n  border-width: 2px;\n  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;\n  box-sizing: border-box;\n  color: #41403e;\n  cursor: pointer;\n  display: inline-block;\n  font-family: Neucha, sans-serif;\n  font-size: 1rem;\n  line-height: 23px;\n  outline: none;\n  padding: 0.75rem;\n  text-decoration: none;\n  transition: all 235ms ease-in-out;\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n\n  :hover {\n    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;\n    transform: translate3d(0, 2px, 0);\n  }\n\n  :focus {\n    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;\n  }\n"]))),f=(0,s.Z)(u.rU)(a||(a=(0,c.Z)(["\n  --b: 2px; /* border thickness */\n  --s: 0.45em; /* size of the corner */\n  --color: #616157;\n\n  padding: calc(0.5em + var(--s)) calc(0.9em + var(--s));\n  color: var(--color);\n  --_p: var(--s);\n  background: conic-gradient(\n      from 90deg at var(--b) var(--b),\n      #0000 90deg,\n      var(--color) 0\n    )\n    var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))\n    calc(100% - var(--b) - 2 * var(--_p));\n  transition: 0.3s linear, color 0s, background-color 0s;\n  outline: var(--b) solid #0000;\n  outline-offset: 0.6em;\n  font-size: 16px;\n\n  border: 0;\n\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n\n  :hover,\n  :focus-visible {\n    --_p: 0px;\n    outline-color: var(--color);\n    outline-offset: 0.05em;\n  }\n\n  :active {\n    background: var(--color);\n    color: #fff;\n  }\n"])))},155:function(n,r,e){e.d(r,{IG:function(){return x},SH:function(){return f},UI:function(){return v},W:function(){return h},W2:function(){return l},l4:function(){return g},rS:function(){return m}});var t,o,i,a,c,s,u,p=e(168),d=e(9654),l=d.Z.main(t||(t=(0,p.Z)(["\n  margin: 20px auto;\n  padding: 0 40px;\n"]))),f=d.Z.h2(o||(o=(0,p.Z)(["\n  margin: 20px 0;\n"]))),x=d.Z.input(i||(i=(0,p.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  background-color: #ffffe6;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),h=d.Z.span(a||(a=(0,p.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),g=d.Z.button(c||(c=(0,p.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  background-color: #e0e0ca;\n  &:hover {\n    opacity: 1;\n  }\n"]))),v=d.Z.form(s||(s=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 500px;\n  margin-bottom: 30px;\n  background-color: #ffffe6;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),m=d.Z.p(u||(u=(0,p.Z)(["\n  display: block;\n  padding: 15px;\n  color: #616157;\n  text-align: center;\n  font-size: 20px;\n"])))},3301:function(n,r,e){n.exports=e.p+"static/media/img_404.02c7bc1de76c7c188efa.jpg"}}]);
//# sourceMappingURL=961.f4b2e285.chunk.js.map