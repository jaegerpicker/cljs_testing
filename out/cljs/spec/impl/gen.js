// Compiled by ClojureScript 1.9.89 {:target :nodejs}
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
var len__3508__auto___3998 = arguments.length;
var i__3509__auto___3999 = (0);
while(true){
if((i__3509__auto___3999 < len__3508__auto___3998)){
args__3511__auto__.push((arguments[i__3509__auto___3999]));

var G__4000 = (i__3509__auto___3999 + (1));
i__3509__auto___3999 = G__4000;
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

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq3997){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3997));
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
var len__3508__auto___4002 = arguments.length;
var i__3509__auto___4003 = (0);
while(true){
if((i__3509__auto___4003 < len__3508__auto___4002)){
args__3511__auto__.push((arguments[i__3509__auto___4003]));

var G__4004 = (i__3509__auto___4003 + (1));
i__3509__auto___4003 = G__4004;
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

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq4001){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4001));
});

var g_QMARK__4005 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_4006 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__4005){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__4005))
,null));
var mkg_4007 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__4005,g_4006){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__4005,g_4006))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__4005,g_4006,mkg_4007){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__4005).call(null,x);
});})(g_QMARK__4005,g_4006,mkg_4007))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__4005,g_4006,mkg_4007){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_4007).call(null,gfn);
});})(g_QMARK__4005,g_4006,mkg_4007))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__4005,g_4006,mkg_4007){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_4006).call(null,generator);
});})(g_QMARK__4005,g_4006,mkg_4007))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__5749__auto___4025 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__5749__auto___4025){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4026 = arguments.length;
var i__3509__auto___4027 = (0);
while(true){
if((i__3509__auto___4027 < len__3508__auto___4026)){
args__3511__auto__.push((arguments[i__3509__auto___4027]));

var G__4028 = (i__3509__auto___4027 + (1));
i__3509__auto___4027 = G__4028;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___4025))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___4025){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___4025),args);
});})(g__5749__auto___4025))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__5749__auto___4025){
return (function (seq4008){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4008));
});})(g__5749__auto___4025))
;


var g__5749__auto___4029 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__5749__auto___4029){
return (function cljs$spec$impl$gen$list(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4030 = arguments.length;
var i__3509__auto___4031 = (0);
while(true){
if((i__3509__auto___4031 < len__3508__auto___4030)){
args__3511__auto__.push((arguments[i__3509__auto___4031]));

var G__4032 = (i__3509__auto___4031 + (1));
i__3509__auto___4031 = G__4032;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___4029))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___4029){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___4029),args);
});})(g__5749__auto___4029))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__5749__auto___4029){
return (function (seq4009){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4009));
});})(g__5749__auto___4029))
;


var g__5749__auto___4033 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__5749__auto___4033){
return (function cljs$spec$impl$gen$map(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4034 = arguments.length;
var i__3509__auto___4035 = (0);
while(true){
if((i__3509__auto___4035 < len__3508__auto___4034)){
args__3511__auto__.push((arguments[i__3509__auto___4035]));

var G__4036 = (i__3509__auto___4035 + (1));
i__3509__auto___4035 = G__4036;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___4033))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___4033){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___4033),args);
});})(g__5749__auto___4033))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__5749__auto___4033){
return (function (seq4010){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4010));
});})(g__5749__auto___4033))
;


var g__5749__auto___4037 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__5749__auto___4037){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4038 = arguments.length;
var i__3509__auto___4039 = (0);
while(true){
if((i__3509__auto___4039 < len__3508__auto___4038)){
args__3511__auto__.push((arguments[i__3509__auto___4039]));

var G__4040 = (i__3509__auto___4039 + (1));
i__3509__auto___4039 = G__4040;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___4037))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___4037){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___4037),args);
});})(g__5749__auto___4037))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__5749__auto___4037){
return (function (seq4011){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4011));
});})(g__5749__auto___4037))
;


