(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{587:function(t,e,n){},772:function(t,e,n){"use strict";var l=n(587);n.n(l).a},850:function(t,e,n){"use strict";n.r(e);var l={props:["blok"],computed:{wrapperClasses:function(){return[this.blok.classes]},itemClasses:function(){return[this.blok.item_classes]},listingType:function(){return[this.blok.type]}},data:function(){return{stories:[]}},mounted:function(){this.loadStories(this.blok.widget_code)},methods:{loadStories:function(t){var e=this;this.$axios({url:"/storyblok-api/widget",params:{widget_code:t},method:"get"}).then(function(t){var data=t.data;e.stories=data})}}},o=(n(772),n(2)),component=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"editable",rawName:"v-editable",value:t.blok,expression:"blok"}],class:t.wrapperClasses},[n("div",{staticClass:"mv-container"},[t.blok.header?n("h4",{staticClass:"mv-type--headline4 text-center mb-8"},[t._v("\n      "+t._s(t.blok.header)+"\n    ")]):t._e()]),t._v(" "),n("div",{staticClass:"mv-container testimonial-wrapper",class:t.listingType},t._l(t.stories,function(e){return n("div",{key:e.id,staticClass:"bp-testimony"},[n("article",{staticClass:"shadow rounded mb-10 lazyload"},[e.media.length>0?n("photo",{staticClass:"w-full rounded-t lazyload",attrs:{blok:{alt:e.title,image:e.media[0].url}}}):t._e(),t._v(" "),n("div",{staticClass:"contents py-8 px-10 md_mb-8 lg_mb-10"},[n("h3",{staticClass:"mv-type--headline6"},[t._v(t._s(e.title))]),t._v(" "),n("markdown",{staticClass:"mv-type--body1 mt-4 mb-6",attrs:{blok:{body:e.review}}}),t._v(" "),n("hr",{staticClass:"border-t border-grey-light my-6"}),t._v(" "),e.meta?n("h6",{staticClass:"mv-type--button-small"},[t._v("\n              "+t._s(e.meta.name)+"\n              ")]):t._e(),t._v(" "),e.meta.designation?n("p",{staticClass:"mv-type--caption mt-0"},[t._v("\n              "+t._s(e.meta.designation)+"\n              ")]):t._e()],1)],1)])}),0)])},[],!1,null,null,null);e.default=component.exports}}]);