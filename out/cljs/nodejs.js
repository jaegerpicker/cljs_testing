// Compiled by ClojureScript 1.9.89 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__4348__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4349__i = 0, G__4349__a = new Array(arguments.length -  0);
while (G__4349__i < G__4349__a.length) {G__4349__a[G__4349__i] = arguments[G__4349__i + 0]; ++G__4349__i;}
  args = new cljs.core.IndexedSeq(G__4349__a,0);
} 
return G__4348__delegate.call(this,args);};
G__4348.cljs$lang$maxFixedArity = 0;
G__4348.cljs$lang$applyTo = (function (arglist__4350){
var args = cljs.core.seq(arglist__4350);
return G__4348__delegate(args);
});
G__4348.cljs$core$IFn$_invoke$arity$variadic = G__4348__delegate;
return G__4348;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__4351__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4351 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4352__i = 0, G__4352__a = new Array(arguments.length -  0);
while (G__4352__i < G__4352__a.length) {G__4352__a[G__4352__i] = arguments[G__4352__i + 0]; ++G__4352__i;}
  args = new cljs.core.IndexedSeq(G__4352__a,0);
} 
return G__4351__delegate.call(this,args);};
G__4351.cljs$lang$maxFixedArity = 0;
G__4351.cljs$lang$applyTo = (function (arglist__4353){
var args = cljs.core.seq(arglist__4353);
return G__4351__delegate(args);
});
G__4351.cljs$core$IFn$_invoke$arity$variadic = G__4351__delegate;
return G__4351;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map