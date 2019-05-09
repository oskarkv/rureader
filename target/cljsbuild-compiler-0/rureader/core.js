// Compiled by ClojureScript 1.10.520 {}
goog.provide('rureader.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cognitect.transit');
goog.require('cemerick.url');
rureader.core.json_reader = cognitect.transit.reader.call(null,"json");
rureader.core.saved = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
rureader.core.cword = cljs.core.atom.call(null,"");
rureader.core.ctrans = cljs.core.atom.call(null,"");
rureader.core.get_by_id = (function rureader$core$get_by_id(x){
return document.getElementById(x);
});
rureader.core.load_api_key = (function rureader$core$load_api_key(akey){
return (
rureader.core.api_key = akey)
;
});
rureader.core.yan_get = (function rureader$core$yan_get(word,ru_QMARK_){
var req = (new XMLHttpRequest());
var s = ["https://dictionary.yandex.net/api/v1/dicservice.json/lookup","?key=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rureader.core.api_key),"&lang=",(cljs.core.truth_(ru_QMARK_)?"ru-en":"en-ru"),"&text=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),"&flags=4"].join('');
req.open("GET",s,false);

req.send();

return cognitect.transit.read.call(null,rureader.core.json_reader,req.responseText);
});
rureader.core.get_base_word = (function rureader$core$get_base_word(yan_map){
var word = cljs.core.get_in.call(null,yan_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["def",(0),"text"], null));
if(cljs.core.truth_(word)){
return clojure.string.replace.call(null,word," ","-");
} else {
return null;
}
});
rureader.core.get_translations = (function rureader$core$get_translations(var_args){
var G__5037 = arguments.length;
switch (G__5037) {
case 1:
return rureader.core.get_translations.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rureader.core.get_translations.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rureader.core.get_translations.cljs$core$IFn$_invoke$arity$1 = (function (yan_map){
return rureader.core.get_translations.call(null,yan_map,false);
});

rureader.core.get_translations.cljs$core$IFn$_invoke$arity$2 = (function (yan_map,ru_QMARK_){
return (function (p1__5035_SHARP_){
return clojure.string.join.call(null,"; ",(cljs.core.truth_(ru_QMARK_)?cljs.core.identity:cljs.core.reverse).call(null,p1__5035_SHARP_));
}).call(null,clojure.string.split.call(null,(function (p1__5034_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"word","word",-420123725),p1__5034_SHARP_))),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"trans","trans",-1318503851),p1__5034_SHARP_)))].join('');
}).call(null,cljs.core.mapv.call(null,(function (m){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"word","word",-420123725),m.call(null,"text"),new cljs.core.Keyword(null,"trans","trans",-1318503851),cljs.core.mapv.call(null,(function (p1__5033_SHARP_){
return p1__5033_SHARP_.call(null,"text");
}),m.call(null,"tr"))], null);
}),yan_map.call(null,"def"))),/; /));
});

rureader.core.get_translations.cljs$lang$maxFixedArity = 2;

