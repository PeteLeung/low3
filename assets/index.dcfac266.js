import{P as m}from"./Preview.e637f104.js";import{d,r as f,e as u,o as v,c as p,m as e,w as t,G as r,j as s,F as B}from"./vendor.27de15cd.js";import"./plugin-vue_export-helper.21dcd24c.js";function b(n){n.__sourceCode=`<template>\r
  <div>\r
    <low-button @click="toggle">dialog</low-button>\r
    <low-dialog v-model:visible="visible" :before-close="beforeClose">\r
      <template v-slot:title>\r
        Title\r
      </template>\r
      <template v-slot:content>\r
        <strong>hi</strong>\r
        <div>content</div>\r
      </template>\r
      <template v-slot:footer>\r
        <low-button @click="toggle">Cancel</low-button>\r
        <low-button theme="primary" @click="toggle">Confirm</low-button>\r
      </template>\r
    </low-dialog>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
    import { ref } from 'vue'\r
    const visible = ref(false)\r
    const toggle = ()=>{ visible.value = !visible.value; }\r
    const beforeClose = ()=>{ console.log('123') }\r
<\/script>`,n.__sourceCodeTitle="\u57FA\u7840"}const j=r("dialog"),F=r(" Title "),U=s("strong",null,"hi",-1),D=s("div",null,"content",-1),N=r("Cancel"),P=r("Confirm"),w=d({setup(n){const o=f(!1),l=()=>{o.value=!o.value},g=()=>{console.log("123")};return(c,i)=>{const a=u("low-button"),_=u("low-dialog");return v(),p("div",null,[e(a,{onClick:l},{default:t(()=>[j]),_:1}),e(_,{visible:o.value,"onUpdate:visible":i[0]||(i[0]=x=>o.value=x),"before-close":g},{title:t(()=>[F]),content:t(()=>[U,D]),footer:t(()=>[e(a,{onClick:l},{default:t(()=>[N]),_:1}),e(a,{theme:"primary",onClick:l},{default:t(()=>[P]),_:1})]),_:1},8,["visible"])])}}});typeof b=="function"&&b(w);function h(n){n.__sourceCode=`<template>\r
  <div>\r
    <low-button @click="toggle">dialog</low-button>\r
    <low-dialog v-model:visible="visible" title="Title">\r
      <template v-slot:content>\r
        <strong>hi</strong>\r
        <div>content</div>\r
      </template>\r
      <template v-slot:footer>\r
        <low-button @click="toggle">Cancel</low-button>\r
        <low-button theme="primary" @click="toggle">Confirm</low-button>\r
      </template>\r
    </low-dialog>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
    import { ref } from 'vue'\r
    const visible = ref(false)\r
    const toggle = ()=>{ visible.value = !visible.value; }\r
<\/script>`,n.__sourceCodeTitle="\u6807\u9898"}const V=r("dialog"),A=s("strong",null,"hi",-1),E=s("div",null,"content",-1),G=r("Cancel"),q=r("Confirm"),C=d({setup(n){const o=f(!1),l=()=>{o.value=!o.value};return(g,c)=>{const i=u("low-button"),a=u("low-dialog");return v(),p("div",null,[e(i,{onClick:l},{default:t(()=>[V]),_:1}),e(a,{visible:o.value,"onUpdate:visible":c[0]||(c[0]=_=>o.value=_),title:"Title"},{content:t(()=>[A,E]),footer:t(()=>[e(i,{onClick:l},{default:t(()=>[G]),_:1}),e(i,{theme:"primary",onClick:l},{default:t(()=>[q]),_:1})]),_:1},8,["visible"])])}}});typeof h=="function"&&h(C);function k(n){n.__sourceCode=`<template>\r
  <div>\r
    <low-button @click="toggle">dialog</low-button>\r
    <low-dialog v-model:visible="visible" title="Title" width="50%">\r
      <template v-slot:content>\r
        <strong>hi</strong>\r
        <div>content</div>\r
      </template>\r
      <template v-slot:footer>\r
        <low-button @click="toggle">Cancel</low-button>\r
        <low-button theme="primary" @click="toggle">Confirm</low-button>\r
      </template>\r
    </low-dialog>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
    import { ref } from 'vue'\r
    const visible = ref(false)\r
    const toggle = ()=>{ visible.value = !visible.value; }\r
<\/script>`,n.__sourceCodeTitle="\u5C3A\u5BF8\u5927\u5C0F"}const z=r("dialog"),H=s("strong",null,"hi",-1),I=s("div",null,"content",-1),J=r("Cancel"),K=r("Confirm"),$=d({setup(n){const o=f(!1),l=()=>{o.value=!o.value};return(g,c)=>{const i=u("low-button"),a=u("low-dialog");return v(),p("div",null,[e(i,{onClick:l},{default:t(()=>[z]),_:1}),e(a,{visible:o.value,"onUpdate:visible":c[0]||(c[0]=_=>o.value=_),title:"Title",width:"50%"},{content:t(()=>[H,I]),footer:t(()=>[e(i,{onClick:l},{default:t(()=>[J]),_:1}),e(i,{theme:"primary",onClick:l},{default:t(()=>[K]),_:1})]),_:1},8,["visible"])])}}});typeof k=="function"&&k($);function T(n){n.__sourceCode=`<template>\r
  <div>\r
    <low-button @click="toggle">dialog</low-button>\r
    <low-dialog v-model:visible="visible" title="Title" top="50vh">\r
      <template v-slot:content>\r
        <strong>hi</strong>\r
        <div>content</div>\r
      </template>\r
      <template v-slot:footer>\r
        <low-button @click="toggle">Cancel</low-button>\r
        <low-button theme="primary" @click="toggle">Confirm</low-button>\r
      </template>\r
    </low-dialog>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
    import { ref } from 'vue'\r
    const visible = ref(false)\r
    const toggle = ()=>{ visible.value = !visible.value; }\r
<\/script>`,n.__sourceCodeTitle="\u9876\u90E8\u8DDD\u79BB"}const L=r("dialog"),M=s("strong",null,"hi",-1),O=s("div",null,"content",-1),Q=r("Cancel"),R=r("Confirm"),y=d({setup(n){const o=f(!1),l=()=>{o.value=!o.value};return(g,c)=>{const i=u("low-button"),a=u("low-dialog");return v(),p("div",null,[e(i,{onClick:l},{default:t(()=>[L]),_:1}),e(a,{visible:o.value,"onUpdate:visible":c[0]||(c[0]=_=>o.value=_),title:"Title",top:"50vh"},{content:t(()=>[M,O]),footer:t(()=>[e(i,{onClick:l},{default:t(()=>[Q]),_:1}),e(i,{theme:"primary",onClick:l},{default:t(()=>[R]),_:1})]),_:1},8,["visible"])])}}});typeof T=="function"&&T(y);const S=s("h1",null,"Dialog \u5BF9\u8BDD\u6846",-1),W=s("div",null,"\u793A\u4F8B",-1),tt=d({setup(n){return(o,l)=>(v(),p(B,null,[S,W,s("div",null,[e(m,{component:w}),e(m,{component:C}),e(m,{component:$}),e(m,{component:y})])],64))}});export{tt as default};
