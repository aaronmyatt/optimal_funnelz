(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{585:function(t,e,l){},770:function(t,e,l){"use strict";var n=l(585);l.n(n).a},846:function(t,e,l){"use strict";l.r(e);l(13);var n=l(25),r=l(153),o={mixins:[n.a,r.a],computed:{wrapperStyle:function(){return{background:this.blok.background_image?" url(".concat(this.fetchUrl(this.blok.background_image),") ").concat(this.backgroundStyle):""}},wrapperClass:function(){return[slugify(this.blok.name),this.blok.classes,{"pb-navigable":this.blok.navigable}]},backgroundStyle:function(){return this.blok.background_style?this.blok.background_style:"top center / cover no-repeat"}}},c=(l(770),l(2)),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{directives:[{name:"editable",rawName:"v-editable",value:t.blok,expression:"blok"}],staticClass:"item-wrapper",class:t.blok.classes,style:t.wrapperStyle,attrs:{"data-name":t.blok.name}},[l("div",{staticClass:"flex-container"},[l("LazyImage",{staticClass:"flex-item",attrs:{blok:{src:t.blok.image1}}}),t._v(" "),l("LazyImage",{staticClass:"flex-item",attrs:{blok:{src:t.blok.image2}}}),t._v(" "),l("LazyImage",{staticClass:"flex-item",attrs:{blok:{src:t.blok.image3}}})],1)])},[],!1,null,"7e3008a5",null);e.default=component.exports}}]);