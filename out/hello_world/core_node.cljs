(ns hello-world.core-node
  (:require [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)

(defn -main [& args]
  (println "Hello world!"))

(set! *main-cli-fn* -main)
