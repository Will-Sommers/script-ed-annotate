// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9338 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9338 = (function (f,fn_handler,meta9339){
this.f = f;
this.fn_handler = fn_handler;
this.meta9339 = meta9339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9338.cljs$lang$type = true;
cljs.core.async.t9338.cljs$lang$ctorStr = "cljs.core.async/t9338";
cljs.core.async.t9338.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9338");
});
cljs.core.async.t9338.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9338.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9338.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9340){var self__ = this;
var _9340__$1 = this;return self__.meta9339;
});
cljs.core.async.t9338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9340,meta9339__$1){var self__ = this;
var _9340__$1 = this;return (new cljs.core.async.t9338(self__.f,self__.fn_handler,meta9339__$1));
});
cljs.core.async.__GT_t9338 = (function __GT_t9338(f__$1,fn_handler__$1,meta9339){return (new cljs.core.async.t9338(f__$1,fn_handler__$1,meta9339));
});
}
return (new cljs.core.async.t9338(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9342 = buff;if(G__9342)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__9342.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9342.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9342);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9342);
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
{var val_9343 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9343);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9343);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3396__auto__ = ret;if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3396__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4250__auto___9344 = n;var x_9345 = 0;while(true){
if((x_9345 < n__4250__auto___9344))
{(a[x_9345] = 0);
{
var G__9346 = (x_9345 + 1);
x_9345 = G__9346;
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
var G__9347 = (i + 1);
i = G__9347;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9351 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9351 = (function (flag,alt_flag,meta9352){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9352 = meta9352;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9351.cljs$lang$type = true;
cljs.core.async.t9351.cljs$lang$ctorStr = "cljs.core.async/t9351";
cljs.core.async.t9351.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9351");
});
cljs.core.async.t9351.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9351.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9351.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9353){var self__ = this;
var _9353__$1 = this;return self__.meta9352;
});
cljs.core.async.t9351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9353,meta9352__$1){var self__ = this;
var _9353__$1 = this;return (new cljs.core.async.t9351(self__.flag,self__.alt_flag,meta9352__$1));
});
cljs.core.async.__GT_t9351 = (function __GT_t9351(flag__$1,alt_flag__$1,meta9352){return (new cljs.core.async.t9351(flag__$1,alt_flag__$1,meta9352));
});
}
return (new cljs.core.async.t9351(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9357 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9357 = (function (cb,flag,alt_handler,meta9358){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9358 = meta9358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9357.cljs$lang$type = true;
cljs.core.async.t9357.cljs$lang$ctorStr = "cljs.core.async/t9357";
cljs.core.async.t9357.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9357");
});
cljs.core.async.t9357.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9357.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9357.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9359){var self__ = this;
var _9359__$1 = this;return self__.meta9358;
});
cljs.core.async.t9357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9359,meta9358__$1){var self__ = this;
var _9359__$1 = this;return (new cljs.core.async.t9357(self__.cb,self__.flag,self__.alt_handler,meta9358__$1));
});
cljs.core.async.__GT_t9357 = (function __GT_t9357(cb__$1,flag__$1,alt_handler__$1,meta9358){return (new cljs.core.async.t9357(cb__$1,flag__$1,alt_handler__$1,meta9358));
});
}
return (new cljs.core.async.t9357(cb,flag,alt_handler,null));
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
return (function (p1__9360_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9360_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3408__auto__ = wport;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__9361 = (i + 1);
i = G__9361;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3408__auto__ = ret;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3396__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3396__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__9362){var map__9364 = p__9362;var map__9364__$1 = ((cljs.core.seq_QMARK_.call(null,map__9364))?cljs.core.apply.call(null,cljs.core.hash_map,map__9364):map__9364);var opts = map__9364__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9362 = null;if (arguments.length > 1) {
  p__9362 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9362);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9365){
var ports = cljs.core.first(arglist__9365);
var p__9362 = cljs.core.rest(arglist__9365);
return alts_BANG___delegate(ports,p__9362);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9373 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9373 = (function (ch,f,map_LT_,meta9374){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9374 = meta9374;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9373.cljs$lang$type = true;
cljs.core.async.t9373.cljs$lang$ctorStr = "cljs.core.async/t9373";
cljs.core.async.t9373.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9373");
});
cljs.core.async.t9373.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9373.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9373.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9373.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9376 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9376 = (function (fn1,_,meta9374,ch,f,map_LT_,meta9377){
this.fn1 = fn1;
this._ = _;
this.meta9374 = meta9374;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9377 = meta9377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9376.cljs$lang$type = true;
cljs.core.async.t9376.cljs$lang$ctorStr = "cljs.core.async/t9376";
cljs.core.async.t9376.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9376");
});
cljs.core.async.t9376.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9376.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9376.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9376.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9366_SHARP_){return f1.call(null,(((p1__9366_SHARP_ == null))?null:self__.f.call(null,p1__9366_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9378){var self__ = this;
var _9378__$1 = this;return self__.meta9377;
});
cljs.core.async.t9376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9378,meta9377__$1){var self__ = this;
var _9378__$1 = this;return (new cljs.core.async.t9376(self__.fn1,self__._,self__.meta9374,self__.ch,self__.f,self__.map_LT_,meta9377__$1));
});
cljs.core.async.__GT_t9376 = (function __GT_t9376(fn1__$1,___$2,meta9374__$1,ch__$2,f__$2,map_LT___$2,meta9377){return (new cljs.core.async.t9376(fn1__$1,___$2,meta9374__$1,ch__$2,f__$2,map_LT___$2,meta9377));
});
}
return (new cljs.core.async.t9376(fn1,___$1,self__.meta9374,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3396__auto__ = ret;if(cljs.core.truth_(and__3396__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3396__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t9373.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9373.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9375){var self__ = this;
var _9375__$1 = this;return self__.meta9374;
});
cljs.core.async.t9373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9375,meta9374__$1){var self__ = this;
var _9375__$1 = this;return (new cljs.core.async.t9373(self__.ch,self__.f,self__.map_LT_,meta9374__$1));
});
cljs.core.async.__GT_t9373 = (function __GT_t9373(ch__$1,f__$1,map_LT___$1,meta9374){return (new cljs.core.async.t9373(ch__$1,f__$1,map_LT___$1,meta9374));
});
}
return (new cljs.core.async.t9373(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9382 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9382 = (function (ch,f,map_GT_,meta9383){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9383 = meta9383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9382.cljs$lang$type = true;
cljs.core.async.t9382.cljs$lang$ctorStr = "cljs.core.async/t9382";
cljs.core.async.t9382.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9382");
});
cljs.core.async.t9382.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9382.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9382.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9382.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9382.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9382.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9384){var self__ = this;
var _9384__$1 = this;return self__.meta9383;
});
cljs.core.async.t9382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9384,meta9383__$1){var self__ = this;
var _9384__$1 = this;return (new cljs.core.async.t9382(self__.ch,self__.f,self__.map_GT_,meta9383__$1));
});
cljs.core.async.__GT_t9382 = (function __GT_t9382(ch__$1,f__$1,map_GT___$1,meta9383){return (new cljs.core.async.t9382(ch__$1,f__$1,map_GT___$1,meta9383));
});
}
return (new cljs.core.async.t9382(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9388 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9388 = (function (ch,p,filter_GT_,meta9389){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9389 = meta9389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9388.cljs$lang$type = true;
cljs.core.async.t9388.cljs$lang$ctorStr = "cljs.core.async/t9388";
cljs.core.async.t9388.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9388");
});
cljs.core.async.t9388.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9388.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9388.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9388.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9388.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9388.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9390){var self__ = this;
var _9390__$1 = this;return self__.meta9389;
});
cljs.core.async.t9388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9390,meta9389__$1){var self__ = this;
var _9390__$1 = this;return (new cljs.core.async.t9388(self__.ch,self__.p,self__.filter_GT_,meta9389__$1));
});
cljs.core.async.__GT_t9388 = (function __GT_t9388(ch__$1,p__$1,filter_GT___$1,meta9389){return (new cljs.core.async.t9388(ch__$1,p__$1,filter_GT___$1,meta9389));
});
}
return (new cljs.core.async.t9388(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6970__auto___9473 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6971__auto__ = (function (){var switch__6955__auto__ = (function (state_9452){var state_val_9453 = (state_9452[1]);if((state_val_9453 === 1))
{var state_9452__$1 = state_9452;var statearr_9454_9474 = state_9452__$1;(statearr_9454_9474[2] = null);
(statearr_9454_9474[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9453 === 2))
{var state_9452__$1 = state_9452;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9452__$1,4,ch);
} else
{if((state_val_9453 === 3))
{var inst_9450 = (state_9452[2]);var state_9452__$1 = state_9452;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9452__$1,inst_9450);
} else
{if((state_val_9453 === 4))
{var inst_9434 = (state_9452[7]);var inst_9434__$1 = (state_9452[2]);var inst_9435 = (inst_9434__$1 == null);var state_9452__$1 = (function (){var statearr_9455 = state_9452;(statearr_9455[7] = inst_9434__$1);
return statearr_9455;
})();if(cljs.core.truth_(inst_9435))
{var statearr_9456_9475 = state_9452__$1;(statearr_9456_9475[1] = 5);
} else
{var statearr_9457_9476 = state_9452__$1;(statearr_9457_9476[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9453 === 5))
{var inst_9437 = cljs.core.async.close_BANG_.call(null,out);var state_9452__$1 = state_9452;var statearr_9458_9477 = state_9452__$1;(statearr_9458_9477[2] = inst_9437);
(statearr_9458_9477[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9453 === 6))
{var inst_9434 = (state_9452[7]);var inst_9439 = p.call(null,inst_9434);var state_9452__$1 = state_9452;if(cljs.core.truth_(inst_9439))
{var statearr_9459_9478 = state_9452__$1;(statearr_9459_9478[1] = 8);
} else
{var statearr_9460_9479 = state_9452__$1;(statearr_9460_9479[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9453 === 7))
{var inst_9448 = (state_9452[2]);var state_9452__$1 = state_9452;var statearr_9461_9480 = state_9452__$1;(statearr_9461_9480[2] = inst_9448);
(statearr_9461_9480[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9453 === 8))
{var inst_9434 = (state_9452[7]);var state_9452__$1 = state_9452;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9452__$1,11,out,inst_9434);
} else
{if((state_val_9453 === 9))
{var state_9452__$1 = state_9452;var statearr_9462_9481 = state_9452__$1;(statearr_9462_9481[2] = null);
(statearr_9462_9481[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9453 === 10))
{var inst_9445 = (state_9452[2]);var state_9452__$1 = (function (){var statearr_9463 = state_9452;(statearr_9463[8] = inst_9445);
return statearr_9463;
})();var statearr_9464_9482 = state_9452__$1;(statearr_9464_9482[2] = null);
(statearr_9464_9482[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9453 === 11))
{var inst_9442 = (state_9452[2]);var state_9452__$1 = state_9452;var statearr_9465_9483 = state_9452__$1;(statearr_9465_9483[2] = inst_9442);
(statearr_9465_9483[1] = 10);
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
});return ((function (switch__6955__auto__){
return (function() {
var state_machine__6956__auto__ = null;
var state_machine__6956__auto____0 = (function (){var statearr_9469 = [null,null,null,null,null,null,null,null,null];(statearr_9469[0] = state_machine__6956__auto__);
(statearr_9469[1] = 1);
return statearr_9469;
});
var state_machine__6956__auto____1 = (function (state_9452){while(true){
var ret_value__6957__auto__ = (function (){try{while(true){
var result__6958__auto__ = switch__6955__auto__.call(null,state_9452);if(cljs.core.keyword_identical_QMARK_.call(null,result__6958__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6958__auto__;
}
break;
}
}catch (e9470){if((e9470 instanceof Object))
{var ex__6959__auto__ = e9470;var statearr_9471_9484 = state_9452;(statearr_9471_9484[5] = ex__6959__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9452);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9470;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6957__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9485 = state_9452;
state_9452 = G__9485;
continue;
}
} else
{return ret_value__6957__auto__;
}
break;
}
});
state_machine__6956__auto__ = function(state_9452){
switch(arguments.length){
case 0:
return state_machine__6956__auto____0.call(this);
case 1:
return state_machine__6956__auto____1.call(this,state_9452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6956__auto____0;
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6956__auto____1;
return state_machine__6956__auto__;
})()
;})(switch__6955__auto__))
})();var state__6972__auto__ = (function (){var statearr_9472 = f__6971__auto__.call(null);(statearr_9472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6970__auto___9473);
return statearr_9472;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6972__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6970__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6971__auto__ = (function (){var switch__6955__auto__ = (function (state_9637){var state_val_9638 = (state_9637[1]);if((state_val_9638 === 1))
{var state_9637__$1 = state_9637;var statearr_9639_9676 = state_9637__$1;(statearr_9639_9676[2] = null);
(statearr_9639_9676[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9638 === 2))
{var state_9637__$1 = state_9637;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9637__$1,4,in$);
} else
{if((state_val_9638 === 3))
{var inst_9635 = (state_9637[2]);var state_9637__$1 = state_9637;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9637__$1,inst_9635);
} else
{if((state_val_9638 === 4))
{var inst_9583 = (state_9637[7]);var inst_9583__$1 = (state_9637[2]);var inst_9584 = (inst_9583__$1 == null);var state_9637__$1 = (function (){var statearr_9640 = state_9637;(statearr_9640[7] = inst_9583__$1);
return statearr_9640;
})();if(cljs.core.truth_(inst_9584))
{var statearr_9641_9677 = state_9637__$1;(statearr_9641_9677[1] = 5);
} else
{var statearr_9642_9678 = state_9637__$1;(statearr_9642_9678[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9638 === 5))
{var inst_9586 = cljs.core.async.close_BANG_.call(null,out);var state_9637__$1 = state_9637;var statearr_9643_9679 = state_9637__$1;(statearr_9643_9679[2] = inst_9586);
(statearr_9643_9679[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9638 === 6))
{var inst_9583 = (state_9637[7]);var inst_9588 = f.call(null,inst_9583);var inst_9593 = cljs.core.seq.call(null,inst_9588);var inst_9594 = inst_9593;var inst_9595 = null;var inst_9596 = 0;var inst_9597 = 0;var state_9637__$1 = (function (){var statearr_9644 = state_9637;(statearr_9644[8] = inst_9595);
(statearr_9644[9] = inst_9594);
(statearr_9644[10] = inst_9597);
(statearr_9644[11] = inst_9596);
return statearr_9644;
})();var statearr_9645_9680 = state_9637__$1;(statearr_9645_9680[2] = null);
(statearr_9645_9680[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9638 === 7))
{var inst_9633 = (state_9637[2]);var state_9637__$1 = state_9637;var statearr_9646_9681 = state_9637__$1;(statearr_9646_9681[2] = inst_9633);
(statearr_9646_9681[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9638 === 8))
{var inst_9597 = (state_9637[10]);var inst_9596 = (state_9637[11]);var inst_9599 = (inst_9597 < inst_9596);var inst_9600 = inst_9599;var state_9637__$1 = state_9637;if(cljs.core.truth_(inst_9600))
{var statearr_9647_9682 = state_9637__$1;(statearr_9647_9682[1] = 10);
} else
{var statearr_9648_9683 = state_9637__$1;(statearr_9648_9683[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9638 === 9))
{var inst_9630 = (state_9637[2]);var state_9637__$1 = (function (){var statearr_9649 = state_9637;(statearr_9649[12] = inst_9630);
return statearr_9649;
})();var statearr_9650_9684 = state_9637__$1;(statearr_9650_9684[2] = null);
(statearr_9650_9684[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9638 === 10))
{var inst_9595 = (state_9637[8]);var inst_9597 = (state_9637[10]);var inst_9602 = cljs.core._nth.call(null,inst_9595,inst_9597);var state_9637__$1 = state_9637;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9637__$1,13,out,inst_9602);
} else
{if((state_val_9638 === 11))
{var inst_9594 = (state_9637[9]);var inst_9608 = (state_9637[13]);var inst_9608__$1 = cljs.core.seq.call(null,inst_9594);var state_9637__$1 = (function (){var statearr_9654 = state_9637;(statearr_9654[13] = inst_9608__$1);
return statearr_9654;
})();if(inst_9608__$1)
{var statearr_9655_9685 = state_9637__$1;(statearr_9655_9685[1] = 14);
} else
{var statearr_9656_9686 = state_9637__$1;(statearr_9656_9686[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9638 === 12))
{var inst_9628 = (state_9637[2]);var state_9637__$1 = state_9637;var statearr_9657_9687 = state_9637__$1;(statearr_9657_9687[2] = inst_9628);
(statearr_9657_9687[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9638 === 13))
{var inst_9595 = (state_9637[8]);var inst_9594 = (state_9637[9]);var inst_9597 = (state_9637[10]);var inst_9596 = (state_9637[11]);var inst_9604 = (state_9637[2]);var inst_9605 = (inst_9597 + 1);var tmp9651 = inst_9595;var tmp9652 = inst_9594;var tmp9653 = inst_9596;var inst_9594__$1 = tmp9652;var inst_9595__$1 = tmp9651;var inst_9596__$1 = tmp9653;var inst_9597__$1 = inst_9605;var state_9637__$1 = (function (){var statearr_9658 = state_9637;(statearr_9658[8] = inst_9595__$1);
(statearr_9658[9] = inst_9594__$1);
(statearr_9658[10] = inst_9597__$1);
(statearr_9658[11] = inst_9596__$1);
(statearr_9658[14] = inst_9604);
return statearr_9658;
})();var statearr_9659_9688 = state_9637__$1;(statearr_9659_9688[2] = null);
(statearr_9659_9688[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9638 === 14))
{var inst_9608 = (state_9637[13]);var inst_9610 = cljs.core.chunked_seq_QMARK_.call(null,inst_9608);var state_9637__$1 = state_9637;if(inst_9610)
{var statearr_9660_9689 = state_9637__$1;(statearr_9660_9689[1] = 17);
} else
{var statearr_9661_9690 = state_9637__$1;(statearr_9661_9690[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9638 === 15))
{var state_9637__$1 = state_9637;var statearr_9662_9691 = state_9637__$1;(statearr_9662_9691[2] = null);
(statearr_9662_9691[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9638 === 16))
{var inst_9626 = (state_9637[2]);var state_9637__$1 = state_9637;var statearr_9663_9692 = state_9637__$1;(statearr_9663_9692[2] = inst_9626);
(statearr_9663_9692[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9638 === 17))
{var inst_9608 = (state_9637[13]);var inst_9612 = cljs.core.chunk_first.call(null,inst_9608);var inst_9613 = cljs.core.chunk_rest.call(null,inst_9608);var inst_9614 = cljs.core.count.call(null,inst_9612);var inst_9594 = inst_9613;var inst_9595 = inst_9612;var inst_9596 = inst_9614;var inst_9597 = 0;var state_9637__$1 = (function (){var statearr_9664 = state_9637;(statearr_9664[8] = inst_9595);
(statearr_9664[9] = inst_9594);
(statearr_9664[10] = inst_9597);
(statearr_9664[11] = inst_9596);
return statearr_9664;
})();var statearr_9665_9693 = state_9637__$1;(statearr_9665_9693[2] = null);
(statearr_9665_9693[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9638 === 18))
{var inst_9608 = (state_9637[13]);var inst_9617 = cljs.core.first.call(null,inst_9608);var state_9637__$1 = state_9637;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9637__$1,20,out,inst_9617);
} else
{if((state_val_9638 === 19))
{var inst_9623 = (state_9637[2]);var state_9637__$1 = state_9637;var statearr_9666_9694 = state_9637__$1;(statearr_9666_9694[2] = inst_9623);
(statearr_9666_9694[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9638 === 20))
{var inst_9608 = (state_9637[13]);var inst_9619 = (state_9637[2]);var inst_9620 = cljs.core.next.call(null,inst_9608);var inst_9594 = inst_9620;var inst_9595 = null;var inst_9596 = 0;var inst_9597 = 0;var state_9637__$1 = (function (){var statearr_9667 = state_9637;(statearr_9667[8] = inst_9595);
(statearr_9667[9] = inst_9594);
(statearr_9667[10] = inst_9597);
(statearr_9667[15] = inst_9619);
(statearr_9667[11] = inst_9596);
return statearr_9667;
})();var statearr_9668_9695 = state_9637__$1;(statearr_9668_9695[2] = null);
(statearr_9668_9695[1] = 8);
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
});return ((function (switch__6955__auto__){
return (function() {
var state_machine__6956__auto__ = null;
var state_machine__6956__auto____0 = (function (){var statearr_9672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9672[0] = state_machine__6956__auto__);
(statearr_9672[1] = 1);
return statearr_9672;
});
var state_machine__6956__auto____1 = (function (state_9637){while(true){
var ret_value__6957__auto__ = (function (){try{while(true){
var result__6958__auto__ = switch__6955__auto__.call(null,state_9637);if(cljs.core.keyword_identical_QMARK_.call(null,result__6958__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6958__auto__;
}
break;
}
}catch (e9673){if((e9673 instanceof Object))
{var ex__6959__auto__ = e9673;var statearr_9674_9696 = state_9637;(statearr_9674_9696[5] = ex__6959__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9637);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9673;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6957__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9697 = state_9637;
state_9637 = G__9697;
continue;
}
} else
{return ret_value__6957__auto__;
}
break;
}
});
state_machine__6956__auto__ = function(state_9637){
switch(arguments.length){
case 0:
return state_machine__6956__auto____0.call(this);
case 1:
return state_machine__6956__auto____1.call(this,state_9637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6956__auto____0;
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6956__auto____1;
return state_machine__6956__auto__;
})()
;})(switch__6955__auto__))
})();var state__6972__auto__ = (function (){var statearr_9675 = f__6971__auto__.call(null);(statearr_9675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6970__auto__);
return statearr_9675;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6972__auto__);
}));
return c__6970__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6970__auto___9778 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6971__auto__ = (function (){var switch__6955__auto__ = (function (state_9757){var state_val_9758 = (state_9757[1]);if((state_val_9758 === 1))
{var state_9757__$1 = state_9757;var statearr_9759_9779 = state_9757__$1;(statearr_9759_9779[2] = null);
(statearr_9759_9779[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9758 === 2))
{var state_9757__$1 = state_9757;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9757__$1,4,from);
} else
{if((state_val_9758 === 3))
{var inst_9755 = (state_9757[2]);var state_9757__$1 = state_9757;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9757__$1,inst_9755);
} else
{if((state_val_9758 === 4))
{var inst_9740 = (state_9757[7]);var inst_9740__$1 = (state_9757[2]);var inst_9741 = (inst_9740__$1 == null);var state_9757__$1 = (function (){var statearr_9760 = state_9757;(statearr_9760[7] = inst_9740__$1);
return statearr_9760;
})();if(cljs.core.truth_(inst_9741))
{var statearr_9761_9780 = state_9757__$1;(statearr_9761_9780[1] = 5);
} else
{var statearr_9762_9781 = state_9757__$1;(statearr_9762_9781[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9758 === 5))
{var state_9757__$1 = state_9757;if(cljs.core.truth_(close_QMARK_))
{var statearr_9763_9782 = state_9757__$1;(statearr_9763_9782[1] = 8);
} else
{var statearr_9764_9783 = state_9757__$1;(statearr_9764_9783[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9758 === 6))
{var inst_9740 = (state_9757[7]);var state_9757__$1 = state_9757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9757__$1,11,to,inst_9740);
} else
{if((state_val_9758 === 7))
{var inst_9753 = (state_9757[2]);var state_9757__$1 = state_9757;var statearr_9765_9784 = state_9757__$1;(statearr_9765_9784[2] = inst_9753);
(statearr_9765_9784[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9758 === 8))
{var inst_9744 = cljs.core.async.close_BANG_.call(null,to);var state_9757__$1 = state_9757;var statearr_9766_9785 = state_9757__$1;(statearr_9766_9785[2] = inst_9744);
(statearr_9766_9785[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9758 === 9))
{var state_9757__$1 = state_9757;var statearr_9767_9786 = state_9757__$1;(statearr_9767_9786[2] = null);
(statearr_9767_9786[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9758 === 10))
{var inst_9747 = (state_9757[2]);var state_9757__$1 = state_9757;var statearr_9768_9787 = state_9757__$1;(statearr_9768_9787[2] = inst_9747);
(statearr_9768_9787[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9758 === 11))
{var inst_9750 = (state_9757[2]);var state_9757__$1 = (function (){var statearr_9769 = state_9757;(statearr_9769[8] = inst_9750);
return statearr_9769;
})();var statearr_9770_9788 = state_9757__$1;(statearr_9770_9788[2] = null);
(statearr_9770_9788[1] = 2);
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
});return ((function (switch__6955__auto__){
return (function() {
var state_machine__6956__auto__ = null;
var state_machine__6956__auto____0 = (function (){var statearr_9774 = [null,null,null,null,null,null,null,null,null];(statearr_9774[0] = state_machine__6956__auto__);
(statearr_9774[1] = 1);
return statearr_9774;
});
var state_machine__6956__auto____1 = (function (state_9757){while(true){
var ret_value__6957__auto__ = (function (){try{while(true){
var result__6958__auto__ = switch__6955__auto__.call(null,state_9757);if(cljs.core.keyword_identical_QMARK_.call(null,result__6958__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6958__auto__;
}
break;
}
}catch (e9775){if((e9775 instanceof Object))
{var ex__6959__auto__ = e9775;var statearr_9776_9789 = state_9757;(statearr_9776_9789[5] = ex__6959__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9757);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9775;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6957__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9790 = state_9757;
state_9757 = G__9790;
continue;
}
} else
{return ret_value__6957__auto__;
}
break;
}
});
state_machine__6956__auto__ = function(state_9757){
switch(arguments.length){
case 0:
return state_machine__6956__auto____0.call(this);
case 1:
return state_machine__6956__auto____1.call(this,state_9757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6956__auto____0;
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6956__auto____1;
return state_machine__6956__auto__;
})()
;})(switch__6955__auto__))
})();var state__6972__auto__ = (function (){var statearr_9777 = f__6971__auto__.call(null);(statearr_9777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6970__auto___9778);
return statearr_9777;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6972__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6970__auto___9877 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6971__auto__ = (function (){var switch__6955__auto__ = (function (state_9855){var state_val_9856 = (state_9855[1]);if((state_val_9856 === 1))
{var state_9855__$1 = state_9855;var statearr_9857_9878 = state_9855__$1;(statearr_9857_9878[2] = null);
(statearr_9857_9878[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9856 === 2))
{var state_9855__$1 = state_9855;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9855__$1,4,ch);
} else
{if((state_val_9856 === 3))
{var inst_9853 = (state_9855[2]);var state_9855__$1 = state_9855;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9855__$1,inst_9853);
} else
{if((state_val_9856 === 4))
{var inst_9836 = (state_9855[7]);var inst_9836__$1 = (state_9855[2]);var inst_9837 = (inst_9836__$1 == null);var state_9855__$1 = (function (){var statearr_9858 = state_9855;(statearr_9858[7] = inst_9836__$1);
return statearr_9858;
})();if(cljs.core.truth_(inst_9837))
{var statearr_9859_9879 = state_9855__$1;(statearr_9859_9879[1] = 5);
} else
{var statearr_9860_9880 = state_9855__$1;(statearr_9860_9880[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9856 === 5))
{var inst_9839 = cljs.core.async.close_BANG_.call(null,tc);var inst_9840 = cljs.core.async.close_BANG_.call(null,fc);var state_9855__$1 = (function (){var statearr_9861 = state_9855;(statearr_9861[8] = inst_9839);
return statearr_9861;
})();var statearr_9862_9881 = state_9855__$1;(statearr_9862_9881[2] = inst_9840);
(statearr_9862_9881[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9856 === 6))
{var inst_9836 = (state_9855[7]);var inst_9842 = p.call(null,inst_9836);var state_9855__$1 = state_9855;if(cljs.core.truth_(inst_9842))
{var statearr_9863_9882 = state_9855__$1;(statearr_9863_9882[1] = 9);
} else
{var statearr_9864_9883 = state_9855__$1;(statearr_9864_9883[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9856 === 7))
{var inst_9851 = (state_9855[2]);var state_9855__$1 = state_9855;var statearr_9865_9884 = state_9855__$1;(statearr_9865_9884[2] = inst_9851);
(statearr_9865_9884[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9856 === 8))
{var inst_9848 = (state_9855[2]);var state_9855__$1 = (function (){var statearr_9866 = state_9855;(statearr_9866[9] = inst_9848);
return statearr_9866;
})();var statearr_9867_9885 = state_9855__$1;(statearr_9867_9885[2] = null);
(statearr_9867_9885[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9856 === 9))
{var state_9855__$1 = state_9855;var statearr_9868_9886 = state_9855__$1;(statearr_9868_9886[2] = tc);
(statearr_9868_9886[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9856 === 10))
{var state_9855__$1 = state_9855;var statearr_9869_9887 = state_9855__$1;(statearr_9869_9887[2] = fc);
(statearr_9869_9887[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9856 === 11))
{var inst_9836 = (state_9855[7]);var inst_9846 = (state_9855[2]);var state_9855__$1 = state_9855;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9855__$1,8,inst_9846,inst_9836);
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
});return ((function (switch__6955__auto__){
return (function() {
var state_machine__6956__auto__ = null;
var state_machine__6956__auto____0 = (function (){var statearr_9873 = [null,null,null,null,null,null,null,null,null,null];(statearr_9873[0] = state_machine__6956__auto__);
(statearr_9873[1] = 1);
return statearr_9873;
});
var state_machine__6956__auto____1 = (function (state_9855){while(true){
var ret_value__6957__auto__ = (function (){try{while(true){
var result__6958__auto__ = switch__6955__auto__.call(null,state_9855);if(cljs.core.keyword_identical_QMARK_.call(null,result__6958__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6958__auto__;
}
break;
}
}catch (e9874){if((e9874 instanceof Object))
{var ex__6959__auto__ = e9874;var statearr_9875_9888 = state_9855;(statearr_9875_9888[5] = ex__6959__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9855);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9874;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6957__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9889 = state_9855;
state_9855 = G__9889;
continue;
}
} else
{return ret_value__6957__auto__;
}
break;
}
});
state_machine__6956__auto__ = function(state_9855){
switch(arguments.length){
case 0:
return state_machine__6956__auto____0.call(this);
case 1:
return state_machine__6956__auto____1.call(this,state_9855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6956__auto____0;
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6956__auto____1;
return state_machine__6956__auto__;
})()
;})(switch__6955__auto__))
})();var state__6972__auto__ = (function (){var statearr_9876 = f__6971__auto__.call(null);(statearr_9876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6970__auto___9877);
return statearr_9876;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6972__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6970__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6971__auto__ = (function (){var switch__6955__auto__ = (function (state_9936){var state_val_9937 = (state_9936[1]);if((state_val_9937 === 7))
{var inst_9932 = (state_9936[2]);var state_9936__$1 = state_9936;var statearr_9938_9954 = state_9936__$1;(statearr_9938_9954[2] = inst_9932);
(statearr_9938_9954[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9937 === 6))
{var inst_9925 = (state_9936[7]);var inst_9922 = (state_9936[8]);var inst_9929 = f.call(null,inst_9922,inst_9925);var inst_9922__$1 = inst_9929;var state_9936__$1 = (function (){var statearr_9939 = state_9936;(statearr_9939[8] = inst_9922__$1);
return statearr_9939;
})();var statearr_9940_9955 = state_9936__$1;(statearr_9940_9955[2] = null);
(statearr_9940_9955[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9937 === 5))
{var inst_9922 = (state_9936[8]);var state_9936__$1 = state_9936;var statearr_9941_9956 = state_9936__$1;(statearr_9941_9956[2] = inst_9922);
(statearr_9941_9956[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9937 === 4))
{var inst_9925 = (state_9936[7]);var inst_9925__$1 = (state_9936[2]);var inst_9926 = (inst_9925__$1 == null);var state_9936__$1 = (function (){var statearr_9942 = state_9936;(statearr_9942[7] = inst_9925__$1);
return statearr_9942;
})();if(cljs.core.truth_(inst_9926))
{var statearr_9943_9957 = state_9936__$1;(statearr_9943_9957[1] = 5);
} else
{var statearr_9944_9958 = state_9936__$1;(statearr_9944_9958[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9937 === 3))
{var inst_9934 = (state_9936[2]);var state_9936__$1 = state_9936;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9936__$1,inst_9934);
} else
{if((state_val_9937 === 2))
{var state_9936__$1 = state_9936;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9936__$1,4,ch);
} else
{if((state_val_9937 === 1))
{var inst_9922 = init;var state_9936__$1 = (function (){var statearr_9945 = state_9936;(statearr_9945[8] = inst_9922);
return statearr_9945;
})();var statearr_9946_9959 = state_9936__$1;(statearr_9946_9959[2] = null);
(statearr_9946_9959[1] = 2);
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
});return ((function (switch__6955__auto__){
return (function() {
var state_machine__6956__auto__ = null;
var state_machine__6956__auto____0 = (function (){var statearr_9950 = [null,null,null,null,null,null,null,null,null];(statearr_9950[0] = state_machine__6956__auto__);
(statearr_9950[1] = 1);
return statearr_9950;
});
var state_machine__6956__auto____1 = (function (state_9936){while(true){
var ret_value__6957__auto__ = (function (){try{while(true){
var result__6958__auto__ = switch__6955__auto__.call(null,state_9936);if(cljs.core.keyword_identical_QMARK_.call(null,result__6958__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6958__auto__;
}
break;
}
}catch (e9951){if((e9951 instanceof Object))
{var ex__6959__auto__ = e9951;var statearr_9952_9960 = state_9936;(statearr_9952_9960[5] = ex__6959__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9936);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9951;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6957__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9961 = state_9936;
state_9936 = G__9961;
continue;
}
} else
{return ret_value__6957__auto__;
}
break;
}
});
state_machine__6956__auto__ = function(state_9936){
switch(arguments.length){
case 0:
return state_machine__6956__auto____0.call(this);
case 1:
return state_machine__6956__auto____1.call(this,state_9936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6956__auto____0;
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6956__auto____1;
return state_machine__6956__auto__;
})()
;})(switch__6955__auto__))
})();var state__6972__auto__ = (function (){var statearr_9953 = f__6971__auto__.call(null);(statearr_9953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6970__auto__);
return statearr_9953;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6972__auto__);
}));
return c__6970__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6970__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6971__auto__ = (function (){var switch__6955__auto__ = (function (state_10023){var state_val_10024 = (state_10023[1]);if((state_val_10024 === 1))
{var inst_10003 = cljs.core.seq.call(null,coll);var inst_10004 = inst_10003;var state_10023__$1 = (function (){var statearr_10025 = state_10023;(statearr_10025[7] = inst_10004);
return statearr_10025;
})();var statearr_10026_10044 = state_10023__$1;(statearr_10026_10044[2] = null);
(statearr_10026_10044[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10024 === 2))
{var inst_10004 = (state_10023[7]);var state_10023__$1 = state_10023;if(cljs.core.truth_(inst_10004))
{var statearr_10027_10045 = state_10023__$1;(statearr_10027_10045[1] = 4);
} else
{var statearr_10028_10046 = state_10023__$1;(statearr_10028_10046[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10024 === 3))
{var inst_10021 = (state_10023[2]);var state_10023__$1 = state_10023;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10023__$1,inst_10021);
} else
{if((state_val_10024 === 4))
{var inst_10004 = (state_10023[7]);var inst_10007 = cljs.core.first.call(null,inst_10004);var state_10023__$1 = state_10023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10023__$1,7,ch,inst_10007);
} else
{if((state_val_10024 === 5))
{var state_10023__$1 = state_10023;if(cljs.core.truth_(close_QMARK_))
{var statearr_10029_10047 = state_10023__$1;(statearr_10029_10047[1] = 8);
} else
{var statearr_10030_10048 = state_10023__$1;(statearr_10030_10048[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10024 === 6))
{var inst_10019 = (state_10023[2]);var state_10023__$1 = state_10023;var statearr_10031_10049 = state_10023__$1;(statearr_10031_10049[2] = inst_10019);
(statearr_10031_10049[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10024 === 7))
{var inst_10004 = (state_10023[7]);var inst_10009 = (state_10023[2]);var inst_10010 = cljs.core.next.call(null,inst_10004);var inst_10004__$1 = inst_10010;var state_10023__$1 = (function (){var statearr_10032 = state_10023;(statearr_10032[7] = inst_10004__$1);
(statearr_10032[8] = inst_10009);
return statearr_10032;
})();var statearr_10033_10050 = state_10023__$1;(statearr_10033_10050[2] = null);
(statearr_10033_10050[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10024 === 8))
{var inst_10014 = cljs.core.async.close_BANG_.call(null,ch);var state_10023__$1 = state_10023;var statearr_10034_10051 = state_10023__$1;(statearr_10034_10051[2] = inst_10014);
(statearr_10034_10051[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10024 === 9))
{var state_10023__$1 = state_10023;var statearr_10035_10052 = state_10023__$1;(statearr_10035_10052[2] = null);
(statearr_10035_10052[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10024 === 10))
{var inst_10017 = (state_10023[2]);var state_10023__$1 = state_10023;var statearr_10036_10053 = state_10023__$1;(statearr_10036_10053[2] = inst_10017);
(statearr_10036_10053[1] = 6);
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
});return ((function (switch__6955__auto__){
return (function() {
var state_machine__6956__auto__ = null;
var state_machine__6956__auto____0 = (function (){var statearr_10040 = [null,null,null,null,null,null,null,null,null];(statearr_10040[0] = state_machine__6956__auto__);
(statearr_10040[1] = 1);
return statearr_10040;
});
var state_machine__6956__auto____1 = (function (state_10023){while(true){
var ret_value__6957__auto__ = (function (){try{while(true){
var result__6958__auto__ = switch__6955__auto__.call(null,state_10023);if(cljs.core.keyword_identical_QMARK_.call(null,result__6958__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6958__auto__;
}
break;
}
}catch (e10041){if((e10041 instanceof Object))
{var ex__6959__auto__ = e10041;var statearr_10042_10054 = state_10023;(statearr_10042_10054[5] = ex__6959__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10023);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10041;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6957__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10055 = state_10023;
state_10023 = G__10055;
continue;
}
} else
{return ret_value__6957__auto__;
}
break;
}
});
state_machine__6956__auto__ = function(state_10023){
switch(arguments.length){
case 0:
return state_machine__6956__auto____0.call(this);
case 1:
return state_machine__6956__auto____1.call(this,state_10023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6956__auto____0;
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6956__auto____1;
return state_machine__6956__auto__;
})()
;})(switch__6955__auto__))
})();var state__6972__auto__ = (function (){var statearr_10043 = f__6971__auto__.call(null);(statearr_10043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6970__auto__);
return statearr_10043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6972__auto__);
}));
return c__6970__auto__;
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
cljs.core.async.Mux = (function (){var obj10057 = {};return obj10057;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3396__auto__ = _;if(and__3396__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4029__auto__ = (((_ == null))?null:_);return (function (){var or__3408__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj10059 = {};return obj10059;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10283 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10283 = (function (cs,ch,mult,meta10284){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10284 = meta10284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10283.cljs$lang$type = true;
cljs.core.async.t10283.cljs$lang$ctorStr = "cljs.core.async/t10283";
cljs.core.async.t10283.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10283");
});})(cs))
;
cljs.core.async.t10283.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10283.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10283.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10283.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10283.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10283.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10283.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10285){var self__ = this;
var _10285__$1 = this;return self__.meta10284;
});})(cs))
;
cljs.core.async.t10283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10285,meta10284__$1){var self__ = this;
var _10285__$1 = this;return (new cljs.core.async.t10283(self__.cs,self__.ch,self__.mult,meta10284__$1));
});})(cs))
;
cljs.core.async.__GT_t10283 = ((function (cs){
return (function __GT_t10283(cs__$1,ch__$1,mult__$1,meta10284){return (new cljs.core.async.t10283(cs__$1,ch__$1,mult__$1,meta10284));
});})(cs))
;
}
return (new cljs.core.async.t10283(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6970__auto___10506 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6971__auto__ = (function (){var switch__6955__auto__ = (function (state_10420){var state_val_10421 = (state_10420[1]);if((state_val_10421 === 32))
{var inst_10288 = (state_10420[7]);var inst_10364 = (state_10420[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10420,31,Object,null,30);var inst_10371 = cljs.core.async.put_BANG_.call(null,inst_10364,inst_10288,done);var state_10420__$1 = state_10420;var statearr_10422_10507 = state_10420__$1;(statearr_10422_10507[2] = inst_10371);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10420__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 1))
{var state_10420__$1 = state_10420;var statearr_10423_10508 = state_10420__$1;(statearr_10423_10508[2] = null);
(statearr_10423_10508[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 33))
{var inst_10377 = (state_10420[9]);var inst_10379 = cljs.core.chunked_seq_QMARK_.call(null,inst_10377);var state_10420__$1 = state_10420;if(inst_10379)
{var statearr_10424_10509 = state_10420__$1;(statearr_10424_10509[1] = 36);
} else
{var statearr_10425_10510 = state_10420__$1;(statearr_10425_10510[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 2))
{var state_10420__$1 = state_10420;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10420__$1,4,ch);
} else
{if((state_val_10421 === 34))
{var state_10420__$1 = state_10420;var statearr_10426_10511 = state_10420__$1;(statearr_10426_10511[2] = null);
(statearr_10426_10511[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 3))
{var inst_10418 = (state_10420[2]);var state_10420__$1 = state_10420;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10420__$1,inst_10418);
} else
{if((state_val_10421 === 35))
{var inst_10402 = (state_10420[2]);var state_10420__$1 = state_10420;var statearr_10427_10512 = state_10420__$1;(statearr_10427_10512[2] = inst_10402);
(statearr_10427_10512[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 4))
{var inst_10288 = (state_10420[7]);var inst_10288__$1 = (state_10420[2]);var inst_10289 = (inst_10288__$1 == null);var state_10420__$1 = (function (){var statearr_10428 = state_10420;(statearr_10428[7] = inst_10288__$1);
return statearr_10428;
})();if(cljs.core.truth_(inst_10289))
{var statearr_10429_10513 = state_10420__$1;(statearr_10429_10513[1] = 5);
} else
{var statearr_10430_10514 = state_10420__$1;(statearr_10430_10514[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 36))
{var inst_10377 = (state_10420[9]);var inst_10381 = cljs.core.chunk_first.call(null,inst_10377);var inst_10382 = cljs.core.chunk_rest.call(null,inst_10377);var inst_10383 = cljs.core.count.call(null,inst_10381);var inst_10356 = inst_10382;var inst_10357 = inst_10381;var inst_10358 = inst_10383;var inst_10359 = 0;var state_10420__$1 = (function (){var statearr_10431 = state_10420;(statearr_10431[10] = inst_10356);
(statearr_10431[11] = inst_10357);
(statearr_10431[12] = inst_10358);
(statearr_10431[13] = inst_10359);
return statearr_10431;
})();var statearr_10432_10515 = state_10420__$1;(statearr_10432_10515[2] = null);
(statearr_10432_10515[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 5))
{var inst_10295 = cljs.core.deref.call(null,cs);var inst_10296 = cljs.core.seq.call(null,inst_10295);var inst_10297 = inst_10296;var inst_10298 = null;var inst_10299 = 0;var inst_10300 = 0;var state_10420__$1 = (function (){var statearr_10433 = state_10420;(statearr_10433[14] = inst_10299);
(statearr_10433[15] = inst_10298);
(statearr_10433[16] = inst_10297);
(statearr_10433[17] = inst_10300);
return statearr_10433;
})();var statearr_10434_10516 = state_10420__$1;(statearr_10434_10516[2] = null);
(statearr_10434_10516[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 37))
{var inst_10377 = (state_10420[9]);var inst_10386 = cljs.core.first.call(null,inst_10377);var state_10420__$1 = (function (){var statearr_10435 = state_10420;(statearr_10435[18] = inst_10386);
return statearr_10435;
})();var statearr_10436_10517 = state_10420__$1;(statearr_10436_10517[2] = null);
(statearr_10436_10517[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 6))
{var inst_10348 = (state_10420[19]);var inst_10347 = cljs.core.deref.call(null,cs);var inst_10348__$1 = cljs.core.keys.call(null,inst_10347);var inst_10349 = cljs.core.count.call(null,inst_10348__$1);var inst_10350 = cljs.core.reset_BANG_.call(null,dctr,inst_10349);var inst_10355 = cljs.core.seq.call(null,inst_10348__$1);var inst_10356 = inst_10355;var inst_10357 = null;var inst_10358 = 0;var inst_10359 = 0;var state_10420__$1 = (function (){var statearr_10437 = state_10420;(statearr_10437[10] = inst_10356);
(statearr_10437[11] = inst_10357);
(statearr_10437[12] = inst_10358);
(statearr_10437[13] = inst_10359);
(statearr_10437[19] = inst_10348__$1);
(statearr_10437[20] = inst_10350);
return statearr_10437;
})();var statearr_10438_10518 = state_10420__$1;(statearr_10438_10518[2] = null);
(statearr_10438_10518[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 38))
{var inst_10399 = (state_10420[2]);var state_10420__$1 = state_10420;var statearr_10439_10519 = state_10420__$1;(statearr_10439_10519[2] = inst_10399);
(statearr_10439_10519[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 7))
{var inst_10416 = (state_10420[2]);var state_10420__$1 = state_10420;var statearr_10440_10520 = state_10420__$1;(statearr_10440_10520[2] = inst_10416);
(statearr_10440_10520[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 39))
{var inst_10377 = (state_10420[9]);var inst_10395 = (state_10420[2]);var inst_10396 = cljs.core.next.call(null,inst_10377);var inst_10356 = inst_10396;var inst_10357 = null;var inst_10358 = 0;var inst_10359 = 0;var state_10420__$1 = (function (){var statearr_10441 = state_10420;(statearr_10441[10] = inst_10356);
(statearr_10441[11] = inst_10357);
(statearr_10441[12] = inst_10358);
(statearr_10441[13] = inst_10359);
(statearr_10441[21] = inst_10395);
return statearr_10441;
})();var statearr_10442_10521 = state_10420__$1;(statearr_10442_10521[2] = null);
(statearr_10442_10521[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 8))
{var inst_10299 = (state_10420[14]);var inst_10300 = (state_10420[17]);var inst_10302 = (inst_10300 < inst_10299);var inst_10303 = inst_10302;var state_10420__$1 = state_10420;if(cljs.core.truth_(inst_10303))
{var statearr_10443_10522 = state_10420__$1;(statearr_10443_10522[1] = 10);
} else
{var statearr_10444_10523 = state_10420__$1;(statearr_10444_10523[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 40))
{var inst_10386 = (state_10420[18]);var inst_10387 = (state_10420[2]);var inst_10388 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10389 = cljs.core.async.untap_STAR_.call(null,m,inst_10386);var state_10420__$1 = (function (){var statearr_10445 = state_10420;(statearr_10445[22] = inst_10388);
(statearr_10445[23] = inst_10387);
return statearr_10445;
})();var statearr_10446_10524 = state_10420__$1;(statearr_10446_10524[2] = inst_10389);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10420__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 9))
{var inst_10345 = (state_10420[2]);var state_10420__$1 = state_10420;var statearr_10447_10525 = state_10420__$1;(statearr_10447_10525[2] = inst_10345);
(statearr_10447_10525[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 41))
{var inst_10288 = (state_10420[7]);var inst_10386 = (state_10420[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10420,40,Object,null,39);var inst_10393 = cljs.core.async.put_BANG_.call(null,inst_10386,inst_10288,done);var state_10420__$1 = state_10420;var statearr_10448_10526 = state_10420__$1;(statearr_10448_10526[2] = inst_10393);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10420__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 10))
{var inst_10298 = (state_10420[15]);var inst_10300 = (state_10420[17]);var inst_10306 = cljs.core._nth.call(null,inst_10298,inst_10300);var inst_10307 = cljs.core.nth.call(null,inst_10306,0,null);var inst_10308 = cljs.core.nth.call(null,inst_10306,1,null);var state_10420__$1 = (function (){var statearr_10449 = state_10420;(statearr_10449[24] = inst_10307);
return statearr_10449;
})();if(cljs.core.truth_(inst_10308))
{var statearr_10450_10527 = state_10420__$1;(statearr_10450_10527[1] = 13);
} else
{var statearr_10451_10528 = state_10420__$1;(statearr_10451_10528[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 42))
{var state_10420__$1 = state_10420;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10420__$1,45,dchan);
} else
{if((state_val_10421 === 11))
{var inst_10297 = (state_10420[16]);var inst_10317 = (state_10420[25]);var inst_10317__$1 = cljs.core.seq.call(null,inst_10297);var state_10420__$1 = (function (){var statearr_10452 = state_10420;(statearr_10452[25] = inst_10317__$1);
return statearr_10452;
})();if(inst_10317__$1)
{var statearr_10453_10529 = state_10420__$1;(statearr_10453_10529[1] = 16);
} else
{var statearr_10454_10530 = state_10420__$1;(statearr_10454_10530[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 43))
{var state_10420__$1 = state_10420;var statearr_10455_10531 = state_10420__$1;(statearr_10455_10531[2] = null);
(statearr_10455_10531[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 12))
{var inst_10343 = (state_10420[2]);var state_10420__$1 = state_10420;var statearr_10456_10532 = state_10420__$1;(statearr_10456_10532[2] = inst_10343);
(statearr_10456_10532[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 44))
{var inst_10413 = (state_10420[2]);var state_10420__$1 = (function (){var statearr_10457 = state_10420;(statearr_10457[26] = inst_10413);
return statearr_10457;
})();var statearr_10458_10533 = state_10420__$1;(statearr_10458_10533[2] = null);
(statearr_10458_10533[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 13))
{var inst_10307 = (state_10420[24]);var inst_10310 = cljs.core.async.close_BANG_.call(null,inst_10307);var state_10420__$1 = state_10420;var statearr_10459_10534 = state_10420__$1;(statearr_10459_10534[2] = inst_10310);
(statearr_10459_10534[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 45))
{var inst_10410 = (state_10420[2]);var state_10420__$1 = state_10420;var statearr_10463_10535 = state_10420__$1;(statearr_10463_10535[2] = inst_10410);
(statearr_10463_10535[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 14))
{var state_10420__$1 = state_10420;var statearr_10464_10536 = state_10420__$1;(statearr_10464_10536[2] = null);
(statearr_10464_10536[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 15))
{var inst_10299 = (state_10420[14]);var inst_10298 = (state_10420[15]);var inst_10297 = (state_10420[16]);var inst_10300 = (state_10420[17]);var inst_10313 = (state_10420[2]);var inst_10314 = (inst_10300 + 1);var tmp10460 = inst_10299;var tmp10461 = inst_10298;var tmp10462 = inst_10297;var inst_10297__$1 = tmp10462;var inst_10298__$1 = tmp10461;var inst_10299__$1 = tmp10460;var inst_10300__$1 = inst_10314;var state_10420__$1 = (function (){var statearr_10465 = state_10420;(statearr_10465[14] = inst_10299__$1);
(statearr_10465[15] = inst_10298__$1);
(statearr_10465[16] = inst_10297__$1);
(statearr_10465[27] = inst_10313);
(statearr_10465[17] = inst_10300__$1);
return statearr_10465;
})();var statearr_10466_10537 = state_10420__$1;(statearr_10466_10537[2] = null);
(statearr_10466_10537[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 16))
{var inst_10317 = (state_10420[25]);var inst_10319 = cljs.core.chunked_seq_QMARK_.call(null,inst_10317);var state_10420__$1 = state_10420;if(inst_10319)
{var statearr_10467_10538 = state_10420__$1;(statearr_10467_10538[1] = 19);
} else
{var statearr_10468_10539 = state_10420__$1;(statearr_10468_10539[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 17))
{var state_10420__$1 = state_10420;var statearr_10469_10540 = state_10420__$1;(statearr_10469_10540[2] = null);
(statearr_10469_10540[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 18))
{var inst_10341 = (state_10420[2]);var state_10420__$1 = state_10420;var statearr_10470_10541 = state_10420__$1;(statearr_10470_10541[2] = inst_10341);
(statearr_10470_10541[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 19))
{var inst_10317 = (state_10420[25]);var inst_10321 = cljs.core.chunk_first.call(null,inst_10317);var inst_10322 = cljs.core.chunk_rest.call(null,inst_10317);var inst_10323 = cljs.core.count.call(null,inst_10321);var inst_10297 = inst_10322;var inst_10298 = inst_10321;var inst_10299 = inst_10323;var inst_10300 = 0;var state_10420__$1 = (function (){var statearr_10471 = state_10420;(statearr_10471[14] = inst_10299);
(statearr_10471[15] = inst_10298);
(statearr_10471[16] = inst_10297);
(statearr_10471[17] = inst_10300);
return statearr_10471;
})();var statearr_10472_10542 = state_10420__$1;(statearr_10472_10542[2] = null);
(statearr_10472_10542[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 20))
{var inst_10317 = (state_10420[25]);var inst_10327 = cljs.core.first.call(null,inst_10317);var inst_10328 = cljs.core.nth.call(null,inst_10327,0,null);var inst_10329 = cljs.core.nth.call(null,inst_10327,1,null);var state_10420__$1 = (function (){var statearr_10473 = state_10420;(statearr_10473[28] = inst_10328);
return statearr_10473;
})();if(cljs.core.truth_(inst_10329))
{var statearr_10474_10543 = state_10420__$1;(statearr_10474_10543[1] = 22);
} else
{var statearr_10475_10544 = state_10420__$1;(statearr_10475_10544[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 21))
{var inst_10338 = (state_10420[2]);var state_10420__$1 = state_10420;var statearr_10476_10545 = state_10420__$1;(statearr_10476_10545[2] = inst_10338);
(statearr_10476_10545[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 22))
{var inst_10328 = (state_10420[28]);var inst_10331 = cljs.core.async.close_BANG_.call(null,inst_10328);var state_10420__$1 = state_10420;var statearr_10477_10546 = state_10420__$1;(statearr_10477_10546[2] = inst_10331);
(statearr_10477_10546[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 23))
{var state_10420__$1 = state_10420;var statearr_10478_10547 = state_10420__$1;(statearr_10478_10547[2] = null);
(statearr_10478_10547[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 24))
{var inst_10317 = (state_10420[25]);var inst_10334 = (state_10420[2]);var inst_10335 = cljs.core.next.call(null,inst_10317);var inst_10297 = inst_10335;var inst_10298 = null;var inst_10299 = 0;var inst_10300 = 0;var state_10420__$1 = (function (){var statearr_10479 = state_10420;(statearr_10479[14] = inst_10299);
(statearr_10479[15] = inst_10298);
(statearr_10479[16] = inst_10297);
(statearr_10479[29] = inst_10334);
(statearr_10479[17] = inst_10300);
return statearr_10479;
})();var statearr_10480_10548 = state_10420__$1;(statearr_10480_10548[2] = null);
(statearr_10480_10548[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 25))
{var inst_10358 = (state_10420[12]);var inst_10359 = (state_10420[13]);var inst_10361 = (inst_10359 < inst_10358);var inst_10362 = inst_10361;var state_10420__$1 = state_10420;if(cljs.core.truth_(inst_10362))
{var statearr_10481_10549 = state_10420__$1;(statearr_10481_10549[1] = 27);
} else
{var statearr_10482_10550 = state_10420__$1;(statearr_10482_10550[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 26))
{var inst_10348 = (state_10420[19]);var inst_10406 = (state_10420[2]);var inst_10407 = cljs.core.seq.call(null,inst_10348);var state_10420__$1 = (function (){var statearr_10483 = state_10420;(statearr_10483[30] = inst_10406);
return statearr_10483;
})();if(inst_10407)
{var statearr_10484_10551 = state_10420__$1;(statearr_10484_10551[1] = 42);
} else
{var statearr_10485_10552 = state_10420__$1;(statearr_10485_10552[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 27))
{var inst_10357 = (state_10420[11]);var inst_10359 = (state_10420[13]);var inst_10364 = cljs.core._nth.call(null,inst_10357,inst_10359);var state_10420__$1 = (function (){var statearr_10486 = state_10420;(statearr_10486[8] = inst_10364);
return statearr_10486;
})();var statearr_10487_10553 = state_10420__$1;(statearr_10487_10553[2] = null);
(statearr_10487_10553[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 28))
{var inst_10377 = (state_10420[9]);var inst_10356 = (state_10420[10]);var inst_10377__$1 = cljs.core.seq.call(null,inst_10356);var state_10420__$1 = (function (){var statearr_10491 = state_10420;(statearr_10491[9] = inst_10377__$1);
return statearr_10491;
})();if(inst_10377__$1)
{var statearr_10492_10554 = state_10420__$1;(statearr_10492_10554[1] = 33);
} else
{var statearr_10493_10555 = state_10420__$1;(statearr_10493_10555[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 29))
{var inst_10404 = (state_10420[2]);var state_10420__$1 = state_10420;var statearr_10494_10556 = state_10420__$1;(statearr_10494_10556[2] = inst_10404);
(statearr_10494_10556[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 30))
{var inst_10356 = (state_10420[10]);var inst_10357 = (state_10420[11]);var inst_10358 = (state_10420[12]);var inst_10359 = (state_10420[13]);var inst_10373 = (state_10420[2]);var inst_10374 = (inst_10359 + 1);var tmp10488 = inst_10356;var tmp10489 = inst_10357;var tmp10490 = inst_10358;var inst_10356__$1 = tmp10488;var inst_10357__$1 = tmp10489;var inst_10358__$1 = tmp10490;var inst_10359__$1 = inst_10374;var state_10420__$1 = (function (){var statearr_10495 = state_10420;(statearr_10495[31] = inst_10373);
(statearr_10495[10] = inst_10356__$1);
(statearr_10495[11] = inst_10357__$1);
(statearr_10495[12] = inst_10358__$1);
(statearr_10495[13] = inst_10359__$1);
return statearr_10495;
})();var statearr_10496_10557 = state_10420__$1;(statearr_10496_10557[2] = null);
(statearr_10496_10557[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10421 === 31))
{var inst_10364 = (state_10420[8]);var inst_10365 = (state_10420[2]);var inst_10366 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10367 = cljs.core.async.untap_STAR_.call(null,m,inst_10364);var state_10420__$1 = (function (){var statearr_10497 = state_10420;(statearr_10497[32] = inst_10366);
(statearr_10497[33] = inst_10365);
return statearr_10497;
})();var statearr_10498_10558 = state_10420__$1;(statearr_10498_10558[2] = inst_10367);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10420__$1);
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
});return ((function (switch__6955__auto__){
return (function() {
var state_machine__6956__auto__ = null;
var state_machine__6956__auto____0 = (function (){var statearr_10502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10502[0] = state_machine__6956__auto__);
(statearr_10502[1] = 1);
return statearr_10502;
});
var state_machine__6956__auto____1 = (function (state_10420){while(true){
var ret_value__6957__auto__ = (function (){try{while(true){
var result__6958__auto__ = switch__6955__auto__.call(null,state_10420);if(cljs.core.keyword_identical_QMARK_.call(null,result__6958__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6958__auto__;
}
break;
}
}catch (e10503){if((e10503 instanceof Object))
{var ex__6959__auto__ = e10503;var statearr_10504_10559 = state_10420;(statearr_10504_10559[5] = ex__6959__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10420);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10503;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6957__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10560 = state_10420;
state_10420 = G__10560;
continue;
}
} else
{return ret_value__6957__auto__;
}
break;
}
});
state_machine__6956__auto__ = function(state_10420){
switch(arguments.length){
case 0:
return state_machine__6956__auto____0.call(this);
case 1:
return state_machine__6956__auto____1.call(this,state_10420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6956__auto____0;
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6956__auto____1;
return state_machine__6956__auto__;
})()
;})(switch__6955__auto__))
})();var state__6972__auto__ = (function (){var statearr_10505 = f__6971__auto__.call(null);(statearr_10505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6970__auto___10506);
return statearr_10505;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6972__auto__);
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
cljs.core.async.Mix = (function (){var obj10562 = {};return obj10562;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t10672 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10672 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta10673){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta10673 = meta10673;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10672.cljs$lang$type = true;
cljs.core.async.t10672.cljs$lang$ctorStr = "cljs.core.async/t10672";
cljs.core.async.t10672.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10672");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10672.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10672.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10672.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10672.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10672.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10672.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10672.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10672.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10672.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10674){var self__ = this;
var _10674__$1 = this;return self__.meta10673;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10674,meta10673__$1){var self__ = this;
var _10674__$1 = this;return (new cljs.core.async.t10672(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta10673__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10672 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10672(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10673){return (new cljs.core.async.t10672(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10673));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10672(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6970__auto___10781 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6971__auto__ = (function (){var switch__6955__auto__ = (function (state_10739){var state_val_10740 = (state_10739[1]);if((state_val_10740 === 1))
{var inst_10678 = (state_10739[7]);var inst_10678__$1 = calc_state.call(null);var inst_10679 = cljs.core.seq_QMARK_.call(null,inst_10678__$1);var state_10739__$1 = (function (){var statearr_10741 = state_10739;(statearr_10741[7] = inst_10678__$1);
return statearr_10741;
})();if(inst_10679)
{var statearr_10742_10782 = state_10739__$1;(statearr_10742_10782[1] = 2);
} else
{var statearr_10743_10783 = state_10739__$1;(statearr_10743_10783[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10740 === 2))
{var inst_10678 = (state_10739[7]);var inst_10681 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10678);var state_10739__$1 = state_10739;var statearr_10744_10784 = state_10739__$1;(statearr_10744_10784[2] = inst_10681);
(statearr_10744_10784[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10740 === 3))
{var inst_10678 = (state_10739[7]);var state_10739__$1 = state_10739;var statearr_10745_10785 = state_10739__$1;(statearr_10745_10785[2] = inst_10678);
(statearr_10745_10785[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10740 === 4))
{var inst_10678 = (state_10739[7]);var inst_10684 = (state_10739[2]);var inst_10685 = cljs.core.get.call(null,inst_10684,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10686 = cljs.core.get.call(null,inst_10684,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10687 = cljs.core.get.call(null,inst_10684,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_10688 = inst_10678;var state_10739__$1 = (function (){var statearr_10746 = state_10739;(statearr_10746[8] = inst_10686);
(statearr_10746[9] = inst_10687);
(statearr_10746[10] = inst_10688);
(statearr_10746[11] = inst_10685);
return statearr_10746;
})();var statearr_10747_10786 = state_10739__$1;(statearr_10747_10786[2] = null);
(statearr_10747_10786[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10740 === 5))
{var inst_10688 = (state_10739[10]);var inst_10691 = cljs.core.seq_QMARK_.call(null,inst_10688);var state_10739__$1 = state_10739;if(inst_10691)
{var statearr_10748_10787 = state_10739__$1;(statearr_10748_10787[1] = 7);
} else
{var statearr_10749_10788 = state_10739__$1;(statearr_10749_10788[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10740 === 6))
{var inst_10737 = (state_10739[2]);var state_10739__$1 = state_10739;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10739__$1,inst_10737);
} else
{if((state_val_10740 === 7))
{var inst_10688 = (state_10739[10]);var inst_10693 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10688);var state_10739__$1 = state_10739;var statearr_10750_10789 = state_10739__$1;(statearr_10750_10789[2] = inst_10693);
(statearr_10750_10789[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10740 === 8))
{var inst_10688 = (state_10739[10]);var state_10739__$1 = state_10739;var statearr_10751_10790 = state_10739__$1;(statearr_10751_10790[2] = inst_10688);
(statearr_10751_10790[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10740 === 9))
{var inst_10696 = (state_10739[12]);var inst_10696__$1 = (state_10739[2]);var inst_10697 = cljs.core.get.call(null,inst_10696__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10698 = cljs.core.get.call(null,inst_10696__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10699 = cljs.core.get.call(null,inst_10696__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_10739__$1 = (function (){var statearr_10752 = state_10739;(statearr_10752[12] = inst_10696__$1);
(statearr_10752[13] = inst_10698);
(statearr_10752[14] = inst_10699);
return statearr_10752;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10739__$1,10,inst_10697);
} else
{if((state_val_10740 === 10))
{var inst_10704 = (state_10739[15]);var inst_10703 = (state_10739[16]);var inst_10702 = (state_10739[2]);var inst_10703__$1 = cljs.core.nth.call(null,inst_10702,0,null);var inst_10704__$1 = cljs.core.nth.call(null,inst_10702,1,null);var inst_10705 = (inst_10703__$1 == null);var inst_10706 = cljs.core._EQ_.call(null,inst_10704__$1,change);var inst_10707 = (inst_10705) || (inst_10706);var state_10739__$1 = (function (){var statearr_10753 = state_10739;(statearr_10753[15] = inst_10704__$1);
(statearr_10753[16] = inst_10703__$1);
return statearr_10753;
})();if(cljs.core.truth_(inst_10707))
{var statearr_10754_10791 = state_10739__$1;(statearr_10754_10791[1] = 11);
} else
{var statearr_10755_10792 = state_10739__$1;(statearr_10755_10792[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10740 === 11))
{var inst_10703 = (state_10739[16]);var inst_10709 = (inst_10703 == null);var state_10739__$1 = state_10739;if(cljs.core.truth_(inst_10709))
{var statearr_10756_10793 = state_10739__$1;(statearr_10756_10793[1] = 14);
} else
{var statearr_10757_10794 = state_10739__$1;(statearr_10757_10794[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10740 === 12))
{var inst_10704 = (state_10739[15]);var inst_10718 = (state_10739[17]);var inst_10699 = (state_10739[14]);var inst_10718__$1 = inst_10699.call(null,inst_10704);var state_10739__$1 = (function (){var statearr_10758 = state_10739;(statearr_10758[17] = inst_10718__$1);
return statearr_10758;
})();if(cljs.core.truth_(inst_10718__$1))
{var statearr_10759_10795 = state_10739__$1;(statearr_10759_10795[1] = 17);
} else
{var statearr_10760_10796 = state_10739__$1;(statearr_10760_10796[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10740 === 13))
{var inst_10735 = (state_10739[2]);var state_10739__$1 = state_10739;var statearr_10761_10797 = state_10739__$1;(statearr_10761_10797[2] = inst_10735);
(statearr_10761_10797[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10740 === 14))
{var inst_10704 = (state_10739[15]);var inst_10711 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10704);var state_10739__$1 = state_10739;var statearr_10762_10798 = state_10739__$1;(statearr_10762_10798[2] = inst_10711);
(statearr_10762_10798[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10740 === 15))
{var state_10739__$1 = state_10739;var statearr_10763_10799 = state_10739__$1;(statearr_10763_10799[2] = null);
(statearr_10763_10799[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10740 === 16))
{var inst_10714 = (state_10739[2]);var inst_10715 = calc_state.call(null);var inst_10688 = inst_10715;var state_10739__$1 = (function (){var statearr_10764 = state_10739;(statearr_10764[10] = inst_10688);
(statearr_10764[18] = inst_10714);
return statearr_10764;
})();var statearr_10765_10800 = state_10739__$1;(statearr_10765_10800[2] = null);
(statearr_10765_10800[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10740 === 17))
{var inst_10718 = (state_10739[17]);var state_10739__$1 = state_10739;var statearr_10766_10801 = state_10739__$1;(statearr_10766_10801[2] = inst_10718);
(statearr_10766_10801[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10740 === 18))
{var inst_10704 = (state_10739[15]);var inst_10698 = (state_10739[13]);var inst_10699 = (state_10739[14]);var inst_10721 = cljs.core.empty_QMARK_.call(null,inst_10699);var inst_10722 = inst_10698.call(null,inst_10704);var inst_10723 = cljs.core.not.call(null,inst_10722);var inst_10724 = (inst_10721) && (inst_10723);var state_10739__$1 = state_10739;var statearr_10767_10802 = state_10739__$1;(statearr_10767_10802[2] = inst_10724);
(statearr_10767_10802[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10740 === 19))
{var inst_10726 = (state_10739[2]);var state_10739__$1 = state_10739;if(cljs.core.truth_(inst_10726))
{var statearr_10768_10803 = state_10739__$1;(statearr_10768_10803[1] = 20);
} else
{var statearr_10769_10804 = state_10739__$1;(statearr_10769_10804[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10740 === 20))
{var inst_10703 = (state_10739[16]);var state_10739__$1 = state_10739;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10739__$1,23,out,inst_10703);
} else
{if((state_val_10740 === 21))
{var state_10739__$1 = state_10739;var statearr_10770_10805 = state_10739__$1;(statearr_10770_10805[2] = null);
(statearr_10770_10805[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10740 === 22))
{var inst_10696 = (state_10739[12]);var inst_10732 = (state_10739[2]);var inst_10688 = inst_10696;var state_10739__$1 = (function (){var statearr_10771 = state_10739;(statearr_10771[10] = inst_10688);
(statearr_10771[19] = inst_10732);
return statearr_10771;
})();var statearr_10772_10806 = state_10739__$1;(statearr_10772_10806[2] = null);
(statearr_10772_10806[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10740 === 23))
{var inst_10729 = (state_10739[2]);var state_10739__$1 = state_10739;var statearr_10773_10807 = state_10739__$1;(statearr_10773_10807[2] = inst_10729);
(statearr_10773_10807[1] = 22);
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
});return ((function (switch__6955__auto__){
return (function() {
var state_machine__6956__auto__ = null;
var state_machine__6956__auto____0 = (function (){var statearr_10777 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10777[0] = state_machine__6956__auto__);
(statearr_10777[1] = 1);
return statearr_10777;
});
var state_machine__6956__auto____1 = (function (state_10739){while(true){
var ret_value__6957__auto__ = (function (){try{while(true){
var result__6958__auto__ = switch__6955__auto__.call(null,state_10739);if(cljs.core.keyword_identical_QMARK_.call(null,result__6958__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6958__auto__;
}
break;
}
}catch (e10778){if((e10778 instanceof Object))
{var ex__6959__auto__ = e10778;var statearr_10779_10808 = state_10739;(statearr_10779_10808[5] = ex__6959__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10739);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10778;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6957__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10809 = state_10739;
state_10739 = G__10809;
continue;
}
} else
{return ret_value__6957__auto__;
}
break;
}
});
state_machine__6956__auto__ = function(state_10739){
switch(arguments.length){
case 0:
return state_machine__6956__auto____0.call(this);
case 1:
return state_machine__6956__auto____1.call(this,state_10739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6956__auto____0;
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6956__auto____1;
return state_machine__6956__auto__;
})()
;})(switch__6955__auto__))
})();var state__6972__auto__ = (function (){var statearr_10780 = f__6971__auto__.call(null);(statearr_10780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6970__auto___10781);
return statearr_10780;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6972__auto__);
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
cljs.core.async.Pub = (function (){var obj10811 = {};return obj10811;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
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
return (function (topic){var or__3408__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3408__auto__,mults){
return (function (p1__10812_SHARP_){if(cljs.core.truth_(p1__10812_SHARP_.call(null,topic)))
{return p1__10812_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__10812_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3408__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t10937 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10937 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta10938){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta10938 = meta10938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10937.cljs$lang$type = true;
cljs.core.async.t10937.cljs$lang$ctorStr = "cljs.core.async/t10937";
cljs.core.async.t10937.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10937");
});})(mults,ensure_mult))
;
cljs.core.async.t10937.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t10937.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t10937.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t10937.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t10937.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t10937.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10937.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t10937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10939){var self__ = this;
var _10939__$1 = this;return self__.meta10938;
});})(mults,ensure_mult))
;
cljs.core.async.t10937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10939,meta10938__$1){var self__ = this;
var _10939__$1 = this;return (new cljs.core.async.t10937(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta10938__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t10937 = ((function (mults,ensure_mult){
return (function __GT_t10937(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10938){return (new cljs.core.async.t10937(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10938));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t10937(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6970__auto___11061 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6971__auto__ = (function (){var switch__6955__auto__ = (function (state_11013){var state_val_11014 = (state_11013[1]);if((state_val_11014 === 1))
{var state_11013__$1 = state_11013;var statearr_11015_11062 = state_11013__$1;(statearr_11015_11062[2] = null);
(statearr_11015_11062[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11014 === 2))
{var state_11013__$1 = state_11013;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11013__$1,4,ch);
} else
{if((state_val_11014 === 3))
{var inst_11011 = (state_11013[2]);var state_11013__$1 = state_11013;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11013__$1,inst_11011);
} else
{if((state_val_11014 === 4))
{var inst_10942 = (state_11013[7]);var inst_10942__$1 = (state_11013[2]);var inst_10943 = (inst_10942__$1 == null);var state_11013__$1 = (function (){var statearr_11016 = state_11013;(statearr_11016[7] = inst_10942__$1);
return statearr_11016;
})();if(cljs.core.truth_(inst_10943))
{var statearr_11017_11063 = state_11013__$1;(statearr_11017_11063[1] = 5);
} else
{var statearr_11018_11064 = state_11013__$1;(statearr_11018_11064[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11014 === 5))
{var inst_10949 = cljs.core.deref.call(null,mults);var inst_10950 = cljs.core.vals.call(null,inst_10949);var inst_10951 = cljs.core.seq.call(null,inst_10950);var inst_10952 = inst_10951;var inst_10953 = null;var inst_10954 = 0;var inst_10955 = 0;var state_11013__$1 = (function (){var statearr_11019 = state_11013;(statearr_11019[8] = inst_10952);
(statearr_11019[9] = inst_10953);
(statearr_11019[10] = inst_10955);
(statearr_11019[11] = inst_10954);
return statearr_11019;
})();var statearr_11020_11065 = state_11013__$1;(statearr_11020_11065[2] = null);
(statearr_11020_11065[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11014 === 6))
{var inst_10992 = (state_11013[12]);var inst_10990 = (state_11013[13]);var inst_10942 = (state_11013[7]);var inst_10990__$1 = topic_fn.call(null,inst_10942);var inst_10991 = cljs.core.deref.call(null,mults);var inst_10992__$1 = cljs.core.get.call(null,inst_10991,inst_10990__$1);var state_11013__$1 = (function (){var statearr_11021 = state_11013;(statearr_11021[12] = inst_10992__$1);
(statearr_11021[13] = inst_10990__$1);
return statearr_11021;
})();if(cljs.core.truth_(inst_10992__$1))
{var statearr_11022_11066 = state_11013__$1;(statearr_11022_11066[1] = 19);
} else
{var statearr_11023_11067 = state_11013__$1;(statearr_11023_11067[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11014 === 7))
{var inst_11009 = (state_11013[2]);var state_11013__$1 = state_11013;var statearr_11024_11068 = state_11013__$1;(statearr_11024_11068[2] = inst_11009);
(statearr_11024_11068[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11014 === 8))
{var inst_10955 = (state_11013[10]);var inst_10954 = (state_11013[11]);var inst_10957 = (inst_10955 < inst_10954);var inst_10958 = inst_10957;var state_11013__$1 = state_11013;if(cljs.core.truth_(inst_10958))
{var statearr_11028_11069 = state_11013__$1;(statearr_11028_11069[1] = 10);
} else
{var statearr_11029_11070 = state_11013__$1;(statearr_11029_11070[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11014 === 9))
{var inst_10988 = (state_11013[2]);var state_11013__$1 = state_11013;var statearr_11030_11071 = state_11013__$1;(statearr_11030_11071[2] = inst_10988);
(statearr_11030_11071[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11014 === 10))
{var inst_10952 = (state_11013[8]);var inst_10953 = (state_11013[9]);var inst_10955 = (state_11013[10]);var inst_10954 = (state_11013[11]);var inst_10960 = cljs.core._nth.call(null,inst_10953,inst_10955);var inst_10961 = cljs.core.async.muxch_STAR_.call(null,inst_10960);var inst_10962 = cljs.core.async.close_BANG_.call(null,inst_10961);var inst_10963 = (inst_10955 + 1);var tmp11025 = inst_10952;var tmp11026 = inst_10953;var tmp11027 = inst_10954;var inst_10952__$1 = tmp11025;var inst_10953__$1 = tmp11026;var inst_10954__$1 = tmp11027;var inst_10955__$1 = inst_10963;var state_11013__$1 = (function (){var statearr_11031 = state_11013;(statearr_11031[14] = inst_10962);
(statearr_11031[8] = inst_10952__$1);
(statearr_11031[9] = inst_10953__$1);
(statearr_11031[10] = inst_10955__$1);
(statearr_11031[11] = inst_10954__$1);
return statearr_11031;
})();var statearr_11032_11072 = state_11013__$1;(statearr_11032_11072[2] = null);
(statearr_11032_11072[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11014 === 11))
{var inst_10952 = (state_11013[8]);var inst_10966 = (state_11013[15]);var inst_10966__$1 = cljs.core.seq.call(null,inst_10952);var state_11013__$1 = (function (){var statearr_11033 = state_11013;(statearr_11033[15] = inst_10966__$1);
return statearr_11033;
})();if(inst_10966__$1)
{var statearr_11034_11073 = state_11013__$1;(statearr_11034_11073[1] = 13);
} else
{var statearr_11035_11074 = state_11013__$1;(statearr_11035_11074[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11014 === 12))
{var inst_10986 = (state_11013[2]);var state_11013__$1 = state_11013;var statearr_11036_11075 = state_11013__$1;(statearr_11036_11075[2] = inst_10986);
(statearr_11036_11075[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11014 === 13))
{var inst_10966 = (state_11013[15]);var inst_10968 = cljs.core.chunked_seq_QMARK_.call(null,inst_10966);var state_11013__$1 = state_11013;if(inst_10968)
{var statearr_11037_11076 = state_11013__$1;(statearr_11037_11076[1] = 16);
} else
{var statearr_11038_11077 = state_11013__$1;(statearr_11038_11077[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11014 === 14))
{var state_11013__$1 = state_11013;var statearr_11039_11078 = state_11013__$1;(statearr_11039_11078[2] = null);
(statearr_11039_11078[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11014 === 15))
{var inst_10984 = (state_11013[2]);var state_11013__$1 = state_11013;var statearr_11040_11079 = state_11013__$1;(statearr_11040_11079[2] = inst_10984);
(statearr_11040_11079[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11014 === 16))
{var inst_10966 = (state_11013[15]);var inst_10970 = cljs.core.chunk_first.call(null,inst_10966);var inst_10971 = cljs.core.chunk_rest.call(null,inst_10966);var inst_10972 = cljs.core.count.call(null,inst_10970);var inst_10952 = inst_10971;var inst_10953 = inst_10970;var inst_10954 = inst_10972;var inst_10955 = 0;var state_11013__$1 = (function (){var statearr_11041 = state_11013;(statearr_11041[8] = inst_10952);
(statearr_11041[9] = inst_10953);
(statearr_11041[10] = inst_10955);
(statearr_11041[11] = inst_10954);
return statearr_11041;
})();var statearr_11042_11080 = state_11013__$1;(statearr_11042_11080[2] = null);
(statearr_11042_11080[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11014 === 17))
{var inst_10966 = (state_11013[15]);var inst_10975 = cljs.core.first.call(null,inst_10966);var inst_10976 = cljs.core.async.muxch_STAR_.call(null,inst_10975);var inst_10977 = cljs.core.async.close_BANG_.call(null,inst_10976);var inst_10978 = cljs.core.next.call(null,inst_10966);var inst_10952 = inst_10978;var inst_10953 = null;var inst_10954 = 0;var inst_10955 = 0;var state_11013__$1 = (function (){var statearr_11043 = state_11013;(statearr_11043[16] = inst_10977);
(statearr_11043[8] = inst_10952);
(statearr_11043[9] = inst_10953);
(statearr_11043[10] = inst_10955);
(statearr_11043[11] = inst_10954);
return statearr_11043;
})();var statearr_11044_11081 = state_11013__$1;(statearr_11044_11081[2] = null);
(statearr_11044_11081[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11014 === 18))
{var inst_10981 = (state_11013[2]);var state_11013__$1 = state_11013;var statearr_11045_11082 = state_11013__$1;(statearr_11045_11082[2] = inst_10981);
(statearr_11045_11082[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11014 === 19))
{var state_11013__$1 = state_11013;var statearr_11046_11083 = state_11013__$1;(statearr_11046_11083[2] = null);
(statearr_11046_11083[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11014 === 20))
{var state_11013__$1 = state_11013;var statearr_11047_11084 = state_11013__$1;(statearr_11047_11084[2] = null);
(statearr_11047_11084[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11014 === 21))
{var inst_11006 = (state_11013[2]);var state_11013__$1 = (function (){var statearr_11048 = state_11013;(statearr_11048[17] = inst_11006);
return statearr_11048;
})();var statearr_11049_11085 = state_11013__$1;(statearr_11049_11085[2] = null);
(statearr_11049_11085[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11014 === 22))
{var inst_11003 = (state_11013[2]);var state_11013__$1 = state_11013;var statearr_11050_11086 = state_11013__$1;(statearr_11050_11086[2] = inst_11003);
(statearr_11050_11086[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11014 === 23))
{var inst_10990 = (state_11013[13]);var inst_10994 = (state_11013[2]);var inst_10995 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10990);var state_11013__$1 = (function (){var statearr_11051 = state_11013;(statearr_11051[18] = inst_10994);
return statearr_11051;
})();var statearr_11052_11087 = state_11013__$1;(statearr_11052_11087[2] = inst_10995);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11013__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11014 === 24))
{var inst_10992 = (state_11013[12]);var inst_10942 = (state_11013[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11013,23,Object,null,22);var inst_10999 = cljs.core.async.muxch_STAR_.call(null,inst_10992);var state_11013__$1 = state_11013;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11013__$1,25,inst_10999,inst_10942);
} else
{if((state_val_11014 === 25))
{var inst_11001 = (state_11013[2]);var state_11013__$1 = state_11013;var statearr_11053_11088 = state_11013__$1;(statearr_11053_11088[2] = inst_11001);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11013__$1);
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
});return ((function (switch__6955__auto__){
return (function() {
var state_machine__6956__auto__ = null;
var state_machine__6956__auto____0 = (function (){var statearr_11057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11057[0] = state_machine__6956__auto__);
(statearr_11057[1] = 1);
return statearr_11057;
});
var state_machine__6956__auto____1 = (function (state_11013){while(true){
var ret_value__6957__auto__ = (function (){try{while(true){
var result__6958__auto__ = switch__6955__auto__.call(null,state_11013);if(cljs.core.keyword_identical_QMARK_.call(null,result__6958__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6958__auto__;
}
break;
}
}catch (e11058){if((e11058 instanceof Object))
{var ex__6959__auto__ = e11058;var statearr_11059_11089 = state_11013;(statearr_11059_11089[5] = ex__6959__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11013);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11058;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6957__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11090 = state_11013;
state_11013 = G__11090;
continue;
}
} else
{return ret_value__6957__auto__;
}
break;
}
});
state_machine__6956__auto__ = function(state_11013){
switch(arguments.length){
case 0:
return state_machine__6956__auto____0.call(this);
case 1:
return state_machine__6956__auto____1.call(this,state_11013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6956__auto____0;
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6956__auto____1;
return state_machine__6956__auto__;
})()
;})(switch__6955__auto__))
})();var state__6972__auto__ = (function (){var statearr_11060 = f__6971__auto__.call(null);(statearr_11060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6970__auto___11061);
return statearr_11060;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6972__auto__);
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
,cljs.core.range.call(null,cnt));var c__6970__auto___11227 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6971__auto__ = (function (){var switch__6955__auto__ = (function (state_11197){var state_val_11198 = (state_11197[1]);if((state_val_11198 === 1))
{var state_11197__$1 = state_11197;var statearr_11199_11228 = state_11197__$1;(statearr_11199_11228[2] = null);
(statearr_11199_11228[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11198 === 2))
{var inst_11160 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11161 = 0;var state_11197__$1 = (function (){var statearr_11200 = state_11197;(statearr_11200[7] = inst_11161);
(statearr_11200[8] = inst_11160);
return statearr_11200;
})();var statearr_11201_11229 = state_11197__$1;(statearr_11201_11229[2] = null);
(statearr_11201_11229[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11198 === 3))
{var inst_11195 = (state_11197[2]);var state_11197__$1 = state_11197;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11197__$1,inst_11195);
} else
{if((state_val_11198 === 4))
{var inst_11161 = (state_11197[7]);var inst_11163 = (inst_11161 < cnt);var state_11197__$1 = state_11197;if(cljs.core.truth_(inst_11163))
{var statearr_11202_11230 = state_11197__$1;(statearr_11202_11230[1] = 6);
} else
{var statearr_11203_11231 = state_11197__$1;(statearr_11203_11231[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11198 === 5))
{var inst_11181 = (state_11197[2]);var state_11197__$1 = (function (){var statearr_11204 = state_11197;(statearr_11204[9] = inst_11181);
return statearr_11204;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11197__$1,12,dchan);
} else
{if((state_val_11198 === 6))
{var state_11197__$1 = state_11197;var statearr_11205_11232 = state_11197__$1;(statearr_11205_11232[2] = null);
(statearr_11205_11232[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11198 === 7))
{var state_11197__$1 = state_11197;var statearr_11206_11233 = state_11197__$1;(statearr_11206_11233[2] = null);
(statearr_11206_11233[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11198 === 8))
{var inst_11179 = (state_11197[2]);var state_11197__$1 = state_11197;var statearr_11207_11234 = state_11197__$1;(statearr_11207_11234[2] = inst_11179);
(statearr_11207_11234[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11198 === 9))
{var inst_11161 = (state_11197[7]);var inst_11174 = (state_11197[2]);var inst_11175 = (inst_11161 + 1);var inst_11161__$1 = inst_11175;var state_11197__$1 = (function (){var statearr_11208 = state_11197;(statearr_11208[10] = inst_11174);
(statearr_11208[7] = inst_11161__$1);
return statearr_11208;
})();var statearr_11209_11235 = state_11197__$1;(statearr_11209_11235[2] = null);
(statearr_11209_11235[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11198 === 10))
{var inst_11165 = (state_11197[2]);var inst_11166 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11197__$1 = (function (){var statearr_11210 = state_11197;(statearr_11210[11] = inst_11165);
return statearr_11210;
})();var statearr_11211_11236 = state_11197__$1;(statearr_11211_11236[2] = inst_11166);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11197__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11198 === 11))
{var inst_11161 = (state_11197[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11197,10,Object,null,9);var inst_11170 = chs__$1.call(null,inst_11161);var inst_11171 = done.call(null,inst_11161);var inst_11172 = cljs.core.async.take_BANG_.call(null,inst_11170,inst_11171);var state_11197__$1 = state_11197;var statearr_11212_11237 = state_11197__$1;(statearr_11212_11237[2] = inst_11172);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11197__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11198 === 12))
{var inst_11183 = (state_11197[12]);var inst_11183__$1 = (state_11197[2]);var inst_11184 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11183__$1);var state_11197__$1 = (function (){var statearr_11213 = state_11197;(statearr_11213[12] = inst_11183__$1);
return statearr_11213;
})();if(cljs.core.truth_(inst_11184))
{var statearr_11214_11238 = state_11197__$1;(statearr_11214_11238[1] = 13);
} else
{var statearr_11215_11239 = state_11197__$1;(statearr_11215_11239[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11198 === 13))
{var inst_11186 = cljs.core.async.close_BANG_.call(null,out);var state_11197__$1 = state_11197;var statearr_11216_11240 = state_11197__$1;(statearr_11216_11240[2] = inst_11186);
(statearr_11216_11240[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11198 === 14))
{var inst_11183 = (state_11197[12]);var inst_11188 = cljs.core.apply.call(null,f,inst_11183);var state_11197__$1 = state_11197;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11197__$1,16,out,inst_11188);
} else
{if((state_val_11198 === 15))
{var inst_11193 = (state_11197[2]);var state_11197__$1 = state_11197;var statearr_11217_11241 = state_11197__$1;(statearr_11217_11241[2] = inst_11193);
(statearr_11217_11241[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11198 === 16))
{var inst_11190 = (state_11197[2]);var state_11197__$1 = (function (){var statearr_11218 = state_11197;(statearr_11218[13] = inst_11190);
return statearr_11218;
})();var statearr_11219_11242 = state_11197__$1;(statearr_11219_11242[2] = null);
(statearr_11219_11242[1] = 2);
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
});return ((function (switch__6955__auto__){
return (function() {
var state_machine__6956__auto__ = null;
var state_machine__6956__auto____0 = (function (){var statearr_11223 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11223[0] = state_machine__6956__auto__);
(statearr_11223[1] = 1);
return statearr_11223;
});
var state_machine__6956__auto____1 = (function (state_11197){while(true){
var ret_value__6957__auto__ = (function (){try{while(true){
var result__6958__auto__ = switch__6955__auto__.call(null,state_11197);if(cljs.core.keyword_identical_QMARK_.call(null,result__6958__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6958__auto__;
}
break;
}
}catch (e11224){if((e11224 instanceof Object))
{var ex__6959__auto__ = e11224;var statearr_11225_11243 = state_11197;(statearr_11225_11243[5] = ex__6959__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11197);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11224;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6957__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11244 = state_11197;
state_11197 = G__11244;
continue;
}
} else
{return ret_value__6957__auto__;
}
break;
}
});
state_machine__6956__auto__ = function(state_11197){
switch(arguments.length){
case 0:
return state_machine__6956__auto____0.call(this);
case 1:
return state_machine__6956__auto____1.call(this,state_11197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6956__auto____0;
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6956__auto____1;
return state_machine__6956__auto__;
})()
;})(switch__6955__auto__))
})();var state__6972__auto__ = (function (){var statearr_11226 = f__6971__auto__.call(null);(statearr_11226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6970__auto___11227);
return statearr_11226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6972__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6970__auto___11352 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6971__auto__ = (function (){var switch__6955__auto__ = (function (state_11328){var state_val_11329 = (state_11328[1]);if((state_val_11329 === 1))
{var inst_11299 = cljs.core.vec.call(null,chs);var inst_11300 = inst_11299;var state_11328__$1 = (function (){var statearr_11330 = state_11328;(statearr_11330[7] = inst_11300);
return statearr_11330;
})();var statearr_11331_11353 = state_11328__$1;(statearr_11331_11353[2] = null);
(statearr_11331_11353[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11329 === 2))
{var inst_11300 = (state_11328[7]);var inst_11302 = cljs.core.count.call(null,inst_11300);var inst_11303 = (inst_11302 > 0);var state_11328__$1 = state_11328;if(cljs.core.truth_(inst_11303))
{var statearr_11332_11354 = state_11328__$1;(statearr_11332_11354[1] = 4);
} else
{var statearr_11333_11355 = state_11328__$1;(statearr_11333_11355[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11329 === 3))
{var inst_11326 = (state_11328[2]);var state_11328__$1 = state_11328;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11328__$1,inst_11326);
} else
{if((state_val_11329 === 4))
{var inst_11300 = (state_11328[7]);var state_11328__$1 = state_11328;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11328__$1,7,inst_11300);
} else
{if((state_val_11329 === 5))
{var inst_11322 = cljs.core.async.close_BANG_.call(null,out);var state_11328__$1 = state_11328;var statearr_11334_11356 = state_11328__$1;(statearr_11334_11356[2] = inst_11322);
(statearr_11334_11356[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11329 === 6))
{var inst_11324 = (state_11328[2]);var state_11328__$1 = state_11328;var statearr_11335_11357 = state_11328__$1;(statearr_11335_11357[2] = inst_11324);
(statearr_11335_11357[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11329 === 7))
{var inst_11307 = (state_11328[8]);var inst_11308 = (state_11328[9]);var inst_11307__$1 = (state_11328[2]);var inst_11308__$1 = cljs.core.nth.call(null,inst_11307__$1,0,null);var inst_11309 = cljs.core.nth.call(null,inst_11307__$1,1,null);var inst_11310 = (inst_11308__$1 == null);var state_11328__$1 = (function (){var statearr_11336 = state_11328;(statearr_11336[8] = inst_11307__$1);
(statearr_11336[10] = inst_11309);
(statearr_11336[9] = inst_11308__$1);
return statearr_11336;
})();if(cljs.core.truth_(inst_11310))
{var statearr_11337_11358 = state_11328__$1;(statearr_11337_11358[1] = 8);
} else
{var statearr_11338_11359 = state_11328__$1;(statearr_11338_11359[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11329 === 8))
{var inst_11307 = (state_11328[8]);var inst_11309 = (state_11328[10]);var inst_11308 = (state_11328[9]);var inst_11300 = (state_11328[7]);var inst_11312 = (function (){var c = inst_11309;var v = inst_11308;var vec__11305 = inst_11307;var cs = inst_11300;return ((function (c,v,vec__11305,cs,inst_11307,inst_11309,inst_11308,inst_11300,state_val_11329){
return (function (p1__11245_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11245_SHARP_);
});
;})(c,v,vec__11305,cs,inst_11307,inst_11309,inst_11308,inst_11300,state_val_11329))
})();var inst_11313 = cljs.core.filterv.call(null,inst_11312,inst_11300);var inst_11300__$1 = inst_11313;var state_11328__$1 = (function (){var statearr_11339 = state_11328;(statearr_11339[7] = inst_11300__$1);
return statearr_11339;
})();var statearr_11340_11360 = state_11328__$1;(statearr_11340_11360[2] = null);
(statearr_11340_11360[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11329 === 9))
{var inst_11308 = (state_11328[9]);var state_11328__$1 = state_11328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11328__$1,11,out,inst_11308);
} else
{if((state_val_11329 === 10))
{var inst_11320 = (state_11328[2]);var state_11328__$1 = state_11328;var statearr_11342_11361 = state_11328__$1;(statearr_11342_11361[2] = inst_11320);
(statearr_11342_11361[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11329 === 11))
{var inst_11300 = (state_11328[7]);var inst_11317 = (state_11328[2]);var tmp11341 = inst_11300;var inst_11300__$1 = tmp11341;var state_11328__$1 = (function (){var statearr_11343 = state_11328;(statearr_11343[7] = inst_11300__$1);
(statearr_11343[11] = inst_11317);
return statearr_11343;
})();var statearr_11344_11362 = state_11328__$1;(statearr_11344_11362[2] = null);
(statearr_11344_11362[1] = 2);
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
});return ((function (switch__6955__auto__){
return (function() {
var state_machine__6956__auto__ = null;
var state_machine__6956__auto____0 = (function (){var statearr_11348 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11348[0] = state_machine__6956__auto__);
(statearr_11348[1] = 1);
return statearr_11348;
});
var state_machine__6956__auto____1 = (function (state_11328){while(true){
var ret_value__6957__auto__ = (function (){try{while(true){
var result__6958__auto__ = switch__6955__auto__.call(null,state_11328);if(cljs.core.keyword_identical_QMARK_.call(null,result__6958__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6958__auto__;
}
break;
}
}catch (e11349){if((e11349 instanceof Object))
{var ex__6959__auto__ = e11349;var statearr_11350_11363 = state_11328;(statearr_11350_11363[5] = ex__6959__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11328);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11349;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6957__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11364 = state_11328;
state_11328 = G__11364;
continue;
}
} else
{return ret_value__6957__auto__;
}
break;
}
});
state_machine__6956__auto__ = function(state_11328){
switch(arguments.length){
case 0:
return state_machine__6956__auto____0.call(this);
case 1:
return state_machine__6956__auto____1.call(this,state_11328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6956__auto____0;
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6956__auto____1;
return state_machine__6956__auto__;
})()
;})(switch__6955__auto__))
})();var state__6972__auto__ = (function (){var statearr_11351 = f__6971__auto__.call(null);(statearr_11351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6970__auto___11352);
return statearr_11351;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6972__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6970__auto___11457 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6971__auto__ = (function (){var switch__6955__auto__ = (function (state_11434){var state_val_11435 = (state_11434[1]);if((state_val_11435 === 1))
{var inst_11411 = 0;var state_11434__$1 = (function (){var statearr_11436 = state_11434;(statearr_11436[7] = inst_11411);
return statearr_11436;
})();var statearr_11437_11458 = state_11434__$1;(statearr_11437_11458[2] = null);
(statearr_11437_11458[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11435 === 2))
{var inst_11411 = (state_11434[7]);var inst_11413 = (inst_11411 < n);var state_11434__$1 = state_11434;if(cljs.core.truth_(inst_11413))
{var statearr_11438_11459 = state_11434__$1;(statearr_11438_11459[1] = 4);
} else
{var statearr_11439_11460 = state_11434__$1;(statearr_11439_11460[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11435 === 3))
{var inst_11431 = (state_11434[2]);var inst_11432 = cljs.core.async.close_BANG_.call(null,out);var state_11434__$1 = (function (){var statearr_11440 = state_11434;(statearr_11440[8] = inst_11431);
return statearr_11440;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11434__$1,inst_11432);
} else
{if((state_val_11435 === 4))
{var state_11434__$1 = state_11434;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11434__$1,7,ch);
} else
{if((state_val_11435 === 5))
{var state_11434__$1 = state_11434;var statearr_11441_11461 = state_11434__$1;(statearr_11441_11461[2] = null);
(statearr_11441_11461[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11435 === 6))
{var inst_11429 = (state_11434[2]);var state_11434__$1 = state_11434;var statearr_11442_11462 = state_11434__$1;(statearr_11442_11462[2] = inst_11429);
(statearr_11442_11462[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11435 === 7))
{var inst_11416 = (state_11434[9]);var inst_11416__$1 = (state_11434[2]);var inst_11417 = (inst_11416__$1 == null);var inst_11418 = cljs.core.not.call(null,inst_11417);var state_11434__$1 = (function (){var statearr_11443 = state_11434;(statearr_11443[9] = inst_11416__$1);
return statearr_11443;
})();if(inst_11418)
{var statearr_11444_11463 = state_11434__$1;(statearr_11444_11463[1] = 8);
} else
{var statearr_11445_11464 = state_11434__$1;(statearr_11445_11464[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11435 === 8))
{var inst_11416 = (state_11434[9]);var state_11434__$1 = state_11434;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11434__$1,11,out,inst_11416);
} else
{if((state_val_11435 === 9))
{var state_11434__$1 = state_11434;var statearr_11446_11465 = state_11434__$1;(statearr_11446_11465[2] = null);
(statearr_11446_11465[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11435 === 10))
{var inst_11426 = (state_11434[2]);var state_11434__$1 = state_11434;var statearr_11447_11466 = state_11434__$1;(statearr_11447_11466[2] = inst_11426);
(statearr_11447_11466[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11435 === 11))
{var inst_11411 = (state_11434[7]);var inst_11421 = (state_11434[2]);var inst_11422 = (inst_11411 + 1);var inst_11411__$1 = inst_11422;var state_11434__$1 = (function (){var statearr_11448 = state_11434;(statearr_11448[10] = inst_11421);
(statearr_11448[7] = inst_11411__$1);
return statearr_11448;
})();var statearr_11449_11467 = state_11434__$1;(statearr_11449_11467[2] = null);
(statearr_11449_11467[1] = 2);
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
});return ((function (switch__6955__auto__){
return (function() {
var state_machine__6956__auto__ = null;
var state_machine__6956__auto____0 = (function (){var statearr_11453 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11453[0] = state_machine__6956__auto__);
(statearr_11453[1] = 1);
return statearr_11453;
});
var state_machine__6956__auto____1 = (function (state_11434){while(true){
var ret_value__6957__auto__ = (function (){try{while(true){
var result__6958__auto__ = switch__6955__auto__.call(null,state_11434);if(cljs.core.keyword_identical_QMARK_.call(null,result__6958__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6958__auto__;
}
break;
}
}catch (e11454){if((e11454 instanceof Object))
{var ex__6959__auto__ = e11454;var statearr_11455_11468 = state_11434;(statearr_11455_11468[5] = ex__6959__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11434);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11454;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6957__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11469 = state_11434;
state_11434 = G__11469;
continue;
}
} else
{return ret_value__6957__auto__;
}
break;
}
});
state_machine__6956__auto__ = function(state_11434){
switch(arguments.length){
case 0:
return state_machine__6956__auto____0.call(this);
case 1:
return state_machine__6956__auto____1.call(this,state_11434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6956__auto____0;
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6956__auto____1;
return state_machine__6956__auto__;
})()
;})(switch__6955__auto__))
})();var state__6972__auto__ = (function (){var statearr_11456 = f__6971__auto__.call(null);(statearr_11456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6970__auto___11457);
return statearr_11456;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6972__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6970__auto___11566 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6971__auto__ = (function (){var switch__6955__auto__ = (function (state_11541){var state_val_11542 = (state_11541[1]);if((state_val_11542 === 1))
{var inst_11518 = null;var state_11541__$1 = (function (){var statearr_11543 = state_11541;(statearr_11543[7] = inst_11518);
return statearr_11543;
})();var statearr_11544_11567 = state_11541__$1;(statearr_11544_11567[2] = null);
(statearr_11544_11567[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11542 === 2))
{var state_11541__$1 = state_11541;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11541__$1,4,ch);
} else
{if((state_val_11542 === 3))
{var inst_11538 = (state_11541[2]);var inst_11539 = cljs.core.async.close_BANG_.call(null,out);var state_11541__$1 = (function (){var statearr_11545 = state_11541;(statearr_11545[8] = inst_11538);
return statearr_11545;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11541__$1,inst_11539);
} else
{if((state_val_11542 === 4))
{var inst_11521 = (state_11541[9]);var inst_11521__$1 = (state_11541[2]);var inst_11522 = (inst_11521__$1 == null);var inst_11523 = cljs.core.not.call(null,inst_11522);var state_11541__$1 = (function (){var statearr_11546 = state_11541;(statearr_11546[9] = inst_11521__$1);
return statearr_11546;
})();if(inst_11523)
{var statearr_11547_11568 = state_11541__$1;(statearr_11547_11568[1] = 5);
} else
{var statearr_11548_11569 = state_11541__$1;(statearr_11548_11569[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11542 === 5))
{var inst_11518 = (state_11541[7]);var inst_11521 = (state_11541[9]);var inst_11525 = cljs.core._EQ_.call(null,inst_11521,inst_11518);var state_11541__$1 = state_11541;if(inst_11525)
{var statearr_11549_11570 = state_11541__$1;(statearr_11549_11570[1] = 8);
} else
{var statearr_11550_11571 = state_11541__$1;(statearr_11550_11571[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11542 === 6))
{var state_11541__$1 = state_11541;var statearr_11552_11572 = state_11541__$1;(statearr_11552_11572[2] = null);
(statearr_11552_11572[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11542 === 7))
{var inst_11536 = (state_11541[2]);var state_11541__$1 = state_11541;var statearr_11553_11573 = state_11541__$1;(statearr_11553_11573[2] = inst_11536);
(statearr_11553_11573[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11542 === 8))
{var inst_11518 = (state_11541[7]);var tmp11551 = inst_11518;var inst_11518__$1 = tmp11551;var state_11541__$1 = (function (){var statearr_11554 = state_11541;(statearr_11554[7] = inst_11518__$1);
return statearr_11554;
})();var statearr_11555_11574 = state_11541__$1;(statearr_11555_11574[2] = null);
(statearr_11555_11574[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11542 === 9))
{var inst_11521 = (state_11541[9]);var state_11541__$1 = state_11541;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11541__$1,11,out,inst_11521);
} else
{if((state_val_11542 === 10))
{var inst_11533 = (state_11541[2]);var state_11541__$1 = state_11541;var statearr_11556_11575 = state_11541__$1;(statearr_11556_11575[2] = inst_11533);
(statearr_11556_11575[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11542 === 11))
{var inst_11521 = (state_11541[9]);var inst_11530 = (state_11541[2]);var inst_11518 = inst_11521;var state_11541__$1 = (function (){var statearr_11557 = state_11541;(statearr_11557[7] = inst_11518);
(statearr_11557[10] = inst_11530);
return statearr_11557;
})();var statearr_11558_11576 = state_11541__$1;(statearr_11558_11576[2] = null);
(statearr_11558_11576[1] = 2);
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
});return ((function (switch__6955__auto__){
return (function() {
var state_machine__6956__auto__ = null;
var state_machine__6956__auto____0 = (function (){var statearr_11562 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11562[0] = state_machine__6956__auto__);
(statearr_11562[1] = 1);
return statearr_11562;
});
var state_machine__6956__auto____1 = (function (state_11541){while(true){
var ret_value__6957__auto__ = (function (){try{while(true){
var result__6958__auto__ = switch__6955__auto__.call(null,state_11541);if(cljs.core.keyword_identical_QMARK_.call(null,result__6958__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6958__auto__;
}
break;
}
}catch (e11563){if((e11563 instanceof Object))
{var ex__6959__auto__ = e11563;var statearr_11564_11577 = state_11541;(statearr_11564_11577[5] = ex__6959__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11541);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11563;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6957__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11578 = state_11541;
state_11541 = G__11578;
continue;
}
} else
{return ret_value__6957__auto__;
}
break;
}
});
state_machine__6956__auto__ = function(state_11541){
switch(arguments.length){
case 0:
return state_machine__6956__auto____0.call(this);
case 1:
return state_machine__6956__auto____1.call(this,state_11541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6956__auto____0;
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6956__auto____1;
return state_machine__6956__auto__;
})()
;})(switch__6955__auto__))
})();var state__6972__auto__ = (function (){var statearr_11565 = f__6971__auto__.call(null);(statearr_11565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6970__auto___11566);
return statearr_11565;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6972__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6970__auto___11713 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6971__auto__ = (function (){var switch__6955__auto__ = (function (state_11683){var state_val_11684 = (state_11683[1]);if((state_val_11684 === 1))
{var inst_11646 = (new Array(n));var inst_11647 = inst_11646;var inst_11648 = 0;var state_11683__$1 = (function (){var statearr_11685 = state_11683;(statearr_11685[7] = inst_11648);
(statearr_11685[8] = inst_11647);
return statearr_11685;
})();var statearr_11686_11714 = state_11683__$1;(statearr_11686_11714[2] = null);
(statearr_11686_11714[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11684 === 2))
{var state_11683__$1 = state_11683;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11683__$1,4,ch);
} else
{if((state_val_11684 === 3))
{var inst_11681 = (state_11683[2]);var state_11683__$1 = state_11683;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11683__$1,inst_11681);
} else
{if((state_val_11684 === 4))
{var inst_11651 = (state_11683[9]);var inst_11651__$1 = (state_11683[2]);var inst_11652 = (inst_11651__$1 == null);var inst_11653 = cljs.core.not.call(null,inst_11652);var state_11683__$1 = (function (){var statearr_11687 = state_11683;(statearr_11687[9] = inst_11651__$1);
return statearr_11687;
})();if(inst_11653)
{var statearr_11688_11715 = state_11683__$1;(statearr_11688_11715[1] = 5);
} else
{var statearr_11689_11716 = state_11683__$1;(statearr_11689_11716[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11684 === 5))
{var inst_11656 = (state_11683[10]);var inst_11651 = (state_11683[9]);var inst_11648 = (state_11683[7]);var inst_11647 = (state_11683[8]);var inst_11655 = (inst_11647[inst_11648] = inst_11651);var inst_11656__$1 = (inst_11648 + 1);var inst_11657 = (inst_11656__$1 < n);var state_11683__$1 = (function (){var statearr_11690 = state_11683;(statearr_11690[11] = inst_11655);
(statearr_11690[10] = inst_11656__$1);
return statearr_11690;
})();if(cljs.core.truth_(inst_11657))
{var statearr_11691_11717 = state_11683__$1;(statearr_11691_11717[1] = 8);
} else
{var statearr_11692_11718 = state_11683__$1;(statearr_11692_11718[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11684 === 6))
{var inst_11648 = (state_11683[7]);var inst_11669 = (inst_11648 > 0);var state_11683__$1 = state_11683;if(cljs.core.truth_(inst_11669))
{var statearr_11694_11719 = state_11683__$1;(statearr_11694_11719[1] = 12);
} else
{var statearr_11695_11720 = state_11683__$1;(statearr_11695_11720[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11684 === 7))
{var inst_11679 = (state_11683[2]);var state_11683__$1 = state_11683;var statearr_11696_11721 = state_11683__$1;(statearr_11696_11721[2] = inst_11679);
(statearr_11696_11721[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11684 === 8))
{var inst_11656 = (state_11683[10]);var inst_11647 = (state_11683[8]);var tmp11693 = inst_11647;var inst_11647__$1 = tmp11693;var inst_11648 = inst_11656;var state_11683__$1 = (function (){var statearr_11697 = state_11683;(statearr_11697[7] = inst_11648);
(statearr_11697[8] = inst_11647__$1);
return statearr_11697;
})();var statearr_11698_11722 = state_11683__$1;(statearr_11698_11722[2] = null);
(statearr_11698_11722[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11684 === 9))
{var inst_11647 = (state_11683[8]);var inst_11661 = cljs.core.vec.call(null,inst_11647);var state_11683__$1 = state_11683;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11683__$1,11,out,inst_11661);
} else
{if((state_val_11684 === 10))
{var inst_11667 = (state_11683[2]);var state_11683__$1 = state_11683;var statearr_11699_11723 = state_11683__$1;(statearr_11699_11723[2] = inst_11667);
(statearr_11699_11723[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11684 === 11))
{var inst_11663 = (state_11683[2]);var inst_11664 = (new Array(n));var inst_11647 = inst_11664;var inst_11648 = 0;var state_11683__$1 = (function (){var statearr_11700 = state_11683;(statearr_11700[12] = inst_11663);
(statearr_11700[7] = inst_11648);
(statearr_11700[8] = inst_11647);
return statearr_11700;
})();var statearr_11701_11724 = state_11683__$1;(statearr_11701_11724[2] = null);
(statearr_11701_11724[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11684 === 12))
{var inst_11647 = (state_11683[8]);var inst_11671 = cljs.core.vec.call(null,inst_11647);var state_11683__$1 = state_11683;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11683__$1,15,out,inst_11671);
} else
{if((state_val_11684 === 13))
{var state_11683__$1 = state_11683;var statearr_11702_11725 = state_11683__$1;(statearr_11702_11725[2] = null);
(statearr_11702_11725[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11684 === 14))
{var inst_11676 = (state_11683[2]);var inst_11677 = cljs.core.async.close_BANG_.call(null,out);var state_11683__$1 = (function (){var statearr_11703 = state_11683;(statearr_11703[13] = inst_11676);
return statearr_11703;
})();var statearr_11704_11726 = state_11683__$1;(statearr_11704_11726[2] = inst_11677);
(statearr_11704_11726[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11684 === 15))
{var inst_11673 = (state_11683[2]);var state_11683__$1 = state_11683;var statearr_11705_11727 = state_11683__$1;(statearr_11705_11727[2] = inst_11673);
(statearr_11705_11727[1] = 14);
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
});return ((function (switch__6955__auto__){
return (function() {
var state_machine__6956__auto__ = null;
var state_machine__6956__auto____0 = (function (){var statearr_11709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11709[0] = state_machine__6956__auto__);
(statearr_11709[1] = 1);
return statearr_11709;
});
var state_machine__6956__auto____1 = (function (state_11683){while(true){
var ret_value__6957__auto__ = (function (){try{while(true){
var result__6958__auto__ = switch__6955__auto__.call(null,state_11683);if(cljs.core.keyword_identical_QMARK_.call(null,result__6958__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6958__auto__;
}
break;
}
}catch (e11710){if((e11710 instanceof Object))
{var ex__6959__auto__ = e11710;var statearr_11711_11728 = state_11683;(statearr_11711_11728[5] = ex__6959__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11683);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6957__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11729 = state_11683;
state_11683 = G__11729;
continue;
}
} else
{return ret_value__6957__auto__;
}
break;
}
});
state_machine__6956__auto__ = function(state_11683){
switch(arguments.length){
case 0:
return state_machine__6956__auto____0.call(this);
case 1:
return state_machine__6956__auto____1.call(this,state_11683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6956__auto____0;
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6956__auto____1;
return state_machine__6956__auto__;
})()
;})(switch__6955__auto__))
})();var state__6972__auto__ = (function (){var statearr_11712 = f__6971__auto__.call(null);(statearr_11712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6970__auto___11713);
return statearr_11712;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6972__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6970__auto___11872 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6971__auto__ = (function (){var switch__6955__auto__ = (function (state_11842){var state_val_11843 = (state_11842[1]);if((state_val_11843 === 1))
{var inst_11801 = [];var inst_11802 = inst_11801;var inst_11803 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_11842__$1 = (function (){var statearr_11844 = state_11842;(statearr_11844[7] = inst_11802);
(statearr_11844[8] = inst_11803);
return statearr_11844;
})();var statearr_11845_11873 = state_11842__$1;(statearr_11845_11873[2] = null);
(statearr_11845_11873[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11843 === 2))
{var state_11842__$1 = state_11842;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11842__$1,4,ch);
} else
{if((state_val_11843 === 3))
{var inst_11840 = (state_11842[2]);var state_11842__$1 = state_11842;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11842__$1,inst_11840);
} else
{if((state_val_11843 === 4))
{var inst_11806 = (state_11842[9]);var inst_11806__$1 = (state_11842[2]);var inst_11807 = (inst_11806__$1 == null);var inst_11808 = cljs.core.not.call(null,inst_11807);var state_11842__$1 = (function (){var statearr_11846 = state_11842;(statearr_11846[9] = inst_11806__$1);
return statearr_11846;
})();if(inst_11808)
{var statearr_11847_11874 = state_11842__$1;(statearr_11847_11874[1] = 5);
} else
{var statearr_11848_11875 = state_11842__$1;(statearr_11848_11875[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11843 === 5))
{var inst_11810 = (state_11842[10]);var inst_11803 = (state_11842[8]);var inst_11806 = (state_11842[9]);var inst_11810__$1 = f.call(null,inst_11806);var inst_11811 = cljs.core._EQ_.call(null,inst_11810__$1,inst_11803);var inst_11812 = cljs.core.keyword_identical_QMARK_.call(null,inst_11803,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_11813 = (inst_11811) || (inst_11812);var state_11842__$1 = (function (){var statearr_11849 = state_11842;(statearr_11849[10] = inst_11810__$1);
return statearr_11849;
})();if(cljs.core.truth_(inst_11813))
{var statearr_11850_11876 = state_11842__$1;(statearr_11850_11876[1] = 8);
} else
{var statearr_11851_11877 = state_11842__$1;(statearr_11851_11877[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11843 === 6))
{var inst_11802 = (state_11842[7]);var inst_11827 = inst_11802.length;var inst_11828 = (inst_11827 > 0);var state_11842__$1 = state_11842;if(cljs.core.truth_(inst_11828))
{var statearr_11853_11878 = state_11842__$1;(statearr_11853_11878[1] = 12);
} else
{var statearr_11854_11879 = state_11842__$1;(statearr_11854_11879[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11843 === 7))
{var inst_11838 = (state_11842[2]);var state_11842__$1 = state_11842;var statearr_11855_11880 = state_11842__$1;(statearr_11855_11880[2] = inst_11838);
(statearr_11855_11880[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11843 === 8))
{var inst_11810 = (state_11842[10]);var inst_11802 = (state_11842[7]);var inst_11806 = (state_11842[9]);var inst_11815 = inst_11802.push(inst_11806);var tmp11852 = inst_11802;var inst_11802__$1 = tmp11852;var inst_11803 = inst_11810;var state_11842__$1 = (function (){var statearr_11856 = state_11842;(statearr_11856[7] = inst_11802__$1);
(statearr_11856[8] = inst_11803);
(statearr_11856[11] = inst_11815);
return statearr_11856;
})();var statearr_11857_11881 = state_11842__$1;(statearr_11857_11881[2] = null);
(statearr_11857_11881[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11843 === 9))
{var inst_11802 = (state_11842[7]);var inst_11818 = cljs.core.vec.call(null,inst_11802);var state_11842__$1 = state_11842;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11842__$1,11,out,inst_11818);
} else
{if((state_val_11843 === 10))
{var inst_11825 = (state_11842[2]);var state_11842__$1 = state_11842;var statearr_11858_11882 = state_11842__$1;(statearr_11858_11882[2] = inst_11825);
(statearr_11858_11882[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11843 === 11))
{var inst_11810 = (state_11842[10]);var inst_11806 = (state_11842[9]);var inst_11820 = (state_11842[2]);var inst_11821 = [];var inst_11822 = inst_11821.push(inst_11806);var inst_11802 = inst_11821;var inst_11803 = inst_11810;var state_11842__$1 = (function (){var statearr_11859 = state_11842;(statearr_11859[7] = inst_11802);
(statearr_11859[8] = inst_11803);
(statearr_11859[12] = inst_11820);
(statearr_11859[13] = inst_11822);
return statearr_11859;
})();var statearr_11860_11883 = state_11842__$1;(statearr_11860_11883[2] = null);
(statearr_11860_11883[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11843 === 12))
{var inst_11802 = (state_11842[7]);var inst_11830 = cljs.core.vec.call(null,inst_11802);var state_11842__$1 = state_11842;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11842__$1,15,out,inst_11830);
} else
{if((state_val_11843 === 13))
{var state_11842__$1 = state_11842;var statearr_11861_11884 = state_11842__$1;(statearr_11861_11884[2] = null);
(statearr_11861_11884[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11843 === 14))
{var inst_11835 = (state_11842[2]);var inst_11836 = cljs.core.async.close_BANG_.call(null,out);var state_11842__$1 = (function (){var statearr_11862 = state_11842;(statearr_11862[14] = inst_11835);
return statearr_11862;
})();var statearr_11863_11885 = state_11842__$1;(statearr_11863_11885[2] = inst_11836);
(statearr_11863_11885[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11843 === 15))
{var inst_11832 = (state_11842[2]);var state_11842__$1 = state_11842;var statearr_11864_11886 = state_11842__$1;(statearr_11864_11886[2] = inst_11832);
(statearr_11864_11886[1] = 14);
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
});return ((function (switch__6955__auto__){
return (function() {
var state_machine__6956__auto__ = null;
var state_machine__6956__auto____0 = (function (){var statearr_11868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11868[0] = state_machine__6956__auto__);
(statearr_11868[1] = 1);
return statearr_11868;
});
var state_machine__6956__auto____1 = (function (state_11842){while(true){
var ret_value__6957__auto__ = (function (){try{while(true){
var result__6958__auto__ = switch__6955__auto__.call(null,state_11842);if(cljs.core.keyword_identical_QMARK_.call(null,result__6958__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6958__auto__;
}
break;
}
}catch (e11869){if((e11869 instanceof Object))
{var ex__6959__auto__ = e11869;var statearr_11870_11887 = state_11842;(statearr_11870_11887[5] = ex__6959__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11842);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11869;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6957__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11888 = state_11842;
state_11842 = G__11888;
continue;
}
} else
{return ret_value__6957__auto__;
}
break;
}
});
state_machine__6956__auto__ = function(state_11842){
switch(arguments.length){
case 0:
return state_machine__6956__auto____0.call(this);
case 1:
return state_machine__6956__auto____1.call(this,state_11842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6956__auto____0;
state_machine__6956__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6956__auto____1;
return state_machine__6956__auto__;
})()
;})(switch__6955__auto__))
})();var state__6972__auto__ = (function (){var statearr_11871 = f__6971__auto__.call(null);(statearr_11871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6970__auto___11872);
return statearr_11871;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6972__auto__);
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

//# sourceMappingURL=async.js.map