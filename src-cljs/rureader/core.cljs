(ns rureader.core
  (:require [clojure.string :as cstr]))

(defn get-by-id [x]
  (.getElementById js/document x))

(defn multitran [word]
  (str "http://www.multitran.ru/c/m.exe?CL=1&s=" word "&l1=1"))

(defn lingvo [word]
  (str "http://www.lingvo-online.ru/ru/Translate/ru-en/" word))

(defn forvo [word]
  (str "http://www.forvo.com/word/" word "/#ru"))

(defn yandex [word]
  (str "http://slovari.yandex.ru/" word "/перевод/"))

;;; Does not work because gramota uses cp1251
(defn gramota [word]
  (str "http://gramota.ru/slovari/dic/?word=" word "&all=x"))

(defn wrap-word [word]
  (str "<span id=\"word\" 
        onClick=\"rureader.core.lookup_word(this.innerHTML)\">"
       word "</span>"))

(defn lookup-word [word]
  (set! (.-src (get-by-id "dic1")) (yandex word))
  (set! (.-src (get-by-id "dic2")) (multitran word)))

(defn prepare [text]
  (-> text
      (cstr/replace #"[а-яА-ЯЁё][а-яА-ЯЁё-]*" wrap-word)
      (cstr/replace #"\n\n+" "<br>")))

(defn display-text []
  (let [text (-> (get-by-id "inputbox") .-value prepare)]
    (set! (.-innerHTML (get-by-id "textregion")) text)))
