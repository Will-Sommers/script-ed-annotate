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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11809 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11809 = (function (f,fn_handler,meta11810){
this.f = f;
this.fn_handler = fn_handler;
this.meta11810 = meta11810;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11809.cljs$lang$type = true;
cljs.core.async.t11809.cljs$lang$ctorStr = "cljs.core.async/t11809";
cljs.core.async.t11809.cljs$lang$ctorPrWriter = (function (this__6201__auto__,writer__6202__auto__,opt__6203__auto__){return cljs.core._write.call(null,writer__6202__auto__,"cljs.core.async/t11809");
});
cljs.core.async.t11809.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11809.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11809.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11811){var self__ = this;
var _11811__$1 = this;return self__.meta11810;
});
cljs.core.async.t11809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11811,meta11810__$1){var self__ = this;
var _11811__$1 = this;return (new cljs.core.async.t11809(self__.f,self__.fn_handler,meta11810__$1));
});
cljs.core.async.__GT_t11809 = (function __GT_t11809(f__$1,fn_handler__$1,meta11810){return (new cljs.core.async.t11809(f__$1,fn_handler__$1,meta11810));
});
}
return (new cljs.core.async.t11809(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11813 = buff;if(G__11813)
{var bit__6284__auto__ = null;if(cljs.core.truth_((function (){var or__5634__auto__ = bit__6284__auto__;if(cljs.core.truth_(or__5634__auto__))
{return or__5634__auto__;
} else
{return G__11813.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11813.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11813);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11813);
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
{var val_11814 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11814);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11814);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__5622__auto__ = ret;if(cljs.core.truth_(and__5622__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__5622__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__6482__auto___11815 = n;var x_11816 = 0;while(true){
if((x_11816 < n__6482__auto___11815))
{(a[x_11816] = 0);
{
var G__11817 = (x_11816 + 1);
x_11816 = G__11817;
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
var G__11818 = (i + 1);
i = G__11818;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11822 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11822 = (function (flag,alt_flag,meta11823){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11823 = meta11823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11822.cljs$lang$type = true;
cljs.core.async.t11822.cljs$lang$ctorStr = "cljs.core.async/t11822";
cljs.core.async.t11822.cljs$lang$ctorPrWriter = (function (this__6201__auto__,writer__6202__auto__,opt__6203__auto__){return cljs.core._write.call(null,writer__6202__auto__,"cljs.core.async/t11822");
});
cljs.core.async.t11822.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11822.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11822.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11824){var self__ = this;
var _11824__$1 = this;return self__.meta11823;
});
cljs.core.async.t11822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11824,meta11823__$1){var self__ = this;
var _11824__$1 = this;return (new cljs.core.async.t11822(self__.flag,self__.alt_flag,meta11823__$1));
});
cljs.core.async.__GT_t11822 = (function __GT_t11822(flag__$1,alt_flag__$1,meta11823){return (new cljs.core.async.t11822(flag__$1,alt_flag__$1,meta11823));
});
}
return (new cljs.core.async.t11822(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11828 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11828 = (function (cb,flag,alt_handler,meta11829){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11829 = meta11829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11828.cljs$lang$type = true;
cljs.core.async.t11828.cljs$lang$ctorStr = "cljs.core.async/t11828";
cljs.core.async.t11828.cljs$lang$ctorPrWriter = (function (this__6201__auto__,writer__6202__auto__,opt__6203__auto__){return cljs.core._write.call(null,writer__6202__auto__,"cljs.core.async/t11828");
});
cljs.core.async.t11828.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11828.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11828.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11830){var self__ = this;
var _11830__$1 = this;return self__.meta11829;
});
cljs.core.async.t11828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11830,meta11829__$1){var self__ = this;
var _11830__$1 = this;return (new cljs.core.async.t11828(self__.cb,self__.flag,self__.alt_handler,meta11829__$1));
});
cljs.core.async.__GT_t11828 = (function __GT_t11828(cb__$1,flag__$1,alt_handler__$1,meta11829){return (new cljs.core.async.t11828(cb__$1,flag__$1,alt_handler__$1,meta11829));
});
}
return (new cljs.core.async.t11828(cb,flag,alt_handler,null));
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
return (function (p1__11831_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11831_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5634__auto__ = wport;if(cljs.core.truth_(or__5634__auto__))
{return or__5634__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11832 = (i + 1);
i = G__11832;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__5634__auto__ = ret;if(cljs.core.truth_(or__5634__auto__))
{return or__5634__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__5622__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__5622__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__5622__auto__;
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
var alts_BANG___delegate = function (ports,p__11833){var map__11835 = p__11833;var map__11835__$1 = ((cljs.core.seq_QMARK_.call(null,map__11835))?cljs.core.apply.call(null,cljs.core.hash_map,map__11835):map__11835);var opts = map__11835__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11833 = null;if (arguments.length > 1) {
  p__11833 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11833);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11836){
var ports = cljs.core.first(arglist__11836);
var p__11833 = cljs.core.rest(arglist__11836);
return alts_BANG___delegate(ports,p__11833);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11844 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11844 = (function (ch,f,map_LT_,meta11845){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11845 = meta11845;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11844.cljs$lang$type = true;
cljs.core.async.t11844.cljs$lang$ctorStr = "cljs.core.async/t11844";
cljs.core.async.t11844.cljs$lang$ctorPrWriter = (function (this__6201__auto__,writer__6202__auto__,opt__6203__auto__){return cljs.core._write.call(null,writer__6202__auto__,"cljs.core.async/t11844");
});
cljs.core.async.t11844.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11844.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11844.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11844.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11847 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11847 = (function (fn1,_,meta11845,ch,f,map_LT_,meta11848){
this.fn1 = fn1;
this._ = _;
this.meta11845 = meta11845;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11848 = meta11848;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11847.cljs$lang$type = true;
cljs.core.async.t11847.cljs$lang$ctorStr = "cljs.core.async/t11847";
cljs.core.async.t11847.cljs$lang$ctorPrWriter = (function (this__6201__auto__,writer__6202__auto__,opt__6203__auto__){return cljs.core._write.call(null,writer__6202__auto__,"cljs.core.async/t11847");
});
cljs.core.async.t11847.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11847.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11847.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11847.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11837_SHARP_){return f1.call(null,(((p1__11837_SHARP_ == null))?null:self__.f.call(null,p1__11837_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11849){var self__ = this;
var _11849__$1 = this;return self__.meta11848;
});
cljs.core.async.t11847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11849,meta11848__$1){var self__ = this;
var _11849__$1 = this;return (new cljs.core.async.t11847(self__.fn1,self__._,self__.meta11845,self__.ch,self__.f,self__.map_LT_,meta11848__$1));
});
cljs.core.async.__GT_t11847 = (function __GT_t11847(fn1__$1,___$2,meta11845__$1,ch__$2,f__$2,map_LT___$2,meta11848){return (new cljs.core.async.t11847(fn1__$1,___$2,meta11845__$1,ch__$2,f__$2,map_LT___$2,meta11848));
});
}
return (new cljs.core.async.t11847(fn1,___$1,self__.meta11845,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__5622__auto__ = ret;if(cljs.core.truth_(and__5622__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__5622__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11844.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11844.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11846){var self__ = this;
var _11846__$1 = this;return self__.meta11845;
});
cljs.core.async.t11844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11846,meta11845__$1){var self__ = this;
var _11846__$1 = this;return (new cljs.core.async.t11844(self__.ch,self__.f,self__.map_LT_,meta11845__$1));
});
cljs.core.async.__GT_t11844 = (function __GT_t11844(ch__$1,f__$1,map_LT___$1,meta11845){return (new cljs.core.async.t11844(ch__$1,f__$1,map_LT___$1,meta11845));
});
}
return (new cljs.core.async.t11844(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11853 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11853 = (function (ch,f,map_GT_,meta11854){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11854 = meta11854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11853.cljs$lang$type = true;
cljs.core.async.t11853.cljs$lang$ctorStr = "cljs.core.async/t11853";
cljs.core.async.t11853.cljs$lang$ctorPrWriter = (function (this__6201__auto__,writer__6202__auto__,opt__6203__auto__){return cljs.core._write.call(null,writer__6202__auto__,"cljs.core.async/t11853");
});
cljs.core.async.t11853.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11853.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11853.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11853.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11853.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11853.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11855){var self__ = this;
var _11855__$1 = this;return self__.meta11854;
});
cljs.core.async.t11853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11855,meta11854__$1){var self__ = this;
var _11855__$1 = this;return (new cljs.core.async.t11853(self__.ch,self__.f,self__.map_GT_,meta11854__$1));
});
cljs.core.async.__GT_t11853 = (function __GT_t11853(ch__$1,f__$1,map_GT___$1,meta11854){return (new cljs.core.async.t11853(ch__$1,f__$1,map_GT___$1,meta11854));
});
}
return (new cljs.core.async.t11853(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11859 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11859 = (function (ch,p,filter_GT_,meta11860){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11860 = meta11860;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11859.cljs$lang$type = true;
cljs.core.async.t11859.cljs$lang$ctorStr = "cljs.core.async/t11859";
cljs.core.async.t11859.cljs$lang$ctorPrWriter = (function (this__6201__auto__,writer__6202__auto__,opt__6203__auto__){return cljs.core._write.call(null,writer__6202__auto__,"cljs.core.async/t11859");
});
cljs.core.async.t11859.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11859.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
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
var _11861__$1 = this;return (new cljs.core.async.t11859(self__.ch,self__.p,self__.filter_GT_,meta11860__$1));
});
cljs.core.async.__GT_t11859 = (function __GT_t11859(ch__$1,p__$1,filter_GT___$1,meta11860){return (new cljs.core.async.t11859(ch__$1,p__$1,filter_GT___$1,meta11860));
});
}
return (new cljs.core.async.t11859(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8544__auto___11944 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8545__auto__ = (function (){var switch__8452__auto__ = (function (state_11923){var state_val_11924 = (state_11923[1]);if((state_val_11924 === 7))
{var inst_11919 = (state_11923[2]);var state_11923__$1 = state_11923;var statearr_11925_11945 = state_11923__$1;(statearr_11925_11945[2] = inst_11919);
(statearr_11925_11945[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 1))
{var state_11923__$1 = state_11923;var statearr_11926_11946 = state_11923__$1;(statearr_11926_11946[2] = null);
(statearr_11926_11946[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 4))
{var inst_11905 = (state_11923[7]);var inst_11905__$1 = (state_11923[2]);var inst_11906 = (inst_11905__$1 == null);var state_11923__$1 = (function (){var statearr_11927 = state_11923;(statearr_11927[7] = inst_11905__$1);
return statearr_11927;
})();if(cljs.core.truth_(inst_11906))
{var statearr_11928_11947 = state_11923__$1;(statearr_11928_11947[1] = 5);
} else
{var statearr_11929_11948 = state_11923__$1;(statearr_11929_11948[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 6))
{var inst_11905 = (state_11923[7]);var inst_11910 = p.call(null,inst_11905);var state_11923__$1 = state_11923;if(cljs.core.truth_(inst_11910))
{var statearr_11930_11949 = state_11923__$1;(statearr_11930_11949[1] = 8);
} else
{var statearr_11931_11950 = state_11923__$1;(statearr_11931_11950[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 3))
{var inst_11921 = (state_11923[2]);var state_11923__$1 = state_11923;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11923__$1,inst_11921);
} else
{if((state_val_11924 === 2))
{var state_11923__$1 = state_11923;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11923__$1,4,ch);
} else
{if((state_val_11924 === 11))
{var inst_11913 = (state_11923[2]);var state_11923__$1 = state_11923;var statearr_11932_11951 = state_11923__$1;(statearr_11932_11951[2] = inst_11913);
(statearr_11932_11951[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 9))
{var state_11923__$1 = state_11923;var statearr_11933_11952 = state_11923__$1;(statearr_11933_11952[2] = null);
(statearr_11933_11952[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 5))
{var inst_11908 = cljs.core.async.close_BANG_.call(null,out);var state_11923__$1 = state_11923;var statearr_11934_11953 = state_11923__$1;(statearr_11934_11953[2] = inst_11908);
(statearr_11934_11953[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 10))
{var inst_11916 = (state_11923[2]);var state_11923__$1 = (function (){var statearr_11935 = state_11923;(statearr_11935[8] = inst_11916);
return statearr_11935;
})();var statearr_11936_11954 = state_11923__$1;(statearr_11936_11954[2] = null);
(statearr_11936_11954[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 8))
{var inst_11905 = (state_11923[7]);var state_11923__$1 = state_11923;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11923__$1,11,out,inst_11905);
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
});return ((function (switch__8452__auto__){
return (function() {
var state_machine__8454__auto__ = null;
var state_machine__8454__auto____0 = (function (){var statearr_11940 = [null,null,null,null,null,null,null,null,null];(statearr_11940[0] = state_machine__8454__auto__);
(statearr_11940[1] = 1);
return statearr_11940;
});
var state_machine__8454__auto____1 = (function (state_11923){while(true){
var ret_value__8455__auto__ = (function (){try{while(true){
var result__8456__auto__ = switch__8452__auto__.call(null,state_11923);if(cljs.core.keyword_identical_QMARK_.call(null,result__8456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8456__auto__;
}
break;
}
}catch (e11941){if((e11941 instanceof Object))
{var ex__8457__auto__ = e11941;var statearr_11942_11955 = state_11923;(statearr_11942_11955[5] = ex__8457__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11923);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11941;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8455__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11956 = state_11923;
state_11923 = G__11956;
continue;
}
} else
{return ret_value__8455__auto__;
}
break;
}
});
state_machine__8454__auto__ = function(state_11923){
switch(arguments.length){
case 0:
return state_machine__8454__auto____0.call(this);
case 1:
return state_machine__8454__auto____1.call(this,state_11923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8454__auto____0;
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8454__auto____1;
return state_machine__8454__auto__;
})()
;})(switch__8452__auto__))
})();var state__8546__auto__ = (function (){var statearr_11943 = f__8545__auto__.call(null);(statearr_11943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8544__auto___11944);
return statearr_11943;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8546__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8544__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8545__auto__ = (function (){var switch__8452__auto__ = (function (state_12108){var state_val_12109 = (state_12108[1]);if((state_val_12109 === 7))
{var inst_12104 = (state_12108[2]);var state_12108__$1 = state_12108;var statearr_12110_12147 = state_12108__$1;(statearr_12110_12147[2] = inst_12104);
(statearr_12110_12147[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12109 === 20))
{var inst_12079 = (state_12108[7]);var inst_12090 = (state_12108[2]);var inst_12091 = cljs.core.next.call(null,inst_12079);var inst_12065 = inst_12091;var inst_12066 = null;var inst_12067 = 0;var inst_12068 = 0;var state_12108__$1 = (function (){var statearr_12111 = state_12108;(statearr_12111[8] = inst_12067);
(statearr_12111[9] = inst_12065);
(statearr_12111[10] = inst_12068);
(statearr_12111[11] = inst_12066);
(statearr_12111[12] = inst_12090);
return statearr_12111;
})();var statearr_12112_12148 = state_12108__$1;(statearr_12112_12148[2] = null);
(statearr_12112_12148[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12109 === 1))
{var state_12108__$1 = state_12108;var statearr_12113_12149 = state_12108__$1;(statearr_12113_12149[2] = null);
(statearr_12113_12149[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12109 === 4))
{var inst_12054 = (state_12108[13]);var inst_12054__$1 = (state_12108[2]);var inst_12055 = (inst_12054__$1 == null);var state_12108__$1 = (function (){var statearr_12117 = state_12108;(statearr_12117[13] = inst_12054__$1);
return statearr_12117;
})();if(cljs.core.truth_(inst_12055))
{var statearr_12118_12150 = state_12108__$1;(statearr_12118_12150[1] = 5);
} else
{var statearr_12119_12151 = state_12108__$1;(statearr_12119_12151[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12109 === 15))
{var state_12108__$1 = state_12108;var statearr_12120_12152 = state_12108__$1;(statearr_12120_12152[2] = null);
(statearr_12120_12152[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12109 === 13))
{var inst_12067 = (state_12108[8]);var inst_12065 = (state_12108[9]);var inst_12068 = (state_12108[10]);var inst_12066 = (state_12108[11]);var inst_12075 = (state_12108[2]);var inst_12076 = (inst_12068 + 1);var tmp12114 = inst_12067;var tmp12115 = inst_12065;var tmp12116 = inst_12066;var inst_12065__$1 = tmp12115;var inst_12066__$1 = tmp12116;var inst_12067__$1 = tmp12114;var inst_12068__$1 = inst_12076;var state_12108__$1 = (function (){var statearr_12121 = state_12108;(statearr_12121[8] = inst_12067__$1);
(statearr_12121[9] = inst_12065__$1);
(statearr_12121[14] = inst_12075);
(statearr_12121[10] = inst_12068__$1);
(statearr_12121[11] = inst_12066__$1);
return statearr_12121;
})();var statearr_12122_12153 = state_12108__$1;(statearr_12122_12153[2] = null);
(statearr_12122_12153[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12109 === 6))
{var inst_12054 = (state_12108[13]);var inst_12059 = f.call(null,inst_12054);var inst_12064 = cljs.core.seq.call(null,inst_12059);var inst_12065 = inst_12064;var inst_12066 = null;var inst_12067 = 0;var inst_12068 = 0;var state_12108__$1 = (function (){var statearr_12123 = state_12108;(statearr_12123[8] = inst_12067);
(statearr_12123[9] = inst_12065);
(statearr_12123[10] = inst_12068);
(statearr_12123[11] = inst_12066);
return statearr_12123;
})();var statearr_12124_12154 = state_12108__$1;(statearr_12124_12154[2] = null);
(statearr_12124_12154[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12109 === 17))
{var inst_12079 = (state_12108[7]);var inst_12083 = cljs.core.chunk_first.call(null,inst_12079);var inst_12084 = cljs.core.chunk_rest.call(null,inst_12079);var inst_12085 = cljs.core.count.call(null,inst_12083);var inst_12065 = inst_12084;var inst_12066 = inst_12083;var inst_12067 = inst_12085;var inst_12068 = 0;var state_12108__$1 = (function (){var statearr_12125 = state_12108;(statearr_12125[8] = inst_12067);
(statearr_12125[9] = inst_12065);
(statearr_12125[10] = inst_12068);
(statearr_12125[11] = inst_12066);
return statearr_12125;
})();var statearr_12126_12155 = state_12108__$1;(statearr_12126_12155[2] = null);
(statearr_12126_12155[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12109 === 3))
{var inst_12106 = (state_12108[2]);var state_12108__$1 = state_12108;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12108__$1,inst_12106);
} else
{if((state_val_12109 === 12))
{var inst_12099 = (state_12108[2]);var state_12108__$1 = state_12108;var statearr_12127_12156 = state_12108__$1;(statearr_12127_12156[2] = inst_12099);
(statearr_12127_12156[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12109 === 2))
{var state_12108__$1 = state_12108;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12108__$1,4,in$);
} else
{if((state_val_12109 === 19))
{var inst_12094 = (state_12108[2]);var state_12108__$1 = state_12108;var statearr_12128_12157 = state_12108__$1;(statearr_12128_12157[2] = inst_12094);
(statearr_12128_12157[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12109 === 11))
{var inst_12079 = (state_12108[7]);var inst_12065 = (state_12108[9]);var inst_12079__$1 = cljs.core.seq.call(null,inst_12065);var state_12108__$1 = (function (){var statearr_12129 = state_12108;(statearr_12129[7] = inst_12079__$1);
return statearr_12129;
})();if(inst_12079__$1)
{var statearr_12130_12158 = state_12108__$1;(statearr_12130_12158[1] = 14);
} else
{var statearr_12131_12159 = state_12108__$1;(statearr_12131_12159[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12109 === 9))
{var inst_12101 = (state_12108[2]);var state_12108__$1 = (function (){var statearr_12132 = state_12108;(statearr_12132[15] = inst_12101);
return statearr_12132;
})();var statearr_12133_12160 = state_12108__$1;(statearr_12133_12160[2] = null);
(statearr_12133_12160[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12109 === 5))
{var inst_12057 = cljs.core.async.close_BANG_.call(null,out);var state_12108__$1 = state_12108;var statearr_12134_12161 = state_12108__$1;(statearr_12134_12161[2] = inst_12057);
(statearr_12134_12161[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12109 === 14))
{var inst_12079 = (state_12108[7]);var inst_12081 = cljs.core.chunked_seq_QMARK_.call(null,inst_12079);var state_12108__$1 = state_12108;if(inst_12081)
{var statearr_12135_12162 = state_12108__$1;(statearr_12135_12162[1] = 17);
} else
{var statearr_12136_12163 = state_12108__$1;(statearr_12136_12163[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12109 === 16))
{var inst_12097 = (state_12108[2]);var state_12108__$1 = state_12108;var statearr_12137_12164 = state_12108__$1;(statearr_12137_12164[2] = inst_12097);
(statearr_12137_12164[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12109 === 10))
{var inst_12068 = (state_12108[10]);var inst_12066 = (state_12108[11]);var inst_12073 = cljs.core._nth.call(null,inst_12066,inst_12068);var state_12108__$1 = state_12108;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12108__$1,13,out,inst_12073);
} else
{if((state_val_12109 === 18))
{var inst_12079 = (state_12108[7]);var inst_12088 = cljs.core.first.call(null,inst_12079);var state_12108__$1 = state_12108;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12108__$1,20,out,inst_12088);
} else
{if((state_val_12109 === 8))
{var inst_12067 = (state_12108[8]);var inst_12068 = (state_12108[10]);var inst_12070 = (inst_12068 < inst_12067);var inst_12071 = inst_12070;var state_12108__$1 = state_12108;if(cljs.core.truth_(inst_12071))
{var statearr_12138_12165 = state_12108__$1;(statearr_12138_12165[1] = 10);
} else
{var statearr_12139_12166 = state_12108__$1;(statearr_12139_12166[1] = 11);
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
});return ((function (switch__8452__auto__){
return (function() {
var state_machine__8454__auto__ = null;
var state_machine__8454__auto____0 = (function (){var statearr_12143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12143[0] = state_machine__8454__auto__);
(statearr_12143[1] = 1);
return statearr_12143;
});
var state_machine__8454__auto____1 = (function (state_12108){while(true){
var ret_value__8455__auto__ = (function (){try{while(true){
var result__8456__auto__ = switch__8452__auto__.call(null,state_12108);if(cljs.core.keyword_identical_QMARK_.call(null,result__8456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8456__auto__;
}
break;
}
}catch (e12144){if((e12144 instanceof Object))
{var ex__8457__auto__ = e12144;var statearr_12145_12167 = state_12108;(statearr_12145_12167[5] = ex__8457__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12108);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12144;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8455__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12168 = state_12108;
state_12108 = G__12168;
continue;
}
} else
{return ret_value__8455__auto__;
}
break;
}
});
state_machine__8454__auto__ = function(state_12108){
switch(arguments.length){
case 0:
return state_machine__8454__auto____0.call(this);
case 1:
return state_machine__8454__auto____1.call(this,state_12108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8454__auto____0;
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8454__auto____1;
return state_machine__8454__auto__;
})()
;})(switch__8452__auto__))
})();var state__8546__auto__ = (function (){var statearr_12146 = f__8545__auto__.call(null);(statearr_12146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8544__auto__);
return statearr_12146;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8546__auto__);
}));
return c__8544__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__8544__auto___12249 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8545__auto__ = (function (){var switch__8452__auto__ = (function (state_12228){var state_val_12229 = (state_12228[1]);if((state_val_12229 === 7))
{var inst_12224 = (state_12228[2]);var state_12228__$1 = state_12228;var statearr_12230_12250 = state_12228__$1;(statearr_12230_12250[2] = inst_12224);
(statearr_12230_12250[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12229 === 1))
{var state_12228__$1 = state_12228;var statearr_12231_12251 = state_12228__$1;(statearr_12231_12251[2] = null);
(statearr_12231_12251[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12229 === 4))
{var inst_12211 = (state_12228[7]);var inst_12211__$1 = (state_12228[2]);var inst_12212 = (inst_12211__$1 == null);var state_12228__$1 = (function (){var statearr_12232 = state_12228;(statearr_12232[7] = inst_12211__$1);
return statearr_12232;
})();if(cljs.core.truth_(inst_12212))
{var statearr_12233_12252 = state_12228__$1;(statearr_12233_12252[1] = 5);
} else
{var statearr_12234_12253 = state_12228__$1;(statearr_12234_12253[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12229 === 6))
{var inst_12211 = (state_12228[7]);var state_12228__$1 = state_12228;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12228__$1,11,to,inst_12211);
} else
{if((state_val_12229 === 3))
{var inst_12226 = (state_12228[2]);var state_12228__$1 = state_12228;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12228__$1,inst_12226);
} else
{if((state_val_12229 === 2))
{var state_12228__$1 = state_12228;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12228__$1,4,from);
} else
{if((state_val_12229 === 11))
{var inst_12221 = (state_12228[2]);var state_12228__$1 = (function (){var statearr_12235 = state_12228;(statearr_12235[8] = inst_12221);
return statearr_12235;
})();var statearr_12236_12254 = state_12228__$1;(statearr_12236_12254[2] = null);
(statearr_12236_12254[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12229 === 9))
{var state_12228__$1 = state_12228;var statearr_12237_12255 = state_12228__$1;(statearr_12237_12255[2] = null);
(statearr_12237_12255[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12229 === 5))
{var state_12228__$1 = state_12228;if(cljs.core.truth_(close_QMARK_))
{var statearr_12238_12256 = state_12228__$1;(statearr_12238_12256[1] = 8);
} else
{var statearr_12239_12257 = state_12228__$1;(statearr_12239_12257[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12229 === 10))
{var inst_12218 = (state_12228[2]);var state_12228__$1 = state_12228;var statearr_12240_12258 = state_12228__$1;(statearr_12240_12258[2] = inst_12218);
(statearr_12240_12258[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12229 === 8))
{var inst_12215 = cljs.core.async.close_BANG_.call(null,to);var state_12228__$1 = state_12228;var statearr_12241_12259 = state_12228__$1;(statearr_12241_12259[2] = inst_12215);
(statearr_12241_12259[1] = 10);
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
});return ((function (switch__8452__auto__){
return (function() {
var state_machine__8454__auto__ = null;
var state_machine__8454__auto____0 = (function (){var statearr_12245 = [null,null,null,null,null,null,null,null,null];(statearr_12245[0] = state_machine__8454__auto__);
(statearr_12245[1] = 1);
return statearr_12245;
});
var state_machine__8454__auto____1 = (function (state_12228){while(true){
var ret_value__8455__auto__ = (function (){try{while(true){
var result__8456__auto__ = switch__8452__auto__.call(null,state_12228);if(cljs.core.keyword_identical_QMARK_.call(null,result__8456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8456__auto__;
}
break;
}
}catch (e12246){if((e12246 instanceof Object))
{var ex__8457__auto__ = e12246;var statearr_12247_12260 = state_12228;(statearr_12247_12260[5] = ex__8457__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12228);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12246;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8455__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12261 = state_12228;
state_12228 = G__12261;
continue;
}
} else
{return ret_value__8455__auto__;
}
break;
}
});
state_machine__8454__auto__ = function(state_12228){
switch(arguments.length){
case 0:
return state_machine__8454__auto____0.call(this);
case 1:
return state_machine__8454__auto____1.call(this,state_12228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8454__auto____0;
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8454__auto____1;
return state_machine__8454__auto__;
})()
;})(switch__8452__auto__))
})();var state__8546__auto__ = (function (){var statearr_12248 = f__8545__auto__.call(null);(statearr_12248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8544__auto___12249);
return statearr_12248;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8546__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8544__auto___12348 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8545__auto__ = (function (){var switch__8452__auto__ = (function (state_12326){var state_val_12327 = (state_12326[1]);if((state_val_12327 === 7))
{var inst_12322 = (state_12326[2]);var state_12326__$1 = state_12326;var statearr_12328_12349 = state_12326__$1;(statearr_12328_12349[2] = inst_12322);
(statearr_12328_12349[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12327 === 1))
{var state_12326__$1 = state_12326;var statearr_12329_12350 = state_12326__$1;(statearr_12329_12350[2] = null);
(statearr_12329_12350[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12327 === 4))
{var inst_12307 = (state_12326[7]);var inst_12307__$1 = (state_12326[2]);var inst_12308 = (inst_12307__$1 == null);var state_12326__$1 = (function (){var statearr_12330 = state_12326;(statearr_12330[7] = inst_12307__$1);
return statearr_12330;
})();if(cljs.core.truth_(inst_12308))
{var statearr_12331_12351 = state_12326__$1;(statearr_12331_12351[1] = 5);
} else
{var statearr_12332_12352 = state_12326__$1;(statearr_12332_12352[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12327 === 6))
{var inst_12307 = (state_12326[7]);var inst_12313 = p.call(null,inst_12307);var state_12326__$1 = state_12326;if(cljs.core.truth_(inst_12313))
{var statearr_12333_12353 = state_12326__$1;(statearr_12333_12353[1] = 9);
} else
{var statearr_12334_12354 = state_12326__$1;(statearr_12334_12354[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12327 === 3))
{var inst_12324 = (state_12326[2]);var state_12326__$1 = state_12326;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12326__$1,inst_12324);
} else
{if((state_val_12327 === 2))
{var state_12326__$1 = state_12326;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12326__$1,4,ch);
} else
{if((state_val_12327 === 11))
{var inst_12307 = (state_12326[7]);var inst_12317 = (state_12326[2]);var state_12326__$1 = state_12326;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12326__$1,8,inst_12317,inst_12307);
} else
{if((state_val_12327 === 9))
{var state_12326__$1 = state_12326;var statearr_12335_12355 = state_12326__$1;(statearr_12335_12355[2] = tc);
(statearr_12335_12355[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12327 === 5))
{var inst_12310 = cljs.core.async.close_BANG_.call(null,tc);var inst_12311 = cljs.core.async.close_BANG_.call(null,fc);var state_12326__$1 = (function (){var statearr_12336 = state_12326;(statearr_12336[8] = inst_12310);
return statearr_12336;
})();var statearr_12337_12356 = state_12326__$1;(statearr_12337_12356[2] = inst_12311);
(statearr_12337_12356[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12327 === 10))
{var state_12326__$1 = state_12326;var statearr_12338_12357 = state_12326__$1;(statearr_12338_12357[2] = fc);
(statearr_12338_12357[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12327 === 8))
{var inst_12319 = (state_12326[2]);var state_12326__$1 = (function (){var statearr_12339 = state_12326;(statearr_12339[9] = inst_12319);
return statearr_12339;
})();var statearr_12340_12358 = state_12326__$1;(statearr_12340_12358[2] = null);
(statearr_12340_12358[1] = 2);
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
});return ((function (switch__8452__auto__){
return (function() {
var state_machine__8454__auto__ = null;
var state_machine__8454__auto____0 = (function (){var statearr_12344 = [null,null,null,null,null,null,null,null,null,null];(statearr_12344[0] = state_machine__8454__auto__);
(statearr_12344[1] = 1);
return statearr_12344;
});
var state_machine__8454__auto____1 = (function (state_12326){while(true){
var ret_value__8455__auto__ = (function (){try{while(true){
var result__8456__auto__ = switch__8452__auto__.call(null,state_12326);if(cljs.core.keyword_identical_QMARK_.call(null,result__8456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8456__auto__;
}
break;
}
}catch (e12345){if((e12345 instanceof Object))
{var ex__8457__auto__ = e12345;var statearr_12346_12359 = state_12326;(statearr_12346_12359[5] = ex__8457__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12326);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12345;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8455__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12360 = state_12326;
state_12326 = G__12360;
continue;
}
} else
{return ret_value__8455__auto__;
}
break;
}
});
state_machine__8454__auto__ = function(state_12326){
switch(arguments.length){
case 0:
return state_machine__8454__auto____0.call(this);
case 1:
return state_machine__8454__auto____1.call(this,state_12326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8454__auto____0;
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8454__auto____1;
return state_machine__8454__auto__;
})()
;})(switch__8452__auto__))
})();var state__8546__auto__ = (function (){var statearr_12347 = f__8545__auto__.call(null);(statearr_12347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8544__auto___12348);
return statearr_12347;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8546__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8544__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8545__auto__ = (function (){var switch__8452__auto__ = (function (state_12407){var state_val_12408 = (state_12407[1]);if((state_val_12408 === 7))
{var inst_12403 = (state_12407[2]);var state_12407__$1 = state_12407;var statearr_12409_12425 = state_12407__$1;(statearr_12409_12425[2] = inst_12403);
(statearr_12409_12425[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12408 === 6))
{var inst_12396 = (state_12407[7]);var inst_12393 = (state_12407[8]);var inst_12400 = f.call(null,inst_12393,inst_12396);var inst_12393__$1 = inst_12400;var state_12407__$1 = (function (){var statearr_12410 = state_12407;(statearr_12410[8] = inst_12393__$1);
return statearr_12410;
})();var statearr_12411_12426 = state_12407__$1;(statearr_12411_12426[2] = null);
(statearr_12411_12426[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12408 === 5))
{var inst_12393 = (state_12407[8]);var state_12407__$1 = state_12407;var statearr_12412_12427 = state_12407__$1;(statearr_12412_12427[2] = inst_12393);
(statearr_12412_12427[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12408 === 4))
{var inst_12396 = (state_12407[7]);var inst_12396__$1 = (state_12407[2]);var inst_12397 = (inst_12396__$1 == null);var state_12407__$1 = (function (){var statearr_12413 = state_12407;(statearr_12413[7] = inst_12396__$1);
return statearr_12413;
})();if(cljs.core.truth_(inst_12397))
{var statearr_12414_12428 = state_12407__$1;(statearr_12414_12428[1] = 5);
} else
{var statearr_12415_12429 = state_12407__$1;(statearr_12415_12429[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12408 === 3))
{var inst_12405 = (state_12407[2]);var state_12407__$1 = state_12407;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12407__$1,inst_12405);
} else
{if((state_val_12408 === 2))
{var state_12407__$1 = state_12407;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12407__$1,4,ch);
} else
{if((state_val_12408 === 1))
{var inst_12393 = init;var state_12407__$1 = (function (){var statearr_12416 = state_12407;(statearr_12416[8] = inst_12393);
return statearr_12416;
})();var statearr_12417_12430 = state_12407__$1;(statearr_12417_12430[2] = null);
(statearr_12417_12430[1] = 2);
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
});return ((function (switch__8452__auto__){
return (function() {
var state_machine__8454__auto__ = null;
var state_machine__8454__auto____0 = (function (){var statearr_12421 = [null,null,null,null,null,null,null,null,null];(statearr_12421[0] = state_machine__8454__auto__);
(statearr_12421[1] = 1);
return statearr_12421;
});
var state_machine__8454__auto____1 = (function (state_12407){while(true){
var ret_value__8455__auto__ = (function (){try{while(true){
var result__8456__auto__ = switch__8452__auto__.call(null,state_12407);if(cljs.core.keyword_identical_QMARK_.call(null,result__8456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8456__auto__;
}
break;
}
}catch (e12422){if((e12422 instanceof Object))
{var ex__8457__auto__ = e12422;var statearr_12423_12431 = state_12407;(statearr_12423_12431[5] = ex__8457__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12407);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12422;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8455__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12432 = state_12407;
state_12407 = G__12432;
continue;
}
} else
{return ret_value__8455__auto__;
}
break;
}
});
state_machine__8454__auto__ = function(state_12407){
switch(arguments.length){
case 0:
return state_machine__8454__auto____0.call(this);
case 1:
return state_machine__8454__auto____1.call(this,state_12407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8454__auto____0;
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8454__auto____1;
return state_machine__8454__auto__;
})()
;})(switch__8452__auto__))
})();var state__8546__auto__ = (function (){var statearr_12424 = f__8545__auto__.call(null);(statearr_12424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8544__auto__);
return statearr_12424;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8546__auto__);
}));
return c__8544__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8544__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8545__auto__ = (function (){var switch__8452__auto__ = (function (state_12494){var state_val_12495 = (state_12494[1]);if((state_val_12495 === 7))
{var inst_12475 = (state_12494[7]);var inst_12480 = (state_12494[2]);var inst_12481 = cljs.core.next.call(null,inst_12475);var inst_12475__$1 = inst_12481;var state_12494__$1 = (function (){var statearr_12496 = state_12494;(statearr_12496[7] = inst_12475__$1);
(statearr_12496[8] = inst_12480);
return statearr_12496;
})();var statearr_12497_12515 = state_12494__$1;(statearr_12497_12515[2] = null);
(statearr_12497_12515[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 1))
{var inst_12474 = cljs.core.seq.call(null,coll);var inst_12475 = inst_12474;var state_12494__$1 = (function (){var statearr_12498 = state_12494;(statearr_12498[7] = inst_12475);
return statearr_12498;
})();var statearr_12499_12516 = state_12494__$1;(statearr_12499_12516[2] = null);
(statearr_12499_12516[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 4))
{var inst_12475 = (state_12494[7]);var inst_12478 = cljs.core.first.call(null,inst_12475);var state_12494__$1 = state_12494;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12494__$1,7,ch,inst_12478);
} else
{if((state_val_12495 === 6))
{var inst_12490 = (state_12494[2]);var state_12494__$1 = state_12494;var statearr_12500_12517 = state_12494__$1;(statearr_12500_12517[2] = inst_12490);
(statearr_12500_12517[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 3))
{var inst_12492 = (state_12494[2]);var state_12494__$1 = state_12494;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12494__$1,inst_12492);
} else
{if((state_val_12495 === 2))
{var inst_12475 = (state_12494[7]);var state_12494__$1 = state_12494;if(cljs.core.truth_(inst_12475))
{var statearr_12501_12518 = state_12494__$1;(statearr_12501_12518[1] = 4);
} else
{var statearr_12502_12519 = state_12494__$1;(statearr_12502_12519[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 9))
{var state_12494__$1 = state_12494;var statearr_12503_12520 = state_12494__$1;(statearr_12503_12520[2] = null);
(statearr_12503_12520[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 5))
{var state_12494__$1 = state_12494;if(cljs.core.truth_(close_QMARK_))
{var statearr_12504_12521 = state_12494__$1;(statearr_12504_12521[1] = 8);
} else
{var statearr_12505_12522 = state_12494__$1;(statearr_12505_12522[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 10))
{var inst_12488 = (state_12494[2]);var state_12494__$1 = state_12494;var statearr_12506_12523 = state_12494__$1;(statearr_12506_12523[2] = inst_12488);
(statearr_12506_12523[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 8))
{var inst_12485 = cljs.core.async.close_BANG_.call(null,ch);var state_12494__$1 = state_12494;var statearr_12507_12524 = state_12494__$1;(statearr_12507_12524[2] = inst_12485);
(statearr_12507_12524[1] = 10);
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
});return ((function (switch__8452__auto__){
return (function() {
var state_machine__8454__auto__ = null;
var state_machine__8454__auto____0 = (function (){var statearr_12511 = [null,null,null,null,null,null,null,null,null];(statearr_12511[0] = state_machine__8454__auto__);
(statearr_12511[1] = 1);
return statearr_12511;
});
var state_machine__8454__auto____1 = (function (state_12494){while(true){
var ret_value__8455__auto__ = (function (){try{while(true){
var result__8456__auto__ = switch__8452__auto__.call(null,state_12494);if(cljs.core.keyword_identical_QMARK_.call(null,result__8456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8456__auto__;
}
break;
}
}catch (e12512){if((e12512 instanceof Object))
{var ex__8457__auto__ = e12512;var statearr_12513_12525 = state_12494;(statearr_12513_12525[5] = ex__8457__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12494);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12512;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8455__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12526 = state_12494;
state_12494 = G__12526;
continue;
}
} else
{return ret_value__8455__auto__;
}
break;
}
});
state_machine__8454__auto__ = function(state_12494){
switch(arguments.length){
case 0:
return state_machine__8454__auto____0.call(this);
case 1:
return state_machine__8454__auto____1.call(this,state_12494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8454__auto____0;
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8454__auto____1;
return state_machine__8454__auto__;
})()
;})(switch__8452__auto__))
})();var state__8546__auto__ = (function (){var statearr_12514 = f__8545__auto__.call(null);(statearr_12514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8544__auto__);
return statearr_12514;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8546__auto__);
}));
return c__8544__auto__;
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
cljs.core.async.Mux = (function (){var obj12528 = {};return obj12528;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__5622__auto__ = _;if(and__5622__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__5622__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__6261__auto__ = (((_ == null))?null:_);return (function (){var or__5634__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6261__auto__)]);if(or__5634__auto__)
{return or__5634__auto__;
} else
{var or__5634__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__5634__auto____$1)
{return or__5634__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12530 = {};return obj12530;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__5622__auto__ = m;if(and__5622__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__5622__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__6261__auto__ = (((m == null))?null:m);return (function (){var or__5634__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6261__auto__)]);if(or__5634__auto__)
{return or__5634__auto__;
} else
{var or__5634__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__5634__auto____$1)
{return or__5634__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__5622__auto__ = m;if(and__5622__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__5622__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__6261__auto__ = (((m == null))?null:m);return (function (){var or__5634__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6261__auto__)]);if(or__5634__auto__)
{return or__5634__auto__;
} else
{var or__5634__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__5634__auto____$1)
{return or__5634__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__5622__auto__ = m;if(and__5622__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__5622__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__6261__auto__ = (((m == null))?null:m);return (function (){var or__5634__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6261__auto__)]);if(or__5634__auto__)
{return or__5634__auto__;
} else
{var or__5634__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__5634__auto____$1)
{return or__5634__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12754 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12754 = (function (cs,ch,mult,meta12755){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12755 = meta12755;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12754.cljs$lang$type = true;
cljs.core.async.t12754.cljs$lang$ctorStr = "cljs.core.async/t12754";
cljs.core.async.t12754.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6201__auto__,writer__6202__auto__,opt__6203__auto__){return cljs.core._write.call(null,writer__6202__auto__,"cljs.core.async/t12754");
});})(cs))
;
cljs.core.async.t12754.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12754.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12754.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12754.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12754.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12754.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12754.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12756){var self__ = this;
var _12756__$1 = this;return self__.meta12755;
});})(cs))
;
cljs.core.async.t12754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12756,meta12755__$1){var self__ = this;
var _12756__$1 = this;return (new cljs.core.async.t12754(self__.cs,self__.ch,self__.mult,meta12755__$1));
});})(cs))
;
cljs.core.async.__GT_t12754 = ((function (cs){
return (function __GT_t12754(cs__$1,ch__$1,mult__$1,meta12755){return (new cljs.core.async.t12754(cs__$1,ch__$1,mult__$1,meta12755));
});})(cs))
;
}
return (new cljs.core.async.t12754(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8544__auto___12977 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8545__auto__ = (function (){var switch__8452__auto__ = (function (state_12891){var state_val_12892 = (state_12891[1]);if((state_val_12892 === 7))
{var inst_12887 = (state_12891[2]);var state_12891__$1 = state_12891;var statearr_12893_12978 = state_12891__$1;(statearr_12893_12978[2] = inst_12887);
(statearr_12893_12978[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 20))
{var inst_12788 = (state_12891[7]);var inst_12798 = cljs.core.first.call(null,inst_12788);var inst_12799 = cljs.core.nth.call(null,inst_12798,0,null);var inst_12800 = cljs.core.nth.call(null,inst_12798,1,null);var state_12891__$1 = (function (){var statearr_12894 = state_12891;(statearr_12894[8] = inst_12799);
return statearr_12894;
})();if(cljs.core.truth_(inst_12800))
{var statearr_12895_12979 = state_12891__$1;(statearr_12895_12979[1] = 22);
} else
{var statearr_12896_12980 = state_12891__$1;(statearr_12896_12980[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 27))
{var inst_12828 = (state_12891[9]);var inst_12830 = (state_12891[10]);var inst_12835 = cljs.core._nth.call(null,inst_12828,inst_12830);var state_12891__$1 = (function (){var statearr_12897 = state_12891;(statearr_12897[11] = inst_12835);
return statearr_12897;
})();var statearr_12898_12981 = state_12891__$1;(statearr_12898_12981[2] = null);
(statearr_12898_12981[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 1))
{var state_12891__$1 = state_12891;var statearr_12899_12982 = state_12891__$1;(statearr_12899_12982[2] = null);
(statearr_12899_12982[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 24))
{var inst_12788 = (state_12891[7]);var inst_12805 = (state_12891[2]);var inst_12806 = cljs.core.next.call(null,inst_12788);var inst_12768 = inst_12806;var inst_12769 = null;var inst_12770 = 0;var inst_12771 = 0;var state_12891__$1 = (function (){var statearr_12900 = state_12891;(statearr_12900[12] = inst_12770);
(statearr_12900[13] = inst_12805);
(statearr_12900[14] = inst_12768);
(statearr_12900[15] = inst_12771);
(statearr_12900[16] = inst_12769);
return statearr_12900;
})();var statearr_12901_12983 = state_12891__$1;(statearr_12901_12983[2] = null);
(statearr_12901_12983[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 39))
{var inst_12848 = (state_12891[17]);var inst_12866 = (state_12891[2]);var inst_12867 = cljs.core.next.call(null,inst_12848);var inst_12827 = inst_12867;var inst_12828 = null;var inst_12829 = 0;var inst_12830 = 0;var state_12891__$1 = (function (){var statearr_12905 = state_12891;(statearr_12905[18] = inst_12827);
(statearr_12905[19] = inst_12829);
(statearr_12905[9] = inst_12828);
(statearr_12905[20] = inst_12866);
(statearr_12905[10] = inst_12830);
return statearr_12905;
})();var statearr_12906_12984 = state_12891__$1;(statearr_12906_12984[2] = null);
(statearr_12906_12984[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 4))
{var inst_12759 = (state_12891[21]);var inst_12759__$1 = (state_12891[2]);var inst_12760 = (inst_12759__$1 == null);var state_12891__$1 = (function (){var statearr_12907 = state_12891;(statearr_12907[21] = inst_12759__$1);
return statearr_12907;
})();if(cljs.core.truth_(inst_12760))
{var statearr_12908_12985 = state_12891__$1;(statearr_12908_12985[1] = 5);
} else
{var statearr_12909_12986 = state_12891__$1;(statearr_12909_12986[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 15))
{var inst_12770 = (state_12891[12]);var inst_12768 = (state_12891[14]);var inst_12771 = (state_12891[15]);var inst_12769 = (state_12891[16]);var inst_12784 = (state_12891[2]);var inst_12785 = (inst_12771 + 1);var tmp12902 = inst_12770;var tmp12903 = inst_12768;var tmp12904 = inst_12769;var inst_12768__$1 = tmp12903;var inst_12769__$1 = tmp12904;var inst_12770__$1 = tmp12902;var inst_12771__$1 = inst_12785;var state_12891__$1 = (function (){var statearr_12910 = state_12891;(statearr_12910[12] = inst_12770__$1);
(statearr_12910[14] = inst_12768__$1);
(statearr_12910[15] = inst_12771__$1);
(statearr_12910[16] = inst_12769__$1);
(statearr_12910[22] = inst_12784);
return statearr_12910;
})();var statearr_12911_12987 = state_12891__$1;(statearr_12911_12987[2] = null);
(statearr_12911_12987[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 21))
{var inst_12809 = (state_12891[2]);var state_12891__$1 = state_12891;var statearr_12912_12988 = state_12891__$1;(statearr_12912_12988[2] = inst_12809);
(statearr_12912_12988[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 31))
{var inst_12835 = (state_12891[11]);var inst_12836 = (state_12891[2]);var inst_12837 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12838 = cljs.core.async.untap_STAR_.call(null,m,inst_12835);var state_12891__$1 = (function (){var statearr_12913 = state_12891;(statearr_12913[23] = inst_12836);
(statearr_12913[24] = inst_12837);
return statearr_12913;
})();var statearr_12914_12989 = state_12891__$1;(statearr_12914_12989[2] = inst_12838);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12891__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 32))
{var inst_12835 = (state_12891[11]);var inst_12759 = (state_12891[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12891,31,Object,null,30);var inst_12842 = cljs.core.async.put_BANG_.call(null,inst_12835,inst_12759,done);var state_12891__$1 = state_12891;var statearr_12915_12990 = state_12891__$1;(statearr_12915_12990[2] = inst_12842);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12891__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 40))
{var inst_12857 = (state_12891[25]);var inst_12858 = (state_12891[2]);var inst_12859 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12860 = cljs.core.async.untap_STAR_.call(null,m,inst_12857);var state_12891__$1 = (function (){var statearr_12916 = state_12891;(statearr_12916[26] = inst_12858);
(statearr_12916[27] = inst_12859);
return statearr_12916;
})();var statearr_12917_12991 = state_12891__$1;(statearr_12917_12991[2] = inst_12860);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12891__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 33))
{var inst_12848 = (state_12891[17]);var inst_12850 = cljs.core.chunked_seq_QMARK_.call(null,inst_12848);var state_12891__$1 = state_12891;if(inst_12850)
{var statearr_12918_12992 = state_12891__$1;(statearr_12918_12992[1] = 36);
} else
{var statearr_12919_12993 = state_12891__$1;(statearr_12919_12993[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 13))
{var inst_12778 = (state_12891[28]);var inst_12781 = cljs.core.async.close_BANG_.call(null,inst_12778);var state_12891__$1 = state_12891;var statearr_12920_12994 = state_12891__$1;(statearr_12920_12994[2] = inst_12781);
(statearr_12920_12994[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 22))
{var inst_12799 = (state_12891[8]);var inst_12802 = cljs.core.async.close_BANG_.call(null,inst_12799);var state_12891__$1 = state_12891;var statearr_12921_12995 = state_12891__$1;(statearr_12921_12995[2] = inst_12802);
(statearr_12921_12995[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 36))
{var inst_12848 = (state_12891[17]);var inst_12852 = cljs.core.chunk_first.call(null,inst_12848);var inst_12853 = cljs.core.chunk_rest.call(null,inst_12848);var inst_12854 = cljs.core.count.call(null,inst_12852);var inst_12827 = inst_12853;var inst_12828 = inst_12852;var inst_12829 = inst_12854;var inst_12830 = 0;var state_12891__$1 = (function (){var statearr_12922 = state_12891;(statearr_12922[18] = inst_12827);
(statearr_12922[19] = inst_12829);
(statearr_12922[9] = inst_12828);
(statearr_12922[10] = inst_12830);
return statearr_12922;
})();var statearr_12923_12996 = state_12891__$1;(statearr_12923_12996[2] = null);
(statearr_12923_12996[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 41))
{var inst_12857 = (state_12891[25]);var inst_12759 = (state_12891[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12891,40,Object,null,39);var inst_12864 = cljs.core.async.put_BANG_.call(null,inst_12857,inst_12759,done);var state_12891__$1 = state_12891;var statearr_12924_12997 = state_12891__$1;(statearr_12924_12997[2] = inst_12864);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12891__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 43))
{var state_12891__$1 = state_12891;var statearr_12925_12998 = state_12891__$1;(statearr_12925_12998[2] = null);
(statearr_12925_12998[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 29))
{var inst_12875 = (state_12891[2]);var state_12891__$1 = state_12891;var statearr_12926_12999 = state_12891__$1;(statearr_12926_12999[2] = inst_12875);
(statearr_12926_12999[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 44))
{var inst_12884 = (state_12891[2]);var state_12891__$1 = (function (){var statearr_12927 = state_12891;(statearr_12927[29] = inst_12884);
return statearr_12927;
})();var statearr_12928_13000 = state_12891__$1;(statearr_12928_13000[2] = null);
(statearr_12928_13000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 6))
{var inst_12819 = (state_12891[30]);var inst_12818 = cljs.core.deref.call(null,cs);var inst_12819__$1 = cljs.core.keys.call(null,inst_12818);var inst_12820 = cljs.core.count.call(null,inst_12819__$1);var inst_12821 = cljs.core.reset_BANG_.call(null,dctr,inst_12820);var inst_12826 = cljs.core.seq.call(null,inst_12819__$1);var inst_12827 = inst_12826;var inst_12828 = null;var inst_12829 = 0;var inst_12830 = 0;var state_12891__$1 = (function (){var statearr_12929 = state_12891;(statearr_12929[18] = inst_12827);
(statearr_12929[31] = inst_12821);
(statearr_12929[19] = inst_12829);
(statearr_12929[30] = inst_12819__$1);
(statearr_12929[9] = inst_12828);
(statearr_12929[10] = inst_12830);
return statearr_12929;
})();var statearr_12930_13001 = state_12891__$1;(statearr_12930_13001[2] = null);
(statearr_12930_13001[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 28))
{var inst_12827 = (state_12891[18]);var inst_12848 = (state_12891[17]);var inst_12848__$1 = cljs.core.seq.call(null,inst_12827);var state_12891__$1 = (function (){var statearr_12931 = state_12891;(statearr_12931[17] = inst_12848__$1);
return statearr_12931;
})();if(inst_12848__$1)
{var statearr_12932_13002 = state_12891__$1;(statearr_12932_13002[1] = 33);
} else
{var statearr_12933_13003 = state_12891__$1;(statearr_12933_13003[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 25))
{var inst_12829 = (state_12891[19]);var inst_12830 = (state_12891[10]);var inst_12832 = (inst_12830 < inst_12829);var inst_12833 = inst_12832;var state_12891__$1 = state_12891;if(cljs.core.truth_(inst_12833))
{var statearr_12934_13004 = state_12891__$1;(statearr_12934_13004[1] = 27);
} else
{var statearr_12935_13005 = state_12891__$1;(statearr_12935_13005[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 34))
{var state_12891__$1 = state_12891;var statearr_12936_13006 = state_12891__$1;(statearr_12936_13006[2] = null);
(statearr_12936_13006[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 17))
{var state_12891__$1 = state_12891;var statearr_12937_13007 = state_12891__$1;(statearr_12937_13007[2] = null);
(statearr_12937_13007[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 3))
{var inst_12889 = (state_12891[2]);var state_12891__$1 = state_12891;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12891__$1,inst_12889);
} else
{if((state_val_12892 === 12))
{var inst_12814 = (state_12891[2]);var state_12891__$1 = state_12891;var statearr_12938_13008 = state_12891__$1;(statearr_12938_13008[2] = inst_12814);
(statearr_12938_13008[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 2))
{var state_12891__$1 = state_12891;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12891__$1,4,ch);
} else
{if((state_val_12892 === 23))
{var state_12891__$1 = state_12891;var statearr_12939_13009 = state_12891__$1;(statearr_12939_13009[2] = null);
(statearr_12939_13009[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 35))
{var inst_12873 = (state_12891[2]);var state_12891__$1 = state_12891;var statearr_12940_13010 = state_12891__$1;(statearr_12940_13010[2] = inst_12873);
(statearr_12940_13010[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 19))
{var inst_12788 = (state_12891[7]);var inst_12792 = cljs.core.chunk_first.call(null,inst_12788);var inst_12793 = cljs.core.chunk_rest.call(null,inst_12788);var inst_12794 = cljs.core.count.call(null,inst_12792);var inst_12768 = inst_12793;var inst_12769 = inst_12792;var inst_12770 = inst_12794;var inst_12771 = 0;var state_12891__$1 = (function (){var statearr_12941 = state_12891;(statearr_12941[12] = inst_12770);
(statearr_12941[14] = inst_12768);
(statearr_12941[15] = inst_12771);
(statearr_12941[16] = inst_12769);
return statearr_12941;
})();var statearr_12942_13011 = state_12891__$1;(statearr_12942_13011[2] = null);
(statearr_12942_13011[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 11))
{var inst_12768 = (state_12891[14]);var inst_12788 = (state_12891[7]);var inst_12788__$1 = cljs.core.seq.call(null,inst_12768);var state_12891__$1 = (function (){var statearr_12943 = state_12891;(statearr_12943[7] = inst_12788__$1);
return statearr_12943;
})();if(inst_12788__$1)
{var statearr_12944_13012 = state_12891__$1;(statearr_12944_13012[1] = 16);
} else
{var statearr_12945_13013 = state_12891__$1;(statearr_12945_13013[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 9))
{var inst_12816 = (state_12891[2]);var state_12891__$1 = state_12891;var statearr_12946_13014 = state_12891__$1;(statearr_12946_13014[2] = inst_12816);
(statearr_12946_13014[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 5))
{var inst_12766 = cljs.core.deref.call(null,cs);var inst_12767 = cljs.core.seq.call(null,inst_12766);var inst_12768 = inst_12767;var inst_12769 = null;var inst_12770 = 0;var inst_12771 = 0;var state_12891__$1 = (function (){var statearr_12947 = state_12891;(statearr_12947[12] = inst_12770);
(statearr_12947[14] = inst_12768);
(statearr_12947[15] = inst_12771);
(statearr_12947[16] = inst_12769);
return statearr_12947;
})();var statearr_12948_13015 = state_12891__$1;(statearr_12948_13015[2] = null);
(statearr_12948_13015[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 14))
{var state_12891__$1 = state_12891;var statearr_12949_13016 = state_12891__$1;(statearr_12949_13016[2] = null);
(statearr_12949_13016[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 45))
{var inst_12881 = (state_12891[2]);var state_12891__$1 = state_12891;var statearr_12950_13017 = state_12891__$1;(statearr_12950_13017[2] = inst_12881);
(statearr_12950_13017[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 26))
{var inst_12819 = (state_12891[30]);var inst_12877 = (state_12891[2]);var inst_12878 = cljs.core.seq.call(null,inst_12819);var state_12891__$1 = (function (){var statearr_12951 = state_12891;(statearr_12951[32] = inst_12877);
return statearr_12951;
})();if(inst_12878)
{var statearr_12952_13018 = state_12891__$1;(statearr_12952_13018[1] = 42);
} else
{var statearr_12953_13019 = state_12891__$1;(statearr_12953_13019[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 16))
{var inst_12788 = (state_12891[7]);var inst_12790 = cljs.core.chunked_seq_QMARK_.call(null,inst_12788);var state_12891__$1 = state_12891;if(inst_12790)
{var statearr_12957_13020 = state_12891__$1;(statearr_12957_13020[1] = 19);
} else
{var statearr_12958_13021 = state_12891__$1;(statearr_12958_13021[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 38))
{var inst_12870 = (state_12891[2]);var state_12891__$1 = state_12891;var statearr_12959_13022 = state_12891__$1;(statearr_12959_13022[2] = inst_12870);
(statearr_12959_13022[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 30))
{var inst_12827 = (state_12891[18]);var inst_12829 = (state_12891[19]);var inst_12828 = (state_12891[9]);var inst_12830 = (state_12891[10]);var inst_12844 = (state_12891[2]);var inst_12845 = (inst_12830 + 1);var tmp12954 = inst_12827;var tmp12955 = inst_12829;var tmp12956 = inst_12828;var inst_12827__$1 = tmp12954;var inst_12828__$1 = tmp12956;var inst_12829__$1 = tmp12955;var inst_12830__$1 = inst_12845;var state_12891__$1 = (function (){var statearr_12960 = state_12891;(statearr_12960[18] = inst_12827__$1);
(statearr_12960[33] = inst_12844);
(statearr_12960[19] = inst_12829__$1);
(statearr_12960[9] = inst_12828__$1);
(statearr_12960[10] = inst_12830__$1);
return statearr_12960;
})();var statearr_12961_13023 = state_12891__$1;(statearr_12961_13023[2] = null);
(statearr_12961_13023[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 10))
{var inst_12771 = (state_12891[15]);var inst_12769 = (state_12891[16]);var inst_12777 = cljs.core._nth.call(null,inst_12769,inst_12771);var inst_12778 = cljs.core.nth.call(null,inst_12777,0,null);var inst_12779 = cljs.core.nth.call(null,inst_12777,1,null);var state_12891__$1 = (function (){var statearr_12962 = state_12891;(statearr_12962[28] = inst_12778);
return statearr_12962;
})();if(cljs.core.truth_(inst_12779))
{var statearr_12963_13024 = state_12891__$1;(statearr_12963_13024[1] = 13);
} else
{var statearr_12964_13025 = state_12891__$1;(statearr_12964_13025[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 18))
{var inst_12812 = (state_12891[2]);var state_12891__$1 = state_12891;var statearr_12965_13026 = state_12891__$1;(statearr_12965_13026[2] = inst_12812);
(statearr_12965_13026[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 42))
{var state_12891__$1 = state_12891;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12891__$1,45,dchan);
} else
{if((state_val_12892 === 37))
{var inst_12848 = (state_12891[17]);var inst_12857 = cljs.core.first.call(null,inst_12848);var state_12891__$1 = (function (){var statearr_12966 = state_12891;(statearr_12966[25] = inst_12857);
return statearr_12966;
})();var statearr_12967_13027 = state_12891__$1;(statearr_12967_13027[2] = null);
(statearr_12967_13027[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12892 === 8))
{var inst_12770 = (state_12891[12]);var inst_12771 = (state_12891[15]);var inst_12773 = (inst_12771 < inst_12770);var inst_12774 = inst_12773;var state_12891__$1 = state_12891;if(cljs.core.truth_(inst_12774))
{var statearr_12968_13028 = state_12891__$1;(statearr_12968_13028[1] = 10);
} else
{var statearr_12969_13029 = state_12891__$1;(statearr_12969_13029[1] = 11);
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
});return ((function (switch__8452__auto__){
return (function() {
var state_machine__8454__auto__ = null;
var state_machine__8454__auto____0 = (function (){var statearr_12973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12973[0] = state_machine__8454__auto__);
(statearr_12973[1] = 1);
return statearr_12973;
});
var state_machine__8454__auto____1 = (function (state_12891){while(true){
var ret_value__8455__auto__ = (function (){try{while(true){
var result__8456__auto__ = switch__8452__auto__.call(null,state_12891);if(cljs.core.keyword_identical_QMARK_.call(null,result__8456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8456__auto__;
}
break;
}
}catch (e12974){if((e12974 instanceof Object))
{var ex__8457__auto__ = e12974;var statearr_12975_13030 = state_12891;(statearr_12975_13030[5] = ex__8457__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12891);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12974;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8455__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13031 = state_12891;
state_12891 = G__13031;
continue;
}
} else
{return ret_value__8455__auto__;
}
break;
}
});
state_machine__8454__auto__ = function(state_12891){
switch(arguments.length){
case 0:
return state_machine__8454__auto____0.call(this);
case 1:
return state_machine__8454__auto____1.call(this,state_12891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8454__auto____0;
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8454__auto____1;
return state_machine__8454__auto__;
})()
;})(switch__8452__auto__))
})();var state__8546__auto__ = (function (){var statearr_12976 = f__8545__auto__.call(null);(statearr_12976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8544__auto___12977);
return statearr_12976;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8546__auto__);
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
cljs.core.async.Mix = (function (){var obj13033 = {};return obj13033;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__5622__auto__ = m;if(and__5622__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__5622__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__6261__auto__ = (((m == null))?null:m);return (function (){var or__5634__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6261__auto__)]);if(or__5634__auto__)
{return or__5634__auto__;
} else
{var or__5634__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__5634__auto____$1)
{return or__5634__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__5622__auto__ = m;if(and__5622__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__5622__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__6261__auto__ = (((m == null))?null:m);return (function (){var or__5634__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6261__auto__)]);if(or__5634__auto__)
{return or__5634__auto__;
} else
{var or__5634__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__5634__auto____$1)
{return or__5634__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__5622__auto__ = m;if(and__5622__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__5622__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__6261__auto__ = (((m == null))?null:m);return (function (){var or__5634__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6261__auto__)]);if(or__5634__auto__)
{return or__5634__auto__;
} else
{var or__5634__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__5634__auto____$1)
{return or__5634__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__5622__auto__ = m;if(and__5622__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__5622__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__6261__auto__ = (((m == null))?null:m);return (function (){var or__5634__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6261__auto__)]);if(or__5634__auto__)
{return or__5634__auto__;
} else
{var or__5634__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__5634__auto____$1)
{return or__5634__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__5622__auto__ = m;if(and__5622__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__5622__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__6261__auto__ = (((m == null))?null:m);return (function (){var or__5634__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6261__auto__)]);if(or__5634__auto__)
{return or__5634__auto__;
} else
{var or__5634__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__5634__auto____$1)
{return or__5634__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t13143 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13143 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13144){
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
this.meta13144 = meta13144;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13143.cljs$lang$type = true;
cljs.core.async.t13143.cljs$lang$ctorStr = "cljs.core.async/t13143";
cljs.core.async.t13143.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6201__auto__,writer__6202__auto__,opt__6203__auto__){return cljs.core._write.call(null,writer__6202__auto__,"cljs.core.async/t13143");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13143.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13143.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13143.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13143.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13143.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13143.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13143.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13143.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13143.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13145){var self__ = this;
var _13145__$1 = this;return self__.meta13144;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13145,meta13144__$1){var self__ = this;
var _13145__$1 = this;return (new cljs.core.async.t13143(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13144__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13143 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13143(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13144){return (new cljs.core.async.t13143(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13144));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13143(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__8544__auto___13252 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8545__auto__ = (function (){var switch__8452__auto__ = (function (state_13210){var state_val_13211 = (state_13210[1]);if((state_val_13211 === 7))
{var inst_13159 = (state_13210[7]);var inst_13164 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13159);var state_13210__$1 = state_13210;var statearr_13212_13253 = state_13210__$1;(statearr_13212_13253[2] = inst_13164);
(statearr_13212_13253[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13211 === 20))
{var inst_13174 = (state_13210[8]);var state_13210__$1 = state_13210;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13210__$1,23,out,inst_13174);
} else
{if((state_val_13211 === 1))
{var inst_13149 = (state_13210[9]);var inst_13149__$1 = calc_state.call(null);var inst_13150 = cljs.core.seq_QMARK_.call(null,inst_13149__$1);var state_13210__$1 = (function (){var statearr_13213 = state_13210;(statearr_13213[9] = inst_13149__$1);
return statearr_13213;
})();if(inst_13150)
{var statearr_13214_13254 = state_13210__$1;(statearr_13214_13254[1] = 2);
} else
{var statearr_13215_13255 = state_13210__$1;(statearr_13215_13255[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13211 === 4))
{var inst_13149 = (state_13210[9]);var inst_13155 = (state_13210[2]);var inst_13156 = cljs.core.get.call(null,inst_13155,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13157 = cljs.core.get.call(null,inst_13155,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13158 = cljs.core.get.call(null,inst_13155,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13159 = inst_13149;var state_13210__$1 = (function (){var statearr_13216 = state_13210;(statearr_13216[7] = inst_13159);
(statearr_13216[10] = inst_13156);
(statearr_13216[11] = inst_13157);
(statearr_13216[12] = inst_13158);
return statearr_13216;
})();var statearr_13217_13256 = state_13210__$1;(statearr_13217_13256[2] = null);
(statearr_13217_13256[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13211 === 15))
{var state_13210__$1 = state_13210;var statearr_13218_13257 = state_13210__$1;(statearr_13218_13257[2] = null);
(statearr_13218_13257[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13211 === 21))
{var state_13210__$1 = state_13210;var statearr_13219_13258 = state_13210__$1;(statearr_13219_13258[2] = null);
(statearr_13219_13258[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13211 === 13))
{var inst_13206 = (state_13210[2]);var state_13210__$1 = state_13210;var statearr_13220_13259 = state_13210__$1;(statearr_13220_13259[2] = inst_13206);
(statearr_13220_13259[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13211 === 22))
{var inst_13167 = (state_13210[13]);var inst_13203 = (state_13210[2]);var inst_13159 = inst_13167;var state_13210__$1 = (function (){var statearr_13221 = state_13210;(statearr_13221[7] = inst_13159);
(statearr_13221[14] = inst_13203);
return statearr_13221;
})();var statearr_13222_13260 = state_13210__$1;(statearr_13222_13260[2] = null);
(statearr_13222_13260[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13211 === 6))
{var inst_13208 = (state_13210[2]);var state_13210__$1 = state_13210;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13210__$1,inst_13208);
} else
{if((state_val_13211 === 17))
{var inst_13189 = (state_13210[15]);var state_13210__$1 = state_13210;var statearr_13223_13261 = state_13210__$1;(statearr_13223_13261[2] = inst_13189);
(statearr_13223_13261[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13211 === 3))
{var inst_13149 = (state_13210[9]);var state_13210__$1 = state_13210;var statearr_13224_13262 = state_13210__$1;(statearr_13224_13262[2] = inst_13149);
(statearr_13224_13262[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13211 === 12))
{var inst_13189 = (state_13210[15]);var inst_13175 = (state_13210[16]);var inst_13170 = (state_13210[17]);var inst_13189__$1 = inst_13170.call(null,inst_13175);var state_13210__$1 = (function (){var statearr_13225 = state_13210;(statearr_13225[15] = inst_13189__$1);
return statearr_13225;
})();if(cljs.core.truth_(inst_13189__$1))
{var statearr_13226_13263 = state_13210__$1;(statearr_13226_13263[1] = 17);
} else
{var statearr_13227_13264 = state_13210__$1;(statearr_13227_13264[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13211 === 2))
{var inst_13149 = (state_13210[9]);var inst_13152 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13149);var state_13210__$1 = state_13210;var statearr_13228_13265 = state_13210__$1;(statearr_13228_13265[2] = inst_13152);
(statearr_13228_13265[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13211 === 23))
{var inst_13200 = (state_13210[2]);var state_13210__$1 = state_13210;var statearr_13229_13266 = state_13210__$1;(statearr_13229_13266[2] = inst_13200);
(statearr_13229_13266[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13211 === 19))
{var inst_13197 = (state_13210[2]);var state_13210__$1 = state_13210;if(cljs.core.truth_(inst_13197))
{var statearr_13230_13267 = state_13210__$1;(statearr_13230_13267[1] = 20);
} else
{var statearr_13231_13268 = state_13210__$1;(statearr_13231_13268[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13211 === 11))
{var inst_13174 = (state_13210[8]);var inst_13180 = (inst_13174 == null);var state_13210__$1 = state_13210;if(cljs.core.truth_(inst_13180))
{var statearr_13232_13269 = state_13210__$1;(statearr_13232_13269[1] = 14);
} else
{var statearr_13233_13270 = state_13210__$1;(statearr_13233_13270[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13211 === 9))
{var inst_13167 = (state_13210[13]);var inst_13167__$1 = (state_13210[2]);var inst_13168 = cljs.core.get.call(null,inst_13167__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13169 = cljs.core.get.call(null,inst_13167__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13170 = cljs.core.get.call(null,inst_13167__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13210__$1 = (function (){var statearr_13234 = state_13210;(statearr_13234[13] = inst_13167__$1);
(statearr_13234[18] = inst_13169);
(statearr_13234[17] = inst_13170);
return statearr_13234;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13210__$1,10,inst_13168);
} else
{if((state_val_13211 === 5))
{var inst_13159 = (state_13210[7]);var inst_13162 = cljs.core.seq_QMARK_.call(null,inst_13159);var state_13210__$1 = state_13210;if(inst_13162)
{var statearr_13235_13271 = state_13210__$1;(statearr_13235_13271[1] = 7);
} else
{var statearr_13236_13272 = state_13210__$1;(statearr_13236_13272[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13211 === 14))
{var inst_13175 = (state_13210[16]);var inst_13182 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13175);var state_13210__$1 = state_13210;var statearr_13237_13273 = state_13210__$1;(statearr_13237_13273[2] = inst_13182);
(statearr_13237_13273[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13211 === 16))
{var inst_13185 = (state_13210[2]);var inst_13186 = calc_state.call(null);var inst_13159 = inst_13186;var state_13210__$1 = (function (){var statearr_13238 = state_13210;(statearr_13238[7] = inst_13159);
(statearr_13238[19] = inst_13185);
return statearr_13238;
})();var statearr_13239_13274 = state_13210__$1;(statearr_13239_13274[2] = null);
(statearr_13239_13274[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13211 === 10))
{var inst_13174 = (state_13210[8]);var inst_13175 = (state_13210[16]);var inst_13173 = (state_13210[2]);var inst_13174__$1 = cljs.core.nth.call(null,inst_13173,0,null);var inst_13175__$1 = cljs.core.nth.call(null,inst_13173,1,null);var inst_13176 = (inst_13174__$1 == null);var inst_13177 = cljs.core._EQ_.call(null,inst_13175__$1,change);var inst_13178 = (inst_13176) || (inst_13177);var state_13210__$1 = (function (){var statearr_13240 = state_13210;(statearr_13240[8] = inst_13174__$1);
(statearr_13240[16] = inst_13175__$1);
return statearr_13240;
})();if(cljs.core.truth_(inst_13178))
{var statearr_13241_13275 = state_13210__$1;(statearr_13241_13275[1] = 11);
} else
{var statearr_13242_13276 = state_13210__$1;(statearr_13242_13276[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13211 === 18))
{var inst_13169 = (state_13210[18]);var inst_13175 = (state_13210[16]);var inst_13170 = (state_13210[17]);var inst_13192 = cljs.core.empty_QMARK_.call(null,inst_13170);var inst_13193 = inst_13169.call(null,inst_13175);var inst_13194 = cljs.core.not.call(null,inst_13193);var inst_13195 = (inst_13192) && (inst_13194);var state_13210__$1 = state_13210;var statearr_13243_13277 = state_13210__$1;(statearr_13243_13277[2] = inst_13195);
(statearr_13243_13277[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13211 === 8))
{var inst_13159 = (state_13210[7]);var state_13210__$1 = state_13210;var statearr_13244_13278 = state_13210__$1;(statearr_13244_13278[2] = inst_13159);
(statearr_13244_13278[1] = 9);
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
});return ((function (switch__8452__auto__){
return (function() {
var state_machine__8454__auto__ = null;
var state_machine__8454__auto____0 = (function (){var statearr_13248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13248[0] = state_machine__8454__auto__);
(statearr_13248[1] = 1);
return statearr_13248;
});
var state_machine__8454__auto____1 = (function (state_13210){while(true){
var ret_value__8455__auto__ = (function (){try{while(true){
var result__8456__auto__ = switch__8452__auto__.call(null,state_13210);if(cljs.core.keyword_identical_QMARK_.call(null,result__8456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8456__auto__;
}
break;
}
}catch (e13249){if((e13249 instanceof Object))
{var ex__8457__auto__ = e13249;var statearr_13250_13279 = state_13210;(statearr_13250_13279[5] = ex__8457__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13210);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13249;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8455__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13280 = state_13210;
state_13210 = G__13280;
continue;
}
} else
{return ret_value__8455__auto__;
}
break;
}
});
state_machine__8454__auto__ = function(state_13210){
switch(arguments.length){
case 0:
return state_machine__8454__auto____0.call(this);
case 1:
return state_machine__8454__auto____1.call(this,state_13210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8454__auto____0;
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8454__auto____1;
return state_machine__8454__auto__;
})()
;})(switch__8452__auto__))
})();var state__8546__auto__ = (function (){var statearr_13251 = f__8545__auto__.call(null);(statearr_13251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8544__auto___13252);
return statearr_13251;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8546__auto__);
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
cljs.core.async.Pub = (function (){var obj13282 = {};return obj13282;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__5622__auto__ = p;if(and__5622__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__5622__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__6261__auto__ = (((p == null))?null:p);return (function (){var or__5634__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6261__auto__)]);if(or__5634__auto__)
{return or__5634__auto__;
} else
{var or__5634__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__5634__auto____$1)
{return or__5634__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__5622__auto__ = p;if(and__5622__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__5622__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__6261__auto__ = (((p == null))?null:p);return (function (){var or__5634__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6261__auto__)]);if(or__5634__auto__)
{return or__5634__auto__;
} else
{var or__5634__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__5634__auto____$1)
{return or__5634__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__5622__auto__ = p;if(and__5622__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__5622__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__6261__auto__ = (((p == null))?null:p);return (function (){var or__5634__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6261__auto__)]);if(or__5634__auto__)
{return or__5634__auto__;
} else
{var or__5634__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__5634__auto____$1)
{return or__5634__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__5622__auto__ = p;if(and__5622__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__5622__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__6261__auto__ = (((p == null))?null:p);return (function (){var or__5634__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6261__auto__)]);if(or__5634__auto__)
{return or__5634__auto__;
} else
{var or__5634__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__5634__auto____$1)
{return or__5634__auto____$1;
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
return (function (topic){var or__5634__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__5634__auto__))
{return or__5634__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__5634__auto__,mults){
return (function (p1__13283_SHARP_){if(cljs.core.truth_(p1__13283_SHARP_.call(null,topic)))
{return p1__13283_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13283_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5634__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13408 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13408 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13409){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13409 = meta13409;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13408.cljs$lang$type = true;
cljs.core.async.t13408.cljs$lang$ctorStr = "cljs.core.async/t13408";
cljs.core.async.t13408.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6201__auto__,writer__6202__auto__,opt__6203__auto__){return cljs.core._write.call(null,writer__6202__auto__,"cljs.core.async/t13408");
});})(mults,ensure_mult))
;
cljs.core.async.t13408.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13408.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13408.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13408.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13408.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13408.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13408.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13408.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13410){var self__ = this;
var _13410__$1 = this;return self__.meta13409;
});})(mults,ensure_mult))
;
cljs.core.async.t13408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13410,meta13409__$1){var self__ = this;
var _13410__$1 = this;return (new cljs.core.async.t13408(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13409__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13408 = ((function (mults,ensure_mult){
return (function __GT_t13408(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13409){return (new cljs.core.async.t13408(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13409));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13408(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8544__auto___13532 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8545__auto__ = (function (){var switch__8452__auto__ = (function (state_13484){var state_val_13485 = (state_13484[1]);if((state_val_13485 === 7))
{var inst_13480 = (state_13484[2]);var state_13484__$1 = state_13484;var statearr_13486_13533 = state_13484__$1;(statearr_13486_13533[2] = inst_13480);
(statearr_13486_13533[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13485 === 20))
{var state_13484__$1 = state_13484;var statearr_13487_13534 = state_13484__$1;(statearr_13487_13534[2] = null);
(statearr_13487_13534[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13485 === 1))
{var state_13484__$1 = state_13484;var statearr_13488_13535 = state_13484__$1;(statearr_13488_13535[2] = null);
(statearr_13488_13535[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13485 === 24))
{var inst_13463 = (state_13484[7]);var inst_13413 = (state_13484[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13484,23,Object,null,22);var inst_13470 = cljs.core.async.muxch_STAR_.call(null,inst_13463);var state_13484__$1 = state_13484;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13484__$1,25,inst_13470,inst_13413);
} else
{if((state_val_13485 === 4))
{var inst_13413 = (state_13484[8]);var inst_13413__$1 = (state_13484[2]);var inst_13414 = (inst_13413__$1 == null);var state_13484__$1 = (function (){var statearr_13489 = state_13484;(statearr_13489[8] = inst_13413__$1);
return statearr_13489;
})();if(cljs.core.truth_(inst_13414))
{var statearr_13490_13536 = state_13484__$1;(statearr_13490_13536[1] = 5);
} else
{var statearr_13491_13537 = state_13484__$1;(statearr_13491_13537[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13485 === 15))
{var inst_13455 = (state_13484[2]);var state_13484__$1 = state_13484;var statearr_13492_13538 = state_13484__$1;(statearr_13492_13538[2] = inst_13455);
(statearr_13492_13538[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13485 === 21))
{var inst_13477 = (state_13484[2]);var state_13484__$1 = (function (){var statearr_13493 = state_13484;(statearr_13493[9] = inst_13477);
return statearr_13493;
})();var statearr_13494_13539 = state_13484__$1;(statearr_13494_13539[2] = null);
(statearr_13494_13539[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13485 === 13))
{var inst_13437 = (state_13484[10]);var inst_13439 = cljs.core.chunked_seq_QMARK_.call(null,inst_13437);var state_13484__$1 = state_13484;if(inst_13439)
{var statearr_13495_13540 = state_13484__$1;(statearr_13495_13540[1] = 16);
} else
{var statearr_13496_13541 = state_13484__$1;(statearr_13496_13541[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13485 === 22))
{var inst_13474 = (state_13484[2]);var state_13484__$1 = state_13484;var statearr_13497_13542 = state_13484__$1;(statearr_13497_13542[2] = inst_13474);
(statearr_13497_13542[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13485 === 6))
{var inst_13463 = (state_13484[7]);var inst_13413 = (state_13484[8]);var inst_13461 = (state_13484[11]);var inst_13461__$1 = topic_fn.call(null,inst_13413);var inst_13462 = cljs.core.deref.call(null,mults);var inst_13463__$1 = cljs.core.get.call(null,inst_13462,inst_13461__$1);var state_13484__$1 = (function (){var statearr_13498 = state_13484;(statearr_13498[7] = inst_13463__$1);
(statearr_13498[11] = inst_13461__$1);
return statearr_13498;
})();if(cljs.core.truth_(inst_13463__$1))
{var statearr_13499_13543 = state_13484__$1;(statearr_13499_13543[1] = 19);
} else
{var statearr_13500_13544 = state_13484__$1;(statearr_13500_13544[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13485 === 25))
{var inst_13472 = (state_13484[2]);var state_13484__$1 = state_13484;var statearr_13501_13545 = state_13484__$1;(statearr_13501_13545[2] = inst_13472);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13484__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13485 === 17))
{var inst_13437 = (state_13484[10]);var inst_13446 = cljs.core.first.call(null,inst_13437);var inst_13447 = cljs.core.async.muxch_STAR_.call(null,inst_13446);var inst_13448 = cljs.core.async.close_BANG_.call(null,inst_13447);var inst_13449 = cljs.core.next.call(null,inst_13437);var inst_13423 = inst_13449;var inst_13424 = null;var inst_13425 = 0;var inst_13426 = 0;var state_13484__$1 = (function (){var statearr_13502 = state_13484;(statearr_13502[12] = inst_13423);
(statearr_13502[13] = inst_13424);
(statearr_13502[14] = inst_13426);
(statearr_13502[15] = inst_13425);
(statearr_13502[16] = inst_13448);
return statearr_13502;
})();var statearr_13503_13546 = state_13484__$1;(statearr_13503_13546[2] = null);
(statearr_13503_13546[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13485 === 3))
{var inst_13482 = (state_13484[2]);var state_13484__$1 = state_13484;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13484__$1,inst_13482);
} else
{if((state_val_13485 === 12))
{var inst_13457 = (state_13484[2]);var state_13484__$1 = state_13484;var statearr_13504_13547 = state_13484__$1;(statearr_13504_13547[2] = inst_13457);
(statearr_13504_13547[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13485 === 2))
{var state_13484__$1 = state_13484;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13484__$1,4,ch);
} else
{if((state_val_13485 === 23))
{var inst_13461 = (state_13484[11]);var inst_13465 = (state_13484[2]);var inst_13466 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13461);var state_13484__$1 = (function (){var statearr_13505 = state_13484;(statearr_13505[17] = inst_13465);
return statearr_13505;
})();var statearr_13506_13548 = state_13484__$1;(statearr_13506_13548[2] = inst_13466);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13484__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13485 === 19))
{var state_13484__$1 = state_13484;var statearr_13507_13549 = state_13484__$1;(statearr_13507_13549[2] = null);
(statearr_13507_13549[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13485 === 11))
{var inst_13423 = (state_13484[12]);var inst_13437 = (state_13484[10]);var inst_13437__$1 = cljs.core.seq.call(null,inst_13423);var state_13484__$1 = (function (){var statearr_13508 = state_13484;(statearr_13508[10] = inst_13437__$1);
return statearr_13508;
})();if(inst_13437__$1)
{var statearr_13509_13550 = state_13484__$1;(statearr_13509_13550[1] = 13);
} else
{var statearr_13510_13551 = state_13484__$1;(statearr_13510_13551[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13485 === 9))
{var inst_13459 = (state_13484[2]);var state_13484__$1 = state_13484;var statearr_13511_13552 = state_13484__$1;(statearr_13511_13552[2] = inst_13459);
(statearr_13511_13552[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13485 === 5))
{var inst_13420 = cljs.core.deref.call(null,mults);var inst_13421 = cljs.core.vals.call(null,inst_13420);var inst_13422 = cljs.core.seq.call(null,inst_13421);var inst_13423 = inst_13422;var inst_13424 = null;var inst_13425 = 0;var inst_13426 = 0;var state_13484__$1 = (function (){var statearr_13512 = state_13484;(statearr_13512[12] = inst_13423);
(statearr_13512[13] = inst_13424);
(statearr_13512[14] = inst_13426);
(statearr_13512[15] = inst_13425);
return statearr_13512;
})();var statearr_13513_13553 = state_13484__$1;(statearr_13513_13553[2] = null);
(statearr_13513_13553[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13485 === 14))
{var state_13484__$1 = state_13484;var statearr_13517_13554 = state_13484__$1;(statearr_13517_13554[2] = null);
(statearr_13517_13554[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13485 === 16))
{var inst_13437 = (state_13484[10]);var inst_13441 = cljs.core.chunk_first.call(null,inst_13437);var inst_13442 = cljs.core.chunk_rest.call(null,inst_13437);var inst_13443 = cljs.core.count.call(null,inst_13441);var inst_13423 = inst_13442;var inst_13424 = inst_13441;var inst_13425 = inst_13443;var inst_13426 = 0;var state_13484__$1 = (function (){var statearr_13518 = state_13484;(statearr_13518[12] = inst_13423);
(statearr_13518[13] = inst_13424);
(statearr_13518[14] = inst_13426);
(statearr_13518[15] = inst_13425);
return statearr_13518;
})();var statearr_13519_13555 = state_13484__$1;(statearr_13519_13555[2] = null);
(statearr_13519_13555[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13485 === 10))
{var inst_13423 = (state_13484[12]);var inst_13424 = (state_13484[13]);var inst_13426 = (state_13484[14]);var inst_13425 = (state_13484[15]);var inst_13431 = cljs.core._nth.call(null,inst_13424,inst_13426);var inst_13432 = cljs.core.async.muxch_STAR_.call(null,inst_13431);var inst_13433 = cljs.core.async.close_BANG_.call(null,inst_13432);var inst_13434 = (inst_13426 + 1);var tmp13514 = inst_13423;var tmp13515 = inst_13424;var tmp13516 = inst_13425;var inst_13423__$1 = tmp13514;var inst_13424__$1 = tmp13515;var inst_13425__$1 = tmp13516;var inst_13426__$1 = inst_13434;var state_13484__$1 = (function (){var statearr_13520 = state_13484;(statearr_13520[12] = inst_13423__$1);
(statearr_13520[13] = inst_13424__$1);
(statearr_13520[14] = inst_13426__$1);
(statearr_13520[15] = inst_13425__$1);
(statearr_13520[18] = inst_13433);
return statearr_13520;
})();var statearr_13521_13556 = state_13484__$1;(statearr_13521_13556[2] = null);
(statearr_13521_13556[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13485 === 18))
{var inst_13452 = (state_13484[2]);var state_13484__$1 = state_13484;var statearr_13522_13557 = state_13484__$1;(statearr_13522_13557[2] = inst_13452);
(statearr_13522_13557[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13485 === 8))
{var inst_13426 = (state_13484[14]);var inst_13425 = (state_13484[15]);var inst_13428 = (inst_13426 < inst_13425);var inst_13429 = inst_13428;var state_13484__$1 = state_13484;if(cljs.core.truth_(inst_13429))
{var statearr_13523_13558 = state_13484__$1;(statearr_13523_13558[1] = 10);
} else
{var statearr_13524_13559 = state_13484__$1;(statearr_13524_13559[1] = 11);
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
});return ((function (switch__8452__auto__){
return (function() {
var state_machine__8454__auto__ = null;
var state_machine__8454__auto____0 = (function (){var statearr_13528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13528[0] = state_machine__8454__auto__);
(statearr_13528[1] = 1);
return statearr_13528;
});
var state_machine__8454__auto____1 = (function (state_13484){while(true){
var ret_value__8455__auto__ = (function (){try{while(true){
var result__8456__auto__ = switch__8452__auto__.call(null,state_13484);if(cljs.core.keyword_identical_QMARK_.call(null,result__8456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8456__auto__;
}
break;
}
}catch (e13529){if((e13529 instanceof Object))
{var ex__8457__auto__ = e13529;var statearr_13530_13560 = state_13484;(statearr_13530_13560[5] = ex__8457__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13484);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13529;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8455__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13561 = state_13484;
state_13484 = G__13561;
continue;
}
} else
{return ret_value__8455__auto__;
}
break;
}
});
state_machine__8454__auto__ = function(state_13484){
switch(arguments.length){
case 0:
return state_machine__8454__auto____0.call(this);
case 1:
return state_machine__8454__auto____1.call(this,state_13484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8454__auto____0;
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8454__auto____1;
return state_machine__8454__auto__;
})()
;})(switch__8452__auto__))
})();var state__8546__auto__ = (function (){var statearr_13531 = f__8545__auto__.call(null);(statearr_13531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8544__auto___13532);
return statearr_13531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8546__auto__);
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
,cljs.core.range.call(null,cnt));var c__8544__auto___13698 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8545__auto__ = (function (){var switch__8452__auto__ = (function (state_13668){var state_val_13669 = (state_13668[1]);if((state_val_13669 === 7))
{var state_13668__$1 = state_13668;var statearr_13670_13699 = state_13668__$1;(statearr_13670_13699[2] = null);
(statearr_13670_13699[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13669 === 1))
{var state_13668__$1 = state_13668;var statearr_13671_13700 = state_13668__$1;(statearr_13671_13700[2] = null);
(statearr_13671_13700[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13669 === 4))
{var inst_13632 = (state_13668[7]);var inst_13634 = (inst_13632 < cnt);var state_13668__$1 = state_13668;if(cljs.core.truth_(inst_13634))
{var statearr_13672_13701 = state_13668__$1;(statearr_13672_13701[1] = 6);
} else
{var statearr_13673_13702 = state_13668__$1;(statearr_13673_13702[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13669 === 15))
{var inst_13664 = (state_13668[2]);var state_13668__$1 = state_13668;var statearr_13674_13703 = state_13668__$1;(statearr_13674_13703[2] = inst_13664);
(statearr_13674_13703[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13669 === 13))
{var inst_13657 = cljs.core.async.close_BANG_.call(null,out);var state_13668__$1 = state_13668;var statearr_13675_13704 = state_13668__$1;(statearr_13675_13704[2] = inst_13657);
(statearr_13675_13704[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13669 === 6))
{var state_13668__$1 = state_13668;var statearr_13676_13705 = state_13668__$1;(statearr_13676_13705[2] = null);
(statearr_13676_13705[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13669 === 3))
{var inst_13666 = (state_13668[2]);var state_13668__$1 = state_13668;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13668__$1,inst_13666);
} else
{if((state_val_13669 === 12))
{var inst_13654 = (state_13668[8]);var inst_13654__$1 = (state_13668[2]);var inst_13655 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13654__$1);var state_13668__$1 = (function (){var statearr_13677 = state_13668;(statearr_13677[8] = inst_13654__$1);
return statearr_13677;
})();if(cljs.core.truth_(inst_13655))
{var statearr_13678_13706 = state_13668__$1;(statearr_13678_13706[1] = 13);
} else
{var statearr_13679_13707 = state_13668__$1;(statearr_13679_13707[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13669 === 2))
{var inst_13631 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13632 = 0;var state_13668__$1 = (function (){var statearr_13680 = state_13668;(statearr_13680[7] = inst_13632);
(statearr_13680[9] = inst_13631);
return statearr_13680;
})();var statearr_13681_13708 = state_13668__$1;(statearr_13681_13708[2] = null);
(statearr_13681_13708[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13669 === 11))
{var inst_13632 = (state_13668[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13668,10,Object,null,9);var inst_13641 = chs__$1.call(null,inst_13632);var inst_13642 = done.call(null,inst_13632);var inst_13643 = cljs.core.async.take_BANG_.call(null,inst_13641,inst_13642);var state_13668__$1 = state_13668;var statearr_13682_13709 = state_13668__$1;(statearr_13682_13709[2] = inst_13643);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13668__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13669 === 9))
{var inst_13632 = (state_13668[7]);var inst_13645 = (state_13668[2]);var inst_13646 = (inst_13632 + 1);var inst_13632__$1 = inst_13646;var state_13668__$1 = (function (){var statearr_13683 = state_13668;(statearr_13683[10] = inst_13645);
(statearr_13683[7] = inst_13632__$1);
return statearr_13683;
})();var statearr_13684_13710 = state_13668__$1;(statearr_13684_13710[2] = null);
(statearr_13684_13710[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13669 === 5))
{var inst_13652 = (state_13668[2]);var state_13668__$1 = (function (){var statearr_13685 = state_13668;(statearr_13685[11] = inst_13652);
return statearr_13685;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13668__$1,12,dchan);
} else
{if((state_val_13669 === 14))
{var inst_13654 = (state_13668[8]);var inst_13659 = cljs.core.apply.call(null,f,inst_13654);var state_13668__$1 = state_13668;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13668__$1,16,out,inst_13659);
} else
{if((state_val_13669 === 16))
{var inst_13661 = (state_13668[2]);var state_13668__$1 = (function (){var statearr_13686 = state_13668;(statearr_13686[12] = inst_13661);
return statearr_13686;
})();var statearr_13687_13711 = state_13668__$1;(statearr_13687_13711[2] = null);
(statearr_13687_13711[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13669 === 10))
{var inst_13636 = (state_13668[2]);var inst_13637 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13668__$1 = (function (){var statearr_13688 = state_13668;(statearr_13688[13] = inst_13636);
return statearr_13688;
})();var statearr_13689_13712 = state_13668__$1;(statearr_13689_13712[2] = inst_13637);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13668__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13669 === 8))
{var inst_13650 = (state_13668[2]);var state_13668__$1 = state_13668;var statearr_13690_13713 = state_13668__$1;(statearr_13690_13713[2] = inst_13650);
(statearr_13690_13713[1] = 5);
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
});return ((function (switch__8452__auto__){
return (function() {
var state_machine__8454__auto__ = null;
var state_machine__8454__auto____0 = (function (){var statearr_13694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13694[0] = state_machine__8454__auto__);
(statearr_13694[1] = 1);
return statearr_13694;
});
var state_machine__8454__auto____1 = (function (state_13668){while(true){
var ret_value__8455__auto__ = (function (){try{while(true){
var result__8456__auto__ = switch__8452__auto__.call(null,state_13668);if(cljs.core.keyword_identical_QMARK_.call(null,result__8456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8456__auto__;
}
break;
}
}catch (e13695){if((e13695 instanceof Object))
{var ex__8457__auto__ = e13695;var statearr_13696_13714 = state_13668;(statearr_13696_13714[5] = ex__8457__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13668);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13695;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8455__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13715 = state_13668;
state_13668 = G__13715;
continue;
}
} else
{return ret_value__8455__auto__;
}
break;
}
});
state_machine__8454__auto__ = function(state_13668){
switch(arguments.length){
case 0:
return state_machine__8454__auto____0.call(this);
case 1:
return state_machine__8454__auto____1.call(this,state_13668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8454__auto____0;
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8454__auto____1;
return state_machine__8454__auto__;
})()
;})(switch__8452__auto__))
})();var state__8546__auto__ = (function (){var statearr_13697 = f__8545__auto__.call(null);(statearr_13697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8544__auto___13698);
return statearr_13697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8546__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8544__auto___13823 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8545__auto__ = (function (){var switch__8452__auto__ = (function (state_13799){var state_val_13800 = (state_13799[1]);if((state_val_13800 === 7))
{var inst_13778 = (state_13799[7]);var inst_13779 = (state_13799[8]);var inst_13778__$1 = (state_13799[2]);var inst_13779__$1 = cljs.core.nth.call(null,inst_13778__$1,0,null);var inst_13780 = cljs.core.nth.call(null,inst_13778__$1,1,null);var inst_13781 = (inst_13779__$1 == null);var state_13799__$1 = (function (){var statearr_13801 = state_13799;(statearr_13801[7] = inst_13778__$1);
(statearr_13801[8] = inst_13779__$1);
(statearr_13801[9] = inst_13780);
return statearr_13801;
})();if(cljs.core.truth_(inst_13781))
{var statearr_13802_13824 = state_13799__$1;(statearr_13802_13824[1] = 8);
} else
{var statearr_13803_13825 = state_13799__$1;(statearr_13803_13825[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13800 === 1))
{var inst_13770 = cljs.core.vec.call(null,chs);var inst_13771 = inst_13770;var state_13799__$1 = (function (){var statearr_13804 = state_13799;(statearr_13804[10] = inst_13771);
return statearr_13804;
})();var statearr_13805_13826 = state_13799__$1;(statearr_13805_13826[2] = null);
(statearr_13805_13826[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13800 === 4))
{var inst_13771 = (state_13799[10]);var state_13799__$1 = state_13799;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13799__$1,7,inst_13771);
} else
{if((state_val_13800 === 6))
{var inst_13795 = (state_13799[2]);var state_13799__$1 = state_13799;var statearr_13806_13827 = state_13799__$1;(statearr_13806_13827[2] = inst_13795);
(statearr_13806_13827[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13800 === 3))
{var inst_13797 = (state_13799[2]);var state_13799__$1 = state_13799;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13799__$1,inst_13797);
} else
{if((state_val_13800 === 2))
{var inst_13771 = (state_13799[10]);var inst_13773 = cljs.core.count.call(null,inst_13771);var inst_13774 = (inst_13773 > 0);var state_13799__$1 = state_13799;if(cljs.core.truth_(inst_13774))
{var statearr_13808_13828 = state_13799__$1;(statearr_13808_13828[1] = 4);
} else
{var statearr_13809_13829 = state_13799__$1;(statearr_13809_13829[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13800 === 11))
{var inst_13771 = (state_13799[10]);var inst_13788 = (state_13799[2]);var tmp13807 = inst_13771;var inst_13771__$1 = tmp13807;var state_13799__$1 = (function (){var statearr_13810 = state_13799;(statearr_13810[10] = inst_13771__$1);
(statearr_13810[11] = inst_13788);
return statearr_13810;
})();var statearr_13811_13830 = state_13799__$1;(statearr_13811_13830[2] = null);
(statearr_13811_13830[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13800 === 9))
{var inst_13779 = (state_13799[8]);var state_13799__$1 = state_13799;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13799__$1,11,out,inst_13779);
} else
{if((state_val_13800 === 5))
{var inst_13793 = cljs.core.async.close_BANG_.call(null,out);var state_13799__$1 = state_13799;var statearr_13812_13831 = state_13799__$1;(statearr_13812_13831[2] = inst_13793);
(statearr_13812_13831[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13800 === 10))
{var inst_13791 = (state_13799[2]);var state_13799__$1 = state_13799;var statearr_13813_13832 = state_13799__$1;(statearr_13813_13832[2] = inst_13791);
(statearr_13813_13832[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13800 === 8))
{var inst_13778 = (state_13799[7]);var inst_13779 = (state_13799[8]);var inst_13780 = (state_13799[9]);var inst_13771 = (state_13799[10]);var inst_13783 = (function (){var c = inst_13780;var v = inst_13779;var vec__13776 = inst_13778;var cs = inst_13771;return ((function (c,v,vec__13776,cs,inst_13778,inst_13779,inst_13780,inst_13771,state_val_13800){
return (function (p1__13716_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13716_SHARP_);
});
;})(c,v,vec__13776,cs,inst_13778,inst_13779,inst_13780,inst_13771,state_val_13800))
})();var inst_13784 = cljs.core.filterv.call(null,inst_13783,inst_13771);var inst_13771__$1 = inst_13784;var state_13799__$1 = (function (){var statearr_13814 = state_13799;(statearr_13814[10] = inst_13771__$1);
return statearr_13814;
})();var statearr_13815_13833 = state_13799__$1;(statearr_13815_13833[2] = null);
(statearr_13815_13833[1] = 2);
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
});return ((function (switch__8452__auto__){
return (function() {
var state_machine__8454__auto__ = null;
var state_machine__8454__auto____0 = (function (){var statearr_13819 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13819[0] = state_machine__8454__auto__);
(statearr_13819[1] = 1);
return statearr_13819;
});
var state_machine__8454__auto____1 = (function (state_13799){while(true){
var ret_value__8455__auto__ = (function (){try{while(true){
var result__8456__auto__ = switch__8452__auto__.call(null,state_13799);if(cljs.core.keyword_identical_QMARK_.call(null,result__8456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8456__auto__;
}
break;
}
}catch (e13820){if((e13820 instanceof Object))
{var ex__8457__auto__ = e13820;var statearr_13821_13834 = state_13799;(statearr_13821_13834[5] = ex__8457__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13799);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13820;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8455__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13835 = state_13799;
state_13799 = G__13835;
continue;
}
} else
{return ret_value__8455__auto__;
}
break;
}
});
state_machine__8454__auto__ = function(state_13799){
switch(arguments.length){
case 0:
return state_machine__8454__auto____0.call(this);
case 1:
return state_machine__8454__auto____1.call(this,state_13799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8454__auto____0;
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8454__auto____1;
return state_machine__8454__auto__;
})()
;})(switch__8452__auto__))
})();var state__8546__auto__ = (function (){var statearr_13822 = f__8545__auto__.call(null);(statearr_13822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8544__auto___13823);
return statearr_13822;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8546__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8544__auto___13928 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8545__auto__ = (function (){var switch__8452__auto__ = (function (state_13905){var state_val_13906 = (state_13905[1]);if((state_val_13906 === 7))
{var inst_13887 = (state_13905[7]);var inst_13887__$1 = (state_13905[2]);var inst_13888 = (inst_13887__$1 == null);var inst_13889 = cljs.core.not.call(null,inst_13888);var state_13905__$1 = (function (){var statearr_13907 = state_13905;(statearr_13907[7] = inst_13887__$1);
return statearr_13907;
})();if(inst_13889)
{var statearr_13908_13929 = state_13905__$1;(statearr_13908_13929[1] = 8);
} else
{var statearr_13909_13930 = state_13905__$1;(statearr_13909_13930[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13906 === 1))
{var inst_13882 = 0;var state_13905__$1 = (function (){var statearr_13910 = state_13905;(statearr_13910[8] = inst_13882);
return statearr_13910;
})();var statearr_13911_13931 = state_13905__$1;(statearr_13911_13931[2] = null);
(statearr_13911_13931[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13906 === 4))
{var state_13905__$1 = state_13905;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13905__$1,7,ch);
} else
{if((state_val_13906 === 6))
{var inst_13900 = (state_13905[2]);var state_13905__$1 = state_13905;var statearr_13912_13932 = state_13905__$1;(statearr_13912_13932[2] = inst_13900);
(statearr_13912_13932[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13906 === 3))
{var inst_13902 = (state_13905[2]);var inst_13903 = cljs.core.async.close_BANG_.call(null,out);var state_13905__$1 = (function (){var statearr_13913 = state_13905;(statearr_13913[9] = inst_13902);
return statearr_13913;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13905__$1,inst_13903);
} else
{if((state_val_13906 === 2))
{var inst_13882 = (state_13905[8]);var inst_13884 = (inst_13882 < n);var state_13905__$1 = state_13905;if(cljs.core.truth_(inst_13884))
{var statearr_13914_13933 = state_13905__$1;(statearr_13914_13933[1] = 4);
} else
{var statearr_13915_13934 = state_13905__$1;(statearr_13915_13934[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13906 === 11))
{var inst_13882 = (state_13905[8]);var inst_13892 = (state_13905[2]);var inst_13893 = (inst_13882 + 1);var inst_13882__$1 = inst_13893;var state_13905__$1 = (function (){var statearr_13916 = state_13905;(statearr_13916[8] = inst_13882__$1);
(statearr_13916[10] = inst_13892);
return statearr_13916;
})();var statearr_13917_13935 = state_13905__$1;(statearr_13917_13935[2] = null);
(statearr_13917_13935[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13906 === 9))
{var state_13905__$1 = state_13905;var statearr_13918_13936 = state_13905__$1;(statearr_13918_13936[2] = null);
(statearr_13918_13936[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13906 === 5))
{var state_13905__$1 = state_13905;var statearr_13919_13937 = state_13905__$1;(statearr_13919_13937[2] = null);
(statearr_13919_13937[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13906 === 10))
{var inst_13897 = (state_13905[2]);var state_13905__$1 = state_13905;var statearr_13920_13938 = state_13905__$1;(statearr_13920_13938[2] = inst_13897);
(statearr_13920_13938[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13906 === 8))
{var inst_13887 = (state_13905[7]);var state_13905__$1 = state_13905;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13905__$1,11,out,inst_13887);
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
});return ((function (switch__8452__auto__){
return (function() {
var state_machine__8454__auto__ = null;
var state_machine__8454__auto____0 = (function (){var statearr_13924 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13924[0] = state_machine__8454__auto__);
(statearr_13924[1] = 1);
return statearr_13924;
});
var state_machine__8454__auto____1 = (function (state_13905){while(true){
var ret_value__8455__auto__ = (function (){try{while(true){
var result__8456__auto__ = switch__8452__auto__.call(null,state_13905);if(cljs.core.keyword_identical_QMARK_.call(null,result__8456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8456__auto__;
}
break;
}
}catch (e13925){if((e13925 instanceof Object))
{var ex__8457__auto__ = e13925;var statearr_13926_13939 = state_13905;(statearr_13926_13939[5] = ex__8457__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13905);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13925;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8455__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13940 = state_13905;
state_13905 = G__13940;
continue;
}
} else
{return ret_value__8455__auto__;
}
break;
}
});
state_machine__8454__auto__ = function(state_13905){
switch(arguments.length){
case 0:
return state_machine__8454__auto____0.call(this);
case 1:
return state_machine__8454__auto____1.call(this,state_13905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8454__auto____0;
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8454__auto____1;
return state_machine__8454__auto__;
})()
;})(switch__8452__auto__))
})();var state__8546__auto__ = (function (){var statearr_13927 = f__8545__auto__.call(null);(statearr_13927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8544__auto___13928);
return statearr_13927;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8546__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8544__auto___14037 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8545__auto__ = (function (){var switch__8452__auto__ = (function (state_14012){var state_val_14013 = (state_14012[1]);if((state_val_14013 === 7))
{var inst_14007 = (state_14012[2]);var state_14012__$1 = state_14012;var statearr_14014_14038 = state_14012__$1;(statearr_14014_14038[2] = inst_14007);
(statearr_14014_14038[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14013 === 1))
{var inst_13989 = null;var state_14012__$1 = (function (){var statearr_14015 = state_14012;(statearr_14015[7] = inst_13989);
return statearr_14015;
})();var statearr_14016_14039 = state_14012__$1;(statearr_14016_14039[2] = null);
(statearr_14016_14039[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14013 === 4))
{var inst_13992 = (state_14012[8]);var inst_13992__$1 = (state_14012[2]);var inst_13993 = (inst_13992__$1 == null);var inst_13994 = cljs.core.not.call(null,inst_13993);var state_14012__$1 = (function (){var statearr_14017 = state_14012;(statearr_14017[8] = inst_13992__$1);
return statearr_14017;
})();if(inst_13994)
{var statearr_14018_14040 = state_14012__$1;(statearr_14018_14040[1] = 5);
} else
{var statearr_14019_14041 = state_14012__$1;(statearr_14019_14041[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14013 === 6))
{var state_14012__$1 = state_14012;var statearr_14020_14042 = state_14012__$1;(statearr_14020_14042[2] = null);
(statearr_14020_14042[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14013 === 3))
{var inst_14009 = (state_14012[2]);var inst_14010 = cljs.core.async.close_BANG_.call(null,out);var state_14012__$1 = (function (){var statearr_14021 = state_14012;(statearr_14021[9] = inst_14009);
return statearr_14021;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14012__$1,inst_14010);
} else
{if((state_val_14013 === 2))
{var state_14012__$1 = state_14012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14012__$1,4,ch);
} else
{if((state_val_14013 === 11))
{var inst_13992 = (state_14012[8]);var inst_14001 = (state_14012[2]);var inst_13989 = inst_13992;var state_14012__$1 = (function (){var statearr_14022 = state_14012;(statearr_14022[10] = inst_14001);
(statearr_14022[7] = inst_13989);
return statearr_14022;
})();var statearr_14023_14043 = state_14012__$1;(statearr_14023_14043[2] = null);
(statearr_14023_14043[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14013 === 9))
{var inst_13992 = (state_14012[8]);var state_14012__$1 = state_14012;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14012__$1,11,out,inst_13992);
} else
{if((state_val_14013 === 5))
{var inst_13989 = (state_14012[7]);var inst_13992 = (state_14012[8]);var inst_13996 = cljs.core._EQ_.call(null,inst_13992,inst_13989);var state_14012__$1 = state_14012;if(inst_13996)
{var statearr_14025_14044 = state_14012__$1;(statearr_14025_14044[1] = 8);
} else
{var statearr_14026_14045 = state_14012__$1;(statearr_14026_14045[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14013 === 10))
{var inst_14004 = (state_14012[2]);var state_14012__$1 = state_14012;var statearr_14027_14046 = state_14012__$1;(statearr_14027_14046[2] = inst_14004);
(statearr_14027_14046[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14013 === 8))
{var inst_13989 = (state_14012[7]);var tmp14024 = inst_13989;var inst_13989__$1 = tmp14024;var state_14012__$1 = (function (){var statearr_14028 = state_14012;(statearr_14028[7] = inst_13989__$1);
return statearr_14028;
})();var statearr_14029_14047 = state_14012__$1;(statearr_14029_14047[2] = null);
(statearr_14029_14047[1] = 2);
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
});return ((function (switch__8452__auto__){
return (function() {
var state_machine__8454__auto__ = null;
var state_machine__8454__auto____0 = (function (){var statearr_14033 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14033[0] = state_machine__8454__auto__);
(statearr_14033[1] = 1);
return statearr_14033;
});
var state_machine__8454__auto____1 = (function (state_14012){while(true){
var ret_value__8455__auto__ = (function (){try{while(true){
var result__8456__auto__ = switch__8452__auto__.call(null,state_14012);if(cljs.core.keyword_identical_QMARK_.call(null,result__8456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8456__auto__;
}
break;
}
}catch (e14034){if((e14034 instanceof Object))
{var ex__8457__auto__ = e14034;var statearr_14035_14048 = state_14012;(statearr_14035_14048[5] = ex__8457__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14012);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14034;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8455__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14049 = state_14012;
state_14012 = G__14049;
continue;
}
} else
{return ret_value__8455__auto__;
}
break;
}
});
state_machine__8454__auto__ = function(state_14012){
switch(arguments.length){
case 0:
return state_machine__8454__auto____0.call(this);
case 1:
return state_machine__8454__auto____1.call(this,state_14012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8454__auto____0;
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8454__auto____1;
return state_machine__8454__auto__;
})()
;})(switch__8452__auto__))
})();var state__8546__auto__ = (function (){var statearr_14036 = f__8545__auto__.call(null);(statearr_14036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8544__auto___14037);
return statearr_14036;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8546__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8544__auto___14184 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8545__auto__ = (function (){var switch__8452__auto__ = (function (state_14154){var state_val_14155 = (state_14154[1]);if((state_val_14155 === 7))
{var inst_14150 = (state_14154[2]);var state_14154__$1 = state_14154;var statearr_14156_14185 = state_14154__$1;(statearr_14156_14185[2] = inst_14150);
(statearr_14156_14185[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14155 === 1))
{var inst_14117 = (new Array(n));var inst_14118 = inst_14117;var inst_14119 = 0;var state_14154__$1 = (function (){var statearr_14157 = state_14154;(statearr_14157[7] = inst_14119);
(statearr_14157[8] = inst_14118);
return statearr_14157;
})();var statearr_14158_14186 = state_14154__$1;(statearr_14158_14186[2] = null);
(statearr_14158_14186[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14155 === 4))
{var inst_14122 = (state_14154[9]);var inst_14122__$1 = (state_14154[2]);var inst_14123 = (inst_14122__$1 == null);var inst_14124 = cljs.core.not.call(null,inst_14123);var state_14154__$1 = (function (){var statearr_14159 = state_14154;(statearr_14159[9] = inst_14122__$1);
return statearr_14159;
})();if(inst_14124)
{var statearr_14160_14187 = state_14154__$1;(statearr_14160_14187[1] = 5);
} else
{var statearr_14161_14188 = state_14154__$1;(statearr_14161_14188[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14155 === 15))
{var inst_14144 = (state_14154[2]);var state_14154__$1 = state_14154;var statearr_14162_14189 = state_14154__$1;(statearr_14162_14189[2] = inst_14144);
(statearr_14162_14189[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14155 === 13))
{var state_14154__$1 = state_14154;var statearr_14163_14190 = state_14154__$1;(statearr_14163_14190[2] = null);
(statearr_14163_14190[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14155 === 6))
{var inst_14119 = (state_14154[7]);var inst_14140 = (inst_14119 > 0);var state_14154__$1 = state_14154;if(cljs.core.truth_(inst_14140))
{var statearr_14164_14191 = state_14154__$1;(statearr_14164_14191[1] = 12);
} else
{var statearr_14165_14192 = state_14154__$1;(statearr_14165_14192[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14155 === 3))
{var inst_14152 = (state_14154[2]);var state_14154__$1 = state_14154;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14154__$1,inst_14152);
} else
{if((state_val_14155 === 12))
{var inst_14118 = (state_14154[8]);var inst_14142 = cljs.core.vec.call(null,inst_14118);var state_14154__$1 = state_14154;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14154__$1,15,out,inst_14142);
} else
{if((state_val_14155 === 2))
{var state_14154__$1 = state_14154;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14154__$1,4,ch);
} else
{if((state_val_14155 === 11))
{var inst_14134 = (state_14154[2]);var inst_14135 = (new Array(n));var inst_14118 = inst_14135;var inst_14119 = 0;var state_14154__$1 = (function (){var statearr_14166 = state_14154;(statearr_14166[7] = inst_14119);
(statearr_14166[10] = inst_14134);
(statearr_14166[8] = inst_14118);
return statearr_14166;
})();var statearr_14167_14193 = state_14154__$1;(statearr_14167_14193[2] = null);
(statearr_14167_14193[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14155 === 9))
{var inst_14118 = (state_14154[8]);var inst_14132 = cljs.core.vec.call(null,inst_14118);var state_14154__$1 = state_14154;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14154__$1,11,out,inst_14132);
} else
{if((state_val_14155 === 5))
{var inst_14119 = (state_14154[7]);var inst_14122 = (state_14154[9]);var inst_14127 = (state_14154[11]);var inst_14118 = (state_14154[8]);var inst_14126 = (inst_14118[inst_14119] = inst_14122);var inst_14127__$1 = (inst_14119 + 1);var inst_14128 = (inst_14127__$1 < n);var state_14154__$1 = (function (){var statearr_14168 = state_14154;(statearr_14168[12] = inst_14126);
(statearr_14168[11] = inst_14127__$1);
return statearr_14168;
})();if(cljs.core.truth_(inst_14128))
{var statearr_14169_14194 = state_14154__$1;(statearr_14169_14194[1] = 8);
} else
{var statearr_14170_14195 = state_14154__$1;(statearr_14170_14195[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14155 === 14))
{var inst_14147 = (state_14154[2]);var inst_14148 = cljs.core.async.close_BANG_.call(null,out);var state_14154__$1 = (function (){var statearr_14172 = state_14154;(statearr_14172[13] = inst_14147);
return statearr_14172;
})();var statearr_14173_14196 = state_14154__$1;(statearr_14173_14196[2] = inst_14148);
(statearr_14173_14196[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14155 === 10))
{var inst_14138 = (state_14154[2]);var state_14154__$1 = state_14154;var statearr_14174_14197 = state_14154__$1;(statearr_14174_14197[2] = inst_14138);
(statearr_14174_14197[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14155 === 8))
{var inst_14127 = (state_14154[11]);var inst_14118 = (state_14154[8]);var tmp14171 = inst_14118;var inst_14118__$1 = tmp14171;var inst_14119 = inst_14127;var state_14154__$1 = (function (){var statearr_14175 = state_14154;(statearr_14175[7] = inst_14119);
(statearr_14175[8] = inst_14118__$1);
return statearr_14175;
})();var statearr_14176_14198 = state_14154__$1;(statearr_14176_14198[2] = null);
(statearr_14176_14198[1] = 2);
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
});return ((function (switch__8452__auto__){
return (function() {
var state_machine__8454__auto__ = null;
var state_machine__8454__auto____0 = (function (){var statearr_14180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14180[0] = state_machine__8454__auto__);
(statearr_14180[1] = 1);
return statearr_14180;
});
var state_machine__8454__auto____1 = (function (state_14154){while(true){
var ret_value__8455__auto__ = (function (){try{while(true){
var result__8456__auto__ = switch__8452__auto__.call(null,state_14154);if(cljs.core.keyword_identical_QMARK_.call(null,result__8456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8456__auto__;
}
break;
}
}catch (e14181){if((e14181 instanceof Object))
{var ex__8457__auto__ = e14181;var statearr_14182_14199 = state_14154;(statearr_14182_14199[5] = ex__8457__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14154);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14181;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8455__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14200 = state_14154;
state_14154 = G__14200;
continue;
}
} else
{return ret_value__8455__auto__;
}
break;
}
});
state_machine__8454__auto__ = function(state_14154){
switch(arguments.length){
case 0:
return state_machine__8454__auto____0.call(this);
case 1:
return state_machine__8454__auto____1.call(this,state_14154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8454__auto____0;
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8454__auto____1;
return state_machine__8454__auto__;
})()
;})(switch__8452__auto__))
})();var state__8546__auto__ = (function (){var statearr_14183 = f__8545__auto__.call(null);(statearr_14183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8544__auto___14184);
return statearr_14183;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8546__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8544__auto___14343 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8545__auto__ = (function (){var switch__8452__auto__ = (function (state_14313){var state_val_14314 = (state_14313[1]);if((state_val_14314 === 7))
{var inst_14309 = (state_14313[2]);var state_14313__$1 = state_14313;var statearr_14315_14344 = state_14313__$1;(statearr_14315_14344[2] = inst_14309);
(statearr_14315_14344[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14314 === 1))
{var inst_14272 = [];var inst_14273 = inst_14272;var inst_14274 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14313__$1 = (function (){var statearr_14316 = state_14313;(statearr_14316[7] = inst_14273);
(statearr_14316[8] = inst_14274);
return statearr_14316;
})();var statearr_14317_14345 = state_14313__$1;(statearr_14317_14345[2] = null);
(statearr_14317_14345[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14314 === 4))
{var inst_14277 = (state_14313[9]);var inst_14277__$1 = (state_14313[2]);var inst_14278 = (inst_14277__$1 == null);var inst_14279 = cljs.core.not.call(null,inst_14278);var state_14313__$1 = (function (){var statearr_14318 = state_14313;(statearr_14318[9] = inst_14277__$1);
return statearr_14318;
})();if(inst_14279)
{var statearr_14319_14346 = state_14313__$1;(statearr_14319_14346[1] = 5);
} else
{var statearr_14320_14347 = state_14313__$1;(statearr_14320_14347[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14314 === 15))
{var inst_14303 = (state_14313[2]);var state_14313__$1 = state_14313;var statearr_14321_14348 = state_14313__$1;(statearr_14321_14348[2] = inst_14303);
(statearr_14321_14348[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14314 === 13))
{var state_14313__$1 = state_14313;var statearr_14322_14349 = state_14313__$1;(statearr_14322_14349[2] = null);
(statearr_14322_14349[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14314 === 6))
{var inst_14273 = (state_14313[7]);var inst_14298 = inst_14273.length;var inst_14299 = (inst_14298 > 0);var state_14313__$1 = state_14313;if(cljs.core.truth_(inst_14299))
{var statearr_14323_14350 = state_14313__$1;(statearr_14323_14350[1] = 12);
} else
{var statearr_14324_14351 = state_14313__$1;(statearr_14324_14351[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14314 === 3))
{var inst_14311 = (state_14313[2]);var state_14313__$1 = state_14313;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14313__$1,inst_14311);
} else
{if((state_val_14314 === 12))
{var inst_14273 = (state_14313[7]);var inst_14301 = cljs.core.vec.call(null,inst_14273);var state_14313__$1 = state_14313;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14313__$1,15,out,inst_14301);
} else
{if((state_val_14314 === 2))
{var state_14313__$1 = state_14313;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14313__$1,4,ch);
} else
{if((state_val_14314 === 11))
{var inst_14281 = (state_14313[10]);var inst_14277 = (state_14313[9]);var inst_14291 = (state_14313[2]);var inst_14292 = [];var inst_14293 = inst_14292.push(inst_14277);var inst_14273 = inst_14292;var inst_14274 = inst_14281;var state_14313__$1 = (function (){var statearr_14325 = state_14313;(statearr_14325[7] = inst_14273);
(statearr_14325[11] = inst_14293);
(statearr_14325[12] = inst_14291);
(statearr_14325[8] = inst_14274);
return statearr_14325;
})();var statearr_14326_14352 = state_14313__$1;(statearr_14326_14352[2] = null);
(statearr_14326_14352[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14314 === 9))
{var inst_14273 = (state_14313[7]);var inst_14289 = cljs.core.vec.call(null,inst_14273);var state_14313__$1 = state_14313;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14313__$1,11,out,inst_14289);
} else
{if((state_val_14314 === 5))
{var inst_14281 = (state_14313[10]);var inst_14277 = (state_14313[9]);var inst_14274 = (state_14313[8]);var inst_14281__$1 = f.call(null,inst_14277);var inst_14282 = cljs.core._EQ_.call(null,inst_14281__$1,inst_14274);var inst_14283 = cljs.core.keyword_identical_QMARK_.call(null,inst_14274,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14284 = (inst_14282) || (inst_14283);var state_14313__$1 = (function (){var statearr_14327 = state_14313;(statearr_14327[10] = inst_14281__$1);
return statearr_14327;
})();if(cljs.core.truth_(inst_14284))
{var statearr_14328_14353 = state_14313__$1;(statearr_14328_14353[1] = 8);
} else
{var statearr_14329_14354 = state_14313__$1;(statearr_14329_14354[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14314 === 14))
{var inst_14306 = (state_14313[2]);var inst_14307 = cljs.core.async.close_BANG_.call(null,out);var state_14313__$1 = (function (){var statearr_14331 = state_14313;(statearr_14331[13] = inst_14306);
return statearr_14331;
})();var statearr_14332_14355 = state_14313__$1;(statearr_14332_14355[2] = inst_14307);
(statearr_14332_14355[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14314 === 10))
{var inst_14296 = (state_14313[2]);var state_14313__$1 = state_14313;var statearr_14333_14356 = state_14313__$1;(statearr_14333_14356[2] = inst_14296);
(statearr_14333_14356[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14314 === 8))
{var inst_14273 = (state_14313[7]);var inst_14281 = (state_14313[10]);var inst_14277 = (state_14313[9]);var inst_14286 = inst_14273.push(inst_14277);var tmp14330 = inst_14273;var inst_14273__$1 = tmp14330;var inst_14274 = inst_14281;var state_14313__$1 = (function (){var statearr_14334 = state_14313;(statearr_14334[7] = inst_14273__$1);
(statearr_14334[14] = inst_14286);
(statearr_14334[8] = inst_14274);
return statearr_14334;
})();var statearr_14335_14357 = state_14313__$1;(statearr_14335_14357[2] = null);
(statearr_14335_14357[1] = 2);
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
});return ((function (switch__8452__auto__){
return (function() {
var state_machine__8454__auto__ = null;
var state_machine__8454__auto____0 = (function (){var statearr_14339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14339[0] = state_machine__8454__auto__);
(statearr_14339[1] = 1);
return statearr_14339;
});
var state_machine__8454__auto____1 = (function (state_14313){while(true){
var ret_value__8455__auto__ = (function (){try{while(true){
var result__8456__auto__ = switch__8452__auto__.call(null,state_14313);if(cljs.core.keyword_identical_QMARK_.call(null,result__8456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8456__auto__;
}
break;
}
}catch (e14340){if((e14340 instanceof Object))
{var ex__8457__auto__ = e14340;var statearr_14341_14358 = state_14313;(statearr_14341_14358[5] = ex__8457__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14313);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14340;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8455__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14359 = state_14313;
state_14313 = G__14359;
continue;
}
} else
{return ret_value__8455__auto__;
}
break;
}
});
state_machine__8454__auto__ = function(state_14313){
switch(arguments.length){
case 0:
return state_machine__8454__auto____0.call(this);
case 1:
return state_machine__8454__auto____1.call(this,state_14313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8454__auto____0;
state_machine__8454__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8454__auto____1;
return state_machine__8454__auto__;
})()
;})(switch__8452__auto__))
})();var state__8546__auto__ = (function (){var statearr_14342 = f__8545__auto__.call(null);(statearr_14342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8544__auto___14343);
return statearr_14342;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8546__auto__);
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
