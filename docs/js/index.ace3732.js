!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(w[e]&&g[e]){for(var n in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--v&&0===m&&k()}}(e,n),t&&t(e,n)};var n,r=!0,o="ace37320d05b2e32071c",i=1e4,a={},c=[],l=[];function u(e){var t=D[e];if(!t)return P;var r=function(r){return t.hot.active?(D[r]?-1===D[r].parents.indexOf(e)&&D[r].parents.push(e):(c=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),P(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(t){P[e]=t}}};for(var i in P)Object.prototype.hasOwnProperty.call(P,i)&&"e"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===s&&f("prepare"),m++,P.e(e).then(t,function(e){throw t(),e});function t(){m--,"prepare"===s&&(b[e]||_(e),0===m&&0===v&&k())}},r}var d=[],s="idle";function f(e){s=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var p,h,y,v=0,m=0,b={},g={},w={};function O(e){return+e+""===e?+e:e}function E(e){if("idle"!==s)throw new Error("check() is only allowed in idle status");return r=e,f("check"),(t=i,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=P.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return f("idle"),null;g={},b={},w=e.c,y=e.h,f("prepare");var t=new Promise(function(e,t){p={resolve:e,reject:t}});return h={},_(0),"prepare"===s&&0===m&&0===v&&k(),t});var t}function _(e){w[e]?(g[e]=!0,v++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=P.p+""+e+"."+o+".hot-update.js",t.appendChild(n)}(e)):b[e]=!0}function k(){f("ready");var e=p;if(p=null,e)if(r)Promise.resolve().then(function(){return j(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(O(n));e.resolve(t)}}function j(t){if("ready"!==s)throw new Error("apply() is only allowed in ready status");var n,r,i,l,u;function d(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,a=o.chain;if((l=D[i])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(l.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var c=0;c<l.parents.length;c++){var u=l.parents[c],d=D[u];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([u]),moduleId:i,parentId:u};-1===t.indexOf(u)&&(d.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),p(n[u],[i])):(delete n[u],t.push(u),r.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var v={},m=[],b={},g=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var E in h)if(Object.prototype.hasOwnProperty.call(h,E)){var _;u=O(E);var k=!1,j=!1,x=!1,I="";switch((_=h[E]?d(u):{type:"disposed",moduleId:E}).chain&&(I="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(k=new Error("Aborted because of self decline: "+_.moduleId+I));break;case"declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(k=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+I));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(_),t.ignoreUnaccepted||(k=new Error("Aborted because "+u+" is not accepted"+I));break;case"accepted":t.onAccepted&&t.onAccepted(_),j=!0;break;case"disposed":t.onDisposed&&t.onDisposed(_),x=!0;break;default:throw new Error("Unexception type "+_.type)}if(k)return f("abort"),Promise.reject(k);if(j)for(u in b[u]=h[u],p(m,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,u)&&(v[u]||(v[u]=[]),p(v[u],_.outdatedDependencies[u]));x&&(p(m,[_.moduleId]),b[u]=g)}var H,A=[];for(r=0;r<m.length;r++)u=m[r],D[u]&&D[u].hot._selfAccepted&&A.push({module:u,errorHandler:D[u].hot._selfAccepted});f("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var T,M,z=m.slice();z.length>0;)if(u=z.pop(),l=D[u]){var S={},C=l.hot._disposeHandlers;for(i=0;i<C.length;i++)(n=C[i])(S);for(a[u]=S,l.hot.active=!1,delete D[u],delete v[u],i=0;i<l.children.length;i++){var U=D[l.children[i]];U&&(H=U.parents.indexOf(u))>=0&&U.parents.splice(H,1)}}for(u in v)if(Object.prototype.hasOwnProperty.call(v,u)&&(l=D[u]))for(M=v[u],i=0;i<M.length;i++)T=M[i],(H=l.children.indexOf(T))>=0&&l.children.splice(H,1);for(u in f("apply"),o=y,b)Object.prototype.hasOwnProperty.call(b,u)&&(e[u]=b[u]);var q=null;for(u in v)if(Object.prototype.hasOwnProperty.call(v,u)&&(l=D[u])){M=v[u];var R=[];for(r=0;r<M.length;r++)if(T=M[r],n=l.hot._acceptedDependencies[T]){if(-1!==R.indexOf(n))continue;R.push(n)}for(r=0;r<R.length;r++){n=R[r];try{n(M)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:u,dependencyId:M[r],error:e}),t.ignoreErrored||q||(q=e)}}}for(r=0;r<A.length;r++){var N=A[r];u=N.module,c=[u];try{P(u)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:n,originalError:e}),t.ignoreErrored||q||(q=n),q||(q=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:u,error:e}),t.ignoreErrored||q||(q=e)}}return q?(f("fail"),Promise.reject(q)):(f("idle"),new Promise(function(e){e(m)}))}var D={};function P(t){if(D[t])return D[t].exports;var r=D[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:E,apply:j,status:function(e){if(!e)return s;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:a[e]};return n=void 0,t}(t),parents:(l=c,c=[],l),children:[]};return e[t].call(r.exports,r,r.exports,u(t)),r.l=!0,r.exports}P.m=e,P.c=D,P.d=function(e,t,n){P.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},P.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},P.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(t,"a",t),t},P.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},P.p="",P.h=function(){return o},u(1)(P.s=1)}([function(e,t){e.exports=library},function(e,t,n){"use strict";var r,o,i,a,c,l,u,d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=y(n(2)),f=y(n(3)),p=n(4),h=n(5);function y(e){return e&&e.__esModule?e:{default:e}}function v(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function w(e,t,n,r,o){var i={};return Object.keys(r).forEach(function(e){i[e]=r[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}n(7),n(9);var O=document.getElementById("app"),E=(0,p.observer)((o=function(e){function t(){var e,n,r;m(this,t);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return n=r=b(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),v(r,"date",i,r),b(r,n)}return g(t,s.default.Component),d(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},1e3)}},{key:"tick",value:function(){this.date=new Date}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){return s.default.createElement("div",null,this.date.toLocaleTimeString())}}]),t}(),i=w(o.prototype,"date",[h.observable],{enumerable:!0,initializer:function(){return new Date}}),w(o.prototype,"tick",[h.action],Object.getOwnPropertyDescriptor(o.prototype,"tick"),o.prototype),r=o))||r,_=localStorage.getItem("tasks"),k=(0,p.observer)((c=function(e){function t(e){m(this,t);var n=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return v(n,"curTask",l,n),v(n,"tasks",u,n),n.handleChange=function(e){n.curTask=e.target.value},n.addTask=function(){var e=n.curTask,t=n.tasks;e&&(t=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t),[e]),localStorage.setItem("tasks",JSON.stringify(t)),n.curTask="",n.tasks=t)},n}return g(t,s.default.Component),d(t,[{key:"render",value:function(){var e=this.curTask,t=this.tasks;return s.default.createElement("div",null,s.default.createElement("h2",null,"我的任务"),s.default.createElement("div",null,s.default.createElement("input",{type:"text",placeholder:"输入任务",value:e,onChange:this.handleChange}),s.default.createElement("button",{onClick:this.addTask},"添加任务")),s.default.createElement("ul",{style:{listStyleType:"decimal"}},t.map(function(e,t){return s.default.createElement("li",{key:t},e)})))}}]),t}(),l=w(c.prototype,"curTask",[h.observable],{enumerable:!0,initializer:function(){return""}}),u=w(c.prototype,"tasks",[h.observable],{enumerable:!0,initializer:function(){return _?JSON.parse(_):[]}}),a=c))||a,j=function(e){return s.default.createElement("h1",null,"Hello, ",e.name," ",s.default.createElement(E,null))},D=["you are now ready to implement your client side application! Enjoy :-)😋😋😋😋😋","It's good to run react in webpack server.","Real-time to compiler the code."];f.default.render(s.default.createElement(function(){return s.default.createElement("div",null,s.default.createElement(j,{name:"Happy"}),s.default.createElement("b",null,"Congratulations"),s.default.createElement("ul",null,D.map(function(e,t){return s.default.createElement("li",{key:t},e)})),s.default.createElement("p",null,"Webpack entry of Index Page!"),s.default.createElement(k,null))},null),O),e.hot.accept()},function(e,t,n){e.exports=n(0)(1)},function(e,t,n){e.exports=n(0)(2)},function(e,t,n){e.exports=n(0)(8)},function(e,t,n){e.exports=n(0)(0)},,function(e,t){},,function(e,t){}]);
//# sourceMappingURL=index.ace3732.js.map