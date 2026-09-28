import{T as mt}from"./index-Cfo46qzW.js";import{B as K,C as V,o as u,c as h,a2 as L,E as m,ax as dt,aS as gt,aT as yt,a7 as at,aU as Q,bi as xt,aC as H,b4 as kt,aV as j,aJ as wt,bj as it,a0 as ct,l as R,z as $,a3 as tt,i as C,a as n,aE as Tt,aa as $t,aW as U,w as p,n as _t,N as Bt,H as St,b as d,u as o,g as G,A as B,t as y,F as I,r as J,f as Y,L as rt,K as S,T as Ct,R as Nt,x as Ot,Q as zt,j as k,M,bk as At}from"./index-BT5dfLyi.js";import{s as Pt}from"./index-VIWhr3p3.js";import{s as ot}from"./index-BDCLaCkb.js";import{s as lt}from"./index-B6auTOYa.js";import{s as W}from"./sincronizacionServices-CXSem_uF.js";var It=`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
        overflow: hidden;
        background: dt('tabs.tablist.background');
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`,Lt={root:function(t){var a=t.props;return["p-tabs p-component",{"p-tabs-scrollable":a.scrollable}]}},Rt=K.extend({name:"tabs",style:It,classes:Lt}),Et={name:"BaseTabs",extends:V,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:Rt,provide:function(){return{$pcTabs:this,$parentInstance:this}}},ut={name:"Tabs",extends:Et,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(t){this.d_value=t}},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function Kt(e,t,a,s,b,i){return u(),h("div",m({class:e.cx("root")},e.ptmi("root")),[L(e.$slots,"default")],16)}ut.render=Kt;var Vt={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Ft=K.extend({name:"tablist",classes:Vt}),Dt={name:"BaseTabList",extends:V,props:{},style:Ft,provide:function(){return{$pcTabList:this,$parentInstance:this}}},bt={name:"TabList",extends:Dt,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,inkBarObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar(),this.bindInkBarObserver()}}},mounted:function(){var t=this;setTimeout(function(){t.updateInkBar(),t.bindInkBarObserver()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver(),this.unbindInkBarObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,a=this.getVisibleButtonWidths(),s=Q(t)-a,b=Math.abs(t.scrollLeft),i=s*.8,f=b-i,g=Math.max(f,0);t.scrollLeft=it(t)?-1*g:g},onNextButtonClick:function(){var t=this.$refs.content,a=this.getVisibleButtonWidths(),s=Q(t)-a,b=Math.abs(t.scrollLeft),i=s*.8,f=b+i,g=t.scrollWidth-s,w=Math.min(f,g);t.scrollLeft=it(t)?-1*w:w},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},bindInkBarObserver:function(){var t=this;this.unbindInkBarObserver();var a=this.$refs.content,s=H(a,'[data-pc-name="tab"][data-p-active="true"]');s&&(this.inkBarObserver=new ResizeObserver(function(){return t.updateInkBar()}),this.inkBarObserver.observe(s))},unbindInkBarObserver:function(){var t;(t=this.inkBarObserver)===null||t===void 0||t.disconnect(),this.inkBarObserver=void 0},updateInkBar:function(){var t=this.$refs,a=t.content,s=t.inkbar,b=t.tabs;if(s){var i=H(a,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(s.style.height=kt(i)+"px",s.style.top=j(i).top-j(b).top+"px"):(s.style.width=wt(i)+"px",s.style.left=j(i).left-j(b).left+"px")}},updateButtonState:function(){var t=this.$refs,a=t.list,s=t.content,b=s.scrollTop,i=s.scrollWidth,f=s.scrollHeight,g=s.offsetWidth,w=s.offsetHeight,_=Math.abs(s.scrollLeft),O=[Q(s),xt(s)],X=O[0],z=O[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=b!==0,this.isNextButtonEnabled=a.offsetHeight>=w&&parseInt(b)!==f-z):(this.isPrevButtonEnabled=_!==0,this.isNextButtonEnabled=a.offsetWidth>=g&&parseInt(_)!==i-X)},getVisibleButtonWidths:function(){var t=this.$refs,a=t.prevButton,s=t.nextButton,b=0;return this.showNavigators&&(b=((a==null?void 0:a.offsetWidth)||0)+((s==null?void 0:s.offsetWidth)||0)),b}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return at({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:yt,ChevronRightIcon:gt},directives:{ripple:dt}},jt=["data-p"],Ut=["aria-label","tabindex"],Mt=["data-p"],Wt=["aria-orientation"],Ht=["aria-label","tabindex"];function Xt(e,t,a,s,b,i){var f=ct("ripple");return u(),h("div",m({ref:"list",class:e.cx("root"),"data-p":i.dataP},e.ptmi("root")),[i.showNavigators&&b.isPrevButtonEnabled?R((u(),h("button",m({key:0,ref:"prevButton",type:"button",class:e.cx("prevButton"),"aria-label":i.prevButtonAriaLabel,tabindex:i.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return i.onPrevButtonClick&&i.onPrevButtonClick.apply(i,arguments)})},e.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(u(),$(tt(i.templates.previcon||"ChevronLeftIcon"),m({"aria-hidden":"true"},e.ptm("prevIcon")),null,16))],16,Ut)),[[f]]):C("",!0),n("div",m({ref:"content",class:e.cx("content"),onScroll:t[1]||(t[1]=function(){return i.onScroll&&i.onScroll.apply(i,arguments)}),"data-p":i.dataP},e.ptm("content")),[n("div",m({ref:"tabs",class:e.cx("tabList"),role:"tablist","aria-orientation":i.$pcTabs.orientation||"horizontal"},e.ptm("tabList")),[L(e.$slots,"default"),n("span",m({ref:"inkbar",class:e.cx("activeBar"),role:"presentation","aria-hidden":"true"},e.ptm("activeBar")),null,16)],16,Wt)],16,Mt),i.showNavigators&&b.isNextButtonEnabled?R((u(),h("button",m({key:1,ref:"nextButton",type:"button",class:e.cx("nextButton"),"aria-label":i.nextButtonAriaLabel,tabindex:i.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return i.onNextButtonClick&&i.onNextButtonClick.apply(i,arguments)})},e.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(u(),$(tt(i.templates.nexticon||"ChevronRightIcon"),m({"aria-hidden":"true"},e.ptm("nextIcon")),null,16))],16,Ht)),[[f]]):C("",!0)],16,jt)}bt.render=Xt;var qt={root:function(t){var a=t.instance,s=t.props;return["p-tab",{"p-tab-active":a.active,"p-disabled":s.disabled}]}},Zt=K.extend({name:"tab",classes:qt}),Qt={name:"BaseTab",extends:V,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Zt,provide:function(){return{$pcTab:this,$parentInstance:this}}},et={name:"Tab",extends:Qt,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var a=this.findNextTab(t.currentTarget);a?this.changeFocusedTab(t,a):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var a=this.findPrevTab(t.currentTarget);a?this.changeFocusedTab(t,a):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var a=this.findFirstTab();this.changeFocusedTab(t,a),t.preventDefault()},onEndKey:function(t){var a=this.findLastTab();this.changeFocusedTab(t,a),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue()},findNextTab:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=a?t:t.nextElementSibling;return s?U(s,"data-p-disabled")||U(s,"data-pc-section")==="activebar"?this.findNextTab(s):H(s,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=a?t:t.previousElementSibling;return s?U(s,"data-p-disabled")||U(s,"data-pc-section")==="activebar"?this.findPrevTab(s):H(s,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,a){$t(a),this.scrollInView(a)},scrollInView:function(t){var a;t==null||(a=t.scrollIntoView)===null||a===void 0||a.call(t,{block:"nearest"})}},computed:{active:function(){var t;return Tt((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tabpanel_").concat(this.value)},attrs:function(){return m(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return at({active:this.active})}},directives:{ripple:dt}};function Gt(e,t,a,s,b,i){var f=ct("ripple");return e.asChild?L(e.$slots,"default",{key:1,dataP:i.dataP,class:_t(e.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs,onClick:i.onClick}):R((u(),$(tt(e.as),m({key:0,class:e.cx("root"),"data-p":i.dataP,onClick:i.onClick},i.attrs),{default:p(function(){return[L(e.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[f]])}et.render=Gt;var Jt={root:"p-tabpanels"},Yt=K.extend({name:"tabpanels",classes:Jt}),te={name:"BaseTabPanels",extends:V,props:{},style:Yt,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},pt={name:"TabPanels",extends:te,inheritAttrs:!1};function ee(e,t,a,s,b,i){return u(),h("div",m({class:e.cx("root"),role:"presentation"},e.ptmi("root")),[L(e.$slots,"default")],16)}pt.render=ee;var ae=`
    .p-skeleton {
        display: block;
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`,ne={root:{position:"relative"}},se={root:function(t){var a=t.props;return["p-skeleton p-component",{"p-skeleton-circle":a.shape==="circle","p-skeleton-animation-none":a.animation==="none"}]}},ie=K.extend({name:"skeleton",style:ae,classes:se,inlineStyles:ne}),re={name:"BaseSkeleton",extends:V,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:ie,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}};function E(e){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(e)}function oe(e,t,a){return(t=le(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function le(e){var t=de(e,"string");return E(t)=="symbol"?t:t+""}function de(e,t){if(E(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var s=a.call(e,t);if(E(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var vt={name:"Skeleton",extends:re,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}},dataP:function(){return at(oe({},this.shape,this.shape))}}},ce=["data-p"];function ue(e,t,a,s,b,i){return u(),h("div",m({class:e.cx("root"),style:[e.sx("root"),i.containerStyle],"aria-hidden":"true"},e.ptmi("root"),{"data-p":i.dataP}),null,16,ce)}vt.render=ue;const be={class:"grid grid-cols-12 gap-4"},pe={class:"col-span-12"},ve={class:"card mb-0"},fe={class:"flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"},he={class:"flex gap-3 items-center"},me={key:1,class:"text-sm text-muted-color mt-2 mb-0"},ge={class:"card mb-0"},ye={class:"col-span-12 md:col-span-6 xl:col-span-3"},xe={class:"card mb-0"},ke={class:"flex justify-between"},we={class:"col-span-12 md:col-span-6 xl:col-span-3"},Te={class:"card mb-0"},$e={class:"flex justify-between"},_e={class:"text-surface-900 dark:text-surface-0 font-medium text-lg"},Be={class:"col-span-12 md:col-span-6 xl:col-span-3"},Se={class:"card mb-0"},Ce={class:"flex justify-between"},Ne={class:"text-surface-900 dark:text-surface-0 font-medium text-xl"},Oe={class:"text-muted-color text-base"},ze={class:"col-span-12 md:col-span-6 xl:col-span-3"},Ae={class:"card mb-0"},Pe={class:"flex justify-between"},Ie={class:"text-surface-900 dark:text-surface-0 font-medium text-xl"},Le={class:"col-span-12"},Re={class:"card"},Ee={class:"font-medium"},Ke={class:"text-xs text-muted-color"},Ve={key:1,class:"text-red-500 text-sm"},Fe={key:0,class:"text-sm text-muted-color mb-3"},qe={__name:"SincronizacionCatalogos",setup(e){const t=Bt(),a={actividades:"Actividades económicas",productos_servicios:"Productos y servicios",leyendas:"Leyendas de factura",mensajes:"Mensajes de servicios",eventos:"Eventos significativos",motivos_anulacion:"Motivos de anulación",documentos_identidad:"Documentos de identidad",documentos_sector:"Documentos sector",tipos_emision:"Tipos de emisión",tipos_habitacion:"Tipos de habitación",metodos_pago:"Métodos de pago",monedas:"Monedas",tipos_punto_venta:"Tipos de punto de venta",tipos_factura:"Tipos de factura",unidades:"Unidades de medida",paises:"Países de origen"},s={OK:"success",PARCIAL:"warn",ERROR:"danger",NUNCA_SINCRONIZADO:"secondary"},b={OK:"Sincronizado",PARCIAL:"Parcial",ERROR:"Con errores",NUNCA_SINCRONIZADO:"Sin sincronizar"},i=k(!0),f=k(null),g=k(null),w=M(()=>{var l;return((l=f.value)==null?void 0:l.estado_general)??"NUNCA_SINCRONIZADO"}),_=M(()=>{var l;return((l=f.value)==null?void 0:l.resumen)??{total:0,exitosos:0,fallidos:0,porcentaje:0}}),O=(l,r)=>Object.entries(l??{}).map(([v,T])=>({clave:v,tipo:r,etiqueta:a[v]??v,...T})),X=M(()=>{var l,r;return[{valor:"catalogos",filas:O((l=f.value)==null?void 0:l.catalogos,"catalogo")},{valor:"parametros",filas:O((r=f.value)==null?void 0:r.parametros,"parametro")}]});async function z(){var l,r;i.value=!0,g.value=null;try{const v=await W.estado();f.value=v.data}catch(v){g.value=((r=(l=v.response)==null?void 0:l.data)==null?void 0:r.message)??"No se pudo cargar el estado."}finally{i.value=!1}}const q=l=>l?new Date(l.replace(" ","T")).toLocaleString("es-BO",{dateStyle:"medium",timeStyle:"short"}):"—",N=k(!1);async function ft(){var l,r;N.value=!0;try{const v=await W.sincronizar(0);t.add({severity:v.estado_general==="OK"?"success":"warn",summary:v.estado_general==="OK"?"Sincronización completa":"Sincronización parcial",detail:v.message,life:5e3})}catch(v){t.add({severity:"error",summary:"No se pudo sincronizar",detail:((r=(l=v.response)==null?void 0:l.data)==null?void 0:r.message)??"Error de conexión con el servidor.",life:6e3})}finally{N.value=!1,z()}}const F=k(!1),Z=k(!1),nt=k(""),A=k({}),D=k([]),P=k({global:{value:null,matchMode:At.CONTAINS}}),st=M(()=>{const l=D.value[0];return l?Object.keys(l):[]});async function ht(l){var r,v;F.value=!0,Z.value=!0,nt.value=l.etiqueta,D.value=[],A.value={},P.value.global.value=null;try{const T=l.tipo==="catalogo"?await W.catalogo(l.clave):await W.parametro(l.clave);D.value=T.data??[],A.value=T.meta??{}}catch(T){F.value=!1,t.add({severity:"error",summary:"No se pudo leer",detail:((v=(r=T.response)==null?void 0:r.data)==null?void 0:v.message)??"Error al consultar los datos.",life:5e3})}finally{Z.value=!1}}return St(z),(l,r)=>{var T;const v=mt;return u(),h(I,null,[n("div",be,[n("div",pe,[n("div",ve,[n("div",fe,[r[3]||(r[3]=n("div",null,[n("h2",{class:"text-2xl font-semibold m-0"},"Catálogos y parámetros SIAT"),n("p",{class:"text-muted-color mt-1 mb-0"}," Información sincronizada con Impuestos Nacionales para la emisión de facturas. ")],-1)),n("div",he,[d(o(G),{label:"Sincronizar",icon:"pi pi-sync",loading:N.value,onClick:ft},null,8,["loading"]),R(d(o(G),{icon:"pi pi-refresh",severity:"secondary",outlined:"",disabled:N.value,onClick:z},null,8,["disabled"]),[[v,"Actualizar estado",void 0,{top:!0}]])])]),N.value?(u(),$(o(ot),{key:0,mode:"indeterminate",style:{height:"4px"},class:"mt-4"})):C("",!0),N.value?(u(),h("p",me," Consultando el SIAT, esto puede tardar unos segundos… ")):C("",!0)])]),g.value?(u(),$(o(lt),{key:0,severity:"error",class:"col-span-12",closable:!1},{default:p(()=>[B(y(g.value),1)]),_:1})):C("",!0),i.value?(u(),h(I,{key:1},J(4,x=>n("div",{key:x,class:"col-span-12 md:col-span-6 xl:col-span-3"},[n("div",ge,[d(o(vt),{height:"4.5rem"})])])),64)):(u(),h(I,{key:2},[n("div",ye,[n("div",xe,[n("div",ke,[n("div",null,[r[4]||(r[4]=n("span",{class:"block text-muted-color font-medium mb-3"},"Estado general",-1)),d(o(Y),{value:b[w.value]??w.value,severity:s[w.value]??"secondary",class:"text-base"},null,8,["value","severity"])]),r[5]||(r[5]=n("div",{class:"flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border",style:{width:"2.5rem",height:"2.5rem"}},[n("i",{class:"pi pi-shield text-blue-500 text-xl"})],-1))])])]),n("div",we,[n("div",Te,[n("div",$e,[n("div",null,[r[6]||(r[6]=n("span",{class:"block text-muted-color font-medium mb-3"},"Última sincronización",-1)),n("div",_e,y(q((T=f.value)==null?void 0:T.ultima_sincronizacion)),1)]),r[7]||(r[7]=n("div",{class:"flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-border",style:{width:"2.5rem",height:"2.5rem"}},[n("i",{class:"pi pi-clock text-orange-500 text-xl"})],-1))])])]),n("div",Be,[n("div",Se,[n("div",Ce,[n("div",null,[r[8]||(r[8]=n("span",{class:"block text-muted-color font-medium mb-3"},"Correctos",-1)),n("div",Ne,[B(y(_.value.exitosos)+" ",1),n("span",Oe,"/ "+y(_.value.total),1)])]),r[9]||(r[9]=n("div",{class:"flex items-center justify-center bg-green-100 dark:bg-green-400/10 rounded-border",style:{width:"2.5rem",height:"2.5rem"}},[n("i",{class:"pi pi-check-circle text-green-500 text-xl"})],-1))]),d(o(ot),{value:_.value.porcentaje??0,showValue:!1,style:{height:"6px"},class:"mt-3"},null,8,["value"])])]),n("div",ze,[n("div",Ae,[n("div",Pe,[n("div",null,[r[10]||(r[10]=n("span",{class:"block text-muted-color font-medium mb-3"},"Con errores",-1)),n("div",Ie,y(_.value.fallidos),1)]),r[11]||(r[11]=n("div",{class:"flex items-center justify-center bg-red-100 dark:bg-red-400/10 rounded-border",style:{width:"2.5rem",height:"2.5rem"}},[n("i",{class:"pi pi-exclamation-triangle text-red-500 text-xl"})],-1))])])])],64)),n("div",Le,[n("div",Re,[!i.value&&w.value==="NUNCA_SINCRONIZADO"?(u(),$(o(lt),{key:0,severity:"info",closable:!1,class:"mb-4"},{default:p(()=>[...r[12]||(r[12]=[B(" Aún no se han sincronizado los catálogos. Presione ",-1),n("b",null,"Sincronizar",-1),B(" para descargarlos del SIAT. ",-1)])]),_:1})):C("",!0),d(o(ut),{value:"catalogos"},{default:p(()=>[d(o(bt),null,{default:p(()=>[d(o(et),{value:"catalogos"},{default:p(()=>[...r[13]||(r[13]=[n("i",{class:"pi pi-book mr-2"},null,-1),B("Catálogos",-1)])]),_:1}),d(o(et),{value:"parametros"},{default:p(()=>[...r[14]||(r[14]=[n("i",{class:"pi pi-sliders-h mr-2"},null,-1),B("Parámetros",-1)])]),_:1})]),_:1}),d(o(pt),null,{default:p(()=>[(u(!0),h(I,null,J(X.value,x=>(u(),$(o(Pt),{key:x.valor,value:x.valor},{default:p(()=>[d(o(rt),{value:x.filas,loading:i.value,stripedRows:"",dataKey:"clave"},{empty:p(()=>[...r[15]||(r[15]=[n("div",{class:"text-center text-muted-color py-6"},"Sin información sincronizada.",-1)])]),default:p(()=>[d(o(S),{field:"etiqueta",header:"Nombre"},{body:p(({data:c})=>[n("div",Ee,y(c.etiqueta),1),n("div",Ke,y(c.clave),1)]),_:1}),d(o(S),{header:"Estado"},{body:p(({data:c})=>[d(o(Y),{value:c.success?"OK":"Error",severity:c.success?"success":"danger"},null,8,["value","severity"])]),_:1}),d(o(S),{field:"cantidad",header:"Registros",style:{width:"8rem"}}),d(o(S),{header:"Cambios"},{body:p(({data:c})=>[c.success?(u(),$(o(Y),{key:0,value:c.cambio_detectado?"Actualizado":"Sin cambios",severity:c.cambio_detectado?"info":"secondary"},null,8,["value","severity"])):(u(),h("span",Ve,y(c.message),1))]),_:1}),d(o(S),{header:"Fecha"},{body:p(({data:c})=>[B(y(q(c.fecha)),1)]),_:1}),d(o(S),{header:"",style:{width:"6rem"},alignFrozen:"right"},{body:p(({data:c})=>[R(d(o(G),{icon:"pi pi-eye",severity:"secondary",rounded:"",text:"",disabled:!c.success,onClick:De=>ht(c)},null,8,["disabled","onClick"]),[[v,"Ver datos",void 0,{top:!0}]])]),_:1})]),_:1},8,["value","loading"])]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])])]),d(o(zt),{visible:F.value,"onUpdate:visible":r[2]||(r[2]=x=>F.value=x),header:nt.value,modal:"",maximizable:"",style:{width:"85vw"},breakpoints:{"960px":"95vw"}},{default:p(()=>{var x;return[(x=A.value)!=null&&x.fecha_sincronizacion?(u(),h("div",Fe,y(A.value.cantidad)+" registros · sincronizado el "+y(q(A.value.fecha_sincronizacion)),1)):C("",!0),d(o(rt),{value:D.value,loading:Z.value,filters:P.value,"onUpdate:filters":r[1]||(r[1]=c=>P.value=c),globalFilterFields:st.value,paginator:"",rows:10,rowsPerPageOptions:[10,25,50,100],scrollable:"",scrollHeight:"55vh",stripedRows:"",size:"small"},{header:p(()=>[d(o(Ct),null,{default:p(()=>[d(o(Nt),{class:"pi pi-search"}),d(o(Ot),{modelValue:P.value.global.value,"onUpdate:modelValue":r[0]||(r[0]=c=>P.value.global.value=c),placeholder:"Buscar…",class:"w-full sm:w-80"},null,8,["modelValue"])]),_:1})]),empty:p(()=>[...r[16]||(r[16]=[n("div",{class:"text-center text-muted-color py-6"},"No hay registros.",-1)])]),default:p(()=>[(u(!0),h(I,null,J(st.value,c=>(u(),$(o(S),{key:c,field:c,header:c,style:{"min-width":"9rem"}},null,8,["field","header"]))),128))]),_:1},8,["value","loading","filters","globalFilterFields"])]}),_:1},8,["visible","header"])],64)}}};export{qe as default};
