// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__10875){
var map__10900 = p__10875;
var map__10900__$1 = ((((!((map__10900 == null)))?((((map__10900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10900.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10900):map__10900);
var m = map__10900__$1;
var n = cljs.core.get.call(null,map__10900__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__10900__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__10902_10924 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10903_10925 = null;
var count__10904_10926 = (0);
var i__10905_10927 = (0);
while(true){
if((i__10905_10927 < count__10904_10926)){
var f_10928 = cljs.core._nth.call(null,chunk__10903_10925,i__10905_10927);
cljs.core.println.call(null,"  ",f_10928);

var G__10929 = seq__10902_10924;
var G__10930 = chunk__10903_10925;
var G__10931 = count__10904_10926;
var G__10932 = (i__10905_10927 + (1));
seq__10902_10924 = G__10929;
chunk__10903_10925 = G__10930;
count__10904_10926 = G__10931;
i__10905_10927 = G__10932;
continue;
} else {
var temp__4657__auto___10933 = cljs.core.seq.call(null,seq__10902_10924);
if(temp__4657__auto___10933){
var seq__10902_10934__$1 = temp__4657__auto___10933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10902_10934__$1)){
var c__7357__auto___10935 = cljs.core.chunk_first.call(null,seq__10902_10934__$1);
var G__10936 = cljs.core.chunk_rest.call(null,seq__10902_10934__$1);
var G__10937 = c__7357__auto___10935;
var G__10938 = cljs.core.count.call(null,c__7357__auto___10935);
var G__10939 = (0);
seq__10902_10924 = G__10936;
chunk__10903_10925 = G__10937;
count__10904_10926 = G__10938;
i__10905_10927 = G__10939;
continue;
} else {
var f_10940 = cljs.core.first.call(null,seq__10902_10934__$1);
cljs.core.println.call(null,"  ",f_10940);

var G__10941 = cljs.core.next.call(null,seq__10902_10934__$1);
var G__10942 = null;
var G__10943 = (0);
var G__10944 = (0);
seq__10902_10924 = G__10941;
chunk__10903_10925 = G__10942;
count__10904_10926 = G__10943;
i__10905_10927 = G__10944;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_10945 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6543__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_10945);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_10945)))?cljs.core.second.call(null,arglists_10945):arglists_10945));
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
var seq__10906_10946 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10907_10947 = null;
var count__10908_10948 = (0);
var i__10909_10949 = (0);
while(true){
if((i__10909_10949 < count__10908_10948)){
var vec__10910_10950 = cljs.core._nth.call(null,chunk__10907_10947,i__10909_10949);
var name_10951 = cljs.core.nth.call(null,vec__10910_10950,(0),null);
var map__10913_10952 = cljs.core.nth.call(null,vec__10910_10950,(1),null);
var map__10913_10953__$1 = ((((!((map__10913_10952 == null)))?((((map__10913_10952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10913_10952.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10913_10952):map__10913_10952);
var doc_10954 = cljs.core.get.call(null,map__10913_10953__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10955 = cljs.core.get.call(null,map__10913_10953__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10951);

cljs.core.println.call(null," ",arglists_10955);

if(cljs.core.truth_(doc_10954)){
cljs.core.println.call(null," ",doc_10954);
} else {
}

var G__10956 = seq__10906_10946;
var G__10957 = chunk__10907_10947;
var G__10958 = count__10908_10948;
var G__10959 = (i__10909_10949 + (1));
seq__10906_10946 = G__10956;
chunk__10907_10947 = G__10957;
count__10908_10948 = G__10958;
i__10909_10949 = G__10959;
continue;
} else {
var temp__4657__auto___10960 = cljs.core.seq.call(null,seq__10906_10946);
if(temp__4657__auto___10960){
var seq__10906_10961__$1 = temp__4657__auto___10960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10906_10961__$1)){
var c__7357__auto___10962 = cljs.core.chunk_first.call(null,seq__10906_10961__$1);
var G__10963 = cljs.core.chunk_rest.call(null,seq__10906_10961__$1);
var G__10964 = c__7357__auto___10962;
var G__10965 = cljs.core.count.call(null,c__7357__auto___10962);
var G__10966 = (0);
seq__10906_10946 = G__10963;
chunk__10907_10947 = G__10964;
count__10908_10948 = G__10965;
i__10909_10949 = G__10966;
continue;
} else {
var vec__10915_10967 = cljs.core.first.call(null,seq__10906_10961__$1);
var name_10968 = cljs.core.nth.call(null,vec__10915_10967,(0),null);
var map__10918_10969 = cljs.core.nth.call(null,vec__10915_10967,(1),null);
var map__10918_10970__$1 = ((((!((map__10918_10969 == null)))?((((map__10918_10969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10918_10969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10918_10969):map__10918_10969);
var doc_10971 = cljs.core.get.call(null,map__10918_10970__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10972 = cljs.core.get.call(null,map__10918_10970__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10968);

cljs.core.println.call(null," ",arglists_10972);

if(cljs.core.truth_(doc_10971)){
cljs.core.println.call(null," ",doc_10971);
} else {
}

var G__10973 = cljs.core.next.call(null,seq__10906_10961__$1);
var G__10974 = null;
var G__10975 = (0);
var G__10976 = (0);
seq__10906_10946 = G__10973;
chunk__10907_10947 = G__10974;
count__10908_10948 = G__10975;
i__10909_10949 = G__10976;
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

var seq__10920 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__10921 = null;
var count__10922 = (0);
var i__10923 = (0);
while(true){
if((i__10923 < count__10922)){
var role = cljs.core._nth.call(null,chunk__10921,i__10923);
var temp__4657__auto___10977__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___10977__$1)){
var spec_10978 = temp__4657__auto___10977__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_10978));
} else {
}

var G__10979 = seq__10920;
var G__10980 = chunk__10921;
var G__10981 = count__10922;
var G__10982 = (i__10923 + (1));
seq__10920 = G__10979;
chunk__10921 = G__10980;
count__10922 = G__10981;
i__10923 = G__10982;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__10920);
if(temp__4657__auto____$1){
var seq__10920__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10920__$1)){
var c__7357__auto__ = cljs.core.chunk_first.call(null,seq__10920__$1);
var G__10983 = cljs.core.chunk_rest.call(null,seq__10920__$1);
var G__10984 = c__7357__auto__;
var G__10985 = cljs.core.count.call(null,c__7357__auto__);
var G__10986 = (0);
seq__10920 = G__10983;
chunk__10921 = G__10984;
count__10922 = G__10985;
i__10923 = G__10986;
continue;
} else {
var role = cljs.core.first.call(null,seq__10920__$1);
var temp__4657__auto___10987__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___10987__$2)){
var spec_10988 = temp__4657__auto___10987__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_10988));
} else {
}

var G__10989 = cljs.core.next.call(null,seq__10920__$1);
var G__10990 = null;
var G__10991 = (0);
var G__10992 = (0);
seq__10920 = G__10989;
chunk__10921 = G__10990;
count__10922 = G__10991;
i__10923 = G__10992;
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
