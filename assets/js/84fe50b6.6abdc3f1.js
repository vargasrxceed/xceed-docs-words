"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[1675],{7784:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(4848),i=t(8453);const s={},r="Modifying Sections",a={id:"code-snippets/sections/modifying-sections",title:"Modifying Sections",description:"The following example demonstrates how to modify the page orientation per section in a Document.",source:"@site/docs/code-snippets/sections/modifying-sections.md",sourceDirName:"code-snippets/sections",slug:"/code-snippets/sections/modifying-sections",permalink:"/xceed-docs-words/docs/code-snippets/sections/modifying-sections",draft:!1,unlisted:!1,editUrl:"https://github.com/vargasrxceed/xceed-docs-words/docs/code-snippets/sections/modifying-sections.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Inserting Sections",permalink:"/xceed-docs-words/docs/code-snippets/sections/inserting-sections"},next:{title:"Table of Contents",permalink:"/xceed-docs-words/docs/category/table-of-contents"}},c={},d=[];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"modifying-sections",children:"Modifying Sections"})}),"\n",(0,o.jsx)(n.p,{children:"The following example demonstrates how to modify the page orientation per section in a Document."}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"This is only available in v1.5 and up."})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'// Create a document.\r\nusing(var document = DocX.Create("SetPageOrientations.docx"))\r\n{\r\n    // Section 1\r\n    // Set Page Orientation to Landscape.\r\n    document.Sections[0].PageLayout.Orientation = Orientation.Landscape;\r\n    // Add paragraphs in section 1.\r\n    document.InsertParagraph("This is the first page in Landscape format.");\r\n    // Add a section break as a page break to end section 1.\r\n    // The new section properties will be based on last section properties.\r\n    document.InsertSectionPageBreak();\r\n\r\n    // Section 2\r\n    // Set Page Orientation to Portrait.\r\n    document.Sections[1].PageLayout.Orientation = Orientation.Portrait;\r\n    // Add paragraphs in section 2.\r\n    document.InsertParagraph("This is the second page in Portrait format.");\r\n    // Add a section break as a page break to end section 2.\r\n    // The new section properties will be based on last section properties.\r\n    document.InsertSectionPageBreak();\r\n\r\n    // Section 3\r\n    // Set Page Orientation to Landscape.\r\n    document.Sections[2].PageLayout.Orientation = Orientation.Landscape;\r\n    // Add paragraphs in section 3.\r\n    document.InsertParagraph("This is the third page in Landscape format.");\r\n    document.Save();\r\n}\n'})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(6540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);