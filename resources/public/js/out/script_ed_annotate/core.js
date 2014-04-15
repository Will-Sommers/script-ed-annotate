// Compiled by ClojureScript 0.0-2173
goog.provide('script_ed_annotate.core');
goog.require('cljs.core');
goog.require('script_ed_annotate.api');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('script_ed_annotate.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
script_ed_annotate.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sidebar","sidebar",3099131598),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expanded","expanded",3369771051),false,new cljs.core.Keyword(null,"repo-name","repo-name",596675448),"Sojoban",new cljs.core.Keyword(null,"files","files",1111338473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),".gitignore"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),"index.html"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),"script.js"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),"style.css"], null)], null)], null)], null));
script_ed_annotate.core.expand_sidebar = (function expand_sidebar(){return null;
});
script_ed_annotate.core.expanded_QMARK_ = (function expanded_QMARK_(data){if(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",3369771051).cljs$core$IFn$_invoke$arity$1(data)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",1017222009),0], null);
} else
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",1017222009),-150], null);
}
});
script_ed_annotate.core.file_view = (function file_view(data,owner){if(typeof script_ed_annotate.core.t9757 !== 'undefined')
{} else
{
/**
* @constructor
*/
script_ed_annotate.core.t9757 = (function (owner,data,file_view,meta9758){
this.owner = owner;
this.data = data;
this.file_view = file_view;
this.meta9758 = meta9758;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
script_ed_annotate.core.t9757.cljs$lang$type = true;
script_ed_annotate.core.t9757.cljs$lang$ctorStr = "script-ed-annotate.core/t9757";
script_ed_annotate.core.t9757.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"script-ed-annotate.core/t9757");
});
script_ed_annotate.core.t9757.prototype.om$core$IRender$ = true;
script_ed_annotate.core.t9757.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.data));
});
script_ed_annotate.core.t9757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9759){var self__ = this;
var _9759__$1 = this;return self__.meta9758;
});
script_ed_annotate.core.t9757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9759,meta9758__$1){var self__ = this;
var _9759__$1 = this;return (new script_ed_annotate.core.t9757(self__.owner,self__.data,self__.file_view,meta9758__$1));
});
script_ed_annotate.core.__GT_t9757 = (function __GT_t9757(owner__$1,data__$1,file_view__$1,meta9758){return (new script_ed_annotate.core.t9757(owner__$1,data__$1,file_view__$1,meta9758));
});
}
return (new script_ed_annotate.core.t9757(owner,data,file_view,null));
});
script_ed_annotate.core.sidebar_view = (function sidebar_view(data,owner){if(typeof script_ed_annotate.core.t9763 !== 'undefined')
{} else
{
/**
* @constructor
*/
script_ed_annotate.core.t9763 = (function (owner,data,sidebar_view,meta9764){
this.owner = owner;
this.data = data;
this.sidebar_view = sidebar_view;
this.meta9764 = meta9764;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
script_ed_annotate.core.t9763.cljs$lang$type = true;
script_ed_annotate.core.t9763.cljs$lang$ctorStr = "script-ed-annotate.core/t9763";
script_ed_annotate.core.t9763.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"script-ed-annotate.core/t9763");
});
script_ed_annotate.core.t9763.prototype.om$core$IRender$ = true;
script_ed_annotate.core.t9763.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"onClick": script_ed_annotate.core.expand_sidebar},"Annotate"),React.DOM.div({"style": script_ed_annotate.core.expanded_QMARK_.call(null,self__.data), "className": "sidebar"},React.DOM.div(null,new cljs.core.Keyword(null,"repo-name","repo-name",596675448).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,script_ed_annotate.core.file_view,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(self__.data)))));
});
script_ed_annotate.core.t9763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9765){var self__ = this;
var _9765__$1 = this;return self__.meta9764;
});
script_ed_annotate.core.t9763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9765,meta9764__$1){var self__ = this;
var _9765__$1 = this;return (new script_ed_annotate.core.t9763(self__.owner,self__.data,self__.sidebar_view,meta9764__$1));
});
script_ed_annotate.core.__GT_t9763 = (function __GT_t9763(owner__$1,data__$1,sidebar_view__$1,meta9764){return (new script_ed_annotate.core.t9763(owner__$1,data__$1,sidebar_view__$1,meta9764));
});
}
return (new script_ed_annotate.core.t9763(owner,data,sidebar_view,null));
});
script_ed_annotate.core.app_view = (function app_view(data,owner){if(typeof script_ed_annotate.core.t9769 !== 'undefined')
{} else
{
/**
* @constructor
*/
script_ed_annotate.core.t9769 = (function (owner,data,app_view,meta9770){
this.owner = owner;
this.data = data;
this.app_view = app_view;
this.meta9770 = meta9770;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
script_ed_annotate.core.t9769.cljs$lang$type = true;
script_ed_annotate.core.t9769.cljs$lang$ctorStr = "script-ed-annotate.core/t9769";
script_ed_annotate.core.t9769.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"script-ed-annotate.core/t9769");
});
script_ed_annotate.core.t9769.prototype.om$core$IRender$ = true;
script_ed_annotate.core.t9769.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.build.call(null,script_ed_annotate.core.sidebar_view,new cljs.core.Keyword(null,"sidebar","sidebar",3099131598).cljs$core$IFn$_invoke$arity$1(self__.data));
});
script_ed_annotate.core.t9769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9771){var self__ = this;
var _9771__$1 = this;return self__.meta9770;
});
script_ed_annotate.core.t9769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9771,meta9770__$1){var self__ = this;
var _9771__$1 = this;return (new script_ed_annotate.core.t9769(self__.owner,self__.data,self__.app_view,meta9770__$1));
});
script_ed_annotate.core.__GT_t9769 = (function __GT_t9769(owner__$1,data__$1,app_view__$1,meta9770){return (new script_ed_annotate.core.t9769(owner__$1,data__$1,app_view__$1,meta9770));
});
}
return (new script_ed_annotate.core.t9769(owner,data,app_view,null));
});
script_ed_annotate.core.init = (function init(){return om.core.root.call(null,script_ed_annotate.core.app_view,script_ed_annotate.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));
});
script_ed_annotate.core.init.call(null);

//# sourceMappingURL=core.js.map