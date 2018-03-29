webpackJsonp([0x775535a10901],{414:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){return e.raw=t,e}t.__esModule=!0,t.pageQuery=void 0;var s=l(["",""],["",""]),c=a(2),u=n(c),p=a(56),d=a(48),f=a(3),g=n(f),h=a(113),m=a(415),b=a(106),y=g.default.div(s,m.base),v=g.default.div(s,m.page),T=g.default.div(s,m.pageContent),E=[{icon:"PullRequest",title:"Learn pill by pill",description:"Repills is a place to learn about web development and design through high-quality resources."},{icon:"Star",title:"Free resources",description:'The "pills" proposed are free and also grouped by section and topic. Browse them and discover what\'s new!'},{icon:"GitHub",title:"Open source project",description:'Discover the project on <a target="_blank" href="https://github.com/repills/repills-website">GitHub</a> and <a target="_blank" href="https://repills.github.io/repills-generator/">contribute</a> by adding new amazing resources.'}],w=function(e){function t(a){r(this,t);var n=o(this,e.call(this,a));n.handleNavigateToSection=function(e){var t=n.props.pathContext.sections[e];(0,h.navigateTo)(t.path)},n.handleNavigateToTopic=function(e){return alert("Navigate to topic: "+e)};var i=n.props.data;return n.state={latestSharedResources:i.latestSharedResources.edges.map(function(e){return(0,b.normalizeResource)(e)}),latestPublishedResources:i.latestPublishedResources.edges.map(function(e){return(0,b.normalizeResource)(e)})},n}return i(t,e),t.prototype.render=function(){var e=this.state,t=e.latestSharedResources,a=e.latestPublishedResources,n=this.props,r=(n.data,n.pathContext),o=r.sections,i=Object.keys(o),l=i.map(function(e){return o[e]}),s=d.sections.filter(function(e){return!i.includes(e.id)}).map(function(e){return e.disabled=!0,e}),c=[].concat(l,s);return u.default.createElement(y,null,u.default.createElement("div",null,u.default.createElement(p.HomePageHeader,{subTitle:"for web developers and UI designers",title:"Daily pills to improve your skills!"}),u.default.createElement("div",{style:{borderBottom:"1px solid #e0e0e0",padding:"0 0 40px"}},u.default.createElement(p.FeatureList,{features:E}))),u.default.createElement(v,null,u.default.createElement(T,null,u.default.createElement(p.PageBlock,{align:"CENTER",title:"Last added",style:{marginTop:"60px"}},u.default.createElement("div",{style:{marginTop:"40px"}},u.default.createElement(p.ResourcesListWithDetail,{resources:t,dateType:"createdAt",navigateToSection:this.handleNavigateToSection,navigateToTopic:this.handleNavigateToTopic}))),u.default.createElement(p.PageBlock,{align:"CENTER",title:"Last by publish date",style:{marginTop:"60px"}},u.default.createElement("div",{style:{marginTop:"40px"}},u.default.createElement(p.ResourcesListWithDetail,{resources:a,dateType:"publishedAt",navigateToSection:this.handleNavigateToSection,navigateToTopic:this.handleNavigateToTopic}))),u.default.createElement(p.PageBlock,{align:"CENTER",title:"Learn by topic",style:{marginTop:"60px"}},u.default.createElement(p.SectionsList,{navigateTo:function(e){return(0,h.navigateTo)(e)},sections:c,style:{marginTop:"40px"}})))))},t}(u.default.Component);t.default=w;t.pageQuery="** extracted graphql fragment **"},415:function(e,t,a){"use strict";function n(e,t){return e.raw=t,e}t.__esModule=!0,t.title=t.pageContent=t.page=t.base=void 0;var r=n(["\n  max-width: ",";\n  margin: 0 auto;\n"],["\n  max-width: ",";\n  margin: 0 auto;\n"]),o=n(["\n"],["\n"]),i=n(["\n  ","\n  color: ",";\n  margin: 0;\n  line-height: 1;\n"],["\n  ","\n  color: ",";\n  margin: 0;\n  line-height: 1;\n"]),l=a(3),s=a(56),c=s.theme.palettes,u=c.basic;t.base=(0,l.css)(r,(0,s.extRem)(1200)),t.page=(0,l.css)(o),t.pageContent=(0,l.css)(o),t.title=(0,l.css)(i,s.typography.header1,u.primaryHighest)},106:function(e,t,a){"use strict";function n(e){var t=e.node;return t.frontmatter.color=o[t.frontmatter.type.join("_")].color,t.frontmatter.typeLabel=o[t.frontmatter.type.join("_")].label.singular,t.frontmatter}t.__esModule=!0,t.normalizeResource=n;var r=a(48),o=r.types}});
//# sourceMappingURL=component---src-templates-home-index-js-753f34fb6bc7402bce72.js.map