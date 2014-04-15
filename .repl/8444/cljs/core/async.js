// Compiled by ClojureScript 0.0-2156
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11815 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11815 = (function (f,fn_handler,meta11816){
this.f = f;
this.fn_handler = fn_handler;
this.meta11816 = meta11816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11815.cljs$lang$type = true;
cljs.core.async.t11815.cljs$lang$ctorStr = "cljs.core.async/t11815";
cljs.core.async.t11815.cljs$lang$ctorPrWriter = (function (this__6203__auto__,writer__6204__auto__,opt__6205__auto__){return cljs.core._write.call(null,writer__6204__auto__,"cljs.core.async/t11815");
});
cljs.core.async.t11815.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11815.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11815.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11817){var self__ = this;
var _11817__$1 = this;return self__.meta11816;
});
cljs.core.async.t11815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11817,meta11816__$1){var self__ = this;
var _11817__$1 = this;return (new cljs.core.async.t11815(self__.f,self__.fn_handler,meta11816__$1));
});
cljs.core.async.__GT_t11815 = (function __GT_t11815(f__$1,fn_handler__$1,meta11816){return (new cljs.core.async.t11815(f__$1,fn_handler__$1,meta11816));
});
}
return (new cljs.core.async.t11815(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11819 = buff;if(G__11819)
{var bit__6286__auto__ = null;if(cljs.core.truth_((function (){var or__5636__auto__ = bit__6286__auto__;if(cljs.core.truth_(or__5636__auto__))
{return or__5636__auto__;
} else
{return G__11819.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11819.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11819);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11819);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11820 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11820);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11820);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__5624__auto__ = ret;if(cljs.core.truth_(and__5624__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__5624__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__6484__auto___11821 = n;var x_11822 = 0;while(true){
if((x_11822 < n__6484__auto___11821))
{(a[x_11822] = 0);
{
var G__11823 = (x_11822 + 1);
x_11822 = G__11823;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11824 = (i + 1);
i = G__11824;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11828 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11828 = (function (flag,alt_flag,meta11829){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11829 = meta11829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11828.cljs$lang$type = true;
cljs.core.async.t11828.cljs$lang$ctorStr = "cljs.core.async/t11828";
cljs.core.async.t11828.cljs$lang$ctorPrWriter = (function (this__6203__auto__,writer__6204__auto__,opt__6205__auto__){return cljs.core._write.call(null,writer__6204__auto__,"cljs.core.async/t11828");
});
cljs.core.async.t11828.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11828.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11828.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11830){var self__ = this;
var _11830__$1 = this;return self__.meta11829;
});
cljs.core.async.t11828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11830,meta11829__$1){var self__ = this;
var _11830__$1 = this;return (new cljs.core.async.t11828(self__.flag,self__.alt_flag,meta11829__$1));
});
cljs.core.async.__GT_t11828 = (function __GT_t11828(flag__$1,alt_flag__$1,meta11829){return (new cljs.core.async.t11828(flag__$1,alt_flag__$1,meta11829));
});
}
return (new cljs.core.async.t11828(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11834 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11834 = (function (cb,flag,alt_handler,meta11835){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11835 = meta11835;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11834.cljs$lang$type = true;
cljs.core.async.t11834.cljs$lang$ctorStr = "cljs.core.async/t11834";
cljs.core.async.t11834.cljs$lang$ctorPrWriter = (function (this__6203__auto__,writer__6204__auto__,opt__6205__auto__){return cljs.core._write.call(null,writer__6204__auto__,"cljs.core.async/t11834");
});
cljs.core.async.t11834.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11834.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11834.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11836){var self__ = this;
var _11836__$1 = this;return self__.meta11835;
});
cljs.core.async.t11834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11836,meta11835__$1){var self__ = this;
var _11836__$1 = this;return (new cljs.core.async.t11834(self__.cb,self__.flag,self__.alt_handler,meta11835__$1));
});
cljs.core.async.__GT_t11834 = (function __GT_t11834(cb__$1,flag__$1,alt_handler__$1,meta11835){return (new cljs.core.async.t11834(cb__$1,flag__$1,alt_handler__$1,meta11835));
});
}
return (new cljs.core.async.t11834(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11837_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11837_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5636__auto__ = wport;if(cljs.core.truth_(or__5636__auto__))
{return or__5636__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11838 = (i + 1);
i = G__11838;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__5636__auto__ = ret;if(cljs.core.truth_(or__5636__auto__))
{return or__5636__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__5624__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__5624__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__5624__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11839){var map__11841 = p__11839;var map__11841__$1 = ((cljs.core.seq_QMARK_.call(null,map__11841))?cljs.core.apply.call(null,cljs.core.hash_map,map__11841):map__11841);var opts = map__11841__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11839 = null;if (arguments.length > 1) {
  p__11839 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11839);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11842){
var ports = cljs.core.first(arglist__11842);
var p__11839 = cljs.core.rest(arglist__11842);
return alts_BANG___delegate(ports,p__11839);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11850 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11850 = (function (ch,f,map_LT_,meta11851){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11851 = meta11851;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11850.cljs$lang$type = true;
cljs.core.async.t11850.cljs$lang$ctorStr = "cljs.core.async/t11850";
cljs.core.async.t11850.cljs$lang$ctorPrWriter = (function (this__6203__auto__,writer__6204__auto__,opt__6205__auto__){return cljs.core._write.call(null,writer__6204__auto__,"cljs.core.async/t11850");
});
cljs.core.async.t11850.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11850.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11850.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11850.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11853 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11853 = (function (fn1,_,meta11851,ch,f,map_LT_,meta11854){
this.fn1 = fn1;
this._ = _;
this.meta11851 = meta11851;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11854 = meta11854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11853.cljs$lang$type = true;
cljs.core.async.t11853.cljs$lang$ctorStr = "cljs.core.async/t11853";
cljs.core.async.t11853.cljs$lang$ctorPrWriter = (function (this__6203__auto__,writer__6204__auto__,opt__6205__auto__){return cljs.core._write.call(null,writer__6204__auto__,"cljs.core.async/t11853");
});
cljs.core.async.t11853.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11853.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11853.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11853.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11843_SHARP_){return f1.call(null,(((p1__11843_SHARP_ == null))?null:self__.f.call(null,p1__11843_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11855){var self__ = this;
var _11855__$1 = this;return self__.meta11854;
});
cljs.core.async.t11853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11855,meta11854__$1){var self__ = this;
var _11855__$1 = this;return (new cljs.core.async.t11853(self__.fn1,self__._,self__.meta11851,self__.ch,self__.f,self__.map_LT_,meta11854__$1));
});
cljs.core.async.__GT_t11853 = (function __GT_t11853(fn1__$1,___$2,meta11851__$1,ch__$2,f__$2,map_LT___$2,meta11854){return (new cljs.core.async.t11853(fn1__$1,___$2,meta11851__$1,ch__$2,f__$2,map_LT___$2,meta11854));
});
}
return (new cljs.core.async.t11853(fn1,___$1,self__.meta11851,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__5624__auto__ = ret;if(cljs.core.truth_(and__5624__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__5624__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11850.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11850.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11852){var self__ = this;
var _11852__$1 = this;return self__.meta11851;
});
cljs.core.async.t11850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11852,meta11851__$1){var self__ = this;
var _11852__$1 = this;return (new cljs.core.async.t11850(self__.ch,self__.f,self__.map_LT_,meta11851__$1));
});
cljs.core.async.__GT_t11850 = (function __GT_t11850(ch__$1,f__$1,map_LT___$1,meta11851){return (new cljs.core.async.t11850(ch__$1,f__$1,map_LT___$1,meta11851));
});
}
return (new cljs.core.async.t11850(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11859 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11859 = (function (ch,f,map_GT_,meta11860){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11860 = meta11860;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11859.cljs$lang$type = true;
cljs.core.async.t11859.cljs$lang$ctorStr = "cljs.core.async/t11859";
cljs.core.async.t11859.cljs$lang$ctorPrWriter = (function (this__6203__auto__,writer__6204__auto__,opt__6205__auto__){return cljs.core._write.call(null,writer__6204__auto__,"cljs.core.async/t11859");
});
cljs.core.async.t11859.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11859.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11859.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11859.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11859.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11859.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11861){var self__ = this;
var _11861__$1 = this;return self__.meta11860;
});
cljs.core.async.t11859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11861,meta11860__$1){var self__ = this;
var _11861__$1 = this;return (new cljs.core.async.t11859(self__.ch,self__.f,self__.map_GT_,meta11860__$1));
});
cljs.core.async.__GT_t11859 = (function __GT_t11859(ch__$1,f__$1,map_GT___$1,meta11860){return (new cljs.core.async.t11859(ch__$1,f__$1,map_GT___$1,meta11860));
});
}
return (new cljs.core.async.t11859(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11865 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11865 = (function (ch,p,filter_GT_,meta11866){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11866 = meta11866;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11865.cljs$lang$type = true;
cljs.core.async.t11865.cljs$lang$ctorStr = "cljs.core.async/t11865";
cljs.core.async.t11865.cljs$lang$ctorPrWriter = (function (this__6203__auto__,writer__6204__auto__,opt__6205__auto__){return cljs.core._write.call(null,writer__6204__auto__,"cljs.core.async/t11865");
});
cljs.core.async.t11865.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11865.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11865.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11865.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11865.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11865.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11867){var self__ = this;
var _11867__$1 = this;return self__.meta11866;
});
cljs.core.async.t11865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11867,meta11866__$1){var self__ = this;
var _11867__$1 = this;return (new cljs.core.async.t11865(self__.ch,self__.p,self__.filter_GT_,meta11866__$1));
});
cljs.core.async.__GT_t11865 = (function __GT_t11865(ch__$1,p__$1,filter_GT___$1,meta11866){return (new cljs.core.async.t11865(ch__$1,p__$1,filter_GT___$1,meta11866));
});
}
return (new cljs.core.async.t11865(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8530__auto___11950 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8531__auto__ = (function (){var switch__8445__auto__ = (function (state_11929){var state_val_11930 = (state_11929[1]);if((state_val_11930 === 7))
{var inst_11925 = (state_11929[2]);var state_11929__$1 = state_11929;var statearr_11931_11951 = state_11929__$1;(statearr_11931_11951[2] = inst_11925);
(statearr_11931_11951[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11930 === 1))
{var state_11929__$1 = state_11929;var statearr_11932_11952 = state_11929__$1;(statearr_11932_11952[2] = null);
(statearr_11932_11952[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11930 === 4))
{var inst_11911 = (state_11929[7]);var inst_11911__$1 = (state_11929[2]);var inst_11912 = (inst_11911__$1 == null);var state_11929__$1 = (function (){var statearr_11933 = state_11929;(statearr_11933[7] = inst_11911__$1);
return statearr_11933;
})();if(cljs.core.truth_(inst_11912))
{var statearr_11934_11953 = state_11929__$1;(statearr_11934_11953[1] = 5);
} else
{var statearr_11935_11954 = state_11929__$1;(statearr_11935_11954[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11930 === 6))
{var inst_11911 = (state_11929[7]);var inst_11916 = p.call(null,inst_11911);var state_11929__$1 = state_11929;if(cljs.core.truth_(inst_11916))
{var statearr_11936_11955 = state_11929__$1;(statearr_11936_11955[1] = 8);
} else
{var statearr_11937_11956 = state_11929__$1;(statearr_11937_11956[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11930 === 3))
{var inst_11927 = (state_11929[2]);var state_11929__$1 = state_11929;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11929__$1,inst_11927);
} else
{if((state_val_11930 === 2))
{var state_11929__$1 = state_11929;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11929__$1,4,ch);
} else
{if((state_val_11930 === 11))
{var inst_11919 = (state_11929[2]);var state_11929__$1 = state_11929;var statearr_11938_11957 = state_11929__$1;(statearr_11938_11957[2] = inst_11919);
(statearr_11938_11957[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11930 === 9))
{var state_11929__$1 = state_11929;var statearr_11939_11958 = state_11929__$1;(statearr_11939_11958[2] = null);
(statearr_11939_11958[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11930 === 5))
{var inst_11914 = cljs.core.async.close_BANG_.call(null,out);var state_11929__$1 = state_11929;var statearr_11940_11959 = state_11929__$1;(statearr_11940_11959[2] = inst_11914);
(statearr_11940_11959[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11930 === 10))
{var inst_11922 = (state_11929[2]);var state_11929__$1 = (function (){var statearr_11941 = state_11929;(statearr_11941[8] = inst_11922);
return statearr_11941;
})();var statearr_11942_11960 = state_11929__$1;(statearr_11942_11960[2] = null);
(statearr_11942_11960[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11930 === 8))
{var inst_11911 = (state_11929[7]);var state_11929__$1 = state_11929;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11929__$1,11,out,inst_11911);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8445__auto__){
return (function() {
var state_machine__8446__auto__ = null;
var state_machine__8446__auto____0 = (function (){var statearr_11946 = [null,null,null,null,null,null,null,null,null];(statearr_11946[0] = state_machine__8446__auto__);
(statearr_11946[1] = 1);
return statearr_11946;
});
var state_machine__8446__auto____1 = (function (state_11929){while(true){
var ret_value__8447__auto__ = (function (){try{while(true){
var result__8448__auto__ = switch__8445__auto__.call(null,state_11929);if(cljs.core.keyword_identical_QMARK_.call(null,result__8448__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8448__auto__;
}
break;
}
}catch (e11947){if((e11947 instanceof Object))
{var ex__8449__auto__ = e11947;var statearr_11948_11961 = state_11929;(statearr_11948_11961[5] = ex__8449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11929);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11947;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8447__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11962 = state_11929;
state_11929 = G__11962;
continue;
}
} else
{return ret_value__8447__auto__;
}
break;
}
});
state_machine__8446__auto__ = function(state_11929){
switch(arguments.length){
case 0:
return state_machine__8446__auto____0.call(this);
case 1:
return state_machine__8446__auto____1.call(this,state_11929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8446__auto____0;
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8446__auto____1;
return state_machine__8446__auto__;
})()
;})(switch__8445__auto__))
})();var state__8532__auto__ = (function (){var statearr_11949 = f__8531__auto__.call(null);(statearr_11949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8530__auto___11950);
return statearr_11949;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8532__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8530__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8531__auto__ = (function (){var switch__8445__auto__ = (function (state_12114){var state_val_12115 = (state_12114[1]);if((state_val_12115 === 7))
{var inst_12110 = (state_12114[2]);var state_12114__$1 = state_12114;var statearr_12116_12153 = state_12114__$1;(statearr_12116_12153[2] = inst_12110);
(statearr_12116_12153[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12115 === 20))
{var inst_12085 = (state_12114[7]);var inst_12096 = (state_12114[2]);var inst_12097 = cljs.core.next.call(null,inst_12085);var inst_12071 = inst_12097;var inst_12072 = null;var inst_12073 = 0;var inst_12074 = 0;var state_12114__$1 = (function (){var statearr_12117 = state_12114;(statearr_12117[8] = inst_12096);
(statearr_12117[9] = inst_12073);
(statearr_12117[10] = inst_12074);
(statearr_12117[11] = inst_12071);
(statearr_12117[12] = inst_12072);
return statearr_12117;
})();var statearr_12118_12154 = state_12114__$1;(statearr_12118_12154[2] = null);
(statearr_12118_12154[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12115 === 1))
{var state_12114__$1 = state_12114;var statearr_12119_12155 = state_12114__$1;(statearr_12119_12155[2] = null);
(statearr_12119_12155[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12115 === 4))
{var inst_12060 = (state_12114[13]);var inst_12060__$1 = (state_12114[2]);var inst_12061 = (inst_12060__$1 == null);var state_12114__$1 = (function (){var statearr_12123 = state_12114;(statearr_12123[13] = inst_12060__$1);
return statearr_12123;
})();if(cljs.core.truth_(inst_12061))
{var statearr_12124_12156 = state_12114__$1;(statearr_12124_12156[1] = 5);
} else
{var statearr_12125_12157 = state_12114__$1;(statearr_12125_12157[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12115 === 15))
{var state_12114__$1 = state_12114;var statearr_12126_12158 = state_12114__$1;(statearr_12126_12158[2] = null);
(statearr_12126_12158[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12115 === 13))
{var inst_12073 = (state_12114[9]);var inst_12074 = (state_12114[10]);var inst_12071 = (state_12114[11]);var inst_12072 = (state_12114[12]);var inst_12081 = (state_12114[2]);var inst_12082 = (inst_12074 + 1);var tmp12120 = inst_12073;var tmp12121 = inst_12071;var tmp12122 = inst_12072;var inst_12071__$1 = tmp12121;var inst_12072__$1 = tmp12122;var inst_12073__$1 = tmp12120;var inst_12074__$1 = inst_12082;var state_12114__$1 = (function (){var statearr_12127 = state_12114;(statearr_12127[14] = inst_12081);
(statearr_12127[9] = inst_12073__$1);
(statearr_12127[10] = inst_12074__$1);
(statearr_12127[11] = inst_12071__$1);
(statearr_12127[12] = inst_12072__$1);
return statearr_12127;
})();var statearr_12128_12159 = state_12114__$1;(statearr_12128_12159[2] = null);
(statearr_12128_12159[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12115 === 6))
{var inst_12060 = (state_12114[13]);var inst_12065 = f.call(null,inst_12060);var inst_12070 = cljs.core.seq.call(null,inst_12065);var inst_12071 = inst_12070;var inst_12072 = null;var inst_12073 = 0;var inst_12074 = 0;var state_12114__$1 = (function (){var statearr_12129 = state_12114;(statearr_12129[9] = inst_12073);
(statearr_12129[10] = inst_12074);
(statearr_12129[11] = inst_12071);
(statearr_12129[12] = inst_12072);
return statearr_12129;
})();var statearr_12130_12160 = state_12114__$1;(statearr_12130_12160[2] = null);
(statearr_12130_12160[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12115 === 17))
{var inst_12085 = (state_12114[7]);var inst_12089 = cljs.core.chunk_first.call(null,inst_12085);var inst_12090 = cljs.core.chunk_rest.call(null,inst_12085);var inst_12091 = cljs.core.count.call(null,inst_12089);var inst_12071 = inst_12090;var inst_12072 = inst_12089;var inst_12073 = inst_12091;var inst_12074 = 0;var state_12114__$1 = (function (){var statearr_12131 = state_12114;(statearr_12131[9] = inst_12073);
(statearr_12131[10] = inst_12074);
(statearr_12131[11] = inst_12071);
(statearr_12131[12] = inst_12072);
return statearr_12131;
})();var statearr_12132_12161 = state_12114__$1;(statearr_12132_12161[2] = null);
(statearr_12132_12161[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12115 === 3))
{var inst_12112 = (state_12114[2]);var state_12114__$1 = state_12114;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12114__$1,inst_12112);
} else
{if((state_val_12115 === 12))
{var inst_12105 = (state_12114[2]);var state_12114__$1 = state_12114;var statearr_12133_12162 = state_12114__$1;(statearr_12133_12162[2] = inst_12105);
(statearr_12133_12162[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12115 === 2))
{var state_12114__$1 = state_12114;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12114__$1,4,in$);
} else
{if((state_val_12115 === 19))
{var inst_12100 = (state_12114[2]);var state_12114__$1 = state_12114;var statearr_12134_12163 = state_12114__$1;(statearr_12134_12163[2] = inst_12100);
(statearr_12134_12163[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12115 === 11))
{var inst_12071 = (state_12114[11]);var inst_12085 = (state_12114[7]);var inst_12085__$1 = cljs.core.seq.call(null,inst_12071);var state_12114__$1 = (function (){var statearr_12135 = state_12114;(statearr_12135[7] = inst_12085__$1);
return statearr_12135;
})();if(inst_12085__$1)
{var statearr_12136_12164 = state_12114__$1;(statearr_12136_12164[1] = 14);
} else
{var statearr_12137_12165 = state_12114__$1;(statearr_12137_12165[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12115 === 9))
{var inst_12107 = (state_12114[2]);var state_12114__$1 = (function (){var statearr_12138 = state_12114;(statearr_12138[15] = inst_12107);
return statearr_12138;
})();var statearr_12139_12166 = state_12114__$1;(statearr_12139_12166[2] = null);
(statearr_12139_12166[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12115 === 5))
{var inst_12063 = cljs.core.async.close_BANG_.call(null,out);var state_12114__$1 = state_12114;var statearr_12140_12167 = state_12114__$1;(statearr_12140_12167[2] = inst_12063);
(statearr_12140_12167[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12115 === 14))
{var inst_12085 = (state_12114[7]);var inst_12087 = cljs.core.chunked_seq_QMARK_.call(null,inst_12085);var state_12114__$1 = state_12114;if(inst_12087)
{var statearr_12141_12168 = state_12114__$1;(statearr_12141_12168[1] = 17);
} else
{var statearr_12142_12169 = state_12114__$1;(statearr_12142_12169[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12115 === 16))
{var inst_12103 = (state_12114[2]);var state_12114__$1 = state_12114;var statearr_12143_12170 = state_12114__$1;(statearr_12143_12170[2] = inst_12103);
(statearr_12143_12170[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12115 === 10))
{var inst_12074 = (state_12114[10]);var inst_12072 = (state_12114[12]);var inst_12079 = cljs.core._nth.call(null,inst_12072,inst_12074);var state_12114__$1 = state_12114;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12114__$1,13,out,inst_12079);
} else
{if((state_val_12115 === 18))
{var inst_12085 = (state_12114[7]);var inst_12094 = cljs.core.first.call(null,inst_12085);var state_12114__$1 = state_12114;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12114__$1,20,out,inst_12094);
} else
{if((state_val_12115 === 8))
{var inst_12073 = (state_12114[9]);var inst_12074 = (state_12114[10]);var inst_12076 = (inst_12074 < inst_12073);var inst_12077 = inst_12076;var state_12114__$1 = state_12114;if(cljs.core.truth_(inst_12077))
{var statearr_12144_12171 = state_12114__$1;(statearr_12144_12171[1] = 10);
} else
{var statearr_12145_12172 = state_12114__$1;(statearr_12145_12172[1] = 11);
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8445__auto__){
return (function() {
var state_machine__8446__auto__ = null;
var state_machine__8446__auto____0 = (function (){var statearr_12149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12149[0] = state_machine__8446__auto__);
(statearr_12149[1] = 1);
return statearr_12149;
});
var state_machine__8446__auto____1 = (function (state_12114){while(true){
var ret_value__8447__auto__ = (function (){try{while(true){
var result__8448__auto__ = switch__8445__auto__.call(null,state_12114);if(cljs.core.keyword_identical_QMARK_.call(null,result__8448__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8448__auto__;
}
break;
}
}catch (e12150){if((e12150 instanceof Object))
{var ex__8449__auto__ = e12150;var statearr_12151_12173 = state_12114;(statearr_12151_12173[5] = ex__8449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12114);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12150;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8447__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12174 = state_12114;
state_12114 = G__12174;
continue;
}
} else
{return ret_value__8447__auto__;
}
break;
}
});
state_machine__8446__auto__ = function(state_12114){
switch(arguments.length){
case 0:
return state_machine__8446__auto____0.call(this);
case 1:
return state_machine__8446__auto____1.call(this,state_12114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8446__auto____0;
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8446__auto____1;
return state_machine__8446__auto__;
})()
;})(switch__8445__auto__))
})();var state__8532__auto__ = (function (){var statearr_12152 = f__8531__auto__.call(null);(statearr_12152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8530__auto__);
return statearr_12152;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8532__auto__);
}));
return c__8530__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__8530__auto___12255 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8531__auto__ = (function (){var switch__8445__auto__ = (function (state_12234){var state_val_12235 = (state_12234[1]);if((state_val_12235 === 7))
{var inst_12230 = (state_12234[2]);var state_12234__$1 = state_12234;var statearr_12236_12256 = state_12234__$1;(statearr_12236_12256[2] = inst_12230);
(statearr_12236_12256[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12235 === 1))
{var state_12234__$1 = state_12234;var statearr_12237_12257 = state_12234__$1;(statearr_12237_12257[2] = null);
(statearr_12237_12257[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12235 === 4))
{var inst_12217 = (state_12234[7]);var inst_12217__$1 = (state_12234[2]);var inst_12218 = (inst_12217__$1 == null);var state_12234__$1 = (function (){var statearr_12238 = state_12234;(statearr_12238[7] = inst_12217__$1);
return statearr_12238;
})();if(cljs.core.truth_(inst_12218))
{var statearr_12239_12258 = state_12234__$1;(statearr_12239_12258[1] = 5);
} else
{var statearr_12240_12259 = state_12234__$1;(statearr_12240_12259[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12235 === 6))
{var inst_12217 = (state_12234[7]);var state_12234__$1 = state_12234;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12234__$1,11,to,inst_12217);
} else
{if((state_val_12235 === 3))
{var inst_12232 = (state_12234[2]);var state_12234__$1 = state_12234;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12234__$1,inst_12232);
} else
{if((state_val_12235 === 2))
{var state_12234__$1 = state_12234;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12234__$1,4,from);
} else
{if((state_val_12235 === 11))
{var inst_12227 = (state_12234[2]);var state_12234__$1 = (function (){var statearr_12241 = state_12234;(statearr_12241[8] = inst_12227);
return statearr_12241;
})();var statearr_12242_12260 = state_12234__$1;(statearr_12242_12260[2] = null);
(statearr_12242_12260[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12235 === 9))
{var state_12234__$1 = state_12234;var statearr_12243_12261 = state_12234__$1;(statearr_12243_12261[2] = null);
(statearr_12243_12261[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12235 === 5))
{var state_12234__$1 = state_12234;if(cljs.core.truth_(close_QMARK_))
{var statearr_12244_12262 = state_12234__$1;(statearr_12244_12262[1] = 8);
} else
{var statearr_12245_12263 = state_12234__$1;(statearr_12245_12263[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12235 === 10))
{var inst_12224 = (state_12234[2]);var state_12234__$1 = state_12234;var statearr_12246_12264 = state_12234__$1;(statearr_12246_12264[2] = inst_12224);
(statearr_12246_12264[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12235 === 8))
{var inst_12221 = cljs.core.async.close_BANG_.call(null,to);var state_12234__$1 = state_12234;var statearr_12247_12265 = state_12234__$1;(statearr_12247_12265[2] = inst_12221);
(statearr_12247_12265[1] = 10);
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
}
}
}
}
});return ((function (switch__8445__auto__){
return (function() {
var state_machine__8446__auto__ = null;
var state_machine__8446__auto____0 = (function (){var statearr_12251 = [null,null,null,null,null,null,null,null,null];(statearr_12251[0] = state_machine__8446__auto__);
(statearr_12251[1] = 1);
return statearr_12251;
});
var state_machine__8446__auto____1 = (function (state_12234){while(true){
var ret_value__8447__auto__ = (function (){try{while(true){
var result__8448__auto__ = switch__8445__auto__.call(null,state_12234);if(cljs.core.keyword_identical_QMARK_.call(null,result__8448__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8448__auto__;
}
break;
}
}catch (e12252){if((e12252 instanceof Object))
{var ex__8449__auto__ = e12252;var statearr_12253_12266 = state_12234;(statearr_12253_12266[5] = ex__8449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12234);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12252;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8447__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12267 = state_12234;
state_12234 = G__12267;
continue;
}
} else
{return ret_value__8447__auto__;
}
break;
}
});
state_machine__8446__auto__ = function(state_12234){
switch(arguments.length){
case 0:
return state_machine__8446__auto____0.call(this);
case 1:
return state_machine__8446__auto____1.call(this,state_12234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8446__auto____0;
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8446__auto____1;
return state_machine__8446__auto__;
})()
;})(switch__8445__auto__))
})();var state__8532__auto__ = (function (){var statearr_12254 = f__8531__auto__.call(null);(statearr_12254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8530__auto___12255);
return statearr_12254;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8532__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8530__auto___12354 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8531__auto__ = (function (){var switch__8445__auto__ = (function (state_12332){var state_val_12333 = (state_12332[1]);if((state_val_12333 === 7))
{var inst_12328 = (state_12332[2]);var state_12332__$1 = state_12332;var statearr_12334_12355 = state_12332__$1;(statearr_12334_12355[2] = inst_12328);
(statearr_12334_12355[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12333 === 1))
{var state_12332__$1 = state_12332;var statearr_12335_12356 = state_12332__$1;(statearr_12335_12356[2] = null);
(statearr_12335_12356[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12333 === 4))
{var inst_12313 = (state_12332[7]);var inst_12313__$1 = (state_12332[2]);var inst_12314 = (inst_12313__$1 == null);var state_12332__$1 = (function (){var statearr_12336 = state_12332;(statearr_12336[7] = inst_12313__$1);
return statearr_12336;
})();if(cljs.core.truth_(inst_12314))
{var statearr_12337_12357 = state_12332__$1;(statearr_12337_12357[1] = 5);
} else
{var statearr_12338_12358 = state_12332__$1;(statearr_12338_12358[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12333 === 6))
{var inst_12313 = (state_12332[7]);var inst_12319 = p.call(null,inst_12313);var state_12332__$1 = state_12332;if(cljs.core.truth_(inst_12319))
{var statearr_12339_12359 = state_12332__$1;(statearr_12339_12359[1] = 9);
} else
{var statearr_12340_12360 = state_12332__$1;(statearr_12340_12360[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12333 === 3))
{var inst_12330 = (state_12332[2]);var state_12332__$1 = state_12332;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12332__$1,inst_12330);
} else
{if((state_val_12333 === 2))
{var state_12332__$1 = state_12332;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12332__$1,4,ch);
} else
{if((state_val_12333 === 11))
{var inst_12313 = (state_12332[7]);var inst_12323 = (state_12332[2]);var state_12332__$1 = state_12332;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12332__$1,8,inst_12323,inst_12313);
} else
{if((state_val_12333 === 9))
{var state_12332__$1 = state_12332;var statearr_12341_12361 = state_12332__$1;(statearr_12341_12361[2] = tc);
(statearr_12341_12361[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12333 === 5))
{var inst_12316 = cljs.core.async.close_BANG_.call(null,tc);var inst_12317 = cljs.core.async.close_BANG_.call(null,fc);var state_12332__$1 = (function (){var statearr_12342 = state_12332;(statearr_12342[8] = inst_12316);
return statearr_12342;
})();var statearr_12343_12362 = state_12332__$1;(statearr_12343_12362[2] = inst_12317);
(statearr_12343_12362[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12333 === 10))
{var state_12332__$1 = state_12332;var statearr_12344_12363 = state_12332__$1;(statearr_12344_12363[2] = fc);
(statearr_12344_12363[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12333 === 8))
{var inst_12325 = (state_12332[2]);var state_12332__$1 = (function (){var statearr_12345 = state_12332;(statearr_12345[9] = inst_12325);
return statearr_12345;
})();var statearr_12346_12364 = state_12332__$1;(statearr_12346_12364[2] = null);
(statearr_12346_12364[1] = 2);
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
}
}
}
}
});return ((function (switch__8445__auto__){
return (function() {
var state_machine__8446__auto__ = null;
var state_machine__8446__auto____0 = (function (){var statearr_12350 = [null,null,null,null,null,null,null,null,null,null];(statearr_12350[0] = state_machine__8446__auto__);
(statearr_12350[1] = 1);
return statearr_12350;
});
var state_machine__8446__auto____1 = (function (state_12332){while(true){
var ret_value__8447__auto__ = (function (){try{while(true){
var result__8448__auto__ = switch__8445__auto__.call(null,state_12332);if(cljs.core.keyword_identical_QMARK_.call(null,result__8448__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8448__auto__;
}
break;
}
}catch (e12351){if((e12351 instanceof Object))
{var ex__8449__auto__ = e12351;var statearr_12352_12365 = state_12332;(statearr_12352_12365[5] = ex__8449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12332);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12351;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8447__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12366 = state_12332;
state_12332 = G__12366;
continue;
}
} else
{return ret_value__8447__auto__;
}
break;
}
});
state_machine__8446__auto__ = function(state_12332){
switch(arguments.length){
case 0:
return state_machine__8446__auto____0.call(this);
case 1:
return state_machine__8446__auto____1.call(this,state_12332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8446__auto____0;
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8446__auto____1;
return state_machine__8446__auto__;
})()
;})(switch__8445__auto__))
})();var state__8532__auto__ = (function (){var statearr_12353 = f__8531__auto__.call(null);(statearr_12353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8530__auto___12354);
return statearr_12353;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8532__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8530__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8531__auto__ = (function (){var switch__8445__auto__ = (function (state_12413){var state_val_12414 = (state_12413[1]);if((state_val_12414 === 7))
{var inst_12409 = (state_12413[2]);var state_12413__$1 = state_12413;var statearr_12415_12431 = state_12413__$1;(statearr_12415_12431[2] = inst_12409);
(statearr_12415_12431[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12414 === 6))
{var inst_12399 = (state_12413[7]);var inst_12402 = (state_12413[8]);var inst_12406 = f.call(null,inst_12399,inst_12402);var inst_12399__$1 = inst_12406;var state_12413__$1 = (function (){var statearr_12416 = state_12413;(statearr_12416[7] = inst_12399__$1);
return statearr_12416;
})();var statearr_12417_12432 = state_12413__$1;(statearr_12417_12432[2] = null);
(statearr_12417_12432[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12414 === 5))
{var inst_12399 = (state_12413[7]);var state_12413__$1 = state_12413;var statearr_12418_12433 = state_12413__$1;(statearr_12418_12433[2] = inst_12399);
(statearr_12418_12433[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12414 === 4))
{var inst_12402 = (state_12413[8]);var inst_12402__$1 = (state_12413[2]);var inst_12403 = (inst_12402__$1 == null);var state_12413__$1 = (function (){var statearr_12419 = state_12413;(statearr_12419[8] = inst_12402__$1);
return statearr_12419;
})();if(cljs.core.truth_(inst_12403))
{var statearr_12420_12434 = state_12413__$1;(statearr_12420_12434[1] = 5);
} else
{var statearr_12421_12435 = state_12413__$1;(statearr_12421_12435[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12414 === 3))
{var inst_12411 = (state_12413[2]);var state_12413__$1 = state_12413;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12413__$1,inst_12411);
} else
{if((state_val_12414 === 2))
{var state_12413__$1 = state_12413;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12413__$1,4,ch);
} else
{if((state_val_12414 === 1))
{var inst_12399 = init;var state_12413__$1 = (function (){var statearr_12422 = state_12413;(statearr_12422[7] = inst_12399);
return statearr_12422;
})();var statearr_12423_12436 = state_12413__$1;(statearr_12423_12436[2] = null);
(statearr_12423_12436[1] = 2);
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
});return ((function (switch__8445__auto__){
return (function() {
var state_machine__8446__auto__ = null;
var state_machine__8446__auto____0 = (function (){var statearr_12427 = [null,null,null,null,null,null,null,null,null];(statearr_12427[0] = state_machine__8446__auto__);
(statearr_12427[1] = 1);
return statearr_12427;
});
var state_machine__8446__auto____1 = (function (state_12413){while(true){
var ret_value__8447__auto__ = (function (){try{while(true){
var result__8448__auto__ = switch__8445__auto__.call(null,state_12413);if(cljs.core.keyword_identical_QMARK_.call(null,result__8448__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8448__auto__;
}
break;
}
}catch (e12428){if((e12428 instanceof Object))
{var ex__8449__auto__ = e12428;var statearr_12429_12437 = state_12413;(statearr_12429_12437[5] = ex__8449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12413);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12428;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8447__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12438 = state_12413;
state_12413 = G__12438;
continue;
}
} else
{return ret_value__8447__auto__;
}
break;
}
});
state_machine__8446__auto__ = function(state_12413){
switch(arguments.length){
case 0:
return state_machine__8446__auto____0.call(this);
case 1:
return state_machine__8446__auto____1.call(this,state_12413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8446__auto____0;
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8446__auto____1;
return state_machine__8446__auto__;
})()
;})(switch__8445__auto__))
})();var state__8532__auto__ = (function (){var statearr_12430 = f__8531__auto__.call(null);(statearr_12430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8530__auto__);
return statearr_12430;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8532__auto__);
}));
return c__8530__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8530__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8531__auto__ = (function (){var switch__8445__auto__ = (function (state_12500){var state_val_12501 = (state_12500[1]);if((state_val_12501 === 7))
{var inst_12481 = (state_12500[7]);var inst_12486 = (state_12500[2]);var inst_12487 = cljs.core.next.call(null,inst_12481);var inst_12481__$1 = inst_12487;var state_12500__$1 = (function (){var statearr_12502 = state_12500;(statearr_12502[8] = inst_12486);
(statearr_12502[7] = inst_12481__$1);
return statearr_12502;
})();var statearr_12503_12521 = state_12500__$1;(statearr_12503_12521[2] = null);
(statearr_12503_12521[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12501 === 1))
{var inst_12480 = cljs.core.seq.call(null,coll);var inst_12481 = inst_12480;var state_12500__$1 = (function (){var statearr_12504 = state_12500;(statearr_12504[7] = inst_12481);
return statearr_12504;
})();var statearr_12505_12522 = state_12500__$1;(statearr_12505_12522[2] = null);
(statearr_12505_12522[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12501 === 4))
{var inst_12481 = (state_12500[7]);var inst_12484 = cljs.core.first.call(null,inst_12481);var state_12500__$1 = state_12500;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12500__$1,7,ch,inst_12484);
} else
{if((state_val_12501 === 6))
{var inst_12496 = (state_12500[2]);var state_12500__$1 = state_12500;var statearr_12506_12523 = state_12500__$1;(statearr_12506_12523[2] = inst_12496);
(statearr_12506_12523[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12501 === 3))
{var inst_12498 = (state_12500[2]);var state_12500__$1 = state_12500;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12500__$1,inst_12498);
} else
{if((state_val_12501 === 2))
{var inst_12481 = (state_12500[7]);var state_12500__$1 = state_12500;if(cljs.core.truth_(inst_12481))
{var statearr_12507_12524 = state_12500__$1;(statearr_12507_12524[1] = 4);
} else
{var statearr_12508_12525 = state_12500__$1;(statearr_12508_12525[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12501 === 9))
{var state_12500__$1 = state_12500;var statearr_12509_12526 = state_12500__$1;(statearr_12509_12526[2] = null);
(statearr_12509_12526[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12501 === 5))
{var state_12500__$1 = state_12500;if(cljs.core.truth_(close_QMARK_))
{var statearr_12510_12527 = state_12500__$1;(statearr_12510_12527[1] = 8);
} else
{var statearr_12511_12528 = state_12500__$1;(statearr_12511_12528[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12501 === 10))
{var inst_12494 = (state_12500[2]);var state_12500__$1 = state_12500;var statearr_12512_12529 = state_12500__$1;(statearr_12512_12529[2] = inst_12494);
(statearr_12512_12529[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12501 === 8))
{var inst_12491 = cljs.core.async.close_BANG_.call(null,ch);var state_12500__$1 = state_12500;var statearr_12513_12530 = state_12500__$1;(statearr_12513_12530[2] = inst_12491);
(statearr_12513_12530[1] = 10);
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
}
}
}
});return ((function (switch__8445__auto__){
return (function() {
var state_machine__8446__auto__ = null;
var state_machine__8446__auto____0 = (function (){var statearr_12517 = [null,null,null,null,null,null,null,null,null];(statearr_12517[0] = state_machine__8446__auto__);
(statearr_12517[1] = 1);
return statearr_12517;
});
var state_machine__8446__auto____1 = (function (state_12500){while(true){
var ret_value__8447__auto__ = (function (){try{while(true){
var result__8448__auto__ = switch__8445__auto__.call(null,state_12500);if(cljs.core.keyword_identical_QMARK_.call(null,result__8448__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8448__auto__;
}
break;
}
}catch (e12518){if((e12518 instanceof Object))
{var ex__8449__auto__ = e12518;var statearr_12519_12531 = state_12500;(statearr_12519_12531[5] = ex__8449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12500);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12518;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8447__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12532 = state_12500;
state_12500 = G__12532;
continue;
}
} else
{return ret_value__8447__auto__;
}
break;
}
});
state_machine__8446__auto__ = function(state_12500){
switch(arguments.length){
case 0:
return state_machine__8446__auto____0.call(this);
case 1:
return state_machine__8446__auto____1.call(this,state_12500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8446__auto____0;
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8446__auto____1;
return state_machine__8446__auto__;
})()
;})(switch__8445__auto__))
})();var state__8532__auto__ = (function (){var statearr_12520 = f__8531__auto__.call(null);(statearr_12520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8530__auto__);
return statearr_12520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8532__auto__);
}));
return c__8530__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12534 = {};return obj12534;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__5624__auto__ = _;if(and__5624__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__5624__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__6263__auto__ = (((_ == null))?null:_);return (function (){var or__5636__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6263__auto__)]);if(or__5636__auto__)
{return or__5636__auto__;
} else
{var or__5636__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__5636__auto____$1)
{return or__5636__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12536 = {};return obj12536;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__5624__auto__ = m;if(and__5624__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__5624__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__6263__auto__ = (((m == null))?null:m);return (function (){var or__5636__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6263__auto__)]);if(or__5636__auto__)
{return or__5636__auto__;
} else
{var or__5636__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__5636__auto____$1)
{return or__5636__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__5624__auto__ = m;if(and__5624__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__5624__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__6263__auto__ = (((m == null))?null:m);return (function (){var or__5636__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6263__auto__)]);if(or__5636__auto__)
{return or__5636__auto__;
} else
{var or__5636__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__5636__auto____$1)
{return or__5636__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__5624__auto__ = m;if(and__5624__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__5624__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__6263__auto__ = (((m == null))?null:m);return (function (){var or__5636__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6263__auto__)]);if(or__5636__auto__)
{return or__5636__auto__;
} else
{var or__5636__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__5636__auto____$1)
{return or__5636__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12760 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12760 = (function (cs,ch,mult,meta12761){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12761 = meta12761;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12760.cljs$lang$type = true;
cljs.core.async.t12760.cljs$lang$ctorStr = "cljs.core.async/t12760";
cljs.core.async.t12760.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6203__auto__,writer__6204__auto__,opt__6205__auto__){return cljs.core._write.call(null,writer__6204__auto__,"cljs.core.async/t12760");
});})(cs))
;
cljs.core.async.t12760.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12760.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12760.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12760.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12760.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12760.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12760.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12762){var self__ = this;
var _12762__$1 = this;return self__.meta12761;
});})(cs))
;
cljs.core.async.t12760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12762,meta12761__$1){var self__ = this;
var _12762__$1 = this;return (new cljs.core.async.t12760(self__.cs,self__.ch,self__.mult,meta12761__$1));
});})(cs))
;
cljs.core.async.__GT_t12760 = ((function (cs){
return (function __GT_t12760(cs__$1,ch__$1,mult__$1,meta12761){return (new cljs.core.async.t12760(cs__$1,ch__$1,mult__$1,meta12761));
});})(cs))
;
}
return (new cljs.core.async.t12760(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8530__auto___12983 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8531__auto__ = (function (){var switch__8445__auto__ = (function (state_12897){var state_val_12898 = (state_12897[1]);if((state_val_12898 === 7))
{var inst_12893 = (state_12897[2]);var state_12897__$1 = state_12897;var statearr_12899_12984 = state_12897__$1;(statearr_12899_12984[2] = inst_12893);
(statearr_12899_12984[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 20))
{var inst_12794 = (state_12897[7]);var inst_12804 = cljs.core.first.call(null,inst_12794);var inst_12805 = cljs.core.nth.call(null,inst_12804,0,null);var inst_12806 = cljs.core.nth.call(null,inst_12804,1,null);var state_12897__$1 = (function (){var statearr_12900 = state_12897;(statearr_12900[8] = inst_12805);
return statearr_12900;
})();if(cljs.core.truth_(inst_12806))
{var statearr_12901_12985 = state_12897__$1;(statearr_12901_12985[1] = 22);
} else
{var statearr_12902_12986 = state_12897__$1;(statearr_12902_12986[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 27))
{var inst_12836 = (state_12897[9]);var inst_12834 = (state_12897[10]);var inst_12841 = cljs.core._nth.call(null,inst_12834,inst_12836);var state_12897__$1 = (function (){var statearr_12903 = state_12897;(statearr_12903[11] = inst_12841);
return statearr_12903;
})();var statearr_12904_12987 = state_12897__$1;(statearr_12904_12987[2] = null);
(statearr_12904_12987[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 1))
{var state_12897__$1 = state_12897;var statearr_12905_12988 = state_12897__$1;(statearr_12905_12988[2] = null);
(statearr_12905_12988[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 24))
{var inst_12794 = (state_12897[7]);var inst_12811 = (state_12897[2]);var inst_12812 = cljs.core.next.call(null,inst_12794);var inst_12774 = inst_12812;var inst_12775 = null;var inst_12776 = 0;var inst_12777 = 0;var state_12897__$1 = (function (){var statearr_12906 = state_12897;(statearr_12906[12] = inst_12811);
(statearr_12906[13] = inst_12777);
(statearr_12906[14] = inst_12775);
(statearr_12906[15] = inst_12776);
(statearr_12906[16] = inst_12774);
return statearr_12906;
})();var statearr_12907_12989 = state_12897__$1;(statearr_12907_12989[2] = null);
(statearr_12907_12989[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 39))
{var inst_12854 = (state_12897[17]);var inst_12872 = (state_12897[2]);var inst_12873 = cljs.core.next.call(null,inst_12854);var inst_12833 = inst_12873;var inst_12834 = null;var inst_12835 = 0;var inst_12836 = 0;var state_12897__$1 = (function (){var statearr_12911 = state_12897;(statearr_12911[9] = inst_12836);
(statearr_12911[10] = inst_12834);
(statearr_12911[18] = inst_12835);
(statearr_12911[19] = inst_12872);
(statearr_12911[20] = inst_12833);
return statearr_12911;
})();var statearr_12912_12990 = state_12897__$1;(statearr_12912_12990[2] = null);
(statearr_12912_12990[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 4))
{var inst_12765 = (state_12897[21]);var inst_12765__$1 = (state_12897[2]);var inst_12766 = (inst_12765__$1 == null);var state_12897__$1 = (function (){var statearr_12913 = state_12897;(statearr_12913[21] = inst_12765__$1);
return statearr_12913;
})();if(cljs.core.truth_(inst_12766))
{var statearr_12914_12991 = state_12897__$1;(statearr_12914_12991[1] = 5);
} else
{var statearr_12915_12992 = state_12897__$1;(statearr_12915_12992[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 15))
{var inst_12777 = (state_12897[13]);var inst_12775 = (state_12897[14]);var inst_12776 = (state_12897[15]);var inst_12774 = (state_12897[16]);var inst_12790 = (state_12897[2]);var inst_12791 = (inst_12777 + 1);var tmp12908 = inst_12775;var tmp12909 = inst_12776;var tmp12910 = inst_12774;var inst_12774__$1 = tmp12910;var inst_12775__$1 = tmp12908;var inst_12776__$1 = tmp12909;var inst_12777__$1 = inst_12791;var state_12897__$1 = (function (){var statearr_12916 = state_12897;(statearr_12916[13] = inst_12777__$1);
(statearr_12916[14] = inst_12775__$1);
(statearr_12916[15] = inst_12776__$1);
(statearr_12916[22] = inst_12790);
(statearr_12916[16] = inst_12774__$1);
return statearr_12916;
})();var statearr_12917_12993 = state_12897__$1;(statearr_12917_12993[2] = null);
(statearr_12917_12993[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 21))
{var inst_12815 = (state_12897[2]);var state_12897__$1 = state_12897;var statearr_12918_12994 = state_12897__$1;(statearr_12918_12994[2] = inst_12815);
(statearr_12918_12994[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 31))
{var inst_12841 = (state_12897[11]);var inst_12842 = (state_12897[2]);var inst_12843 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12844 = cljs.core.async.untap_STAR_.call(null,m,inst_12841);var state_12897__$1 = (function (){var statearr_12919 = state_12897;(statearr_12919[23] = inst_12843);
(statearr_12919[24] = inst_12842);
return statearr_12919;
})();var statearr_12920_12995 = state_12897__$1;(statearr_12920_12995[2] = inst_12844);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12897__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 32))
{var inst_12765 = (state_12897[21]);var inst_12841 = (state_12897[11]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12897,31,Object,null,30);var inst_12848 = cljs.core.async.put_BANG_.call(null,inst_12841,inst_12765,done);var state_12897__$1 = state_12897;var statearr_12921_12996 = state_12897__$1;(statearr_12921_12996[2] = inst_12848);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12897__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 40))
{var inst_12863 = (state_12897[25]);var inst_12864 = (state_12897[2]);var inst_12865 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12866 = cljs.core.async.untap_STAR_.call(null,m,inst_12863);var state_12897__$1 = (function (){var statearr_12922 = state_12897;(statearr_12922[26] = inst_12864);
(statearr_12922[27] = inst_12865);
return statearr_12922;
})();var statearr_12923_12997 = state_12897__$1;(statearr_12923_12997[2] = inst_12866);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12897__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 33))
{var inst_12854 = (state_12897[17]);var inst_12856 = cljs.core.chunked_seq_QMARK_.call(null,inst_12854);var state_12897__$1 = state_12897;if(inst_12856)
{var statearr_12924_12998 = state_12897__$1;(statearr_12924_12998[1] = 36);
} else
{var statearr_12925_12999 = state_12897__$1;(statearr_12925_12999[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 13))
{var inst_12784 = (state_12897[28]);var inst_12787 = cljs.core.async.close_BANG_.call(null,inst_12784);var state_12897__$1 = state_12897;var statearr_12926_13000 = state_12897__$1;(statearr_12926_13000[2] = inst_12787);
(statearr_12926_13000[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 22))
{var inst_12805 = (state_12897[8]);var inst_12808 = cljs.core.async.close_BANG_.call(null,inst_12805);var state_12897__$1 = state_12897;var statearr_12927_13001 = state_12897__$1;(statearr_12927_13001[2] = inst_12808);
(statearr_12927_13001[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 36))
{var inst_12854 = (state_12897[17]);var inst_12858 = cljs.core.chunk_first.call(null,inst_12854);var inst_12859 = cljs.core.chunk_rest.call(null,inst_12854);var inst_12860 = cljs.core.count.call(null,inst_12858);var inst_12833 = inst_12859;var inst_12834 = inst_12858;var inst_12835 = inst_12860;var inst_12836 = 0;var state_12897__$1 = (function (){var statearr_12928 = state_12897;(statearr_12928[9] = inst_12836);
(statearr_12928[10] = inst_12834);
(statearr_12928[18] = inst_12835);
(statearr_12928[20] = inst_12833);
return statearr_12928;
})();var statearr_12929_13002 = state_12897__$1;(statearr_12929_13002[2] = null);
(statearr_12929_13002[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 41))
{var inst_12765 = (state_12897[21]);var inst_12863 = (state_12897[25]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12897,40,Object,null,39);var inst_12870 = cljs.core.async.put_BANG_.call(null,inst_12863,inst_12765,done);var state_12897__$1 = state_12897;var statearr_12930_13003 = state_12897__$1;(statearr_12930_13003[2] = inst_12870);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12897__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 43))
{var state_12897__$1 = state_12897;var statearr_12931_13004 = state_12897__$1;(statearr_12931_13004[2] = null);
(statearr_12931_13004[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 29))
{var inst_12881 = (state_12897[2]);var state_12897__$1 = state_12897;var statearr_12932_13005 = state_12897__$1;(statearr_12932_13005[2] = inst_12881);
(statearr_12932_13005[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 44))
{var inst_12890 = (state_12897[2]);var state_12897__$1 = (function (){var statearr_12933 = state_12897;(statearr_12933[29] = inst_12890);
return statearr_12933;
})();var statearr_12934_13006 = state_12897__$1;(statearr_12934_13006[2] = null);
(statearr_12934_13006[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 6))
{var inst_12825 = (state_12897[30]);var inst_12824 = cljs.core.deref.call(null,cs);var inst_12825__$1 = cljs.core.keys.call(null,inst_12824);var inst_12826 = cljs.core.count.call(null,inst_12825__$1);var inst_12827 = cljs.core.reset_BANG_.call(null,dctr,inst_12826);var inst_12832 = cljs.core.seq.call(null,inst_12825__$1);var inst_12833 = inst_12832;var inst_12834 = null;var inst_12835 = 0;var inst_12836 = 0;var state_12897__$1 = (function (){var statearr_12935 = state_12897;(statearr_12935[9] = inst_12836);
(statearr_12935[31] = inst_12827);
(statearr_12935[10] = inst_12834);
(statearr_12935[30] = inst_12825__$1);
(statearr_12935[18] = inst_12835);
(statearr_12935[20] = inst_12833);
return statearr_12935;
})();var statearr_12936_13007 = state_12897__$1;(statearr_12936_13007[2] = null);
(statearr_12936_13007[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 28))
{var inst_12854 = (state_12897[17]);var inst_12833 = (state_12897[20]);var inst_12854__$1 = cljs.core.seq.call(null,inst_12833);var state_12897__$1 = (function (){var statearr_12937 = state_12897;(statearr_12937[17] = inst_12854__$1);
return statearr_12937;
})();if(inst_12854__$1)
{var statearr_12938_13008 = state_12897__$1;(statearr_12938_13008[1] = 33);
} else
{var statearr_12939_13009 = state_12897__$1;(statearr_12939_13009[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 25))
{var inst_12836 = (state_12897[9]);var inst_12835 = (state_12897[18]);var inst_12838 = (inst_12836 < inst_12835);var inst_12839 = inst_12838;var state_12897__$1 = state_12897;if(cljs.core.truth_(inst_12839))
{var statearr_12940_13010 = state_12897__$1;(statearr_12940_13010[1] = 27);
} else
{var statearr_12941_13011 = state_12897__$1;(statearr_12941_13011[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 34))
{var state_12897__$1 = state_12897;var statearr_12942_13012 = state_12897__$1;(statearr_12942_13012[2] = null);
(statearr_12942_13012[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 17))
{var state_12897__$1 = state_12897;var statearr_12943_13013 = state_12897__$1;(statearr_12943_13013[2] = null);
(statearr_12943_13013[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 3))
{var inst_12895 = (state_12897[2]);var state_12897__$1 = state_12897;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12897__$1,inst_12895);
} else
{if((state_val_12898 === 12))
{var inst_12820 = (state_12897[2]);var state_12897__$1 = state_12897;var statearr_12944_13014 = state_12897__$1;(statearr_12944_13014[2] = inst_12820);
(statearr_12944_13014[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 2))
{var state_12897__$1 = state_12897;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12897__$1,4,ch);
} else
{if((state_val_12898 === 23))
{var state_12897__$1 = state_12897;var statearr_12945_13015 = state_12897__$1;(statearr_12945_13015[2] = null);
(statearr_12945_13015[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 35))
{var inst_12879 = (state_12897[2]);var state_12897__$1 = state_12897;var statearr_12946_13016 = state_12897__$1;(statearr_12946_13016[2] = inst_12879);
(statearr_12946_13016[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 19))
{var inst_12794 = (state_12897[7]);var inst_12798 = cljs.core.chunk_first.call(null,inst_12794);var inst_12799 = cljs.core.chunk_rest.call(null,inst_12794);var inst_12800 = cljs.core.count.call(null,inst_12798);var inst_12774 = inst_12799;var inst_12775 = inst_12798;var inst_12776 = inst_12800;var inst_12777 = 0;var state_12897__$1 = (function (){var statearr_12947 = state_12897;(statearr_12947[13] = inst_12777);
(statearr_12947[14] = inst_12775);
(statearr_12947[15] = inst_12776);
(statearr_12947[16] = inst_12774);
return statearr_12947;
})();var statearr_12948_13017 = state_12897__$1;(statearr_12948_13017[2] = null);
(statearr_12948_13017[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 11))
{var inst_12794 = (state_12897[7]);var inst_12774 = (state_12897[16]);var inst_12794__$1 = cljs.core.seq.call(null,inst_12774);var state_12897__$1 = (function (){var statearr_12949 = state_12897;(statearr_12949[7] = inst_12794__$1);
return statearr_12949;
})();if(inst_12794__$1)
{var statearr_12950_13018 = state_12897__$1;(statearr_12950_13018[1] = 16);
} else
{var statearr_12951_13019 = state_12897__$1;(statearr_12951_13019[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 9))
{var inst_12822 = (state_12897[2]);var state_12897__$1 = state_12897;var statearr_12952_13020 = state_12897__$1;(statearr_12952_13020[2] = inst_12822);
(statearr_12952_13020[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 5))
{var inst_12772 = cljs.core.deref.call(null,cs);var inst_12773 = cljs.core.seq.call(null,inst_12772);var inst_12774 = inst_12773;var inst_12775 = null;var inst_12776 = 0;var inst_12777 = 0;var state_12897__$1 = (function (){var statearr_12953 = state_12897;(statearr_12953[13] = inst_12777);
(statearr_12953[14] = inst_12775);
(statearr_12953[15] = inst_12776);
(statearr_12953[16] = inst_12774);
return statearr_12953;
})();var statearr_12954_13021 = state_12897__$1;(statearr_12954_13021[2] = null);
(statearr_12954_13021[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 14))
{var state_12897__$1 = state_12897;var statearr_12955_13022 = state_12897__$1;(statearr_12955_13022[2] = null);
(statearr_12955_13022[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 45))
{var inst_12887 = (state_12897[2]);var state_12897__$1 = state_12897;var statearr_12956_13023 = state_12897__$1;(statearr_12956_13023[2] = inst_12887);
(statearr_12956_13023[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 26))
{var inst_12825 = (state_12897[30]);var inst_12883 = (state_12897[2]);var inst_12884 = cljs.core.seq.call(null,inst_12825);var state_12897__$1 = (function (){var statearr_12957 = state_12897;(statearr_12957[32] = inst_12883);
return statearr_12957;
})();if(inst_12884)
{var statearr_12958_13024 = state_12897__$1;(statearr_12958_13024[1] = 42);
} else
{var statearr_12959_13025 = state_12897__$1;(statearr_12959_13025[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 16))
{var inst_12794 = (state_12897[7]);var inst_12796 = cljs.core.chunked_seq_QMARK_.call(null,inst_12794);var state_12897__$1 = state_12897;if(inst_12796)
{var statearr_12963_13026 = state_12897__$1;(statearr_12963_13026[1] = 19);
} else
{var statearr_12964_13027 = state_12897__$1;(statearr_12964_13027[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 38))
{var inst_12876 = (state_12897[2]);var state_12897__$1 = state_12897;var statearr_12965_13028 = state_12897__$1;(statearr_12965_13028[2] = inst_12876);
(statearr_12965_13028[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 30))
{var inst_12836 = (state_12897[9]);var inst_12834 = (state_12897[10]);var inst_12835 = (state_12897[18]);var inst_12833 = (state_12897[20]);var inst_12850 = (state_12897[2]);var inst_12851 = (inst_12836 + 1);var tmp12960 = inst_12834;var tmp12961 = inst_12835;var tmp12962 = inst_12833;var inst_12833__$1 = tmp12962;var inst_12834__$1 = tmp12960;var inst_12835__$1 = tmp12961;var inst_12836__$1 = inst_12851;var state_12897__$1 = (function (){var statearr_12966 = state_12897;(statearr_12966[9] = inst_12836__$1);
(statearr_12966[10] = inst_12834__$1);
(statearr_12966[33] = inst_12850);
(statearr_12966[18] = inst_12835__$1);
(statearr_12966[20] = inst_12833__$1);
return statearr_12966;
})();var statearr_12967_13029 = state_12897__$1;(statearr_12967_13029[2] = null);
(statearr_12967_13029[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 10))
{var inst_12777 = (state_12897[13]);var inst_12775 = (state_12897[14]);var inst_12783 = cljs.core._nth.call(null,inst_12775,inst_12777);var inst_12784 = cljs.core.nth.call(null,inst_12783,0,null);var inst_12785 = cljs.core.nth.call(null,inst_12783,1,null);var state_12897__$1 = (function (){var statearr_12968 = state_12897;(statearr_12968[28] = inst_12784);
return statearr_12968;
})();if(cljs.core.truth_(inst_12785))
{var statearr_12969_13030 = state_12897__$1;(statearr_12969_13030[1] = 13);
} else
{var statearr_12970_13031 = state_12897__$1;(statearr_12970_13031[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 18))
{var inst_12818 = (state_12897[2]);var state_12897__$1 = state_12897;var statearr_12971_13032 = state_12897__$1;(statearr_12971_13032[2] = inst_12818);
(statearr_12971_13032[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 42))
{var state_12897__$1 = state_12897;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12897__$1,45,dchan);
} else
{if((state_val_12898 === 37))
{var inst_12854 = (state_12897[17]);var inst_12863 = cljs.core.first.call(null,inst_12854);var state_12897__$1 = (function (){var statearr_12972 = state_12897;(statearr_12972[25] = inst_12863);
return statearr_12972;
})();var statearr_12973_13033 = state_12897__$1;(statearr_12973_13033[2] = null);
(statearr_12973_13033[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12898 === 8))
{var inst_12777 = (state_12897[13]);var inst_12776 = (state_12897[15]);var inst_12779 = (inst_12777 < inst_12776);var inst_12780 = inst_12779;var state_12897__$1 = state_12897;if(cljs.core.truth_(inst_12780))
{var statearr_12974_13034 = state_12897__$1;(statearr_12974_13034[1] = 10);
} else
{var statearr_12975_13035 = state_12897__$1;(statearr_12975_13035[1] = 11);
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8445__auto__){
return (function() {
var state_machine__8446__auto__ = null;
var state_machine__8446__auto____0 = (function (){var statearr_12979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12979[0] = state_machine__8446__auto__);
(statearr_12979[1] = 1);
return statearr_12979;
});
var state_machine__8446__auto____1 = (function (state_12897){while(true){
var ret_value__8447__auto__ = (function (){try{while(true){
var result__8448__auto__ = switch__8445__auto__.call(null,state_12897);if(cljs.core.keyword_identical_QMARK_.call(null,result__8448__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8448__auto__;
}
break;
}
}catch (e12980){if((e12980 instanceof Object))
{var ex__8449__auto__ = e12980;var statearr_12981_13036 = state_12897;(statearr_12981_13036[5] = ex__8449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12897);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12980;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8447__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13037 = state_12897;
state_12897 = G__13037;
continue;
}
} else
{return ret_value__8447__auto__;
}
break;
}
});
state_machine__8446__auto__ = function(state_12897){
switch(arguments.length){
case 0:
return state_machine__8446__auto____0.call(this);
case 1:
return state_machine__8446__auto____1.call(this,state_12897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8446__auto____0;
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8446__auto____1;
return state_machine__8446__auto__;
})()
;})(switch__8445__auto__))
})();var state__8532__auto__ = (function (){var statearr_12982 = f__8531__auto__.call(null);(statearr_12982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8530__auto___12983);
return statearr_12982;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8532__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13039 = {};return obj13039;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__5624__auto__ = m;if(and__5624__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__5624__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__6263__auto__ = (((m == null))?null:m);return (function (){var or__5636__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6263__auto__)]);if(or__5636__auto__)
{return or__5636__auto__;
} else
{var or__5636__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__5636__auto____$1)
{return or__5636__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__5624__auto__ = m;if(and__5624__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__5624__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__6263__auto__ = (((m == null))?null:m);return (function (){var or__5636__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6263__auto__)]);if(or__5636__auto__)
{return or__5636__auto__;
} else
{var or__5636__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__5636__auto____$1)
{return or__5636__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__5624__auto__ = m;if(and__5624__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__5624__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__6263__auto__ = (((m == null))?null:m);return (function (){var or__5636__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6263__auto__)]);if(or__5636__auto__)
{return or__5636__auto__;
} else
{var or__5636__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__5636__auto____$1)
{return or__5636__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__5624__auto__ = m;if(and__5624__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__5624__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__6263__auto__ = (((m == null))?null:m);return (function (){var or__5636__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6263__auto__)]);if(or__5636__auto__)
{return or__5636__auto__;
} else
{var or__5636__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__5636__auto____$1)
{return or__5636__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__5624__auto__ = m;if(and__5624__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__5624__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__6263__auto__ = (((m == null))?null:m);return (function (){var or__5636__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6263__auto__)]);if(or__5636__auto__)
{return or__5636__auto__;
} else
{var or__5636__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__5636__auto____$1)
{return or__5636__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13149 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13149 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13150){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13150 = meta13150;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13149.cljs$lang$type = true;
cljs.core.async.t13149.cljs$lang$ctorStr = "cljs.core.async/t13149";
cljs.core.async.t13149.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6203__auto__,writer__6204__auto__,opt__6205__auto__){return cljs.core._write.call(null,writer__6204__auto__,"cljs.core.async/t13149");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13149.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13149.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13149.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13149.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13149.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13149.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13149.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13149.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13151){var self__ = this;
var _13151__$1 = this;return self__.meta13150;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13151,meta13150__$1){var self__ = this;
var _13151__$1 = this;return (new cljs.core.async.t13149(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13150__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13149 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13149(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13150){return (new cljs.core.async.t13149(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13150));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13149(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__8530__auto___13258 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8531__auto__ = (function (){var switch__8445__auto__ = (function (state_13216){var state_val_13217 = (state_13216[1]);if((state_val_13217 === 7))
{var inst_13165 = (state_13216[7]);var inst_13170 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13165);var state_13216__$1 = state_13216;var statearr_13218_13259 = state_13216__$1;(statearr_13218_13259[2] = inst_13170);
(statearr_13218_13259[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13217 === 20))
{var inst_13180 = (state_13216[8]);var state_13216__$1 = state_13216;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13216__$1,23,out,inst_13180);
} else
{if((state_val_13217 === 1))
{var inst_13155 = (state_13216[9]);var inst_13155__$1 = calc_state.call(null);var inst_13156 = cljs.core.seq_QMARK_.call(null,inst_13155__$1);var state_13216__$1 = (function (){var statearr_13219 = state_13216;(statearr_13219[9] = inst_13155__$1);
return statearr_13219;
})();if(inst_13156)
{var statearr_13220_13260 = state_13216__$1;(statearr_13220_13260[1] = 2);
} else
{var statearr_13221_13261 = state_13216__$1;(statearr_13221_13261[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13217 === 4))
{var inst_13155 = (state_13216[9]);var inst_13161 = (state_13216[2]);var inst_13162 = cljs.core.get.call(null,inst_13161,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13163 = cljs.core.get.call(null,inst_13161,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13164 = cljs.core.get.call(null,inst_13161,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13165 = inst_13155;var state_13216__$1 = (function (){var statearr_13222 = state_13216;(statearr_13222[7] = inst_13165);
(statearr_13222[10] = inst_13163);
(statearr_13222[11] = inst_13162);
(statearr_13222[12] = inst_13164);
return statearr_13222;
})();var statearr_13223_13262 = state_13216__$1;(statearr_13223_13262[2] = null);
(statearr_13223_13262[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13217 === 15))
{var state_13216__$1 = state_13216;var statearr_13224_13263 = state_13216__$1;(statearr_13224_13263[2] = null);
(statearr_13224_13263[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13217 === 21))
{var state_13216__$1 = state_13216;var statearr_13225_13264 = state_13216__$1;(statearr_13225_13264[2] = null);
(statearr_13225_13264[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13217 === 13))
{var inst_13212 = (state_13216[2]);var state_13216__$1 = state_13216;var statearr_13226_13265 = state_13216__$1;(statearr_13226_13265[2] = inst_13212);
(statearr_13226_13265[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13217 === 22))
{var inst_13173 = (state_13216[13]);var inst_13209 = (state_13216[2]);var inst_13165 = inst_13173;var state_13216__$1 = (function (){var statearr_13227 = state_13216;(statearr_13227[7] = inst_13165);
(statearr_13227[14] = inst_13209);
return statearr_13227;
})();var statearr_13228_13266 = state_13216__$1;(statearr_13228_13266[2] = null);
(statearr_13228_13266[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13217 === 6))
{var inst_13214 = (state_13216[2]);var state_13216__$1 = state_13216;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13216__$1,inst_13214);
} else
{if((state_val_13217 === 17))
{var inst_13195 = (state_13216[15]);var state_13216__$1 = state_13216;var statearr_13229_13267 = state_13216__$1;(statearr_13229_13267[2] = inst_13195);
(statearr_13229_13267[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13217 === 3))
{var inst_13155 = (state_13216[9]);var state_13216__$1 = state_13216;var statearr_13230_13268 = state_13216__$1;(statearr_13230_13268[2] = inst_13155);
(statearr_13230_13268[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13217 === 12))
{var inst_13176 = (state_13216[16]);var inst_13181 = (state_13216[17]);var inst_13195 = (state_13216[15]);var inst_13195__$1 = inst_13176.call(null,inst_13181);var state_13216__$1 = (function (){var statearr_13231 = state_13216;(statearr_13231[15] = inst_13195__$1);
return statearr_13231;
})();if(cljs.core.truth_(inst_13195__$1))
{var statearr_13232_13269 = state_13216__$1;(statearr_13232_13269[1] = 17);
} else
{var statearr_13233_13270 = state_13216__$1;(statearr_13233_13270[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13217 === 2))
{var inst_13155 = (state_13216[9]);var inst_13158 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13155);var state_13216__$1 = state_13216;var statearr_13234_13271 = state_13216__$1;(statearr_13234_13271[2] = inst_13158);
(statearr_13234_13271[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13217 === 23))
{var inst_13206 = (state_13216[2]);var state_13216__$1 = state_13216;var statearr_13235_13272 = state_13216__$1;(statearr_13235_13272[2] = inst_13206);
(statearr_13235_13272[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13217 === 19))
{var inst_13203 = (state_13216[2]);var state_13216__$1 = state_13216;if(cljs.core.truth_(inst_13203))
{var statearr_13236_13273 = state_13216__$1;(statearr_13236_13273[1] = 20);
} else
{var statearr_13237_13274 = state_13216__$1;(statearr_13237_13274[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13217 === 11))
{var inst_13180 = (state_13216[8]);var inst_13186 = (inst_13180 == null);var state_13216__$1 = state_13216;if(cljs.core.truth_(inst_13186))
{var statearr_13238_13275 = state_13216__$1;(statearr_13238_13275[1] = 14);
} else
{var statearr_13239_13276 = state_13216__$1;(statearr_13239_13276[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13217 === 9))
{var inst_13173 = (state_13216[13]);var inst_13173__$1 = (state_13216[2]);var inst_13174 = cljs.core.get.call(null,inst_13173__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13175 = cljs.core.get.call(null,inst_13173__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13176 = cljs.core.get.call(null,inst_13173__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13216__$1 = (function (){var statearr_13240 = state_13216;(statearr_13240[16] = inst_13176);
(statearr_13240[13] = inst_13173__$1);
(statearr_13240[18] = inst_13175);
return statearr_13240;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13216__$1,10,inst_13174);
} else
{if((state_val_13217 === 5))
{var inst_13165 = (state_13216[7]);var inst_13168 = cljs.core.seq_QMARK_.call(null,inst_13165);var state_13216__$1 = state_13216;if(inst_13168)
{var statearr_13241_13277 = state_13216__$1;(statearr_13241_13277[1] = 7);
} else
{var statearr_13242_13278 = state_13216__$1;(statearr_13242_13278[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13217 === 14))
{var inst_13181 = (state_13216[17]);var inst_13188 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13181);var state_13216__$1 = state_13216;var statearr_13243_13279 = state_13216__$1;(statearr_13243_13279[2] = inst_13188);
(statearr_13243_13279[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13217 === 16))
{var inst_13191 = (state_13216[2]);var inst_13192 = calc_state.call(null);var inst_13165 = inst_13192;var state_13216__$1 = (function (){var statearr_13244 = state_13216;(statearr_13244[7] = inst_13165);
(statearr_13244[19] = inst_13191);
return statearr_13244;
})();var statearr_13245_13280 = state_13216__$1;(statearr_13245_13280[2] = null);
(statearr_13245_13280[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13217 === 10))
{var inst_13180 = (state_13216[8]);var inst_13181 = (state_13216[17]);var inst_13179 = (state_13216[2]);var inst_13180__$1 = cljs.core.nth.call(null,inst_13179,0,null);var inst_13181__$1 = cljs.core.nth.call(null,inst_13179,1,null);var inst_13182 = (inst_13180__$1 == null);var inst_13183 = cljs.core._EQ_.call(null,inst_13181__$1,change);var inst_13184 = (inst_13182) || (inst_13183);var state_13216__$1 = (function (){var statearr_13246 = state_13216;(statearr_13246[8] = inst_13180__$1);
(statearr_13246[17] = inst_13181__$1);
return statearr_13246;
})();if(cljs.core.truth_(inst_13184))
{var statearr_13247_13281 = state_13216__$1;(statearr_13247_13281[1] = 11);
} else
{var statearr_13248_13282 = state_13216__$1;(statearr_13248_13282[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13217 === 18))
{var inst_13176 = (state_13216[16]);var inst_13181 = (state_13216[17]);var inst_13175 = (state_13216[18]);var inst_13198 = cljs.core.empty_QMARK_.call(null,inst_13176);var inst_13199 = inst_13175.call(null,inst_13181);var inst_13200 = cljs.core.not.call(null,inst_13199);var inst_13201 = (inst_13198) && (inst_13200);var state_13216__$1 = state_13216;var statearr_13249_13283 = state_13216__$1;(statearr_13249_13283[2] = inst_13201);
(statearr_13249_13283[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13217 === 8))
{var inst_13165 = (state_13216[7]);var state_13216__$1 = state_13216;var statearr_13250_13284 = state_13216__$1;(statearr_13250_13284[2] = inst_13165);
(statearr_13250_13284[1] = 9);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8445__auto__){
return (function() {
var state_machine__8446__auto__ = null;
var state_machine__8446__auto____0 = (function (){var statearr_13254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13254[0] = state_machine__8446__auto__);
(statearr_13254[1] = 1);
return statearr_13254;
});
var state_machine__8446__auto____1 = (function (state_13216){while(true){
var ret_value__8447__auto__ = (function (){try{while(true){
var result__8448__auto__ = switch__8445__auto__.call(null,state_13216);if(cljs.core.keyword_identical_QMARK_.call(null,result__8448__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8448__auto__;
}
break;
}
}catch (e13255){if((e13255 instanceof Object))
{var ex__8449__auto__ = e13255;var statearr_13256_13285 = state_13216;(statearr_13256_13285[5] = ex__8449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13216);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13255;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8447__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13286 = state_13216;
state_13216 = G__13286;
continue;
}
} else
{return ret_value__8447__auto__;
}
break;
}
});
state_machine__8446__auto__ = function(state_13216){
switch(arguments.length){
case 0:
return state_machine__8446__auto____0.call(this);
case 1:
return state_machine__8446__auto____1.call(this,state_13216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8446__auto____0;
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8446__auto____1;
return state_machine__8446__auto__;
})()
;})(switch__8445__auto__))
})();var state__8532__auto__ = (function (){var statearr_13257 = f__8531__auto__.call(null);(statearr_13257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8530__auto___13258);
return statearr_13257;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8532__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13288 = {};return obj13288;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__5624__auto__ = p;if(and__5624__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__5624__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__6263__auto__ = (((p == null))?null:p);return (function (){var or__5636__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6263__auto__)]);if(or__5636__auto__)
{return or__5636__auto__;
} else
{var or__5636__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__5636__auto____$1)
{return or__5636__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__5624__auto__ = p;if(and__5624__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__5624__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__6263__auto__ = (((p == null))?null:p);return (function (){var or__5636__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6263__auto__)]);if(or__5636__auto__)
{return or__5636__auto__;
} else
{var or__5636__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__5636__auto____$1)
{return or__5636__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__5624__auto__ = p;if(and__5624__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__5624__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__6263__auto__ = (((p == null))?null:p);return (function (){var or__5636__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6263__auto__)]);if(or__5636__auto__)
{return or__5636__auto__;
} else
{var or__5636__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__5636__auto____$1)
{return or__5636__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__5624__auto__ = p;if(and__5624__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__5624__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__6263__auto__ = (((p == null))?null:p);return (function (){var or__5636__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6263__auto__)]);if(or__5636__auto__)
{return or__5636__auto__;
} else
{var or__5636__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__5636__auto____$1)
{return or__5636__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__5636__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__5636__auto__))
{return or__5636__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__5636__auto__,mults){
return (function (p1__13289_SHARP_){if(cljs.core.truth_(p1__13289_SHARP_.call(null,topic)))
{return p1__13289_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13289_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5636__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13414 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13414 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13415){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13415 = meta13415;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13414.cljs$lang$type = true;
cljs.core.async.t13414.cljs$lang$ctorStr = "cljs.core.async/t13414";
cljs.core.async.t13414.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6203__auto__,writer__6204__auto__,opt__6205__auto__){return cljs.core._write.call(null,writer__6204__auto__,"cljs.core.async/t13414");
});})(mults,ensure_mult))
;
cljs.core.async.t13414.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13414.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13414.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13414.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13414.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13414.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13414.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13416){var self__ = this;
var _13416__$1 = this;return self__.meta13415;
});})(mults,ensure_mult))
;
cljs.core.async.t13414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13416,meta13415__$1){var self__ = this;
var _13416__$1 = this;return (new cljs.core.async.t13414(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13415__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13414 = ((function (mults,ensure_mult){
return (function __GT_t13414(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13415){return (new cljs.core.async.t13414(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13415));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13414(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8530__auto___13538 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8531__auto__ = (function (){var switch__8445__auto__ = (function (state_13490){var state_val_13491 = (state_13490[1]);if((state_val_13491 === 7))
{var inst_13486 = (state_13490[2]);var state_13490__$1 = state_13490;var statearr_13492_13539 = state_13490__$1;(statearr_13492_13539[2] = inst_13486);
(statearr_13492_13539[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13491 === 20))
{var state_13490__$1 = state_13490;var statearr_13493_13540 = state_13490__$1;(statearr_13493_13540[2] = null);
(statearr_13493_13540[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13491 === 1))
{var state_13490__$1 = state_13490;var statearr_13494_13541 = state_13490__$1;(statearr_13494_13541[2] = null);
(statearr_13494_13541[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13491 === 24))
{var inst_13469 = (state_13490[7]);var inst_13419 = (state_13490[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13490,23,Object,null,22);var inst_13476 = cljs.core.async.muxch_STAR_.call(null,inst_13469);var state_13490__$1 = state_13490;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13490__$1,25,inst_13476,inst_13419);
} else
{if((state_val_13491 === 4))
{var inst_13419 = (state_13490[8]);var inst_13419__$1 = (state_13490[2]);var inst_13420 = (inst_13419__$1 == null);var state_13490__$1 = (function (){var statearr_13495 = state_13490;(statearr_13495[8] = inst_13419__$1);
return statearr_13495;
})();if(cljs.core.truth_(inst_13420))
{var statearr_13496_13542 = state_13490__$1;(statearr_13496_13542[1] = 5);
} else
{var statearr_13497_13543 = state_13490__$1;(statearr_13497_13543[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13491 === 15))
{var inst_13461 = (state_13490[2]);var state_13490__$1 = state_13490;var statearr_13498_13544 = state_13490__$1;(statearr_13498_13544[2] = inst_13461);
(statearr_13498_13544[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13491 === 21))
{var inst_13483 = (state_13490[2]);var state_13490__$1 = (function (){var statearr_13499 = state_13490;(statearr_13499[9] = inst_13483);
return statearr_13499;
})();var statearr_13500_13545 = state_13490__$1;(statearr_13500_13545[2] = null);
(statearr_13500_13545[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13491 === 13))
{var inst_13443 = (state_13490[10]);var inst_13445 = cljs.core.chunked_seq_QMARK_.call(null,inst_13443);var state_13490__$1 = state_13490;if(inst_13445)
{var statearr_13501_13546 = state_13490__$1;(statearr_13501_13546[1] = 16);
} else
{var statearr_13502_13547 = state_13490__$1;(statearr_13502_13547[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13491 === 22))
{var inst_13480 = (state_13490[2]);var state_13490__$1 = state_13490;var statearr_13503_13548 = state_13490__$1;(statearr_13503_13548[2] = inst_13480);
(statearr_13503_13548[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13491 === 6))
{var inst_13469 = (state_13490[7]);var inst_13419 = (state_13490[8]);var inst_13467 = (state_13490[11]);var inst_13467__$1 = topic_fn.call(null,inst_13419);var inst_13468 = cljs.core.deref.call(null,mults);var inst_13469__$1 = cljs.core.get.call(null,inst_13468,inst_13467__$1);var state_13490__$1 = (function (){var statearr_13504 = state_13490;(statearr_13504[7] = inst_13469__$1);
(statearr_13504[11] = inst_13467__$1);
return statearr_13504;
})();if(cljs.core.truth_(inst_13469__$1))
{var statearr_13505_13549 = state_13490__$1;(statearr_13505_13549[1] = 19);
} else
{var statearr_13506_13550 = state_13490__$1;(statearr_13506_13550[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13491 === 25))
{var inst_13478 = (state_13490[2]);var state_13490__$1 = state_13490;var statearr_13507_13551 = state_13490__$1;(statearr_13507_13551[2] = inst_13478);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13490__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13491 === 17))
{var inst_13443 = (state_13490[10]);var inst_13452 = cljs.core.first.call(null,inst_13443);var inst_13453 = cljs.core.async.muxch_STAR_.call(null,inst_13452);var inst_13454 = cljs.core.async.close_BANG_.call(null,inst_13453);var inst_13455 = cljs.core.next.call(null,inst_13443);var inst_13429 = inst_13455;var inst_13430 = null;var inst_13431 = 0;var inst_13432 = 0;var state_13490__$1 = (function (){var statearr_13508 = state_13490;(statearr_13508[12] = inst_13432);
(statearr_13508[13] = inst_13454);
(statearr_13508[14] = inst_13429);
(statearr_13508[15] = inst_13430);
(statearr_13508[16] = inst_13431);
return statearr_13508;
})();var statearr_13509_13552 = state_13490__$1;(statearr_13509_13552[2] = null);
(statearr_13509_13552[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13491 === 3))
{var inst_13488 = (state_13490[2]);var state_13490__$1 = state_13490;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13490__$1,inst_13488);
} else
{if((state_val_13491 === 12))
{var inst_13463 = (state_13490[2]);var state_13490__$1 = state_13490;var statearr_13510_13553 = state_13490__$1;(statearr_13510_13553[2] = inst_13463);
(statearr_13510_13553[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13491 === 2))
{var state_13490__$1 = state_13490;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13490__$1,4,ch);
} else
{if((state_val_13491 === 23))
{var inst_13467 = (state_13490[11]);var inst_13471 = (state_13490[2]);var inst_13472 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13467);var state_13490__$1 = (function (){var statearr_13511 = state_13490;(statearr_13511[17] = inst_13471);
return statearr_13511;
})();var statearr_13512_13554 = state_13490__$1;(statearr_13512_13554[2] = inst_13472);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13490__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13491 === 19))
{var state_13490__$1 = state_13490;var statearr_13513_13555 = state_13490__$1;(statearr_13513_13555[2] = null);
(statearr_13513_13555[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13491 === 11))
{var inst_13429 = (state_13490[14]);var inst_13443 = (state_13490[10]);var inst_13443__$1 = cljs.core.seq.call(null,inst_13429);var state_13490__$1 = (function (){var statearr_13514 = state_13490;(statearr_13514[10] = inst_13443__$1);
return statearr_13514;
})();if(inst_13443__$1)
{var statearr_13515_13556 = state_13490__$1;(statearr_13515_13556[1] = 13);
} else
{var statearr_13516_13557 = state_13490__$1;(statearr_13516_13557[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13491 === 9))
{var inst_13465 = (state_13490[2]);var state_13490__$1 = state_13490;var statearr_13517_13558 = state_13490__$1;(statearr_13517_13558[2] = inst_13465);
(statearr_13517_13558[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13491 === 5))
{var inst_13426 = cljs.core.deref.call(null,mults);var inst_13427 = cljs.core.vals.call(null,inst_13426);var inst_13428 = cljs.core.seq.call(null,inst_13427);var inst_13429 = inst_13428;var inst_13430 = null;var inst_13431 = 0;var inst_13432 = 0;var state_13490__$1 = (function (){var statearr_13518 = state_13490;(statearr_13518[12] = inst_13432);
(statearr_13518[14] = inst_13429);
(statearr_13518[15] = inst_13430);
(statearr_13518[16] = inst_13431);
return statearr_13518;
})();var statearr_13519_13559 = state_13490__$1;(statearr_13519_13559[2] = null);
(statearr_13519_13559[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13491 === 14))
{var state_13490__$1 = state_13490;var statearr_13523_13560 = state_13490__$1;(statearr_13523_13560[2] = null);
(statearr_13523_13560[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13491 === 16))
{var inst_13443 = (state_13490[10]);var inst_13447 = cljs.core.chunk_first.call(null,inst_13443);var inst_13448 = cljs.core.chunk_rest.call(null,inst_13443);var inst_13449 = cljs.core.count.call(null,inst_13447);var inst_13429 = inst_13448;var inst_13430 = inst_13447;var inst_13431 = inst_13449;var inst_13432 = 0;var state_13490__$1 = (function (){var statearr_13524 = state_13490;(statearr_13524[12] = inst_13432);
(statearr_13524[14] = inst_13429);
(statearr_13524[15] = inst_13430);
(statearr_13524[16] = inst_13431);
return statearr_13524;
})();var statearr_13525_13561 = state_13490__$1;(statearr_13525_13561[2] = null);
(statearr_13525_13561[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13491 === 10))
{var inst_13432 = (state_13490[12]);var inst_13429 = (state_13490[14]);var inst_13430 = (state_13490[15]);var inst_13431 = (state_13490[16]);var inst_13437 = cljs.core._nth.call(null,inst_13430,inst_13432);var inst_13438 = cljs.core.async.muxch_STAR_.call(null,inst_13437);var inst_13439 = cljs.core.async.close_BANG_.call(null,inst_13438);var inst_13440 = (inst_13432 + 1);var tmp13520 = inst_13429;var tmp13521 = inst_13430;var tmp13522 = inst_13431;var inst_13429__$1 = tmp13520;var inst_13430__$1 = tmp13521;var inst_13431__$1 = tmp13522;var inst_13432__$1 = inst_13440;var state_13490__$1 = (function (){var statearr_13526 = state_13490;(statearr_13526[12] = inst_13432__$1);
(statearr_13526[14] = inst_13429__$1);
(statearr_13526[18] = inst_13439);
(statearr_13526[15] = inst_13430__$1);
(statearr_13526[16] = inst_13431__$1);
return statearr_13526;
})();var statearr_13527_13562 = state_13490__$1;(statearr_13527_13562[2] = null);
(statearr_13527_13562[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13491 === 18))
{var inst_13458 = (state_13490[2]);var state_13490__$1 = state_13490;var statearr_13528_13563 = state_13490__$1;(statearr_13528_13563[2] = inst_13458);
(statearr_13528_13563[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13491 === 8))
{var inst_13432 = (state_13490[12]);var inst_13431 = (state_13490[16]);var inst_13434 = (inst_13432 < inst_13431);var inst_13435 = inst_13434;var state_13490__$1 = state_13490;if(cljs.core.truth_(inst_13435))
{var statearr_13529_13564 = state_13490__$1;(statearr_13529_13564[1] = 10);
} else
{var statearr_13530_13565 = state_13490__$1;(statearr_13530_13565[1] = 11);
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8445__auto__){
return (function() {
var state_machine__8446__auto__ = null;
var state_machine__8446__auto____0 = (function (){var statearr_13534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13534[0] = state_machine__8446__auto__);
(statearr_13534[1] = 1);
return statearr_13534;
});
var state_machine__8446__auto____1 = (function (state_13490){while(true){
var ret_value__8447__auto__ = (function (){try{while(true){
var result__8448__auto__ = switch__8445__auto__.call(null,state_13490);if(cljs.core.keyword_identical_QMARK_.call(null,result__8448__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8448__auto__;
}
break;
}
}catch (e13535){if((e13535 instanceof Object))
{var ex__8449__auto__ = e13535;var statearr_13536_13566 = state_13490;(statearr_13536_13566[5] = ex__8449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13490);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13535;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8447__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13567 = state_13490;
state_13490 = G__13567;
continue;
}
} else
{return ret_value__8447__auto__;
}
break;
}
});
state_machine__8446__auto__ = function(state_13490){
switch(arguments.length){
case 0:
return state_machine__8446__auto____0.call(this);
case 1:
return state_machine__8446__auto____1.call(this,state_13490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8446__auto____0;
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8446__auto____1;
return state_machine__8446__auto__;
})()
;})(switch__8445__auto__))
})();var state__8532__auto__ = (function (){var statearr_13537 = f__8531__auto__.call(null);(statearr_13537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8530__auto___13538);
return statearr_13537;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8532__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__8530__auto___13704 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8531__auto__ = (function (){var switch__8445__auto__ = (function (state_13674){var state_val_13675 = (state_13674[1]);if((state_val_13675 === 7))
{var state_13674__$1 = state_13674;var statearr_13676_13705 = state_13674__$1;(statearr_13676_13705[2] = null);
(statearr_13676_13705[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13675 === 1))
{var state_13674__$1 = state_13674;var statearr_13677_13706 = state_13674__$1;(statearr_13677_13706[2] = null);
(statearr_13677_13706[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13675 === 4))
{var inst_13638 = (state_13674[7]);var inst_13640 = (inst_13638 < cnt);var state_13674__$1 = state_13674;if(cljs.core.truth_(inst_13640))
{var statearr_13678_13707 = state_13674__$1;(statearr_13678_13707[1] = 6);
} else
{var statearr_13679_13708 = state_13674__$1;(statearr_13679_13708[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13675 === 15))
{var inst_13670 = (state_13674[2]);var state_13674__$1 = state_13674;var statearr_13680_13709 = state_13674__$1;(statearr_13680_13709[2] = inst_13670);
(statearr_13680_13709[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13675 === 13))
{var inst_13663 = cljs.core.async.close_BANG_.call(null,out);var state_13674__$1 = state_13674;var statearr_13681_13710 = state_13674__$1;(statearr_13681_13710[2] = inst_13663);
(statearr_13681_13710[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13675 === 6))
{var state_13674__$1 = state_13674;var statearr_13682_13711 = state_13674__$1;(statearr_13682_13711[2] = null);
(statearr_13682_13711[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13675 === 3))
{var inst_13672 = (state_13674[2]);var state_13674__$1 = state_13674;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13674__$1,inst_13672);
} else
{if((state_val_13675 === 12))
{var inst_13660 = (state_13674[8]);var inst_13660__$1 = (state_13674[2]);var inst_13661 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13660__$1);var state_13674__$1 = (function (){var statearr_13683 = state_13674;(statearr_13683[8] = inst_13660__$1);
return statearr_13683;
})();if(cljs.core.truth_(inst_13661))
{var statearr_13684_13712 = state_13674__$1;(statearr_13684_13712[1] = 13);
} else
{var statearr_13685_13713 = state_13674__$1;(statearr_13685_13713[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13675 === 2))
{var inst_13637 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13638 = 0;var state_13674__$1 = (function (){var statearr_13686 = state_13674;(statearr_13686[7] = inst_13638);
(statearr_13686[9] = inst_13637);
return statearr_13686;
})();var statearr_13687_13714 = state_13674__$1;(statearr_13687_13714[2] = null);
(statearr_13687_13714[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13675 === 11))
{var inst_13638 = (state_13674[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13674,10,Object,null,9);var inst_13647 = chs__$1.call(null,inst_13638);var inst_13648 = done.call(null,inst_13638);var inst_13649 = cljs.core.async.take_BANG_.call(null,inst_13647,inst_13648);var state_13674__$1 = state_13674;var statearr_13688_13715 = state_13674__$1;(statearr_13688_13715[2] = inst_13649);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13674__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13675 === 9))
{var inst_13638 = (state_13674[7]);var inst_13651 = (state_13674[2]);var inst_13652 = (inst_13638 + 1);var inst_13638__$1 = inst_13652;var state_13674__$1 = (function (){var statearr_13689 = state_13674;(statearr_13689[7] = inst_13638__$1);
(statearr_13689[10] = inst_13651);
return statearr_13689;
})();var statearr_13690_13716 = state_13674__$1;(statearr_13690_13716[2] = null);
(statearr_13690_13716[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13675 === 5))
{var inst_13658 = (state_13674[2]);var state_13674__$1 = (function (){var statearr_13691 = state_13674;(statearr_13691[11] = inst_13658);
return statearr_13691;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13674__$1,12,dchan);
} else
{if((state_val_13675 === 14))
{var inst_13660 = (state_13674[8]);var inst_13665 = cljs.core.apply.call(null,f,inst_13660);var state_13674__$1 = state_13674;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13674__$1,16,out,inst_13665);
} else
{if((state_val_13675 === 16))
{var inst_13667 = (state_13674[2]);var state_13674__$1 = (function (){var statearr_13692 = state_13674;(statearr_13692[12] = inst_13667);
return statearr_13692;
})();var statearr_13693_13717 = state_13674__$1;(statearr_13693_13717[2] = null);
(statearr_13693_13717[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13675 === 10))
{var inst_13642 = (state_13674[2]);var inst_13643 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13674__$1 = (function (){var statearr_13694 = state_13674;(statearr_13694[13] = inst_13642);
return statearr_13694;
})();var statearr_13695_13718 = state_13674__$1;(statearr_13695_13718[2] = inst_13643);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13674__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13675 === 8))
{var inst_13656 = (state_13674[2]);var state_13674__$1 = state_13674;var statearr_13696_13719 = state_13674__$1;(statearr_13696_13719[2] = inst_13656);
(statearr_13696_13719[1] = 5);
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
}
}
}
}
}
}
}
}
}
});return ((function (switch__8445__auto__){
return (function() {
var state_machine__8446__auto__ = null;
var state_machine__8446__auto____0 = (function (){var statearr_13700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13700[0] = state_machine__8446__auto__);
(statearr_13700[1] = 1);
return statearr_13700;
});
var state_machine__8446__auto____1 = (function (state_13674){while(true){
var ret_value__8447__auto__ = (function (){try{while(true){
var result__8448__auto__ = switch__8445__auto__.call(null,state_13674);if(cljs.core.keyword_identical_QMARK_.call(null,result__8448__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8448__auto__;
}
break;
}
}catch (e13701){if((e13701 instanceof Object))
{var ex__8449__auto__ = e13701;var statearr_13702_13720 = state_13674;(statearr_13702_13720[5] = ex__8449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13674);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13701;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8447__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13721 = state_13674;
state_13674 = G__13721;
continue;
}
} else
{return ret_value__8447__auto__;
}
break;
}
});
state_machine__8446__auto__ = function(state_13674){
switch(arguments.length){
case 0:
return state_machine__8446__auto____0.call(this);
case 1:
return state_machine__8446__auto____1.call(this,state_13674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8446__auto____0;
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8446__auto____1;
return state_machine__8446__auto__;
})()
;})(switch__8445__auto__))
})();var state__8532__auto__ = (function (){var statearr_13703 = f__8531__auto__.call(null);(statearr_13703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8530__auto___13704);
return statearr_13703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8532__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8530__auto___13829 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8531__auto__ = (function (){var switch__8445__auto__ = (function (state_13805){var state_val_13806 = (state_13805[1]);if((state_val_13806 === 7))
{var inst_13785 = (state_13805[7]);var inst_13784 = (state_13805[8]);var inst_13784__$1 = (state_13805[2]);var inst_13785__$1 = cljs.core.nth.call(null,inst_13784__$1,0,null);var inst_13786 = cljs.core.nth.call(null,inst_13784__$1,1,null);var inst_13787 = (inst_13785__$1 == null);var state_13805__$1 = (function (){var statearr_13807 = state_13805;(statearr_13807[7] = inst_13785__$1);
(statearr_13807[9] = inst_13786);
(statearr_13807[8] = inst_13784__$1);
return statearr_13807;
})();if(cljs.core.truth_(inst_13787))
{var statearr_13808_13830 = state_13805__$1;(statearr_13808_13830[1] = 8);
} else
{var statearr_13809_13831 = state_13805__$1;(statearr_13809_13831[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13806 === 1))
{var inst_13776 = cljs.core.vec.call(null,chs);var inst_13777 = inst_13776;var state_13805__$1 = (function (){var statearr_13810 = state_13805;(statearr_13810[10] = inst_13777);
return statearr_13810;
})();var statearr_13811_13832 = state_13805__$1;(statearr_13811_13832[2] = null);
(statearr_13811_13832[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13806 === 4))
{var inst_13777 = (state_13805[10]);var state_13805__$1 = state_13805;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13805__$1,7,inst_13777);
} else
{if((state_val_13806 === 6))
{var inst_13801 = (state_13805[2]);var state_13805__$1 = state_13805;var statearr_13812_13833 = state_13805__$1;(statearr_13812_13833[2] = inst_13801);
(statearr_13812_13833[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13806 === 3))
{var inst_13803 = (state_13805[2]);var state_13805__$1 = state_13805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13805__$1,inst_13803);
} else
{if((state_val_13806 === 2))
{var inst_13777 = (state_13805[10]);var inst_13779 = cljs.core.count.call(null,inst_13777);var inst_13780 = (inst_13779 > 0);var state_13805__$1 = state_13805;if(cljs.core.truth_(inst_13780))
{var statearr_13814_13834 = state_13805__$1;(statearr_13814_13834[1] = 4);
} else
{var statearr_13815_13835 = state_13805__$1;(statearr_13815_13835[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13806 === 11))
{var inst_13777 = (state_13805[10]);var inst_13794 = (state_13805[2]);var tmp13813 = inst_13777;var inst_13777__$1 = tmp13813;var state_13805__$1 = (function (){var statearr_13816 = state_13805;(statearr_13816[10] = inst_13777__$1);
(statearr_13816[11] = inst_13794);
return statearr_13816;
})();var statearr_13817_13836 = state_13805__$1;(statearr_13817_13836[2] = null);
(statearr_13817_13836[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13806 === 9))
{var inst_13785 = (state_13805[7]);var state_13805__$1 = state_13805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13805__$1,11,out,inst_13785);
} else
{if((state_val_13806 === 5))
{var inst_13799 = cljs.core.async.close_BANG_.call(null,out);var state_13805__$1 = state_13805;var statearr_13818_13837 = state_13805__$1;(statearr_13818_13837[2] = inst_13799);
(statearr_13818_13837[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13806 === 10))
{var inst_13797 = (state_13805[2]);var state_13805__$1 = state_13805;var statearr_13819_13838 = state_13805__$1;(statearr_13819_13838[2] = inst_13797);
(statearr_13819_13838[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13806 === 8))
{var inst_13777 = (state_13805[10]);var inst_13785 = (state_13805[7]);var inst_13786 = (state_13805[9]);var inst_13784 = (state_13805[8]);var inst_13789 = (function (){var c = inst_13786;var v = inst_13785;var vec__13782 = inst_13784;var cs = inst_13777;return ((function (c,v,vec__13782,cs,inst_13777,inst_13785,inst_13786,inst_13784,state_val_13806){
return (function (p1__13722_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13722_SHARP_);
});
;})(c,v,vec__13782,cs,inst_13777,inst_13785,inst_13786,inst_13784,state_val_13806))
})();var inst_13790 = cljs.core.filterv.call(null,inst_13789,inst_13777);var inst_13777__$1 = inst_13790;var state_13805__$1 = (function (){var statearr_13820 = state_13805;(statearr_13820[10] = inst_13777__$1);
return statearr_13820;
})();var statearr_13821_13839 = state_13805__$1;(statearr_13821_13839[2] = null);
(statearr_13821_13839[1] = 2);
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
}
}
}
}
});return ((function (switch__8445__auto__){
return (function() {
var state_machine__8446__auto__ = null;
var state_machine__8446__auto____0 = (function (){var statearr_13825 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13825[0] = state_machine__8446__auto__);
(statearr_13825[1] = 1);
return statearr_13825;
});
var state_machine__8446__auto____1 = (function (state_13805){while(true){
var ret_value__8447__auto__ = (function (){try{while(true){
var result__8448__auto__ = switch__8445__auto__.call(null,state_13805);if(cljs.core.keyword_identical_QMARK_.call(null,result__8448__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8448__auto__;
}
break;
}
}catch (e13826){if((e13826 instanceof Object))
{var ex__8449__auto__ = e13826;var statearr_13827_13840 = state_13805;(statearr_13827_13840[5] = ex__8449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13805);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13826;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8447__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13841 = state_13805;
state_13805 = G__13841;
continue;
}
} else
{return ret_value__8447__auto__;
}
break;
}
});
state_machine__8446__auto__ = function(state_13805){
switch(arguments.length){
case 0:
return state_machine__8446__auto____0.call(this);
case 1:
return state_machine__8446__auto____1.call(this,state_13805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8446__auto____0;
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8446__auto____1;
return state_machine__8446__auto__;
})()
;})(switch__8445__auto__))
})();var state__8532__auto__ = (function (){var statearr_13828 = f__8531__auto__.call(null);(statearr_13828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8530__auto___13829);
return statearr_13828;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8532__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8530__auto___13934 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8531__auto__ = (function (){var switch__8445__auto__ = (function (state_13911){var state_val_13912 = (state_13911[1]);if((state_val_13912 === 7))
{var inst_13893 = (state_13911[7]);var inst_13893__$1 = (state_13911[2]);var inst_13894 = (inst_13893__$1 == null);var inst_13895 = cljs.core.not.call(null,inst_13894);var state_13911__$1 = (function (){var statearr_13913 = state_13911;(statearr_13913[7] = inst_13893__$1);
return statearr_13913;
})();if(inst_13895)
{var statearr_13914_13935 = state_13911__$1;(statearr_13914_13935[1] = 8);
} else
{var statearr_13915_13936 = state_13911__$1;(statearr_13915_13936[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 1))
{var inst_13888 = 0;var state_13911__$1 = (function (){var statearr_13916 = state_13911;(statearr_13916[8] = inst_13888);
return statearr_13916;
})();var statearr_13917_13937 = state_13911__$1;(statearr_13917_13937[2] = null);
(statearr_13917_13937[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 4))
{var state_13911__$1 = state_13911;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13911__$1,7,ch);
} else
{if((state_val_13912 === 6))
{var inst_13906 = (state_13911[2]);var state_13911__$1 = state_13911;var statearr_13918_13938 = state_13911__$1;(statearr_13918_13938[2] = inst_13906);
(statearr_13918_13938[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 3))
{var inst_13908 = (state_13911[2]);var inst_13909 = cljs.core.async.close_BANG_.call(null,out);var state_13911__$1 = (function (){var statearr_13919 = state_13911;(statearr_13919[9] = inst_13908);
return statearr_13919;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13911__$1,inst_13909);
} else
{if((state_val_13912 === 2))
{var inst_13888 = (state_13911[8]);var inst_13890 = (inst_13888 < n);var state_13911__$1 = state_13911;if(cljs.core.truth_(inst_13890))
{var statearr_13920_13939 = state_13911__$1;(statearr_13920_13939[1] = 4);
} else
{var statearr_13921_13940 = state_13911__$1;(statearr_13921_13940[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 11))
{var inst_13888 = (state_13911[8]);var inst_13898 = (state_13911[2]);var inst_13899 = (inst_13888 + 1);var inst_13888__$1 = inst_13899;var state_13911__$1 = (function (){var statearr_13922 = state_13911;(statearr_13922[8] = inst_13888__$1);
(statearr_13922[10] = inst_13898);
return statearr_13922;
})();var statearr_13923_13941 = state_13911__$1;(statearr_13923_13941[2] = null);
(statearr_13923_13941[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 9))
{var state_13911__$1 = state_13911;var statearr_13924_13942 = state_13911__$1;(statearr_13924_13942[2] = null);
(statearr_13924_13942[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 5))
{var state_13911__$1 = state_13911;var statearr_13925_13943 = state_13911__$1;(statearr_13925_13943[2] = null);
(statearr_13925_13943[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 10))
{var inst_13903 = (state_13911[2]);var state_13911__$1 = state_13911;var statearr_13926_13944 = state_13911__$1;(statearr_13926_13944[2] = inst_13903);
(statearr_13926_13944[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 8))
{var inst_13893 = (state_13911[7]);var state_13911__$1 = state_13911;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13911__$1,11,out,inst_13893);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8445__auto__){
return (function() {
var state_machine__8446__auto__ = null;
var state_machine__8446__auto____0 = (function (){var statearr_13930 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13930[0] = state_machine__8446__auto__);
(statearr_13930[1] = 1);
return statearr_13930;
});
var state_machine__8446__auto____1 = (function (state_13911){while(true){
var ret_value__8447__auto__ = (function (){try{while(true){
var result__8448__auto__ = switch__8445__auto__.call(null,state_13911);if(cljs.core.keyword_identical_QMARK_.call(null,result__8448__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8448__auto__;
}
break;
}
}catch (e13931){if((e13931 instanceof Object))
{var ex__8449__auto__ = e13931;var statearr_13932_13945 = state_13911;(statearr_13932_13945[5] = ex__8449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13911);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13931;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8447__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13946 = state_13911;
state_13911 = G__13946;
continue;
}
} else
{return ret_value__8447__auto__;
}
break;
}
});
state_machine__8446__auto__ = function(state_13911){
switch(arguments.length){
case 0:
return state_machine__8446__auto____0.call(this);
case 1:
return state_machine__8446__auto____1.call(this,state_13911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8446__auto____0;
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8446__auto____1;
return state_machine__8446__auto__;
})()
;})(switch__8445__auto__))
})();var state__8532__auto__ = (function (){var statearr_13933 = f__8531__auto__.call(null);(statearr_13933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8530__auto___13934);
return statearr_13933;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8532__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8530__auto___14043 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8531__auto__ = (function (){var switch__8445__auto__ = (function (state_14018){var state_val_14019 = (state_14018[1]);if((state_val_14019 === 7))
{var inst_14013 = (state_14018[2]);var state_14018__$1 = state_14018;var statearr_14020_14044 = state_14018__$1;(statearr_14020_14044[2] = inst_14013);
(statearr_14020_14044[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14019 === 1))
{var inst_13995 = null;var state_14018__$1 = (function (){var statearr_14021 = state_14018;(statearr_14021[7] = inst_13995);
return statearr_14021;
})();var statearr_14022_14045 = state_14018__$1;(statearr_14022_14045[2] = null);
(statearr_14022_14045[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14019 === 4))
{var inst_13998 = (state_14018[8]);var inst_13998__$1 = (state_14018[2]);var inst_13999 = (inst_13998__$1 == null);var inst_14000 = cljs.core.not.call(null,inst_13999);var state_14018__$1 = (function (){var statearr_14023 = state_14018;(statearr_14023[8] = inst_13998__$1);
return statearr_14023;
})();if(inst_14000)
{var statearr_14024_14046 = state_14018__$1;(statearr_14024_14046[1] = 5);
} else
{var statearr_14025_14047 = state_14018__$1;(statearr_14025_14047[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14019 === 6))
{var state_14018__$1 = state_14018;var statearr_14026_14048 = state_14018__$1;(statearr_14026_14048[2] = null);
(statearr_14026_14048[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14019 === 3))
{var inst_14015 = (state_14018[2]);var inst_14016 = cljs.core.async.close_BANG_.call(null,out);var state_14018__$1 = (function (){var statearr_14027 = state_14018;(statearr_14027[9] = inst_14015);
return statearr_14027;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14018__$1,inst_14016);
} else
{if((state_val_14019 === 2))
{var state_14018__$1 = state_14018;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14018__$1,4,ch);
} else
{if((state_val_14019 === 11))
{var inst_13998 = (state_14018[8]);var inst_14007 = (state_14018[2]);var inst_13995 = inst_13998;var state_14018__$1 = (function (){var statearr_14028 = state_14018;(statearr_14028[10] = inst_14007);
(statearr_14028[7] = inst_13995);
return statearr_14028;
})();var statearr_14029_14049 = state_14018__$1;(statearr_14029_14049[2] = null);
(statearr_14029_14049[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14019 === 9))
{var inst_13998 = (state_14018[8]);var state_14018__$1 = state_14018;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14018__$1,11,out,inst_13998);
} else
{if((state_val_14019 === 5))
{var inst_13995 = (state_14018[7]);var inst_13998 = (state_14018[8]);var inst_14002 = cljs.core._EQ_.call(null,inst_13998,inst_13995);var state_14018__$1 = state_14018;if(inst_14002)
{var statearr_14031_14050 = state_14018__$1;(statearr_14031_14050[1] = 8);
} else
{var statearr_14032_14051 = state_14018__$1;(statearr_14032_14051[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14019 === 10))
{var inst_14010 = (state_14018[2]);var state_14018__$1 = state_14018;var statearr_14033_14052 = state_14018__$1;(statearr_14033_14052[2] = inst_14010);
(statearr_14033_14052[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14019 === 8))
{var inst_13995 = (state_14018[7]);var tmp14030 = inst_13995;var inst_13995__$1 = tmp14030;var state_14018__$1 = (function (){var statearr_14034 = state_14018;(statearr_14034[7] = inst_13995__$1);
return statearr_14034;
})();var statearr_14035_14053 = state_14018__$1;(statearr_14035_14053[2] = null);
(statearr_14035_14053[1] = 2);
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
}
}
}
}
});return ((function (switch__8445__auto__){
return (function() {
var state_machine__8446__auto__ = null;
var state_machine__8446__auto____0 = (function (){var statearr_14039 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14039[0] = state_machine__8446__auto__);
(statearr_14039[1] = 1);
return statearr_14039;
});
var state_machine__8446__auto____1 = (function (state_14018){while(true){
var ret_value__8447__auto__ = (function (){try{while(true){
var result__8448__auto__ = switch__8445__auto__.call(null,state_14018);if(cljs.core.keyword_identical_QMARK_.call(null,result__8448__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8448__auto__;
}
break;
}
}catch (e14040){if((e14040 instanceof Object))
{var ex__8449__auto__ = e14040;var statearr_14041_14054 = state_14018;(statearr_14041_14054[5] = ex__8449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14018);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14040;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8447__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14055 = state_14018;
state_14018 = G__14055;
continue;
}
} else
{return ret_value__8447__auto__;
}
break;
}
});
state_machine__8446__auto__ = function(state_14018){
switch(arguments.length){
case 0:
return state_machine__8446__auto____0.call(this);
case 1:
return state_machine__8446__auto____1.call(this,state_14018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8446__auto____0;
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8446__auto____1;
return state_machine__8446__auto__;
})()
;})(switch__8445__auto__))
})();var state__8532__auto__ = (function (){var statearr_14042 = f__8531__auto__.call(null);(statearr_14042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8530__auto___14043);
return statearr_14042;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8532__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8530__auto___14190 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8531__auto__ = (function (){var switch__8445__auto__ = (function (state_14160){var state_val_14161 = (state_14160[1]);if((state_val_14161 === 7))
{var inst_14156 = (state_14160[2]);var state_14160__$1 = state_14160;var statearr_14162_14191 = state_14160__$1;(statearr_14162_14191[2] = inst_14156);
(statearr_14162_14191[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14161 === 1))
{var inst_14123 = (new Array(n));var inst_14124 = inst_14123;var inst_14125 = 0;var state_14160__$1 = (function (){var statearr_14163 = state_14160;(statearr_14163[7] = inst_14125);
(statearr_14163[8] = inst_14124);
return statearr_14163;
})();var statearr_14164_14192 = state_14160__$1;(statearr_14164_14192[2] = null);
(statearr_14164_14192[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14161 === 4))
{var inst_14128 = (state_14160[9]);var inst_14128__$1 = (state_14160[2]);var inst_14129 = (inst_14128__$1 == null);var inst_14130 = cljs.core.not.call(null,inst_14129);var state_14160__$1 = (function (){var statearr_14165 = state_14160;(statearr_14165[9] = inst_14128__$1);
return statearr_14165;
})();if(inst_14130)
{var statearr_14166_14193 = state_14160__$1;(statearr_14166_14193[1] = 5);
} else
{var statearr_14167_14194 = state_14160__$1;(statearr_14167_14194[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14161 === 15))
{var inst_14150 = (state_14160[2]);var state_14160__$1 = state_14160;var statearr_14168_14195 = state_14160__$1;(statearr_14168_14195[2] = inst_14150);
(statearr_14168_14195[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14161 === 13))
{var state_14160__$1 = state_14160;var statearr_14169_14196 = state_14160__$1;(statearr_14169_14196[2] = null);
(statearr_14169_14196[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14161 === 6))
{var inst_14125 = (state_14160[7]);var inst_14146 = (inst_14125 > 0);var state_14160__$1 = state_14160;if(cljs.core.truth_(inst_14146))
{var statearr_14170_14197 = state_14160__$1;(statearr_14170_14197[1] = 12);
} else
{var statearr_14171_14198 = state_14160__$1;(statearr_14171_14198[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14161 === 3))
{var inst_14158 = (state_14160[2]);var state_14160__$1 = state_14160;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14160__$1,inst_14158);
} else
{if((state_val_14161 === 12))
{var inst_14124 = (state_14160[8]);var inst_14148 = cljs.core.vec.call(null,inst_14124);var state_14160__$1 = state_14160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14160__$1,15,out,inst_14148);
} else
{if((state_val_14161 === 2))
{var state_14160__$1 = state_14160;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14160__$1,4,ch);
} else
{if((state_val_14161 === 11))
{var inst_14140 = (state_14160[2]);var inst_14141 = (new Array(n));var inst_14124 = inst_14141;var inst_14125 = 0;var state_14160__$1 = (function (){var statearr_14172 = state_14160;(statearr_14172[7] = inst_14125);
(statearr_14172[8] = inst_14124);
(statearr_14172[10] = inst_14140);
return statearr_14172;
})();var statearr_14173_14199 = state_14160__$1;(statearr_14173_14199[2] = null);
(statearr_14173_14199[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14161 === 9))
{var inst_14124 = (state_14160[8]);var inst_14138 = cljs.core.vec.call(null,inst_14124);var state_14160__$1 = state_14160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14160__$1,11,out,inst_14138);
} else
{if((state_val_14161 === 5))
{var inst_14133 = (state_14160[11]);var inst_14125 = (state_14160[7]);var inst_14124 = (state_14160[8]);var inst_14128 = (state_14160[9]);var inst_14132 = (inst_14124[inst_14125] = inst_14128);var inst_14133__$1 = (inst_14125 + 1);var inst_14134 = (inst_14133__$1 < n);var state_14160__$1 = (function (){var statearr_14174 = state_14160;(statearr_14174[11] = inst_14133__$1);
(statearr_14174[12] = inst_14132);
return statearr_14174;
})();if(cljs.core.truth_(inst_14134))
{var statearr_14175_14200 = state_14160__$1;(statearr_14175_14200[1] = 8);
} else
{var statearr_14176_14201 = state_14160__$1;(statearr_14176_14201[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14161 === 14))
{var inst_14153 = (state_14160[2]);var inst_14154 = cljs.core.async.close_BANG_.call(null,out);var state_14160__$1 = (function (){var statearr_14178 = state_14160;(statearr_14178[13] = inst_14153);
return statearr_14178;
})();var statearr_14179_14202 = state_14160__$1;(statearr_14179_14202[2] = inst_14154);
(statearr_14179_14202[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14161 === 10))
{var inst_14144 = (state_14160[2]);var state_14160__$1 = state_14160;var statearr_14180_14203 = state_14160__$1;(statearr_14180_14203[2] = inst_14144);
(statearr_14180_14203[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14161 === 8))
{var inst_14133 = (state_14160[11]);var inst_14124 = (state_14160[8]);var tmp14177 = inst_14124;var inst_14124__$1 = tmp14177;var inst_14125 = inst_14133;var state_14160__$1 = (function (){var statearr_14181 = state_14160;(statearr_14181[7] = inst_14125);
(statearr_14181[8] = inst_14124__$1);
return statearr_14181;
})();var statearr_14182_14204 = state_14160__$1;(statearr_14182_14204[2] = null);
(statearr_14182_14204[1] = 2);
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
}
}
}
}
}
}
}
}
});return ((function (switch__8445__auto__){
return (function() {
var state_machine__8446__auto__ = null;
var state_machine__8446__auto____0 = (function (){var statearr_14186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14186[0] = state_machine__8446__auto__);
(statearr_14186[1] = 1);
return statearr_14186;
});
var state_machine__8446__auto____1 = (function (state_14160){while(true){
var ret_value__8447__auto__ = (function (){try{while(true){
var result__8448__auto__ = switch__8445__auto__.call(null,state_14160);if(cljs.core.keyword_identical_QMARK_.call(null,result__8448__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8448__auto__;
}
break;
}
}catch (e14187){if((e14187 instanceof Object))
{var ex__8449__auto__ = e14187;var statearr_14188_14205 = state_14160;(statearr_14188_14205[5] = ex__8449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14160);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14187;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8447__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14206 = state_14160;
state_14160 = G__14206;
continue;
}
} else
{return ret_value__8447__auto__;
}
break;
}
});
state_machine__8446__auto__ = function(state_14160){
switch(arguments.length){
case 0:
return state_machine__8446__auto____0.call(this);
case 1:
return state_machine__8446__auto____1.call(this,state_14160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8446__auto____0;
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8446__auto____1;
return state_machine__8446__auto__;
})()
;})(switch__8445__auto__))
})();var state__8532__auto__ = (function (){var statearr_14189 = f__8531__auto__.call(null);(statearr_14189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8530__auto___14190);
return statearr_14189;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8532__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8530__auto___14349 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8531__auto__ = (function (){var switch__8445__auto__ = (function (state_14319){var state_val_14320 = (state_14319[1]);if((state_val_14320 === 7))
{var inst_14315 = (state_14319[2]);var state_14319__$1 = state_14319;var statearr_14321_14350 = state_14319__$1;(statearr_14321_14350[2] = inst_14315);
(statearr_14321_14350[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14320 === 1))
{var inst_14278 = [];var inst_14279 = inst_14278;var inst_14280 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14319__$1 = (function (){var statearr_14322 = state_14319;(statearr_14322[7] = inst_14279);
(statearr_14322[8] = inst_14280);
return statearr_14322;
})();var statearr_14323_14351 = state_14319__$1;(statearr_14323_14351[2] = null);
(statearr_14323_14351[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14320 === 4))
{var inst_14283 = (state_14319[9]);var inst_14283__$1 = (state_14319[2]);var inst_14284 = (inst_14283__$1 == null);var inst_14285 = cljs.core.not.call(null,inst_14284);var state_14319__$1 = (function (){var statearr_14324 = state_14319;(statearr_14324[9] = inst_14283__$1);
return statearr_14324;
})();if(inst_14285)
{var statearr_14325_14352 = state_14319__$1;(statearr_14325_14352[1] = 5);
} else
{var statearr_14326_14353 = state_14319__$1;(statearr_14326_14353[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14320 === 15))
{var inst_14309 = (state_14319[2]);var state_14319__$1 = state_14319;var statearr_14327_14354 = state_14319__$1;(statearr_14327_14354[2] = inst_14309);
(statearr_14327_14354[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14320 === 13))
{var state_14319__$1 = state_14319;var statearr_14328_14355 = state_14319__$1;(statearr_14328_14355[2] = null);
(statearr_14328_14355[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14320 === 6))
{var inst_14279 = (state_14319[7]);var inst_14304 = inst_14279.length;var inst_14305 = (inst_14304 > 0);var state_14319__$1 = state_14319;if(cljs.core.truth_(inst_14305))
{var statearr_14329_14356 = state_14319__$1;(statearr_14329_14356[1] = 12);
} else
{var statearr_14330_14357 = state_14319__$1;(statearr_14330_14357[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14320 === 3))
{var inst_14317 = (state_14319[2]);var state_14319__$1 = state_14319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14319__$1,inst_14317);
} else
{if((state_val_14320 === 12))
{var inst_14279 = (state_14319[7]);var inst_14307 = cljs.core.vec.call(null,inst_14279);var state_14319__$1 = state_14319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14319__$1,15,out,inst_14307);
} else
{if((state_val_14320 === 2))
{var state_14319__$1 = state_14319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14319__$1,4,ch);
} else
{if((state_val_14320 === 11))
{var inst_14283 = (state_14319[9]);var inst_14287 = (state_14319[10]);var inst_14297 = (state_14319[2]);var inst_14298 = [];var inst_14299 = inst_14298.push(inst_14283);var inst_14279 = inst_14298;var inst_14280 = inst_14287;var state_14319__$1 = (function (){var statearr_14331 = state_14319;(statearr_14331[7] = inst_14279);
(statearr_14331[11] = inst_14297);
(statearr_14331[12] = inst_14299);
(statearr_14331[8] = inst_14280);
return statearr_14331;
})();var statearr_14332_14358 = state_14319__$1;(statearr_14332_14358[2] = null);
(statearr_14332_14358[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14320 === 9))
{var inst_14279 = (state_14319[7]);var inst_14295 = cljs.core.vec.call(null,inst_14279);var state_14319__$1 = state_14319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14319__$1,11,out,inst_14295);
} else
{if((state_val_14320 === 5))
{var inst_14283 = (state_14319[9]);var inst_14287 = (state_14319[10]);var inst_14280 = (state_14319[8]);var inst_14287__$1 = f.call(null,inst_14283);var inst_14288 = cljs.core._EQ_.call(null,inst_14287__$1,inst_14280);var inst_14289 = cljs.core.keyword_identical_QMARK_.call(null,inst_14280,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14290 = (inst_14288) || (inst_14289);var state_14319__$1 = (function (){var statearr_14333 = state_14319;(statearr_14333[10] = inst_14287__$1);
return statearr_14333;
})();if(cljs.core.truth_(inst_14290))
{var statearr_14334_14359 = state_14319__$1;(statearr_14334_14359[1] = 8);
} else
{var statearr_14335_14360 = state_14319__$1;(statearr_14335_14360[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14320 === 14))
{var inst_14312 = (state_14319[2]);var inst_14313 = cljs.core.async.close_BANG_.call(null,out);var state_14319__$1 = (function (){var statearr_14337 = state_14319;(statearr_14337[13] = inst_14312);
return statearr_14337;
})();var statearr_14338_14361 = state_14319__$1;(statearr_14338_14361[2] = inst_14313);
(statearr_14338_14361[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14320 === 10))
{var inst_14302 = (state_14319[2]);var state_14319__$1 = state_14319;var statearr_14339_14362 = state_14319__$1;(statearr_14339_14362[2] = inst_14302);
(statearr_14339_14362[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14320 === 8))
{var inst_14283 = (state_14319[9]);var inst_14279 = (state_14319[7]);var inst_14287 = (state_14319[10]);var inst_14292 = inst_14279.push(inst_14283);var tmp14336 = inst_14279;var inst_14279__$1 = tmp14336;var inst_14280 = inst_14287;var state_14319__$1 = (function (){var statearr_14340 = state_14319;(statearr_14340[14] = inst_14292);
(statearr_14340[7] = inst_14279__$1);
(statearr_14340[8] = inst_14280);
return statearr_14340;
})();var statearr_14341_14363 = state_14319__$1;(statearr_14341_14363[2] = null);
(statearr_14341_14363[1] = 2);
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
}
}
}
}
}
}
}
}
});return ((function (switch__8445__auto__){
return (function() {
var state_machine__8446__auto__ = null;
var state_machine__8446__auto____0 = (function (){var statearr_14345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14345[0] = state_machine__8446__auto__);
(statearr_14345[1] = 1);
return statearr_14345;
});
var state_machine__8446__auto____1 = (function (state_14319){while(true){
var ret_value__8447__auto__ = (function (){try{while(true){
var result__8448__auto__ = switch__8445__auto__.call(null,state_14319);if(cljs.core.keyword_identical_QMARK_.call(null,result__8448__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8448__auto__;
}
break;
}
}catch (e14346){if((e14346 instanceof Object))
{var ex__8449__auto__ = e14346;var statearr_14347_14364 = state_14319;(statearr_14347_14364[5] = ex__8449__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14319);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8447__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14365 = state_14319;
state_14319 = G__14365;
continue;
}
} else
{return ret_value__8447__auto__;
}
break;
}
});
state_machine__8446__auto__ = function(state_14319){
switch(arguments.length){
case 0:
return state_machine__8446__auto____0.call(this);
case 1:
return state_machine__8446__auto____1.call(this,state_14319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8446__auto____0;
state_machine__8446__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8446__auto____1;
return state_machine__8446__auto__;
})()
;})(switch__8445__auto__))
})();var state__8532__auto__ = (function (){var statearr_14348 = f__8531__auto__.call(null);(statearr_14348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8530__auto___14349);
return statearr_14348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8532__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