var g__5749__auto___4041 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__5749__auto___4041){
return (function cljs$spec$impl$gen$set(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4042 = arguments.length;
var i__3509__auto___4043 = (0);
while(true){
if((i__3509__auto___4043 < len__3508__auto___4042)){
args__3511__auto__.push((arguments[i__3509__auto___4043]));

var G__4044 = (i__3509__auto___4043 + (1));
i__3509__auto___4043 = G__4044;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___4041))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___4041){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___4041),args);
});})(g__5749__auto___4041))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__5749__auto___4041){
return (function (seq4012){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4012));
});})(g__5749__auto___4041))
;


var g__5749__auto___4045 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__5749__auto___4045){
return (function cljs$spec$impl$gen$vector(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4046 = arguments.length;
var i__3509__auto___4047 = (0);
while(true){
if((i__3509__auto___4047 < len__3508__auto___4046)){
args__3511__auto__.push((arguments[i__3509__auto___4047]));

var G__4048 = (i__3509__auto___4047 + (1));
i__3509__auto___4047 = G__4048;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___4045))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___4045){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___4045),args);
});})(g__5749__auto___4045))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__5749__auto___4045){
return (function (seq4013){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4013));
});})(g__5749__auto___4045))
;


var g__5749__auto___4049 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__5749__auto___4049){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4050 = arguments.length;
var i__3509__auto___4051 = (0);
while(true){
if((i__3509__auto___4051 < len__3508__auto___4050)){
args__3511__auto__.push((arguments[i__3509__auto___4051]));

var G__4052 = (i__3509__auto___4051 + (1));
i__3509__auto___4051 = G__4052;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___4049))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___4049){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___4049),args);
});})(g__5749__auto___4049))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__5749__auto___4049){
return (function (seq4014){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4014));
});})(g__5749__auto___4049))
;


var g__5749__auto___4053 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__5749__auto___4053){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4054 = arguments.length;
var i__3509__auto___4055 = (0);
while(true){
if((i__3509__auto___4055 < len__3508__auto___4054)){
args__3511__auto__.push((arguments[i__3509__auto___4055]));

var G__4056 = (i__3509__auto___4055 + (1));
i__3509__auto___4055 = G__4056;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___4053))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___4053){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___4053),args);
});})(g__5749__auto___4053))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__5749__auto___4053){
return (function (seq4015){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4015));
});})(g__5749__auto___4053))
;


var g__5749__auto___4057 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__5749__auto___4057){
return (function cljs$spec$impl$gen$elements(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4058 = arguments.length;
var i__3509__auto___4059 = (0);
while(true){
if((i__3509__auto___4059 < len__3508__auto___4058)){
args__3511__auto__.push((arguments[i__3509__auto___4059]));

var G__4060 = (i__3509__auto___4059 + (1));
i__3509__auto___4059 = G__4060;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___4057))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___4057){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___4057),args);
});})(g__5749__auto___4057))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__5749__auto___4057){
return (function (seq4016){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4016));
});})(g__5749__auto___4057))
;


var g__5749__auto___4061 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__5749__auto___4061){
return (function cljs$spec$impl$gen$bind(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4062 = arguments.length;
var i__3509__auto___4063 = (0);
while(true){
if((i__3509__auto___4063 < len__3508__auto___4062)){
args__3511__auto__.push((arguments[i__3509__auto___4063]));

var G__4064 = (i__3509__auto___4063 + (1));
i__3509__auto___4063 = G__4064;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___4061))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___4061){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___4061),args);
});})(g__5749__auto___4061))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__5749__auto___4061){
return (function (seq4017){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4017));
});})(g__5749__auto___4061))
;


var g__5749__auto___4065 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__5749__auto___4065){
return (function cljs$spec$impl$gen$choose(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4066 = arguments.length;
var i__3509__auto___4067 = (0);
while(true){
if((i__3509__auto___4067 < len__3508__auto___4066)){
args__3511__auto__.push((arguments[i__3509__auto___4067]));

var G__4068 = (i__3509__auto___4067 + (1));
i__3509__auto___4067 = G__4068;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___4065))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___4065){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___4065),args);
});})(g__5749__auto___4065))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__5749__auto___4065){
return (function (seq4018){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4018));
});})(g__5749__auto___4065))
;


