(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{584:function(t,e,l){},594:function(t,e,l){"use strict";var o={name:"carousel_item",mixins:[l(25).a]},n=l(2),component=Object(n.a)(o,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{directives:[{name:"editable",rawName:"v-editable",value:t.blok,expression:"blok"}],staticClass:"item",class:t.wrapperClasses,style:t.wrapperStyle},[t._l(t.blok.image,function(t){return l(t.component,{key:t._uid,tag:"component",attrs:{blok:t}})}),t._v(" "),t.blok.title?l("div",{staticClass:"js-best__copy"},[l("p",{staticClass:"mv-type--headline6"},[t._v(t._s(t.blok.title))]),t._v(" "),l("p",{staticClass:"mv-type--caption"},[t._v(t._s(t.blok.subtitle))])]):t._e()],2)},[],!1,null,null,null);e.a=component.exports},769:function(t,e,l){"use strict";var o=l(584);l.n(o).a},845:function(t,e,l){"use strict";l.r(e);l(156);var o=l(25),n=l(594),r={mixins:[o.a],components:{carousel_item:n.a},head:{script:[{src:"https://code.jquery.com/jquery-3.4.1.min.js"},{src:"https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"}]},mounted:function(){$(".owl-carousel").owlCarousel(this.carouselOptions)},computed:{carouselOptions:function(){return this.blok.options.match(/{/)?JSON.parse(this.blok.options):{}}}},c=(l(769),l(2)),component=Object(c.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"editable",rawName:"v-editable",value:this.blok,expression:"blok"}],staticClass:"mv-carousel owl-carousel owl-theme",class:this.wrapperClasses,style:this.wrapperStyle,attrs:{id:"js-best"}},this._l(this.blok.items,function(t){return e(t.component,{key:t._uid,tag:"component",attrs:{blok:t}})}),1)},[],!1,null,null,null);e.default=component.exports}}]);