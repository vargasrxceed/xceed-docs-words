"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[6942],{7336:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>i});var a=t(4848),o=t(8453);const r={},s="Updating a Table of Contents",d={id:"code-snippets/table-of-contents/updating-table-contents",title:"Updating a Table of Contents",description:"The following example demonstrates how to load a document containing a Table of Contents, add a new Paragraph with a specific Heading, and update the Table of Contents.",source:"@site/docs/code-snippets/table-of-contents/updating-table-contents.md",sourceDirName:"code-snippets/table-of-contents",slug:"/code-snippets/table-of-contents/updating-table-contents",permalink:"/xceed-docs-words/docs/code-snippets/table-of-contents/updating-table-contents",draft:!1,unlisted:!1,editUrl:"https://github.com/vargasrxceed/xceed-docs-words/docs/code-snippets/table-of-contents/updating-table-contents.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Inserting a Table of Contents at the End of a Document",permalink:"/xceed-docs-words/docs/code-snippets/table-of-contents/inserting-table-of-content-at-end"},next:{title:"Tables and Cells",permalink:"/xceed-docs-words/docs/category/tables-and-cells"}},c={},i=[];function l(e){const n={br:"br",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"updating-a-table-of-contents",children:"Updating a Table of Contents"})}),"\n",(0,a.jsx)(n.p,{children:"The following example demonstrates how to load a document containing a Table of Contents, add a new Paragraph with a specific Heading, and update the Table of Contents."}),"\n",(0,a.jsxs)(n.p,{children:["When opening the resulting saved document, MS Word will ask if you want to update the Table of Contents, say yes.",(0,a.jsx)(n.br,{}),"\n","If this document is converted to PDF (without opening it with MS Word), the Table of Contents will be automatically updated in the PDF document."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'class Program\r\n{\r\n    static void Main(string[] args)\r\n    {\r\n        // Creates a document\r\n        using (var document = DocX.Load("TOCDocument.docx"))\r\n        {\r\n            // Try to find a specific paragraph.\r\n            var p = document.Paragraphs.LastOrDefault(x => x.Text.Contains("Heading Three"));\r\n            if (p != null)\r\n            {\r\n                // Add a paragraph before it and use the "Heading1" style.\r\n                var newParagraph = p.InsertParagraphBeforeSelf("A new Header")\r\n                                    .Color(System.Drawing.Color.Red)\r\n                                    .SpacingAfter(25d);\r\n                newParagraph.StyleName = "Heading1";\r\n                \r\n                // Add another paragraph with a Page break.\r\n                newParagraph.InsertParagraphAfterSelf("New set of data.")\r\n                            .InsertPageBreakAfterSelf();\r\n                \r\n                // Force an update of the Table of Content.\r\n                document.UpdateFields();\r\n            }\r\n            document.SaveAs("UpdateTableOfContent.docx");\r\n        }\r\n    }\r\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var a=t(6540);const o={},r=a.createContext(o);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);