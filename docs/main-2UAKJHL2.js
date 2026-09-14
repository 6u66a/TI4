var ck=Object.defineProperty,lk=Object.defineProperties;var dk=Object.getOwnPropertyDescriptors;var od=Object.getOwnPropertySymbols;var hS=Object.prototype.hasOwnProperty,pS=Object.prototype.propertyIsEnumerable;var mS=(t,n,e)=>n in t?ck(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,w=(t,n)=>{for(var e in n||={})hS.call(n,e)&&mS(t,e,n[e]);if(od)for(var e of od(n))pS.call(n,e)&&mS(t,e,n[e]);return t},te=(t,n)=>lk(t,dk(n));var jh=(t,n)=>{var e={};for(var i in t)hS.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&od)for(var i of od(t))n.indexOf(i)<0&&pS.call(t,i)&&(e[i]=t[i]);return e};var Ae=(t,n,e)=>new Promise((i,r)=>{var o=c=>{try{a(e.next(c))}catch(l){r(l)}},s=c=>{try{a(e.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(o,s);a((e=e.apply(t,n)).next())});var nn=null,sd=!1,lo=1,uk=null,_t=Symbol("SIGNAL");function ce(t){let n=nn;return nn=t,n}function ad(){return nn}var Sr={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function wr(t){if(sd)throw new Error("");if(nn===null)return;nn.consumerOnSignalRead(t);let n=nn.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=nn.recomputing;if(i&&(e=n!==void 0?n.nextProducer:nn.producers,e!==void 0&&e.producer===t)){nn.producersTail=e,e.lastReadVersion=t.version,e.knownValidAtEpoch=lo;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===nn&&(!i||r.knownValidAtEpoch===lo))return;let o=ws(nn),s={producer:t,consumer:nn,nextProducer:e,prevConsumer:void 0,knownValidAtEpoch:lo,lastReadVersion:t.version,nextConsumer:void 0};nn.producersTail=s,n!==void 0?n.nextProducer=s:nn.producers=s,o&&_S(t,s)}function gS(){lo++}function mo(t){if(!(ws(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===lo)){if(!t.producerMustRecompute(t)&&!Ss(t)){bs(t);return}t.producerRecomputeValue(t),bs(t)}}function Uh(t){if(t.consumers===void 0)return;let n=sd;sd=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||fk(i)}}finally{sd=n}}function Hh(){return nn?.consumerAllowSignalWrites!==!1}function fk(t){t.dirty=!0,Uh(t),t.consumerMarkedDirty?.(t)}function bs(t){t.dirty=!1,t.lastCleanEpoch=lo}function Wi(t){return t&&vS(t),ce(t)}function vS(t){if(t.producersTail?.knownValidAtEpoch===lo){let n=t.producers;for(;n!==void 0;)n.knownValidAtEpoch=null,n=n.nextProducer}t.producersTail=void 0,t.recomputing=!0}function Cr(t,n){ce(n),t&&yS(t)}function yS(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(ws(t))do e=zh(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function Ss(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(mo(e),i!==e.version))return!0}return!1}function Dr(t){if(ws(t)){let n=t.producers;for(;n!==void 0;)n=zh(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function _S(t,n){let e=t.consumersTail,i=ws(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)_S(r.producer,r)}function zh(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!ws(n)){let o=n.producers;for(;o!==void 0;)o=zh(o)}return e}function ws(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Ya(t){uk?.(t)}function Qa(t,n){return Object.is(t,n)}function Za(t,n){let e=Object.create(mk);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(mo(e),wr(e),e.value===pi)throw e.error;return e.value};return i[_t]=e,Ya(e),i}var uo=Symbol("UNSET"),fo=Symbol("COMPUTING"),pi=Symbol("ERRORED"),mk=te(w({},Sr),{value:uo,dirty:!0,error:null,equal:Qa,kind:"computed",producerMustRecompute(t){return t.value===uo||t.value===fo},producerRecomputeValue(t){if(t.value===fo)throw new Error("");let n=t.value;t.value=fo;let e=Wi(t),i,r=!1;try{i=t.computation(),ce(null),r=n!==uo&&n!==pi&&i!==pi&&t.equal(n,i)}catch(o){i=pi,t.error=o}finally{Cr(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function hk(){throw new Error}var bS=hk;function SS(t){bS(t)}function $h(t){bS=t}var pk=null;function Gh(t,n){let e=Object.create(Xa);e.value=t,n!==void 0&&(e.equal=n);let i=()=>wS(e);return i[_t]=e,Ya(e),[i,s=>ho(e,s),s=>cd(e,s)]}function wS(t){return wr(t),t.value}function ho(t,n){Hh()||SS(t),t.equal(t.value,n)||(t.value=n,gk(t))}function cd(t,n){Hh()||SS(t),ho(t,n(t.value))}var Xa=te(w({},Sr),{equal:Qa,value:void 0,kind:"signal"});function gk(t){t.version++,gS(),Uh(t),pk?.(t)}var qh=te(w({},Sr),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Wh(t){if(t.dirty=!1,t.version>0&&!Ss(t))return;t.version++;let n=Wi(t);try{t.cleanup(),t.fn()}finally{Cr(t,n)}}var Kh;function ld(){return Kh}function gi(t){let n=Kh;return Kh=t,n}var CS=Symbol("NotFound");function Cs(t){return t===CS||t?.name==="\u0275NotFound"}function Yh(t,n,e){let i=Object.create(vk);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(mo(i),wr(i),i.value===pi)throw i.error;return i.value};return o[_t]=i,Ya(i),o}function Qh(t,n){mo(t),ho(t,n),bs(t)}function DS(t,n){if(mo(t),t.value===pi)throw t.error;cd(t,n),bs(t)}var vk=te(w({},Sr),{value:uo,dirty:!0,error:null,equal:Qa,kind:"linkedSignal",producerMustRecompute(t){return t.value===uo||t.value===fo},producerRecomputeValue(t){if(t.value===fo)throw new Error("");let n=t.value;t.value=fo;let e=Wi(t),i,r=!1;try{let o=t.source(),s=n!==uo&&n!==pi,a=s?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,a),t.sourceValue=o,ce(null),r=s&&i!==pi&&t.equal(n,i)}catch(o){i=pi,t.error=o}finally{Cr(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function xS(t){let n=ce(null);try{return t()}finally{ce(n)}}function be(t){return typeof t=="function"}function Ds(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var dd=Ds(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function po(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var pe=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(be(i))try{i()}catch(o){n=o instanceof dd?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{ES(o)}catch(s){n=n??[],s instanceof dd?n=[...n,...s.errors]:n.push(s)}}if(n)throw new dd(n)}}add(n){var e;if(n&&n!==this)if(this.closed)ES(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&po(e,n)}remove(n){let{_finalizers:e}=this;e&&po(e,n),n instanceof t&&n._removeParent(this)}};pe.EMPTY=(()=>{let t=new pe;return t.closed=!0,t})();var Zh=pe.EMPTY;function ud(t){return t instanceof pe||t&&"closed"in t&&be(t.remove)&&be(t.add)&&be(t.unsubscribe)}function ES(t){be(t)?t():t.unsubscribe()}var Kn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var xs={setTimeout(t,n,...e){let{delegate:i}=xs;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=xs;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function fd(t){xs.setTimeout(()=>{let{onUnhandledError:n}=Kn;if(n)n(t);else throw t})}function go(){}var IS=Xh("C",void 0,void 0);function NS(t){return Xh("E",void 0,t)}function MS(t){return Xh("N",t,void 0)}function Xh(t,n,e){return{kind:t,value:n,error:e}}var vo=null;function Es(t){if(Kn.useDeprecatedSynchronousErrorHandling){let n=!vo;if(n&&(vo={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=vo;if(vo=null,e)throw i}}else t()}function TS(t){Kn.useDeprecatedSynchronousErrorHandling&&vo&&(vo.errorThrown=!0,vo.error=t)}var yo=class extends pe{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,ud(n)&&n.add(this)):this.destination=bk}static create(n,e,i){return new Ki(n,e,i)}next(n){this.isStopped?ep(MS(n),this):this._next(n)}error(n){this.isStopped?ep(NS(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?ep(IS,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},yk=Function.prototype.bind;function Jh(t,n){return yk.call(t,n)}var tp=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){md(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){md(i)}else md(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){md(e)}}},Ki=class extends yo{constructor(n,e,i){super();let r;if(be(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&Kn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&Jh(n.next,o),error:n.error&&Jh(n.error,o),complete:n.complete&&Jh(n.complete,o)}):r=n}this.destination=new tp(r)}};function md(t){Kn.useDeprecatedSynchronousErrorHandling?TS(t):fd(t)}function _k(t){throw t}function ep(t,n){let{onStoppedNotification:e}=Kn;e&&xs.setTimeout(()=>e(t,n))}var bk={closed:!0,next:go,error:_k,complete:go};var Is=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Sn(t){return t}function hd(...t){return np(t)}function np(t){return t.length===0?Sn:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var re=class t{constructor(n){n&&(this._subscribe=n)}lift(n){let e=new t;return e.source=this,e.operator=n,e}subscribe(n,e,i){let r=wk(n)?n:new Ki(n,e,i);return Es(()=>{let{operator:o,source:s}=this;r.add(o?o.call(r,s):s?this._subscribe(r):this._trySubscribe(r))}),r}_trySubscribe(n){try{return this._subscribe(n)}catch(e){n.error(e)}}forEach(n,e){return e=kS(e),new e((i,r)=>{let o=new Ki({next:s=>{try{n(s)}catch(a){r(a),o.unsubscribe()}},error:r,complete:i});this.subscribe(o)})}_subscribe(n){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(n)}[Is](){return this}pipe(...n){return np(n)(this)}toPromise(n){return n=kS(n),new n((e,i)=>{let r;this.subscribe(o=>r=o,o=>i(o),()=>e(r))})}};re.create=t=>new re(t);function kS(t){var n;return(n=t??Kn.Promise)!==null&&n!==void 0?n:Promise}function Sk(t){return t&&be(t.next)&&be(t.error)&&be(t.complete)}function wk(t){return t&&t instanceof yo||Sk(t)&&ud(t)}function ip(t){return be(t?.lift)}function we(t){return n=>{if(ip(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Se(t,n,e,i,r){return new rp(t,n,e,i,r)}var rp=class extends yo{constructor(n,e,i,r,o,s){super(n),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=e?function(a){try{e(a)}catch(c){n.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){n.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){n.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};function RS(){return we((t,n)=>{let e=null;t._refCount++;let i=Se(n,void 0,void 0,void 0,()=>{if(!t||t._refCount<=0||0<--t._refCount){e=null;return}let r=t._connection,o=e;e=null,r&&(!o||r===o)&&r.unsubscribe(),n.unsubscribe()});t.subscribe(i),i.closed||(e=t.connect())})}var Ja=class extends re{constructor(n,e){super(),this.source=n,this.subjectFactory=e,this._subject=null,this._refCount=0,this._connection=null,ip(n)&&(this.lift=n.lift)}_subscribe(n){return this.getSubject().subscribe(n)}getSubject(){let n=this._subject;return(!n||n.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:n}=this;this._subject=this._connection=null,n?.unsubscribe()}connect(){let n=this._connection;if(!n){n=this._connection=new pe;let e=this.getSubject();n.add(this.source.subscribe(Se(e,void 0,()=>{this._teardown(),e.complete()},i=>{this._teardown(),e.error(i)},()=>this._teardown()))),n.closed&&(this._connection=null,n=pe.EMPTY)}return n}refCount(){return RS()(this)}};var Ns={schedule(t){let n=requestAnimationFrame,e=cancelAnimationFrame,{delegate:i}=Ns;i&&(n=i.requestAnimationFrame,e=i.cancelAnimationFrame);let r=n(o=>{e=void 0,t(o)});return new pe(()=>e?.(r))},requestAnimationFrame(...t){let{delegate:n}=Ns;return(n?.requestAnimationFrame||requestAnimationFrame)(...t)},cancelAnimationFrame(...t){let{delegate:n}=Ns;return(n?.cancelAnimationFrame||cancelAnimationFrame)(...t)},delegate:void 0};var AS=Ds(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var I=class extends re{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let e=new pd(this,this);return e.operator=n,e}_throwIfClosed(){if(this.closed)throw new AS}next(n){Es(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let e of this.currentObservers)e.next(n)}})}error(n){Es(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:e}=this;for(;e.length;)e.shift().error(n)}})}complete(){Es(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:e,isStopped:i,observers:r}=this;return e||i?Zh:(this.currentObservers=null,r.push(n),new pe(()=>{this.currentObservers=null,po(r,n)}))}_checkFinalizedStatuses(n){let{hasError:e,thrownError:i,isStopped:r}=this;e?n.error(i):r&&n.complete()}asObservable(){let n=new re;return n.source=this,n}};I.create=(t,n)=>new pd(t,n);var pd=class extends I{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Zh}};var bt=class extends I{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var ec={now(){return(ec.delegate||Date).now()},delegate:void 0};var tc=class extends I{constructor(n=1/0,e=1/0,i=ec){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:s}=this;e||(i.push(n),!r&&i.push(o.now()+s)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let s=0;s<o.length&&!n.closed;s+=i?1:2)n.next(o[s]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let s=e.now(),a=0;for(let c=1;c<i.length&&i[c]<=s;c+=2)a=c;a&&i.splice(0,a+1)}}};var gd=class extends pe{constructor(n,e){super()}schedule(n,e=0){return this}};var nc={setInterval(t,n,...e){let{delegate:i}=nc;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=nc;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var xr=class extends gd{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return nc.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&nc.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,po(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var Ck=1,op,sp={};function OS(t){return t in sp?(delete sp[t],!0):!1}var FS={setImmediate(t){let n=Ck++;return sp[n]=!0,op||(op=Promise.resolve()),op.then(()=>OS(n)&&t()),n},clearImmediate(t){OS(t)}};var{setImmediate:Dk,clearImmediate:xk}=FS,ic={setImmediate(...t){let{delegate:n}=ic;return(n?.setImmediate||Dk)(...t)},clearImmediate(t){let{delegate:n}=ic;return(n?.clearImmediate||xk)(t)},delegate:void 0};var vd=class extends xr{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}requestAsyncId(n,e,i=0){return i!==null&&i>0?super.requestAsyncId(n,e,i):(n.actions.push(this),n._scheduled||(n._scheduled=ic.setImmediate(n.flush.bind(n,void 0))))}recycleAsyncId(n,e,i=0){var r;if(i!=null?i>0:this.delay>0)return super.recycleAsyncId(n,e,i);let{actions:o}=n;e!=null&&((r=o[o.length-1])===null||r===void 0?void 0:r.id)!==e&&(ic.clearImmediate(e),n._scheduled===e&&(n._scheduled=void 0))}};var ap=(()=>{class t{constructor(e,i=t.now){this.schedulerActionCtor=e,this.now=i}schedule(e,i=0,r){return new this.schedulerActionCtor(this,e).schedule(r,i)}}return t.now=ec.now,t})();var Er=class extends ap{constructor(n,e=ap.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var yd=class extends Er{flush(n){this._active=!0;let e=this._scheduled;this._scheduled=void 0;let{actions:i}=this,r;n=n||i.shift();do if(r=n.execute(n.state,n.delay))break;while((n=i[0])&&n.id===e&&i.shift());if(this._active=!1,r){for(;(n=i[0])&&n.id===e&&i.shift();)n.unsubscribe();throw r}}};var _d=new yd(vd);var rc=new Er(xr),PS=rc;var bd=class extends xr{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}requestAsyncId(n,e,i=0){return i!==null&&i>0?super.requestAsyncId(n,e,i):(n.actions.push(this),n._scheduled||(n._scheduled=Ns.requestAnimationFrame(()=>n.flush(void 0))))}recycleAsyncId(n,e,i=0){var r;if(i!=null?i>0:this.delay>0)return super.recycleAsyncId(n,e,i);let{actions:o}=n;e!=null&&e===n._scheduled&&((r=o[o.length-1])===null||r===void 0?void 0:r.id)!==e&&(Ns.cancelAnimationFrame(e),n._scheduled=void 0)}};var Sd=class extends Er{flush(n){this._active=!0;let e;n?e=n.id:(e=this._scheduled,this._scheduled=void 0);let{actions:i}=this,r;n=n||i.shift();do if(r=n.execute(n.state,n.delay))break;while((n=i[0])&&n.id===e&&i.shift());if(this._active=!1,r){for(;(n=i[0])&&n.id===e&&i.shift();)n.unsubscribe();throw r}}};var wd=new Sd(bd);var ut=new re(t=>t.complete());function Cd(t){return t&&be(t.schedule)}function cp(t){return t[t.length-1]}function Dd(t){return be(cp(t))?t.pop():void 0}function vi(t){return Cd(cp(t))?t.pop():void 0}function LS(t,n){return typeof cp(t)=="number"?t.pop():n}function VS(t,n,e,i){function r(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function a(d){try{l(i.next(d))}catch(f){s(f)}}function c(d){try{l(i.throw(d))}catch(f){s(f)}}function l(d){d.done?o(d.value):r(d.value).then(a,c)}l((i=i.apply(t,n||[])).next())})}function BS(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function _o(t){return this instanceof _o?(this.v=t,this):new _o(t)}function jS(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(h){return function(v){return Promise.resolve(v).then(h,f)}}function a(h,v){i[h]&&(r[h]=function(C){return new Promise(function(E,M){o.push([h,C,E,M])>1||c(h,C)})},v&&(r[h]=v(r[h])))}function c(h,v){try{l(i[h](v))}catch(C){m(o[0][3],C)}}function l(h){h.value instanceof _o?Promise.resolve(h.value.v).then(d,f):m(o[0][2],h)}function d(h){c("next",h)}function f(h){c("throw",h)}function m(h,v){h(v),o.shift(),o.length&&c(o[0][0],o[0][1])}}function US(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof BS=="function"?BS(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(s){return new Promise(function(a,c){s=t[o](s),r(a,c,s.done,s.value)})}}function r(o,s,a,c){Promise.resolve(c).then(function(l){o({value:l,done:a})},s)}}var xd=(t=>t&&typeof t.length=="number"&&typeof t!="function");function Ed(t){return be(t?.then)}function Id(t){return be(t[Is])}function Nd(t){return Symbol.asyncIterator&&be(t?.[Symbol.asyncIterator])}function Md(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Ek(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Td=Ek();function kd(t){return be(t?.[Td])}function Rd(t){return jS(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield _o(e.read());if(r)return yield _o(void 0);yield yield _o(i)}}finally{e.releaseLock()}})}function Ad(t){return be(t?.getReader)}function Ke(t){if(t instanceof re)return t;if(t!=null){if(Id(t))return Ik(t);if(xd(t))return Nk(t);if(Ed(t))return Mk(t);if(Nd(t))return HS(t);if(kd(t))return Tk(t);if(Ad(t))return kk(t)}throw Md(t)}function Ik(t){return new re(n=>{let e=t[Is]();if(be(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Nk(t){return new re(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function Mk(t){return new re(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,fd)})}function Tk(t){return new re(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function HS(t){return new re(n=>{Rk(t,n).catch(e=>n.error(e))})}function kk(t){return HS(Rd(t))}function Rk(t,n){var e,i,r,o;return VS(this,void 0,void 0,function*(){try{for(e=US(t);i=yield e.next(),!i.done;){let s=i.value;if(n.next(s),n.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function fn(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function Od(t,n=0){return we((e,i)=>{e.subscribe(Se(i,r=>fn(i,t,()=>i.next(r),n),()=>fn(i,t,()=>i.complete(),n),r=>fn(i,t,()=>i.error(r),n)))})}function Fd(t,n=0){return we((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function zS(t,n){return Ke(t).pipe(Fd(n),Od(n))}function $S(t,n){return Ke(t).pipe(Fd(n),Od(n))}function GS(t,n){return new re(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function qS(t,n){return new re(e=>{let i;return fn(e,n,()=>{i=t[Td](),fn(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){e.error(s);return}o?e.complete():e.next(r)},0,!0)}),()=>be(i?.return)&&i.return()})}function Pd(t,n){if(!t)throw new Error("Iterable cannot be null");return new re(e=>{fn(e,n,()=>{let i=t[Symbol.asyncIterator]();fn(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function WS(t,n){return Pd(Rd(t),n)}function KS(t,n){if(t!=null){if(Id(t))return zS(t,n);if(xd(t))return GS(t,n);if(Ed(t))return $S(t,n);if(Nd(t))return Pd(t,n);if(kd(t))return qS(t,n);if(Ad(t))return WS(t,n)}throw Md(t)}function Ye(t,n){return n?KS(t,n):Ke(t)}function Y(...t){let n=vi(t);return Ye(t,n)}function oc(t,n){let e=be(t)?t:()=>t,i=r=>r.error(e());return new re(n?r=>n.schedule(i,0,r):i)}function bo(t){return!!t&&(t instanceof re||be(t.lift)&&be(t.subscribe))}var So=Ds(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function YS(t){return t instanceof Date&&!isNaN(t)}function me(t,n){return we((e,i)=>{let r=0;e.subscribe(Se(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:Ak}=Array;function Ok(t,n){return Ak(n)?t(...n):t(n)}function Ld(t){return me(n=>Ok(t,n))}var{isArray:Fk}=Array,{getPrototypeOf:Pk,prototype:Lk,keys:Bk}=Object;function Bd(t){if(t.length===1){let n=t[0];if(Fk(n))return{args:n,keys:null};if(Vk(n)){let e=Bk(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function Vk(t){return t&&typeof t=="object"&&Pk(t)===Lk}function Vd(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function Ir(...t){let n=vi(t),e=Dd(t),{args:i,keys:r}=Bd(t);if(i.length===0)return Ye([],n);let o=new re(jk(i,n,r?s=>Vd(r,s):Sn));return e?o.pipe(Ld(e)):o}function jk(t,n,e=Sn){return i=>{QS(n,()=>{let{length:r}=t,o=new Array(r),s=r,a=r;for(let c=0;c<r;c++)QS(n,()=>{let l=Ye(t[c],n),d=!1;l.subscribe(Se(i,f=>{o[c]=f,d||(d=!0,a--),a||i.next(e(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function QS(t,n,e){t?fn(e,t,n):n()}function ZS(t,n,e,i,r,o,s,a){let c=[],l=0,d=0,f=!1,m=()=>{f&&!c.length&&!l&&n.complete()},h=C=>l<i?v(C):c.push(C),v=C=>{o&&n.next(C),l++;let E=!1;Ke(e(C,d++)).subscribe(Se(n,M=>{r?.(M),o?h(M):n.next(M)},()=>{E=!0},void 0,()=>{if(E)try{for(l--;c.length&&l<i;){let M=c.shift();s?fn(n,s,()=>v(M)):v(M)}m()}catch(M){n.error(M)}}))};return t.subscribe(Se(n,h,()=>{f=!0,m()})),()=>{a?.()}}function Vt(t,n,e=1/0){return be(n)?Vt((i,r)=>me((o,s)=>n(i,o,r,s))(Ke(t(i,r))),e):(typeof n=="number"&&(e=n),we((i,r)=>ZS(i,r,t,e)))}function Nr(t=1/0){return Vt(Sn,t)}function XS(){return Nr(1)}function Ms(...t){return XS()(Ye(t,vi(t)))}function sc(t){return new re(n=>{Ke(t()).subscribe(n)})}function ac(...t){let n=Dd(t),{args:e,keys:i}=Bd(t),r=new re(o=>{let{length:s}=e;if(!s){o.complete();return}let a=new Array(s),c=s,l=s;for(let d=0;d<s;d++){let f=!1;Ke(e[d]).subscribe(Se(o,m=>{f||(f=!0,l--),a[d]=m},()=>c--,void 0,()=>{(!c||!f)&&(l||o.next(i?Vd(i,a):a),o.complete())}))}});return n?r.pipe(Ld(n)):r}function JS(t=0,n,e=PS){let i=-1;return n!=null&&(Cd(n)?e=n:i=n),new re(r=>{let o=YS(t)?+t-e.now():t;o<0&&(o=0);let s=0;return e.schedule(function(){r.closed||(r.next(s++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function mn(...t){let n=vi(t),e=LS(t,1/0),i=t;return i.length?i.length===1?Ke(i[0]):Nr(e)(Ye(i,n)):ut}var Yi=new re(go);function Te(t,n){return we((e,i)=>{let r=0;e.subscribe(Se(i,o=>t.call(n,o,r++)&&i.next(o)))})}function ew(t){return we((n,e)=>{let i=!1,r=null,o=null,s=!1,a=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let l=r;r=null,e.next(l)}s&&e.complete()},c=()=>{o=null,s&&e.complete()};n.subscribe(Se(e,l=>{i=!0,r=l,o||Ke(t(l)).subscribe(o=Se(e,a,c))},()=>{s=!0,(!i||!o||o.closed)&&e.complete()}))})}function Ts(t,n=rc){return ew(()=>JS(t,n))}function Mr(t){return we((n,e)=>{let i=null,r=!1,o;i=n.subscribe(Se(e,void 0,void 0,s=>{o=Ke(t(s,Mr(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function Tr(t,n){return be(n)?Vt(t,n,1):Vt(t,1)}function cc(t,n=rc){return we((e,i)=>{let r=null,o=null,s=null,a=()=>{if(r){r.unsubscribe(),r=null;let l=o;o=null,i.next(l)}};function c(){let l=s+t,d=n.now();if(d<l){r=this.schedule(void 0,l-d),i.add(r);return}a()}e.subscribe(Se(i,l=>{o=l,s=n.now(),r||(r=n.schedule(c,t),i.add(r))},()=>{a(),i.complete()},void 0,()=>{o=r=null}))})}function tw(t){return we((n,e)=>{let i=!1;n.subscribe(Se(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function St(t){return t<=0?()=>ut:we((n,e)=>{let i=0;n.subscribe(Se(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function jd(t,n=Sn){return t=t??Uk,we((e,i)=>{let r,o=!0;e.subscribe(Se(i,s=>{let a=n(s);(o||!t(r,a))&&(o=!1,r=a,i.next(s))}))})}function Uk(t,n){return t===n}function nw(t=Hk){return we((n,e)=>{let i=!1;n.subscribe(Se(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function Hk(){return new So}function kr(t){return we((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Qi(t,n){let e=arguments.length>=2;return i=>i.pipe(t?Te((r,o)=>t(r,o,i)):Sn,St(1),e?tw(n):nw(()=>new So))}function Ud(t){return t<=0?()=>ut:we((n,e)=>{let i=[];n.subscribe(Se(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function Hd(){return we((t,n)=>{let e,i=!1;t.subscribe(Se(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function lc(t={}){let{connector:n=()=>new I,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let s,a,c,l=0,d=!1,f=!1,m=()=>{a?.unsubscribe(),a=void 0},h=()=>{m(),s=c=void 0,d=f=!1},v=()=>{let C=s;h(),C?.unsubscribe()};return we((C,E)=>{l++,!f&&!d&&m();let M=c=c??n();E.add(()=>{l--,l===0&&!f&&!d&&(a=lp(v,r))}),M.subscribe(E),!s&&l>0&&(s=new Ki({next:O=>M.next(O),error:O=>{f=!0,m(),a=lp(h,e,O),M.error(O)},complete:()=>{d=!0,m(),a=lp(h,i),M.complete()}}),Ke(C).subscribe(s))})(o)}}function lp(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new Ki({next:()=>{i.unsubscribe(),t()}});return Ke(n(...e)).subscribe(i)}function zd(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,lc({connector:()=>new tc(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function dp(t){return Te((n,e)=>t<=e)}function Pt(...t){let n=vi(t);return we((e,i)=>{(n?Ms(t,e,n):Ms(t,e)).subscribe(i)})}function Je(t,n){return we((e,i)=>{let r=null,o=0,s=!1,a=()=>s&&!r&&i.complete();e.subscribe(Se(i,c=>{r?.unsubscribe();let l=0,d=o++;Ke(t(c,d)).subscribe(r=Se(i,f=>i.next(n?n(c,f,d,l++):f),()=>{r=null,a()}))},()=>{s=!0,a()}))})}function Ve(t){return we((n,e)=>{Ke(t).subscribe(Se(e,()=>e.complete(),go)),!e.closed&&n.subscribe(e)})}function Lt(t,n,e){let i=be(t)||n||e?{next:t,error:n,complete:e}:t;return i?we((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let a=!0;r.subscribe(Se(o,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),o.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),o.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),o.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):Sn}var Qd="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",D=class extends Error{code;constructor(n,e){super(hn(n,e)),this.code=n}};function zk(t){return`NG0${Math.abs(t)}`}function hn(t,n){return`${zk(t)}${n?": "+n:""}`}function He(t){for(let n in t)if(t[n]===He)return n;throw Error("")}function cw(t,n){for(let e in n)Object.hasOwn(n,e)&&!Object.hasOwn(t,e)&&(t[e]=n[e])}function gc(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(gc).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function Zd(t,n){return t?n?`${t} ${n}`:t:n||""}var $k=He({__forward_ref__:He});function Tt(t){return t.__forward_ref__=Tt,t}function jt(t){return Dp(t)?t():t}function Dp(t){return typeof t=="function"&&Object.hasOwn(t,$k)&&t.__forward_ref__===Tt}function G(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function B(t){return{providers:t.providers||[],imports:t.imports||[]}}function vc(t){return Gk(t,Xd)}function xp(t){return vc(t)!==null}function Gk(t,n){return Object.hasOwn(t,n)&&t[n]||null}function qk(t){let n=t?.[Xd]??null;return n||null}function fp(t){return t&&Object.hasOwn(t,Gd)?t[Gd]:null}var Xd=He({\u0275prov:He}),Gd=He({\u0275inj:He}),S=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=G({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Ep(t){return t&&!!t.\u0275providers}var yc=He({\u0275cmp:He}),_c=He({\u0275dir:He}),Ip=He({\u0275pipe:He}),Np=He({\u0275mod:He}),fc=He({\u0275fac:He}),Io=He({__NG_ELEMENT_ID__:He}),iw=He({__NG_ENV_ID__:He});function lw(t){return Jd(t,"@NgModule"),t[Np]||null}function er(t){return Jd(t,"@Component"),t[yc]||null}function Mp(t){return Jd(t,"@Directive"),t[_c]||null}function dw(t){return Jd(t,"@Pipe"),t[Ip]||null}function Jd(t,n){if(t==null)throw new D(-919,!1)}function Ar(t){return typeof t=="string"?t:t==null?"":String(t)}var uw=He({ngErrorCode:He}),Wk=He({ngErrorMessage:He}),Kk=He({ngTokenPath:He});function Tp(t,n){return fw("",-200,n)}function eu(t,n){throw new D(-201,!1)}function fw(t,n,e){let i=new D(n,t);return i[uw]=n,i[Wk]=t,e&&(i[Kk]=e),i}function Yk(t){return t[uw]}var mp;function mw(){return mp}function wn(t){let n=mp;return mp=t,n}function kp(t,n,e){let i=vc(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;eu(t,"")}var Yt=globalThis;var Qk={},wo=Qk,Zk="__NG_DI_FLAG__",hp=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=Co(e)||0;try{return this.injector.get(n,i&8?null:wo,i)}catch(r){if(Cs(r))return r;throw r}}};function Xk(t,n=0){let e=ld();if(e===void 0)throw new D(-203,!1);if(e===null)return kp(t,void 0,n);{let i=Jk(n),r=e.retrieve(t,i);if(Cs(r)){if(i.optional)return null;throw r}return r}}function R(t,n=0){return(mw()||Xk)(jt(t),n)}function u(t,n){return R(t,Co(n))}function Co(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function Jk(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function pp(t){let n=[];for(let e=0;e<t.length;e++){let i=jt(t[e]);if(Array.isArray(i)){if(i.length===0)throw new D(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],c=eR(a);typeof c=="number"?c===-1?r=a.token:o|=c:r=a}n.push(R(r,o))}else n.push(R(i))}return n}function eR(t){return t[Zk]}function Do(t,n){let e=Object.hasOwn(t,fc);return e?t[fc]:null}function hw(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function pw(t){return t.flat(Number.POSITIVE_INFINITY)}function tu(t,n){t.forEach(e=>Array.isArray(e)?tu(e,n):n(e))}function Rp(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function bc(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function gw(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function vw(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function nu(t,n,e){let i=Os(t,n);return i>=0?t[i|1]=e:(i=~i,vw(t,i,n,e)),i}function iu(t,n){let e=Os(t,n);if(e>=0)return t[e|1]}function Os(t,n){return tR(t,n,1)}function tR(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),s=t[o<<e];if(n===s)return o<<e;s>n?r=o:i=o+1}return~(r<<e)}var Or={},Kt=[],Fs=new S(""),Sc=new S("",-1),Ap=new S(""),Rs=class{get(n,e=wo){if(e===wo){let r=fw("",-201);throw r.name="\u0275NotFound",r}return e}};function Yn(t){return{\u0275providers:t}}function yw(...t){return{\u0275providers:Op(!0,t),\u0275fromNgModule:!0}}function Op(t,...n){let e=[],i=new Set,r,o=s=>{e.push(s)};return tu(n,s=>{let a=s;qd(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&_w(r,o),e}function _w(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];Fp(r,o=>{n(o,i)})}}function qd(t,n,e,i){if(t=jt(t),!t)return!1;let r=null,o=fp(t),s=!o&&er(t);if(!o&&!s){let c=t.ngModule;if(o=fp(c),o)r=c;else return!1}else{if(s&&!s.standalone)return!1;r=t}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let c=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of c)qd(l,n,e,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let l;tu(o.imports,d=>{qd(d,n,e,i)&&(l||=[],l.push(d))}),l!==void 0&&_w(l,n)}if(!a){let l=Do(r)||(()=>new r);n({provide:r,useFactory:l,deps:Kt},r),n({provide:Ap,useValue:r,multi:!0},r),n({provide:Fs,useValue:()=>R(r),multi:!0},r)}let c=o.providers;if(c!=null&&!a){let l=t;Fp(c,d=>{n(d,l)})}}else return!1;return r!==t&&t.providers!==void 0}function Fp(t,n){for(let e of t)Ep(e)&&(e=e.\u0275providers),Array.isArray(e)?Fp(e,n):n(e)}var nR=He({provide:String,useValue:He});function bw(t){return t!==null&&typeof t=="object"&&nR in t}function iR(t){return!!(t&&t.useExisting)}function rR(t){return!!(t&&t.useFactory)}function xo(t){return typeof t=="function"}function Sw(t){return!!t.useClass}var wc=new S(""),$d={},rw={},up;function Ps(){return up===void 0&&(up=new Rs),up}var ze=class{},Eo=class extends ze{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,vp(n,s=>this.processProvider(s)),this.records.set(Sc,ks(void 0,this)),r.has("environment")&&this.records.set(ze,ks(void 0,this));let o=this.records.get(wc);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Ap,Kt,{self:!0}))}retrieve(n,e){let i=Co(e)||0;try{return this.get(n,wo,i)}catch(r){if(Cs(r))return r;throw r}}destroy(){dc(this),this._destroyed=!0;let n=ce(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),ce(n)}}onDestroy(n){return dc(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){dc(this);let e=gi(this),i=wn(void 0),r;try{return n()}finally{gi(e),wn(i)}}get(n,e=wo,i){if(dc(this),Object.hasOwn(n,iw))return n[iw](this);let r=Co(i),o,s=gi(this),a=wn(void 0);try{if(!(r&4)){let l=this.records.get(n);if(l===void 0){let d=lR(n)&&vc(n);d&&this.injectableDefInScope(d)?l=ks(gp(n),$d):l=null,this.records.set(n,l)}if(l!=null)return this.hydrate(n,l,r)}let c=r&2?Ps():this.parent;return e=r&8&&e===wo?null:e,c.get(n,e)}catch(c){let l=Yk(c);throw l===-200||l===-201?new D(l,null):c}finally{wn(a),gi(s)}}resolveInjectorInitializers(){let n=ce(null),e=gi(this),i=wn(void 0),r;try{let o=this.get(Fs,Kt,{self:!0});for(let s of o)s()}finally{gi(e),wn(i),ce(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=jt(n);let e=xo(n)?n:jt(n&&n.provide),i=sR(n);if(!xo(n)&&n.multi===!0){let r=this.records.get(e);r||(r=ks(void 0,$d,!0),r.factory=()=>pp(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=ce(null);try{if(e.value===rw)throw Tp("");return e.value===$d&&(e.value=rw,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&cR(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{ce(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=jt(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function gp(t){let n=vc(t),e=n!==null?n.factory:Do(t);if(e!==null)return e;if(t instanceof S)throw new D(-204,!1);if(t instanceof Function)return oR(t);throw new D(-204,!1)}function oR(t){if(t.length>0)throw new D(-204,!1);let e=qk(t);return e!==null?()=>e.factory(t):()=>new t}function sR(t){if(bw(t))return ks(void 0,t.useValue);{let n=Pp(t);return ks(n,$d)}}function Pp(t,n,e){let i;if(xo(t)){let r=jt(t);return Do(r)||gp(r)}else if(bw(t))i=()=>jt(t.useValue);else if(rR(t))i=()=>t.useFactory(...pp(t.deps||[]));else if(iR(t))i=(r,o)=>R(jt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=jt(t&&(t.useClass||t.provide));if(aR(t))i=()=>new r(...pp(t.deps));else return Do(r)||gp(r)}return i}function dc(t){if(t.destroyed)throw new D(-205,!1)}function ks(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function aR(t){return!!t.deps}function cR(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function lR(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function vp(t,n){for(let e of t)Array.isArray(e)?vp(e,n):e&&Ep(e)?vp(e.\u0275providers,n):n(e)}function Et(t,n){let e;t instanceof Eo?(dc(t),e=t):e=new hp(t);let i,r=gi(e),o=wn(void 0);try{return n()}finally{gi(r),wn(o)}}function Lp(){return mw()!==void 0||ld()!=null}var Qn=0,oe=1,fe=2,Mt=3,Fn=4,Qt=5,No=6,Ls=7,wt=8,_i=9,Zn=10,Qe=11,Bs=12,Bp=13,Fr=14,on=15,Pr=16,Mo=17,bi=18,Si=19,Vp=20,Zi=21,ru=22,Xi=23,Cn=24,To=25,wi=26,it=27,ww=1,jp=6,ko=7,Cc=8,Ro=9,ft=10;function tr(t){return Array.isArray(t)&&typeof t[ww]=="object"}function Pn(t){return Array.isArray(t)&&t[ww]===!0}function Up(t){return(t.flags&4)!==0}function nr(t){return t.componentOffset>-1}function Vs(t){return(t.flags&1)===1}function Ci(t){return!!t.template}function js(t){return(t[fe]&512)!==0}function Ao(t){return(t[fe]&256)===256}var Fe=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t[t.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",t})(Fe||{}),uc,As="svg",ou="math",Cw="",ow="*",yp=()=>Object.create(null);function dR(){return uc||(uc=yp(),Rr(Fe.HTML,void 0,[["iframe",["srcdoc"]],["*",["innerHTML","outerHTML"]]]),Rr(Fe.STYLE,void 0,[["*",["style"]]]),Rr(Fe.URL,void 0,[["*",["formAction"]],["area",["href"]],["a",["href","xlink:href"]],["form",["action"]],["img",["src"]],["video",["src"]]]),Rr(Fe.URL,ou,[["*",["href","xlink:href"]]]),Rr(Fe.RESOURCE_URL,void 0,[["base",["href"]],["embed",["src"]],["frame",["src"]],["iframe",["src"]],["link",["href"]],["object",["codebase","data"]]]),Rr(Fe.URL,As,[["a",["href","xlink:href"]]]),Rr(Fe.ATTRIBUTE_NO_BINDING,As,[["animate",["attributeName","values","to","from"]],["set",["to","attributeName"]],["animateMotion",["attributeName"]],["animateTransform",["attributeName"]]]),Rr(Fe.ATTRIBUTE_NO_BINDING,void 0,[["unknown",["attributeName","values","to","from","sandbox","allow","allowFullscreen","referrerPolicy","csp","fetchPriority","credentialless"]],["iframe",["sandbox","allow","allowFullscreen","referrerPolicy","csp","fetchPriority","credentialless"]]]),uc)}function Rr(t,n,e){let i=n??Cw;for(let[r,o]of e){let s=r.toLowerCase();for(let a of o){let c=a.toLowerCase(),l=uc[c]??=yp(),d=l[i]??=yp();d[s]=t}}}function Dw(t,n,e){let r=dR()[n.toLowerCase()];if(!r)return Fe.NONE;let o=t.toLowerCase(),s;if(e){let a=r[e];a&&(s=a[o]??a[ow])}if(s===void 0){let a=r[Cw];a&&(s=a[o]??a[ow])}return s??Fe.NONE}function Ut(t){for(;Array.isArray(t);)t=t[Qn];return t}function Hp(t,n){return Ut(n[t])}function Dn(t,n){return Ut(n[t.index])}function su(t,n){return t.data[n]}function zp(t,n){return t[n]}function au(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function Ln(t,n){let e=n[t];return tr(e)?e:e[Qn]}function xw(t){return(t[fe]&4)===4}function cu(t){return(t[fe]&128)===128}function Ew(t){return Pn(t[Mt])}function xn(t,n){return n==null?null:t[n]}function $p(t){t[Mo]=0}function Gp(t){t[fe]&1024||(t[fe]|=1024,cu(t)&&Oo(t))}function Iw(t,n){for(;t>0;)n=n[Fr],t--;return n}function Dc(t){return!!(t[fe]&9216||t[Cn]?.dirty)}function lu(t){t[Zn].changeDetectionScheduler?.notify(8),t[fe]&64&&(t[fe]|=1024),Dc(t)&&Oo(t)}function Oo(t){t[Zn].changeDetectionScheduler?.notify(0);let n=Ji(t);for(;n!==null&&!(n[fe]&8192||(n[fe]|=8192,!cu(n)));)n=Ji(n)}function du(t,n){if(Ao(t))throw new D(911,!1);t[Zi]===null&&(t[Zi]=[]),t[Zi].push(n)}function Nw(t,n){if(t[Zi]===null)return;let e=t[Zi].indexOf(n);e!==-1&&t[Zi].splice(e,1)}function Ji(t){let n=t[Mt];return Pn(n)?n[Mt]:n}function qp(t){return t[Ls]??=[]}function Wp(t){return t.cleanup??=[]}function Mw(t,n,e,i){let r=qp(n);r.push(e),t.firstCreatePass&&Wp(t).push(i,r.length-1)}var Ce={lFrame:jw(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var _p=!1;function Tw(){return Ce.lFrame.elementDepthCount}function kw(){Ce.lFrame.elementDepthCount++}function Kp(){Ce.lFrame.elementDepthCount--}function uu(){return Ce.bindingsEnabled}function Yp(){return Ce.skipHydrationRootTNode!==null}function Qp(t){return Ce.skipHydrationRootTNode===t}function Zp(){Ce.skipHydrationRootTNode=null}function de(){return Ce.lFrame.lView}function Ze(){return Ce.lFrame.tView}function rt(t){return Ce.lFrame.contextLView=t,t[wt]}function ot(t){return Ce.lFrame.contextLView=null,t}function It(){let t=Xp();for(;t!==null&&t.type===64;)t=t.parent;return t}function Xp(){return Ce.lFrame.currentTNode}function Rw(){let t=Ce.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function Fo(t,n){let e=Ce.lFrame;e.currentTNode=t,e.isParent=n}function Jp(){return Ce.lFrame.isParent}function eg(){Ce.lFrame.isParent=!1}function tg(){return Ce.lFrame.contextLView}function ng(){return _p}function mc(t){let n=_p;return _p=t,n}function ig(){let t=Ce.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function Aw(){return Ce.lFrame.bindingIndex}function Ow(t){return Ce.lFrame.bindingIndex=t}function Po(){return Ce.lFrame.bindingIndex++}function fu(t){let n=Ce.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function Fw(){return Ce.lFrame.inI18n}function Pw(t,n){let e=Ce.lFrame;e.bindingIndex=e.bindingRootIndex=t,mu(n)}function Lw(){return Ce.lFrame.currentDirectiveIndex}function mu(t){Ce.lFrame.currentDirectiveIndex=t}function Bw(t){let n=Ce.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function hu(){return Ce.lFrame.currentQueryIndex}function xc(t){Ce.lFrame.currentQueryIndex=t}function uR(t){let n=t[oe];return n.type===2?n.declTNode:n.type===1?t[Qt]:null}function rg(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=uR(o),r===null||(o=o[Fr],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=Ce.lFrame=Vw();return i.currentTNode=n,i.lView=t,!0}function pu(t){let n=Vw(),e=t[oe];Ce.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function Vw(){let t=Ce.lFrame,n=t===null?null:t.child;return n===null?jw(t):n}function jw(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function Uw(){let t=Ce.lFrame;return Ce.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var og=Uw;function gu(){let t=Uw();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function Hw(t){return(Ce.lFrame.contextLView=Iw(t,Ce.lFrame.contextLView))[wt]}function Bn(){return Ce.lFrame.selectedIndex}function Lr(t){Ce.lFrame.selectedIndex=t}function Us(){let t=Ce.lFrame;return su(t.tView,t.selectedIndex)}function Xn(){Ce.lFrame.currentNamespace=As}function Ec(){fR()}function fR(){Ce.lFrame.currentNamespace=null}function sg(){return Ce.lFrame.currentNamespace}var zw=!0;function vu(){return zw}function Ic(t){zw=t}function bp(t,n=null,e=null,i){let r=ag(t,n,e,i);return r.resolveInjectorInitializers(),r}function ag(t,n=null,e=null,i,r=new Set){let o=[e||Kt,yw(t)],s;return new Eo(o,n||Ps(),s||null,r)}var he=class t{static THROW_IF_NOT_FOUND=wo;static NULL=new Rs;static create(n,e){if(Array.isArray(n))return bp({name:""},e,n,"");{let i=n.name??"";return bp({name:i},n.parent,n.providers,i)}}static \u0275prov=G({token:t,providedIn:"any",factory:()=>R(Sc)});static __NG_ELEMENT_ID__=-1},ne=new S(""),nt=class{static __NG_ELEMENT_ID__=mR;static __NG_ENV_ID__=n=>n},Wd=class extends nt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return Ao(this._lView)}onDestroy(n){let e=this._lView;return du(e,n),()=>Nw(e,n)}};function mR(){return new Wd(de())}var $w=!1,Gw=new S(""),Di=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new bt(!1);debugTaskTracker=u(Gw,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new re(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=G({token:t,providedIn:"root",factory:()=>new t})}return t})(),Sp=class extends I{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,Lp()&&(this.destroyRef=u(nt,{optional:!0})??void 0,this.pendingTasks=u(Di,{optional:!0})??void 0)}emit(n){let e=ce(null);try{super.next(n)}finally{ce(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),s=i;if(n&&typeof n=="object"){let c=n;r=c.next?.bind(c),o=c.error?.bind(c),s=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return n instanceof pe&&n.add(a),a}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},se=Sp;function Kd(...t){}function cg(t){let n,e;function i(){t=Kd;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch(r){}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function qw(t){return queueMicrotask(()=>t()),()=>{t=Kd}}var lg="isAngularZone",hc=lg+"_ID",hR=0,V=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new se(!1);onMicrotaskEmpty=new se(!1);onStable=new se(!1);onError=new se(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=$w}=n;if(typeof Zone>"u")throw new D(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,vR(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(lg)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new D(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new D(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,n,pR,Kd,Kd);try{return o.runTask(s,e,i)}finally{o.cancelTask(s)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},pR={};function dg(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function gR(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){cg(()=>{t.callbackScheduled=!1,wp(t),t.isCheckStableRunning=!0,dg(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),wp(t)}function vR(t){let n=()=>{gR(t)},e=hR++;t._inner=t._inner.fork({name:"angular",properties:{[lg]:!0,[hc]:e,[hc+e]:!0},onInvokeTask:(i,r,o,s,a,c)=>{if(yR(c))return i.invokeTask(o,s,a,c);try{return sw(t),i.invokeTask(o,s,a,c)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),aw(t)}},onInvoke:(i,r,o,s,a,c,l)=>{try{return sw(t),i.invoke(o,s,a,c,l)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!_R(c)&&n(),aw(t)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,wp(t),dg(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function wp(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function sw(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function aw(t){t._nesting--,dg(t)}var pc=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new se;onMicrotaskEmpty=new se;onStable=new se;onError=new se;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function yR(t){return Ww(t,"__ignore_ng_zone__")}function _R(t){return Ww(t,"__scheduler_tick__")}function Ww(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var rn=class{_console=console;handleError(n){this._console.error("ERROR",n)}},Vn=new S("",{factory:()=>{let t=u(V),n=u(ze),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(rn),e.handleError(i))})}}}),Kw={provide:Fs,useValue:()=>{let t=u(rn,{optional:!0})},multi:!0};function W(t,n){let[e,i,r]=Gh(t,n?.equal),o=e,s=o[_t];return o.set=i,o.update=r,o.asReadonly=yu.bind(o),o}function yu(){let t=this[_t];if(t.readonlyFn===void 0){let n=()=>this();n[_t]=t,t.readonlyFn=n}return t.readonlyFn}var Lo=new S("",{factory:()=>bR}),bR="ng";var _u=new S(""),Bo=new S("",{providedIn:"platform",factory:()=>"unknown"}),Br=new S(""),Vr=new S("",{factory:()=>u(ne).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Hs=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=SR}return t})();function SR(){return new Hs(de(),It())}var yi=class{},Nc=new S("",{factory:()=>!0});var ug=new S(""),bu=(()=>{class t{static \u0275prov=G({token:t,providedIn:"root",factory:()=>new Cp})}return t})(),Cp=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},Yd=class{[_t];constructor(n){this[_t]=n}destroy(){this[_t].destroy()}};function Zt(t,n){let e=n?.injector??u(he),i=n?.manualCleanup!==!0?e.get(nt):null,r,o=e.get(Hs,null,{optional:!0}),s=e.get(yi);return o!==null?(r=DR(o.view,s,t),i instanceof Wd&&i._lView===o.view&&(i=null)):r=xR(t,e.get(bu),s),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new Yd(r)}var Yw=te(w({},qh),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=mc(!1);try{Wh(this)}finally{mc(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=ce(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],ce(t)}}}),wR=te(w({},Yw),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(Dr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),CR=te(w({},Yw),{consumerMarkedDirty(){this.view[fe]|=8192,Oo(this.view),this.notifier.notify(13)},destroy(){if(Dr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[Xi]?.delete(this)}});function DR(t,n,e){let i=Object.create(CR);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=Qw(i,e),t[Xi]??=new Set,t[Xi].add(i),i.consumerMarkedDirty(i),i}function xR(t,n,e){let i=Object.create(wR);return i.fn=Qw(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function Qw(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function Jn(t){return typeof t=="function"&&t[_t]!==void 0}var Vo=(()=>{class t{internalPendingTasks=u(Di);scheduler=u(yi);errorHandler=u(Vn);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();try{e().catch(this.errorHandler).finally(i)}catch(r){this.errorHandler(r),i()}}static \u0275prov=G({token:t,providedIn:"root",factory:()=>new t})}return t})();function Vc(t){return{toString:t}.toString()}var je=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(je||{}),Tu=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}};function P0(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var L0=null,Xe=(()=>{L0=Zw;let t=()=>Zw;return t.ngInherit=!0,t})();function FR(){return L0}function Zw(t){return t.type.prototype.ngOnChanges&&(t.setInput=LR),PR}function PR(){let t=B0(this),n=t?.current;if(n){let e=t.previous;if(e===Or)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function LR(t,n,e,i,r){let o=this.declaredInputs[i],s=B0(t)||BR(t,{previous:Or,current:null}),a=s.current||(s.current={}),c=s.previous,l=c[o];a[o]=new Tu(l&&l.currentValue,e,c===Or),P0(t,n,r,e)}var wg="__ngSimpleChanges__";function B0(t){return Object.hasOwn(t,wg)&&t[wg]||null}function BR(t,n){return t[wg]=n}var Xw=[];var We=function(t,n=null,e){for(let i=0;i<Xw.length;i++){let r=Xw[i];r(t,n,e)}};function VR(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let s=FR()(n);(e.preOrderHooks??=[]).push(t,s),(e.preOrderCheckHooks??=[]).push(t,s)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function V0(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:d}=o;s&&(t.contentHooks??=[]).push(-e,s),a&&((t.contentHooks??=[]).push(e,a),(t.contentCheckHooks??=[]).push(e,a)),c&&(t.viewHooks??=[]).push(-e,c),l&&((t.viewHooks??=[]).push(e,l),(t.viewCheckHooks??=[]).push(e,l)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function Eu(t,n,e){j0(t,n,3,e)}function Iu(t,n,e,i){(t[fe]&3)===e&&j0(t,n,e,i)}function fg(t,n){let e=t[fe];(e&3)===n&&(e&=16383,e+=1,t[fe]=e)}function j0(t,n,e,i){let r=i!==void 0?t[Mo]&65535:0,o=i??-1,s=n.length-1,a=0;for(let c=r;c<s;c++)if(typeof n[c+1]=="number"){if(a=n[c],i!=null&&a>=i)break}else n[c]<0&&(t[Mo]+=65536),(a<o||o==-1)&&(jR(t,e,n,c),t[Mo]=(t[Mo]&4294901760)+c+2),c++}function Jw(t,n){We(je.LifecycleHookStart,t,n);let e=ce(null);try{n.call(t)}finally{ce(e),We(je.LifecycleHookEnd,t,n)}}function jR(t,n,e,i){let r=e[i]<0,o=e[i+1],s=r?-e[i]:e[i],a=t[s];r?t[fe]>>14<t[Mo]>>16&&(t[fe]&3)===n&&(t[fe]+=16384,Jw(a,o)):Jw(a,o)}var $s=-1,Ho=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function UR(t){return(t.flags&8)!==0}function HR(t){return(t.flags&16)!==0}function zR(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],s=e[i++],a=e[i++];t.setAttribute(n,s,a,o)}else{let o=r,s=e[++i];$R(o)?t.setProperty(n,o,s):t.setAttribute(n,o,s),i++}}return i}function U0(t){return t===3||t===4||t===6}function $R(t){return t.charCodeAt(0)===64}function Gs(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?e0(t,e,r,null,n[++i]):e0(t,e,r,null,null))}}return t}function e0(t,n,e,i,r){let o=0,s=t.length;if(n===-1)s=-1;else for(;o<t.length;){let a=t[o++];if(typeof a=="number"){if(a===n){s=-1;break}else if(a>n){s=o-1;break}}}for(;o<t.length;){let a=t[o];if(typeof a=="number")break;if(a===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(t.splice(s,0,n),o=s+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function H0(t){return t!==$s}function ku(t){return t&32767}function GR(t){return t>>16}function Ru(t,n){let e=GR(t),i=n;for(;e>0;)i=i[Fr],e--;return i}var Cg=!0;function t0(t){let n=Cg;return Cg=t,n}var qR=256,z0=qR-1,$0=5,WR=0,xi={};function KR(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:Object.hasOwn(e,Io)&&(i=e[Io]),i==null&&(i=e[Io]=WR++);let r=i&z0,o=1<<r;n.data[t+(r>>$0)]|=o}function Au(t,n){let e=G0(t,n);if(e!==-1)return e;let i=n[oe];i.firstCreatePass&&(t.injectorIndex=n.length,mg(i.data,t),mg(n,null),mg(i.blueprint,null));let r=ov(t,n),o=t.injectorIndex;if(H0(r)){let s=ku(r),a=Ru(r,n),c=a[oe].data;for(let l=0;l<8;l++)n[o+l]=a[s+l]|c[s+l]}return n[o+8]=r,o}function mg(t,n){t.push(0,0,0,0,0,0,0,0,n)}function G0(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function ov(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=Q0(r),i===null)return $s;if(e++,r=r[Fr],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return $s}function Dg(t,n,e){KR(t,n,e)}function YR(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(U0(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function q0(t,n,e){if(e&8||t!==void 0)return t;eu(n,"NodeInjector")}function W0(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[_i],o=wn(void 0);try{return r?r.get(n,i,e&8):kp(n,i,e&8)}finally{wn(o)}}return q0(i,n,e)}function K0(t,n,e,i=0,r){if(t!==null){if(n[fe]&2048&&!(i&2)){let s=JR(t,n,e,i,xi);if(s!==xi)return s}let o=Y0(t,n,e,i,xi);if(o!==xi)return o}return W0(n,e,i,r)}function Y0(t,n,e,i,r){let o=ZR(e);if(typeof o=="function"){if(!rg(n,t,i))return i&1?q0(r,e,i):W0(n,e,i,r);try{let s;if(s=o(i),s==null&&!(i&8))eu(e);else return s}finally{og()}}else if(typeof o=="number"){let s=null,a=G0(t,n),c=$s,l=i&1?n[on][Qt]:null;for((a===-1||i&4)&&(c=a===-1?ov(t,n):n[a+8],c===$s||!i0(i,!1)?a=-1:(s=n[oe],a=ku(c),n=Ru(c,n)));a!==-1;){let d=n[oe];if(n0(o,a,d.data)){let f=QR(a,n,e,s,i,l);if(f!==xi)return f}c=n[a+8],c!==$s&&i0(i,n[oe].data[a+8]===l)&&n0(o,a,n)?(s=d,a=ku(c),n=Ru(c,n)):a=-1}}return r}function QR(t,n,e,i,r,o){let s=n[oe],a=s.data[t+8],c=i==null?nr(a)&&Cg:i!=s&&(a.type&3)!==0,l=r&1&&o===a,d=Nu(a,s,e,c,l);return d!==null?Rc(n,s,d,a,r):xi}function Nu(t,n,e,i,r){let o=t.providerIndexes,s=n.data,a=o&1048575,c=t.directiveStart,l=t.directiveEnd,d=o>>20,f=i?a:a+d,m=r?a+d:l;for(let h=f;h<m;h++){let v=s[h];if(h<c&&e===v||h>=c&&v.type===e)return h}if(r){let h=s[c];if(h&&Ci(h)&&h.type===e)return c}return null}function Rc(t,n,e,i,r){let o=t[e],s=n.data;if(o instanceof Ho){let a=o;if(a.resolving)throw Tp("");let c=t0(a.canSeeViewProviders);a.resolving=!0;let l=s[e].type||s[e],d,f=a.injectImpl?wn(a.injectImpl):null,m=rg(t,i,0);try{o=t[e]=a.factory(void 0,r,s,t,i),n.firstCreatePass&&e>=i.directiveStart&&VR(e,s[e],n)}finally{f!==null&&wn(f),t0(c),a.resolving=!1,og()}}return o}function ZR(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=Object.hasOwn(t,Io)?t[Io]:void 0;return typeof n=="number"?n>=0?n&z0:XR:n}function n0(t,n,e){let i=1<<t;return!!(e[n+(t>>$0)]&i)}function i0(t,n){return!(t&2)&&!(t&1&&n)}var jr=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return K0(this._tNode,this._lView,n,Co(i),e)}};function XR(){return new jr(It(),de())}function Ie(t){return Vc(()=>{let n=t.prototype.constructor,e=n[fc]||xg(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[fc]||xg(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function xg(t){return Dp(t)?()=>{let n=xg(jt(t));return n&&n()}:Do(t)}function JR(t,n,e,i,r){let o=t,s=n;for(;o!==null&&s!==null&&s[fe]&2048&&!js(s);){let a=Y0(o,s,e,i|2,xi);if(a!==xi)return a;let c=o.parent;if(!c){let l=s[Vp];if(l){let d=l.get(e,xi,i&-5);if(d!==xi)return d}c=Q0(s),s=s[Fr]}o=c}return r}function Q0(t){let n=t[oe],e=n.type;return e===2?n.declTNode:e===1?t[Qt]:null}function jc(t){return YR(It(),t)}function Z0(t){let n=Yt.ng;if(n&&n.\u0275compilerFacade)return n.\u0275compilerFacade;throw new Error("JIT compiler unavailable")}function q(t){return{token:t.token,providedIn:t.autoProvided===!1?null:"root",factory:t.factory,value:void 0}}function eA(){return Qs(It(),de())}function Qs(t,n){return new z(Dn(t,n))}var z=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=eA}return t})();function X0(t){return t instanceof z?t.nativeElement:t}function tA(){return this._results[Symbol.iterator]()}var En=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new I}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=pw(n);(this._changesDetected=!hw(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=tA};function J0(t){return(t.flags&128)===128}var sv=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(sv||{}),eC=new Map,nA=0;function iA(){return nA++}function rA(t){eC.set(t[Si],t)}function Eg(t){eC.delete(t[Si])}var r0="__ngContext__";function qs(t,n){tr(n)?(t[r0]=n[Si],rA(n)):t[r0]=n}function tC(t){return iC(t[Bs])}function nC(t){return iC(t[Fn])}function iC(t){for(;t!==null&&!Pn(t);)t=t[Fn];return t}var Ig;function av(t){Ig=t}function cv(){if(Ig!==void 0)return Ig;if(typeof document<"u")return document;throw new D(210,!1)}var rC="r";var oC="di";var lv=new S(""),sC=!1,aC=new S("",{factory:()=>sC});var Gu=new S("");var o0=new WeakMap;function oA(t,n){if(t==null||typeof t!="object")return;let e=o0.get(t);e||(e=new WeakSet,o0.set(t,e)),e.add(n)}var sA=(t,n,e,i)=>{};function aA(t,n,e,i){sA(t,n,e,i)}function qu(t){return(t.flags&32)===32}var cA=()=>null;function cC(t,n,e=!1){return cA(t,n,e)}function lC(t,n){let e=t.contentQueries;if(e!==null){let i=ce(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],s=e[r+1];if(s!==-1){let a=t.data[s];xc(o),a.contentQueries(2,n[s],s)}}}finally{ce(i)}}}function Ng(t,n,e){xc(0);let i=ce(null);try{n(t,e)}finally{ce(i)}}function dv(t,n,e){if(Up(n)){let i=ce(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let s=r;s<o;s++){let a=t.data[s];if(a.contentQueries){let c=e[s];a.contentQueries(1,c,s)}}}finally{ce(i)}}}var ni=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(ni||{});var lA={"http://www.w3.org/2000/svg":As,"http://www.w3.org/1998/Math/MathML":ou},Su;function dA(){if(Su===void 0&&(Su=null,Yt.trustedTypes))try{Su=Yt.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch(t){}return Su}function Wu(t){return dA()?.createHTML(t)||t}var wu;function dC(){if(wu===void 0&&(wu=null,Yt.trustedTypes))try{wu=Yt.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch(t){}return wu}function s0(t){return dC()?.createHTML(t)||t}function a0(t){return dC()?.createScriptURL(t)||t}var ir=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Qd})`}},Mg=class extends ir{getTypeName(){return"HTML"}},Tg=class extends ir{getTypeName(){return"Style"}},kg=class extends ir{getTypeName(){return"Script"}},Rg=class extends ir{getTypeName(){return"URL"}},Ag=class extends ir{getTypeName(){return"ResourceURL"}};function pn(t){return t instanceof ir?t.changingThisBreaksApplicationSecurity:t}function Ii(t,n){let e=uC(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${Qd})`)}return e===n}function uC(t){return t instanceof ir&&t.getTypeName()||null}function uv(t){return new Mg(t)}function fv(t){return new Tg(t)}function mv(t){return new kg(t)}function hv(t){return new Rg(t)}function pv(t){return new Ag(t)}function uA(t){let n=new Fg(t);return fA()?new Og(n):n}var Og=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(Wu(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch(e){return null}}},Fg=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=Wu(n),e}};function fA(){try{return!!new window.DOMParser().parseFromString(Wu(""),"text/html")}catch(t){return!1}}var mA=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Uc(t){return t=String(t),t.match(mA)?t:"unsafe:"+t}function rr(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function Hc(...t){let n={};for(let e of t)for(let i in e)Object.hasOwn(e,i)&&(n[i]=!0);return n}var fC=rr("area,br,col,hr,img,wbr"),mC=rr("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),hC=rr("rp,rt"),hA=Hc(hC,mC),pA=Hc(mC,rr("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),gA=Hc(hC,rr("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),c0=Hc(fC,pA,gA,hA),pC=rr("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),vA=rr("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),yA=rr("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),_A=Hc(pC,vA,yA),bA=rr("script,style,template"),Pg=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=CA(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=wA(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=l0(n).toLowerCase();if(!Object.hasOwn(c0,e))return this.sanitizedSomething=!0,!Object.hasOwn(bA,e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),s=o.name,a=s.toLowerCase();if(!Object.hasOwn(_A,a)){this.sanitizedSomething=!0;continue}let c=o.value;pC[a]&&(c=Uc(c)),this.buf.push(" ",s,'="',d0(c),'"')}return this.buf.push(">"),!0}endElement(n){let e=l0(n).toLowerCase();Object.hasOwn(c0,e)&&!Object.hasOwn(fC,e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(d0(n))}};function SA(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function wA(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw gC(n);return n}function CA(t){let n=t.firstChild;if(n&&SA(t,n))throw gC(n);return n}function l0(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function gC(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var DA=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,xA=/([^\#-~ |!])/g;function d0(t){return t.replace(/&/g,"&amp;").replace(DA,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(xA,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Cu;function Ku(t,n){let e=null;try{Cu=Cu||uA(t);let i=n?String(n):"";e=Cu.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=Cu.getInertBodyElement(i)}while(i!==o);let a=new Pg().sanitizeChildren(u0(e)||e);return Wu(a)}finally{if(e){let i=u0(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function u0(t){return"content"in t&&EA(t)?t.content:null}function EA(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}var IA=/^>|^->|<!--|-->|--!>|<!-$/g,NA=/(<|>)/g,MA="\u200B$1\u200B";function TA(t){return t.replace(IA,n=>n.replace(NA,MA))}function kA(t,n){return t.createText(n)}function RA(t,n,e){t.setValue(n,e)}function AA(t,n){return t.createComment(TA(n))}function vC(t,n,e){return t.createElement(n,e)}function jo(t,n,e,i,r){t.insertBefore(n,e,i,r)}function yC(t,n,e){t.appendChild(n,e)}function f0(t,n,e,i,r){i!==null?jo(t,n,e,i,r):yC(t,n,e)}function _C(t,n,e,i){t.removeChild(null,n,e,i)}function OA(t,n,e){t.setAttribute(n,"style",e)}function FA(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function bC(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&zR(t,n,i),r!==null&&FA(t,n,r),o!==null&&OA(t,n,o)}function PA(t,n=!0){if(t[0]!=":")return[null,t];let e=t.indexOf(":",1);if(e===-1){if(n)throw new Error(`Unsupported format "${t}" expecting ":namespace:name"`);return[null,t]}return[t.slice(1,e),t.slice(e+1)]}function gv(t,n,e){if(n!==void 0&&e!==void 0&&wC(n,e)!==Fe.HTML)return t;let i=yv();return i?s0(i.sanitize(Fe.HTML,t)||""):Ii(t,"HTML")?s0(pn(t)):Ku(cv(),Ar(t))}function Bt(t){let n=yv();return n?n.sanitize(Fe.URL,t)||"":Ii(t,"URL")?pn(t):Uc(Ar(t))}function SC(t){let n=yv();if(n)return a0(n.sanitize(Fe.RESOURCE_URL,t)||"");if(Ii(t,"ResourceURL"))return a0(pn(t));throw new D(904,!1)}function LA(t,n){switch(wC(t,n)){case Fe.RESOURCE_URL:return SC;case Fe.URL:return Bt;default:return null}}function vv(t,n,e){return LA(n,e)?.(t)??t}function yv(){let t=de();return t&&t[Zn].sanitizer}function wC(t,n){let[e,i]=BA(t);return Dw(i,n,e)}function BA(t){t=t.toLowerCase();let n=PA(t,!1);if(n[0])return n;let i=Bn()===-1?null:Us(),r=i?.namespace;if(t==="#host"&&i?.type===2){let o=Dn(i,de());if(o.tagName&&(t=o.tagName.toLowerCase()),r==null){let s=o.namespaceURI;r=s&&lA[s]}}return[r,t]}function VA(t){return t instanceof Function?t():t}function jA(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var CC="ng-template";function UA(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&jA(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(_v(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function _v(t){return t.type===4&&t.value!==CC}function HA(t,n,e){let i=t.type===4&&!e?CC:t.value;return n===i}function zA(t,n,e){let i=4,r=t.attrs,o=r!==null?qA(r):0,s=!1;for(let a=0;a<n.length;a++){let c=n[a];if(typeof c=="number"){if(!s&&!ei(i)&&!ei(c))return!1;if(s&&ei(c))continue;s=!1,i=c|i&1;continue}if(!s)if(i&4){if(i=2|i&1,c!==""&&!HA(t,c,e)||c===""&&n.length===1){if(ei(i))return!1;s=!0}}else if(i&8){if(r===null||!UA(t,r,c,e)){if(ei(i))return!1;s=!0}}else{let l=n[++a],d=$A(c,r,_v(t),e);if(d===-1){if(ei(i))return!1;s=!0;continue}if(l!==""){let f;if(d>o?f="":f=r[d+1].toLowerCase(),i&2&&l!==f){if(ei(i))return!1;s=!0}}}}return ei(i)||s}function ei(t){return(t&1)===0}function $A(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let s=n[r];if(s===t)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=n[++r];for(;typeof a=="string";)a=n[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return WA(n,t)}function DC(t,n,e=!1){for(let i=0;i<n.length;i++)if(zA(t,n[i],e))return!0;return!1}function GA(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function qA(t){for(let n=0;n<t.length;n++){let e=t[n];if(U0(e))return n}return t.length}function WA(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function KA(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function m0(t,n){return t?":not("+n.trim()+")":n}function YA(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let s=t[e];if(typeof s=="string")if(i&2){let a=t[++e];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!ei(s)&&(n+=m0(o,r),r=""),i=s,o=o||!ei(i);e++}return r!==""&&(n+=m0(o,r)),n}function QA(t){return t.map(YA).join(",")}function ZA(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!ei(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var sn={},ii=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(ii||{}),XA;function bv(t,n){return XA(t,n)}var Ur=new Set;var R6=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Lg=new WeakMap;function xC(t){return t?t[Fr]??t:null}var Mc=new WeakSet;function JA(t,n,e){let i=Lg.get(t);if(!i||i.length===0)return;let r=n.parentNode,o=n.previousSibling,s=xC(e);for(let a=i.length-1;a>=0;a--){let{el:c,declarationView:l}=i[a],d=c.parentNode;c===n?(i.splice(a,1),Mc.add(c),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):o&&c===o?(i.splice(a,1),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),c.parentNode?.removeChild(c)):d&&r&&d!==r&&(s===null||l===null||s===l)&&(i.splice(a,1),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),c.parentNode?.removeChild(c))}}function eO(t,n,e){let i=xC(e),r=Lg.get(t);r?r.some(o=>o.el===n)||r.push({el:n,declarationView:i}):Lg.set(t,[{el:n,declarationView:i}])}var Yu=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(Yu||{}),ri=new S(""),h0=new Set;function In(t){h0.has(t)||(h0.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var Qu=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=G({token:t,providedIn:"root",factory:()=>new t})}return t})(),Sv=[0,1,2,3],wv=(()=>{class t{ngZone=u(V);scheduler=u(yi);errorHandler=u(rn,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(ri,{optional:!0})}execute(){let e=this.sequences.size>0;e&&We(je.AfterRenderHooksStart),this.executing=!0;for(let i of Sv)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&We(je.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[To]??=[]).push(e),Oo(i),i[fe]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(Yu.AFTER_NEXT_RENDER,e):e()}static \u0275prov=G({token:t,providedIn:"root",factory:()=>new t})}return t})(),Ac=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,s=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[To];n&&(this.view[To]=n.filter(e=>e!==this))}};function Ht(t,n){let e=n?.injector??u(he);return In("NgAfterNextRender"),nO(t,e,n,!0)}function tO(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function nO(t,n,e,i){let r=n.get(Qu);r.impl??=n.get(wv);let o=n.get(ri,null,{optional:!0}),s=e?.manualCleanup!==!0?n.get(nt):null,a=n.get(Hs,null,{optional:!0}),c=new Ac(r.impl,tO(t),a?.view,i,s,o?.snapshot(null));return r.impl.register(c),c}var Cv=new S("",{factory:()=>{let t=u(ze),n=new Set;return t.onDestroy(()=>n.clear()),{queue:n,isScheduled:!1,scheduler:null,injector:t}}});function EC(t,n,e){let i=t.get(Cv);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function iO(t,n){let e=t.get(Cv);if(Array.isArray(n))for(let i of n)e.queue.delete(i);else e.queue.delete(n)}function rO(t,n){let e=t.get(Cv);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function oO(t,n){for(let[e,i]of n)EC(t,i.animateFns)}function p0(t,n,e,i){let r=t?.[wi]?.enter;n!==null&&r&&r.has(e.index)&&oO(i,r)}function g0(t,n,e,i){try{e.get(Sc)}catch(s){return i(!1)}let r=t?.[wi];r?.enter?.has(n.index)&&iO(e,r.enter.get(n.index).animateFns);let o=sO(t,n,r);if(o.size===0){let s=!1;if(t){let a=[];Zu(t,n,a),s=a.length>0}if(!s)return i(!1)}t&&Ur.add(t[Si]),EC(e,()=>aO(t,n,r||void 0,o,i),r||void 0)}function sO(t,n,e){let i=new Map,r=e?.leave;if(r&&r.has(n.index)&&i.set(n.index,r.get(n.index)),t&&r)for(let[o,s]of r){if(i.has(o))continue;let c=t[oe].data[o].parent;for(;c;){if(c===n){i.set(o,s);break}c=c.parent}}return i}function aO(t,n,e,i,r){let o=[];if(e&&e.leave)for(let[s]of i){if(!e.leave.has(s))continue;let a=e.leave.get(s);for(let c of a.animateFns){let{promise:l}=c();o.push(l)}e.detachedLeaveAnimationFns=void 0}if(t&&Zu(t,n,o),o.length>0){let s=e||t?.[wi];if(s){let a=s.running;a&&o.push(a),s.running=Promise.allSettled(o),lO(t,s.running,r)}else Promise.allSettled(o).then(()=>{t&&Ur.delete(t[Si]),r(!0)})}else t&&Ur.delete(t[Si]),r(!1)}function Zu(t,n,e){if(n.type&12){let r=t[n.index];if(Pn(r))for(let o=ft;o<r.length;o++){let s=r[o];s[oe].type===2&&cO(s,e)}}let i=n.child;for(;i;)Zu(t,i,e),i=i.next}function cO(t,n){let e=t[wi];if(e&&e.leave)for(let r of e.leave.values())for(let o of r.animateFns){let{promise:s}=o();n.push(s)}let i=t[oe].firstChild;for(;i;)Zu(t,i,n),i=i.next}function lO(t,n,e){n.then(()=>{t[wi]?.running===n&&(t[wi].running=void 0,Ur.delete(t[Si])),e(!0)})}function zs(t,n,e,i,r,o,s,a){if(r!=null){let c,l=!1;Pn(r)?c=r:tr(r)&&(l=!0,r=r[Qn]);let d=Ut(r);t===0&&i!==null?(p0(a,i,o,e),s==null?yC(n,i,d):jo(n,i,d,s||null,!0)):t===1&&i!==null?(p0(a,i,o,e),jo(n,i,d,s||null,!0),JA(o,d,a)):t===2?(a?.[wi]?.leave?.has(o.index)&&eO(o,d,a),Mc.delete(d),g0(a,o,e,f=>{if(Mc.has(d)){Mc.delete(d);return}_C(n,d,l,f)})):t===3&&(Mc.delete(d),g0(a,o,e,()=>{n.destroyNode(d)})),c!=null&&bO(n,t,e,c,o,i,s)}}function dO(t,n){IC(t,n),n[Qn]=null,n[Qt]=null}function uO(t,n,e,i,r,o){i[Qn]=r,i[Qt]=n,Ju(t,i,e,1,r,o)}function IC(t,n){n[Zn].changeDetectionScheduler?.notify(9),Ju(t,n,n[Qe],2,null,null)}function fO(t){let n=t[Bs];if(!n)return hg(t[oe],t);for(;n;){let e=null;if(tr(n))e=n[Bs];else{let i=n[ft];i&&(e=i)}if(!e){for(;n&&!n[Fn]&&n!==t;)tr(n)&&hg(n[oe],n),n=n[Mt];n===null&&(n=t),tr(n)&&hg(n[oe],n),e=n&&n[Fn]}n=e}}function Dv(t,n){let e=t[Ro],i=e.indexOf(n);e.splice(i,1)}function Xu(t,n){if(Ao(n))return;let e=n[Qe];e.destroyNode&&Ju(t,n,e,3,null,null),fO(n)}function hg(t,n){if(Ao(n))return;let e=ce(null);try{n[fe]&=-129,n[fe]|=256,n[Cn]&&Dr(n[Cn]),hO(t,n),mO(t,n),n[oe].type===1&&n[Qe].destroy();let i=n[Pr];if(i!==null&&Pn(n[Mt])){i!==n[Mt]&&Dv(i,n);let r=n[bi];r!==null&&r.detachView(t)}Eg(n)}finally{ce(e)}}function mO(t,n){let e=t.cleanup,i=n[Ls];if(e!==null)for(let s=0;s<e.length-1;s+=2)if(typeof e[s]=="string"){let a=e[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[e[s+1]];e[s].call(a)}i!==null&&(n[Ls]=null);let r=n[Zi];if(r!==null){n[Zi]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=n[Xi];if(o!==null){n[Xi]=null;for(let s of o)s.destroy()}}function hO(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof Ho)){let o=e[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],c=o[s+1];We(je.LifecycleHookStart,a,c);try{c.call(a)}finally{We(je.LifecycleHookEnd,a,c)}}else{We(je.LifecycleHookStart,r,o);try{o.call(r)}finally{We(je.LifecycleHookEnd,r,o)}}}}}function NC(t,n,e){return pO(t,n.parent,e)}function pO(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[Qn];if(nr(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===ni.None||r===ni.Emulated)return null}return Dn(i,e)}function MC(t,n,e){return vO(t,n,e)}function gO(t,n,e){return t.type&40?Dn(t,e):null}var vO=gO,v0;function xv(t,n,e,i){let r=NC(t,i,n),o=n[Qe],s=i.parent||n[Qt],a=MC(s,i,n);if(r!=null)if(Array.isArray(e))for(let c=0;c<e.length;c++)f0(o,r,e[c],a,!1);else f0(o,r,e,a,!1);v0!==void 0&&v0(o,i,n,e,r)}function Tc(t,n){if(n!==null){let e=n.type;if(e&3)return Dn(n,t);if(e&4)return Bg(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return Tc(t,i);{let r=t[n.index];return Pn(r)?Bg(-1,r):Ut(r)}}else{if(e&128)return Tc(t,n.next);if(e&32)return bv(n,t)()||Ut(t[n.index]);{let i=TC(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=Ji(t[on]);return Tc(r,i)}else return Tc(t,n.next)}}}return null}function TC(t,n){if(n!==null){let i=t[on][Qt],r=n.projection;return i.projection[r]}return null}function Bg(t,n){let e=ft+t+1;if(e<n.length){let i=n[e],r=i[oe].firstChild;if(r!==null)return Tc(i,r)}return n[ko]}function Ev(t,n,e,i,r,o,s){for(;e!=null;){let a=i[_i];if(e.type===128){e=e.next;continue}let c=i[e.index],l=e.type;if(s&&n===0&&(c&&qs(Ut(c),i),e.flags|=2),!qu(e))if(l&8)Ev(t,n,e.child,i,r,o,!1),zs(n,t,a,r,c,e,o,i);else if(l&32){let d=bv(e,i),f;for(;f=d();)zs(n,t,a,r,f,e,o,i);zs(n,t,a,r,c,e,o,i)}else l&16?kC(t,n,i,e,r,o):zs(n,t,a,r,c,e,o,i);e=s?e.projectionNext:e.next}}function Ju(t,n,e,i,r,o){t.type===3?yO(e,i,n,r,o):Ev(e,i,t.firstChild,n,r,o,!1)}function yO(t,n,e,i,r){let s=e[oe].firstChild,a=s.next,c=Ut(e[s.index]),l=Ut(e[a.index]),d=a.index+1,f=e[d];if(n===1||n===0)i!==null&&(f&&f.hasChildNodes()?jo(t,i,f,r,!0):(jo(t,i,c,r,!0),jo(t,i,l,r,!0)));else if(n===2){if(f||(f=document.createDocumentFragment(),e[d]=f),c&&c.parentNode===f)return;let m=c;for(;m!==null;){let h=m.nextSibling;if(f.appendChild(m),m===l)break;m=h}}}function _O(t,n,e){let i=n[Qe],r=NC(t,e,n),o=e.parent||n[Qt],s=MC(o,e,n);kC(i,0,n,e,r,s)}function kC(t,n,e,i,r,o){let s=e[on],c=s[Qt].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let d=c[l];zs(n,t,e[_i],r,d,i,o,e)}else{let l=c,d=s[Mt];J0(i)&&(l.flags|=128),Ev(t,n,l,d,r,o,!0)}}function bO(t,n,e,i,r,o,s){let a=i[ko],c=Ut(i);if(a!==c&&zs(n,t,e,o,a,r,s),(i[fe]&4)===0)for(let l=ft;l<i.length;l++){let d=i[l];Ju(d[oe],d,t,n,o,a)}}function SO(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:ii.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=ii.Important),t.setStyle(e,i,r,o))}}function Iv(t,n,e,i,r,o,s,a,c,l,d){let f=it+i,m=f+r,h=wO(f,m),v=typeof l=="function"?l():l;return h[oe]={type:t,blueprint:h,template:e,queries:null,viewQuery:a,declTNode:n,data:h.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:m,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:c,consts:v,incompleteFirstPass:!1,ssrId:d}}function wO(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:sn);return e}function CO(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=Iv(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function Nv(t,n,e,i,r,o,s,a,c,l,d){let f=n.blueprint.slice();return f[Qn]=r,f[fe]=i|4|128|8|64|1024,(l!==null||t&&t[fe]&2048)&&(f[fe]|=2048),$p(f),f[Mt]=f[Fr]=t,f[wt]=e,f[Zn]=s||t&&t[Zn],f[Qe]=a||t&&t[Qe],f[_i]=c||t&&t[_i]||null,f[Qt]=o,f[Si]=iA(),f[No]=d,f[Vp]=l,f[on]=n.type==2?t[on]:f,f}function DO(t,n,e){let i=Dn(n,t),r=CO(e),o=t[Zn].rendererFactory,s=Mv(t,Nv(t,r,null,RC(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=s}function RC(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function AC(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function Mv(t,n){return t[Bs]?t[Bp][Fn]=n:t[Bs]=n,t[Bp]=n,n}function _(t=1){OC(Ze(),de(),Bn()+t,!1)}function OC(t,n,e,i){if(!i)if((n[fe]&3)===3){let o=t.preOrderCheckHooks;o!==null&&Eu(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Iu(n,o,0,e)}Lr(e)}var ef=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(ef||{});function zo(t,n,e,i){let r=ce(null);try{let[o,s,a]=t.inputs[e],c=null;(s&ef.SignalBased)!==0&&(c=n[o][_t]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(n,i)),t.setInput!==null?t.setInput(n,c,i,e,o):P0(n,c,o,i)}finally{ce(r)}}function FC(t,n,e,i,r){let o=Bn(),s=i&2;try{Lr(-1),s&&n.length>it&&OC(t,n,it,!1);let a=s?je.TemplateUpdateStart:je.TemplateCreateStart;We(a,r,e),e(i,r)}finally{Lr(o);let a=s?je.TemplateUpdateEnd:je.TemplateCreateEnd;We(a,r,e)}}function tf(t,n,e){kO(t,n,e),(e.flags&64)===64&&RO(t,n,e)}function zc(t,n,e=Dn){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?e(n,t):t[s];t[r++]=a}}}function xO(t,n,e,i){let o=i.get(aC,sC)||e===ni.ShadowDom||e===ni.ExperimentalIsolatedShadowDom,s=t.selectRootElement(n,o);return EO(s),s}function EO(t){IO(t)}var IO=()=>null;function NO(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function MO(t,n,e,i,r,o){let s=n[oe];if(Av(t,s,n,e,i)){nr(t)&&TO(n,t.index);return}t.type&3&&(e=NO(e)),PC(t,n,e,i,r,o)}function PC(t,n,e,i,r,o){if(t.type&3){let s=Dn(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(s,e,i)}else t.type&12}function TO(t,n){let e=Ln(n,t);e[fe]&16||(e[fe]|=64)}function kO(t,n,e){let i=e.directiveStart,r=e.directiveEnd;nr(e)&&DO(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||Au(e,n);let o=e.initialInputs;for(let s=i;s<r;s++){let a=t.data[s],c=Rc(n,t,s,e);if(qs(c,n),o!==null&&PO(n,s-i,c,a,e,o),Ci(a)){let l=Ln(e.index,n);l[wt]=Rc(n,t,s,e)}}}function RO(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,s=Lw();try{Lr(o);for(let a=i;a<r;a++){let c=t.data[a],l=n[a];mu(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&AO(c,l)}}finally{Lr(-1),mu(s)}}function AO(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function Tv(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];DC(n,o.selectors,!1)&&(i??=[],Ci(o)?i.unshift(o):i.push(o))}return i}function OO(t,n,e,i,r,o){let s=Dn(t,n);FO(n[Qe],s,o,t.value,e,i,r)}function FO(t,n,e,i,r,o,s){if(o==null)s?.(o,i||"",r),t.removeAttribute(n,r,e);else{let a=s==null?Ar(o):s(o,i||"",r);t.setAttribute(n,r,a,e)}}function PO(t,n,e,i,r,o){let s=o[n];if(s!==null)for(let a=0;a<s.length;a+=2){let c=s[a],l=s[a+1];zo(i,e,c,l)}}function kv(t,n,e,i,r){let o=it+e,s=n[oe],a=r(s,n,t,i,e);n[o]=a,Fo(t,!0);let c=t.type===2;return c?(bC(n[Qe],a,t),(Tw()===0||Vs(t))&&qs(a,n),kw()):qs(a,n),vu()&&(!c||!qu(t))&&xv(s,n,a,t),t}function Rv(t){let n=t;return Jp()?eg():(n=n.parent,Fo(n,!1)),n}function LO(t,n){let e=t[_i];if(!e)return;let i;try{i=e.get(Vn,null)}catch(r){i=null}i?.(n)}function Av(t,n,e,i,r){let o=t.inputs?.[i],s=t.hostDirectiveInputs?.[i],a=!1;if(s)for(let c=0;c<s.length;c+=2){let l=s[c],d=s[c+1],f=n.data[l];zo(f,e[l],d,r),a=!0}if(o)for(let c of o){let l=e[c],d=n.data[c];zo(d,l,i,r),a=!0}return a}function BO(t,n,e,i,r,o){let s=null,a=null,c=null,l=!1,d=t.directiveToIndex.get(i.type);if(typeof d=="number"?s=d:[s,a,c]=d,a!==null&&c!==null&&t.hostDirectiveInputs&&Object.hasOwn(t.hostDirectiveInputs,r)){let f=t.hostDirectiveInputs[r];for(let m=0;m<f.length;m+=2){let h=f[m];if(h>=a&&h<=c){let v=n.data[h],C=f[m+1];zo(v,e[h],C,o),l=!0}else if(h>c)break}}return s!==null&&Object.hasOwn(i.inputs,r)&&(zo(i,e[s],r,o),l=!0),l}function VO(t,n){let e=Ln(n,t),i=e[oe];jO(i,e);let r=e[Qn];r!==null&&e[No]===null&&(e[No]=cC(r,e[_i])),We(je.ComponentStart);try{Ov(i,e,e[wt])}finally{We(je.ComponentEnd,e[wt])}}function jO(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function Ov(t,n,e){pu(n);try{let i=t.viewQuery;i!==null&&Ng(1,i,e);let r=t.template;r!==null&&FC(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[bi]?.finishViewCreation(t),t.staticContentQueries&&lC(t,n),t.staticViewQueries&&Ng(2,t.viewQuery,e);let o=t.components;o!==null&&UO(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[fe]&=-5,gu()}}function UO(t,n){for(let e=0;e<n.length;e++)VO(t,n[e])}function $c(t,n,e,i){let r=ce(null);try{let o=n.tView,a=t[fe]&4096?4096:16,c=Nv(t,o,e,a,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=t[n.index];c[Pr]=l;let d=t[bi];return d!==null&&(c[bi]=d.createEmbeddedView(o)),Ov(o,c,e),c}finally{ce(r)}}function Ws(t,n){return!n||n.firstChild===null||J0(t)}function Oc(t,n,e,i,r=!1){if(t.type===3){let o=t.firstChild,s=o.next,a=Ut(n[o.index]),c=Ut(n[s.index]),l=a;for(;l!==null&&(i.push(l),l!==c);)l=l.nextSibling;return i}for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];if(o!==null)if(Pn(o)){let a=o[ko];a!==o[Qn]&&i.push(Ut(o)),o[fe]&4||LC(o,i),i.push(a)}else i.push(Ut(o));let s=e.type;if(s&8)Oc(t,n,e.child,i);else if(s&32){let a=bv(e,n),c;for(;c=a();)i.push(c)}else if(s&16){let a=TC(n,e);if(Array.isArray(a))i.push(...a);else{let c=Ji(n[on]);Oc(c[oe],c,a,i,!0)}}e=r?e.projectionNext:e.next}return i}function LC(t,n){for(let e=ft;e<t.length;e++){let i=t[e],r=i[oe].firstChild;r!==null&&Oc(i[oe],i,r,n)}}function BC(t){if(t[To]!==null){for(let n of t[To])n.impl.addSequence(n);t[To].length=0}}var VC=[];function HO(t){return t[Cn]??zO(t)}function zO(t){let n=VC.pop()??Object.create(GO);return n.lView=t,n}function $O(t){t.lView[Cn]!==t&&(t.lView=null,VC.push(t))}var GO=te(w({},Sr),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Oo(t.lView)},consumerOnSignalRead(){this.lView[Cn]=this}});function qO(t){let n=t[Cn]??Object.create(WO);return n.lView=t,n}var WO=te(w({},Sr),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=Ji(t.lView);for(;n&&!jC(n[oe]);)n=Ji(n);n&&Gp(n)},consumerOnSignalRead(){this.lView[Cn]=this}});function jC(t){return t.type!==2}function UC(t){if(t[Xi]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[Xi])if(i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()),t[Xi]===null))return;n=e&&!!(t[fe]&8192)}}var KO=100;function HC(t,n=0){let i=t[Zn].rendererFactory,r=!1;r||i.begin?.();try{YO(t,n)}finally{r||i.end?.()}}function YO(t,n){let e=ng();try{mc(!0),Vg(t,n);let i=0;for(;Dc(t);){if(i===KO)throw new D(103,!1);i++,Vg(t,1)}}finally{mc(e)}}function QO(t,n,e,i){if(Ao(n))return;let r=n[fe],o=!1,s=!1;pu(n);let a=!0,c=null,l=null;o||(jC(t)?(l=HO(n),c=Wi(l)):ad()===null?(a=!1,l=qO(n),c=Wi(l)):n[Cn]&&(Dr(n[Cn]),n[Cn]=null));try{$p(n),Ow(t.bindingStartIndex),e!==null&&FC(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let h=t.preOrderCheckHooks;h!==null&&Eu(n,h,null)}else{let h=t.preOrderHooks;h!==null&&Iu(n,h,0,null),fg(n,0)}if(s||ZO(n),UC(n),zC(n,0),t.contentQueries!==null&&lC(t,n),!o)if(d){let h=t.contentCheckHooks;h!==null&&Eu(n,h)}else{let h=t.contentHooks;h!==null&&Iu(n,h,1),fg(n,1)}JO(t,n);let f=t.components;f!==null&&GC(n,f,0);let m=t.viewQuery;if(m!==null&&Ng(2,m,i),!o)if(d){let h=t.viewCheckHooks;h!==null&&Eu(n,h)}else{let h=t.viewHooks;h!==null&&Iu(n,h,2),fg(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[ru]){for(let h of n[ru])h();n[ru]=null}o||(BC(n),n[fe]&=-73)}catch(d){throw o||Oo(n),d}finally{l!==null&&(Cr(l,c),a&&$O(l)),gu()}}function zC(t,n){for(let e=tC(t);e!==null;e=nC(e))for(let i=ft;i<e.length;i++){let r=e[i];$C(r,n)}}function ZO(t){for(let n=tC(t);n!==null;n=nC(n)){if(!(n[fe]&2))continue;let e=n[Ro];for(let i=0;i<e.length;i++){let r=e[i];Gp(r)}}}function XO(t,n,e){We(je.ComponentStart);let i=Ln(n,t);try{$C(i,e)}finally{We(je.ComponentEnd,i[wt])}}function $C(t,n){cu(t)&&Vg(t,n)}function Vg(t,n){let i=t[oe],r=t[fe],o=t[Cn],s=!!(n===0&&r&16);if(s||=!!(r&64&&n===0),s||=!!(r&1024),s||=!!(o?.dirty&&Ss(o)),s||=!1,o&&(o.dirty=!1),t[fe]&=-9217,s)QO(i,t,i.template,t[wt]);else if(r&8192){let a=ce(null);try{UC(t),zC(t,1);let c=i.components;c!==null&&GC(t,c,1),BC(t)}finally{ce(a)}}}function GC(t,n,e){for(let i=0;i<n.length;i++)XO(t,n[i],e)}function JO(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)Lr(~r);else{let o=r,s=e[++i],a=e[++i];Pw(s,o);let c=n[o];We(je.HostBindingsUpdateStart,c);try{a(2,c)}finally{We(je.HostBindingsUpdateEnd,c)}}}}finally{Lr(-1)}}function Fv(t,n){let e=ng()?64:1088;for(t[Zn].changeDetectionScheduler?.notify(n);t;){t[fe]|=e;let i=Ji(t);if(js(t)&&!i)return t;t=i}return null}function qC(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function WC(t,n){let e=ft+n;if(e<t.length)return t[e]}function Gc(t,n,e,i=!0){let r=n[oe];if(e1(r,n,t,e),i){let s=Bg(e,t),a=n[Qe],c=a.parentNode(t[ko]);c!==null&&uO(r,t[Qt],a,n,c,s)}let o=n[No];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function KC(t,n){let e=Fc(t,n);return e!==void 0&&Xu(e[oe],e),e}function Fc(t,n){if(t.length<=ft)return;let e=ft+n,i=t[e];if(i){let r=i[Pr];r!==null&&r!==t&&Dv(r,i),n>0&&(t[e-1][Fn]=i[Fn]);let o=bc(t,ft+n);dO(i[oe],i);let s=o[bi];s!==null&&s.detachView(o[oe]),i[Mt]=null,i[Fn]=null,i[fe]&=-129}return i}function e1(t,n,e,i){let r=ft+i,o=e.length;i>0&&(e[r-1][Fn]=n),i<o-ft?(n[Fn]=e[r],Rp(e,ft+i,n)):(e.push(n),n[Fn]=null),n[Mt]=e;let s=n[Pr];s!==null&&e!==s&&YC(s,n);let a=n[bi];a!==null&&a.insertView(t),lu(n),n[fe]|=128}function YC(t,n){let e=t[Ro],i=n[Mt];if(tr(i))t[fe]|=2;else{let r=i[Mt][on];n[on]!==r&&(t[fe]|=2)}e===null?t[Ro]=[n]:e.push(n)}var Hr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[oe];return Oc(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[wt]}set context(n){this._lView[wt]=n}get destroyed(){return Ao(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[Mt];if(Pn(n)){let e=n[Cc],i=e?e.indexOf(this):-1;i>-1&&(Fc(n,i),bc(e,i))}this._attachedToViewContainer=!1}Xu(this._lView[oe],this._lView)}onDestroy(n){du(this._lView,n)}markForCheck(){Fv(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[fe]&=-129}reattach(){lu(this._lView),this._lView[fe]|=128}detectChanges(){this._lView[fe]|=1024,HC(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new D(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=js(this._lView),e=this._lView[Pr];e!==null&&!n&&Dv(e,this._lView),IC(this._lView[oe],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new D(902,!1);this._appRef=n;let e=js(this._lView),i=this._lView[Pr];i!==null&&!e&&YC(i,this._lView),lu(this._lView)}};var Ct=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=t1;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=$c(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new Hr(o)}}return t})();function t1(){return nf(It(),de())}function nf(t,n){return t.type&4?new Ct(n,t,Qs(t,n)):null}function qo(t,n,e,i,r){let o=t.data[n];if(o===null)o=n1(t,n,e,i,r),Fw()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let s=Rw();o.injectorIndex=s===null?-1:s.injectorIndex}return Fo(o,!0),o}function n1(t,n,e,i,r){let o=Xp(),s=Jp(),a=s?o:o&&o.parent,c=t.data[n]=r1(t,a,e,n,i,r);return i1(t,c,o,s),c}function i1(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function r1(t,n,e,i,r,o){let s=n?n.injectorIndex:-1,a=0;return Yp()&&(a|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,namespace:sg(),attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function o1(t){let n=t[jp]??[],i=t[Mt][Qe],r=[];for(let o of n)o.data[oC]!==void 0?r.push(o):s1(o,i);t[jp]=r}function s1(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[rC];for(;e<r;){let o=i.nextSibling;_C(n,i,!1),i=o,e++}}}var a1=()=>null,c1=()=>null;function Ou(t,n){return a1(t,n)}function QC(t,n,e){return c1(t,n,e)}var ZC=class{},mt=class{},$e=class{destroyNode=null;static __NG_ELEMENT_ID__=()=>l1()};function l1(){let t=de(),n=It(),e=Ln(n.index,t);return(tr(e)?e:t)[Qe]}var XC=(()=>{class t{static \u0275prov=G({token:t,providedIn:"root",factory:()=>null})}return t})();function JC(t){return t.debugInfo?.className||t.type.name||null}var Mu={},Fu=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,Mu,i);return r!==Mu||e===Mu?r:this.parentInjector.get(n,e,i)}};function Pv(t){return rf(t)?Array.isArray(t)||!(t instanceof Map)&&Symbol.iterator in t:!1}function eD(t,n){if(Array.isArray(t))for(let e=0;e<t.length;e++)n(t[e]);else{let e=t[Symbol.iterator](),i;for(;!(i=e.next()).done;)n(i.value)}}function rf(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function tD(t,n,e){return t[n]=e}function d1(t,n){return t[n]}function jn(t,n,e){if(e===sn)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function u1(t,n,e,i){let r=jn(t,n,e);return jn(t,n+1,i)||r}function f1(t,n,e,i,r){let o=u1(t,n,e,i);return jn(t,n+2,r)||o}function Uo(t,n,e){return function i(r){let o=i.__ngNativeEl__;o!==void 0&&oA(r,o);let s=nr(t)?Ln(t.index,n):n;Fv(s,5);let a=n[wt],c=y0(n,a,e,r),l=i.__ngNextListenerFn__;for(;l;)c=y0(n,a,l,r)&&c,l=l.__ngNextListenerFn__;return c}}function y0(t,n,e,i){let r=ce(null);try{return We(je.OutputStart,n,e),e(i)!==!1}catch(o){return LO(t,o),!1}finally{We(je.OutputEnd,n,e),ce(r)}}function Lv(t,n,e,i,r,o,s,a){let c=Vs(t),l=!1,d=null;if(!i&&c&&(d=h1(n,e,o,t.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,l=!0}else{let f=Dn(t,e),m=i?i(f):f;aA(e,m,o,a),i||(a.__ngNativeEl__=f);let h=r.listen(m,o,a);if(!m1(o)){let v=i?C=>i(Ut(C[t.index])):t.index;nD(v,n,e,o,a,h,!1)}}return l}function m1(t){return t.startsWith("animation")||t.startsWith("transition")}function h1(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===e&&r[o+1]===i){let a=n[Ls],c=r[o+2];return a&&a.length>c?a[c]:null}typeof s=="string"&&(o+=2)}return null}function nD(t,n,e,i,r,o,s){let a=n.firstCreatePass?Wp(n):null,c=qp(e),l=c.length;c.push(r,o),a&&a.push(i,t,l,(l+1)*(s?-1:1))}function _0(t,n,e,i,r){let o=null,s=null,a=null,c=!1,l=t.directiveToIndex.get(e.type);if(typeof l=="number"?o=l:[o,s,a]=l,s!==null&&a!==null&&t.hostDirectiveOutputs&&Object.hasOwn(t.hostDirectiveOutputs,i)){let d=t.hostDirectiveOutputs[i];for(let f=0;f<d.length;f+=2){let m=d[f];if(m>=s&&m<=a)c=!0,Pu(t,n,m,d[f+1],i,r);else if(m>a)break}}return Object.hasOwn(e.outputs,i)&&(c=!0,Pu(t,n,o,i,i,r)),c}function Pu(t,n,e,i,r,o){let s=n[e],a=n[oe],l=a.data[e].outputs[i],f=s[l].subscribe(o);nD(t.index,a,n,r,o,f,!0)}function Ni(){p1()}function p1(){let t=de(),n=Ze(),e=It();if(n.firstCreatePass&&v1(n,e),e.controlDirectiveIndex===-1)return;In("NgSignalForms");let i=t[e.controlDirectiveIndex];n.data[e.controlDirectiveIndex].controlDef.create(i,new Lu(t,n,e))}function Mi(){g1()}function g1(){let t=de(),n=Ze(),e=Us();if(e.controlDirectiveIndex===-1)return;let i=n.data[e.controlDirectiveIndex].controlDef,r=t[e.controlDirectiveIndex];i.update(r,new Lu(t,n,e))}var Lu=class{lView;tView;tNode;hasPassThrough;constructor(n,e,i){this.lView=n,this.tView=e,this.tNode=i,this.hasPassThrough=!!(i.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get nativeElement(){return Dn(this.tNode,this.lView)}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(n,e){let i=this.tView.data[this.tNode.customControlIndex];_0(this.tNode,this.lView,i,n,Uo(this.tNode,this.lView,e))}listenToCustomControlModel(n){let e=this.tNode.flags&1024?"valueChange":"checkedChange",i=this.tView.data[this.tNode.customControlIndex];_0(this.tNode,this.lView,i,e,Uo(this.tNode,this.lView,n))}listenToDom(n,e){Lv(this.tNode,this.tView,this.lView,void 0,this.lView[Qe],n,e,Uo(this.tNode,this.lView,e))}setInputOnDirectives(n,e){let i=this.tNode.inputs?.[n],r=this.tNode.hostDirectiveInputs?.[n];if(!i&&!r)return!1;let o=!1;if(i)for(let s of i){if(s===this.tNode.controlDirectiveIndex)continue;let a=this.tView.data[s],c=this.lView[s];zo(a,c,n,e),o=!0}if(r)for(let s=0;s<r.length;s+=2){let a=r[s];if(a===this.tNode.controlDirectiveIndex)continue;let c=r[s+1],l=this.tView.data[a],d=this.lView[a];zo(l,d,c,e),o=!0}return o}setCustomControlModelInput(n){let e=this.tView.data[this.tNode.customControlIndex],i=this.tNode.flags&1024?"value":"checked";BO(this.tNode,this.tView,this.lView,e,i,n)}customControlHasInput(n){if(this.tNode.customControlIndex===-1)return!1;let e=this.tView.data[this.tNode.customControlIndex];return(e.signalFormsInputPresence??=this._buildCustomControlInputCache(e))[n]===!0}_buildCustomControlInputCache(n){let e={};for(let i in n.inputs)e[i]=!0;if(n.hostDirectives!==null){let i=[...n.hostDirectives];for(;i.length>0;){let r=i.shift();if(typeof r!="function"){for(let s in r.inputs)e[r.inputs[s]]=!0;let o=b0(r.directive);o!==null&&i.push(...o);continue}for(let o of r()){if(typeof o=="function")continue;if(o.inputs)for(let a=0;a<o.inputs.length;a+=2){let c=o.inputs[a+1]||o.inputs[a];e[c]=!0}let s=b0(o.directive);s!==null&&i.push(...s)}}}return e}};function b0(t){return typeof t=="function"&&"\u0275dir"in t?t.\u0275dir.hostDirectives??null:null}function v1(t,n,e){for(let r=n.directiveStart;r<n.directiveEnd;r++)if(t.data[r].controlDef){n.controlDirectiveIndex=r;break}if(n.controlDirectiveIndex===-1)return;let i=t.data[n.controlDirectiveIndex].controlDef;if(i.passThroughInput&&(n.inputs?.[i.passThroughInput]?.length??0)>1){n.flags|=4096;return}y1(t,n)}function y1(t,n){for(let e=n.directiveStart;e<n.directiveEnd;e++){let i=t.data[e];if(!(n.directiveToIndex&&!n.directiveToIndex.has(i.type))){if(S0(i,"value")){n.flags|=1024,n.customControlIndex=e;return}if(S0(i,"checked")){n.flags|=2048,n.customControlIndex=e;return}}}if(n.hostDirectiveInputs!==null&&n.hostDirectiveOutputs!==null&&n.directiveToIndex!==null){let e=(i,r)=>{let o=n.hostDirectiveInputs[i],s=n.hostDirectiveOutputs[i+"Change"];if(!o||!s)return!1;for(let a=0;a<o.length;a+=2){let c=o[a];for(let l=0;l<s.length;l+=2){let d=s[l];if(c===d)for(let f of n.directiveToIndex.values()){if(!Array.isArray(f))continue;let[m,h,v]=f;if(c>=h&&c<=v)return n.flags|=r,n.customControlIndex=m,!0}}}return!1};if(e("value",1024)||e("checked",2048))return}}function S0(t,n){return _1(t,n)&&b1(t,n+"Change")}function _1(t,n){return n in t.inputs}function b1(t,n){return n in t.outputs}var jg=Symbol("BINDING");var Wo=new S("");function Bu(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let s=0;s<n.length;s++){let a=n[s];if(typeof a=="number")o=a;else if(o==1)r=Zd(r,a);else if(o==2){let c=a,l=n[++s];i=Zd(i,c+": "+l+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function De(t,n=0){let e=de();if(e===null)return R(t,n);let i=It();return K0(i,e,jt(t),n)}function Ko(){let t="invalid";throw new Error(t)}function iD(t,n,e,i,r){let o=i===null?null:{"":-1},s=r(t,e);if(s!==null){let a=s,c=null,l=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,c,l]=d.resolveHostDirectives(s);break}C1(t,n,e,a,o,c,l)}o!==null&&i!==null&&S1(e,i,o)}function S1(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new D(-301,!1);i.push(n[r],o)}}function w1(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function C1(t,n,e,i,r,o,s){let a=i.length,c=null;for(let m=0;m<a;m++){let h=i[m];c===null&&Ci(h)&&(c=h,w1(t,e,m)),Dg(Au(e,n),t,h.type)}M1(e,t.data.length,a),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let m=0;m<a;m++){let h=i[m];h.providersResolver&&h.providersResolver(h)}let l=!1,d=!1,f=AC(t,n,a,null);a>0&&(e.directiveToIndex=new Map);for(let m=0;m<a;m++){let h=i[m];if(e.mergedAttrs=Gs(e.mergedAttrs,h.hostAttrs),x1(t,e,n,f,h),N1(f,h,r),s!==null&&s.has(h)){let[C,E]=s.get(h);e.directiveToIndex.set(h.type,[f,C+e.directiveStart,E+e.directiveStart])}else(o===null||!o.has(h))&&e.directiveToIndex.set(h.type,f);h.contentQueries!==null&&(e.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(e.flags|=64);let v=h.type.prototype;!l&&(v.ngOnChanges||v.ngOnInit||v.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),l=!0),!d&&(v.ngOnChanges||v.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),f++}D1(t,e,o)}function D1(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))w0(0,n,r,i),w0(1,n,r,i),D0(n,i,!1);else{let o=e.get(r);C0(0,n,o,i),C0(1,n,o,i),D0(n,i,!0)}}}function w0(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(Object.hasOwn(r,o)){let s;t===0?s=n.inputs??={}:s=n.outputs??={},s[o]??=[],s[o].push(i),rD(n,o)}}function C0(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(Object.hasOwn(r,o)){let s=r[o],a;t===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),rD(n,s)}}function rD(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function D0(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||_v(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!e&&Object.hasOwn(r,c)){let l=r[c];for(let d of l)if(d===n){s??=[],s.push(c,i[a+1]);break}}else if(e&&Object.hasOwn(o,c)){let l=o[c];for(let d=0;d<l.length;d+=2)if(l[d]===n){s??=[],s.push(l[d+1],i[a+1]);break}}a+=2}t.initialInputs??=[],t.initialInputs.push(s)}function x1(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=Do(r.type,!0)),s=new Ho(o,Ci(r),De,null);t.blueprint[i]=s,e[i]=s,E1(t,n,i,AC(t,e,r.hostVars,sn),r)}function E1(t,n,e,i,r){let o=r.hostBindings;if(o){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~n.index;I1(s)!=a&&s.push(a),s.push(e,i,o)}}function I1(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function N1(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;Ci(n)&&(e[""]=t)}}function M1(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function Bv(t,n,e,i,r,o,s,a){let c=n[oe],l=c.consts,d=xn(l,s),f=qo(c,t,e,i,d);return o&&iD(c,n,f,xn(l,a),r),f.mergedAttrs=Gs(f.mergedAttrs,f.attrs),f.attrs!==null&&Bu(f,f.attrs,!1),f.mergedAttrs!==null&&Bu(f,f.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,f),f}function Vv(t,n){V0(t,n),Up(n)&&t.queries.elementEnd(n)}function T1(t,n,e,i,r,o){let s=n.consts,a=xn(s,r),c=qo(n,t,e,i,a);if(c.mergedAttrs=Gs(c.mergedAttrs,c.attrs),o!=null){let l=xn(s,o);c.localNames=[];for(let d=0;d<l.length;d+=2)c.localNames.push(l[d],-1)}return c.attrs!==null&&Bu(c,c.attrs,!1),c.mergedAttrs!==null&&Bu(c,c.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,c),c}var oD=typeof ShadowRoot<"u",k1=typeof Document<"u";function R1(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&ef.SignalBased)!==0};return r&&(o.transform=r),o})}function A1(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function O1(t,n,e){let i=n instanceof ze?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new Fu(e,i):e}function F1(t){let n=t.get(mt,null);if(n===null)throw new D(407,!1);let e=t.get(XC,null),i=t.get(yi,null),r=t.get(ri,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function P1(t,n){let e=sD(t);return vC(n,e,e==="svg"?As:e==="math"?ou:null)}function L1(t){if((t&&"localName"in t&&typeof t.localName=="string"?t.localName:t?.tagName)?.toLowerCase()==="script")throw new D(905,!1)}function sD(t){return(t.selectors[0][0]||"div").toLowerCase()}var $o=class{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=R1(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=A1(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=QA(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,s){We(je.DynamicComponentStart);let a=ce(null);try{let c=this.componentDef,l=O1(c,r||this.ngModule,n),d=F1(l),f=d.tracingService;return f&&f.componentCreate?f.componentCreate(JC(c),()=>this.createComponentRef(d,l,e,i,o,s)):this.createComponentRef(d,l,e,i,o,s)}finally{ce(a)}}createComponentRef(n,e,i,r,o,s){let a=this.componentDef,c=B1(r,a,s,o),l=n.rendererFactory.createRenderer(null,a),d=r?xO(l,r,a.encapsulation,e):P1(a,l);L1(d);let f=e.get(Wo,null),m=V1(d,()=>e.get(ne,null)??cv());f&&f.addHost(m);let h=s?.some(x0)||o?.some(E=>typeof E!="function"&&E.bindings.some(x0)),v=Nv(null,c,null,512|RC(a),null,null,n,l,e,null,cC(d,e,!0));f&&oD&&m instanceof ShadowRoot&&du(v,()=>{f.removeHost(m)}),v[it]=d,pu(v);let C=null;try{let E=Bv(it,v,2,"#host",()=>c.directiveRegistry,!0,0);bC(l,d,E),qs(d,v),tf(c,v,E),dv(c,E,v),Vv(c,E),i!==void 0&&U1(E,this.ngContentSelectors,i),C=Ln(E.index,v),v[wt]=C[wt],Ov(c,v,null)}catch(E){throw C!==null&&Eg(C),Eg(v),E}finally{We(je.DynamicComponentEnd),gu()}return new Vu(this.componentType,v,!!h)}};function B1(t,n,e,i){let r=t?["ng-version","22.1.3"]:ZA(n.selectors[0]),o=null,s=null,a=0;if(e)for(let d of e)a+=d[jg].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let f=i[d];if(typeof f!="function")for(let m of f.bindings){a+=m[jg].requiredVars;let h=d+1;m.create&&(m.targetIdx=h,(o??=[]).push(m)),m.update&&(m.targetIdx=h,(s??=[]).push(m))}}let c=[n];if(i)for(let d of i){let f=typeof d=="function"?d:d.type,m=Mp(f);c.push(m)}return Iv(0,null,j1(o,s),1,a,c,null,null,null,[r],null)}function V1(t,n){let e=t.getRootNode?.();return k1&&e instanceof Document?e.head:e&&oD&&e instanceof ShadowRoot?e:n().head}function j1(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function x0(t){let n=t[jg].kind;return n==="input"||n==="twoWay"}var Vu=class extends ZC{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=su(e[oe],it),this.location=Qs(this._tNode,e),this.instance=Ln(this._tNode.index,e)[wt],this.hostView=this.changeDetectorRef=new Hr(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=Av(i,r[oe],r,n,e);this.previousInputValues.set(n,e);let s=Ln(i.index,r);Fv(s,1)}get injector(){return new jr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function U1(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var st=(()=>{class t{static __NG_ELEMENT_ID__=H1}return t})();function H1(){let t=It();return aD(t,de())}var Ug=class t extends st{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return Qs(this._hostTNode,this._hostLView)}get injector(){return new jr(this._hostTNode,this._hostLView)}get parentInjector(){let n=ov(this._hostTNode,this._hostLView);if(H0(n)){let e=Ru(n,this._hostLView),i=ku(n),r=e[oe].data[i+8];return new jr(r,e)}else return new jr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=E0(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-ft}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=Ou(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(e||{},o,s);return this.insertImpl(a,r,Ws(this._hostTNode,s)),a}createComponent(n,e,i,r,o,s,a){let c,l=e||{};c=l.index,i=l.injector,r=l.projectableNodes,o=l.environmentInjector||l.ngModuleRef,s=l.directives,a=l.bindings;let d=new $o(er(n)),f=i||this.parentInjector;if(!o&&d.ngModule==null){let M=this.parentInjector.get(ze,null);M&&(o=M)}let m=er(d.componentType??{}),h=Ou(this._lContainer,m?.id??null),v=h?.firstChild??null,C=d.create(f,r,v,o,s,a);return this.insertImpl(C.hostView,c,Ws(this._hostTNode,h)),C}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(Ew(r)){let a=this.indexOf(n);if(a!==-1)this.detach(a);else{let c=r[Mt],l=new t(c,c[Qt],c[Mt]);l.detach(l.indexOf(n))}}let o=this._adjustIndex(e),s=this._lContainer;return Gc(s,r,o,i),n.attachToViewContainerRef(),Rp(pg(s),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=E0(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=Fc(this._lContainer,e);i&&(bc(pg(this._lContainer),e),Xu(i[oe],i))}detach(n){let e=this._adjustIndex(n,-1),i=Fc(this._lContainer,e);return i&&bc(pg(this._lContainer),e)!=null?new Hr(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function E0(t){return t[Cc]}function pg(t){return t[Cc]||(t[Cc]=[])}function aD(t,n){let e,i=n[t.index];return Pn(i)?e=i:(e=qC(i,n,null,t),n[t.index]=e,Mv(n,e)),$1(e,n,t,i),new Ug(e,t,n)}function z1(t,n){let e=t[Qe],i=e.createComment(""),r=Dn(n,t),o=e.parentNode(r);return jo(e,o,i,e.nextSibling(r),!1),i}var $1=W1,G1=()=>!1;function q1(t,n,e){return G1(t,n,e)}function W1(t,n,e,i){if(t[ko])return;let r;e.type&8?r=Ut(i):r=z1(n,e),t[ko]=r}var Hg=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},zg=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let s=e.getByIndex(o),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)Uv(n,e).matches!==null&&this.queries[e].setDirty()}},ju=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=X1(n):this.predicate=n}},$g=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Gg=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,K1(e,o)),this.matchTNodeWithReadOption(n,e,Nu(e,n,o,!1,!1))}else i===Ct?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Nu(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===z||r===st||r===Ct&&e.type&4)this.addMatch(e.index,-2);else{let o=Nu(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function K1(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function Y1(t,n){return t.type&11?Qs(t,n):t.type&4?nf(t,n):null}function Q1(t,n,e,i){return e===-1?Y1(n,t):e===-2?Z1(t,n,i):Rc(t,t[oe],e,n)}function Z1(t,n,e){if(e===z)return Qs(n,t);if(e===Ct)return nf(n,t);if(e===st)return aD(n,t)}function cD(t,n,e,i){let r=n[bi].queries[i];if(r.matches===null){let o=t.data,s=e.matches,a=[];for(let c=0;s!==null&&c<s.length;c+=2){let l=s[c];if(l<0)a.push(null);else{let d=o[l];a.push(Q1(n,d,s[c+1],e.metadata.read))}}r.matches=a}return r.matches}function qg(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let s=cD(t,n,r,e);for(let a=0;a<o.length;a+=2){let c=o[a];if(c>0)i.push(s[a/2]);else{let l=o[a+1],d=n[-c];for(let f=ft;f<d.length;f++){let m=d[f];m[Pr]===m[Mt]&&qg(m[oe],m,l,i)}if(d[Ro]!==null){let f=d[Ro];for(let m=0;m<f.length;m++){let h=f[m];qg(h[oe],h,l,i)}}}}}return i}function jv(t,n){return t[bi].queries[n].queryList}function lD(t,n,e){let i=new En((e&4)===4);return Mw(t,n,i,i.destroy),(n[bi]??=new zg).queries.push(new Hg(i))-1}function dD(t,n,e){let i=Ze();return i.firstCreatePass&&(fD(i,new ju(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),lD(i,de(),n)}function uD(t,n,e,i){let r=Ze();if(r.firstCreatePass){let o=It();fD(r,new ju(n,e,i),o.index),J1(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return lD(r,de(),e)}function X1(t){return t.split(",").map(n=>n.trim())}function fD(t,n,e){t.queries===null&&(t.queries=new $g),t.queries.track(new Gg(n,e))}function J1(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function Uv(t,n){return t.queries.getByIndex(n)}function mD(t,n){let e=t[oe],i=Uv(e,n);return i.crossesNgTemplate?qg(e,t,n,[]):cD(e,t,i,n)}function hD(t,n,e){let i,r=Za(()=>{i._dirtyCounter();let o=eF(i,t);if(n&&o===void 0)throw new D(-951,!1);return o});return i=r[_t],i._dirtyCounter=W(0),i._flatValue=void 0,r}function Hv(t){return hD(!0,!1,t)}function zv(t){return hD(!0,!0,t)}function pD(t,n){let e=t[_t];e._lView=de(),e._queryIndex=n,e._queryList=jv(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function eF(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[fe]&4)return n?void 0:Kt;let r=jv(e,i),o=mD(e,i);return r.reset(o,X0),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}function or(t){return!!t&&typeof t.then=="function"}function $v(t){return!!t&&typeof t.subscribe=="function"}var Ei=class{},of=class{};var Pc=class extends Ei{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=lw(n);this._bootstrapComponents=VA(o.bootstrap),this._r3Injector=ag(n,e,[{provide:Ei,useValue:this},...i],gc(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},Lc=class extends of{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new Pc(this.moduleType,n,[])}};function gD(t,n,e){return new Pc(t,n,e,!1)}var Uu=class extends Ei{injector;instance=null;constructor(n){super();let e=new Eo([...n.providers,{provide:Ei,useValue:this}],n.parent||Ps(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Zs(t,n,e=null){return new Uu({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var tF=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=Op(!1,e.type),r=i.length>0?Zs([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=G({token:t,providedIn:"environment",factory:()=>new t(R(ze))})}return t})();function A(t){return Vc(()=>{let n=vD(t),e=te(w({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection!==sv.Eager,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(tF).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||ni.Emulated,styles:t.styles||Kt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&In("NgStandalone"),yD(e);let i=t.dependencies;return e.directiveDefs=I0(i,nF),e.pipeDefs=I0(i,dw),e.id=oF(e),e})}function nF(t){return er(t)||Mp(t)}function j(t){return Vc(()=>({type:t.type,bootstrap:t.bootstrap||Kt,declarations:t.declarations||Kt,imports:t.imports||Kt,exports:t.exports||Kt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function iF(t,n){if(t==null)return Or;let e={};for(let i in t)if(Object.hasOwn(t,i)){let r=t[i],o,s,a,c;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,c=r[3]||null):(o=r,s=r,a=ef.None,c=null),e[o]=[i,a,c],n[o]=s}return e}function rF(t){if(t==null)return Or;let n={};for(let e in t)Object.hasOwn(t,e)&&(n[t[e]]=e);return n}function x(t){return Vc(()=>{let n=vD(t);return yD(n),n})}function vD(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||Or,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||Kt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,signalFormsInputPresence:null,inputs:iF(t.inputs,n),outputs:rF(t.outputs),debugInfo:null}}function yD(t){t.features?.forEach(n=>n(t))}function I0(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function oF(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}var Gv=new S("");function Xs(t){return Yn([{provide:Gv,multi:!0,useValue:t}])}var qv=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(Gv,{optional:!0})??[];injector=u(he);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=Et(this.injector,r);if(or(o))e.push(o);else if($v(o)){let s=new Promise((a,c)=>{o.subscribe({complete:a,error:c})});e.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})(),Wg=new Map,sF=new Set;function Wv(t){return Ae(this,null,function*(){let n=Wg;Wg=new Map;let e=new Map;function i(o){let s=e.get(o);if(s)return s;let a=t(o).then(c=>aF(o,c));return e.set(o,a),a}let r=Array.from(n).map(a=>Ae(null,[a],function*([o,s]){if(s.styleUrl&&s.styleUrls?.length)throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple");let c=[];s.templateUrl&&c.push(i(s.templateUrl).then(m=>{s.template=m}));let l=typeof s.styles=="string"?[s.styles]:s.styles??[];s.styles=l;let{styleUrl:d,styleUrls:f}=s;if(d&&(f=[d],s.styleUrl=void 0),f?.length){let m=Promise.all(f.map(h=>i(h))).then(h=>{l.push(...h),s.styleUrls=void 0});c.push(m)}yield Promise.all(c),sF.delete(o)}));yield Promise.all(r)})}function _D(){return Wg.size===0}function aF(t,n){return Ae(this,null,function*(){if(typeof n=="string")return n;if(n.status!==void 0&&n.status!==200)throw new D(918,!1);return n.text()})}function Kv(t){return n=>{n.controlDef={create:(e,i)=>{e?.\u0275ngControlCreate(i)},update:(e,i)=>{e?.\u0275ngControlUpdate?.(i)},passThroughInput:t}}}function cF(t){return Object.getPrototypeOf(t.prototype).constructor}function le(t){let n=cF(t.type),e=!0,i=[t];for(;n&&n!==Function.prototype&&n!==Object.prototype;){let r,o=Object.hasOwn(n,yc)?n[yc]:void 0,s=Object.hasOwn(n,_c)?n[_c]:void 0;if(Ci(t))r=o??s;else{if(o)throw new D(903,!1);r=s}if(r){if(e){i.push(r);let c=t;c.inputs=gg(t.inputs),c.declaredInputs=gg(t.declaredInputs),c.outputs=gg(t.outputs);let l=r.hostBindings;l&&mF(t,l);let d=r.viewQuery,f=r.contentQueries;if(d&&uF(t,d),f&&fF(t,f),lF(t,r),cw(t.outputs,r.outputs),Ci(r)&&r.data.animation){let m=t.data;m.animation=(m.animation||[]).concat(r.data.animation)}}let a=r.features;if(a)for(let c=0;c<a.length;c++){let l=a[c];l&&l.ngInherit&&l(t),l===le&&(e=!1)}}n=Object.getPrototypeOf(n)}dF(i)}function lF(t,n){for(let e in n.inputs){if(!Object.hasOwn(n.inputs,e)||Object.hasOwn(t.inputs,e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function dF(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=Gs(r.hostAttrs,e=Gs(e,r.hostAttrs))}}function gg(t){return t===Or?{}:t===Kt?[]:t}function uF(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function fF(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function mF(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function bD(t,n,e,i,r,o,s,a){if(e.firstCreatePass){t.mergedAttrs=Gs(t.mergedAttrs,t.attrs);let d=t.tView=Iv(2,t,r,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}a&&(t.flags|=a),Fo(t,!1);let c=pF(e,n,t,i);vu()&&xv(e,n,c,t),qs(c,n);let l=qC(c,n,c,t);n[i+it]=l,Mv(n,l),q1(l,t,n)}function hF(t,n,e,i,r,o,s,a,c,l,d){let f=e+it,m;return n.firstCreatePass?(m=qo(n,f,4,s||null,a||null),uu()&&iD(n,t,m,xn(n.consts,l),Tv),V0(n,m)):m=n.data[f],bD(m,t,n,e,i,r,o,c),Vs(m)&&tf(n,t,m),l!=null&&zc(t,m,d),m}function Ks(t,n,e,i,r,o,s,a,c,l,d){let f=e+it,m;if(n.firstCreatePass){if(m=qo(n,f,4,s||null,a||null),l!=null){let h=xn(n.consts,l);m.localNames=[];for(let v=0;v<h.length;v+=2)m.localNames.push(h[v],-1)}}else m=n.data[f];return bD(m,t,n,e,i,r,o,c),l!=null&&zc(t,m,d),m}function Pe(t,n,e,i,r,o,s,a){let c=de(),l=Ze(),d=xn(l.consts,o);return hF(c,l,t,n,e,i,r,d,void 0,s,a),Pe}function sf(t,n,e,i,r,o,s,a){let c=de(),l=Ze(),d=xn(l.consts,o);return Ks(c,l,t,n,e,i,r,d,void 0,s,a),sf}var pF=gF;function gF(t,n,e,i){return Ic(!0),n[Qe].createComment("")}var af=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=G({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();var cf=new S(""),Js=new S(""),Yv=new S("USE_PENDING_TASKS",{providedIn:"root",factory:()=>typeof Zone>"u"}),qc=(()=>{class t{_ngZone;registry;_isZoneStable=!0;_callbacks=[];_taskTrackingZone=null;_destroyRef;pendingTasksInternal=u(Di);_usePendingTasks=u(Yv);constructor(e,i,r){this._ngZone=e,this.registry=i,Lp()&&(this._destroyRef=u(nt,{optional:!0})??void 0),Qv||(SD(r),r.addToWindow(i)),this._watchAngularEvents(),e.run(()=>{this._taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){let e=this._ngZone.onUnstable.subscribe({next:()=>{this._isZoneStable=!1}}),i,r;this._ngZone.runOutsideAngular(()=>{this._usePendingTasks&&(i=this.pendingTasksInternal.hasPendingTasksObservable.subscribe(()=>{this.isStable()&&this._ngZone.runOutsideAngular(()=>{this._runCallbacksIfReady()})})),r=this._ngZone.onStable.subscribe({next:()=>{V.assertNotInAngularZone(),queueMicrotask(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})}),this._destroyRef?.onDestroy(()=>{e.unsubscribe(),i?.unsubscribe(),r.unsubscribe()})}isStable(){return this._isZoneStable&&!this._ngZone.hasPendingMacrotasks&&(!this._usePendingTasks||!this.pendingTasksInternal.hasPendingTasks)}_runCallbacksIfReady(){if(this.isStable())queueMicrotask(()=>{for(;this._callbacks.length!==0;){let e=this._callbacks.pop();clearTimeout(e.timeoutId),e.doneCb()}});else{let e=this.getPendingTasks();this._callbacks=this._callbacks.filter(i=>i.updateCb&&i.updateCb(e)?(clearTimeout(i.timeoutId),!1):!0)}}getPendingTasks(){return this._taskTrackingZone?this._taskTrackingZone.macroTasks.map(e=>({source:e.source,creationLocation:e.creationLocation,data:e.data})):[]}addCallback(e,i,r){let o=-1;i&&i>0&&(o=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==o),e()},i)),this._callbacks.push({doneCb:e,timeoutId:o,updateCb:r})}whenStable(e,i,r){if(r&&!this._taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(e,i,r),this._runCallbacksIfReady()}registerApplication(e){this.registry.registerApplication(e,this)}unregisterApplication(e){this.registry.unregisterApplication(e)}findProviders(e,i,r){return[]}static \u0275fac=function(i){return new(i||t)(R(V),R(Wc),R(Js))};static \u0275prov=G({token:t,factory:t.\u0275fac})}return t})(),Wc=(()=>{class t{_applications=new Map;registerApplication(e,i){this._applications.set(e,i)}unregisterApplication(e){this._applications.delete(e)}unregisterAllApplications(){this._applications.clear()}getTestability(e){return this._applications.get(e)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(e,i=!0){return Qv?.findTestabilityInTree(this,e,i)??null}static \u0275fac=function(i){return new(i||t)};static \u0275prov=G({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function SD(t){Qv=t}var Qv,Kc=new S("");function wD(){$h(()=>{let t="";throw new D(600,t)})}var vF=10;function Zv(t,n){return Array.isArray(n)?n.reduce(Zv,t):w(w({},t),n)}var Nt=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(Vn);afterRenderManager=u(Qu);zonelessEnabled=u(Nc);rootEffectScheduler=u(bu);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new I;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Di);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(me(e=>!e))}constructor(){u(ri,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(ze);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=he.NULL){return this._injector.get(V).run(()=>{if(We(je.BootstrapComponentStart),!this._injector.get(qv).done){let M="";throw new D(405,M)}let a=er(e),c=this._injector.get(Ei),l=new $o(a,c);this.componentTypes.push(e);let{hostElement:d,directives:f,bindings:m}=yF(i),h=d||l.selector,v=l.create(r,[],h,c.injector,f,m),C=v.location.nativeElement,E=v.injector.get(cf,null);return E?.registerApplication(C),v.onDestroy(()=>{this.detachView(v.hostView),kc(this.components,v),E?.unregisterApplication(C)}),this._loadComponent(v),We(je.BootstrapComponentEnd,v),v})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){We(je.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Yu.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw We(je.ChangeDetectionEnd),new D(101,!1);let e=ce(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,ce(e),this.afterTick.next(),We(je.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(mt,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<vF;){We(je.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{We(je.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!Dc(r))continue;let o=i&&!this.zonelessEnabled?0:1;HC(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>Dc(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;kc(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Kc,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>kc(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new D(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();function yF(t){return t===void 0||typeof t=="string"||t instanceof Element?{hostElement:t}:t}function kc(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function ge(t,n,e,i){let r=de(),o=Po();if(jn(r,o,n)){let s=Ze(),a=Us();OO(a,r,t,n,e,i)}return ge}var Kg=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let s=this.detach(i);this.attach(i,o),this.attach(r,s)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function vg(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function _F(t,n,e,i){let r,o,s=0,a=t.length-1,c=void 0;if(Array.isArray(n)){ce(i);let l=n.length-1;for(ce(null);s<=a&&s<=l;){let d=t.at(s),f=n[s],m=vg(s,d,s,f,e);if(m!==0){m<0&&t.updateValue(s,f),s++;continue}let h=t.at(a),v=n[l],C=vg(a,h,l,v,e);if(C!==0){C<0&&t.updateValue(a,v),a--,l--;continue}let E=e(s,d),M=e(a,h),O=e(s,f);if(Object.is(O,M)){let ie=e(l,v);Object.is(ie,E)?(t.swap(s,a),t.updateValue(a,v),l--,a--):t.move(a,s),t.updateValue(s,f),s++;continue}if(r??=new Hu,o??=M0(t,s,a,e),Yg(t,r,s,O))t.updateValue(s,f),s++,a++;else if(o.has(O))r.set(E,t.detach(s)),a--;else{let ie=t.create(s,n[s]);t.attach(s,ie),s++,a++}}for(;s<=l;)N0(t,r,e,s,n[s]),s++}else if(n!=null){ce(i);let l=n[Symbol.iterator]();ce(null);let d=l.next();for(;!d.done&&s<=a;){let f=t.at(s),m=d.value,h=vg(s,f,s,m,e);if(h!==0)h<0&&t.updateValue(s,m),s++,d=l.next();else{r??=new Hu,o??=M0(t,s,a,e);let v=e(s,m);if(Yg(t,r,s,v))t.updateValue(s,m),s++,a++,d=l.next();else if(!o.has(v))t.attach(s,t.create(s,m)),s++,a++,d=l.next();else{let C=e(s,f);r.set(C,t.detach(s)),a--}}}for(;!d.done;)N0(t,r,e,t.length,d.value),d=l.next()}for(;s<=a;)t.destroy(t.detach(a--));r?.forEach(l=>{t.destroy(l)})}function Yg(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function N0(t,n,e,i,r){if(Yg(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function M0(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var Hu=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function Q(t,n,e,i,r,o,s,a){In("NgControlFlow");let c=de(),l=Ze(),d=xn(l.consts,o);return Ks(c,l,t,n,e,i,r,d,256,s,a),Xv}function Xv(t,n,e,i,r,o,s,a){In("NgControlFlow");let c=de(),l=Ze(),d=xn(l.consts,o);return Ks(c,l,t,n,e,i,r,d,512,s,a),Xv}function Z(t,n){In("NgControlFlow");let e=de(),i=Po(),r=e[i]!==sn?e[i]:-1,o=r!==-1?zu(e,it+r):void 0,s=0;if(jn(e,i,t)){let a=ce(null);try{if(o!==void 0&&KC(o,s),t!==-1){let c=it+t,l=zu(e,c),d=Jg(e[oe],c),f=QC(l,d,e),m=$c(e,d,n,{dehydratedView:f});Gc(l,m,s,Ws(d,f))}}finally{ce(a)}}else if(o!==void 0){let a=WC(o,s);a!==void 0&&(a[wt]=n)}}var Qg=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-ft}};function sr(t){return t}function ea(t,n){return n}var Zg=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function zt(t,n,e,i,r,o,s,a,c,l,d,f,m){In("NgControlFlow");let h=de(),v=Ze(),C=c!==void 0,E=de(),M=a?s.bind(E[on][wt]):s,O=new Zg(C,M);E[it+t]=O,Ks(h,v,t+1,n,e,i,r,xn(v.consts,o),256),C&&Ks(h,v,t+2,c,l,d,f,xn(v.consts,m),512)}var Xg=class extends Kg{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-ft}at(n){return this.getLView(n)[wt].$implicit}attach(n,e){let i=e[No];this.needsIndexUpdate||=n!==this.length,Gc(this.lContainer,e,n,Ws(this.templateTNode,i)),bF(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,SF(this.lContainer,n),wF(this.lContainer,n)}create(n,e){let i=Ou(this.lContainer,this.templateTNode.tView.ssrId);return $c(this.hostLView,this.templateTNode,new Qg(this.lContainer,e,n),{dehydratedView:i})}destroy(n){Xu(n[oe],n)}updateValue(n,e){this.getLView(n)[wt].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[wt].$index=n}getLView(n){return CF(this.lContainer,n)}};function $t(t){let n=ce(null),e=Bn();try{let i=de(),r=i[oe],o=i[e],s=e+1,a=zu(i,s);if(o.liveCollection===void 0){let l=Jg(r,s);o.liveCollection=new Xg(a,i,l)}else o.liveCollection.reset();let c=o.liveCollection;if(_F(c,t,o.trackByFn,n),c.updateIndexes(),o.hasEmptyBlock){let l=Po(),d=c.length===0;if(jn(i,l,d)){let f=e+2,m=zu(i,f);if(d){let h=Jg(r,f),v=QC(m,h,i),C=$c(i,h,void 0,{dehydratedView:v});Gc(m,C,0,Ws(h,v))}else r.firstUpdatePass&&o1(m),KC(m,0)}}}finally{ce(n)}}function zu(t,n){return t[n]}function bF(t,n){if(t.length<=ft)return;let e=ft+n,i=t[e],r=i?i[wi]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[_i];rO(o,r),Ur.delete(i[Si]),r.detachedLeaveAnimationFns=void 0}}function SF(t,n){if(t.length<=ft)return;let e=ft+n,i=t[e],r=i?i[wi]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function wF(t,n){return Fc(t,n)}function CF(t,n){return WC(t,n)}function Jg(t,n){return su(t,n)}function P(t,n,e){let i=de(),r=Po();if(jn(i,r,n)){let o=Ze(),s=Us();MO(s,i,t,n,i[Qe],e)}return P}function ev(t,n,e,i,r){Av(n,t,e,r?"class":"style",i)}function y(t,n,e,i){let r=de(),o=r[oe],s=t+it,a=o.firstCreatePass?Bv(s,r,2,n,Tv,uu(),e,i):o.data[s];if(nr(a)){let c=r[Zn].tracingService;if(c&&c.componentCreate){let l=o.data[a.directiveStart+a.componentOffset];return c.componentCreate(JC(l),()=>(T0(t,n,r,a,i),y))}}return T0(t,n,r,a,i),y}function T0(t,n,e,i,r){if(kv(i,e,t,n,CD),Vs(i)){let o=e[oe];tf(o,e,i),dv(o,i,e)}r!=null&&zc(e,i)}function b(){let t=Ze(),n=It(),e=Rv(n);return t.firstCreatePass&&Vv(t,e),Qp(e)&&Zp(),Kp(),e.classesWithoutHost!=null&&UR(e)&&ev(t,e,de(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&HR(e)&&ev(t,e,de(),e.stylesWithoutHost,!1),b}function U(t,n,e,i){return y(t,n,e,i),b(),U}function at(t,n,e,i){let r=de(),o=r[oe],s=t+it,a=o.firstCreatePass?T1(s,o,2,n,e,i):o.data[s];return kv(a,r,t,n,CD),i!=null&&zc(r,a),at}function ht(){let t=It(),n=Rv(t);return Qp(n)&&Zp(),Kp(),ht}function gn(t,n,e,i){return at(t,n,e,i),ht(),gn}var CD=(t,n,e,i,r)=>(Ic(!0),vC(n[Qe],i,sg()));function Ti(t,n,e){let i=de(),r=i[oe],o=t+it,s=r.firstCreatePass?Bv(o,i,8,"ng-container",Tv,uu(),n,e):r.data[o];if(kv(s,i,t,"ng-container",DF),Vs(s)){let a=i[oe];tf(a,i,s),dv(a,s,i)}return e!=null&&zc(i,s),Ti}function ki(){let t=Ze(),n=It(),e=Rv(n);return t.firstCreatePass&&Vv(t,e),ki}function Xt(t,n,e){return Ti(t,n,e),ki(),Xt}var DF=(t,n,e,i,r)=>(Ic(!0),AA(n[Qe],""));function Gt(){return de()}function an(t,n,e){let i=de(),r=Po();if(jn(i,r,n)){let o=Ze(),s=Us();PC(s,i,t,n,i[Qe],e)}return an}var Yc="en-US";var xF=Yc;function DD(t){typeof t=="string"&&(xF=t.toLowerCase().replace(/_/g,"-"))}function ve(t,n,e){let i=de(),r=Ze(),o=It();return EF(r,i,i[Qe],o,t,n,e),ve}function lf(t,n,e){let i=de(),r=Ze(),o=It();return(o.type&3||e)&&Lv(o,r,i,e,i[Qe],t,n,Uo(o,i,n)),lf}function EF(t,n,e,i,r,o,s){let a=!0,c=null;if((i.type&3||s)&&(c??=Uo(i,n,o),Lv(i,t,n,s,e,r,o,c)&&(a=!1)),a){let l=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let f=0;f<d.length;f+=2){let m=d[f],h=d[f+1];c??=Uo(i,n,o),Pu(i,n,m,h,r,c)}if(l&&l.length)for(let f of l)c??=Uo(i,n,o),Pu(i,n,f,r,r,c)}}function k(t=1){return Hw(t)}function IF(t,n){let e=null,i=GA(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?DC(t,o,!0):KA(i,o))return r}return e}function Ne(t){let n=de()[on][Qt];if(!n.projection){let e=t?t.length:1,i=n.projection=gw(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let s=t?IF(o,t):0;s!==null&&(r[s]?r[s].projectionNext=o:i[s]=o,r[s]=o)}o=o.next}}}function F(t,n=0,e,i,r,o){let s=de(),a=Ze(),c=i?t+1:null;c!==null&&Ks(s,a,c,i,r,o,null,e);let l=qo(a,it+t,16,null,e||null);l.projection===null&&(l.projection=n),eg();let f=!s[No]||Yp();s[on][Qt].projection[l.projection]===null&&c!==null?NF(s,a,c):f&&!qu(l)&&_O(a,s,l)}function NF(t,n,e){let i=it+e,r=n.data[i],o=t[i],s=Ou(o,r.tView.ssrId),a=$c(t,r,void 0,{dehydratedView:s});Gc(o,a,0,Ws(r,s))}function pt(t,n,e,i){return uD(t,n,e,i),pt}function qt(t,n,e){return dD(t,n,e),qt}function X(t){let n=de(),e=Ze(),i=hu();xc(i+1);let r=Uv(e,i);if(t.dirty&&xw(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=mD(n,i);t.reset(o,X0),t.notifyOnChanges()}return!0}return!1}function J(){return jv(de(),hu())}function df(t,n,e,i,r){return pD(n,uD(t,e,i,r)),df}function uf(t,n,e,i){return pD(t,dD(n,e,i)),uf}function ff(t=1){xc(hu()+t)}function Un(t){let n=tg();return zp(n,it+t)}function Du(t,n){return t<<17|n<<2}function Go(t){return t>>17&32767}function MF(t){return(t&2)==2}function TF(t,n){return t&131071|n<<17}function tv(t){return t|2}function Ys(t){return(t&131068)>>2}function yg(t,n){return t&-131069|n<<2}function kF(t){return(t&1)===1}function nv(t){return t|1}function RF(t,n,e,i,r,o){let s=o?n.classBindings:n.styleBindings,a=Go(s),c=Ys(s);t[i]=e;let l=!1,d;if(Array.isArray(e)){let f=e;d=f[1],(d===null||Os(f,d)>0)&&(l=!0)}else d=e;if(r)if(c!==0){let m=Go(t[a+1]);t[i+1]=Du(m,a),m!==0&&(t[m+1]=yg(t[m+1],i)),t[a+1]=TF(t[a+1],i)}else t[i+1]=Du(a,0),a!==0&&(t[a+1]=yg(t[a+1],i)),a=i;else t[i+1]=Du(c,0),a===0?a=i:t[c+1]=yg(t[c+1],i),c=i;l&&(t[i+1]=tv(t[i+1])),k0(t,d,i,!0),k0(t,d,i,!1),AF(n,d,t,i,o),s=Du(a,c),o?n.classBindings=s:n.styleBindings=s}function AF(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&Os(o,n)>=0&&(e[i+1]=nv(e[i+1]))}function k0(t,n,e,i){let r=t[e+1],o=n===null,s=i?Go(r):Ys(r),a=!1;for(;s!==0&&(a===!1||o);){let c=t[s],l=t[s+1];OF(c,n)&&(a=!0,t[s+1]=i?nv(l):tv(l)),s=i?Go(l):Ys(l)}a&&(t[e+1]=i?tv(r):nv(r))}function OF(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?Os(t,n)>=0:!1}var ti={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function FF(t){return t.substring(ti.key,ti.keyEnd)}function PF(t){return LF(t),xD(t,ED(t,0,ti.textEnd))}function xD(t,n){let e=ti.textEnd;return e===n?-1:(n=ti.keyEnd=BF(t,ti.key=n,e),ED(t,n,e))}function LF(t){ti.key=0,ti.keyEnd=0,ti.value=0,ti.valueEnd=0,ti.textEnd=t.length}function ED(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function BF(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function Yo(t,n,e){return ID(t,n,e,!1),Yo}function ee(t,n){return ID(t,n,null,!0),ee}function Nn(t){jF(qF,VF,t,!0)}function VF(t,n){for(let e=PF(n);e>=0;e=xD(n,e))nu(t,FF(n),!0)}function ID(t,n,e,i){let r=de(),o=Ze(),s=fu(2);if(o.firstUpdatePass&&MD(o,t,s,i),n!==sn&&jn(r,s,n)){let a=o.data[Bn()];TD(o,a,r,r[Qe],t,r[s+1]=KF(n,e),i,s)}}function jF(t,n,e,i){let r=Ze(),o=fu(2);r.firstUpdatePass&&MD(r,null,o,i);let s=de();if(e!==sn&&jn(s,o,e)){let a=r.data[Bn()];if(kD(a,i)&&!ND(r,o)){let c=i?a.classesWithoutHost:a.stylesWithoutHost;c!==null&&(e=Zd(c,e||"")),ev(r,a,s,e,i)}else WF(r,a,s,s[Qe],s[o+1],s[o+1]=GF(t,n,e),i,o)}}function ND(t,n){return n>=t.expandoStartIndex}function MD(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[Bn()],s=ND(t,e);kD(o,i)&&n===null&&!s&&(n=!1),n=UF(r,o,n,i),RF(r,o,n,e,s,i)}}function UF(t,n,e,i){let r=Bw(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=_g(null,t,n,e,i),e=Bc(e,n.attrs,i),o=null);else{let s=n.directiveStylingLast;if(s===-1||t[s]!==r)if(e=_g(r,t,n,e,i),o===null){let c=HF(t,n,i);c!==void 0&&Array.isArray(c)&&(c=_g(null,t,n,c[1],i),c=Bc(c,n.attrs,i),zF(t,n,i,c))}else o=$F(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function HF(t,n,e){let i=e?n.classBindings:n.styleBindings;if(Ys(i)!==0)return t[Go(i)]}function zF(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[Go(r)]=i}function $F(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let s=t[o].hostAttrs;i=Bc(i,s,e)}return Bc(i,n.attrs,e)}function _g(t,n,e,i,r){let o=null,s=e.directiveEnd,a=e.directiveStylingLast;for(a===-1?a=e.directiveStart:a++;a<s&&(o=n[a],i=Bc(i,o.hostAttrs,r),o!==t);)a++;return t!==null&&(e.directiveStylingLast=a),i}function Bc(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let s=n[o];typeof s=="number"?r=s:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),nu(t,s,e?!0:n[++o]))}return t===void 0?null:t}function GF(t,n,e){if(e==null||e==="")return Kt;let i=[],r=pn(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)Object.hasOwn(r,o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function qF(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&nu(t,i,e)}function WF(t,n,e,i,r,o,s,a){r===sn&&(r=Kt);let c=0,l=0,d=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;d!==null||f!==null;){let m=c<r.length?r[c+1]:void 0,h=l<o.length?o[l+1]:void 0,v=null,C;d===f?(c+=2,l+=2,m!==h&&(v=f,C=h)):f===null||d!==null&&d<f?(c+=2,v=d):(l+=2,v=f,C=h),v!==null&&TD(t,n,e,i,v,C,s,a),d=c<r.length?r[c]:null,f=l<o.length?o[l]:null}}function TD(t,n,e,i,r,o,s,a){if(!(n.type&3))return;let c=t.data,l=c[a+1],d=kF(l)?R0(c,n,e,r,Ys(l),s):void 0;if(!$u(d)){$u(o)||MF(l)&&(o=R0(c,null,e,r,a,s));let f=Hp(Bn(),e);SO(i,s,f,r,o)}}function R0(t,n,e,i,r,o){let s=n===null,a;for(;r>0;){let c=t[r],l=Array.isArray(c),d=l?c[1]:c,f=d===null,m=e[r+1];m===sn&&(m=f?Kt:void 0);let h=f?iu(m,i):d===i?m:void 0;if(l&&!$u(h)&&(h=iu(c,i)),$u(h)&&(a=h,s))return a;let v=t[r+1];r=s?Go(v):Ys(v)}if(n!==null){let c=o?n.residualClasses:n.residualStyles;c!=null&&(a=iu(c,i))}return a}function $u(t){return t!==void 0}function KF(t,n){return t==null||t===""||(typeof n=="string"?t=pn(t)+n:typeof t=="object"&&(t=gc(pn(t)))),t}function kD(t,n){return(t.flags&(n?8:16))!==0}function N(t,n=""){let e=de(),i=Ze(),r=t+it,o=i.firstCreatePass?qo(i,r,1,n,null):i.data[r],s=YF(i,e,o,n);e[r]=s,vu()&&xv(i,e,s,o),Fo(o,!1)}var YF=(t,n,e,i)=>(Ic(!0),kA(n[Qe],i));function QF(t,n,e,i=""){return jn(t,Po(),e)?n+Ar(e)+i:sn}function ZF(t,n,e,i,r,o,s,a=""){let c=Aw(),l=f1(t,c,e,r,s);return fu(3),l?n+Ar(e)+i+Ar(r)+o+Ar(s)+a:sn}function gt(t){return vt("",t),gt}function vt(t,n,e){let i=de(),r=QF(i,t,n,e);return r!==sn&&RD(i,Bn(),r),vt}function ta(t,n,e,i,r,o,s){let a=de(),c=ZF(a,t,n,e,i,r,o,s);return c!==sn&&RD(a,Bn(),c),ta}function RD(t,n,e){let i=Hp(n,t);RA(t[Qe],i,e)}var AD={};function mf(t){In("NgLet");let n=Ze(),e=de(),i=t+it,r=qo(n,i,128,null,null);return Fo(r,!1),au(n,e,i,AD),mf}function Jv(t){let n=Ze(),e=de(),i=Bn();return au(n,e,i,t),t}function na(t){let n=tg(),e=zp(n,it+t);if(e===AD)throw new D(314,!1);return e}function ia(t,n,e){let i=ig()+t,r=de();return r[i]===sn?tD(r,i,n(e,r)):d1(r,i)}function A0(t,n,e){let i=Ze();i.firstCreatePass&&OD(n,i.data,i.blueprint,Ci(t),e)}function OD(t,n,e,i,r){if(t=jt(t),Array.isArray(t))for(let o=0;o<t.length;o++)OD(t[o],n,e,i,r);else{let o=Ze(),s=de(),a=It(),c=xo(t)?t:jt(t.provide),l=Pp(t),d=a.providerIndexes&1048575,f=a.directiveStart,m=a.providerIndexes>>20;if(xo(t)||!t.multi){let h=new Ho(l,r,De,null),v=Sg(c,n,r?d:d+m,f);v===-1?(Dg(Au(a,s),o,c),bg(o,t,n.length),n.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(h),s.push(h)):(e[v]=h,s[v]=h)}else{let h=Sg(c,n,d+m,f),v=Sg(c,n,d,d+m),C=h>=0&&e[h],E=v>=0&&e[v];if(r&&!E||!r&&!C){Dg(Au(a,s),o,c);let M=eP(r?JF:XF,e.length,r,i,l,t);!r&&E&&(e[v].providerFactory=M),bg(o,t,n.length,0),n.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(M),s.push(M)}else{let M=FD(e[r?v:h],l,!r&&i);bg(o,t,h>-1?h:v,M)}!r&&i&&E&&e[v].componentProviders++}}}function bg(t,n,e,i){let r=xo(n),o=Sw(n);if(r||o){let c=(o?jt(n.useClass):n).prototype.ngOnDestroy;if(c){let l=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=l.indexOf(e);d===-1?l.push(e,[i,c]):l[d+1].push(i,c)}else l.push(e,c)}}}function FD(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function Sg(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function XF(t,n,e,i,r){return iv(this.multi,[])}function JF(t,n,e,i,r){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,c=Rc(i,i[oe],this.providerFactory.index,r);s=c.slice(0,a),iv(o,s);for(let l=a;l<c.length;l++)s.push(c[l])}else s=[],iv(o,s);return s}function iv(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function eP(t,n,e,i,r,o){let s=new Ho(t,e,De,null);return s.multi=[],s.index=n,s.componentProviders=0,FD(s,r,i&&!e),s}function ye(t,n){return e=>{e.providersResolver=(i,r)=>A0(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>A0(i,r?r(n):n,!0))}}function ey(t,n,e){return nP(de(),ig(),t,n,e)}function tP(t,n){let e=t[n];return e===sn?void 0:e}function nP(t,n,e,i,r,o){let s=n+e;return jn(t,s,r)?tD(t,s+1,o?i.call(o,r):i(r)):tP(t,s+1)}function hf(t,n){return nf(t,n)}var xu=null;function PD(t){xu!==null&&(t.defaultEncapsulation!==xu.defaultEncapsulation||t.preserveWhitespaces!==xu.preserveWhitespaces)||(xu=t)}var LD=(()=>{class t{applicationErrorHandler=u(Vn);appRef=u(Nt);taskService=u(Di);ngZone=u(V);zonelessEnabled=u(Nc);tracing=u(ri,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new pe;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(hc):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(ug,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:case 2:{this.appRef.dirtyFlags|=2;break}case 3:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?qw:cg;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(hc+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();function BD(){return[{provide:yi,useExisting:LD},{provide:V,useClass:pc},{provide:Nc,useValue:!0}]}var ty=(()=>{class t{compileModuleSync(e){return new Lc(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})(),VD=new S("");function iP(){return typeof $localize<"u"&&$localize.locale||Yc}var pf=new S("",{factory:()=>u(pf,{optional:!0,skipSelf:!0})||iP()});function Ge(t,n){return Za(t,n?.equal)}function xe(t){return xS(t)}var jD=class t extends Error{_brand;constructor(n){super(n)}static IDLE=new t("IDLE");static LOADING=new t("LOADING")},rP=t=>t;function gf(t,n){if(typeof t=="function"){let e=Yh(t,rP,n?.equal);return UD(e,n?.debugName,n?.set)}else{let e=Yh(t.source,t.computation,t.equal);return UD(e,t.debugName,t.set)}}function UD(t,n,e){let i=t[_t],r=t;if(e!==void 0){let o=s=>Qh(i,s);r.set=s=>e(s,o),r.update=s=>e(s(xe(t)),o)}else r.set=o=>Qh(i,o),r.update=o=>DS(i,o);return r.asReadonly=yu.bind(t),r}var ZD=Symbol("InputSignalNode#UNSET"),pP=te(w({},Xa),{transformFn:void 0,applyValueToInputSignal(t,n){ho(t,n)}});function XD(t,n){let e=Object.create(pP);e.value=t,e.transformFn=n?.transform;function i(){if(wr(e),e.value===ZD){let r=null;throw new D(-950,r)}return e.value}return i[_t]=e,i}var Hn=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>jc(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}},JD=(()=>{let t=new S("");return t.__NG_ELEMENT_ID__=n=>{let e=It();if(e===null)throw new D(-204,!1);if(e.type&2)return e.value;if(n&8)return null;throw new D(-204,!1)},t})();function fy(t){return gP(t)?t.default:t}function gP(t){return t&&typeof t=="object"&&"default"in t}function HD(t,n){return XD(t,n)}function vP(t){return XD(ZD,t)}var Jt=(HD.required=vP,HD);function zD(t,n){return Hv(n)}function yP(t,n){return zv(n)}var Zc=(zD.required=yP,zD);function $D(t,n){return Hv(n)}function _P(t,n){return zv(n)}var ex=($D.required=_P,$D);var tx=(()=>{class t{constructor(e){}static \u0275fac=function(i){return new(i||t)(R(Nt))};static \u0275mod=j({type:t});static \u0275inj=B({})}return t})();var bP=1e4;var CZ=bP-1e3;var iy=class{supports(n){return Pv(n)}create(n){return new ry(n)}},SP=(t,n)=>n,ry=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(n){this._trackByFn=n||SP}forEachItem(n){let e;for(e=this._itHead;e!==null;e=e._next)n(e)}forEachOperation(n){let e=this._itHead,i=this._removalsHead,r=0,o=null;for(;e||i;){let s=!i||e&&e.currentIndex<GD(i,r,o)?e:i,a=GD(s,r,o),c=s.currentIndex;if(s===i)r--,i=i._nextRemoved;else if(e=e._next,s.previousIndex==null)r++;else{o||(o=[]);let l=a-r,d=c-r;if(l!=d){for(let m=0;m<l;m++){let h=m<o.length?o[m]:o[m]=0,v=h+m;d<=v&&v<l&&(o[m]=h+1)}let f=s.previousIndex;o[f]=d-l}}a!==c&&n(s,a,c)}}forEachPreviousItem(n){let e;for(e=this._previousItHead;e!==null;e=e._nextPrevious)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachMovedItem(n){let e;for(e=this._movesHead;e!==null;e=e._nextMoved)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}forEachIdentityChange(n){let e;for(e=this._identityChangesHead;e!==null;e=e._nextIdentityChange)n(e)}diff(n){if(n==null&&(n=[]),!Pv(n))throw new D(900,!1);return this.check(n)?this:null}onDestroy(){}check(n){this._reset();let e=this._itHead,i=!1,r,o,s;if(Array.isArray(n)){this.length=n.length;for(let a=0;a<this.length;a++)o=n[a],s=this._trackByFn(a,o),e===null||!Object.is(e.trackById,s)?(e=this._mismatch(e,o,s,a),i=!0):(i&&(e=this._verifyReinsertion(e,o,s,a)),Object.is(e.item,o)||this._addIdentityChange(e,o)),e=e._next}else r=0,eD(n,a=>{s=this._trackByFn(r,a),e===null||!Object.is(e.trackById,s)?(e=this._mismatch(e,a,s,r),i=!0):(i&&(e=this._verifyReinsertion(e,a,s,r)),Object.is(e.item,a)||this._addIdentityChange(e,a)),e=e._next,r++}),this.length=r;return this._truncate(e),this.collection=n,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let n;for(n=this._previousItHead=this._itHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._additionsHead;n!==null;n=n._nextAdded)n.previousIndex=n.currentIndex;for(this._additionsHead=this._additionsTail=null,n=this._movesHead;n!==null;n=n._nextMoved)n.previousIndex=n.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(n,e,i,r){let o;return n===null?o=this._itTail:(o=n._prev,this._remove(n)),n=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),n!==null?(Object.is(n.item,e)||this._addIdentityChange(n,e),this._reinsertAfter(n,o,r)):(n=this._linkedRecords===null?null:this._linkedRecords.get(i,r),n!==null?(Object.is(n.item,e)||this._addIdentityChange(n,e),this._moveAfter(n,o,r)):n=this._addAfter(new oy(e,i),o,r)),n}_verifyReinsertion(n,e,i,r){let o=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return o!==null?n=this._reinsertAfter(o,n._prev,r):n.currentIndex!=r&&(n.currentIndex=r,this._addToMoves(n,r)),n}_truncate(n){for(;n!==null;){let e=n._next;this._addToRemovals(this._unlink(n)),n=e}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(n,e,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(n);let r=n._prevRemoved,o=n._nextRemoved;return r===null?this._removalsHead=o:r._nextRemoved=o,o===null?this._removalsTail=r:o._prevRemoved=r,this._insertAfter(n,e,i),this._addToMoves(n,i),n}_moveAfter(n,e,i){return this._unlink(n),this._insertAfter(n,e,i),this._addToMoves(n,i),n}_addAfter(n,e,i){return this._insertAfter(n,e,i),this._additionsTail===null?this._additionsTail=this._additionsHead=n:this._additionsTail=this._additionsTail._nextAdded=n,n}_insertAfter(n,e,i){let r=e===null?this._itHead:e._next;return n._next=r,n._prev=e,r===null?this._itTail=n:r._prev=n,e===null?this._itHead=n:e._next=n,this._linkedRecords===null&&(this._linkedRecords=new vf),this._linkedRecords.put(n),n.currentIndex=i,n}_remove(n){return this._addToRemovals(this._unlink(n))}_unlink(n){this._linkedRecords!==null&&this._linkedRecords.remove(n);let e=n._prev,i=n._next;return e===null?this._itHead=i:e._next=i,i===null?this._itTail=e:i._prev=e,n}_addToMoves(n,e){return n.previousIndex===e||(this._movesTail===null?this._movesTail=this._movesHead=n:this._movesTail=this._movesTail._nextMoved=n),n}_addToRemovals(n){return this._unlinkedRecords===null&&(this._unlinkedRecords=new vf),this._unlinkedRecords.put(n),n.currentIndex=null,n._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=n,n._prevRemoved=null):(n._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=n),n}_addIdentityChange(n,e){return n.item=e,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=n:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=n,n}},oy=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(n,e){this.item=n,this.trackById=e}},sy=class{_head=null;_tail=null;add(n){this._head===null?(this._head=this._tail=n,n._nextDup=null,n._prevDup=null):(this._tail._nextDup=n,n._prevDup=this._tail,n._nextDup=null,this._tail=n)}get(n,e){let i;for(i=this._head;i!==null;i=i._nextDup)if((e===null||e<=i.currentIndex)&&Object.is(i.trackById,n))return i;return null}remove(n){let e=n._prevDup,i=n._nextDup;return e===null?this._head=i:e._nextDup=i,i===null?this._tail=e:i._prevDup=e,this._head===null}},vf=class{map=new Map;put(n){let e=n.trackById,i=this.map.get(e);i||(i=new sy,this.map.set(e,i)),i.add(n)}get(n,e){let i=n,r=this.map.get(i);return r?r.get(n,e):null}remove(n){let e=n.trackById;return this.map.get(e).remove(n)&&this.map.delete(e),n}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function GD(t,n,e){let i=t.previousIndex;if(i===null)return i;let r=0;return e&&i<e.length&&(r=e[i]),i+n+r}var ay=class{supports(n){return n instanceof Map||rf(n)}create(){return new cy}},cy=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||rf(n)))throw new D(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(i,r)=>{if(e&&e.key===r)this._maybeAddToChanges(e,i),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(r,i);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let i=e;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let i=n._prev;return e._next=n,e._prev=i,n._prev=e,i&&(i._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let r=this._records.get(n);this._maybeAddToChanges(r,e);let o=r._prev,s=r._next;return o&&(o._next=s),s&&(s._prev=o),r._next=null,r._prev=null,r}let i=new ly(n);return this._records.set(n,i),i.currentValue=e,this._addToAdditions(i),i}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(i=>e(n[i],i))}},ly=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function qD(){return new Qo([new iy])}var Qo=(()=>{class t{factories;static \u0275prov=G({token:t,providedIn:"root",factory:qD});constructor(e){this.factories=e}static create(e,i){if(i!=null){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=u(t,{optional:!0,skipSelf:!0});return t.create(e,i||qD())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i!=null)return i;throw new D(901,!1)}}return t})();function WD(){return new my([new ay])}var my=(()=>{class t{static \u0275prov=G({token:t,providedIn:"root",factory:WD});factories;constructor(e){this.factories=e}static create(e,i){if(i){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=u(t,{optional:!0,skipSelf:!0});return t.create(e,i||WD())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i)return i;throw new D(901,!1)}}return t})(),et=(()=>{class t{static __NG_ELEMENT_ID__=wP}return t})();function wP(t){return CP(It(),de(),(t&16)===16)}function CP(t,n,e){if(nr(t)&&!e){let i=Ln(t.index,n);return new Hr(i,i)}else if(t.type&175){let i=n[on];return new Hr(i,n)}return null}function DP(t,n,e){let i=new Lc(e);return Promise.resolve(i)}function KD(t){for(let n=t.length-1;n>=0;n--)if(t[n]!==void 0)return t[n]}var yf=new S(""),xP=new S("");function Qc(t){return!t.moduleRef}function EP(t){let n=Qc(t)?t.r3Injector:t.moduleRef.injector,e=n.get(V);return e.run(()=>{Qc(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(Vn),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),Qc(t)){let o=()=>n.destroy(),s=t.platformInjector.get(yf);s.add(o),n.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>t.moduleRef.destroy(),s=t.platformInjector.get(yf);s.add(o),t.moduleRef.onDestroy(()=>{kc(t.allPlatformModules,t.moduleRef),r.unsubscribe(),s.delete(o)})}return NP(i,e,()=>{let o=n.get(Di),s=o.add(),a=n.get(qv);return a.runInitializers(),a.donePromise.then(()=>{let c=n.get(pf,Yc);if(DD(c||Yc),!n.get(xP,!0))return Qc(t)?n.get(Nt):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(Qc(t)){let d=n.get(Nt);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return nx?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(s)})})})}var nx;function YD(){nx=IP}function IP(t,n){let e=t.injector.get(Nt);if(t._bootstrapComponents.length>0)t._bootstrapComponents.forEach(i=>e.bootstrap(i));else if(t.instance.ngDoBootstrap)t.instance.ngDoBootstrap(e);else throw new D(-403,!1);n.push(t)}function NP(t,n,e){try{let i=e();return or(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var ix=(()=>{class t{_injector;_modules=[];_destroyListeners=[];_destroyed=!1;constructor(e){this._injector=e}bootstrapModuleFactory(e,i){let r=[BD(),...i?.applicationProviders??[],Kw],o=gD(e.moduleType,this.injector,r);return YD(),EP({moduleRef:o,allPlatformModules:this._modules,platformInjector:this.injector})}bootstrapModule(e,i=[]){let r=Zv({},i);return YD(),DP(this.injector,r,e).then(o=>this.bootstrapModuleFactory(o,r))}onDestroy(e){this._destroyListeners.push(e)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new D(404,!1);this._modules.slice().forEach(i=>i.destroy()),this._destroyListeners.forEach(i=>i());let e=this._injector.get(yf,null);e&&(e.forEach(i=>i()),e.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}static \u0275fac=function(i){return new(i||t)(R(he))};static \u0275prov=G({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();var hy=null;function MP(t){if(gy())throw new D(400,!1);wD(),hy=t;let n=t.get(ix);return RP(t),n}function py(t,n,e=[]){let i=`Platform: ${n}`,r=new S(i);return(o=[])=>{let s=gy();if(!s){let a=[...e,...o,{provide:r,useValue:!0}];s=t?.(a)??MP(TP(a,i))}return kP(r)}}function TP(t=[],n){return he.create({name:n,providers:[{provide:wc,useValue:"platform"},{provide:yf,useValue:new Set([()=>hy=null])},...t]})}function kP(t){let n=gy();if(!n)throw new D(-401,!1);return n}function gy(){return hy?.get(ix)??null}function RP(t){let n=t.get(_u,null);Et(t,()=>{n?.forEach(e=>e())})}function H(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function Ri(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var ny=Symbol("NOT_SET"),rx=new Set,AP=te(w({},Xa),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:ny,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==ny&&!Ss(this))return this.signal;try{for(let r of this.cleanup??rx)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=Wi(this),i;try{i=this.userFn.apply(null,n)}finally{Cr(this,e)}return(this.value===ny||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),dy=class extends Ac{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,s=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(nt),s),this.scheduler=r;for(let a of Sv){let c=e[a];if(c===void 0)continue;let l=Object.create(AP);l.sequence=this,l.phase=a,l.userFn=c,l.dirty=!0,l.signal=()=>(wr(l),l.value),l.signal[_t]=l,l.registerCleanupFn=d=>(l.cleanup??=new Set).add(d),this.nodes[a]=l,this.hooks[a]=d=>l.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??rx)e()}finally{Dr(n)}}};function vy(t,n){let e=n?.injector??u(he),i=e.get(yi),r=e.get(Qu),o=e.get(ri,null,{optional:!0});r.impl??=e.get(wv);let s=t;typeof s=="function"&&(s={mixedReadWrite:t});let a=e.get(Hs,null,{optional:!0}),c=new dy(r.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,i,e,o?.snapshot(null));return r.impl.register(c),c}var ox=py(null,"core",[]);function _f(t,n){let e=er(t),i=n.elementInjector||Ps();return new $o(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}function sx(t){let n=er(t);if(!n)return null;let e=new $o(n);return{get selector(){return e.selector},get type(){return e.componentType},get inputs(){return e.inputs},get outputs(){return e.outputs},get ngContentSelectors(){return e.ngContentSelectors},get isStandalone(){return n.standalone},get isSignal(){return n.signals}}}function ax(){return!1}var cx=null;function Mn(){return cx}function yy(t){cx??=t}var Xc=class{},ar=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=G({token:t,factory:()=>u(lx),providedIn:"platform"})}return t})(),_y=new S(""),lx=(()=>{class t extends ar{_location;_history;_doc=u(ne);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Mn().getBaseHref(this._doc)}onPopState(e){let i=Mn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=Mn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=G({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function bf(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function dx(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function oi(t){return t&&t[0]!=="?"?`?${t}`:t}var si=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=G({token:t,factory:()=>u(wf),providedIn:"root"})}return t})(),Sf=new S(""),wf=(()=>{class t extends si{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(ne).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return bf(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+oi(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+oi(o));this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+oi(o));this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(R(ar),R(Sf,8))};static \u0275prov=G({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ai=(()=>{class t{_subject=new I;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=PP(dx(ux(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+oi(i))}normalize(e){return t.stripTrailingSlash(FP(this._basePath,ux(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+oi(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+oi(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=oi;static joinWithSlash=bf;static stripTrailingSlash=dx;static \u0275fac=function(i){return new(i||t)(R(si))};static \u0275prov=G({token:t,factory:()=>OP(),providedIn:"root"})}return t})();function OP(){return new Ai(R(si))}function FP(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function ux(t){return t.replace(/\/index\.html$/,"")}function PP(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var by=(()=>{class t extends si{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(e){let i=bf(this._baseHref,e);return i.length>0?"#"+i:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+oi(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+oi(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(R(ar),R(Sf,8))};static \u0275prov=G({token:t,factory:t.\u0275fac})}return t})();var Cf=class{$implicit;ngForOf;index;count;constructor(n,e,i,r){this.$implicit=n,this.ngForOf=e,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},zr=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,i,r){this._viewContainer=e,this._template=i,this._differs=r}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let i=this._viewContainer;e.forEachOperation((r,o,s)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new Cf(r.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)i.remove(o===null?void 0:o);else if(o!==null){let a=i.get(o);i.move(a,s),fx(a,r)}});for(let r=0,o=i.length;r<o;r++){let a=i.get(r).context;a.index=r,a.count=o,a.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);fx(o,r)})}static ngTemplateContextGuard(e,i){return!0}static \u0275fac=function(i){return new(i||t)(De(st),De(Ct),De(Qo))};static \u0275dir=x({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function fx(t,n){t.context.$implicit=n.item}var Zo=(()=>{class t{_viewContainer;_context=new Df;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,i){this._viewContainer=e,this._thenTemplateRef=i}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){mx(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){mx(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,i){return!0}static \u0275fac=function(i){return new(i||t)(De(st),De(Ct))};static \u0275dir=x({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),Df=class{$implicit=null;ngIf=null};function mx(t,n){if(t&&!t.createEmbeddedView)throw new D(2020,!1)}var Sy=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,i,r){this._ngEl=e,this._differs=i,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,i){let[r,o]=e.split("."),s=r.indexOf("-")===-1?void 0:ii.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${i}${o}`:i,s):this._renderer.removeStyle(this._ngEl.nativeElement,r,s)}_applyChanges(e){e.forEachRemovedItem(i=>this._setStyle(i.key,null)),e.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),e.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}static \u0275fac=function(i){return new(i||t)(De(z),De(my),De($e))};static \u0275dir=x({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),wy=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(he);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(De(st))};static \u0275dir=x({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Xe]})}return t})();var Cy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({})}return t})();function Jc(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()!==n)continue;let s=o;try{s=decodeURIComponent(o)}catch(a){}return s.length>1&&s[0]==='"'&&s[s.length-1]==='"'&&(s=s.slice(1,-1)),s}return null}var LP=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})(),Dy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=G({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=R(LP),r},providedIn:"root"})}return t})();var Ey="browser";function hx(t){return t===Ey}var Iy=(()=>{class t{static \u0275prov=G({token:t,providedIn:"root",factory:()=>new xy(u(ne),window)})}return t})(),xy=class{document;window;offset=()=>[0,0];constructor(n,e){this.document=n,this.window=e}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n,e){this.window.scrollTo(te(w({},e),{left:n[0],top:n[1]}))}scrollToAnchor(n,e){let i=BP(this.document,n);i&&(this.scrollToElement(i,e),i.focus({preventScroll:!0}))}setHistoryScrollRestoration(n){try{this.window.history.scrollRestoration=n}catch(e){console.warn(hn(2400,!1))}}scrollToElement(n,e){let i=n.getBoundingClientRect(),r=i.left+this.window.pageXOffset,o=i.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(te(w({},e),{left:r-s[0],top:o-s[1]}))}};function BP(t,n){let e=t.getElementById(n)||t.getElementsByName(n)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let i=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let o=r.shadowRoot;if(o){let s=o.getElementById(n)||o.querySelector(`[name="${CSS.escape(n)}"]`);if(s)return s}r=i.nextNode()}}return null}var tl=class{_doc;constructor(n){this._doc=n}manager},xf=(()=>{class t extends tl{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(R(ne))};static \u0275prov=G({token:t,factory:t.\u0275fac})}return t})(),Nf=new S(""),ky=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof xf));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof xf);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new D(-5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(R(Nf),R(V))};static \u0275prov=G({token:t,factory:t.\u0275fac})}return t})(),Ny="ng-app-id";function px(t){for(let n of t)n.remove()}function gx(t,n){let e=n.createElement("style");return e.textContent=t,e}function VP(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Ny}="${n}"],link[${Ny}="${n}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(Ny),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function Ty(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Ry=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,VP(e,i,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,gx);i?.forEach(r=>this.addUsage(r,this.external,Ty))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(px(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])px(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,gx(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Ty(i,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let i of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of i.elements)o.parentNode===e?o.remove():r.push(o);i.elements=r}}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(R(ne),R(Lo),R(Vr,8),R(Bo))};static \u0275prov=G({token:t,factory:t.\u0275fac})}return t})(),My={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ay=/%COMP%/g;var yx="%COMP%",jP=`_nghost-${yx}`,UP=`_ngcontent-${yx}`,HP=!0,zP=new S("",{factory:()=>HP}),$P=new S("");function GP(t){return UP.replace(Ay,t)}function qP(t){return jP.replace(Ay,t)}function _x(t,n){return n.map(e=>e.replace(Ay,t))}var rl=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,i,r,o,s,a,c=null,l=null,d=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=c,this.tracingService=l,this.cssVarNamespace=d??"",this.defaultRenderer=new nl(e,s,a,this.tracingService,this.cssVarNamespace)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof If?r.applyToHost(e):r instanceof il&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case ni.Emulated:o=new If(c,l,i,this.appId,d,s,a,f,this.cssVarNamespace);break;case ni.ShadowDom:return new Ef(c,e,i,s,a,this.nonce,f,this.cssVarNamespace,l);case ni.ExperimentalIsolatedShadowDom:return new Ef(c,e,i,s,a,this.nonce,f,this.cssVarNamespace);default:o=new il(c,l,i,d,s,a,f,this.cssVarNamespace);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(R(ky),R(Wo),R(Lo),R(zP),R(ne),R(V),R(Vr),R(ri,8),R($P,8))};static \u0275prov=G({token:t,factory:t.\u0275fac})}return t})(),nl=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r,o=""){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(My[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(vx(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){if(n){let r=vx(n)?n.content:n;if(i!=null&&i.parentNode!==r)throw new D(-5106,WP(i));r.insertBefore(e,i)}}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new D(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=My[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=My[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){let o=e.startsWith("--");o&&(e=e.replace("%NS%",this.cssVarNamespace)),o||r&(ii.DashCase|ii.Important)?n.style.setProperty(e,i,r&ii.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){let r=e.startsWith("--");r&&(e=e.replace("%NS%",this.cssVarNamespace)),r||i&ii.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=Mn().getGlobalEventTarget(this.doc,n),!n))throw new D(-5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function vx(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}function WP(t){let n=t.textContent?.slice(0,50);return n?`${t.nodeName} ("${n}")`:t.nodeName}var Ef=class extends nl{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,s,a,c,l){super(n,r,o,a,c),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=i.styles;d=_x(i.id,d).map(m=>m.replace(/%NS%/g,c));for(let m of d){let h=document.createElement("style");s&&h.setAttribute("nonce",s),h.textContent=m,this.shadowRoot.appendChild(h)}let f=i.getExternalStyles?.();if(f)for(let m of f){let h=Ty(m,r);s&&h.setAttribute("nonce",s),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},il=class extends nl{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,s,a,c,l){super(n,o,s,a,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=i.styles,f=l?_x(l,d):d;this.styles=f.map(m=>m.replace(/%NS%/g,c)),this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Ur.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},If=class extends il{contentAttr;hostAttr;constructor(n,e,i,r,o,s,a,c,l){let d=r+"-"+i.id;super(n,e,i,o,s,a,c,l,d),this.contentAttr=GP(d),this.hostAttr=qP(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var Mf=class t extends Xc{supportsDOMEvents=!0;static makeCurrent(){yy(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=KP();return e==null?null:YP(e)}resetBaseElement(){ol=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Jc(document.cookie,n)}},ol=null;function KP(){return ol=ol||document.head.querySelector("base"),ol?ol.getAttribute("href"):null}function YP(t){return new URL(t,document.baseURI).pathname}var Tf=class{addToWindow(n){Yt.getAngularTestability=(i,r=!0)=>{let o=n.findTestabilityInTree(i,r);if(o==null)throw new D(5103,!1);return o},Yt.getAllAngularTestabilities=()=>n.getAllTestabilities(),Yt.getAllAngularRootElements=()=>n.getAllRootElements();let e=i=>{let r=Yt.getAllAngularTestabilities(),o=r.length,s=function(){o--,o==0&&i()};r.forEach(a=>{a.whenStable(s)})};Yt.frameworkStabilizers||(Yt.frameworkStabilizers=[]),Yt.frameworkStabilizers.push(e)}findTestabilityInTree(n,e,i){if(e==null)return null;let r=n.getTestability(e);return r??(i?Mn().isShadowRoot(e)?this.findTestabilityInTree(n,e.host,!0):this.findTestabilityInTree(n,e.parentElement,!0):null)}},bx=["alt","control","meta","shift"],QP={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ZP={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Sx=(()=>{class t extends tl{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let s=t.parseEventName(i),a=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Mn().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),bx.forEach(l=>{let d=i.indexOf(l);d>-1&&(i.splice(d,1),s+=l+".")}),s+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=s,c}static matchEventFullKeyCode(e,i){let r=QP[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),bx.forEach(s=>{if(s!==r){let a=ZP[s];a(e)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(R(ne))};static \u0275prov=G({token:t,factory:t.\u0275fac})}return t})();function XP(){Mf.makeCurrent()}function JP(){return new rn}function eL(){return av(document),document}var tL=[{provide:Bo,useValue:Ey},{provide:_u,useValue:XP,multi:!0},{provide:ne,useFactory:eL}],Oy=py(ox,"browser",tL);var nL=[{provide:Js,useClass:Tf},{provide:cf,useClass:qc,deps:[V,Wc,Js]},{provide:qc,useClass:qc,deps:[V,Wc,Js]}],iL=[{provide:wc,useValue:"root"},{provide:rn,useFactory:JP},{provide:Nf,useClass:xf,multi:!0},{provide:Nf,useClass:Sx,multi:!0},rl,{provide:Wo,useClass:Ry},{provide:Ry,useExisting:Wo},ky,{provide:mt,useExisting:rl},[]],sl=(()=>{class t{constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({providers:[...iL,...nL],imports:[Cy,tx]})}return t})();var Pi=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init();for(let[e,i]of n.headers.entries())this.headers.set(e,i),this.normalizedNames.set(e,n.normalizedNames.get(e))}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=n.op==="a"?(this.headers.get(e)||[]).slice():[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=Array.isArray(o)?o:[o],a=this.headers.get(e);if(!a)return;a=a.filter(c=>s.indexOf(c)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Rf=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Af=class{encodeKey(n){return wx(n)}encodeValue(n){return wx(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function rL(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,a]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],c=e.get(s)||[];c.push(a),e.set(s,c)}),e}var oL=/%(\d[a-f0-9])/gi,sL={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function wx(t){return encodeURIComponent(t).replace(oL,(n,e)=>sL[e]??n)}function kf(t){return`${t}`}var cr=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Af,n.fromString){if(n.fromObject)throw new D(2805,!1);this.map=rL(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(kf):[kf(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[n,e]of this.cloneFrom.map.entries())this.map.set(n,e);this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=n.op==="a"?(this.map.get(n.param)||[]).slice():[];e.push(kf(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=(this.map.get(n.param)||[]).slice(),r=i.indexOf(kf(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null}}};function aL(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Cx(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Dx(t){return typeof Blob<"u"&&t instanceof Blob}function xx(t){return typeof FormData<"u"&&t instanceof FormData}function cL(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var al="Content-Type",Of="Accept",Mx="text/plain",Tx="application/json",kx=`${Tx}, ${Mx}, */*`,ra=class t{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(aL(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new D(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Pi,this.context??=new Rf,!this.params)this.params=new cr,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e,c="",l=e.indexOf("#");l!==-1&&(c=e.substring(l),a=e.substring(0,l));let d=a.indexOf("?"),f=d===-1?"?":d<a.length-1?"&":"";this.urlWithParams=a+f+s+c}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Cx(this.body)||Dx(this.body)||xx(this.body)||cL(this.body)?this.body:this.body instanceof cr?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||xx(this.body)?null:Dx(this.body)?this.body.type||null:Cx(this.body)?null:typeof this.body=="string"?Mx:this.body instanceof cr?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Tx:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,c=n.mode||this.mode,l=n.redirect||this.redirect,d=n.credentials||this.credentials,f=n.referrer??this.referrer,m=n.integrity||this.integrity,h=n.referrerPolicy||this.referrerPolicy,v=n.transferCache??this.transferCache,C=n.timeout??this.timeout,E=n.body!==void 0?n.body:this.body,M=n.withCredentials??this.withCredentials,O=n.reportProgress??this.reportProgress,ie=n.reportUploadProgress??this.reportUploadProgress,Oe=n.reportDownloadProgress??this.reportDownloadProgress,At=n.headers||this.headers,Be=n.params||this.params,tt=n.context??this.context;return n.setHeaders!==void 0&&(At=Object.keys(n.setHeaders).reduce((lt,Ot)=>lt.set(Ot,n.setHeaders[Ot]),At)),n.setParams&&(Be=Object.keys(n.setParams).reduce((lt,Ot)=>lt.set(Ot,n.setParams[Ot]),Be)),new t(e,i,E,{params:Be,headers:At,context:tt,reportProgress:O,reportUploadProgress:ie,reportDownloadProgress:Oe,responseType:r,withCredentials:M,transferCache:v,keepalive:o,cache:a,priority:s,timeout:C,mode:c,redirect:l,credentials:d,referrer:f,integrity:m,referrerPolicy:h})}},Fi=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Fi||{}),oa=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new Pi,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},cl=class t extends oa{constructor(n={}){super(n)}type=Fi.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},sa=class t extends oa{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Fi.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Oi=class extends oa{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},Rx=200,lL=204;var dL=/^\)\]\}',?\n/,GJ=1024*1024,Ax=new S("",{factory:()=>null}),Ff=(()=>{class t{fetchImpl=u(Py,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=u(V);destroyRef=u(nt);maxResponseSize=u(Ax);handle(e){return new re(i=>{let r=new AbortController,o=!1,s={next:c=>{c.type===Fi.Response&&(o=!0),i.next(c)},error:c=>{o=!0,i.error(c)},complete:()=>{o=!0,i.complete()}};this.doRequest(e,r.signal,s).then(Ly,c=>s.error(new Oi({error:c})));let a;return e.timeout&&(a=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{a!==void 0&&clearTimeout(a),!o&&!r.signal.aborted&&r.abort()}})}doRequest(e,i,r){return Ae(this,null,function*(){let o=this.createRequestInit(e),s;try{let E=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,w({signal:i},o)));uL(E),r.next({type:Fi.Sent}),s=yield E}catch(E){r.error(new Oi({error:E,status:E.status??0,statusText:E.statusText,url:e.urlWithParams,headers:E.headers}));return}let a=new Pi(s.headers),c=s.statusText,l=s.url||e.urlWithParams,d=s.status,f=null,m=e.reportProgress||e.reportDownloadProgress;if(m&&r.next(new cl({headers:a,status:d,statusText:c,url:l})),s.body){let E=s.headers.get(al)??"",M=s.headers.get("content-length"),O=M!==null?Number(M):NaN;this.maxResponseSize!==null&&Number.isFinite(O)&&O>this.maxResponseSize&&(yield s.body.cancel(),Ex(this.maxResponseSize));let ie=[],Oe=s.body.getReader(),At=0,Be,tt,lt=typeof Zone<"u"&&Zone.current,Ot=!1;if(yield this.ngZone.runOutsideAngular(()=>Ae(this,null,function*(){for(;;){if(this.destroyRef.destroyed){yield Oe.cancel(),Ot=!0;break}let{done:ys,value:Wn}=yield Oe.read();if(ys)break;if(ie.push(Wn),At+=Wn.length,this.maxResponseSize!==null&&At>this.maxResponseSize&&(yield Oe.cancel(),Ex(this.maxResponseSize)),m){tt=e.responseType==="text"?(tt??"")+(Be??=Ix(E)).decode(Wn,{stream:!0}):void 0;let _s=()=>r.next({type:Fi.DownloadProgress,total:Number.isFinite(O)?O:void 0,loaded:At,partialText:tt});lt?lt.run(_s):_s()}}})),Ot){r.complete();return}let _r=this.concatChunks(ie,At);try{f=this.parseBody(e,_r,E,d)}catch(ys){r.error(new Oi({error:ys,headers:new Pi(s.headers),status:s.status,statusText:s.statusText,url:s.url||e.urlWithParams}));return}}d===0&&(d=f?Rx:0);let h=d>=200&&d<300,v=s.redirected,C=s.type;h?(r.next(new sa({body:f,headers:a,status:d,statusText:c,url:l,redirected:v,responseType:C})),r.complete()):r.error(new Oi({error:f,headers:a,status:d,statusText:c,url:l,redirected:v,responseType:C}))})}parseBody(e,i,r,o){switch(e.responseType){case"json":let s=new TextDecoder().decode(i).replace(dL,"");if(s==="")return null;try{return JSON.parse(s)}catch(a){if(o<200||o>=300)return s;throw a}case"text":return Ix(r).decode(i);case"blob":return new Blob([i],{type:r});case"arraybuffer":return i.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new D(2824,!1);let i={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((o,s)=>i[o]=s.join(",")),e.headers.has(Of)||(i[Of]=kx),!e.headers.has(al)){let o=e.detectContentTypeHeader();o!==null&&(i[al]=o)}return{body:e.serializeBody(),method:e.method,headers:i,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,i){let r=new Uint8Array(i),o=0;for(let s of e)r.set(s,o),o+=s.length;return r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})(),Py=class{};function Ly(){}function uL(t){t.then(Ly,Ly)}function Ex(t){throw new D(-2825,!1)}var fL=/charset=\s*["']?([^;"'\s]+)["']?/i;function Ix(t){let n=t.match(fL);if(n!==null)try{return new TextDecoder(n[1])}catch(e){}return new TextDecoder}var mL=new S("",{factory:()=>!0}),hL="XSRF-TOKEN",pL=new S("",{factory:()=>hL}),gL="X-XSRF-TOKEN",vL=new S("",{factory:()=>gL}),yL=(()=>{class t{cookieName=u(pL);doc=u(ne);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Jc(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})(),Ox=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=G({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=R(yL),r},providedIn:"root"})}return t})();function Fx(t,n){if(!u(mL)||t.method==="GET"||t.method==="HEAD")return n(t);try{let r=u(ar).href,{origin:o}=new URL(r),{origin:s}=new URL(t.url,o);if(o!==s)return n(t)}catch(r){return n(t)}let e=u(Ox).getToken(),i=u(vL);return e!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,e)})),n(t)}function Px(t,n){return n(t)}function _L(t,n){return(e,i)=>n.intercept(e,{handle:r=>t(r,i)})}function bL(t,n,e){return(i,r)=>Et(e,()=>n(i,o=>t(o,r)))}var Lx=new S(""),Vy=new S("",{factory:()=>[Fx]}),Bx=new S(""),jy=new S("",{factory:()=>!0});function SL(){let t=null;return(n,e)=>{t===null&&(t=(u(Lx,{optional:!0})??[]).reduceRight(_L,Px));let i=u(Vo);if(u(jy)){let o=i.add();return t(n,e).pipe(kr(o))}else return t(n,e)}}var Lf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=G({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=R(Ff),r},providedIn:"root"})}return t})();var Pf=(()=>{class t{backend;injector;chain=null;pendingTasks=u(Vo);contributeToStability=u(jy);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let r=this.injector.get(Bf,null,{skipSelf:!0}),o=r!==null&&this.backend===r,s=this.injector.get(Bx,[],o?{self:!0}:void 0),a=Array.from(new Set([...this.injector.get(Vy),...s]));this.chain=a.reduceRight((c,l)=>bL(c,l,this.injector),Px)}let i=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return xe(()=>i(e,o=>this.backend.handle(o))).pipe(kr(r))}else return xe(()=>i(e,r=>this.backend.handle(r)))}static \u0275fac=function(i){return new(i||t)(R(Lf),R(ze))};static \u0275prov=G({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Bf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=G({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=R(Pf),r},providedIn:"root"})}return t})();function Fy(t,n){return w({body:n},t)}var Vf=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof ra)o=e;else{let c;r.headers instanceof Pi?c=r.headers:c=new Pi(r.headers);let l;r.params&&(r.params instanceof cr?l=r.params:l=new cr({fromObject:r.params})),o=new ra(e,i,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=Y(o).pipe(Tr(c=>this.handler.handle(c)));if(e instanceof ra||r.observe==="events")return s;let a=s.pipe(Te(c=>c instanceof sa));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(me(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new D(2806,!1);return c.body}));case"blob":return a.pipe(me(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new D(2807,!1);return c.body}));case"text":return a.pipe(me(c=>{if(c.body!==null&&typeof c.body!="string")throw new D(2808,!1);return c.body}));default:return a.pipe(me(c=>c.body))}case"response":return a;default:throw new D(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new cr().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,Fy(r,i))}post(e,i,r={}){return this.request("POST",e,Fy(r,i))}put(e,i,r={}){return this.request("PUT",e,Fy(r,i))}static \u0275fac=function(i){return new(i||t)(R(Bf))};static \u0275prov=G({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var wL=/^\)\]\}',?\n/;var By=(()=>{class t{xhrFactory;tracingService=u(ri,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new D(-2800,!1);let i=this.xhrFactory;return Y(null).pipe(Je(()=>new re(o=>{let s=i.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((O,ie)=>s.setRequestHeader(O,ie.join(","))),e.headers.has(Of)||s.setRequestHeader(Of,kx),!e.headers.has(al)){let O=e.detectContentTypeHeader();O!==null&&s.setRequestHeader(al,O)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let O=e.responseType.toLowerCase();s.responseType=O!=="json"?O:"text"}let a=e.serializeBody(),c=null,l=()=>{if(c!==null)return c;let O=s.statusText||"OK",ie=new Pi(s.getAllResponseHeaders()),Oe=s.responseURL||e.url;return c=new cl({headers:ie,status:s.status,statusText:O,url:Oe}),c},d=this.maybePropagateTrace(()=>{let{headers:O,status:ie,statusText:Oe,url:At}=l(),Be=null;ie!==lL&&(Be=typeof s.response>"u"?s.responseText:s.response),ie===0&&(ie=Be?Rx:0);let tt=ie>=200&&ie<300;if(e.responseType==="json"&&typeof Be=="string"){let lt=Be;Be=Be.replace(wL,"");try{Be=Be!==""?JSON.parse(Be):null}catch(Ot){Be=lt,tt&&(tt=!1,Be={error:Ot,text:Be})}}tt?(o.next(new sa({body:Be,headers:O,status:ie,statusText:Oe,url:At||void 0})),o.complete()):o.error(new Oi({error:Be,headers:O,status:ie,statusText:Oe,url:At||void 0}))}),f=this.maybePropagateTrace(O=>{let{url:ie}=l(),Oe=new Oi({error:O,status:s.status||0,statusText:s.statusText||"Unknown Error",url:ie||void 0});o.error(Oe)}),m=f;e.timeout&&(m=this.maybePropagateTrace(O=>{let{url:ie}=l(),Oe=new Oi({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:ie||void 0});o.error(Oe)}));let h=!1,v=this.maybePropagateTrace(O=>{h||(o.next(l()),h=!0);let ie={type:Fi.DownloadProgress,loaded:O.loaded};O.lengthComputable&&(ie.total=O.total),e.responseType==="text"&&s.responseText&&(ie.partialText=s.responseText),o.next(ie)}),C=this.maybePropagateTrace(O=>{let ie={type:Fi.UploadProgress,loaded:O.loaded};O.lengthComputable&&(ie.total=O.total),o.next(ie)});s.addEventListener("load",d),s.addEventListener("error",f),s.addEventListener("timeout",m),s.addEventListener("abort",f);let E=e.reportProgress||e.reportUploadProgress,M=e.reportProgress||e.reportDownloadProgress;return M&&s.addEventListener("progress",v),E&&a!==null&&s.upload&&s.upload.addEventListener("progress",C),s.send(a),o.next({type:Fi.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",d),s.removeEventListener("timeout",m),M&&s.removeEventListener("progress",v),E&&a!==null&&s.upload&&s.upload.removeEventListener("progress",C),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(i){return new(i||t)(R(Dy))};static \u0275prov=G({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),jf=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t[t.Xhr=7]="Xhr",t})(jf||{});function Vx(t,n){return{\u0275kind:t,\u0275providers:n}}function jx(...t){let n=[Vf,Ff,Pf,{provide:Bf,useExisting:Pf},{provide:Lf,useFactory:()=>u(Ff)},{provide:Vy,useValue:Fx,multi:!0}];for(let e of t)n.push(...e.\u0275providers);return Yn(n)}var Nx=new S("");function Ux(){return Vx(jf.LegacyInterceptors,[{provide:Nx,useFactory:SL},{provide:Vy,useExisting:Nx,multi:!0}])}function Hx(){return Vx(jf.Xhr,[By,{provide:Lf,useExisting:By}])}var Uy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({providers:[jx(Ux(),Hx())]})}return t})();var zx=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(R(ne))};static \u0275prov=G({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ll=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=G({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=R(DL),r},providedIn:"root"})}return t})(),DL=(()=>{class t extends ll{_doc=u(ne);sanitize(e,i){if(i==null)return null;switch(e){case Fe.NONE:return i;case Fe.HTML:return Ii(i,"HTML")?pn(i):Ku(this._doc,String(i)).toString();case Fe.STYLE:return Ii(i,"Style")?pn(i):i;case Fe.SCRIPT:if(Ii(i,"Script"))return pn(i);throw new D(5200,!1);case Fe.URL:return Ii(i,"URL")?pn(i):Uc(String(i));case Fe.RESOURCE_URL:if(Ii(i,"ResourceURL"))return pn(i);throw new D(-5201,!1);default:throw new D(5202,!1)}}bypassSecurityTrustHtml(e){return uv(e)}bypassSecurityTrustStyle(e){return fv(e)}bypassSecurityTrustScript(e){return mv(e)}bypassSecurityTrustUrl(e){return hv(e)}bypassSecurityTrustResourceUrl(e){return pv(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var _e="primary",Sl=Symbol("RouteTitle"),Wy=class{params;constructor(n){this.params=n||{}}has(n){return Object.hasOwn(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Jo(t){return new Wy(t)}function zy(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Zx(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let c={},l=t.slice(0,i.length);return zy(i,l,c)?{consumed:l,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),s=i.slice(r+1);if(o.length+s.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let a={};return!zy(o,t.slice(0,o.length),a)||!zy(s,t.slice(t.length-s.length),a)?null:{consumed:t,posParams:a}}function qf(t){return new Promise((n,e)=>{t.pipe(Qi()).subscribe({next:i=>n(i),error:i=>e(i)})})}function xL(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Li(t[e],n[e]))return!1;return!0}function Li(t,n){let e=t?Ky(t):void 0,i=n?Ky(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Xx(t[r],n[r]))return!1;return!0}function Ky(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Xx(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function EL(t){return t.length>0?t[t.length-1]:null}function ts(t){return bo(t)?t:or(t)?Ye(Promise.resolve(t)):Y(t)}function Jx(t){return bo(t)?qf(t):Promise.resolve(t)}var IL={exact:nE,subset:iE},eE={exact:NL,subset:ML,ignored:()=>!0},tE={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Yy={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function $x(t,n,e){return IL[e.paths](t.root,n.root,e.matrixParams)&&eE[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function NL(t,n){return Li(t,n)}function nE(t,n,e){if(!Xo(t.segments,n.segments)||!zf(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!nE(t.children[i],n.children[i],e))return!1;return!0}function ML(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>Xx(t[e],n[e]))}function iE(t,n,e){return rE(t,n,n.segments,e)}function rE(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Xo(r,e)||n.hasChildren()||!zf(r,e,i))}else if(t.segments.length===e.length){if(!Xo(t.segments,e)||!zf(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!iE(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Xo(t.segments,r)||!zf(t.segments,r,i)||!t.children[_e]?!1:rE(t.children[_e],n,o,i)}}function zf(t,n,e){return n.every((i,r)=>eE[e](t[r].parameters,i.parameters))}var kn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new Ue([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Jo(this.queryParams),this._queryParamMap}toString(){return RL.serialize(this)}},Ue=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return $f(this)}},$r=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Jo(this.parameters),this._parameterMap}toString(){return sE(this)}};function TL(t,n){return Xo(t,n)&&t.every((e,i)=>Li(e.parameters,n[i].parameters))}function Xo(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function kL(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===_e&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==_e&&(e=e.concat(n(r,i)))}),e}var Wr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:()=>new dr})}return t})(),dr=class{parse(n){let e=new Zy(n);return new kn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${dl(n.root,!0)}`,i=FL(n.queryParams),r=typeof n.fragment=="string"?`#${AL(n.fragment)}`:"";return`${e}${i}${r}`}},RL=new dr;function $f(t){return t.segments.map(n=>sE(n)).join("/")}function dl(t,n){if(!t.hasChildren())return $f(t);if(n){let e=t.children[_e]?dl(t.children[_e],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==_e&&i.push(`${r}:${dl(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=kL(t,(i,r)=>r===_e?[dl(t.children[_e],!1)]:[`${r}:${dl(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[_e]!=null?`${$f(t)}/${e[0]}`:`${$f(t)}/(${e.join("//")})`}}function oE(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Uf(t){return oE(t).replace(/%3B/gi,";")}function AL(t){return encodeURI(t)}function Qy(t){return oE(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Gf(t){return decodeURIComponent(t)}function Gx(t){return Gf(t.replace(/\+/g,"%20"))}function sE(t){return`${Qy(t.path)}${OL(t.parameters)}`}function OL(t){return Object.entries(t).map(([n,e])=>`;${Qy(n)}=${Qy(e)}`).join("")}function FL(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${Uf(e)}=${Uf(r)}`).join("&"):`${Uf(e)}=${Uf(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var PL=/^[^\/()?;#]+/;function $y(t){let n=t.match(PL);return n?n[0]:""}var LL=/^[^\/()?;=#]+/;function BL(t){let n=t.match(LL);return n?n[0]:""}var VL=/^[^=?&#]+/;function jL(t){let n=t.match(VL);return n?n[0]:""}var UL=/^[^&#]+/;function HL(t){let n=t.match(UL);return n?n[0]:""}var Zy=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ue([],{}):new Ue([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new D(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[_e]=new Ue(e,i)),r}parseSegment(){let n=$y(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new D(4009,!1);return this.capture(n),new $r(Gf(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=BL(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=$y(this.remaining);r&&(i=r,this.capture(i))}n[Gf(e)]=Gf(i)}parseQueryParam(n){let e=jL(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let s=HL(this.remaining);s&&(i=s,this.capture(i))}let r=Gx(e),o=Gx(i);if(Object.hasOwn(n,r)){let s=n[r];Array.isArray(s)||(s=[s],n[r]=s),s.push(o)}else n[r]=o}parseParens(n,e){let i=Object.create(null);for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=$y(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new D(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):n&&(s=_e);let a=this.parseChildren(e+1);i[s??_e]=Object.keys(a).length===1&&a[_e]?a[_e]:new Ue([],a),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new D(4011,!1)}};function aE(t){return t.segments.length>0?new Ue([],{[_e]:t}):t}function cE(t){let n=Object.create(null);for(let[i,r]of Object.entries(t.children)){let o=cE(r);if(i===_e&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))n[s]=a;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new Ue(t.segments,n);return zL(e)}function zL(t){if(t.numberOfChildren===1&&t.children[_e]){let n=t.children[_e];return new Ue(t.segments.concat(n.segments),n.children)}return t}function Gr(t){return t instanceof kn}function lE(t,n,e=null,i=null,r=new dr){let o=dE(t);return uE(o,n,e,i,r)}function dE(t){let n;function e(o){let s={};for(let c of o.children){let l=e(c);s[c.outlet]=l}let a=new Ue(o.url,s);return o===t&&(n=a),a}let i=e(t.root),r=aE(i);return n??r}function uE(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Gy(o,o,o,e,i,r);let s=$L(n);if(s.toRoot())return Gy(o,o,new Ue([],{}),e,i,r);let a=GL(s,o,t),c=a.processChildren?fl(a.segmentGroup,a.index,s.commands):mE(a.segmentGroup,a.index,s.commands);return Gy(o,a.segmentGroup,c,e,i,r)}function Wf(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function hl(t){return typeof t=="object"&&t!=null&&t.outlets}function qx(t,n,e){t||="\u0275";let i=new kn;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function Gy(t,n,e,i,r,o){let s={};for(let[l,d]of Object.entries(i??{}))s[l]=Array.isArray(d)?d.map(f=>qx(l,f,o)):qx(l,d,o);let a;t===n?a=e:a=fE(t,n,e);let c=aE(cE(a));return new kn(c,s,r)}function fE(t,n,e){let i=Object.create(null);return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=fE(o,n,e)}),new Ue(t.segments,i)}var Kf=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&Wf(i[0]))throw new D(4003,!1);let r=i.find(hl);if(r&&r!==EL(i))throw new D(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function $L(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Kf(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?e=!0:a===".."?n++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new Kf(e,n,i)}var ca=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function GL(t,n,e){if(t.isAbsolute)return new ca(n,!0,0);if(!e)return new ca(n,!1,NaN);if(e.parent===null)return new ca(e,!0,0);let i=Wf(t.commands[0])?0:1,r=e.segments.length-1+i;return qL(e,r,t.numberOfDoubleDots)}function qL(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new D(4005,!1);r=i.segments.length}return new ca(i,!1,r-o)}function WL(t){return hl(t[0])?t[0].outlets:{[_e]:t}}function mE(t,n,e){if(t??=new Ue([],{}),t.segments.length===0&&t.hasChildren())return fl(t,n,e);let i=KL(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new Ue(t.segments.slice(0,i.pathIndex),{});return o.children[_e]=new Ue(t.segments.slice(i.pathIndex),t.children),fl(o,0,r)}else return i.match&&r.length===0?new Ue(t.segments,{}):i.match&&!t.hasChildren()?Xy(t,n,e):i.match?fl(t,0,r):Xy(t,n,e)}function fl(t,n,e){if(e.length===0)return new Ue(t.segments,{});{let i=WL(e),r=Object.create(null);if(Object.keys(i).some(o=>o!==_e)&&t.children[_e]&&t.numberOfChildren===1&&t.children[_e].segments.length===0){let o=fl(t.children[_e],n,e);return new Ue(t.segments,o.children)}return Object.entries(i).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=mE(t.children[o],n,s))}),Object.entries(t.children).forEach(([o,s])=>{i[o]===void 0&&(r[o]=s)}),new Ue(t.segments,r)}}function KL(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let s=t.segments[r],a=e[i];if(hl(a))break;let c=`${a}`,l=i<e.length-1?e[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!Kx(c,l,s))return o;i+=2}else{if(!Kx(c,{},s))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Xy(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(hl(o)){let c=YL(o.outlets);return new Ue(i,c)}if(r===0&&Wf(e[0])){let c=t.segments[n];i.push(new $r(c.path,Wx(e[0]))),r++;continue}let s=hl(o)?o.outlets[_e]:`${o}`,a=r<e.length-1?e[r+1]:null;s&&a&&Wf(a)?(i.push(new $r(s,Wx(a))),r+=2):(i.push(new $r(s,{})),r++)}return new Ue(i,{})}function YL(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=Xy(new Ue([],{}),0,i))}),n}function Wx(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function Kx(t,n,e){return t==e.path&&Li(n,e.parameters)}var la="imperative",kt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(kt||{}),Rn=class{id;url;constructor(n,e){this.id=n,this.url=e}},qr=class extends Rn{type=kt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},$n=class extends Rn{urlAfterRedirects;type=kt.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},en=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(en||{}),ua=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(ua||{}),zn=class extends Rn{reason;code;type=kt.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function hE(t){return t instanceof zn&&(t.code===en.Redirect||t.code===en.SupersededByNewNavigation)}var Bi=class extends Rn{reason;code;type=kt.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},es=class extends Rn{error;target;type=kt.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},pl=class extends Rn{urlAfterRedirects;state;type=kt.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Yf=class extends Rn{urlAfterRedirects;state;type=kt.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Qf=class extends Rn{urlAfterRedirects;state;shouldActivate;type=kt.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Zf=class extends Rn{urlAfterRedirects;state;type=kt.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xf=class extends Rn{urlAfterRedirects;state;type=kt.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Jf=class{route;type=kt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},em=class{route;type=kt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},tm=class{snapshot;type=kt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},nm=class{snapshot;type=kt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},im=class{snapshot;type=kt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},rm=class{snapshot;type=kt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},fa=class{routerEvent;position;anchor;scrollBehavior;type=kt.Scroll;constructor(n,e,i,r){this.routerEvent=n,this.position=e,this.anchor=i,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},ma=class{},gl=class{},ha=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function QL(t){return!(t instanceof ma)&&!(t instanceof ha)&&!(t instanceof gl)}var om=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new ns(this.rootInjector)}},ns=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new om(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(R(ze))};static \u0275prov=G({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),sm=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Jy(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=Jy(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=e_(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return e_(n,this._root).map(e=>e.value)}};function Jy(t,n){if(t===n.value)return n;for(let e of n.children){let i=Jy(t,e);if(i)return i}return null}function e_(t,n){if(t===n.value)return[n];for(let e of n.children){let i=e_(t,e);if(i.length)return i.unshift(n),i}return[]}var Tn=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function aa(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var vl=class extends sm{snapshot;constructor(n,e){super(n),this.snapshot=e,d_(this,n)}toString(){return this.snapshot.toString()}};function pE(t,n){let e=ZL(t,n),i=new bt([new $r("",{})]),r=new bt({}),o=new bt({}),s=new bt({}),a=new bt(""),c=new ur(i,r,s,a,o,_e,t,e.root);return c.snapshot=e.root,new vl(new Tn(c,[]),e)}function ZL(t,n){let e={},i={},r={},s=new pa([],e,r,"",i,_e,t,null,{},n);return new yl("",new Tn(s,[]))}var ur=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(n,e,i,r,o,s,a,c){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(me(l=>l[Sl]))??Y(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(me(n=>Jo(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(me(n=>Jo(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(n){this._futureSnapshot=n,this.pending?.set(!0)}},XL="always";function l_(t,n,e){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:w(w({},n.params),t.params),data:w(w({},n.data),t.data),resolve:w(w(w(w({},t.data),n.data),r?.data),t._resolvedData)}:i={params:w({},t.params),data:w({},t.data),resolve:w(w({},t.data),t._resolvedData??{})},r&&vE(r)&&(i.resolve[Sl]=r.title),i}var pa=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[Sl]}constructor(n,e,i,r,o,s,a,c,l,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=c,this._resolve=l,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Jo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Jo(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},yl=class extends sm{url;constructor(n,e){super(e),this.url=n,d_(this,e)}toString(){return gE(this._root)}};function d_(t,n){n.value._routerState=t,n.children.forEach(e=>d_(t,e))}function gE(t){let n=t.children.length>0?` { ${t.children.map(gE).join(", ")} } `:"";return`${t.value}${n}`}function qy(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Li(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Li(n.params,e.params)||t.paramsSubject.next(e.params),xL(n.url,e.url)||t.urlSubject.next(e.url),Li(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function t_(t,n){let e=Li(t.params,n.params)&&TL(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||t_(t.parent,n.parent))}function vE(t){return typeof t.title=="string"||t.title===null}var yE=new S(""),wl=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=_e;activateEvents=new se;deactivateEvents=new se;attachEvents=new se;detachEvents=new se;routerOutletData=Jt();parentContexts=u(ns);location=u(st);changeDetector=u(et);inputBinder=u(Cl,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new D(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new D(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new D(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new D(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new n_(e,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Xe]})}return t})(),n_=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===ur?this.route:n===ns?this.childContexts:n===yE?this.outletData:this.parent.get(n,e)}},Cl=new S(""),_E=(()=>{class t{options;outletDataSubscriptions=new Map;outletSeenKeys=new Map;constructor(e){this.options=e,this.options.queryParams??=!0}bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e),this.outletSeenKeys.delete(e)}subscribeToRouteData(e){let{activatedRoute:i}=e,r=Ir([this.options.queryParams?i.queryParams:Y({}),i.params,i.data]).pipe(Je(([o,s,a],c)=>(a=w(w(w({},o),s),a),c===0?Y(a):Promise.resolve(a)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(e);return}let s=sx(i.component);if(!s){this.unsubscribeFromRouteData(e);return}let a=this.outletSeenKeys.get(e);a||(a=new Set,this.outletSeenKeys.set(e,a));for(let l of Object.keys(o))a.add(l);let c=this.options.unmatchedInputBehavior??"alwaysUndefined";for(let{templateName:l}of s.inputs){let d=o[l];(d!==void 0||c==="alwaysUndefined"||a.has(l))&&e.activatedComponentRef.setInput(l,d)}});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(i){Ko()};static \u0275prov=G({token:t,factory:t.\u0275fac})}return t})(),u_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&U(0,"router-outlet")},dependencies:[wl],encapsulation:2,changeDetection:1})}return t})();function f_(t){let n=t.children&&t.children.map(f_),e=n?te(w({},t),{children:n}):w({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==_e&&(e.component=u_),e}function JL(t,n,e){let i=new Set,r=_l(t,n._root,e?e._root:void 0,i);return{newlyCreatedRoutes:i,state:new vl(r,n)}}function _l(t,n,e,i){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let r=e.value;r._setPending(n.value);let o=e2(t,n,e,i);return new Tn(r,o)}else{if(t.shouldAttach(n.value)){let s=t.retrieve(n.value);if(s!==null){let a=s.route;return a.value._setPending(n.value),a.children=n.children.map(c=>_l(t,c,void 0,i)),a}}let r=t2(n.value);r._setPending(n.value),i.add(r);let o=n.children.map(s=>_l(t,s,void 0,i));return new Tn(r,o)}}function e2(t,n,e,i){return n.children.map(r=>{for(let o of e.children)if(t.shouldReuseRoute(r.value,o.value.snapshot))return _l(t,r,o,i);return _l(t,r,void 0,i)})}function t2(t){return new ur(new bt(t.url),new bt(t.params),new bt(t.queryParams),new bt(t.fragment),new bt(t.data),t.outlet,t.component,t)}var ga=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},bE="ngNavigationCancelingError";function am(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=Gr(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=SE(!1,en.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function SE(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[bE]=!0,e.cancellationCode=n,e}function n2(t){return wE(t)&&Gr(t.url)}function wE(t){return!!t&&t[bE]}var i_=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),qy(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=aa(e);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],i),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let s=i.getContext(r.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=aa(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(i&&i.outlet){let s=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=aa(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null),n.value._localInjector?.destroy()}activateChildRoutes(n,e,i){let r=aa(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new rm(o.value.snapshot))}),n.children.length&&this.forwardEvent(new nm(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(qy(r),r===o)if(r.component){let s=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let s=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),qy(a.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,i)}},cm=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},da=class{component;route;constructor(n,e){this.component=n,this.route=e}};function i2(t,n,e){let i=t._root,r=n?n._root:null;return ul(i,r,e,[i.value])}function r2(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function ya(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!xp(t)?t:n.get(t):i}function ul(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=aa(n);return t.children.forEach(s=>{o2(s,o[s.value.outlet],e,i.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>ml(a,e.getContext(s),e,r)),r}function o2(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=n?n.value:null,a=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let c=s2(s,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new cm(i)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?ul(t,n,a?a.children:null,i,r):ul(t,n,e,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new da(a.outlet.component,s))}else s&&ml(n,a,e,r),r.canActivateChecks.push(new cm(i)),o.component?ul(t,null,a?a.children:null,i,r):ul(t,null,e,i,r);return r}function s2(t,n,e){if(typeof e=="function")return Et(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!Xo(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Xo(t.url,n.url)||!Li(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!t_(t,n)||!Li(t.queryParams,n.queryParams);default:return!t_(t,n)}}function ml(t,n,e,i){let r=aa(t),o=t.value;Object.entries(r).forEach(([s,a])=>{o.component?n?ml(a,n.children.getContext(s),n.children,i):ml(a,null,null,i):ml(a,e?e.getContext(s):null,e,i)}),o.component?n&&n.outlet&&n.outlet.isActivated?i.canDeactivateChecks.push(new da(n.outlet.component,o)):i.canDeactivateChecks.push(new da(null,o)):i.canDeactivateChecks.push(new da(null,o))}function Dl(t){return typeof t=="function"}function a2(t){return typeof t=="boolean"}function c2(t){return t&&Dl(t.canLoad)}function l2(t){return t&&Dl(t.canActivate)}function d2(t){return t&&Dl(t.canActivateChild)}function u2(t){return t&&Dl(t.canDeactivate)}function f2(t){return t&&Dl(t.canMatch)}function CE(t){return t instanceof So||t?.name==="EmptyError"}var Hf=Symbol("INITIAL_VALUE");function va(){return Je(t=>Ir(t.map(n=>n.pipe(St(1),Pt(Hf)))).pipe(me(n=>{for(let e of n)if(e!==!0){if(e===Hf)return Hf;if(e===!1||m2(e))return e}return!0}),Te(n=>n!==Hf),St(1)))}function m2(t){return Gr(t)||t instanceof ga}function DE(t){return t.aborted?Y(void 0).pipe(St(1)):new re(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function xE(t){return Ve(DE(t))}function h2(t){return Vt(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?Y(te(w({},n),{guardsResult:!0})):p2(o,e,i).pipe(Vt(s=>s&&a2(s)?g2(e,r,t):Y(s)),me(s=>te(w({},n),{guardsResult:s})))})}function p2(t,n,e){return Ye(t).pipe(Vt(i=>S2(i.component,i.route,e,n)),Qi(i=>i!==!0,!0))}function g2(t,n,e){return Ye(n).pipe(Tr(i=>Ms(y2(i.route.parent,e),v2(i.route,e),b2(t,i.path),_2(t,i.route))),Qi(i=>i!==!0,!0))}function v2(t,n){return t!==null&&n&&n(new im(t)),Y(!0)}function y2(t,n){return t!==null&&n&&n(new tm(t)),Y(!0)}function _2(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return Y(!0);let i=e.map(r=>sc(()=>{let o=n._environmentInjector,s=ya(r,o),a=l2(s)?s.canActivate(n,t):Et(o,()=>s(n,t));return ts(a).pipe(Qi())}));return Y(i).pipe(va())}function b2(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>r2(o)).filter(o=>o!==null).map(o=>sc(()=>{let s=o.guards.map(a=>{let c=o.node._environmentInjector,l=ya(a,c),d=d2(l)?l.canActivateChild(e,t):Et(c,()=>l(e,t));return ts(d).pipe(Qi())});return Y(s).pipe(va())}));return Y(r).pipe(va())}function S2(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return Y(!0);let o=r.map(s=>{let a=n._environmentInjector,c=ya(s,a),l=u2(c)?c.canDeactivate(t,n,e,i):Et(a,()=>c(t,n,e,i));return ts(l).pipe(Qi())});return Y(o).pipe(va())}function w2(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return Y(!0);let s=o.map(a=>{let c=ya(a,t),l=c2(c)?c.canLoad(n,e):Et(t,()=>c(n,e)),d=ts(l);return r?d.pipe(xE(r)):d});return Y(s).pipe(va(),EE(i))}function EE(t){return hd(Lt(n=>{if(typeof n!="boolean")throw am(t,n)}),me(n=>n===!0))}function C2(t,n,e,i,r,o){let s=n.canMatch;if(!s||s.length===0)return Y(!0);let a=s.map(c=>{let l=ya(c,t),d=f2(l)?l.canMatch(n,e,r):Et(t,()=>l(n,e,r));return ts(d).pipe(xE(o))});return Y(a).pipe(va(),EE(i))}var lr=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},bl=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function D2(t){throw new D(4e3,!1)}function x2(t){throw SE(!1,en.GuardRejected)}var r_=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}lineralizeSegments(n,e){return Ae(this,null,function*(){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[_e])throw D2(`${n.redirectTo}`);r=r.children[_e]}})}applyRedirectCommands(n,e,i,r,o){return Ae(this,null,function*(){let s=yield E2(e,r,o);if(s instanceof kn)throw new bl(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,i);if(s[0]==="/")throw new bl(a);return a})}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new kn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);i[r]=e[a]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),s=Object.create(null);return Object.entries(e.children).forEach(([a,c])=>{s[a]=this.createSegmentGroup(n,c,i,r)}),new Ue(o,s)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new D(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function E2(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return qf(ts(Et(e,()=>i(n))))}function I2(t,n){return t.providers&&!t._injector&&(t._injector=Zs(t.providers,n,`Route: ${t.path}`)),t._injector??n}function ai(t){return t.outlet||_e}function N2(t,n){let e=t.filter(i=>ai(i)===n);return e.push(...t.filter(i=>ai(i)!==n)),e}var o_={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function IE(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function M2(t,n,e,i,r,o,s){let a=NE(t,n,e);if(!a.matched)return Y(a);let c=IE(o(a));return i=I2(n,i),C2(i,n,e,r,c,s).pipe(me(l=>l===!0?a:w({},o_)))}function NE(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?w({},o_):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||Zx)(e,t,n);if(!r)return w({},o_);let o={};Object.entries(r.posParams??{}).forEach(([a,c])=>{o[a]=c.path});let s=r.consumed.length>0?w(w({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function Yx(t,n,e,i,r){return e.length>0&&R2(t,e,i,r)?{segmentGroup:new Ue(n,k2(i,new Ue(e,t.children))),slicedSegments:[]}:e.length===0&&A2(t,e,i)?{segmentGroup:new Ue(t.segments,T2(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new Ue(t.segments,t.children),slicedSegments:e}}function T2(t,n,e,i){let r={};for(let o of e)if(dm(t,n,o)&&!i[ai(o)]){let s=new Ue([],{});r[ai(o)]=s}return w(w({},i),r)}function k2(t,n){let e={};e[_e]=n;for(let i of t)if(i.path===""&&ai(i)!==_e){let r=new Ue([],{});e[ai(i)]=r}return e}function R2(t,n,e,i){return e.some(r=>!dm(t,n,r)||!(ai(r)!==_e)?!1:!(i!==void 0&&ai(r)===i))}function A2(t,n,e){return e.some(i=>dm(t,n,i))}function dm(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function O2(t,n,e){return n.length===0&&!t.children[e]}var s_=class{};function F2(t,n,e,i,r,o,s,a){return Ae(this,null,function*(){return new a_(t,n,e,i,r,s,o,a).recognize()})}var P2=31,a_=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,s,a,c){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=c,this.applyRedirects=new r_(this.urlSerializer,this.urlTree)}noMatchError(n){return new D(4002,`'${n.segmentGroup}'`)}recognize(){return Ae(this,null,function*(){let n=Yx(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=yield this.match(n),r=new Tn(i,e),o=new yl("",r),s=lE(i,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}})}match(n){return Ae(this,null,function*(){let e=new pa([],Object.freeze({}),Object.freeze(w({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),_e,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,n,_e,e),rootSnapshot:e}}catch(i){if(i instanceof bl)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof lr?this.noMatchError(i):i}})}processSegmentGroup(n,e,i,r,o){return Ae(this,null,function*(){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let s=yield this.processSegment(n,e,i,i.segments,r,!0,o);return s instanceof Tn?[s]:[]})}processChildren(n,e,i,r){return Ae(this,null,function*(){let o=[];for(let c of Object.keys(i.children))c==="primary"?o.unshift(c):o.push(c);let s=[];for(let c of o){let l=i.children[c],d=N2(e,c),f=yield this.processSegmentGroup(n,d,l,c,r);s.push(...f)}let a=ME(s);return L2(a),a})}processSegment(n,e,i,r,o,s,a){return Ae(this,null,function*(){for(let c of e)try{return yield this.processSegmentAgainstRoute(c._injector??n,e,c,i,r,o,s,a)}catch(l){if(l instanceof lr||CE(l))continue;throw l}if(O2(i,r,o))return new s_;throw new lr(i)})}processSegmentAgainstRoute(n,e,i,r,o,s,a,c){return Ae(this,null,function*(){if(ai(i)!==s&&(s===_e||!dm(r,o,i)))throw new lr(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,s,c);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,s,c);throw new lr(r)})}expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,s,a){return Ae(this,null,function*(){let{matched:c,parameters:l,consumedSegments:d,positionalParamSegments:f,remainingSegments:m}=NE(e,r,o);if(!c)throw new lr(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>P2&&(this.allowRedirects=!1));let h=this.createSnapshot(n,r,o,l,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let v=yield this.applyRedirects.applyRedirectCommands(d,r.redirectTo,f,IE(h),n),C=yield this.applyRedirects.lineralizeSegments(r,v);return this.processSegment(n,i,e,C.concat(m),s,!1,a)})}createSnapshot(n,e,i,r,o){let s=new pa(i,r,Object.freeze(w({},this.urlTree.queryParams)),this.urlTree.fragment,V2(e),ai(e),e.component??e._loadedComponent??null,e,j2(e),n),a=l_(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}matchSegmentAgainstRoute(n,e,i,r,o,s){return Ae(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=ie=>this.createSnapshot(n,i,ie.consumedSegments,ie.parameters,s),c=yield qf(M2(e,i,r,n,this.urlSerializer,a,this.abortSignal));if(i.path==="**"&&(e.children={}),!c?.matched)throw new lr(e);n=i._injector??n;let{routes:l}=yield this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:f,consumedSegments:m,remainingSegments:h}=c,v=this.createSnapshot(n,i,m,f,s),{segmentGroup:C,slicedSegments:E}=Yx(e,m,h,l,o);if(E.length===0&&C.hasChildren()){let ie=yield this.processChildren(d,l,C,v);return new Tn(v,ie)}if(l.length===0&&E.length===0)return new Tn(v,[]);let M=ai(i)===o,O=yield this.processSegment(d,l,C,E,M?_e:o,!0,v);return new Tn(v,O instanceof Tn?[O]:[])})}getChildConfig(n,e,i){return Ae(this,null,function*(){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield qf(w2(n,e,i,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw x2(e)}return{routes:[],injector:n}})}};function L2(t){t.sort((n,e)=>n.value.outlet===_e?-1:e.value.outlet===_e?1:n.value.outlet.localeCompare(e.value.outlet))}function B2(t){let n=t.value.routeConfig;return n&&n.path===""}function ME(t){let n=[],e=new Set;for(let i of t){if(!B2(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=ME(i.children);n.push(new Tn(i.value,r))}return n.filter(i=>!e.has(i))}function V2(t){return t.data||{}}function j2(t){return t.resolve||{}}function U2(t,n,e,i,r,o,s){return Vt(a=>Ae(null,null,function*(){let{state:c,tree:l}=yield F2(t,n,e,i,a.extractedUrl,r,o,s);return te(w({},a),{targetSnapshot:c,urlAfterRedirects:l})}))}function H2(t){return Vt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return Y(n);let r=new Set(i.map(a=>a.route)),o=new Set;for(let a of r)if(!o.has(a))for(let c of TE(a))o.add(c);let s=0;return Ye(o).pipe(Tr(a=>r.has(a)?z2(a,e,t):(a.data=l_(a,a.parent,t).resolve,Y(void 0))),Lt(()=>s++),Ud(1),Vt(a=>s===o.size?Y(n):ut))})}function TE(t){let n=t.children.map(e=>TE(e)).flat();return[t,...n]}function z2(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!vE(i)&&(r[Sl]=i.title),sc(()=>(t.data=l_(t,t.parent,e).resolve,$2(r,t,n).pipe(me(o=>(t._resolvedData=o,t.data=w(w({},t.data),o),null)))))}function $2(t,n,e){let i=Ky(t);if(i.length===0)return Y({});let r={};return Ye(i).pipe(Vt(o=>G2(t[o],n,e).pipe(Qi(),Lt(s=>{if(s instanceof ga)throw am(new dr,s);r[o]=s}))),Ud(1),me(()=>r),Mr(o=>CE(o)?ut:oc(o)))}function G2(t,n,e){let i=n._environmentInjector,r=ya(t,i),o=r.resolve?r.resolve(n,e):Et(i,()=>r(n,e));return ts(o)}var kE=new S("");function c_(t){return Je(n=>{let e=t(n);return e?Ye(e).pipe(me(()=>n)):Y(n)})}var m_=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===_e);return i}getResolvedTitleForRoute(e){return e.data[Sl]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:()=>u(RE)})}return t})(),RE=(()=>{class t extends m_{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(R(zx))};static \u0275prov=G({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Kr=new S("",{factory:()=>({})}),_a=new S(""),um=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(ty);loadComponent(e,i){return Ae(this,null,function*(){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=Ae(this,null,function*(){try{let o=yield Jx(Et(e,()=>i.loadComponent())),s=yield OE(fy(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=s,s}finally{this.componentLoaders.delete(i)}});return this.componentLoaders.set(i,r),r})}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=Ae(this,null,function*(){try{let o=yield AE(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}});return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();function AE(t,n,e,i){return Ae(this,null,function*(){let r=yield Jx(Et(e,()=>t.loadChildren())),o=yield OE(fy(r)),s;o instanceof of||Array.isArray(o)?s=o:s=yield n.compileModuleAsync(o),i&&i(t);let a,c,l=!1,d;return Array.isArray(s)?(c=s,l=!0):(a=s.create(e).injector,d=s,c=a.get(_a,[],{optional:!0,self:!0}).flat()),{routes:c.map(f_),injector:a,factory:d}})}function OE(t){return Ae(this,null,function*(){return t})}var fm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:()=>u(q2)})}return t})(),q2=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})(),h_=new S(""),p_=new S("");function FE(t,n,e){let i=t.get(p_),r=t.get(ne);if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(l=>setTimeout(l));let o,s=new Promise(l=>{o=l}),a=r.startViewTransition(()=>(o(),W2(t)));a.updateCallbackDone.catch(l=>{}),a.ready.catch(l=>{}),a.finished.catch(l=>{});let{onViewTransitionCreated:c}=i;return c&&Et(t,()=>c({transition:a,from:n,to:e})),s}function W2(t){return new Promise(n=>{Ht({read:()=>setTimeout(n)},{injector:t})})}var K2=()=>{},g_=new S(""),mm=(()=>{class t{currentNavigation=W(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=W(null);events=new I;transitionAbortWithErrorSubject=new I;configLoader=u(um);environmentInjector=u(ze);destroyRef=u(nt);urlSerializer=u(Wr);rootContexts=u(ns);location=u(Ai);inputBindingEnabled=u(Cl,{optional:!0})!==null;titleStrategy=u(m_);options=u(Kr,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||XL;urlHandlingStrategy=u(fm);createViewTransition=u(h_,{optional:!0});navigationErrorHandler=u(g_,{optional:!0});routerResourcesFeature=u(kE,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Y(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Jf(r)),i=r=>this.events.next(new em(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;xe(()=>{this.transitions?.next(te(w({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new bt(null),this.transitions.pipe(Te(i=>i!==null),Je(i=>{let r=!0,o=!1,s=new AbortController,a=()=>!o&&this.currentTransition?.id===i.id;return Y(i).pipe(Je(c=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",en.SupersededByNewNavigation),ut;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,targetBrowserUrl:typeof c.extras.browserUrl=="string"?this.urlSerializer.parse(c.extras.browserUrl):c.extras.browserUrl,trigger:c.source,extras:c.extras,previousNavigation:l?te(w({},l),{previousNavigation:null}):null,abort:()=>s.abort(),routesRecognizeHandler:c.routesRecognizeHandler,beforeActivateHandler:c.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=c.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&f!=="reload")return this.events.next(new Bi(c.id,this.urlSerializer.serialize(c.rawUrl),"",ua.IgnoredSameUrlNavigation)),c.resolve(!1),ut;if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return Y(c).pipe(Je(m=>(this.events.next(new qr(m.id,this.urlSerializer.serialize(m.extractedUrl),m.source,m.restoredState)),m.id!==this.navigationId?ut:Promise.resolve(m))),U2(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,s.signal),Lt(m=>{i.targetSnapshot=m.targetSnapshot,i.urlAfterRedirects=m.urlAfterRedirects,this.currentNavigation.update(h=>(h.finalUrl=m.urlAfterRedirects,h)),this.events.next(new gl)}),Je(m=>Ye(i.routesRecognizeHandler.deferredHandle??Y(void 0)).pipe(me(()=>m))),Lt(()=>{let m=new pl(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(m)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:m,extractedUrl:h,source:v,restoredState:C,extras:E}=c,M=new qr(m,this.urlSerializer.serialize(h),v,C);this.events.next(M);let O=pE(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=te(w({},c),{targetSnapshot:O,urlAfterRedirects:h,extras:te(w({},E),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ie=>(ie.finalUrl=h,ie)),Y(i)}else return this.events.next(new Bi(c.id,this.urlSerializer.serialize(c.extractedUrl),"",ua.IgnoredByUrlHandlingStrategy)),c.resolve(!1),ut}),me(c=>{let l=new Yf(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);return this.events.next(l),this.currentTransition=i=te(w({},c),{guards:i2(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),i}),h2(c=>this.events.next(c)),Je(c=>{if(i.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!="boolean")throw am(this.urlSerializer,c.guardsResult);let l=new Qf(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);if(this.events.next(l),!a())return ut;if(!c.guardsResult)return this.cancelNavigationTransition(c,"",en.GuardRejected),ut;if(c.guards.canActivateChecks.length===0)return Y(c);let d=new Zf(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);if(this.events.next(d),!a())return ut;let f=!1;return Y(c).pipe(H2(this.paramsInheritanceStrategy),Lt({next:()=>{f=!0;let m=new Xf(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(m)},complete:()=>{f||this.cancelNavigationTransition(c,"",en.NoDataFromResolver)}}))}),c_(c=>{let l=f=>{let m=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let h=f._environmentInjector;m.push(this.configLoader.loadComponent(h,f.routeConfig).then(v=>{f.component=v}))}for(let h of f.children)m.push(...l(h));return m},d=l(c.targetSnapshot.root);return d.length===0?Y(c):Ye(Promise.all(d).then(()=>c))}),Je(c=>{let{newlyCreatedRoutes:l,state:d}=JL(e.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);return this.currentTransition=i=c=te(w({},c),{targetRouterState:d,newlyCreatedRoutes:l}),this.currentNavigation.update(f=>(f.targetRouterState=d,f)),Y(c)}),this.routerResourcesFeature?.setupAndRunResources(s.signal)??(c=>c),c_(()=>this.afterPreactivation()),Je(()=>{let{currentSnapshot:c,targetSnapshot:l}=i,d=this.createViewTransition?.(this.environmentInjector,c.root,l.root);return d?Ye(d).pipe(me(()=>i)):Y(i)}),St(1),Je(c=>{r=!1,this.events.next(new ma);let l=i.beforeActivateHandler.deferredHandle;return l?Ye(l.then(()=>c)):Y(c)}),Lt(c=>{new i_(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),c.newlyCreatedRoutes?.clear(),a()&&(PE(c.targetRouterState),o=!0,this.currentNavigation.update(l=>(l.abort=K2,l)),this.lastSuccessfulNavigation.set(xe(this.currentNavigation)),this.events.next(new $n(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0))}),Ve(DE(s.signal).pipe(Te(()=>!o&&r),Lt(()=>{this.cancelNavigationTransition(i,s.signal.reason+"",en.Aborted)}))),Lt({complete:()=>{o=!0}}),Ve(this.transitionAbortWithErrorSubject.pipe(Lt(c=>{throw c}))),kr(()=>{s.abort(),o||this.cancelNavigationTransition(i,"",en.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Mr(c=>{if(o=!0,Qx(i),this.destroyed)return i.resolve(!1),ut;if(wE(c))this.events.next(new zn(i.id,this.urlSerializer.serialize(i.extractedUrl),c.message,c.cancellationCode)),n2(c)?this.events.next(new ha(c.url,c.navigationBehaviorOptions)):i.resolve(!1);else{let l=new es(i.id,this.urlSerializer.serialize(i.extractedUrl),c,i.targetSnapshot??void 0);try{let d=Et(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(d instanceof ga){let{message:f,cancellationCode:m}=am(this.urlSerializer,d);this.events.next(new zn(i.id,this.urlSerializer.serialize(i.extractedUrl),f,m)),this.events.next(new ha(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(l),c}catch(d){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(d)}}return ut}))}))}cancelNavigationTransition(e,i,r){Qx(e);let o=new zn(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=xe(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();function Y2(t){return t!==la}function Qx(t){for(let n of t.newlyCreatedRoutes??[])n._localInjector?.destroy(),n._localInjector=void 0;PE(t.targetRouterState)}function PE(t){if(!t)return;let n=e=>{e.value.pending?.set(!1),e.children.forEach(n)};n(t._root)}var LE=new S("");var BE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:()=>u(Q2)})}return t})(),lm=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},Q2=(()=>{class t extends lm{static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})(),hm=(()=>{class t{urlSerializer=u(Wr);options=u(Kr,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(Ai);urlHandlingStrategy=u(fm);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new kn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,s=r??o;return s instanceof kn?this.urlSerializer.serialize(s):s}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=pE(null,u(ze));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:()=>u(Z2)})}return t})(),Z2=(()=>{class t extends hm{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof qr?this.updateStateMemento():e instanceof Bi?this.commitTransition(i):e instanceof pl?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof ma?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof zn&&!hE(e)?this.restoreHistory(i):e instanceof es?this.restoreHistory(i,!0):e instanceof $n&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:s,state:a}=r;if(this.location.isCurrentPathEqualTo(e)||s){let c=this.browserPageId,l=w(w({},a),this.generateNgRouterState(o,c,i));this.location.replaceState(e,"",l)}else{let c=w(w({},a),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",c)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?w({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):w({navigationId:e},this.routerUrlState(r))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();function pm(t,n){t.events.pipe(Te(e=>e instanceof $n||e instanceof zn||e instanceof es||e instanceof Bi),me(e=>e instanceof $n||e instanceof Bi?0:(e instanceof zn?e.code===en.Redirect||e.code===en.SupersededByNewNavigation:!1)?2:1),Te(e=>e!==2),St(1)).subscribe(()=>{n()})}var Vi=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(af);stateManager=u(hm);options=u(Kr,{optional:!0})||{};pendingTasks=u(Di);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(mm);urlSerializer=u(Wr);location=u(Ai);urlHandlingStrategy=u(fm);injector=u(ze);_events=new I;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(BE);injectorCleanup=u(LE,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(_a,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(Cl,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new pe;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=xe(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof zn&&i.code!==en.Redirect&&i.code!==en.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof $n)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof ha){let s=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=w({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Y2(r.source)},s);this.scheduleNavigation(a,la,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}QL(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),la,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let s=r?.navigationId?r:null,a=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=te(w({},o),{browserUrl:e})),r){let l=w({},r);delete l.navigationId,delete l.\u0275routerPageId,delete l.\u0275routerUrl,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(a);this.scheduleNavigation(c,i,s,o).catch(l=>{this.disposed||this.injector.get(Vn)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return xe(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(f_),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:s,d=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":d=w(w({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let m=r?r.snapshot:this.routerState.snapshot.root;f=dE(m)}catch(m){(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return uE(f,e,d,l??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=Gr(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,la,null,i)}navigate(e,i={skipLocationChange:!1}){return X2(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(i){return this.console.warn(hn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=w({},tE):i===!1?r=w({},Yy):r=w(w({},Yy),i),Gr(e))return $x(this.currentUrlTree,e,r);let o=this.parseUrl(e);return $x(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,c,l;s?(a=s.resolve,c=s.reject,l=s.promise):l=new Promise((f,m)=>{a=f,c=m});let d=this.pendingTasks.add();return pm(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();function X2(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new D(4008,!1)}var eB=(()=>{class t{router=u(Vi);stateManager=u(hm);fragment=W("");queryParams=W({});path=W("");serializer=u(Wr);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof $n&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new kn(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})(),ba=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=u(new Hn("href"),{optional:!0});reactiveHref=gf(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return xe(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return xe(this._target)}_target=W(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return xe(this._queryParams)}_queryParams=W(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return xe(this._fragment)}_fragment=W(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return xe(this._queryParamsHandling)}_queryParamsHandling=W(void 0);set state(e){this._state.set(e)}get state(){return xe(this._state)}_state=W(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return xe(this._info)}_info=W(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return xe(this._relativeTo)}_relativeTo=W(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return xe(this._preserveFragment)}_preserveFragment=W(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return xe(this._skipLocationChange)}_skipLocationChange=W(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return xe(this._replaceUrl)}_replaceUrl=W(!1);browserUrl=Jt(void 0);isAnchorElement;onChanges=new I;applicationErrorHandler=u(Vn);options=u(Kr,{optional:!0});reactiveRouterState=u(eB);constructor(e,i,r,o,s,a){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=s,this.locationStrategy=a;let c=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=W(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Gr(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,s){let a=this._urlTree();if(a===null||this.isAnchorElement&&(e!==0||i||r||o||s||typeof this.target=="string"&&this.target!="_self"))return!0;let c=this.browserUrl(),l=w({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},c!==void 0&&{browserUrl:c});return this.router.navigateByUrl(a,l)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=Ge(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:Gr(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return xe(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(De(Vi),De(ur),jc("tabindex"),De($e),De(z),De(si))};static \u0275dir=x({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&ve("click",function(s){return r.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),i&2&&ge("href",r.reactiveHref(),vv)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",H],skipLocationChange:[2,"skipLocationChange","skipLocationChange",H],replaceUrl:[2,"replaceUrl","replaceUrl",H],browserUrl:[1,"browserUrl"],routerLink:"routerLink"},features:[Xe]})}return t})();var xl=class{};var VE=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,i,r,o){this.router=e,this.injector=i,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(Te(e=>e instanceof $n),Tr(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,i){let r=[];for(let o of i){o.providers&&!o._injector&&(o._injector=Zs(o.providers,e,""));let s=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(s).injector);let a=o._loadedInjector??s;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(s,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(a,o.children??o._loadedRoutes))}return Ye(r).pipe(Nr())}preloadConfig(e,i){return this.preloadingStrategy.preload(i,()=>{if(e.destroyed)return Y(null);let r;i.loadChildren&&i.canLoad===void 0?r=Ye(this.loader.loadChildren(e,i)):r=Y(null);let o=r.pipe(Vt(s=>s===null?Y(void 0):(i._loadedRoutes=s.routes,i._loadedInjector=s.injector,i._loadedNgModuleFactory=s.factory,this.processRoutes(s.injector??e,s.routes))));if(i.loadComponent&&!i._loadedComponent){let s=this.loader.loadComponent(e,i);return Ye([o,s]).pipe(Nr())}else return o})}static \u0275fac=function(i){return new(i||t)(R(Vi),R(ze),R(xl),R(um))};static \u0275prov=G({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),jE=new S(""),tB=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=la;restoredId=0;store={};isHydrating=u(lv,{optional:!0})??!1;urlSerializer=u(Wr);zone=u(V);viewportScroller=u(Iy);transitions=u(mm);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled",this.isHydrating&&u(Nt).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof qr?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof $n?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Bi&&e.code===ua.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof fa)||e.scrollBehavior==="manual")return;let i={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],i):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,i):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,i){if(this.isHydrating)return;let r=xe(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(()=>Ae(this,null,function*(){yield new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new fa(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,i,r))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){Ko()};static \u0275prov=G({token:t,factory:t.\u0275fac})}return t})();function nB(){return u(Vi).routerState.root}function El(t,n){return{\u0275kind:t,\u0275providers:n}}function iB(){let t=u(he);return n=>{let e=t.get(Nt);if(n!==e.components[0])return;let i=t.get(Vi),r=t.get(UE);t.get(y_)===1&&i.initialNavigation(),t.get($E,null,{optional:!0})?.setUpPreloading(),t.get(jE,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var UE=new S("",{factory:()=>new I}),y_=new S("",{factory:()=>1});function HE(){let t=[{provide:Gu,useValue:!0},{provide:y_,useValue:0},Xs(()=>{let n=u(he);return n.get(_y,Promise.resolve()).then(()=>new Promise(i=>{let r=n.get(Vi),o=n.get(UE);pm(r,()=>{i(!0)}),n.get(mm).afterPreactivation=()=>(i(!0),o.closed?Y(void 0):o),r.initialNavigation()}))})];return El(2,t)}function zE(){let t=[Xs(()=>{u(Vi).setUpLocationChangeListener()}),{provide:y_,useValue:2}];return El(3,t)}var $E=new S("");function GE(t){return El(0,[{provide:$E,useExisting:VE},{provide:xl,useExisting:t}])}function qE(t={}){return El(8,[{provide:Cl,useFactory:()=>new _E(t)}])}function WE(t){In("NgRouterViewTransitions");let n=[{provide:h_,useValue:FE},{provide:p_,useValue:w({skipNextTransition:!!t?.skipInitialTransition},t)}];return El(9,n)}var KE=[Ai,{provide:Wr,useClass:dr},Vi,ns,{provide:ur,useFactory:nB},um],gm=(()=>{class t{constructor(){}static forRoot(e,i){return{ngModule:t,providers:[KE,[],{provide:_a,multi:!0,useValue:e},[],i?.errorHandler?{provide:g_,useValue:i.errorHandler}:[],{provide:Kr,useValue:i||{}},i?.useHash?oB():sB(),rB(),i?.preloadingStrategy?GE(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?aB(i):[],i?.bindToComponentInputs?qE(typeof i.bindToComponentInputs=="object"?i.bindToComponentInputs:{}).\u0275providers:[],i?.enableViewTransitions?WE().\u0275providers:[],cB()]}}static forChild(e){return{ngModule:t,providers:[{provide:_a,multi:!0,useValue:e}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({})}return t})();function rB(){return{provide:jE,useFactory:()=>{let t=u(Iy),n=u(Kr);return n.scrollOffset&&t.setOffset(n.scrollOffset),new tB(n)}}}function oB(){return{provide:si,useClass:by}}function sB(){return{provide:si,useClass:wf}}function aB(t){return[t.initialNavigation==="disabled"?zE().\u0275providers:[],t.initialNavigation==="enabledBlocking"?HE().\u0275providers:[]]}var v_=new S("");function cB(){return[{provide:v_,useFactory:iB},{provide:Kc,multi:!0,useExisting:v_}]}var nI=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(De($e),De(z))};static \u0275dir=x({type:t})}return t})(),iI=(()=>{class t extends nI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,features:[le]})}return t})(),is=new S("");var lB={provide:is,useExisting:Tt(()=>Zr),multi:!0};function dB(){let t=Mn()?Mn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var uB=new S(""),Zr=(()=>{class t extends nI{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!dB())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(De($e),De(z),De(uB,8))};static \u0275dir=x({type:t,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&ve("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[ye([lB]),le]})}return t})();function S_(t){return t==null||w_(t)===0}function w_(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Xr=new S(""),C_=new S(""),fB=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,cn=class{static min(n){return rI(n)}static max(n){return oI(n)}static required(n){return sI(n)}static requiredTrue(n){return mB(n)}static email(n){return hB(n)}static minLength(n){return pB(n)}static maxLength(n){return gB(n)}static pattern(n){return vB(n)}static nullValidator(n){return ym()}static compose(n){return fI(n)}static composeAsync(n){return mI(n)}};function rI(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function oI(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function sI(t){return S_(t.value)?{required:!0}:null}function mB(t){return t.value===!0?null:{required:!0}}function hB(t){return S_(t.value)||fB.test(t.value)?null:{email:!0}}function pB(t){return n=>{let e=n.value?.length??w_(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function gB(t){return n=>{let e=n.value?.length??w_(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function vB(t){if(!t)return ym;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(S_(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function ym(t){return null}function aI(t){return t!=null}function cI(t){return or(t)?Ye(t):t}function lI(t){let n={};return t.forEach(e=>{n=e!=null?w(w({},n),e):n}),Object.keys(n).length===0?null:n}function dI(t,n){return n.map(e=>e(t))}function yB(t){return!t.validate}function uI(t){return t.map(n=>yB(n)?n:e=>n.validate(e))}function fI(t){if(!t)return null;let n=t.filter(aI);return n.length==0?null:function(e){return lI(dI(e,n))}}function D_(t){return t!=null?fI(uI(t)):null}function mI(t){if(!t)return null;let n=t.filter(aI);return n.length==0?null:function(e){let i=dI(e,n).map(cI);return ac(i).pipe(me(lI))}}function x_(t){return t!=null?mI(uI(t)):null}function QE(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function hI(t){return t._rawValidators}function pI(t){return t._rawAsyncValidators}function __(t){return t?Array.isArray(t)?t:[t]:[]}function _m(t,n){return Array.isArray(t)?t.includes(n):t===n}function ZE(t,n){let e=__(n);return __(t).forEach(r=>{_m(e,r)||e.push(r)}),e}function XE(t,n){return __(n).filter(e=>!_m(t,e))}var bm=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=D_(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=x_(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Yr=class extends bm{name;get formDirective(){return null}get path(){return null}};var Il="VALID",vm="INVALID",Sa="PENDING",Nl="DISABLED",Qr=class{},Sm=class extends Qr{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Tl=class extends Qr{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},kl=class extends Qr{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},wa=class extends Qr{status;source;constructor(n,e){super(),this.status=n,this.source=e}},wm=class extends Qr{source;constructor(n){super(),this.source=n}},Ca=class extends Qr{source;constructor(n){super(),this.source=n}};function gI(t){return(Im(t)?t.validators:t)||null}function _B(t){return Array.isArray(t)?D_(t):t||null}function vI(t,n){return(Im(n)?n.asyncValidators:t)||null}function bB(t){return Array.isArray(t)?x_(t):t||null}function Im(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function SB(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new D(1e3,"");if(!yI(i,e))throw new D(1001,"")}function wB(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new D(-1002,"")})}var Cm=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=W(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return xe(this.statusReactive)}set status(n){xe(()=>this.statusReactive.set(n))}_status=Ge(()=>this.statusReactive());statusReactive=W(void 0);get valid(){return this.status===Il}get invalid(){return this.status===vm}get pending(){return this.status===Sa}get disabled(){return this.status===Nl}get enabled(){return this.status!==Nl}errors;get pristine(){return xe(this.pristineReactive)}set pristine(n){xe(()=>this.pristineReactive.set(n))}_pristine=Ge(()=>this.pristineReactive());pristineReactive=W(!0);get dirty(){return!this.pristine}get touched(){return xe(this.touchedReactive)}set touched(n){xe(()=>this.touchedReactive.set(n))}_touched=Ge(()=>this.touchedReactive());touchedReactive=W(!1);get untouched(){return!this.touched}_events=new I;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(ZE(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(ZE(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(XE(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(XE(n,this._rawAsyncValidators))}hasValidator(n){return _m(this._rawValidators,n)}hasAsyncValidator(n){return _m(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(te(w({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new kl(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new kl(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(te(w({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Tl(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new Tl(!0,i))}markAsPending(n={}){this.status=Sa;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new wa(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(te(w({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Nl,this.errors=null,this._forEachChild(r=>{r.disable(te(w({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Sm(this.value,i)),this._events.next(new wa(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(te(w({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Il,this._forEachChild(i=>{i.enable(te(w({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(te(w({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Il||this.status===Sa)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Sm(this.value,e)),this._events.next(new wa(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(te(w({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Nl:Il}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Sa,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=cI(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new wa(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new se,this.statusChanges=new se}_calculateStatus(){return this._allControlsDisabled()?Nl:this.errors?vm:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Sa)?Sa:this._anyControlsHaveStatus(vm)?vm:Il}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new Tl(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new kl(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Im(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=_B(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=bB(this._rawAsyncValidators)}_updateHasRequiredValidator(){xe(()=>this._hasRequired.set(this.hasValidator(cn.required)))}};function yI(t,n){return Object.hasOwn(t,n)}function CB(t){return t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"}function DB(t,n,e,i){switch(e){case"name":t.setAttribute(n,e,i);break;case"disabled":case"readonly":case"required":i?t.setAttribute(n,e,""):t.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":i!==void 0?t.setAttribute(n,e,i.toString()):t.removeAttribute(n,e);break}}var b_=class{kind;context;control;message;constructor({kind:n,context:e,control:i}){this.kind=n,this.context=e,this.control=i}};function _I(t){return typeof t=="number"?t:parseFloat(t)}var E_=(()=>{class t{_validator=ym;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):ym,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,features:[Xe]})}return t})(),xB={provide:Xr,useExisting:Tt(()=>I_),multi:!0},I_=(()=>{class t extends E_{max;inputName="max";normalizeInput=e=>_I(e);createValidator=e=>oI(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&ge("max",r._enabled?r.max:null)},inputs:{max:"max"},standalone:!1,features:[ye([xB]),le]})}return t})(),EB={provide:Xr,useExisting:Tt(()=>Rl),multi:!0},Rl=(()=>{class t extends E_{min;inputName="min";normalizeInput=e=>_I(e);createValidator=e=>rI(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&ge("min",r._enabled?r.min:null)},inputs:{min:"min"},standalone:!1,features:[ye([EB]),le]})}return t})(),IB={provide:Xr,useExisting:Tt(()=>bI),multi:!0};var bI=(()=>{class t extends E_{required;inputName="required";normalizeInput=H;createValidator=e=>sI;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,r){i&2&&ge("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[ye([IB]),le]})}return t})();var NB=new S(""),N_=new S("",{factory:()=>M_}),M_="always";function MB(t,n){return[...n.path,t]}function TB(t,n,e=M_){T_(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),RB(t,n),OB(t,n),AB(t,n),kB(t,n)}function JE(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),xm(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Dm(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function kB(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function T_(t,n){let e=hI(t);n.validator!==null?t.setValidators(QE(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=pI(t);n.asyncValidator!==null?t.setAsyncValidators(QE(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Dm(n._rawValidators,r),Dm(n._rawAsyncValidators,r)}function xm(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=hI(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=pI(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return Dm(n._rawValidators,i),Dm(n._rawAsyncValidators,i),e}function RB(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&SI(t,n)})}function AB(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&SI(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function SI(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function OB(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function wI(t,n){t==null,T_(t,n)}function FB(t,n){return xm(t,n)}function PB(t,n){if(!Object.hasOwn(t,"model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function LB(t){return Object.getPrototypeOf(t.constructor)===iI}function CI(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function BB(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===Zr?e=o:LB(o)?i=o:r=o}),r||i||e||null}function VB(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var jB={provide:NB,useFactory:()=>{let t=u(fr,{self:!0});return{setParseErrors:n=>{t.setParseErrorSource(n)},set onReset(n){t.onReset=n}}}},fr=class extends bm{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(n){this.userOnReset=n,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof Ca&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=BB(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(n,e,i){super(),this.injector=n,this.renderer=e,this.rawValueAccessors=i,this.injector?.get(nt)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let n=this.injector?.get(et);if(!this.control||!n)return;let e=n.markForCheck.bind(n);this.subscription=new pe,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(i=>{i instanceof Ca&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(n){!n.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!n.customControl||(this.isCustomControlBased=!0,n.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),n.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=CB(n.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof bI))}ngControlUpdate(n,e){if(!this.isCustomControlBased)return;let i=this.control,r=this.customControlBindings;Object.is(r.value,i.value)||(r.value=i.value,n.setCustomControlModelInput(i.value)),this.bindControlProperty(n,r,"touched",i.touched),this.bindControlProperty(n,r,"dirty",i.dirty),this.bindControlProperty(n,r,"valid",i.valid),this.bindControlProperty(n,r,"invalid",i.invalid),this.bindControlProperty(n,r,"pending",i.pending),this.bindControlProperty(n,r,"disabled",i.disabled),this.shouldBindRequired&&this.bindControlProperty(n,r,"required",this.isRequired);let o=i.errors;if(r.errors!==o){r.errors=o;let s=this._convertErrors(o);n.setInputOnDirectives("errors",s)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(n,e,i,r){if(e[i]===r)return;e[i]=r;let o=n.setInputOnDirectives(i,r);this.isNativeFormElement&&!o&&(i==="disabled"||i==="required")&&this.renderer&&DB(this.renderer,n.nativeElement,i,r)}_convertErrors(n){if(n===null)return[];let e=this.control;return Object.entries(n).map(([i,r])=>new b_({context:r,kind:i,control:e}))}setParseErrorSource(n){if(n===void 0)return;let e=null,i=Ge(()=>{let r=n();return r.length===0?null:r.reduce((o,s)=>(o[s.kind]=s,o),{})});this.parseErrorsValidator=(()=>e).bind(this),Zt(()=>{e=i(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(n){this.parseErrorsValidator&&(n?.removeValidators(this.parseErrorsValidator),n?.updateValueAndValidity({emitEvent:!1}))}},Em=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Da=(()=>{class t extends Em{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(De(fr,2))};static \u0275dir=x({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&ee("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[le]})}return t})(),xa=(()=>{class t extends Em{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(De(Yr,10))};static \u0275dir=x({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&ee("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[le]})}return t})(),ji=class extends Cm{constructor(n,e,i){super(gI(e),vI(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){let i=this._find(n);return i||(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){let i=this._find(n);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){let r=this._find(n);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this._find(n)?.enabled===!0}setValue(n,e={}){xe(()=>{wB(this,!0,n),Object.keys(n).forEach(i=>{SB(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this._find(i);r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,te(w({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ca(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return yI(this.controls,n)?this.controls[n]:null}};var UB={provide:Yr,useExisting:Tt(()=>Nm)},Ml=Promise.resolve(),Nm=(()=>{class t extends Yr{callSetDisabledState;get submitted(){return xe(this.submittedReactive)}_submitted=Ge(()=>this.submittedReactive());submittedReactive=W(!1);_directives=new Set;form;ngSubmit=new se;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new ji({},D_(e),x_(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Ml.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Ml.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Ml.then(()=>{let i=this._findContainer(e.path),r=new ji({});wI(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Ml.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Ml.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),CI(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new wm(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(De(Xr,10),De(C_,10),De(N_,8))};static \u0275dir=x({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&ve("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ye([UB]),le]})}return t})();function eI(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function tI(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Ui=class extends Cm{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(gI(e),vI(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Im(e)&&(e.nonNullable||e.initialValueIsDefault)&&(tI(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){xe(()=>{this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Ca(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){eI(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){eI(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){tI(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var HB=t=>t instanceof Ui;var zB=(()=>{class t extends Yr{callSetDisabledState;get submitted(){return xe(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Ge(()=>this._submittedReactive());_submittedReactive=W(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),Object.hasOwn(e,"form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(xm(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return e._setupWithForm(i,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){JE(e.control||null,e,!1),VB(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,CI(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new wm(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(JE(i||null,e),HB(r)&&e._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);wI(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&FB(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){T_(this.form,this),this._oldForm&&xm(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(De(Xr,10),De(C_,10),De(N_,8))};static \u0275dir=x({type:t,features:[le,Xe]})}return t})(),$B={provide:Yr,useExisting:Tt(()=>Hi)},Hi=(()=>{class t extends zB{form=null;ngSubmit=new se;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&ve("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ye([$B]),le]})}return t})();var Ea=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})(),GB={provide:is,useExisting:Tt(()=>Al),multi:!0},Al=(()=>{class t extends iI{writeValue(e){let i=e??"";this.setProperty("value",i)}registerOnChange(e){this.onChange=i=>{e(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["input","type","number","formControlName","",3,"ngNoCva",""],["input","type","number","formControl","",3,"ngNoCva",""],["input","type","number","ngModel","",3,"ngNoCva",""]],hostBindings:function(i,r){i&1&&ve("input",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[ye([GB]),le]})}return t})();var DI=new S("");var qB={provide:fr,useExisting:Tt(()=>rs)},rs=(()=>{class t extends fr{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new se;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,s,a,c){super(c,a,o),this._ngModelWarningConfig=s,this._parent=e,this._setValidators(i),this._setAsyncValidators(r)}_setupWithForm(e,i){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,TB(e,this,i))}ngOnChanges(e){this._added||this._setUpControl(),PB(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return MB(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(e,!0))}static \u0275fac=function(i){return new(i||t)(De(Yr,13),De(Xr,10),De(C_,10),De(is,10),De(DI,8),De($e,8),De(he,8))};static \u0275dir=x({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[ye([qB,jB]),le,Xe,Kv(null)]})}return t})();var WB=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({})}return t})();var Ia=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:DI,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:N_,useValue:e.callSetDisabledState??M_}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({imports:[WB]})}return t})();var T=(function(t){return t[t.Blue=0]="Blue",t[t.Red=1]="Red",t[t.Green=2]="Green",t})(T||{}),L=(function(t){return t[t.HAZARDOUS=0]="HAZARDOUS",t[t.INDUSTRIAL=1]="INDUSTRIAL",t[t.CULTURAL=2]="CULTURAL",t})(L||{}),Le=(function(t){return t[t.BIOTIC=0]="BIOTIC",t[t.WARFARE=1]="WARFARE",t[t.PROPULSION=2]="PROPULSION",t[t.CYBERNETIC=3]="CYBERNETIC",t})(Le||{}),ct=(function(t){return t[t.NEBULA=0]="NEBULA",t[t.GRAVITY_RIFT=1]="GRAVITY_RIFT",t[t.ASTEROID_FIELD=2]="ASTEROID_FIELD",t[t.SUPERNOVA=3]="SUPERNOVA",t[t.ENTROPIC_SCAR=4]="ENTROPIC_SCAR",t})(ct||{}),ln=(function(t){return t[t.ALPHA=0]="ALPHA",t[t.BETA=1]="BETA",t[t.GAMMA=2]="GAMMA",t[t.DELTA=3]="DELTA",t})(ln||{});var g=(function(t){return t[t.red=0]="red",t[t.green=1]="green",t[t.yellow=2]="yellow",t[t.blue=3]="blue",t[t.black=4]="black",t})(g||{});var Me=(function(t){return t[t.Low=0]="Low",t[t.Moderate=1]="Moderate",t[t.High=2]="High",t})(Me||{});var p=(function(t){return t[t.PoK=0]="PoK",t[t.Base=1]="Base",t[t.TE=2]="TE",t})(p||{}),zi={factions:[{id:1,name:"Arborec",complexity:Me.High,startingtech:[37],edition:p.Base,tech:[{id:1,name:"Letani Warrior II",requirements:{[g.green]:2},description:"<ul><li>After this unit is destroyed, roll 1 die. If the result is 6 or greater, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your HS.</li><li>Production 2</li><Ul>",provides:g.black,edition:p.Base},{id:2,name:"Bioplasmosis",requirements:{[g.green]:2},description:"At the end of the status phase, you may remove any number of infantry from planets you control and place them on 1 or more planets you control in the same or adjacent systems",provides:g.green,edition:p.Base}]},{id:2,name:"Barony of Letnev",complexity:Me.Low,startingtech:[50,38],edition:p.Base,tech:[{id:3,name:"L4 Disruptors",requirements:{[g.yellow]:1},edition:p.Base,description:"During an invasion combat, units cannot use Space Canon against your units.",provides:g.yellow},{id:4,name:"Non-Euclidean Shielding",requirements:{[g.red]:2},edition:p.Base,description:"When 1 of your units uses Sustain Damage, cancel 2 hits.",provides:g.red}]},{id:3,name:"Clan of Saar",complexity:Me.Moderate,startingtech:[50],edition:p.Base,tech:[{id:5,name:"Floating Factory II",requirements:{[g.yellow]:2},edition:p.Base,provides:g.black,description:"<ul><li>Saar Space Dock (Move 2, Capacity 5)</li><li>This unit is placed in a space area instead of on a planet. This unit can move and retreat as if it were a ship. If this unit is blockaded, it is destroyed.</li><li>Production 7.</li></ul>"},{id:6,name:"Chaos Mapping",requirements:{[g.blue]:1},edition:p.Base,provides:g.blue,description:"<ul><li>Other players cannot activate asteroid fields that contain 1 or more of your ships.</li><li>At the start of your turn during the action phase, you may produce 1 unit in a system that contains at least 1 of your units that has Production.</li></ul>"}]},{id:4,name:"Embers of Muat",complexity:Me.High,startingtech:[38],edition:p.Base,tech:[{id:7,name:"Prototype War Sun II",edition:p.Base,requirements:{[g.yellow]:1,[g.red]:3},provides:g.black,description:"<ul><li>Muuat War Sun (Cost 10; Combat 3[x3]; Move 3; Capacity 6)</li><li>Other player's units in this system lose Planetary Shield.</li><li>Sustain Damage; and, Bombardment 3[x3].</li></ul>"},{id:8,name:"Magmus Reactor \u03A9",requirements:{[g.red]:2},provides:g.red,edition:p.Base,description:"<ul><li>Your ships can move into superovas.</li><li>Each supernova that contains 1 or more of your units gains the PRODUCTION 5 ability as if it were 1 of your units.</li>"}]},{id:5,name:"Emirates of Hacan",complexity:Me.Low,startingtech:[50,42],edition:p.Base,tech:[{id:9,name:"Production Centers",edition:p.Base,requirements:{[g.green]:2},provides:g.green,description:"ACTION: Exhaust this card and spend 1 CT from your Strategy Pool to gain 4 TGs and choose 1 other player; that player gains 2 TGs."},{id:10,name:"Quantum Datahub Node",edition:p.Base,requirements:{[g.yellow]:3},provides:g.yellow,description:"At the end of the Strategy Phase, you may spend 1 CT from your Strategy Pool and give another player 3 of your TGs. If you do, give 1 of your SCs to that player and take 1 of his SCs."}]},{id:6,name:"Federation of Sol",complexity:Me.Low,startingtech:[46,50],edition:p.Base,tech:[{id:11,name:"Spec Ops II",requirements:{[g.green]:2},provides:g.black,edition:p.Base,description:"<ul><li>Sol Infantry (Cost 1/2; Combat 6)</li><li>After this unit is destroyed, roll 1 die. If the result is 5 or greater, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your HS.</li></ul>"},{id:12,name:"Advanced Carrier II",requirements:{[g.blue]:2},provides:g.black,edition:p.Base,description:"<ul><li>Sol Carrier (Cost 3; Combat 9; Move 2; Capacity 8)</li><li>Sustain Damage.</li></ul>"}]},{id:7,name:"Ghosts of Creuss",complexity:Me.Moderate,startingtech:[49],edition:p.Base,tech:[{id:13,name:"Dimensional Splicer",requirements:{[g.red]:1},provides:g.red,edition:p.Base,description:"At the start of a space combat in a system that contains a wormhole and 1 or more of your ships, you may produce 1 hit and assign it to 1 of your opponent's ships."},{id:14,name:"Wormhole Generator \u03A9",requirements:{[g.blue]:2},provides:g.blue,edition:p.Base,description:"ACTION: Exhaust this card to place or move a Creuss wormhole token into either a system that contains a planet you control or a non-home system that does not contain another player\xB4s ships."}]},{id:8,name:"L1z1x Mindnet",complexity:Me.Low,startingtech:[46,38],edition:p.Base,tech:[{id:15,name:"Super Dreadnought II",requirements:{[g.blue]:2,[g.yellow]:1},edition:p.Base,provides:g.black,description:'<ul><li>L1Z1X Dreadnought (Cost 4; Combat 4; Move 2; Capacity 2)</li><li>This unit cannot be destroyed by "Direct Hit" action cards; Sustain Damage; and, Bombardment 4.</li></ul>'},{id:16,name:"Inheritance Systems",edition:p.Base,requirements:{[g.yellow]:2},provides:g.yellow,description:"You may exhaust this card and spend 2 resources when you research a technology; ignore all of that technology's prerequisites."}]},{id:9,name:"Mentak Coalition",complexity:Me.High,startingtech:[38,42],edition:p.Base,tech:[{id:17,name:"Mirror Computing",requirements:{[g.yellow]:3},edition:p.Base,description:"When you spend TGs, each TG is worth 2 resources or influence.",provides:g.yellow},{id:18,name:"Salvage Operation",edition:p.Base,requirements:{[g.yellow]:2},description:"After you win or lose a space combat, gain 1 TG; if you won the combat, you may also produce 1 ship in that system of any ship type that was destroyed during the combat.",provides:g.yellow}]},{id:10,name:"Naalu Collective",complexity:Me.Moderate,startingtech:[42,46],edition:p.Base,tech:[{id:19,name:"Neuroglaive",requirements:{[g.green]:3},edition:p.Base,provides:g.green,description:"After another player activates a system that contains 1 or more of your ships, that player removes 1 CT from his Fleet Pool and returns it to his reinforcements."},{id:20,name:"Hybrid Crystal Fighter II",requirements:{[g.green]:1,[g.blue]:1},edition:p.Base,provides:g.black,description:"<ul><li>Naalu Fighter (Cost 1/2; Combat 7; Move 2)</li><li>This unit may move without being transported. Each fighter in excess of your ships' capacity counts as 1/2 of a ship against your fleet pool.</li></ul>"}]},{id:11,name:"Nekro Virus",complexity:Me.High,startingtech:[45],edition:p.Base,tech:[{id:21,name:"Valefar Assimilator",requirements:{},provides:g.black,edition:p.Base,description:`When you would gain another player's technology using 1 of your faction abilities, you may place either the "X" or "Y" assimilator token on a faction technology owned by that player instead. While that token is on a technology, the corresponding "X" or "Y" card gains that technology's text. You cannot place an assimilator token on a technology that already has one.`},{id:22,name:"Valefar Assimilator",requirements:{},provides:g.black,edition:p.Base,description:`When you would gain another player's technology using 1 of your faction abilities, you may place either the "X" or "Y" assimilator token on a faction technology owned by that player instead. While that token is on a technology, the corresponding "X" or "Y" card gains that technology's text. You cannot place an assimilator token on a technology that already has one.`}]},{id:12,name:"Sardakk N'orr",complexity:Me.Moderate,startingtech:[],edition:p.Base,tech:[{id:23,name:"Exotrireme II",requirements:{[g.blue]:2,[g.yellow]:1},edition:p.Base,description:`<ul><li>N'orr Dreadnought (Cost 4; Combat 5; Move 2; Capacity 1)</li><li>This unit cannot be destroyed by "Direct Hit" action cards. After a round of space combat, you may destroy this unit to destroy up to 2 ships in this system</li><li>Sustain Damage; and, Bombardment 4[x2].</li></ul>`,provides:g.black},{id:24,name:"Valkyrie Particle Weave",requirements:{[g.red]:2},edition:p.Base,description:"After making combat rolls during a round of ground combat, if your opponent produced 1 or more hits, you produce 1 additional hit.",provides:g.red}]},{id:13,name:"Universities of Jol-Nar",complexity:Me.Low,startingtech:[46,50,38,42],edition:p.Base,tech:[{id:25,name:"Spacial Conduit Network",requirements:{[g.blue]:2},edition:p.Base,description:"You may exhaust this card after you activate a system that contains 1 or more of your units; that system is adjacent to all other systems that contain 1 or more of your units during this activation.",provides:g.blue},{id:26,name:"E-Res Siphons",requirements:{[g.yellow]:2},edition:p.Base,description:"After another player activates a system that contains 1 or more of your ships, gain 4 TGs.",provides:g.yellow}]},{id:14,name:"Winnu",complexity:Me.Moderate,startingtech:[],edition:p.Base,tech:[{id:27,name:"Hegemonic Trade Policy",requirements:{[g.yellow]:2},edition:p.Base,provides:g.yellow,description:"Exhaust this card when 1 or more of your units use Production; swap the resource and influence values of 1 planet you control until the end of your turn."},{id:28,name:"Lazax Gate Folding",requirements:{[g.blue]:2},edition:p.Base,provides:g.blue,description:"<ul><li>During your tactical actions, if you do not control Mecatol Rex, treat its system as if it contains both an alpha and beta wormhole.</li><li>ACTION: If you control Mecatol Rex, exhaust this card to place 1 infantry from your reinforcement on Mecatol Rex.</li></ul>"}]},{id:15,name:"Xxcha Kingdom",complexity:Me.Low,startingtech:[41],edition:p.Base,tech:[{id:29,name:"Nullification Field",requirements:{[g.yellow]:2},edition:p.Base,provides:g.yellow,description:"After another player activates a system that contains 1 or more or your ships, you may exhaust this card and spend 1 CT from your Strategy Pool; immediately end that player's turn."},{id:30,name:"Instinct Training",requirements:{[g.green]:1},edition:p.Base,provides:g.green,description:"You may exhaust this card and spend 1 CT from your Strategy Pool when another player plays an action card; cancel that action card."}]},{id:16,name:"Yin Brotherhood",complexity:Me.Low,startingtech:[42],edition:p.Base,tech:[{id:31,name:"Impulse Core",requirements:{[g.yellow]:2},edition:p.Base,provides:g.yellow,description:"At the start of a space combat, you may destroy 1 of your cruisers or destroyers in the active system to produce 1 hit against your opponent's ships; that hit must be assigned by your opponent to 1 of his non-fighter ships, if able."},{id:32,name:"Yin Spinner",requirements:{[g.green]:2},edition:p.Base,provides:g.green,description:"After you produce units, place up to 2 infantry from your reinforcements on any planet you control or in any space area that contains 1 or more of your ships."}]},{id:17,name:"Yssaril Tribes",complexity:Me.Low,startingtech:[46],edition:p.Base,tech:[{id:33,name:"Transparasteel Plating",requirements:{[g.green]:1},edition:p.Base,provides:g.green,description:"During your turn of the action phase, players that have passed cannot play action cards."},{id:34,name:"Mageon Implants",requirements:{[g.green]:3},edition:p.Base,provides:g.green,description:"ACTION: Exhaust this card to look at another player's hand of action cards. Choose 1 of those cards and add it to your hand."}]},{id:18,name:"Argent Flight",complexity:Me.Low,startingtech:[],edition:p.PoK,tech:[{id:68,name:"Aerie Hololattice",requirements:{[g.yellow]:1},edition:p.PoK,provides:g.yellow,description:"Other players cannot move ships through systems that contain your structures. Each planet that contains 1 or more of your structures gains the PRODUCTION 1 ability as if it were a unit"},{id:80,name:"Strike Wing Alpha II",requirements:{[g.red]:2},edition:p.PoK,provides:g.black,description:"<ul><li>Argent Flight Destroyer (Cost 1; Combat 7; Move 2; Capacity 1)</li><li>Anti-Fighter Barrage 6(x3)</li><li>When this unit uses ANTI-FIGHTER BARRAGE, each result of 9 or 10 also destroys 1 of your opponent's infantry in the space area of the active system</li></ul>"}]},{id:19,name:"Empyrean",complexity:Me.Low,startingtech:[62],edition:p.PoK,tech:[{id:69,name:"Aetherstream",requirements:{[g.blue]:2},edition:p.PoK,provides:g.blue,description:"After you or one of your neighbors activates a system that is adjacent to an anomaly, you may apply +1 to the move value of all of that player's ships during this tactical action"},{id:70,name:"Voidwatch",requirements:{[g.green]:1},edition:p.PoK,provides:g.green,description:"After a player moves ships into a system that contains 1 or more of your units, they must give you 1 promissory note from their hand, if able"}]},{id:20,name:"Mahact Gene-Sorcerers",complexity:Me.High,startingtech:[67,61],edition:p.PoK,tech:[{id:71,name:"Genetic Recombination",requirements:{[g.green]:1},edition:p.PoK,provides:g.green,description:"You may exhaust this card before a player casts votes; that player must cast at least 1 vote for an outcome of your choice or remove 1 token from their fleet pool and return it to their reinforcements"},{id:72,name:"Crimson Legionnaire II",requirements:{[g.green]:2},edition:p.PoK,provides:g.black,description:"<ul><li>Mahact Ground Force (Cost 1x2; Combat 7)</li><li>After this unit is destroyed, gain 1 commodity or convert 1 of your commodities to a trade good. Then, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your home system</li></ul>"}]},{id:21,name:"Naaz-Rokha Alliance",complexity:Me.Low,startingtech:[64,60],edition:p.PoK,tech:[{id:73,name:"Supercharge",requirements:{[g.red]:1},edition:p.PoK,provides:g.red,description:"At the start of a combat round, you may exhaust this card to apply +1 to the result of each of your unit's combat rolls during this combat round"},{id:74,name:"Pre-Fab Arcologies",requirements:{[g.green]:3},edition:p.PoK,provides:g.green,description:"After you explore a planet, ready that planet"}]},{id:22,name:"Nomad",complexity:Me.Low,startingtech:[63],edition:p.PoK,tech:[{id:75,name:"Temporal Command Suite",requirements:{[g.yellow]:1},edition:p.PoK,provides:g.yellow,description:"After any player's agent becomes exhausted, you may exhaust this card to ready that agent; if you ready another player's agent, you may perform a transaction with that player"},{id:76,name:"Memoria II",requirements:{[g.green]:1,[g.blue]:1,[g.yellow]:1},edition:p.PoK,provides:g.black,description:"<ul><li>Nomad Flagship (Cost 8; Combat 5(x2); Move 2; Capacity 6)</li><li>Sustain Damage</li><li>Anti-Fighter Barrage 5(x3)</li><li>You may treat this unit as if it were adjacent to systems that contain one or more of your mechs.</li></ul>"}]},{id:23,name:"Titans of Ul",complexity:Me.Moderate,startingtech:[50,66],edition:p.PoK,tech:[{id:81,name:"Saturn Engine II",requirements:{[g.green]:1,[g.yellow]:1,[g.red]:1},edition:p.PoK,provides:g.black,description:"<ul><li>Titan Cruiser (Cost 2; Combat 6; Move 3; Capacity 2)</li><li>Sustain Damage</li></ul>"},{id:77,name:"Hel Titan II",requirements:{[g.red]:1,[g.yellow]:1},edition:p.PoK,provides:g.black,description:"<ul><li>Titan PDS (Combat 6)</li><li>Planetary Shield</li><li>Space Cannon 5</li><li>Sustain Damage</li><li>Production 1</li><li>This unit is treated as both a structure and a ground force. It cannot be transported.</li><li>You may use this unit's SPACE CANNON against ships that are adjacent to this unit's system.</li></ul>"}]},{id:24,name:"Vuil'Raith Cabal",complexity:Me.High,startingtech:[65],edition:p.PoK,tech:[{id:78,name:"Vortex",requirements:{[g.red]:1},edition:p.PoK,provides:g.red,description:"ACTION: Exhaust this card to choose another player's non-structure unit in a system that is adjacent to 1 or more of your space docks. Capture 1 unit of that type from that player's reinforcements"},{id:79,name:"Dimensional Tear II",requirements:{[g.yellow]:2},edition:p.PoK,provides:g.black,description:"<ul><li>Cabal Space Dock(PRODUCTION 7)</li><li>This system is a gravity rift; your ships do not roll for this gravity rift.</li><li>Place a dimensional tear token beneath this unit as a reminder</li><li>Up to 12 fighters in this system do not count against your ships' capacity.</li></ul>"}]},{id:25,name:"Last Bastion",complexity:Me.Low,startingtech:[],edition:p.TE,tech:[{id:82,name:"Proxima Targeting VI",requirements:{[g.red]:1},provides:g.red,edition:p.TE,description:"<ul><li>Cancel 1 hit produced by BOMBARDMENT rolls made against your ground forces for each of your galvanized units present.</li><li>At the start of a round of ground combat, you may resolve BOMBARDMENT 8 (x3) against your opponents ground forces; if you do, make an identical roll against your own ground </li></ul>"}]},{id:26,name:"Ral Nel Consortium",complexity:Me.Low,startingtech:[],edition:p.TE,tech:[{id:84,name:"Nanomachines",requirements:{[g.red]:1},provides:g.red,edition:p.TE,description:"<ul><li>ACTION: Exhaust this card to place 1 PDS on a planet you control, repair all of your damaged units, or exhaust this card and discard 1 action card to draw 1 action card.</li><li>ACTION: Exhaust this card to repair all of your damaged units.</li><li>ACTION: Exhaust this card and discard 1 action card to draw 1 action card.</li></ul>"}]},{id:27,name:"Deepwrought Scholarate",complexity:Me.Moderate,startingtech:[],edition:p.TE,tech:[{id:85,name:"Radical Advancement",requirements:{[g.green]:1},provides:g.green,edition:p.TE,description:"At the start of the status phase, you may replace one of your non-unit upgrade technologies with a technology of the same color that has exactly 1 more prerequisite."},{id:86,name:"Hydrothermal Mining",requirements:{[g.green]:1},provides:g.green,edition:p.TE,description:"At the start of the status phase, gain 1 trade good for each ocean card in play."}]},{id:28,name:"Crimson Rebellion",complexity:Me.High,startingtech:[],edition:p.TE,tech:[{id:87,name:"Subatomic Splicer",requirements:{[g.yellow]:1},provides:g.yellow,edition:p.TE,description:"When one of your ships is destroyed, you may produce a ship of the same type at a space dock in your home system."}]},{id:29,name:"Firmament",complexity:Me.High,startingtech:[],edition:p.TE,tech:[{id:88,name:"Plane Splitter",requirements:{[g.yellow]:2},provides:g.yellow,edition:p.TE,description:"When you gain this card, put The Fracture into play. Flip this card if the Obsidian faction is in play."},{id:89,name:"Neural Parasite",requirements:{[g.green]:2},provides:g.green,edition:p.TE,description:"At the start of the status phase, you may place 1 infantry from your reinforcements on a planet you control in your home system. Flip this card if the Obsidian faction is in play."}]},{id:30,name:"Council Keleres",complexity:Me.Moderate,startingtech:[],edition:p.TE,tech:[{id:90,name:"Executive Order",requirements:{[g.yellow]:1},provides:g.yellow,edition:p.TE,description:"ACTION: Exhaust this card and draw the top or bottom card of the agenda deck. Players immediately vote on this agenda as if you were the speaker; you can spend trade goods and resources on this agenda as if they were votes."},{id:91,name:"Agency Supply Network",requirements:{[g.yellow]:2},provides:g.yellow,edition:p.TE,description:"Once per action, when you resolve a unit's PRODUCTION ability, you may resolve another of your unit's PRODUCTION abilities in any system."}]}],genericTech:[{id:35,name:"Assault Cannon",requirements:{[g.red]:3},edition:p.Base,description:"At the start of a space combat in a system that contains 3 or more of your non-fighter ships, your opponent must destroy 1 of his non-fighter ships.",provides:g.red},{id:36,edition:p.Base,name:"Duranium Armor",requirements:{[g.red]:2},description:"During each combat round, after you assign hits to your units, repair 1 of your damaged units that did not use Sustain Damage during this combat round.",provides:g.red},{id:37,edition:p.Base,name:"Magen Defense Grid \u03A9\u03A9",requirements:{[g.red]:1},description:"<ul><li>When any player activates a system that contains 1 or more of your structures, place 1 infantry from your reinforcements with each of those structures.</li><li>At the start of ground combat on a planet that contains 1 or more of your structures, produce 1 hit and assign it to 1 of your opponent's ground forces.</li></ul>",provides:g.red},{id:38,edition:p.Base,name:"Plasma Scoring",requirements:{},description:"When 1 or more of your unit use Bombardment or Space Canon, 1 of those units may roll 1 additional die.",provides:g.red},{id:39,edition:p.Base,name:"Integrated Economy",requirements:{[g.yellow]:3},description:"After you gain control of a planet, you may produce any number of units on that planet that have a combined cost equal to or less than that planet\u2019s resource value.",provides:g.yellow},{id:40,edition:p.Base,name:"Transit Diodes",requirements:{[g.yellow]:2},description:"You may exhaust this card at the start of your turn during the action phase; remove up to 4 of your GFs from the game board and place them on 1 or more planets you control.",provides:g.yellow},{id:41,edition:p.Base,name:"Graviton Laser Systems",requirements:{[g.yellow]:1},description:"You may exhaust this card before 1 or of your units use Space Cannon; hits produced by those units must be assigned to non-fighter ships if able.",provides:g.yellow},{id:42,edition:p.Base,name:"Sarween Tools",requirements:{},description:"When 1 or more of your units use Production, reduce the combined cost of the produced units by 1.",provides:g.yellow},{id:43,edition:p.Base,name:"X-89 Bacterial Weapon \u03A9\u03A9",requirements:{[g.green]:3},description:"<ul><li>Double the hits produced by your units' BOMBARDMENT and ground combat rolls.</li><li>Exhaust each planet you use BOMBARDMENT against.</li></ul>",provides:g.green},{id:44,edition:p.Base,name:"Hyper Methabolism",requirements:{[g.green]:2},description:"During the status phase, gain 3 CTs instead of 2.",provides:g.green},{id:45,edition:p.Base,name:"Dacxive Animators",requirements:{[g.green]:1},description:"After you win an ground combat, you may place 1 infantry from your reinforcements on the planet.",provides:g.green},{id:46,edition:p.Base,name:"Neural Motivator",requirements:{},description:"During the Status Phase, draw 2 action cards instead of 1.",provides:g.green},{id:47,edition:p.Base,name:"Light / Wave Deflector",requirements:{[g.blue]:3},description:"Your ships can move through systems that contain other players\u2019 ships.",provides:g.blue},{id:48,edition:p.Base,name:"Fleet Logistics",requirements:{[g.blue]:2},description:"During each of your turn of the Action Phase, you may perform 2 actions instead of 1.",provides:g.blue},{id:49,edition:p.Base,name:"Gravity Drive",requirements:{[g.blue]:1},description:"You After you activate a system, apply +1 to the move value of 1 of your ships during the Tactical Action.",provides:g.blue},{id:50,edition:p.Base,name:"Antimass Deflectors",requirements:{},description:"Your ships can move through and into Asteroid Fields. When other players\u2019 units use Space Canon against your units, apply -1 to the result of each die roll.",provides:g.blue},{id:51,edition:p.Base,name:"War Sun",requirements:{[g.red]:3,[g.yellow]:1},description:"<ul><li>Cost 12; Battle 3[x3]; Move 2; Capacity 6</li><li>Other players\u2019 units in this system lose Planetary Shield</li><li>Sustain Damage</li><li>Bombardment 3[x3].</li></ul>",provides:g.black},{id:52,edition:p.Base,name:"Dreadnought II",requirements:{[g.blue]:2,[g.yellow]:1},description:"<ul><li>Cost 4; Battle 5; Move 2; Capacity 1</li><li>This unit cannot be destroyed by the \u201CDirect Hit\u201D action cards</li><li>Sustain Damage</li><li>Bombardment 5</li></ul>",provides:g.black},{id:53,edition:p.Base,name:"Cruiser II",requirements:{[g.red]:1,[g.yellow]:1,[g.green]:1},description:"Cost 2; Battle 6; Move 3; Capacity 1",provides:g.black},{id:54,edition:p.Base,name:"Destroyer II",requirements:{[g.red]:2},description:"<ul><li>Cost 1; Battle 8; Move 2</li><li>Anti-fighter barrage 6[x3].</li></ul>",provides:g.black},{id:55,edition:p.Base,name:"PDS II",requirements:{[g.red]:1,[g.yellow]:1},description:"<ul><li>You may use this unit\u2019s Space Canon against ships that are adjacent to this system</li><li>Planetary Shield</li><li>Space Cannon 5</li></ul>",provides:g.black},{id:56,edition:p.Base,name:"Carrier II",requirements:{[g.blue]:2},description:"Cost 3; Battle 9; Move 2; Capacity 6",provides:g.black},{id:57,edition:p.Base,name:"Fighter II",requirements:{[g.blue]:1,[g.green]:1},description:"<ul><li>Cost 1/2; Battle 8; Move 2</li><li>This unit may move without being transported. Fighters in excess of your ships\u2019 capacity count against your fleet pool.</li></ul>",provides:g.black},{id:58,edition:p.Base,name:"Infantry II",requirements:{[g.green]:2},description:"<ul><li>Cost 1/2; Battle 7</li><li>After this unit is destroyed, roll 1 die. If result \u2265 6: place the unit on this card. At the start of your next turn, place each unit on this card on a planet you control in your HS.</li></ul>",provides:g.black},{id:59,edition:p.Base,name:"Space Dock II",requirements:{[g.yellow]:2},description:"<ul><li>This unit\u2019s Production value is equal to 4 more than the resource value of this planet</li><li>Up to 3 fighters in this system do not count toward your ships\u2019 capacity</li><li>Production X.</li></ul>",provides:g.black},{id:60,edition:p.PoK,name:"Psychoarchaeology",requirements:{},description:"<ul><li>You can use technology specialties on planets you control without exhausting them, even if those planets are exhausted</li><li>During the Action Phase, you can exhaust planets you control that have technology specialties to gain 1 Trade Good</li></ul>",provides:g.green},{id:61,edition:p.PoK,name:"Bio-Stims",requirements:{[g.green]:1},description:"<ul><li>You may exhaust this card at the end of your turn to ready 1 of your planets that has a technology specialty or 1 of your other technologies</li></ul>",provides:g.green},{id:62,edition:p.PoK,name:"Dark Energy Tap",requirements:{},description:"<ul><li>After you perform a tactical action in a system that contains a frontier token, if you have 1 or more ships in that system, explore that token</li><li>Your ships can retreat into adjacent systems that do not contain other players' units, even if you do not have units or control planets in that system.</li></ul>",provides:g.blue},{id:63,edition:p.PoK,name:"Sling Relay",requirements:{[g.blue]:1},description:"<ul><li>ACTION: Exhaust this card to produce 1 ship in any system that contains one of your space docks</li></ul>",provides:g.blue},{id:64,edition:p.PoK,name:"AI Development Algorithm",requirements:{},description:"<ul><li>When you research a unit upgrade technology, you may exhaust this card to ignore any 1 prerequisite</li><li>When 1 or more of your units use Production, you may exhaust this card to reduce the combined cost of the produced units by the number of unit upgrade technologies that you own</li></ul>",provides:g.red},{id:65,edition:p.PoK,name:"Self Assembly Routines",requirements:{[g.red]:1},description:"<ul><li>After 1 or more of your units use PRODUCTION, you may exhaust this card to place 1 mech from your reinforcements on a planet you control in that system</li><li>After 1 of your mechs is destroyed, gain 1 trade good</li></ul>",provides:g.red},{id:66,edition:p.PoK,name:"Scanlink Drone Network",requirements:{},description:"<ul><li>When you activate a system, you may explore 1 planet in that system which contains 1 or more of your units</li></ul>",provides:g.yellow},{id:67,edition:p.PoK,name:"Predictive Intelligence",requirements:{[g.yellow]:1},description:"<ul><li>At the end of your turn, you may exhaust this card to redistribute your command tokens</li><li>When you cast votes during the agenda phase, you may cast 3 additional votes; if you do, and the outcome you voted for is not resolved, exhaust this card</li></ul>",provides:g.yellow}],systems:[{id:19,type:T.Blue,edition:p.Base,planets:[{name:"Wellon",traits:[L.INDUSTRIAL],resources:1,influence:2,techSpecialty:[Le.CYBERNETIC]}]},{id:20,type:T.Blue,edition:p.Base,planets:[{name:"Vefut II",traits:[L.HAZARDOUS],resources:2,influence:2}]},{id:21,type:T.Blue,edition:p.Base,planets:[{name:"Thibah",traits:[L.INDUSTRIAL],resources:1,influence:1,techSpecialty:[Le.PROPULSION]}]},{id:22,type:T.Blue,edition:p.Base,planets:[{name:"Tar'mann",traits:[L.INDUSTRIAL],resources:1,influence:1,techSpecialty:[Le.BIOTIC]}]},{id:23,type:T.Blue,edition:p.Base,planets:[{name:"Saudor",traits:[L.INDUSTRIAL],resources:2,influence:2}]},{id:24,type:T.Blue,edition:p.Base,planets:[{name:"Mehar Xull",traits:[L.HAZARDOUS],resources:1,influence:3,techSpecialty:[Le.WARFARE]}]},{id:25,type:T.Blue,edition:p.Base,wormholes:[ln.BETA],planets:[{name:"Quann",traits:[L.CULTURAL],resources:2,influence:1}]},{id:26,type:T.Blue,edition:p.Base,wormholes:[ln.ALPHA],planets:[{name:"Lodor",traits:[L.CULTURAL],resources:3,influence:1}]},{id:27,type:T.Blue,edition:p.Base,planets:[{name:"New Albion",traits:[L.INDUSTRIAL],resources:1,influence:1,techSpecialty:[Le.BIOTIC]},{name:"Starpoint",traits:[L.HAZARDOUS],resources:3,influence:1}]},{id:28,type:T.Blue,edition:p.Base,planets:[{name:"Tequ'ran",traits:[L.HAZARDOUS],resources:2,influence:0},{name:"Torkan",traits:[L.CULTURAL],resources:0,influence:3}]},{id:29,type:T.Blue,edition:p.Base,planets:[{name:"Qucen'n",traits:[L.INDUSTRIAL],resources:1,influence:2},{name:"Rarron",traits:[L.CULTURAL],resources:0,influence:3}]},{id:30,type:T.Blue,edition:p.Base,planets:[{name:"Mellon",traits:[L.CULTURAL],resources:0,influence:2},{name:"Zohbat",traits:[L.HAZARDOUS],resources:3,influence:1}]},{id:31,type:T.Blue,edition:p.Base,planets:[{name:"Lazar",traits:[L.INDUSTRIAL],resources:1,influence:0,techSpecialty:[Le.CYBERNETIC]},{name:"Sakulag",traits:[L.HAZARDOUS],resources:2,influence:1}]},{id:32,type:T.Blue,edition:p.Base,planets:[{name:"Dal Bootha",traits:[L.CULTURAL],resources:0,influence:2},{name:"Xxehan",traits:[L.CULTURAL],resources:1,influence:1}]},{id:33,type:T.Blue,edition:p.Base,planets:[{name:"Corneeq",traits:[L.CULTURAL],resources:1,influence:2},{name:"Resulon",traits:[L.CULTURAL],resources:2,influence:0}]},{id:34,type:T.Blue,edition:p.Base,planets:[{name:"Centauri",traits:[L.CULTURAL],resources:1,influence:3},{name:"Gral",traits:[L.INDUSTRIAL],resources:1,influence:1,techSpecialty:[Le.PROPULSION]}]},{id:35,type:T.Blue,edition:p.Base,planets:[{name:"Bereg",traits:[L.HAZARDOUS],resources:3,influence:1},{name:"Lirta IV",traits:[L.HAZARDOUS],resources:2,influence:3}]},{id:36,type:T.Blue,edition:p.Base,planets:[{name:"Arnor",traits:[L.INDUSTRIAL],resources:2,influence:1},{name:"Lor",traits:[L.INDUSTRIAL],resources:1,influence:2}]},{id:37,type:T.Blue,edition:p.Base,planets:[{name:"Arinam",traits:[L.INDUSTRIAL],resources:1,influence:2},{name:"Meer",traits:[L.HAZARDOUS],resources:0,influence:4,techSpecialty:[Le.WARFARE]}]},{id:38,type:T.Blue,edition:p.Base,planets:[{name:"Abyz",traits:[L.HAZARDOUS],resources:3,influence:0},{name:"Fria",traits:[L.HAZARDOUS],resources:2,influence:0}]},{id:39,type:T.Red,edition:p.Base,wormholes:[ln.ALPHA]},{id:40,type:T.Red,edition:p.Base,wormholes:[ln.BETA]},{id:41,type:T.Red,edition:p.Base,anomalies:[ct.GRAVITY_RIFT]},{id:42,type:T.Red,edition:p.Base,anomalies:[ct.NEBULA]},{id:43,type:T.Red,edition:p.Base,anomalies:[ct.SUPERNOVA]},{id:44,type:T.Red,edition:p.Base,anomalies:[ct.ASTEROID_FIELD]},{id:45,type:T.Red,edition:p.Base,anomalies:[ct.ASTEROID_FIELD]},{id:46,type:T.Red,edition:p.Base},{id:47,type:T.Red,edition:p.Base},{id:48,type:T.Red,edition:p.Base},{id:49,type:T.Red,edition:p.Base},{id:50,type:T.Red,edition:p.Base},{id:59,type:T.Blue,edition:p.PoK,planets:[{name:"Archon Vail",traits:[L.HAZARDOUS],resources:1,influence:3,techSpecialty:[Le.PROPULSION]}]},{id:60,type:T.Blue,edition:p.PoK,planets:[{name:"Perimeter",traits:[L.INDUSTRIAL],resources:2,influence:1}]},{id:61,type:T.Blue,edition:p.PoK,planets:[{name:"Ang",traits:[L.INDUSTRIAL],resources:2,influence:0,techSpecialty:[Le.WARFARE]}]},{id:62,type:T.Blue,edition:p.PoK,planets:[{name:"Sem-Lore",traits:[L.CULTURAL],resources:3,influence:2,techSpecialty:[Le.CYBERNETIC]}]},{id:63,type:T.Blue,edition:p.PoK,planets:[{name:"Vorhal",traits:[L.CULTURAL],resources:0,influence:2,techSpecialty:[Le.BIOTIC]}]},{id:64,type:T.Blue,edition:p.PoK,wormholes:[ln.BETA],planets:[{name:"Atlas",traits:[L.HAZARDOUS],resources:3,influence:1}]},{id:65,type:T.Blue,edition:p.PoK,planets:[{name:"Primor",traits:[L.CULTURAL],resources:2,influence:1,legendary:!0}]},{id:66,type:T.Blue,edition:p.PoK,planets:[{name:"Hope's End",traits:[L.HAZARDOUS],resources:3,influence:0,legendary:!0}]},{id:67,type:T.Red,edition:p.PoK,anomalies:[ct.GRAVITY_RIFT],planets:[{name:"Cormund",traits:[L.HAZARDOUS],resources:2,influence:0}]},{id:68,type:T.Red,edition:p.PoK,anomalies:[ct.NEBULA],planets:[{name:"Everra",traits:[L.CULTURAL],resources:3,influence:1}]},{id:69,type:T.Blue,edition:p.PoK,planets:[{name:"Accoen",traits:[L.INDUSTRIAL],resources:2,influence:3},{name:"Jeol Ir",traits:[L.INDUSTRIAL],resources:2,influence:3}]},{id:70,type:T.Blue,edition:p.PoK,planets:[{name:"Kraag",traits:[L.HAZARDOUS],resources:2,influence:1},{name:"Siig",traits:[L.HAZARDOUS],resources:0,influence:2}]},{id:71,type:T.Blue,edition:p.PoK,planets:[{name:"Ba'Kal",traits:[L.INDUSTRIAL],resources:3,influence:2},{name:"Alio Prima",traits:[L.CULTURAL],resources:1,influence:1}]},{id:72,type:T.Blue,edition:p.PoK,planets:[{name:"Lisis",traits:[L.INDUSTRIAL],resources:2,influence:2},{name:"Velnor",traits:[L.INDUSTRIAL],resources:2,influence:1,techSpecialty:[Le.WARFARE]}]},{id:73,type:T.Blue,edition:p.PoK,planets:[{name:"Lisis",traits:[L.CULTURAL],resources:0,influence:2,techSpecialty:[Le.CYBERNETIC]},{name:"Xanhact",traits:[L.HAZARDOUS],resources:0,influence:1}]},{id:74,type:T.Blue,edition:p.PoK,planets:[{name:"Vega Major",traits:[L.CULTURAL],resources:2,influence:1},{name:"Vega Minor",traits:[L.CULTURAL],resources:1,influence:2,techSpecialty:[Le.PROPULSION]}]},{id:75,type:T.Blue,edition:p.PoK,planets:[{name:"Loki",traits:[L.CULTURAL],resources:1,influence:2},{name:"Abaddon",traits:[L.CULTURAL],resources:1,influence:0},{name:"Ashtroth",traits:[L.HAZARDOUS],resources:2,influence:0}]},{id:76,type:T.Blue,edition:p.PoK,planets:[{name:"Rigel I",traits:[L.HAZARDOUS],resources:0,influence:1},{name:"Rigel II",traits:[L.INDUSTRIAL],resources:1,influence:2},{name:"Rigel III",traits:[L.INDUSTRIAL],resources:1,influence:1,techSpecialty:[Le.BIOTIC]}]},{id:77,type:T.Red,edition:p.PoK},{id:78,type:T.Red,edition:p.PoK},{id:79,type:T.Red,edition:p.PoK,wormholes:[ln.ALPHA],anomalies:[ct.ASTEROID_FIELD]},{id:80,type:T.Red,edition:p.PoK,anomalies:[ct.SUPERNOVA]},{id:81,type:T.Red,edition:p.PoK,anomalies:[ct.SUPERNOVA]},{id:97,type:T.Blue,edition:p.TE,planets:[{name:"Faunus",traits:[],resources:1,influence:3,legendary:!0}]},{id:98,type:T.Blue,edition:p.TE,planets:[{name:"Garbozia",traits:[],resources:2,influence:1,legendary:!0}]},{id:99,type:T.Blue,edition:p.TE,planets:[{name:"Emelpar",traits:[],resources:0,influence:2,legendary:!0}]},{id:100,type:T.Blue,edition:p.TE,planets:[{name:"Tempesta",traits:[],resources:1,influence:1,legendary:!0}]},{id:101,type:T.Blue,edition:p.TE,planets:[{name:"Olergodt",traits:[],resources:2,influence:1}]},{id:102,type:T.Blue,edition:p.TE,wormholes:[ln.ALPHA],planets:[{name:"Andeara",traits:[],resources:1,influence:1}]},{id:103,type:T.Blue,edition:p.TE,planets:[{name:"Vira-Pics III",traits:[],resources:2,influence:3}]},{id:104,type:T.Blue,edition:p.TE,planets:[{name:"Lesab",traits:[],resources:2,influence:1}]},{id:105,type:T.Blue,edition:p.TE,planets:[{name:"New Terra",traits:[],resources:1,influence:1},{name:"Tinnes",traits:[],resources:2,influence:1}]},{id:106,type:T.Blue,edition:p.TE,planets:[{name:"Cresius",traits:[],resources:0,influence:1},{name:"Lazul Rex",traits:[],resources:2,influence:2}]},{id:107,type:T.Blue,edition:p.TE,planets:[{name:"Tiamat",traits:[],resources:2,influence:1},{name:"Hercalor",traits:[],resources:1,influence:0}]},{id:108,type:T.Blue,edition:p.TE,planets:[{name:"Kostboth",traits:[],resources:0,influence:1},{name:"Capha",traits:[],resources:3,influence:0}]},{id:109,type:T.Blue,edition:p.TE,planets:[{name:"Bellatrix",traits:[],resources:1,influence:2},{name:"Tsion Station",traits:[],resources:1,influence:1}]},{id:110,type:T.Blue,edition:p.TE,planets:[{name:"Horizon",traits:[],resources:1,influence:2},{name:"Elnath",traits:[],resources:2,influence:0},{name:"Luthien VI",traits:[],resources:3,influence:1}]},{id:111,type:T.Blue,edition:p.TE,planets:[{name:"Tarana",traits:[],resources:1,influence:2},{name:"Oluz Station",traits:[],resources:1,influence:1}]},{id:113,type:T.Red,edition:p.TE,anomalies:[ct.GRAVITY_RIFT],wormholes:[ln.BETA]},{id:114,type:T.Red,edition:p.TE,anomalies:[ct.ENTROPIC_SCAR]},{id:115,type:T.Red,edition:p.TE,anomalies:[ct.ASTEROID_FIELD],planets:[{name:"Industrex",traits:[],resources:2,influence:0}]},{id:116,type:T.Red,edition:p.TE,anomalies:[ct.NEBULA],planets:[{name:"Lemox",traits:[],resources:0,influence:3}]},{id:117,type:T.Red,edition:p.TE,anomalies:[ct.GRAVITY_RIFT,ct.ASTEROID_FIELD],planets:[{name:"The Watchtower",traits:[],resources:1,influence:1}]}]};var $i=(()=>{class t{constructor(){this.settings=W({editions:[p.Base],additionalFactions:0})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=G({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Na={1:"Arborec.png",2:"Letnev.png",3:"Saar.png",4:"Muaat.png",5:"Hacan.png",6:"Sol.png",7:"Creuss.png",8:"L1Z1X.png",9:"Mentak.png",10:"Naalu.png",11:"Nekro.png",12:"Sardakk.png",13:"Jol Nar.png",14:"Winnu.png",15:"Xxcha.png",16:"Yin.png",17:"Yssaril.png",18:"Argent.png",19:"Empyrean.png",20:"Mahact.png",21:"Naaz-Rokha.png",22:"Nomad.png",23:"Titans.png",24:"Vuil'Raith.png",25:"Last Bastion.png",26:"Ral-Nel.png",27:"Deepwrought.png",28:"Crimson Rebellion.png",29:"Firmament.png",30:"Keleres.png"};function os(t,n=0){return xI(t)?Number(t):arguments.length===2?n:0}function xI(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function dn(t){return t instanceof z?t.nativeElement:t}function R_(t){return Array.isArray(t)?t:[t]}function Dt(t){return t==null?"":typeof t=="string"?t:`${t}px`}function un(t){return t!=null&&`${t}`!="false"}var A_;try{A_=typeof Intl<"u"&&Intl.v8BreakIterator}catch(t){A_=!1}var qe=(()=>{class t{_platformId=u(Bo);isBrowser=this._platformId?hx(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||A_)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var ss;function EI(){if(ss==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return ss=!1,ss;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)ss=!0;else{let t=Element.prototype.scrollTo;t?ss=!/\{\s*\[native code\]\s*\}/.test(t.toString()):ss=!1}}return ss}var O_;function II(){if(O_==null){let t=typeof document<"u"?document.head:null;O_=!!(t&&(t.createShadowRoot||t.attachShadow))}return O_}function F_(t){if(II()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function vn(t){if(t.composedPath)try{return t.composedPath()[0]}catch(n){}return t.target}function P_(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Ol;function NI(){if(Ol==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Ol=!0}))}finally{Ol=Ol||!1}return Ol}function Ma(t){return NI()?t:!!t.capture}var Ta,MI=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function L_(){if(Ta)return Ta;if(typeof document!="object"||!document)return Ta=new Set(MI),Ta;let t=document.createElement("input");return Ta=new Set(MI.filter(n=>(t.setAttribute("type",n),t.type===n))),Ta}var Mm=new WeakMap,xt=(()=>{class t{_appRef;_injector=u(he);_environmentInjector=u(ze);load(e){let i=this._appRef=this._appRef||this._injector.get(Nt),r=Mm.get(i);r||(r={loaders:new Set,refs:[]},Mm.set(i,r),i.onDestroy(()=>{Mm.get(i)?.refs.forEach(o=>o.destroy()),Mm.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(_f(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var TI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return t})(),Tm;function YB(){if(Tm===void 0&&(Tm=null,typeof window<"u")){let t=window;if(t.trustedTypes!==void 0)try{Tm=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n})}catch(n){console.error(n)}}return Tm}function ka(t){return YB()?.createHTML(t)||t}function as(t){return t.buttons===0||t.detail===0}function cs(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var kI=new S("cdk-input-modality-detector-options"),RI={ignoreKeys:[18,17,224,91,16]},AI=650,B_={passive:!0,capture:!0},OI=(()=>{class t{_platform=u(qe);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new bt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=vn(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<AI||(this._modality.next(as(e)?"keyboard":"mouse"),this._mostRecentTarget=vn(e))};_onTouchstart=e=>{if(cs(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=vn(e)};constructor(){let e=u(V),i=u(ne),r=u(kI,{optional:!0});if(this._options=w(w({},RI),r),this.modalityDetected=this._modality.pipe(dp(1)),this.modalityChanged=this.modalityDetected.pipe(jd()),this._platform.isBrowser){let o=u(mt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,B_),o.listen(i,"mousedown",this._onMousedown,B_),o.listen(i,"touchstart",this._onTouchstart,B_)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})(),Fl=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Fl||{}),FI=new S("cdk-focus-monitor-default-options"),km=Ma({passive:!0,capture:!0}),Gi=(()=>{class t{_ngZone=u(V);_platform=u(qe);_inputModalityDetector=u(OI);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(ne);_stopInputModalityDetector=new I;constructor(){let e=u(FI,{optional:!0});this._detectionMode=e?.detectionMode||Fl.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=vn(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=dn(e);if(!this._platform.isBrowser||r.nodeType!==1)return Y();let o=F_(r)||this._document,s=this._elementInfo.get(r);if(s)return i&&(s.checkChildren=!0),s.subject;let a={checkChildren:i,subject:new I,rootNode:o};return this._elementInfo.set(r,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let i=dn(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=dn(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,c])=>this._originChanged(a,i,c)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Fl.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===Fl.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?AI:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=vn(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,km),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,km)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ve(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,km),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,km),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var PI=new Set,ls,V_=(()=>{class t{_platform=u(qe);_nonce=u(Vr,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):ZB}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&QB(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();function QB(t,n){if(!PI.has(t))try{ls||(ls=document.createElement("style"),n&&ls.setAttribute("nonce",n),ls.setAttribute("type","text/css"),document.head.appendChild(ls)),ls.sheet&&(ls.sheet.insertRule(`@media ${t.replace(/[{}]/g,"")} {body{ }}`,0),PI.add(t))}catch(e){console.error(e)}}function ZB(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}function XB(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var LI=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})(),JB=(()=>{class t{_mutationObserverFactory=u(LI);_observedElements=new Map;_ngZone=u(V);ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=dn(e);return new re(r=>{let s=this._observeElement(i).pipe(me(a=>a.filter(c=>!XB(c))),Te(a=>!!a.length)).subscribe(a=>{this._ngZone.run(()=>{r.next(a)})});return()=>{s.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new I,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})(),BI=(()=>{class t{_contentObserver=u(JB);_elementRef=u(z);event=new se;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=os(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(cc(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",H],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),Rm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({providers:[LI]})}return t})();var eV=200,Am=class{_letterKeyStream=new I;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new I;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:eV;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Lt(e=>this._pressedLetters.push(e)),cc(n),Te(()=>this._pressedLetters.length>0),me(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Ra(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Om=class{_items;_activeItemIndex=W(-1);_activeItem=W(null);_wrap=!1;_typeaheadSubscription=pe.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof En?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):Jn(n)&&(this._effectRef=Zt(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new I;change=new I;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Am(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(r||Ra(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return Jn(this._items)?this._items():this._items instanceof En?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var mr=class extends Om{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var UI=new Map,yt=class t{_appId=u(Lo);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){this._appId!=="ng"&&(n+=this._appId);let i=UI.get(n);return i===void 0?i=0:i++,UI.set(n,i),`${n}${e?t._infix+"-":""}${i}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})};var nV=new S("MATERIAL_ANIMATIONS"),HI=null;function iV(){return u(nV,{optional:!0})?.animationsDisabled||u(Br,{optional:!0})==="NoopAnimations"?"di-disabled":(HI??=u(V_).matchMedia("(prefers-reduced-motion)").matches,HI?"reduced-motion":"enabled")}function Rt(){return iV()!=="enabled"}var Gn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Gn||{}),H_=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Gn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},zI=Ma({passive:!0,capture:!0}),z_=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let s=o.get(i);s?s.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,zI)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,zI)))}_delegateEventHandler=n=>{let e=vn(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},Pl={enterDuration:225,exitDuration:150},rV=800,$I=Ma({passive:!0,capture:!0}),GI=["mousedown","touchstart"],qI=["mouseup","mouseleave","touchend","touchcancel"],oV=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return t})(),ds=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new z_;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=dn(i)),o&&o.get(xt).load(oV)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=w(w({},Pl),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let s=i.radius||sV(n,e,r),a=n-r.left,c=e-r.top,l=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${c-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),m=f.transitionProperty,h=f.transitionDuration,v=m==="none"||h==="0s"||h==="0s, 0s"||r.width===0&&r.height===0,C=new H_(this,d,i,v);d.style.transform="scale3d(1, 1, 1)",C.state=Gn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=C);let E=null;return!v&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let M=()=>{E&&(E.fallbackTimer=null),clearTimeout(ie),this._finishRippleTransition(C)},O=()=>this._destroyRipple(C),ie=setTimeout(O,l+100);d.addEventListener("transitionend",M),d.addEventListener("transitioncancel",O),E={onTransitionEnd:M,onTransitionCancel:O,fallbackTimer:ie}}),this._activeRipples.set(C,E),(v||!l)&&this._finishRippleTransition(C),C}fadeOutRipple(n){if(n.state===Gn.FADING_OUT||n.state===Gn.HIDDEN)return;let e=n.element,i=w(w({},Pl),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=Gn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=dn(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,GI.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{qI.forEach(e=>{this._triggerElement.addEventListener(e,this,$I)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Gn.FADING_IN?this._startFadeOutTransition(n):n.state===Gn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=Gn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Gn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=as(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+rV;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!cs(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Gn.VISIBLE||n.config.terminateOnPointerUp&&n.state===Gn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(GI.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(qI.forEach(e=>n.removeEventListener(e,this,$I)),this._pointerUpEventsRegistered=!1))}};function sV(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var us=new S("mat-ripple-global-options"),Fm=(()=>{class t{_elementRef=u(z);_animationsDisabled=Rt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(V),i=u(qe),r=u(us,{optional:!0}),o=u(he);this._globalOptions=r||{},this._rippleRenderer=new ds(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:w(w(w({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,w(w({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,w(w({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&ee("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var An=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return t})();function Pm(t){return t&&typeof t.connect=="function"&&!(t instanceof Ja)}var ci=(function(t){return t[t.REPLACED=0]="REPLACED",t[t.INSERTED=1]="INSERTED",t[t.MOVED=2]="MOVED",t[t.REMOVED=3]="REMOVED",t})(ci||{}),Lm=class{viewCacheSize=20;_viewCache=[];applyChanges(n,e,i,r,o){n.forEachOperation((s,a,c)=>{let l,d;if(s.previousIndex==null){let f=()=>i(s,a,c);l=this._insertView(f,c,e,r(s)),d=l?ci.INSERTED:ci.REPLACED}else c==null?(this._detachAndCacheView(a,e),d=ci.REMOVED):(l=this._moveView(a,c,e,r(s)),d=ci.MOVED);o&&o({context:l?.context,operation:d,record:s})})}detach(){for(let n of this._viewCache)n.destroy();this._viewCache=[]}_insertView(n,e,i,r){let o=this._insertViewFromCache(e,i);if(o){o.context.$implicit=r;return}let s=n();return i.createEmbeddedView(s.templateRef,s.context,s.index)}_detachAndCacheView(n,e){let i=e.detach(n);this._maybeCacheView(i,e)}_moveView(n,e,i,r){let o=i.get(n);return i.move(o,e),o.context.$implicit=r,o}_maybeCacheView(n,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(n);else{let i=e.indexOf(n);i===-1?n.destroy():e.remove(i)}}_insertViewFromCache(n,e){let i=this._viewCache.pop();return i&&e.insert(i,n),i||null}};var Ll=(()=>{class t{_listeners=[];notify(e,i){for(let r of this._listeners)r(e,i)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(i=>e!==i)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var Bm=class{applyChanges(n,e,i,r,o){n.forEachOperation((s,a,c)=>{let l,d;if(s.previousIndex==null){let f=i(s,a,c);l=e.createEmbeddedView(f.templateRef,f.context,f.index),d=ci.INSERTED}else c==null?(e.remove(a),d=ci.REMOVED):(l=e.get(a),e.move(l,c),d=ci.MOVED);o&&o({context:l?.context,operation:d,record:s})})}detach(){}};var aV=new S("cdk-dir-doc",{providedIn:"root",factory:()=>u(ne)}),cV=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function WI(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?cV.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var li=(()=>{class t{get value(){return this.valueSignal()}valueSignal=W("ltr");change=new se;constructor(){let e=u(aV,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(WI(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var ke=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({})}return t})();var $_=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=un(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=un(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(ge("aria-orientation",r.vertical?"vertical":"horizontal"),ee("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
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
`],encapsulation:2})}return t})(),KI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({imports:[ke]})}return t})();var YI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({imports:[ke]})}return t})();var Jr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({imports:[ke]})}return t})();var lV=["*"],dV=`.mdc-list {
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
`,uV=["unscopedContent"],fV=["text"],mV=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],hV=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var pV=new S("ListOption"),gV=(()=>{class t{_elementRef=u(z);static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),vV=(()=>{class t{_elementRef=u(z);static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),yV=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),QI=(()=>{class t{_listOption=u(pV,{optional:!0});_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,hostVars:4,hostBindings:function(i,r){i&2&&ee("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),_V=(()=>{class t extends QI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[le]})}return t})(),bV=(()=>{class t extends QI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[le]})}return t})(),SV=new S("MAT_LIST_CONFIG"),G_=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=un(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(un(e))}_disabled=W(!1);_defaultOptions=u(SV,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,hostVars:1,hostBindings:function(i,r){i&2&&ge("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),wV=(()=>{class t{_elementRef=u(z);_ngZone=u(V);_listBase=u(G_,{optional:!0});_platform=u(qe);_hostElement;_isButtonElement;_noopAnimations=Rt();_avatars;_icons;set lines(e){this._explicitLines=os(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=un(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(un(e))}_disabled=W(!1);_subscriptions=new pe;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){u(xt).load(An);let e=u(us,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new ds(this,this._ngZone,this._hostElement,this._platform,u(he)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(mn(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,contentQueries:function(i,r,o){if(i&1&&pt(o,_V,4)(o,bV,4),i&2){let s;X(s=J())&&(r._avatars=s),X(s=J())&&(r._icons=s)}},hostVars:4,hostBindings:function(i,r){i&2&&(ge("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),ee("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var ZI=(()=>{class t extends G_{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275cmp=A({type:t,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[ye([{provide:G_,useExisting:t}]),le],ngContentSelectors:lV,decls:1,vars:0,template:function(i,r){i&1&&(Ne(),F(0))},styles:[dV],encapsulation:2})}return t})(),XI=(()=>{class t extends wV{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=un(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275cmp=A({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&pt(o,vV,5)(o,gV,5)(o,yV,5),i&2){let s;X(s=J())&&(r._lines=s),X(s=J())&&(r._titles=s),X(s=J())&&(r._meta=s)}},viewQuery:function(i,r){if(i&1&&qt(uV,5)(fV,5),i&2){let o;X(o=J())&&(r._unscopedContent=o.first),X(o=J())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(ge("aria-current",r._getAriaCurrent()),ee("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[le],ngContentSelectors:hV,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(Ne(mV),F(0),y(1,"span",1),F(2,1),F(3,2),y(4,"span",2,0),ve("cdkObserveContent",function(){return r._updateItemLines(!0)}),F(6,3),b()(),F(7,4),F(8,5),U(9,"div",3))},dependencies:[BI],encapsulation:2})}return t})();var JI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({imports:[Rm,Jr,YI,ke,KI]})}return t})();function tN(t){return Error(`Unable to find icon with the name "${t}"`)}function CV(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function nN(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function iN(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var hr=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},jm=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new hr(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let s=this._sanitizer.sanitize(Fe.HTML,r);if(!s)throw iN(r);let a=ka(s);return this._addSvgIconConfig(e,i,new hr("",a,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new hr(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(Fe.HTML,i);if(!o)throw iN(i);let s=ka(o);return this._addSvgIconSetConfig(e,new hr("",s,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(Fe.RESOURCE_URL,e);if(!i)throw nN(e);let r=this._cachedIconsByUrl.get(i);return r?Y(Vm(r)):this._loadSvgIconFromConfig(new hr(e,null)).pipe(Lt(o=>this._cachedIconsByUrl.set(i,o)),me(o=>Vm(o)))}getNamedSvgIcon(e,i=""){let r=rN(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(i);return s?this._getSvgFromIconSetConfigs(e,s):oc(tN(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Y(Vm(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(me(i=>Vm(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return Y(r);let o=i.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(Mr(a=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(Fe.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(l)),Y(null)})));return ac(o).pipe(me(()=>{let s=this._extractIconWithNameFromAnySet(e,i);if(!s)throw tN(e);return s}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,e,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Lt(i=>e.svgText=i),me(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Y(null):this._fetchIcon(e).pipe(Lt(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,r);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),r);let a=this._svgElementFromString(ka("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(ka("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:s,value:a}=r[o];s!=="id"&&i.setAttribute(s,a)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw CV();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let s=this._sanitizer.sanitize(Fe.RESOURCE_URL,i);if(!s)throw nN(i);let a=this._inProgressUrlFetches.get(s);if(a)return a;let c=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(me(l=>ka(l)),kr(()=>this._inProgressUrlFetches.delete(s)),lc());return this._inProgressUrlFetches.set(s,c),c}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(rN(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return DV(o)?new hr(o.url,null,o.options):new hr(o,null)}}static \u0275fac=function(i){return new(i||t)(R(Vf,8),R(ll),R(ne,8),R(rn))};static \u0275prov=G({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Vm(t){return t.cloneNode(!0)}function rN(t,n){return t+":"+n}function DV(t){return!!(t.url&&t.options)}var xV=["*"],EV=new S("MAT_ICON_DEFAULT_OPTIONS"),IV=new S("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(ne),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),oN=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],NV=oN.map(t=>`[${t}]`).join(", "),MV=/^url\(['"]?#(.*?)['"]?\)$/,Aa=(()=>{class t{_elementRef=u(z);_iconRegistry=u(jm);_location=u(IV);_errorHandler=u(rn);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=pe.EMPTY;constructor(){let e=u(new Hn("aria-hidden"),{optional:!0}),i=u(EV,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(NV),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)oN.forEach(s=>{let a=i[o],c=a.getAttribute(s),l=c?c.match(MV):null;if(l){let d=r.get(a);d||(d=[],r.set(a,d)),d.push({name:s,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(St(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(ge("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Nn(r.color?"mat-"+r.color:""),ee("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",H],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:xV,decls:1,vars:0,template:function(i,r){i&1&&(Ne(),F(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2})}return t})(),sN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({imports:[ke]})}return t})();var TV=["*"];var kV=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],RV=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],AV=new S("MAT_CARD_CONFIG"),eo=(()=>{class t{appearance;constructor(){let e=u(AV,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&ee("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:TV,decls:1,vars:0,template:function(i,r){i&1&&(Ne(),F(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2})}return t})(),to=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var no=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var aN=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&ee("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),io=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:RV,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(Ne(kV),F(0),at(1,"div",0),F(2,1),ht(),F(3,2))},encapsulation:2})}return t})();var Oa=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({imports:[ke]})}return t})();var OV={capture:!0},FV=["focus","mousedown","mouseenter","touchstart"],W_="mat-ripple-loader-uninitialized",K_="mat-ripple-loader-class-name",cN="mat-ripple-loader-centered",Hm="mat-ripple-loader-disabled",zm=(()=>{class t{_document=u(ne);_animationsDisabled=Rt();_globalRippleOptions=u(us,{optional:!0});_platform=u(qe);_ngZone=u(V);_injector=u(he);_eventCleanups;_hosts=new Map;constructor(){let e=u(mt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>FV.map(i=>e.listen(this._document,i,this._onInteraction,OV)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(W_,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(K_))&&e.setAttribute(K_,i.className||""),i.centered&&e.setAttribute(cN,""),i.disabled&&e.setAttribute(Hm,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(Hm,""):e.removeAttribute(Hm)}_onInteraction=e=>{let i=vn(e);if(i instanceof HTMLElement){let r=i.closest(`[${W_}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(K_)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Pl.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??Pl.exitDuration,a={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Hm),rippleConfig:{centered:e.hasAttribute(cN),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},c=new ds(a,this._ngZone,i,this._platform,this._injector),l=!a.rippleDisabled;l&&c.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:c,hasSetUpEvents:l}),e.removeAttribute(W_)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var lN=new S("");var $m=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}isSignalErrorState(e){if(!e)return!1;let i=e().invalid(),r=e().touched();return i&&r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var Gm=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(n,e,i,r,o){this._defaultMatcher=n,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o,e?Jn(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let n=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==n&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(n){if(this.formField&&n?.isSignalErrorState)return n.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,i=this.ngControl?this.ngControl.control:null;return n?.isErrorState(i,e)??!1}};var Y_=class{_box;_destroyed=new I;_resizeSubject=new I;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new re(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Te(e=>e.some(i=>i.target===n)),zd({bufferSize:1,refCount:!0}),Ve(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},dN=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(V);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Y_(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var PV=["notch"],LV=["*"],uN=["iconPrefixContainer"],fN=["textPrefixContainer"],mN=["iconSuffixContainer"],hN=["textSuffixContainer"],BV=["textField"],VV=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],jV=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function UV(t,n){t&1&&U(0,"span",21)}function HV(t,n){if(t&1&&(y(0,"label",20),F(1,1),Q(2,UV,1,0,"span",21),b()),t&2){let e=k(2);P("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),ge("for",e._control.disableAutomaticLabeling?null:e._control.id),_(2),Z(!e.hideRequiredMarker&&e._control.required?2:-1)}}function zV(t,n){if(t&1&&Q(0,HV,3,5,"label",20),t&2){let e=k();Z(e._hasFloatingLabel()?0:-1)}}function $V(t,n){t&1&&U(0,"div",7)}function GV(t,n){}function qV(t,n){if(t&1&&Pe(0,GV,0,0,"ng-template",13),t&2){k(2);let e=Un(1);P("ngTemplateOutlet",e)}}function WV(t,n){if(t&1&&(y(0,"div",9),Q(1,qV,1,1,null,13),b()),t&2){let e=k();P("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),_(),Z(e._forceDisplayInfixLabel()?-1:1)}}function KV(t,n){t&1&&(y(0,"div",10,2),F(2,2),b())}function YV(t,n){t&1&&(y(0,"div",11,3),F(2,3),b())}function QV(t,n){}function ZV(t,n){if(t&1&&Pe(0,QV,0,0,"ng-template",13),t&2){k();let e=Un(1);P("ngTemplateOutlet",e)}}function XV(t,n){t&1&&(y(0,"div",14,4),F(2,4),b())}function JV(t,n){t&1&&(y(0,"div",15,5),F(2,5),b())}function ej(t,n){t&1&&U(0,"div",16)}function tj(t,n){t&1&&(y(0,"div",18),F(1,6),b())}function nj(t,n){if(t&1&&(y(0,"mat-hint",22),N(1),b()),t&2){let e=k(2);P("id",e._hintLabelId),_(),gt(e.hintLabel)}}function ij(t,n){if(t&1&&(y(0,"div",19),Q(1,nj,2,2,"mat-hint",22),F(2,7),U(3,"div",23),F(4,8),b()),t&2){let e=k();_(),Z(e.hintLabel?1:-1)}}var pr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-label"]]})}return t})(),SN=new S("MatError"),Q_=(()=>{class t{id=u(yt).getId("mat-mdc-error-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&an("id",r.id)},inputs:{id:"id"},features:[ye([{provide:SN,useExisting:t}])]})}return t})(),Bl=(()=>{class t{align="start";id=u(yt).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(an("id",r.id),ge("align",null),ee("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),rj=new S("MatPrefix");var oj=new S("MatSuffix");var wN=new S("FloatingLabelParent"),pN=(()=>{class t{_elementRef=u(z);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(dN);_ngZone=u(V);_parent=u(wN);_resizeSubscription=new pe;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return sj(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&ee("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function sj(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var gN="mdc-line-ripple--active",qm="mdc-line-ripple--deactivating",vN=(()=>{class t{_elementRef=u(z);_cleanupTransitionEnd;constructor(){let e=u(V),i=u($e);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(qm),e.add(gN)}deactivate(){this._elementRef.nativeElement.classList.add(qm)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(qm);e.propertyName==="opacity"&&r&&i.remove(gN,qm)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),yN=(()=>{class t{_elementRef=u(z);_ngZone=u(V);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&qt(PV,5),i&2){let o;X(o=J())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&ee("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:LV,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Ne(),gn(0,"div",1),at(1,"div",2,0),F(3),ht(),gn(4,"div",3))},encapsulation:2})}return t})(),Z_=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t})}return t})();var X_=new S("MatFormField"),aj=new S("MAT_FORM_FIELD_DEFAULT_OPTIONS"),_N="fill",cj="auto",bN="fixed",lj="translateY(-50%)",ro=(()=>{class t{_elementRef=u(z);_changeDetectorRef=u(et);_platform=u(qe);_idGenerator=u(yt);_ngZone=u(V);_defaults=u(aj,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Zc("iconPrefixContainer");_textPrefixContainerSignal=Zc("textPrefixContainer");_iconSuffixContainerSignal=Zc("iconSuffixContainer");_textSuffixContainerSignal=Zc("textSuffixContainer");_prefixSuffixContainers=Ge(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=ex(pr);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=un(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||cj}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||_N;this._appearanceSignal.set(i)}_appearanceSignal=W(_N);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||bN}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||bN}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new I;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Rt();constructor(){let e=this._defaults,i=u(li);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Zt(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Ge(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Pt([void 0,void 0]),me(()=>[i.errorState,i.userAriaDescribedBy]),Hd(),Te(([[o,s],[a,c]])=>o!==a||s!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Ve(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),mn(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){vy({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Ge(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(s=>s&&!o.includes(s)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,a=i?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,l=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",f=`${s+a}px`,h=`calc(${d} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,v=`var(--mat-mdc-form-field-label-transform, ${lj} translateX(${h}))`,C=s+a+c+l;return[v,C]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(df(o,r._labelChild,pr,5),pt(o,Z_,5)(o,rj,5)(o,oj,5)(o,SN,5)(o,Bl,5)),i&2){ff();let s;X(s=J())&&(r._formFieldControl=s.first),X(s=J())&&(r._prefixChildren=s),X(s=J())&&(r._suffixChildren=s),X(s=J())&&(r._errorChildren=s),X(s=J())&&(r._hintChildren=s)}},viewQuery:function(i,r){if(i&1&&(uf(r._iconPrefixContainerSignal,uN,5)(r._textPrefixContainerSignal,fN,5)(r._iconSuffixContainerSignal,mN,5)(r._textSuffixContainerSignal,hN,5),qt(BV,5)(uN,5)(fN,5)(mN,5)(hN,5)(pN,5)(yN,5)(vN,5)),i&2){ff(4);let o;X(o=J())&&(r._textField=o.first),X(o=J())&&(r._iconPrefixContainer=o.first),X(o=J())&&(r._textPrefixContainer=o.first),X(o=J())&&(r._iconSuffixContainer=o.first),X(o=J())&&(r._textSuffixContainer=o.first),X(o=J())&&(r._floatingLabel=o.first),X(o=J())&&(r._notchedOutline=o.first),X(o=J())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&ee("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ye([{provide:X_,useExisting:t},{provide:wN,useExisting:t}])],ngContentSelectors:jV,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Ne(VV),Pe(0,zV,1,1,"ng-template",null,0,hf),y(2,"div",6,1),ve("click",function(s){return r._control.onContainerClick(s)}),Q(4,$V,1,0,"div",7),y(5,"div",8),Q(6,WV,2,2,"div",9),Q(7,KV,3,0,"div",10),Q(8,YV,3,0,"div",11),y(9,"div",12),Q(10,ZV,1,1,null,13),F(11),b(),Q(12,XV,3,0,"div",14),Q(13,JV,3,0,"div",15),b(),Q(14,ej,1,0,"div",16),b(),y(15,"div",17),Q(16,tj,2,0,"div",18)(17,ij,5,1,"div",19),b()),i&2){let o;_(2),ee("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),_(2),Z(!r._hasOutline()&&!r._control.disabled?4:-1),_(2),Z(r._hasOutline()?6:-1),_(),Z(r._hasIconPrefix?7:-1),_(),Z(r._hasTextPrefix?8:-1),_(2),Z(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),_(2),Z(r._hasTextSuffix?12:-1),_(),Z(r._hasIconSuffix?13:-1),_(),Z(r._hasOutline()?-1:14),_(),ee("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let s=r._getSubscriptMessageType();_(),Z((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[pN,yN,wy,vN,Bl],styles:[`.mdc-text-field {
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
`],encapsulation:2})}return t})();var EN=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],IN=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function dj(t,n){t&1&&(y(0,"span",3),F(1,1),b())}function uj(t,n){t&1&&(y(0,"span",6),F(1,2),b())}function fj(t,n){t&1&&(y(0,"span",3),F(1,1),y(2,"span",7),Xn(),y(3,"svg",8),U(4,"path",9),b()()())}function mj(t,n){t&1&&(y(0,"span",6),F(1,2),b())}var hj=`.mdc-evolution-chip,
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
`;var NN=["*"],pj=`.mat-mdc-chip-set {
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
`,nb=new S("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),J_=new S("MatChipAvatar"),CN=new S("MatChipTrailingIcon"),DN=new S("MatChipEdit"),xN=new S("MatChipRemove"),ib=new S("MatChip"),MN=(()=>{class t{_elementRef=u(z);_parentChip=u(ib);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){u(xt).load(An),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(i,r){i&2&&(ge("disabled",r._getDisabledAttribute())("aria-disabled",r.disabled),ee("mdc-evolution-chip__action--primary",r._isPrimary)("mdc-evolution-chip__action--secondary",!r._isPrimary)("mdc-evolution-chip__action--trailing",!r._isPrimary&&!r._isLeading))},inputs:{disabled:[2,"disabled","disabled",H],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:Ri(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return t})(),TN=(()=>{class t extends MN{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(i,r){i&1&&ve("click",function(s){return r._handleClick(s)})("keydown",function(s){return r._handleKeydown(s)}),i&2&&(ge("tabindex",r._getTabindex()),ee("mdc-evolution-chip__action--presentational",!1))},features:[le]})}return t})(),Km=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-chip-avatar"],["","matChipAvatar",""]],hostAttrs:["role","img",1,"mat-mdc-chip-avatar","mdc-evolution-chip__icon","mdc-evolution-chip__icon--primary"],features:[ye([{provide:J_,useExisting:t}])]})}return t})();var eb=(()=>{class t{_changeDetectorRef=u(et);_elementRef=u(z);_tagName=u(JD);_ngZone=u(V);_focusMonitor=u(Gi);_globalRippleOptions=u(us,{optional:!0});_document=u(ne);_onFocus=new I;_onBlur=new I;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=Rt();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=u(yt).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new se;destroyed=new se;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=u(zm);_injector=u(he);constructor(){let e=u(xt);e.load(An),e.load(TI),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=mn(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(i=>{let r=i._elementRef.nativeElement;return r===e||r.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let i=e!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(i,r,o){if(i&1&&pt(o,J_,5)(o,DN,5)(o,CN,5)(o,xN,5)(o,J_,5)(o,CN,5)(o,DN,5)(o,xN,5),i&2){let s;X(s=J())&&(r.leadingIcon=s.first),X(s=J())&&(r.editIcon=s.first),X(s=J())&&(r.trailingIcon=s.first),X(s=J())&&(r.removeIcon=s.first),X(s=J())&&(r._allLeadingIcons=s),X(s=J())&&(r._allTrailingIcons=s),X(s=J())&&(r._allEditIcons=s),X(s=J())&&(r._allRemoveIcons=s)}},viewQuery:function(i,r){if(i&1&&qt(TN,5),i&2){let o;X(o=J())&&(r.primaryAction=o.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(i,r){i&1&&ve("keydown",function(s){return r._handleKeydown(s)}),i&2&&(an("id",r.id),ge("role",r.role)("aria-label",r.ariaLabel),Nn("mat-"+(r.color||"primary")),ee("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",r.leadingIcon)("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-basic-chip",r._isBasicChip)("mat-mdc-standard-chip",!r._isBasicChip)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon())("_mat-animation-noopable",r._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",H],highlighted:[2,"highlighted","highlighted",H],disableRipple:[2,"disableRipple","disableRipple",H],disabled:[2,"disabled","disabled",H]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[ye([{provide:ib,useExisting:t}])],ngContentSelectors:IN,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(i,r){i&1&&(Ne(EN),U(0,"span",0),y(1,"span",1)(2,"span",2),Q(3,dj,2,0,"span",3),y(4,"span",4),F(5),U(6,"span",5),b()()(),Q(7,uj,2,0,"span",6)),i&2&&(_(3),Z(r.leadingIcon?3:-1),_(4),Z(r._hasTrailingIcon()?7:-1))},dependencies:[MN],styles:[`.mdc-evolution-chip,
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
`],encapsulation:2})}return t})();var Vl=(()=>{class t extends eb{_defaultOptions=u(nb,{optional:!0});chipListSelectable=!0;_chipListMultiple=!1;_chipListHideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get selectable(){return this._selectable&&this.chipListSelectable}set selectable(e){this._selectable=e,this._changeDetectorRef.markForCheck()}_selectable=!0;get selected(){return this._selected}set selected(e){this._setSelectedState(e,!1,!0)}_selected=!1;get ariaSelected(){return this.selectable?this.selected.toString():null}basicChipAttrName="mat-basic-chip-option";selectionChange=new se;ngOnInit(){super.ngOnInit(),this.role="presentation"}select(){this._setSelectedState(!0,!1,!0)}deselect(){this._setSelectedState(!1,!1,!0)}selectViaInteraction(){this._setSelectedState(!0,!0,!0)}toggleSelected(e=!1){return this._setSelectedState(!this.selected,e,!0),this.selected}_handlePrimaryActionInteraction(){this.disabled||(this.focus(),this.selectable&&this.toggleSelected(!0))}_hasLeadingGraphic(){return this.leadingIcon?!0:!this._chipListHideSingleSelectionIndicator||this._chipListMultiple}_setSelectedState(e,i,r){e!==this.selected&&(this._selected=e,r&&this.selectionChange.emit({source:this,isUserInput:i,selected:this.selected}),this._changeDetectorRef.markForCheck())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275cmp=A({type:t,selectors:[["mat-basic-chip-option"],["","mat-basic-chip-option",""],["mat-chip-option"],["","mat-chip-option",""]],hostAttrs:[1,"mat-mdc-chip","mat-mdc-chip-option"],hostVars:37,hostBindings:function(i,r){i&2&&(an("id",r.id),ge("tabindex",null)("aria-label",null)("aria-description",null)("role",r.role),ee("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--filter",!r._isBasicChip)("mdc-evolution-chip--selectable",!r._isBasicChip)("mat-mdc-chip-selected",r.selected)("mat-mdc-chip-multiple",r._chipListMultiple)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-chip-with-avatar",r.leadingIcon)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--selected",r.selected)("mdc-evolution-chip--selecting",!r._animationsDisabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-primary-graphic",r._hasLeadingGraphic())("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon()))},inputs:{selectable:[2,"selectable","selectable",H],selected:[2,"selected","selected",H]},outputs:{selectionChange:"selectionChange"},features:[ye([{provide:eb,useExisting:t},{provide:ib,useExisting:t}]),le],ngContentSelectors:IN,decls:8,vars:6,consts:[[1,"mat-mdc-chip-focus-overlay"],["role","presentation",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipAction","","role","option",3,"_allowFocusWhenDisabled"],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],["role","presentation",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"],[1,"mdc-evolution-chip__checkmark"],["viewBox","-2 -3 30 30","focusable","false","aria-hidden","true",1,"mdc-evolution-chip__checkmark-svg"],["fill","none","stroke","currentColor","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-evolution-chip__checkmark-path"]],template:function(i,r){i&1&&(Ne(EN),U(0,"span",0),y(1,"span",1)(2,"button",2),Q(3,fj,5,0,"span",3),y(4,"span",4),F(5),U(6,"span",5),b()()(),Q(7,mj,2,0,"span",6)),i&2&&(_(2),P("_allowFocusWhenDisabled",!0),ge("aria-description",r.ariaDescription)("aria-label",r.ariaLabel)("aria-selected",r.ariaSelected),_(),Z(r._hasLeadingGraphic()?3:-1),_(4),Z(r._hasTrailingIcon()?7:-1))},dependencies:[TN],styles:[hj],encapsulation:2})}return t})();var gj=(()=>{class t{_elementRef=u(z);_changeDetectorRef=u(et);_dir=u(li,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new I;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new En;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(Pt(null),Je(()=>mn(...this._chips.map(e))))}_originatesFromChip(e){let i=e.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains("mat-mdc-chip"))return!0;i=i.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Pt(this._chips)).subscribe(e=>{let i=[];e.forEach(r=>r._getActions().forEach(o=>i.push(o))),this._chipActions.reset(i),this._chipActions.notifyOnChanges()}),this._keyManager=new mr(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(Ve(this._destroyed)).subscribe(({chip:e})=>{let i=e._getSourceAction(document.activeElement);i&&this._keyManager.updateActiveItem(i)}),this._dir?.change.pipe(Ve(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Pt(null),Ve(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(Ve(this._destroyed)).subscribe(e=>{let r=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),s=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),a=o||s;this._isValidIndex(r)&&a&&(this._lastDestroyedFocusedChipIndex=r)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),i=this._chips.toArray()[e];i.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():i.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["mat-chip-set"]],contentQueries:function(i,r,o){if(i&1&&pt(o,eb,5),i&2){let s;X(s=J())&&(r._chips=s)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(i,r){i&1&&ve("keydown",function(s){return r._handleKeydown(s)}),i&2&&ge("role",r.role)},inputs:{disabled:[2,"disabled","disabled",H],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ri(e)]},ngContentSelectors:NN,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(i,r){i&1&&(Ne(),at(0,"div",0),F(1),ht())},styles:[`.mat-mdc-chip-set {
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
`],encapsulation:2})}return t})(),tb=class{source;value;constructor(n,e){this.source=n,this.value=e}},vj={provide:is,useExisting:Tt(()=>jl),multi:!0},jl=(()=>{class t extends gj{_onTouched=()=>{};_onChange=()=>{};_defaultRole="listbox";_defaultOptions=u(nb,{optional:!0});get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._syncListboxProperties()}_multiple=!1;get selected(){let e=this._chips.toArray().filter(i=>i.selected);return this.multiple?e:e[0]}ariaOrientation="horizontal";get selectable(){return this._selectable}set selectable(e){this._selectable=e,this._syncListboxProperties()}_selectable=!0;compareWith=(e,i)=>e===i;required=!1;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncListboxProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get chipSelectionChanges(){return this._getChipStream(e=>e.selectionChange)}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}get value(){return this._value}set value(e){this._chips&&this._chips.length&&this._setSelectionByValue(e,!1),this._value=e}_value;change=new se;_chips=void 0;ngAfterContentInit(){this._chips.changes.pipe(Pt(null),Ve(this._destroyed)).subscribe(()=>{this.value!==void 0&&Promise.resolve().then(()=>{this._setSelectionByValue(this.value,!1)}),this._syncListboxProperties()}),this.chipBlurChanges.pipe(Ve(this._destroyed)).subscribe(()=>this._blur()),this.chipSelectionChanges.pipe(Ve(this._destroyed)).subscribe(e=>{this.multiple||this._chips.forEach(i=>{i!==e.source&&i._setSelectedState(!1,!1,!1)}),e.isUserInput&&this._propagateChanges()})}focus(){if(this.disabled)return;let e=this._getFirstSelectedChip();e&&!e.disabled?e.focus():this._chips.length>0?this._keyManager.setFirstItemActive():this._elementRef.nativeElement.focus()}writeValue(e){e!=null?this.value=e:this.value=void 0}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_setSelectionByValue(e,i=!0){this._clearSelection(),Array.isArray(e)?e.forEach(r=>this._selectValue(r,i)):this._selectValue(e,i)}_blur(){this.disabled||setTimeout(()=>{this.focused||this._markAsTouched()})}_keydown(e){e.keyCode===9&&super._allowFocusEscape()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck()}_propagateChanges(){let e=null;Array.isArray(this.selected)?e=this.selected.map(i=>i.value):e=this.selected?this.selected.value:void 0,this._value=e,this.change.emit(new tb(this,e)),this._onChange(e),this._changeDetectorRef.markForCheck()}_clearSelection(e){this._chips.forEach(i=>{i!==e&&i.deselect()})}_selectValue(e,i){let r=this._chips.find(o=>o.value!=null&&this.compareWith(o.value,e));return r&&(i?r.selectViaInteraction():r.select()),r}_syncListboxProperties(){this._chips&&Promise.resolve().then(()=>{this._chips.forEach(e=>{e._chipListMultiple=this.multiple,e.chipListSelectable=this._selectable,e._chipListHideSingleSelectionIndicator=this.hideSingleSelectionIndicator,e._changeDetectorRef.markForCheck()})})}_getFirstSelectedChip(){return Array.isArray(this.selected)?this.selected.length?this.selected[0]:void 0:this.selected}_skipPredicate(e){return!1}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275cmp=A({type:t,selectors:[["mat-chip-listbox"]],contentQueries:function(i,r,o){if(i&1&&pt(o,Vl,5),i&2){let s;X(s=J())&&(r._chips=s)}},hostAttrs:[1,"mdc-evolution-chip-set","mat-mdc-chip-listbox"],hostVars:10,hostBindings:function(i,r){i&1&&ve("focus",function(){return r.focus()})("blur",function(){return r._blur()})("keydown",function(s){return r._keydown(s)}),i&2&&(an("tabIndex",r.disabled||r.empty?-1:r.tabIndex),ge("role",r.role)("aria-required",r.role?r.required:null)("aria-disabled",r.disabled.toString())("aria-multiselectable",r.multiple)("aria-orientation",r.ariaOrientation),ee("mat-mdc-chip-list-disabled",r.disabled)("mat-mdc-chip-list-required",r.required))},inputs:{multiple:[2,"multiple","multiple",H],ariaOrientation:[0,"aria-orientation","ariaOrientation"],selectable:[2,"selectable","selectable",H],compareWith:"compareWith",required:[2,"required","required",H],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",H],value:"value"},outputs:{change:"change"},features:[ye([vj]),le],ngContentSelectors:NN,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(i,r){i&1&&(Ne(),at(0,"div",0),F(1),ht())},styles:[pj],encapsulation:2})}return t})();var kN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({providers:[$m,{provide:nb,useValue:{separatorKeyCodes:[13]}}],imports:[Jr,ke]})}return t})();var gr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({imports:[Rm,ro,ke]})}return t})();var yj=new S("MAT_BUTTON_CONFIG");function AN(t){return t==null?void 0:Ri(t)}var ob=(()=>{class t{_elementRef=u(z);_ngZone=u(V);_animationsDisabled=Rt();_config=u(yj,{optional:!0});_focusMonitor=u(Gi);_cleanupClick;_renderer=u($e);_rippleLoader=u(zm);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=Jt(!1,{transform:H});constructor(){u(xt).load(An);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(i,r){i&2&&(ge("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Nn(r.color?"mat-"+r.color:""),ee("mat-mdc-button-progress-indicator-shown",r.showProgress())("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",H],disabled:[2,"disabled","disabled",H],ariaDisabled:[2,"aria-disabled","ariaDisabled",H],disabledInteractive:[2,"disabledInteractive","disabledInteractive",H],tabIndex:[2,"tabIndex","tabIndex",AN],_tabindex:[2,"tabindex","_tabindex",AN],showProgress:[1,"showProgress"]}})}return t})();var FN=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],PN=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function _j(t,n){t&1&&(at(0,"div",2),F(1,3),ht())}function bj(t,n){t&1&&(at(0,"div",2),F(1,3),ht())}var Sj=`.mat-mdc-fab-base {
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
`,ON=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Pa=(()=>{class t extends ob{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=wj(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?ON.get(this._appearance):null,o=ON.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[le],ngContentSelectors:PN,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Ne(FN),gn(0,"span",0),F(1),at(2,"span",1),F(3,1),ht(),F(4,2),Q(5,_j,2,0,"div",2),gn(6,"span",3)(7,"span",4)),i&2&&(ee("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),_(5),Z(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2})}return t})();function wj(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var Cj=new S("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>sb}),sb={color:"accent"};var Ym=(()=>{class t extends ob{_options=u(Cj,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||sb,this.color=this._options.color||sb.color}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["button","mat-mini-fab",""],["a","mat-mini-fab",""],["button","matMiniFab",""],["a","matMiniFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mdc-fab--mini","mat-mdc-mini-fab"],exportAs:["matButton","matAnchor"],features:[le],ngContentSelectors:PN,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Ne(FN),gn(0,"span",0),F(1),at(2,"span",1),F(3,1),ht(),F(4,2),Q(5,bj,2,0,"div",2),gn(6,"span",3)(7,"span",4)),i&2&&(ee("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),_(5),Z(r.showProgress()?5:-1))},styles:[Sj],encapsulation:2})}return t})();var Qm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({imports:[Jr,ke]})}return t})();var Dj=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return t})(),xj={passive:!0},LN=(()=>{class t{_platform=u(qe);_ngZone=u(V);_renderer=u(mt).createRenderer(null,null);_styleLoader=u(xt);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return ut;this._styleLoader.load(Dj);let i=dn(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new I,s="cdk-text-field-autofilled",a=l=>{l.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(s)?(i.classList.add(s),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!0}))):l.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(s)&&(i.classList.remove(s),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",a,xj)));return this._monitoredElements.set(i,{subject:o,unlisten:c}),o}stopMonitoring(e){let i=dn(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var BN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({})}return t})();var VN=new S("MAT_INPUT_VALUE_ACCESSOR");var Ej=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Ij=new S("MAT_INPUT_CONFIG"),La=(()=>{class t{_elementRef=u(z);_platform=u(qe);ngControl=u(fr,{optional:!0,self:!0});_autofillMonitor=u(LN);_ngZone=u(V);_formField=u(X_,{optional:!0});_renderer=u($e);_uid=u(yt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(Ij,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new I;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=un(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(cn.required)??!1}set required(e){this._required=un(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&L_().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=un(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>L_().has(e));constructor(){let e=u(Nm,{optional:!0}),i=u(Hi,{optional:!0}),r=u($m),o=u(VN,{optional:!0,self:!0}),s=u(lN,{optional:!0,self:!0}),a=this._elementRef.nativeElement,c=a.nodeName.toLowerCase();o?Jn(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Gm(r,s||this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=c==="select",this._isTextarea=c==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Zt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Ej.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&ve("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(an("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),ge("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),ee("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",H]},exportAs:["matInput"],features:[ye([{provide:Z_,useExisting:t}]),Xe]})}return t})(),Ba=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({imports:[gr,gr,BN,ke]})}return t})();var Nj=20,Xm=(()=>{class t{_ngZone=u(V);_platform=u(qe);_renderer=u(mt).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new I;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Nj){return this._platform.isBrowser?new re(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Ts(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Y()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Te(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._targetContainsElement(o,e)&&i.push(o)}),i}_targetContainsElement(e,i){let r=dn(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var Mj=20,oo=(()=>{class t{_platform=u(qe);_listeners;_viewportSize=null;_change=new I;_document=u(ne);constructor(){let e=u(V),i=u(mt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,a=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:s,left:a}}change(e=Mj){return e>0?this._change.pipe(Ts(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var jN=new S("CDK_VIRTUAL_SCROLL_VIEWPORT");var Zm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({})}return t})(),Hl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({imports:[ke,Zm,ke,Zm]})}return t})();var Tj=[[["caption"]],[["colgroup"],["col"]],"*"],kj=["caption","colgroup, col","*"];function Rj(t,n){t&1&&F(0,2)}function Aj(t,n){t&1&&(y(0,"thead",0),Xt(1,1),b(),y(2,"tbody",0),Xt(3,2)(4,3),b(),y(5,"tfoot",0),Xt(6,4),b())}function Oj(t,n){t&1&&Xt(0,1)(1,2)(2,3)(3,4)}var di=new S("CDK_TABLE");var th=(()=>{class t{template=u(Ct);static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","cdkCellDef",""]]})}return t})(),nh=(()=>{class t{template=u(Ct);static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","cdkHeaderCellDef",""]]})}return t})(),$N=(()=>{class t{template=u(Ct);static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","cdkFooterCellDef",""]]})}return t})(),Va=(()=>{class t{_table=u(di,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","cdkColumnDef",""]],contentQueries:function(i,r,o){if(i&1&&pt(o,th,5)(o,nh,5)(o,$N,5),i&2){let s;X(s=J())&&(r.cell=s.first),X(s=J())&&(r.headerCell=s.first),X(s=J())&&(r.footerCell=s.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",H],stickyEnd:[2,"stickyEnd","stickyEnd",H]}})}return t})(),eh=class{constructor(n,e){e.nativeElement.classList.add(...n._columnCssClassName)}},GN=(()=>{class t extends eh{constructor(){super(u(Va),u(z))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[le]})}return t})();var qN=(()=>{class t extends eh{constructor(){let e=u(Va),i=u(z);super(e,i);let r=e._table?._getCellRole();r&&i.nativeElement.setAttribute("role",r)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[le]})}return t})();var lb=(()=>{class t{template=u(Ct);_differs=u(Qo);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let i=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(i).create(),this._columnsDiffer.diff(i)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof $l?e.headerCell.template:this instanceof db?e.footerCell.template:e.cell.template}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,features:[Xe]})}return t})(),$l=(()=>{class t extends lb{_table=u(di,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",H]},features:[le,Xe]})}return t})(),db=(()=>{class t extends lb{_table=u(di,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",H]},features:[le,Xe]})}return t})(),ih=(()=>{class t extends lb{_table=u(di,{optional:!0});when;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[le]})}return t})(),fs=(()=>{class t{_viewContainer=u(st);cells;context;static mostRecentCellOutlet=null;constructor(){t.mostRecentCellOutlet=this}ngOnDestroy(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","cdkCellOutlet",""]]})}return t})(),ub=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&Xt(0,0)},dependencies:[fs],encapsulation:2,changeDetection:1})}return t})();var fb=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&Xt(0,0)},dependencies:[fs],encapsulation:2,changeDetection:1})}return t})(),WN=(()=>{class t{templateRef=u(Ct);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["ng-template","cdkNoDataRow",""]]})}return t})(),UN=["top","bottom","left","right"],cb=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(n=>this._updateCachedSizes(n)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(n,e,i=!0,r=!0,o,s,a){this._isNativeHtmlTable=n,this._stickCellCss=e,this._isBrowser=i,this._needsPositionStickyOnElement=r,this.direction=o,this._positionListener=s,this._tableInjector=a,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(n,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(n);let i=[];for(let r of n)r.nodeType===r.ELEMENT_NODE&&i.push(r,...Array.from(r.children));Ht({write:()=>{for(let r of i)this._removeStickyStyle(r,e)}},{injector:this._tableInjector})}updateStickyColumns(n,e,i,r=!0,o=!0){if(!n.length||!this._isBrowser||!(e.some(E=>E)||i.some(E=>E))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let s=n[0],a=s.children.length,c=this.direction==="rtl",l=c?"right":"left",d=c?"left":"right",f=e.lastIndexOf(!0),m=i.indexOf(!0),h,v,C;o&&this._updateStickyColumnReplayQueue({rows:[...n],stickyStartStates:[...e],stickyEndStates:[...i]}),Ht({earlyRead:()=>{h=this._getCellWidths(s,r),v=this._getStickyStartColumnPositions(h,e),C=this._getStickyEndColumnPositions(h,i)},write:()=>{for(let E of n)for(let M=0;M<a;M++){let O=E.children[M];e[M]&&this._addStickyStyle(O,l,v[M],M===f),i[M]&&this._addStickyStyle(O,d,C[M],M===m)}this._positionListener&&h.some(E=>!!E)&&(this._positionListener.stickyColumnsUpdated({sizes:f===-1?[]:h.slice(0,f+1).map((E,M)=>e[M]?E:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:m===-1?[]:h.slice(m).map((E,M)=>i[M+m]?E:null).reverse()}))}},{injector:this._tableInjector})}stickRows(n,e,i){if(!this._isBrowser)return;let r=i==="bottom"?n.slice().reverse():n,o=i==="bottom"?e.slice().reverse():e,s=[],a=[],c=[];Ht({earlyRead:()=>{for(let l=0,d=0;l<r.length;l++){if(!o[l])continue;s[l]=d;let f=r[l];c[l]=this._isNativeHtmlTable?Array.from(f.children):[f];let m=this._retrieveElementSize(f).height;d+=m,a[l]=m}},write:()=>{let l=o.lastIndexOf(!0);for(let d=0;d<r.length;d++){if(!o[d])continue;let f=s[d],m=d===l;for(let h of c[d])this._addStickyStyle(h,i,f,m)}i==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:a,offsets:s,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:a,offsets:s,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(n,e){this._isNativeHtmlTable&&Ht({write:()=>{let i=n.querySelector("tfoot");i&&(e.some(r=>!r)?this._removeStickyStyle(i,["bottom"]):this._addStickyStyle(i,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(n,e){if(!n.classList.contains(this._stickCellCss))return;for(let r of e)n.style[r]="",n.classList.remove(this._borderCellCss[r]);UN.some(r=>e.indexOf(r)===-1&&n.style[r])?n.style.zIndex=this._getCalculatedZIndex(n):(n.style.zIndex="",this._needsPositionStickyOnElement&&(n.style.position=""),n.classList.remove(this._stickCellCss))}_addStickyStyle(n,e,i,r){n.classList.add(this._stickCellCss),r&&n.classList.add(this._borderCellCss[e]),n.style[e]=`${i}px`,n.style.zIndex=this._getCalculatedZIndex(n),this._needsPositionStickyOnElement&&(n.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(n){let e={top:100,bottom:10,left:1,right:1},i=0;for(let r of UN)n.style[r]&&(i+=e[r]);return i?`${i}`:""}_getCellWidths(n,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let i=[],r=n.children;for(let o=0;o<r.length;o++){let s=r[o];i.push(this._retrieveElementSize(s).width)}return this._cachedCellWidths=i,i}_getStickyStartColumnPositions(n,e){let i=[],r=0;for(let o=0;o<n.length;o++)e[o]&&(i[o]=r,r+=n[o]);return i}_getStickyEndColumnPositions(n,e){let i=[],r=0;for(let o=n.length;o>0;o--)e[o]&&(i[o]=r,r+=n[o]);return i}_retrieveElementSize(n){let e=this._elemSizeCache.get(n);if(e)return e;let i=n.getBoundingClientRect(),r={width:i.width,height:i.height};return this._resizeObserver&&(this._elemSizeCache.set(n,r),this._resizeObserver.observe(n,{box:"border-box"})),r}_updateStickyColumnReplayQueue(n){this._removeFromStickyColumnReplayQueue(n.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(n)}_removeFromStickyColumnReplayQueue(n){let e=new Set(n);for(let i of this._updatedStickyColumnsParamsToReplay)i.rows=i.rows.filter(r=>!e.has(r));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(i=>!!i.rows.length)}_updateCachedSizes(n){let e=!1;for(let i of n){let r=i.borderBoxSize?.length?{width:i.borderBoxSize[0].inlineSize,height:i.borderBoxSize[0].blockSize}:{width:i.contentRect.width,height:i.contentRect.height};r.width!==this._elemSizeCache.get(i.target)?.width&&Fj(i.target)&&(e=!0),this._elemSizeCache.set(i.target,r)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let i of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(i.rows,i.stickyStartStates,i.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Fj(t){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(n=>t.classList.contains(n))}function HN(t){return Error(`Could not find column with id "${t}".`)}var zl=new S("STICKY_POSITIONING_LISTENER");var mb=(()=>{class t{viewContainer=u(st);elementRef=u(z);constructor(){let e=u(di);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","rowOutlet",""]]})}return t})(),hb=(()=>{class t{viewContainer=u(st);elementRef=u(z);constructor(){let e=u(di);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","headerRowOutlet",""]]})}return t})(),pb=(()=>{class t{viewContainer=u(st);elementRef=u(z);constructor(){let e=u(di);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","footerRowOutlet",""]]})}return t})(),gb=(()=>{class t{viewContainer=u(st);elementRef=u(z);constructor(){let e=u(di);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","noDataRowOutlet",""]]})}return t})(),vb=(()=>{class t{_differs=u(Qo);_changeDetectorRef=u(et);_elementRef=u(z);_dir=u(li,{optional:!0});_platform=u(qe);_viewRepeater;_viewportRuler=u(oo);_injector=u(he);_virtualScrollViewport=u(jN,{optional:!0,host:!0});_positionListener=u(zl,{optional:!0})||u(zl,{optional:!0,skipSelf:!0});_document=u(ne);_data;_renderedRange;_onDestroy=new I;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new I;_footerRowStickyUpdates=new I;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new I;_dataStream=new I;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new se;viewChange=new bt({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){u(new Hn("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((i,r)=>this.trackBy?this.trackBy(r.dataIndex,r.data):r)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(Ve(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Lm:new Bm,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Pm(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let i=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,i,(r,o,s)=>this._getEmbeddedViewArgs(r.item,s),r=>r.item.data,r=>{r.operation===ci.INSERTED&&r.context&&this._renderCellTemplateForItem(r.record.item.rowDef,r.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);o.context.$implicit=r.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let r=zN(this._headerRowOutlet,"thead");r&&(r.style.display=e.length?"":"none")}let i=this._headerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,i,"top"),this._headerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let r=zN(this._footerRowOutlet,"tfoot");r&&(r.style.display=e.length?"":"none")}let i=this._footerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,i,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,i),this._footerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),i=this._getRenderedRows(this._rowOutlet),r=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...i,...r],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,s)=>{this._addStickyColumnStyles([o],this._headerRowDefs[s])}),this._rowDefs.forEach(o=>{let s=[];for(let a=0;a<i.length;a++)this._renderRows[a].rowDef===o&&s.push(i[a]);this._addStickyColumnStyles(s,o)}),r.forEach((o,s)=>{this._addStickyColumnStyles([o],this._footerRowDefs[s])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let i=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||i,this._forceRecalculateCellWidths=i,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],i=Math.min(this._data.length,this._renderedRange.end),r=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<i;o++){let s=this._data[o],a=this._getRenderRowsForData(s,o,r.get(s));this._cachedRenderRowsMap.has(s)||this._cachedRenderRowsMap.set(s,new WeakMap);for(let c=0;c<a.length;c++){let l=a[c],d=this._cachedRenderRowsMap.get(l.data);d.has(l.rowDef)?d.get(l.rowDef).push(l):d.set(l.rowDef,[l]),e.push(l)}}return e}_getRenderRowsForData(e,i,r){return this._getRowDefs(e,i).map(s=>{let a=r&&r.has(s)?r.get(s):[];if(a.length){let c=a.shift();return c.dataIndex=i,c}else return{data:e,rowDef:s,dataIndex:i}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Jm(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(i=>{this._columnDefsByName.has(i.name),this._columnDefsByName.set(i.name,i)})}_cacheRowDefs(){this._headerRowDefs=Jm(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Jm(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Jm(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(i=>!i.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(s,a)=>{let c=!!a.getColumnsDiff();return s||c},i=this._rowDefs.reduce(e,!1);i&&this._forceRenderDataRows();let r=this._headerRowDefs.reduce(e,!1);r&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),i||r||o}_switchDataSource(e){this._data=[],Pm(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Pm(this.dataSource)?e=this.dataSource.connect(this):bo(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Y(this.dataSource)),this._renderChangeSubscription=Ir([e,this.viewChange]).pipe(Ve(this._onDestroy)).subscribe(([i,r])=>{this._data=i||[],this._renderedRange=r,this._dataStream.next(i),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,i)=>this._renderRow(this._headerRowOutlet,e,i)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,i)=>this._renderRow(this._footerRowOutlet,e,i)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,i){let r=Array.from(i?.columns||[]).map(a=>{let c=this._columnDefsByName.get(a);if(!c)throw HN(a);return c}),o=r.map(a=>a.sticky),s=r.map(a=>a.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,s,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let i=[];for(let r=0;r<e.viewContainer.length;r++){let o=e.viewContainer.get(r);i.push(o.rootNodes[0])}return i}_getRowDefs(e,i){if(this._rowDefs.length===1)return[this._rowDefs[0]];let r=[];if(this.multiTemplateDataRows)r=this._rowDefs.filter(o=>!o.when||o.when(i,e));else{let o=this._rowDefs.find(s=>s.when&&s.when(i,e))||this._defaultRowDef;o&&r.push(o)}return r.length,r}_getEmbeddedViewArgs(e,i){let r=e.rowDef,o={$implicit:e.data};return{templateRef:r.template,context:o,index:i}}_renderRow(e,i,r,o={}){let s=e.viewContainer.createEmbeddedView(i.template,o,r);return this._renderCellTemplateForItem(i,o),s}_renderCellTemplateForItem(e,i){for(let r of this._getCellTemplates(e))fs.mostRecentCellOutlet&&fs.mostRecentCellOutlet._viewContainer.createEmbeddedView(r,i);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let i=0,r=e.length;i<r;i++){let s=e.get(i).context;s.count=r,s.first=i===0,s.last=i===r-1,s.even=i%2===0,s.odd=!s.even,this.multiTemplateDataRows?(s.dataIndex=this._renderRows[i].dataIndex,s.renderIndex=i):s.index=this._renderRows[i].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,i=>{let r=this._columnDefsByName.get(i);if(!r)throw HN(i);return e.extractCellTemplate(r)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(i,r)=>i||r.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",i=this._injector;this._stickyStyler=new cb(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,i),(this._dir?this._dir.change:Y()).pipe(Ve(this._onDestroy)).subscribe(r=>{this._stickyStyler.direction=r,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let i=typeof requestAnimationFrame<"u"?wd:_d;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Ts(0,i),Ve(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(r,o)=>this._measureRangeSize(r,o)}),Ir([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(Ve(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let s=0;s<o.elements.length;s++){let a=o.elements[s];if(a){let c=o.offsets[s],l=r!==0?Math.max(r-c,c):-c;for(let d of a)d.style.top=`${-l}px`}}}),Ir([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(Ve(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let s=0;s<o.elements.length;s++){let a=o.elements[s];if(a)for(let c of a)c.style.bottom=`${r+o.offsets[s]}px`}})}_getOwnDefs(e){return e.filter(i=>!i._table||i._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let i=this._rowOutlet.viewContainer.length===0;if(i===this._isShowingNoDataRow)return;let r=this._noDataRowOutlet.viewContainer;if(i){let o=r.createEmbeddedView(e.templateRef),s=o.rootNodes[0];if(o.rootNodes.length===1&&s?.nodeType===this._document.ELEMENT_NODE){s.setAttribute("role","row"),s.classList.add(...e._contentClassNames);let a=s.querySelectorAll(e._cellSelector);for(let c=0;c<a.length;c++)a[c].classList.add(...e._cellClassNames)}}else r.clear();this._isShowingNoDataRow=i,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,i){if(e.start>=e.end||i!=="vertical")return 0;let r=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<r.start||e.end>r.end;let s=e.start-r.start,a=e.end-e.start,c,l;for(let m=0;m<a;m++){let h=o.get(m+s);if(h&&h.rootNodes.length){c=l=h.rootNodes[0];break}}for(let m=a-1;m>-1;m--){let h=o.get(m+s);if(h&&h.rootNodes.length){l=h.rootNodes[h.rootNodes.length-1];break}}let d=c?.getBoundingClientRect?.(),f=l?.getBoundingClientRect?.();return d&&f?f.bottom-d.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(i,r,o){if(i&1&&pt(o,WN,5)(o,Va,5)(o,ih,5)(o,$l,5)(o,db,5),i&2){let s;X(s=J())&&(r._noDataRow=s.first),X(s=J())&&(r._contentColumnDefs=s),X(s=J())&&(r._contentRowDefs=s),X(s=J())&&(r._contentHeaderRowDefs=s),X(s=J())&&(r._contentFooterRowDefs=s)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(i,r){i&2&&ee("cdk-table-fixed-layout",r.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",H],fixedLayout:[2,"fixedLayout","fixedLayout",H],recycleRows:[2,"recycleRows","recycleRows",H]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[ye([{provide:di,useExisting:t},{provide:zl,useValue:null}])],ngContentSelectors:kj,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(Ne(Tj),F(0),F(1,1),Q(2,Rj,1,0),Q(3,Aj,7,0)(4,Oj,4,0)),i&2&&(_(2),Z(r._isServer?2:-1),_(),Z(r._isNativeHtmlTable?3:4))},dependencies:[hb,mb,gb,pb],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return t})();function Jm(t,n){return t.concat(Array.from(n))}function zN(t,n){let e=n.toUpperCase(),i=t.viewContainer.element.nativeElement;for(;i;){let r=i.nodeType===1?i.nodeName:null;if(r===e)return i;if(r==="TABLE")break;i=i.parentNode}return null}var KN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({imports:[Hl]})}return t})();var Pj=[[["caption"]],[["colgroup"],["col"]],"*"],Lj=["caption","colgroup, col","*"];function Bj(t,n){t&1&&F(0,2)}function Vj(t,n){t&1&&(y(0,"thead",0),Xt(1,1),b(),y(2,"tbody",2),Xt(3,3)(4,4),b(),y(5,"tfoot",0),Xt(6,5),b())}function jj(t,n){t&1&&Xt(0,1)(1,3)(2,4)(3,5)}var YN=(()=>{class t extends vb{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275cmp=A({type:t,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(i,r){i&2&&ee("mat-table-fixed-layout",r.fixedLayout)},exportAs:["matTable"],features:[ye([{provide:vb,useExisting:t},{provide:di,useExisting:t},{provide:zl,useValue:null}]),le],ngContentSelectors:Lj,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(Ne(Pj),F(0),F(1,1),Q(2,Bj,1,0),Q(3,Vj,7,0)(4,jj,4,0)),i&2&&(_(2),Z(r._isServer?2:-1),_(),Z(r._isNativeHtmlTable?3:4))},dependencies:[hb,mb,gb,pb],styles:[`.mat-mdc-table-sticky {
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
`],encapsulation:2,changeDetection:1})}return t})(),QN=(()=>{class t extends th{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matCellDef",""]],features:[ye([{provide:th,useExisting:t}]),le]})}return t})(),ZN=(()=>{class t extends nh{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matHeaderCellDef",""]],features:[ye([{provide:nh,useExisting:t}]),le]})}return t})();var XN=(()=>{class t extends Va{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[ye([{provide:Va,useExisting:t}]),le]})}return t})(),JN=(()=>{class t extends GN{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[le]})}return t})();var eM=(()=>{class t extends qN{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[le]})}return t})();var tM=(()=>{class t extends $l{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",H]},features:[ye([{provide:$l,useExisting:t}]),le]})}return t})();var nM=(()=>{class t extends ih{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[ye([{provide:ih,useExisting:t}]),le]})}return t})(),iM=(()=>{class t extends ub{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275cmp=A({type:t,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[ye([{provide:ub,useExisting:t}]),le],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&Xt(0,0)},dependencies:[fs],encapsulation:2,changeDetection:1})}return t})();var rM=(()=>{class t extends fb{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275cmp=A({type:t,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[ye([{provide:fb,useExisting:t}]),le],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&Xt(0,0)},dependencies:[fs],encapsulation:2,changeDetection:1})}return t})();var oM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({imports:[KN,ke]})}return t})();function Hj(t,n){if(t&1){let e=Gt();y(0,"mat-card",3)(1,"mat-card-header")(2,"mat-card-title"),N(3,"Add Players"),b()(),y(4,"mat-card-content")(5,"form",15)(6,"mat-form-field")(7,"mat-label"),N(8,"Player Name"),b(),U(9,"input",16,1),Ni(),b(),y(11,"button",17),ve("click",function(){rt(e);let r=Un(10),o=k();return ot(o.addPlayer(r))}),y(12,"mat-icon"),N(13,"add"),b()()()()()}if(t&2){let e=k();_(5),P("formGroup",e.playerForm),_(4),Mi()}}function zj(t,n){t&1&&(y(0,"th",18),N(1," Name "),b())}function $j(t,n){if(t&1&&(y(0,"td",19),N(1),b()),t&2){let e=n.$implicit;_(),vt(" ",e.name," ")}}function Gj(t,n){t&1&&(y(0,"th",18),N(1," Faction "),b())}function qj(t,n){if(t&1&&U(0,"img",21),t&2){let e=k().$implicit,i=k();P("src",i.factionIcon(e.faction),Bt)("alt",e.faction.name)("title",e.faction.name)}}function Wj(t,n){if(t&1&&(y(0,"td",19),Pe(1,qj,1,3,"img",20),b()),t&2){let e=n.$implicit;_(),P("ngIf",e.faction)}}function Kj(t,n){t&1&&(y(0,"th",18),N(1," Position "),b())}function Yj(t,n){if(t&1&&(y(0,"td",19),N(1),b()),t&2){let e=n.$implicit;_(),vt(" ",e.position," ")}}function Qj(t,n){t&1&&(y(0,"th",18),N(1," Slice "),b())}function Zj(t,n){t&1&&(y(0,"mat-icon",23),N(1,"done"),b())}function Xj(t,n){if(t&1&&(y(0,"td",19),Pe(1,Zj,2,0,"mat-icon",22),b()),t&2){let e=n.$implicit;_(),P("ngIf",e?.slice)}}function Jj(t,n){t&1&&U(0,"tr",24)}function eU(t,n){t&1&&U(0,"tr",25)}function tU(t,n){if(t&1&&(y(0,"h2"),N(1),b()),t&2){let e=k();_(),vt("It\xB4s time for ",e.players()[e.currentPosition()].name," to draft")}}function nU(t,n){if(t&1&&U(0,"span",31),t&2){let e=n.$implicit;ee("outline",e)}}function iU(t,n){if(t&1){let e=Gt();y(0,"mat-chip-option",28),ve("click",function(){let r=rt(e).index,o=k(2);return ot(o.draftFaction(r))}),y(1,"mat-chip-avatar"),U(2,"img",21),b(),y(3,"span"),N(4),b(),y(5,"span",29),Pe(6,nU,1,2,"span",30),b()()}if(t&2){let e=n.$implicit,i=k(2);_(2),P("src",i.factionIcon(e),Bt)("alt",e.name)("title",e.name),_(2),gt(e.name),_(),ee("complexity-low",e.complexity===i.complexity.Low)("complexity-moderate",e.complexity===i.complexity.Moderate)("complexity-high",e.complexity===i.complexity.High),P("title",i.complexityLabel(e.complexity)),ge("aria-label",i.complexityLabel(e.complexity)),_(),P("ngForOf",i.complexityBars(e.complexity))}}function rU(t,n){if(t&1&&(y(0,"mat-card",3)(1,"mat-card-header")(2,"mat-card-title"),N(3,"Faction to draft"),b()(),y(4,"mat-card-content")(5,"mat-chip-listbox",26),Pe(6,iU,7,13,"mat-chip-option",27),b()()()),t&2){let e=k();_(6),P("ngForOf",e.draftFactions())}}function oU(t,n){if(t&1){let e=Gt();y(0,"mat-chip-option",28),ve("click",function(){let r=rt(e).index,o=k(2);return ot(o.draftPosition(r))}),y(1,"span"),N(2),b()()}if(t&2){let e=n.$implicit;_(2),gt(e)}}function sU(t,n){if(t&1&&(y(0,"mat-card",3)(1,"mat-card-header")(2,"mat-card-title"),N(3,"Position to draft"),b()(),y(4,"mat-card-content")(5,"mat-chip-listbox",26),Pe(6,oU,3,1,"mat-chip-option",27),b()()()),t&2){let e=k();_(6),P("ngForOf",e.positions())}}function aU(t,n){if(t&1){let e=Gt();y(0,"mat-chip-option",28),ve("click",function(){let r=rt(e).index,o=k(2);return ot(o.draftSlice(r))}),y(1,"span"),N(2,"Slice"),b()()}}function cU(t,n){if(t&1&&(y(0,"mat-card",3)(1,"mat-card-header")(2,"mat-card-title"),N(3,"Slices to draft"),b()(),y(4,"mat-card-content")(5,"mat-chip-listbox",26),Pe(6,aU,3,0,"mat-chip-option",27),b()()()),t&2){let e=k();_(6),P("ngForOf",e.slices())}}var sM=(()=>{class t{constructor(){this.settingsService=u($i),this.complexity=Me,this.displayedColumns=["name","faction","position","slice"],this.factions=Ge(()=>zi.factions.filter(e=>this.settingsService.settings().editions.includes(e.edition))),this.draftFactions=W([]),this.players=W([]),this.positions=W([]),this.slices=W([]),this.currentPosition=W(0),this.incomplete=Ge(()=>this.players().some(e=>!e.position||!e.faction||!e.slice)),this.increment=1,this.playerForm=new ji({name:new Ui(null,cn.required)})}ngOnDestroy(){this.players.set([]),this.draftFactions.set([]),this.playerForm.reset()}addPlayer(e){if(this.playerForm.valid){let i=this.playerForm.get("name")?.value;this.playerForm.reset(),this.players.update(r=>[...r,{name:i}]),e.focus()}}shuffle(e){this.draftFactions.set(this.shuffleFisherYates([...this.factions()]).slice(0,this.players().length+this.settingsService.settings().additionalFactions)),this.players.set(this.shuffleFisherYates([...this.players()])),this.positions.set(this.players().map((i,r)=>this.formatter(r+1))),this.slices.set(this.players().map(()=>!0)),e.disabled=!0}shuffleFisherYates(e){let i=e.length;for(;i--;){let r=Math.floor(Math.random()*(i+1));[e[i],e[r]]=[e[r],e[i]]}return e}formatter(e){switch(e){case 1:return"Speaker";case 2:return e+"nd";case 3:return e+"rd";default:return e+"th"}}complexityLabel(e){return Me[e]}complexityBars(e){switch(e){case Me.Low:return[!1,!0,!0];case Me.Moderate:return[!1,!1,!0];case Me.High:return[!1,!1,!1]}}factionIcon(e){let i=Na[Number(e.id)];return i?`assets/factions/${i}`:void 0}draftPosition(e){this.players.update(i=>i.map((r,o)=>o===this.currentPosition()?te(w({},r),{position:this.positions()[e]}):r)),this.positions.update(i=>i.filter((r,o)=>o!==e)),this.progressCounter()}draftSlice(e){this.players.update(i=>i.map((r,o)=>o===this.currentPosition()?te(w({},r),{slice:this.slices()[e]}):r)),this.slices.update(i=>i.filter((r,o)=>o!==e)),this.progressCounter()}draftFaction(e){this.players.update(i=>i.map((r,o)=>o===this.currentPosition()?te(w({},r),{faction:this.draftFactions()[e]}):r)),this.draftFactions.update(i=>i.filter((r,o)=>o!==e)),this.progressCounter()}progressCounter(){this.currentPosition.update(e=>e+this.increment),this.currentPosition()===-1?(this.currentPosition.set(0),this.increment*=-1):this.currentPosition()===this.players().length&&(this.currentPosition.set(this.players().length-1),this.increment*=-1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=A({type:t,selectors:[["app-draft"]],standalone:!1,decls:32,vars:8,consts:[["shuffleButton",""],["nameInput",""],["appearance","outlined",4,"ngIf"],["appearance","outlined"],["mat-table","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","faction"],["matColumnDef","position"],["matColumnDef","slice"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["type","button","mat-mini-fab","",3,"click"],[4,"ngIf"],[3,"formGroup"],["formControlName","name","matInput",""],["type","submit","mat-mini-fab","",3,"click"],["mat-header-cell",""],["mat-cell",""],["class","faction-icon",3,"src","alt","title",4,"ngIf"],[1,"faction-icon",3,"src","alt","title"],["aria-hidden","false",4,"ngIf"],["aria-hidden","false"],["mat-header-row",""],["mat-row",""],[1,"mat-mdc-chip-set-stacked"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"faction-complexity",3,"title"],["class","complexity-bar",3,"outline",4,"ngFor","ngForOf"],[1,"complexity-bar"]],template:function(i,r){if(i&1){let o=Gt();Pe(0,Hj,14,1,"mat-card",2),U(1,"br"),y(2,"mat-card",3)(3,"mat-card-header")(4,"mat-card-title"),N(5,"Players"),b()(),y(6,"mat-card-content")(7,"table",4),Ti(8,5),Pe(9,zj,2,0,"th",6)(10,$j,2,1,"td",7),ki(),Ti(11,8),Pe(12,Gj,2,0,"th",6)(13,Wj,2,1,"td",7),ki(),Ti(14,9),Pe(15,Kj,2,0,"th",6)(16,Yj,2,1,"td",7),ki(),Ti(17,10),Pe(18,Qj,2,0,"th",6)(19,Xj,2,1,"td",7),ki(),Pe(20,Jj,1,0,"tr",11)(21,eU,1,0,"tr",12),b(),U(22,"mat-divider"),b(),y(23,"mat-card-actions")(24,"button",13,0),ve("click",function(){rt(o);let a=Un(25);return ot(r.shuffle(a))}),y(26,"mat-icon"),N(27,"shuffle"),b()()()(),Pe(28,tU,2,1,"h2",14)(29,rU,7,1,"mat-card",2)(30,sU,7,1,"mat-card",2)(31,cU,7,1,"mat-card",2)}i&2&&(P("ngIf",!r.draftFactions().length),_(7),P("dataSource",r.players()),_(13),P("matHeaderRowDef",r.displayedColumns),_(),P("matRowDefColumns",r.displayedColumns),_(7),P("ngIf",r.incomplete()),_(),P("ngIf",!r.players()[r.currentPosition()]?.faction),_(),P("ngIf",!r.players()[r.currentPosition()]?.position),_(),P("ngIf",!r.players()[r.currentPosition()]?.slice))},dependencies:[$_,Aa,eo,aN,no,io,to,Km,jl,Vl,ro,pr,Ym,La,YN,ZN,tM,XN,QN,nM,JN,eM,iM,rM,zr,Zo,Ea,Zr,Da,xa,Hi,rs],styles:["mat-chip-option[_ngcontent-%COMP%]{padding-right:56px;position:relative}.faction-icon[_ngcontent-%COMP%]{height:25px;object-fit:contain;width:25px}.faction-complexity[_ngcontent-%COMP%]{align-items:flex-start;display:flex;gap:2px;justify-content:flex-start;position:absolute;right:16px;top:50%;transform:translateY(-50%)}.complexity-bar[_ngcontent-%COMP%]{box-sizing:border-box;display:block;height:8px;width:16px}.complexity-low[_ngcontent-%COMP%]   .complexity-bar[_ngcontent-%COMP%]{background-color:green;color:green}.complexity-moderate[_ngcontent-%COMP%]   .complexity-bar[_ngcontent-%COMP%]{background-color:#ff0;color:#ff0}.complexity-high[_ngcontent-%COMP%]   .complexity-bar[_ngcontent-%COMP%]{background-color:red;color:red}.complexity-low[_ngcontent-%COMP%]   .complexity-bar.outline[_ngcontent-%COMP%]{background-color:transparent!important;border:2px solid green}.complexity-moderate[_ngcontent-%COMP%]   .complexity-bar.outline[_ngcontent-%COMP%]{background-color:transparent!important;border:2px solid yellow}"]})}}return t})();var aM=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=A({type:t,selectors:[["app-home"]],standalone:!1,decls:13,vars:0,consts:[["mat-button","","routerLink","/settings"],["mat-button","","routerLink","/tech"],["mat-button","","routerLink","/draft"],["mat-button","","routerLink","/slice"]],template:function(i,r){i&1&&(y(0,"mat-list")(1,"mat-list-item")(2,"button",0),N(3,"Settings"),b()(),y(4,"mat-list-item")(5,"button",1),N(6,"Tech"),b()(),y(7,"mat-list-item")(8,"button",2),N(9,"Draft"),b()(),y(10,"mat-list-item")(11,"button",3),N(12,"Slice Generator"),b()()())},dependencies:[ZI,XI,Pa,ba],encapsulation:2})}}return t})();var lU=["*",[["mat-toolbar-row"]]],dU=["*","mat-toolbar-row"],uU=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),rh=(()=>{class t{_elementRef=u(z);_platform=u(qe);_document=u(ne);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["mat-toolbar"]],contentQueries:function(i,r,o){if(i&1&&pt(o,uU,5),i&2){let s;X(s=J())&&(r._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,r){i&2&&(Nn(r.color?"mat-"+r.color:""),ee("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:dU,decls:2,vars:0,template:function(i,r){i&1&&(Ne(lU),F(0),F(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2})}return t})();var cM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({imports:[ke]})}return t})();var yb=new S("CdkAccordion"),dM=(()=>{class t{_stateChanges=new I;_openCloseAllActions=new I;id=u(yt).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",H]},exportAs:["cdkAccordion"],features:[ye([{provide:yb,useExisting:t}]),Xe]})}return t})(),uM=(()=>{class t{accordion=u(yb,{optional:!0,skipSelf:!0});_changeDetectorRef=u(et);_expansionDispatcher=u(Ll);_openCloseAllSubscription=pe.EMPTY;closed=new se;opened=new se;destroyed=new se;expandedChange=new se;id=u(yt).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let i=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,i)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=W(!1);_removeUniqueSelectionListener=()=>{};ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,i)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===i&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",H],disabled:[2,"disabled","disabled",H]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[ye([{provide:yb,useValue:void 0}])]})}return t})(),fM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({})}return t})();var Gl=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},_b=class extends Gl{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,e,i,r,o,s){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null,this.directives=s||null}},so=class extends Gl{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},bb=class extends Gl{element;constructor(n){super(),this.element=n instanceof z?n.nativeElement:n}},oh=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof _b)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof so)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof bb)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},ql=class extends oh{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(Ei,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||he.NULL,o=r.get(ze,i.injector);e=_f(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var mM=(()=>{class t extends oh{_moduleRef=u(Ei,{optional:!0});_document=u(ne);_viewContainerRef=u(st);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new se;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[le]})}return t})(),sh=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({})}return t})();var fU=["body"],mU=["bodyWrapper"],hU=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],pU=["mat-expansion-panel-header","*","mat-action-row"];function gU(t,n){}var vU=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],yU=["mat-panel-title","mat-panel-description","*"];function _U(t,n){t&1&&(at(0,"span",1),Xn(),at(1,"svg",2),gn(2,"path",3),ht()())}var Sb=new S("MAT_ACCORDION"),hM=new S("MAT_EXPANSION_PANEL"),bU=(()=>{class t{_template=u(Ct);_expansionPanel=u(hM,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["ng-template","matExpansionPanelContent",""]]})}return t})(),pM=new S("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),wb=(()=>{class t extends uM{_viewContainerRef=u(st);_animationsDisabled=Rt();_document=u(ne);_ngZone=u(V);_elementRef=u(z);_renderer=u($e);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new se;afterCollapse=new se;_inputChanges=new I;accordion=u(Sb,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=u(yt).getId("mat-expansion-panel-header-");constructor(){super();let e=u(pM,{optional:!0});this._expansionDispatcher=u(Ll),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(Pt(null),Te(()=>this.expanded&&!this._portal),St(1)).subscribe(()=>{this._portal=new so(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,i=this._body.nativeElement;return e===i||i.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:i})=>{e===this._bodyWrapper?.nativeElement&&i==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(i,r,o){if(i&1&&pt(o,bU,5),i&2){let s;X(s=J())&&(r._lazyContent=s.first)}},viewQuery:function(i,r){if(i&1&&qt(fU,5)(mU,5),i&2){let o;X(o=J())&&(r._body=o.first),X(o=J())&&(r._bodyWrapper=o.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(i,r){i&2&&ee("mat-expanded",r.expanded)("mat-expansion-panel-spacing",r._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",H],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[ye([{provide:Sb,useValue:void 0},{provide:hM,useExisting:t}]),le,Xe],ngContentSelectors:pU,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(i,r){i&1&&(Ne(hU),F(0),y(1,"div",2,0)(3,"div",3,1)(5,"div",4),F(6,1),Pe(7,gU,0,0,"ng-template",5),b(),F(8,2),b()()),i&2&&(_(),ge("inert",r.expanded?null:""),_(2),P("id",r.id),ge("aria-labelledby",r._headerId),_(4),P("cdkPortalOutlet",r._portal))},dependencies:[mM],styles:[`.mat-expansion-panel {
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
`],encapsulation:2})}return t})();var Cb=(()=>{class t{panel=u(wb,{host:!0});_element=u(z);_focusMonitor=u(Gi);_changeDetectorRef=u(et);_parentChangeSubscription=pe.EMPTY;constructor(){u(xt).load(An);let e=this.panel,i=u(pM,{optional:!0}),r=u(new Hn("tabindex"),{optional:!0}),o=e.accordion?e.accordion._stateChanges.pipe(Te(s=>!!(s.hideToggle||s.togglePosition))):ut;this.tabIndex=parseInt(r||"")||0,this._parentChangeSubscription=mn(e.opened,e.closed,o,e._inputChanges.pipe(Te(s=>!!(s.hideToggle||s.disabled||s.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(Te(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),i&&(this.expandedHeight=i.expandedHeight,this.collapsedHeight=i.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Ra(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,i){e?this._focusMonitor.focusVia(this._element,e,i):this._element.nativeElement.focus(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(i,r){i&1&&ve("click",function(){return r._toggle()})("keydown",function(s){return r._keydown(s)}),i&2&&(ge("id",r.panel._headerId)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r._getPanelId())("aria-expanded",r._isExpanded())("aria-disabled",r.panel.disabled),Yo("height",r._getHeaderHeight()),ee("mat-expanded",r._isExpanded())("mat-expansion-toggle-indicator-after",r._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",r._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ri(e)]},ngContentSelectors:yU,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(i,r){i&1&&(Ne(vU),at(0,"span",0),F(1),F(2,1),F(3,2),ht(),Q(4,_U,3,0,"span",1)),i&2&&(ee("mat-content-hide-toggle",!r._showToggle()),_(4),Z(r._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
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
`],encapsulation:2})}return t})(),gM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]})}return t})(),vM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return t})(),yM=(()=>{class t extends dM{_keyManager;_ownHeaders=new En;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(Pt(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(i=>i.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new mr(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ie(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["mat-accordion"]],contentQueries:function(i,r,o){if(i&1&&pt(o,Cb,5),i&2){let s;X(s=J())&&(r._headers=s)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(i,r){i&2&&ee("mat-accordion-multi",r.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",H],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[ye([{provide:Sb,useExisting:t}]),le]})}return t})(),_M=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({imports:[fM,sh,ke]})}return t})();function SU(t,n){t&1&&U(0,"span",1)}function wU(t,n){if(t&1&&zt(0,SU,1,0,"span",1,sr),t&2){let e=k();$t(e.dots(e.deltaTechColor()[e.colorEnum.red]))}}function CU(t,n){t&1&&U(0,"span",2)}function DU(t,n){if(t&1&&zt(0,CU,1,0,"span",2,sr),t&2){let e=k();$t(e.dots(e.deltaTechColor()[e.colorEnum.green]))}}function xU(t,n){t&1&&U(0,"span",3)}function EU(t,n){if(t&1&&zt(0,xU,1,0,"span",3,sr),t&2){let e=k();$t(e.dots(e.deltaTechColor()[e.colorEnum.yellow]))}}function IU(t,n){t&1&&U(0,"span",4)}function NU(t,n){if(t&1&&zt(0,IU,1,0,"span",4,sr),t&2){let e=k();$t(e.dots(e.deltaTechColor()[e.colorEnum.blue]))}}function MU(t,n){t&1&&U(0,"span",5)}function TU(t,n){if(t&1&&zt(0,MU,1,0,"span",5,sr),t&2){let e=k();$t(e.dots(e.deltaTechColor()[e.colorEnum.black]))}}var SM=(()=>{class t{dots(e){return Array.from({length:e},(i,r)=>r)}constructor(){this.techColors=Jt({}),this.provided=Jt({}),this.colorEnum=g,this.deltaTechColor=Ge(()=>{let e=this.techColors(),i=this.provided(),r={};for(let o of Object.keys(e)){let s=Number.parseInt(o);r[s]=e[s]-(i[s]??0)}return r})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=A({type:t,selectors:[["app-tech-color"]],inputs:{techColors:[1,"techColors"],provided:[1,"provided"]},standalone:!1,decls:6,vars:5,consts:[[1,"missingTech"],[1,"dot",2,"background-color","red"],[1,"dot",2,"background-color","green"],[1,"dot",2,"background-color","yellow"],[1,"dot",2,"background-color","blue"],[1,"dot",2,"background-color","black"]],template:function(i,r){i&1&&(y(0,"div",0),Q(1,wU,2,0),Q(2,DU,2,0),Q(3,EU,2,0),Q(4,NU,2,0),Q(5,TU,2,0),b()),i&2&&(_(),Z(r.deltaTechColor()[r.colorEnum.red]!==void 0&&r.deltaTechColor()[r.colorEnum.red]>0?1:-1),_(),Z(r.deltaTechColor()[r.colorEnum.green]!==void 0&&r.deltaTechColor()[r.colorEnum.green]>0?2:-1),_(),Z(r.deltaTechColor()[r.colorEnum.yellow]!==void 0&&r.deltaTechColor()[r.colorEnum.yellow]>0?3:-1),_(),Z(r.deltaTechColor()[r.colorEnum.blue]!==void 0&&r.deltaTechColor()[r.colorEnum.blue]>0?4:-1),_(),Z(r.deltaTechColor()[r.colorEnum.black]!==void 0&&r.deltaTechColor()[r.colorEnum.black]>0?5:-1))},styles:[".missingTech[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:4px;margin-top:8px}.dot[_ngcontent-%COMP%]{border-radius:50%;display:block;height:10px;width:10px}"]})}}return t})();var RU=t=>({color:t});function AU(t,n){if(t&1){let e=Gt();y(0,"button",7),ve("click",function(r){rt(e);let o=k();return ot(o.researchMe(r))}),y(1,"mat-icon"),N(2," highlight_off "),b()()}}function OU(t,n){if(t&1){let e=Gt();y(0,"button",8),ve("click",function(r){rt(e);let o=k();return ot(o.researchMe(r))}),y(1,"mat-icon"),N(2," radio_button_unchecked "),b()()}}function FU(t,n){if(t&1){let e=Gt();y(0,"button",9),ve("click",function(r){rt(e);let o=k();return ot(o.researchMe(r))}),y(1,"mat-icon"),N(2," check_circle "),b()()}}var wM=(()=>{class t{techColor(){switch(this.tech().tech.provides){case g.black:return"white";case g.blue:return"blue";case g.red:return"red";case g.green:return"green";case g.yellow:return"yellow"}}constructor(){this.tech=Jt({tech:{id:0,name:"",requirements:[],description:"",provides:0,edition:p.Base},provided:{},researched:!1,researchDistance:0,available:!1}),this.provided=Jt({}),this.researched=new se,this.showDescription=W(!1)}researchMe(e){e.cancelBubble=!0,this.researched.emit(this.tech())}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=A({type:t,selectors:[["app-tech"]],inputs:{tech:[1,"tech"],provided:[1,"provided"]},outputs:{researched:"researched"},standalone:!1,decls:14,vars:10,consts:[["hideToggle","",1,"headers-align"],[3,"ngStyle"],[3,"techColors","provided"],["color","warn","mat-mini-fab","",3,"click",4,"ngIf"],["color","accent","mat-mini-fab","",3,"click",4,"ngIf"],["color","primary","mat-mini-fab","",3,"click",4,"ngIf"],[3,"innerHTML"],["color","warn","mat-mini-fab","",3,"click"],["color","accent","mat-mini-fab","",3,"click"],["color","primary","mat-mini-fab","",3,"click"]],template:function(i,r){i&1&&(y(0,"mat-expansion-panel",0)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon",1),N(4," arrow_circle_up "),b(),y(5,"p"),N(6),b()(),y(7,"mat-panel-description"),U(8,"app-tech-color",2),y(9,"div"),Pe(10,AU,3,0,"button",3)(11,OU,3,0,"button",4)(12,FU,3,0,"button",5),b()()(),U(13,"p",6),b()),i&2&&(_(3),P("ngStyle",ey(8,RU,r.techColor())),_(3),gt(r.tech().tech.name),_(2),P("techColors",r.tech().tech.requirements)("provided",r.provided()),_(2),P("ngIf",!r.tech().available),_(),P("ngIf",r.tech().available&&!r.tech().researched),_(),P("ngIf",r.tech().researched),_(),P("innerHTML",r.tech().tech.description,gv))},dependencies:[Aa,wb,Cb,vM,gM,Ym,Zo,Sy,SM],styles:[".headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]{justify-content:right;align-items:center;margin-right:0}.headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]{padding-right:0}.headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-left:5px}.headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{padding-right:5px}.headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%]{margin-right:0;flex-grow:4}"]})}}return t})();function LU(t,n){if(t&1){let e=Gt();y(0,"app-tech",9),ve("researched",function(r){rt(e);let o=k();return ot(o.onResearched(r))}),b()}if(t&2){let e=n.$implicit,i=k();P("tech",e)("provided",i.provided())}}var CM=(()=>{class t{constructor(){this.state=W(void 0),this.provided=W({[g.blue]:0,[g.red]:0,[g.green]:0,[g.yellow]:0,[g.black]:0}),this.colorEnum=g,this.Arr=Array,this.faction=Jt(),this.tech=Jt([])}factionIcon(e){let i=e?Na[Number(e.id)]:void 0;return i?`assets/factions/${i}`:void 0}distanceSorter(e,i){return e.researched&&!i.researched?-1:!e.researched&&i.researched?1:e.available&&!i.available?-1:!e.available&&i.available?1:e.tech.name<i.tech.name&&e.researchDistance===i.researchDistance?-1:e.tech.name>i.tech.name&&e.researchDistance===i.researchDistance?1:e.researchDistance-i.researchDistance}ngOnInit(){let e=w({},this.provided()),i=this.tech().map(r=>{let o=this.faction()?.startingtech.indexOf(r.id)!==-1;return o&&e[r.provides]++,{tech:r,researched:o,provided:e,available:!1,researchDistance:0}});this.provided.set(e),this.state.set({faction:this.faction(),tech:i}),this.state.update(r=>r&&te(w({},r),{tech:r.tech.map(o=>(this.updateRequirements(o),o)).sort(this.distanceSorter)}))}updateRequirements(e){e.available=this.checkForMatchingRequirements(e,this.provided())}checkForMatchingRequirements(e,i){let r=0;for(let o in e.tech.requirements)e.provided[o]<e.tech.requirements[o]&&(r+=e.tech.requirements[o]-e.provided[o]);return e.researchDistance=r,r===0}onResearched(e){let i=w({},this.provided());e.researched=!e.researched,e.tech.provides!==void 0&&(e.researched?i[e.tech.provides]++:i[e.tech.provides]--),this.provided.set(i),this.state.update(r=>r&&te(w({},r),{tech:r.tech.map(o=>te(w({},o),{provided:i})).map(o=>(this.updateRequirements(o),o)).sort(this.distanceSorter)}))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=A({type:t,selectors:[["app-tech-picker"]],inputs:{faction:[1,"faction"],tech:[1,"tech"]},standalone:!1,decls:17,vars:10,consts:[["color","primary"],[1,"faction-icon",3,"src","alt","title"],[1,"spacer"],[2,"color","red"],[2,"color","green"],[2,"color","yellow"],[2,"color","blue"],[2,"color","white"],[3,"tech","provided","researched",4,"ngFor","ngForOf"],[3,"researched","tech","provided"]],template:function(i,r){i&1&&(y(0,"mat-toolbar",0),U(1,"img",1),y(2,"span"),N(3),b(),U(4,"span",2),y(5,"h3",3),N(6),b(),y(7,"h3",4),N(8),b(),y(9,"h3",5),N(10),b(),y(11,"h3",6),N(12),b(),y(13,"h3",7),N(14),b()(),y(15,"mat-accordion"),Pe(16,LU,1,2,"app-tech",8),b()),i&2&&(_(),P("src",r.factionIcon(r.state()?.faction),Bt)("alt",r.state()?.faction?.name??"")("title",r.state()?.faction?.name??""),_(2),vt("The ",r.state()?.faction?.name),_(3),gt(r.provided()[r.colorEnum.red]),_(2),gt(r.provided()[r.colorEnum.green]),_(2),gt(r.provided()[r.colorEnum.yellow]),_(2),gt(r.provided()[r.colorEnum.blue]),_(2),gt(r.provided()[r.colorEnum.black]),_(2),P("ngForOf",r.state()?.tech))},dependencies:[rh,yM,zr,wM],styles:[".faction-icon[_ngcontent-%COMP%]{height:32px;margin-left:8px;margin-right:8px;object-fit:contain;width:32px}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}h3[_ngcontent-%COMP%]{margin:0 0 0 12px;text-align:right}"]})}}return t})();function VU(t,n){if(t&1){let e=Gt();y(0,"mat-chip-option",5),ve("click",function(){let r=rt(e).$implicit,o=k(2);return ot(o.factionClick_hdl(r))}),y(1,"mat-chip-avatar"),U(2,"img",6),b(),y(3,"span"),N(4),b()()}if(t&2){let e=n.$implicit,i=k(2);_(2),P("src",i.factionIcon(e),Bt)("alt",e.name)("title",e.name),_(2),gt(e.name)}}function jU(t,n){if(t&1&&(y(0,"mat-card",2)(1,"mat-card-header")(2,"mat-card-title"),N(3,"Choose faction"),b()(),y(4,"mat-card-content")(5,"mat-chip-listbox",3),Pe(6,VU,5,4,"mat-chip-option",4),b()()()),t&2){let e=k();_(6),P("ngForOf",e.factions())}}function UU(t,n){if(t&1&&U(0,"app-tech-picker",7),t&2){let e=k();P("faction",e.selectedFaction())("tech",e.tech())}}var DM=(()=>{class t{constructor(){this.settingsService=u($i),this.factions=Ge(()=>zi.factions.filter(e=>this.settingsService.settings().editions.includes(e.edition))),this.selectedFaction=W(void 0),this.tech=W([])}factionIcon(e){let i=Na[Number(e.id)];return i?`assets/factions/${i}`:void 0}factionClick_hdl(e){this.selectedFaction.set(e),e.edition===p.PoK?this.tech.set([...zi.genericTech,...e.tech]):this.selectedFaction()?.id===11?this.tech.set([...zi.genericTech,...this.factions().flatMap(i=>i.tech)].filter(i=>this.settingsService.settings().editions.includes(i.edition))):this.tech.set([...zi.genericTech,...e.tech].filter(i=>this.settingsService.settings().editions.includes(i.edition)))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=A({type:t,selectors:[["app-faction-chooser"]],standalone:!1,decls:2,vars:2,consts:[["appearance","outlined",4,"ngIf"],[3,"faction","tech",4,"ngIf"],["appearance","outlined"],[1,"mat-mdc-chip-set-stacked"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"faction-icon",3,"src","alt","title"],[3,"faction","tech"]],template:function(i,r){i&1&&Pe(0,jU,7,1,"mat-card",0)(1,UU,1,2,"app-tech-picker",1),i&2&&(P("ngIf",!r.selectedFaction()),_(),P("ngIf",r.selectedFaction()))},dependencies:[eo,no,io,to,Km,jl,Vl,zr,Zo,CM],styles:["section[_ngcontent-%COMP%]{width:100%}app-tech-picker[_ngcontent-%COMP%]{display:block;width:100%}button[_ngcontent-%COMP%]{display:flex;width:100%;height:120px;align-items:center;justify-content:space-between}.faction-icon[_ngcontent-%COMP%]{height:25px;object-fit:contain;width:25px}"]})}}return t})();function xM(t){t||(t=u(nt));let n=new re(e=>{if(t.destroyed){e.next();return}return t.onDestroy(e.next.bind(e))});return e=>e.pipe(Ve(n))}var HU=["*"],EM=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&ee("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:HU,decls:1,vars:0,template:function(i,r){i&1&&(Ne(),F(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2})}return t})();var zU=["input"],$U=["*"],Db={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},GU=new S("mat-checkbox-default-options",{providedIn:"root",factory:()=>Db}),tn=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(tn||{}),xb=class{source;checked},Eb=(()=>{class t{_elementRef=u(z);_changeDetectorRef=u(et);_ngZone=u(V);_animationsDisabled=Rt();_options=u(GU,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new xb;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new se;indeterminateChange=new se;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=tn.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){u(xt).load(An);let e=u(new Hn("tabindex"),{optional:!0});this._options=this._options||Db,this.color=this._options.color||Db.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=u(yt).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(tn.Indeterminate):this._transitionCheckState(this.checked?tn.Checked:tn.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=W(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?tn.Checked:tn.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case tn.Init:if(i===tn.Checked)return this._animationClasses.uncheckedToChecked;if(i==tn.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case tn.Unchecked:return i===tn.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case tn.Checked:return i===tn.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case tn.Indeterminate:return i===tn.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["mat-checkbox"]],viewQuery:function(i,r){if(i&1&&qt(zU,5),i&2){let o;X(o=J())&&(r._inputElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,r){i&2&&(an("id",r.id),ge("tabindex",null)("aria-label",null)("aria-labelledby",null),Nn(r.color?"mat-"+r.color:"mat-accent"),ee("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",H],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",H],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",H],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Ri(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",H],checked:[2,"checked","checked",H],disabled:[2,"disabled","disabled",H],indeterminate:[2,"indeterminate","indeterminate",H]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[ye([{provide:is,useExisting:Tt(()=>t),multi:!0},{provide:Xr,useExisting:t,multi:!0}]),Xe],ngContentSelectors:$U,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition","for"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-internal-form-field-label","mdc-label"]],template:function(i,r){if(i&1&&(Ne(),y(0,"label",3),ve("click",function(s){return r._preventBubblingFromLabel(s)}),y(1,"span",4,0),U(3,"span",5),y(4,"input",6,1),ve("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(s){return r._onInteractionEvent(s)}),b(),U(6,"span",7),y(7,"span",8),Xn(),y(8,"svg",9),U(9,"path",10),b(),Ec(),U(10,"span",11),b(),U(11,"span",12),b(),y(12,"span",13,2),F(14),b()()),i&2){let o=Un(2);P("labelPosition",r.labelPosition)("for",r.inputId),_(4),ee("mdc-checkbox--selected",r.checked),P("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),ge("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),_(7),P("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0)}},dependencies:[Fm,EM],styles:[`.mdc-checkbox {
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
`],encapsulation:2})}return t})(),ah=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({imports:[Eb,ke]})}return t})();var IM=(()=>{class t{constructor(){this.settingsService=u($i),this.destroyRef=u(nt),this.settings=this.settingsService.settings,this.form=new ji({base:new Ui({value:!0,disabled:!0},{nonNullable:!0}),pok:new Ui(this.settings().editions.includes(p.PoK),{nonNullable:!0}),te:new Ui(this.settings().editions.includes(p.TE),{nonNullable:!0}),additionalFactions:new Ui(this.settings().additionalFactions,{nonNullable:!0})}),this.form.valueChanges.pipe(xM(this.destroyRef)).subscribe(()=>this.persistSettings())}persistSettings(){let e=this.form.getRawValue(),i=[p.Base];e.pok&&i.push(p.PoK),e.te&&i.push(p.TE),this.settingsService.settings.set({editions:i,additionalFactions:Math.max(0,e.additionalFactions)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=A({type:t,selectors:[["app-settings",8,"component"]],decls:17,vars:1,consts:[["appearance","outlined"],[3,"formGroup"],["formControlName","base"],["formControlName","pok"],["formControlName","te"],["matInput","","type","number","formControlName","additionalFactions","min","0","step","1"]],template:function(i,r){i&1&&(y(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),N(3,"Settings"),b()(),y(4,"mat-card-content")(5,"form",1)(6,"mat-checkbox",2),N(7,"Base"),b(),Ni(),y(8,"mat-checkbox",3),N(9,"Prophecy of Kings"),b(),Ni(),y(10,"mat-checkbox",4),N(11,"Thunder Edge"),b(),Ni(),U(12,"br"),y(13,"mat-form-field")(14,"mat-label"),N(15,"Additional factions for drafting"),b(),U(16,"input",5),Ni(),b()()()()),i&2&&(_(5),P("formGroup",r.form),_(),Mi(),_(2),Mi(),_(2),Mi(),_(6),Mi())},dependencies:[Oa,eo,no,io,to,ah,Eb,gr,ro,pr,Ba,La,Ia,Ea,Zr,Al,Da,xa,Rl,Hi,rs],encapsulation:2})}}return t})();var NM=(t,n)=>n.id,MM=(t,n)=>n.name,TM=(t,n)=>e=>{rt(n);let i=k(4);return ot(i.anomalyNames[e])},kM=(t,n)=>e=>{rt(n);let i=k(4);return ot(i.wormholeNames[e])};function WU(t,n){t&1&&(y(0,"mat-error"),N(1," Enter the number of players. "),b())}function KU(t,n){if(t&1&&(y(0,"mat-error"),N(1),b()),t&2){let e=k();_(),vt(" Enter a number between 4 and ",e.maxPlayerCount(),". ")}}function YU(t,n){if(t&1&&(y(0,"span",7),U(1,"img",8),y(2,"strong"),N(3),b()()),t&2){k();let e=na(1),i=k(2);_(),P("src",i.generalIconPath+i.specialtyIcons[i.TechSpecialty.BIOTIC],Bt),_(2),gt(e.bioticSpecialties)}}function QU(t,n){if(t&1&&(y(0,"span",7),U(1,"img",9),y(2,"strong"),N(3),b()()),t&2){k();let e=na(1),i=k(2);_(),P("src",i.generalIconPath+i.specialtyIcons[i.TechSpecialty.WARFARE],Bt),_(2),gt(e.warfareSpecialties)}}function ZU(t,n){if(t&1&&(y(0,"span",7),U(1,"img",10),y(2,"strong"),N(3),b()()),t&2){k();let e=na(1),i=k(2);_(),P("src",i.generalIconPath+i.specialtyIcons[i.TechSpecialty.PROPULSION],Bt),_(2),gt(e.propulsionSpecialties)}}function XU(t,n){if(t&1&&(y(0,"span",7),U(1,"img",11),y(2,"strong"),N(3),b()()),t&2){k();let e=na(1),i=k(2);_(),P("src",i.generalIconPath+i.specialtyIcons[i.TechSpecialty.CYBERNETIC],Bt),_(2),gt(e.cyberneticSpecialties)}}function JU(t,n){if(t&1&&U(0,"img",16),t&2){let e=n.$implicit,i=k(7);P("src",i.generalIconPath+i.traitIcons[e],Bt)("alt",i.traitNames[e])("title",i.traitNames[e])}}function eH(t,n){if(t&1&&(y(0,"span",13),zt(1,JU,1,3,"img",16,ea),b()),t&2){let e=k().$implicit;_(),$t(e.traits)}}function tH(t,n){if(t&1&&U(0,"img",16),t&2){let e=n.$implicit,i=k(7);P("src",i.generalIconPath+i.specialtyIcons[e],Bt)("alt",i.specialtyNames[e])("title",i.specialtyNames[e])}}function nH(t,n){if(t&1&&(y(0,"span",14),zt(1,tH,1,3,"img",16,ea),b()),t&2){let e=k().$implicit;_(),$t(e.techSpecialty)}}function iH(t,n){t&1&&U(0,"img",15)}function rH(t,n){if(t&1&&(y(0,"li"),N(1),Q(2,eH,3,0,"span",13),Q(3,nH,3,0,"span",14),Q(4,iH,1,0,"img",15),b()),t&2){let e=n.$implicit;_(),ta(" ",e.name," (",e.resources,"/",e.influence,") "),_(),Z(e.traits.length?2:-1),_(),Z(e.techSpecialty?.length?3:-1),_(),Z(e.legendary?4:-1)}}function oH(t,n){if(t&1&&(y(0,"ul"),zt(1,rH,5,6,"li",null,MM),b()),t&2){let e=k().$implicit;_(),$t(e.planets)}}function sH(t,n){if(t&1&&(y(0,"span",12),N(1),b()),t&2){let e=k().$implicit;_(),vt("Anomaly: ",e.anomalies.map(ia(1,TM,n)).join(", "))}}function aH(t,n){if(t&1&&(y(0,"span",12),N(1),b()),t&2){let e=k().$implicit;_(),vt("Wormhole: ",e.wormholes.map(ia(1,kM,n)).join(", "))}}function cH(t,n){if(t&1&&(y(0,"li")(1,"strong"),N(2),b(),Q(3,oH,3,0,"ul"),Q(4,sH,2,2,"span",12),Q(5,aH,2,2,"span",12),b()),t&2){let e=n.$implicit;_(2),vt("System ",e.id),_(),Z(e.planets?.length?3:-1),_(),Z(e.anomalies!==void 0?4:-1),_(),Z(e.wormholes?.length?5:-1)}}function lH(t,n){if(t&1&&U(0,"img",16),t&2){let e=n.$implicit,i=k(7);P("src",i.generalIconPath+i.traitIcons[e],Bt)("alt",i.traitNames[e])("title",i.traitNames[e])}}function dH(t,n){if(t&1&&(y(0,"span",13),zt(1,lH,1,3,"img",16,ea),b()),t&2){let e=k().$implicit;_(),$t(e.traits)}}function uH(t,n){if(t&1&&U(0,"img",16),t&2){let e=n.$implicit,i=k(7);P("src",i.generalIconPath+i.specialtyIcons[e],Bt)("alt",i.specialtyNames[e])("title",i.specialtyNames[e])}}function fH(t,n){if(t&1&&(y(0,"span",14),zt(1,uH,1,3,"img",16,ea),b()),t&2){let e=k().$implicit;_(),$t(e.techSpecialty)}}function mH(t,n){t&1&&U(0,"img",15)}function hH(t,n){if(t&1&&(y(0,"li"),N(1),Q(2,dH,3,0,"span",13),Q(3,fH,3,0,"span",14),Q(4,mH,1,0,"img",15),b()),t&2){let e=n.$implicit;_(),ta(" ",e.name," (",e.resources,"/",e.influence,") "),_(),Z(e.traits.length?2:-1),_(),Z(e.techSpecialty?.length?3:-1),_(),Z(e.legendary?4:-1)}}function pH(t,n){if(t&1&&(y(0,"ul"),zt(1,hH,5,6,"li",null,MM),b()),t&2){let e=k().$implicit;_(),$t(e.planets)}}function gH(t,n){if(t&1&&(y(0,"span",12),N(1),b()),t&2){let e=k().$implicit;_(),vt("Anomaly: ",e.anomalies.map(ia(1,TM,n)).join(", "))}}function vH(t,n){if(t&1&&(y(0,"span",12),N(1),b()),t&2){let e=k().$implicit;_(),vt("Wormhole: ",e.wormholes.map(ia(1,kM,n)).join(", "))}}function yH(t,n){if(t&1&&(y(0,"li")(1,"strong"),N(2),b(),Q(3,pH,3,0,"ul"),Q(4,gH,2,2,"span",12),Q(5,vH,2,2,"span",12),b()),t&2){let e=n.$implicit;_(2),vt("System ",e.id),_(),Z(e.planets?.length?3:-1),_(),Z(e.anomalies!==void 0?4:-1),_(),Z(e.wormholes?.length?5:-1)}}function _H(t,n){if(t&1&&(y(0,"mat-card",5),mf(1),y(2,"mat-card-header")(3,"mat-card-title"),N(4),b()(),y(5,"mat-card-content")(6,"div",6),Q(7,YU,4,2,"span",7),Q(8,QU,4,2,"span",7),Q(9,ZU,4,2,"span",7),Q(10,XU,4,2,"span",7),b(),y(11,"h3"),N(12,"Blue systems"),b(),y(13,"ul"),zt(14,cH,6,4,"li",null,NM),b(),y(16,"h3"),N(17,"Red systems"),b(),y(18,"ul"),zt(19,yH,6,4,"li",null,NM),b()()()),t&2){let e=n.$implicit,i=n.$index;_();let r=Jv(k(2).sliceSummary(e));_(3),ta("Slice ",i+1," (",r.resources," / ",r.influence,")"),_(3),Z(r.bioticSpecialties>0?7:-1),_(),Z(r.warfareSpecialties>0?8:-1),_(),Z(r.propulsionSpecialties>0?9:-1),_(),Z(r.cyberneticSpecialties>0?10:-1),_(4),$t(e.blue),_(5),$t(e.red)}}function bH(t,n){if(t&1&&(y(0,"div",4),zt(1,_H,21,8,"mat-card",5,sr),b()),t&2){let e=k();_(),$t(e.generatedSlices)}}var RM=(()=>{class t{constructor(){this.settingsService=u($i),this.PlanetTrait=L,this.TechSpecialty=Le,this.maxPlayerCount=Ge(()=>{let e=this.settingsService.settings().editions;return e.includes(p.PoK)||e.includes(p.TE)?8:6}),this.blueSystems=Ge(()=>zi.systems.filter(e=>this.settingsService.settings().editions.includes(e.edition)&&e.type===T.Blue)),this.redSystems=Ge(()=>zi.systems.filter(e=>this.settingsService.settings().editions.includes(e.edition)&&e.type===T.Red)),this.form=new ji({playerCount:new Ui(4,{nonNullable:!0,validators:[cn.required,cn.min(4),cn.max(6)]})}),this.generatedSlices=[],this.anomalyNames={[ct.NEBULA]:"Nebula",[ct.GRAVITY_RIFT]:"Gravity Rift",[ct.ASTEROID_FIELD]:"Asteroid Field",[ct.SUPERNOVA]:"Supernova",[ct.ENTROPIC_SCAR]:"Entropic Scar"},this.wormholeNames={[ln.ALPHA]:"\u03B1",[ln.BETA]:"\u03B2",[ln.GAMMA]:"\u03B3",[ln.DELTA]:"\u03B4"},this.traitNames={[L.HAZARDOUS]:"Hazardous",[L.INDUSTRIAL]:"Industrial",[L.CULTURAL]:"Cultural"},this.traitIcons={[L.HAZARDOUS]:"Hazardous.png",[L.INDUSTRIAL]:"Industrial.png",[L.CULTURAL]:"Cultural.png"},this.specialtyNames={[Le.BIOTIC]:"Biotic",[Le.WARFARE]:"Warfare",[Le.PROPULSION]:"Propulsion",[Le.CYBERNETIC]:"Cybernetic"},this.specialtyIcons={[Le.BIOTIC]:"Biotic dark.png",[Le.WARFARE]:"Warfare dark.png",[Le.PROPULSION]:"Propulsion dark.png",[Le.CYBERNETIC]:"Cybernetic dark.png"},this.generalIconPath="assets/generalIcons/",Zt(()=>{let e=this.maxPlayerCount(),i=this.form.controls.playerCount;i.setValidators([cn.required,cn.min(4),cn.max(e)]),i.value>e&&i.setValue(e),i.updateValueAndValidity({emitEvent:!1})})}generateSlices(){if(this.form.invalid){this.form.markAllAsTouched();return}let e=this.form.controls.playerCount.value,i=this.shuffleFisherYates([...this.blueSystems()]),r=this.shuffleFisherYates([...this.redSystems()]);this.generatedSlices=Array.from({length:e},()=>({blue:i.splice(0,3),red:r.splice(0,2)})).sort((o,s)=>{let a=this.sliceSummary(o),c=this.sliceSummary(s);return c.resources-a.resources||c.influence-a.influence})}sliceSummary(e){let i=[...e.blue,...e.red].flatMap(r=>r.planets??[]);return{resources:i.reduce((r,o)=>r+Number(o.resources),0),influence:i.reduce((r,o)=>r+Number(o.influence),0),bioticSpecialties:this.countSpecialties(i,Le.BIOTIC),warfareSpecialties:this.countSpecialties(i,Le.WARFARE),propulsionSpecialties:this.countSpecialties(i,Le.PROPULSION),cyberneticSpecialties:this.countSpecialties(i,Le.CYBERNETIC)}}countSpecialties(e,i){return e.reduce((r,o)=>r+(o.techSpecialty?.includes(i)?1:0),0)}shuffleFisherYates(e){let i=e.length;for(;i--;){let r=Math.floor(Math.random()*(i+1));[e[i],e[r]]=[e[r],e[i]]}return e}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=A({type:t,selectors:[["app-slice-generator",8,"component"]],decls:17,vars:6,consts:[["appearance","outlined"],[3,"formGroup"],["matInput","","type","number","formControlName","playerCount","min","4","step","1",3,"max"],["mat-raised-button","","type","button",3,"click"],[1,"slice-list"],["appearance","outlined",1,"slice-card"],["aria-label","Slice overview",1,"slice-summary"],[1,"summary-item"],["alt","Biotic specialties","title","Biotic specialties",3,"src"],["alt","Warfare specialties","title","Warfare specialties",3,"src"],["alt","Propulsion specialties","title","Propulsion specialties",3,"src"],["alt","Cybernetic specialties","title","Cybernetic specialties",3,"src"],[1,"system-feature"],["aria-label","Planet traits",1,"planet-icons"],["aria-label","Technology specialties",1,"planet-icons"],["src","assets/generalIcons/Legendary white.png","alt","Legendary","title","Legendary",1,"planet-icon"],[3,"src","alt","title"]],template:function(i,r){i&1&&(y(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),N(3,"Slice Generator"),b()(),y(4,"mat-card-content")(5,"form",1)(6,"mat-form-field")(7,"mat-label"),N(8,"Number of players"),b(),U(9,"input",2),Ni(),y(10,"mat-hint"),N(11),b(),Q(12,WU,2,0,"mat-error"),Q(13,KU,2,1,"mat-error"),b(),y(14,"button",3),ve("click",function(){return r.generateSlices()}),N(15," Generate slices "),b()()()(),Q(16,bH,3,0,"div",4)),i&2&&(_(5),P("formGroup",r.form),_(4),P("max",r.maxPlayerCount()),Mi(),_(2),vt("4 to ",r.maxPlayerCount()," players"),_(),Z(r.form.controls.playerCount.hasError("required")?12:-1),_(),Z(r.form.controls.playerCount.hasError("min")||r.form.controls.playerCount.hasError("max")?13:-1),_(3),Z(r.generatedSlices.length?16:-1))},dependencies:[Oa,eo,no,io,to,Qm,Pa,gr,ro,pr,Bl,Q_,Ba,La,Ia,Ea,Zr,Al,Da,xa,Rl,I_,Hi,rs],styles:[".slice-list[_ngcontent-%COMP%]{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));margin-top:16px}.slice-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:4px}.slice-summary[_ngcontent-%COMP%]{display:grid;gap:4px 12px;grid-template-columns:repeat(3,minmax(0,1fr));margin-bottom:16px}.summary-item[_ngcontent-%COMP%]{align-items:center;display:inline-flex;gap:4px}.resource-influence[_ngcontent-%COMP%]{grid-column:1 / -1}.summary-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:24px;object-fit:contain;width:24px}.slice-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:0}.slice-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.system-feature[_ngcontent-%COMP%]{display:block;font-size:.9em;font-style:italic}.planet-icons[_ngcontent-%COMP%]{display:inline-flex;gap:3px;margin-left:5px;vertical-align:middle}.planet-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .planet-icon[_ngcontent-%COMP%]{height:20px;width:20px;object-fit:contain;vertical-align:middle}"]})}}return t})();var SH=[{path:"",component:aM,pathMatch:"full"},{path:"tech",component:DM},{path:"draft",component:sM},{path:"settings",component:IM},{path:"slice",component:RM}],AM=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=j({type:t})}static{this.\u0275inj=B({imports:[gm.forRoot(SH),gm]})}}return t})();var OM=EI();function UM(t){return new ch(t.get(oo),t.get(ne))}var ch=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=Dt(-this._previousScrollPosition.left),n.style.top=Dt(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",s=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),OM&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),OM&&(i.scrollBehavior=o,r.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function HM(t,n){return new lh(t.get(Xm),t.get(V),t.get(oo),n)}var lh=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Te(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Wl=class{enable(){}disable(){}attach(){}};function Ib(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,s=t.left>e.right;return i||r||o||s})}function FM(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,s=t.right>e.right;return i||r||o||s})}function ph(t,n){return new dh(t.get(Xm),t.get(oo),t.get(V),n)}var dh=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();Ib(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},zM=(()=>{class t{_injector=u(he);noop=()=>new Wl;close=e=>HM(this._injector,e);block=()=>UM(this._injector);reposition=e=>ph(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})(),ja=class{positionStrategy;scrollStrategy=new Wl;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var uh=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var $M=(()=>{class t{_attachedOverlays=[];_document=u(ne);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})(),GM=(()=>{class t extends $M{_ngZone=u(V);_renderer=u(mt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})(),qM=(()=>{class t extends $M{_platform=u(qe);_ngZone=u(V);_renderer=u(mt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=vn(e)};_clickListener=e=>{let i=vn(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],c=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,c))){if(PM(a.overlayElement,i)||PM(a.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();function PM(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var WM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return t})(),KM=(()=>{class t{_platform=u(qe);_containerElement;_document=u(ne);_styleLoader=u(xt);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||P_()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),P_()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(WM)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})(),Nb=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Mb(t){return t&&t.nodeType===1}var fh=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new I;_attachments=new I;_detachments=new I;_positionStrategy;_scrollStrategy;_locationChanges=pe.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new I;_outsidePointerEvents=new I;_afterNextRenderRef;constructor(n,e,i,r,o,s,a,c,l,d=!1,f,m){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=c,this._outsideClickDispatcher=l,this._animationsDisabled=d,this._injector=f,this._renderer=m,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ht(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=w(w({},this._config),n),this._updateElementSize()}setDirection(n){this._config=te(w({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=Dt(this._config.width),n.height=Dt(this._config.height),n.minWidth=Dt(this._config.minWidth),n.minHeight=Dt(this._config.minHeight),n.maxWidth=Dt(this._config.maxWidth),n.maxHeight=Dt(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Mb(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(n){}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Nb(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=R_(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Ht(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},LM="cdk-overlay-connected-position-bounding-box",wH=/([A-Za-z%]+)$/;function gh(t,n){return new mh(n,t.get(oo),t.get(ne),t.get(qe),t.get(KM))}var mh=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new I;_resizeSubscription=pe.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(LM),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],s;for(let a of this._preferredPositions){let c=this._getOriginPoint(n,r,a),l=this._getOverlayPoint(c,e,a),d=this._getOverlayFit(l,e,i,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,c);return}if(this._canFitWithFlexibleDimensions(d,l,i)){o.push({position:a,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:l,originPoint:c,position:a,overlayRect:e})}if(o.length){let a=null,c=-1;for(let l of o){let d=l.boundingBoxRect.width*l.boundingBoxRect.height*(l.position.weight||1);d>c&&(c=d,a=l)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&ms(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(LM),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof z?this._origin.nativeElement:Mb(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,a=this._isRtl()?n.left:n.right;r=i.originX=="start"?s:a}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=VM(e),{x:s,y:a}=n,c=this._getOffset(r,"x"),l=this._getOffset(r,"y");c&&(s+=c),l&&(a+=l);let d=0-s,f=s+o.width-i.width,m=0-a,h=a+o.height-i.height,v=this._subtractOverflows(o.width,d,f),C=this._subtractOverflows(o.height,m,h),E=v*C;return{visibleArea:E,isCompletelyWithinViewport:o.width*o.height===E,fitsInViewportVertically:C===o.height,fitsInViewportHorizontally:v==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,s=BM(this._overlayRef.getConfig().minHeight),a=BM(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||s!=null&&s<=r,l=n.fitsInViewportHorizontally||a!=null&&a<=o;return c&&l}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=VM(e),o=this._viewportRect,s=Math.max(n.x+r.width-o.width,0),a=Math.max(n.y+r.height-o.height,0),c=Math.max(o.top-i.top-n.y,0),l=Math.max(o.left-i.left-n.x,0),d=0,f=0;return r.width<=o.width?d=l||-s:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?f=c||-a:f=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:f},{x:n.x+d,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!CH(this._lastScrollVisibility,i)){let r=new uh(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,s,a;if(e.overlayY==="top")s=n.y,o=i.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")a=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-a+this._getViewportMarginTop();else{let h=Math.min(i.bottom-n.y+i.top,n.y),v=this._lastBoundingBoxSize.height;o=h*2,s=n.y-h,o>v&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-v/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,l=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,f,m;if(l)m=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(c)f=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let h=Math.min(i.right-n.x+i.left,n.x),v=this._lastBoundingBoxSize.width;d=h*2,f=n.x-h,d>v&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-v/2)}return{top:s,left:f,bottom:a,right:m,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;r.width=Dt(i.width),r.height=Dt(i.height),r.top=Dt(i.top)||"auto",r.bottom=Dt(i.bottom)||"auto",r.left=Dt(i.left)||"auto",r.right=Dt(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=Dt(o)),s&&(r.maxWidth=Dt(s))}this._lastBoundingBoxSize=i,ms(this._boundingBox.style,r)}_resetBoundingBoxStyles(){ms(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){ms(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();ms(i,this._getExactOverlayY(e,n,d)),ms(i,this._getExactOverlayX(e,n,d))}else i.position="static";let a="",c=this._getOffset(e,"x"),l=this._getOffset(e,"y");c&&(a+=`translateX(${c}px) `),l&&(a+=`translateY(${l}px)`),i.transform=a.trim(),s.maxHeight&&(r?i.maxHeight=Dt(s.maxHeight):o&&(i.maxHeight="")),s.maxWidth&&(r?i.maxWidth=Dt(s.maxWidth):o&&(i.maxWidth="")),ms(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;r.bottom=`${s-(o.y+this._overlayRect.height)}px`}else r.top=Dt(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let s;if(this._isRtl()?s=n.overlayX==="end"?"left":"right":s=n.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;r.right=`${a-(o.x+this._overlayRect.width)}px`}else r.left=Dt(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:FM(n,i),isOriginOutsideView:Ib(n,i),isOverlayClipped:FM(e,i),isOverlayOutsideView:Ib(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&R_(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof z)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function ms(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function BM(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(wH);return!e||e==="px"?parseFloat(n):null}return t||null}function VM(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function CH(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var jM="cdk-global-overlay-wrapper";function YM(t){return new hh}var hh=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(jM),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:s,maxHeight:a}=i,c=(r==="100%"||r==="100vw")&&(!s||s==="100%"||s==="100vw"),l=(o==="100%"||o==="100vh")&&(!a||a==="100%"||a==="100vh"),d=this._xPosition,f=this._xOffset,m=this._overlayRef.getConfig().direction==="rtl",h="",v="",C="";c?C="flex-start":d==="center"?(C="center",m?v=f:h=f):m?d==="left"||d==="end"?(C="flex-end",h=f):(d==="right"||d==="start")&&(C="flex-start",v=f):d==="left"||d==="start"?(C="flex-start",h=f):(d==="right"||d==="end")&&(C="flex-end",v=f),n.position=this._cssPosition,n.marginLeft=c?"0":h,n.marginTop=l?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?"0":v,e.justifyContent=C,e.alignItems=l?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(jM),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},QM=(()=>{class t{_injector=u(he);global(){return YM()}flexibleConnectedTo(e){return gh(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})(),ZM=new S("OVERLAY_DEFAULT_CONFIG");function vh(t,n){t.get(xt).load(WM);let e=t.get(KM),i=t.get(ne),r=t.get(yt),o=t.get(Nt),s=t.get(li),a=t.get($e,null,{optional:!0})||t.get(mt).createRenderer(null,null),c=new ja(n),l=t.get(ZM,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||s.value,!i.body||!("showPopover"in i.body)?c.usePopover=!1:c.usePopover=n?.usePopover??l;let d=i.createElement("div"),f=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),f.appendChild(d),c.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let m=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Mb(m)?m.after(f):m?.type==="parent"?m.element.appendChild(f):e.getContainerElement().appendChild(f),new fh(new ql(d,o,t),f,d,c,t.get(V),t.get(GM),i,t.get(Ai),t.get(qM),n?.disableAnimations??t.get(Br,null,{optional:!0})==="NoopAnimations",t.get(ze),a)}var XM=(()=>{class t{scrollStrategies=u(zM);_positionBuilder=u(QM);_injector=u(he);create(e){return vh(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var Tb=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({providers:[XM],imports:[ke,sh,Hl,Hl]})}return t})();var xH=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],EH=["mat-icon, [matMenuItemIcon]","*"];function IH(t,n){t&1&&(Xn(),y(0,"svg",2),U(1,"polygon",3),b())}var NH=["*"];function MH(t,n){if(t&1){let e=Gt();at(0,"div",0),lf("click",function(){rt(e);let r=k();return ot(r.closed.emit("click"))})("animationstart",function(r){rt(e);let o=k();return ot(o._onAnimationStart(r.animationName))})("animationend",function(r){rt(e);let o=k();return ot(o._onAnimationDone(r.animationName))})("animationcancel",function(r){rt(e);let o=k();return ot(o._onAnimationDone(r.animationName))}),at(1,"div",1),F(2),ht()()}if(t&2){let e=k();Nn(e._classList),ee("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),an("id",e.panelId),ge("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var Rb=new S("MAT_MENU_PANEL"),Kl=(()=>{class t{_elementRef=u(z);_document=u(ne);_focusMonitor=u(Gi);_parentMenu=u(Rb,{optional:!0});_changeDetectorRef=u(et);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new I;_focused=new I;_highlighted=!1;_triggersSubmenu=!1;constructor(){u(xt).load(An),this._parentMenu?.addItem?.(this)}focus(e,i){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,i):this._getHostElement().focus(i),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),i=e.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<i.length;r++)i[r].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(i,r){i&1&&ve("click",function(s){return r._checkDisabled(s)})("mouseenter",function(){return r._handleMouseEnter()}),i&2&&(ge("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),ee("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",H],disableRipple:[2,"disableRipple","disableRipple",H]},exportAs:["matMenuItem"],ngContentSelectors:EH,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(i,r){i&1&&(Ne(xH),F(0),y(1,"span",0),F(2,1),b(),U(3,"div",1),Q(4,IH,2,0,":svg:svg",2)),i&2&&(_(3),P("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),_(),Z(r._triggersSubmenu?4:-1))},dependencies:[Fm],encapsulation:2})}return t})();var TH=new S("MatMenuContent");var kH=new S("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),kb="_mat-menu-enter",yh="_mat-menu-exit",Ha=(()=>{class t{_elementRef=u(z);_changeDetectorRef=u(et);_injector=u(he);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Rt();_allItems;_directDescendantItems=new En;_classList={};_panelAnimationState="void";_animationDone=new I;_isAnimating=W(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let i=this._previousPanelClass,r=w({},this._classList);i&&i.length&&i.split(" ").forEach(o=>{r[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{r[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=r}_previousPanelClass="";get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new se;close=this.closed;panelId=u(yt).getId("mat-menu-panel-");constructor(){let e=u(kH);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new mr(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Pt(this._directDescendantItems),Je(e=>mn(...e.map(i=>i._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let i=this._keyManager;if(this._panelAnimationState==="enter"&&i.activeItem?._hasFocus()){let r=e.toArray(),o=Math.max(0,Math.min(r.length-1,i.activeItemIndex||0));r[o]&&!r[o].disabled?i.setActiveItem(o):i.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Pt(this._directDescendantItems),Je(i=>mn(...i.map(r=>r._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let i=e.keyCode,r=this._keyManager;switch(i){case 27:Ra(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(i===38||i===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Ht(()=>{let i=this._resolvePanel();if(!i||!i.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(e).setFirstItemActive(),!r.activeItem&&i&&i.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,i=this.yPosition){this._classList=te(w({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":i==="above","mat-menu-below":i==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let i=e===yh;(i||e===kb)&&(i&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(i?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===kb||e===yh)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let i=this._resolvePanel();i&&(i.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(yh),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?kb:yh)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Pt(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(i=>i._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["mat-menu"]],contentQueries:function(i,r,o){if(i&1&&pt(o,TH,5)(o,Kl,5)(o,Kl,4),i&2){let s;X(s=J())&&(r.lazyContent=s.first),X(s=J())&&(r._allItems=s),X(s=J())&&(r.items=s)}},viewQuery:function(i,r){if(i&1&&qt(Ct,5),i&2){let o;X(o=J())&&(r.templateRef=o.first)}},hostVars:3,hostBindings:function(i,r){i&2&&ge("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",H],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:H(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[ye([{provide:Rb,useExisting:t}])],ngContentSelectors:NH,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(i,r){i&1&&(Ne(),sf(0,MH,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2})}return t})(),RH=new S("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(he);return()=>ph(t)}});var Ua=new WeakMap,AH=(()=>{class t{_canHaveBackdrop;_element=u(z);_viewContainerRef=u(st);_menuItemInstance=u(Kl,{optional:!0,self:!0});_dir=u(li,{optional:!0});_focusMonitor=u(Gi);_ngZone=u(V);_injector=u(he);_scrollStrategy=u(RH);_changeDetectorRef=u(et);_animationsDisabled=Rt();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=pe.EMPTY;_menuCloseSubscription=pe.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(i=>{this._destroyMenu(i),(i==="click"||i==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(i)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let i=u(Rb,{optional:!0});this._parentMaterialMenu=i instanceof Ha?i:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Ua.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let i=this._menu;if(this._menuOpen||!i)return;this._pendingRemoval?.unsubscribe();let r=Ua.get(i);Ua.set(i,this),r&&r!==this&&r._closeMenu();let o=this._createOverlay(i),s=o.getConfig(),a=s.positionStrategy;this._setPosition(i,a),this._canHaveBackdrop?s.hasBackdrop=i.hasBackdrop==null?!this._triggersSubmenu():i.hasBackdrop:s.hasBackdrop=i.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(i)),i.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),i.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,i.direction=this.dir,e&&i.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),i instanceof Ha&&(i._setIsOpen(!0),i._directDescendantItems.changes.pipe(Ve(i.close)).subscribe(()=>{a.withLockedPosition(!1).reapplyLastPosition(),a.withLockedPosition(!0)}))}focus(e,i){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,i):this._element.nativeElement.focus(i)}_destroyMenu(e){let i=this._overlayRef,r=this._menu;!i||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof Ha&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(St(1)).subscribe(()=>{i.detach(),Ua.has(r)||r.lazyContent?.detach()}),r._setIsOpen(!1)):(i.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&Ua.delete(r),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let i=this._getOverlayConfig(e);this._subscribeToPositions(e,i.positionStrategy),this._overlayRef=vh(this._injector,i),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof Ha&&this._menu._handleKeydown(r)})}return this._overlayRef}_getOverlayConfig(e){return new ja({positionStrategy:gh(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,i){e.setPositionClasses&&i.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let o=r.connectionPair.overlayX==="start"?"after":"before",s=r.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,s)})})}_setPosition(e,i){let[r,o]=e.xPosition==="before"?["end","start"]:["start","end"],[s,a]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[c,l]=[s,a],[d,f]=[r,o],m=0;if(this._triggersSubmenu()){if(f=r=e.xPosition==="before"?"start":"end",o=d=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let h=this._parentMaterialMenu.items.first;this._parentInnerPadding=h?h._getHostElement().offsetTop:0}m=s==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(c=s==="top"?"bottom":"top",l=a==="top"?"bottom":"top");i.withPositions([{originX:r,originY:c,overlayX:d,overlayY:s,offsetY:m},{originX:o,originY:c,overlayX:f,overlayY:s,offsetY:m},{originX:r,originY:l,overlayX:d,overlayY:a,offsetY:-m},{originX:o,originY:l,overlayX:f,overlayY:a,offsetY:-m}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),i=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:Y(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Te(s=>this._menuOpen&&s!==this._menuItemInstance)):Y();return mn(e,r,o,i)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new so(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return Ua.get(e)===this}_triggerIsAriaDisabled(){return H(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(i){Ko()};static \u0275dir=x({type:t})}return t})(),JM=(()=>{class t extends AH{_cleanupTouchstart;_hoverSubscription=pe.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new se;onMenuOpen=this.menuOpened;menuClosed=new se;onMenuClose=this.menuClosed;constructor(){super(!0);let e=u($e);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",i=>{cs(i)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){as(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let i=e.keyCode;(i===13||i===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(i===39&&this.dir==="ltr"||i===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(i,r){i&1&&ve("click",function(s){return r._handleClick(s)})("mousedown",function(s){return r._handleMousedown(s)})("keydown",function(s){return r._handleKeydown(s)}),i&2&&ge("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[le]})}return t})();var eT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({imports:[Jr,Tb,ke,Zm]})}return t})();var tT=(()=>{class t{editionLabel(e){switch(e){case p.Base:return" ";case p.PoK:return"PoK";case p.TE:return"TE"}}constructor(){this.matIconRegistry=u(jm),this.domSanitizer=u(ll),this.settingsService=u($i),this.settingsLabel=Ge(()=>this.settingsService.settings().editions.map(e=>this.editionLabel(e)).join(" + ")||"No edition"),this.matIconRegistry.addSvgIcon("arborec",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/arborec.svg")).addSvgIcon("barony of letnev",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/barony of letnev.svg")).addSvgIcon("clan of saar",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/clan of saar.svg")).addSvgIcon("embers of muat",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/embers of muat.svg")).addSvgIcon("emirates of hacan",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/emirates of hacan.svg")).addSvgIcon("federation of sol",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/federation of sol.svg")).addSvgIcon("ghosts of creuss",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/ghosts of creuss.svg")).addSvgIcon("l1z1x mindnet",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/l1z1x mindnet.svg")).addSvgIcon("mentak coalition",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/mentak coalition.svg")).addSvgIcon("naalu collective",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/naalu collective.svg")).addSvgIcon("nekro virus",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/nekro virus.svg")).addSvgIcon("sardakk n'orr",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/sardakk n'orr.svg")).addSvgIcon("universities of jol-nar",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/universities of jol-nar.svg")).addSvgIcon("winnu",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/winnu.svg")).addSvgIcon("xxcha kingdom",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/xxcha kingdom.svg")).addSvgIcon("argent flight",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/argent flight.svg")).addSvgIcon("empyrean",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/empyrean.svg")).addSvgIcon("mahact gene-sorcerers",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/mahact gene-sorcerers.svg")).addSvgIcon("naaz-rokha alliance",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/naaz-rokha alliance.svg")).addSvgIcon("nomad",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/nomad.svg")).addSvgIcon("titans of ul",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/titans of ul.svg")).addSvgIcon("vuil'raith cabal",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/vuil'raith cabal.svg")).addSvgIcon("yin brotherhood",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/yin brotherhood.svg")).addSvgIcon("yssaril tribes",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/yssaril tribes.svg"))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=A({type:t,selectors:[["app-root"]],standalone:!1,decls:17,vars:2,consts:[["menu","matMenu"],["mat-button","",3,"matMenuTriggerFor"],["mat-menu-item","","routerLink","/settings"],["mat-menu-item","","routerLink","/tech"],["mat-menu-item","","routerLink","/draft"],["mat-menu-item","","routerLink","/slice"]],template:function(i,r){if(i&1&&(y(0,"mat-toolbar")(1,"button",1)(2,"mat-icon"),N(3,"menu"),b()(),y(4,"mat-menu",null,0)(6,"button",2),N(7,"Settings"),b(),y(8,"button",3),N(9,"Tech"),b(),y(10,"button",4),N(11,"Draft"),b(),y(12,"button",5),N(13,"Slice Generator"),b()(),y(14,"span"),N(15),b()(),U(16,"router-outlet")),i&2){let o=Un(5);_(),P("matMenuTriggerFor",o),_(14),vt("Siggis TI4 Buddy ",r.settingsLabel())}},dependencies:[rh,Ha,Kl,JM,Aa,Pa,wl,ba],encapsulation:2})}}return t})();var Ee=(function(t){return t[t.State=0]="State",t[t.Transition=1]="Transition",t[t.Sequence=2]="Sequence",t[t.Group=3]="Group",t[t.Animate=4]="Animate",t[t.Keyframes=5]="Keyframes",t[t.Style=6]="Style",t[t.Trigger=7]="Trigger",t[t.Reference=8]="Reference",t[t.AnimateChild=9]="AnimateChild",t[t.AnimateRef=10]="AnimateRef",t[t.Query=11]="Query",t[t.Stagger=12]="Stagger",t})(Ee||{}),ui="*";function nT(t,n=null){return{type:Ee.Sequence,steps:t,options:n}}function Ab(t){return{type:Ee.Style,styles:t,offset:null}}var vr=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(n=0,e=0){this.totalTime=n+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(n=>n()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(n){this._position=this.totalTime?n*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},za=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(n){this.players=n;let e=0,i=0,r=0,o=this.players.length;o==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(s=>{s.onDone(()=>{++e==o&&this._onFinish()}),s.onDestroy(()=>{++i==o&&this._onDestroy()}),s.onStart(()=>{++r==o&&this._onStart()})}),this.totalTime=this.players.reduce((s,a)=>Math.max(s,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this.players.forEach(n=>n.init())}onStart(n){this._onStartFns.push(n)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(n=>n()),this._onStartFns=[])}onDone(n){this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(n=>n.play())}pause(){this.players.forEach(n=>n.pause())}restart(){this.players.forEach(n=>n.restart())}finish(){this._onFinish(),this.players.forEach(n=>n.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(n=>n.destroy()),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this.players.forEach(n=>n.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(n){let e=n*this.totalTime;this.players.forEach(i=>{let r=i.totalTime?Math.min(1,e/i.totalTime):1;i.setPosition(r)})}getPosition(){let n=this.players.reduce((e,i)=>e===null||i.totalTime>e.totalTime?i:e,null);return n!=null?n.getPosition():0}beforeDestroy(){this.players.forEach(n=>{n.beforeDestroy&&n.beforeDestroy()})}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},Yl="!";function iT(t){return new D(3e3,!1)}function FH(){return new D(3100,!1)}function PH(){return new D(3101,!1)}function LH(t){return new D(3001,!1)}function BH(t){return new D(3003,!1)}function VH(t){return new D(3004,!1)}function oT(t,n){return new D(3005,!1)}function sT(){return new D(3006,!1)}function aT(){return new D(3007,!1)}function cT(t,n){return new D(3008,!1)}function lT(t){return new D(3002,!1)}function dT(t,n,e,i,r){return new D(3010,!1)}function uT(){return new D(3011,!1)}function fT(){return new D(3012,!1)}function mT(){return new D(3200,!1)}function hT(){return new D(3202,!1)}function pT(){return new D(3013,!1)}function gT(t){return new D(3014,!1)}function vT(t){return new D(3015,!1)}function yT(t){return new D(3016,!1)}function _T(t,n){return new D(3404,!1)}function jH(t){return new D(3502,!1)}function bT(t){return new D(3503,!1)}function ST(){return new D(3300,!1)}function wT(t){return new D(3504,!1)}function CT(t){return new D(3301,!1)}function DT(t,n){return new D(3302,!1)}function xT(t){return new D(3303,!1)}function ET(t,n){return new D(3400,!1)}function IT(t){return new D(3401,!1)}function NT(t){return new D(3402,!1)}function MT(t,n){return new D(3505,!1)}function yr(t){switch(t.length){case 0:return new vr;case 1:return t[0];default:return new za(t)}}function Lb(t,n,e=new Map,i=new Map){let r=[],o=[],s=-1,a=null;if(n.forEach(c=>{let l=c.get("offset"),d=l==s,f=d&&a||new Map;c.forEach((m,h)=>{let v=h,C=m;if(h!=="offset")switch(v=t.normalizePropertyName(v,r),C){case Yl:C=e.get(h);break;case ui:C=i.get(h);break;default:C=t.normalizeStyleValue(h,v,C,r);break}f.set(v,C)}),d||o.push(f),a=f,s=l}),r.length)throw jH(r);return o}function _h(t,n,e,i){switch(n){case"start":t.onStart(()=>i(e&&Ob(e,"start",t)));break;case"done":t.onDone(()=>i(e&&Ob(e,"done",t)));break;case"destroy":t.onDestroy(()=>i(e&&Ob(e,"destroy",t)));break}}function Ob(t,n,e){let i=e.totalTime,r=!!e.disabled,o=bh(t.element,t.triggerName,t.fromState,t.toState,n||t.phaseName,i??t.totalTime,r),s=t._data;return s!=null&&(o._data=s),o}function bh(t,n,e,i,r="",o=0,s){return{element:t,triggerName:n,fromState:e,toState:i,phaseName:r,totalTime:o,disabled:!!s}}function yn(t,n,e){let i=t.get(n);return i||t.set(n,i=e),i}function Bb(t){let n=t.indexOf(":"),e=t.substring(1,n),i=t.slice(n+1);return[e,i]}var UH=typeof document>"u"?null:document.documentElement;function Sh(t){let n=t.parentNode||t.host||null;return n===UH?null:n}function HH(t){return t.substring(1,6)=="ebkit"}var hs=null,rT=!1;function TT(t){hs||(hs=zH()||{},rT=hs.style?"WebkitAppearance"in hs.style:!1);let n=!0;return hs.style&&!HH(t)&&(n=t in hs.style,!n&&rT&&(n="Webkit"+t.charAt(0).toUpperCase()+t.slice(1)in hs.style)),n}function zH(){return typeof document<"u"?document.body:null}function Vb(t,n){for(;n;){if(n===t)return!0;n=Sh(n)}return!1}function jb(t,n,e){if(e)return Array.from(t.querySelectorAll(n));let i=t.querySelector(n);return i?[i]:[]}var $H=1e3,Ub="{{",GH="}}",Hb="ng-enter",wh="ng-leave",Ql="ng-trigger",Zl=".ng-trigger",zb="ng-animating",Ch=".ng-animating";function qi(t){if(typeof t=="number")return t;let n=t.match(/^(-?[\.\d]+)(m?s)/);return!n||n.length<2?0:Fb(parseFloat(n[1]),n[2])}function Fb(t,n){return n==="s"?t*$H:t}function Xl(t,n,e){return typeof t=="object"&&t!==null&&Object.hasOwn(t,"duration")?t:WH(t,n,e)}var qH=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function WH(t,n,e){let i,r=0,o="";if(typeof t=="string"){let s=t.match(qH);if(s===null)return n.push(iT(t)),{duration:0,delay:0,easing:""};i=Fb(parseFloat(s[1]),s[2]);let a=s[3];a!=null&&(r=Fb(parseFloat(a),s[4]));let c=s[5];c&&(o=c)}else i=t;if(!e){let s=!1,a=n.length;i<0&&(n.push(FH()),s=!0),r<0&&(n.push(PH()),s=!0),s&&n.splice(a,0,iT(t))}return{duration:i,delay:r,easing:o}}function kT(t){return t.length?t[0]instanceof Map?t:t.map(n=>new Map(Object.entries(n))):[]}function fi(t,n,e){n.forEach((i,r)=>{let o=Dh(r);e&&!e.has(r)&&e.set(r,t.style[o]),t.style[o]=i})}function ao(t,n){n.forEach((e,i)=>{let r=Dh(i);t.style[r]=""})}function $a(t){return Array.isArray(t)?t.length==1?t[0]:nT(t):t}function RT(t,n,e){let i=n.params||{},r=$b(t);r.length&&r.forEach(o=>{Object.hasOwn(i,o)||e.push(LH(o))})}var Pb=new RegExp(`${Ub}\\s*(.+?)\\s*${GH}`,"g");function $b(t){let n=[];if(typeof t=="string"){let e;for(;e=Pb.exec(t);)n.push(e[1]);Pb.lastIndex=0}return n}function Ga(t,n,e){let i=`${t}`,r=i.replace(Pb,(o,s)=>{let a=n[s];return a==null&&(e.push(BH(s)),a=""),a.toString()});return r==i?t:r}var KH=/-+([a-z0-9])/g;function Dh(t){return t.replace(KH,(...n)=>n[1].toUpperCase())}function AT(t,n){return t===0||n===0}function OT(t,n,e){if(e.size&&n.length){let i=n[0],r=[];if(e.forEach((o,s)=>{i.has(s)||r.push(s),i.set(s,o)}),r.length)for(let o=1;o<n.length;o++){let s=n[o];r.forEach(a=>s.set(a,xh(t,a)))}}return n}function _n(t,n,e){switch(n.type){case Ee.Trigger:return t.visitTrigger(n,e);case Ee.State:return t.visitState(n,e);case Ee.Transition:return t.visitTransition(n,e);case Ee.Sequence:return t.visitSequence(n,e);case Ee.Group:return t.visitGroup(n,e);case Ee.Animate:return t.visitAnimate(n,e);case Ee.Keyframes:return t.visitKeyframes(n,e);case Ee.Style:return t.visitStyle(n,e);case Ee.Reference:return t.visitReference(n,e);case Ee.AnimateChild:return t.visitAnimateChild(n,e);case Ee.AnimateRef:return t.visitAnimateRef(n,e);case Ee.Query:return t.visitQuery(n,e);case Ee.Stagger:return t.visitStagger(n,e);default:throw VH(n.type)}}function xh(t,n){return window.getComputedStyle(t)[n]}var aS=(()=>{class t{validateStyleProperty(e){return TT(e)}containsElement(e,i){return Vb(e,i)}getParentElement(e){return Sh(e)}query(e,i,r){return jb(e,i,r)}computeStyle(e,i,r){return r||""}animate(e,i,r,o,s,a=[],c){return new vr(r,o)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=G({token:t,factory:t.\u0275fac})}return t})(),gs=class{static NOOP=new aS},vs=class{};var YH=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),Th=class extends vs{normalizePropertyName(n,e){return Dh(n)}normalizeStyleValue(n,e,i,r){let o="",s=i.toString().trim();if(YH.has(e)&&i!==0&&i!=="0")if(typeof i=="number")o="px";else{let a=i.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&a[1].length==0&&r.push(oT(n,i))}return s+o}};var kh="*";function QH(t,n){let e=[];return typeof t=="string"?t.split(/\s*,\s*/).forEach(i=>ZH(i,e,n)):e.push(t),e}function ZH(t,n,e){if(t[0]==":"){let c=XH(t,e);if(typeof c=="function"){n.push(c);return}t=c}let i=t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(i==null||i.length<4)return e.push(vT(t)),n;let r=i[1],o=i[2],s=i[3];n.push(FT(r,s));let a=r==kh&&s==kh;o[0]=="<"&&!a&&n.push(FT(s,r))}function XH(t,n){switch(t){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,i)=>parseFloat(i)>parseFloat(e);case":decrement":return(e,i)=>parseFloat(i)<parseFloat(e);default:return n.push(yT(t)),"* => *"}}var Eh=new Set(["true","1"]),Ih=new Set(["false","0"]);function FT(t,n){let e=Eh.has(t)||Ih.has(t),i=Eh.has(n)||Ih.has(n);return(r,o)=>{let s=t==kh||t==r,a=n==kh||n==o;return!s&&e&&typeof r=="boolean"&&(s=r?Eh.has(t):Ih.has(t)),!a&&i&&typeof o=="boolean"&&(a=o?Eh.has(n):Ih.has(n)),s&&a}}var GT=":self",JH=new RegExp(`s*${GT}s*,?`,"g");function qT(t,n,e,i){return new Qb(t).build(n,e,i)}var PT="",Qb=class{_driver;constructor(n){this._driver=n}build(n,e,i){let r=new Zb(e);return this._resetContextStyleTimingState(r),_n(this,$a(n),r)}_resetContextStyleTimingState(n){n.currentQuerySelector=PT,n.collectedStyles=new Map,n.collectedStyles.set(PT,new Map),n.currentTime=0}visitTrigger(n,e){let i=e.queryCount=0,r=e.depCount=0,o=[],s=[];return n.name.charAt(0)=="@"&&e.errors.push(sT()),n.definitions.forEach(a=>{if(this._resetContextStyleTimingState(e),a.type==Ee.State){let c=a,l=c.name;l.toString().split(/\s*,\s*/).forEach(d=>{c.name=d,o.push(this.visitState(c,e))}),c.name=l}else if(a.type==Ee.Transition){let c=this.visitTransition(a,e);i+=c.queryCount,r+=c.depCount,s.push(c)}else e.errors.push(aT())}),{type:Ee.Trigger,name:n.name,states:o,transitions:s,queryCount:i,depCount:r,options:null}}visitState(n,e){let i=this.visitStyle(n.styles,e),r=n.options&&n.options.params||null;if(i.containsDynamicStyles){let o=new Set,s=r||{};i.styles.forEach(a=>{a instanceof Map&&a.forEach(c=>{$b(c).forEach(l=>{Object.hasOwn(s,l)||o.add(l)})})}),o.size&&e.errors.push(cT(n.name,[...o.values()]))}return{type:Ee.State,name:n.name,style:i,options:r?{params:r}:null}}visitTransition(n,e){e.queryCount=0,e.depCount=0;let i=_n(this,$a(n.animation),e),r=QH(n.expr,e.errors);return{type:Ee.Transition,matchers:r,animation:i,queryCount:e.queryCount,depCount:e.depCount,options:ps(n.options)}}visitSequence(n,e){return{type:Ee.Sequence,steps:n.steps.map(i=>_n(this,i,e)),options:ps(n.options)}}visitGroup(n,e){let i=e.currentTime,r=0,o=n.steps.map(s=>{e.currentTime=i;let a=_n(this,s,e);return r=Math.max(r,e.currentTime),a});return e.currentTime=r,{type:Ee.Group,steps:o,options:ps(n.options)}}visitAnimate(n,e){let i=iz(n.timings,e.errors);e.currentAnimateTimings=i;let r,o=n.styles?n.styles:Ab({});if(o.type==Ee.Keyframes)r=this.visitKeyframes(o,e);else{let s=n.styles,a=!1;if(!s){a=!0;let l={};i.easing&&(l.easing=i.easing),s=Ab(l)}e.currentTime+=i.duration+i.delay;let c=this.visitStyle(s,e);c.isEmptyStep=a,r=c}return e.currentAnimateTimings=null,{type:Ee.Animate,timings:i,style:r,options:null}}visitStyle(n,e){let i=this._makeStyleAst(n,e);return this._validateStyleAst(i,e),i}_makeStyleAst(n,e){let i=[],r=Array.isArray(n.styles)?n.styles:[n.styles];for(let a of r)typeof a=="string"?a===ui?i.push(a):e.errors.push(lT(a)):i.push(new Map(Object.entries(a)));let o=!1,s=null;return i.forEach(a=>{if(a instanceof Map&&(a.has("easing")&&(s=a.get("easing"),a.delete("easing")),!o)){for(let c of a.values())if(c.toString().indexOf(Ub)>=0){o=!0;break}}}),{type:Ee.Style,styles:i,easing:s,offset:n.offset,containsDynamicStyles:o,options:null}}_validateStyleAst(n,e){let i=e.currentAnimateTimings,r=e.currentTime,o=e.currentTime;i&&o>0&&(o-=i.duration+i.delay),n.styles.forEach(s=>{typeof s!="string"&&s.forEach((a,c)=>{let l=e.collectedStyles.get(e.currentQuerySelector),d=l.get(c),f=!0;d&&(o!=r&&o>=d.startTime&&r<=d.endTime&&(e.errors.push(dT(c,d.startTime,d.endTime,o,r)),f=!1),o=d.startTime),f&&l.set(c,{startTime:o,endTime:r}),e.options&&RT(a,e.options,e.errors)})})}visitKeyframes(n,e){let i={type:Ee.Keyframes,styles:[],options:null};if(!e.currentAnimateTimings)return e.errors.push(uT()),i;let r=1,o=0,s=[],a=!1,c=!1,l=0,d=n.steps.map(M=>{let O=this._makeStyleAst(M,e),ie=O.offset!=null?O.offset:nz(O.styles),Oe=0;return ie!=null&&(o++,Oe=O.offset=ie),c=c||Oe<0||Oe>1,a=a||Oe<l,l=Oe,s.push(Oe),O});c&&e.errors.push(fT()),a&&e.errors.push(mT());let f=n.steps.length,m=0;o>0&&o<f?e.errors.push(hT()):o==0&&(m=r/(f-1));let h=f-1,v=e.currentTime,C=e.currentAnimateTimings,E=C.duration;return d.forEach((M,O)=>{let ie=m>0?O==h?1:m*O:s[O],Oe=ie*E;e.currentTime=v+C.delay+Oe,C.duration=Oe,this._validateStyleAst(M,e),M.offset=ie,i.styles.push(M)}),i}visitReference(n,e){return{type:Ee.Reference,animation:_n(this,$a(n.animation),e),options:ps(n.options)}}visitAnimateChild(n,e){return e.depCount++,{type:Ee.AnimateChild,options:ps(n.options)}}visitAnimateRef(n,e){return{type:Ee.AnimateRef,animation:this.visitReference(n.animation,e),options:ps(n.options)}}visitQuery(n,e){let i=e.currentQuerySelector,r=n.options||{};e.queryCount++,e.currentQuery=n;let[o,s]=ez(n.selector);e.currentQuerySelector=i.length?i+" "+o:o,yn(e.collectedStyles,e.currentQuerySelector,new Map);let a=_n(this,$a(n.animation),e);return e.currentQuery=null,e.currentQuerySelector=i,{type:Ee.Query,selector:o,limit:r.limit||0,optional:!!r.optional,includeSelf:s,animation:a,originalSelector:n.selector,options:ps(n.options)}}visitStagger(n,e){e.currentQuery||e.errors.push(pT());let i=n.timings==="full"?{duration:0,delay:0,easing:"full"}:Xl(n.timings,e.errors,!0);return{type:Ee.Stagger,animation:_n(this,$a(n.animation),e),timings:i,options:null}}};function ez(t){let n=!!t.split(/\s*,\s*/).find(e=>e==GT);return n&&(t=t.replace(JH,"")),t=t.replace(/@\*/g,Zl).replace(/@\w+/g,e=>Zl+"-"+e.slice(1)).replace(/:animating/g,Ch),[t,n]}function tz(t){return t?w({},t):null}var Zb=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(n){this.errors=n}};function nz(t){if(typeof t=="string")return null;let n=null;if(Array.isArray(t))t.forEach(e=>{if(e instanceof Map&&e.has("offset")){let i=e;n=parseFloat(i.get("offset")),i.delete("offset")}});else if(t instanceof Map&&t.has("offset")){let e=t;n=parseFloat(e.get("offset")),e.delete("offset")}return n}function iz(t,n){if(typeof t=="object"&&t!==null&&Object.hasOwn(t,"duration"))return t;if(typeof t=="number"){let o=Xl(t,n).duration;return Gb(o,0,"")}let e=t;if(e.split(/\s+/).some(o=>o.charAt(0)=="{"&&o.charAt(1)=="{")){let o=Gb(0,0,"");return o.dynamic=!0,o.strValue=e,o}let r=Xl(e,n);return Gb(r.duration,r.delay,r.easing)}function ps(t){return t?(t=w({},t),t.params&&(t.params=tz(t.params))):t={},t}function Gb(t,n,e){return{duration:t,delay:n,easing:e}}function cS(t,n,e,i,r,o,s=null,a=!1){return{type:1,element:t,keyframes:n,preStyleProps:e,postStyleProps:i,duration:r,delay:o,totalTime:r+o,easing:s,subTimeline:a}}var ed=class{_map=new Map;get(n){return this._map.get(n)||[]}append(n,e){let i=this._map.get(n);i||this._map.set(n,i=[]),i.push(...e)}has(n){return this._map.has(n)}clear(){this._map.clear()}},rz=1,oz=":enter",sz=new RegExp(oz,"g"),az=":leave",cz=new RegExp(az,"g");function WT(t,n,e,i,r,o=new Map,s=new Map,a,c,l=[]){return new Xb().buildKeyframes(t,n,e,i,r,o,s,a,c,l)}var Xb=class{buildKeyframes(n,e,i,r,o,s,a,c,l,d=[]){l=l||new ed;let f=new Jb(n,e,l,r,o,d,[]);f.options=c;let m=c.delay?qi(c.delay):0;f.currentTimeline.delayNextStep(m),f.currentTimeline.setStyles([s],null,f.errors,c),_n(this,i,f);let h=f.timelines.filter(v=>v.containsAnimation());if(h.length&&a.size){let v;for(let C=h.length-1;C>=0;C--){let E=h[C];if(E.element===e){v=E;break}}v&&!v.allowOnlyTimelineStyles()&&v.setStyles([a],null,f.errors,c)}return h.length?h.map(v=>v.buildKeyframes()):[cS(e,[],[],[],0,m,"",!1)]}visitTrigger(n,e){}visitState(n,e){}visitTransition(n,e){}visitAnimateChild(n,e){let i=e.subInstructions.get(e.element);if(i){let r=e.createSubContext(n.options),o=e.currentTimeline.currentTime,s=this._visitSubInstructions(i,r,r.options);o!=s&&e.transformIntoNewTimeline(s)}e.previousNode=n}visitAnimateRef(n,e){let i=e.createSubContext(n.options);i.transformIntoNewTimeline(),this._applyAnimationRefDelays([n.options,n.animation.options],e,i),this.visitReference(n.animation,i),e.transformIntoNewTimeline(i.currentTimeline.currentTime),e.previousNode=n}_applyAnimationRefDelays(n,e,i){for(let r of n){let o=r?.delay;if(o){let s=typeof o=="number"?o:qi(Ga(o,r?.params??{},e.errors));i.delayNextStep(s)}}}_visitSubInstructions(n,e,i){let o=e.currentTimeline.currentTime,s=i.duration!=null?qi(i.duration):null,a=i.delay!=null?qi(i.delay):null;return s!==0&&n.forEach(c=>{let l=e.appendInstructionToTimeline(c,s,a);o=Math.max(o,l.duration+l.delay)}),o}visitReference(n,e){e.updateOptions(n.options,!0),_n(this,n.animation,e),e.previousNode=n}visitSequence(n,e){let i=e.subContextCount,r=e,o=n.options;if(o&&(o.params||o.delay)&&(r=e.createSubContext(o),r.transformIntoNewTimeline(),o.delay!=null)){r.previousNode.type==Ee.Style&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=Rh);let s=qi(o.delay);r.delayNextStep(s)}n.steps.length&&(n.steps.forEach(s=>_n(this,s,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>i&&r.transformIntoNewTimeline()),e.previousNode=n}visitGroup(n,e){let i=[],r=e.currentTimeline.currentTime,o=n.options&&n.options.delay?qi(n.options.delay):0;n.steps.forEach(s=>{let a=e.createSubContext(n.options);o&&a.delayNextStep(o),_n(this,s,a),r=Math.max(r,a.currentTimeline.currentTime),i.push(a.currentTimeline)}),i.forEach(s=>e.currentTimeline.mergeTimelineCollectedStyles(s)),e.transformIntoNewTimeline(r),e.previousNode=n}_visitTiming(n,e){if(n.dynamic){let i=n.strValue,r=e.params?Ga(i,e.params,e.errors):i;return Xl(r,e.errors)}else return{duration:n.duration,delay:n.delay,easing:n.easing}}visitAnimate(n,e){let i=e.currentAnimateTimings=this._visitTiming(n.timings,e),r=e.currentTimeline;i.delay&&(e.incrementTime(i.delay),r.snapshotCurrentStyles());let o=n.style;o.type==Ee.Keyframes?this.visitKeyframes(o,e):(e.incrementTime(i.duration),this.visitStyle(o,e),r.applyStylesToKeyframe()),e.currentAnimateTimings=null,e.previousNode=n}visitStyle(n,e){let i=e.currentTimeline,r=e.currentAnimateTimings;!r&&i.hasCurrentStyleProperties()&&i.forwardFrame();let o=r&&r.easing||n.easing;n.isEmptyStep?i.applyEmptyStep(o):i.setStyles(n.styles,o,e.errors,e.options),e.previousNode=n}visitKeyframes(n,e){let i=e.currentAnimateTimings,r=e.currentTimeline.duration,o=i.duration,a=e.createSubContext().currentTimeline;a.easing=i.easing,n.styles.forEach(c=>{let l=c.offset||0;a.forwardTime(l*o),a.setStyles(c.styles,c.easing,e.errors,e.options),a.applyStylesToKeyframe()}),e.currentTimeline.mergeTimelineCollectedStyles(a),e.transformIntoNewTimeline(r+o),e.previousNode=n}visitQuery(n,e){let i=e.currentTimeline.currentTime,r=n.options||{},o=r.delay?qi(r.delay):0;o&&(e.previousNode.type===Ee.Style||i==0&&e.currentTimeline.hasCurrentStyleProperties())&&(e.currentTimeline.snapshotCurrentStyles(),e.previousNode=Rh);let s=i,a=e.invokeQuery(n.selector,n.originalSelector,n.limit,n.includeSelf,!!r.optional,e.errors);e.currentQueryTotal=a.length;let c=null;a.forEach((l,d)=>{e.currentQueryIndex=d;let f=e.createSubContext(n.options,l);o&&f.delayNextStep(o),l===e.element&&(c=f.currentTimeline),_n(this,n.animation,f),f.currentTimeline.applyStylesToKeyframe();let m=f.currentTimeline.currentTime;s=Math.max(s,m)}),e.currentQueryIndex=0,e.currentQueryTotal=0,e.transformIntoNewTimeline(s),c&&(e.currentTimeline.mergeTimelineCollectedStyles(c),e.currentTimeline.snapshotCurrentStyles()),e.previousNode=n}visitStagger(n,e){let i=e.parentContext,r=e.currentTimeline,o=n.timings,s=Math.abs(o.duration),a=s*(e.currentQueryTotal-1),c=s*e.currentQueryIndex;switch(o.duration<0?"reverse":o.easing){case"reverse":c=a-c;break;case"full":c=i.currentStaggerTime;break}let d=e.currentTimeline;c&&d.delayNextStep(c);let f=d.currentTime;_n(this,n.animation,e),e.previousNode=n,i.currentStaggerTime=r.currentTime-f+(r.startTime-i.currentTimeline.startTime)}},Rh={},Jb=class t{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=Rh;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(n,e,i,r,o,s,a,c){this._driver=n,this.element=e,this.subInstructions=i,this._enterClassName=r,this._leaveClassName=o,this.errors=s,this.timelines=a,this.currentTimeline=c||new Ah(this._driver,e,0),a.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(n,e){if(!n)return;let i=n,r=this.options;i.duration!=null&&(r.duration=qi(i.duration)),i.delay!=null&&(r.delay=qi(i.delay));let o=i.params;if(o){let s=r.params;s||(s=this.options.params={}),Object.keys(o).forEach(a=>{(!e||!Object.hasOwn(s,a))&&(s[a]=Ga(o[a],s,this.errors))})}}_copyOptions(){let n={};if(this.options){let e=this.options.params;if(e){let i=n.params={};Object.keys(e).forEach(r=>{i[r]=e[r]})}}return n}createSubContext(n=null,e,i){let r=e||this.element,o=new t(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,i||0));return o.previousNode=this.previousNode,o.currentAnimateTimings=this.currentAnimateTimings,o.options=this._copyOptions(),o.updateOptions(n),o.currentQueryIndex=this.currentQueryIndex,o.currentQueryTotal=this.currentQueryTotal,o.parentContext=this,this.subContextCount++,o}transformIntoNewTimeline(n){return this.previousNode=Rh,this.currentTimeline=this.currentTimeline.fork(this.element,n),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(n,e,i){let r={duration:e??n.duration,delay:this.currentTimeline.currentTime+(i??0)+n.delay,easing:""},o=new eS(this._driver,n.element,n.keyframes,n.preStyleProps,n.postStyleProps,r,n.stretchStartingKeyframe);return this.timelines.push(o),r}incrementTime(n){this.currentTimeline.forwardTime(this.currentTimeline.duration+n)}delayNextStep(n){n>0&&this.currentTimeline.delayNextStep(n)}invokeQuery(n,e,i,r,o,s){let a=[];if(r&&a.push(this.element),n.length>0){n=n.replace(sz,"."+this._enterClassName),n=n.replace(cz,"."+this._leaveClassName);let c=i!=1,l=this._driver.query(this.element,n,c);i!==0&&(l=i<0?l.slice(l.length+i,l.length):l.slice(0,i)),a.push(...l)}return!o&&a.length==0&&s.push(gT(e)),a}},Ah=class t{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(n,e,i,r){this._driver=n,this.element=e,this.startTime=i,this._elementTimelineStylesLookup=r,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(e),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(e,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(n){let e=this._keyframes.size===1&&this._pendingStyles.size;this.duration||e?(this.forwardTime(this.currentTime+n),e&&this.snapshotCurrentStyles()):this.startTime+=n}fork(n,e){return this.applyStylesToKeyframe(),new t(this._driver,n,e||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=rz,this._loadKeyframe()}forwardTime(n){this.applyStylesToKeyframe(),this.duration=n,this._loadKeyframe()}_updateStyle(n,e){this._localTimelineStyles.set(n,e),this._globalTimelineStyles.set(n,e),this._styleSummary.set(n,{time:this.currentTime,value:e})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(n){n&&this._previousKeyframe.set("easing",n);for(let[e,i]of this._globalTimelineStyles)this._backFill.set(e,i||ui),this._currentKeyframe.set(e,ui);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(n,e,i,r){e&&this._previousKeyframe.set("easing",e);let o=r&&r.params||{},s=lz(n,this._globalTimelineStyles);for(let[a,c]of s){let l=Ga(c,o,i);this._pendingStyles.set(a,l),this._localTimelineStyles.has(a)||this._backFill.set(a,this._globalTimelineStyles.get(a)??ui),this._updateStyle(a,l)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((n,e)=>{this._currentKeyframe.set(e,n)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((n,e)=>{this._currentKeyframe.has(e)||this._currentKeyframe.set(e,n)}))}snapshotCurrentStyles(){for(let[n,e]of this._localTimelineStyles)this._pendingStyles.set(n,e),this._updateStyle(n,e)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let n=[];for(let e in this._currentKeyframe)n.push(e);return n}mergeTimelineCollectedStyles(n){n._styleSummary.forEach((e,i)=>{let r=this._styleSummary.get(i);(!r||e.time>r.time)&&this._updateStyle(i,e.value)})}buildKeyframes(){this.applyStylesToKeyframe();let n=new Set,e=new Set,i=this._keyframes.size===1&&this.duration===0,r=[];this._keyframes.forEach((a,c)=>{let l=new Map([...this._backFill,...a]);l.forEach((d,f)=>{d===Yl?n.add(f):d===ui&&e.add(f)}),i||l.set("offset",c/this.duration),r.push(l)});let o=[...n.values()],s=[...e.values()];if(i){let a=r[0],c=new Map(a);a.set("offset",0),c.set("offset",1),r=[a,c]}return cS(this.element,r,o,s,this.duration,this.startTime,this.easing,!1)}},eS=class extends Ah{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(n,e,i,r,o,s,a=!1){super(n,e,s.delay),this.keyframes=i,this.preStyleProps=r,this.postStyleProps=o,this._stretchStartingKeyframe=a,this.timings={duration:s.duration,delay:s.delay,easing:s.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let n=this.keyframes,{delay:e,duration:i,easing:r}=this.timings;if(this._stretchStartingKeyframe&&e){let o=[],s=i+e,a=e/s,c=new Map(n[0]);c.set("offset",0),o.push(c);let l=new Map(n[0]);l.set("offset",LT(a)),o.push(l);let d=n.length-1;for(let f=1;f<=d;f++){let m=new Map(n[f]),h=m.get("offset"),v=e+h*i;m.set("offset",LT(v/s)),o.push(m)}i=s,e=0,r="",n=o}return cS(this.element,n,this.preStyleProps,this.postStyleProps,i,e,r,!0)}};function LT(t,n=3){let e=Math.pow(10,n-1);return Math.round(t*e)/e}function lz(t,n){let e=new Map,i;return t.forEach(r=>{if(r==="*"){i??=n.keys();for(let o of i)e.set(o,ui)}else for(let[o,s]of r)e.set(o,s)}),e}function BT(t,n,e,i,r,o,s,a,c,l,d,f,m){return{type:0,element:t,triggerName:n,isRemovalTransition:r,fromState:e,fromStyles:o,toState:i,toStyles:s,timelines:a,queriedElements:c,preStyleProps:l,postStyleProps:d,totalTime:f,errors:m}}var qb={},Oh=class{_triggerName;ast;_stateStyles;constructor(n,e,i){this._triggerName=n,this.ast=e,this._stateStyles=i}match(n,e,i,r){return dz(this.ast.matchers,n,e,i,r)}buildStyles(n,e,i){let r=this._stateStyles.get("*");return n!==void 0&&(r=this._stateStyles.get(n?.toString())||r),r?r.buildStyles(e,i):new Map}build(n,e,i,r,o,s,a,c,l,d){let f=[],m=this.ast.options&&this.ast.options.params||qb,h=a&&a.params||qb,v=this.buildStyles(i,h,f),C=c&&c.params||qb,E=this.buildStyles(r,C,f),M=new Set,O=new Map,ie=new Map,Oe=r==="void",At={params:KT(C,m),delay:this.ast.options?.delay},Be=d?[]:WT(n,e,this.ast.animation,o,s,v,E,At,l,f),tt=0;return Be.forEach(lt=>{tt=Math.max(lt.duration+lt.delay,tt)}),f.length?BT(e,this._triggerName,i,r,Oe,v,E,[],[],O,ie,tt,f):(Be.forEach(lt=>{let Ot=lt.element,_r=yn(O,Ot,new Set);lt.preStyleProps.forEach(Wn=>_r.add(Wn));let ys=yn(ie,Ot,new Set);lt.postStyleProps.forEach(Wn=>ys.add(Wn)),Ot!==e&&M.add(Ot)}),BT(e,this._triggerName,i,r,Oe,v,E,Be,[...M.values()],O,ie,tt))}};function dz(t,n,e,i,r){return t.some(o=>o(n,e,i,r))}function KT(t,n){let e=w({},n);return Object.entries(t).forEach(([i,r])=>{r!=null&&(e[i]=r)}),e}var tS=class{styles;defaultParams;normalizer;constructor(n,e,i){this.styles=n,this.defaultParams=e,this.normalizer=i}buildStyles(n,e){let i=new Map,r=KT(n,this.defaultParams);return this.styles.styles.forEach(o=>{typeof o!="string"&&o.forEach((s,a)=>{s&&(s=Ga(s,r,e));let c=this.normalizer.normalizePropertyName(a,e);s=this.normalizer.normalizeStyleValue(a,c,s,e),i.set(a,s)})}),i}};function uz(t,n,e){return new nS(t,n,e)}var nS=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(n,e,i){this.name=n,this.ast=e,this._normalizer=i,e.states.forEach(r=>{let o=r.options&&r.options.params||{};this.states.set(r.name,new tS(r.style,o,i))}),VT(this.states,"true","1"),VT(this.states,"false","0"),e.transitions.forEach(r=>{this.transitionFactories.push(new Oh(n,r,this.states))}),this.fallbackTransition=fz(n,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(n,e,i,r){return this.transitionFactories.find(s=>s.match(n,e,i,r))||null}matchStyles(n,e,i){return this.fallbackTransition.buildStyles(n,e,i)}};function fz(t,n,e){let i=[(s,a)=>!0],r={type:Ee.Sequence,steps:[],options:null},o={type:Ee.Transition,animation:r,matchers:i,options:null,queryCount:0,depCount:0};return new Oh(t,o,n)}function VT(t,n,e){t.has(n)?t.has(e)||t.set(e,t.get(n)):t.has(e)&&t.set(n,t.get(e))}var mz=new ed,iS=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(n,e,i){this.bodyNode=n,this._driver=e,this._normalizer=i}register(n,e){let i=[],r=[],o=qT(this._driver,e,i,r);if(i.length)throw bT(i);this._animations.set(n,o)}_buildPlayer(n,e,i){let r=n.element,o=Lb(this._normalizer,n.keyframes,e,i);return this._driver.animate(r,o,n.duration,n.delay,n.easing,[],!0)}create(n,e,i={}){let r=[],o=this._animations.get(n),s,a=new Map;if(o?(s=WT(this._driver,e,o,Hb,wh,new Map,new Map,i,mz,r),s.forEach(d=>{let f=yn(a,d.element,new Map);d.postStyleProps.forEach(m=>f.set(m,null))})):(r.push(ST()),s=[]),r.length)throw wT(r);a.forEach((d,f)=>{d.forEach((m,h)=>{d.set(h,this._driver.computeStyle(f,h,ui))})});let c=s.map(d=>{let f=a.get(d.element);return this._buildPlayer(d,new Map,f)}),l=yr(c);return this._playersById.set(n,l),l.onDestroy(()=>this.destroy(n)),this.players.push(l),l}destroy(n){let e=this._getPlayer(n);e.destroy(),this._playersById.delete(n);let i=this.players.indexOf(e);i>=0&&this.players.splice(i,1)}_getPlayer(n){let e=this._playersById.get(n);if(!e)throw CT(n);return e}listen(n,e,i,r){let o=bh(e,"","","");return _h(this._getPlayer(n),i,o,r),()=>{}}command(n,e,i,r){if(i=="register"){this.register(n,r[0]);return}if(i=="create"){let s=r[0]||{};this.create(n,e,s);return}let o=this._getPlayer(n);switch(i){case"play":o.play();break;case"pause":o.pause();break;case"reset":o.reset();break;case"restart":o.restart();break;case"finish":o.finish();break;case"init":o.init();break;case"setPosition":o.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(n);break}}},jT="ng-animate-queued",hz=".ng-animate-queued",Wb="ng-animate-disabled",pz=".ng-animate-disabled",gz="ng-star-inserted",vz=".ng-star-inserted",yz=[],YT={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},_z={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},mi="__ng_removed",td=class{namespaceId;value;options;get params(){return this.options.params}constructor(n,e=""){this.namespaceId=e;let i=n&&Object.hasOwn(n,"value"),r=i?n.value:n;if(this.value=Sz(r),i){let o=n,{value:s}=o,a=jh(o,["value"]);this.options=a}else this.options={};this.options.params||(this.options.params={})}absorbOptions(n){let e=n.params;if(e){let i=this.options.params;Object.keys(e).forEach(r=>{i[r]==null&&(i[r]=e[r])})}}},Jl="void",Kb=new td(Jl),rS=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(n,e,i){this.id=n,this.hostElement=e,this._engine=i,this._hostClassName="ng-tns-"+n,qn(e,this._hostClassName)}listen(n,e,i,r){if(!this._triggers.has(e))throw DT(i,e);if(i==null||i.length==0)throw xT(e);if(!wz(i))throw ET(i,e);let o=yn(this._elementListeners,n,[]),s={name:e,phase:i,callback:r};o.push(s);let a=yn(this._engine.statesByElement,n,new Map);return a.has(e)||(qn(n,Ql),qn(n,Ql+"-"+e),a.set(e,Kb)),()=>{this._engine.afterFlush(()=>{let c=o.indexOf(s);c>=0&&o.splice(c,1),this._triggers.has(e)||a.delete(e)})}}register(n,e){return this._triggers.has(n)?!1:(this._triggers.set(n,e),!0)}_getTrigger(n){let e=this._triggers.get(n);if(!e)throw IT(n);return e}trigger(n,e,i,r=!0){let o=this._getTrigger(e),s=new nd(this.id,e,n),a=this._engine.statesByElement.get(n);a||(qn(n,Ql),qn(n,Ql+"-"+e),this._engine.statesByElement.set(n,a=new Map));let c=a.get(e),l=new td(i,this.id);if(!(i&&Object.hasOwn(i,"value"))&&c&&l.absorbOptions(c.options),a.set(e,l),c||(c=Kb),!(l.value===Jl)&&c.value===l.value){if(!xz(c.params,l.params)){let C=[],E=o.matchStyles(c.value,c.params,C),M=o.matchStyles(l.value,l.params,C);C.length?this._engine.reportError(C):this._engine.afterFlush(()=>{ao(n,E),fi(n,M)})}return}let m=yn(this._engine.playersByElement,n,[]);m.forEach(C=>{C.namespaceId==this.id&&C.triggerName==e&&C.queued&&C.destroy()});let h=o.matchTransition(c.value,l.value,n,l.params),v=!1;if(!h){if(!r)return;h=o.fallbackTransition,v=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:e,transition:h,fromState:c,toState:l,player:s,isFallbackTransition:v}),v||(qn(n,jT),s.onStart(()=>{qa(n,jT)})),s.onDone(()=>{let C=this.players.indexOf(s);C>=0&&this.players.splice(C,1);let E=this._engine.playersByElement.get(n);if(E){let M=E.indexOf(s);M>=0&&E.splice(M,1)}}),this.players.push(s),m.push(s),s}deregister(n){this._triggers.delete(n),this._engine.statesByElement.forEach(e=>e.delete(n)),this._elementListeners.forEach((e,i)=>{this._elementListeners.set(i,e.filter(r=>r.name!=n))})}clearElementCache(n){this._engine.statesByElement.delete(n),this._elementListeners.delete(n);let e=this._engine.playersByElement.get(n);e&&(e.forEach(i=>i.destroy()),this._engine.playersByElement.delete(n))}_signalRemovalForInnerTriggers(n,e){let i=this._engine.driver.query(n,Zl,!0);i.forEach(r=>{if(r[mi])return;let o=this._engine.fetchNamespacesByElement(r);o.size?o.forEach(s=>s.triggerLeaveAnimation(r,e,!1,!0)):this.clearElementCache(r)}),this._engine.afterFlushAnimationsDone(()=>i.forEach(r=>this.clearElementCache(r)))}triggerLeaveAnimation(n,e,i,r){let o=this._engine.statesByElement.get(n),s=new Map;if(o){let a=[];if(o.forEach((c,l)=>{if(s.set(l,c.value),this._triggers.has(l)){let d=this.trigger(n,l,Jl,r);d&&a.push(d)}}),a.length)return this._engine.markElementAsRemoved(this.id,n,!0,e,s),i&&yr(a).onDone(()=>this._engine.processLeaveNode(n)),!0}return!1}prepareLeaveAnimationListeners(n){let e=this._elementListeners.get(n),i=this._engine.statesByElement.get(n);if(e&&i){let r=new Set;e.forEach(o=>{let s=o.name;if(r.has(s))return;r.add(s);let c=this._triggers.get(s).fallbackTransition,l=i.get(s)||Kb,d=new td(Jl),f=new nd(this.id,s,n);this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:s,transition:c,fromState:l,toState:d,player:f,isFallbackTransition:!0})})}}removeNode(n,e){let i=this._engine;if(n.childElementCount&&this._signalRemovalForInnerTriggers(n,e),this.triggerLeaveAnimation(n,e,!0))return;let r=!1;if(i.totalAnimations){let o=i.players.length?i.playersByQueriedElement.get(n):[];if(o&&o.length)r=!0;else{let s=n;for(;s=s.parentNode;)if(i.statesByElement.get(s)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(n),r)i.markElementAsRemoved(this.id,n,!1,e);else{let o=n[mi];(!o||o===YT)&&(i.afterFlush(()=>this.clearElementCache(n)),i.destroyInnerAnimations(n),i._onRemovalComplete(n,e))}}insertNode(n,e){qn(n,this._hostClassName)}drainQueuedTransitions(n){let e=[];return this._queue.forEach(i=>{let r=i.player;if(r.destroyed)return;let o=i.element,s=this._elementListeners.get(o);s&&s.forEach(a=>{if(a.name==i.triggerName){let c=bh(o,i.triggerName,i.fromState.value,i.toState.value);c._data=n,_h(i.player,a.phase,c,a.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):e.push(i)}),this._queue=[],e.sort((i,r)=>{let o=i.transition.ast.depCount,s=r.transition.ast.depCount;return o==0||s==0?o-s:this._engine.driver.containsElement(i.element,r.element)?1:-1})}destroy(n){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,n)}},oS=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(n,e)=>{};_onRemovalComplete(n,e){this.onRemovalComplete(n,e)}constructor(n,e,i){this.bodyNode=n,this.driver=e,this._normalizer=i}get queuedPlayers(){let n=[];return this._namespaceList.forEach(e=>{e.players.forEach(i=>{i.queued&&n.push(i)})}),n}createNamespace(n,e){let i=new rS(n,e,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,e)?this._balanceNamespaceList(i,e):(this.newHostElements.set(e,i),this.collectEnterElement(e)),this._namespaceLookup[n]=i}_balanceNamespaceList(n,e){let i=this._namespaceList,r=this.namespacesByHostElement;if(i.length-1>=0){let s=!1,a=this.driver.getParentElement(e);for(;a;){let c=r.get(a);if(c){let l=i.indexOf(c);i.splice(l+1,0,n),s=!0;break}a=this.driver.getParentElement(a)}s||i.unshift(n)}else i.push(n);return r.set(e,n),n}register(n,e){let i=this._namespaceLookup[n];return i||(i=this.createNamespace(n,e)),i}registerTrigger(n,e,i){let r=this._namespaceLookup[n];r&&r.register(e,i)&&this.totalAnimations++}destroy(n,e){n&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let i=this._fetchNamespace(n);this.namespacesByHostElement.delete(i.hostElement);let r=this._namespaceList.indexOf(i);r>=0&&this._namespaceList.splice(r,1),i.destroy(e),delete this._namespaceLookup[n]}))}_fetchNamespace(n){return this._namespaceLookup[n]}fetchNamespacesByElement(n){let e=new Set,i=this.statesByElement.get(n);if(i){for(let r of i.values())if(r.namespaceId){let o=this._fetchNamespace(r.namespaceId);o&&e.add(o)}}return e}trigger(n,e,i,r){if(Nh(e)){let o=this._fetchNamespace(n);if(o)return o.trigger(e,i,r),!0}return!1}insertNode(n,e,i,r){if(!Nh(e))return;let o=e[mi];if(o&&o.setForRemoval){o.setForRemoval=!1,o.setForMove=!0;let s=this.collectedLeaveElements.indexOf(e);s>=0&&this.collectedLeaveElements.splice(s,1)}if(n){let s=this._fetchNamespace(n);s&&s.insertNode(e,i)}r&&this.collectEnterElement(e)}collectEnterElement(n){this.collectedEnterElements.push(n)}markElementAsDisabled(n,e){e?this.disabledNodes.has(n)||(this.disabledNodes.add(n),qn(n,Wb)):this.disabledNodes.has(n)&&(this.disabledNodes.delete(n),qa(n,Wb))}removeNode(n,e,i){if(Nh(e)){let r=n?this._fetchNamespace(n):null;r?r.removeNode(e,i):this.markElementAsRemoved(n,e,!1,i);let o=this.namespacesByHostElement.get(e);o&&o.id!==n&&o.removeNode(e,i)}else this._onRemovalComplete(e,i)}markElementAsRemoved(n,e,i,r,o){this.collectedLeaveElements.push(e),e[mi]={namespaceId:n,setForRemoval:r,hasAnimation:i,removedBeforeQueried:!1,previousTriggersValues:o}}listen(n,e,i,r,o){return Nh(e)?this._fetchNamespace(n).listen(e,i,r,o):()=>{}}_buildInstruction(n,e,i,r,o){return n.transition.build(this.driver,n.element,n.fromState.value,n.toState.value,i,r,n.fromState.options,n.toState.options,e,o)}destroyInnerAnimations(n){let e=this.driver.query(n,Zl,!0);e.forEach(i=>this.destroyActiveAnimationsForElement(i)),this.playersByQueriedElement.size!=0&&(e=this.driver.query(n,Ch,!0),e.forEach(i=>this.finishActiveQueriedAnimationOnElement(i)))}destroyActiveAnimationsForElement(n){let e=this.playersByElement.get(n);e&&e.forEach(i=>{i.queued?i.markedForDestroy=!0:i.destroy()})}finishActiveQueriedAnimationOnElement(n){let e=this.playersByQueriedElement.get(n);e&&e.forEach(i=>i.finish())}whenRenderingDone(){return new Promise(n=>{if(this.players.length)return yr(this.players).onDone(()=>n());n()})}processLeaveNode(n){let e=n[mi];if(e&&e.setForRemoval){if(n[mi]=YT,e.namespaceId){this.destroyInnerAnimations(n);let i=this._fetchNamespace(e.namespaceId);i&&i.clearElementCache(n)}this._onRemovalComplete(n,e.setForRemoval)}n.classList?.contains(Wb)&&this.markElementAsDisabled(n,!1),this.driver.query(n,pz,!0).forEach(i=>{this.markElementAsDisabled(i,!1)})}flush(n=-1){let e=[];if(this.newHostElements.size&&(this.newHostElements.forEach((i,r)=>this._balanceNamespaceList(i,r)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let i=0;i<this.collectedEnterElements.length;i++){let r=this.collectedEnterElements[i];qn(r,gz)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let i=[];try{e=this._flushAnimations(i,n)}finally{for(let r=0;r<i.length;r++)i[r]()}}else for(let i=0;i<this.collectedLeaveElements.length;i++){let r=this.collectedLeaveElements[i];this.processLeaveNode(r)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(i=>i()),this._flushFns=[],this._whenQuietFns.length){let i=this._whenQuietFns;this._whenQuietFns=[],e.length?yr(e).onDone(()=>{i.forEach(r=>r())}):i.forEach(r=>r())}}reportError(n){throw NT(n)}_flushAnimations(n,e){let i=new ed,r=[],o=new Map,s=[],a=new Map,c=new Map,l=new Map,d=new Set;this.disabledNodes.forEach(K=>{d.add(K);let ae=this.driver.query(K,hz,!0);for(let ue=0;ue<ae.length;ue++)d.add(ae[ue])});let f=this.bodyNode,m=Array.from(this.statesByElement.keys()),h=zT(m,this.collectedEnterElements),v=new Map,C=0;h.forEach((K,ae)=>{let ue=Hb+C++;v.set(ae,ue),K.forEach(Re=>qn(Re,ue))});let E=[],M=new Set,O=new Set;for(let K=0;K<this.collectedLeaveElements.length;K++){let ae=this.collectedLeaveElements[K],ue=ae[mi];ue&&ue.setForRemoval&&(E.push(ae),M.add(ae),ue.hasAnimation?this.driver.query(ae,vz,!0).forEach(Re=>M.add(Re)):O.add(ae))}let ie=new Map,Oe=zT(m,Array.from(M));Oe.forEach((K,ae)=>{let ue=wh+C++;ie.set(ae,ue),K.forEach(Re=>qn(Re,ue))}),n.push(()=>{h.forEach((K,ae)=>{let ue=v.get(ae);K.forEach(Re=>qa(Re,ue))}),Oe.forEach((K,ae)=>{let ue=ie.get(ae);K.forEach(Re=>qa(Re,ue))}),E.forEach(K=>{this.processLeaveNode(K)})});let At=[],Be=[];for(let K=this._namespaceList.length-1;K>=0;K--)this._namespaceList[K].drainQueuedTransitions(e).forEach(ue=>{let Re=ue.player,Ft=ue.element;if(At.push(Re),this.collectedEnterElements.length){let Wt=Ft[mi];if(Wt&&Wt.setForMove){if(Wt.previousTriggersValues&&Wt.previousTriggersValues.has(ue.triggerName)){let co=Wt.previousTriggersValues.get(ue.triggerName),On=this.statesByElement.get(ue.element);if(On&&On.has(ue.triggerName)){let rd=On.get(ue.triggerName);rd.value=co,On.set(ue.triggerName,rd)}}Re.destroy();return}}let hi=!f||!this.driver.containsElement(f,Ft),bn=ie.get(Ft),br=v.get(Ft),dt=this._buildInstruction(ue,i,br,bn,hi);if(dt.errors&&dt.errors.length){Be.push(dt);return}if(hi){Re.onStart(()=>ao(Ft,dt.fromStyles)),Re.onDestroy(()=>fi(Ft,dt.toStyles)),r.push(Re);return}if(ue.isFallbackTransition){Re.onStart(()=>ao(Ft,dt.fromStyles)),Re.onDestroy(()=>fi(Ft,dt.toStyles)),r.push(Re);return}let fS=[];dt.timelines.forEach(Wt=>{Wt.stretchStartingKeyframe=!0,this.disabledNodes.has(Wt.element)||fS.push(Wt)}),dt.timelines=fS,i.append(Ft,dt.timelines);let ak={instruction:dt,player:Re,element:Ft};s.push(ak),dt.queriedElements.forEach(Wt=>yn(a,Wt,[]).push(Re)),dt.preStyleProps.forEach((Wt,co)=>{if(Wt.size){let On=c.get(co);On||c.set(co,On=new Set),Wt.forEach((rd,Vh)=>On.add(Vh))}}),dt.postStyleProps.forEach((Wt,co)=>{let On=l.get(co);On||l.set(co,On=new Set),Wt.forEach((rd,Vh)=>On.add(Vh))})});if(Be.length){let K=[];Be.forEach(ae=>{K.push(MT(ae.triggerName,ae.errors))}),At.forEach(ae=>ae.destroy()),this.reportError(K)}let tt=new Map,lt=new Map;s.forEach(K=>{let ae=K.element;i.has(ae)&&(lt.set(ae,ae),this._beforeAnimationBuild(K.player.namespaceId,K.instruction,tt))}),r.forEach(K=>{let ae=K.element;this._getPreviousPlayers(ae,!1,K.namespaceId,K.triggerName,null).forEach(Re=>{yn(tt,ae,[]).push(Re),Re.destroy()})});let Ot=E.filter(K=>$T(K,c,l)),_r=new Map;HT(_r,this.driver,O,l,ui).forEach(K=>{$T(K,c,l)&&Ot.push(K)});let Wn=new Map;h.forEach((K,ae)=>{HT(Wn,this.driver,new Set(K),c,Yl)}),Ot.forEach(K=>{let ae=_r.get(K),ue=Wn.get(K);_r.set(K,new Map([...ae?.entries()??[],...ue?.entries()??[]]))});let _s=[],dS=[],uS={};s.forEach(K=>{let{element:ae,player:ue,instruction:Re}=K;if(i.has(ae)){if(d.has(ae)){ue.onDestroy(()=>fi(ae,Re.toStyles)),ue.disabled=!0,ue.overrideTotalTime(Re.totalTime),r.push(ue);return}let Ft=uS;if(lt.size>1){let bn=ae,br=[];for(;bn=bn.parentNode;){let dt=lt.get(bn);if(dt){Ft=dt;break}br.push(bn)}br.forEach(dt=>lt.set(dt,Ft))}let hi=this._buildAnimation(ue.namespaceId,Re,tt,o,Wn,_r);if(ue.setRealPlayer(hi),Ft===uS)_s.push(ue);else{let bn=this.playersByElement.get(Ft);bn&&bn.length&&(ue.parentPlayer=yr(bn)),r.push(ue)}}else ao(ae,Re.fromStyles),ue.onDestroy(()=>fi(ae,Re.toStyles)),dS.push(ue),d.has(ae)&&r.push(ue)}),dS.forEach(K=>{let ae=o.get(K.element);if(ae&&ae.length){let ue=yr(ae);K.setRealPlayer(ue)}}),r.forEach(K=>{K.parentPlayer?K.syncPlayerEvents(K.parentPlayer):K.destroy()});for(let K=0;K<E.length;K++){let ae=E[K],ue=ae[mi];if(qa(ae,wh),ue&&ue.hasAnimation)continue;let Re=[];if(a.size){let hi=a.get(ae);hi&&hi.length&&Re.push(...hi);let bn=this.driver.query(ae,Ch,!0);for(let br=0;br<bn.length;br++){let dt=a.get(bn[br]);dt&&dt.length&&Re.push(...dt)}}let Ft=Re.filter(hi=>!hi.destroyed);Ft.length?Cz(this,ae,Ft):this.processLeaveNode(ae)}return E.length=0,_s.forEach(K=>{this.players.push(K),K.onDone(()=>{K.destroy();let ae=this.players.indexOf(K);this.players.splice(ae,1)}),K.play()}),_s}afterFlush(n){this._flushFns.push(n)}afterFlushAnimationsDone(n){this._whenQuietFns.push(n)}_getPreviousPlayers(n,e,i,r,o){let s=[];if(e){let a=this.playersByQueriedElement.get(n);a&&(s=a)}else{let a=this.playersByElement.get(n);if(a){let c=!o||o==Jl;a.forEach(l=>{l.queued||!c&&l.triggerName!=r||s.push(l)})}}return(i||r)&&(s=s.filter(a=>!(i&&i!=a.namespaceId||r&&r!=a.triggerName))),s}_beforeAnimationBuild(n,e,i){let r=e.triggerName,o=e.element,s=e.isRemovalTransition?void 0:n,a=e.isRemovalTransition?void 0:r;for(let c of e.timelines){let l=c.element,d=l!==o,f=yn(i,l,[]);this._getPreviousPlayers(l,d,s,a,e.toState).forEach(h=>{let v=h.getRealPlayer();v.beforeDestroy&&v.beforeDestroy(),h.destroy(),f.push(h)})}ao(o,e.fromStyles)}_buildAnimation(n,e,i,r,o,s){let a=e.triggerName,c=e.element,l=[],d=new Set,f=new Set,m=e.timelines.map(v=>{let C=v.element;d.add(C);let E=C[mi];if(E&&E.removedBeforeQueried)return new vr(v.duration,v.delay);let M=C!==c,O=Dz((i.get(C)||yz).map(tt=>tt.getRealPlayer())).filter(tt=>{let lt=tt;return lt.element?lt.element===C:!1}),ie=o.get(C),Oe=s.get(C),At=Lb(this._normalizer,v.keyframes,ie,Oe),Be=this._buildPlayer(v,At,O);if(v.subTimeline&&r&&f.add(C),M){let tt=new nd(n,a,C);tt.setRealPlayer(Be),l.push(tt)}return Be});l.forEach(v=>{yn(this.playersByQueriedElement,v.element,[]).push(v),v.onDone(()=>bz(this.playersByQueriedElement,v.element,v))}),d.forEach(v=>qn(v,zb));let h=yr(m);return h.onDestroy(()=>{d.forEach(v=>qa(v,zb)),fi(c,e.toStyles)}),f.forEach(v=>{yn(r,v,[]).push(h)}),h}_buildPlayer(n,e,i){return e.length>0?this.driver.animate(n.element,e,n.duration,n.delay,n.easing,i):new vr(n.duration,n.delay)}},nd=class{namespaceId;triggerName;element;_player=new vr;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(n,e,i){this.namespaceId=n,this.triggerName=e,this.element=i}setRealPlayer(n){this._containsRealPlayer||(this._player=n,this._queuedCallbacks.forEach((e,i)=>{e.forEach(r=>_h(n,i,void 0,r))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(n.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(n){this.totalTime=n}syncPlayerEvents(n){let e=this._player;e.triggerCallback&&n.onStart(()=>e.triggerCallback("start")),n.onDone(()=>this.finish()),n.onDestroy(()=>this.destroy())}_queueEvent(n,e){yn(this._queuedCallbacks,n,[]).push(e)}onDone(n){this.queued&&this._queueEvent("done",n),this._player.onDone(n)}onStart(n){this.queued&&this._queueEvent("start",n),this._player.onStart(n)}onDestroy(n){this.queued&&this._queueEvent("destroy",n),this._player.onDestroy(n)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(n){this.queued||this._player.setPosition(n)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(n){let e=this._player;e.triggerCallback&&e.triggerCallback(n)}};function bz(t,n,e){let i=t.get(n);if(i){if(i.length){let r=i.indexOf(e);i.splice(r,1)}i.length==0&&t.delete(n)}return i}function Sz(t){return t??null}function Nh(t){return t&&t.nodeType===1}function wz(t){return t=="start"||t=="done"}function UT(t,n){let e=t.style.display;return t.style.display=n??"none",e}function HT(t,n,e,i,r){let o=[];e.forEach(c=>o.push(UT(c)));let s=[];i.forEach((c,l)=>{let d=new Map;c.forEach(f=>{let m=n.computeStyle(l,f,r);d.set(f,m),(!m||m.length==0)&&(l[mi]=_z,s.push(l))}),t.set(l,d)});let a=0;return e.forEach(c=>UT(c,o[a++])),s}function zT(t,n){let e=new Map;if(t.forEach(a=>e.set(a,[])),n.length==0)return e;let i=1,r=new Set(n),o=new Map;function s(a){if(!a)return i;let c=o.get(a);if(c)return c;let l=a.parentNode;return e.has(l)?c=l:r.has(l)?c=i:c=s(l),o.set(a,c),c}return n.forEach(a=>{let c=s(a);c!==i&&e.get(c).push(a)}),e}function qn(t,n){t.classList?.add(n)}function qa(t,n){t.classList?.remove(n)}function Cz(t,n,e){yr(e).onDone(()=>t.processLeaveNode(n))}function Dz(t){let n=[];return QT(t,n),n}function QT(t,n){for(let e=0;e<t.length;e++){let i=t[e];i instanceof za?QT(i.players,n):n.push(i)}}function xz(t,n){let e=Object.keys(t),i=Object.keys(n);if(e.length!=i.length)return!1;for(let r=0;r<e.length;r++){let o=e[r];if(!Object.hasOwn(n,o)||t[o]!==n[o])return!1}return!0}function $T(t,n,e){let i=e.get(t);if(!i)return!1;let r=n.get(t);return r?i.forEach(o=>r.add(o)):n.set(t,i),e.delete(t),!0}var Wa=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(n,e)=>{};constructor(n,e,i){this._driver=e,this._normalizer=i,this._transitionEngine=new oS(n.body,e,i),this._timelineEngine=new iS(n.body,e,i),this._transitionEngine.onRemovalComplete=(r,o)=>this.onRemovalComplete(r,o)}registerTrigger(n,e,i,r,o){let s=n+"-"+r,a=this._triggerCache[s];if(!a){let c=[],l=[],d=qT(this._driver,o,c,l);if(c.length)throw _T(r,c);a=uz(r,d,this._normalizer),this._triggerCache[s]=a}this._transitionEngine.registerTrigger(e,r,a)}register(n,e){this._transitionEngine.register(n,e)}destroy(n,e){this._transitionEngine.destroy(n,e)}onInsert(n,e,i,r){this._transitionEngine.insertNode(n,e,i,r)}onRemove(n,e,i){this._transitionEngine.removeNode(n,e,i)}disableAnimations(n,e){this._transitionEngine.markElementAsDisabled(n,e)}process(n,e,i,r){if(i.charAt(0)=="@"){let[o,s]=Bb(i),a=r;this._timelineEngine.command(o,e,s,a)}else this._transitionEngine.trigger(n,e,i,r)}listen(n,e,i,r,o){if(i.charAt(0)=="@"){let[s,a]=Bb(i);return this._timelineEngine.listen(s,e,a,o)}return this._transitionEngine.listen(n,e,i,r,o)}flush(n=-1){this._transitionEngine.flush(n)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(n){this._transitionEngine.afterFlushAnimationsDone(n)}};function Ez(t,n){let e=null,i=null;return Array.isArray(n)&&n.length?(e=Yb(n[0]),n.length>1&&(i=Yb(n[n.length-1]))):n instanceof Map&&(e=Yb(n)),e||i?new Iz(t,e,i):null}var Iz=(()=>{class t{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(e,i,r){this._element=e,this._startStyles=i,this._endStyles=r;let o=t.initialStylesByElement.get(e);o||t.initialStylesByElement.set(e,o=new Map),this._initialStyles=o}start(){this._state<1&&(this._startStyles&&fi(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(fi(this._element,this._initialStyles),this._endStyles&&(fi(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(t.initialStylesByElement.delete(this._element),this._startStyles&&(ao(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(ao(this._element,this._endStyles),this._endStyles=null),fi(this._element,this._initialStyles),this._state=3)}}return t})();function Yb(t){let n=null;return t.forEach((e,i)=>{Nz(i)&&(n=n||new Map,n.set(i,e))}),n}function Nz(t){return t==="display"||t==="position"}var Fh=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(n,e,i,r){this.element=n,this.keyframes=e,this.options=i,this._specialStyles=r,this._duration=i.duration,this._delay=i.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let n=this.keyframes,e=this._triggerWebAnimation(this.element,n,this.options);if(!e)return this._onFinish(),null;this.domPlayer=e,this._finalKeyframe=n.length?n[n.length-1]:new Map;let i=()=>this._onFinish();return e.addEventListener("finish",i),this.onDestroy(()=>{e.removeEventListener("finish",i)}),e}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(n){let e=[];return n.forEach(i=>{e.push(Object.fromEntries(i))}),e}_triggerWebAnimation(n,e,i){let r=this._convertKeyframesToObject(e);try{return n.animate(r,i)}catch(o){return null}}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}play(){let n=this._buildPlayer();n&&(this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),n.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}setPosition(n){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=n*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let n=new Map;this.hasStarted()&&this._finalKeyframe.forEach((i,r)=>{r!=="offset"&&n.set(r,this._finished?i:xh(this.element,r))}),this.currentSnapshot=n}triggerCallback(n){let e=n==="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},Ph=class{validateStyleProperty(n){return!0}validateAnimatableStyleProperty(n){return!0}containsElement(n,e){return Vb(n,e)}getParentElement(n){return Sh(n)}query(n,e,i){return jb(n,e,i)}computeStyle(n,e,i){return xh(n,e)}animate(n,e,i,r,o,s=[]){let a=r==0?"both":"forwards",c={duration:i,delay:r,fill:a};o&&(c.easing=o);let l=new Map,d=s.filter(h=>h instanceof Fh);AT(i,r)&&d.forEach(h=>{h.currentSnapshot.forEach((v,C)=>l.set(C,v))});let f=kT(e).map(h=>new Map(h));f=OT(n,f,l);let m=Ez(n,f);return new Fh(n,f,c,m)}};var Mh="@",ZT="@.disabled",Lh=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(n,e,i,r){this.namespaceId=n,this.delegate=e,this.engine=i,this._onDestroy=r}get data(){return this.delegate.data}destroyNode(n){this.delegate.destroyNode?.(n)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}appendChild(n,e){this.delegate.appendChild(n,e),this.engine.onInsert(this.namespaceId,e,n,!1)}insertBefore(n,e,i,r=!0){this.delegate.insertBefore(n,e,i),this.engine.onInsert(this.namespaceId,e,n,r)}removeChild(n,e,i,r){if(r){this.delegate.removeChild(n,e,i,r);return}this.parentNode(e)&&this.engine.onRemove(this.namespaceId,e,this.delegate)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,i,r){this.delegate.setAttribute(n,e,i,r)}removeAttribute(n,e,i){this.delegate.removeAttribute(n,e,i)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,i,r){this.delegate.setStyle(n,e,i,r)}removeStyle(n,e,i){this.delegate.removeStyle(n,e,i)}setProperty(n,e,i){e.charAt(0)==Mh&&e==ZT?this.disableAnimations(n,!!i):this.delegate.setProperty(n,e,i)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,i,r){return this.delegate.listen(n,e,i,r)}disableAnimations(n,e){this.engine.disableAnimations(n,e)}},sS=class extends Lh{factory;constructor(n,e,i,r,o){super(e,i,r,o),this.factory=n,this.namespaceId=e}setProperty(n,e,i){e.charAt(0)==Mh?e.charAt(1)=="."&&e==ZT?(i=i===void 0?!0:!!i,this.disableAnimations(n,i)):this.engine.process(this.namespaceId,n,e.slice(1),i):this.delegate.setProperty(n,e,i)}listen(n,e,i,r){if(e.charAt(0)==Mh){let o=Mz(n),s=e.slice(1),a="";return s.charAt(0)!=Mh&&([s,a]=Tz(s)),this.engine.listen(this.namespaceId,o,s,a,c=>{let l=c._data||-1;this.factory.scheduleListenerCallback(l,i,c)})}return this.delegate.listen(n,e,i,r)}};function Mz(t){switch(t){case"body":return document.body;case"document":return document;case"window":return window;default:return t}}function Tz(t){let n=t.indexOf("."),e=t.substring(0,n),i=t.slice(n+1);return[e,i]}var Bh=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(n,e,i){this.delegate=n,this.engine=e,this._zone=i,e.onRemovalComplete=(r,o)=>{o?.removeChild(null,r)}}createRenderer(n,e){let r=this.delegate.createRenderer(n,e);if(!n||!e?.data?.animation){let l=this._rendererCache,d=l.get(r);if(!d){let f=()=>l.delete(r);d=new Lh("",r,this.engine,f),l.set(r,d)}return d}let o=e.id,s=e.id+"-"+this._currentId;this._currentId++,this.engine.register(s,n);let a=l=>{Array.isArray(l)?l.forEach(a):this.engine.registerTrigger(o,s,n,l.name,l)};return e.data.animation.forEach(a),new sS(this,s,r,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(n,e,i){if(n>=0&&n<this._microtaskId){this._zone.run(()=>e(i));return}let r=this._animationCallbacksBuffer;r.length==0&&queueMicrotask(()=>{this._zone.run(()=>{r.forEach(o=>{let[s,a]=o;s(a)}),this._animationCallbacksBuffer=[]})}),r.push([e,i])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(n){this.engine.flush(),this.delegate.componentReplaced?.(n)}};var Rz=(()=>{class t extends Wa{constructor(e,i,r){super(e,i,r)}ngOnDestroy(){this.flush()}static \u0275fac=function(i){return new(i||t)(R(ne),R(gs),R(vs))};static \u0275prov=G({token:t,factory:t.\u0275fac})}return t})();function Az(){return new Th}function Oz(){return new Bh(u(rl),u(Wa),u(V))}var JT=[{provide:vs,useFactory:Az},{provide:Wa,useClass:Rz},{provide:mt,useFactory:Oz}],Fz=[{provide:gs,useClass:aS},{provide:Br,useValue:"NoopAnimations"},...JT],XT=[{provide:gs,useFactory:()=>new Ph},{provide:Br,useFactory:()=>"BrowserAnimations"},...JT],ek=(()=>{class t{static withConfig(e){return{ngModule:t,providers:e.disableAnimations?Fz:XT}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({providers:XT,imports:[sl]})}return t})();var lS="Service workers are disabled or not supported by this browser",Ka=class{serviceWorker;worker;registration;events;constructor(n,e){if(this.serviceWorker=n,!n)this.worker=this.events=this.registration=new re(i=>i.error(new D(5601,!1)));else{let i=null,r=new I;this.worker=new re(l=>(i!==null&&l.next(i),r.subscribe(d=>l.next(d))));let o=()=>{let{controller:l}=n;l!==null&&(i=l,r.next(i))};n.addEventListener("controllerchange",o),o(),this.registration=this.worker.pipe(Je(()=>n.getRegistration().then(l=>{if(!l)throw new D(5601,!1);return l})));let s=new I;this.events=s.asObservable();let a=l=>{let{data:d}=l;d?.type&&s.next(d)};n.addEventListener("message",a),e?.get(Nt,null,{optional:!0})?.onDestroy(()=>{n.removeEventListener("controllerchange",o),n.removeEventListener("message",a)})}}postMessage(n,e){return new Promise(i=>{this.worker.pipe(St(1)).subscribe(r=>{r.postMessage(w({action:n},e)),i()})})}postMessageWithOperation(n,e,i){let r=this.waitForOperationCompleted(i),o=this.postMessage(n,e);return Promise.all([o,r]).then(([,s])=>s)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(n){let e;return typeof n=="string"?e=i=>i.type===n:e=i=>n.includes(i.type),this.events.pipe(Te(e))}nextEventOfType(n){return this.eventsOfType(n).pipe(St(1))}waitForOperationCompleted(n){return new Promise((e,i)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(Te(r=>r.nonce===n),St(1),me(r=>{if(r.result!==void 0)return r.result;throw new Error(r.error)})).subscribe({next:e,error:i})})}get isEnabled(){return!!this.serviceWorker}},nk=(()=>{class t{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new I;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=Yi,this.notificationClicks=Yi,this.notificationCloses=Yi,this.pushSubscriptionChanges=Yi,this.subscription=Yi;return}this.messages=this.sw.eventsOfType("PUSH").pipe(me(r=>r.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(me(r=>r.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(me(r=>r.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(me(r=>r.data)),this.pushManager=this.sw.registration.pipe(me(r=>r.pushManager));let i=this.pushManager.pipe(Je(r=>r.getSubscription()));this.subscription=new re(r=>{let o=i.subscribe(r),s=this.subscriptionChanges.subscribe(r);return()=>{o.unsubscribe(),s.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(lS));let i={userVisibleOnly:!0},r=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(r.length));for(let s=0;s<r.length;s++)o[s]=r.charCodeAt(s);return i.applicationServerKey=o,new Promise((s,a)=>{this.pushManager.pipe(Je(c=>c.subscribe(i)),St(1)).subscribe({next:c=>{this.subscriptionChanges.next(c),s(c)},error:a})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(lS));let e=i=>{if(i===null)throw new D(5602,!1);return i.unsubscribe().then(r=>{if(!r)throw new D(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((i,r)=>{this.subscription.pipe(St(1),Je(e)).subscribe({next:i,error:r})})}decodeBase64(e){return atob(e)}static \u0275fac=function(i){return new(i||t)(R(Ka))};static \u0275prov=G({token:t,factory:t.\u0275fac})}return t})(),ik=(()=>{class t{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=Yi,this.unrecoverable=Yi;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(lS));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new D(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(i){return new(i||t)(R(Ka))};static \u0275prov=G({token:t,factory:t.\u0275fac})}return t})(),rk=new S("");function Pz(){let t=u(id);if(!("serviceWorker"in navigator&&t.enabled!==!1))return;let n=u(rk),e=u(V),i=u(Nt);e.runOutsideAngular(()=>{let r=navigator.serviceWorker,o=()=>r.controller?.postMessage({action:"INITIALIZE"});r.addEventListener("controllerchange",o),i.onDestroy(()=>{r.removeEventListener("controllerchange",o)})}),e.runOutsideAngular(()=>{let r,{registrationStrategy:o}=t;if(typeof o=="function")r=new Promise(s=>o().subscribe(()=>s()));else{let[s,...a]=(o||"registerWhenStable:30000").split(":");switch(s){case"registerImmediately":r=Promise.resolve();break;case"registerWithDelay":r=tk(+a[0]||0);break;case"registerWhenStable":r=Promise.race([i.whenStable(),tk(+a[0])]);break;default:throw new D(5600,!1)}}r.then(()=>{i.destroyed||navigator.serviceWorker.register(n,{scope:t.scope,updateViaCache:t.updateViaCache,type:t.type}).catch(s=>console.error(hn(5604,!1)))})})}function tk(t){return new Promise(n=>setTimeout(n,t))}function Lz(){let t=u(id),n=u(he),e=!0;return new Ka(e&&t.enabled!==!1?navigator.serviceWorker:void 0,n)}var id=class{enabled;updateViaCache;type;scope;registrationStrategy};function Bz(t,n={}){return Yn([nk,ik,{provide:rk,useValue:t},{provide:id,useValue:n},{provide:Ka,useFactory:Lz},Xs(Pz)])}var ok=(()=>{class t{static register(e,i={}){return{ngModule:t,providers:[Bz(e,i)]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=B({providers:[nk,ik]})}return t})();var sk=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=j({type:t,bootstrap:[tT]})}static{this.\u0275inj=B({imports:[JI,cM,eT,sN,_M,Oa,kN,gr,Qm,Ba,oM,ah,sl,Uy,Ia,AM,ek,ok.register("ngsw-worker.js",{enabled:!ax(),registrationStrategy:"registerWhenStable:30000"})]})}}return t})();Oy().bootstrapModule(sk).catch(t=>console.error(t));
