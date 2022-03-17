import{_,P as b}from"./Doc.739bf9ef.js";import{P as s}from"./Preview.e637f104.js";import{d as a,r as c,e as d,o as p,c as i,m as n,j as m,y as C}from"./vendor.27de15cd.js";import{_ as I}from"./plugin-vue_export-helper.21dcd24c.js";function f(e){e.__sourceCode=`<template>\r
    <div style="margin: 10px 0; width: 50%;">\r
        <low-input v-model="input" placeholder="Please Input"></low-input>\r
        <div style="margin: 10px 0;">{{input}}</div>\r
    </div>\r
</template>\r
<script setup lang="ts">\r
    import { ref } from 'vue'\r
    const input = ref('hello world')\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u7840"}const V={style:{margin:"10px 0",width:"50%"}},P={style:{margin:"10px 0"}},v=a({setup(e){const u=c("hello world");return(r,t)=>{const l=d("low-input");return p(),i("div",V,[n(l,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=o=>u.value=o),placeholder:"Please Input"},null,8,["modelValue"]),m("div",P,C(u.value),1)])}}});typeof f=="function"&&f(v);function w(e){e.__sourceCode=`<template>\r
    <div style="margin: 10px 0; width: 50%;">\r
        <low-input placeholder="Please Input" disabled></low-input>\r
    </div>\r
</template>`,e.__sourceCodeTitle="\u7981\u7528"}const h={},D={style:{margin:"10px 0",width:"50%"}};function $(e,u){const r=d("low-input");return p(),i("div",D,[n(r,{placeholder:"Please Input",disabled:""})])}typeof w=="function"&&w(h);var A=I(h,[["render",$]]);function F(e){e.__sourceCode=`<template>\r
    <div style="margin: 10px 0; width: 50%;">\r
        <low-input v-model="input" placeholder="Please Input" clearable></low-input>\r
    </div>\r
</template>\r
<script setup lang="ts">\r
    import { ref } from 'vue'\r
    const input = ref('hello world')\r
<\/script>`,e.__sourceCodeTitle="\u6E05\u7A7A"}const k={style:{margin:"10px 0",width:"50%"}},y=a({setup(e){const u=c("hello world");return(r,t)=>{const l=d("low-input");return p(),i("div",k,[n(l,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=o=>u.value=o),placeholder:"Please Input",clearable:""},null,8,["modelValue"])])}}});typeof F=="function"&&F(y);function E(e){e.__sourceCode=`<template>\r
    <div style="margin: 10px 0; width: 50%;">\r
        <low-input type="password" v-model="input" placeholder="Please Input"></low-input>\r
        <low-input type="password" v-model="input" placeholder="Please Input" show-password></low-input>\r
    </div>\r
</template>\r
<script setup lang="ts">\r
    import { ref } from 'vue'\r
    const input = ref('hello world')\r
<\/script>`,e.__sourceCodeTitle="\u5BC6\u7801\u7C7B\u578B\u7684\u8F93\u5165\u6846"}const U={style:{margin:"10px 0",width:"50%"}},x=a({setup(e){const u=c("hello world");return(r,t)=>{const l=d("low-input");return p(),i("div",U,[n(l,{type:"password",modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=o=>u.value=o),placeholder:"Please Input"},null,8,["modelValue"]),n(l,{type:"password",modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=o=>u.value=o),placeholder:"Please Input","show-password":""},null,8,["modelValue"])])}}});typeof E=="function"&&E(x);function g(e){e.__sourceCode=`<template>\r
    <div style="margin: 10px 0; width: 50%;">\r
        <low-input left_icon="search" v-model="input" placeholder="Please Input" />\r
        <low-input right_icon="calender" v-model="input" placeholder="Please Input" />\r
    </div>\r
</template>\r
<script setup lang="ts">\r
    import { ref } from 'vue'\r
    const input = ref('hello world')\r
<\/script>`,e.__sourceCodeTitle="\u5E26 icon \u7684\u8F93\u5165\u6846"}const j={style:{margin:"10px 0",width:"50%"}},B=a({setup(e){const u=c("hello world");return(r,t)=>{const l=d("low-input");return p(),i("div",j,[n(l,{left_icon:"search",modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=o=>u.value=o),placeholder:"Please Input"},null,8,["modelValue"]),n(l,{right_icon:"calender",modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=o=>u.value=o),placeholder:"Please Input"},null,8,["modelValue"])])}}});typeof g=="function"&&g(B);const T=m("h1",null,"Input \u6309\u94AE",-1),N=m("p",null,"\u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\u8F93\u5165\u5B57\u7B26\u3002",-1),H=a({setup(e){const u=[["type","\u7C7B\u578B","string","text\uFF0Ctextarea \u548C\u5176\u4ED6\u539F\u751F input \u7684 type \u503C","text"],[" v-model","\u7ED1\u5B9A\u503C","string / number","-","-"],["placeholder","\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C","string","-","-"],["clearable","\u662F\u5426\u53EF\u6E05\u7A7A","boolean","-","false"],["disabled","	\u7981\u7528","boolean","-","false"],["left-icon","\u8F93\u5165\u6846\u5934\u90E8\u56FE\u6807","Component","-","-"],["right-icon","\u8F93\u5165\u6846\u5C3E\u90E8\u56FE\u6807","Component","-","-"],["readonly","\u539F\u751F\u5C5E\u6027\uFF0C\u662F\u5426\u53EA\u8BFB","	boolean","-","false"]],r=[["input","\u5728 Input \u503C\u6539\u53D8\u65F6\u89E6\u53D1","(value: string / number)"],["clear","\u5728\u70B9\u51FB\u7531 clearable \u5C5E\u6027\u751F\u6210\u7684\u6E05\u7A7A\u6309\u94AE\u65F6\u89E6\u53D1","-"],["blur","\u5728 Input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1","(event: Event)"],["focus","\u5728 Input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1","(event: Event)"]],t=[["input","\u4F7F input \u83B7\u53D6\u7126\u70B9","-"],["blur","\u4F7F input \u5931\u53BB\u7126\u70B9","-"],["select","\u9009\u4E2D input \u4E2D\u7684\u6587\u5B57","-"]];return(l,o)=>(p(),i("div",null,[T,N,m("div",null,[n(s,{component:v}),n(s,{component:A}),n(s,{component:y}),n(s,{component:x}),n(s,{component:B}),n(_,{title:"Input \u5C5E\u6027",type:"prop",body:u}),n(_,{title:"Input \u4E8B\u4EF6",type:"event",body:r}),n(_,{title:"Input \u65B9\u6CD5",type:"methods",body:t}),n(b,{prev:{path:"/doc/switch",name:"\u5F00\u5173 Switch"},next:{path:"/doc/button",name:"\u5F00\u5173 Switch"}})])]))}});export{H as default};
