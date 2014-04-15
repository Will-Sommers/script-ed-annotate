// Compiled by ClojureScript 0.0-2173
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10288 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10288 = (function (f,fn_handler,meta10289){
this.f = f;
this.fn_handler = fn_handler;
this.meta10289 = meta10289;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10288.cljs$lang$type = true;
cljs.core.async.t10288.cljs$lang$ctorStr = "cljs.core.async/t10288";
cljs.core.async.t10288.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10288");
});
cljs.core.async.t10288.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10288.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10288.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10290){var self__ = this;
var _10290__$1 = this;return self__.meta10289;
});
cljs.core.async.t10288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10290,meta10289__$1){var self__ = this;
var _10290__$1 = this;return (new cljs.core.async.t10288(self__.f,self__.fn_handler,meta10289__$1));
});
cljs.core.async.__GT_t10288 = (function __GT_t10288(f__$1,fn_handler__$1,meta10289){return (new cljs.core.async.t10288(f__$1,fn_handler__$1,meta10289));
});
}
return (new cljs.core.async.t10288(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10292 = buff;if(G__10292)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__10292.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10292.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10292);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10292);
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
{var val_10293 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10293);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10293);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3431__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___10294 = n;var x_10295 = 0;while(true){
if((x_10295 < n__4291__auto___10294))
{(a[x_10295] = 0);
{
var G__10296 = (x_10295 + 1);
x_10295 = G__10296;
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
var G__10297 = (i + 1);
i = G__10297;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10301 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10301 = (function (flag,alt_flag,meta10302){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10302 = meta10302;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10301.cljs$lang$type = true;
cljs.core.async.t10301.cljs$lang$ctorStr = "cljs.core.async/t10301";
cljs.core.async.t10301.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10301");
});
cljs.core.async.t10301.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10301.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10301.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10303){var self__ = this;
var _10303__$1 = this;return self__.meta10302;
});
cljs.core.async.t10301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10303,meta10302__$1){var self__ = this;
var _10303__$1 = this;return (new cljs.core.async.t10301(self__.flag,self__.alt_flag,meta10302__$1));
});
cljs.core.async.__GT_t10301 = (function __GT_t10301(flag__$1,alt_flag__$1,meta10302){return (new cljs.core.async.t10301(flag__$1,alt_flag__$1,meta10302));
});
}
return (new cljs.core.async.t10301(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10307 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10307 = (function (cb,flag,alt_handler,meta10308){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10308 = meta10308;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10307.cljs$lang$type = true;
cljs.core.async.t10307.cljs$lang$ctorStr = "cljs.core.async/t10307";
cljs.core.async.t10307.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10307");
});
cljs.core.async.t10307.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10307.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10307.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10309){var self__ = this;
var _10309__$1 = this;return self__.meta10308;
});
cljs.core.async.t10307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10309,meta10308__$1){var self__ = this;
var _10309__$1 = this;return (new cljs.core.async.t10307(self__.cb,self__.flag,self__.alt_handler,meta10308__$1));
});
cljs.core.async.__GT_t10307 = (function __GT_t10307(cb__$1,flag__$1,alt_handler__$1,meta10308){return (new cljs.core.async.t10307(cb__$1,flag__$1,alt_handler__$1,meta10308));
});
}
return (new cljs.core.async.t10307(cb,flag,alt_handler,null));
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
return (function (p1__10310_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10310_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10311 = (i + 1);
i = G__10311;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
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
var alts_BANG___delegate = function (ports,p__10312){var map__10314 = p__10312;var map__10314__$1 = ((cljs.core.seq_QMARK_.call(null,map__10314))?cljs.core.apply.call(null,cljs.core.hash_map,map__10314):map__10314);var opts = map__10314__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10312 = null;if (arguments.length > 1) {
  p__10312 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10312);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10315){
var ports = cljs.core.first(arglist__10315);
var p__10312 = cljs.core.rest(arglist__10315);
return alts_BANG___delegate(ports,p__10312);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10323 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10323 = (function (ch,f,map_LT_,meta10324){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10324 = meta10324;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10323.cljs$lang$type = true;
cljs.core.async.t10323.cljs$lang$ctorStr = "cljs.core.async/t10323";
cljs.core.async.t10323.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10323");
});
cljs.core.async.t10323.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10323.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10323.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10323.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10326 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10326 = (function (fn1,_,meta10324,ch,f,map_LT_,meta10327){
this.fn1 = fn1;
this._ = _;
this.meta10324 = meta10324;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10327 = meta10327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10326.cljs$lang$type = true;
cljs.core.async.t10326.cljs$lang$ctorStr = "cljs.core.async/t10326";
cljs.core.async.t10326.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10326");
});
cljs.core.async.t10326.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10326.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10326.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10326.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10316_SHARP_){return f1.call(null,(((p1__10316_SHARP_ == null))?null:self__.f.call(null,p1__10316_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10328){var self__ = this;
var _10328__$1 = this;return self__.meta10327;
});
cljs.core.async.t10326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10328,meta10327__$1){var self__ = this;
var _10328__$1 = this;return (new cljs.core.async.t10326(self__.fn1,self__._,self__.meta10324,self__.ch,self__.f,self__.map_LT_,meta10327__$1));
});
cljs.core.async.__GT_t10326 = (function __GT_t10326(fn1__$1,___$2,meta10324__$1,ch__$2,f__$2,map_LT___$2,meta10327){return (new cljs.core.async.t10326(fn1__$1,___$2,meta10324__$1,ch__$2,f__$2,map_LT___$2,meta10327));
});
}
return (new cljs.core.async.t10326(fn1,___$1,self__.meta10324,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10323.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10323.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10325){var self__ = this;
var _10325__$1 = this;return self__.meta10324;
});
cljs.core.async.t10323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10325,meta10324__$1){var self__ = this;
var _10325__$1 = this;return (new cljs.core.async.t10323(self__.ch,self__.f,self__.map_LT_,meta10324__$1));
});
cljs.core.async.__GT_t10323 = (function __GT_t10323(ch__$1,f__$1,map_LT___$1,meta10324){return (new cljs.core.async.t10323(ch__$1,f__$1,map_LT___$1,meta10324));
});
}
return (new cljs.core.async.t10323(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10332 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10332 = (function (ch,f,map_GT_,meta10333){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10333 = meta10333;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10332.cljs$lang$type = true;
cljs.core.async.t10332.cljs$lang$ctorStr = "cljs.core.async/t10332";
cljs.core.async.t10332.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10332");
});
cljs.core.async.t10332.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10332.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10332.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10332.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10332.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10332.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10334){var self__ = this;
var _10334__$1 = this;return self__.meta10333;
});
cljs.core.async.t10332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10334,meta10333__$1){var self__ = this;
var _10334__$1 = this;return (new cljs.core.async.t10332(self__.ch,self__.f,self__.map_GT_,meta10333__$1));
});
cljs.core.async.__GT_t10332 = (function __GT_t10332(ch__$1,f__$1,map_GT___$1,meta10333){return (new cljs.core.async.t10332(ch__$1,f__$1,map_GT___$1,meta10333));
});
}
return (new cljs.core.async.t10332(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10338 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10338 = (function (ch,p,filter_GT_,meta10339){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10339 = meta10339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10338.cljs$lang$type = true;
cljs.core.async.t10338.cljs$lang$ctorStr = "cljs.core.async/t10338";
cljs.core.async.t10338.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10338");
});
cljs.core.async.t10338.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10338.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10338.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10338.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10338.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10338.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10340){var self__ = this;
var _10340__$1 = this;return self__.meta10339;
});
cljs.core.async.t10338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10340,meta10339__$1){var self__ = this;
var _10340__$1 = this;return (new cljs.core.async.t10338(self__.ch,self__.p,self__.filter_GT_,meta10339__$1));
});
cljs.core.async.__GT_t10338 = (function __GT_t10338(ch__$1,p__$1,filter_GT___$1,meta10339){return (new cljs.core.async.t10338(ch__$1,p__$1,filter_GT___$1,meta10339));
});
}
return (new cljs.core.async.t10338(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___10423 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_10402){var state_val_10403 = (state_10402[1]);if((state_val_10403 === 1))
{var state_10402__$1 = state_10402;var statearr_10404_10424 = state_10402__$1;(statearr_10404_10424[2] = null);
(statearr_10404_10424[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10403 === 2))
{var state_10402__$1 = state_10402;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10402__$1,4,ch);
} else
{if((state_val_10403 === 3))
{var inst_10400 = (state_10402[2]);var state_10402__$1 = state_10402;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10402__$1,inst_10400);
} else
{if((state_val_10403 === 4))
{var inst_10384 = (state_10402[7]);var inst_10384__$1 = (state_10402[2]);var inst_10385 = (inst_10384__$1 == null);var state_10402__$1 = (function (){var statearr_10405 = state_10402;(statearr_10405[7] = inst_10384__$1);
return statearr_10405;
})();if(cljs.core.truth_(inst_10385))
{var statearr_10406_10425 = state_10402__$1;(statearr_10406_10425[1] = 5);
} else
{var statearr_10407_10426 = state_10402__$1;(statearr_10407_10426[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10403 === 5))
{var inst_10387 = cljs.core.async.close_BANG_.call(null,out);var state_10402__$1 = state_10402;var statearr_10408_10427 = state_10402__$1;(statearr_10408_10427[2] = inst_10387);
(statearr_10408_10427[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10403 === 6))
{var inst_10384 = (state_10402[7]);var inst_10389 = p.call(null,inst_10384);var state_10402__$1 = state_10402;if(cljs.core.truth_(inst_10389))
{var statearr_10409_10428 = state_10402__$1;(statearr_10409_10428[1] = 8);
} else
{var statearr_10410_10429 = state_10402__$1;(statearr_10410_10429[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10403 === 7))
{var inst_10398 = (state_10402[2]);var state_10402__$1 = state_10402;var statearr_10411_10430 = state_10402__$1;(statearr_10411_10430[2] = inst_10398);
(statearr_10411_10430[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10403 === 8))
{var inst_10384 = (state_10402[7]);var state_10402__$1 = state_10402;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10402__$1,11,out,inst_10384);
} else
{if((state_val_10403 === 9))
{var state_10402__$1 = state_10402;var statearr_10412_10431 = state_10402__$1;(statearr_10412_10431[2] = null);
(statearr_10412_10431[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10403 === 10))
{var inst_10395 = (state_10402[2]);var state_10402__$1 = (function (){var statearr_10413 = state_10402;(statearr_10413[8] = inst_10395);
return statearr_10413;
})();var statearr_10414_10432 = state_10402__$1;(statearr_10414_10432[2] = null);
(statearr_10414_10432[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10403 === 11))
{var inst_10392 = (state_10402[2]);var state_10402__$1 = state_10402;var statearr_10415_10433 = state_10402__$1;(statearr_10415_10433[2] = inst_10392);
(statearr_10415_10433[1] = 10);
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
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_10419 = [null,null,null,null,null,null,null,null,null];(statearr_10419[0] = state_machine__5550__auto__);
(statearr_10419[1] = 1);
return statearr_10419;
});
var state_machine__5550__auto____1 = (function (state_10402){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_10402);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e10420){if((e10420 instanceof Object))
{var ex__5553__auto__ = e10420;var statearr_10421_10434 = state_10402;(statearr_10421_10434[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10402);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10420;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10435 = state_10402;
state_10402 = G__10435;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_10402){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_10402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_10422 = f__5565__auto__.call(null);(statearr_10422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___10423);
return statearr_10422;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5564__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_10587){var state_val_10588 = (state_10587[1]);if((state_val_10588 === 1))
{var state_10587__$1 = state_10587;var statearr_10589_10626 = state_10587__$1;(statearr_10589_10626[2] = null);
(statearr_10589_10626[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10588 === 2))
{var state_10587__$1 = state_10587;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10587__$1,4,in$);
} else
{if((state_val_10588 === 3))
{var inst_10585 = (state_10587[2]);var state_10587__$1 = state_10587;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10587__$1,inst_10585);
} else
{if((state_val_10588 === 4))
{var inst_10533 = (state_10587[7]);var inst_10533__$1 = (state_10587[2]);var inst_10534 = (inst_10533__$1 == null);var state_10587__$1 = (function (){var statearr_10590 = state_10587;(statearr_10590[7] = inst_10533__$1);
return statearr_10590;
})();if(cljs.core.truth_(inst_10534))
{var statearr_10591_10627 = state_10587__$1;(statearr_10591_10627[1] = 5);
} else
{var statearr_10592_10628 = state_10587__$1;(statearr_10592_10628[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10588 === 5))
{var inst_10536 = cljs.core.async.close_BANG_.call(null,out);var state_10587__$1 = state_10587;var statearr_10593_10629 = state_10587__$1;(statearr_10593_10629[2] = inst_10536);
(statearr_10593_10629[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10588 === 6))
{var inst_10533 = (state_10587[7]);var inst_10538 = f.call(null,inst_10533);var inst_10543 = cljs.core.seq.call(null,inst_10538);var inst_10544 = inst_10543;var inst_10545 = null;var inst_10546 = 0;var inst_10547 = 0;var state_10587__$1 = (function (){var statearr_10594 = state_10587;(statearr_10594[8] = inst_10547);
(statearr_10594[9] = inst_10544);
(statearr_10594[10] = inst_10545);
(statearr_10594[11] = inst_10546);
return statearr_10594;
})();var statearr_10595_10630 = state_10587__$1;(statearr_10595_10630[2] = null);
(statearr_10595_10630[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10588 === 7))
{var inst_10583 = (state_10587[2]);var state_10587__$1 = state_10587;var statearr_10596_10631 = state_10587__$1;(statearr_10596_10631[2] = inst_10583);
(statearr_10596_10631[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10588 === 8))
{var inst_10547 = (state_10587[8]);var inst_10546 = (state_10587[11]);var inst_10549 = (inst_10547 < inst_10546);var inst_10550 = inst_10549;var state_10587__$1 = state_10587;if(cljs.core.truth_(inst_10550))
{var statearr_10597_10632 = state_10587__$1;(statearr_10597_10632[1] = 10);
} else
{var statearr_10598_10633 = state_10587__$1;(statearr_10598_10633[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10588 === 9))
{var inst_10580 = (state_10587[2]);var state_10587__$1 = (function (){var statearr_10599 = state_10587;(statearr_10599[12] = inst_10580);
return statearr_10599;
})();var statearr_10600_10634 = state_10587__$1;(statearr_10600_10634[2] = null);
(statearr_10600_10634[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10588 === 10))
{var inst_10547 = (state_10587[8]);var inst_10545 = (state_10587[10]);var inst_10552 = cljs.core._nth.call(null,inst_10545,inst_10547);var state_10587__$1 = state_10587;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10587__$1,13,out,inst_10552);
} else
{if((state_val_10588 === 11))
{var inst_10558 = (state_10587[13]);var inst_10544 = (state_10587[9]);var inst_10558__$1 = cljs.core.seq.call(null,inst_10544);var state_10587__$1 = (function (){var statearr_10604 = state_10587;(statearr_10604[13] = inst_10558__$1);
return statearr_10604;
})();if(inst_10558__$1)
{var statearr_10605_10635 = state_10587__$1;(statearr_10605_10635[1] = 14);
} else
{var statearr_10606_10636 = state_10587__$1;(statearr_10606_10636[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10588 === 12))
{var inst_10578 = (state_10587[2]);var state_10587__$1 = state_10587;var statearr_10607_10637 = state_10587__$1;(statearr_10607_10637[2] = inst_10578);
(statearr_10607_10637[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10588 === 13))
{var inst_10547 = (state_10587[8]);var inst_10544 = (state_10587[9]);var inst_10545 = (state_10587[10]);var inst_10546 = (state_10587[11]);var inst_10554 = (state_10587[2]);var inst_10555 = (inst_10547 + 1);var tmp10601 = inst_10544;var tmp10602 = inst_10545;var tmp10603 = inst_10546;var inst_10544__$1 = tmp10601;var inst_10545__$1 = tmp10602;var inst_10546__$1 = tmp10603;var inst_10547__$1 = inst_10555;var state_10587__$1 = (function (){var statearr_10608 = state_10587;(statearr_10608[8] = inst_10547__$1);
(statearr_10608[14] = inst_10554);
(statearr_10608[9] = inst_10544__$1);
(statearr_10608[10] = inst_10545__$1);
(statearr_10608[11] = inst_10546__$1);
return statearr_10608;
})();var statearr_10609_10638 = state_10587__$1;(statearr_10609_10638[2] = null);
(statearr_10609_10638[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10588 === 14))
{var inst_10558 = (state_10587[13]);var inst_10560 = cljs.core.chunked_seq_QMARK_.call(null,inst_10558);var state_10587__$1 = state_10587;if(inst_10560)
{var statearr_10610_10639 = state_10587__$1;(statearr_10610_10639[1] = 17);
} else
{var statearr_10611_10640 = state_10587__$1;(statearr_10611_10640[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10588 === 15))
{var state_10587__$1 = state_10587;var statearr_10612_10641 = state_10587__$1;(statearr_10612_10641[2] = null);
(statearr_10612_10641[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10588 === 16))
{var inst_10576 = (state_10587[2]);var state_10587__$1 = state_10587;var statearr_10613_10642 = state_10587__$1;(statearr_10613_10642[2] = inst_10576);
(statearr_10613_10642[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10588 === 17))
{var inst_10558 = (state_10587[13]);var inst_10562 = cljs.core.chunk_first.call(null,inst_10558);var inst_10563 = cljs.core.chunk_rest.call(null,inst_10558);var inst_10564 = cljs.core.count.call(null,inst_10562);var inst_10544 = inst_10563;var inst_10545 = inst_10562;var inst_10546 = inst_10564;var inst_10547 = 0;var state_10587__$1 = (function (){var statearr_10614 = state_10587;(statearr_10614[8] = inst_10547);
(statearr_10614[9] = inst_10544);
(statearr_10614[10] = inst_10545);
(statearr_10614[11] = inst_10546);
return statearr_10614;
})();var statearr_10615_10643 = state_10587__$1;(statearr_10615_10643[2] = null);
(statearr_10615_10643[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10588 === 18))
{var inst_10558 = (state_10587[13]);var inst_10567 = cljs.core.first.call(null,inst_10558);var state_10587__$1 = state_10587;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10587__$1,20,out,inst_10567);
} else
{if((state_val_10588 === 19))
{var inst_10573 = (state_10587[2]);var state_10587__$1 = state_10587;var statearr_10616_10644 = state_10587__$1;(statearr_10616_10644[2] = inst_10573);
(statearr_10616_10644[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10588 === 20))
{var inst_10558 = (state_10587[13]);var inst_10569 = (state_10587[2]);var inst_10570 = cljs.core.next.call(null,inst_10558);var inst_10544 = inst_10570;var inst_10545 = null;var inst_10546 = 0;var inst_10547 = 0;var state_10587__$1 = (function (){var statearr_10617 = state_10587;(statearr_10617[8] = inst_10547);
(statearr_10617[9] = inst_10544);
(statearr_10617[10] = inst_10545);
(statearr_10617[11] = inst_10546);
(statearr_10617[15] = inst_10569);
return statearr_10617;
})();var statearr_10618_10645 = state_10587__$1;(statearr_10618_10645[2] = null);
(statearr_10618_10645[1] = 8);
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
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_10622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10622[0] = state_machine__5550__auto__);
(statearr_10622[1] = 1);
return statearr_10622;
});
var state_machine__5550__auto____1 = (function (state_10587){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_10587);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e10623){if((e10623 instanceof Object))
{var ex__5553__auto__ = e10623;var statearr_10624_10646 = state_10587;(statearr_10624_10646[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10587);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10623;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10647 = state_10587;
state_10587 = G__10647;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_10587){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_10587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_10625 = f__5565__auto__.call(null);(statearr_10625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto__);
return statearr_10625;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return c__5564__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5564__auto___10728 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_10707){var state_val_10708 = (state_10707[1]);if((state_val_10708 === 1))
{var state_10707__$1 = state_10707;var statearr_10709_10729 = state_10707__$1;(statearr_10709_10729[2] = null);
(statearr_10709_10729[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10708 === 2))
{var state_10707__$1 = state_10707;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10707__$1,4,from);
} else
{if((state_val_10708 === 3))
{var inst_10705 = (state_10707[2]);var state_10707__$1 = state_10707;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10707__$1,inst_10705);
} else
{if((state_val_10708 === 4))
{var inst_10690 = (state_10707[7]);var inst_10690__$1 = (state_10707[2]);var inst_10691 = (inst_10690__$1 == null);var state_10707__$1 = (function (){var statearr_10710 = state_10707;(statearr_10710[7] = inst_10690__$1);
return statearr_10710;
})();if(cljs.core.truth_(inst_10691))
{var statearr_10711_10730 = state_10707__$1;(statearr_10711_10730[1] = 5);
} else
{var statearr_10712_10731 = state_10707__$1;(statearr_10712_10731[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10708 === 5))
{var state_10707__$1 = state_10707;if(cljs.core.truth_(close_QMARK_))
{var statearr_10713_10732 = state_10707__$1;(statearr_10713_10732[1] = 8);
} else
{var statearr_10714_10733 = state_10707__$1;(statearr_10714_10733[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10708 === 6))
{var inst_10690 = (state_10707[7]);var state_10707__$1 = state_10707;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10707__$1,11,to,inst_10690);
} else
{if((state_val_10708 === 7))
{var inst_10703 = (state_10707[2]);var state_10707__$1 = state_10707;var statearr_10715_10734 = state_10707__$1;(statearr_10715_10734[2] = inst_10703);
(statearr_10715_10734[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10708 === 8))
{var inst_10694 = cljs.core.async.close_BANG_.call(null,to);var state_10707__$1 = state_10707;var statearr_10716_10735 = state_10707__$1;(statearr_10716_10735[2] = inst_10694);
(statearr_10716_10735[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10708 === 9))
{var state_10707__$1 = state_10707;var statearr_10717_10736 = state_10707__$1;(statearr_10717_10736[2] = null);
(statearr_10717_10736[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10708 === 10))
{var inst_10697 = (state_10707[2]);var state_10707__$1 = state_10707;var statearr_10718_10737 = state_10707__$1;(statearr_10718_10737[2] = inst_10697);
(statearr_10718_10737[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10708 === 11))
{var inst_10700 = (state_10707[2]);var state_10707__$1 = (function (){var statearr_10719 = state_10707;(statearr_10719[8] = inst_10700);
return statearr_10719;
})();var statearr_10720_10738 = state_10707__$1;(statearr_10720_10738[2] = null);
(statearr_10720_10738[1] = 2);
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
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_10724 = [null,null,null,null,null,null,null,null,null];(statearr_10724[0] = state_machine__5550__auto__);
(statearr_10724[1] = 1);
return statearr_10724;
});
var state_machine__5550__auto____1 = (function (state_10707){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_10707);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e10725){if((e10725 instanceof Object))
{var ex__5553__auto__ = e10725;var statearr_10726_10739 = state_10707;(statearr_10726_10739[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10707);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10725;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10740 = state_10707;
state_10707 = G__10740;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_10707){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_10707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_10727 = f__5565__auto__.call(null);(statearr_10727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___10728);
return statearr_10727;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5564__auto___10827 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_10805){var state_val_10806 = (state_10805[1]);if((state_val_10806 === 1))
{var state_10805__$1 = state_10805;var statearr_10807_10828 = state_10805__$1;(statearr_10807_10828[2] = null);
(statearr_10807_10828[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10806 === 2))
{var state_10805__$1 = state_10805;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10805__$1,4,ch);
} else
{if((state_val_10806 === 3))
{var inst_10803 = (state_10805[2]);var state_10805__$1 = state_10805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10805__$1,inst_10803);
} else
{if((state_val_10806 === 4))
{var inst_10786 = (state_10805[7]);var inst_10786__$1 = (state_10805[2]);var inst_10787 = (inst_10786__$1 == null);var state_10805__$1 = (function (){var statearr_10808 = state_10805;(statearr_10808[7] = inst_10786__$1);
return statearr_10808;
})();if(cljs.core.truth_(inst_10787))
{var statearr_10809_10829 = state_10805__$1;(statearr_10809_10829[1] = 5);
} else
{var statearr_10810_10830 = state_10805__$1;(statearr_10810_10830[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10806 === 5))
{var inst_10789 = cljs.core.async.close_BANG_.call(null,tc);var inst_10790 = cljs.core.async.close_BANG_.call(null,fc);var state_10805__$1 = (function (){var statearr_10811 = state_10805;(statearr_10811[8] = inst_10789);
return statearr_10811;
})();var statearr_10812_10831 = state_10805__$1;(statearr_10812_10831[2] = inst_10790);
(statearr_10812_10831[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10806 === 6))
{var inst_10786 = (state_10805[7]);var inst_10792 = p.call(null,inst_10786);var state_10805__$1 = state_10805;if(cljs.core.truth_(inst_10792))
{var statearr_10813_10832 = state_10805__$1;(statearr_10813_10832[1] = 9);
} else
{var statearr_10814_10833 = state_10805__$1;(statearr_10814_10833[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10806 === 7))
{var inst_10801 = (state_10805[2]);var state_10805__$1 = state_10805;var statearr_10815_10834 = state_10805__$1;(statearr_10815_10834[2] = inst_10801);
(statearr_10815_10834[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10806 === 8))
{var inst_10798 = (state_10805[2]);var state_10805__$1 = (function (){var statearr_10816 = state_10805;(statearr_10816[9] = inst_10798);
return statearr_10816;
})();var statearr_10817_10835 = state_10805__$1;(statearr_10817_10835[2] = null);
(statearr_10817_10835[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10806 === 9))
{var state_10805__$1 = state_10805;var statearr_10818_10836 = state_10805__$1;(statearr_10818_10836[2] = tc);
(statearr_10818_10836[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10806 === 10))
{var state_10805__$1 = state_10805;var statearr_10819_10837 = state_10805__$1;(statearr_10819_10837[2] = fc);
(statearr_10819_10837[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10806 === 11))
{var inst_10786 = (state_10805[7]);var inst_10796 = (state_10805[2]);var state_10805__$1 = state_10805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10805__$1,8,inst_10796,inst_10786);
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
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_10823 = [null,null,null,null,null,null,null,null,null,null];(statearr_10823[0] = state_machine__5550__auto__);
(statearr_10823[1] = 1);
return statearr_10823;
});
var state_machine__5550__auto____1 = (function (state_10805){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_10805);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e10824){if((e10824 instanceof Object))
{var ex__5553__auto__ = e10824;var statearr_10825_10838 = state_10805;(statearr_10825_10838[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10805);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10824;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10839 = state_10805;
state_10805 = G__10839;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_10805){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_10805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_10826 = f__5565__auto__.call(null);(statearr_10826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___10827);
return statearr_10826;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5564__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_10886){var state_val_10887 = (state_10886[1]);if((state_val_10887 === 7))
{var inst_10882 = (state_10886[2]);var state_10886__$1 = state_10886;var statearr_10888_10904 = state_10886__$1;(statearr_10888_10904[2] = inst_10882);
(statearr_10888_10904[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10887 === 6))
{var inst_10875 = (state_10886[7]);var inst_10872 = (state_10886[8]);var inst_10879 = f.call(null,inst_10872,inst_10875);var inst_10872__$1 = inst_10879;var state_10886__$1 = (function (){var statearr_10889 = state_10886;(statearr_10889[8] = inst_10872__$1);
return statearr_10889;
})();var statearr_10890_10905 = state_10886__$1;(statearr_10890_10905[2] = null);
(statearr_10890_10905[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10887 === 5))
{var inst_10872 = (state_10886[8]);var state_10886__$1 = state_10886;var statearr_10891_10906 = state_10886__$1;(statearr_10891_10906[2] = inst_10872);
(statearr_10891_10906[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10887 === 4))
{var inst_10875 = (state_10886[7]);var inst_10875__$1 = (state_10886[2]);var inst_10876 = (inst_10875__$1 == null);var state_10886__$1 = (function (){var statearr_10892 = state_10886;(statearr_10892[7] = inst_10875__$1);
return statearr_10892;
})();if(cljs.core.truth_(inst_10876))
{var statearr_10893_10907 = state_10886__$1;(statearr_10893_10907[1] = 5);
} else
{var statearr_10894_10908 = state_10886__$1;(statearr_10894_10908[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10887 === 3))
{var inst_10884 = (state_10886[2]);var state_10886__$1 = state_10886;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10886__$1,inst_10884);
} else
{if((state_val_10887 === 2))
{var state_10886__$1 = state_10886;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10886__$1,4,ch);
} else
{if((state_val_10887 === 1))
{var inst_10872 = init;var state_10886__$1 = (function (){var statearr_10895 = state_10886;(statearr_10895[8] = inst_10872);
return statearr_10895;
})();var statearr_10896_10909 = state_10886__$1;(statearr_10896_10909[2] = null);
(statearr_10896_10909[1] = 2);
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
var state_machine__5550__auto____0 = (function (){var statearr_10900 = [null,null,null,null,null,null,null,null,null];(statearr_10900[0] = state_machine__5550__auto__);
(statearr_10900[1] = 1);
return statearr_10900;
});
var state_machine__5550__auto____1 = (function (state_10886){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_10886);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e10901){if((e10901 instanceof Object))
{var ex__5553__auto__ = e10901;var statearr_10902_10910 = state_10886;(statearr_10902_10910[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10886);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10901;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10911 = state_10886;
state_10886 = G__10911;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_10886){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_10886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_10903 = f__5565__auto__.call(null);(statearr_10903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto__);
return statearr_10903;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return c__5564__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5564__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_10973){var state_val_10974 = (state_10973[1]);if((state_val_10974 === 1))
{var inst_10953 = cljs.core.seq.call(null,coll);var inst_10954 = inst_10953;var state_10973__$1 = (function (){var statearr_10975 = state_10973;(statearr_10975[7] = inst_10954);
return statearr_10975;
})();var statearr_10976_10994 = state_10973__$1;(statearr_10976_10994[2] = null);
(statearr_10976_10994[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 2))
{var inst_10954 = (state_10973[7]);var state_10973__$1 = state_10973;if(cljs.core.truth_(inst_10954))
{var statearr_10977_10995 = state_10973__$1;(statearr_10977_10995[1] = 4);
} else
{var statearr_10978_10996 = state_10973__$1;(statearr_10978_10996[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 3))
{var inst_10971 = (state_10973[2]);var state_10973__$1 = state_10973;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10973__$1,inst_10971);
} else
{if((state_val_10974 === 4))
{var inst_10954 = (state_10973[7]);var inst_10957 = cljs.core.first.call(null,inst_10954);var state_10973__$1 = state_10973;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10973__$1,7,ch,inst_10957);
} else
{if((state_val_10974 === 5))
{var state_10973__$1 = state_10973;if(cljs.core.truth_(close_QMARK_))
{var statearr_10979_10997 = state_10973__$1;(statearr_10979_10997[1] = 8);
} else
{var statearr_10980_10998 = state_10973__$1;(statearr_10980_10998[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 6))
{var inst_10969 = (state_10973[2]);var state_10973__$1 = state_10973;var statearr_10981_10999 = state_10973__$1;(statearr_10981_10999[2] = inst_10969);
(statearr_10981_10999[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 7))
{var inst_10954 = (state_10973[7]);var inst_10959 = (state_10973[2]);var inst_10960 = cljs.core.next.call(null,inst_10954);var inst_10954__$1 = inst_10960;var state_10973__$1 = (function (){var statearr_10982 = state_10973;(statearr_10982[7] = inst_10954__$1);
(statearr_10982[8] = inst_10959);
return statearr_10982;
})();var statearr_10983_11000 = state_10973__$1;(statearr_10983_11000[2] = null);
(statearr_10983_11000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 8))
{var inst_10964 = cljs.core.async.close_BANG_.call(null,ch);var state_10973__$1 = state_10973;var statearr_10984_11001 = state_10973__$1;(statearr_10984_11001[2] = inst_10964);
(statearr_10984_11001[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 9))
{var state_10973__$1 = state_10973;var statearr_10985_11002 = state_10973__$1;(statearr_10985_11002[2] = null);
(statearr_10985_11002[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 10))
{var inst_10967 = (state_10973[2]);var state_10973__$1 = state_10973;var statearr_10986_11003 = state_10973__$1;(statearr_10986_11003[2] = inst_10967);
(statearr_10986_11003[1] = 6);
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
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_10990 = [null,null,null,null,null,null,null,null,null];(statearr_10990[0] = state_machine__5550__auto__);
(statearr_10990[1] = 1);
return statearr_10990;
});
var state_machine__5550__auto____1 = (function (state_10973){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_10973);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e10991){if((e10991 instanceof Object))
{var ex__5553__auto__ = e10991;var statearr_10992_11004 = state_10973;(statearr_10992_11004[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10973);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10991;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11005 = state_10973;
state_10973 = G__11005;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_10973){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_10973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_10993 = f__5565__auto__.call(null);(statearr_10993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto__);
return statearr_10993;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return c__5564__auto__;
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
cljs.core.async.Mux = (function (){var obj11007 = {};return obj11007;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11009 = {};return obj11009;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11233 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11233 = (function (cs,ch,mult,meta11234){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11234 = meta11234;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11233.cljs$lang$type = true;
cljs.core.async.t11233.cljs$lang$ctorStr = "cljs.core.async/t11233";
cljs.core.async.t11233.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11233");
});})(cs))
;
cljs.core.async.t11233.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11233.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11233.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11233.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11233.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11233.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11233.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11235){var self__ = this;
var _11235__$1 = this;return self__.meta11234;
});})(cs))
;
cljs.core.async.t11233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11235,meta11234__$1){var self__ = this;
var _11235__$1 = this;return (new cljs.core.async.t11233(self__.cs,self__.ch,self__.mult,meta11234__$1));
});})(cs))
;
cljs.core.async.__GT_t11233 = ((function (cs){
return (function __GT_t11233(cs__$1,ch__$1,mult__$1,meta11234){return (new cljs.core.async.t11233(cs__$1,ch__$1,mult__$1,meta11234));
});})(cs))
;
}
return (new cljs.core.async.t11233(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5564__auto___11456 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_11370){var state_val_11371 = (state_11370[1]);if((state_val_11371 === 32))
{var inst_11314 = (state_11370[7]);var inst_11238 = (state_11370[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11370,31,Object,null,30);var inst_11321 = cljs.core.async.put_BANG_.call(null,inst_11314,inst_11238,done);var state_11370__$1 = state_11370;var statearr_11372_11457 = state_11370__$1;(statearr_11372_11457[2] = inst_11321);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11370__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 1))
{var state_11370__$1 = state_11370;var statearr_11373_11458 = state_11370__$1;(statearr_11373_11458[2] = null);
(statearr_11373_11458[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 33))
{var inst_11327 = (state_11370[9]);var inst_11329 = cljs.core.chunked_seq_QMARK_.call(null,inst_11327);var state_11370__$1 = state_11370;if(inst_11329)
{var statearr_11374_11459 = state_11370__$1;(statearr_11374_11459[1] = 36);
} else
{var statearr_11375_11460 = state_11370__$1;(statearr_11375_11460[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 2))
{var state_11370__$1 = state_11370;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11370__$1,4,ch);
} else
{if((state_val_11371 === 34))
{var state_11370__$1 = state_11370;var statearr_11376_11461 = state_11370__$1;(statearr_11376_11461[2] = null);
(statearr_11376_11461[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 3))
{var inst_11368 = (state_11370[2]);var state_11370__$1 = state_11370;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11370__$1,inst_11368);
} else
{if((state_val_11371 === 35))
{var inst_11352 = (state_11370[2]);var state_11370__$1 = state_11370;var statearr_11377_11462 = state_11370__$1;(statearr_11377_11462[2] = inst_11352);
(statearr_11377_11462[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 4))
{var inst_11238 = (state_11370[8]);var inst_11238__$1 = (state_11370[2]);var inst_11239 = (inst_11238__$1 == null);var state_11370__$1 = (function (){var statearr_11378 = state_11370;(statearr_11378[8] = inst_11238__$1);
return statearr_11378;
})();if(cljs.core.truth_(inst_11239))
{var statearr_11379_11463 = state_11370__$1;(statearr_11379_11463[1] = 5);
} else
{var statearr_11380_11464 = state_11370__$1;(statearr_11380_11464[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 36))
{var inst_11327 = (state_11370[9]);var inst_11331 = cljs.core.chunk_first.call(null,inst_11327);var inst_11332 = cljs.core.chunk_rest.call(null,inst_11327);var inst_11333 = cljs.core.count.call(null,inst_11331);var inst_11306 = inst_11332;var inst_11307 = inst_11331;var inst_11308 = inst_11333;var inst_11309 = 0;var state_11370__$1 = (function (){var statearr_11381 = state_11370;(statearr_11381[10] = inst_11307);
(statearr_11381[11] = inst_11306);
(statearr_11381[12] = inst_11309);
(statearr_11381[13] = inst_11308);
return statearr_11381;
})();var statearr_11382_11465 = state_11370__$1;(statearr_11382_11465[2] = null);
(statearr_11382_11465[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 5))
{var inst_11245 = cljs.core.deref.call(null,cs);var inst_11246 = cljs.core.seq.call(null,inst_11245);var inst_11247 = inst_11246;var inst_11248 = null;var inst_11249 = 0;var inst_11250 = 0;var state_11370__$1 = (function (){var statearr_11383 = state_11370;(statearr_11383[14] = inst_11250);
(statearr_11383[15] = inst_11247);
(statearr_11383[16] = inst_11248);
(statearr_11383[17] = inst_11249);
return statearr_11383;
})();var statearr_11384_11466 = state_11370__$1;(statearr_11384_11466[2] = null);
(statearr_11384_11466[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 37))
{var inst_11327 = (state_11370[9]);var inst_11336 = cljs.core.first.call(null,inst_11327);var state_11370__$1 = (function (){var statearr_11385 = state_11370;(statearr_11385[18] = inst_11336);
return statearr_11385;
})();var statearr_11386_11467 = state_11370__$1;(statearr_11386_11467[2] = null);
(statearr_11386_11467[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 6))
{var inst_11298 = (state_11370[19]);var inst_11297 = cljs.core.deref.call(null,cs);var inst_11298__$1 = cljs.core.keys.call(null,inst_11297);var inst_11299 = cljs.core.count.call(null,inst_11298__$1);var inst_11300 = cljs.core.reset_BANG_.call(null,dctr,inst_11299);var inst_11305 = cljs.core.seq.call(null,inst_11298__$1);var inst_11306 = inst_11305;var inst_11307 = null;var inst_11308 = 0;var inst_11309 = 0;var state_11370__$1 = (function (){var statearr_11387 = state_11370;(statearr_11387[10] = inst_11307);
(statearr_11387[11] = inst_11306);
(statearr_11387[12] = inst_11309);
(statearr_11387[13] = inst_11308);
(statearr_11387[20] = inst_11300);
(statearr_11387[19] = inst_11298__$1);
return statearr_11387;
})();var statearr_11388_11468 = state_11370__$1;(statearr_11388_11468[2] = null);
(statearr_11388_11468[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 38))
{var inst_11349 = (state_11370[2]);var state_11370__$1 = state_11370;var statearr_11389_11469 = state_11370__$1;(statearr_11389_11469[2] = inst_11349);
(statearr_11389_11469[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 7))
{var inst_11366 = (state_11370[2]);var state_11370__$1 = state_11370;var statearr_11390_11470 = state_11370__$1;(statearr_11390_11470[2] = inst_11366);
(statearr_11390_11470[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 39))
{var inst_11327 = (state_11370[9]);var inst_11345 = (state_11370[2]);var inst_11346 = cljs.core.next.call(null,inst_11327);var inst_11306 = inst_11346;var inst_11307 = null;var inst_11308 = 0;var inst_11309 = 0;var state_11370__$1 = (function (){var statearr_11391 = state_11370;(statearr_11391[10] = inst_11307);
(statearr_11391[11] = inst_11306);
(statearr_11391[12] = inst_11309);
(statearr_11391[13] = inst_11308);
(statearr_11391[21] = inst_11345);
return statearr_11391;
})();var statearr_11392_11471 = state_11370__$1;(statearr_11392_11471[2] = null);
(statearr_11392_11471[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 8))
{var inst_11250 = (state_11370[14]);var inst_11249 = (state_11370[17]);var inst_11252 = (inst_11250 < inst_11249);var inst_11253 = inst_11252;var state_11370__$1 = state_11370;if(cljs.core.truth_(inst_11253))
{var statearr_11393_11472 = state_11370__$1;(statearr_11393_11472[1] = 10);
} else
{var statearr_11394_11473 = state_11370__$1;(statearr_11394_11473[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 40))
{var inst_11336 = (state_11370[18]);var inst_11337 = (state_11370[2]);var inst_11338 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11339 = cljs.core.async.untap_STAR_.call(null,m,inst_11336);var state_11370__$1 = (function (){var statearr_11395 = state_11370;(statearr_11395[22] = inst_11337);
(statearr_11395[23] = inst_11338);
return statearr_11395;
})();var statearr_11396_11474 = state_11370__$1;(statearr_11396_11474[2] = inst_11339);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11370__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 9))
{var inst_11295 = (state_11370[2]);var state_11370__$1 = state_11370;var statearr_11397_11475 = state_11370__$1;(statearr_11397_11475[2] = inst_11295);
(statearr_11397_11475[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 41))
{var inst_11336 = (state_11370[18]);var inst_11238 = (state_11370[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11370,40,Object,null,39);var inst_11343 = cljs.core.async.put_BANG_.call(null,inst_11336,inst_11238,done);var state_11370__$1 = state_11370;var statearr_11398_11476 = state_11370__$1;(statearr_11398_11476[2] = inst_11343);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11370__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 10))
{var inst_11250 = (state_11370[14]);var inst_11248 = (state_11370[16]);var inst_11256 = cljs.core._nth.call(null,inst_11248,inst_11250);var inst_11257 = cljs.core.nth.call(null,inst_11256,0,null);var inst_11258 = cljs.core.nth.call(null,inst_11256,1,null);var state_11370__$1 = (function (){var statearr_11399 = state_11370;(statearr_11399[24] = inst_11257);
return statearr_11399;
})();if(cljs.core.truth_(inst_11258))
{var statearr_11400_11477 = state_11370__$1;(statearr_11400_11477[1] = 13);
} else
{var statearr_11401_11478 = state_11370__$1;(statearr_11401_11478[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 42))
{var state_11370__$1 = state_11370;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11370__$1,45,dchan);
} else
{if((state_val_11371 === 11))
{var inst_11267 = (state_11370[25]);var inst_11247 = (state_11370[15]);var inst_11267__$1 = cljs.core.seq.call(null,inst_11247);var state_11370__$1 = (function (){var statearr_11402 = state_11370;(statearr_11402[25] = inst_11267__$1);
return statearr_11402;
})();if(inst_11267__$1)
{var statearr_11403_11479 = state_11370__$1;(statearr_11403_11479[1] = 16);
} else
{var statearr_11404_11480 = state_11370__$1;(statearr_11404_11480[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 43))
{var state_11370__$1 = state_11370;var statearr_11405_11481 = state_11370__$1;(statearr_11405_11481[2] = null);
(statearr_11405_11481[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 12))
{var inst_11293 = (state_11370[2]);var state_11370__$1 = state_11370;var statearr_11406_11482 = state_11370__$1;(statearr_11406_11482[2] = inst_11293);
(statearr_11406_11482[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 44))
{var inst_11363 = (state_11370[2]);var state_11370__$1 = (function (){var statearr_11407 = state_11370;(statearr_11407[26] = inst_11363);
return statearr_11407;
})();var statearr_11408_11483 = state_11370__$1;(statearr_11408_11483[2] = null);
(statearr_11408_11483[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 13))
{var inst_11257 = (state_11370[24]);var inst_11260 = cljs.core.async.close_BANG_.call(null,inst_11257);var state_11370__$1 = state_11370;var statearr_11409_11484 = state_11370__$1;(statearr_11409_11484[2] = inst_11260);
(statearr_11409_11484[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 45))
{var inst_11360 = (state_11370[2]);var state_11370__$1 = state_11370;var statearr_11413_11485 = state_11370__$1;(statearr_11413_11485[2] = inst_11360);
(statearr_11413_11485[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 14))
{var state_11370__$1 = state_11370;var statearr_11414_11486 = state_11370__$1;(statearr_11414_11486[2] = null);
(statearr_11414_11486[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 15))
{var inst_11250 = (state_11370[14]);var inst_11247 = (state_11370[15]);var inst_11248 = (state_11370[16]);var inst_11249 = (state_11370[17]);var inst_11263 = (state_11370[2]);var inst_11264 = (inst_11250 + 1);var tmp11410 = inst_11247;var tmp11411 = inst_11248;var tmp11412 = inst_11249;var inst_11247__$1 = tmp11410;var inst_11248__$1 = tmp11411;var inst_11249__$1 = tmp11412;var inst_11250__$1 = inst_11264;var state_11370__$1 = (function (){var statearr_11415 = state_11370;(statearr_11415[14] = inst_11250__$1);
(statearr_11415[27] = inst_11263);
(statearr_11415[15] = inst_11247__$1);
(statearr_11415[16] = inst_11248__$1);
(statearr_11415[17] = inst_11249__$1);
return statearr_11415;
})();var statearr_11416_11487 = state_11370__$1;(statearr_11416_11487[2] = null);
(statearr_11416_11487[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 16))
{var inst_11267 = (state_11370[25]);var inst_11269 = cljs.core.chunked_seq_QMARK_.call(null,inst_11267);var state_11370__$1 = state_11370;if(inst_11269)
{var statearr_11417_11488 = state_11370__$1;(statearr_11417_11488[1] = 19);
} else
{var statearr_11418_11489 = state_11370__$1;(statearr_11418_11489[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 17))
{var state_11370__$1 = state_11370;var statearr_11419_11490 = state_11370__$1;(statearr_11419_11490[2] = null);
(statearr_11419_11490[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 18))
{var inst_11291 = (state_11370[2]);var state_11370__$1 = state_11370;var statearr_11420_11491 = state_11370__$1;(statearr_11420_11491[2] = inst_11291);
(statearr_11420_11491[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 19))
{var inst_11267 = (state_11370[25]);var inst_11271 = cljs.core.chunk_first.call(null,inst_11267);var inst_11272 = cljs.core.chunk_rest.call(null,inst_11267);var inst_11273 = cljs.core.count.call(null,inst_11271);var inst_11247 = inst_11272;var inst_11248 = inst_11271;var inst_11249 = inst_11273;var inst_11250 = 0;var state_11370__$1 = (function (){var statearr_11421 = state_11370;(statearr_11421[14] = inst_11250);
(statearr_11421[15] = inst_11247);
(statearr_11421[16] = inst_11248);
(statearr_11421[17] = inst_11249);
return statearr_11421;
})();var statearr_11422_11492 = state_11370__$1;(statearr_11422_11492[2] = null);
(statearr_11422_11492[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 20))
{var inst_11267 = (state_11370[25]);var inst_11277 = cljs.core.first.call(null,inst_11267);var inst_11278 = cljs.core.nth.call(null,inst_11277,0,null);var inst_11279 = cljs.core.nth.call(null,inst_11277,1,null);var state_11370__$1 = (function (){var statearr_11423 = state_11370;(statearr_11423[28] = inst_11278);
return statearr_11423;
})();if(cljs.core.truth_(inst_11279))
{var statearr_11424_11493 = state_11370__$1;(statearr_11424_11493[1] = 22);
} else
{var statearr_11425_11494 = state_11370__$1;(statearr_11425_11494[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 21))
{var inst_11288 = (state_11370[2]);var state_11370__$1 = state_11370;var statearr_11426_11495 = state_11370__$1;(statearr_11426_11495[2] = inst_11288);
(statearr_11426_11495[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 22))
{var inst_11278 = (state_11370[28]);var inst_11281 = cljs.core.async.close_BANG_.call(null,inst_11278);var state_11370__$1 = state_11370;var statearr_11427_11496 = state_11370__$1;(statearr_11427_11496[2] = inst_11281);
(statearr_11427_11496[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 23))
{var state_11370__$1 = state_11370;var statearr_11428_11497 = state_11370__$1;(statearr_11428_11497[2] = null);
(statearr_11428_11497[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 24))
{var inst_11267 = (state_11370[25]);var inst_11284 = (state_11370[2]);var inst_11285 = cljs.core.next.call(null,inst_11267);var inst_11247 = inst_11285;var inst_11248 = null;var inst_11249 = 0;var inst_11250 = 0;var state_11370__$1 = (function (){var statearr_11429 = state_11370;(statearr_11429[14] = inst_11250);
(statearr_11429[15] = inst_11247);
(statearr_11429[16] = inst_11248);
(statearr_11429[17] = inst_11249);
(statearr_11429[29] = inst_11284);
return statearr_11429;
})();var statearr_11430_11498 = state_11370__$1;(statearr_11430_11498[2] = null);
(statearr_11430_11498[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 25))
{var inst_11309 = (state_11370[12]);var inst_11308 = (state_11370[13]);var inst_11311 = (inst_11309 < inst_11308);var inst_11312 = inst_11311;var state_11370__$1 = state_11370;if(cljs.core.truth_(inst_11312))
{var statearr_11431_11499 = state_11370__$1;(statearr_11431_11499[1] = 27);
} else
{var statearr_11432_11500 = state_11370__$1;(statearr_11432_11500[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 26))
{var inst_11298 = (state_11370[19]);var inst_11356 = (state_11370[2]);var inst_11357 = cljs.core.seq.call(null,inst_11298);var state_11370__$1 = (function (){var statearr_11433 = state_11370;(statearr_11433[30] = inst_11356);
return statearr_11433;
})();if(inst_11357)
{var statearr_11434_11501 = state_11370__$1;(statearr_11434_11501[1] = 42);
} else
{var statearr_11435_11502 = state_11370__$1;(statearr_11435_11502[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 27))
{var inst_11307 = (state_11370[10]);var inst_11309 = (state_11370[12]);var inst_11314 = cljs.core._nth.call(null,inst_11307,inst_11309);var state_11370__$1 = (function (){var statearr_11436 = state_11370;(statearr_11436[7] = inst_11314);
return statearr_11436;
})();var statearr_11437_11503 = state_11370__$1;(statearr_11437_11503[2] = null);
(statearr_11437_11503[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 28))
{var inst_11306 = (state_11370[11]);var inst_11327 = (state_11370[9]);var inst_11327__$1 = cljs.core.seq.call(null,inst_11306);var state_11370__$1 = (function (){var statearr_11441 = state_11370;(statearr_11441[9] = inst_11327__$1);
return statearr_11441;
})();if(inst_11327__$1)
{var statearr_11442_11504 = state_11370__$1;(statearr_11442_11504[1] = 33);
} else
{var statearr_11443_11505 = state_11370__$1;(statearr_11443_11505[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 29))
{var inst_11354 = (state_11370[2]);var state_11370__$1 = state_11370;var statearr_11444_11506 = state_11370__$1;(statearr_11444_11506[2] = inst_11354);
(statearr_11444_11506[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 30))
{var inst_11307 = (state_11370[10]);var inst_11306 = (state_11370[11]);var inst_11309 = (state_11370[12]);var inst_11308 = (state_11370[13]);var inst_11323 = (state_11370[2]);var inst_11324 = (inst_11309 + 1);var tmp11438 = inst_11307;var tmp11439 = inst_11306;var tmp11440 = inst_11308;var inst_11306__$1 = tmp11439;var inst_11307__$1 = tmp11438;var inst_11308__$1 = tmp11440;var inst_11309__$1 = inst_11324;var state_11370__$1 = (function (){var statearr_11445 = state_11370;(statearr_11445[10] = inst_11307__$1);
(statearr_11445[11] = inst_11306__$1);
(statearr_11445[12] = inst_11309__$1);
(statearr_11445[13] = inst_11308__$1);
(statearr_11445[31] = inst_11323);
return statearr_11445;
})();var statearr_11446_11507 = state_11370__$1;(statearr_11446_11507[2] = null);
(statearr_11446_11507[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 31))
{var inst_11314 = (state_11370[7]);var inst_11315 = (state_11370[2]);var inst_11316 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11317 = cljs.core.async.untap_STAR_.call(null,m,inst_11314);var state_11370__$1 = (function (){var statearr_11447 = state_11370;(statearr_11447[32] = inst_11315);
(statearr_11447[33] = inst_11316);
return statearr_11447;
})();var statearr_11448_11508 = state_11370__$1;(statearr_11448_11508[2] = inst_11317);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11370__$1);
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
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_11452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11452[0] = state_machine__5550__auto__);
(statearr_11452[1] = 1);
return statearr_11452;
});
var state_machine__5550__auto____1 = (function (state_11370){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_11370);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e11453){if((e11453 instanceof Object))
{var ex__5553__auto__ = e11453;var statearr_11454_11509 = state_11370;(statearr_11454_11509[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11370);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11453;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11510 = state_11370;
state_11370 = G__11510;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_11370){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_11370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_11455 = f__5565__auto__.call(null);(statearr_11455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___11456);
return statearr_11455;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
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
cljs.core.async.Mix = (function (){var obj11512 = {};return obj11512;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t11622 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11622 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11623){
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
this.meta11623 = meta11623;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11622.cljs$lang$type = true;
cljs.core.async.t11622.cljs$lang$ctorStr = "cljs.core.async/t11622";
cljs.core.async.t11622.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11622");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11622.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11622.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11622.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11622.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11622.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11622.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11622.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11622.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11622.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11624){var self__ = this;
var _11624__$1 = this;return self__.meta11623;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11624,meta11623__$1){var self__ = this;
var _11624__$1 = this;return (new cljs.core.async.t11622(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11623__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11622 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11622(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11623){return (new cljs.core.async.t11622(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11623));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11622(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5564__auto___11731 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_11689){var state_val_11690 = (state_11689[1]);if((state_val_11690 === 1))
{var inst_11628 = (state_11689[7]);var inst_11628__$1 = calc_state.call(null);var inst_11629 = cljs.core.seq_QMARK_.call(null,inst_11628__$1);var state_11689__$1 = (function (){var statearr_11691 = state_11689;(statearr_11691[7] = inst_11628__$1);
return statearr_11691;
})();if(inst_11629)
{var statearr_11692_11732 = state_11689__$1;(statearr_11692_11732[1] = 2);
} else
{var statearr_11693_11733 = state_11689__$1;(statearr_11693_11733[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 2))
{var inst_11628 = (state_11689[7]);var inst_11631 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11628);var state_11689__$1 = state_11689;var statearr_11694_11734 = state_11689__$1;(statearr_11694_11734[2] = inst_11631);
(statearr_11694_11734[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 3))
{var inst_11628 = (state_11689[7]);var state_11689__$1 = state_11689;var statearr_11695_11735 = state_11689__$1;(statearr_11695_11735[2] = inst_11628);
(statearr_11695_11735[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 4))
{var inst_11628 = (state_11689[7]);var inst_11634 = (state_11689[2]);var inst_11635 = cljs.core.get.call(null,inst_11634,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11636 = cljs.core.get.call(null,inst_11634,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11637 = cljs.core.get.call(null,inst_11634,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11638 = inst_11628;var state_11689__$1 = (function (){var statearr_11696 = state_11689;(statearr_11696[8] = inst_11637);
(statearr_11696[9] = inst_11636);
(statearr_11696[10] = inst_11638);
(statearr_11696[11] = inst_11635);
return statearr_11696;
})();var statearr_11697_11736 = state_11689__$1;(statearr_11697_11736[2] = null);
(statearr_11697_11736[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 5))
{var inst_11638 = (state_11689[10]);var inst_11641 = cljs.core.seq_QMARK_.call(null,inst_11638);var state_11689__$1 = state_11689;if(inst_11641)
{var statearr_11698_11737 = state_11689__$1;(statearr_11698_11737[1] = 7);
} else
{var statearr_11699_11738 = state_11689__$1;(statearr_11699_11738[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 6))
{var inst_11687 = (state_11689[2]);var state_11689__$1 = state_11689;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11689__$1,inst_11687);
} else
{if((state_val_11690 === 7))
{var inst_11638 = (state_11689[10]);var inst_11643 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11638);var state_11689__$1 = state_11689;var statearr_11700_11739 = state_11689__$1;(statearr_11700_11739[2] = inst_11643);
(statearr_11700_11739[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 8))
{var inst_11638 = (state_11689[10]);var state_11689__$1 = state_11689;var statearr_11701_11740 = state_11689__$1;(statearr_11701_11740[2] = inst_11638);
(statearr_11701_11740[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 9))
{var inst_11646 = (state_11689[12]);var inst_11646__$1 = (state_11689[2]);var inst_11647 = cljs.core.get.call(null,inst_11646__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11648 = cljs.core.get.call(null,inst_11646__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11649 = cljs.core.get.call(null,inst_11646__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11689__$1 = (function (){var statearr_11702 = state_11689;(statearr_11702[12] = inst_11646__$1);
(statearr_11702[13] = inst_11648);
(statearr_11702[14] = inst_11649);
return statearr_11702;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11689__$1,10,inst_11647);
} else
{if((state_val_11690 === 10))
{var inst_11654 = (state_11689[15]);var inst_11653 = (state_11689[16]);var inst_11652 = (state_11689[2]);var inst_11653__$1 = cljs.core.nth.call(null,inst_11652,0,null);var inst_11654__$1 = cljs.core.nth.call(null,inst_11652,1,null);var inst_11655 = (inst_11653__$1 == null);var inst_11656 = cljs.core._EQ_.call(null,inst_11654__$1,change);var inst_11657 = (inst_11655) || (inst_11656);var state_11689__$1 = (function (){var statearr_11703 = state_11689;(statearr_11703[15] = inst_11654__$1);
(statearr_11703[16] = inst_11653__$1);
return statearr_11703;
})();if(cljs.core.truth_(inst_11657))
{var statearr_11704_11741 = state_11689__$1;(statearr_11704_11741[1] = 11);
} else
{var statearr_11705_11742 = state_11689__$1;(statearr_11705_11742[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 11))
{var inst_11653 = (state_11689[16]);var inst_11659 = (inst_11653 == null);var state_11689__$1 = state_11689;if(cljs.core.truth_(inst_11659))
{var statearr_11706_11743 = state_11689__$1;(statearr_11706_11743[1] = 14);
} else
{var statearr_11707_11744 = state_11689__$1;(statearr_11707_11744[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 12))
{var inst_11654 = (state_11689[15]);var inst_11649 = (state_11689[14]);var inst_11668 = (state_11689[17]);var inst_11668__$1 = inst_11649.call(null,inst_11654);var state_11689__$1 = (function (){var statearr_11708 = state_11689;(statearr_11708[17] = inst_11668__$1);
return statearr_11708;
})();if(cljs.core.truth_(inst_11668__$1))
{var statearr_11709_11745 = state_11689__$1;(statearr_11709_11745[1] = 17);
} else
{var statearr_11710_11746 = state_11689__$1;(statearr_11710_11746[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 13))
{var inst_11685 = (state_11689[2]);var state_11689__$1 = state_11689;var statearr_11711_11747 = state_11689__$1;(statearr_11711_11747[2] = inst_11685);
(statearr_11711_11747[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 14))
{var inst_11654 = (state_11689[15]);var inst_11661 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11654);var state_11689__$1 = state_11689;var statearr_11712_11748 = state_11689__$1;(statearr_11712_11748[2] = inst_11661);
(statearr_11712_11748[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 15))
{var state_11689__$1 = state_11689;var statearr_11713_11749 = state_11689__$1;(statearr_11713_11749[2] = null);
(statearr_11713_11749[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 16))
{var inst_11664 = (state_11689[2]);var inst_11665 = calc_state.call(null);var inst_11638 = inst_11665;var state_11689__$1 = (function (){var statearr_11714 = state_11689;(statearr_11714[18] = inst_11664);
(statearr_11714[10] = inst_11638);
return statearr_11714;
})();var statearr_11715_11750 = state_11689__$1;(statearr_11715_11750[2] = null);
(statearr_11715_11750[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 17))
{var inst_11668 = (state_11689[17]);var state_11689__$1 = state_11689;var statearr_11716_11751 = state_11689__$1;(statearr_11716_11751[2] = inst_11668);
(statearr_11716_11751[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 18))
{var inst_11654 = (state_11689[15]);var inst_11648 = (state_11689[13]);var inst_11649 = (state_11689[14]);var inst_11671 = cljs.core.empty_QMARK_.call(null,inst_11649);var inst_11672 = inst_11648.call(null,inst_11654);var inst_11673 = cljs.core.not.call(null,inst_11672);var inst_11674 = (inst_11671) && (inst_11673);var state_11689__$1 = state_11689;var statearr_11717_11752 = state_11689__$1;(statearr_11717_11752[2] = inst_11674);
(statearr_11717_11752[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 19))
{var inst_11676 = (state_11689[2]);var state_11689__$1 = state_11689;if(cljs.core.truth_(inst_11676))
{var statearr_11718_11753 = state_11689__$1;(statearr_11718_11753[1] = 20);
} else
{var statearr_11719_11754 = state_11689__$1;(statearr_11719_11754[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 20))
{var inst_11653 = (state_11689[16]);var state_11689__$1 = state_11689;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11689__$1,23,out,inst_11653);
} else
{if((state_val_11690 === 21))
{var state_11689__$1 = state_11689;var statearr_11720_11755 = state_11689__$1;(statearr_11720_11755[2] = null);
(statearr_11720_11755[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 22))
{var inst_11646 = (state_11689[12]);var inst_11682 = (state_11689[2]);var inst_11638 = inst_11646;var state_11689__$1 = (function (){var statearr_11721 = state_11689;(statearr_11721[10] = inst_11638);
(statearr_11721[19] = inst_11682);
return statearr_11721;
})();var statearr_11722_11756 = state_11689__$1;(statearr_11722_11756[2] = null);
(statearr_11722_11756[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 23))
{var inst_11679 = (state_11689[2]);var state_11689__$1 = state_11689;var statearr_11723_11757 = state_11689__$1;(statearr_11723_11757[2] = inst_11679);
(statearr_11723_11757[1] = 22);
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
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_11727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11727[0] = state_machine__5550__auto__);
(statearr_11727[1] = 1);
return statearr_11727;
});
var state_machine__5550__auto____1 = (function (state_11689){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_11689);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e11728){if((e11728 instanceof Object))
{var ex__5553__auto__ = e11728;var statearr_11729_11758 = state_11689;(statearr_11729_11758[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11689);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11728;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11759 = state_11689;
state_11689 = G__11759;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_11689){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_11689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_11730 = f__5565__auto__.call(null);(statearr_11730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___11731);
return statearr_11730;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
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
cljs.core.async.Pub = (function (){var obj11761 = {};return obj11761;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
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
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__11762_SHARP_){if(cljs.core.truth_(p1__11762_SHARP_.call(null,topic)))
{return p1__11762_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11762_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11887 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11887 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11888){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11888 = meta11888;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11887.cljs$lang$type = true;
cljs.core.async.t11887.cljs$lang$ctorStr = "cljs.core.async/t11887";
cljs.core.async.t11887.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11887");
});})(mults,ensure_mult))
;
cljs.core.async.t11887.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11887.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11887.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11887.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11887.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11887.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11887.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11887.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11889){var self__ = this;
var _11889__$1 = this;return self__.meta11888;
});})(mults,ensure_mult))
;
cljs.core.async.t11887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11889,meta11888__$1){var self__ = this;
var _11889__$1 = this;return (new cljs.core.async.t11887(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11888__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11887 = ((function (mults,ensure_mult){
return (function __GT_t11887(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11888){return (new cljs.core.async.t11887(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11888));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11887(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5564__auto___12011 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_11963){var state_val_11964 = (state_11963[1]);if((state_val_11964 === 1))
{var state_11963__$1 = state_11963;var statearr_11965_12012 = state_11963__$1;(statearr_11965_12012[2] = null);
(statearr_11965_12012[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11964 === 2))
{var state_11963__$1 = state_11963;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11963__$1,4,ch);
} else
{if((state_val_11964 === 3))
{var inst_11961 = (state_11963[2]);var state_11963__$1 = state_11963;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11963__$1,inst_11961);
} else
{if((state_val_11964 === 4))
{var inst_11892 = (state_11963[7]);var inst_11892__$1 = (state_11963[2]);var inst_11893 = (inst_11892__$1 == null);var state_11963__$1 = (function (){var statearr_11966 = state_11963;(statearr_11966[7] = inst_11892__$1);
return statearr_11966;
})();if(cljs.core.truth_(inst_11893))
{var statearr_11967_12013 = state_11963__$1;(statearr_11967_12013[1] = 5);
} else
{var statearr_11968_12014 = state_11963__$1;(statearr_11968_12014[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11964 === 5))
{var inst_11899 = cljs.core.deref.call(null,mults);var inst_11900 = cljs.core.vals.call(null,inst_11899);var inst_11901 = cljs.core.seq.call(null,inst_11900);var inst_11902 = inst_11901;var inst_11903 = null;var inst_11904 = 0;var inst_11905 = 0;var state_11963__$1 = (function (){var statearr_11969 = state_11963;(statearr_11969[8] = inst_11903);
(statearr_11969[9] = inst_11902);
(statearr_11969[10] = inst_11904);
(statearr_11969[11] = inst_11905);
return statearr_11969;
})();var statearr_11970_12015 = state_11963__$1;(statearr_11970_12015[2] = null);
(statearr_11970_12015[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11964 === 6))
{var inst_11892 = (state_11963[7]);var inst_11940 = (state_11963[12]);var inst_11942 = (state_11963[13]);var inst_11940__$1 = topic_fn.call(null,inst_11892);var inst_11941 = cljs.core.deref.call(null,mults);var inst_11942__$1 = cljs.core.get.call(null,inst_11941,inst_11940__$1);var state_11963__$1 = (function (){var statearr_11971 = state_11963;(statearr_11971[12] = inst_11940__$1);
(statearr_11971[13] = inst_11942__$1);
return statearr_11971;
})();if(cljs.core.truth_(inst_11942__$1))
{var statearr_11972_12016 = state_11963__$1;(statearr_11972_12016[1] = 19);
} else
{var statearr_11973_12017 = state_11963__$1;(statearr_11973_12017[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11964 === 7))
{var inst_11959 = (state_11963[2]);var state_11963__$1 = state_11963;var statearr_11974_12018 = state_11963__$1;(statearr_11974_12018[2] = inst_11959);
(statearr_11974_12018[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11964 === 8))
{var inst_11904 = (state_11963[10]);var inst_11905 = (state_11963[11]);var inst_11907 = (inst_11905 < inst_11904);var inst_11908 = inst_11907;var state_11963__$1 = state_11963;if(cljs.core.truth_(inst_11908))
{var statearr_11978_12019 = state_11963__$1;(statearr_11978_12019[1] = 10);
} else
{var statearr_11979_12020 = state_11963__$1;(statearr_11979_12020[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11964 === 9))
{var inst_11938 = (state_11963[2]);var state_11963__$1 = state_11963;var statearr_11980_12021 = state_11963__$1;(statearr_11980_12021[2] = inst_11938);
(statearr_11980_12021[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11964 === 10))
{var inst_11903 = (state_11963[8]);var inst_11902 = (state_11963[9]);var inst_11904 = (state_11963[10]);var inst_11905 = (state_11963[11]);var inst_11910 = cljs.core._nth.call(null,inst_11903,inst_11905);var inst_11911 = cljs.core.async.muxch_STAR_.call(null,inst_11910);var inst_11912 = cljs.core.async.close_BANG_.call(null,inst_11911);var inst_11913 = (inst_11905 + 1);var tmp11975 = inst_11903;var tmp11976 = inst_11902;var tmp11977 = inst_11904;var inst_11902__$1 = tmp11976;var inst_11903__$1 = tmp11975;var inst_11904__$1 = tmp11977;var inst_11905__$1 = inst_11913;var state_11963__$1 = (function (){var statearr_11981 = state_11963;(statearr_11981[8] = inst_11903__$1);
(statearr_11981[9] = inst_11902__$1);
(statearr_11981[10] = inst_11904__$1);
(statearr_11981[11] = inst_11905__$1);
(statearr_11981[14] = inst_11912);
return statearr_11981;
})();var statearr_11982_12022 = state_11963__$1;(statearr_11982_12022[2] = null);
(statearr_11982_12022[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11964 === 11))
{var inst_11902 = (state_11963[9]);var inst_11916 = (state_11963[15]);var inst_11916__$1 = cljs.core.seq.call(null,inst_11902);var state_11963__$1 = (function (){var statearr_11983 = state_11963;(statearr_11983[15] = inst_11916__$1);
return statearr_11983;
})();if(inst_11916__$1)
{var statearr_11984_12023 = state_11963__$1;(statearr_11984_12023[1] = 13);
} else
{var statearr_11985_12024 = state_11963__$1;(statearr_11985_12024[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11964 === 12))
{var inst_11936 = (state_11963[2]);var state_11963__$1 = state_11963;var statearr_11986_12025 = state_11963__$1;(statearr_11986_12025[2] = inst_11936);
(statearr_11986_12025[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11964 === 13))
{var inst_11916 = (state_11963[15]);var inst_11918 = cljs.core.chunked_seq_QMARK_.call(null,inst_11916);var state_11963__$1 = state_11963;if(inst_11918)
{var statearr_11987_12026 = state_11963__$1;(statearr_11987_12026[1] = 16);
} else
{var statearr_11988_12027 = state_11963__$1;(statearr_11988_12027[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11964 === 14))
{var state_11963__$1 = state_11963;var statearr_11989_12028 = state_11963__$1;(statearr_11989_12028[2] = null);
(statearr_11989_12028[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11964 === 15))
{var inst_11934 = (state_11963[2]);var state_11963__$1 = state_11963;var statearr_11990_12029 = state_11963__$1;(statearr_11990_12029[2] = inst_11934);
(statearr_11990_12029[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11964 === 16))
{var inst_11916 = (state_11963[15]);var inst_11920 = cljs.core.chunk_first.call(null,inst_11916);var inst_11921 = cljs.core.chunk_rest.call(null,inst_11916);var inst_11922 = cljs.core.count.call(null,inst_11920);var inst_11902 = inst_11921;var inst_11903 = inst_11920;var inst_11904 = inst_11922;var inst_11905 = 0;var state_11963__$1 = (function (){var statearr_11991 = state_11963;(statearr_11991[8] = inst_11903);
(statearr_11991[9] = inst_11902);
(statearr_11991[10] = inst_11904);
(statearr_11991[11] = inst_11905);
return statearr_11991;
})();var statearr_11992_12030 = state_11963__$1;(statearr_11992_12030[2] = null);
(statearr_11992_12030[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11964 === 17))
{var inst_11916 = (state_11963[15]);var inst_11925 = cljs.core.first.call(null,inst_11916);var inst_11926 = cljs.core.async.muxch_STAR_.call(null,inst_11925);var inst_11927 = cljs.core.async.close_BANG_.call(null,inst_11926);var inst_11928 = cljs.core.next.call(null,inst_11916);var inst_11902 = inst_11928;var inst_11903 = null;var inst_11904 = 0;var inst_11905 = 0;var state_11963__$1 = (function (){var statearr_11993 = state_11963;(statearr_11993[8] = inst_11903);
(statearr_11993[9] = inst_11902);
(statearr_11993[10] = inst_11904);
(statearr_11993[11] = inst_11905);
(statearr_11993[16] = inst_11927);
return statearr_11993;
})();var statearr_11994_12031 = state_11963__$1;(statearr_11994_12031[2] = null);
(statearr_11994_12031[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11964 === 18))
{var inst_11931 = (state_11963[2]);var state_11963__$1 = state_11963;var statearr_11995_12032 = state_11963__$1;(statearr_11995_12032[2] = inst_11931);
(statearr_11995_12032[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11964 === 19))
{var state_11963__$1 = state_11963;var statearr_11996_12033 = state_11963__$1;(statearr_11996_12033[2] = null);
(statearr_11996_12033[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11964 === 20))
{var state_11963__$1 = state_11963;var statearr_11997_12034 = state_11963__$1;(statearr_11997_12034[2] = null);
(statearr_11997_12034[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11964 === 21))
{var inst_11956 = (state_11963[2]);var state_11963__$1 = (function (){var statearr_11998 = state_11963;(statearr_11998[17] = inst_11956);
return statearr_11998;
})();var statearr_11999_12035 = state_11963__$1;(statearr_11999_12035[2] = null);
(statearr_11999_12035[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11964 === 22))
{var inst_11953 = (state_11963[2]);var state_11963__$1 = state_11963;var statearr_12000_12036 = state_11963__$1;(statearr_12000_12036[2] = inst_11953);
(statearr_12000_12036[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11964 === 23))
{var inst_11940 = (state_11963[12]);var inst_11944 = (state_11963[2]);var inst_11945 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11940);var state_11963__$1 = (function (){var statearr_12001 = state_11963;(statearr_12001[18] = inst_11944);
return statearr_12001;
})();var statearr_12002_12037 = state_11963__$1;(statearr_12002_12037[2] = inst_11945);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11963__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11964 === 24))
{var inst_11892 = (state_11963[7]);var inst_11942 = (state_11963[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11963,23,Object,null,22);var inst_11949 = cljs.core.async.muxch_STAR_.call(null,inst_11942);var state_11963__$1 = state_11963;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11963__$1,25,inst_11949,inst_11892);
} else
{if((state_val_11964 === 25))
{var inst_11951 = (state_11963[2]);var state_11963__$1 = state_11963;var statearr_12003_12038 = state_11963__$1;(statearr_12003_12038[2] = inst_11951);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11963__$1);
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
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_12007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12007[0] = state_machine__5550__auto__);
(statearr_12007[1] = 1);
return statearr_12007;
});
var state_machine__5550__auto____1 = (function (state_11963){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_11963);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e12008){if((e12008 instanceof Object))
{var ex__5553__auto__ = e12008;var statearr_12009_12039 = state_11963;(statearr_12009_12039[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11963);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12008;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12040 = state_11963;
state_11963 = G__12040;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_11963){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_11963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_12010 = f__5565__auto__.call(null);(statearr_12010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___12011);
return statearr_12010;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
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
,cljs.core.range.call(null,cnt));var c__5564__auto___12177 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_12147){var state_val_12148 = (state_12147[1]);if((state_val_12148 === 1))
{var state_12147__$1 = state_12147;var statearr_12149_12178 = state_12147__$1;(statearr_12149_12178[2] = null);
(statearr_12149_12178[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12148 === 2))
{var inst_12110 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12111 = 0;var state_12147__$1 = (function (){var statearr_12150 = state_12147;(statearr_12150[7] = inst_12110);
(statearr_12150[8] = inst_12111);
return statearr_12150;
})();var statearr_12151_12179 = state_12147__$1;(statearr_12151_12179[2] = null);
(statearr_12151_12179[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12148 === 3))
{var inst_12145 = (state_12147[2]);var state_12147__$1 = state_12147;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12147__$1,inst_12145);
} else
{if((state_val_12148 === 4))
{var inst_12111 = (state_12147[8]);var inst_12113 = (inst_12111 < cnt);var state_12147__$1 = state_12147;if(cljs.core.truth_(inst_12113))
{var statearr_12152_12180 = state_12147__$1;(statearr_12152_12180[1] = 6);
} else
{var statearr_12153_12181 = state_12147__$1;(statearr_12153_12181[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12148 === 5))
{var inst_12131 = (state_12147[2]);var state_12147__$1 = (function (){var statearr_12154 = state_12147;(statearr_12154[9] = inst_12131);
return statearr_12154;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12147__$1,12,dchan);
} else
{if((state_val_12148 === 6))
{var state_12147__$1 = state_12147;var statearr_12155_12182 = state_12147__$1;(statearr_12155_12182[2] = null);
(statearr_12155_12182[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12148 === 7))
{var state_12147__$1 = state_12147;var statearr_12156_12183 = state_12147__$1;(statearr_12156_12183[2] = null);
(statearr_12156_12183[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12148 === 8))
{var inst_12129 = (state_12147[2]);var state_12147__$1 = state_12147;var statearr_12157_12184 = state_12147__$1;(statearr_12157_12184[2] = inst_12129);
(statearr_12157_12184[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12148 === 9))
{var inst_12111 = (state_12147[8]);var inst_12124 = (state_12147[2]);var inst_12125 = (inst_12111 + 1);var inst_12111__$1 = inst_12125;var state_12147__$1 = (function (){var statearr_12158 = state_12147;(statearr_12158[8] = inst_12111__$1);
(statearr_12158[10] = inst_12124);
return statearr_12158;
})();var statearr_12159_12185 = state_12147__$1;(statearr_12159_12185[2] = null);
(statearr_12159_12185[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12148 === 10))
{var inst_12115 = (state_12147[2]);var inst_12116 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12147__$1 = (function (){var statearr_12160 = state_12147;(statearr_12160[11] = inst_12115);
return statearr_12160;
})();var statearr_12161_12186 = state_12147__$1;(statearr_12161_12186[2] = inst_12116);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12147__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12148 === 11))
{var inst_12111 = (state_12147[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12147,10,Object,null,9);var inst_12120 = chs__$1.call(null,inst_12111);var inst_12121 = done.call(null,inst_12111);var inst_12122 = cljs.core.async.take_BANG_.call(null,inst_12120,inst_12121);var state_12147__$1 = state_12147;var statearr_12162_12187 = state_12147__$1;(statearr_12162_12187[2] = inst_12122);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12147__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12148 === 12))
{var inst_12133 = (state_12147[12]);var inst_12133__$1 = (state_12147[2]);var inst_12134 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12133__$1);var state_12147__$1 = (function (){var statearr_12163 = state_12147;(statearr_12163[12] = inst_12133__$1);
return statearr_12163;
})();if(cljs.core.truth_(inst_12134))
{var statearr_12164_12188 = state_12147__$1;(statearr_12164_12188[1] = 13);
} else
{var statearr_12165_12189 = state_12147__$1;(statearr_12165_12189[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12148 === 13))
{var inst_12136 = cljs.core.async.close_BANG_.call(null,out);var state_12147__$1 = state_12147;var statearr_12166_12190 = state_12147__$1;(statearr_12166_12190[2] = inst_12136);
(statearr_12166_12190[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12148 === 14))
{var inst_12133 = (state_12147[12]);var inst_12138 = cljs.core.apply.call(null,f,inst_12133);var state_12147__$1 = state_12147;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12147__$1,16,out,inst_12138);
} else
{if((state_val_12148 === 15))
{var inst_12143 = (state_12147[2]);var state_12147__$1 = state_12147;var statearr_12167_12191 = state_12147__$1;(statearr_12167_12191[2] = inst_12143);
(statearr_12167_12191[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12148 === 16))
{var inst_12140 = (state_12147[2]);var state_12147__$1 = (function (){var statearr_12168 = state_12147;(statearr_12168[13] = inst_12140);
return statearr_12168;
})();var statearr_12169_12192 = state_12147__$1;(statearr_12169_12192[2] = null);
(statearr_12169_12192[1] = 2);
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
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_12173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12173[0] = state_machine__5550__auto__);
(statearr_12173[1] = 1);
return statearr_12173;
});
var state_machine__5550__auto____1 = (function (state_12147){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_12147);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e12174){if((e12174 instanceof Object))
{var ex__5553__auto__ = e12174;var statearr_12175_12193 = state_12147;(statearr_12175_12193[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12147);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12174;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12194 = state_12147;
state_12147 = G__12194;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_12147){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_12147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_12176 = f__5565__auto__.call(null);(statearr_12176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___12177);
return statearr_12176;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___12302 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_12278){var state_val_12279 = (state_12278[1]);if((state_val_12279 === 1))
{var inst_12249 = cljs.core.vec.call(null,chs);var inst_12250 = inst_12249;var state_12278__$1 = (function (){var statearr_12280 = state_12278;(statearr_12280[7] = inst_12250);
return statearr_12280;
})();var statearr_12281_12303 = state_12278__$1;(statearr_12281_12303[2] = null);
(statearr_12281_12303[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12279 === 2))
{var inst_12250 = (state_12278[7]);var inst_12252 = cljs.core.count.call(null,inst_12250);var inst_12253 = (inst_12252 > 0);var state_12278__$1 = state_12278;if(cljs.core.truth_(inst_12253))
{var statearr_12282_12304 = state_12278__$1;(statearr_12282_12304[1] = 4);
} else
{var statearr_12283_12305 = state_12278__$1;(statearr_12283_12305[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12279 === 3))
{var inst_12276 = (state_12278[2]);var state_12278__$1 = state_12278;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12278__$1,inst_12276);
} else
{if((state_val_12279 === 4))
{var inst_12250 = (state_12278[7]);var state_12278__$1 = state_12278;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12278__$1,7,inst_12250);
} else
{if((state_val_12279 === 5))
{var inst_12272 = cljs.core.async.close_BANG_.call(null,out);var state_12278__$1 = state_12278;var statearr_12284_12306 = state_12278__$1;(statearr_12284_12306[2] = inst_12272);
(statearr_12284_12306[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12279 === 6))
{var inst_12274 = (state_12278[2]);var state_12278__$1 = state_12278;var statearr_12285_12307 = state_12278__$1;(statearr_12285_12307[2] = inst_12274);
(statearr_12285_12307[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12279 === 7))
{var inst_12258 = (state_12278[8]);var inst_12257 = (state_12278[9]);var inst_12257__$1 = (state_12278[2]);var inst_12258__$1 = cljs.core.nth.call(null,inst_12257__$1,0,null);var inst_12259 = cljs.core.nth.call(null,inst_12257__$1,1,null);var inst_12260 = (inst_12258__$1 == null);var state_12278__$1 = (function (){var statearr_12286 = state_12278;(statearr_12286[10] = inst_12259);
(statearr_12286[8] = inst_12258__$1);
(statearr_12286[9] = inst_12257__$1);
return statearr_12286;
})();if(cljs.core.truth_(inst_12260))
{var statearr_12287_12308 = state_12278__$1;(statearr_12287_12308[1] = 8);
} else
{var statearr_12288_12309 = state_12278__$1;(statearr_12288_12309[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12279 === 8))
{var inst_12259 = (state_12278[10]);var inst_12258 = (state_12278[8]);var inst_12257 = (state_12278[9]);var inst_12250 = (state_12278[7]);var inst_12262 = (function (){var c = inst_12259;var v = inst_12258;var vec__12255 = inst_12257;var cs = inst_12250;return ((function (c,v,vec__12255,cs,inst_12259,inst_12258,inst_12257,inst_12250,state_val_12279){
return (function (p1__12195_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12195_SHARP_);
});
;})(c,v,vec__12255,cs,inst_12259,inst_12258,inst_12257,inst_12250,state_val_12279))
})();var inst_12263 = cljs.core.filterv.call(null,inst_12262,inst_12250);var inst_12250__$1 = inst_12263;var state_12278__$1 = (function (){var statearr_12289 = state_12278;(statearr_12289[7] = inst_12250__$1);
return statearr_12289;
})();var statearr_12290_12310 = state_12278__$1;(statearr_12290_12310[2] = null);
(statearr_12290_12310[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12279 === 9))
{var inst_12258 = (state_12278[8]);var state_12278__$1 = state_12278;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12278__$1,11,out,inst_12258);
} else
{if((state_val_12279 === 10))
{var inst_12270 = (state_12278[2]);var state_12278__$1 = state_12278;var statearr_12292_12311 = state_12278__$1;(statearr_12292_12311[2] = inst_12270);
(statearr_12292_12311[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12279 === 11))
{var inst_12250 = (state_12278[7]);var inst_12267 = (state_12278[2]);var tmp12291 = inst_12250;var inst_12250__$1 = tmp12291;var state_12278__$1 = (function (){var statearr_12293 = state_12278;(statearr_12293[11] = inst_12267);
(statearr_12293[7] = inst_12250__$1);
return statearr_12293;
})();var statearr_12294_12312 = state_12278__$1;(statearr_12294_12312[2] = null);
(statearr_12294_12312[1] = 2);
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
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_12298 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12298[0] = state_machine__5550__auto__);
(statearr_12298[1] = 1);
return statearr_12298;
});
var state_machine__5550__auto____1 = (function (state_12278){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_12278);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e12299){if((e12299 instanceof Object))
{var ex__5553__auto__ = e12299;var statearr_12300_12313 = state_12278;(statearr_12300_12313[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12278);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12299;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12314 = state_12278;
state_12278 = G__12314;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_12278){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_12278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_12301 = f__5565__auto__.call(null);(statearr_12301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___12302);
return statearr_12301;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___12407 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_12384){var state_val_12385 = (state_12384[1]);if((state_val_12385 === 1))
{var inst_12361 = 0;var state_12384__$1 = (function (){var statearr_12386 = state_12384;(statearr_12386[7] = inst_12361);
return statearr_12386;
})();var statearr_12387_12408 = state_12384__$1;(statearr_12387_12408[2] = null);
(statearr_12387_12408[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12385 === 2))
{var inst_12361 = (state_12384[7]);var inst_12363 = (inst_12361 < n);var state_12384__$1 = state_12384;if(cljs.core.truth_(inst_12363))
{var statearr_12388_12409 = state_12384__$1;(statearr_12388_12409[1] = 4);
} else
{var statearr_12389_12410 = state_12384__$1;(statearr_12389_12410[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12385 === 3))
{var inst_12381 = (state_12384[2]);var inst_12382 = cljs.core.async.close_BANG_.call(null,out);var state_12384__$1 = (function (){var statearr_12390 = state_12384;(statearr_12390[8] = inst_12381);
return statearr_12390;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12384__$1,inst_12382);
} else
{if((state_val_12385 === 4))
{var state_12384__$1 = state_12384;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12384__$1,7,ch);
} else
{if((state_val_12385 === 5))
{var state_12384__$1 = state_12384;var statearr_12391_12411 = state_12384__$1;(statearr_12391_12411[2] = null);
(statearr_12391_12411[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12385 === 6))
{var inst_12379 = (state_12384[2]);var state_12384__$1 = state_12384;var statearr_12392_12412 = state_12384__$1;(statearr_12392_12412[2] = inst_12379);
(statearr_12392_12412[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12385 === 7))
{var inst_12366 = (state_12384[9]);var inst_12366__$1 = (state_12384[2]);var inst_12367 = (inst_12366__$1 == null);var inst_12368 = cljs.core.not.call(null,inst_12367);var state_12384__$1 = (function (){var statearr_12393 = state_12384;(statearr_12393[9] = inst_12366__$1);
return statearr_12393;
})();if(inst_12368)
{var statearr_12394_12413 = state_12384__$1;(statearr_12394_12413[1] = 8);
} else
{var statearr_12395_12414 = state_12384__$1;(statearr_12395_12414[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12385 === 8))
{var inst_12366 = (state_12384[9]);var state_12384__$1 = state_12384;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12384__$1,11,out,inst_12366);
} else
{if((state_val_12385 === 9))
{var state_12384__$1 = state_12384;var statearr_12396_12415 = state_12384__$1;(statearr_12396_12415[2] = null);
(statearr_12396_12415[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12385 === 10))
{var inst_12376 = (state_12384[2]);var state_12384__$1 = state_12384;var statearr_12397_12416 = state_12384__$1;(statearr_12397_12416[2] = inst_12376);
(statearr_12397_12416[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12385 === 11))
{var inst_12361 = (state_12384[7]);var inst_12371 = (state_12384[2]);var inst_12372 = (inst_12361 + 1);var inst_12361__$1 = inst_12372;var state_12384__$1 = (function (){var statearr_12398 = state_12384;(statearr_12398[7] = inst_12361__$1);
(statearr_12398[10] = inst_12371);
return statearr_12398;
})();var statearr_12399_12417 = state_12384__$1;(statearr_12399_12417[2] = null);
(statearr_12399_12417[1] = 2);
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
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_12403 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12403[0] = state_machine__5550__auto__);
(statearr_12403[1] = 1);
return statearr_12403;
});
var state_machine__5550__auto____1 = (function (state_12384){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_12384);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e12404){if((e12404 instanceof Object))
{var ex__5553__auto__ = e12404;var statearr_12405_12418 = state_12384;(statearr_12405_12418[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12384);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12404;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12419 = state_12384;
state_12384 = G__12419;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_12384){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_12384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_12406 = f__5565__auto__.call(null);(statearr_12406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___12407);
return statearr_12406;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___12516 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_12491){var state_val_12492 = (state_12491[1]);if((state_val_12492 === 1))
{var inst_12468 = null;var state_12491__$1 = (function (){var statearr_12493 = state_12491;(statearr_12493[7] = inst_12468);
return statearr_12493;
})();var statearr_12494_12517 = state_12491__$1;(statearr_12494_12517[2] = null);
(statearr_12494_12517[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12492 === 2))
{var state_12491__$1 = state_12491;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12491__$1,4,ch);
} else
{if((state_val_12492 === 3))
{var inst_12488 = (state_12491[2]);var inst_12489 = cljs.core.async.close_BANG_.call(null,out);var state_12491__$1 = (function (){var statearr_12495 = state_12491;(statearr_12495[8] = inst_12488);
return statearr_12495;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12491__$1,inst_12489);
} else
{if((state_val_12492 === 4))
{var inst_12471 = (state_12491[9]);var inst_12471__$1 = (state_12491[2]);var inst_12472 = (inst_12471__$1 == null);var inst_12473 = cljs.core.not.call(null,inst_12472);var state_12491__$1 = (function (){var statearr_12496 = state_12491;(statearr_12496[9] = inst_12471__$1);
return statearr_12496;
})();if(inst_12473)
{var statearr_12497_12518 = state_12491__$1;(statearr_12497_12518[1] = 5);
} else
{var statearr_12498_12519 = state_12491__$1;(statearr_12498_12519[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12492 === 5))
{var inst_12468 = (state_12491[7]);var inst_12471 = (state_12491[9]);var inst_12475 = cljs.core._EQ_.call(null,inst_12471,inst_12468);var state_12491__$1 = state_12491;if(inst_12475)
{var statearr_12499_12520 = state_12491__$1;(statearr_12499_12520[1] = 8);
} else
{var statearr_12500_12521 = state_12491__$1;(statearr_12500_12521[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12492 === 6))
{var state_12491__$1 = state_12491;var statearr_12502_12522 = state_12491__$1;(statearr_12502_12522[2] = null);
(statearr_12502_12522[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12492 === 7))
{var inst_12486 = (state_12491[2]);var state_12491__$1 = state_12491;var statearr_12503_12523 = state_12491__$1;(statearr_12503_12523[2] = inst_12486);
(statearr_12503_12523[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12492 === 8))
{var inst_12468 = (state_12491[7]);var tmp12501 = inst_12468;var inst_12468__$1 = tmp12501;var state_12491__$1 = (function (){var statearr_12504 = state_12491;(statearr_12504[7] = inst_12468__$1);
return statearr_12504;
})();var statearr_12505_12524 = state_12491__$1;(statearr_12505_12524[2] = null);
(statearr_12505_12524[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12492 === 9))
{var inst_12471 = (state_12491[9]);var state_12491__$1 = state_12491;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12491__$1,11,out,inst_12471);
} else
{if((state_val_12492 === 10))
{var inst_12483 = (state_12491[2]);var state_12491__$1 = state_12491;var statearr_12506_12525 = state_12491__$1;(statearr_12506_12525[2] = inst_12483);
(statearr_12506_12525[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12492 === 11))
{var inst_12471 = (state_12491[9]);var inst_12480 = (state_12491[2]);var inst_12468 = inst_12471;var state_12491__$1 = (function (){var statearr_12507 = state_12491;(statearr_12507[7] = inst_12468);
(statearr_12507[10] = inst_12480);
return statearr_12507;
})();var statearr_12508_12526 = state_12491__$1;(statearr_12508_12526[2] = null);
(statearr_12508_12526[1] = 2);
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
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_12512 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12512[0] = state_machine__5550__auto__);
(statearr_12512[1] = 1);
return statearr_12512;
});
var state_machine__5550__auto____1 = (function (state_12491){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_12491);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e12513){if((e12513 instanceof Object))
{var ex__5553__auto__ = e12513;var statearr_12514_12527 = state_12491;(statearr_12514_12527[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12491);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12513;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12528 = state_12491;
state_12491 = G__12528;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_12491){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_12491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_12515 = f__5565__auto__.call(null);(statearr_12515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___12516);
return statearr_12515;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___12663 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_12633){var state_val_12634 = (state_12633[1]);if((state_val_12634 === 1))
{var inst_12596 = (new Array(n));var inst_12597 = inst_12596;var inst_12598 = 0;var state_12633__$1 = (function (){var statearr_12635 = state_12633;(statearr_12635[7] = inst_12598);
(statearr_12635[8] = inst_12597);
return statearr_12635;
})();var statearr_12636_12664 = state_12633__$1;(statearr_12636_12664[2] = null);
(statearr_12636_12664[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 2))
{var state_12633__$1 = state_12633;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12633__$1,4,ch);
} else
{if((state_val_12634 === 3))
{var inst_12631 = (state_12633[2]);var state_12633__$1 = state_12633;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12633__$1,inst_12631);
} else
{if((state_val_12634 === 4))
{var inst_12601 = (state_12633[9]);var inst_12601__$1 = (state_12633[2]);var inst_12602 = (inst_12601__$1 == null);var inst_12603 = cljs.core.not.call(null,inst_12602);var state_12633__$1 = (function (){var statearr_12637 = state_12633;(statearr_12637[9] = inst_12601__$1);
return statearr_12637;
})();if(inst_12603)
{var statearr_12638_12665 = state_12633__$1;(statearr_12638_12665[1] = 5);
} else
{var statearr_12639_12666 = state_12633__$1;(statearr_12639_12666[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 5))
{var inst_12598 = (state_12633[7]);var inst_12597 = (state_12633[8]);var inst_12606 = (state_12633[10]);var inst_12601 = (state_12633[9]);var inst_12605 = (inst_12597[inst_12598] = inst_12601);var inst_12606__$1 = (inst_12598 + 1);var inst_12607 = (inst_12606__$1 < n);var state_12633__$1 = (function (){var statearr_12640 = state_12633;(statearr_12640[11] = inst_12605);
(statearr_12640[10] = inst_12606__$1);
return statearr_12640;
})();if(cljs.core.truth_(inst_12607))
{var statearr_12641_12667 = state_12633__$1;(statearr_12641_12667[1] = 8);
} else
{var statearr_12642_12668 = state_12633__$1;(statearr_12642_12668[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 6))
{var inst_12598 = (state_12633[7]);var inst_12619 = (inst_12598 > 0);var state_12633__$1 = state_12633;if(cljs.core.truth_(inst_12619))
{var statearr_12644_12669 = state_12633__$1;(statearr_12644_12669[1] = 12);
} else
{var statearr_12645_12670 = state_12633__$1;(statearr_12645_12670[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 7))
{var inst_12629 = (state_12633[2]);var state_12633__$1 = state_12633;var statearr_12646_12671 = state_12633__$1;(statearr_12646_12671[2] = inst_12629);
(statearr_12646_12671[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 8))
{var inst_12597 = (state_12633[8]);var inst_12606 = (state_12633[10]);var tmp12643 = inst_12597;var inst_12597__$1 = tmp12643;var inst_12598 = inst_12606;var state_12633__$1 = (function (){var statearr_12647 = state_12633;(statearr_12647[7] = inst_12598);
(statearr_12647[8] = inst_12597__$1);
return statearr_12647;
})();var statearr_12648_12672 = state_12633__$1;(statearr_12648_12672[2] = null);
(statearr_12648_12672[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 9))
{var inst_12597 = (state_12633[8]);var inst_12611 = cljs.core.vec.call(null,inst_12597);var state_12633__$1 = state_12633;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12633__$1,11,out,inst_12611);
} else
{if((state_val_12634 === 10))
{var inst_12617 = (state_12633[2]);var state_12633__$1 = state_12633;var statearr_12649_12673 = state_12633__$1;(statearr_12649_12673[2] = inst_12617);
(statearr_12649_12673[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 11))
{var inst_12613 = (state_12633[2]);var inst_12614 = (new Array(n));var inst_12597 = inst_12614;var inst_12598 = 0;var state_12633__$1 = (function (){var statearr_12650 = state_12633;(statearr_12650[7] = inst_12598);
(statearr_12650[8] = inst_12597);
(statearr_12650[12] = inst_12613);
return statearr_12650;
})();var statearr_12651_12674 = state_12633__$1;(statearr_12651_12674[2] = null);
(statearr_12651_12674[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 12))
{var inst_12597 = (state_12633[8]);var inst_12621 = cljs.core.vec.call(null,inst_12597);var state_12633__$1 = state_12633;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12633__$1,15,out,inst_12621);
} else
{if((state_val_12634 === 13))
{var state_12633__$1 = state_12633;var statearr_12652_12675 = state_12633__$1;(statearr_12652_12675[2] = null);
(statearr_12652_12675[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 14))
{var inst_12626 = (state_12633[2]);var inst_12627 = cljs.core.async.close_BANG_.call(null,out);var state_12633__$1 = (function (){var statearr_12653 = state_12633;(statearr_12653[13] = inst_12626);
return statearr_12653;
})();var statearr_12654_12676 = state_12633__$1;(statearr_12654_12676[2] = inst_12627);
(statearr_12654_12676[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 15))
{var inst_12623 = (state_12633[2]);var state_12633__$1 = state_12633;var statearr_12655_12677 = state_12633__$1;(statearr_12655_12677[2] = inst_12623);
(statearr_12655_12677[1] = 14);
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
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_12659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12659[0] = state_machine__5550__auto__);
(statearr_12659[1] = 1);
return statearr_12659;
});
var state_machine__5550__auto____1 = (function (state_12633){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_12633);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e12660){if((e12660 instanceof Object))
{var ex__5553__auto__ = e12660;var statearr_12661_12678 = state_12633;(statearr_12661_12678[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12633);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12660;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12679 = state_12633;
state_12633 = G__12679;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_12633){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_12633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_12662 = f__5565__auto__.call(null);(statearr_12662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___12663);
return statearr_12662;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___12822 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_12792){var state_val_12793 = (state_12792[1]);if((state_val_12793 === 1))
{var inst_12751 = [];var inst_12752 = inst_12751;var inst_12753 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12792__$1 = (function (){var statearr_12794 = state_12792;(statearr_12794[7] = inst_12753);
(statearr_12794[8] = inst_12752);
return statearr_12794;
})();var statearr_12795_12823 = state_12792__$1;(statearr_12795_12823[2] = null);
(statearr_12795_12823[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12793 === 2))
{var state_12792__$1 = state_12792;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12792__$1,4,ch);
} else
{if((state_val_12793 === 3))
{var inst_12790 = (state_12792[2]);var state_12792__$1 = state_12792;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12792__$1,inst_12790);
} else
{if((state_val_12793 === 4))
{var inst_12756 = (state_12792[9]);var inst_12756__$1 = (state_12792[2]);var inst_12757 = (inst_12756__$1 == null);var inst_12758 = cljs.core.not.call(null,inst_12757);var state_12792__$1 = (function (){var statearr_12796 = state_12792;(statearr_12796[9] = inst_12756__$1);
return statearr_12796;
})();if(inst_12758)
{var statearr_12797_12824 = state_12792__$1;(statearr_12797_12824[1] = 5);
} else
{var statearr_12798_12825 = state_12792__$1;(statearr_12798_12825[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12793 === 5))
{var inst_12753 = (state_12792[7]);var inst_12760 = (state_12792[10]);var inst_12756 = (state_12792[9]);var inst_12760__$1 = f.call(null,inst_12756);var inst_12761 = cljs.core._EQ_.call(null,inst_12760__$1,inst_12753);var inst_12762 = cljs.core.keyword_identical_QMARK_.call(null,inst_12753,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12763 = (inst_12761) || (inst_12762);var state_12792__$1 = (function (){var statearr_12799 = state_12792;(statearr_12799[10] = inst_12760__$1);
return statearr_12799;
})();if(cljs.core.truth_(inst_12763))
{var statearr_12800_12826 = state_12792__$1;(statearr_12800_12826[1] = 8);
} else
{var statearr_12801_12827 = state_12792__$1;(statearr_12801_12827[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12793 === 6))
{var inst_12752 = (state_12792[8]);var inst_12777 = inst_12752.length;var inst_12778 = (inst_12777 > 0);var state_12792__$1 = state_12792;if(cljs.core.truth_(inst_12778))
{var statearr_12803_12828 = state_12792__$1;(statearr_12803_12828[1] = 12);
} else
{var statearr_12804_12829 = state_12792__$1;(statearr_12804_12829[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12793 === 7))
{var inst_12788 = (state_12792[2]);var state_12792__$1 = state_12792;var statearr_12805_12830 = state_12792__$1;(statearr_12805_12830[2] = inst_12788);
(statearr_12805_12830[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12793 === 8))
{var inst_12752 = (state_12792[8]);var inst_12760 = (state_12792[10]);var inst_12756 = (state_12792[9]);var inst_12765 = inst_12752.push(inst_12756);var tmp12802 = inst_12752;var inst_12752__$1 = tmp12802;var inst_12753 = inst_12760;var state_12792__$1 = (function (){var statearr_12806 = state_12792;(statearr_12806[7] = inst_12753);
(statearr_12806[8] = inst_12752__$1);
(statearr_12806[11] = inst_12765);
return statearr_12806;
})();var statearr_12807_12831 = state_12792__$1;(statearr_12807_12831[2] = null);
(statearr_12807_12831[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12793 === 9))
{var inst_12752 = (state_12792[8]);var inst_12768 = cljs.core.vec.call(null,inst_12752);var state_12792__$1 = state_12792;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12792__$1,11,out,inst_12768);
} else
{if((state_val_12793 === 10))
{var inst_12775 = (state_12792[2]);var state_12792__$1 = state_12792;var statearr_12808_12832 = state_12792__$1;(statearr_12808_12832[2] = inst_12775);
(statearr_12808_12832[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12793 === 11))
{var inst_12760 = (state_12792[10]);var inst_12756 = (state_12792[9]);var inst_12770 = (state_12792[2]);var inst_12771 = [];var inst_12772 = inst_12771.push(inst_12756);var inst_12752 = inst_12771;var inst_12753 = inst_12760;var state_12792__$1 = (function (){var statearr_12809 = state_12792;(statearr_12809[7] = inst_12753);
(statearr_12809[8] = inst_12752);
(statearr_12809[12] = inst_12772);
(statearr_12809[13] = inst_12770);
return statearr_12809;
})();var statearr_12810_12833 = state_12792__$1;(statearr_12810_12833[2] = null);
(statearr_12810_12833[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12793 === 12))
{var inst_12752 = (state_12792[8]);var inst_12780 = cljs.core.vec.call(null,inst_12752);var state_12792__$1 = state_12792;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12792__$1,15,out,inst_12780);
} else
{if((state_val_12793 === 13))
{var state_12792__$1 = state_12792;var statearr_12811_12834 = state_12792__$1;(statearr_12811_12834[2] = null);
(statearr_12811_12834[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12793 === 14))
{var inst_12785 = (state_12792[2]);var inst_12786 = cljs.core.async.close_BANG_.call(null,out);var state_12792__$1 = (function (){var statearr_12812 = state_12792;(statearr_12812[14] = inst_12785);
return statearr_12812;
})();var statearr_12813_12835 = state_12792__$1;(statearr_12813_12835[2] = inst_12786);
(statearr_12813_12835[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12793 === 15))
{var inst_12782 = (state_12792[2]);var state_12792__$1 = state_12792;var statearr_12814_12836 = state_12792__$1;(statearr_12814_12836[2] = inst_12782);
(statearr_12814_12836[1] = 14);
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
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_12818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12818[0] = state_machine__5550__auto__);
(statearr_12818[1] = 1);
return statearr_12818;
});
var state_machine__5550__auto____1 = (function (state_12792){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_12792);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e12819){if((e12819 instanceof Object))
{var ex__5553__auto__ = e12819;var statearr_12820_12837 = state_12792;(statearr_12820_12837[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12792);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12819;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12838 = state_12792;
state_12792 = G__12838;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_12792){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_12792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_12821 = f__5565__auto__.call(null);(statearr_12821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___12822);
return statearr_12821;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
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