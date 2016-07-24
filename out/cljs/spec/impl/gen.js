// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__3207__auto__,writer__3208__auto__,opt__3209__auto__){
return cljs.core._write.call(null,writer__3208__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__3511__auto__ = [];
var len__3508__auto___258 = arguments.length;
var i__3509__auto___259 = (0);
while(true){
if((i__3509__auto___259 < len__3508__auto___258)){
args__3511__auto__.push((arguments[i__3509__auto___259]));

var G__260 = (i__3509__auto___259 + (1));
i__3509__auto___259 = G__260;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq257){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq257));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__3511__auto__ = [];
var len__3508__auto___262 = arguments.length;
var i__3509__auto___263 = (0);
while(true){
if((i__3509__auto___263 < len__3508__auto___262)){
args__3511__auto__.push((arguments[i__3509__auto___263]));

var G__264 = (i__3509__auto___263 + (1));
i__3509__auto___263 = G__264;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq261){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq261));
});

var g_QMARK__265 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_266 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__265){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__265))
,null));
var mkg_267 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__265,g_266){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__265,g_266))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__265,g_266,mkg_267){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__265).call(null,x);
});})(g_QMARK__265,g_266,mkg_267))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__265,g_266,mkg_267){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_267).call(null,gfn);
});})(g_QMARK__265,g_266,mkg_267))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__265,g_266,mkg_267){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_266).call(null,generator);
});})(g_QMARK__265,g_266,mkg_267))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__5749__auto___285 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__5749__auto___285){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__3511__auto__ = [];
var len__3508__auto___286 = arguments.length;
var i__3509__auto___287 = (0);
while(true){
if((i__3509__auto___287 < len__3508__auto___286)){
args__3511__auto__.push((arguments[i__3509__auto___287]));

var G__288 = (i__3509__auto___287 + (1));
i__3509__auto___287 = G__288;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___285))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___285){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___285),args);
});})(g__5749__auto___285))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__5749__auto___285){
return (function (seq268){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq268));
});})(g__5749__auto___285))
;


var g__5749__auto___289 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__5749__auto___289){
return (function cljs$spec$impl$gen$list(var_args){
var args__3511__auto__ = [];
var len__3508__auto___290 = arguments.length;
var i__3509__auto___291 = (0);
while(true){
if((i__3509__auto___291 < len__3508__auto___290)){
args__3511__auto__.push((arguments[i__3509__auto___291]));

var G__292 = (i__3509__auto___291 + (1));
i__3509__auto___291 = G__292;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___289))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___289){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___289),args);
});})(g__5749__auto___289))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__5749__auto___289){
return (function (seq269){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq269));
});})(g__5749__auto___289))
;


var g__5749__auto___293 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__5749__auto___293){
return (function cljs$spec$impl$gen$map(var_args){
var args__3511__auto__ = [];
var len__3508__auto___294 = arguments.length;
var i__3509__auto___295 = (0);
while(true){
if((i__3509__auto___295 < len__3508__auto___294)){
args__3511__auto__.push((arguments[i__3509__auto___295]));

var G__296 = (i__3509__auto___295 + (1));
i__3509__auto___295 = G__296;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___293))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___293){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___293),args);
});})(g__5749__auto___293))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__5749__auto___293){
return (function (seq270){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq270));
});})(g__5749__auto___293))
;


var g__5749__auto___297 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__5749__auto___297){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__3511__auto__ = [];
var len__3508__auto___298 = arguments.length;
var i__3509__auto___299 = (0);
while(true){
if((i__3509__auto___299 < len__3508__auto___298)){
args__3511__auto__.push((arguments[i__3509__auto___299]));

var G__300 = (i__3509__auto___299 + (1));
i__3509__auto___299 = G__300;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___297))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___297){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___297),args);
});})(g__5749__auto___297))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__5749__auto___297){
return (function (seq271){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq271));
});})(g__5749__auto___297))
;


