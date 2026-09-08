var zT=Object.defineProperty,$T=Object.defineProperties;var qT=Object.getOwnPropertyDescriptors;var Yl=Object.getOwnPropertySymbols;var Xb=Object.prototype.hasOwnProperty,Jb=Object.prototype.propertyIsEnumerable;var Zb=(t,n,e)=>n in t?zT(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,_=(t,n)=>{for(var e in n||={})Xb.call(n,e)&&Zb(t,e,n[e]);if(Yl)for(var e of Yl(n))Jb.call(n,e)&&Zb(t,e,n[e]);return t},Y=(t,n)=>$T(t,qT(n));var Im=(t,n)=>{var e={};for(var i in t)Xb.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&Yl)for(var i of Yl(t))n.indexOf(i)<0&&Jb.call(t,i)&&(e[i]=t[i]);return e};var ke=(t,n,e)=>new Promise((i,r)=>{var o=c=>{try{a(e.next(c))}catch(l){r(l)}},s=c=>{try{a(e.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(o,s);a((e=e.apply(t,n)).next())});var Yt=null,Ql=!1,io=1,GT=null,ft=Symbol("SIGNAL");function ie(t){let n=Yt;return Yt=t,n}function Zl(){return Yt}var mr={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function pr(t){if(Ql)throw new Error("");if(Yt===null)return;Yt.consumerOnSignalRead(t);let n=Yt.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=Yt.recomputing;if(i&&(e=n!==void 0?n.nextProducer:Yt.producers,e!==void 0&&e.producer===t)){Yt.producersTail=e,e.lastReadVersion=t.version,e.knownValidAtEpoch=io;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===Yt&&(!i||r.knownValidAtEpoch===io))return;let o=gs(Yt),s={producer:t,consumer:Yt,nextProducer:e,prevConsumer:void 0,knownValidAtEpoch:io,lastReadVersion:t.version,nextConsumer:void 0};Yt.producersTail=s,n!==void 0?n.nextProducer=s:Yt.producers=s,o&&iw(t,s)}function ew(){io++}function so(t){if(!(gs(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===io)){if(!t.producerMustRecompute(t)&&!ps(t)){ms(t);return}t.producerRecomputeValue(t),ms(t)}}function Mm(t){if(t.consumers===void 0)return;let n=Ql;Ql=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||WT(i)}}finally{Ql=n}}function Tm(){return Yt?.consumerAllowSignalWrites!==!1}function WT(t){t.dirty=!0,Mm(t),t.consumerMarkedDirty?.(t)}function ms(t){t.dirty=!1,t.lastCleanEpoch=io}function Hi(t){return t&&tw(t),ie(t)}function tw(t){if(t.producersTail?.knownValidAtEpoch===io){let n=t.producers;for(;n!==void 0;)n.knownValidAtEpoch=null,n=n.nextProducer}t.producersTail=void 0,t.recomputing=!0}function gr(t,n){ie(n),t&&nw(t)}function nw(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(gs(t))do e=km(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function ps(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(so(e),i!==e.version))return!0}return!1}function vr(t){if(gs(t)){let n=t.producers;for(;n!==void 0;)n=km(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function iw(t,n){let e=t.consumersTail,i=gs(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)iw(r.producer,r)}function km(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!gs(n)){let o=n.producers;for(;o!==void 0;)o=km(o)}return e}function gs(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Va(t){GT?.(t)}function Ba(t,n){return Object.is(t,n)}function Ha(t,n){let e=Object.create(KT);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(so(e),pr(e),e.value===si)throw e.error;return e.value};return i[ft]=e,Va(e),i}var ro=Symbol("UNSET"),oo=Symbol("COMPUTING"),si=Symbol("ERRORED"),KT=Y(_({},mr),{value:ro,dirty:!0,error:null,equal:Ba,kind:"computed",producerMustRecompute(t){return t.value===ro||t.value===oo},producerRecomputeValue(t){if(t.value===oo)throw new Error("");let n=t.value;t.value=oo;let e=Hi(t),i,r=!1;try{i=t.computation(),ie(null),r=n!==ro&&n!==si&&i!==si&&t.equal(n,i)}catch(o){i=si,t.error=o}finally{gr(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function YT(){throw new Error}var rw=YT;function ow(t){rw(t)}function Rm(t){rw=t}var QT=null;function Am(t,n){let e=Object.create(Ua);e.value=t,n!==void 0&&(e.equal=n);let i=()=>sw(e);return i[ft]=e,Va(e),[i,s=>ao(e,s),s=>Xl(e,s)]}function sw(t){return pr(t),t.value}function ao(t,n){Tm()||ow(t),t.equal(t.value,n)||(t.value=n,ZT(t))}function Xl(t,n){Tm()||ow(t),ao(t,n(t.value))}var Ua=Y(_({},mr),{equal:Ba,value:void 0,kind:"signal"});function ZT(t){t.version++,ew(),Mm(t),QT?.(t)}var Om=Y(_({},mr),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Fm(t){if(t.dirty=!1,t.version>0&&!ps(t))return;t.version++;let n=Hi(t);try{t.cleanup(),t.fn()}finally{gr(t,n)}}var Pm;function Jl(){return Pm}function ai(t){let n=Pm;return Pm=t,n}var aw=Symbol("NotFound");function vs(t){return t===aw||t?.name==="\u0275NotFound"}function Lm(t,n,e){let i=Object.create(XT);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(so(i),pr(i),i.value===si)throw i.error;return i.value};return o[ft]=i,Va(i),o}function jm(t,n){so(t),ao(t,n),ms(t)}function cw(t,n){if(so(t),t.value===si)throw t.error;Xl(t,n),ms(t)}var XT=Y(_({},mr),{value:ro,dirty:!0,error:null,equal:Ba,kind:"linkedSignal",producerMustRecompute(t){return t.value===ro||t.value===oo},producerRecomputeValue(t){if(t.value===oo)throw new Error("");let n=t.value;t.value=oo;let e=Hi(t),i,r=!1;try{let o=t.source(),s=n!==ro&&n!==si,a=s?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,a),t.sourceValue=o,ie(null),r=s&&i!==si&&t.equal(n,i)}catch(o){i=si,t.error=o}finally{gr(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function lw(t){let n=ie(null);try{return t()}finally{ie(n)}}function ve(t){return typeof t=="function"}function ys(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var ed=ys(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function co(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var ue=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(ve(i))try{i()}catch(o){n=o instanceof ed?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{dw(o)}catch(s){n=n??[],s instanceof ed?n=[...n,...s.errors]:n.push(s)}}if(n)throw new ed(n)}}add(n){var e;if(n&&n!==this)if(this.closed)dw(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&co(e,n)}remove(n){let{_finalizers:e}=this;e&&co(e,n),n instanceof t&&n._removeParent(this)}};ue.EMPTY=(()=>{let t=new ue;return t.closed=!0,t})();var Vm=ue.EMPTY;function td(t){return t instanceof ue||t&&"closed"in t&&ve(t.remove)&&ve(t.add)&&ve(t.unsubscribe)}function dw(t){ve(t)?t():t.unsubscribe()}var Vn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var _s={setTimeout(t,n,...e){let{delegate:i}=_s;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=_s;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function nd(t){_s.setTimeout(()=>{let{onUnhandledError:n}=Vn;if(n)n(t);else throw t})}function lo(){}var uw=Bm("C",void 0,void 0);function fw(t){return Bm("E",void 0,t)}function hw(t){return Bm("N",t,void 0)}function Bm(t,n,e){return{kind:t,value:n,error:e}}var uo=null;function bs(t){if(Vn.useDeprecatedSynchronousErrorHandling){let n=!uo;if(n&&(uo={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=uo;if(uo=null,e)throw i}}else t()}function mw(t){Vn.useDeprecatedSynchronousErrorHandling&&uo&&(uo.errorThrown=!0,uo.error=t)}var fo=class extends ue{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,td(n)&&n.add(this)):this.destination=tk}static create(n,e,i){return new Ui(n,e,i)}next(n){this.isStopped?Um(hw(n),this):this._next(n)}error(n){this.isStopped?Um(fw(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Um(uw,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},JT=Function.prototype.bind;function Hm(t,n){return JT.call(t,n)}var zm=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){id(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){id(i)}else id(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){id(e)}}},Ui=class extends fo{constructor(n,e,i){super();let r;if(ve(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&Vn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&Hm(n.next,o),error:n.error&&Hm(n.error,o),complete:n.complete&&Hm(n.complete,o)}):r=n}this.destination=new zm(r)}};function id(t){Vn.useDeprecatedSynchronousErrorHandling?mw(t):nd(t)}function ek(t){throw t}function Um(t,n){let{onStoppedNotification:e}=Vn;e&&_s.setTimeout(()=>e(t,n))}var tk={closed:!0,next:lo,error:ek,complete:lo};var ws=typeof Symbol=="function"&&Symbol.observable||"@@observable";function hn(t){return t}function rd(...t){return $m(t)}function $m(t){return t.length===0?hn:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var X=class t{constructor(n){n&&(this._subscribe=n)}lift(n){let e=new t;return e.source=this,e.operator=n,e}subscribe(n,e,i){let r=ik(n)?n:new Ui(n,e,i);return bs(()=>{let{operator:o,source:s}=this;r.add(o?o.call(r,s):s?this._subscribe(r):this._trySubscribe(r))}),r}_trySubscribe(n){try{return this._subscribe(n)}catch(e){n.error(e)}}forEach(n,e){return e=pw(e),new e((i,r)=>{let o=new Ui({next:s=>{try{n(s)}catch(a){r(a),o.unsubscribe()}},error:r,complete:i});this.subscribe(o)})}_subscribe(n){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(n)}[ws](){return this}pipe(...n){return $m(n)(this)}toPromise(n){return n=pw(n),new n((e,i)=>{let r;this.subscribe(o=>r=o,o=>i(o),()=>e(r))})}};X.create=t=>new X(t);function pw(t){var n;return(n=t??Vn.Promise)!==null&&n!==void 0?n:Promise}function nk(t){return t&&ve(t.next)&&ve(t.error)&&ve(t.complete)}function ik(t){return t&&t instanceof fo||nk(t)&&td(t)}function qm(t){return ve(t?.lift)}function be(t){return n=>{if(qm(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function ye(t,n,e,i,r){return new Gm(t,n,e,i,r)}var Gm=class extends fo{constructor(n,e,i,r,o,s){super(n),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=e?function(a){try{e(a)}catch(c){n.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){n.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){n.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};function gw(){return be((t,n)=>{let e=null;t._refCount++;let i=ye(n,void 0,void 0,void 0,()=>{if(!t||t._refCount<=0||0<--t._refCount){e=null;return}let r=t._connection,o=e;e=null,r&&(!o||r===o)&&r.unsubscribe(),n.unsubscribe()});t.subscribe(i),i.closed||(e=t.connect())})}var za=class extends X{constructor(n,e){super(),this.source=n,this.subjectFactory=e,this._subject=null,this._refCount=0,this._connection=null,qm(n)&&(this.lift=n.lift)}_subscribe(n){return this.getSubject().subscribe(n)}getSubject(){let n=this._subject;return(!n||n.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:n}=this;this._subject=this._connection=null,n?.unsubscribe()}connect(){let n=this._connection;if(!n){n=this._connection=new ue;let e=this.getSubject();n.add(this.source.subscribe(ye(e,void 0,()=>{this._teardown(),e.complete()},i=>{this._teardown(),e.error(i)},()=>this._teardown()))),n.closed&&(this._connection=null,n=ue.EMPTY)}return n}refCount(){return gw()(this)}};var Ss={schedule(t){let n=requestAnimationFrame,e=cancelAnimationFrame,{delegate:i}=Ss;i&&(n=i.requestAnimationFrame,e=i.cancelAnimationFrame);let r=n(o=>{e=void 0,t(o)});return new ue(()=>e?.(r))},requestAnimationFrame(...t){let{delegate:n}=Ss;return(n?.requestAnimationFrame||requestAnimationFrame)(...t)},cancelAnimationFrame(...t){let{delegate:n}=Ss;return(n?.cancelAnimationFrame||cancelAnimationFrame)(...t)},delegate:void 0};var vw=ys(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var N=class extends X{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let e=new od(this,this);return e.operator=n,e}_throwIfClosed(){if(this.closed)throw new vw}next(n){bs(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let e of this.currentObservers)e.next(n)}})}error(n){bs(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:e}=this;for(;e.length;)e.shift().error(n)}})}complete(){bs(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:e,isStopped:i,observers:r}=this;return e||i?Vm:(this.currentObservers=null,r.push(n),new ue(()=>{this.currentObservers=null,co(r,n)}))}_checkFinalizedStatuses(n){let{hasError:e,thrownError:i,isStopped:r}=this;e?n.error(i):r&&n.complete()}asObservable(){let n=new X;return n.source=this,n}};N.create=(t,n)=>new od(t,n);var od=class extends N{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Vm}};var ht=class extends N{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var $a={now(){return($a.delegate||Date).now()},delegate:void 0};var qa=class extends N{constructor(n=1/0,e=1/0,i=$a){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:s}=this;e||(i.push(n),!r&&i.push(o.now()+s)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let s=0;s<o.length&&!n.closed;s+=i?1:2)n.next(o[s]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let s=e.now(),a=0;for(let c=1;c<i.length&&i[c]<=s;c+=2)a=c;a&&i.splice(0,a+1)}}};var sd=class extends ue{constructor(n,e){super()}schedule(n,e=0){return this}};var Ga={setInterval(t,n,...e){let{delegate:i}=Ga;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=Ga;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var yr=class extends sd{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return Ga.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&Ga.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,co(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var rk=1,Wm,Km={};function yw(t){return t in Km?(delete Km[t],!0):!1}var _w={setImmediate(t){let n=rk++;return Km[n]=!0,Wm||(Wm=Promise.resolve()),Wm.then(()=>yw(n)&&t()),n},clearImmediate(t){yw(t)}};var{setImmediate:ok,clearImmediate:sk}=_w,Wa={setImmediate(...t){let{delegate:n}=Wa;return(n?.setImmediate||ok)(...t)},clearImmediate(t){let{delegate:n}=Wa;return(n?.clearImmediate||sk)(t)},delegate:void 0};var ad=class extends yr{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}requestAsyncId(n,e,i=0){return i!==null&&i>0?super.requestAsyncId(n,e,i):(n.actions.push(this),n._scheduled||(n._scheduled=Wa.setImmediate(n.flush.bind(n,void 0))))}recycleAsyncId(n,e,i=0){var r;if(i!=null?i>0:this.delay>0)return super.recycleAsyncId(n,e,i);let{actions:o}=n;e!=null&&((r=o[o.length-1])===null||r===void 0?void 0:r.id)!==e&&(Wa.clearImmediate(e),n._scheduled===e&&(n._scheduled=void 0))}};var Ym=(()=>{class t{constructor(e,i=t.now){this.schedulerActionCtor=e,this.now=i}schedule(e,i=0,r){return new this.schedulerActionCtor(this,e).schedule(r,i)}}return t.now=$a.now,t})();var _r=class extends Ym{constructor(n,e=Ym.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var cd=class extends _r{flush(n){this._active=!0;let e=this._scheduled;this._scheduled=void 0;let{actions:i}=this,r;n=n||i.shift();do if(r=n.execute(n.state,n.delay))break;while((n=i[0])&&n.id===e&&i.shift());if(this._active=!1,r){for(;(n=i[0])&&n.id===e&&i.shift();)n.unsubscribe();throw r}}};var ld=new cd(ad);var Ka=new _r(yr),bw=Ka;var dd=class extends yr{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}requestAsyncId(n,e,i=0){return i!==null&&i>0?super.requestAsyncId(n,e,i):(n.actions.push(this),n._scheduled||(n._scheduled=Ss.requestAnimationFrame(()=>n.flush(void 0))))}recycleAsyncId(n,e,i=0){var r;if(i!=null?i>0:this.delay>0)return super.recycleAsyncId(n,e,i);let{actions:o}=n;e!=null&&e===n._scheduled&&((r=o[o.length-1])===null||r===void 0?void 0:r.id)!==e&&(Ss.cancelAnimationFrame(e),n._scheduled=void 0)}};var ud=class extends _r{flush(n){this._active=!0;let e;n?e=n.id:(e=this._scheduled,this._scheduled=void 0);let{actions:i}=this,r;n=n||i.shift();do if(r=n.execute(n.state,n.delay))break;while((n=i[0])&&n.id===e&&i.shift());if(this._active=!1,r){for(;(n=i[0])&&n.id===e&&i.shift();)n.unsubscribe();throw r}}};var fd=new ud(dd);var ot=new X(t=>t.complete());function hd(t){return t&&ve(t.schedule)}function Qm(t){return t[t.length-1]}function md(t){return ve(Qm(t))?t.pop():void 0}function ci(t){return hd(Qm(t))?t.pop():void 0}function ww(t,n){return typeof Qm(t)=="number"?t.pop():n}function Cw(t,n,e,i){function r(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function a(d){try{l(i.next(d))}catch(f){s(f)}}function c(d){try{l(i.throw(d))}catch(f){s(f)}}function l(d){d.done?o(d.value):r(d.value).then(a,c)}l((i=i.apply(t,n||[])).next())})}function Sw(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function ho(t){return this instanceof ho?(this.v=t,this):new ho(t)}function Dw(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(m){return function(p){return Promise.resolve(p).then(m,f)}}function a(m,p){i[m]&&(r[m]=function(w){return new Promise(function(E,I){o.push([m,w,E,I])>1||c(m,w)})},p&&(r[m]=p(r[m])))}function c(m,p){try{l(i[m](p))}catch(w){h(o[0][3],w)}}function l(m){m.value instanceof ho?Promise.resolve(m.value.v).then(d,f):h(o[0][2],m)}function d(m){c("next",m)}function f(m){c("throw",m)}function h(m,p){m(p),o.shift(),o.length&&c(o[0][0],o[0][1])}}function xw(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof Sw=="function"?Sw(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(s){return new Promise(function(a,c){s=t[o](s),r(a,c,s.done,s.value)})}}function r(o,s,a,c){Promise.resolve(c).then(function(l){o({value:l,done:a})},s)}}var pd=(t=>t&&typeof t.length=="number"&&typeof t!="function");function gd(t){return ve(t?.then)}function vd(t){return ve(t[ws])}function yd(t){return Symbol.asyncIterator&&ve(t?.[Symbol.asyncIterator])}function _d(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function ak(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var bd=ak();function wd(t){return ve(t?.[bd])}function Sd(t){return Dw(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield ho(e.read());if(r)return yield ho(void 0);yield yield ho(i)}}finally{e.releaseLock()}})}function Cd(t){return ve(t?.getReader)}function Ge(t){if(t instanceof X)return t;if(t!=null){if(vd(t))return ck(t);if(pd(t))return lk(t);if(gd(t))return dk(t);if(yd(t))return Ew(t);if(wd(t))return uk(t);if(Cd(t))return fk(t)}throw _d(t)}function ck(t){return new X(n=>{let e=t[ws]();if(ve(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function lk(t){return new X(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function dk(t){return new X(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,nd)})}function uk(t){return new X(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function Ew(t){return new X(n=>{hk(t,n).catch(e=>n.error(e))})}function fk(t){return Ew(Sd(t))}function hk(t,n){var e,i,r,o;return Cw(this,void 0,void 0,function*(){try{for(e=xw(t);i=yield e.next(),!i.done;){let s=i.value;if(n.next(s),n.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function nn(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function Dd(t,n=0){return be((e,i)=>{e.subscribe(ye(i,r=>nn(i,t,()=>i.next(r),n),()=>nn(i,t,()=>i.complete(),n),r=>nn(i,t,()=>i.error(r),n)))})}function xd(t,n=0){return be((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function Nw(t,n){return Ge(t).pipe(xd(n),Dd(n))}function Iw(t,n){return Ge(t).pipe(xd(n),Dd(n))}function Mw(t,n){return new X(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function Tw(t,n){return new X(e=>{let i;return nn(e,n,()=>{i=t[bd](),nn(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){e.error(s);return}o?e.complete():e.next(r)},0,!0)}),()=>ve(i?.return)&&i.return()})}function Ed(t,n){if(!t)throw new Error("Iterable cannot be null");return new X(e=>{nn(e,n,()=>{let i=t[Symbol.asyncIterator]();nn(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function kw(t,n){return Ed(Sd(t),n)}function Rw(t,n){if(t!=null){if(vd(t))return Nw(t,n);if(pd(t))return Mw(t,n);if(gd(t))return Iw(t,n);if(yd(t))return Ed(t,n);if(wd(t))return Tw(t,n);if(Cd(t))return kw(t,n)}throw _d(t)}function We(t,n){return n?Rw(t,n):Ge(t)}function $(...t){let n=ci(t);return We(t,n)}function Ya(t,n){let e=ve(t)?t:()=>t,i=r=>r.error(e());return new X(n?r=>n.schedule(i,0,r):i)}function mo(t){return!!t&&(t instanceof X||ve(t.lift)&&ve(t.subscribe))}var po=ys(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function Aw(t){return t instanceof Date&&!isNaN(t)}function le(t,n){return be((e,i)=>{let r=0;e.subscribe(ye(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:mk}=Array;function pk(t,n){return mk(n)?t(...n):t(n)}function Nd(t){return le(n=>pk(t,n))}var{isArray:gk}=Array,{getPrototypeOf:vk,prototype:yk,keys:_k}=Object;function Id(t){if(t.length===1){let n=t[0];if(gk(n))return{args:n,keys:null};if(bk(n)){let e=_k(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function bk(t){return t&&typeof t=="object"&&vk(t)===yk}function Md(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function br(...t){let n=ci(t),e=md(t),{args:i,keys:r}=Id(t);if(i.length===0)return We([],n);let o=new X(wk(i,n,r?s=>Md(r,s):hn));return e?o.pipe(Nd(e)):o}function wk(t,n,e=hn){return i=>{Ow(n,()=>{let{length:r}=t,o=new Array(r),s=r,a=r;for(let c=0;c<r;c++)Ow(n,()=>{let l=We(t[c],n),d=!1;l.subscribe(ye(i,f=>{o[c]=f,d||(d=!0,a--),a||i.next(e(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function Ow(t,n,e){t?nn(e,t,n):n()}function Fw(t,n,e,i,r,o,s,a){let c=[],l=0,d=0,f=!1,h=()=>{f&&!c.length&&!l&&n.complete()},m=w=>l<i?p(w):c.push(w),p=w=>{o&&n.next(w),l++;let E=!1;Ge(e(w,d++)).subscribe(ye(n,I=>{r?.(I),o?m(I):n.next(I)},()=>{E=!0},void 0,()=>{if(E)try{for(l--;c.length&&l<i;){let I=c.shift();s?nn(n,s,()=>p(I)):p(I)}h()}catch(I){n.error(I)}}))};return t.subscribe(ye(n,m,()=>{f=!0,h()})),()=>{a?.()}}function Ot(t,n,e=1/0){return ve(n)?Ot((i,r)=>le((o,s)=>n(i,o,r,s))(Ge(t(i,r))),e):(typeof n=="number"&&(e=n),be((i,r)=>Fw(i,r,t,e)))}function wr(t=1/0){return Ot(hn,t)}function Pw(){return wr(1)}function Cs(...t){return Pw()(We(t,ci(t)))}function Qa(t){return new X(n=>{Ge(t()).subscribe(n)})}function Za(...t){let n=md(t),{args:e,keys:i}=Id(t),r=new X(o=>{let{length:s}=e;if(!s){o.complete();return}let a=new Array(s),c=s,l=s;for(let d=0;d<s;d++){let f=!1;Ge(e[d]).subscribe(ye(o,h=>{f||(f=!0,l--),a[d]=h},()=>c--,void 0,()=>{(!c||!f)&&(l||o.next(i?Md(i,a):a),o.complete())}))}});return n?r.pipe(Nd(n)):r}function Lw(t=0,n,e=bw){let i=-1;return n!=null&&(hd(n)?e=n:i=n),new X(r=>{let o=Aw(t)?+t-e.now():t;o<0&&(o=0);let s=0;return e.schedule(function(){r.closed||(r.next(s++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function rn(...t){let n=ci(t),e=ww(t,1/0),i=t;return i.length?i.length===1?Ge(i[0]):wr(e)(We(i,n)):ot}var zi=new X(lo);function Ne(t,n){return be((e,i)=>{let r=0;e.subscribe(ye(i,o=>t.call(n,o,r++)&&i.next(o)))})}function jw(t){return be((n,e)=>{let i=!1,r=null,o=null,s=!1,a=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let l=r;r=null,e.next(l)}s&&e.complete()},c=()=>{o=null,s&&e.complete()};n.subscribe(ye(e,l=>{i=!0,r=l,o||Ge(t(l)).subscribe(o=ye(e,a,c))},()=>{s=!0,(!i||!o||o.closed)&&e.complete()}))})}function Ds(t,n=Ka){return jw(()=>Lw(t,n))}function Sr(t){return be((n,e)=>{let i=null,r=!1,o;i=n.subscribe(ye(e,void 0,void 0,s=>{o=Ge(t(s,Sr(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function Cr(t,n){return ve(n)?Ot(t,n,1):Ot(t,1)}function Xa(t,n=Ka){return be((e,i)=>{let r=null,o=null,s=null,a=()=>{if(r){r.unsubscribe(),r=null;let l=o;o=null,i.next(l)}};function c(){let l=s+t,d=n.now();if(d<l){r=this.schedule(void 0,l-d),i.add(r);return}a()}e.subscribe(ye(i,l=>{o=l,s=n.now(),r||(r=n.schedule(c,t),i.add(r))},()=>{a(),i.complete()},void 0,()=>{o=r=null}))})}function Vw(t){return be((n,e)=>{let i=!1;n.subscribe(ye(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function mt(t){return t<=0?()=>ot:be((n,e)=>{let i=0;n.subscribe(ye(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function Td(t,n=hn){return t=t??Sk,be((e,i)=>{let r,o=!0;e.subscribe(ye(i,s=>{let a=n(s);(o||!t(r,a))&&(o=!1,r=a,i.next(s))}))})}function Sk(t,n){return t===n}function Bw(t=Ck){return be((n,e)=>{let i=!1;n.subscribe(ye(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function Ck(){return new po}function Dr(t){return be((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function $i(t,n){let e=arguments.length>=2;return i=>i.pipe(t?Ne((r,o)=>t(r,o,i)):hn,mt(1),e?Vw(n):Bw(()=>new po))}function kd(t){return t<=0?()=>ot:be((n,e)=>{let i=[];n.subscribe(ye(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function Rd(){return be((t,n)=>{let e,i=!1;t.subscribe(ye(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function Ja(t={}){let{connector:n=()=>new N,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let s,a,c,l=0,d=!1,f=!1,h=()=>{a?.unsubscribe(),a=void 0},m=()=>{h(),s=c=void 0,d=f=!1},p=()=>{let w=s;m(),w?.unsubscribe()};return be((w,E)=>{l++,!f&&!d&&h();let I=c=c??n();E.add(()=>{l--,l===0&&!f&&!d&&(a=Zm(p,r))}),I.subscribe(E),!s&&l>0&&(s=new Ui({next:k=>I.next(k),error:k=>{f=!0,h(),a=Zm(m,e,k),I.error(k)},complete:()=>{d=!0,h(),a=Zm(m,i),I.complete()}}),Ge(w).subscribe(s))})(o)}}function Zm(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new Ui({next:()=>{i.unsubscribe(),t()}});return Ge(n(...e)).subscribe(i)}function Ad(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,Ja({connector:()=>new qa(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function Xm(t){return Ne((n,e)=>t<=e)}function kt(...t){let n=ci(t);return be((e,i)=>{(n?Cs(t,e,n):Cs(t,e)).subscribe(i)})}function Qe(t,n){return be((e,i)=>{let r=null,o=0,s=!1,a=()=>s&&!r&&i.complete();e.subscribe(ye(i,c=>{r?.unsubscribe();let l=0,d=o++;Ge(t(c,d)).subscribe(r=ye(i,f=>i.next(n?n(c,f,d,l++):f),()=>{r=null,a()}))},()=>{s=!0,a()}))})}function Pe(t){return be((n,e)=>{Ge(t).subscribe(ye(e,()=>e.complete(),lo)),!e.closed&&n.subscribe(e)})}function Rt(t,n,e){let i=ve(t)||n||e?{next:t,error:n,complete:e}:t;return i?be((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let a=!0;r.subscribe(ye(o,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),o.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),o.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),o.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):hn}var Bd="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",S=class extends Error{code;constructor(n,e){super(on(n,e)),this.code=n}};function Dk(t){return`NG0${Math.abs(t)}`}function on(t,n){return`${Dk(t)}${n?": "+n:""}`}function Be(t){for(let n in t)if(t[n]===Be)return n;throw Error("")}function Gw(t,n){for(let e in n)Object.hasOwn(n,e)&&!Object.hasOwn(t,e)&&(t[e]=n[e])}function sc(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(sc).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function Hd(t,n){return t?n?`${t} ${n}`:t:n||""}var xk=Be({__forward_ref__:Be});function xt(t){return t.__forward_ref__=xt,t}function Ft(t){return fp(t)?t():t}function fp(t){return typeof t=="function"&&Object.hasOwn(t,xk)&&t.__forward_ref__===xt}function V(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function A(t){return{providers:t.providers||[],imports:t.imports||[]}}function ac(t){return Ek(t,Ud)}function hp(t){return ac(t)!==null}function Ek(t,n){return Object.hasOwn(t,n)&&t[n]||null}function Nk(t){let n=t?.[Ud]??null;return n||null}function ep(t){return t&&Object.hasOwn(t,Fd)?t[Fd]:null}var Ud=Be({\u0275prov:Be}),Fd=Be({\u0275inj:Be}),y=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=V({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function mp(t){return t&&!!t.\u0275providers}var cc=Be({\u0275cmp:Be}),lc=Be({\u0275dir:Be}),pp=Be({\u0275pipe:Be}),gp=Be({\u0275mod:Be}),nc=Be({\u0275fac:Be}),wo=Be({__NG_ELEMENT_ID__:Be}),Hw=Be({__NG_ENV_ID__:Be});function Ww(t){return zd(t,"@NgModule"),t[gp]||null}function Ki(t){return zd(t,"@Component"),t[cc]||null}function vp(t){return zd(t,"@Directive"),t[lc]||null}function Kw(t){return zd(t,"@Pipe"),t[pp]||null}function zd(t,n){if(t==null)throw new S(-919,!1)}function Is(t){return typeof t=="string"?t:t==null?"":String(t)}var Yw=Be({ngErrorCode:Be}),Ik=Be({ngErrorMessage:Be}),Mk=Be({ngTokenPath:Be});function yp(t,n){return Qw("",-200,n)}function $d(t,n){throw new S(-201,!1)}function Qw(t,n,e){let i=new S(n,t);return i[Yw]=n,i[Ik]=t,e&&(i[Mk]=e),i}function Tk(t){return t[Yw]}var tp;function Zw(){return tp}function mn(t){let n=tp;return tp=t,n}function _p(t,n,e){let i=ac(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;$d(t,"")}var Ut=globalThis;var kk={},go=kk,Rk="__NG_DI_FLAG__",np=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=vo(e)||0;try{return this.injector.get(n,i&8?null:go,i)}catch(r){if(vs(r))return r;throw r}}};function Ak(t,n=0){let e=Jl();if(e===void 0)throw new S(-203,!1);if(e===null)return _p(t,void 0,n);{let i=Ok(n),r=e.retrieve(t,i);if(vs(r)){if(i.optional)return null;throw r}return r}}function M(t,n=0){return(Zw()||Ak)(Ft(t),n)}function u(t,n){return M(t,vo(n))}function vo(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function Ok(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function ip(t){let n=[];for(let e=0;e<t.length;e++){let i=Ft(t[e]);if(Array.isArray(i)){if(i.length===0)throw new S(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],c=Fk(a);typeof c=="number"?c===-1?r=a.token:o|=c:r=a}n.push(M(r,o))}else n.push(M(i))}return n}function Fk(t){return t[Rk]}function yo(t,n){let e=Object.hasOwn(t,nc);return e?t[nc]:null}function Xw(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function Jw(t){return t.flat(Number.POSITIVE_INFINITY)}function qd(t,n){t.forEach(e=>Array.isArray(e)?qd(e,n):n(e))}function bp(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function dc(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function eS(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function tS(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function Gd(t,n,e){let i=Ms(t,n);return i>=0?t[i|1]=e:(i=~i,tS(t,i,n,e)),i}function Wd(t,n){let e=Ms(t,n);if(e>=0)return t[e|1]}function Ms(t,n){return Pk(t,n,1)}function Pk(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),s=t[o<<e];if(n===s)return o<<e;s>n?r=o:i=o+1}return~(r<<e)}var Er={},Ht=[],Ts=new y(""),uc=new y("",-1),wp=new y(""),Es=class{get(n,e=go){if(e===go){let r=Qw("",-201);throw r.name="\u0275NotFound",r}return e}};function Bn(t){return{\u0275providers:t}}function nS(...t){return{\u0275providers:Sp(!0,t),\u0275fromNgModule:!0}}function Sp(t,...n){let e=[],i=new Set,r,o=s=>{e.push(s)};return qd(n,s=>{let a=s;Pd(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&iS(r,o),e}function iS(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];Cp(r,o=>{n(o,i)})}}function Pd(t,n,e,i){if(t=Ft(t),!t)return!1;let r=null,o=ep(t),s=!o&&Ki(t);if(!o&&!s){let c=t.ngModule;if(o=ep(c),o)r=c;else return!1}else{if(s&&!s.standalone)return!1;r=t}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let c=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of c)Pd(l,n,e,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let l;qd(o.imports,d=>{Pd(d,n,e,i)&&(l||=[],l.push(d))}),l!==void 0&&iS(l,n)}if(!a){let l=yo(r)||(()=>new r);n({provide:r,useFactory:l,deps:Ht},r),n({provide:wp,useValue:r,multi:!0},r),n({provide:Ts,useValue:()=>M(r),multi:!0},r)}let c=o.providers;if(c!=null&&!a){let l=t;Cp(c,d=>{n(d,l)})}}else return!1;return r!==t&&t.providers!==void 0}function Cp(t,n){for(let e of t)mp(e)&&(e=e.\u0275providers),Array.isArray(e)?Cp(e,n):n(e)}var Lk=Be({provide:String,useValue:Be});function rS(t){return t!==null&&typeof t=="object"&&Lk in t}function jk(t){return!!(t&&t.useExisting)}function Vk(t){return!!(t&&t.useFactory)}function _o(t){return typeof t=="function"}function oS(t){return!!t.useClass}var fc=new y(""),Od={},Uw={},Jm;function ks(){return Jm===void 0&&(Jm=new Es),Jm}var He=class{},bo=class extends He{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,op(n,s=>this.processProvider(s)),this.records.set(uc,xs(void 0,this)),r.has("environment")&&this.records.set(He,xs(void 0,this));let o=this.records.get(fc);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(wp,Ht,{self:!0}))}retrieve(n,e){let i=vo(e)||0;try{return this.get(n,go,i)}catch(r){if(vs(r))return r;throw r}}destroy(){ec(this),this._destroyed=!0;let n=ie(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),ie(n)}}onDestroy(n){return ec(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){ec(this);let e=ai(this),i=mn(void 0),r;try{return n()}finally{ai(e),mn(i)}}get(n,e=go,i){if(ec(this),Object.hasOwn(n,Hw))return n[Hw](this);let r=vo(i),o,s=ai(this),a=mn(void 0);try{if(!(r&4)){let l=this.records.get(n);if(l===void 0){let d=$k(n)&&ac(n);d&&this.injectableDefInScope(d)?l=xs(rp(n),Od):l=null,this.records.set(n,l)}if(l!=null)return this.hydrate(n,l,r)}let c=r&2?ks():this.parent;return e=r&8&&e===go?null:e,c.get(n,e)}catch(c){let l=Tk(c);throw l===-200||l===-201?new S(l,null):c}finally{mn(a),ai(s)}}resolveInjectorInitializers(){let n=ie(null),e=ai(this),i=mn(void 0),r;try{let o=this.get(Ts,Ht,{self:!0});for(let s of o)s()}finally{ai(e),mn(i),ie(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=Ft(n);let e=_o(n)?n:Ft(n&&n.provide),i=Hk(n);if(!_o(n)&&n.multi===!0){let r=this.records.get(e);r||(r=xs(void 0,Od,!0),r.factory=()=>ip(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=ie(null);try{if(e.value===Uw)throw yp("");return e.value===Od&&(e.value=Uw,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&zk(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{ie(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=Ft(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function rp(t){let n=ac(t),e=n!==null?n.factory:yo(t);if(e!==null)return e;if(t instanceof y)throw new S(-204,!1);if(t instanceof Function)return Bk(t);throw new S(-204,!1)}function Bk(t){if(t.length>0)throw new S(-204,!1);let e=Nk(t);return e!==null?()=>e.factory(t):()=>new t}function Hk(t){if(rS(t))return xs(void 0,t.useValue);{let n=Dp(t);return xs(n,Od)}}function Dp(t,n,e){let i;if(_o(t)){let r=Ft(t);return yo(r)||rp(r)}else if(rS(t))i=()=>Ft(t.useValue);else if(Vk(t))i=()=>t.useFactory(...ip(t.deps||[]));else if(jk(t))i=(r,o)=>M(Ft(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Ft(t&&(t.useClass||t.provide));if(Uk(t))i=()=>new r(...ip(t.deps));else return yo(r)||rp(r)}return i}function ec(t){if(t.destroyed)throw new S(-205,!1)}function xs(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function Uk(t){return!!t.deps}function zk(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function $k(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function op(t,n){for(let e of t)Array.isArray(e)?op(e,n):e&&mp(e)?op(e.\u0275providers,n):n(e)}function wt(t,n){let e;t instanceof bo?(ec(t),e=t):e=new np(t);let i,r=ai(e),o=mn(void 0);try{return n()}finally{ai(r),mn(o)}}function xp(){return Zw()!==void 0||Jl()!=null}var Hn=0,J=1,se=2,Dt=3,Nn=4,zt=5,So=6,Rs=7,pt=8,di=9,Un=10,Ke=11,As=12,Ep=13,Nr=14,Zt=15,Ir=16,Co=17,ui=18,fi=19,Np=20,qi=21,Kd=22,Gi=23,pn=24,Do=25,hi=26,at=27,sS=1,Ip=6,xo=7,hc=8,Eo=9,st=10;function Yi(t){return Array.isArray(t)&&typeof t[sS]=="object"}function In(t){return Array.isArray(t)&&t[sS]===!0}function Mp(t){return(t.flags&4)!==0}function Qi(t){return t.componentOffset>-1}function Os(t){return(t.flags&1)===1}function mi(t){return!!t.template}function Fs(t){return(t[se]&512)!==0}function No(t){return(t[se]&256)===256}var Ae=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t[t.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",t})(Ae||{}),tc,Ns="svg",Yd="math",aS="",zw="*",sp=()=>Object.create(null);function qk(){return tc||(tc=sp(),xr(Ae.HTML,void 0,[["iframe",["srcdoc"]],["*",["innerHTML","outerHTML"]]]),xr(Ae.STYLE,void 0,[["*",["style"]]]),xr(Ae.URL,void 0,[["*",["formAction"]],["area",["href"]],["a",["href","xlink:href"]],["form",["action"]],["img",["src"]],["video",["src"]]]),xr(Ae.URL,Yd,[["*",["href","xlink:href"]]]),xr(Ae.RESOURCE_URL,void 0,[["base",["href"]],["embed",["src"]],["frame",["src"]],["iframe",["src"]],["link",["href"]],["object",["codebase","data"]]]),xr(Ae.URL,Ns,[["a",["href","xlink:href"]]]),xr(Ae.ATTRIBUTE_NO_BINDING,Ns,[["animate",["attributeName","values","to","from"]],["set",["to","attributeName"]],["animateMotion",["attributeName"]],["animateTransform",["attributeName"]]]),xr(Ae.ATTRIBUTE_NO_BINDING,void 0,[["unknown",["attributeName","values","to","from","sandbox","allow","allowFullscreen","referrerPolicy","csp","fetchPriority","credentialless"]],["iframe",["sandbox","allow","allowFullscreen","referrerPolicy","csp","fetchPriority","credentialless"]]]),tc)}function xr(t,n,e){let i=n??aS;for(let[r,o]of e){let s=r.toLowerCase();for(let a of o){let c=a.toLowerCase(),l=tc[c]??=sp(),d=l[i]??=sp();d[s]=t}}}function cS(t,n,e){let r=qk()[n.toLowerCase()];if(!r)return Ae.NONE;let o=t.toLowerCase(),s;if(e){let a=r[e];a&&(s=a[o]??a[zw])}if(s===void 0){let a=r[aS];a&&(s=a[o]??a[zw])}return s??Ae.NONE}function Pt(t){for(;Array.isArray(t);)t=t[Hn];return t}function Tp(t,n){return Pt(n[t])}function gn(t,n){return Pt(n[t.index])}function Qd(t,n){return t.data[n]}function lS(t,n){return t[n]}function Mn(t,n){let e=n[t];return Yi(e)?e:e[Hn]}function dS(t){return(t[se]&4)===4}function Zd(t){return(t[se]&128)===128}function uS(t){return In(t[Dt])}function vn(t,n){return n==null?null:t[n]}function kp(t){t[Co]=0}function Rp(t){t[se]&1024||(t[se]|=1024,Zd(t)&&Io(t))}function fS(t,n){for(;t>0;)n=n[Nr],t--;return n}function mc(t){return!!(t[se]&9216||t[pn]?.dirty)}function Xd(t){t[Un].changeDetectionScheduler?.notify(8),t[se]&64&&(t[se]|=1024),mc(t)&&Io(t)}function Io(t){t[Un].changeDetectionScheduler?.notify(0);let n=Wi(t);for(;n!==null&&!(n[se]&8192||(n[se]|=8192,!Zd(n)));)n=Wi(n)}function Jd(t,n){if(No(t))throw new S(911,!1);t[qi]===null&&(t[qi]=[]),t[qi].push(n)}function hS(t,n){if(t[qi]===null)return;let e=t[qi].indexOf(n);e!==-1&&t[qi].splice(e,1)}function Wi(t){let n=t[Dt];return In(n)?n[Dt]:n}function Ap(t){return t[Rs]??=[]}function Op(t){return t.cleanup??=[]}function mS(t,n,e,i){let r=Ap(n);r.push(e),t.firstCreatePass&&Op(t).push(i,r.length-1)}var we={lFrame:ES(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var ap=!1;function pS(){return we.lFrame.elementDepthCount}function gS(){we.lFrame.elementDepthCount++}function Fp(){we.lFrame.elementDepthCount--}function eu(){return we.bindingsEnabled}function Pp(){return we.skipHydrationRootTNode!==null}function Lp(t){return we.skipHydrationRootTNode===t}function jp(){we.skipHydrationRootTNode=null}function ae(){return we.lFrame.lView}function et(){return we.lFrame.tView}function gt(t){return we.lFrame.contextLView=t,t[pt]}function vt(t){return we.lFrame.contextLView=null,t}function St(){let t=Vp();for(;t!==null&&t.type===64;)t=t.parent;return t}function Vp(){return we.lFrame.currentTNode}function vS(){let t=we.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function Ps(t,n){let e=we.lFrame;e.currentTNode=t,e.isParent=n}function Bp(){return we.lFrame.isParent}function Hp(){we.lFrame.isParent=!1}function yS(){return we.lFrame.contextLView}function Up(){return ap}function ic(t){let n=ap;return ap=t,n}function _S(){let t=we.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function bS(t){return we.lFrame.bindingIndex=t}function Mr(){return we.lFrame.bindingIndex++}function zp(t){let n=we.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function wS(){return we.lFrame.inI18n}function SS(t,n){let e=we.lFrame;e.bindingIndex=e.bindingRootIndex=t,tu(n)}function CS(){return we.lFrame.currentDirectiveIndex}function tu(t){we.lFrame.currentDirectiveIndex=t}function DS(t){let n=we.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function nu(){return we.lFrame.currentQueryIndex}function pc(t){we.lFrame.currentQueryIndex=t}function Gk(t){let n=t[J];return n.type===2?n.declTNode:n.type===1?t[zt]:null}function $p(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=Gk(o),r===null||(o=o[Nr],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=we.lFrame=xS();return i.currentTNode=n,i.lView=t,!0}function iu(t){let n=xS(),e=t[J];we.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function xS(){let t=we.lFrame,n=t===null?null:t.child;return n===null?ES(t):n}function ES(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function NS(){let t=we.lFrame;return we.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var qp=NS;function ru(){let t=NS();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function IS(t){return(we.lFrame.contextLView=fS(t,we.lFrame.contextLView))[pt]}function pi(){return we.lFrame.selectedIndex}function Tr(t){we.lFrame.selectedIndex=t}function Ls(){let t=we.lFrame;return Qd(t.tView,t.selectedIndex)}function zn(){we.lFrame.currentNamespace=Ns}function gc(){Wk()}function Wk(){we.lFrame.currentNamespace=null}function Gp(){return we.lFrame.currentNamespace}var MS=!0;function ou(){return MS}function vc(t){MS=t}function cp(t,n=null,e=null,i){let r=Wp(t,n,e,i);return r.resolveInjectorInitializers(),r}function Wp(t,n=null,e=null,i,r=new Set){let o=[e||Ht,nS(t)],s;return new bo(o,n||ks(),s||null,r)}var de=class t{static THROW_IF_NOT_FOUND=go;static NULL=new Es;static create(n,e){if(Array.isArray(n))return cp({name:""},e,n,"");{let i=n.name??"";return cp({name:i},n.parent,n.providers,i)}}static \u0275prov=V({token:t,providedIn:"any",factory:()=>M(uc)});static __NG_ELEMENT_ID__=-1},Q=new y(""),Je=class{static __NG_ELEMENT_ID__=Kk;static __NG_ENV_ID__=n=>n},Ld=class extends Je{_lView;constructor(n){super(),this._lView=n}get destroyed(){return No(this._lView)}onDestroy(n){let e=this._lView;return Jd(e,n),()=>hS(e,n)}};function Kk(){return new Ld(ae())}var TS=!1,kS=new y(""),gi=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new ht(!1);debugTaskTracker=u(kS,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new X(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=V({token:t,providedIn:"root",factory:()=>new t})}return t})(),lp=class extends N{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,xp()&&(this.destroyRef=u(Je,{optional:!0})??void 0,this.pendingTasks=u(gi,{optional:!0})??void 0)}emit(n){let e=ie(null);try{super.next(n)}finally{ie(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),s=i;if(n&&typeof n=="object"){let c=n;r=c.next?.bind(c),o=c.error?.bind(c),s=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return n instanceof ue&&n.add(a),a}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},te=lp;function jd(...t){}function Kp(t){let n,e;function i(){t=jd;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch(r){}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function RS(t){return queueMicrotask(()=>t()),()=>{t=jd}}var Yp="isAngularZone",rc=Yp+"_ID",Yk=0,O=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new te(!1);onMicrotaskEmpty=new te(!1);onStable=new te(!1);onError=new te(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=TS}=n;if(typeof Zone>"u")throw new S(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,Xk(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Yp)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new S(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new S(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,n,Qk,jd,jd);try{return o.runTask(s,e,i)}finally{o.cancelTask(s)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},Qk={};function Qp(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function Zk(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Kp(()=>{t.callbackScheduled=!1,dp(t),t.isCheckStableRunning=!0,Qp(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),dp(t)}function Xk(t){let n=()=>{Zk(t)},e=Yk++;t._inner=t._inner.fork({name:"angular",properties:{[Yp]:!0,[rc]:e,[rc+e]:!0},onInvokeTask:(i,r,o,s,a,c)=>{if(Jk(c))return i.invokeTask(o,s,a,c);try{return $w(t),i.invokeTask(o,s,a,c)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),qw(t)}},onInvoke:(i,r,o,s,a,c,l)=>{try{return $w(t),i.invoke(o,s,a,c,l)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!eR(c)&&n(),qw(t)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,dp(t),Qp(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function dp(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function $w(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function qw(t){t._nesting--,Qp(t)}var oc=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new te;onMicrotaskEmpty=new te;onStable=new te;onError=new te;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function Jk(t){return AS(t,"__ignore_ng_zone__")}function eR(t){return AS(t,"__scheduler_tick__")}function AS(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var Qt=class{_console=console;handleError(n){this._console.error("ERROR",n)}},Tn=new y("",{factory:()=>{let t=u(O),n=u(He),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(Qt),e.handleError(i))})}}}),OS={provide:Ts,useValue:()=>{let t=u(Qt,{optional:!0})},multi:!0};function U(t,n){let[e,i,r]=Am(t,n?.equal),o=e,s=o[ft];return o.set=i,o.update=r,o.asReadonly=su.bind(o),o}function su(){let t=this[ft];if(t.readonlyFn===void 0){let n=()=>this();n[ft]=t,t.readonlyFn=n}return t.readonlyFn}var Mo=new y("",{factory:()=>tR}),tR="ng";var au=new y(""),To=new y("",{providedIn:"platform",factory:()=>"unknown"}),kr=new y(""),Rr=new y("",{factory:()=>u(Q).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var js=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=nR}return t})();function nR(){return new js(ae(),St())}var li=class{},yc=new y("",{factory:()=>!0});var Zp=new y(""),cu=(()=>{class t{static \u0275prov=V({token:t,providedIn:"root",factory:()=>new up})}return t})(),up=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},Vd=class{[ft];constructor(n){this[ft]=n}destroy(){this[ft].destroy()}};function $t(t,n){let e=n?.injector??u(de),i=n?.manualCleanup!==!0?e.get(Je):null,r,o=e.get(js,null,{optional:!0}),s=e.get(li);return o!==null?(r=oR(o.view,s,t),i instanceof Ld&&i._lView===o.view&&(i=null)):r=sR(t,e.get(cu),s),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new Vd(r)}var FS=Y(_({},Om),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=ic(!1);try{Fm(this)}finally{ic(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=ie(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],ie(t)}}}),iR=Y(_({},FS),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(vr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),rR=Y(_({},FS),{consumerMarkedDirty(){this.view[se]|=8192,Io(this.view),this.notifier.notify(13)},destroy(){if(vr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[Gi]?.delete(this)}});function oR(t,n,e){let i=Object.create(rR);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=PS(i,e),t[Gi]??=new Set,t[Gi].add(i),i.consumerMarkedDirty(i),i}function sR(t,n,e){let i=Object.create(iR);return i.fn=PS(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function PS(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function $n(t){return typeof t=="function"&&t[ft]!==void 0}var ko=(()=>{class t{internalPendingTasks=u(gi);scheduler=u(li);errorHandler=u(Tn);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();try{e().catch(this.errorHandler).finally(i)}catch(r){this.errorHandler(r),i()}}static \u0275prov=V({token:t,providedIn:"root",factory:()=>new t})}return t})();function Mc(t){return{toString:t}.toString()}var Le=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(Le||{}),yu=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}};function S0(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var C0=null,Ye=(()=>{C0=LS;let t=()=>LS;return t.ngInherit=!0,t})();function vR(){return C0}function LS(t){return t.type.prototype.ngOnChanges&&(t.setInput=_R),yR}function yR(){let t=D0(this),n=t?.current;if(n){let e=t.previous;if(e===Er)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function _R(t,n,e,i,r){let o=this.declaredInputs[i],s=D0(t)||bR(t,{previous:Er,current:null}),a=s.current||(s.current={}),c=s.previous,l=c[o];a[o]=new yu(l&&l.currentValue,e,c===Er),S0(t,n,r,e)}var cg="__ngSimpleChanges__";function D0(t){return Object.hasOwn(t,cg)&&t[cg]||null}function bR(t,n){return t[cg]=n}var jS=[];var qe=function(t,n=null,e){for(let i=0;i<jS.length;i++){let r=jS[i];r(t,n,e)}};function wR(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let s=vR()(n);(e.preOrderHooks??=[]).push(t,s),(e.preOrderCheckHooks??=[]).push(t,s)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function x0(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:d}=o;s&&(t.contentHooks??=[]).push(-e,s),a&&((t.contentHooks??=[]).push(e,a),(t.contentCheckHooks??=[]).push(e,a)),c&&(t.viewHooks??=[]).push(-e,c),l&&((t.viewHooks??=[]).push(e,l),(t.viewCheckHooks??=[]).push(e,l)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function mu(t,n,e){E0(t,n,3,e)}function pu(t,n,e,i){(t[se]&3)===e&&E0(t,n,e,i)}function Xp(t,n){let e=t[se];(e&3)===n&&(e&=16383,e+=1,t[se]=e)}function E0(t,n,e,i){let r=i!==void 0?t[Co]&65535:0,o=i??-1,s=n.length-1,a=0;for(let c=r;c<s;c++)if(typeof n[c+1]=="number"){if(a=n[c],i!=null&&a>=i)break}else n[c]<0&&(t[Co]+=65536),(a<o||o==-1)&&(SR(t,e,n,c),t[Co]=(t[Co]&4294901760)+c+2),c++}function VS(t,n){qe(Le.LifecycleHookStart,t,n);let e=ie(null);try{n.call(t)}finally{ie(e),qe(Le.LifecycleHookEnd,t,n)}}function SR(t,n,e,i){let r=e[i]<0,o=e[i+1],s=r?-e[i]:e[i],a=t[s];r?t[se]>>14<t[Co]>>16&&(t[se]&3)===n&&(t[se]+=16384,VS(a,o)):VS(a,o)}var Bs=-1,Oo=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function CR(t){return(t.flags&8)!==0}function DR(t){return(t.flags&16)!==0}function xR(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],s=e[i++],a=e[i++];t.setAttribute(n,s,a,o)}else{let o=r,s=e[++i];ER(o)?t.setProperty(n,o,s):t.setAttribute(n,o,s),i++}}return i}function N0(t){return t===3||t===4||t===6}function ER(t){return t.charCodeAt(0)===64}function Hs(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?BS(t,e,r,null,n[++i]):BS(t,e,r,null,null))}}return t}function BS(t,n,e,i,r){let o=0,s=t.length;if(n===-1)s=-1;else for(;o<t.length;){let a=t[o++];if(typeof a=="number"){if(a===n){s=-1;break}else if(a>n){s=o-1;break}}}for(;o<t.length;){let a=t[o];if(typeof a=="number")break;if(a===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(t.splice(s,0,n),o=s+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function I0(t){return t!==Bs}function _u(t){return t&32767}function NR(t){return t>>16}function bu(t,n){let e=NR(t),i=n;for(;e>0;)i=i[Nr],e--;return i}var lg=!0;function HS(t){let n=lg;return lg=t,n}var IR=256,M0=IR-1,T0=5,MR=0,vi={};function TR(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:Object.hasOwn(e,wo)&&(i=e[wo]),i==null&&(i=e[wo]=MR++);let r=i&M0,o=1<<r;n.data[t+(r>>T0)]|=o}function wu(t,n){let e=k0(t,n);if(e!==-1)return e;let i=n[J];i.firstCreatePass&&(t.injectorIndex=n.length,Jp(i.data,t),Jp(n,null),Jp(i.blueprint,null));let r=qg(t,n),o=t.injectorIndex;if(I0(r)){let s=_u(r),a=bu(r,n),c=a[J].data;for(let l=0;l<8;l++)n[o+l]=a[s+l]|c[s+l]}return n[o+8]=r,o}function Jp(t,n){t.push(0,0,0,0,0,0,0,0,n)}function k0(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function qg(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=P0(r),i===null)return Bs;if(e++,r=r[Nr],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return Bs}function dg(t,n,e){TR(t,n,e)}function kR(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(N0(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function R0(t,n,e){if(e&8||t!==void 0)return t;$d(n,"NodeInjector")}function A0(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[di],o=mn(void 0);try{return r?r.get(n,i,e&8):_p(n,i,e&8)}finally{mn(o)}}return R0(i,n,e)}function O0(t,n,e,i=0,r){if(t!==null){if(n[se]&2048&&!(i&2)){let s=FR(t,n,e,i,vi);if(s!==vi)return s}let o=F0(t,n,e,i,vi);if(o!==vi)return o}return A0(n,e,i,r)}function F0(t,n,e,i,r){let o=AR(e);if(typeof o=="function"){if(!$p(n,t,i))return i&1?R0(r,e,i):A0(n,e,i,r);try{let s;if(s=o(i),s==null&&!(i&8))$d(e);else return s}finally{qp()}}else if(typeof o=="number"){let s=null,a=k0(t,n),c=Bs,l=i&1?n[Zt][zt]:null;for((a===-1||i&4)&&(c=a===-1?qg(t,n):n[a+8],c===Bs||!zS(i,!1)?a=-1:(s=n[J],a=_u(c),n=bu(c,n)));a!==-1;){let d=n[J];if(US(o,a,d.data)){let f=RR(a,n,e,s,i,l);if(f!==vi)return f}c=n[a+8],c!==Bs&&zS(i,n[J].data[a+8]===l)&&US(o,a,n)?(s=d,a=_u(c),n=bu(c,n)):a=-1}}return r}function RR(t,n,e,i,r,o){let s=n[J],a=s.data[t+8],c=i==null?Qi(a)&&lg:i!=s&&(a.type&3)!==0,l=r&1&&o===a,d=gu(a,s,e,c,l);return d!==null?Sc(n,s,d,a,r):vi}function gu(t,n,e,i,r){let o=t.providerIndexes,s=n.data,a=o&1048575,c=t.directiveStart,l=t.directiveEnd,d=o>>20,f=i?a:a+d,h=r?a+d:l;for(let m=f;m<h;m++){let p=s[m];if(m<c&&e===p||m>=c&&p.type===e)return m}if(r){let m=s[c];if(m&&mi(m)&&m.type===e)return c}return null}function Sc(t,n,e,i,r){let o=t[e],s=n.data;if(o instanceof Oo){let a=o;if(a.resolving)throw yp("");let c=HS(a.canSeeViewProviders);a.resolving=!0;let l=s[e].type||s[e],d,f=a.injectImpl?mn(a.injectImpl):null,h=$p(t,i,0);try{o=t[e]=a.factory(void 0,r,s,t,i),n.firstCreatePass&&e>=i.directiveStart&&wR(e,s[e],n)}finally{f!==null&&mn(f),HS(c),a.resolving=!1,qp()}}return o}function AR(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=Object.hasOwn(t,wo)?t[wo]:void 0;return typeof n=="number"?n>=0?n&M0:OR:n}function US(t,n,e){let i=1<<t;return!!(e[n+(t>>T0)]&i)}function zS(t,n){return!(t&2)&&!(t&1&&n)}var Ar=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return O0(this._tNode,this._lView,n,vo(i),e)}};function OR(){return new Ar(St(),ae())}function xe(t){return Mc(()=>{let n=t.prototype.constructor,e=n[nc]||ug(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[nc]||ug(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function ug(t){return fp(t)?()=>{let n=ug(Ft(t));return n&&n()}:yo(t)}function FR(t,n,e,i,r){let o=t,s=n;for(;o!==null&&s!==null&&s[se]&2048&&!Fs(s);){let a=F0(o,s,e,i|2,vi);if(a!==vi)return a;let c=o.parent;if(!c){let l=s[Np];if(l){let d=l.get(e,vi,i&-5);if(d!==vi)return d}c=P0(s),s=s[Nr]}o=c}return r}function P0(t){let n=t[J],e=n.type;return e===2?n.declTNode:e===1?t[zt]:null}function Tc(t){return kR(St(),t)}function L0(t){let n=Ut.ng;if(n&&n.\u0275compilerFacade)return n.\u0275compilerFacade;throw new Error("JIT compiler unavailable")}function B(t){return{token:t.token,providedIn:t.autoProvided===!1?null:"root",factory:t.factory,value:void 0}}function PR(){return Gs(St(),ae())}function Gs(t,n){return new L(gn(t,n))}var L=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=PR}return t})();function j0(t){return t instanceof L?t.nativeElement:t}function LR(){return this._results[Symbol.iterator]()}var yn=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new N}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=Jw(n);(this._changesDetected=!Xw(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=LR};function V0(t){return(t.flags&128)===128}var Gg=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Gg||{}),B0=new Map,jR=0;function VR(){return jR++}function BR(t){B0.set(t[fi],t)}function fg(t){B0.delete(t[fi])}var $S="__ngContext__";function Us(t,n){Yi(n)?(t[$S]=n[fi],BR(n)):t[$S]=n}function H0(t){return z0(t[As])}function U0(t){return z0(t[Nn])}function z0(t){for(;t!==null&&!In(t);)t=t[Nn];return t}var hg;function Wg(t){hg=t}function Kg(){if(hg!==void 0)return hg;if(typeof document<"u")return document;throw new S(210,!1)}var $0="r";var q0="di";var Yg=new y(""),G0=!1,W0=new y("",{factory:()=>G0});var Au=new y("");var qS=new WeakMap;function HR(t,n){if(t==null||typeof t!="object")return;let e=qS.get(t);e||(e=new WeakSet,qS.set(t,e)),e.add(n)}var UR=(t,n,e,i)=>{};function zR(t,n,e,i){UR(t,n,e,i)}function Ou(t){return(t.flags&32)===32}var $R=()=>null;function K0(t,n,e=!1){return $R(t,n,e)}function Y0(t,n){let e=t.contentQueries;if(e!==null){let i=ie(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],s=e[r+1];if(s!==-1){let a=t.data[s];pc(o),a.contentQueries(2,n[s],s)}}}finally{ie(i)}}}function mg(t,n,e){pc(0);let i=ie(null);try{n(t,e)}finally{ie(i)}}function Qg(t,n,e){if(Mp(n)){let i=ie(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let s=r;s<o;s++){let a=t.data[s];if(a.contentQueries){let c=e[s];a.contentQueries(1,c,s)}}}finally{ie(i)}}}var Wn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(Wn||{});var qR={"http://www.w3.org/2000/svg":Ns,"http://www.w3.org/1998/Math/MathML":Yd},lu;function GR(){if(lu===void 0&&(lu=null,Ut.trustedTypes))try{lu=Ut.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch(t){}return lu}function Fu(t){return GR()?.createHTML(t)||t}var du;function Q0(){if(du===void 0&&(du=null,Ut.trustedTypes))try{du=Ut.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch(t){}return du}function GS(t){return Q0()?.createHTML(t)||t}function WS(t){return Q0()?.createScriptURL(t)||t}var Zi=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Bd})`}},pg=class extends Zi{getTypeName(){return"HTML"}},gg=class extends Zi{getTypeName(){return"Style"}},vg=class extends Zi{getTypeName(){return"Script"}},yg=class extends Zi{getTypeName(){return"URL"}},_g=class extends Zi{getTypeName(){return"ResourceURL"}};function sn(t){return t instanceof Zi?t.changingThisBreaksApplicationSecurity:t}function _i(t,n){let e=Z0(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${Bd})`)}return e===n}function Z0(t){return t instanceof Zi&&t.getTypeName()||null}function Zg(t){return new pg(t)}function Xg(t){return new gg(t)}function Jg(t){return new vg(t)}function ev(t){return new yg(t)}function tv(t){return new _g(t)}function WR(t){let n=new wg(t);return KR()?new bg(n):n}var bg=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(Fu(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch(e){return null}}},wg=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=Fu(n),e}};function KR(){try{return!!new window.DOMParser().parseFromString(Fu(""),"text/html")}catch(t){return!1}}var YR=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function kc(t){return t=String(t),t.match(YR)?t:"unsafe:"+t}function Xi(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function Rc(...t){let n={};for(let e of t)for(let i in e)Object.hasOwn(e,i)&&(n[i]=!0);return n}var X0=Xi("area,br,col,hr,img,wbr"),J0=Xi("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),eC=Xi("rp,rt"),QR=Rc(eC,J0),ZR=Rc(J0,Xi("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),XR=Rc(eC,Xi("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),KS=Rc(X0,ZR,XR,QR),tC=Xi("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),JR=Xi("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),eA=Xi("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),tA=Rc(tC,JR,eA),nA=Xi("script,style,template"),Sg=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=oA(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=rA(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=YS(n).toLowerCase();if(!Object.hasOwn(KS,e))return this.sanitizedSomething=!0,!Object.hasOwn(nA,e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),s=o.name,a=s.toLowerCase();if(!Object.hasOwn(tA,a)){this.sanitizedSomething=!0;continue}let c=o.value;tC[a]&&(c=kc(c)),this.buf.push(" ",s,'="',QS(c),'"')}return this.buf.push(">"),!0}endElement(n){let e=YS(n).toLowerCase();Object.hasOwn(KS,e)&&!Object.hasOwn(X0,e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(QS(n))}};function iA(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function rA(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw nC(n);return n}function oA(t){let n=t.firstChild;if(n&&iA(t,n))throw nC(n);return n}function YS(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function nC(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var sA=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,aA=/([^\#-~ |!])/g;function QS(t){return t.replace(/&/g,"&amp;").replace(sA,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(aA,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var uu;function Pu(t,n){let e=null;try{uu=uu||WR(t);let i=n?String(n):"";e=uu.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=uu.getInertBodyElement(i)}while(i!==o);let a=new Sg().sanitizeChildren(ZS(e)||e);return Fu(a)}finally{if(e){let i=ZS(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function ZS(t){return"content"in t&&cA(t)?t.content:null}function cA(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}var lA=/^>|^->|<!--|-->|--!>|<!-$/g,dA=/(<|>)/g,uA="\u200B$1\u200B";function fA(t){return t.replace(lA,n=>n.replace(dA,uA))}function hA(t,n){return t.createText(n)}function mA(t,n,e){t.setValue(n,e)}function pA(t,n){return t.createComment(fA(n))}function iC(t,n,e){return t.createElement(n,e)}function Ro(t,n,e,i,r){t.insertBefore(n,e,i,r)}function rC(t,n,e){t.appendChild(n,e)}function XS(t,n,e,i,r){i!==null?Ro(t,n,e,i,r):rC(t,n,e)}function oC(t,n,e,i){t.removeChild(null,n,e,i)}function gA(t,n,e){t.setAttribute(n,"style",e)}function vA(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function sC(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&xR(t,n,i),r!==null&&vA(t,n,r),o!==null&&gA(t,n,o)}function yA(t,n=!0){if(t[0]!=":")return[null,t];let e=t.indexOf(":",1);if(e===-1){if(n)throw new Error(`Unsupported format "${t}" expecting ":namespace:name"`);return[null,t]}return[t.slice(1,e),t.slice(e+1)]}function nv(t,n,e){if(n!==void 0&&e!==void 0&&lC(n,e)!==Ae.HTML)return t;let i=rv();return i?GS(i.sanitize(Ae.HTML,t)||""):_i(t,"HTML")?GS(sn(t)):Pu(Kg(),Is(t))}function aC(t){let n=rv();return n?n.sanitize(Ae.URL,t)||"":_i(t,"URL")?sn(t):kc(Is(t))}function cC(t){let n=rv();if(n)return WS(n.sanitize(Ae.RESOURCE_URL,t)||"");if(_i(t,"ResourceURL"))return WS(sn(t));throw new S(904,!1)}function _A(t,n){switch(lC(t,n)){case Ae.RESOURCE_URL:return cC;case Ae.URL:return aC;default:return null}}function iv(t,n,e){return _A(n,e)?.(t)??t}function rv(){let t=ae();return t&&t[Un].sanitizer}function lC(t,n){let[e,i]=bA(t);return cS(i,n,e)}function bA(t){t=t.toLowerCase();let n=yA(t,!1);if(n[0])return n;let i=pi()===-1?null:Ls(),r=i?.namespace;if(t==="#host"&&i?.type===2){let o=gn(i,ae());if(o.tagName&&(t=o.tagName.toLowerCase()),r==null){let s=o.namespaceURI;r=s&&qR[s]}}return[r,t]}function wA(t){return t instanceof Function?t():t}function SA(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var dC="ng-template";function CA(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&SA(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(ov(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function ov(t){return t.type===4&&t.value!==dC}function DA(t,n,e){let i=t.type===4&&!e?dC:t.value;return n===i}function xA(t,n,e){let i=4,r=t.attrs,o=r!==null?IA(r):0,s=!1;for(let a=0;a<n.length;a++){let c=n[a];if(typeof c=="number"){if(!s&&!qn(i)&&!qn(c))return!1;if(s&&qn(c))continue;s=!1,i=c|i&1;continue}if(!s)if(i&4){if(i=2|i&1,c!==""&&!DA(t,c,e)||c===""&&n.length===1){if(qn(i))return!1;s=!0}}else if(i&8){if(r===null||!CA(t,r,c,e)){if(qn(i))return!1;s=!0}}else{let l=n[++a],d=EA(c,r,ov(t),e);if(d===-1){if(qn(i))return!1;s=!0;continue}if(l!==""){let f;if(d>o?f="":f=r[d+1].toLowerCase(),i&2&&l!==f){if(qn(i))return!1;s=!0}}}}return qn(i)||s}function qn(t){return(t&1)===0}function EA(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let s=n[r];if(s===t)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=n[++r];for(;typeof a=="string";)a=n[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return MA(n,t)}function uC(t,n,e=!1){for(let i=0;i<n.length;i++)if(xA(t,n[i],e))return!0;return!1}function NA(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function IA(t){for(let n=0;n<t.length;n++){let e=t[n];if(N0(e))return n}return t.length}function MA(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function TA(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function JS(t,n){return t?":not("+n.trim()+")":n}function kA(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let s=t[e];if(typeof s=="string")if(i&2){let a=t[++e];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!qn(s)&&(n+=JS(o,r),r=""),i=s,o=o||!qn(i);e++}return r!==""&&(n+=JS(o,r)),n}function RA(t){return t.map(kA).join(",")}function AA(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!qn(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var _n={},Kn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(Kn||{}),OA;function sv(t,n){return OA(t,n)}var Or=new Set;var BW=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Cg=new WeakMap;function fC(t){return t?t[Nr]??t:null}var _c=new WeakSet;function FA(t,n,e){let i=Cg.get(t);if(!i||i.length===0)return;let r=n.parentNode,o=n.previousSibling,s=fC(e);for(let a=i.length-1;a>=0;a--){let{el:c,declarationView:l}=i[a],d=c.parentNode;c===n?(i.splice(a,1),_c.add(c),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):o&&c===o?(i.splice(a,1),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),c.parentNode?.removeChild(c)):d&&r&&d!==r&&(s===null||l===null||s===l)&&(i.splice(a,1),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),c.parentNode?.removeChild(c))}}function PA(t,n,e){let i=fC(e),r=Cg.get(t);r?r.some(o=>o.el===n)||r.push({el:n,declarationView:i}):Cg.set(t,[{el:n,declarationView:i}])}var Lu=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(Lu||{}),Yn=new y(""),e0=new Set;function kn(t){e0.has(t)||(e0.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var ju=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=V({token:t,providedIn:"root",factory:()=>new t})}return t})(),av=[0,1,2,3],cv=(()=>{class t{ngZone=u(O);scheduler=u(li);errorHandler=u(Qt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(Yn,{optional:!0})}execute(){let e=this.sequences.size>0;e&&qe(Le.AfterRenderHooksStart),this.executing=!0;for(let i of av)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&qe(Le.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[Do]??=[]).push(e),Io(i),i[se]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(Lu.AFTER_NEXT_RENDER,e):e()}static \u0275prov=V({token:t,providedIn:"root",factory:()=>new t})}return t})(),Cc=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,s=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[Do];n&&(this.view[Do]=n.filter(e=>e!==this))}};function Lt(t,n){let e=n?.injector??u(de);return kn("NgAfterNextRender"),jA(t,e,n,!0)}function LA(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function jA(t,n,e,i){let r=n.get(ju);r.impl??=n.get(cv);let o=n.get(Yn,null,{optional:!0}),s=e?.manualCleanup!==!0?n.get(Je):null,a=n.get(js,null,{optional:!0}),c=new Cc(r.impl,LA(t),a?.view,i,s,o?.snapshot(null));return r.impl.register(c),c}var lv=new y("",{factory:()=>{let t=u(He),n=new Set;return t.onDestroy(()=>n.clear()),{queue:n,isScheduled:!1,scheduler:null,injector:t}}});function hC(t,n,e){let i=t.get(lv);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function VA(t,n){let e=t.get(lv);if(Array.isArray(n))for(let i of n)e.queue.delete(i);else e.queue.delete(n)}function BA(t,n){let e=t.get(lv);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function HA(t,n){for(let[e,i]of n)hC(t,i.animateFns)}function t0(t,n,e,i){let r=t?.[hi]?.enter;n!==null&&r&&r.has(e.index)&&HA(i,r)}function n0(t,n,e,i){try{e.get(uc)}catch(s){return i(!1)}let r=t?.[hi];r?.enter?.has(n.index)&&VA(e,r.enter.get(n.index).animateFns);let o=UA(t,n,r);if(o.size===0){let s=!1;if(t){let a=[];Vu(t,n,a),s=a.length>0}if(!s)return i(!1)}t&&Or.add(t[fi]),hC(e,()=>zA(t,n,r||void 0,o,i),r||void 0)}function UA(t,n,e){let i=new Map,r=e?.leave;if(r&&r.has(n.index)&&i.set(n.index,r.get(n.index)),t&&r)for(let[o,s]of r){if(i.has(o))continue;let c=t[J].data[o].parent;for(;c;){if(c===n){i.set(o,s);break}c=c.parent}}return i}function zA(t,n,e,i,r){let o=[];if(e&&e.leave)for(let[s]of i){if(!e.leave.has(s))continue;let a=e.leave.get(s);for(let c of a.animateFns){let{promise:l}=c();o.push(l)}e.detachedLeaveAnimationFns=void 0}if(t&&Vu(t,n,o),o.length>0){let s=e||t?.[hi];if(s){let a=s.running;a&&o.push(a),s.running=Promise.allSettled(o),qA(t,s.running,r)}else Promise.allSettled(o).then(()=>{t&&Or.delete(t[fi]),r(!0)})}else t&&Or.delete(t[fi]),r(!1)}function Vu(t,n,e){if(n.type&12){let r=t[n.index];if(In(r))for(let o=st;o<r.length;o++){let s=r[o];s[J].type===2&&$A(s,e)}}let i=n.child;for(;i;)Vu(t,i,e),i=i.next}function $A(t,n){let e=t[hi];if(e&&e.leave)for(let r of e.leave.values())for(let o of r.animateFns){let{promise:s}=o();n.push(s)}let i=t[J].firstChild;for(;i;)Vu(t,i,n),i=i.next}function qA(t,n,e){n.then(()=>{t[hi]?.running===n&&(t[hi].running=void 0,Or.delete(t[fi])),e(!0)})}function Vs(t,n,e,i,r,o,s,a){if(r!=null){let c,l=!1;In(r)?c=r:Yi(r)&&(l=!0,r=r[Hn]);let d=Pt(r);t===0&&i!==null?(t0(a,i,o,e),s==null?rC(n,i,d):Ro(n,i,d,s||null,!0)):t===1&&i!==null?(t0(a,i,o,e),Ro(n,i,d,s||null,!0),FA(o,d,a)):t===2?(a?.[hi]?.leave?.has(o.index)&&PA(o,d,a),_c.delete(d),n0(a,o,e,f=>{if(_c.has(d)){_c.delete(d);return}oC(n,d,l,f)})):t===3&&(_c.delete(d),n0(a,o,e,()=>{n.destroyNode(d)})),c!=null&&nO(n,t,e,c,o,i,s)}}function GA(t,n){mC(t,n),n[Hn]=null,n[zt]=null}function WA(t,n,e,i,r,o){i[Hn]=r,i[zt]=n,Hu(t,i,e,1,r,o)}function mC(t,n){n[Un].changeDetectionScheduler?.notify(9),Hu(t,n,n[Ke],2,null,null)}function KA(t){let n=t[As];if(!n)return eg(t[J],t);for(;n;){let e=null;if(Yi(n))e=n[As];else{let i=n[st];i&&(e=i)}if(!e){for(;n&&!n[Nn]&&n!==t;)Yi(n)&&eg(n[J],n),n=n[Dt];n===null&&(n=t),Yi(n)&&eg(n[J],n),e=n&&n[Nn]}n=e}}function dv(t,n){let e=t[Eo],i=e.indexOf(n);e.splice(i,1)}function Bu(t,n){if(No(n))return;let e=n[Ke];e.destroyNode&&Hu(t,n,e,3,null,null),KA(n)}function eg(t,n){if(No(n))return;let e=ie(null);try{n[se]&=-129,n[se]|=256,n[pn]&&vr(n[pn]),QA(t,n),YA(t,n),n[J].type===1&&n[Ke].destroy();let i=n[Ir];if(i!==null&&In(n[Dt])){i!==n[Dt]&&dv(i,n);let r=n[ui];r!==null&&r.detachView(t)}fg(n)}finally{ie(e)}}function YA(t,n){let e=t.cleanup,i=n[Rs];if(e!==null)for(let s=0;s<e.length-1;s+=2)if(typeof e[s]=="string"){let a=e[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[e[s+1]];e[s].call(a)}i!==null&&(n[Rs]=null);let r=n[qi];if(r!==null){n[qi]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=n[Gi];if(o!==null){n[Gi]=null;for(let s of o)s.destroy()}}function QA(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof Oo)){let o=e[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],c=o[s+1];qe(Le.LifecycleHookStart,a,c);try{c.call(a)}finally{qe(Le.LifecycleHookEnd,a,c)}}else{qe(Le.LifecycleHookStart,r,o);try{o.call(r)}finally{qe(Le.LifecycleHookEnd,r,o)}}}}}function pC(t,n,e){return ZA(t,n.parent,e)}function ZA(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[Hn];if(Qi(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===Wn.None||r===Wn.Emulated)return null}return gn(i,e)}function gC(t,n,e){return JA(t,n,e)}function XA(t,n,e){return t.type&40?gn(t,e):null}var JA=XA,i0;function uv(t,n,e,i){let r=pC(t,i,n),o=n[Ke],s=i.parent||n[zt],a=gC(s,i,n);if(r!=null)if(Array.isArray(e))for(let c=0;c<e.length;c++)XS(o,r,e[c],a,!1);else XS(o,r,e,a,!1);i0!==void 0&&i0(o,i,n,e,r)}function bc(t,n){if(n!==null){let e=n.type;if(e&3)return gn(n,t);if(e&4)return Dg(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return bc(t,i);{let r=t[n.index];return In(r)?Dg(-1,r):Pt(r)}}else{if(e&128)return bc(t,n.next);if(e&32)return sv(n,t)()||Pt(t[n.index]);{let i=vC(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=Wi(t[Zt]);return bc(r,i)}else return bc(t,n.next)}}}return null}function vC(t,n){if(n!==null){let i=t[Zt][zt],r=n.projection;return i.projection[r]}return null}function Dg(t,n){let e=st+t+1;if(e<n.length){let i=n[e],r=i[J].firstChild;if(r!==null)return bc(i,r)}return n[xo]}function fv(t,n,e,i,r,o,s){for(;e!=null;){let a=i[di];if(e.type===128){e=e.next;continue}let c=i[e.index],l=e.type;if(s&&n===0&&(c&&Us(Pt(c),i),e.flags|=2),!Ou(e))if(l&8)fv(t,n,e.child,i,r,o,!1),Vs(n,t,a,r,c,e,o,i);else if(l&32){let d=sv(e,i),f;for(;f=d();)Vs(n,t,a,r,f,e,o,i);Vs(n,t,a,r,c,e,o,i)}else l&16?yC(t,n,i,e,r,o):Vs(n,t,a,r,c,e,o,i);e=s?e.projectionNext:e.next}}function Hu(t,n,e,i,r,o){t.type===3?eO(e,i,n,r,o):fv(e,i,t.firstChild,n,r,o,!1)}function eO(t,n,e,i,r){let s=e[J].firstChild,a=s.next,c=Pt(e[s.index]),l=Pt(e[a.index]),d=a.index+1,f=e[d];if(n===1||n===0)i!==null&&(f&&f.hasChildNodes()?Ro(t,i,f,r,!0):(Ro(t,i,c,r,!0),Ro(t,i,l,r,!0)));else if(n===2){if(f||(f=document.createDocumentFragment(),e[d]=f),c&&c.parentNode===f)return;let h=c;for(;h!==null;){let m=h.nextSibling;if(f.appendChild(h),h===l)break;h=m}}}function tO(t,n,e){let i=n[Ke],r=pC(t,e,n),o=e.parent||n[zt],s=gC(o,e,n);yC(i,0,n,e,r,s)}function yC(t,n,e,i,r,o){let s=e[Zt],c=s[zt].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let d=c[l];Vs(n,t,e[di],r,d,i,o,e)}else{let l=c,d=s[Dt];V0(i)&&(l.flags|=128),fv(t,n,l,d,r,o,!0)}}function nO(t,n,e,i,r,o,s){let a=i[xo],c=Pt(i);if(a!==c&&Vs(n,t,e,o,a,r,s),(i[se]&4)===0)for(let l=st;l<i.length;l++){let d=i[l];Hu(d[J],d,t,n,o,a)}}function iO(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:Kn.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=Kn.Important),t.setStyle(e,i,r,o))}}function hv(t,n,e,i,r,o,s,a,c,l,d){let f=at+i,h=f+r,m=rO(f,h),p=typeof l=="function"?l():l;return m[J]={type:t,blueprint:m,template:e,queries:null,viewQuery:a,declTNode:n,data:m.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:c,consts:p,incompleteFirstPass:!1,ssrId:d}}function rO(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:_n);return e}function oO(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=hv(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function mv(t,n,e,i,r,o,s,a,c,l,d){let f=n.blueprint.slice();return f[Hn]=r,f[se]=i|4|128|8|64|1024,(l!==null||t&&t[se]&2048)&&(f[se]|=2048),kp(f),f[Dt]=f[Nr]=t,f[pt]=e,f[Un]=s||t&&t[Un],f[Ke]=a||t&&t[Ke],f[di]=c||t&&t[di]||null,f[zt]=o,f[fi]=VR(),f[So]=d,f[Np]=l,f[Zt]=n.type==2?t[Zt]:f,f}function sO(t,n,e){let i=gn(n,t),r=oO(e),o=t[Un].rendererFactory,s=pv(t,mv(t,r,null,_C(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=s}function _C(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function bC(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function pv(t,n){return t[As]?t[Ep][Nn]=n:t[As]=n,t[Ep]=n,n}function D(t=1){wC(et(),ae(),pi()+t,!1)}function wC(t,n,e,i){if(!i)if((n[se]&3)===3){let o=t.preOrderCheckHooks;o!==null&&mu(n,o,e)}else{let o=t.preOrderHooks;o!==null&&pu(n,o,0,e)}Tr(e)}var Uu=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(Uu||{});function Fo(t,n,e,i){let r=ie(null);try{let[o,s,a]=t.inputs[e],c=null;(s&Uu.SignalBased)!==0&&(c=n[o][ft]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(n,i)),t.setInput!==null?t.setInput(n,c,i,e,o):S0(n,c,o,i)}finally{ie(r)}}function SC(t,n,e,i,r){let o=pi(),s=i&2;try{Tr(-1),s&&n.length>at&&wC(t,n,at,!1);let a=s?Le.TemplateUpdateStart:Le.TemplateCreateStart;qe(a,r,e),e(i,r)}finally{Tr(o);let a=s?Le.TemplateUpdateEnd:Le.TemplateCreateEnd;qe(a,r,e)}}function zu(t,n,e){hO(t,n,e),(e.flags&64)===64&&mO(t,n,e)}function Ac(t,n,e=gn){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?e(n,t):t[s];t[r++]=a}}}function aO(t,n,e,i){let o=i.get(W0,G0)||e===Wn.ShadowDom||e===Wn.ExperimentalIsolatedShadowDom,s=t.selectRootElement(n,o);return cO(s),s}function cO(t){lO(t)}var lO=()=>null;function dO(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function uO(t,n,e,i,r,o){let s=n[J];if(_v(t,s,n,e,i)){Qi(t)&&fO(n,t.index);return}t.type&3&&(e=dO(e)),CC(t,n,e,i,r,o)}function CC(t,n,e,i,r,o){if(t.type&3){let s=gn(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(s,e,i)}else t.type&12}function fO(t,n){let e=Mn(n,t);e[se]&16||(e[se]|=64)}function hO(t,n,e){let i=e.directiveStart,r=e.directiveEnd;Qi(e)&&sO(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||wu(e,n);let o=e.initialInputs;for(let s=i;s<r;s++){let a=t.data[s],c=Sc(n,t,s,e);if(Us(c,n),o!==null&&yO(n,s-i,c,a,e,o),mi(a)){let l=Mn(e.index,n);l[pt]=Sc(n,t,s,e)}}}function mO(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,s=CS();try{Tr(o);for(let a=i;a<r;a++){let c=t.data[a],l=n[a];tu(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&pO(c,l)}}finally{Tr(-1),tu(s)}}function pO(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function gv(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];uC(n,o.selectors,!1)&&(i??=[],mi(o)?i.unshift(o):i.push(o))}return i}function gO(t,n,e,i,r,o){let s=gn(t,n);vO(n[Ke],s,o,t.value,e,i,r)}function vO(t,n,e,i,r,o,s){if(o==null)s?.(o,i||"",r),t.removeAttribute(n,r,e);else{let a=s==null?Is(o):s(o,i||"",r);t.setAttribute(n,r,a,e)}}function yO(t,n,e,i,r,o){let s=o[n];if(s!==null)for(let a=0;a<s.length;a+=2){let c=s[a],l=s[a+1];Fo(i,e,c,l)}}function vv(t,n,e,i,r){let o=at+e,s=n[J],a=r(s,n,t,i,e);n[o]=a,Ps(t,!0);let c=t.type===2;return c?(sC(n[Ke],a,t),(pS()===0||Os(t))&&Us(a,n),gS()):Us(a,n),ou()&&(!c||!Ou(t))&&uv(s,n,a,t),t}function yv(t){let n=t;return Bp()?Hp():(n=n.parent,Ps(n,!1)),n}function _O(t,n){let e=t[di];if(!e)return;let i;try{i=e.get(Tn,null)}catch(r){i=null}i?.(n)}function _v(t,n,e,i,r){let o=t.inputs?.[i],s=t.hostDirectiveInputs?.[i],a=!1;if(s)for(let c=0;c<s.length;c+=2){let l=s[c],d=s[c+1],f=n.data[l];Fo(f,e[l],d,r),a=!0}if(o)for(let c of o){let l=e[c],d=n.data[c];Fo(d,l,i,r),a=!0}return a}function bO(t,n,e,i,r,o){let s=null,a=null,c=null,l=!1,d=t.directiveToIndex.get(i.type);if(typeof d=="number"?s=d:[s,a,c]=d,a!==null&&c!==null&&t.hostDirectiveInputs&&Object.hasOwn(t.hostDirectiveInputs,r)){let f=t.hostDirectiveInputs[r];for(let h=0;h<f.length;h+=2){let m=f[h];if(m>=a&&m<=c){let p=n.data[m],w=f[h+1];Fo(p,e[m],w,o),l=!0}else if(m>c)break}}return s!==null&&Object.hasOwn(i.inputs,r)&&(Fo(i,e[s],r,o),l=!0),l}function wO(t,n){let e=Mn(n,t),i=e[J];SO(i,e);let r=e[Hn];r!==null&&e[So]===null&&(e[So]=K0(r,e[di])),qe(Le.ComponentStart);try{bv(i,e,e[pt])}finally{qe(Le.ComponentEnd,e[pt])}}function SO(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function bv(t,n,e){iu(n);try{let i=t.viewQuery;i!==null&&mg(1,i,e);let r=t.template;r!==null&&SC(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[ui]?.finishViewCreation(t),t.staticContentQueries&&Y0(t,n),t.staticViewQueries&&mg(2,t.viewQuery,e);let o=t.components;o!==null&&CO(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[se]&=-5,ru()}}function CO(t,n){for(let e=0;e<n.length;e++)wO(t,n[e])}function Oc(t,n,e,i){let r=ie(null);try{let o=n.tView,a=t[se]&4096?4096:16,c=mv(t,o,e,a,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=t[n.index];c[Ir]=l;let d=t[ui];return d!==null&&(c[ui]=d.createEmbeddedView(o)),bv(o,c,e),c}finally{ie(r)}}function zs(t,n){return!n||n.firstChild===null||V0(t)}function Dc(t,n,e,i,r=!1){if(t.type===3){let o=t.firstChild,s=o.next,a=Pt(n[o.index]),c=Pt(n[s.index]),l=a;for(;l!==null&&(i.push(l),l!==c);)l=l.nextSibling;return i}for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];if(o!==null)if(In(o)){let a=o[xo];a!==o[Hn]&&i.push(Pt(o)),o[se]&4||DC(o,i),i.push(a)}else i.push(Pt(o));let s=e.type;if(s&8)Dc(t,n,e.child,i);else if(s&32){let a=sv(e,n),c;for(;c=a();)i.push(c)}else if(s&16){let a=vC(n,e);if(Array.isArray(a))i.push(...a);else{let c=Wi(n[Zt]);Dc(c[J],c,a,i,!0)}}e=r?e.projectionNext:e.next}return i}function DC(t,n){for(let e=st;e<t.length;e++){let i=t[e],r=i[J].firstChild;r!==null&&Dc(i[J],i,r,n)}}function xC(t){if(t[Do]!==null){for(let n of t[Do])n.impl.addSequence(n);t[Do].length=0}}var EC=[];function DO(t){return t[pn]??xO(t)}function xO(t){let n=EC.pop()??Object.create(NO);return n.lView=t,n}function EO(t){t.lView[pn]!==t&&(t.lView=null,EC.push(t))}var NO=Y(_({},mr),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Io(t.lView)},consumerOnSignalRead(){this.lView[pn]=this}});function IO(t){let n=t[pn]??Object.create(MO);return n.lView=t,n}var MO=Y(_({},mr),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=Wi(t.lView);for(;n&&!NC(n[J]);)n=Wi(n);n&&Rp(n)},consumerOnSignalRead(){this.lView[pn]=this}});function NC(t){return t.type!==2}function IC(t){if(t[Gi]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[Gi])if(i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()),t[Gi]===null))return;n=e&&!!(t[se]&8192)}}var TO=100;function MC(t,n=0){let i=t[Un].rendererFactory,r=!1;r||i.begin?.();try{kO(t,n)}finally{r||i.end?.()}}function kO(t,n){let e=Up();try{ic(!0),xg(t,n);let i=0;for(;mc(t);){if(i===TO)throw new S(103,!1);i++,xg(t,1)}}finally{ic(e)}}function RO(t,n,e,i){if(No(n))return;let r=n[se],o=!1,s=!1;iu(n);let a=!0,c=null,l=null;o||(NC(t)?(l=DO(n),c=Hi(l)):Zl()===null?(a=!1,l=IO(n),c=Hi(l)):n[pn]&&(vr(n[pn]),n[pn]=null));try{kp(n),bS(t.bindingStartIndex),e!==null&&SC(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let m=t.preOrderCheckHooks;m!==null&&mu(n,m,null)}else{let m=t.preOrderHooks;m!==null&&pu(n,m,0,null),Xp(n,0)}if(s||AO(n),IC(n),TC(n,0),t.contentQueries!==null&&Y0(t,n),!o)if(d){let m=t.contentCheckHooks;m!==null&&mu(n,m)}else{let m=t.contentHooks;m!==null&&pu(n,m,1),Xp(n,1)}FO(t,n);let f=t.components;f!==null&&RC(n,f,0);let h=t.viewQuery;if(h!==null&&mg(2,h,i),!o)if(d){let m=t.viewCheckHooks;m!==null&&mu(n,m)}else{let m=t.viewHooks;m!==null&&pu(n,m,2),Xp(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[Kd]){for(let m of n[Kd])m();n[Kd]=null}o||(xC(n),n[se]&=-73)}catch(d){throw o||Io(n),d}finally{l!==null&&(gr(l,c),a&&EO(l)),ru()}}function TC(t,n){for(let e=H0(t);e!==null;e=U0(e))for(let i=st;i<e.length;i++){let r=e[i];kC(r,n)}}function AO(t){for(let n=H0(t);n!==null;n=U0(n)){if(!(n[se]&2))continue;let e=n[Eo];for(let i=0;i<e.length;i++){let r=e[i];Rp(r)}}}function OO(t,n,e){qe(Le.ComponentStart);let i=Mn(n,t);try{kC(i,e)}finally{qe(Le.ComponentEnd,i[pt])}}function kC(t,n){Zd(t)&&xg(t,n)}function xg(t,n){let i=t[J],r=t[se],o=t[pn],s=!!(n===0&&r&16);if(s||=!!(r&64&&n===0),s||=!!(r&1024),s||=!!(o?.dirty&&ps(o)),s||=!1,o&&(o.dirty=!1),t[se]&=-9217,s)RO(i,t,i.template,t[pt]);else if(r&8192){let a=ie(null);try{IC(t),TC(t,1);let c=i.components;c!==null&&RC(t,c,1),xC(t)}finally{ie(a)}}}function RC(t,n,e){for(let i=0;i<n.length;i++)OO(t,n[i],e)}function FO(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)Tr(~r);else{let o=r,s=e[++i],a=e[++i];SS(s,o);let c=n[o];qe(Le.HostBindingsUpdateStart,c);try{a(2,c)}finally{qe(Le.HostBindingsUpdateEnd,c)}}}}finally{Tr(-1)}}function wv(t,n){let e=Up()?64:1088;for(t[Un].changeDetectionScheduler?.notify(n);t;){t[se]|=e;let i=Wi(t);if(Fs(t)&&!i)return t;t=i}return null}function AC(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function OC(t,n){let e=st+n;if(e<t.length)return t[e]}function Fc(t,n,e,i=!0){let r=n[J];if(PO(r,n,t,e),i){let s=Dg(e,t),a=n[Ke],c=a.parentNode(t[xo]);c!==null&&WA(r,t[zt],a,n,c,s)}let o=n[So];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function FC(t,n){let e=xc(t,n);return e!==void 0&&Bu(e[J],e),e}function xc(t,n){if(t.length<=st)return;let e=st+n,i=t[e];if(i){let r=i[Ir];r!==null&&r!==t&&dv(r,i),n>0&&(t[e-1][Nn]=i[Nn]);let o=dc(t,st+n);GA(i[J],i);let s=o[ui];s!==null&&s.detachView(o[J]),i[Dt]=null,i[Nn]=null,i[se]&=-129}return i}function PO(t,n,e,i){let r=st+i,o=e.length;i>0&&(e[r-1][Nn]=n),i<o-st?(n[Nn]=e[r],bp(e,st+i,n)):(e.push(n),n[Nn]=null),n[Dt]=e;let s=n[Ir];s!==null&&e!==s&&PC(s,n);let a=n[ui];a!==null&&a.insertView(t),Xd(n),n[se]|=128}function PC(t,n){let e=t[Eo],i=n[Dt];if(Yi(i))t[se]|=2;else{let r=i[Dt][Zt];n[Zt]!==r&&(t[se]|=2)}e===null?t[Eo]=[n]:e.push(n)}var Fr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[J];return Dc(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[pt]}set context(n){this._lView[pt]=n}get destroyed(){return No(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[Dt];if(In(n)){let e=n[hc],i=e?e.indexOf(this):-1;i>-1&&(xc(n,i),dc(e,i))}this._attachedToViewContainer=!1}Bu(this._lView[J],this._lView)}onDestroy(n){Jd(this._lView,n)}markForCheck(){wv(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[se]&=-129}reattach(){Xd(this._lView),this._lView[se]|=128}detectChanges(){this._lView[se]|=1024,MC(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new S(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Fs(this._lView),e=this._lView[Ir];e!==null&&!n&&dv(e,this._lView),mC(this._lView[J],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new S(902,!1);this._appRef=n;let e=Fs(this._lView),i=this._lView[Ir];i!==null&&!e&&PC(i,this._lView),Xd(this._lView)}};var yt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=LO;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=Oc(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new Fr(o)}}return t})();function LO(){return $u(St(),ae())}function $u(t,n){return t.type&4?new yt(n,t,Gs(t,n)):null}function Ws(t,n,e,i,r){let o=t.data[n];if(o===null)o=jO(t,n,e,i,r),wS()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let s=vS();o.injectorIndex=s===null?-1:s.injectorIndex}return Ps(o,!0),o}function jO(t,n,e,i,r){let o=Vp(),s=Bp(),a=s?o:o&&o.parent,c=t.data[n]=BO(t,a,e,n,i,r);return VO(t,c,o,s),c}function VO(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function BO(t,n,e,i,r,o){let s=n?n.injectorIndex:-1,a=0;return Pp()&&(a|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,namespace:Gp(),attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function HO(t){let n=t[Ip]??[],i=t[Dt][Ke],r=[];for(let o of n)o.data[q0]!==void 0?r.push(o):UO(o,i);t[Ip]=r}function UO(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[$0];for(;e<r;){let o=i.nextSibling;oC(n,i,!1),i=o,e++}}}var zO=()=>null,$O=()=>null;function Su(t,n){return zO(t,n)}function LC(t,n,e){return $O(t,n,e)}var jC=class{},ct=class{},Ue=class{destroyNode=null;static __NG_ELEMENT_ID__=()=>qO()};function qO(){let t=ae(),n=St(),e=Mn(n.index,t);return(Yi(e)?e:t)[Ke]}var VC=(()=>{class t{static \u0275prov=V({token:t,providedIn:"root",factory:()=>null})}return t})();function BC(t){return t.debugInfo?.className||t.type.name||null}var vu={},Cu=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,vu,i);return r!==vu||e===vu?r:this.parentInjector.get(n,e,i)}};function Sv(t){return qu(t)?Array.isArray(t)||!(t instanceof Map)&&Symbol.iterator in t:!1}function HC(t,n){if(Array.isArray(t))for(let e=0;e<t.length;e++)n(t[e]);else{let e=t[Symbol.iterator](),i;for(;!(i=e.next()).done;)n(i.value)}}function qu(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function GO(t,n,e){return t[n]=e}function bi(t,n,e){if(e===_n)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function Ao(t,n,e){return function i(r){let o=i.__ngNativeEl__;o!==void 0&&HR(r,o);let s=Qi(t)?Mn(t.index,n):n;wv(s,5);let a=n[pt],c=r0(n,a,e,r),l=i.__ngNextListenerFn__;for(;l;)c=r0(n,a,l,r)&&c,l=l.__ngNextListenerFn__;return c}}function r0(t,n,e,i){let r=ie(null);try{return qe(Le.OutputStart,n,e),e(i)!==!1}catch(o){return _O(t,o),!1}finally{qe(Le.OutputEnd,n,e),ie(r)}}function Cv(t,n,e,i,r,o,s,a){let c=Os(t),l=!1,d=null;if(!i&&c&&(d=KO(n,e,o,t.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,l=!0}else{let f=gn(t,e),h=i?i(f):f;zR(e,h,o,a),i||(a.__ngNativeEl__=f);let m=r.listen(h,o,a);if(!WO(o)){let p=i?w=>i(Pt(w[t.index])):t.index;UC(p,n,e,o,a,m,!1)}}return l}function WO(t){return t.startsWith("animation")||t.startsWith("transition")}function KO(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===e&&r[o+1]===i){let a=n[Rs],c=r[o+2];return a&&a.length>c?a[c]:null}typeof s=="string"&&(o+=2)}return null}function UC(t,n,e,i,r,o,s){let a=n.firstCreatePass?Op(n):null,c=Ap(e),l=c.length;c.push(r,o),a&&a.push(i,t,l,(l+1)*(s?-1:1))}function o0(t,n,e,i,r){let o=null,s=null,a=null,c=!1,l=t.directiveToIndex.get(e.type);if(typeof l=="number"?o=l:[o,s,a]=l,s!==null&&a!==null&&t.hostDirectiveOutputs&&Object.hasOwn(t.hostDirectiveOutputs,i)){let d=t.hostDirectiveOutputs[i];for(let f=0;f<d.length;f+=2){let h=d[f];if(h>=s&&h<=a)c=!0,Du(t,n,h,d[f+1],i,r);else if(h>a)break}}return Object.hasOwn(e.outputs,i)&&(c=!0,Du(t,n,o,i,i,r)),c}function Du(t,n,e,i,r,o){let s=n[e],a=n[J],l=a.data[e].outputs[i],f=s[l].subscribe(o);UC(t.index,a,n,r,o,f,!0)}function wi(){YO()}function YO(){let t=ae(),n=et(),e=St();if(n.firstCreatePass&&ZO(n,e),e.controlDirectiveIndex===-1)return;kn("NgSignalForms");let i=t[e.controlDirectiveIndex];n.data[e.controlDirectiveIndex].controlDef.create(i,new xu(t,n,e))}function Si(){QO()}function QO(){let t=ae(),n=et(),e=Ls();if(e.controlDirectiveIndex===-1)return;let i=n.data[e.controlDirectiveIndex].controlDef,r=t[e.controlDirectiveIndex];i.update(r,new xu(t,n,e))}var xu=class{lView;tView;tNode;hasPassThrough;constructor(n,e,i){this.lView=n,this.tView=e,this.tNode=i,this.hasPassThrough=!!(i.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get nativeElement(){return gn(this.tNode,this.lView)}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(n,e){let i=this.tView.data[this.tNode.customControlIndex];o0(this.tNode,this.lView,i,n,Ao(this.tNode,this.lView,e))}listenToCustomControlModel(n){let e=this.tNode.flags&1024?"valueChange":"checkedChange",i=this.tView.data[this.tNode.customControlIndex];o0(this.tNode,this.lView,i,e,Ao(this.tNode,this.lView,n))}listenToDom(n,e){Cv(this.tNode,this.tView,this.lView,void 0,this.lView[Ke],n,e,Ao(this.tNode,this.lView,e))}setInputOnDirectives(n,e){let i=this.tNode.inputs?.[n],r=this.tNode.hostDirectiveInputs?.[n];if(!i&&!r)return!1;let o=!1;if(i)for(let s of i){if(s===this.tNode.controlDirectiveIndex)continue;let a=this.tView.data[s],c=this.lView[s];Fo(a,c,n,e),o=!0}if(r)for(let s=0;s<r.length;s+=2){let a=r[s];if(a===this.tNode.controlDirectiveIndex)continue;let c=r[s+1],l=this.tView.data[a],d=this.lView[a];Fo(l,d,c,e),o=!0}return o}setCustomControlModelInput(n){let e=this.tView.data[this.tNode.customControlIndex],i=this.tNode.flags&1024?"value":"checked";bO(this.tNode,this.tView,this.lView,e,i,n)}customControlHasInput(n){if(this.tNode.customControlIndex===-1)return!1;let e=this.tView.data[this.tNode.customControlIndex];return(e.signalFormsInputPresence??=this._buildCustomControlInputCache(e))[n]===!0}_buildCustomControlInputCache(n){let e={};for(let i in n.inputs)e[i]=!0;if(n.hostDirectives!==null){let i=[...n.hostDirectives];for(;i.length>0;){let r=i.shift();if(typeof r!="function"){for(let s in r.inputs)e[r.inputs[s]]=!0;let o=s0(r.directive);o!==null&&i.push(...o);continue}for(let o of r()){if(typeof o=="function")continue;if(o.inputs)for(let a=0;a<o.inputs.length;a+=2){let c=o.inputs[a+1]||o.inputs[a];e[c]=!0}let s=s0(o.directive);s!==null&&i.push(...s)}}}return e}};function s0(t){return typeof t=="function"&&"\u0275dir"in t?t.\u0275dir.hostDirectives??null:null}function ZO(t,n,e){for(let r=n.directiveStart;r<n.directiveEnd;r++)if(t.data[r].controlDef){n.controlDirectiveIndex=r;break}if(n.controlDirectiveIndex===-1)return;let i=t.data[n.controlDirectiveIndex].controlDef;if(i.passThroughInput&&(n.inputs?.[i.passThroughInput]?.length??0)>1){n.flags|=4096;return}XO(t,n)}function XO(t,n){for(let e=n.directiveStart;e<n.directiveEnd;e++){let i=t.data[e];if(!(n.directiveToIndex&&!n.directiveToIndex.has(i.type))){if(a0(i,"value")){n.flags|=1024,n.customControlIndex=e;return}if(a0(i,"checked")){n.flags|=2048,n.customControlIndex=e;return}}}if(n.hostDirectiveInputs!==null&&n.hostDirectiveOutputs!==null&&n.directiveToIndex!==null){let e=(i,r)=>{let o=n.hostDirectiveInputs[i],s=n.hostDirectiveOutputs[i+"Change"];if(!o||!s)return!1;for(let a=0;a<o.length;a+=2){let c=o[a];for(let l=0;l<s.length;l+=2){let d=s[l];if(c===d)for(let f of n.directiveToIndex.values()){if(!Array.isArray(f))continue;let[h,m,p]=f;if(c>=m&&c<=p)return n.flags|=r,n.customControlIndex=h,!0}}}return!1};if(e("value",1024)||e("checked",2048))return}}function a0(t,n){return JO(t,n)&&eF(t,n+"Change")}function JO(t,n){return n in t.inputs}function eF(t,n){return n in t.outputs}var Eg=Symbol("BINDING");var jo=new y("");function Eu(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let s=0;s<n.length;s++){let a=n[s];if(typeof a=="number")o=a;else if(o==1)r=Hd(r,a);else if(o==2){let c=a,l=n[++s];i=Hd(i,c+": "+l+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function Se(t,n=0){let e=ae();if(e===null)return M(t,n);let i=St();return O0(i,e,Ft(t),n)}function Vo(){let t="invalid";throw new Error(t)}function zC(t,n,e,i,r){let o=i===null?null:{"":-1},s=r(t,e);if(s!==null){let a=s,c=null,l=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,c,l]=d.resolveHostDirectives(s);break}iF(t,n,e,a,o,c,l)}o!==null&&i!==null&&tF(e,i,o)}function tF(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new S(-301,!1);i.push(n[r],o)}}function nF(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function iF(t,n,e,i,r,o,s){let a=i.length,c=null;for(let h=0;h<a;h++){let m=i[h];c===null&&mi(m)&&(c=m,nF(t,e,h)),dg(wu(e,n),t,m.type)}lF(e,t.data.length,a),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let h=0;h<a;h++){let m=i[h];m.providersResolver&&m.providersResolver(m)}let l=!1,d=!1,f=bC(t,n,a,null);a>0&&(e.directiveToIndex=new Map);for(let h=0;h<a;h++){let m=i[h];if(e.mergedAttrs=Hs(e.mergedAttrs,m.hostAttrs),oF(t,e,n,f,m),cF(f,m,r),s!==null&&s.has(m)){let[w,E]=s.get(m);e.directiveToIndex.set(m.type,[f,w+e.directiveStart,E+e.directiveStart])}else(o===null||!o.has(m))&&e.directiveToIndex.set(m.type,f);m.contentQueries!==null&&(e.flags|=4),(m.hostBindings!==null||m.hostAttrs!==null||m.hostVars!==0)&&(e.flags|=64);let p=m.type.prototype;!l&&(p.ngOnChanges||p.ngOnInit||p.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),l=!0),!d&&(p.ngOnChanges||p.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),f++}rF(t,e,o)}function rF(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))c0(0,n,r,i),c0(1,n,r,i),d0(n,i,!1);else{let o=e.get(r);l0(0,n,o,i),l0(1,n,o,i),d0(n,i,!0)}}}function c0(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(Object.hasOwn(r,o)){let s;t===0?s=n.inputs??={}:s=n.outputs??={},s[o]??=[],s[o].push(i),$C(n,o)}}function l0(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(Object.hasOwn(r,o)){let s=r[o],a;t===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),$C(n,s)}}function $C(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function d0(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||ov(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!e&&Object.hasOwn(r,c)){let l=r[c];for(let d of l)if(d===n){s??=[],s.push(c,i[a+1]);break}}else if(e&&Object.hasOwn(o,c)){let l=o[c];for(let d=0;d<l.length;d+=2)if(l[d]===n){s??=[],s.push(l[d+1],i[a+1]);break}}a+=2}t.initialInputs??=[],t.initialInputs.push(s)}function oF(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=yo(r.type,!0)),s=new Oo(o,mi(r),Se,null);t.blueprint[i]=s,e[i]=s,sF(t,n,i,bC(t,e,r.hostVars,_n),r)}function sF(t,n,e,i,r){let o=r.hostBindings;if(o){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~n.index;aF(s)!=a&&s.push(a),s.push(e,i,o)}}function aF(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function cF(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;mi(n)&&(e[""]=t)}}function lF(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function Dv(t,n,e,i,r,o,s,a){let c=n[J],l=c.consts,d=vn(l,s),f=Ws(c,t,e,i,d);return o&&zC(c,n,f,vn(l,a),r),f.mergedAttrs=Hs(f.mergedAttrs,f.attrs),f.attrs!==null&&Eu(f,f.attrs,!1),f.mergedAttrs!==null&&Eu(f,f.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,f),f}function xv(t,n){x0(t,n),Mp(n)&&t.queries.elementEnd(n)}function dF(t,n,e,i,r,o){let s=n.consts,a=vn(s,r),c=Ws(n,t,e,i,a);if(c.mergedAttrs=Hs(c.mergedAttrs,c.attrs),o!=null){let l=vn(s,o);c.localNames=[];for(let d=0;d<l.length;d+=2)c.localNames.push(l[d],-1)}return c.attrs!==null&&Eu(c,c.attrs,!1),c.mergedAttrs!==null&&Eu(c,c.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,c),c}var qC=typeof ShadowRoot<"u",uF=typeof Document<"u";function fF(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&Uu.SignalBased)!==0};return r&&(o.transform=r),o})}function hF(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function mF(t,n,e){let i=n instanceof He?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new Cu(e,i):e}function pF(t){let n=t.get(ct,null);if(n===null)throw new S(407,!1);let e=t.get(VC,null),i=t.get(li,null),r=t.get(Yn,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function gF(t,n){let e=GC(t);return iC(n,e,e==="svg"?Ns:e==="math"?Yd:null)}function vF(t){if((t&&"localName"in t&&typeof t.localName=="string"?t.localName:t?.tagName)?.toLowerCase()==="script")throw new S(905,!1)}function GC(t){return(t.selectors[0][0]||"div").toLowerCase()}var Po=class{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=fF(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=hF(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=RA(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,s){qe(Le.DynamicComponentStart);let a=ie(null);try{let c=this.componentDef,l=mF(c,r||this.ngModule,n),d=pF(l),f=d.tracingService;return f&&f.componentCreate?f.componentCreate(BC(c),()=>this.createComponentRef(d,l,e,i,o,s)):this.createComponentRef(d,l,e,i,o,s)}finally{ie(a)}}createComponentRef(n,e,i,r,o,s){let a=this.componentDef,c=yF(r,a,s,o),l=n.rendererFactory.createRenderer(null,a),d=r?aO(l,r,a.encapsulation,e):gF(a,l);vF(d);let f=e.get(jo,null),h=_F(d,()=>e.get(Q,null)??Kg());f&&f.addHost(h);let m=s?.some(u0)||o?.some(E=>typeof E!="function"&&E.bindings.some(u0)),p=mv(null,c,null,512|_C(a),null,null,n,l,e,null,K0(d,e,!0));f&&qC&&h instanceof ShadowRoot&&Jd(p,()=>{f.removeHost(h)}),p[at]=d,iu(p);let w=null;try{let E=Dv(at,p,2,"#host",()=>c.directiveRegistry,!0,0);sC(l,d,E),Us(d,p),zu(c,p,E),Qg(c,E,p),xv(c,E),i!==void 0&&wF(E,this.ngContentSelectors,i),w=Mn(E.index,p),p[pt]=w[pt],bv(c,p,null)}catch(E){throw w!==null&&fg(w),fg(p),E}finally{qe(Le.DynamicComponentEnd),ru()}return new Nu(this.componentType,p,!!m)}};function yF(t,n,e,i){let r=t?["ng-version","22.1.3"]:AA(n.selectors[0]),o=null,s=null,a=0;if(e)for(let d of e)a+=d[Eg].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let f=i[d];if(typeof f!="function")for(let h of f.bindings){a+=h[Eg].requiredVars;let m=d+1;h.create&&(h.targetIdx=m,(o??=[]).push(h)),h.update&&(h.targetIdx=m,(s??=[]).push(h))}}let c=[n];if(i)for(let d of i){let f=typeof d=="function"?d:d.type,h=vp(f);c.push(h)}return hv(0,null,bF(o,s),1,a,c,null,null,null,[r],null)}function _F(t,n){let e=t.getRootNode?.();return uF&&e instanceof Document?e.head:e&&qC&&e instanceof ShadowRoot?e:n().head}function bF(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function u0(t){let n=t[Eg].kind;return n==="input"||n==="twoWay"}var Nu=class extends jC{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=Qd(e[J],at),this.location=Gs(this._tNode,e),this.instance=Mn(this._tNode.index,e)[pt],this.hostView=this.changeDetectorRef=new Fr(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=_v(i,r[J],r,n,e);this.previousInputValues.set(n,e);let s=Mn(i.index,r);wv(s,1)}get injector(){return new Ar(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function wF(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var tt=(()=>{class t{static __NG_ELEMENT_ID__=SF}return t})();function SF(){let t=St();return WC(t,ae())}var Ng=class t extends tt{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return Gs(this._hostTNode,this._hostLView)}get injector(){return new Ar(this._hostTNode,this._hostLView)}get parentInjector(){let n=qg(this._hostTNode,this._hostLView);if(I0(n)){let e=bu(n,this._hostLView),i=_u(n),r=e[J].data[i+8];return new Ar(r,e)}else return new Ar(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=f0(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-st}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=Su(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(e||{},o,s);return this.insertImpl(a,r,zs(this._hostTNode,s)),a}createComponent(n,e,i,r,o,s,a){let c,l=e||{};c=l.index,i=l.injector,r=l.projectableNodes,o=l.environmentInjector||l.ngModuleRef,s=l.directives,a=l.bindings;let d=new Po(Ki(n)),f=i||this.parentInjector;if(!o&&d.ngModule==null){let I=this.parentInjector.get(He,null);I&&(o=I)}let h=Ki(d.componentType??{}),m=Su(this._lContainer,h?.id??null),p=m?.firstChild??null,w=d.create(f,r,p,o,s,a);return this.insertImpl(w.hostView,c,zs(this._hostTNode,m)),w}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(uS(r)){let a=this.indexOf(n);if(a!==-1)this.detach(a);else{let c=r[Dt],l=new t(c,c[zt],c[Dt]);l.detach(l.indexOf(n))}}let o=this._adjustIndex(e),s=this._lContainer;return Fc(s,r,o,i),n.attachToViewContainerRef(),bp(tg(s),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=f0(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=xc(this._lContainer,e);i&&(dc(tg(this._lContainer),e),Bu(i[J],i))}detach(n){let e=this._adjustIndex(n,-1),i=xc(this._lContainer,e);return i&&dc(tg(this._lContainer),e)!=null?new Fr(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function f0(t){return t[hc]}function tg(t){return t[hc]||(t[hc]=[])}function WC(t,n){let e,i=n[t.index];return In(i)?e=i:(e=AC(i,n,null,t),n[t.index]=e,pv(n,e)),DF(e,n,t,i),new Ng(e,t,n)}function CF(t,n){let e=t[Ke],i=e.createComment(""),r=gn(n,t),o=e.parentNode(r);return Ro(e,o,i,e.nextSibling(r),!1),i}var DF=NF,xF=()=>!1;function EF(t,n,e){return xF(t,n,e)}function NF(t,n,e,i){if(t[xo])return;let r;e.type&8?r=Pt(i):r=CF(n,e),t[xo]=r}var Ig=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Mg=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let s=e.getByIndex(o),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)Nv(n,e).matches!==null&&this.queries[e].setDirty()}},Iu=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=RF(n):this.predicate=n}},Tg=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},kg=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,IF(e,o)),this.matchTNodeWithReadOption(n,e,gu(e,n,o,!1,!1))}else i===yt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,gu(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===L||r===tt||r===yt&&e.type&4)this.addMatch(e.index,-2);else{let o=gu(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function IF(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function MF(t,n){return t.type&11?Gs(t,n):t.type&4?$u(t,n):null}function TF(t,n,e,i){return e===-1?MF(n,t):e===-2?kF(t,n,i):Sc(t,t[J],e,n)}function kF(t,n,e){if(e===L)return Gs(n,t);if(e===yt)return $u(n,t);if(e===tt)return WC(n,t)}function KC(t,n,e,i){let r=n[ui].queries[i];if(r.matches===null){let o=t.data,s=e.matches,a=[];for(let c=0;s!==null&&c<s.length;c+=2){let l=s[c];if(l<0)a.push(null);else{let d=o[l];a.push(TF(n,d,s[c+1],e.metadata.read))}}r.matches=a}return r.matches}function Rg(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let s=KC(t,n,r,e);for(let a=0;a<o.length;a+=2){let c=o[a];if(c>0)i.push(s[a/2]);else{let l=o[a+1],d=n[-c];for(let f=st;f<d.length;f++){let h=d[f];h[Ir]===h[Dt]&&Rg(h[J],h,l,i)}if(d[Eo]!==null){let f=d[Eo];for(let h=0;h<f.length;h++){let m=f[h];Rg(m[J],m,l,i)}}}}}return i}function Ev(t,n){return t[ui].queries[n].queryList}function YC(t,n,e){let i=new yn((e&4)===4);return mS(t,n,i,i.destroy),(n[ui]??=new Mg).queries.push(new Ig(i))-1}function QC(t,n,e){let i=et();return i.firstCreatePass&&(XC(i,new Iu(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),YC(i,ae(),n)}function ZC(t,n,e,i){let r=et();if(r.firstCreatePass){let o=St();XC(r,new Iu(n,e,i),o.index),AF(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return YC(r,ae(),e)}function RF(t){return t.split(",").map(n=>n.trim())}function XC(t,n,e){t.queries===null&&(t.queries=new Tg),t.queries.track(new kg(n,e))}function AF(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function Nv(t,n){return t.queries.getByIndex(n)}function JC(t,n){let e=t[J],i=Nv(e,n);return i.crossesNgTemplate?Rg(e,t,n,[]):KC(e,t,i,n)}function eD(t,n,e){let i,r=Ha(()=>{i._dirtyCounter();let o=OF(i,t);if(n&&o===void 0)throw new S(-951,!1);return o});return i=r[ft],i._dirtyCounter=U(0),i._flatValue=void 0,r}function Iv(t){return eD(!0,!1,t)}function Mv(t){return eD(!0,!0,t)}function tD(t,n){let e=t[ft];e._lView=ae(),e._queryIndex=n,e._queryList=Ev(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function OF(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[se]&4)return n?void 0:Ht;let r=Ev(e,i),o=JC(e,i);return r.reset(o,j0),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}function Ji(t){return!!t&&typeof t.then=="function"}function Tv(t){return!!t&&typeof t.subscribe=="function"}var yi=class{},Gu=class{};var Ec=class extends yi{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=Ww(n);this._bootstrapComponents=wA(o.bootstrap),this._r3Injector=Wp(n,e,[{provide:yi,useValue:this},...i],sc(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},Nc=class extends Gu{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new Ec(this.moduleType,n,[])}};function nD(t,n,e){return new Ec(t,n,e,!1)}var Mu=class extends yi{injector;instance=null;constructor(n){super();let e=new bo([...n.providers,{provide:yi,useValue:this}],n.parent||ks(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Ks(t,n,e=null){return new Mu({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var FF=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=Sp(!1,e.type),r=i.length>0?Ks([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=V({token:t,providedIn:"environment",factory:()=>new t(M(He))})}return t})();function T(t){return Mc(()=>{let n=iD(t),e=Y(_({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection!==Gg.Eager,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(FF).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Wn.Emulated,styles:t.styles||Ht,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&kn("NgStandalone"),rD(e);let i=t.dependencies;return e.directiveDefs=h0(i,PF),e.pipeDefs=h0(i,Kw),e.id=VF(e),e})}function PF(t){return Ki(t)||vp(t)}function F(t){return Mc(()=>({type:t.type,bootstrap:t.bootstrap||Ht,declarations:t.declarations||Ht,imports:t.imports||Ht,exports:t.exports||Ht,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function LF(t,n){if(t==null)return Er;let e={};for(let i in t)if(Object.hasOwn(t,i)){let r=t[i],o,s,a,c;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,c=r[3]||null):(o=r,s=r,a=Uu.None,c=null),e[o]=[i,a,c],n[o]=s}return e}function jF(t){if(t==null)return Er;let n={};for(let e in t)Object.hasOwn(t,e)&&(n[t[e]]=e);return n}function x(t){return Mc(()=>{let n=iD(t);return rD(n),n})}function iD(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||Er,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||Ht,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,signalFormsInputPresence:null,inputs:LF(t.inputs,n),outputs:jF(t.outputs),debugInfo:null}}function rD(t){t.features?.forEach(n=>n(t))}function h0(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function VF(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}var kv=new y("");function Ys(t){return Bn([{provide:kv,multi:!0,useValue:t}])}var Rv=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(kv,{optional:!0})??[];injector=u(de);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=wt(this.injector,r);if(Ji(o))e.push(o);else if(Tv(o)){let s=new Promise((a,c)=>{o.subscribe({complete:a,error:c})});e.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})(),Ag=new Map,BF=new Set;function Av(t){return ke(this,null,function*(){let n=Ag;Ag=new Map;let e=new Map;function i(o){let s=e.get(o);if(s)return s;let a=t(o).then(c=>HF(o,c));return e.set(o,a),a}let r=Array.from(n).map(a=>ke(null,[a],function*([o,s]){if(s.styleUrl&&s.styleUrls?.length)throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple");let c=[];s.templateUrl&&c.push(i(s.templateUrl).then(h=>{s.template=h}));let l=typeof s.styles=="string"?[s.styles]:s.styles??[];s.styles=l;let{styleUrl:d,styleUrls:f}=s;if(d&&(f=[d],s.styleUrl=void 0),f?.length){let h=Promise.all(f.map(m=>i(m))).then(m=>{l.push(...m),s.styleUrls=void 0});c.push(h)}yield Promise.all(c),BF.delete(o)}));yield Promise.all(r)})}function oD(){return Ag.size===0}function HF(t,n){return ke(this,null,function*(){if(typeof n=="string")return n;if(n.status!==void 0&&n.status!==200)throw new S(918,!1);return n.text()})}function Ov(t){return n=>{n.controlDef={create:(e,i)=>{e?.\u0275ngControlCreate(i)},update:(e,i)=>{e?.\u0275ngControlUpdate?.(i)},passThroughInput:t}}}function UF(t){return Object.getPrototypeOf(t.prototype).constructor}function re(t){let n=UF(t.type),e=!0,i=[t];for(;n&&n!==Function.prototype&&n!==Object.prototype;){let r,o=Object.hasOwn(n,cc)?n[cc]:void 0,s=Object.hasOwn(n,lc)?n[lc]:void 0;if(mi(t))r=o??s;else{if(o)throw new S(903,!1);r=s}if(r){if(e){i.push(r);let c=t;c.inputs=ng(t.inputs),c.declaredInputs=ng(t.declaredInputs),c.outputs=ng(t.outputs);let l=r.hostBindings;l&&WF(t,l);let d=r.viewQuery,f=r.contentQueries;if(d&&qF(t,d),f&&GF(t,f),zF(t,r),Gw(t.outputs,r.outputs),mi(r)&&r.data.animation){let h=t.data;h.animation=(h.animation||[]).concat(r.data.animation)}}let a=r.features;if(a)for(let c=0;c<a.length;c++){let l=a[c];l&&l.ngInherit&&l(t),l===re&&(e=!1)}}n=Object.getPrototypeOf(n)}$F(i)}function zF(t,n){for(let e in n.inputs){if(!Object.hasOwn(n.inputs,e)||Object.hasOwn(t.inputs,e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function $F(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=Hs(r.hostAttrs,e=Hs(e,r.hostAttrs))}}function ng(t){return t===Er?{}:t===Ht?[]:t}function qF(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function GF(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function WF(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function sD(t,n,e,i,r,o,s,a){if(e.firstCreatePass){t.mergedAttrs=Hs(t.mergedAttrs,t.attrs);let d=t.tView=hv(2,t,r,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}a&&(t.flags|=a),Ps(t,!1);let c=YF(e,n,t,i);ou()&&uv(e,n,c,t),Us(c,n);let l=AC(c,n,c,t);n[i+at]=l,pv(n,l),EF(l,t,n)}function KF(t,n,e,i,r,o,s,a,c,l,d){let f=e+at,h;return n.firstCreatePass?(h=Ws(n,f,4,s||null,a||null),eu()&&zC(n,t,h,vn(n.consts,l),gv),x0(n,h)):h=n.data[f],sD(h,t,n,e,i,r,o,c),Os(h)&&zu(n,t,h),l!=null&&Ac(t,h,d),h}function $s(t,n,e,i,r,o,s,a,c,l,d){let f=e+at,h;if(n.firstCreatePass){if(h=Ws(n,f,4,s||null,a||null),l!=null){let m=vn(n.consts,l);h.localNames=[];for(let p=0;p<m.length;p+=2)h.localNames.push(m[p],-1)}}else h=n.data[f];return sD(h,t,n,e,i,r,o,c),l!=null&&Ac(t,h,d),h}function je(t,n,e,i,r,o,s,a){let c=ae(),l=et(),d=vn(l.consts,o);return KF(c,l,t,n,e,i,r,d,void 0,s,a),je}function Wu(t,n,e,i,r,o,s,a){let c=ae(),l=et(),d=vn(l.consts,o);return $s(c,l,t,n,e,i,r,d,void 0,s,a),Wu}var YF=QF;function QF(t,n,e,i){return vc(!0),n[Ke].createComment("")}var Ku=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();var Yu=new y(""),Qs=new y(""),Fv=new y("USE_PENDING_TASKS",{providedIn:"root",factory:()=>typeof Zone>"u"}),Pc=(()=>{class t{_ngZone;registry;_isZoneStable=!0;_callbacks=[];_taskTrackingZone=null;_destroyRef;pendingTasksInternal=u(gi);_usePendingTasks=u(Fv);constructor(e,i,r){this._ngZone=e,this.registry=i,xp()&&(this._destroyRef=u(Je,{optional:!0})??void 0),Pv||(aD(r),r.addToWindow(i)),this._watchAngularEvents(),e.run(()=>{this._taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){let e=this._ngZone.onUnstable.subscribe({next:()=>{this._isZoneStable=!1}}),i,r;this._ngZone.runOutsideAngular(()=>{this._usePendingTasks&&(i=this.pendingTasksInternal.hasPendingTasksObservable.subscribe(()=>{this.isStable()&&this._ngZone.runOutsideAngular(()=>{this._runCallbacksIfReady()})})),r=this._ngZone.onStable.subscribe({next:()=>{O.assertNotInAngularZone(),queueMicrotask(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})}),this._destroyRef?.onDestroy(()=>{e.unsubscribe(),i?.unsubscribe(),r.unsubscribe()})}isStable(){return this._isZoneStable&&!this._ngZone.hasPendingMacrotasks&&(!this._usePendingTasks||!this.pendingTasksInternal.hasPendingTasks)}_runCallbacksIfReady(){if(this.isStable())queueMicrotask(()=>{for(;this._callbacks.length!==0;){let e=this._callbacks.pop();clearTimeout(e.timeoutId),e.doneCb()}});else{let e=this.getPendingTasks();this._callbacks=this._callbacks.filter(i=>i.updateCb&&i.updateCb(e)?(clearTimeout(i.timeoutId),!1):!0)}}getPendingTasks(){return this._taskTrackingZone?this._taskTrackingZone.macroTasks.map(e=>({source:e.source,creationLocation:e.creationLocation,data:e.data})):[]}addCallback(e,i,r){let o=-1;i&&i>0&&(o=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==o),e()},i)),this._callbacks.push({doneCb:e,timeoutId:o,updateCb:r})}whenStable(e,i,r){if(r&&!this._taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(e,i,r),this._runCallbacksIfReady()}registerApplication(e){this.registry.registerApplication(e,this)}unregisterApplication(e){this.registry.unregisterApplication(e)}findProviders(e,i,r){return[]}static \u0275fac=function(i){return new(i||t)(M(O),M(Lc),M(Qs))};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),Lc=(()=>{class t{_applications=new Map;registerApplication(e,i){this._applications.set(e,i)}unregisterApplication(e){this._applications.delete(e)}unregisterAllApplications(){this._applications.clear()}getTestability(e){return this._applications.get(e)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(e,i=!0){return Pv?.findTestabilityInTree(this,e,i)??null}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function aD(t){Pv=t}var Pv,jc=new y("");function cD(){Rm(()=>{let t="";throw new S(600,t)})}var ZF=10;function Lv(t,n){return Array.isArray(n)?n.reduce(Lv,t):_(_({},t),n)}var Ct=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(Tn);afterRenderManager=u(ju);zonelessEnabled=u(yc);rootEffectScheduler=u(cu);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new N;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(gi);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(le(e=>!e))}constructor(){u(Yn,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(He);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=de.NULL){return this._injector.get(O).run(()=>{if(qe(Le.BootstrapComponentStart),!this._injector.get(Rv).done){let I="";throw new S(405,I)}let a=Ki(e),c=this._injector.get(yi),l=new Po(a,c);this.componentTypes.push(e);let{hostElement:d,directives:f,bindings:h}=XF(i),m=d||l.selector,p=l.create(r,[],m,c.injector,f,h),w=p.location.nativeElement,E=p.injector.get(Yu,null);return E?.registerApplication(w),p.onDestroy(()=>{this.detachView(p.hostView),wc(this.components,p),E?.unregisterApplication(w)}),this._loadComponent(p),qe(Le.BootstrapComponentEnd,p),p})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){qe(Le.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Lu.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw qe(Le.ChangeDetectionEnd),new S(101,!1);let e=ie(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,ie(e),this.afterTick.next(),qe(Le.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(ct,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<ZF;){qe(Le.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{qe(Le.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!mc(r))continue;let o=i&&!this.zonelessEnabled?0:1;MC(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>mc(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;wc(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(jc,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>wc(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new S(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();function XF(t){return t===void 0||typeof t=="string"||t instanceof Element?{hostElement:t}:t}function wc(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function fe(t,n,e,i){let r=ae(),o=Mr();if(bi(r,o,n)){let s=et(),a=Ls();gO(a,r,t,n,e,i)}return fe}var Og=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let s=this.detach(i);this.attach(i,o),this.attach(r,s)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function ig(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function JF(t,n,e,i){let r,o,s=0,a=t.length-1,c=void 0;if(Array.isArray(n)){ie(i);let l=n.length-1;for(ie(null);s<=a&&s<=l;){let d=t.at(s),f=n[s],h=ig(s,d,s,f,e);if(h!==0){h<0&&t.updateValue(s,f),s++;continue}let m=t.at(a),p=n[l],w=ig(a,m,l,p,e);if(w!==0){w<0&&t.updateValue(a,p),a--,l--;continue}let E=e(s,d),I=e(a,m),k=e(s,f);if(Object.is(k,I)){let Z=e(l,p);Object.is(Z,E)?(t.swap(s,a),t.updateValue(a,p),l--,a--):t.move(a,s),t.updateValue(s,f),s++;continue}if(r??=new Tu,o??=p0(t,s,a,e),Fg(t,r,s,k))t.updateValue(s,f),s++,a++;else if(o.has(k))r.set(E,t.detach(s)),a--;else{let Z=t.create(s,n[s]);t.attach(s,Z),s++,a++}}for(;s<=l;)m0(t,r,e,s,n[s]),s++}else if(n!=null){ie(i);let l=n[Symbol.iterator]();ie(null);let d=l.next();for(;!d.done&&s<=a;){let f=t.at(s),h=d.value,m=ig(s,f,s,h,e);if(m!==0)m<0&&t.updateValue(s,h),s++,d=l.next();else{r??=new Tu,o??=p0(t,s,a,e);let p=e(s,h);if(Fg(t,r,s,p))t.updateValue(s,h),s++,a++,d=l.next();else if(!o.has(p))t.attach(s,t.create(s,h)),s++,a++,d=l.next();else{let w=e(s,f);r.set(w,t.detach(s)),a--}}}for(;!d.done;)m0(t,r,e,t.length,d.value),d=l.next()}for(;s<=a;)t.destroy(t.detach(a--));r?.forEach(l=>{t.destroy(l)})}function Fg(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function m0(t,n,e,i,r){if(Fg(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function p0(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var Tu=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function me(t,n,e,i,r,o,s,a){kn("NgControlFlow");let c=ae(),l=et(),d=vn(l.consts,o);return $s(c,l,t,n,e,i,r,d,256,s,a),jv}function jv(t,n,e,i,r,o,s,a){kn("NgControlFlow");let c=ae(),l=et(),d=vn(l.consts,o);return $s(c,l,t,n,e,i,r,d,512,s,a),jv}function pe(t,n){kn("NgControlFlow");let e=ae(),i=Mr(),r=e[i]!==_n?e[i]:-1,o=r!==-1?ku(e,at+r):void 0,s=0;if(bi(e,i,t)){let a=ie(null);try{if(o!==void 0&&FC(o,s),t!==-1){let c=at+t,l=ku(e,c),d=Vg(e[J],c),f=LC(l,d,e),h=Oc(e,d,n,{dehydratedView:f});Fc(l,h,s,zs(d,f))}}finally{ie(a)}}else if(o!==void 0){let a=OC(o,s);a!==void 0&&(a[pt]=n)}}var Pg=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-st}};function Bo(t){return t}var Lg=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function Ho(t,n,e,i,r,o,s,a,c,l,d,f,h){kn("NgControlFlow");let m=ae(),p=et(),w=c!==void 0,E=ae(),I=a?s.bind(E[Zt][pt]):s,k=new Lg(w,I);E[at+t]=k,$s(m,p,t+1,n,e,i,r,vn(p.consts,o),256),w&&$s(m,p,t+2,c,l,d,f,vn(p.consts,h),512)}var jg=class extends Og{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-st}at(n){return this.getLView(n)[pt].$implicit}attach(n,e){let i=e[So];this.needsIndexUpdate||=n!==this.length,Fc(this.lContainer,e,n,zs(this.templateTNode,i)),e1(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,t1(this.lContainer,n),n1(this.lContainer,n)}create(n,e){let i=Su(this.lContainer,this.templateTNode.tView.ssrId);return Oc(this.hostLView,this.templateTNode,new Pg(this.lContainer,e,n),{dehydratedView:i})}destroy(n){Bu(n[J],n)}updateValue(n,e){this.getLView(n)[pt].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[pt].$index=n}getLView(n){return i1(this.lContainer,n)}};function Uo(t){let n=ie(null),e=pi();try{let i=ae(),r=i[J],o=i[e],s=e+1,a=ku(i,s);if(o.liveCollection===void 0){let l=Vg(r,s);o.liveCollection=new jg(a,i,l)}else o.liveCollection.reset();let c=o.liveCollection;if(JF(c,t,o.trackByFn,n),c.updateIndexes(),o.hasEmptyBlock){let l=Mr(),d=c.length===0;if(bi(i,l,d)){let f=e+2,h=ku(i,f);if(d){let m=Vg(r,f),p=LC(h,m,i),w=Oc(i,m,void 0,{dehydratedView:p});Fc(h,w,0,zs(m,p))}else r.firstUpdatePass&&HO(h),FC(h,0)}}}finally{ie(n)}}function ku(t,n){return t[n]}function e1(t,n){if(t.length<=st)return;let e=st+n,i=t[e],r=i?i[hi]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[di];BA(o,r),Or.delete(i[fi]),r.detachedLeaveAnimationFns=void 0}}function t1(t,n){if(t.length<=st)return;let e=st+n,i=t[e],r=i?i[hi]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function n1(t,n){return xc(t,n)}function i1(t,n){return OC(t,n)}function Vg(t,n){return Qd(t,n)}function q(t,n,e){let i=ae(),r=Mr();if(bi(i,r,n)){let o=et(),s=Ls();uO(s,i,t,n,i[Ke],e)}return q}function Bg(t,n,e,i,r){_v(n,t,e,r?"class":"style",i)}function b(t,n,e,i){let r=ae(),o=r[J],s=t+at,a=o.firstCreatePass?Dv(s,r,2,n,gv,eu(),e,i):o.data[s];if(Qi(a)){let c=r[Un].tracingService;if(c&&c.componentCreate){let l=o.data[a.directiveStart+a.componentOffset];return c.componentCreate(BC(l),()=>(g0(t,n,r,a,i),b))}}return g0(t,n,r,a,i),b}function g0(t,n,e,i,r){if(vv(i,e,t,n,lD),Os(i)){let o=e[J];zu(o,e,i),Qg(o,i,e)}r!=null&&Ac(e,i)}function C(){let t=et(),n=St(),e=yv(n);return t.firstCreatePass&&xv(t,e),Lp(e)&&jp(),Fp(),e.classesWithoutHost!=null&&CR(e)&&Bg(t,e,ae(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&DR(e)&&Bg(t,e,ae(),e.stylesWithoutHost,!1),C}function ee(t,n,e,i){return b(t,n,e,i),C(),ee}function nt(t,n,e,i){let r=ae(),o=r[J],s=t+at,a=o.firstCreatePass?dF(s,o,2,n,e,i):o.data[s];return vv(a,r,t,n,lD),i!=null&&Ac(r,a),nt}function lt(){let t=St(),n=yv(t);return Lp(n)&&jp(),Fp(),lt}function an(t,n,e,i){return nt(t,n,e,i),lt(),an}var lD=(t,n,e,i,r)=>(vc(!0),iC(n[Ke],i,Gp()));function Ci(t,n,e){let i=ae(),r=i[J],o=t+at,s=r.firstCreatePass?Dv(o,i,8,"ng-container",gv,eu(),n,e):r.data[o];if(vv(s,i,t,"ng-container",r1),Os(s)){let a=i[J];zu(a,i,s),Qg(a,s,i)}return e!=null&&Ac(i,s),Ci}function Di(){let t=et(),n=St(),e=yv(n);return t.firstCreatePass&&xv(t,e),Di}function qt(t,n,e){return Ci(t,n,e),Di(),qt}var r1=(t,n,e,i,r)=>(vc(!0),pA(n[Ke],""));function jt(){return ae()}function Xt(t,n,e){let i=ae(),r=Mr();if(bi(i,r,n)){let o=et(),s=Ls();CC(s,i,t,n,i[Ke],e)}return Xt}var Vc="en-US";var o1=Vc;function dD(t){typeof t=="string"&&(o1=t.toLowerCase().replace(/_/g,"-"))}function _e(t,n,e){let i=ae(),r=et(),o=St();return s1(r,i,i[Ke],o,t,n,e),_e}function Qu(t,n,e){let i=ae(),r=et(),o=St();return(o.type&3||e)&&Cv(o,r,i,e,i[Ke],t,n,Ao(o,i,n)),Qu}function s1(t,n,e,i,r,o,s){let a=!0,c=null;if((i.type&3||s)&&(c??=Ao(i,n,o),Cv(i,t,n,s,e,r,o,c)&&(a=!1)),a){let l=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let f=0;f<d.length;f+=2){let h=d[f],m=d[f+1];c??=Ao(i,n,o),Du(i,n,h,m,r,c)}if(l&&l.length)for(let f of l)c??=Ao(i,n,o),Du(i,n,f,r,r,c)}}function ce(t=1){return IS(t)}function a1(t,n){let e=null,i=NA(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?uC(t,o,!0):TA(i,o))return r}return e}function Ee(t){let n=ae()[Zt][zt];if(!n.projection){let e=t?t.length:1,i=n.projection=eS(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let s=t?a1(o,t):0;s!==null&&(r[s]?r[s].projectionNext=o:i[s]=o,r[s]=o)}o=o.next}}}function R(t,n=0,e,i,r,o){let s=ae(),a=et(),c=i?t+1:null;c!==null&&$s(s,a,c,i,r,o,null,e);let l=Ws(a,at+t,16,null,e||null);l.projection===null&&(l.projection=n),Hp();let f=!s[So]||Pp();s[Zt][zt].projection[l.projection]===null&&c!==null?c1(s,a,c):f&&!Ou(l)&&tO(a,s,l)}function c1(t,n,e){let i=at+e,r=n.data[i],o=t[i],s=Su(o,r.tView.ssrId),a=Oc(t,r,void 0,{dehydratedView:s});Fc(o,a,0,zs(r,s))}function dt(t,n,e,i){return ZC(t,n,e,i),dt}function Vt(t,n,e){return QC(t,n,e),Vt}function G(t){let n=ae(),e=et(),i=nu();pc(i+1);let r=Nv(e,i);if(t.dirty&&dS(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=JC(n,i);t.reset(o,j0),t.notifyOnChanges()}return!0}return!1}function W(){return Ev(ae(),nu())}function Zu(t,n,e,i,r){return tD(n,ZC(t,e,i,r)),Zu}function Xu(t,n,e,i){return tD(t,QC(n,e,i)),Xu}function Ju(t=1){pc(nu()+t)}function Rn(t){let n=yS();return lS(n,at+t)}function fu(t,n){return t<<17|n<<2}function Lo(t){return t>>17&32767}function l1(t){return(t&2)==2}function d1(t,n){return t&131071|n<<17}function Hg(t){return t|2}function qs(t){return(t&131068)>>2}function rg(t,n){return t&-131069|n<<2}function u1(t){return(t&1)===1}function Ug(t){return t|1}function f1(t,n,e,i,r,o){let s=o?n.classBindings:n.styleBindings,a=Lo(s),c=qs(s);t[i]=e;let l=!1,d;if(Array.isArray(e)){let f=e;d=f[1],(d===null||Ms(f,d)>0)&&(l=!0)}else d=e;if(r)if(c!==0){let h=Lo(t[a+1]);t[i+1]=fu(h,a),h!==0&&(t[h+1]=rg(t[h+1],i)),t[a+1]=d1(t[a+1],i)}else t[i+1]=fu(a,0),a!==0&&(t[a+1]=rg(t[a+1],i)),a=i;else t[i+1]=fu(c,0),a===0?a=i:t[c+1]=rg(t[c+1],i),c=i;l&&(t[i+1]=Hg(t[i+1])),v0(t,d,i,!0),v0(t,d,i,!1),h1(n,d,t,i,o),s=fu(a,c),o?n.classBindings=s:n.styleBindings=s}function h1(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&Ms(o,n)>=0&&(e[i+1]=Ug(e[i+1]))}function v0(t,n,e,i){let r=t[e+1],o=n===null,s=i?Lo(r):qs(r),a=!1;for(;s!==0&&(a===!1||o);){let c=t[s],l=t[s+1];m1(c,n)&&(a=!0,t[s+1]=i?Ug(l):Hg(l)),s=i?Lo(l):qs(l)}a&&(t[e+1]=i?Hg(r):Ug(r))}function m1(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?Ms(t,n)>=0:!1}var Gn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function p1(t){return t.substring(Gn.key,Gn.keyEnd)}function g1(t){return v1(t),uD(t,fD(t,0,Gn.textEnd))}function uD(t,n){let e=Gn.textEnd;return e===n?-1:(n=Gn.keyEnd=y1(t,Gn.key=n,e),fD(t,n,e))}function v1(t){Gn.key=0,Gn.keyEnd=0,Gn.value=0,Gn.valueEnd=0,Gn.textEnd=t.length}function fD(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function y1(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function zo(t,n,e){return hD(t,n,e,!1),zo}function K(t,n){return hD(t,n,null,!0),K}function bn(t){b1(E1,_1,t,!0)}function _1(t,n){for(let e=g1(n);e>=0;e=uD(n,e))Gd(t,p1(n),!0)}function hD(t,n,e,i){let r=ae(),o=et(),s=zp(2);if(o.firstUpdatePass&&pD(o,t,s,i),n!==_n&&bi(r,s,n)){let a=o.data[pi()];gD(o,a,r,r[Ke],t,r[s+1]=I1(n,e),i,s)}}function b1(t,n,e,i){let r=et(),o=zp(2);r.firstUpdatePass&&pD(r,null,o,i);let s=ae();if(e!==_n&&bi(s,o,e)){let a=r.data[pi()];if(vD(a,i)&&!mD(r,o)){let c=i?a.classesWithoutHost:a.stylesWithoutHost;c!==null&&(e=Hd(c,e||"")),Bg(r,a,s,e,i)}else N1(r,a,s,s[Ke],s[o+1],s[o+1]=x1(t,n,e),i,o)}}function mD(t,n){return n>=t.expandoStartIndex}function pD(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[pi()],s=mD(t,e);vD(o,i)&&n===null&&!s&&(n=!1),n=w1(r,o,n,i),f1(r,o,n,e,s,i)}}function w1(t,n,e,i){let r=DS(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=og(null,t,n,e,i),e=Ic(e,n.attrs,i),o=null);else{let s=n.directiveStylingLast;if(s===-1||t[s]!==r)if(e=og(r,t,n,e,i),o===null){let c=S1(t,n,i);c!==void 0&&Array.isArray(c)&&(c=og(null,t,n,c[1],i),c=Ic(c,n.attrs,i),C1(t,n,i,c))}else o=D1(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function S1(t,n,e){let i=e?n.classBindings:n.styleBindings;if(qs(i)!==0)return t[Lo(i)]}function C1(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[Lo(r)]=i}function D1(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let s=t[o].hostAttrs;i=Ic(i,s,e)}return Ic(i,n.attrs,e)}function og(t,n,e,i,r){let o=null,s=e.directiveEnd,a=e.directiveStylingLast;for(a===-1?a=e.directiveStart:a++;a<s&&(o=n[a],i=Ic(i,o.hostAttrs,r),o!==t);)a++;return t!==null&&(e.directiveStylingLast=a),i}function Ic(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let s=n[o];typeof s=="number"?r=s:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),Gd(t,s,e?!0:n[++o]))}return t===void 0?null:t}function x1(t,n,e){if(e==null||e==="")return Ht;let i=[],r=sn(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)Object.hasOwn(r,o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function E1(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&Gd(t,i,e)}function N1(t,n,e,i,r,o,s,a){r===_n&&(r=Ht);let c=0,l=0,d=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;d!==null||f!==null;){let h=c<r.length?r[c+1]:void 0,m=l<o.length?o[l+1]:void 0,p=null,w;d===f?(c+=2,l+=2,h!==m&&(p=f,w=m)):f===null||d!==null&&d<f?(c+=2,p=d):(l+=2,p=f,w=m),p!==null&&gD(t,n,e,i,p,w,s,a),d=c<r.length?r[c]:null,f=l<o.length?o[l]:null}}function gD(t,n,e,i,r,o,s,a){if(!(n.type&3))return;let c=t.data,l=c[a+1],d=u1(l)?y0(c,n,e,r,qs(l),s):void 0;if(!Ru(d)){Ru(o)||l1(l)&&(o=y0(c,null,e,r,a,s));let f=Tp(pi(),e);iO(i,s,f,r,o)}}function y0(t,n,e,i,r,o){let s=n===null,a;for(;r>0;){let c=t[r],l=Array.isArray(c),d=l?c[1]:c,f=d===null,h=e[r+1];h===_n&&(h=f?Ht:void 0);let m=f?Wd(h,i):d===i?h:void 0;if(l&&!Ru(m)&&(m=Wd(c,i)),Ru(m)&&(a=m,s))return a;let p=t[r+1];r=s?Lo(p):qs(p)}if(n!==null){let c=o?n.residualClasses:n.residualStyles;c!=null&&(a=Wd(c,i))}return a}function Ru(t){return t!==void 0}function I1(t,n){return t==null||t===""||(typeof n=="string"?t=sn(t)+n:typeof t=="object"&&(t=sc(sn(t)))),t}function vD(t,n){return(t.flags&(n?8:16))!==0}function H(t,n=""){let e=ae(),i=et(),r=t+at,o=i.firstCreatePass?Ws(i,r,1,n,null):i.data[r],s=M1(i,e,o,n);e[r]=s,ou()&&uv(i,e,s,o),Ps(o,!1)}var M1=(t,n,e,i)=>(vc(!0),hA(n[Ke],i));function T1(t,n,e,i=""){return bi(t,Mr(),e)?n+Is(e)+i:_n}function At(t){return cn("",t),At}function cn(t,n,e){let i=ae(),r=T1(i,t,n,e);return r!==_n&&k1(i,pi(),r),cn}function k1(t,n,e){let i=Tp(n,t);mA(t[Ke],i,e)}function Pr(t){return bi(ae(),Mr(),t)?Is(t):_n}function _0(t,n,e){let i=et();i.firstCreatePass&&yD(n,i.data,i.blueprint,mi(t),e)}function yD(t,n,e,i,r){if(t=Ft(t),Array.isArray(t))for(let o=0;o<t.length;o++)yD(t[o],n,e,i,r);else{let o=et(),s=ae(),a=St(),c=_o(t)?t:Ft(t.provide),l=Dp(t),d=a.providerIndexes&1048575,f=a.directiveStart,h=a.providerIndexes>>20;if(_o(t)||!t.multi){let m=new Oo(l,r,Se,null),p=ag(c,n,r?d:d+h,f);p===-1?(dg(wu(a,s),o,c),sg(o,t,n.length),n.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(m),s.push(m)):(e[p]=m,s[p]=m)}else{let m=ag(c,n,d+h,f),p=ag(c,n,d,d+h),w=m>=0&&e[m],E=p>=0&&e[p];if(r&&!E||!r&&!w){dg(wu(a,s),o,c);let I=O1(r?A1:R1,e.length,r,i,l,t);!r&&E&&(e[p].providerFactory=I),sg(o,t,n.length,0),n.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(I),s.push(I)}else{let I=_D(e[r?p:m],l,!r&&i);sg(o,t,m>-1?m:p,I)}!r&&i&&E&&e[p].componentProviders++}}}function sg(t,n,e,i){let r=_o(n),o=oS(n);if(r||o){let c=(o?Ft(n.useClass):n).prototype.ngOnDestroy;if(c){let l=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=l.indexOf(e);d===-1?l.push(e,[i,c]):l[d+1].push(i,c)}else l.push(e,c)}}}function _D(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function ag(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function R1(t,n,e,i,r){return zg(this.multi,[])}function A1(t,n,e,i,r){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,c=Sc(i,i[J],this.providerFactory.index,r);s=c.slice(0,a),zg(o,s);for(let l=a;l<c.length;l++)s.push(c[l])}else s=[],zg(o,s);return s}function zg(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function O1(t,n,e,i,r,o){let s=new Oo(t,e,Se,null);return s.multi=[],s.index=n,s.componentProviders=0,_D(s,r,i&&!e),s}function he(t,n){return e=>{e.providersResolver=(i,r)=>_0(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>_0(i,r?r(n):n,!0))}}function Vv(t,n,e){return P1(ae(),_S(),t,n,e)}function F1(t,n){let e=t[n];return e===_n?void 0:e}function P1(t,n,e,i,r,o){let s=n+e;return bi(t,s,r)?GO(t,s+1,o?i.call(o,r):i(r)):F1(t,s+1)}function ef(t,n){return $u(t,n)}var hu=null;function bD(t){hu!==null&&(t.defaultEncapsulation!==hu.defaultEncapsulation||t.preserveWhitespaces!==hu.preserveWhitespaces)||(hu=t)}var wD=(()=>{class t{applicationErrorHandler=u(Tn);appRef=u(Ct);taskService=u(gi);ngZone=u(O);zonelessEnabled=u(yc);tracing=u(Yn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new ue;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(rc):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(Zp,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:case 2:{this.appRef.dirtyFlags|=2;break}case 3:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?RS:Kp;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(rc+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();function SD(){return[{provide:li,useExisting:wD},{provide:O,useClass:oc},{provide:yc,useValue:!0}]}var Bv=(()=>{class t{compileModuleSync(e){return new Nc(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})(),CD=new y("");function L1(){return typeof $localize<"u"&&$localize.locale||Vc}var tf=new y("",{factory:()=>u(tf,{optional:!0,skipSelf:!0})||L1()});function ze(t,n){return Ha(t,n?.equal)}function Ce(t){return lw(t)}var DD=class t extends Error{_brand;constructor(n){super(n)}static IDLE=new t("IDLE");static LOADING=new t("LOADING")},j1=t=>t;function nf(t,n){if(typeof t=="function"){let e=Lm(t,j1,n?.equal);return xD(e,n?.debugName,n?.set)}else{let e=Lm(t.source,t.computation,t.equal);return xD(e,t.debugName,t.set)}}function xD(t,n,e){let i=t[ft],r=t;if(e!==void 0){let o=s=>jm(i,s);r.set=s=>e(s,o),r.update=s=>e(s(Ce(t)),o)}else r.set=o=>jm(i,o),r.update=o=>cw(i,o);return r.asReadonly=su.bind(t),r}var FD=Symbol("InputSignalNode#UNSET"),Y1=Y(_({},Ua),{transformFn:void 0,applyValueToInputSignal(t,n){ao(t,n)}});function PD(t,n){let e=Object.create(Y1);e.value=t,e.transformFn=n?.transform;function i(){if(pr(e),e.value===FD){let r=null;throw new S(-950,r)}return e.value}return i[ft]=e,i}var An=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Tc(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}},LD=(()=>{let t=new y("");return t.__NG_ELEMENT_ID__=n=>{let e=St();if(e===null)throw new S(-204,!1);if(e.type&2)return e.value;if(n&8)return null;throw new S(-204,!1)},t})();function Zv(t){return Q1(t)?t.default:t}function Q1(t){return t&&typeof t=="object"&&"default"in t}function ED(t,n){return PD(t,n)}function Z1(t){return PD(FD,t)}var Gt=(ED.required=Z1,ED);function ND(t,n){return Iv(n)}function X1(t,n){return Mv(n)}var Hc=(ND.required=X1,ND);function ID(t,n){return Iv(n)}function J1(t,n){return Mv(n)}var jD=(ID.required=J1,ID);var VD=(()=>{class t{constructor(e){}static \u0275fac=function(i){return new(i||t)(M(Ct))};static \u0275mod=F({type:t});static \u0275inj=A({})}return t})();var eP=1e4;var PQ=eP-1e3;var Uv=class{supports(n){return Sv(n)}create(n){return new zv(n)}},tP=(t,n)=>n,zv=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(n){this._trackByFn=n||tP}forEachItem(n){let e;for(e=this._itHead;e!==null;e=e._next)n(e)}forEachOperation(n){let e=this._itHead,i=this._removalsHead,r=0,o=null;for(;e||i;){let s=!i||e&&e.currentIndex<MD(i,r,o)?e:i,a=MD(s,r,o),c=s.currentIndex;if(s===i)r--,i=i._nextRemoved;else if(e=e._next,s.previousIndex==null)r++;else{o||(o=[]);let l=a-r,d=c-r;if(l!=d){for(let h=0;h<l;h++){let m=h<o.length?o[h]:o[h]=0,p=m+h;d<=p&&p<l&&(o[h]=m+1)}let f=s.previousIndex;o[f]=d-l}}a!==c&&n(s,a,c)}}forEachPreviousItem(n){let e;for(e=this._previousItHead;e!==null;e=e._nextPrevious)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachMovedItem(n){let e;for(e=this._movesHead;e!==null;e=e._nextMoved)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}forEachIdentityChange(n){let e;for(e=this._identityChangesHead;e!==null;e=e._nextIdentityChange)n(e)}diff(n){if(n==null&&(n=[]),!Sv(n))throw new S(900,!1);return this.check(n)?this:null}onDestroy(){}check(n){this._reset();let e=this._itHead,i=!1,r,o,s;if(Array.isArray(n)){this.length=n.length;for(let a=0;a<this.length;a++)o=n[a],s=this._trackByFn(a,o),e===null||!Object.is(e.trackById,s)?(e=this._mismatch(e,o,s,a),i=!0):(i&&(e=this._verifyReinsertion(e,o,s,a)),Object.is(e.item,o)||this._addIdentityChange(e,o)),e=e._next}else r=0,HC(n,a=>{s=this._trackByFn(r,a),e===null||!Object.is(e.trackById,s)?(e=this._mismatch(e,a,s,r),i=!0):(i&&(e=this._verifyReinsertion(e,a,s,r)),Object.is(e.item,a)||this._addIdentityChange(e,a)),e=e._next,r++}),this.length=r;return this._truncate(e),this.collection=n,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let n;for(n=this._previousItHead=this._itHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._additionsHead;n!==null;n=n._nextAdded)n.previousIndex=n.currentIndex;for(this._additionsHead=this._additionsTail=null,n=this._movesHead;n!==null;n=n._nextMoved)n.previousIndex=n.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(n,e,i,r){let o;return n===null?o=this._itTail:(o=n._prev,this._remove(n)),n=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),n!==null?(Object.is(n.item,e)||this._addIdentityChange(n,e),this._reinsertAfter(n,o,r)):(n=this._linkedRecords===null?null:this._linkedRecords.get(i,r),n!==null?(Object.is(n.item,e)||this._addIdentityChange(n,e),this._moveAfter(n,o,r)):n=this._addAfter(new $v(e,i),o,r)),n}_verifyReinsertion(n,e,i,r){let o=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return o!==null?n=this._reinsertAfter(o,n._prev,r):n.currentIndex!=r&&(n.currentIndex=r,this._addToMoves(n,r)),n}_truncate(n){for(;n!==null;){let e=n._next;this._addToRemovals(this._unlink(n)),n=e}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(n,e,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(n);let r=n._prevRemoved,o=n._nextRemoved;return r===null?this._removalsHead=o:r._nextRemoved=o,o===null?this._removalsTail=r:o._prevRemoved=r,this._insertAfter(n,e,i),this._addToMoves(n,i),n}_moveAfter(n,e,i){return this._unlink(n),this._insertAfter(n,e,i),this._addToMoves(n,i),n}_addAfter(n,e,i){return this._insertAfter(n,e,i),this._additionsTail===null?this._additionsTail=this._additionsHead=n:this._additionsTail=this._additionsTail._nextAdded=n,n}_insertAfter(n,e,i){let r=e===null?this._itHead:e._next;return n._next=r,n._prev=e,r===null?this._itTail=n:r._prev=n,e===null?this._itHead=n:e._next=n,this._linkedRecords===null&&(this._linkedRecords=new rf),this._linkedRecords.put(n),n.currentIndex=i,n}_remove(n){return this._addToRemovals(this._unlink(n))}_unlink(n){this._linkedRecords!==null&&this._linkedRecords.remove(n);let e=n._prev,i=n._next;return e===null?this._itHead=i:e._next=i,i===null?this._itTail=e:i._prev=e,n}_addToMoves(n,e){return n.previousIndex===e||(this._movesTail===null?this._movesTail=this._movesHead=n:this._movesTail=this._movesTail._nextMoved=n),n}_addToRemovals(n){return this._unlinkedRecords===null&&(this._unlinkedRecords=new rf),this._unlinkedRecords.put(n),n.currentIndex=null,n._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=n,n._prevRemoved=null):(n._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=n),n}_addIdentityChange(n,e){return n.item=e,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=n:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=n,n}},$v=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(n,e){this.item=n,this.trackById=e}},qv=class{_head=null;_tail=null;add(n){this._head===null?(this._head=this._tail=n,n._nextDup=null,n._prevDup=null):(this._tail._nextDup=n,n._prevDup=this._tail,n._nextDup=null,this._tail=n)}get(n,e){let i;for(i=this._head;i!==null;i=i._nextDup)if((e===null||e<=i.currentIndex)&&Object.is(i.trackById,n))return i;return null}remove(n){let e=n._prevDup,i=n._nextDup;return e===null?this._head=i:e._nextDup=i,i===null?this._tail=e:i._prevDup=e,this._head===null}},rf=class{map=new Map;put(n){let e=n.trackById,i=this.map.get(e);i||(i=new qv,this.map.set(e,i)),i.add(n)}get(n,e){let i=n,r=this.map.get(i);return r?r.get(n,e):null}remove(n){let e=n.trackById;return this.map.get(e).remove(n)&&this.map.delete(e),n}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function MD(t,n,e){let i=t.previousIndex;if(i===null)return i;let r=0;return e&&i<e.length&&(r=e[i]),i+n+r}var Gv=class{supports(n){return n instanceof Map||qu(n)}create(){return new Wv}},Wv=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||qu(n)))throw new S(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(i,r)=>{if(e&&e.key===r)this._maybeAddToChanges(e,i),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(r,i);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let i=e;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let i=n._prev;return e._next=n,e._prev=i,n._prev=e,i&&(i._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let r=this._records.get(n);this._maybeAddToChanges(r,e);let o=r._prev,s=r._next;return o&&(o._next=s),s&&(s._prev=o),r._next=null,r._prev=null,r}let i=new Kv(n);return this._records.set(n,i),i.currentValue=e,this._addToAdditions(i),i}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(i=>e(n[i],i))}},Kv=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function TD(){return new $o([new Uv])}var $o=(()=>{class t{factories;static \u0275prov=V({token:t,providedIn:"root",factory:TD});constructor(e){this.factories=e}static create(e,i){if(i!=null){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=u(t,{optional:!0,skipSelf:!0});return t.create(e,i||TD())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i!=null)return i;throw new S(901,!1)}}return t})();function kD(){return new Xv([new Gv])}var Xv=(()=>{class t{static \u0275prov=V({token:t,providedIn:"root",factory:kD});factories;constructor(e){this.factories=e}static create(e,i){if(i){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=u(t,{optional:!0,skipSelf:!0});return t.create(e,i||kD())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i)return i;throw new S(901,!1)}}return t})(),Ze=(()=>{class t{static __NG_ELEMENT_ID__=nP}return t})();function nP(t){return iP(St(),ae(),(t&16)===16)}function iP(t,n,e){if(Qi(t)&&!e){let i=Mn(t.index,n);return new Fr(i,i)}else if(t.type&175){let i=n[Zt];return new Fr(i,n)}return null}function rP(t,n,e){let i=new Nc(e);return Promise.resolve(i)}function RD(t){for(let n=t.length-1;n>=0;n--)if(t[n]!==void 0)return t[n]}var of=new y(""),oP=new y("");function Bc(t){return!t.moduleRef}function sP(t){let n=Bc(t)?t.r3Injector:t.moduleRef.injector,e=n.get(O);return e.run(()=>{Bc(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(Tn),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),Bc(t)){let o=()=>n.destroy(),s=t.platformInjector.get(of);s.add(o),n.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>t.moduleRef.destroy(),s=t.platformInjector.get(of);s.add(o),t.moduleRef.onDestroy(()=>{wc(t.allPlatformModules,t.moduleRef),r.unsubscribe(),s.delete(o)})}return cP(i,e,()=>{let o=n.get(gi),s=o.add(),a=n.get(Rv);return a.runInitializers(),a.donePromise.then(()=>{let c=n.get(tf,Vc);if(dD(c||Vc),!n.get(oP,!0))return Bc(t)?n.get(Ct):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(Bc(t)){let d=n.get(Ct);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return BD?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(s)})})})}var BD;function AD(){BD=aP}function aP(t,n){let e=t.injector.get(Ct);if(t._bootstrapComponents.length>0)t._bootstrapComponents.forEach(i=>e.bootstrap(i));else if(t.instance.ngDoBootstrap)t.instance.ngDoBootstrap(e);else throw new S(-403,!1);n.push(t)}function cP(t,n,e){try{let i=e();return Ji(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var HD=(()=>{class t{_injector;_modules=[];_destroyListeners=[];_destroyed=!1;constructor(e){this._injector=e}bootstrapModuleFactory(e,i){let r=[SD(),...i?.applicationProviders??[],OS],o=nD(e.moduleType,this.injector,r);return AD(),sP({moduleRef:o,allPlatformModules:this._modules,platformInjector:this.injector})}bootstrapModule(e,i=[]){let r=Lv({},i);return AD(),rP(this.injector,r,e).then(o=>this.bootstrapModuleFactory(o,r))}onDestroy(e){this._destroyListeners.push(e)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new S(404,!1);this._modules.slice().forEach(i=>i.destroy()),this._destroyListeners.forEach(i=>i());let e=this._injector.get(of,null);e&&(e.forEach(i=>i()),e.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}static \u0275fac=function(i){return new(i||t)(M(de))};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();var Jv=null;function lP(t){if(ty())throw new S(400,!1);cD(),Jv=t;let n=t.get(HD);return fP(t),n}function ey(t,n,e=[]){let i=`Platform: ${n}`,r=new y(i);return(o=[])=>{let s=ty();if(!s){let a=[...e,...o,{provide:r,useValue:!0}];s=t?.(a)??lP(dP(a,i))}return uP(r)}}function dP(t=[],n){return de.create({name:n,providers:[{provide:fc,useValue:"platform"},{provide:of,useValue:new Set([()=>Jv=null])},...t]})}function uP(t){let n=ty();if(!n)throw new S(-401,!1);return n}function ty(){return Jv?.get(HD)??null}function fP(t){let n=t.get(au,null);wt(t,()=>{n?.forEach(e=>e())})}function P(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function xi(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var Hv=Symbol("NOT_SET"),UD=new Set,hP=Y(_({},Ua),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Hv,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Hv&&!ps(this))return this.signal;try{for(let r of this.cleanup??UD)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=Hi(this),i;try{i=this.userFn.apply(null,n)}finally{gr(this,e)}return(this.value===Hv||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),Yv=class extends Cc{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,s=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(Je),s),this.scheduler=r;for(let a of av){let c=e[a];if(c===void 0)continue;let l=Object.create(hP);l.sequence=this,l.phase=a,l.userFn=c,l.dirty=!0,l.signal=()=>(pr(l),l.value),l.signal[ft]=l,l.registerCleanupFn=d=>(l.cleanup??=new Set).add(d),this.nodes[a]=l,this.hooks[a]=d=>l.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??UD)e()}finally{vr(n)}}};function ny(t,n){let e=n?.injector??u(de),i=e.get(li),r=e.get(ju),o=e.get(Yn,null,{optional:!0});r.impl??=e.get(cv);let s=t;typeof s=="function"&&(s={mixedReadWrite:t});let a=e.get(js,null,{optional:!0}),c=new Yv(r.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,i,e,o?.snapshot(null));return r.impl.register(c),c}var zD=ey(null,"core",[]);function sf(t,n){let e=Ki(t),i=n.elementInjector||ks();return new Po(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}function $D(t){let n=Ki(t);if(!n)return null;let e=new Po(n);return{get selector(){return e.selector},get type(){return e.componentType},get inputs(){return e.inputs},get outputs(){return e.outputs},get ngContentSelectors(){return e.ngContentSelectors},get isStandalone(){return n.standalone},get isSignal(){return n.signals}}}function qD(){return!1}var GD=null;function wn(){return GD}function iy(t){GD??=t}var Uc=class{},er=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:()=>u(WD),providedIn:"platform"})}return t})(),ry=new y(""),WD=(()=>{class t extends er{_location;_history;_doc=u(Q);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return wn().getBaseHref(this._doc)}onPopState(e){let i=wn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=wn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function af(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function KD(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function Qn(t){return t&&t[0]!=="?"?`?${t}`:t}var Zn=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:()=>u(lf),providedIn:"root"})}return t})(),cf=new y(""),lf=(()=>{class t extends Zn{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(Q).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return af(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+Qn(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+Qn(o));this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+Qn(o));this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(M(er),M(cf,8))};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ei=(()=>{class t{_subject=new N;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=gP(KD(YD(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+Qn(i))}normalize(e){return t.stripTrailingSlash(pP(this._basePath,YD(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Qn(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Qn(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Qn;static joinWithSlash=af;static stripTrailingSlash=KD;static \u0275fac=function(i){return new(i||t)(M(Zn))};static \u0275prov=V({token:t,factory:()=>mP(),providedIn:"root"})}return t})();function mP(){return new Ei(M(Zn))}function pP(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function YD(t){return t.replace(/\/index\.html$/,"")}function gP(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var oy=(()=>{class t extends Zn{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(e){let i=af(this._baseHref,e);return i.length>0?"#"+i:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+Qn(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+Qn(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(M(er),M(cf,8))};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var df=class{$implicit;ngForOf;index;count;constructor(n,e,i,r){this.$implicit=n,this.ngForOf=e,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Lr=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,i,r){this._viewContainer=e,this._template=i,this._differs=r}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let i=this._viewContainer;e.forEachOperation((r,o,s)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new df(r.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)i.remove(o===null?void 0:o);else if(o!==null){let a=i.get(o);i.move(a,s),QD(a,r)}});for(let r=0,o=i.length;r<o;r++){let a=i.get(r).context;a.index=r,a.count=o,a.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);QD(o,r)})}static ngTemplateContextGuard(e,i){return!0}static \u0275fac=function(i){return new(i||t)(Se(tt),Se(yt),Se($o))};static \u0275dir=x({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function QD(t,n){t.context.$implicit=n.item}var qo=(()=>{class t{_viewContainer;_context=new uf;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,i){this._viewContainer=e,this._thenTemplateRef=i}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){ZD(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){ZD(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,i){return!0}static \u0275fac=function(i){return new(i||t)(Se(tt),Se(yt))};static \u0275dir=x({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),uf=class{$implicit=null;ngIf=null};function ZD(t,n){if(t&&!t.createEmbeddedView)throw new S(2020,!1)}var sy=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,i,r){this._ngEl=e,this._differs=i,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,i){let[r,o]=e.split("."),s=r.indexOf("-")===-1?void 0:Kn.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${i}${o}`:i,s):this._renderer.removeStyle(this._ngEl.nativeElement,r,s)}_applyChanges(e){e.forEachRemovedItem(i=>this._setStyle(i.key,null)),e.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),e.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}static \u0275fac=function(i){return new(i||t)(Se(L),Se(Xv),Se(Ue))};static \u0275dir=x({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),ay=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(de);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(Se(tt))};static \u0275dir=x({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ye]})}return t})();var cy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({})}return t})();function zc(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()!==n)continue;let s=o;try{s=decodeURIComponent(o)}catch(a){}return s.length>1&&s[0]==='"'&&s[s.length-1]==='"'&&(s=s.slice(1,-1)),s}return null}var vP=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})(),ly=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=M(vP),r},providedIn:"root"})}return t})();var uy="browser";function XD(t){return t===uy}var fy=(()=>{class t{static \u0275prov=V({token:t,providedIn:"root",factory:()=>new dy(u(Q),window)})}return t})(),dy=class{document;window;offset=()=>[0,0];constructor(n,e){this.document=n,this.window=e}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n,e){this.window.scrollTo(Y(_({},e),{left:n[0],top:n[1]}))}scrollToAnchor(n,e){let i=yP(this.document,n);i&&(this.scrollToElement(i,e),i.focus({preventScroll:!0}))}setHistoryScrollRestoration(n){try{this.window.history.scrollRestoration=n}catch(e){console.warn(on(2400,!1))}}scrollToElement(n,e){let i=n.getBoundingClientRect(),r=i.left+this.window.pageXOffset,o=i.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(Y(_({},e),{left:r-s[0],top:o-s[1]}))}};function yP(t,n){let e=t.getElementById(n)||t.getElementsByName(n)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let i=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let o=r.shadowRoot;if(o){let s=o.getElementById(n)||o.querySelector(`[name="${CSS.escape(n)}"]`);if(s)return s}r=i.nextNode()}}return null}var qc=class{_doc;constructor(n){this._doc=n}manager},ff=(()=>{class t extends qc{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(M(Q))};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),pf=new y(""),gy=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof ff));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof ff);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new S(-5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(M(pf),M(O))};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),hy="ng-app-id";function JD(t){for(let n of t)n.remove()}function ex(t,n){let e=n.createElement("style");return e.textContent=t,e}function _P(t,n,e,i){let r=t.head?.querySelectorAll(`style[${hy}="${n}"],link[${hy}="${n}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(hy),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function py(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var vy=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,_P(e,i,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,ex);i?.forEach(r=>this.addUsage(r,this.external,py))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(JD(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])JD(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,ex(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,py(i,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let i of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of i.elements)o.parentNode===e?o.remove():r.push(o);i.elements=r}}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(M(Q),M(Mo),M(Rr,8),M(To))};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),my={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},yy=/%COMP%/g;var nx="%COMP%",bP=`_nghost-${nx}`,wP=`_ngcontent-${nx}`,SP=!0,CP=new y("",{factory:()=>SP}),DP=new y("");function xP(t){return wP.replace(yy,t)}function EP(t){return bP.replace(yy,t)}function ix(t,n){return n.map(e=>e.replace(yy,t))}var Kc=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,i,r,o,s,a,c=null,l=null,d=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=c,this.tracingService=l,this.cssVarNamespace=d??"",this.defaultRenderer=new Gc(e,s,a,this.tracingService,this.cssVarNamespace)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof mf?r.applyToHost(e):r instanceof Wc&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case Wn.Emulated:o=new mf(c,l,i,this.appId,d,s,a,f,this.cssVarNamespace);break;case Wn.ShadowDom:return new hf(c,e,i,s,a,this.nonce,f,this.cssVarNamespace,l);case Wn.ExperimentalIsolatedShadowDom:return new hf(c,e,i,s,a,this.nonce,f,this.cssVarNamespace);default:o=new Wc(c,l,i,d,s,a,f,this.cssVarNamespace);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(M(gy),M(jo),M(Mo),M(CP),M(Q),M(O),M(Rr),M(Yn,8),M(DP,8))};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),Gc=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r,o=""){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(my[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(tx(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){if(n){let r=tx(n)?n.content:n;if(i!=null&&i.parentNode!==r)throw new S(-5106,NP(i));r.insertBefore(e,i)}}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new S(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=my[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=my[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){let o=e.startsWith("--");o&&(e=e.replace("%NS%",this.cssVarNamespace)),o||r&(Kn.DashCase|Kn.Important)?n.style.setProperty(e,i,r&Kn.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){let r=e.startsWith("--");r&&(e=e.replace("%NS%",this.cssVarNamespace)),r||i&Kn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=wn().getGlobalEventTarget(this.doc,n),!n))throw new S(-5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function tx(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}function NP(t){let n=t.textContent?.slice(0,50);return n?`${t.nodeName} ("${n}")`:t.nodeName}var hf=class extends Gc{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,s,a,c,l){super(n,r,o,a,c),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=i.styles;d=ix(i.id,d).map(h=>h.replace(/%NS%/g,c));for(let h of d){let m=document.createElement("style");s&&m.setAttribute("nonce",s),m.textContent=h,this.shadowRoot.appendChild(m)}let f=i.getExternalStyles?.();if(f)for(let h of f){let m=py(h,r);s&&m.setAttribute("nonce",s),this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Wc=class extends Gc{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,s,a,c,l){super(n,o,s,a,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=i.styles,f=l?ix(l,d):d;this.styles=f.map(h=>h.replace(/%NS%/g,c)),this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Or.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},mf=class extends Wc{contentAttr;hostAttr;constructor(n,e,i,r,o,s,a,c,l){let d=r+"-"+i.id;super(n,e,i,o,s,a,c,l,d),this.contentAttr=xP(d),this.hostAttr=EP(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var gf=class t extends Uc{supportsDOMEvents=!0;static makeCurrent(){iy(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=IP();return e==null?null:MP(e)}resetBaseElement(){Yc=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return zc(document.cookie,n)}},Yc=null;function IP(){return Yc=Yc||document.head.querySelector("base"),Yc?Yc.getAttribute("href"):null}function MP(t){return new URL(t,document.baseURI).pathname}var vf=class{addToWindow(n){Ut.getAngularTestability=(i,r=!0)=>{let o=n.findTestabilityInTree(i,r);if(o==null)throw new S(5103,!1);return o},Ut.getAllAngularTestabilities=()=>n.getAllTestabilities(),Ut.getAllAngularRootElements=()=>n.getAllRootElements();let e=i=>{let r=Ut.getAllAngularTestabilities(),o=r.length,s=function(){o--,o==0&&i()};r.forEach(a=>{a.whenStable(s)})};Ut.frameworkStabilizers||(Ut.frameworkStabilizers=[]),Ut.frameworkStabilizers.push(e)}findTestabilityInTree(n,e,i){if(e==null)return null;let r=n.getTestability(e);return r??(i?wn().isShadowRoot(e)?this.findTestabilityInTree(n,e.host,!0):this.findTestabilityInTree(n,e.parentElement,!0):null)}},rx=["alt","control","meta","shift"],TP={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},kP={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},ox=(()=>{class t extends qc{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let s=t.parseEventName(i),a=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>wn().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),rx.forEach(l=>{let d=i.indexOf(l);d>-1&&(i.splice(d,1),s+=l+".")}),s+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=s,c}static matchEventFullKeyCode(e,i){let r=TP[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),rx.forEach(s=>{if(s!==r){let a=kP[s];a(e)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(M(Q))};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();function RP(){gf.makeCurrent()}function AP(){return new Qt}function OP(){return Wg(document),document}var FP=[{provide:To,useValue:uy},{provide:au,useValue:RP,multi:!0},{provide:Q,useFactory:OP}],_y=ey(zD,"browser",FP);var PP=[{provide:Qs,useClass:vf},{provide:Yu,useClass:Pc,deps:[O,Lc,Qs]},{provide:Pc,useClass:Pc,deps:[O,Lc,Qs]}],LP=[{provide:fc,useValue:"root"},{provide:Qt,useFactory:AP},{provide:pf,useClass:ff,multi:!0},{provide:pf,useClass:ox,multi:!0},Kc,{provide:jo,useClass:vy},{provide:vy,useExisting:jo},gy,{provide:ct,useExisting:Kc},[]],Qc=(()=>{class t{constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({providers:[...LP,...PP],imports:[cy,VD]})}return t})();var Mi=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init();for(let[e,i]of n.headers.entries())this.headers.set(e,i),this.normalizedNames.set(e,n.normalizedNames.get(e))}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=n.op==="a"?(this.headers.get(e)||[]).slice():[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=Array.isArray(o)?o:[o],a=this.headers.get(e);if(!a)return;a=a.filter(c=>s.indexOf(c)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var _f=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},bf=class{encodeKey(n){return sx(n)}encodeValue(n){return sx(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function jP(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,a]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],c=e.get(s)||[];c.push(a),e.set(s,c)}),e}var VP=/%(\d[a-f0-9])/gi,BP={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function sx(t){return encodeURIComponent(t).replace(VP,(n,e)=>BP[e]??n)}function yf(t){return`${t}`}var tr=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new bf,n.fromString){if(n.fromObject)throw new S(2805,!1);this.map=jP(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(yf):[yf(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[n,e]of this.cloneFrom.map.entries())this.map.set(n,e);this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=n.op==="a"?(this.map.get(n.param)||[]).slice():[];e.push(yf(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=(this.map.get(n.param)||[]).slice(),r=i.indexOf(yf(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null}}};function HP(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ax(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function cx(t){return typeof Blob<"u"&&t instanceof Blob}function lx(t){return typeof FormData<"u"&&t instanceof FormData}function UP(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Zc="Content-Type",wf="Accept",hx="text/plain",mx="application/json",px=`${mx}, ${hx}, */*`,Zs=class t{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(HP(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new S(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Mi,this.context??=new _f,!this.params)this.params=new tr,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e,c="",l=e.indexOf("#");l!==-1&&(c=e.substring(l),a=e.substring(0,l));let d=a.indexOf("?"),f=d===-1?"?":d<a.length-1?"&":"";this.urlWithParams=a+f+s+c}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ax(this.body)||cx(this.body)||lx(this.body)||UP(this.body)?this.body:this.body instanceof tr?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||lx(this.body)?null:cx(this.body)?this.body.type||null:ax(this.body)?null:typeof this.body=="string"?hx:this.body instanceof tr?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?mx:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,c=n.mode||this.mode,l=n.redirect||this.redirect,d=n.credentials||this.credentials,f=n.referrer??this.referrer,h=n.integrity||this.integrity,m=n.referrerPolicy||this.referrerPolicy,p=n.transferCache??this.transferCache,w=n.timeout??this.timeout,E=n.body!==void 0?n.body:this.body,I=n.withCredentials??this.withCredentials,k=n.reportProgress??this.reportProgress,Z=n.reportUploadProgress??this.reportUploadProgress,Re=n.reportDownloadProgress??this.reportDownloadProgress,It=n.headers||this.headers,Fe=n.params||this.params,Xe=n.context??this.context;return n.setHeaders!==void 0&&(It=Object.keys(n.setHeaders).reduce((it,Mt)=>it.set(Mt,n.setHeaders[Mt]),It)),n.setParams&&(Fe=Object.keys(n.setParams).reduce((it,Mt)=>it.set(Mt,n.setParams[Mt]),Fe)),new t(e,i,E,{params:Fe,headers:It,context:Xe,reportProgress:k,reportUploadProgress:Z,reportDownloadProgress:Re,responseType:r,withCredentials:I,transferCache:p,keepalive:o,cache:a,priority:s,timeout:w,mode:c,redirect:l,credentials:d,referrer:f,integrity:h,referrerPolicy:m})}},Ii=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Ii||{}),Xs=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new Mi,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Xc=class t extends Xs{constructor(n={}){super(n)}type=Ii.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Js=class t extends Xs{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Ii.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Ni=class extends Xs{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},gx=200,zP=204;var $P=/^\)\]\}',?\n/,rJ=1024*1024,vx=new y("",{factory:()=>null}),Sf=(()=>{class t{fetchImpl=u(wy,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=u(O);destroyRef=u(Je);maxResponseSize=u(vx);handle(e){return new X(i=>{let r=new AbortController,o=!1,s={next:c=>{c.type===Ii.Response&&(o=!0),i.next(c)},error:c=>{o=!0,i.error(c)},complete:()=>{o=!0,i.complete()}};this.doRequest(e,r.signal,s).then(Sy,c=>s.error(new Ni({error:c})));let a;return e.timeout&&(a=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{a!==void 0&&clearTimeout(a),!o&&!r.signal.aborted&&r.abort()}})}doRequest(e,i,r){return ke(this,null,function*(){let o=this.createRequestInit(e),s;try{let E=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,_({signal:i},o)));qP(E),r.next({type:Ii.Sent}),s=yield E}catch(E){r.error(new Ni({error:E,status:E.status??0,statusText:E.statusText,url:e.urlWithParams,headers:E.headers}));return}let a=new Mi(s.headers),c=s.statusText,l=s.url||e.urlWithParams,d=s.status,f=null,h=e.reportProgress||e.reportDownloadProgress;if(h&&r.next(new Xc({headers:a,status:d,statusText:c,url:l})),s.body){let E=s.headers.get(Zc)??"",I=s.headers.get("content-length"),k=I!==null?Number(I):NaN;this.maxResponseSize!==null&&Number.isFinite(k)&&k>this.maxResponseSize&&(yield s.body.cancel(),dx(this.maxResponseSize));let Z=[],Re=s.body.getReader(),It=0,Fe,Xe,it=typeof Zone<"u"&&Zone.current,Mt=!1;if(yield this.ngZone.runOutsideAngular(()=>ke(this,null,function*(){for(;;){if(this.destroyRef.destroyed){yield Re.cancel(),Mt=!0;break}let{done:fs,value:jn}=yield Re.read();if(fs)break;if(Z.push(jn),It+=jn.length,this.maxResponseSize!==null&&It>this.maxResponseSize&&(yield Re.cancel(),dx(this.maxResponseSize)),h){Xe=e.responseType==="text"?(Xe??"")+(Fe??=ux(E)).decode(jn,{stream:!0}):void 0;let hs=()=>r.next({type:Ii.DownloadProgress,total:Number.isFinite(k)?k:void 0,loaded:It,partialText:Xe});it?it.run(hs):hs()}}})),Mt){r.complete();return}let fr=this.concatChunks(Z,It);try{f=this.parseBody(e,fr,E,d)}catch(fs){r.error(new Ni({error:fs,headers:new Mi(s.headers),status:s.status,statusText:s.statusText,url:s.url||e.urlWithParams}));return}}d===0&&(d=f?gx:0);let m=d>=200&&d<300,p=s.redirected,w=s.type;m?(r.next(new Js({body:f,headers:a,status:d,statusText:c,url:l,redirected:p,responseType:w})),r.complete()):r.error(new Ni({error:f,headers:a,status:d,statusText:c,url:l,redirected:p,responseType:w}))})}parseBody(e,i,r,o){switch(e.responseType){case"json":let s=new TextDecoder().decode(i).replace($P,"");if(s==="")return null;try{return JSON.parse(s)}catch(a){if(o<200||o>=300)return s;throw a}case"text":return ux(r).decode(i);case"blob":return new Blob([i],{type:r});case"arraybuffer":return i.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new S(2824,!1);let i={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((o,s)=>i[o]=s.join(",")),e.headers.has(wf)||(i[wf]=px),!e.headers.has(Zc)){let o=e.detectContentTypeHeader();o!==null&&(i[Zc]=o)}return{body:e.serializeBody(),method:e.method,headers:i,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,i){let r=new Uint8Array(i),o=0;for(let s of e)r.set(s,o),o+=s.length;return r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})(),wy=class{};function Sy(){}function qP(t){t.then(Sy,Sy)}function dx(t){throw new S(-2825,!1)}var GP=/charset=\s*["']?([^;"'\s]+)["']?/i;function ux(t){let n=t.match(GP);if(n!==null)try{return new TextDecoder(n[1])}catch(e){}return new TextDecoder}var WP=new y("",{factory:()=>!0}),KP="XSRF-TOKEN",YP=new y("",{factory:()=>KP}),QP="X-XSRF-TOKEN",ZP=new y("",{factory:()=>QP}),XP=(()=>{class t{cookieName=u(YP);doc=u(Q);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=zc(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})(),yx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=M(XP),r},providedIn:"root"})}return t})();function _x(t,n){if(!u(WP)||t.method==="GET"||t.method==="HEAD")return n(t);try{let r=u(er).href,{origin:o}=new URL(r),{origin:s}=new URL(t.url,o);if(o!==s)return n(t)}catch(r){return n(t)}let e=u(yx).getToken(),i=u(ZP);return e!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,e)})),n(t)}function bx(t,n){return n(t)}function JP(t,n){return(e,i)=>n.intercept(e,{handle:r=>t(r,i)})}function eL(t,n,e){return(i,r)=>wt(e,()=>n(i,o=>t(o,r)))}var wx=new y(""),Dy=new y("",{factory:()=>[_x]}),Sx=new y(""),xy=new y("",{factory:()=>!0});function tL(){let t=null;return(n,e)=>{t===null&&(t=(u(wx,{optional:!0})??[]).reduceRight(JP,bx));let i=u(ko);if(u(xy)){let o=i.add();return t(n,e).pipe(Dr(o))}else return t(n,e)}}var Df=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=M(Sf),r},providedIn:"root"})}return t})();var Cf=(()=>{class t{backend;injector;chain=null;pendingTasks=u(ko);contributeToStability=u(xy);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let r=this.injector.get(xf,null,{skipSelf:!0}),o=r!==null&&this.backend===r,s=this.injector.get(Sx,[],o?{self:!0}:void 0),a=Array.from(new Set([...this.injector.get(Dy),...s]));this.chain=a.reduceRight((c,l)=>eL(c,l,this.injector),bx)}let i=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return Ce(()=>i(e,o=>this.backend.handle(o))).pipe(Dr(r))}else return Ce(()=>i(e,r=>this.backend.handle(r)))}static \u0275fac=function(i){return new(i||t)(M(Df),M(He))};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=M(Cf),r},providedIn:"root"})}return t})();function by(t,n){return _({body:n},t)}var Ef=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof Zs)o=e;else{let c;r.headers instanceof Mi?c=r.headers:c=new Mi(r.headers);let l;r.params&&(r.params instanceof tr?l=r.params:l=new tr({fromObject:r.params})),o=new Zs(e,i,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=$(o).pipe(Cr(c=>this.handler.handle(c)));if(e instanceof Zs||r.observe==="events")return s;let a=s.pipe(Ne(c=>c instanceof Js));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(le(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new S(2806,!1);return c.body}));case"blob":return a.pipe(le(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new S(2807,!1);return c.body}));case"text":return a.pipe(le(c=>{if(c.body!==null&&typeof c.body!="string")throw new S(2808,!1);return c.body}));default:return a.pipe(le(c=>c.body))}case"response":return a;default:throw new S(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new tr().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,by(r,i))}post(e,i,r={}){return this.request("POST",e,by(r,i))}put(e,i,r={}){return this.request("PUT",e,by(r,i))}static \u0275fac=function(i){return new(i||t)(M(xf))};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var nL=/^\)\]\}',?\n/;var Cy=(()=>{class t{xhrFactory;tracingService=u(Yn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new S(-2800,!1);let i=this.xhrFactory;return $(null).pipe(Qe(()=>new X(o=>{let s=i.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((k,Z)=>s.setRequestHeader(k,Z.join(","))),e.headers.has(wf)||s.setRequestHeader(wf,px),!e.headers.has(Zc)){let k=e.detectContentTypeHeader();k!==null&&s.setRequestHeader(Zc,k)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let k=e.responseType.toLowerCase();s.responseType=k!=="json"?k:"text"}let a=e.serializeBody(),c=null,l=()=>{if(c!==null)return c;let k=s.statusText||"OK",Z=new Mi(s.getAllResponseHeaders()),Re=s.responseURL||e.url;return c=new Xc({headers:Z,status:s.status,statusText:k,url:Re}),c},d=this.maybePropagateTrace(()=>{let{headers:k,status:Z,statusText:Re,url:It}=l(),Fe=null;Z!==zP&&(Fe=typeof s.response>"u"?s.responseText:s.response),Z===0&&(Z=Fe?gx:0);let Xe=Z>=200&&Z<300;if(e.responseType==="json"&&typeof Fe=="string"){let it=Fe;Fe=Fe.replace(nL,"");try{Fe=Fe!==""?JSON.parse(Fe):null}catch(Mt){Fe=it,Xe&&(Xe=!1,Fe={error:Mt,text:Fe})}}Xe?(o.next(new Js({body:Fe,headers:k,status:Z,statusText:Re,url:It||void 0})),o.complete()):o.error(new Ni({error:Fe,headers:k,status:Z,statusText:Re,url:It||void 0}))}),f=this.maybePropagateTrace(k=>{let{url:Z}=l(),Re=new Ni({error:k,status:s.status||0,statusText:s.statusText||"Unknown Error",url:Z||void 0});o.error(Re)}),h=f;e.timeout&&(h=this.maybePropagateTrace(k=>{let{url:Z}=l(),Re=new Ni({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:Z||void 0});o.error(Re)}));let m=!1,p=this.maybePropagateTrace(k=>{m||(o.next(l()),m=!0);let Z={type:Ii.DownloadProgress,loaded:k.loaded};k.lengthComputable&&(Z.total=k.total),e.responseType==="text"&&s.responseText&&(Z.partialText=s.responseText),o.next(Z)}),w=this.maybePropagateTrace(k=>{let Z={type:Ii.UploadProgress,loaded:k.loaded};k.lengthComputable&&(Z.total=k.total),o.next(Z)});s.addEventListener("load",d),s.addEventListener("error",f),s.addEventListener("timeout",h),s.addEventListener("abort",f);let E=e.reportProgress||e.reportUploadProgress,I=e.reportProgress||e.reportDownloadProgress;return I&&s.addEventListener("progress",p),E&&a!==null&&s.upload&&s.upload.addEventListener("progress",w),s.send(a),o.next({type:Ii.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",d),s.removeEventListener("timeout",h),I&&s.removeEventListener("progress",p),E&&a!==null&&s.upload&&s.upload.removeEventListener("progress",w),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(i){return new(i||t)(M(ly))};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Nf=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t[t.Xhr=7]="Xhr",t})(Nf||{});function Cx(t,n){return{\u0275kind:t,\u0275providers:n}}function Dx(...t){let n=[Ef,Sf,Cf,{provide:xf,useExisting:Cf},{provide:Df,useFactory:()=>u(Sf)},{provide:Dy,useValue:_x,multi:!0}];for(let e of t)n.push(...e.\u0275providers);return Bn(n)}var fx=new y("");function xx(){return Cx(Nf.LegacyInterceptors,[{provide:fx,useFactory:tL},{provide:Dy,useExisting:fx,multi:!0}])}function Ex(){return Cx(Nf.Xhr,[Cy,{provide:Df,useExisting:Cy}])}var Ey=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({providers:[Dx(xx(),Ex())]})}return t})();var Nx=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(M(Q))};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Jc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=M(rL),r},providedIn:"root"})}return t})(),rL=(()=>{class t extends Jc{_doc=u(Q);sanitize(e,i){if(i==null)return null;switch(e){case Ae.NONE:return i;case Ae.HTML:return _i(i,"HTML")?sn(i):Pu(this._doc,String(i)).toString();case Ae.STYLE:return _i(i,"Style")?sn(i):i;case Ae.SCRIPT:if(_i(i,"Script"))return sn(i);throw new S(5200,!1);case Ae.URL:return _i(i,"URL")?sn(i):kc(String(i));case Ae.RESOURCE_URL:if(_i(i,"ResourceURL"))return sn(i);throw new S(-5201,!1);default:throw new S(5202,!1)}}bypassSecurityTrustHtml(e){return Zg(e)}bypassSecurityTrustStyle(e){return Xg(e)}bypassSecurityTrustScript(e){return Jg(e)}bypassSecurityTrustUrl(e){return ev(e)}bypassSecurityTrustResourceUrl(e){return tv(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var ge="primary",ul=Symbol("RouteTitle"),Ry=class{params;constructor(n){this.params=n||{}}has(n){return Object.hasOwn(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Wo(t){return new Ry(t)}function Iy(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Fx(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let c={},l=t.slice(0,i.length);return Iy(i,l,c)?{consumed:l,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),s=i.slice(r+1);if(o.length+s.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let a={};return!Iy(o,t.slice(0,o.length),a)||!Iy(s,t.slice(t.length-s.length),a)?null:{consumed:t,posParams:a}}function Af(t){return new Promise((n,e)=>{t.pipe($i()).subscribe({next:i=>n(i),error:i=>e(i)})})}function oL(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Ti(t[e],n[e]))return!1;return!0}function Ti(t,n){let e=t?Ay(t):void 0,i=n?Ay(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Px(t[r],n[r]))return!1;return!0}function Ay(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Px(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function sL(t){return t.length>0?t[t.length-1]:null}function Yo(t){return mo(t)?t:Ji(t)?We(Promise.resolve(t)):$(t)}function Lx(t){return mo(t)?Af(t):Promise.resolve(t)}var aL={exact:Bx,subset:Hx},jx={exact:cL,subset:lL,ignored:()=>!0},Vx={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Oy={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Ix(t,n,e){return aL[e.paths](t.root,n.root,e.matrixParams)&&jx[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function cL(t,n){return Ti(t,n)}function Bx(t,n,e){if(!Go(t.segments,n.segments)||!Tf(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!Bx(t.children[i],n.children[i],e))return!1;return!0}function lL(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>Px(t[e],n[e]))}function Hx(t,n,e){return Ux(t,n,n.segments,e)}function Ux(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Go(r,e)||n.hasChildren()||!Tf(r,e,i))}else if(t.segments.length===e.length){if(!Go(t.segments,e)||!Tf(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!Hx(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Go(t.segments,r)||!Tf(t.segments,r,i)||!t.children[ge]?!1:Ux(t.children[ge],n,o,i)}}function Tf(t,n,e){return n.every((i,r)=>jx[e](t[r].parameters,i.parameters))}var Cn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new Ve([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Wo(this.queryParams),this._queryParamMap}toString(){return fL.serialize(this)}},Ve=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return kf(this)}},jr=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Wo(this.parameters),this._parameterMap}toString(){return $x(this)}};function dL(t,n){return Go(t,n)&&t.every((e,i)=>Ti(e.parameters,n[i].parameters))}function Go(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function uL(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===ge&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==ge&&(e=e.concat(n(r,i)))}),e}var Hr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:()=>new ir})}return t})(),ir=class{parse(n){let e=new Py(n);return new Cn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${el(n.root,!0)}`,i=pL(n.queryParams),r=typeof n.fragment=="string"?`#${hL(n.fragment)}`:"";return`${e}${i}${r}`}},fL=new ir;function kf(t){return t.segments.map(n=>$x(n)).join("/")}function el(t,n){if(!t.hasChildren())return kf(t);if(n){let e=t.children[ge]?el(t.children[ge],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==ge&&i.push(`${r}:${el(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=uL(t,(i,r)=>r===ge?[el(t.children[ge],!1)]:[`${r}:${el(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[ge]!=null?`${kf(t)}/${e[0]}`:`${kf(t)}/(${e.join("//")})`}}function zx(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function If(t){return zx(t).replace(/%3B/gi,";")}function hL(t){return encodeURI(t)}function Fy(t){return zx(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Rf(t){return decodeURIComponent(t)}function Mx(t){return Rf(t.replace(/\+/g,"%20"))}function $x(t){return`${Fy(t.path)}${mL(t.parameters)}`}function mL(t){return Object.entries(t).map(([n,e])=>`;${Fy(n)}=${Fy(e)}`).join("")}function pL(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${If(e)}=${If(r)}`).join("&"):`${If(e)}=${If(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var gL=/^[^\/()?;#]+/;function My(t){let n=t.match(gL);return n?n[0]:""}var vL=/^[^\/()?;=#]+/;function yL(t){let n=t.match(vL);return n?n[0]:""}var _L=/^[^=?&#]+/;function bL(t){let n=t.match(_L);return n?n[0]:""}var wL=/^[^&#]+/;function SL(t){let n=t.match(wL);return n?n[0]:""}var Py=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ve([],{}):new Ve([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new S(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[ge]=new Ve(e,i)),r}parseSegment(){let n=My(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new S(4009,!1);return this.capture(n),new jr(Rf(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=yL(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=My(this.remaining);r&&(i=r,this.capture(i))}n[Rf(e)]=Rf(i)}parseQueryParam(n){let e=bL(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let s=SL(this.remaining);s&&(i=s,this.capture(i))}let r=Mx(e),o=Mx(i);if(Object.hasOwn(n,r)){let s=n[r];Array.isArray(s)||(s=[s],n[r]=s),s.push(o)}else n[r]=o}parseParens(n,e){let i=Object.create(null);for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=My(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new S(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):n&&(s=ge);let a=this.parseChildren(e+1);i[s??ge]=Object.keys(a).length===1&&a[ge]?a[ge]:new Ve([],a),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new S(4011,!1)}};function qx(t){return t.segments.length>0?new Ve([],{[ge]:t}):t}function Gx(t){let n=Object.create(null);for(let[i,r]of Object.entries(t.children)){let o=Gx(r);if(i===ge&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))n[s]=a;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new Ve(t.segments,n);return CL(e)}function CL(t){if(t.numberOfChildren===1&&t.children[ge]){let n=t.children[ge];return new Ve(t.segments.concat(n.segments),n.children)}return t}function Vr(t){return t instanceof Cn}function Wx(t,n,e=null,i=null,r=new ir){let o=Kx(t);return Yx(o,n,e,i,r)}function Kx(t){let n;function e(o){let s={};for(let c of o.children){let l=e(c);s[c.outlet]=l}let a=new Ve(o.url,s);return o===t&&(n=a),a}let i=e(t.root),r=qx(i);return n??r}function Yx(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Ty(o,o,o,e,i,r);let s=DL(n);if(s.toRoot())return Ty(o,o,new Ve([],{}),e,i,r);let a=xL(s,o,t),c=a.processChildren?nl(a.segmentGroup,a.index,s.commands):Zx(a.segmentGroup,a.index,s.commands);return Ty(o,a.segmentGroup,c,e,i,r)}function Of(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function rl(t){return typeof t=="object"&&t!=null&&t.outlets}function Tx(t,n,e){t||="\u0275";let i=new Cn;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function Ty(t,n,e,i,r,o){let s={};for(let[l,d]of Object.entries(i??{}))s[l]=Array.isArray(d)?d.map(f=>Tx(l,f,o)):Tx(l,d,o);let a;t===n?a=e:a=Qx(t,n,e);let c=qx(Gx(a));return new Cn(c,s,r)}function Qx(t,n,e){let i=Object.create(null);return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=Qx(o,n,e)}),new Ve(t.segments,i)}var Ff=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&Of(i[0]))throw new S(4003,!1);let r=i.find(rl);if(r&&r!==sL(i))throw new S(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function DL(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Ff(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?e=!0:a===".."?n++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new Ff(e,n,i)}var ta=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function xL(t,n,e){if(t.isAbsolute)return new ta(n,!0,0);if(!e)return new ta(n,!1,NaN);if(e.parent===null)return new ta(e,!0,0);let i=Of(t.commands[0])?0:1,r=e.segments.length-1+i;return EL(e,r,t.numberOfDoubleDots)}function EL(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new S(4005,!1);r=i.segments.length}return new ta(i,!1,r-o)}function NL(t){return rl(t[0])?t[0].outlets:{[ge]:t}}function Zx(t,n,e){if(t??=new Ve([],{}),t.segments.length===0&&t.hasChildren())return nl(t,n,e);let i=IL(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new Ve(t.segments.slice(0,i.pathIndex),{});return o.children[ge]=new Ve(t.segments.slice(i.pathIndex),t.children),nl(o,0,r)}else return i.match&&r.length===0?new Ve(t.segments,{}):i.match&&!t.hasChildren()?Ly(t,n,e):i.match?nl(t,0,r):Ly(t,n,e)}function nl(t,n,e){if(e.length===0)return new Ve(t.segments,{});{let i=NL(e),r=Object.create(null);if(Object.keys(i).some(o=>o!==ge)&&t.children[ge]&&t.numberOfChildren===1&&t.children[ge].segments.length===0){let o=nl(t.children[ge],n,e);return new Ve(t.segments,o.children)}return Object.entries(i).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=Zx(t.children[o],n,s))}),Object.entries(t.children).forEach(([o,s])=>{i[o]===void 0&&(r[o]=s)}),new Ve(t.segments,r)}}function IL(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let s=t.segments[r],a=e[i];if(rl(a))break;let c=`${a}`,l=i<e.length-1?e[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!Rx(c,l,s))return o;i+=2}else{if(!Rx(c,{},s))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Ly(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(rl(o)){let c=ML(o.outlets);return new Ve(i,c)}if(r===0&&Of(e[0])){let c=t.segments[n];i.push(new jr(c.path,kx(e[0]))),r++;continue}let s=rl(o)?o.outlets[ge]:`${o}`,a=r<e.length-1?e[r+1]:null;s&&a&&Of(a)?(i.push(new jr(s,kx(a))),r+=2):(i.push(new jr(s,{})),r++)}return new Ve(i,{})}function ML(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=Ly(new Ve([],{}),0,i))}),n}function kx(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function Rx(t,n,e){return t==e.path&&Ti(n,e.parameters)}var na="imperative",Et=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(Et||{}),Dn=class{id;url;constructor(n,e){this.id=n,this.url=e}},Br=class extends Dn{type=Et.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Fn=class extends Dn{urlAfterRedirects;type=Et.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Wt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(Wt||{}),ra=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(ra||{}),On=class extends Dn{reason;code;type=Et.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Xx(t){return t instanceof On&&(t.code===Wt.Redirect||t.code===Wt.SupersededByNewNavigation)}var ki=class extends Dn{reason;code;type=Et.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},Ko=class extends Dn{error;target;type=Et.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ol=class extends Dn{urlAfterRedirects;state;type=Et.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Pf=class extends Dn{urlAfterRedirects;state;type=Et.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Lf=class extends Dn{urlAfterRedirects;state;shouldActivate;type=Et.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},jf=class extends Dn{urlAfterRedirects;state;type=Et.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Vf=class extends Dn{urlAfterRedirects;state;type=Et.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Bf=class{route;type=Et.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Hf=class{route;type=Et.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Uf=class{snapshot;type=Et.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},zf=class{snapshot;type=Et.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},$f=class{snapshot;type=Et.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},qf=class{snapshot;type=Et.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},oa=class{routerEvent;position;anchor;scrollBehavior;type=Et.Scroll;constructor(n,e,i,r){this.routerEvent=n,this.position=e,this.anchor=i,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},sa=class{},sl=class{},aa=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function TL(t){return!(t instanceof sa)&&!(t instanceof aa)&&!(t instanceof sl)}var Gf=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Qo(this.rootInjector)}},Qo=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new Gf(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(M(He))};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Wf=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=jy(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=jy(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Vy(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Vy(n,this._root).map(e=>e.value)}};function jy(t,n){if(t===n.value)return n;for(let e of n.children){let i=jy(t,e);if(i)return i}return null}function Vy(t,n){if(t===n.value)return[n];for(let e of n.children){let i=Vy(t,e);if(i.length)return i.unshift(n),i}return[]}var Sn=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function ea(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var al=class extends Wf{snapshot;constructor(n,e){super(n),this.snapshot=e,Yy(this,n)}toString(){return this.snapshot.toString()}};function Jx(t,n){let e=kL(t,n),i=new ht([new jr("",{})]),r=new ht({}),o=new ht({}),s=new ht({}),a=new ht(""),c=new rr(i,r,s,a,o,ge,t,e.root);return c.snapshot=e.root,new al(new Sn(c,[]),e)}function kL(t,n){let e={},i={},r={},s=new ca([],e,r,"",i,ge,t,null,{},n);return new cl("",new Sn(s,[]))}var rr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(n,e,i,r,o,s,a,c){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(le(l=>l[ul]))??$(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(le(n=>Wo(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(le(n=>Wo(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(n){this._futureSnapshot=n,this.pending?.set(!0)}},RL="always";function Ky(t,n,e){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:_(_({},n.params),t.params),data:_(_({},n.data),t.data),resolve:_(_(_(_({},t.data),n.data),r?.data),t._resolvedData)}:i={params:_({},t.params),data:_({},t.data),resolve:_(_({},t.data),t._resolvedData??{})},r&&tE(r)&&(i.resolve[ul]=r.title),i}var ca=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[ul]}constructor(n,e,i,r,o,s,a,c,l,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=c,this._resolve=l,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Wo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Wo(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},cl=class extends Wf{url;constructor(n,e){super(e),this.url=n,Yy(this,e)}toString(){return eE(this._root)}};function Yy(t,n){n.value._routerState=t,n.children.forEach(e=>Yy(t,e))}function eE(t){let n=t.children.length>0?` { ${t.children.map(eE).join(", ")} } `:"";return`${t.value}${n}`}function ky(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Ti(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Ti(n.params,e.params)||t.paramsSubject.next(e.params),oL(n.url,e.url)||t.urlSubject.next(e.url),Ti(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function By(t,n){let e=Ti(t.params,n.params)&&dL(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||By(t.parent,n.parent))}function tE(t){return typeof t.title=="string"||t.title===null}var nE=new y(""),fl=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ge;activateEvents=new te;deactivateEvents=new te;attachEvents=new te;detachEvents=new te;routerOutletData=Gt();parentContexts=u(Qo);location=u(tt);changeDetector=u(Ze);inputBinder=u(hl,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new S(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new S(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new S(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new S(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Hy(e,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ye]})}return t})(),Hy=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===rr?this.route:n===Qo?this.childContexts:n===nE?this.outletData:this.parent.get(n,e)}},hl=new y(""),iE=(()=>{class t{options;outletDataSubscriptions=new Map;outletSeenKeys=new Map;constructor(e){this.options=e,this.options.queryParams??=!0}bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e),this.outletSeenKeys.delete(e)}subscribeToRouteData(e){let{activatedRoute:i}=e,r=br([this.options.queryParams?i.queryParams:$({}),i.params,i.data]).pipe(Qe(([o,s,a],c)=>(a=_(_(_({},o),s),a),c===0?$(a):Promise.resolve(a)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(e);return}let s=$D(i.component);if(!s){this.unsubscribeFromRouteData(e);return}let a=this.outletSeenKeys.get(e);a||(a=new Set,this.outletSeenKeys.set(e,a));for(let l of Object.keys(o))a.add(l);let c=this.options.unmatchedInputBehavior??"alwaysUndefined";for(let{templateName:l}of s.inputs){let d=o[l];(d!==void 0||c==="alwaysUndefined"||a.has(l))&&e.activatedComponentRef.setInput(l,d)}});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(i){Vo()};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),Qy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&ee(0,"router-outlet")},dependencies:[fl],encapsulation:2,changeDetection:1})}return t})();function Zy(t){let n=t.children&&t.children.map(Zy),e=n?Y(_({},t),{children:n}):_({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==ge&&(e.component=Qy),e}function AL(t,n,e){let i=new Set,r=ll(t,n._root,e?e._root:void 0,i);return{newlyCreatedRoutes:i,state:new al(r,n)}}function ll(t,n,e,i){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let r=e.value;r._setPending(n.value);let o=OL(t,n,e,i);return new Sn(r,o)}else{if(t.shouldAttach(n.value)){let s=t.retrieve(n.value);if(s!==null){let a=s.route;return a.value._setPending(n.value),a.children=n.children.map(c=>ll(t,c,void 0,i)),a}}let r=FL(n.value);r._setPending(n.value),i.add(r);let o=n.children.map(s=>ll(t,s,void 0,i));return new Sn(r,o)}}function OL(t,n,e,i){return n.children.map(r=>{for(let o of e.children)if(t.shouldReuseRoute(r.value,o.value.snapshot))return ll(t,r,o,i);return ll(t,r,void 0,i)})}function FL(t){return new rr(new ht(t.url),new ht(t.params),new ht(t.queryParams),new ht(t.fragment),new ht(t.data),t.outlet,t.component,t)}var la=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},rE="ngNavigationCancelingError";function Kf(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=Vr(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=oE(!1,Wt.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function oE(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[rE]=!0,e.cancellationCode=n,e}function PL(t){return sE(t)&&Vr(t.url)}function sE(t){return!!t&&t[rE]}var Uy=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),ky(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=ea(e);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],i),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let s=i.getContext(r.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=ea(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(i&&i.outlet){let s=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=ea(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null),n.value._localInjector?.destroy()}activateChildRoutes(n,e,i){let r=ea(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new qf(o.value.snapshot))}),n.children.length&&this.forwardEvent(new zf(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(ky(r),r===o)if(r.component){let s=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let s=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),ky(a.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,i)}},Yf=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},ia=class{component;route;constructor(n,e){this.component=n,this.route=e}};function LL(t,n,e){let i=t._root,r=n?n._root:null;return tl(i,r,e,[i.value])}function jL(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function ua(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!hp(t)?t:n.get(t):i}function tl(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=ea(n);return t.children.forEach(s=>{VL(s,o[s.value.outlet],e,i.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>il(a,e.getContext(s),e,r)),r}function VL(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=n?n.value:null,a=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let c=BL(s,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Yf(i)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?tl(t,n,a?a.children:null,i,r):tl(t,n,e,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new ia(a.outlet.component,s))}else s&&il(n,a,e,r),r.canActivateChecks.push(new Yf(i)),o.component?tl(t,null,a?a.children:null,i,r):tl(t,null,e,i,r);return r}function BL(t,n,e){if(typeof e=="function")return wt(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!Go(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Go(t.url,n.url)||!Ti(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!By(t,n)||!Ti(t.queryParams,n.queryParams);default:return!By(t,n)}}function il(t,n,e,i){let r=ea(t),o=t.value;Object.entries(r).forEach(([s,a])=>{o.component?n?il(a,n.children.getContext(s),n.children,i):il(a,null,null,i):il(a,e?e.getContext(s):null,e,i)}),o.component?n&&n.outlet&&n.outlet.isActivated?i.canDeactivateChecks.push(new ia(n.outlet.component,o)):i.canDeactivateChecks.push(new ia(null,o)):i.canDeactivateChecks.push(new ia(null,o))}function ml(t){return typeof t=="function"}function HL(t){return typeof t=="boolean"}function UL(t){return t&&ml(t.canLoad)}function zL(t){return t&&ml(t.canActivate)}function $L(t){return t&&ml(t.canActivateChild)}function qL(t){return t&&ml(t.canDeactivate)}function GL(t){return t&&ml(t.canMatch)}function aE(t){return t instanceof po||t?.name==="EmptyError"}var Mf=Symbol("INITIAL_VALUE");function da(){return Qe(t=>br(t.map(n=>n.pipe(mt(1),kt(Mf)))).pipe(le(n=>{for(let e of n)if(e!==!0){if(e===Mf)return Mf;if(e===!1||WL(e))return e}return!0}),Ne(n=>n!==Mf),mt(1)))}function WL(t){return Vr(t)||t instanceof la}function cE(t){return t.aborted?$(void 0).pipe(mt(1)):new X(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function lE(t){return Pe(cE(t))}function KL(t){return Ot(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?$(Y(_({},n),{guardsResult:!0})):YL(o,e,i).pipe(Ot(s=>s&&HL(s)?QL(e,r,t):$(s)),le(s=>Y(_({},n),{guardsResult:s})))})}function YL(t,n,e){return We(t).pipe(Ot(i=>tj(i.component,i.route,e,n)),$i(i=>i!==!0,!0))}function QL(t,n,e){return We(n).pipe(Cr(i=>Cs(XL(i.route.parent,e),ZL(i.route,e),ej(t,i.path),JL(t,i.route))),$i(i=>i!==!0,!0))}function ZL(t,n){return t!==null&&n&&n(new $f(t)),$(!0)}function XL(t,n){return t!==null&&n&&n(new Uf(t)),$(!0)}function JL(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return $(!0);let i=e.map(r=>Qa(()=>{let o=n._environmentInjector,s=ua(r,o),a=zL(s)?s.canActivate(n,t):wt(o,()=>s(n,t));return Yo(a).pipe($i())}));return $(i).pipe(da())}function ej(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>jL(o)).filter(o=>o!==null).map(o=>Qa(()=>{let s=o.guards.map(a=>{let c=o.node._environmentInjector,l=ua(a,c),d=$L(l)?l.canActivateChild(e,t):wt(c,()=>l(e,t));return Yo(d).pipe($i())});return $(s).pipe(da())}));return $(r).pipe(da())}function tj(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return $(!0);let o=r.map(s=>{let a=n._environmentInjector,c=ua(s,a),l=qL(c)?c.canDeactivate(t,n,e,i):wt(a,()=>c(t,n,e,i));return Yo(l).pipe($i())});return $(o).pipe(da())}function nj(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return $(!0);let s=o.map(a=>{let c=ua(a,t),l=UL(c)?c.canLoad(n,e):wt(t,()=>c(n,e)),d=Yo(l);return r?d.pipe(lE(r)):d});return $(s).pipe(da(),dE(i))}function dE(t){return rd(Rt(n=>{if(typeof n!="boolean")throw Kf(t,n)}),le(n=>n===!0))}function ij(t,n,e,i,r,o){let s=n.canMatch;if(!s||s.length===0)return $(!0);let a=s.map(c=>{let l=ua(c,t),d=GL(l)?l.canMatch(n,e,r):wt(t,()=>l(n,e,r));return Yo(d).pipe(lE(o))});return $(a).pipe(da(),dE(i))}var nr=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},dl=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function rj(t){throw new S(4e3,!1)}function oj(t){throw oE(!1,Wt.GuardRejected)}var zy=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}lineralizeSegments(n,e){return ke(this,null,function*(){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[ge])throw rj(`${n.redirectTo}`);r=r.children[ge]}})}applyRedirectCommands(n,e,i,r,o){return ke(this,null,function*(){let s=yield sj(e,r,o);if(s instanceof Cn)throw new dl(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,i);if(s[0]==="/")throw new dl(a);return a})}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new Cn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);i[r]=e[a]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),s=Object.create(null);return Object.entries(e.children).forEach(([a,c])=>{s[a]=this.createSegmentGroup(n,c,i,r)}),new Ve(o,s)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new S(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function sj(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Af(Yo(wt(e,()=>i(n))))}function aj(t,n){return t.providers&&!t._injector&&(t._injector=Ks(t.providers,n,`Route: ${t.path}`)),t._injector??n}function Xn(t){return t.outlet||ge}function cj(t,n){let e=t.filter(i=>Xn(i)===n);return e.push(...t.filter(i=>Xn(i)!==n)),e}var $y={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function uE(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function lj(t,n,e,i,r,o,s){let a=fE(t,n,e);if(!a.matched)return $(a);let c=uE(o(a));return i=aj(n,i),ij(i,n,e,r,c,s).pipe(le(l=>l===!0?a:_({},$y)))}function fE(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?_({},$y):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||Fx)(e,t,n);if(!r)return _({},$y);let o={};Object.entries(r.posParams??{}).forEach(([a,c])=>{o[a]=c.path});let s=r.consumed.length>0?_(_({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function Ax(t,n,e,i,r){return e.length>0&&fj(t,e,i,r)?{segmentGroup:new Ve(n,uj(i,new Ve(e,t.children))),slicedSegments:[]}:e.length===0&&hj(t,e,i)?{segmentGroup:new Ve(t.segments,dj(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new Ve(t.segments,t.children),slicedSegments:e}}function dj(t,n,e,i){let r={};for(let o of e)if(Zf(t,n,o)&&!i[Xn(o)]){let s=new Ve([],{});r[Xn(o)]=s}return _(_({},i),r)}function uj(t,n){let e={};e[ge]=n;for(let i of t)if(i.path===""&&Xn(i)!==ge){let r=new Ve([],{});e[Xn(i)]=r}return e}function fj(t,n,e,i){return e.some(r=>!Zf(t,n,r)||!(Xn(r)!==ge)?!1:!(i!==void 0&&Xn(r)===i))}function hj(t,n,e){return e.some(i=>Zf(t,n,i))}function Zf(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function mj(t,n,e){return n.length===0&&!t.children[e]}var qy=class{};function pj(t,n,e,i,r,o,s,a){return ke(this,null,function*(){return new Gy(t,n,e,i,r,s,o,a).recognize()})}var gj=31,Gy=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,s,a,c){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=c,this.applyRedirects=new zy(this.urlSerializer,this.urlTree)}noMatchError(n){return new S(4002,`'${n.segmentGroup}'`)}recognize(){return ke(this,null,function*(){let n=Ax(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=yield this.match(n),r=new Sn(i,e),o=new cl("",r),s=Wx(i,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}})}match(n){return ke(this,null,function*(){let e=new ca([],Object.freeze({}),Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),ge,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,n,ge,e),rootSnapshot:e}}catch(i){if(i instanceof dl)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof nr?this.noMatchError(i):i}})}processSegmentGroup(n,e,i,r,o){return ke(this,null,function*(){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let s=yield this.processSegment(n,e,i,i.segments,r,!0,o);return s instanceof Sn?[s]:[]})}processChildren(n,e,i,r){return ke(this,null,function*(){let o=[];for(let c of Object.keys(i.children))c==="primary"?o.unshift(c):o.push(c);let s=[];for(let c of o){let l=i.children[c],d=cj(e,c),f=yield this.processSegmentGroup(n,d,l,c,r);s.push(...f)}let a=hE(s);return vj(a),a})}processSegment(n,e,i,r,o,s,a){return ke(this,null,function*(){for(let c of e)try{return yield this.processSegmentAgainstRoute(c._injector??n,e,c,i,r,o,s,a)}catch(l){if(l instanceof nr||aE(l))continue;throw l}if(mj(i,r,o))return new qy;throw new nr(i)})}processSegmentAgainstRoute(n,e,i,r,o,s,a,c){return ke(this,null,function*(){if(Xn(i)!==s&&(s===ge||!Zf(r,o,i)))throw new nr(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,s,c);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,s,c);throw new nr(r)})}expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,s,a){return ke(this,null,function*(){let{matched:c,parameters:l,consumedSegments:d,positionalParamSegments:f,remainingSegments:h}=fE(e,r,o);if(!c)throw new nr(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>gj&&(this.allowRedirects=!1));let m=this.createSnapshot(n,r,o,l,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let p=yield this.applyRedirects.applyRedirectCommands(d,r.redirectTo,f,uE(m),n),w=yield this.applyRedirects.lineralizeSegments(r,p);return this.processSegment(n,i,e,w.concat(h),s,!1,a)})}createSnapshot(n,e,i,r,o){let s=new ca(i,r,Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,_j(e),Xn(e),e.component??e._loadedComponent??null,e,bj(e),n),a=Ky(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}matchSegmentAgainstRoute(n,e,i,r,o,s){return ke(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=Z=>this.createSnapshot(n,i,Z.consumedSegments,Z.parameters,s),c=yield Af(lj(e,i,r,n,this.urlSerializer,a,this.abortSignal));if(i.path==="**"&&(e.children={}),!c?.matched)throw new nr(e);n=i._injector??n;let{routes:l}=yield this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:f,consumedSegments:h,remainingSegments:m}=c,p=this.createSnapshot(n,i,h,f,s),{segmentGroup:w,slicedSegments:E}=Ax(e,h,m,l,o);if(E.length===0&&w.hasChildren()){let Z=yield this.processChildren(d,l,w,p);return new Sn(p,Z)}if(l.length===0&&E.length===0)return new Sn(p,[]);let I=Xn(i)===o,k=yield this.processSegment(d,l,w,E,I?ge:o,!0,p);return new Sn(p,k instanceof Sn?[k]:[])})}getChildConfig(n,e,i){return ke(this,null,function*(){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield Af(nj(n,e,i,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw oj(e)}return{routes:[],injector:n}})}};function vj(t){t.sort((n,e)=>n.value.outlet===ge?-1:e.value.outlet===ge?1:n.value.outlet.localeCompare(e.value.outlet))}function yj(t){let n=t.value.routeConfig;return n&&n.path===""}function hE(t){let n=[],e=new Set;for(let i of t){if(!yj(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=hE(i.children);n.push(new Sn(i.value,r))}return n.filter(i=>!e.has(i))}function _j(t){return t.data||{}}function bj(t){return t.resolve||{}}function wj(t,n,e,i,r,o,s){return Ot(a=>ke(null,null,function*(){let{state:c,tree:l}=yield pj(t,n,e,i,a.extractedUrl,r,o,s);return Y(_({},a),{targetSnapshot:c,urlAfterRedirects:l})}))}function Sj(t){return Ot(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return $(n);let r=new Set(i.map(a=>a.route)),o=new Set;for(let a of r)if(!o.has(a))for(let c of mE(a))o.add(c);let s=0;return We(o).pipe(Cr(a=>r.has(a)?Cj(a,e,t):(a.data=Ky(a,a.parent,t).resolve,$(void 0))),Rt(()=>s++),kd(1),Ot(a=>s===o.size?$(n):ot))})}function mE(t){let n=t.children.map(e=>mE(e)).flat();return[t,...n]}function Cj(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!tE(i)&&(r[ul]=i.title),Qa(()=>(t.data=Ky(t,t.parent,e).resolve,Dj(r,t,n).pipe(le(o=>(t._resolvedData=o,t.data=_(_({},t.data),o),null)))))}function Dj(t,n,e){let i=Ay(t);if(i.length===0)return $({});let r={};return We(i).pipe(Ot(o=>xj(t[o],n,e).pipe($i(),Rt(s=>{if(s instanceof la)throw Kf(new ir,s);r[o]=s}))),kd(1),le(()=>r),Sr(o=>aE(o)?ot:Ya(o)))}function xj(t,n,e){let i=n._environmentInjector,r=ua(t,i),o=r.resolve?r.resolve(n,e):wt(i,()=>r(n,e));return Yo(o)}var pE=new y("");function Wy(t){return Qe(n=>{let e=t(n);return e?We(e).pipe(le(()=>n)):$(n)})}var Xy=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===ge);return i}getResolvedTitleForRoute(e){return e.data[ul]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:()=>u(gE)})}return t})(),gE=(()=>{class t extends Xy{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(M(Nx))};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ur=new y("",{factory:()=>({})}),fa=new y(""),Xf=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(Bv);loadComponent(e,i){return ke(this,null,function*(){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=ke(this,null,function*(){try{let o=yield Lx(wt(e,()=>i.loadComponent())),s=yield yE(Zv(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=s,s}finally{this.componentLoaders.delete(i)}});return this.componentLoaders.set(i,r),r})}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=ke(this,null,function*(){try{let o=yield vE(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}});return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();function vE(t,n,e,i){return ke(this,null,function*(){let r=yield Lx(wt(e,()=>t.loadChildren())),o=yield yE(Zv(r)),s;o instanceof Gu||Array.isArray(o)?s=o:s=yield n.compileModuleAsync(o),i&&i(t);let a,c,l=!1,d;return Array.isArray(s)?(c=s,l=!0):(a=s.create(e).injector,d=s,c=a.get(fa,[],{optional:!0,self:!0}).flat()),{routes:c.map(Zy),injector:a,factory:d}})}function yE(t){return ke(this,null,function*(){return t})}var Jf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:()=>u(Ej)})}return t})(),Ej=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})(),Jy=new y(""),e_=new y("");function _E(t,n,e){let i=t.get(e_),r=t.get(Q);if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(l=>setTimeout(l));let o,s=new Promise(l=>{o=l}),a=r.startViewTransition(()=>(o(),Nj(t)));a.updateCallbackDone.catch(l=>{}),a.ready.catch(l=>{}),a.finished.catch(l=>{});let{onViewTransitionCreated:c}=i;return c&&wt(t,()=>c({transition:a,from:n,to:e})),s}function Nj(t){return new Promise(n=>{Lt({read:()=>setTimeout(n)},{injector:t})})}var Ij=()=>{},t_=new y(""),eh=(()=>{class t{currentNavigation=U(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=U(null);events=new N;transitionAbortWithErrorSubject=new N;configLoader=u(Xf);environmentInjector=u(He);destroyRef=u(Je);urlSerializer=u(Hr);rootContexts=u(Qo);location=u(Ei);inputBindingEnabled=u(hl,{optional:!0})!==null;titleStrategy=u(Xy);options=u(Ur,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||RL;urlHandlingStrategy=u(Jf);createViewTransition=u(Jy,{optional:!0});navigationErrorHandler=u(t_,{optional:!0});routerResourcesFeature=u(pE,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>$(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Bf(r)),i=r=>this.events.next(new Hf(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;Ce(()=>{this.transitions?.next(Y(_({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new ht(null),this.transitions.pipe(Ne(i=>i!==null),Qe(i=>{let r=!0,o=!1,s=new AbortController,a=()=>!o&&this.currentTransition?.id===i.id;return $(i).pipe(Qe(c=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Wt.SupersededByNewNavigation),ot;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,targetBrowserUrl:typeof c.extras.browserUrl=="string"?this.urlSerializer.parse(c.extras.browserUrl):c.extras.browserUrl,trigger:c.source,extras:c.extras,previousNavigation:l?Y(_({},l),{previousNavigation:null}):null,abort:()=>s.abort(),routesRecognizeHandler:c.routesRecognizeHandler,beforeActivateHandler:c.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=c.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&f!=="reload")return this.events.next(new ki(c.id,this.urlSerializer.serialize(c.rawUrl),"",ra.IgnoredSameUrlNavigation)),c.resolve(!1),ot;if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return $(c).pipe(Qe(h=>(this.events.next(new Br(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),h.id!==this.navigationId?ot:Promise.resolve(h))),wj(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,s.signal),Rt(h=>{i.targetSnapshot=h.targetSnapshot,i.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation.update(m=>(m.finalUrl=h.urlAfterRedirects,m)),this.events.next(new sl)}),Qe(h=>We(i.routesRecognizeHandler.deferredHandle??$(void 0)).pipe(le(()=>h))),Rt(()=>{let h=new ol(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(h)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:h,extractedUrl:m,source:p,restoredState:w,extras:E}=c,I=new Br(h,this.urlSerializer.serialize(m),p,w);this.events.next(I);let k=Jx(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=Y(_({},c),{targetSnapshot:k,urlAfterRedirects:m,extras:Y(_({},E),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Z=>(Z.finalUrl=m,Z)),$(i)}else return this.events.next(new ki(c.id,this.urlSerializer.serialize(c.extractedUrl),"",ra.IgnoredByUrlHandlingStrategy)),c.resolve(!1),ot}),le(c=>{let l=new Pf(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);return this.events.next(l),this.currentTransition=i=Y(_({},c),{guards:LL(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),i}),KL(c=>this.events.next(c)),Qe(c=>{if(i.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!="boolean")throw Kf(this.urlSerializer,c.guardsResult);let l=new Lf(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);if(this.events.next(l),!a())return ot;if(!c.guardsResult)return this.cancelNavigationTransition(c,"",Wt.GuardRejected),ot;if(c.guards.canActivateChecks.length===0)return $(c);let d=new jf(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);if(this.events.next(d),!a())return ot;let f=!1;return $(c).pipe(Sj(this.paramsInheritanceStrategy),Rt({next:()=>{f=!0;let h=new Vf(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(h)},complete:()=>{f||this.cancelNavigationTransition(c,"",Wt.NoDataFromResolver)}}))}),Wy(c=>{let l=f=>{let h=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let m=f._environmentInjector;h.push(this.configLoader.loadComponent(m,f.routeConfig).then(p=>{f.component=p}))}for(let m of f.children)h.push(...l(m));return h},d=l(c.targetSnapshot.root);return d.length===0?$(c):We(Promise.all(d).then(()=>c))}),Qe(c=>{let{newlyCreatedRoutes:l,state:d}=AL(e.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);return this.currentTransition=i=c=Y(_({},c),{targetRouterState:d,newlyCreatedRoutes:l}),this.currentNavigation.update(f=>(f.targetRouterState=d,f)),$(c)}),this.routerResourcesFeature?.setupAndRunResources(s.signal)??(c=>c),Wy(()=>this.afterPreactivation()),Qe(()=>{let{currentSnapshot:c,targetSnapshot:l}=i,d=this.createViewTransition?.(this.environmentInjector,c.root,l.root);return d?We(d).pipe(le(()=>i)):$(i)}),mt(1),Qe(c=>{r=!1,this.events.next(new sa);let l=i.beforeActivateHandler.deferredHandle;return l?We(l.then(()=>c)):$(c)}),Rt(c=>{new Uy(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),c.newlyCreatedRoutes?.clear(),a()&&(bE(c.targetRouterState),o=!0,this.currentNavigation.update(l=>(l.abort=Ij,l)),this.lastSuccessfulNavigation.set(Ce(this.currentNavigation)),this.events.next(new Fn(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0))}),Pe(cE(s.signal).pipe(Ne(()=>!o&&r),Rt(()=>{this.cancelNavigationTransition(i,s.signal.reason+"",Wt.Aborted)}))),Rt({complete:()=>{o=!0}}),Pe(this.transitionAbortWithErrorSubject.pipe(Rt(c=>{throw c}))),Dr(()=>{s.abort(),o||this.cancelNavigationTransition(i,"",Wt.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Sr(c=>{if(o=!0,Ox(i),this.destroyed)return i.resolve(!1),ot;if(sE(c))this.events.next(new On(i.id,this.urlSerializer.serialize(i.extractedUrl),c.message,c.cancellationCode)),PL(c)?this.events.next(new aa(c.url,c.navigationBehaviorOptions)):i.resolve(!1);else{let l=new Ko(i.id,this.urlSerializer.serialize(i.extractedUrl),c,i.targetSnapshot??void 0);try{let d=wt(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(d instanceof la){let{message:f,cancellationCode:h}=Kf(this.urlSerializer,d);this.events.next(new On(i.id,this.urlSerializer.serialize(i.extractedUrl),f,h)),this.events.next(new aa(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(l),c}catch(d){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(d)}}return ot}))}))}cancelNavigationTransition(e,i,r){Ox(e);let o=new On(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=Ce(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();function Mj(t){return t!==na}function Ox(t){for(let n of t.newlyCreatedRoutes??[])n._localInjector?.destroy(),n._localInjector=void 0;bE(t.targetRouterState)}function bE(t){if(!t)return;let n=e=>{e.value.pending?.set(!1),e.children.forEach(n)};n(t._root)}var wE=new y("");var SE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:()=>u(Tj)})}return t})(),Qf=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},Tj=(()=>{class t extends Qf{static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})(),th=(()=>{class t{urlSerializer=u(Hr);options=u(Ur,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(Ei);urlHandlingStrategy=u(Jf);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Cn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,s=r??o;return s instanceof Cn?this.urlSerializer.serialize(s):s}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=Jx(null,u(He));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:()=>u(kj)})}return t})(),kj=(()=>{class t extends th{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof Br?this.updateStateMemento():e instanceof ki?this.commitTransition(i):e instanceof ol?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof sa?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof On&&!Xx(e)?this.restoreHistory(i):e instanceof Ko?this.restoreHistory(i,!0):e instanceof Fn&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:s,state:a}=r;if(this.location.isCurrentPathEqualTo(e)||s){let c=this.browserPageId,l=_(_({},a),this.generateNgRouterState(o,c,i));this.location.replaceState(e,"",l)}else{let c=_(_({},a),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",c)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?_({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):_({navigationId:e},this.routerUrlState(r))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();function nh(t,n){t.events.pipe(Ne(e=>e instanceof Fn||e instanceof On||e instanceof Ko||e instanceof ki),le(e=>e instanceof Fn||e instanceof ki?0:(e instanceof On?e.code===Wt.Redirect||e.code===Wt.SupersededByNewNavigation:!1)?2:1),Ne(e=>e!==2),mt(1)).subscribe(()=>{n()})}var Ri=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(Ku);stateManager=u(th);options=u(Ur,{optional:!0})||{};pendingTasks=u(gi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(eh);urlSerializer=u(Hr);location=u(Ei);urlHandlingStrategy=u(Jf);injector=u(He);_events=new N;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(SE);injectorCleanup=u(wE,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(fa,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(hl,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ue;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=Ce(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof On&&i.code!==Wt.Redirect&&i.code!==Wt.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Fn)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof aa){let s=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=_({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Mj(r.source)},s);this.scheduleNavigation(a,na,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}TL(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),na,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let s=r?.navigationId?r:null,a=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=Y(_({},o),{browserUrl:e})),r){let l=_({},r);delete l.navigationId,delete l.\u0275routerPageId,delete l.\u0275routerUrl,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(a);this.scheduleNavigation(c,i,s,o).catch(l=>{this.disposed||this.injector.get(Tn)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Ce(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Zy),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:s,d=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":d=_(_({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let h=r?r.snapshot:this.routerState.snapshot.root;f=Kx(h)}catch(h){(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return Yx(f,e,d,l??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=Vr(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,na,null,i)}navigate(e,i={skipLocationChange:!1}){return Rj(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(i){return this.console.warn(on(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=_({},Vx):i===!1?r=_({},Oy):r=_(_({},Oy),i),Vr(e))return Ix(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Ix(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,c,l;s?(a=s.resolve,c=s.reject,l=s.promise):l=new Promise((f,h)=>{a=f,c=h});let d=this.pendingTasks.add();return nh(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();function Rj(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new S(4008,!1)}var Oj=(()=>{class t{router=u(Ri);stateManager=u(th);fragment=U("");queryParams=U({});path=U("");serializer=u(Hr);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Fn&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Cn(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})(),ha=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=u(new An("href"),{optional:!0});reactiveHref=nf(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Ce(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Ce(this._target)}_target=U(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Ce(this._queryParams)}_queryParams=U(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Ce(this._fragment)}_fragment=U(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Ce(this._queryParamsHandling)}_queryParamsHandling=U(void 0);set state(e){this._state.set(e)}get state(){return Ce(this._state)}_state=U(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Ce(this._info)}_info=U(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Ce(this._relativeTo)}_relativeTo=U(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Ce(this._preserveFragment)}_preserveFragment=U(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Ce(this._skipLocationChange)}_skipLocationChange=U(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Ce(this._replaceUrl)}_replaceUrl=U(!1);browserUrl=Gt(void 0);isAnchorElement;onChanges=new N;applicationErrorHandler=u(Tn);options=u(Ur,{optional:!0});reactiveRouterState=u(Oj);constructor(e,i,r,o,s,a){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=s,this.locationStrategy=a;let c=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=U(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Vr(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,s){let a=this._urlTree();if(a===null||this.isAnchorElement&&(e!==0||i||r||o||s||typeof this.target=="string"&&this.target!="_self"))return!0;let c=this.browserUrl(),l=_({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},c!==void 0&&{browserUrl:c});return this.router.navigateByUrl(a,l)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=ze(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:Vr(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return Ce(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(Se(Ri),Se(rr),Tc("tabindex"),Se(Ue),Se(L),Se(Zn))};static \u0275dir=x({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&_e("click",function(s){return r.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),i&2&&fe("href",r.reactiveHref(),iv)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",P],skipLocationChange:[2,"skipLocationChange","skipLocationChange",P],replaceUrl:[2,"replaceUrl","replaceUrl",P],browserUrl:[1,"browserUrl"],routerLink:"routerLink"},features:[Ye]})}return t})();var pl=class{};var CE=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,i,r,o){this.router=e,this.injector=i,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(Ne(e=>e instanceof Fn),Cr(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,i){let r=[];for(let o of i){o.providers&&!o._injector&&(o._injector=Ks(o.providers,e,""));let s=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(s).injector);let a=o._loadedInjector??s;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(s,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(a,o.children??o._loadedRoutes))}return We(r).pipe(wr())}preloadConfig(e,i){return this.preloadingStrategy.preload(i,()=>{if(e.destroyed)return $(null);let r;i.loadChildren&&i.canLoad===void 0?r=We(this.loader.loadChildren(e,i)):r=$(null);let o=r.pipe(Ot(s=>s===null?$(void 0):(i._loadedRoutes=s.routes,i._loadedInjector=s.injector,i._loadedNgModuleFactory=s.factory,this.processRoutes(s.injector??e,s.routes))));if(i.loadComponent&&!i._loadedComponent){let s=this.loader.loadComponent(e,i);return We([o,s]).pipe(wr())}else return o})}static \u0275fac=function(i){return new(i||t)(M(Ri),M(He),M(pl),M(Xf))};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),DE=new y(""),Fj=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=na;restoredId=0;store={};isHydrating=u(Yg,{optional:!0})??!1;urlSerializer=u(Hr);zone=u(O);viewportScroller=u(fy);transitions=u(eh);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled",this.isHydrating&&u(Ct).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Br?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Fn?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof ki&&e.code===ra.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof oa)||e.scrollBehavior==="manual")return;let i={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],i):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,i):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,i){if(this.isHydrating)return;let r=Ce(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(()=>ke(this,null,function*(){yield new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new oa(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,i,r))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){Vo()};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();function Pj(){return u(Ri).routerState.root}function gl(t,n){return{\u0275kind:t,\u0275providers:n}}function Lj(){let t=u(de);return n=>{let e=t.get(Ct);if(n!==e.components[0])return;let i=t.get(Ri),r=t.get(xE);t.get(i_)===1&&i.initialNavigation(),t.get(IE,null,{optional:!0})?.setUpPreloading(),t.get(DE,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var xE=new y("",{factory:()=>new N}),i_=new y("",{factory:()=>1});function EE(){let t=[{provide:Au,useValue:!0},{provide:i_,useValue:0},Ys(()=>{let n=u(de);return n.get(ry,Promise.resolve()).then(()=>new Promise(i=>{let r=n.get(Ri),o=n.get(xE);nh(r,()=>{i(!0)}),n.get(eh).afterPreactivation=()=>(i(!0),o.closed?$(void 0):o),r.initialNavigation()}))})];return gl(2,t)}function NE(){let t=[Ys(()=>{u(Ri).setUpLocationChangeListener()}),{provide:i_,useValue:2}];return gl(3,t)}var IE=new y("");function ME(t){return gl(0,[{provide:IE,useExisting:CE},{provide:pl,useExisting:t}])}function TE(t={}){return gl(8,[{provide:hl,useFactory:()=>new iE(t)}])}function kE(t){kn("NgRouterViewTransitions");let n=[{provide:Jy,useValue:_E},{provide:e_,useValue:_({skipNextTransition:!!t?.skipInitialTransition},t)}];return gl(9,n)}var RE=[Ei,{provide:Hr,useClass:ir},Ri,Qo,{provide:rr,useFactory:Pj},Xf],ih=(()=>{class t{constructor(){}static forRoot(e,i){return{ngModule:t,providers:[RE,[],{provide:fa,multi:!0,useValue:e},[],i?.errorHandler?{provide:t_,useValue:i.errorHandler}:[],{provide:Ur,useValue:i||{}},i?.useHash?Vj():Bj(),jj(),i?.preloadingStrategy?ME(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?Hj(i):[],i?.bindToComponentInputs?TE(typeof i.bindToComponentInputs=="object"?i.bindToComponentInputs:{}).\u0275providers:[],i?.enableViewTransitions?kE().\u0275providers:[],Uj()]}}static forChild(e){return{ngModule:t,providers:[{provide:fa,multi:!0,useValue:e}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({})}return t})();function jj(){return{provide:DE,useFactory:()=>{let t=u(fy),n=u(Ur);return n.scrollOffset&&t.setOffset(n.scrollOffset),new Fj(n)}}}function Vj(){return{provide:Zn,useClass:oy}}function Bj(){return{provide:Zn,useClass:lf}}function Hj(t){return[t.initialNavigation==="disabled"?NE().\u0275providers:[],t.initialNavigation==="enabledBlocking"?EE().\u0275providers:[]]}var n_=new y("");function Uj(){return[{provide:n_,useFactory:Lj},{provide:jc,multi:!0,useExisting:n_}]}var BE=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(Se(Ue),Se(L))};static \u0275dir=x({type:t})}return t})(),HE=(()=>{class t extends BE{static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275dir=x({type:t,features:[re]})}return t})(),Zo=new y("");var zj={provide:Zo,useExisting:xt(()=>qr),multi:!0};function $j(){let t=wn()?wn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var qj=new y(""),qr=(()=>{class t extends BE{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!$j())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(Se(Ue),Se(L),Se(qj,8))};static \u0275dir=x({type:t,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&_e("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[he([zj]),re]})}return t})();function s_(t){return t==null||a_(t)===0}function a_(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Gr=new y(""),c_=new y(""),Gj=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Jt=class{static min(n){return UE(n)}static max(n){return zE(n)}static required(n){return $E(n)}static requiredTrue(n){return Wj(n)}static email(n){return Kj(n)}static minLength(n){return Yj(n)}static maxLength(n){return Qj(n)}static pattern(n){return Zj(n)}static nullValidator(n){return oh()}static compose(n){return QE(n)}static composeAsync(n){return ZE(n)}};function UE(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function zE(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function $E(t){return s_(t.value)?{required:!0}:null}function Wj(t){return t.value===!0?null:{required:!0}}function Kj(t){return s_(t.value)||Gj.test(t.value)?null:{email:!0}}function Yj(t){return n=>{let e=n.value?.length??a_(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function Qj(t){return n=>{let e=n.value?.length??a_(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function Zj(t){if(!t)return oh;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(s_(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function oh(t){return null}function qE(t){return t!=null}function GE(t){return Ji(t)?We(t):t}function WE(t){let n={};return t.forEach(e=>{n=e!=null?_(_({},n),e):n}),Object.keys(n).length===0?null:n}function KE(t,n){return n.map(e=>e(t))}function Xj(t){return!t.validate}function YE(t){return t.map(n=>Xj(n)?n:e=>n.validate(e))}function QE(t){if(!t)return null;let n=t.filter(qE);return n.length==0?null:function(e){return WE(KE(e,n))}}function l_(t){return t!=null?QE(YE(t)):null}function ZE(t){if(!t)return null;let n=t.filter(qE);return n.length==0?null:function(e){let i=KE(e,n).map(GE);return Za(i).pipe(le(WE))}}function d_(t){return t!=null?ZE(YE(t)):null}function OE(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function XE(t){return t._rawValidators}function JE(t){return t._rawAsyncValidators}function r_(t){return t?Array.isArray(t)?t:[t]:[]}function sh(t,n){return Array.isArray(t)?t.includes(n):t===n}function FE(t,n){let e=r_(n);return r_(t).forEach(r=>{sh(e,r)||e.push(r)}),e}function PE(t,n){return r_(n).filter(e=>!sh(t,e))}var ah=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=l_(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=d_(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},zr=class extends ah{name;get formDirective(){return null}get path(){return null}};var vl="VALID",rh="INVALID",ma="PENDING",yl="DISABLED",$r=class{},ch=class extends $r{value;source;constructor(n,e){super(),this.value=n,this.source=e}},bl=class extends $r{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},wl=class extends $r{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},pa=class extends $r{status;source;constructor(n,e){super(),this.status=n,this.source=e}},lh=class extends $r{source;constructor(n){super(),this.source=n}},ga=class extends $r{source;constructor(n){super(),this.source=n}};function eN(t){return(mh(t)?t.validators:t)||null}function Jj(t){return Array.isArray(t)?l_(t):t||null}function tN(t,n){return(mh(n)?n.asyncValidators:t)||null}function eV(t){return Array.isArray(t)?d_(t):t||null}function mh(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function tV(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new S(1e3,"");if(!nN(i,e))throw new S(1001,"")}function nV(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new S(-1002,"")})}var dh=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=U(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Ce(this.statusReactive)}set status(n){Ce(()=>this.statusReactive.set(n))}_status=ze(()=>this.statusReactive());statusReactive=U(void 0);get valid(){return this.status===vl}get invalid(){return this.status===rh}get pending(){return this.status===ma}get disabled(){return this.status===yl}get enabled(){return this.status!==yl}errors;get pristine(){return Ce(this.pristineReactive)}set pristine(n){Ce(()=>this.pristineReactive.set(n))}_pristine=ze(()=>this.pristineReactive());pristineReactive=U(!0);get dirty(){return!this.pristine}get touched(){return Ce(this.touchedReactive)}set touched(n){Ce(()=>this.touchedReactive.set(n))}_touched=ze(()=>this.touchedReactive());touchedReactive=U(!1);get untouched(){return!this.touched}_events=new N;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(FE(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(FE(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(PE(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(PE(n,this._rawAsyncValidators))}hasValidator(n){return sh(this._rawValidators,n)}hasAsyncValidator(n){return sh(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(Y(_({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new wl(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new wl(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(Y(_({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new bl(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new bl(!0,i))}markAsPending(n={}){this.status=ma;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new pa(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(Y(_({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=yl,this.errors=null,this._forEachChild(r=>{r.disable(Y(_({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ch(this.value,i)),this._events.next(new pa(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Y(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=vl,this._forEachChild(i=>{i.enable(Y(_({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(Y(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===vl||this.status===ma)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ch(this.value,e)),this._events.next(new pa(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(Y(_({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?yl:vl}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=ma,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=GE(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new pa(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new te,this.statusChanges=new te}_calculateStatus(){return this._allControlsDisabled()?yl:this.errors?rh:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ma)?ma:this._anyControlsHaveStatus(rh)?rh:vl}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new bl(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new wl(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){mh(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=Jj(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=eV(this._rawAsyncValidators)}_updateHasRequiredValidator(){Ce(()=>this._hasRequired.set(this.hasValidator(Jt.required)))}};function nN(t,n){return Object.hasOwn(t,n)}function iV(t){return t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"}function rV(t,n,e,i){switch(e){case"name":t.setAttribute(n,e,i);break;case"disabled":case"readonly":case"required":i?t.setAttribute(n,e,""):t.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":i!==void 0?t.setAttribute(n,e,i.toString()):t.removeAttribute(n,e);break}}var o_=class{kind;context;control;message;constructor({kind:n,context:e,control:i}){this.kind=n,this.context=e,this.control=i}};function iN(t){return typeof t=="number"?t:parseFloat(t)}var u_=(()=>{class t{_validator=oh;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):oh,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,features:[Ye]})}return t})(),oV={provide:Gr,useExisting:xt(()=>f_),multi:!0},f_=(()=>{class t extends u_{max;inputName="max";normalizeInput=e=>iN(e);createValidator=e=>zE(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&fe("max",r._enabled?r.max:null)},inputs:{max:"max"},standalone:!1,features:[he([oV]),re]})}return t})(),sV={provide:Gr,useExisting:xt(()=>Sl),multi:!0},Sl=(()=>{class t extends u_{min;inputName="min";normalizeInput=e=>iN(e);createValidator=e=>UE(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&fe("min",r._enabled?r.min:null)},inputs:{min:"min"},standalone:!1,features:[he([sV]),re]})}return t})(),aV={provide:Gr,useExisting:xt(()=>rN),multi:!0};var rN=(()=>{class t extends u_{required;inputName="required";normalizeInput=P;createValidator=e=>$E;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,r){i&2&&fe("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[he([aV]),re]})}return t})();var cV=new y(""),h_=new y("",{factory:()=>m_}),m_="always";function lV(t,n){return[...n.path,t]}function dV(t,n,e=m_){p_(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),fV(t,n),mV(t,n),hV(t,n),uV(t,n)}function LE(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),fh(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function uh(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function uV(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function p_(t,n){let e=XE(t);n.validator!==null?t.setValidators(OE(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=JE(t);n.asyncValidator!==null?t.setAsyncValidators(OE(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();uh(n._rawValidators,r),uh(n._rawAsyncValidators,r)}function fh(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=XE(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=JE(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return uh(n._rawValidators,i),uh(n._rawAsyncValidators,i),e}function fV(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&oN(t,n)})}function hV(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&oN(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function oN(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function mV(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function sN(t,n){t==null,p_(t,n)}function pV(t,n){return fh(t,n)}function gV(t,n){if(!Object.hasOwn(t,"model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function vV(t){return Object.getPrototypeOf(t.constructor)===HE}function aN(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function yV(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===qr?e=o:vV(o)?i=o:r=o}),r||i||e||null}function _V(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var bV={provide:cV,useFactory:()=>{let t=u(or,{self:!0});return{setParseErrors:n=>{t.setParseErrorSource(n)},set onReset(n){t.onReset=n}}}},or=class extends ah{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(n){this.userOnReset=n,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof ga&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=yV(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(n,e,i){super(),this.injector=n,this.renderer=e,this.rawValueAccessors=i,this.injector?.get(Je)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let n=this.injector?.get(Ze);if(!this.control||!n)return;let e=n.markForCheck.bind(n);this.subscription=new ue,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(i=>{i instanceof ga&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(n){!n.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!n.customControl||(this.isCustomControlBased=!0,n.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),n.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=iV(n.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof rN))}ngControlUpdate(n,e){if(!this.isCustomControlBased)return;let i=this.control,r=this.customControlBindings;Object.is(r.value,i.value)||(r.value=i.value,n.setCustomControlModelInput(i.value)),this.bindControlProperty(n,r,"touched",i.touched),this.bindControlProperty(n,r,"dirty",i.dirty),this.bindControlProperty(n,r,"valid",i.valid),this.bindControlProperty(n,r,"invalid",i.invalid),this.bindControlProperty(n,r,"pending",i.pending),this.bindControlProperty(n,r,"disabled",i.disabled),this.shouldBindRequired&&this.bindControlProperty(n,r,"required",this.isRequired);let o=i.errors;if(r.errors!==o){r.errors=o;let s=this._convertErrors(o);n.setInputOnDirectives("errors",s)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(n,e,i,r){if(e[i]===r)return;e[i]=r;let o=n.setInputOnDirectives(i,r);this.isNativeFormElement&&!o&&(i==="disabled"||i==="required")&&this.renderer&&rV(this.renderer,n.nativeElement,i,r)}_convertErrors(n){if(n===null)return[];let e=this.control;return Object.entries(n).map(([i,r])=>new o_({context:r,kind:i,control:e}))}setParseErrorSource(n){if(n===void 0)return;let e=null,i=ze(()=>{let r=n();return r.length===0?null:r.reduce((o,s)=>(o[s.kind]=s,o),{})});this.parseErrorsValidator=(()=>e).bind(this),$t(()=>{e=i(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(n){this.parseErrorsValidator&&(n?.removeValidators(this.parseErrorsValidator),n?.updateValueAndValidity({emitEvent:!1}))}},hh=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var va=(()=>{class t extends hh{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(Se(or,2))};static \u0275dir=x({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&K("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[re]})}return t})(),ya=(()=>{class t extends hh{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(Se(zr,10))};static \u0275dir=x({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&K("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[re]})}return t})(),Ai=class extends dh{constructor(n,e,i){super(eN(e),tN(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){let i=this._find(n);return i||(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){let i=this._find(n);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){let r=this._find(n);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this._find(n)?.enabled===!0}setValue(n,e={}){Ce(()=>{nV(this,!0,n),Object.keys(n).forEach(i=>{tV(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this._find(i);r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,Y(_({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new ga(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return nN(this.controls,n)?this.controls[n]:null}};var wV={provide:zr,useExisting:xt(()=>ph)},_l=Promise.resolve(),ph=(()=>{class t extends zr{callSetDisabledState;get submitted(){return Ce(this.submittedReactive)}_submitted=ze(()=>this.submittedReactive());submittedReactive=U(!1);_directives=new Set;form;ngSubmit=new te;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new Ai({},l_(e),d_(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){_l.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){_l.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){_l.then(()=>{let i=this._findContainer(e.path),r=new Ai({});sN(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){_l.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){_l.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),aN(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new lh(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(Se(Gr,10),Se(c_,10),Se(h_,8))};static \u0275dir=x({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&_e("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[he([wV]),re]})}return t})();function jE(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function VE(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Oi=class extends dh{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(eN(e),tN(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),mh(e)&&(e.nonNullable||e.initialValueIsDefault)&&(VE(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){Ce(()=>{this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new ga(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){jE(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){jE(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){VE(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var SV=t=>t instanceof Oi;var CV=(()=>{class t extends zr{callSetDisabledState;get submitted(){return Ce(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=ze(()=>this._submittedReactive());_submittedReactive=U(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),Object.hasOwn(e,"form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(fh(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return e._setupWithForm(i,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){LE(e.control||null,e,!1),_V(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,aN(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new lh(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(LE(i||null,e),SV(r)&&e._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);sN(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&pV(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){p_(this.form,this),this._oldForm&&fh(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(Se(Gr,10),Se(c_,10),Se(h_,8))};static \u0275dir=x({type:t,features:[re,Ye]})}return t})(),DV={provide:zr,useExisting:xt(()=>Fi)},Fi=(()=>{class t extends CV{form=null;ngSubmit=new te;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&_e("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[he([DV]),re]})}return t})();var _a=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})(),xV={provide:Zo,useExisting:xt(()=>Cl),multi:!0},Cl=(()=>{class t extends HE{writeValue(e){let i=e??"";this.setProperty("value",i)}registerOnChange(e){this.onChange=i=>{e(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["input","type","number","formControlName","",3,"ngNoCva",""],["input","type","number","formControl","",3,"ngNoCva",""],["input","type","number","ngModel","",3,"ngNoCva",""]],hostBindings:function(i,r){i&1&&_e("input",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[he([xV]),re]})}return t})();var cN=new y("");var EV={provide:or,useExisting:xt(()=>Xo)},Xo=(()=>{class t extends or{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new te;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,s,a,c){super(c,a,o),this._ngModelWarningConfig=s,this._parent=e,this._setValidators(i),this._setAsyncValidators(r)}_setupWithForm(e,i){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,dV(e,this,i))}ngOnChanges(e){this._added||this._setUpControl(),gV(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return lV(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(e,!0))}static \u0275fac=function(i){return new(i||t)(Se(zr,13),Se(Gr,10),Se(c_,10),Se(Zo,10),Se(cN,8),Se(Ue,8),Se(de,8))};static \u0275dir=x({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[he([EV,bV]),re,Ye,Ov(null)]})}return t})();var NV=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({})}return t})();var ba=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:cN,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:h_,useValue:e.callSetDisabledState??m_}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[NV]})}return t})();var v=(function(t){return t[t.PoK=0]="PoK",t[t.Base=1]="Base",t[t.TE=2]="TE",t})(v||{});var Pi=(()=>{class t{constructor(){this.settings=U({editions:[v.Base],additionalFactions:0})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var g=(function(t){return t[t.red=0]="red",t[t.green=1]="green",t[t.yellow=2]="yellow",t[t.blue=3]="blue",t[t.black=4]="black",t})(g||{});var Oe=(function(t){return t[t.Low=0]="Low",t[t.Moderate=1]="Moderate",t[t.High=2]="High",t})(Oe||{});var Ie=(function(t){return t[t.Blue=0]="Blue",t[t.Red=1]="Red",t[t.Green=2]="Green",t})(Ie||{});var Li={factions:[{id:1,name:"Arborec",difficulty:Oe.High,startingtech:[37],edition:v.Base,tech:[{id:1,name:"Letani Warrior II",requirements:{[g.green]:2},description:"<ul><li>After this unit is destroyed, roll 1 die. If the result is 6 or greater, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your HS.</li><li>Production 2</li><Ul>",provides:g.black,edition:v.Base},{id:2,name:"Bioplasmosis",requirements:{[g.green]:2},description:"At the end of the status phase, you may remove any number of infantry from planets you control and place them on 1 or more planets you control in the same or adjacent systems",provides:g.green,edition:v.Base}]},{id:2,name:"Barony of Letnev",difficulty:Oe.Low,startingtech:[50,38],edition:v.Base,tech:[{id:3,name:"L4 Disruptors",requirements:{[g.yellow]:1},edition:v.Base,description:"During an invasion combat, units cannot use Space Canon against your units.",provides:g.yellow},{id:4,name:"Non-Euclidean Shielding",requirements:{[g.red]:2},edition:v.Base,description:"When 1 of your units uses Sustain Damage, cancel 2 hits.",provides:g.red}]},{id:3,name:"Clan of Saar",difficulty:Oe.Moderate,startingtech:[50],edition:v.Base,tech:[{id:5,name:"Floating Factory II",requirements:{[g.yellow]:2},edition:v.Base,provides:g.black,description:"<ul><li>Saar Space Dock (Move 2, Capacity 5)</li><li>This unit is placed in a space area instead of on a planet. This unit can move and retreat as if it were a ship. If this unit is blockaded, it is destroyed.</li><li>Production 7.</li></ul>"},{id:6,name:"Chaos Mapping",requirements:{[g.blue]:1},edition:v.Base,provides:g.blue,description:"<ul><li>Other players cannot activate asteroid fields that contain 1 or more of your ships.</li><li>At the start of your turn during the action phase, you may produce 1 unit in a system that contains at least 1 of your units that has Production.</li></ul>"}]},{id:4,name:"Embers of Muat",difficulty:Oe.High,startingtech:[38],edition:v.Base,tech:[{id:7,name:"Prototype War Sun II",edition:v.Base,requirements:{[g.yellow]:1,[g.red]:3},provides:g.black,description:"<ul><li>Muuat War Sun (Cost 10; Combat 3[x3]; Move 3; Capacity 6)</li><li>Other player's units in this system lose Planetary Shield.</li><li>Sustain Damage; and, Bombardment 3[x3].</li></ul>"},{id:8,name:"Magmus Reactor \u03A9",requirements:{[g.red]:2},provides:g.red,edition:v.Base,description:"<ul><li>Your ships can move into superovas.</li><li>Each supernova that contains 1 or more of your units gains the PRODUCTION 5 ability as if it were 1 of your units.</li>"}]},{id:5,name:"Emirates of Hacan",difficulty:Oe.Low,startingtech:[50,42],edition:v.Base,tech:[{id:9,name:"Production Centers",edition:v.Base,requirements:{[g.green]:2},provides:g.green,description:"ACTION: Exhaust this card and spend 1 CT from your Strategy Pool to gain 4 TGs and choose 1 other player; that player gains 2 TGs."},{id:10,name:"Quantum Datahub Node",edition:v.Base,requirements:{[g.yellow]:3},provides:g.yellow,description:"At the end of the Strategy Phase, you may spend 1 CT from your Strategy Pool and give another player 3 of your TGs. If you do, give 1 of your SCs to that player and take 1 of his SCs."}]},{id:6,name:"Federation of Sol",difficulty:Oe.Low,startingtech:[46,50],edition:v.Base,tech:[{id:11,name:"Spec Ops II",requirements:{[g.green]:2},provides:g.black,edition:v.Base,description:"<ul><li>Sol Infantry (Cost 1/2; Combat 6)</li><li>After this unit is destroyed, roll 1 die. If the result is 5 or greater, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your HS.</li></ul>"},{id:12,name:"Advanced Carrier II",requirements:{[g.blue]:2},provides:g.black,edition:v.Base,description:"<ul><li>Sol Carrier (Cost 3; Combat 9; Move 2; Capacity 8)</li><li>Sustain Damage.</li></ul>"}]},{id:7,name:"Ghosts of Creuss",difficulty:Oe.Moderate,startingtech:[49],edition:v.Base,tech:[{id:13,name:"Dimensional Splicer",requirements:{[g.red]:1},provides:g.red,edition:v.Base,description:"At the start of a space combat in a system that contains a wormhole and 1 or more of your ships, you may produce 1 hit and assign it to 1 of your opponent's ships."},{id:14,name:"Wormhole Generator \u03A9",requirements:{[g.blue]:2},provides:g.blue,edition:v.Base,description:"ACTION: Exhaust this card to place or move a Creuss wormhole token into either a system that contains a planet you control or a non-home system that does not contain another player\xB4s ships."}]},{id:8,name:"L1z1x Mindnet",difficulty:Oe.Low,startingtech:[46,38],edition:v.Base,tech:[{id:15,name:"Super Dreadnought II",requirements:{[g.blue]:2,[g.yellow]:1},edition:v.Base,provides:g.black,description:'<ul><li>L1Z1X Dreadnought (Cost 4; Combat 4; Move 2; Capacity 2)</li><li>This unit cannot be destroyed by "Direct Hit" action cards; Sustain Damage; and, Bombardment 4.</li></ul>'},{id:16,name:"Inheritance Systems",edition:v.Base,requirements:{[g.yellow]:2},provides:g.yellow,description:"You may exhaust this card and spend 2 resources when you research a technology; ignore all of that technology's prerequisites."}]},{id:9,name:"Mentak Coalition",difficulty:Oe.High,startingtech:[38,42],edition:v.Base,tech:[{id:17,name:"Mirror Computing",requirements:{[g.yellow]:3},edition:v.Base,description:"When you spend TGs, each TG is worth 2 resources or influence.",provides:g.yellow},{id:18,name:"Salvage Operation",edition:v.Base,requirements:{[g.yellow]:2},description:"After you win or lose a space combat, gain 1 TG; if you won the combat, you may also produce 1 ship in that system of any ship type that was destroyed during the combat.",provides:g.yellow}]},{id:10,name:"Naalu Collective",difficulty:Oe.Moderate,startingtech:[42,46],edition:v.Base,tech:[{id:19,name:"Neuroglaive",requirements:{[g.green]:3},edition:v.Base,provides:g.green,description:"After another player activates a system that contains 1 or more of your ships, that player removes 1 CT from his Fleet Pool and returns it to his reinforcements."},{id:20,name:"Hybrid Crystal Fighter II",requirements:{[g.green]:1,[g.blue]:1},edition:v.Base,provides:g.black,description:"<ul><li>Naalu Fighter (Cost 1/2; Combat 7; Move 2)</li><li>This unit may move without being transported. Each fighter in excess of your ships' capacity counts as 1/2 of a ship against your fleet pool.</li></ul>"}]},{id:11,name:"Nekro Virus",difficulty:Oe.High,startingtech:[45],edition:v.Base,tech:[{id:21,name:"Valefar Assimilator",requirements:{},provides:g.black,edition:v.Base,description:`When you would gain another player's technology using 1 of your faction abilities, you may place either the "X" or "Y" assimilator token on a faction technology owned by that player instead. While that token is on a technology, the corresponding "X" or "Y" card gains that technology's text. You cannot place an assimilator token on a technology that already has one.`},{id:22,name:"Valefar Assimilator",requirements:{},provides:g.black,edition:v.Base,description:`When you would gain another player's technology using 1 of your faction abilities, you may place either the "X" or "Y" assimilator token on a faction technology owned by that player instead. While that token is on a technology, the corresponding "X" or "Y" card gains that technology's text. You cannot place an assimilator token on a technology that already has one.`}]},{id:12,name:"Sardakk N'orr",difficulty:Oe.Moderate,startingtech:[],edition:v.Base,tech:[{id:23,name:"Exotrireme II",requirements:{[g.blue]:2,[g.yellow]:1},edition:v.Base,description:`<ul><li>N'orr Dreadnought (Cost 4; Combat 5; Move 2; Capacity 1)</li><li>This unit cannot be destroyed by "Direct Hit" action cards. After a round of space combat, you may destroy this unit to destroy up to 2 ships in this system</li><li>Sustain Damage; and, Bombardment 4[x2].</li></ul>`,provides:g.black},{id:24,name:"Valkyrie Particle Weave",requirements:{[g.red]:2},edition:v.Base,description:"After making combat rolls during a round of ground combat, if your opponent produced 1 or more hits, you produce 1 additional hit.",provides:g.red}]},{id:13,name:"Universities of Jol-Nar",difficulty:Oe.Low,startingtech:[46,50,38,42],edition:v.Base,tech:[{id:25,name:"Spacial Conduit Network",requirements:{[g.blue]:2},edition:v.Base,description:"You may exhaust this card after you activate a system that contains 1 or more of your units; that system is adjacent to all other systems that contain 1 or more of your units during this activation.",provides:g.blue},{id:26,name:"E-Res Siphons",requirements:{[g.yellow]:2},edition:v.Base,description:"After another player activates a system that contains 1 or more of your ships, gain 4 TGs.",provides:g.yellow}]},{id:14,name:"Winnu",difficulty:Oe.Moderate,startingtech:[],edition:v.Base,tech:[{id:27,name:"Hegemonic Trade Policy",requirements:{[g.yellow]:2},edition:v.Base,provides:g.yellow,description:"Exhaust this card when 1 or more of your units use Production; swap the resource and influence values of 1 planet you control until the end of your turn."},{id:28,name:"Lazax Gate Folding",requirements:{[g.blue]:2},edition:v.Base,provides:g.blue,description:"<ul><li>During your tactical actions, if you do not control Mecatol Rex, treat its system as if it contains both an alpha and beta wormhole.</li><li>ACTION: If you control Mecatol Rex, exhaust this card to place 1 infantry from your reinforcement on Mecatol Rex.</li></ul>"}]},{id:15,name:"Xxcha Kingdom",difficulty:Oe.Low,startingtech:[41],edition:v.Base,tech:[{id:29,name:"Nullification Field",requirements:{[g.yellow]:2},edition:v.Base,provides:g.yellow,description:"After another player activates a system that contains 1 or more or your ships, you may exhaust this card and spend 1 CT from your Strategy Pool; immediately end that player's turn."},{id:30,name:"Instinct Training",requirements:{[g.green]:1},edition:v.Base,provides:g.green,description:"You may exhaust this card and spend 1 CT from your Strategy Pool when another player plays an action card; cancel that action card."}]},{id:16,name:"Yin Brotherhood",difficulty:Oe.Low,startingtech:[42],edition:v.Base,tech:[{id:31,name:"Impulse Core",requirements:{[g.yellow]:2},edition:v.Base,provides:g.yellow,description:"At the start of a space combat, you may destroy 1 of your cruisers or destroyers in the active system to produce 1 hit against your opponent's ships; that hit must be assigned by your opponent to 1 of his non-fighter ships, if able."},{id:32,name:"Yin Spinner",requirements:{[g.green]:2},edition:v.Base,provides:g.green,description:"After you produce units, place up to 2 infantry from your reinforcements on any planet you control or in any space area that contains 1 or more of your ships."}]},{id:17,name:"Yssaril Tribes",difficulty:Oe.Low,startingtech:[46],edition:v.Base,tech:[{id:33,name:"Transparasteel Plating",requirements:{[g.green]:1},edition:v.Base,provides:g.green,description:"During your turn of the action phase, players that have passed cannot play action cards."},{id:34,name:"Mageon Implants",requirements:{[g.green]:3},edition:v.Base,provides:g.green,description:"ACTION: Exhaust this card to look at another player's hand of action cards. Choose 1 of those cards and add it to your hand."}]},{id:18,name:"Argent Flight",difficulty:Oe.Low,startingtech:[],edition:v.PoK,tech:[{id:68,name:"Aerie Hololattice",requirements:{[g.yellow]:1},edition:v.PoK,provides:g.yellow,description:"Other players cannot move ships through systems that contain your structures. Each planet that contains 1 or more of your structures gains the PRODUCTION 1 ability as if it were a unit"},{id:67,name:"Strike Wing Alpha II",requirements:{[g.red]:2},edition:v.PoK,provides:g.black,description:"<ul><li>Argent Flight Destroyer (Cost 1; Combat 7; Move 2; Capacity 1)</li><li>Anti-Fighter Barrage 6(x3)</li><li>When this unit uses ANTI-FIGHTER BARRAGE, each result of 9 or 10 also destroys 1 of your opponent's infantry in the space area of the active system</li></ul>"}]},{id:19,name:"Empyrean",difficulty:Oe.Low,startingtech:[62],edition:v.PoK,tech:[{id:69,name:"Aetherstream",requirements:{[g.blue]:2},edition:v.PoK,provides:g.blue,description:"After you or one of your neighbors activates a system that is adjacent to an anomaly, you may apply +1 to the move value of all of that player's ships during this tactical action"},{id:70,name:"Voidwatch",requirements:{[g.green]:1},edition:v.PoK,provides:g.green,description:"After a player moves ships into a system that contains 1 or more of your units, they must give you 1 promissory note from their hand, if able"}]},{id:20,name:"Mahact Gene-Sorcerers",difficulty:Oe.High,startingtech:[67,61],edition:v.PoK,tech:[{id:71,name:"Genetic Recombination",requirements:{[g.green]:1},edition:v.PoK,provides:g.green,description:"You may exhaust this card before a player casts votes; that player must cast at least 1 vote for an outcome of your choice or remove 1 token from their fleet pool and return it to their reinforcements"},{id:72,name:"Crimson Legionnaire II",requirements:{[g.green]:2},edition:v.PoK,provides:g.black,description:"<ul><li>Mahact Ground Force (Cost 1x2; Combat 7)</li><li>After this unit is destroyed, gain 1 commodity or convert 1 of your commodities to a trade good. Then, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your home system</li></ul>"}]},{id:21,name:"Naaz-Rokha Alliance",difficulty:Oe.Low,startingtech:[64,60],edition:v.PoK,tech:[{id:73,name:"Supercharge",requirements:{[g.red]:1},edition:v.PoK,provides:g.red,description:"At the start of a combat round, you may exhaust this card to apply +1 to the result of each of your unit's combat rolls during this combat round"},{id:74,name:"Pre-Fab Arcologies",requirements:{[g.green]:3},edition:v.PoK,provides:g.green,description:"After you explore a planet, ready that planet"}]},{id:22,name:"Nomad",difficulty:Oe.Low,startingtech:[63],edition:v.PoK,tech:[{id:75,name:"Temporal Command Suite",requirements:{[g.yellow]:1},edition:v.PoK,provides:g.yellow,description:"After any player's agent becomes exhausted, you may exhaust this card to ready that agent; if you ready another player's agent, you may perform a transaction with that player"},{id:76,name:"Memoria II",requirements:{[g.green]:1,[g.blue]:1,[g.yellow]:1},edition:v.PoK,provides:g.black,description:"<ul><li>Nomad Flagship (Cost 8; Combat 5(x2); Move 2; Capacity 6)</li><li>Sustain Damage</li><li>Anti-Fighter Barrage 5(x3)</li><li>You may treat this unit as if it were adjacent to systems that contain one or more of your mechs.</li></ul>"}]},{id:23,name:"Titans of Ul",difficulty:Oe.Moderate,startingtech:[50,66],edition:v.PoK,tech:[{id:76,name:"Saturn Engine II",requirements:{[g.green]:1,[g.yellow]:1,[g.red]:1},edition:v.PoK,provides:g.black,description:"<ul><li>Titan Cruiser (Cost 2; Combat 6; Move 3; Capacity 2)</li><li>Sustain Damage</li></ul>"},{id:77,name:"Hel Titan II",requirements:{[g.red]:1,[g.yellow]:1},edition:v.PoK,provides:g.black,description:"<ul><li>Titan PDS (Combat 6)</li><li>Planetary Shield</li><li>Space Cannon 5</li><li>Sustain Damage</li><li>Production 1</li><li>This unit is treated as both a structure and a ground force. It cannot be transported.</li><li>You may use this unit's SPACE CANNON against ships that are adjacent to this unit's system.</li></ul>"}]},{id:24,name:"Vuil'Raith Cabal",difficulty:Oe.High,startingtech:[65],edition:v.PoK,tech:[{id:78,name:"Vortex",requirements:{[g.red]:1},edition:v.PoK,provides:g.red,description:"ACTION: Exhaust this card to choose another player's non-structure unit in a system that is adjacent to 1 or more of your space docks. Capture 1 unit of that type from that player's reinforcements"},{id:79,name:"Dimensional Tear II",requirements:{[g.yellow]:2},edition:v.PoK,provides:g.black,description:"<ul><li>Cabal Space Dock(PRODUCTION 7)</li><li>This system is a gravity rift; your ships do not roll for this gravity rift.</li><li>Place a dimensional tear token beneath this unit as a reminder</li><li>Up to 12 fighters in this system do not count against your ships' capacity.</li></ul>"}]}],genericTech:[{id:35,name:"Assault Cannon",requirements:{[g.red]:3},edition:v.Base,description:"At the start of a space combat in a system that contains 3 or more of your non-fighter ships, your opponent must destroy 1 of his non-fighter ships.",provides:g.red},{id:36,edition:v.Base,name:"Duranium Armor",requirements:{[g.red]:2},description:"During each combat round, after you assign hits to your units, repair 1 of your damaged units that did not use Sustain Damage during this combat round.",provides:g.red},{id:37,edition:v.Base,name:"Magen Defense Grid \u03A9\u03A9",requirements:{[g.red]:1},description:"<ul><li>When any player activates a system that contains 1 or more of your structures, place 1 infantry from your reinforcements with each of those structures.</li><li>At the start of ground combat on a planet that contains 1 or more of your structures, produce 1 hit and assign it to 1 of your opponent's ground forces.</li></ul>",provides:g.red},{id:38,edition:v.Base,name:"Plasma Scoring",requirements:{},description:"When 1 or more of your unit use Bombardment or Space Canon, 1 of those units may roll 1 additional die.",provides:g.red},{id:39,edition:v.Base,name:"Integrated Economy",requirements:{[g.yellow]:3},description:"After you gain control of a planet, you may produce any number of units on that planet that have a combined cost equal to or less than that planet\u2019s resource value.",provides:g.yellow},{id:40,edition:v.Base,name:"Transit Diodes",requirements:{[g.yellow]:2},description:"You may exhaust this card at the start of your turn during the action phase; remove up to 4 of your GFs from the game board and place them on 1 or more planets you control.",provides:g.yellow},{id:41,edition:v.Base,name:"Graviton Laser Systems",requirements:{[g.yellow]:1},description:"You may exhaust this card before 1 or of your units use Space Cannon; hits produced by those units must be assigned to non-fighter ships if able.",provides:g.yellow},{id:42,edition:v.Base,name:"Sarween Tools",requirements:{},description:"When 1 or more of your units use Production, reduce the combined cost of the produced units by 1.",provides:g.yellow},{id:43,edition:v.Base,name:"X-89 Bacterial Weapon \u03A9\u03A9",requirements:{[g.green]:3},description:"<ul><li>Double the hits produced by your units' BOMBARDMENT and ground combat rolls.</li><li>Exhaust each planet you use BOMBARDMENT against.</li></ul>",provides:g.green},{id:44,edition:v.Base,name:"Hyper Methabolism",requirements:{[g.green]:2},description:"During the status phase, gain 3 CTs instead of 2.",provides:g.green},{id:45,edition:v.Base,name:"Dacxive Animators",requirements:{[g.green]:1},description:"After you win an ground combat, you may place 1 infantry from your reinforcements on the planet.",provides:g.green},{id:46,edition:v.Base,name:"Neural Motivator",requirements:{},description:"During the Status Phase, draw 2 action cards instead of 1.",provides:g.green},{id:47,edition:v.Base,name:"Light / Wave Deflector",requirements:{[g.blue]:3},description:"Your ships can move through systems that contain other players\u2019 ships.",provides:g.blue},{id:48,edition:v.Base,name:"Fleet Logistics",requirements:{[g.blue]:2},description:"During each of your turn of the Action Phase, you may perform 2 actions instead of 1.",provides:g.blue},{id:49,edition:v.Base,name:"Gravity Drive",requirements:{[g.blue]:1},description:"You After you activate a system, apply +1 to the move value of 1 of your ships during the Tactical Action.",provides:g.blue},{id:50,edition:v.Base,name:"Antimass Deflectors",requirements:{},description:"Your ships can move through and into Asteroid Fields. When other players\u2019 units use Space Canon against your units, apply -1 to the result of each die roll.",provides:g.blue},{id:51,edition:v.Base,name:"War Sun",requirements:{[g.red]:3,[g.yellow]:1},description:"<ul><li>Cost 12; Battle 3[x3]; Move 2; Capacity 6</li><li>Other players\u2019 units in this system lose Planetary Shield</li><li>Sustain Damage</li><li>Bombardment 3[x3].</li></ul>",provides:g.black},{id:52,edition:v.Base,name:"Dreadnought II",requirements:{[g.blue]:2,[g.yellow]:1},description:"<ul><li>Cost 4; Battle 5; Move 2; Capacity 1</li><li>This unit cannot be destroyed by the \u201CDirect Hit\u201D action cards</li><li>Sustain Damage</li><li>Bombardment 5</li></ul>",provides:g.black},{id:53,edition:v.Base,name:"Cruiser II",requirements:{[g.red]:1,[g.yellow]:1,[g.green]:1},description:"Cost 2; Battle 6; Move 3; Capacity 1",provides:g.black},{id:54,edition:v.Base,name:"Destroyer II",requirements:{[g.red]:2},description:"<ul><li>Cost 1; Battle 8; Move 2</li><li>Anti-fighter barrage 6[x3].</li></ul>",provides:g.black},{id:55,edition:v.Base,name:"PDS II",requirements:{[g.red]:1,[g.yellow]:1},description:"<ul><li>You may use this unit\u2019s Space Canon against ships that are adjacent to this system</li><li>Planetary Shield</li><li>Space Cannon 5</li></ul>",provides:g.black},{id:56,edition:v.Base,name:"Carrier II",requirements:{[g.blue]:2},description:"Cost 3; Battle 9; Move 2; Capacity 6",provides:g.black},{id:57,edition:v.Base,name:"Fighter II",requirements:{[g.blue]:1,[g.green]:1},description:"<ul><li>Cost 1/2; Battle 8; Move 2</li><li>This unit may move without being transported. Fighters in excess of your ships\u2019 capacity count against your fleet pool.</li></ul>",provides:g.black},{id:58,edition:v.Base,name:"Infantry II",requirements:{[g.green]:2},description:"<ul><li>Cost 1/2; Battle 7</li><li>After this unit is destroyed, roll 1 die. If result \u2265 6: place the unit on this card. At the start of your next turn, place each unit on this card on a planet you control in your HS.</li></ul>",provides:g.black},{id:59,edition:v.Base,name:"Space Dock II",requirements:{[g.yellow]:2},description:"<ul><li>This unit\u2019s Production value is equal to 4 more than the resource value of this planet</li><li>Up to 3 fighters in this system do not count toward your ships\u2019 capacity</li><li>Production X.</li></ul>",provides:g.black},{id:60,edition:v.PoK,name:"Psychoarchaeology",requirements:{},description:"<ul><li>You can use technology specialties on planets you control without exhausting them, even if those planets are exhausted</li><li>During the Action Phase, you can exhaust planets you control that have technology specialties to gain 1 Trade Good</li></ul>",provides:g.green},{id:61,edition:v.PoK,name:"Bio-Stims",requirements:{[g.green]:1},description:"<ul><li>You may exhaust this card at the end of your turn to ready 1 of your planets that has a technology specialty or 1 of your other technologies</li></ul>",provides:g.green},{id:62,edition:v.PoK,name:"Dark Energy Tap",requirements:{},description:"<ul><li>After you perform a tactical action in a system that contains a frontier token, if you have 1 or more ships in that system, explore that token</li><li>Your ships can retreat into adjacent systems that do not contain other players' units, even if you do not have units or control planets in that system.</li></ul>",provides:g.blue},{id:63,edition:v.PoK,name:"Sling Relay",requirements:{[g.blue]:1},description:"<ul><li>ACTION: Exhaust this card to produce 1 ship in any system that contains one of your space docks</li></ul>",provides:g.blue},{id:64,edition:v.PoK,name:"AI Development Algorithm",requirements:{},description:"<ul><li>When you research a unit upgrade technology, you may exhaust this card to ignore any 1 prerequisite</li><li>When 1 or more of your units use Production, you may exhaust this card to reduce the combined cost of the produced units by the number of unit upgrade technologies that you own</li></ul>",provides:g.red},{id:65,edition:v.PoK,name:"Self Assembly Routines",requirements:{[g.red]:1},description:"<ul><li>After 1 or more of your units use PRODUCTION, you may exhaust this card to place 1 mech from your reinforcements on a planet you control in that system</li><li>After 1 of your mechs is destroyed, gain 1 trade good</li></ul>",provides:g.red},{id:66,edition:v.PoK,name:"Scanlink Drone Network",requirements:{},description:"<ul><li>When you activate a system, you may explore 1 planet in that system which contains 1 or more of your units</li></ul>",provides:g.yellow},{id:67,edition:v.PoK,name:"Predictive Intelligence",requirements:{[g.yellow]:1},description:"<ul><li>At the end of your turn, you may exhaust this card to redistribute your command tokens</li><li>When you cast votes during the agenda phase, you may cast 3 additional votes; if you do, and the outcome you voted for is not resolved, exhaust this card</li></ul>",provides:g.yellow}],systems:[{id:19,type:Ie.Blue,edition:v.Base},{id:20,type:Ie.Blue,edition:v.Base},{id:21,type:Ie.Blue,edition:v.Base},{id:22,type:Ie.Blue,edition:v.Base},{id:23,type:Ie.Blue,edition:v.Base},{id:24,type:Ie.Blue,edition:v.Base},{id:25,type:Ie.Blue,edition:v.Base},{id:26,type:Ie.Blue,edition:v.Base},{id:27,type:Ie.Blue,edition:v.Base},{id:28,type:Ie.Blue,edition:v.Base},{id:29,type:Ie.Blue,edition:v.Base},{id:30,type:Ie.Blue,edition:v.Base},{id:31,type:Ie.Blue,edition:v.Base},{id:32,type:Ie.Blue,edition:v.Base},{id:33,type:Ie.Blue,edition:v.Base},{id:34,type:Ie.Blue,edition:v.Base},{id:35,type:Ie.Blue,edition:v.Base},{id:36,type:Ie.Blue,edition:v.Base},{id:37,type:Ie.Blue,edition:v.Base},{id:38,type:Ie.Blue,edition:v.Base},{id:39,type:Ie.Red,edition:v.Base},{id:40,type:Ie.Red,edition:v.Base},{id:41,type:Ie.Red,edition:v.Base},{id:42,type:Ie.Red,edition:v.Base},{id:43,type:Ie.Red,edition:v.Base},{id:44,type:Ie.Red,edition:v.Base},{id:45,type:Ie.Red,edition:v.Base},{id:46,type:Ie.Red,edition:v.Base},{id:47,type:Ie.Red,edition:v.Base},{id:48,type:Ie.Red,edition:v.Base},{id:49,type:Ie.Red,edition:v.Base},{id:50,type:Ie.Red,edition:v.Base}]};function Jo(t,n=0){return lN(t)?Number(t):arguments.length===2?n:0}function lN(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function en(t){return t instanceof L?t.nativeElement:t}function v_(t){return Array.isArray(t)?t:[t]}function _t(t){return t==null?"":typeof t=="string"?t:`${t}px`}function tn(t){return t!=null&&`${t}`!="false"}var y_;try{y_=typeof Intl<"u"&&Intl.v8BreakIterator}catch(t){y_=!1}var $e=(()=>{class t{_platformId=u(To);isBrowser=this._platformId?XD(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||y_)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var es;function dN(){if(es==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return es=!1,es;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)es=!0;else{let t=Element.prototype.scrollTo;t?es=!/\{\s*\[native code\]\s*\}/.test(t.toString()):es=!1}}return es}var __;function uN(){if(__==null){let t=typeof document<"u"?document.head:null;__=!!(t&&(t.createShadowRoot||t.attachShadow))}return __}function b_(t){if(uN()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function ln(t){if(t.composedPath)try{return t.composedPath()[0]}catch(n){}return t.target}function w_(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Dl;function fN(){if(Dl==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Dl=!0}))}finally{Dl=Dl||!1}return Dl}function wa(t){return fN()?t:!!t.capture}var Sa,hN=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function S_(){if(Sa)return Sa;if(typeof document!="object"||!document)return Sa=new Set(hN),Sa;let t=document.createElement("input");return Sa=new Set(hN.filter(n=>(t.setAttribute("type",n),t.type===n))),Sa}var gh=new WeakMap,bt=(()=>{class t{_appRef;_injector=u(de);_environmentInjector=u(He);load(e){let i=this._appRef=this._appRef||this._injector.get(Ct),r=gh.get(i);r||(r={loaders:new Set,refs:[]},gh.set(i,r),i.onDestroy(()=>{gh.get(i)?.refs.forEach(o=>o.destroy()),gh.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(sf(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var mN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return t})(),vh;function MV(){if(vh===void 0&&(vh=null,typeof window<"u")){let t=window;if(t.trustedTypes!==void 0)try{vh=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n})}catch(n){console.error(n)}}return vh}function Ca(t){return MV()?.createHTML(t)||t}function ts(t){return t.buttons===0||t.detail===0}function ns(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var pN=new y("cdk-input-modality-detector-options"),gN={ignoreKeys:[18,17,224,91,16]},vN=650,C_={passive:!0,capture:!0},yN=(()=>{class t{_platform=u($e);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ht(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=ln(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<vN||(this._modality.next(ts(e)?"keyboard":"mouse"),this._mostRecentTarget=ln(e))};_onTouchstart=e=>{if(ns(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=ln(e)};constructor(){let e=u(O),i=u(Q),r=u(pN,{optional:!0});if(this._options=_(_({},gN),r),this.modalityDetected=this._modality.pipe(Xm(1)),this.modalityChanged=this.modalityDetected.pipe(Td()),this._platform.isBrowser){let o=u(ct).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,C_),o.listen(i,"mousedown",this._onMousedown,C_),o.listen(i,"touchstart",this._onTouchstart,C_)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})(),xl=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(xl||{}),_N=new y("cdk-focus-monitor-default-options"),yh=wa({passive:!0,capture:!0}),ji=(()=>{class t{_ngZone=u(O);_platform=u($e);_inputModalityDetector=u(yN);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(Q);_stopInputModalityDetector=new N;constructor(){let e=u(_N,{optional:!0});this._detectionMode=e?.detectionMode||xl.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=ln(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=en(e);if(!this._platform.isBrowser||r.nodeType!==1)return $();let o=b_(r)||this._document,s=this._elementInfo.get(r);if(s)return i&&(s.checkChildren=!0),s.subject;let a={checkChildren:i,subject:new N,rootNode:o};return this._elementInfo.set(r,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let i=en(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=en(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,c])=>this._originChanged(a,i,c)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===xl.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===xl.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?vN:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=ln(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,yh),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,yh)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Pe(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,yh),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,yh),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var bN=new Set,is,D_=(()=>{class t{_platform=u($e);_nonce=u(Rr,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):kV}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&TV(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();function TV(t,n){if(!bN.has(t))try{is||(is=document.createElement("style"),n&&is.setAttribute("nonce",n),is.setAttribute("type","text/css"),document.head.appendChild(is)),is.sheet&&(is.sheet.insertRule(`@media ${t.replace(/[{}]/g,"")} {body{ }}`,0),bN.add(t))}catch(e){console.error(e)}}function kV(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}function RV(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var wN=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})(),AV=(()=>{class t{_mutationObserverFactory=u(wN);_observedElements=new Map;_ngZone=u(O);ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=en(e);return new X(r=>{let s=this._observeElement(i).pipe(le(a=>a.filter(c=>!RV(c))),Ne(a=>!!a.length)).subscribe(a=>{this._ngZone.run(()=>{r.next(a)})});return()=>{s.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new N,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})(),SN=(()=>{class t{_contentObserver=u(AV);_elementRef=u(L);event=new te;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Jo(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Xa(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",P],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),_h=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({providers:[wN]})}return t})();var OV=200,bh=class{_letterKeyStream=new N;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new N;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:OV;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Rt(e=>this._pressedLetters.push(e)),Xa(n),Ne(()=>this._pressedLetters.length>0),le(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Da(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var wh=class{_items;_activeItemIndex=U(-1);_activeItem=U(null);_wrap=!1;_typeaheadSubscription=ue.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof yn?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):$n(n)&&(this._effectRef=$t(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new N;change=new N;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new bh(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(r||Da(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return $n(this._items)?this._items():this._items instanceof yn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var sr=class extends wh{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var xN=new Map,ut=class t{_appId=u(Mo);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){this._appId!=="ng"&&(n+=this._appId);let i=xN.get(n);return i===void 0?i=0:i++,xN.set(n,i),`${n}${e?t._infix+"-":""}${i}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})};var PV=new y("MATERIAL_ANIMATIONS"),EN=null;function LV(){return u(PV,{optional:!0})?.animationsDisabled||u(kr,{optional:!0})==="NoopAnimations"?"di-disabled":(EN??=u(D_).matchMedia("(prefers-reduced-motion)").matches,EN?"reduced-motion":"enabled")}function Nt(){return LV()!=="enabled"}var Pn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Pn||{}),N_=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Pn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},NN=wa({passive:!0,capture:!0}),I_=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let s=o.get(i);s?s.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,NN)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,NN)))}_delegateEventHandler=n=>{let e=ln(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},El={enterDuration:225,exitDuration:150},jV=800,IN=wa({passive:!0,capture:!0}),MN=["mousedown","touchstart"],TN=["mouseup","mouseleave","touchend","touchcancel"],VV=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return t})(),rs=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new I_;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=en(i)),o&&o.get(bt).load(VV)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=_(_({},El),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let s=i.radius||BV(n,e,r),a=n-r.left,c=e-r.top,l=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${c-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),h=f.transitionProperty,m=f.transitionDuration,p=h==="none"||m==="0s"||m==="0s, 0s"||r.width===0&&r.height===0,w=new N_(this,d,i,p);d.style.transform="scale3d(1, 1, 1)",w.state=Pn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=w);let E=null;return!p&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let I=()=>{E&&(E.fallbackTimer=null),clearTimeout(Z),this._finishRippleTransition(w)},k=()=>this._destroyRipple(w),Z=setTimeout(k,l+100);d.addEventListener("transitionend",I),d.addEventListener("transitioncancel",k),E={onTransitionEnd:I,onTransitionCancel:k,fallbackTimer:Z}}),this._activeRipples.set(w,E),(p||!l)&&this._finishRippleTransition(w),w}fadeOutRipple(n){if(n.state===Pn.FADING_OUT||n.state===Pn.HIDDEN)return;let e=n.element,i=_(_({},El),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=Pn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=en(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,MN.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{TN.forEach(e=>{this._triggerElement.addEventListener(e,this,IN)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Pn.FADING_IN?this._startFadeOutTransition(n):n.state===Pn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=Pn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Pn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=ts(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+jV;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!ns(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Pn.VISIBLE||n.config.terminateOnPointerUp&&n.state===Pn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(MN.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(TN.forEach(e=>n.removeEventListener(e,this,IN)),this._pointerUpEventsRegistered=!1))}};function BV(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var os=new y("mat-ripple-global-options"),Sh=(()=>{class t{_elementRef=u(L);_animationsDisabled=Nt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(O),i=u($e),r=u(os,{optional:!0}),o=u(de);this._globalOptions=r||{},this._rippleRenderer=new rs(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:_(_(_({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,_(_({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,_(_({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&K("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var xn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return t})();function Ch(t){return t&&typeof t.connect=="function"&&!(t instanceof za)}var Jn=(function(t){return t[t.REPLACED=0]="REPLACED",t[t.INSERTED=1]="INSERTED",t[t.MOVED=2]="MOVED",t[t.REMOVED=3]="REMOVED",t})(Jn||{}),Dh=class{viewCacheSize=20;_viewCache=[];applyChanges(n,e,i,r,o){n.forEachOperation((s,a,c)=>{let l,d;if(s.previousIndex==null){let f=()=>i(s,a,c);l=this._insertView(f,c,e,r(s)),d=l?Jn.INSERTED:Jn.REPLACED}else c==null?(this._detachAndCacheView(a,e),d=Jn.REMOVED):(l=this._moveView(a,c,e,r(s)),d=Jn.MOVED);o&&o({context:l?.context,operation:d,record:s})})}detach(){for(let n of this._viewCache)n.destroy();this._viewCache=[]}_insertView(n,e,i,r){let o=this._insertViewFromCache(e,i);if(o){o.context.$implicit=r;return}let s=n();return i.createEmbeddedView(s.templateRef,s.context,s.index)}_detachAndCacheView(n,e){let i=e.detach(n);this._maybeCacheView(i,e)}_moveView(n,e,i,r){let o=i.get(n);return i.move(o,e),o.context.$implicit=r,o}_maybeCacheView(n,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(n);else{let i=e.indexOf(n);i===-1?n.destroy():e.remove(i)}}_insertViewFromCache(n,e){let i=this._viewCache.pop();return i&&e.insert(i,n),i||null}};var Nl=(()=>{class t{_listeners=[];notify(e,i){for(let r of this._listeners)r(e,i)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(i=>e!==i)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var xh=class{applyChanges(n,e,i,r,o){n.forEachOperation((s,a,c)=>{let l,d;if(s.previousIndex==null){let f=i(s,a,c);l=e.createEmbeddedView(f.templateRef,f.context,f.index),d=Jn.INSERTED}else c==null?(e.remove(a),d=Jn.REMOVED):(l=e.get(a),e.move(l,c),d=Jn.MOVED);o&&o({context:l?.context,operation:d,record:s})})}detach(){}};var HV=new y("cdk-dir-doc",{providedIn:"root",factory:()=>u(Q)}),UV=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function kN(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?UV.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var ei=(()=>{class t{get value(){return this.valueSignal()}valueSignal=U("ltr");change=new te;constructor(){let e=u(HV,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(kN(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var Me=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({})}return t})();var M_=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=tn(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=tn(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(fe("aria-orientation",r.vertical?"vertical":"horizontal"),K("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-top-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-right-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2})}return t})(),RN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[Me]})}return t})();var AN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[Me]})}return t})();var Wr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[Me]})}return t})();var zV=["*"],$V=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--%NS%mat-list-list-item-container-color, transparent);
  border-radius: var(--%NS%mat-list-list-item-container-shape, var(--%NS%mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--%NS%mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--%NS%mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--%NS%mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--%NS%mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--%NS%selected::before, .mdc-list-item.mdc-list-item--%NS%selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--%NS%with-leading-icon:hover .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  height: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--%NS%mat-list-list-item-trailing-supporting-text-font, var(--%NS%mat-sys-label-small-font));
  line-height: var(--%NS%mat-list-list-item-trailing-supporting-text-line-height, var(--%NS%mat-sys-label-small-line-height));
  font-size: var(--%NS%mat-list-list-item-trailing-supporting-text-size, var(--%NS%mat-sys-label-small-size));
  font-weight: var(--%NS%mat-list-list-item-trailing-supporting-text-weight, var(--%NS%mat-sys-label-small-weight));
  letter-spacing: var(--%NS%mat-list-list-item-trailing-supporting-text-tracking, var(--%NS%mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--%NS%with-trailing-icon:hover .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-selected-trailing-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--%NS%mat-list-list-item-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-list-list-item-label-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-list-list-item-label-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-list-list-item-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-list-list-item-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-list-list-item-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--%NS%mat-list-list-item-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-list-list-item-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-list-list-item-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-list-list-item-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-list-list-item-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-list-list-item-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-disabled-leading-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--%NS%mat-list-list-item-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--%NS%disabled::before {
  background-color: var(--%NS%mat-list-list-item-disabled-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--%NS%mat-list-list-item-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--%NS%mat-list-list-item-leading-avatar-shape, var(--%NS%mat-sys-corner-full));
  background-color: var(--%NS%mat-list-list-item-leading-avatar-color, var(--%NS%mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--%NS%activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--%NS%mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--%NS%mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--%NS%mat-list-active-indicator-color, var(--%NS%mat-sys-secondary-container));
}
`,qV=["unscopedContent"],GV=["text"],WV=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],KV=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var YV=new y("ListOption"),QV=(()=>{class t{_elementRef=u(L);static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),ZV=(()=>{class t{_elementRef=u(L);static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),XV=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),ON=(()=>{class t{_listOption=u(YV,{optional:!0});_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,hostVars:4,hostBindings:function(i,r){i&2&&K("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),JV=(()=>{class t extends ON{static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[re]})}return t})(),eB=(()=>{class t extends ON{static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[re]})}return t})(),tB=new y("MAT_LIST_CONFIG"),T_=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=tn(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(tn(e))}_disabled=U(!1);_defaultOptions=u(tB,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,hostVars:1,hostBindings:function(i,r){i&2&&fe("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),nB=(()=>{class t{_elementRef=u(L);_ngZone=u(O);_listBase=u(T_,{optional:!0});_platform=u($e);_hostElement;_isButtonElement;_noopAnimations=Nt();_avatars;_icons;set lines(e){this._explicitLines=Jo(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=tn(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(tn(e))}_disabled=U(!1);_subscriptions=new ue;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){u(bt).load(xn);let e=u(os,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new rs(this,this._ngZone,this._hostElement,this._platform,u(de)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(rn(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,contentQueries:function(i,r,o){if(i&1&&dt(o,JV,4)(o,eB,4),i&2){let s;G(s=W())&&(r._avatars=s),G(s=W())&&(r._icons=s)}},hostVars:4,hostBindings:function(i,r){i&2&&(fe("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),K("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var FN=(()=>{class t extends T_{static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275cmp=T({type:t,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[he([{provide:T_,useExisting:t}]),re],ngContentSelectors:zV,decls:1,vars:0,template:function(i,r){i&1&&(Ee(),R(0))},styles:[$V],encapsulation:2})}return t})(),PN=(()=>{class t extends nB{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=tn(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275cmp=T({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&dt(o,ZV,5)(o,QV,5)(o,XV,5),i&2){let s;G(s=W())&&(r._lines=s),G(s=W())&&(r._titles=s),G(s=W())&&(r._meta=s)}},viewQuery:function(i,r){if(i&1&&Vt(qV,5)(GV,5),i&2){let o;G(o=W())&&(r._unscopedContent=o.first),G(o=W())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(fe("aria-current",r._getAriaCurrent()),K("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[re],ngContentSelectors:KV,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(Ee(WV),R(0),b(1,"span",1),R(2,1),R(3,2),b(4,"span",2,0),_e("cdkObserveContent",function(){return r._updateItemLines(!0)}),R(6,3),C()(),R(7,4),R(8,5),ee(9,"div",3))},dependencies:[SN],encapsulation:2})}return t})();var LN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[_h,Wr,AN,Me,RN]})}return t})();function VN(t){return Error(`Unable to find icon with the name "${t}"`)}function iB(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function BN(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function HN(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var ar=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},Nh=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new ar(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let s=this._sanitizer.sanitize(Ae.HTML,r);if(!s)throw HN(r);let a=Ca(s);return this._addSvgIconConfig(e,i,new ar("",a,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new ar(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(Ae.HTML,i);if(!o)throw HN(i);let s=Ca(o);return this._addSvgIconSetConfig(e,new ar("",s,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(Ae.RESOURCE_URL,e);if(!i)throw BN(e);let r=this._cachedIconsByUrl.get(i);return r?$(Eh(r)):this._loadSvgIconFromConfig(new ar(e,null)).pipe(Rt(o=>this._cachedIconsByUrl.set(i,o)),le(o=>Eh(o)))}getNamedSvgIcon(e,i=""){let r=UN(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(i);return s?this._getSvgFromIconSetConfigs(e,s):Ya(VN(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?$(Eh(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(le(i=>Eh(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return $(r);let o=i.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(Sr(a=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(Ae.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(l)),$(null)})));return Za(o).pipe(le(()=>{let s=this._extractIconWithNameFromAnySet(e,i);if(!s)throw VN(e);return s}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,e,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Rt(i=>e.svgText=i),le(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?$(null):this._fetchIcon(e).pipe(Rt(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,r);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),r);let a=this._svgElementFromString(Ca("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(Ca("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:s,value:a}=r[o];s!=="id"&&i.setAttribute(s,a)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw iB();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let s=this._sanitizer.sanitize(Ae.RESOURCE_URL,i);if(!s)throw BN(i);let a=this._inProgressUrlFetches.get(s);if(a)return a;let c=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(le(l=>Ca(l)),Dr(()=>this._inProgressUrlFetches.delete(s)),Ja());return this._inProgressUrlFetches.set(s,c),c}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(UN(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return rB(o)?new ar(o.url,null,o.options):new ar(o,null)}}static \u0275fac=function(i){return new(i||t)(M(Ef,8),M(Jc),M(Q,8),M(Qt))};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Eh(t){return t.cloneNode(!0)}function UN(t,n){return t+":"+n}function rB(t){return!!(t.url&&t.options)}var oB=["*"],sB=new y("MAT_ICON_DEFAULT_OPTIONS"),aB=new y("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(Q),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),zN=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],cB=zN.map(t=>`[${t}]`).join(", "),lB=/^url\(['"]?#(.*?)['"]?\)$/,Vi=(()=>{class t{_elementRef=u(L);_iconRegistry=u(Nh);_location=u(aB);_errorHandler=u(Qt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ue.EMPTY;constructor(){let e=u(new An("aria-hidden"),{optional:!0}),i=u(sB,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(cB),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)zN.forEach(s=>{let a=i[o],c=a.getAttribute(s),l=c?c.match(lB):null;if(l){let d=r.get(a);d||(d=[],r.set(a,d)),d.push({name:s,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(mt(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(fe("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),bn(r.color?"mat-"+r.color:""),K("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",P],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:oB,decls:1,vars:0,template:function(i,r){i&1&&(Ee(),R(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return t})(),$N=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[Me]})}return t})();var dB=["*"];var uB=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],fB=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],hB=new y("MAT_CARD_CONFIG"),Kr=(()=>{class t{appearance;constructor(){let e=u(hB,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&K("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:dB,decls:1,vars:0,template:function(i,r){i&1&&(Ee(),R(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return t})(),Yr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var Qr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var qN=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&K("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),Zr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:fB,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(Ee(uB),R(0),nt(1,"div",0),R(2,1),lt(),R(3,2))},encapsulation:2})}return t})();var xa=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[Me]})}return t})();var mB={capture:!0},pB=["focus","mousedown","mouseenter","touchstart"],k_="mat-ripple-loader-uninitialized",R_="mat-ripple-loader-class-name",GN="mat-ripple-loader-centered",Mh="mat-ripple-loader-disabled",Th=(()=>{class t{_document=u(Q);_animationsDisabled=Nt();_globalRippleOptions=u(os,{optional:!0});_platform=u($e);_ngZone=u(O);_injector=u(de);_eventCleanups;_hosts=new Map;constructor(){let e=u(ct).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>pB.map(i=>e.listen(this._document,i,this._onInteraction,mB)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(k_,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(R_))&&e.setAttribute(R_,i.className||""),i.centered&&e.setAttribute(GN,""),i.disabled&&e.setAttribute(Mh,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(Mh,""):e.removeAttribute(Mh)}_onInteraction=e=>{let i=ln(e);if(i instanceof HTMLElement){let r=i.closest(`[${k_}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(R_)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??El.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??El.exitDuration,a={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Mh),rippleConfig:{centered:e.hasAttribute(GN),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},c=new rs(a,this._ngZone,i,this._platform,this._injector),l=!a.rippleDisabled;l&&c.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:c,hasSetUpEvents:l}),e.removeAttribute(k_)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var WN=new y("");var kh=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}isSignalErrorState(e){if(!e)return!1;let i=e().invalid(),r=e().touched();return i&&r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var Rh=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(n,e,i,r,o){this._defaultMatcher=n,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o,e?$n(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let n=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==n&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(n){if(this.formField&&n?.isSignalErrorState)return n.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,i=this.ngControl?this.ngControl.control:null;return n?.isErrorState(i,e)??!1}};var A_=class{_box;_destroyed=new N;_resizeSubject=new N;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new X(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Ne(e=>e.some(i=>i.target===n)),Ad({bufferSize:1,refCount:!0}),Pe(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},KN=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(O);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new A_(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var gB=["notch"],vB=["*"],YN=["iconPrefixContainer"],QN=["textPrefixContainer"],ZN=["iconSuffixContainer"],XN=["textSuffixContainer"],yB=["textField"],_B=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],bB=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function wB(t,n){t&1&&ee(0,"span",21)}function SB(t,n){if(t&1&&(b(0,"label",20),R(1,1),me(2,wB,1,0,"span",21),C()),t&2){let e=ce(2);q("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),fe("for",e._control.disableAutomaticLabeling?null:e._control.id),D(2),pe(!e.hideRequiredMarker&&e._control.required?2:-1)}}function CB(t,n){if(t&1&&me(0,SB,3,5,"label",20),t&2){let e=ce();pe(e._hasFloatingLabel()?0:-1)}}function DB(t,n){t&1&&ee(0,"div",7)}function xB(t,n){}function EB(t,n){if(t&1&&je(0,xB,0,0,"ng-template",13),t&2){ce(2);let e=Rn(1);q("ngTemplateOutlet",e)}}function NB(t,n){if(t&1&&(b(0,"div",9),me(1,EB,1,1,null,13),C()),t&2){let e=ce();q("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),D(),pe(e._forceDisplayInfixLabel()?-1:1)}}function IB(t,n){t&1&&(b(0,"div",10,2),R(2,2),C())}function MB(t,n){t&1&&(b(0,"div",11,3),R(2,3),C())}function TB(t,n){}function kB(t,n){if(t&1&&je(0,TB,0,0,"ng-template",13),t&2){ce();let e=Rn(1);q("ngTemplateOutlet",e)}}function RB(t,n){t&1&&(b(0,"div",14,4),R(2,4),C())}function AB(t,n){t&1&&(b(0,"div",15,5),R(2,5),C())}function OB(t,n){t&1&&ee(0,"div",16)}function FB(t,n){t&1&&(b(0,"div",18),R(1,6),C())}function PB(t,n){if(t&1&&(b(0,"mat-hint",22),H(1),C()),t&2){let e=ce(2);q("id",e._hintLabelId),D(),At(e.hintLabel)}}function LB(t,n){if(t&1&&(b(0,"div",19),me(1,PB,2,2,"mat-hint",22),R(2,7),ee(3,"div",23),R(4,8),C()),t&2){let e=ce();D(),pe(e.hintLabel?1:-1)}}var cr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-label"]]})}return t})(),oI=new y("MatError"),O_=(()=>{class t{id=u(ut).getId("mat-mdc-error-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&Xt("id",r.id)},inputs:{id:"id"},features:[he([{provide:oI,useExisting:t}])]})}return t})(),Ml=(()=>{class t{align="start";id=u(ut).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(Xt("id",r.id),fe("align",null),K("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),jB=new y("MatPrefix");var VB=new y("MatSuffix");var sI=new y("FloatingLabelParent"),JN=(()=>{class t{_elementRef=u(L);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(KN);_ngZone=u(O);_parent=u(sI);_resizeSubscription=new ue;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return BB(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&K("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function BB(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var eI="mdc-line-ripple--active",Ah="mdc-line-ripple--deactivating",tI=(()=>{class t{_elementRef=u(L);_cleanupTransitionEnd;constructor(){let e=u(O),i=u(Ue);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ah),e.add(eI)}deactivate(){this._elementRef.nativeElement.classList.add(Ah)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Ah);e.propertyName==="opacity"&&r&&i.remove(eI,Ah)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),nI=(()=>{class t{_elementRef=u(L);_ngZone=u(O);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Vt(gB,5),i&2){let o;G(o=W())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&K("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:vB,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Ee(),an(0,"div",1),nt(1,"div",2,0),R(3),lt(),an(4,"div",3))},encapsulation:2})}return t})(),F_=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t})}return t})();var P_=new y("MatFormField"),HB=new y("MAT_FORM_FIELD_DEFAULT_OPTIONS"),iI="fill",UB="auto",rI="fixed",zB="translateY(-50%)",Xr=(()=>{class t{_elementRef=u(L);_changeDetectorRef=u(Ze);_platform=u($e);_idGenerator=u(ut);_ngZone=u(O);_defaults=u(HB,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Hc("iconPrefixContainer");_textPrefixContainerSignal=Hc("textPrefixContainer");_iconSuffixContainerSignal=Hc("iconSuffixContainer");_textSuffixContainerSignal=Hc("textSuffixContainer");_prefixSuffixContainers=ze(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=jD(cr);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=tn(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||UB}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||iI;this._appearanceSignal.set(i)}_appearanceSignal=U(iI);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||rI}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||rI}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new N;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Nt();constructor(){let e=this._defaults,i=u(ei);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),$t(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ze(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(kt([void 0,void 0]),le(()=>[i.errorState,i.userAriaDescribedBy]),Rd(),Ne(([[o,s],[a,c]])=>o!==a||s!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Pe(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),rn(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){ny({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ze(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(s=>s&&!o.includes(s)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,a=i?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,l=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",f=`${s+a}px`,m=`calc(${d} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,p=`var(--mat-mdc-form-field-label-transform, ${zB} translateX(${m}))`,w=s+a+c+l;return[p,w]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(Zu(o,r._labelChild,cr,5),dt(o,F_,5)(o,jB,5)(o,VB,5)(o,oI,5)(o,Ml,5)),i&2){Ju();let s;G(s=W())&&(r._formFieldControl=s.first),G(s=W())&&(r._prefixChildren=s),G(s=W())&&(r._suffixChildren=s),G(s=W())&&(r._errorChildren=s),G(s=W())&&(r._hintChildren=s)}},viewQuery:function(i,r){if(i&1&&(Xu(r._iconPrefixContainerSignal,YN,5)(r._textPrefixContainerSignal,QN,5)(r._iconSuffixContainerSignal,ZN,5)(r._textSuffixContainerSignal,XN,5),Vt(yB,5)(YN,5)(QN,5)(ZN,5)(XN,5)(JN,5)(nI,5)(tI,5)),i&2){Ju(4);let o;G(o=W())&&(r._textField=o.first),G(o=W())&&(r._iconPrefixContainer=o.first),G(o=W())&&(r._textPrefixContainer=o.first),G(o=W())&&(r._iconSuffixContainer=o.first),G(o=W())&&(r._textSuffixContainer=o.first),G(o=W())&&(r._floatingLabel=o.first),G(o=W())&&(r._notchedOutline=o.first),G(o=W())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&K("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[he([{provide:P_,useExisting:t},{provide:sI,useExisting:t}])],ngContentSelectors:bB,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Ee(_B),je(0,CB,1,1,"ng-template",null,0,ef),b(2,"div",6,1),_e("click",function(s){return r._control.onContainerClick(s)}),me(4,DB,1,0,"div",7),b(5,"div",8),me(6,NB,2,2,"div",9),me(7,IB,3,0,"div",10),me(8,MB,3,0,"div",11),b(9,"div",12),me(10,kB,1,1,null,13),R(11),C(),me(12,RB,3,0,"div",14),me(13,AB,3,0,"div",15),C(),me(14,OB,1,0,"div",16),C(),b(15,"div",17),me(16,FB,2,0,"div",18)(17,LB,5,1,"div",19),C()),i&2){let o;D(2),K("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),D(2),pe(!r._hasOutline()&&!r._control.disabled?4:-1),D(2),pe(r._hasOutline()?6:-1),D(),pe(r._hasIconPrefix?7:-1),D(),pe(r._hasTextPrefix?8:-1),D(2),pe(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),D(2),pe(r._hasTextSuffix?12:-1),D(),pe(r._hasIconSuffix?13:-1),D(),pe(r._hasOutline()?-1:14),D(),K("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let s=r._getSubscriptMessageType();D(),pe((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[JN,nI,ay,tI,Ml],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return t})();var dI=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],uI=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function $B(t,n){t&1&&(b(0,"span",3),R(1,1),C())}function qB(t,n){t&1&&(b(0,"span",6),R(1,2),C())}function GB(t,n){t&1&&(b(0,"span",3),R(1,1),b(2,"span",7),zn(),b(3,"svg",8),ee(4,"path",9),C()()())}function WB(t,n){t&1&&(b(0,"span",6),R(1,2),C())}var KB=`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`;var fI=["*"],YB=`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`,B_=new y("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),L_=new y("MatChipAvatar"),aI=new y("MatChipTrailingIcon"),cI=new y("MatChipEdit"),lI=new y("MatChipRemove"),H_=new y("MatChip"),hI=(()=>{class t{_elementRef=u(L);_parentChip=u(H_);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){u(bt).load(xn),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(i,r){i&2&&(fe("disabled",r._getDisabledAttribute())("aria-disabled",r.disabled),K("mdc-evolution-chip__action--primary",r._isPrimary)("mdc-evolution-chip__action--secondary",!r._isPrimary)("mdc-evolution-chip__action--trailing",!r._isPrimary&&!r._isLeading))},inputs:{disabled:[2,"disabled","disabled",P],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:xi(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return t})(),mI=(()=>{class t extends hI{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(i,r){i&1&&_e("click",function(s){return r._handleClick(s)})("keydown",function(s){return r._handleKeydown(s)}),i&2&&(fe("tabindex",r._getTabindex()),K("mdc-evolution-chip__action--presentational",!1))},features:[re]})}return t})(),Fh=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-chip-avatar"],["","matChipAvatar",""]],hostAttrs:["role","img",1,"mat-mdc-chip-avatar","mdc-evolution-chip__icon","mdc-evolution-chip__icon--primary"],features:[he([{provide:L_,useExisting:t}])]})}return t})();var j_=(()=>{class t{_changeDetectorRef=u(Ze);_elementRef=u(L);_tagName=u(LD);_ngZone=u(O);_focusMonitor=u(ji);_globalRippleOptions=u(os,{optional:!0});_document=u(Q);_onFocus=new N;_onBlur=new N;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=Nt();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=u(ut).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new te;destroyed=new te;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=u(Th);_injector=u(de);constructor(){let e=u(bt);e.load(xn),e.load(mN),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=rn(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(i=>{let r=i._elementRef.nativeElement;return r===e||r.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let i=e!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(i,r,o){if(i&1&&dt(o,L_,5)(o,cI,5)(o,aI,5)(o,lI,5)(o,L_,5)(o,aI,5)(o,cI,5)(o,lI,5),i&2){let s;G(s=W())&&(r.leadingIcon=s.first),G(s=W())&&(r.editIcon=s.first),G(s=W())&&(r.trailingIcon=s.first),G(s=W())&&(r.removeIcon=s.first),G(s=W())&&(r._allLeadingIcons=s),G(s=W())&&(r._allTrailingIcons=s),G(s=W())&&(r._allEditIcons=s),G(s=W())&&(r._allRemoveIcons=s)}},viewQuery:function(i,r){if(i&1&&Vt(mI,5),i&2){let o;G(o=W())&&(r.primaryAction=o.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(i,r){i&1&&_e("keydown",function(s){return r._handleKeydown(s)}),i&2&&(Xt("id",r.id),fe("role",r.role)("aria-label",r.ariaLabel),bn("mat-"+(r.color||"primary")),K("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",r.leadingIcon)("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-basic-chip",r._isBasicChip)("mat-mdc-standard-chip",!r._isBasicChip)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon())("_mat-animation-noopable",r._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",P],highlighted:[2,"highlighted","highlighted",P],disableRipple:[2,"disableRipple","disableRipple",P],disabled:[2,"disabled","disabled",P]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[he([{provide:H_,useExisting:t}])],ngContentSelectors:uI,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(i,r){i&1&&(Ee(dI),ee(0,"span",0),b(1,"span",1)(2,"span",2),me(3,$B,2,0,"span",3),b(4,"span",4),R(5),ee(6,"span",5),C()()(),me(7,qB,2,0,"span",6)),i&2&&(D(3),pe(r.leadingIcon?3:-1),D(4),pe(r._hasTrailingIcon()?7:-1))},dependencies:[hI],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})}return t})();var Tl=(()=>{class t extends j_{_defaultOptions=u(B_,{optional:!0});chipListSelectable=!0;_chipListMultiple=!1;_chipListHideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get selectable(){return this._selectable&&this.chipListSelectable}set selectable(e){this._selectable=e,this._changeDetectorRef.markForCheck()}_selectable=!0;get selected(){return this._selected}set selected(e){this._setSelectedState(e,!1,!0)}_selected=!1;get ariaSelected(){return this.selectable?this.selected.toString():null}basicChipAttrName="mat-basic-chip-option";selectionChange=new te;ngOnInit(){super.ngOnInit(),this.role="presentation"}select(){this._setSelectedState(!0,!1,!0)}deselect(){this._setSelectedState(!1,!1,!0)}selectViaInteraction(){this._setSelectedState(!0,!0,!0)}toggleSelected(e=!1){return this._setSelectedState(!this.selected,e,!0),this.selected}_handlePrimaryActionInteraction(){this.disabled||(this.focus(),this.selectable&&this.toggleSelected(!0))}_hasLeadingGraphic(){return this.leadingIcon?!0:!this._chipListHideSingleSelectionIndicator||this._chipListMultiple}_setSelectedState(e,i,r){e!==this.selected&&(this._selected=e,r&&this.selectionChange.emit({source:this,isUserInput:i,selected:this.selected}),this._changeDetectorRef.markForCheck())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275cmp=T({type:t,selectors:[["mat-basic-chip-option"],["","mat-basic-chip-option",""],["mat-chip-option"],["","mat-chip-option",""]],hostAttrs:[1,"mat-mdc-chip","mat-mdc-chip-option"],hostVars:37,hostBindings:function(i,r){i&2&&(Xt("id",r.id),fe("tabindex",null)("aria-label",null)("aria-description",null)("role",r.role),K("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--filter",!r._isBasicChip)("mdc-evolution-chip--selectable",!r._isBasicChip)("mat-mdc-chip-selected",r.selected)("mat-mdc-chip-multiple",r._chipListMultiple)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-chip-with-avatar",r.leadingIcon)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--selected",r.selected)("mdc-evolution-chip--selecting",!r._animationsDisabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-primary-graphic",r._hasLeadingGraphic())("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon()))},inputs:{selectable:[2,"selectable","selectable",P],selected:[2,"selected","selected",P]},outputs:{selectionChange:"selectionChange"},features:[he([{provide:j_,useExisting:t},{provide:H_,useExisting:t}]),re],ngContentSelectors:uI,decls:8,vars:6,consts:[[1,"mat-mdc-chip-focus-overlay"],["role","presentation",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipAction","","role","option",3,"_allowFocusWhenDisabled"],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],["role","presentation",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"],[1,"mdc-evolution-chip__checkmark"],["viewBox","-2 -3 30 30","focusable","false","aria-hidden","true",1,"mdc-evolution-chip__checkmark-svg"],["fill","none","stroke","currentColor","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-evolution-chip__checkmark-path"]],template:function(i,r){i&1&&(Ee(dI),ee(0,"span",0),b(1,"span",1)(2,"button",2),me(3,GB,5,0,"span",3),b(4,"span",4),R(5),ee(6,"span",5),C()()(),me(7,WB,2,0,"span",6)),i&2&&(D(2),q("_allowFocusWhenDisabled",!0),fe("aria-description",r.ariaDescription)("aria-label",r.ariaLabel)("aria-selected",r.ariaSelected),D(),pe(r._hasLeadingGraphic()?3:-1),D(4),pe(r._hasTrailingIcon()?7:-1))},dependencies:[mI],styles:[KB],encapsulation:2})}return t})();var QB=(()=>{class t{_elementRef=u(L);_changeDetectorRef=u(Ze);_dir=u(ei,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new N;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new yn;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(kt(null),Qe(()=>rn(...this._chips.map(e))))}_originatesFromChip(e){let i=e.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains("mat-mdc-chip"))return!0;i=i.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(kt(this._chips)).subscribe(e=>{let i=[];e.forEach(r=>r._getActions().forEach(o=>i.push(o))),this._chipActions.reset(i),this._chipActions.notifyOnChanges()}),this._keyManager=new sr(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(Pe(this._destroyed)).subscribe(({chip:e})=>{let i=e._getSourceAction(document.activeElement);i&&this._keyManager.updateActiveItem(i)}),this._dir?.change.pipe(Pe(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(kt(null),Pe(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(Pe(this._destroyed)).subscribe(e=>{let r=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),s=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),a=o||s;this._isValidIndex(r)&&a&&(this._lastDestroyedFocusedChipIndex=r)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),i=this._chips.toArray()[e];i.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():i.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-chip-set"]],contentQueries:function(i,r,o){if(i&1&&dt(o,j_,5),i&2){let s;G(s=W())&&(r._chips=s)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(i,r){i&1&&_e("keydown",function(s){return r._handleKeydown(s)}),i&2&&fe("role",r.role)},inputs:{disabled:[2,"disabled","disabled",P],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:xi(e)]},ngContentSelectors:fI,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(i,r){i&1&&(Ee(),nt(0,"div",0),R(1),lt())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})}return t})(),V_=class{source;value;constructor(n,e){this.source=n,this.value=e}},ZB={provide:Zo,useExisting:xt(()=>kl),multi:!0},kl=(()=>{class t extends QB{_onTouched=()=>{};_onChange=()=>{};_defaultRole="listbox";_defaultOptions=u(B_,{optional:!0});get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._syncListboxProperties()}_multiple=!1;get selected(){let e=this._chips.toArray().filter(i=>i.selected);return this.multiple?e:e[0]}ariaOrientation="horizontal";get selectable(){return this._selectable}set selectable(e){this._selectable=e,this._syncListboxProperties()}_selectable=!0;compareWith=(e,i)=>e===i;required=!1;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncListboxProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get chipSelectionChanges(){return this._getChipStream(e=>e.selectionChange)}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}get value(){return this._value}set value(e){this._chips&&this._chips.length&&this._setSelectionByValue(e,!1),this._value=e}_value;change=new te;_chips=void 0;ngAfterContentInit(){this._chips.changes.pipe(kt(null),Pe(this._destroyed)).subscribe(()=>{this.value!==void 0&&Promise.resolve().then(()=>{this._setSelectionByValue(this.value,!1)}),this._syncListboxProperties()}),this.chipBlurChanges.pipe(Pe(this._destroyed)).subscribe(()=>this._blur()),this.chipSelectionChanges.pipe(Pe(this._destroyed)).subscribe(e=>{this.multiple||this._chips.forEach(i=>{i!==e.source&&i._setSelectedState(!1,!1,!1)}),e.isUserInput&&this._propagateChanges()})}focus(){if(this.disabled)return;let e=this._getFirstSelectedChip();e&&!e.disabled?e.focus():this._chips.length>0?this._keyManager.setFirstItemActive():this._elementRef.nativeElement.focus()}writeValue(e){e!=null?this.value=e:this.value=void 0}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_setSelectionByValue(e,i=!0){this._clearSelection(),Array.isArray(e)?e.forEach(r=>this._selectValue(r,i)):this._selectValue(e,i)}_blur(){this.disabled||setTimeout(()=>{this.focused||this._markAsTouched()})}_keydown(e){e.keyCode===9&&super._allowFocusEscape()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck()}_propagateChanges(){let e=null;Array.isArray(this.selected)?e=this.selected.map(i=>i.value):e=this.selected?this.selected.value:void 0,this._value=e,this.change.emit(new V_(this,e)),this._onChange(e),this._changeDetectorRef.markForCheck()}_clearSelection(e){this._chips.forEach(i=>{i!==e&&i.deselect()})}_selectValue(e,i){let r=this._chips.find(o=>o.value!=null&&this.compareWith(o.value,e));return r&&(i?r.selectViaInteraction():r.select()),r}_syncListboxProperties(){this._chips&&Promise.resolve().then(()=>{this._chips.forEach(e=>{e._chipListMultiple=this.multiple,e.chipListSelectable=this._selectable,e._chipListHideSingleSelectionIndicator=this.hideSingleSelectionIndicator,e._changeDetectorRef.markForCheck()})})}_getFirstSelectedChip(){return Array.isArray(this.selected)?this.selected.length?this.selected[0]:void 0:this.selected}_skipPredicate(e){return!1}static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275cmp=T({type:t,selectors:[["mat-chip-listbox"]],contentQueries:function(i,r,o){if(i&1&&dt(o,Tl,5),i&2){let s;G(s=W())&&(r._chips=s)}},hostAttrs:[1,"mdc-evolution-chip-set","mat-mdc-chip-listbox"],hostVars:10,hostBindings:function(i,r){i&1&&_e("focus",function(){return r.focus()})("blur",function(){return r._blur()})("keydown",function(s){return r._keydown(s)}),i&2&&(Xt("tabIndex",r.disabled||r.empty?-1:r.tabIndex),fe("role",r.role)("aria-required",r.role?r.required:null)("aria-disabled",r.disabled.toString())("aria-multiselectable",r.multiple)("aria-orientation",r.ariaOrientation),K("mat-mdc-chip-list-disabled",r.disabled)("mat-mdc-chip-list-required",r.required))},inputs:{multiple:[2,"multiple","multiple",P],ariaOrientation:[0,"aria-orientation","ariaOrientation"],selectable:[2,"selectable","selectable",P],compareWith:"compareWith",required:[2,"required","required",P],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",P],value:"value"},outputs:{change:"change"},features:[he([ZB]),re],ngContentSelectors:fI,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(i,r){i&1&&(Ee(),nt(0,"div",0),R(1),lt())},styles:[YB],encapsulation:2})}return t})();var pI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({providers:[kh,{provide:B_,useValue:{separatorKeyCodes:[13]}}],imports:[Wr,Me]})}return t})();var lr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[_h,Xr,Me]})}return t})();var XB=new y("MAT_BUTTON_CONFIG");function vI(t){return t==null?void 0:xi(t)}var z_=(()=>{class t{_elementRef=u(L);_ngZone=u(O);_animationsDisabled=Nt();_config=u(XB,{optional:!0});_focusMonitor=u(ji);_cleanupClick;_renderer=u(Ue);_rippleLoader=u(Th);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=Gt(!1,{transform:P});constructor(){u(bt).load(xn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(i,r){i&2&&(fe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),bn(r.color?"mat-"+r.color:""),K("mat-mdc-button-progress-indicator-shown",r.showProgress())("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",P],disabled:[2,"disabled","disabled",P],ariaDisabled:[2,"aria-disabled","ariaDisabled",P],disabledInteractive:[2,"disabledInteractive","disabledInteractive",P],tabIndex:[2,"tabIndex","tabIndex",vI],_tabindex:[2,"tabindex","_tabindex",vI],showProgress:[1,"showProgress"]}})}return t})();var _I=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],bI=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function JB(t,n){t&1&&(nt(0,"div",2),R(1,3),lt())}function e2(t,n){t&1&&(nt(0,"div",2),R(1,3),lt())}var t2=`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
  border-radius: calc(var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--%NS%mat-fab-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large));
  color: var(--%NS%mat-fab-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--%NS%mat-fab-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--%NS%mat-fab-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-touch-target-size, 48px);
  display: var(--%NS%mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--%NS%mat-fab-small-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium));
  color: var(--%NS%mat-fab-small-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-small-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--%NS%mat-fab-small-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--%NS%mat-fab-small-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-small-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab .mat-focus-indicator::before {
  border-radius: calc(var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-small-touch-target-size, 48px);
  display: var(--%NS%mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--%NS%mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-small-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--%NS%mat-fab-extended-container-elevation-shadow, var(--%NS%mat-sys-level3));
  height: var(--%NS%mat-fab-extended-container-height, 56px);
  border-radius: var(--%NS%mat-fab-extended-container-shape, var(--%NS%mat-sys-corner-large));
  font-family: var(--%NS%mat-fab-extended-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-fab-extended-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-fab-extended-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-fab-extended-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--%NS%mat-fab-extended-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--%NS%mat-fab-extended-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-extended-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  margin-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,yI=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ph=(()=>{class t extends z_{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=n2(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?yI.get(this._appearance):null,o=yI.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[re],ngContentSelectors:bI,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Ee(_I),an(0,"span",0),R(1),nt(2,"span",1),R(3,1),lt(),R(4,2),me(5,JB,2,0,"div",2),an(6,"span",3)(7,"span",4)),i&2&&(K("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),D(5),pe(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return t})();function n2(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var i2=new y("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>$_}),$_={color:"accent"};var Lh=(()=>{class t extends z_{_options=u(i2,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||$_,this.color=this._options.color||$_.color}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["button","mat-mini-fab",""],["a","mat-mini-fab",""],["button","matMiniFab",""],["a","matMiniFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mdc-fab--mini","mat-mdc-mini-fab"],exportAs:["matButton","matAnchor"],features:[re],ngContentSelectors:bI,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Ee(_I),an(0,"span",0),R(1),nt(2,"span",1),R(3,1),lt(),R(4,2),me(5,e2,2,0,"div",2),an(6,"span",3)(7,"span",4)),i&2&&(K("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),D(5),pe(r.showProgress()?5:-1))},styles:[t2],encapsulation:2})}return t})();var wI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[Wr,Me]})}return t})();var r2=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return t})(),o2={passive:!0},SI=(()=>{class t{_platform=u($e);_ngZone=u(O);_renderer=u(ct).createRenderer(null,null);_styleLoader=u(bt);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return ot;this._styleLoader.load(r2);let i=en(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new N,s="cdk-text-field-autofilled",a=l=>{l.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(s)?(i.classList.add(s),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!0}))):l.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(s)&&(i.classList.remove(s),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",a,o2)));return this._monitoredElements.set(i,{subject:o,unlisten:c}),o}stopMonitoring(e){let i=en(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var CI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({})}return t})();var DI=new y("MAT_INPUT_VALUE_ACCESSOR");var s2=["button","checkbox","file","hidden","image","radio","range","reset","submit"],a2=new y("MAT_INPUT_CONFIG"),Na=(()=>{class t{_elementRef=u(L);_platform=u($e);ngControl=u(or,{optional:!0,self:!0});_autofillMonitor=u(SI);_ngZone=u(O);_formField=u(P_,{optional:!0});_renderer=u(Ue);_uid=u(ut).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(a2,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new N;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=tn(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Jt.required)??!1}set required(e){this._required=tn(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&S_().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=tn(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>S_().has(e));constructor(){let e=u(ph,{optional:!0}),i=u(Fi,{optional:!0}),r=u(kh),o=u(DI,{optional:!0,self:!0}),s=u(WN,{optional:!0,self:!0}),a=this._elementRef.nativeElement,c=a.nodeName.toLowerCase();o?$n(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Rh(r,s||this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=c==="select",this._isTextarea=c==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&$t(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){s2.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&_e("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(Xt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),fe("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),K("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",P]},exportAs:["matInput"],features:[he([{provide:F_,useExisting:t}]),Ye]})}return t})(),Ia=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[lr,lr,CI,Me]})}return t})();var c2=20,Bh=(()=>{class t{_ngZone=u(O);_platform=u($e);_renderer=u(ct).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new N;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=c2){return this._platform.isBrowser?new X(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Ds(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):$()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Ne(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._targetContainsElement(o,e)&&i.push(o)}),i}_targetContainsElement(e,i){let r=en(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var l2=20,Jr=(()=>{class t{_platform=u($e);_listeners;_viewportSize=null;_change=new N;_document=u(Q);constructor(){let e=u(O),i=u(ct).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,a=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:s,left:a}}change(e=l2){return e>0?this._change.pipe(Ds(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var xI=new y("CDK_VIRTUAL_SCROLL_VIEWPORT");var Vh=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({})}return t})(),Rl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[Me,Vh,Me,Vh]})}return t})();var d2=[[["caption"]],[["colgroup"],["col"]],"*"],u2=["caption","colgroup, col","*"];function f2(t,n){t&1&&R(0,2)}function h2(t,n){t&1&&(b(0,"thead",0),qt(1,1),C(),b(2,"tbody",0),qt(3,2)(4,3),C(),b(5,"tfoot",0),qt(6,4),C())}function m2(t,n){t&1&&qt(0,1)(1,2)(2,3)(3,4)}var ti=new y("CDK_TABLE");var zh=(()=>{class t{template=u(yt);static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","cdkCellDef",""]]})}return t})(),$h=(()=>{class t{template=u(yt);static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","cdkHeaderCellDef",""]]})}return t})(),MI=(()=>{class t{template=u(yt);static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","cdkFooterCellDef",""]]})}return t})(),Ma=(()=>{class t{_table=u(ti,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","cdkColumnDef",""]],contentQueries:function(i,r,o){if(i&1&&dt(o,zh,5)(o,$h,5)(o,MI,5),i&2){let s;G(s=W())&&(r.cell=s.first),G(s=W())&&(r.headerCell=s.first),G(s=W())&&(r.footerCell=s.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",P],stickyEnd:[2,"stickyEnd","stickyEnd",P]}})}return t})(),Uh=class{constructor(n,e){e.nativeElement.classList.add(...n._columnCssClassName)}},TI=(()=>{class t extends Uh{constructor(){super(u(Ma),u(L))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[re]})}return t})();var kI=(()=>{class t extends Uh{constructor(){let e=u(Ma),i=u(L);super(e,i);let r=e._table?._getCellRole();r&&i.nativeElement.setAttribute("role",r)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[re]})}return t})();var W_=(()=>{class t{template=u(yt);_differs=u($o);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let i=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(i).create(),this._columnsDiffer.diff(i)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof Ol?e.headerCell.template:this instanceof K_?e.footerCell.template:e.cell.template}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,features:[Ye]})}return t})(),Ol=(()=>{class t extends W_{_table=u(ti,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",P]},features:[re,Ye]})}return t})(),K_=(()=>{class t extends W_{_table=u(ti,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",P]},features:[re,Ye]})}return t})(),qh=(()=>{class t extends W_{_table=u(ti,{optional:!0});when;static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[re]})}return t})(),ss=(()=>{class t{_viewContainer=u(tt);cells;context;static mostRecentCellOutlet=null;constructor(){t.mostRecentCellOutlet=this}ngOnDestroy(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","cdkCellOutlet",""]]})}return t})(),Y_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&qt(0,0)},dependencies:[ss],encapsulation:2,changeDetection:1})}return t})();var Q_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&qt(0,0)},dependencies:[ss],encapsulation:2,changeDetection:1})}return t})(),RI=(()=>{class t{templateRef=u(yt);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["ng-template","cdkNoDataRow",""]]})}return t})(),EI=["top","bottom","left","right"],G_=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(n=>this._updateCachedSizes(n)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(n,e,i=!0,r=!0,o,s,a){this._isNativeHtmlTable=n,this._stickCellCss=e,this._isBrowser=i,this._needsPositionStickyOnElement=r,this.direction=o,this._positionListener=s,this._tableInjector=a,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(n,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(n);let i=[];for(let r of n)r.nodeType===r.ELEMENT_NODE&&i.push(r,...Array.from(r.children));Lt({write:()=>{for(let r of i)this._removeStickyStyle(r,e)}},{injector:this._tableInjector})}updateStickyColumns(n,e,i,r=!0,o=!0){if(!n.length||!this._isBrowser||!(e.some(E=>E)||i.some(E=>E))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let s=n[0],a=s.children.length,c=this.direction==="rtl",l=c?"right":"left",d=c?"left":"right",f=e.lastIndexOf(!0),h=i.indexOf(!0),m,p,w;o&&this._updateStickyColumnReplayQueue({rows:[...n],stickyStartStates:[...e],stickyEndStates:[...i]}),Lt({earlyRead:()=>{m=this._getCellWidths(s,r),p=this._getStickyStartColumnPositions(m,e),w=this._getStickyEndColumnPositions(m,i)},write:()=>{for(let E of n)for(let I=0;I<a;I++){let k=E.children[I];e[I]&&this._addStickyStyle(k,l,p[I],I===f),i[I]&&this._addStickyStyle(k,d,w[I],I===h)}this._positionListener&&m.some(E=>!!E)&&(this._positionListener.stickyColumnsUpdated({sizes:f===-1?[]:m.slice(0,f+1).map((E,I)=>e[I]?E:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:h===-1?[]:m.slice(h).map((E,I)=>i[I+h]?E:null).reverse()}))}},{injector:this._tableInjector})}stickRows(n,e,i){if(!this._isBrowser)return;let r=i==="bottom"?n.slice().reverse():n,o=i==="bottom"?e.slice().reverse():e,s=[],a=[],c=[];Lt({earlyRead:()=>{for(let l=0,d=0;l<r.length;l++){if(!o[l])continue;s[l]=d;let f=r[l];c[l]=this._isNativeHtmlTable?Array.from(f.children):[f];let h=this._retrieveElementSize(f).height;d+=h,a[l]=h}},write:()=>{let l=o.lastIndexOf(!0);for(let d=0;d<r.length;d++){if(!o[d])continue;let f=s[d],h=d===l;for(let m of c[d])this._addStickyStyle(m,i,f,h)}i==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:a,offsets:s,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:a,offsets:s,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(n,e){this._isNativeHtmlTable&&Lt({write:()=>{let i=n.querySelector("tfoot");i&&(e.some(r=>!r)?this._removeStickyStyle(i,["bottom"]):this._addStickyStyle(i,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(n,e){if(!n.classList.contains(this._stickCellCss))return;for(let r of e)n.style[r]="",n.classList.remove(this._borderCellCss[r]);EI.some(r=>e.indexOf(r)===-1&&n.style[r])?n.style.zIndex=this._getCalculatedZIndex(n):(n.style.zIndex="",this._needsPositionStickyOnElement&&(n.style.position=""),n.classList.remove(this._stickCellCss))}_addStickyStyle(n,e,i,r){n.classList.add(this._stickCellCss),r&&n.classList.add(this._borderCellCss[e]),n.style[e]=`${i}px`,n.style.zIndex=this._getCalculatedZIndex(n),this._needsPositionStickyOnElement&&(n.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(n){let e={top:100,bottom:10,left:1,right:1},i=0;for(let r of EI)n.style[r]&&(i+=e[r]);return i?`${i}`:""}_getCellWidths(n,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let i=[],r=n.children;for(let o=0;o<r.length;o++){let s=r[o];i.push(this._retrieveElementSize(s).width)}return this._cachedCellWidths=i,i}_getStickyStartColumnPositions(n,e){let i=[],r=0;for(let o=0;o<n.length;o++)e[o]&&(i[o]=r,r+=n[o]);return i}_getStickyEndColumnPositions(n,e){let i=[],r=0;for(let o=n.length;o>0;o--)e[o]&&(i[o]=r,r+=n[o]);return i}_retrieveElementSize(n){let e=this._elemSizeCache.get(n);if(e)return e;let i=n.getBoundingClientRect(),r={width:i.width,height:i.height};return this._resizeObserver&&(this._elemSizeCache.set(n,r),this._resizeObserver.observe(n,{box:"border-box"})),r}_updateStickyColumnReplayQueue(n){this._removeFromStickyColumnReplayQueue(n.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(n)}_removeFromStickyColumnReplayQueue(n){let e=new Set(n);for(let i of this._updatedStickyColumnsParamsToReplay)i.rows=i.rows.filter(r=>!e.has(r));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(i=>!!i.rows.length)}_updateCachedSizes(n){let e=!1;for(let i of n){let r=i.borderBoxSize?.length?{width:i.borderBoxSize[0].inlineSize,height:i.borderBoxSize[0].blockSize}:{width:i.contentRect.width,height:i.contentRect.height};r.width!==this._elemSizeCache.get(i.target)?.width&&p2(i.target)&&(e=!0),this._elemSizeCache.set(i.target,r)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let i of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(i.rows,i.stickyStartStates,i.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function p2(t){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(n=>t.classList.contains(n))}function NI(t){return Error(`Could not find column with id "${t}".`)}var Al=new y("STICKY_POSITIONING_LISTENER");var Z_=(()=>{class t{viewContainer=u(tt);elementRef=u(L);constructor(){let e=u(ti);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","rowOutlet",""]]})}return t})(),X_=(()=>{class t{viewContainer=u(tt);elementRef=u(L);constructor(){let e=u(ti);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","headerRowOutlet",""]]})}return t})(),J_=(()=>{class t{viewContainer=u(tt);elementRef=u(L);constructor(){let e=u(ti);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","footerRowOutlet",""]]})}return t})(),eb=(()=>{class t{viewContainer=u(tt);elementRef=u(L);constructor(){let e=u(ti);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","noDataRowOutlet",""]]})}return t})(),tb=(()=>{class t{_differs=u($o);_changeDetectorRef=u(Ze);_elementRef=u(L);_dir=u(ei,{optional:!0});_platform=u($e);_viewRepeater;_viewportRuler=u(Jr);_injector=u(de);_virtualScrollViewport=u(xI,{optional:!0,host:!0});_positionListener=u(Al,{optional:!0})||u(Al,{optional:!0,skipSelf:!0});_document=u(Q);_data;_renderedRange;_onDestroy=new N;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new N;_footerRowStickyUpdates=new N;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new N;_dataStream=new N;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new te;viewChange=new ht({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){u(new An("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((i,r)=>this.trackBy?this.trackBy(r.dataIndex,r.data):r)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(Pe(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Dh:new xh,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Ch(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let i=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,i,(r,o,s)=>this._getEmbeddedViewArgs(r.item,s),r=>r.item.data,r=>{r.operation===Jn.INSERTED&&r.context&&this._renderCellTemplateForItem(r.record.item.rowDef,r.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);o.context.$implicit=r.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let r=II(this._headerRowOutlet,"thead");r&&(r.style.display=e.length?"":"none")}let i=this._headerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,i,"top"),this._headerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let r=II(this._footerRowOutlet,"tfoot");r&&(r.style.display=e.length?"":"none")}let i=this._footerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,i,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,i),this._footerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),i=this._getRenderedRows(this._rowOutlet),r=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...i,...r],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,s)=>{this._addStickyColumnStyles([o],this._headerRowDefs[s])}),this._rowDefs.forEach(o=>{let s=[];for(let a=0;a<i.length;a++)this._renderRows[a].rowDef===o&&s.push(i[a]);this._addStickyColumnStyles(s,o)}),r.forEach((o,s)=>{this._addStickyColumnStyles([o],this._footerRowDefs[s])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let i=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||i,this._forceRecalculateCellWidths=i,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],i=Math.min(this._data.length,this._renderedRange.end),r=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<i;o++){let s=this._data[o],a=this._getRenderRowsForData(s,o,r.get(s));this._cachedRenderRowsMap.has(s)||this._cachedRenderRowsMap.set(s,new WeakMap);for(let c=0;c<a.length;c++){let l=a[c],d=this._cachedRenderRowsMap.get(l.data);d.has(l.rowDef)?d.get(l.rowDef).push(l):d.set(l.rowDef,[l]),e.push(l)}}return e}_getRenderRowsForData(e,i,r){return this._getRowDefs(e,i).map(s=>{let a=r&&r.has(s)?r.get(s):[];if(a.length){let c=a.shift();return c.dataIndex=i,c}else return{data:e,rowDef:s,dataIndex:i}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Hh(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(i=>{this._columnDefsByName.has(i.name),this._columnDefsByName.set(i.name,i)})}_cacheRowDefs(){this._headerRowDefs=Hh(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Hh(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Hh(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(i=>!i.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(s,a)=>{let c=!!a.getColumnsDiff();return s||c},i=this._rowDefs.reduce(e,!1);i&&this._forceRenderDataRows();let r=this._headerRowDefs.reduce(e,!1);r&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),i||r||o}_switchDataSource(e){this._data=[],Ch(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Ch(this.dataSource)?e=this.dataSource.connect(this):mo(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=$(this.dataSource)),this._renderChangeSubscription=br([e,this.viewChange]).pipe(Pe(this._onDestroy)).subscribe(([i,r])=>{this._data=i||[],this._renderedRange=r,this._dataStream.next(i),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,i)=>this._renderRow(this._headerRowOutlet,e,i)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,i)=>this._renderRow(this._footerRowOutlet,e,i)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,i){let r=Array.from(i?.columns||[]).map(a=>{let c=this._columnDefsByName.get(a);if(!c)throw NI(a);return c}),o=r.map(a=>a.sticky),s=r.map(a=>a.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,s,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let i=[];for(let r=0;r<e.viewContainer.length;r++){let o=e.viewContainer.get(r);i.push(o.rootNodes[0])}return i}_getRowDefs(e,i){if(this._rowDefs.length===1)return[this._rowDefs[0]];let r=[];if(this.multiTemplateDataRows)r=this._rowDefs.filter(o=>!o.when||o.when(i,e));else{let o=this._rowDefs.find(s=>s.when&&s.when(i,e))||this._defaultRowDef;o&&r.push(o)}return r.length,r}_getEmbeddedViewArgs(e,i){let r=e.rowDef,o={$implicit:e.data};return{templateRef:r.template,context:o,index:i}}_renderRow(e,i,r,o={}){let s=e.viewContainer.createEmbeddedView(i.template,o,r);return this._renderCellTemplateForItem(i,o),s}_renderCellTemplateForItem(e,i){for(let r of this._getCellTemplates(e))ss.mostRecentCellOutlet&&ss.mostRecentCellOutlet._viewContainer.createEmbeddedView(r,i);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let i=0,r=e.length;i<r;i++){let s=e.get(i).context;s.count=r,s.first=i===0,s.last=i===r-1,s.even=i%2===0,s.odd=!s.even,this.multiTemplateDataRows?(s.dataIndex=this._renderRows[i].dataIndex,s.renderIndex=i):s.index=this._renderRows[i].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,i=>{let r=this._columnDefsByName.get(i);if(!r)throw NI(i);return e.extractCellTemplate(r)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(i,r)=>i||r.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",i=this._injector;this._stickyStyler=new G_(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,i),(this._dir?this._dir.change:$()).pipe(Pe(this._onDestroy)).subscribe(r=>{this._stickyStyler.direction=r,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let i=typeof requestAnimationFrame<"u"?fd:ld;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Ds(0,i),Pe(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(r,o)=>this._measureRangeSize(r,o)}),br([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(Pe(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let s=0;s<o.elements.length;s++){let a=o.elements[s];if(a){let c=o.offsets[s],l=r!==0?Math.max(r-c,c):-c;for(let d of a)d.style.top=`${-l}px`}}}),br([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(Pe(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let s=0;s<o.elements.length;s++){let a=o.elements[s];if(a)for(let c of a)c.style.bottom=`${r+o.offsets[s]}px`}})}_getOwnDefs(e){return e.filter(i=>!i._table||i._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let i=this._rowOutlet.viewContainer.length===0;if(i===this._isShowingNoDataRow)return;let r=this._noDataRowOutlet.viewContainer;if(i){let o=r.createEmbeddedView(e.templateRef),s=o.rootNodes[0];if(o.rootNodes.length===1&&s?.nodeType===this._document.ELEMENT_NODE){s.setAttribute("role","row"),s.classList.add(...e._contentClassNames);let a=s.querySelectorAll(e._cellSelector);for(let c=0;c<a.length;c++)a[c].classList.add(...e._cellClassNames)}}else r.clear();this._isShowingNoDataRow=i,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,i){if(e.start>=e.end||i!=="vertical")return 0;let r=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<r.start||e.end>r.end;let s=e.start-r.start,a=e.end-e.start,c,l;for(let h=0;h<a;h++){let m=o.get(h+s);if(m&&m.rootNodes.length){c=l=m.rootNodes[0];break}}for(let h=a-1;h>-1;h--){let m=o.get(h+s);if(m&&m.rootNodes.length){l=m.rootNodes[m.rootNodes.length-1];break}}let d=c?.getBoundingClientRect?.(),f=l?.getBoundingClientRect?.();return d&&f?f.bottom-d.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(i,r,o){if(i&1&&dt(o,RI,5)(o,Ma,5)(o,qh,5)(o,Ol,5)(o,K_,5),i&2){let s;G(s=W())&&(r._noDataRow=s.first),G(s=W())&&(r._contentColumnDefs=s),G(s=W())&&(r._contentRowDefs=s),G(s=W())&&(r._contentHeaderRowDefs=s),G(s=W())&&(r._contentFooterRowDefs=s)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(i,r){i&2&&K("cdk-table-fixed-layout",r.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",P],fixedLayout:[2,"fixedLayout","fixedLayout",P],recycleRows:[2,"recycleRows","recycleRows",P]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[he([{provide:ti,useExisting:t},{provide:Al,useValue:null}])],ngContentSelectors:u2,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(Ee(d2),R(0),R(1,1),me(2,f2,1,0),me(3,h2,7,0)(4,m2,4,0)),i&2&&(D(2),pe(r._isServer?2:-1),D(),pe(r._isNativeHtmlTable?3:4))},dependencies:[X_,Z_,eb,J_],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return t})();function Hh(t,n){return t.concat(Array.from(n))}function II(t,n){let e=n.toUpperCase(),i=t.viewContainer.element.nativeElement;for(;i;){let r=i.nodeType===1?i.nodeName:null;if(r===e)return i;if(r==="TABLE")break;i=i.parentNode}return null}var AI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[Rl]})}return t})();var g2=[[["caption"]],[["colgroup"],["col"]],"*"],v2=["caption","colgroup, col","*"];function y2(t,n){t&1&&R(0,2)}function _2(t,n){t&1&&(b(0,"thead",0),qt(1,1),C(),b(2,"tbody",2),qt(3,3)(4,4),C(),b(5,"tfoot",0),qt(6,5),C())}function b2(t,n){t&1&&qt(0,1)(1,3)(2,4)(3,5)}var OI=(()=>{class t extends tb{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275cmp=T({type:t,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(i,r){i&2&&K("mat-table-fixed-layout",r.fixedLayout)},exportAs:["matTable"],features:[he([{provide:tb,useExisting:t},{provide:ti,useExisting:t},{provide:Al,useValue:null}]),re],ngContentSelectors:v2,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(Ee(g2),R(0),R(1,1),me(2,y2,1,0),me(3,_2,7,0)(4,b2,4,0)),i&2&&(D(2),pe(r._isServer?2:-1),D(),pe(r._isNativeHtmlTable?3:4))},dependencies:[X_,Z_,eb,J_],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})}return t})(),FI=(()=>{class t extends zh{static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matCellDef",""]],features:[he([{provide:zh,useExisting:t}]),re]})}return t})(),PI=(()=>{class t extends $h{static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matHeaderCellDef",""]],features:[he([{provide:$h,useExisting:t}]),re]})}return t})();var LI=(()=>{class t extends Ma{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[he([{provide:Ma,useExisting:t}]),re]})}return t})(),jI=(()=>{class t extends TI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[re]})}return t})();var VI=(()=>{class t extends kI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[re]})}return t})();var BI=(()=>{class t extends Ol{static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",P]},features:[he([{provide:Ol,useExisting:t}]),re]})}return t})();var HI=(()=>{class t extends qh{static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[he([{provide:qh,useExisting:t}]),re]})}return t})(),UI=(()=>{class t extends Y_{static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275cmp=T({type:t,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[he([{provide:Y_,useExisting:t}]),re],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&qt(0,0)},dependencies:[ss],encapsulation:2,changeDetection:1})}return t})();var zI=(()=>{class t extends Q_{static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275cmp=T({type:t,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[he([{provide:Q_,useExisting:t}]),re],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&qt(0,0)},dependencies:[ss],encapsulation:2,changeDetection:1})}return t})();var $I=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[AI,Me]})}return t})();function S2(t,n){if(t&1){let e=jt();b(0,"mat-card",3)(1,"mat-card-header")(2,"mat-card-title"),H(3,"Add Players"),C()(),b(4,"mat-card-content")(5,"form",15)(6,"mat-form-field")(7,"mat-label"),H(8,"Player Name"),C(),ee(9,"input",16,1),wi(),C(),b(11,"button",17),_e("click",function(){gt(e);let r=Rn(10),o=ce();return vt(o.addPlayer(r))}),b(12,"mat-icon"),H(13,"add"),C()()()()()}if(t&2){let e=ce();D(5),q("formGroup",e.playerForm),D(4),Si()}}function C2(t,n){t&1&&(b(0,"th",18),H(1," Name "),C())}function D2(t,n){if(t&1&&(b(0,"td",19),H(1),C()),t&2){let e=n.$implicit;D(),cn(" ",e.name," ")}}function x2(t,n){t&1&&(b(0,"th",18),H(1," Faction "),C())}function E2(t,n){if(t&1&&(b(0,"td",19),ee(1,"mat-icon",20),C()),t&2){let e=n.$implicit;D(),q("svgIcon",Pr(e.faction?.name?.toLowerCase()))}}function N2(t,n){t&1&&(b(0,"th",18),H(1," Position "),C())}function I2(t,n){if(t&1&&(b(0,"td",19),H(1),C()),t&2){let e=n.$implicit;D(),cn(" ",e.position," ")}}function M2(t,n){t&1&&(b(0,"th",18),H(1," Slice "),C())}function T2(t,n){t&1&&(b(0,"mat-icon",22),H(1,"done"),C())}function k2(t,n){if(t&1&&(b(0,"td",19),je(1,T2,2,0,"mat-icon",21),C()),t&2){let e=n.$implicit;D(),q("ngIf",e?.slice)}}function R2(t,n){t&1&&ee(0,"tr",23)}function A2(t,n){t&1&&ee(0,"tr",24)}function O2(t,n){if(t&1&&(b(0,"h2"),H(1),C()),t&2){let e=ce();D(),cn("It\xB4s time for ",e.players()[e.currentPosition()].name," to draft")}}function F2(t,n){if(t&1&&ee(0,"span",31),t&2){let e=n.$implicit;K("outline",e)}}function P2(t,n){if(t&1){let e=jt();b(0,"mat-chip-option",27),_e("click",function(){let r=gt(e).index,o=ce(2);return vt(o.draftFaction(r))}),b(1,"mat-chip-avatar"),ee(2,"mat-icon",28),C(),b(3,"span"),H(4),C(),b(5,"span",29),je(6,F2,1,2,"span",30),C()()}if(t&2){let e=n.$implicit,i=ce(2);D(2),q("svgIcon",Pr(e.name.toLowerCase())),D(2),At(e.name),D(),K("complexity-low",e.difficulty===i.complexity.Low)("complexity-moderate",e.difficulty===i.complexity.Moderate)("complexity-high",e.difficulty===i.complexity.High),q("title",i.complexityLabel(e.difficulty)),fe("aria-label",i.complexityLabel(e.difficulty)),D(),q("ngForOf",i.complexityBars(e.difficulty))}}function L2(t,n){if(t&1&&(b(0,"mat-card",3)(1,"mat-card-header")(2,"mat-card-title"),H(3,"Faction to draft"),C()(),b(4,"mat-card-content")(5,"mat-chip-listbox",25),je(6,P2,7,12,"mat-chip-option",26),C()()()),t&2){let e=ce();D(6),q("ngForOf",e.draftFactions())}}function j2(t,n){if(t&1){let e=jt();b(0,"mat-chip-option",27),_e("click",function(){let r=gt(e).index,o=ce(2);return vt(o.draftPosition(r))}),b(1,"span"),H(2),C()()}if(t&2){let e=n.$implicit;D(2),At(e)}}function V2(t,n){if(t&1&&(b(0,"mat-card",3)(1,"mat-card-header")(2,"mat-card-title"),H(3,"Position to draft"),C()(),b(4,"mat-card-content")(5,"mat-chip-listbox",25),je(6,j2,3,1,"mat-chip-option",26),C()()()),t&2){let e=ce();D(6),q("ngForOf",e.positions())}}function B2(t,n){if(t&1){let e=jt();b(0,"mat-chip-option",27),_e("click",function(){let r=gt(e).index,o=ce(2);return vt(o.draftSlice(r))}),b(1,"span"),H(2,"Slice"),C()()}}function H2(t,n){if(t&1&&(b(0,"mat-card",3)(1,"mat-card-header")(2,"mat-card-title"),H(3,"Slices to draft"),C()(),b(4,"mat-card-content")(5,"mat-chip-listbox",25),je(6,B2,3,0,"mat-chip-option",26),C()()()),t&2){let e=ce();D(6),q("ngForOf",e.slices())}}var qI=(()=>{class t{constructor(){this.settingsService=u(Pi),this.complexity=Oe,this.displayedColumns=["name","faction","position","slice"],this.factions=ze(()=>Li.factions.filter(e=>this.settingsService.settings().editions.includes(e.edition))),this.draftFactions=U([]),this.players=U([]),this.positions=U([]),this.slices=U([]),this.currentPosition=U(0),this.incomplete=ze(()=>this.players().some(e=>!e.position||!e.faction||!e.slice)),this.increment=1,this.playerForm=new Ai({name:new Oi(null,Jt.required)})}ngOnDestroy(){this.players.set([]),this.draftFactions.set([]),this.playerForm.reset()}addPlayer(e){if(this.playerForm.valid){let i=this.playerForm.get("name")?.value;this.playerForm.reset(),this.players.update(r=>[...r,{name:i}]),e.focus()}}shuffle(e){this.draftFactions.set(this.shuffleFisherYates([...this.factions()]).slice(0,this.players().length+this.settingsService.settings().additionalFactions)),this.players.set(this.shuffleFisherYates([...this.players()])),this.positions.set(this.players().map((i,r)=>this.formatter(r+1))),this.slices.set(this.players().map(()=>!0)),e.disabled=!0}shuffleFisherYates(e){let i=e.length;for(;i--;){let r=Math.floor(Math.random()*(i+1));[e[i],e[r]]=[e[r],e[i]]}return e}formatter(e){switch(e){case 1:return"Speaker";case 2:return e+"nd";case 3:return e+"rd";default:return e+"th"}}complexityLabel(e){return Oe[e]}complexityBars(e){switch(e){case Oe.Low:return[!1,!0,!0];case Oe.Moderate:return[!1,!1,!0];case Oe.High:return[!1,!1,!1]}}draftPosition(e){this.players.update(i=>i.map((r,o)=>o===this.currentPosition()?Y(_({},r),{position:this.positions()[e]}):r)),this.positions.update(i=>i.filter((r,o)=>o!==e)),this.progressCounter()}draftSlice(e){this.players.update(i=>i.map((r,o)=>o===this.currentPosition()?Y(_({},r),{slice:this.slices()[e]}):r)),this.slices.update(i=>i.filter((r,o)=>o!==e)),this.progressCounter()}draftFaction(e){this.players.update(i=>i.map((r,o)=>o===this.currentPosition()?Y(_({},r),{faction:this.draftFactions()[e]}):r)),this.draftFactions.update(i=>i.filter((r,o)=>o!==e)),this.progressCounter()}progressCounter(){this.currentPosition.update(e=>e+this.increment),this.currentPosition()===-1?(this.currentPosition.set(0),this.increment*=-1):this.currentPosition()===this.players().length&&(this.currentPosition.set(this.players().length-1),this.increment*=-1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=T({type:t,selectors:[["app-draft"]],standalone:!1,decls:32,vars:8,consts:[["shuffleButton",""],["nameInput",""],["appearance","outlined",4,"ngIf"],["appearance","outlined"],["mat-table","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","faction"],["matColumnDef","position"],["matColumnDef","slice"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["type","button","mat-mini-fab","",3,"click"],[4,"ngIf"],[3,"formGroup"],["formControlName","name","matInput",""],["type","submit","mat-mini-fab","",3,"click"],["mat-header-cell",""],["mat-cell",""],["aria-hidden","false",3,"svgIcon"],["aria-hidden","false",4,"ngIf"],["aria-hidden","false"],["mat-header-row",""],["mat-row",""],[1,"mat-mdc-chip-set-stacked"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["inline","true",3,"svgIcon"],[1,"faction-complexity",3,"title"],["class","complexity-bar",3,"outline",4,"ngFor","ngForOf"],[1,"complexity-bar"]],template:function(i,r){if(i&1){let o=jt();je(0,S2,14,1,"mat-card",2),ee(1,"br"),b(2,"mat-card",3)(3,"mat-card-header")(4,"mat-card-title"),H(5,"Players"),C()(),b(6,"mat-card-content")(7,"table",4),Ci(8,5),je(9,C2,2,0,"th",6)(10,D2,2,1,"td",7),Di(),Ci(11,8),je(12,x2,2,0,"th",6)(13,E2,2,2,"td",7),Di(),Ci(14,9),je(15,N2,2,0,"th",6)(16,I2,2,1,"td",7),Di(),Ci(17,10),je(18,M2,2,0,"th",6)(19,k2,2,1,"td",7),Di(),je(20,R2,1,0,"tr",11)(21,A2,1,0,"tr",12),C(),ee(22,"mat-divider"),C(),b(23,"mat-card-actions")(24,"button",13,0),_e("click",function(){gt(o);let a=Rn(25);return vt(r.shuffle(a))}),b(26,"mat-icon"),H(27,"shuffle"),C()()()(),je(28,O2,2,1,"h2",14)(29,L2,7,1,"mat-card",2)(30,V2,7,1,"mat-card",2)(31,H2,7,1,"mat-card",2)}i&2&&(q("ngIf",!r.draftFactions().length),D(7),q("dataSource",r.players()),D(13),q("matHeaderRowDef",r.displayedColumns),D(),q("matRowDefColumns",r.displayedColumns),D(7),q("ngIf",r.incomplete()),D(),q("ngIf",!r.players()[r.currentPosition()]?.faction),D(),q("ngIf",!r.players()[r.currentPosition()]?.position),D(),q("ngIf",!r.players()[r.currentPosition()]?.slice))},dependencies:[M_,Vi,Kr,qN,Qr,Zr,Yr,Fh,kl,Tl,Xr,cr,Lh,Na,OI,PI,BI,LI,FI,HI,jI,VI,UI,zI,Lr,qo,_a,qr,va,ya,Fi,Xo],styles:["mat-chip-option[_ngcontent-%COMP%]{padding-right:56px;position:relative}.faction-complexity[_ngcontent-%COMP%]{align-items:flex-start;display:flex;gap:2px;justify-content:flex-start;position:absolute;right:16px;top:50%;transform:translateY(-50%)}.complexity-bar[_ngcontent-%COMP%]{box-sizing:border-box;display:block;height:8px;width:16px}.complexity-low[_ngcontent-%COMP%]   .complexity-bar[_ngcontent-%COMP%]{background-color:green;color:green}.complexity-moderate[_ngcontent-%COMP%]   .complexity-bar[_ngcontent-%COMP%]{background-color:#ff0;color:#ff0}.complexity-high[_ngcontent-%COMP%]   .complexity-bar[_ngcontent-%COMP%]{background-color:red;color:red}.complexity-low[_ngcontent-%COMP%]   .complexity-bar.outline[_ngcontent-%COMP%]{background-color:transparent!important;border:2px solid green}.complexity-moderate[_ngcontent-%COMP%]   .complexity-bar.outline[_ngcontent-%COMP%]{background-color:transparent!important;border:2px solid yellow}"]})}}return t})();var GI=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=T({type:t,selectors:[["app-home"]],standalone:!1,decls:13,vars:0,consts:[["mat-button","","routerLink","/settings"],["mat-button","","routerLink","/tech"],["mat-button","","routerLink","/draft"],["mat-button","","routerLink","/slice"]],template:function(i,r){i&1&&(b(0,"mat-list")(1,"mat-list-item")(2,"button",0),H(3,"Settings"),C()(),b(4,"mat-list-item")(5,"button",1),H(6,"Tech"),C()(),b(7,"mat-list-item")(8,"button",2),H(9,"Draft"),C()(),b(10,"mat-list-item")(11,"button",3),H(12,"Slice Generator"),C()()())},dependencies:[FN,PN,Ph,ha],encapsulation:2})}}return t})();var U2=["*",[["mat-toolbar-row"]]],z2=["*","mat-toolbar-row"],$2=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),Gh=(()=>{class t{_elementRef=u(L);_platform=u($e);_document=u(Q);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-toolbar"]],contentQueries:function(i,r,o){if(i&1&&dt(o,$2,5),i&2){let s;G(s=W())&&(r._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,r){i&2&&(bn(r.color?"mat-"+r.color:""),K("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:z2,decls:2,vars:0,template:function(i,r){i&1&&(Ee(U2),R(0),R(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return t})();var WI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[Me]})}return t})();var nb=new y("CdkAccordion"),YI=(()=>{class t{_stateChanges=new N;_openCloseAllActions=new N;id=u(ut).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",P]},exportAs:["cdkAccordion"],features:[he([{provide:nb,useExisting:t}]),Ye]})}return t})(),QI=(()=>{class t{accordion=u(nb,{optional:!0,skipSelf:!0});_changeDetectorRef=u(Ze);_expansionDispatcher=u(Nl);_openCloseAllSubscription=ue.EMPTY;closed=new te;opened=new te;destroyed=new te;expandedChange=new te;id=u(ut).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let i=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,i)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=U(!1);_removeUniqueSelectionListener=()=>{};ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,i)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===i&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",P],disabled:[2,"disabled","disabled",P]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[he([{provide:nb,useValue:void 0}])]})}return t})(),ZI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({})}return t})();var Fl=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},ib=class extends Fl{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,e,i,r,o,s){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null,this.directives=s||null}},eo=class extends Fl{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},rb=class extends Fl{element;constructor(n){super(),this.element=n instanceof L?n.nativeElement:n}},Wh=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof ib)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof eo)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof rb)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Pl=class extends Wh{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(yi,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||de.NULL,o=r.get(He,i.injector);e=sf(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var XI=(()=>{class t extends Wh{_moduleRef=u(yi,{optional:!0});_document=u(Q);_viewContainerRef=u(tt);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new te;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[re]})}return t})(),Kh=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({})}return t})();var q2=["body"],G2=["bodyWrapper"],W2=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],K2=["mat-expansion-panel-header","*","mat-action-row"];function Y2(t,n){}var Q2=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Z2=["mat-panel-title","mat-panel-description","*"];function X2(t,n){t&1&&(nt(0,"span",1),zn(),nt(1,"svg",2),an(2,"path",3),lt()())}var ob=new y("MAT_ACCORDION"),JI=new y("MAT_EXPANSION_PANEL"),J2=(()=>{class t{_template=u(yt);_expansionPanel=u(JI,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["ng-template","matExpansionPanelContent",""]]})}return t})(),eM=new y("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),sb=(()=>{class t extends QI{_viewContainerRef=u(tt);_animationsDisabled=Nt();_document=u(Q);_ngZone=u(O);_elementRef=u(L);_renderer=u(Ue);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new te;afterCollapse=new te;_inputChanges=new N;accordion=u(ob,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=u(ut).getId("mat-expansion-panel-header-");constructor(){super();let e=u(eM,{optional:!0});this._expansionDispatcher=u(Nl),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(kt(null),Ne(()=>this.expanded&&!this._portal),mt(1)).subscribe(()=>{this._portal=new eo(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,i=this._body.nativeElement;return e===i||i.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:i})=>{e===this._bodyWrapper?.nativeElement&&i==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(i,r,o){if(i&1&&dt(o,J2,5),i&2){let s;G(s=W())&&(r._lazyContent=s.first)}},viewQuery:function(i,r){if(i&1&&Vt(q2,5)(G2,5),i&2){let o;G(o=W())&&(r._body=o.first),G(o=W())&&(r._bodyWrapper=o.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(i,r){i&2&&K("mat-expanded",r.expanded)("mat-expansion-panel-spacing",r._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",P],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[he([{provide:ob,useValue:void 0},{provide:JI,useExisting:t}]),re,Ye],ngContentSelectors:K2,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(i,r){i&1&&(Ee(W2),R(0),b(1,"div",2,0)(3,"div",3,1)(5,"div",4),R(6,1),je(7,Y2,0,0,"ng-template",5),C(),R(8,2),C()()),i&2&&(D(),fe("inert",r.expanded?null:""),D(2),q("id",r.id),fe("aria-labelledby",r._headerId),D(4),q("cdkPortalOutlet",r._portal))},dependencies:[XI],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-expansion-container-text-color, var(--%NS%mat-sys-on-surface));
  border-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--%NS%mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--%NS%mat-expansion-container-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-expansion-container-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-expansion-container-text-weight, var(--%NS%mat-sys-body-large-weight));
  line-height: var(--%NS%mat-expansion-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  letter-spacing: var(--%NS%mat-expansion-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--%NS%mat-expansion-actions-divider-color, var(--%NS%mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2})}return t})();var ab=(()=>{class t{panel=u(sb,{host:!0});_element=u(L);_focusMonitor=u(ji);_changeDetectorRef=u(Ze);_parentChangeSubscription=ue.EMPTY;constructor(){u(bt).load(xn);let e=this.panel,i=u(eM,{optional:!0}),r=u(new An("tabindex"),{optional:!0}),o=e.accordion?e.accordion._stateChanges.pipe(Ne(s=>!!(s.hideToggle||s.togglePosition))):ot;this.tabIndex=parseInt(r||"")||0,this._parentChangeSubscription=rn(e.opened,e.closed,o,e._inputChanges.pipe(Ne(s=>!!(s.hideToggle||s.disabled||s.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(Ne(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),i&&(this.expandedHeight=i.expandedHeight,this.collapsedHeight=i.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Da(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,i){e?this._focusMonitor.focusVia(this._element,e,i):this._element.nativeElement.focus(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(i,r){i&1&&_e("click",function(){return r._toggle()})("keydown",function(s){return r._keydown(s)}),i&2&&(fe("id",r.panel._headerId)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r._getPanelId())("aria-expanded",r._isExpanded())("aria-disabled",r.panel.disabled),zo("height",r._getHeaderHeight()),K("mat-expanded",r._isExpanded())("mat-expansion-toggle-indicator-after",r._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",r._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:xi(e)]},ngContentSelectors:Z2,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(i,r){i&1&&(Ee(Q2),nt(0,"span",0),R(1),R(2,1),R(3,2),lt(),me(4,X2,3,0,"span",1)),i&2&&(K("mat-content-hide-toggle",!r._showToggle()),D(4),pe(r._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
  outline: 0;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--%NS%mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--%NS%mat-expansion-header-text-font, var(--%NS%mat-sys-title-medium-font));
  font-size: var(--%NS%mat-expansion-header-text-size, var(--%NS%mat-sys-title-medium-size));
  font-weight: var(--%NS%mat-expansion-header-text-weight, var(--%NS%mat-sys-title-medium-weight));
  line-height: var(--%NS%mat-expansion-header-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  letter-spacing: var(--%NS%mat-expansion-header-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--%NS%mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--%NS%mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--%NS%mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--%NS%mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--%NS%mat-expansion-header-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--%NS%mat-expansion-header-description-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2})}return t})(),tM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]})}return t})(),nM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return t})(),iM=(()=>{class t extends YI{_keyManager;_ownHeaders=new yn;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(kt(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(i=>i.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new sr(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["mat-accordion"]],contentQueries:function(i,r,o){if(i&1&&dt(o,ab,5),i&2){let s;G(s=W())&&(r._headers=s)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(i,r){i&2&&K("mat-accordion-multi",r.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",P],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[he([{provide:ob,useExisting:t}]),re]})}return t})(),rM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[ZI,Kh,Me]})}return t})();function eH(t,n){t&1&&ee(0,"span",1)}function tH(t,n){if(t&1&&Ho(0,eH,1,0,"span",1,Bo),t&2){let e=ce();Uo(e.dots(e.deltaTechColor()[e.colorEnum.red]))}}function nH(t,n){t&1&&ee(0,"span",2)}function iH(t,n){if(t&1&&Ho(0,nH,1,0,"span",2,Bo),t&2){let e=ce();Uo(e.dots(e.deltaTechColor()[e.colorEnum.green]))}}function rH(t,n){t&1&&ee(0,"span",3)}function oH(t,n){if(t&1&&Ho(0,rH,1,0,"span",3,Bo),t&2){let e=ce();Uo(e.dots(e.deltaTechColor()[e.colorEnum.yellow]))}}function sH(t,n){t&1&&ee(0,"span",4)}function aH(t,n){if(t&1&&Ho(0,sH,1,0,"span",4,Bo),t&2){let e=ce();Uo(e.dots(e.deltaTechColor()[e.colorEnum.blue]))}}function cH(t,n){t&1&&ee(0,"span",5)}function lH(t,n){if(t&1&&Ho(0,cH,1,0,"span",5,Bo),t&2){let e=ce();Uo(e.dots(e.deltaTechColor()[e.colorEnum.black]))}}var sM=(()=>{class t{dots(e){return Array.from({length:e},(i,r)=>r)}constructor(){this.techColors=Gt({}),this.provided=Gt({}),this.colorEnum=g,this.deltaTechColor=ze(()=>{let e=this.techColors(),i=this.provided(),r={};for(let o of Object.keys(e)){let s=Number.parseInt(o);r[s]=e[s]-(i[s]??0)}return r})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=T({type:t,selectors:[["app-tech-color"]],inputs:{techColors:[1,"techColors"],provided:[1,"provided"]},standalone:!1,decls:6,vars:5,consts:[[1,"missingTech"],[1,"dot",2,"background-color","red"],[1,"dot",2,"background-color","green"],[1,"dot",2,"background-color","yellow"],[1,"dot",2,"background-color","blue"],[1,"dot",2,"background-color","black"]],template:function(i,r){i&1&&(b(0,"div",0),me(1,tH,2,0),me(2,iH,2,0),me(3,oH,2,0),me(4,aH,2,0),me(5,lH,2,0),C()),i&2&&(D(),pe(r.deltaTechColor()[r.colorEnum.red]!==void 0&&r.deltaTechColor()[r.colorEnum.red]>0?1:-1),D(),pe(r.deltaTechColor()[r.colorEnum.green]!==void 0&&r.deltaTechColor()[r.colorEnum.green]>0?2:-1),D(),pe(r.deltaTechColor()[r.colorEnum.yellow]!==void 0&&r.deltaTechColor()[r.colorEnum.yellow]>0?3:-1),D(),pe(r.deltaTechColor()[r.colorEnum.blue]!==void 0&&r.deltaTechColor()[r.colorEnum.blue]>0?4:-1),D(),pe(r.deltaTechColor()[r.colorEnum.black]!==void 0&&r.deltaTechColor()[r.colorEnum.black]>0?5:-1))},styles:[".missingTech[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:4px;margin-top:8px}.dot[_ngcontent-%COMP%]{border-radius:50%;display:block;height:10px;width:10px}"]})}}return t})();var uH=t=>({color:t});function fH(t,n){if(t&1){let e=jt();b(0,"button",7),_e("click",function(r){gt(e);let o=ce();return vt(o.researchMe(r))}),b(1,"mat-icon"),H(2," highlight_off "),C()()}}function hH(t,n){if(t&1){let e=jt();b(0,"button",8),_e("click",function(r){gt(e);let o=ce();return vt(o.researchMe(r))}),b(1,"mat-icon"),H(2," radio_button_unchecked "),C()()}}function mH(t,n){if(t&1){let e=jt();b(0,"button",9),_e("click",function(r){gt(e);let o=ce();return vt(o.researchMe(r))}),b(1,"mat-icon"),H(2," check_circle "),C()()}}var aM=(()=>{class t{techColor(){switch(this.tech().tech.provides){case g.black:return"white";case g.blue:return"blue";case g.red:return"red";case g.green:return"green";case g.yellow:return"yellow"}}constructor(){this.tech=Gt({tech:{id:0,name:"",requirements:[],description:"",provides:0,edition:v.Base},provided:{},researched:!1,researchDistance:0,available:!1}),this.provided=Gt({}),this.researched=new te,this.showDescription=U(!1)}researchMe(e){e.cancelBubble=!0,this.researched.emit(this.tech())}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=T({type:t,selectors:[["app-tech"]],inputs:{tech:[1,"tech"],provided:[1,"provided"]},outputs:{researched:"researched"},standalone:!1,decls:14,vars:10,consts:[["hideToggle","",1,"headers-align"],[3,"ngStyle"],[3,"techColors","provided"],["color","warn","mat-mini-fab","",3,"click",4,"ngIf"],["color","accent","mat-mini-fab","",3,"click",4,"ngIf"],["color","primary","mat-mini-fab","",3,"click",4,"ngIf"],[3,"innerHTML"],["color","warn","mat-mini-fab","",3,"click"],["color","accent","mat-mini-fab","",3,"click"],["color","primary","mat-mini-fab","",3,"click"]],template:function(i,r){i&1&&(b(0,"mat-expansion-panel",0)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon",1),H(4," arrow_circle_up "),C(),b(5,"p"),H(6),C()(),b(7,"mat-panel-description"),ee(8,"app-tech-color",2),b(9,"div"),je(10,fH,3,0,"button",3)(11,hH,3,0,"button",4)(12,mH,3,0,"button",5),C()()(),ee(13,"p",6),C()),i&2&&(D(3),q("ngStyle",Vv(8,uH,r.techColor())),D(3),At(r.tech().tech.name),D(2),q("techColors",r.tech().tech.requirements)("provided",r.provided()),D(2),q("ngIf",!r.tech().available),D(),q("ngIf",r.tech().available&&!r.tech().researched),D(),q("ngIf",r.tech().researched),D(),q("innerHTML",r.tech().tech.description,nv))},dependencies:[Vi,sb,ab,nM,tM,Lh,qo,sy,sM],styles:[".headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]{justify-content:right;align-items:center;margin-right:0}.headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]{padding-right:0}.headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-left:5px}.headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{padding-right:5px}.headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%]{margin-right:0;flex-grow:4}"]})}}return t})();function gH(t,n){if(t&1){let e=jt();b(0,"app-tech",9),_e("researched",function(r){gt(e);let o=ce();return vt(o.onResearched(r))}),C()}if(t&2){let e=n.$implicit,i=ce();q("tech",e)("provided",i.provided())}}var cM=(()=>{class t{constructor(){this.state=U(void 0),this.provided=U({[g.blue]:0,[g.red]:0,[g.green]:0,[g.yellow]:0,[g.black]:0}),this.colorEnum=g,this.Arr=Array,this.faction=Gt(),this.tech=Gt([])}distanceSorter(e,i){return e.researched&&!i.researched?-1:!e.researched&&i.researched?1:e.available&&!i.available?-1:!e.available&&i.available?1:e.tech.name<i.tech.name&&e.researchDistance===i.researchDistance?-1:e.tech.name>i.tech.name&&e.researchDistance===i.researchDistance?1:e.researchDistance-i.researchDistance}ngOnInit(){let e=_({},this.provided()),i=this.tech().map(r=>{let o=this.faction()?.startingtech.indexOf(r.id)!==-1;return o&&e[r.provides]++,{tech:r,researched:o,provided:e,available:!1,researchDistance:0}});this.provided.set(e),this.state.set({faction:this.faction(),tech:i}),this.state.update(r=>r&&Y(_({},r),{tech:r.tech.map(o=>(this.updateRequirements(o),o)).sort(this.distanceSorter)}))}updateRequirements(e){e.available=this.checkForMatchingRequirements(e,this.provided())}checkForMatchingRequirements(e,i){let r=0;for(let o in e.tech.requirements)e.provided[o]<e.tech.requirements[o]&&(r+=e.tech.requirements[o]-e.provided[o]);return e.researchDistance=r,r===0}onResearched(e){let i=_({},this.provided());e.researched=!e.researched,e.tech.provides!==void 0&&(e.researched?i[e.tech.provides]++:i[e.tech.provides]--),this.provided.set(i),this.state.update(r=>r&&Y(_({},r),{tech:r.tech.map(o=>Y(_({},o),{provided:i})).map(o=>(this.updateRequirements(o),o)).sort(this.distanceSorter)}))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=T({type:t,selectors:[["app-tech-picker"]],inputs:{faction:[1,"faction"],tech:[1,"tech"]},standalone:!1,decls:17,vars:9,consts:[["color","primary"],["inline","true",1,"factionIcon",3,"svgIcon"],[1,"spacer"],[2,"color","red"],[2,"color","green"],[2,"color","yellow"],[2,"color","blue"],[2,"color","white"],[3,"tech","provided","researched",4,"ngFor","ngForOf"],[3,"researched","tech","provided"]],template:function(i,r){i&1&&(b(0,"mat-toolbar",0)(1,"span"),H(2),C(),ee(3,"mat-icon",1)(4,"span",2),b(5,"h3",3),H(6),C(),b(7,"h3",4),H(8),C(),b(9,"h3",5),H(10),C(),b(11,"h3",6),H(12),C(),b(13,"h3",7),H(14),C()(),b(15,"mat-accordion"),je(16,gH,1,2,"app-tech",8),C()),i&2&&(D(2),At(r.state()?.faction?.name),D(),q("svgIcon",Pr(r.state()?.faction?.name?.toLowerCase())),D(3),At(r.provided()[r.colorEnum.red]),D(2),At(r.provided()[r.colorEnum.green]),D(2),At(r.provided()[r.colorEnum.yellow]),D(2),At(r.provided()[r.colorEnum.blue]),D(2),At(r.provided()[r.colorEnum.black]),D(2),q("ngForOf",r.state()?.tech))},dependencies:[Gh,Vi,iM,Lr,aM],encapsulation:2})}}return t})();function yH(t,n){if(t&1){let e=jt();b(0,"mat-chip-option",5),_e("click",function(){let r=gt(e).$implicit,o=ce(2);return vt(o.factionClick_hdl(r))}),b(1,"mat-chip-avatar"),ee(2,"mat-icon",6),C(),b(3,"span"),H(4),C()()}if(t&2){let e=n.$implicit;D(2),q("svgIcon",Pr(e.name.toLowerCase())),D(2),At(e.name)}}function _H(t,n){if(t&1&&(b(0,"mat-card",2)(1,"mat-card-header")(2,"mat-card-title"),H(3,"Choose faction"),C()(),b(4,"mat-card-content")(5,"mat-chip-listbox",3),je(6,yH,5,3,"mat-chip-option",4),C()()()),t&2){let e=ce();D(6),q("ngForOf",e.factions())}}function bH(t,n){if(t&1&&ee(0,"app-tech-picker",7),t&2){let e=ce();q("faction",e.selectedFaction())("tech",e.tech())}}var lM=(()=>{class t{constructor(){this.settingsService=u(Pi),this.factions=ze(()=>Li.factions.filter(e=>this.settingsService.settings().editions.includes(e.edition))),this.selectedFaction=U(void 0),this.tech=U([])}factionClick_hdl(e){this.selectedFaction.set(e),e.edition===v.PoK?this.tech.set([...Li.genericTech,...e.tech]):this.selectedFaction()?.id===11?this.tech.set([...Li.genericTech,...this.factions().flatMap(i=>i.tech)].filter(i=>this.settingsService.settings().editions.includes(i.edition))):this.tech.set([...Li.genericTech,...e.tech].filter(i=>this.settingsService.settings().editions.includes(i.edition)))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=T({type:t,selectors:[["app-faction-chooser"]],standalone:!1,decls:2,vars:2,consts:[["appearance","outlined",4,"ngIf"],[3,"faction","tech",4,"ngIf"],["appearance","outlined"],[1,"mat-mdc-chip-set-stacked"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["inline","true",3,"svgIcon"],[3,"faction","tech"]],template:function(i,r){i&1&&je(0,_H,7,1,"mat-card",0)(1,bH,1,2,"app-tech-picker",1),i&2&&(q("ngIf",!r.selectedFaction()),D(),q("ngIf",r.selectedFaction()))},dependencies:[Vi,Kr,Qr,Zr,Yr,Fh,kl,Tl,Lr,qo,cM],styles:["section[_ngcontent-%COMP%]{width:100%}app-tech-picker[_ngcontent-%COMP%]{display:block;width:100%}button[_ngcontent-%COMP%]{display:flex;width:100%;height:120px;align-items:center;justify-content:space-between}"]})}}return t})();function dM(t){t||(t=u(Je));let n=new X(e=>{if(t.destroyed){e.next();return}return t.onDestroy(e.next.bind(e))});return e=>e.pipe(Pe(n))}var wH=["*"],uM=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&K("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:wH,decls:1,vars:0,template:function(i,r){i&1&&(Ee(),R(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return t})();var SH=["input"],CH=["*"],cb={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},DH=new y("mat-checkbox-default-options",{providedIn:"root",factory:()=>cb}),Kt=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(Kt||{}),lb=class{source;checked},db=(()=>{class t{_elementRef=u(L);_changeDetectorRef=u(Ze);_ngZone=u(O);_animationsDisabled=Nt();_options=u(DH,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new lb;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new te;indeterminateChange=new te;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=Kt.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){u(bt).load(xn);let e=u(new An("tabindex"),{optional:!0});this._options=this._options||cb,this.color=this._options.color||cb.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=u(ut).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(Kt.Indeterminate):this._transitionCheckState(this.checked?Kt.Checked:Kt.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=U(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?Kt.Checked:Kt.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case Kt.Init:if(i===Kt.Checked)return this._animationClasses.uncheckedToChecked;if(i==Kt.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Kt.Unchecked:return i===Kt.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Kt.Checked:return i===Kt.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Kt.Indeterminate:return i===Kt.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-checkbox"]],viewQuery:function(i,r){if(i&1&&Vt(SH,5),i&2){let o;G(o=W())&&(r._inputElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,r){i&2&&(Xt("id",r.id),fe("tabindex",null)("aria-label",null)("aria-labelledby",null),bn(r.color?"mat-"+r.color:"mat-accent"),K("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",P],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",P],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",P],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:xi(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",P],checked:[2,"checked","checked",P],disabled:[2,"disabled","disabled",P],indeterminate:[2,"indeterminate","indeterminate",P]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[he([{provide:Zo,useExisting:xt(()=>t),multi:!0},{provide:Gr,useExisting:t,multi:!0}]),Ye],ngContentSelectors:CH,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition","for"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-internal-form-field-label","mdc-label"]],template:function(i,r){if(i&1&&(Ee(),b(0,"label",3),_e("click",function(s){return r._preventBubblingFromLabel(s)}),b(1,"span",4,0),ee(3,"span",5),b(4,"input",6,1),_e("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(s){return r._onInteractionEvent(s)}),C(),ee(6,"span",7),b(7,"span",8),zn(),b(8,"svg",9),ee(9,"path",10),C(),gc(),ee(10,"span",11),C(),ee(11,"span",12),C(),b(12,"span",13,2),R(14),C()()),i&2){let o=Rn(2);q("labelPosition",r.labelPosition)("for",r.inputId),D(4),K("mdc-checkbox--selected",r.checked),q("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),fe("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),D(7),q("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0)}},dependencies:[Sh,uM],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return t})(),Yh=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[db,Me]})}return t})();var fM=(()=>{class t{constructor(){this.settingsService=u(Pi),this.destroyRef=u(Je),this.settings=this.settingsService.settings,this.form=new Ai({base:new Oi({value:!0,disabled:!0},{nonNullable:!0}),pok:new Oi(this.settings().editions.includes(v.PoK),{nonNullable:!0}),te:new Oi(this.settings().editions.includes(v.TE),{nonNullable:!0}),additionalFactions:new Oi(this.settings().additionalFactions,{nonNullable:!0})}),this.form.valueChanges.pipe(dM(this.destroyRef)).subscribe(()=>this.persistSettings())}persistSettings(){let e=this.form.getRawValue(),i=[v.Base];e.pok&&i.push(v.PoK),e.te&&i.push(v.TE),this.settingsService.settings.set({editions:i,additionalFactions:Math.max(0,e.additionalFactions)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=T({type:t,selectors:[["app-settings",8,"component"]],decls:17,vars:1,consts:[["appearance","outlined"],[3,"formGroup"],["formControlName","base"],["formControlName","pok"],["formControlName","te"],["matInput","","type","number","formControlName","additionalFactions","min","0","step","1"]],template:function(i,r){i&1&&(b(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),H(3,"Settings"),C()(),b(4,"mat-card-content")(5,"form",1)(6,"mat-checkbox",2),H(7,"Base"),C(),wi(),b(8,"mat-checkbox",3),H(9,"Prophecy of Kings"),C(),wi(),b(10,"mat-checkbox",4),H(11,"Thunder Edge"),C(),wi(),ee(12,"br"),b(13,"mat-form-field")(14,"mat-label"),H(15,"Additional factions for drafting"),C(),ee(16,"input",5),wi(),C()()()()),i&2&&(D(5),q("formGroup",r.form),D(),Si(),D(2),Si(),D(2),Si(),D(6),Si())},dependencies:[xa,Kr,Qr,Zr,Yr,Yh,db,lr,Xr,cr,Ia,Na,ba,_a,qr,Cl,va,ya,Sl,Fi,Xo],encapsulation:2})}}return t})();function EH(t,n){t&1&&(b(0,"mat-error"),H(1," Enter the number of players. "),C())}function NH(t,n){if(t&1&&(b(0,"mat-error"),H(1),C()),t&2){let e=ce();D(),cn(" Enter a number between 4 and ",e.maxPlayerCount(),". ")}}var hM=(()=>{class t{constructor(){this.settingsService=u(Pi),this.maxPlayerCount=ze(()=>this.settingsService.settings().editions.includes(v.PoK)?8:6),this.blueSystems=ze(()=>Li.systems.filter(e=>this.settingsService.settings().editions.includes(e.edition)&&e.type===Ie.Blue)),this.redSystems=ze(()=>Li.systems.filter(e=>this.settingsService.settings().editions.includes(e.edition)&&e.type===Ie.Red)),this.form=new Ai({playerCount:new Oi(4,{nonNullable:!0,validators:[Jt.required,Jt.min(4),Jt.max(6)]})}),$t(()=>{let e=this.maxPlayerCount(),i=this.form.controls.playerCount;i.setValidators([Jt.required,Jt.min(4),Jt.max(e)]),i.value>e&&i.setValue(e),i.updateValueAndValidity({emitEvent:!1})})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=T({type:t,selectors:[["app-slice-generator",8,"component"]],decls:14,vars:5,consts:[["appearance","outlined"],[3,"formGroup"],["matInput","","type","number","formControlName","playerCount","min","4","step","1",3,"max"]],template:function(i,r){i&1&&(b(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),H(3,"Slice Generator"),C()(),b(4,"mat-card-content")(5,"form",1)(6,"mat-form-field")(7,"mat-label"),H(8,"Number of players"),C(),ee(9,"input",2),wi(),b(10,"mat-hint"),H(11),C(),me(12,EH,2,0,"mat-error"),me(13,NH,2,1,"mat-error"),C()()()()),i&2&&(D(5),q("formGroup",r.form),D(4),q("max",r.maxPlayerCount()),Si(),D(2),cn("4 to ",r.maxPlayerCount()," players"),D(),pe(r.form.controls.playerCount.hasError("required")?12:-1),D(),pe(r.form.controls.playerCount.hasError("min")||r.form.controls.playerCount.hasError("max")?13:-1))},dependencies:[xa,Kr,Qr,Zr,Yr,lr,Xr,cr,Ml,O_,Ia,Na,ba,_a,qr,Cl,va,ya,Sl,f_,Fi,Xo],encapsulation:2})}}return t})();var IH=[{path:"",component:GI,pathMatch:"full"},{path:"tech",component:lM},{path:"draft",component:qI},{path:"settings",component:fM},{path:"slice",component:hM}],mM=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=F({type:t})}static{this.\u0275inj=A({imports:[ih.forRoot(IH),ih]})}}return t})();var pM=dN();function SM(t){return new Qh(t.get(Jr),t.get(Q))}var Qh=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=_t(-this._previousScrollPosition.left),n.style.top=_t(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",s=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),pM&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),pM&&(i.scrollBehavior=o,r.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function CM(t,n){return new Zh(t.get(Bh),t.get(O),t.get(Jr),n)}var Zh=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Ne(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Ll=class{enable(){}disable(){}attach(){}};function ub(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,s=t.left>e.right;return i||r||o||s})}function gM(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,s=t.right>e.right;return i||r||o||s})}function im(t,n){return new Xh(t.get(Bh),t.get(Jr),t.get(O),n)}var Xh=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();ub(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},DM=(()=>{class t{_injector=u(de);noop=()=>new Ll;close=e=>CM(this._injector,e);block=()=>SM(this._injector);reposition=e=>im(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})(),Ta=class{positionStrategy;scrollStrategy=new Ll;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var Jh=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var xM=(()=>{class t{_attachedOverlays=[];_document=u(Q);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})(),EM=(()=>{class t extends xM{_ngZone=u(O);_renderer=u(ct).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})(),NM=(()=>{class t extends xM{_platform=u($e);_ngZone=u(O);_renderer=u(ct).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=ln(e)};_clickListener=e=>{let i=ln(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],c=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,c))){if(vM(a.overlayElement,i)||vM(a.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();function vM(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var IM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return t})(),MM=(()=>{class t{_platform=u($e);_containerElement;_document=u(Q);_styleLoader=u(bt);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||w_()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),w_()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(IM)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})(),fb=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function hb(t){return t&&t.nodeType===1}var em=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new N;_attachments=new N;_detachments=new N;_positionStrategy;_scrollStrategy;_locationChanges=ue.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new N;_outsidePointerEvents=new N;_afterNextRenderRef;constructor(n,e,i,r,o,s,a,c,l,d=!1,f,h){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=c,this._outsideClickDispatcher=l,this._animationsDisabled=d,this._injector=f,this._renderer=h,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Lt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=_(_({},this._config),n),this._updateElementSize()}setDirection(n){this._config=Y(_({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=_t(this._config.width),n.height=_t(this._config.height),n.minWidth=_t(this._config.minWidth),n.minHeight=_t(this._config.minHeight),n.maxWidth=_t(this._config.maxWidth),n.maxHeight=_t(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;hb(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(n){}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new fb(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=v_(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Lt(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},yM="cdk-overlay-connected-position-bounding-box",MH=/([A-Za-z%]+)$/;function rm(t,n){return new tm(n,t.get(Jr),t.get(Q),t.get($e),t.get(MM))}var tm=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new N;_resizeSubscription=ue.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(yM),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],s;for(let a of this._preferredPositions){let c=this._getOriginPoint(n,r,a),l=this._getOverlayPoint(c,e,a),d=this._getOverlayFit(l,e,i,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,c);return}if(this._canFitWithFlexibleDimensions(d,l,i)){o.push({position:a,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:l,originPoint:c,position:a,overlayRect:e})}if(o.length){let a=null,c=-1;for(let l of o){let d=l.boundingBoxRect.width*l.boundingBoxRect.height*(l.position.weight||1);d>c&&(c=d,a=l)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&as(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(yM),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof L?this._origin.nativeElement:hb(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,a=this._isRtl()?n.left:n.right;r=i.originX=="start"?s:a}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=bM(e),{x:s,y:a}=n,c=this._getOffset(r,"x"),l=this._getOffset(r,"y");c&&(s+=c),l&&(a+=l);let d=0-s,f=s+o.width-i.width,h=0-a,m=a+o.height-i.height,p=this._subtractOverflows(o.width,d,f),w=this._subtractOverflows(o.height,h,m),E=p*w;return{visibleArea:E,isCompletelyWithinViewport:o.width*o.height===E,fitsInViewportVertically:w===o.height,fitsInViewportHorizontally:p==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,s=_M(this._overlayRef.getConfig().minHeight),a=_M(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||s!=null&&s<=r,l=n.fitsInViewportHorizontally||a!=null&&a<=o;return c&&l}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=bM(e),o=this._viewportRect,s=Math.max(n.x+r.width-o.width,0),a=Math.max(n.y+r.height-o.height,0),c=Math.max(o.top-i.top-n.y,0),l=Math.max(o.left-i.left-n.x,0),d=0,f=0;return r.width<=o.width?d=l||-s:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?f=c||-a:f=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:f},{x:n.x+d,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!TH(this._lastScrollVisibility,i)){let r=new Jh(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,s,a;if(e.overlayY==="top")s=n.y,o=i.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")a=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-a+this._getViewportMarginTop();else{let m=Math.min(i.bottom-n.y+i.top,n.y),p=this._lastBoundingBoxSize.height;o=m*2,s=n.y-m,o>p&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-p/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,l=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,f,h;if(l)h=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(c)f=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let m=Math.min(i.right-n.x+i.left,n.x),p=this._lastBoundingBoxSize.width;d=m*2,f=n.x-m,d>p&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-p/2)}return{top:s,left:f,bottom:a,right:h,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;r.width=_t(i.width),r.height=_t(i.height),r.top=_t(i.top)||"auto",r.bottom=_t(i.bottom)||"auto",r.left=_t(i.left)||"auto",r.right=_t(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=_t(o)),s&&(r.maxWidth=_t(s))}this._lastBoundingBoxSize=i,as(this._boundingBox.style,r)}_resetBoundingBoxStyles(){as(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){as(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();as(i,this._getExactOverlayY(e,n,d)),as(i,this._getExactOverlayX(e,n,d))}else i.position="static";let a="",c=this._getOffset(e,"x"),l=this._getOffset(e,"y");c&&(a+=`translateX(${c}px) `),l&&(a+=`translateY(${l}px)`),i.transform=a.trim(),s.maxHeight&&(r?i.maxHeight=_t(s.maxHeight):o&&(i.maxHeight="")),s.maxWidth&&(r?i.maxWidth=_t(s.maxWidth):o&&(i.maxWidth="")),as(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;r.bottom=`${s-(o.y+this._overlayRect.height)}px`}else r.top=_t(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let s;if(this._isRtl()?s=n.overlayX==="end"?"left":"right":s=n.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;r.right=`${a-(o.x+this._overlayRect.width)}px`}else r.left=_t(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:gM(n,i),isOriginOutsideView:ub(n,i),isOverlayClipped:gM(e,i),isOverlayOutsideView:ub(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&v_(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof L)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function as(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function _M(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(MH);return!e||e==="px"?parseFloat(n):null}return t||null}function bM(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function TH(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var wM="cdk-global-overlay-wrapper";function TM(t){return new nm}var nm=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(wM),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:s,maxHeight:a}=i,c=(r==="100%"||r==="100vw")&&(!s||s==="100%"||s==="100vw"),l=(o==="100%"||o==="100vh")&&(!a||a==="100%"||a==="100vh"),d=this._xPosition,f=this._xOffset,h=this._overlayRef.getConfig().direction==="rtl",m="",p="",w="";c?w="flex-start":d==="center"?(w="center",h?p=f:m=f):h?d==="left"||d==="end"?(w="flex-end",m=f):(d==="right"||d==="start")&&(w="flex-start",p=f):d==="left"||d==="start"?(w="flex-start",m=f):(d==="right"||d==="end")&&(w="flex-end",p=f),n.position=this._cssPosition,n.marginLeft=c?"0":m,n.marginTop=l?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?"0":p,e.justifyContent=w,e.alignItems=l?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(wM),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},kM=(()=>{class t{_injector=u(de);global(){return TM()}flexibleConnectedTo(e){return rm(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})(),RM=new y("OVERLAY_DEFAULT_CONFIG");function om(t,n){t.get(bt).load(IM);let e=t.get(MM),i=t.get(Q),r=t.get(ut),o=t.get(Ct),s=t.get(ei),a=t.get(Ue,null,{optional:!0})||t.get(ct).createRenderer(null,null),c=new Ta(n),l=t.get(RM,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||s.value,!i.body||!("showPopover"in i.body)?c.usePopover=!1:c.usePopover=n?.usePopover??l;let d=i.createElement("div"),f=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),f.appendChild(d),c.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let h=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return hb(h)?h.after(f):h?.type==="parent"?h.element.appendChild(f):e.getContainerElement().appendChild(f),new em(new Pl(d,o,t),f,d,c,t.get(O),t.get(EM),i,t.get(Ei),t.get(NM),n?.disableAnimations??t.get(kr,null,{optional:!0})==="NoopAnimations",t.get(He),a)}var AM=(()=>{class t{scrollStrategies=u(DM);_positionBuilder=u(kM);_injector=u(de);create(e){return om(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var mb=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({providers:[AM],imports:[Me,Kh,Rl,Rl]})}return t})();var RH=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],AH=["mat-icon, [matMenuItemIcon]","*"];function OH(t,n){t&1&&(zn(),b(0,"svg",2),ee(1,"polygon",3),C())}var FH=["*"];function PH(t,n){if(t&1){let e=jt();nt(0,"div",0),Qu("click",function(){gt(e);let r=ce();return vt(r.closed.emit("click"))})("animationstart",function(r){gt(e);let o=ce();return vt(o._onAnimationStart(r.animationName))})("animationend",function(r){gt(e);let o=ce();return vt(o._onAnimationDone(r.animationName))})("animationcancel",function(r){gt(e);let o=ce();return vt(o._onAnimationDone(r.animationName))}),nt(1,"div",1),R(2),lt()()}if(t&2){let e=ce();bn(e._classList),K("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Xt("id",e.panelId),fe("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var gb=new y("MAT_MENU_PANEL"),jl=(()=>{class t{_elementRef=u(L);_document=u(Q);_focusMonitor=u(ji);_parentMenu=u(gb,{optional:!0});_changeDetectorRef=u(Ze);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new N;_focused=new N;_highlighted=!1;_triggersSubmenu=!1;constructor(){u(bt).load(xn),this._parentMenu?.addItem?.(this)}focus(e,i){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,i):this._getHostElement().focus(i),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),i=e.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<i.length;r++)i[r].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(i,r){i&1&&_e("click",function(s){return r._checkDisabled(s)})("mouseenter",function(){return r._handleMouseEnter()}),i&2&&(fe("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),K("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",P],disableRipple:[2,"disableRipple","disableRipple",P]},exportAs:["matMenuItem"],ngContentSelectors:AH,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(i,r){i&1&&(Ee(RH),R(0),b(1,"span",0),R(2,1),C(),ee(3,"div",1),me(4,OH,2,0,":svg:svg",2)),i&2&&(D(3),q("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),D(),pe(r._triggersSubmenu?4:-1))},dependencies:[Sh],encapsulation:2})}return t})();var LH=new y("MatMenuContent");var jH=new y("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),pb="_mat-menu-enter",sm="_mat-menu-exit",Ra=(()=>{class t{_elementRef=u(L);_changeDetectorRef=u(Ze);_injector=u(de);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Nt();_allItems;_directDescendantItems=new yn;_classList={};_panelAnimationState="void";_animationDone=new N;_isAnimating=U(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let i=this._previousPanelClass,r=_({},this._classList);i&&i.length&&i.split(" ").forEach(o=>{r[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{r[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=r}_previousPanelClass="";get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new te;close=this.closed;panelId=u(ut).getId("mat-menu-panel-");constructor(){let e=u(jH);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new sr(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(kt(this._directDescendantItems),Qe(e=>rn(...e.map(i=>i._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let i=this._keyManager;if(this._panelAnimationState==="enter"&&i.activeItem?._hasFocus()){let r=e.toArray(),o=Math.max(0,Math.min(r.length-1,i.activeItemIndex||0));r[o]&&!r[o].disabled?i.setActiveItem(o):i.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(kt(this._directDescendantItems),Qe(i=>rn(...i.map(r=>r._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let i=e.keyCode,r=this._keyManager;switch(i){case 27:Da(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(i===38||i===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Lt(()=>{let i=this._resolvePanel();if(!i||!i.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(e).setFirstItemActive(),!r.activeItem&&i&&i.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,i=this.yPosition){this._classList=Y(_({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":i==="above","mat-menu-below":i==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let i=e===sm;(i||e===pb)&&(i&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(i?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===pb||e===sm)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let i=this._resolvePanel();i&&(i.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(sm),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?pb:sm)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(kt(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(i=>i._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-menu"]],contentQueries:function(i,r,o){if(i&1&&dt(o,LH,5)(o,jl,5)(o,jl,4),i&2){let s;G(s=W())&&(r.lazyContent=s.first),G(s=W())&&(r._allItems=s),G(s=W())&&(r.items=s)}},viewQuery:function(i,r){if(i&1&&Vt(yt,5),i&2){let o;G(o=W())&&(r.templateRef=o.first)}},hostVars:3,hostBindings:function(i,r){i&2&&fe("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",P],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:P(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[he([{provide:gb,useExisting:t}])],ngContentSelectors:FH,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(i,r){i&1&&(Ee(),Wu(0,PH,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})}return t})(),VH=new y("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(de);return()=>im(t)}});var ka=new WeakMap,BH=(()=>{class t{_canHaveBackdrop;_element=u(L);_viewContainerRef=u(tt);_menuItemInstance=u(jl,{optional:!0,self:!0});_dir=u(ei,{optional:!0});_focusMonitor=u(ji);_ngZone=u(O);_injector=u(de);_scrollStrategy=u(VH);_changeDetectorRef=u(Ze);_animationsDisabled=Nt();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=ue.EMPTY;_menuCloseSubscription=ue.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(i=>{this._destroyMenu(i),(i==="click"||i==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(i)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let i=u(gb,{optional:!0});this._parentMaterialMenu=i instanceof Ra?i:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&ka.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let i=this._menu;if(this._menuOpen||!i)return;this._pendingRemoval?.unsubscribe();let r=ka.get(i);ka.set(i,this),r&&r!==this&&r._closeMenu();let o=this._createOverlay(i),s=o.getConfig(),a=s.positionStrategy;this._setPosition(i,a),this._canHaveBackdrop?s.hasBackdrop=i.hasBackdrop==null?!this._triggersSubmenu():i.hasBackdrop:s.hasBackdrop=i.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(i)),i.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),i.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,i.direction=this.dir,e&&i.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),i instanceof Ra&&(i._setIsOpen(!0),i._directDescendantItems.changes.pipe(Pe(i.close)).subscribe(()=>{a.withLockedPosition(!1).reapplyLastPosition(),a.withLockedPosition(!0)}))}focus(e,i){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,i):this._element.nativeElement.focus(i)}_destroyMenu(e){let i=this._overlayRef,r=this._menu;!i||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof Ra&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(mt(1)).subscribe(()=>{i.detach(),ka.has(r)||r.lazyContent?.detach()}),r._setIsOpen(!1)):(i.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&ka.delete(r),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let i=this._getOverlayConfig(e);this._subscribeToPositions(e,i.positionStrategy),this._overlayRef=om(this._injector,i),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof Ra&&this._menu._handleKeydown(r)})}return this._overlayRef}_getOverlayConfig(e){return new Ta({positionStrategy:rm(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,i){e.setPositionClasses&&i.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let o=r.connectionPair.overlayX==="start"?"after":"before",s=r.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,s)})})}_setPosition(e,i){let[r,o]=e.xPosition==="before"?["end","start"]:["start","end"],[s,a]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[c,l]=[s,a],[d,f]=[r,o],h=0;if(this._triggersSubmenu()){if(f=r=e.xPosition==="before"?"start":"end",o=d=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let m=this._parentMaterialMenu.items.first;this._parentInnerPadding=m?m._getHostElement().offsetTop:0}h=s==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(c=s==="top"?"bottom":"top",l=a==="top"?"bottom":"top");i.withPositions([{originX:r,originY:c,overlayX:d,overlayY:s,offsetY:h},{originX:o,originY:c,overlayX:f,overlayY:s,offsetY:h},{originX:r,originY:l,overlayX:d,overlayY:a,offsetY:-h},{originX:o,originY:l,overlayX:f,overlayY:a,offsetY:-h}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),i=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:$(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Ne(s=>this._menuOpen&&s!==this._menuItemInstance)):$();return rn(e,r,o,i)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new eo(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return ka.get(e)===this}_triggerIsAriaDisabled(){return P(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(i){Vo()};static \u0275dir=x({type:t})}return t})(),OM=(()=>{class t extends BH{_cleanupTouchstart;_hoverSubscription=ue.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new te;onMenuOpen=this.menuOpened;menuClosed=new te;onMenuClose=this.menuClosed;constructor(){super(!0);let e=u(Ue);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",i=>{ns(i)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){ts(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let i=e.keyCode;(i===13||i===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(i===39&&this.dir==="ltr"||i===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(i,r){i&1&&_e("click",function(s){return r._handleClick(s)})("mousedown",function(s){return r._handleMousedown(s)})("keydown",function(s){return r._handleKeydown(s)}),i&2&&fe("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[re]})}return t})();var FM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[Wr,mb,Me,Vh]})}return t})();var PM=(()=>{class t{editionLabel(e){switch(e){case v.Base:return" ";case v.PoK:return"PoK";case v.TE:return"TE"}}constructor(){this.matIconRegistry=u(Nh),this.domSanitizer=u(Jc),this.settingsService=u(Pi),this.settingsLabel=ze(()=>this.settingsService.settings().editions.map(e=>this.editionLabel(e)).join(" + ")||"No edition"),this.matIconRegistry.addSvgIcon("arborec",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/arborec.svg")).addSvgIcon("barony of letnev",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/barony of letnev.svg")).addSvgIcon("clan of saar",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/clan of saar.svg")).addSvgIcon("embers of muat",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/embers of muat.svg")).addSvgIcon("emirates of hacan",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/emirates of hacan.svg")).addSvgIcon("federation of sol",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/federation of sol.svg")).addSvgIcon("ghosts of creuss",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/ghosts of creuss.svg")).addSvgIcon("l1z1x mindnet",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/l1z1x mindnet.svg")).addSvgIcon("mentak coalition",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/mentak coalition.svg")).addSvgIcon("naalu collective",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/naalu collective.svg")).addSvgIcon("nekro virus",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/nekro virus.svg")).addSvgIcon("sardakk n'orr",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/sardakk n'orr.svg")).addSvgIcon("universities of jol-nar",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/universities of jol-nar.svg")).addSvgIcon("winnu",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/winnu.svg")).addSvgIcon("xxcha kingdom",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/xxcha kingdom.svg")).addSvgIcon("argent flight",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/argent flight.svg")).addSvgIcon("empyrean",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/empyrean.svg")).addSvgIcon("mahact gene-sorcerers",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/mahact gene-sorcerers.svg")).addSvgIcon("naaz-rokha alliance",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/naaz-rokha alliance.svg")).addSvgIcon("nomad",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/nomad.svg")).addSvgIcon("titans of ul",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/titans of ul.svg")).addSvgIcon("vuil'raith cabal",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/vuil'raith cabal.svg")).addSvgIcon("yin brotherhood",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/yin brotherhood.svg")).addSvgIcon("yssaril tribes",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/yssaril tribes.svg"))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=T({type:t,selectors:[["app-root"]],standalone:!1,decls:17,vars:2,consts:[["menu","matMenu"],["mat-button","",3,"matMenuTriggerFor"],["mat-menu-item","","routerLink","/settings"],["mat-menu-item","","routerLink","/tech"],["mat-menu-item","","routerLink","/draft"],["mat-menu-item","","routerLink","/slice"]],template:function(i,r){if(i&1&&(b(0,"mat-toolbar")(1,"button",1)(2,"mat-icon"),H(3,"menu"),C()(),b(4,"mat-menu",null,0)(6,"button",2),H(7,"Settings"),C(),b(8,"button",3),H(9,"Tech"),C(),b(10,"button",4),H(11,"Draft"),C(),b(12,"button",5),H(13,"Slice Generator"),C()(),b(14,"span"),H(15),C()(),ee(16,"router-outlet")),i&2){let o=Rn(5);D(),q("matMenuTriggerFor",o),D(14),cn("Siggis TI4 Buddy ",r.settingsLabel())}},dependencies:[Gh,Ra,jl,OM,Vi,Ph,fl,ha],encapsulation:2})}}return t})();var De=(function(t){return t[t.State=0]="State",t[t.Transition=1]="Transition",t[t.Sequence=2]="Sequence",t[t.Group=3]="Group",t[t.Animate=4]="Animate",t[t.Keyframes=5]="Keyframes",t[t.Style=6]="Style",t[t.Trigger=7]="Trigger",t[t.Reference=8]="Reference",t[t.AnimateChild=9]="AnimateChild",t[t.AnimateRef=10]="AnimateRef",t[t.Query=11]="Query",t[t.Stagger=12]="Stagger",t})(De||{}),ni="*";function LM(t,n=null){return{type:De.Sequence,steps:t,options:n}}function vb(t){return{type:De.Style,styles:t,offset:null}}var dr=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(n=0,e=0){this.totalTime=n+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(n=>n()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(n){this._position=this.totalTime?n*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},Aa=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(n){this.players=n;let e=0,i=0,r=0,o=this.players.length;o==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(s=>{s.onDone(()=>{++e==o&&this._onFinish()}),s.onDestroy(()=>{++i==o&&this._onDestroy()}),s.onStart(()=>{++r==o&&this._onStart()})}),this.totalTime=this.players.reduce((s,a)=>Math.max(s,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this.players.forEach(n=>n.init())}onStart(n){this._onStartFns.push(n)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(n=>n()),this._onStartFns=[])}onDone(n){this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(n=>n.play())}pause(){this.players.forEach(n=>n.pause())}restart(){this.players.forEach(n=>n.restart())}finish(){this._onFinish(),this.players.forEach(n=>n.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(n=>n.destroy()),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this.players.forEach(n=>n.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(n){let e=n*this.totalTime;this.players.forEach(i=>{let r=i.totalTime?Math.min(1,e/i.totalTime):1;i.setPosition(r)})}getPosition(){let n=this.players.reduce((e,i)=>e===null||i.totalTime>e.totalTime?i:e,null);return n!=null?n.getPosition():0}beforeDestroy(){this.players.forEach(n=>{n.beforeDestroy&&n.beforeDestroy()})}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},Vl="!";function jM(t){return new S(3e3,!1)}function UH(){return new S(3100,!1)}function zH(){return new S(3101,!1)}function $H(t){return new S(3001,!1)}function qH(t){return new S(3003,!1)}function GH(t){return new S(3004,!1)}function BM(t,n){return new S(3005,!1)}function HM(){return new S(3006,!1)}function UM(){return new S(3007,!1)}function zM(t,n){return new S(3008,!1)}function $M(t){return new S(3002,!1)}function qM(t,n,e,i,r){return new S(3010,!1)}function GM(){return new S(3011,!1)}function WM(){return new S(3012,!1)}function KM(){return new S(3200,!1)}function YM(){return new S(3202,!1)}function QM(){return new S(3013,!1)}function ZM(t){return new S(3014,!1)}function XM(t){return new S(3015,!1)}function JM(t){return new S(3016,!1)}function eT(t,n){return new S(3404,!1)}function WH(t){return new S(3502,!1)}function tT(t){return new S(3503,!1)}function nT(){return new S(3300,!1)}function iT(t){return new S(3504,!1)}function rT(t){return new S(3301,!1)}function oT(t,n){return new S(3302,!1)}function sT(t){return new S(3303,!1)}function aT(t,n){return new S(3400,!1)}function cT(t){return new S(3401,!1)}function lT(t){return new S(3402,!1)}function dT(t,n){return new S(3505,!1)}function ur(t){switch(t.length){case 0:return new dr;case 1:return t[0];default:return new Aa(t)}}function wb(t,n,e=new Map,i=new Map){let r=[],o=[],s=-1,a=null;if(n.forEach(c=>{let l=c.get("offset"),d=l==s,f=d&&a||new Map;c.forEach((h,m)=>{let p=m,w=h;if(m!=="offset")switch(p=t.normalizePropertyName(p,r),w){case Vl:w=e.get(m);break;case ni:w=i.get(m);break;default:w=t.normalizeStyleValue(m,p,w,r);break}f.set(p,w)}),d||o.push(f),a=f,s=l}),r.length)throw WH(r);return o}function am(t,n,e,i){switch(n){case"start":t.onStart(()=>i(e&&yb(e,"start",t)));break;case"done":t.onDone(()=>i(e&&yb(e,"done",t)));break;case"destroy":t.onDestroy(()=>i(e&&yb(e,"destroy",t)));break}}function yb(t,n,e){let i=e.totalTime,r=!!e.disabled,o=cm(t.element,t.triggerName,t.fromState,t.toState,n||t.phaseName,i??t.totalTime,r),s=t._data;return s!=null&&(o._data=s),o}function cm(t,n,e,i,r="",o=0,s){return{element:t,triggerName:n,fromState:e,toState:i,phaseName:r,totalTime:o,disabled:!!s}}function dn(t,n,e){let i=t.get(n);return i||t.set(n,i=e),i}function Sb(t){let n=t.indexOf(":"),e=t.substring(1,n),i=t.slice(n+1);return[e,i]}var KH=typeof document>"u"?null:document.documentElement;function lm(t){let n=t.parentNode||t.host||null;return n===KH?null:n}function YH(t){return t.substring(1,6)=="ebkit"}var cs=null,VM=!1;function uT(t){cs||(cs=QH()||{},VM=cs.style?"WebkitAppearance"in cs.style:!1);let n=!0;return cs.style&&!YH(t)&&(n=t in cs.style,!n&&VM&&(n="Webkit"+t.charAt(0).toUpperCase()+t.slice(1)in cs.style)),n}function QH(){return typeof document<"u"?document.body:null}function Cb(t,n){for(;n;){if(n===t)return!0;n=lm(n)}return!1}function Db(t,n,e){if(e)return Array.from(t.querySelectorAll(n));let i=t.querySelector(n);return i?[i]:[]}var ZH=1e3,xb="{{",XH="}}",Eb="ng-enter",dm="ng-leave",Bl="ng-trigger",Hl=".ng-trigger",Nb="ng-animating",um=".ng-animating";function Bi(t){if(typeof t=="number")return t;let n=t.match(/^(-?[\.\d]+)(m?s)/);return!n||n.length<2?0:_b(parseFloat(n[1]),n[2])}function _b(t,n){return n==="s"?t*ZH:t}function Ul(t,n,e){return typeof t=="object"&&t!==null&&Object.hasOwn(t,"duration")?t:eU(t,n,e)}var JH=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function eU(t,n,e){let i,r=0,o="";if(typeof t=="string"){let s=t.match(JH);if(s===null)return n.push(jM(t)),{duration:0,delay:0,easing:""};i=_b(parseFloat(s[1]),s[2]);let a=s[3];a!=null&&(r=_b(parseFloat(a),s[4]));let c=s[5];c&&(o=c)}else i=t;if(!e){let s=!1,a=n.length;i<0&&(n.push(UH()),s=!0),r<0&&(n.push(zH()),s=!0),s&&n.splice(a,0,jM(t))}return{duration:i,delay:r,easing:o}}function fT(t){return t.length?t[0]instanceof Map?t:t.map(n=>new Map(Object.entries(n))):[]}function ii(t,n,e){n.forEach((i,r)=>{let o=fm(r);e&&!e.has(r)&&e.set(r,t.style[o]),t.style[o]=i})}function to(t,n){n.forEach((e,i)=>{let r=fm(i);t.style[r]=""})}function Oa(t){return Array.isArray(t)?t.length==1?t[0]:LM(t):t}function hT(t,n,e){let i=n.params||{},r=Ib(t);r.length&&r.forEach(o=>{Object.hasOwn(i,o)||e.push($H(o))})}var bb=new RegExp(`${xb}\\s*(.+?)\\s*${XH}`,"g");function Ib(t){let n=[];if(typeof t=="string"){let e;for(;e=bb.exec(t);)n.push(e[1]);bb.lastIndex=0}return n}function Fa(t,n,e){let i=`${t}`,r=i.replace(bb,(o,s)=>{let a=n[s];return a==null&&(e.push(qH(s)),a=""),a.toString()});return r==i?t:r}var tU=/-+([a-z0-9])/g;function fm(t){return t.replace(tU,(...n)=>n[1].toUpperCase())}function mT(t,n){return t===0||n===0}function pT(t,n,e){if(e.size&&n.length){let i=n[0],r=[];if(e.forEach((o,s)=>{i.has(s)||r.push(s),i.set(s,o)}),r.length)for(let o=1;o<n.length;o++){let s=n[o];r.forEach(a=>s.set(a,hm(t,a)))}}return n}function un(t,n,e){switch(n.type){case De.Trigger:return t.visitTrigger(n,e);case De.State:return t.visitState(n,e);case De.Transition:return t.visitTransition(n,e);case De.Sequence:return t.visitSequence(n,e);case De.Group:return t.visitGroup(n,e);case De.Animate:return t.visitAnimate(n,e);case De.Keyframes:return t.visitKeyframes(n,e);case De.Style:return t.visitStyle(n,e);case De.Reference:return t.visitReference(n,e);case De.AnimateChild:return t.visitAnimateChild(n,e);case De.AnimateRef:return t.visitAnimateRef(n,e);case De.Query:return t.visitQuery(n,e);case De.Stagger:return t.visitStagger(n,e);default:throw GH(n.type)}}function hm(t,n){return window.getComputedStyle(t)[n]}var qb=(()=>{class t{validateStyleProperty(e){return uT(e)}containsElement(e,i){return Cb(e,i)}getParentElement(e){return lm(e)}query(e,i,r){return Db(e,i,r)}computeStyle(e,i,r){return r||""}animate(e,i,r,o,s,a=[],c){return new dr(r,o)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),ds=class{static NOOP=new qb},us=class{};var nU=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),ym=class extends us{normalizePropertyName(n,e){return fm(n)}normalizeStyleValue(n,e,i,r){let o="",s=i.toString().trim();if(nU.has(e)&&i!==0&&i!=="0")if(typeof i=="number")o="px";else{let a=i.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&a[1].length==0&&r.push(BM(n,i))}return s+o}};var _m="*";function iU(t,n){let e=[];return typeof t=="string"?t.split(/\s*,\s*/).forEach(i=>rU(i,e,n)):e.push(t),e}function rU(t,n,e){if(t[0]==":"){let c=oU(t,e);if(typeof c=="function"){n.push(c);return}t=c}let i=t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(i==null||i.length<4)return e.push(XM(t)),n;let r=i[1],o=i[2],s=i[3];n.push(gT(r,s));let a=r==_m&&s==_m;o[0]=="<"&&!a&&n.push(gT(s,r))}function oU(t,n){switch(t){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,i)=>parseFloat(i)>parseFloat(e);case":decrement":return(e,i)=>parseFloat(i)<parseFloat(e);default:return n.push(JM(t)),"* => *"}}var mm=new Set(["true","1"]),pm=new Set(["false","0"]);function gT(t,n){let e=mm.has(t)||pm.has(t),i=mm.has(n)||pm.has(n);return(r,o)=>{let s=t==_m||t==r,a=n==_m||n==o;return!s&&e&&typeof r=="boolean"&&(s=r?mm.has(t):pm.has(t)),!a&&i&&typeof o=="boolean"&&(a=o?mm.has(n):pm.has(n)),s&&a}}var ET=":self",sU=new RegExp(`s*${ET}s*,?`,"g");function NT(t,n,e,i){return new Ob(t).build(n,e,i)}var vT="",Ob=class{_driver;constructor(n){this._driver=n}build(n,e,i){let r=new Fb(e);return this._resetContextStyleTimingState(r),un(this,Oa(n),r)}_resetContextStyleTimingState(n){n.currentQuerySelector=vT,n.collectedStyles=new Map,n.collectedStyles.set(vT,new Map),n.currentTime=0}visitTrigger(n,e){let i=e.queryCount=0,r=e.depCount=0,o=[],s=[];return n.name.charAt(0)=="@"&&e.errors.push(HM()),n.definitions.forEach(a=>{if(this._resetContextStyleTimingState(e),a.type==De.State){let c=a,l=c.name;l.toString().split(/\s*,\s*/).forEach(d=>{c.name=d,o.push(this.visitState(c,e))}),c.name=l}else if(a.type==De.Transition){let c=this.visitTransition(a,e);i+=c.queryCount,r+=c.depCount,s.push(c)}else e.errors.push(UM())}),{type:De.Trigger,name:n.name,states:o,transitions:s,queryCount:i,depCount:r,options:null}}visitState(n,e){let i=this.visitStyle(n.styles,e),r=n.options&&n.options.params||null;if(i.containsDynamicStyles){let o=new Set,s=r||{};i.styles.forEach(a=>{a instanceof Map&&a.forEach(c=>{Ib(c).forEach(l=>{Object.hasOwn(s,l)||o.add(l)})})}),o.size&&e.errors.push(zM(n.name,[...o.values()]))}return{type:De.State,name:n.name,style:i,options:r?{params:r}:null}}visitTransition(n,e){e.queryCount=0,e.depCount=0;let i=un(this,Oa(n.animation),e),r=iU(n.expr,e.errors);return{type:De.Transition,matchers:r,animation:i,queryCount:e.queryCount,depCount:e.depCount,options:ls(n.options)}}visitSequence(n,e){return{type:De.Sequence,steps:n.steps.map(i=>un(this,i,e)),options:ls(n.options)}}visitGroup(n,e){let i=e.currentTime,r=0,o=n.steps.map(s=>{e.currentTime=i;let a=un(this,s,e);return r=Math.max(r,e.currentTime),a});return e.currentTime=r,{type:De.Group,steps:o,options:ls(n.options)}}visitAnimate(n,e){let i=dU(n.timings,e.errors);e.currentAnimateTimings=i;let r,o=n.styles?n.styles:vb({});if(o.type==De.Keyframes)r=this.visitKeyframes(o,e);else{let s=n.styles,a=!1;if(!s){a=!0;let l={};i.easing&&(l.easing=i.easing),s=vb(l)}e.currentTime+=i.duration+i.delay;let c=this.visitStyle(s,e);c.isEmptyStep=a,r=c}return e.currentAnimateTimings=null,{type:De.Animate,timings:i,style:r,options:null}}visitStyle(n,e){let i=this._makeStyleAst(n,e);return this._validateStyleAst(i,e),i}_makeStyleAst(n,e){let i=[],r=Array.isArray(n.styles)?n.styles:[n.styles];for(let a of r)typeof a=="string"?a===ni?i.push(a):e.errors.push($M(a)):i.push(new Map(Object.entries(a)));let o=!1,s=null;return i.forEach(a=>{if(a instanceof Map&&(a.has("easing")&&(s=a.get("easing"),a.delete("easing")),!o)){for(let c of a.values())if(c.toString().indexOf(xb)>=0){o=!0;break}}}),{type:De.Style,styles:i,easing:s,offset:n.offset,containsDynamicStyles:o,options:null}}_validateStyleAst(n,e){let i=e.currentAnimateTimings,r=e.currentTime,o=e.currentTime;i&&o>0&&(o-=i.duration+i.delay),n.styles.forEach(s=>{typeof s!="string"&&s.forEach((a,c)=>{let l=e.collectedStyles.get(e.currentQuerySelector),d=l.get(c),f=!0;d&&(o!=r&&o>=d.startTime&&r<=d.endTime&&(e.errors.push(qM(c,d.startTime,d.endTime,o,r)),f=!1),o=d.startTime),f&&l.set(c,{startTime:o,endTime:r}),e.options&&hT(a,e.options,e.errors)})})}visitKeyframes(n,e){let i={type:De.Keyframes,styles:[],options:null};if(!e.currentAnimateTimings)return e.errors.push(GM()),i;let r=1,o=0,s=[],a=!1,c=!1,l=0,d=n.steps.map(I=>{let k=this._makeStyleAst(I,e),Z=k.offset!=null?k.offset:lU(k.styles),Re=0;return Z!=null&&(o++,Re=k.offset=Z),c=c||Re<0||Re>1,a=a||Re<l,l=Re,s.push(Re),k});c&&e.errors.push(WM()),a&&e.errors.push(KM());let f=n.steps.length,h=0;o>0&&o<f?e.errors.push(YM()):o==0&&(h=r/(f-1));let m=f-1,p=e.currentTime,w=e.currentAnimateTimings,E=w.duration;return d.forEach((I,k)=>{let Z=h>0?k==m?1:h*k:s[k],Re=Z*E;e.currentTime=p+w.delay+Re,w.duration=Re,this._validateStyleAst(I,e),I.offset=Z,i.styles.push(I)}),i}visitReference(n,e){return{type:De.Reference,animation:un(this,Oa(n.animation),e),options:ls(n.options)}}visitAnimateChild(n,e){return e.depCount++,{type:De.AnimateChild,options:ls(n.options)}}visitAnimateRef(n,e){return{type:De.AnimateRef,animation:this.visitReference(n.animation,e),options:ls(n.options)}}visitQuery(n,e){let i=e.currentQuerySelector,r=n.options||{};e.queryCount++,e.currentQuery=n;let[o,s]=aU(n.selector);e.currentQuerySelector=i.length?i+" "+o:o,dn(e.collectedStyles,e.currentQuerySelector,new Map);let a=un(this,Oa(n.animation),e);return e.currentQuery=null,e.currentQuerySelector=i,{type:De.Query,selector:o,limit:r.limit||0,optional:!!r.optional,includeSelf:s,animation:a,originalSelector:n.selector,options:ls(n.options)}}visitStagger(n,e){e.currentQuery||e.errors.push(QM());let i=n.timings==="full"?{duration:0,delay:0,easing:"full"}:Ul(n.timings,e.errors,!0);return{type:De.Stagger,animation:un(this,Oa(n.animation),e),timings:i,options:null}}};function aU(t){let n=!!t.split(/\s*,\s*/).find(e=>e==ET);return n&&(t=t.replace(sU,"")),t=t.replace(/@\*/g,Hl).replace(/@\w+/g,e=>Hl+"-"+e.slice(1)).replace(/:animating/g,um),[t,n]}function cU(t){return t?_({},t):null}var Fb=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(n){this.errors=n}};function lU(t){if(typeof t=="string")return null;let n=null;if(Array.isArray(t))t.forEach(e=>{if(e instanceof Map&&e.has("offset")){let i=e;n=parseFloat(i.get("offset")),i.delete("offset")}});else if(t instanceof Map&&t.has("offset")){let e=t;n=parseFloat(e.get("offset")),e.delete("offset")}return n}function dU(t,n){if(typeof t=="object"&&t!==null&&Object.hasOwn(t,"duration"))return t;if(typeof t=="number"){let o=Ul(t,n).duration;return Mb(o,0,"")}let e=t;if(e.split(/\s+/).some(o=>o.charAt(0)=="{"&&o.charAt(1)=="{")){let o=Mb(0,0,"");return o.dynamic=!0,o.strValue=e,o}let r=Ul(e,n);return Mb(r.duration,r.delay,r.easing)}function ls(t){return t?(t=_({},t),t.params&&(t.params=cU(t.params))):t={},t}function Mb(t,n,e){return{duration:t,delay:n,easing:e}}function Gb(t,n,e,i,r,o,s=null,a=!1){return{type:1,element:t,keyframes:n,preStyleProps:e,postStyleProps:i,duration:r,delay:o,totalTime:r+o,easing:s,subTimeline:a}}var $l=class{_map=new Map;get(n){return this._map.get(n)||[]}append(n,e){let i=this._map.get(n);i||this._map.set(n,i=[]),i.push(...e)}has(n){return this._map.has(n)}clear(){this._map.clear()}},uU=1,fU=":enter",hU=new RegExp(fU,"g"),mU=":leave",pU=new RegExp(mU,"g");function IT(t,n,e,i,r,o=new Map,s=new Map,a,c,l=[]){return new Pb().buildKeyframes(t,n,e,i,r,o,s,a,c,l)}var Pb=class{buildKeyframes(n,e,i,r,o,s,a,c,l,d=[]){l=l||new $l;let f=new Lb(n,e,l,r,o,d,[]);f.options=c;let h=c.delay?Bi(c.delay):0;f.currentTimeline.delayNextStep(h),f.currentTimeline.setStyles([s],null,f.errors,c),un(this,i,f);let m=f.timelines.filter(p=>p.containsAnimation());if(m.length&&a.size){let p;for(let w=m.length-1;w>=0;w--){let E=m[w];if(E.element===e){p=E;break}}p&&!p.allowOnlyTimelineStyles()&&p.setStyles([a],null,f.errors,c)}return m.length?m.map(p=>p.buildKeyframes()):[Gb(e,[],[],[],0,h,"",!1)]}visitTrigger(n,e){}visitState(n,e){}visitTransition(n,e){}visitAnimateChild(n,e){let i=e.subInstructions.get(e.element);if(i){let r=e.createSubContext(n.options),o=e.currentTimeline.currentTime,s=this._visitSubInstructions(i,r,r.options);o!=s&&e.transformIntoNewTimeline(s)}e.previousNode=n}visitAnimateRef(n,e){let i=e.createSubContext(n.options);i.transformIntoNewTimeline(),this._applyAnimationRefDelays([n.options,n.animation.options],e,i),this.visitReference(n.animation,i),e.transformIntoNewTimeline(i.currentTimeline.currentTime),e.previousNode=n}_applyAnimationRefDelays(n,e,i){for(let r of n){let o=r?.delay;if(o){let s=typeof o=="number"?o:Bi(Fa(o,r?.params??{},e.errors));i.delayNextStep(s)}}}_visitSubInstructions(n,e,i){let o=e.currentTimeline.currentTime,s=i.duration!=null?Bi(i.duration):null,a=i.delay!=null?Bi(i.delay):null;return s!==0&&n.forEach(c=>{let l=e.appendInstructionToTimeline(c,s,a);o=Math.max(o,l.duration+l.delay)}),o}visitReference(n,e){e.updateOptions(n.options,!0),un(this,n.animation,e),e.previousNode=n}visitSequence(n,e){let i=e.subContextCount,r=e,o=n.options;if(o&&(o.params||o.delay)&&(r=e.createSubContext(o),r.transformIntoNewTimeline(),o.delay!=null)){r.previousNode.type==De.Style&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=bm);let s=Bi(o.delay);r.delayNextStep(s)}n.steps.length&&(n.steps.forEach(s=>un(this,s,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>i&&r.transformIntoNewTimeline()),e.previousNode=n}visitGroup(n,e){let i=[],r=e.currentTimeline.currentTime,o=n.options&&n.options.delay?Bi(n.options.delay):0;n.steps.forEach(s=>{let a=e.createSubContext(n.options);o&&a.delayNextStep(o),un(this,s,a),r=Math.max(r,a.currentTimeline.currentTime),i.push(a.currentTimeline)}),i.forEach(s=>e.currentTimeline.mergeTimelineCollectedStyles(s)),e.transformIntoNewTimeline(r),e.previousNode=n}_visitTiming(n,e){if(n.dynamic){let i=n.strValue,r=e.params?Fa(i,e.params,e.errors):i;return Ul(r,e.errors)}else return{duration:n.duration,delay:n.delay,easing:n.easing}}visitAnimate(n,e){let i=e.currentAnimateTimings=this._visitTiming(n.timings,e),r=e.currentTimeline;i.delay&&(e.incrementTime(i.delay),r.snapshotCurrentStyles());let o=n.style;o.type==De.Keyframes?this.visitKeyframes(o,e):(e.incrementTime(i.duration),this.visitStyle(o,e),r.applyStylesToKeyframe()),e.currentAnimateTimings=null,e.previousNode=n}visitStyle(n,e){let i=e.currentTimeline,r=e.currentAnimateTimings;!r&&i.hasCurrentStyleProperties()&&i.forwardFrame();let o=r&&r.easing||n.easing;n.isEmptyStep?i.applyEmptyStep(o):i.setStyles(n.styles,o,e.errors,e.options),e.previousNode=n}visitKeyframes(n,e){let i=e.currentAnimateTimings,r=e.currentTimeline.duration,o=i.duration,a=e.createSubContext().currentTimeline;a.easing=i.easing,n.styles.forEach(c=>{let l=c.offset||0;a.forwardTime(l*o),a.setStyles(c.styles,c.easing,e.errors,e.options),a.applyStylesToKeyframe()}),e.currentTimeline.mergeTimelineCollectedStyles(a),e.transformIntoNewTimeline(r+o),e.previousNode=n}visitQuery(n,e){let i=e.currentTimeline.currentTime,r=n.options||{},o=r.delay?Bi(r.delay):0;o&&(e.previousNode.type===De.Style||i==0&&e.currentTimeline.hasCurrentStyleProperties())&&(e.currentTimeline.snapshotCurrentStyles(),e.previousNode=bm);let s=i,a=e.invokeQuery(n.selector,n.originalSelector,n.limit,n.includeSelf,!!r.optional,e.errors);e.currentQueryTotal=a.length;let c=null;a.forEach((l,d)=>{e.currentQueryIndex=d;let f=e.createSubContext(n.options,l);o&&f.delayNextStep(o),l===e.element&&(c=f.currentTimeline),un(this,n.animation,f),f.currentTimeline.applyStylesToKeyframe();let h=f.currentTimeline.currentTime;s=Math.max(s,h)}),e.currentQueryIndex=0,e.currentQueryTotal=0,e.transformIntoNewTimeline(s),c&&(e.currentTimeline.mergeTimelineCollectedStyles(c),e.currentTimeline.snapshotCurrentStyles()),e.previousNode=n}visitStagger(n,e){let i=e.parentContext,r=e.currentTimeline,o=n.timings,s=Math.abs(o.duration),a=s*(e.currentQueryTotal-1),c=s*e.currentQueryIndex;switch(o.duration<0?"reverse":o.easing){case"reverse":c=a-c;break;case"full":c=i.currentStaggerTime;break}let d=e.currentTimeline;c&&d.delayNextStep(c);let f=d.currentTime;un(this,n.animation,e),e.previousNode=n,i.currentStaggerTime=r.currentTime-f+(r.startTime-i.currentTimeline.startTime)}},bm={},Lb=class t{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=bm;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(n,e,i,r,o,s,a,c){this._driver=n,this.element=e,this.subInstructions=i,this._enterClassName=r,this._leaveClassName=o,this.errors=s,this.timelines=a,this.currentTimeline=c||new wm(this._driver,e,0),a.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(n,e){if(!n)return;let i=n,r=this.options;i.duration!=null&&(r.duration=Bi(i.duration)),i.delay!=null&&(r.delay=Bi(i.delay));let o=i.params;if(o){let s=r.params;s||(s=this.options.params={}),Object.keys(o).forEach(a=>{(!e||!Object.hasOwn(s,a))&&(s[a]=Fa(o[a],s,this.errors))})}}_copyOptions(){let n={};if(this.options){let e=this.options.params;if(e){let i=n.params={};Object.keys(e).forEach(r=>{i[r]=e[r]})}}return n}createSubContext(n=null,e,i){let r=e||this.element,o=new t(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,i||0));return o.previousNode=this.previousNode,o.currentAnimateTimings=this.currentAnimateTimings,o.options=this._copyOptions(),o.updateOptions(n),o.currentQueryIndex=this.currentQueryIndex,o.currentQueryTotal=this.currentQueryTotal,o.parentContext=this,this.subContextCount++,o}transformIntoNewTimeline(n){return this.previousNode=bm,this.currentTimeline=this.currentTimeline.fork(this.element,n),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(n,e,i){let r={duration:e??n.duration,delay:this.currentTimeline.currentTime+(i??0)+n.delay,easing:""},o=new jb(this._driver,n.element,n.keyframes,n.preStyleProps,n.postStyleProps,r,n.stretchStartingKeyframe);return this.timelines.push(o),r}incrementTime(n){this.currentTimeline.forwardTime(this.currentTimeline.duration+n)}delayNextStep(n){n>0&&this.currentTimeline.delayNextStep(n)}invokeQuery(n,e,i,r,o,s){let a=[];if(r&&a.push(this.element),n.length>0){n=n.replace(hU,"."+this._enterClassName),n=n.replace(pU,"."+this._leaveClassName);let c=i!=1,l=this._driver.query(this.element,n,c);i!==0&&(l=i<0?l.slice(l.length+i,l.length):l.slice(0,i)),a.push(...l)}return!o&&a.length==0&&s.push(ZM(e)),a}},wm=class t{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(n,e,i,r){this._driver=n,this.element=e,this.startTime=i,this._elementTimelineStylesLookup=r,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(e),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(e,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(n){let e=this._keyframes.size===1&&this._pendingStyles.size;this.duration||e?(this.forwardTime(this.currentTime+n),e&&this.snapshotCurrentStyles()):this.startTime+=n}fork(n,e){return this.applyStylesToKeyframe(),new t(this._driver,n,e||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=uU,this._loadKeyframe()}forwardTime(n){this.applyStylesToKeyframe(),this.duration=n,this._loadKeyframe()}_updateStyle(n,e){this._localTimelineStyles.set(n,e),this._globalTimelineStyles.set(n,e),this._styleSummary.set(n,{time:this.currentTime,value:e})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(n){n&&this._previousKeyframe.set("easing",n);for(let[e,i]of this._globalTimelineStyles)this._backFill.set(e,i||ni),this._currentKeyframe.set(e,ni);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(n,e,i,r){e&&this._previousKeyframe.set("easing",e);let o=r&&r.params||{},s=gU(n,this._globalTimelineStyles);for(let[a,c]of s){let l=Fa(c,o,i);this._pendingStyles.set(a,l),this._localTimelineStyles.has(a)||this._backFill.set(a,this._globalTimelineStyles.get(a)??ni),this._updateStyle(a,l)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((n,e)=>{this._currentKeyframe.set(e,n)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((n,e)=>{this._currentKeyframe.has(e)||this._currentKeyframe.set(e,n)}))}snapshotCurrentStyles(){for(let[n,e]of this._localTimelineStyles)this._pendingStyles.set(n,e),this._updateStyle(n,e)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let n=[];for(let e in this._currentKeyframe)n.push(e);return n}mergeTimelineCollectedStyles(n){n._styleSummary.forEach((e,i)=>{let r=this._styleSummary.get(i);(!r||e.time>r.time)&&this._updateStyle(i,e.value)})}buildKeyframes(){this.applyStylesToKeyframe();let n=new Set,e=new Set,i=this._keyframes.size===1&&this.duration===0,r=[];this._keyframes.forEach((a,c)=>{let l=new Map([...this._backFill,...a]);l.forEach((d,f)=>{d===Vl?n.add(f):d===ni&&e.add(f)}),i||l.set("offset",c/this.duration),r.push(l)});let o=[...n.values()],s=[...e.values()];if(i){let a=r[0],c=new Map(a);a.set("offset",0),c.set("offset",1),r=[a,c]}return Gb(this.element,r,o,s,this.duration,this.startTime,this.easing,!1)}},jb=class extends wm{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(n,e,i,r,o,s,a=!1){super(n,e,s.delay),this.keyframes=i,this.preStyleProps=r,this.postStyleProps=o,this._stretchStartingKeyframe=a,this.timings={duration:s.duration,delay:s.delay,easing:s.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let n=this.keyframes,{delay:e,duration:i,easing:r}=this.timings;if(this._stretchStartingKeyframe&&e){let o=[],s=i+e,a=e/s,c=new Map(n[0]);c.set("offset",0),o.push(c);let l=new Map(n[0]);l.set("offset",yT(a)),o.push(l);let d=n.length-1;for(let f=1;f<=d;f++){let h=new Map(n[f]),m=h.get("offset"),p=e+m*i;h.set("offset",yT(p/s)),o.push(h)}i=s,e=0,r="",n=o}return Gb(this.element,n,this.preStyleProps,this.postStyleProps,i,e,r,!0)}};function yT(t,n=3){let e=Math.pow(10,n-1);return Math.round(t*e)/e}function gU(t,n){let e=new Map,i;return t.forEach(r=>{if(r==="*"){i??=n.keys();for(let o of i)e.set(o,ni)}else for(let[o,s]of r)e.set(o,s)}),e}function _T(t,n,e,i,r,o,s,a,c,l,d,f,h){return{type:0,element:t,triggerName:n,isRemovalTransition:r,fromState:e,fromStyles:o,toState:i,toStyles:s,timelines:a,queriedElements:c,preStyleProps:l,postStyleProps:d,totalTime:f,errors:h}}var Tb={},Sm=class{_triggerName;ast;_stateStyles;constructor(n,e,i){this._triggerName=n,this.ast=e,this._stateStyles=i}match(n,e,i,r){return vU(this.ast.matchers,n,e,i,r)}buildStyles(n,e,i){let r=this._stateStyles.get("*");return n!==void 0&&(r=this._stateStyles.get(n?.toString())||r),r?r.buildStyles(e,i):new Map}build(n,e,i,r,o,s,a,c,l,d){let f=[],h=this.ast.options&&this.ast.options.params||Tb,m=a&&a.params||Tb,p=this.buildStyles(i,m,f),w=c&&c.params||Tb,E=this.buildStyles(r,w,f),I=new Set,k=new Map,Z=new Map,Re=r==="void",It={params:MT(w,h),delay:this.ast.options?.delay},Fe=d?[]:IT(n,e,this.ast.animation,o,s,p,E,It,l,f),Xe=0;return Fe.forEach(it=>{Xe=Math.max(it.duration+it.delay,Xe)}),f.length?_T(e,this._triggerName,i,r,Re,p,E,[],[],k,Z,Xe,f):(Fe.forEach(it=>{let Mt=it.element,fr=dn(k,Mt,new Set);it.preStyleProps.forEach(jn=>fr.add(jn));let fs=dn(Z,Mt,new Set);it.postStyleProps.forEach(jn=>fs.add(jn)),Mt!==e&&I.add(Mt)}),_T(e,this._triggerName,i,r,Re,p,E,Fe,[...I.values()],k,Z,Xe))}};function vU(t,n,e,i,r){return t.some(o=>o(n,e,i,r))}function MT(t,n){let e=_({},n);return Object.entries(t).forEach(([i,r])=>{r!=null&&(e[i]=r)}),e}var Vb=class{styles;defaultParams;normalizer;constructor(n,e,i){this.styles=n,this.defaultParams=e,this.normalizer=i}buildStyles(n,e){let i=new Map,r=MT(n,this.defaultParams);return this.styles.styles.forEach(o=>{typeof o!="string"&&o.forEach((s,a)=>{s&&(s=Fa(s,r,e));let c=this.normalizer.normalizePropertyName(a,e);s=this.normalizer.normalizeStyleValue(a,c,s,e),i.set(a,s)})}),i}};function yU(t,n,e){return new Bb(t,n,e)}var Bb=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(n,e,i){this.name=n,this.ast=e,this._normalizer=i,e.states.forEach(r=>{let o=r.options&&r.options.params||{};this.states.set(r.name,new Vb(r.style,o,i))}),bT(this.states,"true","1"),bT(this.states,"false","0"),e.transitions.forEach(r=>{this.transitionFactories.push(new Sm(n,r,this.states))}),this.fallbackTransition=_U(n,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(n,e,i,r){return this.transitionFactories.find(s=>s.match(n,e,i,r))||null}matchStyles(n,e,i){return this.fallbackTransition.buildStyles(n,e,i)}};function _U(t,n,e){let i=[(s,a)=>!0],r={type:De.Sequence,steps:[],options:null},o={type:De.Transition,animation:r,matchers:i,options:null,queryCount:0,depCount:0};return new Sm(t,o,n)}function bT(t,n,e){t.has(n)?t.has(e)||t.set(e,t.get(n)):t.has(e)&&t.set(n,t.get(e))}var bU=new $l,Hb=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(n,e,i){this.bodyNode=n,this._driver=e,this._normalizer=i}register(n,e){let i=[],r=[],o=NT(this._driver,e,i,r);if(i.length)throw tT(i);this._animations.set(n,o)}_buildPlayer(n,e,i){let r=n.element,o=wb(this._normalizer,n.keyframes,e,i);return this._driver.animate(r,o,n.duration,n.delay,n.easing,[],!0)}create(n,e,i={}){let r=[],o=this._animations.get(n),s,a=new Map;if(o?(s=IT(this._driver,e,o,Eb,dm,new Map,new Map,i,bU,r),s.forEach(d=>{let f=dn(a,d.element,new Map);d.postStyleProps.forEach(h=>f.set(h,null))})):(r.push(nT()),s=[]),r.length)throw iT(r);a.forEach((d,f)=>{d.forEach((h,m)=>{d.set(m,this._driver.computeStyle(f,m,ni))})});let c=s.map(d=>{let f=a.get(d.element);return this._buildPlayer(d,new Map,f)}),l=ur(c);return this._playersById.set(n,l),l.onDestroy(()=>this.destroy(n)),this.players.push(l),l}destroy(n){let e=this._getPlayer(n);e.destroy(),this._playersById.delete(n);let i=this.players.indexOf(e);i>=0&&this.players.splice(i,1)}_getPlayer(n){let e=this._playersById.get(n);if(!e)throw rT(n);return e}listen(n,e,i,r){let o=cm(e,"","","");return am(this._getPlayer(n),i,o,r),()=>{}}command(n,e,i,r){if(i=="register"){this.register(n,r[0]);return}if(i=="create"){let s=r[0]||{};this.create(n,e,s);return}let o=this._getPlayer(n);switch(i){case"play":o.play();break;case"pause":o.pause();break;case"reset":o.reset();break;case"restart":o.restart();break;case"finish":o.finish();break;case"init":o.init();break;case"setPosition":o.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(n);break}}},wT="ng-animate-queued",wU=".ng-animate-queued",kb="ng-animate-disabled",SU=".ng-animate-disabled",CU="ng-star-inserted",DU=".ng-star-inserted",xU=[],TT={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},EU={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},ri="__ng_removed",ql=class{namespaceId;value;options;get params(){return this.options.params}constructor(n,e=""){this.namespaceId=e;let i=n&&Object.hasOwn(n,"value"),r=i?n.value:n;if(this.value=IU(r),i){let o=n,{value:s}=o,a=Im(o,["value"]);this.options=a}else this.options={};this.options.params||(this.options.params={})}absorbOptions(n){let e=n.params;if(e){let i=this.options.params;Object.keys(e).forEach(r=>{i[r]==null&&(i[r]=e[r])})}}},zl="void",Rb=new ql(zl),Ub=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(n,e,i){this.id=n,this.hostElement=e,this._engine=i,this._hostClassName="ng-tns-"+n,Ln(e,this._hostClassName)}listen(n,e,i,r){if(!this._triggers.has(e))throw oT(i,e);if(i==null||i.length==0)throw sT(e);if(!MU(i))throw aT(i,e);let o=dn(this._elementListeners,n,[]),s={name:e,phase:i,callback:r};o.push(s);let a=dn(this._engine.statesByElement,n,new Map);return a.has(e)||(Ln(n,Bl),Ln(n,Bl+"-"+e),a.set(e,Rb)),()=>{this._engine.afterFlush(()=>{let c=o.indexOf(s);c>=0&&o.splice(c,1),this._triggers.has(e)||a.delete(e)})}}register(n,e){return this._triggers.has(n)?!1:(this._triggers.set(n,e),!0)}_getTrigger(n){let e=this._triggers.get(n);if(!e)throw cT(n);return e}trigger(n,e,i,r=!0){let o=this._getTrigger(e),s=new Gl(this.id,e,n),a=this._engine.statesByElement.get(n);a||(Ln(n,Bl),Ln(n,Bl+"-"+e),this._engine.statesByElement.set(n,a=new Map));let c=a.get(e),l=new ql(i,this.id);if(!(i&&Object.hasOwn(i,"value"))&&c&&l.absorbOptions(c.options),a.set(e,l),c||(c=Rb),!(l.value===zl)&&c.value===l.value){if(!RU(c.params,l.params)){let w=[],E=o.matchStyles(c.value,c.params,w),I=o.matchStyles(l.value,l.params,w);w.length?this._engine.reportError(w):this._engine.afterFlush(()=>{to(n,E),ii(n,I)})}return}let h=dn(this._engine.playersByElement,n,[]);h.forEach(w=>{w.namespaceId==this.id&&w.triggerName==e&&w.queued&&w.destroy()});let m=o.matchTransition(c.value,l.value,n,l.params),p=!1;if(!m){if(!r)return;m=o.fallbackTransition,p=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:e,transition:m,fromState:c,toState:l,player:s,isFallbackTransition:p}),p||(Ln(n,wT),s.onStart(()=>{Pa(n,wT)})),s.onDone(()=>{let w=this.players.indexOf(s);w>=0&&this.players.splice(w,1);let E=this._engine.playersByElement.get(n);if(E){let I=E.indexOf(s);I>=0&&E.splice(I,1)}}),this.players.push(s),h.push(s),s}deregister(n){this._triggers.delete(n),this._engine.statesByElement.forEach(e=>e.delete(n)),this._elementListeners.forEach((e,i)=>{this._elementListeners.set(i,e.filter(r=>r.name!=n))})}clearElementCache(n){this._engine.statesByElement.delete(n),this._elementListeners.delete(n);let e=this._engine.playersByElement.get(n);e&&(e.forEach(i=>i.destroy()),this._engine.playersByElement.delete(n))}_signalRemovalForInnerTriggers(n,e){let i=this._engine.driver.query(n,Hl,!0);i.forEach(r=>{if(r[ri])return;let o=this._engine.fetchNamespacesByElement(r);o.size?o.forEach(s=>s.triggerLeaveAnimation(r,e,!1,!0)):this.clearElementCache(r)}),this._engine.afterFlushAnimationsDone(()=>i.forEach(r=>this.clearElementCache(r)))}triggerLeaveAnimation(n,e,i,r){let o=this._engine.statesByElement.get(n),s=new Map;if(o){let a=[];if(o.forEach((c,l)=>{if(s.set(l,c.value),this._triggers.has(l)){let d=this.trigger(n,l,zl,r);d&&a.push(d)}}),a.length)return this._engine.markElementAsRemoved(this.id,n,!0,e,s),i&&ur(a).onDone(()=>this._engine.processLeaveNode(n)),!0}return!1}prepareLeaveAnimationListeners(n){let e=this._elementListeners.get(n),i=this._engine.statesByElement.get(n);if(e&&i){let r=new Set;e.forEach(o=>{let s=o.name;if(r.has(s))return;r.add(s);let c=this._triggers.get(s).fallbackTransition,l=i.get(s)||Rb,d=new ql(zl),f=new Gl(this.id,s,n);this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:s,transition:c,fromState:l,toState:d,player:f,isFallbackTransition:!0})})}}removeNode(n,e){let i=this._engine;if(n.childElementCount&&this._signalRemovalForInnerTriggers(n,e),this.triggerLeaveAnimation(n,e,!0))return;let r=!1;if(i.totalAnimations){let o=i.players.length?i.playersByQueriedElement.get(n):[];if(o&&o.length)r=!0;else{let s=n;for(;s=s.parentNode;)if(i.statesByElement.get(s)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(n),r)i.markElementAsRemoved(this.id,n,!1,e);else{let o=n[ri];(!o||o===TT)&&(i.afterFlush(()=>this.clearElementCache(n)),i.destroyInnerAnimations(n),i._onRemovalComplete(n,e))}}insertNode(n,e){Ln(n,this._hostClassName)}drainQueuedTransitions(n){let e=[];return this._queue.forEach(i=>{let r=i.player;if(r.destroyed)return;let o=i.element,s=this._elementListeners.get(o);s&&s.forEach(a=>{if(a.name==i.triggerName){let c=cm(o,i.triggerName,i.fromState.value,i.toState.value);c._data=n,am(i.player,a.phase,c,a.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):e.push(i)}),this._queue=[],e.sort((i,r)=>{let o=i.transition.ast.depCount,s=r.transition.ast.depCount;return o==0||s==0?o-s:this._engine.driver.containsElement(i.element,r.element)?1:-1})}destroy(n){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,n)}},zb=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(n,e)=>{};_onRemovalComplete(n,e){this.onRemovalComplete(n,e)}constructor(n,e,i){this.bodyNode=n,this.driver=e,this._normalizer=i}get queuedPlayers(){let n=[];return this._namespaceList.forEach(e=>{e.players.forEach(i=>{i.queued&&n.push(i)})}),n}createNamespace(n,e){let i=new Ub(n,e,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,e)?this._balanceNamespaceList(i,e):(this.newHostElements.set(e,i),this.collectEnterElement(e)),this._namespaceLookup[n]=i}_balanceNamespaceList(n,e){let i=this._namespaceList,r=this.namespacesByHostElement;if(i.length-1>=0){let s=!1,a=this.driver.getParentElement(e);for(;a;){let c=r.get(a);if(c){let l=i.indexOf(c);i.splice(l+1,0,n),s=!0;break}a=this.driver.getParentElement(a)}s||i.unshift(n)}else i.push(n);return r.set(e,n),n}register(n,e){let i=this._namespaceLookup[n];return i||(i=this.createNamespace(n,e)),i}registerTrigger(n,e,i){let r=this._namespaceLookup[n];r&&r.register(e,i)&&this.totalAnimations++}destroy(n,e){n&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let i=this._fetchNamespace(n);this.namespacesByHostElement.delete(i.hostElement);let r=this._namespaceList.indexOf(i);r>=0&&this._namespaceList.splice(r,1),i.destroy(e),delete this._namespaceLookup[n]}))}_fetchNamespace(n){return this._namespaceLookup[n]}fetchNamespacesByElement(n){let e=new Set,i=this.statesByElement.get(n);if(i){for(let r of i.values())if(r.namespaceId){let o=this._fetchNamespace(r.namespaceId);o&&e.add(o)}}return e}trigger(n,e,i,r){if(gm(e)){let o=this._fetchNamespace(n);if(o)return o.trigger(e,i,r),!0}return!1}insertNode(n,e,i,r){if(!gm(e))return;let o=e[ri];if(o&&o.setForRemoval){o.setForRemoval=!1,o.setForMove=!0;let s=this.collectedLeaveElements.indexOf(e);s>=0&&this.collectedLeaveElements.splice(s,1)}if(n){let s=this._fetchNamespace(n);s&&s.insertNode(e,i)}r&&this.collectEnterElement(e)}collectEnterElement(n){this.collectedEnterElements.push(n)}markElementAsDisabled(n,e){e?this.disabledNodes.has(n)||(this.disabledNodes.add(n),Ln(n,kb)):this.disabledNodes.has(n)&&(this.disabledNodes.delete(n),Pa(n,kb))}removeNode(n,e,i){if(gm(e)){let r=n?this._fetchNamespace(n):null;r?r.removeNode(e,i):this.markElementAsRemoved(n,e,!1,i);let o=this.namespacesByHostElement.get(e);o&&o.id!==n&&o.removeNode(e,i)}else this._onRemovalComplete(e,i)}markElementAsRemoved(n,e,i,r,o){this.collectedLeaveElements.push(e),e[ri]={namespaceId:n,setForRemoval:r,hasAnimation:i,removedBeforeQueried:!1,previousTriggersValues:o}}listen(n,e,i,r,o){return gm(e)?this._fetchNamespace(n).listen(e,i,r,o):()=>{}}_buildInstruction(n,e,i,r,o){return n.transition.build(this.driver,n.element,n.fromState.value,n.toState.value,i,r,n.fromState.options,n.toState.options,e,o)}destroyInnerAnimations(n){let e=this.driver.query(n,Hl,!0);e.forEach(i=>this.destroyActiveAnimationsForElement(i)),this.playersByQueriedElement.size!=0&&(e=this.driver.query(n,um,!0),e.forEach(i=>this.finishActiveQueriedAnimationOnElement(i)))}destroyActiveAnimationsForElement(n){let e=this.playersByElement.get(n);e&&e.forEach(i=>{i.queued?i.markedForDestroy=!0:i.destroy()})}finishActiveQueriedAnimationOnElement(n){let e=this.playersByQueriedElement.get(n);e&&e.forEach(i=>i.finish())}whenRenderingDone(){return new Promise(n=>{if(this.players.length)return ur(this.players).onDone(()=>n());n()})}processLeaveNode(n){let e=n[ri];if(e&&e.setForRemoval){if(n[ri]=TT,e.namespaceId){this.destroyInnerAnimations(n);let i=this._fetchNamespace(e.namespaceId);i&&i.clearElementCache(n)}this._onRemovalComplete(n,e.setForRemoval)}n.classList?.contains(kb)&&this.markElementAsDisabled(n,!1),this.driver.query(n,SU,!0).forEach(i=>{this.markElementAsDisabled(i,!1)})}flush(n=-1){let e=[];if(this.newHostElements.size&&(this.newHostElements.forEach((i,r)=>this._balanceNamespaceList(i,r)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let i=0;i<this.collectedEnterElements.length;i++){let r=this.collectedEnterElements[i];Ln(r,CU)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let i=[];try{e=this._flushAnimations(i,n)}finally{for(let r=0;r<i.length;r++)i[r]()}}else for(let i=0;i<this.collectedLeaveElements.length;i++){let r=this.collectedLeaveElements[i];this.processLeaveNode(r)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(i=>i()),this._flushFns=[],this._whenQuietFns.length){let i=this._whenQuietFns;this._whenQuietFns=[],e.length?ur(e).onDone(()=>{i.forEach(r=>r())}):i.forEach(r=>r())}}reportError(n){throw lT(n)}_flushAnimations(n,e){let i=new $l,r=[],o=new Map,s=[],a=new Map,c=new Map,l=new Map,d=new Set;this.disabledNodes.forEach(z=>{d.add(z);let ne=this.driver.query(z,wU,!0);for(let oe=0;oe<ne.length;oe++)d.add(ne[oe])});let f=this.bodyNode,h=Array.from(this.statesByElement.keys()),m=DT(h,this.collectedEnterElements),p=new Map,w=0;m.forEach((z,ne)=>{let oe=Eb+w++;p.set(ne,oe),z.forEach(Te=>Ln(Te,oe))});let E=[],I=new Set,k=new Set;for(let z=0;z<this.collectedLeaveElements.length;z++){let ne=this.collectedLeaveElements[z],oe=ne[ri];oe&&oe.setForRemoval&&(E.push(ne),I.add(ne),oe.hasAnimation?this.driver.query(ne,DU,!0).forEach(Te=>I.add(Te)):k.add(ne))}let Z=new Map,Re=DT(h,Array.from(I));Re.forEach((z,ne)=>{let oe=dm+w++;Z.set(ne,oe),z.forEach(Te=>Ln(Te,oe))}),n.push(()=>{m.forEach((z,ne)=>{let oe=p.get(ne);z.forEach(Te=>Pa(Te,oe))}),Re.forEach((z,ne)=>{let oe=Z.get(ne);z.forEach(Te=>Pa(Te,oe))}),E.forEach(z=>{this.processLeaveNode(z)})});let It=[],Fe=[];for(let z=this._namespaceList.length-1;z>=0;z--)this._namespaceList[z].drainQueuedTransitions(e).forEach(oe=>{let Te=oe.player,Tt=oe.element;if(It.push(Te),this.collectedEnterElements.length){let Bt=Tt[ri];if(Bt&&Bt.setForMove){if(Bt.previousTriggersValues&&Bt.previousTriggersValues.has(oe.triggerName)){let no=Bt.previousTriggersValues.get(oe.triggerName),En=this.statesByElement.get(oe.element);if(En&&En.has(oe.triggerName)){let Kl=En.get(oe.triggerName);Kl.value=no,En.set(oe.triggerName,Kl)}}Te.destroy();return}}let oi=!f||!this.driver.containsElement(f,Tt),fn=Z.get(Tt),hr=p.get(Tt),rt=this._buildInstruction(oe,i,hr,fn,oi);if(rt.errors&&rt.errors.length){Fe.push(rt);return}if(oi){Te.onStart(()=>to(Tt,rt.fromStyles)),Te.onDestroy(()=>ii(Tt,rt.toStyles)),r.push(Te);return}if(oe.isFallbackTransition){Te.onStart(()=>to(Tt,rt.fromStyles)),Te.onDestroy(()=>ii(Tt,rt.toStyles)),r.push(Te);return}let Qb=[];rt.timelines.forEach(Bt=>{Bt.stretchStartingKeyframe=!0,this.disabledNodes.has(Bt.element)||Qb.push(Bt)}),rt.timelines=Qb,i.append(Tt,rt.timelines);let UT={instruction:rt,player:Te,element:Tt};s.push(UT),rt.queriedElements.forEach(Bt=>dn(a,Bt,[]).push(Te)),rt.preStyleProps.forEach((Bt,no)=>{if(Bt.size){let En=c.get(no);En||c.set(no,En=new Set),Bt.forEach((Kl,Nm)=>En.add(Nm))}}),rt.postStyleProps.forEach((Bt,no)=>{let En=l.get(no);En||l.set(no,En=new Set),Bt.forEach((Kl,Nm)=>En.add(Nm))})});if(Fe.length){let z=[];Fe.forEach(ne=>{z.push(dT(ne.triggerName,ne.errors))}),It.forEach(ne=>ne.destroy()),this.reportError(z)}let Xe=new Map,it=new Map;s.forEach(z=>{let ne=z.element;i.has(ne)&&(it.set(ne,ne),this._beforeAnimationBuild(z.player.namespaceId,z.instruction,Xe))}),r.forEach(z=>{let ne=z.element;this._getPreviousPlayers(ne,!1,z.namespaceId,z.triggerName,null).forEach(Te=>{dn(Xe,ne,[]).push(Te),Te.destroy()})});let Mt=E.filter(z=>xT(z,c,l)),fr=new Map;CT(fr,this.driver,k,l,ni).forEach(z=>{xT(z,c,l)&&Mt.push(z)});let jn=new Map;m.forEach((z,ne)=>{CT(jn,this.driver,new Set(z),c,Vl)}),Mt.forEach(z=>{let ne=fr.get(z),oe=jn.get(z);fr.set(z,new Map([...ne?.entries()??[],...oe?.entries()??[]]))});let hs=[],Kb=[],Yb={};s.forEach(z=>{let{element:ne,player:oe,instruction:Te}=z;if(i.has(ne)){if(d.has(ne)){oe.onDestroy(()=>ii(ne,Te.toStyles)),oe.disabled=!0,oe.overrideTotalTime(Te.totalTime),r.push(oe);return}let Tt=Yb;if(it.size>1){let fn=ne,hr=[];for(;fn=fn.parentNode;){let rt=it.get(fn);if(rt){Tt=rt;break}hr.push(fn)}hr.forEach(rt=>it.set(rt,Tt))}let oi=this._buildAnimation(oe.namespaceId,Te,Xe,o,jn,fr);if(oe.setRealPlayer(oi),Tt===Yb)hs.push(oe);else{let fn=this.playersByElement.get(Tt);fn&&fn.length&&(oe.parentPlayer=ur(fn)),r.push(oe)}}else to(ne,Te.fromStyles),oe.onDestroy(()=>ii(ne,Te.toStyles)),Kb.push(oe),d.has(ne)&&r.push(oe)}),Kb.forEach(z=>{let ne=o.get(z.element);if(ne&&ne.length){let oe=ur(ne);z.setRealPlayer(oe)}}),r.forEach(z=>{z.parentPlayer?z.syncPlayerEvents(z.parentPlayer):z.destroy()});for(let z=0;z<E.length;z++){let ne=E[z],oe=ne[ri];if(Pa(ne,dm),oe&&oe.hasAnimation)continue;let Te=[];if(a.size){let oi=a.get(ne);oi&&oi.length&&Te.push(...oi);let fn=this.driver.query(ne,um,!0);for(let hr=0;hr<fn.length;hr++){let rt=a.get(fn[hr]);rt&&rt.length&&Te.push(...rt)}}let Tt=Te.filter(oi=>!oi.destroyed);Tt.length?TU(this,ne,Tt):this.processLeaveNode(ne)}return E.length=0,hs.forEach(z=>{this.players.push(z),z.onDone(()=>{z.destroy();let ne=this.players.indexOf(z);this.players.splice(ne,1)}),z.play()}),hs}afterFlush(n){this._flushFns.push(n)}afterFlushAnimationsDone(n){this._whenQuietFns.push(n)}_getPreviousPlayers(n,e,i,r,o){let s=[];if(e){let a=this.playersByQueriedElement.get(n);a&&(s=a)}else{let a=this.playersByElement.get(n);if(a){let c=!o||o==zl;a.forEach(l=>{l.queued||!c&&l.triggerName!=r||s.push(l)})}}return(i||r)&&(s=s.filter(a=>!(i&&i!=a.namespaceId||r&&r!=a.triggerName))),s}_beforeAnimationBuild(n,e,i){let r=e.triggerName,o=e.element,s=e.isRemovalTransition?void 0:n,a=e.isRemovalTransition?void 0:r;for(let c of e.timelines){let l=c.element,d=l!==o,f=dn(i,l,[]);this._getPreviousPlayers(l,d,s,a,e.toState).forEach(m=>{let p=m.getRealPlayer();p.beforeDestroy&&p.beforeDestroy(),m.destroy(),f.push(m)})}to(o,e.fromStyles)}_buildAnimation(n,e,i,r,o,s){let a=e.triggerName,c=e.element,l=[],d=new Set,f=new Set,h=e.timelines.map(p=>{let w=p.element;d.add(w);let E=w[ri];if(E&&E.removedBeforeQueried)return new dr(p.duration,p.delay);let I=w!==c,k=kU((i.get(w)||xU).map(Xe=>Xe.getRealPlayer())).filter(Xe=>{let it=Xe;return it.element?it.element===w:!1}),Z=o.get(w),Re=s.get(w),It=wb(this._normalizer,p.keyframes,Z,Re),Fe=this._buildPlayer(p,It,k);if(p.subTimeline&&r&&f.add(w),I){let Xe=new Gl(n,a,w);Xe.setRealPlayer(Fe),l.push(Xe)}return Fe});l.forEach(p=>{dn(this.playersByQueriedElement,p.element,[]).push(p),p.onDone(()=>NU(this.playersByQueriedElement,p.element,p))}),d.forEach(p=>Ln(p,Nb));let m=ur(h);return m.onDestroy(()=>{d.forEach(p=>Pa(p,Nb)),ii(c,e.toStyles)}),f.forEach(p=>{dn(r,p,[]).push(m)}),m}_buildPlayer(n,e,i){return e.length>0?this.driver.animate(n.element,e,n.duration,n.delay,n.easing,i):new dr(n.duration,n.delay)}},Gl=class{namespaceId;triggerName;element;_player=new dr;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(n,e,i){this.namespaceId=n,this.triggerName=e,this.element=i}setRealPlayer(n){this._containsRealPlayer||(this._player=n,this._queuedCallbacks.forEach((e,i)=>{e.forEach(r=>am(n,i,void 0,r))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(n.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(n){this.totalTime=n}syncPlayerEvents(n){let e=this._player;e.triggerCallback&&n.onStart(()=>e.triggerCallback("start")),n.onDone(()=>this.finish()),n.onDestroy(()=>this.destroy())}_queueEvent(n,e){dn(this._queuedCallbacks,n,[]).push(e)}onDone(n){this.queued&&this._queueEvent("done",n),this._player.onDone(n)}onStart(n){this.queued&&this._queueEvent("start",n),this._player.onStart(n)}onDestroy(n){this.queued&&this._queueEvent("destroy",n),this._player.onDestroy(n)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(n){this.queued||this._player.setPosition(n)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(n){let e=this._player;e.triggerCallback&&e.triggerCallback(n)}};function NU(t,n,e){let i=t.get(n);if(i){if(i.length){let r=i.indexOf(e);i.splice(r,1)}i.length==0&&t.delete(n)}return i}function IU(t){return t??null}function gm(t){return t&&t.nodeType===1}function MU(t){return t=="start"||t=="done"}function ST(t,n){let e=t.style.display;return t.style.display=n??"none",e}function CT(t,n,e,i,r){let o=[];e.forEach(c=>o.push(ST(c)));let s=[];i.forEach((c,l)=>{let d=new Map;c.forEach(f=>{let h=n.computeStyle(l,f,r);d.set(f,h),(!h||h.length==0)&&(l[ri]=EU,s.push(l))}),t.set(l,d)});let a=0;return e.forEach(c=>ST(c,o[a++])),s}function DT(t,n){let e=new Map;if(t.forEach(a=>e.set(a,[])),n.length==0)return e;let i=1,r=new Set(n),o=new Map;function s(a){if(!a)return i;let c=o.get(a);if(c)return c;let l=a.parentNode;return e.has(l)?c=l:r.has(l)?c=i:c=s(l),o.set(a,c),c}return n.forEach(a=>{let c=s(a);c!==i&&e.get(c).push(a)}),e}function Ln(t,n){t.classList?.add(n)}function Pa(t,n){t.classList?.remove(n)}function TU(t,n,e){ur(e).onDone(()=>t.processLeaveNode(n))}function kU(t){let n=[];return kT(t,n),n}function kT(t,n){for(let e=0;e<t.length;e++){let i=t[e];i instanceof Aa?kT(i.players,n):n.push(i)}}function RU(t,n){let e=Object.keys(t),i=Object.keys(n);if(e.length!=i.length)return!1;for(let r=0;r<e.length;r++){let o=e[r];if(!Object.hasOwn(n,o)||t[o]!==n[o])return!1}return!0}function xT(t,n,e){let i=e.get(t);if(!i)return!1;let r=n.get(t);return r?i.forEach(o=>r.add(o)):n.set(t,i),e.delete(t),!0}var La=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(n,e)=>{};constructor(n,e,i){this._driver=e,this._normalizer=i,this._transitionEngine=new zb(n.body,e,i),this._timelineEngine=new Hb(n.body,e,i),this._transitionEngine.onRemovalComplete=(r,o)=>this.onRemovalComplete(r,o)}registerTrigger(n,e,i,r,o){let s=n+"-"+r,a=this._triggerCache[s];if(!a){let c=[],l=[],d=NT(this._driver,o,c,l);if(c.length)throw eT(r,c);a=yU(r,d,this._normalizer),this._triggerCache[s]=a}this._transitionEngine.registerTrigger(e,r,a)}register(n,e){this._transitionEngine.register(n,e)}destroy(n,e){this._transitionEngine.destroy(n,e)}onInsert(n,e,i,r){this._transitionEngine.insertNode(n,e,i,r)}onRemove(n,e,i){this._transitionEngine.removeNode(n,e,i)}disableAnimations(n,e){this._transitionEngine.markElementAsDisabled(n,e)}process(n,e,i,r){if(i.charAt(0)=="@"){let[o,s]=Sb(i),a=r;this._timelineEngine.command(o,e,s,a)}else this._transitionEngine.trigger(n,e,i,r)}listen(n,e,i,r,o){if(i.charAt(0)=="@"){let[s,a]=Sb(i);return this._timelineEngine.listen(s,e,a,o)}return this._transitionEngine.listen(n,e,i,r,o)}flush(n=-1){this._transitionEngine.flush(n)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(n){this._transitionEngine.afterFlushAnimationsDone(n)}};function AU(t,n){let e=null,i=null;return Array.isArray(n)&&n.length?(e=Ab(n[0]),n.length>1&&(i=Ab(n[n.length-1]))):n instanceof Map&&(e=Ab(n)),e||i?new OU(t,e,i):null}var OU=(()=>{class t{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(e,i,r){this._element=e,this._startStyles=i,this._endStyles=r;let o=t.initialStylesByElement.get(e);o||t.initialStylesByElement.set(e,o=new Map),this._initialStyles=o}start(){this._state<1&&(this._startStyles&&ii(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(ii(this._element,this._initialStyles),this._endStyles&&(ii(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(t.initialStylesByElement.delete(this._element),this._startStyles&&(to(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(to(this._element,this._endStyles),this._endStyles=null),ii(this._element,this._initialStyles),this._state=3)}}return t})();function Ab(t){let n=null;return t.forEach((e,i)=>{FU(i)&&(n=n||new Map,n.set(i,e))}),n}function FU(t){return t==="display"||t==="position"}var Cm=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(n,e,i,r){this.element=n,this.keyframes=e,this.options=i,this._specialStyles=r,this._duration=i.duration,this._delay=i.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let n=this.keyframes,e=this._triggerWebAnimation(this.element,n,this.options);if(!e)return this._onFinish(),null;this.domPlayer=e,this._finalKeyframe=n.length?n[n.length-1]:new Map;let i=()=>this._onFinish();return e.addEventListener("finish",i),this.onDestroy(()=>{e.removeEventListener("finish",i)}),e}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(n){let e=[];return n.forEach(i=>{e.push(Object.fromEntries(i))}),e}_triggerWebAnimation(n,e,i){let r=this._convertKeyframesToObject(e);try{return n.animate(r,i)}catch(o){return null}}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}play(){let n=this._buildPlayer();n&&(this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),n.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}setPosition(n){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=n*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let n=new Map;this.hasStarted()&&this._finalKeyframe.forEach((i,r)=>{r!=="offset"&&n.set(r,this._finished?i:hm(this.element,r))}),this.currentSnapshot=n}triggerCallback(n){let e=n==="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},Dm=class{validateStyleProperty(n){return!0}validateAnimatableStyleProperty(n){return!0}containsElement(n,e){return Cb(n,e)}getParentElement(n){return lm(n)}query(n,e,i){return Db(n,e,i)}computeStyle(n,e,i){return hm(n,e)}animate(n,e,i,r,o,s=[]){let a=r==0?"both":"forwards",c={duration:i,delay:r,fill:a};o&&(c.easing=o);let l=new Map,d=s.filter(m=>m instanceof Cm);mT(i,r)&&d.forEach(m=>{m.currentSnapshot.forEach((p,w)=>l.set(w,p))});let f=fT(e).map(m=>new Map(m));f=pT(n,f,l);let h=AU(n,f);return new Cm(n,f,c,h)}};var vm="@",RT="@.disabled",xm=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(n,e,i,r){this.namespaceId=n,this.delegate=e,this.engine=i,this._onDestroy=r}get data(){return this.delegate.data}destroyNode(n){this.delegate.destroyNode?.(n)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}appendChild(n,e){this.delegate.appendChild(n,e),this.engine.onInsert(this.namespaceId,e,n,!1)}insertBefore(n,e,i,r=!0){this.delegate.insertBefore(n,e,i),this.engine.onInsert(this.namespaceId,e,n,r)}removeChild(n,e,i,r){if(r){this.delegate.removeChild(n,e,i,r);return}this.parentNode(e)&&this.engine.onRemove(this.namespaceId,e,this.delegate)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,i,r){this.delegate.setAttribute(n,e,i,r)}removeAttribute(n,e,i){this.delegate.removeAttribute(n,e,i)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,i,r){this.delegate.setStyle(n,e,i,r)}removeStyle(n,e,i){this.delegate.removeStyle(n,e,i)}setProperty(n,e,i){e.charAt(0)==vm&&e==RT?this.disableAnimations(n,!!i):this.delegate.setProperty(n,e,i)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,i,r){return this.delegate.listen(n,e,i,r)}disableAnimations(n,e){this.engine.disableAnimations(n,e)}},$b=class extends xm{factory;constructor(n,e,i,r,o){super(e,i,r,o),this.factory=n,this.namespaceId=e}setProperty(n,e,i){e.charAt(0)==vm?e.charAt(1)=="."&&e==RT?(i=i===void 0?!0:!!i,this.disableAnimations(n,i)):this.engine.process(this.namespaceId,n,e.slice(1),i):this.delegate.setProperty(n,e,i)}listen(n,e,i,r){if(e.charAt(0)==vm){let o=PU(n),s=e.slice(1),a="";return s.charAt(0)!=vm&&([s,a]=LU(s)),this.engine.listen(this.namespaceId,o,s,a,c=>{let l=c._data||-1;this.factory.scheduleListenerCallback(l,i,c)})}return this.delegate.listen(n,e,i,r)}};function PU(t){switch(t){case"body":return document.body;case"document":return document;case"window":return window;default:return t}}function LU(t){let n=t.indexOf("."),e=t.substring(0,n),i=t.slice(n+1);return[e,i]}var Em=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(n,e,i){this.delegate=n,this.engine=e,this._zone=i,e.onRemovalComplete=(r,o)=>{o?.removeChild(null,r)}}createRenderer(n,e){let r=this.delegate.createRenderer(n,e);if(!n||!e?.data?.animation){let l=this._rendererCache,d=l.get(r);if(!d){let f=()=>l.delete(r);d=new xm("",r,this.engine,f),l.set(r,d)}return d}let o=e.id,s=e.id+"-"+this._currentId;this._currentId++,this.engine.register(s,n);let a=l=>{Array.isArray(l)?l.forEach(a):this.engine.registerTrigger(o,s,n,l.name,l)};return e.data.animation.forEach(a),new $b(this,s,r,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(n,e,i){if(n>=0&&n<this._microtaskId){this._zone.run(()=>e(i));return}let r=this._animationCallbacksBuffer;r.length==0&&queueMicrotask(()=>{this._zone.run(()=>{r.forEach(o=>{let[s,a]=o;s(a)}),this._animationCallbacksBuffer=[]})}),r.push([e,i])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(n){this.engine.flush(),this.delegate.componentReplaced?.(n)}};var VU=(()=>{class t extends La{constructor(e,i,r){super(e,i,r)}ngOnDestroy(){this.flush()}static \u0275fac=function(i){return new(i||t)(M(Q),M(ds),M(us))};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();function BU(){return new ym}function HU(){return new Em(u(Kc),u(La),u(O))}var OT=[{provide:us,useFactory:BU},{provide:La,useClass:VU},{provide:ct,useFactory:HU}],UU=[{provide:ds,useClass:qb},{provide:kr,useValue:"NoopAnimations"},...OT],AT=[{provide:ds,useFactory:()=>new Dm},{provide:kr,useFactory:()=>"BrowserAnimations"},...OT],FT=(()=>{class t{static withConfig(e){return{ngModule:t,providers:e.disableAnimations?UU:AT}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({providers:AT,imports:[Qc]})}return t})();var Wb="Service workers are disabled or not supported by this browser",ja=class{serviceWorker;worker;registration;events;constructor(n,e){if(this.serviceWorker=n,!n)this.worker=this.events=this.registration=new X(i=>i.error(new S(5601,!1)));else{let i=null,r=new N;this.worker=new X(l=>(i!==null&&l.next(i),r.subscribe(d=>l.next(d))));let o=()=>{let{controller:l}=n;l!==null&&(i=l,r.next(i))};n.addEventListener("controllerchange",o),o(),this.registration=this.worker.pipe(Qe(()=>n.getRegistration().then(l=>{if(!l)throw new S(5601,!1);return l})));let s=new N;this.events=s.asObservable();let a=l=>{let{data:d}=l;d?.type&&s.next(d)};n.addEventListener("message",a),e?.get(Ct,null,{optional:!0})?.onDestroy(()=>{n.removeEventListener("controllerchange",o),n.removeEventListener("message",a)})}}postMessage(n,e){return new Promise(i=>{this.worker.pipe(mt(1)).subscribe(r=>{r.postMessage(_({action:n},e)),i()})})}postMessageWithOperation(n,e,i){let r=this.waitForOperationCompleted(i),o=this.postMessage(n,e);return Promise.all([o,r]).then(([,s])=>s)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(n){let e;return typeof n=="string"?e=i=>i.type===n:e=i=>n.includes(i.type),this.events.pipe(Ne(e))}nextEventOfType(n){return this.eventsOfType(n).pipe(mt(1))}waitForOperationCompleted(n){return new Promise((e,i)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(Ne(r=>r.nonce===n),mt(1),le(r=>{if(r.result!==void 0)return r.result;throw new Error(r.error)})).subscribe({next:e,error:i})})}get isEnabled(){return!!this.serviceWorker}},LT=(()=>{class t{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new N;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=zi,this.notificationClicks=zi,this.notificationCloses=zi,this.pushSubscriptionChanges=zi,this.subscription=zi;return}this.messages=this.sw.eventsOfType("PUSH").pipe(le(r=>r.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(le(r=>r.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(le(r=>r.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(le(r=>r.data)),this.pushManager=this.sw.registration.pipe(le(r=>r.pushManager));let i=this.pushManager.pipe(Qe(r=>r.getSubscription()));this.subscription=new X(r=>{let o=i.subscribe(r),s=this.subscriptionChanges.subscribe(r);return()=>{o.unsubscribe(),s.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(Wb));let i={userVisibleOnly:!0},r=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(r.length));for(let s=0;s<r.length;s++)o[s]=r.charCodeAt(s);return i.applicationServerKey=o,new Promise((s,a)=>{this.pushManager.pipe(Qe(c=>c.subscribe(i)),mt(1)).subscribe({next:c=>{this.subscriptionChanges.next(c),s(c)},error:a})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(Wb));let e=i=>{if(i===null)throw new S(5602,!1);return i.unsubscribe().then(r=>{if(!r)throw new S(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((i,r)=>{this.subscription.pipe(mt(1),Qe(e)).subscribe({next:i,error:r})})}decodeBase64(e){return atob(e)}static \u0275fac=function(i){return new(i||t)(M(ja))};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),jT=(()=>{class t{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=zi,this.unrecoverable=zi;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Wb));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new S(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(i){return new(i||t)(M(ja))};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),VT=new y("");function zU(){let t=u(Wl);if(!("serviceWorker"in navigator&&t.enabled!==!1))return;let n=u(VT),e=u(O),i=u(Ct);e.runOutsideAngular(()=>{let r=navigator.serviceWorker,o=()=>r.controller?.postMessage({action:"INITIALIZE"});r.addEventListener("controllerchange",o),i.onDestroy(()=>{r.removeEventListener("controllerchange",o)})}),e.runOutsideAngular(()=>{let r,{registrationStrategy:o}=t;if(typeof o=="function")r=new Promise(s=>o().subscribe(()=>s()));else{let[s,...a]=(o||"registerWhenStable:30000").split(":");switch(s){case"registerImmediately":r=Promise.resolve();break;case"registerWithDelay":r=PT(+a[0]||0);break;case"registerWhenStable":r=Promise.race([i.whenStable(),PT(+a[0])]);break;default:throw new S(5600,!1)}}r.then(()=>{i.destroyed||navigator.serviceWorker.register(n,{scope:t.scope,updateViaCache:t.updateViaCache,type:t.type}).catch(s=>console.error(on(5604,!1)))})})}function PT(t){return new Promise(n=>setTimeout(n,t))}function $U(){let t=u(Wl),n=u(de),e=!0;return new ja(e&&t.enabled!==!1?navigator.serviceWorker:void 0,n)}var Wl=class{enabled;updateViaCache;type;scope;registrationStrategy};function qU(t,n={}){return Bn([LT,jT,{provide:VT,useValue:t},{provide:Wl,useValue:n},{provide:ja,useFactory:$U},Ys(zU)])}var BT=(()=>{class t{static register(e,i={}){return{ngModule:t,providers:[qU(e,i)]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({providers:[LT,jT]})}return t})();var HT=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=F({type:t,bootstrap:[PM]})}static{this.\u0275inj=A({imports:[LN,WI,FM,$N,rM,xa,pI,lr,wI,Ia,$I,Yh,Qc,Ey,ba,mM,FT,BT.register("ngsw-worker.js",{enabled:!qD(),registrationStrategy:"registerWhenStable:30000"})]})}}return t})();_y().bootstrapModule(HT).catch(t=>console.error(t));
