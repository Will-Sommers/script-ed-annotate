(defproject script-ed-annotate "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[ankha "0.1.1"]
								 [org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2138"]
								 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.5.1"]
                 [prismatic/dommy "0.1.2"]
                 [sablono "0.2.6"]
                 [secretary "1.0.0"]
								 [ring/ring "1.2.1"]
								 [compojure "1.1.6"]
								 [fogus/ring-edn "0.2.0"]
								 [cljs-ajax "0.2.3"]
								 [ring-cors "0.1.0"]
								 [clj-http "0.9.1"]
								 [org.clojure/data.json "0.2.4"]]

  :plugins [[lein-cljsbuild "1.0.2"]]

  :source-paths ["src/script_ed_annotate/cljs"]

  :cljsbuild {
    :builds [{:id "script-ed-annotate"
              :source-paths ["src/script_ed_annotate/cljs"]
              :compiler {
                :output-to "resources/public/js/main.js"
                :output-dir "resources/public/js/out"
                :optimizations :none
                :source-map true}}]})
