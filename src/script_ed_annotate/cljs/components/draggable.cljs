(ns script-ed-annotate.draggable
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [ankha.core :as ankha]
            [goog.events :as events])
  (:import [goog.events EventType]))

(enable-console-print!)

(def local-dragging? (atom false))

(defn listen [el type]
  (let [out (chan)]
    (events/listen el type (fn [event]
                             (when @local-dragging?
                               (.preventDefault event)
                               (put! out event))))
    out))

(defn do-drag [data]
  (when-let [pos (get-in data [:data :dnd-window])]
    #js {:position "fixed"
         :left (:left pos)
         :top (:top pos)}))

(defn draggable-window [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:c-mouse (chan)})
    om/IDidMount
    (did-mount [_]
      (let [c-mouse (om/get-state owner :c-mouse)
            mouse-move-chan (async/map
                             (fn [e] [(.-clientX e) (.-clientY e)])
                             [(listen js/window "mousemove")])
            mouse-up-chan (async/map
                             (fn [e] [(.-clientX e) (.-clientY e)])
                             [(listen js/window "mouseup")])]
        (go (while true
              (alt!
               mouse-move-chan ([pos] (let [new-pos {:left (first pos) :top (last pos)}]
                                         (om/update! (:data data) :dnd-window new-pos))) 
               mouse-up-chan ([pos] (reset! local-dragging? false)))))))
    om/IRenderState
    (render-state [_ {:keys [c-mouse]}]
      (dom/div
       #js {:style (do-drag data)
            :className "draggable-window"}
       (dom/div #js {:onMouseDown #(reset! local-dragging? true)})
       (om/build (:render-via data) (:data data))))))

;;                (om/build draggable-window {:data data :render-via ankha/inspector})


