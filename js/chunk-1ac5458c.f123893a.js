(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ac5458c"],{"1b53":function(t,e,n){"use strict";var i=n("f657"),a=n.n(i);a.a},"58df":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("2b0e");function a(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return i["a"].extend({mixins:e})}},6544:function(t,e){t.exports=function(t,e){var n="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var i in"function"===typeof t.exports&&(n.components=t.exports.options.components),n.components=n.components||{},e)n.components[i]=n.components[i]||e[i]}},7560:function(t,e,n){"use strict";n.d(e,"b",(function(){return r}));var i=n("5530"),a=n("2b0e");function r(t){var e=Object(i["a"])(Object(i["a"])({},t.props),t.injections),n=o.options.computed.isDark.call(e);return o.options.computed.themeClasses.call({isDark:n})}var o=a["a"].extend().extend({name:"themeable",provide:function(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data:function(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark:function(){return this.$vuetify.theme.dark||!1},isDark:function(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses:function(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark:function(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses:function(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler:function(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});e["a"]=o},"81d6":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-main",{staticClass:"error-page",attrs:{align:"center","fill-height":""}},[n("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"auto"}},[n("h1",{staticClass:"font-weight-black mb-6"},[t._v(t._s(t.code))]),n("h4",{staticClass:"description white--text mb-12"},[t._v(t._s(t.text))]),n("v-btn",{attrs:{to:{name:"Home"},color:"primary"}},[t._v("Ir a Inicio")])],1)],1)],1)},a=[],r=(n("a9e3"),{name:"Error",props:{code:{type:[Number,String],default:404},text:{type:[String],default:"¡Oop! Al parecer estás perdido."}}}),o=r,s=(n("1b53"),n("2877")),c=n("6544"),u=n.n(c),d=n("8336"),p=n("62ad"),l=n("f6c4"),f=n("0fd9"),h=Object(s["a"])(o,i,a,!1,null,null,null);e["default"]=h.exports;u()(h,{VBtn:d["a"],VCol:p["a"],VMain:l["a"],VRow:f["a"]})},bd0c:function(t,e,n){},d10f:function(t,e,n){"use strict";var i=n("2b0e");e["a"]=i["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},f2e7:function(t,e,n){"use strict";n.d(e,"b",(function(){return r}));var i=n("ade3"),a=n("2b0e");function r(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return a["a"].extend({name:"toggleable",model:{prop:e,event:n},props:Object(i["a"])({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},Object(i["a"])(t,e,(function(t){this.isActive=!!t})),Object(i["a"])(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(n,t)})),t)})}var o=r();e["a"]=o},f657:function(t,e,n){},f6c4:function(t,e,n){"use strict";n("bd0c");var i=n("d10f");e["a"]=i["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,n=t.top,i=t.right,a=t.footer,r=t.insetFooter,o=t.bottom,s=t.left;return{paddingTop:"".concat(n+e,"px"),paddingRight:"".concat(i,"px"),paddingBottom:"".concat(a+r+o,"px"),paddingLeft:"".concat(s,"px")}}},render:function(t){var e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots["default"])])}})}}]);