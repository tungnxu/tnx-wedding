(self.webpackChunkth_wedding=self.webpackChunkth_wedding||[]).push([[179],{255:u=>{function c(r){return Promise.resolve().then(()=>{var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l})}c.keys=()=>[],c.resolve=c,c.id=255,u.exports=c},158:(u,c,r)=>{"use strict";var l=r(75),t=r(639),Z=r(791);const _=[];let v=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[Z.Bz.forRoot(_)],Z.Bz]}),e})();var x=r(57);let y=(()=>{class e{constructor(){this.dateNow=new Date,this.dDay=new Date("Apr 20 2022 00:00:00"),this.milliSecondsInASecond=1e3,this.hoursInADay=24,this.minutesInAnHour=60,this.SecondsInAMinute=60}getTimeDifference(){this.timeDifference=this.dDay.getTime()-(new Date).getTime(),this.allocateTimeUnits(this.timeDifference)}allocateTimeUnits(n){this.secondsToDday=Math.floor(n/this.milliSecondsInASecond%this.SecondsInAMinute),this.minutesToDday=Math.floor(n/(this.milliSecondsInASecond*this.minutesInAnHour)%this.SecondsInAMinute),this.hoursToDday=Math.floor(n/(this.milliSecondsInASecond*this.minutesInAnHour*this.SecondsInAMinute)%this.hoursInADay),this.daysToDday=Math.floor(n/(this.milliSecondsInASecond*this.minutesInAnHour*this.SecondsInAMinute*this.hoursInADay))}ngOnInit(){this.subscription=(0,x.F)(1e3).subscribe(n=>{this.getTimeDifference()})}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-count-down"]],decls:13,vars:4,consts:[[1,"timer"],["id","days"],["id","hours"],["id","minutes"],["id","seconds"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"span",1),t._uU(2),t.qZA(),t._uU(3,"ng\xe0y\xa0 -"),t.TgZ(4,"span",2),t._uU(5),t.qZA(),t._uU(6,"gi\u1edd\xa0 -"),t.TgZ(7,"span",3),t._uU(8),t.qZA(),t._uU(9,"ph\xfat\xa0 -"),t.TgZ(10,"span",4),t._uU(11),t.qZA(),t._uU(12,"gi\xe2y\xa0\n"),t.qZA()),2&n&&(t.xp6(2),t.Oqu(o.daysToDday),t.xp6(3),t.Oqu(o.hoursToDday),t.xp6(3),t.Oqu(o.minutesToDday),t.xp6(3),t.Oqu(o.secondsToDday))},styles:[".timer[_ngcontent-%COMP%]{text-align:center;font-size:2rem;letter-spacing:-1px;display:flex;align-items:center;justify-content:center}@media screen and (max-width: 600px){.timer[_ngcontent-%COMP%]{font-size:1.5rem;padding-bottom:3rem}}.timer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:3rem;background-color:#0000004d;border-radius:16px;width:60px;height:60px;margin-right:.5rem;display:inline-block}@media screen and (max-width: 600px){.timer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.5rem;width:40px;height:40px}}"]}),e})();var f=r(239),C=r(574),A=r(709),T=r(395),E=r(435),g=(()=>{return(e=g||(g={})).Visible="Visible",e.Pending="Pending",e.NotVisible="NotVisible",g;var e})();const O=(e,i,n=0)=>new C.y(o=>{const s=new A.xQ,a=new IntersectionObserver((b,d)=>{b.forEach(h=>{(function(e){return e.isIntersecting||e.intersectionRatio>0})(h)&&s.next({entry:h,observer:d})})},i);return s.subscribe(()=>{o.next(g.Pending)}),s.pipe((0,T.b)(n),(0,E.h)(Boolean)).subscribe(function(){var b=(0,f.Z)(function*({entry:d,observer:h}){(yield function(e){return m.apply(this,arguments)}(d.target))?(o.next(g.Visible),h.unobserve(d.target)):o.next(g.NotVisible)});return function(d){return b.apply(this,arguments)}}()),a.observe(e),{unsubscribe(){a.disconnect(),s.unsubscribe()}}});function m(){return(m=(0,f.Z)(function*(e){return new Promise(i=>{const n=new IntersectionObserver(([o])=>{i(o.isIntersecting),n.disconnect()});n.observe(e)})})).apply(this,arguments)}var q=r(782);let D=(()=>{class e{constructor(n){this.element=n,this.intersectionDebounce=0,this.intersectionRootMargin="0px",this.visibilityChange=new t.vpe,this.destroy$=new A.xQ}ngOnInit(){const n=this.element.nativeElement;O(n,{root:this.intersectionRoot,rootMargin:this.intersectionRootMargin,threshold:this.intersectionThreshold},this.intersectionDebounce).pipe((0,q.R)(this.destroy$)).subscribe(s=>{this.visibilityChange.emit(s),s==p.Visible&&n.classList.add("visible")})}ngOnDestroy(){this.destroy$.next()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.SBq))},e.\u0275dir=t.lG2({type:e,selectors:[["","intersectionObserver",""]],inputs:{intersectionDebounce:"intersectionDebounce",intersectionRootMargin:"intersectionRootMargin",intersectionRoot:"intersectionRoot",intersectionThreshold:"intersectionThreshold"},outputs:{visibilityChange:"visibilityChange"}}),e})();var p=(()=>{return(e=p||(p={})).Visible="Visible",e.Pending="Pending",e.NotVisible="NotVisible",p;var e})();let U=(()=>{class e{constructor(){this.visibilityStatus={},this.intersectionStatus=g}ngOnInit(){}onVisibilityChanged(n){console.log(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-our-story"]],decls:33,vars:5,consts:[[1,"container"],[1,"font-weight-bold","text-center"],[1,"text-center"],["src","/assets/imgs/venz1.png","alt","","srcset","",1,"mb-3",2,"filter","invert(1)","width","125px"],[1,"timeline"],["intersectionObserver","",3,"intersectionDebounce","visibilityChange"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"h1",1),t._uU(2,"Our story"),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"img",3),t.qZA(),t.TgZ(5,"p",2),t._uU(6,"L\u01b0u gi\u1eef t\u1eebng kho\u1ea3nh kh\u1eafc"),t.qZA(),t.TgZ(7,"ul",4),t.TgZ(8,"li",5),t.NdJ("visibilityChange",function(a){return o.onVisibilityChanged(a)}),t.TgZ(9,"h3"),t._uU(10,"2001"),t.qZA(),t.TgZ(11,"p"),t._uU(12,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),t.qZA(),t.qZA(),t.TgZ(13,"li",5),t.NdJ("visibilityChange",function(a){return o.onVisibilityChanged(a)}),t.TgZ(14,"h3"),t._uU(15,"2001"),t.qZA(),t.TgZ(16,"p"),t._uU(17,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),t.qZA(),t.qZA(),t.TgZ(18,"li",5),t.NdJ("visibilityChange",function(a){return o.onVisibilityChanged(a)}),t.TgZ(19,"h3"),t._uU(20,"2001"),t.qZA(),t.TgZ(21,"p"),t._uU(22,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),t.qZA(),t.qZA(),t.TgZ(23,"li",5),t.NdJ("visibilityChange",function(a){return o.onVisibilityChanged(a)}),t.TgZ(24,"h3"),t._uU(25,"2001"),t.qZA(),t.TgZ(26,"p"),t._uU(27,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),t.qZA(),t.qZA(),t.TgZ(28,"li",5),t.NdJ("visibilityChange",function(a){return o.onVisibilityChanged(a)}),t.TgZ(29,"h3"),t._uU(30,"2001"),t.qZA(),t.TgZ(31,"p"),t._uU(32,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(8),t.Q6J("intersectionDebounce",500),t.xp6(5),t.Q6J("intersectionDebounce",500),t.xp6(5),t.Q6J("intersectionDebounce",500),t.xp6(5),t.Q6J("intersectionDebounce",500),t.xp6(5),t.Q6J("intersectionDebounce",500))},directives:[D],styles:['.timeline[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;list-style:none;padding-top:20px;padding-bottom:20px}.timeline[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;bottom:0;left:50%;width:1px;background-color:#ccc}.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-top:1px solid #ccc;position:relative;width:50%;min-height:100px;margin-bottom:20px;padding:20px 40px;text-align:right;transition:.3s;opacity:0;transform:translate(-10%);transition:.35s ease-out}.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"";width:10px;height:10px;position:absolute;top:0;right:0;background:#ccc;border-radius:50%;box-sizing:border-box;transform:translate(50%,-50%)}.timeline[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:28px;margin-bottom:10px}.timeline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;line-height:28px}.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2n){align-self:flex-end;text-align:left;transform:translate(10%)}.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2n):before{left:0;transform:translate(-50%,-50%)}.timeline[_ngcontent-%COMP%]   li.visible[_ngcontent-%COMP%]{opacity:1;transform:translate(0)}']}),e})(),P=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-gallery"]],decls:5,vars:0,consts:[[1,"container"],[1,"font-weight-bold","text-center"],[1,"text-center"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"h1",1),t._uU(2,"Gallery"),t.qZA(),t.TgZ(3,"p",2),t._uU(4,"L\u01b0u gi\u1eef t\u1eebng kho\u1ea3nh kh\u1eafc"),t.qZA(),t.qZA())},styles:[""]}),e})(),k=(()=>{class e{constructor(n){this._ngZone=n,this.title="th-wedding"}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{})})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.R0b))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-root"]],decls:100,vars:0,consts:[[1,"container"],[1,"d-flex","flex-column","flex-md-row","align-items-center","py-1"],["width","350","src","assets/imgs/our_wedding.png","alt","label",1,"my-0","mr-md-auto","font-weight-normal"],[1,"my-2","my-md-0","mr-md-3"],["href","#",1,"p-2","font-weight-bold","text-uppercase"],[1,"parallax","snow"],[1,"back-drop"],[1,"save-the-date","container","position-relative"],[1,"save-the-date-wrap","row","pt-5","align-seft-center","text-white"],[1,"col-sm","text-center"],[1,"date","border-bottom","border-top","d-inline-flex","align-items-center","py-1","font-weight-bold"],[1,"swirl_left"],[1,"swirl_right"],[1,"name","mt-3"],[1,"label","d-none","d-md-block"],[1,"text-hightlight","mb-2"],[1,"col-sm","h-100"],[1,"main-section","py-5"],[1,"container","text-center"],[1,"font-weight-bold",2,"font-family","'Dancing Script', cursive"],["src","/assets/imgs/venz1.png","alt","","srcset","",1,"mb-3",2,"filter","invert(1)","width","125px"],[1,"ava-section","d-flex","justify-content-center","pb-5","align-items-center"],[1,"px-2","mr-3","d-flex","align-items-center","flex-wrap"],[1,"chu-re-label","text-right","mr-2"],[1,"font-weight-bold","text-uppercase"],[2,"font-family","'Great Vibes', cursive","font-size","34px","color","#c67a2c"],["width","140","height","auto","src","https://lh3.googleusercontent.com/cIEoWb-DHgD-Hio2THTjDHnagD1SLeJVN3tydmxUfuYoYQajqLRTWdusMDBOKNXrA9LfJ1VXqWJxL1wZnwmrLJO68AYJIIsQ4G7qvDx0m9eNr-odlYbveFygqSdITB2M4T2vDvTOLg=w2400","alt","chu-re",1,"mb-2","bg-gray","rounded-circle","ava",2,"border","1px dashed #aaaaaa","padding","6px"],[2,"font-family","'Great Vibes', cursive","font-size","50px"],[1,"px-2","ml-3","d-flex","align-items-center","flex-wrap"],["width","140","height","auto","src","https://lh3.googleusercontent.com/ToNOwSbQG2dd0B5A4OK8Mo-RoaUrmm4Gj6uiuaaZbzCKdcMWM0R_AS3Ls4mr4bnak2rcBz2n3A3EyBgnAne2hVTdjsaiZlztzEzAYGogmh6oMnOqz6o0DQ8Z84z1wFT_d2fnJ04PtA=w2400","alt","co-dau",1,"mb-2","bg-gray","rounded-circle","ava",2,"border","1px dashed #aaaaaa","padding","6px"],[1,"co-dau-label","text-left","ml-2"],[1,"parallax-1"],[1,"container","text-center","py-5","position-relative",2,"min-height","360px"],[1,"text-uppercase","font-weight-bold"],["src","/assets/imgs/venz1.png","width","125","alt","","srcset","",1,"mb-3"],[1,"text-hightlight"],["src","/assets/imgs/venz4.png","width","125","alt","","srcset","",1,"mb-5"],[1,"location-section","py-5"],[1,"text-center","position-relative"],[1,"font-weight-bold"],[1,"row","no-gutters"],[1,"col-sm-7"],["src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d928.5061105763773!2d105.8666908291914!3d21.42828424751327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x133d0c9cc9e4a8a0!2zMjHCsDI1JzQxLjgiTiAxMDXCsDUyJzAyLjEiRQ!5e0!3m2!1svi!2s!4v1636726936518!5m2!1svi!2s","width","350","height","350","allowfullscreen","","loading","lazy",2,"border","0","border-radius","50% 50% 14px 50%","border","1px dashed gray","padding","16px"],[1,"col-sm-5"],[2,"background-color","#fafafa"],[1,"col-sm-5","d-flex","align-items-center","justify-content-center"],[1,"text-center",2,"font-family","'Great Vibes', cursive","font-size","50px"],[1,"col-sm-7","thank-you"]],template:function(n,o){1&n&&(t.TgZ(0,"header"),t.TgZ(1,"div",0),t.TgZ(2,"div",1),t._UZ(3,"img",2),t.TgZ(4,"nav",3),t.TgZ(5,"a",4),t._uU(6,"HOME"),t.qZA(),t.TgZ(7,"a",4),t._uU(8,"EVENT"),t.qZA(),t.TgZ(9,"a",4),t._uU(10,"STORY"),t.qZA(),t.TgZ(11,"a",4),t._uU(12,"GALERRY"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"section",5),t._UZ(14,"div",6),t.TgZ(15,"div",7),t.TgZ(16,"div",8),t.TgZ(17,"div",9),t.TgZ(18,"div",10),t._UZ(19,"span",11),t._uU(20,"01 DEC 2021"),t._UZ(21,"span",12),t.qZA(),t.TgZ(22,"h2",13),t._uU(23,"Xu\xe2n T\xf9ng "),t.TgZ(24,"span"),t._uU(25,"&"),t.qZA(),t._uU(26," \u0110inh H\u01b0\u1eddng"),t.qZA(),t.TgZ(27,"h1",14),t._uU(28,"Save the date"),t.qZA(),t._UZ(29,"app-count-down",15),t.qZA(),t._UZ(30,"div",16),t.qZA(),t.qZA(),t.qZA(),t.TgZ(31,"section",17),t.TgZ(32,"div",18),t.TgZ(33,"h2",19),t._uU(34,"H\xe0nh tr\xecnh m\u1edbi b\u1eaft \u0111\u1ea7u .."),t.qZA(),t._UZ(35,"img",20),t.TgZ(36,"p"),t._uU(37," V\u1eady l\xe0 \u0111\xe3 7 n\u0103m tr\xf4i qua k\u1ec3 t\u1eeb khi ch\xfang t\xf4i quen bi\u1ebft nhau, m\u1ed9t ch\u1eb7ng \u0111\u01b0\u1eddng m\u1edbi s\u1ebd b\u1eaft \u0111\u1ea7u v\xe0 ch\xfang t\xf4i \u0111\u1ec1u \u0111\xe3 s\u1eb5n s\xe0ng ... "),t._UZ(38,"br"),t._uU(39," Ch\xfang t\xf4i mu\u1ed1n chia s\u1ebb ni\u1ec1m vui n\xe0y t\u1edbi t\u1ea5t c\u1ea3 ng\u01b0\u1eddi th\xe2n, b\u1ea1n b\xe8 m\xe0 ch\xfang t\xf4i qu\xfd m\u1ebfn. Ng\xe0y ch\xfang t\xf4i ch\xednh th\u1ee9c v\u1ec1 chung m\u1ed9t m\xe1i nh\xe0."),t.qZA(),t.TgZ(40,"div",21),t.TgZ(41,"div",22),t.TgZ(42,"div",23),t.TgZ(43,"small",24),t._uU(44,"Ch\xfa r\u1ec3"),t.qZA(),t.TgZ(45,"h5",25),t._uU(46,"Xu\xe2n T\xf9ng"),t.qZA(),t.qZA(),t._UZ(47,"img",26),t.qZA(),t.TgZ(48,"span",27),t._uU(49,"&"),t.qZA(),t.TgZ(50,"div",28),t._UZ(51,"img",29),t.TgZ(52,"div",30),t.TgZ(53,"small",24),t._uU(54,"C\xf4 D\xe2u"),t.qZA(),t.TgZ(55,"h5",25),t._uU(56,"\u0110inh H\u01b0\u1eddng"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(57,"div",31),t._UZ(58,"div",6),t.TgZ(59,"div",32),t.TgZ(60,"h3",33),t._uU(61,"Xin tr\xe2n tr\u1ecdng "),t._UZ(62,"br"),t.qZA(),t.TgZ(63,"h4"),t._uU(64,"K\xednh m\u1eddi m\u1ecdi ng\u01b0\u1eddi \u0111\u1ebfn d\u1ef1 b\u1eefa ti\u1ec7c chung vui c\xf9ng gia \u0111\xecnh t\u1ea1i nh\xe0 ri\xeang"),t.qZA(),t._UZ(65,"img",34),t.TgZ(66,"h6"),t._uU(67,"V\xe0o ng\xe0y"),t.qZA(),t.TgZ(68,"h1",35),t._uU(69,"28 . Th\xe1ng 12 . 2022"),t.qZA(),t.TgZ(70,"h6"),t.TgZ(71,"i"),t._uU(72,"(21 th\xe1ng 12 - \xc2m l\u1ecbch)"),t.qZA(),t.qZA(),t._UZ(73,"img",36),t.TgZ(74,"h1",15),t._uU(75,"B\u1eefa ti\u1ec7c s\u1ebd di\u1ec5n ra sau ..."),t.qZA(),t._UZ(76,"app-count-down",15),t.qZA(),t.qZA(),t.TgZ(77,"section",37),t._UZ(78,"div",6),t.TgZ(79,"div",38),t.TgZ(80,"h1",39),t._uU(81,"\u0110\u1ecba \u0111i\u1ec3m t\u1ed5 ch\u1ee9c"),t.qZA(),t.TgZ(82,"div",40),t.TgZ(83,"div",41),t.TgZ(84,"h5",35),t._uU(85,"T\u1ea1i nh\xe0 trai"),t.qZA(),t.TgZ(86,"h5"),t._uU(87,"Ng\xf5 24, \u0111\u01b0\u1eddng Ph\u1ea1m V\u0103n \u0110\u1ed3ng, Tx.Ph\u1ed5 Y\xean, T\u1ec9nh Th\xe1i Nguy\xean"),t.qZA(),t._UZ(88,"iframe",42),t.qZA(),t._UZ(89,"div",43),t.qZA(),t.qZA(),t.qZA(),t.TgZ(90,"section",17),t._UZ(91,"app-our-story"),t.qZA(),t.TgZ(92,"section",17),t._UZ(93,"app-gallery"),t.qZA(),t.TgZ(94,"section",44),t.TgZ(95,"div",40),t.TgZ(96,"div",45),t.TgZ(97,"h1",46),t._uU(98,"Thank you"),t.qZA(),t.qZA(),t._UZ(99,"div",47),t.qZA(),t.qZA())},directives:[y,U,P],styles:['@keyframes mymove{to{background-size:100% auto}}.parallax[_ngcontent-%COMP%]{position:relative;background-image:url(https://lh3.googleusercontent.com/Bv-NxRkZ3MKrYqVSeGXkqz_xNGMptogoORWzMqoSp6GKNnyO9EMmfanRIoitD7YjnSQCA1tJ53BAaleyFF5ElRNA4KsfBsoYo6ubK1qHwkmfqw7I2ZraEdNyJyCJNepw_K7mHqbG2g=w2400);min-height:calc(100vh - 324px);background-attachment:fixed;background-position:center top;background-repeat:no-repeat;background-size:cover}.parallax[_ngcontent-%COMP%]   .back-drop[_ngcontent-%COMP%]{position:absolute;opacity:.9;background:black;top:0;left:0;right:0;bottom:0;background:linear-gradient(58deg,#bc6307,rgba(255,255,255,0) 58%)}@media screen and (max-width: 600px){.parallax[_ngcontent-%COMP%]{min-height:calc(100vh - 324px);background-attachment:local;background-position:-295px 0px;background-repeat:no-repeat;background-size:943px auto}}.parallax-1[_ngcontent-%COMP%]{color:#fff;position:relative;background-image:url(https://lh3.googleusercontent.com/6RIqMVtYmL2bX2Zw-6IxoXQbjX1UBSxwoEWc5qJByutGc9bUPcXSc0f9z8dAt33Y3t_mt5CMn9iV_KT_judX9LW6j7FISasanQIMbOTpuQw6aIxdrt-qK41vhavFJwwANDlAUrg20Q=w2400);min-height:360px;background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover}@media screen and (max-width: 600px){.parallax-1[_ngcontent-%COMP%]{background-attachment:local;background-position:-70px center;background-repeat:no-repeat;background-size:cover}}.parallax-1[_ngcontent-%COMP%]   .back-drop[_ngcontent-%COMP%]{position:absolute;opacity:.9;background:rgba(0,0,0,.42);top:0;left:0;z-index:0;right:0;bottom:0}.save-the-date[_ngcontent-%COMP%]{display:grid;animation:tilt-in-fwd-tr 2s cubic-bezier(.25,.46,.45,.94) both;min-height:600px;align-items:center}@media screen and (max-width: 600px){.save-the-date[_ngcontent-%COMP%]{align-items:flex-end}}.save-the-date[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:"Dancing Script",cursive}.save-the-date[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{font-weight:bold}.save-the-date[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   span.swirl_left[_ngcontent-%COMP%]{display:inline-block;background:url(/assets/imgs/swirl_left.png) no-repeat left;background-size:contain;width:66px;height:20px}.save-the-date[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   span.swirl_right[_ngcontent-%COMP%]{display:inline-block;background:url(/assets/imgs/swirl_right.png) no-repeat right;background-size:contain;width:66px;height:20px}.save-the-date[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:50px;font-family:"Great Vibes",cursive}@media screen and (max-width: 600px){.save-the-date[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:30px}}.save-the-date[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:"Great Vibes",cursive;color:#dbff13}.text-hightlight[_ngcontent-%COMP%]{font-family:"Great Vibes",cursive}.location-section[_ngcontent-%COMP%]{background-image:url(/assets/galerry/PHUC9344.JPG);min-height:400px;background-repeat:no-repeat;background-position:center;background-size:cover;position:relative}.location-section[_ngcontent-%COMP%]   .back-drop[_ngcontent-%COMP%]{position:absolute;opacity:.9;background:white;top:0;left:0;right:0;bottom:0}.thank-you[_ngcontent-%COMP%]{background-image:url(/assets/galerry/thank.jpg);min-height:400px;background-size:cover;background-repeat:no-repeat}@media screen and (max-width: 600px){.chu-re-label[_ngcontent-%COMP%], .co-dau-label[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;width:100%;align-items:center}.chu-re-label[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .co-dau-label[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:25px}}']}),e})(),F=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e,bootstrap:[k]}),e.\u0275inj=t.cJS({providers:[],imports:[[l.b2,v]]}),e})();(0,t.G48)(),l.q6().bootstrapModule(F).catch(e=>console.error(e))}},u=>{u.O(0,[736],()=>u(u.s=158)),u.O()}]);