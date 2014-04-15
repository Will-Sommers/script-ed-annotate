(ns script-ed-annotate.system
  (:gen-class)
  (:require [script-ed-annotate.core :refer [start-server!]]))

(defn -main [& args]
  (start-server!))