var g__5749__auto___301 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__5749__auto___301){
return (function cljs$spec$impl$gen$set(var_args){
var args__3511__auto__ = [];
var len__3508__auto___302 = arguments.length;
var i__3509__auto___303 = (0);
while(true){
if((i__3509__auto___303 < len__3508__auto___302)){
args__3511__auto__.push((arguments[i__3509__auto___303]));

var G__304 = (i__3509__auto___303 + (1));
i__3509__auto___303 = G__304;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___301))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___301){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___301),args);
});})(g__5749__auto___301))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__5749__auto___301){
return (function (seq272){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq272));
});})(g__5749__auto___301))
;


var g__5749__auto___305 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__5749__auto___305){
return (function cljs$spec$impl$gen$vector(var_args){
var args__3511__auto__ = [];
var len__3508__auto___306 = arguments.length;
var i__3509__auto___307 = (0);
while(true){
if((i__3509__auto___307 < len__3508__auto___306)){
args__3511__auto__.push((arguments[i__3509__auto___307]));

var G__308 = (i__3509__auto___307 + (1));
i__3509__auto___307 = G__308;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___305))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___305){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___305),args);
});})(g__5749__auto___305))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__5749__auto___305){
return (function (seq273){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq273));
});})(g__5749__auto___305))
;


var g__5749__auto___309 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__5749__auto___309){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__3511__auto__ = [];
var len__3508__auto___310 = arguments.length;
var i__3509__auto___311 = (0);
while(true){
if((i__3509__auto___311 < len__3508__auto___310)){
args__3511__auto__.push((arguments[i__3509__auto___311]));

var G__312 = (i__3509__auto___311 + (1));
i__3509__auto___311 = G__312;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___309))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___309){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___309),args);
});})(g__5749__auto___309))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__5749__auto___309){
return (function (seq274){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq274));
});})(g__5749__auto___309))
;


var g__5749__auto___313 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__5749__auto___313){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__3511__auto__ = [];
var len__3508__auto___314 = arguments.length;
var i__3509__auto___315 = (0);
while(true){
if((i__3509__auto___315 < len__3508__auto___314)){
args__3511__auto__.push((arguments[i__3509__auto___315]));

var G__316 = (i__3509__auto___315 + (1));
i__3509__auto___315 = G__316;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___313))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___313){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___313),args);
});})(g__5749__auto___313))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__5749__auto___313){
return (function (seq275){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq275));
});})(g__5749__auto___313))
;


var g__5749__auto___317 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__5749__auto___317){
return (function cljs$spec$impl$gen$elements(var_args){
var args__3511__auto__ = [];
var len__3508__auto___318 = arguments.length;
var i__3509__auto___319 = (0);
while(true){
if((i__3509__auto___319 < len__3508__auto___318)){
args__3511__auto__.push((arguments[i__3509__auto___319]));

var G__320 = (i__3509__auto___319 + (1));
i__3509__auto___319 = G__320;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___317))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___317){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___317),args);
});})(g__5749__auto___317))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__5749__auto___317){
return (function (seq276){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq276));
});})(g__5749__auto___317))
;


var g__5749__auto___321 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__5749__auto___321){
return (function cljs$spec$impl$gen$bind(var_args){
var args__3511__auto__ = [];
var len__3508__auto___322 = arguments.length;
var i__3509__auto___323 = (0);
while(true){
if((i__3509__auto___323 < len__3508__auto___322)){
args__3511__auto__.push((arguments[i__3509__auto___323]));

var G__324 = (i__3509__auto___323 + (1));
i__3509__auto___323 = G__324;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___321))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___321){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___321),args);
});})(g__5749__auto___321))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__5749__auto___321){
return (function (seq277){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq277));
});})(g__5749__auto___321))
;


var g__5749__auto___325 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__5749__auto___325){
return (function cljs$spec$impl$gen$choose(var_args){
var args__3511__auto__ = [];
var len__3508__auto___326 = arguments.length;
var i__3509__auto___327 = (0);
while(true){
if((i__3509__auto___327 < len__3508__auto___326)){
args__3511__auto__.push((arguments[i__3509__auto___327]));

var G__328 = (i__3509__auto___327 + (1));
i__3509__auto___327 = G__328;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___325))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___325){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___325),args);
});})(g__5749__auto___325))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__5749__auto___325){
return (function (seq278){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq278));
});})(g__5749__auto___325))
;


