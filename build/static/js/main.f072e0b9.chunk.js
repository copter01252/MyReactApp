(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);a(11),a(12),a(14);var n=a(0),o=a.n(n),r=a(4),s=a.n(r),l=(a(19),a(5)),c=a(6),i=a(8),m=a(7),u=a(9),d=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={theme:null,username:"",password:"",sex:"male",jsonData:""},a.resetTheme=function(e){e.preventDefault(),a.setState({theme:null})},a.chooseTheme=function(e,t){t.preventDefault(),a.setState({theme:e})},a.selectSex=function(e){a.setState({sex:e.target.value})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("Get Json"),fetch("https://jsonplaceholder.typicode.com/todos/1").then(function(e){return e.json()}).then(function(e){return e.title}).then(function(t){e.setState({jsonData:t})})}},{key:"render",value:function(){var e=this,t=this.state.theme,a=t?t.toLowerCase():"secondary";return o.a.createElement("div",{className:"d-flex flex-wrap justify-content-center position-absolute w-100 h-100 align-items-center align-content-center"},o.a.createElement("legend",{className:"rainbow-text"},"xxxShow JSON : ",this.state.jsonData),o.a.createElement("a",{href:"www.google.co.th"},"Google"),o.a.createElement("div",{class:"container"},o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"col-lg-12"},o.a.createElement("form",{action:"#",onSubmit:function(){return alert(JSON.stringify(e.state))}},o.a.createElement("legend",null,"Login"),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{for:""},"Username"),o.a.createElement("input",{onChange:function(t){e.setState({username:t.target.value})},value:this.state.username,type:"text",class:"form-control",id:"username",required:!0})),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{for:""},"Password"),o.a.createElement("input",{onChange:function(t){e.setState({password:t.target.value})},value:this.state.password,type:"password",class:"form-control",id:"password",required:!0})),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",null,"Sex"),o.a.createElement("select",{onChange:this.selectSex,id:"sex",class:"form-control",required:"required"},o.a.createElement("option",{value:"male"},"Male"),o.a.createElement("option",{value:"female"},"Female"))),o.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Login"))))),o.a.createElement("span",{className:"h1 mb-4 w-100 text-center text-".concat(a)},t||"Default"),o.a.createElement("div",{className:"btn-group"},o.a.createElement("button",{type:"button",className:"btn btn-".concat(a," btn-lg")},t||"Choose"," Theme"),o.a.createElement("button",{type:"button",className:"btn btn-".concat(a," btn-lg dropdown-toggle dropdown-toggle-split"),"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},o.a.createElement("span",{className:"sr-only"},"Toggle Theme Dropdown")),o.a.createElement("div",{className:"dropdown-menu"},o.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(t){return e.chooseTheme("Primary",t)}},"Primary Theme"),o.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(t){return e.chooseTheme("Danger",t)}},"Danger Theme"),o.a.createElement("a",{class:"dropdown-item",href:"#",onClick:function(t){return e.chooseTheme("Success",t)}},"Success Theme"),o.a.createElement("div",{className:"dropdown-divider"}),o.a.createElement("a",{className:"dropdown-item",href:"#",onClick:this.resetTheme},"Default Theme"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.f072e0b9.chunk.js.map