// Compiled by ClojureScript 1.8.40 {}
goog.provide('rureader.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cognitect.transit');
rureader.core.json_reader = cognitect.transit.reader.call(null,"json");
rureader.core.saved = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
rureader.core.cword = cljs.core.atom.call(null,"");
rureader.core.ctrans = cljs.core.atom.call(null,"");
rureader.core.get_by_id = (function rureader$core$get_by_id(x){
return document.getElementById(x);
});
rureader.core.load_api_key = (function rureader$core$load_api_key(akey){
rureader.core.api_key = akey;
});
rureader.core.yan_get = (function rureader$core$yan_get(word,ru_QMARK_){
var req = (new XMLHttpRequest());
req.open("GET",[cljs.core.str("https://dictionary.yandex.net/api/v1/dicservice.json/lookup"),cljs.core.str("?key="),cljs.core.str(rureader.core.api_key),cljs.core.str("&lang="),cljs.core.str((cljs.core.truth_(ru_QMARK_)?"ru-en":"en-ru")),cljs.core.str("&text="),cljs.core.str(word),cljs.core.str("&flags=4")].join(''),false);

req.send();

return cognitect.transit.read.call(null,rureader.core.json_reader,req.responseText);
});
rureader.core.get_base_word = (function rureader$core$get_base_word(yan_map){
return cljs.core.get_in.call(null,yan_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["def",(0),"text"], null));
});
rureader.core.get_translations = (function rureader$core$get_translations(var_args){
var args8486 = [];
var len__7279__auto___8489 = arguments.length;
var i__7280__auto___8490 = (0);
while(true){
if((i__7280__auto___8490 < len__7279__auto___8489)){
args8486.push((arguments[i__7280__auto___8490]));

var G__8491 = (i__7280__auto___8490 + (1));
i__7280__auto___8490 = G__8491;
continue;
} else {
}
break;
}

var G__8488 = args8486.length;
switch (G__8488) {
case 1:
return rureader.core.get_translations.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rureader.core.get_translations.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8486.length)].join('')));

}
});

rureader.core.get_translations.cljs$core$IFn$_invoke$arity$1 = (function (yan_map){
return rureader.core.get_translations.call(null,yan_map,false);
});

rureader.core.get_translations.cljs$core$IFn$_invoke$arity$2 = (function (yan_map,ru_QMARK_){
return (function (p1__8485_SHARP_){
return clojure.string.join.call(null,"; ",(cljs.core.truth_(ru_QMARK_)?cljs.core.identity:cljs.core.reverse).call(null,p1__8485_SHARP_));
}).call(null,clojure.string.split.call(null,(function (p1__8484_SHARP_){
return [cljs.core.str(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"word","word",-420123725),p1__8484_SHARP_))),cljs.core.str("; "),cljs.core.str(clojure.string.join.call(null,", ",cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"trans","trans",-1318503851),p1__8484_SHARP_)))].join('');
}).call(null,cljs.core.mapv.call(null,(function (m){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"word","word",-420123725),m.call(null,"text"),new cljs.core.Keyword(null,"trans","trans",-1318503851),cljs.core.mapv.call(null,(function (p1__8483_SHARP_){
return p1__8483_SHARP_.call(null,"text");
}),m.call(null,"tr"))], null);
}),yan_map.call(null,"def"))),/; /));
});

