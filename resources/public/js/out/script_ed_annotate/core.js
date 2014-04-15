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
script_ed_annotate.core.file_view = (function file_view(data,owner){if(typeof script_ed_annotate.core.t14690 !== 'undefined')
{} else
{
/**
* @constructor
*/
script_ed_annotate.core.t14690 = (function (owner,data,file_view,meta14691){
this.owner = owner;
this.data = data;
this.file_view = file_view;
this.meta14691 = meta14691;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
script_ed_annotate.core.t14690.cljs$lang$type = true;
script_ed_annotate.core.t14690.cljs$lang$ctorStr = "script-ed-annotate.core/t14690";
script_ed_annotate.core.t14690.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"script-ed-annotate.core/t14690");
});
script_ed_annotate.core.t14690.prototype.om$core$IRender$ = true;
script_ed_annotate.core.t14690.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"onClick": (function (){return script_ed_annotate.core.select_file.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.Keyword(null,"controls-chan","controls-chan",2748326779)], null)),self__.data);
})},new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(self__.data));
});
script_ed_annotate.core.t14690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14692){var self__ = this;
var _14692__$1 = this;return self__.meta14691;
});
script_ed_annotate.core.t14690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14692,meta14691__$1){var self__ = this;
var _14692__$1 = this;return (new script_ed_annotate.core.t14690(self__.owner,self__.data,self__.file_view,meta14691__$1));
});
script_ed_annotate.core.__GT_t14690 = (function __GT_t14690(owner__$1,data__$1,file_view__$1,meta14691){return (new script_ed_annotate.core.t14690(owner__$1,data__$1,file_view__$1,meta14691));
});
}
return (new script_ed_annotate.core.t14690(owner,data,file_view,null));
});
script_ed_annotate.core.navbar_view = (function navbar_view(data,owner){if(typeof script_ed_annotate.core.t14696 !== 'undefined')
{} else
{
/**
* @constructor
*/
script_ed_annotate.core.t14696 = (function (owner,data,navbar_view,meta14697){
this.owner = owner;
this.data = data;
this.navbar_view = navbar_view;
this.meta14697 = meta14697;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
script_ed_annotate.core.t14696.cljs$lang$type = true;
script_ed_annotate.core.t14696.cljs$lang$ctorStr = "script-ed-annotate.core/t14696";
script_ed_annotate.core.t14696.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"script-ed-annotate.core/t14696");
});
script_ed_annotate.core.t14696.prototype.om$core$IRender$ = true;
script_ed_annotate.core.t14696.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,"testing");
});
script_ed_annotate.core.t14696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14698){var self__ = this;
var _14698__$1 = this;return self__.meta14697;
});
script_ed_annotate.core.t14696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14698,meta14697__$1){var self__ = this;
var _14698__$1 = this;return (new script_ed_annotate.core.t14696(self__.owner,self__.data,self__.navbar_view,meta14697__$1));
});
script_ed_annotate.core.__GT_t14696 = (function __GT_t14696(owner__$1,data__$1,navbar_view__$1,meta14697){return (new script_ed_annotate.core.t14696(owner__$1,data__$1,navbar_view__$1,meta14697));
});
}
return (new script_ed_annotate.core.t14696(owner,data,navbar_view,null));
});
script_ed_annotate.core.sidebar_view = (function sidebar_view(data,owner){if(typeof script_ed_annotate.core.t14702 !== 'undefined')
{} else
{
/**
* @constructor
*/
script_ed_annotate.core.t14702 = (function (owner,data,sidebar_view,meta14703){
this.owner = owner;
this.data = data;
this.sidebar_view = sidebar_view;
this.meta14703 = meta14703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
script_ed_annotate.core.t14702.cljs$lang$type = true;
script_ed_annotate.core.t14702.cljs$lang$ctorStr = "script-ed-annotate.core/t14702";
script_ed_annotate.core.t14702.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"script-ed-annotate.core/t14702");
});
script_ed_annotate.core.t14702.prototype.om$core$IRender$ = true;
script_ed_annotate.core.t14702.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": "logo", "onClick": (function (){return script_ed_annotate.core.expand_sidebar.call(null,self__.data);
})},"Annotate"),React.DOM.div({"style": script_ed_annotate.core.expanded_QMARK_.call(null,self__.data), "className": "sidebar"},React.DOM.div(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,script_ed_annotate.core.file_view,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(self__.data)))));
});
script_ed_annotate.core.t14702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14704){var self__ = this;
var _14704__$1 = this;return self__.meta14703;
});
script_ed_annotate.core.t14702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14704,meta14703__$1){var self__ = this;
var _14704__$1 = this;return (new script_ed_annotate.core.t14702(self__.owner,self__.data,self__.sidebar_view,meta14703__$1));
});
script_ed_annotate.core.__GT_t14702 = (function __GT_t14702(owner__$1,data__$1,sidebar_view__$1,meta14703){return (new script_ed_annotate.core.t14702(owner__$1,data__$1,sidebar_view__$1,meta14703));
});
}
return (new script_ed_annotate.core.t14702(owner,data,sidebar_view,null));
});
script_ed_annotate.core.main_view = (function main_view(data,owner){if(typeof script_ed_annotate.core.t14708 !== 'undefined')
{} else
{
/**
* @constructor
*/
script_ed_annotate.core.t14708 = (function (owner,data,main_view,meta14709){
this.owner = owner;
this.data = data;
this.main_view = main_view;
this.meta14709 = meta14709;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
script_ed_annotate.core.t14708.cljs$lang$type = true;
script_ed_annotate.core.t14708.cljs$lang$ctorStr = "script-ed-annotate.core/t14708";
script_ed_annotate.core.t14708.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"script-ed-annotate.core/t14708");
});
script_ed_annotate.core.t14708.prototype.om$core$IRender$ = true;
script_ed_annotate.core.t14708.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,"testin");
});
script_ed_annotate.core.t14708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14710){var self__ = this;
var _14710__$1 = this;return self__.meta14709;
});
script_ed_annotate.core.t14708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14710,meta14709__$1){var self__ = this;
var _14710__$1 = this;return (new script_ed_annotate.core.t14708(self__.owner,self__.data,self__.main_view,meta14709__$1));
});
script_ed_annotate.core.__GT_t14708 = (function __GT_t14708(owner__$1,data__$1,main_view__$1,meta14709){return (new script_ed_annotate.core.t14708(owner__$1,data__$1,main_view__$1,meta14709));
});
}
return (new script_ed_annotate.core.t14708(owner,data,main_view,null));
});
script_ed_annotate.core.app_view = (function app_view(data,owner){if(typeof script_ed_annotate.core.t14745 !== 'undefined')
{} else
{
/**
* @constructor
*/
script_ed_annotate.core.t14745 = (function (owner,data,app_view,meta14746){
this.owner = owner;
this.data = data;
this.app_view = app_view;
this.meta14746 = meta14746;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
script_ed_annotate.core.t14745.cljs$lang$type = true;
script_ed_annotate.core.t14745.cljs$lang$ctorStr = "script-ed-annotate.core/t14745";
script_ed_annotate.core.t14745.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"script-ed-annotate.core/t14745");
});
script_ed_annotate.core.t14745.prototype.om$core$IRender$ = true;
script_ed_annotate.core.t14745.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,script_ed_annotate.core.navbar_view,self__.data),om.core.build.call(null,script_ed_annotate.core.sidebar_view,cljs.core.first.call(null,new cljs.core.Keyword(null,"resp","resp",1017401154).cljs$core$IFn$_invoke$arity$1(self__.data))),om.core.build.call(null,script_ed_annotate.core.main_view,self__.data));
});
script_ed_annotate.core.t14745.prototype.om$core$IWillMount$ = true;
script_ed_annotate.core.t14745.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__5564__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_14763){var state_val_14764 = (state_14763[1]);if((state_val_14764 === 7))
{var inst_14754 = (state_14763[2]);var inst_14755 = cljs.core.println.call(null,inst_14754);var state_14763__$1 = (function (){var statearr_14765 = state_14763;(statearr_14765[7] = inst_14755);
return statearr_14765;
})();var statearr_14766_14779 = state_14763__$1;(statearr_14766_14779[2] = null);
(statearr_14766_14779[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14764 === 6))
{var inst_14759 = (state_14763[2]);var state_14763__$1 = state_14763;var statearr_14767_14780 = state_14763__$1;(statearr_14767_14780[2] = inst_14759);
(statearr_14767_14780[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14764 === 5))
{var state_14763__$1 = state_14763;var statearr_14768_14781 = state_14763__$1;(statearr_14768_14781[2] = null);
(statearr_14768_14781[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14764 === 4))
{var inst_14750 = [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.Keyword(null,"controls-chan","controls-chan",2748326779)];var inst_14751 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_14750,null));var inst_14752 = om.core.get_shared.call(null,self__.owner,inst_14751);var state_14763__$1 = state_14763;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14763__$1,7,inst_14752);
} else
{if((state_val_14764 === 3))
{var inst_14761 = (state_14763[2]);var state_14763__$1 = state_14763;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14763__$1,inst_14761);
} else
{if((state_val_14764 === 2))
{var state_14763__$1 = state_14763;if(true)
{var statearr_14769_14782 = state_14763__$1;(statearr_14769_14782[1] = 4);
} else
{var statearr_14770_14783 = state_14763__$1;(statearr_14770_14783[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14764 === 1))
{var state_14763__$1 = state_14763;var statearr_14771_14784 = state_14763__$1;(statearr_14771_14784[2] = null);
(statearr_14771_14784[1] = 2);
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
var state_machine__5550__auto____0 = (function (){var statearr_14775 = [null,null,null,null,null,null,null,null];(statearr_14775[0] = state_machine__5550__auto__);
(statearr_14775[1] = 1);
return statearr_14775;
});
var state_machine__5550__auto____1 = (function (state_14763){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_14763);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e14776){if((e14776 instanceof Object))
{var ex__5553__auto__ = e14776;var statearr_14777_14785 = state_14763;(statearr_14777_14785[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14763);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14776;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14786 = state_14763;
state_14763 = G__14786;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_14763){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_14763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_14778 = f__5565__auto__.call(null);(statearr_14778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto__);
return statearr_14778;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return c__5564__auto__;
});
script_ed_annotate.core.t14745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14747){var self__ = this;
var _14747__$1 = this;return self__.meta14746;
});
script_ed_annotate.core.t14745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14747,meta14746__$1){var self__ = this;
var _14747__$1 = this;return (new script_ed_annotate.core.t14745(self__.owner,self__.data,self__.app_view,meta14746__$1));
});
script_ed_annotate.core.__GT_t14745 = (function __GT_t14745(owner__$1,data__$1,app_view__$1,meta14746){return (new script_ed_annotate.core.t14745(owner__$1,data__$1,app_view__$1,meta14746));
});
}
return (new script_ed_annotate.core.t14745(owner,data,app_view,null));
});
script_ed_annotate.core.init = (function init(state){var chans = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"api-chan","api-chan",1934651031),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"controls-chan","controls-chan",2748326779),cljs.core.async.chan.call(null)], null);return om.core.root.call(null,script_ed_annotate.core.app_view,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app"),new cljs.core.Keyword(null,"shared","shared",4405305303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chans","chans",1108527827),chans], null)], null));
});
var c__5564__auto___14814 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_14804){var state_val_14805 = (state_14804[1]);if((state_val_14805 === 2))
{var inst_14789 = (state_14804[2]);var inst_14790 = [new cljs.core.Keyword(null,"name","name",1017277949)];var inst_14791 = ["sojoban"];var inst_14792 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14790,inst_14791);var inst_14793 = [new cljs.core.Keyword(null,"files","files",1111338473)];var inst_14794 = [inst_14789];var inst_14795 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14793,inst_14794);var inst_14796 = cljs.core.merge.call(null,inst_14792,inst_14795);var inst_14797 = [inst_14796];var inst_14798 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_14797,null));var inst_14799 = cljs.core.assoc.call(null,script_ed_annotate.core.app_state,new cljs.core.Keyword(null,"resp","resp",1017401154),inst_14798);var inst_14800 = cljs.core.println.call(null,inst_14799);var inst_14801 = cljs.core.atom.call(null,inst_14799);var inst_14802 = script_ed_annotate.core.init.call(null,inst_14801);var state_14804__$1 = (function (){var statearr_14806 = state_14804;(statearr_14806[7] = inst_14800);
return statearr_14806;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14804__$1,inst_14802);
} else
{if((state_val_14805 === 1))
{var inst_14787 = script_ed_annotate.api.GET.call(null,"http://127.0.0.1:8080/user/will-sommers/repo/sojoban");var state_14804__$1 = state_14804;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14804__$1,2,inst_14787);
} else
{return null;
}
}
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_14810 = [null,null,null,null,null,null,null,null];(statearr_14810[0] = state_machine__5550__auto__);
(statearr_14810[1] = 1);
return statearr_14810;
});
var state_machine__5550__auto____1 = (function (state_14804){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_14804);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e14811){if((e14811 instanceof Object))
{var ex__5553__auto__ = e14811;var statearr_14812_14815 = state_14804;(statearr_14812_14815[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14804);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14811;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14816 = state_14804;
state_14804 = G__14816;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_14804){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_14804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_14813 = f__5565__auto__.call(null);(statearr_14813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___14814);
return statearr_14813;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));

//# sourceMappingURL=core.js.map