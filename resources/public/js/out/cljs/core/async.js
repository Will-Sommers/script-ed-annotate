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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9414 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9414 = (function (f,fn_handler,meta9415){
this.f = f;
this.fn_handler = fn_handler;
this.meta9415 = meta9415;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9414.cljs$lang$type = true;
cljs.core.async.t9414.cljs$lang$ctorStr = "cljs.core.async/t9414";
cljs.core.async.t9414.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9414");
});
cljs.core.async.t9414.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9414.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9414.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9416){var self__ = this;
var _9416__$1 = this;return self__.meta9415;
});
cljs.core.async.t9414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9416,meta9415__$1){var self__ = this;
var _9416__$1 = this;return (new cljs.core.async.t9414(self__.f,self__.fn_handler,meta9415__$1));
});
cljs.core.async.__GT_t9414 = (function __GT_t9414(f__$1,fn_handler__$1,meta9415){return (new cljs.core.async.t9414(f__$1,fn_handler__$1,meta9415));
});
}
return (new cljs.core.async.t9414(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9418 = buff;if(G__9418)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__9418.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9418.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9418);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9418);
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
{var val_9419 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9419);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9419);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___9420 = n;var x_9421 = 0;while(true){
if((x_9421 < n__4291__auto___9420))
{(a[x_9421] = 0);
{
var G__9422 = (x_9421 + 1);
x_9421 = G__9422;
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
var G__9423 = (i + 1);
i = G__9423;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9427 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9427 = (function (flag,alt_flag,meta9428){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9428 = meta9428;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9427.cljs$lang$type = true;
cljs.core.async.t9427.cljs$lang$ctorStr = "cljs.core.async/t9427";
cljs.core.async.t9427.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9427");
});
cljs.core.async.t9427.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9427.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9427.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9429){var self__ = this;
var _9429__$1 = this;return self__.meta9428;
});
cljs.core.async.t9427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9429,meta9428__$1){var self__ = this;
var _9429__$1 = this;return (new cljs.core.async.t9427(self__.flag,self__.alt_flag,meta9428__$1));
});
cljs.core.async.__GT_t9427 = (function __GT_t9427(flag__$1,alt_flag__$1,meta9428){return (new cljs.core.async.t9427(flag__$1,alt_flag__$1,meta9428));
});
}
return (new cljs.core.async.t9427(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9433 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9433 = (function (cb,flag,alt_handler,meta9434){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9434 = meta9434;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9433.cljs$lang$type = true;
cljs.core.async.t9433.cljs$lang$ctorStr = "cljs.core.async/t9433";
cljs.core.async.t9433.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9433");
});
cljs.core.async.t9433.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9433.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9433.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9435){var self__ = this;
var _9435__$1 = this;return self__.meta9434;
});
cljs.core.async.t9433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9435,meta9434__$1){var self__ = this;
var _9435__$1 = this;return (new cljs.core.async.t9433(self__.cb,self__.flag,self__.alt_handler,meta9434__$1));
});
cljs.core.async.__GT_t9433 = (function __GT_t9433(cb__$1,flag__$1,alt_handler__$1,meta9434){return (new cljs.core.async.t9433(cb__$1,flag__$1,alt_handler__$1,meta9434));
});
}
return (new cljs.core.async.t9433(cb,flag,alt_handler,null));
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
return (function (p1__9436_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9436_SHARP_,port], null));
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
var G__9437 = (i + 1);
i = G__9437;
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
var alts_BANG___delegate = function (ports,p__9438){var map__9440 = p__9438;var map__9440__$1 = ((cljs.core.seq_QMARK_.call(null,map__9440))?cljs.core.apply.call(null,cljs.core.hash_map,map__9440):map__9440);var opts = map__9440__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9438 = null;if (arguments.length > 1) {
  p__9438 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9438);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9441){
var ports = cljs.core.first(arglist__9441);
var p__9438 = cljs.core.rest(arglist__9441);
return alts_BANG___delegate(ports,p__9438);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9449 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9449 = (function (ch,f,map_LT_,meta9450){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9450 = meta9450;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9449.cljs$lang$type = true;
cljs.core.async.t9449.cljs$lang$ctorStr = "cljs.core.async/t9449";
cljs.core.async.t9449.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9449");
});
cljs.core.async.t9449.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9449.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9449.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9449.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9452 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9452 = (function (fn1,_,meta9450,ch,f,map_LT_,meta9453){
this.fn1 = fn1;
this._ = _;
this.meta9450 = meta9450;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9453 = meta9453;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9452.cljs$lang$type = true;
cljs.core.async.t9452.cljs$lang$ctorStr = "cljs.core.async/t9452";
cljs.core.async.t9452.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9452");
});
cljs.core.async.t9452.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9452.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9452.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9452.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9442_SHARP_){return f1.call(null,(((p1__9442_SHARP_ == null))?null:self__.f.call(null,p1__9442_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9454){var self__ = this;
var _9454__$1 = this;return self__.meta9453;
});
cljs.core.async.t9452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9454,meta9453__$1){var self__ = this;
var _9454__$1 = this;return (new cljs.core.async.t9452(self__.fn1,self__._,self__.meta9450,self__.ch,self__.f,self__.map_LT_,meta9453__$1));
});
cljs.core.async.__GT_t9452 = (function __GT_t9452(fn1__$1,___$2,meta9450__$1,ch__$2,f__$2,map_LT___$2,meta9453){return (new cljs.core.async.t9452(fn1__$1,___$2,meta9450__$1,ch__$2,f__$2,map_LT___$2,meta9453));
});
}
return (new cljs.core.async.t9452(fn1,___$1,self__.meta9450,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t9449.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9449.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9451){var self__ = this;
var _9451__$1 = this;return self__.meta9450;
});
cljs.core.async.t9449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9451,meta9450__$1){var self__ = this;
var _9451__$1 = this;return (new cljs.core.async.t9449(self__.ch,self__.f,self__.map_LT_,meta9450__$1));
});
cljs.core.async.__GT_t9449 = (function __GT_t9449(ch__$1,f__$1,map_LT___$1,meta9450){return (new cljs.core.async.t9449(ch__$1,f__$1,map_LT___$1,meta9450));
});
}
return (new cljs.core.async.t9449(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9458 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9458 = (function (ch,f,map_GT_,meta9459){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9459 = meta9459;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9458.cljs$lang$type = true;
cljs.core.async.t9458.cljs$lang$ctorStr = "cljs.core.async/t9458";
cljs.core.async.t9458.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9458");
});
cljs.core.async.t9458.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9458.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9458.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9458.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9458.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9458.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9460){var self__ = this;
var _9460__$1 = this;return self__.meta9459;
});
cljs.core.async.t9458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9460,meta9459__$1){var self__ = this;
var _9460__$1 = this;return (new cljs.core.async.t9458(self__.ch,self__.f,self__.map_GT_,meta9459__$1));
});
cljs.core.async.__GT_t9458 = (function __GT_t9458(ch__$1,f__$1,map_GT___$1,meta9459){return (new cljs.core.async.t9458(ch__$1,f__$1,map_GT___$1,meta9459));
});
}
return (new cljs.core.async.t9458(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9464 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9464 = (function (ch,p,filter_GT_,meta9465){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9465 = meta9465;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9464.cljs$lang$type = true;
cljs.core.async.t9464.cljs$lang$ctorStr = "cljs.core.async/t9464";
cljs.core.async.t9464.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9464");
});
cljs.core.async.t9464.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9464.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9464.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9464.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9464.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9464.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9466){var self__ = this;
var _9466__$1 = this;return self__.meta9465;
});
cljs.core.async.t9464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9466,meta9465__$1){var self__ = this;
var _9466__$1 = this;return (new cljs.core.async.t9464(self__.ch,self__.p,self__.filter_GT_,meta9465__$1));
});
cljs.core.async.__GT_t9464 = (function __GT_t9464(ch__$1,p__$1,filter_GT___$1,meta9465){return (new cljs.core.async.t9464(ch__$1,p__$1,filter_GT___$1,meta9465));
});
}
return (new cljs.core.async.t9464(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6001__auto___9549 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6002__auto__ = (function (){var switch__5986__auto__ = (function (state_9528){var state_val_9529 = (state_9528[1]);if((state_val_9529 === 1))
{var state_9528__$1 = state_9528;var statearr_9530_9550 = state_9528__$1;(statearr_9530_9550[2] = null);
(statearr_9530_9550[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9529 === 2))
{var state_9528__$1 = state_9528;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9528__$1,4,ch);
} else
{if((state_val_9529 === 3))
{var inst_9526 = (state_9528[2]);var state_9528__$1 = state_9528;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9528__$1,inst_9526);
} else
{if((state_val_9529 === 4))
{var inst_9510 = (state_9528[7]);var inst_9510__$1 = (state_9528[2]);var inst_9511 = (inst_9510__$1 == null);var state_9528__$1 = (function (){var statearr_9531 = state_9528;(statearr_9531[7] = inst_9510__$1);
return statearr_9531;
})();if(cljs.core.truth_(inst_9511))
{var statearr_9532_9551 = state_9528__$1;(statearr_9532_9551[1] = 5);
} else
{var statearr_9533_9552 = state_9528__$1;(statearr_9533_9552[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9529 === 5))
{var inst_9513 = cljs.core.async.close_BANG_.call(null,out);var state_9528__$1 = state_9528;var statearr_9534_9553 = state_9528__$1;(statearr_9534_9553[2] = inst_9513);
(statearr_9534_9553[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9529 === 6))
{var inst_9510 = (state_9528[7]);var inst_9515 = p.call(null,inst_9510);var state_9528__$1 = state_9528;if(cljs.core.truth_(inst_9515))
{var statearr_9535_9554 = state_9528__$1;(statearr_9535_9554[1] = 8);
} else
{var statearr_9536_9555 = state_9528__$1;(statearr_9536_9555[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9529 === 7))
{var inst_9524 = (state_9528[2]);var state_9528__$1 = state_9528;var statearr_9537_9556 = state_9528__$1;(statearr_9537_9556[2] = inst_9524);
(statearr_9537_9556[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9529 === 8))
{var inst_9510 = (state_9528[7]);var state_9528__$1 = state_9528;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9528__$1,11,out,inst_9510);
} else
{if((state_val_9529 === 9))
{var state_9528__$1 = state_9528;var statearr_9538_9557 = state_9528__$1;(statearr_9538_9557[2] = null);
(statearr_9538_9557[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9529 === 10))
{var inst_9521 = (state_9528[2]);var state_9528__$1 = (function (){var statearr_9539 = state_9528;(statearr_9539[8] = inst_9521);
return statearr_9539;
})();var statearr_9540_9558 = state_9528__$1;(statearr_9540_9558[2] = null);
(statearr_9540_9558[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9529 === 11))
{var inst_9518 = (state_9528[2]);var state_9528__$1 = state_9528;var statearr_9541_9559 = state_9528__$1;(statearr_9541_9559[2] = inst_9518);
(statearr_9541_9559[1] = 10);
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
});return ((function (switch__5986__auto__){
return (function() {
var state_machine__5987__auto__ = null;
var state_machine__5987__auto____0 = (function (){var statearr_9545 = [null,null,null,null,null,null,null,null,null];(statearr_9545[0] = state_machine__5987__auto__);
(statearr_9545[1] = 1);
return statearr_9545;
});
var state_machine__5987__auto____1 = (function (state_9528){while(true){
var ret_value__5988__auto__ = (function (){try{while(true){
var result__5989__auto__ = switch__5986__auto__.call(null,state_9528);if(cljs.core.keyword_identical_QMARK_.call(null,result__5989__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5989__auto__;
}
break;
}
}catch (e9546){if((e9546 instanceof Object))
{var ex__5990__auto__ = e9546;var statearr_9547_9560 = state_9528;(statearr_9547_9560[5] = ex__5990__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9528);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9546;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5988__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9561 = state_9528;
state_9528 = G__9561;
continue;
}
} else
{return ret_value__5988__auto__;
}
break;
}
});
state_machine__5987__auto__ = function(state_9528){
switch(arguments.length){
case 0:
return state_machine__5987__auto____0.call(this);
case 1:
return state_machine__5987__auto____1.call(this,state_9528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5987__auto____0;
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5987__auto____1;
return state_machine__5987__auto__;
})()
;})(switch__5986__auto__))
})();var state__6003__auto__ = (function (){var statearr_9548 = f__6002__auto__.call(null);(statearr_9548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6001__auto___9549);
return statearr_9548;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6003__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6001__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6002__auto__ = (function (){var switch__5986__auto__ = (function (state_9713){var state_val_9714 = (state_9713[1]);if((state_val_9714 === 1))
{var state_9713__$1 = state_9713;var statearr_9715_9752 = state_9713__$1;(statearr_9715_9752[2] = null);
(statearr_9715_9752[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9714 === 2))
{var state_9713__$1 = state_9713;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9713__$1,4,in$);
} else
{if((state_val_9714 === 3))
{var inst_9711 = (state_9713[2]);var state_9713__$1 = state_9713;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9713__$1,inst_9711);
} else
{if((state_val_9714 === 4))
{var inst_9659 = (state_9713[7]);var inst_9659__$1 = (state_9713[2]);var inst_9660 = (inst_9659__$1 == null);var state_9713__$1 = (function (){var statearr_9716 = state_9713;(statearr_9716[7] = inst_9659__$1);
return statearr_9716;
})();if(cljs.core.truth_(inst_9660))
{var statearr_9717_9753 = state_9713__$1;(statearr_9717_9753[1] = 5);
} else
{var statearr_9718_9754 = state_9713__$1;(statearr_9718_9754[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9714 === 5))
{var inst_9662 = cljs.core.async.close_BANG_.call(null,out);var state_9713__$1 = state_9713;var statearr_9719_9755 = state_9713__$1;(statearr_9719_9755[2] = inst_9662);
(statearr_9719_9755[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9714 === 6))
{var inst_9659 = (state_9713[7]);var inst_9664 = f.call(null,inst_9659);var inst_9669 = cljs.core.seq.call(null,inst_9664);var inst_9670 = inst_9669;var inst_9671 = null;var inst_9672 = 0;var inst_9673 = 0;var state_9713__$1 = (function (){var statearr_9720 = state_9713;(statearr_9720[8] = inst_9672);
(statearr_9720[9] = inst_9671);
(statearr_9720[10] = inst_9673);
(statearr_9720[11] = inst_9670);
return statearr_9720;
})();var statearr_9721_9756 = state_9713__$1;(statearr_9721_9756[2] = null);
(statearr_9721_9756[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9714 === 7))
{var inst_9709 = (state_9713[2]);var state_9713__$1 = state_9713;var statearr_9722_9757 = state_9713__$1;(statearr_9722_9757[2] = inst_9709);
(statearr_9722_9757[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9714 === 8))
{var inst_9672 = (state_9713[8]);var inst_9673 = (state_9713[10]);var inst_9675 = (inst_9673 < inst_9672);var inst_9676 = inst_9675;var state_9713__$1 = state_9713;if(cljs.core.truth_(inst_9676))
{var statearr_9723_9758 = state_9713__$1;(statearr_9723_9758[1] = 10);
} else
{var statearr_9724_9759 = state_9713__$1;(statearr_9724_9759[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9714 === 9))
{var inst_9706 = (state_9713[2]);var state_9713__$1 = (function (){var statearr_9725 = state_9713;(statearr_9725[12] = inst_9706);
return statearr_9725;
})();var statearr_9726_9760 = state_9713__$1;(statearr_9726_9760[2] = null);
(statearr_9726_9760[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9714 === 10))
{var inst_9671 = (state_9713[9]);var inst_9673 = (state_9713[10]);var inst_9678 = cljs.core._nth.call(null,inst_9671,inst_9673);var state_9713__$1 = state_9713;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9713__$1,13,out,inst_9678);
} else
{if((state_val_9714 === 11))
{var inst_9670 = (state_9713[11]);var inst_9684 = (state_9713[13]);var inst_9684__$1 = cljs.core.seq.call(null,inst_9670);var state_9713__$1 = (function (){var statearr_9730 = state_9713;(statearr_9730[13] = inst_9684__$1);
return statearr_9730;
})();if(inst_9684__$1)
{var statearr_9731_9761 = state_9713__$1;(statearr_9731_9761[1] = 14);
} else
{var statearr_9732_9762 = state_9713__$1;(statearr_9732_9762[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9714 === 12))
{var inst_9704 = (state_9713[2]);var state_9713__$1 = state_9713;var statearr_9733_9763 = state_9713__$1;(statearr_9733_9763[2] = inst_9704);
(statearr_9733_9763[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9714 === 13))
{var inst_9672 = (state_9713[8]);var inst_9671 = (state_9713[9]);var inst_9673 = (state_9713[10]);var inst_9670 = (state_9713[11]);var inst_9680 = (state_9713[2]);var inst_9681 = (inst_9673 + 1);var tmp9727 = inst_9672;var tmp9728 = inst_9671;var tmp9729 = inst_9670;var inst_9670__$1 = tmp9729;var inst_9671__$1 = tmp9728;var inst_9672__$1 = tmp9727;var inst_9673__$1 = inst_9681;var state_9713__$1 = (function (){var statearr_9734 = state_9713;(statearr_9734[14] = inst_9680);
(statearr_9734[8] = inst_9672__$1);
(statearr_9734[9] = inst_9671__$1);
(statearr_9734[10] = inst_9673__$1);
(statearr_9734[11] = inst_9670__$1);
return statearr_9734;
})();var statearr_9735_9764 = state_9713__$1;(statearr_9735_9764[2] = null);
(statearr_9735_9764[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9714 === 14))
{var inst_9684 = (state_9713[13]);var inst_9686 = cljs.core.chunked_seq_QMARK_.call(null,inst_9684);var state_9713__$1 = state_9713;if(inst_9686)
{var statearr_9736_9765 = state_9713__$1;(statearr_9736_9765[1] = 17);
} else
{var statearr_9737_9766 = state_9713__$1;(statearr_9737_9766[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9714 === 15))
{var state_9713__$1 = state_9713;var statearr_9738_9767 = state_9713__$1;(statearr_9738_9767[2] = null);
(statearr_9738_9767[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9714 === 16))
{var inst_9702 = (state_9713[2]);var state_9713__$1 = state_9713;var statearr_9739_9768 = state_9713__$1;(statearr_9739_9768[2] = inst_9702);
(statearr_9739_9768[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9714 === 17))
{var inst_9684 = (state_9713[13]);var inst_9688 = cljs.core.chunk_first.call(null,inst_9684);var inst_9689 = cljs.core.chunk_rest.call(null,inst_9684);var inst_9690 = cljs.core.count.call(null,inst_9688);var inst_9670 = inst_9689;var inst_9671 = inst_9688;var inst_9672 = inst_9690;var inst_9673 = 0;var state_9713__$1 = (function (){var statearr_9740 = state_9713;(statearr_9740[8] = inst_9672);
(statearr_9740[9] = inst_9671);
(statearr_9740[10] = inst_9673);
(statearr_9740[11] = inst_9670);
return statearr_9740;
})();var statearr_9741_9769 = state_9713__$1;(statearr_9741_9769[2] = null);
(statearr_9741_9769[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9714 === 18))
{var inst_9684 = (state_9713[13]);var inst_9693 = cljs.core.first.call(null,inst_9684);var state_9713__$1 = state_9713;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9713__$1,20,out,inst_9693);
} else
{if((state_val_9714 === 19))
{var inst_9699 = (state_9713[2]);var state_9713__$1 = state_9713;var statearr_9742_9770 = state_9713__$1;(statearr_9742_9770[2] = inst_9699);
(statearr_9742_9770[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9714 === 20))
{var inst_9684 = (state_9713[13]);var inst_9695 = (state_9713[2]);var inst_9696 = cljs.core.next.call(null,inst_9684);var inst_9670 = inst_9696;var inst_9671 = null;var inst_9672 = 0;var inst_9673 = 0;var state_9713__$1 = (function (){var statearr_9743 = state_9713;(statearr_9743[8] = inst_9672);
(statearr_9743[9] = inst_9671);
(statearr_9743[10] = inst_9673);
(statearr_9743[11] = inst_9670);
(statearr_9743[15] = inst_9695);
return statearr_9743;
})();var statearr_9744_9771 = state_9713__$1;(statearr_9744_9771[2] = null);
(statearr_9744_9771[1] = 8);
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
});return ((function (switch__5986__auto__){
return (function() {
var state_machine__5987__auto__ = null;
var state_machine__5987__auto____0 = (function (){var statearr_9748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9748[0] = state_machine__5987__auto__);
(statearr_9748[1] = 1);
return statearr_9748;
});
var state_machine__5987__auto____1 = (function (state_9713){while(true){
var ret_value__5988__auto__ = (function (){try{while(true){
var result__5989__auto__ = switch__5986__auto__.call(null,state_9713);if(cljs.core.keyword_identical_QMARK_.call(null,result__5989__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5989__auto__;
}
break;
}
}catch (e9749){if((e9749 instanceof Object))
{var ex__5990__auto__ = e9749;var statearr_9750_9772 = state_9713;(statearr_9750_9772[5] = ex__5990__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9713);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9749;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5988__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9773 = state_9713;
state_9713 = G__9773;
continue;
}
} else
{return ret_value__5988__auto__;
}
break;
}
});
state_machine__5987__auto__ = function(state_9713){
switch(arguments.length){
case 0:
return state_machine__5987__auto____0.call(this);
case 1:
return state_machine__5987__auto____1.call(this,state_9713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5987__auto____0;
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5987__auto____1;
return state_machine__5987__auto__;
})()
;})(switch__5986__auto__))
})();var state__6003__auto__ = (function (){var statearr_9751 = f__6002__auto__.call(null);(statearr_9751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6001__auto__);
return statearr_9751;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6003__auto__);
}));
return c__6001__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6001__auto___9854 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6002__auto__ = (function (){var switch__5986__auto__ = (function (state_9833){var state_val_9834 = (state_9833[1]);if((state_val_9834 === 1))
{var state_9833__$1 = state_9833;var statearr_9835_9855 = state_9833__$1;(statearr_9835_9855[2] = null);
(statearr_9835_9855[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 2))
{var state_9833__$1 = state_9833;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9833__$1,4,from);
} else
{if((state_val_9834 === 3))
{var inst_9831 = (state_9833[2]);var state_9833__$1 = state_9833;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9833__$1,inst_9831);
} else
{if((state_val_9834 === 4))
{var inst_9816 = (state_9833[7]);var inst_9816__$1 = (state_9833[2]);var inst_9817 = (inst_9816__$1 == null);var state_9833__$1 = (function (){var statearr_9836 = state_9833;(statearr_9836[7] = inst_9816__$1);
return statearr_9836;
})();if(cljs.core.truth_(inst_9817))
{var statearr_9837_9856 = state_9833__$1;(statearr_9837_9856[1] = 5);
} else
{var statearr_9838_9857 = state_9833__$1;(statearr_9838_9857[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 5))
{var state_9833__$1 = state_9833;if(cljs.core.truth_(close_QMARK_))
{var statearr_9839_9858 = state_9833__$1;(statearr_9839_9858[1] = 8);
} else
{var statearr_9840_9859 = state_9833__$1;(statearr_9840_9859[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 6))
{var inst_9816 = (state_9833[7]);var state_9833__$1 = state_9833;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9833__$1,11,to,inst_9816);
} else
{if((state_val_9834 === 7))
{var inst_9829 = (state_9833[2]);var state_9833__$1 = state_9833;var statearr_9841_9860 = state_9833__$1;(statearr_9841_9860[2] = inst_9829);
(statearr_9841_9860[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 8))
{var inst_9820 = cljs.core.async.close_BANG_.call(null,to);var state_9833__$1 = state_9833;var statearr_9842_9861 = state_9833__$1;(statearr_9842_9861[2] = inst_9820);
(statearr_9842_9861[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 9))
{var state_9833__$1 = state_9833;var statearr_9843_9862 = state_9833__$1;(statearr_9843_9862[2] = null);
(statearr_9843_9862[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 10))
{var inst_9823 = (state_9833[2]);var state_9833__$1 = state_9833;var statearr_9844_9863 = state_9833__$1;(statearr_9844_9863[2] = inst_9823);
(statearr_9844_9863[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 11))
{var inst_9826 = (state_9833[2]);var state_9833__$1 = (function (){var statearr_9845 = state_9833;(statearr_9845[8] = inst_9826);
return statearr_9845;
})();var statearr_9846_9864 = state_9833__$1;(statearr_9846_9864[2] = null);
(statearr_9846_9864[1] = 2);
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
});return ((function (switch__5986__auto__){
return (function() {
var state_machine__5987__auto__ = null;
var state_machine__5987__auto____0 = (function (){var statearr_9850 = [null,null,null,null,null,null,null,null,null];(statearr_9850[0] = state_machine__5987__auto__);
(statearr_9850[1] = 1);
return statearr_9850;
});
var state_machine__5987__auto____1 = (function (state_9833){while(true){
var ret_value__5988__auto__ = (function (){try{while(true){
var result__5989__auto__ = switch__5986__auto__.call(null,state_9833);if(cljs.core.keyword_identical_QMARK_.call(null,result__5989__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5989__auto__;
}
break;
}
}catch (e9851){if((e9851 instanceof Object))
{var ex__5990__auto__ = e9851;var statearr_9852_9865 = state_9833;(statearr_9852_9865[5] = ex__5990__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9833);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9851;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5988__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9866 = state_9833;
state_9833 = G__9866;
continue;
}
} else
{return ret_value__5988__auto__;
}
break;
}
});
state_machine__5987__auto__ = function(state_9833){
switch(arguments.length){
case 0:
return state_machine__5987__auto____0.call(this);
case 1:
return state_machine__5987__auto____1.call(this,state_9833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5987__auto____0;
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5987__auto____1;
return state_machine__5987__auto__;
})()
;})(switch__5986__auto__))
})();var state__6003__auto__ = (function (){var statearr_9853 = f__6002__auto__.call(null);(statearr_9853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6001__auto___9854);
return statearr_9853;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6003__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6001__auto___9953 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6002__auto__ = (function (){var switch__5986__auto__ = (function (state_9931){var state_val_9932 = (state_9931[1]);if((state_val_9932 === 1))
{var state_9931__$1 = state_9931;var statearr_9933_9954 = state_9931__$1;(statearr_9933_9954[2] = null);
(statearr_9933_9954[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9932 === 2))
{var state_9931__$1 = state_9931;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9931__$1,4,ch);
} else
{if((state_val_9932 === 3))
{var inst_9929 = (state_9931[2]);var state_9931__$1 = state_9931;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9931__$1,inst_9929);
} else
{if((state_val_9932 === 4))
{var inst_9912 = (state_9931[7]);var inst_9912__$1 = (state_9931[2]);var inst_9913 = (inst_9912__$1 == null);var state_9931__$1 = (function (){var statearr_9934 = state_9931;(statearr_9934[7] = inst_9912__$1);
return statearr_9934;
})();if(cljs.core.truth_(inst_9913))
{var statearr_9935_9955 = state_9931__$1;(statearr_9935_9955[1] = 5);
} else
{var statearr_9936_9956 = state_9931__$1;(statearr_9936_9956[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9932 === 5))
{var inst_9915 = cljs.core.async.close_BANG_.call(null,tc);var inst_9916 = cljs.core.async.close_BANG_.call(null,fc);var state_9931__$1 = (function (){var statearr_9937 = state_9931;(statearr_9937[8] = inst_9915);
return statearr_9937;
})();var statearr_9938_9957 = state_9931__$1;(statearr_9938_9957[2] = inst_9916);
(statearr_9938_9957[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9932 === 6))
{var inst_9912 = (state_9931[7]);var inst_9918 = p.call(null,inst_9912);var state_9931__$1 = state_9931;if(cljs.core.truth_(inst_9918))
{var statearr_9939_9958 = state_9931__$1;(statearr_9939_9958[1] = 9);
} else
{var statearr_9940_9959 = state_9931__$1;(statearr_9940_9959[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9932 === 7))
{var inst_9927 = (state_9931[2]);var state_9931__$1 = state_9931;var statearr_9941_9960 = state_9931__$1;(statearr_9941_9960[2] = inst_9927);
(statearr_9941_9960[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9932 === 8))
{var inst_9924 = (state_9931[2]);var state_9931__$1 = (function (){var statearr_9942 = state_9931;(statearr_9942[9] = inst_9924);
return statearr_9942;
})();var statearr_9943_9961 = state_9931__$1;(statearr_9943_9961[2] = null);
(statearr_9943_9961[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9932 === 9))
{var state_9931__$1 = state_9931;var statearr_9944_9962 = state_9931__$1;(statearr_9944_9962[2] = tc);
(statearr_9944_9962[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9932 === 10))
{var state_9931__$1 = state_9931;var statearr_9945_9963 = state_9931__$1;(statearr_9945_9963[2] = fc);
(statearr_9945_9963[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9932 === 11))
{var inst_9912 = (state_9931[7]);var inst_9922 = (state_9931[2]);var state_9931__$1 = state_9931;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9931__$1,8,inst_9922,inst_9912);
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
});return ((function (switch__5986__auto__){
return (function() {
var state_machine__5987__auto__ = null;
var state_machine__5987__auto____0 = (function (){var statearr_9949 = [null,null,null,null,null,null,null,null,null,null];(statearr_9949[0] = state_machine__5987__auto__);
(statearr_9949[1] = 1);
return statearr_9949;
});
var state_machine__5987__auto____1 = (function (state_9931){while(true){
var ret_value__5988__auto__ = (function (){try{while(true){
var result__5989__auto__ = switch__5986__auto__.call(null,state_9931);if(cljs.core.keyword_identical_QMARK_.call(null,result__5989__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5989__auto__;
}
break;
}
}catch (e9950){if((e9950 instanceof Object))
{var ex__5990__auto__ = e9950;var statearr_9951_9964 = state_9931;(statearr_9951_9964[5] = ex__5990__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9931);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9950;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5988__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9965 = state_9931;
state_9931 = G__9965;
continue;
}
} else
{return ret_value__5988__auto__;
}
break;
}
});
state_machine__5987__auto__ = function(state_9931){
switch(arguments.length){
case 0:
return state_machine__5987__auto____0.call(this);
case 1:
return state_machine__5987__auto____1.call(this,state_9931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5987__auto____0;
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5987__auto____1;
return state_machine__5987__auto__;
})()
;})(switch__5986__auto__))
})();var state__6003__auto__ = (function (){var statearr_9952 = f__6002__auto__.call(null);(statearr_9952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6001__auto___9953);
return statearr_9952;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6003__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6001__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6002__auto__ = (function (){var switch__5986__auto__ = (function (state_10012){var state_val_10013 = (state_10012[1]);if((state_val_10013 === 7))
{var inst_10008 = (state_10012[2]);var state_10012__$1 = state_10012;var statearr_10014_10030 = state_10012__$1;(statearr_10014_10030[2] = inst_10008);
(statearr_10014_10030[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10013 === 6))
{var inst_9998 = (state_10012[7]);var inst_10001 = (state_10012[8]);var inst_10005 = f.call(null,inst_9998,inst_10001);var inst_9998__$1 = inst_10005;var state_10012__$1 = (function (){var statearr_10015 = state_10012;(statearr_10015[7] = inst_9998__$1);
return statearr_10015;
})();var statearr_10016_10031 = state_10012__$1;(statearr_10016_10031[2] = null);
(statearr_10016_10031[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10013 === 5))
{var inst_9998 = (state_10012[7]);var state_10012__$1 = state_10012;var statearr_10017_10032 = state_10012__$1;(statearr_10017_10032[2] = inst_9998);
(statearr_10017_10032[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10013 === 4))
{var inst_10001 = (state_10012[8]);var inst_10001__$1 = (state_10012[2]);var inst_10002 = (inst_10001__$1 == null);var state_10012__$1 = (function (){var statearr_10018 = state_10012;(statearr_10018[8] = inst_10001__$1);
return statearr_10018;
})();if(cljs.core.truth_(inst_10002))
{var statearr_10019_10033 = state_10012__$1;(statearr_10019_10033[1] = 5);
} else
{var statearr_10020_10034 = state_10012__$1;(statearr_10020_10034[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10013 === 3))
{var inst_10010 = (state_10012[2]);var state_10012__$1 = state_10012;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10012__$1,inst_10010);
} else
{if((state_val_10013 === 2))
{var state_10012__$1 = state_10012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10012__$1,4,ch);
} else
{if((state_val_10013 === 1))
{var inst_9998 = init;var state_10012__$1 = (function (){var statearr_10021 = state_10012;(statearr_10021[7] = inst_9998);
return statearr_10021;
})();var statearr_10022_10035 = state_10012__$1;(statearr_10022_10035[2] = null);
(statearr_10022_10035[1] = 2);
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
});return ((function (switch__5986__auto__){
return (function() {
var state_machine__5987__auto__ = null;
var state_machine__5987__auto____0 = (function (){var statearr_10026 = [null,null,null,null,null,null,null,null,null];(statearr_10026[0] = state_machine__5987__auto__);
(statearr_10026[1] = 1);
return statearr_10026;
});
var state_machine__5987__auto____1 = (function (state_10012){while(true){
var ret_value__5988__auto__ = (function (){try{while(true){
var result__5989__auto__ = switch__5986__auto__.call(null,state_10012);if(cljs.core.keyword_identical_QMARK_.call(null,result__5989__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5989__auto__;
}
break;
}
}catch (e10027){if((e10027 instanceof Object))
{var ex__5990__auto__ = e10027;var statearr_10028_10036 = state_10012;(statearr_10028_10036[5] = ex__5990__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10012);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10027;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5988__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10037 = state_10012;
state_10012 = G__10037;
continue;
}
} else
{return ret_value__5988__auto__;
}
break;
}
});
state_machine__5987__auto__ = function(state_10012){
switch(arguments.length){
case 0:
return state_machine__5987__auto____0.call(this);
case 1:
return state_machine__5987__auto____1.call(this,state_10012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5987__auto____0;
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5987__auto____1;
return state_machine__5987__auto__;
})()
;})(switch__5986__auto__))
})();var state__6003__auto__ = (function (){var statearr_10029 = f__6002__auto__.call(null);(statearr_10029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6001__auto__);
return statearr_10029;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6003__auto__);
}));
return c__6001__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6001__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6002__auto__ = (function (){var switch__5986__auto__ = (function (state_10099){var state_val_10100 = (state_10099[1]);if((state_val_10100 === 1))
{var inst_10079 = cljs.core.seq.call(null,coll);var inst_10080 = inst_10079;var state_10099__$1 = (function (){var statearr_10101 = state_10099;(statearr_10101[7] = inst_10080);
return statearr_10101;
})();var statearr_10102_10120 = state_10099__$1;(statearr_10102_10120[2] = null);
(statearr_10102_10120[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10100 === 2))
{var inst_10080 = (state_10099[7]);var state_10099__$1 = state_10099;if(cljs.core.truth_(inst_10080))
{var statearr_10103_10121 = state_10099__$1;(statearr_10103_10121[1] = 4);
} else
{var statearr_10104_10122 = state_10099__$1;(statearr_10104_10122[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10100 === 3))
{var inst_10097 = (state_10099[2]);var state_10099__$1 = state_10099;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10099__$1,inst_10097);
} else
{if((state_val_10100 === 4))
{var inst_10080 = (state_10099[7]);var inst_10083 = cljs.core.first.call(null,inst_10080);var state_10099__$1 = state_10099;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10099__$1,7,ch,inst_10083);
} else
{if((state_val_10100 === 5))
{var state_10099__$1 = state_10099;if(cljs.core.truth_(close_QMARK_))
{var statearr_10105_10123 = state_10099__$1;(statearr_10105_10123[1] = 8);
} else
{var statearr_10106_10124 = state_10099__$1;(statearr_10106_10124[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10100 === 6))
{var inst_10095 = (state_10099[2]);var state_10099__$1 = state_10099;var statearr_10107_10125 = state_10099__$1;(statearr_10107_10125[2] = inst_10095);
(statearr_10107_10125[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10100 === 7))
{var inst_10080 = (state_10099[7]);var inst_10085 = (state_10099[2]);var inst_10086 = cljs.core.next.call(null,inst_10080);var inst_10080__$1 = inst_10086;var state_10099__$1 = (function (){var statearr_10108 = state_10099;(statearr_10108[8] = inst_10085);
(statearr_10108[7] = inst_10080__$1);
return statearr_10108;
})();var statearr_10109_10126 = state_10099__$1;(statearr_10109_10126[2] = null);
(statearr_10109_10126[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10100 === 8))
{var inst_10090 = cljs.core.async.close_BANG_.call(null,ch);var state_10099__$1 = state_10099;var statearr_10110_10127 = state_10099__$1;(statearr_10110_10127[2] = inst_10090);
(statearr_10110_10127[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10100 === 9))
{var state_10099__$1 = state_10099;var statearr_10111_10128 = state_10099__$1;(statearr_10111_10128[2] = null);
(statearr_10111_10128[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10100 === 10))
{var inst_10093 = (state_10099[2]);var state_10099__$1 = state_10099;var statearr_10112_10129 = state_10099__$1;(statearr_10112_10129[2] = inst_10093);
(statearr_10112_10129[1] = 6);
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
});return ((function (switch__5986__auto__){
return (function() {
var state_machine__5987__auto__ = null;
var state_machine__5987__auto____0 = (function (){var statearr_10116 = [null,null,null,null,null,null,null,null,null];(statearr_10116[0] = state_machine__5987__auto__);
(statearr_10116[1] = 1);
return statearr_10116;
});
var state_machine__5987__auto____1 = (function (state_10099){while(true){
var ret_value__5988__auto__ = (function (){try{while(true){
var result__5989__auto__ = switch__5986__auto__.call(null,state_10099);if(cljs.core.keyword_identical_QMARK_.call(null,result__5989__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5989__auto__;
}
break;
}
}catch (e10117){if((e10117 instanceof Object))
{var ex__5990__auto__ = e10117;var statearr_10118_10130 = state_10099;(statearr_10118_10130[5] = ex__5990__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10099);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10117;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5988__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10131 = state_10099;
state_10099 = G__10131;
continue;
}
} else
{return ret_value__5988__auto__;
}
break;
}
});
state_machine__5987__auto__ = function(state_10099){
switch(arguments.length){
case 0:
return state_machine__5987__auto____0.call(this);
case 1:
return state_machine__5987__auto____1.call(this,state_10099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5987__auto____0;
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5987__auto____1;
return state_machine__5987__auto__;
})()
;})(switch__5986__auto__))
})();var state__6003__auto__ = (function (){var statearr_10119 = f__6002__auto__.call(null);(statearr_10119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6001__auto__);
return statearr_10119;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6003__auto__);
}));
return c__6001__auto__;
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
cljs.core.async.Mux = (function (){var obj10133 = {};return obj10133;
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
cljs.core.async.Mult = (function (){var obj10135 = {};return obj10135;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10359 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10359 = (function (cs,ch,mult,meta10360){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10360 = meta10360;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10359.cljs$lang$type = true;
cljs.core.async.t10359.cljs$lang$ctorStr = "cljs.core.async/t10359";
cljs.core.async.t10359.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10359");
});})(cs))
;
cljs.core.async.t10359.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10359.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10359.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10359.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10359.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10359.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10359.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10361){var self__ = this;
var _10361__$1 = this;return self__.meta10360;
});})(cs))
;
cljs.core.async.t10359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10361,meta10360__$1){var self__ = this;
var _10361__$1 = this;return (new cljs.core.async.t10359(self__.cs,self__.ch,self__.mult,meta10360__$1));
});})(cs))
;
cljs.core.async.__GT_t10359 = ((function (cs){
return (function __GT_t10359(cs__$1,ch__$1,mult__$1,meta10360){return (new cljs.core.async.t10359(cs__$1,ch__$1,mult__$1,meta10360));
});})(cs))
;
}
return (new cljs.core.async.t10359(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6001__auto___10582 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6002__auto__ = (function (){var switch__5986__auto__ = (function (state_10496){var state_val_10497 = (state_10496[1]);if((state_val_10497 === 32))
{var inst_10364 = (state_10496[7]);var inst_10440 = (state_10496[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10496,31,Object,null,30);var inst_10447 = cljs.core.async.put_BANG_.call(null,inst_10440,inst_10364,done);var state_10496__$1 = state_10496;var statearr_10498_10583 = state_10496__$1;(statearr_10498_10583[2] = inst_10447);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10496__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 1))
{var state_10496__$1 = state_10496;var statearr_10499_10584 = state_10496__$1;(statearr_10499_10584[2] = null);
(statearr_10499_10584[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 33))
{var inst_10453 = (state_10496[9]);var inst_10455 = cljs.core.chunked_seq_QMARK_.call(null,inst_10453);var state_10496__$1 = state_10496;if(inst_10455)
{var statearr_10500_10585 = state_10496__$1;(statearr_10500_10585[1] = 36);
} else
{var statearr_10501_10586 = state_10496__$1;(statearr_10501_10586[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 2))
{var state_10496__$1 = state_10496;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10496__$1,4,ch);
} else
{if((state_val_10497 === 34))
{var state_10496__$1 = state_10496;var statearr_10502_10587 = state_10496__$1;(statearr_10502_10587[2] = null);
(statearr_10502_10587[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 3))
{var inst_10494 = (state_10496[2]);var state_10496__$1 = state_10496;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10496__$1,inst_10494);
} else
{if((state_val_10497 === 35))
{var inst_10478 = (state_10496[2]);var state_10496__$1 = state_10496;var statearr_10503_10588 = state_10496__$1;(statearr_10503_10588[2] = inst_10478);
(statearr_10503_10588[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 4))
{var inst_10364 = (state_10496[7]);var inst_10364__$1 = (state_10496[2]);var inst_10365 = (inst_10364__$1 == null);var state_10496__$1 = (function (){var statearr_10504 = state_10496;(statearr_10504[7] = inst_10364__$1);
return statearr_10504;
})();if(cljs.core.truth_(inst_10365))
{var statearr_10505_10589 = state_10496__$1;(statearr_10505_10589[1] = 5);
} else
{var statearr_10506_10590 = state_10496__$1;(statearr_10506_10590[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 36))
{var inst_10453 = (state_10496[9]);var inst_10457 = cljs.core.chunk_first.call(null,inst_10453);var inst_10458 = cljs.core.chunk_rest.call(null,inst_10453);var inst_10459 = cljs.core.count.call(null,inst_10457);var inst_10432 = inst_10458;var inst_10433 = inst_10457;var inst_10434 = inst_10459;var inst_10435 = 0;var state_10496__$1 = (function (){var statearr_10507 = state_10496;(statearr_10507[10] = inst_10433);
(statearr_10507[11] = inst_10434);
(statearr_10507[12] = inst_10435);
(statearr_10507[13] = inst_10432);
return statearr_10507;
})();var statearr_10508_10591 = state_10496__$1;(statearr_10508_10591[2] = null);
(statearr_10508_10591[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 5))
{var inst_10371 = cljs.core.deref.call(null,cs);var inst_10372 = cljs.core.seq.call(null,inst_10371);var inst_10373 = inst_10372;var inst_10374 = null;var inst_10375 = 0;var inst_10376 = 0;var state_10496__$1 = (function (){var statearr_10509 = state_10496;(statearr_10509[14] = inst_10376);
(statearr_10509[15] = inst_10375);
(statearr_10509[16] = inst_10374);
(statearr_10509[17] = inst_10373);
return statearr_10509;
})();var statearr_10510_10592 = state_10496__$1;(statearr_10510_10592[2] = null);
(statearr_10510_10592[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 37))
{var inst_10453 = (state_10496[9]);var inst_10462 = cljs.core.first.call(null,inst_10453);var state_10496__$1 = (function (){var statearr_10511 = state_10496;(statearr_10511[18] = inst_10462);
return statearr_10511;
})();var statearr_10512_10593 = state_10496__$1;(statearr_10512_10593[2] = null);
(statearr_10512_10593[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 6))
{var inst_10424 = (state_10496[19]);var inst_10423 = cljs.core.deref.call(null,cs);var inst_10424__$1 = cljs.core.keys.call(null,inst_10423);var inst_10425 = cljs.core.count.call(null,inst_10424__$1);var inst_10426 = cljs.core.reset_BANG_.call(null,dctr,inst_10425);var inst_10431 = cljs.core.seq.call(null,inst_10424__$1);var inst_10432 = inst_10431;var inst_10433 = null;var inst_10434 = 0;var inst_10435 = 0;var state_10496__$1 = (function (){var statearr_10513 = state_10496;(statearr_10513[20] = inst_10426);
(statearr_10513[10] = inst_10433);
(statearr_10513[11] = inst_10434);
(statearr_10513[12] = inst_10435);
(statearr_10513[13] = inst_10432);
(statearr_10513[19] = inst_10424__$1);
return statearr_10513;
})();var statearr_10514_10594 = state_10496__$1;(statearr_10514_10594[2] = null);
(statearr_10514_10594[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 38))
{var inst_10475 = (state_10496[2]);var state_10496__$1 = state_10496;var statearr_10515_10595 = state_10496__$1;(statearr_10515_10595[2] = inst_10475);
(statearr_10515_10595[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 7))
{var inst_10492 = (state_10496[2]);var state_10496__$1 = state_10496;var statearr_10516_10596 = state_10496__$1;(statearr_10516_10596[2] = inst_10492);
(statearr_10516_10596[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 39))
{var inst_10453 = (state_10496[9]);var inst_10471 = (state_10496[2]);var inst_10472 = cljs.core.next.call(null,inst_10453);var inst_10432 = inst_10472;var inst_10433 = null;var inst_10434 = 0;var inst_10435 = 0;var state_10496__$1 = (function (){var statearr_10517 = state_10496;(statearr_10517[10] = inst_10433);
(statearr_10517[11] = inst_10434);
(statearr_10517[12] = inst_10435);
(statearr_10517[13] = inst_10432);
(statearr_10517[21] = inst_10471);
return statearr_10517;
})();var statearr_10518_10597 = state_10496__$1;(statearr_10518_10597[2] = null);
(statearr_10518_10597[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 8))
{var inst_10376 = (state_10496[14]);var inst_10375 = (state_10496[15]);var inst_10378 = (inst_10376 < inst_10375);var inst_10379 = inst_10378;var state_10496__$1 = state_10496;if(cljs.core.truth_(inst_10379))
{var statearr_10519_10598 = state_10496__$1;(statearr_10519_10598[1] = 10);
} else
{var statearr_10520_10599 = state_10496__$1;(statearr_10520_10599[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 40))
{var inst_10462 = (state_10496[18]);var inst_10463 = (state_10496[2]);var inst_10464 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10465 = cljs.core.async.untap_STAR_.call(null,m,inst_10462);var state_10496__$1 = (function (){var statearr_10521 = state_10496;(statearr_10521[22] = inst_10464);
(statearr_10521[23] = inst_10463);
return statearr_10521;
})();var statearr_10522_10600 = state_10496__$1;(statearr_10522_10600[2] = inst_10465);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10496__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 9))
{var inst_10421 = (state_10496[2]);var state_10496__$1 = state_10496;var statearr_10523_10601 = state_10496__$1;(statearr_10523_10601[2] = inst_10421);
(statearr_10523_10601[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 41))
{var inst_10364 = (state_10496[7]);var inst_10462 = (state_10496[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10496,40,Object,null,39);var inst_10469 = cljs.core.async.put_BANG_.call(null,inst_10462,inst_10364,done);var state_10496__$1 = state_10496;var statearr_10524_10602 = state_10496__$1;(statearr_10524_10602[2] = inst_10469);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10496__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 10))
{var inst_10376 = (state_10496[14]);var inst_10374 = (state_10496[16]);var inst_10382 = cljs.core._nth.call(null,inst_10374,inst_10376);var inst_10383 = cljs.core.nth.call(null,inst_10382,0,null);var inst_10384 = cljs.core.nth.call(null,inst_10382,1,null);var state_10496__$1 = (function (){var statearr_10525 = state_10496;(statearr_10525[24] = inst_10383);
return statearr_10525;
})();if(cljs.core.truth_(inst_10384))
{var statearr_10526_10603 = state_10496__$1;(statearr_10526_10603[1] = 13);
} else
{var statearr_10527_10604 = state_10496__$1;(statearr_10527_10604[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 42))
{var state_10496__$1 = state_10496;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10496__$1,45,dchan);
} else
{if((state_val_10497 === 11))
{var inst_10373 = (state_10496[17]);var inst_10393 = (state_10496[25]);var inst_10393__$1 = cljs.core.seq.call(null,inst_10373);var state_10496__$1 = (function (){var statearr_10528 = state_10496;(statearr_10528[25] = inst_10393__$1);
return statearr_10528;
})();if(inst_10393__$1)
{var statearr_10529_10605 = state_10496__$1;(statearr_10529_10605[1] = 16);
} else
{var statearr_10530_10606 = state_10496__$1;(statearr_10530_10606[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 43))
{var state_10496__$1 = state_10496;var statearr_10531_10607 = state_10496__$1;(statearr_10531_10607[2] = null);
(statearr_10531_10607[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 12))
{var inst_10419 = (state_10496[2]);var state_10496__$1 = state_10496;var statearr_10532_10608 = state_10496__$1;(statearr_10532_10608[2] = inst_10419);
(statearr_10532_10608[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 44))
{var inst_10489 = (state_10496[2]);var state_10496__$1 = (function (){var statearr_10533 = state_10496;(statearr_10533[26] = inst_10489);
return statearr_10533;
})();var statearr_10534_10609 = state_10496__$1;(statearr_10534_10609[2] = null);
(statearr_10534_10609[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 13))
{var inst_10383 = (state_10496[24]);var inst_10386 = cljs.core.async.close_BANG_.call(null,inst_10383);var state_10496__$1 = state_10496;var statearr_10535_10610 = state_10496__$1;(statearr_10535_10610[2] = inst_10386);
(statearr_10535_10610[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 45))
{var inst_10486 = (state_10496[2]);var state_10496__$1 = state_10496;var statearr_10539_10611 = state_10496__$1;(statearr_10539_10611[2] = inst_10486);
(statearr_10539_10611[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 14))
{var state_10496__$1 = state_10496;var statearr_10540_10612 = state_10496__$1;(statearr_10540_10612[2] = null);
(statearr_10540_10612[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 15))
{var inst_10376 = (state_10496[14]);var inst_10375 = (state_10496[15]);var inst_10374 = (state_10496[16]);var inst_10373 = (state_10496[17]);var inst_10389 = (state_10496[2]);var inst_10390 = (inst_10376 + 1);var tmp10536 = inst_10375;var tmp10537 = inst_10374;var tmp10538 = inst_10373;var inst_10373__$1 = tmp10538;var inst_10374__$1 = tmp10537;var inst_10375__$1 = tmp10536;var inst_10376__$1 = inst_10390;var state_10496__$1 = (function (){var statearr_10541 = state_10496;(statearr_10541[14] = inst_10376__$1);
(statearr_10541[15] = inst_10375__$1);
(statearr_10541[16] = inst_10374__$1);
(statearr_10541[17] = inst_10373__$1);
(statearr_10541[27] = inst_10389);
return statearr_10541;
})();var statearr_10542_10613 = state_10496__$1;(statearr_10542_10613[2] = null);
(statearr_10542_10613[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 16))
{var inst_10393 = (state_10496[25]);var inst_10395 = cljs.core.chunked_seq_QMARK_.call(null,inst_10393);var state_10496__$1 = state_10496;if(inst_10395)
{var statearr_10543_10614 = state_10496__$1;(statearr_10543_10614[1] = 19);
} else
{var statearr_10544_10615 = state_10496__$1;(statearr_10544_10615[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 17))
{var state_10496__$1 = state_10496;var statearr_10545_10616 = state_10496__$1;(statearr_10545_10616[2] = null);
(statearr_10545_10616[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 18))
{var inst_10417 = (state_10496[2]);var state_10496__$1 = state_10496;var statearr_10546_10617 = state_10496__$1;(statearr_10546_10617[2] = inst_10417);
(statearr_10546_10617[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 19))
{var inst_10393 = (state_10496[25]);var inst_10397 = cljs.core.chunk_first.call(null,inst_10393);var inst_10398 = cljs.core.chunk_rest.call(null,inst_10393);var inst_10399 = cljs.core.count.call(null,inst_10397);var inst_10373 = inst_10398;var inst_10374 = inst_10397;var inst_10375 = inst_10399;var inst_10376 = 0;var state_10496__$1 = (function (){var statearr_10547 = state_10496;(statearr_10547[14] = inst_10376);
(statearr_10547[15] = inst_10375);
(statearr_10547[16] = inst_10374);
(statearr_10547[17] = inst_10373);
return statearr_10547;
})();var statearr_10548_10618 = state_10496__$1;(statearr_10548_10618[2] = null);
(statearr_10548_10618[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 20))
{var inst_10393 = (state_10496[25]);var inst_10403 = cljs.core.first.call(null,inst_10393);var inst_10404 = cljs.core.nth.call(null,inst_10403,0,null);var inst_10405 = cljs.core.nth.call(null,inst_10403,1,null);var state_10496__$1 = (function (){var statearr_10549 = state_10496;(statearr_10549[28] = inst_10404);
return statearr_10549;
})();if(cljs.core.truth_(inst_10405))
{var statearr_10550_10619 = state_10496__$1;(statearr_10550_10619[1] = 22);
} else
{var statearr_10551_10620 = state_10496__$1;(statearr_10551_10620[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 21))
{var inst_10414 = (state_10496[2]);var state_10496__$1 = state_10496;var statearr_10552_10621 = state_10496__$1;(statearr_10552_10621[2] = inst_10414);
(statearr_10552_10621[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 22))
{var inst_10404 = (state_10496[28]);var inst_10407 = cljs.core.async.close_BANG_.call(null,inst_10404);var state_10496__$1 = state_10496;var statearr_10553_10622 = state_10496__$1;(statearr_10553_10622[2] = inst_10407);
(statearr_10553_10622[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 23))
{var state_10496__$1 = state_10496;var statearr_10554_10623 = state_10496__$1;(statearr_10554_10623[2] = null);
(statearr_10554_10623[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 24))
{var inst_10393 = (state_10496[25]);var inst_10410 = (state_10496[2]);var inst_10411 = cljs.core.next.call(null,inst_10393);var inst_10373 = inst_10411;var inst_10374 = null;var inst_10375 = 0;var inst_10376 = 0;var state_10496__$1 = (function (){var statearr_10555 = state_10496;(statearr_10555[29] = inst_10410);
(statearr_10555[14] = inst_10376);
(statearr_10555[15] = inst_10375);
(statearr_10555[16] = inst_10374);
(statearr_10555[17] = inst_10373);
return statearr_10555;
})();var statearr_10556_10624 = state_10496__$1;(statearr_10556_10624[2] = null);
(statearr_10556_10624[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 25))
{var inst_10434 = (state_10496[11]);var inst_10435 = (state_10496[12]);var inst_10437 = (inst_10435 < inst_10434);var inst_10438 = inst_10437;var state_10496__$1 = state_10496;if(cljs.core.truth_(inst_10438))
{var statearr_10557_10625 = state_10496__$1;(statearr_10557_10625[1] = 27);
} else
{var statearr_10558_10626 = state_10496__$1;(statearr_10558_10626[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 26))
{var inst_10424 = (state_10496[19]);var inst_10482 = (state_10496[2]);var inst_10483 = cljs.core.seq.call(null,inst_10424);var state_10496__$1 = (function (){var statearr_10559 = state_10496;(statearr_10559[30] = inst_10482);
return statearr_10559;
})();if(inst_10483)
{var statearr_10560_10627 = state_10496__$1;(statearr_10560_10627[1] = 42);
} else
{var statearr_10561_10628 = state_10496__$1;(statearr_10561_10628[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 27))
{var inst_10433 = (state_10496[10]);var inst_10435 = (state_10496[12]);var inst_10440 = cljs.core._nth.call(null,inst_10433,inst_10435);var state_10496__$1 = (function (){var statearr_10562 = state_10496;(statearr_10562[8] = inst_10440);
return statearr_10562;
})();var statearr_10563_10629 = state_10496__$1;(statearr_10563_10629[2] = null);
(statearr_10563_10629[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 28))
{var inst_10453 = (state_10496[9]);var inst_10432 = (state_10496[13]);var inst_10453__$1 = cljs.core.seq.call(null,inst_10432);var state_10496__$1 = (function (){var statearr_10567 = state_10496;(statearr_10567[9] = inst_10453__$1);
return statearr_10567;
})();if(inst_10453__$1)
{var statearr_10568_10630 = state_10496__$1;(statearr_10568_10630[1] = 33);
} else
{var statearr_10569_10631 = state_10496__$1;(statearr_10569_10631[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 29))
{var inst_10480 = (state_10496[2]);var state_10496__$1 = state_10496;var statearr_10570_10632 = state_10496__$1;(statearr_10570_10632[2] = inst_10480);
(statearr_10570_10632[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 30))
{var inst_10433 = (state_10496[10]);var inst_10434 = (state_10496[11]);var inst_10435 = (state_10496[12]);var inst_10432 = (state_10496[13]);var inst_10449 = (state_10496[2]);var inst_10450 = (inst_10435 + 1);var tmp10564 = inst_10433;var tmp10565 = inst_10434;var tmp10566 = inst_10432;var inst_10432__$1 = tmp10566;var inst_10433__$1 = tmp10564;var inst_10434__$1 = tmp10565;var inst_10435__$1 = inst_10450;var state_10496__$1 = (function (){var statearr_10571 = state_10496;(statearr_10571[10] = inst_10433__$1);
(statearr_10571[11] = inst_10434__$1);
(statearr_10571[12] = inst_10435__$1);
(statearr_10571[13] = inst_10432__$1);
(statearr_10571[31] = inst_10449);
return statearr_10571;
})();var statearr_10572_10633 = state_10496__$1;(statearr_10572_10633[2] = null);
(statearr_10572_10633[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 31))
{var inst_10440 = (state_10496[8]);var inst_10441 = (state_10496[2]);var inst_10442 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10443 = cljs.core.async.untap_STAR_.call(null,m,inst_10440);var state_10496__$1 = (function (){var statearr_10573 = state_10496;(statearr_10573[32] = inst_10442);
(statearr_10573[33] = inst_10441);
return statearr_10573;
})();var statearr_10574_10634 = state_10496__$1;(statearr_10574_10634[2] = inst_10443);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10496__$1);
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
});return ((function (switch__5986__auto__){
return (function() {
var state_machine__5987__auto__ = null;
var state_machine__5987__auto____0 = (function (){var statearr_10578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10578[0] = state_machine__5987__auto__);
(statearr_10578[1] = 1);
return statearr_10578;
});
var state_machine__5987__auto____1 = (function (state_10496){while(true){
var ret_value__5988__auto__ = (function (){try{while(true){
var result__5989__auto__ = switch__5986__auto__.call(null,state_10496);if(cljs.core.keyword_identical_QMARK_.call(null,result__5989__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5989__auto__;
}
break;
}
}catch (e10579){if((e10579 instanceof Object))
{var ex__5990__auto__ = e10579;var statearr_10580_10635 = state_10496;(statearr_10580_10635[5] = ex__5990__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10496);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10579;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5988__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10636 = state_10496;
state_10496 = G__10636;
continue;
}
} else
{return ret_value__5988__auto__;
}
break;
}
});
state_machine__5987__auto__ = function(state_10496){
switch(arguments.length){
case 0:
return state_machine__5987__auto____0.call(this);
case 1:
return state_machine__5987__auto____1.call(this,state_10496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5987__auto____0;
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5987__auto____1;
return state_machine__5987__auto__;
})()
;})(switch__5986__auto__))
})();var state__6003__auto__ = (function (){var statearr_10581 = f__6002__auto__.call(null);(statearr_10581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6001__auto___10582);
return statearr_10581;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6003__auto__);
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
cljs.core.async.Mix = (function (){var obj10638 = {};return obj10638;
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
;var m = (function (){if(typeof cljs.core.async.t10748 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10748 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta10749){
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
this.meta10749 = meta10749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10748.cljs$lang$type = true;
cljs.core.async.t10748.cljs$lang$ctorStr = "cljs.core.async/t10748";
cljs.core.async.t10748.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10748");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10748.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10748.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10748.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10748.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10748.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10748.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10748.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10748.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10748.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10750){var self__ = this;
var _10750__$1 = this;return self__.meta10749;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10750,meta10749__$1){var self__ = this;
var _10750__$1 = this;return (new cljs.core.async.t10748(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta10749__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10748 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10748(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10749){return (new cljs.core.async.t10748(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10749));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10748(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6001__auto___10857 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6002__auto__ = (function (){var switch__5986__auto__ = (function (state_10815){var state_val_10816 = (state_10815[1]);if((state_val_10816 === 1))
{var inst_10754 = (state_10815[7]);var inst_10754__$1 = calc_state.call(null);var inst_10755 = cljs.core.seq_QMARK_.call(null,inst_10754__$1);var state_10815__$1 = (function (){var statearr_10817 = state_10815;(statearr_10817[7] = inst_10754__$1);
return statearr_10817;
})();if(inst_10755)
{var statearr_10818_10858 = state_10815__$1;(statearr_10818_10858[1] = 2);
} else
{var statearr_10819_10859 = state_10815__$1;(statearr_10819_10859[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 2))
{var inst_10754 = (state_10815[7]);var inst_10757 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10754);var state_10815__$1 = state_10815;var statearr_10820_10860 = state_10815__$1;(statearr_10820_10860[2] = inst_10757);
(statearr_10820_10860[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 3))
{var inst_10754 = (state_10815[7]);var state_10815__$1 = state_10815;var statearr_10821_10861 = state_10815__$1;(statearr_10821_10861[2] = inst_10754);
(statearr_10821_10861[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 4))
{var inst_10754 = (state_10815[7]);var inst_10760 = (state_10815[2]);var inst_10761 = cljs.core.get.call(null,inst_10760,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10762 = cljs.core.get.call(null,inst_10760,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10763 = cljs.core.get.call(null,inst_10760,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_10764 = inst_10754;var state_10815__$1 = (function (){var statearr_10822 = state_10815;(statearr_10822[8] = inst_10763);
(statearr_10822[9] = inst_10764);
(statearr_10822[10] = inst_10762);
(statearr_10822[11] = inst_10761);
return statearr_10822;
})();var statearr_10823_10862 = state_10815__$1;(statearr_10823_10862[2] = null);
(statearr_10823_10862[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 5))
{var inst_10764 = (state_10815[9]);var inst_10767 = cljs.core.seq_QMARK_.call(null,inst_10764);var state_10815__$1 = state_10815;if(inst_10767)
{var statearr_10824_10863 = state_10815__$1;(statearr_10824_10863[1] = 7);
} else
{var statearr_10825_10864 = state_10815__$1;(statearr_10825_10864[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 6))
{var inst_10813 = (state_10815[2]);var state_10815__$1 = state_10815;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10815__$1,inst_10813);
} else
{if((state_val_10816 === 7))
{var inst_10764 = (state_10815[9]);var inst_10769 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10764);var state_10815__$1 = state_10815;var statearr_10826_10865 = state_10815__$1;(statearr_10826_10865[2] = inst_10769);
(statearr_10826_10865[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 8))
{var inst_10764 = (state_10815[9]);var state_10815__$1 = state_10815;var statearr_10827_10866 = state_10815__$1;(statearr_10827_10866[2] = inst_10764);
(statearr_10827_10866[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 9))
{var inst_10772 = (state_10815[12]);var inst_10772__$1 = (state_10815[2]);var inst_10773 = cljs.core.get.call(null,inst_10772__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10774 = cljs.core.get.call(null,inst_10772__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10775 = cljs.core.get.call(null,inst_10772__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_10815__$1 = (function (){var statearr_10828 = state_10815;(statearr_10828[12] = inst_10772__$1);
(statearr_10828[13] = inst_10774);
(statearr_10828[14] = inst_10775);
return statearr_10828;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10815__$1,10,inst_10773);
} else
{if((state_val_10816 === 10))
{var inst_10779 = (state_10815[15]);var inst_10780 = (state_10815[16]);var inst_10778 = (state_10815[2]);var inst_10779__$1 = cljs.core.nth.call(null,inst_10778,0,null);var inst_10780__$1 = cljs.core.nth.call(null,inst_10778,1,null);var inst_10781 = (inst_10779__$1 == null);var inst_10782 = cljs.core._EQ_.call(null,inst_10780__$1,change);var inst_10783 = (inst_10781) || (inst_10782);var state_10815__$1 = (function (){var statearr_10829 = state_10815;(statearr_10829[15] = inst_10779__$1);
(statearr_10829[16] = inst_10780__$1);
return statearr_10829;
})();if(cljs.core.truth_(inst_10783))
{var statearr_10830_10867 = state_10815__$1;(statearr_10830_10867[1] = 11);
} else
{var statearr_10831_10868 = state_10815__$1;(statearr_10831_10868[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 11))
{var inst_10779 = (state_10815[15]);var inst_10785 = (inst_10779 == null);var state_10815__$1 = state_10815;if(cljs.core.truth_(inst_10785))
{var statearr_10832_10869 = state_10815__$1;(statearr_10832_10869[1] = 14);
} else
{var statearr_10833_10870 = state_10815__$1;(statearr_10833_10870[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 12))
{var inst_10780 = (state_10815[16]);var inst_10794 = (state_10815[17]);var inst_10775 = (state_10815[14]);var inst_10794__$1 = inst_10775.call(null,inst_10780);var state_10815__$1 = (function (){var statearr_10834 = state_10815;(statearr_10834[17] = inst_10794__$1);
return statearr_10834;
})();if(cljs.core.truth_(inst_10794__$1))
{var statearr_10835_10871 = state_10815__$1;(statearr_10835_10871[1] = 17);
} else
{var statearr_10836_10872 = state_10815__$1;(statearr_10836_10872[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 13))
{var inst_10811 = (state_10815[2]);var state_10815__$1 = state_10815;var statearr_10837_10873 = state_10815__$1;(statearr_10837_10873[2] = inst_10811);
(statearr_10837_10873[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 14))
{var inst_10780 = (state_10815[16]);var inst_10787 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10780);var state_10815__$1 = state_10815;var statearr_10838_10874 = state_10815__$1;(statearr_10838_10874[2] = inst_10787);
(statearr_10838_10874[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 15))
{var state_10815__$1 = state_10815;var statearr_10839_10875 = state_10815__$1;(statearr_10839_10875[2] = null);
(statearr_10839_10875[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 16))
{var inst_10790 = (state_10815[2]);var inst_10791 = calc_state.call(null);var inst_10764 = inst_10791;var state_10815__$1 = (function (){var statearr_10840 = state_10815;(statearr_10840[9] = inst_10764);
(statearr_10840[18] = inst_10790);
return statearr_10840;
})();var statearr_10841_10876 = state_10815__$1;(statearr_10841_10876[2] = null);
(statearr_10841_10876[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 17))
{var inst_10794 = (state_10815[17]);var state_10815__$1 = state_10815;var statearr_10842_10877 = state_10815__$1;(statearr_10842_10877[2] = inst_10794);
(statearr_10842_10877[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 18))
{var inst_10780 = (state_10815[16]);var inst_10774 = (state_10815[13]);var inst_10775 = (state_10815[14]);var inst_10797 = cljs.core.empty_QMARK_.call(null,inst_10775);var inst_10798 = inst_10774.call(null,inst_10780);var inst_10799 = cljs.core.not.call(null,inst_10798);var inst_10800 = (inst_10797) && (inst_10799);var state_10815__$1 = state_10815;var statearr_10843_10878 = state_10815__$1;(statearr_10843_10878[2] = inst_10800);
(statearr_10843_10878[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 19))
{var inst_10802 = (state_10815[2]);var state_10815__$1 = state_10815;if(cljs.core.truth_(inst_10802))
{var statearr_10844_10879 = state_10815__$1;(statearr_10844_10879[1] = 20);
} else
{var statearr_10845_10880 = state_10815__$1;(statearr_10845_10880[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 20))
{var inst_10779 = (state_10815[15]);var state_10815__$1 = state_10815;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10815__$1,23,out,inst_10779);
} else
{if((state_val_10816 === 21))
{var state_10815__$1 = state_10815;var statearr_10846_10881 = state_10815__$1;(statearr_10846_10881[2] = null);
(statearr_10846_10881[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 22))
{var inst_10772 = (state_10815[12]);var inst_10808 = (state_10815[2]);var inst_10764 = inst_10772;var state_10815__$1 = (function (){var statearr_10847 = state_10815;(statearr_10847[9] = inst_10764);
(statearr_10847[19] = inst_10808);
return statearr_10847;
})();var statearr_10848_10882 = state_10815__$1;(statearr_10848_10882[2] = null);
(statearr_10848_10882[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 23))
{var inst_10805 = (state_10815[2]);var state_10815__$1 = state_10815;var statearr_10849_10883 = state_10815__$1;(statearr_10849_10883[2] = inst_10805);
(statearr_10849_10883[1] = 22);
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
});return ((function (switch__5986__auto__){
return (function() {
var state_machine__5987__auto__ = null;
var state_machine__5987__auto____0 = (function (){var statearr_10853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10853[0] = state_machine__5987__auto__);
(statearr_10853[1] = 1);
return statearr_10853;
});
var state_machine__5987__auto____1 = (function (state_10815){while(true){
var ret_value__5988__auto__ = (function (){try{while(true){
var result__5989__auto__ = switch__5986__auto__.call(null,state_10815);if(cljs.core.keyword_identical_QMARK_.call(null,result__5989__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5989__auto__;
}
break;
}
}catch (e10854){if((e10854 instanceof Object))
{var ex__5990__auto__ = e10854;var statearr_10855_10884 = state_10815;(statearr_10855_10884[5] = ex__5990__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10815);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10854;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5988__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10885 = state_10815;
state_10815 = G__10885;
continue;
}
} else
{return ret_value__5988__auto__;
}
break;
}
});
state_machine__5987__auto__ = function(state_10815){
switch(arguments.length){
case 0:
return state_machine__5987__auto____0.call(this);
case 1:
return state_machine__5987__auto____1.call(this,state_10815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5987__auto____0;
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5987__auto____1;
return state_machine__5987__auto__;
})()
;})(switch__5986__auto__))
})();var state__6003__auto__ = (function (){var statearr_10856 = f__6002__auto__.call(null);(statearr_10856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6001__auto___10857);
return statearr_10856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6003__auto__);
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
cljs.core.async.Pub = (function (){var obj10887 = {};return obj10887;
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
return (function (p1__10888_SHARP_){if(cljs.core.truth_(p1__10888_SHARP_.call(null,topic)))
{return p1__10888_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__10888_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11013 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11013 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11014){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11014 = meta11014;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11013.cljs$lang$type = true;
cljs.core.async.t11013.cljs$lang$ctorStr = "cljs.core.async/t11013";
cljs.core.async.t11013.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11013");
});})(mults,ensure_mult))
;
cljs.core.async.t11013.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11013.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11013.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11013.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11013.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11013.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11013.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11013.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11015){var self__ = this;
var _11015__$1 = this;return self__.meta11014;
});})(mults,ensure_mult))
;
cljs.core.async.t11013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11015,meta11014__$1){var self__ = this;
var _11015__$1 = this;return (new cljs.core.async.t11013(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11014__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11013 = ((function (mults,ensure_mult){
return (function __GT_t11013(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11014){return (new cljs.core.async.t11013(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11014));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11013(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6001__auto___11137 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6002__auto__ = (function (){var switch__5986__auto__ = (function (state_11089){var state_val_11090 = (state_11089[1]);if((state_val_11090 === 1))
{var state_11089__$1 = state_11089;var statearr_11091_11138 = state_11089__$1;(statearr_11091_11138[2] = null);
(statearr_11091_11138[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11090 === 2))
{var state_11089__$1 = state_11089;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11089__$1,4,ch);
} else
{if((state_val_11090 === 3))
{var inst_11087 = (state_11089[2]);var state_11089__$1 = state_11089;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11089__$1,inst_11087);
} else
{if((state_val_11090 === 4))
{var inst_11018 = (state_11089[7]);var inst_11018__$1 = (state_11089[2]);var inst_11019 = (inst_11018__$1 == null);var state_11089__$1 = (function (){var statearr_11092 = state_11089;(statearr_11092[7] = inst_11018__$1);
return statearr_11092;
})();if(cljs.core.truth_(inst_11019))
{var statearr_11093_11139 = state_11089__$1;(statearr_11093_11139[1] = 5);
} else
{var statearr_11094_11140 = state_11089__$1;(statearr_11094_11140[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11090 === 5))
{var inst_11025 = cljs.core.deref.call(null,mults);var inst_11026 = cljs.core.vals.call(null,inst_11025);var inst_11027 = cljs.core.seq.call(null,inst_11026);var inst_11028 = inst_11027;var inst_11029 = null;var inst_11030 = 0;var inst_11031 = 0;var state_11089__$1 = (function (){var statearr_11095 = state_11089;(statearr_11095[8] = inst_11030);
(statearr_11095[9] = inst_11031);
(statearr_11095[10] = inst_11028);
(statearr_11095[11] = inst_11029);
return statearr_11095;
})();var statearr_11096_11141 = state_11089__$1;(statearr_11096_11141[2] = null);
(statearr_11096_11141[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11090 === 6))
{var inst_11018 = (state_11089[7]);var inst_11068 = (state_11089[12]);var inst_11066 = (state_11089[13]);var inst_11066__$1 = topic_fn.call(null,inst_11018);var inst_11067 = cljs.core.deref.call(null,mults);var inst_11068__$1 = cljs.core.get.call(null,inst_11067,inst_11066__$1);var state_11089__$1 = (function (){var statearr_11097 = state_11089;(statearr_11097[12] = inst_11068__$1);
(statearr_11097[13] = inst_11066__$1);
return statearr_11097;
})();if(cljs.core.truth_(inst_11068__$1))
{var statearr_11098_11142 = state_11089__$1;(statearr_11098_11142[1] = 19);
} else
{var statearr_11099_11143 = state_11089__$1;(statearr_11099_11143[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11090 === 7))
{var inst_11085 = (state_11089[2]);var state_11089__$1 = state_11089;var statearr_11100_11144 = state_11089__$1;(statearr_11100_11144[2] = inst_11085);
(statearr_11100_11144[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11090 === 8))
{var inst_11030 = (state_11089[8]);var inst_11031 = (state_11089[9]);var inst_11033 = (inst_11031 < inst_11030);var inst_11034 = inst_11033;var state_11089__$1 = state_11089;if(cljs.core.truth_(inst_11034))
{var statearr_11104_11145 = state_11089__$1;(statearr_11104_11145[1] = 10);
} else
{var statearr_11105_11146 = state_11089__$1;(statearr_11105_11146[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11090 === 9))
{var inst_11064 = (state_11089[2]);var state_11089__$1 = state_11089;var statearr_11106_11147 = state_11089__$1;(statearr_11106_11147[2] = inst_11064);
(statearr_11106_11147[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11090 === 10))
{var inst_11030 = (state_11089[8]);var inst_11031 = (state_11089[9]);var inst_11028 = (state_11089[10]);var inst_11029 = (state_11089[11]);var inst_11036 = cljs.core._nth.call(null,inst_11029,inst_11031);var inst_11037 = cljs.core.async.muxch_STAR_.call(null,inst_11036);var inst_11038 = cljs.core.async.close_BANG_.call(null,inst_11037);var inst_11039 = (inst_11031 + 1);var tmp11101 = inst_11030;var tmp11102 = inst_11028;var tmp11103 = inst_11029;var inst_11028__$1 = tmp11102;var inst_11029__$1 = tmp11103;var inst_11030__$1 = tmp11101;var inst_11031__$1 = inst_11039;var state_11089__$1 = (function (){var statearr_11107 = state_11089;(statearr_11107[8] = inst_11030__$1);
(statearr_11107[9] = inst_11031__$1);
(statearr_11107[14] = inst_11038);
(statearr_11107[10] = inst_11028__$1);
(statearr_11107[11] = inst_11029__$1);
return statearr_11107;
})();var statearr_11108_11148 = state_11089__$1;(statearr_11108_11148[2] = null);
(statearr_11108_11148[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11090 === 11))
{var inst_11042 = (state_11089[15]);var inst_11028 = (state_11089[10]);var inst_11042__$1 = cljs.core.seq.call(null,inst_11028);var state_11089__$1 = (function (){var statearr_11109 = state_11089;(statearr_11109[15] = inst_11042__$1);
return statearr_11109;
})();if(inst_11042__$1)
{var statearr_11110_11149 = state_11089__$1;(statearr_11110_11149[1] = 13);
} else
{var statearr_11111_11150 = state_11089__$1;(statearr_11111_11150[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11090 === 12))
{var inst_11062 = (state_11089[2]);var state_11089__$1 = state_11089;var statearr_11112_11151 = state_11089__$1;(statearr_11112_11151[2] = inst_11062);
(statearr_11112_11151[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11090 === 13))
{var inst_11042 = (state_11089[15]);var inst_11044 = cljs.core.chunked_seq_QMARK_.call(null,inst_11042);var state_11089__$1 = state_11089;if(inst_11044)
{var statearr_11113_11152 = state_11089__$1;(statearr_11113_11152[1] = 16);
} else
{var statearr_11114_11153 = state_11089__$1;(statearr_11114_11153[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11090 === 14))
{var state_11089__$1 = state_11089;var statearr_11115_11154 = state_11089__$1;(statearr_11115_11154[2] = null);
(statearr_11115_11154[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11090 === 15))
{var inst_11060 = (state_11089[2]);var state_11089__$1 = state_11089;var statearr_11116_11155 = state_11089__$1;(statearr_11116_11155[2] = inst_11060);
(statearr_11116_11155[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11090 === 16))
{var inst_11042 = (state_11089[15]);var inst_11046 = cljs.core.chunk_first.call(null,inst_11042);var inst_11047 = cljs.core.chunk_rest.call(null,inst_11042);var inst_11048 = cljs.core.count.call(null,inst_11046);var inst_11028 = inst_11047;var inst_11029 = inst_11046;var inst_11030 = inst_11048;var inst_11031 = 0;var state_11089__$1 = (function (){var statearr_11117 = state_11089;(statearr_11117[8] = inst_11030);
(statearr_11117[9] = inst_11031);
(statearr_11117[10] = inst_11028);
(statearr_11117[11] = inst_11029);
return statearr_11117;
})();var statearr_11118_11156 = state_11089__$1;(statearr_11118_11156[2] = null);
(statearr_11118_11156[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11090 === 17))
{var inst_11042 = (state_11089[15]);var inst_11051 = cljs.core.first.call(null,inst_11042);var inst_11052 = cljs.core.async.muxch_STAR_.call(null,inst_11051);var inst_11053 = cljs.core.async.close_BANG_.call(null,inst_11052);var inst_11054 = cljs.core.next.call(null,inst_11042);var inst_11028 = inst_11054;var inst_11029 = null;var inst_11030 = 0;var inst_11031 = 0;var state_11089__$1 = (function (){var statearr_11119 = state_11089;(statearr_11119[16] = inst_11053);
(statearr_11119[8] = inst_11030);
(statearr_11119[9] = inst_11031);
(statearr_11119[10] = inst_11028);
(statearr_11119[11] = inst_11029);
return statearr_11119;
})();var statearr_11120_11157 = state_11089__$1;(statearr_11120_11157[2] = null);
(statearr_11120_11157[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11090 === 18))
{var inst_11057 = (state_11089[2]);var state_11089__$1 = state_11089;var statearr_11121_11158 = state_11089__$1;(statearr_11121_11158[2] = inst_11057);
(statearr_11121_11158[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11090 === 19))
{var state_11089__$1 = state_11089;var statearr_11122_11159 = state_11089__$1;(statearr_11122_11159[2] = null);
(statearr_11122_11159[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11090 === 20))
{var state_11089__$1 = state_11089;var statearr_11123_11160 = state_11089__$1;(statearr_11123_11160[2] = null);
(statearr_11123_11160[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11090 === 21))
{var inst_11082 = (state_11089[2]);var state_11089__$1 = (function (){var statearr_11124 = state_11089;(statearr_11124[17] = inst_11082);
return statearr_11124;
})();var statearr_11125_11161 = state_11089__$1;(statearr_11125_11161[2] = null);
(statearr_11125_11161[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11090 === 22))
{var inst_11079 = (state_11089[2]);var state_11089__$1 = state_11089;var statearr_11126_11162 = state_11089__$1;(statearr_11126_11162[2] = inst_11079);
(statearr_11126_11162[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11090 === 23))
{var inst_11066 = (state_11089[13]);var inst_11070 = (state_11089[2]);var inst_11071 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11066);var state_11089__$1 = (function (){var statearr_11127 = state_11089;(statearr_11127[18] = inst_11070);
return statearr_11127;
})();var statearr_11128_11163 = state_11089__$1;(statearr_11128_11163[2] = inst_11071);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11089__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11090 === 24))
{var inst_11018 = (state_11089[7]);var inst_11068 = (state_11089[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11089,23,Object,null,22);var inst_11075 = cljs.core.async.muxch_STAR_.call(null,inst_11068);var state_11089__$1 = state_11089;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11089__$1,25,inst_11075,inst_11018);
} else
{if((state_val_11090 === 25))
{var inst_11077 = (state_11089[2]);var state_11089__$1 = state_11089;var statearr_11129_11164 = state_11089__$1;(statearr_11129_11164[2] = inst_11077);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11089__$1);
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
});return ((function (switch__5986__auto__){
return (function() {
var state_machine__5987__auto__ = null;
var state_machine__5987__auto____0 = (function (){var statearr_11133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11133[0] = state_machine__5987__auto__);
(statearr_11133[1] = 1);
return statearr_11133;
});
var state_machine__5987__auto____1 = (function (state_11089){while(true){
var ret_value__5988__auto__ = (function (){try{while(true){
var result__5989__auto__ = switch__5986__auto__.call(null,state_11089);if(cljs.core.keyword_identical_QMARK_.call(null,result__5989__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5989__auto__;
}
break;
}
}catch (e11134){if((e11134 instanceof Object))
{var ex__5990__auto__ = e11134;var statearr_11135_11165 = state_11089;(statearr_11135_11165[5] = ex__5990__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11089);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11134;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5988__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11166 = state_11089;
state_11089 = G__11166;
continue;
}
} else
{return ret_value__5988__auto__;
}
break;
}
});
state_machine__5987__auto__ = function(state_11089){
switch(arguments.length){
case 0:
return state_machine__5987__auto____0.call(this);
case 1:
return state_machine__5987__auto____1.call(this,state_11089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5987__auto____0;
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5987__auto____1;
return state_machine__5987__auto__;
})()
;})(switch__5986__auto__))
})();var state__6003__auto__ = (function (){var statearr_11136 = f__6002__auto__.call(null);(statearr_11136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6001__auto___11137);
return statearr_11136;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6003__auto__);
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
,cljs.core.range.call(null,cnt));var c__6001__auto___11303 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6002__auto__ = (function (){var switch__5986__auto__ = (function (state_11273){var state_val_11274 = (state_11273[1]);if((state_val_11274 === 1))
{var state_11273__$1 = state_11273;var statearr_11275_11304 = state_11273__$1;(statearr_11275_11304[2] = null);
(statearr_11275_11304[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11274 === 2))
{var inst_11236 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11237 = 0;var state_11273__$1 = (function (){var statearr_11276 = state_11273;(statearr_11276[7] = inst_11236);
(statearr_11276[8] = inst_11237);
return statearr_11276;
})();var statearr_11277_11305 = state_11273__$1;(statearr_11277_11305[2] = null);
(statearr_11277_11305[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11274 === 3))
{var inst_11271 = (state_11273[2]);var state_11273__$1 = state_11273;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11273__$1,inst_11271);
} else
{if((state_val_11274 === 4))
{var inst_11237 = (state_11273[8]);var inst_11239 = (inst_11237 < cnt);var state_11273__$1 = state_11273;if(cljs.core.truth_(inst_11239))
{var statearr_11278_11306 = state_11273__$1;(statearr_11278_11306[1] = 6);
} else
{var statearr_11279_11307 = state_11273__$1;(statearr_11279_11307[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11274 === 5))
{var inst_11257 = (state_11273[2]);var state_11273__$1 = (function (){var statearr_11280 = state_11273;(statearr_11280[9] = inst_11257);
return statearr_11280;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11273__$1,12,dchan);
} else
{if((state_val_11274 === 6))
{var state_11273__$1 = state_11273;var statearr_11281_11308 = state_11273__$1;(statearr_11281_11308[2] = null);
(statearr_11281_11308[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11274 === 7))
{var state_11273__$1 = state_11273;var statearr_11282_11309 = state_11273__$1;(statearr_11282_11309[2] = null);
(statearr_11282_11309[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11274 === 8))
{var inst_11255 = (state_11273[2]);var state_11273__$1 = state_11273;var statearr_11283_11310 = state_11273__$1;(statearr_11283_11310[2] = inst_11255);
(statearr_11283_11310[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11274 === 9))
{var inst_11237 = (state_11273[8]);var inst_11250 = (state_11273[2]);var inst_11251 = (inst_11237 + 1);var inst_11237__$1 = inst_11251;var state_11273__$1 = (function (){var statearr_11284 = state_11273;(statearr_11284[10] = inst_11250);
(statearr_11284[8] = inst_11237__$1);
return statearr_11284;
})();var statearr_11285_11311 = state_11273__$1;(statearr_11285_11311[2] = null);
(statearr_11285_11311[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11274 === 10))
{var inst_11241 = (state_11273[2]);var inst_11242 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11273__$1 = (function (){var statearr_11286 = state_11273;(statearr_11286[11] = inst_11241);
return statearr_11286;
})();var statearr_11287_11312 = state_11273__$1;(statearr_11287_11312[2] = inst_11242);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11273__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11274 === 11))
{var inst_11237 = (state_11273[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11273,10,Object,null,9);var inst_11246 = chs__$1.call(null,inst_11237);var inst_11247 = done.call(null,inst_11237);var inst_11248 = cljs.core.async.take_BANG_.call(null,inst_11246,inst_11247);var state_11273__$1 = state_11273;var statearr_11288_11313 = state_11273__$1;(statearr_11288_11313[2] = inst_11248);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11273__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11274 === 12))
{var inst_11259 = (state_11273[12]);var inst_11259__$1 = (state_11273[2]);var inst_11260 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11259__$1);var state_11273__$1 = (function (){var statearr_11289 = state_11273;(statearr_11289[12] = inst_11259__$1);
return statearr_11289;
})();if(cljs.core.truth_(inst_11260))
{var statearr_11290_11314 = state_11273__$1;(statearr_11290_11314[1] = 13);
} else
{var statearr_11291_11315 = state_11273__$1;(statearr_11291_11315[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11274 === 13))
{var inst_11262 = cljs.core.async.close_BANG_.call(null,out);var state_11273__$1 = state_11273;var statearr_11292_11316 = state_11273__$1;(statearr_11292_11316[2] = inst_11262);
(statearr_11292_11316[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11274 === 14))
{var inst_11259 = (state_11273[12]);var inst_11264 = cljs.core.apply.call(null,f,inst_11259);var state_11273__$1 = state_11273;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11273__$1,16,out,inst_11264);
} else
{if((state_val_11274 === 15))
{var inst_11269 = (state_11273[2]);var state_11273__$1 = state_11273;var statearr_11293_11317 = state_11273__$1;(statearr_11293_11317[2] = inst_11269);
(statearr_11293_11317[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11274 === 16))
{var inst_11266 = (state_11273[2]);var state_11273__$1 = (function (){var statearr_11294 = state_11273;(statearr_11294[13] = inst_11266);
return statearr_11294;
})();var statearr_11295_11318 = state_11273__$1;(statearr_11295_11318[2] = null);
(statearr_11295_11318[1] = 2);
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
});return ((function (switch__5986__auto__){
return (function() {
var state_machine__5987__auto__ = null;
var state_machine__5987__auto____0 = (function (){var statearr_11299 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11299[0] = state_machine__5987__auto__);
(statearr_11299[1] = 1);
return statearr_11299;
});
var state_machine__5987__auto____1 = (function (state_11273){while(true){
var ret_value__5988__auto__ = (function (){try{while(true){
var result__5989__auto__ = switch__5986__auto__.call(null,state_11273);if(cljs.core.keyword_identical_QMARK_.call(null,result__5989__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5989__auto__;
}
break;
}
}catch (e11300){if((e11300 instanceof Object))
{var ex__5990__auto__ = e11300;var statearr_11301_11319 = state_11273;(statearr_11301_11319[5] = ex__5990__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11273);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11300;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5988__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11320 = state_11273;
state_11273 = G__11320;
continue;
}
} else
{return ret_value__5988__auto__;
}
break;
}
});
state_machine__5987__auto__ = function(state_11273){
switch(arguments.length){
case 0:
return state_machine__5987__auto____0.call(this);
case 1:
return state_machine__5987__auto____1.call(this,state_11273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5987__auto____0;
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5987__auto____1;
return state_machine__5987__auto__;
})()
;})(switch__5986__auto__))
})();var state__6003__auto__ = (function (){var statearr_11302 = f__6002__auto__.call(null);(statearr_11302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6001__auto___11303);
return statearr_11302;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6003__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6001__auto___11428 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6002__auto__ = (function (){var switch__5986__auto__ = (function (state_11404){var state_val_11405 = (state_11404[1]);if((state_val_11405 === 1))
{var inst_11375 = cljs.core.vec.call(null,chs);var inst_11376 = inst_11375;var state_11404__$1 = (function (){var statearr_11406 = state_11404;(statearr_11406[7] = inst_11376);
return statearr_11406;
})();var statearr_11407_11429 = state_11404__$1;(statearr_11407_11429[2] = null);
(statearr_11407_11429[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11405 === 2))
{var inst_11376 = (state_11404[7]);var inst_11378 = cljs.core.count.call(null,inst_11376);var inst_11379 = (inst_11378 > 0);var state_11404__$1 = state_11404;if(cljs.core.truth_(inst_11379))
{var statearr_11408_11430 = state_11404__$1;(statearr_11408_11430[1] = 4);
} else
{var statearr_11409_11431 = state_11404__$1;(statearr_11409_11431[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11405 === 3))
{var inst_11402 = (state_11404[2]);var state_11404__$1 = state_11404;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11404__$1,inst_11402);
} else
{if((state_val_11405 === 4))
{var inst_11376 = (state_11404[7]);var state_11404__$1 = state_11404;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11404__$1,7,inst_11376);
} else
{if((state_val_11405 === 5))
{var inst_11398 = cljs.core.async.close_BANG_.call(null,out);var state_11404__$1 = state_11404;var statearr_11410_11432 = state_11404__$1;(statearr_11410_11432[2] = inst_11398);
(statearr_11410_11432[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11405 === 6))
{var inst_11400 = (state_11404[2]);var state_11404__$1 = state_11404;var statearr_11411_11433 = state_11404__$1;(statearr_11411_11433[2] = inst_11400);
(statearr_11411_11433[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11405 === 7))
{var inst_11384 = (state_11404[8]);var inst_11383 = (state_11404[9]);var inst_11383__$1 = (state_11404[2]);var inst_11384__$1 = cljs.core.nth.call(null,inst_11383__$1,0,null);var inst_11385 = cljs.core.nth.call(null,inst_11383__$1,1,null);var inst_11386 = (inst_11384__$1 == null);var state_11404__$1 = (function (){var statearr_11412 = state_11404;(statearr_11412[8] = inst_11384__$1);
(statearr_11412[10] = inst_11385);
(statearr_11412[9] = inst_11383__$1);
return statearr_11412;
})();if(cljs.core.truth_(inst_11386))
{var statearr_11413_11434 = state_11404__$1;(statearr_11413_11434[1] = 8);
} else
{var statearr_11414_11435 = state_11404__$1;(statearr_11414_11435[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11405 === 8))
{var inst_11384 = (state_11404[8]);var inst_11385 = (state_11404[10]);var inst_11383 = (state_11404[9]);var inst_11376 = (state_11404[7]);var inst_11388 = (function (){var c = inst_11385;var v = inst_11384;var vec__11381 = inst_11383;var cs = inst_11376;return ((function (c,v,vec__11381,cs,inst_11384,inst_11385,inst_11383,inst_11376,state_val_11405){
return (function (p1__11321_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11321_SHARP_);
});
;})(c,v,vec__11381,cs,inst_11384,inst_11385,inst_11383,inst_11376,state_val_11405))
})();var inst_11389 = cljs.core.filterv.call(null,inst_11388,inst_11376);var inst_11376__$1 = inst_11389;var state_11404__$1 = (function (){var statearr_11415 = state_11404;(statearr_11415[7] = inst_11376__$1);
return statearr_11415;
})();var statearr_11416_11436 = state_11404__$1;(statearr_11416_11436[2] = null);
(statearr_11416_11436[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11405 === 9))
{var inst_11384 = (state_11404[8]);var state_11404__$1 = state_11404;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11404__$1,11,out,inst_11384);
} else
{if((state_val_11405 === 10))
{var inst_11396 = (state_11404[2]);var state_11404__$1 = state_11404;var statearr_11418_11437 = state_11404__$1;(statearr_11418_11437[2] = inst_11396);
(statearr_11418_11437[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11405 === 11))
{var inst_11376 = (state_11404[7]);var inst_11393 = (state_11404[2]);var tmp11417 = inst_11376;var inst_11376__$1 = tmp11417;var state_11404__$1 = (function (){var statearr_11419 = state_11404;(statearr_11419[7] = inst_11376__$1);
(statearr_11419[11] = inst_11393);
return statearr_11419;
})();var statearr_11420_11438 = state_11404__$1;(statearr_11420_11438[2] = null);
(statearr_11420_11438[1] = 2);
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
});return ((function (switch__5986__auto__){
return (function() {
var state_machine__5987__auto__ = null;
var state_machine__5987__auto____0 = (function (){var statearr_11424 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11424[0] = state_machine__5987__auto__);
(statearr_11424[1] = 1);
return statearr_11424;
});
var state_machine__5987__auto____1 = (function (state_11404){while(true){
var ret_value__5988__auto__ = (function (){try{while(true){
var result__5989__auto__ = switch__5986__auto__.call(null,state_11404);if(cljs.core.keyword_identical_QMARK_.call(null,result__5989__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5989__auto__;
}
break;
}
}catch (e11425){if((e11425 instanceof Object))
{var ex__5990__auto__ = e11425;var statearr_11426_11439 = state_11404;(statearr_11426_11439[5] = ex__5990__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11404);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11425;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5988__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11440 = state_11404;
state_11404 = G__11440;
continue;
}
} else
{return ret_value__5988__auto__;
}
break;
}
});
state_machine__5987__auto__ = function(state_11404){
switch(arguments.length){
case 0:
return state_machine__5987__auto____0.call(this);
case 1:
return state_machine__5987__auto____1.call(this,state_11404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5987__auto____0;
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5987__auto____1;
return state_machine__5987__auto__;
})()
;})(switch__5986__auto__))
})();var state__6003__auto__ = (function (){var statearr_11427 = f__6002__auto__.call(null);(statearr_11427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6001__auto___11428);
return statearr_11427;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6003__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6001__auto___11533 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6002__auto__ = (function (){var switch__5986__auto__ = (function (state_11510){var state_val_11511 = (state_11510[1]);if((state_val_11511 === 1))
{var inst_11487 = 0;var state_11510__$1 = (function (){var statearr_11512 = state_11510;(statearr_11512[7] = inst_11487);
return statearr_11512;
})();var statearr_11513_11534 = state_11510__$1;(statearr_11513_11534[2] = null);
(statearr_11513_11534[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11511 === 2))
{var inst_11487 = (state_11510[7]);var inst_11489 = (inst_11487 < n);var state_11510__$1 = state_11510;if(cljs.core.truth_(inst_11489))
{var statearr_11514_11535 = state_11510__$1;(statearr_11514_11535[1] = 4);
} else
{var statearr_11515_11536 = state_11510__$1;(statearr_11515_11536[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11511 === 3))
{var inst_11507 = (state_11510[2]);var inst_11508 = cljs.core.async.close_BANG_.call(null,out);var state_11510__$1 = (function (){var statearr_11516 = state_11510;(statearr_11516[8] = inst_11507);
return statearr_11516;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11510__$1,inst_11508);
} else
{if((state_val_11511 === 4))
{var state_11510__$1 = state_11510;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11510__$1,7,ch);
} else
{if((state_val_11511 === 5))
{var state_11510__$1 = state_11510;var statearr_11517_11537 = state_11510__$1;(statearr_11517_11537[2] = null);
(statearr_11517_11537[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11511 === 6))
{var inst_11505 = (state_11510[2]);var state_11510__$1 = state_11510;var statearr_11518_11538 = state_11510__$1;(statearr_11518_11538[2] = inst_11505);
(statearr_11518_11538[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11511 === 7))
{var inst_11492 = (state_11510[9]);var inst_11492__$1 = (state_11510[2]);var inst_11493 = (inst_11492__$1 == null);var inst_11494 = cljs.core.not.call(null,inst_11493);var state_11510__$1 = (function (){var statearr_11519 = state_11510;(statearr_11519[9] = inst_11492__$1);
return statearr_11519;
})();if(inst_11494)
{var statearr_11520_11539 = state_11510__$1;(statearr_11520_11539[1] = 8);
} else
{var statearr_11521_11540 = state_11510__$1;(statearr_11521_11540[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11511 === 8))
{var inst_11492 = (state_11510[9]);var state_11510__$1 = state_11510;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11510__$1,11,out,inst_11492);
} else
{if((state_val_11511 === 9))
{var state_11510__$1 = state_11510;var statearr_11522_11541 = state_11510__$1;(statearr_11522_11541[2] = null);
(statearr_11522_11541[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11511 === 10))
{var inst_11502 = (state_11510[2]);var state_11510__$1 = state_11510;var statearr_11523_11542 = state_11510__$1;(statearr_11523_11542[2] = inst_11502);
(statearr_11523_11542[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11511 === 11))
{var inst_11487 = (state_11510[7]);var inst_11497 = (state_11510[2]);var inst_11498 = (inst_11487 + 1);var inst_11487__$1 = inst_11498;var state_11510__$1 = (function (){var statearr_11524 = state_11510;(statearr_11524[10] = inst_11497);
(statearr_11524[7] = inst_11487__$1);
return statearr_11524;
})();var statearr_11525_11543 = state_11510__$1;(statearr_11525_11543[2] = null);
(statearr_11525_11543[1] = 2);
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
});return ((function (switch__5986__auto__){
return (function() {
var state_machine__5987__auto__ = null;
var state_machine__5987__auto____0 = (function (){var statearr_11529 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11529[0] = state_machine__5987__auto__);
(statearr_11529[1] = 1);
return statearr_11529;
});
var state_machine__5987__auto____1 = (function (state_11510){while(true){
var ret_value__5988__auto__ = (function (){try{while(true){
var result__5989__auto__ = switch__5986__auto__.call(null,state_11510);if(cljs.core.keyword_identical_QMARK_.call(null,result__5989__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5989__auto__;
}
break;
}
}catch (e11530){if((e11530 instanceof Object))
{var ex__5990__auto__ = e11530;var statearr_11531_11544 = state_11510;(statearr_11531_11544[5] = ex__5990__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11510);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11530;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5988__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11545 = state_11510;
state_11510 = G__11545;
continue;
}
} else
{return ret_value__5988__auto__;
}
break;
}
});
state_machine__5987__auto__ = function(state_11510){
switch(arguments.length){
case 0:
return state_machine__5987__auto____0.call(this);
case 1:
return state_machine__5987__auto____1.call(this,state_11510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5987__auto____0;
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5987__auto____1;
return state_machine__5987__auto__;
})()
;})(switch__5986__auto__))
})();var state__6003__auto__ = (function (){var statearr_11532 = f__6002__auto__.call(null);(statearr_11532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6001__auto___11533);
return statearr_11532;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6003__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6001__auto___11642 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6002__auto__ = (function (){var switch__5986__auto__ = (function (state_11617){var state_val_11618 = (state_11617[1]);if((state_val_11618 === 1))
{var inst_11594 = null;var state_11617__$1 = (function (){var statearr_11619 = state_11617;(statearr_11619[7] = inst_11594);
return statearr_11619;
})();var statearr_11620_11643 = state_11617__$1;(statearr_11620_11643[2] = null);
(statearr_11620_11643[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11618 === 2))
{var state_11617__$1 = state_11617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11617__$1,4,ch);
} else
{if((state_val_11618 === 3))
{var inst_11614 = (state_11617[2]);var inst_11615 = cljs.core.async.close_BANG_.call(null,out);var state_11617__$1 = (function (){var statearr_11621 = state_11617;(statearr_11621[8] = inst_11614);
return statearr_11621;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11617__$1,inst_11615);
} else
{if((state_val_11618 === 4))
{var inst_11597 = (state_11617[9]);var inst_11597__$1 = (state_11617[2]);var inst_11598 = (inst_11597__$1 == null);var inst_11599 = cljs.core.not.call(null,inst_11598);var state_11617__$1 = (function (){var statearr_11622 = state_11617;(statearr_11622[9] = inst_11597__$1);
return statearr_11622;
})();if(inst_11599)
{var statearr_11623_11644 = state_11617__$1;(statearr_11623_11644[1] = 5);
} else
{var statearr_11624_11645 = state_11617__$1;(statearr_11624_11645[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11618 === 5))
{var inst_11594 = (state_11617[7]);var inst_11597 = (state_11617[9]);var inst_11601 = cljs.core._EQ_.call(null,inst_11597,inst_11594);var state_11617__$1 = state_11617;if(inst_11601)
{var statearr_11625_11646 = state_11617__$1;(statearr_11625_11646[1] = 8);
} else
{var statearr_11626_11647 = state_11617__$1;(statearr_11626_11647[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11618 === 6))
{var state_11617__$1 = state_11617;var statearr_11628_11648 = state_11617__$1;(statearr_11628_11648[2] = null);
(statearr_11628_11648[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11618 === 7))
{var inst_11612 = (state_11617[2]);var state_11617__$1 = state_11617;var statearr_11629_11649 = state_11617__$1;(statearr_11629_11649[2] = inst_11612);
(statearr_11629_11649[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11618 === 8))
{var inst_11594 = (state_11617[7]);var tmp11627 = inst_11594;var inst_11594__$1 = tmp11627;var state_11617__$1 = (function (){var statearr_11630 = state_11617;(statearr_11630[7] = inst_11594__$1);
return statearr_11630;
})();var statearr_11631_11650 = state_11617__$1;(statearr_11631_11650[2] = null);
(statearr_11631_11650[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11618 === 9))
{var inst_11597 = (state_11617[9]);var state_11617__$1 = state_11617;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11617__$1,11,out,inst_11597);
} else
{if((state_val_11618 === 10))
{var inst_11609 = (state_11617[2]);var state_11617__$1 = state_11617;var statearr_11632_11651 = state_11617__$1;(statearr_11632_11651[2] = inst_11609);
(statearr_11632_11651[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11618 === 11))
{var inst_11597 = (state_11617[9]);var inst_11606 = (state_11617[2]);var inst_11594 = inst_11597;var state_11617__$1 = (function (){var statearr_11633 = state_11617;(statearr_11633[7] = inst_11594);
(statearr_11633[10] = inst_11606);
return statearr_11633;
})();var statearr_11634_11652 = state_11617__$1;(statearr_11634_11652[2] = null);
(statearr_11634_11652[1] = 2);
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
});return ((function (switch__5986__auto__){
return (function() {
var state_machine__5987__auto__ = null;
var state_machine__5987__auto____0 = (function (){var statearr_11638 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11638[0] = state_machine__5987__auto__);
(statearr_11638[1] = 1);
return statearr_11638;
});
var state_machine__5987__auto____1 = (function (state_11617){while(true){
var ret_value__5988__auto__ = (function (){try{while(true){
var result__5989__auto__ = switch__5986__auto__.call(null,state_11617);if(cljs.core.keyword_identical_QMARK_.call(null,result__5989__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5989__auto__;
}
break;
}
}catch (e11639){if((e11639 instanceof Object))
{var ex__5990__auto__ = e11639;var statearr_11640_11653 = state_11617;(statearr_11640_11653[5] = ex__5990__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11617);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11639;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5988__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11654 = state_11617;
state_11617 = G__11654;
continue;
}
} else
{return ret_value__5988__auto__;
}
break;
}
});
state_machine__5987__auto__ = function(state_11617){
switch(arguments.length){
case 0:
return state_machine__5987__auto____0.call(this);
case 1:
return state_machine__5987__auto____1.call(this,state_11617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5987__auto____0;
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5987__auto____1;
return state_machine__5987__auto__;
})()
;})(switch__5986__auto__))
})();var state__6003__auto__ = (function (){var statearr_11641 = f__6002__auto__.call(null);(statearr_11641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6001__auto___11642);
return statearr_11641;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6003__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6001__auto___11789 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6002__auto__ = (function (){var switch__5986__auto__ = (function (state_11759){var state_val_11760 = (state_11759[1]);if((state_val_11760 === 1))
{var inst_11722 = (new Array(n));var inst_11723 = inst_11722;var inst_11724 = 0;var state_11759__$1 = (function (){var statearr_11761 = state_11759;(statearr_11761[7] = inst_11723);
(statearr_11761[8] = inst_11724);
return statearr_11761;
})();var statearr_11762_11790 = state_11759__$1;(statearr_11762_11790[2] = null);
(statearr_11762_11790[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11760 === 2))
{var state_11759__$1 = state_11759;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11759__$1,4,ch);
} else
{if((state_val_11760 === 3))
{var inst_11757 = (state_11759[2]);var state_11759__$1 = state_11759;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11759__$1,inst_11757);
} else
{if((state_val_11760 === 4))
{var inst_11727 = (state_11759[9]);var inst_11727__$1 = (state_11759[2]);var inst_11728 = (inst_11727__$1 == null);var inst_11729 = cljs.core.not.call(null,inst_11728);var state_11759__$1 = (function (){var statearr_11763 = state_11759;(statearr_11763[9] = inst_11727__$1);
return statearr_11763;
})();if(inst_11729)
{var statearr_11764_11791 = state_11759__$1;(statearr_11764_11791[1] = 5);
} else
{var statearr_11765_11792 = state_11759__$1;(statearr_11765_11792[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11760 === 5))
{var inst_11732 = (state_11759[10]);var inst_11723 = (state_11759[7]);var inst_11724 = (state_11759[8]);var inst_11727 = (state_11759[9]);var inst_11731 = (inst_11723[inst_11724] = inst_11727);var inst_11732__$1 = (inst_11724 + 1);var inst_11733 = (inst_11732__$1 < n);var state_11759__$1 = (function (){var statearr_11766 = state_11759;(statearr_11766[11] = inst_11731);
(statearr_11766[10] = inst_11732__$1);
return statearr_11766;
})();if(cljs.core.truth_(inst_11733))
{var statearr_11767_11793 = state_11759__$1;(statearr_11767_11793[1] = 8);
} else
{var statearr_11768_11794 = state_11759__$1;(statearr_11768_11794[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11760 === 6))
{var inst_11724 = (state_11759[8]);var inst_11745 = (inst_11724 > 0);var state_11759__$1 = state_11759;if(cljs.core.truth_(inst_11745))
{var statearr_11770_11795 = state_11759__$1;(statearr_11770_11795[1] = 12);
} else
{var statearr_11771_11796 = state_11759__$1;(statearr_11771_11796[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11760 === 7))
{var inst_11755 = (state_11759[2]);var state_11759__$1 = state_11759;var statearr_11772_11797 = state_11759__$1;(statearr_11772_11797[2] = inst_11755);
(statearr_11772_11797[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11760 === 8))
{var inst_11732 = (state_11759[10]);var inst_11723 = (state_11759[7]);var tmp11769 = inst_11723;var inst_11723__$1 = tmp11769;var inst_11724 = inst_11732;var state_11759__$1 = (function (){var statearr_11773 = state_11759;(statearr_11773[7] = inst_11723__$1);
(statearr_11773[8] = inst_11724);
return statearr_11773;
})();var statearr_11774_11798 = state_11759__$1;(statearr_11774_11798[2] = null);
(statearr_11774_11798[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11760 === 9))
{var inst_11723 = (state_11759[7]);var inst_11737 = cljs.core.vec.call(null,inst_11723);var state_11759__$1 = state_11759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11759__$1,11,out,inst_11737);
} else
{if((state_val_11760 === 10))
{var inst_11743 = (state_11759[2]);var state_11759__$1 = state_11759;var statearr_11775_11799 = state_11759__$1;(statearr_11775_11799[2] = inst_11743);
(statearr_11775_11799[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11760 === 11))
{var inst_11739 = (state_11759[2]);var inst_11740 = (new Array(n));var inst_11723 = inst_11740;var inst_11724 = 0;var state_11759__$1 = (function (){var statearr_11776 = state_11759;(statearr_11776[7] = inst_11723);
(statearr_11776[8] = inst_11724);
(statearr_11776[12] = inst_11739);
return statearr_11776;
})();var statearr_11777_11800 = state_11759__$1;(statearr_11777_11800[2] = null);
(statearr_11777_11800[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11760 === 12))
{var inst_11723 = (state_11759[7]);var inst_11747 = cljs.core.vec.call(null,inst_11723);var state_11759__$1 = state_11759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11759__$1,15,out,inst_11747);
} else
{if((state_val_11760 === 13))
{var state_11759__$1 = state_11759;var statearr_11778_11801 = state_11759__$1;(statearr_11778_11801[2] = null);
(statearr_11778_11801[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11760 === 14))
{var inst_11752 = (state_11759[2]);var inst_11753 = cljs.core.async.close_BANG_.call(null,out);var state_11759__$1 = (function (){var statearr_11779 = state_11759;(statearr_11779[13] = inst_11752);
return statearr_11779;
})();var statearr_11780_11802 = state_11759__$1;(statearr_11780_11802[2] = inst_11753);
(statearr_11780_11802[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11760 === 15))
{var inst_11749 = (state_11759[2]);var state_11759__$1 = state_11759;var statearr_11781_11803 = state_11759__$1;(statearr_11781_11803[2] = inst_11749);
(statearr_11781_11803[1] = 14);
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
});return ((function (switch__5986__auto__){
return (function() {
var state_machine__5987__auto__ = null;
var state_machine__5987__auto____0 = (function (){var statearr_11785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11785[0] = state_machine__5987__auto__);
(statearr_11785[1] = 1);
return statearr_11785;
});
var state_machine__5987__auto____1 = (function (state_11759){while(true){
var ret_value__5988__auto__ = (function (){try{while(true){
var result__5989__auto__ = switch__5986__auto__.call(null,state_11759);if(cljs.core.keyword_identical_QMARK_.call(null,result__5989__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5989__auto__;
}
break;
}
}catch (e11786){if((e11786 instanceof Object))
{var ex__5990__auto__ = e11786;var statearr_11787_11804 = state_11759;(statearr_11787_11804[5] = ex__5990__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11759);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11786;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5988__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11805 = state_11759;
state_11759 = G__11805;
continue;
}
} else
{return ret_value__5988__auto__;
}
break;
}
});
state_machine__5987__auto__ = function(state_11759){
switch(arguments.length){
case 0:
return state_machine__5987__auto____0.call(this);
case 1:
return state_machine__5987__auto____1.call(this,state_11759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5987__auto____0;
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5987__auto____1;
return state_machine__5987__auto__;
})()
;})(switch__5986__auto__))
})();var state__6003__auto__ = (function (){var statearr_11788 = f__6002__auto__.call(null);(statearr_11788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6001__auto___11789);
return statearr_11788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6003__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6001__auto___11948 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6002__auto__ = (function (){var switch__5986__auto__ = (function (state_11918){var state_val_11919 = (state_11918[1]);if((state_val_11919 === 1))
{var inst_11877 = [];var inst_11878 = inst_11877;var inst_11879 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_11918__$1 = (function (){var statearr_11920 = state_11918;(statearr_11920[7] = inst_11879);
(statearr_11920[8] = inst_11878);
return statearr_11920;
})();var statearr_11921_11949 = state_11918__$1;(statearr_11921_11949[2] = null);
(statearr_11921_11949[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11919 === 2))
{var state_11918__$1 = state_11918;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11918__$1,4,ch);
} else
{if((state_val_11919 === 3))
{var inst_11916 = (state_11918[2]);var state_11918__$1 = state_11918;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11918__$1,inst_11916);
} else
{if((state_val_11919 === 4))
{var inst_11882 = (state_11918[9]);var inst_11882__$1 = (state_11918[2]);var inst_11883 = (inst_11882__$1 == null);var inst_11884 = cljs.core.not.call(null,inst_11883);var state_11918__$1 = (function (){var statearr_11922 = state_11918;(statearr_11922[9] = inst_11882__$1);
return statearr_11922;
})();if(inst_11884)
{var statearr_11923_11950 = state_11918__$1;(statearr_11923_11950[1] = 5);
} else
{var statearr_11924_11951 = state_11918__$1;(statearr_11924_11951[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11919 === 5))
{var inst_11879 = (state_11918[7]);var inst_11886 = (state_11918[10]);var inst_11882 = (state_11918[9]);var inst_11886__$1 = f.call(null,inst_11882);var inst_11887 = cljs.core._EQ_.call(null,inst_11886__$1,inst_11879);var inst_11888 = cljs.core.keyword_identical_QMARK_.call(null,inst_11879,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_11889 = (inst_11887) || (inst_11888);var state_11918__$1 = (function (){var statearr_11925 = state_11918;(statearr_11925[10] = inst_11886__$1);
return statearr_11925;
})();if(cljs.core.truth_(inst_11889))
{var statearr_11926_11952 = state_11918__$1;(statearr_11926_11952[1] = 8);
} else
{var statearr_11927_11953 = state_11918__$1;(statearr_11927_11953[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11919 === 6))
{var inst_11878 = (state_11918[8]);var inst_11903 = inst_11878.length;var inst_11904 = (inst_11903 > 0);var state_11918__$1 = state_11918;if(cljs.core.truth_(inst_11904))
{var statearr_11929_11954 = state_11918__$1;(statearr_11929_11954[1] = 12);
} else
{var statearr_11930_11955 = state_11918__$1;(statearr_11930_11955[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11919 === 7))
{var inst_11914 = (state_11918[2]);var state_11918__$1 = state_11918;var statearr_11931_11956 = state_11918__$1;(statearr_11931_11956[2] = inst_11914);
(statearr_11931_11956[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11919 === 8))
{var inst_11878 = (state_11918[8]);var inst_11886 = (state_11918[10]);var inst_11882 = (state_11918[9]);var inst_11891 = inst_11878.push(inst_11882);var tmp11928 = inst_11878;var inst_11878__$1 = tmp11928;var inst_11879 = inst_11886;var state_11918__$1 = (function (){var statearr_11932 = state_11918;(statearr_11932[11] = inst_11891);
(statearr_11932[7] = inst_11879);
(statearr_11932[8] = inst_11878__$1);
return statearr_11932;
})();var statearr_11933_11957 = state_11918__$1;(statearr_11933_11957[2] = null);
(statearr_11933_11957[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11919 === 9))
{var inst_11878 = (state_11918[8]);var inst_11894 = cljs.core.vec.call(null,inst_11878);var state_11918__$1 = state_11918;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11918__$1,11,out,inst_11894);
} else
{if((state_val_11919 === 10))
{var inst_11901 = (state_11918[2]);var state_11918__$1 = state_11918;var statearr_11934_11958 = state_11918__$1;(statearr_11934_11958[2] = inst_11901);
(statearr_11934_11958[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11919 === 11))
{var inst_11886 = (state_11918[10]);var inst_11882 = (state_11918[9]);var inst_11896 = (state_11918[2]);var inst_11897 = [];var inst_11898 = inst_11897.push(inst_11882);var inst_11878 = inst_11897;var inst_11879 = inst_11886;var state_11918__$1 = (function (){var statearr_11935 = state_11918;(statearr_11935[12] = inst_11896);
(statearr_11935[13] = inst_11898);
(statearr_11935[7] = inst_11879);
(statearr_11935[8] = inst_11878);
return statearr_11935;
})();var statearr_11936_11959 = state_11918__$1;(statearr_11936_11959[2] = null);
(statearr_11936_11959[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11919 === 12))
{var inst_11878 = (state_11918[8]);var inst_11906 = cljs.core.vec.call(null,inst_11878);var state_11918__$1 = state_11918;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11918__$1,15,out,inst_11906);
} else
{if((state_val_11919 === 13))
{var state_11918__$1 = state_11918;var statearr_11937_11960 = state_11918__$1;(statearr_11937_11960[2] = null);
(statearr_11937_11960[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11919 === 14))
{var inst_11911 = (state_11918[2]);var inst_11912 = cljs.core.async.close_BANG_.call(null,out);var state_11918__$1 = (function (){var statearr_11938 = state_11918;(statearr_11938[14] = inst_11911);
return statearr_11938;
})();var statearr_11939_11961 = state_11918__$1;(statearr_11939_11961[2] = inst_11912);
(statearr_11939_11961[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11919 === 15))
{var inst_11908 = (state_11918[2]);var state_11918__$1 = state_11918;var statearr_11940_11962 = state_11918__$1;(statearr_11940_11962[2] = inst_11908);
(statearr_11940_11962[1] = 14);
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
});return ((function (switch__5986__auto__){
return (function() {
var state_machine__5987__auto__ = null;
var state_machine__5987__auto____0 = (function (){var statearr_11944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11944[0] = state_machine__5987__auto__);
(statearr_11944[1] = 1);
return statearr_11944;
});
var state_machine__5987__auto____1 = (function (state_11918){while(true){
var ret_value__5988__auto__ = (function (){try{while(true){
var result__5989__auto__ = switch__5986__auto__.call(null,state_11918);if(cljs.core.keyword_identical_QMARK_.call(null,result__5989__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5989__auto__;
}
break;
}
}catch (e11945){if((e11945 instanceof Object))
{var ex__5990__auto__ = e11945;var statearr_11946_11963 = state_11918;(statearr_11946_11963[5] = ex__5990__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11918);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11945;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5988__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11964 = state_11918;
state_11918 = G__11964;
continue;
}
} else
{return ret_value__5988__auto__;
}
break;
}
});
state_machine__5987__auto__ = function(state_11918){
switch(arguments.length){
case 0:
return state_machine__5987__auto____0.call(this);
case 1:
return state_machine__5987__auto____1.call(this,state_11918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5987__auto____0;
state_machine__5987__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5987__auto____1;
return state_machine__5987__auto__;
})()
;})(switch__5986__auto__))
})();var state__6003__auto__ = (function (){var statearr_11947 = f__6002__auto__.call(null);(statearr_11947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6001__auto___11948);
return statearr_11947;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6003__auto__);
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