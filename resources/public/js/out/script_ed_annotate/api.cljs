(ns script-ed-annotate.api
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! chan close! put! sliding-buffer to-chan]]
            [goog.net.XhrIo :as xhr]))


(defn GET [url & {:keys [raw]}]
  "send a GET request, returning a channel with a single result value"
  (let [comm (chan 1)]
    (xhr/send url
              (fn [event]
                (put! comm (->> event
                                .-target
                                .getResponseText
                                JSON/parse
                                (map #(js->clj % :keywordize-keys true))))
                (close! comm)))
    comm))
