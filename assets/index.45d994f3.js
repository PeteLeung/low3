import{P as _}from"./Preview.e637f104.js";import{d as b,r as s,e as k,o as m,c as p,j as w,m as l,w as f,F as v,G as g,y as A,f as V,C}from"./vendor.27de15cd.js";import"./plugin-vue_export-helper.21dcd24c.js";function B(e){e.__sourceCode=`<template>\r
  <div>\r
    <low-checkbox label="A" v-model="checked1"></low-checkbox>\r
    <low-checkbox label="B" v-model="checked2"></low-checkbox>\r
  </div>\r
  <low-checkbox label="A" v-model="checked3">{{checked3}}</low-checkbox>\r
  <low-checkbox label="B" v-model="checked4">{{checked4}}</low-checkbox>\r
</template>\r
<script setup lang="ts">\r
  import { ref } from 'vue'\r
  const checked1 = ref(true)\r
  const checked2 = ref(false)\r
  const checked3 = ref(true)\r
  const checked4 = ref(false)\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u7840"}const L=b({setup(e){const n=s(!0),u=s(!1),a=s(!0),c=s(!1);return(i,t)=>{const d=k("low-checkbox");return m(),p(v,null,[w("div",null,[l(d,{label:"A",modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=o=>n.value=o)},null,8,["modelValue"]),l(d,{label:"B",modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=o=>u.value=o)},null,8,["modelValue"])]),l(d,{label:"A",modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=o=>a.value=o)},{default:f(()=>[g(A(a.value),1)]),_:1},8,["modelValue"]),l(d,{label:"B",modelValue:c.value,"onUpdate:modelValue":t[3]||(t[3]=o=>c.value=o)},{default:f(()=>[g(A(c.value),1)]),_:1},8,["modelValue"])],64)}}});typeof B=="function"&&B(L);function y(e){e.__sourceCode=`<template>\r
  <div>\r
    <low-checkbox label="A" v-model="checked1" disabled></low-checkbox>\r
    <low-checkbox label="B" v-model="checked2" disabled></low-checkbox>\r
  </div>\r
</template>\r
<script setup lang="ts">\r
  import { ref } from 'vue'\r
  const checked1 = ref(true)\r
  const checked2 = ref(false)\r
<\/script>`,e.__sourceCodeTitle="\u7981\u7528 disabled"}const U=b({setup(e){const n=s(!0),u=s(!1);return(a,c)=>{const i=k("low-checkbox");return m(),p("div",null,[l(i,{label:"A",modelValue:n.value,"onUpdate:modelValue":c[0]||(c[0]=t=>n.value=t),disabled:""},null,8,["modelValue"]),l(i,{label:"B",modelValue:u.value,"onUpdate:modelValue":c[1]||(c[1]=t=>u.value=t),disabled:""},null,8,["modelValue"])])}}});typeof y=="function"&&y(U);function $(e){e.__sourceCode=`<template>\r
  <low-checkbox v-model="checked1" label="border" border></low-checkbox>\r
</template>\r
<script setup lang="ts">\r
  import { ref } from 'vue'\r
  const checked1 = ref(true)\r
<\/script>`,e.__sourceCodeTitle="\u8FB9\u6846 border"}const z=b({setup(e){const n=s(!0);return(u,a)=>{const c=k("low-checkbox");return m(),V(c,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=i=>n.value=i),label:"border",border:""},null,8,["modelValue"])}}});typeof $=="function"&&$(z);function T(e){e.__sourceCode=`<template>\r
  <low-checkbox\r
    v-model="checkAll"\r
    :indeterminate="isIndeterminate"\r
    @change="handleCheckAllChange"\r
    border\r
  >Check All</low-checkbox>\r
  <low-checkbox-group\r
    @change="handleCheckedListChange"\r
    v-model="checkedList"\r
  >\r
    <low-checkbox v-for="item in list" :key="item" :label="item" />\r
  </low-checkbox-group>\r
</template>\r
<script setup lang="ts">\r
  import { ref } from "vue";\r
\r
  const checkAll = ref(false);\r
  const isIndeterminate = ref(true);\r
\r
  const checkedList = ref(["A", "C"]);\r
  const list = ["A", "B", "C", "D"];\r
\r
  const handleCheckAllChange:any = (val: boolean) => {\r
    checkedList.value = val ? list : [];\r
    isIndeterminate.value = false;\r
  };\r
\r
  const handleCheckedListChange:any = (value: string[]) => {\r
    const checkedCount = value.length;\r
    checkAll.value = checkedCount === list.length;\r
    isIndeterminate.value = checkedCount > 0 && list.length > checkedCount;\r
  };\r
<\/script>`,e.__sourceCodeTitle="\u4E2D\u95F4\u72B6\u6001 indeterminate"}const E=g("Check All"),D=b({setup(e){const n=s(!1),u=s(!0),a=s(["A","C"]),c=["A","B","C","D"],i=d=>{a.value=d?c:[],u.value=!1},t=d=>{const o=d.length;n.value=o===c.length,u.value=o>0&&c.length>o};return(d,o)=>{const h=k("low-checkbox"),x=k("low-checkbox-group");return m(),p(v,null,[l(h,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=r=>n.value=r),indeterminate:u.value,onChange:i,border:""},{default:f(()=>[E]),_:1},8,["modelValue","indeterminate"]),l(x,{onChange:t,modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=r=>a.value=r)},{default:f(()=>[(m(),p(v,null,C(c,r=>l(h,{key:r,label:r},null,8,["label"])),64))]),_:1},8,["modelValue"])],64)}}});typeof T=="function"&&T(D);function I(e){e.__sourceCode=`<template>\r
  <low-checkbox-group v-model="checkedList" :min="1" :max="3">\r
    <low-checkbox v-for="item in list" :key="item" :label="item"></low-checkbox>\r
  </low-checkbox-group>\r
  \r
</template>\r
<script setup lang="ts">\r
  import { ref } from 'vue'\r
  const checkedList = ref(['A', 'B'])\r
  const list = ['A', 'B', 'C', 'D']\r
<\/script>`,e.__sourceCodeTitle="\u53EF\u9009\u6570\u91CF\u9650\u5236 min&max"}const j=b({setup(e){const n=s(["A","B"]),u=["A","B","C","D"];return(a,c)=>{const i=k("low-checkbox"),t=k("low-checkbox-group");return m(),V(t,{modelValue:n.value,"onUpdate:modelValue":c[0]||(c[0]=d=>n.value=d),min:1,max:3},{default:f(()=>[(m(),p(v,null,C(u,d=>l(i,{key:d,label:d},null,8,["label"])),64))]),_:1},8,["modelValue"])}}});typeof I=="function"&&I(j);function F(e){e.__sourceCode=`<template>\r
  <low-checkbox-group v-model="checkedList">\r
    <low-checkbox label="A"></low-checkbox>\r
    <low-checkbox label="B"></low-checkbox>\r
    <low-checkbox label="C"></low-checkbox>\r
  </low-checkbox-group>\r
  \r
</template>\r
<script setup lang="ts">\r
  import { ref } from 'vue'\r
  const checkedList = ref(['A'])\r
<\/script>`,e.__sourceCodeTitle="\u591A\u9009\u6846\u7EC4 checkboxGroup"}const N=b({setup(e){const n=s(["A"]);return(u,a)=>{const c=k("low-checkbox"),i=k("low-checkbox-group");return m(),V(i,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=t=>n.value=t)},{default:f(()=>[l(c,{label:"A"}),l(c,{label:"B"}),l(c,{label:"C"})]),_:1},8,["modelValue"])}}});typeof F=="function"&&F(N);function P(e){e.__sourceCode=`<template>\r
  <low-checkbox v-model="checked1" label="small" border size="small"></low-checkbox>\r
  <low-checkbox v-model="checked2" label="default" border ></low-checkbox>\r
  <low-checkbox v-model="checked3" label="large" border size="large"></low-checkbox>\r
\r
  <low-checkbox-group v-model="checkedList1" border size="large">\r
    <low-checkbox  label="A"></low-checkbox>\r
    <low-checkbox  label="B"></low-checkbox>\r
  </low-checkbox-group>\r
  <low-checkbox-group v-model="checkedList2" size="small">\r
    <low-checkbox v-for="item in list" :key="item" :label="item"></low-checkbox>\r
  </low-checkbox-group>\r
</template>\r
<script setup lang="ts">\r
  import { ref } from 'vue'\r
  const checked1 = ref(true)\r
  const checked2 = ref(true)\r
  const checked3 = ref(true)\r
  const checkedList1 = ref(['A'])\r
  const checkedList2 = ref(['A'])\r
  const list = ['A', 'B', 'C']\r
<\/script>`,e.__sourceCodeTitle="\u5C3A\u5BF8 size"}const G=b({setup(e){const n=s(!0),u=s(!0),a=s(!0),c=s(["A"]),i=s(["A"]),t=["A","B","C"];return(d,o)=>{const h=k("low-checkbox"),x=k("low-checkbox-group");return m(),p(v,null,[l(h,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=r=>n.value=r),label:"small",border:"",size:"small"},null,8,["modelValue"]),l(h,{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=r=>u.value=r),label:"default",border:""},null,8,["modelValue"]),l(h,{modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=r=>a.value=r),label:"large",border:"",size:"large"},null,8,["modelValue"]),l(x,{modelValue:c.value,"onUpdate:modelValue":o[3]||(o[3]=r=>c.value=r),border:"",size:"large"},{default:f(()=>[l(h,{label:"A"}),l(h,{label:"B"})]),_:1},8,["modelValue"]),l(x,{modelValue:i.value,"onUpdate:modelValue":o[4]||(o[4]=r=>i.value=r),size:"small"},{default:f(()=>[(m(),p(v,null,C(t,r=>l(h,{key:r,label:r},null,8,["label"])),64))]),_:1},8,["modelValue"])],64)}}});typeof P=="function"&&P(G);const S=w("h1",null,"Checkbox \u591A\u9009\u6846",-1),q=w("div",null,"\u793A\u4F8B",-1),M=b({setup(e){return(n,u)=>(m(),p(v,null,[S,q,w("div",null,[l(_,{component:L}),l(_,{component:U}),l(_,{component:z}),l(_,{component:G}),l(_,{component:N}),l(_,{component:D}),l(_,{component:j})])],64))}});export{M as default};
