(window.webpackJsonp=window.webpackJsonp||[]).push([[14,16],{535:function(t,e,n){"use strict";var r=n(5),o=n(34),c=n(46),d=n(249),l=n(106),f=n(16),h=n(107).f,v=n(155).f,m=n(17).f,_=n(536).trim,I=r.Number,N=I,S=I.prototype,E="Number"==c(n(154)(S)),A="trim"in String.prototype,w=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=A?e.trim():_(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,d=e.slice(2),i=0,f=d.length;i<f;i++)if((code=d.charCodeAt(i))<48||code>o)return NaN;return parseInt(d,r)}}return+e};if(!I(" 0o1")||!I("0b1")||I("+0x1")){I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(E?f(function(){S.valueOf.call(n)}):"Number"!=c(n))?d(new N(w(e)),n,I):w(e)};for(var T,C=n(9)?h(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;C.length>y;y++)o(N,T=C[y])&&!o(I,T)&&m(I,T,v(N,T));I.prototype=S,S.constructor=I,n(18)(r,"Number",I)}},536:function(t,e,n){var r=n(8),o=n(33),c=n(16),d=n(537),l="["+d+"]",f=RegExp("^"+l+l+"*"),h=RegExp(l+l+"*$"),v=function(t,e,n){var o={},l=c(function(){return!!d[t]()||"​"!="​"[t]()}),f=o[t]=l?e(m):d[t];n&&(o[n]=f),r(r.P+r.F*l,"String",o)},m=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(h,"")),t};t.exports=v},537:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},539:function(t,e,n){"use strict";e.a={methods:{addScript:function(t,e){var script=document.createElement("script");script.onload=e||function(){console.info("Script Loaded: ".concat(t))},script.src=t,document.head.appendChild(script)}}}},541:function(t,e,n){},580:function(t,e,n){"use strict";var r=n(541);n.n(r).a},725:function(t,e,n){"use strict";n.r(e);n(535);var r=n(539),o=n(35),c=n(36),d=n(23),l=d.a;l=d.b;var f={mixins:[r.a],data:function(){return{date:new Date}},props:{buttonText:{default:"Add to Calendar",type:String},duration:{default:60,type:Number},title:{default:"Webinar Title",type:String},description:{default:"A default webinar description.",type:String},addEventScript:{default:"https://addevent.com/libs/atc/1.6.1/atc.min.js",type:String}},computed:{attendeeUUID:function(){return Object(c.c)("a")},graphqlApiUrl:function(){return"".concat(l.api_domain,"/graph")},attendeeQuery:function(){return'{\n        attendee(uuid:"'.concat(this.attendeeUUID,'"){\n            timeslot\n        }\n      }')},start:function(){return this.date.toISOString()},end:function(){return new Date(this.date.valueOf()+6e4*this.duration).toISOString()},localTimezone:function(){return Intl.DateTimeFormat().resolvedOptions().timeZone}},mounted:function(){this.addScript(this.addEventScript),this.getAttendeeTimeslotData().then(function(){addeventatc.refresh()})},methods:{getAttendeeTimeslotData:function(){var t=this;return new o.a("",this.graphqlApiUrl).sendQuery(this.attendeeQuery).then(function(e){var n=JSON.parse(e.request.response).data.attendee;t.date=new Date(n.timeslot)}).catch(function(e){console.error(e),t.date=new Date})}}},h=(n(580),n(2)),component=Object(h.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"addeventatc mv-btn--primary --small w-full lg_w-1/2",attrs:{"data-test":"webinars-addtocalendar-button"}},[t._v("\n  "+t._s(t.buttonText)+"\n  "),n("span",{staticClass:"addeventatc_icon"}),t._v(" "),n("span",{staticClass:"start"},[t._v(t._s(t.start))]),t._v(" "),n("span",{staticClass:"end"},[t._v(t._s(t.end))]),t._v(" "),n("span",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("span",{staticClass:"timezone"},[t._v(t._s(t.localTimezone))]),t._v(" "),n("span",{staticClass:"description"},[t._v(t._s(t.description))])])},[],!1,null,null,null);e.default=component.exports},833:function(t,e,n){"use strict";n.r(e);var r={props:["blok"],components:{AddToCalendarButton:n(725).default},computed:{duration:function(){return parseInt(this.blok.duration)}}},o=n(2),component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("add-to-calendar-button",{attrs:{"button-text":this.blok.button_text,duration:this.duration,title:this.blok.title,description:this.blok.description,domain:this.blok.domain,"add-event-script":this.blok.script}})],1)},[],!1,null,null,null);e.default=component.exports}}]);