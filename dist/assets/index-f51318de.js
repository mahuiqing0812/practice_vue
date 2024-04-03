import{h as yt,i as D,m as Rt,U as Gt,o as k,b as J,e as C,w as y,g as E,t as U,u as S,k as F,c as nt,J as At,j as G,q as Lt,V as Qt,N as Nt,W as Wt,X as Zt,a as M,p as Xt,f as te,Y as ee,_ as ne,Z as oe,$ as re,a0 as ie,d as St,F as Tt,l as se}from"./index-296b56b3.js";var Z={},le=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Dt={},R={};let Ct;const ae=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];R.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};R.getSymbolTotalCodewords=function(t){return ae[t]};R.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};R.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');Ct=t};R.isKanjiModeEnabled=function(){return typeof Ct<"u"};R.toSJIS=function(t){return Ct(t)};var it={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,n){if(e.isValid(r))return r;try{return t(r)}catch{return n}}})(it);function Ut(){this.buffer=[],this.length=0}Ut.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var ue=Ut;function X(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}X.prototype.set=function(e,t,i,r){const n=e*this.size+t;this.data[n]=i,r&&(this.reservedBit[n]=!0)};X.prototype.get=function(e,t){return this.data[e*this.size+t]};X.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};X.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var ce=X,Ft={};(function(e){const t=R.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const n=Math.floor(r/7)+2,o=t(r),s=o===145?26:Math.ceil((o-13)/(2*n-2))*2,a=[o-7];for(let l=1;l<n-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},e.getPositions=function(r){const n=[],o=e.getRowColCoords(r),s=o.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||n.push([o[a],o[l]]);return n}})(Ft);var kt={};const de=R.getSymbolSize,vt=7;kt.getPositions=function(t){const i=de(t);return[[0,0],[i-vt,0],[0,i-vt]]};var zt={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(n){return n!=null&&n!==""&&!isNaN(n)&&n>=0&&n<=7},e.from=function(n){return e.isValid(n)?parseInt(n,10):void 0},e.getPenaltyN1=function(n){const o=n.size;let s=0,a=0,l=0,c=null,u=null;for(let B=0;B<o;B++){a=l=0,c=u=null;for(let p=0;p<o;p++){let g=n.get(B,p);g===c?a++:(a>=5&&(s+=t.N1+(a-5)),c=g,a=1),g=n.get(p,B),g===u?l++:(l>=5&&(s+=t.N1+(l-5)),u=g,l=1)}a>=5&&(s+=t.N1+(a-5)),l>=5&&(s+=t.N1+(l-5))}return s},e.getPenaltyN2=function(n){const o=n.size;let s=0;for(let a=0;a<o-1;a++)for(let l=0;l<o-1;l++){const c=n.get(a,l)+n.get(a,l+1)+n.get(a+1,l)+n.get(a+1,l+1);(c===4||c===0)&&s++}return s*t.N2},e.getPenaltyN3=function(n){const o=n.size;let s=0,a=0,l=0;for(let c=0;c<o;c++){a=l=0;for(let u=0;u<o;u++)a=a<<1&2047|n.get(c,u),u>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|n.get(u,c),u>=10&&(l===1488||l===93)&&s++}return s*t.N3},e.getPenaltyN4=function(n){let o=0;const s=n.data.length;for(let l=0;l<s;l++)o+=n.data[l];return Math.abs(Math.ceil(o*100/s/5)-10)*t.N4};function i(r,n,o){switch(r){case e.Patterns.PATTERN000:return(n+o)%2===0;case e.Patterns.PATTERN001:return n%2===0;case e.Patterns.PATTERN010:return o%3===0;case e.Patterns.PATTERN011:return(n+o)%3===0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(o/3))%2===0;case e.Patterns.PATTERN101:return n*o%2+n*o%3===0;case e.Patterns.PATTERN110:return(n*o%2+n*o%3)%2===0;case e.Patterns.PATTERN111:return(n*o%3+(n+o)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(n,o){const s=o.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)o.isReserved(l,a)||o.xor(l,a,i(n,l,a))},e.getBestMask=function(n,o){const s=Object.keys(e.Patterns).length;let a=0,l=1/0;for(let c=0;c<s;c++){o(c),e.applyMask(c,n);const u=e.getPenaltyN1(n)+e.getPenaltyN2(n)+e.getPenaltyN3(n)+e.getPenaltyN4(n);e.applyMask(c,n),u<l&&(l=u,a=c)}return a}})(zt);var st={};const H=it,tt=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],et=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];st.getBlocksCount=function(t,i){switch(i){case H.L:return tt[(t-1)*4+0];case H.M:return tt[(t-1)*4+1];case H.Q:return tt[(t-1)*4+2];case H.H:return tt[(t-1)*4+3];default:return}};st.getTotalCodewordsCount=function(t,i){switch(i){case H.L:return et[(t-1)*4+0];case H.M:return et[(t-1)*4+1];case H.Q:return et[(t-1)*4+2];case H.H:return et[(t-1)*4+3];default:return}};var Vt={},lt={};const Q=new Uint8Array(512),ot=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)Q[i]=t,ot[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)Q[i]=Q[i-255]})();lt.log=function(t){if(t<1)throw new Error("log("+t+")");return ot[t]};lt.exp=function(t){return Q[t]};lt.mul=function(t,i){return t===0||i===0?0:Q[ot[t]+ot[i]]};(function(e){const t=lt;e.mul=function(r,n){const o=new Uint8Array(r.length+n.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<n.length;a++)o[s+a]^=t.mul(r[s],n[a]);return o},e.mod=function(r,n){let o=new Uint8Array(r);for(;o.length-n.length>=0;){const s=o[0];for(let l=0;l<n.length;l++)o[l]^=t.mul(n[l],s);let a=0;for(;a<o.length&&o[a]===0;)a++;o=o.slice(a)}return o},e.generateECPolynomial=function(r){let n=new Uint8Array([1]);for(let o=0;o<r;o++)n=e.mul(n,new Uint8Array([1,t.exp(o)]));return n}})(Vt);const Ot=Vt;function Et(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}Et.prototype.initialize=function(t){this.degree=t,this.genPoly=Ot.generateECPolynomial(this.degree)};Et.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const r=Ot.mod(i,this.genPoly),n=this.degree-r.length;if(n>0){const o=new Uint8Array(this.degree);return o.set(r,n),o}return r};var fe=Et,Ht={},K={},Bt={};Bt.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var V={};const Kt="[0-9]+",ge="[A-Z $%*+\\-./:]+";let W="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";W=W.replace(/u/g,"\\u");const he="(?:(?![A-Z0-9 $%*+\\-./:]|"+W+`)(?:.|[\r
]))+`;V.KANJI=new RegExp(W,"g");V.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");V.BYTE=new RegExp(he,"g");V.NUMERIC=new RegExp(Kt,"g");V.ALPHANUMERIC=new RegExp(ge,"g");const me=new RegExp("^"+W+"$"),pe=new RegExp("^"+Kt+"$"),_e=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");V.testKanji=function(t){return me.test(t)};V.testNumeric=function(t){return pe.test(t)};V.testAlphanumeric=function(t){return _e.test(t)};(function(e){const t=Bt,i=V;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(o,s){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?o.ccBits[0]:s<27?o.ccBits[1]:o.ccBits[2]},e.getBestModeForData=function(o){return i.testNumeric(o)?e.NUMERIC:i.testAlphanumeric(o)?e.ALPHANUMERIC:i.testKanji(o)?e.KANJI:e.BYTE},e.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},e.isValid=function(o){return o&&o.bit&&o.ccBits};function r(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+n)}}e.from=function(o,s){if(e.isValid(o))return o;try{return r(o)}catch{return s}}})(K);(function(e){const t=R,i=st,r=it,n=K,o=Bt,s=7973,a=t.getBCHDigit(s);function l(p,g,m){for(let w=1;w<=40;w++)if(g<=e.getCapacity(w,m,p))return w}function c(p,g){return n.getCharCountIndicator(p,g)+4}function u(p,g){let m=0;return p.forEach(function(w){const I=c(w.mode,g);m+=I+w.getBitsLength()}),m}function B(p,g){for(let m=1;m<=40;m++)if(u(p,m)<=e.getCapacity(m,g,n.MIXED))return m}e.from=function(g,m){return o.isValid(g)?parseInt(g,10):m},e.getCapacity=function(g,m,w){if(!o.isValid(g))throw new Error("Invalid QR Code version");typeof w>"u"&&(w=n.BYTE);const I=t.getSymbolTotalCodewords(g),d=i.getTotalCodewordsCount(g,m),_=(I-d)*8;if(w===n.MIXED)return _;const h=_-c(w,g);switch(w){case n.NUMERIC:return Math.floor(h/10*3);case n.ALPHANUMERIC:return Math.floor(h/11*2);case n.KANJI:return Math.floor(h/13);case n.BYTE:default:return Math.floor(h/8)}},e.getBestVersionForData=function(g,m){let w;const I=r.from(m,r.M);if(Array.isArray(g)){if(g.length>1)return B(g,I);if(g.length===0)return 1;w=g[0]}else w=g;return l(w.mode,w.getLength(),I)},e.getEncodedBits=function(g){if(!o.isValid(g)||g<7)throw new Error("Invalid QR Code version");let m=g<<12;for(;t.getBCHDigit(m)-a>=0;)m^=s<<t.getBCHDigit(m)-a;return g<<12|m}})(Ht);var Jt={};const ht=R,qt=1335,we=21522,Mt=ht.getBCHDigit(qt);Jt.getEncodedBits=function(t,i){const r=t.bit<<3|i;let n=r<<10;for(;ht.getBCHDigit(n)-Mt>=0;)n^=qt<<ht.getBCHDigit(n)-Mt;return(r<<10|n)^we};var $t={};const ye=K;function $(e){this.mode=ye.NUMERIC,this.data=e.toString()}$.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};$.prototype.getLength=function(){return this.data.length};$.prototype.getBitsLength=function(){return $.getBitsLength(this.data.length)};$.prototype.write=function(t){let i,r,n;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),n=parseInt(r,10),t.put(n,10);const o=this.data.length-i;o>0&&(r=this.data.substr(i),n=parseInt(r,10),t.put(n,o*3+1))};var Ce=$;const Ee=K,ut=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Y(e){this.mode=Ee.ALPHANUMERIC,this.data=e}Y.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};Y.prototype.getLength=function(){return this.data.length};Y.prototype.getBitsLength=function(){return Y.getBitsLength(this.data.length)};Y.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let r=ut.indexOf(this.data[i])*45;r+=ut.indexOf(this.data[i+1]),t.put(r,11)}this.data.length%2&&t.put(ut.indexOf(this.data[i]),6)};var Be=Y,be=function(t){for(var i=[],r=t.length,n=0;n<r;n++){var o=t.charCodeAt(n);if(o>=55296&&o<=56319&&r>n+1){var s=t.charCodeAt(n+1);s>=56320&&s<=57343&&(o=(o-55296)*1024+s-56320+65536,n+=1)}if(o<128){i.push(o);continue}if(o<2048){i.push(o>>6|192),i.push(o&63|128);continue}if(o<55296||o>=57344&&o<65536){i.push(o>>12|224),i.push(o>>6&63|128),i.push(o&63|128);continue}if(o>=65536&&o<=1114111){i.push(o>>18|240),i.push(o>>12&63|128),i.push(o>>6&63|128),i.push(o&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const Ie=be,Ae=K;function j(e){this.mode=Ae.BYTE,typeof e=="string"&&(e=Ie(e)),this.data=new Uint8Array(e)}j.getBitsLength=function(t){return t*8};j.prototype.getLength=function(){return this.data.length};j.prototype.getBitsLength=function(){return j.getBitsLength(this.data.length)};j.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var Ne=j;const Se=K,Te=R;function x(e){this.mode=Se.KANJI,this.data=e}x.getBitsLength=function(t){return t*13};x.prototype.getLength=function(){return this.data.length};x.prototype.getBitsLength=function(){return x.getBitsLength(this.data.length)};x.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=Te.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var ve=x,mt={},Me={get exports(){return mt},set exports(e){mt=e}};(function(e){var t={single_source_shortest_paths:function(i,r,n){var o={},s={};s[r]=0;var a=t.PriorityQueue.make();a.push(r,0);for(var l,c,u,B,p,g,m,w,I;!a.empty();){l=a.pop(),c=l.value,B=l.cost,p=i[c]||{};for(u in p)p.hasOwnProperty(u)&&(g=p[u],m=B+g,w=s[u],I=typeof s[u]>"u",(I||w>m)&&(s[u]=m,a.push(u,m),o[u]=c))}if(typeof n<"u"&&typeof s[n]>"u"){var d=["Could not find a path from ",r," to ",n,"."].join("");throw new Error(d)}return o},extract_shortest_path_from_predecessor_list:function(i,r){for(var n=[],o=r;o;)n.push(o),i[o],o=i[o];return n.reverse(),n},find_path:function(i,r,n){var o=t.single_source_shortest_paths(i,r,n);return t.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(i){var r=t.PriorityQueue,n={},o;i=i||{};for(o in r)r.hasOwnProperty(o)&&(n[o]=r[o]);return n.queue=[],n.sorter=i.sorter||r.default_sorter,n},default_sorter:function(i,r){return i.cost-r.cost},push:function(i,r){var n={value:i,cost:r};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Me);(function(e){const t=K,i=Ce,r=Be,n=Ne,o=ve,s=V,a=R,l=mt;function c(d){return unescape(encodeURIComponent(d)).length}function u(d,_,h){const f=[];let A;for(;(A=d.exec(h))!==null;)f.push({data:A[0],index:A.index,mode:_,length:A[0].length});return f}function B(d){const _=u(s.NUMERIC,t.NUMERIC,d),h=u(s.ALPHANUMERIC,t.ALPHANUMERIC,d);let f,A;return a.isKanjiModeEnabled()?(f=u(s.BYTE,t.BYTE,d),A=u(s.KANJI,t.KANJI,d)):(f=u(s.BYTE_KANJI,t.BYTE,d),A=[]),_.concat(h,f,A).sort(function(T,P){return T.index-P.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function p(d,_){switch(_){case t.NUMERIC:return i.getBitsLength(d);case t.ALPHANUMERIC:return r.getBitsLength(d);case t.KANJI:return o.getBitsLength(d);case t.BYTE:return n.getBitsLength(d)}}function g(d){return d.reduce(function(_,h){const f=_.length-1>=0?_[_.length-1]:null;return f&&f.mode===h.mode?(_[_.length-1].data+=h.data,_):(_.push(h),_)},[])}function m(d){const _=[];for(let h=0;h<d.length;h++){const f=d[h];switch(f.mode){case t.NUMERIC:_.push([f,{data:f.data,mode:t.ALPHANUMERIC,length:f.length},{data:f.data,mode:t.BYTE,length:f.length}]);break;case t.ALPHANUMERIC:_.push([f,{data:f.data,mode:t.BYTE,length:f.length}]);break;case t.KANJI:_.push([f,{data:f.data,mode:t.BYTE,length:c(f.data)}]);break;case t.BYTE:_.push([{data:f.data,mode:t.BYTE,length:c(f.data)}])}}return _}function w(d,_){const h={},f={start:{}};let A=["start"];for(let b=0;b<d.length;b++){const T=d[b],P=[];for(let z=0;z<T.length;z++){const L=T[z],N=""+b+z;P.push(N),h[N]={node:L,lastCount:0},f[N]={};for(let q=0;q<A.length;q++){const O=A[q];h[O]&&h[O].node.mode===L.mode?(f[O][N]=p(h[O].lastCount+L.length,L.mode)-p(h[O].lastCount,L.mode),h[O].lastCount+=L.length):(h[O]&&(h[O].lastCount=L.length),f[O][N]=p(L.length,L.mode)+4+t.getCharCountIndicator(L.mode,_))}}A=P}for(let b=0;b<A.length;b++)f[A[b]].end=0;return{map:f,table:h}}function I(d,_){let h;const f=t.getBestModeForData(d);if(h=t.from(_,f),h!==t.BYTE&&h.bit<f.bit)throw new Error('"'+d+'" cannot be encoded with mode '+t.toString(h)+`.
 Suggested mode is: `+t.toString(f));switch(h===t.KANJI&&!a.isKanjiModeEnabled()&&(h=t.BYTE),h){case t.NUMERIC:return new i(d);case t.ALPHANUMERIC:return new r(d);case t.KANJI:return new o(d);case t.BYTE:return new n(d)}}e.fromArray=function(_){return _.reduce(function(h,f){return typeof f=="string"?h.push(I(f,null)):f.data&&h.push(I(f.data,f.mode)),h},[])},e.fromString=function(_,h){const f=B(_,a.isKanjiModeEnabled()),A=m(f),b=w(A,h),T=l.find_path(b.map,"start","end"),P=[];for(let z=1;z<T.length-1;z++)P.push(b.table[T[z]].node);return e.fromArray(g(P))},e.rawSplit=function(_){return e.fromArray(B(_,a.isKanjiModeEnabled()))}})($t);const at=R,ct=it,Pe=ue,Re=ce,Le=Ft,De=kt,pt=zt,_t=st,Ue=fe,rt=Ht,Fe=Jt,ke=K,dt=$t;function ze(e,t){const i=e.size,r=De.getPositions(t);for(let n=0;n<r.length;n++){const o=r[n][0],s=r[n][1];for(let a=-1;a<=7;a++)if(!(o+a<=-1||i<=o+a))for(let l=-1;l<=7;l++)s+l<=-1||i<=s+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?e.set(o+a,s+l,!0,!0):e.set(o+a,s+l,!1,!0))}}function Ve(e){const t=e.size;for(let i=8;i<t-8;i++){const r=i%2===0;e.set(i,6,r,!0),e.set(6,i,r,!0)}}function Oe(e,t){const i=Le.getPositions(t);for(let r=0;r<i.length;r++){const n=i[r][0],o=i[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(n+s,o+a,!0,!0):e.set(n+s,o+a,!1,!0)}}function He(e,t){const i=e.size,r=rt.getEncodedBits(t);let n,o,s;for(let a=0;a<18;a++)n=Math.floor(a/3),o=a%3+i-8-3,s=(r>>a&1)===1,e.set(n,o,s,!0),e.set(o,n,s,!0)}function ft(e,t,i){const r=e.size,n=Fe.getEncodedBits(t,i);let o,s;for(o=0;o<15;o++)s=(n>>o&1)===1,o<6?e.set(o,8,s,!0):o<8?e.set(o+1,8,s,!0):e.set(r-15+o,8,s,!0),o<8?e.set(8,r-o-1,s,!0):o<9?e.set(8,15-o-1+1,s,!0):e.set(8,15-o-1,s,!0);e.set(r-8,8,1,!0)}function Ke(e,t){const i=e.size;let r=-1,n=i-1,o=7,s=0;for(let a=i-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!e.isReserved(n,a-l)){let c=!1;s<t.length&&(c=(t[s]>>>o&1)===1),e.set(n,a-l,c),o--,o===-1&&(s++,o=7)}if(n+=r,n<0||i<=n){n-=r,r=-r;break}}}function Je(e,t,i){const r=new Pe;i.forEach(function(l){r.put(l.mode.bit,4),r.put(l.getLength(),ke.getCharCountIndicator(l.mode,e)),l.write(r)});const n=at.getSymbolTotalCodewords(e),o=_t.getTotalCodewordsCount(e,t),s=(n-o)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let l=0;l<a;l++)r.put(l%2?17:236,8);return qe(r,e,t)}function qe(e,t,i){const r=at.getSymbolTotalCodewords(t),n=_t.getTotalCodewordsCount(t,i),o=r-n,s=_t.getBlocksCount(t,i),a=r%s,l=s-a,c=Math.floor(r/s),u=Math.floor(o/s),B=u+1,p=c-u,g=new Ue(p);let m=0;const w=new Array(s),I=new Array(s);let d=0;const _=new Uint8Array(e.buffer);for(let T=0;T<s;T++){const P=T<l?u:B;w[T]=_.slice(m,m+P),I[T]=g.encode(w[T]),m+=P,d=Math.max(d,P)}const h=new Uint8Array(r);let f=0,A,b;for(A=0;A<d;A++)for(b=0;b<s;b++)A<w[b].length&&(h[f++]=w[b][A]);for(A=0;A<p;A++)for(b=0;b<s;b++)h[f++]=I[b][A];return h}function $e(e,t,i,r){let n;if(Array.isArray(e))n=dt.fromArray(e);else if(typeof e=="string"){let c=t;if(!c){const u=dt.rawSplit(e);c=rt.getBestVersionForData(u,i)}n=dt.fromString(e,c||40)}else throw new Error("Invalid data");const o=rt.getBestVersionForData(n,i);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=o;else if(t<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const s=Je(t,i,n),a=at.getSymbolSize(t),l=new Re(a);return ze(l,t),Ve(l),Oe(l,t),ft(l,i,0),t>=7&&He(l,t),Ke(l,s),isNaN(r)&&(r=pt.getBestMask(l,ft.bind(null,l,i))),pt.applyMask(r,l),ft(l,i,r),{modules:l,version:t,errorCorrectionLevel:i,maskPattern:r,segments:n}}Dt.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let r=ct.M,n,o;return typeof i<"u"&&(r=ct.from(i.errorCorrectionLevel,ct.M),n=rt.from(i.version),o=pt.from(i.maskPattern),i.toSJISFunc&&at.setToSJISFunction(i.toSJISFunc)),$e(t,n,r,o)};var Yt={},bt={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+i);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(o){return[o,o]}))),r.length===6&&r.push("F","F");const n=parseInt(r.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const n=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,o=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:o,scale:o?4:s,margin:n,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,n){return n.width&&n.width>=r+n.margin*2?n.width/(r+n.margin*2):n.scale},e.getImageWidth=function(r,n){const o=e.getScale(r,n);return Math.floor((r+n.margin*2)*o)},e.qrToImageData=function(r,n,o){const s=n.modules.size,a=n.modules.data,l=e.getScale(s,o),c=Math.floor((s+o.margin*2)*l),u=o.margin*l,B=[o.color.light,o.color.dark];for(let p=0;p<c;p++)for(let g=0;g<c;g++){let m=(p*c+g)*4,w=o.color.light;if(p>=u&&g>=u&&p<c-u&&g<c-u){const I=Math.floor((p-u)/l),d=Math.floor((g-u)/l);w=B[a[I*s+d]?1:0]}r[m++]=w.r,r[m++]=w.g,r[m++]=w.b,r[m]=w.a}}})(bt);(function(e){const t=bt;function i(n,o,s){n.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(o,s,a){let l=a,c=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(c=r()),l=t.getOptions(l);const u=t.getImageWidth(o.modules.size,l),B=c.getContext("2d"),p=B.createImageData(u,u);return t.qrToImageData(p.data,o,l),i(B,c,u),B.putImageData(p,0,0),c},e.renderToDataURL=function(o,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const c=e.render(o,s,l),u=l.type||"image/png",B=l.rendererOpts||{};return c.toDataURL(u,B.quality)}})(Yt);var jt={};const Ye=bt;function Pt(e,t){const i=e.a/255,r=t+'="'+e.hex+'"';return i<1?r+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function gt(e,t,i){let r=e+t;return typeof i<"u"&&(r+=" "+i),r}function je(e,t,i){let r="",n=0,o=!1,s=0;for(let a=0;a<e.length;a++){const l=Math.floor(a%t),c=Math.floor(a/t);!l&&!o&&(o=!0),e[a]?(s++,a>0&&l>0&&e[a-1]||(r+=o?gt("M",l+i,.5+c+i):gt("m",n,0),n=0,o=!1),l+1<t&&e[a+1]||(r+=gt("h",s),s=0)):n++}return r}jt.render=function(t,i,r){const n=Ye.getOptions(i),o=t.modules.size,s=t.modules.data,a=o+n.margin*2,l=n.color.light.a?"<path "+Pt(n.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+Pt(n.color.dark,"stroke")+' d="'+je(s,o,n.margin)+'"/>',u='viewBox="0 0 '+a+" "+a+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+u+' shape-rendering="crispEdges">'+l+c+`</svg>
