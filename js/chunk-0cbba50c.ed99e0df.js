(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cbba50c"],{"20f6":function(t,e,n){},"3c93":function(t,e,n){},"58df":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("2b0e");function a(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return i["a"].extend({mixins:e})}},6544:function(t,e){t.exports=function(t,e){var n="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var i in"function"===typeof t.exports&&(n.components=t.exports.options.components),n.components=n.components||{},e)n.components[i]=n.components[i]||e[i]}},7496:function(t,e,n){"use strict";var i=n("5530"),a=(n("df86"),n("7560")),r=n("58df");e["a"]=Object(r["a"])(a["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(t){var e=t("div",{staticClass:"v-application--wrap"},this.$slots["default"]);return t("div",{staticClass:"v-application",class:Object(i["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},7560:function(t,e,n){"use strict";n.d(e,"b",(function(){return r}));var i=n("5530"),a=n("2b0e");function r(t){var e=Object(i["a"])(Object(i["a"])({},t.props),t.injections),n=s.options.computed.isDark.call(e);return s.options.computed.themeClasses.call({isDark:n})}var s=a["a"].extend().extend({name:"themeable",provide:function(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data:function(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark:function(){return this.$vuetify.theme.dark||!1},isDark:function(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses:function(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark:function(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses:function(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler:function(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});e["a"]=s},"86d5":function(t,e,n){t.exports=n.p+"img/bg.756c639f.jpg"},"8ce9":function(t,e,n){},a523:function(t,e,n){"use strict";n("99af"),n("4de4"),n("b64b"),n("2ca0"),n("20f6"),n("4b85"),n("a15b"),n("498a");var i=n("2b0e");function a(t){return i["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var i=n.props,a=n.data,r=n.children;a.staticClass="".concat(t," ").concat(a.staticClass||"").trim();var s=a.attrs;if(s){a.attrs={};var o=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(a.staticClass+=" ".concat(o.join(" ")))}return i.id&&(a.domProps=a.domProps||{},a.domProps.id=i.id),e(i.tag,a,r)}})}var r=n("d9f7");e["a"]=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,i=e.props,a=e.data,s=e.children,o=a.attrs;return o&&(a.attrs={},n=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(a.domProps=a.domProps||{},a.domProps.id=i.id),t(i.tag,Object(r["a"])(a,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(n||[])}),s)}})},a52d:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("landing-core-app-bar"),n("landing-parallax",[n("landing-jumbotron",{attrs:{src:t.bg,opacity:"0.1"}},[n("v-container",{staticClass:"fill-height justify-center",staticStyle:{width:"100%"}},[n("v-row",{staticClass:"text-center",attrs:{align:"center",justify:"center"}},[t.$vuetify.breakpoint.mdAndUp?n("v-overlay",{style:t.styles,attrs:{opacity:"0.8"}}):t._e(),n("v-col",{staticClass:"mb-10"},[n("landing-heading",[n("span",{staticClass:"indigo--text"},[t._v("Fed")]),n("span",{staticClass:"red--text"},[t._v("Ex")])]),n("v-divider",{staticStyle:{"border-color":"white"}}),n("landing-sub-heading",[t._v(" ALPS Brasil ")])],1)],1)],1)],1)],1),n("router-view"),n("landing-footer"),n("UpdateAvailable")],1)},a=[],r=(n("d3b7"),{name:"Landing",components:{LandingCoreAppBar:function(){return Promise.all([n.e("chunk-024e5897"),n.e("chunk-4e6a6170")]).then(n.bind(null,"f62c"))},LandingParallax:function(){return n.e("chunk-2d21e41f").then(n.bind(null,"d591"))},LandingHeading:function(){return n.e("chunk-3d8fb6c2").then(n.bind(null,"3186"))},LandingSubHeading:function(){return n.e("chunk-b2d4f96e").then(n.bind(null,"aec9"))},LandingJumbotron:function(){return n.e("chunk-56e7597e").then(n.bind(null,"8484"))},LandingFooter:function(){return n.e("chunk-2abdbd18").then(n.bind(null,"84e9"))},UpdateAvailable:function(){return Promise.all([n.e("chunk-024e5897"),n.e("chunk-5111aa93")]).then(n.bind(null,"8d0a"))}},data:function(){return{bg:n("86d5"),title:"FEDEX"}},computed:{styles:function(){return this.$vuetify.breakpoint.mdAndUp?{height:"300px",marginTop:"15%",zIndex:-1}:{}}}}),s=r,o=n("2877"),c=n("6544"),u=n.n(c),l=n("7496"),d=n("62ad"),p=n("a523"),f=n("ce7e"),h=n("a797"),v=n("0fd9"),m=Object(o["a"])(s,i,a,!1,null,"b1528c62",null);e["default"]=m.exports;u()(m,{VApp:l["a"],VCol:d["a"],VContainer:p["a"],VDivider:f["a"],VOverlay:h["a"],VRow:v["a"]})},a797:function(t,e,n){"use strict";n("a9e3");var i=n("5530"),a=(n("3c93"),n("a9ad")),r=n("7560"),s=n("f2e7"),o=n("58df");e["a"]=Object(o["a"])(a["a"],r["a"],s["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(i["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots["default"])}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})},ce7e:function(t,e,n){"use strict";var i=n("5530"),a=(n("8ce9"),n("7560"));e["a"]=a["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(i["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(i["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},df86:function(t,e,n){},f2e7:function(t,e,n){"use strict";n.d(e,"b",(function(){return r}));var i=n("ade3"),a=n("2b0e");function r(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return a["a"].extend({name:"toggleable",model:{prop:e,event:n},props:Object(i["a"])({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},Object(i["a"])(t,e,(function(t){this.isActive=!!t})),Object(i["a"])(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(n,t)})),t)})}var s=r();e["a"]=s}}]);