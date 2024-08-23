"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[8965],{8397:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>i});var s=r(4848),a=r(8453);const t={},d="Adding Shapes",o={id:"code-snippets/shapes/adding-shapes",title:"Adding Shapes",description:"The following example demonstrates how to add rectangles in a Document.",source:"@site/docs/code-snippets/shapes/adding-shapes.md",sourceDirName:"code-snippets/shapes",slug:"/code-snippets/shapes/adding-shapes",permalink:"/xceed-docs-words/docs/code-snippets/shapes/adding-shapes",draft:!1,unlisted:!1,editUrl:"https://github.com/vargasrxceed/xceed-docs-words/docs/code-snippets/shapes/adding-shapes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Shapes",permalink:"/xceed-docs-words/docs/category/shapes"},next:{title:"Adding Shapes with Text Wrapping",permalink:"/xceed-docs-words/docs/code-snippets/shapes/adding-shapes-with-text-wrapping"}},p={},i=[];function c(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"adding-shapes",children:"Adding Shapes"})}),"\n",(0,s.jsx)(n.p,{children:"The following example demonstrates how to add rectangles in a Document."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'class Program\r\n{\r\n    static void Main(string[] args)\r\n    {\r\n        using (var document = DocX.Create("AddShape.docx"))\r\n        {\r\n            // Add a title\r\n            document.InsertParagraph("Inserting shapes").FontSize(15d).SpacingAfter(50d).Alignment = Alignment.center;\r\n\r\n            // Adding first shape.\r\n            var shape = document.AddShape(50, 50);\r\n\r\n            // Create a paragraph and insert the shape at its 16th character.\r\n            var p = document.InsertParagraph("Here is a simple default rectangle positioned on the 16th character of this paragraph.");\r\n            p.InsertShape(shape, 16);\r\n            p.SpacingAfter(30);\r\n\r\n            // Adding second shape.\r\n            var shape2 = document.AddShape(100, 0);\r\n            shape2.FillColor = Color.Orange;\r\n            shape2.Height = 175;\r\n            shape2.OutlineColor = Color.Black;\r\n            shape2.OutlineWidth = 4f;\r\n            shape2.OutlineDash = DashStyle.Dot;\r\n\r\n            // Create a paragraph and append the shape to it.\r\n            var p2 = document.InsertParagraph("Here is another rectangle appended to this paragraph: ");\r\n            p2.AppendShape(shape2);\r\n\r\n            // Modify OutlineColor from shape in second paragraph.\r\n            p2.Shapes.First().OutlineColor = Color.Red;\r\n\r\n            document.Save();\r\n        }\r\n    }\r\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>o});var s=r(6540);const a={},t=s.createContext(a);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);