(this.webpackJsonpapod=this.webpackJsonpapod||[]).push([[0],{26:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),s=n.n(a),i=n(17),r=n.n(i),o=(n(26),n(8)),l=n(2);function j(){return Object(c.jsx)("div",{className:"home",children:Object(c.jsx)(o.b,{to:"/nasaphoto",className:"home-link",children:"See into the stars!"})})}function d(){return Object(c.jsx)("div",{className:"navbar",children:Object(c.jsx)("ul",{children:Object(c.jsx)(o.b,{className:"link",to:"/",children:"Take me home"})})})}var h=n(14),p=n.n(h),u=n(19),b=n(20),x=n.p+"static/media/spin_wheel.0d136611.gif";function m(){return Object(c.jsx)("img",{src:x,alt:"Loading Api"})}n(33).config();var O="oiqN4djbVc7s2k0mQeIxzdvUvzxFx27eSXLa4cgm";function f(){var e=Object(a.useState)(null),t=Object(b.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat(O));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(n),console.log(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(d,{}),Object(c.jsxs)("div",{className:"nasa-photo",children:["image"===n.media_type?Object(c.jsx)("img",{className:"photo",src:n.url,alt:n.title}):Object(c.jsx)("iframe",{title:"space-video",src:n.url,frameBorder:"0",gesture:"media",allow:"encrypted-media",allowFullScreen:!0,className:"photo"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:n.title}),Object(c.jsx)("p",{className:"date",children:n.date}),Object(c.jsxs)("p",{className:"explanation",children:[n.explanation," "]})]})]})]}):Object(c.jsxs)(c.Fragment,{children:[" ",Object(c.jsx)(d,{})," ",Object(c.jsxs)("div",{className:"loading-wheel",children:[" ",Object(c.jsx)(m,{})," "]})," "]})}n(36);var g=function(){return Object(c.jsx)(o.a,{children:Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(l.a,{component:j,path:"/",exact:!0}),Object(c.jsx)(l.a,{component:f,path:"/nasaphoto"})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),v()}},[[37,1,2]]]);
//# sourceMappingURL=main.e271f3ec.chunk.js.map