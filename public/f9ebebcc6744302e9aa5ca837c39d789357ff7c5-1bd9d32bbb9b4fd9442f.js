(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/d1K":function(e,t,a){"use strict";a.d(t,"a",(function(){return N}));var i=a("q1tI"),n=a.n(i),r=a("Wbzz"),s=a("iSRb"),l=a.n(s),o=function(e){var t=e.author,a=e.isIndex;return n.a.createElement("div",{className:l.a.author},n.a.createElement(r.Link,{to:"/"},n.a.createElement("img",{src:Object(r.withPrefix)(t.photo),className:l.a.author__photo,width:"75",height:"75",alt:t.name})),!0===a?n.a.createElement("h1",{className:l.a.author__title},n.a.createElement(r.Link,{className:l.a["author__title-link"],to:"/"},t.name)):n.a.createElement("h2",{className:l.a.author__title},n.a.createElement(r.Link,{className:l.a["author__title-link"],to:"/"},t.name)),n.a.createElement("p",{className:l.a.author__subtitle},t.bio))},d=a("7Qib"),c=a("euHg"),u=a.n(c),m=function(e){var t=e.name,a=e.icon;return n.a.createElement("svg",{className:u.a.icon,viewBox:a.viewBox},n.a.createElement("title",null,t),n.a.createElement("path",{d:a.path}))},f=a("aU/I"),p=a.n(f),g=function(e){var t=e.contacts;return n.a.createElement("div",{className:p.a.contacts},n.a.createElement("ul",{className:p.a.contacts__list},Object.keys(t).map((function(e){return t[e]?n.a.createElement("li",{className:p.a["contacts__list-item"],key:e},n.a.createElement("a",{className:p.a["contacts__list-item-link"],href:Object(d.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},n.a.createElement(m,{name:e,icon:Object(d.b)(e)}))):null}))))},h=a("Nrk+"),_=a.n(h),b=function(e){var t=e.copyright;return n.a.createElement("div",{className:_.a.copyright},t)},v=a("je8k"),y=a.n(v),E=function(e){var t=e.menu;return n.a.createElement("nav",{className:y.a.menu},n.a.createElement("ul",{className:y.a.menu__list},t.map((function(e){return n.a.createElement("li",{className:y.a["menu__list-item"],key:e.path},n.a.createElement(r.Link,{to:e.path,className:y.a["menu__list-item-link"],activeClassName:y.a["menu__list-item-link--active"]},e.label))}))))},S=a("SySy"),k=a.n(S),x=a("gGy4"),N=function(e){var t=e.isIndex,a=Object(x.b)(),i=a.author,r=a.copyright,s=a.menu;return n.a.createElement("div",{className:k.a.sidebar},n.a.createElement("div",{className:k.a.sidebar__inner},n.a.createElement(o,{author:i,isIndex:t}),n.a.createElement(E,{menu:s}),n.a.createElement(g,{contacts:i.contacts}),n.a.createElement(b,{copyright:r})))}},"1xLx":function(e,t,a){e.exports={feed__item:"Feed-module--feed__item--2D5rE","feed__item-title":"Feed-module--feed__item-title--3nigr","feed__item-title-link":"Feed-module--feed__item-title-link--iFMRs","feed__item-description":"Feed-module--feed__item-description--1uO8e","feed__item-meta-time":"Feed-module--feed__item-meta-time--3t1fg","feed__item-meta-divider":"Feed-module--feed__item-meta-divider--N-Q0A","feed__item-meta-category-link":"Feed-module--feed__item-meta-category-link--23f8F","feed__item-readmore":"Feed-module--feed__item-readmore--1u6bI"}},"6V6j":function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var i=a("q1tI"),n=a.n(i),r=a("Wbzz"),s=a("9eSz"),l=a.n(s),o=a("wd/R"),d=a.n(o),c=a("1xLx"),u=a.n(c),m=function(e){var t=e.edges;return n.a.createElement("div",{className:u.a.feed},t.map((function(e){return n.a.createElement("div",{className:u.a.feed__item,key:e.node.fields.slug},n.a.createElement("div",{className:u.a["feed__item-meta"]},n.a.createElement("time",{className:u.a["feed__item-meta-time"],dateTime:d()(e.node.frontmatter.date).format("MMMM D, YYYY")},d()(e.node.frontmatter.date).format("MMMM YYYY")),n.a.createElement("span",{className:u.a["feed__item-meta-divider"]}),n.a.createElement("span",{className:u.a["feed__item-meta-category"]},n.a.createElement(r.Link,{to:e.node.fields.categorySlug,className:u.a["feed__item-meta-category-link"]},e.node.frontmatter.category))),n.a.createElement("h2",{className:u.a["feed__item-title"]},n.a.createElement(r.Link,{className:u.a["feed__item-title-link"],to:e.node.fields.slug},e.node.frontmatter.title)),n.a.createElement(r.Link,{to:e.node.frontmatter.socialImage,className:u.a["feed__item-meta-category-link"]},n.a.createElement(l.a,{fixed:e.node.frontmatter.socialImage})),n.a.createElement(l.a,{fixed:e.node.frontmatter.socialImage}),n.a.createElement("p",{className:u.a["feed__item-description"]},e.node.frontmatter.description),n.a.createElement(r.Link,{className:u.a["feed__item-readmore"],to:e.node.fields.slug},"Read more →"))})))}},"9eSz":function(e,t,a){"use strict";var i=a("TqRt");t.__esModule=!0,t.default=void 0;var n,r=i(a("PJYZ")),s=i(a("VbXa")),l=i(a("8OQS")),o=i(a("pVnL")),d=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=f(t);return g[a]||!1},_="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,y=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},i&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:i,sizes:r}),d.default.createElement("source",{media:n,srcSet:a,sizes:r}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function k(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function N(e,t){var a=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?i:a)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var w=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+d+s+l+a+i+t+r+n+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=d.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,n=e.generateSources,r=e.spreadProps,s=e.ariaHidden,l=d.default.createElement(R,(0,o.default)({ref:t,src:a},r,{ariaHidden:s}));return i.length>1?d.default.createElement("picture",null,n(i),l):l})),R=d.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,n=e.src,r=e.style,s=e.onLoad,c=e.onError,u=e.loading,m=e.draggable,f=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":f,sizes:a,srcSet:i,src:n},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:m,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!_&&v&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||b&&(_||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)(a)),a.handleRef=a.handleRef.bind((0,r.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=w(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,m=void 0===c?{}:c,f=e.placeholderClassName,g=e.fluid,h=e.fixed,_=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,y=e.itemProp,S=e.loading,N=e.draggable,w=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,o.default)({opacity:w?1:0,transition:O?"opacity "+b+"ms":"none"},l),z="boolean"==typeof _?"lightgray":_,M={transitionDelay:b+"ms"},V=(0,o.default)({opacity:this.state.imgLoaded?0:1},O&&M,l,m),C={title:t,alt:this.state.isVisible?"":a,style:V,className:f,itemProp:y};if(g){var j=g,H=p(g);return d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),z&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&M)}),H.base64&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:C,imageVariants:j,generateSources:x}),H.tracedSVG&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:C,imageVariants:j,generateSources:k}),this.state.isVisible&&d.default.createElement("picture",null,E(j),d.default.createElement(R,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,o.default)({alt:a,title:t,loading:S},H,{imageVariants:j}))}}))}if(h){var T=h,W=p(h),F=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},r);return"inherit"===r.display&&delete F.display,d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},z&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:z,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},O&&M)}),W.base64&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:C,imageVariants:T,generateSources:x}),W.tracedSVG&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:C,imageVariants:T,generateSources:k}),this.state.isVisible&&d.default.createElement("picture",null,E(T),d.default.createElement(R,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,o.default)({alt:a,title:t,loading:S},W,{imageVariants:T}))}}))}return null},t}(d.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),z=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});O.propTypes={resolutions:P,sizes:z,fixed:c.default.oneOfType([P,c.default.arrayOf(P)]),fluid:c.default.oneOfType([z,c.default.arrayOf(z)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var M=O;t.default=M},"Nrk+":function(e,t,a){e.exports={copyright:"Copyright-module--copyright--1ariN"}},RBgx:function(e,t,a){e.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},RXmK:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var i=a("q1tI"),n=a.n(i),r=a("RBgx"),s=a.n(r),l=function(e){var t=e.title,a=e.children,r=Object(i.useRef)();return Object(i.useEffect)((function(){r.current.scrollIntoView()})),n.a.createElement("div",{ref:r,className:s.a.page},n.a.createElement("div",{className:s.a.page__inner},t&&n.a.createElement("h1",{className:s.a.page__title},t),n.a.createElement("div",{className:s.a.page__body},a)))}},SySy:function(e,t,a){e.exports={sidebar:"Sidebar-module--sidebar--X4z2p",sidebar__inner:"Sidebar-module--sidebar__inner--Jdc5s"}},U4DU:function(e,t,a){e.exports={pagination:"Pagination-module--pagination--2H3nO",pagination__prev:"Pagination-module--pagination__prev--bet5s","pagination__prev-link":"Pagination-module--pagination__prev-link--1Nzs6","pagination__prev-link--disable":"Pagination-module--pagination__prev-link--disable--Yklx9",pagination__next:"Pagination-module--pagination__next--3hFiN","pagination__next-link":"Pagination-module--pagination__next-link--3FUtA","pagination__next-link--disable":"Pagination-module--pagination__next-link--disable--30UwZ"}},UbMB:function(e,t,a){var i;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(this&&this[i]||i);else if(Array.isArray(i))e.push(n.apply(this,i));else if("object"===r)for(var s in i)a.call(i,s)&&i[s]&&e.push(this&&this[s]||s)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(i=function(){return n}.apply(t,[]))||(e.exports=i)}()},"aU/I":function(e,t,a){e.exports={contacts:"Contacts-module--contacts--1rGd1",contacts__list:"Contacts-module--contacts__list--3OgdW","contacts__list-item":"Contacts-module--contacts__list-item--16p9q","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2MIDn"}},euHg:function(e,t,a){e.exports={icon:"Icon-module--icon--Gpyvw"}},iSRb:function(e,t,a){e.exports={author__photo:"Author-module--author__photo--36xCH",author__title:"Author-module--author__title--2CaTb","author__title-link":"Author-module--author__title-link--Yrism",author__subtitle:"Author-module--author__subtitle--cAaEB"}},je8k:function(e,t,a){e.exports={menu:"Menu-module--menu--Efbin",menu__list:"Menu-module--menu__list--31Zeo","menu__list-item":"Menu-module--menu__list-item--1lJ6B","menu__list-item-link":"Menu-module--menu__list-item-link--10Ush","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2CbUO"}},v0M6:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var i=a("q1tI"),n=a.n(i),r=a("UbMB"),s=a.n(r),l=a("Wbzz"),o=a("WlAH"),d=a("U4DU"),c=a.n(d),u=s.a.bind(c.a),m=function(e){var t=e.prevPagePath,a=e.nextPagePath,i=e.hasNextPage,r=e.hasPrevPage,s=u({"pagination__prev-link":!0,"pagination__prev-link--disable":!r}),d=u({"pagination__next-link":!0,"pagination__next-link--disable":!i});return n.a.createElement("div",{className:c.a.pagination},n.a.createElement("div",{className:c.a.pagination__prev},n.a.createElement(l.Link,{rel:"prev",to:r?t:"/",className:s},o.b.PREV_PAGE)),n.a.createElement("div",{className:c.a.pagination__next},n.a.createElement(l.Link,{rel:"next",to:i?a:"/",className:d},o.b.NEXT_PAGE)))}}}]);
//# sourceMappingURL=f9ebebcc6744302e9aa5ca837c39d789357ff7c5-1bd9d32bbb9b4fd9442f.js.map