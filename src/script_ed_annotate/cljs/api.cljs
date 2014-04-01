(ns script-ed-annotate.api
	(:require-macros [cljs.core.async.macros :refer [go]])
	(:require [cljs.core.async :as async :refer [<! chan close! put!]]
  					[goog.net.XhrIo :as xhr]))


(defn GET [url & {:keys [raw]}]
  "send a GET request, returning a channel with a single result value"
  (let [comm (chan 1)]
    (xhr/send url
              (fn [event]
                (put! comm (-> event
                               .-target
                               .getResponseText
                               JSON/parse
                               (aget "data")
                               ((fn [d]
                                  (if raw
                                    d
                                    (js->clj d :keywordize-keys true))))))
                (close! comm)))
    comm))


(GET "http://127.0.0.1:8080/user/will-sommers/repo/sojobban")


(async/chan)
