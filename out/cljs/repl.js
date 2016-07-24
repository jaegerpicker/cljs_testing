// Compiled by ClojureScript 1.9.89 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__3062){
var map__3087 = p__3062;
var map__3087__$1 = ((((!((map__3087 == null)))?((((map__3087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3087):map__3087);
var m = map__3087__$1;
var n = cljs.core.get.call(null,map__3087__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__3087__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__3089_3111 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__3090_3112 = null;
var count__3091_3113 = (0);
var i__3092_3114 = (0);
while(true){
if((i__3092_3114 < count__3091_3113)){
var f_3115 = cljs.core._nth.call(null,chunk__3090_3112,i__3092_3114);
cljs.core.println.call(null,"  ",f_3115);

var G__3116 = seq__3089_3111;
var G__3117 = chunk__3090_3112;
var G__3118 = count__3091_3113;
var G__3119 = (i__3092_3114 + (1));
seq__3089_3111 = G__3116;
chunk__3090_3112 = G__3117;
count__3091_3113 = G__3118;
i__3092_3114 = G__3119;
continue;
} else {
var temp__4657__auto___3120 = cljs.core.seq.call(null,seq__3089_3111);
if(temp__4657__auto___3120){
var seq__3089_3121__$1 = temp__4657__auto___3120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3089_3121__$1)){
var c__3360__auto___3122 = cljs.core.chunk_first.call(null,seq__3089_3121__$1);
var G__3123 = cljs.core.chunk_rest.call(null,seq__3089_3121__$1);
var G__3124 = c__3360__auto___3122;
var G__3125 = cljs.core.count.call(null,c__3360__auto___3122);
var G__3126 = (0);
seq__3089_3111 = G__3123;
chunk__3090_3112 = G__3124;
count__3091_3113 = G__3125;
i__3092_3114 = G__3126;
continue;
} else {
var f_3127 = cljs.core.first.call(null,seq__3089_3121__$1);
cljs.core.println.call(null,"  ",f_3127);

var G__3128 = cljs.core.next.call(null,seq__3089_3121__$1);
var G__3129 = null;
var G__3130 = (0);
var G__3131 = (0);
seq__3089_3111 = G__3128;
chunk__3090_3112 = G__3129;
count__3091_3113 = G__3130;
i__3092_3114 = G__3131;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_3132 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__2977__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__2977__auto__)){
return or__2977__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_3132);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_3132)))?cljs.core.second.call(null,arglists_3132):arglists_3132));
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
var seq__3093_3133 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__3094_3134 = null;
var count__3095_3135 = (0);
var i__3096_3136 = (0);
while(true){
if((i__3096_3136 < count__3095_3135)){
var vec__3097_3137 = cljs.core._nth.call(null,chunk__3094_3134,i__3096_3136);
var name_3138 = cljs.core.nth.call(null,vec__3097_3137,(0),null);
var map__3100_3139 = cljs.core.nth.call(null,vec__3097_3137,(1),null);
var map__3100_3140__$1 = ((((!((map__3100_3139 == null)))?((((map__3100_3139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3100_3139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3100_3139):map__3100_3139);
var doc_3141 = cljs.core.get.call(null,map__3100_3140__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_3142 = cljs.core.get.call(null,map__3100_3140__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_3138);

cljs.core.println.call(null," ",arglists_3142);

if(cljs.core.truth_(doc_3141)){
cljs.core.println.call(null," ",doc_3141);
} else {
}

var G__3143 = seq__3093_3133;
var G__3144 = chunk__3094_3134;
var G__3145 = count__3095_3135;
var G__3146 = (i__3096_3136 + (1));
seq__3093_3133 = G__3143;
chunk__3094_3134 = G__3144;
count__3095_3135 = G__3145;
i__3096_3136 = G__3146;
continue;
} else {
var temp__4657__auto___3147 = cljs.core.seq.call(null,seq__3093_3133);
if(temp__4657__auto___3147){
var seq__3093_3148__$1 = temp__4657__auto___3147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3093_3148__$1)){
var c__3360__auto___3149 = cljs.core.chunk_first.call(null,seq__3093_3148__$1);
var G__3150 = cljs.core.chunk_rest.call(null,seq__3093_3148__$1);
var G__3151 = c__3360__auto___3149;
var G__3152 = cljs.core.count.call(null,c__3360__auto___3149);
var G__3153 = (0);
seq__3093_3133 = G__3150;
chunk__3094_3134 = G__3151;
count__3095_3135 = G__3152;
i__3096_3136 = G__3153;
continue;
} else {
var vec__3102_3154 = cljs.core.first.call(null,seq__3093_3148__$1);
var name_3155 = cljs.core.nth.call(null,vec__3102_3154,(0),null);
var map__3105_3156 = cljs.core.nth.call(null,vec__3102_3154,(1),null);
var map__3105_3157__$1 = ((((!((map__3105_3156 == null)))?((((map__3105_3156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3105_3156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3105_3156):map__3105_3156);
var doc_3158 = cljs.core.get.call(null,map__3105_3157__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_3159 = cljs.core.get.call(null,map__3105_3157__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_3155);

cljs.core.println.call(null," ",arglists_3159);

if(cljs.core.truth_(doc_3158)){
cljs.core.println.call(null," ",doc_3158);
} else {
}

var G__3160 = cljs.core.next.call(null,seq__3093_3148__$1);
var G__3161 = null;
var G__3162 = (0);
var G__3163 = (0);
seq__3093_3133 = G__3160;
chunk__3094_3134 = G__3161;
count__3095_3135 = G__3162;
i__3096_3136 = G__3163;
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

var seq__3107 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__3108 = null;
var count__3109 = (0);
var i__3110 = (0);
while(true){
if((i__3110 < count__3109)){
var role = cljs.core._nth.call(null,chunk__3108,i__3110);
var temp__4657__auto___3164__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___3164__$1)){
var spec_3165 = temp__4657__auto___3164__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_3165));
} else {
}

var G__3166 = seq__3107;
var G__3167 = chunk__3108;
var G__3168 = count__3109;
var G__3169 = (i__3110 + (1));
seq__3107 = G__3166;
chunk__3108 = G__3167;
count__3109 = G__3168;
i__3110 = G__3169;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__3107);
if(temp__4657__auto____$1){
var seq__3107__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3107__$1)){
var c__3360__auto__ = cljs.core.chunk_first.call(null,seq__3107__$1);
var G__3170 = cljs.core.chunk_rest.call(null,seq__3107__$1);
var G__3171 = c__3360__auto__;
var G__3172 = cljs.core.count.call(null,c__3360__auto__);
var G__3173 = (0);
seq__3107 = G__3170;
chunk__3108 = G__3171;
count__3109 = G__3172;
i__3110 = G__3173;
continue;
} else {
var role = cljs.core.first.call(null,seq__3107__$1);
var temp__4657__auto___3174__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___3174__$2)){
var spec_3175 = temp__4657__auto___3174__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_3175));
} else {
}

var G__3176 = cljs.core.next.call(null,seq__3107__$1);
var G__3177 = null;
var G__3178 = (0);
var G__3179 = (0);
seq__3107 = G__3176;
chunk__3108 = G__3177;
count__3109 = G__3178;
i__3110 = G__3179;
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