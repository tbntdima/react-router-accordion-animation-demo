(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(45)},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(10),r=n.n(o),l=n(48),i=n(5),u=n(6),m=n(8),s=n(7),p=n(9),h=n(47),E=n(49),b=n(23),d=n(46),f=n(19),j=n(20),v=n.n(j),O=(n(40),n(41),function(e){var t=e.component,n=Object(b.a)(e,["component"]);return c.a.createElement(d.a,Object.assign({},n,{children:function(e){var n=e.match;return c.a.createElement(v.a,{duration:300,height:null!==n?"auto":0},c.a.createElement("div",{style:{overflow:"hidden"}},c.a.createElement(f.CSSTransition,{in:null!==n,timeout:{enter:1e3,exit:300},classNames:{appear:"animated",appearActive:"animated bounceInDown",enter:"animated",enterActive:"animated bounceInDown"},appear:!0},c.a.createElement(t,null))))}}))}),g=Object(E.a)(function(e){var t=e.location.pathname,n=e.to;return c.a.createElement(h.a,{to:n===t?"/":n},e.children)}),k=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Welcome to Page Transition App!"),c.a.createElement("p",null,"This is a home route"))}}]),t}(a.Component),w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={projects:[]},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://ghibliapi.herokuapp.com/films?limit=5").then(function(t){200===t.status?t.json().then(function(t){e.setState({projects:t})}):console.log("Looks like there was a problem. Status Code: ".concat(t.status))}).catch(function(e){console.log("Fetch Error :-S ".concat(e))})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("ul",null,this.state.projects.map(function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("h3",null,e.title),c.a.createElement("p",null,"strong: ",c.a.createElement("strong",null,e.director)," | release date: ",c.a.createElement("strong",null,e.release_date)),c.a.createElement("hr",null),c.a.createElement("p",null,e.description))})))}}]),t}(a.Component),y=function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Contact Transition App"),c.a.createElement("p",null,"This is contact route"))},C=(n(43),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.location.pathname;return c.a.createElement("div",null,c.a.createElement(g,{to:"/home"},"Home"),c.a.createElement(O,{exact:!0,path:"/home",component:k}),c.a.createElement(h.a,{to:"/about"===e?"/":"/about"},"About"),c.a.createElement(O,{path:"/about",component:w}),c.a.createElement(h.a,{to:"/contact"===e?"/":"/contact"},"Contact"),c.a.createElement(O,{path:"/contact",component:y}))}}]),t}(a.Component)),A=Object(E.a)(C);n(44);r.a.render(c.a.createElement(l.a,null,c.a.createElement(A,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.d619b552.chunk.js.map