var g__5749__auto___4069 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__5749__auto___4069){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4070 = arguments.length;
var i__3509__auto___4071 = (0);
while(true){
if((i__3509__auto___4071 < len__3508__auto___4070)){
args__3511__auto__.push((arguments[i__3509__auto___4071]));

var G__4072 = (i__3509__auto___4071 + (1));
i__3509__auto___4071 = G__4072;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___4069))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___4069){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___4069),args);
});})(g__5749__auto___4069))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__5749__auto___4069){
return (function (seq4019){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4019));
});})(g__5749__auto___4069))
;


var g__5749__auto___4073 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__5749__auto___4073){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4074 = arguments.length;
var i__3509__auto___4075 = (0);
while(true){
if((i__3509__auto___4075 < len__3508__auto___4074)){
args__3511__auto__.push((arguments[i__3509__auto___4075]));

var G__4076 = (i__3509__auto___4075 + (1));
i__3509__auto___4075 = G__4076;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___4073))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___4073){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___4073),args);
});})(g__5749__auto___4073))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__5749__auto___4073){
return (function (seq4020){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4020));
});})(g__5749__auto___4073))
;


var g__5749__auto___4077 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__5749__auto___4077){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4078 = arguments.length;
var i__3509__auto___4079 = (0);
while(true){
if((i__3509__auto___4079 < len__3508__auto___4078)){
args__3511__auto__.push((arguments[i__3509__auto___4079]));

var G__4080 = (i__3509__auto___4079 + (1));
i__3509__auto___4079 = G__4080;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___4077))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___4077){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___4077),args);
});})(g__5749__auto___4077))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__5749__auto___4077){
return (function (seq4021){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4021));
});})(g__5749__auto___4077))
;


var g__5749__auto___4081 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__5749__auto___4081){
return (function cljs$spec$impl$gen$sample(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4082 = arguments.length;
var i__3509__auto___4083 = (0);
while(true){
if((i__3509__auto___4083 < len__3508__auto___4082)){
args__3511__auto__.push((arguments[i__3509__auto___4083]));

var G__4084 = (i__3509__auto___4083 + (1));
i__3509__auto___4083 = G__4084;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___4081))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___4081){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___4081),args);
});})(g__5749__auto___4081))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__5749__auto___4081){
return (function (seq4022){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4022));
});})(g__5749__auto___4081))
;


var g__5749__auto___4085 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__5749__auto___4085){
return (function cljs$spec$impl$gen$return(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4086 = arguments.length;
var i__3509__auto___4087 = (0);
while(true){
if((i__3509__auto___4087 < len__3508__auto___4086)){
args__3511__auto__.push((arguments[i__3509__auto___4087]));

var G__4088 = (i__3509__auto___4087 + (1));
i__3509__auto___4087 = G__4088;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___4085))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___4085){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___4085),args);
});})(g__5749__auto___4085))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__5749__auto___4085){
return (function (seq4023){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4023));
});})(g__5749__auto___4085))
;


var g__5749__auto___4089 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__5749__auto___4089){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4090 = arguments.length;
var i__3509__auto___4091 = (0);
while(true){
if((i__3509__auto___4091 < len__3508__auto___4090)){
args__3511__auto__.push((arguments[i__3509__auto___4091]));

var G__4092 = (i__3509__auto___4091 + (1));
i__3509__auto___4091 = G__4092;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___4089))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___4089){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___4089),args);
});})(g__5749__auto___4089))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__5749__auto___4089){
return (function (seq4024){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4024));
});})(g__5749__auto___4089))
;

var g__5754__auto___4114 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__5754__auto___4114){
return (function cljs$spec$impl$gen$any(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4115 = arguments.length;
var i__3509__auto___4116 = (0);
while(true){
if((i__3509__auto___4116 < len__3508__auto___4115)){
args__3511__auto__.push((arguments[i__3509__auto___4116]));

var G__4117 = (i__3509__auto___4116 + (1));
i__3509__auto___4116 = G__4117;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___4114))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___4114){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___4114);
});})(g__5754__auto___4114))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__5754__auto___4114){
return (function (seq4093){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4093));
});})(g__5754__auto___4114))
;


