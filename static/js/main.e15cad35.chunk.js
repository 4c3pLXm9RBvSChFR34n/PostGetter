(this.webpackJsonpjson=this.webpackJsonpjson||[]).push([[0],{109:function(t,e,n){t.exports=n(238)},114:function(t,e,n){},115:function(t,e,n){t.exports=n.p+"static/media/logo.25bf045c.svg"},116:function(t,e,n){},117:function(t,e,n){},238:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(38),i=n.n(r),s=(n(114),n(115),n(116),n(95)),l=n(96),c=n(106),u=n(97),p=n(107),m=n(28),f=n.n(m),g=n(29),d=n.n(g),h=function(t){var e=function(t){return 1===String(t).length?"0"+t:t},n=new Date(t.created_at),a=e(new Date(n).getDay())+"/"+e(Number(new Date(n).getMonth())+1)+"/"+e(new Date(n).getFullYear())+" "+e(new Date(n).getHours())+":"+e(new Date(n).getMinutes());return o.a.createElement("div",{className:d.a.postWrapper},o.a.createElement("div",{className:d.a.postDate},"Date of post: ",a),o.a.createElement("div",{classneme:d.a.authorName},"Authors Id: ",t.id),o.a.createElement("div",{className:d.a.post},"Post text: ",t.text))},v=(n(117),function(){return o.a.createElement("div",{class:"loadingio-eclipse"},o.a.createElement("div",{class:"ldio-rpinwye8j0b"},o.a.createElement("div",null)))}),O=n(16),b=n(100),_=n(101),y=function(t){return _.get("".concat(t))};function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),!0).forEach((function(e){Object(b.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var D,k={data:[],isLoading:!1,inputLinkValue:"http://api.massrelevance.com/MassRelDemo/kindle.json",gettingDataMistake:!1,numberOfPosts:0,veliocityOfChange:10},L=function(t){return{type:"GET_DATA",response:t}},j=function(t){return{type:"IS_LOADING",loadingStatus:t}},w=function(t){return{type:"BAD_REQUEST",gettingDataMistake:t}},T=function(t,e,n){return{type:"SET_FORM_TO_STATE",inputLinkValue:t,numberOfPosts:e,veliocityOfChange:n}},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_DATA":var n=P({},t,{data:e.response});return n;case"IS_LOADING":var a=P({},t,{isLoading:e.loadingStatus});return a;case"BAD_REQUEST":var o=P({},t,{gettingDataMistake:e.gettingDataMistake});return o;case"SET_FORM_TO_STATE":var r=P({},t,{inputLinkValue:e.inputLinkValue,numberOfPosts:e.numberOfPosts,veliocityOfChange:e.veliocityOfChange});return r;default:return t}},C=n(240),N=n(239),V=function(t){if(!t)return"Field is required"},A=n(44),I=n(42),M=n.n(I),W=function(t){t.input;var e=t.meta,n=(t.child,t.element,Object(A.a)(t,["input","meta","child","element"])),a=e.touched&&e.error;return o.a.createElement("div",{className:M.a.formcontrol+" "+(a?M.a.error:"")},n.children,o.a.createElement("div",null,a&&o.a.createElement("span",null,e.error)))},x=function(t){var e=t.input,n=(t.meta,t.child,Object(A.a)(t,["input","meta","child"]));return o.a.createElement(W,t,o.a.createElement("input",Object.assign({className:M.a.input},e,n)))},F=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).runInterval=function(){n.setState({interval:setInterval((function(){return n.props.updateDataThunk(n.state)}),1e3*Number(n.props.postPage.veliocityOfChange))})},n.state={inputLinkValue:null,numberOfPosts:null,veliocityOfChange:null,interval:null},n.componentDidUpdate=function(t,e){t.postPage.veliocityOfChange!==n.props.postPage.veliocityOfChange&&n.runInterval()},n.setDataToLocalState=function(t){clearInterval(n.state.interval),n.setState({inputLinkValue:t.inputLinkValue,numberOfPosts:t.numberOfPosts,veliocityOfChange:t.veliocityOfChange}),n.props.getDataThunk(t.inputLinkValue,t.numberOfPosts,t.veliocityOfChange)},n}return Object(p.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.runInterval()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var t=this.props.postPage.data.slice(0,this.props.postPage.numberOfPosts).map((function(t){return o.a.createElement(h,{key:t.id,created_at:t.created_at,id:t.id,text:t.text})}));return o.a.createElement("div",{className:f.a.postListWrapper},o.a.createElement("div",{className:f.a.postListForm},o.a.createElement(G,{onSubmit:this.setDataToLocalState,inputLinkValue:this.props.postPage.inputLinkValue})),this.props.postPage.isLoading?o.a.createElement(v,null):o.a.createElement("div",{className:f.a.postListWrapper},this.props.postPage.gettingDataMistake?"Get data mistake.Please, fill the form above to get posts":0===this.props.postPage.data.length?"Nothing to show. Please, fill the form above to get posts":t))}}]),e}(o.a.Component),R=(D=100,function(t){if(t.length>D)return"Max length is ".concat(D," symbols")}),G=Object(N.a)({form:"getDataForm"})((function(t){return o.a.createElement("form",{onSubmit:t.handleSubmit},o.a.createElement("div",null,"Put your Feed URL, API with suitable format of data: http://api.massrelevance.com/MassRelDemo/kindle.json",o.a.createElement(C.a,{component:x,name:"inputLinkValue",placeholder:"inputLinkValue",validate:[V,R]}),"How many posts you want to load?:",o.a.createElement(C.a,{component:x,name:"numberOfPosts",placeholder:"numberOfPosts",validate:[V,R]}),"Determine the Update interval(seconds)",o.a.createElement(C.a,{component:x,name:"veliocityOfChange",placeholder:"veliocityOfChange",validate:[V,R]}),o.a.createElement("button",{className:f.a.btn},"GeT Posts!")))})),U=Object(O.b)((function(t){return{postPage:t.postPage}}),{getDataThunk:function(t,e,n){return function(a){a(j(!0)),a(T(t,e,n)),y(t).then((function(t){200===t.status&&(a(j(!1)),a(L(t.data)),a(w(!1)))})).catch((function(t){console.log(t),a(w(!0)),a(j(!1))}))}},updateDataThunk:function(t){return function(e){e(j(!0)),null===t.inputLinkValue&&null===t.numberOfPosts&&null===t.veliocityOfChange?(console.log("first loading"),e(j(!1))):(e(T(t.inputLinkValue,t.numberOfPosts,t.veliocityOfChange)),y(t.inputLinkValue).then((function(t){200===t.status&&(e(j(!1)),e(L(t.data)),e(w(!1)))})).catch((function(t){console.log(t),e(w(!0)),e(j(!1))})))}}})(F);var B=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=n(6),K=n(103),Q=n(241),H=Object(J.c)({postPage:S,form:Q.a}),q=Object(J.d)(H,Object(J.a)(K.a));window.store=q;var X=q,Y=n(105);i.a.render(o.a.createElement(Y.a,null,o.a.createElement(O.a,{store:X},o.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},28:function(t,e,n){t.exports={postListWrapper:"postList_postListWrapper__gp-68",postListForm:"postList_postListForm__2nV2_",optionsWrapper:"postList_optionsWrapper__1Kc7g",field:"postList_field__EvKPZ",btn:"postList_btn__1gJSe"}},29:function(t,e,n){t.exports={postWrapper:"post_postWrapper__3XWPK",postDate:"post_postDate__3230A",authorName:"post_authorName__2tE7j",post:"post_post__1_jiJ"}},42:function(t,e,n){t.exports={formcontrol:"formControlls_formcontrol__328Dk",error:"formControlls_error___TD5Q",input:"formControlls_input__2i3dh"}}},[[109,1,2]]]);
//# sourceMappingURL=main.e15cad35.chunk.js.map