var g__5749__auto___329 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__5749__auto___329){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__3511__auto__ = [];
var len__3508__auto___330 = arguments.length;
var i__3509__auto___331 = (0);
while(true){
if((i__3509__auto___331 < len__3508__auto___330)){
args__3511__auto__.push((arguments[i__3509__auto___331]));

var G__332 = (i__3509__auto___331 + (1));
i__3509__auto___331 = G__332;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___329))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___329){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___329),args);
});})(g__5749__auto___329))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__5749__auto___329){
return (function (seq279){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq279));
});})(g__5749__auto___329))
;


var g__5749__auto___333 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__5749__auto___333){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__3511__auto__ = [];
var len__3508__auto___334 = arguments.length;
var i__3509__auto___335 = (0);
while(true){
if((i__3509__auto___335 < len__3508__auto___334)){
args__3511__auto__.push((arguments[i__3509__auto___335]));

var G__336 = (i__3509__auto___335 + (1));
i__3509__auto___335 = G__336;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___333))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___333){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___333),args);
});})(g__5749__auto___333))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__5749__auto___333){
return (function (seq280){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq280));
});})(g__5749__auto___333))
;


var g__5749__auto___337 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__5749__auto___337){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__3511__auto__ = [];
var len__3508__auto___338 = arguments.length;
var i__3509__auto___339 = (0);
while(true){
if((i__3509__auto___339 < len__3508__auto___338)){
args__3511__auto__.push((arguments[i__3509__auto___339]));

var G__340 = (i__3509__auto___339 + (1));
i__3509__auto___339 = G__340;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___337))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___337){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___337),args);
});})(g__5749__auto___337))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__5749__auto___337){
return (function (seq281){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq281));
});})(g__5749__auto___337))
;


var g__5749__auto___341 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__5749__auto___341){
return (function cljs$spec$impl$gen$sample(var_args){
var args__3511__auto__ = [];
var len__3508__auto___342 = arguments.length;
var i__3509__auto___343 = (0);
while(true){
if((i__3509__auto___343 < len__3508__auto___342)){
args__3511__auto__.push((arguments[i__3509__auto___343]));

var G__344 = (i__3509__auto___343 + (1));
i__3509__auto___343 = G__344;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___341))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___341){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___341),args);
});})(g__5749__auto___341))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__5749__auto___341){
return (function (seq282){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq282));
});})(g__5749__auto___341))
;


var g__5749__auto___345 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__5749__auto___345){
return (function cljs$spec$impl$gen$return(var_args){
var args__3511__auto__ = [];
var len__3508__auto___346 = arguments.length;
var i__3509__auto___347 = (0);
while(true){
if((i__3509__auto___347 < len__3508__auto___346)){
args__3511__auto__.push((arguments[i__3509__auto___347]));

var G__348 = (i__3509__auto___347 + (1));
i__3509__auto___347 = G__348;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___345))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___345){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___345),args);
});})(g__5749__auto___345))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__5749__auto___345){
return (function (seq283){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq283));
});})(g__5749__auto___345))
;


var g__5749__auto___349 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__5749__auto___349){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__3511__auto__ = [];
var len__3508__auto___350 = arguments.length;
var i__3509__auto___351 = (0);
while(true){
if((i__3509__auto___351 < len__3508__auto___350)){
args__3511__auto__.push((arguments[i__3509__auto___351]));

var G__352 = (i__3509__auto___351 + (1));
i__3509__auto___351 = G__352;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___349))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___349){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___349),args);
});})(g__5749__auto___349))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__5749__auto___349){
return (function (seq284){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq284));
});})(g__5749__auto___349))
;

var g__5754__auto___374 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__5754__auto___374){
return (function cljs$spec$impl$gen$any(var_args){
var args__3511__auto__ = [];
var len__3508__auto___375 = arguments.length;
var i__3509__auto___376 = (0);
while(true){
if((i__3509__auto___376 < len__3508__auto___375)){
args__3511__auto__.push((arguments[i__3509__auto___376]));

var G__377 = (i__3509__auto___376 + (1));
i__3509__auto___376 = G__377;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___374))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___374){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___374);
});})(g__5754__auto___374))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__5754__auto___374){
return (function (seq353){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq353));
});})(g__5754__auto___374))
;


