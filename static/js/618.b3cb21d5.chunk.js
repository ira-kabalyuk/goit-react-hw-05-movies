"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[618],{618:function(e,n,r){r.r(n),r.d(n,{default:function(){return Y}});var t=r(861),a=r(439),s=r(757),i=r.n(s),c=r(791),u=r(689),o=r(87),l=r(390),p=r(585),d=r(761),h=r(385),v=r(951),f="MovieDetails_background__xrR1W",m="MovieDetails_block__0WciY",x="MovieDetails_title__xwKD-",_="MovieDetails_poster__F6adA",g="MovieDetails_image__uAQXn",j="MovieDetails_fontNormal__fo6Uq",w="MovieDetails_text__prp0M",b="MovieDetails_genre__fF5qM",N="MovieDetails_list__Wb0yd",M="MovieDetails_item__d3W+g",k="MovieDetails_link__shihh",y="MovieDetails_back__2cNX7",D="MovieDetails_arrow__tCguJ",I=r(184),Z=(0,c.lazy)((function(){return r.e(662).then(r.bind(r,662))})),U=(0,c.lazy)((function(){return r.e(588).then(r.bind(r,588))})),Y=function(){var e,n,r=(0,u.TH)(),s=(0,c.useRef)(null!==(e=null===(n=r.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");console.log(r,"location");var Y=(0,u.UO)().id,W=(0,c.useState)(null),J=(0,a.Z)(W,2),S=J[0],z=J[1],A=(0,c.useState)(p.n.idle),O=(0,a.Z)(A,2),G=O[0],C=O[1],T=(0,c.useState)(null),q=(0,a.Z)(T,2),F=q[0],B=q[1],E=G===p.n.success,Q=G===p.n.error,X=G===p.n.pending,R=function(){var e=(0,t.Z)(i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(p.n.pending),e.next=4,(0,l.GM)(n);case 4:r=e.sent,z(r),C(p.n.success),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),B(e.t0.message),C(p.n.error);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){R(Y)}),[Y]);var V="".concat("https://image.tmdb.org/t/p/w500/").concat(null===S||void 0===S?void 0:S.poster_path),K=null===S||void 0===S?void 0:S.release_date,L=new Date(K).getFullYear(),$=(null===S||void 0===S?void 0:S.popularity)/10,H=Math.round($);return(0,I.jsx)("div",{className:f,children:(0,I.jsxs)(d.$,{children:[(!S||X)&&(0,I.jsx)(v.a,{}),E&&S&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(o.rU,{className:y,to:s.current,children:[(0,I.jsx)("span",{className:D,children:"\ud83d\udc48"})," Go back"]}),(0,I.jsxs)("div",{className:m,children:[(0,I.jsx)("div",{className:_,children:(0,I.jsx)("img",{className:g,src:S.poster_path?V:p.t.defaultImg,alt:S.title})}),(0,I.jsxs)("div",{children:[(0,I.jsxs)("h1",{className:x,children:[S.title," ",(0,I.jsxs)("span",{className:j,children:["(",L,")"]})]}),(0,I.jsxs)("p",{className:w,children:["User score: ",(0,I.jsxs)("span",{className:j,children:[H,"% "]})]}),(0,I.jsxs)("p",{className:w,children:["Overview: ",(0,I.jsx)("span",{className:j,children:null===S||void 0===S?void 0:S.overview})]}),(0,I.jsx)("span",{className:w,children:"Genres:"}),S.genres.map((function(e,n){return(0,I.jsx)("span",{className:b,children:e.name},n)}))]})]}),(0,I.jsxs)("ul",{className:N,children:[(0,I.jsx)("li",{className:M,children:(0,I.jsx)(o.rU,{to:"cast",className:k,children:"Cast"})}),(0,I.jsx)("li",{className:M,children:(0,I.jsx)(o.rU,{to:"reviews",className:k,children:"Reviews"})})]}),(0,I.jsx)("div",{children:(0,I.jsx)(c.Suspense,{fallback:(0,I.jsx)(v.a,{}),children:(0,I.jsxs)(u.Z5,{children:[(0,I.jsx)(u.AW,{path:"cast",element:(0,I.jsx)(Z,{})}),(0,I.jsx)(u.AW,{path:"reviews",element:(0,I.jsx)(U,{})})]})})})]}),Q&&(0,I.jsxs)(h.j,{children:["Oops, some error occurred... ",F]})]})})}},390:function(e,n,r){r.d(n,{$m:function(){return d},B8:function(){return u},GM:function(){return l},Ib:function(){return p},lc:function(){return o}});var t=r(861),a=r(757),s=r.n(a),i=r(294),c=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get(n,{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzczZmVmMDk2MTUwMjUwYWQzYmI0YTJiYTg3YWE3YiIsInN1YiI6IjYyZDcwYWFhZTE5NGIwMDA1NmI1YjdkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0jNox1rTYOYjOVBcKh0Pb5udXbOSEAy9qpzL_pb_Jfc",accept:"application/json"}});case 3:return r=e.sent,t=r.data,e.abrupt("return",t);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/all/day?language=en-US",e.next=3,c("https://api.themoviedb.org/3/trending/all/day?language=en-US");case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=".concat(n),e.next=3,c(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),e.next=3,c(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US"),e.next=3,c(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US&page=1"),e.next=3,c(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},585:function(e,n,r){r.d(n,{n:function(){return t},t:function(){return a}});var t={idle:"idle",pending:"pending",success:"success",error:"error"},a={defaultImg:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700"}}}]);
//# sourceMappingURL=618.b3cb21d5.chunk.js.map