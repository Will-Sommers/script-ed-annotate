(ns script-ed-annotate.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! chan close! put! sliding-buffer to-chan]]
            [script-ed-annotate.api :refer [GET]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)


(def app-state (atom {:sidebar {:expanded false
                                :repo-name "Sojoban"
                                :files [{:name ".gitignore"}
                                        {:name "index.html"}
                                        {:name "script.js"}
                                        {:name "style.css"}]}}))


(defn expand-sidebar []
  )

(defn expanded? [data]
  (if (:expanded data)
    {:left 0}
    {:left -150}))

(defn file-view  [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil (:name data)))))

(defn sidebar-view [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
               (dom/div #js {:onClick expand-sidebar} "Annotate")
               (dom/div #js {:className "sidebar"
                             :style (expanded? data)}
                        (dom/div nil (:repo-name data))
                        (apply dom/ul nil
                               (om/build-all file-view (:files data))))))))

(defn app-view [data owner]
  (reify
    om/IRender
    (render [_]
      (om/build sidebar-view (:sidebar data)))))

(defn init []
  (om/root
   app-view
   app-state
   {:target (.getElementById js/document "app")}))

(init)

#_(go
 (let [a (<! (GET "http://127.0.0.1:8080/user/will-sommers/repo/sojoban"))]
   (println a)))




