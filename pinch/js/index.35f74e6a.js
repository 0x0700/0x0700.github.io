(self.webpackChunkpurebyuu=self.webpackChunkpurebyuu||[]).push([[826],{38:(e,t,n)=>{"use strict";n.r(t)},883:(e,t,n)=>{"use strict";n.r(t)},873:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getElementOffsetPoints=t.getFingerEventPoints=void 0,t.getFingerEventPoints=function(e){return(e=>!!e?.touches)(e)?[...e.touches].map((e=>({x:e.clientX,y:e.clientY}))):[{x:e.clientX,y:e.clientY}]},t.getElementOffsetPoints=function(e,t){return t.map((t=>{if(!t)return;const n=e.getBoundingClientRect();return{x:t.x-n.x,y:t.y-n.y}}))}},149:(e,t)=>{"use strict";function n(e,t){const n=e.length,r=e[0].length,s=t.length,o=t[0].length;if(r!==s)throw new Error("row col error");const i=[];for(let s=0;s<n;s++){i[s]=[];for(let n=0;n<o;n++){let o=0;for(let i=0;i<r;i++)o+=e[s][i]*t[i][n];i[s][n]=o}}return i}Object.defineProperty(t,"__esModule",{value:!0}),t.matrixProducts=t.matrixProduct=void 0,t.matrixProduct=n,t.matrixProducts=function(e,...t){let r=e;for(let e=0;e<t.length;e++)r=n(r,t[e]);return r}},598:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Preview=void 0,n(38);const s=r(n(496)),o=n(292);t.Preview=function(e){const t=s.default.createRef(),n=(0,o.usePinch)(t);return s.default.createElement("div",{className:"preview",ref:t},s.default.createElement("div",{className:"bg-grid",style:{backgroundSize:`${40*n.descriptor.sx}px ${40*n.descriptor.sx}px`,backgroundPosition:`${n.descriptor.dx}px ${n.descriptor.dy}px`,backgroundImage:`radial-gradient(circle, #000000 ${n.descriptor.sx}px, rgba(0, 0, 0, 0) ${n.descriptor.sx}px)`}}),s.default.createElement("div",{className:"_canvas",style:{backgroundImage:`url(${e.src})`,transform:`matrix(${n.descriptor.sx}, 0, 0, ${n.descriptor.sy}, ${n.descriptor.dx}, ${n.descriptor.dy})`,transformOrigin:"0% 0%"}},e.src?null:s.default.createElement("div",{style:{fontSize:36,textAlign:"center",maxWidth:300,padding:"3em 0",margin:"0 auto",userSelect:"none"}},s.default.createElement("div",{style:{marginBottom:"1em"}},"点击下方选择图片进行预览, 要不然就只能预览我这段文字了"),s.default.createElement("div",{style:{fontSize:"50%"}},s.default.createElement("div",null,"鼠标拖拽 / 鼠标滚轮"),s.default.createElement("div",null,"单指拖拽 / 多指捏放"))),s.default.createElement("div",{className:"_canvas_descriptor"},s.default.createElement("div",null,"缩放: ",(100*n.descriptor.sx).toFixed(1),"%"),s.default.createElement("div",null,"位移: (",n.descriptor.dx.toFixed(1),",",n.descriptor.dy.toFixed(1),")"))))}},650:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDragStates=void 0;const s=r(n(496)),o=n(873);function i(e){return e.preventDefault?.(),e}t.useDragStates=function(e,t){const[n,r]=s.default.useState([]);return s.default.useEffect((()=>{const n=e.current;if(!n)return;let s={};const c=()=>Object.keys(s).map((e=>({type:"dragging",translation:{x:s[e].current.x-s[e].start.x,y:s[e].current.y-s[e].start.y},start:s[e].start,current:s[e].current}))),u=(e,t=-1)=>{s[t]||(s[t]={id:t,start:e,current:e})},a=(e,t=-1)=>{s[t]={id:t,start:s[t]?.start??e,current:e}},l={onStart(e){const a=i(e),l=c();l.length&&(t(l),s={},r([]));const d=(0,o.getElementOffsetPoints)(n,(0,o.getFingerEventPoints)(a));for(let e=0;e<a.touches.length;e++){const t=d[e];u(t,a.touches[e].identifier)}r(c())},onMove(e){const t=i(e),s=(0,o.getElementOffsetPoints)(n,(0,o.getFingerEventPoints)(t));for(let e=0;e<t.touches.length;e++){const n=s[e];a(n,t.touches[e].identifier)}r(c())},onEnd(e){const n=i(e),o=c();t(o),s={},r([]),0!==n.touches.length&&l.onStart(n)}},d={onStart(e){l.onStart({touches:[{identifier:-1,clientX:e.clientX,clientY:e.clientY}]})},onMove(e){0!==Object.keys(s).length&&l.onMove({touches:[{identifier:-1,clientX:e.clientX,clientY:e.clientY}]})},onEnd(e){l.onEnd({touches:[],changedTouches:[{identifier:-1,clientX:e.clientX,clientY:e.clientY}]})}};{const e={passive:!1};n.addEventListener("touchstart",l.onStart,e),n.addEventListener("touchmove",l.onMove,e),n.addEventListener("touchend",l.onEnd,e),n.addEventListener("touchcancel",l.onEnd,e),n.addEventListener("mousedown",d.onStart,e),n.addEventListener("mousemove",d.onMove,e),n.addEventListener("mouseup",d.onEnd,e),n.addEventListener("mouseleave",d.onEnd,e)}return()=>{n.removeEventListener("touchstart",l.onStart),n.removeEventListener("touchmove",l.onMove),n.removeEventListener("touchend",l.onEnd),n.removeEventListener("touchcancel",l.onEnd),n.removeEventListener("mousedown",d.onStart),n.removeEventListener("mousemove",d.onMove),n.removeEventListener("mouseup",d.onEnd),n.removeEventListener("mouseleave",d.onEnd)}}),[]),{dragStates:n}}},292:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.usePinch=void 0;const s=r(n(496)),o=n(149),i=n(650),c=n(873),u=()=>[[1,0,0],[0,1,0],[0,0,1]];function a(e,t){const[n,r]=t;if(n&&r){const t={x:(n.start.x+r.start.x)/2,y:(n.start.y+r.start.y)/2},s={x:(n.current.x+r.current.x)/2,y:(n.current.y+r.current.y)/2},i=Math.sqrt((n.start.x-r.start.x)*(n.start.x-r.start.x)+(n.start.y-r.start.y)*(n.start.y-r.start.y)),c=Math.sqrt((n.current.x-r.current.x)*(n.current.x-r.current.x)+(n.current.y-r.current.y)*(n.current.y-r.current.y))/i;return(0,o.matrixProducts)(e,[[1,0,0],[0,1,0],[-t.x,-t.y,1]],[[c,0,0],[0,c,0],[0,0,1]],[[1,0,0],[0,1,0],[s.x,s.y,1]])}return n?(0,o.matrixProducts)(e,[[1,0,0],[0,1,0],[n.translation.x,n.translation.y,1]]):(0,o.matrixProducts)(e,[[1,0,0],[0,1,0],[0,0,1]])}t.usePinch=function(e){const[t,n]=s.default.useState(u),{dragStates:r}=(0,i.useDragStates)(e,(e=>{n((t=>a(t,e)))}));s.default.useEffect((()=>{const t=e.current;if(!t)return;const r=e=>{e.preventDefault();const r=(0,c.getElementOffsetPoints)(t,[{x:e.clientX,y:e.clientY}])[0],s=t.getBoundingClientRect().height,i=-e.deltaY/s;n((e=>(0,o.matrixProducts)(e,[[1,0,0],[0,1,0],[-r.x,-r.y,1]],[[1+i,0,0],[0,1+i,0],[0,0,1]],[[1,0,0],[0,1,0],[r.x,r.y,1]])))};return t.addEventListener("wheel",r),()=>{t.removeEventListener("wheel",r)}}),[]);const l=a(t,r),d=function(e){return{sx:e[0][0],sy:e[1][1],dx:e[2][0],dy:e[2][1]}}(l);return{dragMatrix:l,descriptor:d}}},946:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(883);const s=r(n(496)),o=r(n(995)),i=n(598),c=document.getElementById("app");o.default.render(s.default.createElement((function(){const[e,t]=s.default.useState(null);return s.default.useEffect((()=>()=>{e&&URL.revokeObjectURL(e)}),[e]),s.default.createElement(s.default.Fragment,null,s.default.createElement("input",{id:"file",hidden:!0,type:"file",onChange:e=>{const n=e.target.files?.[0];if(e.target.value="",!n)return;console.log("@@ select file",n);const r=URL.createObjectURL(n);t(r)}}),s.default.createElement(i.Preview,{src:e}),s.default.createElement("label",{htmlFor:"file",className:"label-select-image"},"选择图片"))}),null),c)}},e=>{"use strict";e(e.s=946)}]);