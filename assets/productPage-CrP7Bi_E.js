/* empty css                */import{u as C,r as d,w as k,c as I,o as T,a as D,b as s,d as v,e as _,t as l,f as N,g as E,h as j,i as B,j as m,k as F}from"./index-JUsOyzWg.js";const P={key:0,class:"container my-5 mx-auto"},V={class:"row"},H={class:"col-12"},q={class:"bread"},A={class:"row row-cols-2"},O={class:"col-6"},S={class:"breadcrumb"},$={class:"breadcrumb-item"},z={class:"breadcrumb-item"},G={class:"breadcrumb-item active"},M={class:"col-12"},Q={class:"card mb-3",style:{"max-width":"70rem"}},R={class:"row g-0"},J={class:"col-md-5"},K=["src"],L={class:"col-md-7"},U={class:"card-body"},W={class:"card-title"},X={class:"card-text"},Y={class:"input-group mb-3"},Z=["value"],ss=["disabled"],ts={class:"accordion accordion-flush my-5",id:"accordionFlushExample"},os={class:"accordion-item"},as={id:"flush-collapseOne",class:"accordion-collapse collapse","data-bs-parent":"#accordionFlushExample"},es={class:"accordion-body"},ls={class:"accordion-item"},cs={id:"flush-collapseTwo",class:"accordion-collapse collapse","data-bs-parent":"#accordionFlushExample"},is={class:"accordion-body"},ds={class:"accordion-item"},ns={id:"flush-collapseThree",class:"accordion-collapse collapse","data-bs-parent":"#accordionFlushExample"},rs={class:"accordion-body"},_s={__name:"productPage",setup(us){const n=E(),r=C(),{proxy:h}=F(),c=d([]),o=d(null),u=d(null),p=async()=>{const t=await(await fetch("productPage.json")).json();c.value=t,o.value=c.value.find(i=>i.id===u.value)};k(n,()=>{u.value=parseInt(n.params.id),p()},{immediate:!0});const b=()=>{if(o.value.id>1){const a=o.value.id-1;o.value=c.value.find(t=>t.id===a),e.value=0}},f=()=>{if(o.value.id<6){const a=o.value.id+1;o.value=c.value.find(t=>t.id===a),e.value=0}},e=d(0),g=a=>{e.value=a.target.value.replace(/^0+/,"")},y=I(()=>e.value<=0),x=()=>{h.$swal.fire({position:"center",icon:"success",title:"已成功加入購物車",showConfirmButton:!1,timer:1500})},w=()=>{x();const a={category:"shop",id:r.cartData.length+1,title:o.value.title,price:o.value.price,quantity:e.value,src:o.value.img};r.addToCart(a),e.value=0};return T(()=>{p()}),(a,t)=>{const i=j("router-link");return o.value?(B(),D("div",P,[s("div",V,[s("div",H,[s("div",q,[s("div",A,[s("div",O,[s("ol",S,[s("li",$,[v(i,{to:"/",href:"#"},{default:_(()=>t[0]||(t[0]=[m("首頁")])),_:1})]),s("li",z,[v(i,{to:"/shop",href:"#"},{default:_(()=>t[1]||(t[1]=[m("商城")])),_:1})]),s("li",G,l(o.value.title),1)])]),s("div",{class:"col-2 offset-1 offset-lg-4"},[s("ul",{class:"pagination"},[s("li",{class:"page-item",onClick:b},t[2]||(t[2]=[s("a",{class:"page-link"},[s("span",null,"Prev«")],-1)])),s("li",{class:"page-item",onClick:f},t[3]||(t[3]=[s("a",{class:"page-link"},[s("span",null,"Next»")],-1)]))])])])])]),s("div",M,[s("div",Q,[s("div",R,[s("div",J,[s("img",{src:o.value.img,class:"img-fluid"},null,8,K)]),s("div",L,[s("div",U,[s("h5",W,l(o.value.title),1),s("p",X,"$ NTD "+l(o.value.price),1),s("div",Y,[t[4]||(t[4]=s("span",{class:"input-group-text",id:"inputGroup-sizing-default"},"數量",-1)),s("input",{type:"number",min:"0",max:"10",class:"form-control",value:e.value,onInput:g},null,40,Z)]),s("button",{type:"button",class:"btn",disabled:y.value,onClick:w},"Add to Cart",8,ss),s("div",ts,[s("div",os,[t[5]||(t[5]=s("h2",{class:"accordion-header"},[s("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne"}," 產品介紹 ")],-1)),s("div",as,[s("div",es,l(o.value.productInfo),1)])]),s("div",ls,[t[6]||(t[6]=s("h2",{class:"accordion-header"},[s("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseTwo"}," 退貨與退款政策 ")],-1)),s("div",cs,[s("div",is,l(o.value.policy),1)])]),s("div",ds,[t[7]||(t[7]=s("h2",{class:"accordion-header"},[s("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseThree"}," 購買資訊 ")],-1)),s("div",ns,[s("div",rs,l(o.value.shopInfo),1)])])])])])])])])])])):N("",!0)}}};export{_s as default};