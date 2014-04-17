(ns script-ed-annotate.sidebar
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! chan close! put! sliding-buffer to-chan]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(defn expand-sidebar [data]
  (om/transact! data :expanded #(not (:expanded @data))))

(defn expanded? [data]
  (if (:expanded data)
    #js {:display "inline-block"}
    #js {:display "none"}))

(defn select-file [control-chan data]
  (let [path (:path data)
        code (get-in data [:file-contents :body])]
    (put! control-chan {:path path, :code code, :action :select-file})))

(defn sidebar-file-view  [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:onClick #(select-file (om/get-shared owner [:chans :controls-chan]) data)}
               (:path data)))))

(defn sidebar-view [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "sidebar-wrapper"}
               (dom/div #js {:onClick #(expand-sidebar data)
                             :className "logo"} "Annotate")
               (dom/div #js {:className "sidebar"
                             :style (expanded? data)}
                        (dom/div nil (:name data))
                        (apply dom/ul nil
                               (om/build-all sidebar-file-view (:files data))))))))


