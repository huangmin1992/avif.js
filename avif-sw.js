parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"XP93":[function(require,module,exports) {
!function(){const e=8,t=1718909296,n=1835365473,r=1768714083,i=1768977008,s=1768973167,o=1769173093,a=function(){const e=new Uint32Array([469762048,1887007846,1836020585,131072,1836020585,846164841,825520237,1140981760,1987014509,1811939328,1684567661,0,0,0,3892510720,704643072,256,1,0,0,256,0,0,0,256,0,0,0,64,0,0,0,0,0,0,33554432,3489726464,1801548404,1543503872,1684564852,50331648,0,0,16777216,0,704643072,0,0,0,0,256,0,0,0,256,0,0,0,64,32775,14340,1812004864,1634296941,536870912,1684563053,0,0,0,3227320320,3909287936,50261,553648128,1919706216,0,0,1701079414,0,0,0,16777216,1852402979,102,1752004116,100,1,0,0,1852400676,102,1701995548,102,0,1,1819440396,32,1,1651799011,108,1937011583,100,0,1,813064559,49,0,1,0,0,0,75499264,4718648,4718592,0,65536,0,0,0,0,0,0,0,0,16776984,1629028352,2168664438,167775240,11,3284118338,31915895,402653184,1937011827,0,16777216,16777216,3909287936,469762048,1668510835,0,16777216,16777216,16777216,16777216,335544320,2054386803,0,0,16777216,335544320,1868788851,0,16777216,1744961536,0,1952539757]);return new Uint8Array(e.buffer)}(),c=a.byteLength,f=568,u=608,d=234,l=437,h={},w={};let y=0;function g(e,t){if(!e)throw new Error(t)}function p(h){return function({width:t,height:n,data:r}){const i=c+r.byteLength,s=new ArrayBuffer(i),o=new DataView(s),h=new Uint8Array(s);return h.set(a),h.set(r,c),o.setUint32(f+e+4,r.byteLength),o.setUint32(u,r.byteLength+e),o.setUint32(d,t),o.setUint32(d+4,n),o.setUint16(l,t),o.setUint16(l+2,n),s}(function(a){function c(){const e=d.getUint8(h);return h+=1,e}function f(){const e=d.getUint16(h);return h+=2,e}function u(){const e=d.getUint32(h);return h+=4,e}const d=new DataView(a),l=a.byteLength;let h=0,w=!1,y=0,p=0,b=null;for(;h<l;){const d=u(),l=u(),U=h+d-e;switch(g(d>=e,"corrupted file"),l){case t:w=!0;break;case n:h+=1,h+=3;continue;case i:case s:continue;case o:h+=1,h+=3,y=u(),p=u();break;case r:h+=1,h+=3;const U=c(),v=U>>>4;g(v<8,"unsupported offset size");const m=15&U;g(m<8,"unsupported length size");const A=c()>>>4;g(A<8,"unsupported base offset size"),g(f()>=1,"bad iloc items number"),h+=2,h+=2;const L=4===A?u():0;h+=2;const B=4===v?u():0,E=4===m?u():0,k=L+B;b=new Uint8Array(a).subarray(k,k+E)}h=U}return g(w,"bad brands"),g(y&&p,"bad image width or height"),g(b,"picture data not found"),{width:y,height:p,data:b}}(h))}self.addEventListener("message",e=>{const t=e.data;if(t)if("avif-update"===t.type)skipWaiting();else if("avif-ready"===t.type){const t=e.source.id;h[t]?h[t].resolve():h[t]={ready:Promise.resolve(),resolve:null}}else if("avif-rgba"===t.type){const e=function(e,t,n){function r(e){f.setUint16(h,e,!0),h+=2}function i(e){f.setUint32(h,e,!0),h+=4}const s=3*Math.floor((32*t+31)/32),o=s*n,a=54+o,c=new ArrayBuffer(a),f=new DataView(c),u=new Uint32Array(e),d=3*t;let l=0,h=0,w=0;for(r(19778),i(a),h+=4,i(54),i(40),i(t),i(-n>>>0),r(1),r(24),i(0),i(o),i(2835),i(2835);w<n;){const e=54+w*s;let t=0;for(;t<d;){const n=u[l++],r=n>>8&65535,i=255&n;f.setUint16(e+t,r),f.setUint8(e+t+2,i),t+=3}w++}return c}(t.data,t.width,t.height),n=new Blob([e],{type:"image/bmp"}),r=new Response(n);w[t.id]&&w[t.id].resolve(r)}else"avif-error"===t.type&&w[t.id]&&w[t.id].reject(new Error(t.data))}),self.addEventListener("fetch",e=>{const t=e.clientId;if(e.request.url.match(/\.avif$/i)){if(!h[t]){let e=null,n=new Promise(t=>{e=t});h[t]={ready:n,resolve:e}}const n=y++;e.respondWith(new Promise((r,i)=>{w[n]={resolve:r,reject:i},clients.get(t).then(t=>(function(e,t,n){return fetch(t.url,{credentials:"same-origin"}).then(e=>e.arrayBuffer()).then(t=>{const r=p(t);h[n.id].ready.then(()=>{n.postMessage({id:e,type:"avif-mov",data:r},[r])})})})(n,e.request,t)).catch(i)}).then(e=>(delete w[n],e),e=>{throw delete w[n],e}))}})}();
},{}]},{},["XP93"], null)
//# sourceMappingURL=avif-sw.map