import{P as v}from"./Preview.e637f104.js";import{d as u,H as V,e as n,o as i,c as d,m as o,w as m,u as l,G as F,y as B,F as w,j as a}from"./vendor.27de15cd.js";import"./plugin-vue_export-helper.21dcd24c.js";function p(c){c.__sourceCode=`<template>\r
    <low-form :model="form" label-width="100px">\r
      <low-form-item label="username">\r
        <low-input placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D" v-model="form.username"></low-input>\r
      </low-form-item>\r
      <low-form-item label="switch">\r
        <low-switch v-model:checked="form.switch"></low-switch>\r
      </low-form-item>\r
      <low-form-item label="checkbox">\r
        <low-checkbox v-model="form.checkbox"></low-checkbox>\r
      </low-form-item>\r
    </low-form>\r
    {{form}}\r
</template>\r
<script setup lang="ts">\r
    import { reactive } from 'vue'\r
    const form = reactive({\r
        username: '',\r
        switch: true,\r
        checkbox: false\r
    })\r
<\/script>`,c.__sourceCodeTitle="\u57FA\u7840"}const f=u({setup(c){const e=V({username:"",switch:!0,checkbox:!1});return(_,t)=>{const h=n("low-input"),s=n("low-form-item"),b=n("low-switch"),x=n("low-checkbox"),k=n("low-form");return i(),d(w,null,[o(k,{model:l(e),"label-width":"100px"},{default:m(()=>[o(s,{label:"username"},{default:m(()=>[o(h,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",modelValue:l(e).username,"onUpdate:modelValue":t[0]||(t[0]=r=>l(e).username=r)},null,8,["modelValue"])]),_:1}),o(s,{label:"switch"},{default:m(()=>[o(b,{checked:l(e).switch,"onUpdate:checked":t[1]||(t[1]=r=>l(e).switch=r)},null,8,["checked"])]),_:1}),o(s,{label:"checkbox"},{default:m(()=>[o(x,{modelValue:l(e).checkbox,"onUpdate:modelValue":t[2]||(t[2]=r=>l(e).checkbox=r)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),F(" "+B(l(e)),1)],64)}}});typeof p=="function"&&p(f);const g=a("h1",null,"Form \u8868\u5355",-1),j=a("div",null,"\u793A\u4F8B",-1),P=u({setup(c){return(e,_)=>(i(),d(w,null,[g,j,a("div",null,[o(v,{component:f})])],64))}});export{P as default};
