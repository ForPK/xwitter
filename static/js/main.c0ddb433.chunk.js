(this["webpackJsonpreact-xwitter"]=this["webpackJsonpreact-xwitter"]||[]).push([[0],{43:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(2),c=n.n(a),i=n(27),s=n.n(i),u=n(8),o=n(17),j=n(5),l=n(29),b=n(19);n(35),n(44),n(45);b.a.initializeApp({apiKey:"AIzaSyBllVfA6LeVMUdKZKs4FHMlAGv3jqn9PHo",authDomain:"xwitter-af89e.firebaseapp.com",projectId:"xwitter-af89e",storageBucket:"xwitter-af89e.appspot.com",messagingSenderId:"212132036140",appId:"1:212132036140:web:cf7d3000d97f14b2bbdb89"});var d=b.a,p=b.a.auth(),x=b.a.firestore(),O=b.a.storage(),h=n(9),f=n.n(h),m=n(15),g=function(e){var t=e.xwittObj,n=e.isOwner,c=Object(a.useState)(!1),i=Object(u.a)(c,2),s=i[0],o=i[1],j=Object(a.useState)(t.text),l=Object(u.a)(j,2),b=l[0],d=l[1],p=function(){var e=Object(m.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this xwitt?")){e.next=6;break}return e.next=4,x.doc("xwitts/".concat(t.id)).delete();case 4:return e.next=6,O.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){return o((function(e){return!e}))},g=function(){var e=Object(m.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,x.doc("xwitts/".concat(t.id)).update({text:b});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{children:s?Object(r.jsx)(r.Fragment,{children:n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{onSubmit:g,children:[Object(r.jsx)("input",{type:"text",placeholder:"Edit your Xwitt",onChange:function(e){var t=e.target.value;d(t)},value:b,required:!0}),Object(r.jsx)("input",{type:"submit",value:"Update"})]}),Object(r.jsx)("button",{onClick:h,children:"Cancel"})]})}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:t.text}),t.attachmentUrl&&Object(r.jsx)("img",{src:t.attachmentUrl,width:"50px",height:"50px"}),n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{onClick:p,children:"Delete"}),Object(r.jsx)("button",{onClick:h,children:"Edit"})]})]})})},v=n(47),w=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(u.a)(n,2),i=c[0],s=c[1],o=Object(a.useState)(""),j=Object(u.a)(o,2),l=j[0],b=j[1],d=function(){var e=Object(m.a)(f.a.mark((function e(n){var r,a,c,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=null,""===l){e.next=10;break}return a=O.ref().child("".concat(t.uid,"/").concat(Object(v.a)())),e.next=6,a.putString(l,"data_url");case 6:return c=e.sent,e.next=9,c.ref.getDownloadURL();case 9:r=e.sent;case 10:return u={text:i,createAt:Date.now(),createId:t.uid,attachmentUrl:r},e.next=13,x.collection("xwitts").add(u);case 13:s(""),b("");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("form",{onSubmit:d,children:[Object(r.jsx)("input",{onChange:function(e){var t=e.target.value;s(t)},value:i,type:"text",placeholder:"What's on your mind",maxLength:120}),Object(r.jsx)("input",{onChange:function(e){console.log(e.target.files);var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){console.log(e);var t=e.currentTarget.result;b(t)},n.readAsDataURL(t)},type:"file",accept:"image/*"}),Object(r.jsx)("input",{type:"submit",value:"Xwitt"}),l&&Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:l,width:"50px",height:"50px"}),Object(r.jsx)("button",{onClick:function(){return b(null)},children:"Clear"})]})]})},y=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(u.a)(n,2),i=c[0],s=c[1];return Object(a.useEffect)((function(){x.collection("xwitts").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(l.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(w,{userObj:t}),Object(r.jsx)("div",{children:i.map((function(e){return Object(r.jsx)(g,{xwittObj:e,isOwner:e.createId===t.uid},e.id)}))})]})},k=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),s=Object(u.a)(i,2),o=s[0],j=s[1],l=Object(a.useState)(!0),b=Object(u.a)(l,2),d=b[0],x=b[1],O=Object(a.useState)(""),h=Object(u.a)(O,2),g=h[0],v=h[1],w=function(e){var t=e.target,n=t.name,r=t.value;"email"===n?c(r):"password"===n&&j(r)},y=function(){var e=Object(m.a)(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!d){e.next=8;break}return e.next=5,p.createUserWithEmailAndPassword(n,o);case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,p.signInWithEmailAndPassword(n,o);case 10:r=e.sent;case 11:console.log(r),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),v(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{onSubmit:y,children:[Object(r.jsx)("input",{type:"text",name:"email",placeholder:"Email",onChange:w,value:n,required:!0}),Object(r.jsx)("input",{type:"password",name:"password",placeholder:"Password",onChange:w,value:o,required:!0}),Object(r.jsx)("input",{type:"submit",value:d?"Create Account":"Login"}),g]}),Object(r.jsx)("span",{onClick:function(){return x((function(e){return!e}))},children:d?"Sign In":"Create Account"})]})},S=function(){var e=function(){var e=Object(m.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("google"!==(n=t.target.name)){e.next=6;break}return e.next=4,p.signInWithPopup(new d.auth.GoogleAuthProvider);case 4:e.next=9;break;case 6:if("github"!==n){e.next=9;break}return e.next=9,p.signInWithPopup(new d.auth.GithubAuthProvider);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsx)(k,{}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:e,name:"google",children:"Continue with Google"}),Object(r.jsx)("button",{onClick:e,name:"github",children:"Continue with Github"})]})]})},C=function(e){var t=e.refreshUser,n=e.userObj,c=Object(j.f)(),i=Object(a.useState)(n.displayName),s=Object(u.a)(i,2),o=s[0],l=s[1],b=function(){var e=Object(m.a)(f.a.mark((function e(r){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),n.displayName===o){e.next=5;break}return e.next=4,n.updateProfile({displayName:o});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{onSubmit:b,children:[Object(r.jsx)("input",{onChange:function(e){var t=e.target.value;l(t)},value:o,type:"text",placeholder:"Display Name"}),Object(r.jsx)("input",{type:"submit",placeholder:"Update"})]}),Object(r.jsx)("button",{onClick:function(){p.signOut(),c.push("/"),t()},children:"Logout"})]})},U=function(e){var t=e.userObj;return Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(o.b,{to:"/",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.b,{to:"/profile",children:t.displayName})})]})})},A=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(r.jsxs)(o.a,{children:[n&&Object(r.jsx)(U,{userObj:a}),Object(r.jsx)(j.c,{children:n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j.a,{exact:!0,path:"/",children:Object(r.jsx)(y,{userObj:a})}),Object(r.jsx)(j.a,{exact:!0,path:"/profile",children:Object(r.jsx)(C,{userObj:a,refreshUser:t})})]}):Object(r.jsx)(o.a,{exact:!0,path:"/",children:Object(r.jsx)(S,{})})})]})};var F=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(null),s=Object(u.a)(i,2),o=s[0],j=s[1];return Object(a.useEffect)((function(){p.onAuthStateChanged((function(e){j(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[n?Object(r.jsx)(A,{refreshUser:function(){var e=p.currentUser;j({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(o),userObj:o}):"initializing...",Object(r.jsxs)("footer",{children:["\xa9 ",(new Date).getFullYear()," Xwitter"]})]})};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(F,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.c0ddb433.chunk.js.map