(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{L6id:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class i{}var o=e("pMnS"),u=e("oBZk"),a=e("ZZ/e"),r=e("SVse"),d=e("s7LF"),s=e("ccyI");class g{constructor(l,n,e,t,i,o){this.activatedRoute=l,this.router=n,this.authservice=e,this.storage=t,this.menuCtrl=i,this.alertCtrl=o,this.items=[{data:"Book Appointment",img:"../assets/imgs/a_icon.png",id:"1"},{data:"View Appointment",img:"../assets/imgs/v_icon.png",id:"2"},{data:"About Us",img:"../assets/imgs/about_icon.png",id:"3"},{data:"Take Photo",img:"../assets/imgs/img.png",id:"7"},{data:"Signature",img:"../assets/imgs/sign.png",id:"8"},{data:"Video",img:"../assets/imgs/video.png",id:"9"}],this.menuCtrl.enable(!0),this.activatedRoute.queryParams.subscribe(l=>{console.log(l),this.isEnabled=l.ISEnable}),this.grid=Array(Math.ceil(this.items.length/3))}selectoption(l){console.log(l),1==l&&this.router.navigateByUrl("/appointment"),2==l&&this.router.navigateByUrl("/calender"),7==l&&this.router.navigate(["/searchappoinment"],{queryParams:{Page:"TakeImage"}}),8==l&&this.router.navigate(["/searchappoinment"],{queryParams:{Page:"Signatue"}}),9==l&&this.router.navigate(["/searchappoinment"],{queryParams:{Page:"Video"}})}AddAppointment(){this.router.navigateByUrl("/appointment")}GoToScheduler(){this.router.navigateByUrl("/calender")}ngOnInit(){console.log("ionViewDidLoad call"),this.storage.get("dealerid").then(l=>{this.dealers=this.authservice.getdealers(),console.log(this.dealers),console.log("Your age is",l),this.dealername=l});let l=0;for(let n=0;n<this.items.length;n+=3)this.grid[l]=Array(3),this.items[n]&&(this.grid[l][0]=this.items[n]),this.items[n+1]&&(this.grid[l][1]=this.items[n+1]),this.items[n+2]&&(this.grid[l][2]=this.items[n+2]),l++}ChangeDealership(l){this.storage.set("dealerid",l.detail.value)}}var c=e("iInd"),m=e("xgBC"),p=t["\u0275crt"]({encapsulation:0,styles:[[".header-ios[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]:last-child, .header-md[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]:last-child{--border-width:0 0 0.55px;--background:#374767}.homeicon[_ngcontent-%COMP%]{max-width:30%;border:0;height:30px;margin-top:10px}select-icon-inner[_ngcontent-%COMP%]{left:-5px;margin-top:-6px;border-top:14px solid;border-right:10px solid transparent;border-left:10px solid transparent}.popover-content[_ngcontent-%COMP%]{min-width:90%!important}.menu[_ngcontent-%COMP%]{padding:8px;margin-top:10px}ion-card[_ngcontent-%COMP%]{height:100px!important}.col[_ngcontent-%COMP%]{padding:0;position:relative;width:100%;margin:0;min-height:1px;flex-basis:0;-webkit-box-flex:1;flex-grow:1;max-width:100%}.card-md[_ngcontent-%COMP%]{margin:1px;border-radius:2px;width:calc(100% - 2px);font-size:1.4rem;background:#fff;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}"]],data:{}});function h(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"ion-select-option",[["style","white-space: normal;"]],null,null,null,u.gb,u.B)),t["\u0275did"](1,49152,null,0,a.rb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{value:[0,"value"]},null),(l()(),t["\u0275ted"](2,0,["",""]))],(function(l,n){l(n,1,0,t["\u0275inlineInterpolate"](1,"",n.context.$implicit.DealershipId,""))}),(function(l,n){l(n,2,0,n.context.$implicit.DealershipName)}))}function f(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,11,"ion-col",[["width-0",""]],null,null,null,u.M,u.g)),t["\u0275did"](1,49152,null,0,a.w,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,9,"ion-card",[],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.selectoption(l.context.$implicit.id)&&t),t}),u.K,u.e)),t["\u0275did"](3,49152,null,0,a.p,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](4,0,null,0,2,"ion-row",[["style","justify-content: center;"]],null,null,null,u.eb,u.y)),t["\u0275did"](5,49152,null,0,a.mb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](6,0,null,0,0,"img",[["class","homeicon"]],[[8,"src",4]],null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,0,4,"ion-row",[["style","justify-content: center;"]],null,null,null,u.eb,u.y)),t["\u0275did"](8,49152,null,0,a.mb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](9,0,null,0,2,"ion-label",[["style","text-align: center;margin-top: 10px"]],null,null,null,u.X,u.r)),t["\u0275did"](10,49152,null,0,a.Q,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](11,0,["",""]))],null,(function(l,n){l(n,6,0,n.context.$implicit.img),l(n,11,0,n.context.$implicit.data)}))}function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"ion-row",[],null,null,null,u.eb,u.y)),t["\u0275did"](1,49152,null,0,a.mb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,f)),t["\u0275did"](3,278528,null,0,r.j,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,3,0,n.context.$implicit)}),null)}function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,12,"ion-header",[],null,null,null,u.R,u.l)),t["\u0275did"](1,49152,null,0,a.E,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,10,"ion-toolbar",[],null,null,null,u.lb,u.F)),t["\u0275did"](3,49152,null,0,a.Fb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,u.J,u.d)),t["\u0275did"](5,49152,null,0,a.o,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](6,0,null,0,1,"ion-menu-button",[["style","--color: #fff;"]],null,null,null,u.Z,u.u)),t["\u0275did"](7,49152,null,0,a.U,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](8,0,null,0,4,"ion-title",[],null,null,null,u.kb,u.E)),t["\u0275did"](9,49152,null,0,a.Db,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](10,0,null,0,0,"img",[["src","../assets/imgs/appointment.png"]],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,0,1,"span",[["style","color: #fff;margin-left: 3px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["PPOINTMENT "])),(l()(),t["\u0275eld"](13,0,null,null,15,"ion-content",[],null,null,null,u.N,u.h)),t["\u0275did"](14,49152,null,0,a.x,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](15,0,null,0,1,"p",[["style","margin-left: 13px;    margin-top: 10px;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Dealership Name"])),(l()(),t["\u0275eld"](17,0,null,0,7,"ion-item",[["style","border: 1px solid #acadaf;margin-left: 10px;margin-right: 10px;border-radius: 10px;"]],null,null,null,u.W,u.q)),t["\u0275did"](18,49152,null,0,a.K,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](19,0,null,0,5,"ion-select",[["style","max-width: 100% !important;width: 100%;font-size: 15px;margin-left: -10px;"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var i=!0,o=l.component;return"ionBlur"===n&&(i=!1!==t["\u0275nov"](l,22)._handleBlurEvent(e.target)&&i),"ionChange"===n&&(i=!1!==t["\u0275nov"](l,22)._handleChangeEvent(e.target)&&i),"ionChange"===n&&(i=!1!==o.ChangeDealership(e)&&i),i}),u.hb,u.A)),t["\u0275prd"](5120,null,d.k,(function(l){return[l]}),[a.Rb]),t["\u0275did"](21,49152,null,0,a.qb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{value:[0,"value"]},null),t["\u0275did"](22,16384,null,0,a.Rb,[t.ElementRef],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,h)),t["\u0275did"](24,278528,null,0,r.j,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](25,0,null,0,3,"ion-grid",[["class","menu"]],null,null,null,u.Q,u.k)),t["\u0275did"](26,49152,null,0,a.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,b)),t["\u0275did"](28,278528,null,0,r.j,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component;l(n,21,0,t["\u0275inlineInterpolate"](1,"",e.dealername,"")),l(n,24,0,e.dealers),l(n,28,0,e.grid)}),null)}function x(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-home",[],null,null,null,R,p)),t["\u0275did"](1,114688,null,0,g,[c.a,c.m,s.a,m.b,a.Kb,a.b],null,null)],(function(l,n){l(n,1,0)}),null)}var C=t["\u0275ccf"]("app-home",g,x,{},{},[]);e.d(n,"HomePageModuleNgFactory",(function(){return v}));var v=t["\u0275cmf"](i,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,C]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,r.m,r.l,[t.LOCALE_ID,[2,r.y]]),t["\u0275mpd"](4608,d.s,d.s,[]),t["\u0275mpd"](4608,a.c,a.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,a.Lb,a.Lb,[a.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,a.Pb,a.Pb,[a.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,r.b,r.b,[]),t["\u0275mpd"](1073742336,d.r,d.r,[]),t["\u0275mpd"](1073742336,d.g,d.g,[]),t["\u0275mpd"](1073742336,a.Hb,a.Hb,[]),t["\u0275mpd"](1073742336,c.n,c.n,[[2,c.s],[2,c.m]]),t["\u0275mpd"](1073742336,i,i,[]),t["\u0275mpd"](1024,c.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);