var g__5754__auto___378 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__5754__auto___378){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__3511__auto__ = [];
var len__3508__auto___379 = arguments.length;
var i__3509__auto___380 = (0);
while(true){
if((i__3509__auto___380 < len__3508__auto___379)){
args__3511__auto__.push((arguments[i__3509__auto___380]));

var G__381 = (i__3509__auto___380 + (1));
i__3509__auto___380 = G__381;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___378))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___378){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___378);
});})(g__5754__auto___378))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__5754__auto___378){
return (function (seq354){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq354));
});})(g__5754__auto___378))
;


var g__5754__auto___382 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__5754__auto___382){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__3511__auto__ = [];
var len__3508__auto___383 = arguments.length;
var i__3509__auto___384 = (0);
while(true){
if((i__3509__auto___384 < len__3508__auto___383)){
args__3511__auto__.push((arguments[i__3509__auto___384]));

var G__385 = (i__3509__auto___384 + (1));
i__3509__auto___384 = G__385;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___382))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___382){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___382);
});})(g__5754__auto___382))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__5754__auto___382){
return (function (seq355){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq355));
});})(g__5754__auto___382))
;


var g__5754__auto___386 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__5754__auto___386){
return (function cljs$spec$impl$gen$char(var_args){
var args__3511__auto__ = [];
var len__3508__auto___387 = arguments.length;
var i__3509__auto___388 = (0);
while(true){
if((i__3509__auto___388 < len__3508__auto___387)){
args__3511__auto__.push((arguments[i__3509__auto___388]));

var G__389 = (i__3509__auto___388 + (1));
i__3509__auto___388 = G__389;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___386))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___386){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___386);
});})(g__5754__auto___386))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__5754__auto___386){
return (function (seq356){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq356));
});})(g__5754__auto___386))
;


var g__5754__auto___390 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__5754__auto___390){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__3511__auto__ = [];
var len__3508__auto___391 = arguments.length;
var i__3509__auto___392 = (0);
while(true){
if((i__3509__auto___392 < len__3508__auto___391)){
args__3511__auto__.push((arguments[i__3509__auto___392]));

var G__393 = (i__3509__auto___392 + (1));
i__3509__auto___392 = G__393;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___390))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___390){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___390);
});})(g__5754__auto___390))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__5754__auto___390){
return (function (seq357){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq357));
});})(g__5754__auto___390))
;


var g__5754__auto___394 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__5754__auto___394){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__3511__auto__ = [];
var len__3508__auto___395 = arguments.length;
var i__3509__auto___396 = (0);
while(true){
if((i__3509__auto___396 < len__3508__auto___395)){
args__3511__auto__.push((arguments[i__3509__auto___396]));

var G__397 = (i__3509__auto___396 + (1));
i__3509__auto___396 = G__397;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___394))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___394){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___394);
});})(g__5754__auto___394))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__5754__auto___394){
return (function (seq358){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq358));
});})(g__5754__auto___394))
;


var g__5754__auto___398 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__5754__auto___398){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__3511__auto__ = [];
var len__3508__auto___399 = arguments.length;
var i__3509__auto___400 = (0);
while(true){
if((i__3509__auto___400 < len__3508__auto___399)){
args__3511__auto__.push((arguments[i__3509__auto___400]));

var G__401 = (i__3509__auto___400 + (1));
i__3509__auto___400 = G__401;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___398))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___398){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___398);
});})(g__5754__auto___398))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__5754__auto___398){
return (function (seq359){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq359));
});})(g__5754__auto___398))
;


var g__5754__auto___402 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__5754__auto___402){
return (function cljs$spec$impl$gen$double(var_args){
var args__3511__auto__ = [];
var len__3508__auto___403 = arguments.length;
var i__3509__auto___404 = (0);
while(true){
if((i__3509__auto___404 < len__3508__auto___403)){
args__3511__auto__.push((arguments[i__3509__auto___404]));

var G__405 = (i__3509__auto___404 + (1));
i__3509__auto___404 = G__405;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___402))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___402){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___402);
});})(g__5754__auto___402))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__5754__auto___402){
return (function (seq360){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq360));
});})(g__5754__auto___402))
;


