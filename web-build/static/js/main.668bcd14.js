(()=>{"use strict";var e={1445:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var r=n(2982),l=n(885),o=n(3847),a=n(7947),i=n(8386),s=n(2723),c=n(4925);const u=function(){return(0,c.jsx)(s.default,{source:n(21),style:{width:150,height:150}})};var d=n(5932),f=n(5769),h=i.default.create({container:{alignItems:"center"},text:{fontSize:40,color:"#72953A",fontFamily:"IngridDarling-Regular"}});const g=function(){var e=(0,f.useFonts)({"IngridDarling-Regular":n(3695)});return(0,l.default)(e,1)[0]?(0,c.jsxs)(a.default,{style:h.container,children:[(0,c.jsx)(d.default,{style:h.text,children:"Organisateur"}),(0,c.jsx)(d.default,{style:h.text,children:"de"}),(0,c.jsx)(d.default,{style:h.text,children:"t\xe2ches"})]}):null};var x=i.default.create({container:{width:300,height:150,backgroundColor:"#72953A",borderRadius:5,padding:10,justifyContent:"space-between",alignItems:"center"},taskContainer:{flexDirection:"row",marginBottom:10,backgroundColor:"#EADC1A",borderRadius:5,width:250,height:30,alignItems:"center",justifyContent:"space-between"},label:{color:"#72953A",fontSize:16},counterContainer:{width:25,height:25,backgroundColor:"white",borderRadius:5,alignItems:"center",justifyContent:"center"},counter:{fontSize:12,fontWeight:"bold",color:"#72953A"}});const j=function(e){var t=e.taches,n=t.filter((function(e){return!e.terminee})),r=t.filter((function(e){return e.terminee}));return(0,c.jsxs)(a.default,{style:x.container,children:[(0,c.jsxs)(a.default,{style:x.taskContainer,children:[(0,c.jsx)(d.default,{style:x.label,children:" T\xe2ches \xe0 faire"}),(0,c.jsx)(a.default,{style:x.counterContainer,children:(0,c.jsx)(d.default,{style:x.counter,children:n.length})})]}),(0,c.jsxs)(a.default,{style:x.taskContainer,children:[(0,c.jsx)(d.default,{style:x.label,children:" T\xe2ches termin\xe9es"}),(0,c.jsx)(a.default,{style:x.counterContainer,children:(0,c.jsx)(d.default,{style:x.counter,children:r.length})})]}),(0,c.jsxs)(a.default,{style:x.taskContainer,children:[(0,c.jsx)(d.default,{style:x.label,children:" Total des t\xe2ches"}),(0,c.jsx)(a.default,{style:x.counterContainer,children:(0,c.jsx)(d.default,{style:x.counter,children:t.length})})]})]})};var y=n(4700),b=n(5735),p=i.default.create({container:{width:300,height:150,backgroundColor:"#72953A",borderRadius:5,padding:10,justifyContent:"center",alignItems:"center"},titre:{fontSize:20,marginBottom:5,color:"white",fontFamily:"IngridDarling-Regular"},inputContainer:{backgroundColor:"white",width:250,height:30,borderRadius:5,marginBottom:10},input:{flex:1,paddingHorizontal:10},button:{backgroundColor:"#EADC1A",width:250,height:30,borderRadius:5,alignItems:"center",justifyContent:"center"},buttonText:{color:"#72953A"}});const m=function(e){var t=e.ajouterTache,r=(0,o.useState)(""),i=(0,l.default)(r,2),s=i[0],u=i[1],h=(0,f.useFonts)({"IngridDarling-Regular":n(3695)});return(0,l.default)(h,1)[0]?(0,c.jsxs)(a.default,{style:p.container,children:[(0,c.jsx)(d.default,{style:p.titre,children:"Entrer votre prochaine t\xe2che:"}),(0,c.jsx)(a.default,{style:p.inputContainer,children:(0,c.jsx)(y.default,{style:p.input,placeholder:"Saisissez votre t\xe2che",value:s,onChangeText:function(e){return u(e)}})}),(0,c.jsx)(b.default,{style:p.button,onPress:function(){t(s),u("")},children:(0,c.jsx)(d.default,{style:p.buttonText,children:"Ajouter une t\xe2che"})})]}):null};var v=i.default.create({container:{width:300,height:150,backgroundColor:"#72953A",borderRadius:5,padding:10},titre:{fontSize:16,marginBottom:10,color:"#EADC1A"},message:{fontSize:14,color:"#EADC1A"},tacheContainer:{flexDirection:"row",justifyContent:"space-between",marginBottom:5},boutonSupprimer:{color:"red"}});const C=function(e){var t=e.taches,n=e.onSupprimerTache;return(0,c.jsxs)(a.default,{style:v.container,children:[(0,c.jsx)(d.default,{style:v.titre,children:"T\xe2ches"}),0===t.length?(0,c.jsx)(d.default,{style:v.message,children:"Il n'y a pas de t\xe2che pour le moment."}):t.map((function(e){return(0,c.jsxs)(a.default,{style:v.tacheContainer,children:[(0,c.jsx)(d.default,{children:e.texte}),(0,c.jsx)(b.default,{onPress:function(){return n(e.id)},children:(0,c.jsx)(d.default,{style:v.boutonSupprimer,children:"Supprimer"})})]},e.id)}))]})};function w(){var e=(0,o.useState)([]),t=(0,l.default)(e,2),n=t[0],i=t[1];return(0,c.jsx)(a.default,{style:S.container,children:(0,c.jsxs)(a.default,{style:S.mainContent,children:[(0,c.jsxs)(a.default,{style:S.content,children:[(0,c.jsx)(u,{}),(0,c.jsx)(g,{})]}),(0,c.jsx)(a.default,{style:S.bloc,children:(0,c.jsx)(j,{taches:n})}),(0,c.jsx)(a.default,{style:S.bloc,children:(0,c.jsx)(m,{ajouterTache:function(e){var t={id:Math.random(),texte:e};i([].concat((0,r.default)(n),[t]))}})}),(0,c.jsx)(a.default,{style:S.bloc,children:(0,c.jsx)(C,{taches:n,onSupprimerTache:function(e){var t=n.filter((function(t){return t.id!==e}));i(t)}})})]})})}var S=i.default.create({container:{flex:1},mainContent:{flex:1,backgroundColor:"rgba(234, 220, 26, 0.2)",alignItems:"center"},content:{flexDirection:"row",alignItems:"center",marginTop:20},bloc:{marginBottom:30}})},3695:(e,t,n)=>{e.exports=n.p+"static/media/IngridDarling-Regular.fd319b27efc3e175dc6a.ttf"},21:(e,t,n)=>{e.exports=n.p+"static/media/stylo.14cb089245fb386df624.png"}},t={};function n(r){var l=t[r];if(void 0!==l)return l.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,(()=>{var e=[];n.O=(t,r,l,o)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){for(var[r,l,o]=e[u],i=!0,s=0;s<r.length;s++)(!1&o||a>=o)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(i=!1,o<a&&(a=o));if(i){e.splice(u--,1);var c=l();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,l,o]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var l,o,[a,i,s]=r,c=0;if(a.some((t=>0!==e[t]))){for(l in i)n.o(i,l)&&(n.m[l]=i[l]);if(s)var u=s(n)}for(t&&t(r);c<a.length;c++)o=a[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[294],(()=>n(6870)));r=n.O(r)})();
//# sourceMappingURL=main.668bcd14.js.map