(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{814:function(e,o,n){"use strict";n.r(o);var t={mixins:[n(25).a],computed:{dropdownVisible:function(){return this.debugDropdown||this.blok.hasOwnProperty("_editable")||this.$store.state.dropdown.toggled},debugDropdown:function(){return Boolean(this.$route.query.dropdown)}}},r=n(2),component=Object(r.a)(t,function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{directives:[{name:"editable",rawName:"v-editable",value:e.blok,expression:"blok"}],class:e.wrapperClasses,style:e.wrapperStyle},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.dropdownVisible,expression:"dropdownVisible"}]},e._l(e.blok.dropdown_content,function(e){return n(e.component,{key:e._uid,tag:"component",attrs:{blok:e}})}),1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.dropdownVisible,expression:"!dropdownVisible"}]},e._l(e.blok.pre_dropdown_content,function(e){return n(e.component,{key:e._uid,tag:"component",attrs:{blok:e}})}),1)])},[],!1,null,null,null);o.default=component.exports}}]);