rureader.core.get_translations.cljs$lang$maxFixedArity = 2;
rureader.core.multitran = (function rureader$core$multitran(word){
return [cljs.core.str("http://www.multitran.ru/c/m.exe?CL=1&s="),cljs.core.str(word),cljs.core.str("&l1=1")].join('');
});
rureader.core.lingvo = (function rureader$core$lingvo(word){
return [cljs.core.str("http://www.lingvo-online.ru/ru/Translate/ru-en/"),cljs.core.str(word)].join('');
});
rureader.core.forvo = (function rureader$core$forvo(word){
return [cljs.core.str("http://www.forvo.com/word/"),cljs.core.str(word),cljs.core.str("/#ru")].join('');
});
rureader.core.yandex = (function rureader$core$yandex(word){
return [cljs.core.str("https://translate.yandex.com/m/translate?text="),cljs.core.str(word),cljs.core.str("&lang=ru-en")].join('');
});
rureader.core.wiktionary = (function rureader$core$wiktionary(word){
return [cljs.core.str("http://en.wiktionary.org/wiki/"),cljs.core.str(word),cljs.core.str("#Russian")].join('');
});
rureader.core.wiktionary_ru = (function rureader$core$wiktionary_ru(word){
return [cljs.core.str("http://ru.wiktionary.org/wiki/"),cljs.core.str(word),cljs.core.str("#.D0.A0.D1.83.D1.81.D1.81.D0.BA.D0.B8.D0.B9")].join('');
});
rureader.core.image_search_url = (function rureader$core$image_search_url(text){
return [cljs.core.str("https://www.google.se/search?q="),cljs.core.str(clojure.string.replace.call(null,text,/ +/,"+")),cljs.core.str("&tbm=isch")].join('');
});
rureader.core.gramota = (function rureader$core$gramota(word){
return [cljs.core.str("http://gramota.ru/slovari/dic/?word="),cljs.core.str(word),cljs.core.str("&all=x")].join('');
});
rureader.core.wrap_word = (function rureader$core$wrap_word(word,ru_QMARK_){
return [cljs.core.str("<span id=\"word\" \n        onClick=\"rureader.core.lookup_word(this.innerHTML, "),cljs.core.str(ru_QMARK_),cljs.core.str(")\">"),cljs.core.str(word),cljs.core.str("</span>")].join('');
});
rureader.core.update_saved_words = (function rureader$core$update_saved_words(){
return rureader.core.get_by_id.call(null,"saved-words").innerHTML = clojure.string.join.call(null,"<br>",cljs.core.vals.call(null,cljs.core.deref.call(null,rureader.core.saved)));
});
rureader.core.save_word = (function rureader$core$save_word(){
cljs.core.swap_BANG_.call(null,rureader.core.saved,cljs.core.assoc,cljs.core.deref.call(null,rureader.core.cword),cljs.core.deref.call(null,rureader.core.ctrans));

rureader.core.get_by_id.call(null,"last-saved").innerHTML = [cljs.core.str("Last saved: "),cljs.core.str(cljs.core.deref.call(null,rureader.core.cword))].join('');

return rureader.core.update_saved_words.call(null);
});
rureader.core.display_saved = (function rureader$core$display_saved(bool){
return rureader.core.get_by_id.call(null,"saved-region").style.display = (cljs.core.truth_(bool)?"block":"none");
});
rureader.core.lookup_word = (function rureader$core$lookup_word(word,ru_QMARK_){
rureader.core.get_by_id.call(null,"dic1").src = rureader.core.yandex.call(null,word);

var yan_map = rureader.core.yan_get.call(null,word,ru_QMARK_);
var base_word = rureader.core.get_base_word.call(null,yan_map);
var trans = rureader.core.get_translations.call(null,yan_map,ru_QMARK_);
var _ = cljs.core.reset_BANG_.call(null,rureader.core.cword,base_word);
var ___$1 = cljs.core.reset_BANG_.call(null,rureader.core.ctrans,trans);
var base_word__$1 = (cljs.core.truth_(ru_QMARK_)?base_word:word);
rureader.core.get_by_id.call(null,"dic2").src = (cljs.core.truth_(ru_QMARK_)?rureader.core.wiktionary:rureader.core.lingvo).call(null,base_word__$1);

rureader.core.get_by_id.call(null,"forvolink").href = rureader.core.forvo.call(null,word);

rureader.core.get_by_id.call(null,"forvobaselink").href = rureader.core.forvo.call(null,base_word__$1);

rureader.core.get_by_id.call(null,"multitranlink").href = rureader.core.multitran.call(null,word);

rureader.core.get_by_id.call(null,"multitranbaselink").href = rureader.core.multitran.call(null,base_word__$1);

rureader.core.get_by_id.call(null,"lingvolink").href = rureader.core.lingvo.call(null,base_word__$1);

rureader.core.get_by_id.call(null,"ruwiktionarylink").href = rureader.core.wiktionary_ru.call(null,base_word__$1);

return rureader.core.get_by_id.call(null,"imageslink").href = rureader.core.image_search_url.call(null,base_word__$1);
});
rureader.core.prepare = (function rureader$core$prepare(text){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,text,/[a-zA-Z]+/,(function (p1__8493_SHARP_){
return rureader.core.wrap_word.call(null,p1__8493_SHARP_,false);
})),/[а-яА-ЯЁё][а-яА-ЯЁё-]*/,(function (p1__8494_SHARP_){
return rureader.core.wrap_word.call(null,p1__8494_SHARP_,true);
})),/\n\n+/,"<br><br>");
});
rureader.core.display_text = (function rureader$core$display_text(){
var text = rureader.core.prepare.call(null,rureader.core.get_by_id.call(null,"inputbox").value);
return rureader.core.get_by_id.call(null,"textregion").innerHTML = text;
});
rureader.core.scroll = (function rureader$core$scroll(n,frame){
return frame.contentWindow().scrollTo((20),(20));
});
