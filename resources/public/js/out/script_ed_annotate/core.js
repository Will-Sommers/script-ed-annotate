// Compiled by ClojureScript 0.0-2173
goog.provide('script_ed_annotate.core');
goog.require('cljs.core');
goog.require('script_ed_annotate.api');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
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
{return {"display": "inline-block"};
} else
{return {"display": "none"};
}
});
script_ed_annotate.core.select_file = (function select_file(control_chan,data){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(data);var code = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-contents","file-contents",2351712189),new cljs.core.Keyword(null,"body","body",1016933652)], null));return cljs.core.async.put_BANG_.call(null,control_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"code","code",1016963423),code,new cljs.core.Keyword(null,"action","action",3885920680),new cljs.core.Keyword(null,"select-file","select-file",1182765855)], null));
});
script_ed_annotate.core.sidebar_file_view = (function sidebar_file_view(data,owner){if(typeof script_ed_annotate.core.t21710 !== 'undefined')
{} else
{
/**
* @constructor
*/
script_ed_annotate.core.t21710 = (function (owner,data,sidebar_file_view,meta21711){
this.owner = owner;
this.data = data;
this.sidebar_file_view = sidebar_file_view;
this.meta21711 = meta21711;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
script_ed_annotate.core.t21710.cljs$lang$type = true;
script_ed_annotate.core.t21710.cljs$lang$ctorStr = "script-ed-annotate.core/t21710";
script_ed_annotate.core.t21710.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"script-ed-annotate.core/t21710");
});
script_ed_annotate.core.t21710.prototype.om$core$IRender$ = true;
script_ed_annotate.core.t21710.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"onClick": (function (){return script_ed_annotate.core.select_file.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.Keyword(null,"controls-chan","controls-chan",2748326779)], null)),self__.data);
})},new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(self__.data));
});
script_ed_annotate.core.t21710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21712){var self__ = this;
var _21712__$1 = this;return self__.meta21711;
});
script_ed_annotate.core.t21710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21712,meta21711__$1){var self__ = this;
var _21712__$1 = this;return (new script_ed_annotate.core.t21710(self__.owner,self__.data,self__.sidebar_file_view,meta21711__$1));
});
script_ed_annotate.core.__GT_t21710 = (function __GT_t21710(owner__$1,data__$1,sidebar_file_view__$1,meta21711){return (new script_ed_annotate.core.t21710(owner__$1,data__$1,sidebar_file_view__$1,meta21711));
});
}
return (new script_ed_annotate.core.t21710(owner,data,sidebar_file_view,null));
});
script_ed_annotate.core.navbar_view = (function navbar_view(data,owner){if(typeof script_ed_annotate.core.t21716 !== 'undefined')
{} else
{
/**
* @constructor
*/
script_ed_annotate.core.t21716 = (function (owner,data,navbar_view,meta21717){
this.owner = owner;
this.data = data;
this.navbar_view = navbar_view;
this.meta21717 = meta21717;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
script_ed_annotate.core.t21716.cljs$lang$type = true;
script_ed_annotate.core.t21716.cljs$lang$ctorStr = "script-ed-annotate.core/t21716";
script_ed_annotate.core.t21716.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"script-ed-annotate.core/t21716");
});
script_ed_annotate.core.t21716.prototype.om$core$IRender$ = true;
script_ed_annotate.core.t21716.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "navbar"},null);
});
script_ed_annotate.core.t21716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21718){var self__ = this;
var _21718__$1 = this;return self__.meta21717;
});
script_ed_annotate.core.t21716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21718,meta21717__$1){var self__ = this;
var _21718__$1 = this;return (new script_ed_annotate.core.t21716(self__.owner,self__.data,self__.navbar_view,meta21717__$1));
});
script_ed_annotate.core.__GT_t21716 = (function __GT_t21716(owner__$1,data__$1,navbar_view__$1,meta21717){return (new script_ed_annotate.core.t21716(owner__$1,data__$1,navbar_view__$1,meta21717));
});
}
return (new script_ed_annotate.core.t21716(owner,data,navbar_view,null));
});
script_ed_annotate.core.sidebar_view = (function sidebar_view(data,owner){if(typeof script_ed_annotate.core.t21722 !== 'undefined')
{} else
{
/**
* @constructor
*/
script_ed_annotate.core.t21722 = (function (owner,data,sidebar_view,meta21723){
this.owner = owner;
this.data = data;
this.sidebar_view = sidebar_view;
this.meta21723 = meta21723;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
script_ed_annotate.core.t21722.cljs$lang$type = true;
script_ed_annotate.core.t21722.cljs$lang$ctorStr = "script-ed-annotate.core/t21722";
script_ed_annotate.core.t21722.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"script-ed-annotate.core/t21722");
});
script_ed_annotate.core.t21722.prototype.om$core$IRender$ = true;
script_ed_annotate.core.t21722.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "sidebar-wrapper"},React.DOM.div({"className": "logo", "onClick": (function (){return script_ed_annotate.core.expand_sidebar.call(null,self__.data);
})},"Annotate"),React.DOM.div({"style": script_ed_annotate.core.expanded_QMARK_.call(null,self__.data), "className": "sidebar"},React.DOM.div(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,script_ed_annotate.core.sidebar_file_view,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(self__.data)))));
});
script_ed_annotate.core.t21722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21724){var self__ = this;
var _21724__$1 = this;return self__.meta21723;
});
script_ed_annotate.core.t21722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21724,meta21723__$1){var self__ = this;
var _21724__$1 = this;return (new script_ed_annotate.core.t21722(self__.owner,self__.data,self__.sidebar_view,meta21723__$1));
});
script_ed_annotate.core.__GT_t21722 = (function __GT_t21722(owner__$1,data__$1,sidebar_view__$1,meta21723){return (new script_ed_annotate.core.t21722(owner__$1,data__$1,sidebar_view__$1,meta21723));
});
}
return (new script_ed_annotate.core.t21722(owner,data,sidebar_view,null));
});
script_ed_annotate.core.mark_line = (function mark_line(data){return alert("test");
});
script_ed_annotate.core.file_line_view = (function file_line_view(data,owner){if(typeof script_ed_annotate.core.t21728 !== 'undefined')
{} else
{
/**
* @constructor
*/
script_ed_annotate.core.t21728 = (function (owner,data,file_line_view,meta21729){
this.owner = owner;
this.data = data;
this.file_line_view = file_line_view;
this.meta21729 = meta21729;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
script_ed_annotate.core.t21728.cljs$lang$type = true;
script_ed_annotate.core.t21728.cljs$lang$ctorStr = "script-ed-annotate.core/t21728";
script_ed_annotate.core.t21728.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"script-ed-annotate.core/t21728");
});
script_ed_annotate.core.t21728.prototype.om$core$IRender$ = true;
script_ed_annotate.core.t21728.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.println.call(null,self__.data);
return React.DOM.div({"style": (function (){return script_ed_annotate.core.selected_QMARK_.call(null);
}), "onClick": (function (){return script_ed_annotate.core.mark_line.call(null,self__.data);
})},self__.data);
});
script_ed_annotate.core.t21728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21730){var self__ = this;
var _21730__$1 = this;return self__.meta21729;
});
script_ed_annotate.core.t21728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21730,meta21729__$1){var self__ = this;
var _21730__$1 = this;return (new script_ed_annotate.core.t21728(self__.owner,self__.data,self__.file_line_view,meta21729__$1));
});
script_ed_annotate.core.__GT_t21728 = (function __GT_t21728(owner__$1,data__$1,file_line_view__$1,meta21729){return (new script_ed_annotate.core.t21728(owner__$1,data__$1,file_line_view__$1,meta21729));
});
}
return (new script_ed_annotate.core.t21728(owner,data,file_line_view,null));
});
script_ed_annotate.core.file_view = (function file_view(data,owner){if(typeof script_ed_annotate.core.t21734 !== 'undefined')
{} else
{
/**
* @constructor
*/
script_ed_annotate.core.t21734 = (function (owner,data,file_view,meta21735){
this.owner = owner;
this.data = data;
this.file_view = file_view;
this.meta21735 = meta21735;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
script_ed_annotate.core.t21734.cljs$lang$type = true;
script_ed_annotate.core.t21734.cljs$lang$ctorStr = "script-ed-annotate.core/t21734";
script_ed_annotate.core.t21734.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"script-ed-annotate.core/t21734");
});
script_ed_annotate.core.t21734.prototype.om$core$IRender$ = true;
script_ed_annotate.core.t21734.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-heading"},new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.apply.call(null,om.dom.div,{"className": "panel-body"},om.core.build_all.call(null,script_ed_annotate.core.file_line_view,clojure.string.split.call(null,new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(self__.data),"\n"))));
});
script_ed_annotate.core.t21734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21736){var self__ = this;
var _21736__$1 = this;return self__.meta21735;
});
script_ed_annotate.core.t21734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21736,meta21735__$1){var self__ = this;
var _21736__$1 = this;return (new script_ed_annotate.core.t21734(self__.owner,self__.data,self__.file_view,meta21735__$1));
});
script_ed_annotate.core.__GT_t21734 = (function __GT_t21734(owner__$1,data__$1,file_view__$1,meta21735){return (new script_ed_annotate.core.t21734(owner__$1,data__$1,file_view__$1,meta21735));
});
}
return (new script_ed_annotate.core.t21734(owner,data,file_view,null));
});
script_ed_annotate.core.main_view = (function main_view(data,owner){if(typeof script_ed_annotate.core.t21740 !== 'undefined')
{} else
{
/**
* @constructor
*/
script_ed_annotate.core.t21740 = (function (owner,data,main_view,meta21741){
this.owner = owner;
this.data = data;
this.main_view = main_view;
this.meta21741 = meta21741;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
script_ed_annotate.core.t21740.cljs$lang$type = true;
script_ed_annotate.core.t21740.cljs$lang$ctorStr = "script-ed-annotate.core/t21740";
script_ed_annotate.core.t21740.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"script-ed-annotate.core/t21740");
});
script_ed_annotate.core.t21740.prototype.om$core$IRender$ = true;
script_ed_annotate.core.t21740.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "row code"},cljs.core.apply.call(null,om.dom.div,{"className": "col-xs-12"},om.core.build_all.call(null,script_ed_annotate.core.file_view,self__.data)));
});
script_ed_annotate.core.t21740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21742){var self__ = this;
var _21742__$1 = this;return self__.meta21741;
});
script_ed_annotate.core.t21740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21742,meta21741__$1){var self__ = this;
var _21742__$1 = this;return (new script_ed_annotate.core.t21740(self__.owner,self__.data,self__.main_view,meta21741__$1));
});
script_ed_annotate.core.__GT_t21740 = (function __GT_t21740(owner__$1,data__$1,main_view__$1,meta21741){return (new script_ed_annotate.core.t21740(owner__$1,data__$1,main_view__$1,meta21741));
});
}
return (new script_ed_annotate.core.t21740(owner,data,main_view,null));
});
script_ed_annotate.core.app_view = (function app_view(data,owner){if(typeof script_ed_annotate.core.t21779 !== 'undefined')
{} else
{
/**
* @constructor
*/
script_ed_annotate.core.t21779 = (function (owner,data,app_view,meta21780){
this.owner = owner;
this.data = data;
this.app_view = app_view;
this.meta21780 = meta21780;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
script_ed_annotate.core.t21779.cljs$lang$type = true;
script_ed_annotate.core.t21779.cljs$lang$ctorStr = "script-ed-annotate.core/t21779";
script_ed_annotate.core.t21779.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"script-ed-annotate.core/t21779");
});
script_ed_annotate.core.t21779.prototype.om$core$IRender$ = true;
script_ed_annotate.core.t21779.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,script_ed_annotate.core.navbar_view,self__.data),React.DOM.div({"className": "container"},om.core.build.call(null,script_ed_annotate.core.sidebar_view,cljs.core.first.call(null,new cljs.core.Keyword(null,"resp","resp",1017401154).cljs$core$IFn$_invoke$arity$1(self__.data))),om.core.build.call(null,script_ed_annotate.core.main_view,new cljs.core.Keyword(null,"displayed-files","displayed-files",3921072637).cljs$core$IFn$_invoke$arity$1(self__.data))));
});
script_ed_annotate.core.t21779.prototype.om$core$IWillMount$ = true;
script_ed_annotate.core.t21779.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__5564__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_21798){var state_val_21799 = (state_21798[1]);if((state_val_21799 === 7))
{var inst_21788 = (state_21798[2]);var inst_21789 = (function (){var control = inst_21788;return ((function (control,inst_21788,state_val_21799){
return (function (p1__21743_SHARP_){return cljs.core.conj.call(null,p1__21743_SHARP_,control);
});
;})(control,inst_21788,state_val_21799))
})();var inst_21790 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"displayed-files","displayed-files",3921072637),inst_21789);var state_21798__$1 = (function (){var statearr_21800 = state_21798;(statearr_21800[7] = inst_21790);
return statearr_21800;
})();var statearr_21801_21814 = state_21798__$1;(statearr_21801_21814[2] = null);
(statearr_21801_21814[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21799 === 6))
{var inst_21794 = (state_21798[2]);var state_21798__$1 = state_21798;var statearr_21802_21815 = state_21798__$1;(statearr_21802_21815[2] = inst_21794);
(statearr_21802_21815[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21799 === 5))
{var state_21798__$1 = state_21798;var statearr_21803_21816 = state_21798__$1;(statearr_21803_21816[2] = null);
(statearr_21803_21816[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21799 === 4))
{var inst_21784 = [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.Keyword(null,"controls-chan","controls-chan",2748326779)];var inst_21785 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21784,null));var inst_21786 = om.core.get_shared.call(null,self__.owner,inst_21785);var state_21798__$1 = state_21798;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21798__$1,7,inst_21786);
} else
{if((state_val_21799 === 3))
{var inst_21796 = (state_21798[2]);var state_21798__$1 = state_21798;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21798__$1,inst_21796);
} else
{if((state_val_21799 === 2))
{var state_21798__$1 = state_21798;if(true)
{var statearr_21804_21817 = state_21798__$1;(statearr_21804_21817[1] = 4);
} else
{var statearr_21805_21818 = state_21798__$1;(statearr_21805_21818[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21799 === 1))
{var state_21798__$1 = state_21798;var statearr_21806_21819 = state_21798__$1;(statearr_21806_21819[2] = null);
(statearr_21806_21819[1] = 2);
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
var state_machine__5550__auto____0 = (function (){var statearr_21810 = [null,null,null,null,null,null,null,null];(statearr_21810[0] = state_machine__5550__auto__);
(statearr_21810[1] = 1);
return statearr_21810;
});
var state_machine__5550__auto____1 = (function (state_21798){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_21798);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e21811){if((e21811 instanceof Object))
{var ex__5553__auto__ = e21811;var statearr_21812_21820 = state_21798;(statearr_21812_21820[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21798);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21811;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21821 = state_21798;
state_21798 = G__21821;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_21798){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_21798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_21813 = f__5565__auto__.call(null);(statearr_21813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto__);
return statearr_21813;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return c__5564__auto__;
});
script_ed_annotate.core.t21779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21781){var self__ = this;
var _21781__$1 = this;return self__.meta21780;
});
script_ed_annotate.core.t21779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21781,meta21780__$1){var self__ = this;
var _21781__$1 = this;return (new script_ed_annotate.core.t21779(self__.owner,self__.data,self__.app_view,meta21780__$1));
});
script_ed_annotate.core.__GT_t21779 = (function __GT_t21779(owner__$1,data__$1,app_view__$1,meta21780){return (new script_ed_annotate.core.t21779(owner__$1,data__$1,app_view__$1,meta21780));
});
}
return (new script_ed_annotate.core.t21779(owner,data,app_view,null));
});
script_ed_annotate.core.init = (function init(state){var chans = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"api-chan","api-chan",1934651031),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"controls-chan","controls-chan",2748326779),cljs.core.async.chan.call(null)], null);return om.core.root.call(null,script_ed_annotate.core.app_view,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app"),new cljs.core.Keyword(null,"shared","shared",4405305303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chans","chans",1108527827),chans], null)], null));
});
var c__5564__auto___21847 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_21838){var state_val_21839 = (state_21838[1]);if((state_val_21839 === 2))
{var inst_21824 = (state_21838[2]);var inst_21825 = [new cljs.core.Keyword(null,"name","name",1017277949)];var inst_21826 = ["sojoban"];var inst_21827 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21825,inst_21826);var inst_21828 = [new cljs.core.Keyword(null,"files","files",1111338473)];var inst_21829 = [inst_21824];var inst_21830 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21828,inst_21829);var inst_21831 = cljs.core.merge.call(null,inst_21827,inst_21830);var inst_21832 = [inst_21831];var inst_21833 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21832,null));var inst_21834 = cljs.core.assoc.call(null,script_ed_annotate.core.app_state,new cljs.core.Keyword(null,"resp","resp",1017401154),inst_21833);var inst_21835 = cljs.core.atom.call(null,inst_21834);var inst_21836 = script_ed_annotate.core.init.call(null,inst_21835);var state_21838__$1 = state_21838;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21838__$1,inst_21836);
} else
{if((state_val_21839 === 1))
{var inst_21822 = script_ed_annotate.api.GET.call(null,"http://127.0.0.1:8080/user/will-sommers/repo/sojoban");var state_21838__$1 = state_21838;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21838__$1,2,inst_21822);
} else
{return null;
}
}
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_21843 = [null,null,null,null,null,null,null];(statearr_21843[0] = state_machine__5550__auto__);
(statearr_21843[1] = 1);
return statearr_21843;
});
var state_machine__5550__auto____1 = (function (state_21838){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_21838);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e21844){if((e21844 instanceof Object))
{var ex__5553__auto__ = e21844;var statearr_21845_21848 = state_21838;(statearr_21845_21848[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21838);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21844;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21849 = state_21838;
state_21838 = G__21849;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_21838){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_21838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_21846 = f__5565__auto__.call(null);(statearr_21846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___21847);
return statearr_21846;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));

//# sourceMappingURL=core.js.map