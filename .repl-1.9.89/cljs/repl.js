// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__5480){
var map__5505 = p__5480;
var map__5505__$1 = ((((!((map__5505 == null)))?((((map__5505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5505):map__5505);
var m = map__5505__$1;
var n = cljs.core.get.call(null,map__5505__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__5505__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__5507_5529 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__5508_5530 = null;
var count__5509_5531 = (0);
var i__5510_5532 = (0);
while(true){
if((i__5510_5532 < count__5509_5531)){
var f_5533 = cljs.core._nth.call(null,chunk__5508_5530,i__5510_5532);
cljs.core.println.call(null,"  ",f_5533);

var G__5534 = seq__5507_5529;
var G__5535 = chunk__5508_5530;
var G__5536 = count__5509_5531;
var G__5537 = (i__5510_5532 + (1));
seq__5507_5529 = G__5534;
chunk__5508_5530 = G__5535;
count__5509_5531 = G__5536;
i__5510_5532 = G__5537;
continue;
} else {
var temp__4657__auto___5538 = cljs.core.seq.call(null,seq__5507_5529);
if(temp__4657__auto___5538){
var seq__5507_5539__$1 = temp__4657__auto___5538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5507_5539__$1)){
var c__3360__auto___5540 = cljs.core.chunk_first.call(null,seq__5507_5539__$1);
var G__5541 = cljs.core.chunk_rest.call(null,seq__5507_5539__$1);
var G__5542 = c__3360__auto___5540;
var G__5543 = cljs.core.count.call(null,c__3360__auto___5540);
var G__5544 = (0);
seq__5507_5529 = G__5541;
chunk__5508_5530 = G__5542;
count__5509_5531 = G__5543;
i__5510_5532 = G__5544;
continue;
} else {
var f_5545 = cljs.core.first.call(null,seq__5507_5539__$1);
cljs.core.println.call(null,"  ",f_5545);

var G__5546 = cljs.core.next.call(null,seq__5507_5539__$1);
var G__5547 = null;
var G__5548 = (0);
var G__5549 = (0);
seq__5507_5529 = G__5546;
chunk__5508_5530 = G__5547;
count__5509_5531 = G__5548;
i__5510_5532 = G__5549;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_5550 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__2977__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__2977__auto__)){
return or__2977__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_5550);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_5550)))?cljs.core.second.call(null,arglists_5550):arglists_5550));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__5511_5551 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__5512_5552 = null;
var count__5513_5553 = (0);
var i__5514_5554 = (0);
while(true){
if((i__5514_5554 < count__5513_5553)){
var vec__5515_5555 = cljs.core._nth.call(null,chunk__5512_5552,i__5514_5554);
var name_5556 = cljs.core.nth.call(null,vec__5515_5555,(0),null);
var map__5518_5557 = cljs.core.nth.call(null,vec__5515_5555,(1),null);
var map__5518_5558__$1 = ((((!((map__5518_5557 == null)))?((((map__5518_5557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5518_5557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5518_5557):map__5518_5557);
var doc_5559 = cljs.core.get.call(null,map__5518_5558__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_5560 = cljs.core.get.call(null,map__5518_5558__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_5556);

cljs.core.println.call(null," ",arglists_5560);

if(cljs.core.truth_(doc_5559)){
cljs.core.println.call(null," ",doc_5559);
} else {
}

var G__5561 = seq__5511_5551;
var G__5562 = chunk__5512_5552;
var G__5563 = count__5513_5553;
var G__5564 = (i__5514_5554 + (1));
seq__5511_5551 = G__5561;
chunk__5512_5552 = G__5562;
count__5513_5553 = G__5563;
i__5514_5554 = G__5564;
continue;
} else {
var temp__4657__auto___5565 = cljs.core.seq.call(null,seq__5511_5551);
if(temp__4657__auto___5565){
var seq__5511_5566__$1 = temp__4657__auto___5565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5511_5566__$1)){
var c__3360__auto___5567 = cljs.core.chunk_first.call(null,seq__5511_5566__$1);
var G__5568 = cljs.core.chunk_rest.call(null,seq__5511_5566__$1);
var G__5569 = c__3360__auto___5567;
var G__5570 = cljs.core.count.call(null,c__3360__auto___5567);
var G__5571 = (0);
seq__5511_5551 = G__5568;
chunk__5512_5552 = G__5569;
count__5513_5553 = G__5570;
i__5514_5554 = G__5571;
continue;
} else {
var vec__5520_5572 = cljs.core.first.call(null,seq__5511_5566__$1);
var name_5573 = cljs.core.nth.call(null,vec__5520_5572,(0),null);
var map__5523_5574 = cljs.core.nth.call(null,vec__5520_5572,(1),null);
var map__5523_5575__$1 = ((((!((map__5523_5574 == null)))?((((map__5523_5574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5523_5574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5523_5574):map__5523_5574);
var doc_5576 = cljs.core.get.call(null,map__5523_5575__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_5577 = cljs.core.get.call(null,map__5523_5575__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_5573);

cljs.core.println.call(null," ",arglists_5577);

if(cljs.core.truth_(doc_5576)){
cljs.core.println.call(null," ",doc_5576);
} else {
}

var G__5578 = cljs.core.next.call(null,seq__5511_5566__$1);
var G__5579 = null;
var G__5580 = (0);
var G__5581 = (0);
seq__5511_5551 = G__5578;
chunk__5512_5552 = G__5579;
count__5513_5553 = G__5580;
i__5514_5554 = G__5581;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__5525 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__5526 = null;
var count__5527 = (0);
var i__5528 = (0);
while(true){
if((i__5528 < count__5527)){
var role = cljs.core._nth.call(null,chunk__5526,i__5528);
var temp__4657__auto___5582__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___5582__$1)){
var spec_5583 = temp__4657__auto___5582__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_5583));
} else {
}

var G__5584 = seq__5525;
var G__5585 = chunk__5526;
var G__5586 = count__5527;
var G__5587 = (i__5528 + (1));
seq__5525 = G__5584;
chunk__5526 = G__5585;
count__5527 = G__5586;
i__5528 = G__5587;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__5525);
if(temp__4657__auto____$1){
var seq__5525__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5525__$1)){
var c__3360__auto__ = cljs.core.chunk_first.call(null,seq__5525__$1);
var G__5588 = cljs.core.chunk_rest.call(null,seq__5525__$1);
var G__5589 = c__3360__auto__;
var G__5590 = cljs.core.count.call(null,c__3360__auto__);
var G__5591 = (0);
seq__5525 = G__5588;
chunk__5526 = G__5589;
count__5527 = G__5590;
i__5528 = G__5591;
continue;
} else {
var role = cljs.core.first.call(null,seq__5525__$1);
var temp__4657__auto___5592__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___5592__$2)){
var spec_5593 = temp__4657__auto___5592__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_5593));
} else {
}

var G__5594 = cljs.core.next.call(null,seq__5525__$1);
var G__5595 = null;
var G__5596 = (0);
var G__5597 = (0);
seq__5525 = G__5594;
chunk__5526 = G__5595;
count__5527 = G__5596;
i__5528 = G__5597;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
