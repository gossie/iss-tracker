(this["webpackJsonpiss-tracker"]=this["webpackJsonpiss-tracker"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/world.36a980a1.png"},function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(3),l=a.n(r),c=(a(10),a(1));function s(e){return i.a.createElement("div",{className:"tile is-parent is-4"},i.a.createElement("div",{className:"tile is-child box"},i.a.createElement("div",{id:"latitude"},i.a.createElement("span",{className:"label"},"Latitude:"),i.a.createElement("span",null,e.position.latitude)),i.a.createElement("div",{id:"longitude"},i.a.createElement("span",{className:"label"},"Longitude:"),i.a.createElement("span",null,e.position.longitude)),i.a.createElement("div",null,i.a.createElement("span",{className:"label"},"Zeit:"),i.a.createElement("span",null,(new Date).toString()))))}var o=a(4),u=a.n(o);function m(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){var a=t.current,n=a.getContext("2d");a.width=350,a.height=180;var i=165,r=115,l={x:i+e.position.longitude/180*i,y:r-e.position.latitude/90*r};l.x=l.x>a.width?a.width:l.x,l.y=l.y>a.height?a.height:l.y;var c=new Image;c.src=u.a,c.onload=function(){n.drawImage(c,0,0),n.beginPath(),n.arc(l.x,l.y,7,0,2*Math.PI),n.fill()}})),i.a.createElement("div",{className:"tile is-parent"},i.a.createElement("div",{className:"tile is-child box"},i.a.createElement("canvas",{ref:t})))}function d(e){var t=function(){var e=Object(n.useState)(5),t=Object(c.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){var e=a>0?a-1:0,t=setTimeout((function(){return i(e)}),1e3);return function(){return clearTimeout(t)}})),a}();return i.a.createElement("div",{className:"tile is-parent"},i.a.createElement("div",{className:"tile is-child box is-size-2 has-text-centered"},i.a.createElement("div",{id:"counter"},t>0?t:"Lift off")))}a(11);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement((function(){var e=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){fetch("https://api.wheretheiss.at/v1/satellites/25544").then((function(e){return e.json()})).then((function(e){return i({latitude:e.latitude,longitude:e.longitude,timestamp:e.timestamp})}))}),5e3);return function(){return clearTimeout(e)}})),a}();return i.a.createElement("div",null,i.a.createElement("h1",{className:"title is-1"},"ISS tracker"),i.a.createElement("div",{className:"tile is-ancestor"},i.a.createElement("div",{className:"tile is-parent"},e?i.a.createElement(i.a.Fragment,null,i.a.createElement(s,{position:e}),i.a.createElement(m,{position:e})):i.a.createElement(d,null))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.e2b1d0b0.chunk.js.map