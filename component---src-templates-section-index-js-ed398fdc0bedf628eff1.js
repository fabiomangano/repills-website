webpackJsonp([96816546264801],{105:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return e.raw=t,e}t.__esModule=!0,t.HeaderContentSecondary=t.PageContentSecondary=t.HeaderContentMain=t.PageContentMain=t.HeaderContent=t.PageContent=void 0;var r=o(["\n  ","\n"],["\n  ","\n"]),i=o(["\n  ","\n  padding-top: ",";\n  align-items: center;\n"],["\n  ","\n  padding-top: ",";\n  align-items: center;\n"]),l=o(["\n  ","\n  ","\n"],["\n  ","\n  ","\n"]),u=o(["\n    ","\n    padding-right: ",";\n  "],["\n    ","\n    padding-right: ",";\n  "]),c=o(["\n  ","\n  padding-bottom: ",";\n"],["\n  ","\n  padding-bottom: ",";\n"]),s=o(["\n    ","\n  "],["\n    ","\n  "]),d=o(["",""],["",""]),p=o(["\n  ","\n  padding-bottom: ",";\n  align-items: center;\n"],["\n  ","\n  padding-bottom: ",";\n  align-items: center;\n"]),f=n(56),g=n(103),m=n(3),h=a(m),y=(t.PageContent=h.default.div(r,(0,g.grid)()),t.HeaderContent=h.default.div(i,(0,g.grid)(),(0,f.extRem)(32)),(0,m.css)(l,g.grid.unit({size:1}),f.media.LG(u,g.grid.unit({size:.75}),(0,f.extRem)(48)))),C=(t.PageContentMain=h.default.div(r,y),t.HeaderContentMain=h.default.div(c,y,(0,f.extRem)(32)),(0,m.css)(l,g.grid.unit({size:1}),f.media.LG(s,g.grid.unit({size:.25}))));t.PageContentSecondary=h.default.div(d,C),t.HeaderContentSecondary=h.default.div(p,C,(0,f.extRem)(32))},416:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=n(2),u=a(l),c=n(56),s=n(4),d=a(s),p=n(105),f=n(106),g=n(113),m=function(e){function t(){var n,a,i;o(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=a=r(this,e.call.apply(e,[this].concat(u))),a.handleNavigateToSection=function(e){var t=a.props.pathContext.sections[e];(0,g.navigateTo)(t.path)},a.handleNavigateToTopic=function(e){return alert("Navigate to topic: "+e)},i=n,r(a,i)}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.data,n=e.pathContext,a=(n.id,n.name),o=n.color,r=n.resources,i=n.description,l=n.topics,s=n.resourcesCount,d=n.topicsCount,m=(n.maintainers,n.types),h=n.icon,y=t.resources,C=t.contributors,b=y.edges.map(function(e){return(0,f.normalizeResource)(e)});C.group.map(function(e){return{nickname:e.fieldValue,publishedCount:e.totalCount}});return u.default.createElement("div",null,u.default.createElement(p.HeaderContent,null,u.default.createElement(p.HeaderContentMain,null,u.default.createElement(c.SectionPageHeader,{color:o,description:i,icon:h,label:"Section",title:a})),u.default.createElement(p.HeaderContentSecondary,null,u.default.createElement(c.Counter,{count:s,label:"total pills",stats:(0,c.getResourcesStats)(r,!0)}),u.default.createElement(c.ShareBar,{link:"http://repills.com",text:"Learn pill by pill on repills.com",title:"Pills around the web for web developers and UI designers",types:["facebook","google","linkedin","twitter","email"],style:{marginTop:"24px",display:"flex",justifyContent:"center"}}))),u.default.createElement(p.PageContent,null,u.default.createElement(p.PageContentMain,null,u.default.createElement(c.PageBlock,{title:"Last added"},u.default.createElement(c.ResourcesListWithDetail,{resources:b,dateType:"createdAt",navigateToSection:this.handleNavigateToSection,navigateToTopic:this.handleNavigateToTopic})),u.default.createElement(c.PageBlock,{contentsCount:d,title:"Topic"+(1===d?"":"s"),style:{margin:"52px 0"}},u.default.createElement(c.TopicsList,{navigateTo:function(e){return(0,g.navigateTo)(e)},topics:Object.keys(l).map(function(e){return l[e]})}))),u.default.createElement(p.PageContentSecondary,null,u.default.createElement(c.PageBlock,{title:"Types"},u.default.createElement(c.TypesList,{navigateTo:function(e){return(0,g.navigateTo)(e)},types:m})),u.default.createElement(c.TileCta,{cta:{label:"Contribute",onClick:function(){return window.open("https://repills.github.io/repills-generator/","_blank")}},description:'Contribute to enrich this section by sharing new and amazing content about "'+a+'"',icon:"GitHub",title:"We do great things together!",style:{marginTop:"32px"}}),u.default.createElement(c.TileCta,{cta:{label:"Contact us",onClick:function(){return"Clicked"},skin:"outline"},description:"Great! Propose yourself as maintainer and help us to select high-level contents.",icon:"User",title:'Are you an expert in "'+a+'"?',style:{marginTop:"32px"}}))))},t}(u.default.Component);m.propTypes={pathContext:d.default.shape({}),data:d.default.shape({allMarkdownRemark:d.default.shape({totalCount:d.default.number.isRequired,edges:d.default.arrayOf(d.default.shape({node:d.default.shape({frontmatter:d.default.shape({title:d.default.string.isRequired})})}).isRequired)})})},t.default=m;t.pageQuery="** extracted graphql fragment **"},106:function(e,t,n){"use strict";function a(e){var t=e.node;return t.frontmatter.color=r[t.frontmatter.type.join("_")].color,t.frontmatter.typeLabel=r[t.frontmatter.type.join("_")].label.singular,t.frontmatter}t.__esModule=!0,t.normalizeResource=a;var o=n(48),r=o.types}});
//# sourceMappingURL=component---src-templates-section-index-js-ed398fdc0bedf628eff1.js.map