var g__5754__auto___4118 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__5754__auto___4118){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4119 = arguments.length;
var i__3509__auto___4120 = (0);
while(true){
if((i__3509__auto___4120 < len__3508__auto___4119)){
args__3511__auto__.push((arguments[i__3509__auto___4120]));

var G__4121 = (i__3509__auto___4120 + (1));
i__3509__auto___4120 = G__4121;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___4118))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___4118){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___4118);
});})(g__5754__auto___4118))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__5754__auto___4118){
return (function (seq4094){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4094));
});})(g__5754__auto___4118))
;


var g__5754__auto___4122 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__5754__auto___4122){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4123 = arguments.length;
var i__3509__auto___4124 = (0);
while(true){
if((i__3509__auto___4124 < len__3508__auto___4123)){
args__3511__auto__.push((arguments[i__3509__auto___4124]));

var G__4125 = (i__3509__auto___4124 + (1));
i__3509__auto___4124 = G__4125;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___4122))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___4122){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___4122);
});})(g__5754__auto___4122))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__5754__auto___4122){
return (function (seq4095){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4095));
});})(g__5754__auto___4122))
;


var g__5754__auto___4126 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__5754__auto___4126){
return (function cljs$spec$impl$gen$char(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4127 = arguments.length;
var i__3509__auto___4128 = (0);
while(true){
if((i__3509__auto___4128 < len__3508__auto___4127)){
args__3511__auto__.push((arguments[i__3509__auto___4128]));

var G__4129 = (i__3509__auto___4128 + (1));
i__3509__auto___4128 = G__4129;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___4126))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___4126){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___4126);
});})(g__5754__auto___4126))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__5754__auto___4126){
return (function (seq4096){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4096));
});})(g__5754__auto___4126))
;


var g__5754__auto___4130 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__5754__auto___4130){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4131 = arguments.length;
var i__3509__auto___4132 = (0);
while(true){
if((i__3509__auto___4132 < len__3508__auto___4131)){
args__3511__auto__.push((arguments[i__3509__auto___4132]));

var G__4133 = (i__3509__auto___4132 + (1));
i__3509__auto___4132 = G__4133;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___4130))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___4130){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___4130);
});})(g__5754__auto___4130))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__5754__auto___4130){
return (function (seq4097){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4097));
});})(g__5754__auto___4130))
;


var g__5754__auto___4134 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__5754__auto___4134){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4135 = arguments.length;
var i__3509__auto___4136 = (0);
while(true){
if((i__3509__auto___4136 < len__3508__auto___4135)){
args__3511__auto__.push((arguments[i__3509__auto___4136]));

var G__4137 = (i__3509__auto___4136 + (1));
i__3509__auto___4136 = G__4137;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___4134))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___4134){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___4134);
});})(g__5754__auto___4134))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__5754__auto___4134){
return (function (seq4098){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4098));
});})(g__5754__auto___4134))
;


var g__5754__auto___4138 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__5754__auto___4138){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4139 = arguments.length;
var i__3509__auto___4140 = (0);
while(true){
if((i__3509__auto___4140 < len__3508__auto___4139)){
args__3511__auto__.push((arguments[i__3509__auto___4140]));

var G__4141 = (i__3509__auto___4140 + (1));
i__3509__auto___4140 = G__4141;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___4138))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___4138){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___4138);
});})(g__5754__auto___4138))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__5754__auto___4138){
return (function (seq4099){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4099));
});})(g__5754__auto___4138))
;


var g__5754__auto___4142 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__5754__auto___4142){
return (function cljs$spec$impl$gen$double(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4143 = arguments.length;
var i__3509__auto___4144 = (0);
while(true){
if((i__3509__auto___4144 < len__3508__auto___4143)){
args__3511__auto__.push((arguments[i__3509__auto___4144]));

var G__4145 = (i__3509__auto___4144 + (1));
i__3509__auto___4144 = G__4145;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___4142))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___4142){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___4142);
});})(g__5754__auto___4142))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__5754__auto___4142){
return (function (seq4100){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4100));
});})(g__5754__auto___4142))
;


