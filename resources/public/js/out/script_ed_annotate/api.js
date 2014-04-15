// Compiled by ClojureScript 0.0-2173
goog.provide('script_ed_annotate.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
/**
* @param {...*} var_args
*/
script_ed_annotate.api.GET = (function() { 
var GET__delegate = function (url,p__8455){var map__8457 = p__8455;var map__8457__$1 = ((cljs.core.seq_QMARK_.call(null,map__8457))?cljs.core.apply.call(null,cljs.core.hash_map,map__8457):map__8457);var raw = cljs.core.get.call(null,map__8457__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,cljs.core.map.call(null,(function (p1__8454_SHARP_){return cljs.core.js__GT_clj.call(null,p1__8454_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
}),JSON.parse.call(null,event.target.getResponseText())));
return cljs.core.async.close_BANG_.call(null,comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__8455 = null;if (arguments.length > 1) {
  p__8455 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__8455);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__8458){
var url = cljs.core.first(arglist__8458);
var p__8455 = cljs.core.rest(arglist__8458);
return GET__delegate(url,p__8455);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;

//# sourceMappingURL=api.js.map