var g__5754__auto___406 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__5754__auto___406){
return (function cljs$spec$impl$gen$int(var_args){
var args__3511__auto__ = [];
var len__3508__auto___407 = arguments.length;
var i__3509__auto___408 = (0);
while(true){
if((i__3509__auto___408 < len__3508__auto___407)){
args__3511__auto__.push((arguments[i__3509__auto___408]));

var G__409 = (i__3509__auto___408 + (1));
i__3509__auto___408 = G__409;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___406))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___406){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___406);
});})(g__5754__auto___406))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__5754__auto___406){
return (function (seq361){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq361));
});})(g__5754__auto___406))
;


var g__5754__auto___410 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__5754__auto___410){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__3511__auto__ = [];
var len__3508__auto___411 = arguments.length;
var i__3509__auto___412 = (0);
while(true){
if((i__3509__auto___412 < len__3508__auto___411)){
args__3511__auto__.push((arguments[i__3509__auto___412]));

var G__413 = (i__3509__auto___412 + (1));
i__3509__auto___412 = G__413;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___410))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___410){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___410);
});})(g__5754__auto___410))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__5754__auto___410){
return (function (seq362){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq362));
});})(g__5754__auto___410))
;


var g__5754__auto___414 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__5754__auto___414){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__3511__auto__ = [];
var len__3508__auto___415 = arguments.length;
var i__3509__auto___416 = (0);
while(true){
if((i__3509__auto___416 < len__3508__auto___415)){
args__3511__auto__.push((arguments[i__3509__auto___416]));

var G__417 = (i__3509__auto___416 + (1));
i__3509__auto___416 = G__417;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___414))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___414){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___414);
});})(g__5754__auto___414))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__5754__auto___414){
return (function (seq363){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq363));
});})(g__5754__auto___414))
;


var g__5754__auto___418 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__5754__auto___418){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__3511__auto__ = [];
var len__3508__auto___419 = arguments.length;
var i__3509__auto___420 = (0);
while(true){
if((i__3509__auto___420 < len__3508__auto___419)){
args__3511__auto__.push((arguments[i__3509__auto___420]));

var G__421 = (i__3509__auto___420 + (1));
i__3509__auto___420 = G__421;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___418))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___418){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___418);
});})(g__5754__auto___418))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__5754__auto___418){
return (function (seq364){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq364));
});})(g__5754__auto___418))
;


var g__5754__auto___422 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__5754__auto___422){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__3511__auto__ = [];
var len__3508__auto___423 = arguments.length;
var i__3509__auto___424 = (0);
while(true){
if((i__3509__auto___424 < len__3508__auto___423)){
args__3511__auto__.push((arguments[i__3509__auto___424]));

var G__425 = (i__3509__auto___424 + (1));
i__3509__auto___424 = G__425;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___422))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___422){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___422);
});})(g__5754__auto___422))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__5754__auto___422){
return (function (seq365){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq365));
});})(g__5754__auto___422))
;


var g__5754__auto___426 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__5754__auto___426){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__3511__auto__ = [];
var len__3508__auto___427 = arguments.length;
var i__3509__auto___428 = (0);
while(true){
if((i__3509__auto___428 < len__3508__auto___427)){
args__3511__auto__.push((arguments[i__3509__auto___428]));

var G__429 = (i__3509__auto___428 + (1));
i__3509__auto___428 = G__429;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___426))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___426){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___426);
});})(g__5754__auto___426))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__5754__auto___426){
return (function (seq366){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq366));
});})(g__5754__auto___426))
;


var g__5754__auto___430 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__5754__auto___430){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__3511__auto__ = [];
var len__3508__auto___431 = arguments.length;
var i__3509__auto___432 = (0);
while(true){
if((i__3509__auto___432 < len__3508__auto___431)){
args__3511__auto__.push((arguments[i__3509__auto___432]));

var G__433 = (i__3509__auto___432 + (1));
i__3509__auto___432 = G__433;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___430))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___430){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___430);
});})(g__5754__auto___430))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__5754__auto___430){
return (function (seq367){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq367));
});})(g__5754__auto___430))
;


