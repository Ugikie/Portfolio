(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{125:function(e,t,n){},130:function(e,t,n){},232:function(e,t,n){},233:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),i=n.n(r),c=n(12),o=n.n(c),s=(n(125),n(13)),l=n(107),d=n(273),m=n(274),j=n(300),b=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(r.useState)(e),n=Object(s.a)(t,2),a=n[0],i=n[1],c=function(){i(!a)};return[a,c]},u=Object(r.createContext)(),h=Object(j.a)()((function(e){var t=b(),n=Object(s.a)(t,2),i=n[0],c=n[1],o=e.width,j=i,h=Object(r.useMemo)((function(){return Object(l.a)({typography:{fontFamily:['"Source Sans Pro", sans-serif'].join(",")},palette:{type:j?"dark":"light",background:{darker:j?"#212121":"#c0c0ca"},primary:{main:"#536dfe"},prefersDarkMode:j}})}),[j]);return Object(a.jsx)(u.Provider,{value:{width:o,theme:h,toggleDarkMode:c},children:Object(a.jsxs)(d.a,{theme:h,children:[Object(a.jsx)(m.a,{}),e.children]})})})),p=n(20),g=n(280),x=n(279),O=n(281),f=n(278),v=n(68),A=n(298),y=n(288),C=n(277),k=n(297),w=n(28),L=n.n(w),F=Object(C.a)((function(e){return{navLink:{fontWeight:"700",textDecoration:"none",marginLeft:"2rem",letterSpacing:"0.04em",position:"relative",color:e.palette.text.secondary,padding:"0.25rem 0px",transition:"color 0.15s ease-in-out","&:before":{transform:"translateX(-50%)",width:"20%",height:"6px",position:"absolute",bottom:"-6px",left:"50%",opacity:"0",pointerEvents:"none",content:"''",borderRadius:"6px",background:e.palette.primary.main,transition:"all ease 0.3s"},"&:hover":{color:e.palette.text.primary},"&:hover:before":{width:"100%",opacity:"1"}},navLinkActive:{color:e.palette.text.primary,"&:before":{width:"100%",opacity:"1"}}}})),N=function(e){var t=e.currentPage,n=e.setCurrentPage,r=e.name,i=e.formattedName,c=e.url,o=F();return Object(a.jsx)(f.a,{item:!0,children:Object(a.jsx)(v.a,{children:c?Object(a.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"".concat(o.navLink," ").concat(t===r?o.navLinkActive:null),children:i}):Object(a.jsx)(L.a,{onClick:function(){return n(r)},href:"#".concat(r),className:"".concat(o.navLink," ").concat(t===r?o.navLinkActive:null),children:i})})})},I=n(94),W=n.n(I),B=n(93),D=n.n(B),T=n(95),S=n.n(T),R=Object(C.a)((function(e){return{themeToggler:{"&:hover":{cursor:"pointer"},transform:"rotate(0deg)",transition:"top 300ms ease"},togglerLight:{color:e.palette.grey[300],backgroundColor:e.palette.grey[800],"&:hover":{backgroundColor:e.palette.grey[700]}},togglerDark:{backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:"#d5d5d5"}},darkMode:{transform:"rotate(-90deg)",transition:"transform 200ms ease"},stupidIconContainer:{display:"flex",justifyContent:"center",alignItems:"center"},hovering:{transform:"rotate(0deg)",transition:"transform 200ms ease"},lightMode:{transform:"rotate(90deg)",transition:"transform 200ms ease"}}})),E=function(e){var t=e.inMenu,n=void 0!==t&&t,i=e.x,c=e.y,o=R(),l=Object(r.useState)(!1),d=Object(s.a)(l,2),m=d[0],j=d[1],b=Object(r.useContext)(u),h=b.theme,p=b.toggleDarkMode,g=h.palette.prefersDarkMode,O=n?{}:{position:"fixed",top:"".concat(i,"%"),left:"".concat(c,"%"),zIndex:"100"};return Object(a.jsx)(x.a,{"aria-label":"Change Theme",onClick:function(){p()},className:"".concat(o.themeToggler," ").concat(g?o.togglerDark:o.togglerLight),style:O,onMouseEnter:function(){return j(!0)},onMouseLeave:function(){return j(!1)},children:m?g?Object(a.jsx)("span",{className:"".concat(o.darkMode," ").concat(o.stupidIconContainer),children:Object(a.jsx)(W.a,{})}):Object(a.jsx)("span",{className:"".concat(o.lightMode," ").concat(o.stupidIconContainer),children:Object(a.jsx)(S.a,{})}):Object(a.jsx)("span",{className:"".concat(o.hovering," ").concat(o.stupidIconContainer),children:Object(a.jsx)(D.a,{})})})},q=n(99),Q=n.n(q),P=n(100),z=n.n(P),X=n(283),M=n(287),U=n(284),K=n(285),J=n(286),V=n(96),Z=n.n(V),H=n(97),Y=n.n(H),G=n(98),_=n.n(G),$=n(66),ee=n.n($),te=n(36),ne=n.n(te),ae=Object(C.a)((function(e){return{navBar:{marginTop:"1rem",padding:"0.25rem 0"},brandName:{color:e.palette.text.primary},navbarBrand:Object(p.a)({color:e.palette.primary.main,textTransform:"uppercase",fontWeight:"700",letterSpacing:"2px",paddingTop:".3125rem",paddingBottom:".3125rem",marginRight:"1rem",fontSize:"1.25rem",textDecoration:"none",whiteSpace:"nowrap","&:after":{width:"100%",maxWidth:"30%",marginLeft:"0.75rem",height:"6px",display:"block",content:"''",borderRadius:"1000px",background:e.palette.primary.main,transition:"max-width ease 0.3s"},"&:hover:after":{maxWidth:"15%"}},e.breakpoints.down("xs"),{fontSize:"1rem"}),navLink:{fontWeight:"700",textDecoration:"none",marginLeft:"2rem",letterSpacing:"0.04em",position:"relative",color:e.palette.text.secondary,padding:"0.25rem 0px",transition:"color 0.15s ease-in-out","&:before":{transform:"translateX(-50%)",width:"20%",height:"6px",position:"absolute",bottom:"-6px",left:"50%",opacity:"0",pointerEvents:"none",content:"''",borderRadius:"6px",background:e.palette.primary.main,transition:"all ease 0.3s"},"&:hover":{color:e.palette.text.primary},"&:hover:before":{width:"100%",opacity:"1"}},navLinkActive:{color:e.palette.text.primary,"&:before":{width:"100%",opacity:"1"}},contactButton:{marginLeft:"1rem",borderRadius:"2rem",border:"1px solid ".concat(e.palette.primary.main),fontWeight:"bold",transition:"all ease 0.3s","&:hover":{transform:"scale(1.075)",background:"none",color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main)}},backToTop:{},menuLink:{fontWeight:"700",textDecoration:"none",letterSpacing:"0.04em",position:"relative",color:e.palette.text.secondary,transition:"color 0.15s ease-in-out","&:before":{transform:"translateX(-50%)",width:"20%",height:"6px",position:"absolute",bottom:"-6px",left:"50%",opacity:"0",zIndex:10,pointerEvents:"none",content:"''",borderRadius:"6px",background:e.palette.primary.main,transition:"all ease 0.3s"},"&:hover":{color:e.palette.text.primary},"&:hover:before":{width:"100%",opacity:"1"}},menuLinkActive:{color:e.palette.text.primary,"&:before":{width:"100%",opacity:"1"}}}})),re=function(e){var t=e.contactFormOpen,n=e.setContactFormOpen,i=ae(),c=Object(r.useContext)(u).width,o=Object(r.useState)("home"),l=Object(s.a)(o,2),d=l[0],m=l[1],j=Object(r.useState)(!1),b=Object(s.a)(j,2),h=(b[0],b[1]),p=Object(r.useState)(!1),C=Object(s.a)(p,2),w=C[0],F=C[1],I=Object(r.useState)(0),W=Object(s.a)(I,2),B=W[0],D=W[1];Object(r.useEffect)((function(){function e(){var e=window.pageYOffset;h(!(e>B)),D(e<=0?0:e)}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[B]);var T=[Object(a.jsx)(Z.a,{}),Object(a.jsx)(Y.a,{}),Object(a.jsx)(_.a,{}),Object(a.jsx)(ee.a,{})];return Object(r.useEffect)((function(){["md","lg","xl"].includes(c)&&F(!1)}),[c]),Object(a.jsxs)(g.a,{id:"home",children:[Object(a.jsxs)(k.a,{smDown:!0,children:[B>=300&&Object(a.jsx)(L.a,{href:"#home",children:Object(a.jsx)(x.a,{"aria-label":"Change Theme",className:i.backToTop,style:{background:"none",boxShadow:"none",position:"fixed",top:"".concat(87,"%"),left:"".concat(1,"%"),zIndex:"100"},children:Object(a.jsx)(O.a,{style:{backgroundColor:"none"},children:Object(a.jsx)(Q.a,{})})})}),Object(a.jsx)(E,{x:B>=300||t?92:87,y:1})]}),Object(a.jsxs)(f.a,{container:!0,justify:"space-between",alignItems:"center",className:i.navBar,children:[Object(a.jsx)(f.a,{item:!0,children:Object(a.jsxs)(v.a,{onClick:function(){return m("home")},className:i.navbarBrand,children:["<",Object(a.jsxs)("span",{className:i.brandName,children:[c,"Austin Adam"]})," ","/>"]})}),Object(a.jsx)(k.a,{mdUp:!0,children:Object(a.jsx)(A.a,{anchor:"right",open:w,onClose:function(){return F(!1)},children:Object(a.jsxs)("div",{role:"presentation",onClick:function(){return F(!1)},onKeyDown:function(){return F(!1)},children:[Object(a.jsxs)(f.a,{container:!0,justify:"space-between",alignItems:"center",style:{padding:"1rem 0 0 0.25rem"},children:[Object(a.jsx)(f.a,{item:!0,children:Object(a.jsx)(E,{inMenu:!0})}),Object(a.jsx)(f.a,{item:!0,children:Object(a.jsx)(O.a,{children:Object(a.jsx)(ne.a,{})})})]}),Object(a.jsxs)(X.a,{children:[["Home","About","Projects","GitHub"].map((function(e,t){return Object(a.jsx)(L.a,{href:"#".concat(e.toLowerCase()),className:"".concat(i.menuLink," ").concat(d===e.toLowerCase()?i.menuLinkActive:null),children:Object(a.jsxs)(U.a,{button:!0,children:[Object(a.jsx)(K.a,{children:T[t]}),Object(a.jsx)(J.a,{primary:e})]},e)})})),Object(a.jsx)(M.a,{}),Object(a.jsx)(U.a,{style:{marginTop:"1rem"},children:Object(a.jsx)(y.a,{variant:"contained",color:"primary",onClick:function(){return n(!0)},className:i.contactButton,children:"Contact Me"})},100)]})]})})}),Object(a.jsx)(k.a,{smDown:!0,children:Object(a.jsx)(f.a,{item:!0,xs:7,children:Object(a.jsxs)(f.a,{container:!0,justify:"flex-end",alignItems:"center",children:[Object(a.jsx)(N,{currentPage:d,setCurrentPage:m,name:"home",formattedName:"Home"}),Object(a.jsx)(N,{currentPage:d,setCurrentPage:m,name:"about",formattedName:"About"}),Object(a.jsx)(N,{currentPage:d,setCurrentPage:m,name:"projects",formattedName:"Projects"}),Object(a.jsx)(N,{currentPage:d,setCurrentPage:m,url:"https://github.com/Ugikie",name:"github",formattedName:"GitHub"}),Object(a.jsx)(f.a,{item:!0,children:Object(a.jsx)(y.a,{variant:"contained",color:"primary",onClick:function(){return n(!0)},className:i.contactButton,children:"Contact Me"})})]})})}),Object(a.jsx)(k.a,{mdUp:!0,children:Object(a.jsx)(f.a,{item:!0,children:Object(a.jsx)(O.a,{color:"primary",onClick:function(){return F((function(e){return!e}))},children:Object(a.jsx)(z.a,{})})})})]})]})},ie=n(235),ce=n.p+"static/media/me.e909ed22.svg",oe=n(103),se=n.n(oe),le=n(18),de=(n(130),n(295)),me=n(299),je=n(108),be=n(101),ue=n(53),he=n.n(ue);Object(ue.init)("user_GcPNCeM7wTsytXQUmpneW");var pe=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(r.useState)(""),n=Object(s.a)(t,2),a=n[0],i=n[1],c=Object(r.useState)(""),o=Object(s.a)(c,2),l=o[0],d=o[1],m=Object(r.useState)(""),j=Object(s.a)(m,2),b=j[0],u=j[1],h=Object(r.useState)([]),p=Object(s.a)(h,2),g=p[0],x=p[1],O=Object(r.useState)(e),f=Object(s.a)(O,2),v=f[0],A=f[1],y=Object(r.useState)(!e),C=Object(s.a)(y,2),k=C[0],w=C[1],L=Object(r.useState)(e),F=Object(s.a)(L,2),N=F[0],I=F[1],W=Object(r.useState)(void 0),B=Object(s.a)(W,2),D=B[0],T=B[1],S=Object(r.useRef)(k);S.current=k,Object(r.useEffect)((function(){g.length&&!D?(T(Object(be.a)({},g[0])),x((function(e){return e.slice(1)})),A(!0)):g.length&&D&&v&&A(!1)}),[g,D,v]);var R=function(e){x((function(t){return[].concat(Object(je.a)(t),[{message:e,key:(new Date).getTime()}])}))},E=function(e,t){"clickaway"!==t&&(A(!1),I(!1))},q=function(){T(void 0),I(!1),I(!1)},Q=function(){S.current?he.a.send("service_qdi432o","template_tj6p12g",{name:a,email:l,message:b}).then((function(e){console.log(e.text),R("Your message was sent!"),w(!0),I(!1),i(""),d(""),u("")}),(function(e){console.log(e.text),R("Error sending message."),w(!0),I(!1)})):w(!0)},P=function(e){e.preventDefault(),R("Sending..."),I(!0),setTimeout((function(){Q()}),3e3)},z=function(){w(!1),I(!1),R("Sending undone.")},X=function(e){d(e.target.value)},M=function(e){u(e.target.value)},U=function(e){i(e.target.value)};return[D,v,E,q,N,z,M,b,X,l,a,U,P]},ge=Object(C.a)((function(e){return{form:{}}})),xe=function(e){var t=e.width,n=e.setContactFormOpen,r=ge(),i=pe(),c=Object(s.a)(i,13),o=c[0],l=c[1],d=c[2],m=c[3],j=c[4],b=c[5],u=c[6],h=c[7],p=c[8],g=c[9],x=c[10],v=c[11],A=c[12];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("form",{onSubmit:A,className:r.form,children:Object(a.jsx)(f.a,{container:!0,justify:"center",children:Object(a.jsxs)(f.a,{item:!0,container:!0,xs:10,sm:8,justify:"xs"===t?"center":"flex-end",spacing:4,children:[Object(a.jsx)(f.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(de.a,{color:"primary",required:!0,className:r.input,fullWidth:!0,label:"Name",type:"text",value:x,onChange:v,variant:"filled"})}),Object(a.jsx)(f.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(de.a,{color:"primary",required:!0,className:r.input,fullWidth:!0,label:"Email",type:"email",value:g,onChange:p,variant:"filled"})}),Object(a.jsx)(f.a,{item:!0,xs:12,children:Object(a.jsx)(de.a,{color:"primary",className:r.input,fullWidth:!0,required:!0,multiline:!0,rows:"sm"===t||"xs"===t?4:8,label:"Message",value:h,onChange:u,variant:"filled"})}),Object(a.jsx)(f.a,{item:!0,style:{paddingRight:0},children:Object(a.jsx)(y.a,{color:"secondary",size:"sm"===t?"medium":"xs"===t?"small":"large",onClick:function(){return n(!1)},children:"Cancel"})}),Object(a.jsx)(f.a,{item:!0,children:Object(a.jsx)(y.a,{variant:"contained",color:"primary",type:"submit",size:"sm"===t?"medium":"xs"===t?"small":"large",children:"Submit"})})]})})}),Object(a.jsx)(me.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:l,autoHideDuration:6e3,onClose:d,onExited:m,message:o?o.message:void 0,action:Object(a.jsxs)(a.Fragment,{children:[j&&Object(a.jsx)(y.a,{color:"primary",size:"medium",onClick:b,children:"UNDO"}),Object(a.jsx)(O.a,{"aria-label":"close",color:"inherit",className:r.close,onClick:d,children:Object(a.jsx)(ne.a,{})})]})},o?o.key:void 0)]})},Oe=n(289),fe=n(282),ve=n(102),Ae=n.n(ve),ye=function(e){var t=e.width;return Object(a.jsx)(Ae.a,{style:{height:"sm"===t||"xs"===t?125:150,position:"relative",zIndex:100},avatarStyle:"Circle",topType:"ShortHairShortFlat",accessoriesType:"Blank",hairColor:"BrownDark",facialHairType:"Blank",clotheType:"Hoodie",clotheColor:"Heather",eyeType:"Happy",eyebrowType:"DefaultNatural",mouthType:"Smile",skinColor:"Light"})},Ce=Object(C.a)((function(e){var t,n,a;return{root:{height:"90vh"},grid:{textAlign:"center"},paper:(t={padding:"2rem",backgroundColor:e.palette.prefersDarkMode?e.palette.background.paper:e.palette.background.default},Object(p.a)(t,e.breakpoints.down("sm"),{padding:"2rem 6rem"}),Object(p.a)(t,e.breakpoints.down("xs"),{padding:"0"}),t),heading:Object(p.a)({fontWeight:"bold"},e.breakpoints.down("xs"),{fontSize:"32px"}),closeIcon:{position:"absolute",top:0,left:"97%"},heroImage:Object(p.a)({paddingTop:"2rem"},e.breakpoints.down("xs"),{marginTop:"0"}),heroImg:(n={},Object(p.a)(n,e.breakpoints.down("xs"),{width:250}),Object(p.a)(n,e.breakpoints.up("sm"),{width:400}),Object(p.a)(n,e.breakpoints.up("md"),{width:450}),Object(p.a)(n,e.breakpoints.up("lg"),{width:500}),n),contactGreeting:(a={padding:"0 5rem",fontWeight:"bold"},Object(p.a)(a,e.breakpoints.down("lg"),{padding:"0"}),Object(p.a)(a,e.breakpoints.up("md"),{fontSize:"44px"}),Object(p.a)(a,e.breakpoints.up("lg"),{fontSize:"46px"}),a)}})),ke=function(e){var t=e.contactFormOpen,n=e.setContactFormOpen,i=Ce(),c=Object(le.a)(),o=Object(r.useContext)(u).width;return Object(a.jsxs)(f.a,{container:!0,justify:"space-evenly",alignItems:"center",direction:"column",className:i.root,children:[Object(a.jsx)(f.a,{item:!0,xs:10,sm:10,md:t?10:8,lg:t?8:10,children:Object(a.jsx)(ie.a,{elevation:c.palette.prefersDarkMode?3:0,className:i.paper,style:{padding:t?"1rem 0":"2rem",transition:"background-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},children:t?Object(a.jsx)(Oe.a,{in:!0,unmountOnExit:!0,children:Object(a.jsxs)(f.a,{container:!0,justify:"center",alignItems:"center",style:{position:"relative"},children:[Object(a.jsx)(f.a,{item:!0,xs:12,container:!0,justify:"flex-end",alignItems:"center",children:Object(a.jsx)(k.a,{xsDown:!0,children:Object(a.jsx)(f.a,{item:!0,style:{marginBottom:"-4rem",paddingRight:"1rem"},children:Object(a.jsx)(O.a,{onClick:function(){return n(!1)},children:Object(a.jsx)(ne.a,{})})})})}),Object(a.jsxs)(f.a,{item:!0,xs:11,xl:10,container:!0,justify:"center",spacing:2,children:[Object(a.jsx)(ye,{width:o}),Object(a.jsx)(f.a,{item:!0,xs:12,children:Object(a.jsx)(M.a,{light:!0,variant:"fullWidth",style:{marginTop:"-4rem",marginBottom:"4rem"}})}),Object(a.jsx)(f.a,{item:!0,xs:12,style:{paddingLeft:0,paddingRight:0},children:Object(a.jsx)(v.a,{variant:"xs"===o?"h5":"sm"===o?"h4":"h3",className:i.contactGreeting,component:"h2",align:"center",gutterBottom:!0,children:"sm"===o||"xs"===o?"Thanks for reaching out. I would love to connect!":"Thanks for taking the time to reach out. I would love to connect with you!"})})]}),Object(a.jsx)(f.a,{item:!0,xs:12,children:Object(a.jsx)(xe,{width:o,setContactFormOpen:n})})]})}):Object(a.jsx)(fe.a,{in:!0,unmountOnExit:!0,children:Object(a.jsxs)(f.a,{container:!0,justify:"center",alignItems:"center",direction:"column",children:[Object(a.jsxs)(f.a,{item:!0,className:i.grid,children:[Object(a.jsx)(v.a,{variant:"xs"===o?"h4":"h3",component:"h2",className:i.heading,gutterBottom:"xs"!==o,children:"Full Stack Developer, Thinker & Creator"}),Object(a.jsx)(v.a,{variant:"xs"===o?"h6":"h5",component:"h2",style:{fontWeight:300},gutterBottom:!0,children:"I create new things with code and love it every day"})]}),Object(a.jsx)(f.a,{item:!0,className:i.heroImage,children:Object(a.jsx)("img",{src:ce,className:i.heroImg,alt:""})})]})})})}),!t&&Object(a.jsx)(f.a,{item:!0,style:{padding:0},children:Object(a.jsx)(L.a,{href:"#about",children:Object(a.jsx)(O.a,{className:"bounce",children:Object(a.jsx)(se.a,{})})})})]})},we=n.p+"static/media/code.ececd545.svg",Le=n.p+"static/media/terminal.b6d1f7b3.svg",Fe=function(e){var t=e.topic;return Object(a.jsxs)(f.a,{item:!0,container:!0,alignItems:"center",style:{color:"white"},children:[Object(a.jsx)(f.a,{item:!0,children:Object(a.jsx)("img",{src:Le,alt:"Terminal"})}),Object(a.jsx)(f.a,{item:!0,children:Object(a.jsx)(v.a,{variant:"body1",component:"span",style:{marginLeft:"1rem"},children:t})})]})},Ne=Object(C.a)((function(e){return{root:{height:"75vh",backgroundColor:e.palette.primary.main},grid:{height:"100%",padding:"5rem 9rem"},about:{height:"100%"},mainText:{color:"white",lineHeight:"1.5"},title:{fontWeight:"bold",color:"#ffc107"}}})),Ie=function(){var e=Ne();return Object(a.jsx)(ie.a,{className:e.root,id:"about",elevation:10,children:Object(a.jsxs)(f.a,{container:!0,justify:"space-around",alignItems:"center",className:e.grid,children:[Object(a.jsx)(f.a,{item:!0,children:Object(a.jsx)("img",{src:we,alt:"Code",width:"600"})}),Object(a.jsxs)(f.a,{item:!0,xs:5,className:e.about,children:[Object(a.jsx)(v.a,{variant:"h4",component:"h2",className:e.title,children:"Full Stack Developer"}),Object(a.jsx)(v.a,{variant:"h3",component:"h2",className:e.mainText,gutterBottom:!0,children:"A little bit about me."}),Object(a.jsx)(v.a,{variant:"body1",component:"h2",className:e.mainText,gutterBottom:!0,paragraph:!0,children:"I loving coding things from scratch and bringing my ideas to life in the browser."}),Object(a.jsx)(v.a,{variant:"body1",component:"h2",className:e.mainText,children:"My #1 motto is \"Underpromise, and overdeliver\", but that doesn't mean I can't guarentee excellence in the things I create! My main experience lies in coding up the full stack, but I also dabble in things like:"}),Object(a.jsxs)(f.a,{container:!0,direction:"column",spacing:1,style:{marginTop:"1rem"},children:[Object(a.jsx)(Fe,{topic:"Node.js"}),Object(a.jsx)(Fe,{topic:"React.js"}),Object(a.jsx)(Fe,{topic:"Custom APIs"}),Object(a.jsx)(Fe,{topic:"Discord Bot Integration"}),Object(a.jsx)(Fe,{topic:"Game Development"}),Object(a.jsx)(Fe,{topic:"Artificial Intelligence"}),Object(a.jsx)(Fe,{topic:"RF Technologies"}),Object(a.jsx)(Fe,{topic:"Digital Electronics & Microprocessors"})]})]})]})})},We=n(290),Be=n(291),De=n(292),Te=n(293),Se=n(294),Re=n.p+"static/media/code.da51d206.jpg",Ee=Object(C.a)((function(e){return{root:{},card:{width:"100%",transition:"transform 300ms ease-in-out, color 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},cardGrow:{"&:hover":{transform:"scale(1.05)"},"&:hover .MuiCardMedia-root":{transform:"scale(1.05)",overflow:"hidden"}},project:{border:"1px solid red",textAlign:"center"},media:{transition:"transform 300ms ease-in-out",height:225,width:"100%",backgroundSize:"cover"},viewingFullDetailsCard:{height:550},demoLink:{textDecoration:"none","&:visited":{color:e.palette.primary.main}}}})),qe=function(e){var t=e.project,n=e.setViewingCard,r=e.viewingFullDetails,i=void 0!==r&&r,c=Ee(),o=t.name,s=t.description,l=t.descriptionFull,d=t.demoURL,m=t.img,j=t.imgFull,b=function(){n(i?-1:t.id)};return Object(a.jsx)(f.a,{item:!0,xs:i?8:3,className:c.root,children:Object(a.jsx)(Oe.a,{in:!0,children:Object(a.jsxs)(We.a,{raised:!0,className:"".concat(c.card," ").concat(i?null:c.cardGrow),children:[Object(a.jsxs)(Be.a,{onClick:b,children:[Object(a.jsx)(De.a,{className:"".concat(c.media," ").concat(i?c.viewingFullDetailsCard:null),image:m?i?j:m:Re,title:"Contemplative Reptile"}),Object(a.jsxs)(Te.a,{children:[Object(a.jsx)(v.a,{gutterBottom:!0,variant:i?"h4":"h5",component:"h2",className:i?c.boldText:null,children:o}),Object(a.jsx)(v.a,{variant:i?"h6":"body2",color:"textSecondary",component:"p",className:i?c.lightText:null,children:i?l:s})]})]}),Object(a.jsxs)(Se.a,{children:[Object(a.jsx)(y.a,{size:i?"large":"small",variant:"contained",color:"primary",onClick:b,children:i?"Back to Projects":"More Details"}),Object(a.jsx)(y.a,{size:i?"large":"small",color:"primary",children:d?Object(a.jsx)("a",{className:c.demoLink,target:"blank",href:d,children:"Demo"}):"Demo (Coming Soon)"})]})]})})})},Qe=Object(r.memo)(qe),Pe=[{id:0,name:"React Colors",description:"A React based color palette designer and explorer!",descriptionFull:"My first large project built entirely in React is this color palette designer and explorer that I could not think of a creative name for. With this app, you are able to create your own unique palettes and explore the variants of colors inside of them. There are many intricate features to the app that I encourage you to explore!",demoURL:"https://ugikie.github.io/react-colors/",img:"data:image/png;base64,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",imgFull:n.p+"static/media/reactColorsFull.e9a6c035.png"},{id:1,name:"React Dice RPG",description:"A turn-based RPG made completely in React",descriptionFull:"A fantasy RPG built with React and Material UI that features many in depth systems such as inventory items, character progression, item crafting, ability enhancement, skill trees, masteries, and a massive campaign to keep you going through it all. This is project is still in active development."},{id:2,name:"Secret Project",description:"An upcoming game that is too good to reveal!",descriptionFull:"Another game built with React that brings together many of the common things that people enjoy today. This game will be released soon as it is pretty straightforward and is catered to more than just RPG lovers. Even your mom could play it! Please feel free to contact me if you would like to know more about it!"},{id:3,name:"Work in Progress",description:"Currently in development",descriptionFull:"Currently in development"},{id:4,name:"Work in Progress",description:"Currently in development",descriptionFull:"Currently in development"},{id:5,name:"Work in Progress",description:"Currently in development",descriptionFull:"Currently in development"},{id:6,name:"Work in Progress",description:"Currently in development",descriptionFull:"Currently in development"},{id:7,name:"Work in Progress",description:"Currently in development",descriptionFull:"Currently in development"}],ze=Object(C.a)((function(e){return{root:{transition:"color 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",padding:"3rem 15rem",backgroundColor:e.palette.background.default},header:{fontWeight:"bold"}}})),Xe=function(){var e=ze(),t=Object(r.useState)(-1),n=Object(s.a)(t,2),i=n[0],c=n[1];return Object(a.jsxs)(f.a,{id:"projects",container:!0,justify:"center",alignItems:"center",spacing:4,className:e.root,children:[Object(a.jsx)(f.a,{item:!0,xs:12,children:Object(a.jsx)(v.a,{variant:"h4",align:"center",component:"h2",gutterBottom:!0,className:e.header,children:-1===i?"My Recent Work":Pe[i].name})}),-1===i?Pe.map((function(e){return Object(a.jsx)(Qe,{setViewingCard:c,project:e},e.id)})):Object(a.jsx)(Qe,{setViewingCard:c,project:Pe[i],viewingFullDetails:!0})]})},Me=n.p+"static/media/reactjs.396d3bf9.png";Object(ue.init)("user_GcPNCeM7wTsytXQUmpneW");var Ue=Object(C.a)((function(e){return{form:{},input:{borderRadius:"3px",backgroundColor:"#1f2022",boxShadow:"0 1px 0 0 rgba(255, 255, 255, 0.1)",color:"#d1d2d2","& label, & input, & textarea":{color:"#d1d2d2"}}}})),Ke=function(){var e=Ue(),t=pe(),n=Object(s.a)(t,13),r=n[0],i=n[1],c=n[2],o=n[3],l=n[4],d=n[5],m=n[6],j=n[7],b=n[8],u=n[9],h=n[10],p=n[11],g=n[12];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f.a,{xs:4,item:!0,children:Object(a.jsx)("form",{onSubmit:g,className:e.form,children:Object(a.jsxs)(f.a,{container:!0,justify:"flex-end",children:[Object(a.jsx)(f.a,{item:!0,xs:2,container:!0,justify:"center",children:Object(a.jsx)(f.a,{item:!0,children:Object(a.jsx)(v.a,{variant:"h6",component:"h2",style:{color:"white",fontWeight:"bold"},children:"Contact Me"})})}),Object(a.jsxs)(f.a,{item:!0,container:!0,xs:10,justify:"flex-end",spacing:1,children:[Object(a.jsx)(f.a,{item:!0,xs:5,children:Object(a.jsx)(de.a,{color:"primary",required:!0,className:e.input,fullWidth:!0,label:"Name",type:"text",value:h,onChange:p,variant:"filled"})}),Object(a.jsx)(f.a,{item:!0,xs:6,children:Object(a.jsx)(de.a,{color:"primary",required:!0,className:e.input,fullWidth:!0,label:"Email",type:"email",value:u,onChange:b,variant:"filled"})}),Object(a.jsx)(f.a,{item:!0,xs:11,children:Object(a.jsx)(de.a,{color:"primary",className:e.input,fullWidth:!0,required:!0,multiline:!0,rows:4,label:"Message",value:j,onChange:m,variant:"filled"})}),Object(a.jsx)(f.a,{item:!0,children:Object(a.jsx)(y.a,{variant:"contained",color:"primary",type:"submit",size:"medium",style:{marginTop:"1rem"},children:"Submit"})})]})]})})}),Object(a.jsx)(me.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:i,autoHideDuration:6e3,onClose:c,onExited:o,message:r?r.message:void 0,action:Object(a.jsxs)(a.Fragment,{children:[l&&Object(a.jsx)(y.a,{color:"primary",size:"medium",onClick:d,children:"UNDO"}),Object(a.jsx)(O.a,{"aria-label":"close",color:"inherit",className:e.close,onClick:c,children:Object(a.jsx)(ne.a,{})})]})},r?r.key:void 0)]})},Je=n(104),Ve=n.n(Je),Ze=n(105),He=n.n(Ze),Ye=n(73),Ge=n.n(Ye),_e=Object(C.a)((function(e){return{logo:{width:174,height:100,backgroundColor:"none"},footerLink:{marginRight:"0.25rem",color:e.palette.grey[300]},copyright:{color:e.palette.grey[600],marginTop:"0.25rem"},navLink:{textDecoration:"none",color:e.palette.grey[300]},footerIcon:{width:38,height:38,marginTop:"0.5rem",padding:"0.3rem",backgroundColor:e.palette.grey[900],borderRadius:"50%"},contactLink:{color:e.palette.primary.main,textDecoration:"none"}}})),$e=function(){var e=_e();return Object(a.jsxs)(f.a,{item:!0,container:!0,alignItems:"center",justify:"center",xs:4,style:{color:"#fafafa"},children:[Object(a.jsxs)(f.a,{item:!0,xs:7,container:!0,spacing:2,alignItems:"center",children:[Object(a.jsx)(f.a,{item:!0,children:Object(a.jsx)(Ve.a,{className:e.footerIcon})}),Object(a.jsx)(f.a,{item:!0,children:Object(a.jsx)(v.a,{display:"inline",children:"Los Angeles, CA"})})]}),Object(a.jsxs)(f.a,{item:!0,xs:7,container:!0,spacing:2,alignItems:"center",children:[Object(a.jsx)(f.a,{item:!0,children:Object(a.jsx)(He.a,{className:e.footerIcon})}),Object(a.jsx)(f.a,{item:!0,children:Object(a.jsx)(v.a,{style:{fontWeight:"bold"},display:"inline",children:"(805) 915-9181"})})]}),Object(a.jsxs)(f.a,{item:!0,xs:7,container:!0,spacing:2,alignItems:"center",children:[Object(a.jsx)(f.a,{item:!0,children:Object(a.jsx)(Ge.a,{className:e.footerIcon})}),Object(a.jsx)(f.a,{item:!0,children:Object(a.jsx)(v.a,{display:"inline",children:Object(a.jsx)("a",{href:"mailto:hello@austinadam.com",target:"_blank",rel:"noopener noreferrer",className:e.contactLink,children:"hello@austinadam.com"})})})]})]})},et=n(106),tt=n.n(et),nt=Object(C.a)((function(e){return{logo:{width:174,height:100,backgroundColor:"none"},footerLink:{marginRight:"0.25rem",color:e.palette.grey[300]},copyright:{color:e.palette.grey[600],marginTop:"0.25rem"},navLink:{textDecoration:"none",color:e.palette.grey[300]},socialLinks:{marginTop:"0.5rem",marginLeft:"0.5rem"},socialIcon:{color:"white",fontSize:38,marginRight:"0.5rem",borderRadius:3,backgroundColor:e.palette.grey[900],boxShadow:"0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"}}})),at=function(){var e=nt();return Object(a.jsx)(f.a,{item:!0,xs:4,children:Object(a.jsxs)(f.a,{container:!0,direction:"column",style:{height:"100%"},justify:"center",children:[Object(a.jsx)(f.a,{item:!0,children:Object(a.jsx)("img",{className:e.logo,src:Me,alt:"React JS Logo"})}),Object(a.jsx)(f.a,{item:!0,container:!0,alignItems:"center",style:{marginLeft:"0.5rem"},children:["Home","About","Projects","GitHub"].map((function(t){return Object(a.jsx)(f.a,{item:!0,className:e.footerLink,children:Object(a.jsx)(v.a,{children:"GitHub"===t?Object(a.jsx)("a",{href:"https://github.com/Ugikie",target:"_blank",rel:"noopener noreferrer",aria:"Ugikie on GitHub",className:e.navLink,children:t}):Object(a.jsxs)(L.a,{href:"#".concat(t.toLowerCase()),className:e.navLink,children:[t," \xb7"]})})},t)}))}),Object(a.jsx)(f.a,{item:!0,style:{marginLeft:"0.5rem"},children:Object(a.jsx)(v.a,{className:e.copyright,children:"Austin Adam \xa9 2021"})}),Object(a.jsxs)(f.a,{item:!0,container:!0,className:e.socialLinks,children:[Object(a.jsx)(f.a,{item:!0,children:Object(a.jsx)("a",{href:"https://www.linkedin.com/in/austin-adam-56771068/",target:"_blank",rel:"noopener noreferrer",aria:"Austin Adam on LinkedIn",className:e.navLink,children:Object(a.jsx)(tt.a,{className:e.socialIcon,style:{padding:"0.2rem"}})})}),Object(a.jsx)(f.a,{item:!0,children:Object(a.jsx)("a",{href:"https://github.com/Ugikie",target:"_blank",rel:"noopener noreferrer",aria:"Ugikie on GitHub",className:e.navLink,children:Object(a.jsx)(ee.a,{style:{padding:"0.3rem"},className:e.socialIcon})})})]})]})})},rt=Object(C.a)((function(e){return{root:{backgroundColor:e.palette.grey[800],padding:"2rem 3rem"}}})),it=function(){var e=rt();return Object(a.jsx)(ie.a,{className:e.root,children:Object(a.jsxs)(f.a,{container:!0,justify:"space-evenly",alignItems:"stretch",children:[Object(a.jsx)(at,{}),Object(a.jsx)($e,{}),Object(a.jsx)(Ke,{})]})})},ct=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(re,{contactFormOpen:n,setContactFormOpen:i}),Object(a.jsx)(ke,{setContactFormOpen:i,contactFormOpen:n}),Object(a.jsx)(Ie,{}),Object(a.jsx)(Xe,{}),Object(a.jsx)(it,{})]})};n(232);var ot=function(){return Object(a.jsx)(h,{children:Object(a.jsx)(ct,{})})},st=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,301)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(ot,{})}),document.getElementById("root")),st()}},[[233,1,2]]]);
//# sourceMappingURL=main.e8acbb83.chunk.js.map