var g__5754__auto___4146 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__5754__auto___4146){
return (function cljs$spec$impl$gen$int(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4147 = arguments.length;
var i__3509__auto___4148 = (0);
while(true){
if((i__3509__auto___4148 < len__3508__auto___4147)){
args__3511__auto__.push((arguments[i__3509__auto___4148]));

var G__4149 = (i__3509__auto___4148 + (1));
i__3509__auto___4148 = G__4149;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___4146))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___4146){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___4146);
});})(g__5754__auto___4146))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__5754__auto___4146){
return (function (seq4101){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4101));
});})(g__5754__auto___4146))
;


var g__5754__auto___4150 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__5754__auto___4150){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4151 = arguments.length;
var i__3509__auto___4152 = (0);
while(true){
if((i__3509__auto___4152 < len__3508__auto___4151)){
args__3511__auto__.push((arguments[i__3509__auto___4152]));

var G__4153 = (i__3509__auto___4152 + (1));
i__3509__auto___4152 = G__4153;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___4150))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___4150){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___4150);
});})(g__5754__auto___4150))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__5754__auto___4150){
return (function (seq4102){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4102));
});})(g__5754__auto___4150))
;


var g__5754__auto___4154 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__5754__auto___4154){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4155 = arguments.length;
var i__3509__auto___4156 = (0);
while(true){
if((i__3509__auto___4156 < len__3508__auto___4155)){
args__3511__auto__.push((arguments[i__3509__auto___4156]));

var G__4157 = (i__3509__auto___4156 + (1));
i__3509__auto___4156 = G__4157;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___4154))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___4154){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___4154);
});})(g__5754__auto___4154))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__5754__auto___4154){
return (function (seq4103){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4103));
});})(g__5754__auto___4154))
;


var g__5754__auto___4158 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__5754__auto___4158){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4159 = arguments.length;
var i__3509__auto___4160 = (0);
while(true){
if((i__3509__auto___4160 < len__3508__auto___4159)){
args__3511__auto__.push((arguments[i__3509__auto___4160]));

var G__4161 = (i__3509__auto___4160 + (1));
i__3509__auto___4160 = G__4161;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___4158))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___4158){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___4158);
});})(g__5754__auto___4158))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__5754__auto___4158){
return (function (seq4104){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4104));
});})(g__5754__auto___4158))
;


var g__5754__auto___4162 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__5754__auto___4162){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4163 = arguments.length;
var i__3509__auto___4164 = (0);
while(true){
if((i__3509__auto___4164 < len__3508__auto___4163)){
args__3511__auto__.push((arguments[i__3509__auto___4164]));

var G__4165 = (i__3509__auto___4164 + (1));
i__3509__auto___4164 = G__4165;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___4162))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___4162){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___4162);
});})(g__5754__auto___4162))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__5754__auto___4162){
return (function (seq4105){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4105));
});})(g__5754__auto___4162))
;


var g__5754__auto___4166 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__5754__auto___4166){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4167 = arguments.length;
var i__3509__auto___4168 = (0);
while(true){
if((i__3509__auto___4168 < len__3508__auto___4167)){
args__3511__auto__.push((arguments[i__3509__auto___4168]));

var G__4169 = (i__3509__auto___4168 + (1));
i__3509__auto___4168 = G__4169;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___4166))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___4166){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___4166);
});})(g__5754__auto___4166))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__5754__auto___4166){
return (function (seq4106){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4106));
});})(g__5754__auto___4166))
;


var g__5754__auto___4170 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__5754__auto___4170){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4171 = arguments.length;
var i__3509__auto___4172 = (0);
while(true){
if((i__3509__auto___4172 < len__3508__auto___4171)){
args__3511__auto__.push((arguments[i__3509__auto___4172]));

var G__4173 = (i__3509__auto___4172 + (1));
i__3509__auto___4172 = G__4173;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___4170))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___4170){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___4170);
});})(g__5754__auto___4170))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__5754__auto___4170){
return (function (seq4107){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4107));
});})(g__5754__auto___4170))
;


