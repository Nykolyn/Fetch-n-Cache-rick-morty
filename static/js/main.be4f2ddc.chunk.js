(this["webpackJsonpfetch-n-cache-rick-morty"]=this["webpackJsonpfetch-n-cache-rick-morty"]||[]).push([[0],{104:function(e,t,r){"use strict";r.r(t);var i=r(0),a=r.n(i),n=r(9),c=r.n(n),s=(r(75),r(23)),o=r.n(s),u=r(32),h=r(140),l=r(33),j=r(44),p=r(21),b=r(45),d=r.n(b),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=Object(i.useState)(e),a=Object(p.a)(r,2),n=a[0],c=a[1],s=Object(i.useState)(!1),h=Object(p.a)(s,2),b=h[0],m=h[1],C=Object(i.useState)(null),g=Object(p.a)(C,2),E=g[0],O=g[1],I=Object(i.useState)(),L=Object(p.a)(I,2),S=L[0],x=L[1],R=function(){var e=Object(u.a)(o.a.mark((function e(r){var i,a,s,u,h,p,b;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:if(!(i=n[r])){e.next=6;break}return O(i),e.abrupt("return");case 6:return e.prev=6,e.next=9,d.a.get(r);case 9:a=e.sent,s=a.data,u=Object(j.a)(Object(j.a)({},n),{},Object(l.a)({},r,s)),t&&localStorage.setItem(t,JSON.stringify(u)),c(u),O(s),S&&x(null),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),x(d.a.isAxiosError(e.t0?null!==(h=null===(p=e.t0.response)||void 0===p||null===(b=p.data)||void 0===b?void 0:b.error)&&void 0!==h?h:"Not found":e.t0)),E&&O(null);case 22:return e.prev=22,m(!1),e.finish(22);case 25:case"end":return e.stop()}}),e,null,[[6,18,22,25]])})));return function(t){return e.apply(this,arguments)}}(),y={isFetching:b,fetchData:R,error:S,data:E,setData:O,setCache:c,cache:n};return y},C=r(131),g=r(139),E=r(135),O=r(136),I=r(5),L=Object(C.a)((function(e){return{input:{width:280,marginBottom:e.spacing(4),"& input[type=number]":{"-moz-appearance":"textfield"},"& input[type=number]::-webkit-outer-spin-button":{"-webkit-appearance":"none",margin:0},"& input[type=number]::-webkit-inner-spin-button":{"-webkit-appearance":"none",margin:0}}}})),S=function(e){var t=e.onSearch,r=e.isFetching,a=L(),n=Object(i.useState)(""),c=Object(p.a)(n,2),s=c[0],o=c[1];return Object(I.jsx)(g.a,{value:s,className:a.input,type:"number",onChange:function(e){o(e.target.value)},label:"Enter any number",InputProps:{endAdornment:Object(I.jsx)(E.a,{position:"end",children:Object(I.jsx)(O.a,{color:"primary",disabled:r,size:"small",onClick:function(){t(s)},children:"Search"})})}})},x=a.a.memo(S),R=r(137),y=r(106),Y=Object(C.a)((function(e){return{spec:{width:"20%",minWidth:"100px",marginRight:e.spacing(2),color:e.palette.grey[500]},desc:{fontWeight:"bold",textTransform:"capitalize",color:function(e){return e.color}}}})),F=function(e){var t=e.spec,r=e.desc,i={unknown:"grey",dead:"red"},a=function(e){return e in i},n=Y({color:function(){if(!r)return"grey";var e=r.toLowerCase();return a(e)?i[e]:"inherit"}()});return Object(I.jsxs)(h.a,{display:"flex",p:1,children:[Object(I.jsx)(y.a,{className:n.spec,children:t}),Object(I.jsx)(y.a,{className:n.desc,children:r||"unknown"})]})},f=function(e){var t=e.character,r=e.error;if(r)return Object(I.jsx)(h.a,{p:4,children:Object(I.jsx)(y.a,{variant:"h4",color:"error",children:r})});if(!t)return null;var i=t.name,a=t.species,n=t.type,c=t.location,s=t.origin,o=t.status;return Object(I.jsxs)(h.a,{p:2,children:[Object(I.jsx)(y.a,{variant:"h3",children:i}),Object(I.jsx)(F,{spec:"Species",desc:a}),Object(I.jsx)(F,{spec:"Type",desc:n}),Object(I.jsx)(F,{spec:"Location",desc:c.name}),Object(I.jsx)(F,{spec:"Origin",desc:s.name}),Object(I.jsx)(F,{spec:"Status",desc:o})]})},W=Object(C.a)((function(e){return{spin:{position:"absolute",left:"40%",top:"40%"}}})),k=function(e){var t,r=e.character,i=e.isFetching,a=e.error,n=W({isFetching:i});return Object(I.jsxs)(h.a,{display:"flex",children:[Object(I.jsxs)(h.a,{position:"relative",width:280,height:280,boxShadow:3,borderRadius:4,overflow:"hidden",children:[i&&Object(I.jsx)(R.a,{className:n.spin}),Object(I.jsx)("img",{width:280,height:280,src:null!==(t=null===r||void 0===r?void 0:r.image)&&void 0!==t?t:"data:image/png;base64,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",alt:"rick and morty"})]}),Object(I.jsx)(f,{error:a,character:r})]})},v=a.a.memo(k),w=r(134),A=r(138),U=Object(C.a)((function(e){return{item:{borderRadius:4,padding:"4px",overflow:"hidden",cursor:"pointer",border:"2px solid transparent",marginBottom:e.spacing(1)},active:{border:"2px solid",cursor:"default",borderColor:e.palette.primary.dark},image:{borderRadius:4}}})),G=function(e){var t=e.characters,r=e.current,i=e.setCurrent,a=e.setCache,n=U();return Object(I.jsxs)(h.a,{display:"flex",flexDirection:"column",alignItems:"center",children:[t.length>0&&Object(I.jsx)(O.a,{color:"primary",onClick:function(){a({}),localStorage.removeItem(K)},children:"Clear all"}),Object(I.jsx)(w.a,{children:t.map((function(e){var t=e.id,a=e.name,c=e.image,s=t===r;return Object(I.jsx)(A.a,{onClick:function(){return!s&&i(e)},className:s?"".concat(n.item," ").concat(n.active):n.item,children:Object(I.jsx)("img",{className:n.image,width:100,height:100,src:c,alt:a})},t)}))})]})},H=a.a.memo(G),K="characters",V=function(){var e=m(function(){var e=localStorage.getItem(K);return e?JSON.parse(e):{}}(),K),t=e.isFetching,r=e.error,i=e.fetchData,a=e.data,n=e.cache,c=e.setData,s=e.setCache,l=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(t?"".concat("https://rickandmortyapi.com/api/character","/").concat(t):"");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsxs)(h.a,{display:"flex",p:12,justifyContent:"space-between",children:[Object(I.jsxs)(h.a,{children:[Object(I.jsx)(x,{isFetching:t,onSearch:l}),Object(I.jsx)(v,{error:r,isFetching:t,character:a})]}),Object(I.jsx)(H,{setCache:s,setCurrent:c,current:null===a||void 0===a?void 0:a.id,characters:Object.values(n)})]})},X=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,143)).then((function(t){var r=t.getCLS,i=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;r(e),i(e),a(e),n(e),c(e)}))};c.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(V,{})}),document.getElementById("root")),X()}},[[104,1,2]]]);
//# sourceMappingURL=main.be4f2ddc.chunk.js.map