goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1511__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1511 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1512__i = 0, G__1512__a = new Array(arguments.length -  0);
while (G__1512__i < G__1512__a.length) {G__1512__a[G__1512__i] = arguments[G__1512__i + 0]; ++G__1512__i;}
  args = new cljs.core.IndexedSeq(G__1512__a,0);
} 
return G__1511__delegate.call(this,args);};
G__1511.cljs$lang$maxFixedArity = 0;
G__1511.cljs$lang$applyTo = (function (arglist__1513){
var args = cljs.core.seq(arglist__1513);
return G__1511__delegate(args);
});
G__1511.cljs$core$IFn$_invoke$arity$variadic = G__1511__delegate;
return G__1511;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1514__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1514 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1515__i = 0, G__1515__a = new Array(arguments.length -  0);
while (G__1515__i < G__1515__a.length) {G__1515__a[G__1515__i] = arguments[G__1515__i + 0]; ++G__1515__i;}
  args = new cljs.core.IndexedSeq(G__1515__a,0);
} 
return G__1514__delegate.call(this,args);};
G__1514.cljs$lang$maxFixedArity = 0;
G__1514.cljs$lang$applyTo = (function (arglist__1516){
var args = cljs.core.seq(arglist__1516);
return G__1514__delegate(args);
});
G__1514.cljs$core$IFn$_invoke$arity$variadic = G__1514__delegate;
return G__1514;
})()
;

return null;
});
