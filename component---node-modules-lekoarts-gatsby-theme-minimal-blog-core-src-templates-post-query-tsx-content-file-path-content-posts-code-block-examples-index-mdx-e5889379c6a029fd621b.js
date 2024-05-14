"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[194],{1173:function(e,t,n){n.d(t,{p:function(){return u},A:function(){return g}});var a=n(6540),r=n(557),l=n(6835),o=n(3328),i=n(7715),c=n(7169);var s=e=>{let{post:t}=e;return null};const m=["16px","8px","4px"].map((e=>`rgba(0, 0, 0, 0.1) 0px ${e} ${e} 0px`));var p=e=>{let{data:{post:t},children:n}=e;return(0,r.Y)(o.A,null,(0,r.Y)(l.DZ,{as:"h1",variant:"styles.h1"},t.title),(0,r.Y)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.Y)("time",null,t.date),t.tags&&(0,r.Y)(a.Fragment,null," — ",(0,r.Y)(i.A,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.Y)("span",null,t.timeToRead," min read")),(0,r.Y)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:m.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.Y)(s,{post:t}))};const u=e=>{var t,n,a;let{data:{post:l}}=e;return(0,r.Y)(c.A,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function g(e){let{...t}=e;return a.createElement(p,t)}},7715:function(e,t,n){var a=n(557),r=n(6540),l=n(4794),o=n(3601),i=n(2174);t.A=e=>{let{tags:t}=e;const{tagsPath:n,basePath:c}=(0,o.A)();return(0,a.Y)(r.Fragment,null,t.map(((e,t)=>(0,a.Y)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.Y)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,i.A)(`/${c}/${n}/${e.slug}`)},e.name)))))}},7169:function(e,t,n){var a=n(6540),r=n(4794),l=n(7533);t.A=e=>{let{title:t="",description:n="",pathname:o="",image:i="",children:c=null,canonicalUrl:s=""}=e;const m=(0,l.A)(),{siteTitle:p,siteTitleAlt:u,siteUrl:g,siteDescription:h,siteImage:d,author:E,siteLanguage:b}=m,f={title:t?`${t} | ${p}`:u,description:n||h,url:`${g}${o||""}`,image:`${g}${i||d}`};return a.createElement(a.Fragment,null,a.createElement("html",{lang:b}),a.createElement("title",null,f.title),a.createElement("meta",{name:"description",content:f.description}),a.createElement("meta",{name:"image",content:f.image}),a.createElement("meta",{property:"og:title",content:f.title}),a.createElement("meta",{property:"og:url",content:f.url}),a.createElement("meta",{property:"og:description",content:f.description}),a.createElement("meta",{property:"og:image",content:f.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:f.title}),a.createElement("meta",{name:"twitter:url",content:f.url}),a.createElement("meta",{name:"twitter:description",content:f.description}),a.createElement("meta",{name:"twitter:image",content:f.image}),a.createElement("meta",{name:"twitter:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:creator",content:E}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),s?a.createElement("link",{rel:"canonical",href:s}):null,c)}},1875:function(e,t,n){n.r(t),n.d(t,{Head:function(){return s.p},default:function(){return m}});var a=n(6540),r=n(8453);const l={normal:{width:"100%",height:"352px"},compact:{width:"100%",height:"152px"}};var o=function(e){let{albumUri:t="6Ar5HxNWXtvraqs7FI7bYq",size:n="normal"}=e;return a.createElement("iframe",{title:"Spotify",style:{borderRadius:"12px"},src:`https://open.spotify.com/embed/album/${t}?theme=0`,width:l[n].width,height:l[n].height,frameBorder:"0",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"})};function i(e){const t=Object.assign({p:"p",pre:"pre",code:"code"},(0,r.RP)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"Here will a React component go:"),"\n",a.createElement(o),"\n",a.createElement(t.p,null,"Here will a normal code block go:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js"},"(function() {\n\nvar cache = {};\nvar form = $('form');\nvar minified = true;\n\nvar dependencies = {};\n\nvar treeURL = 'https://api.github.com/repos/PrismJS/prism/git/trees/gh-pages?recursive=1';\nvar treePromise = new Promise(function(resolve) {\n  $u.xhr({\n    url: treeURL,\n    callback: function(xhr) {\n      if (xhr.status < 400) {\n        resolve(JSON.parse(xhr.responseText).tree);\n      }\n    }\n  });\n});\n")),"\n",a.createElement(t.p,null,"A code block with a JSDoc comment, short, and long comment:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js"},"/**\n * Get value out of string (e.g. rem => px)\n * If value is px strip the px part\n * If the input is already a number only return that value\n * @param {string | number} input\n * @param {number} [rootFontSize]\n * @return {number} Number without last three characters\n * @example removeLastThree('6rem') => 6\n */\nconst getValue = (input, rootFontSize = 16) => {\n  if (typeof input === `number`) {\n    return input / rootFontSize\n  }\n\n  const isPxValue = input.slice(-2) === `px`\n\n  if (isPxValue) {\n    return parseFloat(input.slice(0, -2))\n  }\n\n  return parseFloat(input.slice(0, -3))\n}\n\n// This is a little helper function\nconst helper = (a, b) => a + b\n\n// This is also a little helper function but this time with a really long one-line comment that should show some more details\nconst morehelper = (a, b) => a * b\n\nexport { getValue, helper, morehelper }\n")),"\n",a.createElement(t.p,null,"Normal block without language:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,'import Test from "../components/test"\n\nconst Layout = ({ children }) => (\n  <Test>\n    {children}\n  </Test>\n)\n\nexport default Layout\n')),"\n",a.createElement(t.p,null,"Code block with code highlighting:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx",title:"src/components/post.jsx",highlight:"5-7,10"},'import * as React from "react"\n\nconst Post = ({ data: { post } }) => (\n  <Layout>\n    <Heading variant="h2" as="h2">\n      {post.title}\n    </Heading>\n    <p\n      sx={{\n        color: `secondary`,\n        mt: 3,\n        a: { color: `secondary` },\n        fontSize: [1, 1, 2],\n      }}\n    >\n      <span>{post.date}</span>\n      {post.tags && (\n        <React.Fragment>\n          {` — `}\n          <ItemTags tags={post.tags} />\n        </React.Fragment>\n      )}\n    </p>\n    <section\n      sx={{\n        ...CodeStyles,\n        my: 5,\n        ".gatsby-resp-image-wrapper": { my: 5, boxShadow: `lg` },\n      }}\n    >\n      <MDXRenderer>{post.body}</MDXRenderer>\n    </section>\n  </Layout>\n)\n\nexport default Post\n')),"\n",a.createElement(t.p,null,"Code block without title:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"Harry Potter and the Philosopher's Stone\n")),"\n",a.createElement(t.p,null,"Code block with lineNumbers (and lang):"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-text",withLineNumbers:!0},"Harry Potter and the Chamber of Secrets\n")),"\n",a.createElement(t.p,null,"Code block with lineNumbers (and without lang):"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-none",withLineNumbers:!0},"Harry Potter and the Chamber of Secrets\n")),"\n",a.createElement(t.p,null,"Code block with only the title:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-none",title:"src/utils/scream.js"},"const scream = (input) => window.alert(input)\n")),"\n",a.createElement(t.p,null,"Code block with only the title and with lineNumbers:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-none",title:"src/utils/scream.js",withLineNumbers:!0},"const scream = (input) => window.alert(input)\n")),"\n",a.createElement(t.p,null,"Line highlighting without code title:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js",highlight:"2,4-5"},'const test = 3\nconst foo = "bar"\nconst harry = "potter"\nconst hermione = "granger"\nconst ron = "weasley"\n')),"\n",a.createElement(t.p,null,"Here will ",a.createElement(t.code,null,"inline code")," go, just inside the text. Wow!"),"\n",a.createElement(t.p,null,"Code block with line numbers, highlighting, language, and title:"),"\n",a.createElement("div",{"data-testid":"code-block"},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-tsx",title:"src/components/blog.tsx",highlight:"7-8,19,21",withLineNumbers:!0},'import * as React from "react"\n\nconst Blog = ({ posts }: PostsProps) => {\n  const { tagsPath, basePath } = useSiteMetadata()\n\n  return (\n    <Layout>\n      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>\n        <Heading variant="h2" as="h2">\n          Blog\n        </Heading>\n        <Styled.a as={Link} sx={{ variant: `links.secondary` }} to={`/${basePath}/${tagsPath}`.replace(/\\/\\/+/g, `/`)}>\n          View all tags\n        </Styled.a>\n      </Flex>\n      <Listing posts={posts} sx={{ mt: [4, 5] }} />\n    </Layout>\n  )\n}\n\nexport default Blog\n'))))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?a.createElement(t,e,a.createElement(i,e)):i(e)},s=n(1173);function m(e){return a.createElement(s.A,e,a.createElement(c,e))}s.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-code-block-examples-index-mdx-e5889379c6a029fd621b.js.map