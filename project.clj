(defproject rureader "0.1.0"
  :plugins [[lein-cljsbuild "1.1.5"]]
  :dependencies [[org.clojure/clojurescript "1.10.520"]
                 [org.clojure/clojure "1.10.0"]
                 [com.cognitect/transit-cljs "0.8.256"]
                 [com.cemerick/url "0.1.1"]]
  :source-paths ["src-cljs"]
  :cljsbuild {:builds
              [{
                ; The path to the top-level ClojureScript source directory:
                :source-paths ["src-cljs"]
                ; The standard ClojureScript compiler options:
                ; (See the ClojureScript compiler documentation for details.)
                :compiler {:output-to "target/cljsbuild-main.js"
                           :optimizations :whitespace
                           :pretty-print true}}]}
  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                  [org.clojure/tools.nrepl "0.2.10"]]
                   :repl-options {:nrepl-middleware
                                  [cemerick.piggieback/wrap-cljs-repl]}}})
