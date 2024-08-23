"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[2374],{5916:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=t(4848),a=t(8453);const r={},s="Inserting a Table of Contents at the Beginning of a Document",c={id:"code-snippets/table-of-contents/inserting-table-of-content-at-beginning",title:"Inserting a Table of Contents at the Beginning of a Document",description:"The following example demonstrates how to add a Table of Contents at the beginning of a Document.",source:"@site/docs/code-snippets/table-of-contents/inserting-table-of-content-at-beginning.md",sourceDirName:"code-snippets/table-of-contents",slug:"/code-snippets/table-of-contents/inserting-table-of-content-at-beginning",permalink:"/xceed-docs-words/docs/code-snippets/table-of-contents/inserting-table-of-content-at-beginning",draft:!1,unlisted:!1,editUrl:"https://github.com/vargasrxceed/xceed-docs-words/docs/code-snippets/table-of-contents/inserting-table-of-content-at-beginning.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Table of Contents",permalink:"/xceed-docs-words/docs/category/table-of-contents"},next:{title:"Inserting a Table of Contents at the End of a Document",permalink:"/xceed-docs-words/docs/code-snippets/table-of-contents/inserting-table-of-content-at-end"}},i={},d=[];function l(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"inserting-a-table-of-contents-at-the-beginning-of-a-document",children:"Inserting a Table of Contents at the Beginning of a Document"})}),"\n",(0,o.jsx)(n.p,{children:"The following example demonstrates how to add a Table of Contents at the beginning of a Document."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'public static void InsertTableOfContent()\r\n{\r\n  Console.WriteLine("\\tInsertTableOfContent()");\r\n  \r\n  // Creates a document\r\n  using(var document = DocX.Create(@"InsertTableOfContent.docx"))\r\n  {\r\n    // Add a title\r\n    document.InsertParagraph("Insert Table of Content").FontSize(15d).SpacingAfter(50d).Alignment = Alignment.center;\r\n    \r\n    // Insert a table of content and a page break.\r\n    var tocSwitches = new Dictionary<TableOfContentsSwitches, string>()\r\n    {\r\n      { TableOfContentsSwitches.O, "1-3"},\r\n      { TableOfContentsSwitches.U, ""},\r\n      { TableOfContentsSwitches.Z, ""},\r\n      { TableOfContentsSwitches.H, ""},\r\n    };\r\n    \r\n    document.InsertTableOfContents("Teams", tocSwitches);\r\n    document.InsertParagraph().InsertPageBreakAfterSelf();\r\n    \r\n    // Create a paragraph and add teams.\r\n    var p = document.InsertParagraph();\r\n    TableOfContentSample.AddTeams(p);\r\n    \r\n    document.Save();\r\n    Console.WriteLine("\\tCreated: InsertTableOfContent.docx\\n");\r\n  }\r\n}\n'})})]})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(6540);const a={},r=o.createContext(a);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);