(function(t){function e(e){for(var a,i,o=e[0],l=e[1],c=e[2],h=0,A=[];h<o.length;h++)i=o[h],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&A.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(A.length)A.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var p=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},3542:function(t,e,n){t.exports=n.p+"img/images.8ac628d7.jpg"},"3b1f":function(t,e,n){"use strict";var a=n("42d1"),s=n.n(a);s.a},"42d1":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box",staticStyle:{"background-image":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAzP/tN0oVAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC')"},attrs:{id:"app"}},[a("br"),a("HelloWorld",{attrs:{mrc:""}}),a("img",{staticClass:"rounded-circle",attrs:{src:n("3542"),width:"20%"}}),a("div",[a("botton")],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-light"},[n("h1",[t._v(t._s(t.msg))])])},o=[],l={name:"HelloWorld",props:{msg:String}},c=l,p=(n("3b1f"),n("2877")),h=Object(p["a"])(c,i,o,!1,null,"c13f4546",null),A=h.exports,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-info",attrs:{disabled:t.end},on:{click:function(e){return t.start()}}},[t._v(t._s(t.label)+"Start")])]),n("div",{staticClass:"col-3"},[n("button",{staticClass:"btn btn-info",on:{click:function(e){return t.replay()}}},[t._v(t._s(t.label)+"New Game")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm"}),n("div",{staticClass:"col-sm"},[n("div",{attrs:{id:"score"}},[t.monster1.hp<=0?n("div",[t._v("WIN")]):t.player.hp<=0?n("div",[t._v("LOSE")]):t._e()])]),n("div",{staticClass:"col-sm"})])]),n("div",{staticClass:"row"},[n("div",{staticClass:"column"},[n("p",{staticStyle:{"font-size":"150%"}},[t._v(t._s(t.player.name))]),n("p",{staticStyle:{"font-size":"150%"}},[t._v(t._s(t.player.hp))]),n("p",[n("img",{staticStyle:{width:"150px"},attrs:{src:t.player.image}})])]),n("div",{staticClass:"col-3"},[n("p",{staticStyle:{"font-size":"150%"}},[t._v(t._s(t.monster1.name))]),n("p",{staticStyle:{"font-size":"150%"}},[t._v(t._s(t.monster1.hp))]),n("p",[n("img",{staticStyle:{width:"150px"},attrs:{src:t.monster1.image}})])])]),n("div",{staticClass:"col-sm"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-3"},[n("button",{staticClass:"btn btn-info ",attrs:{disabled:t.end},on:{click:function(e){return t.attack()}}},[t._v(t._s(t.label)+"Attack")]),n("button",{staticClass:"btn btn-info",attrs:{disabled:t.end},on:{click:function(e){return t.special()}}},[t._v(t._s(t.label)+"Special Attack")])]),n("br")])])]),n("hr")])},d=[],m={props:{label:String},data:function(){return{thp:"HP:",end:!1,player:{name:"",image:""},monster1:{name:"",image:""},hmax:"",mmax:"",hero:[{name:"Sage",hp:200},{name:"Raze",hp:190},{name:"Jett",hp:195},{name:"Sova",hp:180}],monster:[{name:"Omen",hp:200},{name:"Reyna",hp:185},{name:"Viper",hp:190},{name:"Cypher",hp:195}]}},methods:{randomno:function(t,e){return Math.max(Math.floor(Math.random()*e)+1,t)},start:function(){this.player=this.hero[this.randomno(1,7)-1],this.monster1=this.monster[this.randomno(1,7)-1]},attack:function(){this.hmax=Math.floor(10*Math.random()+4),this.monster1.hp=this.monster1.hp-this.hmax,this.mmax=Math.floor(10*Math.random()+4),this.player.hp=this.player.hp-this.mmax,this.player.hp<=0?(this.player.hp=0,this.end=!0):this.monster1.hp<=0&&(this.monster1.hp=0,this.end=!0)},special:function(){this.hmax=Math.floor(15*Math.random()+6),this.monster1.hp=this.monster1.hp-this.hmax,this.mmax=Math.floor(15*Math.random()+6),this.player.hp=this.player.hp-this.mmax,this.player.hp<=0?(this.player.hp=0,this.end=!0):this.monster1.hp<=0&&(this.monster1.hp=0,this.end=!0)},replay:function(){window.location.reload()}}},f=m,v=(n("eadf"),Object(p["a"])(f,u,d,!1,null,null,null)),b=v.exports,y={name:"App",components:{HelloWorld:A,botton:b}},g=y,_=(n("034f"),Object(p["a"])(g,s,r,!1,null,null,null)),C=_.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(C)}}).$mount("#app")},"85ec":function(t,e,n){},eadf:function(t,e,n){"use strict";var a=n("fdc9"),s=n.n(a);s.a},fdc9:function(t,e,n){}});
//# sourceMappingURL=app.8285ee84.js.map