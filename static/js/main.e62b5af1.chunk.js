(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports={form:"ContactForm_form__1CXSm",btnForm:"ContactForm_btnForm__2KaJK"}},,function(t,e,n){t.exports={btnDel:"ContactItem_btnDel__26LpZ"}},function(t,e,n){t.exports={contacts:"Filter_contacts__261Uc"}},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),i=(n(19),n(7)),s=n(2),u=n(3),l=n(5),d=n(4),b=(n(20),n(6)),j=n(9),m=n(23),h=n(10),f=n.n(h),O=n(0),p={name:"",number:""},C=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).nameId=Object(m.a)(),t.numberId=Object(m.a)(),t.state=Object(j.a)({},p),t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r=Object(m.a)();t.props.addNewContact({id:r,name:a,number:c}),t.resetForm()},t.resetForm=function(){return t.setState(Object(j.a)({},p))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.handleChange,e=this.handleSubmit,n=this.nameId,a=this.numberId;return Object(O.jsxs)("form",{className:f.a.form,onSubmit:e,children:[Object(O.jsx)("label",{htmlFor:n,children:"Name"}),Object(O.jsx)("input",{type:"text",name:"name",id:n,onChange:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(O.jsx)("label",{htmlFor:a,children:"Number"}),Object(O.jsx)("input",{type:"tel",name:"number",id:a,onChange:t,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(O.jsx)("button",{className:f.a.btnForm,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),v=n(12),x=n.n(v),y=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).handleClick=function(e){return t.props.deleteContact(e.target.name)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.contact,e=t.id,n=t.name,a=t.number;return Object(O.jsxs)("li",{children:[n,": ",a,Object(O.jsx)("button",{className:x.a.btnDel,type:"button",name:n,onClick:this.handleClick,children:"Delete"})]},e)}}]),n}(a.Component),w=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.deleteContact;return Object(O.jsx)("ul",{children:e.map((function(t){return Object(O.jsx)(y,{contact:t,deleteContact:n})}))})}}]),n}(a.Component),g=n(13),F=n.n(g);function A(t){var e=t.newFilter,n=Object(m.a)();return Object(O.jsxs)("div",{className:F.a.contacts,children:[Object(O.jsx)("label",{htmlFor:n,children:"Find contact by name"}),Object(O.jsx)("input",{type:"text",name:"findName",id:n,onChange:function(t){return e(t.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})}var N=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.isContact=function(e){return t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))},t.addNewContact=function(e){return t.isContact(e.name)?alert("".concat(e.name," is already in contact")):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[e])}}))},t.newFilter=function(e){return t.setState({filter:e})},t.filteredContactsByName=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.idContact=function(e){return t.state.contacts.indexOf(t.isContact(e))},t.deleteContact=function(e){var n=t.idContact(e);t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts.slice(0,n)),Object(i.a)(t.contacts.slice(n+1)))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.addNewContact,e=this.newFilter,n=this.filteredContactsByName,a=this.deleteContact;return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(C,{addNewContact:t}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(A,{newFilter:e}),Object(O.jsx)(w,{contacts:n(),deleteContact:a})]})}}]),n}(a.Component),k=N;o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.e62b5af1.chunk.js.map