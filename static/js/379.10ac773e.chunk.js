"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[379],{812:function(e,n,t){t.d(n,{O:function(){return i}});t(791);var r=t(87),a="MoviesList_list__Ea3rL",u="MoviesList_link__vtKKb",c="MoviesList_item__gLWPR",s=t(184),i=function(e){var n=e.list,t=e.state,i=void 0===t?null:t;return(0,s.jsx)("ul",{className:a,children:null===n||void 0===n?void 0:n.map((function(e,n){return(0,s.jsx)("li",{className:c,children:(0,s.jsx)(r.rU,{state:i,to:"/movies/".concat(e.id),className:u,children:e.title})},n)}))})}},379:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r=t(861),a=t(439),u=t(757),c=t.n(u),s=t(791),i=t(689),o=t(87),l=t(390),p=t(585),f=t(761),h=t(385),d=t(951),v=t(812),m="SearchForm_form__49W6b",g="SearchForm_button__arepV",x="SearchForm_input__7U8V+",b=t(184),w=function(e){var n=e.handleSubmit,t=e.query;return(0,b.jsxs)("form",{className:m,onSubmit:n,action:"",children:[(0,b.jsx)("button",{className:g,type:"submit",children:"\ud83d\udd0d"}),(0,b.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",name:"search",className:x,defaultValue:t})]})},_=function(){var e=(0,i.TH)(),n=(0,o.lr)(),t=(0,a.Z)(n,2),u=t[0],m=t[1],g=u.get("query"),x=(0,s.useState)(null),_=(0,a.Z)(x,2),y=_[0],j=_[1],S=(0,s.useState)(p.n.idle),k=(0,a.Z)(S,2),Z=k[0],I=k[1],N=(0,s.useState)(null),U=(0,a.Z)(N,2),Y=U[0],J=U[1],M=Z===p.n.success,O=Z===p.n.error,W=Z===p.n.pending,q=M&&0===(null===y||void 0===y?void 0:y.length),z=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,I(p.n.pending),e.next=4,(0,l.lc)(n);case 4:t=e.sent,j(t.results),I(p.n.success),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),J(e.t0.message),I(p.n.error);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){null!==g&&z(g)}),[g]);return(0,b.jsx)(f.$,{children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(w,{handleSubmit:function(e){e.preventDefault();var n=e.currentTarget.elements.search.value;m({query:n}),j([])},query:g}),O&&(0,b.jsxs)(h.j,{children:["Oops, some error occurred... ",Y]}),q&&(0,b.jsx)(h.j,{children:"Sorry, no movies found \ud83e\udd37"}),W&&(0,b.jsx)(d.a,{}),M&&y&&(0,b.jsx)(v.O,{list:y,state:{from:e}})]})})}},390:function(e,n,t){t.d(n,{$m:function(){return f},B8:function(){return i},GM:function(){return l},Ib:function(){return p},lc:function(){return o}});var r=t(861),a=t(757),u=t.n(a),c=t(294),s=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get(n,{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzczZmVmMDk2MTUwMjUwYWQzYmI0YTJiYTg3YWE3YiIsInN1YiI6IjYyZDcwYWFhZTE5NGIwMDA1NmI1YjdkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0jNox1rTYOYjOVBcKh0Pb5udXbOSEAy9qpzL_pb_Jfc",accept:"application/json"}});case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/all/day?language=en-US",e.next=3,s("https://api.themoviedb.org/3/trending/all/day?language=en-US");case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=".concat(n),e.next=3,s(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),e.next=3,s(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US"),e.next=3,s(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US&page=1"),e.next=3,s(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},585:function(e,n,t){t.d(n,{n:function(){return r},t:function(){return a}});var r={idle:"idle",pending:"pending",success:"success",error:"error"},a={defaultImg:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700"}}}]);
//# sourceMappingURL=379.10ac773e.chunk.js.map