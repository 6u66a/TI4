var nk=Object.defineProperty,ik=Object.defineProperties;var rk=Object.getOwnPropertyDescriptors;var nd=Object.getOwnPropertySymbols;var cS=Object.prototype.hasOwnProperty,lS=Object.prototype.propertyIsEnumerable;var aS=(t,n,e)=>n in t?nk(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,w=(t,n)=>{for(var e in n||={})cS.call(n,e)&&aS(t,e,n[e]);if(nd)for(var e of nd(n))lS.call(n,e)&&aS(t,e,n[e]);return t},X=(t,n)=>ik(t,rk(n));var Lm=(t,n)=>{var e={};for(var i in t)cS.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&nd)for(var i of nd(t))n.indexOf(i)<0&&lS.call(t,i)&&(e[i]=t[i]);return e};var Re=(t,n,e)=>new Promise((i,r)=>{var o=c=>{try{a(e.next(c))}catch(l){r(l)}},s=c=>{try{a(e.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(o,s);a((e=e.apply(t,n)).next())});var nn=null,id=!1,fo=1,ok=null,gt=Symbol("SIGNAL");function ce(t){let n=nn;return nn=t,n}function rd(){return nn}var wr={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Cr(t){if(id)throw new Error("");if(nn===null)return;nn.consumerOnSignalRead(t);let n=nn.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=nn.recomputing;if(i&&(e=n!==void 0?n.nextProducer:nn.producers,e!==void 0&&e.producer===t)){nn.producersTail=e,e.lastReadVersion=t.version,e.knownValidAtEpoch=fo;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===nn&&(!i||r.knownValidAtEpoch===fo))return;let o=Ss(nn),s={producer:t,consumer:nn,nextProducer:e,prevConsumer:void 0,knownValidAtEpoch:fo,lastReadVersion:t.version,nextConsumer:void 0};nn.producersTail=s,n!==void 0?n.nextProducer=s:nn.producers=s,o&&hS(t,s)}function dS(){fo++}function po(t){if(!(Ss(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===fo)){if(!t.producerMustRecompute(t)&&!bs(t)){_s(t);return}t.producerRecomputeValue(t),_s(t)}}function Bm(t){if(t.consumers===void 0)return;let n=id;id=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||sk(i)}}finally{id=n}}function Vm(){return nn?.consumerAllowSignalWrites!==!1}function sk(t){t.dirty=!0,Bm(t),t.consumerMarkedDirty?.(t)}function _s(t){t.dirty=!1,t.lastCleanEpoch=fo}function Wi(t){return t&&uS(t),ce(t)}function uS(t){if(t.producersTail?.knownValidAtEpoch===fo){let n=t.producers;for(;n!==void 0;)n.knownValidAtEpoch=null,n=n.nextProducer}t.producersTail=void 0,t.recomputing=!0}function Dr(t,n){ce(n),t&&fS(t)}function fS(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Ss(t))do e=jm(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function bs(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(po(e),i!==e.version))return!0}return!1}function xr(t){if(Ss(t)){let n=t.producers;for(;n!==void 0;)n=jm(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function hS(t,n){let e=t.consumersTail,i=Ss(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)hS(r.producer,r)}function jm(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!Ss(n)){let o=n.producers;for(;o!==void 0;)o=jm(o)}return e}function Ss(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Ga(t){ok?.(t)}function qa(t,n){return Object.is(t,n)}function Wa(t,n){let e=Object.create(ak);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(po(e),Cr(e),e.value===pi)throw e.error;return e.value};return i[gt]=e,Ga(e),i}var ho=Symbol("UNSET"),mo=Symbol("COMPUTING"),pi=Symbol("ERRORED"),ak=X(w({},wr),{value:ho,dirty:!0,error:null,equal:qa,kind:"computed",producerMustRecompute(t){return t.value===ho||t.value===mo},producerRecomputeValue(t){if(t.value===mo)throw new Error("");let n=t.value;t.value=mo;let e=Wi(t),i,r=!1;try{i=t.computation(),ce(null),r=n!==ho&&n!==pi&&i!==pi&&t.equal(n,i)}catch(o){i=pi,t.error=o}finally{Dr(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function ck(){throw new Error}var mS=ck;function pS(t){mS(t)}function Um(t){mS=t}var lk=null;function Hm(t,n){let e=Object.create(Ka);e.value=t,n!==void 0&&(e.equal=n);let i=()=>gS(e);return i[gt]=e,Ga(e),[i,s=>go(e,s),s=>od(e,s)]}function gS(t){return Cr(t),t.value}function go(t,n){Vm()||pS(t),t.equal(t.value,n)||(t.value=n,dk(t))}function od(t,n){Vm()||pS(t),go(t,n(t.value))}var Ka=X(w({},wr),{equal:qa,value:void 0,kind:"signal"});function dk(t){t.version++,dS(),Bm(t),lk?.(t)}var zm=X(w({},wr),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function $m(t){if(t.dirty=!1,t.version>0&&!bs(t))return;t.version++;let n=Wi(t);try{t.cleanup(),t.fn()}finally{Dr(t,n)}}var Gm;function sd(){return Gm}function gi(t){let n=Gm;return Gm=t,n}var vS=Symbol("NotFound");function ws(t){return t===vS||t?.name==="\u0275NotFound"}function qm(t,n,e){let i=Object.create(uk);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(po(i),Cr(i),i.value===pi)throw i.error;return i.value};return o[gt]=i,Ga(i),o}function Wm(t,n){po(t),go(t,n),_s(t)}function yS(t,n){if(po(t),t.value===pi)throw t.error;od(t,n),_s(t)}var uk=X(w({},wr),{value:ho,dirty:!0,error:null,equal:qa,kind:"linkedSignal",producerMustRecompute(t){return t.value===ho||t.value===mo},producerRecomputeValue(t){if(t.value===mo)throw new Error("");let n=t.value;t.value=mo;let e=Wi(t),i,r=!1;try{let o=t.source(),s=n!==ho&&n!==pi,a=s?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,a),t.sourceValue=o,ce(null),r=s&&i!==pi&&t.equal(n,i)}catch(o){i=pi,t.error=o}finally{Dr(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function _S(t){let n=ce(null);try{return t()}finally{ce(n)}}function be(t){return typeof t=="function"}function Cs(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var ad=Cs(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function vo(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var pe=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(be(i))try{i()}catch(o){n=o instanceof ad?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{bS(o)}catch(s){n=n??[],s instanceof ad?n=[...n,...s.errors]:n.push(s)}}if(n)throw new ad(n)}}add(n){var e;if(n&&n!==this)if(this.closed)bS(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&vo(e,n)}remove(n){let{_finalizers:e}=this;e&&vo(e,n),n instanceof t&&n._removeParent(this)}};pe.EMPTY=(()=>{let t=new pe;return t.closed=!0,t})();var Km=pe.EMPTY;function cd(t){return t instanceof pe||t&&"closed"in t&&be(t.remove)&&be(t.add)&&be(t.unsubscribe)}function bS(t){be(t)?t():t.unsubscribe()}var Wn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Ds={setTimeout(t,n,...e){let{delegate:i}=Ds;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=Ds;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function ld(t){Ds.setTimeout(()=>{let{onUnhandledError:n}=Wn;if(n)n(t);else throw t})}function yo(){}var SS=Ym("C",void 0,void 0);function wS(t){return Ym("E",void 0,t)}function CS(t){return Ym("N",t,void 0)}function Ym(t,n,e){return{kind:t,value:n,error:e}}var _o=null;function xs(t){if(Wn.useDeprecatedSynchronousErrorHandling){let n=!_o;if(n&&(_o={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=_o;if(_o=null,e)throw i}}else t()}function DS(t){Wn.useDeprecatedSynchronousErrorHandling&&_o&&(_o.errorThrown=!0,_o.error=t)}var bo=class extends pe{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,cd(n)&&n.add(this)):this.destination=mk}static create(n,e,i){return new Ki(n,e,i)}next(n){this.isStopped?Zm(CS(n),this):this._next(n)}error(n){this.isStopped?Zm(wS(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Zm(SS,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},fk=Function.prototype.bind;function Qm(t,n){return fk.call(t,n)}var Xm=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){dd(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){dd(i)}else dd(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){dd(e)}}},Ki=class extends bo{constructor(n,e,i){super();let r;if(be(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&Wn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&Qm(n.next,o),error:n.error&&Qm(n.error,o),complete:n.complete&&Qm(n.complete,o)}):r=n}this.destination=new Xm(r)}};function dd(t){Wn.useDeprecatedSynchronousErrorHandling?DS(t):ld(t)}function hk(t){throw t}function Zm(t,n){let{onStoppedNotification:e}=Wn;e&&Ds.setTimeout(()=>e(t,n))}var mk={closed:!0,next:yo,error:hk,complete:yo};var Es=typeof Symbol=="function"&&Symbol.observable||"@@observable";function _n(t){return t}function ud(...t){return Jm(t)}function Jm(t){return t.length===0?_n:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var ne=class t{constructor(n){n&&(this._subscribe=n)}lift(n){let e=new t;return e.source=this,e.operator=n,e}subscribe(n,e,i){let r=gk(n)?n:new Ki(n,e,i);return xs(()=>{let{operator:o,source:s}=this;r.add(o?o.call(r,s):s?this._subscribe(r):this._trySubscribe(r))}),r}_trySubscribe(n){try{return this._subscribe(n)}catch(e){n.error(e)}}forEach(n,e){return e=xS(e),new e((i,r)=>{let o=new Ki({next:s=>{try{n(s)}catch(a){r(a),o.unsubscribe()}},error:r,complete:i});this.subscribe(o)})}_subscribe(n){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(n)}[Es](){return this}pipe(...n){return Jm(n)(this)}toPromise(n){return n=xS(n),new n((e,i)=>{let r;this.subscribe(o=>r=o,o=>i(o),()=>e(r))})}};ne.create=t=>new ne(t);function xS(t){var n;return(n=t??Wn.Promise)!==null&&n!==void 0?n:Promise}function pk(t){return t&&be(t.next)&&be(t.error)&&be(t.complete)}function gk(t){return t&&t instanceof bo||pk(t)&&cd(t)}function ep(t){return be(t?.lift)}function we(t){return n=>{if(ep(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Se(t,n,e,i,r){return new tp(t,n,e,i,r)}var tp=class extends bo{constructor(n,e,i,r,o,s){super(n),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=e?function(a){try{e(a)}catch(c){n.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){n.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){n.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};function ES(){return we((t,n)=>{let e=null;t._refCount++;let i=Se(n,void 0,void 0,void 0,()=>{if(!t||t._refCount<=0||0<--t._refCount){e=null;return}let r=t._connection,o=e;e=null,r&&(!o||r===o)&&r.unsubscribe(),n.unsubscribe()});t.subscribe(i),i.closed||(e=t.connect())})}var Ya=class extends ne{constructor(n,e){super(),this.source=n,this.subjectFactory=e,this._subject=null,this._refCount=0,this._connection=null,ep(n)&&(this.lift=n.lift)}_subscribe(n){return this.getSubject().subscribe(n)}getSubject(){let n=this._subject;return(!n||n.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:n}=this;this._subject=this._connection=null,n?.unsubscribe()}connect(){let n=this._connection;if(!n){n=this._connection=new pe;let e=this.getSubject();n.add(this.source.subscribe(Se(e,void 0,()=>{this._teardown(),e.complete()},i=>{this._teardown(),e.error(i)},()=>this._teardown()))),n.closed&&(this._connection=null,n=pe.EMPTY)}return n}refCount(){return ES()(this)}};var Is={schedule(t){let n=requestAnimationFrame,e=cancelAnimationFrame,{delegate:i}=Is;i&&(n=i.requestAnimationFrame,e=i.cancelAnimationFrame);let r=n(o=>{e=void 0,t(o)});return new pe(()=>e?.(r))},requestAnimationFrame(...t){let{delegate:n}=Is;return(n?.requestAnimationFrame||requestAnimationFrame)(...t)},cancelAnimationFrame(...t){let{delegate:n}=Is;return(n?.cancelAnimationFrame||cancelAnimationFrame)(...t)},delegate:void 0};var IS=Cs(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var I=class extends ne{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let e=new fd(this,this);return e.operator=n,e}_throwIfClosed(){if(this.closed)throw new IS}next(n){xs(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let e of this.currentObservers)e.next(n)}})}error(n){xs(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:e}=this;for(;e.length;)e.shift().error(n)}})}complete(){xs(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:e,isStopped:i,observers:r}=this;return e||i?Km:(this.currentObservers=null,r.push(n),new pe(()=>{this.currentObservers=null,vo(r,n)}))}_checkFinalizedStatuses(n){let{hasError:e,thrownError:i,isStopped:r}=this;e?n.error(i):r&&n.complete()}asObservable(){let n=new ne;return n.source=this,n}};I.create=(t,n)=>new fd(t,n);var fd=class extends I{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Km}};var vt=class extends I{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var Qa={now(){return(Qa.delegate||Date).now()},delegate:void 0};var Za=class extends I{constructor(n=1/0,e=1/0,i=Qa){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:s}=this;e||(i.push(n),!r&&i.push(o.now()+s)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let s=0;s<o.length&&!n.closed;s+=i?1:2)n.next(o[s]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let s=e.now(),a=0;for(let c=1;c<i.length&&i[c]<=s;c+=2)a=c;a&&i.splice(0,a+1)}}};var hd=class extends pe{constructor(n,e){super()}schedule(n,e=0){return this}};var Xa={setInterval(t,n,...e){let{delegate:i}=Xa;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=Xa;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var Er=class extends hd{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return Xa.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&Xa.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,vo(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var vk=1,np,ip={};function NS(t){return t in ip?(delete ip[t],!0):!1}var MS={setImmediate(t){let n=vk++;return ip[n]=!0,np||(np=Promise.resolve()),np.then(()=>NS(n)&&t()),n},clearImmediate(t){NS(t)}};var{setImmediate:yk,clearImmediate:_k}=MS,Ja={setImmediate(...t){let{delegate:n}=Ja;return(n?.setImmediate||yk)(...t)},clearImmediate(t){let{delegate:n}=Ja;return(n?.clearImmediate||_k)(t)},delegate:void 0};var md=class extends Er{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}requestAsyncId(n,e,i=0){return i!==null&&i>0?super.requestAsyncId(n,e,i):(n.actions.push(this),n._scheduled||(n._scheduled=Ja.setImmediate(n.flush.bind(n,void 0))))}recycleAsyncId(n,e,i=0){var r;if(i!=null?i>0:this.delay>0)return super.recycleAsyncId(n,e,i);let{actions:o}=n;e!=null&&((r=o[o.length-1])===null||r===void 0?void 0:r.id)!==e&&(Ja.clearImmediate(e),n._scheduled===e&&(n._scheduled=void 0))}};var rp=(()=>{class t{constructor(e,i=t.now){this.schedulerActionCtor=e,this.now=i}schedule(e,i=0,r){return new this.schedulerActionCtor(this,e).schedule(r,i)}}return t.now=Qa.now,t})();var Ir=class extends rp{constructor(n,e=rp.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var pd=class extends Ir{flush(n){this._active=!0;let e=this._scheduled;this._scheduled=void 0;let{actions:i}=this,r;n=n||i.shift();do if(r=n.execute(n.state,n.delay))break;while((n=i[0])&&n.id===e&&i.shift());if(this._active=!1,r){for(;(n=i[0])&&n.id===e&&i.shift();)n.unsubscribe();throw r}}};var gd=new pd(md);var ec=new Ir(Er),TS=ec;var vd=class extends Er{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}requestAsyncId(n,e,i=0){return i!==null&&i>0?super.requestAsyncId(n,e,i):(n.actions.push(this),n._scheduled||(n._scheduled=Is.requestAnimationFrame(()=>n.flush(void 0))))}recycleAsyncId(n,e,i=0){var r;if(i!=null?i>0:this.delay>0)return super.recycleAsyncId(n,e,i);let{actions:o}=n;e!=null&&e===n._scheduled&&((r=o[o.length-1])===null||r===void 0?void 0:r.id)!==e&&(Is.cancelAnimationFrame(e),n._scheduled=void 0)}};var yd=class extends Ir{flush(n){this._active=!0;let e;n?e=n.id:(e=this._scheduled,this._scheduled=void 0);let{actions:i}=this,r;n=n||i.shift();do if(r=n.execute(n.state,n.delay))break;while((n=i[0])&&n.id===e&&i.shift());if(this._active=!1,r){for(;(n=i[0])&&n.id===e&&i.shift();)n.unsubscribe();throw r}}};var _d=new yd(vd);var at=new ne(t=>t.complete());function bd(t){return t&&be(t.schedule)}function op(t){return t[t.length-1]}function Sd(t){return be(op(t))?t.pop():void 0}function vi(t){return bd(op(t))?t.pop():void 0}function kS(t,n){return typeof op(t)=="number"?t.pop():n}function AS(t,n,e,i){function r(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function a(d){try{l(i.next(d))}catch(f){s(f)}}function c(d){try{l(i.throw(d))}catch(f){s(f)}}function l(d){d.done?o(d.value):r(d.value).then(a,c)}l((i=i.apply(t,n||[])).next())})}function RS(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function So(t){return this instanceof So?(this.v=t,this):new So(t)}function OS(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(m){return function(p){return Promise.resolve(p).then(m,f)}}function a(m,p){i[m]&&(r[m]=function(C){return new Promise(function(E,N){o.push([m,C,E,N])>1||c(m,C)})},p&&(r[m]=p(r[m])))}function c(m,p){try{l(i[m](p))}catch(C){h(o[0][3],C)}}function l(m){m.value instanceof So?Promise.resolve(m.value.v).then(d,f):h(o[0][2],m)}function d(m){c("next",m)}function f(m){c("throw",m)}function h(m,p){m(p),o.shift(),o.length&&c(o[0][0],o[0][1])}}function FS(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof RS=="function"?RS(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(s){return new Promise(function(a,c){s=t[o](s),r(a,c,s.done,s.value)})}}function r(o,s,a,c){Promise.resolve(c).then(function(l){o({value:l,done:a})},s)}}var wd=(t=>t&&typeof t.length=="number"&&typeof t!="function");function Cd(t){return be(t?.then)}function Dd(t){return be(t[Es])}function xd(t){return Symbol.asyncIterator&&be(t?.[Symbol.asyncIterator])}function Ed(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function bk(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Id=bk();function Nd(t){return be(t?.[Id])}function Md(t){return OS(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield So(e.read());if(r)return yield So(void 0);yield yield So(i)}}finally{e.releaseLock()}})}function Td(t){return be(t?.getReader)}function We(t){if(t instanceof ne)return t;if(t!=null){if(Dd(t))return Sk(t);if(wd(t))return wk(t);if(Cd(t))return Ck(t);if(xd(t))return PS(t);if(Nd(t))return Dk(t);if(Td(t))return xk(t)}throw Ed(t)}function Sk(t){return new ne(n=>{let e=t[Es]();if(be(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function wk(t){return new ne(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function Ck(t){return new ne(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,ld)})}function Dk(t){return new ne(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function PS(t){return new ne(n=>{Ek(t,n).catch(e=>n.error(e))})}function xk(t){return PS(Md(t))}function Ek(t,n){var e,i,r,o;return AS(this,void 0,void 0,function*(){try{for(e=FS(t);i=yield e.next(),!i.done;){let s=i.value;if(n.next(s),n.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function dn(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function kd(t,n=0){return we((e,i)=>{e.subscribe(Se(i,r=>dn(i,t,()=>i.next(r),n),()=>dn(i,t,()=>i.complete(),n),r=>dn(i,t,()=>i.error(r),n)))})}function Rd(t,n=0){return we((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function LS(t,n){return We(t).pipe(Rd(n),kd(n))}function BS(t,n){return We(t).pipe(Rd(n),kd(n))}function VS(t,n){return new ne(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function jS(t,n){return new ne(e=>{let i;return dn(e,n,()=>{i=t[Id](),dn(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){e.error(s);return}o?e.complete():e.next(r)},0,!0)}),()=>be(i?.return)&&i.return()})}function Ad(t,n){if(!t)throw new Error("Iterable cannot be null");return new ne(e=>{dn(e,n,()=>{let i=t[Symbol.asyncIterator]();dn(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function US(t,n){return Ad(Md(t),n)}function HS(t,n){if(t!=null){if(Dd(t))return LS(t,n);if(wd(t))return VS(t,n);if(Cd(t))return BS(t,n);if(xd(t))return Ad(t,n);if(Nd(t))return jS(t,n);if(Td(t))return US(t,n)}throw Ed(t)}function Ke(t,n){return n?HS(t,n):We(t)}function W(...t){let n=vi(t);return Ke(t,n)}function tc(t,n){let e=be(t)?t:()=>t,i=r=>r.error(e());return new ne(n?r=>n.schedule(i,0,r):i)}function wo(t){return!!t&&(t instanceof ne||be(t.lift)&&be(t.subscribe))}var Co=Cs(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function zS(t){return t instanceof Date&&!isNaN(t)}function he(t,n){return we((e,i)=>{let r=0;e.subscribe(Se(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:Ik}=Array;function Nk(t,n){return Ik(n)?t(...n):t(n)}function Od(t){return he(n=>Nk(t,n))}var{isArray:Mk}=Array,{getPrototypeOf:Tk,prototype:kk,keys:Rk}=Object;function Fd(t){if(t.length===1){let n=t[0];if(Mk(n))return{args:n,keys:null};if(Ak(n)){let e=Rk(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function Ak(t){return t&&typeof t=="object"&&Tk(t)===kk}function Pd(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function Nr(...t){let n=vi(t),e=Sd(t),{args:i,keys:r}=Fd(t);if(i.length===0)return Ke([],n);let o=new ne(Ok(i,n,r?s=>Pd(r,s):_n));return e?o.pipe(Od(e)):o}function Ok(t,n,e=_n){return i=>{$S(n,()=>{let{length:r}=t,o=new Array(r),s=r,a=r;for(let c=0;c<r;c++)$S(n,()=>{let l=Ke(t[c],n),d=!1;l.subscribe(Se(i,f=>{o[c]=f,d||(d=!0,a--),a||i.next(e(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function $S(t,n,e){t?dn(e,t,n):n()}function GS(t,n,e,i,r,o,s,a){let c=[],l=0,d=0,f=!1,h=()=>{f&&!c.length&&!l&&n.complete()},m=C=>l<i?p(C):c.push(C),p=C=>{o&&n.next(C),l++;let E=!1;We(e(C,d++)).subscribe(Se(n,N=>{r?.(N),o?m(N):n.next(N)},()=>{E=!0},void 0,()=>{if(E)try{for(l--;c.length&&l<i;){let N=c.shift();s?dn(n,s,()=>p(N)):p(N)}h()}catch(N){n.error(N)}}))};return t.subscribe(Se(n,m,()=>{f=!0,h()})),()=>{a?.()}}function Lt(t,n,e=1/0){return be(n)?Lt((i,r)=>he((o,s)=>n(i,o,r,s))(We(t(i,r))),e):(typeof n=="number"&&(e=n),we((i,r)=>GS(i,r,t,e)))}function Mr(t=1/0){return Lt(_n,t)}function qS(){return Mr(1)}function Ns(...t){return qS()(Ke(t,vi(t)))}function nc(t){return new ne(n=>{We(t()).subscribe(n)})}function ic(...t){let n=Sd(t),{args:e,keys:i}=Fd(t),r=new ne(o=>{let{length:s}=e;if(!s){o.complete();return}let a=new Array(s),c=s,l=s;for(let d=0;d<s;d++){let f=!1;We(e[d]).subscribe(Se(o,h=>{f||(f=!0,l--),a[d]=h},()=>c--,void 0,()=>{(!c||!f)&&(l||o.next(i?Pd(i,a):a),o.complete())}))}});return n?r.pipe(Od(n)):r}function WS(t=0,n,e=TS){let i=-1;return n!=null&&(bd(n)?e=n:i=n),new ne(r=>{let o=zS(t)?+t-e.now():t;o<0&&(o=0);let s=0;return e.schedule(function(){r.closed||(r.next(s++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function un(...t){let n=vi(t),e=kS(t,1/0),i=t;return i.length?i.length===1?We(i[0]):Mr(e)(Ke(i,n)):at}var Yi=new ne(yo);function Me(t,n){return we((e,i)=>{let r=0;e.subscribe(Se(i,o=>t.call(n,o,r++)&&i.next(o)))})}function KS(t){return we((n,e)=>{let i=!1,r=null,o=null,s=!1,a=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let l=r;r=null,e.next(l)}s&&e.complete()},c=()=>{o=null,s&&e.complete()};n.subscribe(Se(e,l=>{i=!0,r=l,o||We(t(l)).subscribe(o=Se(e,a,c))},()=>{s=!0,(!i||!o||o.closed)&&e.complete()}))})}function Ms(t,n=ec){return KS(()=>WS(t,n))}function Tr(t){return we((n,e)=>{let i=null,r=!1,o;i=n.subscribe(Se(e,void 0,void 0,s=>{o=We(t(s,Tr(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function kr(t,n){return be(n)?Lt(t,n,1):Lt(t,1)}function rc(t,n=ec){return we((e,i)=>{let r=null,o=null,s=null,a=()=>{if(r){r.unsubscribe(),r=null;let l=o;o=null,i.next(l)}};function c(){let l=s+t,d=n.now();if(d<l){r=this.schedule(void 0,l-d),i.add(r);return}a()}e.subscribe(Se(i,l=>{o=l,s=n.now(),r||(r=n.schedule(c,t),i.add(r))},()=>{a(),i.complete()},void 0,()=>{o=r=null}))})}function YS(t){return we((n,e)=>{let i=!1;n.subscribe(Se(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function yt(t){return t<=0?()=>at:we((n,e)=>{let i=0;n.subscribe(Se(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function Ld(t,n=_n){return t=t??Fk,we((e,i)=>{let r,o=!0;e.subscribe(Se(i,s=>{let a=n(s);(o||!t(r,a))&&(o=!1,r=a,i.next(s))}))})}function Fk(t,n){return t===n}function QS(t=Pk){return we((n,e)=>{let i=!1;n.subscribe(Se(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function Pk(){return new Co}function Rr(t){return we((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Qi(t,n){let e=arguments.length>=2;return i=>i.pipe(t?Me((r,o)=>t(r,o,i)):_n,yt(1),e?YS(n):QS(()=>new Co))}function Bd(t){return t<=0?()=>at:we((n,e)=>{let i=[];n.subscribe(Se(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function Vd(){return we((t,n)=>{let e,i=!1;t.subscribe(Se(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function oc(t={}){let{connector:n=()=>new I,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let s,a,c,l=0,d=!1,f=!1,h=()=>{a?.unsubscribe(),a=void 0},m=()=>{h(),s=c=void 0,d=f=!1},p=()=>{let C=s;m(),C?.unsubscribe()};return we((C,E)=>{l++,!f&&!d&&h();let N=c=c??n();E.add(()=>{l--,l===0&&!f&&!d&&(a=sp(p,r))}),N.subscribe(E),!s&&l>0&&(s=new Ki({next:R=>N.next(R),error:R=>{f=!0,h(),a=sp(m,e,R),N.error(R)},complete:()=>{d=!0,h(),a=sp(m,i),N.complete()}}),We(C).subscribe(s))})(o)}}function sp(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new Ki({next:()=>{i.unsubscribe(),t()}});return We(n(...e)).subscribe(i)}function jd(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,oc({connector:()=>new Za(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function ap(t){return Me((n,e)=>t<=e)}function Ot(...t){let n=vi(t);return we((e,i)=>{(n?Ns(t,e,n):Ns(t,e)).subscribe(i)})}function Xe(t,n){return we((e,i)=>{let r=null,o=0,s=!1,a=()=>s&&!r&&i.complete();e.subscribe(Se(i,c=>{r?.unsubscribe();let l=0,d=o++;We(t(c,d)).subscribe(r=Se(i,f=>i.next(n?n(c,f,d,l++):f),()=>{r=null,a()}))},()=>{s=!0,a()}))})}function Be(t){return we((n,e)=>{We(t).subscribe(Se(e,()=>e.complete(),yo)),!e.closed&&n.subscribe(e)})}function Ft(t,n,e){let i=be(t)||n||e?{next:t,error:n,complete:e}:t;return i?we((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let a=!0;r.subscribe(Se(o,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),o.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),o.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),o.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):_n}var Wd="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",D=class extends Error{code;constructor(n,e){super(fn(n,e)),this.code=n}};function Lk(t){return`NG0${Math.abs(t)}`}function fn(t,n){return`${Lk(t)}${n?": "+n:""}`}function Ue(t){for(let n in t)if(t[n]===Ue)return n;throw Error("")}function nw(t,n){for(let e in n)Object.hasOwn(n,e)&&!Object.hasOwn(t,e)&&(t[e]=n[e])}function fc(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(fc).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function Kd(t,n){return t?n?`${t} ${n}`:t:n||""}var Bk=Ue({__forward_ref__:Ue});function Nt(t){return t.__forward_ref__=Nt,t}function Bt(t){return Sp(t)?t():t}function Sp(t){return typeof t=="function"&&Object.hasOwn(t,Bk)&&t.__forward_ref__===Nt}function z(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function F(t){return{providers:t.providers||[],imports:t.imports||[]}}function hc(t){return Vk(t,Yd)}function wp(t){return hc(t)!==null}function Vk(t,n){return Object.hasOwn(t,n)&&t[n]||null}function jk(t){let n=t?.[Yd]??null;return n||null}function lp(t){return t&&Object.hasOwn(t,Hd)?t[Hd]:null}var Yd=Ue({\u0275prov:Ue}),Hd=Ue({\u0275inj:Ue}),b=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=z({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Cp(t){return t&&!!t.\u0275providers}var mc=Ue({\u0275cmp:Ue}),pc=Ue({\u0275dir:Ue}),Dp=Ue({\u0275pipe:Ue}),xp=Ue({\u0275mod:Ue}),cc=Ue({\u0275fac:Ue}),Mo=Ue({__NG_ELEMENT_ID__:Ue}),ZS=Ue({__NG_ENV_ID__:Ue});function iw(t){return Qd(t,"@NgModule"),t[xp]||null}function er(t){return Qd(t,"@Component"),t[mc]||null}function Ep(t){return Qd(t,"@Directive"),t[pc]||null}function rw(t){return Qd(t,"@Pipe"),t[Dp]||null}function Qd(t,n){if(t==null)throw new D(-919,!1)}function tr(t){return typeof t=="string"?t:t==null?"":String(t)}var ow=Ue({ngErrorCode:Ue}),Uk=Ue({ngErrorMessage:Ue}),Hk=Ue({ngTokenPath:Ue});function Ip(t,n){return sw("",-200,n)}function Zd(t,n){throw new D(-201,!1)}function sw(t,n,e){let i=new D(n,t);return i[ow]=n,i[Uk]=t,e&&(i[Hk]=e),i}function zk(t){return t[ow]}var dp;function aw(){return dp}function bn(t){let n=dp;return dp=t,n}function Np(t,n,e){let i=hc(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;Zd(t,"")}var Wt=globalThis;var $k={},Do=$k,Gk="__NG_DI_FLAG__",up=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=xo(e)||0;try{return this.injector.get(n,i&8?null:Do,i)}catch(r){if(ws(r))return r;throw r}}};function qk(t,n=0){let e=sd();if(e===void 0)throw new D(-203,!1);if(e===null)return Np(t,void 0,n);{let i=Wk(n),r=e.retrieve(t,i);if(ws(r)){if(i.optional)return null;throw r}return r}}function T(t,n=0){return(aw()||qk)(Bt(t),n)}function u(t,n){return T(t,xo(n))}function xo(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function Wk(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function fp(t){let n=[];for(let e=0;e<t.length;e++){let i=Bt(t[e]);if(Array.isArray(i)){if(i.length===0)throw new D(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],c=Kk(a);typeof c=="number"?c===-1?r=a.token:o|=c:r=a}n.push(T(r,o))}else n.push(T(i))}return n}function Kk(t){return t[Gk]}function Eo(t,n){let e=Object.hasOwn(t,cc);return e?t[cc]:null}function cw(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function lw(t){return t.flat(Number.POSITIVE_INFINITY)}function Xd(t,n){t.forEach(e=>Array.isArray(e)?Xd(e,n):n(e))}function Mp(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function gc(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function dw(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function uw(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function Jd(t,n,e){let i=As(t,n);return i>=0?t[i|1]=e:(i=~i,uw(t,i,n,e)),i}function eu(t,n){let e=As(t,n);if(e>=0)return t[e|1]}function As(t,n){return Yk(t,n,1)}function Yk(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),s=t[o<<e];if(n===s)return o<<e;s>n?r=o:i=o+1}return~(r<<e)}var Or={},qt=[],Os=new b(""),vc=new b("",-1),Tp=new b(""),ks=class{get(n,e=Do){if(e===Do){let r=sw("",-201);throw r.name="\u0275NotFound",r}return e}};function Kn(t){return{\u0275providers:t}}function fw(...t){return{\u0275providers:kp(!0,t),\u0275fromNgModule:!0}}function kp(t,...n){let e=[],i=new Set,r,o=s=>{e.push(s)};return Xd(n,s=>{let a=s;zd(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&hw(r,o),e}function hw(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];Rp(r,o=>{n(o,i)})}}function zd(t,n,e,i){if(t=Bt(t),!t)return!1;let r=null,o=lp(t),s=!o&&er(t);if(!o&&!s){let c=t.ngModule;if(o=lp(c),o)r=c;else return!1}else{if(s&&!s.standalone)return!1;r=t}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let c=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of c)zd(l,n,e,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let l;Xd(o.imports,d=>{zd(d,n,e,i)&&(l||=[],l.push(d))}),l!==void 0&&hw(l,n)}if(!a){let l=Eo(r)||(()=>new r);n({provide:r,useFactory:l,deps:qt},r),n({provide:Tp,useValue:r,multi:!0},r),n({provide:Os,useValue:()=>T(r),multi:!0},r)}let c=o.providers;if(c!=null&&!a){let l=t;Rp(c,d=>{n(d,l)})}}else return!1;return r!==t&&t.providers!==void 0}function Rp(t,n){for(let e of t)Cp(e)&&(e=e.\u0275providers),Array.isArray(e)?Rp(e,n):n(e)}var Qk=Ue({provide:String,useValue:Ue});function mw(t){return t!==null&&typeof t=="object"&&Qk in t}function Zk(t){return!!(t&&t.useExisting)}function Xk(t){return!!(t&&t.useFactory)}function Io(t){return typeof t=="function"}function pw(t){return!!t.useClass}var yc=new b(""),Ud={},XS={},cp;function Fs(){return cp===void 0&&(cp=new ks),cp}var He=class{},No=class extends He{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,mp(n,s=>this.processProvider(s)),this.records.set(vc,Ts(void 0,this)),r.has("environment")&&this.records.set(He,Ts(void 0,this));let o=this.records.get(yc);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Tp,qt,{self:!0}))}retrieve(n,e){let i=xo(e)||0;try{return this.get(n,Do,i)}catch(r){if(ws(r))return r;throw r}}destroy(){sc(this),this._destroyed=!0;let n=ce(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),ce(n)}}onDestroy(n){return sc(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){sc(this);let e=gi(this),i=bn(void 0),r;try{return n()}finally{gi(e),bn(i)}}get(n,e=Do,i){if(sc(this),Object.hasOwn(n,ZS))return n[ZS](this);let r=xo(i),o,s=gi(this),a=bn(void 0);try{if(!(r&4)){let l=this.records.get(n);if(l===void 0){let d=iR(n)&&hc(n);d&&this.injectableDefInScope(d)?l=Ts(hp(n),Ud):l=null,this.records.set(n,l)}if(l!=null)return this.hydrate(n,l,r)}let c=r&2?Fs():this.parent;return e=r&8&&e===Do?null:e,c.get(n,e)}catch(c){let l=zk(c);throw l===-200||l===-201?new D(l,null):c}finally{bn(a),gi(s)}}resolveInjectorInitializers(){let n=ce(null),e=gi(this),i=bn(void 0),r;try{let o=this.get(Os,qt,{self:!0});for(let s of o)s()}finally{gi(e),bn(i),ce(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=Bt(n);let e=Io(n)?n:Bt(n&&n.provide),i=eR(n);if(!Io(n)&&n.multi===!0){let r=this.records.get(e);r||(r=Ts(void 0,Ud,!0),r.factory=()=>fp(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=ce(null);try{if(e.value===XS)throw Ip("");return e.value===Ud&&(e.value=XS,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&nR(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{ce(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=Bt(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function hp(t){let n=hc(t),e=n!==null?n.factory:Eo(t);if(e!==null)return e;if(t instanceof b)throw new D(-204,!1);if(t instanceof Function)return Jk(t);throw new D(-204,!1)}function Jk(t){if(t.length>0)throw new D(-204,!1);let e=jk(t);return e!==null?()=>e.factory(t):()=>new t}function eR(t){if(mw(t))return Ts(void 0,t.useValue);{let n=Ap(t);return Ts(n,Ud)}}function Ap(t,n,e){let i;if(Io(t)){let r=Bt(t);return Eo(r)||hp(r)}else if(mw(t))i=()=>Bt(t.useValue);else if(Xk(t))i=()=>t.useFactory(...fp(t.deps||[]));else if(Zk(t))i=(r,o)=>T(Bt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Bt(t&&(t.useClass||t.provide));if(tR(t))i=()=>new r(...fp(t.deps));else return Eo(r)||hp(r)}return i}function sc(t){if(t.destroyed)throw new D(-205,!1)}function Ts(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function tR(t){return!!t.deps}function nR(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function iR(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function mp(t,n){for(let e of t)Array.isArray(e)?mp(e,n):e&&Cp(e)?mp(e.\u0275providers,n):n(e)}function Dt(t,n){let e;t instanceof No?(sc(t),e=t):e=new up(t);let i,r=gi(e),o=bn(void 0);try{return n()}finally{gi(r),bn(o)}}function Op(){return aw()!==void 0||sd()!=null}var Yn=0,oe=1,fe=2,It=3,On=4,Kt=5,To=6,Ps=7,_t=8,_i=9,Qn=10,Ye=11,Ls=12,Fp=13,Fr=14,on=15,Pr=16,ko=17,bi=18,Si=19,Pp=20,Zi=21,tu=22,Xi=23,Sn=24,Ro=25,wi=26,ut=27,gw=1,Lp=6,Ao=7,_c=8,Oo=9,ct=10;function nr(t){return Array.isArray(t)&&typeof t[gw]=="object"}function Fn(t){return Array.isArray(t)&&t[gw]===!0}function Bp(t){return(t.flags&4)!==0}function ir(t){return t.componentOffset>-1}function Bs(t){return(t.flags&1)===1}function Ci(t){return!!t.template}function Vs(t){return(t[fe]&512)!==0}function Fo(t){return(t[fe]&256)===256}var Oe=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t[t.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",t})(Oe||{}),ac,Rs="svg",nu="math",vw="",JS="*",pp=()=>Object.create(null);function rR(){return ac||(ac=pp(),Ar(Oe.HTML,void 0,[["iframe",["srcdoc"]],["*",["innerHTML","outerHTML"]]]),Ar(Oe.STYLE,void 0,[["*",["style"]]]),Ar(Oe.URL,void 0,[["*",["formAction"]],["area",["href"]],["a",["href","xlink:href"]],["form",["action"]],["img",["src"]],["video",["src"]]]),Ar(Oe.URL,nu,[["*",["href","xlink:href"]]]),Ar(Oe.RESOURCE_URL,void 0,[["base",["href"]],["embed",["src"]],["frame",["src"]],["iframe",["src"]],["link",["href"]],["object",["codebase","data"]]]),Ar(Oe.URL,Rs,[["a",["href","xlink:href"]]]),Ar(Oe.ATTRIBUTE_NO_BINDING,Rs,[["animate",["attributeName","values","to","from"]],["set",["to","attributeName"]],["animateMotion",["attributeName"]],["animateTransform",["attributeName"]]]),Ar(Oe.ATTRIBUTE_NO_BINDING,void 0,[["unknown",["attributeName","values","to","from","sandbox","allow","allowFullscreen","referrerPolicy","csp","fetchPriority","credentialless"]],["iframe",["sandbox","allow","allowFullscreen","referrerPolicy","csp","fetchPriority","credentialless"]]]),ac)}function Ar(t,n,e){let i=n??vw;for(let[r,o]of e){let s=r.toLowerCase();for(let a of o){let c=a.toLowerCase(),l=ac[c]??=pp(),d=l[i]??=pp();d[s]=t}}}function yw(t,n,e){let r=rR()[n.toLowerCase()];if(!r)return Oe.NONE;let o=t.toLowerCase(),s;if(e){let a=r[e];a&&(s=a[o]??a[JS])}if(s===void 0){let a=r[vw];a&&(s=a[o]??a[JS])}return s??Oe.NONE}function Vt(t){for(;Array.isArray(t);)t=t[Yn];return t}function Vp(t,n){return Vt(n[t])}function wn(t,n){return Vt(n[t.index])}function iu(t,n){return t.data[n]}function _w(t,n){return t[n]}function Pn(t,n){let e=n[t];return nr(e)?e:e[Yn]}function bw(t){return(t[fe]&4)===4}function ru(t){return(t[fe]&128)===128}function Sw(t){return Fn(t[It])}function Cn(t,n){return n==null?null:t[n]}function jp(t){t[ko]=0}function Up(t){t[fe]&1024||(t[fe]|=1024,ru(t)&&Po(t))}function ww(t,n){for(;t>0;)n=n[Fr],t--;return n}function bc(t){return!!(t[fe]&9216||t[Sn]?.dirty)}function ou(t){t[Qn].changeDetectionScheduler?.notify(8),t[fe]&64&&(t[fe]|=1024),bc(t)&&Po(t)}function Po(t){t[Qn].changeDetectionScheduler?.notify(0);let n=Ji(t);for(;n!==null&&!(n[fe]&8192||(n[fe]|=8192,!ru(n)));)n=Ji(n)}function su(t,n){if(Fo(t))throw new D(911,!1);t[Zi]===null&&(t[Zi]=[]),t[Zi].push(n)}function Cw(t,n){if(t[Zi]===null)return;let e=t[Zi].indexOf(n);e!==-1&&t[Zi].splice(e,1)}function Ji(t){let n=t[It];return Fn(n)?n[It]:n}function Hp(t){return t[Ps]??=[]}function zp(t){return t.cleanup??=[]}function Dw(t,n,e,i){let r=Hp(n);r.push(e),t.firstCreatePass&&zp(t).push(i,r.length-1)}var Ce={lFrame:Pw(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var gp=!1;function xw(){return Ce.lFrame.elementDepthCount}function Ew(){Ce.lFrame.elementDepthCount++}function $p(){Ce.lFrame.elementDepthCount--}function au(){return Ce.bindingsEnabled}function Gp(){return Ce.skipHydrationRootTNode!==null}function qp(t){return Ce.skipHydrationRootTNode===t}function Wp(){Ce.skipHydrationRootTNode=null}function de(){return Ce.lFrame.lView}function nt(){return Ce.lFrame.tView}function lt(t){return Ce.lFrame.contextLView=t,t[_t]}function dt(t){return Ce.lFrame.contextLView=null,t}function xt(){let t=Kp();for(;t!==null&&t.type===64;)t=t.parent;return t}function Kp(){return Ce.lFrame.currentTNode}function Iw(){let t=Ce.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function js(t,n){let e=Ce.lFrame;e.currentTNode=t,e.isParent=n}function Yp(){return Ce.lFrame.isParent}function Qp(){Ce.lFrame.isParent=!1}function Nw(){return Ce.lFrame.contextLView}function Zp(){return gp}function lc(t){let n=gp;return gp=t,n}function Xp(){let t=Ce.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function Mw(){return Ce.lFrame.bindingIndex}function Tw(t){return Ce.lFrame.bindingIndex=t}function Lr(){return Ce.lFrame.bindingIndex++}function cu(t){let n=Ce.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function kw(){return Ce.lFrame.inI18n}function Rw(t,n){let e=Ce.lFrame;e.bindingIndex=e.bindingRootIndex=t,lu(n)}function Aw(){return Ce.lFrame.currentDirectiveIndex}function lu(t){Ce.lFrame.currentDirectiveIndex=t}function Ow(t){let n=Ce.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function du(){return Ce.lFrame.currentQueryIndex}function Sc(t){Ce.lFrame.currentQueryIndex=t}function oR(t){let n=t[oe];return n.type===2?n.declTNode:n.type===1?t[Kt]:null}function Jp(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=oR(o),r===null||(o=o[Fr],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=Ce.lFrame=Fw();return i.currentTNode=n,i.lView=t,!0}function uu(t){let n=Fw(),e=t[oe];Ce.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function Fw(){let t=Ce.lFrame,n=t===null?null:t.child;return n===null?Pw(t):n}function Pw(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function Lw(){let t=Ce.lFrame;return Ce.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var eg=Lw;function fu(){let t=Lw();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function Bw(t){return(Ce.lFrame.contextLView=ww(t,Ce.lFrame.contextLView))[_t]}function Zn(){return Ce.lFrame.selectedIndex}function Br(t){Ce.lFrame.selectedIndex=t}function Us(){let t=Ce.lFrame;return iu(t.tView,t.selectedIndex)}function Xn(){Ce.lFrame.currentNamespace=Rs}function wc(){sR()}function sR(){Ce.lFrame.currentNamespace=null}function tg(){return Ce.lFrame.currentNamespace}var Vw=!0;function hu(){return Vw}function Cc(t){Vw=t}function vp(t,n=null,e=null,i){let r=ng(t,n,e,i);return r.resolveInjectorInitializers(),r}function ng(t,n=null,e=null,i,r=new Set){let o=[e||qt,fw(t)],s;return new No(o,n||Fs(),s||null,r)}var me=class t{static THROW_IF_NOT_FOUND=Do;static NULL=new ks;static create(n,e){if(Array.isArray(n))return vp({name:""},e,n,"");{let i=n.name??"";return vp({name:i},n.parent,n.providers,i)}}static \u0275prov=z({token:t,providedIn:"any",factory:()=>T(vc)});static __NG_ELEMENT_ID__=-1},J=new b(""),tt=class{static __NG_ELEMENT_ID__=aR;static __NG_ENV_ID__=n=>n},$d=class extends tt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return Fo(this._lView)}onDestroy(n){let e=this._lView;return su(e,n),()=>Cw(e,n)}};function aR(){return new $d(de())}var jw=!1,Uw=new b(""),Di=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new vt(!1);debugTaskTracker=u(Uw,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new ne(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=z({token:t,providedIn:"root",factory:()=>new t})}return t})(),yp=class extends I{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,Op()&&(this.destroyRef=u(tt,{optional:!0})??void 0,this.pendingTasks=u(Di,{optional:!0})??void 0)}emit(n){let e=ce(null);try{super.next(n)}finally{ce(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),s=i;if(n&&typeof n=="object"){let c=n;r=c.next?.bind(c),o=c.error?.bind(c),s=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return n instanceof pe&&n.add(a),a}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},se=yp;function Gd(...t){}function ig(t){let n,e;function i(){t=Gd;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch(r){}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function Hw(t){return queueMicrotask(()=>t()),()=>{t=Gd}}var rg="isAngularZone",dc=rg+"_ID",cR=0,L=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new se(!1);onMicrotaskEmpty=new se(!1);onStable=new se(!1);onError=new se(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=jw}=n;if(typeof Zone>"u")throw new D(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,uR(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(rg)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new D(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new D(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,n,lR,Gd,Gd);try{return o.runTask(s,e,i)}finally{o.cancelTask(s)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},lR={};function og(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function dR(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){ig(()=>{t.callbackScheduled=!1,_p(t),t.isCheckStableRunning=!0,og(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),_p(t)}function uR(t){let n=()=>{dR(t)},e=cR++;t._inner=t._inner.fork({name:"angular",properties:{[rg]:!0,[dc]:e,[dc+e]:!0},onInvokeTask:(i,r,o,s,a,c)=>{if(fR(c))return i.invokeTask(o,s,a,c);try{return ew(t),i.invokeTask(o,s,a,c)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),tw(t)}},onInvoke:(i,r,o,s,a,c,l)=>{try{return ew(t),i.invoke(o,s,a,c,l)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!hR(c)&&n(),tw(t)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,_p(t),og(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function _p(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function ew(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function tw(t){t._nesting--,og(t)}var uc=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new se;onMicrotaskEmpty=new se;onStable=new se;onError=new se;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function fR(t){return zw(t,"__ignore_ng_zone__")}function hR(t){return zw(t,"__scheduler_tick__")}function zw(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var rn=class{_console=console;handleError(n){this._console.error("ERROR",n)}},Ln=new b("",{factory:()=>{let t=u(L),n=u(He),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(rn),e.handleError(i))})}}}),$w={provide:Os,useValue:()=>{let t=u(rn,{optional:!0})},multi:!0};function G(t,n){let[e,i,r]=Hm(t,n?.equal),o=e,s=o[gt];return o.set=i,o.update=r,o.asReadonly=mu.bind(o),o}function mu(){let t=this[gt];if(t.readonlyFn===void 0){let n=()=>this();n[gt]=t,t.readonlyFn=n}return t.readonlyFn}var Lo=new b("",{factory:()=>mR}),mR="ng";var pu=new b(""),Bo=new b("",{providedIn:"platform",factory:()=>"unknown"}),Vr=new b(""),jr=new b("",{factory:()=>u(J).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Hs=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=pR}return t})();function pR(){return new Hs(de(),xt())}var yi=class{},Dc=new b("",{factory:()=>!0});var sg=new b(""),gu=(()=>{class t{static \u0275prov=z({token:t,providedIn:"root",factory:()=>new bp})}return t})(),bp=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},qd=class{[gt];constructor(n){this[gt]=n}destroy(){this[gt].destroy()}};function Yt(t,n){let e=n?.injector??u(me),i=n?.manualCleanup!==!0?e.get(tt):null,r,o=e.get(Hs,null,{optional:!0}),s=e.get(yi);return o!==null?(r=yR(o.view,s,t),i instanceof $d&&i._lView===o.view&&(i=null)):r=_R(t,e.get(gu),s),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new qd(r)}var Gw=X(w({},zm),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=lc(!1);try{$m(this)}finally{lc(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=ce(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],ce(t)}}}),gR=X(w({},Gw),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(xr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),vR=X(w({},Gw),{consumerMarkedDirty(){this.view[fe]|=8192,Po(this.view),this.notifier.notify(13)},destroy(){if(xr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[Xi]?.delete(this)}});function yR(t,n,e){let i=Object.create(vR);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=qw(i,e),t[Xi]??=new Set,t[Xi].add(i),i.consumerMarkedDirty(i),i}function _R(t,n,e){let i=Object.create(gR);return i.fn=qw(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function qw(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function Jn(t){return typeof t=="function"&&t[gt]!==void 0}var Vo=(()=>{class t{internalPendingTasks=u(Di);scheduler=u(yi);errorHandler=u(Ln);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();try{e().catch(this.errorHandler).finally(i)}catch(r){this.errorHandler(r),i()}}static \u0275prov=z({token:t,providedIn:"root",factory:()=>new t})}return t})();function Fc(t){return{toString:t}.toString()}var Ve=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(Ve||{}),Eu=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}};function R0(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var A0=null,Qe=(()=>{A0=Ww;let t=()=>Ww;return t.ngInherit=!0,t})();function TR(){return A0}function Ww(t){return t.type.prototype.ngOnChanges&&(t.setInput=RR),kR}function kR(){let t=O0(this),n=t?.current;if(n){let e=t.previous;if(e===Or)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function RR(t,n,e,i,r){let o=this.declaredInputs[i],s=O0(t)||AR(t,{previous:Or,current:null}),a=s.current||(s.current={}),c=s.previous,l=c[o];a[o]=new Eu(l&&l.currentValue,e,c===Or),R0(t,n,r,e)}var vg="__ngSimpleChanges__";function O0(t){return Object.hasOwn(t,vg)&&t[vg]||null}function AR(t,n){return t[vg]=n}var Kw=[];var qe=function(t,n=null,e){for(let i=0;i<Kw.length;i++){let r=Kw[i];r(t,n,e)}};function OR(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let s=TR()(n);(e.preOrderHooks??=[]).push(t,s),(e.preOrderCheckHooks??=[]).push(t,s)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function F0(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:d}=o;s&&(t.contentHooks??=[]).push(-e,s),a&&((t.contentHooks??=[]).push(e,a),(t.contentCheckHooks??=[]).push(e,a)),c&&(t.viewHooks??=[]).push(-e,c),l&&((t.viewHooks??=[]).push(e,l),(t.viewCheckHooks??=[]).push(e,l)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function wu(t,n,e){P0(t,n,3,e)}function Cu(t,n,e,i){(t[fe]&3)===e&&P0(t,n,e,i)}function ag(t,n){let e=t[fe];(e&3)===n&&(e&=16383,e+=1,t[fe]=e)}function P0(t,n,e,i){let r=i!==void 0?t[ko]&65535:0,o=i??-1,s=n.length-1,a=0;for(let c=r;c<s;c++)if(typeof n[c+1]=="number"){if(a=n[c],i!=null&&a>=i)break}else n[c]<0&&(t[ko]+=65536),(a<o||o==-1)&&(FR(t,e,n,c),t[ko]=(t[ko]&4294901760)+c+2),c++}function Yw(t,n){qe(Ve.LifecycleHookStart,t,n);let e=ce(null);try{n.call(t)}finally{ce(e),qe(Ve.LifecycleHookEnd,t,n)}}function FR(t,n,e,i){let r=e[i]<0,o=e[i+1],s=r?-e[i]:e[i],a=t[s];r?t[fe]>>14<t[ko]>>16&&(t[fe]&3)===n&&(t[fe]+=16384,Yw(a,o)):Yw(a,o)}var $s=-1,Ho=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function PR(t){return(t.flags&8)!==0}function LR(t){return(t.flags&16)!==0}function BR(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],s=e[i++],a=e[i++];t.setAttribute(n,s,a,o)}else{let o=r,s=e[++i];VR(o)?t.setProperty(n,o,s):t.setAttribute(n,o,s),i++}}return i}function L0(t){return t===3||t===4||t===6}function VR(t){return t.charCodeAt(0)===64}function Gs(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?Qw(t,e,r,null,n[++i]):Qw(t,e,r,null,null))}}return t}function Qw(t,n,e,i,r){let o=0,s=t.length;if(n===-1)s=-1;else for(;o<t.length;){let a=t[o++];if(typeof a=="number"){if(a===n){s=-1;break}else if(a>n){s=o-1;break}}}for(;o<t.length;){let a=t[o];if(typeof a=="number")break;if(a===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(t.splice(s,0,n),o=s+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function B0(t){return t!==$s}function Iu(t){return t&32767}function jR(t){return t>>16}function Nu(t,n){let e=jR(t),i=n;for(;e>0;)i=i[Fr],e--;return i}var yg=!0;function Zw(t){let n=yg;return yg=t,n}var UR=256,V0=UR-1,j0=5,HR=0,xi={};function zR(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:Object.hasOwn(e,Mo)&&(i=e[Mo]),i==null&&(i=e[Mo]=HR++);let r=i&V0,o=1<<r;n.data[t+(r>>j0)]|=o}function Mu(t,n){let e=U0(t,n);if(e!==-1)return e;let i=n[oe];i.firstCreatePass&&(t.injectorIndex=n.length,cg(i.data,t),cg(n,null),cg(i.blueprint,null));let r=ev(t,n),o=t.injectorIndex;if(B0(r)){let s=Iu(r),a=Nu(r,n),c=a[oe].data;for(let l=0;l<8;l++)n[o+l]=a[s+l]|c[s+l]}return n[o+8]=r,o}function cg(t,n){t.push(0,0,0,0,0,0,0,0,n)}function U0(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function ev(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=q0(r),i===null)return $s;if(e++,r=r[Fr],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return $s}function _g(t,n,e){zR(t,n,e)}function $R(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(L0(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function H0(t,n,e){if(e&8||t!==void 0)return t;Zd(n,"NodeInjector")}function z0(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[_i],o=bn(void 0);try{return r?r.get(n,i,e&8):Np(n,i,e&8)}finally{bn(o)}}return H0(i,n,e)}function $0(t,n,e,i=0,r){if(t!==null){if(n[fe]&2048&&!(i&2)){let s=KR(t,n,e,i,xi);if(s!==xi)return s}let o=G0(t,n,e,i,xi);if(o!==xi)return o}return z0(n,e,i,r)}function G0(t,n,e,i,r){let o=qR(e);if(typeof o=="function"){if(!Jp(n,t,i))return i&1?H0(r,e,i):z0(n,e,i,r);try{let s;if(s=o(i),s==null&&!(i&8))Zd(e);else return s}finally{eg()}}else if(typeof o=="number"){let s=null,a=U0(t,n),c=$s,l=i&1?n[on][Kt]:null;for((a===-1||i&4)&&(c=a===-1?ev(t,n):n[a+8],c===$s||!Jw(i,!1)?a=-1:(s=n[oe],a=Iu(c),n=Nu(c,n)));a!==-1;){let d=n[oe];if(Xw(o,a,d.data)){let f=GR(a,n,e,s,i,l);if(f!==xi)return f}c=n[a+8],c!==$s&&Jw(i,n[oe].data[a+8]===l)&&Xw(o,a,n)?(s=d,a=Iu(c),n=Nu(c,n)):a=-1}}return r}function GR(t,n,e,i,r,o){let s=n[oe],a=s.data[t+8],c=i==null?ir(a)&&yg:i!=s&&(a.type&3)!==0,l=r&1&&o===a,d=Du(a,s,e,c,l);return d!==null?Nc(n,s,d,a,r):xi}function Du(t,n,e,i,r){let o=t.providerIndexes,s=n.data,a=o&1048575,c=t.directiveStart,l=t.directiveEnd,d=o>>20,f=i?a:a+d,h=r?a+d:l;for(let m=f;m<h;m++){let p=s[m];if(m<c&&e===p||m>=c&&p.type===e)return m}if(r){let m=s[c];if(m&&Ci(m)&&m.type===e)return c}return null}function Nc(t,n,e,i,r){let o=t[e],s=n.data;if(o instanceof Ho){let a=o;if(a.resolving)throw Ip("");let c=Zw(a.canSeeViewProviders);a.resolving=!0;let l=s[e].type||s[e],d,f=a.injectImpl?bn(a.injectImpl):null,h=Jp(t,i,0);try{o=t[e]=a.factory(void 0,r,s,t,i),n.firstCreatePass&&e>=i.directiveStart&&OR(e,s[e],n)}finally{f!==null&&bn(f),Zw(c),a.resolving=!1,eg()}}return o}function qR(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=Object.hasOwn(t,Mo)?t[Mo]:void 0;return typeof n=="number"?n>=0?n&V0:WR:n}function Xw(t,n,e){let i=1<<t;return!!(e[n+(t>>j0)]&i)}function Jw(t,n){return!(t&2)&&!(t&1&&n)}var Ur=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return $0(this._tNode,this._lView,n,xo(i),e)}};function WR(){return new Ur(xt(),de())}function Ie(t){return Fc(()=>{let n=t.prototype.constructor,e=n[cc]||bg(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[cc]||bg(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function bg(t){return Sp(t)?()=>{let n=bg(Bt(t));return n&&n()}:Eo(t)}function KR(t,n,e,i,r){let o=t,s=n;for(;o!==null&&s!==null&&s[fe]&2048&&!Vs(s);){let a=G0(o,s,e,i|2,xi);if(a!==xi)return a;let c=o.parent;if(!c){let l=s[Pp];if(l){let d=l.get(e,xi,i&-5);if(d!==xi)return d}c=q0(s),s=s[Fr]}o=c}return r}function q0(t){let n=t[oe],e=n.type;return e===2?n.declTNode:e===1?t[Kt]:null}function Pc(t){return $R(xt(),t)}function W0(t){let n=Wt.ng;if(n&&n.\u0275compilerFacade)return n.\u0275compilerFacade;throw new Error("JIT compiler unavailable")}function $(t){return{token:t.token,providedIn:t.autoProvided===!1?null:"root",factory:t.factory,value:void 0}}function YR(){return Qs(xt(),de())}function Qs(t,n){return new U(wn(t,n))}var U=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=YR}return t})();function K0(t){return t instanceof U?t.nativeElement:t}function QR(){return this._results[Symbol.iterator]()}var Dn=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new I}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=lw(n);(this._changesDetected=!cw(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=QR};function Y0(t){return(t.flags&128)===128}var tv=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(tv||{}),Q0=new Map,ZR=0;function XR(){return ZR++}function JR(t){Q0.set(t[Si],t)}function Sg(t){Q0.delete(t[Si])}var e0="__ngContext__";function qs(t,n){nr(n)?(t[e0]=n[Si],JR(n)):t[e0]=n}function Z0(t){return J0(t[Ls])}function X0(t){return J0(t[On])}function J0(t){for(;t!==null&&!Fn(t);)t=t[On];return t}var wg;function nv(t){wg=t}function iv(){if(wg!==void 0)return wg;if(typeof document<"u")return document;throw new D(210,!1)}var eC="r";var tC="di";var rv=new b(""),nC=!1,iC=new b("",{factory:()=>nC});var Uu=new b("");var t0=new WeakMap;function eA(t,n){if(t==null||typeof t!="object")return;let e=t0.get(t);e||(e=new WeakSet,t0.set(t,e)),e.add(n)}var tA=(t,n,e,i)=>{};function nA(t,n,e,i){tA(t,n,e,i)}function Hu(t){return(t.flags&32)===32}var iA=()=>null;function rC(t,n,e=!1){return iA(t,n,e)}function oC(t,n){let e=t.contentQueries;if(e!==null){let i=ce(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],s=e[r+1];if(s!==-1){let a=t.data[s];Sc(o),a.contentQueries(2,n[s],s)}}}finally{ce(i)}}}function Cg(t,n,e){Sc(0);let i=ce(null);try{n(t,e)}finally{ce(i)}}function ov(t,n,e){if(Bp(n)){let i=ce(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let s=r;s<o;s++){let a=t.data[s];if(a.contentQueries){let c=e[s];a.contentQueries(1,c,s)}}}finally{ce(i)}}}var ni=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(ni||{});var rA={"http://www.w3.org/2000/svg":Rs,"http://www.w3.org/1998/Math/MathML":nu},vu;function oA(){if(vu===void 0&&(vu=null,Wt.trustedTypes))try{vu=Wt.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch(t){}return vu}function zu(t){return oA()?.createHTML(t)||t}var yu;function sC(){if(yu===void 0&&(yu=null,Wt.trustedTypes))try{yu=Wt.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch(t){}return yu}function n0(t){return sC()?.createHTML(t)||t}function i0(t){return sC()?.createScriptURL(t)||t}var rr=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Wd})`}},Dg=class extends rr{getTypeName(){return"HTML"}},xg=class extends rr{getTypeName(){return"Style"}},Eg=class extends rr{getTypeName(){return"Script"}},Ig=class extends rr{getTypeName(){return"URL"}},Ng=class extends rr{getTypeName(){return"ResourceURL"}};function hn(t){return t instanceof rr?t.changingThisBreaksApplicationSecurity:t}function Ii(t,n){let e=aC(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${Wd})`)}return e===n}function aC(t){return t instanceof rr&&t.getTypeName()||null}function sv(t){return new Dg(t)}function av(t){return new xg(t)}function cv(t){return new Eg(t)}function lv(t){return new Ig(t)}function dv(t){return new Ng(t)}function sA(t){let n=new Tg(t);return aA()?new Mg(n):n}var Mg=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(zu(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch(e){return null}}},Tg=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=zu(n),e}};function aA(){try{return!!new window.DOMParser().parseFromString(zu(""),"text/html")}catch(t){return!1}}var cA=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Lc(t){return t=String(t),t.match(cA)?t:"unsafe:"+t}function or(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function Bc(...t){let n={};for(let e of t)for(let i in e)Object.hasOwn(e,i)&&(n[i]=!0);return n}var cC=or("area,br,col,hr,img,wbr"),lC=or("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),dC=or("rp,rt"),lA=Bc(dC,lC),dA=Bc(lC,or("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),uA=Bc(dC,or("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),r0=Bc(cC,dA,uA,lA),uC=or("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),fA=or("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),hA=or("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),mA=Bc(uC,fA,hA),pA=or("script,style,template"),kg=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=yA(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=vA(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=o0(n).toLowerCase();if(!Object.hasOwn(r0,e))return this.sanitizedSomething=!0,!Object.hasOwn(pA,e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),s=o.name,a=s.toLowerCase();if(!Object.hasOwn(mA,a)){this.sanitizedSomething=!0;continue}let c=o.value;uC[a]&&(c=Lc(c)),this.buf.push(" ",s,'="',s0(c),'"')}return this.buf.push(">"),!0}endElement(n){let e=o0(n).toLowerCase();Object.hasOwn(r0,e)&&!Object.hasOwn(cC,e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(s0(n))}};function gA(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function vA(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw fC(n);return n}function yA(t){let n=t.firstChild;if(n&&gA(t,n))throw fC(n);return n}function o0(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function fC(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var _A=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,bA=/([^\#-~ |!])/g;function s0(t){return t.replace(/&/g,"&amp;").replace(_A,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(bA,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var _u;function $u(t,n){let e=null;try{_u=_u||sA(t);let i=n?String(n):"";e=_u.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=_u.getInertBodyElement(i)}while(i!==o);let a=new kg().sanitizeChildren(a0(e)||e);return zu(a)}finally{if(e){let i=a0(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function a0(t){return"content"in t&&SA(t)?t.content:null}function SA(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}var wA=/^>|^->|<!--|-->|--!>|<!-$/g,CA=/(<|>)/g,DA="\u200B$1\u200B";function xA(t){return t.replace(wA,n=>n.replace(CA,DA))}function EA(t,n){return t.createText(n)}function IA(t,n,e){t.setValue(n,e)}function NA(t,n){return t.createComment(xA(n))}function hC(t,n,e){return t.createElement(n,e)}function jo(t,n,e,i,r){t.insertBefore(n,e,i,r)}function mC(t,n,e){t.appendChild(n,e)}function c0(t,n,e,i,r){i!==null?jo(t,n,e,i,r):mC(t,n,e)}function pC(t,n,e,i){t.removeChild(null,n,e,i)}function MA(t,n,e){t.setAttribute(n,"style",e)}function TA(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function gC(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&BR(t,n,i),r!==null&&TA(t,n,r),o!==null&&MA(t,n,o)}function kA(t,n=!0){if(t[0]!=":")return[null,t];let e=t.indexOf(":",1);if(e===-1){if(n)throw new Error(`Unsupported format "${t}" expecting ":namespace:name"`);return[null,t]}return[t.slice(1,e),t.slice(e+1)]}function uv(t,n,e){if(n!==void 0&&e!==void 0&&yC(n,e)!==Oe.HTML)return t;let i=hv();return i?n0(i.sanitize(Oe.HTML,t)||""):Ii(t,"HTML")?n0(hn(t)):$u(iv(),tr(t))}function Bn(t){let n=hv();return n?n.sanitize(Oe.URL,t)||"":Ii(t,"URL")?hn(t):Lc(tr(t))}function vC(t){let n=hv();if(n)return i0(n.sanitize(Oe.RESOURCE_URL,t)||"");if(Ii(t,"ResourceURL"))return i0(hn(t));throw new D(904,!1)}function RA(t,n){switch(yC(t,n)){case Oe.RESOURCE_URL:return vC;case Oe.URL:return Bn;default:return null}}function fv(t,n,e){return RA(n,e)?.(t)??t}function hv(){let t=de();return t&&t[Qn].sanitizer}function yC(t,n){let[e,i]=AA(t);return yw(i,n,e)}function AA(t){t=t.toLowerCase();let n=kA(t,!1);if(n[0])return n;let i=Zn()===-1?null:Us(),r=i?.namespace;if(t==="#host"&&i?.type===2){let o=wn(i,de());if(o.tagName&&(t=o.tagName.toLowerCase()),r==null){let s=o.namespaceURI;r=s&&rA[s]}}return[r,t]}function OA(t){return t instanceof Function?t():t}function FA(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var _C="ng-template";function PA(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&FA(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(mv(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function mv(t){return t.type===4&&t.value!==_C}function LA(t,n,e){let i=t.type===4&&!e?_C:t.value;return n===i}function BA(t,n,e){let i=4,r=t.attrs,o=r!==null?UA(r):0,s=!1;for(let a=0;a<n.length;a++){let c=n[a];if(typeof c=="number"){if(!s&&!ei(i)&&!ei(c))return!1;if(s&&ei(c))continue;s=!1,i=c|i&1;continue}if(!s)if(i&4){if(i=2|i&1,c!==""&&!LA(t,c,e)||c===""&&n.length===1){if(ei(i))return!1;s=!0}}else if(i&8){if(r===null||!PA(t,r,c,e)){if(ei(i))return!1;s=!0}}else{let l=n[++a],d=VA(c,r,mv(t),e);if(d===-1){if(ei(i))return!1;s=!0;continue}if(l!==""){let f;if(d>o?f="":f=r[d+1].toLowerCase(),i&2&&l!==f){if(ei(i))return!1;s=!0}}}}return ei(i)||s}function ei(t){return(t&1)===0}function VA(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let s=n[r];if(s===t)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=n[++r];for(;typeof a=="string";)a=n[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return HA(n,t)}function bC(t,n,e=!1){for(let i=0;i<n.length;i++)if(BA(t,n[i],e))return!0;return!1}function jA(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function UA(t){for(let n=0;n<t.length;n++){let e=t[n];if(L0(e))return n}return t.length}function HA(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function zA(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function l0(t,n){return t?":not("+n.trim()+")":n}function $A(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let s=t[e];if(typeof s=="string")if(i&2){let a=t[++e];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!ei(s)&&(n+=l0(o,r),r=""),i=s,o=o||!ei(i);e++}return r!==""&&(n+=l0(o,r)),n}function GA(t){return t.map($A).join(",")}function qA(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!ei(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var Qt={},ii=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(ii||{}),WA;function pv(t,n){return WA(t,n)}var Hr=new Set;var C6=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Rg=new WeakMap;function SC(t){return t?t[Fr]??t:null}var xc=new WeakSet;function KA(t,n,e){let i=Rg.get(t);if(!i||i.length===0)return;let r=n.parentNode,o=n.previousSibling,s=SC(e);for(let a=i.length-1;a>=0;a--){let{el:c,declarationView:l}=i[a],d=c.parentNode;c===n?(i.splice(a,1),xc.add(c),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):o&&c===o?(i.splice(a,1),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),c.parentNode?.removeChild(c)):d&&r&&d!==r&&(s===null||l===null||s===l)&&(i.splice(a,1),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),c.parentNode?.removeChild(c))}}function YA(t,n,e){let i=SC(e),r=Rg.get(t);r?r.some(o=>o.el===n)||r.push({el:n,declarationView:i}):Rg.set(t,[{el:n,declarationView:i}])}var Gu=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(Gu||{}),ri=new b(""),d0=new Set;function Vn(t){d0.has(t)||(d0.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var qu=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=z({token:t,providedIn:"root",factory:()=>new t})}return t})(),gv=[0,1,2,3],vv=(()=>{class t{ngZone=u(L);scheduler=u(yi);errorHandler=u(rn,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(ri,{optional:!0})}execute(){let e=this.sequences.size>0;e&&qe(Ve.AfterRenderHooksStart),this.executing=!0;for(let i of gv)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&qe(Ve.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[Ro]??=[]).push(e),Po(i),i[fe]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(Gu.AFTER_NEXT_RENDER,e):e()}static \u0275prov=z({token:t,providedIn:"root",factory:()=>new t})}return t})(),Mc=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,s=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[Ro];n&&(this.view[Ro]=n.filter(e=>e!==this))}};function jt(t,n){let e=n?.injector??u(me);return Vn("NgAfterNextRender"),ZA(t,e,n,!0)}function QA(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function ZA(t,n,e,i){let r=n.get(qu);r.impl??=n.get(vv);let o=n.get(ri,null,{optional:!0}),s=e?.manualCleanup!==!0?n.get(tt):null,a=n.get(Hs,null,{optional:!0}),c=new Mc(r.impl,QA(t),a?.view,i,s,o?.snapshot(null));return r.impl.register(c),c}var yv=new b("",{factory:()=>{let t=u(He),n=new Set;return t.onDestroy(()=>n.clear()),{queue:n,isScheduled:!1,scheduler:null,injector:t}}});function wC(t,n,e){let i=t.get(yv);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function XA(t,n){let e=t.get(yv);if(Array.isArray(n))for(let i of n)e.queue.delete(i);else e.queue.delete(n)}function JA(t,n){let e=t.get(yv);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function eO(t,n){for(let[e,i]of n)wC(t,i.animateFns)}function u0(t,n,e,i){let r=t?.[wi]?.enter;n!==null&&r&&r.has(e.index)&&eO(i,r)}function f0(t,n,e,i){try{e.get(vc)}catch(s){return i(!1)}let r=t?.[wi];r?.enter?.has(n.index)&&XA(e,r.enter.get(n.index).animateFns);let o=tO(t,n,r);if(o.size===0){let s=!1;if(t){let a=[];Wu(t,n,a),s=a.length>0}if(!s)return i(!1)}t&&Hr.add(t[Si]),wC(e,()=>nO(t,n,r||void 0,o,i),r||void 0)}function tO(t,n,e){let i=new Map,r=e?.leave;if(r&&r.has(n.index)&&i.set(n.index,r.get(n.index)),t&&r)for(let[o,s]of r){if(i.has(o))continue;let c=t[oe].data[o].parent;for(;c;){if(c===n){i.set(o,s);break}c=c.parent}}return i}function nO(t,n,e,i,r){let o=[];if(e&&e.leave)for(let[s]of i){if(!e.leave.has(s))continue;let a=e.leave.get(s);for(let c of a.animateFns){let{promise:l}=c();o.push(l)}e.detachedLeaveAnimationFns=void 0}if(t&&Wu(t,n,o),o.length>0){let s=e||t?.[wi];if(s){let a=s.running;a&&o.push(a),s.running=Promise.allSettled(o),rO(t,s.running,r)}else Promise.allSettled(o).then(()=>{t&&Hr.delete(t[Si]),r(!0)})}else t&&Hr.delete(t[Si]),r(!1)}function Wu(t,n,e){if(n.type&12){let r=t[n.index];if(Fn(r))for(let o=ct;o<r.length;o++){let s=r[o];s[oe].type===2&&iO(s,e)}}let i=n.child;for(;i;)Wu(t,i,e),i=i.next}function iO(t,n){let e=t[wi];if(e&&e.leave)for(let r of e.leave.values())for(let o of r.animateFns){let{promise:s}=o();n.push(s)}let i=t[oe].firstChild;for(;i;)Wu(t,i,n),i=i.next}function rO(t,n,e){n.then(()=>{t[wi]?.running===n&&(t[wi].running=void 0,Hr.delete(t[Si])),e(!0)})}function zs(t,n,e,i,r,o,s,a){if(r!=null){let c,l=!1;Fn(r)?c=r:nr(r)&&(l=!0,r=r[Yn]);let d=Vt(r);t===0&&i!==null?(u0(a,i,o,e),s==null?mC(n,i,d):jo(n,i,d,s||null,!0)):t===1&&i!==null?(u0(a,i,o,e),jo(n,i,d,s||null,!0),KA(o,d,a)):t===2?(a?.[wi]?.leave?.has(o.index)&&YA(o,d,a),xc.delete(d),f0(a,o,e,f=>{if(xc.has(d)){xc.delete(d);return}pC(n,d,l,f)})):t===3&&(xc.delete(d),f0(a,o,e,()=>{n.destroyNode(d)})),c!=null&&pO(n,t,e,c,o,i,s)}}function oO(t,n){CC(t,n),n[Yn]=null,n[Kt]=null}function sO(t,n,e,i,r,o){i[Yn]=r,i[Kt]=n,Yu(t,i,e,1,r,o)}function CC(t,n){n[Qn].changeDetectionScheduler?.notify(9),Yu(t,n,n[Ye],2,null,null)}function aO(t){let n=t[Ls];if(!n)return lg(t[oe],t);for(;n;){let e=null;if(nr(n))e=n[Ls];else{let i=n[ct];i&&(e=i)}if(!e){for(;n&&!n[On]&&n!==t;)nr(n)&&lg(n[oe],n),n=n[It];n===null&&(n=t),nr(n)&&lg(n[oe],n),e=n&&n[On]}n=e}}function _v(t,n){let e=t[Oo],i=e.indexOf(n);e.splice(i,1)}function Ku(t,n){if(Fo(n))return;let e=n[Ye];e.destroyNode&&Yu(t,n,e,3,null,null),aO(n)}function lg(t,n){if(Fo(n))return;let e=ce(null);try{n[fe]&=-129,n[fe]|=256,n[Sn]&&xr(n[Sn]),lO(t,n),cO(t,n),n[oe].type===1&&n[Ye].destroy();let i=n[Pr];if(i!==null&&Fn(n[It])){i!==n[It]&&_v(i,n);let r=n[bi];r!==null&&r.detachView(t)}Sg(n)}finally{ce(e)}}function cO(t,n){let e=t.cleanup,i=n[Ps];if(e!==null)for(let s=0;s<e.length-1;s+=2)if(typeof e[s]=="string"){let a=e[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[e[s+1]];e[s].call(a)}i!==null&&(n[Ps]=null);let r=n[Zi];if(r!==null){n[Zi]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=n[Xi];if(o!==null){n[Xi]=null;for(let s of o)s.destroy()}}function lO(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof Ho)){let o=e[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],c=o[s+1];qe(Ve.LifecycleHookStart,a,c);try{c.call(a)}finally{qe(Ve.LifecycleHookEnd,a,c)}}else{qe(Ve.LifecycleHookStart,r,o);try{o.call(r)}finally{qe(Ve.LifecycleHookEnd,r,o)}}}}}function DC(t,n,e){return dO(t,n.parent,e)}function dO(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[Yn];if(ir(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===ni.None||r===ni.Emulated)return null}return wn(i,e)}function xC(t,n,e){return fO(t,n,e)}function uO(t,n,e){return t.type&40?wn(t,e):null}var fO=uO,h0;function bv(t,n,e,i){let r=DC(t,i,n),o=n[Ye],s=i.parent||n[Kt],a=xC(s,i,n);if(r!=null)if(Array.isArray(e))for(let c=0;c<e.length;c++)c0(o,r,e[c],a,!1);else c0(o,r,e,a,!1);h0!==void 0&&h0(o,i,n,e,r)}function Ec(t,n){if(n!==null){let e=n.type;if(e&3)return wn(n,t);if(e&4)return Ag(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return Ec(t,i);{let r=t[n.index];return Fn(r)?Ag(-1,r):Vt(r)}}else{if(e&128)return Ec(t,n.next);if(e&32)return pv(n,t)()||Vt(t[n.index]);{let i=EC(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=Ji(t[on]);return Ec(r,i)}else return Ec(t,n.next)}}}return null}function EC(t,n){if(n!==null){let i=t[on][Kt],r=n.projection;return i.projection[r]}return null}function Ag(t,n){let e=ct+t+1;if(e<n.length){let i=n[e],r=i[oe].firstChild;if(r!==null)return Ec(i,r)}return n[Ao]}function Sv(t,n,e,i,r,o,s){for(;e!=null;){let a=i[_i];if(e.type===128){e=e.next;continue}let c=i[e.index],l=e.type;if(s&&n===0&&(c&&qs(Vt(c),i),e.flags|=2),!Hu(e))if(l&8)Sv(t,n,e.child,i,r,o,!1),zs(n,t,a,r,c,e,o,i);else if(l&32){let d=pv(e,i),f;for(;f=d();)zs(n,t,a,r,f,e,o,i);zs(n,t,a,r,c,e,o,i)}else l&16?IC(t,n,i,e,r,o):zs(n,t,a,r,c,e,o,i);e=s?e.projectionNext:e.next}}function Yu(t,n,e,i,r,o){t.type===3?hO(e,i,n,r,o):Sv(e,i,t.firstChild,n,r,o,!1)}function hO(t,n,e,i,r){let s=e[oe].firstChild,a=s.next,c=Vt(e[s.index]),l=Vt(e[a.index]),d=a.index+1,f=e[d];if(n===1||n===0)i!==null&&(f&&f.hasChildNodes()?jo(t,i,f,r,!0):(jo(t,i,c,r,!0),jo(t,i,l,r,!0)));else if(n===2){if(f||(f=document.createDocumentFragment(),e[d]=f),c&&c.parentNode===f)return;let h=c;for(;h!==null;){let m=h.nextSibling;if(f.appendChild(h),h===l)break;h=m}}}function mO(t,n,e){let i=n[Ye],r=DC(t,e,n),o=e.parent||n[Kt],s=xC(o,e,n);IC(i,0,n,e,r,s)}function IC(t,n,e,i,r,o){let s=e[on],c=s[Kt].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let d=c[l];zs(n,t,e[_i],r,d,i,o,e)}else{let l=c,d=s[It];Y0(i)&&(l.flags|=128),Sv(t,n,l,d,r,o,!0)}}function pO(t,n,e,i,r,o,s){let a=i[Ao],c=Vt(i);if(a!==c&&zs(n,t,e,o,a,r,s),(i[fe]&4)===0)for(let l=ct;l<i.length;l++){let d=i[l];Yu(d[oe],d,t,n,o,a)}}function gO(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:ii.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=ii.Important),t.setStyle(e,i,r,o))}}function wv(t,n,e,i,r,o,s,a,c,l,d){let f=ut+i,h=f+r,m=vO(f,h),p=typeof l=="function"?l():l;return m[oe]={type:t,blueprint:m,template:e,queries:null,viewQuery:a,declTNode:n,data:m.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:c,consts:p,incompleteFirstPass:!1,ssrId:d}}function vO(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:Qt);return e}function yO(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=wv(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function Cv(t,n,e,i,r,o,s,a,c,l,d){let f=n.blueprint.slice();return f[Yn]=r,f[fe]=i|4|128|8|64|1024,(l!==null||t&&t[fe]&2048)&&(f[fe]|=2048),jp(f),f[It]=f[Fr]=t,f[_t]=e,f[Qn]=s||t&&t[Qn],f[Ye]=a||t&&t[Ye],f[_i]=c||t&&t[_i]||null,f[Kt]=o,f[Si]=XR(),f[To]=d,f[Pp]=l,f[on]=n.type==2?t[on]:f,f}function _O(t,n,e){let i=wn(n,t),r=yO(e),o=t[Qn].rendererFactory,s=Dv(t,Cv(t,r,null,NC(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=s}function NC(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function MC(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function Dv(t,n){return t[Ls]?t[Fp][On]=n:t[Ls]=n,t[Fp]=n,n}function S(t=1){TC(nt(),de(),Zn()+t,!1)}function TC(t,n,e,i){if(!i)if((n[fe]&3)===3){let o=t.preOrderCheckHooks;o!==null&&wu(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Cu(n,o,0,e)}Br(e)}var Qu=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(Qu||{});function zo(t,n,e,i){let r=ce(null);try{let[o,s,a]=t.inputs[e],c=null;(s&Qu.SignalBased)!==0&&(c=n[o][gt]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(n,i)),t.setInput!==null?t.setInput(n,c,i,e,o):R0(n,c,o,i)}finally{ce(r)}}function kC(t,n,e,i,r){let o=Zn(),s=i&2;try{Br(-1),s&&n.length>ut&&TC(t,n,ut,!1);let a=s?Ve.TemplateUpdateStart:Ve.TemplateCreateStart;qe(a,r,e),e(i,r)}finally{Br(o);let a=s?Ve.TemplateUpdateEnd:Ve.TemplateCreateEnd;qe(a,r,e)}}function Zu(t,n,e){EO(t,n,e),(e.flags&64)===64&&IO(t,n,e)}function Vc(t,n,e=wn){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?e(n,t):t[s];t[r++]=a}}}function bO(t,n,e,i){let o=i.get(iC,nC)||e===ni.ShadowDom||e===ni.ExperimentalIsolatedShadowDom,s=t.selectRootElement(n,o);return SO(s),s}function SO(t){wO(t)}var wO=()=>null;function CO(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function DO(t,n,e,i,r,o){let s=n[oe];if(Nv(t,s,n,e,i)){ir(t)&&xO(n,t.index);return}t.type&3&&(e=CO(e)),RC(t,n,e,i,r,o)}function RC(t,n,e,i,r,o){if(t.type&3){let s=wn(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(s,e,i)}else t.type&12}function xO(t,n){let e=Pn(n,t);e[fe]&16||(e[fe]|=64)}function EO(t,n,e){let i=e.directiveStart,r=e.directiveEnd;ir(e)&&_O(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||Mu(e,n);let o=e.initialInputs;for(let s=i;s<r;s++){let a=t.data[s],c=Nc(n,t,s,e);if(qs(c,n),o!==null&&kO(n,s-i,c,a,e,o),Ci(a)){let l=Pn(e.index,n);l[_t]=Nc(n,t,s,e)}}}function IO(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,s=Aw();try{Br(o);for(let a=i;a<r;a++){let c=t.data[a],l=n[a];lu(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&NO(c,l)}}finally{Br(-1),lu(s)}}function NO(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function xv(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];bC(n,o.selectors,!1)&&(i??=[],Ci(o)?i.unshift(o):i.push(o))}return i}function MO(t,n,e,i,r,o){let s=wn(t,n);TO(n[Ye],s,o,t.value,e,i,r)}function TO(t,n,e,i,r,o,s){if(o==null)s?.(o,i||"",r),t.removeAttribute(n,r,e);else{let a=s==null?tr(o):s(o,i||"",r);t.setAttribute(n,r,a,e)}}function kO(t,n,e,i,r,o){let s=o[n];if(s!==null)for(let a=0;a<s.length;a+=2){let c=s[a],l=s[a+1];zo(i,e,c,l)}}function Ev(t,n,e,i,r){let o=ut+e,s=n[oe],a=r(s,n,t,i,e);n[o]=a,js(t,!0);let c=t.type===2;return c?(gC(n[Ye],a,t),(xw()===0||Bs(t))&&qs(a,n),Ew()):qs(a,n),hu()&&(!c||!Hu(t))&&bv(s,n,a,t),t}function Iv(t){let n=t;return Yp()?Qp():(n=n.parent,js(n,!1)),n}function RO(t,n){let e=t[_i];if(!e)return;let i;try{i=e.get(Ln,null)}catch(r){i=null}i?.(n)}function Nv(t,n,e,i,r){let o=t.inputs?.[i],s=t.hostDirectiveInputs?.[i],a=!1;if(s)for(let c=0;c<s.length;c+=2){let l=s[c],d=s[c+1],f=n.data[l];zo(f,e[l],d,r),a=!0}if(o)for(let c of o){let l=e[c],d=n.data[c];zo(d,l,i,r),a=!0}return a}function AO(t,n,e,i,r,o){let s=null,a=null,c=null,l=!1,d=t.directiveToIndex.get(i.type);if(typeof d=="number"?s=d:[s,a,c]=d,a!==null&&c!==null&&t.hostDirectiveInputs&&Object.hasOwn(t.hostDirectiveInputs,r)){let f=t.hostDirectiveInputs[r];for(let h=0;h<f.length;h+=2){let m=f[h];if(m>=a&&m<=c){let p=n.data[m],C=f[h+1];zo(p,e[m],C,o),l=!0}else if(m>c)break}}return s!==null&&Object.hasOwn(i.inputs,r)&&(zo(i,e[s],r,o),l=!0),l}function OO(t,n){let e=Pn(n,t),i=e[oe];FO(i,e);let r=e[Yn];r!==null&&e[To]===null&&(e[To]=rC(r,e[_i])),qe(Ve.ComponentStart);try{Mv(i,e,e[_t])}finally{qe(Ve.ComponentEnd,e[_t])}}function FO(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function Mv(t,n,e){uu(n);try{let i=t.viewQuery;i!==null&&Cg(1,i,e);let r=t.template;r!==null&&kC(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[bi]?.finishViewCreation(t),t.staticContentQueries&&oC(t,n),t.staticViewQueries&&Cg(2,t.viewQuery,e);let o=t.components;o!==null&&PO(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[fe]&=-5,fu()}}function PO(t,n){for(let e=0;e<n.length;e++)OO(t,n[e])}function jc(t,n,e,i){let r=ce(null);try{let o=n.tView,a=t[fe]&4096?4096:16,c=Cv(t,o,e,a,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=t[n.index];c[Pr]=l;let d=t[bi];return d!==null&&(c[bi]=d.createEmbeddedView(o)),Mv(o,c,e),c}finally{ce(r)}}function Ws(t,n){return!n||n.firstChild===null||Y0(t)}function Tc(t,n,e,i,r=!1){if(t.type===3){let o=t.firstChild,s=o.next,a=Vt(n[o.index]),c=Vt(n[s.index]),l=a;for(;l!==null&&(i.push(l),l!==c);)l=l.nextSibling;return i}for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];if(o!==null)if(Fn(o)){let a=o[Ao];a!==o[Yn]&&i.push(Vt(o)),o[fe]&4||AC(o,i),i.push(a)}else i.push(Vt(o));let s=e.type;if(s&8)Tc(t,n,e.child,i);else if(s&32){let a=pv(e,n),c;for(;c=a();)i.push(c)}else if(s&16){let a=EC(n,e);if(Array.isArray(a))i.push(...a);else{let c=Ji(n[on]);Tc(c[oe],c,a,i,!0)}}e=r?e.projectionNext:e.next}return i}function AC(t,n){for(let e=ct;e<t.length;e++){let i=t[e],r=i[oe].firstChild;r!==null&&Tc(i[oe],i,r,n)}}function OC(t){if(t[Ro]!==null){for(let n of t[Ro])n.impl.addSequence(n);t[Ro].length=0}}var FC=[];function LO(t){return t[Sn]??BO(t)}function BO(t){let n=FC.pop()??Object.create(jO);return n.lView=t,n}function VO(t){t.lView[Sn]!==t&&(t.lView=null,FC.push(t))}var jO=X(w({},wr),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Po(t.lView)},consumerOnSignalRead(){this.lView[Sn]=this}});function UO(t){let n=t[Sn]??Object.create(HO);return n.lView=t,n}var HO=X(w({},wr),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=Ji(t.lView);for(;n&&!PC(n[oe]);)n=Ji(n);n&&Up(n)},consumerOnSignalRead(){this.lView[Sn]=this}});function PC(t){return t.type!==2}function LC(t){if(t[Xi]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[Xi])if(i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()),t[Xi]===null))return;n=e&&!!(t[fe]&8192)}}var zO=100;function BC(t,n=0){let i=t[Qn].rendererFactory,r=!1;r||i.begin?.();try{$O(t,n)}finally{r||i.end?.()}}function $O(t,n){let e=Zp();try{lc(!0),Og(t,n);let i=0;for(;bc(t);){if(i===zO)throw new D(103,!1);i++,Og(t,1)}}finally{lc(e)}}function GO(t,n,e,i){if(Fo(n))return;let r=n[fe],o=!1,s=!1;uu(n);let a=!0,c=null,l=null;o||(PC(t)?(l=LO(n),c=Wi(l)):rd()===null?(a=!1,l=UO(n),c=Wi(l)):n[Sn]&&(xr(n[Sn]),n[Sn]=null));try{jp(n),Tw(t.bindingStartIndex),e!==null&&kC(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let m=t.preOrderCheckHooks;m!==null&&wu(n,m,null)}else{let m=t.preOrderHooks;m!==null&&Cu(n,m,0,null),ag(n,0)}if(s||qO(n),LC(n),VC(n,0),t.contentQueries!==null&&oC(t,n),!o)if(d){let m=t.contentCheckHooks;m!==null&&wu(n,m)}else{let m=t.contentHooks;m!==null&&Cu(n,m,1),ag(n,1)}KO(t,n);let f=t.components;f!==null&&UC(n,f,0);let h=t.viewQuery;if(h!==null&&Cg(2,h,i),!o)if(d){let m=t.viewCheckHooks;m!==null&&wu(n,m)}else{let m=t.viewHooks;m!==null&&Cu(n,m,2),ag(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[tu]){for(let m of n[tu])m();n[tu]=null}o||(OC(n),n[fe]&=-73)}catch(d){throw o||Po(n),d}finally{l!==null&&(Dr(l,c),a&&VO(l)),fu()}}function VC(t,n){for(let e=Z0(t);e!==null;e=X0(e))for(let i=ct;i<e.length;i++){let r=e[i];jC(r,n)}}function qO(t){for(let n=Z0(t);n!==null;n=X0(n)){if(!(n[fe]&2))continue;let e=n[Oo];for(let i=0;i<e.length;i++){let r=e[i];Up(r)}}}function WO(t,n,e){qe(Ve.ComponentStart);let i=Pn(n,t);try{jC(i,e)}finally{qe(Ve.ComponentEnd,i[_t])}}function jC(t,n){ru(t)&&Og(t,n)}function Og(t,n){let i=t[oe],r=t[fe],o=t[Sn],s=!!(n===0&&r&16);if(s||=!!(r&64&&n===0),s||=!!(r&1024),s||=!!(o?.dirty&&bs(o)),s||=!1,o&&(o.dirty=!1),t[fe]&=-9217,s)GO(i,t,i.template,t[_t]);else if(r&8192){let a=ce(null);try{LC(t),VC(t,1);let c=i.components;c!==null&&UC(t,c,1),OC(t)}finally{ce(a)}}}function UC(t,n,e){for(let i=0;i<n.length;i++)WO(t,n[i],e)}function KO(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)Br(~r);else{let o=r,s=e[++i],a=e[++i];Rw(s,o);let c=n[o];qe(Ve.HostBindingsUpdateStart,c);try{a(2,c)}finally{qe(Ve.HostBindingsUpdateEnd,c)}}}}finally{Br(-1)}}function Tv(t,n){let e=Zp()?64:1088;for(t[Qn].changeDetectionScheduler?.notify(n);t;){t[fe]|=e;let i=Ji(t);if(Vs(t)&&!i)return t;t=i}return null}function HC(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function zC(t,n){let e=ct+n;if(e<t.length)return t[e]}function Uc(t,n,e,i=!0){let r=n[oe];if(YO(r,n,t,e),i){let s=Ag(e,t),a=n[Ye],c=a.parentNode(t[Ao]);c!==null&&sO(r,t[Kt],a,n,c,s)}let o=n[To];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function $C(t,n){let e=kc(t,n);return e!==void 0&&Ku(e[oe],e),e}function kc(t,n){if(t.length<=ct)return;let e=ct+n,i=t[e];if(i){let r=i[Pr];r!==null&&r!==t&&_v(r,i),n>0&&(t[e-1][On]=i[On]);let o=gc(t,ct+n);oO(i[oe],i);let s=o[bi];s!==null&&s.detachView(o[oe]),i[It]=null,i[On]=null,i[fe]&=-129}return i}function YO(t,n,e,i){let r=ct+i,o=e.length;i>0&&(e[r-1][On]=n),i<o-ct?(n[On]=e[r],Mp(e,ct+i,n)):(e.push(n),n[On]=null),n[It]=e;let s=n[Pr];s!==null&&e!==s&&GC(s,n);let a=n[bi];a!==null&&a.insertView(t),ou(n),n[fe]|=128}function GC(t,n){let e=t[Oo],i=n[It];if(nr(i))t[fe]|=2;else{let r=i[It][on];n[on]!==r&&(t[fe]|=2)}e===null?t[Oo]=[n]:e.push(n)}var zr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[oe];return Tc(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[_t]}set context(n){this._lView[_t]=n}get destroyed(){return Fo(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[It];if(Fn(n)){let e=n[_c],i=e?e.indexOf(this):-1;i>-1&&(kc(n,i),gc(e,i))}this._attachedToViewContainer=!1}Ku(this._lView[oe],this._lView)}onDestroy(n){su(this._lView,n)}markForCheck(){Tv(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[fe]&=-129}reattach(){ou(this._lView),this._lView[fe]|=128}detectChanges(){this._lView[fe]|=1024,BC(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new D(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Vs(this._lView),e=this._lView[Pr];e!==null&&!n&&_v(e,this._lView),CC(this._lView[oe],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new D(902,!1);this._appRef=n;let e=Vs(this._lView),i=this._lView[Pr];i!==null&&!e&&GC(i,this._lView),ou(this._lView)}};var bt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=QO;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=jc(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new zr(o)}}return t})();function QO(){return Xu(xt(),de())}function Xu(t,n){return t.type&4?new bt(n,t,Qs(t,n)):null}function Zs(t,n,e,i,r){let o=t.data[n];if(o===null)o=ZO(t,n,e,i,r),kw()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let s=Iw();o.injectorIndex=s===null?-1:s.injectorIndex}return js(o,!0),o}function ZO(t,n,e,i,r){let o=Kp(),s=Yp(),a=s?o:o&&o.parent,c=t.data[n]=JO(t,a,e,n,i,r);return XO(t,c,o,s),c}function XO(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function JO(t,n,e,i,r,o){let s=n?n.injectorIndex:-1,a=0;return Gp()&&(a|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,namespace:tg(),attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function e1(t){let n=t[Lp]??[],i=t[It][Ye],r=[];for(let o of n)o.data[tC]!==void 0?r.push(o):t1(o,i);t[Lp]=r}function t1(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[eC];for(;e<r;){let o=i.nextSibling;pC(n,i,!1),i=o,e++}}}var n1=()=>null,i1=()=>null;function Tu(t,n){return n1(t,n)}function qC(t,n,e){return i1(t,n,e)}var WC=class{},ft=class{},ze=class{destroyNode=null;static __NG_ELEMENT_ID__=()=>r1()};function r1(){let t=de(),n=xt(),e=Pn(n.index,t);return(nr(e)?e:t)[Ye]}var KC=(()=>{class t{static \u0275prov=z({token:t,providedIn:"root",factory:()=>null})}return t})();function YC(t){return t.debugInfo?.className||t.type.name||null}var xu={},ku=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,xu,i);return r!==xu||e===xu?r:this.parentInjector.get(n,e,i)}};function kv(t){return Ju(t)?Array.isArray(t)||!(t instanceof Map)&&Symbol.iterator in t:!1}function QC(t,n){if(Array.isArray(t))for(let e=0;e<t.length;e++)n(t[e]);else{let e=t[Symbol.iterator](),i;for(;!(i=e.next()).done;)n(i.value)}}function Ju(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function ZC(t,n,e){return t[n]=e}function o1(t,n){return t[n]}function xn(t,n,e){if(e===Qt)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function s1(t,n,e,i){let r=xn(t,n,e);return xn(t,n+1,i)||r}function a1(t,n,e,i,r){let o=s1(t,n,e,i);return xn(t,n+2,r)||o}function Uo(t,n,e){return function i(r){let o=i.__ngNativeEl__;o!==void 0&&eA(r,o);let s=ir(t)?Pn(t.index,n):n;Tv(s,5);let a=n[_t],c=m0(n,a,e,r),l=i.__ngNextListenerFn__;for(;l;)c=m0(n,a,l,r)&&c,l=l.__ngNextListenerFn__;return c}}function m0(t,n,e,i){let r=ce(null);try{return qe(Ve.OutputStart,n,e),e(i)!==!1}catch(o){return RO(t,o),!1}finally{qe(Ve.OutputEnd,n,e),ce(r)}}function Rv(t,n,e,i,r,o,s,a){let c=Bs(t),l=!1,d=null;if(!i&&c&&(d=l1(n,e,o,t.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,l=!0}else{let f=wn(t,e),h=i?i(f):f;nA(e,h,o,a),i||(a.__ngNativeEl__=f);let m=r.listen(h,o,a);if(!c1(o)){let p=i?C=>i(Vt(C[t.index])):t.index;XC(p,n,e,o,a,m,!1)}}return l}function c1(t){return t.startsWith("animation")||t.startsWith("transition")}function l1(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===e&&r[o+1]===i){let a=n[Ps],c=r[o+2];return a&&a.length>c?a[c]:null}typeof s=="string"&&(o+=2)}return null}function XC(t,n,e,i,r,o,s){let a=n.firstCreatePass?zp(n):null,c=Hp(e),l=c.length;c.push(r,o),a&&a.push(i,t,l,(l+1)*(s?-1:1))}function p0(t,n,e,i,r){let o=null,s=null,a=null,c=!1,l=t.directiveToIndex.get(e.type);if(typeof l=="number"?o=l:[o,s,a]=l,s!==null&&a!==null&&t.hostDirectiveOutputs&&Object.hasOwn(t.hostDirectiveOutputs,i)){let d=t.hostDirectiveOutputs[i];for(let f=0;f<d.length;f+=2){let h=d[f];if(h>=s&&h<=a)c=!0,Ru(t,n,h,d[f+1],i,r);else if(h>a)break}}return Object.hasOwn(e.outputs,i)&&(c=!0,Ru(t,n,o,i,i,r)),c}function Ru(t,n,e,i,r,o){let s=n[e],a=n[oe],l=a.data[e].outputs[i],f=s[l].subscribe(o);XC(t.index,a,n,r,o,f,!0)}function Ni(){d1()}function d1(){let t=de(),n=nt(),e=xt();if(n.firstCreatePass&&f1(n,e),e.controlDirectiveIndex===-1)return;Vn("NgSignalForms");let i=t[e.controlDirectiveIndex];n.data[e.controlDirectiveIndex].controlDef.create(i,new Au(t,n,e))}function Mi(){u1()}function u1(){let t=de(),n=nt(),e=Us();if(e.controlDirectiveIndex===-1)return;let i=n.data[e.controlDirectiveIndex].controlDef,r=t[e.controlDirectiveIndex];i.update(r,new Au(t,n,e))}var Au=class{lView;tView;tNode;hasPassThrough;constructor(n,e,i){this.lView=n,this.tView=e,this.tNode=i,this.hasPassThrough=!!(i.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get nativeElement(){return wn(this.tNode,this.lView)}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(n,e){let i=this.tView.data[this.tNode.customControlIndex];p0(this.tNode,this.lView,i,n,Uo(this.tNode,this.lView,e))}listenToCustomControlModel(n){let e=this.tNode.flags&1024?"valueChange":"checkedChange",i=this.tView.data[this.tNode.customControlIndex];p0(this.tNode,this.lView,i,e,Uo(this.tNode,this.lView,n))}listenToDom(n,e){Rv(this.tNode,this.tView,this.lView,void 0,this.lView[Ye],n,e,Uo(this.tNode,this.lView,e))}setInputOnDirectives(n,e){let i=this.tNode.inputs?.[n],r=this.tNode.hostDirectiveInputs?.[n];if(!i&&!r)return!1;let o=!1;if(i)for(let s of i){if(s===this.tNode.controlDirectiveIndex)continue;let a=this.tView.data[s],c=this.lView[s];zo(a,c,n,e),o=!0}if(r)for(let s=0;s<r.length;s+=2){let a=r[s];if(a===this.tNode.controlDirectiveIndex)continue;let c=r[s+1],l=this.tView.data[a],d=this.lView[a];zo(l,d,c,e),o=!0}return o}setCustomControlModelInput(n){let e=this.tView.data[this.tNode.customControlIndex],i=this.tNode.flags&1024?"value":"checked";AO(this.tNode,this.tView,this.lView,e,i,n)}customControlHasInput(n){if(this.tNode.customControlIndex===-1)return!1;let e=this.tView.data[this.tNode.customControlIndex];return(e.signalFormsInputPresence??=this._buildCustomControlInputCache(e))[n]===!0}_buildCustomControlInputCache(n){let e={};for(let i in n.inputs)e[i]=!0;if(n.hostDirectives!==null){let i=[...n.hostDirectives];for(;i.length>0;){let r=i.shift();if(typeof r!="function"){for(let s in r.inputs)e[r.inputs[s]]=!0;let o=g0(r.directive);o!==null&&i.push(...o);continue}for(let o of r()){if(typeof o=="function")continue;if(o.inputs)for(let a=0;a<o.inputs.length;a+=2){let c=o.inputs[a+1]||o.inputs[a];e[c]=!0}let s=g0(o.directive);s!==null&&i.push(...s)}}}return e}};function g0(t){return typeof t=="function"&&"\u0275dir"in t?t.\u0275dir.hostDirectives??null:null}function f1(t,n,e){for(let r=n.directiveStart;r<n.directiveEnd;r++)if(t.data[r].controlDef){n.controlDirectiveIndex=r;break}if(n.controlDirectiveIndex===-1)return;let i=t.data[n.controlDirectiveIndex].controlDef;if(i.passThroughInput&&(n.inputs?.[i.passThroughInput]?.length??0)>1){n.flags|=4096;return}h1(t,n)}function h1(t,n){for(let e=n.directiveStart;e<n.directiveEnd;e++){let i=t.data[e];if(!(n.directiveToIndex&&!n.directiveToIndex.has(i.type))){if(v0(i,"value")){n.flags|=1024,n.customControlIndex=e;return}if(v0(i,"checked")){n.flags|=2048,n.customControlIndex=e;return}}}if(n.hostDirectiveInputs!==null&&n.hostDirectiveOutputs!==null&&n.directiveToIndex!==null){let e=(i,r)=>{let o=n.hostDirectiveInputs[i],s=n.hostDirectiveOutputs[i+"Change"];if(!o||!s)return!1;for(let a=0;a<o.length;a+=2){let c=o[a];for(let l=0;l<s.length;l+=2){let d=s[l];if(c===d)for(let f of n.directiveToIndex.values()){if(!Array.isArray(f))continue;let[h,m,p]=f;if(c>=m&&c<=p)return n.flags|=r,n.customControlIndex=h,!0}}}return!1};if(e("value",1024)||e("checked",2048))return}}function v0(t,n){return m1(t,n)&&p1(t,n+"Change")}function m1(t,n){return n in t.inputs}function p1(t,n){return n in t.outputs}var Fg=Symbol("BINDING");var qo=new b("");function Ou(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let s=0;s<n.length;s++){let a=n[s];if(typeof a=="number")o=a;else if(o==1)r=Kd(r,a);else if(o==2){let c=a,l=n[++s];i=Kd(i,c+": "+l+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function De(t,n=0){let e=de();if(e===null)return T(t,n);let i=xt();return $0(i,e,Bt(t),n)}function Wo(){let t="invalid";throw new Error(t)}function JC(t,n,e,i,r){let o=i===null?null:{"":-1},s=r(t,e);if(s!==null){let a=s,c=null,l=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,c,l]=d.resolveHostDirectives(s);break}y1(t,n,e,a,o,c,l)}o!==null&&i!==null&&g1(e,i,o)}function g1(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new D(-301,!1);i.push(n[r],o)}}function v1(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function y1(t,n,e,i,r,o,s){let a=i.length,c=null;for(let h=0;h<a;h++){let m=i[h];c===null&&Ci(m)&&(c=m,v1(t,e,h)),_g(Mu(e,n),t,m.type)}D1(e,t.data.length,a),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let h=0;h<a;h++){let m=i[h];m.providersResolver&&m.providersResolver(m)}let l=!1,d=!1,f=MC(t,n,a,null);a>0&&(e.directiveToIndex=new Map);for(let h=0;h<a;h++){let m=i[h];if(e.mergedAttrs=Gs(e.mergedAttrs,m.hostAttrs),b1(t,e,n,f,m),C1(f,m,r),s!==null&&s.has(m)){let[C,E]=s.get(m);e.directiveToIndex.set(m.type,[f,C+e.directiveStart,E+e.directiveStart])}else(o===null||!o.has(m))&&e.directiveToIndex.set(m.type,f);m.contentQueries!==null&&(e.flags|=4),(m.hostBindings!==null||m.hostAttrs!==null||m.hostVars!==0)&&(e.flags|=64);let p=m.type.prototype;!l&&(p.ngOnChanges||p.ngOnInit||p.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),l=!0),!d&&(p.ngOnChanges||p.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),f++}_1(t,e,o)}function _1(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))y0(0,n,r,i),y0(1,n,r,i),b0(n,i,!1);else{let o=e.get(r);_0(0,n,o,i),_0(1,n,o,i),b0(n,i,!0)}}}function y0(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(Object.hasOwn(r,o)){let s;t===0?s=n.inputs??={}:s=n.outputs??={},s[o]??=[],s[o].push(i),eD(n,o)}}function _0(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(Object.hasOwn(r,o)){let s=r[o],a;t===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),eD(n,s)}}function eD(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function b0(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||mv(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!e&&Object.hasOwn(r,c)){let l=r[c];for(let d of l)if(d===n){s??=[],s.push(c,i[a+1]);break}}else if(e&&Object.hasOwn(o,c)){let l=o[c];for(let d=0;d<l.length;d+=2)if(l[d]===n){s??=[],s.push(l[d+1],i[a+1]);break}}a+=2}t.initialInputs??=[],t.initialInputs.push(s)}function b1(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=Eo(r.type,!0)),s=new Ho(o,Ci(r),De,null);t.blueprint[i]=s,e[i]=s,S1(t,n,i,MC(t,e,r.hostVars,Qt),r)}function S1(t,n,e,i,r){let o=r.hostBindings;if(o){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~n.index;w1(s)!=a&&s.push(a),s.push(e,i,o)}}function w1(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function C1(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;Ci(n)&&(e[""]=t)}}function D1(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function Av(t,n,e,i,r,o,s,a){let c=n[oe],l=c.consts,d=Cn(l,s),f=Zs(c,t,e,i,d);return o&&JC(c,n,f,Cn(l,a),r),f.mergedAttrs=Gs(f.mergedAttrs,f.attrs),f.attrs!==null&&Ou(f,f.attrs,!1),f.mergedAttrs!==null&&Ou(f,f.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,f),f}function Ov(t,n){F0(t,n),Bp(n)&&t.queries.elementEnd(n)}function x1(t,n,e,i,r,o){let s=n.consts,a=Cn(s,r),c=Zs(n,t,e,i,a);if(c.mergedAttrs=Gs(c.mergedAttrs,c.attrs),o!=null){let l=Cn(s,o);c.localNames=[];for(let d=0;d<l.length;d+=2)c.localNames.push(l[d],-1)}return c.attrs!==null&&Ou(c,c.attrs,!1),c.mergedAttrs!==null&&Ou(c,c.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,c),c}var tD=typeof ShadowRoot<"u",E1=typeof Document<"u";function I1(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&Qu.SignalBased)!==0};return r&&(o.transform=r),o})}function N1(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function M1(t,n,e){let i=n instanceof He?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new ku(e,i):e}function T1(t){let n=t.get(ft,null);if(n===null)throw new D(407,!1);let e=t.get(KC,null),i=t.get(yi,null),r=t.get(ri,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function k1(t,n){let e=nD(t);return hC(n,e,e==="svg"?Rs:e==="math"?nu:null)}function R1(t){if((t&&"localName"in t&&typeof t.localName=="string"?t.localName:t?.tagName)?.toLowerCase()==="script")throw new D(905,!1)}function nD(t){return(t.selectors[0][0]||"div").toLowerCase()}var $o=class{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=I1(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=N1(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=GA(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,s){qe(Ve.DynamicComponentStart);let a=ce(null);try{let c=this.componentDef,l=M1(c,r||this.ngModule,n),d=T1(l),f=d.tracingService;return f&&f.componentCreate?f.componentCreate(YC(c),()=>this.createComponentRef(d,l,e,i,o,s)):this.createComponentRef(d,l,e,i,o,s)}finally{ce(a)}}createComponentRef(n,e,i,r,o,s){let a=this.componentDef,c=A1(r,a,s,o),l=n.rendererFactory.createRenderer(null,a),d=r?bO(l,r,a.encapsulation,e):k1(a,l);R1(d);let f=e.get(qo,null),h=O1(d,()=>e.get(J,null)??iv());f&&f.addHost(h);let m=s?.some(S0)||o?.some(E=>typeof E!="function"&&E.bindings.some(S0)),p=Cv(null,c,null,512|NC(a),null,null,n,l,e,null,rC(d,e,!0));f&&tD&&h instanceof ShadowRoot&&su(p,()=>{f.removeHost(h)}),p[ut]=d,uu(p);let C=null;try{let E=Av(ut,p,2,"#host",()=>c.directiveRegistry,!0,0);gC(l,d,E),qs(d,p),Zu(c,p,E),ov(c,E,p),Ov(c,E),i!==void 0&&P1(E,this.ngContentSelectors,i),C=Pn(E.index,p),p[_t]=C[_t],Mv(c,p,null)}catch(E){throw C!==null&&Sg(C),Sg(p),E}finally{qe(Ve.DynamicComponentEnd),fu()}return new Fu(this.componentType,p,!!m)}};function A1(t,n,e,i){let r=t?["ng-version","22.1.3"]:qA(n.selectors[0]),o=null,s=null,a=0;if(e)for(let d of e)a+=d[Fg].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let f=i[d];if(typeof f!="function")for(let h of f.bindings){a+=h[Fg].requiredVars;let m=d+1;h.create&&(h.targetIdx=m,(o??=[]).push(h)),h.update&&(h.targetIdx=m,(s??=[]).push(h))}}let c=[n];if(i)for(let d of i){let f=typeof d=="function"?d:d.type,h=Ep(f);c.push(h)}return wv(0,null,F1(o,s),1,a,c,null,null,null,[r],null)}function O1(t,n){let e=t.getRootNode?.();return E1&&e instanceof Document?e.head:e&&tD&&e instanceof ShadowRoot?e:n().head}function F1(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function S0(t){let n=t[Fg].kind;return n==="input"||n==="twoWay"}var Fu=class extends WC{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=iu(e[oe],ut),this.location=Qs(this._tNode,e),this.instance=Pn(this._tNode.index,e)[_t],this.hostView=this.changeDetectorRef=new zr(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=Nv(i,r[oe],r,n,e);this.previousInputValues.set(n,e);let s=Pn(i.index,r);Tv(s,1)}get injector(){return new Ur(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function P1(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var it=(()=>{class t{static __NG_ELEMENT_ID__=L1}return t})();function L1(){let t=xt();return iD(t,de())}var Pg=class t extends it{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return Qs(this._hostTNode,this._hostLView)}get injector(){return new Ur(this._hostTNode,this._hostLView)}get parentInjector(){let n=ev(this._hostTNode,this._hostLView);if(B0(n)){let e=Nu(n,this._hostLView),i=Iu(n),r=e[oe].data[i+8];return new Ur(r,e)}else return new Ur(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=w0(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-ct}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=Tu(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(e||{},o,s);return this.insertImpl(a,r,Ws(this._hostTNode,s)),a}createComponent(n,e,i,r,o,s,a){let c,l=e||{};c=l.index,i=l.injector,r=l.projectableNodes,o=l.environmentInjector||l.ngModuleRef,s=l.directives,a=l.bindings;let d=new $o(er(n)),f=i||this.parentInjector;if(!o&&d.ngModule==null){let N=this.parentInjector.get(He,null);N&&(o=N)}let h=er(d.componentType??{}),m=Tu(this._lContainer,h?.id??null),p=m?.firstChild??null,C=d.create(f,r,p,o,s,a);return this.insertImpl(C.hostView,c,Ws(this._hostTNode,m)),C}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(Sw(r)){let a=this.indexOf(n);if(a!==-1)this.detach(a);else{let c=r[It],l=new t(c,c[Kt],c[It]);l.detach(l.indexOf(n))}}let o=this._adjustIndex(e),s=this._lContainer;return Uc(s,r,o,i),n.attachToViewContainerRef(),Mp(dg(s),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=w0(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=kc(this._lContainer,e);i&&(gc(dg(this._lContainer),e),Ku(i[oe],i))}detach(n){let e=this._adjustIndex(n,-1),i=kc(this._lContainer,e);return i&&gc(dg(this._lContainer),e)!=null?new zr(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function w0(t){return t[_c]}function dg(t){return t[_c]||(t[_c]=[])}function iD(t,n){let e,i=n[t.index];return Fn(i)?e=i:(e=HC(i,n,null,t),n[t.index]=e,Dv(n,e)),V1(e,n,t,i),new Pg(e,t,n)}function B1(t,n){let e=t[Ye],i=e.createComment(""),r=wn(n,t),o=e.parentNode(r);return jo(e,o,i,e.nextSibling(r),!1),i}var V1=H1,j1=()=>!1;function U1(t,n,e){return j1(t,n,e)}function H1(t,n,e,i){if(t[Ao])return;let r;e.type&8?r=Vt(i):r=B1(n,e),t[Ao]=r}var Lg=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Bg=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let s=e.getByIndex(o),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)Pv(n,e).matches!==null&&this.queries[e].setDirty()}},Pu=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=W1(n):this.predicate=n}},Vg=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},jg=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,z1(e,o)),this.matchTNodeWithReadOption(n,e,Du(e,n,o,!1,!1))}else i===bt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Du(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===U||r===it||r===bt&&e.type&4)this.addMatch(e.index,-2);else{let o=Du(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function z1(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function $1(t,n){return t.type&11?Qs(t,n):t.type&4?Xu(t,n):null}function G1(t,n,e,i){return e===-1?$1(n,t):e===-2?q1(t,n,i):Nc(t,t[oe],e,n)}function q1(t,n,e){if(e===U)return Qs(n,t);if(e===bt)return Xu(n,t);if(e===it)return iD(n,t)}function rD(t,n,e,i){let r=n[bi].queries[i];if(r.matches===null){let o=t.data,s=e.matches,a=[];for(let c=0;s!==null&&c<s.length;c+=2){let l=s[c];if(l<0)a.push(null);else{let d=o[l];a.push(G1(n,d,s[c+1],e.metadata.read))}}r.matches=a}return r.matches}function Ug(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let s=rD(t,n,r,e);for(let a=0;a<o.length;a+=2){let c=o[a];if(c>0)i.push(s[a/2]);else{let l=o[a+1],d=n[-c];for(let f=ct;f<d.length;f++){let h=d[f];h[Pr]===h[It]&&Ug(h[oe],h,l,i)}if(d[Oo]!==null){let f=d[Oo];for(let h=0;h<f.length;h++){let m=f[h];Ug(m[oe],m,l,i)}}}}}return i}function Fv(t,n){return t[bi].queries[n].queryList}function oD(t,n,e){let i=new Dn((e&4)===4);return Dw(t,n,i,i.destroy),(n[bi]??=new Bg).queries.push(new Lg(i))-1}function sD(t,n,e){let i=nt();return i.firstCreatePass&&(cD(i,new Pu(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),oD(i,de(),n)}function aD(t,n,e,i){let r=nt();if(r.firstCreatePass){let o=xt();cD(r,new Pu(n,e,i),o.index),K1(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return oD(r,de(),e)}function W1(t){return t.split(",").map(n=>n.trim())}function cD(t,n,e){t.queries===null&&(t.queries=new Vg),t.queries.track(new jg(n,e))}function K1(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function Pv(t,n){return t.queries.getByIndex(n)}function lD(t,n){let e=t[oe],i=Pv(e,n);return i.crossesNgTemplate?Ug(e,t,n,[]):rD(e,t,i,n)}function dD(t,n,e){let i,r=Wa(()=>{i._dirtyCounter();let o=Y1(i,t);if(n&&o===void 0)throw new D(-951,!1);return o});return i=r[gt],i._dirtyCounter=G(0),i._flatValue=void 0,r}function Lv(t){return dD(!0,!1,t)}function Bv(t){return dD(!0,!0,t)}function uD(t,n){let e=t[gt];e._lView=de(),e._queryIndex=n,e._queryList=Fv(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function Y1(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[fe]&4)return n?void 0:qt;let r=Fv(e,i),o=lD(e,i);return r.reset(o,K0),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}function sr(t){return!!t&&typeof t.then=="function"}function Vv(t){return!!t&&typeof t.subscribe=="function"}var Ei=class{},ef=class{};var Rc=class extends Ei{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=iw(n);this._bootstrapComponents=OA(o.bootstrap),this._r3Injector=ng(n,e,[{provide:Ei,useValue:this},...i],fc(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},Ac=class extends ef{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new Rc(this.moduleType,n,[])}};function fD(t,n,e){return new Rc(t,n,e,!1)}var Lu=class extends Ei{injector;instance=null;constructor(n){super();let e=new No([...n.providers,{provide:Ei,useValue:this}],n.parent||Fs(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Xs(t,n,e=null){return new Lu({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var Q1=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=kp(!1,e.type),r=i.length>0?Xs([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=z({token:t,providedIn:"environment",factory:()=>new t(T(He))})}return t})();function k(t){return Fc(()=>{let n=hD(t),e=X(w({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection!==tv.Eager,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(Q1).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||ni.Emulated,styles:t.styles||qt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&Vn("NgStandalone"),mD(e);let i=t.dependencies;return e.directiveDefs=C0(i,Z1),e.pipeDefs=C0(i,rw),e.id=eF(e),e})}function Z1(t){return er(t)||Ep(t)}function B(t){return Fc(()=>({type:t.type,bootstrap:t.bootstrap||qt,declarations:t.declarations||qt,imports:t.imports||qt,exports:t.exports||qt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function X1(t,n){if(t==null)return Or;let e={};for(let i in t)if(Object.hasOwn(t,i)){let r=t[i],o,s,a,c;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,c=r[3]||null):(o=r,s=r,a=Qu.None,c=null),e[o]=[i,a,c],n[o]=s}return e}function J1(t){if(t==null)return Or;let n={};for(let e in t)Object.hasOwn(t,e)&&(n[t[e]]=e);return n}function x(t){return Fc(()=>{let n=hD(t);return mD(n),n})}function hD(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||Or,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||qt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,signalFormsInputPresence:null,inputs:X1(t.inputs,n),outputs:J1(t.outputs),debugInfo:null}}function mD(t){t.features?.forEach(n=>n(t))}function C0(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function eF(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}var jv=new b("");function Js(t){return Kn([{provide:jv,multi:!0,useValue:t}])}var Uv=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(jv,{optional:!0})??[];injector=u(me);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=Dt(this.injector,r);if(sr(o))e.push(o);else if(Vv(o)){let s=new Promise((a,c)=>{o.subscribe({complete:a,error:c})});e.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})(),Hg=new Map,tF=new Set;function Hv(t){return Re(this,null,function*(){let n=Hg;Hg=new Map;let e=new Map;function i(o){let s=e.get(o);if(s)return s;let a=t(o).then(c=>nF(o,c));return e.set(o,a),a}let r=Array.from(n).map(a=>Re(null,[a],function*([o,s]){if(s.styleUrl&&s.styleUrls?.length)throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple");let c=[];s.templateUrl&&c.push(i(s.templateUrl).then(h=>{s.template=h}));let l=typeof s.styles=="string"?[s.styles]:s.styles??[];s.styles=l;let{styleUrl:d,styleUrls:f}=s;if(d&&(f=[d],s.styleUrl=void 0),f?.length){let h=Promise.all(f.map(m=>i(m))).then(m=>{l.push(...m),s.styleUrls=void 0});c.push(h)}yield Promise.all(c),tF.delete(o)}));yield Promise.all(r)})}function pD(){return Hg.size===0}function nF(t,n){return Re(this,null,function*(){if(typeof n=="string")return n;if(n.status!==void 0&&n.status!==200)throw new D(918,!1);return n.text()})}function zv(t){return n=>{n.controlDef={create:(e,i)=>{e?.\u0275ngControlCreate(i)},update:(e,i)=>{e?.\u0275ngControlUpdate?.(i)},passThroughInput:t}}}function iF(t){return Object.getPrototypeOf(t.prototype).constructor}function le(t){let n=iF(t.type),e=!0,i=[t];for(;n&&n!==Function.prototype&&n!==Object.prototype;){let r,o=Object.hasOwn(n,mc)?n[mc]:void 0,s=Object.hasOwn(n,pc)?n[pc]:void 0;if(Ci(t))r=o??s;else{if(o)throw new D(903,!1);r=s}if(r){if(e){i.push(r);let c=t;c.inputs=ug(t.inputs),c.declaredInputs=ug(t.declaredInputs),c.outputs=ug(t.outputs);let l=r.hostBindings;l&&cF(t,l);let d=r.viewQuery,f=r.contentQueries;if(d&&sF(t,d),f&&aF(t,f),rF(t,r),nw(t.outputs,r.outputs),Ci(r)&&r.data.animation){let h=t.data;h.animation=(h.animation||[]).concat(r.data.animation)}}let a=r.features;if(a)for(let c=0;c<a.length;c++){let l=a[c];l&&l.ngInherit&&l(t),l===le&&(e=!1)}}n=Object.getPrototypeOf(n)}oF(i)}function rF(t,n){for(let e in n.inputs){if(!Object.hasOwn(n.inputs,e)||Object.hasOwn(t.inputs,e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function oF(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=Gs(r.hostAttrs,e=Gs(e,r.hostAttrs))}}function ug(t){return t===Or?{}:t===qt?[]:t}function sF(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function aF(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function cF(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function gD(t,n,e,i,r,o,s,a){if(e.firstCreatePass){t.mergedAttrs=Gs(t.mergedAttrs,t.attrs);let d=t.tView=wv(2,t,r,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}a&&(t.flags|=a),js(t,!1);let c=dF(e,n,t,i);hu()&&bv(e,n,c,t),qs(c,n);let l=HC(c,n,c,t);n[i+ut]=l,Dv(n,l),U1(l,t,n)}function lF(t,n,e,i,r,o,s,a,c,l,d){let f=e+ut,h;return n.firstCreatePass?(h=Zs(n,f,4,s||null,a||null),au()&&JC(n,t,h,Cn(n.consts,l),xv),F0(n,h)):h=n.data[f],gD(h,t,n,e,i,r,o,c),Bs(h)&&Zu(n,t,h),l!=null&&Vc(t,h,d),h}function Ks(t,n,e,i,r,o,s,a,c,l,d){let f=e+ut,h;if(n.firstCreatePass){if(h=Zs(n,f,4,s||null,a||null),l!=null){let m=Cn(n.consts,l);h.localNames=[];for(let p=0;p<m.length;p+=2)h.localNames.push(m[p],-1)}}else h=n.data[f];return gD(h,t,n,e,i,r,o,c),l!=null&&Vc(t,h,d),h}function Fe(t,n,e,i,r,o,s,a){let c=de(),l=nt(),d=Cn(l.consts,o);return lF(c,l,t,n,e,i,r,d,void 0,s,a),Fe}function tf(t,n,e,i,r,o,s,a){let c=de(),l=nt(),d=Cn(l.consts,o);return Ks(c,l,t,n,e,i,r,d,void 0,s,a),tf}var dF=uF;function uF(t,n,e,i){return Cc(!0),n[Ye].createComment("")}var nf=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();var rf=new b(""),ea=new b(""),$v=new b("USE_PENDING_TASKS",{providedIn:"root",factory:()=>typeof Zone>"u"}),Hc=(()=>{class t{_ngZone;registry;_isZoneStable=!0;_callbacks=[];_taskTrackingZone=null;_destroyRef;pendingTasksInternal=u(Di);_usePendingTasks=u($v);constructor(e,i,r){this._ngZone=e,this.registry=i,Op()&&(this._destroyRef=u(tt,{optional:!0})??void 0),Gv||(vD(r),r.addToWindow(i)),this._watchAngularEvents(),e.run(()=>{this._taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){let e=this._ngZone.onUnstable.subscribe({next:()=>{this._isZoneStable=!1}}),i,r;this._ngZone.runOutsideAngular(()=>{this._usePendingTasks&&(i=this.pendingTasksInternal.hasPendingTasksObservable.subscribe(()=>{this.isStable()&&this._ngZone.runOutsideAngular(()=>{this._runCallbacksIfReady()})})),r=this._ngZone.onStable.subscribe({next:()=>{L.assertNotInAngularZone(),queueMicrotask(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})}),this._destroyRef?.onDestroy(()=>{e.unsubscribe(),i?.unsubscribe(),r.unsubscribe()})}isStable(){return this._isZoneStable&&!this._ngZone.hasPendingMacrotasks&&(!this._usePendingTasks||!this.pendingTasksInternal.hasPendingTasks)}_runCallbacksIfReady(){if(this.isStable())queueMicrotask(()=>{for(;this._callbacks.length!==0;){let e=this._callbacks.pop();clearTimeout(e.timeoutId),e.doneCb()}});else{let e=this.getPendingTasks();this._callbacks=this._callbacks.filter(i=>i.updateCb&&i.updateCb(e)?(clearTimeout(i.timeoutId),!1):!0)}}getPendingTasks(){return this._taskTrackingZone?this._taskTrackingZone.macroTasks.map(e=>({source:e.source,creationLocation:e.creationLocation,data:e.data})):[]}addCallback(e,i,r){let o=-1;i&&i>0&&(o=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==o),e()},i)),this._callbacks.push({doneCb:e,timeoutId:o,updateCb:r})}whenStable(e,i,r){if(r&&!this._taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(e,i,r),this._runCallbacksIfReady()}registerApplication(e){this.registry.registerApplication(e,this)}unregisterApplication(e){this.registry.unregisterApplication(e)}findProviders(e,i,r){return[]}static \u0275fac=function(i){return new(i||t)(T(L),T(zc),T(ea))};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})(),zc=(()=>{class t{_applications=new Map;registerApplication(e,i){this._applications.set(e,i)}unregisterApplication(e){this._applications.delete(e)}unregisterAllApplications(){this._applications.clear()}getTestability(e){return this._applications.get(e)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(e,i=!0){return Gv?.findTestabilityInTree(this,e,i)??null}static \u0275fac=function(i){return new(i||t)};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function vD(t){Gv=t}var Gv,$c=new b("");function yD(){Um(()=>{let t="";throw new D(600,t)})}var fF=10;function qv(t,n){return Array.isArray(n)?n.reduce(qv,t):w(w({},t),n)}var Et=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(Ln);afterRenderManager=u(qu);zonelessEnabled=u(Dc);rootEffectScheduler=u(gu);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new I;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Di);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(he(e=>!e))}constructor(){u(ri,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(He);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=me.NULL){return this._injector.get(L).run(()=>{if(qe(Ve.BootstrapComponentStart),!this._injector.get(Uv).done){let N="";throw new D(405,N)}let a=er(e),c=this._injector.get(Ei),l=new $o(a,c);this.componentTypes.push(e);let{hostElement:d,directives:f,bindings:h}=hF(i),m=d||l.selector,p=l.create(r,[],m,c.injector,f,h),C=p.location.nativeElement,E=p.injector.get(rf,null);return E?.registerApplication(C),p.onDestroy(()=>{this.detachView(p.hostView),Ic(this.components,p),E?.unregisterApplication(C)}),this._loadComponent(p),qe(Ve.BootstrapComponentEnd,p),p})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){qe(Ve.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Gu.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw qe(Ve.ChangeDetectionEnd),new D(101,!1);let e=ce(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,ce(e),this.afterTick.next(),qe(Ve.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(ft,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<fF;){qe(Ve.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{qe(Ve.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!bc(r))continue;let o=i&&!this.zonelessEnabled?0:1;BC(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>bc(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;Ic(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get($c,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Ic(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new D(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();function hF(t){return t===void 0||typeof t=="string"||t instanceof Element?{hostElement:t}:t}function Ic(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function ge(t,n,e,i){let r=de(),o=Lr();if(xn(r,o,n)){let s=nt(),a=Us();MO(a,r,t,n,e,i)}return ge}var zg=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let s=this.detach(i);this.attach(i,o),this.attach(r,s)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function fg(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function mF(t,n,e,i){let r,o,s=0,a=t.length-1,c=void 0;if(Array.isArray(n)){ce(i);let l=n.length-1;for(ce(null);s<=a&&s<=l;){let d=t.at(s),f=n[s],h=fg(s,d,s,f,e);if(h!==0){h<0&&t.updateValue(s,f),s++;continue}let m=t.at(a),p=n[l],C=fg(a,m,l,p,e);if(C!==0){C<0&&t.updateValue(a,p),a--,l--;continue}let E=e(s,d),N=e(a,m),R=e(s,f);if(Object.is(R,N)){let te=e(l,p);Object.is(te,E)?(t.swap(s,a),t.updateValue(a,p),l--,a--):t.move(a,s),t.updateValue(s,f),s++;continue}if(r??=new Bu,o??=x0(t,s,a,e),$g(t,r,s,R))t.updateValue(s,f),s++,a++;else if(o.has(R))r.set(E,t.detach(s)),a--;else{let te=t.create(s,n[s]);t.attach(s,te),s++,a++}}for(;s<=l;)D0(t,r,e,s,n[s]),s++}else if(n!=null){ce(i);let l=n[Symbol.iterator]();ce(null);let d=l.next();for(;!d.done&&s<=a;){let f=t.at(s),h=d.value,m=fg(s,f,s,h,e);if(m!==0)m<0&&t.updateValue(s,h),s++,d=l.next();else{r??=new Bu,o??=x0(t,s,a,e);let p=e(s,h);if($g(t,r,s,p))t.updateValue(s,h),s++,a++,d=l.next();else if(!o.has(p))t.attach(s,t.create(s,h)),s++,a++,d=l.next();else{let C=e(s,f);r.set(C,t.detach(s)),a--}}}for(;!d.done;)D0(t,r,e,t.length,d.value),d=l.next()}for(;s<=a;)t.destroy(t.detach(a--));r?.forEach(l=>{t.destroy(l)})}function $g(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function D0(t,n,e,i,r){if($g(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function x0(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var Bu=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function ie(t,n,e,i,r,o,s,a){Vn("NgControlFlow");let c=de(),l=nt(),d=Cn(l.consts,o);return Ks(c,l,t,n,e,i,r,d,256,s,a),Wv}function Wv(t,n,e,i,r,o,s,a){Vn("NgControlFlow");let c=de(),l=nt(),d=Cn(l.consts,o);return Ks(c,l,t,n,e,i,r,d,512,s,a),Wv}function re(t,n){Vn("NgControlFlow");let e=de(),i=Lr(),r=e[i]!==Qt?e[i]:-1,o=r!==-1?Vu(e,ut+r):void 0,s=0;if(xn(e,i,t)){let a=ce(null);try{if(o!==void 0&&$C(o,s),t!==-1){let c=ut+t,l=Vu(e,c),d=Kg(e[oe],c),f=qC(l,d,e),h=jc(e,d,n,{dehydratedView:f});Uc(l,h,s,Ws(d,f))}}finally{ce(a)}}else if(o!==void 0){let a=zC(o,s);a!==void 0&&(a[_t]=n)}}var Gg=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-ct}};function ar(t){return t}function ta(t,n){return n}var qg=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function Ut(t,n,e,i,r,o,s,a,c,l,d,f,h){Vn("NgControlFlow");let m=de(),p=nt(),C=c!==void 0,E=de(),N=a?s.bind(E[on][_t]):s,R=new qg(C,N);E[ut+t]=R,Ks(m,p,t+1,n,e,i,r,Cn(p.consts,o),256),C&&Ks(m,p,t+2,c,l,d,f,Cn(p.consts,h),512)}var Wg=class extends zg{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-ct}at(n){return this.getLView(n)[_t].$implicit}attach(n,e){let i=e[To];this.needsIndexUpdate||=n!==this.length,Uc(this.lContainer,e,n,Ws(this.templateTNode,i)),pF(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,gF(this.lContainer,n),vF(this.lContainer,n)}create(n,e){let i=Tu(this.lContainer,this.templateTNode.tView.ssrId);return jc(this.hostLView,this.templateTNode,new Gg(this.lContainer,e,n),{dehydratedView:i})}destroy(n){Ku(n[oe],n)}updateValue(n,e){this.getLView(n)[_t].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[_t].$index=n}getLView(n){return yF(this.lContainer,n)}};function Ht(t){let n=ce(null),e=Zn();try{let i=de(),r=i[oe],o=i[e],s=e+1,a=Vu(i,s);if(o.liveCollection===void 0){let l=Kg(r,s);o.liveCollection=new Wg(a,i,l)}else o.liveCollection.reset();let c=o.liveCollection;if(mF(c,t,o.trackByFn,n),c.updateIndexes(),o.hasEmptyBlock){let l=Lr(),d=c.length===0;if(xn(i,l,d)){let f=e+2,h=Vu(i,f);if(d){let m=Kg(r,f),p=qC(h,m,i),C=jc(i,m,void 0,{dehydratedView:p});Uc(h,C,0,Ws(m,p))}else r.firstUpdatePass&&e1(h),$C(h,0)}}}finally{ce(n)}}function Vu(t,n){return t[n]}function pF(t,n){if(t.length<=ct)return;let e=ct+n,i=t[e],r=i?i[wi]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[_i];JA(o,r),Hr.delete(i[Si]),r.detachedLeaveAnimationFns=void 0}}function gF(t,n){if(t.length<=ct)return;let e=ct+n,i=t[e],r=i?i[wi]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function vF(t,n){return kc(t,n)}function yF(t,n){return zC(t,n)}function Kg(t,n){return iu(t,n)}function V(t,n,e){let i=de(),r=Lr();if(xn(i,r,n)){let o=nt(),s=Us();DO(s,i,t,n,i[Ye],e)}return V}function Yg(t,n,e,i,r){Nv(n,t,e,r?"class":"style",i)}function y(t,n,e,i){let r=de(),o=r[oe],s=t+ut,a=o.firstCreatePass?Av(s,r,2,n,xv,au(),e,i):o.data[s];if(ir(a)){let c=r[Qn].tracingService;if(c&&c.componentCreate){let l=o.data[a.directiveStart+a.componentOffset];return c.componentCreate(YC(l),()=>(E0(t,n,r,a,i),y))}}return E0(t,n,r,a,i),y}function E0(t,n,e,i,r){if(Ev(i,e,t,n,_D),Bs(i)){let o=e[oe];Zu(o,e,i),ov(o,i,e)}r!=null&&Vc(e,i)}function _(){let t=nt(),n=xt(),e=Iv(n);return t.firstCreatePass&&Ov(t,e),qp(e)&&Wp(),$p(),e.classesWithoutHost!=null&&PR(e)&&Yg(t,e,de(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&LR(e)&&Yg(t,e,de(),e.stylesWithoutHost,!1),_}function K(t,n,e,i){return y(t,n,e,i),_(),K}function rt(t,n,e,i){let r=de(),o=r[oe],s=t+ut,a=o.firstCreatePass?x1(s,o,2,n,e,i):o.data[s];return Ev(a,r,t,n,_D),i!=null&&Vc(r,a),rt}function ht(){let t=xt(),n=Iv(t);return qp(n)&&Wp(),$p(),ht}function mn(t,n,e,i){return rt(t,n,e,i),ht(),mn}var _D=(t,n,e,i,r)=>(Cc(!0),hC(n[Ye],i,tg()));function Ti(t,n,e){let i=de(),r=i[oe],o=t+ut,s=r.firstCreatePass?Av(o,i,8,"ng-container",xv,au(),n,e):r.data[o];if(Ev(s,i,t,"ng-container",_F),Bs(s)){let a=i[oe];Zu(a,i,s),ov(a,s,i)}return e!=null&&Vc(i,s),Ti}function ki(){let t=nt(),n=xt(),e=Iv(n);return t.firstCreatePass&&Ov(t,e),ki}function Zt(t,n,e){return Ti(t,n,e),ki(),Zt}var _F=(t,n,e,i,r)=>(Cc(!0),NA(n[Ye],""));function zt(){return de()}function sn(t,n,e){let i=de(),r=Lr();if(xn(i,r,n)){let o=nt(),s=Us();RC(s,i,t,n,i[Ye],e)}return sn}var Gc="en-US";var bF=Gc;function bD(t){typeof t=="string"&&(bF=t.toLowerCase().replace(/_/g,"-"))}function ve(t,n,e){let i=de(),r=nt(),o=xt();return SF(r,i,i[Ye],o,t,n,e),ve}function of(t,n,e){let i=de(),r=nt(),o=xt();return(o.type&3||e)&&Rv(o,r,i,e,i[Ye],t,n,Uo(o,i,n)),of}function SF(t,n,e,i,r,o,s){let a=!0,c=null;if((i.type&3||s)&&(c??=Uo(i,n,o),Rv(i,t,n,s,e,r,o,c)&&(a=!1)),a){let l=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let f=0;f<d.length;f+=2){let h=d[f],m=d[f+1];c??=Uo(i,n,o),Ru(i,n,h,m,r,c)}if(l&&l.length)for(let f of l)c??=Uo(i,n,o),Ru(i,n,f,r,r,c)}}function O(t=1){return Bw(t)}function wF(t,n){let e=null,i=jA(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?bC(t,o,!0):zA(i,o))return r}return e}function Ne(t){let n=de()[on][Kt];if(!n.projection){let e=t?t.length:1,i=n.projection=dw(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let s=t?wF(o,t):0;s!==null&&(r[s]?r[s].projectionNext=o:i[s]=o,r[s]=o)}o=o.next}}}function A(t,n=0,e,i,r,o){let s=de(),a=nt(),c=i?t+1:null;c!==null&&Ks(s,a,c,i,r,o,null,e);let l=Zs(a,ut+t,16,null,e||null);l.projection===null&&(l.projection=n),Qp();let f=!s[To]||Gp();s[on][Kt].projection[l.projection]===null&&c!==null?CF(s,a,c):f&&!Hu(l)&&mO(a,s,l)}function CF(t,n,e){let i=ut+e,r=n.data[i],o=t[i],s=Tu(o,r.tView.ssrId),a=jc(t,r,void 0,{dehydratedView:s});Uc(o,a,0,Ws(r,s))}function mt(t,n,e,i){return aD(t,n,e,i),mt}function $t(t,n,e){return sD(t,n,e),$t}function Y(t){let n=de(),e=nt(),i=du();Sc(i+1);let r=Pv(e,i);if(t.dirty&&bw(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=lD(n,i);t.reset(o,K0),t.notifyOnChanges()}return!0}return!1}function Q(){return Fv(de(),du())}function sf(t,n,e,i,r){return uD(n,aD(t,e,i,r)),sf}function af(t,n,e,i){return uD(t,sD(n,e,i)),af}function cf(t=1){Sc(du()+t)}function jn(t){let n=Nw();return _w(n,ut+t)}function bu(t,n){return t<<17|n<<2}function Go(t){return t>>17&32767}function DF(t){return(t&2)==2}function xF(t,n){return t&131071|n<<17}function Qg(t){return t|2}function Ys(t){return(t&131068)>>2}function hg(t,n){return t&-131069|n<<2}function EF(t){return(t&1)===1}function Zg(t){return t|1}function IF(t,n,e,i,r,o){let s=o?n.classBindings:n.styleBindings,a=Go(s),c=Ys(s);t[i]=e;let l=!1,d;if(Array.isArray(e)){let f=e;d=f[1],(d===null||As(f,d)>0)&&(l=!0)}else d=e;if(r)if(c!==0){let h=Go(t[a+1]);t[i+1]=bu(h,a),h!==0&&(t[h+1]=hg(t[h+1],i)),t[a+1]=xF(t[a+1],i)}else t[i+1]=bu(a,0),a!==0&&(t[a+1]=hg(t[a+1],i)),a=i;else t[i+1]=bu(c,0),a===0?a=i:t[c+1]=hg(t[c+1],i),c=i;l&&(t[i+1]=Qg(t[i+1])),I0(t,d,i,!0),I0(t,d,i,!1),NF(n,d,t,i,o),s=bu(a,c),o?n.classBindings=s:n.styleBindings=s}function NF(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&As(o,n)>=0&&(e[i+1]=Zg(e[i+1]))}function I0(t,n,e,i){let r=t[e+1],o=n===null,s=i?Go(r):Ys(r),a=!1;for(;s!==0&&(a===!1||o);){let c=t[s],l=t[s+1];MF(c,n)&&(a=!0,t[s+1]=i?Zg(l):Qg(l)),s=i?Go(l):Ys(l)}a&&(t[e+1]=i?Qg(r):Zg(r))}function MF(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?As(t,n)>=0:!1}var ti={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function TF(t){return t.substring(ti.key,ti.keyEnd)}function kF(t){return RF(t),SD(t,wD(t,0,ti.textEnd))}function SD(t,n){let e=ti.textEnd;return e===n?-1:(n=ti.keyEnd=AF(t,ti.key=n,e),wD(t,n,e))}function RF(t){ti.key=0,ti.keyEnd=0,ti.value=0,ti.valueEnd=0,ti.textEnd=t.length}function wD(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function AF(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function Ko(t,n,e){return CD(t,n,e,!1),Ko}function Z(t,n){return CD(t,n,null,!0),Z}function En(t){FF(UF,OF,t,!0)}function OF(t,n){for(let e=kF(n);e>=0;e=SD(n,e))Jd(t,TF(n),!0)}function CD(t,n,e,i){let r=de(),o=nt(),s=cu(2);if(o.firstUpdatePass&&xD(o,t,s,i),n!==Qt&&xn(r,s,n)){let a=o.data[Zn()];ED(o,a,r,r[Ye],t,r[s+1]=zF(n,e),i,s)}}function FF(t,n,e,i){let r=nt(),o=cu(2);r.firstUpdatePass&&xD(r,null,o,i);let s=de();if(e!==Qt&&xn(s,o,e)){let a=r.data[Zn()];if(ID(a,i)&&!DD(r,o)){let c=i?a.classesWithoutHost:a.stylesWithoutHost;c!==null&&(e=Kd(c,e||"")),Yg(r,a,s,e,i)}else HF(r,a,s,s[Ye],s[o+1],s[o+1]=jF(t,n,e),i,o)}}function DD(t,n){return n>=t.expandoStartIndex}function xD(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[Zn()],s=DD(t,e);ID(o,i)&&n===null&&!s&&(n=!1),n=PF(r,o,n,i),IF(r,o,n,e,s,i)}}function PF(t,n,e,i){let r=Ow(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=mg(null,t,n,e,i),e=Oc(e,n.attrs,i),o=null);else{let s=n.directiveStylingLast;if(s===-1||t[s]!==r)if(e=mg(r,t,n,e,i),o===null){let c=LF(t,n,i);c!==void 0&&Array.isArray(c)&&(c=mg(null,t,n,c[1],i),c=Oc(c,n.attrs,i),BF(t,n,i,c))}else o=VF(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function LF(t,n,e){let i=e?n.classBindings:n.styleBindings;if(Ys(i)!==0)return t[Go(i)]}function BF(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[Go(r)]=i}function VF(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let s=t[o].hostAttrs;i=Oc(i,s,e)}return Oc(i,n.attrs,e)}function mg(t,n,e,i,r){let o=null,s=e.directiveEnd,a=e.directiveStylingLast;for(a===-1?a=e.directiveStart:a++;a<s&&(o=n[a],i=Oc(i,o.hostAttrs,r),o!==t);)a++;return t!==null&&(e.directiveStylingLast=a),i}function Oc(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let s=n[o];typeof s=="number"?r=s:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),Jd(t,s,e?!0:n[++o]))}return t===void 0?null:t}function jF(t,n,e){if(e==null||e==="")return qt;let i=[],r=hn(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)Object.hasOwn(r,o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function UF(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&Jd(t,i,e)}function HF(t,n,e,i,r,o,s,a){r===Qt&&(r=qt);let c=0,l=0,d=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;d!==null||f!==null;){let h=c<r.length?r[c+1]:void 0,m=l<o.length?o[l+1]:void 0,p=null,C;d===f?(c+=2,l+=2,h!==m&&(p=f,C=m)):f===null||d!==null&&d<f?(c+=2,p=d):(l+=2,p=f,C=m),p!==null&&ED(t,n,e,i,p,C,s,a),d=c<r.length?r[c]:null,f=l<o.length?o[l]:null}}function ED(t,n,e,i,r,o,s,a){if(!(n.type&3))return;let c=t.data,l=c[a+1],d=EF(l)?N0(c,n,e,r,Ys(l),s):void 0;if(!ju(d)){ju(o)||DF(l)&&(o=N0(c,null,e,r,a,s));let f=Vp(Zn(),e);gO(i,s,f,r,o)}}function N0(t,n,e,i,r,o){let s=n===null,a;for(;r>0;){let c=t[r],l=Array.isArray(c),d=l?c[1]:c,f=d===null,h=e[r+1];h===Qt&&(h=f?qt:void 0);let m=f?eu(h,i):d===i?h:void 0;if(l&&!ju(m)&&(m=eu(c,i)),ju(m)&&(a=m,s))return a;let p=t[r+1];r=s?Go(p):Ys(p)}if(n!==null){let c=o?n.residualClasses:n.residualStyles;c!=null&&(a=eu(c,i))}return a}function ju(t){return t!==void 0}function zF(t,n){return t==null||t===""||(typeof n=="string"?t=hn(t)+n:typeof t=="object"&&(t=fc(hn(t)))),t}function ID(t,n){return(t.flags&(n?8:16))!==0}function M(t,n=""){let e=de(),i=nt(),r=t+ut,o=i.firstCreatePass?Zs(i,r,1,n,null):i.data[r],s=$F(i,e,o,n);e[r]=s,hu()&&bv(i,e,s,o),js(o,!1)}var $F=(t,n,e,i)=>(Cc(!0),EA(n[Ye],i));function GF(t,n,e,i=""){return xn(t,Lr(),e)?n+tr(e)+i:Qt}function qF(t,n,e,i,r,o,s,a=""){let c=Mw(),l=a1(t,c,e,r,s);return cu(3),l?n+tr(e)+i+tr(r)+o+tr(s)+a:Qt}function Pt(t){return St("",t),Pt}function St(t,n,e){let i=de(),r=GF(i,t,n,e);return r!==Qt&&ND(i,Zn(),r),St}function qc(t,n,e,i,r,o,s){let a=de(),c=qF(a,t,n,e,i,r,o,s);return c!==Qt&&ND(a,Zn(),c),qc}function ND(t,n,e){let i=Vp(n,t);IA(t[Ye],i,e)}function Kv(t){return xn(de(),Lr(),t)?tr(t):Qt}function lf(t,n,e){let i=Xp()+t,r=de();return r[i]===Qt?ZC(r,i,n(e,r)):o1(r,i)}function M0(t,n,e){let i=nt();i.firstCreatePass&&MD(n,i.data,i.blueprint,Ci(t),e)}function MD(t,n,e,i,r){if(t=Bt(t),Array.isArray(t))for(let o=0;o<t.length;o++)MD(t[o],n,e,i,r);else{let o=nt(),s=de(),a=xt(),c=Io(t)?t:Bt(t.provide),l=Ap(t),d=a.providerIndexes&1048575,f=a.directiveStart,h=a.providerIndexes>>20;if(Io(t)||!t.multi){let m=new Ho(l,r,De,null),p=gg(c,n,r?d:d+h,f);p===-1?(_g(Mu(a,s),o,c),pg(o,t,n.length),n.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(m),s.push(m)):(e[p]=m,s[p]=m)}else{let m=gg(c,n,d+h,f),p=gg(c,n,d,d+h),C=m>=0&&e[m],E=p>=0&&e[p];if(r&&!E||!r&&!C){_g(Mu(a,s),o,c);let N=YF(r?KF:WF,e.length,r,i,l,t);!r&&E&&(e[p].providerFactory=N),pg(o,t,n.length,0),n.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(N),s.push(N)}else{let N=TD(e[r?p:m],l,!r&&i);pg(o,t,m>-1?m:p,N)}!r&&i&&E&&e[p].componentProviders++}}}function pg(t,n,e,i){let r=Io(n),o=pw(n);if(r||o){let c=(o?Bt(n.useClass):n).prototype.ngOnDestroy;if(c){let l=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=l.indexOf(e);d===-1?l.push(e,[i,c]):l[d+1].push(i,c)}else l.push(e,c)}}}function TD(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function gg(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function WF(t,n,e,i,r){return Xg(this.multi,[])}function KF(t,n,e,i,r){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,c=Nc(i,i[oe],this.providerFactory.index,r);s=c.slice(0,a),Xg(o,s);for(let l=a;l<c.length;l++)s.push(c[l])}else s=[],Xg(o,s);return s}function Xg(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function YF(t,n,e,i,r,o){let s=new Ho(t,e,De,null);return s.multi=[],s.index=n,s.componentProviders=0,TD(s,r,i&&!e),s}function ye(t,n){return e=>{e.providersResolver=(i,r)=>M0(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>M0(i,r?r(n):n,!0))}}function Yv(t,n,e){return ZF(de(),Xp(),t,n,e)}function QF(t,n){let e=t[n];return e===Qt?void 0:e}function ZF(t,n,e,i,r,o){let s=n+e;return xn(t,s,r)?ZC(t,s+1,o?i.call(o,r):i(r)):QF(t,s+1)}function df(t,n){return Xu(t,n)}var Su=null;function kD(t){Su!==null&&(t.defaultEncapsulation!==Su.defaultEncapsulation||t.preserveWhitespaces!==Su.preserveWhitespaces)||(Su=t)}var RD=(()=>{class t{applicationErrorHandler=u(Ln);appRef=u(Et);taskService=u(Di);ngZone=u(L);zonelessEnabled=u(Dc);tracing=u(ri,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new pe;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(dc):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(sg,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:case 2:{this.appRef.dirtyFlags|=2;break}case 3:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?Hw:ig;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(dc+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();function AD(){return[{provide:yi,useExisting:RD},{provide:L,useClass:uc},{provide:Dc,useValue:!0}]}var Qv=(()=>{class t{compileModuleSync(e){return new Ac(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})(),OD=new b("");function XF(){return typeof $localize<"u"&&$localize.locale||Gc}var uf=new b("",{factory:()=>u(uf,{optional:!0,skipSelf:!0})||XF()});function $e(t,n){return Wa(t,n?.equal)}function xe(t){return _S(t)}var FD=class t extends Error{_brand;constructor(n){super(n)}static IDLE=new t("IDLE");static LOADING=new t("LOADING")},JF=t=>t;function ff(t,n){if(typeof t=="function"){let e=qm(t,JF,n?.equal);return PD(e,n?.debugName,n?.set)}else{let e=qm(t.source,t.computation,t.equal);return PD(e,t.debugName,t.set)}}function PD(t,n,e){let i=t[gt],r=t;if(e!==void 0){let o=s=>Wm(i,s);r.set=s=>e(s,o),r.update=s=>e(s(xe(t)),o)}else r.set=o=>Wm(i,o),r.update=o=>yS(i,o);return r.asReadonly=mu.bind(t),r}var qD=Symbol("InputSignalNode#UNSET"),dP=X(w({},Ka),{transformFn:void 0,applyValueToInputSignal(t,n){go(t,n)}});function WD(t,n){let e=Object.create(dP);e.value=t,e.transformFn=n?.transform;function i(){if(Cr(e),e.value===qD){let r=null;throw new D(-950,r)}return e.value}return i[gt]=e,i}var Un=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Pc(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}},KD=(()=>{let t=new b("");return t.__NG_ELEMENT_ID__=n=>{let e=xt();if(e===null)throw new D(-204,!1);if(e.type&2)return e.value;if(n&8)return null;throw new D(-204,!1)},t})();function ay(t){return uP(t)?t.default:t}function uP(t){return t&&typeof t=="object"&&"default"in t}function LD(t,n){return WD(t,n)}function fP(t){return WD(qD,t)}var Xt=(LD.required=fP,LD);function BD(t,n){return Lv(n)}function hP(t,n){return Bv(n)}var Kc=(BD.required=hP,BD);function VD(t,n){return Lv(n)}function mP(t,n){return Bv(n)}var YD=(VD.required=mP,VD);var QD=(()=>{class t{constructor(e){}static \u0275fac=function(i){return new(i||t)(T(Et))};static \u0275mod=B({type:t});static \u0275inj=F({})}return t})();var pP=1e4;var gZ=pP-1e3;var Xv=class{supports(n){return kv(n)}create(n){return new Jv(n)}},gP=(t,n)=>n,Jv=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(n){this._trackByFn=n||gP}forEachItem(n){let e;for(e=this._itHead;e!==null;e=e._next)n(e)}forEachOperation(n){let e=this._itHead,i=this._removalsHead,r=0,o=null;for(;e||i;){let s=!i||e&&e.currentIndex<jD(i,r,o)?e:i,a=jD(s,r,o),c=s.currentIndex;if(s===i)r--,i=i._nextRemoved;else if(e=e._next,s.previousIndex==null)r++;else{o||(o=[]);let l=a-r,d=c-r;if(l!=d){for(let h=0;h<l;h++){let m=h<o.length?o[h]:o[h]=0,p=m+h;d<=p&&p<l&&(o[h]=m+1)}let f=s.previousIndex;o[f]=d-l}}a!==c&&n(s,a,c)}}forEachPreviousItem(n){let e;for(e=this._previousItHead;e!==null;e=e._nextPrevious)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachMovedItem(n){let e;for(e=this._movesHead;e!==null;e=e._nextMoved)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}forEachIdentityChange(n){let e;for(e=this._identityChangesHead;e!==null;e=e._nextIdentityChange)n(e)}diff(n){if(n==null&&(n=[]),!kv(n))throw new D(900,!1);return this.check(n)?this:null}onDestroy(){}check(n){this._reset();let e=this._itHead,i=!1,r,o,s;if(Array.isArray(n)){this.length=n.length;for(let a=0;a<this.length;a++)o=n[a],s=this._trackByFn(a,o),e===null||!Object.is(e.trackById,s)?(e=this._mismatch(e,o,s,a),i=!0):(i&&(e=this._verifyReinsertion(e,o,s,a)),Object.is(e.item,o)||this._addIdentityChange(e,o)),e=e._next}else r=0,QC(n,a=>{s=this._trackByFn(r,a),e===null||!Object.is(e.trackById,s)?(e=this._mismatch(e,a,s,r),i=!0):(i&&(e=this._verifyReinsertion(e,a,s,r)),Object.is(e.item,a)||this._addIdentityChange(e,a)),e=e._next,r++}),this.length=r;return this._truncate(e),this.collection=n,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let n;for(n=this._previousItHead=this._itHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._additionsHead;n!==null;n=n._nextAdded)n.previousIndex=n.currentIndex;for(this._additionsHead=this._additionsTail=null,n=this._movesHead;n!==null;n=n._nextMoved)n.previousIndex=n.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(n,e,i,r){let o;return n===null?o=this._itTail:(o=n._prev,this._remove(n)),n=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),n!==null?(Object.is(n.item,e)||this._addIdentityChange(n,e),this._reinsertAfter(n,o,r)):(n=this._linkedRecords===null?null:this._linkedRecords.get(i,r),n!==null?(Object.is(n.item,e)||this._addIdentityChange(n,e),this._moveAfter(n,o,r)):n=this._addAfter(new ey(e,i),o,r)),n}_verifyReinsertion(n,e,i,r){let o=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return o!==null?n=this._reinsertAfter(o,n._prev,r):n.currentIndex!=r&&(n.currentIndex=r,this._addToMoves(n,r)),n}_truncate(n){for(;n!==null;){let e=n._next;this._addToRemovals(this._unlink(n)),n=e}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(n,e,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(n);let r=n._prevRemoved,o=n._nextRemoved;return r===null?this._removalsHead=o:r._nextRemoved=o,o===null?this._removalsTail=r:o._prevRemoved=r,this._insertAfter(n,e,i),this._addToMoves(n,i),n}_moveAfter(n,e,i){return this._unlink(n),this._insertAfter(n,e,i),this._addToMoves(n,i),n}_addAfter(n,e,i){return this._insertAfter(n,e,i),this._additionsTail===null?this._additionsTail=this._additionsHead=n:this._additionsTail=this._additionsTail._nextAdded=n,n}_insertAfter(n,e,i){let r=e===null?this._itHead:e._next;return n._next=r,n._prev=e,r===null?this._itTail=n:r._prev=n,e===null?this._itHead=n:e._next=n,this._linkedRecords===null&&(this._linkedRecords=new hf),this._linkedRecords.put(n),n.currentIndex=i,n}_remove(n){return this._addToRemovals(this._unlink(n))}_unlink(n){this._linkedRecords!==null&&this._linkedRecords.remove(n);let e=n._prev,i=n._next;return e===null?this._itHead=i:e._next=i,i===null?this._itTail=e:i._prev=e,n}_addToMoves(n,e){return n.previousIndex===e||(this._movesTail===null?this._movesTail=this._movesHead=n:this._movesTail=this._movesTail._nextMoved=n),n}_addToRemovals(n){return this._unlinkedRecords===null&&(this._unlinkedRecords=new hf),this._unlinkedRecords.put(n),n.currentIndex=null,n._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=n,n._prevRemoved=null):(n._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=n),n}_addIdentityChange(n,e){return n.item=e,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=n:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=n,n}},ey=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(n,e){this.item=n,this.trackById=e}},ty=class{_head=null;_tail=null;add(n){this._head===null?(this._head=this._tail=n,n._nextDup=null,n._prevDup=null):(this._tail._nextDup=n,n._prevDup=this._tail,n._nextDup=null,this._tail=n)}get(n,e){let i;for(i=this._head;i!==null;i=i._nextDup)if((e===null||e<=i.currentIndex)&&Object.is(i.trackById,n))return i;return null}remove(n){let e=n._prevDup,i=n._nextDup;return e===null?this._head=i:e._nextDup=i,i===null?this._tail=e:i._prevDup=e,this._head===null}},hf=class{map=new Map;put(n){let e=n.trackById,i=this.map.get(e);i||(i=new ty,this.map.set(e,i)),i.add(n)}get(n,e){let i=n,r=this.map.get(i);return r?r.get(n,e):null}remove(n){let e=n.trackById;return this.map.get(e).remove(n)&&this.map.delete(e),n}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function jD(t,n,e){let i=t.previousIndex;if(i===null)return i;let r=0;return e&&i<e.length&&(r=e[i]),i+n+r}var ny=class{supports(n){return n instanceof Map||Ju(n)}create(){return new iy}},iy=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||Ju(n)))throw new D(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(i,r)=>{if(e&&e.key===r)this._maybeAddToChanges(e,i),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(r,i);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let i=e;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let i=n._prev;return e._next=n,e._prev=i,n._prev=e,i&&(i._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let r=this._records.get(n);this._maybeAddToChanges(r,e);let o=r._prev,s=r._next;return o&&(o._next=s),s&&(s._prev=o),r._next=null,r._prev=null,r}let i=new ry(n);return this._records.set(n,i),i.currentValue=e,this._addToAdditions(i),i}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(i=>e(n[i],i))}},ry=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function UD(){return new Yo([new Xv])}var Yo=(()=>{class t{factories;static \u0275prov=z({token:t,providedIn:"root",factory:UD});constructor(e){this.factories=e}static create(e,i){if(i!=null){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=u(t,{optional:!0,skipSelf:!0});return t.create(e,i||UD())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i!=null)return i;throw new D(901,!1)}}return t})();function HD(){return new cy([new ny])}var cy=(()=>{class t{static \u0275prov=z({token:t,providedIn:"root",factory:HD});factories;constructor(e){this.factories=e}static create(e,i){if(i){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=u(t,{optional:!0,skipSelf:!0});return t.create(e,i||HD())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i)return i;throw new D(901,!1)}}return t})(),Je=(()=>{class t{static __NG_ELEMENT_ID__=vP}return t})();function vP(t){return yP(xt(),de(),(t&16)===16)}function yP(t,n,e){if(ir(t)&&!e){let i=Pn(t.index,n);return new zr(i,i)}else if(t.type&175){let i=n[on];return new zr(i,n)}return null}function _P(t,n,e){let i=new Ac(e);return Promise.resolve(i)}function zD(t){for(let n=t.length-1;n>=0;n--)if(t[n]!==void 0)return t[n]}var mf=new b(""),bP=new b("");function Wc(t){return!t.moduleRef}function SP(t){let n=Wc(t)?t.r3Injector:t.moduleRef.injector,e=n.get(L);return e.run(()=>{Wc(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(Ln),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),Wc(t)){let o=()=>n.destroy(),s=t.platformInjector.get(mf);s.add(o),n.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>t.moduleRef.destroy(),s=t.platformInjector.get(mf);s.add(o),t.moduleRef.onDestroy(()=>{Ic(t.allPlatformModules,t.moduleRef),r.unsubscribe(),s.delete(o)})}return CP(i,e,()=>{let o=n.get(Di),s=o.add(),a=n.get(Uv);return a.runInitializers(),a.donePromise.then(()=>{let c=n.get(uf,Gc);if(bD(c||Gc),!n.get(bP,!0))return Wc(t)?n.get(Et):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(Wc(t)){let d=n.get(Et);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return ZD?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(s)})})})}var ZD;function $D(){ZD=wP}function wP(t,n){let e=t.injector.get(Et);if(t._bootstrapComponents.length>0)t._bootstrapComponents.forEach(i=>e.bootstrap(i));else if(t.instance.ngDoBootstrap)t.instance.ngDoBootstrap(e);else throw new D(-403,!1);n.push(t)}function CP(t,n,e){try{let i=e();return sr(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var XD=(()=>{class t{_injector;_modules=[];_destroyListeners=[];_destroyed=!1;constructor(e){this._injector=e}bootstrapModuleFactory(e,i){let r=[AD(),...i?.applicationProviders??[],$w],o=fD(e.moduleType,this.injector,r);return $D(),SP({moduleRef:o,allPlatformModules:this._modules,platformInjector:this.injector})}bootstrapModule(e,i=[]){let r=qv({},i);return $D(),_P(this.injector,r,e).then(o=>this.bootstrapModuleFactory(o,r))}onDestroy(e){this._destroyListeners.push(e)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new D(404,!1);this._modules.slice().forEach(i=>i.destroy()),this._destroyListeners.forEach(i=>i());let e=this._injector.get(mf,null);e&&(e.forEach(i=>i()),e.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}static \u0275fac=function(i){return new(i||t)(T(me))};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();var ly=null;function DP(t){if(uy())throw new D(400,!1);yD(),ly=t;let n=t.get(XD);return IP(t),n}function dy(t,n,e=[]){let i=`Platform: ${n}`,r=new b(i);return(o=[])=>{let s=uy();if(!s){let a=[...e,...o,{provide:r,useValue:!0}];s=t?.(a)??DP(xP(a,i))}return EP(r)}}function xP(t=[],n){return me.create({name:n,providers:[{provide:yc,useValue:"platform"},{provide:mf,useValue:new Set([()=>ly=null])},...t]})}function EP(t){let n=uy();if(!n)throw new D(-401,!1);return n}function uy(){return ly?.get(XD)??null}function IP(t){let n=t.get(pu,null);Dt(t,()=>{n?.forEach(e=>e())})}function j(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function Ri(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var Zv=Symbol("NOT_SET"),JD=new Set,NP=X(w({},Ka),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Zv,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Zv&&!bs(this))return this.signal;try{for(let r of this.cleanup??JD)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=Wi(this),i;try{i=this.userFn.apply(null,n)}finally{Dr(this,e)}return(this.value===Zv||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),oy=class extends Mc{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,s=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(tt),s),this.scheduler=r;for(let a of gv){let c=e[a];if(c===void 0)continue;let l=Object.create(NP);l.sequence=this,l.phase=a,l.userFn=c,l.dirty=!0,l.signal=()=>(Cr(l),l.value),l.signal[gt]=l,l.registerCleanupFn=d=>(l.cleanup??=new Set).add(d),this.nodes[a]=l,this.hooks[a]=d=>l.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??JD)e()}finally{xr(n)}}};function fy(t,n){let e=n?.injector??u(me),i=e.get(yi),r=e.get(qu),o=e.get(ri,null,{optional:!0});r.impl??=e.get(vv);let s=t;typeof s=="function"&&(s={mixedReadWrite:t});let a=e.get(Hs,null,{optional:!0}),c=new oy(r.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,i,e,o?.snapshot(null));return r.impl.register(c),c}var ex=dy(null,"core",[]);function pf(t,n){let e=er(t),i=n.elementInjector||Fs();return new $o(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}function tx(t){let n=er(t);if(!n)return null;let e=new $o(n);return{get selector(){return e.selector},get type(){return e.componentType},get inputs(){return e.inputs},get outputs(){return e.outputs},get ngContentSelectors(){return e.ngContentSelectors},get isStandalone(){return n.standalone},get isSignal(){return n.signals}}}function nx(){return!1}var ix=null;function In(){return ix}function hy(t){ix??=t}var Yc=class{},cr=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=z({token:t,factory:()=>u(rx),providedIn:"platform"})}return t})(),my=new b(""),rx=(()=>{class t extends cr{_location;_history;_doc=u(J);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return In().getBaseHref(this._doc)}onPopState(e){let i=In().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=In().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=z({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function gf(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function ox(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function oi(t){return t&&t[0]!=="?"?`?${t}`:t}var si=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=z({token:t,factory:()=>u(yf),providedIn:"root"})}return t})(),vf=new b(""),yf=(()=>{class t extends si{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(J).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return gf(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+oi(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+oi(o));this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+oi(o));this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(T(cr),T(vf,8))};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ai=(()=>{class t{_subject=new I;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=kP(ox(sx(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+oi(i))}normalize(e){return t.stripTrailingSlash(TP(this._basePath,sx(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+oi(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+oi(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=oi;static joinWithSlash=gf;static stripTrailingSlash=ox;static \u0275fac=function(i){return new(i||t)(T(si))};static \u0275prov=z({token:t,factory:()=>MP(),providedIn:"root"})}return t})();function MP(){return new Ai(T(si))}function TP(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function sx(t){return t.replace(/\/index\.html$/,"")}function kP(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var py=(()=>{class t extends si{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(e){let i=gf(this._baseHref,e);return i.length>0?"#"+i:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+oi(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+oi(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(T(cr),T(vf,8))};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})();var _f=class{$implicit;ngForOf;index;count;constructor(n,e,i,r){this.$implicit=n,this.ngForOf=e,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},$r=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,i,r){this._viewContainer=e,this._template=i,this._differs=r}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let i=this._viewContainer;e.forEachOperation((r,o,s)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new _f(r.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)i.remove(o===null?void 0:o);else if(o!==null){let a=i.get(o);i.move(a,s),ax(a,r)}});for(let r=0,o=i.length;r<o;r++){let a=i.get(r).context;a.index=r,a.count=o,a.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);ax(o,r)})}static ngTemplateContextGuard(e,i){return!0}static \u0275fac=function(i){return new(i||t)(De(it),De(bt),De(Yo))};static \u0275dir=x({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function ax(t,n){t.context.$implicit=n.item}var Qo=(()=>{class t{_viewContainer;_context=new bf;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,i){this._viewContainer=e,this._thenTemplateRef=i}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){cx(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){cx(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,i){return!0}static \u0275fac=function(i){return new(i||t)(De(it),De(bt))};static \u0275dir=x({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),bf=class{$implicit=null;ngIf=null};function cx(t,n){if(t&&!t.createEmbeddedView)throw new D(2020,!1)}var gy=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,i,r){this._ngEl=e,this._differs=i,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,i){let[r,o]=e.split("."),s=r.indexOf("-")===-1?void 0:ii.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${i}${o}`:i,s):this._renderer.removeStyle(this._ngEl.nativeElement,r,s)}_applyChanges(e){e.forEachRemovedItem(i=>this._setStyle(i.key,null)),e.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),e.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}static \u0275fac=function(i){return new(i||t)(De(U),De(cy),De(ze))};static \u0275dir=x({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),vy=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(me);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(De(it))};static \u0275dir=x({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Qe]})}return t})();var yy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({})}return t})();function Qc(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()!==n)continue;let s=o;try{s=decodeURIComponent(o)}catch(a){}return s.length>1&&s[0]==='"'&&s[s.length-1]==='"'&&(s=s.slice(1,-1)),s}return null}var RP=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})(),_y=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=z({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=T(RP),r},providedIn:"root"})}return t})();var Sy="browser";function lx(t){return t===Sy}var wy=(()=>{class t{static \u0275prov=z({token:t,providedIn:"root",factory:()=>new by(u(J),window)})}return t})(),by=class{document;window;offset=()=>[0,0];constructor(n,e){this.document=n,this.window=e}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n,e){this.window.scrollTo(X(w({},e),{left:n[0],top:n[1]}))}scrollToAnchor(n,e){let i=AP(this.document,n);i&&(this.scrollToElement(i,e),i.focus({preventScroll:!0}))}setHistoryScrollRestoration(n){try{this.window.history.scrollRestoration=n}catch(e){console.warn(fn(2400,!1))}}scrollToElement(n,e){let i=n.getBoundingClientRect(),r=i.left+this.window.pageXOffset,o=i.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(X(w({},e),{left:r-s[0],top:o-s[1]}))}};function AP(t,n){let e=t.getElementById(n)||t.getElementsByName(n)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let i=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let o=r.shadowRoot;if(o){let s=o.getElementById(n)||o.querySelector(`[name="${CSS.escape(n)}"]`);if(s)return s}r=i.nextNode()}}return null}var Xc=class{_doc;constructor(n){this._doc=n}manager},Sf=(()=>{class t extends Xc{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(T(J))};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})(),Df=new b(""),Ey=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof Sf));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof Sf);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new D(-5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(T(Df),T(L))};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})(),Cy="ng-app-id";function dx(t){for(let n of t)n.remove()}function ux(t,n){let e=n.createElement("style");return e.textContent=t,e}function OP(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Cy}="${n}"],link[${Cy}="${n}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(Cy),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function xy(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Iy=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,OP(e,i,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,ux);i?.forEach(r=>this.addUsage(r,this.external,xy))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(dx(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])dx(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,ux(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,xy(i,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let i of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of i.elements)o.parentNode===e?o.remove():r.push(o);i.elements=r}}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(T(J),T(Lo),T(jr,8),T(Bo))};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})(),Dy={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ny=/%COMP%/g;var hx="%COMP%",FP=`_nghost-${hx}`,PP=`_ngcontent-${hx}`,LP=!0,BP=new b("",{factory:()=>LP}),VP=new b("");function jP(t){return PP.replace(Ny,t)}function UP(t){return FP.replace(Ny,t)}function mx(t,n){return n.map(e=>e.replace(Ny,t))}var tl=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,i,r,o,s,a,c=null,l=null,d=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=c,this.tracingService=l,this.cssVarNamespace=d??"",this.defaultRenderer=new Jc(e,s,a,this.tracingService,this.cssVarNamespace)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Cf?r.applyToHost(e):r instanceof el&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case ni.Emulated:o=new Cf(c,l,i,this.appId,d,s,a,f,this.cssVarNamespace);break;case ni.ShadowDom:return new wf(c,e,i,s,a,this.nonce,f,this.cssVarNamespace,l);case ni.ExperimentalIsolatedShadowDom:return new wf(c,e,i,s,a,this.nonce,f,this.cssVarNamespace);default:o=new el(c,l,i,d,s,a,f,this.cssVarNamespace);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(T(Ey),T(qo),T(Lo),T(BP),T(J),T(L),T(jr),T(ri,8),T(VP,8))};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})(),Jc=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r,o=""){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Dy[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(fx(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){if(n){let r=fx(n)?n.content:n;if(i!=null&&i.parentNode!==r)throw new D(-5106,HP(i));r.insertBefore(e,i)}}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new D(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=Dy[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=Dy[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){let o=e.startsWith("--");o&&(e=e.replace("%NS%",this.cssVarNamespace)),o||r&(ii.DashCase|ii.Important)?n.style.setProperty(e,i,r&ii.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){let r=e.startsWith("--");r&&(e=e.replace("%NS%",this.cssVarNamespace)),r||i&ii.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=In().getGlobalEventTarget(this.doc,n),!n))throw new D(-5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function fx(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}function HP(t){let n=t.textContent?.slice(0,50);return n?`${t.nodeName} ("${n}")`:t.nodeName}var wf=class extends Jc{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,s,a,c,l){super(n,r,o,a,c),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=i.styles;d=mx(i.id,d).map(h=>h.replace(/%NS%/g,c));for(let h of d){let m=document.createElement("style");s&&m.setAttribute("nonce",s),m.textContent=h,this.shadowRoot.appendChild(m)}let f=i.getExternalStyles?.();if(f)for(let h of f){let m=xy(h,r);s&&m.setAttribute("nonce",s),this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},el=class extends Jc{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,s,a,c,l){super(n,o,s,a,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=i.styles,f=l?mx(l,d):d;this.styles=f.map(h=>h.replace(/%NS%/g,c)),this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Hr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Cf=class extends el{contentAttr;hostAttr;constructor(n,e,i,r,o,s,a,c,l){let d=r+"-"+i.id;super(n,e,i,o,s,a,c,l,d),this.contentAttr=jP(d),this.hostAttr=UP(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var xf=class t extends Yc{supportsDOMEvents=!0;static makeCurrent(){hy(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=zP();return e==null?null:$P(e)}resetBaseElement(){nl=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Qc(document.cookie,n)}},nl=null;function zP(){return nl=nl||document.head.querySelector("base"),nl?nl.getAttribute("href"):null}function $P(t){return new URL(t,document.baseURI).pathname}var Ef=class{addToWindow(n){Wt.getAngularTestability=(i,r=!0)=>{let o=n.findTestabilityInTree(i,r);if(o==null)throw new D(5103,!1);return o},Wt.getAllAngularTestabilities=()=>n.getAllTestabilities(),Wt.getAllAngularRootElements=()=>n.getAllRootElements();let e=i=>{let r=Wt.getAllAngularTestabilities(),o=r.length,s=function(){o--,o==0&&i()};r.forEach(a=>{a.whenStable(s)})};Wt.frameworkStabilizers||(Wt.frameworkStabilizers=[]),Wt.frameworkStabilizers.push(e)}findTestabilityInTree(n,e,i){if(e==null)return null;let r=n.getTestability(e);return r??(i?In().isShadowRoot(e)?this.findTestabilityInTree(n,e.host,!0):this.findTestabilityInTree(n,e.parentElement,!0):null)}},px=["alt","control","meta","shift"],GP={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},qP={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},gx=(()=>{class t extends Xc{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let s=t.parseEventName(i),a=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>In().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),px.forEach(l=>{let d=i.indexOf(l);d>-1&&(i.splice(d,1),s+=l+".")}),s+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=s,c}static matchEventFullKeyCode(e,i){let r=GP[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),px.forEach(s=>{if(s!==r){let a=qP[s];a(e)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(T(J))};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})();function WP(){xf.makeCurrent()}function KP(){return new rn}function YP(){return nv(document),document}var QP=[{provide:Bo,useValue:Sy},{provide:pu,useValue:WP,multi:!0},{provide:J,useFactory:YP}],My=dy(ex,"browser",QP);var ZP=[{provide:ea,useClass:Ef},{provide:rf,useClass:Hc,deps:[L,zc,ea]},{provide:Hc,useClass:Hc,deps:[L,zc,ea]}],XP=[{provide:yc,useValue:"root"},{provide:rn,useFactory:KP},{provide:Df,useClass:Sf,multi:!0},{provide:Df,useClass:gx,multi:!0},tl,{provide:qo,useClass:Iy},{provide:Iy,useExisting:qo},Ey,{provide:ft,useExisting:tl},[]],il=(()=>{class t{constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({providers:[...XP,...ZP],imports:[yy,QD]})}return t})();var Pi=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init();for(let[e,i]of n.headers.entries())this.headers.set(e,i),this.normalizedNames.set(e,n.normalizedNames.get(e))}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=n.op==="a"?(this.headers.get(e)||[]).slice():[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=Array.isArray(o)?o:[o],a=this.headers.get(e);if(!a)return;a=a.filter(c=>s.indexOf(c)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Nf=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Mf=class{encodeKey(n){return vx(n)}encodeValue(n){return vx(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function JP(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,a]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],c=e.get(s)||[];c.push(a),e.set(s,c)}),e}var eL=/%(\d[a-f0-9])/gi,tL={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function vx(t){return encodeURIComponent(t).replace(eL,(n,e)=>tL[e]??n)}function If(t){return`${t}`}var lr=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Mf,n.fromString){if(n.fromObject)throw new D(2805,!1);this.map=JP(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(If):[If(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[n,e]of this.cloneFrom.map.entries())this.map.set(n,e);this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=n.op==="a"?(this.map.get(n.param)||[]).slice():[];e.push(If(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=(this.map.get(n.param)||[]).slice(),r=i.indexOf(If(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null}}};function nL(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function yx(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function _x(t){return typeof Blob<"u"&&t instanceof Blob}function bx(t){return typeof FormData<"u"&&t instanceof FormData}function iL(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var rl="Content-Type",Tf="Accept",Dx="text/plain",xx="application/json",Ex=`${xx}, ${Dx}, */*`,na=class t{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(nL(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new D(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Pi,this.context??=new Nf,!this.params)this.params=new lr,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e,c="",l=e.indexOf("#");l!==-1&&(c=e.substring(l),a=e.substring(0,l));let d=a.indexOf("?"),f=d===-1?"?":d<a.length-1?"&":"";this.urlWithParams=a+f+s+c}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||yx(this.body)||_x(this.body)||bx(this.body)||iL(this.body)?this.body:this.body instanceof lr?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||bx(this.body)?null:_x(this.body)?this.body.type||null:yx(this.body)?null:typeof this.body=="string"?Dx:this.body instanceof lr?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?xx:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,c=n.mode||this.mode,l=n.redirect||this.redirect,d=n.credentials||this.credentials,f=n.referrer??this.referrer,h=n.integrity||this.integrity,m=n.referrerPolicy||this.referrerPolicy,p=n.transferCache??this.transferCache,C=n.timeout??this.timeout,E=n.body!==void 0?n.body:this.body,N=n.withCredentials??this.withCredentials,R=n.reportProgress??this.reportProgress,te=n.reportUploadProgress??this.reportUploadProgress,Ae=n.reportDownloadProgress??this.reportDownloadProgress,kt=n.headers||this.headers,Le=n.params||this.params,et=n.context??this.context;return n.setHeaders!==void 0&&(kt=Object.keys(n.setHeaders).reduce((ot,Rt)=>ot.set(Rt,n.setHeaders[Rt]),kt)),n.setParams&&(Le=Object.keys(n.setParams).reduce((ot,Rt)=>ot.set(Rt,n.setParams[Rt]),Le)),new t(e,i,E,{params:Le,headers:kt,context:et,reportProgress:R,reportUploadProgress:te,reportDownloadProgress:Ae,responseType:r,withCredentials:N,transferCache:p,keepalive:o,cache:a,priority:s,timeout:C,mode:c,redirect:l,credentials:d,referrer:f,integrity:h,referrerPolicy:m})}},Fi=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Fi||{}),ia=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new Pi,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},ol=class t extends ia{constructor(n={}){super(n)}type=Fi.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},ra=class t extends ia{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Fi.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Oi=class extends ia{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},Ix=200,rL=204;var oL=/^\)\]\}',?\n/,BJ=1024*1024,Nx=new b("",{factory:()=>null}),kf=(()=>{class t{fetchImpl=u(ky,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=u(L);destroyRef=u(tt);maxResponseSize=u(Nx);handle(e){return new ne(i=>{let r=new AbortController,o=!1,s={next:c=>{c.type===Fi.Response&&(o=!0),i.next(c)},error:c=>{o=!0,i.error(c)},complete:()=>{o=!0,i.complete()}};this.doRequest(e,r.signal,s).then(Ry,c=>s.error(new Oi({error:c})));let a;return e.timeout&&(a=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{a!==void 0&&clearTimeout(a),!o&&!r.signal.aborted&&r.abort()}})}doRequest(e,i,r){return Re(this,null,function*(){let o=this.createRequestInit(e),s;try{let E=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,w({signal:i},o)));sL(E),r.next({type:Fi.Sent}),s=yield E}catch(E){r.error(new Oi({error:E,status:E.status??0,statusText:E.statusText,url:e.urlWithParams,headers:E.headers}));return}let a=new Pi(s.headers),c=s.statusText,l=s.url||e.urlWithParams,d=s.status,f=null,h=e.reportProgress||e.reportDownloadProgress;if(h&&r.next(new ol({headers:a,status:d,statusText:c,url:l})),s.body){let E=s.headers.get(rl)??"",N=s.headers.get("content-length"),R=N!==null?Number(N):NaN;this.maxResponseSize!==null&&Number.isFinite(R)&&R>this.maxResponseSize&&(yield s.body.cancel(),Sx(this.maxResponseSize));let te=[],Ae=s.body.getReader(),kt=0,Le,et,ot=typeof Zone<"u"&&Zone.current,Rt=!1;if(yield this.ngZone.runOutsideAngular(()=>Re(this,null,function*(){for(;;){if(this.destroyRef.destroyed){yield Ae.cancel(),Rt=!0;break}let{done:vs,value:qn}=yield Ae.read();if(vs)break;if(te.push(qn),kt+=qn.length,this.maxResponseSize!==null&&kt>this.maxResponseSize&&(yield Ae.cancel(),Sx(this.maxResponseSize)),h){et=e.responseType==="text"?(et??"")+(Le??=wx(E)).decode(qn,{stream:!0}):void 0;let ys=()=>r.next({type:Fi.DownloadProgress,total:Number.isFinite(R)?R:void 0,loaded:kt,partialText:et});ot?ot.run(ys):ys()}}})),Rt){r.complete();return}let br=this.concatChunks(te,kt);try{f=this.parseBody(e,br,E,d)}catch(vs){r.error(new Oi({error:vs,headers:new Pi(s.headers),status:s.status,statusText:s.statusText,url:s.url||e.urlWithParams}));return}}d===0&&(d=f?Ix:0);let m=d>=200&&d<300,p=s.redirected,C=s.type;m?(r.next(new ra({body:f,headers:a,status:d,statusText:c,url:l,redirected:p,responseType:C})),r.complete()):r.error(new Oi({error:f,headers:a,status:d,statusText:c,url:l,redirected:p,responseType:C}))})}parseBody(e,i,r,o){switch(e.responseType){case"json":let s=new TextDecoder().decode(i).replace(oL,"");if(s==="")return null;try{return JSON.parse(s)}catch(a){if(o<200||o>=300)return s;throw a}case"text":return wx(r).decode(i);case"blob":return new Blob([i],{type:r});case"arraybuffer":return i.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new D(2824,!1);let i={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((o,s)=>i[o]=s.join(",")),e.headers.has(Tf)||(i[Tf]=Ex),!e.headers.has(rl)){let o=e.detectContentTypeHeader();o!==null&&(i[rl]=o)}return{body:e.serializeBody(),method:e.method,headers:i,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,i){let r=new Uint8Array(i),o=0;for(let s of e)r.set(s,o),o+=s.length;return r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})(),ky=class{};function Ry(){}function sL(t){t.then(Ry,Ry)}function Sx(t){throw new D(-2825,!1)}var aL=/charset=\s*["']?([^;"'\s]+)["']?/i;function wx(t){let n=t.match(aL);if(n!==null)try{return new TextDecoder(n[1])}catch(e){}return new TextDecoder}var cL=new b("",{factory:()=>!0}),lL="XSRF-TOKEN",dL=new b("",{factory:()=>lL}),uL="X-XSRF-TOKEN",fL=new b("",{factory:()=>uL}),hL=(()=>{class t{cookieName=u(dL);doc=u(J);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Qc(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})(),Mx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=z({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=T(hL),r},providedIn:"root"})}return t})();function Tx(t,n){if(!u(cL)||t.method==="GET"||t.method==="HEAD")return n(t);try{let r=u(cr).href,{origin:o}=new URL(r),{origin:s}=new URL(t.url,o);if(o!==s)return n(t)}catch(r){return n(t)}let e=u(Mx).getToken(),i=u(fL);return e!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,e)})),n(t)}function kx(t,n){return n(t)}function mL(t,n){return(e,i)=>n.intercept(e,{handle:r=>t(r,i)})}function pL(t,n,e){return(i,r)=>Dt(e,()=>n(i,o=>t(o,r)))}var Rx=new b(""),Oy=new b("",{factory:()=>[Tx]}),Ax=new b(""),Fy=new b("",{factory:()=>!0});function gL(){let t=null;return(n,e)=>{t===null&&(t=(u(Rx,{optional:!0})??[]).reduceRight(mL,kx));let i=u(Vo);if(u(Fy)){let o=i.add();return t(n,e).pipe(Rr(o))}else return t(n,e)}}var Af=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=z({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=T(kf),r},providedIn:"root"})}return t})();var Rf=(()=>{class t{backend;injector;chain=null;pendingTasks=u(Vo);contributeToStability=u(Fy);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let r=this.injector.get(Of,null,{skipSelf:!0}),o=r!==null&&this.backend===r,s=this.injector.get(Ax,[],o?{self:!0}:void 0),a=Array.from(new Set([...this.injector.get(Oy),...s]));this.chain=a.reduceRight((c,l)=>pL(c,l,this.injector),kx)}let i=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return xe(()=>i(e,o=>this.backend.handle(o))).pipe(Rr(r))}else return xe(()=>i(e,r=>this.backend.handle(r)))}static \u0275fac=function(i){return new(i||t)(T(Af),T(He))};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Of=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=z({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=T(Rf),r},providedIn:"root"})}return t})();function Ty(t,n){return w({body:n},t)}var Ff=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof na)o=e;else{let c;r.headers instanceof Pi?c=r.headers:c=new Pi(r.headers);let l;r.params&&(r.params instanceof lr?l=r.params:l=new lr({fromObject:r.params})),o=new na(e,i,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=W(o).pipe(kr(c=>this.handler.handle(c)));if(e instanceof na||r.observe==="events")return s;let a=s.pipe(Me(c=>c instanceof ra));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(he(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new D(2806,!1);return c.body}));case"blob":return a.pipe(he(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new D(2807,!1);return c.body}));case"text":return a.pipe(he(c=>{if(c.body!==null&&typeof c.body!="string")throw new D(2808,!1);return c.body}));default:return a.pipe(he(c=>c.body))}case"response":return a;default:throw new D(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new lr().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,Ty(r,i))}post(e,i,r={}){return this.request("POST",e,Ty(r,i))}put(e,i,r={}){return this.request("PUT",e,Ty(r,i))}static \u0275fac=function(i){return new(i||t)(T(Of))};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var vL=/^\)\]\}',?\n/;var Ay=(()=>{class t{xhrFactory;tracingService=u(ri,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new D(-2800,!1);let i=this.xhrFactory;return W(null).pipe(Xe(()=>new ne(o=>{let s=i.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((R,te)=>s.setRequestHeader(R,te.join(","))),e.headers.has(Tf)||s.setRequestHeader(Tf,Ex),!e.headers.has(rl)){let R=e.detectContentTypeHeader();R!==null&&s.setRequestHeader(rl,R)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let R=e.responseType.toLowerCase();s.responseType=R!=="json"?R:"text"}let a=e.serializeBody(),c=null,l=()=>{if(c!==null)return c;let R=s.statusText||"OK",te=new Pi(s.getAllResponseHeaders()),Ae=s.responseURL||e.url;return c=new ol({headers:te,status:s.status,statusText:R,url:Ae}),c},d=this.maybePropagateTrace(()=>{let{headers:R,status:te,statusText:Ae,url:kt}=l(),Le=null;te!==rL&&(Le=typeof s.response>"u"?s.responseText:s.response),te===0&&(te=Le?Ix:0);let et=te>=200&&te<300;if(e.responseType==="json"&&typeof Le=="string"){let ot=Le;Le=Le.replace(vL,"");try{Le=Le!==""?JSON.parse(Le):null}catch(Rt){Le=ot,et&&(et=!1,Le={error:Rt,text:Le})}}et?(o.next(new ra({body:Le,headers:R,status:te,statusText:Ae,url:kt||void 0})),o.complete()):o.error(new Oi({error:Le,headers:R,status:te,statusText:Ae,url:kt||void 0}))}),f=this.maybePropagateTrace(R=>{let{url:te}=l(),Ae=new Oi({error:R,status:s.status||0,statusText:s.statusText||"Unknown Error",url:te||void 0});o.error(Ae)}),h=f;e.timeout&&(h=this.maybePropagateTrace(R=>{let{url:te}=l(),Ae=new Oi({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:te||void 0});o.error(Ae)}));let m=!1,p=this.maybePropagateTrace(R=>{m||(o.next(l()),m=!0);let te={type:Fi.DownloadProgress,loaded:R.loaded};R.lengthComputable&&(te.total=R.total),e.responseType==="text"&&s.responseText&&(te.partialText=s.responseText),o.next(te)}),C=this.maybePropagateTrace(R=>{let te={type:Fi.UploadProgress,loaded:R.loaded};R.lengthComputable&&(te.total=R.total),o.next(te)});s.addEventListener("load",d),s.addEventListener("error",f),s.addEventListener("timeout",h),s.addEventListener("abort",f);let E=e.reportProgress||e.reportUploadProgress,N=e.reportProgress||e.reportDownloadProgress;return N&&s.addEventListener("progress",p),E&&a!==null&&s.upload&&s.upload.addEventListener("progress",C),s.send(a),o.next({type:Fi.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",d),s.removeEventListener("timeout",h),N&&s.removeEventListener("progress",p),E&&a!==null&&s.upload&&s.upload.removeEventListener("progress",C),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(i){return new(i||t)(T(_y))};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Pf=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t[t.Xhr=7]="Xhr",t})(Pf||{});function Ox(t,n){return{\u0275kind:t,\u0275providers:n}}function Fx(...t){let n=[Ff,kf,Rf,{provide:Of,useExisting:Rf},{provide:Af,useFactory:()=>u(kf)},{provide:Oy,useValue:Tx,multi:!0}];for(let e of t)n.push(...e.\u0275providers);return Kn(n)}var Cx=new b("");function Px(){return Ox(Pf.LegacyInterceptors,[{provide:Cx,useFactory:gL},{provide:Oy,useExisting:Cx,multi:!0}])}function Lx(){return Ox(Pf.Xhr,[Ay,{provide:Af,useExisting:Ay}])}var Py=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({providers:[Fx(Px(),Lx())]})}return t})();var Bx=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(T(J))};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var sl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=z({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=T(_L),r},providedIn:"root"})}return t})(),_L=(()=>{class t extends sl{_doc=u(J);sanitize(e,i){if(i==null)return null;switch(e){case Oe.NONE:return i;case Oe.HTML:return Ii(i,"HTML")?hn(i):$u(this._doc,String(i)).toString();case Oe.STYLE:return Ii(i,"Style")?hn(i):i;case Oe.SCRIPT:if(Ii(i,"Script"))return hn(i);throw new D(5200,!1);case Oe.URL:return Ii(i,"URL")?hn(i):Lc(String(i));case Oe.RESOURCE_URL:if(Ii(i,"ResourceURL"))return hn(i);throw new D(-5201,!1);default:throw new D(5202,!1)}}bypassSecurityTrustHtml(e){return sv(e)}bypassSecurityTrustStyle(e){return av(e)}bypassSecurityTrustScript(e){return cv(e)}bypassSecurityTrustUrl(e){return lv(e)}bypassSecurityTrustResourceUrl(e){return dv(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var _e="primary",yl=Symbol("RouteTitle"),Hy=class{params;constructor(n){this.params=n||{}}has(n){return Object.hasOwn(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Xo(t){return new Hy(t)}function By(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function qx(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let c={},l=t.slice(0,i.length);return By(i,l,c)?{consumed:l,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),s=i.slice(r+1);if(o.length+s.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let a={};return!By(o,t.slice(0,o.length),a)||!By(s,t.slice(t.length-s.length),a)?null:{consumed:t,posParams:a}}function Hf(t){return new Promise((n,e)=>{t.pipe(Qi()).subscribe({next:i=>n(i),error:i=>e(i)})})}function bL(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Li(t[e],n[e]))return!1;return!0}function Li(t,n){let e=t?zy(t):void 0,i=n?zy(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Wx(t[r],n[r]))return!1;return!0}function zy(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Wx(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function SL(t){return t.length>0?t[t.length-1]:null}function es(t){return wo(t)?t:sr(t)?Ke(Promise.resolve(t)):W(t)}function Kx(t){return wo(t)?Hf(t):Promise.resolve(t)}var wL={exact:Zx,subset:Xx},Yx={exact:CL,subset:DL,ignored:()=>!0},Qx={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},$y={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Vx(t,n,e){return wL[e.paths](t.root,n.root,e.matrixParams)&&Yx[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function CL(t,n){return Li(t,n)}function Zx(t,n,e){if(!Zo(t.segments,n.segments)||!Vf(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!Zx(t.children[i],n.children[i],e))return!1;return!0}function DL(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>Wx(t[e],n[e]))}function Xx(t,n,e){return Jx(t,n,n.segments,e)}function Jx(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Zo(r,e)||n.hasChildren()||!Vf(r,e,i))}else if(t.segments.length===e.length){if(!Zo(t.segments,e)||!Vf(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!Xx(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Zo(t.segments,r)||!Vf(t.segments,r,i)||!t.children[_e]?!1:Jx(t.children[_e],n,o,i)}}function Vf(t,n,e){return n.every((i,r)=>Yx[e](t[r].parameters,i.parameters))}var Mn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new je([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Xo(this.queryParams),this._queryParamMap}toString(){return IL.serialize(this)}},je=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return jf(this)}},Gr=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Xo(this.parameters),this._parameterMap}toString(){return tE(this)}};function xL(t,n){return Zo(t,n)&&t.every((e,i)=>Li(e.parameters,n[i].parameters))}function Zo(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function EL(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===_e&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==_e&&(e=e.concat(n(r,i)))}),e}var Kr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:()=>new ur})}return t})(),ur=class{parse(n){let e=new qy(n);return new Mn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${al(n.root,!0)}`,i=TL(n.queryParams),r=typeof n.fragment=="string"?`#${NL(n.fragment)}`:"";return`${e}${i}${r}`}},IL=new ur;function jf(t){return t.segments.map(n=>tE(n)).join("/")}function al(t,n){if(!t.hasChildren())return jf(t);if(n){let e=t.children[_e]?al(t.children[_e],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==_e&&i.push(`${r}:${al(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=EL(t,(i,r)=>r===_e?[al(t.children[_e],!1)]:[`${r}:${al(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[_e]!=null?`${jf(t)}/${e[0]}`:`${jf(t)}/(${e.join("//")})`}}function eE(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Lf(t){return eE(t).replace(/%3B/gi,";")}function NL(t){return encodeURI(t)}function Gy(t){return eE(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Uf(t){return decodeURIComponent(t)}function jx(t){return Uf(t.replace(/\+/g,"%20"))}function tE(t){return`${Gy(t.path)}${ML(t.parameters)}`}function ML(t){return Object.entries(t).map(([n,e])=>`;${Gy(n)}=${Gy(e)}`).join("")}function TL(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${Lf(e)}=${Lf(r)}`).join("&"):`${Lf(e)}=${Lf(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var kL=/^[^\/()?;#]+/;function Vy(t){let n=t.match(kL);return n?n[0]:""}var RL=/^[^\/()?;=#]+/;function AL(t){let n=t.match(RL);return n?n[0]:""}var OL=/^[^=?&#]+/;function FL(t){let n=t.match(OL);return n?n[0]:""}var PL=/^[^&#]+/;function LL(t){let n=t.match(PL);return n?n[0]:""}var qy=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new je([],{}):new je([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new D(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[_e]=new je(e,i)),r}parseSegment(){let n=Vy(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new D(4009,!1);return this.capture(n),new Gr(Uf(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=AL(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=Vy(this.remaining);r&&(i=r,this.capture(i))}n[Uf(e)]=Uf(i)}parseQueryParam(n){let e=FL(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let s=LL(this.remaining);s&&(i=s,this.capture(i))}let r=jx(e),o=jx(i);if(Object.hasOwn(n,r)){let s=n[r];Array.isArray(s)||(s=[s],n[r]=s),s.push(o)}else n[r]=o}parseParens(n,e){let i=Object.create(null);for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Vy(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new D(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):n&&(s=_e);let a=this.parseChildren(e+1);i[s??_e]=Object.keys(a).length===1&&a[_e]?a[_e]:new je([],a),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new D(4011,!1)}};function nE(t){return t.segments.length>0?new je([],{[_e]:t}):t}function iE(t){let n=Object.create(null);for(let[i,r]of Object.entries(t.children)){let o=iE(r);if(i===_e&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))n[s]=a;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new je(t.segments,n);return BL(e)}function BL(t){if(t.numberOfChildren===1&&t.children[_e]){let n=t.children[_e];return new je(t.segments.concat(n.segments),n.children)}return t}function qr(t){return t instanceof Mn}function rE(t,n,e=null,i=null,r=new ur){let o=oE(t);return sE(o,n,e,i,r)}function oE(t){let n;function e(o){let s={};for(let c of o.children){let l=e(c);s[c.outlet]=l}let a=new je(o.url,s);return o===t&&(n=a),a}let i=e(t.root),r=nE(i);return n??r}function sE(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return jy(o,o,o,e,i,r);let s=VL(n);if(s.toRoot())return jy(o,o,new je([],{}),e,i,r);let a=jL(s,o,t),c=a.processChildren?ll(a.segmentGroup,a.index,s.commands):cE(a.segmentGroup,a.index,s.commands);return jy(o,a.segmentGroup,c,e,i,r)}function zf(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function ul(t){return typeof t=="object"&&t!=null&&t.outlets}function Ux(t,n,e){t||="\u0275";let i=new Mn;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function jy(t,n,e,i,r,o){let s={};for(let[l,d]of Object.entries(i??{}))s[l]=Array.isArray(d)?d.map(f=>Ux(l,f,o)):Ux(l,d,o);let a;t===n?a=e:a=aE(t,n,e);let c=nE(iE(a));return new Mn(c,s,r)}function aE(t,n,e){let i=Object.create(null);return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=aE(o,n,e)}),new je(t.segments,i)}var $f=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&zf(i[0]))throw new D(4003,!1);let r=i.find(ul);if(r&&r!==SL(i))throw new D(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function VL(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new $f(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?e=!0:a===".."?n++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new $f(e,n,i)}var sa=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function jL(t,n,e){if(t.isAbsolute)return new sa(n,!0,0);if(!e)return new sa(n,!1,NaN);if(e.parent===null)return new sa(e,!0,0);let i=zf(t.commands[0])?0:1,r=e.segments.length-1+i;return UL(e,r,t.numberOfDoubleDots)}function UL(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new D(4005,!1);r=i.segments.length}return new sa(i,!1,r-o)}function HL(t){return ul(t[0])?t[0].outlets:{[_e]:t}}function cE(t,n,e){if(t??=new je([],{}),t.segments.length===0&&t.hasChildren())return ll(t,n,e);let i=zL(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new je(t.segments.slice(0,i.pathIndex),{});return o.children[_e]=new je(t.segments.slice(i.pathIndex),t.children),ll(o,0,r)}else return i.match&&r.length===0?new je(t.segments,{}):i.match&&!t.hasChildren()?Wy(t,n,e):i.match?ll(t,0,r):Wy(t,n,e)}function ll(t,n,e){if(e.length===0)return new je(t.segments,{});{let i=HL(e),r=Object.create(null);if(Object.keys(i).some(o=>o!==_e)&&t.children[_e]&&t.numberOfChildren===1&&t.children[_e].segments.length===0){let o=ll(t.children[_e],n,e);return new je(t.segments,o.children)}return Object.entries(i).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=cE(t.children[o],n,s))}),Object.entries(t.children).forEach(([o,s])=>{i[o]===void 0&&(r[o]=s)}),new je(t.segments,r)}}function zL(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let s=t.segments[r],a=e[i];if(ul(a))break;let c=`${a}`,l=i<e.length-1?e[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!zx(c,l,s))return o;i+=2}else{if(!zx(c,{},s))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Wy(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(ul(o)){let c=$L(o.outlets);return new je(i,c)}if(r===0&&zf(e[0])){let c=t.segments[n];i.push(new Gr(c.path,Hx(e[0]))),r++;continue}let s=ul(o)?o.outlets[_e]:`${o}`,a=r<e.length-1?e[r+1]:null;s&&a&&zf(a)?(i.push(new Gr(s,Hx(a))),r+=2):(i.push(new Gr(s,{})),r++)}return new je(i,{})}function $L(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=Wy(new je([],{}),0,i))}),n}function Hx(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function zx(t,n,e){return t==e.path&&Li(n,e.parameters)}var aa="imperative",Mt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(Mt||{}),Tn=class{id;url;constructor(n,e){this.id=n,this.url=e}},Wr=class extends Tn{type=Mt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},zn=class extends Tn{urlAfterRedirects;type=Mt.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Jt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(Jt||{}),la=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(la||{}),Hn=class extends Tn{reason;code;type=Mt.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function lE(t){return t instanceof Hn&&(t.code===Jt.Redirect||t.code===Jt.SupersededByNewNavigation)}var Bi=class extends Tn{reason;code;type=Mt.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},Jo=class extends Tn{error;target;type=Mt.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},fl=class extends Tn{urlAfterRedirects;state;type=Mt.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Gf=class extends Tn{urlAfterRedirects;state;type=Mt.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},qf=class extends Tn{urlAfterRedirects;state;shouldActivate;type=Mt.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Wf=class extends Tn{urlAfterRedirects;state;type=Mt.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Kf=class extends Tn{urlAfterRedirects;state;type=Mt.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Yf=class{route;type=Mt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Qf=class{route;type=Mt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Zf=class{snapshot;type=Mt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Xf=class{snapshot;type=Mt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Jf=class{snapshot;type=Mt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},eh=class{snapshot;type=Mt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},da=class{routerEvent;position;anchor;scrollBehavior;type=Mt.Scroll;constructor(n,e,i,r){this.routerEvent=n,this.position=e,this.anchor=i,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},ua=class{},hl=class{},fa=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function GL(t){return!(t instanceof ua)&&!(t instanceof fa)&&!(t instanceof hl)}var th=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new ts(this.rootInjector)}},ts=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new th(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(T(He))};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),nh=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Ky(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=Ky(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Yy(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Yy(n,this._root).map(e=>e.value)}};function Ky(t,n){if(t===n.value)return n;for(let e of n.children){let i=Ky(t,e);if(i)return i}return null}function Yy(t,n){if(t===n.value)return[n];for(let e of n.children){let i=Yy(t,e);if(i.length)return i.unshift(n),i}return[]}var Nn=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function oa(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var ml=class extends nh{snapshot;constructor(n,e){super(n),this.snapshot=e,o_(this,n)}toString(){return this.snapshot.toString()}};function dE(t,n){let e=qL(t,n),i=new vt([new Gr("",{})]),r=new vt({}),o=new vt({}),s=new vt({}),a=new vt(""),c=new fr(i,r,s,a,o,_e,t,e.root);return c.snapshot=e.root,new ml(new Nn(c,[]),e)}function qL(t,n){let e={},i={},r={},s=new ha([],e,r,"",i,_e,t,null,{},n);return new pl("",new Nn(s,[]))}var fr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(n,e,i,r,o,s,a,c){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(he(l=>l[yl]))??W(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(he(n=>Xo(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(he(n=>Xo(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(n){this._futureSnapshot=n,this.pending?.set(!0)}},WL="always";function r_(t,n,e){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:w(w({},n.params),t.params),data:w(w({},n.data),t.data),resolve:w(w(w(w({},t.data),n.data),r?.data),t._resolvedData)}:i={params:w({},t.params),data:w({},t.data),resolve:w(w({},t.data),t._resolvedData??{})},r&&fE(r)&&(i.resolve[yl]=r.title),i}var ha=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[yl]}constructor(n,e,i,r,o,s,a,c,l,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=c,this._resolve=l,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Xo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Xo(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},pl=class extends nh{url;constructor(n,e){super(e),this.url=n,o_(this,e)}toString(){return uE(this._root)}};function o_(t,n){n.value._routerState=t,n.children.forEach(e=>o_(t,e))}function uE(t){let n=t.children.length>0?` { ${t.children.map(uE).join(", ")} } `:"";return`${t.value}${n}`}function Uy(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Li(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Li(n.params,e.params)||t.paramsSubject.next(e.params),bL(n.url,e.url)||t.urlSubject.next(e.url),Li(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Qy(t,n){let e=Li(t.params,n.params)&&xL(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||Qy(t.parent,n.parent))}function fE(t){return typeof t.title=="string"||t.title===null}var hE=new b(""),_l=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=_e;activateEvents=new se;deactivateEvents=new se;attachEvents=new se;detachEvents=new se;routerOutletData=Xt();parentContexts=u(ts);location=u(it);changeDetector=u(Je);inputBinder=u(bl,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new D(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new D(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new D(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new D(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Zy(e,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Qe]})}return t})(),Zy=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===fr?this.route:n===ts?this.childContexts:n===hE?this.outletData:this.parent.get(n,e)}},bl=new b(""),mE=(()=>{class t{options;outletDataSubscriptions=new Map;outletSeenKeys=new Map;constructor(e){this.options=e,this.options.queryParams??=!0}bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e),this.outletSeenKeys.delete(e)}subscribeToRouteData(e){let{activatedRoute:i}=e,r=Nr([this.options.queryParams?i.queryParams:W({}),i.params,i.data]).pipe(Xe(([o,s,a],c)=>(a=w(w(w({},o),s),a),c===0?W(a):Promise.resolve(a)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(e);return}let s=tx(i.component);if(!s){this.unsubscribeFromRouteData(e);return}let a=this.outletSeenKeys.get(e);a||(a=new Set,this.outletSeenKeys.set(e,a));for(let l of Object.keys(o))a.add(l);let c=this.options.unmatchedInputBehavior??"alwaysUndefined";for(let{templateName:l}of s.inputs){let d=o[l];(d!==void 0||c==="alwaysUndefined"||a.has(l))&&e.activatedComponentRef.setInput(l,d)}});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(i){Wo()};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})(),s_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&K(0,"router-outlet")},dependencies:[_l],encapsulation:2,changeDetection:1})}return t})();function a_(t){let n=t.children&&t.children.map(a_),e=n?X(w({},t),{children:n}):w({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==_e&&(e.component=s_),e}function KL(t,n,e){let i=new Set,r=gl(t,n._root,e?e._root:void 0,i);return{newlyCreatedRoutes:i,state:new ml(r,n)}}function gl(t,n,e,i){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let r=e.value;r._setPending(n.value);let o=YL(t,n,e,i);return new Nn(r,o)}else{if(t.shouldAttach(n.value)){let s=t.retrieve(n.value);if(s!==null){let a=s.route;return a.value._setPending(n.value),a.children=n.children.map(c=>gl(t,c,void 0,i)),a}}let r=QL(n.value);r._setPending(n.value),i.add(r);let o=n.children.map(s=>gl(t,s,void 0,i));return new Nn(r,o)}}function YL(t,n,e,i){return n.children.map(r=>{for(let o of e.children)if(t.shouldReuseRoute(r.value,o.value.snapshot))return gl(t,r,o,i);return gl(t,r,void 0,i)})}function QL(t){return new fr(new vt(t.url),new vt(t.params),new vt(t.queryParams),new vt(t.fragment),new vt(t.data),t.outlet,t.component,t)}var ma=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},pE="ngNavigationCancelingError";function ih(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=qr(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=gE(!1,Jt.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function gE(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[pE]=!0,e.cancellationCode=n,e}function ZL(t){return vE(t)&&qr(t.url)}function vE(t){return!!t&&t[pE]}var Xy=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),Uy(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=oa(e);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],i),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let s=i.getContext(r.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=oa(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(i&&i.outlet){let s=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=oa(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null),n.value._localInjector?.destroy()}activateChildRoutes(n,e,i){let r=oa(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new eh(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Xf(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(Uy(r),r===o)if(r.component){let s=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let s=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Uy(a.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,i)}},rh=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},ca=class{component;route;constructor(n,e){this.component=n,this.route=e}};function XL(t,n,e){let i=t._root,r=n?n._root:null;return cl(i,r,e,[i.value])}function JL(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function ga(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!wp(t)?t:n.get(t):i}function cl(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=oa(n);return t.children.forEach(s=>{e2(s,o[s.value.outlet],e,i.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>dl(a,e.getContext(s),e,r)),r}function e2(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=n?n.value:null,a=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let c=t2(s,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new rh(i)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?cl(t,n,a?a.children:null,i,r):cl(t,n,e,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new ca(a.outlet.component,s))}else s&&dl(n,a,e,r),r.canActivateChecks.push(new rh(i)),o.component?cl(t,null,a?a.children:null,i,r):cl(t,null,e,i,r);return r}function t2(t,n,e){if(typeof e=="function")return Dt(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!Zo(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Zo(t.url,n.url)||!Li(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Qy(t,n)||!Li(t.queryParams,n.queryParams);default:return!Qy(t,n)}}function dl(t,n,e,i){let r=oa(t),o=t.value;Object.entries(r).forEach(([s,a])=>{o.component?n?dl(a,n.children.getContext(s),n.children,i):dl(a,null,null,i):dl(a,e?e.getContext(s):null,e,i)}),o.component?n&&n.outlet&&n.outlet.isActivated?i.canDeactivateChecks.push(new ca(n.outlet.component,o)):i.canDeactivateChecks.push(new ca(null,o)):i.canDeactivateChecks.push(new ca(null,o))}function Sl(t){return typeof t=="function"}function n2(t){return typeof t=="boolean"}function i2(t){return t&&Sl(t.canLoad)}function r2(t){return t&&Sl(t.canActivate)}function o2(t){return t&&Sl(t.canActivateChild)}function s2(t){return t&&Sl(t.canDeactivate)}function a2(t){return t&&Sl(t.canMatch)}function yE(t){return t instanceof Co||t?.name==="EmptyError"}var Bf=Symbol("INITIAL_VALUE");function pa(){return Xe(t=>Nr(t.map(n=>n.pipe(yt(1),Ot(Bf)))).pipe(he(n=>{for(let e of n)if(e!==!0){if(e===Bf)return Bf;if(e===!1||c2(e))return e}return!0}),Me(n=>n!==Bf),yt(1)))}function c2(t){return qr(t)||t instanceof ma}function _E(t){return t.aborted?W(void 0).pipe(yt(1)):new ne(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function bE(t){return Be(_E(t))}function l2(t){return Lt(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?W(X(w({},n),{guardsResult:!0})):d2(o,e,i).pipe(Lt(s=>s&&n2(s)?u2(e,r,t):W(s)),he(s=>X(w({},n),{guardsResult:s})))})}function d2(t,n,e){return Ke(t).pipe(Lt(i=>g2(i.component,i.route,e,n)),Qi(i=>i!==!0,!0))}function u2(t,n,e){return Ke(n).pipe(kr(i=>Ns(h2(i.route.parent,e),f2(i.route,e),p2(t,i.path),m2(t,i.route))),Qi(i=>i!==!0,!0))}function f2(t,n){return t!==null&&n&&n(new Jf(t)),W(!0)}function h2(t,n){return t!==null&&n&&n(new Zf(t)),W(!0)}function m2(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return W(!0);let i=e.map(r=>nc(()=>{let o=n._environmentInjector,s=ga(r,o),a=r2(s)?s.canActivate(n,t):Dt(o,()=>s(n,t));return es(a).pipe(Qi())}));return W(i).pipe(pa())}function p2(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>JL(o)).filter(o=>o!==null).map(o=>nc(()=>{let s=o.guards.map(a=>{let c=o.node._environmentInjector,l=ga(a,c),d=o2(l)?l.canActivateChild(e,t):Dt(c,()=>l(e,t));return es(d).pipe(Qi())});return W(s).pipe(pa())}));return W(r).pipe(pa())}function g2(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return W(!0);let o=r.map(s=>{let a=n._environmentInjector,c=ga(s,a),l=s2(c)?c.canDeactivate(t,n,e,i):Dt(a,()=>c(t,n,e,i));return es(l).pipe(Qi())});return W(o).pipe(pa())}function v2(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return W(!0);let s=o.map(a=>{let c=ga(a,t),l=i2(c)?c.canLoad(n,e):Dt(t,()=>c(n,e)),d=es(l);return r?d.pipe(bE(r)):d});return W(s).pipe(pa(),SE(i))}function SE(t){return ud(Ft(n=>{if(typeof n!="boolean")throw ih(t,n)}),he(n=>n===!0))}function y2(t,n,e,i,r,o){let s=n.canMatch;if(!s||s.length===0)return W(!0);let a=s.map(c=>{let l=ga(c,t),d=a2(l)?l.canMatch(n,e,r):Dt(t,()=>l(n,e,r));return es(d).pipe(bE(o))});return W(a).pipe(pa(),SE(i))}var dr=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},vl=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function _2(t){throw new D(4e3,!1)}function b2(t){throw gE(!1,Jt.GuardRejected)}var Jy=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}lineralizeSegments(n,e){return Re(this,null,function*(){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[_e])throw _2(`${n.redirectTo}`);r=r.children[_e]}})}applyRedirectCommands(n,e,i,r,o){return Re(this,null,function*(){let s=yield S2(e,r,o);if(s instanceof Mn)throw new vl(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,i);if(s[0]==="/")throw new vl(a);return a})}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new Mn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);i[r]=e[a]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),s=Object.create(null);return Object.entries(e.children).forEach(([a,c])=>{s[a]=this.createSegmentGroup(n,c,i,r)}),new je(o,s)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new D(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function S2(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Hf(es(Dt(e,()=>i(n))))}function w2(t,n){return t.providers&&!t._injector&&(t._injector=Xs(t.providers,n,`Route: ${t.path}`)),t._injector??n}function ai(t){return t.outlet||_e}function C2(t,n){let e=t.filter(i=>ai(i)===n);return e.push(...t.filter(i=>ai(i)!==n)),e}var e_={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function wE(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function D2(t,n,e,i,r,o,s){let a=CE(t,n,e);if(!a.matched)return W(a);let c=wE(o(a));return i=w2(n,i),y2(i,n,e,r,c,s).pipe(he(l=>l===!0?a:w({},e_)))}function CE(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?w({},e_):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||qx)(e,t,n);if(!r)return w({},e_);let o={};Object.entries(r.posParams??{}).forEach(([a,c])=>{o[a]=c.path});let s=r.consumed.length>0?w(w({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function $x(t,n,e,i,r){return e.length>0&&I2(t,e,i,r)?{segmentGroup:new je(n,E2(i,new je(e,t.children))),slicedSegments:[]}:e.length===0&&N2(t,e,i)?{segmentGroup:new je(t.segments,x2(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new je(t.segments,t.children),slicedSegments:e}}function x2(t,n,e,i){let r={};for(let o of e)if(sh(t,n,o)&&!i[ai(o)]){let s=new je([],{});r[ai(o)]=s}return w(w({},i),r)}function E2(t,n){let e={};e[_e]=n;for(let i of t)if(i.path===""&&ai(i)!==_e){let r=new je([],{});e[ai(i)]=r}return e}function I2(t,n,e,i){return e.some(r=>!sh(t,n,r)||!(ai(r)!==_e)?!1:!(i!==void 0&&ai(r)===i))}function N2(t,n,e){return e.some(i=>sh(t,n,i))}function sh(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function M2(t,n,e){return n.length===0&&!t.children[e]}var t_=class{};function T2(t,n,e,i,r,o,s,a){return Re(this,null,function*(){return new n_(t,n,e,i,r,s,o,a).recognize()})}var k2=31,n_=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,s,a,c){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=c,this.applyRedirects=new Jy(this.urlSerializer,this.urlTree)}noMatchError(n){return new D(4002,`'${n.segmentGroup}'`)}recognize(){return Re(this,null,function*(){let n=$x(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=yield this.match(n),r=new Nn(i,e),o=new pl("",r),s=rE(i,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}})}match(n){return Re(this,null,function*(){let e=new ha([],Object.freeze({}),Object.freeze(w({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),_e,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,n,_e,e),rootSnapshot:e}}catch(i){if(i instanceof vl)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof dr?this.noMatchError(i):i}})}processSegmentGroup(n,e,i,r,o){return Re(this,null,function*(){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let s=yield this.processSegment(n,e,i,i.segments,r,!0,o);return s instanceof Nn?[s]:[]})}processChildren(n,e,i,r){return Re(this,null,function*(){let o=[];for(let c of Object.keys(i.children))c==="primary"?o.unshift(c):o.push(c);let s=[];for(let c of o){let l=i.children[c],d=C2(e,c),f=yield this.processSegmentGroup(n,d,l,c,r);s.push(...f)}let a=DE(s);return R2(a),a})}processSegment(n,e,i,r,o,s,a){return Re(this,null,function*(){for(let c of e)try{return yield this.processSegmentAgainstRoute(c._injector??n,e,c,i,r,o,s,a)}catch(l){if(l instanceof dr||yE(l))continue;throw l}if(M2(i,r,o))return new t_;throw new dr(i)})}processSegmentAgainstRoute(n,e,i,r,o,s,a,c){return Re(this,null,function*(){if(ai(i)!==s&&(s===_e||!sh(r,o,i)))throw new dr(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,s,c);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,s,c);throw new dr(r)})}expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,s,a){return Re(this,null,function*(){let{matched:c,parameters:l,consumedSegments:d,positionalParamSegments:f,remainingSegments:h}=CE(e,r,o);if(!c)throw new dr(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>k2&&(this.allowRedirects=!1));let m=this.createSnapshot(n,r,o,l,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let p=yield this.applyRedirects.applyRedirectCommands(d,r.redirectTo,f,wE(m),n),C=yield this.applyRedirects.lineralizeSegments(r,p);return this.processSegment(n,i,e,C.concat(h),s,!1,a)})}createSnapshot(n,e,i,r,o){let s=new ha(i,r,Object.freeze(w({},this.urlTree.queryParams)),this.urlTree.fragment,O2(e),ai(e),e.component??e._loadedComponent??null,e,F2(e),n),a=r_(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}matchSegmentAgainstRoute(n,e,i,r,o,s){return Re(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=te=>this.createSnapshot(n,i,te.consumedSegments,te.parameters,s),c=yield Hf(D2(e,i,r,n,this.urlSerializer,a,this.abortSignal));if(i.path==="**"&&(e.children={}),!c?.matched)throw new dr(e);n=i._injector??n;let{routes:l}=yield this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:f,consumedSegments:h,remainingSegments:m}=c,p=this.createSnapshot(n,i,h,f,s),{segmentGroup:C,slicedSegments:E}=$x(e,h,m,l,o);if(E.length===0&&C.hasChildren()){let te=yield this.processChildren(d,l,C,p);return new Nn(p,te)}if(l.length===0&&E.length===0)return new Nn(p,[]);let N=ai(i)===o,R=yield this.processSegment(d,l,C,E,N?_e:o,!0,p);return new Nn(p,R instanceof Nn?[R]:[])})}getChildConfig(n,e,i){return Re(this,null,function*(){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield Hf(v2(n,e,i,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw b2(e)}return{routes:[],injector:n}})}};function R2(t){t.sort((n,e)=>n.value.outlet===_e?-1:e.value.outlet===_e?1:n.value.outlet.localeCompare(e.value.outlet))}function A2(t){let n=t.value.routeConfig;return n&&n.path===""}function DE(t){let n=[],e=new Set;for(let i of t){if(!A2(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=DE(i.children);n.push(new Nn(i.value,r))}return n.filter(i=>!e.has(i))}function O2(t){return t.data||{}}function F2(t){return t.resolve||{}}function P2(t,n,e,i,r,o,s){return Lt(a=>Re(null,null,function*(){let{state:c,tree:l}=yield T2(t,n,e,i,a.extractedUrl,r,o,s);return X(w({},a),{targetSnapshot:c,urlAfterRedirects:l})}))}function L2(t){return Lt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return W(n);let r=new Set(i.map(a=>a.route)),o=new Set;for(let a of r)if(!o.has(a))for(let c of xE(a))o.add(c);let s=0;return Ke(o).pipe(kr(a=>r.has(a)?B2(a,e,t):(a.data=r_(a,a.parent,t).resolve,W(void 0))),Ft(()=>s++),Bd(1),Lt(a=>s===o.size?W(n):at))})}function xE(t){let n=t.children.map(e=>xE(e)).flat();return[t,...n]}function B2(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!fE(i)&&(r[yl]=i.title),nc(()=>(t.data=r_(t,t.parent,e).resolve,V2(r,t,n).pipe(he(o=>(t._resolvedData=o,t.data=w(w({},t.data),o),null)))))}function V2(t,n,e){let i=zy(t);if(i.length===0)return W({});let r={};return Ke(i).pipe(Lt(o=>j2(t[o],n,e).pipe(Qi(),Ft(s=>{if(s instanceof ma)throw ih(new ur,s);r[o]=s}))),Bd(1),he(()=>r),Tr(o=>yE(o)?at:tc(o)))}function j2(t,n,e){let i=n._environmentInjector,r=ga(t,i),o=r.resolve?r.resolve(n,e):Dt(i,()=>r(n,e));return es(o)}var EE=new b("");function i_(t){return Xe(n=>{let e=t(n);return e?Ke(e).pipe(he(()=>n)):W(n)})}var c_=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===_e);return i}getResolvedTitleForRoute(e){return e.data[yl]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:()=>u(IE)})}return t})(),IE=(()=>{class t extends c_{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(T(Bx))};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Yr=new b("",{factory:()=>({})}),va=new b(""),ah=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(Qv);loadComponent(e,i){return Re(this,null,function*(){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=Re(this,null,function*(){try{let o=yield Kx(Dt(e,()=>i.loadComponent())),s=yield ME(ay(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=s,s}finally{this.componentLoaders.delete(i)}});return this.componentLoaders.set(i,r),r})}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=Re(this,null,function*(){try{let o=yield NE(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}});return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();function NE(t,n,e,i){return Re(this,null,function*(){let r=yield Kx(Dt(e,()=>t.loadChildren())),o=yield ME(ay(r)),s;o instanceof ef||Array.isArray(o)?s=o:s=yield n.compileModuleAsync(o),i&&i(t);let a,c,l=!1,d;return Array.isArray(s)?(c=s,l=!0):(a=s.create(e).injector,d=s,c=a.get(va,[],{optional:!0,self:!0}).flat()),{routes:c.map(a_),injector:a,factory:d}})}function ME(t){return Re(this,null,function*(){return t})}var ch=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:()=>u(U2)})}return t})(),U2=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})(),l_=new b(""),d_=new b("");function TE(t,n,e){let i=t.get(d_),r=t.get(J);if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(l=>setTimeout(l));let o,s=new Promise(l=>{o=l}),a=r.startViewTransition(()=>(o(),H2(t)));a.updateCallbackDone.catch(l=>{}),a.ready.catch(l=>{}),a.finished.catch(l=>{});let{onViewTransitionCreated:c}=i;return c&&Dt(t,()=>c({transition:a,from:n,to:e})),s}function H2(t){return new Promise(n=>{jt({read:()=>setTimeout(n)},{injector:t})})}var z2=()=>{},u_=new b(""),lh=(()=>{class t{currentNavigation=G(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=G(null);events=new I;transitionAbortWithErrorSubject=new I;configLoader=u(ah);environmentInjector=u(He);destroyRef=u(tt);urlSerializer=u(Kr);rootContexts=u(ts);location=u(Ai);inputBindingEnabled=u(bl,{optional:!0})!==null;titleStrategy=u(c_);options=u(Yr,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||WL;urlHandlingStrategy=u(ch);createViewTransition=u(l_,{optional:!0});navigationErrorHandler=u(u_,{optional:!0});routerResourcesFeature=u(EE,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>W(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Yf(r)),i=r=>this.events.next(new Qf(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;xe(()=>{this.transitions?.next(X(w({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new vt(null),this.transitions.pipe(Me(i=>i!==null),Xe(i=>{let r=!0,o=!1,s=new AbortController,a=()=>!o&&this.currentTransition?.id===i.id;return W(i).pipe(Xe(c=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Jt.SupersededByNewNavigation),at;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,targetBrowserUrl:typeof c.extras.browserUrl=="string"?this.urlSerializer.parse(c.extras.browserUrl):c.extras.browserUrl,trigger:c.source,extras:c.extras,previousNavigation:l?X(w({},l),{previousNavigation:null}):null,abort:()=>s.abort(),routesRecognizeHandler:c.routesRecognizeHandler,beforeActivateHandler:c.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=c.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&f!=="reload")return this.events.next(new Bi(c.id,this.urlSerializer.serialize(c.rawUrl),"",la.IgnoredSameUrlNavigation)),c.resolve(!1),at;if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return W(c).pipe(Xe(h=>(this.events.next(new Wr(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),h.id!==this.navigationId?at:Promise.resolve(h))),P2(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,s.signal),Ft(h=>{i.targetSnapshot=h.targetSnapshot,i.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation.update(m=>(m.finalUrl=h.urlAfterRedirects,m)),this.events.next(new hl)}),Xe(h=>Ke(i.routesRecognizeHandler.deferredHandle??W(void 0)).pipe(he(()=>h))),Ft(()=>{let h=new fl(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(h)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:h,extractedUrl:m,source:p,restoredState:C,extras:E}=c,N=new Wr(h,this.urlSerializer.serialize(m),p,C);this.events.next(N);let R=dE(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=X(w({},c),{targetSnapshot:R,urlAfterRedirects:m,extras:X(w({},E),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(te=>(te.finalUrl=m,te)),W(i)}else return this.events.next(new Bi(c.id,this.urlSerializer.serialize(c.extractedUrl),"",la.IgnoredByUrlHandlingStrategy)),c.resolve(!1),at}),he(c=>{let l=new Gf(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);return this.events.next(l),this.currentTransition=i=X(w({},c),{guards:XL(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),i}),l2(c=>this.events.next(c)),Xe(c=>{if(i.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!="boolean")throw ih(this.urlSerializer,c.guardsResult);let l=new qf(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);if(this.events.next(l),!a())return at;if(!c.guardsResult)return this.cancelNavigationTransition(c,"",Jt.GuardRejected),at;if(c.guards.canActivateChecks.length===0)return W(c);let d=new Wf(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);if(this.events.next(d),!a())return at;let f=!1;return W(c).pipe(L2(this.paramsInheritanceStrategy),Ft({next:()=>{f=!0;let h=new Kf(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(h)},complete:()=>{f||this.cancelNavigationTransition(c,"",Jt.NoDataFromResolver)}}))}),i_(c=>{let l=f=>{let h=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let m=f._environmentInjector;h.push(this.configLoader.loadComponent(m,f.routeConfig).then(p=>{f.component=p}))}for(let m of f.children)h.push(...l(m));return h},d=l(c.targetSnapshot.root);return d.length===0?W(c):Ke(Promise.all(d).then(()=>c))}),Xe(c=>{let{newlyCreatedRoutes:l,state:d}=KL(e.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);return this.currentTransition=i=c=X(w({},c),{targetRouterState:d,newlyCreatedRoutes:l}),this.currentNavigation.update(f=>(f.targetRouterState=d,f)),W(c)}),this.routerResourcesFeature?.setupAndRunResources(s.signal)??(c=>c),i_(()=>this.afterPreactivation()),Xe(()=>{let{currentSnapshot:c,targetSnapshot:l}=i,d=this.createViewTransition?.(this.environmentInjector,c.root,l.root);return d?Ke(d).pipe(he(()=>i)):W(i)}),yt(1),Xe(c=>{r=!1,this.events.next(new ua);let l=i.beforeActivateHandler.deferredHandle;return l?Ke(l.then(()=>c)):W(c)}),Ft(c=>{new Xy(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),c.newlyCreatedRoutes?.clear(),a()&&(kE(c.targetRouterState),o=!0,this.currentNavigation.update(l=>(l.abort=z2,l)),this.lastSuccessfulNavigation.set(xe(this.currentNavigation)),this.events.next(new zn(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0))}),Be(_E(s.signal).pipe(Me(()=>!o&&r),Ft(()=>{this.cancelNavigationTransition(i,s.signal.reason+"",Jt.Aborted)}))),Ft({complete:()=>{o=!0}}),Be(this.transitionAbortWithErrorSubject.pipe(Ft(c=>{throw c}))),Rr(()=>{s.abort(),o||this.cancelNavigationTransition(i,"",Jt.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Tr(c=>{if(o=!0,Gx(i),this.destroyed)return i.resolve(!1),at;if(vE(c))this.events.next(new Hn(i.id,this.urlSerializer.serialize(i.extractedUrl),c.message,c.cancellationCode)),ZL(c)?this.events.next(new fa(c.url,c.navigationBehaviorOptions)):i.resolve(!1);else{let l=new Jo(i.id,this.urlSerializer.serialize(i.extractedUrl),c,i.targetSnapshot??void 0);try{let d=Dt(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(d instanceof ma){let{message:f,cancellationCode:h}=ih(this.urlSerializer,d);this.events.next(new Hn(i.id,this.urlSerializer.serialize(i.extractedUrl),f,h)),this.events.next(new fa(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(l),c}catch(d){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(d)}}return at}))}))}cancelNavigationTransition(e,i,r){Gx(e);let o=new Hn(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=xe(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();function $2(t){return t!==aa}function Gx(t){for(let n of t.newlyCreatedRoutes??[])n._localInjector?.destroy(),n._localInjector=void 0;kE(t.targetRouterState)}function kE(t){if(!t)return;let n=e=>{e.value.pending?.set(!1),e.children.forEach(n)};n(t._root)}var RE=new b("");var AE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:()=>u(G2)})}return t})(),oh=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},G2=(()=>{class t extends oh{static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})(),dh=(()=>{class t{urlSerializer=u(Kr);options=u(Yr,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(Ai);urlHandlingStrategy=u(ch);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Mn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,s=r??o;return s instanceof Mn?this.urlSerializer.serialize(s):s}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=dE(null,u(He));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:()=>u(q2)})}return t})(),q2=(()=>{class t extends dh{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof Wr?this.updateStateMemento():e instanceof Bi?this.commitTransition(i):e instanceof fl?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof ua?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Hn&&!lE(e)?this.restoreHistory(i):e instanceof Jo?this.restoreHistory(i,!0):e instanceof zn&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:s,state:a}=r;if(this.location.isCurrentPathEqualTo(e)||s){let c=this.browserPageId,l=w(w({},a),this.generateNgRouterState(o,c,i));this.location.replaceState(e,"",l)}else{let c=w(w({},a),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",c)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?w({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):w({navigationId:e},this.routerUrlState(r))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();function uh(t,n){t.events.pipe(Me(e=>e instanceof zn||e instanceof Hn||e instanceof Jo||e instanceof Bi),he(e=>e instanceof zn||e instanceof Bi?0:(e instanceof Hn?e.code===Jt.Redirect||e.code===Jt.SupersededByNewNavigation:!1)?2:1),Me(e=>e!==2),yt(1)).subscribe(()=>{n()})}var Vi=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(nf);stateManager=u(dh);options=u(Yr,{optional:!0})||{};pendingTasks=u(Di);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(lh);urlSerializer=u(Kr);location=u(Ai);urlHandlingStrategy=u(ch);injector=u(He);_events=new I;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(AE);injectorCleanup=u(RE,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(va,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(bl,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new pe;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=xe(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof Hn&&i.code!==Jt.Redirect&&i.code!==Jt.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof zn)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof fa){let s=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=w({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||$2(r.source)},s);this.scheduleNavigation(a,aa,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}GL(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),aa,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let s=r?.navigationId?r:null,a=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=X(w({},o),{browserUrl:e})),r){let l=w({},r);delete l.navigationId,delete l.\u0275routerPageId,delete l.\u0275routerUrl,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(a);this.scheduleNavigation(c,i,s,o).catch(l=>{this.disposed||this.injector.get(Ln)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return xe(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(a_),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:s,d=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":d=w(w({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let h=r?r.snapshot:this.routerState.snapshot.root;f=oE(h)}catch(h){(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return sE(f,e,d,l??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=qr(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,aa,null,i)}navigate(e,i={skipLocationChange:!1}){return W2(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(i){return this.console.warn(fn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=w({},Qx):i===!1?r=w({},$y):r=w(w({},$y),i),qr(e))return Vx(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Vx(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,c,l;s?(a=s.resolve,c=s.reject,l=s.promise):l=new Promise((f,h)=>{a=f,c=h});let d=this.pendingTasks.add();return uh(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();function W2(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new D(4008,!1)}var Y2=(()=>{class t{router=u(Vi);stateManager=u(dh);fragment=G("");queryParams=G({});path=G("");serializer=u(Kr);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof zn&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Mn(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})(),ya=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=u(new Un("href"),{optional:!0});reactiveHref=ff(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return xe(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return xe(this._target)}_target=G(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return xe(this._queryParams)}_queryParams=G(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return xe(this._fragment)}_fragment=G(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return xe(this._queryParamsHandling)}_queryParamsHandling=G(void 0);set state(e){this._state.set(e)}get state(){return xe(this._state)}_state=G(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return xe(this._info)}_info=G(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return xe(this._relativeTo)}_relativeTo=G(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return xe(this._preserveFragment)}_preserveFragment=G(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return xe(this._skipLocationChange)}_skipLocationChange=G(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return xe(this._replaceUrl)}_replaceUrl=G(!1);browserUrl=Xt(void 0);isAnchorElement;onChanges=new I;applicationErrorHandler=u(Ln);options=u(Yr,{optional:!0});reactiveRouterState=u(Y2);constructor(e,i,r,o,s,a){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=s,this.locationStrategy=a;let c=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=G(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(qr(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,s){let a=this._urlTree();if(a===null||this.isAnchorElement&&(e!==0||i||r||o||s||typeof this.target=="string"&&this.target!="_self"))return!0;let c=this.browserUrl(),l=w({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},c!==void 0&&{browserUrl:c});return this.router.navigateByUrl(a,l)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=$e(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:qr(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return xe(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(De(Vi),De(fr),Pc("tabindex"),De(ze),De(U),De(si))};static \u0275dir=x({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&ve("click",function(s){return r.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),i&2&&ge("href",r.reactiveHref(),fv)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",j],skipLocationChange:[2,"skipLocationChange","skipLocationChange",j],replaceUrl:[2,"replaceUrl","replaceUrl",j],browserUrl:[1,"browserUrl"],routerLink:"routerLink"},features:[Qe]})}return t})();var wl=class{};var OE=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,i,r,o){this.router=e,this.injector=i,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(Me(e=>e instanceof zn),kr(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,i){let r=[];for(let o of i){o.providers&&!o._injector&&(o._injector=Xs(o.providers,e,""));let s=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(s).injector);let a=o._loadedInjector??s;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(s,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(a,o.children??o._loadedRoutes))}return Ke(r).pipe(Mr())}preloadConfig(e,i){return this.preloadingStrategy.preload(i,()=>{if(e.destroyed)return W(null);let r;i.loadChildren&&i.canLoad===void 0?r=Ke(this.loader.loadChildren(e,i)):r=W(null);let o=r.pipe(Lt(s=>s===null?W(void 0):(i._loadedRoutes=s.routes,i._loadedInjector=s.injector,i._loadedNgModuleFactory=s.factory,this.processRoutes(s.injector??e,s.routes))));if(i.loadComponent&&!i._loadedComponent){let s=this.loader.loadComponent(e,i);return Ke([o,s]).pipe(Mr())}else return o})}static \u0275fac=function(i){return new(i||t)(T(Vi),T(He),T(wl),T(ah))};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),FE=new b(""),Q2=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=aa;restoredId=0;store={};isHydrating=u(rv,{optional:!0})??!1;urlSerializer=u(Kr);zone=u(L);viewportScroller=u(wy);transitions=u(lh);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled",this.isHydrating&&u(Et).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Wr?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof zn?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Bi&&e.code===la.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof da)||e.scrollBehavior==="manual")return;let i={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],i):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,i):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,i){if(this.isHydrating)return;let r=xe(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(()=>Re(this,null,function*(){yield new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new da(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,i,r))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){Wo()};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})();function Z2(){return u(Vi).routerState.root}function Cl(t,n){return{\u0275kind:t,\u0275providers:n}}function X2(){let t=u(me);return n=>{let e=t.get(Et);if(n!==e.components[0])return;let i=t.get(Vi),r=t.get(PE);t.get(h_)===1&&i.initialNavigation(),t.get(VE,null,{optional:!0})?.setUpPreloading(),t.get(FE,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var PE=new b("",{factory:()=>new I}),h_=new b("",{factory:()=>1});function LE(){let t=[{provide:Uu,useValue:!0},{provide:h_,useValue:0},Js(()=>{let n=u(me);return n.get(my,Promise.resolve()).then(()=>new Promise(i=>{let r=n.get(Vi),o=n.get(PE);uh(r,()=>{i(!0)}),n.get(lh).afterPreactivation=()=>(i(!0),o.closed?W(void 0):o),r.initialNavigation()}))})];return Cl(2,t)}function BE(){let t=[Js(()=>{u(Vi).setUpLocationChangeListener()}),{provide:h_,useValue:2}];return Cl(3,t)}var VE=new b("");function jE(t){return Cl(0,[{provide:VE,useExisting:OE},{provide:wl,useExisting:t}])}function UE(t={}){return Cl(8,[{provide:bl,useFactory:()=>new mE(t)}])}function HE(t){Vn("NgRouterViewTransitions");let n=[{provide:l_,useValue:TE},{provide:d_,useValue:w({skipNextTransition:!!t?.skipInitialTransition},t)}];return Cl(9,n)}var zE=[Ai,{provide:Kr,useClass:ur},Vi,ts,{provide:fr,useFactory:Z2},ah],fh=(()=>{class t{constructor(){}static forRoot(e,i){return{ngModule:t,providers:[zE,[],{provide:va,multi:!0,useValue:e},[],i?.errorHandler?{provide:u_,useValue:i.errorHandler}:[],{provide:Yr,useValue:i||{}},i?.useHash?eB():tB(),J2(),i?.preloadingStrategy?jE(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?nB(i):[],i?.bindToComponentInputs?UE(typeof i.bindToComponentInputs=="object"?i.bindToComponentInputs:{}).\u0275providers:[],i?.enableViewTransitions?HE().\u0275providers:[],iB()]}}static forChild(e){return{ngModule:t,providers:[{provide:va,multi:!0,useValue:e}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({})}return t})();function J2(){return{provide:FE,useFactory:()=>{let t=u(wy),n=u(Yr);return n.scrollOffset&&t.setOffset(n.scrollOffset),new Q2(n)}}}function eB(){return{provide:si,useClass:py}}function tB(){return{provide:si,useClass:yf}}function nB(t){return[t.initialNavigation==="disabled"?BE().\u0275providers:[],t.initialNavigation==="enabledBlocking"?LE().\u0275providers:[]]}var f_=new b("");function iB(){return[{provide:f_,useFactory:X2},{provide:$c,multi:!0,useExisting:f_}]}var ZE=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(De(ze),De(U))};static \u0275dir=x({type:t})}return t})(),XE=(()=>{class t extends ZE{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,features:[le]})}return t})(),ns=new b("");var rB={provide:ns,useExisting:Nt(()=>Xr),multi:!0};function oB(){let t=In()?In().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var sB=new b(""),Xr=(()=>{class t extends ZE{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!oB())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(De(ze),De(U),De(sB,8))};static \u0275dir=x({type:t,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&ve("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[ye([rB]),le]})}return t})();function g_(t){return t==null||v_(t)===0}function v_(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Jr=new b(""),y_=new b(""),aB=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,an=class{static min(n){return JE(n)}static max(n){return eI(n)}static required(n){return tI(n)}static requiredTrue(n){return cB(n)}static email(n){return lB(n)}static minLength(n){return dB(n)}static maxLength(n){return uB(n)}static pattern(n){return fB(n)}static nullValidator(n){return mh()}static compose(n){return aI(n)}static composeAsync(n){return cI(n)}};function JE(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function eI(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function tI(t){return g_(t.value)?{required:!0}:null}function cB(t){return t.value===!0?null:{required:!0}}function lB(t){return g_(t.value)||aB.test(t.value)?null:{email:!0}}function dB(t){return n=>{let e=n.value?.length??v_(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function uB(t){return n=>{let e=n.value?.length??v_(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function fB(t){if(!t)return mh;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(g_(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function mh(t){return null}function nI(t){return t!=null}function iI(t){return sr(t)?Ke(t):t}function rI(t){let n={};return t.forEach(e=>{n=e!=null?w(w({},n),e):n}),Object.keys(n).length===0?null:n}function oI(t,n){return n.map(e=>e(t))}function hB(t){return!t.validate}function sI(t){return t.map(n=>hB(n)?n:e=>n.validate(e))}function aI(t){if(!t)return null;let n=t.filter(nI);return n.length==0?null:function(e){return rI(oI(e,n))}}function __(t){return t!=null?aI(sI(t)):null}function cI(t){if(!t)return null;let n=t.filter(nI);return n.length==0?null:function(e){let i=oI(e,n).map(iI);return ic(i).pipe(he(rI))}}function b_(t){return t!=null?cI(sI(t)):null}function GE(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function lI(t){return t._rawValidators}function dI(t){return t._rawAsyncValidators}function m_(t){return t?Array.isArray(t)?t:[t]:[]}function ph(t,n){return Array.isArray(t)?t.includes(n):t===n}function qE(t,n){let e=m_(n);return m_(t).forEach(r=>{ph(e,r)||e.push(r)}),e}function WE(t,n){return m_(n).filter(e=>!ph(t,e))}var gh=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=__(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=b_(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Qr=class extends gh{name;get formDirective(){return null}get path(){return null}};var Dl="VALID",hh="INVALID",_a="PENDING",xl="DISABLED",Zr=class{},vh=class extends Zr{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Il=class extends Zr{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Nl=class extends Zr{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},ba=class extends Zr{status;source;constructor(n,e){super(),this.status=n,this.source=e}},yh=class extends Zr{source;constructor(n){super(),this.source=n}},Sa=class extends Zr{source;constructor(n){super(),this.source=n}};function uI(t){return(Ch(t)?t.validators:t)||null}function mB(t){return Array.isArray(t)?__(t):t||null}function fI(t,n){return(Ch(n)?n.asyncValidators:t)||null}function pB(t){return Array.isArray(t)?b_(t):t||null}function Ch(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function gB(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new D(1e3,"");if(!hI(i,e))throw new D(1001,"")}function vB(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new D(-1002,"")})}var _h=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=G(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return xe(this.statusReactive)}set status(n){xe(()=>this.statusReactive.set(n))}_status=$e(()=>this.statusReactive());statusReactive=G(void 0);get valid(){return this.status===Dl}get invalid(){return this.status===hh}get pending(){return this.status===_a}get disabled(){return this.status===xl}get enabled(){return this.status!==xl}errors;get pristine(){return xe(this.pristineReactive)}set pristine(n){xe(()=>this.pristineReactive.set(n))}_pristine=$e(()=>this.pristineReactive());pristineReactive=G(!0);get dirty(){return!this.pristine}get touched(){return xe(this.touchedReactive)}set touched(n){xe(()=>this.touchedReactive.set(n))}_touched=$e(()=>this.touchedReactive());touchedReactive=G(!1);get untouched(){return!this.touched}_events=new I;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(qE(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(qE(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(WE(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(WE(n,this._rawAsyncValidators))}hasValidator(n){return ph(this._rawValidators,n)}hasAsyncValidator(n){return ph(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(X(w({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Nl(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new Nl(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(X(w({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Il(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new Il(!0,i))}markAsPending(n={}){this.status=_a;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ba(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(X(w({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=xl,this.errors=null,this._forEachChild(r=>{r.disable(X(w({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new vh(this.value,i)),this._events.next(new ba(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(X(w({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Dl,this._forEachChild(i=>{i.enable(X(w({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(X(w({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Dl||this.status===_a)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new vh(this.value,e)),this._events.next(new ba(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(X(w({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?xl:Dl}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=_a,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=iI(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new ba(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new se,this.statusChanges=new se}_calculateStatus(){return this._allControlsDisabled()?xl:this.errors?hh:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(_a)?_a:this._anyControlsHaveStatus(hh)?hh:Dl}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new Il(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Nl(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Ch(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=mB(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=pB(this._rawAsyncValidators)}_updateHasRequiredValidator(){xe(()=>this._hasRequired.set(this.hasValidator(an.required)))}};function hI(t,n){return Object.hasOwn(t,n)}function yB(t){return t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"}function _B(t,n,e,i){switch(e){case"name":t.setAttribute(n,e,i);break;case"disabled":case"readonly":case"required":i?t.setAttribute(n,e,""):t.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":i!==void 0?t.setAttribute(n,e,i.toString()):t.removeAttribute(n,e);break}}var p_=class{kind;context;control;message;constructor({kind:n,context:e,control:i}){this.kind=n,this.context=e,this.control=i}};function mI(t){return typeof t=="number"?t:parseFloat(t)}var S_=(()=>{class t{_validator=mh;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):mh,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,features:[Qe]})}return t})(),bB={provide:Jr,useExisting:Nt(()=>w_),multi:!0},w_=(()=>{class t extends S_{max;inputName="max";normalizeInput=e=>mI(e);createValidator=e=>eI(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&ge("max",r._enabled?r.max:null)},inputs:{max:"max"},standalone:!1,features:[ye([bB]),le]})}return t})(),SB={provide:Jr,useExisting:Nt(()=>Ml),multi:!0},Ml=(()=>{class t extends S_{min;inputName="min";normalizeInput=e=>mI(e);createValidator=e=>JE(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&ge("min",r._enabled?r.min:null)},inputs:{min:"min"},standalone:!1,features:[ye([SB]),le]})}return t})(),wB={provide:Jr,useExisting:Nt(()=>pI),multi:!0};var pI=(()=>{class t extends S_{required;inputName="required";normalizeInput=j;createValidator=e=>tI;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,r){i&2&&ge("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[ye([wB]),le]})}return t})();var CB=new b(""),C_=new b("",{factory:()=>D_}),D_="always";function DB(t,n){return[...n.path,t]}function xB(t,n,e=D_){x_(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),IB(t,n),MB(t,n),NB(t,n),EB(t,n)}function KE(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),Sh(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function bh(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function EB(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function x_(t,n){let e=lI(t);n.validator!==null?t.setValidators(GE(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=dI(t);n.asyncValidator!==null?t.setAsyncValidators(GE(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();bh(n._rawValidators,r),bh(n._rawAsyncValidators,r)}function Sh(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=lI(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=dI(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return bh(n._rawValidators,i),bh(n._rawAsyncValidators,i),e}function IB(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&gI(t,n)})}function NB(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&gI(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function gI(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function MB(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function vI(t,n){t==null,x_(t,n)}function TB(t,n){return Sh(t,n)}function kB(t,n){if(!Object.hasOwn(t,"model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function RB(t){return Object.getPrototypeOf(t.constructor)===XE}function yI(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function AB(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===Xr?e=o:RB(o)?i=o:r=o}),r||i||e||null}function OB(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var FB={provide:CB,useFactory:()=>{let t=u(hr,{self:!0});return{setParseErrors:n=>{t.setParseErrorSource(n)},set onReset(n){t.onReset=n}}}},hr=class extends gh{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(n){this.userOnReset=n,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof Sa&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=AB(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(n,e,i){super(),this.injector=n,this.renderer=e,this.rawValueAccessors=i,this.injector?.get(tt)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let n=this.injector?.get(Je);if(!this.control||!n)return;let e=n.markForCheck.bind(n);this.subscription=new pe,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(i=>{i instanceof Sa&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(n){!n.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!n.customControl||(this.isCustomControlBased=!0,n.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),n.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=yB(n.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof pI))}ngControlUpdate(n,e){if(!this.isCustomControlBased)return;let i=this.control,r=this.customControlBindings;Object.is(r.value,i.value)||(r.value=i.value,n.setCustomControlModelInput(i.value)),this.bindControlProperty(n,r,"touched",i.touched),this.bindControlProperty(n,r,"dirty",i.dirty),this.bindControlProperty(n,r,"valid",i.valid),this.bindControlProperty(n,r,"invalid",i.invalid),this.bindControlProperty(n,r,"pending",i.pending),this.bindControlProperty(n,r,"disabled",i.disabled),this.shouldBindRequired&&this.bindControlProperty(n,r,"required",this.isRequired);let o=i.errors;if(r.errors!==o){r.errors=o;let s=this._convertErrors(o);n.setInputOnDirectives("errors",s)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(n,e,i,r){if(e[i]===r)return;e[i]=r;let o=n.setInputOnDirectives(i,r);this.isNativeFormElement&&!o&&(i==="disabled"||i==="required")&&this.renderer&&_B(this.renderer,n.nativeElement,i,r)}_convertErrors(n){if(n===null)return[];let e=this.control;return Object.entries(n).map(([i,r])=>new p_({context:r,kind:i,control:e}))}setParseErrorSource(n){if(n===void 0)return;let e=null,i=$e(()=>{let r=n();return r.length===0?null:r.reduce((o,s)=>(o[s.kind]=s,o),{})});this.parseErrorsValidator=(()=>e).bind(this),Yt(()=>{e=i(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(n){this.parseErrorsValidator&&(n?.removeValidators(this.parseErrorsValidator),n?.updateValueAndValidity({emitEvent:!1}))}},wh=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var wa=(()=>{class t extends wh{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(De(hr,2))};static \u0275dir=x({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&Z("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[le]})}return t})(),Ca=(()=>{class t extends wh{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(De(Qr,10))};static \u0275dir=x({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&Z("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[le]})}return t})(),ji=class extends _h{constructor(n,e,i){super(uI(e),fI(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){let i=this._find(n);return i||(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){let i=this._find(n);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){let r=this._find(n);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this._find(n)?.enabled===!0}setValue(n,e={}){xe(()=>{vB(this,!0,n),Object.keys(n).forEach(i=>{gB(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this._find(i);r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,X(w({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Sa(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return hI(this.controls,n)?this.controls[n]:null}};var PB={provide:Qr,useExisting:Nt(()=>Dh)},El=Promise.resolve(),Dh=(()=>{class t extends Qr{callSetDisabledState;get submitted(){return xe(this.submittedReactive)}_submitted=$e(()=>this.submittedReactive());submittedReactive=G(!1);_directives=new Set;form;ngSubmit=new se;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new ji({},__(e),b_(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){El.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){El.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){El.then(()=>{let i=this._findContainer(e.path),r=new ji({});vI(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){El.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){El.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),yI(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new yh(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(De(Jr,10),De(y_,10),De(C_,8))};static \u0275dir=x({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&ve("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ye([PB]),le]})}return t})();function YE(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function QE(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Ui=class extends _h{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(uI(e),fI(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ch(e)&&(e.nonNullable||e.initialValueIsDefault)&&(QE(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){xe(()=>{this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Sa(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){YE(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){YE(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){QE(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var LB=t=>t instanceof Ui;var BB=(()=>{class t extends Qr{callSetDisabledState;get submitted(){return xe(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=$e(()=>this._submittedReactive());_submittedReactive=G(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),Object.hasOwn(e,"form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Sh(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return e._setupWithForm(i,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){KE(e.control||null,e,!1),OB(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,yI(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new yh(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(KE(i||null,e),LB(r)&&e._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);vI(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&TB(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){x_(this.form,this),this._oldForm&&Sh(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(De(Jr,10),De(y_,10),De(C_,8))};static \u0275dir=x({type:t,features:[le,Qe]})}return t})(),VB={provide:Qr,useExisting:Nt(()=>Hi)},Hi=(()=>{class t extends BB{form=null;ngSubmit=new se;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&ve("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ye([VB]),le]})}return t})();var Da=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})(),jB={provide:ns,useExisting:Nt(()=>Tl),multi:!0},Tl=(()=>{class t extends XE{writeValue(e){let i=e??"";this.setProperty("value",i)}registerOnChange(e){this.onChange=i=>{e(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["input","type","number","formControlName","",3,"ngNoCva",""],["input","type","number","formControl","",3,"ngNoCva",""],["input","type","number","ngModel","",3,"ngNoCva",""]],hostBindings:function(i,r){i&1&&ve("input",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[ye([jB]),le]})}return t})();var _I=new b("");var UB={provide:hr,useExisting:Nt(()=>is)},is=(()=>{class t extends hr{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new se;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,s,a,c){super(c,a,o),this._ngModelWarningConfig=s,this._parent=e,this._setValidators(i),this._setAsyncValidators(r)}_setupWithForm(e,i){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,xB(e,this,i))}ngOnChanges(e){this._added||this._setUpControl(),kB(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return DB(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(e,!0))}static \u0275fac=function(i){return new(i||t)(De(Qr,13),De(Jr,10),De(y_,10),De(ns,10),De(_I,8),De(ze,8),De(me,8))};static \u0275dir=x({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[ye([UB,FB]),le,Qe,zv(null)]})}return t})();var HB=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({})}return t})();var xa=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:_I,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:C_,useValue:e.callSetDisabledState??D_}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({imports:[HB]})}return t})();var v=(function(t){return t[t.PoK=0]="PoK",t[t.Base=1]="Base",t[t.TE=2]="TE",t})(v||{});var zi=(()=>{class t{constructor(){this.settings=G({editions:[v.Base],additionalFactions:0})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var g=(function(t){return t[t.red=0]="red",t[t.green=1]="green",t[t.yellow=2]="yellow",t[t.blue=3]="blue",t[t.black=4]="black",t})(g||{});var Pe=(function(t){return t[t.Low=0]="Low",t[t.Moderate=1]="Moderate",t[t.High=2]="High",t})(Pe||{});var ee=(function(t){return t[t.Blue=0]="Blue",t[t.Red=1]="Red",t[t.Green=2]="Green",t})(ee||{}),P=(function(t){return t[t.HAZARDOUS=0]="HAZARDOUS",t[t.INDUSTRIAL=1]="INDUSTRIAL",t[t.CULTURAL=2]="CULTURAL",t[t.NONE=3]="NONE",t})(P||{}),Ze=(function(t){return t[t.BIOTIC=0]="BIOTIC",t[t.WARFARE=1]="WARFARE",t[t.PROPULSION=2]="PROPULSION",t[t.CYBERNETIC=3]="CYBERNETIC",t[t.NONE=4]="NONE",t})(Ze||{}),en=(function(t){return t[t.NEBULA=0]="NEBULA",t[t.GRAVITY_RIFT=1]="GRAVITY_RIFT",t[t.ASTEROID_FIELD=2]="ASTEROID_FIELD",t[t.SUPERNOVA=3]="SUPERNOVA",t})(en||{}),kn=(function(t){return t[t.ALPHA=0]="ALPHA",t[t.BETA=1]="BETA",t[t.GAMMA=2]="GAMMA",t[t.DELTA=3]="DELTA",t})(kn||{});var $i={factions:[{id:1,name:"Arborec",complexity:Pe.High,startingtech:[37],edition:v.Base,tech:[{id:1,name:"Letani Warrior II",requirements:{[g.green]:2},description:"<ul><li>After this unit is destroyed, roll 1 die. If the result is 6 or greater, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your HS.</li><li>Production 2</li><Ul>",provides:g.black,edition:v.Base},{id:2,name:"Bioplasmosis",requirements:{[g.green]:2},description:"At the end of the status phase, you may remove any number of infantry from planets you control and place them on 1 or more planets you control in the same or adjacent systems",provides:g.green,edition:v.Base}]},{id:2,name:"Barony of Letnev",complexity:Pe.Low,startingtech:[50,38],edition:v.Base,tech:[{id:3,name:"L4 Disruptors",requirements:{[g.yellow]:1},edition:v.Base,description:"During an invasion combat, units cannot use Space Canon against your units.",provides:g.yellow},{id:4,name:"Non-Euclidean Shielding",requirements:{[g.red]:2},edition:v.Base,description:"When 1 of your units uses Sustain Damage, cancel 2 hits.",provides:g.red}]},{id:3,name:"Clan of Saar",complexity:Pe.Moderate,startingtech:[50],edition:v.Base,tech:[{id:5,name:"Floating Factory II",requirements:{[g.yellow]:2},edition:v.Base,provides:g.black,description:"<ul><li>Saar Space Dock (Move 2, Capacity 5)</li><li>This unit is placed in a space area instead of on a planet. This unit can move and retreat as if it were a ship. If this unit is blockaded, it is destroyed.</li><li>Production 7.</li></ul>"},{id:6,name:"Chaos Mapping",requirements:{[g.blue]:1},edition:v.Base,provides:g.blue,description:"<ul><li>Other players cannot activate asteroid fields that contain 1 or more of your ships.</li><li>At the start of your turn during the action phase, you may produce 1 unit in a system that contains at least 1 of your units that has Production.</li></ul>"}]},{id:4,name:"Embers of Muat",complexity:Pe.High,startingtech:[38],edition:v.Base,tech:[{id:7,name:"Prototype War Sun II",edition:v.Base,requirements:{[g.yellow]:1,[g.red]:3},provides:g.black,description:"<ul><li>Muuat War Sun (Cost 10; Combat 3[x3]; Move 3; Capacity 6)</li><li>Other player's units in this system lose Planetary Shield.</li><li>Sustain Damage; and, Bombardment 3[x3].</li></ul>"},{id:8,name:"Magmus Reactor \u03A9",requirements:{[g.red]:2},provides:g.red,edition:v.Base,description:"<ul><li>Your ships can move into superovas.</li><li>Each supernova that contains 1 or more of your units gains the PRODUCTION 5 ability as if it were 1 of your units.</li>"}]},{id:5,name:"Emirates of Hacan",complexity:Pe.Low,startingtech:[50,42],edition:v.Base,tech:[{id:9,name:"Production Centers",edition:v.Base,requirements:{[g.green]:2},provides:g.green,description:"ACTION: Exhaust this card and spend 1 CT from your Strategy Pool to gain 4 TGs and choose 1 other player; that player gains 2 TGs."},{id:10,name:"Quantum Datahub Node",edition:v.Base,requirements:{[g.yellow]:3},provides:g.yellow,description:"At the end of the Strategy Phase, you may spend 1 CT from your Strategy Pool and give another player 3 of your TGs. If you do, give 1 of your SCs to that player and take 1 of his SCs."}]},{id:6,name:"Federation of Sol",complexity:Pe.Low,startingtech:[46,50],edition:v.Base,tech:[{id:11,name:"Spec Ops II",requirements:{[g.green]:2},provides:g.black,edition:v.Base,description:"<ul><li>Sol Infantry (Cost 1/2; Combat 6)</li><li>After this unit is destroyed, roll 1 die. If the result is 5 or greater, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your HS.</li></ul>"},{id:12,name:"Advanced Carrier II",requirements:{[g.blue]:2},provides:g.black,edition:v.Base,description:"<ul><li>Sol Carrier (Cost 3; Combat 9; Move 2; Capacity 8)</li><li>Sustain Damage.</li></ul>"}]},{id:7,name:"Ghosts of Creuss",complexity:Pe.Moderate,startingtech:[49],edition:v.Base,tech:[{id:13,name:"Dimensional Splicer",requirements:{[g.red]:1},provides:g.red,edition:v.Base,description:"At the start of a space combat in a system that contains a wormhole and 1 or more of your ships, you may produce 1 hit and assign it to 1 of your opponent's ships."},{id:14,name:"Wormhole Generator \u03A9",requirements:{[g.blue]:2},provides:g.blue,edition:v.Base,description:"ACTION: Exhaust this card to place or move a Creuss wormhole token into either a system that contains a planet you control or a non-home system that does not contain another player\xB4s ships."}]},{id:8,name:"L1z1x Mindnet",complexity:Pe.Low,startingtech:[46,38],edition:v.Base,tech:[{id:15,name:"Super Dreadnought II",requirements:{[g.blue]:2,[g.yellow]:1},edition:v.Base,provides:g.black,description:'<ul><li>L1Z1X Dreadnought (Cost 4; Combat 4; Move 2; Capacity 2)</li><li>This unit cannot be destroyed by "Direct Hit" action cards; Sustain Damage; and, Bombardment 4.</li></ul>'},{id:16,name:"Inheritance Systems",edition:v.Base,requirements:{[g.yellow]:2},provides:g.yellow,description:"You may exhaust this card and spend 2 resources when you research a technology; ignore all of that technology's prerequisites."}]},{id:9,name:"Mentak Coalition",complexity:Pe.High,startingtech:[38,42],edition:v.Base,tech:[{id:17,name:"Mirror Computing",requirements:{[g.yellow]:3},edition:v.Base,description:"When you spend TGs, each TG is worth 2 resources or influence.",provides:g.yellow},{id:18,name:"Salvage Operation",edition:v.Base,requirements:{[g.yellow]:2},description:"After you win or lose a space combat, gain 1 TG; if you won the combat, you may also produce 1 ship in that system of any ship type that was destroyed during the combat.",provides:g.yellow}]},{id:10,name:"Naalu Collective",complexity:Pe.Moderate,startingtech:[42,46],edition:v.Base,tech:[{id:19,name:"Neuroglaive",requirements:{[g.green]:3},edition:v.Base,provides:g.green,description:"After another player activates a system that contains 1 or more of your ships, that player removes 1 CT from his Fleet Pool and returns it to his reinforcements."},{id:20,name:"Hybrid Crystal Fighter II",requirements:{[g.green]:1,[g.blue]:1},edition:v.Base,provides:g.black,description:"<ul><li>Naalu Fighter (Cost 1/2; Combat 7; Move 2)</li><li>This unit may move without being transported. Each fighter in excess of your ships' capacity counts as 1/2 of a ship against your fleet pool.</li></ul>"}]},{id:11,name:"Nekro Virus",complexity:Pe.High,startingtech:[45],edition:v.Base,tech:[{id:21,name:"Valefar Assimilator",requirements:{},provides:g.black,edition:v.Base,description:`When you would gain another player's technology using 1 of your faction abilities, you may place either the "X" or "Y" assimilator token on a faction technology owned by that player instead. While that token is on a technology, the corresponding "X" or "Y" card gains that technology's text. You cannot place an assimilator token on a technology that already has one.`},{id:22,name:"Valefar Assimilator",requirements:{},provides:g.black,edition:v.Base,description:`When you would gain another player's technology using 1 of your faction abilities, you may place either the "X" or "Y" assimilator token on a faction technology owned by that player instead. While that token is on a technology, the corresponding "X" or "Y" card gains that technology's text. You cannot place an assimilator token on a technology that already has one.`}]},{id:12,name:"Sardakk N'orr",complexity:Pe.Moderate,startingtech:[],edition:v.Base,tech:[{id:23,name:"Exotrireme II",requirements:{[g.blue]:2,[g.yellow]:1},edition:v.Base,description:`<ul><li>N'orr Dreadnought (Cost 4; Combat 5; Move 2; Capacity 1)</li><li>This unit cannot be destroyed by "Direct Hit" action cards. After a round of space combat, you may destroy this unit to destroy up to 2 ships in this system</li><li>Sustain Damage; and, Bombardment 4[x2].</li></ul>`,provides:g.black},{id:24,name:"Valkyrie Particle Weave",requirements:{[g.red]:2},edition:v.Base,description:"After making combat rolls during a round of ground combat, if your opponent produced 1 or more hits, you produce 1 additional hit.",provides:g.red}]},{id:13,name:"Universities of Jol-Nar",complexity:Pe.Low,startingtech:[46,50,38,42],edition:v.Base,tech:[{id:25,name:"Spacial Conduit Network",requirements:{[g.blue]:2},edition:v.Base,description:"You may exhaust this card after you activate a system that contains 1 or more of your units; that system is adjacent to all other systems that contain 1 or more of your units during this activation.",provides:g.blue},{id:26,name:"E-Res Siphons",requirements:{[g.yellow]:2},edition:v.Base,description:"After another player activates a system that contains 1 or more of your ships, gain 4 TGs.",provides:g.yellow}]},{id:14,name:"Winnu",complexity:Pe.Moderate,startingtech:[],edition:v.Base,tech:[{id:27,name:"Hegemonic Trade Policy",requirements:{[g.yellow]:2},edition:v.Base,provides:g.yellow,description:"Exhaust this card when 1 or more of your units use Production; swap the resource and influence values of 1 planet you control until the end of your turn."},{id:28,name:"Lazax Gate Folding",requirements:{[g.blue]:2},edition:v.Base,provides:g.blue,description:"<ul><li>During your tactical actions, if you do not control Mecatol Rex, treat its system as if it contains both an alpha and beta wormhole.</li><li>ACTION: If you control Mecatol Rex, exhaust this card to place 1 infantry from your reinforcement on Mecatol Rex.</li></ul>"}]},{id:15,name:"Xxcha Kingdom",complexity:Pe.Low,startingtech:[41],edition:v.Base,tech:[{id:29,name:"Nullification Field",requirements:{[g.yellow]:2},edition:v.Base,provides:g.yellow,description:"After another player activates a system that contains 1 or more or your ships, you may exhaust this card and spend 1 CT from your Strategy Pool; immediately end that player's turn."},{id:30,name:"Instinct Training",requirements:{[g.green]:1},edition:v.Base,provides:g.green,description:"You may exhaust this card and spend 1 CT from your Strategy Pool when another player plays an action card; cancel that action card."}]},{id:16,name:"Yin Brotherhood",complexity:Pe.Low,startingtech:[42],edition:v.Base,tech:[{id:31,name:"Impulse Core",requirements:{[g.yellow]:2},edition:v.Base,provides:g.yellow,description:"At the start of a space combat, you may destroy 1 of your cruisers or destroyers in the active system to produce 1 hit against your opponent's ships; that hit must be assigned by your opponent to 1 of his non-fighter ships, if able."},{id:32,name:"Yin Spinner",requirements:{[g.green]:2},edition:v.Base,provides:g.green,description:"After you produce units, place up to 2 infantry from your reinforcements on any planet you control or in any space area that contains 1 or more of your ships."}]},{id:17,name:"Yssaril Tribes",complexity:Pe.Low,startingtech:[46],edition:v.Base,tech:[{id:33,name:"Transparasteel Plating",requirements:{[g.green]:1},edition:v.Base,provides:g.green,description:"During your turn of the action phase, players that have passed cannot play action cards."},{id:34,name:"Mageon Implants",requirements:{[g.green]:3},edition:v.Base,provides:g.green,description:"ACTION: Exhaust this card to look at another player's hand of action cards. Choose 1 of those cards and add it to your hand."}]},{id:18,name:"Argent Flight",complexity:Pe.Low,startingtech:[],edition:v.PoK,tech:[{id:68,name:"Aerie Hololattice",requirements:{[g.yellow]:1},edition:v.PoK,provides:g.yellow,description:"Other players cannot move ships through systems that contain your structures. Each planet that contains 1 or more of your structures gains the PRODUCTION 1 ability as if it were a unit"},{id:67,name:"Strike Wing Alpha II",requirements:{[g.red]:2},edition:v.PoK,provides:g.black,description:"<ul><li>Argent Flight Destroyer (Cost 1; Combat 7; Move 2; Capacity 1)</li><li>Anti-Fighter Barrage 6(x3)</li><li>When this unit uses ANTI-FIGHTER BARRAGE, each result of 9 or 10 also destroys 1 of your opponent's infantry in the space area of the active system</li></ul>"}]},{id:19,name:"Empyrean",complexity:Pe.Low,startingtech:[62],edition:v.PoK,tech:[{id:69,name:"Aetherstream",requirements:{[g.blue]:2},edition:v.PoK,provides:g.blue,description:"After you or one of your neighbors activates a system that is adjacent to an anomaly, you may apply +1 to the move value of all of that player's ships during this tactical action"},{id:70,name:"Voidwatch",requirements:{[g.green]:1},edition:v.PoK,provides:g.green,description:"After a player moves ships into a system that contains 1 or more of your units, they must give you 1 promissory note from their hand, if able"}]},{id:20,name:"Mahact Gene-Sorcerers",complexity:Pe.High,startingtech:[67,61],edition:v.PoK,tech:[{id:71,name:"Genetic Recombination",requirements:{[g.green]:1},edition:v.PoK,provides:g.green,description:"You may exhaust this card before a player casts votes; that player must cast at least 1 vote for an outcome of your choice or remove 1 token from their fleet pool and return it to their reinforcements"},{id:72,name:"Crimson Legionnaire II",requirements:{[g.green]:2},edition:v.PoK,provides:g.black,description:"<ul><li>Mahact Ground Force (Cost 1x2; Combat 7)</li><li>After this unit is destroyed, gain 1 commodity or convert 1 of your commodities to a trade good. Then, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your home system</li></ul>"}]},{id:21,name:"Naaz-Rokha Alliance",complexity:Pe.Low,startingtech:[64,60],edition:v.PoK,tech:[{id:73,name:"Supercharge",requirements:{[g.red]:1},edition:v.PoK,provides:g.red,description:"At the start of a combat round, you may exhaust this card to apply +1 to the result of each of your unit's combat rolls during this combat round"},{id:74,name:"Pre-Fab Arcologies",requirements:{[g.green]:3},edition:v.PoK,provides:g.green,description:"After you explore a planet, ready that planet"}]},{id:22,name:"Nomad",complexity:Pe.Low,startingtech:[63],edition:v.PoK,tech:[{id:75,name:"Temporal Command Suite",requirements:{[g.yellow]:1},edition:v.PoK,provides:g.yellow,description:"After any player's agent becomes exhausted, you may exhaust this card to ready that agent; if you ready another player's agent, you may perform a transaction with that player"},{id:76,name:"Memoria II",requirements:{[g.green]:1,[g.blue]:1,[g.yellow]:1},edition:v.PoK,provides:g.black,description:"<ul><li>Nomad Flagship (Cost 8; Combat 5(x2); Move 2; Capacity 6)</li><li>Sustain Damage</li><li>Anti-Fighter Barrage 5(x3)</li><li>You may treat this unit as if it were adjacent to systems that contain one or more of your mechs.</li></ul>"}]},{id:23,name:"Titans of Ul",complexity:Pe.Moderate,startingtech:[50,66],edition:v.PoK,tech:[{id:76,name:"Saturn Engine II",requirements:{[g.green]:1,[g.yellow]:1,[g.red]:1},edition:v.PoK,provides:g.black,description:"<ul><li>Titan Cruiser (Cost 2; Combat 6; Move 3; Capacity 2)</li><li>Sustain Damage</li></ul>"},{id:77,name:"Hel Titan II",requirements:{[g.red]:1,[g.yellow]:1},edition:v.PoK,provides:g.black,description:"<ul><li>Titan PDS (Combat 6)</li><li>Planetary Shield</li><li>Space Cannon 5</li><li>Sustain Damage</li><li>Production 1</li><li>This unit is treated as both a structure and a ground force. It cannot be transported.</li><li>You may use this unit's SPACE CANNON against ships that are adjacent to this unit's system.</li></ul>"}]},{id:24,name:"Vuil'Raith Cabal",complexity:Pe.High,startingtech:[65],edition:v.PoK,tech:[{id:78,name:"Vortex",requirements:{[g.red]:1},edition:v.PoK,provides:g.red,description:"ACTION: Exhaust this card to choose another player's non-structure unit in a system that is adjacent to 1 or more of your space docks. Capture 1 unit of that type from that player's reinforcements"},{id:79,name:"Dimensional Tear II",requirements:{[g.yellow]:2},edition:v.PoK,provides:g.black,description:"<ul><li>Cabal Space Dock(PRODUCTION 7)</li><li>This system is a gravity rift; your ships do not roll for this gravity rift.</li><li>Place a dimensional tear token beneath this unit as a reminder</li><li>Up to 12 fighters in this system do not count against your ships' capacity.</li></ul>"}]}],genericTech:[{id:35,name:"Assault Cannon",requirements:{[g.red]:3},edition:v.Base,description:"At the start of a space combat in a system that contains 3 or more of your non-fighter ships, your opponent must destroy 1 of his non-fighter ships.",provides:g.red},{id:36,edition:v.Base,name:"Duranium Armor",requirements:{[g.red]:2},description:"During each combat round, after you assign hits to your units, repair 1 of your damaged units that did not use Sustain Damage during this combat round.",provides:g.red},{id:37,edition:v.Base,name:"Magen Defense Grid \u03A9\u03A9",requirements:{[g.red]:1},description:"<ul><li>When any player activates a system that contains 1 or more of your structures, place 1 infantry from your reinforcements with each of those structures.</li><li>At the start of ground combat on a planet that contains 1 or more of your structures, produce 1 hit and assign it to 1 of your opponent's ground forces.</li></ul>",provides:g.red},{id:38,edition:v.Base,name:"Plasma Scoring",requirements:{},description:"When 1 or more of your unit use Bombardment or Space Canon, 1 of those units may roll 1 additional die.",provides:g.red},{id:39,edition:v.Base,name:"Integrated Economy",requirements:{[g.yellow]:3},description:"After you gain control of a planet, you may produce any number of units on that planet that have a combined cost equal to or less than that planet\u2019s resource value.",provides:g.yellow},{id:40,edition:v.Base,name:"Transit Diodes",requirements:{[g.yellow]:2},description:"You may exhaust this card at the start of your turn during the action phase; remove up to 4 of your GFs from the game board and place them on 1 or more planets you control.",provides:g.yellow},{id:41,edition:v.Base,name:"Graviton Laser Systems",requirements:{[g.yellow]:1},description:"You may exhaust this card before 1 or of your units use Space Cannon; hits produced by those units must be assigned to non-fighter ships if able.",provides:g.yellow},{id:42,edition:v.Base,name:"Sarween Tools",requirements:{},description:"When 1 or more of your units use Production, reduce the combined cost of the produced units by 1.",provides:g.yellow},{id:43,edition:v.Base,name:"X-89 Bacterial Weapon \u03A9\u03A9",requirements:{[g.green]:3},description:"<ul><li>Double the hits produced by your units' BOMBARDMENT and ground combat rolls.</li><li>Exhaust each planet you use BOMBARDMENT against.</li></ul>",provides:g.green},{id:44,edition:v.Base,name:"Hyper Methabolism",requirements:{[g.green]:2},description:"During the status phase, gain 3 CTs instead of 2.",provides:g.green},{id:45,edition:v.Base,name:"Dacxive Animators",requirements:{[g.green]:1},description:"After you win an ground combat, you may place 1 infantry from your reinforcements on the planet.",provides:g.green},{id:46,edition:v.Base,name:"Neural Motivator",requirements:{},description:"During the Status Phase, draw 2 action cards instead of 1.",provides:g.green},{id:47,edition:v.Base,name:"Light / Wave Deflector",requirements:{[g.blue]:3},description:"Your ships can move through systems that contain other players\u2019 ships.",provides:g.blue},{id:48,edition:v.Base,name:"Fleet Logistics",requirements:{[g.blue]:2},description:"During each of your turn of the Action Phase, you may perform 2 actions instead of 1.",provides:g.blue},{id:49,edition:v.Base,name:"Gravity Drive",requirements:{[g.blue]:1},description:"You After you activate a system, apply +1 to the move value of 1 of your ships during the Tactical Action.",provides:g.blue},{id:50,edition:v.Base,name:"Antimass Deflectors",requirements:{},description:"Your ships can move through and into Asteroid Fields. When other players\u2019 units use Space Canon against your units, apply -1 to the result of each die roll.",provides:g.blue},{id:51,edition:v.Base,name:"War Sun",requirements:{[g.red]:3,[g.yellow]:1},description:"<ul><li>Cost 12; Battle 3[x3]; Move 2; Capacity 6</li><li>Other players\u2019 units in this system lose Planetary Shield</li><li>Sustain Damage</li><li>Bombardment 3[x3].</li></ul>",provides:g.black},{id:52,edition:v.Base,name:"Dreadnought II",requirements:{[g.blue]:2,[g.yellow]:1},description:"<ul><li>Cost 4; Battle 5; Move 2; Capacity 1</li><li>This unit cannot be destroyed by the \u201CDirect Hit\u201D action cards</li><li>Sustain Damage</li><li>Bombardment 5</li></ul>",provides:g.black},{id:53,edition:v.Base,name:"Cruiser II",requirements:{[g.red]:1,[g.yellow]:1,[g.green]:1},description:"Cost 2; Battle 6; Move 3; Capacity 1",provides:g.black},{id:54,edition:v.Base,name:"Destroyer II",requirements:{[g.red]:2},description:"<ul><li>Cost 1; Battle 8; Move 2</li><li>Anti-fighter barrage 6[x3].</li></ul>",provides:g.black},{id:55,edition:v.Base,name:"PDS II",requirements:{[g.red]:1,[g.yellow]:1},description:"<ul><li>You may use this unit\u2019s Space Canon against ships that are adjacent to this system</li><li>Planetary Shield</li><li>Space Cannon 5</li></ul>",provides:g.black},{id:56,edition:v.Base,name:"Carrier II",requirements:{[g.blue]:2},description:"Cost 3; Battle 9; Move 2; Capacity 6",provides:g.black},{id:57,edition:v.Base,name:"Fighter II",requirements:{[g.blue]:1,[g.green]:1},description:"<ul><li>Cost 1/2; Battle 8; Move 2</li><li>This unit may move without being transported. Fighters in excess of your ships\u2019 capacity count against your fleet pool.</li></ul>",provides:g.black},{id:58,edition:v.Base,name:"Infantry II",requirements:{[g.green]:2},description:"<ul><li>Cost 1/2; Battle 7</li><li>After this unit is destroyed, roll 1 die. If result \u2265 6: place the unit on this card. At the start of your next turn, place each unit on this card on a planet you control in your HS.</li></ul>",provides:g.black},{id:59,edition:v.Base,name:"Space Dock II",requirements:{[g.yellow]:2},description:"<ul><li>This unit\u2019s Production value is equal to 4 more than the resource value of this planet</li><li>Up to 3 fighters in this system do not count toward your ships\u2019 capacity</li><li>Production X.</li></ul>",provides:g.black},{id:60,edition:v.PoK,name:"Psychoarchaeology",requirements:{},description:"<ul><li>You can use technology specialties on planets you control without exhausting them, even if those planets are exhausted</li><li>During the Action Phase, you can exhaust planets you control that have technology specialties to gain 1 Trade Good</li></ul>",provides:g.green},{id:61,edition:v.PoK,name:"Bio-Stims",requirements:{[g.green]:1},description:"<ul><li>You may exhaust this card at the end of your turn to ready 1 of your planets that has a technology specialty or 1 of your other technologies</li></ul>",provides:g.green},{id:62,edition:v.PoK,name:"Dark Energy Tap",requirements:{},description:"<ul><li>After you perform a tactical action in a system that contains a frontier token, if you have 1 or more ships in that system, explore that token</li><li>Your ships can retreat into adjacent systems that do not contain other players' units, even if you do not have units or control planets in that system.</li></ul>",provides:g.blue},{id:63,edition:v.PoK,name:"Sling Relay",requirements:{[g.blue]:1},description:"<ul><li>ACTION: Exhaust this card to produce 1 ship in any system that contains one of your space docks</li></ul>",provides:g.blue},{id:64,edition:v.PoK,name:"AI Development Algorithm",requirements:{},description:"<ul><li>When you research a unit upgrade technology, you may exhaust this card to ignore any 1 prerequisite</li><li>When 1 or more of your units use Production, you may exhaust this card to reduce the combined cost of the produced units by the number of unit upgrade technologies that you own</li></ul>",provides:g.red},{id:65,edition:v.PoK,name:"Self Assembly Routines",requirements:{[g.red]:1},description:"<ul><li>After 1 or more of your units use PRODUCTION, you may exhaust this card to place 1 mech from your reinforcements on a planet you control in that system</li><li>After 1 of your mechs is destroyed, gain 1 trade good</li></ul>",provides:g.red},{id:66,edition:v.PoK,name:"Scanlink Drone Network",requirements:{},description:"<ul><li>When you activate a system, you may explore 1 planet in that system which contains 1 or more of your units</li></ul>",provides:g.yellow},{id:67,edition:v.PoK,name:"Predictive Intelligence",requirements:{[g.yellow]:1},description:"<ul><li>At the end of your turn, you may exhaust this card to redistribute your command tokens</li><li>When you cast votes during the agenda phase, you may cast 3 additional votes; if you do, and the outcome you voted for is not resolved, exhaust this card</li></ul>",provides:g.yellow}],systems:[{id:19,type:ee.Blue,edition:v.Base,planets:[{name:"Wellon",traits:[P.INDUSTRIAL],resources:1,influence:2,techSpecialty:[Ze.CYBERNETIC]}]},{id:20,type:ee.Blue,edition:v.Base,planets:[{name:"Vefut II",traits:[P.HAZARDOUS],resources:2,influence:2}]},{id:21,type:ee.Blue,edition:v.Base,planets:[{name:"Thibah",traits:[P.INDUSTRIAL],resources:1,influence:1,techSpecialty:[Ze.PROPULSION]}]},{id:22,type:ee.Blue,edition:v.Base,planets:[{name:"Tar'mann",traits:[P.INDUSTRIAL],resources:1,influence:1,techSpecialty:[Ze.BIOTIC]}]},{id:23,type:ee.Blue,edition:v.Base,planets:[{name:"Saudor",traits:[P.INDUSTRIAL],resources:2,influence:2}]},{id:24,type:ee.Blue,edition:v.Base,planets:[{name:"Mehar Xull",traits:[P.HAZARDOUS],resources:1,influence:3,techSpecialty:[Ze.WARFARE]}]},{id:25,type:ee.Blue,edition:v.Base,wormholes:[kn.BETA],planets:[{name:"Quann",traits:[P.CULTURAL],resources:2,influence:1}]},{id:26,type:ee.Blue,edition:v.Base,wormholes:[kn.ALPHA],planets:[{name:"Lodor",traits:[P.CULTURAL],resources:3,influence:1}]},{id:27,type:ee.Blue,edition:v.Base,planets:[{name:"New Albion",traits:[P.INDUSTRIAL],resources:1,influence:1,techSpecialty:[Ze.BIOTIC]},{name:"Starpoint",traits:[P.HAZARDOUS],resources:3,influence:1}]},{id:28,type:ee.Blue,edition:v.Base,planets:[{name:"Tequ'ran",traits:[P.HAZARDOUS],resources:2,influence:0},{name:"Torkan",traits:[P.CULTURAL],resources:0,influence:3}]},{id:29,type:ee.Blue,edition:v.Base,planets:[{name:"Qucen'n",traits:[P.INDUSTRIAL],resources:1,influence:2},{name:"Rarron",traits:[P.CULTURAL],resources:0,influence:3}]},{id:30,type:ee.Blue,edition:v.Base,planets:[{name:"Mellon",traits:[P.CULTURAL],resources:0,influence:2},{name:"Zohbat",traits:[P.HAZARDOUS],resources:3,influence:1}]},{id:31,type:ee.Blue,edition:v.Base,planets:[{name:"Lazar",traits:[P.INDUSTRIAL],resources:1,influence:0,techSpecialty:[Ze.CYBERNETIC]},{name:"Sakulag",traits:[P.HAZARDOUS],resources:2,influence:1}]},{id:32,type:ee.Blue,edition:v.Base,planets:[{name:"Dal Bootha",traits:[P.CULTURAL],resources:0,influence:2},{name:"Xxehan",traits:[P.CULTURAL],resources:1,influence:1}]},{id:33,type:ee.Blue,edition:v.Base,planets:[{name:"Corneeq",traits:[P.CULTURAL],resources:1,influence:2},{name:"Resulon",traits:[P.CULTURAL],resources:2,influence:0}]},{id:34,type:ee.Blue,edition:v.Base,planets:[{name:"Centauri",traits:[P.CULTURAL],resources:1,influence:3},{name:"Gral",traits:[P.INDUSTRIAL],resources:1,influence:1,techSpecialty:[Ze.PROPULSION]}]},{id:35,type:ee.Blue,edition:v.Base,planets:[{name:"Bereg",traits:[P.HAZARDOUS],resources:3,influence:1},{name:"Lirta IV",traits:[P.HAZARDOUS],resources:2,influence:3}]},{id:36,type:ee.Blue,edition:v.Base,planets:[{name:"Arnor",traits:[P.INDUSTRIAL],resources:2,influence:1},{name:"Lor",traits:[P.INDUSTRIAL],resources:1,influence:2}]},{id:37,type:ee.Blue,edition:v.Base,planets:[{name:"Arinam",traits:[P.INDUSTRIAL],resources:1,influence:2},{name:"Meer",traits:[P.HAZARDOUS],resources:0,influence:4,techSpecialty:[Ze.WARFARE]}]},{id:38,type:ee.Blue,edition:v.Base,planets:[{name:"Abyz",traits:[P.HAZARDOUS],resources:3,influence:0},{name:"Fria",traits:[P.HAZARDOUS],resources:2,influence:0}]},{id:39,type:ee.Red,edition:v.Base,wormholes:[kn.ALPHA]},{id:40,type:ee.Red,edition:v.Base,wormholes:[kn.BETA]},{id:41,type:ee.Red,edition:v.Base,anomaly:en.GRAVITY_RIFT},{id:42,type:ee.Red,edition:v.Base,anomaly:en.NEBULA},{id:43,type:ee.Red,edition:v.Base,anomaly:en.SUPERNOVA},{id:44,type:ee.Red,edition:v.Base,anomaly:en.ASTEROID_FIELD},{id:45,type:ee.Red,edition:v.Base,anomaly:en.ASTEROID_FIELD},{id:46,type:ee.Red,edition:v.Base},{id:47,type:ee.Red,edition:v.Base},{id:48,type:ee.Red,edition:v.Base},{id:49,type:ee.Red,edition:v.Base},{id:50,type:ee.Red,edition:v.Base},{id:59,type:ee.Blue,edition:v.PoK,planets:[{name:"Archon Vail",traits:[P.HAZARDOUS],resources:1,influence:3,techSpecialty:[Ze.PROPULSION]}]},{id:60,type:ee.Blue,edition:v.PoK,planets:[{name:"Perimeter",traits:[P.INDUSTRIAL],resources:2,influence:1}]},{id:61,type:ee.Blue,edition:v.PoK,planets:[{name:"Ang",traits:[P.INDUSTRIAL],resources:2,influence:0,techSpecialty:[Ze.WARFARE]}]},{id:62,type:ee.Blue,edition:v.PoK,planets:[{name:"Sem-Lore",traits:[P.CULTURAL],resources:3,influence:2,techSpecialty:[Ze.CYBERNETIC]}]},{id:63,type:ee.Blue,edition:v.PoK,planets:[{name:"Vorhal",traits:[P.CULTURAL],resources:0,influence:2,techSpecialty:[Ze.BIOTIC]}]},{id:64,type:ee.Blue,edition:v.PoK,wormholes:[kn.BETA],planets:[{name:"Atlas",traits:[P.HAZARDOUS],resources:3,influence:1}]},{id:65,type:ee.Blue,edition:v.PoK,planets:[{name:"Primor",traits:[P.CULTURAL],resources:2,influence:1,legendary:!0}]},{id:66,type:ee.Blue,edition:v.PoK,planets:[{name:"Hope's End",traits:[P.HAZARDOUS],resources:3,influence:0,legendary:!0}]},{id:67,type:ee.Red,edition:v.PoK,anomaly:en.GRAVITY_RIFT,planets:[{name:"Cormund",traits:[P.HAZARDOUS],resources:2,influence:0}]},{id:68,type:ee.Red,edition:v.PoK,anomaly:en.NEBULA,planets:[{name:"Everra",traits:[P.CULTURAL],resources:3,influence:1}]},{id:69,type:ee.Blue,edition:v.PoK,planets:[{name:"Accoen",traits:[P.INDUSTRIAL],resources:2,influence:3},{name:"Jeol Ir",traits:[P.INDUSTRIAL],resources:2,influence:3}]},{id:70,type:ee.Blue,edition:v.PoK,planets:[{name:"Kraag",traits:[P.HAZARDOUS],resources:2,influence:1},{name:"Siig",traits:[P.HAZARDOUS],resources:0,influence:2}]},{id:71,type:ee.Blue,edition:v.PoK,planets:[{name:"Ba'Kal",traits:[P.INDUSTRIAL],resources:3,influence:2},{name:"Alio Prima",traits:[P.CULTURAL],resources:1,influence:1}]},{id:72,type:ee.Blue,edition:v.PoK,planets:[{name:"Lisis",traits:[P.INDUSTRIAL],resources:2,influence:2},{name:"Velnor",traits:[P.INDUSTRIAL],resources:2,influence:1,techSpecialty:[Ze.WARFARE]}]},{id:73,type:ee.Blue,edition:v.PoK,planets:[{name:"Lisis",traits:[P.CULTURAL],resources:0,influence:2,techSpecialty:[Ze.CYBERNETIC]},{name:"Xanhact",traits:[P.HAZARDOUS],resources:0,influence:1}]},{id:74,type:ee.Blue,edition:v.PoK,planets:[{name:"Vega Major",traits:[P.CULTURAL],resources:2,influence:1},{name:"Vega Minor",traits:[P.CULTURAL],resources:1,influence:2,techSpecialty:[Ze.PROPULSION]}]},{id:75,type:ee.Blue,edition:v.PoK,planets:[{name:"Loki",traits:[P.CULTURAL],resources:1,influence:2},{name:"Abaddon",traits:[P.CULTURAL],resources:1,influence:0},{name:"Ashtroth",traits:[P.HAZARDOUS],resources:2,influence:0}]},{id:76,type:ee.Blue,edition:v.PoK,planets:[{name:"Rigel I",traits:[P.HAZARDOUS],resources:0,influence:1},{name:"Rigel II",traits:[P.INDUSTRIAL],resources:1,influence:2},{name:"Rigel III",traits:[P.INDUSTRIAL],resources:1,influence:1,techSpecialty:[Ze.BIOTIC]}]},{id:77,type:ee.Red,edition:v.PoK},{id:78,type:ee.Red,edition:v.PoK},{id:79,type:ee.Red,edition:v.PoK,wormholes:[kn.ALPHA],anomaly:en.ASTEROID_FIELD},{id:80,type:ee.Red,edition:v.PoK,anomaly:en.SUPERNOVA}]};function rs(t,n=0){return bI(t)?Number(t):arguments.length===2?n:0}function bI(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function cn(t){return t instanceof U?t.nativeElement:t}function I_(t){return Array.isArray(t)?t:[t]}function wt(t){return t==null?"":typeof t=="string"?t:`${t}px`}function ln(t){return t!=null&&`${t}`!="false"}var N_;try{N_=typeof Intl<"u"&&Intl.v8BreakIterator}catch(t){N_=!1}var Ge=(()=>{class t{_platformId=u(Bo);isBrowser=this._platformId?lx(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||N_)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var os;function SI(){if(os==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return os=!1,os;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)os=!0;else{let t=Element.prototype.scrollTo;t?os=!/\{\s*\[native code\]\s*\}/.test(t.toString()):os=!1}}return os}var M_;function wI(){if(M_==null){let t=typeof document<"u"?document.head:null;M_=!!(t&&(t.createShadowRoot||t.attachShadow))}return M_}function T_(t){if(wI()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function pn(t){if(t.composedPath)try{return t.composedPath()[0]}catch(n){}return t.target}function k_(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var kl;function CI(){if(kl==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>kl=!0}))}finally{kl=kl||!1}return kl}function Ea(t){return CI()?t:!!t.capture}var Ia,DI=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function R_(){if(Ia)return Ia;if(typeof document!="object"||!document)return Ia=new Set(DI),Ia;let t=document.createElement("input");return Ia=new Set(DI.filter(n=>(t.setAttribute("type",n),t.type===n))),Ia}var xh=new WeakMap,Ct=(()=>{class t{_appRef;_injector=u(me);_environmentInjector=u(He);load(e){let i=this._appRef=this._appRef||this._injector.get(Et),r=xh.get(i);r||(r={loaders:new Set,refs:[]},xh.set(i,r),i.onDestroy(()=>{xh.get(i)?.refs.forEach(o=>o.destroy()),xh.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(pf(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var xI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return t})(),Eh;function $B(){if(Eh===void 0&&(Eh=null,typeof window<"u")){let t=window;if(t.trustedTypes!==void 0)try{Eh=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n})}catch(n){console.error(n)}}return Eh}function Na(t){return $B()?.createHTML(t)||t}function ss(t){return t.buttons===0||t.detail===0}function as(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var EI=new b("cdk-input-modality-detector-options"),II={ignoreKeys:[18,17,224,91,16]},NI=650,A_={passive:!0,capture:!0},MI=(()=>{class t{_platform=u(Ge);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new vt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=pn(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<NI||(this._modality.next(ss(e)?"keyboard":"mouse"),this._mostRecentTarget=pn(e))};_onTouchstart=e=>{if(as(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=pn(e)};constructor(){let e=u(L),i=u(J),r=u(EI,{optional:!0});if(this._options=w(w({},II),r),this.modalityDetected=this._modality.pipe(ap(1)),this.modalityChanged=this.modalityDetected.pipe(Ld()),this._platform.isBrowser){let o=u(ft).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,A_),o.listen(i,"mousedown",this._onMousedown,A_),o.listen(i,"touchstart",this._onTouchstart,A_)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})(),Rl=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Rl||{}),TI=new b("cdk-focus-monitor-default-options"),Ih=Ea({passive:!0,capture:!0}),Gi=(()=>{class t{_ngZone=u(L);_platform=u(Ge);_inputModalityDetector=u(MI);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(J);_stopInputModalityDetector=new I;constructor(){let e=u(TI,{optional:!0});this._detectionMode=e?.detectionMode||Rl.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=pn(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=cn(e);if(!this._platform.isBrowser||r.nodeType!==1)return W();let o=T_(r)||this._document,s=this._elementInfo.get(r);if(s)return i&&(s.checkChildren=!0),s.subject;let a={checkChildren:i,subject:new I,rootNode:o};return this._elementInfo.set(r,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let i=cn(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=cn(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,c])=>this._originChanged(a,i,c)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Rl.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===Rl.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?NI:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=pn(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,Ih),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,Ih)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Be(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Ih),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Ih),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var kI=new Set,cs,O_=(()=>{class t{_platform=u(Ge);_nonce=u(jr,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):qB}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&GB(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();function GB(t,n){if(!kI.has(t))try{cs||(cs=document.createElement("style"),n&&cs.setAttribute("nonce",n),cs.setAttribute("type","text/css"),document.head.appendChild(cs)),cs.sheet&&(cs.sheet.insertRule(`@media ${t.replace(/[{}]/g,"")} {body{ }}`,0),kI.add(t))}catch(e){console.error(e)}}function qB(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}function WB(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var RI=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})(),KB=(()=>{class t{_mutationObserverFactory=u(RI);_observedElements=new Map;_ngZone=u(L);ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=cn(e);return new ne(r=>{let s=this._observeElement(i).pipe(he(a=>a.filter(c=>!WB(c))),Me(a=>!!a.length)).subscribe(a=>{this._ngZone.run(()=>{r.next(a)})});return()=>{s.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new I,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})(),AI=(()=>{class t{_contentObserver=u(KB);_elementRef=u(U);event=new se;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=rs(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(rc(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",j],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),Nh=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({providers:[RI]})}return t})();var YB=200,Mh=class{_letterKeyStream=new I;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new I;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:YB;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Ft(e=>this._pressedLetters.push(e)),rc(n),Me(()=>this._pressedLetters.length>0),he(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Ma(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Th=class{_items;_activeItemIndex=G(-1);_activeItem=G(null);_wrap=!1;_typeaheadSubscription=pe.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof Dn?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):Jn(n)&&(this._effectRef=Yt(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new I;change=new I;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Mh(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(r||Ma(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return Jn(this._items)?this._items():this._items instanceof Dn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var mr=class extends Th{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var PI=new Map,pt=class t{_appId=u(Lo);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){this._appId!=="ng"&&(n+=this._appId);let i=PI.get(n);return i===void 0?i=0:i++,PI.set(n,i),`${n}${e?t._infix+"-":""}${i}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})};var ZB=new b("MATERIAL_ANIMATIONS"),LI=null;function XB(){return u(ZB,{optional:!0})?.animationsDisabled||u(Vr,{optional:!0})==="NoopAnimations"?"di-disabled":(LI??=u(O_).matchMedia("(prefers-reduced-motion)").matches,LI?"reduced-motion":"enabled")}function Tt(){return XB()!=="enabled"}var $n=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})($n||{}),L_=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=$n.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},BI=Ea({passive:!0,capture:!0}),B_=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let s=o.get(i);s?s.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,BI)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,BI)))}_delegateEventHandler=n=>{let e=pn(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},Al={enterDuration:225,exitDuration:150},JB=800,VI=Ea({passive:!0,capture:!0}),jI=["mousedown","touchstart"],UI=["mouseup","mouseleave","touchend","touchcancel"],eV=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return t})(),ls=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new B_;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=cn(i)),o&&o.get(Ct).load(eV)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=w(w({},Al),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let s=i.radius||tV(n,e,r),a=n-r.left,c=e-r.top,l=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${c-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),h=f.transitionProperty,m=f.transitionDuration,p=h==="none"||m==="0s"||m==="0s, 0s"||r.width===0&&r.height===0,C=new L_(this,d,i,p);d.style.transform="scale3d(1, 1, 1)",C.state=$n.FADING_IN,i.persistent||(this._mostRecentTransientRipple=C);let E=null;return!p&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let N=()=>{E&&(E.fallbackTimer=null),clearTimeout(te),this._finishRippleTransition(C)},R=()=>this._destroyRipple(C),te=setTimeout(R,l+100);d.addEventListener("transitionend",N),d.addEventListener("transitioncancel",R),E={onTransitionEnd:N,onTransitionCancel:R,fallbackTimer:te}}),this._activeRipples.set(C,E),(p||!l)&&this._finishRippleTransition(C),C}fadeOutRipple(n){if(n.state===$n.FADING_OUT||n.state===$n.HIDDEN)return;let e=n.element,i=w(w({},Al),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=$n.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=cn(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,jI.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{UI.forEach(e=>{this._triggerElement.addEventListener(e,this,VI)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===$n.FADING_IN?this._startFadeOutTransition(n):n.state===$n.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=$n.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=$n.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=ss(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+JB;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!as(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===$n.VISIBLE||n.config.terminateOnPointerUp&&n.state===$n.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(jI.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(UI.forEach(e=>n.removeEventListener(e,this,VI)),this._pointerUpEventsRegistered=!1))}};function tV(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var ds=new b("mat-ripple-global-options"),kh=(()=>{class t{_elementRef=u(U);_animationsDisabled=Tt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(L),i=u(Ge),r=u(ds,{optional:!0}),o=u(me);this._globalOptions=r||{},this._rippleRenderer=new ls(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:w(w(w({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,w(w({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,w(w({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&Z("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var Rn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return t})();function Rh(t){return t&&typeof t.connect=="function"&&!(t instanceof Ya)}var ci=(function(t){return t[t.REPLACED=0]="REPLACED",t[t.INSERTED=1]="INSERTED",t[t.MOVED=2]="MOVED",t[t.REMOVED=3]="REMOVED",t})(ci||{}),Ah=class{viewCacheSize=20;_viewCache=[];applyChanges(n,e,i,r,o){n.forEachOperation((s,a,c)=>{let l,d;if(s.previousIndex==null){let f=()=>i(s,a,c);l=this._insertView(f,c,e,r(s)),d=l?ci.INSERTED:ci.REPLACED}else c==null?(this._detachAndCacheView(a,e),d=ci.REMOVED):(l=this._moveView(a,c,e,r(s)),d=ci.MOVED);o&&o({context:l?.context,operation:d,record:s})})}detach(){for(let n of this._viewCache)n.destroy();this._viewCache=[]}_insertView(n,e,i,r){let o=this._insertViewFromCache(e,i);if(o){o.context.$implicit=r;return}let s=n();return i.createEmbeddedView(s.templateRef,s.context,s.index)}_detachAndCacheView(n,e){let i=e.detach(n);this._maybeCacheView(i,e)}_moveView(n,e,i,r){let o=i.get(n);return i.move(o,e),o.context.$implicit=r,o}_maybeCacheView(n,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(n);else{let i=e.indexOf(n);i===-1?n.destroy():e.remove(i)}}_insertViewFromCache(n,e){let i=this._viewCache.pop();return i&&e.insert(i,n),i||null}};var Ol=(()=>{class t{_listeners=[];notify(e,i){for(let r of this._listeners)r(e,i)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(i=>e!==i)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var Oh=class{applyChanges(n,e,i,r,o){n.forEachOperation((s,a,c)=>{let l,d;if(s.previousIndex==null){let f=i(s,a,c);l=e.createEmbeddedView(f.templateRef,f.context,f.index),d=ci.INSERTED}else c==null?(e.remove(a),d=ci.REMOVED):(l=e.get(a),e.move(l,c),d=ci.MOVED);o&&o({context:l?.context,operation:d,record:s})})}detach(){}};var nV=new b("cdk-dir-doc",{providedIn:"root",factory:()=>u(J)}),iV=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function HI(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?iV.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var li=(()=>{class t{get value(){return this.valueSignal()}valueSignal=G("ltr");change=new se;constructor(){let e=u(nV,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(HI(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var Te=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({})}return t})();var V_=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=ln(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=ln(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(ge("aria-orientation",r.vertical?"vertical":"horizontal"),Z("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
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
`],encapsulation:2})}return t})(),zI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({imports:[Te]})}return t})();var $I=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({imports:[Te]})}return t})();var eo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({imports:[Te]})}return t})();var rV=["*"],oV=`.mdc-list {
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
`,sV=["unscopedContent"],aV=["text"],cV=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],lV=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var dV=new b("ListOption"),uV=(()=>{class t{_elementRef=u(U);static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),fV=(()=>{class t{_elementRef=u(U);static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),hV=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),GI=(()=>{class t{_listOption=u(dV,{optional:!0});_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,hostVars:4,hostBindings:function(i,r){i&2&&Z("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),mV=(()=>{class t extends GI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[le]})}return t})(),pV=(()=>{class t extends GI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[le]})}return t})(),gV=new b("MAT_LIST_CONFIG"),j_=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=ln(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(ln(e))}_disabled=G(!1);_defaultOptions=u(gV,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,hostVars:1,hostBindings:function(i,r){i&2&&ge("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),vV=(()=>{class t{_elementRef=u(U);_ngZone=u(L);_listBase=u(j_,{optional:!0});_platform=u(Ge);_hostElement;_isButtonElement;_noopAnimations=Tt();_avatars;_icons;set lines(e){this._explicitLines=rs(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=ln(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(ln(e))}_disabled=G(!1);_subscriptions=new pe;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){u(Ct).load(Rn);let e=u(ds,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new ls(this,this._ngZone,this._hostElement,this._platform,u(me)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(un(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,contentQueries:function(i,r,o){if(i&1&&mt(o,mV,4)(o,pV,4),i&2){let s;Y(s=Q())&&(r._avatars=s),Y(s=Q())&&(r._icons=s)}},hostVars:4,hostBindings:function(i,r){i&2&&(ge("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),Z("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var qI=(()=>{class t extends j_{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[ye([{provide:j_,useExisting:t}]),le],ngContentSelectors:rV,decls:1,vars:0,template:function(i,r){i&1&&(Ne(),A(0))},styles:[oV],encapsulation:2})}return t})(),WI=(()=>{class t extends vV{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=ln(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&mt(o,fV,5)(o,uV,5)(o,hV,5),i&2){let s;Y(s=Q())&&(r._lines=s),Y(s=Q())&&(r._titles=s),Y(s=Q())&&(r._meta=s)}},viewQuery:function(i,r){if(i&1&&$t(sV,5)(aV,5),i&2){let o;Y(o=Q())&&(r._unscopedContent=o.first),Y(o=Q())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(ge("aria-current",r._getAriaCurrent()),Z("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[le],ngContentSelectors:lV,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(Ne(cV),A(0),y(1,"span",1),A(2,1),A(3,2),y(4,"span",2,0),ve("cdkObserveContent",function(){return r._updateItemLines(!0)}),A(6,3),_()(),A(7,4),A(8,5),K(9,"div",3))},dependencies:[AI],encapsulation:2})}return t})();var KI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({imports:[Nh,eo,$I,Te,zI]})}return t})();function QI(t){return Error(`Unable to find icon with the name "${t}"`)}function yV(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function ZI(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function XI(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var pr=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},Ph=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new pr(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let s=this._sanitizer.sanitize(Oe.HTML,r);if(!s)throw XI(r);let a=Na(s);return this._addSvgIconConfig(e,i,new pr("",a,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new pr(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(Oe.HTML,i);if(!o)throw XI(i);let s=Na(o);return this._addSvgIconSetConfig(e,new pr("",s,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(Oe.RESOURCE_URL,e);if(!i)throw ZI(e);let r=this._cachedIconsByUrl.get(i);return r?W(Fh(r)):this._loadSvgIconFromConfig(new pr(e,null)).pipe(Ft(o=>this._cachedIconsByUrl.set(i,o)),he(o=>Fh(o)))}getNamedSvgIcon(e,i=""){let r=JI(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(i);return s?this._getSvgFromIconSetConfigs(e,s):tc(QI(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?W(Fh(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(he(i=>Fh(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return W(r);let o=i.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(Tr(a=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(Oe.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(l)),W(null)})));return ic(o).pipe(he(()=>{let s=this._extractIconWithNameFromAnySet(e,i);if(!s)throw QI(e);return s}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,e,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Ft(i=>e.svgText=i),he(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?W(null):this._fetchIcon(e).pipe(Ft(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,r);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),r);let a=this._svgElementFromString(Na("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(Na("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:s,value:a}=r[o];s!=="id"&&i.setAttribute(s,a)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw yV();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let s=this._sanitizer.sanitize(Oe.RESOURCE_URL,i);if(!s)throw ZI(i);let a=this._inProgressUrlFetches.get(s);if(a)return a;let c=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(he(l=>Na(l)),Rr(()=>this._inProgressUrlFetches.delete(s)),oc());return this._inProgressUrlFetches.set(s,c),c}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(JI(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return _V(o)?new pr(o.url,null,o.options):new pr(o,null)}}static \u0275fac=function(i){return new(i||t)(T(Ff,8),T(sl),T(J,8),T(rn))};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Fh(t){return t.cloneNode(!0)}function JI(t,n){return t+":"+n}function _V(t){return!!(t.url&&t.options)}var bV=["*"],SV=new b("MAT_ICON_DEFAULT_OPTIONS"),wV=new b("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(J),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),eN=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],CV=eN.map(t=>`[${t}]`).join(", "),DV=/^url\(['"]?#(.*?)['"]?\)$/,to=(()=>{class t{_elementRef=u(U);_iconRegistry=u(Ph);_location=u(wV);_errorHandler=u(rn);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=pe.EMPTY;constructor(){let e=u(new Un("aria-hidden"),{optional:!0}),i=u(SV,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(CV),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)eN.forEach(s=>{let a=i[o],c=a.getAttribute(s),l=c?c.match(DV):null;if(l){let d=r.get(a);d||(d=[],r.set(a,d)),d.push({name:s,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(yt(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(ge("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),En(r.color?"mat-"+r.color:""),Z("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",j],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:bV,decls:1,vars:0,template:function(i,r){i&1&&(Ne(),A(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2})}return t})(),tN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({imports:[Te]})}return t})();var xV=["*"];var EV=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],IV=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],NV=new b("MAT_CARD_CONFIG"),no=(()=>{class t{appearance;constructor(){let e=u(NV,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&Z("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:xV,decls:1,vars:0,template:function(i,r){i&1&&(Ne(),A(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2})}return t})(),io=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var ro=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var nN=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&Z("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),oo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:IV,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(Ne(EV),A(0),rt(1,"div",0),A(2,1),ht(),A(3,2))},encapsulation:2})}return t})();var Ta=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({imports:[Te]})}return t})();var MV={capture:!0},TV=["focus","mousedown","mouseenter","touchstart"],U_="mat-ripple-loader-uninitialized",H_="mat-ripple-loader-class-name",iN="mat-ripple-loader-centered",Vh="mat-ripple-loader-disabled",jh=(()=>{class t{_document=u(J);_animationsDisabled=Tt();_globalRippleOptions=u(ds,{optional:!0});_platform=u(Ge);_ngZone=u(L);_injector=u(me);_eventCleanups;_hosts=new Map;constructor(){let e=u(ft).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>TV.map(i=>e.listen(this._document,i,this._onInteraction,MV)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(U_,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(H_))&&e.setAttribute(H_,i.className||""),i.centered&&e.setAttribute(iN,""),i.disabled&&e.setAttribute(Vh,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(Vh,""):e.removeAttribute(Vh)}_onInteraction=e=>{let i=pn(e);if(i instanceof HTMLElement){let r=i.closest(`[${U_}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(H_)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Al.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??Al.exitDuration,a={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Vh),rippleConfig:{centered:e.hasAttribute(iN),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},c=new ls(a,this._ngZone,i,this._platform,this._injector),l=!a.rippleDisabled;l&&c.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:c,hasSetUpEvents:l}),e.removeAttribute(U_)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var rN=new b("");var Uh=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}isSignalErrorState(e){if(!e)return!1;let i=e().invalid(),r=e().touched();return i&&r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var Hh=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(n,e,i,r,o){this._defaultMatcher=n,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o,e?Jn(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let n=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==n&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(n){if(this.formField&&n?.isSignalErrorState)return n.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,i=this.ngControl?this.ngControl.control:null;return n?.isErrorState(i,e)??!1}};var z_=class{_box;_destroyed=new I;_resizeSubject=new I;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new ne(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Me(e=>e.some(i=>i.target===n)),jd({bufferSize:1,refCount:!0}),Be(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},oN=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(L);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new z_(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var kV=["notch"],RV=["*"],sN=["iconPrefixContainer"],aN=["textPrefixContainer"],cN=["iconSuffixContainer"],lN=["textSuffixContainer"],AV=["textField"],OV=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],FV=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function PV(t,n){t&1&&K(0,"span",21)}function LV(t,n){if(t&1&&(y(0,"label",20),A(1,1),ie(2,PV,1,0,"span",21),_()),t&2){let e=O(2);V("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),ge("for",e._control.disableAutomaticLabeling?null:e._control.id),S(2),re(!e.hideRequiredMarker&&e._control.required?2:-1)}}function BV(t,n){if(t&1&&ie(0,LV,3,5,"label",20),t&2){let e=O();re(e._hasFloatingLabel()?0:-1)}}function VV(t,n){t&1&&K(0,"div",7)}function jV(t,n){}function UV(t,n){if(t&1&&Fe(0,jV,0,0,"ng-template",13),t&2){O(2);let e=jn(1);V("ngTemplateOutlet",e)}}function HV(t,n){if(t&1&&(y(0,"div",9),ie(1,UV,1,1,null,13),_()),t&2){let e=O();V("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),S(),re(e._forceDisplayInfixLabel()?-1:1)}}function zV(t,n){t&1&&(y(0,"div",10,2),A(2,2),_())}function $V(t,n){t&1&&(y(0,"div",11,3),A(2,3),_())}function GV(t,n){}function qV(t,n){if(t&1&&Fe(0,GV,0,0,"ng-template",13),t&2){O();let e=jn(1);V("ngTemplateOutlet",e)}}function WV(t,n){t&1&&(y(0,"div",14,4),A(2,4),_())}function KV(t,n){t&1&&(y(0,"div",15,5),A(2,5),_())}function YV(t,n){t&1&&K(0,"div",16)}function QV(t,n){t&1&&(y(0,"div",18),A(1,6),_())}function ZV(t,n){if(t&1&&(y(0,"mat-hint",22),M(1),_()),t&2){let e=O(2);V("id",e._hintLabelId),S(),Pt(e.hintLabel)}}function XV(t,n){if(t&1&&(y(0,"div",19),ie(1,ZV,2,2,"mat-hint",22),A(2,7),K(3,"div",23),A(4,8),_()),t&2){let e=O();S(),re(e.hintLabel?1:-1)}}var gr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-label"]]})}return t})(),gN=new b("MatError"),$_=(()=>{class t{id=u(pt).getId("mat-mdc-error-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&sn("id",r.id)},inputs:{id:"id"},features:[ye([{provide:gN,useExisting:t}])]})}return t})(),Fl=(()=>{class t{align="start";id=u(pt).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(sn("id",r.id),ge("align",null),Z("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),JV=new b("MatPrefix");var ej=new b("MatSuffix");var vN=new b("FloatingLabelParent"),dN=(()=>{class t{_elementRef=u(U);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(oN);_ngZone=u(L);_parent=u(vN);_resizeSubscription=new pe;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return tj(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&Z("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function tj(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var uN="mdc-line-ripple--active",zh="mdc-line-ripple--deactivating",fN=(()=>{class t{_elementRef=u(U);_cleanupTransitionEnd;constructor(){let e=u(L),i=u(ze);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(zh),e.add(uN)}deactivate(){this._elementRef.nativeElement.classList.add(zh)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(zh);e.propertyName==="opacity"&&r&&i.remove(uN,zh)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),hN=(()=>{class t{_elementRef=u(U);_ngZone=u(L);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&$t(kV,5),i&2){let o;Y(o=Q())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&Z("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:RV,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Ne(),mn(0,"div",1),rt(1,"div",2,0),A(3),ht(),mn(4,"div",3))},encapsulation:2})}return t})(),G_=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t})}return t})();var q_=new b("MatFormField"),nj=new b("MAT_FORM_FIELD_DEFAULT_OPTIONS"),mN="fill",ij="auto",pN="fixed",rj="translateY(-50%)",so=(()=>{class t{_elementRef=u(U);_changeDetectorRef=u(Je);_platform=u(Ge);_idGenerator=u(pt);_ngZone=u(L);_defaults=u(nj,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Kc("iconPrefixContainer");_textPrefixContainerSignal=Kc("textPrefixContainer");_iconSuffixContainerSignal=Kc("iconSuffixContainer");_textSuffixContainerSignal=Kc("textSuffixContainer");_prefixSuffixContainers=$e(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=YD(gr);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ln(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||ij}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||mN;this._appearanceSignal.set(i)}_appearanceSignal=G(mN);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||pN}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||pN}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new I;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Tt();constructor(){let e=this._defaults,i=u(li);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Yt(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=$e(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Ot([void 0,void 0]),he(()=>[i.errorState,i.userAriaDescribedBy]),Vd(),Me(([[o,s],[a,c]])=>o!==a||s!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Be(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),un(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){fy({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=$e(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(s=>s&&!o.includes(s)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,a=i?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,l=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",f=`${s+a}px`,m=`calc(${d} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,p=`var(--mat-mdc-form-field-label-transform, ${rj} translateX(${m}))`,C=s+a+c+l;return[p,C]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(sf(o,r._labelChild,gr,5),mt(o,G_,5)(o,JV,5)(o,ej,5)(o,gN,5)(o,Fl,5)),i&2){cf();let s;Y(s=Q())&&(r._formFieldControl=s.first),Y(s=Q())&&(r._prefixChildren=s),Y(s=Q())&&(r._suffixChildren=s),Y(s=Q())&&(r._errorChildren=s),Y(s=Q())&&(r._hintChildren=s)}},viewQuery:function(i,r){if(i&1&&(af(r._iconPrefixContainerSignal,sN,5)(r._textPrefixContainerSignal,aN,5)(r._iconSuffixContainerSignal,cN,5)(r._textSuffixContainerSignal,lN,5),$t(AV,5)(sN,5)(aN,5)(cN,5)(lN,5)(dN,5)(hN,5)(fN,5)),i&2){cf(4);let o;Y(o=Q())&&(r._textField=o.first),Y(o=Q())&&(r._iconPrefixContainer=o.first),Y(o=Q())&&(r._textPrefixContainer=o.first),Y(o=Q())&&(r._iconSuffixContainer=o.first),Y(o=Q())&&(r._textSuffixContainer=o.first),Y(o=Q())&&(r._floatingLabel=o.first),Y(o=Q())&&(r._notchedOutline=o.first),Y(o=Q())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&Z("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ye([{provide:q_,useExisting:t},{provide:vN,useExisting:t}])],ngContentSelectors:FV,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Ne(OV),Fe(0,BV,1,1,"ng-template",null,0,df),y(2,"div",6,1),ve("click",function(s){return r._control.onContainerClick(s)}),ie(4,VV,1,0,"div",7),y(5,"div",8),ie(6,HV,2,2,"div",9),ie(7,zV,3,0,"div",10),ie(8,$V,3,0,"div",11),y(9,"div",12),ie(10,qV,1,1,null,13),A(11),_(),ie(12,WV,3,0,"div",14),ie(13,KV,3,0,"div",15),_(),ie(14,YV,1,0,"div",16),_(),y(15,"div",17),ie(16,QV,2,0,"div",18)(17,XV,5,1,"div",19),_()),i&2){let o;S(2),Z("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),S(2),re(!r._hasOutline()&&!r._control.disabled?4:-1),S(2),re(r._hasOutline()?6:-1),S(),re(r._hasIconPrefix?7:-1),S(),re(r._hasTextPrefix?8:-1),S(2),re(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),S(2),re(r._hasTextSuffix?12:-1),S(),re(r._hasIconSuffix?13:-1),S(),re(r._hasOutline()?-1:14),S(),Z("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let s=r._getSubscriptMessageType();S(),re((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[dN,hN,vy,fN,Fl],styles:[`.mdc-text-field {
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
`],encapsulation:2})}return t})();var SN=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],wN=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function oj(t,n){t&1&&(y(0,"span",3),A(1,1),_())}function sj(t,n){t&1&&(y(0,"span",6),A(1,2),_())}function aj(t,n){t&1&&(y(0,"span",3),A(1,1),y(2,"span",7),Xn(),y(3,"svg",8),K(4,"path",9),_()()())}function cj(t,n){t&1&&(y(0,"span",6),A(1,2),_())}var lj=`.mdc-evolution-chip,
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
`;var CN=["*"],dj=`.mat-mdc-chip-set {
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
`,Q_=new b("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),W_=new b("MatChipAvatar"),yN=new b("MatChipTrailingIcon"),_N=new b("MatChipEdit"),bN=new b("MatChipRemove"),Z_=new b("MatChip"),DN=(()=>{class t{_elementRef=u(U);_parentChip=u(Z_);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){u(Ct).load(Rn),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(i,r){i&2&&(ge("disabled",r._getDisabledAttribute())("aria-disabled",r.disabled),Z("mdc-evolution-chip__action--primary",r._isPrimary)("mdc-evolution-chip__action--secondary",!r._isPrimary)("mdc-evolution-chip__action--trailing",!r._isPrimary&&!r._isLeading))},inputs:{disabled:[2,"disabled","disabled",j],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:Ri(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return t})(),xN=(()=>{class t extends DN{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(i,r){i&1&&ve("click",function(s){return r._handleClick(s)})("keydown",function(s){return r._handleKeydown(s)}),i&2&&(ge("tabindex",r._getTabindex()),Z("mdc-evolution-chip__action--presentational",!1))},features:[le]})}return t})(),Gh=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-chip-avatar"],["","matChipAvatar",""]],hostAttrs:["role","img",1,"mat-mdc-chip-avatar","mdc-evolution-chip__icon","mdc-evolution-chip__icon--primary"],features:[ye([{provide:W_,useExisting:t}])]})}return t})();var K_=(()=>{class t{_changeDetectorRef=u(Je);_elementRef=u(U);_tagName=u(KD);_ngZone=u(L);_focusMonitor=u(Gi);_globalRippleOptions=u(ds,{optional:!0});_document=u(J);_onFocus=new I;_onBlur=new I;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=Tt();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=u(pt).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new se;destroyed=new se;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=u(jh);_injector=u(me);constructor(){let e=u(Ct);e.load(Rn),e.load(xI),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=un(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(i=>{let r=i._elementRef.nativeElement;return r===e||r.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let i=e!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(i,r,o){if(i&1&&mt(o,W_,5)(o,_N,5)(o,yN,5)(o,bN,5)(o,W_,5)(o,yN,5)(o,_N,5)(o,bN,5),i&2){let s;Y(s=Q())&&(r.leadingIcon=s.first),Y(s=Q())&&(r.editIcon=s.first),Y(s=Q())&&(r.trailingIcon=s.first),Y(s=Q())&&(r.removeIcon=s.first),Y(s=Q())&&(r._allLeadingIcons=s),Y(s=Q())&&(r._allTrailingIcons=s),Y(s=Q())&&(r._allEditIcons=s),Y(s=Q())&&(r._allRemoveIcons=s)}},viewQuery:function(i,r){if(i&1&&$t(xN,5),i&2){let o;Y(o=Q())&&(r.primaryAction=o.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(i,r){i&1&&ve("keydown",function(s){return r._handleKeydown(s)}),i&2&&(sn("id",r.id),ge("role",r.role)("aria-label",r.ariaLabel),En("mat-"+(r.color||"primary")),Z("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",r.leadingIcon)("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-basic-chip",r._isBasicChip)("mat-mdc-standard-chip",!r._isBasicChip)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon())("_mat-animation-noopable",r._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",j],highlighted:[2,"highlighted","highlighted",j],disableRipple:[2,"disableRipple","disableRipple",j],disabled:[2,"disabled","disabled",j]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[ye([{provide:Z_,useExisting:t}])],ngContentSelectors:wN,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(i,r){i&1&&(Ne(SN),K(0,"span",0),y(1,"span",1)(2,"span",2),ie(3,oj,2,0,"span",3),y(4,"span",4),A(5),K(6,"span",5),_()()(),ie(7,sj,2,0,"span",6)),i&2&&(S(3),re(r.leadingIcon?3:-1),S(4),re(r._hasTrailingIcon()?7:-1))},dependencies:[DN],styles:[`.mdc-evolution-chip,
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
`],encapsulation:2})}return t})();var Pl=(()=>{class t extends K_{_defaultOptions=u(Q_,{optional:!0});chipListSelectable=!0;_chipListMultiple=!1;_chipListHideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get selectable(){return this._selectable&&this.chipListSelectable}set selectable(e){this._selectable=e,this._changeDetectorRef.markForCheck()}_selectable=!0;get selected(){return this._selected}set selected(e){this._setSelectedState(e,!1,!0)}_selected=!1;get ariaSelected(){return this.selectable?this.selected.toString():null}basicChipAttrName="mat-basic-chip-option";selectionChange=new se;ngOnInit(){super.ngOnInit(),this.role="presentation"}select(){this._setSelectedState(!0,!1,!0)}deselect(){this._setSelectedState(!1,!1,!0)}selectViaInteraction(){this._setSelectedState(!0,!0,!0)}toggleSelected(e=!1){return this._setSelectedState(!this.selected,e,!0),this.selected}_handlePrimaryActionInteraction(){this.disabled||(this.focus(),this.selectable&&this.toggleSelected(!0))}_hasLeadingGraphic(){return this.leadingIcon?!0:!this._chipListHideSingleSelectionIndicator||this._chipListMultiple}_setSelectedState(e,i,r){e!==this.selected&&(this._selected=e,r&&this.selectionChange.emit({source:this,isUserInput:i,selected:this.selected}),this._changeDetectorRef.markForCheck())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-basic-chip-option"],["","mat-basic-chip-option",""],["mat-chip-option"],["","mat-chip-option",""]],hostAttrs:[1,"mat-mdc-chip","mat-mdc-chip-option"],hostVars:37,hostBindings:function(i,r){i&2&&(sn("id",r.id),ge("tabindex",null)("aria-label",null)("aria-description",null)("role",r.role),Z("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--filter",!r._isBasicChip)("mdc-evolution-chip--selectable",!r._isBasicChip)("mat-mdc-chip-selected",r.selected)("mat-mdc-chip-multiple",r._chipListMultiple)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-chip-with-avatar",r.leadingIcon)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--selected",r.selected)("mdc-evolution-chip--selecting",!r._animationsDisabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-primary-graphic",r._hasLeadingGraphic())("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon()))},inputs:{selectable:[2,"selectable","selectable",j],selected:[2,"selected","selected",j]},outputs:{selectionChange:"selectionChange"},features:[ye([{provide:K_,useExisting:t},{provide:Z_,useExisting:t}]),le],ngContentSelectors:wN,decls:8,vars:6,consts:[[1,"mat-mdc-chip-focus-overlay"],["role","presentation",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipAction","","role","option",3,"_allowFocusWhenDisabled"],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],["role","presentation",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"],[1,"mdc-evolution-chip__checkmark"],["viewBox","-2 -3 30 30","focusable","false","aria-hidden","true",1,"mdc-evolution-chip__checkmark-svg"],["fill","none","stroke","currentColor","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-evolution-chip__checkmark-path"]],template:function(i,r){i&1&&(Ne(SN),K(0,"span",0),y(1,"span",1)(2,"button",2),ie(3,aj,5,0,"span",3),y(4,"span",4),A(5),K(6,"span",5),_()()(),ie(7,cj,2,0,"span",6)),i&2&&(S(2),V("_allowFocusWhenDisabled",!0),ge("aria-description",r.ariaDescription)("aria-label",r.ariaLabel)("aria-selected",r.ariaSelected),S(),re(r._hasLeadingGraphic()?3:-1),S(4),re(r._hasTrailingIcon()?7:-1))},dependencies:[xN],styles:[lj],encapsulation:2})}return t})();var uj=(()=>{class t{_elementRef=u(U);_changeDetectorRef=u(Je);_dir=u(li,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new I;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Dn;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(Ot(null),Xe(()=>un(...this._chips.map(e))))}_originatesFromChip(e){let i=e.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains("mat-mdc-chip"))return!0;i=i.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Ot(this._chips)).subscribe(e=>{let i=[];e.forEach(r=>r._getActions().forEach(o=>i.push(o))),this._chipActions.reset(i),this._chipActions.notifyOnChanges()}),this._keyManager=new mr(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(Be(this._destroyed)).subscribe(({chip:e})=>{let i=e._getSourceAction(document.activeElement);i&&this._keyManager.updateActiveItem(i)}),this._dir?.change.pipe(Be(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Ot(null),Be(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(Be(this._destroyed)).subscribe(e=>{let r=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),s=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),a=o||s;this._isValidIndex(r)&&a&&(this._lastDestroyedFocusedChipIndex=r)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),i=this._chips.toArray()[e];i.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():i.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-chip-set"]],contentQueries:function(i,r,o){if(i&1&&mt(o,K_,5),i&2){let s;Y(s=Q())&&(r._chips=s)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(i,r){i&1&&ve("keydown",function(s){return r._handleKeydown(s)}),i&2&&ge("role",r.role)},inputs:{disabled:[2,"disabled","disabled",j],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ri(e)]},ngContentSelectors:CN,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(i,r){i&1&&(Ne(),rt(0,"div",0),A(1),ht())},styles:[`.mat-mdc-chip-set {
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
`],encapsulation:2})}return t})(),Y_=class{source;value;constructor(n,e){this.source=n,this.value=e}},fj={provide:ns,useExisting:Nt(()=>Ll),multi:!0},Ll=(()=>{class t extends uj{_onTouched=()=>{};_onChange=()=>{};_defaultRole="listbox";_defaultOptions=u(Q_,{optional:!0});get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._syncListboxProperties()}_multiple=!1;get selected(){let e=this._chips.toArray().filter(i=>i.selected);return this.multiple?e:e[0]}ariaOrientation="horizontal";get selectable(){return this._selectable}set selectable(e){this._selectable=e,this._syncListboxProperties()}_selectable=!0;compareWith=(e,i)=>e===i;required=!1;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncListboxProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get chipSelectionChanges(){return this._getChipStream(e=>e.selectionChange)}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}get value(){return this._value}set value(e){this._chips&&this._chips.length&&this._setSelectionByValue(e,!1),this._value=e}_value;change=new se;_chips=void 0;ngAfterContentInit(){this._chips.changes.pipe(Ot(null),Be(this._destroyed)).subscribe(()=>{this.value!==void 0&&Promise.resolve().then(()=>{this._setSelectionByValue(this.value,!1)}),this._syncListboxProperties()}),this.chipBlurChanges.pipe(Be(this._destroyed)).subscribe(()=>this._blur()),this.chipSelectionChanges.pipe(Be(this._destroyed)).subscribe(e=>{this.multiple||this._chips.forEach(i=>{i!==e.source&&i._setSelectedState(!1,!1,!1)}),e.isUserInput&&this._propagateChanges()})}focus(){if(this.disabled)return;let e=this._getFirstSelectedChip();e&&!e.disabled?e.focus():this._chips.length>0?this._keyManager.setFirstItemActive():this._elementRef.nativeElement.focus()}writeValue(e){e!=null?this.value=e:this.value=void 0}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_setSelectionByValue(e,i=!0){this._clearSelection(),Array.isArray(e)?e.forEach(r=>this._selectValue(r,i)):this._selectValue(e,i)}_blur(){this.disabled||setTimeout(()=>{this.focused||this._markAsTouched()})}_keydown(e){e.keyCode===9&&super._allowFocusEscape()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck()}_propagateChanges(){let e=null;Array.isArray(this.selected)?e=this.selected.map(i=>i.value):e=this.selected?this.selected.value:void 0,this._value=e,this.change.emit(new Y_(this,e)),this._onChange(e),this._changeDetectorRef.markForCheck()}_clearSelection(e){this._chips.forEach(i=>{i!==e&&i.deselect()})}_selectValue(e,i){let r=this._chips.find(o=>o.value!=null&&this.compareWith(o.value,e));return r&&(i?r.selectViaInteraction():r.select()),r}_syncListboxProperties(){this._chips&&Promise.resolve().then(()=>{this._chips.forEach(e=>{e._chipListMultiple=this.multiple,e.chipListSelectable=this._selectable,e._chipListHideSingleSelectionIndicator=this.hideSingleSelectionIndicator,e._changeDetectorRef.markForCheck()})})}_getFirstSelectedChip(){return Array.isArray(this.selected)?this.selected.length?this.selected[0]:void 0:this.selected}_skipPredicate(e){return!1}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-chip-listbox"]],contentQueries:function(i,r,o){if(i&1&&mt(o,Pl,5),i&2){let s;Y(s=Q())&&(r._chips=s)}},hostAttrs:[1,"mdc-evolution-chip-set","mat-mdc-chip-listbox"],hostVars:10,hostBindings:function(i,r){i&1&&ve("focus",function(){return r.focus()})("blur",function(){return r._blur()})("keydown",function(s){return r._keydown(s)}),i&2&&(sn("tabIndex",r.disabled||r.empty?-1:r.tabIndex),ge("role",r.role)("aria-required",r.role?r.required:null)("aria-disabled",r.disabled.toString())("aria-multiselectable",r.multiple)("aria-orientation",r.ariaOrientation),Z("mat-mdc-chip-list-disabled",r.disabled)("mat-mdc-chip-list-required",r.required))},inputs:{multiple:[2,"multiple","multiple",j],ariaOrientation:[0,"aria-orientation","ariaOrientation"],selectable:[2,"selectable","selectable",j],compareWith:"compareWith",required:[2,"required","required",j],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",j],value:"value"},outputs:{change:"change"},features:[ye([fj]),le],ngContentSelectors:CN,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(i,r){i&1&&(Ne(),rt(0,"div",0),A(1),ht())},styles:[dj],encapsulation:2})}return t})();var EN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({providers:[Uh,{provide:Q_,useValue:{separatorKeyCodes:[13]}}],imports:[eo,Te]})}return t})();var vr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({imports:[Nh,so,Te]})}return t})();var hj=new b("MAT_BUTTON_CONFIG");function NN(t){return t==null?void 0:Ri(t)}var J_=(()=>{class t{_elementRef=u(U);_ngZone=u(L);_animationsDisabled=Tt();_config=u(hj,{optional:!0});_focusMonitor=u(Gi);_cleanupClick;_renderer=u(ze);_rippleLoader=u(jh);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=Xt(!1,{transform:j});constructor(){u(Ct).load(Rn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(i,r){i&2&&(ge("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),En(r.color?"mat-"+r.color:""),Z("mat-mdc-button-progress-indicator-shown",r.showProgress())("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",j],disabled:[2,"disabled","disabled",j],ariaDisabled:[2,"aria-disabled","ariaDisabled",j],disabledInteractive:[2,"disabledInteractive","disabledInteractive",j],tabIndex:[2,"tabIndex","tabIndex",NN],_tabindex:[2,"tabindex","_tabindex",NN],showProgress:[1,"showProgress"]}})}return t})();var TN=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],kN=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function mj(t,n){t&1&&(rt(0,"div",2),A(1,3),ht())}function pj(t,n){t&1&&(rt(0,"div",2),A(1,3),ht())}var gj=`.mat-mdc-fab-base {
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
`,MN=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ra=(()=>{class t extends J_{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=vj(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?MN.get(this._appearance):null,o=MN.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[le],ngContentSelectors:kN,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Ne(TN),mn(0,"span",0),A(1),rt(2,"span",1),A(3,1),ht(),A(4,2),ie(5,mj,2,0,"div",2),mn(6,"span",3)(7,"span",4)),i&2&&(Z("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),S(5),re(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2})}return t})();function vj(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var yj=new b("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>eb}),eb={color:"accent"};var qh=(()=>{class t extends J_{_options=u(yj,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||eb,this.color=this._options.color||eb.color}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["button","mat-mini-fab",""],["a","mat-mini-fab",""],["button","matMiniFab",""],["a","matMiniFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mdc-fab--mini","mat-mdc-mini-fab"],exportAs:["matButton","matAnchor"],features:[le],ngContentSelectors:kN,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Ne(TN),mn(0,"span",0),A(1),rt(2,"span",1),A(3,1),ht(),A(4,2),ie(5,pj,2,0,"div",2),mn(6,"span",3)(7,"span",4)),i&2&&(Z("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),S(5),re(r.showProgress()?5:-1))},styles:[gj],encapsulation:2})}return t})();var Wh=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({imports:[eo,Te]})}return t})();var _j=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return t})(),bj={passive:!0},RN=(()=>{class t{_platform=u(Ge);_ngZone=u(L);_renderer=u(ft).createRenderer(null,null);_styleLoader=u(Ct);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return at;this._styleLoader.load(_j);let i=cn(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new I,s="cdk-text-field-autofilled",a=l=>{l.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(s)?(i.classList.add(s),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!0}))):l.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(s)&&(i.classList.remove(s),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",a,bj)));return this._monitoredElements.set(i,{subject:o,unlisten:c}),o}stopMonitoring(e){let i=cn(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var AN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({})}return t})();var ON=new b("MAT_INPUT_VALUE_ACCESSOR");var Sj=["button","checkbox","file","hidden","image","radio","range","reset","submit"],wj=new b("MAT_INPUT_CONFIG"),Aa=(()=>{class t{_elementRef=u(U);_platform=u(Ge);ngControl=u(hr,{optional:!0,self:!0});_autofillMonitor=u(RN);_ngZone=u(L);_formField=u(q_,{optional:!0});_renderer=u(ze);_uid=u(pt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(wj,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new I;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=ln(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(an.required)??!1}set required(e){this._required=ln(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&R_().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=ln(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>R_().has(e));constructor(){let e=u(Dh,{optional:!0}),i=u(Hi,{optional:!0}),r=u(Uh),o=u(ON,{optional:!0,self:!0}),s=u(rN,{optional:!0,self:!0}),a=this._elementRef.nativeElement,c=a.nodeName.toLowerCase();o?Jn(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Hh(r,s||this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=c==="select",this._isTextarea=c==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Yt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Sj.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&ve("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(sn("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),ge("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),Z("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",j]},exportAs:["matInput"],features:[ye([{provide:G_,useExisting:t}]),Qe]})}return t})(),Oa=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({imports:[vr,vr,AN,Te]})}return t})();var Cj=20,Yh=(()=>{class t{_ngZone=u(L);_platform=u(Ge);_renderer=u(ft).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new I;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Cj){return this._platform.isBrowser?new ne(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Ms(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):W()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Me(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._targetContainsElement(o,e)&&i.push(o)}),i}_targetContainsElement(e,i){let r=cn(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var Dj=20,ao=(()=>{class t{_platform=u(Ge);_listeners;_viewportSize=null;_change=new I;_document=u(J);constructor(){let e=u(L),i=u(ft).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,a=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:s,left:a}}change(e=Dj){return e>0?this._change.pipe(Ms(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var FN=new b("CDK_VIRTUAL_SCROLL_VIEWPORT");var Kh=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({})}return t})(),Vl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({imports:[Te,Kh,Te,Kh]})}return t})();var xj=[[["caption"]],[["colgroup"],["col"]],"*"],Ej=["caption","colgroup, col","*"];function Ij(t,n){t&1&&A(0,2)}function Nj(t,n){t&1&&(y(0,"thead",0),Zt(1,1),_(),y(2,"tbody",0),Zt(3,2)(4,3),_(),y(5,"tfoot",0),Zt(6,4),_())}function Mj(t,n){t&1&&Zt(0,1)(1,2)(2,3)(3,4)}var di=new b("CDK_TABLE");var Xh=(()=>{class t{template=u(bt);static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","cdkCellDef",""]]})}return t})(),Jh=(()=>{class t{template=u(bt);static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","cdkHeaderCellDef",""]]})}return t})(),VN=(()=>{class t{template=u(bt);static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","cdkFooterCellDef",""]]})}return t})(),Fa=(()=>{class t{_table=u(di,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","cdkColumnDef",""]],contentQueries:function(i,r,o){if(i&1&&mt(o,Xh,5)(o,Jh,5)(o,VN,5),i&2){let s;Y(s=Q())&&(r.cell=s.first),Y(s=Q())&&(r.headerCell=s.first),Y(s=Q())&&(r.footerCell=s.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",j],stickyEnd:[2,"stickyEnd","stickyEnd",j]}})}return t})(),Zh=class{constructor(n,e){e.nativeElement.classList.add(...n._columnCssClassName)}},jN=(()=>{class t extends Zh{constructor(){super(u(Fa),u(U))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[le]})}return t})();var UN=(()=>{class t extends Zh{constructor(){let e=u(Fa),i=u(U);super(e,i);let r=e._table?._getCellRole();r&&i.nativeElement.setAttribute("role",r)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[le]})}return t})();var ib=(()=>{class t{template=u(bt);_differs=u(Yo);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let i=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(i).create(),this._columnsDiffer.diff(i)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof Ul?e.headerCell.template:this instanceof rb?e.footerCell.template:e.cell.template}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,features:[Qe]})}return t})(),Ul=(()=>{class t extends ib{_table=u(di,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",j]},features:[le,Qe]})}return t})(),rb=(()=>{class t extends ib{_table=u(di,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",j]},features:[le,Qe]})}return t})(),em=(()=>{class t extends ib{_table=u(di,{optional:!0});when;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[le]})}return t})(),us=(()=>{class t{_viewContainer=u(it);cells;context;static mostRecentCellOutlet=null;constructor(){t.mostRecentCellOutlet=this}ngOnDestroy(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","cdkCellOutlet",""]]})}return t})(),ob=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&Zt(0,0)},dependencies:[us],encapsulation:2,changeDetection:1})}return t})();var sb=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&Zt(0,0)},dependencies:[us],encapsulation:2,changeDetection:1})}return t})(),HN=(()=>{class t{templateRef=u(bt);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["ng-template","cdkNoDataRow",""]]})}return t})(),PN=["top","bottom","left","right"],nb=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(n=>this._updateCachedSizes(n)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(n,e,i=!0,r=!0,o,s,a){this._isNativeHtmlTable=n,this._stickCellCss=e,this._isBrowser=i,this._needsPositionStickyOnElement=r,this.direction=o,this._positionListener=s,this._tableInjector=a,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(n,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(n);let i=[];for(let r of n)r.nodeType===r.ELEMENT_NODE&&i.push(r,...Array.from(r.children));jt({write:()=>{for(let r of i)this._removeStickyStyle(r,e)}},{injector:this._tableInjector})}updateStickyColumns(n,e,i,r=!0,o=!0){if(!n.length||!this._isBrowser||!(e.some(E=>E)||i.some(E=>E))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let s=n[0],a=s.children.length,c=this.direction==="rtl",l=c?"right":"left",d=c?"left":"right",f=e.lastIndexOf(!0),h=i.indexOf(!0),m,p,C;o&&this._updateStickyColumnReplayQueue({rows:[...n],stickyStartStates:[...e],stickyEndStates:[...i]}),jt({earlyRead:()=>{m=this._getCellWidths(s,r),p=this._getStickyStartColumnPositions(m,e),C=this._getStickyEndColumnPositions(m,i)},write:()=>{for(let E of n)for(let N=0;N<a;N++){let R=E.children[N];e[N]&&this._addStickyStyle(R,l,p[N],N===f),i[N]&&this._addStickyStyle(R,d,C[N],N===h)}this._positionListener&&m.some(E=>!!E)&&(this._positionListener.stickyColumnsUpdated({sizes:f===-1?[]:m.slice(0,f+1).map((E,N)=>e[N]?E:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:h===-1?[]:m.slice(h).map((E,N)=>i[N+h]?E:null).reverse()}))}},{injector:this._tableInjector})}stickRows(n,e,i){if(!this._isBrowser)return;let r=i==="bottom"?n.slice().reverse():n,o=i==="bottom"?e.slice().reverse():e,s=[],a=[],c=[];jt({earlyRead:()=>{for(let l=0,d=0;l<r.length;l++){if(!o[l])continue;s[l]=d;let f=r[l];c[l]=this._isNativeHtmlTable?Array.from(f.children):[f];let h=this._retrieveElementSize(f).height;d+=h,a[l]=h}},write:()=>{let l=o.lastIndexOf(!0);for(let d=0;d<r.length;d++){if(!o[d])continue;let f=s[d],h=d===l;for(let m of c[d])this._addStickyStyle(m,i,f,h)}i==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:a,offsets:s,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:a,offsets:s,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(n,e){this._isNativeHtmlTable&&jt({write:()=>{let i=n.querySelector("tfoot");i&&(e.some(r=>!r)?this._removeStickyStyle(i,["bottom"]):this._addStickyStyle(i,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(n,e){if(!n.classList.contains(this._stickCellCss))return;for(let r of e)n.style[r]="",n.classList.remove(this._borderCellCss[r]);PN.some(r=>e.indexOf(r)===-1&&n.style[r])?n.style.zIndex=this._getCalculatedZIndex(n):(n.style.zIndex="",this._needsPositionStickyOnElement&&(n.style.position=""),n.classList.remove(this._stickCellCss))}_addStickyStyle(n,e,i,r){n.classList.add(this._stickCellCss),r&&n.classList.add(this._borderCellCss[e]),n.style[e]=`${i}px`,n.style.zIndex=this._getCalculatedZIndex(n),this._needsPositionStickyOnElement&&(n.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(n){let e={top:100,bottom:10,left:1,right:1},i=0;for(let r of PN)n.style[r]&&(i+=e[r]);return i?`${i}`:""}_getCellWidths(n,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let i=[],r=n.children;for(let o=0;o<r.length;o++){let s=r[o];i.push(this._retrieveElementSize(s).width)}return this._cachedCellWidths=i,i}_getStickyStartColumnPositions(n,e){let i=[],r=0;for(let o=0;o<n.length;o++)e[o]&&(i[o]=r,r+=n[o]);return i}_getStickyEndColumnPositions(n,e){let i=[],r=0;for(let o=n.length;o>0;o--)e[o]&&(i[o]=r,r+=n[o]);return i}_retrieveElementSize(n){let e=this._elemSizeCache.get(n);if(e)return e;let i=n.getBoundingClientRect(),r={width:i.width,height:i.height};return this._resizeObserver&&(this._elemSizeCache.set(n,r),this._resizeObserver.observe(n,{box:"border-box"})),r}_updateStickyColumnReplayQueue(n){this._removeFromStickyColumnReplayQueue(n.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(n)}_removeFromStickyColumnReplayQueue(n){let e=new Set(n);for(let i of this._updatedStickyColumnsParamsToReplay)i.rows=i.rows.filter(r=>!e.has(r));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(i=>!!i.rows.length)}_updateCachedSizes(n){let e=!1;for(let i of n){let r=i.borderBoxSize?.length?{width:i.borderBoxSize[0].inlineSize,height:i.borderBoxSize[0].blockSize}:{width:i.contentRect.width,height:i.contentRect.height};r.width!==this._elemSizeCache.get(i.target)?.width&&Tj(i.target)&&(e=!0),this._elemSizeCache.set(i.target,r)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let i of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(i.rows,i.stickyStartStates,i.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Tj(t){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(n=>t.classList.contains(n))}function LN(t){return Error(`Could not find column with id "${t}".`)}var jl=new b("STICKY_POSITIONING_LISTENER");var ab=(()=>{class t{viewContainer=u(it);elementRef=u(U);constructor(){let e=u(di);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","rowOutlet",""]]})}return t})(),cb=(()=>{class t{viewContainer=u(it);elementRef=u(U);constructor(){let e=u(di);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","headerRowOutlet",""]]})}return t})(),lb=(()=>{class t{viewContainer=u(it);elementRef=u(U);constructor(){let e=u(di);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","footerRowOutlet",""]]})}return t})(),db=(()=>{class t{viewContainer=u(it);elementRef=u(U);constructor(){let e=u(di);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","noDataRowOutlet",""]]})}return t})(),ub=(()=>{class t{_differs=u(Yo);_changeDetectorRef=u(Je);_elementRef=u(U);_dir=u(li,{optional:!0});_platform=u(Ge);_viewRepeater;_viewportRuler=u(ao);_injector=u(me);_virtualScrollViewport=u(FN,{optional:!0,host:!0});_positionListener=u(jl,{optional:!0})||u(jl,{optional:!0,skipSelf:!0});_document=u(J);_data;_renderedRange;_onDestroy=new I;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new I;_footerRowStickyUpdates=new I;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new I;_dataStream=new I;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new se;viewChange=new vt({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){u(new Un("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((i,r)=>this.trackBy?this.trackBy(r.dataIndex,r.data):r)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(Be(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Ah:new Oh,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Rh(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let i=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,i,(r,o,s)=>this._getEmbeddedViewArgs(r.item,s),r=>r.item.data,r=>{r.operation===ci.INSERTED&&r.context&&this._renderCellTemplateForItem(r.record.item.rowDef,r.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);o.context.$implicit=r.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let r=BN(this._headerRowOutlet,"thead");r&&(r.style.display=e.length?"":"none")}let i=this._headerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,i,"top"),this._headerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let r=BN(this._footerRowOutlet,"tfoot");r&&(r.style.display=e.length?"":"none")}let i=this._footerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,i,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,i),this._footerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),i=this._getRenderedRows(this._rowOutlet),r=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...i,...r],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,s)=>{this._addStickyColumnStyles([o],this._headerRowDefs[s])}),this._rowDefs.forEach(o=>{let s=[];for(let a=0;a<i.length;a++)this._renderRows[a].rowDef===o&&s.push(i[a]);this._addStickyColumnStyles(s,o)}),r.forEach((o,s)=>{this._addStickyColumnStyles([o],this._footerRowDefs[s])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let i=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||i,this._forceRecalculateCellWidths=i,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],i=Math.min(this._data.length,this._renderedRange.end),r=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<i;o++){let s=this._data[o],a=this._getRenderRowsForData(s,o,r.get(s));this._cachedRenderRowsMap.has(s)||this._cachedRenderRowsMap.set(s,new WeakMap);for(let c=0;c<a.length;c++){let l=a[c],d=this._cachedRenderRowsMap.get(l.data);d.has(l.rowDef)?d.get(l.rowDef).push(l):d.set(l.rowDef,[l]),e.push(l)}}return e}_getRenderRowsForData(e,i,r){return this._getRowDefs(e,i).map(s=>{let a=r&&r.has(s)?r.get(s):[];if(a.length){let c=a.shift();return c.dataIndex=i,c}else return{data:e,rowDef:s,dataIndex:i}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Qh(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(i=>{this._columnDefsByName.has(i.name),this._columnDefsByName.set(i.name,i)})}_cacheRowDefs(){this._headerRowDefs=Qh(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Qh(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Qh(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(i=>!i.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(s,a)=>{let c=!!a.getColumnsDiff();return s||c},i=this._rowDefs.reduce(e,!1);i&&this._forceRenderDataRows();let r=this._headerRowDefs.reduce(e,!1);r&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),i||r||o}_switchDataSource(e){this._data=[],Rh(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Rh(this.dataSource)?e=this.dataSource.connect(this):wo(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=W(this.dataSource)),this._renderChangeSubscription=Nr([e,this.viewChange]).pipe(Be(this._onDestroy)).subscribe(([i,r])=>{this._data=i||[],this._renderedRange=r,this._dataStream.next(i),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,i)=>this._renderRow(this._headerRowOutlet,e,i)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,i)=>this._renderRow(this._footerRowOutlet,e,i)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,i){let r=Array.from(i?.columns||[]).map(a=>{let c=this._columnDefsByName.get(a);if(!c)throw LN(a);return c}),o=r.map(a=>a.sticky),s=r.map(a=>a.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,s,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let i=[];for(let r=0;r<e.viewContainer.length;r++){let o=e.viewContainer.get(r);i.push(o.rootNodes[0])}return i}_getRowDefs(e,i){if(this._rowDefs.length===1)return[this._rowDefs[0]];let r=[];if(this.multiTemplateDataRows)r=this._rowDefs.filter(o=>!o.when||o.when(i,e));else{let o=this._rowDefs.find(s=>s.when&&s.when(i,e))||this._defaultRowDef;o&&r.push(o)}return r.length,r}_getEmbeddedViewArgs(e,i){let r=e.rowDef,o={$implicit:e.data};return{templateRef:r.template,context:o,index:i}}_renderRow(e,i,r,o={}){let s=e.viewContainer.createEmbeddedView(i.template,o,r);return this._renderCellTemplateForItem(i,o),s}_renderCellTemplateForItem(e,i){for(let r of this._getCellTemplates(e))us.mostRecentCellOutlet&&us.mostRecentCellOutlet._viewContainer.createEmbeddedView(r,i);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let i=0,r=e.length;i<r;i++){let s=e.get(i).context;s.count=r,s.first=i===0,s.last=i===r-1,s.even=i%2===0,s.odd=!s.even,this.multiTemplateDataRows?(s.dataIndex=this._renderRows[i].dataIndex,s.renderIndex=i):s.index=this._renderRows[i].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,i=>{let r=this._columnDefsByName.get(i);if(!r)throw LN(i);return e.extractCellTemplate(r)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(i,r)=>i||r.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",i=this._injector;this._stickyStyler=new nb(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,i),(this._dir?this._dir.change:W()).pipe(Be(this._onDestroy)).subscribe(r=>{this._stickyStyler.direction=r,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let i=typeof requestAnimationFrame<"u"?_d:gd;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Ms(0,i),Be(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(r,o)=>this._measureRangeSize(r,o)}),Nr([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(Be(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let s=0;s<o.elements.length;s++){let a=o.elements[s];if(a){let c=o.offsets[s],l=r!==0?Math.max(r-c,c):-c;for(let d of a)d.style.top=`${-l}px`}}}),Nr([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(Be(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let s=0;s<o.elements.length;s++){let a=o.elements[s];if(a)for(let c of a)c.style.bottom=`${r+o.offsets[s]}px`}})}_getOwnDefs(e){return e.filter(i=>!i._table||i._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let i=this._rowOutlet.viewContainer.length===0;if(i===this._isShowingNoDataRow)return;let r=this._noDataRowOutlet.viewContainer;if(i){let o=r.createEmbeddedView(e.templateRef),s=o.rootNodes[0];if(o.rootNodes.length===1&&s?.nodeType===this._document.ELEMENT_NODE){s.setAttribute("role","row"),s.classList.add(...e._contentClassNames);let a=s.querySelectorAll(e._cellSelector);for(let c=0;c<a.length;c++)a[c].classList.add(...e._cellClassNames)}}else r.clear();this._isShowingNoDataRow=i,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,i){if(e.start>=e.end||i!=="vertical")return 0;let r=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<r.start||e.end>r.end;let s=e.start-r.start,a=e.end-e.start,c,l;for(let h=0;h<a;h++){let m=o.get(h+s);if(m&&m.rootNodes.length){c=l=m.rootNodes[0];break}}for(let h=a-1;h>-1;h--){let m=o.get(h+s);if(m&&m.rootNodes.length){l=m.rootNodes[m.rootNodes.length-1];break}}let d=c?.getBoundingClientRect?.(),f=l?.getBoundingClientRect?.();return d&&f?f.bottom-d.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(i,r,o){if(i&1&&mt(o,HN,5)(o,Fa,5)(o,em,5)(o,Ul,5)(o,rb,5),i&2){let s;Y(s=Q())&&(r._noDataRow=s.first),Y(s=Q())&&(r._contentColumnDefs=s),Y(s=Q())&&(r._contentRowDefs=s),Y(s=Q())&&(r._contentHeaderRowDefs=s),Y(s=Q())&&(r._contentFooterRowDefs=s)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(i,r){i&2&&Z("cdk-table-fixed-layout",r.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",j],fixedLayout:[2,"fixedLayout","fixedLayout",j],recycleRows:[2,"recycleRows","recycleRows",j]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[ye([{provide:di,useExisting:t},{provide:jl,useValue:null}])],ngContentSelectors:Ej,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(Ne(xj),A(0),A(1,1),ie(2,Ij,1,0),ie(3,Nj,7,0)(4,Mj,4,0)),i&2&&(S(2),re(r._isServer?2:-1),S(),re(r._isNativeHtmlTable?3:4))},dependencies:[cb,ab,db,lb],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return t})();function Qh(t,n){return t.concat(Array.from(n))}function BN(t,n){let e=n.toUpperCase(),i=t.viewContainer.element.nativeElement;for(;i;){let r=i.nodeType===1?i.nodeName:null;if(r===e)return i;if(r==="TABLE")break;i=i.parentNode}return null}var zN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({imports:[Vl]})}return t})();var kj=[[["caption"]],[["colgroup"],["col"]],"*"],Rj=["caption","colgroup, col","*"];function Aj(t,n){t&1&&A(0,2)}function Oj(t,n){t&1&&(y(0,"thead",0),Zt(1,1),_(),y(2,"tbody",2),Zt(3,3)(4,4),_(),y(5,"tfoot",0),Zt(6,5),_())}function Fj(t,n){t&1&&Zt(0,1)(1,3)(2,4)(3,5)}var $N=(()=>{class t extends ub{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(i,r){i&2&&Z("mat-table-fixed-layout",r.fixedLayout)},exportAs:["matTable"],features:[ye([{provide:ub,useExisting:t},{provide:di,useExisting:t},{provide:jl,useValue:null}]),le],ngContentSelectors:Rj,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(Ne(kj),A(0),A(1,1),ie(2,Aj,1,0),ie(3,Oj,7,0)(4,Fj,4,0)),i&2&&(S(2),re(r._isServer?2:-1),S(),re(r._isNativeHtmlTable?3:4))},dependencies:[cb,ab,db,lb],styles:[`.mat-mdc-table-sticky {
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
`],encapsulation:2,changeDetection:1})}return t})(),GN=(()=>{class t extends Xh{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matCellDef",""]],features:[ye([{provide:Xh,useExisting:t}]),le]})}return t})(),qN=(()=>{class t extends Jh{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matHeaderCellDef",""]],features:[ye([{provide:Jh,useExisting:t}]),le]})}return t})();var WN=(()=>{class t extends Fa{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[ye([{provide:Fa,useExisting:t}]),le]})}return t})(),KN=(()=>{class t extends jN{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[le]})}return t})();var YN=(()=>{class t extends UN{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[le]})}return t})();var QN=(()=>{class t extends Ul{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",j]},features:[ye([{provide:Ul,useExisting:t}]),le]})}return t})();var ZN=(()=>{class t extends em{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[ye([{provide:em,useExisting:t}]),le]})}return t})(),XN=(()=>{class t extends ob{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[ye([{provide:ob,useExisting:t}]),le],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&Zt(0,0)},dependencies:[us],encapsulation:2,changeDetection:1})}return t})();var JN=(()=>{class t extends sb{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[ye([{provide:sb,useExisting:t}]),le],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&Zt(0,0)},dependencies:[us],encapsulation:2,changeDetection:1})}return t})();var eM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({imports:[zN,Te]})}return t})();function Lj(t,n){if(t&1){let e=zt();y(0,"mat-card",3)(1,"mat-card-header")(2,"mat-card-title"),M(3,"Add Players"),_()(),y(4,"mat-card-content")(5,"form",15)(6,"mat-form-field")(7,"mat-label"),M(8,"Player Name"),_(),K(9,"input",16,1),Ni(),_(),y(11,"button",17),ve("click",function(){lt(e);let r=jn(10),o=O();return dt(o.addPlayer(r))}),y(12,"mat-icon"),M(13,"add"),_()()()()()}if(t&2){let e=O();S(5),V("formGroup",e.playerForm),S(4),Mi()}}function Bj(t,n){t&1&&(y(0,"th",18),M(1," Name "),_())}function Vj(t,n){if(t&1&&(y(0,"td",19),M(1),_()),t&2){let e=n.$implicit;S(),St(" ",e.name," ")}}function jj(t,n){t&1&&(y(0,"th",18),M(1," Faction "),_())}function Uj(t,n){if(t&1&&K(0,"img",21),t&2){let e=O().$implicit,i=O();V("src",i.factionIcon(e.faction),Bn)("alt",e.faction.name)("title",e.faction.name)}}function Hj(t,n){if(t&1&&(y(0,"td",19),Fe(1,Uj,1,3,"img",20),_()),t&2){let e=n.$implicit;S(),V("ngIf",e.faction)}}function zj(t,n){t&1&&(y(0,"th",18),M(1," Position "),_())}function $j(t,n){if(t&1&&(y(0,"td",19),M(1),_()),t&2){let e=n.$implicit;S(),St(" ",e.position," ")}}function Gj(t,n){t&1&&(y(0,"th",18),M(1," Slice "),_())}function qj(t,n){t&1&&(y(0,"mat-icon",23),M(1,"done"),_())}function Wj(t,n){if(t&1&&(y(0,"td",19),Fe(1,qj,2,0,"mat-icon",22),_()),t&2){let e=n.$implicit;S(),V("ngIf",e?.slice)}}function Kj(t,n){t&1&&K(0,"tr",24)}function Yj(t,n){t&1&&K(0,"tr",25)}function Qj(t,n){if(t&1&&(y(0,"h2"),M(1),_()),t&2){let e=O();S(),St("It\xB4s time for ",e.players()[e.currentPosition()].name," to draft")}}function Zj(t,n){if(t&1&&K(0,"span",31),t&2){let e=n.$implicit;Z("outline",e)}}function Xj(t,n){if(t&1){let e=zt();y(0,"mat-chip-option",28),ve("click",function(){let r=lt(e).index,o=O(2);return dt(o.draftFaction(r))}),y(1,"mat-chip-avatar"),K(2,"img",21),_(),y(3,"span"),M(4),_(),y(5,"span",29),Fe(6,Zj,1,2,"span",30),_()()}if(t&2){let e=n.$implicit,i=O(2);S(2),V("src",i.factionIcon(e),Bn)("alt",e.name)("title",e.name),S(2),Pt(e.name),S(),Z("complexity-low",e.complexity===i.complexity.Low)("complexity-moderate",e.complexity===i.complexity.Moderate)("complexity-high",e.complexity===i.complexity.High),V("title",i.complexityLabel(e.complexity)),ge("aria-label",i.complexityLabel(e.complexity)),S(),V("ngForOf",i.complexityBars(e.complexity))}}function Jj(t,n){if(t&1&&(y(0,"mat-card",3)(1,"mat-card-header")(2,"mat-card-title"),M(3,"Faction to draft"),_()(),y(4,"mat-card-content")(5,"mat-chip-listbox",26),Fe(6,Xj,7,13,"mat-chip-option",27),_()()()),t&2){let e=O();S(6),V("ngForOf",e.draftFactions())}}function eU(t,n){if(t&1){let e=zt();y(0,"mat-chip-option",28),ve("click",function(){let r=lt(e).index,o=O(2);return dt(o.draftPosition(r))}),y(1,"span"),M(2),_()()}if(t&2){let e=n.$implicit;S(2),Pt(e)}}function tU(t,n){if(t&1&&(y(0,"mat-card",3)(1,"mat-card-header")(2,"mat-card-title"),M(3,"Position to draft"),_()(),y(4,"mat-card-content")(5,"mat-chip-listbox",26),Fe(6,eU,3,1,"mat-chip-option",27),_()()()),t&2){let e=O();S(6),V("ngForOf",e.positions())}}function nU(t,n){if(t&1){let e=zt();y(0,"mat-chip-option",28),ve("click",function(){let r=lt(e).index,o=O(2);return dt(o.draftSlice(r))}),y(1,"span"),M(2,"Slice"),_()()}}function iU(t,n){if(t&1&&(y(0,"mat-card",3)(1,"mat-card-header")(2,"mat-card-title"),M(3,"Slices to draft"),_()(),y(4,"mat-card-content")(5,"mat-chip-listbox",26),Fe(6,nU,3,0,"mat-chip-option",27),_()()()),t&2){let e=O();S(6),V("ngForOf",e.slices())}}var tM=(()=>{class t{constructor(){this.settingsService=u(zi),this.factionIconNames={1:"Arborec.png",2:"Letnev.png",3:"Saar.png",4:"Muaat.png",5:"Hacan.png",6:"Sol.png",7:"Creuss.png",8:"L1Z1X.png",9:"Mentak.png",10:"Naalu.png",11:"Nekro.png",12:"Sardakk.png",13:"Jol Nar.png",14:"Winnu.png",15:"Xxcha.png",16:"Yin.png",17:"Yssaril.png",18:"Argent.png",19:"Empyrean.png",20:"Mahact.png",21:"Naaz-Rokha.png",22:"Nomad.png",23:"Titans.png",24:"Vuil'Raith.png"},this.complexity=Pe,this.displayedColumns=["name","faction","position","slice"],this.factions=$e(()=>$i.factions.filter(e=>this.settingsService.settings().editions.includes(e.edition))),this.draftFactions=G([]),this.players=G([]),this.positions=G([]),this.slices=G([]),this.currentPosition=G(0),this.incomplete=$e(()=>this.players().some(e=>!e.position||!e.faction||!e.slice)),this.increment=1,this.playerForm=new ji({name:new Ui(null,an.required)})}ngOnDestroy(){this.players.set([]),this.draftFactions.set([]),this.playerForm.reset()}addPlayer(e){if(this.playerForm.valid){let i=this.playerForm.get("name")?.value;this.playerForm.reset(),this.players.update(r=>[...r,{name:i}]),e.focus()}}shuffle(e){this.draftFactions.set(this.shuffleFisherYates([...this.factions()]).slice(0,this.players().length+this.settingsService.settings().additionalFactions)),this.players.set(this.shuffleFisherYates([...this.players()])),this.positions.set(this.players().map((i,r)=>this.formatter(r+1))),this.slices.set(this.players().map(()=>!0)),e.disabled=!0}shuffleFisherYates(e){let i=e.length;for(;i--;){let r=Math.floor(Math.random()*(i+1));[e[i],e[r]]=[e[r],e[i]]}return e}formatter(e){switch(e){case 1:return"Speaker";case 2:return e+"nd";case 3:return e+"rd";default:return e+"th"}}complexityLabel(e){return Pe[e]}complexityBars(e){switch(e){case Pe.Low:return[!1,!0,!0];case Pe.Moderate:return[!1,!1,!0];case Pe.High:return[!1,!1,!1]}}factionIcon(e){return`assets/factions/${this.factionIconNames[Number(e.id)]}`}draftPosition(e){this.players.update(i=>i.map((r,o)=>o===this.currentPosition()?X(w({},r),{position:this.positions()[e]}):r)),this.positions.update(i=>i.filter((r,o)=>o!==e)),this.progressCounter()}draftSlice(e){this.players.update(i=>i.map((r,o)=>o===this.currentPosition()?X(w({},r),{slice:this.slices()[e]}):r)),this.slices.update(i=>i.filter((r,o)=>o!==e)),this.progressCounter()}draftFaction(e){this.players.update(i=>i.map((r,o)=>o===this.currentPosition()?X(w({},r),{faction:this.draftFactions()[e]}):r)),this.draftFactions.update(i=>i.filter((r,o)=>o!==e)),this.progressCounter()}progressCounter(){this.currentPosition.update(e=>e+this.increment),this.currentPosition()===-1?(this.currentPosition.set(0),this.increment*=-1):this.currentPosition()===this.players().length&&(this.currentPosition.set(this.players().length-1),this.increment*=-1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=k({type:t,selectors:[["app-draft"]],standalone:!1,decls:32,vars:8,consts:[["shuffleButton",""],["nameInput",""],["appearance","outlined",4,"ngIf"],["appearance","outlined"],["mat-table","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","faction"],["matColumnDef","position"],["matColumnDef","slice"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["type","button","mat-mini-fab","",3,"click"],[4,"ngIf"],[3,"formGroup"],["formControlName","name","matInput",""],["type","submit","mat-mini-fab","",3,"click"],["mat-header-cell",""],["mat-cell",""],["class","faction-icon",3,"src","alt","title",4,"ngIf"],[1,"faction-icon",3,"src","alt","title"],["aria-hidden","false",4,"ngIf"],["aria-hidden","false"],["mat-header-row",""],["mat-row",""],[1,"mat-mdc-chip-set-stacked"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"faction-complexity",3,"title"],["class","complexity-bar",3,"outline",4,"ngFor","ngForOf"],[1,"complexity-bar"]],template:function(i,r){if(i&1){let o=zt();Fe(0,Lj,14,1,"mat-card",2),K(1,"br"),y(2,"mat-card",3)(3,"mat-card-header")(4,"mat-card-title"),M(5,"Players"),_()(),y(6,"mat-card-content")(7,"table",4),Ti(8,5),Fe(9,Bj,2,0,"th",6)(10,Vj,2,1,"td",7),ki(),Ti(11,8),Fe(12,jj,2,0,"th",6)(13,Hj,2,1,"td",7),ki(),Ti(14,9),Fe(15,zj,2,0,"th",6)(16,$j,2,1,"td",7),ki(),Ti(17,10),Fe(18,Gj,2,0,"th",6)(19,Wj,2,1,"td",7),ki(),Fe(20,Kj,1,0,"tr",11)(21,Yj,1,0,"tr",12),_(),K(22,"mat-divider"),_(),y(23,"mat-card-actions")(24,"button",13,0),ve("click",function(){lt(o);let a=jn(25);return dt(r.shuffle(a))}),y(26,"mat-icon"),M(27,"shuffle"),_()()()(),Fe(28,Qj,2,1,"h2",14)(29,Jj,7,1,"mat-card",2)(30,tU,7,1,"mat-card",2)(31,iU,7,1,"mat-card",2)}i&2&&(V("ngIf",!r.draftFactions().length),S(7),V("dataSource",r.players()),S(13),V("matHeaderRowDef",r.displayedColumns),S(),V("matRowDefColumns",r.displayedColumns),S(7),V("ngIf",r.incomplete()),S(),V("ngIf",!r.players()[r.currentPosition()]?.faction),S(),V("ngIf",!r.players()[r.currentPosition()]?.position),S(),V("ngIf",!r.players()[r.currentPosition()]?.slice))},dependencies:[V_,to,no,nN,ro,oo,io,Gh,Ll,Pl,so,gr,qh,Aa,$N,qN,QN,WN,GN,ZN,KN,YN,XN,JN,$r,Qo,Da,Xr,wa,Ca,Hi,is],styles:["mat-chip-option[_ngcontent-%COMP%]{padding-right:56px;position:relative}.faction-icon[_ngcontent-%COMP%]{height:32px;object-fit:contain;width:32px}.faction-complexity[_ngcontent-%COMP%]{align-items:flex-start;display:flex;gap:2px;justify-content:flex-start;position:absolute;right:16px;top:50%;transform:translateY(-50%)}.complexity-bar[_ngcontent-%COMP%]{box-sizing:border-box;display:block;height:8px;width:16px}.complexity-low[_ngcontent-%COMP%]   .complexity-bar[_ngcontent-%COMP%]{background-color:green;color:green}.complexity-moderate[_ngcontent-%COMP%]   .complexity-bar[_ngcontent-%COMP%]{background-color:#ff0;color:#ff0}.complexity-high[_ngcontent-%COMP%]   .complexity-bar[_ngcontent-%COMP%]{background-color:red;color:red}.complexity-low[_ngcontent-%COMP%]   .complexity-bar.outline[_ngcontent-%COMP%]{background-color:transparent!important;border:2px solid green}.complexity-moderate[_ngcontent-%COMP%]   .complexity-bar.outline[_ngcontent-%COMP%]{background-color:transparent!important;border:2px solid yellow}"]})}}return t})();var nM=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=k({type:t,selectors:[["app-home"]],standalone:!1,decls:13,vars:0,consts:[["mat-button","","routerLink","/settings"],["mat-button","","routerLink","/tech"],["mat-button","","routerLink","/draft"],["mat-button","","routerLink","/slice"]],template:function(i,r){i&1&&(y(0,"mat-list")(1,"mat-list-item")(2,"button",0),M(3,"Settings"),_()(),y(4,"mat-list-item")(5,"button",1),M(6,"Tech"),_()(),y(7,"mat-list-item")(8,"button",2),M(9,"Draft"),_()(),y(10,"mat-list-item")(11,"button",3),M(12,"Slice Generator"),_()()())},dependencies:[qI,WI,Ra,ya],encapsulation:2})}}return t})();var rU=["*",[["mat-toolbar-row"]]],oU=["*","mat-toolbar-row"],sU=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),tm=(()=>{class t{_elementRef=u(U);_platform=u(Ge);_document=u(J);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-toolbar"]],contentQueries:function(i,r,o){if(i&1&&mt(o,sU,5),i&2){let s;Y(s=Q())&&(r._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,r){i&2&&(En(r.color?"mat-"+r.color:""),Z("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:oU,decls:2,vars:0,template:function(i,r){i&1&&(Ne(rU),A(0),A(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2})}return t})();var iM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({imports:[Te]})}return t})();var fb=new b("CdkAccordion"),oM=(()=>{class t{_stateChanges=new I;_openCloseAllActions=new I;id=u(pt).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",j]},exportAs:["cdkAccordion"],features:[ye([{provide:fb,useExisting:t}]),Qe]})}return t})(),sM=(()=>{class t{accordion=u(fb,{optional:!0,skipSelf:!0});_changeDetectorRef=u(Je);_expansionDispatcher=u(Ol);_openCloseAllSubscription=pe.EMPTY;closed=new se;opened=new se;destroyed=new se;expandedChange=new se;id=u(pt).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let i=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,i)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=G(!1);_removeUniqueSelectionListener=()=>{};ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,i)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===i&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",j],disabled:[2,"disabled","disabled",j]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[ye([{provide:fb,useValue:void 0}])]})}return t})(),aM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({})}return t})();var Hl=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},hb=class extends Hl{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,e,i,r,o,s){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null,this.directives=s||null}},co=class extends Hl{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},mb=class extends Hl{element;constructor(n){super(),this.element=n instanceof U?n.nativeElement:n}},nm=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof hb)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof co)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof mb)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},zl=class extends nm{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(Ei,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||me.NULL,o=r.get(He,i.injector);e=pf(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var cM=(()=>{class t extends nm{_moduleRef=u(Ei,{optional:!0});_document=u(J);_viewContainerRef=u(it);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new se;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[le]})}return t})(),im=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({})}return t})();var aU=["body"],cU=["bodyWrapper"],lU=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],dU=["mat-expansion-panel-header","*","mat-action-row"];function uU(t,n){}var fU=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],hU=["mat-panel-title","mat-panel-description","*"];function mU(t,n){t&1&&(rt(0,"span",1),Xn(),rt(1,"svg",2),mn(2,"path",3),ht()())}var pb=new b("MAT_ACCORDION"),lM=new b("MAT_EXPANSION_PANEL"),pU=(()=>{class t{_template=u(bt);_expansionPanel=u(lM,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["ng-template","matExpansionPanelContent",""]]})}return t})(),dM=new b("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),gb=(()=>{class t extends sM{_viewContainerRef=u(it);_animationsDisabled=Tt();_document=u(J);_ngZone=u(L);_elementRef=u(U);_renderer=u(ze);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new se;afterCollapse=new se;_inputChanges=new I;accordion=u(pb,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=u(pt).getId("mat-expansion-panel-header-");constructor(){super();let e=u(dM,{optional:!0});this._expansionDispatcher=u(Ol),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(Ot(null),Me(()=>this.expanded&&!this._portal),yt(1)).subscribe(()=>{this._portal=new co(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,i=this._body.nativeElement;return e===i||i.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:i})=>{e===this._bodyWrapper?.nativeElement&&i==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(i,r,o){if(i&1&&mt(o,pU,5),i&2){let s;Y(s=Q())&&(r._lazyContent=s.first)}},viewQuery:function(i,r){if(i&1&&$t(aU,5)(cU,5),i&2){let o;Y(o=Q())&&(r._body=o.first),Y(o=Q())&&(r._bodyWrapper=o.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(i,r){i&2&&Z("mat-expanded",r.expanded)("mat-expansion-panel-spacing",r._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",j],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[ye([{provide:pb,useValue:void 0},{provide:lM,useExisting:t}]),le,Qe],ngContentSelectors:dU,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(i,r){i&1&&(Ne(lU),A(0),y(1,"div",2,0)(3,"div",3,1)(5,"div",4),A(6,1),Fe(7,uU,0,0,"ng-template",5),_(),A(8,2),_()()),i&2&&(S(),ge("inert",r.expanded?null:""),S(2),V("id",r.id),ge("aria-labelledby",r._headerId),S(4),V("cdkPortalOutlet",r._portal))},dependencies:[cM],styles:[`.mat-expansion-panel {
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
`],encapsulation:2})}return t})();var vb=(()=>{class t{panel=u(gb,{host:!0});_element=u(U);_focusMonitor=u(Gi);_changeDetectorRef=u(Je);_parentChangeSubscription=pe.EMPTY;constructor(){u(Ct).load(Rn);let e=this.panel,i=u(dM,{optional:!0}),r=u(new Un("tabindex"),{optional:!0}),o=e.accordion?e.accordion._stateChanges.pipe(Me(s=>!!(s.hideToggle||s.togglePosition))):at;this.tabIndex=parseInt(r||"")||0,this._parentChangeSubscription=un(e.opened,e.closed,o,e._inputChanges.pipe(Me(s=>!!(s.hideToggle||s.disabled||s.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(Me(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),i&&(this.expandedHeight=i.expandedHeight,this.collapsedHeight=i.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Ma(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,i){e?this._focusMonitor.focusVia(this._element,e,i):this._element.nativeElement.focus(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(i,r){i&1&&ve("click",function(){return r._toggle()})("keydown",function(s){return r._keydown(s)}),i&2&&(ge("id",r.panel._headerId)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r._getPanelId())("aria-expanded",r._isExpanded())("aria-disabled",r.panel.disabled),Ko("height",r._getHeaderHeight()),Z("mat-expanded",r._isExpanded())("mat-expansion-toggle-indicator-after",r._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",r._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ri(e)]},ngContentSelectors:hU,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(i,r){i&1&&(Ne(fU),rt(0,"span",0),A(1),A(2,1),A(3,2),ht(),ie(4,mU,3,0,"span",1)),i&2&&(Z("mat-content-hide-toggle",!r._showToggle()),S(4),re(r._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
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
`],encapsulation:2})}return t})(),uM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]})}return t})(),fM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return t})(),hM=(()=>{class t extends oM{_keyManager;_ownHeaders=new Dn;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(Ot(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(i=>i.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new mr(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["mat-accordion"]],contentQueries:function(i,r,o){if(i&1&&mt(o,vb,5),i&2){let s;Y(s=Q())&&(r._headers=s)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(i,r){i&2&&Z("mat-accordion-multi",r.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",j],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[ye([{provide:pb,useExisting:t}]),le]})}return t})(),mM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({imports:[aM,im,Te]})}return t})();function gU(t,n){t&1&&K(0,"span",1)}function vU(t,n){if(t&1&&Ut(0,gU,1,0,"span",1,ar),t&2){let e=O();Ht(e.dots(e.deltaTechColor()[e.colorEnum.red]))}}function yU(t,n){t&1&&K(0,"span",2)}function _U(t,n){if(t&1&&Ut(0,yU,1,0,"span",2,ar),t&2){let e=O();Ht(e.dots(e.deltaTechColor()[e.colorEnum.green]))}}function bU(t,n){t&1&&K(0,"span",3)}function SU(t,n){if(t&1&&Ut(0,bU,1,0,"span",3,ar),t&2){let e=O();Ht(e.dots(e.deltaTechColor()[e.colorEnum.yellow]))}}function wU(t,n){t&1&&K(0,"span",4)}function CU(t,n){if(t&1&&Ut(0,wU,1,0,"span",4,ar),t&2){let e=O();Ht(e.dots(e.deltaTechColor()[e.colorEnum.blue]))}}function DU(t,n){t&1&&K(0,"span",5)}function xU(t,n){if(t&1&&Ut(0,DU,1,0,"span",5,ar),t&2){let e=O();Ht(e.dots(e.deltaTechColor()[e.colorEnum.black]))}}var gM=(()=>{class t{dots(e){return Array.from({length:e},(i,r)=>r)}constructor(){this.techColors=Xt({}),this.provided=Xt({}),this.colorEnum=g,this.deltaTechColor=$e(()=>{let e=this.techColors(),i=this.provided(),r={};for(let o of Object.keys(e)){let s=Number.parseInt(o);r[s]=e[s]-(i[s]??0)}return r})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=k({type:t,selectors:[["app-tech-color"]],inputs:{techColors:[1,"techColors"],provided:[1,"provided"]},standalone:!1,decls:6,vars:5,consts:[[1,"missingTech"],[1,"dot",2,"background-color","red"],[1,"dot",2,"background-color","green"],[1,"dot",2,"background-color","yellow"],[1,"dot",2,"background-color","blue"],[1,"dot",2,"background-color","black"]],template:function(i,r){i&1&&(y(0,"div",0),ie(1,vU,2,0),ie(2,_U,2,0),ie(3,SU,2,0),ie(4,CU,2,0),ie(5,xU,2,0),_()),i&2&&(S(),re(r.deltaTechColor()[r.colorEnum.red]!==void 0&&r.deltaTechColor()[r.colorEnum.red]>0?1:-1),S(),re(r.deltaTechColor()[r.colorEnum.green]!==void 0&&r.deltaTechColor()[r.colorEnum.green]>0?2:-1),S(),re(r.deltaTechColor()[r.colorEnum.yellow]!==void 0&&r.deltaTechColor()[r.colorEnum.yellow]>0?3:-1),S(),re(r.deltaTechColor()[r.colorEnum.blue]!==void 0&&r.deltaTechColor()[r.colorEnum.blue]>0?4:-1),S(),re(r.deltaTechColor()[r.colorEnum.black]!==void 0&&r.deltaTechColor()[r.colorEnum.black]>0?5:-1))},styles:[".missingTech[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:4px;margin-top:8px}.dot[_ngcontent-%COMP%]{border-radius:50%;display:block;height:10px;width:10px}"]})}}return t})();var IU=t=>({color:t});function NU(t,n){if(t&1){let e=zt();y(0,"button",7),ve("click",function(r){lt(e);let o=O();return dt(o.researchMe(r))}),y(1,"mat-icon"),M(2," highlight_off "),_()()}}function MU(t,n){if(t&1){let e=zt();y(0,"button",8),ve("click",function(r){lt(e);let o=O();return dt(o.researchMe(r))}),y(1,"mat-icon"),M(2," radio_button_unchecked "),_()()}}function TU(t,n){if(t&1){let e=zt();y(0,"button",9),ve("click",function(r){lt(e);let o=O();return dt(o.researchMe(r))}),y(1,"mat-icon"),M(2," check_circle "),_()()}}var vM=(()=>{class t{techColor(){switch(this.tech().tech.provides){case g.black:return"white";case g.blue:return"blue";case g.red:return"red";case g.green:return"green";case g.yellow:return"yellow"}}constructor(){this.tech=Xt({tech:{id:0,name:"",requirements:[],description:"",provides:0,edition:v.Base},provided:{},researched:!1,researchDistance:0,available:!1}),this.provided=Xt({}),this.researched=new se,this.showDescription=G(!1)}researchMe(e){e.cancelBubble=!0,this.researched.emit(this.tech())}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=k({type:t,selectors:[["app-tech"]],inputs:{tech:[1,"tech"],provided:[1,"provided"]},outputs:{researched:"researched"},standalone:!1,decls:14,vars:10,consts:[["hideToggle","",1,"headers-align"],[3,"ngStyle"],[3,"techColors","provided"],["color","warn","mat-mini-fab","",3,"click",4,"ngIf"],["color","accent","mat-mini-fab","",3,"click",4,"ngIf"],["color","primary","mat-mini-fab","",3,"click",4,"ngIf"],[3,"innerHTML"],["color","warn","mat-mini-fab","",3,"click"],["color","accent","mat-mini-fab","",3,"click"],["color","primary","mat-mini-fab","",3,"click"]],template:function(i,r){i&1&&(y(0,"mat-expansion-panel",0)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon",1),M(4," arrow_circle_up "),_(),y(5,"p"),M(6),_()(),y(7,"mat-panel-description"),K(8,"app-tech-color",2),y(9,"div"),Fe(10,NU,3,0,"button",3)(11,MU,3,0,"button",4)(12,TU,3,0,"button",5),_()()(),K(13,"p",6),_()),i&2&&(S(3),V("ngStyle",Yv(8,IU,r.techColor())),S(3),Pt(r.tech().tech.name),S(2),V("techColors",r.tech().tech.requirements)("provided",r.provided()),S(2),V("ngIf",!r.tech().available),S(),V("ngIf",r.tech().available&&!r.tech().researched),S(),V("ngIf",r.tech().researched),S(),V("innerHTML",r.tech().tech.description,uv))},dependencies:[to,gb,vb,fM,uM,qh,Qo,gy,gM],styles:[".headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]{justify-content:right;align-items:center;margin-right:0}.headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]{padding-right:0}.headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-left:5px}.headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{padding-right:5px}.headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%]{margin-right:0;flex-grow:4}"]})}}return t})();function RU(t,n){if(t&1){let e=zt();y(0,"app-tech",9),ve("researched",function(r){lt(e);let o=O();return dt(o.onResearched(r))}),_()}if(t&2){let e=n.$implicit,i=O();V("tech",e)("provided",i.provided())}}var yM=(()=>{class t{constructor(){this.state=G(void 0),this.provided=G({[g.blue]:0,[g.red]:0,[g.green]:0,[g.yellow]:0,[g.black]:0}),this.colorEnum=g,this.Arr=Array,this.faction=Xt(),this.tech=Xt([])}distanceSorter(e,i){return e.researched&&!i.researched?-1:!e.researched&&i.researched?1:e.available&&!i.available?-1:!e.available&&i.available?1:e.tech.name<i.tech.name&&e.researchDistance===i.researchDistance?-1:e.tech.name>i.tech.name&&e.researchDistance===i.researchDistance?1:e.researchDistance-i.researchDistance}ngOnInit(){let e=w({},this.provided()),i=this.tech().map(r=>{let o=this.faction()?.startingtech.indexOf(r.id)!==-1;return o&&e[r.provides]++,{tech:r,researched:o,provided:e,available:!1,researchDistance:0}});this.provided.set(e),this.state.set({faction:this.faction(),tech:i}),this.state.update(r=>r&&X(w({},r),{tech:r.tech.map(o=>(this.updateRequirements(o),o)).sort(this.distanceSorter)}))}updateRequirements(e){e.available=this.checkForMatchingRequirements(e,this.provided())}checkForMatchingRequirements(e,i){let r=0;for(let o in e.tech.requirements)e.provided[o]<e.tech.requirements[o]&&(r+=e.tech.requirements[o]-e.provided[o]);return e.researchDistance=r,r===0}onResearched(e){let i=w({},this.provided());e.researched=!e.researched,e.tech.provides!==void 0&&(e.researched?i[e.tech.provides]++:i[e.tech.provides]--),this.provided.set(i),this.state.update(r=>r&&X(w({},r),{tech:r.tech.map(o=>X(w({},o),{provided:i})).map(o=>(this.updateRequirements(o),o)).sort(this.distanceSorter)}))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=k({type:t,selectors:[["app-tech-picker"]],inputs:{faction:[1,"faction"],tech:[1,"tech"]},standalone:!1,decls:17,vars:9,consts:[["color","primary"],["inline","true",1,"factionIcon",3,"svgIcon"],[1,"spacer"],[2,"color","red"],[2,"color","green"],[2,"color","yellow"],[2,"color","blue"],[2,"color","white"],[3,"tech","provided","researched",4,"ngFor","ngForOf"],[3,"researched","tech","provided"]],template:function(i,r){i&1&&(y(0,"mat-toolbar",0)(1,"span"),M(2),_(),K(3,"mat-icon",1)(4,"span",2),y(5,"h3",3),M(6),_(),y(7,"h3",4),M(8),_(),y(9,"h3",5),M(10),_(),y(11,"h3",6),M(12),_(),y(13,"h3",7),M(14),_()(),y(15,"mat-accordion"),Fe(16,RU,1,2,"app-tech",8),_()),i&2&&(S(2),Pt(r.state()?.faction?.name),S(),V("svgIcon",Kv(r.state()?.faction?.name?.toLowerCase())),S(3),Pt(r.provided()[r.colorEnum.red]),S(2),Pt(r.provided()[r.colorEnum.green]),S(2),Pt(r.provided()[r.colorEnum.yellow]),S(2),Pt(r.provided()[r.colorEnum.blue]),S(2),Pt(r.provided()[r.colorEnum.black]),S(2),V("ngForOf",r.state()?.tech))},dependencies:[tm,to,hM,$r,vM],encapsulation:2})}}return t})();function OU(t,n){if(t&1){let e=zt();y(0,"mat-chip-option",5),ve("click",function(){let r=lt(e).$implicit,o=O(2);return dt(o.factionClick_hdl(r))}),y(1,"mat-chip-avatar"),K(2,"img",6),_(),y(3,"span"),M(4),_()()}if(t&2){let e=n.$implicit,i=O(2);S(2),V("src",i.factionIcon(e),Bn)("alt",e.name)("title",e.name),S(2),Pt(e.name)}}function FU(t,n){if(t&1&&(y(0,"mat-card",2)(1,"mat-card-header")(2,"mat-card-title"),M(3,"Choose faction"),_()(),y(4,"mat-card-content")(5,"mat-chip-listbox",3),Fe(6,OU,5,4,"mat-chip-option",4),_()()()),t&2){let e=O();S(6),V("ngForOf",e.factions())}}function PU(t,n){if(t&1&&K(0,"app-tech-picker",7),t&2){let e=O();V("faction",e.selectedFaction())("tech",e.tech())}}var _M=(()=>{class t{constructor(){this.settingsService=u(zi),this.factionIconNames={1:"Arborec.png",2:"Letnev.png",3:"Saar.png",4:"Muaat.png",5:"Hacan.png",6:"Sol.png",7:"Creuss.png",8:"L1Z1X.png",9:"Mentak.png",10:"Naalu.png",11:"Nekro.png",12:"Sardakk.png",13:"Jol Nar.png",14:"Winnu.png",15:"Xxcha.png",16:"Yin.png",17:"Yssaril.png",18:"Argent.png",19:"Empyrean.png",20:"Mahact.png",21:"Naaz-Rokha.png",22:"Nomad.png",23:"Titans.png",24:"Vuil'Raith.png"},this.factions=$e(()=>$i.factions.filter(e=>this.settingsService.settings().editions.includes(e.edition))),this.selectedFaction=G(void 0),this.tech=G([])}factionIcon(e){return`assets/factions/${this.factionIconNames[Number(e.id)]}`}factionClick_hdl(e){this.selectedFaction.set(e),e.edition===v.PoK?this.tech.set([...$i.genericTech,...e.tech]):this.selectedFaction()?.id===11?this.tech.set([...$i.genericTech,...this.factions().flatMap(i=>i.tech)].filter(i=>this.settingsService.settings().editions.includes(i.edition))):this.tech.set([...$i.genericTech,...e.tech].filter(i=>this.settingsService.settings().editions.includes(i.edition)))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=k({type:t,selectors:[["app-faction-chooser"]],standalone:!1,decls:2,vars:2,consts:[["appearance","outlined",4,"ngIf"],[3,"faction","tech",4,"ngIf"],["appearance","outlined"],[1,"mat-mdc-chip-set-stacked"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"faction-icon",3,"src","alt","title"],[3,"faction","tech"]],template:function(i,r){i&1&&Fe(0,FU,7,1,"mat-card",0)(1,PU,1,2,"app-tech-picker",1),i&2&&(V("ngIf",!r.selectedFaction()),S(),V("ngIf",r.selectedFaction()))},dependencies:[no,ro,oo,io,Gh,Ll,Pl,$r,Qo,yM],styles:["section[_ngcontent-%COMP%]{width:100%}app-tech-picker[_ngcontent-%COMP%]{display:block;width:100%}button[_ngcontent-%COMP%]{display:flex;width:100%;height:120px;align-items:center;justify-content:space-between}.faction-icon[_ngcontent-%COMP%]{height:32px;object-fit:contain;width:32px}"]})}}return t})();function bM(t){t||(t=u(tt));let n=new ne(e=>{if(t.destroyed){e.next();return}return t.onDestroy(e.next.bind(e))});return e=>e.pipe(Be(n))}var LU=["*"],SM=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&Z("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:LU,decls:1,vars:0,template:function(i,r){i&1&&(Ne(),A(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2})}return t})();var BU=["input"],VU=["*"],yb={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},jU=new b("mat-checkbox-default-options",{providedIn:"root",factory:()=>yb}),tn=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(tn||{}),_b=class{source;checked},bb=(()=>{class t{_elementRef=u(U);_changeDetectorRef=u(Je);_ngZone=u(L);_animationsDisabled=Tt();_options=u(jU,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new _b;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new se;indeterminateChange=new se;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=tn.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){u(Ct).load(Rn);let e=u(new Un("tabindex"),{optional:!0});this._options=this._options||yb,this.color=this._options.color||yb.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=u(pt).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(tn.Indeterminate):this._transitionCheckState(this.checked?tn.Checked:tn.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=G(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?tn.Checked:tn.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case tn.Init:if(i===tn.Checked)return this._animationClasses.uncheckedToChecked;if(i==tn.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case tn.Unchecked:return i===tn.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case tn.Checked:return i===tn.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case tn.Indeterminate:return i===tn.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-checkbox"]],viewQuery:function(i,r){if(i&1&&$t(BU,5),i&2){let o;Y(o=Q())&&(r._inputElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,r){i&2&&(sn("id",r.id),ge("tabindex",null)("aria-label",null)("aria-labelledby",null),En(r.color?"mat-"+r.color:"mat-accent"),Z("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",j],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",j],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",j],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Ri(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",j],checked:[2,"checked","checked",j],disabled:[2,"disabled","disabled",j],indeterminate:[2,"indeterminate","indeterminate",j]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[ye([{provide:ns,useExisting:Nt(()=>t),multi:!0},{provide:Jr,useExisting:t,multi:!0}]),Qe],ngContentSelectors:VU,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition","for"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-internal-form-field-label","mdc-label"]],template:function(i,r){if(i&1&&(Ne(),y(0,"label",3),ve("click",function(s){return r._preventBubblingFromLabel(s)}),y(1,"span",4,0),K(3,"span",5),y(4,"input",6,1),ve("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(s){return r._onInteractionEvent(s)}),_(),K(6,"span",7),y(7,"span",8),Xn(),y(8,"svg",9),K(9,"path",10),_(),wc(),K(10,"span",11),_(),K(11,"span",12),_(),y(12,"span",13,2),A(14),_()()),i&2){let o=jn(2);V("labelPosition",r.labelPosition)("for",r.inputId),S(4),Z("mdc-checkbox--selected",r.checked),V("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),ge("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),S(7),V("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0)}},dependencies:[kh,SM],styles:[`.mdc-checkbox {
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
`],encapsulation:2})}return t})(),rm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({imports:[bb,Te]})}return t})();var wM=(()=>{class t{constructor(){this.settingsService=u(zi),this.destroyRef=u(tt),this.settings=this.settingsService.settings,this.form=new ji({base:new Ui({value:!0,disabled:!0},{nonNullable:!0}),pok:new Ui(this.settings().editions.includes(v.PoK),{nonNullable:!0}),te:new Ui(this.settings().editions.includes(v.TE),{nonNullable:!0}),additionalFactions:new Ui(this.settings().additionalFactions,{nonNullable:!0})}),this.form.valueChanges.pipe(bM(this.destroyRef)).subscribe(()=>this.persistSettings())}persistSettings(){let e=this.form.getRawValue(),i=[v.Base];e.pok&&i.push(v.PoK),e.te&&i.push(v.TE),this.settingsService.settings.set({editions:i,additionalFactions:Math.max(0,e.additionalFactions)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=k({type:t,selectors:[["app-settings",8,"component"]],decls:17,vars:1,consts:[["appearance","outlined"],[3,"formGroup"],["formControlName","base"],["formControlName","pok"],["formControlName","te"],["matInput","","type","number","formControlName","additionalFactions","min","0","step","1"]],template:function(i,r){i&1&&(y(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),M(3,"Settings"),_()(),y(4,"mat-card-content")(5,"form",1)(6,"mat-checkbox",2),M(7,"Base"),_(),Ni(),y(8,"mat-checkbox",3),M(9,"Prophecy of Kings"),_(),Ni(),y(10,"mat-checkbox",4),M(11,"Thunder Edge"),_(),Ni(),K(12,"br"),y(13,"mat-form-field")(14,"mat-label"),M(15,"Additional factions for drafting"),_(),K(16,"input",5),Ni(),_()()()()),i&2&&(S(5),V("formGroup",r.form),S(),Mi(),S(2),Mi(),S(2),Mi(),S(6),Mi())},dependencies:[Ta,no,ro,oo,io,rm,bb,vr,so,gr,Oa,Aa,xa,Da,Xr,Tl,wa,Ca,Ml,Hi,is],encapsulation:2})}}return t})();var CM=(t,n)=>n.id,DM=(t,n)=>n.name,xM=(t,n)=>e=>{lt(n);let i=O(4);return dt(i.wormholeNames[e])};function HU(t,n){t&1&&(y(0,"mat-error"),M(1," Enter the number of players. "),_())}function zU(t,n){if(t&1&&(y(0,"mat-error"),M(1),_()),t&2){let e=O();S(),St(" Enter a number between 4 and ",e.maxPlayerCount(),". ")}}function $U(t,n){if(t&1&&K(0,"img",10),t&2){let e=n.$implicit,i=O(7);V("src",i.generalIconPath+i.traitIcons[e],Bn)("alt",i.traitNames[e])("title",i.traitNames[e])}}function GU(t,n){if(t&1&&(y(0,"span",7),Ut(1,$U,1,3,"img",10,ta),_()),t&2){let e=O().$implicit;S(),Ht(e.traits)}}function qU(t,n){if(t&1&&K(0,"img",10),t&2){let e=n.$implicit,i=O(7);V("src",i.generalIconPath+i.specialtyIcons[e],Bn)("alt",i.specialtyNames[e])("title",i.specialtyNames[e])}}function WU(t,n){if(t&1&&(y(0,"span",8),Ut(1,qU,1,3,"img",10,ta),_()),t&2){let e=O().$implicit;S(),Ht(e.techSpecialty)}}function KU(t,n){t&1&&K(0,"img",9)}function YU(t,n){if(t&1&&(y(0,"li"),M(1),ie(2,GU,3,0,"span",7),ie(3,WU,3,0,"span",8),ie(4,KU,1,0,"img",9),_()),t&2){let e=n.$implicit;S(),qc(" ",e.name," (",e.resources,"/",e.influence,") "),S(),re(e.traits.length?2:-1),S(),re(e.techSpecialty?.length?3:-1),S(),re(e.legendary?4:-1)}}function QU(t,n){if(t&1&&(y(0,"ul"),Ut(1,YU,5,6,"li",null,DM),_()),t&2){let e=O().$implicit;S(),Ht(e.planets)}}function ZU(t,n){if(t&1&&(y(0,"span",6),M(1),_()),t&2){let e=O().$implicit,i=O(3);S(),St("Anomaly: ",i.anomalyNames[e.anomaly])}}function XU(t,n){if(t&1&&(y(0,"span",6),M(1),_()),t&2){let e=O().$implicit;S(),St("Wormhole: ",e.wormholes.map(lf(1,xM,n)).join(", "))}}function JU(t,n){if(t&1&&(y(0,"li")(1,"strong"),M(2),_(),ie(3,QU,3,0,"ul"),ie(4,ZU,2,1,"span",6),ie(5,XU,2,2,"span",6),_()),t&2){let e=n.$implicit;S(2),St("System ",e.id),S(),re(e.planets?.length?3:-1),S(),re(e.anomaly!==void 0?4:-1),S(),re(e.wormholes?.length?5:-1)}}function eH(t,n){if(t&1&&K(0,"img",10),t&2){let e=n.$implicit,i=O(7);V("src",i.generalIconPath+i.traitIcons[e],Bn)("alt",i.traitNames[e])("title",i.traitNames[e])}}function tH(t,n){if(t&1&&(y(0,"span",7),Ut(1,eH,1,3,"img",10,ta),_()),t&2){let e=O().$implicit;S(),Ht(e.traits)}}function nH(t,n){if(t&1&&K(0,"img",10),t&2){let e=n.$implicit,i=O(7);V("src",i.generalIconPath+i.specialtyIcons[e],Bn)("alt",i.specialtyNames[e])("title",i.specialtyNames[e])}}function iH(t,n){if(t&1&&(y(0,"span",8),Ut(1,nH,1,3,"img",10,ta),_()),t&2){let e=O().$implicit;S(),Ht(e.techSpecialty)}}function rH(t,n){t&1&&K(0,"img",11)}function oH(t,n){if(t&1&&(y(0,"li"),M(1),ie(2,tH,3,0,"span",7),ie(3,iH,3,0,"span",8),ie(4,rH,1,0,"img",11),_()),t&2){let e=n.$implicit;S(),qc(" ",e.name," (",e.resources,"/",e.influence,") "),S(),re(e.traits.length?2:-1),S(),re(e.techSpecialty?.length?3:-1),S(),re(e.legendary?4:-1)}}function sH(t,n){if(t&1&&(y(0,"ul"),Ut(1,oH,5,6,"li",null,DM),_()),t&2){let e=O().$implicit;S(),Ht(e.planets)}}function aH(t,n){if(t&1&&(y(0,"span",6),M(1),_()),t&2){let e=O().$implicit,i=O(3);S(),St("Anomaly: ",i.anomalyNames[e.anomaly])}}function cH(t,n){if(t&1&&(y(0,"span",6),M(1),_()),t&2){let e=O().$implicit;S(),St("Wormhole: ",e.wormholes.map(lf(1,xM,n)).join(", "))}}function lH(t,n){if(t&1&&(y(0,"li")(1,"strong"),M(2),_(),ie(3,sH,3,0,"ul"),ie(4,aH,2,1,"span",6),ie(5,cH,2,2,"span",6),_()),t&2){let e=n.$implicit;S(2),St("System ",e.id),S(),re(e.planets?.length?3:-1),S(),re(e.anomaly!==void 0?4:-1),S(),re(e.wormholes?.length?5:-1)}}function dH(t,n){if(t&1&&(y(0,"mat-card",5)(1,"mat-card-header")(2,"mat-card-title"),M(3),_()(),y(4,"mat-card-content")(5,"h3"),M(6,"Blue systems"),_(),y(7,"ul"),Ut(8,JU,6,4,"li",null,CM),_(),y(10,"h3"),M(11,"Red systems"),_(),y(12,"ul"),Ut(13,lH,6,4,"li",null,CM),_()()()),t&2){let e=n.$implicit,i=n.$index;S(3),St("Slice ",i+1),S(5),Ht(e.blue),S(5),Ht(e.red)}}function uH(t,n){if(t&1&&(y(0,"div",4),Ut(1,dH,15,1,"mat-card",5,ar),_()),t&2){let e=O();S(),Ht(e.generatedSlices)}}var EM=(()=>{class t{constructor(){this.settingsService=u(zi),this.maxPlayerCount=$e(()=>this.settingsService.settings().editions.includes(v.PoK)?8:6),this.blueSystems=$e(()=>$i.systems.filter(e=>this.settingsService.settings().editions.includes(e.edition)&&e.type===ee.Blue)),this.redSystems=$e(()=>$i.systems.filter(e=>this.settingsService.settings().editions.includes(e.edition)&&e.type===ee.Red)),this.form=new ji({playerCount:new Ui(4,{nonNullable:!0,validators:[an.required,an.min(4),an.max(6)]})}),this.generatedSlices=[],this.anomalyNames={[en.NEBULA]:"Nebula",[en.GRAVITY_RIFT]:"Gravity Rift",[en.ASTEROID_FIELD]:"Asteroid Field",[en.SUPERNOVA]:"Supernova"},this.wormholeNames={[kn.ALPHA]:"Alpha",[kn.BETA]:"Beta",[kn.GAMMA]:"Gamma",[kn.DELTA]:"Delta"},this.traitNames={[P.HAZARDOUS]:"Hazardous",[P.INDUSTRIAL]:"Industrial",[P.CULTURAL]:"Cultural"},this.traitIcons={[P.HAZARDOUS]:"Hazardous.png",[P.INDUSTRIAL]:"Industrial.png",[P.CULTURAL]:"Cultural.png"},this.specialtyNames={[Ze.BIOTIC]:"Biotic",[Ze.WARFARE]:"Warfare",[Ze.PROPULSION]:"Propulsion",[Ze.CYBERNETIC]:"Cybernetic"},this.specialtyIcons={[Ze.BIOTIC]:"Biotic dark.png",[Ze.WARFARE]:"Warfare dark.png",[Ze.PROPULSION]:"Propulsion dark.png",[Ze.CYBERNETIC]:"Cybernetic dark.png"},this.generalIconPath="assets/generalIcons/",Yt(()=>{let e=this.maxPlayerCount(),i=this.form.controls.playerCount;i.setValidators([an.required,an.min(4),an.max(e)]),i.value>e&&i.setValue(e),i.updateValueAndValidity({emitEvent:!1})})}generateSlices(){if(this.form.invalid){this.form.markAllAsTouched();return}let e=this.form.controls.playerCount.value,i=this.shuffleFisherYates([...this.blueSystems()]),r=this.shuffleFisherYates([...this.redSystems()]);this.generatedSlices=Array.from({length:e},()=>({blue:i.splice(0,3),red:r.splice(0,2)}))}shuffleFisherYates(e){let i=e.length;for(;i--;){let r=Math.floor(Math.random()*(i+1));[e[i],e[r]]=[e[r],e[i]]}return e}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=k({type:t,selectors:[["app-slice-generator",8,"component"]],decls:17,vars:6,consts:[["appearance","outlined"],[3,"formGroup"],["matInput","","type","number","formControlName","playerCount","min","4","step","1",3,"max"],["mat-raised-button","","type","button",3,"click"],[1,"slice-list"],["appearance","outlined",1,"slice-card"],[1,"system-feature"],["aria-label","Planet traits",1,"planet-icons"],["aria-label","Technology specialties",1,"planet-icons"],["src","assets/generalIcons/Legendary white.png","alt","Legendary","title","Legendary",1,"planet-icon"],[3,"src","alt","title"],["src","assets/generalIcons/Legendary.png","alt","Legendary","title","Legendary",1,"planet-icon"]],template:function(i,r){i&1&&(y(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),M(3,"Slice Generator"),_()(),y(4,"mat-card-content")(5,"form",1)(6,"mat-form-field")(7,"mat-label"),M(8,"Number of players"),_(),K(9,"input",2),Ni(),y(10,"mat-hint"),M(11),_(),ie(12,HU,2,0,"mat-error"),ie(13,zU,2,1,"mat-error"),_(),y(14,"button",3),ve("click",function(){return r.generateSlices()}),M(15," Generate slices "),_()()()(),ie(16,uH,3,0,"div",4)),i&2&&(S(5),V("formGroup",r.form),S(4),V("max",r.maxPlayerCount()),Mi(),S(2),St("4 to ",r.maxPlayerCount()," players"),S(),re(r.form.controls.playerCount.hasError("required")?12:-1),S(),re(r.form.controls.playerCount.hasError("min")||r.form.controls.playerCount.hasError("max")?13:-1),S(3),re(r.generatedSlices.length?16:-1))},dependencies:[Ta,no,ro,oo,io,Wh,Ra,vr,so,gr,Fl,$_,Oa,Aa,xa,Da,Xr,Tl,wa,Ca,Ml,w_,Hi,is],styles:[".slice-list[_ngcontent-%COMP%]{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));margin-top:16px}.slice-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:4px}.slice-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:0}.slice-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.system-feature[_ngcontent-%COMP%]{display:block;font-size:.9em;font-style:italic}.planet-icons[_ngcontent-%COMP%]{display:inline-flex;gap:3px;margin-left:5px;vertical-align:middle}.planet-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .planet-icon[_ngcontent-%COMP%]{height:20px;width:20px;object-fit:contain;vertical-align:middle}"]})}}return t})();var fH=[{path:"",component:nM,pathMatch:"full"},{path:"tech",component:_M},{path:"draft",component:tM},{path:"settings",component:wM},{path:"slice",component:EM}],IM=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=B({type:t})}static{this.\u0275inj=F({imports:[fh.forRoot(fH),fh]})}}return t})();var NM=SI();function FM(t){return new om(t.get(ao),t.get(J))}var om=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=wt(-this._previousScrollPosition.left),n.style.top=wt(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",s=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),NM&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),NM&&(i.scrollBehavior=o,r.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function PM(t,n){return new sm(t.get(Yh),t.get(L),t.get(ao),n)}var sm=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Me(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var $l=class{enable(){}disable(){}attach(){}};function Sb(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,s=t.left>e.right;return i||r||o||s})}function MM(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,s=t.right>e.right;return i||r||o||s})}function fm(t,n){return new am(t.get(Yh),t.get(ao),t.get(L),n)}var am=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();Sb(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},LM=(()=>{class t{_injector=u(me);noop=()=>new $l;close=e=>PM(this._injector,e);block=()=>FM(this._injector);reposition=e=>fm(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})(),Pa=class{positionStrategy;scrollStrategy=new $l;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var cm=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var BM=(()=>{class t{_attachedOverlays=[];_document=u(J);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})(),VM=(()=>{class t extends BM{_ngZone=u(L);_renderer=u(ft).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})(),jM=(()=>{class t extends BM{_platform=u(Ge);_ngZone=u(L);_renderer=u(ft).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=pn(e)};_clickListener=e=>{let i=pn(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],c=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,c))){if(TM(a.overlayElement,i)||TM(a.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();function TM(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var UM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return t})(),HM=(()=>{class t{_platform=u(Ge);_containerElement;_document=u(J);_styleLoader=u(Ct);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||k_()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),k_()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(UM)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})(),wb=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Cb(t){return t&&t.nodeType===1}var lm=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new I;_attachments=new I;_detachments=new I;_positionStrategy;_scrollStrategy;_locationChanges=pe.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new I;_outsidePointerEvents=new I;_afterNextRenderRef;constructor(n,e,i,r,o,s,a,c,l,d=!1,f,h){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=c,this._outsideClickDispatcher=l,this._animationsDisabled=d,this._injector=f,this._renderer=h,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=jt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=w(w({},this._config),n),this._updateElementSize()}setDirection(n){this._config=X(w({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=wt(this._config.width),n.height=wt(this._config.height),n.minWidth=wt(this._config.minWidth),n.minHeight=wt(this._config.minHeight),n.maxWidth=wt(this._config.maxWidth),n.maxHeight=wt(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Cb(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(n){}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new wb(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=I_(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=jt(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},kM="cdk-overlay-connected-position-bounding-box",hH=/([A-Za-z%]+)$/;function hm(t,n){return new dm(n,t.get(ao),t.get(J),t.get(Ge),t.get(HM))}var dm=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new I;_resizeSubscription=pe.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(kM),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],s;for(let a of this._preferredPositions){let c=this._getOriginPoint(n,r,a),l=this._getOverlayPoint(c,e,a),d=this._getOverlayFit(l,e,i,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,c);return}if(this._canFitWithFlexibleDimensions(d,l,i)){o.push({position:a,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:l,originPoint:c,position:a,overlayRect:e})}if(o.length){let a=null,c=-1;for(let l of o){let d=l.boundingBoxRect.width*l.boundingBoxRect.height*(l.position.weight||1);d>c&&(c=d,a=l)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&fs(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(kM),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof U?this._origin.nativeElement:Cb(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,a=this._isRtl()?n.left:n.right;r=i.originX=="start"?s:a}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=AM(e),{x:s,y:a}=n,c=this._getOffset(r,"x"),l=this._getOffset(r,"y");c&&(s+=c),l&&(a+=l);let d=0-s,f=s+o.width-i.width,h=0-a,m=a+o.height-i.height,p=this._subtractOverflows(o.width,d,f),C=this._subtractOverflows(o.height,h,m),E=p*C;return{visibleArea:E,isCompletelyWithinViewport:o.width*o.height===E,fitsInViewportVertically:C===o.height,fitsInViewportHorizontally:p==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,s=RM(this._overlayRef.getConfig().minHeight),a=RM(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||s!=null&&s<=r,l=n.fitsInViewportHorizontally||a!=null&&a<=o;return c&&l}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=AM(e),o=this._viewportRect,s=Math.max(n.x+r.width-o.width,0),a=Math.max(n.y+r.height-o.height,0),c=Math.max(o.top-i.top-n.y,0),l=Math.max(o.left-i.left-n.x,0),d=0,f=0;return r.width<=o.width?d=l||-s:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?f=c||-a:f=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:f},{x:n.x+d,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!mH(this._lastScrollVisibility,i)){let r=new cm(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,s,a;if(e.overlayY==="top")s=n.y,o=i.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")a=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-a+this._getViewportMarginTop();else{let m=Math.min(i.bottom-n.y+i.top,n.y),p=this._lastBoundingBoxSize.height;o=m*2,s=n.y-m,o>p&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-p/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,l=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,f,h;if(l)h=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(c)f=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let m=Math.min(i.right-n.x+i.left,n.x),p=this._lastBoundingBoxSize.width;d=m*2,f=n.x-m,d>p&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-p/2)}return{top:s,left:f,bottom:a,right:h,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;r.width=wt(i.width),r.height=wt(i.height),r.top=wt(i.top)||"auto",r.bottom=wt(i.bottom)||"auto",r.left=wt(i.left)||"auto",r.right=wt(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=wt(o)),s&&(r.maxWidth=wt(s))}this._lastBoundingBoxSize=i,fs(this._boundingBox.style,r)}_resetBoundingBoxStyles(){fs(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){fs(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();fs(i,this._getExactOverlayY(e,n,d)),fs(i,this._getExactOverlayX(e,n,d))}else i.position="static";let a="",c=this._getOffset(e,"x"),l=this._getOffset(e,"y");c&&(a+=`translateX(${c}px) `),l&&(a+=`translateY(${l}px)`),i.transform=a.trim(),s.maxHeight&&(r?i.maxHeight=wt(s.maxHeight):o&&(i.maxHeight="")),s.maxWidth&&(r?i.maxWidth=wt(s.maxWidth):o&&(i.maxWidth="")),fs(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;r.bottom=`${s-(o.y+this._overlayRect.height)}px`}else r.top=wt(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let s;if(this._isRtl()?s=n.overlayX==="end"?"left":"right":s=n.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;r.right=`${a-(o.x+this._overlayRect.width)}px`}else r.left=wt(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:MM(n,i),isOriginOutsideView:Sb(n,i),isOverlayClipped:MM(e,i),isOverlayOutsideView:Sb(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&I_(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof U)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function fs(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function RM(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(hH);return!e||e==="px"?parseFloat(n):null}return t||null}function AM(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function mH(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var OM="cdk-global-overlay-wrapper";function zM(t){return new um}var um=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(OM),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:s,maxHeight:a}=i,c=(r==="100%"||r==="100vw")&&(!s||s==="100%"||s==="100vw"),l=(o==="100%"||o==="100vh")&&(!a||a==="100%"||a==="100vh"),d=this._xPosition,f=this._xOffset,h=this._overlayRef.getConfig().direction==="rtl",m="",p="",C="";c?C="flex-start":d==="center"?(C="center",h?p=f:m=f):h?d==="left"||d==="end"?(C="flex-end",m=f):(d==="right"||d==="start")&&(C="flex-start",p=f):d==="left"||d==="start"?(C="flex-start",m=f):(d==="right"||d==="end")&&(C="flex-end",p=f),n.position=this._cssPosition,n.marginLeft=c?"0":m,n.marginTop=l?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?"0":p,e.justifyContent=C,e.alignItems=l?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(OM),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},$M=(()=>{class t{_injector=u(me);global(){return zM()}flexibleConnectedTo(e){return hm(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})(),GM=new b("OVERLAY_DEFAULT_CONFIG");function mm(t,n){t.get(Ct).load(UM);let e=t.get(HM),i=t.get(J),r=t.get(pt),o=t.get(Et),s=t.get(li),a=t.get(ze,null,{optional:!0})||t.get(ft).createRenderer(null,null),c=new Pa(n),l=t.get(GM,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||s.value,!i.body||!("showPopover"in i.body)?c.usePopover=!1:c.usePopover=n?.usePopover??l;let d=i.createElement("div"),f=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),f.appendChild(d),c.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let h=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Cb(h)?h.after(f):h?.type==="parent"?h.element.appendChild(f):e.getContainerElement().appendChild(f),new lm(new zl(d,o,t),f,d,c,t.get(L),t.get(VM),i,t.get(Ai),t.get(jM),n?.disableAnimations??t.get(Vr,null,{optional:!0})==="NoopAnimations",t.get(He),a)}var qM=(()=>{class t{scrollStrategies=u(LM);_positionBuilder=u($M);_injector=u(me);create(e){return mm(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var Db=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({providers:[qM],imports:[Te,im,Vl,Vl]})}return t})();var gH=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],vH=["mat-icon, [matMenuItemIcon]","*"];function yH(t,n){t&1&&(Xn(),y(0,"svg",2),K(1,"polygon",3),_())}var _H=["*"];function bH(t,n){if(t&1){let e=zt();rt(0,"div",0),of("click",function(){lt(e);let r=O();return dt(r.closed.emit("click"))})("animationstart",function(r){lt(e);let o=O();return dt(o._onAnimationStart(r.animationName))})("animationend",function(r){lt(e);let o=O();return dt(o._onAnimationDone(r.animationName))})("animationcancel",function(r){lt(e);let o=O();return dt(o._onAnimationDone(r.animationName))}),rt(1,"div",1),A(2),ht()()}if(t&2){let e=O();En(e._classList),Z("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),sn("id",e.panelId),ge("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var Eb=new b("MAT_MENU_PANEL"),Gl=(()=>{class t{_elementRef=u(U);_document=u(J);_focusMonitor=u(Gi);_parentMenu=u(Eb,{optional:!0});_changeDetectorRef=u(Je);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new I;_focused=new I;_highlighted=!1;_triggersSubmenu=!1;constructor(){u(Ct).load(Rn),this._parentMenu?.addItem?.(this)}focus(e,i){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,i):this._getHostElement().focus(i),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),i=e.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<i.length;r++)i[r].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(i,r){i&1&&ve("click",function(s){return r._checkDisabled(s)})("mouseenter",function(){return r._handleMouseEnter()}),i&2&&(ge("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),Z("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",j],disableRipple:[2,"disableRipple","disableRipple",j]},exportAs:["matMenuItem"],ngContentSelectors:vH,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(i,r){i&1&&(Ne(gH),A(0),y(1,"span",0),A(2,1),_(),K(3,"div",1),ie(4,yH,2,0,":svg:svg",2)),i&2&&(S(3),V("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),S(),re(r._triggersSubmenu?4:-1))},dependencies:[kh],encapsulation:2})}return t})();var SH=new b("MatMenuContent");var wH=new b("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),xb="_mat-menu-enter",pm="_mat-menu-exit",Ba=(()=>{class t{_elementRef=u(U);_changeDetectorRef=u(Je);_injector=u(me);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Tt();_allItems;_directDescendantItems=new Dn;_classList={};_panelAnimationState="void";_animationDone=new I;_isAnimating=G(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let i=this._previousPanelClass,r=w({},this._classList);i&&i.length&&i.split(" ").forEach(o=>{r[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{r[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=r}_previousPanelClass="";get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new se;close=this.closed;panelId=u(pt).getId("mat-menu-panel-");constructor(){let e=u(wH);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new mr(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Ot(this._directDescendantItems),Xe(e=>un(...e.map(i=>i._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let i=this._keyManager;if(this._panelAnimationState==="enter"&&i.activeItem?._hasFocus()){let r=e.toArray(),o=Math.max(0,Math.min(r.length-1,i.activeItemIndex||0));r[o]&&!r[o].disabled?i.setActiveItem(o):i.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Ot(this._directDescendantItems),Xe(i=>un(...i.map(r=>r._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let i=e.keyCode,r=this._keyManager;switch(i){case 27:Ma(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(i===38||i===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=jt(()=>{let i=this._resolvePanel();if(!i||!i.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(e).setFirstItemActive(),!r.activeItem&&i&&i.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,i=this.yPosition){this._classList=X(w({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":i==="above","mat-menu-below":i==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let i=e===pm;(i||e===xb)&&(i&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(i?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===xb||e===pm)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let i=this._resolvePanel();i&&(i.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(pm),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?xb:pm)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Ot(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(i=>i._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-menu"]],contentQueries:function(i,r,o){if(i&1&&mt(o,SH,5)(o,Gl,5)(o,Gl,4),i&2){let s;Y(s=Q())&&(r.lazyContent=s.first),Y(s=Q())&&(r._allItems=s),Y(s=Q())&&(r.items=s)}},viewQuery:function(i,r){if(i&1&&$t(bt,5),i&2){let o;Y(o=Q())&&(r.templateRef=o.first)}},hostVars:3,hostBindings:function(i,r){i&2&&ge("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",j],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:j(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[ye([{provide:Eb,useExisting:t}])],ngContentSelectors:_H,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(i,r){i&1&&(Ne(),tf(0,bH,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2})}return t})(),CH=new b("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(me);return()=>fm(t)}});var La=new WeakMap,DH=(()=>{class t{_canHaveBackdrop;_element=u(U);_viewContainerRef=u(it);_menuItemInstance=u(Gl,{optional:!0,self:!0});_dir=u(li,{optional:!0});_focusMonitor=u(Gi);_ngZone=u(L);_injector=u(me);_scrollStrategy=u(CH);_changeDetectorRef=u(Je);_animationsDisabled=Tt();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=pe.EMPTY;_menuCloseSubscription=pe.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(i=>{this._destroyMenu(i),(i==="click"||i==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(i)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let i=u(Eb,{optional:!0});this._parentMaterialMenu=i instanceof Ba?i:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&La.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let i=this._menu;if(this._menuOpen||!i)return;this._pendingRemoval?.unsubscribe();let r=La.get(i);La.set(i,this),r&&r!==this&&r._closeMenu();let o=this._createOverlay(i),s=o.getConfig(),a=s.positionStrategy;this._setPosition(i,a),this._canHaveBackdrop?s.hasBackdrop=i.hasBackdrop==null?!this._triggersSubmenu():i.hasBackdrop:s.hasBackdrop=i.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(i)),i.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),i.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,i.direction=this.dir,e&&i.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),i instanceof Ba&&(i._setIsOpen(!0),i._directDescendantItems.changes.pipe(Be(i.close)).subscribe(()=>{a.withLockedPosition(!1).reapplyLastPosition(),a.withLockedPosition(!0)}))}focus(e,i){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,i):this._element.nativeElement.focus(i)}_destroyMenu(e){let i=this._overlayRef,r=this._menu;!i||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof Ba&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(yt(1)).subscribe(()=>{i.detach(),La.has(r)||r.lazyContent?.detach()}),r._setIsOpen(!1)):(i.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&La.delete(r),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let i=this._getOverlayConfig(e);this._subscribeToPositions(e,i.positionStrategy),this._overlayRef=mm(this._injector,i),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof Ba&&this._menu._handleKeydown(r)})}return this._overlayRef}_getOverlayConfig(e){return new Pa({positionStrategy:hm(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,i){e.setPositionClasses&&i.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let o=r.connectionPair.overlayX==="start"?"after":"before",s=r.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,s)})})}_setPosition(e,i){let[r,o]=e.xPosition==="before"?["end","start"]:["start","end"],[s,a]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[c,l]=[s,a],[d,f]=[r,o],h=0;if(this._triggersSubmenu()){if(f=r=e.xPosition==="before"?"start":"end",o=d=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let m=this._parentMaterialMenu.items.first;this._parentInnerPadding=m?m._getHostElement().offsetTop:0}h=s==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(c=s==="top"?"bottom":"top",l=a==="top"?"bottom":"top");i.withPositions([{originX:r,originY:c,overlayX:d,overlayY:s,offsetY:h},{originX:o,originY:c,overlayX:f,overlayY:s,offsetY:h},{originX:r,originY:l,overlayX:d,overlayY:a,offsetY:-h},{originX:o,originY:l,overlayX:f,overlayY:a,offsetY:-h}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),i=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:W(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Me(s=>this._menuOpen&&s!==this._menuItemInstance)):W();return un(e,r,o,i)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new co(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return La.get(e)===this}_triggerIsAriaDisabled(){return j(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(i){Wo()};static \u0275dir=x({type:t})}return t})(),WM=(()=>{class t extends DH{_cleanupTouchstart;_hoverSubscription=pe.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new se;onMenuOpen=this.menuOpened;menuClosed=new se;onMenuClose=this.menuClosed;constructor(){super(!0);let e=u(ze);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",i=>{as(i)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){ss(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let i=e.keyCode;(i===13||i===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(i===39&&this.dir==="ltr"||i===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(i,r){i&1&&ve("click",function(s){return r._handleClick(s)})("mousedown",function(s){return r._handleMousedown(s)})("keydown",function(s){return r._handleKeydown(s)}),i&2&&ge("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[le]})}return t})();var KM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({imports:[eo,Db,Te,Kh]})}return t})();var YM=(()=>{class t{editionLabel(e){switch(e){case v.Base:return" ";case v.PoK:return"PoK";case v.TE:return"TE"}}constructor(){this.matIconRegistry=u(Ph),this.domSanitizer=u(sl),this.settingsService=u(zi),this.settingsLabel=$e(()=>this.settingsService.settings().editions.map(e=>this.editionLabel(e)).join(" + ")||"No edition"),this.matIconRegistry.addSvgIcon("arborec",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/arborec.svg")).addSvgIcon("barony of letnev",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/barony of letnev.svg")).addSvgIcon("clan of saar",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/clan of saar.svg")).addSvgIcon("embers of muat",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/embers of muat.svg")).addSvgIcon("emirates of hacan",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/emirates of hacan.svg")).addSvgIcon("federation of sol",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/federation of sol.svg")).addSvgIcon("ghosts of creuss",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/ghosts of creuss.svg")).addSvgIcon("l1z1x mindnet",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/l1z1x mindnet.svg")).addSvgIcon("mentak coalition",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/mentak coalition.svg")).addSvgIcon("naalu collective",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/naalu collective.svg")).addSvgIcon("nekro virus",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/nekro virus.svg")).addSvgIcon("sardakk n'orr",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/sardakk n'orr.svg")).addSvgIcon("universities of jol-nar",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/universities of jol-nar.svg")).addSvgIcon("winnu",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/winnu.svg")).addSvgIcon("xxcha kingdom",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/xxcha kingdom.svg")).addSvgIcon("argent flight",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/argent flight.svg")).addSvgIcon("empyrean",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/empyrean.svg")).addSvgIcon("mahact gene-sorcerers",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/mahact gene-sorcerers.svg")).addSvgIcon("naaz-rokha alliance",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/naaz-rokha alliance.svg")).addSvgIcon("nomad",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/nomad.svg")).addSvgIcon("titans of ul",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/titans of ul.svg")).addSvgIcon("vuil'raith cabal",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/vuil'raith cabal.svg")).addSvgIcon("yin brotherhood",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/yin brotherhood.svg")).addSvgIcon("yssaril tribes",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/yssaril tribes.svg"))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=k({type:t,selectors:[["app-root"]],standalone:!1,decls:17,vars:2,consts:[["menu","matMenu"],["mat-button","",3,"matMenuTriggerFor"],["mat-menu-item","","routerLink","/settings"],["mat-menu-item","","routerLink","/tech"],["mat-menu-item","","routerLink","/draft"],["mat-menu-item","","routerLink","/slice"]],template:function(i,r){if(i&1&&(y(0,"mat-toolbar")(1,"button",1)(2,"mat-icon"),M(3,"menu"),_()(),y(4,"mat-menu",null,0)(6,"button",2),M(7,"Settings"),_(),y(8,"button",3),M(9,"Tech"),_(),y(10,"button",4),M(11,"Draft"),_(),y(12,"button",5),M(13,"Slice Generator"),_()(),y(14,"span"),M(15),_()(),K(16,"router-outlet")),i&2){let o=jn(5);S(),V("matMenuTriggerFor",o),S(14),St("Siggis TI4 Buddy ",r.settingsLabel())}},dependencies:[tm,Ba,Gl,WM,to,Ra,_l,ya],encapsulation:2})}}return t})();var Ee=(function(t){return t[t.State=0]="State",t[t.Transition=1]="Transition",t[t.Sequence=2]="Sequence",t[t.Group=3]="Group",t[t.Animate=4]="Animate",t[t.Keyframes=5]="Keyframes",t[t.Style=6]="Style",t[t.Trigger=7]="Trigger",t[t.Reference=8]="Reference",t[t.AnimateChild=9]="AnimateChild",t[t.AnimateRef=10]="AnimateRef",t[t.Query=11]="Query",t[t.Stagger=12]="Stagger",t})(Ee||{}),ui="*";function QM(t,n=null){return{type:Ee.Sequence,steps:t,options:n}}function Ib(t){return{type:Ee.Style,styles:t,offset:null}}var yr=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(n=0,e=0){this.totalTime=n+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(n=>n()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(n){this._position=this.totalTime?n*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},Va=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(n){this.players=n;let e=0,i=0,r=0,o=this.players.length;o==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(s=>{s.onDone(()=>{++e==o&&this._onFinish()}),s.onDestroy(()=>{++i==o&&this._onDestroy()}),s.onStart(()=>{++r==o&&this._onStart()})}),this.totalTime=this.players.reduce((s,a)=>Math.max(s,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this.players.forEach(n=>n.init())}onStart(n){this._onStartFns.push(n)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(n=>n()),this._onStartFns=[])}onDone(n){this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(n=>n.play())}pause(){this.players.forEach(n=>n.pause())}restart(){this.players.forEach(n=>n.restart())}finish(){this._onFinish(),this.players.forEach(n=>n.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(n=>n.destroy()),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this.players.forEach(n=>n.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(n){let e=n*this.totalTime;this.players.forEach(i=>{let r=i.totalTime?Math.min(1,e/i.totalTime):1;i.setPosition(r)})}getPosition(){let n=this.players.reduce((e,i)=>e===null||i.totalTime>e.totalTime?i:e,null);return n!=null?n.getPosition():0}beforeDestroy(){this.players.forEach(n=>{n.beforeDestroy&&n.beforeDestroy()})}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},ql="!";function ZM(t){return new D(3e3,!1)}function EH(){return new D(3100,!1)}function IH(){return new D(3101,!1)}function NH(t){return new D(3001,!1)}function MH(t){return new D(3003,!1)}function TH(t){return new D(3004,!1)}function JM(t,n){return new D(3005,!1)}function eT(){return new D(3006,!1)}function tT(){return new D(3007,!1)}function nT(t,n){return new D(3008,!1)}function iT(t){return new D(3002,!1)}function rT(t,n,e,i,r){return new D(3010,!1)}function oT(){return new D(3011,!1)}function sT(){return new D(3012,!1)}function aT(){return new D(3200,!1)}function cT(){return new D(3202,!1)}function lT(){return new D(3013,!1)}function dT(t){return new D(3014,!1)}function uT(t){return new D(3015,!1)}function fT(t){return new D(3016,!1)}function hT(t,n){return new D(3404,!1)}function kH(t){return new D(3502,!1)}function mT(t){return new D(3503,!1)}function pT(){return new D(3300,!1)}function gT(t){return new D(3504,!1)}function vT(t){return new D(3301,!1)}function yT(t,n){return new D(3302,!1)}function _T(t){return new D(3303,!1)}function bT(t,n){return new D(3400,!1)}function ST(t){return new D(3401,!1)}function wT(t){return new D(3402,!1)}function CT(t,n){return new D(3505,!1)}function _r(t){switch(t.length){case 0:return new yr;case 1:return t[0];default:return new Va(t)}}function kb(t,n,e=new Map,i=new Map){let r=[],o=[],s=-1,a=null;if(n.forEach(c=>{let l=c.get("offset"),d=l==s,f=d&&a||new Map;c.forEach((h,m)=>{let p=m,C=h;if(m!=="offset")switch(p=t.normalizePropertyName(p,r),C){case ql:C=e.get(m);break;case ui:C=i.get(m);break;default:C=t.normalizeStyleValue(m,p,C,r);break}f.set(p,C)}),d||o.push(f),a=f,s=l}),r.length)throw kH(r);return o}function gm(t,n,e,i){switch(n){case"start":t.onStart(()=>i(e&&Nb(e,"start",t)));break;case"done":t.onDone(()=>i(e&&Nb(e,"done",t)));break;case"destroy":t.onDestroy(()=>i(e&&Nb(e,"destroy",t)));break}}function Nb(t,n,e){let i=e.totalTime,r=!!e.disabled,o=vm(t.element,t.triggerName,t.fromState,t.toState,n||t.phaseName,i??t.totalTime,r),s=t._data;return s!=null&&(o._data=s),o}function vm(t,n,e,i,r="",o=0,s){return{element:t,triggerName:n,fromState:e,toState:i,phaseName:r,totalTime:o,disabled:!!s}}function gn(t,n,e){let i=t.get(n);return i||t.set(n,i=e),i}function Rb(t){let n=t.indexOf(":"),e=t.substring(1,n),i=t.slice(n+1);return[e,i]}var RH=typeof document>"u"?null:document.documentElement;function ym(t){let n=t.parentNode||t.host||null;return n===RH?null:n}function AH(t){return t.substring(1,6)=="ebkit"}var hs=null,XM=!1;function DT(t){hs||(hs=OH()||{},XM=hs.style?"WebkitAppearance"in hs.style:!1);let n=!0;return hs.style&&!AH(t)&&(n=t in hs.style,!n&&XM&&(n="Webkit"+t.charAt(0).toUpperCase()+t.slice(1)in hs.style)),n}function OH(){return typeof document<"u"?document.body:null}function Ab(t,n){for(;n;){if(n===t)return!0;n=ym(n)}return!1}function Ob(t,n,e){if(e)return Array.from(t.querySelectorAll(n));let i=t.querySelector(n);return i?[i]:[]}var FH=1e3,Fb="{{",PH="}}",Pb="ng-enter",_m="ng-leave",Wl="ng-trigger",Kl=".ng-trigger",Lb="ng-animating",bm=".ng-animating";function qi(t){if(typeof t=="number")return t;let n=t.match(/^(-?[\.\d]+)(m?s)/);return!n||n.length<2?0:Mb(parseFloat(n[1]),n[2])}function Mb(t,n){return n==="s"?t*FH:t}function Yl(t,n,e){return typeof t=="object"&&t!==null&&Object.hasOwn(t,"duration")?t:BH(t,n,e)}var LH=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function BH(t,n,e){let i,r=0,o="";if(typeof t=="string"){let s=t.match(LH);if(s===null)return n.push(ZM(t)),{duration:0,delay:0,easing:""};i=Mb(parseFloat(s[1]),s[2]);let a=s[3];a!=null&&(r=Mb(parseFloat(a),s[4]));let c=s[5];c&&(o=c)}else i=t;if(!e){let s=!1,a=n.length;i<0&&(n.push(EH()),s=!0),r<0&&(n.push(IH()),s=!0),s&&n.splice(a,0,ZM(t))}return{duration:i,delay:r,easing:o}}function xT(t){return t.length?t[0]instanceof Map?t:t.map(n=>new Map(Object.entries(n))):[]}function fi(t,n,e){n.forEach((i,r)=>{let o=Sm(r);e&&!e.has(r)&&e.set(r,t.style[o]),t.style[o]=i})}function lo(t,n){n.forEach((e,i)=>{let r=Sm(i);t.style[r]=""})}function ja(t){return Array.isArray(t)?t.length==1?t[0]:QM(t):t}function ET(t,n,e){let i=n.params||{},r=Bb(t);r.length&&r.forEach(o=>{Object.hasOwn(i,o)||e.push(NH(o))})}var Tb=new RegExp(`${Fb}\\s*(.+?)\\s*${PH}`,"g");function Bb(t){let n=[];if(typeof t=="string"){let e;for(;e=Tb.exec(t);)n.push(e[1]);Tb.lastIndex=0}return n}function Ua(t,n,e){let i=`${t}`,r=i.replace(Tb,(o,s)=>{let a=n[s];return a==null&&(e.push(MH(s)),a=""),a.toString()});return r==i?t:r}var VH=/-+([a-z0-9])/g;function Sm(t){return t.replace(VH,(...n)=>n[1].toUpperCase())}function IT(t,n){return t===0||n===0}function NT(t,n,e){if(e.size&&n.length){let i=n[0],r=[];if(e.forEach((o,s)=>{i.has(s)||r.push(s),i.set(s,o)}),r.length)for(let o=1;o<n.length;o++){let s=n[o];r.forEach(a=>s.set(a,wm(t,a)))}}return n}function vn(t,n,e){switch(n.type){case Ee.Trigger:return t.visitTrigger(n,e);case Ee.State:return t.visitState(n,e);case Ee.Transition:return t.visitTransition(n,e);case Ee.Sequence:return t.visitSequence(n,e);case Ee.Group:return t.visitGroup(n,e);case Ee.Animate:return t.visitAnimate(n,e);case Ee.Keyframes:return t.visitKeyframes(n,e);case Ee.Style:return t.visitStyle(n,e);case Ee.Reference:return t.visitReference(n,e);case Ee.AnimateChild:return t.visitAnimateChild(n,e);case Ee.AnimateRef:return t.visitAnimateRef(n,e);case Ee.Query:return t.visitQuery(n,e);case Ee.Stagger:return t.visitStagger(n,e);default:throw TH(n.type)}}function wm(t,n){return window.getComputedStyle(t)[n]}var tS=(()=>{class t{validateStyleProperty(e){return DT(e)}containsElement(e,i){return Ab(e,i)}getParentElement(e){return ym(e)}query(e,i,r){return Ob(e,i,r)}computeStyle(e,i,r){return r||""}animate(e,i,r,o,s,a=[],c){return new yr(r,o)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})(),ps=class{static NOOP=new tS},gs=class{};var jH=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),Im=class extends gs{normalizePropertyName(n,e){return Sm(n)}normalizeStyleValue(n,e,i,r){let o="",s=i.toString().trim();if(jH.has(e)&&i!==0&&i!=="0")if(typeof i=="number")o="px";else{let a=i.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&a[1].length==0&&r.push(JM(n,i))}return s+o}};var Nm="*";function UH(t,n){let e=[];return typeof t=="string"?t.split(/\s*,\s*/).forEach(i=>HH(i,e,n)):e.push(t),e}function HH(t,n,e){if(t[0]==":"){let c=zH(t,e);if(typeof c=="function"){n.push(c);return}t=c}let i=t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(i==null||i.length<4)return e.push(uT(t)),n;let r=i[1],o=i[2],s=i[3];n.push(MT(r,s));let a=r==Nm&&s==Nm;o[0]=="<"&&!a&&n.push(MT(s,r))}function zH(t,n){switch(t){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,i)=>parseFloat(i)>parseFloat(e);case":decrement":return(e,i)=>parseFloat(i)<parseFloat(e);default:return n.push(fT(t)),"* => *"}}var Cm=new Set(["true","1"]),Dm=new Set(["false","0"]);function MT(t,n){let e=Cm.has(t)||Dm.has(t),i=Cm.has(n)||Dm.has(n);return(r,o)=>{let s=t==Nm||t==r,a=n==Nm||n==o;return!s&&e&&typeof r=="boolean"&&(s=r?Cm.has(t):Dm.has(t)),!a&&i&&typeof o=="boolean"&&(a=o?Cm.has(n):Dm.has(n)),s&&a}}var VT=":self",$H=new RegExp(`s*${VT}s*,?`,"g");function jT(t,n,e,i){return new $b(t).build(n,e,i)}var TT="",$b=class{_driver;constructor(n){this._driver=n}build(n,e,i){let r=new Gb(e);return this._resetContextStyleTimingState(r),vn(this,ja(n),r)}_resetContextStyleTimingState(n){n.currentQuerySelector=TT,n.collectedStyles=new Map,n.collectedStyles.set(TT,new Map),n.currentTime=0}visitTrigger(n,e){let i=e.queryCount=0,r=e.depCount=0,o=[],s=[];return n.name.charAt(0)=="@"&&e.errors.push(eT()),n.definitions.forEach(a=>{if(this._resetContextStyleTimingState(e),a.type==Ee.State){let c=a,l=c.name;l.toString().split(/\s*,\s*/).forEach(d=>{c.name=d,o.push(this.visitState(c,e))}),c.name=l}else if(a.type==Ee.Transition){let c=this.visitTransition(a,e);i+=c.queryCount,r+=c.depCount,s.push(c)}else e.errors.push(tT())}),{type:Ee.Trigger,name:n.name,states:o,transitions:s,queryCount:i,depCount:r,options:null}}visitState(n,e){let i=this.visitStyle(n.styles,e),r=n.options&&n.options.params||null;if(i.containsDynamicStyles){let o=new Set,s=r||{};i.styles.forEach(a=>{a instanceof Map&&a.forEach(c=>{Bb(c).forEach(l=>{Object.hasOwn(s,l)||o.add(l)})})}),o.size&&e.errors.push(nT(n.name,[...o.values()]))}return{type:Ee.State,name:n.name,style:i,options:r?{params:r}:null}}visitTransition(n,e){e.queryCount=0,e.depCount=0;let i=vn(this,ja(n.animation),e),r=UH(n.expr,e.errors);return{type:Ee.Transition,matchers:r,animation:i,queryCount:e.queryCount,depCount:e.depCount,options:ms(n.options)}}visitSequence(n,e){return{type:Ee.Sequence,steps:n.steps.map(i=>vn(this,i,e)),options:ms(n.options)}}visitGroup(n,e){let i=e.currentTime,r=0,o=n.steps.map(s=>{e.currentTime=i;let a=vn(this,s,e);return r=Math.max(r,e.currentTime),a});return e.currentTime=r,{type:Ee.Group,steps:o,options:ms(n.options)}}visitAnimate(n,e){let i=KH(n.timings,e.errors);e.currentAnimateTimings=i;let r,o=n.styles?n.styles:Ib({});if(o.type==Ee.Keyframes)r=this.visitKeyframes(o,e);else{let s=n.styles,a=!1;if(!s){a=!0;let l={};i.easing&&(l.easing=i.easing),s=Ib(l)}e.currentTime+=i.duration+i.delay;let c=this.visitStyle(s,e);c.isEmptyStep=a,r=c}return e.currentAnimateTimings=null,{type:Ee.Animate,timings:i,style:r,options:null}}visitStyle(n,e){let i=this._makeStyleAst(n,e);return this._validateStyleAst(i,e),i}_makeStyleAst(n,e){let i=[],r=Array.isArray(n.styles)?n.styles:[n.styles];for(let a of r)typeof a=="string"?a===ui?i.push(a):e.errors.push(iT(a)):i.push(new Map(Object.entries(a)));let o=!1,s=null;return i.forEach(a=>{if(a instanceof Map&&(a.has("easing")&&(s=a.get("easing"),a.delete("easing")),!o)){for(let c of a.values())if(c.toString().indexOf(Fb)>=0){o=!0;break}}}),{type:Ee.Style,styles:i,easing:s,offset:n.offset,containsDynamicStyles:o,options:null}}_validateStyleAst(n,e){let i=e.currentAnimateTimings,r=e.currentTime,o=e.currentTime;i&&o>0&&(o-=i.duration+i.delay),n.styles.forEach(s=>{typeof s!="string"&&s.forEach((a,c)=>{let l=e.collectedStyles.get(e.currentQuerySelector),d=l.get(c),f=!0;d&&(o!=r&&o>=d.startTime&&r<=d.endTime&&(e.errors.push(rT(c,d.startTime,d.endTime,o,r)),f=!1),o=d.startTime),f&&l.set(c,{startTime:o,endTime:r}),e.options&&ET(a,e.options,e.errors)})})}visitKeyframes(n,e){let i={type:Ee.Keyframes,styles:[],options:null};if(!e.currentAnimateTimings)return e.errors.push(oT()),i;let r=1,o=0,s=[],a=!1,c=!1,l=0,d=n.steps.map(N=>{let R=this._makeStyleAst(N,e),te=R.offset!=null?R.offset:WH(R.styles),Ae=0;return te!=null&&(o++,Ae=R.offset=te),c=c||Ae<0||Ae>1,a=a||Ae<l,l=Ae,s.push(Ae),R});c&&e.errors.push(sT()),a&&e.errors.push(aT());let f=n.steps.length,h=0;o>0&&o<f?e.errors.push(cT()):o==0&&(h=r/(f-1));let m=f-1,p=e.currentTime,C=e.currentAnimateTimings,E=C.duration;return d.forEach((N,R)=>{let te=h>0?R==m?1:h*R:s[R],Ae=te*E;e.currentTime=p+C.delay+Ae,C.duration=Ae,this._validateStyleAst(N,e),N.offset=te,i.styles.push(N)}),i}visitReference(n,e){return{type:Ee.Reference,animation:vn(this,ja(n.animation),e),options:ms(n.options)}}visitAnimateChild(n,e){return e.depCount++,{type:Ee.AnimateChild,options:ms(n.options)}}visitAnimateRef(n,e){return{type:Ee.AnimateRef,animation:this.visitReference(n.animation,e),options:ms(n.options)}}visitQuery(n,e){let i=e.currentQuerySelector,r=n.options||{};e.queryCount++,e.currentQuery=n;let[o,s]=GH(n.selector);e.currentQuerySelector=i.length?i+" "+o:o,gn(e.collectedStyles,e.currentQuerySelector,new Map);let a=vn(this,ja(n.animation),e);return e.currentQuery=null,e.currentQuerySelector=i,{type:Ee.Query,selector:o,limit:r.limit||0,optional:!!r.optional,includeSelf:s,animation:a,originalSelector:n.selector,options:ms(n.options)}}visitStagger(n,e){e.currentQuery||e.errors.push(lT());let i=n.timings==="full"?{duration:0,delay:0,easing:"full"}:Yl(n.timings,e.errors,!0);return{type:Ee.Stagger,animation:vn(this,ja(n.animation),e),timings:i,options:null}}};function GH(t){let n=!!t.split(/\s*,\s*/).find(e=>e==VT);return n&&(t=t.replace($H,"")),t=t.replace(/@\*/g,Kl).replace(/@\w+/g,e=>Kl+"-"+e.slice(1)).replace(/:animating/g,bm),[t,n]}function qH(t){return t?w({},t):null}var Gb=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(n){this.errors=n}};function WH(t){if(typeof t=="string")return null;let n=null;if(Array.isArray(t))t.forEach(e=>{if(e instanceof Map&&e.has("offset")){let i=e;n=parseFloat(i.get("offset")),i.delete("offset")}});else if(t instanceof Map&&t.has("offset")){let e=t;n=parseFloat(e.get("offset")),e.delete("offset")}return n}function KH(t,n){if(typeof t=="object"&&t!==null&&Object.hasOwn(t,"duration"))return t;if(typeof t=="number"){let o=Yl(t,n).duration;return Vb(o,0,"")}let e=t;if(e.split(/\s+/).some(o=>o.charAt(0)=="{"&&o.charAt(1)=="{")){let o=Vb(0,0,"");return o.dynamic=!0,o.strValue=e,o}let r=Yl(e,n);return Vb(r.duration,r.delay,r.easing)}function ms(t){return t?(t=w({},t),t.params&&(t.params=qH(t.params))):t={},t}function Vb(t,n,e){return{duration:t,delay:n,easing:e}}function nS(t,n,e,i,r,o,s=null,a=!1){return{type:1,element:t,keyframes:n,preStyleProps:e,postStyleProps:i,duration:r,delay:o,totalTime:r+o,easing:s,subTimeline:a}}var Zl=class{_map=new Map;get(n){return this._map.get(n)||[]}append(n,e){let i=this._map.get(n);i||this._map.set(n,i=[]),i.push(...e)}has(n){return this._map.has(n)}clear(){this._map.clear()}},YH=1,QH=":enter",ZH=new RegExp(QH,"g"),XH=":leave",JH=new RegExp(XH,"g");function UT(t,n,e,i,r,o=new Map,s=new Map,a,c,l=[]){return new qb().buildKeyframes(t,n,e,i,r,o,s,a,c,l)}var qb=class{buildKeyframes(n,e,i,r,o,s,a,c,l,d=[]){l=l||new Zl;let f=new Wb(n,e,l,r,o,d,[]);f.options=c;let h=c.delay?qi(c.delay):0;f.currentTimeline.delayNextStep(h),f.currentTimeline.setStyles([s],null,f.errors,c),vn(this,i,f);let m=f.timelines.filter(p=>p.containsAnimation());if(m.length&&a.size){let p;for(let C=m.length-1;C>=0;C--){let E=m[C];if(E.element===e){p=E;break}}p&&!p.allowOnlyTimelineStyles()&&p.setStyles([a],null,f.errors,c)}return m.length?m.map(p=>p.buildKeyframes()):[nS(e,[],[],[],0,h,"",!1)]}visitTrigger(n,e){}visitState(n,e){}visitTransition(n,e){}visitAnimateChild(n,e){let i=e.subInstructions.get(e.element);if(i){let r=e.createSubContext(n.options),o=e.currentTimeline.currentTime,s=this._visitSubInstructions(i,r,r.options);o!=s&&e.transformIntoNewTimeline(s)}e.previousNode=n}visitAnimateRef(n,e){let i=e.createSubContext(n.options);i.transformIntoNewTimeline(),this._applyAnimationRefDelays([n.options,n.animation.options],e,i),this.visitReference(n.animation,i),e.transformIntoNewTimeline(i.currentTimeline.currentTime),e.previousNode=n}_applyAnimationRefDelays(n,e,i){for(let r of n){let o=r?.delay;if(o){let s=typeof o=="number"?o:qi(Ua(o,r?.params??{},e.errors));i.delayNextStep(s)}}}_visitSubInstructions(n,e,i){let o=e.currentTimeline.currentTime,s=i.duration!=null?qi(i.duration):null,a=i.delay!=null?qi(i.delay):null;return s!==0&&n.forEach(c=>{let l=e.appendInstructionToTimeline(c,s,a);o=Math.max(o,l.duration+l.delay)}),o}visitReference(n,e){e.updateOptions(n.options,!0),vn(this,n.animation,e),e.previousNode=n}visitSequence(n,e){let i=e.subContextCount,r=e,o=n.options;if(o&&(o.params||o.delay)&&(r=e.createSubContext(o),r.transformIntoNewTimeline(),o.delay!=null)){r.previousNode.type==Ee.Style&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=Mm);let s=qi(o.delay);r.delayNextStep(s)}n.steps.length&&(n.steps.forEach(s=>vn(this,s,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>i&&r.transformIntoNewTimeline()),e.previousNode=n}visitGroup(n,e){let i=[],r=e.currentTimeline.currentTime,o=n.options&&n.options.delay?qi(n.options.delay):0;n.steps.forEach(s=>{let a=e.createSubContext(n.options);o&&a.delayNextStep(o),vn(this,s,a),r=Math.max(r,a.currentTimeline.currentTime),i.push(a.currentTimeline)}),i.forEach(s=>e.currentTimeline.mergeTimelineCollectedStyles(s)),e.transformIntoNewTimeline(r),e.previousNode=n}_visitTiming(n,e){if(n.dynamic){let i=n.strValue,r=e.params?Ua(i,e.params,e.errors):i;return Yl(r,e.errors)}else return{duration:n.duration,delay:n.delay,easing:n.easing}}visitAnimate(n,e){let i=e.currentAnimateTimings=this._visitTiming(n.timings,e),r=e.currentTimeline;i.delay&&(e.incrementTime(i.delay),r.snapshotCurrentStyles());let o=n.style;o.type==Ee.Keyframes?this.visitKeyframes(o,e):(e.incrementTime(i.duration),this.visitStyle(o,e),r.applyStylesToKeyframe()),e.currentAnimateTimings=null,e.previousNode=n}visitStyle(n,e){let i=e.currentTimeline,r=e.currentAnimateTimings;!r&&i.hasCurrentStyleProperties()&&i.forwardFrame();let o=r&&r.easing||n.easing;n.isEmptyStep?i.applyEmptyStep(o):i.setStyles(n.styles,o,e.errors,e.options),e.previousNode=n}visitKeyframes(n,e){let i=e.currentAnimateTimings,r=e.currentTimeline.duration,o=i.duration,a=e.createSubContext().currentTimeline;a.easing=i.easing,n.styles.forEach(c=>{let l=c.offset||0;a.forwardTime(l*o),a.setStyles(c.styles,c.easing,e.errors,e.options),a.applyStylesToKeyframe()}),e.currentTimeline.mergeTimelineCollectedStyles(a),e.transformIntoNewTimeline(r+o),e.previousNode=n}visitQuery(n,e){let i=e.currentTimeline.currentTime,r=n.options||{},o=r.delay?qi(r.delay):0;o&&(e.previousNode.type===Ee.Style||i==0&&e.currentTimeline.hasCurrentStyleProperties())&&(e.currentTimeline.snapshotCurrentStyles(),e.previousNode=Mm);let s=i,a=e.invokeQuery(n.selector,n.originalSelector,n.limit,n.includeSelf,!!r.optional,e.errors);e.currentQueryTotal=a.length;let c=null;a.forEach((l,d)=>{e.currentQueryIndex=d;let f=e.createSubContext(n.options,l);o&&f.delayNextStep(o),l===e.element&&(c=f.currentTimeline),vn(this,n.animation,f),f.currentTimeline.applyStylesToKeyframe();let h=f.currentTimeline.currentTime;s=Math.max(s,h)}),e.currentQueryIndex=0,e.currentQueryTotal=0,e.transformIntoNewTimeline(s),c&&(e.currentTimeline.mergeTimelineCollectedStyles(c),e.currentTimeline.snapshotCurrentStyles()),e.previousNode=n}visitStagger(n,e){let i=e.parentContext,r=e.currentTimeline,o=n.timings,s=Math.abs(o.duration),a=s*(e.currentQueryTotal-1),c=s*e.currentQueryIndex;switch(o.duration<0?"reverse":o.easing){case"reverse":c=a-c;break;case"full":c=i.currentStaggerTime;break}let d=e.currentTimeline;c&&d.delayNextStep(c);let f=d.currentTime;vn(this,n.animation,e),e.previousNode=n,i.currentStaggerTime=r.currentTime-f+(r.startTime-i.currentTimeline.startTime)}},Mm={},Wb=class t{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=Mm;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(n,e,i,r,o,s,a,c){this._driver=n,this.element=e,this.subInstructions=i,this._enterClassName=r,this._leaveClassName=o,this.errors=s,this.timelines=a,this.currentTimeline=c||new Tm(this._driver,e,0),a.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(n,e){if(!n)return;let i=n,r=this.options;i.duration!=null&&(r.duration=qi(i.duration)),i.delay!=null&&(r.delay=qi(i.delay));let o=i.params;if(o){let s=r.params;s||(s=this.options.params={}),Object.keys(o).forEach(a=>{(!e||!Object.hasOwn(s,a))&&(s[a]=Ua(o[a],s,this.errors))})}}_copyOptions(){let n={};if(this.options){let e=this.options.params;if(e){let i=n.params={};Object.keys(e).forEach(r=>{i[r]=e[r]})}}return n}createSubContext(n=null,e,i){let r=e||this.element,o=new t(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,i||0));return o.previousNode=this.previousNode,o.currentAnimateTimings=this.currentAnimateTimings,o.options=this._copyOptions(),o.updateOptions(n),o.currentQueryIndex=this.currentQueryIndex,o.currentQueryTotal=this.currentQueryTotal,o.parentContext=this,this.subContextCount++,o}transformIntoNewTimeline(n){return this.previousNode=Mm,this.currentTimeline=this.currentTimeline.fork(this.element,n),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(n,e,i){let r={duration:e??n.duration,delay:this.currentTimeline.currentTime+(i??0)+n.delay,easing:""},o=new Kb(this._driver,n.element,n.keyframes,n.preStyleProps,n.postStyleProps,r,n.stretchStartingKeyframe);return this.timelines.push(o),r}incrementTime(n){this.currentTimeline.forwardTime(this.currentTimeline.duration+n)}delayNextStep(n){n>0&&this.currentTimeline.delayNextStep(n)}invokeQuery(n,e,i,r,o,s){let a=[];if(r&&a.push(this.element),n.length>0){n=n.replace(ZH,"."+this._enterClassName),n=n.replace(JH,"."+this._leaveClassName);let c=i!=1,l=this._driver.query(this.element,n,c);i!==0&&(l=i<0?l.slice(l.length+i,l.length):l.slice(0,i)),a.push(...l)}return!o&&a.length==0&&s.push(dT(e)),a}},Tm=class t{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(n,e,i,r){this._driver=n,this.element=e,this.startTime=i,this._elementTimelineStylesLookup=r,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(e),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(e,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(n){let e=this._keyframes.size===1&&this._pendingStyles.size;this.duration||e?(this.forwardTime(this.currentTime+n),e&&this.snapshotCurrentStyles()):this.startTime+=n}fork(n,e){return this.applyStylesToKeyframe(),new t(this._driver,n,e||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=YH,this._loadKeyframe()}forwardTime(n){this.applyStylesToKeyframe(),this.duration=n,this._loadKeyframe()}_updateStyle(n,e){this._localTimelineStyles.set(n,e),this._globalTimelineStyles.set(n,e),this._styleSummary.set(n,{time:this.currentTime,value:e})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(n){n&&this._previousKeyframe.set("easing",n);for(let[e,i]of this._globalTimelineStyles)this._backFill.set(e,i||ui),this._currentKeyframe.set(e,ui);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(n,e,i,r){e&&this._previousKeyframe.set("easing",e);let o=r&&r.params||{},s=ez(n,this._globalTimelineStyles);for(let[a,c]of s){let l=Ua(c,o,i);this._pendingStyles.set(a,l),this._localTimelineStyles.has(a)||this._backFill.set(a,this._globalTimelineStyles.get(a)??ui),this._updateStyle(a,l)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((n,e)=>{this._currentKeyframe.set(e,n)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((n,e)=>{this._currentKeyframe.has(e)||this._currentKeyframe.set(e,n)}))}snapshotCurrentStyles(){for(let[n,e]of this._localTimelineStyles)this._pendingStyles.set(n,e),this._updateStyle(n,e)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let n=[];for(let e in this._currentKeyframe)n.push(e);return n}mergeTimelineCollectedStyles(n){n._styleSummary.forEach((e,i)=>{let r=this._styleSummary.get(i);(!r||e.time>r.time)&&this._updateStyle(i,e.value)})}buildKeyframes(){this.applyStylesToKeyframe();let n=new Set,e=new Set,i=this._keyframes.size===1&&this.duration===0,r=[];this._keyframes.forEach((a,c)=>{let l=new Map([...this._backFill,...a]);l.forEach((d,f)=>{d===ql?n.add(f):d===ui&&e.add(f)}),i||l.set("offset",c/this.duration),r.push(l)});let o=[...n.values()],s=[...e.values()];if(i){let a=r[0],c=new Map(a);a.set("offset",0),c.set("offset",1),r=[a,c]}return nS(this.element,r,o,s,this.duration,this.startTime,this.easing,!1)}},Kb=class extends Tm{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(n,e,i,r,o,s,a=!1){super(n,e,s.delay),this.keyframes=i,this.preStyleProps=r,this.postStyleProps=o,this._stretchStartingKeyframe=a,this.timings={duration:s.duration,delay:s.delay,easing:s.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let n=this.keyframes,{delay:e,duration:i,easing:r}=this.timings;if(this._stretchStartingKeyframe&&e){let o=[],s=i+e,a=e/s,c=new Map(n[0]);c.set("offset",0),o.push(c);let l=new Map(n[0]);l.set("offset",kT(a)),o.push(l);let d=n.length-1;for(let f=1;f<=d;f++){let h=new Map(n[f]),m=h.get("offset"),p=e+m*i;h.set("offset",kT(p/s)),o.push(h)}i=s,e=0,r="",n=o}return nS(this.element,n,this.preStyleProps,this.postStyleProps,i,e,r,!0)}};function kT(t,n=3){let e=Math.pow(10,n-1);return Math.round(t*e)/e}function ez(t,n){let e=new Map,i;return t.forEach(r=>{if(r==="*"){i??=n.keys();for(let o of i)e.set(o,ui)}else for(let[o,s]of r)e.set(o,s)}),e}function RT(t,n,e,i,r,o,s,a,c,l,d,f,h){return{type:0,element:t,triggerName:n,isRemovalTransition:r,fromState:e,fromStyles:o,toState:i,toStyles:s,timelines:a,queriedElements:c,preStyleProps:l,postStyleProps:d,totalTime:f,errors:h}}var jb={},km=class{_triggerName;ast;_stateStyles;constructor(n,e,i){this._triggerName=n,this.ast=e,this._stateStyles=i}match(n,e,i,r){return tz(this.ast.matchers,n,e,i,r)}buildStyles(n,e,i){let r=this._stateStyles.get("*");return n!==void 0&&(r=this._stateStyles.get(n?.toString())||r),r?r.buildStyles(e,i):new Map}build(n,e,i,r,o,s,a,c,l,d){let f=[],h=this.ast.options&&this.ast.options.params||jb,m=a&&a.params||jb,p=this.buildStyles(i,m,f),C=c&&c.params||jb,E=this.buildStyles(r,C,f),N=new Set,R=new Map,te=new Map,Ae=r==="void",kt={params:HT(C,h),delay:this.ast.options?.delay},Le=d?[]:UT(n,e,this.ast.animation,o,s,p,E,kt,l,f),et=0;return Le.forEach(ot=>{et=Math.max(ot.duration+ot.delay,et)}),f.length?RT(e,this._triggerName,i,r,Ae,p,E,[],[],R,te,et,f):(Le.forEach(ot=>{let Rt=ot.element,br=gn(R,Rt,new Set);ot.preStyleProps.forEach(qn=>br.add(qn));let vs=gn(te,Rt,new Set);ot.postStyleProps.forEach(qn=>vs.add(qn)),Rt!==e&&N.add(Rt)}),RT(e,this._triggerName,i,r,Ae,p,E,Le,[...N.values()],R,te,et))}};function tz(t,n,e,i,r){return t.some(o=>o(n,e,i,r))}function HT(t,n){let e=w({},n);return Object.entries(t).forEach(([i,r])=>{r!=null&&(e[i]=r)}),e}var Yb=class{styles;defaultParams;normalizer;constructor(n,e,i){this.styles=n,this.defaultParams=e,this.normalizer=i}buildStyles(n,e){let i=new Map,r=HT(n,this.defaultParams);return this.styles.styles.forEach(o=>{typeof o!="string"&&o.forEach((s,a)=>{s&&(s=Ua(s,r,e));let c=this.normalizer.normalizePropertyName(a,e);s=this.normalizer.normalizeStyleValue(a,c,s,e),i.set(a,s)})}),i}};function nz(t,n,e){return new Qb(t,n,e)}var Qb=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(n,e,i){this.name=n,this.ast=e,this._normalizer=i,e.states.forEach(r=>{let o=r.options&&r.options.params||{};this.states.set(r.name,new Yb(r.style,o,i))}),AT(this.states,"true","1"),AT(this.states,"false","0"),e.transitions.forEach(r=>{this.transitionFactories.push(new km(n,r,this.states))}),this.fallbackTransition=iz(n,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(n,e,i,r){return this.transitionFactories.find(s=>s.match(n,e,i,r))||null}matchStyles(n,e,i){return this.fallbackTransition.buildStyles(n,e,i)}};function iz(t,n,e){let i=[(s,a)=>!0],r={type:Ee.Sequence,steps:[],options:null},o={type:Ee.Transition,animation:r,matchers:i,options:null,queryCount:0,depCount:0};return new km(t,o,n)}function AT(t,n,e){t.has(n)?t.has(e)||t.set(e,t.get(n)):t.has(e)&&t.set(n,t.get(e))}var rz=new Zl,Zb=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(n,e,i){this.bodyNode=n,this._driver=e,this._normalizer=i}register(n,e){let i=[],r=[],o=jT(this._driver,e,i,r);if(i.length)throw mT(i);this._animations.set(n,o)}_buildPlayer(n,e,i){let r=n.element,o=kb(this._normalizer,n.keyframes,e,i);return this._driver.animate(r,o,n.duration,n.delay,n.easing,[],!0)}create(n,e,i={}){let r=[],o=this._animations.get(n),s,a=new Map;if(o?(s=UT(this._driver,e,o,Pb,_m,new Map,new Map,i,rz,r),s.forEach(d=>{let f=gn(a,d.element,new Map);d.postStyleProps.forEach(h=>f.set(h,null))})):(r.push(pT()),s=[]),r.length)throw gT(r);a.forEach((d,f)=>{d.forEach((h,m)=>{d.set(m,this._driver.computeStyle(f,m,ui))})});let c=s.map(d=>{let f=a.get(d.element);return this._buildPlayer(d,new Map,f)}),l=_r(c);return this._playersById.set(n,l),l.onDestroy(()=>this.destroy(n)),this.players.push(l),l}destroy(n){let e=this._getPlayer(n);e.destroy(),this._playersById.delete(n);let i=this.players.indexOf(e);i>=0&&this.players.splice(i,1)}_getPlayer(n){let e=this._playersById.get(n);if(!e)throw vT(n);return e}listen(n,e,i,r){let o=vm(e,"","","");return gm(this._getPlayer(n),i,o,r),()=>{}}command(n,e,i,r){if(i=="register"){this.register(n,r[0]);return}if(i=="create"){let s=r[0]||{};this.create(n,e,s);return}let o=this._getPlayer(n);switch(i){case"play":o.play();break;case"pause":o.pause();break;case"reset":o.reset();break;case"restart":o.restart();break;case"finish":o.finish();break;case"init":o.init();break;case"setPosition":o.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(n);break}}},OT="ng-animate-queued",oz=".ng-animate-queued",Ub="ng-animate-disabled",sz=".ng-animate-disabled",az="ng-star-inserted",cz=".ng-star-inserted",lz=[],zT={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},dz={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},hi="__ng_removed",Xl=class{namespaceId;value;options;get params(){return this.options.params}constructor(n,e=""){this.namespaceId=e;let i=n&&Object.hasOwn(n,"value"),r=i?n.value:n;if(this.value=fz(r),i){let o=n,{value:s}=o,a=Lm(o,["value"]);this.options=a}else this.options={};this.options.params||(this.options.params={})}absorbOptions(n){let e=n.params;if(e){let i=this.options.params;Object.keys(e).forEach(r=>{i[r]==null&&(i[r]=e[r])})}}},Ql="void",Hb=new Xl(Ql),Xb=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(n,e,i){this.id=n,this.hostElement=e,this._engine=i,this._hostClassName="ng-tns-"+n,Gn(e,this._hostClassName)}listen(n,e,i,r){if(!this._triggers.has(e))throw yT(i,e);if(i==null||i.length==0)throw _T(e);if(!hz(i))throw bT(i,e);let o=gn(this._elementListeners,n,[]),s={name:e,phase:i,callback:r};o.push(s);let a=gn(this._engine.statesByElement,n,new Map);return a.has(e)||(Gn(n,Wl),Gn(n,Wl+"-"+e),a.set(e,Hb)),()=>{this._engine.afterFlush(()=>{let c=o.indexOf(s);c>=0&&o.splice(c,1),this._triggers.has(e)||a.delete(e)})}}register(n,e){return this._triggers.has(n)?!1:(this._triggers.set(n,e),!0)}_getTrigger(n){let e=this._triggers.get(n);if(!e)throw ST(n);return e}trigger(n,e,i,r=!0){let o=this._getTrigger(e),s=new Jl(this.id,e,n),a=this._engine.statesByElement.get(n);a||(Gn(n,Wl),Gn(n,Wl+"-"+e),this._engine.statesByElement.set(n,a=new Map));let c=a.get(e),l=new Xl(i,this.id);if(!(i&&Object.hasOwn(i,"value"))&&c&&l.absorbOptions(c.options),a.set(e,l),c||(c=Hb),!(l.value===Ql)&&c.value===l.value){if(!gz(c.params,l.params)){let C=[],E=o.matchStyles(c.value,c.params,C),N=o.matchStyles(l.value,l.params,C);C.length?this._engine.reportError(C):this._engine.afterFlush(()=>{lo(n,E),fi(n,N)})}return}let h=gn(this._engine.playersByElement,n,[]);h.forEach(C=>{C.namespaceId==this.id&&C.triggerName==e&&C.queued&&C.destroy()});let m=o.matchTransition(c.value,l.value,n,l.params),p=!1;if(!m){if(!r)return;m=o.fallbackTransition,p=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:e,transition:m,fromState:c,toState:l,player:s,isFallbackTransition:p}),p||(Gn(n,OT),s.onStart(()=>{Ha(n,OT)})),s.onDone(()=>{let C=this.players.indexOf(s);C>=0&&this.players.splice(C,1);let E=this._engine.playersByElement.get(n);if(E){let N=E.indexOf(s);N>=0&&E.splice(N,1)}}),this.players.push(s),h.push(s),s}deregister(n){this._triggers.delete(n),this._engine.statesByElement.forEach(e=>e.delete(n)),this._elementListeners.forEach((e,i)=>{this._elementListeners.set(i,e.filter(r=>r.name!=n))})}clearElementCache(n){this._engine.statesByElement.delete(n),this._elementListeners.delete(n);let e=this._engine.playersByElement.get(n);e&&(e.forEach(i=>i.destroy()),this._engine.playersByElement.delete(n))}_signalRemovalForInnerTriggers(n,e){let i=this._engine.driver.query(n,Kl,!0);i.forEach(r=>{if(r[hi])return;let o=this._engine.fetchNamespacesByElement(r);o.size?o.forEach(s=>s.triggerLeaveAnimation(r,e,!1,!0)):this.clearElementCache(r)}),this._engine.afterFlushAnimationsDone(()=>i.forEach(r=>this.clearElementCache(r)))}triggerLeaveAnimation(n,e,i,r){let o=this._engine.statesByElement.get(n),s=new Map;if(o){let a=[];if(o.forEach((c,l)=>{if(s.set(l,c.value),this._triggers.has(l)){let d=this.trigger(n,l,Ql,r);d&&a.push(d)}}),a.length)return this._engine.markElementAsRemoved(this.id,n,!0,e,s),i&&_r(a).onDone(()=>this._engine.processLeaveNode(n)),!0}return!1}prepareLeaveAnimationListeners(n){let e=this._elementListeners.get(n),i=this._engine.statesByElement.get(n);if(e&&i){let r=new Set;e.forEach(o=>{let s=o.name;if(r.has(s))return;r.add(s);let c=this._triggers.get(s).fallbackTransition,l=i.get(s)||Hb,d=new Xl(Ql),f=new Jl(this.id,s,n);this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:s,transition:c,fromState:l,toState:d,player:f,isFallbackTransition:!0})})}}removeNode(n,e){let i=this._engine;if(n.childElementCount&&this._signalRemovalForInnerTriggers(n,e),this.triggerLeaveAnimation(n,e,!0))return;let r=!1;if(i.totalAnimations){let o=i.players.length?i.playersByQueriedElement.get(n):[];if(o&&o.length)r=!0;else{let s=n;for(;s=s.parentNode;)if(i.statesByElement.get(s)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(n),r)i.markElementAsRemoved(this.id,n,!1,e);else{let o=n[hi];(!o||o===zT)&&(i.afterFlush(()=>this.clearElementCache(n)),i.destroyInnerAnimations(n),i._onRemovalComplete(n,e))}}insertNode(n,e){Gn(n,this._hostClassName)}drainQueuedTransitions(n){let e=[];return this._queue.forEach(i=>{let r=i.player;if(r.destroyed)return;let o=i.element,s=this._elementListeners.get(o);s&&s.forEach(a=>{if(a.name==i.triggerName){let c=vm(o,i.triggerName,i.fromState.value,i.toState.value);c._data=n,gm(i.player,a.phase,c,a.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):e.push(i)}),this._queue=[],e.sort((i,r)=>{let o=i.transition.ast.depCount,s=r.transition.ast.depCount;return o==0||s==0?o-s:this._engine.driver.containsElement(i.element,r.element)?1:-1})}destroy(n){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,n)}},Jb=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(n,e)=>{};_onRemovalComplete(n,e){this.onRemovalComplete(n,e)}constructor(n,e,i){this.bodyNode=n,this.driver=e,this._normalizer=i}get queuedPlayers(){let n=[];return this._namespaceList.forEach(e=>{e.players.forEach(i=>{i.queued&&n.push(i)})}),n}createNamespace(n,e){let i=new Xb(n,e,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,e)?this._balanceNamespaceList(i,e):(this.newHostElements.set(e,i),this.collectEnterElement(e)),this._namespaceLookup[n]=i}_balanceNamespaceList(n,e){let i=this._namespaceList,r=this.namespacesByHostElement;if(i.length-1>=0){let s=!1,a=this.driver.getParentElement(e);for(;a;){let c=r.get(a);if(c){let l=i.indexOf(c);i.splice(l+1,0,n),s=!0;break}a=this.driver.getParentElement(a)}s||i.unshift(n)}else i.push(n);return r.set(e,n),n}register(n,e){let i=this._namespaceLookup[n];return i||(i=this.createNamespace(n,e)),i}registerTrigger(n,e,i){let r=this._namespaceLookup[n];r&&r.register(e,i)&&this.totalAnimations++}destroy(n,e){n&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let i=this._fetchNamespace(n);this.namespacesByHostElement.delete(i.hostElement);let r=this._namespaceList.indexOf(i);r>=0&&this._namespaceList.splice(r,1),i.destroy(e),delete this._namespaceLookup[n]}))}_fetchNamespace(n){return this._namespaceLookup[n]}fetchNamespacesByElement(n){let e=new Set,i=this.statesByElement.get(n);if(i){for(let r of i.values())if(r.namespaceId){let o=this._fetchNamespace(r.namespaceId);o&&e.add(o)}}return e}trigger(n,e,i,r){if(xm(e)){let o=this._fetchNamespace(n);if(o)return o.trigger(e,i,r),!0}return!1}insertNode(n,e,i,r){if(!xm(e))return;let o=e[hi];if(o&&o.setForRemoval){o.setForRemoval=!1,o.setForMove=!0;let s=this.collectedLeaveElements.indexOf(e);s>=0&&this.collectedLeaveElements.splice(s,1)}if(n){let s=this._fetchNamespace(n);s&&s.insertNode(e,i)}r&&this.collectEnterElement(e)}collectEnterElement(n){this.collectedEnterElements.push(n)}markElementAsDisabled(n,e){e?this.disabledNodes.has(n)||(this.disabledNodes.add(n),Gn(n,Ub)):this.disabledNodes.has(n)&&(this.disabledNodes.delete(n),Ha(n,Ub))}removeNode(n,e,i){if(xm(e)){let r=n?this._fetchNamespace(n):null;r?r.removeNode(e,i):this.markElementAsRemoved(n,e,!1,i);let o=this.namespacesByHostElement.get(e);o&&o.id!==n&&o.removeNode(e,i)}else this._onRemovalComplete(e,i)}markElementAsRemoved(n,e,i,r,o){this.collectedLeaveElements.push(e),e[hi]={namespaceId:n,setForRemoval:r,hasAnimation:i,removedBeforeQueried:!1,previousTriggersValues:o}}listen(n,e,i,r,o){return xm(e)?this._fetchNamespace(n).listen(e,i,r,o):()=>{}}_buildInstruction(n,e,i,r,o){return n.transition.build(this.driver,n.element,n.fromState.value,n.toState.value,i,r,n.fromState.options,n.toState.options,e,o)}destroyInnerAnimations(n){let e=this.driver.query(n,Kl,!0);e.forEach(i=>this.destroyActiveAnimationsForElement(i)),this.playersByQueriedElement.size!=0&&(e=this.driver.query(n,bm,!0),e.forEach(i=>this.finishActiveQueriedAnimationOnElement(i)))}destroyActiveAnimationsForElement(n){let e=this.playersByElement.get(n);e&&e.forEach(i=>{i.queued?i.markedForDestroy=!0:i.destroy()})}finishActiveQueriedAnimationOnElement(n){let e=this.playersByQueriedElement.get(n);e&&e.forEach(i=>i.finish())}whenRenderingDone(){return new Promise(n=>{if(this.players.length)return _r(this.players).onDone(()=>n());n()})}processLeaveNode(n){let e=n[hi];if(e&&e.setForRemoval){if(n[hi]=zT,e.namespaceId){this.destroyInnerAnimations(n);let i=this._fetchNamespace(e.namespaceId);i&&i.clearElementCache(n)}this._onRemovalComplete(n,e.setForRemoval)}n.classList?.contains(Ub)&&this.markElementAsDisabled(n,!1),this.driver.query(n,sz,!0).forEach(i=>{this.markElementAsDisabled(i,!1)})}flush(n=-1){let e=[];if(this.newHostElements.size&&(this.newHostElements.forEach((i,r)=>this._balanceNamespaceList(i,r)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let i=0;i<this.collectedEnterElements.length;i++){let r=this.collectedEnterElements[i];Gn(r,az)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let i=[];try{e=this._flushAnimations(i,n)}finally{for(let r=0;r<i.length;r++)i[r]()}}else for(let i=0;i<this.collectedLeaveElements.length;i++){let r=this.collectedLeaveElements[i];this.processLeaveNode(r)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(i=>i()),this._flushFns=[],this._whenQuietFns.length){let i=this._whenQuietFns;this._whenQuietFns=[],e.length?_r(e).onDone(()=>{i.forEach(r=>r())}):i.forEach(r=>r())}}reportError(n){throw wT(n)}_flushAnimations(n,e){let i=new Zl,r=[],o=new Map,s=[],a=new Map,c=new Map,l=new Map,d=new Set;this.disabledNodes.forEach(q=>{d.add(q);let ae=this.driver.query(q,oz,!0);for(let ue=0;ue<ae.length;ue++)d.add(ae[ue])});let f=this.bodyNode,h=Array.from(this.statesByElement.keys()),m=LT(h,this.collectedEnterElements),p=new Map,C=0;m.forEach((q,ae)=>{let ue=Pb+C++;p.set(ae,ue),q.forEach(ke=>Gn(ke,ue))});let E=[],N=new Set,R=new Set;for(let q=0;q<this.collectedLeaveElements.length;q++){let ae=this.collectedLeaveElements[q],ue=ae[hi];ue&&ue.setForRemoval&&(E.push(ae),N.add(ae),ue.hasAnimation?this.driver.query(ae,cz,!0).forEach(ke=>N.add(ke)):R.add(ae))}let te=new Map,Ae=LT(h,Array.from(N));Ae.forEach((q,ae)=>{let ue=_m+C++;te.set(ae,ue),q.forEach(ke=>Gn(ke,ue))}),n.push(()=>{m.forEach((q,ae)=>{let ue=p.get(ae);q.forEach(ke=>Ha(ke,ue))}),Ae.forEach((q,ae)=>{let ue=te.get(ae);q.forEach(ke=>Ha(ke,ue))}),E.forEach(q=>{this.processLeaveNode(q)})});let kt=[],Le=[];for(let q=this._namespaceList.length-1;q>=0;q--)this._namespaceList[q].drainQueuedTransitions(e).forEach(ue=>{let ke=ue.player,At=ue.element;if(kt.push(ke),this.collectedEnterElements.length){let Gt=At[hi];if(Gt&&Gt.setForMove){if(Gt.previousTriggersValues&&Gt.previousTriggersValues.has(ue.triggerName)){let uo=Gt.previousTriggersValues.get(ue.triggerName),An=this.statesByElement.get(ue.element);if(An&&An.has(ue.triggerName)){let td=An.get(ue.triggerName);td.value=uo,An.set(ue.triggerName,td)}}ke.destroy();return}}let mi=!f||!this.driver.containsElement(f,At),yn=te.get(At),Sr=p.get(At),st=this._buildInstruction(ue,i,Sr,yn,mi);if(st.errors&&st.errors.length){Le.push(st);return}if(mi){ke.onStart(()=>lo(At,st.fromStyles)),ke.onDestroy(()=>fi(At,st.toStyles)),r.push(ke);return}if(ue.isFallbackTransition){ke.onStart(()=>lo(At,st.fromStyles)),ke.onDestroy(()=>fi(At,st.toStyles)),r.push(ke);return}let sS=[];st.timelines.forEach(Gt=>{Gt.stretchStartingKeyframe=!0,this.disabledNodes.has(Gt.element)||sS.push(Gt)}),st.timelines=sS,i.append(At,st.timelines);let tk={instruction:st,player:ke,element:At};s.push(tk),st.queriedElements.forEach(Gt=>gn(a,Gt,[]).push(ke)),st.preStyleProps.forEach((Gt,uo)=>{if(Gt.size){let An=c.get(uo);An||c.set(uo,An=new Set),Gt.forEach((td,Pm)=>An.add(Pm))}}),st.postStyleProps.forEach((Gt,uo)=>{let An=l.get(uo);An||l.set(uo,An=new Set),Gt.forEach((td,Pm)=>An.add(Pm))})});if(Le.length){let q=[];Le.forEach(ae=>{q.push(CT(ae.triggerName,ae.errors))}),kt.forEach(ae=>ae.destroy()),this.reportError(q)}let et=new Map,ot=new Map;s.forEach(q=>{let ae=q.element;i.has(ae)&&(ot.set(ae,ae),this._beforeAnimationBuild(q.player.namespaceId,q.instruction,et))}),r.forEach(q=>{let ae=q.element;this._getPreviousPlayers(ae,!1,q.namespaceId,q.triggerName,null).forEach(ke=>{gn(et,ae,[]).push(ke),ke.destroy()})});let Rt=E.filter(q=>BT(q,c,l)),br=new Map;PT(br,this.driver,R,l,ui).forEach(q=>{BT(q,c,l)&&Rt.push(q)});let qn=new Map;m.forEach((q,ae)=>{PT(qn,this.driver,new Set(q),c,ql)}),Rt.forEach(q=>{let ae=br.get(q),ue=qn.get(q);br.set(q,new Map([...ae?.entries()??[],...ue?.entries()??[]]))});let ys=[],rS=[],oS={};s.forEach(q=>{let{element:ae,player:ue,instruction:ke}=q;if(i.has(ae)){if(d.has(ae)){ue.onDestroy(()=>fi(ae,ke.toStyles)),ue.disabled=!0,ue.overrideTotalTime(ke.totalTime),r.push(ue);return}let At=oS;if(ot.size>1){let yn=ae,Sr=[];for(;yn=yn.parentNode;){let st=ot.get(yn);if(st){At=st;break}Sr.push(yn)}Sr.forEach(st=>ot.set(st,At))}let mi=this._buildAnimation(ue.namespaceId,ke,et,o,qn,br);if(ue.setRealPlayer(mi),At===oS)ys.push(ue);else{let yn=this.playersByElement.get(At);yn&&yn.length&&(ue.parentPlayer=_r(yn)),r.push(ue)}}else lo(ae,ke.fromStyles),ue.onDestroy(()=>fi(ae,ke.toStyles)),rS.push(ue),d.has(ae)&&r.push(ue)}),rS.forEach(q=>{let ae=o.get(q.element);if(ae&&ae.length){let ue=_r(ae);q.setRealPlayer(ue)}}),r.forEach(q=>{q.parentPlayer?q.syncPlayerEvents(q.parentPlayer):q.destroy()});for(let q=0;q<E.length;q++){let ae=E[q],ue=ae[hi];if(Ha(ae,_m),ue&&ue.hasAnimation)continue;let ke=[];if(a.size){let mi=a.get(ae);mi&&mi.length&&ke.push(...mi);let yn=this.driver.query(ae,bm,!0);for(let Sr=0;Sr<yn.length;Sr++){let st=a.get(yn[Sr]);st&&st.length&&ke.push(...st)}}let At=ke.filter(mi=>!mi.destroyed);At.length?mz(this,ae,At):this.processLeaveNode(ae)}return E.length=0,ys.forEach(q=>{this.players.push(q),q.onDone(()=>{q.destroy();let ae=this.players.indexOf(q);this.players.splice(ae,1)}),q.play()}),ys}afterFlush(n){this._flushFns.push(n)}afterFlushAnimationsDone(n){this._whenQuietFns.push(n)}_getPreviousPlayers(n,e,i,r,o){let s=[];if(e){let a=this.playersByQueriedElement.get(n);a&&(s=a)}else{let a=this.playersByElement.get(n);if(a){let c=!o||o==Ql;a.forEach(l=>{l.queued||!c&&l.triggerName!=r||s.push(l)})}}return(i||r)&&(s=s.filter(a=>!(i&&i!=a.namespaceId||r&&r!=a.triggerName))),s}_beforeAnimationBuild(n,e,i){let r=e.triggerName,o=e.element,s=e.isRemovalTransition?void 0:n,a=e.isRemovalTransition?void 0:r;for(let c of e.timelines){let l=c.element,d=l!==o,f=gn(i,l,[]);this._getPreviousPlayers(l,d,s,a,e.toState).forEach(m=>{let p=m.getRealPlayer();p.beforeDestroy&&p.beforeDestroy(),m.destroy(),f.push(m)})}lo(o,e.fromStyles)}_buildAnimation(n,e,i,r,o,s){let a=e.triggerName,c=e.element,l=[],d=new Set,f=new Set,h=e.timelines.map(p=>{let C=p.element;d.add(C);let E=C[hi];if(E&&E.removedBeforeQueried)return new yr(p.duration,p.delay);let N=C!==c,R=pz((i.get(C)||lz).map(et=>et.getRealPlayer())).filter(et=>{let ot=et;return ot.element?ot.element===C:!1}),te=o.get(C),Ae=s.get(C),kt=kb(this._normalizer,p.keyframes,te,Ae),Le=this._buildPlayer(p,kt,R);if(p.subTimeline&&r&&f.add(C),N){let et=new Jl(n,a,C);et.setRealPlayer(Le),l.push(et)}return Le});l.forEach(p=>{gn(this.playersByQueriedElement,p.element,[]).push(p),p.onDone(()=>uz(this.playersByQueriedElement,p.element,p))}),d.forEach(p=>Gn(p,Lb));let m=_r(h);return m.onDestroy(()=>{d.forEach(p=>Ha(p,Lb)),fi(c,e.toStyles)}),f.forEach(p=>{gn(r,p,[]).push(m)}),m}_buildPlayer(n,e,i){return e.length>0?this.driver.animate(n.element,e,n.duration,n.delay,n.easing,i):new yr(n.duration,n.delay)}},Jl=class{namespaceId;triggerName;element;_player=new yr;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(n,e,i){this.namespaceId=n,this.triggerName=e,this.element=i}setRealPlayer(n){this._containsRealPlayer||(this._player=n,this._queuedCallbacks.forEach((e,i)=>{e.forEach(r=>gm(n,i,void 0,r))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(n.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(n){this.totalTime=n}syncPlayerEvents(n){let e=this._player;e.triggerCallback&&n.onStart(()=>e.triggerCallback("start")),n.onDone(()=>this.finish()),n.onDestroy(()=>this.destroy())}_queueEvent(n,e){gn(this._queuedCallbacks,n,[]).push(e)}onDone(n){this.queued&&this._queueEvent("done",n),this._player.onDone(n)}onStart(n){this.queued&&this._queueEvent("start",n),this._player.onStart(n)}onDestroy(n){this.queued&&this._queueEvent("destroy",n),this._player.onDestroy(n)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(n){this.queued||this._player.setPosition(n)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(n){let e=this._player;e.triggerCallback&&e.triggerCallback(n)}};function uz(t,n,e){let i=t.get(n);if(i){if(i.length){let r=i.indexOf(e);i.splice(r,1)}i.length==0&&t.delete(n)}return i}function fz(t){return t??null}function xm(t){return t&&t.nodeType===1}function hz(t){return t=="start"||t=="done"}function FT(t,n){let e=t.style.display;return t.style.display=n??"none",e}function PT(t,n,e,i,r){let o=[];e.forEach(c=>o.push(FT(c)));let s=[];i.forEach((c,l)=>{let d=new Map;c.forEach(f=>{let h=n.computeStyle(l,f,r);d.set(f,h),(!h||h.length==0)&&(l[hi]=dz,s.push(l))}),t.set(l,d)});let a=0;return e.forEach(c=>FT(c,o[a++])),s}function LT(t,n){let e=new Map;if(t.forEach(a=>e.set(a,[])),n.length==0)return e;let i=1,r=new Set(n),o=new Map;function s(a){if(!a)return i;let c=o.get(a);if(c)return c;let l=a.parentNode;return e.has(l)?c=l:r.has(l)?c=i:c=s(l),o.set(a,c),c}return n.forEach(a=>{let c=s(a);c!==i&&e.get(c).push(a)}),e}function Gn(t,n){t.classList?.add(n)}function Ha(t,n){t.classList?.remove(n)}function mz(t,n,e){_r(e).onDone(()=>t.processLeaveNode(n))}function pz(t){let n=[];return $T(t,n),n}function $T(t,n){for(let e=0;e<t.length;e++){let i=t[e];i instanceof Va?$T(i.players,n):n.push(i)}}function gz(t,n){let e=Object.keys(t),i=Object.keys(n);if(e.length!=i.length)return!1;for(let r=0;r<e.length;r++){let o=e[r];if(!Object.hasOwn(n,o)||t[o]!==n[o])return!1}return!0}function BT(t,n,e){let i=e.get(t);if(!i)return!1;let r=n.get(t);return r?i.forEach(o=>r.add(o)):n.set(t,i),e.delete(t),!0}var za=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(n,e)=>{};constructor(n,e,i){this._driver=e,this._normalizer=i,this._transitionEngine=new Jb(n.body,e,i),this._timelineEngine=new Zb(n.body,e,i),this._transitionEngine.onRemovalComplete=(r,o)=>this.onRemovalComplete(r,o)}registerTrigger(n,e,i,r,o){let s=n+"-"+r,a=this._triggerCache[s];if(!a){let c=[],l=[],d=jT(this._driver,o,c,l);if(c.length)throw hT(r,c);a=nz(r,d,this._normalizer),this._triggerCache[s]=a}this._transitionEngine.registerTrigger(e,r,a)}register(n,e){this._transitionEngine.register(n,e)}destroy(n,e){this._transitionEngine.destroy(n,e)}onInsert(n,e,i,r){this._transitionEngine.insertNode(n,e,i,r)}onRemove(n,e,i){this._transitionEngine.removeNode(n,e,i)}disableAnimations(n,e){this._transitionEngine.markElementAsDisabled(n,e)}process(n,e,i,r){if(i.charAt(0)=="@"){let[o,s]=Rb(i),a=r;this._timelineEngine.command(o,e,s,a)}else this._transitionEngine.trigger(n,e,i,r)}listen(n,e,i,r,o){if(i.charAt(0)=="@"){let[s,a]=Rb(i);return this._timelineEngine.listen(s,e,a,o)}return this._transitionEngine.listen(n,e,i,r,o)}flush(n=-1){this._transitionEngine.flush(n)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(n){this._transitionEngine.afterFlushAnimationsDone(n)}};function vz(t,n){let e=null,i=null;return Array.isArray(n)&&n.length?(e=zb(n[0]),n.length>1&&(i=zb(n[n.length-1]))):n instanceof Map&&(e=zb(n)),e||i?new yz(t,e,i):null}var yz=(()=>{class t{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(e,i,r){this._element=e,this._startStyles=i,this._endStyles=r;let o=t.initialStylesByElement.get(e);o||t.initialStylesByElement.set(e,o=new Map),this._initialStyles=o}start(){this._state<1&&(this._startStyles&&fi(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(fi(this._element,this._initialStyles),this._endStyles&&(fi(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(t.initialStylesByElement.delete(this._element),this._startStyles&&(lo(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(lo(this._element,this._endStyles),this._endStyles=null),fi(this._element,this._initialStyles),this._state=3)}}return t})();function zb(t){let n=null;return t.forEach((e,i)=>{_z(i)&&(n=n||new Map,n.set(i,e))}),n}function _z(t){return t==="display"||t==="position"}var Rm=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(n,e,i,r){this.element=n,this.keyframes=e,this.options=i,this._specialStyles=r,this._duration=i.duration,this._delay=i.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let n=this.keyframes,e=this._triggerWebAnimation(this.element,n,this.options);if(!e)return this._onFinish(),null;this.domPlayer=e,this._finalKeyframe=n.length?n[n.length-1]:new Map;let i=()=>this._onFinish();return e.addEventListener("finish",i),this.onDestroy(()=>{e.removeEventListener("finish",i)}),e}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(n){let e=[];return n.forEach(i=>{e.push(Object.fromEntries(i))}),e}_triggerWebAnimation(n,e,i){let r=this._convertKeyframesToObject(e);try{return n.animate(r,i)}catch(o){return null}}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}play(){let n=this._buildPlayer();n&&(this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),n.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}setPosition(n){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=n*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let n=new Map;this.hasStarted()&&this._finalKeyframe.forEach((i,r)=>{r!=="offset"&&n.set(r,this._finished?i:wm(this.element,r))}),this.currentSnapshot=n}triggerCallback(n){let e=n==="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},Am=class{validateStyleProperty(n){return!0}validateAnimatableStyleProperty(n){return!0}containsElement(n,e){return Ab(n,e)}getParentElement(n){return ym(n)}query(n,e,i){return Ob(n,e,i)}computeStyle(n,e,i){return wm(n,e)}animate(n,e,i,r,o,s=[]){let a=r==0?"both":"forwards",c={duration:i,delay:r,fill:a};o&&(c.easing=o);let l=new Map,d=s.filter(m=>m instanceof Rm);IT(i,r)&&d.forEach(m=>{m.currentSnapshot.forEach((p,C)=>l.set(C,p))});let f=xT(e).map(m=>new Map(m));f=NT(n,f,l);let h=vz(n,f);return new Rm(n,f,c,h)}};var Em="@",GT="@.disabled",Om=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(n,e,i,r){this.namespaceId=n,this.delegate=e,this.engine=i,this._onDestroy=r}get data(){return this.delegate.data}destroyNode(n){this.delegate.destroyNode?.(n)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}appendChild(n,e){this.delegate.appendChild(n,e),this.engine.onInsert(this.namespaceId,e,n,!1)}insertBefore(n,e,i,r=!0){this.delegate.insertBefore(n,e,i),this.engine.onInsert(this.namespaceId,e,n,r)}removeChild(n,e,i,r){if(r){this.delegate.removeChild(n,e,i,r);return}this.parentNode(e)&&this.engine.onRemove(this.namespaceId,e,this.delegate)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,i,r){this.delegate.setAttribute(n,e,i,r)}removeAttribute(n,e,i){this.delegate.removeAttribute(n,e,i)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,i,r){this.delegate.setStyle(n,e,i,r)}removeStyle(n,e,i){this.delegate.removeStyle(n,e,i)}setProperty(n,e,i){e.charAt(0)==Em&&e==GT?this.disableAnimations(n,!!i):this.delegate.setProperty(n,e,i)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,i,r){return this.delegate.listen(n,e,i,r)}disableAnimations(n,e){this.engine.disableAnimations(n,e)}},eS=class extends Om{factory;constructor(n,e,i,r,o){super(e,i,r,o),this.factory=n,this.namespaceId=e}setProperty(n,e,i){e.charAt(0)==Em?e.charAt(1)=="."&&e==GT?(i=i===void 0?!0:!!i,this.disableAnimations(n,i)):this.engine.process(this.namespaceId,n,e.slice(1),i):this.delegate.setProperty(n,e,i)}listen(n,e,i,r){if(e.charAt(0)==Em){let o=bz(n),s=e.slice(1),a="";return s.charAt(0)!=Em&&([s,a]=Sz(s)),this.engine.listen(this.namespaceId,o,s,a,c=>{let l=c._data||-1;this.factory.scheduleListenerCallback(l,i,c)})}return this.delegate.listen(n,e,i,r)}};function bz(t){switch(t){case"body":return document.body;case"document":return document;case"window":return window;default:return t}}function Sz(t){let n=t.indexOf("."),e=t.substring(0,n),i=t.slice(n+1);return[e,i]}var Fm=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(n,e,i){this.delegate=n,this.engine=e,this._zone=i,e.onRemovalComplete=(r,o)=>{o?.removeChild(null,r)}}createRenderer(n,e){let r=this.delegate.createRenderer(n,e);if(!n||!e?.data?.animation){let l=this._rendererCache,d=l.get(r);if(!d){let f=()=>l.delete(r);d=new Om("",r,this.engine,f),l.set(r,d)}return d}let o=e.id,s=e.id+"-"+this._currentId;this._currentId++,this.engine.register(s,n);let a=l=>{Array.isArray(l)?l.forEach(a):this.engine.registerTrigger(o,s,n,l.name,l)};return e.data.animation.forEach(a),new eS(this,s,r,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(n,e,i){if(n>=0&&n<this._microtaskId){this._zone.run(()=>e(i));return}let r=this._animationCallbacksBuffer;r.length==0&&queueMicrotask(()=>{this._zone.run(()=>{r.forEach(o=>{let[s,a]=o;s(a)}),this._animationCallbacksBuffer=[]})}),r.push([e,i])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(n){this.engine.flush(),this.delegate.componentReplaced?.(n)}};var Cz=(()=>{class t extends za{constructor(e,i,r){super(e,i,r)}ngOnDestroy(){this.flush()}static \u0275fac=function(i){return new(i||t)(T(J),T(ps),T(gs))};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})();function Dz(){return new Im}function xz(){return new Fm(u(tl),u(za),u(L))}var WT=[{provide:gs,useFactory:Dz},{provide:za,useClass:Cz},{provide:ft,useFactory:xz}],Ez=[{provide:ps,useClass:tS},{provide:Vr,useValue:"NoopAnimations"},...WT],qT=[{provide:ps,useFactory:()=>new Am},{provide:Vr,useFactory:()=>"BrowserAnimations"},...WT],KT=(()=>{class t{static withConfig(e){return{ngModule:t,providers:e.disableAnimations?Ez:qT}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({providers:qT,imports:[il]})}return t})();var iS="Service workers are disabled or not supported by this browser",$a=class{serviceWorker;worker;registration;events;constructor(n,e){if(this.serviceWorker=n,!n)this.worker=this.events=this.registration=new ne(i=>i.error(new D(5601,!1)));else{let i=null,r=new I;this.worker=new ne(l=>(i!==null&&l.next(i),r.subscribe(d=>l.next(d))));let o=()=>{let{controller:l}=n;l!==null&&(i=l,r.next(i))};n.addEventListener("controllerchange",o),o(),this.registration=this.worker.pipe(Xe(()=>n.getRegistration().then(l=>{if(!l)throw new D(5601,!1);return l})));let s=new I;this.events=s.asObservable();let a=l=>{let{data:d}=l;d?.type&&s.next(d)};n.addEventListener("message",a),e?.get(Et,null,{optional:!0})?.onDestroy(()=>{n.removeEventListener("controllerchange",o),n.removeEventListener("message",a)})}}postMessage(n,e){return new Promise(i=>{this.worker.pipe(yt(1)).subscribe(r=>{r.postMessage(w({action:n},e)),i()})})}postMessageWithOperation(n,e,i){let r=this.waitForOperationCompleted(i),o=this.postMessage(n,e);return Promise.all([o,r]).then(([,s])=>s)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(n){let e;return typeof n=="string"?e=i=>i.type===n:e=i=>n.includes(i.type),this.events.pipe(Me(e))}nextEventOfType(n){return this.eventsOfType(n).pipe(yt(1))}waitForOperationCompleted(n){return new Promise((e,i)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(Me(r=>r.nonce===n),yt(1),he(r=>{if(r.result!==void 0)return r.result;throw new Error(r.error)})).subscribe({next:e,error:i})})}get isEnabled(){return!!this.serviceWorker}},QT=(()=>{class t{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new I;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=Yi,this.notificationClicks=Yi,this.notificationCloses=Yi,this.pushSubscriptionChanges=Yi,this.subscription=Yi;return}this.messages=this.sw.eventsOfType("PUSH").pipe(he(r=>r.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(he(r=>r.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(he(r=>r.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(he(r=>r.data)),this.pushManager=this.sw.registration.pipe(he(r=>r.pushManager));let i=this.pushManager.pipe(Xe(r=>r.getSubscription()));this.subscription=new ne(r=>{let o=i.subscribe(r),s=this.subscriptionChanges.subscribe(r);return()=>{o.unsubscribe(),s.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(iS));let i={userVisibleOnly:!0},r=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(r.length));for(let s=0;s<r.length;s++)o[s]=r.charCodeAt(s);return i.applicationServerKey=o,new Promise((s,a)=>{this.pushManager.pipe(Xe(c=>c.subscribe(i)),yt(1)).subscribe({next:c=>{this.subscriptionChanges.next(c),s(c)},error:a})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(iS));let e=i=>{if(i===null)throw new D(5602,!1);return i.unsubscribe().then(r=>{if(!r)throw new D(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((i,r)=>{this.subscription.pipe(yt(1),Xe(e)).subscribe({next:i,error:r})})}decodeBase64(e){return atob(e)}static \u0275fac=function(i){return new(i||t)(T($a))};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})(),ZT=(()=>{class t{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=Yi,this.unrecoverable=Yi;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(iS));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new D(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(i){return new(i||t)(T($a))};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})(),XT=new b("");function Iz(){let t=u(ed);if(!("serviceWorker"in navigator&&t.enabled!==!1))return;let n=u(XT),e=u(L),i=u(Et);e.runOutsideAngular(()=>{let r=navigator.serviceWorker,o=()=>r.controller?.postMessage({action:"INITIALIZE"});r.addEventListener("controllerchange",o),i.onDestroy(()=>{r.removeEventListener("controllerchange",o)})}),e.runOutsideAngular(()=>{let r,{registrationStrategy:o}=t;if(typeof o=="function")r=new Promise(s=>o().subscribe(()=>s()));else{let[s,...a]=(o||"registerWhenStable:30000").split(":");switch(s){case"registerImmediately":r=Promise.resolve();break;case"registerWithDelay":r=YT(+a[0]||0);break;case"registerWhenStable":r=Promise.race([i.whenStable(),YT(+a[0])]);break;default:throw new D(5600,!1)}}r.then(()=>{i.destroyed||navigator.serviceWorker.register(n,{scope:t.scope,updateViaCache:t.updateViaCache,type:t.type}).catch(s=>console.error(fn(5604,!1)))})})}function YT(t){return new Promise(n=>setTimeout(n,t))}function Nz(){let t=u(ed),n=u(me),e=!0;return new $a(e&&t.enabled!==!1?navigator.serviceWorker:void 0,n)}var ed=class{enabled;updateViaCache;type;scope;registrationStrategy};function Mz(t,n={}){return Kn([QT,ZT,{provide:XT,useValue:t},{provide:ed,useValue:n},{provide:$a,useFactory:Nz},Js(Iz)])}var JT=(()=>{class t{static register(e,i={}){return{ngModule:t,providers:[Mz(e,i)]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=F({providers:[QT,ZT]})}return t})();var ek=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=B({type:t,bootstrap:[YM]})}static{this.\u0275inj=F({imports:[KI,iM,KM,tN,mM,Ta,EN,vr,Wh,Oa,eM,rm,il,Py,xa,IM,KT,JT.register("ngsw-worker.js",{enabled:!nx(),registrationStrategy:"registerWhenStable:30000"})]})}}return t})();My().bootstrapModule(ek).catch(t=>console.error(t));
