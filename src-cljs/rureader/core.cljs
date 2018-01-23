(ns rureader.core
  (:require [clojure.string :as cstr]
            [cognitect.transit :as tran]
            [cemerick.url :as url])
  (:require-macros [clojure.core :as cm]))

(declare api-key)
(def json-reader (tran/reader "json"))
(def saved (atom {}))
(def cword (atom ""))
(def ctrans (atom ""))

(defn get-by-id [x]
  (.getElementById js/document x))

(defn load-api-key [akey]
  (def api-key akey))

(defn yan-get [word ru?]
  (let [req (js/XMLHttpRequest.)
        s (str "https://dictionary.yandex.net/api/v1/dicservice.json/lookup"
                "?key=" api-key "&lang=" (if ru? "ru-en" "en-ru") "&text=" word
                "&flags=4")]
    (.open req "GET" s false)
    (.send req)
    (tran/read json-reader (.-responseText req))))

(defn get-base-word [yan-map]
  ;; In the yandex map, dashes are replaced by spaces, for some reason, so
  ;; relace spaces with dashes, because we could never have clicked a word
  ;; with a space in it.
  (cstr/replace (get-in yan-map ["def" 0 "text"]) " " "-"))

(defn get-translations
  ([yan-map] (get-translations yan-map false))
  ([yan-map ru?]
   (-> (mapv (fn [m] {:word (m "text")
                      :trans (mapv #(% "text") (m "tr"))})
             (yan-map "def"))
       (#(str (cstr/join ", " (map :word %))
              "; "
              (cstr/join ", " (mapcat :trans %))))
       (cstr/split #"; ")
       (#(cstr/join "; " ((if ru? identity reverse) %))))))

(defn multitran [word]
  (str "http://www.multitran.ru/c/m.exe?CL=1&s=" word "&l1=1"))

(defn lingvo [word]
  (str "http://www.lingvo-online.ru/ru/Translate/ru-en/" word))

(defn forvo [word]
  (str "http://www.forvo.com/word/" word "/#ru"))

(defn yandex [word]
  (str "https://translate.yandex.com/m/translate?text=" word "&lang=ru-en"))

(defn wiktionary [word]
  (str "http://en.wiktionary.org/wiki/" word "#Russian"))

(defn wiktionary-ru [word]
  (str "http://ru.wiktionary.org/wiki/" word
       "#.D0.A0.D1.83.D1.81.D1.81.D0.BA.D0.B8.D0.B9"))

(defn image-search-url [text]
  (str "https://www.google.se/search?q="
       (cstr/replace text #" +" "+") "&tbm=isch"))

(defn reverso [word]
  (str "http://context.reverso.net/translation/russian-english/" word))

;;; Does not work because gramota uses cp1251
(defn gramota [word]
  (str "http://gramota.ru/slovari/dic/?word=" word "&all=x"))

(defn wrap-word [word ru?]
  (str "<span id=\"word\""
        " onClick=\"rureader.core.lookup_word(this.innerHTML, " ru? ")\">"
       word "</span>"))

(defn update-saved-words []
  (set! (.-innerHTML (get-by-id "saved-words"))
        (cstr/join "<br>" (vals @saved))))

(defn save-word []
  (swap! saved assoc @cword @ctrans)
  (set! (.-innerHTML (get-by-id "last-saved")) (str "Last saved: " @cword))
  (update-saved-words))

(defn display-saved [bool]
  (set! (-> (get-by-id "saved-region") .-style .-display)
        (if bool "block" "none")))

(defn lookup-word [word ru?]
  (set! (.-src (get-by-id "dic1")) (yandex word))
  (let [yan-map (yan-get word ru?)
        base-word (get-base-word yan-map)
        trans (get-translations yan-map ru?)
        _ (reset! cword base-word)
        _ (reset! ctrans trans)
        base-word (if ru? base-word word)]
    (set! (.-src (get-by-id "dic2")) ((if ru? wiktionary lingvo) base-word))
    (set! (.-href (get-by-id "forvolink")) (forvo word))
    (set! (.-href (get-by-id "forvobaselink")) (forvo base-word))
    (set! (.-href (get-by-id "multitranlink")) (multitran word))
    (set! (.-href (get-by-id "multitranbaselink")) (multitran base-word))
    (set! (.-href (get-by-id "ruwiktionarylink")) (wiktionary-ru base-word))
    (set! (.-href (get-by-id "lingvolink")) (lingvo base-word))
    (set! (.-href (get-by-id "imageslink")) (image-search-url base-word))
    (set! (.-href (get-by-id "reversobaselink")) (reverso base-word))
    (set! (.-href (get-by-id "reversolink")) (reverso word))))

(defn prepare [text]
  (-> text
      (cstr/replace #"[a-zA-Z]+" #(wrap-word % false))
      (cstr/replace #"[а-яА-ЯЁё][а-яА-ЯЁё-]*" #(wrap-word % true))
      (cstr/replace #"\n\n+" "<br><br>")
      (cstr/replace #"\n" "<br>")))

(defn display-text []
  (let [text (-> (get-by-id "inputbox") .-value prepare)]
    (set! (.-innerHTML (get-by-id "textregion")) text)))

(defn scroll [n frame]
  (-> frame .contentWindow (.scrollTo 20 20)))

(defn init-page [akey]
  (load-api-key akey)
  (enable-console-print!)
  (let [q (-> (-> js/window .-location .-href)
            url/url
            :query
            (get "text"))]
    (set! (.-value (get-by-id "inputbox"))
          q)
    (display-text)
    (when q
      (lookup-word q true))))
