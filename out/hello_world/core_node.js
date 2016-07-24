// Compiled by ClojureScript 1.9.89 {:target :nodejs}
goog.provide('hello_world.core_node');
goog.require('cljs.core');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
hello_world.core_node._main = (function hello_world$core_node$_main(var_args){
var args__3511__auto__ = [];
var len__3508__auto___4357 = arguments.length;
var i__3509__auto___4358 = (0);
while(true){
if((i__3509__auto___4358 < len__3508__auto___4357)){
args__3511__auto__.push((arguments[i__3509__auto___4358]));

var G__4359 = (i__3509__auto___4358 + (1));
i__3509__auto___4358 = G__4359;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return hello_world.core_node._main.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});

hello_world.core_node._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.println.call(null,"Hello world!");
});

hello_world.core_node._main.cljs$lang$maxFixedArity = (0);

hello_world.core_node._main.cljs$lang$applyTo = (function (seq4356){
return hello_world.core_node._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4356));
});

cljs.core._STAR_main_cli_fn_STAR_ = hello_world.core_node._main;

//# sourceMappingURL=core_node.js.map