(defproject rureader "0.1.0"
  :plugins [[lein-cljsbuild "1.0.3"]]
  :dependencies [[org.clojure/clojurescript "0.0-2371"]
                 [org.clojure/clojure "1.6.0"]]
  :cljsbuild {
    :builds [{
        ; The path to the top-level ClojureScript source directory:
        :source-paths ["src-cljs"]
        ; The standard ClojureScript compiler options:
        ; (See the ClojureScript compiler documentation for details.)
        :compiler {
          :output-to "target/cljsbuild-main.js"
          :optimizations :whitespace
          :pretty-print true}}]})