rureader.core.multitran = (function rureader$core$multitran(word){
return ["http://www.multitran.ru/c/m.exe?CL=1&s=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),"&l1=1"].join('');
});
rureader.core.lingvo = (function rureader$core$lingvo(word){
return ["http://www.lingvo-online.ru/ru/Translate/ru-en/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)].join('');
});
rureader.core.forvo = (function rureader$core$forvo(word){
return ["http://www.forvo.com/word/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),"/#ru"].join('');
});
rureader.core.yandex = (function rureader$core$yandex(word){
return ["https://translate.yandex.com/m/translate?text=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),"&lang=ru-en"].join('');
});
rureader.core.wiktionary = (function rureader$core$wiktionary(word){
return ["http://en.wiktionary.org/wiki/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),"#Russian"].join('');
});
rureader.core.wiktionary_ru = (function rureader$core$wiktionary_ru(word){
return ["http://ru.wiktionary.org/wiki/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),"#.D0.A0.D1.83.D1.81.D1.81.D0.BA.D0.B8.D0.B9"].join('');
});
rureader.core.image_search_url = (function rureader$core$image_search_url(text){
return ["https://www.google.se/search?q=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,text,/ +/,"+")),"&tbm=isch"].join('');
});
rureader.core.reverso = (function rureader$core$reverso(word){
return ["http://context.reverso.net/translation/russian-english/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)].join('');
});
rureader.core.gramota = (function rureader$core$gramota(word){
return ["http://gramota.ru/slovari/dic/?word=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),"&all=x"].join('');
});
rureader.core.wrap_word = (function rureader$core$wrap_word(word,ru_QMARK_){
return ["<span id=\"word\""," onClick=\"rureader.core.lookup_word(this.innerHTML, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ru_QMARK_),")\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),"</span>"].join('');
});
rureader.core.update_saved_words = (function rureader$core$update_saved_words(){
return rureader.core.get_by_id.call(null,"saved-words").innerHTML = clojure.string.join.call(null,"<br>",cljs.core.vals.call(null,cljs.core.deref.call(null,rureader.core.saved)));
});
rureader.core.save_word = (function rureader$core$save_word(){
cljs.core.swap_BANG_.call(null,rureader.core.saved,cljs.core.assoc,cljs.core.deref.call(null,rureader.core.cword),cljs.core.deref.call(null,rureader.core.ctrans));

rureader.core.get_by_id.call(null,"last-saved").innerHTML = ["Last saved: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rureader.core.cword))].join('');

return rureader.core.update_saved_words.call(null);
});
rureader.core.display_saved = (function rureader$core$display_saved(bool){
return rureader.core.get_by_id.call(null,"saved-region").style.display = (cljs.core.truth_(bool)?"block":"none");
});
rureader.core.lookup_word = (function rureader$core$lookup_word(word,ru_QMARK_){
rureader.core.get_by_id.call(null,"dic1").src = rureader.core.reverso.call(null,word);

var yan_map = rureader.core.yan_get.call(null,word,ru_QMARK_);
var _ = cljs.core.println.call(null,yan_map);
var base_word = (function (){var or__4131__auto__ = rureader.core.get_base_word.call(null,yan_map);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return word;
}
})();
var trans = rureader.core.get_translations.call(null,yan_map,ru_QMARK_);
var ___$1 = cljs.core.reset_BANG_.call(null,rureader.core.cword,base_word);
var ___$2 = cljs.core.reset_BANG_.call(null,rureader.core.ctrans,trans);
var base_word__$1 = (cljs.core.truth_(ru_QMARK_)?base_word:word);
rureader.core.get_by_id.call(null,"dic2").src = (cljs.core.truth_(ru_QMARK_)?rureader.core.wiktionary:rureader.core.lingvo).call(null,base_word__$1);

rureader.core.get_by_id.call(null,"forvolink").href = rureader.core.forvo.call(null,word);

rureader.core.get_by_id.call(null,"forvobaselink").href = rureader.core.forvo.call(null,base_word__$1);

rureader.core.get_by_id.call(null,"multitranlink").href = rureader.core.multitran.call(null,word);

rureader.core.get_by_id.call(null,"multitranbaselink").href = rureader.core.multitran.call(null,base_word__$1);

rureader.core.get_by_id.call(null,"ruwiktionarylink").href = rureader.core.wiktionary_ru.call(null,base_word__$1);

rureader.core.get_by_id.call(null,"lingvolink").href = rureader.core.lingvo.call(null,base_word__$1);

rureader.core.get_by_id.call(null,"imageslink").href = rureader.core.image_search_url.call(null,base_word__$1);

rureader.core.get_by_id.call(null,"reversobaselink").href = rureader.core.reverso.call(null,base_word__$1);

return rureader.core.get_by_id.call(null,"reversolink").href = rureader.core.reverso.call(null,word);
});
rureader.core.prepare = (function rureader$core$prepare(text){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,text,/[a-zA-Z]+/,(function (p1__5039_SHARP_){
return rureader.core.wrap_word.call(null,p1__5039_SHARP_,false);
})),/[а-яА-ЯЁё][а-яА-ЯЁё-]*/,(function (p1__5040_SHARP_){
return rureader.core.wrap_word.call(null,p1__5040_SHARP_,true);
})),/\n\n+/,"<br><br>"),/\n/,"<br>");
});
rureader.core.display_text = (function rureader$core$display_text(){
var text = rureader.core.prepare.call(null,rureader.core.get_by_id.call(null,"inputbox").value);
return rureader.core.get_by_id.call(null,"textregion").innerHTML = text;
});
rureader.core.scroll = (function rureader$core$scroll(n,frame){
return frame.contentWindow().scrollTo((20),(20));
});
rureader.core.init_page = (function rureader$core$init_page(akey){
rureader.core.load_api_key.call(null,akey);

cljs.core.enable_console_print_BANG_.call(null);

var q = cljs.core.get.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(cemerick.url.url.call(null,window.location.href)),"text");
rureader.core.get_by_id.call(null,"inputbox").value = q;

rureader.core.display_text.call(null);

if(cljs.core.truth_(q)){
return rureader.core.lookup_word.call(null,q,true);
} else {
return null;
}
});
