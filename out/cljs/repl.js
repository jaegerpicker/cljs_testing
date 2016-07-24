// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1332){
var map__1357 = p__1332;
var map__1357__$1 = ((((!((map__1357 == null)))?((((map__1357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1357):map__1357);
var m = map__1357__$1;
var n = cljs.core.get.call(null,map__1357__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1357__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__1359_1381 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1360_1382 = null;
var count__1361_1383 = (0);
var i__1362_1384 = (0);
while(true){
if((i__1362_1384 < count__1361_1383)){
var f_1385 = cljs.core._nth.call(null,chunk__1360_1382,i__1362_1384);
cljs.core.println.call(null,"  ",f_1385);

var G__1386 = seq__1359_1381;
var G__1387 = chunk__1360_1382;
var G__1388 = count__1361_1383;
var G__1389 = (i__1362_1384 + (1));
seq__1359_1381 = G__1386;
chunk__1360_1382 = G__1387;
count__1361_1383 = G__1388;
i__1362_1384 = G__1389;
continue;
} else {
var temp__4657__auto___1390 = cljs.core.seq.call(null,seq__1359_1381);
if(temp__4657__auto___1390){
var seq__1359_1391__$1 = temp__4657__auto___1390;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1359_1391__$1)){
var c__3360__auto___1392 = cljs.core.chunk_first.call(null,seq__1359_1391__$1);
var G__1393 = cljs.core.chunk_rest.call(null,seq__1359_1391__$1);
var G__1394 = c__3360__auto___1392;
var G__1395 = cljs.core.count.call(null,c__3360__auto___1392);
var G__1396 = (0);
seq__1359_1381 = G__1393;
chunk__1360_1382 = G__1394;
count__1361_1383 = G__1395;
i__1362_1384 = G__1396;
continue;
} else {
var f_1397 = cljs.core.first.call(null,seq__1359_1391__$1);
cljs.core.println.call(null,"  ",f_1397);

var G__1398 = cljs.core.next.call(null,seq__1359_1391__$1);
var G__1399 = null;
var G__1400 = (0);
var G__1401 = (0);
seq__1359_1381 = G__1398;
chunk__1360_1382 = G__1399;
count__1361_1383 = G__1400;
i__1362_1384 = G__1401;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1402 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__2977__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__2977__auto__)){
return or__2977__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1402);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1402)))?cljs.core.second.call(null,arglists_1402):arglists_1402));
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
var seq__1363_1403 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1364_1404 = null;
var count__1365_1405 = (0);
var i__1366_1406 = (0);
while(true){
if((i__1366_1406 < count__1365_1405)){
var vec__1367_1407 = cljs.core._nth.call(null,chunk__1364_1404,i__1366_1406);
var name_1408 = cljs.core.nth.call(null,vec__1367_1407,(0),null);
var map__1370_1409 = cljs.core.nth.call(null,vec__1367_1407,(1),null);
var map__1370_1410__$1 = ((((!((map__1370_1409 == null)))?((((map__1370_1409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1370_1409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1370_1409):map__1370_1409);
var doc_1411 = cljs.core.get.call(null,map__1370_1410__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1412 = cljs.core.get.call(null,map__1370_1410__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1408);

cljs.core.println.call(null," ",arglists_1412);

if(cljs.core.truth_(doc_1411)){
cljs.core.println.call(null," ",doc_1411);
} else {
}

var G__1413 = seq__1363_1403;
var G__1414 = chunk__1364_1404;
var G__1415 = count__1365_1405;
var G__1416 = (i__1366_1406 + (1));
seq__1363_1403 = G__1413;
chunk__1364_1404 = G__1414;
count__1365_1405 = G__1415;
i__1366_1406 = G__1416;
continue;
} else {
var temp__4657__auto___1417 = cljs.core.seq.call(null,seq__1363_1403);
if(temp__4657__auto___1417){
var seq__1363_1418__$1 = temp__4657__auto___1417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1363_1418__$1)){
var c__3360__auto___1419 = cljs.core.chunk_first.call(null,seq__1363_1418__$1);
var G__1420 = cljs.core.chunk_rest.call(null,seq__1363_1418__$1);
var G__1421 = c__3360__auto___1419;
var G__1422 = cljs.core.count.call(null,c__3360__auto___1419);
var G__1423 = (0);
seq__1363_1403 = G__1420;
chunk__1364_1404 = G__1421;
count__1365_1405 = G__1422;
i__1366_1406 = G__1423;
continue;
} else {
var vec__1372_1424 = cljs.core.first.call(null,seq__1363_1418__$1);
var name_1425 = cljs.core.nth.call(null,vec__1372_1424,(0),null);
var map__1375_1426 = cljs.core.nth.call(null,vec__1372_1424,(1),null);
var map__1375_1427__$1 = ((((!((map__1375_1426 == null)))?((((map__1375_1426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1375_1426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1375_1426):map__1375_1426);
var doc_1428 = cljs.core.get.call(null,map__1375_1427__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1429 = cljs.core.get.call(null,map__1375_1427__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1425);

cljs.core.println.call(null," ",arglists_1429);

if(cljs.core.truth_(doc_1428)){
cljs.core.println.call(null," ",doc_1428);
} else {
}

var G__1430 = cljs.core.next.call(null,seq__1363_1418__$1);
var G__1431 = null;
var G__1432 = (0);
var G__1433 = (0);
seq__1363_1403 = G__1430;
chunk__1364_1404 = G__1431;
count__1365_1405 = G__1432;
i__1366_1406 = G__1433;
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

var seq__1377 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1378 = null;
var count__1379 = (0);
var i__1380 = (0);
while(true){
if((i__1380 < count__1379)){
var role = cljs.core._nth.call(null,chunk__1378,i__1380);
var temp__4657__auto___1434__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___1434__$1)){
var spec_1435 = temp__4657__auto___1434__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_1435));
} else {
}

var G__1436 = seq__1377;
var G__1437 = chunk__1378;
var G__1438 = count__1379;
var G__1439 = (i__1380 + (1));
seq__1377 = G__1436;
chunk__1378 = G__1437;
count__1379 = G__1438;
i__1380 = G__1439;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__1377);
if(temp__4657__auto____$1){
var seq__1377__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1377__$1)){
var c__3360__auto__ = cljs.core.chunk_first.call(null,seq__1377__$1);
var G__1440 = cljs.core.chunk_rest.call(null,seq__1377__$1);
var G__1441 = c__3360__auto__;
var G__1442 = cljs.core.count.call(null,c__3360__auto__);
var G__1443 = (0);
seq__1377 = G__1440;
chunk__1378 = G__1441;
count__1379 = G__1442;
i__1380 = G__1443;
continue;
} else {
var role = cljs.core.first.call(null,seq__1377__$1);
var temp__4657__auto___1444__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___1444__$2)){
var spec_1445 = temp__4657__auto___1444__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_1445));
} else {
}

var G__1446 = cljs.core.next.call(null,seq__1377__$1);
var G__1447 = null;
var G__1448 = (0);
var G__1449 = (0);
seq__1377 = G__1446;
chunk__1378 = G__1447;
count__1379 = G__1448;
i__1380 = G__1449;
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

//# sourceMappingURL=repl.js.map