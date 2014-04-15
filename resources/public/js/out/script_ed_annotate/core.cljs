(ns script-ed-annotate.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! chan close! put! sliding-buffer to-chan]]
            [script-ed-annotate.api :refer [GET]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)


(def app-state {:displayed-files []
                :display-welcome true
                })


(defn expand-sidebar [data]
  (om/transact! data :expanded #(not (:expanded @data))))

(defn expanded? [data]
  (if (:expanded data)
    #js {:left 0}
    #js {:left -250}))

(defn select-file [control-chan data]
  (let [path (:path data)
        code (get-in data [:file-contents :body])]
    (put! control-chan {:path path, :code code, :action :select-file})))

(defn file-view  [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:onClick #(select-file (om/get-shared owner [:chans :controls-chan]) data)}
               (:path data)))))

(defn navbar-view [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil "testing"))))

(defn sidebar-view [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
               (dom/div #js {:onClick #(expand-sidebar data)
                             :className "logo"} "Annotate")
               (dom/div #js {:className "sidebar"
                             :style (expanded? data)}
                        (dom/div nil (:name data))
                        (apply dom/ul nil
                               (om/build-all file-view (:files data))))))))

(defn main-view [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil 
        (apply dom/ul nil
          (map #(dom/li nil (:code %)) data))))))

(defn app-view [data owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (go
       (while true
         (let [control (<! (om/get-shared owner [:chans :controls-chan]))]
           (om/transact! data :displayed-files #(conj % control))))))

    om/IRender
    (render [_]
      (dom/div nil
               (om/build navbar-view data)
               (om/build sidebar-view (->> (:resp data)
                                           first))
               (om/build main-view (:displayed-files data))))))

(defn init [state]
  (let [chans {:api-chan (chan)
               :controls-chan (chan)}]
    (om/root
     app-view
     state
     {:target (.getElementById js/document "app")
      :shared {:chans chans}})))

(go
 (let [a (<! (GET "http://127.0.0.1:8080/user/will-sommers/repo/sojoban"))
       state (assoc app-state :resp [(merge {:name "sojoban"} {:files a})])]
   (println state)
   (init (atom state))
   #_(println a)))
