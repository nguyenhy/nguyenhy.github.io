import{z as i,Q as u,d as l,O as r,U as d,x as m,a as p,_}from"./q-11926211.js";import{b}from"./q-77e0b0ef.js";const f=async(a,e)=>{const[s]=i(),t=new FormData(e),o=new URLSearchParams;t.forEach((n,c)=>{typeof n=="string"&&o.append(c,n)}),s("?"+o.toString(),!0).then(()=>{e.getAttribute("data-spa-reset")==="true"&&e.reset(),e.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:{status:200}}))})},v=a=>{const e=u(a,["action","spaReset","reloadDocument","onSubmit$"]),s=b();return l("form",{...e,children:d(m,null,3,"BC_0"),onSubmit$:p(()=>_(()=>Promise.resolve().then(()=>S),void 0),"s_p9MSze0ojs4",[s])},{action:"get","preventdefault:submit":r(t=>!t.reloadDocument,[a],"!p0.reloadDocument"),"data-spa-reset":r(t=>t.spaReset?"true":void 0,[a],'p0.spaReset?"true":undefined')},0,"BC_1")},S=Object.freeze(Object.defineProperty({__proto__:null,s_Nk9PlpjQm9Y:v,s_p9MSze0ojs4:f},Symbol.toStringTag,{value:"Module"}));export{v as s_Nk9PlpjQm9Y,f as s_p9MSze0ojs4};