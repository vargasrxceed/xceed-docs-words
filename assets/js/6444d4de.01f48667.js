"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[8716],{8510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=n(4848),s=n(8453),r=n(1470),l=n(9365);const o={},a="Listing the contents of a zip file",c={id:"code-snippets/listing/listing-content-zip",title:"Listing the contents of a zip file",description:"This topic demonstrates how to get a listing of all of the files contained in a zip file.",source:"@site/zip/code-snippets/listing/listing-content-zip.md",sourceDirName:"code-snippets/listing",slug:"/code-snippets/listing/listing-content-zip",permalink:"/xceed-docs-words/zip/code-snippets/listing/listing-content-zip",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarzip",previous:{title:"Listing the contents of a folder",permalink:"/xceed-docs-words/zip/code-snippets/listing/listing-content-folder"},next:{title:"Listing the contents of a zip file (QuickZip)",permalink:"/xceed-docs-words/zip/code-snippets/listing/listing-content-quickzip"}},u={},d=[{value:"Basic steps",id:"basic-steps",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Things you should consider",id:"things-you-should-consider",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"listing-the-contents-of-a-zip-file",children:"Listing the contents of a zip file"})}),"\n",(0,i.jsx)(t.p,{children:"This topic demonstrates how to get a listing of all of the files contained in a zip file."}),"\n",(0,i.jsx)(t.h2,{id:"basic-steps",children:"Basic steps"}),"\n",(0,i.jsx)(t.p,{children:"To list the contents of a zip file, the following steps must be performed:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Retrieve a reference to a zip file using the ",(0,i.jsx)(t.code,{children:"ZipArchive"})," class."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Call the ",(0,i.jsx)(t.code,{children:"GetFiles"})," method to retrieve a listing of the files contained within the zip file."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"You can now loop through the files and extract the desired information."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"demonstration",children:"Demonstration"}),"\n",(0,i.jsx)(t.p,{children:"This example demonstrates how to list the contents of a zip file."}),"\n",(0,i.jsxs)(r.A,{children:[(0,i.jsx)(l.A,{value:"csharp",label:"C#",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'  using Xceed.Zip;\r\n  using Xceed.FileSystem;\r\n  \r\n  ZipArchive zip = new ZipArchive( new DiskFile( @"c:\\test.zip" ) );\r\n  \r\n  foreach( AbstractFile f in zip.GetFiles( true ) )\r\n  {\r\n    Console.WriteLine( f.FullName );\r\n  } \n'})})}),(0,i.jsx)(l.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-vb.NET",children:'  Imports Xceed.Zip\r\n  Imports Xceed.FileSystem\r\n\r\n  Dim zip As New ZipArchive(New DiskFile("c:\\test.zip"))\r\n  Dim f As AbstractFile\r\n\r\n  For Each f In zip.GetFiles( True )\r\n    ListBox1.Items.Add( f.FullName )\r\n  Next\n'})})})]}),"\n",(0,i.jsx)(t.h2,{id:"things-you-should-consider",children:"Things you should consider"}),"\n",(0,i.jsx)(t.p,{children:"The main questions you should ask yourself when copying items to a zip file are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Do you want to filter (specify specific files and folders) the items that are to be listed? Use ",(0,i.jsx)(t.code,{children:"filters"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Do you also want to retrieve a listing of the zipped folders? Use the ",(0,i.jsx)(t.code,{children:"GetFolders"})," method."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Do you want to retrieve a reference to a single zipped file or folder? Use the ",(0,i.jsx)(t.code,{children:"GetFile"})," or ",(0,i.jsx)(t.code,{children:"GetFolder"})," methods."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Do you want to list the contents of a specific folder within the zip file? Create an instance of a ",(0,i.jsx)(t.code,{children:"ZippedFolder"})," object rather than a ",(0,i.jsx)(t.code,{children:"ZipArchive"})," object."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Do you only want to do basic zip file operations? Use the ",(0,i.jsx)(t.a,{href:"/zip/basic-concepts/quick-zip",children:"QuickZip"})," class."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var i=n(4164);const s={tabItem:"tabItem_Ymn6"};var r=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,l),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>y});var i=n(6540),s=n(4164),r=n(3104),l=n(6347),o=n(205),a=n(7485),c=n(1682),u=n(679);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:s}}=e;return{value:t,label:n,attributes:i,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=h(e),[l,a]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[c,d]=f({queryString:n,groupId:s}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,u.Dv)(n);return[s,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),x=(()=>{const e=c??m;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{x&&a(x)}),[x]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=n(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function v(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:o}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,n=a.indexOf(t),s=o[n].value;s!==i&&(c(t),l(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>a.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(j,{...t,...e})]})}function y(e){const t=(0,b.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var i=n(6540);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);