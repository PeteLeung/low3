import{P as u}from"./Preview.e637f104.js";import{d as n,r as i,e as d,o as s,f as p,c as g,j as a,m as _,F as x}from"./vendor.27de15cd.js";import"./plugin-vue_export-helper.21dcd24c.js";function f(e){e.__sourceCode=`<template>\r
    <low-switch v-model:checked="checked"/>\r
</template>\r
<script setup lang="ts">\r
    import { ref } from 'vue'\r
    const checked = ref(true)\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u7840"}const h=n({setup(e){const c=i(!0);return(l,t)=>{const o=d("low-switch");return s(),p(o,{checked:c.value,"onUpdate:checked":t[0]||(t[0]=r=>c.value=r)},null,8,["checked"])}}});typeof f=="function"&&f(h);function m(e){e.__sourceCode=`<template>\r
    <low-switch v-model:checked="checked" disabled/>\r
</template>\r
<script setup lang="ts">\r
    import { ref } from 'vue'\r
    const checked = ref(true)\r
<\/script>`,e.__sourceCodeTitle="\u7981\u7528"}const k=n({setup(e){const c=i(!0);return(l,t)=>{const o=d("low-switch");return s(),p(o,{checked:c.value,"onUpdate:checked":t[0]||(t[0]=r=>c.value=r),disabled:""},null,8,["checked"])}}});typeof m=="function"&&m(k);function v(e){e.__sourceCode=`<template>\r
    <low-switch v-model:checked="checked" active-color="#409eff" inactive-color="lightgrey" />\r
</template>\r
<script setup lang="ts">\r
    import { ref } from 'vue'\r
    const checked = ref(true)\r
<\/script>`,e.__sourceCodeTitle="\u81EA\u5B9A\u4E49\u989C\u8272"}const w=n({setup(e){const c=i(!0);return(l,t)=>{const o=d("low-switch");return s(),p(o,{checked:c.value,"onUpdate:checked":t[0]||(t[0]=r=>c.value=r),"active-color":"#409eff","inactive-color":"lightgrey"},null,8,["checked"])}}});typeof v=="function"&&v(w);const b=a("h1",null,"Switch \u5F00\u5173",-1),y=a("p",null,"\u793A\u4F8B",-1),j=n({setup(e){return(c,l)=>(s(),g(x,null,[b,y,a("div",null,[_(u,{component:h}),_(u,{component:k}),_(u,{component:w})])],64))}});export{j as default};
