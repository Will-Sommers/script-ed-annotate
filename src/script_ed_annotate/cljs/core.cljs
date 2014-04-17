(ns script-ed-annotate.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! chan close! put! sliding-buffer to-chan]]
            [script-ed-annotate.api :refer [GET]]
            [script-ed-annotate.sidebar :as sidebar]
            [script-ed-annotate.body :as body]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.string :as string]))

(enable-console-print!)


(def app-state {:displayed-files []
                :display-welcome true
                })

(defn navbar-view [data owner] 
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "navbar"} nil))))


(defn app-view [data owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (go
       (while true
         (let [control (<! (om/get-shared owner [:chans :controls-chan]))]
           (om/transact! data :displayed-files #(conj %  {:file control
                                                          :highlighted-lines []}))))))

    om/IRender
    (render [_]
      (dom/div nil
               (om/build navbar-view data)
               (dom/div #js {:className "container"}
                        (om/build sidebar/sidebar-view (->> (:resp data)
                                                    first))
                        (om/build body/main-view (:displayed-files data)))))))

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
   #_(println state)
   (init (atom state))
   #_(println a)))



