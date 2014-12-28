(ns rureader.core
  (:require [clojure.string :as cstr]
            [cognitect.transit :as tran])
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

(defn yan-get [word]
  (let [req (js/XMLHttpRequest.)]
    (.open req "GET"
           (str "https://dictionary.yandex.net/api/v1/dicservice.json/lookup"
                "?key=" api-key "&lang=ru-en&text=" word
                "&flags=4") false)
    (.send req)
    (tran/read json-reader (.-responseText req))))

(defn get-base-word [yan-map]
  (get-in yan-map ["def" 0 "text"]))

(defn get-translations [yan-map]
  (-> (mapv (fn [m] {:word (m "text")
                     :trans (mapv #(% "text") (m "tr"))})
            (yan-map "def"))
      (#(str (cstr/join ", " (map :word %))
             "; "
             (cstr/join ", " (mapcat :trans %))))))

(defn multitran [word]
  (str "http://www.multitran.ru/c/m.exe?CL=1&s=" word "&l1=1"))

(defn lingvo [word]
  (str "http://www.lingvo-online.ru/ru/Translate/ru-en/" word))

(defn forvo [word]
  (str "http://www.forvo.com/word/" word "/#ru"))

(defn yandex [word]
  (str "http://slovari.yandex.ru/" word "/перевод/"))

(defn wiktionary [word]
  (str "http://en.wiktionary.org/wiki/" word "#Russian"))

;;; Does not work because gramota uses cp1251
(defn gramota [word]
  (str "http://gramota.ru/slovari/dic/?word=" word "&all=x"))

(defn wrap-word [word]
  (str "<span id=\"word\" 
        onClick=\"rureader.core.lookup_word(this.innerHTML)\">"
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

(defn lookup-word [word]
  (set! (.-src (get-by-id "dic1")) (yandex word))
  (let [yan-map (yan-get word)
        base-word (get-base-word yan-map)
        trans (get-translations yan-map)]
    (reset! cword base-word)
    (reset! ctrans trans)
    (set! (.-src (get-by-id "dic2")) (wiktionary base-word))
    (set! (.-href (get-by-id "forvolink")) (forvo word))
    (set! (.-href (get-by-id "forvobaselink")) (forvo base-word))
    (set! (.-href (get-by-id "multitranlink")) (multitran word))
    (set! (.-href (get-by-id "multitranbaselink")) (multitran base-word))
    (set! (.-href (get-by-id "lingvolink")) (lingvo base-word))))

(defn prepare [text]
  (-> text
      (cstr/replace #"[а-яА-ЯЁё][а-яА-ЯЁё-]*" wrap-word)
      (cstr/replace #"\n\n+" "<br><br>")))

(defn display-text []
  (let [text (-> (get-by-id "inputbox") .-value prepare)]
    (set! (.-innerHTML (get-by-id "textregion")) text)))

(defn scroll [n frame]
  (-> frame .contentWindow (.scrollTo 20 20)))

;sandbox="allow-same-origin allow-forms"

; {"head":{},
;  "def": [{"text":"еще","pos":"частица","tr":
;           [{"text":"still","pos":"particle","mean":[{"text":"все еще"}],"ex":[{"text":"еще разок","tr":[{"text":"still razok"}]}]}
;            {"text":"another","pos":"particle","ex":[{"text":"еще неделька","tr":[{"text":"another week"}]}]}
;            {"text":"even","pos":"particle","syn":[{"text":"else","pos":"particle"}],"ex":[{"text":"даже еще хуже","tr":[{"text":"even worse"}]},{"text":"как еще","tr":[{"text":"how else"}]}]}
;            {"text":"yet","pos":"particle","mean":[{"text":"все же"}],"ex":[{"text":"еще раз","tr":[{"text":"yet again"}]}]}
;            {"text":"also","pos":"particle","ex":[{"text":"еще хотеть","tr":[{"text":"also want"}]}]}
;            {"text":"as far back","pos":"particle"}]}]}