var g__5754__auto___434 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__5754__auto___434){
return (function cljs$spec$impl$gen$string(var_args){
var args__3511__auto__ = [];
var len__3508__auto___435 = arguments.length;
var i__3509__auto___436 = (0);
while(true){
if((i__3509__auto___436 < len__3508__auto___435)){
args__3511__auto__.push((arguments[i__3509__auto___436]));

var G__437 = (i__3509__auto___436 + (1));
i__3509__auto___436 = G__437;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___434))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___434){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___434);
});})(g__5754__auto___434))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__5754__auto___434){
return (function (seq368){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq368));
});})(g__5754__auto___434))
;


var g__5754__auto___438 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__5754__auto___438){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__3511__auto__ = [];
var len__3508__auto___439 = arguments.length;
var i__3509__auto___440 = (0);
while(true){
if((i__3509__auto___440 < len__3508__auto___439)){
args__3511__auto__.push((arguments[i__3509__auto___440]));

var G__441 = (i__3509__auto___440 + (1));
i__3509__auto___440 = G__441;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___438))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___438){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___438);
});})(g__5754__auto___438))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__5754__auto___438){
return (function (seq369){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq369));
});})(g__5754__auto___438))
;


var g__5754__auto___442 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__5754__auto___442){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__3511__auto__ = [];
var len__3508__auto___443 = arguments.length;
var i__3509__auto___444 = (0);
while(true){
if((i__3509__auto___444 < len__3508__auto___443)){
args__3511__auto__.push((arguments[i__3509__auto___444]));

var G__445 = (i__3509__auto___444 + (1));
i__3509__auto___444 = G__445;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___442))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___442){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___442);
});})(g__5754__auto___442))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__5754__auto___442){
return (function (seq370){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq370));
});})(g__5754__auto___442))
;


var g__5754__auto___446 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__5754__auto___446){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__3511__auto__ = [];
var len__3508__auto___447 = arguments.length;
var i__3509__auto___448 = (0);
while(true){
if((i__3509__auto___448 < len__3508__auto___447)){
args__3511__auto__.push((arguments[i__3509__auto___448]));

var G__449 = (i__3509__auto___448 + (1));
i__3509__auto___448 = G__449;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___446))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___446){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___446);
});})(g__5754__auto___446))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__5754__auto___446){
return (function (seq371){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq371));
});})(g__5754__auto___446))
;


var g__5754__auto___450 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__5754__auto___450){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__3511__auto__ = [];
var len__3508__auto___451 = arguments.length;
var i__3509__auto___452 = (0);
while(true){
if((i__3509__auto___452 < len__3508__auto___451)){
args__3511__auto__.push((arguments[i__3509__auto___452]));

var G__453 = (i__3509__auto___452 + (1));
i__3509__auto___452 = G__453;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___450))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___450){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___450);
});})(g__5754__auto___450))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__5754__auto___450){
return (function (seq372){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq372));
});})(g__5754__auto___450))
;


var g__5754__auto___454 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__5754__auto___454){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__3511__auto__ = [];
var len__3508__auto___455 = arguments.length;
var i__3509__auto___456 = (0);
while(true){
if((i__3509__auto___456 < len__3508__auto___455)){
args__3511__auto__.push((arguments[i__3509__auto___456]));

var G__457 = (i__3509__auto___456 + (1));
i__3509__auto___456 = G__457;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___454))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___454){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___454);
});})(g__5754__auto___454))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__5754__auto___454){
return (function (seq373){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq373));
});})(g__5754__auto___454))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__3511__auto__ = [];
var len__3508__auto___460 = arguments.length;
var i__3509__auto___461 = (0);
while(true){
if((i__3509__auto___461 < len__3508__auto___460)){
args__3511__auto__.push((arguments[i__3509__auto___461]));

var G__462 = (i__3509__auto___461 + (1));
i__3509__auto___461 = G__462;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__458_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__458_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq459){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq459));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__463_SHARP_){
return (new Date(p1__463_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map