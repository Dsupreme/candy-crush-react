(this["webpackJsonpcandy-crush-react"]=this["webpackJsonpcandy-crush-react"]||[]).push([[0],[,,,,,,,,,function(e,n,a){e.exports=a(17)},,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var r=a(0),t=a.n(r),o=a(3),c=a.n(o),l=(a(14),a(15),a(7)),i=a(4),s=a(5),u=a(1),d=a(8),y=a(6),f=(a(16),function(e){Object(d.a)(a,e);var n=Object(y.a)(a);function a(){var e;return Object(i.a)(this,a),(e=n.call(this)).candyTypes=[{candyColor:"red",icon:"r"},{candyColor:"green",icon:"g"},{candyColor:"blue",icon:"b"},{candyColor:"yellow",icon:"y"}],e.state={candyTypes:e.candyTypes,grid:e.createGrid()},e.leftClick=e.leftClick.bind(Object(u.a)(e)),e}return Object(s.a)(a,[{key:"createGrid",value:function(){var e=this;return Array.from(Array(10),(function(){return Array.from(Array(10),(function(){return Object.assign({},e.createCell())}))}))}},{key:"createCell",value:function(){return Object.assign({},this.candyTypes[Math.floor(3*Math.random())])}},{key:"leftClick",value:function(e,n){var a=this.state.grid,r=[],t=0;for(r.push([e,n]);t<r.length;){var o=(r=r.concat(this.findConnectedCandyCells(a,a[e][n],r[t][0],r[t][1]))).map(JSON.stringify),c=new Set(o);r=Array.from(c,JSON.parse),t++}if(this.checkCanBurst(r)){var i,s=Object(l.a)(r);try{for(s.s();!(i=s.n()).done;){var u=i.value;a[u[0]][u[1]]={}}}catch(d){s.e(d)}finally{s.f()}}else console.log("Cant burst");a=this.slideCandyDown(a),this.setState({grid:a})}},{key:"checkCanBurst",value:function(e){for(var n=0,a=0,r=0,t={},o={};a<=2&&r<=2&&n<e.length;)e[n][0]in t?(t[e[n][0]]+=1,a=Math.max(a,t[e[n][0]])):t[e[n][0]]=1,e[n][1]in o?(o[e[n][1]]+=1,r=Math.max(r,o[e[n][1]])):o[e[n][1]]=1,n++;return a>2||r>2}},{key:"findConnectedCandyCells",value:function(e,n,a,r){var t,o,c=[];return o=r,(t=a)-1>=0&&e[t-1][o].candyColor===n.candyColor&&c.push([t-1,o]),t+1<e.length&&e[t+1][o].candyColor===n.candyColor&&c.push([t+1,o]),o-1>=0&&e[t][o-1].candyColor===n.candyColor&&c.push([t,o-1]),o+1<e.length&&e[t][o+1].candyColor===n.candyColor&&c.push([t,o+1]),c}},{key:"slideCandyDown",value:function(e){for(var n=0;n<e.length;n++)for(var a=e.length-1;a>=0;a--){if(!("candyColor"in e[a][n])){for(var r=a;r>-1&&!("candyColor"in e[r][n]);)console.log(r),r--;r>-1&&(e[a][n]=Object.assign({},e[r][n]),e[r][n]={})}}return e}},{key:"render",value:function(){var e=this;return t.a.createElement("div",{className:"grid"},this.state.grid.map((function(n,a){return t.a.createElement("div",{className:"row",key:a},n.map((function(n,r){var o;n.icon&&(o=t.a.createElement("span",null,a,",",r,",",n.icon));var c=["cell",n.candyColor];return c=c.join(" "),t.a.createElement("div",{className:c,key:r,onClick:e.leftClick.bind(e,a,r)},o)})))})))}}]),a}(r.Component));var h=function(){return t.a.createElement("div",{className:"App"},t.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.bd4a6fcf.chunk.js.map