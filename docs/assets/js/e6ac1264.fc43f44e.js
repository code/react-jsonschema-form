"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7986],{876:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(r),h=o,d=p["".concat(i,".").concat(h)]||p[h]||u[h]||n;return r?a.createElement(d,s(s({ref:t},m),{},{components:r})):a.createElement(d,s({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<n;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8065:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(7896),o=(r(2784),r(876));const n={id:"intro",title:"Introduction",slug:"/"},s="react-jsonschema-form",l={unversionedId:"intro",id:"intro",title:"Introduction",description:"Build Status",source:"@site/docs/00-introduction.mdx",sourceDirName:".",slug:"/",permalink:"/react-jsonschema-form/docs/",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/docs/00-introduction.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"intro",title:"Introduction",slug:"/"},sidebar:"docs",next:{title:"Quickstart",permalink:"/react-jsonschema-form/docs/quickstart"}},i={},c=[{value:"Philosophy",id:"philosophy",level:2},{value:"Installation",id:"installation",level:2},{value:"As a script served from a CDN",id:"as-a-script-served-from-a-cdn",level:3},{value:"Usage",id:"usage",level:2},{value:"Theming",id:"theming",level:2},{value:"License",id:"license",level:2},{value:"Credits",id:"credits",level:2},{value:"Who uses react-jsonschema-form?",id:"who-uses-react-jsonschema-form",level:2}],m={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-jsonschema-form"},"react-jsonschema-form"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/rjsf-team/react-jsonschema-form/workflows/CI/badge.svg",alt:"Build Status"})),(0,o.kt)("p",null,"A simple ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," component capable of building HTML forms out of a ",(0,o.kt)("a",{parentName:"p",href:"http://json-schema.org/"},"JSON schema"),"."),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://rjsf-team.github.io/react-jsonschema-form/"},"live playground")," is hosted on GitHub Pages:"),(0,o.kt)("a",{target:"_blank",href:"https://rjsf-team.github.io/react-jsonschema-form/"},(0,o.kt)("img",{alt:"Playground",src:"https://i.imgur.com/M8ZCES5.gif"})),(0,o.kt)("h2",{id:"philosophy"},"Philosophy"),(0,o.kt)("p",null,"react-jsonschema-form is meant to automatically generate a React form based on a ",(0,o.kt)("a",{parentName:"p",href:"http://json-schema.org/"},"JSON Schema"),". If you want to generate a form for any data, sight unseen, simply given a JSON schema, react-jsonschema-form may be for you. If you have ",(0,o.kt)("em",{parentName:"p"},"a priori")," knowledge of your data and want a toolkit for generating forms for it, you might look elsewhere."),(0,o.kt)("p",null,"react-jsonschema-form also comes with tools such as ",(0,o.kt)("inlineCode",{parentName:"p"},"uiSchema")," and other form props to customize the look and feel of the form beyond the default themes."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"First install the dependencies from npm, along with a validator implementation (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"@rjsf/validator-ajv8"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install @rjsf/core @rjsf/utils @rjsf/validator-ajv8 --save\n")),(0,o.kt)("p",null,"Then import the dependencies as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import validator from '@rjsf/validator-ajv8';\nimport Form from '@rjsf/core';\n")),(0,o.kt)("p",null,"Our latest version requires React 16+. You can also install ",(0,o.kt)("inlineCode",{parentName:"p"},"react-jsonschema-form")," (the 1.x version) which works with React 15+."),(0,o.kt)("h3",{id:"as-a-script-served-from-a-cdn"},"As a script served from a CDN"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@rjsf/core/dist/core.cjs.production.min.js"><\/script>\n')),(0,o.kt)("p",null,"Source maps are available at ",(0,o.kt)("a",{parentName:"p",href:"https://unpkg.com/@rjsf/core/dist/core.cjs.production.min.js.map"},"this url"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: The CDN version ",(0,o.kt)("strong",{parentName:"p"},"does not")," embed ",(0,o.kt)("inlineCode",{parentName:"p"},"react")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"react-dom"),". If you want other distributions (i.e. umd, esm), look ",(0,o.kt)("a",{parentName:"p",href:"https://unpkg.com/@rjsf/core/dist/"},"here")," for all releases")),(0,o.kt)("p",null,"You'll also need to alias the default export property to use the Form component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const Form = JSONSchemaForm.default;\n// or\nconst { default: Form } = JSONSchemaForm;\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  title: 'Todo',\n  type: 'object',\n  required: ['title'],\n  properties: {\n    title: { type: 'string', title: 'Title', default: 'A new task' },\n    done: { type: 'boolean', title: 'Done?', default: false },\n  },\n};\n\nconst log = (type) => console.log.bind(console, type);\n\nrender(\n  <Form\n    schema={schema}\n    validator={validator}\n    onChange={log('changed')}\n    onSubmit={log('submitted')}\n    onError={log('errors')}\n  />,\n  document.getElementById('app')\n);\n")),(0,o.kt)("h2",{id:"theming"},"Theming"),(0,o.kt)("p",null,"For more information on what themes we support, see ",(0,o.kt)("a",{parentName:"p",href:"usage/themes"},"Using Themes"),"."),(0,o.kt)("h2",{id:"license"},"License"),(0,o.kt)("p",null,"Apache 2"),(0,o.kt)("h2",{id:"credits"},"Credits"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,(0,o.kt)("img",{src:"https://avatars1.githubusercontent.com/u/1066228?s=200&v=4",alt:"mozilla-services-logo",style:{maxHeight:"100px"}})),(0,o.kt)("td",null,"This project initially started as a ",(0,o.kt)("a",{href:"https://github.com/mozilla-services"},"mozilla-services")," project.")),(0,o.kt)("tr",null,(0,o.kt)("th",null,(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/1689183/51487090-4ea04f80-1d57-11e9-9a91-79b7ef8d2013.png",alt:"browserstack logo",style:{maxHeight:"100px"}})),(0,o.kt)("td",null,"Testing is powered by ",(0,o.kt)("a",{href:"https://www.browserstack.com/"},"BrowserStack"),".")),(0,o.kt)("tr",null,(0,o.kt)("th",null,(0,o.kt)("img",{src:"https://www.netlify.com/img/global/badges/netlify-color-accent.svg",alt:"netlify logo",style:{maxHeight:"100px"}})),(0,o.kt)("td",null,"Deploy Previews are provided by ",(0,o.kt)("a",{href:"https://www.netlify.com"},"Netlify"),"."))),(0,o.kt)("h2",{id:"who-uses-react-jsonschema-form"},"Who uses react-jsonschema-form?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"...")),(0,o.kt)("p",null,"Add your own company / organization by making a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rjsf-team/react-jsonschema-form/pulls"},"pull request"),"."))}u.isMDXComponent=!0}}]);