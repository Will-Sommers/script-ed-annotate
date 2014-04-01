(ns script-ed-annotate.core
	(:require [script-ed-annotate.utils :as utils]
						[ring.middleware.cors :as cors]
						[ring.util.response :refer [file-response]]
						[ring.adapter.jetty :refer [run-jetty]]
					  [ring.middleware.edn :refer [wrap-edn-params]]
						[compojure.core :refer [defroutes GET]]
						[compojure.handler :as handler]
						[compojure.route :as route]
						[clj-http.client :as client]
						[clojure.data.json :as json]))

(defn generate-response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/edn"}
   :body (pr-str data)})

(def github-api-url "https://api.github.com/")

(defn github-sha-request-url [user repo]
	(str github-api-url "repos/" user "/" repo "/git/refs/heads/master"))

(defn github-repo-contents-url [user repo sha]
	(str github-api-url "repos/" user "/" repo "/git/trees/" sha "?recursive=1"))

(defn parse-response [response]
	 (json/read-str (:body response)
									 :key-fn keyword))

(defn github-request [url]
	(client/get url
		{:headers {"Accept" "application/vnd.github.3.raw"
							 "Authorization" "token 74b46c1fcc99ab6629a7c3c99636b379e4e9c13d"}}))

(defn get-repo-head-sha [user repo]
	(let [response (github-request (build-github-sha-request-url user repo))
				json-response (parse-response response)
				sha (get-in json-response [:object :sha])]
		sha))

(defn get-repo-contents [user repo]
	(let [sha (get-repo-head-sha user repo)
				response (github-request (github-repo-contents-url user repo sha))
				json-response (parse-response response)
				file-urls (map #(hash-map :url (:url %) :path (:path %)) (:tree json-response))]
		(map #(hash-map :file-contents (github-request (:url %))
										:path (:path %)) file-urls)))

(defn index []
	(file-response "public/html/index.html" {:root "resources"}))

(defn send-api-request [user repo]
	(let [files-response (get-repo-contents "will-sommers" "sojoban")]
		(generate-response files-response)))

(defroutes routes
	(GET "/" [] (index))
	(GET "/user/:user-name/repo/:repo" [user-name repo] (send-api-request user-name repo))
	(route/files "/" {:root "resources/public"}))

(def app
	(-> routes
			(cors/wrap-cors
        :access-control-allow-origin #"http://127.0.0.1:8080"
        :access-control-allow-methods ["GET"]
        :access-control-allow-headers ["Content-Type"])
			wrap-edn-params))

(defonce server
	(run-jetty  #'app {:port 8080 :join? false}))
