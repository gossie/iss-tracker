(this["webpackJsonpiss-tracker"]=this["webpackJsonpiss-tracker"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/world.36a980a1.png"},function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(3),r=a.n(l),c=(a(10),a(1));function s(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement("span",{className:"label"},"Latitude:"),i.a.createElement("span",null,e.position.latitude)),i.a.createElement("div",null,i.a.createElement("span",{className:"label"},"Longitude:"),i.a.createElement("span",null,e.position.longitude)),i.a.createElement("div",null,i.a.createElement("span",{className:"label"},"Zeit:"),i.a.createElement("span",null,(new Date).toString())))}var o=a(4),u=a.n(o);function m(e){return Object(n.useEffect)((function(){var t=document.getElementById("map"),a=t.getContext("2d");t.width=350,t.height=180;var n=175,i=90,l={x:n+e.position.longitude/180*n,y:i-e.position.latitude/90*i},r=new Image;r.src=u.a,r.onload=function(){a.drawImage(r,0,0),a.beginPath(),a.arc(l.x,l.y,7,0,2*Math.PI),a.fill()}})),i.a.createElement("canvas",{id:"map"})}function d(e){var t=function(){var e=Object(n.useState)(5),t=Object(c.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){var e=a>0?a-1:0,t=setTimeout((function(){return i(e)}),1e3);return function(){return clearTimeout(t)}})),a}();return i.a.createElement("div",null,t)}a(11);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement((function(){var e=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){fetch("https://api.wheretheiss.at/v1/satellites/25544").then((function(e){return e.json()})).then((function(e){return i({latitude:e.latitude,longitude:e.longitude,timestamp:e.timestamp})}))}),5e3);return function(){return clearTimeout(e)}})),a}();return i.a.createElement("div",null,i.a.createElement("h1",{className:"title is-1"},"ISS tracker"),i.a.createElement("div",{className:"tile is-ancestor"},i.a.createElement("div",{className:"tile is-parent"},e?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"tile is-parent is-4"},i.a.createElement("div",{className:"tile is-child box"},i.a.createElement(s,{position:e}))),i.a.createElement("div",{className:"tile is-parent"},i.a.createElement("div",{className:"tile is-child box"},i.a.createElement(m,{position:e})))):i.a.createElement("div",{className:"tile is-parent"},i.a.createElement("div",{className:"tile is-child box is-size-2 has-text-centered"},i.a.createElement(d,null))))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.d8433490.chunk.js.map