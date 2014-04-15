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
script_ed_annotate.core.app_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"displayed-files","displayed-files",3921072637),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"display-welcome","display-welcome",2104273097),true], null);
script_ed_annotate.core.expand_sidebar = (function expand_sidebar(data){return om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"expanded","expanded",3369771051),(function (){return cljs.core.not.call(null,new cljs.core.Keyword(null,"expanded","expanded",3369771051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)));
}));
});
script_ed_annotate.core.expanded_QMARK_ = (function expanded_QMARK_(data){if(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",3369771051).cljs$core$IFn$_invoke$arity$1(data)))
{return {"left": 0};
} else
{return {"left": -250};
}
});
script_ed_annotate.core.select_file = (function select_file(control_chan,data){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(data);var code = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-contents","file-contents",2351712189),new cljs.core.Keyword(null,"body","body",1016933652)], null));return cljs.core.async.put_BANG_.call(null,control_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"code","code",1016963423),code,new cljs.core.Keyword(null,"action","action",3885920680),new cljs.core.Keyword(null,"select-file","select-file",1182765855)], null));
});
script_ed_annotate.core.file_view = (function file_view(data,owner){if(typeof script_ed_annotate.core.t12824 !== 'undefined')
{} else
{
/**
* @constructor
*/
script_ed_annotate.core.t12824 = (function (owner,data,file_view,meta12825){
this.owner = owner;
this.data = data;
this.file_view = file_view;
this.meta12825 = meta12825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
script_ed_annotate.core.t12824.cljs$lang$type = true;
script_ed_annotate.core.t12824.cljs$lang$ctorStr = "script-ed-annotate.core/t12824";
script_ed_annotate.core.t12824.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"script-ed-annotate.core/t12824");
});
script_ed_annotate.core.t12824.prototype.om$core$IRender$ = true;
script_ed_annotate.core.t12824.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"onClick": (function (){return script_ed_annotate.core.select_file.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.Keyword(null,"controls-chan","controls-chan",2748326779)], null)),self__.data);
})},new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(self__.data));
});
script_ed_annotate.core.t12824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12826){var self__ = this;
var _12826__$1 = this;return self__.meta12825;
});
script_ed_annotate.core.t12824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12826,meta12825__$1){var self__ = this;
var _12826__$1 = this;return (new script_ed_annotate.core.t12824(self__.owner,self__.data,self__.file_view,meta12825__$1));
});
script_ed_annotate.core.__GT_t12824 = (function __GT_t12824(owner__$1,data__$1,file_view__$1,meta12825){return (new script_ed_annotate.core.t12824(owner__$1,data__$1,file_view__$1,meta12825));
});
}
return (new script_ed_annotate.core.t12824(owner,data,file_view,null));
});
script_ed_annotate.core.navbar_view = (function navbar_view(data,owner){if(typeof script_ed_annotate.core.t12830 !== 'undefined')
{} else
{
/**
* @constructor
*/
script_ed_annotate.core.t12830 = (function (owner,data,navbar_view,meta12831){
this.owner = owner;
this.data = data;
this.navbar_view = navbar_view;
this.meta12831 = meta12831;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
script_ed_annotate.core.t12830.cljs$lang$type = true;
script_ed_annotate.core.t12830.cljs$lang$ctorStr = "script-ed-annotate.core/t12830";
script_ed_annotate.core.t12830.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"script-ed-annotate.core/t12830");
});
script_ed_annotate.core.t12830.prototype.om$core$IRender$ = true;
script_ed_annotate.core.t12830.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,"testing");
});
script_ed_annotate.core.t12830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12832){var self__ = this;
var _12832__$1 = this;return self__.meta12831;
});
script_ed_annotate.core.t12830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12832,meta12831__$1){var self__ = this;
var _12832__$1 = this;return (new script_ed_annotate.core.t12830(self__.owner,self__.data,self__.navbar_view,meta12831__$1));
});
script_ed_annotate.core.__GT_t12830 = (function __GT_t12830(owner__$1,data__$1,navbar_view__$1,meta12831){return (new script_ed_annotate.core.t12830(owner__$1,data__$1,navbar_view__$1,meta12831));
});
}
return (new script_ed_annotate.core.t12830(owner,data,navbar_view,null));
});
script_ed_annotate.core.sidebar_view = (function sidebar_view(data,owner){if(typeof script_ed_annotate.core.t12836 !== 'undefined')
{} else
{
/**
* @constructor
*/
script_ed_annotate.core.t12836 = (function (owner,data,sidebar_view,meta12837){
this.owner = owner;
this.data = data;
this.sidebar_view = sidebar_view;
this.meta12837 = meta12837;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
script_ed_annotate.core.t12836.cljs$lang$type = true;
script_ed_annotate.core.t12836.cljs$lang$ctorStr = "script-ed-annotate.core/t12836";
script_ed_annotate.core.t12836.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"script-ed-annotate.core/t12836");
});
script_ed_annotate.core.t12836.prototype.om$core$IRender$ = true;
script_ed_annotate.core.t12836.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": "logo", "onClick": (function (){return script_ed_annotate.core.expand_sidebar.call(null,self__.data);
})},"Annotate"),React.DOM.div({"style": script_ed_annotate.core.expanded_QMARK_.call(null,self__.data), "className": "sidebar"},React.DOM.div(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,script_ed_annotate.core.file_view,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(self__.data)))));
});
script_ed_annotate.core.t12836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12838){var self__ = this;
var _12838__$1 = this;return self__.meta12837;
});
script_ed_annotate.core.t12836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12838,meta12837__$1){var self__ = this;
var _12838__$1 = this;return (new script_ed_annotate.core.t12836(self__.owner,self__.data,self__.sidebar_view,meta12837__$1));
});
script_ed_annotate.core.__GT_t12836 = (function __GT_t12836(owner__$1,data__$1,sidebar_view__$1,meta12837){return (new script_ed_annotate.core.t12836(owner__$1,data__$1,sidebar_view__$1,meta12837));
});
}
return (new script_ed_annotate.core.t12836(owner,data,sidebar_view,null));
});
script_ed_annotate.core.main_view = (function main_view(data,owner){if(typeof script_ed_annotate.core.t12843 !== 'undefined')
{} else
{
/**
* @constructor
*/
script_ed_annotate.core.t12843 = (function (owner,data,main_view,meta12844){
this.owner = owner;
this.data = data;
this.main_view = main_view;
this.meta12844 = meta12844;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
script_ed_annotate.core.t12843.cljs$lang$type = true;
script_ed_annotate.core.t12843.cljs$lang$ctorStr = "script-ed-annotate.core/t12843";
script_ed_annotate.core.t12843.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"script-ed-annotate.core/t12843");
});
script_ed_annotate.core.t12843.prototype.om$core$IRender$ = true;
script_ed_annotate.core.t12843.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,(function (p1__12839_SHARP_){return React.DOM.li(null,new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(p1__12839_SHARP_));
}),self__.data)));
});
script_ed_annotate.core.t12843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12845){var self__ = this;
var _12845__$1 = this;return self__.meta12844;
});
script_ed_annotate.core.t12843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12845,meta12844__$1){var self__ = this;
var _12845__$1 = this;return (new script_ed_annotate.core.t12843(self__.owner,self__.data,self__.main_view,meta12844__$1));
});
script_ed_annotate.core.__GT_t12843 = (function __GT_t12843(owner__$1,data__$1,main_view__$1,meta12844){return (new script_ed_annotate.core.t12843(owner__$1,data__$1,main_view__$1,meta12844));
});
}
return (new script_ed_annotate.core.t12843(owner,data,main_view,null));
});
script_ed_annotate.core.app_view = (function app_view(data,owner){if(typeof script_ed_annotate.core.t12882 !== 'undefined')
{} else
{
/**
* @constructor
*/
script_ed_annotate.core.t12882 = (function (owner,data,app_view,meta12883){
this.owner = owner;
this.data = data;
this.app_view = app_view;
this.meta12883 = meta12883;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
script_ed_annotate.core.t12882.cljs$lang$type = true;
script_ed_annotate.core.t12882.cljs$lang$ctorStr = "script-ed-annotate.core/t12882";
script_ed_annotate.core.t12882.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"script-ed-annotate.core/t12882");
});
script_ed_annotate.core.t12882.prototype.om$core$IRender$ = true;
script_ed_annotate.core.t12882.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,script_ed_annotate.core.navbar_view,self__.data),om.core.build.call(null,script_ed_annotate.core.sidebar_view,cljs.core.first.call(null,new cljs.core.Keyword(null,"resp","resp",1017401154).cljs$core$IFn$_invoke$arity$1(self__.data))),om.core.build.call(null,script_ed_annotate.core.main_view,new cljs.core.Keyword(null,"displayed-files","displayed-files",3921072637).cljs$core$IFn$_invoke$arity$1(self__.data)));
});
script_ed_annotate.core.t12882.prototype.om$core$IWillMount$ = true;
script_ed_annotate.core.t12882.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__5564__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_12901){var state_val_12902 = (state_12901[1]);if((state_val_12902 === 7))
{var inst_12891 = (state_12901[2]);var inst_12892 = (function (){var control = inst_12891;return ((function (control,inst_12891,state_val_12902){
return (function (p1__12846_SHARP_){return cljs.core.conj.call(null,p1__12846_SHARP_,control);
});
;})(control,inst_12891,state_val_12902))
})();var inst_12893 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"displayed-files","displayed-files",3921072637),inst_12892);var state_12901__$1 = (function (){var statearr_12903 = state_12901;(statearr_12903[7] = inst_12893);
return statearr_12903;
})();var statearr_12904_12917 = state_12901__$1;(statearr_12904_12917[2] = null);
(statearr_12904_12917[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12902 === 6))
{var inst_12897 = (state_12901[2]);var state_12901__$1 = state_12901;var statearr_12905_12918 = state_12901__$1;(statearr_12905_12918[2] = inst_12897);
(statearr_12905_12918[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12902 === 5))
{var state_12901__$1 = state_12901;var statearr_12906_12919 = state_12901__$1;(statearr_12906_12919[2] = null);
(statearr_12906_12919[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12902 === 4))
{var inst_12887 = [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.Keyword(null,"controls-chan","controls-chan",2748326779)];var inst_12888 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_12887,null));var inst_12889 = om.core.get_shared.call(null,self__.owner,inst_12888);var state_12901__$1 = state_12901;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12901__$1,7,inst_12889);
} else
{if((state_val_12902 === 3))
{var inst_12899 = (state_12901[2]);var state_12901__$1 = state_12901;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12901__$1,inst_12899);
} else
{if((state_val_12902 === 2))
{var state_12901__$1 = state_12901;if(true)
{var statearr_12907_12920 = state_12901__$1;(statearr_12907_12920[1] = 4);
} else
{var statearr_12908_12921 = state_12901__$1;(statearr_12908_12921[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12902 === 1))
{var state_12901__$1 = state_12901;var statearr_12909_12922 = state_12901__$1;(statearr_12909_12922[2] = null);
(statearr_12909_12922[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_12913 = [null,null,null,null,null,null,null,null];(statearr_12913[0] = state_machine__5550__auto__);
(statearr_12913[1] = 1);
return statearr_12913;
});
var state_machine__5550__auto____1 = (function (state_12901){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_12901);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e12914){if((e12914 instanceof Object))
{var ex__5553__auto__ = e12914;var statearr_12915_12923 = state_12901;(statearr_12915_12923[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12901);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12914;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12924 = state_12901;
state_12901 = G__12924;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_12901){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_12901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_12916 = f__5565__auto__.call(null);(statearr_12916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto__);
return statearr_12916;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return c__5564__auto__;
});
script_ed_annotate.core.t12882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12884){var self__ = this;
var _12884__$1 = this;return self__.meta12883;
});
script_ed_annotate.core.t12882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12884,meta12883__$1){var self__ = this;
var _12884__$1 = this;return (new script_ed_annotate.core.t12882(self__.owner,self__.data,self__.app_view,meta12883__$1));
});
script_ed_annotate.core.__GT_t12882 = (function __GT_t12882(owner__$1,data__$1,app_view__$1,meta12883){return (new script_ed_annotate.core.t12882(owner__$1,data__$1,app_view__$1,meta12883));
});
}
return (new script_ed_annotate.core.t12882(owner,data,app_view,null));
});
script_ed_annotate.core.init = (function init(state){var chans = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"api-chan","api-chan",1934651031),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"controls-chan","controls-chan",2748326779),cljs.core.async.chan.call(null)], null);return om.core.root.call(null,script_ed_annotate.core.app_view,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app"),new cljs.core.Keyword(null,"shared","shared",4405305303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chans","chans",1108527827),chans], null)], null));
});
var c__5564__auto___12952 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_12942){var state_val_12943 = (state_12942[1]);if((state_val_12943 === 2))
{var inst_12927 = (state_12942[2]);var inst_12928 = [new cljs.core.Keyword(null,"name","name",1017277949)];var inst_12929 = ["sojoban"];var inst_12930 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12928,inst_12929);var inst_12931 = [new cljs.core.Keyword(null,"files","files",1111338473)];var inst_12932 = [inst_12927];var inst_12933 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12931,inst_12932);var inst_12934 = cljs.core.merge.call(null,inst_12930,inst_12933);var inst_12935 = [inst_12934];var inst_12936 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_12935,null));var inst_12937 = cljs.core.assoc.call(null,script_ed_annotate.core.app_state,new cljs.core.Keyword(null,"resp","resp",1017401154),inst_12936);var inst_12938 = cljs.core.println.call(null,inst_12937);var inst_12939 = cljs.core.atom.call(null,inst_12937);var inst_12940 = script_ed_annotate.core.init.call(null,inst_12939);var state_12942__$1 = (function (){var statearr_12944 = state_12942;(statearr_12944[7] = inst_12938);
return statearr_12944;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12942__$1,inst_12940);
} else
{if((state_val_12943 === 1))
{var inst_12925 = script_ed_annotate.api.GET.call(null,"http://127.0.0.1:8080/user/will-sommers/repo/sojoban");var state_12942__$1 = state_12942;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12942__$1,2,inst_12925);
} else
{return null;
}
}
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_12948 = [null,null,null,null,null,null,null,null];(statearr_12948[0] = state_machine__5550__auto__);
(statearr_12948[1] = 1);
return statearr_12948;
});
var state_machine__5550__auto____1 = (function (state_12942){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_12942);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e12949){if((e12949 instanceof Object))
{var ex__5553__auto__ = e12949;var statearr_12950_12953 = state_12942;(statearr_12950_12953[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12942);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12949;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12954 = state_12942;
state_12942 = G__12954;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_12942){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_12942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_12951 = f__5565__auto__.call(null);(statearr_12951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___12952);
return statearr_12951;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));

//# sourceMappingURL=core.js.map