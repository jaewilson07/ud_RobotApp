(this.webpackJsonpud_robots=this.webpackJsonpud_robots||[]).push([[0],{16:function(e,t,n){e.exports=n(28)},21:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),s=(n(21),n(3)),l=n(4),i=n(7),u=n(6),h=n(5),b=function(e){var t=e.robot,n=t.username,r=t.email,o=t.name;return a.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},a.a.createElement("img",{src:"https://robohash.org/".concat(n),alt:"RobotImage"}),a.a.createElement("h2",null,"Name: ",o),a.a.createElement("p",null,"UserName : ",n),a.a.createElement("p",null,"email : ",r," "))},d=function(e){var t=e.robots_list;return a.a.createElement("div",null,t.map((function(e){return a.a.createElement(b,{key:e.id,robot:e})})))},E=function(e){var t=e.search_txt;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},p=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"_500px"}},e.children)},m=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={hasError:!1},e}return Object(l.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0}),console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Error"):this.props.children}}]),n}(r.Component),g=(n(27),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.robots,n=e.searchField,r=e.onSearchChange,o=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"}," RoboFriends"),a.a.createElement(E,{search_txt:r}),t.length?a.a.createElement(p,null,a.a.createElement(m,null,a.a.createElement(d,{robots_list:o}))):a.a.createElement("h1",null,"loading"))}}]),n}(r.Component)),f=Object(h.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(g),O=n(1),R=n(14),v=n(15),S={searchField:""},y={isPending:!1,robots:[],error:""},_=Object(v.createLogger)(),j=Object(O.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(console.log(t.type),t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),C=Object(O.d)(j,Object(O.a)(R.a,_));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h.a,{store:C},a.a.createElement(f,null))),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1185e54c.chunk.js.map