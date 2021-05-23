(self.webpackChunkdemocraciv_discord_bot_docs=self.webpackChunkdemocraciv_discord_bot_docs||[]).push([[297],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,g=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8935:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i={id:"tags",title:"Tags"},s={unversionedId:"guides/tags",id:"guides/tags",isDocsHomePage:!1,title:"Tags",description:"Instead of hard-coded commands for each link or text, we use dynamic tags for this.",source:"@site/docs/guides/tags.md",sourceDirName:"guides",slug:"/guides/tags",permalink:"/docs/guides/tags",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guides/tags.md",version:"current",frontMatter:{id:"tags",title:"Tags"},sidebar:"mySidebar",previous:{title:"Legislative Sessions",permalink:"/docs/guides/government/legislative_sessions"},next:{title:"NPCs",permalink:"/docs/guides/npcs"}},l=[{value:"Embed and Plaintext Tags",id:"embed-and-plaintext-tags",children:[]},{value:"How do I know if something is a tag or a command?",id:"how-do-i-know-if-something-is-a-tag-or-a-command",children:[]}],d={toc:l};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Instead of hard-coded commands for each link or text, we use dynamic tags for this."),(0,r.kt)("p",null,"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"-constitution"),"\u200b, ",(0,r.kt)("inlineCode",{parentName:"p"},"-docket")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"-sue")," are all tags, not commands. They\nlook like commands because they are also accessed via the bot\u2019s prefixes, ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),", but\nthey are not commands. As they are not commands, they won\u2019t show up in -help\u200b,\nsince ",(0,r.kt)("inlineCode",{parentName:"p"},"\u200b-help"),"\u200b is for commands."),(0,r.kt)("p",null,"There are global and local tags. Global tags can only be created by Democraciv\nModeration and Nation Admins, though nation admins can only make global tags\nwith their nation bot. Tags like ",(0,r.kt)("inlineCode",{parentName:"p"},"-constitution"),"\u200b, ",(0,r.kt)("inlineCode",{parentName:"p"},"-charter")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"-leaders")," are all global tags.\nThey work on every server the bot is in, and in DMs with the bot itself."),(0,r.kt)("p",null,"Local tags only work on the server that they were created on. Everyone is allowed to\ncreate local tags, though Server Administrators can change that setting so that only\nServer Administrators can make tags on their server with the bot."),(0,r.kt)("p",null,"Tags are created with the interactive ",(0,r.kt)("inlineCode",{parentName:"p"},"-tag add")," command. When you invoke that\ncommand on the Democraciv server and have either the Moderation or Nation Admin\nrole, the bot will ask if the tag should be global."),(0,r.kt)("p",null,"Aliases to tags exist too, for example is ",(0,r.kt)("inlineCode",{parentName:"p"},"-c"),"\u200b, or ",(0,r.kt)("inlineCode",{parentName:"p"},"-const")," and alias to ",(0,r.kt)("inlineCode",{parentName:"p"},"-constitution"),"\u200b. They\nare created with \u200b",(0,r.kt)("inlineCode",{parentName:"p"},"-tag addalias <tag>"),"\u200b."),(0,r.kt)("p",null,"Tags can be edited and removed, with ",(0,r.kt)("inlineCode",{parentName:"p"},"-tag edit <tag>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"-tag remove <tag\u200b>"),". Only the\nperson that made the tag, nation admins and server administrators on that server\ncan edit or remove it."),(0,r.kt)("p",null,"Tags can be claimed if the original author of that tag left the server that the tag was\ncreated on, with \u200b",(0,r.kt)("inlineCode",{parentName:"p"},"-tag claim <tag>\u200b"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../commands#tags"},"List of all commands regarding tags.")),(0,r.kt)("h2",{id:"embed-and-plaintext-tags"},"Embed and Plaintext Tags"),(0,r.kt)("p",null,"See these images explaining the differences."),(0,r.kt)("h2",{id:"how-do-i-know-if-something-is-a-tag-or-a-command"},"How do I know if something is a tag or a command?"),(0,r.kt)("p",null,"Often you can just think about it for a second. Tags are static, and their content cannot change by itself. That tells us, that ",(0,r.kt)("inlineCode",{parentName:"p"},"-legislature session")," is most likely a command. If it was a tag, someone would have to do ",(0,r.kt)("inlineCode",{parentName:"p"},"-tag edit legislature session")," every time someone wants to submit a bill or motion. "),(0,r.kt)("p",null,"However, you can also just do this test. "),(0,r.kt)("p",null,"Result: ",(0,r.kt)("inlineCode",{parentName:"p"},"-constitution")," is a tag."),(0,r.kt)("p",null,"Result: ",(0,r.kt)("inlineCode",{parentName:"p"},"-dog")," is a command."))}c.isMDXComponent=!0}}]);