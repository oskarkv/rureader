// Compiled by ClojureScript 0.0-2371
goog.provide('rureader.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('cognitect.transit');
goog.require('clojure.string');
goog.require('clojure.string');
rureader.core.json_reader = cognitect.transit.reader.call(null,"json");
rureader.core.saved = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
rureader.core.cword = cljs.core.atom.call(null,"");
rureader.core.ctrans = cljs.core.atom.call(null,"");
rureader.core.get_by_id = (function get_by_id(x){return document.getElementById(x);
});
rureader.core.load_api_key = (function load_api_key(akey){rureader.core.api_key = akey;
});
rureader.core.yan_get = (function yan_get(word,ru_QMARK_){var req = (new XMLHttpRequest());req.open("GET",("https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rureader.core.api_key)+"&lang="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ru_QMARK_)?"ru-en":"en-ru"))+"&text="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)+"&flags=4"),false);
req.send();
return cognitect.transit.read.call(null,rureader.core.json_reader,req.responseText);
});
rureader.core.get_base_word = (function get_base_word(yan_map){return cljs.core.get_in.call(null,yan_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["def",(0),"text"], null));
});
rureader.core.get_translations = (function() {
var get_translations = null;
var get_translations__1 = (function (yan_map){return get_translations.call(null,yan_map,false);
});
var get_translations__2 = (function (yan_map,ru_QMARK_){return (function (p1__5168_SHARP_){return clojure.string.join.call(null,"; ",(cljs.core.truth_(ru_QMARK_)?cljs.core.identity:cljs.core.reverse).call(null,p1__5168_SHARP_));
}).call(null,clojure.string.split.call(null,(function (p1__5167_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"word","word",-420123725),p1__5167_SHARP_)))+"; "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"trans","trans",-1318503851),p1__5167_SHARP_))));
}).call(null,cljs.core.mapv.call(null,(function (m){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"word","word",-420123725),m.call(null,"text"),new cljs.core.Keyword(null,"trans","trans",-1318503851),cljs.core.mapv.call(null,(function (p1__5166_SHARP_){return p1__5166_SHARP_.call(null,"text");
}),m.call(null,"tr"))], null);
}),yan_map.call(null,"def"))),/; /));
});
get_translations = function(yan_map,ru_QMARK_){
switch(arguments.length){
case 1:
return get_translations__1.call(this,yan_map);
case 2:
return get_translations__2.call(this,yan_map,ru_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_translations.cljs$core$IFn$_invoke$arity$1 = get_translations__1;
get_translations.cljs$core$IFn$_invoke$arity$2 = get_translations__2;
return get_translations;
})()
;
rureader.core.multitran = (function multitran(word){return ("http://www.multitran.ru/c/m.exe?CL=1&s="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)+"&l1=1");
});
rureader.core.lingvo = (function lingvo(word){return ("http://www.lingvo-online.ru/ru/Translate/ru-en/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word));
});
rureader.core.forvo = (function forvo(word){return ("http://www.forvo.com/word/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)+"/#ru");
});
rureader.core.yandex = (function yandex(word){return ("http://slovari.yandex.ru/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)+"/\u043F\u0435\u0440\u0435\u0432\u043E\u0434/");
});
rureader.core.wiktionary = (function wiktionary(word){return ("http://en.wiktionary.org/wiki/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)+"#Russian");
});
rureader.core.wiktionary_ru = (function wiktionary_ru(word){return ("http://ru.wiktionary.org/wiki/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)+"#.D0.A0.D1.83.D1.81.D1.81.D0.BA.D0.B8.D0.B9");
});
rureader.core.gramota = (function gramota(word){return ("http://gramota.ru/slovari/dic/?word="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)+"&all=x");
});
rureader.core.wrap_word = (function wrap_word(word,ru_QMARK_){return ("<span id=\"word\" \n        onClick=\"rureader.core.lookup_word(this.innerHTML, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ru_QMARK_)+")\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)+"</span>");
});
rureader.core.update_saved_words = (function update_saved_words(){return rureader.core.get_by_id.call(null,"saved-words").innerHTML = clojure.string.join.call(null,"<br>",cljs.core.vals.call(null,cljs.core.deref.call(null,rureader.core.saved)));
});
rureader.core.save_word = (function save_word(){cljs.core.swap_BANG_.call(null,rureader.core.saved,cljs.core.assoc,cljs.core.deref.call(null,rureader.core.cword),cljs.core.deref.call(null,rureader.core.ctrans));
rureader.core.get_by_id.call(null,"last-saved").innerHTML = ("Last saved: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rureader.core.cword)));
return rureader.core.update_saved_words.call(null);
});
rureader.core.display_saved = (function display_saved(bool){return rureader.core.get_by_id.call(null,"saved-region").style.display = (cljs.core.truth_(bool)?"block":"none");
});
rureader.core.lookup_word = (function lookup_word(word,ru_QMARK_){rureader.core.get_by_id.call(null,"dic1").src = rureader.core.yandex.call(null,word);
var yan_map = rureader.core.yan_get.call(null,word,ru_QMARK_);var base_word = rureader.core.get_base_word.call(null,yan_map);var trans = rureader.core.get_translations.call(null,yan_map,ru_QMARK_);var _ = cljs.core.reset_BANG_.call(null,rureader.core.cword,base_word);var ___$1 = cljs.core.reset_BANG_.call(null,rureader.core.ctrans,trans);var base_word__$1 = (cljs.core.truth_(ru_QMARK_)?base_word:word);rureader.core.get_by_id.call(null,"dic2").src = (cljs.core.truth_(ru_QMARK_)?rureader.core.wiktionary:rureader.core.lingvo).call(null,base_word__$1);
rureader.core.get_by_id.call(null,"forvolink").href = rureader.core.forvo.call(null,word);
rureader.core.get_by_id.call(null,"forvobaselink").href = rureader.core.forvo.call(null,base_word__$1);
rureader.core.get_by_id.call(null,"multitranlink").href = rureader.core.multitran.call(null,word);
rureader.core.get_by_id.call(null,"multitranbaselink").href = rureader.core.multitran.call(null,base_word__$1);
rureader.core.get_by_id.call(null,"lingvolink").href = rureader.core.lingvo.call(null,base_word__$1);
return rureader.core.get_by_id.call(null,"ruwiktionarylink").href = rureader.core.wiktionary_ru.call(null,base_word__$1);
});
rureader.core.prepare = (function prepare(text){return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,text,/[a-zA-Z]+/,(function (p1__5169_SHARP_){return rureader.core.wrap_word.call(null,p1__5169_SHARP_,false);
})),/[а-яА-ЯЁё][а-яА-ЯЁё-]*/,(function (p1__5170_SHARP_){return rureader.core.wrap_word.call(null,p1__5170_SHARP_,true);
})),/\n\n+/,"<br><br>");
});
rureader.core.display_text = (function display_text(){var text = rureader.core.prepare.call(null,rureader.core.get_by_id.call(null,"inputbox").value);return rureader.core.get_by_id.call(null,"textregion").innerHTML = text;
});
rureader.core.scroll = (function scroll(n,frame){return frame.contentWindow().scrollTo((20),(20));
});
