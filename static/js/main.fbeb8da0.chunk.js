(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){"use strict";a.d(t,"d",function(){return n}),a.d(t,"e",function(){return r}),a.d(t,"b",function(){return c}),a.d(t,"a",function(){return i}),a.d(t,"f",function(){return o}),a.d(t,"c",function(){return l});var n="GET_ALL_CATEGORIES",r="GET_ALL_PRODUCTS",c="ADD_COUNTER_CART",i="addCart",o="dispatchProductID",l="CLEAR_CART"},35:function(e,t,a){var n={"./beer-botle.jpg":50,"./chopp-puro-malte.jpg":51,"./jam-orange.jpg":52,"./jam-strawberry.jpg":53,"./red-wine.jpg":54,"./yellow-wine.jpg":55};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=35},36:function(e,t,a){e.exports=a(60)},50:function(e,t,a){e.exports=a.p+"static/media/beer-botle.584081c3.jpg"},51:function(e,t,a){e.exports=a.p+"static/media/chopp-puro-malte.97674de1.jpg"},52:function(e,t,a){e.exports=a.p+"static/media/jam-orange.51973aa8.jpg"},53:function(e,t,a){e.exports=a.p+"static/media/jam-strawberry.fdfd65d4.jpg"},54:function(e,t,a){e.exports=a.p+"static/media/red-wine.1ba554ca.jpg"},55:function(e,t,a){e.exports=a.p+"static/media/yellow-wine.8aa919d1.jpg"},56:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),i=a.n(c),o=a(18),l=a(13),u=a(15),s=a(16),m=a(19),d=a(17),p=a(20),b=a(9),g=a(11),h=function(e){var t=e.counter,n=e.items,c=e.changeText,i=e.value,o=e.itemClick;return r.a.createElement("div",{className:"ui secondary menu red"},r.a.createElement(b.c,{to:"/home",className:"item"},"Home"),r.a.createElement(b.c,{to:"/catalog",className:"item"},"Catalog"),r.a.createElement("div",{className:"right menu"},r.a.createElement("div",{className:"ui search"},r.a.createElement("div",{className:"ui icon input"},r.a.createElement("input",{className:"prompt",type:"text",value:i,placeholder:"Search products...",onChange:function(e){return c(e)}}),r.a.createElement("i",{className:"search icon"})),r.a.createElement("div",{className:""!==i?"results transition visible":"results"},n&&n.map(function(e){return r.a.createElement(b.b,{to:"/product/"+e.key,onClick:function(){return o()}},r.a.createElement("div",{className:"searchItem",key:e.key},r.a.createElement("img",{alt:"product",src:a(35)("./".concat(e.img,".jpg")),className:"searchItem_img"}),r.a.createElement("p",{style:{marginLeft:"5px"}},e.name)))}))),r.a.createElement("div",{className:"item"},r.a.createElement(b.b,{to:"/cart",className:"ui red button"},r.a.createElement("i",{className:"cart icon"}),"(",t,") Cart"))))},f=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).changeText=function(e){e.preventDefault(),a.setState({value:e.target.value})},a.itemClick=function(){a.setState({value:""})},a.state={value:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items.filter(function(t){return t.name.toLowerCase().includes(e.state.value.toLowerCase())});return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(b.b,{to:"/"},"Store")),r.a.createElement(h,{counter:this.props.counter,items:t,changeText:this.changeText,value:this.state.value,itemClick:this.itemClick})))}}]),t}(n.Component),y=Object(o.b)(function(e){return{counter:e.cartStore.counter,items:e.products.list}},{})(f),j=(a(56),Object(n.lazy)(function(){return a.e(10).then(a.bind(null,68))})),E=Object(n.lazy)(function(){return a.e(3).then(a.bind(null,73))}),v=Object(n.lazy)(function(){return a.e(6).then(a.bind(null,69))}),O=Object(n.lazy)(function(){return a.e(9).then(a.bind(null,70))}),k=Object(n.lazy)(function(){return a.e(4).then(a.bind(null,72))}),w=Object(n.lazy)(function(){return a.e(5).then(a.bind(null,71))}),N=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e;return r.a.createElement(b.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"ui block header"},r.a.createElement(y,null)),r.a.createElement("div",{className:"ui container"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"ui loading segment"})},r.a.createElement(g.d,null,r.a.createElement(g.b,{path:"/store/",exact:!0,component:j}),r.a.createElement(g.b,(e={path:"/home"},Object(l.a)(e,"path","/store/"),Object(l.a)(e,"component",E),e)),r.a.createElement(g.b,{path:"/catalog",component:v}),r.a.createElement(g.b,{path:"/category/:id",component:O}),r.a.createElement(g.b,{path:"/product/:id",component:w}),r.a.createElement(g.b,{path:"/cart",component:k}))))))}}]),t}(n.Component),C=a(4),x=a(27),T=a(5),_={name:""},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MAIN_NAME":return Object(T.a)({},e,{name:t.payload.name});default:return e}},A=a(10),G={list:[{key:"1",name:"Jam",img:"jam"},{key:"2",name:"Beer",img:"beer"},{key:"3",name:"Wine",img:"wine"}]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A.d:return Object(T.a)({},e,{list:t.payload.list});default:return e}},D={counter:0,items:[],key:""},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A.b:return Object(T.a)({},e,{counter:t.payload.counter});case A.f:return Object(T.a)({},e,{key:t.payload.key});case A.a:return Object(T.a)({},e,{items:e.items.concat(t.payload.items)});case A.c:return Object(T.a)({},e,{counter:t.payload.counter,items:t.payload.items});default:return e}},q={list:[{key:"1",name:"Strawberry Jam",category:"1",img:"jam-strawberry",qtd:1,description:"Great jam to eat"},{key:"2",name:"Chopp Beer",category:"2",img:"chopp-puro-malte",qtd:1,description:"Great wine to drink"},{key:"3",name:"Red Wine",category:"3",img:"red-wine",qtd:1,description:"Great wine to drink"},{key:"4",name:"Orange Jam",category:"1",img:"jam-orange",qtd:1,description:"Great jam to eat"},{key:"5",name:"Botle Beer",category:"2",img:"beer-botle",qtd:1,description:"Great beer to drink"},{key:"6",name:"Yellow Wine",category:"3",img:"yellow-wine",qtd:1,description:"Great wine to drink"}]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A.e:return Object(T.a)({},e,{list:t.payload.list});default:return e}},I=Object(C.c)({main:S,categories:L,products:z,cartStore:R}),B=a(32),J=a(33),U={key:"root",storage:a.n(J).a},M=Object(x.a)(U,I),W=Object(C.d)(M,Object(C.a)(B.a)),P=Object(x.b)(W),F=a(34),H=(a(59),document.getElementById("root"));i.a.render(r.a.createElement(o.a,{store:W},r.a.createElement(F.a,{loading:null,persistor:P},r.a.createElement(N,null))),H)}},[[36,1,2]]]);
//# sourceMappingURL=main.fbeb8da0.chunk.js.map