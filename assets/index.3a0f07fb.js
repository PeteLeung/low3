import{P as $}from"./Preview.e637f104.js";import{d as f,r as p,e as g,o as w,c as V,m as e,F as c,w as l,G as r,j as v}from"./vendor.27de15cd.js";import"./plugin-vue_export-helper.21dcd24c.js";function U(i){i.__sourceCode=`<template>\r
  <low-radio :label="false" v-model="gender"></low-radio>\r
  <low-radio :label="true" v-model="gender"></low-radio>\r
  <low-radio :label="23" v-model="gender1"></low-radio>\r
  <low-radio :label="24" v-model="gender1"></low-radio>\r
</template>\r
\r
<script setup lang="ts">\r
  import { ref } from 'vue'\r
  const gender = ref(true)\r
  const gender1 = ref(24)\r
<\/script>`,i.__sourceCodeTitle="\u57FA\u7840"}const B=f({setup(i){const n=p(!0),m=p(24);return(_,d)=>{const t=g("low-radio");return w(),V(c,null,[e(t,{label:!1,modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=s=>n.value=s)},null,8,["modelValue"]),e(t,{label:!0,modelValue:n.value,"onUpdate:modelValue":d[1]||(d[1]=s=>n.value=s)},null,8,["modelValue"]),e(t,{label:23,modelValue:m.value,"onUpdate:modelValue":d[2]||(d[2]=s=>m.value=s)},null,8,["modelValue"]),e(t,{label:24,modelValue:m.value,"onUpdate:modelValue":d[3]||(d[3]=s=>m.value=s)},null,8,["modelValue"])],64)}}});typeof U=="function"&&U(B);function x(i){i.__sourceCode=`<template>\r
  <low-radio label="0" v-model="gender" active-color="#409eff" border>Color1</low-radio>\r
  <low-radio label="1" v-model="gender" active-color="#409eff" border>Color2</low-radio>\r
</template>\r
\r
<script setup lang="ts">\r
  import { ref } from 'vue'\r
  const gender = ref('1')\r
<\/script>\r
<style lang="scss">\r
  .a{\r
    cursor: not-allowed;\r
  }\r
</style>`,i.__sourceCodeTitle="\u81EA\u5B9A\u4E49\u989C\u8272"}const j=r("Color1"),F=r("Color2"),y=f({setup(i){const n=p("1");return(m,_)=>{const d=g("low-radio");return w(),V(c,null,[e(d,{label:"0",modelValue:n.value,"onUpdate:modelValue":_[0]||(_[0]=t=>n.value=t),"active-color":"#409eff",border:""},{default:l(()=>[j]),_:1},8,["modelValue"]),e(d,{label:"1",modelValue:n.value,"onUpdate:modelValue":_[1]||(_[1]=t=>n.value=t),"active-color":"#409eff",border:""},{default:l(()=>[F]),_:1},8,["modelValue"])],64)}}});typeof x=="function"&&x(y);function C(i){i.__sourceCode=`<template>\r
  <low-radio label="0" v-model="gender" disabled>Disabled</low-radio>\r
  <low-radio label="1" v-model="gender" disabled>Disabled</low-radio>\r
</template>\r
\r
<script setup lang="ts">\r
  import { ref } from 'vue'\r
  const gender = ref('1')\r
<\/script>`,i.__sourceCodeTitle="\u7981\u7528"}const N=r("Disabled"),P=r("Disabled"),z=f({setup(i){const n=p("1");return(m,_)=>{const d=g("low-radio");return w(),V(c,null,[e(d,{label:"0",modelValue:n.value,"onUpdate:modelValue":_[0]||(_[0]=t=>n.value=t),disabled:""},{default:l(()=>[N]),_:1},8,["modelValue"]),e(d,{label:"1",modelValue:n.value,"onUpdate:modelValue":_[1]||(_[1]=t=>n.value=t),disabled:""},{default:l(()=>[P]),_:1},8,["modelValue"])],64)}}});typeof C=="function"&&C(z);function D(i){i.__sourceCode=`<template>\r
  <low-radio label="0" v-model="gender" border >Border1</low-radio>\r
  <low-radio label="1" v-model="gender" border >Border2</low-radio>\r
  <low-radio label="0" v-model="gender1" border disabled>Border1</low-radio>\r
  <low-radio label="1" v-model="gender1" border disabled>Border2</low-radio>\r
</template>\r
\r
<script setup lang="ts">\r
  import { ref } from 'vue'\r
  const gender = ref('1')\r
  const gender1 = ref('1')\r
<\/script>`,i.__sourceCodeTitle="\u8FB9\u6846"}const G=r("Border1"),E=r("Border2"),q=r("Border1"),H=r("Border2"),A=f({setup(i){const n=p("1"),m=p("1");return(_,d)=>{const t=g("low-radio");return w(),V(c,null,[e(t,{label:"0",modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=s=>n.value=s),border:""},{default:l(()=>[G]),_:1},8,["modelValue"]),e(t,{label:"1",modelValue:n.value,"onUpdate:modelValue":d[1]||(d[1]=s=>n.value=s),border:""},{default:l(()=>[E]),_:1},8,["modelValue"]),e(t,{label:"0",modelValue:m.value,"onUpdate:modelValue":d[2]||(d[2]=s=>m.value=s),border:"",disabled:""},{default:l(()=>[q]),_:1},8,["modelValue"]),e(t,{label:"1",modelValue:m.value,"onUpdate:modelValue":d[3]||(d[3]=s=>m.value=s),border:"",disabled:""},{default:l(()=>[H]),_:1},8,["modelValue"])],64)}}});typeof D=="function"&&D(A);function k(i){i.__sourceCode=`<template>\r
  <div style="margin-bottom: 20px;">\r
    <low-radio label="0" v-model="gender1" size="small" border>Small A</low-radio>\r
    <low-radio label="1" v-model="gender1" size="small" border>Small B</low-radio>\r
    <low-radio label="0" v-model="gender2" size="small">Small A</low-radio>\r
    <low-radio label="1" v-model="gender2" size="small">Small B</low-radio>\r
  </div>\r
  <div style="margin-bottom: 20px;">\r
    <low-radio label="0" v-model="gender3" border>Default A</low-radio>\r
    <low-radio label="1" v-model="gender3" border>Default B</low-radio>\r
    <low-radio label="0" v-model="gender4">Default A</low-radio>\r
    <low-radio label="1" v-model="gender4">Default B</low-radio>\r
  </div>\r
  <div style="margin-bottom: 20px;">\r
    <low-radio label="0" v-model="gender5" size="large" border>Large A</low-radio>\r
    <low-radio label="1" v-model="gender5" size="large" border>Large B</low-radio>\r
    <low-radio label="0" v-model="gender6" size="large">Large A</low-radio>\r
    <low-radio label="1" v-model="gender6" size="large">Large B</low-radio>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
  import { ref } from 'vue'\r
  const gender1 = ref('1')\r
  const gender2 = ref('1')\r
  const gender3 = ref('1')\r
  const gender4 = ref('1')\r
  const gender5 = ref('1')\r
  const gender6 = ref('1')\r
<\/script>`,i.__sourceCodeTitle="\u5C3A\u5BF8"}const I={style:{"margin-bottom":"20px"}},J=r("Small A"),K=r("Small B"),M=r("Small A"),O=r("Small B"),Q={style:{"margin-bottom":"20px"}},W=r("Default A"),X=r("Default B"),Y=r("Default A"),Z=r("Default B"),h={style:{"margin-bottom":"20px"}},ee=r("Large A"),le=r("Large B"),oe=r("Large A"),re=r("Large B"),L=f({setup(i){const n=p("1"),m=p("1"),_=p("1"),d=p("1"),t=p("1"),s=p("1");return(T,o)=>{const u=g("low-radio");return w(),V(c,null,[v("div",I,[e(u,{label:"0",modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a),size:"small",border:""},{default:l(()=>[J]),_:1},8,["modelValue"]),e(u,{label:"1",modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a),size:"small",border:""},{default:l(()=>[K]),_:1},8,["modelValue"]),e(u,{label:"0",modelValue:m.value,"onUpdate:modelValue":o[2]||(o[2]=a=>m.value=a),size:"small"},{default:l(()=>[M]),_:1},8,["modelValue"]),e(u,{label:"1",modelValue:m.value,"onUpdate:modelValue":o[3]||(o[3]=a=>m.value=a),size:"small"},{default:l(()=>[O]),_:1},8,["modelValue"])]),v("div",Q,[e(u,{label:"0",modelValue:_.value,"onUpdate:modelValue":o[4]||(o[4]=a=>_.value=a),border:""},{default:l(()=>[W]),_:1},8,["modelValue"]),e(u,{label:"1",modelValue:_.value,"onUpdate:modelValue":o[5]||(o[5]=a=>_.value=a),border:""},{default:l(()=>[X]),_:1},8,["modelValue"]),e(u,{label:"0",modelValue:d.value,"onUpdate:modelValue":o[6]||(o[6]=a=>d.value=a)},{default:l(()=>[Y]),_:1},8,["modelValue"]),e(u,{label:"1",modelValue:d.value,"onUpdate:modelValue":o[7]||(o[7]=a=>d.value=a)},{default:l(()=>[Z]),_:1},8,["modelValue"])]),v("div",h,[e(u,{label:"0",modelValue:t.value,"onUpdate:modelValue":o[8]||(o[8]=a=>t.value=a),size:"large",border:""},{default:l(()=>[ee]),_:1},8,["modelValue"]),e(u,{label:"1",modelValue:t.value,"onUpdate:modelValue":o[9]||(o[9]=a=>t.value=a),size:"large",border:""},{default:l(()=>[le]),_:1},8,["modelValue"]),e(u,{label:"0",modelValue:s.value,"onUpdate:modelValue":o[10]||(o[10]=a=>s.value=a),size:"large"},{default:l(()=>[oe]),_:1},8,["modelValue"]),e(u,{label:"1",modelValue:s.value,"onUpdate:modelValue":o[11]||(o[11]=a=>s.value=a),size:"large"},{default:l(()=>[re]),_:1},8,["modelValue"])])],64)}}});typeof k=="function"&&k(L);function S(i){i.__sourceCode=`<template>\r
  <div style="margin-bottom: 20px;">\r
    <low-radio-group v-model="gender1">\r
      <low-radio label="0">Radio1</low-radio>\r
      <low-radio label="1">Radio2</low-radio>\r
    </low-radio-group>\r
    <low-radio-group v-model="gender2" disabled>\r
      <low-radio label="0">Disabled1</low-radio>\r
      <low-radio label="1">Disabled2</low-radio>\r
    </low-radio-group>\r
  </div>\r
  <div style="margin-bottom: 20px;">\r
    <low-radio-group v-model="gender3" size="small" border>\r
      <low-radio label="0">small1</low-radio>\r
      <low-radio label="1">small2</low-radio>\r
    </low-radio-group>\r
    <low-radio-group v-model="gender4" size="large" border>\r
      <low-radio label="0">Border1</low-radio>\r
      <low-radio label="1">Border2</low-radio>\r
    </low-radio-group>\r
  </div>\r
  <div style="margin-bottom: 20px;">\r
    <low-radio-group v-model="gender5" active-color="#409eff">\r
      <low-radio label="0">Color1</low-radio>\r
      <low-radio label="1">Color2</low-radio>\r
    </low-radio-group>\r
    <low-radio-group v-model="gender6" active-color="#409eff" border>\r
      <low-radio label="0">Color1</low-radio>\r
      <low-radio label="1">Color2</low-radio>\r
    </low-radio-group>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
  import { ref } from 'vue'\r
  const gender1 = ref('1')\r
  const gender2 = ref('1')\r
  const gender3 = ref('1')\r
  const gender4 = ref('1')\r
  const gender5 = ref('1')\r
  const gender6 = ref('1')\r
<\/script>`,i.__sourceCodeTitle="\u4F7F\u7528 RadioGroup"}const de={style:{"margin-bottom":"20px"}},ae=r("Radio1"),ne=r("Radio2"),te=r("Disabled1"),ue=r("Disabled2"),ie={style:{"margin-bottom":"20px"}},se=r("small1"),me=r("small2"),_e=r("Border1"),pe=r("Border2"),be={style:{"margin-bottom":"20px"}},ve=r("Color1"),fe=r("Color2"),ge=r("Color1"),we=r("Color2"),R=f({setup(i){const n=p("1"),m=p("1"),_=p("1"),d=p("1"),t=p("1"),s=p("1");return(T,o)=>{const u=g("low-radio"),a=g("low-radio-group");return w(),V(c,null,[v("div",de,[e(a,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=b=>n.value=b)},{default:l(()=>[e(u,{label:"0"},{default:l(()=>[ae]),_:1}),e(u,{label:"1"},{default:l(()=>[ne]),_:1})]),_:1},8,["modelValue"]),e(a,{modelValue:m.value,"onUpdate:modelValue":o[1]||(o[1]=b=>m.value=b),disabled:""},{default:l(()=>[e(u,{label:"0"},{default:l(()=>[te]),_:1}),e(u,{label:"1"},{default:l(()=>[ue]),_:1})]),_:1},8,["modelValue"])]),v("div",ie,[e(a,{modelValue:_.value,"onUpdate:modelValue":o[2]||(o[2]=b=>_.value=b),size:"small",border:""},{default:l(()=>[e(u,{label:"0"},{default:l(()=>[se]),_:1}),e(u,{label:"1"},{default:l(()=>[me]),_:1})]),_:1},8,["modelValue"]),e(a,{modelValue:d.value,"onUpdate:modelValue":o[3]||(o[3]=b=>d.value=b),size:"large",border:""},{default:l(()=>[e(u,{label:"0"},{default:l(()=>[_e]),_:1}),e(u,{label:"1"},{default:l(()=>[pe]),_:1})]),_:1},8,["modelValue"])]),v("div",be,[e(a,{modelValue:t.value,"onUpdate:modelValue":o[4]||(o[4]=b=>t.value=b),"active-color":"#409eff"},{default:l(()=>[e(u,{label:"0"},{default:l(()=>[ve]),_:1}),e(u,{label:"1"},{default:l(()=>[fe]),_:1})]),_:1},8,["modelValue"]),e(a,{modelValue:s.value,"onUpdate:modelValue":o[5]||(o[5]=b=>s.value=b),"active-color":"#409eff",border:""},{default:l(()=>[e(u,{label:"0"},{default:l(()=>[ge]),_:1}),e(u,{label:"1"},{default:l(()=>[we]),_:1})]),_:1},8,["modelValue"])])],64)}}});typeof S=="function"&&S(R);const Ve=v("h1",null,"Radio \u5355\u9009\u6846",-1),ce=v("div",null,"\u793A\u4F8B",-1),xe=f({setup(i){return(n,m)=>(w(),V(c,null,[Ve,ce,v("div",null,[e($,{component:B}),e($,{component:y}),e($,{component:z}),e($,{component:A}),e($,{component:L}),e($,{component:R})])],64))}});export{xe as default};
