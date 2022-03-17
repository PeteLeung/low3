import{P as b}from"./Preview.e637f104.js";import{d as c,r as m,e as s,o as i,f,w as e,m as o,G as n,c as F,j as d,F as h}from"./vendor.27de15cd.js";import"./plugin-vue_export-helper.21dcd24c.js";function w(t){t.__sourceCode=`<template>\r
    <low-tabs v-model="tab">\r
        <low-tab title="\u5BFC\u822A1">\u5185\u5BB91</low-tab>\r
        <low-tab title="\u5BFC\u822A22">\u5185\u5BB92</low-tab>\r
        <low-tab title="\u5BFC\u822A333">\u5185\u5BB93</low-tab>\r
    </low-tabs>\r
</template>\r
<script setup lang="ts">\r
    import { ref } from 'vue'\r
    const tab = ref("\u5BFC\u822A1")\r
<\/script>`,t.__sourceCodeTitle="\u57FA\u7840"}const A=n("\u5185\u5BB91"),V=n("\u5185\u5BB92"),$=n("\u5185\u5BB93"),B=c({setup(t){const a=m("\u5BFC\u822A1");return(p,u)=>{const l=s("low-tab"),r=s("low-tabs");return i(),f(r,{modelValue:a.value,"onUpdate:modelValue":u[0]||(u[0]=_=>a.value=_)},{default:e(()=>[o(l,{title:"\u5BFC\u822A1"},{default:e(()=>[A]),_:1}),o(l,{title:"\u5BFC\u822A22"},{default:e(()=>[V]),_:1}),o(l,{title:"\u5BFC\u822A333"},{default:e(()=>[$]),_:1})]),_:1},8,["modelValue"])}}});typeof w=="function"&&w(B);function v(t){t.__sourceCode=`<template>\r
    <low-tabs v-model="tab" type="card">\r
        <low-tab title="\u5BFC\u822A1">\u5185\u5BB91</low-tab>\r
        <low-tab title="\u5BFC\u822A22">\u5185\u5BB92</low-tab>\r
        <low-tab title="\u5BFC\u822A333">\u5185\u5BB93</low-tab>\r
    </low-tabs>\r
</template>\r
<script setup lang="ts">\r
    import { ref } from 'vue'\r
    const tab = ref("\u5BFC\u822A1")\r
<\/script>`,t.__sourceCodeTitle="\u5361\u7247\u98CE\u683C"}const x=n("\u5185\u5BB91"),k=n("\u5185\u5BB92"),g=n("\u5185\u5BB93"),C=c({setup(t){const a=m("\u5BFC\u822A1");return(p,u)=>{const l=s("low-tab"),r=s("low-tabs");return i(),f(r,{modelValue:a.value,"onUpdate:modelValue":u[0]||(u[0]=_=>a.value=_),type:"card"},{default:e(()=>[o(l,{title:"\u5BFC\u822A1"},{default:e(()=>[x]),_:1}),o(l,{title:"\u5BFC\u822A22"},{default:e(()=>[k]),_:1}),o(l,{title:"\u5BFC\u822A333"},{default:e(()=>[g]),_:1})]),_:1},8,["modelValue"])}}});typeof v=="function"&&v(C);const j=d("h1",null,"Tabs \u6807\u7B7E\u9875",-1),y=d("div",null,"\u793A\u4F8B",-1),E=c({setup(t){return(a,p)=>(i(),F(h,null,[j,y,d("div",null,[o(b,{component:B}),o(b,{component:C})])],64))}});export{E as default};
