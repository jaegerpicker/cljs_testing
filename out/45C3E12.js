goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__4362__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4363__i = 0, G__4363__a = new Array(arguments.length -  0);
while (G__4363__i < G__4363__a.length) {G__4363__a[G__4363__i] = arguments[G__4363__i + 0]; ++G__4363__i;}
  args = new cljs.core.IndexedSeq(G__4363__a,0);
} 
return G__4362__delegate.call(this,args);};
G__4362.cljs$lang$maxFixedArity = 0;
G__4362.cljs$lang$applyTo = (function (arglist__4364){
var args = cljs.core.seq(arglist__4364);
return G__4362__delegate(args);
});
G__4362.cljs$core$IFn$_invoke$arity$variadic = G__4362__delegate;
return G__4362;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__4365__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4365 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4366__i = 0, G__4366__a = new Array(arguments.length -  0);
while (G__4366__i < G__4366__a.length) {G__4366__a[G__4366__i] = arguments[G__4366__i + 0]; ++G__4366__i;}
  args = new cljs.core.IndexedSeq(G__4366__a,0);
} 
return G__4365__delegate.call(this,args);};
G__4365.cljs$lang$maxFixedArity = 0;
G__4365.cljs$lang$applyTo = (function (arglist__4367){
var args = cljs.core.seq(arglist__4367);
return G__4365__delegate(args);
});
G__4365.cljs$core$IFn$_invoke$arity$variadic = G__4365__delegate;
return G__4365;
})()
;

return null;
});
