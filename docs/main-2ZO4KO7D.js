var PT=Object.defineProperty,LT=Object.defineProperties;var jT=Object.getOwnPropertyDescriptors;var jl=Object.getOwnPropertySymbols;var qb=Object.prototype.hasOwnProperty,Gb=Object.prototype.propertyIsEnumerable;var $b=(t,n,e)=>n in t?PT(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,y=(t,n)=>{for(var e in n||={})qb.call(n,e)&&$b(t,e,n[e]);if(jl)for(var e of jl(n))Gb.call(n,e)&&$b(t,e,n[e]);return t},W=(t,n)=>LT(t,jT(n));var Cm=(t,n)=>{var e={};for(var i in t)qb.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&jl)for(var i of jl(t))n.indexOf(i)<0&&Gb.call(t,i)&&(e[i]=t[i]);return e};var Te=(t,n,e)=>new Promise((i,r)=>{var o=c=>{try{a(e.next(c))}catch(l){r(l)}},s=c=>{try{a(e.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(o,s);a((e=e.apply(t,n)).next())});var Wt=null,Vl=!1,Gr=1,VT=null,dt=Symbol("SIGNAL");function ie(t){let n=Wt;return Wt=t,n}function Bl(){return Wt}var ir={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function rr(t){if(Vl)throw new Error("");if(Wt===null)return;Wt.consumerOnSignalRead(t);let n=Wt.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=Wt.recomputing;if(i&&(e=n!==void 0?n.nextProducer:Wt.producers,e!==void 0&&e.producer===t)){Wt.producersTail=e,e.lastReadVersion=t.version,e.knownValidAtEpoch=Gr;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===Wt&&(!i||r.knownValidAtEpoch===Gr))return;let o=cs(Wt),s={producer:t,consumer:Wt,nextProducer:e,prevConsumer:void 0,knownValidAtEpoch:Gr,lastReadVersion:t.version,nextConsumer:void 0};Wt.producersTail=s,n!==void 0?n.nextProducer=s:Wt.producers=s,o&&Qb(t,s)}function Wb(){Gr++}function Yr(t){if(!(cs(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Gr)){if(!t.producerMustRecompute(t)&&!as(t)){ss(t);return}t.producerRecomputeValue(t),ss(t)}}function Dm(t){if(t.consumers===void 0)return;let n=Vl;Vl=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||BT(i)}}finally{Vl=n}}function xm(){return Wt?.consumerAllowSignalWrites!==!1}function BT(t){t.dirty=!0,Dm(t),t.consumerMarkedDirty?.(t)}function ss(t){t.dirty=!1,t.lastCleanEpoch=Gr}function Ri(t){return t&&Kb(t),ie(t)}function Kb(t){if(t.producersTail?.knownValidAtEpoch===Gr){let n=t.producers;for(;n!==void 0;)n.knownValidAtEpoch=null,n=n.nextProducer}t.producersTail=void 0,t.recomputing=!0}function or(t,n){ie(n),t&&Yb(t)}function Yb(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(cs(t))do e=Em(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function as(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(Yr(e),i!==e.version))return!0}return!1}function sr(t){if(cs(t)){let n=t.producers;for(;n!==void 0;)n=Em(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function Qb(t,n){let e=t.consumersTail,i=cs(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)Qb(r.producer,r)}function Em(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!cs(n)){let o=n.producers;for(;o!==void 0;)o=Em(o)}return e}function cs(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Ta(t){VT?.(t)}function ka(t,n){return Object.is(t,n)}function Ra(t,n){let e=Object.create(HT);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(Yr(e),rr(e),e.value===ri)throw e.error;return e.value};return i[dt]=e,Ta(e),i}var Wr=Symbol("UNSET"),Kr=Symbol("COMPUTING"),ri=Symbol("ERRORED"),HT=W(y({},ir),{value:Wr,dirty:!0,error:null,equal:ka,kind:"computed",producerMustRecompute(t){return t.value===Wr||t.value===Kr},producerRecomputeValue(t){if(t.value===Kr)throw new Error("");let n=t.value;t.value=Kr;let e=Ri(t),i,r=!1;try{i=t.computation(),ie(null),r=n!==Wr&&n!==ri&&i!==ri&&t.equal(n,i)}catch(o){i=ri,t.error=o}finally{or(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function UT(){throw new Error}var Zb=UT;function Xb(t){Zb(t)}function Nm(t){Zb=t}var zT=null;function Im(t,n){let e=Object.create(Aa);e.value=t,n!==void 0&&(e.equal=n);let i=()=>Jb(e);return i[dt]=e,Ta(e),[i,s=>Qr(e,s),s=>Hl(e,s)]}function Jb(t){return rr(t),t.value}function Qr(t,n){xm()||Xb(t),t.equal(t.value,n)||(t.value=n,$T(t))}function Hl(t,n){xm()||Xb(t),Qr(t,n(t.value))}var Aa=W(y({},ir),{equal:ka,value:void 0,kind:"signal"});function $T(t){t.version++,Wb(),Dm(t),zT?.(t)}var Mm=W(y({},ir),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Tm(t){if(t.dirty=!1,t.version>0&&!as(t))return;t.version++;let n=Ri(t);try{t.cleanup(),t.fn()}finally{or(t,n)}}var km;function Ul(){return km}function oi(t){let n=km;return km=t,n}var ew=Symbol("NotFound");function ls(t){return t===ew||t?.name==="\u0275NotFound"}function Rm(t,n,e){let i=Object.create(qT);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(Yr(i),rr(i),i.value===ri)throw i.error;return i.value};return o[dt]=i,Ta(i),o}function Am(t,n){Yr(t),Qr(t,n),ss(t)}function tw(t,n){if(Yr(t),t.value===ri)throw t.error;Hl(t,n),ss(t)}var qT=W(y({},ir),{value:Wr,dirty:!0,error:null,equal:ka,kind:"linkedSignal",producerMustRecompute(t){return t.value===Wr||t.value===Kr},producerRecomputeValue(t){if(t.value===Kr)throw new Error("");let n=t.value;t.value=Kr;let e=Ri(t),i,r=!1;try{let o=t.source(),s=n!==Wr&&n!==ri,a=s?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,a),t.sourceValue=o,ie(null),r=s&&i!==ri&&t.equal(n,i)}catch(o){i=ri,t.error=o}finally{or(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function nw(t){let n=ie(null);try{return t()}finally{ie(n)}}function me(t){return typeof t=="function"}function ds(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var zl=ds(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Zr(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var ue=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(me(i))try{i()}catch(o){n=o instanceof zl?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{iw(o)}catch(s){n=n??[],s instanceof zl?n=[...n,...s.errors]:n.push(s)}}if(n)throw new zl(n)}}add(n){var e;if(n&&n!==this)if(this.closed)iw(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Zr(e,n)}remove(n){let{_finalizers:e}=this;e&&Zr(e,n),n instanceof t&&n._removeParent(this)}};ue.EMPTY=(()=>{let t=new ue;return t.closed=!0,t})();var Om=ue.EMPTY;function $l(t){return t instanceof ue||t&&"closed"in t&&me(t.remove)&&me(t.add)&&me(t.unsubscribe)}function iw(t){me(t)?t():t.unsubscribe()}var Pn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var us={setTimeout(t,n,...e){let{delegate:i}=us;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=us;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function ql(t){us.setTimeout(()=>{let{onUnhandledError:n}=Pn;if(n)n(t);else throw t})}function Xr(){}var rw=Fm("C",void 0,void 0);function ow(t){return Fm("E",void 0,t)}function sw(t){return Fm("N",t,void 0)}function Fm(t,n,e){return{kind:t,value:n,error:e}}var Jr=null;function fs(t){if(Pn.useDeprecatedSynchronousErrorHandling){let n=!Jr;if(n&&(Jr={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=Jr;if(Jr=null,e)throw i}}else t()}function aw(t){Pn.useDeprecatedSynchronousErrorHandling&&Jr&&(Jr.errorThrown=!0,Jr.error=t)}var eo=class extends ue{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,$l(n)&&n.add(this)):this.destination=KT}static create(n,e,i){return new Ai(n,e,i)}next(n){this.isStopped?Lm(sw(n),this):this._next(n)}error(n){this.isStopped?Lm(ow(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Lm(rw,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},GT=Function.prototype.bind;function Pm(t,n){return GT.call(t,n)}var jm=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){Gl(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){Gl(i)}else Gl(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){Gl(e)}}},Ai=class extends eo{constructor(n,e,i){super();let r;if(me(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&Pn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&Pm(n.next,o),error:n.error&&Pm(n.error,o),complete:n.complete&&Pm(n.complete,o)}):r=n}this.destination=new jm(r)}};function Gl(t){Pn.useDeprecatedSynchronousErrorHandling?aw(t):ql(t)}function WT(t){throw t}function Lm(t,n){let{onStoppedNotification:e}=Pn;e&&us.setTimeout(()=>e(t,n))}var KT={closed:!0,next:Xr,error:WT,complete:Xr};var hs=typeof Symbol=="function"&&Symbol.observable||"@@observable";function dn(t){return t}function Wl(...t){return Vm(t)}function Vm(t){return t.length===0?dn:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var Z=class t{constructor(n){n&&(this._subscribe=n)}lift(n){let e=new t;return e.source=this,e.operator=n,e}subscribe(n,e,i){let r=QT(n)?n:new Ai(n,e,i);return fs(()=>{let{operator:o,source:s}=this;r.add(o?o.call(r,s):s?this._subscribe(r):this._trySubscribe(r))}),r}_trySubscribe(n){try{return this._subscribe(n)}catch(e){n.error(e)}}forEach(n,e){return e=cw(e),new e((i,r)=>{let o=new Ai({next:s=>{try{n(s)}catch(a){r(a),o.unsubscribe()}},error:r,complete:i});this.subscribe(o)})}_subscribe(n){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(n)}[hs](){return this}pipe(...n){return Vm(n)(this)}toPromise(n){return n=cw(n),new n((e,i)=>{let r;this.subscribe(o=>r=o,o=>i(o),()=>e(r))})}};Z.create=t=>new Z(t);function cw(t){var n;return(n=t??Pn.Promise)!==null&&n!==void 0?n:Promise}function YT(t){return t&&me(t.next)&&me(t.error)&&me(t.complete)}function QT(t){return t&&t instanceof eo||YT(t)&&$l(t)}function Bm(t){return me(t?.lift)}function ye(t){return n=>{if(Bm(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function pe(t,n,e,i,r){return new Hm(t,n,e,i,r)}var Hm=class extends eo{constructor(n,e,i,r,o,s){super(n),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=e?function(a){try{e(a)}catch(c){n.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){n.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){n.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};function lw(){return ye((t,n)=>{let e=null;t._refCount++;let i=pe(n,void 0,void 0,void 0,()=>{if(!t||t._refCount<=0||0<--t._refCount){e=null;return}let r=t._connection,o=e;e=null,r&&(!o||r===o)&&r.unsubscribe(),n.unsubscribe()});t.subscribe(i),i.closed||(e=t.connect())})}var Oa=class extends Z{constructor(n,e){super(),this.source=n,this.subjectFactory=e,this._subject=null,this._refCount=0,this._connection=null,Bm(n)&&(this.lift=n.lift)}_subscribe(n){return this.getSubject().subscribe(n)}getSubject(){let n=this._subject;return(!n||n.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:n}=this;this._subject=this._connection=null,n?.unsubscribe()}connect(){let n=this._connection;if(!n){n=this._connection=new ue;let e=this.getSubject();n.add(this.source.subscribe(pe(e,void 0,()=>{this._teardown(),e.complete()},i=>{this._teardown(),e.error(i)},()=>this._teardown()))),n.closed&&(this._connection=null,n=ue.EMPTY)}return n}refCount(){return lw()(this)}};var ms={schedule(t){let n=requestAnimationFrame,e=cancelAnimationFrame,{delegate:i}=ms;i&&(n=i.requestAnimationFrame,e=i.cancelAnimationFrame);let r=n(o=>{e=void 0,t(o)});return new ue(()=>e?.(r))},requestAnimationFrame(...t){let{delegate:n}=ms;return(n?.requestAnimationFrame||requestAnimationFrame)(...t)},cancelAnimationFrame(...t){let{delegate:n}=ms;return(n?.cancelAnimationFrame||cancelAnimationFrame)(...t)},delegate:void 0};var dw=ds(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var N=class extends Z{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let e=new Kl(this,this);return e.operator=n,e}_throwIfClosed(){if(this.closed)throw new dw}next(n){fs(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let e of this.currentObservers)e.next(n)}})}error(n){fs(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:e}=this;for(;e.length;)e.shift().error(n)}})}complete(){fs(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:e,isStopped:i,observers:r}=this;return e||i?Om:(this.currentObservers=null,r.push(n),new ue(()=>{this.currentObservers=null,Zr(r,n)}))}_checkFinalizedStatuses(n){let{hasError:e,thrownError:i,isStopped:r}=this;e?n.error(i):r&&n.complete()}asObservable(){let n=new Z;return n.source=this,n}};N.create=(t,n)=>new Kl(t,n);var Kl=class extends N{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Om}};var ut=class extends N{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var Fa={now(){return(Fa.delegate||Date).now()},delegate:void 0};var Pa=class extends N{constructor(n=1/0,e=1/0,i=Fa){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:s}=this;e||(i.push(n),!r&&i.push(o.now()+s)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let s=0;s<o.length&&!n.closed;s+=i?1:2)n.next(o[s]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let s=e.now(),a=0;for(let c=1;c<i.length&&i[c]<=s;c+=2)a=c;a&&i.splice(0,a+1)}}};var Yl=class extends ue{constructor(n,e){super()}schedule(n,e=0){return this}};var La={setInterval(t,n,...e){let{delegate:i}=La;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=La;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var ar=class extends Yl{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return La.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&La.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Zr(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var ZT=1,Um,zm={};function uw(t){return t in zm?(delete zm[t],!0):!1}var fw={setImmediate(t){let n=ZT++;return zm[n]=!0,Um||(Um=Promise.resolve()),Um.then(()=>uw(n)&&t()),n},clearImmediate(t){uw(t)}};var{setImmediate:XT,clearImmediate:JT}=fw,ja={setImmediate(...t){let{delegate:n}=ja;return(n?.setImmediate||XT)(...t)},clearImmediate(t){let{delegate:n}=ja;return(n?.clearImmediate||JT)(t)},delegate:void 0};var Ql=class extends ar{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}requestAsyncId(n,e,i=0){return i!==null&&i>0?super.requestAsyncId(n,e,i):(n.actions.push(this),n._scheduled||(n._scheduled=ja.setImmediate(n.flush.bind(n,void 0))))}recycleAsyncId(n,e,i=0){var r;if(i!=null?i>0:this.delay>0)return super.recycleAsyncId(n,e,i);let{actions:o}=n;e!=null&&((r=o[o.length-1])===null||r===void 0?void 0:r.id)!==e&&(ja.clearImmediate(e),n._scheduled===e&&(n._scheduled=void 0))}};var $m=(()=>{class t{constructor(e,i=t.now){this.schedulerActionCtor=e,this.now=i}schedule(e,i=0,r){return new this.schedulerActionCtor(this,e).schedule(r,i)}}return t.now=Fa.now,t})();var cr=class extends $m{constructor(n,e=$m.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var Zl=class extends cr{flush(n){this._active=!0;let e=this._scheduled;this._scheduled=void 0;let{actions:i}=this,r;n=n||i.shift();do if(r=n.execute(n.state,n.delay))break;while((n=i[0])&&n.id===e&&i.shift());if(this._active=!1,r){for(;(n=i[0])&&n.id===e&&i.shift();)n.unsubscribe();throw r}}};var Xl=new Zl(Ql);var Va=new cr(ar),hw=Va;var Jl=class extends ar{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}requestAsyncId(n,e,i=0){return i!==null&&i>0?super.requestAsyncId(n,e,i):(n.actions.push(this),n._scheduled||(n._scheduled=ms.requestAnimationFrame(()=>n.flush(void 0))))}recycleAsyncId(n,e,i=0){var r;if(i!=null?i>0:this.delay>0)return super.recycleAsyncId(n,e,i);let{actions:o}=n;e!=null&&e===n._scheduled&&((r=o[o.length-1])===null||r===void 0?void 0:r.id)!==e&&(ms.cancelAnimationFrame(e),n._scheduled=void 0)}};var ed=class extends cr{flush(n){this._active=!0;let e;n?e=n.id:(e=this._scheduled,this._scheduled=void 0);let{actions:i}=this,r;n=n||i.shift();do if(r=n.execute(n.state,n.delay))break;while((n=i[0])&&n.id===e&&i.shift());if(this._active=!1,r){for(;(n=i[0])&&n.id===e&&i.shift();)n.unsubscribe();throw r}}};var td=new ed(Jl);var rt=new Z(t=>t.complete());function nd(t){return t&&me(t.schedule)}function qm(t){return t[t.length-1]}function id(t){return me(qm(t))?t.pop():void 0}function si(t){return nd(qm(t))?t.pop():void 0}function mw(t,n){return typeof qm(t)=="number"?t.pop():n}function gw(t,n,e,i){function r(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function a(d){try{l(i.next(d))}catch(f){s(f)}}function c(d){try{l(i.throw(d))}catch(f){s(f)}}function l(d){d.done?o(d.value):r(d.value).then(a,c)}l((i=i.apply(t,n||[])).next())})}function pw(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function to(t){return this instanceof to?(this.v=t,this):new to(t)}function vw(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(m){return function(p){return Promise.resolve(p).then(m,f)}}function a(m,p){i[m]&&(r[m]=function(_){return new Promise(function(x,I){o.push([m,_,x,I])>1||c(m,_)})},p&&(r[m]=p(r[m])))}function c(m,p){try{l(i[m](p))}catch(_){h(o[0][3],_)}}function l(m){m.value instanceof to?Promise.resolve(m.value.v).then(d,f):h(o[0][2],m)}function d(m){c("next",m)}function f(m){c("throw",m)}function h(m,p){m(p),o.shift(),o.length&&c(o[0][0],o[0][1])}}function yw(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof pw=="function"?pw(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(s){return new Promise(function(a,c){s=t[o](s),r(a,c,s.done,s.value)})}}function r(o,s,a,c){Promise.resolve(c).then(function(l){o({value:l,done:a})},s)}}var rd=(t=>t&&typeof t.length=="number"&&typeof t!="function");function od(t){return me(t?.then)}function sd(t){return me(t[hs])}function ad(t){return Symbol.asyncIterator&&me(t?.[Symbol.asyncIterator])}function cd(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function ek(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var ld=ek();function dd(t){return me(t?.[ld])}function ud(t){return vw(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield to(e.read());if(r)return yield to(void 0);yield yield to(i)}}finally{e.releaseLock()}})}function fd(t){return me(t?.getReader)}function $e(t){if(t instanceof Z)return t;if(t!=null){if(sd(t))return tk(t);if(rd(t))return nk(t);if(od(t))return ik(t);if(ad(t))return _w(t);if(dd(t))return rk(t);if(fd(t))return ok(t)}throw cd(t)}function tk(t){return new Z(n=>{let e=t[hs]();if(me(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function nk(t){return new Z(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function ik(t){return new Z(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,ql)})}function rk(t){return new Z(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function _w(t){return new Z(n=>{sk(t,n).catch(e=>n.error(e))})}function ok(t){return _w(ud(t))}function sk(t,n){var e,i,r,o;return gw(this,void 0,void 0,function*(){try{for(e=yw(t);i=yield e.next(),!i.done;){let s=i.value;if(n.next(s),n.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function Xt(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function hd(t,n=0){return ye((e,i)=>{e.subscribe(pe(i,r=>Xt(i,t,()=>i.next(r),n),()=>Xt(i,t,()=>i.complete(),n),r=>Xt(i,t,()=>i.error(r),n)))})}function md(t,n=0){return ye((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function bw(t,n){return $e(t).pipe(md(n),hd(n))}function ww(t,n){return $e(t).pipe(md(n),hd(n))}function Sw(t,n){return new Z(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function Cw(t,n){return new Z(e=>{let i;return Xt(e,n,()=>{i=t[ld](),Xt(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){e.error(s);return}o?e.complete():e.next(r)},0,!0)}),()=>me(i?.return)&&i.return()})}function pd(t,n){if(!t)throw new Error("Iterable cannot be null");return new Z(e=>{Xt(e,n,()=>{let i=t[Symbol.asyncIterator]();Xt(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function Dw(t,n){return pd(ud(t),n)}function xw(t,n){if(t!=null){if(sd(t))return bw(t,n);if(rd(t))return Sw(t,n);if(od(t))return ww(t,n);if(ad(t))return pd(t,n);if(dd(t))return Cw(t,n);if(fd(t))return Dw(t,n)}throw cd(t)}function qe(t,n){return n?xw(t,n):$e(t)}function z(...t){let n=si(t);return qe(t,n)}function Ba(t,n){let e=me(t)?t:()=>t,i=r=>r.error(e());return new Z(n?r=>n.schedule(i,0,r):i)}function no(t){return!!t&&(t instanceof Z||me(t.lift)&&me(t.subscribe))}var io=ds(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function Ew(t){return t instanceof Date&&!isNaN(t)}function ce(t,n){return ye((e,i)=>{let r=0;e.subscribe(pe(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:ak}=Array;function ck(t,n){return ak(n)?t(...n):t(n)}function gd(t){return ce(n=>ck(t,n))}var{isArray:lk}=Array,{getPrototypeOf:dk,prototype:uk,keys:fk}=Object;function vd(t){if(t.length===1){let n=t[0];if(lk(n))return{args:n,keys:null};if(hk(n)){let e=fk(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function hk(t){return t&&typeof t=="object"&&dk(t)===uk}function yd(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function lr(...t){let n=si(t),e=id(t),{args:i,keys:r}=vd(t);if(i.length===0)return qe([],n);let o=new Z(mk(i,n,r?s=>yd(r,s):dn));return e?o.pipe(gd(e)):o}function mk(t,n,e=dn){return i=>{Nw(n,()=>{let{length:r}=t,o=new Array(r),s=r,a=r;for(let c=0;c<r;c++)Nw(n,()=>{let l=qe(t[c],n),d=!1;l.subscribe(pe(i,f=>{o[c]=f,d||(d=!0,a--),a||i.next(e(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function Nw(t,n,e){t?Xt(e,t,n):n()}function Iw(t,n,e,i,r,o,s,a){let c=[],l=0,d=0,f=!1,h=()=>{f&&!c.length&&!l&&n.complete()},m=_=>l<i?p(_):c.push(_),p=_=>{o&&n.next(_),l++;let x=!1;$e(e(_,d++)).subscribe(pe(n,I=>{r?.(I),o?m(I):n.next(I)},()=>{x=!0},void 0,()=>{if(x)try{for(l--;c.length&&l<i;){let I=c.shift();s?Xt(n,s,()=>p(I)):p(I)}h()}catch(I){n.error(I)}}))};return t.subscribe(pe(n,m,()=>{f=!0,h()})),()=>{a?.()}}function At(t,n,e=1/0){return me(n)?At((i,r)=>ce((o,s)=>n(i,o,r,s))($e(t(i,r))),e):(typeof n=="number"&&(e=n),ye((i,r)=>Iw(i,r,t,e)))}function dr(t=1/0){return At(dn,t)}function Mw(){return dr(1)}function ps(...t){return Mw()(qe(t,si(t)))}function Ha(t){return new Z(n=>{$e(t()).subscribe(n)})}function Ua(...t){let n=id(t),{args:e,keys:i}=vd(t),r=new Z(o=>{let{length:s}=e;if(!s){o.complete();return}let a=new Array(s),c=s,l=s;for(let d=0;d<s;d++){let f=!1;$e(e[d]).subscribe(pe(o,h=>{f||(f=!0,l--),a[d]=h},()=>c--,void 0,()=>{(!c||!f)&&(l||o.next(i?yd(i,a):a),o.complete())}))}});return n?r.pipe(gd(n)):r}function Tw(t=0,n,e=hw){let i=-1;return n!=null&&(nd(n)?e=n:i=n),new Z(r=>{let o=Ew(t)?+t-e.now():t;o<0&&(o=0);let s=0;return e.schedule(function(){r.closed||(r.next(s++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function Jt(...t){let n=si(t),e=mw(t,1/0),i=t;return i.length?i.length===1?$e(i[0]):dr(e)(qe(i,n)):rt}var Oi=new Z(Xr);function Ee(t,n){return ye((e,i)=>{let r=0;e.subscribe(pe(i,o=>t.call(n,o,r++)&&i.next(o)))})}function kw(t){return ye((n,e)=>{let i=!1,r=null,o=null,s=!1,a=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let l=r;r=null,e.next(l)}s&&e.complete()},c=()=>{o=null,s&&e.complete()};n.subscribe(pe(e,l=>{i=!0,r=l,o||$e(t(l)).subscribe(o=pe(e,a,c))},()=>{s=!0,(!i||!o||o.closed)&&e.complete()}))})}function gs(t,n=Va){return kw(()=>Tw(t,n))}function ur(t){return ye((n,e)=>{let i=null,r=!1,o;i=n.subscribe(pe(e,void 0,void 0,s=>{o=$e(t(s,ur(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function fr(t,n){return me(n)?At(t,n,1):At(t,1)}function za(t,n=Va){return ye((e,i)=>{let r=null,o=null,s=null,a=()=>{if(r){r.unsubscribe(),r=null;let l=o;o=null,i.next(l)}};function c(){let l=s+t,d=n.now();if(d<l){r=this.schedule(void 0,l-d),i.add(r);return}a()}e.subscribe(pe(i,l=>{o=l,s=n.now(),r||(r=n.schedule(c,t),i.add(r))},()=>{a(),i.complete()},void 0,()=>{o=r=null}))})}function Rw(t){return ye((n,e)=>{let i=!1;n.subscribe(pe(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function ft(t){return t<=0?()=>rt:ye((n,e)=>{let i=0;n.subscribe(pe(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function _d(t,n=dn){return t=t??pk,ye((e,i)=>{let r,o=!0;e.subscribe(pe(i,s=>{let a=n(s);(o||!t(r,a))&&(o=!1,r=a,i.next(s))}))})}function pk(t,n){return t===n}function Aw(t=gk){return ye((n,e)=>{let i=!1;n.subscribe(pe(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function gk(){return new io}function hr(t){return ye((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Fi(t,n){let e=arguments.length>=2;return i=>i.pipe(t?Ee((r,o)=>t(r,o,i)):dn,ft(1),e?Rw(n):Aw(()=>new io))}function bd(t){return t<=0?()=>rt:ye((n,e)=>{let i=[];n.subscribe(pe(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function wd(){return ye((t,n)=>{let e,i=!1;t.subscribe(pe(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function $a(t={}){let{connector:n=()=>new N,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let s,a,c,l=0,d=!1,f=!1,h=()=>{a?.unsubscribe(),a=void 0},m=()=>{h(),s=c=void 0,d=f=!1},p=()=>{let _=s;m(),_?.unsubscribe()};return ye((_,x)=>{l++,!f&&!d&&h();let I=c=c??n();x.add(()=>{l--,l===0&&!f&&!d&&(a=Gm(p,r))}),I.subscribe(x),!s&&l>0&&(s=new Ai({next:T=>I.next(T),error:T=>{f=!0,h(),a=Gm(m,e,T),I.error(T)},complete:()=>{d=!0,h(),a=Gm(m,i),I.complete()}}),$e(_).subscribe(s))})(o)}}function Gm(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new Ai({next:()=>{i.unsubscribe(),t()}});return $e(n(...e)).subscribe(i)}function Sd(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,$a({connector:()=>new Pa(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function Wm(t){return Ee((n,e)=>t<=e)}function Mt(...t){let n=si(t);return ye((e,i)=>{(n?ps(t,e,n):ps(t,e)).subscribe(i)})}function Ke(t,n){return ye((e,i)=>{let r=null,o=0,s=!1,a=()=>s&&!r&&i.complete();e.subscribe(pe(i,c=>{r?.unsubscribe();let l=0,d=o++;$e(t(c,d)).subscribe(r=pe(i,f=>i.next(n?n(c,f,d,l++):f),()=>{r=null,a()}))},()=>{s=!0,a()}))})}function Fe(t){return ye((n,e)=>{$e(t).subscribe(pe(e,()=>e.complete(),Xr)),!e.closed&&n.subscribe(e)})}function Tt(t,n,e){let i=me(t)||n||e?{next:t,error:n,complete:e}:t;return i?ye((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let a=!0;r.subscribe(pe(o,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),o.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),o.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),o.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):dn}var Md="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",b=class extends Error{code;constructor(n,e){super(en(n,e)),this.code=n}};function vk(t){return`NG0${Math.abs(t)}`}function en(t,n){return`${vk(t)}${n?": "+n:""}`}function Ve(t){for(let n in t)if(t[n]===Ve)return n;throw Error("")}function Vw(t,n){for(let e in n)Object.hasOwn(n,e)&&!Object.hasOwn(t,e)&&(t[e]=n[e])}function Za(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Za).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function Td(t,n){return t?n?`${t} ${n}`:t:n||""}var yk=Ve({__forward_ref__:Ve});function kt(t){return t.__forward_ref__=kt,t}function Ot(t){return ap(t)?t():t}function ap(t){return typeof t=="function"&&Object.hasOwn(t,yk)&&t.__forward_ref__===kt}function j(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function A(t){return{providers:t.providers||[],imports:t.imports||[]}}function Xa(t){return _k(t,kd)}function cp(t){return Xa(t)!==null}function _k(t,n){return Object.hasOwn(t,n)&&t[n]||null}function bk(t){let n=t?.[kd]??null;return n||null}function Ym(t){return t&&Object.hasOwn(t,Dd)?t[Dd]:null}var kd=Ve({\u0275prov:Ve}),Dd=Ve({\u0275inj:Ve}),v=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=j({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function lp(t){return t&&!!t.\u0275providers}var Ja=Ve({\u0275cmp:Ve}),ec=Ve({\u0275dir:Ve}),dp=Ve({\u0275pipe:Ve}),up=Ve({\u0275mod:Ve}),Wa=Ve({\u0275fac:Ve}),lo=Ve({__NG_ELEMENT_ID__:Ve}),Ow=Ve({__NG_ENV_ID__:Ve});function Bw(t){return Rd(t,"@NgModule"),t[up]||null}function Vi(t){return Rd(t,"@Component"),t[Ja]||null}function fp(t){return Rd(t,"@Directive"),t[ec]||null}function Hw(t){return Rd(t,"@Pipe"),t[dp]||null}function Rd(t,n){if(t==null)throw new b(-919,!1)}function bs(t){return typeof t=="string"?t:t==null?"":String(t)}var Uw=Ve({ngErrorCode:Ve}),wk=Ve({ngErrorMessage:Ve}),Sk=Ve({ngTokenPath:Ve});function hp(t,n){return zw("",-200,n)}function Ad(t,n){throw new b(-201,!1)}function zw(t,n,e){let i=new b(n,t);return i[Uw]=n,i[wk]=t,e&&(i[Sk]=e),i}function Ck(t){return t[Uw]}var Qm;function $w(){return Qm}function un(t){let n=Qm;return Qm=t,n}function mp(t,n,e){let i=Xa(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;Ad(t,"")}var Ht=globalThis;var Dk={},ro=Dk,xk="__NG_DI_FLAG__",Zm=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=oo(e)||0;try{return this.injector.get(n,i&8?null:ro,i)}catch(r){if(ls(r))return r;throw r}}};function Ek(t,n=0){let e=Ul();if(e===void 0)throw new b(-203,!1);if(e===null)return mp(t,void 0,n);{let i=Nk(n),r=e.retrieve(t,i);if(ls(r)){if(i.optional)return null;throw r}return r}}function M(t,n=0){return($w()||Ek)(Ot(t),n)}function u(t,n){return M(t,oo(n))}function oo(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function Nk(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function Xm(t){let n=[];for(let e=0;e<t.length;e++){let i=Ot(t[e]);if(Array.isArray(i)){if(i.length===0)throw new b(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],c=Ik(a);typeof c=="number"?c===-1?r=a.token:o|=c:r=a}n.push(M(r,o))}else n.push(M(i))}return n}function Ik(t){return t[xk]}function so(t,n){let e=Object.hasOwn(t,Wa);return e?t[Wa]:null}function qw(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function Gw(t){return t.flat(Number.POSITIVE_INFINITY)}function Od(t,n){t.forEach(e=>Array.isArray(e)?Od(e,n):n(e))}function pp(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function tc(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function Ww(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function Kw(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function Fd(t,n,e){let i=ws(t,n);return i>=0?t[i|1]=e:(i=~i,Kw(t,i,n,e)),i}function Pd(t,n){let e=ws(t,n);if(e>=0)return t[e|1]}function ws(t,n){return Mk(t,n,1)}function Mk(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),s=t[o<<e];if(n===s)return o<<e;s>n?r=o:i=o+1}return~(r<<e)}var pr={},Bt=[],Ss=new v(""),nc=new v("",-1),gp=new v(""),ys=class{get(n,e=ro){if(e===ro){let r=zw("",-201);throw r.name="\u0275NotFound",r}return e}};function Ln(t){return{\u0275providers:t}}function Yw(...t){return{\u0275providers:vp(!0,t),\u0275fromNgModule:!0}}function vp(t,...n){let e=[],i=new Set,r,o=s=>{e.push(s)};return Od(n,s=>{let a=s;xd(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Qw(r,o),e}function Qw(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];yp(r,o=>{n(o,i)})}}function xd(t,n,e,i){if(t=Ot(t),!t)return!1;let r=null,o=Ym(t),s=!o&&Vi(t);if(!o&&!s){let c=t.ngModule;if(o=Ym(c),o)r=c;else return!1}else{if(s&&!s.standalone)return!1;r=t}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let c=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of c)xd(l,n,e,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let l;Od(o.imports,d=>{xd(d,n,e,i)&&(l||=[],l.push(d))}),l!==void 0&&Qw(l,n)}if(!a){let l=so(r)||(()=>new r);n({provide:r,useFactory:l,deps:Bt},r),n({provide:gp,useValue:r,multi:!0},r),n({provide:Ss,useValue:()=>M(r),multi:!0},r)}let c=o.providers;if(c!=null&&!a){let l=t;yp(c,d=>{n(d,l)})}}else return!1;return r!==t&&t.providers!==void 0}function yp(t,n){for(let e of t)lp(e)&&(e=e.\u0275providers),Array.isArray(e)?yp(e,n):n(e)}var Tk=Ve({provide:String,useValue:Ve});function Zw(t){return t!==null&&typeof t=="object"&&Tk in t}function kk(t){return!!(t&&t.useExisting)}function Rk(t){return!!(t&&t.useFactory)}function ao(t){return typeof t=="function"}function Xw(t){return!!t.useClass}var ic=new v(""),Cd={},Fw={},Km;function Cs(){return Km===void 0&&(Km=new ys),Km}var Be=class{},co=class extends Be{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,ep(n,s=>this.processProvider(s)),this.records.set(nc,vs(void 0,this)),r.has("environment")&&this.records.set(Be,vs(void 0,this));let o=this.records.get(ic);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(gp,Bt,{self:!0}))}retrieve(n,e){let i=oo(e)||0;try{return this.get(n,ro,i)}catch(r){if(ls(r))return r;throw r}}destroy(){qa(this),this._destroyed=!0;let n=ie(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),ie(n)}}onDestroy(n){return qa(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){qa(this);let e=oi(this),i=un(void 0),r;try{return n()}finally{oi(e),un(i)}}get(n,e=ro,i){if(qa(this),Object.hasOwn(n,Ow))return n[Ow](this);let r=oo(i),o,s=oi(this),a=un(void 0);try{if(!(r&4)){let l=this.records.get(n);if(l===void 0){let d=Lk(n)&&Xa(n);d&&this.injectableDefInScope(d)?l=vs(Jm(n),Cd):l=null,this.records.set(n,l)}if(l!=null)return this.hydrate(n,l,r)}let c=r&2?Cs():this.parent;return e=r&8&&e===ro?null:e,c.get(n,e)}catch(c){let l=Ck(c);throw l===-200||l===-201?new b(l,null):c}finally{un(a),oi(s)}}resolveInjectorInitializers(){let n=ie(null),e=oi(this),i=un(void 0),r;try{let o=this.get(Ss,Bt,{self:!0});for(let s of o)s()}finally{oi(e),un(i),ie(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=Ot(n);let e=ao(n)?n:Ot(n&&n.provide),i=Ok(n);if(!ao(n)&&n.multi===!0){let r=this.records.get(e);r||(r=vs(void 0,Cd,!0),r.factory=()=>Xm(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=ie(null);try{if(e.value===Fw)throw hp("");return e.value===Cd&&(e.value=Fw,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&Pk(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{ie(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=Ot(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Jm(t){let n=Xa(t),e=n!==null?n.factory:so(t);if(e!==null)return e;if(t instanceof v)throw new b(-204,!1);if(t instanceof Function)return Ak(t);throw new b(-204,!1)}function Ak(t){if(t.length>0)throw new b(-204,!1);let e=bk(t);return e!==null?()=>e.factory(t):()=>new t}function Ok(t){if(Zw(t))return vs(void 0,t.useValue);{let n=_p(t);return vs(n,Cd)}}function _p(t,n,e){let i;if(ao(t)){let r=Ot(t);return so(r)||Jm(r)}else if(Zw(t))i=()=>Ot(t.useValue);else if(Rk(t))i=()=>t.useFactory(...Xm(t.deps||[]));else if(kk(t))i=(r,o)=>M(Ot(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Ot(t&&(t.useClass||t.provide));if(Fk(t))i=()=>new r(...Xm(t.deps));else return so(r)||Jm(r)}return i}function qa(t){if(t.destroyed)throw new b(-205,!1)}function vs(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function Fk(t){return!!t.deps}function Pk(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function Lk(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function ep(t,n){for(let e of t)Array.isArray(e)?ep(e,n):e&&lp(e)?ep(e.\u0275providers,n):n(e)}function bt(t,n){let e;t instanceof co?(qa(t),e=t):e=new Zm(t);let i,r=oi(e),o=un(void 0);try{return n()}finally{oi(r),un(o)}}function bp(){return $w()!==void 0||Ul()!=null}var jn=0,J=1,se=2,Ct=3,Dn=4,Ut=5,uo=6,Ds=7,ht=8,ci=9,Vn=10,Ge=11,xs=12,wp=13,gr=14,Yt=15,vr=16,fo=17,li=18,di=19,Sp=20,Pi=21,Ld=22,Li=23,fn=24,ho=25,ui=26,st=27,Jw=1,Cp=6,mo=7,rc=8,po=9,ot=10;function Bi(t){return Array.isArray(t)&&typeof t[Jw]=="object"}function xn(t){return Array.isArray(t)&&t[Jw]===!0}function Dp(t){return(t.flags&4)!==0}function Hi(t){return t.componentOffset>-1}function Es(t){return(t.flags&1)===1}function fi(t){return!!t.template}function Ns(t){return(t[se]&512)!==0}function go(t){return(t[se]&256)===256}var Re=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t[t.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",t})(Re||{}),Ga,_s="svg",jd="math",eS="",Pw="*",tp=()=>Object.create(null);function jk(){return Ga||(Ga=tp(),mr(Re.HTML,void 0,[["iframe",["srcdoc"]],["*",["innerHTML","outerHTML"]]]),mr(Re.STYLE,void 0,[["*",["style"]]]),mr(Re.URL,void 0,[["*",["formAction"]],["area",["href"]],["a",["href","xlink:href"]],["form",["action"]],["img",["src"]],["video",["src"]]]),mr(Re.URL,jd,[["*",["href","xlink:href"]]]),mr(Re.RESOURCE_URL,void 0,[["base",["href"]],["embed",["src"]],["frame",["src"]],["iframe",["src"]],["link",["href"]],["object",["codebase","data"]]]),mr(Re.URL,_s,[["a",["href","xlink:href"]]]),mr(Re.ATTRIBUTE_NO_BINDING,_s,[["animate",["attributeName","values","to","from"]],["set",["to","attributeName"]],["animateMotion",["attributeName"]],["animateTransform",["attributeName"]]]),mr(Re.ATTRIBUTE_NO_BINDING,void 0,[["unknown",["attributeName","values","to","from","sandbox","allow","allowFullscreen","referrerPolicy","csp","fetchPriority","credentialless"]],["iframe",["sandbox","allow","allowFullscreen","referrerPolicy","csp","fetchPriority","credentialless"]]]),Ga)}function mr(t,n,e){let i=n??eS;for(let[r,o]of e){let s=r.toLowerCase();for(let a of o){let c=a.toLowerCase(),l=Ga[c]??=tp(),d=l[i]??=tp();d[s]=t}}}function tS(t,n,e){let r=jk()[n.toLowerCase()];if(!r)return Re.NONE;let o=t.toLowerCase(),s;if(e){let a=r[e];a&&(s=a[o]??a[Pw])}if(s===void 0){let a=r[eS];a&&(s=a[o]??a[Pw])}return s??Re.NONE}function Ft(t){for(;Array.isArray(t);)t=t[jn];return t}function xp(t,n){return Ft(n[t])}function hn(t,n){return Ft(n[t.index])}function Vd(t,n){return t.data[n]}function nS(t,n){return t[n]}function En(t,n){let e=n[t];return Bi(e)?e:e[jn]}function iS(t){return(t[se]&4)===4}function Bd(t){return(t[se]&128)===128}function rS(t){return xn(t[Ct])}function mn(t,n){return n==null?null:t[n]}function Ep(t){t[fo]=0}function Np(t){t[se]&1024||(t[se]|=1024,Bd(t)&&vo(t))}function oS(t,n){for(;t>0;)n=n[gr],t--;return n}function oc(t){return!!(t[se]&9216||t[fn]?.dirty)}function Hd(t){t[Vn].changeDetectionScheduler?.notify(8),t[se]&64&&(t[se]|=1024),oc(t)&&vo(t)}function vo(t){t[Vn].changeDetectionScheduler?.notify(0);let n=ji(t);for(;n!==null&&!(n[se]&8192||(n[se]|=8192,!Bd(n)));)n=ji(n)}function Ud(t,n){if(go(t))throw new b(911,!1);t[Pi]===null&&(t[Pi]=[]),t[Pi].push(n)}function sS(t,n){if(t[Pi]===null)return;let e=t[Pi].indexOf(n);e!==-1&&t[Pi].splice(e,1)}function ji(t){let n=t[Ct];return xn(n)?n[Ct]:n}function Ip(t){return t[Ds]??=[]}function Mp(t){return t.cleanup??=[]}function aS(t,n,e,i){let r=Ip(n);r.push(e),t.firstCreatePass&&Mp(t).push(i,r.length-1)}var _e={lFrame:_S(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var np=!1;function cS(){return _e.lFrame.elementDepthCount}function lS(){_e.lFrame.elementDepthCount++}function Tp(){_e.lFrame.elementDepthCount--}function zd(){return _e.bindingsEnabled}function kp(){return _e.skipHydrationRootTNode!==null}function Rp(t){return _e.skipHydrationRootTNode===t}function Ap(){_e.skipHydrationRootTNode=null}function ae(){return _e.lFrame.lView}function Xe(){return _e.lFrame.tView}function mt(t){return _e.lFrame.contextLView=t,t[ht]}function pt(t){return _e.lFrame.contextLView=null,t}function wt(){let t=Op();for(;t!==null&&t.type===64;)t=t.parent;return t}function Op(){return _e.lFrame.currentTNode}function dS(){let t=_e.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function Is(t,n){let e=_e.lFrame;e.currentTNode=t,e.isParent=n}function Fp(){return _e.lFrame.isParent}function Pp(){_e.lFrame.isParent=!1}function uS(){return _e.lFrame.contextLView}function Lp(){return np}function Ka(t){let n=np;return np=t,n}function fS(){let t=_e.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function hS(t){return _e.lFrame.bindingIndex=t}function yr(){return _e.lFrame.bindingIndex++}function jp(t){let n=_e.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function mS(){return _e.lFrame.inI18n}function pS(t,n){let e=_e.lFrame;e.bindingIndex=e.bindingRootIndex=t,$d(n)}function gS(){return _e.lFrame.currentDirectiveIndex}function $d(t){_e.lFrame.currentDirectiveIndex=t}function vS(t){let n=_e.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function qd(){return _e.lFrame.currentQueryIndex}function sc(t){_e.lFrame.currentQueryIndex=t}function Vk(t){let n=t[J];return n.type===2?n.declTNode:n.type===1?t[Ut]:null}function Vp(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=Vk(o),r===null||(o=o[gr],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=_e.lFrame=yS();return i.currentTNode=n,i.lView=t,!0}function Gd(t){let n=yS(),e=t[J];_e.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function yS(){let t=_e.lFrame,n=t===null?null:t.child;return n===null?_S(t):n}function _S(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function bS(){let t=_e.lFrame;return _e.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Bp=bS;function Wd(){let t=bS();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function wS(t){return(_e.lFrame.contextLView=oS(t,_e.lFrame.contextLView))[ht]}function hi(){return _e.lFrame.selectedIndex}function _r(t){_e.lFrame.selectedIndex=t}function Ms(){let t=_e.lFrame;return Vd(t.tView,t.selectedIndex)}function Bn(){_e.lFrame.currentNamespace=_s}function ac(){Bk()}function Bk(){_e.lFrame.currentNamespace=null}function Hp(){return _e.lFrame.currentNamespace}var SS=!0;function Kd(){return SS}function cc(t){SS=t}function ip(t,n=null,e=null,i){let r=Up(t,n,e,i);return r.resolveInjectorInitializers(),r}function Up(t,n=null,e=null,i,r=new Set){let o=[e||Bt,Yw(t)],s;return new co(o,n||Cs(),s||null,r)}var le=class t{static THROW_IF_NOT_FOUND=ro;static NULL=new ys;static create(n,e){if(Array.isArray(n))return ip({name:""},e,n,"");{let i=n.name??"";return ip({name:i},n.parent,n.providers,i)}}static \u0275prov=j({token:t,providedIn:"any",factory:()=>M(nc)});static __NG_ELEMENT_ID__=-1},K=new v(""),Ze=class{static __NG_ELEMENT_ID__=Hk;static __NG_ENV_ID__=n=>n},Ed=class extends Ze{_lView;constructor(n){super(),this._lView=n}get destroyed(){return go(this._lView)}onDestroy(n){let e=this._lView;return Ud(e,n),()=>sS(e,n)}};function Hk(){return new Ed(ae())}var CS=!1,DS=new v(""),mi=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new ut(!1);debugTaskTracker=u(DS,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new Z(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=j({token:t,providedIn:"root",factory:()=>new t})}return t})(),rp=class extends N{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,bp()&&(this.destroyRef=u(Ze,{optional:!0})??void 0,this.pendingTasks=u(mi,{optional:!0})??void 0)}emit(n){let e=ie(null);try{super.next(n)}finally{ie(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),s=i;if(n&&typeof n=="object"){let c=n;r=c.next?.bind(c),o=c.error?.bind(c),s=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return n instanceof ue&&n.add(a),a}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},ee=rp;function Nd(...t){}function zp(t){let n,e;function i(){t=Nd;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch(r){}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function xS(t){return queueMicrotask(()=>t()),()=>{t=Nd}}var $p="isAngularZone",Ya=$p+"_ID",Uk=0,O=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new ee(!1);onMicrotaskEmpty=new ee(!1);onStable=new ee(!1);onError=new ee(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=CS}=n;if(typeof Zone>"u")throw new b(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,qk(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get($p)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new b(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new b(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,n,zk,Nd,Nd);try{return o.runTask(s,e,i)}finally{o.cancelTask(s)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},zk={};function qp(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function $k(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){zp(()=>{t.callbackScheduled=!1,op(t),t.isCheckStableRunning=!0,qp(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),op(t)}function qk(t){let n=()=>{$k(t)},e=Uk++;t._inner=t._inner.fork({name:"angular",properties:{[$p]:!0,[Ya]:e,[Ya+e]:!0},onInvokeTask:(i,r,o,s,a,c)=>{if(Gk(c))return i.invokeTask(o,s,a,c);try{return Lw(t),i.invokeTask(o,s,a,c)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),jw(t)}},onInvoke:(i,r,o,s,a,c,l)=>{try{return Lw(t),i.invoke(o,s,a,c,l)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!Wk(c)&&n(),jw(t)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,op(t),qp(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function op(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Lw(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function jw(t){t._nesting--,qp(t)}var Qa=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new ee;onMicrotaskEmpty=new ee;onStable=new ee;onError=new ee;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function Gk(t){return ES(t,"__ignore_ng_zone__")}function Wk(t){return ES(t,"__scheduler_tick__")}function ES(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var Kt=class{_console=console;handleError(n){this._console.error("ERROR",n)}},Nn=new v("",{factory:()=>{let t=u(O),n=u(Be),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(Kt),e.handleError(i))})}}}),NS={provide:Ss,useValue:()=>{let t=u(Kt,{optional:!0})},multi:!0};function H(t,n){let[e,i,r]=Im(t,n?.equal),o=e,s=o[dt];return o.set=i,o.update=r,o.asReadonly=Yd.bind(o),o}function Yd(){let t=this[dt];if(t.readonlyFn===void 0){let n=()=>this();n[dt]=t,t.readonlyFn=n}return t.readonlyFn}var yo=new v("",{factory:()=>Kk}),Kk="ng";var Qd=new v(""),_o=new v("",{providedIn:"platform",factory:()=>"unknown"}),br=new v(""),wr=new v("",{factory:()=>u(K).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Ts=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=Yk}return t})();function Yk(){return new Ts(ae(),wt())}var ai=class{},lc=new v("",{factory:()=>!0});var Gp=new v(""),Zd=(()=>{class t{static \u0275prov=j({token:t,providedIn:"root",factory:()=>new sp})}return t})(),sp=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},Id=class{[dt];constructor(n){this[dt]=n}destroy(){this[dt].destroy()}};function tn(t,n){let e=n?.injector??u(le),i=n?.manualCleanup!==!0?e.get(Ze):null,r,o=e.get(Ts,null,{optional:!0}),s=e.get(ai);return o!==null?(r=Xk(o.view,s,t),i instanceof Ed&&i._lView===o.view&&(i=null)):r=Jk(t,e.get(Zd),s),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new Id(r)}var IS=W(y({},Mm),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=Ka(!1);try{Tm(this)}finally{Ka(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=ie(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],ie(t)}}}),Qk=W(y({},IS),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(sr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),Zk=W(y({},IS),{consumerMarkedDirty(){this.view[se]|=8192,vo(this.view),this.notifier.notify(13)},destroy(){if(sr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[Li]?.delete(this)}});function Xk(t,n,e){let i=Object.create(Zk);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=MS(i,e),t[Li]??=new Set,t[Li].add(i),i.consumerMarkedDirty(i),i}function Jk(t,n,e){let i=Object.create(Qk);return i.fn=MS(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function MS(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function Hn(t){return typeof t=="function"&&t[dt]!==void 0}var bo=(()=>{class t{internalPendingTasks=u(mi);scheduler=u(ai);errorHandler=u(Nn);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();try{e().catch(this.errorHandler).finally(i)}catch(r){this.errorHandler(r),i()}}static \u0275prov=j({token:t,providedIn:"root",factory:()=>new t})}return t})();function bc(t){return{toString:t}.toString()}var Pe=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(Pe||{}),au=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}};function pC(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var gC=null,We=(()=>{gC=TS;let t=()=>TS;return t.ngInherit=!0,t})();function dR(){return gC}function TS(t){return t.type.prototype.ngOnChanges&&(t.setInput=fR),uR}function uR(){let t=vC(this),n=t?.current;if(n){let e=t.previous;if(e===pr)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function fR(t,n,e,i,r){let o=this.declaredInputs[i],s=vC(t)||hR(t,{previous:pr,current:null}),a=s.current||(s.current={}),c=s.previous,l=c[o];a[o]=new au(l&&l.currentValue,e,c===pr),pC(t,n,r,e)}var ig="__ngSimpleChanges__";function vC(t){return Object.hasOwn(t,ig)&&t[ig]||null}function hR(t,n){return t[ig]=n}var kS=[];var ze=function(t,n=null,e){for(let i=0;i<kS.length;i++){let r=kS[i];r(t,n,e)}};function mR(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let s=dR()(n);(e.preOrderHooks??=[]).push(t,s),(e.preOrderCheckHooks??=[]).push(t,s)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function yC(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:d}=o;s&&(t.contentHooks??=[]).push(-e,s),a&&((t.contentHooks??=[]).push(e,a),(t.contentCheckHooks??=[]).push(e,a)),c&&(t.viewHooks??=[]).push(-e,c),l&&((t.viewHooks??=[]).push(e,l),(t.viewCheckHooks??=[]).push(e,l)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function iu(t,n,e){_C(t,n,3,e)}function ru(t,n,e,i){(t[se]&3)===e&&_C(t,n,e,i)}function Wp(t,n){let e=t[se];(e&3)===n&&(e&=16383,e+=1,t[se]=e)}function _C(t,n,e,i){let r=i!==void 0?t[fo]&65535:0,o=i??-1,s=n.length-1,a=0;for(let c=r;c<s;c++)if(typeof n[c+1]=="number"){if(a=n[c],i!=null&&a>=i)break}else n[c]<0&&(t[fo]+=65536),(a<o||o==-1)&&(pR(t,e,n,c),t[fo]=(t[fo]&4294901760)+c+2),c++}function RS(t,n){ze(Pe.LifecycleHookStart,t,n);let e=ie(null);try{n.call(t)}finally{ie(e),ze(Pe.LifecycleHookEnd,t,n)}}function pR(t,n,e,i){let r=e[i]<0,o=e[i+1],s=r?-e[i]:e[i],a=t[s];r?t[se]>>14<t[fo]>>16&&(t[se]&3)===n&&(t[se]+=16384,RS(a,o)):RS(a,o)}var Rs=-1,Co=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function gR(t){return(t.flags&8)!==0}function vR(t){return(t.flags&16)!==0}function yR(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],s=e[i++],a=e[i++];t.setAttribute(n,s,a,o)}else{let o=r,s=e[++i];_R(o)?t.setProperty(n,o,s):t.setAttribute(n,o,s),i++}}return i}function bC(t){return t===3||t===4||t===6}function _R(t){return t.charCodeAt(0)===64}function As(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?AS(t,e,r,null,n[++i]):AS(t,e,r,null,null))}}return t}function AS(t,n,e,i,r){let o=0,s=t.length;if(n===-1)s=-1;else for(;o<t.length;){let a=t[o++];if(typeof a=="number"){if(a===n){s=-1;break}else if(a>n){s=o-1;break}}}for(;o<t.length;){let a=t[o];if(typeof a=="number")break;if(a===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(t.splice(s,0,n),o=s+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function wC(t){return t!==Rs}function cu(t){return t&32767}function bR(t){return t>>16}function lu(t,n){let e=bR(t),i=n;for(;e>0;)i=i[gr],e--;return i}var rg=!0;function OS(t){let n=rg;return rg=t,n}var wR=256,SC=wR-1,CC=5,SR=0,pi={};function CR(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:Object.hasOwn(e,lo)&&(i=e[lo]),i==null&&(i=e[lo]=SR++);let r=i&SC,o=1<<r;n.data[t+(r>>CC)]|=o}function du(t,n){let e=DC(t,n);if(e!==-1)return e;let i=n[J];i.firstCreatePass&&(t.injectorIndex=n.length,Kp(i.data,t),Kp(n,null),Kp(i.blueprint,null));let r=Bg(t,n),o=t.injectorIndex;if(wC(r)){let s=cu(r),a=lu(r,n),c=a[J].data;for(let l=0;l<8;l++)n[o+l]=a[s+l]|c[s+l]}return n[o+8]=r,o}function Kp(t,n){t.push(0,0,0,0,0,0,0,0,n)}function DC(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Bg(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=MC(r),i===null)return Rs;if(e++,r=r[gr],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return Rs}function og(t,n,e){CR(t,n,e)}function DR(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(bC(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function xC(t,n,e){if(e&8||t!==void 0)return t;Ad(n,"NodeInjector")}function EC(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[ci],o=un(void 0);try{return r?r.get(n,i,e&8):mp(n,i,e&8)}finally{un(o)}}return xC(i,n,e)}function NC(t,n,e,i=0,r){if(t!==null){if(n[se]&2048&&!(i&2)){let s=IR(t,n,e,i,pi);if(s!==pi)return s}let o=IC(t,n,e,i,pi);if(o!==pi)return o}return EC(n,e,i,r)}function IC(t,n,e,i,r){let o=ER(e);if(typeof o=="function"){if(!Vp(n,t,i))return i&1?xC(r,e,i):EC(n,e,i,r);try{let s;if(s=o(i),s==null&&!(i&8))Ad(e);else return s}finally{Bp()}}else if(typeof o=="number"){let s=null,a=DC(t,n),c=Rs,l=i&1?n[Yt][Ut]:null;for((a===-1||i&4)&&(c=a===-1?Bg(t,n):n[a+8],c===Rs||!PS(i,!1)?a=-1:(s=n[J],a=cu(c),n=lu(c,n)));a!==-1;){let d=n[J];if(FS(o,a,d.data)){let f=xR(a,n,e,s,i,l);if(f!==pi)return f}c=n[a+8],c!==Rs&&PS(i,n[J].data[a+8]===l)&&FS(o,a,n)?(s=d,a=cu(c),n=lu(c,n)):a=-1}}return r}function xR(t,n,e,i,r,o){let s=n[J],a=s.data[t+8],c=i==null?Hi(a)&&rg:i!=s&&(a.type&3)!==0,l=r&1&&o===a,d=ou(a,s,e,c,l);return d!==null?hc(n,s,d,a,r):pi}function ou(t,n,e,i,r){let o=t.providerIndexes,s=n.data,a=o&1048575,c=t.directiveStart,l=t.directiveEnd,d=o>>20,f=i?a:a+d,h=r?a+d:l;for(let m=f;m<h;m++){let p=s[m];if(m<c&&e===p||m>=c&&p.type===e)return m}if(r){let m=s[c];if(m&&fi(m)&&m.type===e)return c}return null}function hc(t,n,e,i,r){let o=t[e],s=n.data;if(o instanceof Co){let a=o;if(a.resolving)throw hp("");let c=OS(a.canSeeViewProviders);a.resolving=!0;let l=s[e].type||s[e],d,f=a.injectImpl?un(a.injectImpl):null,h=Vp(t,i,0);try{o=t[e]=a.factory(void 0,r,s,t,i),n.firstCreatePass&&e>=i.directiveStart&&mR(e,s[e],n)}finally{f!==null&&un(f),OS(c),a.resolving=!1,Bp()}}return o}function ER(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=Object.hasOwn(t,lo)?t[lo]:void 0;return typeof n=="number"?n>=0?n&SC:NR:n}function FS(t,n,e){let i=1<<t;return!!(e[n+(t>>CC)]&i)}function PS(t,n){return!(t&2)&&!(t&1&&n)}var Sr=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return NC(this._tNode,this._lView,n,oo(i),e)}};function NR(){return new Sr(wt(),ae())}function Ne(t){return bc(()=>{let n=t.prototype.constructor,e=n[Wa]||sg(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[Wa]||sg(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function sg(t){return ap(t)?()=>{let n=sg(Ot(t));return n&&n()}:so(t)}function IR(t,n,e,i,r){let o=t,s=n;for(;o!==null&&s!==null&&s[se]&2048&&!Ns(s);){let a=IC(o,s,e,i|2,pi);if(a!==pi)return a;let c=o.parent;if(!c){let l=s[Sp];if(l){let d=l.get(e,pi,i&-5);if(d!==pi)return d}c=MC(s),s=s[gr]}o=c}return r}function MC(t){let n=t[J],e=n.type;return e===2?n.declTNode:e===1?t[Ut]:null}function wc(t){return DR(wt(),t)}function TC(t){let n=Ht.ng;if(n&&n.\u0275compilerFacade)return n.\u0275compilerFacade;throw new Error("JIT compiler unavailable")}function V(t){return{token:t.token,providedIn:t.autoProvided===!1?null:"root",factory:t.factory,value:void 0}}function MR(){return js(wt(),ae())}function js(t,n){return new L(hn(t,n))}var L=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=MR}return t})();function kC(t){return t instanceof L?t.nativeElement:t}function TR(){return this._results[Symbol.iterator]()}var pn=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new N}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=Gw(n);(this._changesDetected=!qw(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=TR};function RC(t){return(t.flags&128)===128}var Hg=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Hg||{}),AC=new Map,kR=0;function RR(){return kR++}function AR(t){AC.set(t[di],t)}function ag(t){AC.delete(t[di])}var LS="__ngContext__";function Os(t,n){Bi(n)?(t[LS]=n[di],AR(n)):t[LS]=n}function OC(t){return PC(t[xs])}function FC(t){return PC(t[Dn])}function PC(t){for(;t!==null&&!xn(t);)t=t[Dn];return t}var cg;function Ug(t){cg=t}function zg(){if(cg!==void 0)return cg;if(typeof document<"u")return document;throw new b(210,!1)}var LC="r";var jC="di";var $g=new v(""),VC=!1,BC=new v("",{factory:()=>VC});var Su=new v("");var jS=new WeakMap;function OR(t,n){if(t==null||typeof t!="object")return;let e=jS.get(t);e||(e=new WeakSet,jS.set(t,e)),e.add(n)}var FR=(t,n,e,i)=>{};function PR(t,n,e,i){FR(t,n,e,i)}function Cu(t){return(t.flags&32)===32}var LR=()=>null;function HC(t,n,e=!1){return LR(t,n,e)}function UC(t,n){let e=t.contentQueries;if(e!==null){let i=ie(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],s=e[r+1];if(s!==-1){let a=t.data[s];sc(o),a.contentQueries(2,n[s],s)}}}finally{ie(i)}}}function lg(t,n,e){sc(0);let i=ie(null);try{n(t,e)}finally{ie(i)}}function qg(t,n,e){if(Dp(n)){let i=ie(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let s=r;s<o;s++){let a=t.data[s];if(a.contentQueries){let c=e[s];a.contentQueries(1,c,s)}}}finally{ie(i)}}}var $n=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})($n||{});var jR={"http://www.w3.org/2000/svg":_s,"http://www.w3.org/1998/Math/MathML":jd},Xd;function VR(){if(Xd===void 0&&(Xd=null,Ht.trustedTypes))try{Xd=Ht.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch(t){}return Xd}function Du(t){return VR()?.createHTML(t)||t}var Jd;function zC(){if(Jd===void 0&&(Jd=null,Ht.trustedTypes))try{Jd=Ht.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch(t){}return Jd}function VS(t){return zC()?.createHTML(t)||t}function BS(t){return zC()?.createScriptURL(t)||t}var Ui=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Md})`}},dg=class extends Ui{getTypeName(){return"HTML"}},ug=class extends Ui{getTypeName(){return"Style"}},fg=class extends Ui{getTypeName(){return"Script"}},hg=class extends Ui{getTypeName(){return"URL"}},mg=class extends Ui{getTypeName(){return"ResourceURL"}};function nn(t){return t instanceof Ui?t.changingThisBreaksApplicationSecurity:t}function vi(t,n){let e=$C(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${Md})`)}return e===n}function $C(t){return t instanceof Ui&&t.getTypeName()||null}function Gg(t){return new dg(t)}function Wg(t){return new ug(t)}function Kg(t){return new fg(t)}function Yg(t){return new hg(t)}function Qg(t){return new mg(t)}function BR(t){let n=new gg(t);return HR()?new pg(n):n}var pg=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(Du(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch(e){return null}}},gg=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=Du(n),e}};function HR(){try{return!!new window.DOMParser().parseFromString(Du(""),"text/html")}catch(t){return!1}}var UR=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Sc(t){return t=String(t),t.match(UR)?t:"unsafe:"+t}function zi(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function Cc(...t){let n={};for(let e of t)for(let i in e)Object.hasOwn(e,i)&&(n[i]=!0);return n}var qC=zi("area,br,col,hr,img,wbr"),GC=zi("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),WC=zi("rp,rt"),zR=Cc(WC,GC),$R=Cc(GC,zi("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),qR=Cc(WC,zi("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),HS=Cc(qC,$R,qR,zR),KC=zi("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),GR=zi("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),WR=zi("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),KR=Cc(KC,GR,WR),YR=zi("script,style,template"),vg=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=XR(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=ZR(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=US(n).toLowerCase();if(!Object.hasOwn(HS,e))return this.sanitizedSomething=!0,!Object.hasOwn(YR,e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),s=o.name,a=s.toLowerCase();if(!Object.hasOwn(KR,a)){this.sanitizedSomething=!0;continue}let c=o.value;KC[a]&&(c=Sc(c)),this.buf.push(" ",s,'="',zS(c),'"')}return this.buf.push(">"),!0}endElement(n){let e=US(n).toLowerCase();Object.hasOwn(HS,e)&&!Object.hasOwn(qC,e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(zS(n))}};function QR(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function ZR(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw YC(n);return n}function XR(t){let n=t.firstChild;if(n&&QR(t,n))throw YC(n);return n}function US(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function YC(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var JR=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,eA=/([^\#-~ |!])/g;function zS(t){return t.replace(/&/g,"&amp;").replace(JR,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(eA,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var eu;function xu(t,n){let e=null;try{eu=eu||BR(t);let i=n?String(n):"";e=eu.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=eu.getInertBodyElement(i)}while(i!==o);let a=new vg().sanitizeChildren($S(e)||e);return Du(a)}finally{if(e){let i=$S(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function $S(t){return"content"in t&&tA(t)?t.content:null}function tA(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}var nA=/^>|^->|<!--|-->|--!>|<!-$/g,iA=/(<|>)/g,rA="\u200B$1\u200B";function oA(t){return t.replace(nA,n=>n.replace(iA,rA))}function sA(t,n){return t.createText(n)}function aA(t,n,e){t.setValue(n,e)}function cA(t,n){return t.createComment(oA(n))}function QC(t,n,e){return t.createElement(n,e)}function wo(t,n,e,i,r){t.insertBefore(n,e,i,r)}function ZC(t,n,e){t.appendChild(n,e)}function qS(t,n,e,i,r){i!==null?wo(t,n,e,i,r):ZC(t,n,e)}function XC(t,n,e,i){t.removeChild(null,n,e,i)}function lA(t,n,e){t.setAttribute(n,"style",e)}function dA(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function JC(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&yR(t,n,i),r!==null&&dA(t,n,r),o!==null&&lA(t,n,o)}function uA(t,n=!0){if(t[0]!=":")return[null,t];let e=t.indexOf(":",1);if(e===-1){if(n)throw new Error(`Unsupported format "${t}" expecting ":namespace:name"`);return[null,t]}return[t.slice(1,e),t.slice(e+1)]}function Zg(t,n,e){if(n!==void 0&&e!==void 0&&n0(n,e)!==Re.HTML)return t;let i=Jg();return i?VS(i.sanitize(Re.HTML,t)||""):vi(t,"HTML")?VS(nn(t)):xu(zg(),bs(t))}function e0(t){let n=Jg();return n?n.sanitize(Re.URL,t)||"":vi(t,"URL")?nn(t):Sc(bs(t))}function t0(t){let n=Jg();if(n)return BS(n.sanitize(Re.RESOURCE_URL,t)||"");if(vi(t,"ResourceURL"))return BS(nn(t));throw new b(904,!1)}function fA(t,n){switch(n0(t,n)){case Re.RESOURCE_URL:return t0;case Re.URL:return e0;default:return null}}function Xg(t,n,e){return fA(n,e)?.(t)??t}function Jg(){let t=ae();return t&&t[Vn].sanitizer}function n0(t,n){let[e,i]=hA(t);return tS(i,n,e)}function hA(t){t=t.toLowerCase();let n=uA(t,!1);if(n[0])return n;let i=hi()===-1?null:Ms(),r=i?.namespace;if(t==="#host"&&i?.type===2){let o=hn(i,ae());if(o.tagName&&(t=o.tagName.toLowerCase()),r==null){let s=o.namespaceURI;r=s&&jR[s]}}return[r,t]}function mA(t){return t instanceof Function?t():t}function pA(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var i0="ng-template";function gA(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&pA(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(ev(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function ev(t){return t.type===4&&t.value!==i0}function vA(t,n,e){let i=t.type===4&&!e?i0:t.value;return n===i}function yA(t,n,e){let i=4,r=t.attrs,o=r!==null?wA(r):0,s=!1;for(let a=0;a<n.length;a++){let c=n[a];if(typeof c=="number"){if(!s&&!Un(i)&&!Un(c))return!1;if(s&&Un(c))continue;s=!1,i=c|i&1;continue}if(!s)if(i&4){if(i=2|i&1,c!==""&&!vA(t,c,e)||c===""&&n.length===1){if(Un(i))return!1;s=!0}}else if(i&8){if(r===null||!gA(t,r,c,e)){if(Un(i))return!1;s=!0}}else{let l=n[++a],d=_A(c,r,ev(t),e);if(d===-1){if(Un(i))return!1;s=!0;continue}if(l!==""){let f;if(d>o?f="":f=r[d+1].toLowerCase(),i&2&&l!==f){if(Un(i))return!1;s=!0}}}}return Un(i)||s}function Un(t){return(t&1)===0}function _A(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let s=n[r];if(s===t)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=n[++r];for(;typeof a=="string";)a=n[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return SA(n,t)}function r0(t,n,e=!1){for(let i=0;i<n.length;i++)if(yA(t,n[i],e))return!0;return!1}function bA(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function wA(t){for(let n=0;n<t.length;n++){let e=t[n];if(bC(e))return n}return t.length}function SA(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function CA(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function GS(t,n){return t?":not("+n.trim()+")":n}function DA(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let s=t[e];if(typeof s=="string")if(i&2){let a=t[++e];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!Un(s)&&(n+=GS(o,r),r=""),i=s,o=o||!Un(i);e++}return r!==""&&(n+=GS(o,r)),n}function xA(t){return t.map(DA).join(",")}function EA(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!Un(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var gn={},qn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(qn||{}),NA;function tv(t,n){return NA(t,n)}var Cr=new Set;var A5=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var yg=new WeakMap;function o0(t){return t?t[gr]??t:null}var dc=new WeakSet;function IA(t,n,e){let i=yg.get(t);if(!i||i.length===0)return;let r=n.parentNode,o=n.previousSibling,s=o0(e);for(let a=i.length-1;a>=0;a--){let{el:c,declarationView:l}=i[a],d=c.parentNode;c===n?(i.splice(a,1),dc.add(c),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):o&&c===o?(i.splice(a,1),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),c.parentNode?.removeChild(c)):d&&r&&d!==r&&(s===null||l===null||s===l)&&(i.splice(a,1),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),c.parentNode?.removeChild(c))}}function MA(t,n,e){let i=o0(e),r=yg.get(t);r?r.some(o=>o.el===n)||r.push({el:n,declarationView:i}):yg.set(t,[{el:n,declarationView:i}])}var Eu=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(Eu||{}),Gn=new v(""),WS=new Set;function In(t){WS.has(t)||(WS.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var Nu=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=j({token:t,providedIn:"root",factory:()=>new t})}return t})(),nv=[0,1,2,3],iv=(()=>{class t{ngZone=u(O);scheduler=u(ai);errorHandler=u(Kt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(Gn,{optional:!0})}execute(){let e=this.sequences.size>0;e&&ze(Pe.AfterRenderHooksStart),this.executing=!0;for(let i of nv)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&ze(Pe.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[ho]??=[]).push(e),vo(i),i[se]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(Eu.AFTER_NEXT_RENDER,e):e()}static \u0275prov=j({token:t,providedIn:"root",factory:()=>new t})}return t})(),mc=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,s=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[ho];n&&(this.view[ho]=n.filter(e=>e!==this))}};function Pt(t,n){let e=n?.injector??u(le);return In("NgAfterNextRender"),kA(t,e,n,!0)}function TA(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function kA(t,n,e,i){let r=n.get(Nu);r.impl??=n.get(iv);let o=n.get(Gn,null,{optional:!0}),s=e?.manualCleanup!==!0?n.get(Ze):null,a=n.get(Ts,null,{optional:!0}),c=new mc(r.impl,TA(t),a?.view,i,s,o?.snapshot(null));return r.impl.register(c),c}var rv=new v("",{factory:()=>{let t=u(Be),n=new Set;return t.onDestroy(()=>n.clear()),{queue:n,isScheduled:!1,scheduler:null,injector:t}}});function s0(t,n,e){let i=t.get(rv);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function RA(t,n){let e=t.get(rv);if(Array.isArray(n))for(let i of n)e.queue.delete(i);else e.queue.delete(n)}function AA(t,n){let e=t.get(rv);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function OA(t,n){for(let[e,i]of n)s0(t,i.animateFns)}function KS(t,n,e,i){let r=t?.[ui]?.enter;n!==null&&r&&r.has(e.index)&&OA(i,r)}function YS(t,n,e,i){try{e.get(nc)}catch(s){return i(!1)}let r=t?.[ui];r?.enter?.has(n.index)&&RA(e,r.enter.get(n.index).animateFns);let o=FA(t,n,r);if(o.size===0){let s=!1;if(t){let a=[];Iu(t,n,a),s=a.length>0}if(!s)return i(!1)}t&&Cr.add(t[di]),s0(e,()=>PA(t,n,r||void 0,o,i),r||void 0)}function FA(t,n,e){let i=new Map,r=e?.leave;if(r&&r.has(n.index)&&i.set(n.index,r.get(n.index)),t&&r)for(let[o,s]of r){if(i.has(o))continue;let c=t[J].data[o].parent;for(;c;){if(c===n){i.set(o,s);break}c=c.parent}}return i}function PA(t,n,e,i,r){let o=[];if(e&&e.leave)for(let[s]of i){if(!e.leave.has(s))continue;let a=e.leave.get(s);for(let c of a.animateFns){let{promise:l}=c();o.push(l)}e.detachedLeaveAnimationFns=void 0}if(t&&Iu(t,n,o),o.length>0){let s=e||t?.[ui];if(s){let a=s.running;a&&o.push(a),s.running=Promise.allSettled(o),jA(t,s.running,r)}else Promise.allSettled(o).then(()=>{t&&Cr.delete(t[di]),r(!0)})}else t&&Cr.delete(t[di]),r(!1)}function Iu(t,n,e){if(n.type&12){let r=t[n.index];if(xn(r))for(let o=ot;o<r.length;o++){let s=r[o];s[J].type===2&&LA(s,e)}}let i=n.child;for(;i;)Iu(t,i,e),i=i.next}function LA(t,n){let e=t[ui];if(e&&e.leave)for(let r of e.leave.values())for(let o of r.animateFns){let{promise:s}=o();n.push(s)}let i=t[J].firstChild;for(;i;)Iu(t,i,n),i=i.next}function jA(t,n,e){n.then(()=>{t[ui]?.running===n&&(t[ui].running=void 0,Cr.delete(t[di])),e(!0)})}function ks(t,n,e,i,r,o,s,a){if(r!=null){let c,l=!1;xn(r)?c=r:Bi(r)&&(l=!0,r=r[jn]);let d=Ft(r);t===0&&i!==null?(KS(a,i,o,e),s==null?ZC(n,i,d):wo(n,i,d,s||null,!0)):t===1&&i!==null?(KS(a,i,o,e),wo(n,i,d,s||null,!0),IA(o,d,a)):t===2?(a?.[ui]?.leave?.has(o.index)&&MA(o,d,a),dc.delete(d),YS(a,o,e,f=>{if(dc.has(d)){dc.delete(d);return}XC(n,d,l,f)})):t===3&&(dc.delete(d),YS(a,o,e,()=>{n.destroyNode(d)})),c!=null&&YA(n,t,e,c,o,i,s)}}function VA(t,n){a0(t,n),n[jn]=null,n[Ut]=null}function BA(t,n,e,i,r,o){i[jn]=r,i[Ut]=n,Tu(t,i,e,1,r,o)}function a0(t,n){n[Vn].changeDetectionScheduler?.notify(9),Tu(t,n,n[Ge],2,null,null)}function HA(t){let n=t[xs];if(!n)return Yp(t[J],t);for(;n;){let e=null;if(Bi(n))e=n[xs];else{let i=n[ot];i&&(e=i)}if(!e){for(;n&&!n[Dn]&&n!==t;)Bi(n)&&Yp(n[J],n),n=n[Ct];n===null&&(n=t),Bi(n)&&Yp(n[J],n),e=n&&n[Dn]}n=e}}function ov(t,n){let e=t[po],i=e.indexOf(n);e.splice(i,1)}function Mu(t,n){if(go(n))return;let e=n[Ge];e.destroyNode&&Tu(t,n,e,3,null,null),HA(n)}function Yp(t,n){if(go(n))return;let e=ie(null);try{n[se]&=-129,n[se]|=256,n[fn]&&sr(n[fn]),zA(t,n),UA(t,n),n[J].type===1&&n[Ge].destroy();let i=n[vr];if(i!==null&&xn(n[Ct])){i!==n[Ct]&&ov(i,n);let r=n[li];r!==null&&r.detachView(t)}ag(n)}finally{ie(e)}}function UA(t,n){let e=t.cleanup,i=n[Ds];if(e!==null)for(let s=0;s<e.length-1;s+=2)if(typeof e[s]=="string"){let a=e[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[e[s+1]];e[s].call(a)}i!==null&&(n[Ds]=null);let r=n[Pi];if(r!==null){n[Pi]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=n[Li];if(o!==null){n[Li]=null;for(let s of o)s.destroy()}}function zA(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof Co)){let o=e[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],c=o[s+1];ze(Pe.LifecycleHookStart,a,c);try{c.call(a)}finally{ze(Pe.LifecycleHookEnd,a,c)}}else{ze(Pe.LifecycleHookStart,r,o);try{o.call(r)}finally{ze(Pe.LifecycleHookEnd,r,o)}}}}}function c0(t,n,e){return $A(t,n.parent,e)}function $A(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[jn];if(Hi(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===$n.None||r===$n.Emulated)return null}return hn(i,e)}function l0(t,n,e){return GA(t,n,e)}function qA(t,n,e){return t.type&40?hn(t,e):null}var GA=qA,QS;function sv(t,n,e,i){let r=c0(t,i,n),o=n[Ge],s=i.parent||n[Ut],a=l0(s,i,n);if(r!=null)if(Array.isArray(e))for(let c=0;c<e.length;c++)qS(o,r,e[c],a,!1);else qS(o,r,e,a,!1);QS!==void 0&&QS(o,i,n,e,r)}function uc(t,n){if(n!==null){let e=n.type;if(e&3)return hn(n,t);if(e&4)return _g(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return uc(t,i);{let r=t[n.index];return xn(r)?_g(-1,r):Ft(r)}}else{if(e&128)return uc(t,n.next);if(e&32)return tv(n,t)()||Ft(t[n.index]);{let i=d0(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=ji(t[Yt]);return uc(r,i)}else return uc(t,n.next)}}}return null}function d0(t,n){if(n!==null){let i=t[Yt][Ut],r=n.projection;return i.projection[r]}return null}function _g(t,n){let e=ot+t+1;if(e<n.length){let i=n[e],r=i[J].firstChild;if(r!==null)return uc(i,r)}return n[mo]}function av(t,n,e,i,r,o,s){for(;e!=null;){let a=i[ci];if(e.type===128){e=e.next;continue}let c=i[e.index],l=e.type;if(s&&n===0&&(c&&Os(Ft(c),i),e.flags|=2),!Cu(e))if(l&8)av(t,n,e.child,i,r,o,!1),ks(n,t,a,r,c,e,o,i);else if(l&32){let d=tv(e,i),f;for(;f=d();)ks(n,t,a,r,f,e,o,i);ks(n,t,a,r,c,e,o,i)}else l&16?u0(t,n,i,e,r,o):ks(n,t,a,r,c,e,o,i);e=s?e.projectionNext:e.next}}function Tu(t,n,e,i,r,o){t.type===3?WA(e,i,n,r,o):av(e,i,t.firstChild,n,r,o,!1)}function WA(t,n,e,i,r){let s=e[J].firstChild,a=s.next,c=Ft(e[s.index]),l=Ft(e[a.index]),d=a.index+1,f=e[d];if(n===1||n===0)i!==null&&(f&&f.hasChildNodes()?wo(t,i,f,r,!0):(wo(t,i,c,r,!0),wo(t,i,l,r,!0)));else if(n===2){if(f||(f=document.createDocumentFragment(),e[d]=f),c&&c.parentNode===f)return;let h=c;for(;h!==null;){let m=h.nextSibling;if(f.appendChild(h),h===l)break;h=m}}}function KA(t,n,e){let i=n[Ge],r=c0(t,e,n),o=e.parent||n[Ut],s=l0(o,e,n);u0(i,0,n,e,r,s)}function u0(t,n,e,i,r,o){let s=e[Yt],c=s[Ut].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let d=c[l];ks(n,t,e[ci],r,d,i,o,e)}else{let l=c,d=s[Ct];RC(i)&&(l.flags|=128),av(t,n,l,d,r,o,!0)}}function YA(t,n,e,i,r,o,s){let a=i[mo],c=Ft(i);if(a!==c&&ks(n,t,e,o,a,r,s),(i[se]&4)===0)for(let l=ot;l<i.length;l++){let d=i[l];Tu(d[J],d,t,n,o,a)}}function QA(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:qn.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=qn.Important),t.setStyle(e,i,r,o))}}function cv(t,n,e,i,r,o,s,a,c,l,d){let f=st+i,h=f+r,m=ZA(f,h),p=typeof l=="function"?l():l;return m[J]={type:t,blueprint:m,template:e,queries:null,viewQuery:a,declTNode:n,data:m.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:c,consts:p,incompleteFirstPass:!1,ssrId:d}}function ZA(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:gn);return e}function XA(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=cv(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function lv(t,n,e,i,r,o,s,a,c,l,d){let f=n.blueprint.slice();return f[jn]=r,f[se]=i|4|128|8|64|1024,(l!==null||t&&t[se]&2048)&&(f[se]|=2048),Ep(f),f[Ct]=f[gr]=t,f[ht]=e,f[Vn]=s||t&&t[Vn],f[Ge]=a||t&&t[Ge],f[ci]=c||t&&t[ci]||null,f[Ut]=o,f[di]=RR(),f[uo]=d,f[Sp]=l,f[Yt]=n.type==2?t[Yt]:f,f}function JA(t,n,e){let i=hn(n,t),r=XA(e),o=t[Vn].rendererFactory,s=dv(t,lv(t,r,null,f0(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=s}function f0(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function h0(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function dv(t,n){return t[xs]?t[wp][Dn]=n:t[xs]=n,t[wp]=n,n}function D(t=1){m0(Xe(),ae(),hi()+t,!1)}function m0(t,n,e,i){if(!i)if((n[se]&3)===3){let o=t.preOrderCheckHooks;o!==null&&iu(n,o,e)}else{let o=t.preOrderHooks;o!==null&&ru(n,o,0,e)}_r(e)}var ku=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(ku||{});function Do(t,n,e,i){let r=ie(null);try{let[o,s,a]=t.inputs[e],c=null;(s&ku.SignalBased)!==0&&(c=n[o][dt]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(n,i)),t.setInput!==null?t.setInput(n,c,i,e,o):pC(n,c,o,i)}finally{ie(r)}}function p0(t,n,e,i,r){let o=hi(),s=i&2;try{_r(-1),s&&n.length>st&&m0(t,n,st,!1);let a=s?Pe.TemplateUpdateStart:Pe.TemplateCreateStart;ze(a,r,e),e(i,r)}finally{_r(o);let a=s?Pe.TemplateUpdateEnd:Pe.TemplateCreateEnd;ze(a,r,e)}}function Ru(t,n,e){sO(t,n,e),(e.flags&64)===64&&aO(t,n,e)}function Dc(t,n,e=hn){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?e(n,t):t[s];t[r++]=a}}}function eO(t,n,e,i){let o=i.get(BC,VC)||e===$n.ShadowDom||e===$n.ExperimentalIsolatedShadowDom,s=t.selectRootElement(n,o);return tO(s),s}function tO(t){nO(t)}var nO=()=>null;function iO(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function rO(t,n,e,i,r,o){let s=n[J];if(mv(t,s,n,e,i)){Hi(t)&&oO(n,t.index);return}t.type&3&&(e=iO(e)),g0(t,n,e,i,r,o)}function g0(t,n,e,i,r,o){if(t.type&3){let s=hn(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(s,e,i)}else t.type&12}function oO(t,n){let e=En(n,t);e[se]&16||(e[se]|=64)}function sO(t,n,e){let i=e.directiveStart,r=e.directiveEnd;Hi(e)&&JA(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||du(e,n);let o=e.initialInputs;for(let s=i;s<r;s++){let a=t.data[s],c=hc(n,t,s,e);if(Os(c,n),o!==null&&uO(n,s-i,c,a,e,o),fi(a)){let l=En(e.index,n);l[ht]=hc(n,t,s,e)}}}function aO(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,s=gS();try{_r(o);for(let a=i;a<r;a++){let c=t.data[a],l=n[a];$d(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&cO(c,l)}}finally{_r(-1),$d(s)}}function cO(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function uv(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];r0(n,o.selectors,!1)&&(i??=[],fi(o)?i.unshift(o):i.push(o))}return i}function lO(t,n,e,i,r,o){let s=hn(t,n);dO(n[Ge],s,o,t.value,e,i,r)}function dO(t,n,e,i,r,o,s){if(o==null)s?.(o,i||"",r),t.removeAttribute(n,r,e);else{let a=s==null?bs(o):s(o,i||"",r);t.setAttribute(n,r,a,e)}}function uO(t,n,e,i,r,o){let s=o[n];if(s!==null)for(let a=0;a<s.length;a+=2){let c=s[a],l=s[a+1];Do(i,e,c,l)}}function fv(t,n,e,i,r){let o=st+e,s=n[J],a=r(s,n,t,i,e);n[o]=a,Is(t,!0);let c=t.type===2;return c?(JC(n[Ge],a,t),(cS()===0||Es(t))&&Os(a,n),lS()):Os(a,n),Kd()&&(!c||!Cu(t))&&sv(s,n,a,t),t}function hv(t){let n=t;return Fp()?Pp():(n=n.parent,Is(n,!1)),n}function fO(t,n){let e=t[ci];if(!e)return;let i;try{i=e.get(Nn,null)}catch(r){i=null}i?.(n)}function mv(t,n,e,i,r){let o=t.inputs?.[i],s=t.hostDirectiveInputs?.[i],a=!1;if(s)for(let c=0;c<s.length;c+=2){let l=s[c],d=s[c+1],f=n.data[l];Do(f,e[l],d,r),a=!0}if(o)for(let c of o){let l=e[c],d=n.data[c];Do(d,l,i,r),a=!0}return a}function hO(t,n,e,i,r,o){let s=null,a=null,c=null,l=!1,d=t.directiveToIndex.get(i.type);if(typeof d=="number"?s=d:[s,a,c]=d,a!==null&&c!==null&&t.hostDirectiveInputs&&Object.hasOwn(t.hostDirectiveInputs,r)){let f=t.hostDirectiveInputs[r];for(let h=0;h<f.length;h+=2){let m=f[h];if(m>=a&&m<=c){let p=n.data[m],_=f[h+1];Do(p,e[m],_,o),l=!0}else if(m>c)break}}return s!==null&&Object.hasOwn(i.inputs,r)&&(Do(i,e[s],r,o),l=!0),l}function mO(t,n){let e=En(n,t),i=e[J];pO(i,e);let r=e[jn];r!==null&&e[uo]===null&&(e[uo]=HC(r,e[ci])),ze(Pe.ComponentStart);try{pv(i,e,e[ht])}finally{ze(Pe.ComponentEnd,e[ht])}}function pO(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function pv(t,n,e){Gd(n);try{let i=t.viewQuery;i!==null&&lg(1,i,e);let r=t.template;r!==null&&p0(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[li]?.finishViewCreation(t),t.staticContentQueries&&UC(t,n),t.staticViewQueries&&lg(2,t.viewQuery,e);let o=t.components;o!==null&&gO(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[se]&=-5,Wd()}}function gO(t,n){for(let e=0;e<n.length;e++)mO(t,n[e])}function xc(t,n,e,i){let r=ie(null);try{let o=n.tView,a=t[se]&4096?4096:16,c=lv(t,o,e,a,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=t[n.index];c[vr]=l;let d=t[li];return d!==null&&(c[li]=d.createEmbeddedView(o)),pv(o,c,e),c}finally{ie(r)}}function Fs(t,n){return!n||n.firstChild===null||RC(t)}function pc(t,n,e,i,r=!1){if(t.type===3){let o=t.firstChild,s=o.next,a=Ft(n[o.index]),c=Ft(n[s.index]),l=a;for(;l!==null&&(i.push(l),l!==c);)l=l.nextSibling;return i}for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];if(o!==null)if(xn(o)){let a=o[mo];a!==o[jn]&&i.push(Ft(o)),o[se]&4||v0(o,i),i.push(a)}else i.push(Ft(o));let s=e.type;if(s&8)pc(t,n,e.child,i);else if(s&32){let a=tv(e,n),c;for(;c=a();)i.push(c)}else if(s&16){let a=d0(n,e);if(Array.isArray(a))i.push(...a);else{let c=ji(n[Yt]);pc(c[J],c,a,i,!0)}}e=r?e.projectionNext:e.next}return i}function v0(t,n){for(let e=ot;e<t.length;e++){let i=t[e],r=i[J].firstChild;r!==null&&pc(i[J],i,r,n)}}function y0(t){if(t[ho]!==null){for(let n of t[ho])n.impl.addSequence(n);t[ho].length=0}}var _0=[];function vO(t){return t[fn]??yO(t)}function yO(t){let n=_0.pop()??Object.create(bO);return n.lView=t,n}function _O(t){t.lView[fn]!==t&&(t.lView=null,_0.push(t))}var bO=W(y({},ir),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{vo(t.lView)},consumerOnSignalRead(){this.lView[fn]=this}});function wO(t){let n=t[fn]??Object.create(SO);return n.lView=t,n}var SO=W(y({},ir),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=ji(t.lView);for(;n&&!b0(n[J]);)n=ji(n);n&&Np(n)},consumerOnSignalRead(){this.lView[fn]=this}});function b0(t){return t.type!==2}function w0(t){if(t[Li]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[Li])if(i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()),t[Li]===null))return;n=e&&!!(t[se]&8192)}}var CO=100;function S0(t,n=0){let i=t[Vn].rendererFactory,r=!1;r||i.begin?.();try{DO(t,n)}finally{r||i.end?.()}}function DO(t,n){let e=Lp();try{Ka(!0),bg(t,n);let i=0;for(;oc(t);){if(i===CO)throw new b(103,!1);i++,bg(t,1)}}finally{Ka(e)}}function xO(t,n,e,i){if(go(n))return;let r=n[se],o=!1,s=!1;Gd(n);let a=!0,c=null,l=null;o||(b0(t)?(l=vO(n),c=Ri(l)):Bl()===null?(a=!1,l=wO(n),c=Ri(l)):n[fn]&&(sr(n[fn]),n[fn]=null));try{Ep(n),hS(t.bindingStartIndex),e!==null&&p0(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let m=t.preOrderCheckHooks;m!==null&&iu(n,m,null)}else{let m=t.preOrderHooks;m!==null&&ru(n,m,0,null),Wp(n,0)}if(s||EO(n),w0(n),C0(n,0),t.contentQueries!==null&&UC(t,n),!o)if(d){let m=t.contentCheckHooks;m!==null&&iu(n,m)}else{let m=t.contentHooks;m!==null&&ru(n,m,1),Wp(n,1)}IO(t,n);let f=t.components;f!==null&&x0(n,f,0);let h=t.viewQuery;if(h!==null&&lg(2,h,i),!o)if(d){let m=t.viewCheckHooks;m!==null&&iu(n,m)}else{let m=t.viewHooks;m!==null&&ru(n,m,2),Wp(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[Ld]){for(let m of n[Ld])m();n[Ld]=null}o||(y0(n),n[se]&=-73)}catch(d){throw o||vo(n),d}finally{l!==null&&(or(l,c),a&&_O(l)),Wd()}}function C0(t,n){for(let e=OC(t);e!==null;e=FC(e))for(let i=ot;i<e.length;i++){let r=e[i];D0(r,n)}}function EO(t){for(let n=OC(t);n!==null;n=FC(n)){if(!(n[se]&2))continue;let e=n[po];for(let i=0;i<e.length;i++){let r=e[i];Np(r)}}}function NO(t,n,e){ze(Pe.ComponentStart);let i=En(n,t);try{D0(i,e)}finally{ze(Pe.ComponentEnd,i[ht])}}function D0(t,n){Bd(t)&&bg(t,n)}function bg(t,n){let i=t[J],r=t[se],o=t[fn],s=!!(n===0&&r&16);if(s||=!!(r&64&&n===0),s||=!!(r&1024),s||=!!(o?.dirty&&as(o)),s||=!1,o&&(o.dirty=!1),t[se]&=-9217,s)xO(i,t,i.template,t[ht]);else if(r&8192){let a=ie(null);try{w0(t),C0(t,1);let c=i.components;c!==null&&x0(t,c,1),y0(t)}finally{ie(a)}}}function x0(t,n,e){for(let i=0;i<n.length;i++)NO(t,n[i],e)}function IO(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)_r(~r);else{let o=r,s=e[++i],a=e[++i];pS(s,o);let c=n[o];ze(Pe.HostBindingsUpdateStart,c);try{a(2,c)}finally{ze(Pe.HostBindingsUpdateEnd,c)}}}}finally{_r(-1)}}function gv(t,n){let e=Lp()?64:1088;for(t[Vn].changeDetectionScheduler?.notify(n);t;){t[se]|=e;let i=ji(t);if(Ns(t)&&!i)return t;t=i}return null}function E0(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function N0(t,n){let e=ot+n;if(e<t.length)return t[e]}function Ec(t,n,e,i=!0){let r=n[J];if(MO(r,n,t,e),i){let s=_g(e,t),a=n[Ge],c=a.parentNode(t[mo]);c!==null&&BA(r,t[Ut],a,n,c,s)}let o=n[uo];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function I0(t,n){let e=gc(t,n);return e!==void 0&&Mu(e[J],e),e}function gc(t,n){if(t.length<=ot)return;let e=ot+n,i=t[e];if(i){let r=i[vr];r!==null&&r!==t&&ov(r,i),n>0&&(t[e-1][Dn]=i[Dn]);let o=tc(t,ot+n);VA(i[J],i);let s=o[li];s!==null&&s.detachView(o[J]),i[Ct]=null,i[Dn]=null,i[se]&=-129}return i}function MO(t,n,e,i){let r=ot+i,o=e.length;i>0&&(e[r-1][Dn]=n),i<o-ot?(n[Dn]=e[r],pp(e,ot+i,n)):(e.push(n),n[Dn]=null),n[Ct]=e;let s=n[vr];s!==null&&e!==s&&M0(s,n);let a=n[li];a!==null&&a.insertView(t),Hd(n),n[se]|=128}function M0(t,n){let e=t[po],i=n[Ct];if(Bi(i))t[se]|=2;else{let r=i[Ct][Yt];n[Yt]!==r&&(t[se]|=2)}e===null?t[po]=[n]:e.push(n)}var Dr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[J];return pc(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[ht]}set context(n){this._lView[ht]=n}get destroyed(){return go(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[Ct];if(xn(n)){let e=n[rc],i=e?e.indexOf(this):-1;i>-1&&(gc(n,i),tc(e,i))}this._attachedToViewContainer=!1}Mu(this._lView[J],this._lView)}onDestroy(n){Ud(this._lView,n)}markForCheck(){gv(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[se]&=-129}reattach(){Hd(this._lView),this._lView[se]|=128}detectChanges(){this._lView[se]|=1024,S0(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new b(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Ns(this._lView),e=this._lView[vr];e!==null&&!n&&ov(e,this._lView),a0(this._lView[J],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new b(902,!1);this._appRef=n;let e=Ns(this._lView),i=this._lView[vr];i!==null&&!e&&M0(i,this._lView),Hd(this._lView)}};var gt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=TO;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=xc(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new Dr(o)}}return t})();function TO(){return Au(wt(),ae())}function Au(t,n){return t.type&4?new gt(n,t,js(t,n)):null}function Vs(t,n,e,i,r){let o=t.data[n];if(o===null)o=kO(t,n,e,i,r),mS()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let s=dS();o.injectorIndex=s===null?-1:s.injectorIndex}return Is(o,!0),o}function kO(t,n,e,i,r){let o=Op(),s=Fp(),a=s?o:o&&o.parent,c=t.data[n]=AO(t,a,e,n,i,r);return RO(t,c,o,s),c}function RO(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function AO(t,n,e,i,r,o){let s=n?n.injectorIndex:-1,a=0;return kp()&&(a|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,namespace:Hp(),attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function OO(t){let n=t[Cp]??[],i=t[Ct][Ge],r=[];for(let o of n)o.data[jC]!==void 0?r.push(o):FO(o,i);t[Cp]=r}function FO(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[LC];for(;e<r;){let o=i.nextSibling;XC(n,i,!1),i=o,e++}}}var PO=()=>null,LO=()=>null;function uu(t,n){return PO(t,n)}function T0(t,n,e){return LO(t,n,e)}var k0=class{},at=class{},He=class{destroyNode=null;static __NG_ELEMENT_ID__=()=>jO()};function jO(){let t=ae(),n=wt(),e=En(n.index,t);return(Bi(e)?e:t)[Ge]}var R0=(()=>{class t{static \u0275prov=j({token:t,providedIn:"root",factory:()=>null})}return t})();function A0(t){return t.debugInfo?.className||t.type.name||null}var su={},fu=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,su,i);return r!==su||e===su?r:this.parentInjector.get(n,e,i)}};function vv(t){return Ou(t)?Array.isArray(t)||!(t instanceof Map)&&Symbol.iterator in t:!1}function O0(t,n){if(Array.isArray(t))for(let e=0;e<t.length;e++)n(t[e]);else{let e=t[Symbol.iterator](),i;for(;!(i=e.next()).done;)n(i.value)}}function Ou(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function VO(t,n,e){return t[n]=e}function yi(t,n,e){if(e===gn)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function So(t,n,e){return function i(r){let o=i.__ngNativeEl__;o!==void 0&&OR(r,o);let s=Hi(t)?En(t.index,n):n;gv(s,5);let a=n[ht],c=ZS(n,a,e,r),l=i.__ngNextListenerFn__;for(;l;)c=ZS(n,a,l,r)&&c,l=l.__ngNextListenerFn__;return c}}function ZS(t,n,e,i){let r=ie(null);try{return ze(Pe.OutputStart,n,e),e(i)!==!1}catch(o){return fO(t,o),!1}finally{ze(Pe.OutputEnd,n,e),ie(r)}}function yv(t,n,e,i,r,o,s,a){let c=Es(t),l=!1,d=null;if(!i&&c&&(d=HO(n,e,o,t.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,l=!0}else{let f=hn(t,e),h=i?i(f):f;PR(e,h,o,a),i||(a.__ngNativeEl__=f);let m=r.listen(h,o,a);if(!BO(o)){let p=i?_=>i(Ft(_[t.index])):t.index;F0(p,n,e,o,a,m,!1)}}return l}function BO(t){return t.startsWith("animation")||t.startsWith("transition")}function HO(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===e&&r[o+1]===i){let a=n[Ds],c=r[o+2];return a&&a.length>c?a[c]:null}typeof s=="string"&&(o+=2)}return null}function F0(t,n,e,i,r,o,s){let a=n.firstCreatePass?Mp(n):null,c=Ip(e),l=c.length;c.push(r,o),a&&a.push(i,t,l,(l+1)*(s?-1:1))}function XS(t,n,e,i,r){let o=null,s=null,a=null,c=!1,l=t.directiveToIndex.get(e.type);if(typeof l=="number"?o=l:[o,s,a]=l,s!==null&&a!==null&&t.hostDirectiveOutputs&&Object.hasOwn(t.hostDirectiveOutputs,i)){let d=t.hostDirectiveOutputs[i];for(let f=0;f<d.length;f+=2){let h=d[f];if(h>=s&&h<=a)c=!0,hu(t,n,h,d[f+1],i,r);else if(h>a)break}}return Object.hasOwn(e.outputs,i)&&(c=!0,hu(t,n,o,i,i,r)),c}function hu(t,n,e,i,r,o){let s=n[e],a=n[J],l=a.data[e].outputs[i],f=s[l].subscribe(o);F0(t.index,a,n,r,o,f,!0)}function xr(){UO()}function UO(){let t=ae(),n=Xe(),e=wt();if(n.firstCreatePass&&$O(n,e),e.controlDirectiveIndex===-1)return;In("NgSignalForms");let i=t[e.controlDirectiveIndex];n.data[e.controlDirectiveIndex].controlDef.create(i,new mu(t,n,e))}function Er(){zO()}function zO(){let t=ae(),n=Xe(),e=Ms();if(e.controlDirectiveIndex===-1)return;let i=n.data[e.controlDirectiveIndex].controlDef,r=t[e.controlDirectiveIndex];i.update(r,new mu(t,n,e))}var mu=class{lView;tView;tNode;hasPassThrough;constructor(n,e,i){this.lView=n,this.tView=e,this.tNode=i,this.hasPassThrough=!!(i.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get nativeElement(){return hn(this.tNode,this.lView)}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(n,e){let i=this.tView.data[this.tNode.customControlIndex];XS(this.tNode,this.lView,i,n,So(this.tNode,this.lView,e))}listenToCustomControlModel(n){let e=this.tNode.flags&1024?"valueChange":"checkedChange",i=this.tView.data[this.tNode.customControlIndex];XS(this.tNode,this.lView,i,e,So(this.tNode,this.lView,n))}listenToDom(n,e){yv(this.tNode,this.tView,this.lView,void 0,this.lView[Ge],n,e,So(this.tNode,this.lView,e))}setInputOnDirectives(n,e){let i=this.tNode.inputs?.[n],r=this.tNode.hostDirectiveInputs?.[n];if(!i&&!r)return!1;let o=!1;if(i)for(let s of i){if(s===this.tNode.controlDirectiveIndex)continue;let a=this.tView.data[s],c=this.lView[s];Do(a,c,n,e),o=!0}if(r)for(let s=0;s<r.length;s+=2){let a=r[s];if(a===this.tNode.controlDirectiveIndex)continue;let c=r[s+1],l=this.tView.data[a],d=this.lView[a];Do(l,d,c,e),o=!0}return o}setCustomControlModelInput(n){let e=this.tView.data[this.tNode.customControlIndex],i=this.tNode.flags&1024?"value":"checked";hO(this.tNode,this.tView,this.lView,e,i,n)}customControlHasInput(n){if(this.tNode.customControlIndex===-1)return!1;let e=this.tView.data[this.tNode.customControlIndex];return(e.signalFormsInputPresence??=this._buildCustomControlInputCache(e))[n]===!0}_buildCustomControlInputCache(n){let e={};for(let i in n.inputs)e[i]=!0;if(n.hostDirectives!==null){let i=[...n.hostDirectives];for(;i.length>0;){let r=i.shift();if(typeof r!="function"){for(let s in r.inputs)e[r.inputs[s]]=!0;let o=JS(r.directive);o!==null&&i.push(...o);continue}for(let o of r()){if(typeof o=="function")continue;if(o.inputs)for(let a=0;a<o.inputs.length;a+=2){let c=o.inputs[a+1]||o.inputs[a];e[c]=!0}let s=JS(o.directive);s!==null&&i.push(...s)}}}return e}};function JS(t){return typeof t=="function"&&"\u0275dir"in t?t.\u0275dir.hostDirectives??null:null}function $O(t,n,e){for(let r=n.directiveStart;r<n.directiveEnd;r++)if(t.data[r].controlDef){n.controlDirectiveIndex=r;break}if(n.controlDirectiveIndex===-1)return;let i=t.data[n.controlDirectiveIndex].controlDef;if(i.passThroughInput&&(n.inputs?.[i.passThroughInput]?.length??0)>1){n.flags|=4096;return}qO(t,n)}function qO(t,n){for(let e=n.directiveStart;e<n.directiveEnd;e++){let i=t.data[e];if(!(n.directiveToIndex&&!n.directiveToIndex.has(i.type))){if(eC(i,"value")){n.flags|=1024,n.customControlIndex=e;return}if(eC(i,"checked")){n.flags|=2048,n.customControlIndex=e;return}}}if(n.hostDirectiveInputs!==null&&n.hostDirectiveOutputs!==null&&n.directiveToIndex!==null){let e=(i,r)=>{let o=n.hostDirectiveInputs[i],s=n.hostDirectiveOutputs[i+"Change"];if(!o||!s)return!1;for(let a=0;a<o.length;a+=2){let c=o[a];for(let l=0;l<s.length;l+=2){let d=s[l];if(c===d)for(let f of n.directiveToIndex.values()){if(!Array.isArray(f))continue;let[h,m,p]=f;if(c>=m&&c<=p)return n.flags|=r,n.customControlIndex=h,!0}}}return!1};if(e("value",1024)||e("checked",2048))return}}function eC(t,n){return GO(t,n)&&WO(t,n+"Change")}function GO(t,n){return n in t.inputs}function WO(t,n){return n in t.outputs}var wg=Symbol("BINDING");var No=new v("");function pu(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let s=0;s<n.length;s++){let a=n[s];if(typeof a=="number")o=a;else if(o==1)r=Td(r,a);else if(o==2){let c=a,l=n[++s];i=Td(i,c+": "+l+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function be(t,n=0){let e=ae();if(e===null)return M(t,n);let i=wt();return NC(i,e,Ot(t),n)}function Io(){let t="invalid";throw new Error(t)}function P0(t,n,e,i,r){let o=i===null?null:{"":-1},s=r(t,e);if(s!==null){let a=s,c=null,l=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,c,l]=d.resolveHostDirectives(s);break}QO(t,n,e,a,o,c,l)}o!==null&&i!==null&&KO(e,i,o)}function KO(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new b(-301,!1);i.push(n[r],o)}}function YO(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function QO(t,n,e,i,r,o,s){let a=i.length,c=null;for(let h=0;h<a;h++){let m=i[h];c===null&&fi(m)&&(c=m,YO(t,e,h)),og(du(e,n),t,m.type)}nF(e,t.data.length,a),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let h=0;h<a;h++){let m=i[h];m.providersResolver&&m.providersResolver(m)}let l=!1,d=!1,f=h0(t,n,a,null);a>0&&(e.directiveToIndex=new Map);for(let h=0;h<a;h++){let m=i[h];if(e.mergedAttrs=As(e.mergedAttrs,m.hostAttrs),XO(t,e,n,f,m),tF(f,m,r),s!==null&&s.has(m)){let[_,x]=s.get(m);e.directiveToIndex.set(m.type,[f,_+e.directiveStart,x+e.directiveStart])}else(o===null||!o.has(m))&&e.directiveToIndex.set(m.type,f);m.contentQueries!==null&&(e.flags|=4),(m.hostBindings!==null||m.hostAttrs!==null||m.hostVars!==0)&&(e.flags|=64);let p=m.type.prototype;!l&&(p.ngOnChanges||p.ngOnInit||p.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),l=!0),!d&&(p.ngOnChanges||p.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),f++}ZO(t,e,o)}function ZO(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))tC(0,n,r,i),tC(1,n,r,i),iC(n,i,!1);else{let o=e.get(r);nC(0,n,o,i),nC(1,n,o,i),iC(n,i,!0)}}}function tC(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(Object.hasOwn(r,o)){let s;t===0?s=n.inputs??={}:s=n.outputs??={},s[o]??=[],s[o].push(i),L0(n,o)}}function nC(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(Object.hasOwn(r,o)){let s=r[o],a;t===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),L0(n,s)}}function L0(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function iC(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||ev(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!e&&Object.hasOwn(r,c)){let l=r[c];for(let d of l)if(d===n){s??=[],s.push(c,i[a+1]);break}}else if(e&&Object.hasOwn(o,c)){let l=o[c];for(let d=0;d<l.length;d+=2)if(l[d]===n){s??=[],s.push(l[d+1],i[a+1]);break}}a+=2}t.initialInputs??=[],t.initialInputs.push(s)}function XO(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=so(r.type,!0)),s=new Co(o,fi(r),be,null);t.blueprint[i]=s,e[i]=s,JO(t,n,i,h0(t,e,r.hostVars,gn),r)}function JO(t,n,e,i,r){let o=r.hostBindings;if(o){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~n.index;eF(s)!=a&&s.push(a),s.push(e,i,o)}}function eF(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function tF(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;fi(n)&&(e[""]=t)}}function nF(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function _v(t,n,e,i,r,o,s,a){let c=n[J],l=c.consts,d=mn(l,s),f=Vs(c,t,e,i,d);return o&&P0(c,n,f,mn(l,a),r),f.mergedAttrs=As(f.mergedAttrs,f.attrs),f.attrs!==null&&pu(f,f.attrs,!1),f.mergedAttrs!==null&&pu(f,f.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,f),f}function bv(t,n){yC(t,n),Dp(n)&&t.queries.elementEnd(n)}function iF(t,n,e,i,r,o){let s=n.consts,a=mn(s,r),c=Vs(n,t,e,i,a);if(c.mergedAttrs=As(c.mergedAttrs,c.attrs),o!=null){let l=mn(s,o);c.localNames=[];for(let d=0;d<l.length;d+=2)c.localNames.push(l[d],-1)}return c.attrs!==null&&pu(c,c.attrs,!1),c.mergedAttrs!==null&&pu(c,c.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,c),c}var j0=typeof ShadowRoot<"u",rF=typeof Document<"u";function oF(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&ku.SignalBased)!==0};return r&&(o.transform=r),o})}function sF(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function aF(t,n,e){let i=n instanceof Be?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new fu(e,i):e}function cF(t){let n=t.get(at,null);if(n===null)throw new b(407,!1);let e=t.get(R0,null),i=t.get(ai,null),r=t.get(Gn,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function lF(t,n){let e=V0(t);return QC(n,e,e==="svg"?_s:e==="math"?jd:null)}function dF(t){if((t&&"localName"in t&&typeof t.localName=="string"?t.localName:t?.tagName)?.toLowerCase()==="script")throw new b(905,!1)}function V0(t){return(t.selectors[0][0]||"div").toLowerCase()}var xo=class{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=oF(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=sF(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=xA(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,s){ze(Pe.DynamicComponentStart);let a=ie(null);try{let c=this.componentDef,l=aF(c,r||this.ngModule,n),d=cF(l),f=d.tracingService;return f&&f.componentCreate?f.componentCreate(A0(c),()=>this.createComponentRef(d,l,e,i,o,s)):this.createComponentRef(d,l,e,i,o,s)}finally{ie(a)}}createComponentRef(n,e,i,r,o,s){let a=this.componentDef,c=uF(r,a,s,o),l=n.rendererFactory.createRenderer(null,a),d=r?eO(l,r,a.encapsulation,e):lF(a,l);dF(d);let f=e.get(No,null),h=fF(d,()=>e.get(K,null)??zg());f&&f.addHost(h);let m=s?.some(rC)||o?.some(x=>typeof x!="function"&&x.bindings.some(rC)),p=lv(null,c,null,512|f0(a),null,null,n,l,e,null,HC(d,e,!0));f&&j0&&h instanceof ShadowRoot&&Ud(p,()=>{f.removeHost(h)}),p[st]=d,Gd(p);let _=null;try{let x=_v(st,p,2,"#host",()=>c.directiveRegistry,!0,0);JC(l,d,x),Os(d,p),Ru(c,p,x),qg(c,x,p),bv(c,x),i!==void 0&&mF(x,this.ngContentSelectors,i),_=En(x.index,p),p[ht]=_[ht],pv(c,p,null)}catch(x){throw _!==null&&ag(_),ag(p),x}finally{ze(Pe.DynamicComponentEnd),Wd()}return new gu(this.componentType,p,!!m)}};function uF(t,n,e,i){let r=t?["ng-version","22.1.3"]:EA(n.selectors[0]),o=null,s=null,a=0;if(e)for(let d of e)a+=d[wg].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let f=i[d];if(typeof f!="function")for(let h of f.bindings){a+=h[wg].requiredVars;let m=d+1;h.create&&(h.targetIdx=m,(o??=[]).push(h)),h.update&&(h.targetIdx=m,(s??=[]).push(h))}}let c=[n];if(i)for(let d of i){let f=typeof d=="function"?d:d.type,h=fp(f);c.push(h)}return cv(0,null,hF(o,s),1,a,c,null,null,null,[r],null)}function fF(t,n){let e=t.getRootNode?.();return rF&&e instanceof Document?e.head:e&&j0&&e instanceof ShadowRoot?e:n().head}function hF(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function rC(t){let n=t[wg].kind;return n==="input"||n==="twoWay"}var gu=class extends k0{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=Vd(e[J],st),this.location=js(this._tNode,e),this.instance=En(this._tNode.index,e)[ht],this.hostView=this.changeDetectorRef=new Dr(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=mv(i,r[J],r,n,e);this.previousInputValues.set(n,e);let s=En(i.index,r);gv(s,1)}get injector(){return new Sr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function mF(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var et=(()=>{class t{static __NG_ELEMENT_ID__=pF}return t})();function pF(){let t=wt();return B0(t,ae())}var Sg=class t extends et{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return js(this._hostTNode,this._hostLView)}get injector(){return new Sr(this._hostTNode,this._hostLView)}get parentInjector(){let n=Bg(this._hostTNode,this._hostLView);if(wC(n)){let e=lu(n,this._hostLView),i=cu(n),r=e[J].data[i+8];return new Sr(r,e)}else return new Sr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=oC(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-ot}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=uu(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(e||{},o,s);return this.insertImpl(a,r,Fs(this._hostTNode,s)),a}createComponent(n,e,i,r,o,s,a){let c,l=e||{};c=l.index,i=l.injector,r=l.projectableNodes,o=l.environmentInjector||l.ngModuleRef,s=l.directives,a=l.bindings;let d=new xo(Vi(n)),f=i||this.parentInjector;if(!o&&d.ngModule==null){let I=this.parentInjector.get(Be,null);I&&(o=I)}let h=Vi(d.componentType??{}),m=uu(this._lContainer,h?.id??null),p=m?.firstChild??null,_=d.create(f,r,p,o,s,a);return this.insertImpl(_.hostView,c,Fs(this._hostTNode,m)),_}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(rS(r)){let a=this.indexOf(n);if(a!==-1)this.detach(a);else{let c=r[Ct],l=new t(c,c[Ut],c[Ct]);l.detach(l.indexOf(n))}}let o=this._adjustIndex(e),s=this._lContainer;return Ec(s,r,o,i),n.attachToViewContainerRef(),pp(Qp(s),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=oC(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=gc(this._lContainer,e);i&&(tc(Qp(this._lContainer),e),Mu(i[J],i))}detach(n){let e=this._adjustIndex(n,-1),i=gc(this._lContainer,e);return i&&tc(Qp(this._lContainer),e)!=null?new Dr(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function oC(t){return t[rc]}function Qp(t){return t[rc]||(t[rc]=[])}function B0(t,n){let e,i=n[t.index];return xn(i)?e=i:(e=E0(i,n,null,t),n[t.index]=e,dv(n,e)),vF(e,n,t,i),new Sg(e,t,n)}function gF(t,n){let e=t[Ge],i=e.createComment(""),r=hn(n,t),o=e.parentNode(r);return wo(e,o,i,e.nextSibling(r),!1),i}var vF=bF,yF=()=>!1;function _F(t,n,e){return yF(t,n,e)}function bF(t,n,e,i){if(t[mo])return;let r;e.type&8?r=Ft(i):r=gF(n,e),t[mo]=r}var Cg=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Dg=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let s=e.getByIndex(o),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)Sv(n,e).matches!==null&&this.queries[e].setDirty()}},vu=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=xF(n):this.predicate=n}},xg=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Eg=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,wF(e,o)),this.matchTNodeWithReadOption(n,e,ou(e,n,o,!1,!1))}else i===gt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,ou(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===L||r===et||r===gt&&e.type&4)this.addMatch(e.index,-2);else{let o=ou(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function wF(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function SF(t,n){return t.type&11?js(t,n):t.type&4?Au(t,n):null}function CF(t,n,e,i){return e===-1?SF(n,t):e===-2?DF(t,n,i):hc(t,t[J],e,n)}function DF(t,n,e){if(e===L)return js(n,t);if(e===gt)return Au(n,t);if(e===et)return B0(n,t)}function H0(t,n,e,i){let r=n[li].queries[i];if(r.matches===null){let o=t.data,s=e.matches,a=[];for(let c=0;s!==null&&c<s.length;c+=2){let l=s[c];if(l<0)a.push(null);else{let d=o[l];a.push(CF(n,d,s[c+1],e.metadata.read))}}r.matches=a}return r.matches}function Ng(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let s=H0(t,n,r,e);for(let a=0;a<o.length;a+=2){let c=o[a];if(c>0)i.push(s[a/2]);else{let l=o[a+1],d=n[-c];for(let f=ot;f<d.length;f++){let h=d[f];h[vr]===h[Ct]&&Ng(h[J],h,l,i)}if(d[po]!==null){let f=d[po];for(let h=0;h<f.length;h++){let m=f[h];Ng(m[J],m,l,i)}}}}}return i}function wv(t,n){return t[li].queries[n].queryList}function U0(t,n,e){let i=new pn((e&4)===4);return aS(t,n,i,i.destroy),(n[li]??=new Dg).queries.push(new Cg(i))-1}function z0(t,n,e){let i=Xe();return i.firstCreatePass&&(q0(i,new vu(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),U0(i,ae(),n)}function $0(t,n,e,i){let r=Xe();if(r.firstCreatePass){let o=wt();q0(r,new vu(n,e,i),o.index),EF(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return U0(r,ae(),e)}function xF(t){return t.split(",").map(n=>n.trim())}function q0(t,n,e){t.queries===null&&(t.queries=new xg),t.queries.track(new Eg(n,e))}function EF(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function Sv(t,n){return t.queries.getByIndex(n)}function G0(t,n){let e=t[J],i=Sv(e,n);return i.crossesNgTemplate?Ng(e,t,n,[]):H0(e,t,i,n)}function W0(t,n,e){let i,r=Ra(()=>{i._dirtyCounter();let o=NF(i,t);if(n&&o===void 0)throw new b(-951,!1);return o});return i=r[dt],i._dirtyCounter=H(0),i._flatValue=void 0,r}function Cv(t){return W0(!0,!1,t)}function Dv(t){return W0(!0,!0,t)}function K0(t,n){let e=t[dt];e._lView=ae(),e._queryIndex=n,e._queryList=wv(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function NF(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[se]&4)return n?void 0:Bt;let r=wv(e,i),o=G0(e,i);return r.reset(o,kC),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}function $i(t){return!!t&&typeof t.then=="function"}function xv(t){return!!t&&typeof t.subscribe=="function"}var gi=class{},Fu=class{};var vc=class extends gi{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=Bw(n);this._bootstrapComponents=mA(o.bootstrap),this._r3Injector=Up(n,e,[{provide:gi,useValue:this},...i],Za(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},yc=class extends Fu{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new vc(this.moduleType,n,[])}};function Y0(t,n,e){return new vc(t,n,e,!1)}var yu=class extends gi{injector;instance=null;constructor(n){super();let e=new co([...n.providers,{provide:gi,useValue:this}],n.parent||Cs(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Bs(t,n,e=null){return new yu({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var IF=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=vp(!1,e.type),r=i.length>0?Bs([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=j({token:t,providedIn:"environment",factory:()=>new t(M(Be))})}return t})();function R(t){return bc(()=>{let n=Q0(t),e=W(y({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection!==Hg.Eager,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(IF).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||$n.Emulated,styles:t.styles||Bt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&In("NgStandalone"),Z0(e);let i=t.dependencies;return e.directiveDefs=sC(i,MF),e.pipeDefs=sC(i,Hw),e.id=RF(e),e})}function MF(t){return Vi(t)||fp(t)}function F(t){return bc(()=>({type:t.type,bootstrap:t.bootstrap||Bt,declarations:t.declarations||Bt,imports:t.imports||Bt,exports:t.exports||Bt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function TF(t,n){if(t==null)return pr;let e={};for(let i in t)if(Object.hasOwn(t,i)){let r=t[i],o,s,a,c;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,c=r[3]||null):(o=r,s=r,a=ku.None,c=null),e[o]=[i,a,c],n[o]=s}return e}function kF(t){if(t==null)return pr;let n={};for(let e in t)Object.hasOwn(t,e)&&(n[t[e]]=e);return n}function E(t){return bc(()=>{let n=Q0(t);return Z0(n),n})}function Q0(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||pr,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||Bt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,signalFormsInputPresence:null,inputs:TF(t.inputs,n),outputs:kF(t.outputs),debugInfo:null}}function Z0(t){t.features?.forEach(n=>n(t))}function sC(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function RF(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}var Ev=new v("");function Hs(t){return Ln([{provide:Ev,multi:!0,useValue:t}])}var Nv=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(Ev,{optional:!0})??[];injector=u(le);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=bt(this.injector,r);if($i(o))e.push(o);else if(xv(o)){let s=new Promise((a,c)=>{o.subscribe({complete:a,error:c})});e.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),Ig=new Map,AF=new Set;function Iv(t){return Te(this,null,function*(){let n=Ig;Ig=new Map;let e=new Map;function i(o){let s=e.get(o);if(s)return s;let a=t(o).then(c=>OF(o,c));return e.set(o,a),a}let r=Array.from(n).map(a=>Te(null,[a],function*([o,s]){if(s.styleUrl&&s.styleUrls?.length)throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple");let c=[];s.templateUrl&&c.push(i(s.templateUrl).then(h=>{s.template=h}));let l=typeof s.styles=="string"?[s.styles]:s.styles??[];s.styles=l;let{styleUrl:d,styleUrls:f}=s;if(d&&(f=[d],s.styleUrl=void 0),f?.length){let h=Promise.all(f.map(m=>i(m))).then(m=>{l.push(...m),s.styleUrls=void 0});c.push(h)}yield Promise.all(c),AF.delete(o)}));yield Promise.all(r)})}function X0(){return Ig.size===0}function OF(t,n){return Te(this,null,function*(){if(typeof n=="string")return n;if(n.status!==void 0&&n.status!==200)throw new b(918,!1);return n.text()})}function Mv(t){return n=>{n.controlDef={create:(e,i)=>{e?.\u0275ngControlCreate(i)},update:(e,i)=>{e?.\u0275ngControlUpdate?.(i)},passThroughInput:t}}}function FF(t){return Object.getPrototypeOf(t.prototype).constructor}function re(t){let n=FF(t.type),e=!0,i=[t];for(;n&&n!==Function.prototype&&n!==Object.prototype;){let r,o=Object.hasOwn(n,Ja)?n[Ja]:void 0,s=Object.hasOwn(n,ec)?n[ec]:void 0;if(fi(t))r=o??s;else{if(o)throw new b(903,!1);r=s}if(r){if(e){i.push(r);let c=t;c.inputs=Zp(t.inputs),c.declaredInputs=Zp(t.declaredInputs),c.outputs=Zp(t.outputs);let l=r.hostBindings;l&&BF(t,l);let d=r.viewQuery,f=r.contentQueries;if(d&&jF(t,d),f&&VF(t,f),PF(t,r),Vw(t.outputs,r.outputs),fi(r)&&r.data.animation){let h=t.data;h.animation=(h.animation||[]).concat(r.data.animation)}}let a=r.features;if(a)for(let c=0;c<a.length;c++){let l=a[c];l&&l.ngInherit&&l(t),l===re&&(e=!1)}}n=Object.getPrototypeOf(n)}LF(i)}function PF(t,n){for(let e in n.inputs){if(!Object.hasOwn(n.inputs,e)||Object.hasOwn(t.inputs,e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function LF(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=As(r.hostAttrs,e=As(e,r.hostAttrs))}}function Zp(t){return t===pr?{}:t===Bt?[]:t}function jF(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function VF(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function BF(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function J0(t,n,e,i,r,o,s,a){if(e.firstCreatePass){t.mergedAttrs=As(t.mergedAttrs,t.attrs);let d=t.tView=cv(2,t,r,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}a&&(t.flags|=a),Is(t,!1);let c=UF(e,n,t,i);Kd()&&sv(e,n,c,t),Os(c,n);let l=E0(c,n,c,t);n[i+st]=l,dv(n,l),_F(l,t,n)}function HF(t,n,e,i,r,o,s,a,c,l,d){let f=e+st,h;return n.firstCreatePass?(h=Vs(n,f,4,s||null,a||null),zd()&&P0(n,t,h,mn(n.consts,l),uv),yC(n,h)):h=n.data[f],J0(h,t,n,e,i,r,o,c),Es(h)&&Ru(n,t,h),l!=null&&Dc(t,h,d),h}function Ps(t,n,e,i,r,o,s,a,c,l,d){let f=e+st,h;if(n.firstCreatePass){if(h=Vs(n,f,4,s||null,a||null),l!=null){let m=mn(n.consts,l);h.localNames=[];for(let p=0;p<m.length;p+=2)h.localNames.push(m[p],-1)}}else h=n.data[f];return J0(h,t,n,e,i,r,o,c),l!=null&&Dc(t,h,d),h}function Le(t,n,e,i,r,o,s,a){let c=ae(),l=Xe(),d=mn(l.consts,o);return HF(c,l,t,n,e,i,r,d,void 0,s,a),Le}function Pu(t,n,e,i,r,o,s,a){let c=ae(),l=Xe(),d=mn(l.consts,o);return Ps(c,l,t,n,e,i,r,d,void 0,s,a),Pu}var UF=zF;function zF(t,n,e,i){return cc(!0),n[Ge].createComment("")}var Lu=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();var ju=new v(""),Us=new v(""),Tv=new v("USE_PENDING_TASKS",{providedIn:"root",factory:()=>typeof Zone>"u"}),Nc=(()=>{class t{_ngZone;registry;_isZoneStable=!0;_callbacks=[];_taskTrackingZone=null;_destroyRef;pendingTasksInternal=u(mi);_usePendingTasks=u(Tv);constructor(e,i,r){this._ngZone=e,this.registry=i,bp()&&(this._destroyRef=u(Ze,{optional:!0})??void 0),kv||(eD(r),r.addToWindow(i)),this._watchAngularEvents(),e.run(()=>{this._taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){let e=this._ngZone.onUnstable.subscribe({next:()=>{this._isZoneStable=!1}}),i,r;this._ngZone.runOutsideAngular(()=>{this._usePendingTasks&&(i=this.pendingTasksInternal.hasPendingTasksObservable.subscribe(()=>{this.isStable()&&this._ngZone.runOutsideAngular(()=>{this._runCallbacksIfReady()})})),r=this._ngZone.onStable.subscribe({next:()=>{O.assertNotInAngularZone(),queueMicrotask(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})}),this._destroyRef?.onDestroy(()=>{e.unsubscribe(),i?.unsubscribe(),r.unsubscribe()})}isStable(){return this._isZoneStable&&!this._ngZone.hasPendingMacrotasks&&(!this._usePendingTasks||!this.pendingTasksInternal.hasPendingTasks)}_runCallbacksIfReady(){if(this.isStable())queueMicrotask(()=>{for(;this._callbacks.length!==0;){let e=this._callbacks.pop();clearTimeout(e.timeoutId),e.doneCb()}});else{let e=this.getPendingTasks();this._callbacks=this._callbacks.filter(i=>i.updateCb&&i.updateCb(e)?(clearTimeout(i.timeoutId),!1):!0)}}getPendingTasks(){return this._taskTrackingZone?this._taskTrackingZone.macroTasks.map(e=>({source:e.source,creationLocation:e.creationLocation,data:e.data})):[]}addCallback(e,i,r){let o=-1;i&&i>0&&(o=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==o),e()},i)),this._callbacks.push({doneCb:e,timeoutId:o,updateCb:r})}whenStable(e,i,r){if(r&&!this._taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(e,i,r),this._runCallbacksIfReady()}registerApplication(e){this.registry.registerApplication(e,this)}unregisterApplication(e){this.registry.unregisterApplication(e)}findProviders(e,i,r){return[]}static \u0275fac=function(i){return new(i||t)(M(O),M(Ic),M(Us))};static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})(),Ic=(()=>{class t{_applications=new Map;registerApplication(e,i){this._applications.set(e,i)}unregisterApplication(e){this._applications.delete(e)}unregisterAllApplications(){this._applications.clear()}getTestability(e){return this._applications.get(e)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(e,i=!0){return kv?.findTestabilityInTree(this,e,i)??null}static \u0275fac=function(i){return new(i||t)};static \u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function eD(t){kv=t}var kv,Mc=new v("");function tD(){Nm(()=>{let t="";throw new b(600,t)})}var $F=10;function Rv(t,n){return Array.isArray(n)?n.reduce(Rv,t):y(y({},t),n)}var St=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(Nn);afterRenderManager=u(Nu);zonelessEnabled=u(lc);rootEffectScheduler=u(Zd);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new N;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(mi);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(ce(e=>!e))}constructor(){u(Gn,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(Be);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=le.NULL){return this._injector.get(O).run(()=>{if(ze(Pe.BootstrapComponentStart),!this._injector.get(Nv).done){let I="";throw new b(405,I)}let a=Vi(e),c=this._injector.get(gi),l=new xo(a,c);this.componentTypes.push(e);let{hostElement:d,directives:f,bindings:h}=qF(i),m=d||l.selector,p=l.create(r,[],m,c.injector,f,h),_=p.location.nativeElement,x=p.injector.get(ju,null);return x?.registerApplication(_),p.onDestroy(()=>{this.detachView(p.hostView),fc(this.components,p),x?.unregisterApplication(_)}),this._loadComponent(p),ze(Pe.BootstrapComponentEnd,p),p})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){ze(Pe.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Eu.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw ze(Pe.ChangeDetectionEnd),new b(101,!1);let e=ie(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,ie(e),this.afterTick.next(),ze(Pe.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(at,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<$F;){ze(Pe.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{ze(Pe.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!oc(r))continue;let o=i&&!this.zonelessEnabled?0:1;S0(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>oc(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;fc(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Mc,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>fc(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new b(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();function qF(t){return t===void 0||typeof t=="string"||t instanceof Element?{hostElement:t}:t}function fc(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function fe(t,n,e,i){let r=ae(),o=yr();if(yi(r,o,n)){let s=Xe(),a=Ms();lO(a,r,t,n,e,i)}return fe}var Mg=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let s=this.detach(i);this.attach(i,o),this.attach(r,s)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function Xp(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function GF(t,n,e,i){let r,o,s=0,a=t.length-1,c=void 0;if(Array.isArray(n)){ie(i);let l=n.length-1;for(ie(null);s<=a&&s<=l;){let d=t.at(s),f=n[s],h=Xp(s,d,s,f,e);if(h!==0){h<0&&t.updateValue(s,f),s++;continue}let m=t.at(a),p=n[l],_=Xp(a,m,l,p,e);if(_!==0){_<0&&t.updateValue(a,p),a--,l--;continue}let x=e(s,d),I=e(a,m),T=e(s,f);if(Object.is(T,I)){let Q=e(l,p);Object.is(Q,x)?(t.swap(s,a),t.updateValue(a,p),l--,a--):t.move(a,s),t.updateValue(s,f),s++;continue}if(r??=new _u,o??=cC(t,s,a,e),Tg(t,r,s,T))t.updateValue(s,f),s++,a++;else if(o.has(T))r.set(x,t.detach(s)),a--;else{let Q=t.create(s,n[s]);t.attach(s,Q),s++,a++}}for(;s<=l;)aC(t,r,e,s,n[s]),s++}else if(n!=null){ie(i);let l=n[Symbol.iterator]();ie(null);let d=l.next();for(;!d.done&&s<=a;){let f=t.at(s),h=d.value,m=Xp(s,f,s,h,e);if(m!==0)m<0&&t.updateValue(s,h),s++,d=l.next();else{r??=new _u,o??=cC(t,s,a,e);let p=e(s,h);if(Tg(t,r,s,p))t.updateValue(s,h),s++,a++,d=l.next();else if(!o.has(p))t.attach(s,t.create(s,h)),s++,a++,d=l.next();else{let _=e(s,f);r.set(_,t.detach(s)),a--}}}for(;!d.done;)aC(t,r,e,t.length,d.value),d=l.next()}for(;s<=a;)t.destroy(t.detach(a--));r?.forEach(l=>{t.destroy(l)})}function Tg(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function aC(t,n,e,i,r){if(Tg(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function cC(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var _u=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function we(t,n,e,i,r,o,s,a){In("NgControlFlow");let c=ae(),l=Xe(),d=mn(l.consts,o);return Ps(c,l,t,n,e,i,r,d,256,s,a),Av}function Av(t,n,e,i,r,o,s,a){In("NgControlFlow");let c=ae(),l=Xe(),d=mn(l.consts,o);return Ps(c,l,t,n,e,i,r,d,512,s,a),Av}function Se(t,n){In("NgControlFlow");let e=ae(),i=yr(),r=e[i]!==gn?e[i]:-1,o=r!==-1?bu(e,st+r):void 0,s=0;if(yi(e,i,t)){let a=ie(null);try{if(o!==void 0&&I0(o,s),t!==-1){let c=st+t,l=bu(e,c),d=Og(e[J],c),f=T0(l,d,e),h=xc(e,d,n,{dehydratedView:f});Ec(l,h,s,Fs(d,f))}}finally{ie(a)}}else if(o!==void 0){let a=N0(o,s);a!==void 0&&(a[ht]=n)}}var kg=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-ot}};function Mo(t){return t}var Rg=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function To(t,n,e,i,r,o,s,a,c,l,d,f,h){In("NgControlFlow");let m=ae(),p=Xe(),_=c!==void 0,x=ae(),I=a?s.bind(x[Yt][ht]):s,T=new Rg(_,I);x[st+t]=T,Ps(m,p,t+1,n,e,i,r,mn(p.consts,o),256),_&&Ps(m,p,t+2,c,l,d,f,mn(p.consts,h),512)}var Ag=class extends Mg{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-ot}at(n){return this.getLView(n)[ht].$implicit}attach(n,e){let i=e[uo];this.needsIndexUpdate||=n!==this.length,Ec(this.lContainer,e,n,Fs(this.templateTNode,i)),WF(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,KF(this.lContainer,n),YF(this.lContainer,n)}create(n,e){let i=uu(this.lContainer,this.templateTNode.tView.ssrId);return xc(this.hostLView,this.templateTNode,new kg(this.lContainer,e,n),{dehydratedView:i})}destroy(n){Mu(n[J],n)}updateValue(n,e){this.getLView(n)[ht].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[ht].$index=n}getLView(n){return QF(this.lContainer,n)}};function ko(t){let n=ie(null),e=hi();try{let i=ae(),r=i[J],o=i[e],s=e+1,a=bu(i,s);if(o.liveCollection===void 0){let l=Og(r,s);o.liveCollection=new Ag(a,i,l)}else o.liveCollection.reset();let c=o.liveCollection;if(GF(c,t,o.trackByFn,n),c.updateIndexes(),o.hasEmptyBlock){let l=yr(),d=c.length===0;if(yi(i,l,d)){let f=e+2,h=bu(i,f);if(d){let m=Og(r,f),p=T0(h,m,i),_=xc(i,m,void 0,{dehydratedView:p});Ec(h,_,0,Fs(m,p))}else r.firstUpdatePass&&OO(h),I0(h,0)}}}finally{ie(n)}}function bu(t,n){return t[n]}function WF(t,n){if(t.length<=ot)return;let e=ot+n,i=t[e],r=i?i[ui]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[ci];AA(o,r),Cr.delete(i[di]),r.detachedLeaveAnimationFns=void 0}}function KF(t,n){if(t.length<=ot)return;let e=ot+n,i=t[e],r=i?i[ui]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function YF(t,n){return gc(t,n)}function QF(t,n){return N0(t,n)}function Og(t,n){return Vd(t,n)}function Y(t,n,e){let i=ae(),r=yr();if(yi(i,r,n)){let o=Xe(),s=Ms();rO(s,i,t,n,i[Ge],e)}return Y}function Fg(t,n,e,i,r){mv(n,t,e,r?"class":"style",i)}function w(t,n,e,i){let r=ae(),o=r[J],s=t+st,a=o.firstCreatePass?_v(s,r,2,n,uv,zd(),e,i):o.data[s];if(Hi(a)){let c=r[Vn].tracingService;if(c&&c.componentCreate){let l=o.data[a.directiveStart+a.componentOffset];return c.componentCreate(A0(l),()=>(lC(t,n,r,a,i),w))}}return lC(t,n,r,a,i),w}function lC(t,n,e,i,r){if(fv(i,e,t,n,nD),Es(i)){let o=e[J];Ru(o,e,i),qg(o,i,e)}r!=null&&Dc(e,i)}function C(){let t=Xe(),n=wt(),e=hv(n);return t.firstCreatePass&&bv(t,e),Rp(e)&&Ap(),Tp(),e.classesWithoutHost!=null&&gR(e)&&Fg(t,e,ae(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&vR(e)&&Fg(t,e,ae(),e.stylesWithoutHost,!1),C}function te(t,n,e,i){return w(t,n,e,i),C(),te}function tt(t,n,e,i){let r=ae(),o=r[J],s=t+st,a=o.firstCreatePass?iF(s,o,2,n,e,i):o.data[s];return fv(a,r,t,n,nD),i!=null&&Dc(r,a),tt}function ct(){let t=wt(),n=hv(t);return Rp(n)&&Ap(),Tp(),ct}function rn(t,n,e,i){return tt(t,n,e,i),ct(),rn}var nD=(t,n,e,i,r)=>(cc(!0),QC(n[Ge],i,Hp()));function _i(t,n,e){let i=ae(),r=i[J],o=t+st,s=r.firstCreatePass?_v(o,i,8,"ng-container",uv,zd(),n,e):r.data[o];if(fv(s,i,t,"ng-container",ZF),Es(s)){let a=i[J];Ru(a,i,s),qg(a,s,i)}return e!=null&&Dc(i,s),_i}function bi(){let t=Xe(),n=wt(),e=hv(n);return t.firstCreatePass&&bv(t,e),bi}function zt(t,n,e){return _i(t,n,e),bi(),zt}var ZF=(t,n,e,i,r)=>(cc(!0),cA(n[Ge],""));function Lt(){return ae()}function on(t,n,e){let i=ae(),r=yr();if(yi(i,r,n)){let o=Xe(),s=Ms();g0(s,i,t,n,i[Ge],e)}return on}var Tc="en-US";var XF=Tc;function iD(t){typeof t=="string"&&(XF=t.toLowerCase().replace(/_/g,"-"))}function ge(t,n,e){let i=ae(),r=Xe(),o=wt();return JF(r,i,i[Ge],o,t,n,e),ge}function Vu(t,n,e){let i=ae(),r=Xe(),o=wt();return(o.type&3||e)&&yv(o,r,i,e,i[Ge],t,n,So(o,i,n)),Vu}function JF(t,n,e,i,r,o,s){let a=!0,c=null;if((i.type&3||s)&&(c??=So(i,n,o),yv(i,t,n,s,e,r,o,c)&&(a=!1)),a){let l=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let f=0;f<d.length;f+=2){let h=d[f],m=d[f+1];c??=So(i,n,o),hu(i,n,h,m,r,c)}if(l&&l.length)for(let f of l)c??=So(i,n,o),hu(i,n,f,r,r,c)}}function de(t=1){return wS(t)}function e1(t,n){let e=null,i=bA(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?r0(t,o,!0):CA(i,o))return r}return e}function xe(t){let n=ae()[Yt][Ut];if(!n.projection){let e=t?t.length:1,i=n.projection=Ww(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let s=t?e1(o,t):0;s!==null&&(r[s]?r[s].projectionNext=o:i[s]=o,r[s]=o)}o=o.next}}}function k(t,n=0,e,i,r,o){let s=ae(),a=Xe(),c=i?t+1:null;c!==null&&Ps(s,a,c,i,r,o,null,e);let l=Vs(a,st+t,16,null,e||null);l.projection===null&&(l.projection=n),Pp();let f=!s[uo]||kp();s[Yt][Ut].projection[l.projection]===null&&c!==null?t1(s,a,c):f&&!Cu(l)&&KA(a,s,l)}function t1(t,n,e){let i=st+e,r=n.data[i],o=t[i],s=uu(o,r.tView.ssrId),a=xc(t,r,void 0,{dehydratedView:s});Ec(o,a,0,Fs(r,s))}function lt(t,n,e,i){return $0(t,n,e,i),lt}function jt(t,n,e){return z0(t,n,e),jt}function $(t){let n=ae(),e=Xe(),i=qd();sc(i+1);let r=Sv(e,i);if(t.dirty&&iS(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=G0(n,i);t.reset(o,kC),t.notifyOnChanges()}return!0}return!1}function q(){return wv(ae(),qd())}function Bu(t,n,e,i,r){return K0(n,$0(t,e,i,r)),Bu}function Hu(t,n,e,i){return K0(t,z0(n,e,i)),Hu}function Uu(t=1){sc(qd()+t)}function Mn(t){let n=uS();return nS(n,st+t)}function tu(t,n){return t<<17|n<<2}function Eo(t){return t>>17&32767}function n1(t){return(t&2)==2}function i1(t,n){return t&131071|n<<17}function Pg(t){return t|2}function Ls(t){return(t&131068)>>2}function Jp(t,n){return t&-131069|n<<2}function r1(t){return(t&1)===1}function Lg(t){return t|1}function o1(t,n,e,i,r,o){let s=o?n.classBindings:n.styleBindings,a=Eo(s),c=Ls(s);t[i]=e;let l=!1,d;if(Array.isArray(e)){let f=e;d=f[1],(d===null||ws(f,d)>0)&&(l=!0)}else d=e;if(r)if(c!==0){let h=Eo(t[a+1]);t[i+1]=tu(h,a),h!==0&&(t[h+1]=Jp(t[h+1],i)),t[a+1]=i1(t[a+1],i)}else t[i+1]=tu(a,0),a!==0&&(t[a+1]=Jp(t[a+1],i)),a=i;else t[i+1]=tu(c,0),a===0?a=i:t[c+1]=Jp(t[c+1],i),c=i;l&&(t[i+1]=Pg(t[i+1])),dC(t,d,i,!0),dC(t,d,i,!1),s1(n,d,t,i,o),s=tu(a,c),o?n.classBindings=s:n.styleBindings=s}function s1(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&ws(o,n)>=0&&(e[i+1]=Lg(e[i+1]))}function dC(t,n,e,i){let r=t[e+1],o=n===null,s=i?Eo(r):Ls(r),a=!1;for(;s!==0&&(a===!1||o);){let c=t[s],l=t[s+1];a1(c,n)&&(a=!0,t[s+1]=i?Lg(l):Pg(l)),s=i?Eo(l):Ls(l)}a&&(t[e+1]=i?Pg(r):Lg(r))}function a1(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?ws(t,n)>=0:!1}var zn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function c1(t){return t.substring(zn.key,zn.keyEnd)}function l1(t){return d1(t),rD(t,oD(t,0,zn.textEnd))}function rD(t,n){let e=zn.textEnd;return e===n?-1:(n=zn.keyEnd=u1(t,zn.key=n,e),oD(t,n,e))}function d1(t){zn.key=0,zn.keyEnd=0,zn.value=0,zn.valueEnd=0,zn.textEnd=t.length}function oD(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function u1(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function Ro(t,n,e){return sD(t,n,e,!1),Ro}function G(t,n){return sD(t,n,null,!0),G}function vn(t){h1(_1,f1,t,!0)}function f1(t,n){for(let e=l1(n);e>=0;e=rD(n,e))Fd(t,c1(n),!0)}function sD(t,n,e,i){let r=ae(),o=Xe(),s=jp(2);if(o.firstUpdatePass&&cD(o,t,s,i),n!==gn&&yi(r,s,n)){let a=o.data[hi()];lD(o,a,r,r[Ge],t,r[s+1]=w1(n,e),i,s)}}function h1(t,n,e,i){let r=Xe(),o=jp(2);r.firstUpdatePass&&cD(r,null,o,i);let s=ae();if(e!==gn&&yi(s,o,e)){let a=r.data[hi()];if(dD(a,i)&&!aD(r,o)){let c=i?a.classesWithoutHost:a.stylesWithoutHost;c!==null&&(e=Td(c,e||"")),Fg(r,a,s,e,i)}else b1(r,a,s,s[Ge],s[o+1],s[o+1]=y1(t,n,e),i,o)}}function aD(t,n){return n>=t.expandoStartIndex}function cD(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[hi()],s=aD(t,e);dD(o,i)&&n===null&&!s&&(n=!1),n=m1(r,o,n,i),o1(r,o,n,e,s,i)}}function m1(t,n,e,i){let r=vS(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=eg(null,t,n,e,i),e=_c(e,n.attrs,i),o=null);else{let s=n.directiveStylingLast;if(s===-1||t[s]!==r)if(e=eg(r,t,n,e,i),o===null){let c=p1(t,n,i);c!==void 0&&Array.isArray(c)&&(c=eg(null,t,n,c[1],i),c=_c(c,n.attrs,i),g1(t,n,i,c))}else o=v1(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function p1(t,n,e){let i=e?n.classBindings:n.styleBindings;if(Ls(i)!==0)return t[Eo(i)]}function g1(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[Eo(r)]=i}function v1(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let s=t[o].hostAttrs;i=_c(i,s,e)}return _c(i,n.attrs,e)}function eg(t,n,e,i,r){let o=null,s=e.directiveEnd,a=e.directiveStylingLast;for(a===-1?a=e.directiveStart:a++;a<s&&(o=n[a],i=_c(i,o.hostAttrs,r),o!==t);)a++;return t!==null&&(e.directiveStylingLast=a),i}function _c(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let s=n[o];typeof s=="number"?r=s:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),Fd(t,s,e?!0:n[++o]))}return t===void 0?null:t}function y1(t,n,e){if(e==null||e==="")return Bt;let i=[],r=nn(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)Object.hasOwn(r,o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function _1(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&Fd(t,i,e)}function b1(t,n,e,i,r,o,s,a){r===gn&&(r=Bt);let c=0,l=0,d=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;d!==null||f!==null;){let h=c<r.length?r[c+1]:void 0,m=l<o.length?o[l+1]:void 0,p=null,_;d===f?(c+=2,l+=2,h!==m&&(p=f,_=m)):f===null||d!==null&&d<f?(c+=2,p=d):(l+=2,p=f,_=m),p!==null&&lD(t,n,e,i,p,_,s,a),d=c<r.length?r[c]:null,f=l<o.length?o[l]:null}}function lD(t,n,e,i,r,o,s,a){if(!(n.type&3))return;let c=t.data,l=c[a+1],d=r1(l)?uC(c,n,e,r,Ls(l),s):void 0;if(!wu(d)){wu(o)||n1(l)&&(o=uC(c,null,e,r,a,s));let f=xp(hi(),e);QA(i,s,f,r,o)}}function uC(t,n,e,i,r,o){let s=n===null,a;for(;r>0;){let c=t[r],l=Array.isArray(c),d=l?c[1]:c,f=d===null,h=e[r+1];h===gn&&(h=f?Bt:void 0);let m=f?Pd(h,i):d===i?h:void 0;if(l&&!wu(m)&&(m=Pd(c,i)),wu(m)&&(a=m,s))return a;let p=t[r+1];r=s?Eo(p):Ls(p)}if(n!==null){let c=o?n.residualClasses:n.residualStyles;c!=null&&(a=Pd(c,i))}return a}function wu(t){return t!==void 0}function w1(t,n){return t==null||t===""||(typeof n=="string"?t=nn(t)+n:typeof t=="object"&&(t=Za(nn(t)))),t}function dD(t,n){return(t.flags&(n?8:16))!==0}function X(t,n=""){let e=ae(),i=Xe(),r=t+st,o=i.firstCreatePass?Vs(i,r,1,n,null):i.data[r],s=S1(i,e,o,n);e[r]=s,Kd()&&sv(i,e,s,o),Is(o,!1)}var S1=(t,n,e,i)=>(cc(!0),sA(n[Ge],i));function C1(t,n,e,i=""){return yi(t,yr(),e)?n+bs(e)+i:gn}function Rt(t){return Wn("",t),Rt}function Wn(t,n,e){let i=ae(),r=C1(i,t,n,e);return r!==gn&&D1(i,hi(),r),Wn}function D1(t,n,e){let i=xp(n,t);aA(t[Ge],i,e)}function Nr(t){return yi(ae(),yr(),t)?bs(t):gn}function fC(t,n,e){let i=Xe();i.firstCreatePass&&uD(n,i.data,i.blueprint,fi(t),e)}function uD(t,n,e,i,r){if(t=Ot(t),Array.isArray(t))for(let o=0;o<t.length;o++)uD(t[o],n,e,i,r);else{let o=Xe(),s=ae(),a=wt(),c=ao(t)?t:Ot(t.provide),l=_p(t),d=a.providerIndexes&1048575,f=a.directiveStart,h=a.providerIndexes>>20;if(ao(t)||!t.multi){let m=new Co(l,r,be,null),p=ng(c,n,r?d:d+h,f);p===-1?(og(du(a,s),o,c),tg(o,t,n.length),n.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(m),s.push(m)):(e[p]=m,s[p]=m)}else{let m=ng(c,n,d+h,f),p=ng(c,n,d,d+h),_=m>=0&&e[m],x=p>=0&&e[p];if(r&&!x||!r&&!_){og(du(a,s),o,c);let I=N1(r?E1:x1,e.length,r,i,l,t);!r&&x&&(e[p].providerFactory=I),tg(o,t,n.length,0),n.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(I),s.push(I)}else{let I=fD(e[r?p:m],l,!r&&i);tg(o,t,m>-1?m:p,I)}!r&&i&&x&&e[p].componentProviders++}}}function tg(t,n,e,i){let r=ao(n),o=Xw(n);if(r||o){let c=(o?Ot(n.useClass):n).prototype.ngOnDestroy;if(c){let l=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=l.indexOf(e);d===-1?l.push(e,[i,c]):l[d+1].push(i,c)}else l.push(e,c)}}}function fD(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function ng(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function x1(t,n,e,i,r){return jg(this.multi,[])}function E1(t,n,e,i,r){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,c=hc(i,i[J],this.providerFactory.index,r);s=c.slice(0,a),jg(o,s);for(let l=a;l<c.length;l++)s.push(c[l])}else s=[],jg(o,s);return s}function jg(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function N1(t,n,e,i,r,o){let s=new Co(t,e,be,null);return s.multi=[],s.index=n,s.componentProviders=0,fD(s,r,i&&!e),s}function ve(t,n){return e=>{e.providersResolver=(i,r)=>fC(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>fC(i,r?r(n):n,!0))}}function Ov(t,n,e){return M1(ae(),fS(),t,n,e)}function I1(t,n){let e=t[n];return e===gn?void 0:e}function M1(t,n,e,i,r,o){let s=n+e;return yi(t,s,r)?VO(t,s+1,o?i.call(o,r):i(r)):I1(t,s+1)}function zu(t,n){return Au(t,n)}var nu=null;function hD(t){nu!==null&&(t.defaultEncapsulation!==nu.defaultEncapsulation||t.preserveWhitespaces!==nu.preserveWhitespaces)||(nu=t)}var mD=(()=>{class t{applicationErrorHandler=u(Nn);appRef=u(St);taskService=u(mi);ngZone=u(O);zonelessEnabled=u(lc);tracing=u(Gn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new ue;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Ya):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(Gp,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:case 2:{this.appRef.dirtyFlags|=2;break}case 3:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?xS:zp;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Ya+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();function pD(){return[{provide:ai,useExisting:mD},{provide:O,useClass:Qa},{provide:lc,useValue:!0}]}var Fv=(()=>{class t{compileModuleSync(e){return new yc(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),gD=new v("");function T1(){return typeof $localize<"u"&&$localize.locale||Tc}var $u=new v("",{factory:()=>u($u,{optional:!0,skipSelf:!0})||T1()});function Je(t,n){return Ra(t,n?.equal)}function Ce(t){return nw(t)}var vD=class t extends Error{_brand;constructor(n){super(n)}static IDLE=new t("IDLE");static LOADING=new t("LOADING")},k1=t=>t;function qu(t,n){if(typeof t=="function"){let e=Rm(t,k1,n?.equal);return yD(e,n?.debugName,n?.set)}else{let e=Rm(t.source,t.computation,t.equal);return yD(e,t.debugName,t.set)}}function yD(t,n,e){let i=t[dt],r=t;if(e!==void 0){let o=s=>Am(i,s);r.set=s=>e(s,o),r.update=s=>e(s(Ce(t)),o)}else r.set=o=>Am(i,o),r.update=o=>tw(i,o);return r.asReadonly=Yd.bind(t),r}var ID=Symbol("InputSignalNode#UNSET"),U1=W(y({},Aa),{transformFn:void 0,applyValueToInputSignal(t,n){Qr(t,n)}});function MD(t,n){let e=Object.create(U1);e.value=t,e.transformFn=n?.transform;function i(){if(rr(e),e.value===ID){let r=null;throw new b(-950,r)}return e.value}return i[dt]=e,i}var Tn=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>wc(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}},TD=(()=>{let t=new v("");return t.__NG_ELEMENT_ID__=n=>{let e=wt();if(e===null)throw new b(-204,!1);if(e.type&2)return e.value;if(n&8)return null;throw new b(-204,!1)},t})();function Gv(t){return z1(t)?t.default:t}function z1(t){return t&&typeof t=="object"&&"default"in t}function _D(t,n){return MD(t,n)}function $1(t){return MD(ID,t)}var $t=(_D.required=$1,_D);function bD(t,n){return Cv(n)}function q1(t,n){return Dv(n)}var Rc=(bD.required=q1,bD);function wD(t,n){return Cv(n)}function G1(t,n){return Dv(n)}var kD=(wD.required=G1,wD);var RD=(()=>{class t{constructor(e){}static \u0275fac=function(i){return new(i||t)(M(St))};static \u0275mod=F({type:t});static \u0275inj=A({})}return t})();var W1=1e4;var MQ=W1-1e3;var Lv=class{supports(n){return vv(n)}create(n){return new jv(n)}},K1=(t,n)=>n,jv=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(n){this._trackByFn=n||K1}forEachItem(n){let e;for(e=this._itHead;e!==null;e=e._next)n(e)}forEachOperation(n){let e=this._itHead,i=this._removalsHead,r=0,o=null;for(;e||i;){let s=!i||e&&e.currentIndex<SD(i,r,o)?e:i,a=SD(s,r,o),c=s.currentIndex;if(s===i)r--,i=i._nextRemoved;else if(e=e._next,s.previousIndex==null)r++;else{o||(o=[]);let l=a-r,d=c-r;if(l!=d){for(let h=0;h<l;h++){let m=h<o.length?o[h]:o[h]=0,p=m+h;d<=p&&p<l&&(o[h]=m+1)}let f=s.previousIndex;o[f]=d-l}}a!==c&&n(s,a,c)}}forEachPreviousItem(n){let e;for(e=this._previousItHead;e!==null;e=e._nextPrevious)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachMovedItem(n){let e;for(e=this._movesHead;e!==null;e=e._nextMoved)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}forEachIdentityChange(n){let e;for(e=this._identityChangesHead;e!==null;e=e._nextIdentityChange)n(e)}diff(n){if(n==null&&(n=[]),!vv(n))throw new b(900,!1);return this.check(n)?this:null}onDestroy(){}check(n){this._reset();let e=this._itHead,i=!1,r,o,s;if(Array.isArray(n)){this.length=n.length;for(let a=0;a<this.length;a++)o=n[a],s=this._trackByFn(a,o),e===null||!Object.is(e.trackById,s)?(e=this._mismatch(e,o,s,a),i=!0):(i&&(e=this._verifyReinsertion(e,o,s,a)),Object.is(e.item,o)||this._addIdentityChange(e,o)),e=e._next}else r=0,O0(n,a=>{s=this._trackByFn(r,a),e===null||!Object.is(e.trackById,s)?(e=this._mismatch(e,a,s,r),i=!0):(i&&(e=this._verifyReinsertion(e,a,s,r)),Object.is(e.item,a)||this._addIdentityChange(e,a)),e=e._next,r++}),this.length=r;return this._truncate(e),this.collection=n,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let n;for(n=this._previousItHead=this._itHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._additionsHead;n!==null;n=n._nextAdded)n.previousIndex=n.currentIndex;for(this._additionsHead=this._additionsTail=null,n=this._movesHead;n!==null;n=n._nextMoved)n.previousIndex=n.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(n,e,i,r){let o;return n===null?o=this._itTail:(o=n._prev,this._remove(n)),n=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),n!==null?(Object.is(n.item,e)||this._addIdentityChange(n,e),this._reinsertAfter(n,o,r)):(n=this._linkedRecords===null?null:this._linkedRecords.get(i,r),n!==null?(Object.is(n.item,e)||this._addIdentityChange(n,e),this._moveAfter(n,o,r)):n=this._addAfter(new Vv(e,i),o,r)),n}_verifyReinsertion(n,e,i,r){let o=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return o!==null?n=this._reinsertAfter(o,n._prev,r):n.currentIndex!=r&&(n.currentIndex=r,this._addToMoves(n,r)),n}_truncate(n){for(;n!==null;){let e=n._next;this._addToRemovals(this._unlink(n)),n=e}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(n,e,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(n);let r=n._prevRemoved,o=n._nextRemoved;return r===null?this._removalsHead=o:r._nextRemoved=o,o===null?this._removalsTail=r:o._prevRemoved=r,this._insertAfter(n,e,i),this._addToMoves(n,i),n}_moveAfter(n,e,i){return this._unlink(n),this._insertAfter(n,e,i),this._addToMoves(n,i),n}_addAfter(n,e,i){return this._insertAfter(n,e,i),this._additionsTail===null?this._additionsTail=this._additionsHead=n:this._additionsTail=this._additionsTail._nextAdded=n,n}_insertAfter(n,e,i){let r=e===null?this._itHead:e._next;return n._next=r,n._prev=e,r===null?this._itTail=n:r._prev=n,e===null?this._itHead=n:e._next=n,this._linkedRecords===null&&(this._linkedRecords=new Gu),this._linkedRecords.put(n),n.currentIndex=i,n}_remove(n){return this._addToRemovals(this._unlink(n))}_unlink(n){this._linkedRecords!==null&&this._linkedRecords.remove(n);let e=n._prev,i=n._next;return e===null?this._itHead=i:e._next=i,i===null?this._itTail=e:i._prev=e,n}_addToMoves(n,e){return n.previousIndex===e||(this._movesTail===null?this._movesTail=this._movesHead=n:this._movesTail=this._movesTail._nextMoved=n),n}_addToRemovals(n){return this._unlinkedRecords===null&&(this._unlinkedRecords=new Gu),this._unlinkedRecords.put(n),n.currentIndex=null,n._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=n,n._prevRemoved=null):(n._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=n),n}_addIdentityChange(n,e){return n.item=e,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=n:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=n,n}},Vv=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(n,e){this.item=n,this.trackById=e}},Bv=class{_head=null;_tail=null;add(n){this._head===null?(this._head=this._tail=n,n._nextDup=null,n._prevDup=null):(this._tail._nextDup=n,n._prevDup=this._tail,n._nextDup=null,this._tail=n)}get(n,e){let i;for(i=this._head;i!==null;i=i._nextDup)if((e===null||e<=i.currentIndex)&&Object.is(i.trackById,n))return i;return null}remove(n){let e=n._prevDup,i=n._nextDup;return e===null?this._head=i:e._nextDup=i,i===null?this._tail=e:i._prevDup=e,this._head===null}},Gu=class{map=new Map;put(n){let e=n.trackById,i=this.map.get(e);i||(i=new Bv,this.map.set(e,i)),i.add(n)}get(n,e){let i=n,r=this.map.get(i);return r?r.get(n,e):null}remove(n){let e=n.trackById;return this.map.get(e).remove(n)&&this.map.delete(e),n}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function SD(t,n,e){let i=t.previousIndex;if(i===null)return i;let r=0;return e&&i<e.length&&(r=e[i]),i+n+r}var Hv=class{supports(n){return n instanceof Map||Ou(n)}create(){return new Uv}},Uv=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||Ou(n)))throw new b(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(i,r)=>{if(e&&e.key===r)this._maybeAddToChanges(e,i),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(r,i);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let i=e;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let i=n._prev;return e._next=n,e._prev=i,n._prev=e,i&&(i._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let r=this._records.get(n);this._maybeAddToChanges(r,e);let o=r._prev,s=r._next;return o&&(o._next=s),s&&(s._prev=o),r._next=null,r._prev=null,r}let i=new zv(n);return this._records.set(n,i),i.currentValue=e,this._addToAdditions(i),i}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(i=>e(n[i],i))}},zv=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function CD(){return new Ao([new Lv])}var Ao=(()=>{class t{factories;static \u0275prov=j({token:t,providedIn:"root",factory:CD});constructor(e){this.factories=e}static create(e,i){if(i!=null){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=u(t,{optional:!0,skipSelf:!0});return t.create(e,i||CD())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i!=null)return i;throw new b(901,!1)}}return t})();function DD(){return new Wv([new Hv])}var Wv=(()=>{class t{static \u0275prov=j({token:t,providedIn:"root",factory:DD});factories;constructor(e){this.factories=e}static create(e,i){if(i){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=u(t,{optional:!0,skipSelf:!0});return t.create(e,i||DD())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i)return i;throw new b(901,!1)}}return t})(),Ye=(()=>{class t{static __NG_ELEMENT_ID__=Y1}return t})();function Y1(t){return Q1(wt(),ae(),(t&16)===16)}function Q1(t,n,e){if(Hi(t)&&!e){let i=En(t.index,n);return new Dr(i,i)}else if(t.type&175){let i=n[Yt];return new Dr(i,n)}return null}function Z1(t,n,e){let i=new yc(e);return Promise.resolve(i)}function xD(t){for(let n=t.length-1;n>=0;n--)if(t[n]!==void 0)return t[n]}var Wu=new v(""),X1=new v("");function kc(t){return!t.moduleRef}function J1(t){let n=kc(t)?t.r3Injector:t.moduleRef.injector,e=n.get(O);return e.run(()=>{kc(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(Nn),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),kc(t)){let o=()=>n.destroy(),s=t.platformInjector.get(Wu);s.add(o),n.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>t.moduleRef.destroy(),s=t.platformInjector.get(Wu);s.add(o),t.moduleRef.onDestroy(()=>{fc(t.allPlatformModules,t.moduleRef),r.unsubscribe(),s.delete(o)})}return tP(i,e,()=>{let o=n.get(mi),s=o.add(),a=n.get(Nv);return a.runInitializers(),a.donePromise.then(()=>{let c=n.get($u,Tc);if(iD(c||Tc),!n.get(X1,!0))return kc(t)?n.get(St):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(kc(t)){let d=n.get(St);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return AD?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(s)})})})}var AD;function ED(){AD=eP}function eP(t,n){let e=t.injector.get(St);if(t._bootstrapComponents.length>0)t._bootstrapComponents.forEach(i=>e.bootstrap(i));else if(t.instance.ngDoBootstrap)t.instance.ngDoBootstrap(e);else throw new b(-403,!1);n.push(t)}function tP(t,n,e){try{let i=e();return $i(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var OD=(()=>{class t{_injector;_modules=[];_destroyListeners=[];_destroyed=!1;constructor(e){this._injector=e}bootstrapModuleFactory(e,i){let r=[pD(),...i?.applicationProviders??[],NS],o=Y0(e.moduleType,this.injector,r);return ED(),J1({moduleRef:o,allPlatformModules:this._modules,platformInjector:this.injector})}bootstrapModule(e,i=[]){let r=Rv({},i);return ED(),Z1(this.injector,r,e).then(o=>this.bootstrapModuleFactory(o,r))}onDestroy(e){this._destroyListeners.push(e)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new b(404,!1);this._modules.slice().forEach(i=>i.destroy()),this._destroyListeners.forEach(i=>i());let e=this._injector.get(Wu,null);e&&(e.forEach(i=>i()),e.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}static \u0275fac=function(i){return new(i||t)(M(le))};static \u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();var Kv=null;function nP(t){if(Qv())throw new b(400,!1);tD(),Kv=t;let n=t.get(OD);return oP(t),n}function Yv(t,n,e=[]){let i=`Platform: ${n}`,r=new v(i);return(o=[])=>{let s=Qv();if(!s){let a=[...e,...o,{provide:r,useValue:!0}];s=t?.(a)??nP(iP(a,i))}return rP(r)}}function iP(t=[],n){return le.create({name:n,providers:[{provide:ic,useValue:"platform"},{provide:Wu,useValue:new Set([()=>Kv=null])},...t]})}function rP(t){let n=Qv();if(!n)throw new b(-401,!1);return n}function Qv(){return Kv?.get(OD)??null}function oP(t){let n=t.get(Qd,null);bt(t,()=>{n?.forEach(e=>e())})}function P(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function wi(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var Pv=Symbol("NOT_SET"),FD=new Set,sP=W(y({},Aa),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Pv,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Pv&&!as(this))return this.signal;try{for(let r of this.cleanup??FD)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=Ri(this),i;try{i=this.userFn.apply(null,n)}finally{or(this,e)}return(this.value===Pv||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),$v=class extends mc{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,s=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(Ze),s),this.scheduler=r;for(let a of nv){let c=e[a];if(c===void 0)continue;let l=Object.create(sP);l.sequence=this,l.phase=a,l.userFn=c,l.dirty=!0,l.signal=()=>(rr(l),l.value),l.signal[dt]=l,l.registerCleanupFn=d=>(l.cleanup??=new Set).add(d),this.nodes[a]=l,this.hooks[a]=d=>l.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??FD)e()}finally{sr(n)}}};function Zv(t,n){let e=n?.injector??u(le),i=e.get(ai),r=e.get(Nu),o=e.get(Gn,null,{optional:!0});r.impl??=e.get(iv);let s=t;typeof s=="function"&&(s={mixedReadWrite:t});let a=e.get(Ts,null,{optional:!0}),c=new $v(r.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,i,e,o?.snapshot(null));return r.impl.register(c),c}var PD=Yv(null,"core",[]);function Ku(t,n){let e=Vi(t),i=n.elementInjector||Cs();return new xo(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}function LD(t){let n=Vi(t);if(!n)return null;let e=new xo(n);return{get selector(){return e.selector},get type(){return e.componentType},get inputs(){return e.inputs},get outputs(){return e.outputs},get ngContentSelectors(){return e.ngContentSelectors},get isStandalone(){return n.standalone},get isSignal(){return n.signals}}}function jD(){return!1}var VD=null;function yn(){return VD}function Xv(t){VD??=t}var Ac=class{},qi=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=j({token:t,factory:()=>u(BD),providedIn:"platform"})}return t})(),Jv=new v(""),BD=(()=>{class t extends qi{_location;_history;_doc=u(K);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return yn().getBaseHref(this._doc)}onPopState(e){let i=yn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=yn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=j({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Yu(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function HD(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function Kn(t){return t&&t[0]!=="?"?`?${t}`:t}var Yn=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=j({token:t,factory:()=>u(Zu),providedIn:"root"})}return t})(),Qu=new v(""),Zu=(()=>{class t extends Yn{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(K).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Yu(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+Kn(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+Kn(o));this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+Kn(o));this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(M(qi),M(Qu,8))};static \u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Si=(()=>{class t{_subject=new N;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=lP(HD(UD(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+Kn(i))}normalize(e){return t.stripTrailingSlash(cP(this._basePath,UD(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Kn(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Kn(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Kn;static joinWithSlash=Yu;static stripTrailingSlash=HD;static \u0275fac=function(i){return new(i||t)(M(Yn))};static \u0275prov=j({token:t,factory:()=>aP(),providedIn:"root"})}return t})();function aP(){return new Si(M(Yn))}function cP(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function UD(t){return t.replace(/\/index\.html$/,"")}function lP(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var ey=(()=>{class t extends Yn{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(e){let i=Yu(this._baseHref,e);return i.length>0?"#"+i:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+Kn(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+Kn(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(M(qi),M(Qu,8))};static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var Xu=class{$implicit;ngForOf;index;count;constructor(n,e,i,r){this.$implicit=n,this.ngForOf=e,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Ir=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,i,r){this._viewContainer=e,this._template=i,this._differs=r}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let i=this._viewContainer;e.forEachOperation((r,o,s)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new Xu(r.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)i.remove(o===null?void 0:o);else if(o!==null){let a=i.get(o);i.move(a,s),zD(a,r)}});for(let r=0,o=i.length;r<o;r++){let a=i.get(r).context;a.index=r,a.count=o,a.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);zD(o,r)})}static ngTemplateContextGuard(e,i){return!0}static \u0275fac=function(i){return new(i||t)(be(et),be(gt),be(Ao))};static \u0275dir=E({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function zD(t,n){t.context.$implicit=n.item}var Oo=(()=>{class t{_viewContainer;_context=new Ju;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,i){this._viewContainer=e,this._thenTemplateRef=i}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){$D(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){$D(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,i){return!0}static \u0275fac=function(i){return new(i||t)(be(et),be(gt))};static \u0275dir=E({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),Ju=class{$implicit=null;ngIf=null};function $D(t,n){if(t&&!t.createEmbeddedView)throw new b(2020,!1)}var ty=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,i,r){this._ngEl=e,this._differs=i,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,i){let[r,o]=e.split("."),s=r.indexOf("-")===-1?void 0:qn.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${i}${o}`:i,s):this._renderer.removeStyle(this._ngEl.nativeElement,r,s)}_applyChanges(e){e.forEachRemovedItem(i=>this._setStyle(i.key,null)),e.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),e.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}static \u0275fac=function(i){return new(i||t)(be(L),be(Wv),be(He))};static \u0275dir=E({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),ny=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(le);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(be(et))};static \u0275dir=E({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[We]})}return t})();var iy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({})}return t})();function Oc(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()!==n)continue;let s=o;try{s=decodeURIComponent(o)}catch(a){}return s.length>1&&s[0]==='"'&&s[s.length-1]==='"'&&(s=s.slice(1,-1)),s}return null}var dP=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),ry=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=j({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=M(dP),r},providedIn:"root"})}return t})();var sy="browser";function qD(t){return t===sy}var ay=(()=>{class t{static \u0275prov=j({token:t,providedIn:"root",factory:()=>new oy(u(K),window)})}return t})(),oy=class{document;window;offset=()=>[0,0];constructor(n,e){this.document=n,this.window=e}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n,e){this.window.scrollTo(W(y({},e),{left:n[0],top:n[1]}))}scrollToAnchor(n,e){let i=uP(this.document,n);i&&(this.scrollToElement(i,e),i.focus({preventScroll:!0}))}setHistoryScrollRestoration(n){try{this.window.history.scrollRestoration=n}catch(e){console.warn(en(2400,!1))}}scrollToElement(n,e){let i=n.getBoundingClientRect(),r=i.left+this.window.pageXOffset,o=i.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(W(y({},e),{left:r-s[0],top:o-s[1]}))}};function uP(t,n){let e=t.getElementById(n)||t.getElementsByName(n)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let i=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let o=r.shadowRoot;if(o){let s=o.getElementById(n)||o.querySelector(`[name="${CSS.escape(n)}"]`);if(s)return s}r=i.nextNode()}}return null}var Pc=class{_doc;constructor(n){this._doc=n}manager},ef=(()=>{class t extends Pc{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(M(K))};static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})(),rf=new v(""),uy=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof ef));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof ef);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new b(-5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(M(rf),M(O))};static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})(),cy="ng-app-id";function GD(t){for(let n of t)n.remove()}function WD(t,n){let e=n.createElement("style");return e.textContent=t,e}function fP(t,n,e,i){let r=t.head?.querySelectorAll(`style[${cy}="${n}"],link[${cy}="${n}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(cy),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function dy(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var fy=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,fP(e,i,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,WD);i?.forEach(r=>this.addUsage(r,this.external,dy))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(GD(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])GD(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,WD(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,dy(i,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let i of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of i.elements)o.parentNode===e?o.remove():r.push(o);i.elements=r}}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(M(K),M(yo),M(wr,8),M(_o))};static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})(),ly={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},hy=/%COMP%/g;var YD="%COMP%",hP=`_nghost-${YD}`,mP=`_ngcontent-${YD}`,pP=!0,gP=new v("",{factory:()=>pP}),vP=new v("");function yP(t){return mP.replace(hy,t)}function _P(t){return hP.replace(hy,t)}function QD(t,n){return n.map(e=>e.replace(hy,t))}var Vc=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,i,r,o,s,a,c=null,l=null,d=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=c,this.tracingService=l,this.cssVarNamespace=d??"",this.defaultRenderer=new Lc(e,s,a,this.tracingService,this.cssVarNamespace)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof nf?r.applyToHost(e):r instanceof jc&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case $n.Emulated:o=new nf(c,l,i,this.appId,d,s,a,f,this.cssVarNamespace);break;case $n.ShadowDom:return new tf(c,e,i,s,a,this.nonce,f,this.cssVarNamespace,l);case $n.ExperimentalIsolatedShadowDom:return new tf(c,e,i,s,a,this.nonce,f,this.cssVarNamespace);default:o=new jc(c,l,i,d,s,a,f,this.cssVarNamespace);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(M(uy),M(No),M(yo),M(gP),M(K),M(O),M(wr),M(Gn,8),M(vP,8))};static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})(),Lc=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r,o=""){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(ly[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(KD(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){if(n){let r=KD(n)?n.content:n;if(i!=null&&i.parentNode!==r)throw new b(-5106,bP(i));r.insertBefore(e,i)}}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new b(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=ly[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=ly[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){let o=e.startsWith("--");o&&(e=e.replace("%NS%",this.cssVarNamespace)),o||r&(qn.DashCase|qn.Important)?n.style.setProperty(e,i,r&qn.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){let r=e.startsWith("--");r&&(e=e.replace("%NS%",this.cssVarNamespace)),r||i&qn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=yn().getGlobalEventTarget(this.doc,n),!n))throw new b(-5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function KD(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}function bP(t){let n=t.textContent?.slice(0,50);return n?`${t.nodeName} ("${n}")`:t.nodeName}var tf=class extends Lc{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,s,a,c,l){super(n,r,o,a,c),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=i.styles;d=QD(i.id,d).map(h=>h.replace(/%NS%/g,c));for(let h of d){let m=document.createElement("style");s&&m.setAttribute("nonce",s),m.textContent=h,this.shadowRoot.appendChild(m)}let f=i.getExternalStyles?.();if(f)for(let h of f){let m=dy(h,r);s&&m.setAttribute("nonce",s),this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},jc=class extends Lc{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,s,a,c,l){super(n,o,s,a,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=i.styles,f=l?QD(l,d):d;this.styles=f.map(h=>h.replace(/%NS%/g,c)),this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Cr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},nf=class extends jc{contentAttr;hostAttr;constructor(n,e,i,r,o,s,a,c,l){let d=r+"-"+i.id;super(n,e,i,o,s,a,c,l,d),this.contentAttr=yP(d),this.hostAttr=_P(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var of=class t extends Ac{supportsDOMEvents=!0;static makeCurrent(){Xv(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=wP();return e==null?null:SP(e)}resetBaseElement(){Bc=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Oc(document.cookie,n)}},Bc=null;function wP(){return Bc=Bc||document.head.querySelector("base"),Bc?Bc.getAttribute("href"):null}function SP(t){return new URL(t,document.baseURI).pathname}var sf=class{addToWindow(n){Ht.getAngularTestability=(i,r=!0)=>{let o=n.findTestabilityInTree(i,r);if(o==null)throw new b(5103,!1);return o},Ht.getAllAngularTestabilities=()=>n.getAllTestabilities(),Ht.getAllAngularRootElements=()=>n.getAllRootElements();let e=i=>{let r=Ht.getAllAngularTestabilities(),o=r.length,s=function(){o--,o==0&&i()};r.forEach(a=>{a.whenStable(s)})};Ht.frameworkStabilizers||(Ht.frameworkStabilizers=[]),Ht.frameworkStabilizers.push(e)}findTestabilityInTree(n,e,i){if(e==null)return null;let r=n.getTestability(e);return r??(i?yn().isShadowRoot(e)?this.findTestabilityInTree(n,e.host,!0):this.findTestabilityInTree(n,e.parentElement,!0):null)}},ZD=["alt","control","meta","shift"],CP={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},DP={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},XD=(()=>{class t extends Pc{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let s=t.parseEventName(i),a=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>yn().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),ZD.forEach(l=>{let d=i.indexOf(l);d>-1&&(i.splice(d,1),s+=l+".")}),s+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=s,c}static matchEventFullKeyCode(e,i){let r=CP[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),ZD.forEach(s=>{if(s!==r){let a=DP[s];a(e)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(M(K))};static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();function xP(){of.makeCurrent()}function EP(){return new Kt}function NP(){return Ug(document),document}var IP=[{provide:_o,useValue:sy},{provide:Qd,useValue:xP,multi:!0},{provide:K,useFactory:NP}],my=Yv(PD,"browser",IP);var MP=[{provide:Us,useClass:sf},{provide:ju,useClass:Nc,deps:[O,Ic,Us]},{provide:Nc,useClass:Nc,deps:[O,Ic,Us]}],TP=[{provide:ic,useValue:"root"},{provide:Kt,useFactory:EP},{provide:rf,useClass:ef,multi:!0},{provide:rf,useClass:XD,multi:!0},Vc,{provide:No,useClass:fy},{provide:fy,useExisting:No},uy,{provide:at,useExisting:Vc},[]],Hc=(()=>{class t{constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({providers:[...TP,...MP],imports:[iy,RD]})}return t})();var xi=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init();for(let[e,i]of n.headers.entries())this.headers.set(e,i),this.normalizedNames.set(e,n.normalizedNames.get(e))}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=n.op==="a"?(this.headers.get(e)||[]).slice():[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=Array.isArray(o)?o:[o],a=this.headers.get(e);if(!a)return;a=a.filter(c=>s.indexOf(c)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var cf=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},lf=class{encodeKey(n){return JD(n)}encodeValue(n){return JD(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function kP(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,a]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],c=e.get(s)||[];c.push(a),e.set(s,c)}),e}var RP=/%(\d[a-f0-9])/gi,AP={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function JD(t){return encodeURIComponent(t).replace(RP,(n,e)=>AP[e]??n)}function af(t){return`${t}`}var Gi=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new lf,n.fromString){if(n.fromObject)throw new b(2805,!1);this.map=kP(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(af):[af(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[n,e]of this.cloneFrom.map.entries())this.map.set(n,e);this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=n.op==="a"?(this.map.get(n.param)||[]).slice():[];e.push(af(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=(this.map.get(n.param)||[]).slice(),r=i.indexOf(af(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null}}};function OP(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ex(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function tx(t){return typeof Blob<"u"&&t instanceof Blob}function nx(t){return typeof FormData<"u"&&t instanceof FormData}function FP(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Uc="Content-Type",df="Accept",sx="text/plain",ax="application/json",cx=`${ax}, ${sx}, */*`,zs=class t{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(OP(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new b(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new xi,this.context??=new cf,!this.params)this.params=new Gi,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e,c="",l=e.indexOf("#");l!==-1&&(c=e.substring(l),a=e.substring(0,l));let d=a.indexOf("?"),f=d===-1?"?":d<a.length-1?"&":"";this.urlWithParams=a+f+s+c}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ex(this.body)||tx(this.body)||nx(this.body)||FP(this.body)?this.body:this.body instanceof Gi?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||nx(this.body)?null:tx(this.body)?this.body.type||null:ex(this.body)?null:typeof this.body=="string"?sx:this.body instanceof Gi?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?ax:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,c=n.mode||this.mode,l=n.redirect||this.redirect,d=n.credentials||this.credentials,f=n.referrer??this.referrer,h=n.integrity||this.integrity,m=n.referrerPolicy||this.referrerPolicy,p=n.transferCache??this.transferCache,_=n.timeout??this.timeout,x=n.body!==void 0?n.body:this.body,I=n.withCredentials??this.withCredentials,T=n.reportProgress??this.reportProgress,Q=n.reportUploadProgress??this.reportUploadProgress,ke=n.reportDownloadProgress??this.reportDownloadProgress,Et=n.headers||this.headers,Oe=n.params||this.params,Qe=n.context??this.context;return n.setHeaders!==void 0&&(Et=Object.keys(n.setHeaders).reduce((nt,Nt)=>nt.set(Nt,n.setHeaders[Nt]),Et)),n.setParams&&(Oe=Object.keys(n.setParams).reduce((nt,Nt)=>nt.set(Nt,n.setParams[Nt]),Oe)),new t(e,i,x,{params:Oe,headers:Et,context:Qe,reportProgress:T,reportUploadProgress:Q,reportDownloadProgress:ke,responseType:r,withCredentials:I,transferCache:p,keepalive:o,cache:a,priority:s,timeout:_,mode:c,redirect:l,credentials:d,referrer:f,integrity:h,referrerPolicy:m})}},Di=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Di||{}),$s=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new xi,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},zc=class t extends $s{constructor(n={}){super(n)}type=Di.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},qs=class t extends $s{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Di.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Ci=class extends $s{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},lx=200,PP=204;var LP=/^\)\]\}',?\n/,ZX=1024*1024,dx=new v("",{factory:()=>null}),uf=(()=>{class t{fetchImpl=u(gy,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=u(O);destroyRef=u(Ze);maxResponseSize=u(dx);handle(e){return new Z(i=>{let r=new AbortController,o=!1,s={next:c=>{c.type===Di.Response&&(o=!0),i.next(c)},error:c=>{o=!0,i.error(c)},complete:()=>{o=!0,i.complete()}};this.doRequest(e,r.signal,s).then(vy,c=>s.error(new Ci({error:c})));let a;return e.timeout&&(a=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{a!==void 0&&clearTimeout(a),!o&&!r.signal.aborted&&r.abort()}})}doRequest(e,i,r){return Te(this,null,function*(){let o=this.createRequestInit(e),s;try{let x=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,y({signal:i},o)));jP(x),r.next({type:Di.Sent}),s=yield x}catch(x){r.error(new Ci({error:x,status:x.status??0,statusText:x.statusText,url:e.urlWithParams,headers:x.headers}));return}let a=new xi(s.headers),c=s.statusText,l=s.url||e.urlWithParams,d=s.status,f=null,h=e.reportProgress||e.reportDownloadProgress;if(h&&r.next(new zc({headers:a,status:d,statusText:c,url:l})),s.body){let x=s.headers.get(Uc)??"",I=s.headers.get("content-length"),T=I!==null?Number(I):NaN;this.maxResponseSize!==null&&Number.isFinite(T)&&T>this.maxResponseSize&&(yield s.body.cancel(),ix(this.maxResponseSize));let Q=[],ke=s.body.getReader(),Et=0,Oe,Qe,nt=typeof Zone<"u"&&Zone.current,Nt=!1;if(yield this.ngZone.runOutsideAngular(()=>Te(this,null,function*(){for(;;){if(this.destroyRef.destroyed){yield ke.cancel(),Nt=!0;break}let{done:rs,value:Fn}=yield ke.read();if(rs)break;if(Q.push(Fn),Et+=Fn.length,this.maxResponseSize!==null&&Et>this.maxResponseSize&&(yield ke.cancel(),ix(this.maxResponseSize)),h){Qe=e.responseType==="text"?(Qe??"")+(Oe??=rx(x)).decode(Fn,{stream:!0}):void 0;let os=()=>r.next({type:Di.DownloadProgress,total:Number.isFinite(T)?T:void 0,loaded:Et,partialText:Qe});nt?nt.run(os):os()}}})),Nt){r.complete();return}let tr=this.concatChunks(Q,Et);try{f=this.parseBody(e,tr,x,d)}catch(rs){r.error(new Ci({error:rs,headers:new xi(s.headers),status:s.status,statusText:s.statusText,url:s.url||e.urlWithParams}));return}}d===0&&(d=f?lx:0);let m=d>=200&&d<300,p=s.redirected,_=s.type;m?(r.next(new qs({body:f,headers:a,status:d,statusText:c,url:l,redirected:p,responseType:_})),r.complete()):r.error(new Ci({error:f,headers:a,status:d,statusText:c,url:l,redirected:p,responseType:_}))})}parseBody(e,i,r,o){switch(e.responseType){case"json":let s=new TextDecoder().decode(i).replace(LP,"");if(s==="")return null;try{return JSON.parse(s)}catch(a){if(o<200||o>=300)return s;throw a}case"text":return rx(r).decode(i);case"blob":return new Blob([i],{type:r});case"arraybuffer":return i.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new b(2824,!1);let i={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((o,s)=>i[o]=s.join(",")),e.headers.has(df)||(i[df]=cx),!e.headers.has(Uc)){let o=e.detectContentTypeHeader();o!==null&&(i[Uc]=o)}return{body:e.serializeBody(),method:e.method,headers:i,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,i){let r=new Uint8Array(i),o=0;for(let s of e)r.set(s,o),o+=s.length;return r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),gy=class{};function vy(){}function jP(t){t.then(vy,vy)}function ix(t){throw new b(-2825,!1)}var VP=/charset=\s*["']?([^;"'\s]+)["']?/i;function rx(t){let n=t.match(VP);if(n!==null)try{return new TextDecoder(n[1])}catch(e){}return new TextDecoder}var BP=new v("",{factory:()=>!0}),HP="XSRF-TOKEN",UP=new v("",{factory:()=>HP}),zP="X-XSRF-TOKEN",$P=new v("",{factory:()=>zP}),qP=(()=>{class t{cookieName=u(UP);doc=u(K);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Oc(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),ux=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=j({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=M(qP),r},providedIn:"root"})}return t})();function fx(t,n){if(!u(BP)||t.method==="GET"||t.method==="HEAD")return n(t);try{let r=u(qi).href,{origin:o}=new URL(r),{origin:s}=new URL(t.url,o);if(o!==s)return n(t)}catch(r){return n(t)}let e=u(ux).getToken(),i=u($P);return e!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,e)})),n(t)}function hx(t,n){return n(t)}function GP(t,n){return(e,i)=>n.intercept(e,{handle:r=>t(r,i)})}function WP(t,n,e){return(i,r)=>bt(e,()=>n(i,o=>t(o,r)))}var mx=new v(""),_y=new v("",{factory:()=>[fx]}),px=new v(""),by=new v("",{factory:()=>!0});function KP(){let t=null;return(n,e)=>{t===null&&(t=(u(mx,{optional:!0})??[]).reduceRight(GP,hx));let i=u(bo);if(u(by)){let o=i.add();return t(n,e).pipe(hr(o))}else return t(n,e)}}var hf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=j({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=M(uf),r},providedIn:"root"})}return t})();var ff=(()=>{class t{backend;injector;chain=null;pendingTasks=u(bo);contributeToStability=u(by);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let r=this.injector.get(mf,null,{skipSelf:!0}),o=r!==null&&this.backend===r,s=this.injector.get(px,[],o?{self:!0}:void 0),a=Array.from(new Set([...this.injector.get(_y),...s]));this.chain=a.reduceRight((c,l)=>WP(c,l,this.injector),hx)}let i=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return Ce(()=>i(e,o=>this.backend.handle(o))).pipe(hr(r))}else return Ce(()=>i(e,r=>this.backend.handle(r)))}static \u0275fac=function(i){return new(i||t)(M(hf),M(Be))};static \u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),mf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=j({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=M(ff),r},providedIn:"root"})}return t})();function py(t,n){return y({body:n},t)}var pf=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof zs)o=e;else{let c;r.headers instanceof xi?c=r.headers:c=new xi(r.headers);let l;r.params&&(r.params instanceof Gi?l=r.params:l=new Gi({fromObject:r.params})),o=new zs(e,i,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=z(o).pipe(fr(c=>this.handler.handle(c)));if(e instanceof zs||r.observe==="events")return s;let a=s.pipe(Ee(c=>c instanceof qs));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(ce(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new b(2806,!1);return c.body}));case"blob":return a.pipe(ce(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new b(2807,!1);return c.body}));case"text":return a.pipe(ce(c=>{if(c.body!==null&&typeof c.body!="string")throw new b(2808,!1);return c.body}));default:return a.pipe(ce(c=>c.body))}case"response":return a;default:throw new b(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new Gi().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,py(r,i))}post(e,i,r={}){return this.request("POST",e,py(r,i))}put(e,i,r={}){return this.request("PUT",e,py(r,i))}static \u0275fac=function(i){return new(i||t)(M(mf))};static \u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var YP=/^\)\]\}',?\n/;var yy=(()=>{class t{xhrFactory;tracingService=u(Gn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new b(-2800,!1);let i=this.xhrFactory;return z(null).pipe(Ke(()=>new Z(o=>{let s=i.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((T,Q)=>s.setRequestHeader(T,Q.join(","))),e.headers.has(df)||s.setRequestHeader(df,cx),!e.headers.has(Uc)){let T=e.detectContentTypeHeader();T!==null&&s.setRequestHeader(Uc,T)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let T=e.responseType.toLowerCase();s.responseType=T!=="json"?T:"text"}let a=e.serializeBody(),c=null,l=()=>{if(c!==null)return c;let T=s.statusText||"OK",Q=new xi(s.getAllResponseHeaders()),ke=s.responseURL||e.url;return c=new zc({headers:Q,status:s.status,statusText:T,url:ke}),c},d=this.maybePropagateTrace(()=>{let{headers:T,status:Q,statusText:ke,url:Et}=l(),Oe=null;Q!==PP&&(Oe=typeof s.response>"u"?s.responseText:s.response),Q===0&&(Q=Oe?lx:0);let Qe=Q>=200&&Q<300;if(e.responseType==="json"&&typeof Oe=="string"){let nt=Oe;Oe=Oe.replace(YP,"");try{Oe=Oe!==""?JSON.parse(Oe):null}catch(Nt){Oe=nt,Qe&&(Qe=!1,Oe={error:Nt,text:Oe})}}Qe?(o.next(new qs({body:Oe,headers:T,status:Q,statusText:ke,url:Et||void 0})),o.complete()):o.error(new Ci({error:Oe,headers:T,status:Q,statusText:ke,url:Et||void 0}))}),f=this.maybePropagateTrace(T=>{let{url:Q}=l(),ke=new Ci({error:T,status:s.status||0,statusText:s.statusText||"Unknown Error",url:Q||void 0});o.error(ke)}),h=f;e.timeout&&(h=this.maybePropagateTrace(T=>{let{url:Q}=l(),ke=new Ci({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:Q||void 0});o.error(ke)}));let m=!1,p=this.maybePropagateTrace(T=>{m||(o.next(l()),m=!0);let Q={type:Di.DownloadProgress,loaded:T.loaded};T.lengthComputable&&(Q.total=T.total),e.responseType==="text"&&s.responseText&&(Q.partialText=s.responseText),o.next(Q)}),_=this.maybePropagateTrace(T=>{let Q={type:Di.UploadProgress,loaded:T.loaded};T.lengthComputable&&(Q.total=T.total),o.next(Q)});s.addEventListener("load",d),s.addEventListener("error",f),s.addEventListener("timeout",h),s.addEventListener("abort",f);let x=e.reportProgress||e.reportUploadProgress,I=e.reportProgress||e.reportDownloadProgress;return I&&s.addEventListener("progress",p),x&&a!==null&&s.upload&&s.upload.addEventListener("progress",_),s.send(a),o.next({type:Di.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",d),s.removeEventListener("timeout",h),I&&s.removeEventListener("progress",p),x&&a!==null&&s.upload&&s.upload.removeEventListener("progress",_),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(i){return new(i||t)(M(ry))};static \u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),gf=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t[t.Xhr=7]="Xhr",t})(gf||{});function gx(t,n){return{\u0275kind:t,\u0275providers:n}}function vx(...t){let n=[pf,uf,ff,{provide:mf,useExisting:ff},{provide:hf,useFactory:()=>u(uf)},{provide:_y,useValue:fx,multi:!0}];for(let e of t)n.push(...e.\u0275providers);return Ln(n)}var ox=new v("");function yx(){return gx(gf.LegacyInterceptors,[{provide:ox,useFactory:KP},{provide:_y,useExisting:ox,multi:!0}])}function _x(){return gx(gf.Xhr,[yy,{provide:hf,useExisting:yy}])}var wy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({providers:[vx(yx(),_x())]})}return t})();var bx=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(M(K))};static \u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var $c=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=j({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=M(ZP),r},providedIn:"root"})}return t})(),ZP=(()=>{class t extends $c{_doc=u(K);sanitize(e,i){if(i==null)return null;switch(e){case Re.NONE:return i;case Re.HTML:return vi(i,"HTML")?nn(i):xu(this._doc,String(i)).toString();case Re.STYLE:return vi(i,"Style")?nn(i):i;case Re.SCRIPT:if(vi(i,"Script"))return nn(i);throw new b(5200,!1);case Re.URL:return vi(i,"URL")?nn(i):Sc(String(i));case Re.RESOURCE_URL:if(vi(i,"ResourceURL"))return nn(i);throw new b(-5201,!1);default:throw new b(5202,!1)}}bypassSecurityTrustHtml(e){return Gg(e)}bypassSecurityTrustStyle(e){return Wg(e)}bypassSecurityTrustScript(e){return Kg(e)}bypassSecurityTrustUrl(e){return Yg(e)}bypassSecurityTrustResourceUrl(e){return Qg(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var he="primary",nl=Symbol("RouteTitle"),Ny=class{params;constructor(n){this.params=n||{}}has(n){return Object.hasOwn(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Po(t){return new Ny(t)}function Cy(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Ix(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let c={},l=t.slice(0,i.length);return Cy(i,l,c)?{consumed:l,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),s=i.slice(r+1);if(o.length+s.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let a={};return!Cy(o,t.slice(0,o.length),a)||!Cy(s,t.slice(t.length-s.length),a)?null:{consumed:t,posParams:a}}function Sf(t){return new Promise((n,e)=>{t.pipe(Fi()).subscribe({next:i=>n(i),error:i=>e(i)})})}function XP(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Ei(t[e],n[e]))return!1;return!0}function Ei(t,n){let e=t?Iy(t):void 0,i=n?Iy(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Mx(t[r],n[r]))return!1;return!0}function Iy(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Mx(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function JP(t){return t.length>0?t[t.length-1]:null}function jo(t){return no(t)?t:$i(t)?qe(Promise.resolve(t)):z(t)}function Tx(t){return no(t)?Sf(t):Promise.resolve(t)}var eL={exact:Ax,subset:Ox},kx={exact:tL,subset:nL,ignored:()=>!0},Rx={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},My={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function wx(t,n,e){return eL[e.paths](t.root,n.root,e.matrixParams)&&kx[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function tL(t,n){return Ei(t,n)}function Ax(t,n,e){if(!Fo(t.segments,n.segments)||!_f(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!Ax(t.children[i],n.children[i],e))return!1;return!0}function nL(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>Mx(t[e],n[e]))}function Ox(t,n,e){return Fx(t,n,n.segments,e)}function Fx(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Fo(r,e)||n.hasChildren()||!_f(r,e,i))}else if(t.segments.length===e.length){if(!Fo(t.segments,e)||!_f(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!Ox(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Fo(t.segments,r)||!_f(t.segments,r,i)||!t.children[he]?!1:Fx(t.children[he],n,o,i)}}function _f(t,n,e){return n.every((i,r)=>kx[e](t[r].parameters,i.parameters))}var bn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new je([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Po(this.queryParams),this._queryParamMap}toString(){return oL.serialize(this)}},je=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return bf(this)}},Mr=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Po(this.parameters),this._parameterMap}toString(){return Lx(this)}};function iL(t,n){return Fo(t,n)&&t.every((e,i)=>Ei(e.parameters,n[i].parameters))}function Fo(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function rL(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===he&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==he&&(e=e.concat(n(r,i)))}),e}var Rr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:()=>new Ki})}return t})(),Ki=class{parse(n){let e=new ky(n);return new bn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${qc(n.root,!0)}`,i=cL(n.queryParams),r=typeof n.fragment=="string"?`#${sL(n.fragment)}`:"";return`${e}${i}${r}`}},oL=new Ki;function bf(t){return t.segments.map(n=>Lx(n)).join("/")}function qc(t,n){if(!t.hasChildren())return bf(t);if(n){let e=t.children[he]?qc(t.children[he],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==he&&i.push(`${r}:${qc(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=rL(t,(i,r)=>r===he?[qc(t.children[he],!1)]:[`${r}:${qc(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[he]!=null?`${bf(t)}/${e[0]}`:`${bf(t)}/(${e.join("//")})`}}function Px(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function vf(t){return Px(t).replace(/%3B/gi,";")}function sL(t){return encodeURI(t)}function Ty(t){return Px(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function wf(t){return decodeURIComponent(t)}function Sx(t){return wf(t.replace(/\+/g,"%20"))}function Lx(t){return`${Ty(t.path)}${aL(t.parameters)}`}function aL(t){return Object.entries(t).map(([n,e])=>`;${Ty(n)}=${Ty(e)}`).join("")}function cL(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${vf(e)}=${vf(r)}`).join("&"):`${vf(e)}=${vf(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var lL=/^[^\/()?;#]+/;function Dy(t){let n=t.match(lL);return n?n[0]:""}var dL=/^[^\/()?;=#]+/;function uL(t){let n=t.match(dL);return n?n[0]:""}var fL=/^[^=?&#]+/;function hL(t){let n=t.match(fL);return n?n[0]:""}var mL=/^[^&#]+/;function pL(t){let n=t.match(mL);return n?n[0]:""}var ky=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new je([],{}):new je([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new b(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[he]=new je(e,i)),r}parseSegment(){let n=Dy(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new b(4009,!1);return this.capture(n),new Mr(wf(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=uL(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=Dy(this.remaining);r&&(i=r,this.capture(i))}n[wf(e)]=wf(i)}parseQueryParam(n){let e=hL(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let s=pL(this.remaining);s&&(i=s,this.capture(i))}let r=Sx(e),o=Sx(i);if(Object.hasOwn(n,r)){let s=n[r];Array.isArray(s)||(s=[s],n[r]=s),s.push(o)}else n[r]=o}parseParens(n,e){let i=Object.create(null);for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Dy(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new b(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):n&&(s=he);let a=this.parseChildren(e+1);i[s??he]=Object.keys(a).length===1&&a[he]?a[he]:new je([],a),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new b(4011,!1)}};function jx(t){return t.segments.length>0?new je([],{[he]:t}):t}function Vx(t){let n=Object.create(null);for(let[i,r]of Object.entries(t.children)){let o=Vx(r);if(i===he&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))n[s]=a;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new je(t.segments,n);return gL(e)}function gL(t){if(t.numberOfChildren===1&&t.children[he]){let n=t.children[he];return new je(t.segments.concat(n.segments),n.children)}return t}function Tr(t){return t instanceof bn}function Bx(t,n,e=null,i=null,r=new Ki){let o=Hx(t);return Ux(o,n,e,i,r)}function Hx(t){let n;function e(o){let s={};for(let c of o.children){let l=e(c);s[c.outlet]=l}let a=new je(o.url,s);return o===t&&(n=a),a}let i=e(t.root),r=jx(i);return n??r}function Ux(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return xy(o,o,o,e,i,r);let s=vL(n);if(s.toRoot())return xy(o,o,new je([],{}),e,i,r);let a=yL(s,o,t),c=a.processChildren?Wc(a.segmentGroup,a.index,s.commands):$x(a.segmentGroup,a.index,s.commands);return xy(o,a.segmentGroup,c,e,i,r)}function Cf(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Yc(t){return typeof t=="object"&&t!=null&&t.outlets}function Cx(t,n,e){t||="\u0275";let i=new bn;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function xy(t,n,e,i,r,o){let s={};for(let[l,d]of Object.entries(i??{}))s[l]=Array.isArray(d)?d.map(f=>Cx(l,f,o)):Cx(l,d,o);let a;t===n?a=e:a=zx(t,n,e);let c=jx(Vx(a));return new bn(c,s,r)}function zx(t,n,e){let i=Object.create(null);return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=zx(o,n,e)}),new je(t.segments,i)}var Df=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&Cf(i[0]))throw new b(4003,!1);let r=i.find(Yc);if(r&&r!==JP(i))throw new b(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function vL(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Df(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?e=!0:a===".."?n++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new Df(e,n,i)}var Ws=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function yL(t,n,e){if(t.isAbsolute)return new Ws(n,!0,0);if(!e)return new Ws(n,!1,NaN);if(e.parent===null)return new Ws(e,!0,0);let i=Cf(t.commands[0])?0:1,r=e.segments.length-1+i;return _L(e,r,t.numberOfDoubleDots)}function _L(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new b(4005,!1);r=i.segments.length}return new Ws(i,!1,r-o)}function bL(t){return Yc(t[0])?t[0].outlets:{[he]:t}}function $x(t,n,e){if(t??=new je([],{}),t.segments.length===0&&t.hasChildren())return Wc(t,n,e);let i=wL(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new je(t.segments.slice(0,i.pathIndex),{});return o.children[he]=new je(t.segments.slice(i.pathIndex),t.children),Wc(o,0,r)}else return i.match&&r.length===0?new je(t.segments,{}):i.match&&!t.hasChildren()?Ry(t,n,e):i.match?Wc(t,0,r):Ry(t,n,e)}function Wc(t,n,e){if(e.length===0)return new je(t.segments,{});{let i=bL(e),r=Object.create(null);if(Object.keys(i).some(o=>o!==he)&&t.children[he]&&t.numberOfChildren===1&&t.children[he].segments.length===0){let o=Wc(t.children[he],n,e);return new je(t.segments,o.children)}return Object.entries(i).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=$x(t.children[o],n,s))}),Object.entries(t.children).forEach(([o,s])=>{i[o]===void 0&&(r[o]=s)}),new je(t.segments,r)}}function wL(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let s=t.segments[r],a=e[i];if(Yc(a))break;let c=`${a}`,l=i<e.length-1?e[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!xx(c,l,s))return o;i+=2}else{if(!xx(c,{},s))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Ry(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(Yc(o)){let c=SL(o.outlets);return new je(i,c)}if(r===0&&Cf(e[0])){let c=t.segments[n];i.push(new Mr(c.path,Dx(e[0]))),r++;continue}let s=Yc(o)?o.outlets[he]:`${o}`,a=r<e.length-1?e[r+1]:null;s&&a&&Cf(a)?(i.push(new Mr(s,Dx(a))),r+=2):(i.push(new Mr(s,{})),r++)}return new je(i,{})}function SL(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=Ry(new je([],{}),0,i))}),n}function Dx(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function xx(t,n,e){return t==e.path&&Ei(n,e.parameters)}var Ks="imperative",Dt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(Dt||{}),wn=class{id;url;constructor(n,e){this.id=n,this.url=e}},kr=class extends wn{type=Dt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Rn=class extends wn{urlAfterRedirects;type=Dt.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},qt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(qt||{}),Qs=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Qs||{}),kn=class extends wn{reason;code;type=Dt.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function qx(t){return t instanceof kn&&(t.code===qt.Redirect||t.code===qt.SupersededByNewNavigation)}var Ni=class extends wn{reason;code;type=Dt.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},Lo=class extends wn{error;target;type=Dt.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Qc=class extends wn{urlAfterRedirects;state;type=Dt.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},xf=class extends wn{urlAfterRedirects;state;type=Dt.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ef=class extends wn{urlAfterRedirects;state;shouldActivate;type=Dt.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Nf=class extends wn{urlAfterRedirects;state;type=Dt.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},If=class extends wn{urlAfterRedirects;state;type=Dt.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Mf=class{route;type=Dt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Tf=class{route;type=Dt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},kf=class{snapshot;type=Dt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Rf=class{snapshot;type=Dt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Af=class{snapshot;type=Dt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Of=class{snapshot;type=Dt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Zs=class{routerEvent;position;anchor;scrollBehavior;type=Dt.Scroll;constructor(n,e,i,r){this.routerEvent=n,this.position=e,this.anchor=i,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},Xs=class{},Zc=class{},Js=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function CL(t){return!(t instanceof Xs)&&!(t instanceof Js)&&!(t instanceof Zc)}var Ff=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Vo(this.rootInjector)}},Vo=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new Ff(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(M(Be))};static \u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Pf=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Ay(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=Ay(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Oy(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Oy(n,this._root).map(e=>e.value)}};function Ay(t,n){if(t===n.value)return n;for(let e of n.children){let i=Ay(t,e);if(i)return i}return null}function Oy(t,n){if(t===n.value)return[n];for(let e of n.children){let i=Oy(t,e);if(i.length)return i.unshift(n),i}return[]}var _n=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function Gs(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Xc=class extends Pf{snapshot;constructor(n,e){super(n),this.snapshot=e,$y(this,n)}toString(){return this.snapshot.toString()}};function Gx(t,n){let e=DL(t,n),i=new ut([new Mr("",{})]),r=new ut({}),o=new ut({}),s=new ut({}),a=new ut(""),c=new Yi(i,r,s,a,o,he,t,e.root);return c.snapshot=e.root,new Xc(new _n(c,[]),e)}function DL(t,n){let e={},i={},r={},s=new ea([],e,r,"",i,he,t,null,{},n);return new Jc("",new _n(s,[]))}var Yi=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(n,e,i,r,o,s,a,c){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(ce(l=>l[nl]))??z(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ce(n=>Po(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ce(n=>Po(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(n){this._futureSnapshot=n,this.pending?.set(!0)}},xL="always";function zy(t,n,e){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:y(y({},n.params),t.params),data:y(y({},n.data),t.data),resolve:y(y(y(y({},t.data),n.data),r?.data),t._resolvedData)}:i={params:y({},t.params),data:y({},t.data),resolve:y(y({},t.data),t._resolvedData??{})},r&&Kx(r)&&(i.resolve[nl]=r.title),i}var ea=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[nl]}constructor(n,e,i,r,o,s,a,c,l,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=c,this._resolve=l,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Po(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Po(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Jc=class extends Pf{url;constructor(n,e){super(e),this.url=n,$y(this,e)}toString(){return Wx(this._root)}};function $y(t,n){n.value._routerState=t,n.children.forEach(e=>$y(t,e))}function Wx(t){let n=t.children.length>0?` { ${t.children.map(Wx).join(", ")} } `:"";return`${t.value}${n}`}function Ey(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Ei(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Ei(n.params,e.params)||t.paramsSubject.next(e.params),XP(n.url,e.url)||t.urlSubject.next(e.url),Ei(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Fy(t,n){let e=Ei(t.params,n.params)&&iL(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||Fy(t.parent,n.parent))}function Kx(t){return typeof t.title=="string"||t.title===null}var Yx=new v(""),il=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=he;activateEvents=new ee;deactivateEvents=new ee;attachEvents=new ee;detachEvents=new ee;routerOutletData=$t();parentContexts=u(Vo);location=u(et);changeDetector=u(Ye);inputBinder=u(rl,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new b(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new b(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new b(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new b(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Py(e,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[We]})}return t})(),Py=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Yi?this.route:n===Vo?this.childContexts:n===Yx?this.outletData:this.parent.get(n,e)}},rl=new v(""),Qx=(()=>{class t{options;outletDataSubscriptions=new Map;outletSeenKeys=new Map;constructor(e){this.options=e,this.options.queryParams??=!0}bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e),this.outletSeenKeys.delete(e)}subscribeToRouteData(e){let{activatedRoute:i}=e,r=lr([this.options.queryParams?i.queryParams:z({}),i.params,i.data]).pipe(Ke(([o,s,a],c)=>(a=y(y(y({},o),s),a),c===0?z(a):Promise.resolve(a)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(e);return}let s=LD(i.component);if(!s){this.unsubscribeFromRouteData(e);return}let a=this.outletSeenKeys.get(e);a||(a=new Set,this.outletSeenKeys.set(e,a));for(let l of Object.keys(o))a.add(l);let c=this.options.unmatchedInputBehavior??"alwaysUndefined";for(let{templateName:l}of s.inputs){let d=o[l];(d!==void 0||c==="alwaysUndefined"||a.has(l))&&e.activatedComponentRef.setInput(l,d)}});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(i){Io()};static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})(),qy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&te(0,"router-outlet")},dependencies:[il],encapsulation:2,changeDetection:1})}return t})();function Gy(t){let n=t.children&&t.children.map(Gy),e=n?W(y({},t),{children:n}):y({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==he&&(e.component=qy),e}function EL(t,n,e){let i=new Set,r=el(t,n._root,e?e._root:void 0,i);return{newlyCreatedRoutes:i,state:new Xc(r,n)}}function el(t,n,e,i){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let r=e.value;r._setPending(n.value);let o=NL(t,n,e,i);return new _n(r,o)}else{if(t.shouldAttach(n.value)){let s=t.retrieve(n.value);if(s!==null){let a=s.route;return a.value._setPending(n.value),a.children=n.children.map(c=>el(t,c,void 0,i)),a}}let r=IL(n.value);r._setPending(n.value),i.add(r);let o=n.children.map(s=>el(t,s,void 0,i));return new _n(r,o)}}function NL(t,n,e,i){return n.children.map(r=>{for(let o of e.children)if(t.shouldReuseRoute(r.value,o.value.snapshot))return el(t,r,o,i);return el(t,r,void 0,i)})}function IL(t){return new Yi(new ut(t.url),new ut(t.params),new ut(t.queryParams),new ut(t.fragment),new ut(t.data),t.outlet,t.component,t)}var ta=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},Zx="ngNavigationCancelingError";function Lf(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=Tr(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=Xx(!1,qt.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function Xx(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[Zx]=!0,e.cancellationCode=n,e}function ML(t){return Jx(t)&&Tr(t.url)}function Jx(t){return!!t&&t[Zx]}var Ly=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),Ey(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=Gs(e);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],i),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let s=i.getContext(r.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Gs(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(i&&i.outlet){let s=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Gs(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null),n.value._localInjector?.destroy()}activateChildRoutes(n,e,i){let r=Gs(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new Of(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Rf(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(Ey(r),r===o)if(r.component){let s=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let s=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Ey(a.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,i)}},jf=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Ys=class{component;route;constructor(n,e){this.component=n,this.route=e}};function TL(t,n,e){let i=t._root,r=n?n._root:null;return Gc(i,r,e,[i.value])}function kL(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function ia(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!cp(t)?t:n.get(t):i}function Gc(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Gs(n);return t.children.forEach(s=>{RL(s,o[s.value.outlet],e,i.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>Kc(a,e.getContext(s),e,r)),r}function RL(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=n?n.value:null,a=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let c=AL(s,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new jf(i)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?Gc(t,n,a?a.children:null,i,r):Gc(t,n,e,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Ys(a.outlet.component,s))}else s&&Kc(n,a,e,r),r.canActivateChecks.push(new jf(i)),o.component?Gc(t,null,a?a.children:null,i,r):Gc(t,null,e,i,r);return r}function AL(t,n,e){if(typeof e=="function")return bt(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!Fo(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Fo(t.url,n.url)||!Ei(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Fy(t,n)||!Ei(t.queryParams,n.queryParams);default:return!Fy(t,n)}}function Kc(t,n,e,i){let r=Gs(t),o=t.value;Object.entries(r).forEach(([s,a])=>{o.component?n?Kc(a,n.children.getContext(s),n.children,i):Kc(a,null,null,i):Kc(a,e?e.getContext(s):null,e,i)}),o.component?n&&n.outlet&&n.outlet.isActivated?i.canDeactivateChecks.push(new Ys(n.outlet.component,o)):i.canDeactivateChecks.push(new Ys(null,o)):i.canDeactivateChecks.push(new Ys(null,o))}function ol(t){return typeof t=="function"}function OL(t){return typeof t=="boolean"}function FL(t){return t&&ol(t.canLoad)}function PL(t){return t&&ol(t.canActivate)}function LL(t){return t&&ol(t.canActivateChild)}function jL(t){return t&&ol(t.canDeactivate)}function VL(t){return t&&ol(t.canMatch)}function eE(t){return t instanceof io||t?.name==="EmptyError"}var yf=Symbol("INITIAL_VALUE");function na(){return Ke(t=>lr(t.map(n=>n.pipe(ft(1),Mt(yf)))).pipe(ce(n=>{for(let e of n)if(e!==!0){if(e===yf)return yf;if(e===!1||BL(e))return e}return!0}),Ee(n=>n!==yf),ft(1)))}function BL(t){return Tr(t)||t instanceof ta}function tE(t){return t.aborted?z(void 0).pipe(ft(1)):new Z(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function nE(t){return Fe(tE(t))}function HL(t){return At(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?z(W(y({},n),{guardsResult:!0})):UL(o,e,i).pipe(At(s=>s&&OL(s)?zL(e,r,t):z(s)),ce(s=>W(y({},n),{guardsResult:s})))})}function UL(t,n,e){return qe(t).pipe(At(i=>KL(i.component,i.route,e,n)),Fi(i=>i!==!0,!0))}function zL(t,n,e){return qe(n).pipe(fr(i=>ps(qL(i.route.parent,e),$L(i.route,e),WL(t,i.path),GL(t,i.route))),Fi(i=>i!==!0,!0))}function $L(t,n){return t!==null&&n&&n(new Af(t)),z(!0)}function qL(t,n){return t!==null&&n&&n(new kf(t)),z(!0)}function GL(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return z(!0);let i=e.map(r=>Ha(()=>{let o=n._environmentInjector,s=ia(r,o),a=PL(s)?s.canActivate(n,t):bt(o,()=>s(n,t));return jo(a).pipe(Fi())}));return z(i).pipe(na())}function WL(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>kL(o)).filter(o=>o!==null).map(o=>Ha(()=>{let s=o.guards.map(a=>{let c=o.node._environmentInjector,l=ia(a,c),d=LL(l)?l.canActivateChild(e,t):bt(c,()=>l(e,t));return jo(d).pipe(Fi())});return z(s).pipe(na())}));return z(r).pipe(na())}function KL(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return z(!0);let o=r.map(s=>{let a=n._environmentInjector,c=ia(s,a),l=jL(c)?c.canDeactivate(t,n,e,i):bt(a,()=>c(t,n,e,i));return jo(l).pipe(Fi())});return z(o).pipe(na())}function YL(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return z(!0);let s=o.map(a=>{let c=ia(a,t),l=FL(c)?c.canLoad(n,e):bt(t,()=>c(n,e)),d=jo(l);return r?d.pipe(nE(r)):d});return z(s).pipe(na(),iE(i))}function iE(t){return Wl(Tt(n=>{if(typeof n!="boolean")throw Lf(t,n)}),ce(n=>n===!0))}function QL(t,n,e,i,r,o){let s=n.canMatch;if(!s||s.length===0)return z(!0);let a=s.map(c=>{let l=ia(c,t),d=VL(l)?l.canMatch(n,e,r):bt(t,()=>l(n,e,r));return jo(d).pipe(nE(o))});return z(a).pipe(na(),iE(i))}var Wi=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},tl=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function ZL(t){throw new b(4e3,!1)}function XL(t){throw Xx(!1,qt.GuardRejected)}var jy=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}lineralizeSegments(n,e){return Te(this,null,function*(){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[he])throw ZL(`${n.redirectTo}`);r=r.children[he]}})}applyRedirectCommands(n,e,i,r,o){return Te(this,null,function*(){let s=yield JL(e,r,o);if(s instanceof bn)throw new tl(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,i);if(s[0]==="/")throw new tl(a);return a})}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new bn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);i[r]=e[a]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),s=Object.create(null);return Object.entries(e.children).forEach(([a,c])=>{s[a]=this.createSegmentGroup(n,c,i,r)}),new je(o,s)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new b(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function JL(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Sf(jo(bt(e,()=>i(n))))}function ej(t,n){return t.providers&&!t._injector&&(t._injector=Bs(t.providers,n,`Route: ${t.path}`)),t._injector??n}function Qn(t){return t.outlet||he}function tj(t,n){let e=t.filter(i=>Qn(i)===n);return e.push(...t.filter(i=>Qn(i)!==n)),e}var Vy={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function rE(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function nj(t,n,e,i,r,o,s){let a=oE(t,n,e);if(!a.matched)return z(a);let c=rE(o(a));return i=ej(n,i),QL(i,n,e,r,c,s).pipe(ce(l=>l===!0?a:y({},Vy)))}function oE(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?y({},Vy):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||Ix)(e,t,n);if(!r)return y({},Vy);let o={};Object.entries(r.posParams??{}).forEach(([a,c])=>{o[a]=c.path});let s=r.consumed.length>0?y(y({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function Ex(t,n,e,i,r){return e.length>0&&oj(t,e,i,r)?{segmentGroup:new je(n,rj(i,new je(e,t.children))),slicedSegments:[]}:e.length===0&&sj(t,e,i)?{segmentGroup:new je(t.segments,ij(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new je(t.segments,t.children),slicedSegments:e}}function ij(t,n,e,i){let r={};for(let o of e)if(Bf(t,n,o)&&!i[Qn(o)]){let s=new je([],{});r[Qn(o)]=s}return y(y({},i),r)}function rj(t,n){let e={};e[he]=n;for(let i of t)if(i.path===""&&Qn(i)!==he){let r=new je([],{});e[Qn(i)]=r}return e}function oj(t,n,e,i){return e.some(r=>!Bf(t,n,r)||!(Qn(r)!==he)?!1:!(i!==void 0&&Qn(r)===i))}function sj(t,n,e){return e.some(i=>Bf(t,n,i))}function Bf(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function aj(t,n,e){return n.length===0&&!t.children[e]}var By=class{};function cj(t,n,e,i,r,o,s,a){return Te(this,null,function*(){return new Hy(t,n,e,i,r,s,o,a).recognize()})}var lj=31,Hy=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,s,a,c){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=c,this.applyRedirects=new jy(this.urlSerializer,this.urlTree)}noMatchError(n){return new b(4002,`'${n.segmentGroup}'`)}recognize(){return Te(this,null,function*(){let n=Ex(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=yield this.match(n),r=new _n(i,e),o=new Jc("",r),s=Bx(i,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}})}match(n){return Te(this,null,function*(){let e=new ea([],Object.freeze({}),Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),he,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,n,he,e),rootSnapshot:e}}catch(i){if(i instanceof tl)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Wi?this.noMatchError(i):i}})}processSegmentGroup(n,e,i,r,o){return Te(this,null,function*(){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let s=yield this.processSegment(n,e,i,i.segments,r,!0,o);return s instanceof _n?[s]:[]})}processChildren(n,e,i,r){return Te(this,null,function*(){let o=[];for(let c of Object.keys(i.children))c==="primary"?o.unshift(c):o.push(c);let s=[];for(let c of o){let l=i.children[c],d=tj(e,c),f=yield this.processSegmentGroup(n,d,l,c,r);s.push(...f)}let a=sE(s);return dj(a),a})}processSegment(n,e,i,r,o,s,a){return Te(this,null,function*(){for(let c of e)try{return yield this.processSegmentAgainstRoute(c._injector??n,e,c,i,r,o,s,a)}catch(l){if(l instanceof Wi||eE(l))continue;throw l}if(aj(i,r,o))return new By;throw new Wi(i)})}processSegmentAgainstRoute(n,e,i,r,o,s,a,c){return Te(this,null,function*(){if(Qn(i)!==s&&(s===he||!Bf(r,o,i)))throw new Wi(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,s,c);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,s,c);throw new Wi(r)})}expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,s,a){return Te(this,null,function*(){let{matched:c,parameters:l,consumedSegments:d,positionalParamSegments:f,remainingSegments:h}=oE(e,r,o);if(!c)throw new Wi(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>lj&&(this.allowRedirects=!1));let m=this.createSnapshot(n,r,o,l,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let p=yield this.applyRedirects.applyRedirectCommands(d,r.redirectTo,f,rE(m),n),_=yield this.applyRedirects.lineralizeSegments(r,p);return this.processSegment(n,i,e,_.concat(h),s,!1,a)})}createSnapshot(n,e,i,r,o){let s=new ea(i,r,Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,fj(e),Qn(e),e.component??e._loadedComponent??null,e,hj(e),n),a=zy(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}matchSegmentAgainstRoute(n,e,i,r,o,s){return Te(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=Q=>this.createSnapshot(n,i,Q.consumedSegments,Q.parameters,s),c=yield Sf(nj(e,i,r,n,this.urlSerializer,a,this.abortSignal));if(i.path==="**"&&(e.children={}),!c?.matched)throw new Wi(e);n=i._injector??n;let{routes:l}=yield this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:f,consumedSegments:h,remainingSegments:m}=c,p=this.createSnapshot(n,i,h,f,s),{segmentGroup:_,slicedSegments:x}=Ex(e,h,m,l,o);if(x.length===0&&_.hasChildren()){let Q=yield this.processChildren(d,l,_,p);return new _n(p,Q)}if(l.length===0&&x.length===0)return new _n(p,[]);let I=Qn(i)===o,T=yield this.processSegment(d,l,_,x,I?he:o,!0,p);return new _n(p,T instanceof _n?[T]:[])})}getChildConfig(n,e,i){return Te(this,null,function*(){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield Sf(YL(n,e,i,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw XL(e)}return{routes:[],injector:n}})}};function dj(t){t.sort((n,e)=>n.value.outlet===he?-1:e.value.outlet===he?1:n.value.outlet.localeCompare(e.value.outlet))}function uj(t){let n=t.value.routeConfig;return n&&n.path===""}function sE(t){let n=[],e=new Set;for(let i of t){if(!uj(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=sE(i.children);n.push(new _n(i.value,r))}return n.filter(i=>!e.has(i))}function fj(t){return t.data||{}}function hj(t){return t.resolve||{}}function mj(t,n,e,i,r,o,s){return At(a=>Te(null,null,function*(){let{state:c,tree:l}=yield cj(t,n,e,i,a.extractedUrl,r,o,s);return W(y({},a),{targetSnapshot:c,urlAfterRedirects:l})}))}function pj(t){return At(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return z(n);let r=new Set(i.map(a=>a.route)),o=new Set;for(let a of r)if(!o.has(a))for(let c of aE(a))o.add(c);let s=0;return qe(o).pipe(fr(a=>r.has(a)?gj(a,e,t):(a.data=zy(a,a.parent,t).resolve,z(void 0))),Tt(()=>s++),bd(1),At(a=>s===o.size?z(n):rt))})}function aE(t){let n=t.children.map(e=>aE(e)).flat();return[t,...n]}function gj(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!Kx(i)&&(r[nl]=i.title),Ha(()=>(t.data=zy(t,t.parent,e).resolve,vj(r,t,n).pipe(ce(o=>(t._resolvedData=o,t.data=y(y({},t.data),o),null)))))}function vj(t,n,e){let i=Iy(t);if(i.length===0)return z({});let r={};return qe(i).pipe(At(o=>yj(t[o],n,e).pipe(Fi(),Tt(s=>{if(s instanceof ta)throw Lf(new Ki,s);r[o]=s}))),bd(1),ce(()=>r),ur(o=>eE(o)?rt:Ba(o)))}function yj(t,n,e){let i=n._environmentInjector,r=ia(t,i),o=r.resolve?r.resolve(n,e):bt(i,()=>r(n,e));return jo(o)}var cE=new v("");function Uy(t){return Ke(n=>{let e=t(n);return e?qe(e).pipe(ce(()=>n)):z(n)})}var Wy=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===he);return i}getResolvedTitleForRoute(e){return e.data[nl]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:()=>u(lE)})}return t})(),lE=(()=>{class t extends Wy{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(M(bx))};static \u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ar=new v("",{factory:()=>({})}),ra=new v(""),Hf=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(Fv);loadComponent(e,i){return Te(this,null,function*(){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=Te(this,null,function*(){try{let o=yield Tx(bt(e,()=>i.loadComponent())),s=yield uE(Gv(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=s,s}finally{this.componentLoaders.delete(i)}});return this.componentLoaders.set(i,r),r})}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=Te(this,null,function*(){try{let o=yield dE(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}});return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();function dE(t,n,e,i){return Te(this,null,function*(){let r=yield Tx(bt(e,()=>t.loadChildren())),o=yield uE(Gv(r)),s;o instanceof Fu||Array.isArray(o)?s=o:s=yield n.compileModuleAsync(o),i&&i(t);let a,c,l=!1,d;return Array.isArray(s)?(c=s,l=!0):(a=s.create(e).injector,d=s,c=a.get(ra,[],{optional:!0,self:!0}).flat()),{routes:c.map(Gy),injector:a,factory:d}})}function uE(t){return Te(this,null,function*(){return t})}var Uf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:()=>u(_j)})}return t})(),_j=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),Ky=new v(""),Yy=new v("");function fE(t,n,e){let i=t.get(Yy),r=t.get(K);if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(l=>setTimeout(l));let o,s=new Promise(l=>{o=l}),a=r.startViewTransition(()=>(o(),bj(t)));a.updateCallbackDone.catch(l=>{}),a.ready.catch(l=>{}),a.finished.catch(l=>{});let{onViewTransitionCreated:c}=i;return c&&bt(t,()=>c({transition:a,from:n,to:e})),s}function bj(t){return new Promise(n=>{Pt({read:()=>setTimeout(n)},{injector:t})})}var wj=()=>{},Qy=new v(""),zf=(()=>{class t{currentNavigation=H(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=H(null);events=new N;transitionAbortWithErrorSubject=new N;configLoader=u(Hf);environmentInjector=u(Be);destroyRef=u(Ze);urlSerializer=u(Rr);rootContexts=u(Vo);location=u(Si);inputBindingEnabled=u(rl,{optional:!0})!==null;titleStrategy=u(Wy);options=u(Ar,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||xL;urlHandlingStrategy=u(Uf);createViewTransition=u(Ky,{optional:!0});navigationErrorHandler=u(Qy,{optional:!0});routerResourcesFeature=u(cE,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>z(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Mf(r)),i=r=>this.events.next(new Tf(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;Ce(()=>{this.transitions?.next(W(y({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new ut(null),this.transitions.pipe(Ee(i=>i!==null),Ke(i=>{let r=!0,o=!1,s=new AbortController,a=()=>!o&&this.currentTransition?.id===i.id;return z(i).pipe(Ke(c=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",qt.SupersededByNewNavigation),rt;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,targetBrowserUrl:typeof c.extras.browserUrl=="string"?this.urlSerializer.parse(c.extras.browserUrl):c.extras.browserUrl,trigger:c.source,extras:c.extras,previousNavigation:l?W(y({},l),{previousNavigation:null}):null,abort:()=>s.abort(),routesRecognizeHandler:c.routesRecognizeHandler,beforeActivateHandler:c.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=c.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&f!=="reload")return this.events.next(new Ni(c.id,this.urlSerializer.serialize(c.rawUrl),"",Qs.IgnoredSameUrlNavigation)),c.resolve(!1),rt;if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return z(c).pipe(Ke(h=>(this.events.next(new kr(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),h.id!==this.navigationId?rt:Promise.resolve(h))),mj(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,s.signal),Tt(h=>{i.targetSnapshot=h.targetSnapshot,i.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation.update(m=>(m.finalUrl=h.urlAfterRedirects,m)),this.events.next(new Zc)}),Ke(h=>qe(i.routesRecognizeHandler.deferredHandle??z(void 0)).pipe(ce(()=>h))),Tt(()=>{let h=new Qc(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(h)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:h,extractedUrl:m,source:p,restoredState:_,extras:x}=c,I=new kr(h,this.urlSerializer.serialize(m),p,_);this.events.next(I);let T=Gx(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=W(y({},c),{targetSnapshot:T,urlAfterRedirects:m,extras:W(y({},x),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Q=>(Q.finalUrl=m,Q)),z(i)}else return this.events.next(new Ni(c.id,this.urlSerializer.serialize(c.extractedUrl),"",Qs.IgnoredByUrlHandlingStrategy)),c.resolve(!1),rt}),ce(c=>{let l=new xf(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);return this.events.next(l),this.currentTransition=i=W(y({},c),{guards:TL(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),i}),HL(c=>this.events.next(c)),Ke(c=>{if(i.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!="boolean")throw Lf(this.urlSerializer,c.guardsResult);let l=new Ef(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);if(this.events.next(l),!a())return rt;if(!c.guardsResult)return this.cancelNavigationTransition(c,"",qt.GuardRejected),rt;if(c.guards.canActivateChecks.length===0)return z(c);let d=new Nf(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);if(this.events.next(d),!a())return rt;let f=!1;return z(c).pipe(pj(this.paramsInheritanceStrategy),Tt({next:()=>{f=!0;let h=new If(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(h)},complete:()=>{f||this.cancelNavigationTransition(c,"",qt.NoDataFromResolver)}}))}),Uy(c=>{let l=f=>{let h=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let m=f._environmentInjector;h.push(this.configLoader.loadComponent(m,f.routeConfig).then(p=>{f.component=p}))}for(let m of f.children)h.push(...l(m));return h},d=l(c.targetSnapshot.root);return d.length===0?z(c):qe(Promise.all(d).then(()=>c))}),Ke(c=>{let{newlyCreatedRoutes:l,state:d}=EL(e.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);return this.currentTransition=i=c=W(y({},c),{targetRouterState:d,newlyCreatedRoutes:l}),this.currentNavigation.update(f=>(f.targetRouterState=d,f)),z(c)}),this.routerResourcesFeature?.setupAndRunResources(s.signal)??(c=>c),Uy(()=>this.afterPreactivation()),Ke(()=>{let{currentSnapshot:c,targetSnapshot:l}=i,d=this.createViewTransition?.(this.environmentInjector,c.root,l.root);return d?qe(d).pipe(ce(()=>i)):z(i)}),ft(1),Ke(c=>{r=!1,this.events.next(new Xs);let l=i.beforeActivateHandler.deferredHandle;return l?qe(l.then(()=>c)):z(c)}),Tt(c=>{new Ly(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),c.newlyCreatedRoutes?.clear(),a()&&(hE(c.targetRouterState),o=!0,this.currentNavigation.update(l=>(l.abort=wj,l)),this.lastSuccessfulNavigation.set(Ce(this.currentNavigation)),this.events.next(new Rn(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0))}),Fe(tE(s.signal).pipe(Ee(()=>!o&&r),Tt(()=>{this.cancelNavigationTransition(i,s.signal.reason+"",qt.Aborted)}))),Tt({complete:()=>{o=!0}}),Fe(this.transitionAbortWithErrorSubject.pipe(Tt(c=>{throw c}))),hr(()=>{s.abort(),o||this.cancelNavigationTransition(i,"",qt.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),ur(c=>{if(o=!0,Nx(i),this.destroyed)return i.resolve(!1),rt;if(Jx(c))this.events.next(new kn(i.id,this.urlSerializer.serialize(i.extractedUrl),c.message,c.cancellationCode)),ML(c)?this.events.next(new Js(c.url,c.navigationBehaviorOptions)):i.resolve(!1);else{let l=new Lo(i.id,this.urlSerializer.serialize(i.extractedUrl),c,i.targetSnapshot??void 0);try{let d=bt(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(d instanceof ta){let{message:f,cancellationCode:h}=Lf(this.urlSerializer,d);this.events.next(new kn(i.id,this.urlSerializer.serialize(i.extractedUrl),f,h)),this.events.next(new Js(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(l),c}catch(d){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(d)}}return rt}))}))}cancelNavigationTransition(e,i,r){Nx(e);let o=new kn(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=Ce(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();function Sj(t){return t!==Ks}function Nx(t){for(let n of t.newlyCreatedRoutes??[])n._localInjector?.destroy(),n._localInjector=void 0;hE(t.targetRouterState)}function hE(t){if(!t)return;let n=e=>{e.value.pending?.set(!1),e.children.forEach(n)};n(t._root)}var mE=new v("");var pE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:()=>u(Cj)})}return t})(),Vf=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},Cj=(()=>{class t extends Vf{static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),$f=(()=>{class t{urlSerializer=u(Rr);options=u(Ar,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(Si);urlHandlingStrategy=u(Uf);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new bn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,s=r??o;return s instanceof bn?this.urlSerializer.serialize(s):s}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=Gx(null,u(Be));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:()=>u(Dj)})}return t})(),Dj=(()=>{class t extends $f{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof kr?this.updateStateMemento():e instanceof Ni?this.commitTransition(i):e instanceof Qc?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Xs?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof kn&&!qx(e)?this.restoreHistory(i):e instanceof Lo?this.restoreHistory(i,!0):e instanceof Rn&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:s,state:a}=r;if(this.location.isCurrentPathEqualTo(e)||s){let c=this.browserPageId,l=y(y({},a),this.generateNgRouterState(o,c,i));this.location.replaceState(e,"",l)}else{let c=y(y({},a),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",c)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?y({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):y({navigationId:e},this.routerUrlState(r))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();function qf(t,n){t.events.pipe(Ee(e=>e instanceof Rn||e instanceof kn||e instanceof Lo||e instanceof Ni),ce(e=>e instanceof Rn||e instanceof Ni?0:(e instanceof kn?e.code===qt.Redirect||e.code===qt.SupersededByNewNavigation:!1)?2:1),Ee(e=>e!==2),ft(1)).subscribe(()=>{n()})}var Ii=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(Lu);stateManager=u($f);options=u(Ar,{optional:!0})||{};pendingTasks=u(mi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(zf);urlSerializer=u(Rr);location=u(Si);urlHandlingStrategy=u(Uf);injector=u(Be);_events=new N;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(pE);injectorCleanup=u(mE,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(ra,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(rl,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ue;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=Ce(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof kn&&i.code!==qt.Redirect&&i.code!==qt.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Rn)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof Js){let s=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=y({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Sj(r.source)},s);this.scheduleNavigation(a,Ks,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}CL(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ks,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let s=r?.navigationId?r:null,a=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=W(y({},o),{browserUrl:e})),r){let l=y({},r);delete l.navigationId,delete l.\u0275routerPageId,delete l.\u0275routerUrl,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(a);this.scheduleNavigation(c,i,s,o).catch(l=>{this.disposed||this.injector.get(Nn)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Ce(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Gy),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:s,d=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":d=y(y({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let h=r?r.snapshot:this.routerState.snapshot.root;f=Hx(h)}catch(h){(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return Ux(f,e,d,l??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=Tr(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Ks,null,i)}navigate(e,i={skipLocationChange:!1}){return xj(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(i){return this.console.warn(en(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=y({},Rx):i===!1?r=y({},My):r=y(y({},My),i),Tr(e))return wx(this.currentUrlTree,e,r);let o=this.parseUrl(e);return wx(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,c,l;s?(a=s.resolve,c=s.reject,l=s.promise):l=new Promise((f,h)=>{a=f,c=h});let d=this.pendingTasks.add();return qf(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();function xj(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new b(4008,!1)}var Nj=(()=>{class t{router=u(Ii);stateManager=u($f);fragment=H("");queryParams=H({});path=H("");serializer=u(Rr);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Rn&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new bn(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),oa=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=u(new Tn("href"),{optional:!0});reactiveHref=qu(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Ce(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Ce(this._target)}_target=H(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Ce(this._queryParams)}_queryParams=H(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Ce(this._fragment)}_fragment=H(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Ce(this._queryParamsHandling)}_queryParamsHandling=H(void 0);set state(e){this._state.set(e)}get state(){return Ce(this._state)}_state=H(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Ce(this._info)}_info=H(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Ce(this._relativeTo)}_relativeTo=H(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Ce(this._preserveFragment)}_preserveFragment=H(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Ce(this._skipLocationChange)}_skipLocationChange=H(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Ce(this._replaceUrl)}_replaceUrl=H(!1);browserUrl=$t(void 0);isAnchorElement;onChanges=new N;applicationErrorHandler=u(Nn);options=u(Ar,{optional:!0});reactiveRouterState=u(Nj);constructor(e,i,r,o,s,a){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=s,this.locationStrategy=a;let c=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=H(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Tr(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,s){let a=this._urlTree();if(a===null||this.isAnchorElement&&(e!==0||i||r||o||s||typeof this.target=="string"&&this.target!="_self"))return!0;let c=this.browserUrl(),l=y({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},c!==void 0&&{browserUrl:c});return this.router.navigateByUrl(a,l)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=Je(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:Tr(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return Ce(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(be(Ii),be(Yi),wc("tabindex"),be(He),be(L),be(Yn))};static \u0275dir=E({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&ge("click",function(s){return r.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),i&2&&fe("href",r.reactiveHref(),Xg)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",P],skipLocationChange:[2,"skipLocationChange","skipLocationChange",P],replaceUrl:[2,"replaceUrl","replaceUrl",P],browserUrl:[1,"browserUrl"],routerLink:"routerLink"},features:[We]})}return t})();var sl=class{};var gE=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,i,r,o){this.router=e,this.injector=i,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(Ee(e=>e instanceof Rn),fr(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,i){let r=[];for(let o of i){o.providers&&!o._injector&&(o._injector=Bs(o.providers,e,""));let s=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(s).injector);let a=o._loadedInjector??s;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(s,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(a,o.children??o._loadedRoutes))}return qe(r).pipe(dr())}preloadConfig(e,i){return this.preloadingStrategy.preload(i,()=>{if(e.destroyed)return z(null);let r;i.loadChildren&&i.canLoad===void 0?r=qe(this.loader.loadChildren(e,i)):r=z(null);let o=r.pipe(At(s=>s===null?z(void 0):(i._loadedRoutes=s.routes,i._loadedInjector=s.injector,i._loadedNgModuleFactory=s.factory,this.processRoutes(s.injector??e,s.routes))));if(i.loadComponent&&!i._loadedComponent){let s=this.loader.loadComponent(e,i);return qe([o,s]).pipe(dr())}else return o})}static \u0275fac=function(i){return new(i||t)(M(Ii),M(Be),M(sl),M(Hf))};static \u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),vE=new v(""),Ij=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Ks;restoredId=0;store={};isHydrating=u($g,{optional:!0})??!1;urlSerializer=u(Rr);zone=u(O);viewportScroller=u(ay);transitions=u(zf);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled",this.isHydrating&&u(St).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof kr?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Rn?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Ni&&e.code===Qs.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Zs)||e.scrollBehavior==="manual")return;let i={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],i):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,i):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,i){if(this.isHydrating)return;let r=Ce(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(()=>Te(this,null,function*(){yield new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new Zs(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,i,r))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){Io()};static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();function Mj(){return u(Ii).routerState.root}function al(t,n){return{\u0275kind:t,\u0275providers:n}}function Tj(){let t=u(le);return n=>{let e=t.get(St);if(n!==e.components[0])return;let i=t.get(Ii),r=t.get(yE);t.get(Xy)===1&&i.initialNavigation(),t.get(wE,null,{optional:!0})?.setUpPreloading(),t.get(vE,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var yE=new v("",{factory:()=>new N}),Xy=new v("",{factory:()=>1});function _E(){let t=[{provide:Su,useValue:!0},{provide:Xy,useValue:0},Hs(()=>{let n=u(le);return n.get(Jv,Promise.resolve()).then(()=>new Promise(i=>{let r=n.get(Ii),o=n.get(yE);qf(r,()=>{i(!0)}),n.get(zf).afterPreactivation=()=>(i(!0),o.closed?z(void 0):o),r.initialNavigation()}))})];return al(2,t)}function bE(){let t=[Hs(()=>{u(Ii).setUpLocationChangeListener()}),{provide:Xy,useValue:2}];return al(3,t)}var wE=new v("");function SE(t){return al(0,[{provide:wE,useExisting:gE},{provide:sl,useExisting:t}])}function CE(t={}){return al(8,[{provide:rl,useFactory:()=>new Qx(t)}])}function DE(t){In("NgRouterViewTransitions");let n=[{provide:Ky,useValue:fE},{provide:Yy,useValue:y({skipNextTransition:!!t?.skipInitialTransition},t)}];return al(9,n)}var xE=[Si,{provide:Rr,useClass:Ki},Ii,Vo,{provide:Yi,useFactory:Mj},Hf],Gf=(()=>{class t{constructor(){}static forRoot(e,i){return{ngModule:t,providers:[xE,[],{provide:ra,multi:!0,useValue:e},[],i?.errorHandler?{provide:Qy,useValue:i.errorHandler}:[],{provide:Ar,useValue:i||{}},i?.useHash?Rj():Aj(),kj(),i?.preloadingStrategy?SE(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?Oj(i):[],i?.bindToComponentInputs?CE(typeof i.bindToComponentInputs=="object"?i.bindToComponentInputs:{}).\u0275providers:[],i?.enableViewTransitions?DE().\u0275providers:[],Fj()]}}static forChild(e){return{ngModule:t,providers:[{provide:ra,multi:!0,useValue:e}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({})}return t})();function kj(){return{provide:vE,useFactory:()=>{let t=u(ay),n=u(Ar);return n.scrollOffset&&t.setOffset(n.scrollOffset),new Ij(n)}}}function Rj(){return{provide:Yn,useClass:ey}}function Aj(){return{provide:Yn,useClass:Zu}}function Oj(t){return[t.initialNavigation==="disabled"?bE().\u0275providers:[],t.initialNavigation==="enabledBlocking"?_E().\u0275providers:[]]}var Zy=new v("");function Fj(){return[{provide:Zy,useFactory:Tj},{provide:Mc,multi:!0,useExisting:Zy}]}var AE=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(be(He),be(L))};static \u0275dir=E({type:t})}return t})(),OE=(()=>{class t extends AE{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275dir=E({type:t,features:[re]})}return t})(),Bo=new v("");var Pj={provide:Bo,useExisting:kt(()=>la),multi:!0};function Lj(){let t=yn()?yn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var jj=new v(""),la=(()=>{class t extends AE{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Lj())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(be(He),be(L),be(jj,8))};static \u0275dir=E({type:t,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&ge("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[ve([Pj]),re]})}return t})();function t_(t){return t==null||n_(t)===0}function n_(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Ho=new v(""),i_=new v(""),Vj=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Or=class{static min(n){return FE(n)}static max(n){return Bj(n)}static required(n){return PE(n)}static requiredTrue(n){return Hj(n)}static email(n){return Uj(n)}static minLength(n){return zj(n)}static maxLength(n){return $j(n)}static pattern(n){return qj(n)}static nullValidator(n){return Kf()}static compose(n){return UE(n)}static composeAsync(n){return zE(n)}};function FE(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function Bj(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function PE(t){return t_(t.value)?{required:!0}:null}function Hj(t){return t.value===!0?null:{required:!0}}function Uj(t){return t_(t.value)||Vj.test(t.value)?null:{email:!0}}function zj(t){return n=>{let e=n.value?.length??n_(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function $j(t){return n=>{let e=n.value?.length??n_(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function qj(t){if(!t)return Kf;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(t_(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Kf(t){return null}function LE(t){return t!=null}function jE(t){return $i(t)?qe(t):t}function VE(t){let n={};return t.forEach(e=>{n=e!=null?y(y({},n),e):n}),Object.keys(n).length===0?null:n}function BE(t,n){return n.map(e=>e(t))}function Gj(t){return!t.validate}function HE(t){return t.map(n=>Gj(n)?n:e=>n.validate(e))}function UE(t){if(!t)return null;let n=t.filter(LE);return n.length==0?null:function(e){return VE(BE(e,n))}}function r_(t){return t!=null?UE(HE(t)):null}function zE(t){if(!t)return null;let n=t.filter(LE);return n.length==0?null:function(e){let i=BE(e,n).map(jE);return Ua(i).pipe(ce(VE))}}function o_(t){return t!=null?zE(HE(t)):null}function NE(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function $E(t){return t._rawValidators}function qE(t){return t._rawAsyncValidators}function Jy(t){return t?Array.isArray(t)?t:[t]:[]}function Yf(t,n){return Array.isArray(t)?t.includes(n):t===n}function IE(t,n){let e=Jy(n);return Jy(t).forEach(r=>{Yf(e,r)||e.push(r)}),e}function ME(t,n){return Jy(n).filter(e=>!Yf(t,e))}var Qf=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=r_(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=o_(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Fr=class extends Qf{name;get formDirective(){return null}get path(){return null}};var cl="VALID",Wf="INVALID",sa="PENDING",ll="DISABLED",Pr=class{},Zf=class extends Pr{value;source;constructor(n,e){super(),this.value=n,this.source=e}},ul=class extends Pr{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},fl=class extends Pr{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},aa=class extends Pr{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Xf=class extends Pr{source;constructor(n){super(),this.source=n}},ca=class extends Pr{source;constructor(n){super(),this.source=n}};function GE(t){return(ih(t)?t.validators:t)||null}function Wj(t){return Array.isArray(t)?r_(t):t||null}function WE(t,n){return(ih(n)?n.asyncValidators:t)||null}function Kj(t){return Array.isArray(t)?o_(t):t||null}function ih(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Yj(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new b(1e3,"");if(!KE(i,e))throw new b(1001,"")}function Qj(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new b(-1002,"")})}var Jf=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=H(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Ce(this.statusReactive)}set status(n){Ce(()=>this.statusReactive.set(n))}_status=Je(()=>this.statusReactive());statusReactive=H(void 0);get valid(){return this.status===cl}get invalid(){return this.status===Wf}get pending(){return this.status===sa}get disabled(){return this.status===ll}get enabled(){return this.status!==ll}errors;get pristine(){return Ce(this.pristineReactive)}set pristine(n){Ce(()=>this.pristineReactive.set(n))}_pristine=Je(()=>this.pristineReactive());pristineReactive=H(!0);get dirty(){return!this.pristine}get touched(){return Ce(this.touchedReactive)}set touched(n){Ce(()=>this.touchedReactive.set(n))}_touched=Je(()=>this.touchedReactive());touchedReactive=H(!1);get untouched(){return!this.touched}_events=new N;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(IE(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(IE(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(ME(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(ME(n,this._rawAsyncValidators))}hasValidator(n){return Yf(this._rawValidators,n)}hasAsyncValidator(n){return Yf(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(W(y({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new fl(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new fl(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(W(y({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new ul(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new ul(!0,i))}markAsPending(n={}){this.status=sa;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new aa(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(W(y({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=ll,this.errors=null,this._forEachChild(r=>{r.disable(W(y({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Zf(this.value,i)),this._events.next(new aa(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(W(y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=cl,this._forEachChild(i=>{i.enable(W(y({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(W(y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===cl||this.status===sa)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Zf(this.value,e)),this._events.next(new aa(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(W(y({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ll:cl}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=sa,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=jE(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new aa(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new ee,this.statusChanges=new ee}_calculateStatus(){return this._allControlsDisabled()?ll:this.errors?Wf:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(sa)?sa:this._anyControlsHaveStatus(Wf)?Wf:cl}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new ul(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new fl(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){ih(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=Wj(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Kj(this._rawAsyncValidators)}_updateHasRequiredValidator(){Ce(()=>this._hasRequired.set(this.hasValidator(Or.required)))}};function KE(t,n){return Object.hasOwn(t,n)}function Zj(t){return t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"}function Xj(t,n,e,i){switch(e){case"name":t.setAttribute(n,e,i);break;case"disabled":case"readonly":case"required":i?t.setAttribute(n,e,""):t.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":i!==void 0?t.setAttribute(n,e,i.toString()):t.removeAttribute(n,e);break}}var e_=class{kind;context;control;message;constructor({kind:n,context:e,control:i}){this.kind=n,this.context=e,this.control=i}};function Jj(t){return typeof t=="number"?t:parseFloat(t)}var YE=(()=>{class t{_validator=Kf;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):Kf,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,features:[We]})}return t})();var eV={provide:Ho,useExisting:kt(()=>s_),multi:!0},s_=(()=>{class t extends YE{min;inputName="min";normalizeInput=e=>Jj(e);createValidator=e=>FE(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&fe("min",r._enabled?r.min:null)},inputs:{min:"min"},standalone:!1,features:[ve([eV]),re]})}return t})(),tV={provide:Ho,useExisting:kt(()=>QE),multi:!0};var QE=(()=>{class t extends YE{required;inputName="required";normalizeInput=P;createValidator=e=>PE;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,r){i&2&&fe("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[ve([tV]),re]})}return t})();var nV=new v(""),a_=new v("",{factory:()=>c_}),c_="always";function iV(t,n){return[...n.path,t]}function rV(t,n,e=c_){l_(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),sV(t,n),cV(t,n),aV(t,n),oV(t,n)}function TE(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),th(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function eh(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function oV(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function l_(t,n){let e=$E(t);n.validator!==null?t.setValidators(NE(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=qE(t);n.asyncValidator!==null?t.setAsyncValidators(NE(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();eh(n._rawValidators,r),eh(n._rawAsyncValidators,r)}function th(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=$E(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=qE(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return eh(n._rawValidators,i),eh(n._rawAsyncValidators,i),e}function sV(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ZE(t,n)})}function aV(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ZE(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function ZE(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function cV(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function XE(t,n){t==null,l_(t,n)}function lV(t,n){return th(t,n)}function dV(t,n){if(!Object.hasOwn(t,"model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function uV(t){return Object.getPrototypeOf(t.constructor)===OE}function JE(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function fV(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===la?e=o:uV(o)?i=o:r=o}),r||i||e||null}function hV(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var mV={provide:nV,useFactory:()=>{let t=u(Qi,{self:!0});return{setParseErrors:n=>{t.setParseErrorSource(n)},set onReset(n){t.onReset=n}}}},Qi=class extends Qf{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(n){this.userOnReset=n,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof ca&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=fV(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(n,e,i){super(),this.injector=n,this.renderer=e,this.rawValueAccessors=i,this.injector?.get(Ze)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let n=this.injector?.get(Ye);if(!this.control||!n)return;let e=n.markForCheck.bind(n);this.subscription=new ue,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(i=>{i instanceof ca&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(n){!n.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!n.customControl||(this.isCustomControlBased=!0,n.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),n.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Zj(n.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof QE))}ngControlUpdate(n,e){if(!this.isCustomControlBased)return;let i=this.control,r=this.customControlBindings;Object.is(r.value,i.value)||(r.value=i.value,n.setCustomControlModelInput(i.value)),this.bindControlProperty(n,r,"touched",i.touched),this.bindControlProperty(n,r,"dirty",i.dirty),this.bindControlProperty(n,r,"valid",i.valid),this.bindControlProperty(n,r,"invalid",i.invalid),this.bindControlProperty(n,r,"pending",i.pending),this.bindControlProperty(n,r,"disabled",i.disabled),this.shouldBindRequired&&this.bindControlProperty(n,r,"required",this.isRequired);let o=i.errors;if(r.errors!==o){r.errors=o;let s=this._convertErrors(o);n.setInputOnDirectives("errors",s)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(n,e,i,r){if(e[i]===r)return;e[i]=r;let o=n.setInputOnDirectives(i,r);this.isNativeFormElement&&!o&&(i==="disabled"||i==="required")&&this.renderer&&Xj(this.renderer,n.nativeElement,i,r)}_convertErrors(n){if(n===null)return[];let e=this.control;return Object.entries(n).map(([i,r])=>new e_({context:r,kind:i,control:e}))}setParseErrorSource(n){if(n===void 0)return;let e=null,i=Je(()=>{let r=n();return r.length===0?null:r.reduce((o,s)=>(o[s.kind]=s,o),{})});this.parseErrorsValidator=(()=>e).bind(this),tn(()=>{e=i(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(n){this.parseErrorsValidator&&(n?.removeValidators(this.parseErrorsValidator),n?.updateValueAndValidity({emitEvent:!1}))}},nh=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var rh=(()=>{class t extends nh{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(be(Qi,2))};static \u0275dir=E({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&G("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[re]})}return t})(),oh=(()=>{class t extends nh{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(be(Fr,10))};static \u0275dir=E({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&G("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[re]})}return t})(),Lr=class extends Jf{constructor(n,e,i){super(GE(e),WE(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){let i=this._find(n);return i||(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){let i=this._find(n);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){let r=this._find(n);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this._find(n)?.enabled===!0}setValue(n,e={}){Ce(()=>{Qj(this,!0,n),Object.keys(n).forEach(i=>{Yj(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this._find(i);r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,W(y({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new ca(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return KE(this.controls,n)?this.controls[n]:null}};var pV={provide:Fr,useExisting:kt(()=>sh)},dl=Promise.resolve(),sh=(()=>{class t extends Fr{callSetDisabledState;get submitted(){return Ce(this.submittedReactive)}_submitted=Je(()=>this.submittedReactive());submittedReactive=H(!1);_directives=new Set;form;ngSubmit=new ee;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new Lr({},r_(e),o_(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){dl.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){dl.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){dl.then(()=>{let i=this._findContainer(e.path),r=new Lr({});XE(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){dl.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){dl.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),JE(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Xf(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(be(Ho,10),be(i_,10),be(a_,8))};static \u0275dir=E({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&ge("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ve([pV]),re]})}return t})();function kE(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function RE(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var jr=class extends Jf{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(GE(e),WE(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ih(e)&&(e.nonNullable||e.initialValueIsDefault)&&(RE(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){Ce(()=>{this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new ca(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){kE(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){kE(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){RE(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var gV=t=>t instanceof jr;var vV=(()=>{class t extends Fr{callSetDisabledState;get submitted(){return Ce(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Je(()=>this._submittedReactive());_submittedReactive=H(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),Object.hasOwn(e,"form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(th(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return e._setupWithForm(i,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){TE(e.control||null,e,!1),hV(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,JE(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Xf(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(TE(i||null,e),gV(r)&&e._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);XE(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&lV(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){l_(this.form,this),this._oldForm&&th(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(be(Ho,10),be(i_,10),be(a_,8))};static \u0275dir=E({type:t,features:[re,We]})}return t})(),yV={provide:Fr,useExisting:kt(()=>Vr)},Vr=(()=>{class t extends vV{form=null;ngSubmit=new ee;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&ge("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ve([yV]),re]})}return t})();var ah=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})(),_V={provide:Bo,useExisting:kt(()=>d_),multi:!0},d_=(()=>{class t extends OE{writeValue(e){let i=e??"";this.setProperty("value",i)}registerOnChange(e){this.onChange=i=>{e(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["input","type","number","formControlName","",3,"ngNoCva",""],["input","type","number","formControl","",3,"ngNoCva",""],["input","type","number","ngModel","",3,"ngNoCva",""]],hostBindings:function(i,r){i&1&&ge("input",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[ve([_V]),re]})}return t})();var eN=new v("");var bV={provide:Qi,useExisting:kt(()=>hl)},hl=(()=>{class t extends Qi{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new ee;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,s,a,c){super(c,a,o),this._ngModelWarningConfig=s,this._parent=e,this._setValidators(i),this._setAsyncValidators(r)}_setupWithForm(e,i){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,rV(e,this,i))}ngOnChanges(e){this._added||this._setUpControl(),dV(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return iV(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(e,!0))}static \u0275fac=function(i){return new(i||t)(be(Fr,13),be(Ho,10),be(i_,10),be(Bo,10),be(eN,8),be(He,8),be(le,8))};static \u0275dir=E({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[ve([bV,mV]),re,We,Mv(null)]})}return t})();var wV=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({})}return t})();var ch=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:eN,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:a_,useValue:e.callSetDisabledState??c_}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[wV]})}return t})();var S=(function(t){return t[t.PoK=0]="PoK",t[t.Base=1]="Base",t[t.TE=2]="TE",t})(S||{});var Br=(()=>{class t{constructor(){this.settings=H({editions:[S.Base],additionalRaces:0})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var g=(function(t){return t[t.red=0]="red",t[t.green=1]="green",t[t.yellow=2]="yellow",t[t.blue=3]="blue",t[t.black=4]="black",t})(g||{});var Ae=(function(t){return t[t.Low=0]="Low",t[t.Moderate=1]="Moderate",t[t.High=2]="High",t})(Ae||{});var Uo={races:[{id:1,name:"Arborec",difficulty:Ae.High,startingtech:[37],edition:S.Base,tech:[{id:1,name:"Letani Warrior II",requirements:{[g.green]:2},description:"<ul><li>After this unit is destroyed, roll 1 die. If the result is 6 or greater, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your HS.</li><li>Production 2</li><Ul>",provides:g.black,edition:S.Base},{id:2,name:"Bioplasmosis",requirements:{[g.green]:2},description:"At the end of the status phase, you may remove any number of infantry from planets you control and place them on 1 or more planets you control in the same or adjacent systems",provides:g.green,edition:S.Base}]},{id:2,name:"Barony of Letnev",difficulty:Ae.Low,startingtech:[50,38],edition:S.Base,tech:[{id:3,name:"L4 Disruptors",requirements:{[g.yellow]:1},edition:S.Base,description:"During an invasion combat, units cannot use Space Canon against your units.",provides:g.yellow},{id:4,name:"Non-Euclidean Shielding",requirements:{[g.red]:2},edition:S.Base,description:"When 1 of your units uses Sustain Damage, cancel 2 hits.",provides:g.red}]},{id:3,name:"Clan of Saar",difficulty:Ae.Moderate,startingtech:[50],edition:S.Base,tech:[{id:5,name:"Floating Factory II",requirements:{[g.yellow]:2},edition:S.Base,provides:g.black,description:"<ul><li>Saar Space Dock (Move 2, Capacity 5)</li><li>This unit is placed in a space area instead of on a planet. This unit can move and retreat as if it were a ship. If this unit is blockaded, it is destroyed.</li><li>Production 7.</li></ul>"},{id:6,name:"Chaos Mapping",requirements:{[g.blue]:1},edition:S.Base,provides:g.blue,description:"<ul><li>Other players cannot activate asteroid fields that contain 1 or more of your ships.</li><li>At the start of your turn during the action phase, you may produce 1 unit in a system that contains at least 1 of your units that has Production.</li></ul>"}]},{id:4,name:"Embers of Muat",difficulty:Ae.High,startingtech:[38],edition:S.Base,tech:[{id:7,name:"Prototype War Sun II",edition:S.Base,requirements:{[g.yellow]:1,[g.red]:3},provides:g.black,description:"<ul><li>Muuat War Sun (Cost 10; Combat 3[x3]; Move 3; Capacity 6)</li><li>Other player's units in this system lose Planetary Shield.</li><li>Sustain Damage; and, Bombardment 3[x3].</li></ul>"},{id:8,name:"Magmus Reactor \u03A9",requirements:{[g.red]:2},provides:g.red,edition:S.Base,description:"<ul><li>Your ships can move into superovas.</li><li>Each supernova that contains 1 or more of your units gains the PRODUCTION 5 ability as if it were 1 of your units.</li>"}]},{id:5,name:"Emirates of Hacan",difficulty:Ae.Low,startingtech:[50,42],edition:S.Base,tech:[{id:9,name:"Production Centers",edition:S.Base,requirements:{[g.green]:2},provides:g.green,description:"ACTION: Exhaust this card and spend 1 CT from your Strategy Pool to gain 4 TGs and choose 1 other player; that player gains 2 TGs."},{id:10,name:"Quantum Datahub Node",edition:S.Base,requirements:{[g.yellow]:3},provides:g.yellow,description:"At the end of the Strategy Phase, you may spend 1 CT from your Strategy Pool and give another player 3 of your TGs. If you do, give 1 of your SCs to that player and take 1 of his SCs."}]},{id:6,name:"Federation of Sol",difficulty:Ae.Low,startingtech:[46,50],edition:S.Base,tech:[{id:11,name:"Spec Ops II",requirements:{[g.green]:2},provides:g.black,edition:S.Base,description:"<ul><li>Sol Infantry (Cost 1/2; Combat 6)</li><li>After this unit is destroyed, roll 1 die. If the result is 5 or greater, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your HS.</li></ul>"},{id:12,name:"Advanced Carrier II",requirements:{[g.blue]:2},provides:g.black,edition:S.Base,description:"<ul><li>Sol Carrier (Cost 3; Combat 9; Move 2; Capacity 8)</li><li>Sustain Damage.</li></ul>"}]},{id:7,name:"Ghosts of Creuss",difficulty:Ae.Moderate,startingtech:[49],edition:S.Base,tech:[{id:13,name:"Dimensional Splicer",requirements:{[g.red]:1},provides:g.red,edition:S.Base,description:"At the start of a space combat in a system that contains a wormhole and 1 or more of your ships, you may produce 1 hit and assign it to 1 of your opponent's ships."},{id:14,name:"Wormhole Generator \u03A9",requirements:{[g.blue]:2},provides:g.blue,edition:S.Base,description:"ACTION: Exhaust this card to place or move a Creuss wormhole token into either a system that contains a planet you control or a non-home system that does not contain another player\xB4s ships."}]},{id:8,name:"L1z1x Mindnet",difficulty:Ae.Low,startingtech:[46,38],edition:S.Base,tech:[{id:15,name:"Super Dreadnought II",requirements:{[g.blue]:2,[g.yellow]:1},edition:S.Base,provides:g.black,description:'<ul><li>L1Z1X Dreadnought (Cost 4; Combat 4; Move 2; Capacity 2)</li><li>This unit cannot be destroyed by "Direct Hit" action cards; Sustain Damage; and, Bombardment 4.</li></ul>'},{id:16,name:"Inheritance Systems",edition:S.Base,requirements:{[g.yellow]:2},provides:g.yellow,description:"You may exhaust this card and spend 2 resources when you research a technology; ignore all of that technology's prerequisites."}]},{id:9,name:"Mentak Coalition",difficulty:Ae.High,startingtech:[38,42],edition:S.Base,tech:[{id:17,name:"Mirror Computing",requirements:{[g.yellow]:3},edition:S.Base,description:"When you spend TGs, each TG is worth 2 resources or influence.",provides:g.yellow},{id:18,name:"Salvage Operation",edition:S.Base,requirements:{[g.yellow]:2},description:"After you win or lose a space combat, gain 1 TG; if you won the combat, you may also produce 1 ship in that system of any ship type that was destroyed during the combat.",provides:g.yellow}]},{id:10,name:"Naalu Collective",difficulty:Ae.Moderate,startingtech:[42,46],edition:S.Base,tech:[{id:19,name:"Neuroglaive",requirements:{[g.green]:3},edition:S.Base,provides:g.green,description:"After another player activates a system that contains 1 or more of your ships, that player removes 1 CT from his Fleet Pool and returns it to his reinforcements."},{id:20,name:"Hybrid Crystal Fighter II",requirements:{[g.green]:1,[g.blue]:1},edition:S.Base,provides:g.black,description:"<ul><li>Naalu Fighter (Cost 1/2; Combat 7; Move 2)</li><li>This unit may move without being transported. Each fighter in excess of your ships' capacity counts as 1/2 of a ship against your fleet pool.</li></ul>"}]},{id:11,name:"Nekro Virus",difficulty:Ae.High,startingtech:[45],edition:S.Base,tech:[{id:21,name:"Valefar Assimilator",requirements:{},provides:g.black,edition:S.Base,description:`When you would gain another player's technology using 1 of your faction abilities, you may place either the "X" or "Y" assimilator token on a faction technology owned by that player instead. While that token is on a technology, the corresponding "X" or "Y" card gains that technology's text. You cannot place an assimilator token on a technology that already has one.`},{id:22,name:"Valefar Assimilator",requirements:{},provides:g.black,edition:S.Base,description:`When you would gain another player's technology using 1 of your faction abilities, you may place either the "X" or "Y" assimilator token on a faction technology owned by that player instead. While that token is on a technology, the corresponding "X" or "Y" card gains that technology's text. You cannot place an assimilator token on a technology that already has one.`}]},{id:12,name:"Sardakk N'orr",difficulty:Ae.Moderate,startingtech:[],edition:S.Base,tech:[{id:23,name:"Exotrireme II",requirements:{[g.blue]:2,[g.yellow]:1},edition:S.Base,description:`<ul><li>N'orr Dreadnought (Cost 4; Combat 5; Move 2; Capacity 1)</li><li>This unit cannot be destroyed by "Direct Hit" action cards. After a round of space combat, you may destroy this unit to destroy up to 2 ships in this system</li><li>Sustain Damage; and, Bombardment 4[x2].</li></ul>`,provides:g.black},{id:24,name:"Valkyrie Particle Weave",requirements:{[g.red]:2},edition:S.Base,description:"After making combat rolls during a round of ground combat, if your opponent produced 1 or more hits, you produce 1 additional hit.",provides:g.red}]},{id:13,name:"Universities of Jol-Nar",difficulty:Ae.Low,startingtech:[46,50,38,42],edition:S.Base,tech:[{id:25,name:"Spacial Conduit Network",requirements:{[g.blue]:2},edition:S.Base,description:"You may exhaust this card after you activate a system that contains 1 or more of your units; that system is adjacent to all other systems that contain 1 or more of your units during this activation.",provides:g.blue},{id:26,name:"E-Res Siphons",requirements:{[g.yellow]:2},edition:S.Base,description:"After another player activates a system that contains 1 or more of your ships, gain 4 TGs.",provides:g.yellow}]},{id:14,name:"Winnu",difficulty:Ae.Moderate,startingtech:[],edition:S.Base,tech:[{id:27,name:"Hegemonic Trade Policy",requirements:{[g.yellow]:2},edition:S.Base,provides:g.yellow,description:"Exhaust this card when 1 or more of your units use Production; swap the resource and influence values of 1 planet you control until the end of your turn."},{id:28,name:"Lazax Gate Folding",requirements:{[g.blue]:2},edition:S.Base,provides:g.blue,description:"<ul><li>During your tactical actions, if you do not control Mecatol Rex, treat its system as if it contains both an alpha and beta wormhole.</li><li>ACTION: If you control Mecatol Rex, exhaust this card to place 1 infantry from your reinforcement on Mecatol Rex.</li></ul>"}]},{id:15,name:"Xxcha Kingdom",difficulty:Ae.Low,startingtech:[41],edition:S.Base,tech:[{id:29,name:"Nullification Field",requirements:{[g.yellow]:2},edition:S.Base,provides:g.yellow,description:"After another player activates a system that contains 1 or more or your ships, you may exhaust this card and spend 1 CT from your Strategy Pool; immediately end that player's turn."},{id:30,name:"Instinct Training",requirements:{[g.green]:1},edition:S.Base,provides:g.green,description:"You may exhaust this card and spend 1 CT from your Strategy Pool when another player plays an action card; cancel that action card."}]},{id:16,name:"Yin Brotherhood",difficulty:Ae.Low,startingtech:[42],edition:S.Base,tech:[{id:31,name:"Impulse Core",requirements:{[g.yellow]:2},edition:S.Base,provides:g.yellow,description:"At the start of a space combat, you may destroy 1 of your cruisers or destroyers in the active system to produce 1 hit against your opponent's ships; that hit must be assigned by your opponent to 1 of his non-fighter ships, if able."},{id:32,name:"Yin Spinner",requirements:{[g.green]:2},edition:S.Base,provides:g.green,description:"After you produce units, place up to 2 infantry from your reinforcements on any planet you control or in any space area that contains 1 or more of your ships."}]},{id:17,name:"Yssaril Tribes",difficulty:Ae.Low,startingtech:[46],edition:S.Base,tech:[{id:33,name:"Transparasteel Plating",requirements:{[g.green]:1},edition:S.Base,provides:g.green,description:"During your turn of the action phase, players that have passed cannot play action cards."},{id:34,name:"Mageon Implants",requirements:{[g.green]:3},edition:S.Base,provides:g.green,description:"ACTION: Exhaust this card to look at another player's hand of action cards. Choose 1 of those cards and add it to your hand."}]},{id:18,name:"Argent Flight",difficulty:Ae.Low,startingtech:[],edition:S.PoK,tech:[{id:68,name:"Aerie Hololattice",requirements:{[g.yellow]:1},edition:S.PoK,provides:g.yellow,description:"Other players cannot move ships through systems that contain your structures. Each planet that contains 1 or more of your structures gains the PRODUCTION 1 ability as if it were a unit"},{id:67,name:"Strike Wing Alpha II",requirements:{[g.red]:2},edition:S.PoK,provides:g.black,description:"<ul><li>Argent Flight Destroyer (Cost 1; Combat 7; Move 2; Capacity 1)</li><li>Anti-Fighter Barrage 6(x3)</li><li>When this unit uses ANTI-FIGHTER BARRAGE, each result of 9 or 10 also destroys 1 of your opponent's infantry in the space area of the active system</li></ul>"}]},{id:19,name:"Empyrean",difficulty:Ae.Low,startingtech:[62],edition:S.PoK,tech:[{id:69,name:"Aetherstream",requirements:{[g.blue]:2},edition:S.PoK,provides:g.blue,description:"After you or one of your neighbors activates a system that is adjacent to an anomaly, you may apply +1 to the move value of all of that player's ships during this tactical action"},{id:70,name:"Voidwatch",requirements:{[g.green]:1},edition:S.PoK,provides:g.green,description:"After a player moves ships into a system that contains 1 or more of your units, they must give you 1 promissory note from their hand, if able"}]},{id:20,name:"Mahact Gene-Sorcerers",difficulty:Ae.High,startingtech:[67,61],edition:S.PoK,tech:[{id:71,name:"Genetic Recombination",requirements:{[g.green]:1},edition:S.PoK,provides:g.green,description:"You may exhaust this card before a player casts votes; that player must cast at least 1 vote for an outcome of your choice or remove 1 token from their fleet pool and return it to their reinforcements"},{id:72,name:"Crimson Legionnaire II",requirements:{[g.green]:2},edition:S.PoK,provides:g.black,description:"<ul><li>Mahact Ground Force (Cost 1x2; Combat 7)</li><li>After this unit is destroyed, gain 1 commodity or convert 1 of your commodities to a trade good. Then, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your home system</li></ul>"}]},{id:21,name:"Naaz-Rokha Alliance",difficulty:Ae.Low,startingtech:[64,60],edition:S.PoK,tech:[{id:73,name:"Supercharge",requirements:{[g.red]:1},edition:S.PoK,provides:g.red,description:"At the start of a combat round, you may exhaust this card to apply +1 to the result of each of your unit's combat rolls during this combat round"},{id:74,name:"Pre-Fab Arcologies",requirements:{[g.green]:3},edition:S.PoK,provides:g.green,description:"After you explore a planet, ready that planet"}]},{id:22,name:"Nomad",difficulty:Ae.Low,startingtech:[63],edition:S.PoK,tech:[{id:75,name:"Temporal Command Suite",requirements:{[g.yellow]:1},edition:S.PoK,provides:g.yellow,description:"After any player's agent becomes exhausted, you may exhaust this card to ready that agent; if you ready another player's agent, you may perform a transaction with that player"},{id:76,name:"Memoria II",requirements:{[g.green]:1,[g.blue]:1,[g.yellow]:1},edition:S.PoK,provides:g.black,description:"<ul><li>Nomad Flagship (Cost 8; Combat 5(x2); Move 2; Capacity 6)</li><li>Sustain Damage</li><li>Anti-Fighter Barrage 5(x3)</li><li>You may treat this unit as if it were adjacent to systems that contain one or more of your mechs.</li></ul>"}]},{id:23,name:"Titans of Ul",difficulty:Ae.Moderate,startingtech:[50,66],edition:S.PoK,tech:[{id:76,name:"Saturn Engine II",requirements:{[g.green]:1,[g.yellow]:1,[g.red]:1},edition:S.PoK,provides:g.black,description:"<ul><li>Titan Cruiser (Cost 2; Combat 6; Move 3; Capacity 2)</li><li>Sustain Damage</li></ul>"},{id:77,name:"Hel Titan II",requirements:{[g.red]:1,[g.yellow]:1},edition:S.PoK,provides:g.black,description:"<ul><li>Titan PDS (Combat 6)</li><li>Planetary Shield</li><li>Space Cannon 5</li><li>Sustain Damage</li><li>Production 1</li><li>This unit is treated as both a structure and a ground force. It cannot be transported.</li><li>You may use this unit's SPACE CANNON against ships that are adjacent to this unit's system.</li></ul>"}]},{id:24,name:"Vuil'Raith Cabal",difficulty:Ae.High,startingtech:[65],edition:S.PoK,tech:[{id:78,name:"Vortex",requirements:{[g.red]:1},edition:S.PoK,provides:g.red,description:"ACTION: Exhaust this card to choose another player's non-structure unit in a system that is adjacent to 1 or more of your space docks. Capture 1 unit of that type from that player's reinforcements"},{id:79,name:"Dimensional Tear II",requirements:{[g.yellow]:2},edition:S.PoK,provides:g.black,description:"<ul><li>Cabal Space Dock(PRODUCTION 7)</li><li>This system is a gravity rift; your ships do not roll for this gravity rift.</li><li>Place a dimensional tear token beneath this unit as a reminder</li><li>Up to 12 fighters in this system do not count against your ships' capacity.</li></ul>"}]}],genericTech:[{id:35,name:"Assault Cannon",requirements:{[g.red]:3},edition:S.Base,description:"At the start of a space combat in a system that contains 3 or more of your non-fighter ships, your opponent must destroy 1 of his non-fighter ships.",provides:g.red},{id:36,edition:S.Base,name:"Duranium Armor",requirements:{[g.red]:2},description:"During each combat round, after you assign hits to your units, repair 1 of your damaged units that did not use Sustain Damage during this combat round.",provides:g.red},{id:37,edition:S.Base,name:"Magen Defense Grid \u03A9",requirements:{[g.red]:1},description:"At the start of ground combat on a planet that contains 1 or more of your structures, you may produce 1 hit and assign it to 1 of your opponent\xB4s ground forces.",provides:g.red},{id:38,edition:S.Base,name:"Plasma Scoring",requirements:{},description:"When 1 or more of your unit use Bombardment or Space Canon, 1 of those units may roll 1 additional die.",provides:g.red},{id:39,edition:S.Base,name:"Integrated Economy",requirements:{[g.yellow]:3},description:"After you gain control of a planet, you may produce any number of units on that planet that have a combined cost equal to or less than that planet\u2019s resource value.",provides:g.yellow},{id:40,edition:S.Base,name:"Transit Diodes",requirements:{[g.yellow]:2},description:"You may exhaust this card at the start of your turn during the action phase; remove up to 4 of your GFs from the game board and place them on 1 or more planets you control.",provides:g.yellow},{id:41,edition:S.Base,name:"Graviton Laser Systems",requirements:{[g.yellow]:1},description:"You may exhaust this card before 1 or of your units use Space Cannon; hits produced by those units must be assigned to non-fighter ships if able.",provides:g.yellow},{id:42,edition:S.Base,name:"Sarween Tools",requirements:{},description:"When 1 or more of your units use Production, reduce the combined cost of the produced units by 1.",provides:g.yellow},{id:43,edition:S.Base,name:"X-89 Bacterial Weapon \u03A9",requirements:{[g.green]:3},description:"After 1 or more of your units use BOMBARDMENT against a planet, if at least 1 of your opponent\xB4s infantry was destroyed, you may destroy all of your opponent\xB4s infantry on that planet.",provides:g.green},{id:44,edition:S.Base,name:"Hyper Methabolism",requirements:{[g.green]:2},description:"During the status phase, gain 3 CTs instead of 2.",provides:g.green},{id:45,edition:S.Base,name:"Dacxive Animators",requirements:{[g.green]:1},description:"After you win an ground combat, you may place 1 infantry from your reinforcements on the planet.",provides:g.green},{id:46,edition:S.Base,name:"Neural Motivator",requirements:{},description:"During the Status Phase, draw 2 action cards instead of 1.",provides:g.green},{id:47,edition:S.Base,name:"Light / Wave Deflector",requirements:{[g.blue]:3},description:"Your ships can move through systems that contain other players\u2019 ships.",provides:g.blue},{id:48,edition:S.Base,name:"Fleet Logistics",requirements:{[g.blue]:2},description:"During each of your turn of the Action Phase, you may perform 2 actions instead of 1.",provides:g.blue},{id:49,edition:S.Base,name:"Gravity Drive",requirements:{[g.blue]:1},description:"You After you activate a system, apply +1 to the move value of 1 of your ships during the Tactical Action.",provides:g.blue},{id:50,edition:S.Base,name:"Antimass Deflectors",requirements:{},description:"Your ships can move through and into Asteroid Fields. When other players\u2019 units use Space Canon against your units, apply -1 to the result of each die roll.",provides:g.blue},{id:51,edition:S.Base,name:"War Sun",requirements:{[g.red]:3,[g.yellow]:1},description:"<ul><li>Cost 12; Battle 3[x3]; Move 2; Capacity 6</li><li>Other players\u2019 units in this system lose Planetary Shield</li><li>Sustain Damage</li><li>Bombardment 3[x3].</li></ul>",provides:g.black},{id:52,edition:S.Base,name:"Dreadnought II",requirements:{[g.blue]:2,[g.yellow]:1},description:"<ul><li>Cost 4; Battle 5; Move 2; Capacity 1</li><li>This unit cannot be destroyed by the \u201CDirect Hit\u201D action cards</li><li>Sustain Damage</li><li>Bombardment 5</li></ul>",provides:g.black},{id:53,edition:S.Base,name:"Cruiser II",requirements:{[g.red]:1,[g.yellow]:1,[g.green]:1},description:"Cost 2; Battle 6; Move 3; Capacity 1",provides:g.black},{id:54,edition:S.Base,name:"Destroyer II",requirements:{[g.red]:2},description:"<ul><li>Cost 1; Battle 8; Move 2</li><li>Anti-fighter barrage 6[x3].</li></ul>",provides:g.black},{id:55,edition:S.Base,name:"PDS II",requirements:{[g.red]:1,[g.yellow]:1},description:"<ul><li>You may use this unit\u2019s Space Canon against ships that are adjacent to this system</li><li>Planetary Shield</li><li>Space Cannon 5</li></ul>",provides:g.black},{id:56,edition:S.Base,name:"Carrier II",requirements:{[g.blue]:2},description:"Cost 3; Battle 9; Move 2; Capacity 6",provides:g.black},{id:57,edition:S.Base,name:"Fighter II",requirements:{[g.blue]:1,[g.green]:1},description:"<ul><li>Cost 1/2; Battle 8; Move 2</li><li>This unit may move without being transported. Fighters in excess of your ships\u2019 capacity count against your fleet pool.</li></ul>",provides:g.black},{id:58,edition:S.Base,name:"Infantry II",requirements:{[g.green]:2},description:"<ul><li>Cost 1/2; Battle 7</li><li>After this unit is destroyed, roll 1 die. If result \u2265 6: place the unit on this card. At the start of your next turn, place each unit on this card on a planet you control in your HS.</li></ul>",provides:g.black},{id:59,edition:S.Base,name:"Space Dock II",requirements:{[g.yellow]:2},description:"<ul><li>This unit\u2019s Production value is equal to 4 more than the resource value of this planet</li><li>Up to 3 fighters in this system do not count toward your ships\u2019 capacity</li><li>Production X.</li></ul>",provides:g.black},{id:60,edition:S.PoK,name:"Psychoarchaeology",requirements:{},description:"<ul><li>You can use technology specialties on planets you control without exhausting them, even if those planets are exhausted</li><li>During the Action Phase, you can exhaust planets you control that have technology specialties to gain 1 Trade Good</li></ul>",provides:g.green},{id:61,edition:S.PoK,name:"Bio-Stims",requirements:{[g.green]:1},description:"<ul><li>You may exhaust this card at the end of your turn to ready 1 of your planets that has a technology specialty or 1 of your other technologies</li></ul>",provides:g.green},{id:62,edition:S.PoK,name:"Dark Energy Tap",requirements:{},description:"<ul><li>After you perform a tactical action in a system that contains a frontier token, if you have 1 or more ships in that system, explore that token</li><li>Your ships can retreat into adjacent systems that do not contain other players' units, even if you do not have units or control planets in that system.</li></ul>",provides:g.blue},{id:63,edition:S.PoK,name:"Sling Relay",requirements:{[g.blue]:1},description:"<ul><li>ACTION: Exhaust this card to produce 1 ship in any system that contains one of your space docks</li></ul>",provides:g.blue},{id:64,edition:S.PoK,name:"AI Development Algorithm",requirements:{},description:"<ul><li>When you research a unit upgrade technology, you may exhaust this card to ignore any 1 prerequisite</li><li>When 1 or more of your units use Production, you may exhaust this card to reduce the combined cost of the produced units by the number of unit upgrade technologies that you own</li></ul>",provides:g.red},{id:65,edition:S.PoK,name:"Self Assembly Routines",requirements:{[g.red]:1},description:"<ul><li>After 1 or more of your units use PRODUCTION, you may exhaust this card to place 1 mech from your reinforcements on a planet you control in that system</li><li>After 1 of your mechs is destroyed, gain 1 trade good</li></ul>",provides:g.red},{id:66,edition:S.PoK,name:"Scanlink Drone Network",requirements:{},description:"<ul><li>When you activate a system, you may explore 1 planet in that system which contains 1 or more of your units</li></ul>",provides:g.yellow},{id:67,edition:S.PoK,name:"Predictive Intelligence",requirements:{[g.yellow]:1},description:"<ul><li>At the end of your turn, you may exhaust this card to redistribute your command tokens</li><li>When you cast votes during the agenda phase, you may cast 3 additional votes; if you do, and the outcome you voted for is not resolved, exhaust this card</li></ul>",provides:g.yellow}]};function zo(t,n=0){return nN(t)?Number(t):arguments.length===2?n:0}function nN(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Qt(t){return t instanceof L?t.nativeElement:t}function u_(t){return Array.isArray(t)?t:[t]}function vt(t){return t==null?"":typeof t=="string"?t:`${t}px`}function Zt(t){return t!=null&&`${t}`!="false"}var f_;try{f_=typeof Intl<"u"&&Intl.v8BreakIterator}catch(t){f_=!1}var Ue=(()=>{class t{_platformId=u(_o);isBrowser=this._platformId?qD(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||f_)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var $o;function iN(){if($o==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return $o=!1,$o;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)$o=!0;else{let t=Element.prototype.scrollTo;t?$o=!/\{\s*\[native code\]\s*\}/.test(t.toString()):$o=!1}}return $o}var h_;function rN(){if(h_==null){let t=typeof document<"u"?document.head:null;h_=!!(t&&(t.createShadowRoot||t.attachShadow))}return h_}function m_(t){if(rN()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function sn(t){if(t.composedPath)try{return t.composedPath()[0]}catch(n){}return t.target}function p_(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var ml;function oN(){if(ml==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ml=!0}))}finally{ml=ml||!1}return ml}function da(t){return oN()?t:!!t.capture}var ua,sN=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function g_(){if(ua)return ua;if(typeof document!="object"||!document)return ua=new Set(sN),ua;let t=document.createElement("input");return ua=new Set(sN.filter(n=>(t.setAttribute("type",n),t.type===n))),ua}var lh=new WeakMap,yt=(()=>{class t{_appRef;_injector=u(le);_environmentInjector=u(Be);load(e){let i=this._appRef=this._appRef||this._injector.get(St),r=lh.get(i);r||(r={loaders:new Set,refs:[]},lh.set(i,r),i.onDestroy(()=>{lh.get(i)?.refs.forEach(o=>o.destroy()),lh.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Ku(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var aN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return t})(),dh;function CV(){if(dh===void 0&&(dh=null,typeof window<"u")){let t=window;if(t.trustedTypes!==void 0)try{dh=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n})}catch(n){console.error(n)}}return dh}function fa(t){return CV()?.createHTML(t)||t}function qo(t){return t.buttons===0||t.detail===0}function Go(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var cN=new v("cdk-input-modality-detector-options"),lN={ignoreKeys:[18,17,224,91,16]},dN=650,v_={passive:!0,capture:!0},uN=(()=>{class t{_platform=u(Ue);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ut(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=sn(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<dN||(this._modality.next(qo(e)?"keyboard":"mouse"),this._mostRecentTarget=sn(e))};_onTouchstart=e=>{if(Go(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=sn(e)};constructor(){let e=u(O),i=u(K),r=u(cN,{optional:!0});if(this._options=y(y({},lN),r),this.modalityDetected=this._modality.pipe(Wm(1)),this.modalityChanged=this.modalityDetected.pipe(_d()),this._platform.isBrowser){let o=u(at).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,v_),o.listen(i,"mousedown",this._onMousedown,v_),o.listen(i,"touchstart",this._onTouchstart,v_)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),pl=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(pl||{}),fN=new v("cdk-focus-monitor-default-options"),uh=da({passive:!0,capture:!0}),Mi=(()=>{class t{_ngZone=u(O);_platform=u(Ue);_inputModalityDetector=u(uN);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(K);_stopInputModalityDetector=new N;constructor(){let e=u(fN,{optional:!0});this._detectionMode=e?.detectionMode||pl.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=sn(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=Qt(e);if(!this._platform.isBrowser||r.nodeType!==1)return z();let o=m_(r)||this._document,s=this._elementInfo.get(r);if(s)return i&&(s.checkChildren=!0),s.subject;let a={checkChildren:i,subject:new N,rootNode:o};return this._elementInfo.set(r,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let i=Qt(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=Qt(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,c])=>this._originChanged(a,i,c)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===pl.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===pl.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?dN:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=sn(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,uh),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,uh)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Fe(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,uh),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,uh),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var hN=new Set,Wo,y_=(()=>{class t{_platform=u(Ue);_nonce=u(wr,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):xV}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&DV(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();function DV(t,n){if(!hN.has(t))try{Wo||(Wo=document.createElement("style"),n&&Wo.setAttribute("nonce",n),Wo.setAttribute("type","text/css"),document.head.appendChild(Wo)),Wo.sheet&&(Wo.sheet.insertRule(`@media ${t.replace(/[{}]/g,"")} {body{ }}`,0),hN.add(t))}catch(e){console.error(e)}}function xV(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}function EV(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var mN=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),NV=(()=>{class t{_mutationObserverFactory=u(mN);_observedElements=new Map;_ngZone=u(O);ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=Qt(e);return new Z(r=>{let s=this._observeElement(i).pipe(ce(a=>a.filter(c=>!EV(c))),Ee(a=>!!a.length)).subscribe(a=>{this._ngZone.run(()=>{r.next(a)})});return()=>{s.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new N,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),pN=(()=>{class t{_contentObserver=u(NV);_elementRef=u(L);event=new ee;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=zo(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(za(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",P],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),fh=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({providers:[mN]})}return t})();var IV=200,hh=class{_letterKeyStream=new N;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new N;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:IV;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Tt(e=>this._pressedLetters.push(e)),za(n),Ee(()=>this._pressedLetters.length>0),ce(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function ha(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var mh=class{_items;_activeItemIndex=H(-1);_activeItem=H(null);_wrap=!1;_typeaheadSubscription=ue.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof pn?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):Hn(n)&&(this._effectRef=tn(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new N;change=new N;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new hh(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(r||ha(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return Hn(this._items)?this._items():this._items instanceof pn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var Zi=class extends mh{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var yN=new Map,_t=class t{_appId=u(yo);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){this._appId!=="ng"&&(n+=this._appId);let i=yN.get(n);return i===void 0?i=0:i++,yN.set(n,i),`${n}${e?t._infix+"-":""}${i}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})};var TV=new v("MATERIAL_ANIMATIONS"),_N=null;function kV(){return u(TV,{optional:!0})?.animationsDisabled||u(br,{optional:!0})==="NoopAnimations"?"di-disabled":(_N??=u(y_).matchMedia("(prefers-reduced-motion)").matches,_N?"reduced-motion":"enabled")}function xt(){return kV()!=="enabled"}var An=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(An||{}),w_=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=An.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},bN=da({passive:!0,capture:!0}),S_=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let s=o.get(i);s?s.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,bN)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,bN)))}_delegateEventHandler=n=>{let e=sn(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},gl={enterDuration:225,exitDuration:150},RV=800,wN=da({passive:!0,capture:!0}),SN=["mousedown","touchstart"],CN=["mouseup","mouseleave","touchend","touchcancel"],AV=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return t})(),Ko=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new S_;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Qt(i)),o&&o.get(yt).load(AV)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=y(y({},gl),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let s=i.radius||OV(n,e,r),a=n-r.left,c=e-r.top,l=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${c-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),h=f.transitionProperty,m=f.transitionDuration,p=h==="none"||m==="0s"||m==="0s, 0s"||r.width===0&&r.height===0,_=new w_(this,d,i,p);d.style.transform="scale3d(1, 1, 1)",_.state=An.FADING_IN,i.persistent||(this._mostRecentTransientRipple=_);let x=null;return!p&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let I=()=>{x&&(x.fallbackTimer=null),clearTimeout(Q),this._finishRippleTransition(_)},T=()=>this._destroyRipple(_),Q=setTimeout(T,l+100);d.addEventListener("transitionend",I),d.addEventListener("transitioncancel",T),x={onTransitionEnd:I,onTransitionCancel:T,fallbackTimer:Q}}),this._activeRipples.set(_,x),(p||!l)&&this._finishRippleTransition(_),_}fadeOutRipple(n){if(n.state===An.FADING_OUT||n.state===An.HIDDEN)return;let e=n.element,i=y(y({},gl),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=An.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Qt(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,SN.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{CN.forEach(e=>{this._triggerElement.addEventListener(e,this,wN)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===An.FADING_IN?this._startFadeOutTransition(n):n.state===An.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=An.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=An.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=qo(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+RV;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Go(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===An.VISIBLE||n.config.terminateOnPointerUp&&n.state===An.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(SN.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(CN.forEach(e=>n.removeEventListener(e,this,wN)),this._pointerUpEventsRegistered=!1))}};function OV(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Yo=new v("mat-ripple-global-options"),ph=(()=>{class t{_elementRef=u(L);_animationsDisabled=xt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(O),i=u(Ue),r=u(Yo,{optional:!0}),o=u(le);this._globalOptions=r||{},this._rippleRenderer=new Ko(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:y(y(y({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,y(y({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,y(y({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&G("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var Sn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return t})();function gh(t){return t&&typeof t.connect=="function"&&!(t instanceof Oa)}var Zn=(function(t){return t[t.REPLACED=0]="REPLACED",t[t.INSERTED=1]="INSERTED",t[t.MOVED=2]="MOVED",t[t.REMOVED=3]="REMOVED",t})(Zn||{}),vh=class{viewCacheSize=20;_viewCache=[];applyChanges(n,e,i,r,o){n.forEachOperation((s,a,c)=>{let l,d;if(s.previousIndex==null){let f=()=>i(s,a,c);l=this._insertView(f,c,e,r(s)),d=l?Zn.INSERTED:Zn.REPLACED}else c==null?(this._detachAndCacheView(a,e),d=Zn.REMOVED):(l=this._moveView(a,c,e,r(s)),d=Zn.MOVED);o&&o({context:l?.context,operation:d,record:s})})}detach(){for(let n of this._viewCache)n.destroy();this._viewCache=[]}_insertView(n,e,i,r){let o=this._insertViewFromCache(e,i);if(o){o.context.$implicit=r;return}let s=n();return i.createEmbeddedView(s.templateRef,s.context,s.index)}_detachAndCacheView(n,e){let i=e.detach(n);this._maybeCacheView(i,e)}_moveView(n,e,i,r){let o=i.get(n);return i.move(o,e),o.context.$implicit=r,o}_maybeCacheView(n,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(n);else{let i=e.indexOf(n);i===-1?n.destroy():e.remove(i)}}_insertViewFromCache(n,e){let i=this._viewCache.pop();return i&&e.insert(i,n),i||null}};var vl=(()=>{class t{_listeners=[];notify(e,i){for(let r of this._listeners)r(e,i)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(i=>e!==i)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var yh=class{applyChanges(n,e,i,r,o){n.forEachOperation((s,a,c)=>{let l,d;if(s.previousIndex==null){let f=i(s,a,c);l=e.createEmbeddedView(f.templateRef,f.context,f.index),d=Zn.INSERTED}else c==null?(e.remove(a),d=Zn.REMOVED):(l=e.get(a),e.move(l,c),d=Zn.MOVED);o&&o({context:l?.context,operation:d,record:s})})}detach(){}};var FV=new v("cdk-dir-doc",{providedIn:"root",factory:()=>u(K)}),PV=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function DN(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?PV.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Xn=(()=>{class t{get value(){return this.valueSignal()}valueSignal=H("ltr");change=new ee;constructor(){let e=u(FV,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(DN(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var Ie=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({})}return t})();var C_=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=Zt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Zt(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(fe("aria-orientation",r.vertical?"vertical":"horizontal"),G("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
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
`],encapsulation:2})}return t})(),xN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[Ie]})}return t})();var EN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[Ie]})}return t})();var Hr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[Ie]})}return t})();var LV=["*"],jV=`.mdc-list {
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
`,VV=["unscopedContent"],BV=["text"],HV=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],UV=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var zV=new v("ListOption"),$V=(()=>{class t{_elementRef=u(L);static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),qV=(()=>{class t{_elementRef=u(L);static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),GV=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),NN=(()=>{class t{_listOption=u(zV,{optional:!0});_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,hostVars:4,hostBindings:function(i,r){i&2&&G("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),WV=(()=>{class t extends NN{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[re]})}return t})(),KV=(()=>{class t extends NN{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[re]})}return t})(),YV=new v("MAT_LIST_CONFIG"),D_=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=Zt(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(Zt(e))}_disabled=H(!1);_defaultOptions=u(YV,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,hostVars:1,hostBindings:function(i,r){i&2&&fe("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),QV=(()=>{class t{_elementRef=u(L);_ngZone=u(O);_listBase=u(D_,{optional:!0});_platform=u(Ue);_hostElement;_isButtonElement;_noopAnimations=xt();_avatars;_icons;set lines(e){this._explicitLines=zo(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=Zt(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(Zt(e))}_disabled=H(!1);_subscriptions=new ue;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){u(yt).load(Sn);let e=u(Yo,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Ko(this,this._ngZone,this._hostElement,this._platform,u(le)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Jt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,contentQueries:function(i,r,o){if(i&1&&lt(o,WV,4)(o,KV,4),i&2){let s;$(s=q())&&(r._avatars=s),$(s=q())&&(r._icons=s)}},hostVars:4,hostBindings:function(i,r){i&2&&(fe("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),G("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var IN=(()=>{class t extends D_{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275cmp=R({type:t,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[ve([{provide:D_,useExisting:t}]),re],ngContentSelectors:LV,decls:1,vars:0,template:function(i,r){i&1&&(xe(),k(0))},styles:[jV],encapsulation:2})}return t})(),MN=(()=>{class t extends QV{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=Zt(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275cmp=R({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&lt(o,qV,5)(o,$V,5)(o,GV,5),i&2){let s;$(s=q())&&(r._lines=s),$(s=q())&&(r._titles=s),$(s=q())&&(r._meta=s)}},viewQuery:function(i,r){if(i&1&&jt(VV,5)(BV,5),i&2){let o;$(o=q())&&(r._unscopedContent=o.first),$(o=q())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(fe("aria-current",r._getAriaCurrent()),G("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[re],ngContentSelectors:UV,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(xe(HV),k(0),w(1,"span",1),k(2,1),k(3,2),w(4,"span",2,0),ge("cdkObserveContent",function(){return r._updateItemLines(!0)}),k(6,3),C()(),k(7,4),k(8,5),te(9,"div",3))},dependencies:[pN],encapsulation:2})}return t})();var TN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[fh,Hr,EN,Ie,xN]})}return t})();function RN(t){return Error(`Unable to find icon with the name "${t}"`)}function ZV(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function AN(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function ON(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Xi=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},bh=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new Xi(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let s=this._sanitizer.sanitize(Re.HTML,r);if(!s)throw ON(r);let a=fa(s);return this._addSvgIconConfig(e,i,new Xi("",a,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new Xi(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(Re.HTML,i);if(!o)throw ON(i);let s=fa(o);return this._addSvgIconSetConfig(e,new Xi("",s,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(Re.RESOURCE_URL,e);if(!i)throw AN(e);let r=this._cachedIconsByUrl.get(i);return r?z(_h(r)):this._loadSvgIconFromConfig(new Xi(e,null)).pipe(Tt(o=>this._cachedIconsByUrl.set(i,o)),ce(o=>_h(o)))}getNamedSvgIcon(e,i=""){let r=FN(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(i);return s?this._getSvgFromIconSetConfigs(e,s):Ba(RN(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?z(_h(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(ce(i=>_h(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return z(r);let o=i.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(ur(a=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(Re.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(l)),z(null)})));return Ua(o).pipe(ce(()=>{let s=this._extractIconWithNameFromAnySet(e,i);if(!s)throw RN(e);return s}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,e,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Tt(i=>e.svgText=i),ce(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?z(null):this._fetchIcon(e).pipe(Tt(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,r);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),r);let a=this._svgElementFromString(fa("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(fa("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:s,value:a}=r[o];s!=="id"&&i.setAttribute(s,a)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw ZV();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let s=this._sanitizer.sanitize(Re.RESOURCE_URL,i);if(!s)throw AN(i);let a=this._inProgressUrlFetches.get(s);if(a)return a;let c=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(ce(l=>fa(l)),hr(()=>this._inProgressUrlFetches.delete(s)),$a());return this._inProgressUrlFetches.set(s,c),c}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(FN(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return XV(o)?new Xi(o.url,null,o.options):new Xi(o,null)}}static \u0275fac=function(i){return new(i||t)(M(pf,8),M($c),M(K,8),M(Kt))};static \u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function _h(t){return t.cloneNode(!0)}function FN(t,n){return t+":"+n}function XV(t){return!!(t.url&&t.options)}var JV=["*"],e2=new v("MAT_ICON_DEFAULT_OPTIONS"),t2=new v("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(K),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),PN=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],n2=PN.map(t=>`[${t}]`).join(", "),i2=/^url\(['"]?#(.*?)['"]?\)$/,Ti=(()=>{class t{_elementRef=u(L);_iconRegistry=u(bh);_location=u(t2);_errorHandler=u(Kt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ue.EMPTY;constructor(){let e=u(new Tn("aria-hidden"),{optional:!0}),i=u(e2,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(n2),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)PN.forEach(s=>{let a=i[o],c=a.getAttribute(s),l=c?c.match(i2):null;if(l){let d=r.get(a);d||(d=[],r.set(a,d)),d.push({name:s,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(ft(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(fe("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),vn(r.color?"mat-"+r.color:""),G("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",P],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:JV,decls:1,vars:0,template:function(i,r){i&1&&(xe(),k(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2})}return t})(),LN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[Ie]})}return t})();var r2=["*"];var o2=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],s2=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],a2=new v("MAT_CARD_CONFIG"),ma=(()=>{class t{appearance;constructor(){let e=u(a2,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&G("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:r2,decls:1,vars:0,template:function(i,r){i&1&&(xe(),k(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2})}return t})(),pa=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var ga=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var jN=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&G("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),va=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:s2,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(xe(o2),k(0),tt(1,"div",0),k(2,1),ct(),k(3,2))},encapsulation:2})}return t})();var wh=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[Ie]})}return t})();var c2={capture:!0},l2=["focus","mousedown","mouseenter","touchstart"],E_="mat-ripple-loader-uninitialized",N_="mat-ripple-loader-class-name",VN="mat-ripple-loader-centered",Sh="mat-ripple-loader-disabled",Ch=(()=>{class t{_document=u(K);_animationsDisabled=xt();_globalRippleOptions=u(Yo,{optional:!0});_platform=u(Ue);_ngZone=u(O);_injector=u(le);_eventCleanups;_hosts=new Map;constructor(){let e=u(at).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>l2.map(i=>e.listen(this._document,i,this._onInteraction,c2)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(E_,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(N_))&&e.setAttribute(N_,i.className||""),i.centered&&e.setAttribute(VN,""),i.disabled&&e.setAttribute(Sh,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(Sh,""):e.removeAttribute(Sh)}_onInteraction=e=>{let i=sn(e);if(i instanceof HTMLElement){let r=i.closest(`[${E_}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(N_)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??gl.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??gl.exitDuration,a={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Sh),rippleConfig:{centered:e.hasAttribute(VN),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},c=new Ko(a,this._ngZone,i,this._platform,this._injector),l=!a.rippleDisabled;l&&c.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:c,hasSetUpEvents:l}),e.removeAttribute(E_)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var BN=new v("");var Dh=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}isSignalErrorState(e){if(!e)return!1;let i=e().invalid(),r=e().touched();return i&&r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var xh=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(n,e,i,r,o){this._defaultMatcher=n,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o,e?Hn(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let n=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==n&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(n){if(this.formField&&n?.isSignalErrorState)return n.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,i=this.ngControl?this.ngControl.control:null;return n?.isErrorState(i,e)??!1}};var I_=class{_box;_destroyed=new N;_resizeSubject=new N;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new Z(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Ee(e=>e.some(i=>i.target===n)),Sd({bufferSize:1,refCount:!0}),Fe(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},HN=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(O);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new I_(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var d2=["notch"],u2=["*"],UN=["iconPrefixContainer"],zN=["textPrefixContainer"],$N=["iconSuffixContainer"],qN=["textSuffixContainer"],f2=["textField"],h2=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],m2=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function p2(t,n){t&1&&te(0,"span",21)}function g2(t,n){if(t&1&&(w(0,"label",20),k(1,1),we(2,p2,1,0,"span",21),C()),t&2){let e=de(2);Y("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),fe("for",e._control.disableAutomaticLabeling?null:e._control.id),D(2),Se(!e.hideRequiredMarker&&e._control.required?2:-1)}}function v2(t,n){if(t&1&&we(0,g2,3,5,"label",20),t&2){let e=de();Se(e._hasFloatingLabel()?0:-1)}}function y2(t,n){t&1&&te(0,"div",7)}function _2(t,n){}function b2(t,n){if(t&1&&Le(0,_2,0,0,"ng-template",13),t&2){de(2);let e=Mn(1);Y("ngTemplateOutlet",e)}}function w2(t,n){if(t&1&&(w(0,"div",9),we(1,b2,1,1,null,13),C()),t&2){let e=de();Y("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),D(),Se(e._forceDisplayInfixLabel()?-1:1)}}function S2(t,n){t&1&&(w(0,"div",10,2),k(2,2),C())}function C2(t,n){t&1&&(w(0,"div",11,3),k(2,3),C())}function D2(t,n){}function x2(t,n){if(t&1&&Le(0,D2,0,0,"ng-template",13),t&2){de();let e=Mn(1);Y("ngTemplateOutlet",e)}}function E2(t,n){t&1&&(w(0,"div",14,4),k(2,4),C())}function N2(t,n){t&1&&(w(0,"div",15,5),k(2,5),C())}function I2(t,n){t&1&&te(0,"div",16)}function M2(t,n){t&1&&(w(0,"div",18),k(1,6),C())}function T2(t,n){if(t&1&&(w(0,"mat-hint",22),X(1),C()),t&2){let e=de(2);Y("id",e._hintLabelId),D(),Rt(e.hintLabel)}}function k2(t,n){if(t&1&&(w(0,"div",19),we(1,T2,2,2,"mat-hint",22),k(2,7),te(3,"div",23),k(4,8),C()),t&2){let e=de();D(),Se(e.hintLabel?1:-1)}}var Qo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["mat-label"]]})}return t})(),R2=new v("MatError");var M_=(()=>{class t{align="start";id=u(_t).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(on("id",r.id),fe("align",null),G("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),A2=new v("MatPrefix");var O2=new v("MatSuffix");var XN=new v("FloatingLabelParent"),GN=(()=>{class t{_elementRef=u(L);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(HN);_ngZone=u(O);_parent=u(XN);_resizeSubscription=new ue;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return F2(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&G("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function F2(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var WN="mdc-line-ripple--active",Eh="mdc-line-ripple--deactivating",KN=(()=>{class t{_elementRef=u(L);_cleanupTransitionEnd;constructor(){let e=u(O),i=u(He);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Eh),e.add(WN)}deactivate(){this._elementRef.nativeElement.classList.add(Eh)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Eh);e.propertyName==="opacity"&&r&&i.remove(WN,Eh)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),YN=(()=>{class t{_elementRef=u(L);_ngZone=u(O);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&jt(d2,5),i&2){let o;$(o=q())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&G("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:u2,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(xe(),rn(0,"div",1),tt(1,"div",2,0),k(3),ct(),rn(4,"div",3))},encapsulation:2})}return t})(),T_=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t})}return t})();var k_=new v("MatFormField"),P2=new v("MAT_FORM_FIELD_DEFAULT_OPTIONS"),QN="fill",L2="auto",ZN="fixed",j2="translateY(-50%)",ya=(()=>{class t{_elementRef=u(L);_changeDetectorRef=u(Ye);_platform=u(Ue);_idGenerator=u(_t);_ngZone=u(O);_defaults=u(P2,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Rc("iconPrefixContainer");_textPrefixContainerSignal=Rc("textPrefixContainer");_iconSuffixContainerSignal=Rc("iconSuffixContainer");_textSuffixContainerSignal=Rc("textSuffixContainer");_prefixSuffixContainers=Je(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=kD(Qo);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Zt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||L2}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||QN;this._appearanceSignal.set(i)}_appearanceSignal=H(QN);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||ZN}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||ZN}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new N;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=xt();constructor(){let e=this._defaults,i=u(Xn);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),tn(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Je(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Mt([void 0,void 0]),ce(()=>[i.errorState,i.userAriaDescribedBy]),wd(),Ee(([[o,s],[a,c]])=>o!==a||s!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Fe(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Jt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Zv({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Je(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(s=>s&&!o.includes(s)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,a=i?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,l=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",f=`${s+a}px`,m=`calc(${d} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,p=`var(--mat-mdc-form-field-label-transform, ${j2} translateX(${m}))`,_=s+a+c+l;return[p,_]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(Bu(o,r._labelChild,Qo,5),lt(o,T_,5)(o,A2,5)(o,O2,5)(o,R2,5)(o,M_,5)),i&2){Uu();let s;$(s=q())&&(r._formFieldControl=s.first),$(s=q())&&(r._prefixChildren=s),$(s=q())&&(r._suffixChildren=s),$(s=q())&&(r._errorChildren=s),$(s=q())&&(r._hintChildren=s)}},viewQuery:function(i,r){if(i&1&&(Hu(r._iconPrefixContainerSignal,UN,5)(r._textPrefixContainerSignal,zN,5)(r._iconSuffixContainerSignal,$N,5)(r._textSuffixContainerSignal,qN,5),jt(f2,5)(UN,5)(zN,5)($N,5)(qN,5)(GN,5)(YN,5)(KN,5)),i&2){Uu(4);let o;$(o=q())&&(r._textField=o.first),$(o=q())&&(r._iconPrefixContainer=o.first),$(o=q())&&(r._textPrefixContainer=o.first),$(o=q())&&(r._iconSuffixContainer=o.first),$(o=q())&&(r._textSuffixContainer=o.first),$(o=q())&&(r._floatingLabel=o.first),$(o=q())&&(r._notchedOutline=o.first),$(o=q())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&G("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ve([{provide:k_,useExisting:t},{provide:XN,useExisting:t}])],ngContentSelectors:m2,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(xe(h2),Le(0,v2,1,1,"ng-template",null,0,zu),w(2,"div",6,1),ge("click",function(s){return r._control.onContainerClick(s)}),we(4,y2,1,0,"div",7),w(5,"div",8),we(6,w2,2,2,"div",9),we(7,S2,3,0,"div",10),we(8,C2,3,0,"div",11),w(9,"div",12),we(10,x2,1,1,null,13),k(11),C(),we(12,E2,3,0,"div",14),we(13,N2,3,0,"div",15),C(),we(14,I2,1,0,"div",16),C(),w(15,"div",17),we(16,M2,2,0,"div",18)(17,k2,5,1,"div",19),C()),i&2){let o;D(2),G("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),D(2),Se(!r._hasOutline()&&!r._control.disabled?4:-1),D(2),Se(r._hasOutline()?6:-1),D(),Se(r._hasIconPrefix?7:-1),D(),Se(r._hasTextPrefix?8:-1),D(2),Se(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),D(2),Se(r._hasTextSuffix?12:-1),D(),Se(r._hasIconSuffix?13:-1),D(),Se(r._hasOutline()?-1:14),D(),G("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let s=r._getSubscriptMessageType();D(),Se((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[GN,YN,ny,KN,M_],styles:[`.mdc-text-field {
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
`],encapsulation:2})}return t})();var nI=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],iI=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function V2(t,n){t&1&&(w(0,"span",3),k(1,1),C())}function B2(t,n){t&1&&(w(0,"span",6),k(1,2),C())}function H2(t,n){t&1&&(w(0,"span",3),k(1,1),w(2,"span",7),Bn(),w(3,"svg",8),te(4,"path",9),C()()())}function U2(t,n){t&1&&(w(0,"span",6),k(1,2),C())}var z2=`.mdc-evolution-chip,
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
`;var rI=["*"],$2=`.mat-mdc-chip-set {
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
`,F_=new v("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),R_=new v("MatChipAvatar"),JN=new v("MatChipTrailingIcon"),eI=new v("MatChipEdit"),tI=new v("MatChipRemove"),P_=new v("MatChip"),oI=(()=>{class t{_elementRef=u(L);_parentChip=u(P_);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){u(yt).load(Sn),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(i,r){i&2&&(fe("disabled",r._getDisabledAttribute())("aria-disabled",r.disabled),G("mdc-evolution-chip__action--primary",r._isPrimary)("mdc-evolution-chip__action--secondary",!r._isPrimary)("mdc-evolution-chip__action--trailing",!r._isPrimary&&!r._isLeading))},inputs:{disabled:[2,"disabled","disabled",P],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:wi(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return t})(),sI=(()=>{class t extends oI{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(i,r){i&1&&ge("click",function(s){return r._handleClick(s)})("keydown",function(s){return r._handleKeydown(s)}),i&2&&(fe("tabindex",r._getTabindex()),G("mdc-evolution-chip__action--presentational",!1))},features:[re]})}return t})(),Ih=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["mat-chip-avatar"],["","matChipAvatar",""]],hostAttrs:["role","img",1,"mat-mdc-chip-avatar","mdc-evolution-chip__icon","mdc-evolution-chip__icon--primary"],features:[ve([{provide:R_,useExisting:t}])]})}return t})();var A_=(()=>{class t{_changeDetectorRef=u(Ye);_elementRef=u(L);_tagName=u(TD);_ngZone=u(O);_focusMonitor=u(Mi);_globalRippleOptions=u(Yo,{optional:!0});_document=u(K);_onFocus=new N;_onBlur=new N;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=xt();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=u(_t).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new ee;destroyed=new ee;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=u(Ch);_injector=u(le);constructor(){let e=u(yt);e.load(Sn),e.load(aN),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Jt(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(i=>{let r=i._elementRef.nativeElement;return r===e||r.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let i=e!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(i,r,o){if(i&1&&lt(o,R_,5)(o,eI,5)(o,JN,5)(o,tI,5)(o,R_,5)(o,JN,5)(o,eI,5)(o,tI,5),i&2){let s;$(s=q())&&(r.leadingIcon=s.first),$(s=q())&&(r.editIcon=s.first),$(s=q())&&(r.trailingIcon=s.first),$(s=q())&&(r.removeIcon=s.first),$(s=q())&&(r._allLeadingIcons=s),$(s=q())&&(r._allTrailingIcons=s),$(s=q())&&(r._allEditIcons=s),$(s=q())&&(r._allRemoveIcons=s)}},viewQuery:function(i,r){if(i&1&&jt(sI,5),i&2){let o;$(o=q())&&(r.primaryAction=o.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(i,r){i&1&&ge("keydown",function(s){return r._handleKeydown(s)}),i&2&&(on("id",r.id),fe("role",r.role)("aria-label",r.ariaLabel),vn("mat-"+(r.color||"primary")),G("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",r.leadingIcon)("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-basic-chip",r._isBasicChip)("mat-mdc-standard-chip",!r._isBasicChip)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon())("_mat-animation-noopable",r._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",P],highlighted:[2,"highlighted","highlighted",P],disableRipple:[2,"disableRipple","disableRipple",P],disabled:[2,"disabled","disabled",P]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[ve([{provide:P_,useExisting:t}])],ngContentSelectors:iI,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(i,r){i&1&&(xe(nI),te(0,"span",0),w(1,"span",1)(2,"span",2),we(3,V2,2,0,"span",3),w(4,"span",4),k(5),te(6,"span",5),C()()(),we(7,B2,2,0,"span",6)),i&2&&(D(3),Se(r.leadingIcon?3:-1),D(4),Se(r._hasTrailingIcon()?7:-1))},dependencies:[oI],styles:[`.mdc-evolution-chip,
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
`],encapsulation:2})}return t})();var _l=(()=>{class t extends A_{_defaultOptions=u(F_,{optional:!0});chipListSelectable=!0;_chipListMultiple=!1;_chipListHideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get selectable(){return this._selectable&&this.chipListSelectable}set selectable(e){this._selectable=e,this._changeDetectorRef.markForCheck()}_selectable=!0;get selected(){return this._selected}set selected(e){this._setSelectedState(e,!1,!0)}_selected=!1;get ariaSelected(){return this.selectable?this.selected.toString():null}basicChipAttrName="mat-basic-chip-option";selectionChange=new ee;ngOnInit(){super.ngOnInit(),this.role="presentation"}select(){this._setSelectedState(!0,!1,!0)}deselect(){this._setSelectedState(!1,!1,!0)}selectViaInteraction(){this._setSelectedState(!0,!0,!0)}toggleSelected(e=!1){return this._setSelectedState(!this.selected,e,!0),this.selected}_handlePrimaryActionInteraction(){this.disabled||(this.focus(),this.selectable&&this.toggleSelected(!0))}_hasLeadingGraphic(){return this.leadingIcon?!0:!this._chipListHideSingleSelectionIndicator||this._chipListMultiple}_setSelectedState(e,i,r){e!==this.selected&&(this._selected=e,r&&this.selectionChange.emit({source:this,isUserInput:i,selected:this.selected}),this._changeDetectorRef.markForCheck())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275cmp=R({type:t,selectors:[["mat-basic-chip-option"],["","mat-basic-chip-option",""],["mat-chip-option"],["","mat-chip-option",""]],hostAttrs:[1,"mat-mdc-chip","mat-mdc-chip-option"],hostVars:37,hostBindings:function(i,r){i&2&&(on("id",r.id),fe("tabindex",null)("aria-label",null)("aria-description",null)("role",r.role),G("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--filter",!r._isBasicChip)("mdc-evolution-chip--selectable",!r._isBasicChip)("mat-mdc-chip-selected",r.selected)("mat-mdc-chip-multiple",r._chipListMultiple)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-chip-with-avatar",r.leadingIcon)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--selected",r.selected)("mdc-evolution-chip--selecting",!r._animationsDisabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-primary-graphic",r._hasLeadingGraphic())("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon()))},inputs:{selectable:[2,"selectable","selectable",P],selected:[2,"selected","selected",P]},outputs:{selectionChange:"selectionChange"},features:[ve([{provide:A_,useExisting:t},{provide:P_,useExisting:t}]),re],ngContentSelectors:iI,decls:8,vars:6,consts:[[1,"mat-mdc-chip-focus-overlay"],["role","presentation",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipAction","","role","option",3,"_allowFocusWhenDisabled"],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],["role","presentation",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"],[1,"mdc-evolution-chip__checkmark"],["viewBox","-2 -3 30 30","focusable","false","aria-hidden","true",1,"mdc-evolution-chip__checkmark-svg"],["fill","none","stroke","currentColor","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-evolution-chip__checkmark-path"]],template:function(i,r){i&1&&(xe(nI),te(0,"span",0),w(1,"span",1)(2,"button",2),we(3,H2,5,0,"span",3),w(4,"span",4),k(5),te(6,"span",5),C()()(),we(7,U2,2,0,"span",6)),i&2&&(D(2),Y("_allowFocusWhenDisabled",!0),fe("aria-description",r.ariaDescription)("aria-label",r.ariaLabel)("aria-selected",r.ariaSelected),D(),Se(r._hasLeadingGraphic()?3:-1),D(4),Se(r._hasTrailingIcon()?7:-1))},dependencies:[sI],styles:[z2],encapsulation:2})}return t})();var q2=(()=>{class t{_elementRef=u(L);_changeDetectorRef=u(Ye);_dir=u(Xn,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new N;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new pn;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(Mt(null),Ke(()=>Jt(...this._chips.map(e))))}_originatesFromChip(e){let i=e.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains("mat-mdc-chip"))return!0;i=i.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Mt(this._chips)).subscribe(e=>{let i=[];e.forEach(r=>r._getActions().forEach(o=>i.push(o))),this._chipActions.reset(i),this._chipActions.notifyOnChanges()}),this._keyManager=new Zi(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(Fe(this._destroyed)).subscribe(({chip:e})=>{let i=e._getSourceAction(document.activeElement);i&&this._keyManager.updateActiveItem(i)}),this._dir?.change.pipe(Fe(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Mt(null),Fe(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(Fe(this._destroyed)).subscribe(e=>{let r=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),s=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),a=o||s;this._isValidIndex(r)&&a&&(this._lastDestroyedFocusedChipIndex=r)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),i=this._chips.toArray()[e];i.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():i.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["mat-chip-set"]],contentQueries:function(i,r,o){if(i&1&&lt(o,A_,5),i&2){let s;$(s=q())&&(r._chips=s)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(i,r){i&1&&ge("keydown",function(s){return r._handleKeydown(s)}),i&2&&fe("role",r.role)},inputs:{disabled:[2,"disabled","disabled",P],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:wi(e)]},ngContentSelectors:rI,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(i,r){i&1&&(xe(),tt(0,"div",0),k(1),ct())},styles:[`.mat-mdc-chip-set {
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
`],encapsulation:2})}return t})(),O_=class{source;value;constructor(n,e){this.source=n,this.value=e}},G2={provide:Bo,useExisting:kt(()=>bl),multi:!0},bl=(()=>{class t extends q2{_onTouched=()=>{};_onChange=()=>{};_defaultRole="listbox";_defaultOptions=u(F_,{optional:!0});get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._syncListboxProperties()}_multiple=!1;get selected(){let e=this._chips.toArray().filter(i=>i.selected);return this.multiple?e:e[0]}ariaOrientation="horizontal";get selectable(){return this._selectable}set selectable(e){this._selectable=e,this._syncListboxProperties()}_selectable=!0;compareWith=(e,i)=>e===i;required=!1;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncListboxProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get chipSelectionChanges(){return this._getChipStream(e=>e.selectionChange)}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}get value(){return this._value}set value(e){this._chips&&this._chips.length&&this._setSelectionByValue(e,!1),this._value=e}_value;change=new ee;_chips=void 0;ngAfterContentInit(){this._chips.changes.pipe(Mt(null),Fe(this._destroyed)).subscribe(()=>{this.value!==void 0&&Promise.resolve().then(()=>{this._setSelectionByValue(this.value,!1)}),this._syncListboxProperties()}),this.chipBlurChanges.pipe(Fe(this._destroyed)).subscribe(()=>this._blur()),this.chipSelectionChanges.pipe(Fe(this._destroyed)).subscribe(e=>{this.multiple||this._chips.forEach(i=>{i!==e.source&&i._setSelectedState(!1,!1,!1)}),e.isUserInput&&this._propagateChanges()})}focus(){if(this.disabled)return;let e=this._getFirstSelectedChip();e&&!e.disabled?e.focus():this._chips.length>0?this._keyManager.setFirstItemActive():this._elementRef.nativeElement.focus()}writeValue(e){e!=null?this.value=e:this.value=void 0}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_setSelectionByValue(e,i=!0){this._clearSelection(),Array.isArray(e)?e.forEach(r=>this._selectValue(r,i)):this._selectValue(e,i)}_blur(){this.disabled||setTimeout(()=>{this.focused||this._markAsTouched()})}_keydown(e){e.keyCode===9&&super._allowFocusEscape()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck()}_propagateChanges(){let e=null;Array.isArray(this.selected)?e=this.selected.map(i=>i.value):e=this.selected?this.selected.value:void 0,this._value=e,this.change.emit(new O_(this,e)),this._onChange(e),this._changeDetectorRef.markForCheck()}_clearSelection(e){this._chips.forEach(i=>{i!==e&&i.deselect()})}_selectValue(e,i){let r=this._chips.find(o=>o.value!=null&&this.compareWith(o.value,e));return r&&(i?r.selectViaInteraction():r.select()),r}_syncListboxProperties(){this._chips&&Promise.resolve().then(()=>{this._chips.forEach(e=>{e._chipListMultiple=this.multiple,e.chipListSelectable=this._selectable,e._chipListHideSingleSelectionIndicator=this.hideSingleSelectionIndicator,e._changeDetectorRef.markForCheck()})})}_getFirstSelectedChip(){return Array.isArray(this.selected)?this.selected.length?this.selected[0]:void 0:this.selected}_skipPredicate(e){return!1}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275cmp=R({type:t,selectors:[["mat-chip-listbox"]],contentQueries:function(i,r,o){if(i&1&&lt(o,_l,5),i&2){let s;$(s=q())&&(r._chips=s)}},hostAttrs:[1,"mdc-evolution-chip-set","mat-mdc-chip-listbox"],hostVars:10,hostBindings:function(i,r){i&1&&ge("focus",function(){return r.focus()})("blur",function(){return r._blur()})("keydown",function(s){return r._keydown(s)}),i&2&&(on("tabIndex",r.disabled||r.empty?-1:r.tabIndex),fe("role",r.role)("aria-required",r.role?r.required:null)("aria-disabled",r.disabled.toString())("aria-multiselectable",r.multiple)("aria-orientation",r.ariaOrientation),G("mat-mdc-chip-list-disabled",r.disabled)("mat-mdc-chip-list-required",r.required))},inputs:{multiple:[2,"multiple","multiple",P],ariaOrientation:[0,"aria-orientation","ariaOrientation"],selectable:[2,"selectable","selectable",P],compareWith:"compareWith",required:[2,"required","required",P],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",P],value:"value"},outputs:{change:"change"},features:[ve([G2]),re],ngContentSelectors:rI,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(i,r){i&1&&(xe(),tt(0,"div",0),k(1),ct())},styles:[$2],encapsulation:2})}return t})();var aI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({providers:[Dh,{provide:F_,useValue:{separatorKeyCodes:[13]}}],imports:[Hr,Ie]})}return t})();var Zo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[fh,ya,Ie]})}return t})();var W2=new v("MAT_BUTTON_CONFIG");function dI(t){return t==null?void 0:wi(t)}var L_=(()=>{class t{_elementRef=u(L);_ngZone=u(O);_animationsDisabled=xt();_config=u(W2,{optional:!0});_focusMonitor=u(Mi);_cleanupClick;_renderer=u(He);_rippleLoader=u(Ch);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=$t(!1,{transform:P});constructor(){u(yt).load(Sn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(i,r){i&2&&(fe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),vn(r.color?"mat-"+r.color:""),G("mat-mdc-button-progress-indicator-shown",r.showProgress())("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",P],disabled:[2,"disabled","disabled",P],ariaDisabled:[2,"aria-disabled","ariaDisabled",P],disabledInteractive:[2,"disabledInteractive","disabledInteractive",P],tabIndex:[2,"tabIndex","tabIndex",dI],_tabindex:[2,"tabindex","_tabindex",dI],showProgress:[1,"showProgress"]}})}return t})();var fI=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],hI=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function K2(t,n){t&1&&(tt(0,"div",2),k(1,3),ct())}function Y2(t,n){t&1&&(tt(0,"div",2),k(1,3),ct())}var Q2=`.mat-mdc-fab-base {
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
`,uI=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Mh=(()=>{class t extends L_{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Z2(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?uI.get(this._appearance):null,o=uI.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[re],ngContentSelectors:hI,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(xe(fI),rn(0,"span",0),k(1),tt(2,"span",1),k(3,1),ct(),k(4,2),we(5,K2,2,0,"div",2),rn(6,"span",3)(7,"span",4)),i&2&&(G("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),D(5),Se(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2})}return t})();function Z2(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var X2=new v("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>j_}),j_={color:"accent"};var Th=(()=>{class t extends L_{_options=u(X2,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||j_,this.color=this._options.color||j_.color}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["button","mat-mini-fab",""],["a","mat-mini-fab",""],["button","matMiniFab",""],["a","matMiniFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mdc-fab--mini","mat-mdc-mini-fab"],exportAs:["matButton","matAnchor"],features:[re],ngContentSelectors:hI,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(xe(fI),rn(0,"span",0),k(1),tt(2,"span",1),k(3,1),ct(),k(4,2),we(5,Y2,2,0,"div",2),rn(6,"span",3)(7,"span",4)),i&2&&(G("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),D(5),Se(r.showProgress()?5:-1))},styles:[Q2],encapsulation:2})}return t})();var mI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[Hr,Ie]})}return t})();var J2=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return t})(),eB={passive:!0},pI=(()=>{class t{_platform=u(Ue);_ngZone=u(O);_renderer=u(at).createRenderer(null,null);_styleLoader=u(yt);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return rt;this._styleLoader.load(J2);let i=Qt(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new N,s="cdk-text-field-autofilled",a=l=>{l.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(s)?(i.classList.add(s),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!0}))):l.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(s)&&(i.classList.remove(s),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",a,eB)));return this._monitoredElements.set(i,{subject:o,unlisten:c}),o}stopMonitoring(e){let i=Qt(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var gI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({})}return t})();var vI=new v("MAT_INPUT_VALUE_ACCESSOR");var tB=["button","checkbox","file","hidden","image","radio","range","reset","submit"],nB=new v("MAT_INPUT_CONFIG"),Rh=(()=>{class t{_elementRef=u(L);_platform=u(Ue);ngControl=u(Qi,{optional:!0,self:!0});_autofillMonitor=u(pI);_ngZone=u(O);_formField=u(k_,{optional:!0});_renderer=u(He);_uid=u(_t).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(nB,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new N;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Zt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Or.required)??!1}set required(e){this._required=Zt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&g_().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Zt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>g_().has(e));constructor(){let e=u(sh,{optional:!0}),i=u(Vr,{optional:!0}),r=u(Dh),o=u(vI,{optional:!0,self:!0}),s=u(BN,{optional:!0,self:!0}),a=this._elementRef.nativeElement,c=a.nodeName.toLowerCase();o?Hn(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new xh(r,s||this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=c==="select",this._isTextarea=c==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&tn(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){tB.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&ge("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(on("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),fe("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),G("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",P]},exportAs:["matInput"],features:[ve([{provide:T_,useExisting:t}]),We]})}return t})(),Ah=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[Zo,Zo,gI,Ie]})}return t})();var iB=20,Fh=(()=>{class t{_ngZone=u(O);_platform=u(Ue);_renderer=u(at).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new N;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=iB){return this._platform.isBrowser?new Z(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(gs(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):z()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Ee(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._targetContainsElement(o,e)&&i.push(o)}),i}_targetContainsElement(e,i){let r=Qt(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var rB=20,Ur=(()=>{class t{_platform=u(Ue);_listeners;_viewportSize=null;_change=new N;_document=u(K);constructor(){let e=u(O),i=u(at).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,a=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:s,left:a}}change(e=rB){return e>0?this._change.pipe(gs(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var _I=new v("CDK_VIRTUAL_SCROLL_VIEWPORT");var Oh=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({})}return t})(),wl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[Ie,Oh,Ie,Oh]})}return t})();var oB=[[["caption"]],[["colgroup"],["col"]],"*"],sB=["caption","colgroup, col","*"];function aB(t,n){t&1&&k(0,2)}function cB(t,n){t&1&&(w(0,"thead",0),zt(1,1),C(),w(2,"tbody",0),zt(3,2)(4,3),C(),w(5,"tfoot",0),zt(6,4),C())}function lB(t,n){t&1&&zt(0,1)(1,2)(2,3)(3,4)}var Jn=new v("CDK_TABLE");var jh=(()=>{class t{template=u(gt);static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","cdkCellDef",""]]})}return t})(),Vh=(()=>{class t{template=u(gt);static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","cdkHeaderCellDef",""]]})}return t})(),CI=(()=>{class t{template=u(gt);static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","cdkFooterCellDef",""]]})}return t})(),ba=(()=>{class t{_table=u(Jn,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","cdkColumnDef",""]],contentQueries:function(i,r,o){if(i&1&&lt(o,jh,5)(o,Vh,5)(o,CI,5),i&2){let s;$(s=q())&&(r.cell=s.first),$(s=q())&&(r.headerCell=s.first),$(s=q())&&(r.footerCell=s.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",P],stickyEnd:[2,"stickyEnd","stickyEnd",P]}})}return t})(),Lh=class{constructor(n,e){e.nativeElement.classList.add(...n._columnCssClassName)}},DI=(()=>{class t extends Lh{constructor(){super(u(ba),u(L))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[re]})}return t})();var xI=(()=>{class t extends Lh{constructor(){let e=u(ba),i=u(L);super(e,i);let r=e._table?._getCellRole();r&&i.nativeElement.setAttribute("role",r)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[re]})}return t})();var B_=(()=>{class t{template=u(gt);_differs=u(Ao);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let i=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(i).create(),this._columnsDiffer.diff(i)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof Cl?e.headerCell.template:this instanceof H_?e.footerCell.template:e.cell.template}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,features:[We]})}return t})(),Cl=(()=>{class t extends B_{_table=u(Jn,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",P]},features:[re,We]})}return t})(),H_=(()=>{class t extends B_{_table=u(Jn,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",P]},features:[re,We]})}return t})(),Bh=(()=>{class t extends B_{_table=u(Jn,{optional:!0});when;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[re]})}return t})(),Xo=(()=>{class t{_viewContainer=u(et);cells;context;static mostRecentCellOutlet=null;constructor(){t.mostRecentCellOutlet=this}ngOnDestroy(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","cdkCellOutlet",""]]})}return t})(),U_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&zt(0,0)},dependencies:[Xo],encapsulation:2,changeDetection:1})}return t})();var z_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&zt(0,0)},dependencies:[Xo],encapsulation:2,changeDetection:1})}return t})(),EI=(()=>{class t{templateRef=u(gt);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["ng-template","cdkNoDataRow",""]]})}return t})(),bI=["top","bottom","left","right"],V_=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(n=>this._updateCachedSizes(n)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(n,e,i=!0,r=!0,o,s,a){this._isNativeHtmlTable=n,this._stickCellCss=e,this._isBrowser=i,this._needsPositionStickyOnElement=r,this.direction=o,this._positionListener=s,this._tableInjector=a,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(n,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(n);let i=[];for(let r of n)r.nodeType===r.ELEMENT_NODE&&i.push(r,...Array.from(r.children));Pt({write:()=>{for(let r of i)this._removeStickyStyle(r,e)}},{injector:this._tableInjector})}updateStickyColumns(n,e,i,r=!0,o=!0){if(!n.length||!this._isBrowser||!(e.some(x=>x)||i.some(x=>x))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let s=n[0],a=s.children.length,c=this.direction==="rtl",l=c?"right":"left",d=c?"left":"right",f=e.lastIndexOf(!0),h=i.indexOf(!0),m,p,_;o&&this._updateStickyColumnReplayQueue({rows:[...n],stickyStartStates:[...e],stickyEndStates:[...i]}),Pt({earlyRead:()=>{m=this._getCellWidths(s,r),p=this._getStickyStartColumnPositions(m,e),_=this._getStickyEndColumnPositions(m,i)},write:()=>{for(let x of n)for(let I=0;I<a;I++){let T=x.children[I];e[I]&&this._addStickyStyle(T,l,p[I],I===f),i[I]&&this._addStickyStyle(T,d,_[I],I===h)}this._positionListener&&m.some(x=>!!x)&&(this._positionListener.stickyColumnsUpdated({sizes:f===-1?[]:m.slice(0,f+1).map((x,I)=>e[I]?x:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:h===-1?[]:m.slice(h).map((x,I)=>i[I+h]?x:null).reverse()}))}},{injector:this._tableInjector})}stickRows(n,e,i){if(!this._isBrowser)return;let r=i==="bottom"?n.slice().reverse():n,o=i==="bottom"?e.slice().reverse():e,s=[],a=[],c=[];Pt({earlyRead:()=>{for(let l=0,d=0;l<r.length;l++){if(!o[l])continue;s[l]=d;let f=r[l];c[l]=this._isNativeHtmlTable?Array.from(f.children):[f];let h=this._retrieveElementSize(f).height;d+=h,a[l]=h}},write:()=>{let l=o.lastIndexOf(!0);for(let d=0;d<r.length;d++){if(!o[d])continue;let f=s[d],h=d===l;for(let m of c[d])this._addStickyStyle(m,i,f,h)}i==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:a,offsets:s,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:a,offsets:s,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(n,e){this._isNativeHtmlTable&&Pt({write:()=>{let i=n.querySelector("tfoot");i&&(e.some(r=>!r)?this._removeStickyStyle(i,["bottom"]):this._addStickyStyle(i,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(n,e){if(!n.classList.contains(this._stickCellCss))return;for(let r of e)n.style[r]="",n.classList.remove(this._borderCellCss[r]);bI.some(r=>e.indexOf(r)===-1&&n.style[r])?n.style.zIndex=this._getCalculatedZIndex(n):(n.style.zIndex="",this._needsPositionStickyOnElement&&(n.style.position=""),n.classList.remove(this._stickCellCss))}_addStickyStyle(n,e,i,r){n.classList.add(this._stickCellCss),r&&n.classList.add(this._borderCellCss[e]),n.style[e]=`${i}px`,n.style.zIndex=this._getCalculatedZIndex(n),this._needsPositionStickyOnElement&&(n.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(n){let e={top:100,bottom:10,left:1,right:1},i=0;for(let r of bI)n.style[r]&&(i+=e[r]);return i?`${i}`:""}_getCellWidths(n,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let i=[],r=n.children;for(let o=0;o<r.length;o++){let s=r[o];i.push(this._retrieveElementSize(s).width)}return this._cachedCellWidths=i,i}_getStickyStartColumnPositions(n,e){let i=[],r=0;for(let o=0;o<n.length;o++)e[o]&&(i[o]=r,r+=n[o]);return i}_getStickyEndColumnPositions(n,e){let i=[],r=0;for(let o=n.length;o>0;o--)e[o]&&(i[o]=r,r+=n[o]);return i}_retrieveElementSize(n){let e=this._elemSizeCache.get(n);if(e)return e;let i=n.getBoundingClientRect(),r={width:i.width,height:i.height};return this._resizeObserver&&(this._elemSizeCache.set(n,r),this._resizeObserver.observe(n,{box:"border-box"})),r}_updateStickyColumnReplayQueue(n){this._removeFromStickyColumnReplayQueue(n.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(n)}_removeFromStickyColumnReplayQueue(n){let e=new Set(n);for(let i of this._updatedStickyColumnsParamsToReplay)i.rows=i.rows.filter(r=>!e.has(r));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(i=>!!i.rows.length)}_updateCachedSizes(n){let e=!1;for(let i of n){let r=i.borderBoxSize?.length?{width:i.borderBoxSize[0].inlineSize,height:i.borderBoxSize[0].blockSize}:{width:i.contentRect.width,height:i.contentRect.height};r.width!==this._elemSizeCache.get(i.target)?.width&&dB(i.target)&&(e=!0),this._elemSizeCache.set(i.target,r)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let i of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(i.rows,i.stickyStartStates,i.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function dB(t){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(n=>t.classList.contains(n))}function wI(t){return Error(`Could not find column with id "${t}".`)}var Sl=new v("STICKY_POSITIONING_LISTENER");var $_=(()=>{class t{viewContainer=u(et);elementRef=u(L);constructor(){let e=u(Jn);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","rowOutlet",""]]})}return t})(),q_=(()=>{class t{viewContainer=u(et);elementRef=u(L);constructor(){let e=u(Jn);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","headerRowOutlet",""]]})}return t})(),G_=(()=>{class t{viewContainer=u(et);elementRef=u(L);constructor(){let e=u(Jn);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","footerRowOutlet",""]]})}return t})(),W_=(()=>{class t{viewContainer=u(et);elementRef=u(L);constructor(){let e=u(Jn);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","noDataRowOutlet",""]]})}return t})(),K_=(()=>{class t{_differs=u(Ao);_changeDetectorRef=u(Ye);_elementRef=u(L);_dir=u(Xn,{optional:!0});_platform=u(Ue);_viewRepeater;_viewportRuler=u(Ur);_injector=u(le);_virtualScrollViewport=u(_I,{optional:!0,host:!0});_positionListener=u(Sl,{optional:!0})||u(Sl,{optional:!0,skipSelf:!0});_document=u(K);_data;_renderedRange;_onDestroy=new N;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new N;_footerRowStickyUpdates=new N;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new N;_dataStream=new N;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new ee;viewChange=new ut({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){u(new Tn("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((i,r)=>this.trackBy?this.trackBy(r.dataIndex,r.data):r)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(Fe(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new vh:new yh,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),gh(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let i=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,i,(r,o,s)=>this._getEmbeddedViewArgs(r.item,s),r=>r.item.data,r=>{r.operation===Zn.INSERTED&&r.context&&this._renderCellTemplateForItem(r.record.item.rowDef,r.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);o.context.$implicit=r.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let r=SI(this._headerRowOutlet,"thead");r&&(r.style.display=e.length?"":"none")}let i=this._headerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,i,"top"),this._headerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let r=SI(this._footerRowOutlet,"tfoot");r&&(r.style.display=e.length?"":"none")}let i=this._footerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,i,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,i),this._footerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),i=this._getRenderedRows(this._rowOutlet),r=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...i,...r],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,s)=>{this._addStickyColumnStyles([o],this._headerRowDefs[s])}),this._rowDefs.forEach(o=>{let s=[];for(let a=0;a<i.length;a++)this._renderRows[a].rowDef===o&&s.push(i[a]);this._addStickyColumnStyles(s,o)}),r.forEach((o,s)=>{this._addStickyColumnStyles([o],this._footerRowDefs[s])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let i=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||i,this._forceRecalculateCellWidths=i,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],i=Math.min(this._data.length,this._renderedRange.end),r=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<i;o++){let s=this._data[o],a=this._getRenderRowsForData(s,o,r.get(s));this._cachedRenderRowsMap.has(s)||this._cachedRenderRowsMap.set(s,new WeakMap);for(let c=0;c<a.length;c++){let l=a[c],d=this._cachedRenderRowsMap.get(l.data);d.has(l.rowDef)?d.get(l.rowDef).push(l):d.set(l.rowDef,[l]),e.push(l)}}return e}_getRenderRowsForData(e,i,r){return this._getRowDefs(e,i).map(s=>{let a=r&&r.has(s)?r.get(s):[];if(a.length){let c=a.shift();return c.dataIndex=i,c}else return{data:e,rowDef:s,dataIndex:i}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Ph(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(i=>{this._columnDefsByName.has(i.name),this._columnDefsByName.set(i.name,i)})}_cacheRowDefs(){this._headerRowDefs=Ph(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Ph(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Ph(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(i=>!i.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(s,a)=>{let c=!!a.getColumnsDiff();return s||c},i=this._rowDefs.reduce(e,!1);i&&this._forceRenderDataRows();let r=this._headerRowDefs.reduce(e,!1);r&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),i||r||o}_switchDataSource(e){this._data=[],gh(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;gh(this.dataSource)?e=this.dataSource.connect(this):no(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=z(this.dataSource)),this._renderChangeSubscription=lr([e,this.viewChange]).pipe(Fe(this._onDestroy)).subscribe(([i,r])=>{this._data=i||[],this._renderedRange=r,this._dataStream.next(i),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,i)=>this._renderRow(this._headerRowOutlet,e,i)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,i)=>this._renderRow(this._footerRowOutlet,e,i)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,i){let r=Array.from(i?.columns||[]).map(a=>{let c=this._columnDefsByName.get(a);if(!c)throw wI(a);return c}),o=r.map(a=>a.sticky),s=r.map(a=>a.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,s,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let i=[];for(let r=0;r<e.viewContainer.length;r++){let o=e.viewContainer.get(r);i.push(o.rootNodes[0])}return i}_getRowDefs(e,i){if(this._rowDefs.length===1)return[this._rowDefs[0]];let r=[];if(this.multiTemplateDataRows)r=this._rowDefs.filter(o=>!o.when||o.when(i,e));else{let o=this._rowDefs.find(s=>s.when&&s.when(i,e))||this._defaultRowDef;o&&r.push(o)}return r.length,r}_getEmbeddedViewArgs(e,i){let r=e.rowDef,o={$implicit:e.data};return{templateRef:r.template,context:o,index:i}}_renderRow(e,i,r,o={}){let s=e.viewContainer.createEmbeddedView(i.template,o,r);return this._renderCellTemplateForItem(i,o),s}_renderCellTemplateForItem(e,i){for(let r of this._getCellTemplates(e))Xo.mostRecentCellOutlet&&Xo.mostRecentCellOutlet._viewContainer.createEmbeddedView(r,i);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let i=0,r=e.length;i<r;i++){let s=e.get(i).context;s.count=r,s.first=i===0,s.last=i===r-1,s.even=i%2===0,s.odd=!s.even,this.multiTemplateDataRows?(s.dataIndex=this._renderRows[i].dataIndex,s.renderIndex=i):s.index=this._renderRows[i].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,i=>{let r=this._columnDefsByName.get(i);if(!r)throw wI(i);return e.extractCellTemplate(r)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(i,r)=>i||r.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",i=this._injector;this._stickyStyler=new V_(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,i),(this._dir?this._dir.change:z()).pipe(Fe(this._onDestroy)).subscribe(r=>{this._stickyStyler.direction=r,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let i=typeof requestAnimationFrame<"u"?td:Xl;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(gs(0,i),Fe(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(r,o)=>this._measureRangeSize(r,o)}),lr([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(Fe(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let s=0;s<o.elements.length;s++){let a=o.elements[s];if(a){let c=o.offsets[s],l=r!==0?Math.max(r-c,c):-c;for(let d of a)d.style.top=`${-l}px`}}}),lr([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(Fe(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let s=0;s<o.elements.length;s++){let a=o.elements[s];if(a)for(let c of a)c.style.bottom=`${r+o.offsets[s]}px`}})}_getOwnDefs(e){return e.filter(i=>!i._table||i._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let i=this._rowOutlet.viewContainer.length===0;if(i===this._isShowingNoDataRow)return;let r=this._noDataRowOutlet.viewContainer;if(i){let o=r.createEmbeddedView(e.templateRef),s=o.rootNodes[0];if(o.rootNodes.length===1&&s?.nodeType===this._document.ELEMENT_NODE){s.setAttribute("role","row"),s.classList.add(...e._contentClassNames);let a=s.querySelectorAll(e._cellSelector);for(let c=0;c<a.length;c++)a[c].classList.add(...e._cellClassNames)}}else r.clear();this._isShowingNoDataRow=i,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,i){if(e.start>=e.end||i!=="vertical")return 0;let r=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<r.start||e.end>r.end;let s=e.start-r.start,a=e.end-e.start,c,l;for(let h=0;h<a;h++){let m=o.get(h+s);if(m&&m.rootNodes.length){c=l=m.rootNodes[0];break}}for(let h=a-1;h>-1;h--){let m=o.get(h+s);if(m&&m.rootNodes.length){l=m.rootNodes[m.rootNodes.length-1];break}}let d=c?.getBoundingClientRect?.(),f=l?.getBoundingClientRect?.();return d&&f?f.bottom-d.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(i,r,o){if(i&1&&lt(o,EI,5)(o,ba,5)(o,Bh,5)(o,Cl,5)(o,H_,5),i&2){let s;$(s=q())&&(r._noDataRow=s.first),$(s=q())&&(r._contentColumnDefs=s),$(s=q())&&(r._contentRowDefs=s),$(s=q())&&(r._contentHeaderRowDefs=s),$(s=q())&&(r._contentFooterRowDefs=s)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(i,r){i&2&&G("cdk-table-fixed-layout",r.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",P],fixedLayout:[2,"fixedLayout","fixedLayout",P],recycleRows:[2,"recycleRows","recycleRows",P]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[ve([{provide:Jn,useExisting:t},{provide:Sl,useValue:null}])],ngContentSelectors:sB,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(xe(oB),k(0),k(1,1),we(2,aB,1,0),we(3,cB,7,0)(4,lB,4,0)),i&2&&(D(2),Se(r._isServer?2:-1),D(),Se(r._isNativeHtmlTable?3:4))},dependencies:[q_,$_,W_,G_],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return t})();function Ph(t,n){return t.concat(Array.from(n))}function SI(t,n){let e=n.toUpperCase(),i=t.viewContainer.element.nativeElement;for(;i;){let r=i.nodeType===1?i.nodeName:null;if(r===e)return i;if(r==="TABLE")break;i=i.parentNode}return null}var NI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[wl]})}return t})();var uB=[[["caption"]],[["colgroup"],["col"]],"*"],fB=["caption","colgroup, col","*"];function hB(t,n){t&1&&k(0,2)}function mB(t,n){t&1&&(w(0,"thead",0),zt(1,1),C(),w(2,"tbody",2),zt(3,3)(4,4),C(),w(5,"tfoot",0),zt(6,5),C())}function pB(t,n){t&1&&zt(0,1)(1,3)(2,4)(3,5)}var II=(()=>{class t extends K_{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275cmp=R({type:t,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(i,r){i&2&&G("mat-table-fixed-layout",r.fixedLayout)},exportAs:["matTable"],features:[ve([{provide:K_,useExisting:t},{provide:Jn,useExisting:t},{provide:Sl,useValue:null}]),re],ngContentSelectors:fB,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(xe(uB),k(0),k(1,1),we(2,hB,1,0),we(3,mB,7,0)(4,pB,4,0)),i&2&&(D(2),Se(r._isServer?2:-1),D(),Se(r._isNativeHtmlTable?3:4))},dependencies:[q_,$_,W_,G_],styles:[`.mat-mdc-table-sticky {
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
`],encapsulation:2,changeDetection:1})}return t})(),MI=(()=>{class t extends jh{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","matCellDef",""]],features:[ve([{provide:jh,useExisting:t}]),re]})}return t})(),TI=(()=>{class t extends Vh{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","matHeaderCellDef",""]],features:[ve([{provide:Vh,useExisting:t}]),re]})}return t})();var kI=(()=>{class t extends ba{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[ve([{provide:ba,useExisting:t}]),re]})}return t})(),RI=(()=>{class t extends DI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[re]})}return t})();var AI=(()=>{class t extends xI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[re]})}return t})();var OI=(()=>{class t extends Cl{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",P]},features:[ve([{provide:Cl,useExisting:t}]),re]})}return t})();var FI=(()=>{class t extends Bh{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[ve([{provide:Bh,useExisting:t}]),re]})}return t})(),PI=(()=>{class t extends U_{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275cmp=R({type:t,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[ve([{provide:U_,useExisting:t}]),re],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&zt(0,0)},dependencies:[Xo],encapsulation:2,changeDetection:1})}return t})();var LI=(()=>{class t extends z_{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275cmp=R({type:t,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[ve([{provide:z_,useExisting:t}]),re],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&zt(0,0)},dependencies:[Xo],encapsulation:2,changeDetection:1})}return t})();var jI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[NI,Ie]})}return t})();function vB(t,n){if(t&1){let e=Lt();w(0,"mat-card",3)(1,"mat-card-header")(2,"mat-card-title"),X(3,"Add Players"),C()(),w(4,"mat-card-content")(5,"form",15)(6,"mat-form-field")(7,"mat-label"),X(8,"Player Name"),C(),te(9,"input",16,1),xr(),C(),w(11,"button",17),ge("click",function(){mt(e);let r=Mn(10),o=de();return pt(o.addPlayer(r))}),w(12,"mat-icon"),X(13,"add"),C()()()()()}if(t&2){let e=de();D(5),Y("formGroup",e.playerForm),D(4),Er()}}function yB(t,n){t&1&&(w(0,"th",18),X(1," Name "),C())}function _B(t,n){if(t&1&&(w(0,"td",19),X(1),C()),t&2){let e=n.$implicit;D(),Wn(" ",e.name," ")}}function bB(t,n){t&1&&(w(0,"th",18),X(1," Faction "),C())}function wB(t,n){if(t&1&&(w(0,"td",19),te(1,"mat-icon",20),C()),t&2){let e=n.$implicit;D(),Y("svgIcon",Nr(e.race?.name?.toLowerCase()))}}function SB(t,n){t&1&&(w(0,"th",18),X(1," Position "),C())}function CB(t,n){if(t&1&&(w(0,"td",19),X(1),C()),t&2){let e=n.$implicit;D(),Wn(" ",e.position," ")}}function DB(t,n){t&1&&(w(0,"th",18),X(1," Slice "),C())}function xB(t,n){t&1&&(w(0,"mat-icon",22),X(1,"done"),C())}function EB(t,n){if(t&1&&(w(0,"td",19),Le(1,xB,2,0,"mat-icon",21),C()),t&2){let e=n.$implicit;D(),Y("ngIf",e?.slice)}}function NB(t,n){t&1&&te(0,"tr",23)}function IB(t,n){t&1&&te(0,"tr",24)}function MB(t,n){if(t&1&&(w(0,"h2"),X(1),C()),t&2){let e=de();D(),Wn("It\xB4s time for ",e.players()[e.currentPosition()].name," to draft")}}function TB(t,n){if(t&1&&te(0,"span",31),t&2){let e=n.$implicit;G("outline",e)}}function kB(t,n){if(t&1){let e=Lt();w(0,"mat-chip-option",27),ge("click",function(){let r=mt(e).index,o=de(2);return pt(o.draftRace(r))}),w(1,"mat-chip-avatar"),te(2,"mat-icon",28),C(),w(3,"span"),X(4),C(),w(5,"span",29),Le(6,TB,1,2,"span",30),C()()}if(t&2){let e=n.$implicit,i=de(2);D(2),Y("svgIcon",Nr(e.name.toLowerCase())),D(2),Rt(e.name),D(),G("complexity-low",e.difficulty===i.complexity.Low)("complexity-moderate",e.difficulty===i.complexity.Moderate)("complexity-high",e.difficulty===i.complexity.High),Y("title",i.complexityLabel(e.difficulty)),fe("aria-label",i.complexityLabel(e.difficulty)),D(),Y("ngForOf",i.complexityBars(e.difficulty))}}function RB(t,n){if(t&1&&(w(0,"mat-card",3)(1,"mat-card-header")(2,"mat-card-title"),X(3,"Faction to draft"),C()(),w(4,"mat-card-content")(5,"mat-chip-listbox",25),Le(6,kB,7,12,"mat-chip-option",26),C()()()),t&2){let e=de();D(6),Y("ngForOf",e.draftRaces())}}function AB(t,n){if(t&1){let e=Lt();w(0,"mat-chip-option",27),ge("click",function(){let r=mt(e).index,o=de(2);return pt(o.draftPosition(r))}),w(1,"span"),X(2),C()()}if(t&2){let e=n.$implicit;D(2),Rt(e)}}function OB(t,n){if(t&1&&(w(0,"mat-card",3)(1,"mat-card-header")(2,"mat-card-title"),X(3,"Position to draft"),C()(),w(4,"mat-card-content")(5,"mat-chip-listbox",25),Le(6,AB,3,1,"mat-chip-option",26),C()()()),t&2){let e=de();D(6),Y("ngForOf",e.positions())}}function FB(t,n){if(t&1){let e=Lt();w(0,"mat-chip-option",27),ge("click",function(){let r=mt(e).index,o=de(2);return pt(o.draftSlice(r))}),w(1,"span"),X(2,"Slice"),C()()}}function PB(t,n){if(t&1&&(w(0,"mat-card",3)(1,"mat-card-header")(2,"mat-card-title"),X(3,"Slices to draft"),C()(),w(4,"mat-card-content")(5,"mat-chip-listbox",25),Le(6,FB,3,0,"mat-chip-option",26),C()()()),t&2){let e=de();D(6),Y("ngForOf",e.slices())}}var VI=(()=>{class t{constructor(){this.settingsService=u(Br),this.complexity=Ae,this.displayedColumns=["name","faction","position","slice"],this.races=Je(()=>Uo.races.filter(e=>this.settingsService.settings().editions.includes(e.edition))),this.draftRaces=H([]),this.players=H([]),this.positions=H([]),this.slices=H([]),this.currentPosition=H(0),this.incomplete=Je(()=>this.players().some(e=>!e.position||!e.race||!e.slice)),this.increment=1,this.playerForm=new Lr({name:new jr(null,Or.required)})}ngOnDestroy(){this.players.set([]),this.draftRaces.set([]),this.playerForm.reset()}addPlayer(e){if(this.playerForm.valid){let i=this.playerForm.get("name")?.value;this.playerForm.reset(),this.players.update(r=>[...r,{name:i}]),e.focus()}}shuffle(e){this.draftRaces.set(this.shuffleFisherYates([...this.races()]).slice(0,this.players().length+this.settingsService.settings().additionalRaces)),this.players.set(this.shuffleFisherYates([...this.players()])),this.positions.set(this.players().map((i,r)=>this.formatter(r+1))),this.slices.set(this.players().map(()=>!0)),e.disabled=!0}shuffleFisherYates(e){let i=e.length;for(;i--;){let r=Math.floor(Math.random()*(i+1));[e[i],e[r]]=[e[r],e[i]]}return e}formatter(e){switch(e){case 1:return"Speaker";case 2:return e+"nd";case 3:return e+"rd";default:return e+"th"}}complexityLabel(e){return Ae[e]}complexityBars(e){switch(e){case Ae.Low:return[!1,!0,!0];case Ae.Moderate:return[!1,!1,!0];case Ae.High:return[!1,!1,!1]}}draftPosition(e){this.players.update(i=>i.map((r,o)=>o===this.currentPosition()?W(y({},r),{position:this.positions()[e]}):r)),this.positions.update(i=>i.filter((r,o)=>o!==e)),this.progressCounter()}draftSlice(e){this.players.update(i=>i.map((r,o)=>o===this.currentPosition()?W(y({},r),{slice:this.slices()[e]}):r)),this.slices.update(i=>i.filter((r,o)=>o!==e)),this.progressCounter()}draftRace(e){this.players.update(i=>i.map((r,o)=>o===this.currentPosition()?W(y({},r),{race:this.draftRaces()[e]}):r)),this.draftRaces.update(i=>i.filter((r,o)=>o!==e)),this.progressCounter()}progressCounter(){this.currentPosition.update(e=>e+this.increment),this.currentPosition()===-1?(this.currentPosition.set(0),this.increment*=-1):this.currentPosition()===this.players().length&&(this.currentPosition.set(this.players().length-1),this.increment*=-1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=R({type:t,selectors:[["app-draft"]],standalone:!1,decls:32,vars:8,consts:[["shuffleButton",""],["nameInput",""],["appearance","outlined",4,"ngIf"],["appearance","outlined"],["mat-table","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","faction"],["matColumnDef","position"],["matColumnDef","slice"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["type","button","mat-mini-fab","",3,"click"],[4,"ngIf"],[3,"formGroup"],["formControlName","name","matInput",""],["type","submit","mat-mini-fab","",3,"click"],["mat-header-cell",""],["mat-cell",""],["aria-hidden","false",3,"svgIcon"],["aria-hidden","false",4,"ngIf"],["aria-hidden","false"],["mat-header-row",""],["mat-row",""],[1,"mat-mdc-chip-set-stacked"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["inline","true",3,"svgIcon"],[1,"race-complexity",3,"title"],["class","complexity-bar",3,"outline",4,"ngFor","ngForOf"],[1,"complexity-bar"]],template:function(i,r){if(i&1){let o=Lt();Le(0,vB,14,1,"mat-card",2),te(1,"br"),w(2,"mat-card",3)(3,"mat-card-header")(4,"mat-card-title"),X(5,"Players"),C()(),w(6,"mat-card-content")(7,"table",4),_i(8,5),Le(9,yB,2,0,"th",6)(10,_B,2,1,"td",7),bi(),_i(11,8),Le(12,bB,2,0,"th",6)(13,wB,2,2,"td",7),bi(),_i(14,9),Le(15,SB,2,0,"th",6)(16,CB,2,1,"td",7),bi(),_i(17,10),Le(18,DB,2,0,"th",6)(19,EB,2,1,"td",7),bi(),Le(20,NB,1,0,"tr",11)(21,IB,1,0,"tr",12),C(),te(22,"mat-divider"),C(),w(23,"mat-card-actions")(24,"button",13,0),ge("click",function(){mt(o);let a=Mn(25);return pt(r.shuffle(a))}),w(26,"mat-icon"),X(27,"shuffle"),C()()()(),Le(28,MB,2,1,"h2",14)(29,RB,7,1,"mat-card",2)(30,OB,7,1,"mat-card",2)(31,PB,7,1,"mat-card",2)}i&2&&(Y("ngIf",!r.draftRaces().length),D(7),Y("dataSource",r.players()),D(13),Y("matHeaderRowDef",r.displayedColumns),D(),Y("matRowDefColumns",r.displayedColumns),D(7),Y("ngIf",r.incomplete()),D(),Y("ngIf",!r.players()[r.currentPosition()]?.race),D(),Y("ngIf",!r.players()[r.currentPosition()]?.position),D(),Y("ngIf",!r.players()[r.currentPosition()]?.slice))},dependencies:[C_,Ti,ma,jN,ga,va,pa,Ih,bl,_l,ya,Qo,Th,Rh,II,TI,OI,kI,MI,FI,RI,AI,PI,LI,Ir,Oo,ah,la,rh,oh,Vr,hl],styles:["mat-chip-option[_ngcontent-%COMP%]{padding-right:56px;position:relative}.race-complexity[_ngcontent-%COMP%]{align-items:flex-start;display:flex;gap:2px;justify-content:flex-start;position:absolute;right:16px;top:50%;transform:translateY(-50%)}.complexity-bar[_ngcontent-%COMP%]{box-sizing:border-box;display:block;height:8px;width:16px}.complexity-low[_ngcontent-%COMP%]   .complexity-bar[_ngcontent-%COMP%]{background-color:green;color:green}.complexity-moderate[_ngcontent-%COMP%]   .complexity-bar[_ngcontent-%COMP%]{background-color:#ff0;color:#ff0}.complexity-high[_ngcontent-%COMP%]   .complexity-bar[_ngcontent-%COMP%]{background-color:red;color:red}.complexity-low[_ngcontent-%COMP%]   .complexity-bar.outline[_ngcontent-%COMP%]{background-color:transparent!important;border:2px solid green}.complexity-moderate[_ngcontent-%COMP%]   .complexity-bar.outline[_ngcontent-%COMP%]{background-color:transparent!important;border:2px solid yellow}"]})}}return t})();var BI=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=R({type:t,selectors:[["app-home"]],standalone:!1,decls:10,vars:0,consts:[["mat-button","","routerLink","/settings"],["mat-button","","routerLink","/tech"],["mat-button","","routerLink","/draft"]],template:function(i,r){i&1&&(w(0,"mat-list")(1,"mat-list-item")(2,"button",0),X(3,"Settings"),C()(),w(4,"mat-list-item")(5,"button",1),X(6,"Tech"),C()(),w(7,"mat-list-item")(8,"button",2),X(9,"Draft"),C()()())},dependencies:[IN,MN,Mh,oa],encapsulation:2})}}return t})();var LB=["*",[["mat-toolbar-row"]]],jB=["*","mat-toolbar-row"],VB=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),Hh=(()=>{class t{_elementRef=u(L);_platform=u(Ue);_document=u(K);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["mat-toolbar"]],contentQueries:function(i,r,o){if(i&1&&lt(o,VB,5),i&2){let s;$(s=q())&&(r._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,r){i&2&&(vn(r.color?"mat-"+r.color:""),G("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:jB,decls:2,vars:0,template:function(i,r){i&1&&(xe(LB),k(0),k(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2})}return t})();var HI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[Ie]})}return t})();var Y_=new v("CdkAccordion"),zI=(()=>{class t{_stateChanges=new N;_openCloseAllActions=new N;id=u(_t).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",P]},exportAs:["cdkAccordion"],features:[ve([{provide:Y_,useExisting:t}]),We]})}return t})(),$I=(()=>{class t{accordion=u(Y_,{optional:!0,skipSelf:!0});_changeDetectorRef=u(Ye);_expansionDispatcher=u(vl);_openCloseAllSubscription=ue.EMPTY;closed=new ee;opened=new ee;destroyed=new ee;expandedChange=new ee;id=u(_t).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let i=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,i)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=H(!1);_removeUniqueSelectionListener=()=>{};ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,i)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===i&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",P],disabled:[2,"disabled","disabled",P]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[ve([{provide:Y_,useValue:void 0}])]})}return t})(),qI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({})}return t})();var Dl=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Q_=class extends Dl{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,e,i,r,o,s){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null,this.directives=s||null}},zr=class extends Dl{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Z_=class extends Dl{element;constructor(n){super(),this.element=n instanceof L?n.nativeElement:n}},Uh=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Q_)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof zr)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Z_)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},xl=class extends Uh{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(gi,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||le.NULL,o=r.get(Be,i.injector);e=Ku(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var GI=(()=>{class t extends Uh{_moduleRef=u(gi,{optional:!0});_document=u(K);_viewContainerRef=u(et);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new ee;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[re]})}return t})(),zh=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({})}return t})();var BB=["body"],HB=["bodyWrapper"],UB=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],zB=["mat-expansion-panel-header","*","mat-action-row"];function $B(t,n){}var qB=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],GB=["mat-panel-title","mat-panel-description","*"];function WB(t,n){t&1&&(tt(0,"span",1),Bn(),tt(1,"svg",2),rn(2,"path",3),ct()())}var X_=new v("MAT_ACCORDION"),WI=new v("MAT_EXPANSION_PANEL"),KB=(()=>{class t{_template=u(gt);_expansionPanel=u(WI,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["ng-template","matExpansionPanelContent",""]]})}return t})(),KI=new v("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),J_=(()=>{class t extends $I{_viewContainerRef=u(et);_animationsDisabled=xt();_document=u(K);_ngZone=u(O);_elementRef=u(L);_renderer=u(He);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new ee;afterCollapse=new ee;_inputChanges=new N;accordion=u(X_,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=u(_t).getId("mat-expansion-panel-header-");constructor(){super();let e=u(KI,{optional:!0});this._expansionDispatcher=u(vl),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(Mt(null),Ee(()=>this.expanded&&!this._portal),ft(1)).subscribe(()=>{this._portal=new zr(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,i=this._body.nativeElement;return e===i||i.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:i})=>{e===this._bodyWrapper?.nativeElement&&i==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(i,r,o){if(i&1&&lt(o,KB,5),i&2){let s;$(s=q())&&(r._lazyContent=s.first)}},viewQuery:function(i,r){if(i&1&&jt(BB,5)(HB,5),i&2){let o;$(o=q())&&(r._body=o.first),$(o=q())&&(r._bodyWrapper=o.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(i,r){i&2&&G("mat-expanded",r.expanded)("mat-expansion-panel-spacing",r._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",P],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[ve([{provide:X_,useValue:void 0},{provide:WI,useExisting:t}]),re,We],ngContentSelectors:zB,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(i,r){i&1&&(xe(UB),k(0),w(1,"div",2,0)(3,"div",3,1)(5,"div",4),k(6,1),Le(7,$B,0,0,"ng-template",5),C(),k(8,2),C()()),i&2&&(D(),fe("inert",r.expanded?null:""),D(2),Y("id",r.id),fe("aria-labelledby",r._headerId),D(4),Y("cdkPortalOutlet",r._portal))},dependencies:[GI],styles:[`.mat-expansion-panel {
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
`],encapsulation:2})}return t})();var eb=(()=>{class t{panel=u(J_,{host:!0});_element=u(L);_focusMonitor=u(Mi);_changeDetectorRef=u(Ye);_parentChangeSubscription=ue.EMPTY;constructor(){u(yt).load(Sn);let e=this.panel,i=u(KI,{optional:!0}),r=u(new Tn("tabindex"),{optional:!0}),o=e.accordion?e.accordion._stateChanges.pipe(Ee(s=>!!(s.hideToggle||s.togglePosition))):rt;this.tabIndex=parseInt(r||"")||0,this._parentChangeSubscription=Jt(e.opened,e.closed,o,e._inputChanges.pipe(Ee(s=>!!(s.hideToggle||s.disabled||s.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(Ee(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),i&&(this.expandedHeight=i.expandedHeight,this.collapsedHeight=i.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:ha(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,i){e?this._focusMonitor.focusVia(this._element,e,i):this._element.nativeElement.focus(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(i,r){i&1&&ge("click",function(){return r._toggle()})("keydown",function(s){return r._keydown(s)}),i&2&&(fe("id",r.panel._headerId)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r._getPanelId())("aria-expanded",r._isExpanded())("aria-disabled",r.panel.disabled),Ro("height",r._getHeaderHeight()),G("mat-expanded",r._isExpanded())("mat-expansion-toggle-indicator-after",r._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",r._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:wi(e)]},ngContentSelectors:GB,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(i,r){i&1&&(xe(qB),tt(0,"span",0),k(1),k(2,1),k(3,2),ct(),we(4,WB,3,0,"span",1)),i&2&&(G("mat-content-hide-toggle",!r._showToggle()),D(4),Se(r._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
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
`],encapsulation:2})}return t})(),YI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]})}return t})(),QI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return t})(),ZI=(()=>{class t extends zI{_keyManager;_ownHeaders=new pn;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(Mt(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(i=>i.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new Zi(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["mat-accordion"]],contentQueries:function(i,r,o){if(i&1&&lt(o,eb,5),i&2){let s;$(s=q())&&(r._headers=s)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(i,r){i&2&&G("mat-accordion-multi",r.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",P],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[ve([{provide:X_,useExisting:t}]),re]})}return t})(),XI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[qI,zh,Ie]})}return t})();function YB(t,n){t&1&&te(0,"span",1)}function QB(t,n){if(t&1&&To(0,YB,1,0,"span",1,Mo),t&2){let e=de();ko(e.dots(e.deltaTechColor()[e.colorEnum.red]))}}function ZB(t,n){t&1&&te(0,"span",2)}function XB(t,n){if(t&1&&To(0,ZB,1,0,"span",2,Mo),t&2){let e=de();ko(e.dots(e.deltaTechColor()[e.colorEnum.green]))}}function JB(t,n){t&1&&te(0,"span",3)}function eH(t,n){if(t&1&&To(0,JB,1,0,"span",3,Mo),t&2){let e=de();ko(e.dots(e.deltaTechColor()[e.colorEnum.yellow]))}}function tH(t,n){t&1&&te(0,"span",4)}function nH(t,n){if(t&1&&To(0,tH,1,0,"span",4,Mo),t&2){let e=de();ko(e.dots(e.deltaTechColor()[e.colorEnum.blue]))}}function iH(t,n){t&1&&te(0,"span",5)}function rH(t,n){if(t&1&&To(0,iH,1,0,"span",5,Mo),t&2){let e=de();ko(e.dots(e.deltaTechColor()[e.colorEnum.black]))}}var eM=(()=>{class t{dots(e){return Array.from({length:e},(i,r)=>r)}constructor(){this.techColors=$t({}),this.provided=$t({}),this.colorEnum=g,this.deltaTechColor=Je(()=>{let e=this.techColors(),i=this.provided(),r={};for(let o of Object.keys(e)){let s=Number.parseInt(o);r[s]=e[s]-(i[s]??0)}return r})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=R({type:t,selectors:[["app-tech-color"]],inputs:{techColors:[1,"techColors"],provided:[1,"provided"]},standalone:!1,decls:6,vars:5,consts:[[1,"missingTech"],[1,"dot",2,"background-color","red"],[1,"dot",2,"background-color","green"],[1,"dot",2,"background-color","yellow"],[1,"dot",2,"background-color","blue"],[1,"dot",2,"background-color","black"]],template:function(i,r){i&1&&(w(0,"div",0),we(1,QB,2,0),we(2,XB,2,0),we(3,eH,2,0),we(4,nH,2,0),we(5,rH,2,0),C()),i&2&&(D(),Se(r.deltaTechColor()[r.colorEnum.red]!==void 0&&r.deltaTechColor()[r.colorEnum.red]>0?1:-1),D(),Se(r.deltaTechColor()[r.colorEnum.green]!==void 0&&r.deltaTechColor()[r.colorEnum.green]>0?2:-1),D(),Se(r.deltaTechColor()[r.colorEnum.yellow]!==void 0&&r.deltaTechColor()[r.colorEnum.yellow]>0?3:-1),D(),Se(r.deltaTechColor()[r.colorEnum.blue]!==void 0&&r.deltaTechColor()[r.colorEnum.blue]>0?4:-1),D(),Se(r.deltaTechColor()[r.colorEnum.black]!==void 0&&r.deltaTechColor()[r.colorEnum.black]>0?5:-1))},styles:[".missingTech[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:4px;margin-top:8px}.dot[_ngcontent-%COMP%]{border-radius:50%;display:block;height:10px;width:10px}"]})}}return t})();var sH=t=>({color:t});function aH(t,n){if(t&1){let e=Lt();w(0,"button",7),ge("click",function(r){mt(e);let o=de();return pt(o.researchMe(r))}),w(1,"mat-icon"),X(2," highlight_off "),C()()}}function cH(t,n){if(t&1){let e=Lt();w(0,"button",8),ge("click",function(r){mt(e);let o=de();return pt(o.researchMe(r))}),w(1,"mat-icon"),X(2," radio_button_unchecked "),C()()}}function lH(t,n){if(t&1){let e=Lt();w(0,"button",9),ge("click",function(r){mt(e);let o=de();return pt(o.researchMe(r))}),w(1,"mat-icon"),X(2," check_circle "),C()()}}var tM=(()=>{class t{techColor(){switch(this.tech().tech.provides){case g.black:return"white";case g.blue:return"blue";case g.red:return"red";case g.green:return"green";case g.yellow:return"yellow"}}constructor(){this.tech=$t({tech:{id:0,name:"",requirements:[],description:"",provides:0,edition:S.Base},provided:{},researched:!1,researchDistance:0,available:!1}),this.provided=$t({}),this.researched=new ee,this.showDescription=H(!1)}researchMe(e){e.cancelBubble=!0,this.researched.emit(this.tech())}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=R({type:t,selectors:[["app-tech"]],inputs:{tech:[1,"tech"],provided:[1,"provided"]},outputs:{researched:"researched"},standalone:!1,decls:14,vars:10,consts:[["hideToggle","",1,"headers-align"],[3,"ngStyle"],[3,"techColors","provided"],["color","warn","mat-mini-fab","",3,"click",4,"ngIf"],["color","accent","mat-mini-fab","",3,"click",4,"ngIf"],["color","primary","mat-mini-fab","",3,"click",4,"ngIf"],[3,"innerHTML"],["color","warn","mat-mini-fab","",3,"click"],["color","accent","mat-mini-fab","",3,"click"],["color","primary","mat-mini-fab","",3,"click"]],template:function(i,r){i&1&&(w(0,"mat-expansion-panel",0)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon",1),X(4," arrow_circle_up "),C(),w(5,"p"),X(6),C()(),w(7,"mat-panel-description"),te(8,"app-tech-color",2),w(9,"div"),Le(10,aH,3,0,"button",3)(11,cH,3,0,"button",4)(12,lH,3,0,"button",5),C()()(),te(13,"p",6),C()),i&2&&(D(3),Y("ngStyle",Ov(8,sH,r.techColor())),D(3),Rt(r.tech().tech.name),D(2),Y("techColors",r.tech().tech.requirements)("provided",r.provided()),D(2),Y("ngIf",!r.tech().available),D(),Y("ngIf",r.tech().available&&!r.tech().researched),D(),Y("ngIf",r.tech().researched),D(),Y("innerHTML",r.tech().tech.description,Zg))},dependencies:[Ti,J_,eb,QI,YI,Th,Oo,ty,eM],styles:[".headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]{justify-content:right;align-items:center;margin-right:0}.headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]{padding-right:0}.headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-left:5px}.headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{padding-right:5px}.headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%]{margin-right:0;flex-grow:4}"]})}}return t})();function uH(t,n){if(t&1){let e=Lt();w(0,"app-tech",9),ge("researched",function(r){mt(e);let o=de();return pt(o.onResearched(r))}),C()}if(t&2){let e=n.$implicit,i=de();Y("tech",e)("provided",i.provided())}}var nM=(()=>{class t{constructor(){this.state=H(void 0),this.provided=H({[g.blue]:0,[g.red]:0,[g.green]:0,[g.yellow]:0,[g.black]:0}),this.colorEnum=g,this.Arr=Array,this.faction=$t(),this.tech=$t([])}distanceSorter(e,i){return e.researched&&!i.researched?-1:!e.researched&&i.researched?1:e.available&&!i.available?-1:!e.available&&i.available?1:e.tech.name<i.tech.name&&e.researchDistance===i.researchDistance?-1:e.tech.name>i.tech.name&&e.researchDistance===i.researchDistance?1:e.researchDistance-i.researchDistance}ngOnInit(){let e=y({},this.provided()),i=this.tech().map(r=>{let o=this.faction()?.startingtech.indexOf(r.id)!==-1;return o&&e[r.provides]++,{tech:r,researched:o,provided:e,available:!1,researchDistance:0}});this.provided.set(e),this.state.set({race:this.faction(),tech:i}),this.state.update(r=>r&&W(y({},r),{tech:r.tech.map(o=>(this.updateRequirements(o),o)).sort(this.distanceSorter)}))}updateRequirements(e){e.available=this.checkForMatchingRequirements(e,this.provided())}checkForMatchingRequirements(e,i){let r=0;for(let o in e.tech.requirements)e.provided[o]<e.tech.requirements[o]&&(r+=e.tech.requirements[o]-e.provided[o]);return e.researchDistance=r,r===0}onResearched(e){let i=y({},this.provided());e.researched=!e.researched,e.tech.provides!==void 0&&(e.researched?i[e.tech.provides]++:i[e.tech.provides]--),this.provided.set(i),this.state.update(r=>r&&W(y({},r),{tech:r.tech.map(o=>W(y({},o),{provided:i})).map(o=>(this.updateRequirements(o),o)).sort(this.distanceSorter)}))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=R({type:t,selectors:[["app-tech-picker"]],inputs:{faction:[1,"faction"],tech:[1,"tech"]},standalone:!1,decls:17,vars:9,consts:[["color","primary"],["inline","true",1,"raceIcon",3,"svgIcon"],[1,"spacer"],[2,"color","red"],[2,"color","green"],[2,"color","yellow"],[2,"color","blue"],[2,"color","white"],[3,"tech","provided","researched",4,"ngFor","ngForOf"],[3,"researched","tech","provided"]],template:function(i,r){i&1&&(w(0,"mat-toolbar",0)(1,"span"),X(2),C(),te(3,"mat-icon",1)(4,"span",2),w(5,"h3",3),X(6),C(),w(7,"h3",4),X(8),C(),w(9,"h3",5),X(10),C(),w(11,"h3",6),X(12),C(),w(13,"h3",7),X(14),C()(),w(15,"mat-accordion"),Le(16,uH,1,2,"app-tech",8),C()),i&2&&(D(2),Rt(r.state()?.race?.name),D(),Y("svgIcon",Nr(r.state()?.race?.name?.toLowerCase())),D(3),Rt(r.provided()[r.colorEnum.red]),D(2),Rt(r.provided()[r.colorEnum.green]),D(2),Rt(r.provided()[r.colorEnum.yellow]),D(2),Rt(r.provided()[r.colorEnum.blue]),D(2),Rt(r.provided()[r.colorEnum.black]),D(2),Y("ngForOf",r.state()?.tech))},dependencies:[Hh,Ti,ZI,Ir,tM],encapsulation:2})}}return t})();function hH(t,n){if(t&1){let e=Lt();w(0,"mat-chip-option",5),ge("click",function(){let r=mt(e).$implicit,o=de(2);return pt(o.raceClick_hdl(r))}),w(1,"mat-chip-avatar"),te(2,"mat-icon",6),C(),w(3,"span"),X(4),C()()}if(t&2){let e=n.$implicit;D(2),Y("svgIcon",Nr(e.name.toLowerCase())),D(2),Rt(e.name)}}function mH(t,n){if(t&1&&(w(0,"mat-card",2)(1,"mat-card-header")(2,"mat-card-title"),X(3,"Choose faction"),C()(),w(4,"mat-card-content")(5,"mat-chip-listbox",3),Le(6,hH,5,3,"mat-chip-option",4),C()()()),t&2){let e=de();D(6),Y("ngForOf",e.races())}}function pH(t,n){if(t&1&&te(0,"app-tech-picker",7),t&2){let e=de();Y("faction",e.selectedFaction())("tech",e.tech())}}var iM=(()=>{class t{constructor(){this.settingsService=u(Br),this.races=Je(()=>Uo.races.filter(e=>this.settingsService.settings().editions.includes(e.edition))),this.selectedFaction=H(void 0),this.tech=H([])}raceClick_hdl(e){this.selectedFaction.set(e),e.edition===S.PoK?this.tech.set([...Uo.genericTech,...e.tech]):this.selectedFaction()?.id===11?this.tech.set([...Uo.genericTech,...this.races().flatMap(i=>i.tech)].filter(i=>this.settingsService.settings().editions.includes(i.edition))):this.tech.set([...Uo.genericTech,...e.tech].filter(i=>this.settingsService.settings().editions.includes(i.edition)))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=R({type:t,selectors:[["app-race-chooser"]],standalone:!1,decls:2,vars:2,consts:[["appearance","outlined",4,"ngIf"],[3,"faction","tech",4,"ngIf"],["appearance","outlined"],[1,"mat-mdc-chip-set-stacked"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["inline","true",3,"svgIcon"],[3,"faction","tech"]],template:function(i,r){i&1&&Le(0,mH,7,1,"mat-card",0)(1,pH,1,2,"app-tech-picker",1),i&2&&(Y("ngIf",!r.selectedFaction()),D(),Y("ngIf",r.selectedFaction()))},dependencies:[Ti,ma,ga,va,pa,Ih,bl,_l,Ir,Oo,nM],styles:["section[_ngcontent-%COMP%]{width:100%}app-tech-picker[_ngcontent-%COMP%]{display:block;width:100%}button[_ngcontent-%COMP%]{display:flex;width:100%;height:120px;align-items:center;justify-content:space-between}"]})}}return t})();function rM(t){t||(t=u(Ze));let n=new Z(e=>{if(t.destroyed){e.next();return}return t.onDestroy(e.next.bind(e))});return e=>e.pipe(Fe(n))}var gH=["*"],oM=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&G("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:gH,decls:1,vars:0,template:function(i,r){i&1&&(xe(),k(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2})}return t})();var vH=["input"],yH=["*"],tb={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},_H=new v("mat-checkbox-default-options",{providedIn:"root",factory:()=>tb}),Gt=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(Gt||{}),nb=class{source;checked},ib=(()=>{class t{_elementRef=u(L);_changeDetectorRef=u(Ye);_ngZone=u(O);_animationsDisabled=xt();_options=u(_H,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new nb;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new ee;indeterminateChange=new ee;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=Gt.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){u(yt).load(Sn);let e=u(new Tn("tabindex"),{optional:!0});this._options=this._options||tb,this.color=this._options.color||tb.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=u(_t).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(Gt.Indeterminate):this._transitionCheckState(this.checked?Gt.Checked:Gt.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=H(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?Gt.Checked:Gt.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case Gt.Init:if(i===Gt.Checked)return this._animationClasses.uncheckedToChecked;if(i==Gt.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Gt.Unchecked:return i===Gt.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Gt.Checked:return i===Gt.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Gt.Indeterminate:return i===Gt.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["mat-checkbox"]],viewQuery:function(i,r){if(i&1&&jt(vH,5),i&2){let o;$(o=q())&&(r._inputElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,r){i&2&&(on("id",r.id),fe("tabindex",null)("aria-label",null)("aria-labelledby",null),vn(r.color?"mat-"+r.color:"mat-accent"),G("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",P],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",P],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",P],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:wi(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",P],checked:[2,"checked","checked",P],disabled:[2,"disabled","disabled",P],indeterminate:[2,"indeterminate","indeterminate",P]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[ve([{provide:Bo,useExisting:kt(()=>t),multi:!0},{provide:Ho,useExisting:t,multi:!0}]),We],ngContentSelectors:yH,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition","for"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-internal-form-field-label","mdc-label"]],template:function(i,r){if(i&1&&(xe(),w(0,"label",3),ge("click",function(s){return r._preventBubblingFromLabel(s)}),w(1,"span",4,0),te(3,"span",5),w(4,"input",6,1),ge("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(s){return r._onInteractionEvent(s)}),C(),te(6,"span",7),w(7,"span",8),Bn(),w(8,"svg",9),te(9,"path",10),C(),ac(),te(10,"span",11),C(),te(11,"span",12),C(),w(12,"span",13,2),k(14),C()()),i&2){let o=Mn(2);Y("labelPosition",r.labelPosition)("for",r.inputId),D(4),G("mdc-checkbox--selected",r.checked),Y("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),fe("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),D(7),Y("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0)}},dependencies:[ph,oM],styles:[`.mdc-checkbox {
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
`],encapsulation:2})}return t})(),$h=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[ib,Ie]})}return t})();var sM=(()=>{class t{constructor(){this.settingsService=u(Br),this.destroyRef=u(Ze),this.settings=this.settingsService.settings,this.form=new Lr({base:new jr({value:!0,disabled:!0},{nonNullable:!0}),pok:new jr(this.settings().editions.includes(S.PoK),{nonNullable:!0}),te:new jr(this.settings().editions.includes(S.TE),{nonNullable:!0}),additionalRaces:new jr(this.settings().additionalRaces,{nonNullable:!0})}),this.form.valueChanges.pipe(rM(this.destroyRef)).subscribe(()=>this.persistSettings())}persistSettings(){let e=this.form.getRawValue(),i=[S.Base];e.pok&&i.push(S.PoK),e.te&&i.push(S.TE),this.settingsService.settings.set({editions:i,additionalRaces:Math.max(0,e.additionalRaces)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=R({type:t,selectors:[["app-settings",8,"component"]],decls:17,vars:1,consts:[["appearance","outlined"],[3,"formGroup"],["formControlName","base"],["formControlName","pok"],["formControlName","te"],["matInput","","type","number","formControlName","additionalRaces","min","0","step","1"]],template:function(i,r){i&1&&(w(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),X(3,"Settings"),C()(),w(4,"mat-card-content")(5,"form",1)(6,"mat-checkbox",2),X(7,"Base"),C(),xr(),w(8,"mat-checkbox",3),X(9,"Prophecy of Kings"),C(),xr(),w(10,"mat-checkbox",4),X(11,"Thunder Edge"),C(),xr(),te(12,"br"),w(13,"mat-form-field")(14,"mat-label"),X(15,"Additional races for drafting"),C(),te(16,"input",5),xr(),C()()()()),i&2&&(D(5),Y("formGroup",r.form),D(),Er(),D(2),Er(),D(2),Er(),D(6),Er())},dependencies:[wh,ma,ga,va,pa,$h,ib,Zo,ya,Qo,Ah,Rh,ch,ah,la,d_,rh,oh,s_,Vr,hl],encapsulation:2})}}return t})();var wH=[{path:"",component:BI,pathMatch:"full"},{path:"tech",component:iM},{path:"draft",component:VI},{path:"settings",component:sM}],aM=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=F({type:t})}static{this.\u0275inj=A({imports:[Gf.forRoot(wH),Gf]})}}return t})();var cM=iN();function pM(t){return new qh(t.get(Ur),t.get(K))}var qh=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=vt(-this._previousScrollPosition.left),n.style.top=vt(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",s=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),cM&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),cM&&(i.scrollBehavior=o,r.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function gM(t,n){return new Gh(t.get(Fh),t.get(O),t.get(Ur),n)}var Gh=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Ee(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var El=class{enable(){}disable(){}attach(){}};function rb(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,s=t.left>e.right;return i||r||o||s})}function lM(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,s=t.right>e.right;return i||r||o||s})}function Xh(t,n){return new Wh(t.get(Fh),t.get(Ur),t.get(O),n)}var Wh=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();rb(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},vM=(()=>{class t{_injector=u(le);noop=()=>new El;close=e=>gM(this._injector,e);block=()=>pM(this._injector);reposition=e=>Xh(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),wa=class{positionStrategy;scrollStrategy=new El;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var Kh=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var yM=(()=>{class t{_attachedOverlays=[];_document=u(K);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),_M=(()=>{class t extends yM{_ngZone=u(O);_renderer=u(at).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),bM=(()=>{class t extends yM{_platform=u(Ue);_ngZone=u(O);_renderer=u(at).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=sn(e)};_clickListener=e=>{let i=sn(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],c=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,c))){if(dM(a.overlayElement,i)||dM(a.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();function dM(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var wM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return t})(),SM=(()=>{class t{_platform=u(Ue);_containerElement;_document=u(K);_styleLoader=u(yt);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||p_()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),p_()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(wM)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),ob=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function sb(t){return t&&t.nodeType===1}var Yh=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new N;_attachments=new N;_detachments=new N;_positionStrategy;_scrollStrategy;_locationChanges=ue.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new N;_outsidePointerEvents=new N;_afterNextRenderRef;constructor(n,e,i,r,o,s,a,c,l,d=!1,f,h){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=c,this._outsideClickDispatcher=l,this._animationsDisabled=d,this._injector=f,this._renderer=h,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Pt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=y(y({},this._config),n),this._updateElementSize()}setDirection(n){this._config=W(y({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=vt(this._config.width),n.height=vt(this._config.height),n.minWidth=vt(this._config.minWidth),n.minHeight=vt(this._config.minHeight),n.maxWidth=vt(this._config.maxWidth),n.maxHeight=vt(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;sb(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(n){}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new ob(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=u_(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Pt(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},uM="cdk-overlay-connected-position-bounding-box",SH=/([A-Za-z%]+)$/;function Jh(t,n){return new Qh(n,t.get(Ur),t.get(K),t.get(Ue),t.get(SM))}var Qh=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new N;_resizeSubscription=ue.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(uM),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],s;for(let a of this._preferredPositions){let c=this._getOriginPoint(n,r,a),l=this._getOverlayPoint(c,e,a),d=this._getOverlayFit(l,e,i,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,c);return}if(this._canFitWithFlexibleDimensions(d,l,i)){o.push({position:a,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:l,originPoint:c,position:a,overlayRect:e})}if(o.length){let a=null,c=-1;for(let l of o){let d=l.boundingBoxRect.width*l.boundingBoxRect.height*(l.position.weight||1);d>c&&(c=d,a=l)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Jo(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(uM),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof L?this._origin.nativeElement:sb(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,a=this._isRtl()?n.left:n.right;r=i.originX=="start"?s:a}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=hM(e),{x:s,y:a}=n,c=this._getOffset(r,"x"),l=this._getOffset(r,"y");c&&(s+=c),l&&(a+=l);let d=0-s,f=s+o.width-i.width,h=0-a,m=a+o.height-i.height,p=this._subtractOverflows(o.width,d,f),_=this._subtractOverflows(o.height,h,m),x=p*_;return{visibleArea:x,isCompletelyWithinViewport:o.width*o.height===x,fitsInViewportVertically:_===o.height,fitsInViewportHorizontally:p==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,s=fM(this._overlayRef.getConfig().minHeight),a=fM(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||s!=null&&s<=r,l=n.fitsInViewportHorizontally||a!=null&&a<=o;return c&&l}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=hM(e),o=this._viewportRect,s=Math.max(n.x+r.width-o.width,0),a=Math.max(n.y+r.height-o.height,0),c=Math.max(o.top-i.top-n.y,0),l=Math.max(o.left-i.left-n.x,0),d=0,f=0;return r.width<=o.width?d=l||-s:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?f=c||-a:f=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:f},{x:n.x+d,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!CH(this._lastScrollVisibility,i)){let r=new Kh(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,s,a;if(e.overlayY==="top")s=n.y,o=i.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")a=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-a+this._getViewportMarginTop();else{let m=Math.min(i.bottom-n.y+i.top,n.y),p=this._lastBoundingBoxSize.height;o=m*2,s=n.y-m,o>p&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-p/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,l=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,f,h;if(l)h=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(c)f=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let m=Math.min(i.right-n.x+i.left,n.x),p=this._lastBoundingBoxSize.width;d=m*2,f=n.x-m,d>p&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-p/2)}return{top:s,left:f,bottom:a,right:h,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;r.width=vt(i.width),r.height=vt(i.height),r.top=vt(i.top)||"auto",r.bottom=vt(i.bottom)||"auto",r.left=vt(i.left)||"auto",r.right=vt(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=vt(o)),s&&(r.maxWidth=vt(s))}this._lastBoundingBoxSize=i,Jo(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Jo(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Jo(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();Jo(i,this._getExactOverlayY(e,n,d)),Jo(i,this._getExactOverlayX(e,n,d))}else i.position="static";let a="",c=this._getOffset(e,"x"),l=this._getOffset(e,"y");c&&(a+=`translateX(${c}px) `),l&&(a+=`translateY(${l}px)`),i.transform=a.trim(),s.maxHeight&&(r?i.maxHeight=vt(s.maxHeight):o&&(i.maxHeight="")),s.maxWidth&&(r?i.maxWidth=vt(s.maxWidth):o&&(i.maxWidth="")),Jo(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;r.bottom=`${s-(o.y+this._overlayRect.height)}px`}else r.top=vt(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let s;if(this._isRtl()?s=n.overlayX==="end"?"left":"right":s=n.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;r.right=`${a-(o.x+this._overlayRect.width)}px`}else r.left=vt(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:lM(n,i),isOriginOutsideView:rb(n,i),isOverlayClipped:lM(e,i),isOverlayOutsideView:rb(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&u_(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof L)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function Jo(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function fM(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(SH);return!e||e==="px"?parseFloat(n):null}return t||null}function hM(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function CH(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var mM="cdk-global-overlay-wrapper";function CM(t){return new Zh}var Zh=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(mM),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:s,maxHeight:a}=i,c=(r==="100%"||r==="100vw")&&(!s||s==="100%"||s==="100vw"),l=(o==="100%"||o==="100vh")&&(!a||a==="100%"||a==="100vh"),d=this._xPosition,f=this._xOffset,h=this._overlayRef.getConfig().direction==="rtl",m="",p="",_="";c?_="flex-start":d==="center"?(_="center",h?p=f:m=f):h?d==="left"||d==="end"?(_="flex-end",m=f):(d==="right"||d==="start")&&(_="flex-start",p=f):d==="left"||d==="start"?(_="flex-start",m=f):(d==="right"||d==="end")&&(_="flex-end",p=f),n.position=this._cssPosition,n.marginLeft=c?"0":m,n.marginTop=l?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?"0":p,e.justifyContent=_,e.alignItems=l?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(mM),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},DM=(()=>{class t{_injector=u(le);global(){return CM()}flexibleConnectedTo(e){return Jh(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),xM=new v("OVERLAY_DEFAULT_CONFIG");function em(t,n){t.get(yt).load(wM);let e=t.get(SM),i=t.get(K),r=t.get(_t),o=t.get(St),s=t.get(Xn),a=t.get(He,null,{optional:!0})||t.get(at).createRenderer(null,null),c=new wa(n),l=t.get(xM,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||s.value,!i.body||!("showPopover"in i.body)?c.usePopover=!1:c.usePopover=n?.usePopover??l;let d=i.createElement("div"),f=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),f.appendChild(d),c.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let h=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return sb(h)?h.after(f):h?.type==="parent"?h.element.appendChild(f):e.getContainerElement().appendChild(f),new Yh(new xl(d,o,t),f,d,c,t.get(O),t.get(_M),i,t.get(Si),t.get(bM),n?.disableAnimations??t.get(br,null,{optional:!0})==="NoopAnimations",t.get(Be),a)}var EM=(()=>{class t{scrollStrategies=u(vM);_positionBuilder=u(DM);_injector=u(le);create(e){return em(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var ab=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({providers:[EM],imports:[Ie,zh,wl,wl]})}return t})();var xH=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],EH=["mat-icon, [matMenuItemIcon]","*"];function NH(t,n){t&1&&(Bn(),w(0,"svg",2),te(1,"polygon",3),C())}var IH=["*"];function MH(t,n){if(t&1){let e=Lt();tt(0,"div",0),Vu("click",function(){mt(e);let r=de();return pt(r.closed.emit("click"))})("animationstart",function(r){mt(e);let o=de();return pt(o._onAnimationStart(r.animationName))})("animationend",function(r){mt(e);let o=de();return pt(o._onAnimationDone(r.animationName))})("animationcancel",function(r){mt(e);let o=de();return pt(o._onAnimationDone(r.animationName))}),tt(1,"div",1),k(2),ct()()}if(t&2){let e=de();vn(e._classList),G("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),on("id",e.panelId),fe("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var lb=new v("MAT_MENU_PANEL"),Nl=(()=>{class t{_elementRef=u(L);_document=u(K);_focusMonitor=u(Mi);_parentMenu=u(lb,{optional:!0});_changeDetectorRef=u(Ye);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new N;_focused=new N;_highlighted=!1;_triggersSubmenu=!1;constructor(){u(yt).load(Sn),this._parentMenu?.addItem?.(this)}focus(e,i){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,i):this._getHostElement().focus(i),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),i=e.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<i.length;r++)i[r].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(i,r){i&1&&ge("click",function(s){return r._checkDisabled(s)})("mouseenter",function(){return r._handleMouseEnter()}),i&2&&(fe("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),G("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",P],disableRipple:[2,"disableRipple","disableRipple",P]},exportAs:["matMenuItem"],ngContentSelectors:EH,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(i,r){i&1&&(xe(xH),k(0),w(1,"span",0),k(2,1),C(),te(3,"div",1),we(4,NH,2,0,":svg:svg",2)),i&2&&(D(3),Y("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),D(),Se(r._triggersSubmenu?4:-1))},dependencies:[ph],encapsulation:2})}return t})();var TH=new v("MatMenuContent");var kH=new v("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),cb="_mat-menu-enter",tm="_mat-menu-exit",Ca=(()=>{class t{_elementRef=u(L);_changeDetectorRef=u(Ye);_injector=u(le);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=xt();_allItems;_directDescendantItems=new pn;_classList={};_panelAnimationState="void";_animationDone=new N;_isAnimating=H(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let i=this._previousPanelClass,r=y({},this._classList);i&&i.length&&i.split(" ").forEach(o=>{r[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{r[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=r}_previousPanelClass="";get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new ee;close=this.closed;panelId=u(_t).getId("mat-menu-panel-");constructor(){let e=u(kH);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Zi(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Mt(this._directDescendantItems),Ke(e=>Jt(...e.map(i=>i._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let i=this._keyManager;if(this._panelAnimationState==="enter"&&i.activeItem?._hasFocus()){let r=e.toArray(),o=Math.max(0,Math.min(r.length-1,i.activeItemIndex||0));r[o]&&!r[o].disabled?i.setActiveItem(o):i.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Mt(this._directDescendantItems),Ke(i=>Jt(...i.map(r=>r._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let i=e.keyCode,r=this._keyManager;switch(i){case 27:ha(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(i===38||i===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Pt(()=>{let i=this._resolvePanel();if(!i||!i.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(e).setFirstItemActive(),!r.activeItem&&i&&i.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,i=this.yPosition){this._classList=W(y({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":i==="above","mat-menu-below":i==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let i=e===tm;(i||e===cb)&&(i&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(i?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===cb||e===tm)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let i=this._resolvePanel();i&&(i.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(tm),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?cb:tm)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Mt(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(i=>i._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=R({type:t,selectors:[["mat-menu"]],contentQueries:function(i,r,o){if(i&1&&lt(o,TH,5)(o,Nl,5)(o,Nl,4),i&2){let s;$(s=q())&&(r.lazyContent=s.first),$(s=q())&&(r._allItems=s),$(s=q())&&(r.items=s)}},viewQuery:function(i,r){if(i&1&&jt(gt,5),i&2){let o;$(o=q())&&(r.templateRef=o.first)}},hostVars:3,hostBindings:function(i,r){i&2&&fe("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",P],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:P(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[ve([{provide:lb,useExisting:t}])],ngContentSelectors:IH,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(i,r){i&1&&(xe(),Pu(0,MH,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2})}return t})(),RH=new v("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(le);return()=>Xh(t)}});var Sa=new WeakMap,AH=(()=>{class t{_canHaveBackdrop;_element=u(L);_viewContainerRef=u(et);_menuItemInstance=u(Nl,{optional:!0,self:!0});_dir=u(Xn,{optional:!0});_focusMonitor=u(Mi);_ngZone=u(O);_injector=u(le);_scrollStrategy=u(RH);_changeDetectorRef=u(Ye);_animationsDisabled=xt();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=ue.EMPTY;_menuCloseSubscription=ue.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(i=>{this._destroyMenu(i),(i==="click"||i==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(i)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let i=u(lb,{optional:!0});this._parentMaterialMenu=i instanceof Ca?i:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Sa.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let i=this._menu;if(this._menuOpen||!i)return;this._pendingRemoval?.unsubscribe();let r=Sa.get(i);Sa.set(i,this),r&&r!==this&&r._closeMenu();let o=this._createOverlay(i),s=o.getConfig(),a=s.positionStrategy;this._setPosition(i,a),this._canHaveBackdrop?s.hasBackdrop=i.hasBackdrop==null?!this._triggersSubmenu():i.hasBackdrop:s.hasBackdrop=i.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(i)),i.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),i.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,i.direction=this.dir,e&&i.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),i instanceof Ca&&(i._setIsOpen(!0),i._directDescendantItems.changes.pipe(Fe(i.close)).subscribe(()=>{a.withLockedPosition(!1).reapplyLastPosition(),a.withLockedPosition(!0)}))}focus(e,i){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,i):this._element.nativeElement.focus(i)}_destroyMenu(e){let i=this._overlayRef,r=this._menu;!i||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof Ca&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(ft(1)).subscribe(()=>{i.detach(),Sa.has(r)||r.lazyContent?.detach()}),r._setIsOpen(!1)):(i.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&Sa.delete(r),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let i=this._getOverlayConfig(e);this._subscribeToPositions(e,i.positionStrategy),this._overlayRef=em(this._injector,i),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof Ca&&this._menu._handleKeydown(r)})}return this._overlayRef}_getOverlayConfig(e){return new wa({positionStrategy:Jh(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,i){e.setPositionClasses&&i.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let o=r.connectionPair.overlayX==="start"?"after":"before",s=r.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,s)})})}_setPosition(e,i){let[r,o]=e.xPosition==="before"?["end","start"]:["start","end"],[s,a]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[c,l]=[s,a],[d,f]=[r,o],h=0;if(this._triggersSubmenu()){if(f=r=e.xPosition==="before"?"start":"end",o=d=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let m=this._parentMaterialMenu.items.first;this._parentInnerPadding=m?m._getHostElement().offsetTop:0}h=s==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(c=s==="top"?"bottom":"top",l=a==="top"?"bottom":"top");i.withPositions([{originX:r,originY:c,overlayX:d,overlayY:s,offsetY:h},{originX:o,originY:c,overlayX:f,overlayY:s,offsetY:h},{originX:r,originY:l,overlayX:d,overlayY:a,offsetY:-h},{originX:o,originY:l,overlayX:f,overlayY:a,offsetY:-h}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),i=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:z(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Ee(s=>this._menuOpen&&s!==this._menuItemInstance)):z();return Jt(e,r,o,i)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new zr(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return Sa.get(e)===this}_triggerIsAriaDisabled(){return P(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(i){Io()};static \u0275dir=E({type:t})}return t})(),NM=(()=>{class t extends AH{_cleanupTouchstart;_hoverSubscription=ue.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new ee;onMenuOpen=this.menuOpened;menuClosed=new ee;onMenuClose=this.menuClosed;constructor(){super(!0);let e=u(He);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",i=>{Go(i)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){qo(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let i=e.keyCode;(i===13||i===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(i===39&&this.dir==="ltr"||i===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(i,r){i&1&&ge("click",function(s){return r._handleClick(s)})("mousedown",function(s){return r._handleMousedown(s)})("keydown",function(s){return r._handleKeydown(s)}),i&2&&fe("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[re]})}return t})();var IM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({imports:[Hr,ab,Ie,Oh]})}return t})();var MM=(()=>{class t{editionLabel(e){switch(e){case S.Base:return" ";case S.PoK:return"PoK";case S.TE:return"TE"}}constructor(){this.matIconRegistry=u(bh),this.domSanitizer=u($c),this.settingsService=u(Br),this.settingsLabel=Je(()=>this.settingsService.settings().editions.map(e=>this.editionLabel(e)).join(" + ")||"No edition"),this.matIconRegistry.addSvgIcon("arborec",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/arborec.svg")).addSvgIcon("barony of letnev",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/barony of letnev.svg")).addSvgIcon("clan of saar",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/clan of saar.svg")).addSvgIcon("embers of muat",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/embers of muat.svg")).addSvgIcon("emirates of hacan",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/emirates of hacan.svg")).addSvgIcon("federation of sol",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/federation of sol.svg")).addSvgIcon("ghosts of creuss",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/ghosts of creuss.svg")).addSvgIcon("l1z1x mindnet",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/l1z1x mindnet.svg")).addSvgIcon("mentak coalition",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/mentak coalition.svg")).addSvgIcon("naalu collective",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/naalu collective.svg")).addSvgIcon("nekro virus",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/nekro virus.svg")).addSvgIcon("sardakk n'orr",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/sardakk n'orr.svg")).addSvgIcon("universities of jol-nar",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/universities of jol-nar.svg")).addSvgIcon("winnu",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/winnu.svg")).addSvgIcon("xxcha kingdom",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/xxcha kingdom.svg")).addSvgIcon("argent flight",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/argent flight.svg")).addSvgIcon("empyrean",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/empyrean.svg")).addSvgIcon("mahact gene-sorcerers",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/mahact gene-sorcerers.svg")).addSvgIcon("naaz-rokha alliance",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/naaz-rokha alliance.svg")).addSvgIcon("nomad",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/nomad.svg")).addSvgIcon("titans of ul",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/titans of ul.svg")).addSvgIcon("vuil'raith cabal",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/vuil'raith cabal.svg")).addSvgIcon("yin brotherhood",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/yin brotherhood.svg")).addSvgIcon("yssaril tribes",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/yssaril tribes.svg"))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=R({type:t,selectors:[["app-root"]],standalone:!1,decls:15,vars:2,consts:[["menu","matMenu"],["mat-button","",3,"matMenuTriggerFor"],["mat-menu-item","","routerLink","/settings"],["mat-menu-item","","routerLink","/tech"],["mat-menu-item","","routerLink","/draft"]],template:function(i,r){if(i&1&&(w(0,"mat-toolbar")(1,"button",1)(2,"mat-icon"),X(3,"menu"),C()(),w(4,"mat-menu",null,0)(6,"button",2),X(7,"Settings"),C(),w(8,"button",3),X(9,"Tech"),C(),w(10,"button",4),X(11,"Draft"),C()(),w(12,"span"),X(13),C()(),te(14,"router-outlet")),i&2){let o=Mn(5);D(),Y("matMenuTriggerFor",o),D(12),Wn("Siggis TI4 Buddy ",r.settingsLabel())}},dependencies:[Hh,Ca,Nl,NM,Ti,Mh,il,oa],encapsulation:2})}}return t})();var De=(function(t){return t[t.State=0]="State",t[t.Transition=1]="Transition",t[t.Sequence=2]="Sequence",t[t.Group=3]="Group",t[t.Animate=4]="Animate",t[t.Keyframes=5]="Keyframes",t[t.Style=6]="Style",t[t.Trigger=7]="Trigger",t[t.Reference=8]="Reference",t[t.AnimateChild=9]="AnimateChild",t[t.AnimateRef=10]="AnimateRef",t[t.Query=11]="Query",t[t.Stagger=12]="Stagger",t})(De||{}),ei="*";function TM(t,n=null){return{type:De.Sequence,steps:t,options:n}}function db(t){return{type:De.Style,styles:t,offset:null}}var Ji=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(n=0,e=0){this.totalTime=n+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(n=>n()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(n){this._position=this.totalTime?n*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},Da=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(n){this.players=n;let e=0,i=0,r=0,o=this.players.length;o==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(s=>{s.onDone(()=>{++e==o&&this._onFinish()}),s.onDestroy(()=>{++i==o&&this._onDestroy()}),s.onStart(()=>{++r==o&&this._onStart()})}),this.totalTime=this.players.reduce((s,a)=>Math.max(s,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this.players.forEach(n=>n.init())}onStart(n){this._onStartFns.push(n)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(n=>n()),this._onStartFns=[])}onDone(n){this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(n=>n.play())}pause(){this.players.forEach(n=>n.pause())}restart(){this.players.forEach(n=>n.restart())}finish(){this._onFinish(),this.players.forEach(n=>n.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(n=>n.destroy()),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this.players.forEach(n=>n.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(n){let e=n*this.totalTime;this.players.forEach(i=>{let r=i.totalTime?Math.min(1,e/i.totalTime):1;i.setPosition(r)})}getPosition(){let n=this.players.reduce((e,i)=>e===null||i.totalTime>e.totalTime?i:e,null);return n!=null?n.getPosition():0}beforeDestroy(){this.players.forEach(n=>{n.beforeDestroy&&n.beforeDestroy()})}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},Il="!";function kM(t){return new b(3e3,!1)}function FH(){return new b(3100,!1)}function PH(){return new b(3101,!1)}function LH(t){return new b(3001,!1)}function jH(t){return new b(3003,!1)}function VH(t){return new b(3004,!1)}function AM(t,n){return new b(3005,!1)}function OM(){return new b(3006,!1)}function FM(){return new b(3007,!1)}function PM(t,n){return new b(3008,!1)}function LM(t){return new b(3002,!1)}function jM(t,n,e,i,r){return new b(3010,!1)}function VM(){return new b(3011,!1)}function BM(){return new b(3012,!1)}function HM(){return new b(3200,!1)}function UM(){return new b(3202,!1)}function zM(){return new b(3013,!1)}function $M(t){return new b(3014,!1)}function qM(t){return new b(3015,!1)}function GM(t){return new b(3016,!1)}function WM(t,n){return new b(3404,!1)}function BH(t){return new b(3502,!1)}function KM(t){return new b(3503,!1)}function YM(){return new b(3300,!1)}function QM(t){return new b(3504,!1)}function ZM(t){return new b(3301,!1)}function XM(t,n){return new b(3302,!1)}function JM(t){return new b(3303,!1)}function eT(t,n){return new b(3400,!1)}function tT(t){return new b(3401,!1)}function nT(t){return new b(3402,!1)}function iT(t,n){return new b(3505,!1)}function er(t){switch(t.length){case 0:return new Ji;case 1:return t[0];default:return new Da(t)}}function mb(t,n,e=new Map,i=new Map){let r=[],o=[],s=-1,a=null;if(n.forEach(c=>{let l=c.get("offset"),d=l==s,f=d&&a||new Map;c.forEach((h,m)=>{let p=m,_=h;if(m!=="offset")switch(p=t.normalizePropertyName(p,r),_){case Il:_=e.get(m);break;case ei:_=i.get(m);break;default:_=t.normalizeStyleValue(m,p,_,r);break}f.set(p,_)}),d||o.push(f),a=f,s=l}),r.length)throw BH(r);return o}function nm(t,n,e,i){switch(n){case"start":t.onStart(()=>i(e&&ub(e,"start",t)));break;case"done":t.onDone(()=>i(e&&ub(e,"done",t)));break;case"destroy":t.onDestroy(()=>i(e&&ub(e,"destroy",t)));break}}function ub(t,n,e){let i=e.totalTime,r=!!e.disabled,o=im(t.element,t.triggerName,t.fromState,t.toState,n||t.phaseName,i??t.totalTime,r),s=t._data;return s!=null&&(o._data=s),o}function im(t,n,e,i,r="",o=0,s){return{element:t,triggerName:n,fromState:e,toState:i,phaseName:r,totalTime:o,disabled:!!s}}function an(t,n,e){let i=t.get(n);return i||t.set(n,i=e),i}function pb(t){let n=t.indexOf(":"),e=t.substring(1,n),i=t.slice(n+1);return[e,i]}var HH=typeof document>"u"?null:document.documentElement;function rm(t){let n=t.parentNode||t.host||null;return n===HH?null:n}function UH(t){return t.substring(1,6)=="ebkit"}var es=null,RM=!1;function rT(t){es||(es=zH()||{},RM=es.style?"WebkitAppearance"in es.style:!1);let n=!0;return es.style&&!UH(t)&&(n=t in es.style,!n&&RM&&(n="Webkit"+t.charAt(0).toUpperCase()+t.slice(1)in es.style)),n}function zH(){return typeof document<"u"?document.body:null}function gb(t,n){for(;n;){if(n===t)return!0;n=rm(n)}return!1}function vb(t,n,e){if(e)return Array.from(t.querySelectorAll(n));let i=t.querySelector(n);return i?[i]:[]}var $H=1e3,yb="{{",qH="}}",_b="ng-enter",om="ng-leave",Ml="ng-trigger",Tl=".ng-trigger",bb="ng-animating",sm=".ng-animating";function ki(t){if(typeof t=="number")return t;let n=t.match(/^(-?[\.\d]+)(m?s)/);return!n||n.length<2?0:fb(parseFloat(n[1]),n[2])}function fb(t,n){return n==="s"?t*$H:t}function kl(t,n,e){return typeof t=="object"&&t!==null&&Object.hasOwn(t,"duration")?t:WH(t,n,e)}var GH=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function WH(t,n,e){let i,r=0,o="";if(typeof t=="string"){let s=t.match(GH);if(s===null)return n.push(kM(t)),{duration:0,delay:0,easing:""};i=fb(parseFloat(s[1]),s[2]);let a=s[3];a!=null&&(r=fb(parseFloat(a),s[4]));let c=s[5];c&&(o=c)}else i=t;if(!e){let s=!1,a=n.length;i<0&&(n.push(FH()),s=!0),r<0&&(n.push(PH()),s=!0),s&&n.splice(a,0,kM(t))}return{duration:i,delay:r,easing:o}}function oT(t){return t.length?t[0]instanceof Map?t:t.map(n=>new Map(Object.entries(n))):[]}function ti(t,n,e){n.forEach((i,r)=>{let o=am(r);e&&!e.has(r)&&e.set(r,t.style[o]),t.style[o]=i})}function $r(t,n){n.forEach((e,i)=>{let r=am(i);t.style[r]=""})}function xa(t){return Array.isArray(t)?t.length==1?t[0]:TM(t):t}function sT(t,n,e){let i=n.params||{},r=wb(t);r.length&&r.forEach(o=>{Object.hasOwn(i,o)||e.push(LH(o))})}var hb=new RegExp(`${yb}\\s*(.+?)\\s*${qH}`,"g");function wb(t){let n=[];if(typeof t=="string"){let e;for(;e=hb.exec(t);)n.push(e[1]);hb.lastIndex=0}return n}function Ea(t,n,e){let i=`${t}`,r=i.replace(hb,(o,s)=>{let a=n[s];return a==null&&(e.push(jH(s)),a=""),a.toString()});return r==i?t:r}var KH=/-+([a-z0-9])/g;function am(t){return t.replace(KH,(...n)=>n[1].toUpperCase())}function aT(t,n){return t===0||n===0}function cT(t,n,e){if(e.size&&n.length){let i=n[0],r=[];if(e.forEach((o,s)=>{i.has(s)||r.push(s),i.set(s,o)}),r.length)for(let o=1;o<n.length;o++){let s=n[o];r.forEach(a=>s.set(a,cm(t,a)))}}return n}function cn(t,n,e){switch(n.type){case De.Trigger:return t.visitTrigger(n,e);case De.State:return t.visitState(n,e);case De.Transition:return t.visitTransition(n,e);case De.Sequence:return t.visitSequence(n,e);case De.Group:return t.visitGroup(n,e);case De.Animate:return t.visitAnimate(n,e);case De.Keyframes:return t.visitKeyframes(n,e);case De.Style:return t.visitStyle(n,e);case De.Reference:return t.visitReference(n,e);case De.AnimateChild:return t.visitAnimateChild(n,e);case De.AnimateRef:return t.visitAnimateRef(n,e);case De.Query:return t.visitQuery(n,e);case De.Stagger:return t.visitStagger(n,e);default:throw VH(n.type)}}function cm(t,n){return window.getComputedStyle(t)[n]}var jb=(()=>{class t{validateStyleProperty(e){return rT(e)}containsElement(e,i){return gb(e,i)}getParentElement(e){return rm(e)}query(e,i,r){return vb(e,i,r)}computeStyle(e,i,r){return r||""}animate(e,i,r,o,s,a=[],c){return new Ji(r,o)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})(),ns=class{static NOOP=new jb},is=class{};var YH=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),hm=class extends is{normalizePropertyName(n,e){return am(n)}normalizeStyleValue(n,e,i,r){let o="",s=i.toString().trim();if(YH.has(e)&&i!==0&&i!=="0")if(typeof i=="number")o="px";else{let a=i.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&a[1].length==0&&r.push(AM(n,i))}return s+o}};var mm="*";function QH(t,n){let e=[];return typeof t=="string"?t.split(/\s*,\s*/).forEach(i=>ZH(i,e,n)):e.push(t),e}function ZH(t,n,e){if(t[0]==":"){let c=XH(t,e);if(typeof c=="function"){n.push(c);return}t=c}let i=t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(i==null||i.length<4)return e.push(qM(t)),n;let r=i[1],o=i[2],s=i[3];n.push(lT(r,s));let a=r==mm&&s==mm;o[0]=="<"&&!a&&n.push(lT(s,r))}function XH(t,n){switch(t){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,i)=>parseFloat(i)>parseFloat(e);case":decrement":return(e,i)=>parseFloat(i)<parseFloat(e);default:return n.push(GM(t)),"* => *"}}var lm=new Set(["true","1"]),dm=new Set(["false","0"]);function lT(t,n){let e=lm.has(t)||dm.has(t),i=lm.has(n)||dm.has(n);return(r,o)=>{let s=t==mm||t==r,a=n==mm||n==o;return!s&&e&&typeof r=="boolean"&&(s=r?lm.has(t):dm.has(t)),!a&&i&&typeof o=="boolean"&&(a=o?lm.has(n):dm.has(n)),s&&a}}var _T=":self",JH=new RegExp(`s*${_T}s*,?`,"g");function bT(t,n,e,i){return new Nb(t).build(n,e,i)}var dT="",Nb=class{_driver;constructor(n){this._driver=n}build(n,e,i){let r=new Ib(e);return this._resetContextStyleTimingState(r),cn(this,xa(n),r)}_resetContextStyleTimingState(n){n.currentQuerySelector=dT,n.collectedStyles=new Map,n.collectedStyles.set(dT,new Map),n.currentTime=0}visitTrigger(n,e){let i=e.queryCount=0,r=e.depCount=0,o=[],s=[];return n.name.charAt(0)=="@"&&e.errors.push(OM()),n.definitions.forEach(a=>{if(this._resetContextStyleTimingState(e),a.type==De.State){let c=a,l=c.name;l.toString().split(/\s*,\s*/).forEach(d=>{c.name=d,o.push(this.visitState(c,e))}),c.name=l}else if(a.type==De.Transition){let c=this.visitTransition(a,e);i+=c.queryCount,r+=c.depCount,s.push(c)}else e.errors.push(FM())}),{type:De.Trigger,name:n.name,states:o,transitions:s,queryCount:i,depCount:r,options:null}}visitState(n,e){let i=this.visitStyle(n.styles,e),r=n.options&&n.options.params||null;if(i.containsDynamicStyles){let o=new Set,s=r||{};i.styles.forEach(a=>{a instanceof Map&&a.forEach(c=>{wb(c).forEach(l=>{Object.hasOwn(s,l)||o.add(l)})})}),o.size&&e.errors.push(PM(n.name,[...o.values()]))}return{type:De.State,name:n.name,style:i,options:r?{params:r}:null}}visitTransition(n,e){e.queryCount=0,e.depCount=0;let i=cn(this,xa(n.animation),e),r=QH(n.expr,e.errors);return{type:De.Transition,matchers:r,animation:i,queryCount:e.queryCount,depCount:e.depCount,options:ts(n.options)}}visitSequence(n,e){return{type:De.Sequence,steps:n.steps.map(i=>cn(this,i,e)),options:ts(n.options)}}visitGroup(n,e){let i=e.currentTime,r=0,o=n.steps.map(s=>{e.currentTime=i;let a=cn(this,s,e);return r=Math.max(r,e.currentTime),a});return e.currentTime=r,{type:De.Group,steps:o,options:ts(n.options)}}visitAnimate(n,e){let i=iU(n.timings,e.errors);e.currentAnimateTimings=i;let r,o=n.styles?n.styles:db({});if(o.type==De.Keyframes)r=this.visitKeyframes(o,e);else{let s=n.styles,a=!1;if(!s){a=!0;let l={};i.easing&&(l.easing=i.easing),s=db(l)}e.currentTime+=i.duration+i.delay;let c=this.visitStyle(s,e);c.isEmptyStep=a,r=c}return e.currentAnimateTimings=null,{type:De.Animate,timings:i,style:r,options:null}}visitStyle(n,e){let i=this._makeStyleAst(n,e);return this._validateStyleAst(i,e),i}_makeStyleAst(n,e){let i=[],r=Array.isArray(n.styles)?n.styles:[n.styles];for(let a of r)typeof a=="string"?a===ei?i.push(a):e.errors.push(LM(a)):i.push(new Map(Object.entries(a)));let o=!1,s=null;return i.forEach(a=>{if(a instanceof Map&&(a.has("easing")&&(s=a.get("easing"),a.delete("easing")),!o)){for(let c of a.values())if(c.toString().indexOf(yb)>=0){o=!0;break}}}),{type:De.Style,styles:i,easing:s,offset:n.offset,containsDynamicStyles:o,options:null}}_validateStyleAst(n,e){let i=e.currentAnimateTimings,r=e.currentTime,o=e.currentTime;i&&o>0&&(o-=i.duration+i.delay),n.styles.forEach(s=>{typeof s!="string"&&s.forEach((a,c)=>{let l=e.collectedStyles.get(e.currentQuerySelector),d=l.get(c),f=!0;d&&(o!=r&&o>=d.startTime&&r<=d.endTime&&(e.errors.push(jM(c,d.startTime,d.endTime,o,r)),f=!1),o=d.startTime),f&&l.set(c,{startTime:o,endTime:r}),e.options&&sT(a,e.options,e.errors)})})}visitKeyframes(n,e){let i={type:De.Keyframes,styles:[],options:null};if(!e.currentAnimateTimings)return e.errors.push(VM()),i;let r=1,o=0,s=[],a=!1,c=!1,l=0,d=n.steps.map(I=>{let T=this._makeStyleAst(I,e),Q=T.offset!=null?T.offset:nU(T.styles),ke=0;return Q!=null&&(o++,ke=T.offset=Q),c=c||ke<0||ke>1,a=a||ke<l,l=ke,s.push(ke),T});c&&e.errors.push(BM()),a&&e.errors.push(HM());let f=n.steps.length,h=0;o>0&&o<f?e.errors.push(UM()):o==0&&(h=r/(f-1));let m=f-1,p=e.currentTime,_=e.currentAnimateTimings,x=_.duration;return d.forEach((I,T)=>{let Q=h>0?T==m?1:h*T:s[T],ke=Q*x;e.currentTime=p+_.delay+ke,_.duration=ke,this._validateStyleAst(I,e),I.offset=Q,i.styles.push(I)}),i}visitReference(n,e){return{type:De.Reference,animation:cn(this,xa(n.animation),e),options:ts(n.options)}}visitAnimateChild(n,e){return e.depCount++,{type:De.AnimateChild,options:ts(n.options)}}visitAnimateRef(n,e){return{type:De.AnimateRef,animation:this.visitReference(n.animation,e),options:ts(n.options)}}visitQuery(n,e){let i=e.currentQuerySelector,r=n.options||{};e.queryCount++,e.currentQuery=n;let[o,s]=eU(n.selector);e.currentQuerySelector=i.length?i+" "+o:o,an(e.collectedStyles,e.currentQuerySelector,new Map);let a=cn(this,xa(n.animation),e);return e.currentQuery=null,e.currentQuerySelector=i,{type:De.Query,selector:o,limit:r.limit||0,optional:!!r.optional,includeSelf:s,animation:a,originalSelector:n.selector,options:ts(n.options)}}visitStagger(n,e){e.currentQuery||e.errors.push(zM());let i=n.timings==="full"?{duration:0,delay:0,easing:"full"}:kl(n.timings,e.errors,!0);return{type:De.Stagger,animation:cn(this,xa(n.animation),e),timings:i,options:null}}};function eU(t){let n=!!t.split(/\s*,\s*/).find(e=>e==_T);return n&&(t=t.replace(JH,"")),t=t.replace(/@\*/g,Tl).replace(/@\w+/g,e=>Tl+"-"+e.slice(1)).replace(/:animating/g,sm),[t,n]}function tU(t){return t?y({},t):null}var Ib=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(n){this.errors=n}};function nU(t){if(typeof t=="string")return null;let n=null;if(Array.isArray(t))t.forEach(e=>{if(e instanceof Map&&e.has("offset")){let i=e;n=parseFloat(i.get("offset")),i.delete("offset")}});else if(t instanceof Map&&t.has("offset")){let e=t;n=parseFloat(e.get("offset")),e.delete("offset")}return n}function iU(t,n){if(typeof t=="object"&&t!==null&&Object.hasOwn(t,"duration"))return t;if(typeof t=="number"){let o=kl(t,n).duration;return Sb(o,0,"")}let e=t;if(e.split(/\s+/).some(o=>o.charAt(0)=="{"&&o.charAt(1)=="{")){let o=Sb(0,0,"");return o.dynamic=!0,o.strValue=e,o}let r=kl(e,n);return Sb(r.duration,r.delay,r.easing)}function ts(t){return t?(t=y({},t),t.params&&(t.params=tU(t.params))):t={},t}function Sb(t,n,e){return{duration:t,delay:n,easing:e}}function Vb(t,n,e,i,r,o,s=null,a=!1){return{type:1,element:t,keyframes:n,preStyleProps:e,postStyleProps:i,duration:r,delay:o,totalTime:r+o,easing:s,subTimeline:a}}var Al=class{_map=new Map;get(n){return this._map.get(n)||[]}append(n,e){let i=this._map.get(n);i||this._map.set(n,i=[]),i.push(...e)}has(n){return this._map.has(n)}clear(){this._map.clear()}},rU=1,oU=":enter",sU=new RegExp(oU,"g"),aU=":leave",cU=new RegExp(aU,"g");function wT(t,n,e,i,r,o=new Map,s=new Map,a,c,l=[]){return new Mb().buildKeyframes(t,n,e,i,r,o,s,a,c,l)}var Mb=class{buildKeyframes(n,e,i,r,o,s,a,c,l,d=[]){l=l||new Al;let f=new Tb(n,e,l,r,o,d,[]);f.options=c;let h=c.delay?ki(c.delay):0;f.currentTimeline.delayNextStep(h),f.currentTimeline.setStyles([s],null,f.errors,c),cn(this,i,f);let m=f.timelines.filter(p=>p.containsAnimation());if(m.length&&a.size){let p;for(let _=m.length-1;_>=0;_--){let x=m[_];if(x.element===e){p=x;break}}p&&!p.allowOnlyTimelineStyles()&&p.setStyles([a],null,f.errors,c)}return m.length?m.map(p=>p.buildKeyframes()):[Vb(e,[],[],[],0,h,"",!1)]}visitTrigger(n,e){}visitState(n,e){}visitTransition(n,e){}visitAnimateChild(n,e){let i=e.subInstructions.get(e.element);if(i){let r=e.createSubContext(n.options),o=e.currentTimeline.currentTime,s=this._visitSubInstructions(i,r,r.options);o!=s&&e.transformIntoNewTimeline(s)}e.previousNode=n}visitAnimateRef(n,e){let i=e.createSubContext(n.options);i.transformIntoNewTimeline(),this._applyAnimationRefDelays([n.options,n.animation.options],e,i),this.visitReference(n.animation,i),e.transformIntoNewTimeline(i.currentTimeline.currentTime),e.previousNode=n}_applyAnimationRefDelays(n,e,i){for(let r of n){let o=r?.delay;if(o){let s=typeof o=="number"?o:ki(Ea(o,r?.params??{},e.errors));i.delayNextStep(s)}}}_visitSubInstructions(n,e,i){let o=e.currentTimeline.currentTime,s=i.duration!=null?ki(i.duration):null,a=i.delay!=null?ki(i.delay):null;return s!==0&&n.forEach(c=>{let l=e.appendInstructionToTimeline(c,s,a);o=Math.max(o,l.duration+l.delay)}),o}visitReference(n,e){e.updateOptions(n.options,!0),cn(this,n.animation,e),e.previousNode=n}visitSequence(n,e){let i=e.subContextCount,r=e,o=n.options;if(o&&(o.params||o.delay)&&(r=e.createSubContext(o),r.transformIntoNewTimeline(),o.delay!=null)){r.previousNode.type==De.Style&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=pm);let s=ki(o.delay);r.delayNextStep(s)}n.steps.length&&(n.steps.forEach(s=>cn(this,s,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>i&&r.transformIntoNewTimeline()),e.previousNode=n}visitGroup(n,e){let i=[],r=e.currentTimeline.currentTime,o=n.options&&n.options.delay?ki(n.options.delay):0;n.steps.forEach(s=>{let a=e.createSubContext(n.options);o&&a.delayNextStep(o),cn(this,s,a),r=Math.max(r,a.currentTimeline.currentTime),i.push(a.currentTimeline)}),i.forEach(s=>e.currentTimeline.mergeTimelineCollectedStyles(s)),e.transformIntoNewTimeline(r),e.previousNode=n}_visitTiming(n,e){if(n.dynamic){let i=n.strValue,r=e.params?Ea(i,e.params,e.errors):i;return kl(r,e.errors)}else return{duration:n.duration,delay:n.delay,easing:n.easing}}visitAnimate(n,e){let i=e.currentAnimateTimings=this._visitTiming(n.timings,e),r=e.currentTimeline;i.delay&&(e.incrementTime(i.delay),r.snapshotCurrentStyles());let o=n.style;o.type==De.Keyframes?this.visitKeyframes(o,e):(e.incrementTime(i.duration),this.visitStyle(o,e),r.applyStylesToKeyframe()),e.currentAnimateTimings=null,e.previousNode=n}visitStyle(n,e){let i=e.currentTimeline,r=e.currentAnimateTimings;!r&&i.hasCurrentStyleProperties()&&i.forwardFrame();let o=r&&r.easing||n.easing;n.isEmptyStep?i.applyEmptyStep(o):i.setStyles(n.styles,o,e.errors,e.options),e.previousNode=n}visitKeyframes(n,e){let i=e.currentAnimateTimings,r=e.currentTimeline.duration,o=i.duration,a=e.createSubContext().currentTimeline;a.easing=i.easing,n.styles.forEach(c=>{let l=c.offset||0;a.forwardTime(l*o),a.setStyles(c.styles,c.easing,e.errors,e.options),a.applyStylesToKeyframe()}),e.currentTimeline.mergeTimelineCollectedStyles(a),e.transformIntoNewTimeline(r+o),e.previousNode=n}visitQuery(n,e){let i=e.currentTimeline.currentTime,r=n.options||{},o=r.delay?ki(r.delay):0;o&&(e.previousNode.type===De.Style||i==0&&e.currentTimeline.hasCurrentStyleProperties())&&(e.currentTimeline.snapshotCurrentStyles(),e.previousNode=pm);let s=i,a=e.invokeQuery(n.selector,n.originalSelector,n.limit,n.includeSelf,!!r.optional,e.errors);e.currentQueryTotal=a.length;let c=null;a.forEach((l,d)=>{e.currentQueryIndex=d;let f=e.createSubContext(n.options,l);o&&f.delayNextStep(o),l===e.element&&(c=f.currentTimeline),cn(this,n.animation,f),f.currentTimeline.applyStylesToKeyframe();let h=f.currentTimeline.currentTime;s=Math.max(s,h)}),e.currentQueryIndex=0,e.currentQueryTotal=0,e.transformIntoNewTimeline(s),c&&(e.currentTimeline.mergeTimelineCollectedStyles(c),e.currentTimeline.snapshotCurrentStyles()),e.previousNode=n}visitStagger(n,e){let i=e.parentContext,r=e.currentTimeline,o=n.timings,s=Math.abs(o.duration),a=s*(e.currentQueryTotal-1),c=s*e.currentQueryIndex;switch(o.duration<0?"reverse":o.easing){case"reverse":c=a-c;break;case"full":c=i.currentStaggerTime;break}let d=e.currentTimeline;c&&d.delayNextStep(c);let f=d.currentTime;cn(this,n.animation,e),e.previousNode=n,i.currentStaggerTime=r.currentTime-f+(r.startTime-i.currentTimeline.startTime)}},pm={},Tb=class t{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=pm;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(n,e,i,r,o,s,a,c){this._driver=n,this.element=e,this.subInstructions=i,this._enterClassName=r,this._leaveClassName=o,this.errors=s,this.timelines=a,this.currentTimeline=c||new gm(this._driver,e,0),a.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(n,e){if(!n)return;let i=n,r=this.options;i.duration!=null&&(r.duration=ki(i.duration)),i.delay!=null&&(r.delay=ki(i.delay));let o=i.params;if(o){let s=r.params;s||(s=this.options.params={}),Object.keys(o).forEach(a=>{(!e||!Object.hasOwn(s,a))&&(s[a]=Ea(o[a],s,this.errors))})}}_copyOptions(){let n={};if(this.options){let e=this.options.params;if(e){let i=n.params={};Object.keys(e).forEach(r=>{i[r]=e[r]})}}return n}createSubContext(n=null,e,i){let r=e||this.element,o=new t(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,i||0));return o.previousNode=this.previousNode,o.currentAnimateTimings=this.currentAnimateTimings,o.options=this._copyOptions(),o.updateOptions(n),o.currentQueryIndex=this.currentQueryIndex,o.currentQueryTotal=this.currentQueryTotal,o.parentContext=this,this.subContextCount++,o}transformIntoNewTimeline(n){return this.previousNode=pm,this.currentTimeline=this.currentTimeline.fork(this.element,n),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(n,e,i){let r={duration:e??n.duration,delay:this.currentTimeline.currentTime+(i??0)+n.delay,easing:""},o=new kb(this._driver,n.element,n.keyframes,n.preStyleProps,n.postStyleProps,r,n.stretchStartingKeyframe);return this.timelines.push(o),r}incrementTime(n){this.currentTimeline.forwardTime(this.currentTimeline.duration+n)}delayNextStep(n){n>0&&this.currentTimeline.delayNextStep(n)}invokeQuery(n,e,i,r,o,s){let a=[];if(r&&a.push(this.element),n.length>0){n=n.replace(sU,"."+this._enterClassName),n=n.replace(cU,"."+this._leaveClassName);let c=i!=1,l=this._driver.query(this.element,n,c);i!==0&&(l=i<0?l.slice(l.length+i,l.length):l.slice(0,i)),a.push(...l)}return!o&&a.length==0&&s.push($M(e)),a}},gm=class t{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(n,e,i,r){this._driver=n,this.element=e,this.startTime=i,this._elementTimelineStylesLookup=r,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(e),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(e,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(n){let e=this._keyframes.size===1&&this._pendingStyles.size;this.duration||e?(this.forwardTime(this.currentTime+n),e&&this.snapshotCurrentStyles()):this.startTime+=n}fork(n,e){return this.applyStylesToKeyframe(),new t(this._driver,n,e||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=rU,this._loadKeyframe()}forwardTime(n){this.applyStylesToKeyframe(),this.duration=n,this._loadKeyframe()}_updateStyle(n,e){this._localTimelineStyles.set(n,e),this._globalTimelineStyles.set(n,e),this._styleSummary.set(n,{time:this.currentTime,value:e})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(n){n&&this._previousKeyframe.set("easing",n);for(let[e,i]of this._globalTimelineStyles)this._backFill.set(e,i||ei),this._currentKeyframe.set(e,ei);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(n,e,i,r){e&&this._previousKeyframe.set("easing",e);let o=r&&r.params||{},s=lU(n,this._globalTimelineStyles);for(let[a,c]of s){let l=Ea(c,o,i);this._pendingStyles.set(a,l),this._localTimelineStyles.has(a)||this._backFill.set(a,this._globalTimelineStyles.get(a)??ei),this._updateStyle(a,l)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((n,e)=>{this._currentKeyframe.set(e,n)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((n,e)=>{this._currentKeyframe.has(e)||this._currentKeyframe.set(e,n)}))}snapshotCurrentStyles(){for(let[n,e]of this._localTimelineStyles)this._pendingStyles.set(n,e),this._updateStyle(n,e)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let n=[];for(let e in this._currentKeyframe)n.push(e);return n}mergeTimelineCollectedStyles(n){n._styleSummary.forEach((e,i)=>{let r=this._styleSummary.get(i);(!r||e.time>r.time)&&this._updateStyle(i,e.value)})}buildKeyframes(){this.applyStylesToKeyframe();let n=new Set,e=new Set,i=this._keyframes.size===1&&this.duration===0,r=[];this._keyframes.forEach((a,c)=>{let l=new Map([...this._backFill,...a]);l.forEach((d,f)=>{d===Il?n.add(f):d===ei&&e.add(f)}),i||l.set("offset",c/this.duration),r.push(l)});let o=[...n.values()],s=[...e.values()];if(i){let a=r[0],c=new Map(a);a.set("offset",0),c.set("offset",1),r=[a,c]}return Vb(this.element,r,o,s,this.duration,this.startTime,this.easing,!1)}},kb=class extends gm{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(n,e,i,r,o,s,a=!1){super(n,e,s.delay),this.keyframes=i,this.preStyleProps=r,this.postStyleProps=o,this._stretchStartingKeyframe=a,this.timings={duration:s.duration,delay:s.delay,easing:s.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let n=this.keyframes,{delay:e,duration:i,easing:r}=this.timings;if(this._stretchStartingKeyframe&&e){let o=[],s=i+e,a=e/s,c=new Map(n[0]);c.set("offset",0),o.push(c);let l=new Map(n[0]);l.set("offset",uT(a)),o.push(l);let d=n.length-1;for(let f=1;f<=d;f++){let h=new Map(n[f]),m=h.get("offset"),p=e+m*i;h.set("offset",uT(p/s)),o.push(h)}i=s,e=0,r="",n=o}return Vb(this.element,n,this.preStyleProps,this.postStyleProps,i,e,r,!0)}};function uT(t,n=3){let e=Math.pow(10,n-1);return Math.round(t*e)/e}function lU(t,n){let e=new Map,i;return t.forEach(r=>{if(r==="*"){i??=n.keys();for(let o of i)e.set(o,ei)}else for(let[o,s]of r)e.set(o,s)}),e}function fT(t,n,e,i,r,o,s,a,c,l,d,f,h){return{type:0,element:t,triggerName:n,isRemovalTransition:r,fromState:e,fromStyles:o,toState:i,toStyles:s,timelines:a,queriedElements:c,preStyleProps:l,postStyleProps:d,totalTime:f,errors:h}}var Cb={},vm=class{_triggerName;ast;_stateStyles;constructor(n,e,i){this._triggerName=n,this.ast=e,this._stateStyles=i}match(n,e,i,r){return dU(this.ast.matchers,n,e,i,r)}buildStyles(n,e,i){let r=this._stateStyles.get("*");return n!==void 0&&(r=this._stateStyles.get(n?.toString())||r),r?r.buildStyles(e,i):new Map}build(n,e,i,r,o,s,a,c,l,d){let f=[],h=this.ast.options&&this.ast.options.params||Cb,m=a&&a.params||Cb,p=this.buildStyles(i,m,f),_=c&&c.params||Cb,x=this.buildStyles(r,_,f),I=new Set,T=new Map,Q=new Map,ke=r==="void",Et={params:ST(_,h),delay:this.ast.options?.delay},Oe=d?[]:wT(n,e,this.ast.animation,o,s,p,x,Et,l,f),Qe=0;return Oe.forEach(nt=>{Qe=Math.max(nt.duration+nt.delay,Qe)}),f.length?fT(e,this._triggerName,i,r,ke,p,x,[],[],T,Q,Qe,f):(Oe.forEach(nt=>{let Nt=nt.element,tr=an(T,Nt,new Set);nt.preStyleProps.forEach(Fn=>tr.add(Fn));let rs=an(Q,Nt,new Set);nt.postStyleProps.forEach(Fn=>rs.add(Fn)),Nt!==e&&I.add(Nt)}),fT(e,this._triggerName,i,r,ke,p,x,Oe,[...I.values()],T,Q,Qe))}};function dU(t,n,e,i,r){return t.some(o=>o(n,e,i,r))}function ST(t,n){let e=y({},n);return Object.entries(t).forEach(([i,r])=>{r!=null&&(e[i]=r)}),e}var Rb=class{styles;defaultParams;normalizer;constructor(n,e,i){this.styles=n,this.defaultParams=e,this.normalizer=i}buildStyles(n,e){let i=new Map,r=ST(n,this.defaultParams);return this.styles.styles.forEach(o=>{typeof o!="string"&&o.forEach((s,a)=>{s&&(s=Ea(s,r,e));let c=this.normalizer.normalizePropertyName(a,e);s=this.normalizer.normalizeStyleValue(a,c,s,e),i.set(a,s)})}),i}};function uU(t,n,e){return new Ab(t,n,e)}var Ab=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(n,e,i){this.name=n,this.ast=e,this._normalizer=i,e.states.forEach(r=>{let o=r.options&&r.options.params||{};this.states.set(r.name,new Rb(r.style,o,i))}),hT(this.states,"true","1"),hT(this.states,"false","0"),e.transitions.forEach(r=>{this.transitionFactories.push(new vm(n,r,this.states))}),this.fallbackTransition=fU(n,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(n,e,i,r){return this.transitionFactories.find(s=>s.match(n,e,i,r))||null}matchStyles(n,e,i){return this.fallbackTransition.buildStyles(n,e,i)}};function fU(t,n,e){let i=[(s,a)=>!0],r={type:De.Sequence,steps:[],options:null},o={type:De.Transition,animation:r,matchers:i,options:null,queryCount:0,depCount:0};return new vm(t,o,n)}function hT(t,n,e){t.has(n)?t.has(e)||t.set(e,t.get(n)):t.has(e)&&t.set(n,t.get(e))}var hU=new Al,Ob=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(n,e,i){this.bodyNode=n,this._driver=e,this._normalizer=i}register(n,e){let i=[],r=[],o=bT(this._driver,e,i,r);if(i.length)throw KM(i);this._animations.set(n,o)}_buildPlayer(n,e,i){let r=n.element,o=mb(this._normalizer,n.keyframes,e,i);return this._driver.animate(r,o,n.duration,n.delay,n.easing,[],!0)}create(n,e,i={}){let r=[],o=this._animations.get(n),s,a=new Map;if(o?(s=wT(this._driver,e,o,_b,om,new Map,new Map,i,hU,r),s.forEach(d=>{let f=an(a,d.element,new Map);d.postStyleProps.forEach(h=>f.set(h,null))})):(r.push(YM()),s=[]),r.length)throw QM(r);a.forEach((d,f)=>{d.forEach((h,m)=>{d.set(m,this._driver.computeStyle(f,m,ei))})});let c=s.map(d=>{let f=a.get(d.element);return this._buildPlayer(d,new Map,f)}),l=er(c);return this._playersById.set(n,l),l.onDestroy(()=>this.destroy(n)),this.players.push(l),l}destroy(n){let e=this._getPlayer(n);e.destroy(),this._playersById.delete(n);let i=this.players.indexOf(e);i>=0&&this.players.splice(i,1)}_getPlayer(n){let e=this._playersById.get(n);if(!e)throw ZM(n);return e}listen(n,e,i,r){let o=im(e,"","","");return nm(this._getPlayer(n),i,o,r),()=>{}}command(n,e,i,r){if(i=="register"){this.register(n,r[0]);return}if(i=="create"){let s=r[0]||{};this.create(n,e,s);return}let o=this._getPlayer(n);switch(i){case"play":o.play();break;case"pause":o.pause();break;case"reset":o.reset();break;case"restart":o.restart();break;case"finish":o.finish();break;case"init":o.init();break;case"setPosition":o.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(n);break}}},mT="ng-animate-queued",mU=".ng-animate-queued",Db="ng-animate-disabled",pU=".ng-animate-disabled",gU="ng-star-inserted",vU=".ng-star-inserted",yU=[],CT={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},_U={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},ni="__ng_removed",Ol=class{namespaceId;value;options;get params(){return this.options.params}constructor(n,e=""){this.namespaceId=e;let i=n&&Object.hasOwn(n,"value"),r=i?n.value:n;if(this.value=wU(r),i){let o=n,{value:s}=o,a=Cm(o,["value"]);this.options=a}else this.options={};this.options.params||(this.options.params={})}absorbOptions(n){let e=n.params;if(e){let i=this.options.params;Object.keys(e).forEach(r=>{i[r]==null&&(i[r]=e[r])})}}},Rl="void",xb=new Ol(Rl),Fb=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(n,e,i){this.id=n,this.hostElement=e,this._engine=i,this._hostClassName="ng-tns-"+n,On(e,this._hostClassName)}listen(n,e,i,r){if(!this._triggers.has(e))throw XM(i,e);if(i==null||i.length==0)throw JM(e);if(!SU(i))throw eT(i,e);let o=an(this._elementListeners,n,[]),s={name:e,phase:i,callback:r};o.push(s);let a=an(this._engine.statesByElement,n,new Map);return a.has(e)||(On(n,Ml),On(n,Ml+"-"+e),a.set(e,xb)),()=>{this._engine.afterFlush(()=>{let c=o.indexOf(s);c>=0&&o.splice(c,1),this._triggers.has(e)||a.delete(e)})}}register(n,e){return this._triggers.has(n)?!1:(this._triggers.set(n,e),!0)}_getTrigger(n){let e=this._triggers.get(n);if(!e)throw tT(n);return e}trigger(n,e,i,r=!0){let o=this._getTrigger(e),s=new Fl(this.id,e,n),a=this._engine.statesByElement.get(n);a||(On(n,Ml),On(n,Ml+"-"+e),this._engine.statesByElement.set(n,a=new Map));let c=a.get(e),l=new Ol(i,this.id);if(!(i&&Object.hasOwn(i,"value"))&&c&&l.absorbOptions(c.options),a.set(e,l),c||(c=xb),!(l.value===Rl)&&c.value===l.value){if(!xU(c.params,l.params)){let _=[],x=o.matchStyles(c.value,c.params,_),I=o.matchStyles(l.value,l.params,_);_.length?this._engine.reportError(_):this._engine.afterFlush(()=>{$r(n,x),ti(n,I)})}return}let h=an(this._engine.playersByElement,n,[]);h.forEach(_=>{_.namespaceId==this.id&&_.triggerName==e&&_.queued&&_.destroy()});let m=o.matchTransition(c.value,l.value,n,l.params),p=!1;if(!m){if(!r)return;m=o.fallbackTransition,p=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:e,transition:m,fromState:c,toState:l,player:s,isFallbackTransition:p}),p||(On(n,mT),s.onStart(()=>{Na(n,mT)})),s.onDone(()=>{let _=this.players.indexOf(s);_>=0&&this.players.splice(_,1);let x=this._engine.playersByElement.get(n);if(x){let I=x.indexOf(s);I>=0&&x.splice(I,1)}}),this.players.push(s),h.push(s),s}deregister(n){this._triggers.delete(n),this._engine.statesByElement.forEach(e=>e.delete(n)),this._elementListeners.forEach((e,i)=>{this._elementListeners.set(i,e.filter(r=>r.name!=n))})}clearElementCache(n){this._engine.statesByElement.delete(n),this._elementListeners.delete(n);let e=this._engine.playersByElement.get(n);e&&(e.forEach(i=>i.destroy()),this._engine.playersByElement.delete(n))}_signalRemovalForInnerTriggers(n,e){let i=this._engine.driver.query(n,Tl,!0);i.forEach(r=>{if(r[ni])return;let o=this._engine.fetchNamespacesByElement(r);o.size?o.forEach(s=>s.triggerLeaveAnimation(r,e,!1,!0)):this.clearElementCache(r)}),this._engine.afterFlushAnimationsDone(()=>i.forEach(r=>this.clearElementCache(r)))}triggerLeaveAnimation(n,e,i,r){let o=this._engine.statesByElement.get(n),s=new Map;if(o){let a=[];if(o.forEach((c,l)=>{if(s.set(l,c.value),this._triggers.has(l)){let d=this.trigger(n,l,Rl,r);d&&a.push(d)}}),a.length)return this._engine.markElementAsRemoved(this.id,n,!0,e,s),i&&er(a).onDone(()=>this._engine.processLeaveNode(n)),!0}return!1}prepareLeaveAnimationListeners(n){let e=this._elementListeners.get(n),i=this._engine.statesByElement.get(n);if(e&&i){let r=new Set;e.forEach(o=>{let s=o.name;if(r.has(s))return;r.add(s);let c=this._triggers.get(s).fallbackTransition,l=i.get(s)||xb,d=new Ol(Rl),f=new Fl(this.id,s,n);this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:s,transition:c,fromState:l,toState:d,player:f,isFallbackTransition:!0})})}}removeNode(n,e){let i=this._engine;if(n.childElementCount&&this._signalRemovalForInnerTriggers(n,e),this.triggerLeaveAnimation(n,e,!0))return;let r=!1;if(i.totalAnimations){let o=i.players.length?i.playersByQueriedElement.get(n):[];if(o&&o.length)r=!0;else{let s=n;for(;s=s.parentNode;)if(i.statesByElement.get(s)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(n),r)i.markElementAsRemoved(this.id,n,!1,e);else{let o=n[ni];(!o||o===CT)&&(i.afterFlush(()=>this.clearElementCache(n)),i.destroyInnerAnimations(n),i._onRemovalComplete(n,e))}}insertNode(n,e){On(n,this._hostClassName)}drainQueuedTransitions(n){let e=[];return this._queue.forEach(i=>{let r=i.player;if(r.destroyed)return;let o=i.element,s=this._elementListeners.get(o);s&&s.forEach(a=>{if(a.name==i.triggerName){let c=im(o,i.triggerName,i.fromState.value,i.toState.value);c._data=n,nm(i.player,a.phase,c,a.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):e.push(i)}),this._queue=[],e.sort((i,r)=>{let o=i.transition.ast.depCount,s=r.transition.ast.depCount;return o==0||s==0?o-s:this._engine.driver.containsElement(i.element,r.element)?1:-1})}destroy(n){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,n)}},Pb=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(n,e)=>{};_onRemovalComplete(n,e){this.onRemovalComplete(n,e)}constructor(n,e,i){this.bodyNode=n,this.driver=e,this._normalizer=i}get queuedPlayers(){let n=[];return this._namespaceList.forEach(e=>{e.players.forEach(i=>{i.queued&&n.push(i)})}),n}createNamespace(n,e){let i=new Fb(n,e,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,e)?this._balanceNamespaceList(i,e):(this.newHostElements.set(e,i),this.collectEnterElement(e)),this._namespaceLookup[n]=i}_balanceNamespaceList(n,e){let i=this._namespaceList,r=this.namespacesByHostElement;if(i.length-1>=0){let s=!1,a=this.driver.getParentElement(e);for(;a;){let c=r.get(a);if(c){let l=i.indexOf(c);i.splice(l+1,0,n),s=!0;break}a=this.driver.getParentElement(a)}s||i.unshift(n)}else i.push(n);return r.set(e,n),n}register(n,e){let i=this._namespaceLookup[n];return i||(i=this.createNamespace(n,e)),i}registerTrigger(n,e,i){let r=this._namespaceLookup[n];r&&r.register(e,i)&&this.totalAnimations++}destroy(n,e){n&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let i=this._fetchNamespace(n);this.namespacesByHostElement.delete(i.hostElement);let r=this._namespaceList.indexOf(i);r>=0&&this._namespaceList.splice(r,1),i.destroy(e),delete this._namespaceLookup[n]}))}_fetchNamespace(n){return this._namespaceLookup[n]}fetchNamespacesByElement(n){let e=new Set,i=this.statesByElement.get(n);if(i){for(let r of i.values())if(r.namespaceId){let o=this._fetchNamespace(r.namespaceId);o&&e.add(o)}}return e}trigger(n,e,i,r){if(um(e)){let o=this._fetchNamespace(n);if(o)return o.trigger(e,i,r),!0}return!1}insertNode(n,e,i,r){if(!um(e))return;let o=e[ni];if(o&&o.setForRemoval){o.setForRemoval=!1,o.setForMove=!0;let s=this.collectedLeaveElements.indexOf(e);s>=0&&this.collectedLeaveElements.splice(s,1)}if(n){let s=this._fetchNamespace(n);s&&s.insertNode(e,i)}r&&this.collectEnterElement(e)}collectEnterElement(n){this.collectedEnterElements.push(n)}markElementAsDisabled(n,e){e?this.disabledNodes.has(n)||(this.disabledNodes.add(n),On(n,Db)):this.disabledNodes.has(n)&&(this.disabledNodes.delete(n),Na(n,Db))}removeNode(n,e,i){if(um(e)){let r=n?this._fetchNamespace(n):null;r?r.removeNode(e,i):this.markElementAsRemoved(n,e,!1,i);let o=this.namespacesByHostElement.get(e);o&&o.id!==n&&o.removeNode(e,i)}else this._onRemovalComplete(e,i)}markElementAsRemoved(n,e,i,r,o){this.collectedLeaveElements.push(e),e[ni]={namespaceId:n,setForRemoval:r,hasAnimation:i,removedBeforeQueried:!1,previousTriggersValues:o}}listen(n,e,i,r,o){return um(e)?this._fetchNamespace(n).listen(e,i,r,o):()=>{}}_buildInstruction(n,e,i,r,o){return n.transition.build(this.driver,n.element,n.fromState.value,n.toState.value,i,r,n.fromState.options,n.toState.options,e,o)}destroyInnerAnimations(n){let e=this.driver.query(n,Tl,!0);e.forEach(i=>this.destroyActiveAnimationsForElement(i)),this.playersByQueriedElement.size!=0&&(e=this.driver.query(n,sm,!0),e.forEach(i=>this.finishActiveQueriedAnimationOnElement(i)))}destroyActiveAnimationsForElement(n){let e=this.playersByElement.get(n);e&&e.forEach(i=>{i.queued?i.markedForDestroy=!0:i.destroy()})}finishActiveQueriedAnimationOnElement(n){let e=this.playersByQueriedElement.get(n);e&&e.forEach(i=>i.finish())}whenRenderingDone(){return new Promise(n=>{if(this.players.length)return er(this.players).onDone(()=>n());n()})}processLeaveNode(n){let e=n[ni];if(e&&e.setForRemoval){if(n[ni]=CT,e.namespaceId){this.destroyInnerAnimations(n);let i=this._fetchNamespace(e.namespaceId);i&&i.clearElementCache(n)}this._onRemovalComplete(n,e.setForRemoval)}n.classList?.contains(Db)&&this.markElementAsDisabled(n,!1),this.driver.query(n,pU,!0).forEach(i=>{this.markElementAsDisabled(i,!1)})}flush(n=-1){let e=[];if(this.newHostElements.size&&(this.newHostElements.forEach((i,r)=>this._balanceNamespaceList(i,r)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let i=0;i<this.collectedEnterElements.length;i++){let r=this.collectedEnterElements[i];On(r,gU)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let i=[];try{e=this._flushAnimations(i,n)}finally{for(let r=0;r<i.length;r++)i[r]()}}else for(let i=0;i<this.collectedLeaveElements.length;i++){let r=this.collectedLeaveElements[i];this.processLeaveNode(r)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(i=>i()),this._flushFns=[],this._whenQuietFns.length){let i=this._whenQuietFns;this._whenQuietFns=[],e.length?er(e).onDone(()=>{i.forEach(r=>r())}):i.forEach(r=>r())}}reportError(n){throw nT(n)}_flushAnimations(n,e){let i=new Al,r=[],o=new Map,s=[],a=new Map,c=new Map,l=new Map,d=new Set;this.disabledNodes.forEach(U=>{d.add(U);let ne=this.driver.query(U,mU,!0);for(let oe=0;oe<ne.length;oe++)d.add(ne[oe])});let f=this.bodyNode,h=Array.from(this.statesByElement.keys()),m=vT(h,this.collectedEnterElements),p=new Map,_=0;m.forEach((U,ne)=>{let oe=_b+_++;p.set(ne,oe),U.forEach(Me=>On(Me,oe))});let x=[],I=new Set,T=new Set;for(let U=0;U<this.collectedLeaveElements.length;U++){let ne=this.collectedLeaveElements[U],oe=ne[ni];oe&&oe.setForRemoval&&(x.push(ne),I.add(ne),oe.hasAnimation?this.driver.query(ne,vU,!0).forEach(Me=>I.add(Me)):T.add(ne))}let Q=new Map,ke=vT(h,Array.from(I));ke.forEach((U,ne)=>{let oe=om+_++;Q.set(ne,oe),U.forEach(Me=>On(Me,oe))}),n.push(()=>{m.forEach((U,ne)=>{let oe=p.get(ne);U.forEach(Me=>Na(Me,oe))}),ke.forEach((U,ne)=>{let oe=Q.get(ne);U.forEach(Me=>Na(Me,oe))}),x.forEach(U=>{this.processLeaveNode(U)})});let Et=[],Oe=[];for(let U=this._namespaceList.length-1;U>=0;U--)this._namespaceList[U].drainQueuedTransitions(e).forEach(oe=>{let Me=oe.player,It=oe.element;if(Et.push(Me),this.collectedEnterElements.length){let Vt=It[ni];if(Vt&&Vt.setForMove){if(Vt.previousTriggersValues&&Vt.previousTriggersValues.has(oe.triggerName)){let qr=Vt.previousTriggersValues.get(oe.triggerName),Cn=this.statesByElement.get(oe.element);if(Cn&&Cn.has(oe.triggerName)){let Ll=Cn.get(oe.triggerName);Ll.value=qr,Cn.set(oe.triggerName,Ll)}}Me.destroy();return}}let ii=!f||!this.driver.containsElement(f,It),ln=Q.get(It),nr=p.get(It),it=this._buildInstruction(oe,i,nr,ln,ii);if(it.errors&&it.errors.length){Oe.push(it);return}if(ii){Me.onStart(()=>$r(It,it.fromStyles)),Me.onDestroy(()=>ti(It,it.toStyles)),r.push(Me);return}if(oe.isFallbackTransition){Me.onStart(()=>$r(It,it.fromStyles)),Me.onDestroy(()=>ti(It,it.toStyles)),r.push(Me);return}let zb=[];it.timelines.forEach(Vt=>{Vt.stretchStartingKeyframe=!0,this.disabledNodes.has(Vt.element)||zb.push(Vt)}),it.timelines=zb,i.append(It,it.timelines);let FT={instruction:it,player:Me,element:It};s.push(FT),it.queriedElements.forEach(Vt=>an(a,Vt,[]).push(Me)),it.preStyleProps.forEach((Vt,qr)=>{if(Vt.size){let Cn=c.get(qr);Cn||c.set(qr,Cn=new Set),Vt.forEach((Ll,Sm)=>Cn.add(Sm))}}),it.postStyleProps.forEach((Vt,qr)=>{let Cn=l.get(qr);Cn||l.set(qr,Cn=new Set),Vt.forEach((Ll,Sm)=>Cn.add(Sm))})});if(Oe.length){let U=[];Oe.forEach(ne=>{U.push(iT(ne.triggerName,ne.errors))}),Et.forEach(ne=>ne.destroy()),this.reportError(U)}let Qe=new Map,nt=new Map;s.forEach(U=>{let ne=U.element;i.has(ne)&&(nt.set(ne,ne),this._beforeAnimationBuild(U.player.namespaceId,U.instruction,Qe))}),r.forEach(U=>{let ne=U.element;this._getPreviousPlayers(ne,!1,U.namespaceId,U.triggerName,null).forEach(Me=>{an(Qe,ne,[]).push(Me),Me.destroy()})});let Nt=x.filter(U=>yT(U,c,l)),tr=new Map;gT(tr,this.driver,T,l,ei).forEach(U=>{yT(U,c,l)&&Nt.push(U)});let Fn=new Map;m.forEach((U,ne)=>{gT(Fn,this.driver,new Set(U),c,Il)}),Nt.forEach(U=>{let ne=tr.get(U),oe=Fn.get(U);tr.set(U,new Map([...ne?.entries()??[],...oe?.entries()??[]]))});let os=[],Hb=[],Ub={};s.forEach(U=>{let{element:ne,player:oe,instruction:Me}=U;if(i.has(ne)){if(d.has(ne)){oe.onDestroy(()=>ti(ne,Me.toStyles)),oe.disabled=!0,oe.overrideTotalTime(Me.totalTime),r.push(oe);return}let It=Ub;if(nt.size>1){let ln=ne,nr=[];for(;ln=ln.parentNode;){let it=nt.get(ln);if(it){It=it;break}nr.push(ln)}nr.forEach(it=>nt.set(it,It))}let ii=this._buildAnimation(oe.namespaceId,Me,Qe,o,Fn,tr);if(oe.setRealPlayer(ii),It===Ub)os.push(oe);else{let ln=this.playersByElement.get(It);ln&&ln.length&&(oe.parentPlayer=er(ln)),r.push(oe)}}else $r(ne,Me.fromStyles),oe.onDestroy(()=>ti(ne,Me.toStyles)),Hb.push(oe),d.has(ne)&&r.push(oe)}),Hb.forEach(U=>{let ne=o.get(U.element);if(ne&&ne.length){let oe=er(ne);U.setRealPlayer(oe)}}),r.forEach(U=>{U.parentPlayer?U.syncPlayerEvents(U.parentPlayer):U.destroy()});for(let U=0;U<x.length;U++){let ne=x[U],oe=ne[ni];if(Na(ne,om),oe&&oe.hasAnimation)continue;let Me=[];if(a.size){let ii=a.get(ne);ii&&ii.length&&Me.push(...ii);let ln=this.driver.query(ne,sm,!0);for(let nr=0;nr<ln.length;nr++){let it=a.get(ln[nr]);it&&it.length&&Me.push(...it)}}let It=Me.filter(ii=>!ii.destroyed);It.length?CU(this,ne,It):this.processLeaveNode(ne)}return x.length=0,os.forEach(U=>{this.players.push(U),U.onDone(()=>{U.destroy();let ne=this.players.indexOf(U);this.players.splice(ne,1)}),U.play()}),os}afterFlush(n){this._flushFns.push(n)}afterFlushAnimationsDone(n){this._whenQuietFns.push(n)}_getPreviousPlayers(n,e,i,r,o){let s=[];if(e){let a=this.playersByQueriedElement.get(n);a&&(s=a)}else{let a=this.playersByElement.get(n);if(a){let c=!o||o==Rl;a.forEach(l=>{l.queued||!c&&l.triggerName!=r||s.push(l)})}}return(i||r)&&(s=s.filter(a=>!(i&&i!=a.namespaceId||r&&r!=a.triggerName))),s}_beforeAnimationBuild(n,e,i){let r=e.triggerName,o=e.element,s=e.isRemovalTransition?void 0:n,a=e.isRemovalTransition?void 0:r;for(let c of e.timelines){let l=c.element,d=l!==o,f=an(i,l,[]);this._getPreviousPlayers(l,d,s,a,e.toState).forEach(m=>{let p=m.getRealPlayer();p.beforeDestroy&&p.beforeDestroy(),m.destroy(),f.push(m)})}$r(o,e.fromStyles)}_buildAnimation(n,e,i,r,o,s){let a=e.triggerName,c=e.element,l=[],d=new Set,f=new Set,h=e.timelines.map(p=>{let _=p.element;d.add(_);let x=_[ni];if(x&&x.removedBeforeQueried)return new Ji(p.duration,p.delay);let I=_!==c,T=DU((i.get(_)||yU).map(Qe=>Qe.getRealPlayer())).filter(Qe=>{let nt=Qe;return nt.element?nt.element===_:!1}),Q=o.get(_),ke=s.get(_),Et=mb(this._normalizer,p.keyframes,Q,ke),Oe=this._buildPlayer(p,Et,T);if(p.subTimeline&&r&&f.add(_),I){let Qe=new Fl(n,a,_);Qe.setRealPlayer(Oe),l.push(Qe)}return Oe});l.forEach(p=>{an(this.playersByQueriedElement,p.element,[]).push(p),p.onDone(()=>bU(this.playersByQueriedElement,p.element,p))}),d.forEach(p=>On(p,bb));let m=er(h);return m.onDestroy(()=>{d.forEach(p=>Na(p,bb)),ti(c,e.toStyles)}),f.forEach(p=>{an(r,p,[]).push(m)}),m}_buildPlayer(n,e,i){return e.length>0?this.driver.animate(n.element,e,n.duration,n.delay,n.easing,i):new Ji(n.duration,n.delay)}},Fl=class{namespaceId;triggerName;element;_player=new Ji;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(n,e,i){this.namespaceId=n,this.triggerName=e,this.element=i}setRealPlayer(n){this._containsRealPlayer||(this._player=n,this._queuedCallbacks.forEach((e,i)=>{e.forEach(r=>nm(n,i,void 0,r))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(n.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(n){this.totalTime=n}syncPlayerEvents(n){let e=this._player;e.triggerCallback&&n.onStart(()=>e.triggerCallback("start")),n.onDone(()=>this.finish()),n.onDestroy(()=>this.destroy())}_queueEvent(n,e){an(this._queuedCallbacks,n,[]).push(e)}onDone(n){this.queued&&this._queueEvent("done",n),this._player.onDone(n)}onStart(n){this.queued&&this._queueEvent("start",n),this._player.onStart(n)}onDestroy(n){this.queued&&this._queueEvent("destroy",n),this._player.onDestroy(n)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(n){this.queued||this._player.setPosition(n)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(n){let e=this._player;e.triggerCallback&&e.triggerCallback(n)}};function bU(t,n,e){let i=t.get(n);if(i){if(i.length){let r=i.indexOf(e);i.splice(r,1)}i.length==0&&t.delete(n)}return i}function wU(t){return t??null}function um(t){return t&&t.nodeType===1}function SU(t){return t=="start"||t=="done"}function pT(t,n){let e=t.style.display;return t.style.display=n??"none",e}function gT(t,n,e,i,r){let o=[];e.forEach(c=>o.push(pT(c)));let s=[];i.forEach((c,l)=>{let d=new Map;c.forEach(f=>{let h=n.computeStyle(l,f,r);d.set(f,h),(!h||h.length==0)&&(l[ni]=_U,s.push(l))}),t.set(l,d)});let a=0;return e.forEach(c=>pT(c,o[a++])),s}function vT(t,n){let e=new Map;if(t.forEach(a=>e.set(a,[])),n.length==0)return e;let i=1,r=new Set(n),o=new Map;function s(a){if(!a)return i;let c=o.get(a);if(c)return c;let l=a.parentNode;return e.has(l)?c=l:r.has(l)?c=i:c=s(l),o.set(a,c),c}return n.forEach(a=>{let c=s(a);c!==i&&e.get(c).push(a)}),e}function On(t,n){t.classList?.add(n)}function Na(t,n){t.classList?.remove(n)}function CU(t,n,e){er(e).onDone(()=>t.processLeaveNode(n))}function DU(t){let n=[];return DT(t,n),n}function DT(t,n){for(let e=0;e<t.length;e++){let i=t[e];i instanceof Da?DT(i.players,n):n.push(i)}}function xU(t,n){let e=Object.keys(t),i=Object.keys(n);if(e.length!=i.length)return!1;for(let r=0;r<e.length;r++){let o=e[r];if(!Object.hasOwn(n,o)||t[o]!==n[o])return!1}return!0}function yT(t,n,e){let i=e.get(t);if(!i)return!1;let r=n.get(t);return r?i.forEach(o=>r.add(o)):n.set(t,i),e.delete(t),!0}var Ia=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(n,e)=>{};constructor(n,e,i){this._driver=e,this._normalizer=i,this._transitionEngine=new Pb(n.body,e,i),this._timelineEngine=new Ob(n.body,e,i),this._transitionEngine.onRemovalComplete=(r,o)=>this.onRemovalComplete(r,o)}registerTrigger(n,e,i,r,o){let s=n+"-"+r,a=this._triggerCache[s];if(!a){let c=[],l=[],d=bT(this._driver,o,c,l);if(c.length)throw WM(r,c);a=uU(r,d,this._normalizer),this._triggerCache[s]=a}this._transitionEngine.registerTrigger(e,r,a)}register(n,e){this._transitionEngine.register(n,e)}destroy(n,e){this._transitionEngine.destroy(n,e)}onInsert(n,e,i,r){this._transitionEngine.insertNode(n,e,i,r)}onRemove(n,e,i){this._transitionEngine.removeNode(n,e,i)}disableAnimations(n,e){this._transitionEngine.markElementAsDisabled(n,e)}process(n,e,i,r){if(i.charAt(0)=="@"){let[o,s]=pb(i),a=r;this._timelineEngine.command(o,e,s,a)}else this._transitionEngine.trigger(n,e,i,r)}listen(n,e,i,r,o){if(i.charAt(0)=="@"){let[s,a]=pb(i);return this._timelineEngine.listen(s,e,a,o)}return this._transitionEngine.listen(n,e,i,r,o)}flush(n=-1){this._transitionEngine.flush(n)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(n){this._transitionEngine.afterFlushAnimationsDone(n)}};function EU(t,n){let e=null,i=null;return Array.isArray(n)&&n.length?(e=Eb(n[0]),n.length>1&&(i=Eb(n[n.length-1]))):n instanceof Map&&(e=Eb(n)),e||i?new NU(t,e,i):null}var NU=(()=>{class t{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(e,i,r){this._element=e,this._startStyles=i,this._endStyles=r;let o=t.initialStylesByElement.get(e);o||t.initialStylesByElement.set(e,o=new Map),this._initialStyles=o}start(){this._state<1&&(this._startStyles&&ti(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(ti(this._element,this._initialStyles),this._endStyles&&(ti(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(t.initialStylesByElement.delete(this._element),this._startStyles&&($r(this._element,this._startStyles),this._endStyles=null),this._endStyles&&($r(this._element,this._endStyles),this._endStyles=null),ti(this._element,this._initialStyles),this._state=3)}}return t})();function Eb(t){let n=null;return t.forEach((e,i)=>{IU(i)&&(n=n||new Map,n.set(i,e))}),n}function IU(t){return t==="display"||t==="position"}var ym=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(n,e,i,r){this.element=n,this.keyframes=e,this.options=i,this._specialStyles=r,this._duration=i.duration,this._delay=i.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let n=this.keyframes,e=this._triggerWebAnimation(this.element,n,this.options);if(!e)return this._onFinish(),null;this.domPlayer=e,this._finalKeyframe=n.length?n[n.length-1]:new Map;let i=()=>this._onFinish();return e.addEventListener("finish",i),this.onDestroy(()=>{e.removeEventListener("finish",i)}),e}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(n){let e=[];return n.forEach(i=>{e.push(Object.fromEntries(i))}),e}_triggerWebAnimation(n,e,i){let r=this._convertKeyframesToObject(e);try{return n.animate(r,i)}catch(o){return null}}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}play(){let n=this._buildPlayer();n&&(this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),n.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}setPosition(n){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=n*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let n=new Map;this.hasStarted()&&this._finalKeyframe.forEach((i,r)=>{r!=="offset"&&n.set(r,this._finished?i:cm(this.element,r))}),this.currentSnapshot=n}triggerCallback(n){let e=n==="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},_m=class{validateStyleProperty(n){return!0}validateAnimatableStyleProperty(n){return!0}containsElement(n,e){return gb(n,e)}getParentElement(n){return rm(n)}query(n,e,i){return vb(n,e,i)}computeStyle(n,e,i){return cm(n,e)}animate(n,e,i,r,o,s=[]){let a=r==0?"both":"forwards",c={duration:i,delay:r,fill:a};o&&(c.easing=o);let l=new Map,d=s.filter(m=>m instanceof ym);aT(i,r)&&d.forEach(m=>{m.currentSnapshot.forEach((p,_)=>l.set(_,p))});let f=oT(e).map(m=>new Map(m));f=cT(n,f,l);let h=EU(n,f);return new ym(n,f,c,h)}};var fm="@",xT="@.disabled",bm=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(n,e,i,r){this.namespaceId=n,this.delegate=e,this.engine=i,this._onDestroy=r}get data(){return this.delegate.data}destroyNode(n){this.delegate.destroyNode?.(n)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}appendChild(n,e){this.delegate.appendChild(n,e),this.engine.onInsert(this.namespaceId,e,n,!1)}insertBefore(n,e,i,r=!0){this.delegate.insertBefore(n,e,i),this.engine.onInsert(this.namespaceId,e,n,r)}removeChild(n,e,i,r){if(r){this.delegate.removeChild(n,e,i,r);return}this.parentNode(e)&&this.engine.onRemove(this.namespaceId,e,this.delegate)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,i,r){this.delegate.setAttribute(n,e,i,r)}removeAttribute(n,e,i){this.delegate.removeAttribute(n,e,i)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,i,r){this.delegate.setStyle(n,e,i,r)}removeStyle(n,e,i){this.delegate.removeStyle(n,e,i)}setProperty(n,e,i){e.charAt(0)==fm&&e==xT?this.disableAnimations(n,!!i):this.delegate.setProperty(n,e,i)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,i,r){return this.delegate.listen(n,e,i,r)}disableAnimations(n,e){this.engine.disableAnimations(n,e)}},Lb=class extends bm{factory;constructor(n,e,i,r,o){super(e,i,r,o),this.factory=n,this.namespaceId=e}setProperty(n,e,i){e.charAt(0)==fm?e.charAt(1)=="."&&e==xT?(i=i===void 0?!0:!!i,this.disableAnimations(n,i)):this.engine.process(this.namespaceId,n,e.slice(1),i):this.delegate.setProperty(n,e,i)}listen(n,e,i,r){if(e.charAt(0)==fm){let o=MU(n),s=e.slice(1),a="";return s.charAt(0)!=fm&&([s,a]=TU(s)),this.engine.listen(this.namespaceId,o,s,a,c=>{let l=c._data||-1;this.factory.scheduleListenerCallback(l,i,c)})}return this.delegate.listen(n,e,i,r)}};function MU(t){switch(t){case"body":return document.body;case"document":return document;case"window":return window;default:return t}}function TU(t){let n=t.indexOf("."),e=t.substring(0,n),i=t.slice(n+1);return[e,i]}var wm=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(n,e,i){this.delegate=n,this.engine=e,this._zone=i,e.onRemovalComplete=(r,o)=>{o?.removeChild(null,r)}}createRenderer(n,e){let r=this.delegate.createRenderer(n,e);if(!n||!e?.data?.animation){let l=this._rendererCache,d=l.get(r);if(!d){let f=()=>l.delete(r);d=new bm("",r,this.engine,f),l.set(r,d)}return d}let o=e.id,s=e.id+"-"+this._currentId;this._currentId++,this.engine.register(s,n);let a=l=>{Array.isArray(l)?l.forEach(a):this.engine.registerTrigger(o,s,n,l.name,l)};return e.data.animation.forEach(a),new Lb(this,s,r,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(n,e,i){if(n>=0&&n<this._microtaskId){this._zone.run(()=>e(i));return}let r=this._animationCallbacksBuffer;r.length==0&&queueMicrotask(()=>{this._zone.run(()=>{r.forEach(o=>{let[s,a]=o;s(a)}),this._animationCallbacksBuffer=[]})}),r.push([e,i])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(n){this.engine.flush(),this.delegate.componentReplaced?.(n)}};var RU=(()=>{class t extends Ia{constructor(e,i,r){super(e,i,r)}ngOnDestroy(){this.flush()}static \u0275fac=function(i){return new(i||t)(M(K),M(ns),M(is))};static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();function AU(){return new hm}function OU(){return new wm(u(Vc),u(Ia),u(O))}var NT=[{provide:is,useFactory:AU},{provide:Ia,useClass:RU},{provide:at,useFactory:OU}],FU=[{provide:ns,useClass:jb},{provide:br,useValue:"NoopAnimations"},...NT],ET=[{provide:ns,useFactory:()=>new _m},{provide:br,useFactory:()=>"BrowserAnimations"},...NT],IT=(()=>{class t{static withConfig(e){return{ngModule:t,providers:e.disableAnimations?FU:ET}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({providers:ET,imports:[Hc]})}return t})();var Bb="Service workers are disabled or not supported by this browser",Ma=class{serviceWorker;worker;registration;events;constructor(n,e){if(this.serviceWorker=n,!n)this.worker=this.events=this.registration=new Z(i=>i.error(new b(5601,!1)));else{let i=null,r=new N;this.worker=new Z(l=>(i!==null&&l.next(i),r.subscribe(d=>l.next(d))));let o=()=>{let{controller:l}=n;l!==null&&(i=l,r.next(i))};n.addEventListener("controllerchange",o),o(),this.registration=this.worker.pipe(Ke(()=>n.getRegistration().then(l=>{if(!l)throw new b(5601,!1);return l})));let s=new N;this.events=s.asObservable();let a=l=>{let{data:d}=l;d?.type&&s.next(d)};n.addEventListener("message",a),e?.get(St,null,{optional:!0})?.onDestroy(()=>{n.removeEventListener("controllerchange",o),n.removeEventListener("message",a)})}}postMessage(n,e){return new Promise(i=>{this.worker.pipe(ft(1)).subscribe(r=>{r.postMessage(y({action:n},e)),i()})})}postMessageWithOperation(n,e,i){let r=this.waitForOperationCompleted(i),o=this.postMessage(n,e);return Promise.all([o,r]).then(([,s])=>s)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(n){let e;return typeof n=="string"?e=i=>i.type===n:e=i=>n.includes(i.type),this.events.pipe(Ee(e))}nextEventOfType(n){return this.eventsOfType(n).pipe(ft(1))}waitForOperationCompleted(n){return new Promise((e,i)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(Ee(r=>r.nonce===n),ft(1),ce(r=>{if(r.result!==void 0)return r.result;throw new Error(r.error)})).subscribe({next:e,error:i})})}get isEnabled(){return!!this.serviceWorker}},TT=(()=>{class t{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new N;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=Oi,this.notificationClicks=Oi,this.notificationCloses=Oi,this.pushSubscriptionChanges=Oi,this.subscription=Oi;return}this.messages=this.sw.eventsOfType("PUSH").pipe(ce(r=>r.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(ce(r=>r.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(ce(r=>r.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(ce(r=>r.data)),this.pushManager=this.sw.registration.pipe(ce(r=>r.pushManager));let i=this.pushManager.pipe(Ke(r=>r.getSubscription()));this.subscription=new Z(r=>{let o=i.subscribe(r),s=this.subscriptionChanges.subscribe(r);return()=>{o.unsubscribe(),s.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(Bb));let i={userVisibleOnly:!0},r=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(r.length));for(let s=0;s<r.length;s++)o[s]=r.charCodeAt(s);return i.applicationServerKey=o,new Promise((s,a)=>{this.pushManager.pipe(Ke(c=>c.subscribe(i)),ft(1)).subscribe({next:c=>{this.subscriptionChanges.next(c),s(c)},error:a})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(Bb));let e=i=>{if(i===null)throw new b(5602,!1);return i.unsubscribe().then(r=>{if(!r)throw new b(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((i,r)=>{this.subscription.pipe(ft(1),Ke(e)).subscribe({next:i,error:r})})}decodeBase64(e){return atob(e)}static \u0275fac=function(i){return new(i||t)(M(Ma))};static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})(),kT=(()=>{class t{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=Oi,this.unrecoverable=Oi;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Bb));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new b(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(i){return new(i||t)(M(Ma))};static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})(),RT=new v("");function PU(){let t=u(Pl);if(!("serviceWorker"in navigator&&t.enabled!==!1))return;let n=u(RT),e=u(O),i=u(St);e.runOutsideAngular(()=>{let r=navigator.serviceWorker,o=()=>r.controller?.postMessage({action:"INITIALIZE"});r.addEventListener("controllerchange",o),i.onDestroy(()=>{r.removeEventListener("controllerchange",o)})}),e.runOutsideAngular(()=>{let r,{registrationStrategy:o}=t;if(typeof o=="function")r=new Promise(s=>o().subscribe(()=>s()));else{let[s,...a]=(o||"registerWhenStable:30000").split(":");switch(s){case"registerImmediately":r=Promise.resolve();break;case"registerWithDelay":r=MT(+a[0]||0);break;case"registerWhenStable":r=Promise.race([i.whenStable(),MT(+a[0])]);break;default:throw new b(5600,!1)}}r.then(()=>{i.destroyed||navigator.serviceWorker.register(n,{scope:t.scope,updateViaCache:t.updateViaCache,type:t.type}).catch(s=>console.error(en(5604,!1)))})})}function MT(t){return new Promise(n=>setTimeout(n,t))}function LU(){let t=u(Pl),n=u(le),e=!0;return new Ma(e&&t.enabled!==!1?navigator.serviceWorker:void 0,n)}var Pl=class{enabled;updateViaCache;type;scope;registrationStrategy};function jU(t,n={}){return Ln([TT,kT,{provide:RT,useValue:t},{provide:Pl,useValue:n},{provide:Ma,useFactory:LU},Hs(PU)])}var AT=(()=>{class t{static register(e,i={}){return{ngModule:t,providers:[jU(e,i)]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=A({providers:[TT,kT]})}return t})();var OT=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=F({type:t,bootstrap:[MM]})}static{this.\u0275inj=A({imports:[TN,HI,IM,LN,XI,wh,aI,Zo,mI,Ah,jI,$h,Hc,wy,ch,aM,IT,AT.register("ngsw-worker.js",{enabled:!jD(),registrationStrategy:"registerWhenStable:30000"})]})}}return t})();my().bootstrapModule(OT).catch(t=>console.error(t));
