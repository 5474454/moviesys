(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{208:function(e,t,a){e.exports=a.p+"static/media/defaultposter.b4e877ba.png"},228:function(e,t,a){e.exports=a(471)},233:function(e,t,a){},471:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),o=a(4),c=a.n(o),u=(a(233),a(234),a(57)),s=a(20),l=a(31),p=a(32),d=a(40),m=a(38),f=a(41),h=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement("h1",null,"\u6b22\u8fce\u4f7f\u7528\u7535\u5f71\u7ba1\u7406\u7cfb\u7edf")}}]),t}(i.a.Component),v=a(12),b=a.n(v),y=a(21),g=a(478),E=a(29),w=a(5),j=a(472),O=a(473),k=a(481),C=a(475),x=a(208),I=a.n(x);!function(e){e.isHot="isHot",e.isComing="isComing",e.isClassic="isClassic"}(n||(n={}));var S=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onLoad&&this.props.onLoad()}},{key:"getFilterDropDown",value:function(e){var t=this;return i.a.createElement("div",{style:{padding:8}},i.a.createElement(g.a,{style:{width:188,marginBottom:8,display:"block"},value:this.props.condition.key,onChange:function(e){return t.props.onKeyChange(e.target.value)},onPressEnter:this.props.onSearch}),i.a.createElement(E.a,{type:"primary",icon:"search",size:"small",style:{width:90,marginRight:8},onClick:this.props.onSearch},"\u641c\u7d22"),i.a.createElement(E.a,{size:"small",style:{width:90},onClick:function(){t.props.onKeyChange(""),t.props.onSearch()}},"\u91cd\u7f6e"))}},{key:"getColumns",value:function(){var e=this;return[{title:"\u5c01\u9762",dataIndex:"poster",render:function(e){return e?i.a.createElement("img",{alt:"",className:"tablePoster",src:e}):i.a.createElement("img",{alt:"",className:"tablePoster",src:I.a})}},{title:"\u540d\u79f0",dataIndex:"name",filterDropdown:this.getFilterDropDown.bind(this),filterIcon:i.a.createElement(w.a,{type:"search"})},{title:"\u5730\u533a",dataIndex:"areas",render:function(e){return e.join(", ")}},{title:"\u7c7b\u578b",dataIndex:"types",render:function(e){return e.join(", ")}},{title:"\u65f6\u957f",dataIndex:"timeLong",render:function(e){return e+"\u5206\u949f"}},{title:"\u6b63\u5728\u70ed\u6620",dataIndex:"isHot",render:function(t,a){return i.a.createElement(j.a,{checked:t,onChange:function(t){e.props.onSwitchChange(n.isHot,t,a._id)}})}},{title:"\u5373\u5c06\u4e0a\u6620",dataIndex:"isComing",render:function(t,a){return i.a.createElement(j.a,{checked:t,onChange:function(t){e.props.onSwitchChange(n.isComing,t,a._id)}})}},{title:"\u7ecf\u5178\u5f71\u7247",dataIndex:"isClassic",render:function(t,a){return i.a.createElement(j.a,{checked:t,onChange:function(t){e.props.onSwitchChange(n.isClassic,t,a._id)}})}},{title:"\u64cd\u4f5c",dataIndex:"_id",render:function(t){return i.a.createElement("div",null,i.a.createElement(u.b,{to:"/movie/edit/"+t},i.a.createElement(E.a,{type:"primary",size:"small"},"\u7f16\u8f91")),i.a.createElement(O.a,{title:"\u786e\u5b9a\u8981\u5220\u9664\u5417?",onConfirm:Object(y.a)(b.a.mark(function a(){return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.props.onDelete(t);case 2:k.a.success("\u5220\u9664\u6210\u529f");case 3:case"end":return a.stop()}},a)})),okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"},i.a.createElement(E.a,{type:"danger",size:"small"},"\u5220\u9664")))}}]}},{key:"getPageConfig",value:function(){return 0!==this.props.total&&{current:this.props.condition.page,pageSize:this.props.condition.limit,total:this.props.total}}},{key:"handleChange",value:function(e){this.props.onChange(e.current)}},{key:"render",value:function(){return i.a.createElement(C.a,{rowKey:"_id",dataSource:this.props.data,columns:this.getColumns(),pagination:this.getPageConfig(),onChange:this.handleChange.bind(this),loading:this.props.isLoading})}}]),t}(i.a.Component),M=a(114),_=a(113),L=a(83),P=a.n(L),D=function(){function e(){Object(l.a)(this,e)}return Object(p.a)(e,null,[{key:"add",value:function(){var e=Object(y.a)(b.a.mark(function e(t){var a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.post("/api/movie",t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"edit",value:function(){var e=Object(y.a)(b.a.mark(function e(t,a){var n,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.put("/api/movie/"+t,a);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(y.a)(b.a.mark(function e(t){var a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.delete("/api/movie/"+t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieById",value:function(){var e=Object(y.a)(b.a.mark(function e(t){var a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("/api/movie/"+t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"getMovies",value:function(){var e=Object(y.a)(b.a.mark(function e(t){var a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("/api/movie",{params:t});case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),e}();function F(e,t){return{type:"movie_save",payload:{movies:e,total:t}}}function A(e){return{type:"movie_setLoading",payload:e}}function q(e){return{type:"movie_setCondition",payload:e}}function N(e){return{type:"movie_delete",payload:e}}function H(e,t,a){return{type:"movie_switch",payload:{type:e,newVal:t,id:a}}}var R={saveMoviesAction:F,setLoadingAction:A,setConditionAction:q,deleteAction:N,fetchMovies:function(e){return function(){var t=Object(y.a)(b.a.mark(function t(a,n){var r,i;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(A(!0)),a(q(e)),r=n().movie.condition,t.next=5,D.getMovies(r);case 5:i=t.sent,a(F(i.data,i.total)),a(A(!1));case 8:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()},deleteMovie:function(e){return function(){var t=Object(y.a)(b.a.mark(function t(a){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(A(!0)),t.next=3,D.delete(e);case 3:a(N(e)),a(A(!1));case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},changeSwitchAction:H,changeSwitch:function(e,t,a){return function(){var n=Object(y.a)(b.a.mark(function n(r){return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(H(e,t,a)),n.next=3,D.edit(a,Object(_.a)({},e,t));case 3:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}};var T=Object(M.b)(function(e){return e.movie},function(e){return{onLoad:function(){e(R.fetchMovies({page:1,limit:10,key:""}))},onSwitchChange:function(t,a,n){e(R.changeSwitch(t,a,n))},onDelete:function(){var t=Object(y.a)(b.a.mark(function t(a){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(R.deleteMovie(a));case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),onChange:function(t){e(R.fetchMovies({page:t}))},onKeyChange:function(t){e(R.setConditionAction({key:t}))},onSearch:function(){e(R.fetchMovies({page:1}))}}})(S),V=a(81),z=a(477),B=a(480),K=a(476),G=a(479),J=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showModal:!1},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"getUploadContent",value:function(){return this.props.value?null:i.a.createElement("div",null,i.a.createElement(w.a,{type:"plus"}),i.a.createElement("div",null,"\u70b9\u51fb\u4e0a\u4f20"))}},{key:"getFileList",value:function(){return this.props.value?[{uid:this.props.value,name:this.props.value,url:this.props.value}]:[]}},{key:"handleRequest",value:function(){var e=Object(y.a)(b.a.mark(function e(t){var a,n,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append(t.filename,t.file),n=new Request(t.action,{method:"post",body:a}),e.next=5,fetch(n).then(function(e){return e.json()});case 5:(r=e.sent).err?k.a.error("\u4e0a\u4f20\u5931\u8d25\uff01"):this.props.onChange&&this.props.onChange(r.data);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(K.a,{action:"/api/upload",name:"imgfile",accept:".jpg,.png,.gif",listType:"picture-card",fileList:this.getFileList(),customRequest:this.handleRequest.bind(this),onRemove:function(){e.props.onChange&&e.props.onChange("")},onPreview:function(){e.setState({showModal:!0})}},this.getUploadContent()),i.a.createElement(G.a,{visible:this.state.showModal,footer:null,onCancel:function(){e.setState({showModal:!1})}},i.a.createElement("img",{alt:"",style:{width:"100%"},src:this.props.value})))}}]),t}(i.a.Component),U={labelCol:{span:4},wrapperCol:{span:19,offset:1}},Q=[{label:"\u4e2d\u56fd\u5927\u9646",value:"\u4e2d\u56fd\u5927\u9646"},{label:"\u7f8e\u56fd",value:"\u7f8e\u56fd"},{label:"\u4e2d\u56fd\u53f0\u6e7e",value:"\u4e2d\u56fd\u53f0\u6e7e"},{label:"\u4e2d\u56fd\u9999\u6e2f",value:"\u4e2d\u56fd\u9999\u6e2f"}],W=V.a.Group,X=[{label:"\u559c\u5267",value:"\u559c\u5267"},{label:"\u707e\u96be",value:"\u707e\u96be"},{label:"\u52a8\u4f5c",value:"\u52a8\u4f5c"},{label:"\u7231\u60c5",value:"\u7231\u60c5"}],Y=V.a.Group,Z=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.props.form.validateFields(function(){var e=Object(y.a)(b.a.mark(function e(a){var n,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=6;break}return n=t.props.form.getFieldsValue(),e.next=4,t.props.onSubmit(n);case 4:(r=e.sent)?k.a.error(r):k.a.success("\u5904\u7406\u6210\u529f",1,function(){t.props.history.push("/movie")});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return i.a.createElement(z.a,Object.assign({onSubmit:this.handleSubmit.bind(this)},U,{style:{width:"400px"}}),i.a.createElement(z.a.Item,{label:"\u7535\u5f71\u540d\u79f0"},e("name",{rules:[{required:!0,message:"\u8bf7\u586b\u5199\u7535\u5f71\u540d\u79f0"}]})(i.a.createElement(g.a,null))),i.a.createElement(z.a.Item,{label:"\u5c01\u9762\u56fe"},e("poster")(i.a.createElement(J,null))),i.a.createElement(z.a.Item,{label:"\u5730\u533a"},e("areas",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5730\u533a"}]})(i.a.createElement(W,{options:Q}))),i.a.createElement(z.a.Item,{label:"\u7c7b\u578b"},e("types",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7c7b\u578b"}]})(i.a.createElement(Y,{options:X}))),i.a.createElement(z.a.Item,{label:"\u65f6\u957f(\u5206\u949f)"},e("timeLong",{rules:[{required:!0,message:"\u8bf7\u586b\u5199\u65f6\u957f"}]})(i.a.createElement(B.a,{min:1,step:10}))),i.a.createElement(z.a.Item,{label:"\u6b63\u5728\u70ed\u6620"},e("isHot",{initialValue:!1,valuePropName:"checked"})(i.a.createElement(j.a,null))),i.a.createElement(z.a.Item,{label:"\u5373\u5c06\u4e0a\u6620"},e("isComing",{initialValue:!1,valuePropName:"checked"})(i.a.createElement(j.a,null))),i.a.createElement(z.a.Item,{label:"\u7ecf\u5178\u5f71\u7247"},e("isClassic",{initialValue:!1,valuePropName:"checked"})(i.a.createElement(j.a,null))),i.a.createElement(z.a.Item,{label:"\u63cf\u8ff0"},e("description")(i.a.createElement(g.a.TextArea,null))),i.a.createElement(z.a.Item,{labelCol:{span:0},wrapperCol:{span:19,offset:5}},i.a.createElement(E.a,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4")))}}]),t}(i.a.Component);var $=Object(s.e)(z.a.create({mapPropsToFields:function(e){if(e.movie)return function(e){var t={};for(var a in e)t[a]=z.a.createFormField({value:e[a]});return console.log(t),t}(e.movie)}})(Z)),ee=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement($,{onSubmit:function(){var e=Object(y.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.add(t);case 2:if(!(a=e.sent).data){e.next=7;break}return e.abrupt("return","");case 7:return e.abrupt("return",a.err);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()})}}]),t}(i.a.Component),te=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={movie:void 0},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getMovieById(this.props.match.params.id);case 2:(t=e.sent).data&&this.setState({movie:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return i.a.createElement($,{movie:this.state.movie,onSubmit:function(){var t=Object(y.a)(b.a.mark(function t(a){var n;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.edit(e.props.match.params.id,a);case 2:if(!(n=t.sent).data){t.next=7;break}return t.abrupt("return","");case 7:return t.abrupt("return",n.err);case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()})}}]),t}(i.a.Component),ae=a(474),ne=a(158),re=ae.a.Header,ie=ae.a.Sider,oe=ae.a.Content,ce=function(){return i.a.createElement("div",{className:"container"},i.a.createElement(ae.a,null,i.a.createElement(re,{className:"header"},i.a.createElement(u.b,{to:"/"},"\u732b\u773c\u7535\u5f71\u7ba1\u7406\u7cfb\u7edf")),i.a.createElement(ae.a,null,i.a.createElement(ie,null,i.a.createElement(ne.a,{mode:"inline",theme:"dark"},i.a.createElement(ne.a.Item,{key:"1"},i.a.createElement(u.b,{to:"/movie"},"\u7535\u5f71\u5217\u8868")),i.a.createElement(ne.a.Item,{key:"2"},i.a.createElement(u.b,{to:"/movie/add"},"\u6dfb\u52a0\u7535\u5f71")))),i.a.createElement(oe,null,i.a.createElement("div",{className:"main"},i.a.createElement(s.a,{path:"/",component:h,exact:!0}),i.a.createElement(s.a,{path:"/movie",exact:!0,component:T}),i.a.createElement(s.a,{path:"/movie/add",component:ee}),i.a.createElement(s.a,{path:"/movie/edit/:id",component:te}))))))},ue=a(70),se=a(60),le={data:[],condition:{page:1,limit:10,key:""},total:0,isLoading:!1,totalPage:0},pe=Object(ue.c)({movie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"movie_delete":return function(e,t){return Object(se.a)({},e,{data:e.data.filter(function(e){return e._id!==t.payload}),total:e.total-1,totalPage:Math.ceil((e.total-1)/e.condition.limit)})}(e,t);case"movie_save":return function(e,t){return Object(se.a)({},e,{data:t.payload.movies,total:t.payload.total,totalPage:Math.ceil(t.payload.total/e.condition.limit)})}(e,t);case"movie_setCondition":return function(e,t){var a=Object(se.a)({},e,{condition:Object(se.a)({},e.condition,t.payload)});return a.totalPage=Math.ceil(a.total/a.condition.limit),a}(e,t);case"movie_setLoading":return function(e,t){return Object(se.a)({},e,{isLoading:t.payload})}(e,t);case"movie_switch":return function(e,t){var a=e.data.find(function(e){return e._id===t.payload.id});if(!a)return e;var n=Object(se.a)({},a);n[t.payload.type]=t.payload.newVal;var r=e.data.map(function(e){return e._id===t.payload.id?n:e});return Object(se.a)({},e,{data:r})}(e,t);default:return e}}}),de=a(223),me=a.n(de),fe=a(224),he=Object(ue.d)(pe,Object(ue.a)(fe.a,me.a)),ve=function(){return i.a.createElement(M.a,{store:he},i.a.createElement(u.a,null,i.a.createElement(s.a,{path:"/",component:ce})))};c.a.render(i.a.createElement(ve,null),document.getElementById("root"))}},[[228,1,2]]]);
//# sourceMappingURL=main.85e65fec.chunk.js.map