var g__5754__auto___4174 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__5754__auto___4174){
return (function cljs$spec$impl$gen$string(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4175 = arguments.length;
var i__3509__auto___4176 = (0);
while(true){
if((i__3509__auto___4176 < len__3508__auto___4175)){
args__3511__auto__.push((arguments[i__3509__auto___4176]));

var G__4177 = (i__3509__auto___4176 + (1));
i__3509__auto___4176 = G__4177;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___4174))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___4174){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___4174);
});})(g__5754__auto___4174))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__5754__auto___4174){
return (function (seq4108){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4108));
});})(g__5754__auto___4174))
;


var g__5754__auto___4178 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__5754__auto___4178){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4179 = arguments.length;
var i__3509__auto___4180 = (0);
while(true){
if((i__3509__auto___4180 < len__3508__auto___4179)){
args__3511__auto__.push((arguments[i__3509__auto___4180]));

var G__4181 = (i__3509__auto___4180 + (1));
i__3509__auto___4180 = G__4181;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___4178))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___4178){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___4178);
});})(g__5754__auto___4178))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__5754__auto___4178){
return (function (seq4109){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4109));
});})(g__5754__auto___4178))
;


var g__5754__auto___4182 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__5754__auto___4182){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4183 = arguments.length;
var i__3509__auto___4184 = (0);
while(true){
if((i__3509__auto___4184 < len__3508__auto___4183)){
args__3511__auto__.push((arguments[i__3509__auto___4184]));

var G__4185 = (i__3509__auto___4184 + (1));
i__3509__auto___4184 = G__4185;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___4182))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___4182){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___4182);
});})(g__5754__auto___4182))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__5754__auto___4182){
return (function (seq4110){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4110));
});})(g__5754__auto___4182))
;


var g__5754__auto___4186 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__5754__auto___4186){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4187 = arguments.length;
var i__3509__auto___4188 = (0);
while(true){
if((i__3509__auto___4188 < len__3508__auto___4187)){
args__3511__auto__.push((arguments[i__3509__auto___4188]));

var G__4189 = (i__3509__auto___4188 + (1));
i__3509__auto___4188 = G__4189;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___4186))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___4186){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___4186);
});})(g__5754__auto___4186))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__5754__auto___4186){
return (function (seq4111){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4111));
});})(g__5754__auto___4186))
;


var g__5754__auto___4190 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__5754__auto___4190){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4191 = arguments.length;
var i__3509__auto___4192 = (0);
while(true){
if((i__3509__auto___4192 < len__3508__auto___4191)){
args__3511__auto__.push((arguments[i__3509__auto___4192]));

var G__4193 = (i__3509__auto___4192 + (1));
i__3509__auto___4192 = G__4193;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___4190))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___4190){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___4190);
});})(g__5754__auto___4190))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__5754__auto___4190){
return (function (seq4112){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4112));
});})(g__5754__auto___4190))
;


var g__5754__auto___4194 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__5754__auto___4194){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4195 = arguments.length;
var i__3509__auto___4196 = (0);
while(true){
if((i__3509__auto___4196 < len__3508__auto___4195)){
args__3511__auto__.push((arguments[i__3509__auto___4196]));

var G__4197 = (i__3509__auto___4196 + (1));
i__3509__auto___4196 = G__4197;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___4194))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___4194){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___4194);
});})(g__5754__auto___4194))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__5754__auto___4194){
return (function (seq4113){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4113));
});})(g__5754__auto___4194))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4200 = arguments.length;
var i__3509__auto___4201 = (0);
while(true){
if((i__3509__auto___4201 < len__3508__auto___4200)){
args__3511__auto__.push((arguments[i__3509__auto___4201]));

var G__4202 = (i__3509__auto___4201 + (1));
i__3509__auto___4201 = G__4202;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__4198_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__4198_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq4199){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4199));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__4203_SHARP_){
return (new Date(p1__4203_SHARP_));
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