import{w as o,_ as r}from"./works-d7396bef.js";import{_,b as t,a as i,c as u,w as h,e as n,d as e,t as a,q as d,p,g as w}from"./index-d8902714.js";const l=c=>(p("data-v-a032bcdb"),c=c(),w(),c),k={class:"main"},b=l(()=>e("div",{class:"blank"},null,-1)),m=["src"],y=l(()=>e("div",{class:"blank"},null,-1)),v={key:0},f=l(()=>e("h2",null,"本編",-1)),g=l(()=>e("div",{class:"blank"},null,-1)),x=["src"],S=l(()=>e("div",{class:"blank"},null,-1)),B={key:0},I=l(()=>e("h2",null,"主催",-1)),V=l(()=>e("div",{class:"blank"},null,-1)),W={key:1},C=l(()=>e("h2",null,"音楽",-1)),N=l(()=>e("div",{class:"blank"},null,-1)),T={key:2},Y=l(()=>e("h2",null,"Vocal",-1)),q=l(()=>e("div",{class:"blank"},null,-1)),D={key:1},E=l(()=>e("h1",null,"404",-1)),J=[E],$={__name:"Work",props:{id:String},setup(c){const s=c;return o.works[s.id]!=null?document.title=o.works[s.id].title+" | yosshipaopao":document.title="404",(j,z)=>t(o).works[s.id]!=null?(i(),u(t(r),{key:0,class:"container",weight:.03},{default:h(()=>[e("div",k,[e("h1",null,"【"+a(t(o).works[s.id].info)+"】"+a(t(o).works[s.id].title),1),b,e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/"+t(o).works[s.id].youtube,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,m),y,t(o).works[s.id].yt_main!=null?(i(),n("div",v,[f,g,e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/"+t(o).works[s.id].yt_main,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,x),S,t(o).works[s.id].syusai!=null?(i(),n("div",B,[I,e("h1",null,a(t(o).works[s.id].syusai),1),V])):d("",!0),t(o).works[s.id].song!=null?(i(),n("div",W,[C,e("h1",null,a(t(o).works[s.id].song),1),N])):d("",!0),t(o).works[s.id].vocal!=null?(i(),n("div",T,[Y,e("h1",null,a(t(o).works[s.id].vocal),1),q])):d("",!0)])):d("",!0)])]),_:1})):(i(),n("div",D,J))}},G=_($,[["__scopeId","data-v-a032bcdb"]]);export{G as default};
