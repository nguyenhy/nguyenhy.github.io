import{U as T,N as l,K as q}from"./q-a904f00a.js";import{g as a}from"./q-5ab10227.js";const d={meta:{description:"",keywords:["hytorium","web development","frontend development","blog","js","css","html"],url:"https://nguyenhy.github.io/",image:"",article:{published_time:1645312806,modified_time:0},twitter:{card:"summary_large_image"}}};function B(t){var u;const e={meta:{}};if(!t)return e;const m=a(t,"description",d.meta.description);m&&(e.meta.description=m);const n=a(t,"keywords",d.meta.keywords);n&&(e.meta.keywords=n);const o=a(t,"url",d.meta.url);o&&(e.meta.url=o);const c=a(t,"image",d.meta.image);if(c&&(e.meta.image=c),t.article){const r=a(t.article,"modified_time",null);r&&(e.meta.article||(e.meta.article={}),e.meta.article.modified_time=r);const s=a(t.article,"published_time",null);s&&(e.meta.article||(e.meta.article={}),e.meta.article.published_time=s)}if(t.twitter){const r=a(t.twitter,"card",(u=d.meta.twitter)==null?void 0:u.card);r&&(e.meta.twitter||(e.meta.twitter={}),e.meta.twitter.card=r)}return e}function i(t,e){return e?l("meta",{property:t,content:e},null,null,3,"st_0"):null}function E({head:t}){var e,m,n,o,c,u,r,s,p,f,g,w,y,_,b,k,S,U,D,M,j,v,C,H,I,K,N,O,V,h,x,F;return T(q,{children:[l("meta",null,{property:"type",content:"article"},null,3,null),l("meta",null,{property:"article",content:"author: nguyen hy"},null,3,null),l("meta",null,{property:"locale",content:"en_US"},null,3,null),i("description",(m=(e=t.frontmatter)==null?void 0:e.meta)==null?void 0:m.description),i("keywords",(c=(o=(n=t.frontmatter)==null?void 0:n.meta)==null?void 0:o.keywords)==null?void 0:c.join(",")),l("meta",null,{property:"og:site_name",content:"Hytorium"},null,3,null),l("meta",null,{property:"og:locale",content:"en_US"},null,3,null),l("meta",null,{property:"og:type",content:"article"},null,3,null),i("og:title",t.title),i("og:description",(r=(u=t.frontmatter)==null?void 0:u.meta)==null?void 0:r.description),i("og:url",(p=(s=t.frontmatter)==null?void 0:s.meta)==null?void 0:p.url),i("og:image",(g=(f=t.frontmatter)==null?void 0:f.meta)==null?void 0:g.image),i("article:published_time",(_=(y=(w=t.frontmatter)==null?void 0:w.meta)==null?void 0:y.article)!=null&&_.published_time?new Date(((S=(k=(b=t.frontmatter)==null?void 0:b.meta)==null?void 0:k.article)==null?void 0:S.published_time)*1e3).toISOString():""),i("article:modified_time",(M=(D=(U=t.frontmatter)==null?void 0:U.meta)==null?void 0:D.article)!=null&&M.modified_time?new Date(((C=(v=(j=t.frontmatter)==null?void 0:j.meta)==null?void 0:v.article)==null?void 0:C.modified_time)*1e3).toISOString():""),l("meta",null,{name:"twitter:card",content:"summary_large_image"},null,3,null),i("twitter:card",(K=(I=(H=t.frontmatter)==null?void 0:H.meta)==null?void 0:I.twitter)==null?void 0:K.card),i("twitter:title",t.title),i("twitter:description",(O=(N=t.frontmatter)==null?void 0:N.meta)==null?void 0:O.description),i("twitter:image",(h=(V=t.frontmatter)==null?void 0:V.meta)==null?void 0:h.image),i("twitter:url",(F=(x=t.frontmatter)==null?void 0:x.meta)==null?void 0:F.url)]},1,"st_1")}export{E as C,B as c};