import{l as r,a,_ as i,U as s,v as o,D as e,K as t}from"./q-a904f00a.js";import{S as d}from"./q-95dd48c1.js";const h=r(a(()=>i(()=>import("./q-f68ab080.js"),["build/q-f68ab080.js","build/q-a904f00a.js"]),"s_uFL7N2OfTi8")),A=[{text:"Introduction To CSS",id:"introduction-to-css",level:1},{text:"Series",id:"series",level:2},{text:"Goals",id:"goals",level:2},{text:"What is CSS for?",id:"what-is-css-for",level:2},{text:"Starting with some HTML",id:"starting-with-some-html",level:2},{text:"CSS syntax",id:"css-syntax",level:2},{text:"Class-based CSS selector",id:"class-based-css-selector",level:2},{text:"Basic selectors",id:"basic-selectors",level:3},{text:"Universal selector:",id:"universal-selector",level:4},{text:"Type selector:",id:"type-selector",level:4},{text:"Class selector:",id:"class-selector",level:4},{text:"Id selector:",id:"id-selector",level:4},{text:"Attribute selector:",id:"attribute-selector",level:4},{text:"Grouping selectors",id:"grouping-selectors",level:4},{text:"Combinator",id:"combinator",level:3},{text:"descendant combinator:",id:"descendant-combinator",level:4},{text:"child combinator:",id:"child-combinator",level:4},{text:"general sibling combinator",id:"general-sibling-combinator",level:4},{text:"adjacent sibling combinator",id:"adjacent-sibling-combinator",level:4},{text:"Pseudo selector",id:"pseudo-selector",level:3},{text:"pseudo classes",id:"pseudo-classes",level:4},{text:"pseudo elements",id:"pseudo-elements",level:4},{text:"Example",id:"example",level:2}],F={title:"Introduction To CSS",meta:[],styles:[],links:[],frontmatter:{tag:["hyn","web","frontend","introduction","beginner","css","html","y2022","m3","d5","y2022/m3"],meta:{description:"Simple introduction to CSS for absolutely beginner",url:"https://nguyenhy.github.io/blogs/introduction-to-css/1646522406/",keywords:["hyn","web","blog","me","hyn","frontend","introduction","beginner","CSS","HTML"],article:{published_time:1646522406}}}},m={title:"Introduction To CSS",tag:["hyn","web","frontend","introduction","beginner","css","html","y2022","m3","d5","y2022/m3"],meta:{description:"Simple introduction to CSS for absolutely beginner",url:"https://nguyenhy.github.io/blogs/introduction-to-css/1646522406/",keywords:["hyn","web","blog","me","hyn","frontend","introduction","beginner","CSS","HTML"],article:{published_time:1646522406}}};function c(n){const l=Object.assign({h1:"h1",a:"a",span:"span",h2:"h2",p:"p",div:"div",pre:"pre",code:"code",blockquote:"blockquote",strong:"strong",h3:"h3",h4:"h4",ul:"ul",li:"li"},n.components);return e(t,{children:[e(l.h1,{id:"introduction-to-css",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#introduction-to-css",children:e(l.span,{class:"icon icon-link"})}),"Introduction To CSS"]}),`
`,e(l.h2,{id:"series",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#series",children:e(l.span,{class:"icon icon-link"})}),"Series"]}),`
`,`
`,e(d,{highlight:"2"}),`
`,e(l.h2,{id:"goals",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#goals",children:e(l.span,{class:"icon icon-link"})}),"Goals"]}),`
`,e(l.p,{children:`The following article aims to provide an introduction to CSS by exploring some fundamental concepts.
We will examine a CSS code snippet and break down each line to understand its purpose.`}),`
`,e(l.p,{children:`Additionally, we will discuss how we can modify and customize the code to suit our specific needs and use cases.
By the end of the article, you will have a solid understanding of the code and be equipped to apply it creatively to your own projects.
Let's dive in and explore the world of CSS together!`}),`
`,e(l.h2,{id:"what-is-css-for",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#what-is-css-for",children:e(l.span,{class:"icon icon-link"})}),"What is CSS for?"]}),`
`,e(l.p,{children:`CSS (Cascading Style Sheets) is a language that defines how web documents are presented to end users.
It serves the purpose of enhancing the visual appearance of web pages, making them visually appealing, engaging, and easy to read.
With CSS, we can create visually captivating designs by defining rules that determine the styles to be applied to specific elements or groups of elements within a document.
By using CSS, we have the power to transform plain and dull web pages into visually stunning and aesthetically pleasing experiences for users.`}),`
`,e(l.h2,{id:"starting-with-some-html",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#starting-with-some-html",children:e(l.span,{class:"icon icon-link"})}),"Starting with some HTML"]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"html","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"html","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"<!"}),e(l.span,{style:{color:"#E06C75"},children:"doctype"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"html"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"<"}),e(l.span,{style:{color:"#E06C75"},children:"html"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"lang"}),e(l.span,{style:{color:"#ABB2BF"},children:"="}),e(l.span,{style:{color:"#98C379"},children:'"en"'}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  <"}),e(l.span,{style:{color:"#E06C75"},children:"head"}),e(l.span,{style:{color:"#ABB2BF"},children:"></"}),e(l.span,{style:{color:"#E06C75"},children:"head"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  <"}),e(l.span,{style:{color:"#E06C75"},children:"body"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    <"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:">hello world</"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:"> "})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  </"}),e(l.span,{style:{color:"#E06C75"},children:"body"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"</"}),e(l.span,{style:{color:"#E06C75"},children:"html"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]})]})})}),`
`,e(l.blockquote,{children:[`
`,e("div",{class:"bg-white p-1 text-black h-[60px]",children:[e("span",{children:"hello world"})," "]}),`
`]}),`
`,e(l.p,{children:['Saying, "i need the ',e(l.strong,{children:"hello worlds"}),' is in the middle of page, horizontally", the below rules of style will help me out.']}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"css","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"css","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:[e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  text-align: "}),e(l.span,{style:{color:"#D19A66"},children:"center"}),e(l.span,{style:{color:"#ABB2BF"},children:";"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"}"})})]})})}),`
`,e(l.blockquote,{children:[`
`,e("div",{class:"bg-white p-1 text-black h-[60px] text-center",children:[e("span",{children:"hello world"})," "]}),`
`]}),`
`,e(l.p,{children:`CSS can be used for very basic document text styling - changing font style, text color, highlight text,...
It can also be used to create complex layouts with animation. We'll explore more and more of CSS later in this series but for now:`}),`
`,e(l.blockquote,{children:[`
`,e(l.p,{children:"We use CSS for styling things"}),`
`]}),`
`,e(l.h2,{id:"css-syntax",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#css-syntax",children:e(l.span,{class:"icon icon-link"})}),"CSS syntax"]}),`
`,e(l.p,{children:"CSS rules always start with a selector. this's the part of a CSS rule to specify what elements in a document will take rules effects."}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"css","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"css","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:'/* "span" is a SELECTOR to indicate */'})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:'/* that all "span" elements will be styled by the following rules*/'})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  "}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:'/* the property "color" following by "red" value indicate that */'})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  "}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:'/* text inside "span" element in the document will have red color */'})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  color: "}),e(l.span,{style:{color:"#D19A66"},children:"red"}),e(l.span,{style:{color:"#ABB2BF"},children:";"})]}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  "}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:'/* we can write as much style inside the bracket "{ ... }" as we need */'})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"  ...;"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"}"})})]})})}),`
`,e(l.h2,{id:"class-based-css-selector",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#class-based-css-selector",children:e(l.span,{class:"icon icon-link"})}),"Class-based CSS selector"]}),`
`,e(l.p,{children:`Up until now, we have been applying styles to elements based on their HTML element names.
This approach is suitable when we want all elements of the same type to have the same style.
However, in most cases, we need to target specific elements with different styles.
In this section, we will explore alternative ways of selecting elements and applying CSS rules to them.`}),`
`,e(l.h3,{id:"basic-selectors",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#basic-selectors",children:e(l.span,{class:"icon icon-link"})}),"Basic selectors"]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"html","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"html","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"<!"}),e(l.span,{style:{color:"#E06C75"},children:"DOCTYPE"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"html"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"<"}),e(l.span,{style:{color:"#E06C75"},children:"html"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"lang"}),e(l.span,{style:{color:"#ABB2BF"},children:"="}),e(l.span,{style:{color:"#98C379"},children:'"en"'}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  <"}),e(l.span,{style:{color:"#E06C75"},children:"head"}),e(l.span,{style:{color:"#ABB2BF"},children:"></"}),e(l.span,{style:{color:"#E06C75"},children:"head"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  <"}),e(l.span,{style:{color:"#E06C75"},children:"body"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    <"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"class"}),e(l.span,{style:{color:"#ABB2BF"},children:"="}),e(l.span,{style:{color:"#98C379"},children:'"class-a"'}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"id"}),e(l.span,{style:{color:"#ABB2BF"},children:"="}),e(l.span,{style:{color:"#98C379"},children:'"span-a"'}),e(l.span,{style:{color:"#ABB2BF"},children:">hello</"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    <"}),e(l.span,{style:{color:"#E06C75"},children:"div"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"class"}),e(l.span,{style:{color:"#ABB2BF"},children:"="}),e(l.span,{style:{color:"#98C379"},children:'"class-b"'}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"      <"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"class"}),e(l.span,{style:{color:"#ABB2BF"},children:"="}),e(l.span,{style:{color:"#98C379"},children:'"class-b"'}),e(l.span,{style:{color:"#ABB2BF"},children:">my</"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"      <"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"class"}),e(l.span,{style:{color:"#ABB2BF"},children:"="}),e(l.span,{style:{color:"#98C379"},children:'"class-a class-b"'}),e(l.span,{style:{color:"#ABB2BF"},children:">world</"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    </"}),e(l.span,{style:{color:"#E06C75"},children:"div"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  </"}),e(l.span,{style:{color:"#E06C75"},children:"body"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"</"}),e(l.span,{style:{color:"#E06C75"},children:"html"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]})]})})}),`
`,e(l.p,{children:[`It's a good idea not to skip the below section.
But to be honest, all you need to know is there are `,e(l.code,{children:"CSS"}),` selectors look like this:
`,e(l.code,{children:"*"}),", ",e(l.code,{children:"element"}),", ",e(l.code,{children:".class-name"}),", ",e(l.code,{children:"#element-id"}),", ",e(l.code,{children:"[attribute]"}),", ",e(l.code,{children:"A B"}),", ",e(l.code,{children:"A>B"}),", ",e(l.code,{children:"A+B"}),", ",e(l.code,{children:"A~B"}),", ",e(l.code,{children:"A:<...>"}),", ",e(l.code,{children:"A::<...>"})]}),`
`,e(l.blockquote,{children:[`
`,e(l.p,{children:[e(l.strong,{children:"Selector"})," is vital because it helps us answer the question of ",e(l.code,{children:"how to style specific elements"}),`.
It provides the tools to customize the appearance of individual elements on a web page.`]}),`
`]}),`
`,e(l.h4,{id:"universal-selector",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#universal-selector",children:e(l.span,{class:"icon icon-link"})}),"Universal selector:"]}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:"select all elements in document"}),`
`,e(l.li,{children:["syntax: ",e(l.code,{children:"*"})]}),`
`,e(l.li,{children:"example:"}),`
`]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"css","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"css","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"/* will match all elements, which is: `html`, `body`, `span`, `div` */"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#E06C75"},children:"*"}),e(l.span,{style:{color:"#ABB2BF"},children:" { property: value }"})]})]})})}),`
`,e(l.h4,{id:"type-selector",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#type-selector",children:e(l.span,{class:"icon icon-link"})}),"Type selector:"]}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:"select all elements match node name in selector"}),`
`,e(l.li,{children:["syntax: ",e(l.code,{children:"elementname"})]}),`
`,e(l.li,{children:"example:"}),`
`]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"css","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"css","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"/* will match all `span` */"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:" { property: value } "})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"/* will match all `div` */"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#E06C75"},children:"div"}),e(l.span,{style:{color:"#ABB2BF"},children:" { property: value }"})]})]})})}),`
`,e(l.h4,{id:"class-selector",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#class-selector",children:e(l.span,{class:"icon icon-link"})}),"Class selector:"]}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:["select all elements that have given ",e(l.code,{children:"class"})," attribute in selector"]}),`
`,e(l.li,{children:["syntax: ",e(l.code,{children:".classname"})]}),`
`,e(l.li,{children:"example:"}),`
`]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"css","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"css","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:'/* will match all element has class includes "class-a" */'})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D19A66"},children:".class-a"}),e(l.span,{style:{color:"#ABB2BF"},children:" { property: value } "})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:'/* will match all element has class includes "class-b" */'})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D19A66"},children:".class-b"}),e(l.span,{style:{color:"#ABB2BF"},children:" { property: value } "})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:'/* will match all element has class includes "class-a" AND "class-b" */'})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D19A66"},children:".class-a.class-b"}),e(l.span,{style:{color:"#ABB2BF"},children:" { property: value } "})]})]})})}),`
`,e(l.h4,{id:"id-selector",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#id-selector",children:e(l.span,{class:"icon icon-link"})}),"Id selector:"]}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:["select all elements that have given ",e(l.code,{children:"id"})," attribute in selector"]}),`
`,e(l.li,{children:["syntax: ",e(l.code,{children:"#id"})]}),`
`,e(l.li,{children:"example:"}),`
`]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"css","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"css","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"/* will match all elements has id: `span-a` */"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#61AFEF"},children:"#span-a"}),e(l.span,{style:{color:"#ABB2BF"},children:" { property: value } "})]})]})})}),`
`,e(l.h4,{id:"attribute-selector",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#attribute-selector",children:e(l.span,{class:"icon icon-link"})}),"Attribute selector:"]}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:"select all elements that have the given attribute."}),`
`,e(l.li,{children:["syntax: ",e(l.code,{children:"[attr]"})," ",e(l.code,{children:"[attr=value]"})," ",e(l.code,{children:"[attr~=value]"})," ",e(l.code,{children:"[attr|=value]"})," ",e(l.code,{children:"[attr^=value]"})," ",e(l.code,{children:"[attr$=value]"})]}),`
`,e(l.li,{children:"example:"}),`
`]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"css","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"css","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:'/* will match all element has class includes "class-a" */'})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#C678DD"},children:"["}),e(l.span,{style:{color:"#D19A66"},children:"class"}),e(l.span,{style:{color:"#ABB2BF"},children:"="}),e(l.span,{style:{color:"#98C379"},children:'"class-a"'}),e(l.span,{style:{color:"#C678DD"},children:"]"}),e(l.span,{style:{color:"#ABB2BF"},children:" { property: value }"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"/* this's same as */"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D19A66"},children:".class-a"}),e(l.span,{style:{color:"#ABB2BF"},children:" { property: value } "})]}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"/* will match first `span` */"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#C678DD"},children:"["}),e(l.span,{style:{color:"#D19A66"},children:"id"}),e(l.span,{style:{color:"#ABB2BF"},children:"="}),e(l.span,{style:{color:"#98C379"},children:'"span-a"'}),e(l.span,{style:{color:"#C678DD"},children:"]"}),e(l.span,{style:{color:"#ABB2BF"},children:" { property: value } "})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"/* this's same as */"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#61AFEF"},children:"#span-a"}),e(l.span,{style:{color:"#ABB2BF"},children:" { property: value } "})]})]})})}),`
`,e(l.h4,{id:"grouping-selectors",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#grouping-selectors",children:e(l.span,{class:"icon icon-link"})}),"Grouping selectors"]}),`
`,e(l.p,{children:["This's the same as ",e(l.a,{href:"#basic-selectors",children:"basic selector"})," but we separate them using ",e(l.code,{children:","})," to group the same set of elements that take rules style"]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"css","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"css","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:[e(l.span,{style:{color:"#E06C75"},children:"div"}),e(l.span,{style:{color:"#ABB2BF"},children:","})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D19A66"},children:".class-b"}),e(l.span,{style:{color:"#ABB2BF"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  "}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:'/* all `div` in documents and also all element has class "class-b" */'})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  "}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"/* will have text color of red */"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  color: "}),e(l.span,{style:{color:"#D19A66"},children:"red"}),e(l.span,{style:{color:"#ABB2BF"},children:";"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"}"})})]})})}),`
`,e(l.h3,{id:"combinator",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#combinator",children:e(l.span,{class:"icon icon-link"})}),"Combinator"]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"html","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"html","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"<!"}),e(l.span,{style:{color:"#E06C75"},children:"DOCTYPE"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"html"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"<"}),e(l.span,{style:{color:"#E06C75"},children:"html"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"lang"}),e(l.span,{style:{color:"#ABB2BF"},children:"="}),e(l.span,{style:{color:"#98C379"},children:'"en"'}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  <"}),e(l.span,{style:{color:"#E06C75"},children:"head"}),e(l.span,{style:{color:"#ABB2BF"},children:"></"}),e(l.span,{style:{color:"#E06C75"},children:"head"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  <"}),e(l.span,{style:{color:"#E06C75"},children:"body"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    <"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"class"}),e(l.span,{style:{color:"#ABB2BF"},children:"="}),e(l.span,{style:{color:"#98C379"},children:'"class-a"'}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"id"}),e(l.span,{style:{color:"#ABB2BF"},children:"="}),e(l.span,{style:{color:"#98C379"},children:'"span-a"'}),e(l.span,{style:{color:"#ABB2BF"},children:">hello</"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    "}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"<!-- 1 -->"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    <"}),e(l.span,{style:{color:"#E06C75"},children:"div"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"class"}),e(l.span,{style:{color:"#ABB2BF"},children:"="}),e(l.span,{style:{color:"#98C379"},children:'"class-b"'}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"      <"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"class"}),e(l.span,{style:{color:"#ABB2BF"},children:"="}),e(l.span,{style:{color:"#98C379"},children:'"class-b"'}),e(l.span,{style:{color:"#ABB2BF"},children:">my</"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"      "}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"<!-- 2 -->"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"      <"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"class"}),e(l.span,{style:{color:"#ABB2BF"},children:"="}),e(l.span,{style:{color:"#98C379"},children:'"class-a class-b"'}),e(l.span,{style:{color:"#ABB2BF"},children:">world</"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"      "}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"<!-- 3 -->"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"      <"}),e(l.span,{style:{color:"#E06C75"},children:"p"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"        <"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:">here</"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"        "}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"<!-- 4 -->"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"      </"}),e(l.span,{style:{color:"#E06C75"},children:"p"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"      <"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:">and here</"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"      "}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"<!-- 5 -->"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    </"}),e(l.span,{style:{color:"#E06C75"},children:"div"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  </"}),e(l.span,{style:{color:"#E06C75"},children:"body"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"</"}),e(l.span,{style:{color:"#E06C75"},children:"html"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]})]})})}),`
`,e(l.h4,{id:"descendant-combinator",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#descendant-combinator",children:e(l.span,{class:"icon icon-link"})}),"descendant combinator:"]}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:"select nodes that are descendants of the first elements"}),`
`,e(l.li,{children:["syntax: ",e(l.code,{children:"A B"})," where ",e(l.code,{children:"A"}),", ",e(l.code,{children:"B"})," are ",e(l.a,{href:"#basic-selector",children:"basic selector"})]}),`
`,e(l.li,{children:["example: - ",e(l.code,{children:"div span { ... }"})," will match all ",e(l.code,{children:"span"})," that are child of ",e(l.code,{children:"div"}),", which is 2nd and 3rd ",e(l.code,{children:"span"})," - ",e(l.code,{children:"div .class-a {}"})," will match ",e(l.code,{children:"span"})," that has class ",e(l.code,{children:"class-a"})," and the span must be child of a ",e(l.code,{children:"div"}),`
, which is 3rd `,e(l.code,{children:"span"})," - we can apply all kind of ",e(l.a,{href:"#basic-selector",children:"basic selector"})," into descendant combinator to make CSS work the way we need."]}),`
`]}),`
`,e(l.h4,{id:"child-combinator",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#child-combinator",children:e(l.span,{class:"icon icon-link"})}),"child combinator:"]}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:"selects nodes that are direct children of the first element"}),`
`,e(l.li,{children:["syntax: ",e(l.code,{children:"A > B"})]}),`
`,e(l.li,{children:["example:",`
`,e(l.ul,{children:[`
`,e(l.li,{children:[e(l.code,{children:"div > span"})," will match all ",e(l.code,{children:"span"})," that are ",e(l.strong,{children:"direct"})," child of a ",e(l.code,{children:"div"}),", which is 2nd, 3rd and 5th ",e(l.code,{children:"span"}),`
the 4th `,e(l.code,{children:"span"})," will not match because it is direct child of a ",e(l.code,{children:"p"})]}),`
`]}),`
`]}),`
`]}),`
`,e(l.h4,{id:"general-sibling-combinator",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#general-sibling-combinator",children:e(l.span,{class:"icon icon-link"})}),"general sibling combinator"]}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:"select nodes that are siblings of the first element that are share same direct parent"}),`
`,e(l.li,{children:["syntax: ",e(l.code,{children:"A ~ B"})]}),`
`,e(l.li,{children:[`example:
`,e(l.code,{children:"span ~ span"})," will match 3rd, 5th ",e(l.code,{children:"span"}),", the 4th ",e(l.code,{children:"span"}),` will not be match because it doesn't share same parent
`,e(l.code,{children:"span ~ p"})," will match ",e(l.code,{children:"p"})]}),`
`]}),`
`,e(l.h4,{id:"adjacent-sibling-combinator",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#adjacent-sibling-combinator",children:e(l.span,{class:"icon icon-link"})}),"adjacent sibling combinator"]}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:"same as general sibling combinator but the siblings must be immediately follows the first element"}),`
`,e(l.li,{children:["syntax: ",e(l.code,{children:"A + B"})]}),`
`,e(l.li,{children:[`example:
`,e(l.code,{children:"span + span"})," will match 3rd ",e(l.code,{children:"span"}),", the 5th ",e(l.code,{children:"span"})," will not match because it's not immediately after the 2nd ",e(l.code,{children:"span"}),`
`,e(l.code,{children:"span + p"})," will match ",e(l.code,{children:"p"})]}),`
`]}),`
`,e(l.h3,{id:"pseudo-selector",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#pseudo-selector",children:e(l.span,{class:"icon icon-link"})}),"Pseudo selector"]}),`
`,e(l.h4,{id:"pseudo-classes",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#pseudo-classes",children:e(l.span,{class:"icon icon-link"})}),"pseudo classes"]}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:"select elements based on state information"}),`
`,e(l.li,{children:["syntax: ",e(l.code,{children:"A:pseudo { ... }"})]}),`
`,e(l.li,{children:["example: ",e(l.code,{children:"a:visited"})," will match all ",e(l.code,{children:"a"})," elements that have been visited by the user."]}),`
`]}),`
`,e(l.h4,{id:"pseudo-elements",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#pseudo-elements",children:e(l.span,{class:"icon icon-link"})}),"pseudo elements"]}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:"select a specific part of the selected element"}),`
`,e(l.li,{children:["syntax: ",e(l.code,{children:"A::pseudo { ... }"})]}),`
`,e(l.li,{children:["example: ",e(l.code,{children:"div span:first-child"})," will match 2nd ",e(l.code,{children:"span"})]}),`
`]}),`
`,e(l.h2,{id:"example",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#example",children:e(l.span,{class:"icon icon-link"})}),"Example"]}),`
`,e(l.p,{children:'Most of the time, we use selector to answer the question "how to style that specific element", this section is for demonstrating this.'}),`
`,e(l.p,{children:[`To understand why elements have certain styles, you can use browser dev tools.
These tools allow you to inspect and analyze web pages, helping you understand the styling applied to different elements.
Check out this `,e(l.a,{href:"https://developer.chrome.com/docs/devtools/css/",children:"article"})," to learn more about inspecting web pages and gaining insights into their styling."]}),`
`,`
`,e(l.blockquote,{children:[`
`,e(h,{}),`
`]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"html","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"html","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"<"}),e(l.span,{style:{color:"#E06C75"},children:"div"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"class"}),e(l.span,{style:{color:"#ABB2BF"},children:"="}),e(l.span,{style:{color:"#98C379"},children:'"first"'}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  <"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"class"}),e(l.span,{style:{color:"#ABB2BF"},children:"="}),e(l.span,{style:{color:"#98C379"},children:'"a"'}),e(l.span,{style:{color:"#ABB2BF"},children:">first span</"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  <"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"class"}),e(l.span,{style:{color:"#ABB2BF"},children:"="}),e(l.span,{style:{color:"#98C379"},children:'"b"'}),e(l.span,{style:{color:"#ABB2BF"},children:">second span</"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"</"}),e(l.span,{style:{color:"#E06C75"},children:"div"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"<"}),e(l.span,{style:{color:"#E06C75"},children:"div"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"class"}),e(l.span,{style:{color:"#ABB2BF"},children:"="}),e(l.span,{style:{color:"#98C379"},children:'"second"'}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  <"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"class"}),e(l.span,{style:{color:"#ABB2BF"},children:"="}),e(l.span,{style:{color:"#98C379"},children:'"a b c"'}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"id"}),e(l.span,{style:{color:"#ABB2BF"},children:"="}),e(l.span,{style:{color:"#98C379"},children:'"c"'}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"    third span"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  </"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  <"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"class"}),e(l.span,{style:{color:"#ABB2BF"},children:"="}),e(l.span,{style:{color:"#98C379"},children:'"d"'}),e(l.span,{style:{color:"#ABB2BF"},children:">fourth span</"}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"</"}),e(l.span,{style:{color:"#E06C75"},children:"div"}),e(l.span,{style:{color:"#ABB2BF"},children:">"})]})]})})}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"css","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"css","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:[e(l.span,{style:{color:"#E06C75"},children:"*"}),e(l.span,{style:{color:"#ABB2BF"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"	"}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"/* select all element */"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"	font-size: "}),e(l.span,{style:{color:"#D19A66"},children:"18"}),e(l.span,{style:{color:"#E06C75"},children:"px"}),e(l.span,{style:{color:"#ABB2BF"},children:";"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"}"})}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"	"}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"/* select all span */"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"	color: cyan;"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"	padding: "}),e(l.span,{style:{color:"#D19A66"},children:"10"}),e(l.span,{style:{color:"#E06C75"},children:"px"}),e(l.span,{style:{color:"#ABB2BF"},children:";"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"	display: "}),e(l.span,{style:{color:"#D19A66"},children:"inline-block"}),e(l.span,{style:{color:"#ABB2BF"},children:";"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"	background-color: lightgrey;"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"}"})}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#E06C75"},children:"div"}),e(l.span,{style:{color:"#ABB2BF"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"	"}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"/* select all div */"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"	background-color: grey;"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"	padding: "}),e(l.span,{style:{color:"#D19A66"},children:"10"}),e(l.span,{style:{color:"#E06C75"},children:"px"}),e(l.span,{style:{color:"#ABB2BF"},children:";"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"	margin-top: "}),e(l.span,{style:{color:"#D19A66"},children:"10"}),e(l.span,{style:{color:"#E06C75"},children:"px"}),e(l.span,{style:{color:"#ABB2BF"},children:";"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"}"})}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#E06C75"},children:"div"}),e(l.span,{style:{color:"#C678DD"},children:" "}),e(l.span,{style:{color:"#ABB2BF"},children:">"}),e(l.span,{style:{color:"#C678DD"},children:" "}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#ABB2BF"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"	"}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"/* select all span has parent of div */"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"	font-weight: "}),e(l.span,{style:{color:"#D19A66"},children:"bold"}),e(l.span,{style:{color:"#ABB2BF"},children:";"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"	font-size: "}),e(l.span,{style:{color:"#D19A66"},children:"22"}),e(l.span,{style:{color:"#E06C75"},children:"px"}),e(l.span,{style:{color:"#ABB2BF"},children:";"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"}"})}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D19A66"},children:".a"}),e(l.span,{style:{color:"#ABB2BF"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"	"}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:'/* select all element has class "a" ( class="a" ) */'})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"	background-color: "}),e(l.span,{style:{color:"#D19A66"},children:"blue"}),e(l.span,{style:{color:"#ABB2BF"},children:";"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"}"})}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D19A66"},children:".b"}),e(l.span,{style:{color:"#ABB2BF"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"	"}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:'/* select all element has class "b" */'})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"	color: "}),e(l.span,{style:{color:"#D19A66"},children:"white"}),e(l.span,{style:{color:"#ABB2BF"},children:";"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"}"})}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D19A66"},children:".c"}),e(l.span,{style:{color:"#ABB2BF"},children:","})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D19A66"},children:".d"}),e(l.span,{style:{color:"#ABB2BF"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"	"}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:'/* select all element has class "c" or "d" */'})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"	text-decoration: "}),e(l.span,{style:{color:"#D19A66"},children:"underline"}),e(l.span,{style:{color:"#ABB2BF"},children:";"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"}"})}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#61AFEF"},children:"#c"}),e(l.span,{style:{color:"#ABB2BF"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"	"}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:'/* select all element has id "e" */'})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"	background-color: "}),e(l.span,{style:{color:"#D19A66"},children:"yellow"}),e(l.span,{style:{color:"#ABB2BF"},children:";"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"	color: "}),e(l.span,{style:{color:"#D19A66"},children:"blue"}),e(l.span,{style:{color:"#ABB2BF"},children:";"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"}"})}),`
`,e(l.span,{class:"line",children:" "})]})})}),`
`,e(l.p,{children:["If I need to style the ",e(l.code,{children:"third span"}),", there are several ways to do it:"]}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:["by class:",`
`,e(l.ul,{children:[`
`,e(l.li,{children:["either ",e(l.code,{children:".a"}),", ",e(l.code,{children:".b"}),", ",e(l.code,{children:".c"})," work but ",e(l.code,{children:".a"}),", ",e(l.code,{children:".b"}),' will all so style the "first span" and "second span"']}),`
`,e(l.li,{children:[e(l.code,{children:".a.b.c"})," is better idea"]}),`
`]}),`
`]}),`
`,e(l.li,{children:["by id: ",e(l.code,{children:"#c"})," will work"]}),`
`,e(l.li,{children:["by position: ",e(l.code,{children:"div:nth-child(2) span:nth-child(1)"}),", learn more about ",e(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child",children:":nth-child"})]}),`
`,e(l.li,{children:"or all of above:"}),`
`]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"css","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"css","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D19A66"},children:".a.b"}),e(l.span,{style:{color:"#ABB2BF"},children:","})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D19A66"},children:".a.b.c"}),e(l.span,{style:{color:"#ABB2BF"},children:","})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#61AFEF"},children:"#c"}),e(l.span,{style:{color:"#ABB2BF"},children:","})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D19A66"},children:".c"}),e(l.span,{style:{color:"#61AFEF"},children:"#c"}),e(l.span,{style:{color:"#ABB2BF"},children:","})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#E06C75"},children:"div"}),e(l.span,{style:{color:"#56B6C2"},children:":nth-child"}),e(l.span,{style:{color:"#C678DD"},children:"("}),e(l.span,{style:{color:"#D19A66"},children:"2"}),e(l.span,{style:{color:"#C678DD"},children:") "}),e(l.span,{style:{color:"#E06C75"},children:"span"}),e(l.span,{style:{color:"#56B6C2"},children:":nth-child"}),e(l.span,{style:{color:"#C678DD"},children:"("}),e(l.span,{style:{color:"#D19A66"},children:"1"}),e(l.span,{style:{color:"#C678DD"},children:")"}),e(l.span,{style:{color:"#ABB2BF"},children:" {"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"}"})})]})})})]})}function p(n={}){const{wrapper:l}=n.components||{};return l?e(l,Object.assign({},n,{children:e(c,n)})):c(n)}const u=()=>s(o,{children:s(p,{},3,null)},3,"fARgkMRA");export{u as default,m as frontmatter,F as head,A as headings};