`;return typeof r=="function"&&r(null,p),p};const xe=le,wt=Dt,xt=Yt,Ge=jt;function It(e,t,i,r,n){const o=[].slice.call(arguments,1),s=o.length,a=typeof o[s-1]=="function";if(!a&&!xe())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(n=i,i=t,t=r=void 0):s===3&&(t.getContext&&typeof n>"u"?(n=r,r=void 0):(n=r,r=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=r=void 0):s===2&&!t.getContext&&(r=i,i=t,t=void 0),new Promise(function(l,c){try{const u=wt.create(i,r);l(e(u,t,r))}catch(u){c(u)}})}try{const l=wt.create(i,r);n(null,e(l,t,r))}catch(l){n(l)}}Z.create=wt.create;Z.toCanvas=It.bind(null,xt.render);Z.toDataURL=It.bind(null,xt.renderToDataURL);Z.toString=It.bind(null,function(e,t,i){return Ge.render(e,i)});const v=e=>(Xt("data-v-4f4baa44"),e=e(),te(),e),Qe=v(()=>E("div",{class:"detail"},"挂号详情",-1)),We={class:"top"},Ze={class:"tag"},Xe=v(()=>E("svg",{t:"1685933792381",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2389",width:"16",height:"16"},[E("path",{d:"M392.533333 806.4L85.333333 503.466667l59.733334-59.733334 247.466666 247.466667L866.133333 213.333333l59.733334 59.733334L392.533333 806.4z",fill:"#1afa29","p-id":"2390"})],-1)),tn=v(()=>E("div",{class:"right_info"},[E("img",{src:ee,alt:""}),E("div",{class:"info"},[E("p",null,"微信 关注 “北京114预约挂号”"),E("p",null,"“快速预约挂号”")])],-1)),en={class:"bottom"},nn={class:"left"},on=v(()=>E("div",{class:"cell-item"},"就诊人信息",-1)),rn=v(()=>E("div",{class:"cell-item"},"就诊日期",-1)),sn=v(()=>E("div",{class:"cell-item"},"就诊医院",-1)),ln=v(()=>E("div",{class:"cell-item"},"就诊科室",-1)),an=v(()=>E("div",{class:"cell-item"},"医生职称",-1)),un=v(()=>E("div",{class:"cell-item"},"医事服务费",-1)),cn={style:{color:"red"}},dn=v(()=>E("div",{class:"cell-item"},"挂号单号",-1)),fn=v(()=>E("div",{class:"cell-item"},"挂号时间",-1)),gn={key:0,class:"btn"},hn={class:"right"},mn=v(()=>E("div",{class:"card-header"},[E("span",null,"注意事项")],-1)),pn=v(()=>E("p",null,"1.请确认就诊人信息是否准确，若填写错误将无法取号就诊，损失由本人承担；",-1)),_n={style:{color:"red"}},wn=v(()=>E("p",null," 4.北京114预约挂号支持自费患者使用身份证预约，同时支持北京市医保患者使用北京社保卡在平台预约挂号。请于就诊当日，携带预约挂号所使用的有效身份证件到院取号； ",-1)),yn=v(()=>E("p",null,"5.请注意北京市医保患者在住院期间不能使用社保卡在门诊取号。",-1)),Cn={class:"qrocde"},En=["src"],Bn=v(()=>E("p",null,"请使用微信扫一扫",-1)),bn=v(()=>E("p",null,"扫描二维码支付",-1)),In=yt({__name:"index",setup(e){let t=Lt(),i=D(""),r=D(!1),n=D({}),o=D();Rt(()=>{s()});const s=async()=>{let B=await Gt(t.query.orderId);B.code==200&&(n.value=B.data)},a=async()=>{try{await Qt(t.query.orderId),s()}catch{Nt({type:"error",message:"取消预约失败"})}},l=async()=>{r.value=!0;let B=await Wt(t.query.orderId);i.value=await Z.toDataURL(B.data.codeUrl),o.value=setInterval(async()=>{(await Zt(t.query.orderId)).data&&(r.value=!1,Nt({type:"success",message:"支付成功"}),clearInterval(o.value),s())},2e3)},c=()=>{r.value=!1,clearInterval(o.value)},u=()=>{clearInterval(o.value)};return(B,p)=>{const g=M("el-tag"),m=M("el-descriptions-item"),w=M("el-descriptions"),I=M("el-button"),d=M("el-popconfirm"),_=M("el-card"),h=M("el-dialog");return k(),J("div",null,[C(_,{class:"box-card"},{header:y(()=>[Qe]),default:y(()=>[E("div",We,[C(g,{class:"ml-2",type:"success"},{default:y(()=>{var f;return[E("div",Ze,[Xe,E("span",null,U((f=S(n).param)==null?void 0:f.orderStatusString),1)])]}),_:1}),tn]),E("div",en,[E("div",nn,[C(w,{class:"margin-top",column:1,border:""},{default:y(()=>[C(m,null,{label:y(()=>[on]),default:y(()=>[F(" "+U(S(n).patientName),1)]),_:1}),C(m,null,{label:y(()=>[rn]),default:y(()=>[F(" "+U(S(n).reserveDate),1)]),_:1}),C(m,null,{label:y(()=>[sn]),default:y(()=>[F(" "+U(S(n).hosname),1)]),_:1}),C(m,null,{label:y(()=>[ln]),default:y(()=>[F(" "+U(S(n).depname),1)]),_:1}),C(m,null,{label:y(()=>[an]),default:y(()=>[F(" "+U(S(n).title),1)]),_:1}),C(m,null,{label:y(()=>[un]),default:y(()=>[E("span",cn,U(S(n).amount),1)]),_:1}),C(m,null,{label:y(()=>[dn]),default:y(()=>[F(" "+U(S(n).outTradeNo),1)]),_:1}),C(m,null,{label:y(()=>[fn]),default:y(()=>[F(" "+U(S(n).createTime),1)]),_:1})]),_:1}),S(n).orderStatus==0||S(n).orderStatus==1?(k(),J("div",gn,[C(d,{title:"确定取消预约吗?",onConfirm:a},{reference:y(()=>[C(I,null,{default:y(()=>[F("取消预约")]),_:1})]),_:1}),S(n).orderStatus==0?(k(),nt(I,{key:0,type:"primary",size:"default",onClick:l},{default:y(()=>[F("支付")]),_:1})):At("",!0)])):At("",!0)]),E("div",hn,[C(_,{class:"box-card"},{header:y(()=>[mn]),default:y(()=>[pn,E("p",_n," 2.【取号】就诊当天需在"+U(S(n).fetchTime)+"前 在医院取号，未取号视为爽约，该号不退不换； ",1),E("p",null," 3.【退号】在"+U(S(n).quitTime)+"前可在线退号 ，逾期将不可办理退号退费； ",1),wn,yn]),_:1})])])]),_:1}),C(h,{onClose:u,modelValue:S(r),"onUpdate:modelValue":p[0]||(p[0]=f=>G(r)?r.value=f:r=f),title:"微信支付",width:"400"},{footer:y(()=>[C(I,{type:"primary",size:"default",onClick:c},{default:y(()=>[F("关闭窗口")]),_:1})]),default:y(()=>[E("div",Cn,[E("img",{src:S(i),alt:""},null,8,En),Bn,bn])]),_:1},8,["modelValue"])])}}});const An=ne(In,[["__scopeId","data-v-4f4baa44"]]),Nn=E("div",{class:"card-header"},[E("span",null,"挂号订单")],-1),Sn=yt({__name:"index",setup(e){let t=se(),i=D(1),r=D(10),n=D(""),o=D(""),s=D([]),a=D(0),l=D([]),c=D([]);Rt(()=>{u(),g()});const u=async(I=1)=>{i.value=I;let d=await oe(i.value,r.value,n.value,o.value);d.code==200&&(s.value=d.data.records,a.value=d.data.total)},B=I=>{t.push({path:"/user/order",query:{orderId:I.id}})},p=I=>{r.value=I,u()},g=async()=>{const I=await re(),d=await ie();l.value=I.data,c.value=d.data},m=()=>{u()},w=()=>{u()};return(I,d)=>{const _=M("el-option"),h=M("el-select"),f=M("el-form-item"),A=M("el-form"),b=M("el-table-column"),T=M("el-button"),P=M("el-table"),z=M("el-pagination"),L=M("el-card");return k(),nt(L,{class:"box-card"},{header:y(()=>[Nn]),default:y(()=>[C(A,{inline:!0},{default:y(()=>[C(f,{label:"就诊人"},{default:y(()=>[C(h,{placeholder:"请选择就诊人",modelValue:S(n),"onUpdate:modelValue":d[0]||(d[0]=N=>G(n)?n.value=N:n=N),onChange:m},{default:y(()=>[C(_,{label:"请选择全部就诊人",value:""}),(k(!0),J(Tt,null,St(S(l),N=>(k(),nt(_,{key:N.id,label:N.name,value:N.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),C(f,{label:"订单状态"},{default:y(()=>[C(h,{placeholder:"请选择订单状态",modelValue:S(o),"onUpdate:modelValue":d[1]||(d[1]=N=>G(o)?o.value=N:o=N),onChange:w},{default:y(()=>[C(_,{label:"全部订单",value:""}),(k(!0),J(Tt,null,St(S(c),(N,q)=>(k(),nt(_,{key:q,label:N.comment,value:N.status},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),C(P,{border:"",style:{margin:"10px 0px"},data:S(s)},{default:y(()=>[C(b,{label:"就诊时间",prop:"reserveDate"}),C(b,{label:"医院",prop:"hosname"}),C(b,{label:"科室",prop:"depname"}),C(b,{label:"医生",prop:"title"}),C(b,{label:"服务费",prop:"amount"}),C(b,{label:"就诊人",prop:"patientName"}),C(b,{label:"订单状态",prop:"param.orderStatusString"}),C(b,{label:"操作"},{default:y(({row:N})=>[C(T,{type:"text",onClick:q=>B(N)},{default:y(()=>[F("详情")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),C(z,{"current-page":S(i),"onUpdate:currentPage":d[2]||(d[2]=N=>G(i)?i.value=N:i=N),"page-size":S(r),"onUpdate:pageSize":d[3]||(d[3]=N=>G(r)?r.value=N:r=N),"page-sizes":[10,20,30,40],background:!0,layout:"prev, pager, next, jumper,->,sizes,total",total:S(a),onCurrentChange:u,onSizeChange:p},null,8,["current-page","page-size","total"])]),_:1})}}}),Tn={key:0},vn={key:1},Pn=yt({__name:"index",setup(e){let t=Lt();return(i,r)=>(k(),J("div",null,[S(t).query.orderId?(k(),J("div",Tn,[C(An)])):(k(),J("div",vn,[C(Sn)]))]))}});export{Pn as default};
