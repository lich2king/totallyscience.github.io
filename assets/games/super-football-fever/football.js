!function (i) {
    var n = {};
    function r(t) {
        if (n[t]) return n[t].exports;
        var e = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return i[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports;
    }
    r.m = i, r.c = n, r.d = function (t, e, i) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        });
    }, r.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var n in e) r.d(i, n, function (t) {
            return e[t];
        }.bind(null, n));
        return i;
    }, r.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default;
        } : function () {
            return t;
        };
        return r.d(e, "a", e), e;
    }, r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, r.p = "", r(r.s = 29);
}([function (t, e, i) {
    "use strict";
    i.d(e, "d", function () {
        return r;
    }), i.d(e, "a", function () {
        return o;
    }), i.d(e, "c", function () {
        return s;
    }), i.d(e, "b", function () {
        return a;
    }), i.d(e, "e", function () {
        return c;
    }), i.d(e, "g", function () {
        return u;
    }), i.d(e, "f", function () {
        return h;
    });
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */    var n = function (t, e) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (t, e) {
            t.__proto__ = e;
        } || function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        })(t, e);
    };
    function r(t, e) {
        function i() {
            this.constructor = t;
        }
        n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i());
    }
    var o = function () {
        return (o = Object.assign || function (t) {
            for (var e, i = 1, n = arguments.length; i < n; i++) for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t;
        }).apply(this, arguments);
    };
    function s(t, e, i, n) {
        var r, o = arguments.length, s = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n); else for (var a = t.length - 1; 0 <= a; a--) (r = t[a]) && (s = (o < 3 ? r(s) : 3 < o ? r(e, i, s) : r(e, i)) || s);
        return 3 < o && s && Object.defineProperty(e, i, s), s;
    }
    function a(o, s, a, c) {
        return new (a || (a = Promise))(function (t, e) {
            function i(t) {
                try {
                    r(c.next(t));
                } catch (t) {
                    e(t);
                }
            }
            function n(t) {
                try {
                    r(c.throw(t));
                } catch (t) {
                    e(t);
                }
            }
            function r(e) {
                e.done ? t(e.value) : new a(function (t) {
                    t(e.value);
                }).then(i, n);
            }
            r((c = c.apply(o, s || [])).next());
        });
    }
    function c(i, n) {
        var r, o, s, t, a = {
            label: 0,
            sent: function () {
                if (1 & s[0]) throw s[1];
                return s[1];
            },
            trys: [],
            ops: []
        };
        return t = {
            next: e(0),
            throw: e(1),
            return: e(2)
        }, "function" == typeof Symbol && (t[Symbol.iterator] = function () {
            return this;
        }), t;
        function e(e) {
            return function (t) {
                return function (e) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (r = 1, o && (s = 2 & e[0] ? o.return : e[0] ? o.throw || ((s = o.return) && s.call(o),
                            0) : o.next) && !(s = s.call(o, e[1])).done) return s;
                        switch (o = 0, s && (e = [2 & e[0], s.value]), e[0]) {
                            case 0:
                            case 1:
                                s = e;
                                break;

                            case 4:
                                return a.label++, {
                                    value: e[1],
                                    done: !1
                                };

                            case 5:
                                a.label++, o = e[1], e = [0];
                                continue;

                            case 7:
                                e = a.ops.pop(), a.trys.pop();
                                continue;

                            default:
                                if (!(s = 0 < (s = a.trys).length && s[s.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                    a = 0;
                                    continue;
                                }
                                if (3 === e[0] && (!s || e[1] > s[0] && e[1] < s[3])) {
                                    a.label = e[1];
                                    break;
                                }
                                if (6 === e[0] && a.label < s[1]) {
                                    a.label = s[1], s = e;
                                    break;
                                }
                                if (s && a.label < s[2]) {
                                    a.label = s[2], a.ops.push(e);
                                    break;
                                }
                                s[2] && a.ops.pop(), a.trys.pop();
                                continue;
                        }
                        e = n.call(i, a);
                    } catch (t) {
                        e = [6, t], o = 0;
                    } finally {
                            r = s = 0;
                        }
                    if (5 & e[0]) throw e[1];
                    return {
                        value: e[0] ? e[1] : void 0,
                        done: !0
                    };
                }([e, t]);
            };
        }
    }
    function u(t) {
        var e = "function" == typeof Symbol && t[Symbol.iterator], i = 0;
        return e ? e.call(t) : {
            next: function () {
                return t && i >= t.length && (t = void 0), {
                    value: t && t[i++],
                    done: !t
                };
            }
        };
    }
    function h(t, e) {
        var i = "function" == typeof Symbol && t[Symbol.iterator];
        if (!i) return t;
        var n, r, o = i.call(t), s = [];
        try {
            for (; (void 0 === e || 0 < e--) && !(n = o.next()).done;) s.push(n.value);
        } catch (t) {
            r = {
                error: t
            };
        } finally {
            try {
                n && !n.done && (i = o.return) && i.call(o);
            } finally {
                if (r) throw r.error;
            }
        }
        return s;
    }
}, function (t, e, i) {
    "use strict";
    var n = i(3);
    i.d(e, "initClientLib", function () {
        return n.c;
    }), i.d(e, "hostEnv", function () {
        return n.b;
    }), i.d(e, "setHostEnv", function () {
        return n.d;
    }), i.d(e, "getHostEnv", function () {
        return n.a;
    }), i.d(e, "waitLogged", function () {
        return n.e;
    });
    var r = i(7);
    i.d(e, "Analysis", function () {
        return r.a;
    }), i.d(e, "flushAnalysis", function () {
        return r.c;
    }), i.d(e, "getLinkKey", function () {
        return r.d;
    }), i.d(e, "sendAnalysis", function () {
        return r.e;
    }), i.d(e, "setLinkKey", function () {
        return r.g;
    });
    var o = i(12);
    i.d(e, "analysisShareEvent", function () {
        return o.a;
    }), i.d(e, "sendSpecialEvent", function () {
        return o.b;
    }), i.d(e, "sendSpecialEventImmediately", function () {
        return o.c;
    });
    var s = i(16);
    i.d(e, "buildRefreshingGameList", function () {
        return s.a;
    }), i.d(e, "getMoreGamesConfig", function () {
        return s.b;
    }), i.d(e, "getRandomMoreGameIconItem", function () {
        return s.c;
    });
    var a = i(17);
    i.d(e, "getShareWordsConfig", function () {
        return a.a;
    });
    var c = i(18);
    i.d(e, "getOperationConfig", function () {
        return c.a;
    });
    var u = i(19);
    i.o(u, "amIFromBigCity") && i.d(e, "amIFromBigCity", function () {
        return u.amIFromBigCity;
    }), i.o(u, "checkTokenValid") && i.d(e, "checkTokenValid", function () {
        return u.checkTokenValid;
    }), i.o(u, "delMessages") && i.d(e, "delMessages", function () {
        return u.delMessages;
    }), i.o(u, "getMessageCnt") && i.d(e, "getMessageCnt", function () {
        return u.getMessageCnt;
    }), i.o(u, "getMessages") && i.d(e, "getMessages", function () {
        return u.getMessages;
    }), i.o(u, "getOpenGId") && i.d(e, "getOpenGId", function () {
        return u.getOpenGId;
    }), i.o(u, "getTime") && i.d(e, "getTime", function () {
        return u.getTime;
    }), i.o(u, "getUserData") && i.d(e, "getUserData", function () {
        return u.getUserData;
    }), i.o(u, "getUserInfo") && i.d(e, "getUserInfo", function () {
        return u.getUserInfo;
    }), i.o(u, "initGameCenter") && i.d(e, "initGameCenter", function () {
        return u.initGameCenter;
    }), i.o(u, "isInBlackList") && i.d(e, "isInBlackList", function () {
        return u.isInBlackList;
    }), i.o(u, "isNearDay") && i.d(e, "isNearDay", function () {
        return u.isNearDay;
    }), i.o(u, "isOurApp") && i.d(e, "isOurApp", function () {
        return u.isOurApp;
    }), i.o(u, "isSameDay") && i.d(e, "isSameDay", function () {
        return u.isSameDay;
    }), i.o(u, "loginAccount") && i.d(e, "loginAccount", function () {
        return u.loginAccount;
    }), i.o(u, "pushMessage") && i.d(e, "pushMessage", function () {
        return u.pushMessage;
    }), i.o(u, "randomSelect") && i.d(e, "randomSelect", function () {
        return u.randomSelect;
    }), i.o(u, "randomUsers") && i.d(e, "randomUsers", function () {
        return u.randomUsers;
    }), i.o(u, "sendApi") && i.d(e, "sendApi", function () {
        return u.sendApi;
    }), i.o(u, "setUserData") && i.d(e, "setUserData", function () {
        return u.setUserData;
    }), i.o(u, "syncUserInfo") && i.d(e, "syncUserInfo", function () {
        return u.syncUserInfo;
    }), i.o(u, "toQueryString") && i.d(e, "toQueryString", function () {
        return u.toQueryString;
    }), i.o(u, "whatIsMyReferer") && i.d(e, "whatIsMyReferer", function () {
        return u.whatIsMyReferer;
    });
    var h = i(21);
    i.d(e, "checkTokenValid", function () {
        return h.a;
    }), i.d(e, "delMessages", function () {
        return h.b;
    }), i.d(e, "getMessageCnt", function () {
        return h.c;
    }), i.d(e, "getMessages", function () {
        return h.d;
    }), i.d(e, "getOpenGId", function () {
        return h.e;
    }), i.d(e, "getTime", function () {
        return h.f;
    }), i.d(e, "getUserData", function () {
        return h.g;
    }), i.d(e, "getUserInfo", function () {
        return h.h;
    }), i.d(e, "initGameCenter", function () {
        return h.i;
    }), i.d(e, "loginAccount", function () {
        return h.j;
    }), i.d(e, "pushMessage", function () {
        return h.k;
    }), i.d(e, "randomUsers", function () {
        return h.l;
    }), i.d(e, "sendApi", function () {
        return h.m;
    }), i.d(e, "setUserData", function () {
        return h.n;
    }), i.d(e, "syncUserInfo", function () {
        return h.o;
    });
    i(14);
    var l = i(22);
    i.d(e, "isNearDay", function () {
        return l.a;
    }), i.d(e, "isSameDay", function () {
        return l.b;
    });
    var p = i(8);
    i.d(e, "randomSelect", function () {
        return p.b;
    });
    i(23), i(13);
    var d = i(11);
    i.d(e, "amIFromBigCity", function () {
        return d.a;
    }), i.d(e, "isInBlackList", function () {
        return d.c;
    }), i.d(e, "isOurApp", function () {
        return d.d;
    }), i.d(e, "toQueryString", function () {
        return d.e;
    }), i.d(e, "whatIsMyReferer", function () {
        return d.f;
    });
    i(9), i(24);
    var f = i(4);
    i.d(e, "Logger", function () {
        return f.a;
    });
    i(25), i(26);
}, function (t, oi, si) {
    "use strict";
    (function (t, i) {
        si.d(oi, "e", function () {
            return Je;
        }), si.d(oi, "g", function () {
            return J;
        }), si.d(oi, "b", function () {
            return it;
        }), si.d(oi, "f", function () {
            return ce;
        }), si.d(oi, "c", function () {
            return re;
        }), si.d(oi, "a", function () {
            return Zt;
        }), si.d(oi, "h", function () {
            return ie;
        }), si.d(oi, "l", function () {
            return ge;
        }), si.d(oi, "j", function () {
            return he;
        }), si.d(oi, "i", function () {
            return le;
        }), si.d(oi, "d", function () {
            return pe;
        }), si.d(oi, "k", function () {
            return ye;
        });
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */        var n = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (t, e) {
            t.__proto__ = e;
        } || function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        };
        function e(t, e) {
            function i() {
                this.constructor = t;
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
                new i());
        }
        var c = Object.assign || function (t) {
            for (var e, i = 1, n = arguments.length; i < n; i++) for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t;
        };
        function o(t, e) {
            var i = "function" == typeof Symbol && t[Symbol.iterator];
            if (!i) return t;
            var n, r, o = i.call(t), s = [];
            try {
                for (; (void 0 === e || 0 < e--) && !(n = o.next()).done;) s.push(n.value);
            } catch (t) {
                r = {
                    error: t
                };
            } finally {
                try {
                    n && !n.done && (i = o.return) && i.call(o);
                } finally {
                    if (r) throw r.error;
                }
            }
            return s;
        }
        function s() {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(o(arguments[e]));
            return t;
        }
        var r = "An invariant failed, however the error is obfuscated because this is an production build.", u = [];
        Object.freeze(u);
        var d = {};
        function a() {
            return "undefined" != typeof window ? window : t;
        }
        function f() {
            return ++Ct.mobxGuid;
        }
        function h(t) {
            throw l(!1, t), "X";
        }
        function l(t, e) {
            if (!t) throw new Error("[mobx] " + (e || r));
        }
        Object.freeze(d);
        function p(t) {
            var e = !1;
            return function () {
                if (!e) return e = !0, t.apply(this, arguments);
            };
        }
        var y = function () { };
        function v(t) {
            return null !== t && "object" == typeof t;
        }
        function g(t) {
            if (null === t || "object" != typeof t) return !1;
            var e = Object.getPrototypeOf(t);
            return e === Object.prototype || null === e;
        }
        function m(t, e, i) {
            Object.defineProperty(t, e, {
                enumerable: !1,
                writable: !0,
                configurable: !0,
                value: i
            });
        }
        function b(t, e, i) {
            Object.defineProperty(t, e, {
                enumerable: !1,
                writable: !1,
                configurable: !0,
                value: i
            });
        }
        function w(t, e) {
            var i = "isMobX" + t;
            return e.prototype[i] = !0, function (t) {
                return v(t) && !0 === t[i];
            };
        }
        function _(t) {
            return void 0 !== a().Map && t instanceof a().Map;
        }
        function S(t) {
            return t instanceof Set;
        }
        function T(t) {
            for (var e = []; ;) {
                var i = t.next();
                if (i.done) break;
                e.push(i.value);
            }
            return e;
        }
        function x() {
            return "function" == typeof Symbol && Symbol.toPrimitive || "@@toPrimitive";
        }
        function L(t) {
            return null === t ? null : "object" == typeof t ? "" + t : t;
        }
        function k() {
            return "function" == typeof Symbol && Symbol.iterator || "@@iterator";
        }
        function O(t, e) {
            b(t, k(), e);
        }
        function I(t) {
            return t[k()] = C, t;
        }
        function D() {
            return "function" == typeof Symbol && Symbol.toStringTag || "@@toStringTag";
        }
        function C() {
            return this;
        }
        var E = function () {
            function t(t) {
                void 0 === t && (t = "Atom@" + f()), this.name = t, this.isPendingUnobservation = !1,
                    this.isBeingObserved = !1, this.observers = [], this.observersIndexes = {}, this.diffValue = 0,
                    this.lastAccessedBy = 0, this.lowestObserverState = lt.NOT_TRACKING;
            }
            return t.prototype.onBecomeUnobserved = function () { }, t.prototype.onBecomeObserved = function () { },
                t.prototype.reportObserved = function () {
                    return Mt(this);
                }, t.prototype.reportChanged = function () {
                    jt(), function (t) {
                        if (t.lowestObserverState === lt.STALE) return;
                        t.lowestObserverState = lt.STALE;
                        var e = t.observers, i = e.length;
                        for (; i--;) {
                            var n = e[i];
                            n.dependenciesState === lt.UP_TO_DATE && (n.isTracing !== dt.NONE && Rt(n, t), n.onBecomeStale()),
                                n.dependenciesState = lt.STALE;
                        }
                    }(this), At();
                }, t.prototype.toString = function () {
                    return this.name;
                }, t;
        }(), P = w("Atom", E);
        function B(t, e, i) {
            void 0 === e && (e = y), void 0 === i && (i = y);
            var n = new E(t);
            return function (t, e, i) {
                ne("onBecomeObserved", t, e, i);
            }(n, e), function (t, e, i) {
                ne("onBecomeUnobserved", t, e, i);
            }(n, i), n;
        }
        function j(t, e) {
            return t === e;
        }
        var A = {
            identity: j,
            structural: function (t, e) {
                return ii(t, e);
            },
            default: function (t, e) {
                return function (t, e) {
                    return "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e);
                }(t, e) || j(t, e);
            }
        }, M = {}, R = {};
        function N(t) {
            if (!0 !== t.__mobxDidRunLazyInitializers) {
                var e = t.__mobxDecorators;
                if (e) for (var i in m(t, "__mobxDidRunLazyInitializers", !0), e) {
                    var n = e[i];
                    n.propertyCreator(t, n.prop, n.descriptor, n.decoratorTarget, n.decoratorArguments);
                }
            }
        }
        function V(s, a) {
            return function () {
                var o, t = function (t, e, i, n) {
                    if (!0 === n) return a(t, e, i, t, o), null;
                    if (!Object.prototype.hasOwnProperty.call(t, "__mobxDecorators")) {
                        var r = t.__mobxDecorators;
                        m(t, "__mobxDecorators", c({}, r));
                    }
                    return t.__mobxDecorators[e] = {
                        prop: e,
                        propertyCreator: a,
                        descriptor: i,
                        decoratorTarget: t,
                        decoratorArguments: o
                    }, function (e, t) {
                        var i = t ? M : R;
                        return i[e] || (i[e] = {
                            configurable: !0,
                            enumerable: t,
                            get: function () {
                                return N(this), this[e];
                            },
                            set: function (t) {
                                N(this), this[e] = t;
                            }
                        });
                    }(e, s);
                };
                return function (t) {
                    return (2 === t.length || 3 === t.length) && "string" == typeof t[1] || 4 === t.length && !0 === t[3];
                }(arguments) ? (o = u, t.apply(null, arguments)) : (o = Array.prototype.slice.call(arguments),
                    t);
            };
        }
        function U(t, e, i) {
            return ae(t) ? t : Array.isArray(t) ? J.array(t, {
                name: i
            }) : g(t) ? J.object(t, void 0, {
                name: i
            }) : _(t) ? J.map(t, {
                name: i
            }) : S(t) ? J.set(t, {
                name: i
            }) : t;
        }
        function G(t) {
            return t;
        }
        function z(o) {
            var t = V(!0, function (t, e, i, n, r) {
                We(t, e, i ? i.initializer ? i.initializer.call(t) : i.value : void 0, o);
            }), e = (void 0 !== i && i.env, t);
            return e.enhancer = o, e;
        }
        var F = {
            deep: !0,
            name: void 0,
            defaultDecorator: void 0
        }, H = {
            deep: !1,
            name: void 0,
            defaultDecorator: void 0
        };
        function $(t) {
            return null == t ? F : "string" == typeof t ? {
                name: t,
                deep: !0
            } : t;
        }
        function K(t) {
            return t.defaultDecorator ? t.defaultDecorator.enhancer : !1 === t.deep ? G : U;
        }
        Object.freeze(F), Object.freeze(H);
        var W = z(U), X = z(function (t, e, i) {
            return null == t ? t : Je(t) || Ne(t) || Ge(t) || He(t) ? t : Array.isArray(t) ? J.array(t, {
                name: i,
                deep: !1
            }) : g(t) ? J.object(t, void 0, {
                name: i,
                deep: !1
            }) : _(t) ? J.map(t, {
                name: i,
                deep: !1
            }) : S(t) ? J.set(t, {
                name: i,
                deep: !1
            }) : h(!1);
        }), q = z(G), Y = z(function (t, e, i) {
            return ii(t, e) ? e : t;
        });
        var Q = {
            box: function (t, e) {
                2 < arguments.length && Z("box");
                var i = $(e);
                return new ct(t, K(i), i.name, !0, i.equals);
            },
            shallowBox: function (t, e) {
                return 2 < arguments.length && Z("shallowBox"), J.box(t, {
                    name: e,
                    deep: !1
                });
            },
            array: function (t, e) {
                2 < arguments.length && Z("array");
                var i = $(e);
                return new Be(t, K(i), i.name);
            },
            shallowArray: function (t, e) {
                return 2 < arguments.length && Z("shallowArray"), J.array(t, {
                    name: e,
                    deep: !1
                });
            },
            map: function (t, e) {
                2 < arguments.length && Z("map");
                var i = $(e);
                return new Ue(t, K(i), i.name);
            },
            shallowMap: function (t, e) {
                return 2 < arguments.length && Z("shallowMap"), J.map(t, {
                    name: e,
                    deep: !1
                });
            },
            set: function (t, e) {
                2 < arguments.length && Z("set");
                var i = $(e);
                return new Fe(t, K(i), i.name);
            },
            object: function (t, e, i) {
                return "string" == typeof e && Z("object"), re({}, t, e, $(i));
            },
            shallowObject: function (t, e) {
                return "string" == typeof e && Z("shallowObject"), J.object(t, {}, {
                    name: e,
                    deep: !1
                });
            },
            ref: q,
            shallow: X,
            deep: W,
            struct: Y
        }, J = function (t, e, i) {
            if ("string" == typeof e) return W.apply(null, arguments);
            if (ae(t)) return t;
            var n = g(t) ? J.object(t, e, i) : Array.isArray(t) ? J.array(t, e) : _(t) ? J.map(t, e) : S(t) ? J.set(t, e) : t;
            if (n !== t) return n;
            h(!1);
        };
        function Z(t) {
            h("Expected one or two arguments to observable." + t + ". Did you accidentally try to use observable." + t + " as decorator?");
        }
        Object.keys(Q).forEach(function (t) {
            return J[t] = Q[t];
        });
        var tt = V(!1, function (t, e, i, n, r) {
            var o = i.get, s = i.set, a = r[0] || {};
            !function (t, e, i) {
                var n = Ke(t);
                i.name = n.name + "." + e, i.context = t, n.values[e] = new ht(i), Object.defineProperty(t, e, function (e) {
                    return qe[e] || (qe[e] = {
                        configurable: !1,
                        enumerable: !1,
                        get: function () {
                            return Ye(this).read(this, e);
                        },
                        set: function (t) {
                            Ye(this).write(this, e, t);
                        }
                    });
                }(e));
            }(t, e, c({
                get: o,
                set: s
            }, a));
        }), et = tt({
            equals: A.structural
        }), it = function (t, e, i) {
            if ("string" == typeof e) return tt.apply(null, arguments);
            if (null !== t && "object" == typeof t && 1 === arguments.length) return tt.apply(null, arguments);
            var n = "object" == typeof e ? e : {};
            return n.get = t, n.set = "function" == typeof e ? e : n.set, n.name = n.name || t.name || "",
                new ht(n);
        };
        function nt(t, e) {
            var i = function () {
                return rt(t, e, this, arguments);
            };
            return i.isMobxAction = !0, i;
        }
        function rt(t, e, i, n) {
            var r = function (t, e, i, n) {
                var r = Ht() && !!t, o = 0;
                if (r) {
                    o = Date.now();
                    var s = n && n.length || 0, a = new Array(s);
                    if (0 < s) for (var c = 0; c < s; c++) a[c] = n[c];
                    Kt({
                        type: "action",
                        name: t,
                        object: i,
                        arguments: a
                    });
                }
                var u = Tt();
                jt();
                var h = st(!0);
                return {
                    prevDerivation: u,
                    prevAllowStateChanges: h,
                    notifySpy: r,
                    startTime: o
                };
            }(t, 0, i, n), o = !0;
            try {
                var s = e.apply(i, n);
                return o = !1, s;
            } finally {
                o ? (Ct.suppressReactionErrors = o, ot(r), Ct.suppressReactionErrors = !1) : ot(r);
            }
        }
        function ot(t) {
            at(t.prevAllowStateChanges), At(), xt(t.prevDerivation), t.notifySpy && Xt({
                time: Date.now() - t.startTime
            });
        }
        function st(t) {
            var e = Ct.allowStateChanges;
            return Ct.allowStateChanges = t, e;
        }
        function at(t) {
            Ct.allowStateChanges = t;
        }
        it.struct = et;
        var ct = function (s) {
            function t(t, e, i, n, r) {
                void 0 === i && (i = "ObservableValue@" + f()), void 0 === n && (n = !0), void 0 === r && (r = A.default);
                var o = s.call(this, i) || this;
                return o.enhancer = e, o.name = i, o.equals = r, o.hasUnreportedChange = !1, o.value = e(t, void 0, i),
                    n && Ht() && $t({
                        type: "create",
                        name: o.name,
                        newValue: "" + o.value
                    }), o;
            }
            return e(t, s), t.prototype.dehanceValue = function (t) {
                return void 0 !== this.dehancer ? this.dehancer(t) : t;
            }, t.prototype.set = function (t) {
                var e = this.value;
                if ((t = this.prepareNewValue(t)) !== Ct.UNCHANGED) {
                    var i = Ht();
                    i && Kt({
                        type: "update",
                        name: this.name,
                        newValue: t,
                        oldValue: e
                    }), this.setNewValue(t), i && Xt();
                }
            }, t.prototype.prepareNewValue = function (t) {
                if (bt(this), be(this)) {
                    var e = _e(this, {
                        object: this,
                        type: "update",
                        newValue: t
                    });
                    if (!e) return Ct.UNCHANGED;
                    t = e.newValue;
                }
                return t = this.enhancer(t, this.value, this.name), this.equals(this.value, t) ? Ct.UNCHANGED : t;
            }, t.prototype.setNewValue = function (t) {
                var e = this.value;
                this.value = t, this.reportChanged(), Se(this) && xe(this, {
                    type: "update",
                    object: this,
                    newValue: t,
                    oldValue: e
                });
            }, t.prototype.get = function () {
                return this.reportObserved(), this.dehanceValue(this.value);
            }, t.prototype.intercept = function (t) {
                return we(this, t);
            }, t.prototype.observe = function (t, e) {
                return e && t({
                    object: this,
                    type: "update",
                    newValue: this.value,
                    oldValue: void 0
                }), Te(this, t);
            }, t.prototype.toJSON = function () {
                return this.get();
            }, t.prototype.toString = function () {
                return this.name + "[" + this.value + "]";
            }, t.prototype.valueOf = function () {
                return L(this.get());
            }, t;
        }(E);
        ct.prototype[x()] = ct.prototype.valueOf;
        var ut = w("ObservableValue", ct), ht = function () {
            function t(t) {
                this.dependenciesState = lt.NOT_TRACKING, this.observing = [], this.newObserving = null,
                    this.isBeingObserved = !1, this.isPendingUnobservation = !1, this.observers = [],
                    this.observersIndexes = {}, this.diffValue = 0, this.runId = 0, this.lastAccessedBy = 0,
                    this.lowestObserverState = lt.UP_TO_DATE, this.unboundDepsCount = 0, this.__mapid = "#" + f(),
                    this.value = new vt(null), this.isComputing = !1, this.isRunningSetter = !1, this.isTracing = dt.NONE,
                    this.derivation = t.get, this.name = t.name || "ComputedValue@" + f(), t.set && (this.setter = nt(this.name + "-setter", t.set)),
                    this.equals = t.equals || (t.compareStructural || t.struct ? A.structural : A.default),
                    this.scope = t.context, this.requiresReaction = !!t.requiresReaction, this.keepAlive = !!t.keepAlive;
            }
            return t.prototype.onBecomeStale = function () {
                !function (t) {
                    if (t.lowestObserverState !== lt.UP_TO_DATE) return;
                    t.lowestObserverState = lt.POSSIBLY_STALE;
                    var e = t.observers, i = e.length;
                    for (; i--;) {
                        var n = e[i];
                        n.dependenciesState === lt.UP_TO_DATE && (n.dependenciesState = lt.POSSIBLY_STALE,
                            n.isTracing !== dt.NONE && Rt(n, t), n.onBecomeStale());
                    }
                }(this);
            }, t.prototype.onBecomeUnobserved = function () { }, t.prototype.onBecomeObserved = function () { },
                t.prototype.get = function () {
                    this.isComputing && h("Cycle detected in computation " + this.name + ": " + this.derivation),
                        0 !== Ct.inBatch || 0 !== this.observers.length || this.keepAlive ? (Mt(this), mt(this) && this.trackAndCompute() && function (t) {
                            if (t.lowestObserverState === lt.STALE) return;
                            t.lowestObserverState = lt.STALE;
                            var e = t.observers, i = e.length;
                            for (; i--;) {
                                var n = e[i];
                                n.dependenciesState === lt.POSSIBLY_STALE ? n.dependenciesState = lt.STALE : n.dependenciesState === lt.UP_TO_DATE && (t.lowestObserverState = lt.UP_TO_DATE);
                            }
                        }(this)) : mt(this) && (this.warnAboutUntrackedRead(), jt(), this.value = this.computeValue(!1),
                            At());
                    var t = this.value;
                    if (gt(t)) throw t.cause;
                    return t;
                }, t.prototype.peek = function () {
                    var t = this.computeValue(!1);
                    if (gt(t)) throw t.cause;
                    return t;
                }, t.prototype.set = function (t) {
                    if (this.setter) {
                        l(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"),
                            this.isRunningSetter = !0;
                        try {
                            this.setter.call(this.scope, t);
                        } finally {
                            this.isRunningSetter = !1;
                        }
                    } else l(!1, !1);
                }, t.prototype.trackAndCompute = function () {
                    Ht() && $t({
                        object: this.scope,
                        type: "compute",
                        name: this.name
                    });
                    var t = this.value, e = this.dependenciesState === lt.NOT_TRACKING, i = this.computeValue(!0), n = e || gt(t) || gt(i) || !this.equals(t, i);
                    return n && (this.value = i), n;
                }, t.prototype.computeValue = function (t) {
                    var e;
                    if (this.isComputing = !0, Ct.computationDepth++, t) e = wt(this, this.derivation, this.scope); else if (!0 === Ct.disableErrorBoundaries) e = this.derivation.call(this.scope); else try {
                        e = this.derivation.call(this.scope);
                    } catch (t) {
                        e = new vt(t);
                    }
                    return Ct.computationDepth--, this.isComputing = !1, e;
                }, t.prototype.suspend = function () {
                    this.keepAlive || (_t(this), this.value = void 0);
                }, t.prototype.observe = function (i, n) {
                    var r = this, o = !0, s = void 0;
                    return Zt(function () {
                        var t = r.get();
                        if (!o || n) {
                            var e = Tt();
                            i({
                                type: "update",
                                object: r,
                                newValue: t,
                                oldValue: s
                            }), xt(e);
                        }
                        o = !1, s = t;
                    });
                }, t.prototype.warnAboutUntrackedRead = function () { }, t.prototype.toJSON = function () {
                    return this.get();
                }, t.prototype.toString = function () {
                    return this.name + "[" + this.derivation.toString() + "]";
                }, t.prototype.valueOf = function () {
                    return L(this.get());
                }, t;
        }();
        ht.prototype[x()] = ht.prototype.valueOf;
        var lt, pt, dt, ft, yt = w("ComputedValue", ht);
        (pt = lt || (lt = {}))[pt.NOT_TRACKING = -1] = "NOT_TRACKING", pt[pt.UP_TO_DATE = 0] = "UP_TO_DATE",
            pt[pt.POSSIBLY_STALE = 1] = "POSSIBLY_STALE", pt[pt.STALE = 2] = "STALE", (ft = dt || (dt = {}))[ft.NONE = 0] = "NONE",
            ft[ft.LOG = 1] = "LOG", ft[ft.BREAK = 2] = "BREAK";
        var vt = function (t) {
            this.cause = t;
        };
        function gt(t) {
            return t instanceof vt;
        }
        function mt(t) {
            switch (t.dependenciesState) {
                case lt.UP_TO_DATE:
                    return !1;

                case lt.NOT_TRACKING:
                case lt.STALE:
                    return !0;

                case lt.POSSIBLY_STALE:
                    for (var e = Tt(), i = t.observing, n = i.length, r = 0; r < n; r++) {
                        var o = i[r];
                        if (yt(o)) {
                            if (Ct.disableErrorBoundaries) o.get(); else try {
                                o.get();
                            } catch (t) {
                                return xt(e), !0;
                            }
                            if (t.dependenciesState === lt.STALE) return xt(e), !0;
                        }
                    }
                    return Lt(t), xt(e), !1;
            }
        }
        function bt(t) {
            var e = 0 < t.observers.length;
            0 < Ct.computationDepth && e && h(!1), Ct.allowStateChanges || !e && "strict" !== Ct.enforceActions || h(!1);
        }
        function wt(t, e, i) {
            Lt(t), t.newObserving = new Array(t.observing.length + 100), t.unboundDepsCount = 0,
                t.runId = ++Ct.runId;
            var n, r = Ct.trackingDerivation;
            if (Ct.trackingDerivation = t, !0 === Ct.disableErrorBoundaries) n = e.call(i); else try {
                n = e.call(i);
            } catch (t) {
                n = new vt(t);
            }
            return Ct.trackingDerivation = r, function (t) {
                for (var e = t.observing, i = t.observing = t.newObserving, n = lt.UP_TO_DATE, r = 0, o = t.unboundDepsCount, s = 0; s < o; s++) {
                    var a = i[s];
                    0 === a.diffValue && (a.diffValue = 1, r !== s && (i[r] = a), r++), a.dependenciesState > n && (n = a.dependenciesState);
                }
                i.length = r, t.newObserving = null, o = e.length;
                for (; o--;) {
                    var a = e[o];
                    0 === a.diffValue && Pt(a, t), a.diffValue = 0;
                }
                for (; r--;) {
                    var a = i[r];
                    1 === a.diffValue && (a.diffValue = 0, Et(a, t));
                }
                n !== lt.UP_TO_DATE && (t.dependenciesState = n, t.onBecomeStale());
            }(t), n;
        }
        function _t(t) {
            var e = t.observing;
            t.observing = [];
            for (var i = e.length; i--;) Pt(e[i], t);
            t.dependenciesState = lt.NOT_TRACKING;
        }
        function St(t) {
            var e = Tt(), i = t();
            return xt(e), i;
        }
        function Tt() {
            var t = Ct.trackingDerivation;
            return Ct.trackingDerivation = null, t;
        }
        function xt(t) {
            Ct.trackingDerivation = t;
        }
        function Lt(t) {
            if (t.dependenciesState !== lt.UP_TO_DATE) {
                t.dependenciesState = lt.UP_TO_DATE;
                for (var e = t.observing, i = e.length; i--;) e[i].lowestObserverState = lt.UP_TO_DATE;
            }
        }
        var kt, Ot = function () {
            this.version = 5, this.UNCHANGED = {}, this.trackingDerivation = null, this.computationDepth = 0,
                this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [],
                this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !0,
                this.enforceActions = !1, this.spyListeners = [], this.globalReactionErrorHandlers = [],
                this.computedRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1;
        }, It = !0, Dt = !1, Ct = (0 < (kt = a()).__mobxInstanceCount && !kt.__mobxGlobals && (It = !1),
            kt.__mobxGlobals && kt.__mobxGlobals.version !== new Ot().version && (It = !1),
            It ? kt.__mobxGlobals ? (kt.__mobxInstanceCount += 1, kt.__mobxGlobals.UNCHANGED || (kt.__mobxGlobals.UNCHANGED = {}),
                kt.__mobxGlobals) : (kt.__mobxInstanceCount = 1, kt.__mobxGlobals = new Ot()) : (setTimeout(function () {
                    Dt || h("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
                }, 1), new Ot()));
        function Et(t, e) {
            var i = t.observers.length;
            i && (t.observersIndexes[e.__mapid] = i), t.observers[i] = e, t.lowestObserverState > e.dependenciesState && (t.lowestObserverState = e.dependenciesState);
        }
        function Pt(t, e) {
            if (1 === t.observers.length) t.observers.length = 0, Bt(t); else {
                var i = t.observers, n = t.observersIndexes, r = i.pop();
                if (r !== e) {
                    var o = n[e.__mapid] || 0;
                    o ? n[r.__mapid] = o : delete n[r.__mapid], i[o] = r;
                }
                delete n[e.__mapid];
            }
        }
        function Bt(t) {
            !1 === t.isPendingUnobservation && (t.isPendingUnobservation = !0, Ct.pendingUnobservations.push(t));
        }
        function jt() {
            Ct.inBatch++;
        }
        function At() {
            if (0 == --Ct.inBatch) {
                Gt();
                for (var t = Ct.pendingUnobservations, e = 0; e < t.length; e++) {
                    var i = t[e];
                    i.isPendingUnobservation = !1, 0 === i.observers.length && (i.isBeingObserved && (i.isBeingObserved = !1,
                        i.onBecomeUnobserved()), i instanceof ht && i.suspend());
                }
                Ct.pendingUnobservations = [];
            }
        }
        function Mt(t) {
            var e = Ct.trackingDerivation;
            return null !== e ? (e.runId !== t.lastAccessedBy && (t.lastAccessedBy = e.runId,
                (e.newObserving[e.unboundDepsCount++] = t).isBeingObserved || (t.isBeingObserved = !0,
                    t.onBecomeObserved())), !0) : (0 === t.observers.length && 0 < Ct.inBatch && Bt(t),
                        !1);
        }
        function Rt(t, e) {
            if (console.log("[mobx.trace] '" + t.name + "' is invalidated due to a change in: '" + e.name + "'"),
                t.isTracing === dt.BREAK) {
                var i = [];
                !function e(t, i, n) {
                    if (1e3 <= i.length) return void i.push("(and many more)");
                    i.push("" + new Array(n).join("\t") + t.name);
                    t.dependencies && t.dependencies.forEach(function (t) {
                        return e(t, i, n + 1);
                    });
                }(function (t, e) {
                    return oe(Ze(t, e));
                }(t), i, 1), new Function("debugger;\n/*\nTracing '" + t.name + "'\n\nYou are entering this break point because derivation '" + t.name + "' is being traced and '" + e.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (t instanceof ht ? t.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + i.join("\n") + "\n*/\n    ")();
            }
        }
        var Nt = function () {
            function t(t, e, i) {
                void 0 === t && (t = "Reaction@" + f()), this.name = t, this.onInvalidate = e, this.errorHandler = i,
                    this.observing = [], this.newObserving = [], this.dependenciesState = lt.NOT_TRACKING,
                    this.diffValue = 0, this.runId = 0, this.unboundDepsCount = 0, this.__mapid = "#" + f(),
                    this.isDisposed = !1, this._isScheduled = !1, this._isTrackPending = !1, this._isRunning = !1,
                    this.isTracing = dt.NONE;
            }
            return t.prototype.onBecomeStale = function () {
                this.schedule();
            }, t.prototype.schedule = function () {
                this._isScheduled || (this._isScheduled = !0, Ct.pendingReactions.push(this), Gt());
            }, t.prototype.isScheduled = function () {
                return this._isScheduled;
            }, t.prototype.runReaction = function () {
                if (!this.isDisposed) {
                    if (jt(), this._isScheduled = !1, mt(this)) {
                        this._isTrackPending = !0;
                        try {
                            this.onInvalidate(), this._isTrackPending && Ht() && $t({
                                name: this.name,
                                type: "scheduled-reaction"
                            });
                        } catch (t) {
                            this.reportExceptionInDerivation(t);
                        }
                    }
                    At();
                }
            }, t.prototype.track = function (t) {
                jt();
                var e, i = Ht();
                i && (e = Date.now(), Kt({
                    name: this.name,
                    type: "reaction"
                })), this._isRunning = !0;
                var n = wt(this, t, void 0);
                this._isRunning = !1, this._isTrackPending = !1, this.isDisposed && _t(this), gt(n) && this.reportExceptionInDerivation(n.cause),
                    i && Xt({
                        time: Date.now() - e
                    }), At();
            }, t.prototype.reportExceptionInDerivation = function (e) {
                var i = this;
                // if (this.errorHandler) this.errorHandler(e, this); else {
                //     if (Ct.disableErrorBoundaries) throw e;
                //     var t = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
                //     Ct.suppressReactionErrors ? console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)") : console.log(t, e),
                //         Ht() && $t({
                //             type: "error",
                //             name: this.name,
                //             message: t,
                //             error: "" + e
                //         }), Ct.globalReactionErrorHandlers.forEach(function (t) {
                //             return t(e, i);
                //         });
                // }
            }, t.prototype.dispose = function () {
                this.isDisposed || (this.isDisposed = !0, this._isRunning || (jt(), _t(this), At()));
            }, t.prototype.getDisposer = function () {
                var t = this.dispose.bind(this);
                return t.$mobx = this, t;
            }, t.prototype.toString = function () {
                return "Reaction[" + this.name + "]";
            }, t.prototype.trace = function (t) {
                void 0 === t && (t = !1), function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var i = !1;
                    "boolean" == typeof t[t.length - 1] && (i = t.pop());
                    var n = function (t) {
                        switch (t.length) {
                            case 0:
                                return Ct.trackingDerivation;

                            case 1:
                                return Ze(t[0]);

                            case 2:
                                return Ze(t[0], t[1]);
                        }
                    }(t);
                    if (!n) return h(!1);
                    n.isTracing === dt.NONE && console.log("[mobx.trace] '" + n.name + "' tracing enabled");
                    n.isTracing = i ? dt.BREAK : dt.LOG;
                }(this, t);
            }, t;
        }();
        var Vt = 100, Ut = function (t) {
            return t();
        };
        function Gt() {
            0 < Ct.inBatch || Ct.isRunningReactions || Ut(zt);
        }
        function zt() {
            Ct.isRunningReactions = !0;
            for (var t = Ct.pendingReactions, e = 0; 0 < t.length;) {
                ++e === Vt && (console.log("Reaction doesn't converge to a stable state after " + Vt + " iterations. Probably there is a cycle in the reactive function: " + t[0]),
                    t.splice(0));
                for (var i = t.splice(0), n = 0, r = i.length; n < r; n++) i[n].runReaction();
            }
            Ct.isRunningReactions = !1;
        }
        var Ft = w("Reaction", Nt);
        function Ht() {
            return !!Ct.spyListeners.length;
        }
        function $t(t) {
            if (Ct.spyListeners.length) for (var e = Ct.spyListeners, i = 0, n = e.length; i < n; i++) e[i](t);
        }
        function Kt(t) {
            $t(c({}, t, {
                spyReportStart: !0
            }));
        }
        var Wt = {
            spyReportEnd: !0
        };
        function Xt(t) {
            $t(t ? c({}, t, {
                spyReportEnd: !0
            }) : Wt);
        }
        function qt() {
            h(!1);
        }
        function Yt(r) {
            return function (t, e, i) {
                if (i) {
                    if (i.value) return {
                        value: nt(r, i.value),
                        enumerable: !1,
                        configurable: !0,
                        writable: !0
                    };
                    var n = i.initializer;
                    return {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        initializer: function () {
                            return nt(r, n.call(this));
                        }
                    };
                }
                return function (n) {
                    return function (t, e, i) {
                        Object.defineProperty(t, e, {
                            configurable: !0,
                            enumerable: !1,
                            get: function () { },
                            set: function (t) {
                                m(this, e, Qt(n, t));
                            }
                        });
                    };
                }(r).apply(this, arguments);
            };
        }
        var Qt = function (t, e, i, n) {
            return 1 === arguments.length && "function" == typeof t ? nt(t.name || "<unnamed action>", t) : 2 === arguments.length && "function" == typeof e ? nt(t, e) : 1 === arguments.length && "string" == typeof t ? Yt(t) : !0 !== n ? Yt(e).apply(null, arguments) : void (t[e] = nt(t.name || e, i.value));
        };
        function Jt(t, e, i) {
            m(t, e, nt(e, i.bind(t)));
        }
        function Zt(t, e) {
            void 0 === e && (e = d);
            var i, n = e && e.name || t.name || "Autorun@" + f();
            if (!e.scheduler && !e.delay) i = new Nt(n, function () {
                this.track(s);
            }, e.onError); else {
                var r = ee(e), o = !1;
                i = new Nt(n, function () {
                    o || (o = !0, r(function () {
                        o = !1, i.isDisposed || i.track(s);
                    }));
                }, e.onError);
            }
            function s() {
                t(i);
            }
            return i.schedule(), i.getDisposer();
        }
        Qt.bound = function (t, e, i, n) {
            return !0 === n ? (Jt(t, e, i.value), null) : i ? {
                configurable: !0,
                enumerable: !1,
                get: function () {
                    return Jt(this, e, i.value || i.initializer.call(this)), this[e];
                },
                set: qt
            } : {
                    enumerable: !1,
                    configurable: !0,
                    set: function (t) {
                        Jt(this, e, t);
                    },
                    get: function () { }
                };
        };
        var te = function (t) {
            return t();
        };
        function ee(e) {
            return e.scheduler ? e.scheduler : e.delay ? function (t) {
                return setTimeout(t, e.delay);
            } : te;
        }
        function ie(i, t, n) {
            void 0 === n && (n = d), "boolean" == typeof n && (n = {
                fireImmediately: n
            });
            var r, e = n.name || "Reaction@" + f(), o = Qt(e, n.onError ? function (e, t) {
                return function () {
                    try {
                        return t.apply(this, arguments);
                    } catch (t) {
                        e.call(this, t);
                    }
                };
            }(n.onError, t) : t), s = !n.scheduler && !n.delay, a = ee(n), c = !0, u = !1, h = n.compareStructural ? A.structural : n.equals || A.default, l = new Nt(e, function () {
                c || s ? p() : u || (u = !0, a(p));
            }, n.onError);
            function p() {
                if (u = !1, !l.isDisposed) {
                    var e = !1;
                    l.track(function () {
                        var t = i(l);
                        e = c || !h(r, t), r = t;
                    }), c && n.fireImmediately && o(r, l), c || !0 !== e || o(r, l), c && (c = !1);
                }
            }
            return l.schedule(), l.getDisposer();
        }
        function ne(t, e, i, n) {
            var r = "string" == typeof i ? Ze(e, i) : Ze(e), o = "string" == typeof i ? n : i, s = r[t];
            return "function" != typeof s ? h(!1) : (r[t] = function () {
                s.call(this), o.call(this);
            }, function () {
                r[t] = s;
            });
        }
        function re(t, e, i, n) {
            var r = (n = $(n)).defaultDecorator || (!1 === n.deep ? q : W);
            N(t), Ke(t, n.name, r.enhancer), jt();
            try {
                for (var o in e) {
                    var s = Object.getOwnPropertyDescriptor(e, o);
                    0;
                    var a = (i && o in i ? i[o] : s.get ? tt : r)(t, o, s, !0);
                    a && Object.defineProperty(t, o, a);
                }
            } finally {
                At();
            }
            return t;
        }
        function oe(t) {
            var e = {
                name: t.name
            };
            return t.observing && 0 < t.observing.length && (e.dependencies = function (t) {
                var e = [];
                return t.forEach(function (t) {
                    -1 === e.indexOf(t) && e.push(t);
                }), e;
            }(t.observing).map(oe)), e;
        }
        function se(t, e) {
            if (null == t) return !1;
            if (void 0 === e) return Je(t) || !!t.$mobx || P(t) || Ft(t) || yt(t);
            if (Je(t)) {
                var i = t.$mobx;
                return i.values && !!i.values[e];
            }
            return !1;
        }
        function ae(t) {
            return 1 !== arguments.length && h(!1), se(t);
        }
        function ce(t, e) {
            return "string" != typeof e ? h(!1) : se(t, e);
        }
        function ue(t) {
            return Je(t) ? t.$mobx.getKeys() : Ge(t) ? t._keys.slice() : He(t) ? T(t.keys()) : Ne(t) ? t.map(function (t, e) {
                return e;
            }) : h(!1);
        }
        function he(t, e, i) {
            if (2 !== arguments.length) if (Je(t)) {
                var n = t.$mobx;
                n.values[e] ? n.write(t, e, i) : We(t, e, i, n.defaultEnhancer);
            } else if (Ge(t)) t.set(e, i); else {
                if (!Ne(t)) return h(!1);
                "number" != typeof e && (e = parseInt(e, 10)), l(0 <= e, "Not a valid index: '" + e + "'"),
                    jt(), e >= t.length && (t.length = e + 1), t[e] = i, At();
            } else {
                jt();
                var r = e;
                try {
                    for (var o in r) he(t, o, r[o]);
                } finally {
                    At();
                }
            }
        }
        function le(t, e) {
            if (Je(t)) t.$mobx.remove(e); else if (Ge(t)) t.delete(e); else if (He(t)) t.delete(e); else {
                if (!Ne(t)) return h(!1);
                "number" != typeof e && (e = parseInt(e, 10)), l(0 <= e, "Not a valid index: '" + e + "'"),
                    t.splice(e, 1);
            }
        }
        function pe(t, e) {
            if (Je(t)) {
                var i = ti(t);
                return i.getKeys(), !!i.values[e];
            }
            return Ge(t) ? t.has(e) : He(t) ? t.has(e) : Ne(t) ? 0 <= e && e < t.length : h(!1);
        }
        var de = {
            detectCycles: !0,
            exportMapsAsObjects: !0,
            recurseEverything: !1
        };
        function fe(t, e, i, n) {
            return n.detectCycles && t.set(e, i), i;
        }
        function ye(t, e) {
            var i;
            return "boolean" == typeof e && (e = {
                detectCycles: e
            }), e || (e = de), e.detectCycles = void 0 === e.detectCycles ? !0 === e.recurseEverything : !0 === e.detectCycles,
                e.detectCycles && (i = new Map()), function i(t, n, r) {
                    if (!n.recurseEverything && !ae(t)) return t;
                    if ("object" != typeof t) return t;
                    if (null === t) return null;
                    if (t instanceof Date) return t;
                    if (ut(t)) return i(t.get(), n, r);
                    if (ae(t) && ue(t), !0 === n.detectCycles && null !== t && r.has(t)) return r.get(t);
                    if (Ne(t) || Array.isArray(t)) {
                        var e = fe(r, t, [], n), o = t.map(function (t) {
                            return i(t, n, r);
                        });
                        e.length = o.length;
                        for (var s = 0, a = o.length; s < a; s++) e[s] = o[s];
                        return e;
                    }
                    if (He(t) || Object.getPrototypeOf(t) === Set.prototype) {
                        if (!1 === n.exportMapsAsObjects) {
                            var c = fe(r, t, new Set(), n);
                            return t.forEach(function (t) {
                                c.add(i(t, n, r));
                            }), c;
                        }
                        var u = fe(r, t, [], n);
                        return t.forEach(function (t) {
                            u.push(i(t, n, r));
                        }), u;
                    }
                    if (Ge(t) || Object.getPrototypeOf(t) === Map.prototype) {
                        if (!1 === n.exportMapsAsObjects) {
                            var h = fe(r, t, new Map(), n);
                            return t.forEach(function (t, e) {
                                h.set(e, i(t, n, r));
                            }), h;
                        }
                        var l = fe(r, t, {}, n);
                        return t.forEach(function (t, e) {
                            l[e] = i(t, n, r);
                        }), l;
                    }
                    var p = fe(r, t, {}, n);
                    for (var d in t) p[d] = i(t[d], n, r);
                    return p;
                }(t, e, i);
        }
        function ve(t, e) {
            void 0 === e && (e = void 0), jt();
            try {
                return t.apply(e);
            } finally {
                At();
            }
        }
        function ge(t, e, i) {
            return 1 === arguments.length || e && "object" == typeof e ? function (n, r) {
                0;
                var o, t = new Promise(function (t, e) {
                    var i = me(n, t, c({}, r, {
                        onError: e
                    }));
                    o = function () {
                        i(), e("WHEN_CANCELLED");
                    };
                });
                return t.cancel = o, t;
            }(t, e) : me(t, e, i || {});
        }
        function me(e, t, i) {
            var n;
            "number" == typeof i.timeout && (n = setTimeout(function () {
                if (!o.$mobx.isDisposed) {
                    o();
                    var t = new Error("WHEN_TIMEOUT");
                    if (!i.onError) throw t;
                    i.onError(t);
                }
            }, i.timeout)), i.name = i.name || "When@" + f();
            var r = nt(i.name + "-effect", t), o = Zt(function (t) {
                e() && (t.dispose(), n && clearTimeout(n), r());
            }, i);
            return o;
        }
        function be(t) {
            return void 0 !== t.interceptors && 0 < t.interceptors.length;
        }
        function we(t, e) {
            var i = t.interceptors || (t.interceptors = []);
            return i.push(e), p(function () {
                var t = i.indexOf(e);
                -1 !== t && i.splice(t, 1);
            });
        }
        function _e(t, e) {
            var i = Tt();
            try {
                var n = t.interceptors;
                if (n) for (var r = 0, o = n.length; r < o && (l(!(e = n[r](e)) || e.type, "Intercept handlers should return nothing or a change object"),
                    e); r++);
                return e;
            } finally {
                xt(i);
            }
        }
        function Se(t) {
            return void 0 !== t.changeListeners && 0 < t.changeListeners.length;
        }
        function Te(t, e) {
            var i = t.changeListeners || (t.changeListeners = []);
            return i.push(e), p(function () {
                var t = i.indexOf(e);
                -1 !== t && i.splice(t, 1);
            });
        }
        function xe(t, e) {
            var i = Tt(), n = t.changeListeners;
            if (n) {
                for (var r = 0, o = (n = n.slice()).length; r < o; r++) n[r](e);
                xt(i);
            }
        }
        var Le, ke, Oe, Ie, De = (Le = !1, ke = {}, Object.defineProperty(ke, "0", {
            set: function () {
                Le = !0;
            }
        }), !(Object.create(ke)[0] = 1) === Le), Ce = 0, Ee = function () { };
        Oe = Ee, Ie = Array.prototype, void 0 !== Object.setPrototypeOf ? Object.setPrototypeOf(Oe.prototype, Ie) : void 0 !== Oe.prototype.__proto__ ? Oe.prototype.__proto__ = Ie : Oe.prototype = Ie,
            Object.isFrozen(Array) && ["constructor", "push", "shift", "concat", "pop", "unshift", "replace", "find", "findIndex", "splice", "reverse", "sort"].forEach(function (t) {
                Object.defineProperty(Ee.prototype, t, {
                    configurable: !0,
                    writable: !0,
                    value: Array.prototype[t]
                });
            });
        var Pe = function () {
            function t(i, n, t, e) {
                this.array = t, this.owned = e, this.values = [], this.lastKnownLength = 0, this.atom = new E(i || "ObservableArray@" + f()),
                    this.enhancer = function (t, e) {
                        return n(t, e, i + "[..]");
                    };
            }
            return t.prototype.dehanceValue = function (t) {
                return void 0 !== this.dehancer ? this.dehancer(t) : t;
            }, t.prototype.dehanceValues = function (t) {
                return void 0 !== this.dehancer && 0 < t.length ? t.map(this.dehancer) : t;
            }, t.prototype.intercept = function (t) {
                return we(this, t);
            }, t.prototype.observe = function (t, e) {
                return void 0 === e && (e = !1), e && t({
                    object: this.array,
                    type: "splice",
                    index: 0,
                    added: this.values.slice(),
                    addedCount: this.values.length,
                    removed: [],
                    removedCount: 0
                }), Te(this, t);
            }, t.prototype.getArrayLength = function () {
                return this.atom.reportObserved(), this.values.length;
            }, t.prototype.setArrayLength = function (t) {
                if ("number" != typeof t || t < 0) throw new Error("[mobx.array] Out of range: " + t);
                var e = this.values.length;
                if (t !== e) if (e < t) {
                    for (var i = new Array(t - e), n = 0; n < t - e; n++) i[n] = void 0;
                    this.spliceWithArray(e, 0, i);
                } else this.spliceWithArray(t, e - t);
            }, t.prototype.updateArrayLength = function (t, e) {
                if (t !== this.lastKnownLength) throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
                this.lastKnownLength += e, 0 < e && Ce < t + e + 1 && Me(t + e + 1);
            }, t.prototype.spliceWithArray = function (t, e, i) {
                var n = this;
                bt(this.atom);
                var r = this.values.length;
                if (void 0 === t ? t = 0 : r < t ? t = r : t < 0 && (t = Math.max(0, r + t)), e = 1 === arguments.length ? r - t : null == e ? 0 : Math.max(0, Math.min(e, r - t)),
                    void 0 === i && (i = u), be(this)) {
                    var o = _e(this, {
                        object: this.array,
                        type: "splice",
                        index: t,
                        removedCount: e,
                        added: i
                    });
                    if (!o) return u;
                    e = o.removedCount, i = o.added;
                }
                var s = (i = 0 === i.length ? i : i.map(function (t) {
                    return n.enhancer(t, void 0);
                })).length - e;
                this.updateArrayLength(r, s);
                var a = this.spliceItemsIntoValues(t, e, i);
                return 0 === e && 0 === i.length || this.notifyArraySplice(t, i, a), this.dehanceValues(a);
            }, t.prototype.spliceItemsIntoValues = function (t, e, i) {
                var n;
                if (i.length < 1e4) return (n = this.values).splice.apply(n, s([t, e], i));
                var r = this.values.slice(t, t + e);
                return this.values = this.values.slice(0, t).concat(i, this.values.slice(t + e)),
                    r;
            }, t.prototype.notifyArrayChildUpdate = function (t, e, i) {
                var n = !this.owned && Ht(), r = Se(this), o = r || n ? {
                    object: this.array,
                    type: "update",
                    index: t,
                    newValue: e,
                    oldValue: i
                } : null;
                n && Kt(c({}, o, {
                    name: this.atom.name
                })), this.atom.reportChanged(), r && xe(this, o), n && Xt();
            }, t.prototype.notifyArraySplice = function (t, e, i) {
                var n = !this.owned && Ht(), r = Se(this), o = r || n ? {
                    object: this.array,
                    type: "splice",
                    index: t,
                    removed: i,
                    added: e,
                    removedCount: i.length,
                    addedCount: e.length
                } : null;
                n && Kt(c({}, o, {
                    name: this.atom.name
                })), this.atom.reportChanged(), r && xe(this, o), n && Xt();
            }, t;
        }(), Be = function (a) {
            function t(t, e, i, n) {
                void 0 === i && (i = "ObservableArray@" + f()), void 0 === n && (n = !1);
                var r = a.call(this) || this, o = new Pe(i, e, r, n);
                if (b(r, "$mobx", o), t && t.length) {
                    var s = st(!0);
                    r.spliceWithArray(0, 0, t), at(s);
                }
                return De && Object.defineProperty(o.array, "0", je), r;
            }
            return e(t, a), t.prototype.intercept = function (t) {
                return this.$mobx.intercept(t);
            }, t.prototype.observe = function (t, e) {
                return void 0 === e && (e = !1), this.$mobx.observe(t, e);
            }, t.prototype.clear = function () {
                return this.splice(0);
            }, t.prototype.concat = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return this.$mobx.atom.reportObserved(), Array.prototype.concat.apply(this.peek(), t.map(function (t) {
                    return Ne(t) ? t.peek() : t;
                }));
            }, t.prototype.replace = function (t) {
                return this.$mobx.spliceWithArray(0, this.$mobx.values.length, t);
            }, t.prototype.toJS = function () {
                return this.slice();
            }, t.prototype.toJSON = function () {
                return this.toJS();
            }, t.prototype.peek = function () {
                return this.$mobx.atom.reportObserved(), this.$mobx.dehanceValues(this.$mobx.values);
            }, t.prototype.find = function (t, e, i) {
                void 0 === i && (i = 0), arguments.length;
                var n = this.findIndex.apply(this, arguments);
                return -1 === n ? void 0 : this.get(n);
            }, t.prototype.findIndex = function (t, e, i) {
                void 0 === i && (i = 0), arguments.length;
                for (var n = this.peek(), r = n.length, o = i; o < r; o++) if (t.call(e, n[o], o, this)) return o;
                return -1;
            }, t.prototype.splice = function (t, e) {
                for (var i = [], n = 2; n < arguments.length; n++) i[n - 2] = arguments[n];
                switch (arguments.length) {
                    case 0:
                        return [];

                    case 1:
                        return this.$mobx.spliceWithArray(t);

                    case 2:
                        return this.$mobx.spliceWithArray(t, e);
                }
                return this.$mobx.spliceWithArray(t, e, i);
            }, t.prototype.spliceWithArray = function (t, e, i) {
                return this.$mobx.spliceWithArray(t, e, i);
            }, t.prototype.push = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var i = this.$mobx;
                return i.spliceWithArray(i.values.length, 0, t), i.values.length;
            }, t.prototype.pop = function () {
                return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
            }, t.prototype.shift = function () {
                return this.splice(0, 1)[0];
            }, t.prototype.unshift = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var i = this.$mobx;
                return i.spliceWithArray(0, 0, t), i.values.length;
            }, t.prototype.reverse = function () {
                var t = this.slice();
                return t.reverse.apply(t, arguments);
            }, t.prototype.sort = function (t) {
                var e = this.slice();
                return e.sort.apply(e, arguments);
            }, t.prototype.remove = function (t) {
                var e = this.$mobx.dehanceValues(this.$mobx.values).indexOf(t);
                return -1 < e && (this.splice(e, 1), !0);
            }, t.prototype.move = function (t, e) {
                function i(t) {
                    if (t < 0) throw new Error("[mobx.array] Index out of bounds: " + t + " is negative");
                    var e = this.$mobx.values.length;
                    if (e <= t) throw new Error("[mobx.array] Index out of bounds: " + t + " is not smaller than " + e);
                }
                if (i.call(this, t), i.call(this, e), t !== e) {
                    var n, r = this.$mobx.values;
                    n = t < e ? s(r.slice(0, t), r.slice(t + 1, e + 1), [r[t]], r.slice(e + 1)) : s(r.slice(0, e), [r[t]], r.slice(e, t), r.slice(t + 1)),
                        this.replace(n);
                }
            }, t.prototype.get = function (t) {
                var e = this.$mobx;
                if (e) {
                    if (t < e.values.length) return e.atom.reportObserved(), e.dehanceValue(e.values[t]);
                    console.warn("[mobx.array] Attempt to read an array index (" + t + ") that is out of bounds (" + e.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
                }
            }, t.prototype.set = function (t, e) {
                var i = this.$mobx, n = i.values;
                if (t < n.length) {
                    bt(i.atom);
                    var r = n[t];
                    if (be(i)) {
                        var o = _e(i, {
                            type: "update",
                            object: this,
                            index: t,
                            newValue: e
                        });
                        if (!o) return;
                        e = o.newValue;
                    }
                    (e = i.enhancer(e, r)) !== r && (n[t] = e, i.notifyArrayChildUpdate(t, e, r));
                } else {
                    if (t !== n.length) throw new Error("[mobx.array] Index out of bounds, " + t + " is larger than " + n.length);
                    i.spliceWithArray(t, 0, [e]);
                }
            }, t;
        }(Ee);
        O(Be.prototype, function () {
            this.$mobx.atom.reportObserved();
            var t = this, e = 0;
            return I({
                next: function () {
                    return e < t.length ? {
                        value: t[e++],
                        done: !1
                    } : {
                            done: !0,
                            value: void 0
                        };
                }
            });
        }), Object.defineProperty(Be.prototype, "length", {
            enumerable: !1,
            configurable: !0,
            get: function () {
                return this.$mobx.getArrayLength();
            },
            set: function (t) {
                this.$mobx.setArrayLength(t);
            }
        }), m(Be.prototype, D(), "Array"), ["every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "reduce", "reduceRight", "slice", "some", "toString", "toLocaleString"].forEach(function (t) {
            var e = Array.prototype[t];
            l("function" == typeof e, "Base function not defined on Array prototype: '" + t + "'"),
                m(Be.prototype, t, function () {
                    return e.apply(this.peek(), arguments);
                });
        }), function (t, e) {
            for (var i = 0; i < e.length; i++) m(t, e[i], t[e[i]]);
        }(Be.prototype, ["constructor", "intercept", "observe", "clear", "concat", "get", "replace", "toJS", "toJSON", "peek", "find", "findIndex", "splice", "spliceWithArray", "push", "pop", "set", "shift", "unshift", "reverse", "sort", "remove", "move", "toString", "toLocaleString"]);
        var je = Ae(0);
        function Ae(e) {
            return {
                enumerable: !1,
                configurable: !1,
                get: function () {
                    return this.get(e);
                },
                set: function (t) {
                    this.set(e, t);
                }
            };
        }
        function Me(t) {
            for (var e = Ce; e < t; e++) i = e, Object.defineProperty(Be.prototype, "" + i, Ae(i));
            var i;
            Ce = t;
        }
        Me(1e3);
        var Re = w("ObservableArrayAdministration", Pe);
        function Ne(t) {
            return v(t) && Re(t.$mobx);
        }
        var Ve = {}, Ue = function () {
            function t(t, e, i) {
                if (void 0 === e && (e = U), void 0 === i && (i = "ObservableMap@" + f()), this.enhancer = e,
                    this.name = i, this.$mobx = Ve, this._keys = new Be(void 0, G, this.name + ".keys()", !0),
                    "function" != typeof Map) throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
                this._data = new Map(), this._hasMap = new Map(), this.merge(t);
            }
            return t.prototype._has = function (t) {
                return this._data.has(t);
            }, t.prototype.has = function (t) {
                return this._hasMap.has(t) ? this._hasMap.get(t).get() : this._updateHasMapEntry(t, !1).get();
            }, t.prototype.set = function (t, e) {
                var i = this._has(t);
                if (be(this)) {
                    var n = _e(this, {
                        type: i ? "update" : "add",
                        object: this,
                        newValue: e,
                        name: t
                    });
                    if (!n) return this;
                    e = n.newValue;
                }
                return i ? this._updateValue(t, e) : this._addValue(t, e), this;
            }, t.prototype.delete = function (t) {
                var e = this;
                if (be(this) && !(r = _e(this, {
                    type: "delete",
                    object: this,
                    name: t
                }))) return !1;
                if (this._has(t)) {
                    var i = Ht(), n = Se(this), r = n || i ? {
                        type: "delete",
                        object: this,
                        oldValue: this._data.get(t).value,
                        name: t
                    } : null;
                    return i && Kt(c({}, r, {
                        name: this.name,
                        key: t
                    })), ve(function () {
                        e._keys.remove(t), e._updateHasMapEntry(t, !1), e._data.get(t).setNewValue(void 0),
                            e._data.delete(t);
                    }), n && xe(this, r), i && Xt(), !0;
                }
                return !1;
            }, t.prototype._updateHasMapEntry = function (t, e) {
                var i = this._hasMap.get(t);
                return i ? i.setNewValue(e) : (i = new ct(e, G, this.name + "." + t + "?", !1),
                    this._hasMap.set(t, i)), i;
            }, t.prototype._updateValue = function (t, e) {
                var i = this._data.get(t);
                if ((e = i.prepareNewValue(e)) !== Ct.UNCHANGED) {
                    var n = Ht(), r = Se(this), o = r || n ? {
                        type: "update",
                        object: this,
                        oldValue: i.value,
                        name: t,
                        newValue: e
                    } : null;
                    n && Kt(c({}, o, {
                        name: this.name,
                        key: t
                    })), i.setNewValue(e), r && xe(this, o), n && Xt();
                }
            }, t.prototype._addValue = function (e, i) {
                var n = this;
                ve(function () {
                    var t = new ct(i, n.enhancer, n.name + "." + e, !1);
                    n._data.set(e, t), i = t.value, n._updateHasMapEntry(e, !0), n._keys.push(e);
                });
                var t = Ht(), r = Se(this), o = r || t ? {
                    type: "add",
                    object: this,
                    name: e,
                    newValue: i
                } : null;
                t && Kt(c({}, o, {
                    name: this.name,
                    key: e
                })), r && xe(this, o), t && Xt();
            }, t.prototype.get = function (t) {
                return this.has(t) ? this.dehanceValue(this._data.get(t).get()) : this.dehanceValue(void 0);
            }, t.prototype.dehanceValue = function (t) {
                return void 0 !== this.dehancer ? this.dehancer(t) : t;
            }, t.prototype.keys = function () {
                return this._keys[k()]();
            }, t.prototype.values = function () {
                var t = this, e = 0;
                return I({
                    next: function () {
                        return e < t._keys.length ? {
                            value: t.get(t._keys[e++]),
                            done: !1
                        } : {
                                value: void 0,
                                done: !0
                            };
                    }
                });
            }, t.prototype.entries = function () {
                var e = this, i = 0;
                return I({
                    next: function () {
                        if (i < e._keys.length) {
                            var t = e._keys[i++];
                            return {
                                value: [t, e.get(t)],
                                done: !1
                            };
                        }
                        return {
                            done: !0
                        };
                    }
                });
            }, t.prototype.forEach = function (e, i) {
                var n = this;
                this._keys.forEach(function (t) {
                    return e.call(i, n.get(t), t, n);
                });
            }, t.prototype.merge = function (e) {
                var r = this;
                return Ge(e) && (e = e.toJS()), ve(function () {
                    g(e) ? Object.keys(e).forEach(function (t) {
                        return r.set(t, e[t]);
                    }) : Array.isArray(e) ? e.forEach(function (t) {
                        var e = o(t, 2), i = e[0], n = e[1];
                        return r.set(i, n);
                    }) : _(e) ? e.constructor !== Map ? h("Cannot initialize from classes that inherit from Map: " + e.constructor.name) : e.forEach(function (t, e) {
                        return r.set(e, t);
                    }) : null != e && h("Cannot initialize map from " + e);
                }), this;
            }, t.prototype.clear = function () {
                var e = this;
                ve(function () {
                    St(function () {
                        e._keys.slice().forEach(function (t) {
                            return e.delete(t);
                        });
                    });
                });
            }, t.prototype.replace = function (t) {
                var i = this;
                return ve(function () {
                    var e = function (t) {
                        return g(t) ? Object.keys(t) : Array.isArray(t) ? t.map(function (t) {
                            return o(t, 1)[0];
                        }) : _(t) || Ge(t) ? T(t.keys()) : h("Cannot get keys from '" + t + "'");
                    }(t);
                    i._keys.filter(function (t) {
                        return -1 === e.indexOf(t);
                    }).forEach(function (t) {
                        return i.delete(t);
                    }), i.merge(t);
                }), this;
            }, Object.defineProperty(t.prototype, "size", {
                get: function () {
                    return this._keys.length;
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.toPOJO = function () {
                var e = this, i = {};
                return this._keys.forEach(function (t) {
                    return i["" + t] = e.get(t);
                }), i;
            }, t.prototype.toJS = function () {
                var e = this, i = new Map();
                return this._keys.forEach(function (t) {
                    return i.set(t, e.get(t));
                }), i;
            }, t.prototype.toJSON = function () {
                return this.toPOJO();
            }, t.prototype.toString = function () {
                var e = this;
                return this.name + "[{ " + this._keys.map(function (t) {
                    return t + ": " + e.get(t);
                }).join(", ") + " }]";
            }, t.prototype.observe = function (t, e) {
                return Te(this, t);
            }, t.prototype.intercept = function (t) {
                return we(this, t);
            }, t;
        }();
        O(Ue.prototype, function () {
            return this.entries();
        }), b(Ue.prototype, D(), "Map");
        var Ge = w("ObservableMap", Ue), ze = {}, Fe = function () {
            function t(t, i, n) {
                if (void 0 === i && (i = U), void 0 === n && (n = "ObservableSet@" + f()), this.name = n,
                    this.$mobx = ze, this._data = new Set(), this._atom = B(this.name), "function" != typeof Set) throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
                this.enhancer = function (t, e) {
                    return i(t, e, n);
                }, t && this.replace(t);
            }
            return t.prototype.dehanceValue = function (t) {
                return void 0 !== this.dehancer ? this.dehancer(t) : t;
            }, t.prototype.clear = function () {
                var e = this;
                ve(function () {
                    St(function () {
                        e._data.forEach(function (t) {
                            e.delete(t);
                        });
                    });
                });
            }, t.prototype.forEach = function (e, i) {
                var n = this;
                this._data.forEach(function (t) {
                    e.call(i, t, t, n);
                });
            }, Object.defineProperty(t.prototype, "size", {
                get: function () {
                    return this._atom.reportObserved(), this._data.size;
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.add = function (t) {
                var e = this;
                if ((bt(this._atom), be(this)) && !(r = _e(this, {
                    type: "add",
                    object: this,
                    newValue: t
                }))) return this;
                if (!this.has(t)) {
                    ve(function () {
                        e._data.add(e.enhancer(t, void 0)), e._atom.reportChanged();
                    });
                    var i = Ht(), n = Se(this), r = n || i ? {
                        type: "add",
                        object: this,
                        newValue: t
                    } : null;
                    0, n && xe(this, r);
                }
                return this;
            }, t.prototype.delete = function (t) {
                var e = this;
                if (be(this) && !(r = _e(this, {
                    type: "delete",
                    object: this,
                    oldValue: t
                }))) return !1;
                if (this.has(t)) {
                    var i = Ht(), n = Se(this), r = n || i ? {
                        type: "delete",
                        object: this,
                        oldValue: t
                    } : null;
                    return ve(function () {
                        e._atom.reportChanged(), e._data.delete(t);
                    }), n && xe(this, r), !0;
                }
                return !1;
            }, t.prototype.has = function (t) {
                return this._atom.reportObserved(), this._data.has(this.dehanceValue(t));
            }, t.prototype.entries = function () {
                var e = 0, i = T(this.keys()), n = T(this.values());
                return I({
                    next: function () {
                        var t = e;
                        return e += 1, t < n.length ? {
                            value: [i[t], n[t]],
                            done: !1
                        } : {
                                done: !0
                            };
                    }
                });
            }, t.prototype.keys = function () {
                return this.values();
            }, t.prototype.values = function () {
                this._atom.reportObserved();
                var e, t = this, i = 0;
                return void 0 !== this._data.values ? e = T(this._data.values()) : (e = [], this._data.forEach(function (t) {
                    return e.push(t);
                })), I({
                    next: function () {
                        return i < e.length ? {
                            value: t.dehanceValue(e[i++]),
                            done: !1
                        } : {
                                done: !0
                            };
                    }
                });
            }, t.prototype.replace = function (t) {
                var e = this;
                return He(t) && (t = t.toJS()), ve(function () {
                    Array.isArray(t) ? (e.clear(), t.forEach(function (t) {
                        return e.add(t);
                    })) : S(t) ? (e.clear(), t.forEach(function (t) {
                        return e.add(t);
                    })) : null != t && h("Cannot initialize set from " + t);
                }), this;
            }, t.prototype.observe = function (t, e) {
                return Te(this, t);
            }, t.prototype.intercept = function (t) {
                return we(this, t);
            }, t.prototype.toJS = function () {
                return new Set(this);
            }, t.prototype.toString = function () {
                return this.name + "[ " + T(this.keys()).join(", ") + " ]";
            }, t;
        }();
        O(Fe.prototype, function () {
            return this.values();
        }), b(Fe.prototype, D(), "Set");
        var He = w("ObservableSet", Fe), $e = function () {
            function t(t, e, i) {
                this.target = t, this.name = e, this.defaultEnhancer = i, this.values = {};
            }
            return t.prototype.read = function (t, e) {
                if (this.target === t || (this.illegalAccess(t, e), this.values[e])) return this.values[e].get();
            }, t.prototype.write = function (t, e, i) {
                var n = this.target;
                n !== t && this.illegalAccess(t, e);
                var r = this.values[e];
                if (r instanceof ht) r.set(i); else {
                    if (be(this)) {
                        if (!(a = _e(this, {
                            type: "update",
                            object: n,
                            name: e,
                            newValue: i
                        }))) return;
                        i = a.newValue;
                    }
                    if ((i = r.prepareNewValue(i)) !== Ct.UNCHANGED) {
                        var o = Se(this), s = Ht(), a = o || s ? {
                            type: "update",
                            object: n,
                            oldValue: r.value,
                            name: e,
                            newValue: i
                        } : null;
                        s && Kt(c({}, a, {
                            name: this.name,
                            key: e
                        })), r.setNewValue(i), o && xe(this, a), s && Xt();
                    }
                }
            }, t.prototype.remove = function (t) {
                if (this.values[t]) {
                    var e = this.target;
                    if (be(this)) if (!(o = _e(this, {
                        object: e,
                        name: t,
                        type: "remove"
                    }))) return;
                    try {
                        jt();
                        var i = Se(this), n = Ht(), r = this.values[t].get();
                        this.keys && this.keys.remove(t), delete this.values[t], delete this.target[t];
                        var o = i || n ? {
                            type: "remove",
                            object: e,
                            oldValue: r,
                            name: t
                        } : null;
                        n && Kt(c({}, o, {
                            name: this.name,
                            key: t
                        })), i && xe(this, o), n && Xt();
                    } finally {
                        At();
                    }
                }
            }, t.prototype.illegalAccess = function (t, e) {
                console.warn("Property '" + e + "' of '" + t + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
            }, t.prototype.observe = function (t, e) {
                return Te(this, t);
            }, t.prototype.intercept = function (t) {
                return we(this, t);
            }, t.prototype.getKeys = function () {
                var e = this;
                return void 0 === this.keys && (this.keys = new Be(Object.keys(this.values).filter(function (t) {
                    return e.values[t] instanceof ct;
                }), G, "keys(" + this.name + ")", !0)), this.keys.slice();
            }, t;
        }();
        function Ke(t, e, i) {
            void 0 === e && (e = ""), void 0 === i && (i = U);
            var n = t.$mobx;
            return n || (g(t) || (e = (t.constructor.name || "ObservableObject") + "@" + f()),
                e || (e = "ObservableObject@" + f()), b(t, "$mobx", n = new $e(t, e, i)), n);
        }
        function We(t, e, i, n) {
            var r = Ke(t);
            if (be(r)) {
                var o = _e(r, {
                    object: t,
                    name: e,
                    type: "add",
                    newValue: i
                });
                if (!o) return;
                i = o.newValue;
            }
            i = (r.values[e] = new ct(i, n, r.name + "." + e, !1)).value, Object.defineProperty(t, e, function (e) {
                return Xe[e] || (Xe[e] = {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return this.$mobx.read(this, e);
                    },
                    set: function (t) {
                        this.$mobx.write(this, e, t);
                    }
                });
            }(e)), r.keys && r.keys.push(e), function (t, e, i, n) {
                var r = Se(t), o = Ht(), s = r || o ? {
                    type: "add",
                    object: e,
                    name: i,
                    newValue: n
                } : null;
                o && Kt(c({}, s, {
                    name: t.name,
                    key: i
                }));
                r && xe(t, s);
                o && Xt();
            }(r, t, e, i);
        }
        var Xe = Object.create(null), qe = Object.create(null);
        function Ye(t) {
            var e = t.$mobx;
            return e || (N(t), t.$mobx);
        }
        var Qe = w("ObservableObjectAdministration", $e);
        function Je(t) {
            return !!v(t) && (N(t), Qe(t.$mobx));
        }
        function Ze(t, e) {
            if ("object" == typeof t && null !== t) {
                if (Ne(t)) return void 0 !== e && h(!1), t.$mobx.atom;
                if (He(t)) return t.$mobx;
                if (Ge(t)) {
                    var i = t;
                    return void 0 === e ? Ze(i._keys) : ((n = i._data.get(e) || i._hasMap.get(e)) || h(!1),
                        n);
                }
                var n;
                if (N(t), e && !t.$mobx && t[e], Je(t)) return e ? ((n = t.$mobx.values[e]) || h(!1),
                    n) : h(!1);
                if (P(t) || yt(t) || Ft(t)) return t;
            } else if ("function" == typeof t && Ft(t.$mobx)) return t.$mobx;
            return h(!1);
        }
        function ti(t, e) {
            return t || h("Expecting some object"), void 0 !== e ? ti(Ze(t, e)) : P(t) || yt(t) || Ft(t) ? t : Ge(t) || He(t) ? t : (N(t),
                t.$mobx ? t.$mobx : void h(!1));
        }
        var ei = Object.prototype.toString;
        function ii(t, e) {
            return ni(t, e);
        }
        function ni(t, e, i, n) {
            if (t === e) return 0 !== t || 1 / t == 1 / e;
            if (null == t || null == e) return !1;
            if (t != t) return e != e;
            var r = typeof t;
            return ("function" == r || "object" == r || "object" == typeof e) && function (t, e, i, n) {
                t = ri(t), e = ri(e);
                var r = ei.call(t);
                if (r !== ei.call(e)) return !1;
                switch (r) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + t == "" + e;

                    case "[object Number]":
                        return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;

                    case "[object Date]":
                    case "[object Boolean]":
                        return +t == +e;

                    case "[object Symbol]":
                        return "undefined" != typeof Symbol && Symbol.valueOf.call(t) === Symbol.valueOf.call(e);
                }
                var o = "[object Array]" === r;
                if (!o) {
                    if ("object" != typeof t || "object" != typeof e) return !1;
                    var s = t.constructor, a = e.constructor;
                    if (s !== a && !("function" == typeof s && s instanceof s && "function" == typeof a && a instanceof a) && "constructor" in t && "constructor" in e) return !1;
                }
                n = n || [];
                var c = (i = i || []).length;
                for (; c--;) if (i[c] === t) return n[c] === e;
                if (i.push(t), n.push(e), o) {
                    if ((c = t.length) !== e.length) return !1;
                    for (; c--;) if (!ni(t[c], e[c], i, n)) return !1;
                } else {
                    var u = Object.keys(t), h = void 0;
                    if (c = u.length, Object.keys(e).length !== c) return !1;
                    for (; c--;) if (h = u[c], l = e, p = h, !Object.prototype.hasOwnProperty.call(l, p) || !ni(t[h], e[h], i, n)) return !1;
                }
                var l, p;
                return i.pop(), n.pop(), !0;
            }(t, e, i, n);
        }
        function ri(t) {
            return Ne(t) ? t.peek() : _(t) || Ge(t) ? T(t.entries()) : S(t) || He(t) ? T(t.entries()) : t;
        }
        "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
                return Ct.spyListeners.push(e), p(function () {
                    Ct.spyListeners = Ct.spyListeners.filter(function (t) {
                        return t !== e;
                    });
                });
            },
            extras: {
                getDebugName: function (t, e) {
                    return (void 0 !== e ? Ze(t, e) : Je(t) || Ge(t) || He(t) ? ti(t) : Ze(t)).name;
                }
            },
            $mobx: "$mobx"
        });
    }).call(this, si(27), si(28));
}, function (t, e, i) {
    "use strict";
    i.d(e, "b", function () {
        return c;
    }), i.d(e, "d", function () {
        return u;
    }), i.d(e, "a", function () {
        return h;
    }), i.d(e, "c", function () {
        return l;
    }), i.d(e, "e", function () {
        return d;
    });
    var n = i(7), r = i(4), o = i(12), s = i(13), a = r.a.getLogger("@h5/libs-client"), c = {
        emitter: new s.a()
    };
    function u(t, e) {
        c[t] = e;
    }
    function h() {
        return c;
    }
    function l(t) {
        c.appId = t.appId, c.wxAppId = t.wxAppId, c.user = t.user, c.clientVersion = t.clientVersion,
            c.time = Date, c.DEBUG = t.DEBUG, t.httpRequester && (c.sendHttp ? a.error("initClientLib 不需要传入 httpRequester 了, 已在 @h5/wxgame 库中处理") : c.sendHttp = t.httpRequester),
            t.env && (c.env ? a.error("initClientLib 不需要传入 env 了, 已在 @h5/wxgame 库中处理") : c.env = t.env),
            t.distinctId && a.error("initClientLib 不需要传入 distinctId, 库中会直接读取 user.distinctId"),
            n.b.dealDistinctId(), Object(o.c)("#init", {
                cv: c.clientVersion
            }), setTimeout(function () {
                c.logged || a.warn('启动已超过20秒, 仍未收到 logged 事件. 请确认项目中是否有在登录完成后调用 hostEnv.emitter.emit("logged");');
            }, 2e4);
    }
    c.emitter.once("logged", function () {
        c.logged = !0;
    });
    var p = new Promise(function (t) {
        c.logged ? t() : c.emitter.once("logged", t);
    });
    function d() {
        return p;
    }
}, function (t, e, i) {
    "use strict";
    i.d(e, "a", function () {
        return n;
    });
    var n = function () {
        function e(t) {
            void 0 === t && (t = ""), this.name = t, this.printer = console, this.formatter = function (t) {
                var e = t ? " [" + t + "]" : "";
                return function (t) {
                    return t.unshift(function (t) {
                        var e = t.getHours(), i = t.getMinutes(), n = t.getSeconds(), r = t.getMilliseconds();
                        return e + ":" + (i < 10 ? "0" : "") + i + ":" + (n < 10 ? "0" : "") + n + "." + (r < 100 ? "0" : "") + (r < 10 ? "0" : "") + r;
                    }(new Date()) + e), t;
                };
            }(t);
        }
        return e.prototype.setPrinter = function (t) {
            return this.printer = t, this;
        }, e.prototype.setFormatter = function (t) {
            return this.formatter = t, this;
        }, e.prototype.log = function () {
            for (var t, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
            (t = this.printer).log.apply(t, this.formatter(e));
        }, e.prototype.info = function () {
            for (var t, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
            (t = this.printer).info.apply(t, this.formatter(e));
        }, e.prototype.warn = function () {
            for (var t, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
            (t = this.printer).warn.apply(t, this.formatter(e));
        }, e.prototype.error = function () {
            for (var t, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
            (t = this.printer).error.apply(t, this.formatter(e));
        }, e.getLogger = function (t) {
            return r[t] || (r[t] = new e(t)), r[t];
        }, e.log = function () {
            for (var t, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
            (t = o.printer).log.apply(t, o.formatter(e));
        }, e.info = function () {
            for (var t, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
            (t = o.printer).info.apply(t, o.formatter(e));
        }, e.warn = function () {
            for (var t, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
            (t = o.printer).warn.apply(t, o.formatter(e));
        }, e.error = function () {
            for (var t, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
            (t = o.printer).error.apply(t, o.formatter(e));
        }, e.setPrinter = function (t) {
            o.printer = t;
        }, e.setFormatter = function (t) {
            o.formatter = t;
        }, e.getPrinter = function () {
            return o.printer;
        }, e.getFormatter = function () {
            return o.formatter;
        }, e;
    }(), r = {};
    var o = new n();
}, function (t, e, i) {
    "use strict";
    var n;
    i.d(e, "a", function () {
        return o;
    });
    var r = ((n = {})[-2] = "服务器发生了未知错误!", n[-1] = "服务器发生错误!", n[90] = "当前用户不在线!", n[91] = "非法数据!",
        n[50] = "服务器内部错误!", n[93] = "时间异常!", n[94] = "session失效!", n[95] = "token失效!", n[100] = "该账号已在其他地方登录!",
        n[101] = "Invoke地址错误!", n[202] = "需要授权!", n[203] = "客户端版本太低,请先更新!", n[250] = "协议未实现!",
        n[90001] = "连接已失效.", n[90002] = "服务端未响应.", n[90003] = "服务端响应消息列表为空.", n), o = function (t, e) {
            this.name = "ProtocolError", this.errCode = t, this.errMsg = e ? "服务器错误: " + e : function (t) {
                return r[t] || ("number" == typeof t ? "错误码: " + t : "服务器错误: " + t);
            }(t);
        };
}, function (t, e, i) {
    "use strict";
    i.d(e, "a", function () {
        return r;
    });
    var n = {};
    function r(t, e) {
        return n[t] ? n[t].fromIndex(e) : {};
    }
}, function (t, e, i) {
    "use strict";
    i.d(e, "a", function () {
        return r;
    }), i.d(e, "e", function () {
        return p;
    }), i.d(e, "f", function () {
        return d;
    }), i.d(e, "c", function () {
        return f;
    }), i.d(e, "g", function () {
        return y;
    }), i.d(e, "d", function () {
        return v;
    }), i.d(e, "b", function () {
        return g;
    });
    var r, n, o = i(0), s = i(3), a = i(4), c = i(11), u = a.a.getLogger("统计");
    (n = r || (r = {})).isClosed = !1, n.close = function () {
        n.isClosed = !0, u.log("关闭统计");
    };
    var h = [], l = function (i, n, r) {
        void 0 === r && (r = {});
        var o, s, a, c, u = 0, h = function () {
            u = !1 === r.leading ? 0 : Date.now(), c = null, a = i.apply(o, s), c || (o = s = null);
        };
        function t() {
            var t = Date.now();
            u || !1 !== r.leading || (u = t);
            var e = n - (t - u);
            return o = this, s = arguments, e <= 0 || n < e ? (window.clearTimeout(c), c = null,
                u = t, a = i.apply(o, s), c || (o = s = null)) : c || !1 === r.trailing || (c = window.setTimeout(h, e)),
                a;
        }
        return t.flush = function () {
            return c && (window.clearTimeout(c), h()), a;
        }, t;
    }(function () {
        if (1 === h.length) {
            var t = Object(o.a)(Object(o.a)({}, new b()), h.pop());
            s.b.sendHttp({
                url: "",//https://analysis.i51game.com/api/record
                method: "POST",
                data: t
            });
        } else if (1 < h.length) {
            t = Object(o.a)(Object(o.a)({}, new b()), {
                list: h.splice(0, h.length)
            });
            s.b.sendHttp({
                url: "",//https://analysis.i51game.com/api/recordList
                method: "POST",
                data: t
            });
        }
    }, 15, {
        leading: !1
    });
    function p(t, e, i) {
        if (s.b.DEBUG && u.log(t, e), !r.isClosed) {
            var n = new _(t, e);
            "number" == typeof i && (n.time = i), h.push(n), l();
        }
    }
    function d(t, e, i) {
        if (s.b.DEBUG && u.log(t, e), r.isClosed) return Promise.resolve();
        var n = Object(o.a)(Object(o.a)({}, new b()), new _(t, e));
        return "number" == typeof i && (n.time = i), s.b.sendHttp({
            url: "",//https://analysis.i51game.com/api/record
            method: "POST",
            data: n
        });
    }
    function f() {
        return l.flush();
    }
    function y(t) {
        g.setLinkKey(t);
    }
    function v() {
        return g.getLinkKey();
    }
    var g = new (function () {
        function t() { }
        return t.prototype.setLinkKey = function (t) {
            void 0 === this.linkKey && (this.linkKey = t || "");
        }, t.prototype.getLinkKey = function () {
            return this.linkKey;
        },
            t.prototype.dealDistinctId = function () {
                this.distinctId = function () {
                    {
                        // if (s.b.user.distinctId) {
                        //     if (s.b.storage) {
                        //         var t = s.b.storage.getItem("user-distinctId");
                        //         if (t) {
                        //             var e = JSON.parse(t);
                        //             return s.b.user.distinctId === e ? u.log("User 里面 distinctId 相关的内容可以全部删除了, 已在库中处理.") : u.error("发生了一些异常的情况, 从 storage 中读取到的 distinctId 和从 user 中读取到的 distinctId 内容不一致! 请检查相关代码, 本次暂时使用 storage 中的数据."), 
                        //             e;
                        //         }
                        //         return m(s.b.storage, s.b.user.distinctId), u.error("发生了一些异常的情况, 从 storage 中读取到的 distinctId 和从 user 中读取到的 distinctId 内容不一致! 请检查相关代码, 本次暂时使用 user 中的数据."), 
                        //         s.b.user.distinctId;
                        //     }
                        //     return u.warn("建议更新 @h5/wxgame >=3.8"), s.b.user.distinctId;
                        // }
                        // if (s.b.storage) {
                        //     var t = s.b.storage.getItem("user-distinctId");
                        //     if (t) return JSON.parse(t);
                        //     var e = Object(c.b)();
                        //     return m(s.b.storage, e), e;
                        // }
                        // return void u.error("缺少 distinctId 相关内容, 建议直接更新 @h5/wxgame >=3.8 即可");
                    }
                }();
            }, t;
    }())();
    function m(t, e) {
        // t.setItem("user-distinctId", JSON.stringify(e));
    }
    var b = function () {
        this.appId = s.b.appId;
        var t = s.b.user;
        t.uid && (this.uid = String(t.uid)), t.chid && (this.chid = t.chid), g.linkKey && (this.linkKey = g.linkKey),
            g.distinctId && (this.distinctId = g.distinctId, function (t) {
                if (!w) {
                    var e = s.b.env;
                    e && (t.sysInfo = {
                        br: e.brand,
                        md: e.model,
                        pt: e.platform,
                        st: e.system
                    }, w = !0);
                }
            }(this)), t.$tags && 0 < t.$tags.length && (this.tags = t.$tags);
    }, w = !1;
    var _ = function (t, e) {
        this.eventId = t, this.time = s.b.time.now(), e && (this.eventData = e);
    };
}, function (t, e, i) {
    "use strict";
    i.d(e, "a", function () {
        return n;
    }), i.d(e, "b", function () {
        return r;
    }), i.d(e, "d", function () {
        return o;
    }), i.d(e, "c", function () {
        return s;
    });
    var a = {
        next: Math.random
    };
    function n(t, e, i) {
        return void 0 === e ? Math.floor(a.next() * t) : "number" == typeof e ? void 0 === i ? Math.floor(a.next() * (e - t)) + t : Math.floor(i.next() * (e - t)) + t : Math.floor(e.next() * t);
    }
    function r(t, e, i) {
        if (void 0 === e) {
            if (0 === t.length) return;
            return t[Math.floor(a.next() * t.length)];
        }
        if ("number" != typeof e) return t[Math.floor(e.next() * t.length)];
        if (void 0 === i && (i = a), e >= t.length) return t;
        for (var n = [], r = 0, o = t.length; r < o; r++) if (n.length < e) n.push(t[r]); else {
            var s = Math.floor(i.next() * r);
            s < e && (n[s] = t[r]);
        }
        return n;
    }
    function o(t, e) {
        void 0 === e && (e = a);
        for (var i = 0, n = t.map(function (t) {
            return i += t;
        }), r = e.next() * i, o = 0, s = n.length; o < s; ++o) if (r < n[o]) return o;
        return -1;
    }
    function s(t, e) {
        var i, n;
        void 0 === e && (e = a);
        for (var r = t.length; 1 < r;) i = Math.floor(e.next() * r--), n = t[r], t[r] = t[i],
            t[i] = n;
        return t;
    }
    (function () {
        function t(t, e, i) {
            void 0 === i && (i = a), this.mean = t, this.deviation = e, this.randomSource = i;
        }
        t.prototype.next = function () {
            var t = 1 - this.randomSource.next(), e = 1 - this.randomSource.next();
            return Math.sqrt(-2 * Math.log(t)) * Math.cos(2 * Math.PI * e) * this.deviation + this.mean;
        };
    })(), function () {
        function t(t) {
            this.seed = t;
        }
        t.prototype.next = function () {
            return this.seed = (25214903917 * this.seed + 11) % 2e48, this.seed / 2e48;
        };
    }();
}, function (t, e, i) {
    "use strict";
    var a = i(4).a.getLogger("host"), c = Symbol("host-key");
    !function () {
        function t() { }
        t.prototype.setData = function (t) {
            if (!t) return this;
            var e = this[c];
            if (!e) return this;
            for (var i = 0, n = e.length; i < n; i++) {
                var r = e[i], o = r[0], s = r[1];
                void 0 !== t[o] && (s(t[o]) ? this[o] = t[o] : a.warn(o + " check fail:", t[o]));
            }
            return this;
        }, t.key = r;
    }();
    var n = new WeakMap();
    function r(i) {
        var t = n.get(i);
        return t || (t = function (t, e) {
            (t[c] || (t[c] = [])).push([e, i]);
        }, n.set(i, t)), t;
    }
}, function (t, e, i) {
    "use strict";
    function n(t, e) {
        r ? a(t, e) : s.length < 10 && s.push({
            cmd: t,
            body: e
        });
    }
    i.d(e, "a", function () {
        return n;
    });
    var r = !1, o = {}, s = [];
    function a(t, e) {
        var i = o[t];
        i && i(e);
    }
}, function (t, e, i) {
    "use strict";
    i.d(e, "e", function () {
        return s;
    }), i.d(e, "a", function () {
        return a;
    }), i.d(e, "c", function () {
        return c;
    }), i.d(e, "d", function () {
        return u;
    }), i.d(e, "b", function () {
        return h;
    }), i.d(e, "f", function () {
        return l;
    });
    var n = i(0), r = i(3), o = i(4);
    function s(t) {
        var e = [];
        for (var i in t) t.hasOwnProperty(i) && null != t[i] && e.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
        return e.join("&");
    }
    function a() {
        return Object(n.b)(this, void 0, void 0, function () {
            var e;
            return Object(n.e)(this, function (t) {
                switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]), [4, r.b.sendHttp({
                            url: "",//https://wxgame-conf.i51game.com/open/bc
                            method: "GET",
                            dataType: "text"
                        })];

                    case 1:
                        return [2, "1" == t.sent()];

                    case 2:
                        return e = t.sent(), o.a.warn("open/bc", e), [2, !1];

                    case 3:
                        return [2];
                }
            });
        });
    }
    function c(t) {
        return /tencent|腾\s*讯|微\s*信|广\s*告|助\s*手|^wx|^tc|^tx|weixin/i.test(t);
    }
    function u(i) {
        return Object(n.b)(this, void 0, void 0, function () {
            var e;
            return Object(n.e)(this, function (t) {
                switch (t.label) {
                    case 0:
                        if (!i) return [2, !1];
                        t.label = 1;

                    case 1:
                        return t.trys.push([1, 3, , 4]), [4, r.b.sendHttp({
                            url: "",//https://wxgame-conf.i51game.com/open/checkApp
                            method: "GET",
                            data: {
                                appId: i
                            },
                            dataType: "text"
                        })];

                    case 2:
                        return [2, "1" == t.sent()];

                    case 3:
                        return e = t.sent(), o.a.warn("open/checkApp", e), [2, !1];

                    case 4:
                        return [2];
                }
            });
        });
    }
    function h() {
        return "" + Date.now().toString(36) + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(36);
    }
    function l() {
        return r.b.sendHttp({
            url: "",//https://wxgame-conf.i51game.com/open/referer
            method: "GET",
            dataType: "text"
        });
    }
}, function (t, e, i) {
    "use strict";
    i.d(e, "c", function () {
        return o;
    }), i.d(e, "b", function () {
        return s;
    }), i.d(e, "a", function () {
        return a;
    });
    var n = i(7), r = Date.now();
    function o(t, e) {
        Object(n.f)(t, e);
    }
    function s(t, e, i) {
        "#guideS" === t || "#guideE" === t ? Object(n.e)(t, {
            t: Date.now() - r
        }) : Object(n.e)(t, e, i);
    }
    function a(t, e) {
        s("#share", {
            ss: t,
            si: e
        });
    }
}, function (t, e, i) {
    "use strict";
    i.d(e, "a", function () {
        return n;
    });
    var n = function () {
        function t() {
            this._events = {};
        }
        return t.prototype.emit = function (t) {
            for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
            var n = this._events[t];
            if (!n) return !1;
            1 < n.length && (n = n.slice());
            for (var r = 0, o = n.length; r < o; r++) {
                var s = n[r];
                s.once && this.off(t, s.fn, s.context), s.fn.apply(s.context, e);
            }
            return !0;
        }, t.prototype.on = function (t, e, i, n) {
            var r = new s(e, i, n), o = this._events[t];
            return o ? o.find(function (t) {
                return t.fn === e && t.context === i;
            }) || o.push(r) : this._events[t] = [r], this;
        }, t.prototype.once = function (t, e, i) {
            return this.on(t, e, i, !0);
        }, t.prototype.off = function (t, e, i) {
            var n = this._events[t];
            if (n) {
                var r = n.findIndex(function (t) {
                    return t.fn === e && t.context === i;
                });
                0 <= r && n.splice(r, 1);
            }
            return this;
        }, t.prototype.has = function (t) {
            return this._events[t] && 0 < this._events[t].length;
        }, t.prototype.removeAllListeners = function (t) {
            this._events[t] = [];
        }, t;
    }(), s = function (t, e, i) {
        void 0 === i && (i = !1), this.fn = t, this.context = e, this.once = i;
    };
}, function (t, e, i) {
    "use strict";
    i.d(e, "a", function () {
        return n;
    });
    var l = i(0);
    function n(t, u) {
        if (void 0 === u && (u = 1), 0 === t.length) throw new RangeError("arr.length should > 0");
        var e = function (e) {
            var i, n, r, o, s, a, c;
            return Object(l.e)(this, function (t) {
                switch (t.label) {
                    case 0:
                        if (0 !== (i = e.length)) return [3, 3];
                        t.label = 1;

                    case 1:
                        return [4, []];

                    case 2:
                        return t.sent(), [3, 1];

                    case 3:
                        return n = 0, r = h, [4, []];

                    case 4:
                        u = r.apply(void 0, [t.sent(), u]), t.label = 5;

                    case 5:
                        if (o = (n + u) % i, s = void 0, n + u <= i) s = e.slice(n, n + u); else for (s = [],
                            a = 0; a < u; a++) s.push(e[(n + a) % i]);
                        return n = o, c = h, [4, s];

                    case 6:
                        return u = c.apply(void 0, [t.sent(), u]), [3, 5];

                    case 7:
                        return [2];
                }
            });
        }(t = t.concat());
        return e.next(), e;
        function h(t, e) {
            if (null == t) return e;
            if ("number" != typeof t) throw new TypeError(".next() 只能接受 number 类型参数");
            return t;
        }
    }
}, function (t, e, i) {
    "use strict";
    var o = i(0), s = i(3), a = i(5);
    i(10), i(6);
    !function () {
        function t(t) {
            this._disposed = !1, this.invokeUrl = t;
        }
        t.prototype.send = function (t, n, r) {
            return Object(o.b)(this, void 0, void 0, function () {
                var e, i;
                return Object(o.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (this._disposed) throw new a.a(90001);
                            t.label = 1;

                        case 1:
                            return t.trys.push([1, 3, , 4]), [4, s.b.sendHttp({
                                url: this.invokeUrl,
                                method: n,
                                data: r
                            })];

                        case 2:
                            return e = t.sent(), [3, 4];

                        case 3:
                            return i = t.sent(), console.log("[HTTP错误]", i), [3, 4];

                        case 4:
                            if (!e) throw new a.a(90002);
                            if (!("cmds" in e)) {
                                if ("err" in e) throw new a.a(-3, e.err);
                                throw new a.a(90002);
                            }
                            if (!e.cmds.length) throw new a.a(90003);
                            return [2, e.cmds];
                    }
                });
            });
        }, t.prototype.dispose = function () {
            this._disposed = !0;
        };
    }();
}, function (t, e, i) {
    "use strict";
    i.d(e, "b", function () {
        return r;
    }), i.d(e, "a", function () {
        return o;
    }), i.d(e, "c", function () {
        return a;
    });
    var f = i(0), n = i(3), y = i(14), s = i(8);
    function r(t) {
        void 0 === t && (t = {});
        var e = "string" == typeof n.b.clientVersion ? parseInt(n.b.clientVersion) || Number.MAX_SAFE_INTEGER : n.b.clientVersion;
        return n.b.sendHttp({
            url: "",//https://wxgame-conf.i51game.com/open/moreGame
            method: "GET",
            data: Object(f.a)({
                appId: n.b.wxAppId,
                version: e,
                platform: n.b.env.platform
            }, t)
        });
    }
    function o(e, i) {
        var n, r, o, s, a, c, u, h, l, p, d;
        return void 0 === i && (i = 12), Object(f.e)(this, function (t) {
            switch (t.label) {
                case 0:
                    if (!(e.length <= i)) return [3, 3];
                    n = e.slice(), t.label = 1;

                case 1:
                    return [4, n];

                case 2:
                    return t.sent(), [3, 1];

                case 3:
                    for (r = [], o = [], s = 0, a = e.length; s < a; s++) (c = e[s]).fixed ? r.push(c) : o.push(c);
                    if (u = e.slice(0, i), !((h = i - u.reduce(function (t, e) {
                        return e.fixed ? t + 1 : t;
                    }, 0)) <= 0)) return [3, 7];
                    t.label = 4;

                case 4:
                    return [4, u];

                case 5:
                    return t.sent(), [3, 4];

                case 6:
                    return [3, 10];

                case 7:
                    l = u.map(function (t) {
                        return !!t.fixed;
                    }), p = Object(y.a)(o, h), d = function () {
                        var e, i;
                        return Object(f.e)(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return e = r.slice(), i = p.next().value, [4, l.map(function (t) {
                                        return t ? e.shift() : i.shift();
                                    })];

                                case 1:
                                    return t.sent(), [2];
                            }
                        });
                    }, t.label = 8;

                case 8:
                    return [5, d()];

                case 9:
                    return t.sent(), [3, 8];

                case 10:
                    return [2];
            }
        });
    }
    function a(t, e) {
        if (t) {
            var i = t.filter(function (t) {
                return t.name !== e;
            }), n = Object(s.d)(i.map(function (t) {
                return t.weight;
            }));
            return i[n];
        }
    }
    !function () {
        function t(t, e) {
            this.data = t.filter(function (t) {
                return 0 < t.icons.length && -1 !== e.indexOf(t.appId);
            });
        }
        Object.defineProperty(t.prototype, "totalCount", {
            get: function () {
                return this.data.length;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.cloneData = function () {
            return this.data.map(function (t) {
                return {
                    raw_names: t.names,
                    names: t.names.slice(),
                    icons: t.icons.slice(),
                    appId: t.appId,
                    path: t.path
                };
            });
        }, t.prototype.createList = function (e) {
            var i, n, r, o;
            return Object(f.e)(this, function (t) {
                switch (t.label) {
                    case 0:
                        i = this.cloneData(), e && Object(s.c)(i), t.label = 1;

                    case 1:
                        if (!i.some(function (t) {
                            return 0 < t.icons.length;
                        })) return [3, 6];
                        n = 0, r = i.length, t.label = 2;

                    case 2:
                        return n < r ? 0 < (o = i[n]).icons.length ? [4, {
                            name: 0 < o.names.length ? c(o.names) : Object(s.b)(o.raw_names),
                            icon: c(o.icons),
                            appId: o.appId,
                            path: o.path
                        }] : [3, 4] : [3, 5];

                    case 3:
                        t.sent(), t.label = 4;

                    case 4:
                        return n++, [3, 2];

                    case 5:
                        return [3, 1];

                    case 6:
                        return [2];
                }
            });
        }, t.prototype.first = function (t, e) {
            return e && this.data.length >= t ? Object(s.c)(u(this.createList(!1), t)) : u(this.createList(e), t);
        }, t.prototype.random = function (t) {
            return u(this.createList(!0), t);
        };
    }();
    function c(t) {
        return t.splice(Object(s.a)(t.length), 1)[0];
    }
    function u(t, e) {
        for (var i = []; 0 < e;) {
            var n = t.next();
            if (n.done) break;
            i.push(n.value), e--;
        }
        return i;
    }
}, function (t, e, i) {
    "use strict";
    i.d(e, "a", function () {
        return n;
    });
    var o = i(0), s = i(3);
    function n(r) {
        return Object(o.b)(this, void 0, void 0, function () {
            var e, i, n;
            return Object(o.e)(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, s.b.sendHttp({
                            url: "",//https://wxgame-conf.i51game.com/open/share
                            method: "GET",
                            data: {
                                appId: s.b.wxAppId
                            }
                        })];

                    case 1:
                        for (i in e = t.sent()) n = e[i], e[i] = n.filter(function (t) {
                            return r ? !1 !== t.censor : !1 !== t.prod;
                        });
                        return [2, e];
                }
            });
        });
    }
}, function (t, e, i) {
    "use strict";
    i.d(e, "a", function () {
        return r;
    });
    var n = i(3);
    function r(t) {
        if (void 0 === t && (t = "yunying"), "string" == typeof t) return n.b.sendHttp({
            url: "",//"https://wxgame-conf.i51game.com/open/conf/" + t,
            method: "GET",
            data: {
                appId: n.b.wxAppId
            }
        });
        if (Array.isArray(t)) return n.b.sendHttp({
            url: "",//https://wxgame-conf.i51game.com/open/conf
            method: "GET",
            data: {
                appId: n.b.wxAppId,
                keys: t.join(",")
            }
        });
        throw new TypeError("getOperationConfig 的第一个参数应该是 string | string[]");
    }
}, function (t, e, i) {
    "use strict";
    var n = i(20);
    i.o(n, "amIFromBigCity") && i.d(e, "amIFromBigCity", function () {
        return n.amIFromBigCity;
    }), i.o(n, "checkTokenValid") && i.d(e, "checkTokenValid", function () {
        return n.checkTokenValid;
    }), i.o(n, "delMessages") && i.d(e, "delMessages", function () {
        return n.delMessages;
    }), i.o(n, "getMessageCnt") && i.d(e, "getMessageCnt", function () {
        return n.getMessageCnt;
    }), i.o(n, "getMessages") && i.d(e, "getMessages", function () {
        return n.getMessages;
    }), i.o(n, "getOpenGId") && i.d(e, "getOpenGId", function () {
        return n.getOpenGId;
    }), i.o(n, "getTime") && i.d(e, "getTime", function () {
        return n.getTime;
    }), i.o(n, "getUserData") && i.d(e, "getUserData", function () {
        return n.getUserData;
    }), i.o(n, "getUserInfo") && i.d(e, "getUserInfo", function () {
        return n.getUserInfo;
    }), i.o(n, "initGameCenter") && i.d(e, "initGameCenter", function () {
        return n.initGameCenter;
    }), i.o(n, "isInBlackList") && i.d(e, "isInBlackList", function () {
        return n.isInBlackList;
    }), i.o(n, "isNearDay") && i.d(e, "isNearDay", function () {
        return n.isNearDay;
    }), i.o(n, "isOurApp") && i.d(e, "isOurApp", function () {
        return n.isOurApp;
    }), i.o(n, "isSameDay") && i.d(e, "isSameDay", function () {
        return n.isSameDay;
    }), i.o(n, "loginAccount") && i.d(e, "loginAccount", function () {
        return n.loginAccount;
    }), i.o(n, "pushMessage") && i.d(e, "pushMessage", function () {
        return n.pushMessage;
    }), i.o(n, "randomSelect") && i.d(e, "randomSelect", function () {
        return n.randomSelect;
    }), i.o(n, "randomUsers") && i.d(e, "randomUsers", function () {
        return n.randomUsers;
    }), i.o(n, "sendApi") && i.d(e, "sendApi", function () {
        return n.sendApi;
    }), i.o(n, "setUserData") && i.d(e, "setUserData", function () {
        return n.setUserData;
    }), i.o(n, "syncUserInfo") && i.d(e, "syncUserInfo", function () {
        return n.syncUserInfo;
    }), i.o(n, "toQueryString") && i.d(e, "toQueryString", function () {
        return n.toQueryString;
    }), i.o(n, "whatIsMyReferer") && i.d(e, "whatIsMyReferer", function () {
        return n.whatIsMyReferer;
    });
    i(15), i(10), i(6), i(5);
}, function (t, e) { }, function (t, e, i) {
    "use strict";
    i.d(e, "i", function () {
        return n;
    }), i.d(e, "j", function () {
        return r;
    }), i.d(e, "a", function () {
        return o;
    }), i.d(e, "o", function () {
        return f;
    }), i.d(e, "e", function () {
        return y;
    }), i.d(e, "n", function () {
        return v;
    }), i.d(e, "g", function () {
        return g;
    }), i.d(e, "k", function () {
        return m;
    }), i.d(e, "d", function () {
        return b;
    }), i.d(e, "b", function () {
        return w;
    }), i.d(e, "c", function () {
        return _;
    }), i.d(e, "h", function () {
        return S;
    }), i.d(e, "f", function () {
        return T;
    }), i.d(e, "l", function () {
        return x;
    }), i.d(e, "m", function () {
        return k;
    });
    var s, a, c, u, h = i(0), l = i(3), p = i(4).a.getLogger("net");
    function n(t, e, i) {
        s = e, a = t, u = i, p.log("api: " + t);
    }
    function r(i, n, r, o) {
        return Object(h.b)(this, void 0, void 0, function () {
            var e;
            return Object(h.e)(this, function (t) {
                switch (t.label) {
                    case 0:
                        if (!a || !s || !u) throw new O(-1, "loginAccount 之前请先调用 initGameCenter");
                        return e = "object" == typeof n ? n : {
                            fuid: n,
                            chid: r,
                            fType: o
                        }, [4, (c = i)()];

                    case 1:
                        return [2, d(t.sent(), e)];
                }
            });
        });
    }
    function d(i, n) {
        return Object(h.b)(this, void 0, void 0, function () {
            var e;
            return Object(h.e)(this, function (t) {
                return p.log("==> loginAccount"), e = "string" == typeof i ? {
                    gameId: s,
                    code: i
                } : Object(h.a)({
                    gameId: s
                }, i), n.fuid && (e.fuid = n.fuid), n.chid && (e.chid = Number(n.chid)), n.fType && (e.fType = n.fType),
                    n.encryptedData && (e.encryptedData = n.encryptedData), n.iv && (e.iv = n.iv), n.TTGAME ? [2, L(a + "/game/login/tt", e)] : [2, L(a + "/game/login", e)];
            });
        });
    }
    function o() {
        return Object(h.b)(this, void 0, void 0, function () {
            var e;
            return Object(h.e)(this, function (t) {
                switch (t.label) {
                    case 0:
                        if (!l.b.user.uid || !l.b.user.token) return [3, 5];
                        t.label = 1;

                    case 1:
                        return t.trys.push([1, 3, , 4]), [4, k("checkToken")];

                    case 2:
                        return t.sent(), [2, !0];

                    case 3:
                        return !(e = t.sent()) || 10003 !== e.errCode && 10002 !== e.errCode ? p.error(e) : p.log("缓存的 token 已过期"),
                            [2, !1];

                    case 4:
                        return [3, 6];

                    case 5:
                        return [2, !1];

                    case 6:
                        return [2];
                }
            });
        });
    }
    function f(t, e) {
        return k("syncUserInfo", {
            encryptedData: t,
            iv: e
        });
    }
    function y(t, e) {
        return k("getOpenGId", {
            encryptedData: t,
            iv: e
        });
    }
    function v(t) {
        return l.b.DEBUG && p.log("==> api/setUserData;", t.map(function (t) {
            return t.key + ": " + t.value;
        }).join("; ")), L(a + "/game/api/setUserData", {
            gameId: s,
            uid: l.b.user.uid,
            token: l.b.user.token,
            kvList: t
        });
    }
    function g(t) {
        return k("getUserData", {
            keyList: t
        });
    }
    function m(t) {
        return k("pushMessage", t);
    }
    function b(t) {
        return k("getMessages", t);
    }
    function w(t) {
        return k("delMessages", {
            ids: t
        });
    }
    function _(t) {
        return k("getMessageCnt", t);
    }
    function S() {
        return c || (console.log("GameCenter getUserInfo:"), console.log("直接用缓存的 token 去 getUserInfo 的时候（这相当于跳过了 loginAccount 的步骤）, \n要先调用一下 setCodeGetter 传入获取 wx.login 的 code 的方法, \n不然 token 失效之后会没法自动重登."),
            console.log("参考这里(第33行): http://git.h5wg-ex.com:3000/client-libs/Project-Template/src/de17d43a3f3944e1bb94b0c07ad0596d7131b190/src/game_center/Login.ts"),
            console.log("这里 setCodeGetter 的参数和 loginAccount 的第一个参数是一样的.")), k("getUserInfo");
    }
    function T() {
        return L(a + "/game/time", {});
    }
    function x(t) {
        return k("randomUsers", {
            cnt: t
        });
    }
    function L(r, o, s) {
        return Object(h.b)(this, void 0, void 0, function () {
            var e, i, n;
            return Object(h.e)(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, l.b.sendHttp({
                            url: r,
                            method: "POST",
                            data: o
                        })];

                    case 1:
                        if (!(e = t.sent()).errno) return [3, 7];
                        if (s) throw new O(e.errno, e.errmsg);
                        return 10002 !== e.errno && 10003 !== e.errno ? [3, 3] : [4, u.beforeRelogin(e.errno)];

                    case 2:
                        return t.sent(), [3, 4];

                    case 3:
                        throw new O(e.errno, e.errmsg);

                    case 4:
                        if (!c) throw new O(-1, "请先调用 loginAccount 或者 setCodeGetter 传入获取 wx.login 的 code 的方法.");
                        return [4, c()];

                    case 5:
                        return [4, d(t.sent(), {})];

                    case 6:
                        return i = t.sent(), (n = l.b.user).uid = i.uid, n.token = i.token, p.log("uid: " + n.uid + " token: " + n.token),
                            u.onReloginSuccess(), o.uid = n.uid, o.token = n.token, [2, L(r, o)];

                    case 7:
                        return [2, e.data];
                }
            });
        });
    }
    function k(i, n) {
        return void 0 === n && (n = {}), Object(h.b)(this, void 0, void 0, function () {
            var e;
            return Object(h.e)(this, function (t) {
                switch (t.label) {
                    case 0:
                        // if (l.b.DEBUG && p.log("==> api/" + i, JSON.stringify(n)), !s) throw new Error("game center api " + i + " fail: GameCenter 未初始化");
                        return [4, Promise.resolve()


                            //     L(a + "/game/api/" + i, Object(h.a)({
                            //     gameId: s,
                            //     uid: l.b.user.uid,
                            //     token: l.b.user.token
                            // }, n), "checkToken" === i)

                        ];

                    case 1:
                        return e = t.sent(), l.b.DEBUG && p.log("api/" + i + " ==>", e), [2, e];
                }
            });
        });
    }
    var O = function (n) {
        function t(t, e) {
            var i = n.call(this, "[" + t + "] " + e) || this;
            return i.errCode = t, i.errMsg = e, i.name = "GameCenterError", i;
        }
        return Object(h.d)(t, n), t;
    }(Error);
}, function (t, e, i) {
    "use strict";
    function n(t, e) {
        return t.getFullYear() === e.getFullYear() && (t.getMonth() === e.getMonth() && t.getDate() === e.getDate());
    }
    function r(t, e) {
        return t.getTime() < e.getTime() ? n(new Date(t.setDate(t.getDate() + 1)), e) : n(new Date(e.setDate(e.getDate() + 1)), t);
    }
    i.d(e, "b", function () {
        return n;
    }), i.d(e, "a", function () {
        return r;
    });
}, function (t, e, i) {
    "use strict";
}, function (t, e, i) {
    "use strict";
    var o = i(0), s = i(3), a = i(4);
    function r(t) {
        return void 0 === t || t.endsWith("/") ? t : t + "/";
    }
    !function () {
        function t(t, e, i, n) {
            this.versionFileUrl = t, this.resm = e, this._loaded = !1, this.rootUrl = r(i),
                this.resDomain = r(n), this.versionInfo = new c(this.rootUrl);
        }
        t.prototype.init = function () {
            return Object(o.b)(this, void 0, void 0, function () {
                var e, i, n, r;
                return Object(o.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (this._loaded) return [2, !0];
                            e = a.a.getLogger("version").setPrinter(a.a.getPrinter()), i = this.versionFileUrl,
                                t.label = 1;

                        case 1:
                            return t.trys.push([1, 3, , 4]), e.log("正在加载... " + i), [4, function (n, r) {
                                return Object(o.b)(this, void 0, void 0, function () {
                                    var e, i;
                                    return Object(o.e)(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                if (!r--) return [3, 6];
                                                t.label = 1;

                                            case 1:
                                                return t.trys.push([1, 3, , 4]), [4, s.b.sendHttp(n)];

                                            case 2:
                                                return [2, t.sent()];

                                            case 3:
                                                return i = t.sent(), e = i, [3, 4];

                                            case 4:
                                                return [4, new Promise(function (t) {
                                                    return setTimeout(t, 500);
                                                })];

                                            case 5:
                                                return t.sent(), [3, 0];

                                            case 6:
                                                throw e;
                                        }
                                    });
                                });
                            }({
                                url: i,
                                method: "GET"
                            }, 3)];

                        case 2:
                            return (n = t.sent()) ? [3, 4] : (e.warn("加载失败 " + i), [2, !1]);

                        case 3:
                            return r = t.sent(), e.error(r), [2, !1];

                        case 4:
                            return this.setVersionData(n), e.log("加载成功!"), [2, !0];
                    }
                });
            });
        }, t.prototype.setVersionData = function (t) {
            this.versionInfo.setVersionData(t), this._loaded = !0;
        }, t.prototype.getVirtualUrl = function (t) {
            if (!t) return "";
            var e = t.indexOf("?"), i = -1 === e ? t : t.slice(0, e);
            if (this.rootUrl && !i.startsWith(this.rootUrl)) return t;
            if (!this._loaded) return void 0 === this.resDomain ? t : "" + this.resDomain + t;
            var n = this.versionInfo.getVirtualName(i);
            return n ? this.resm + "/" + n + "." + i.slice(i.lastIndexOf(".") + 1) : void 0 === this.resDomain ? t : "" + this.resDomain + t;
        };
    }();
    var c = function () {
        function t(t) {
            this._code = "", this._ver = 0, this._folderDir = {}, this._fileDir = {}, this._rootLen = t ? t.length : 0;
        }
        return t.prototype.setVersionData = function (t) {
            this._code = t.code, this._ver = t.ver, this._folderDir = t.body.folderObj, this._fileDir = t.body.fileObj;
        }, t.prototype.getVirtualName = function (t) {
            var e = t.lastIndexOf("/"), i = this._folderDir[-1 === e ? "" : t.slice(this._rootLen, e)];
            if (void 0 !== i) return this._fileDir[i + "/" + t.slice(e + 1)];
        }, t;
    }();
}, function (t, e, i) {
    "use strict";
    var n = i(0), s = "undefined" != typeof Symbol ? Symbol("tween_count") : "$$_tween_count_$$";
    !function () {
        function o(t, e) {
            this.loop = !1, this._initQueueProps = {}, this._curQueueProps = {}, this._steps = [],
                this.paused = !1, this.duration = 0, this._prevPos = -1, this.position = 0, this._prevPosition = 0,
                this._stepPosition = 0, this.passive = !1, this._target = t, e && (this.loop = !!e.loop,
                    this.onChange = e.onChange), this._curQueueProps = {}, this._initQueueProps = {},
                this._steps = [], e && e.paused ? this.paused = !0 : o._register(this, !0), e && "number" == typeof e.position && this.setPosition(e.position, !0);
        }
        o.get = function (t, e) {
            return new o(t, e);
        }, o.getOwned = function (t, e) {
            void 0 === e && (e = {});
            var i = new o(t, Object(n.a)(Object(n.a)({}, e), {
                paused: !0
            }));
            return i.paused = !1, i;
        }, o.removeTweens = function (t) {
            if (t[s]) {
                for (var e = o._tweens, i = e.length - 1; 0 <= i; i--) e[i]._target == t && (e[i].paused = !0,
                    e.splice(i, 1));
                t[s] = 0;
            }
        }, o.pauseTweens = function (t) {
            if (t[s]) for (var e = o._tweens, i = e.length - 1; 0 <= i; i--) e[i]._target == t && (e[i].paused = !0);
        }, o.resumeTweens = function (t) {
            if (t[s]) for (var e = o._tweens, i = e.length - 1; 0 <= i; i--) e[i]._target == t && (e[i].paused = !1);
        }, o.tick = function (t) {
            for (var e = o._tweens.concat(), i = e.length - 1; 0 <= i; i--) {
                var n = e[i];
                n.paused || n.$tick(t);
            }
            return !1;
        }, o._register = function (t, e) {
            var i = t._target, n = o._tweens;
            if (e) i[s] = 0 < i[s] ? i[s] + 1 : 1, n.push(t); else {
                i[s]--;
                for (var r = n.length; r--;) if (n[r] === t) return void n.splice(r, 1);
            }
        }, o.removeAllTweens = function () {
            for (var t = o._tweens, e = 0, i = t.length; e < i; e++) {
                var n = t[e];
                n.paused = !0, n._target[s] = 0;
            }
            t.length = 0;
        }, o.prototype.setPosition = function (t, e) {
            0 < t || (t = 0);
            var i = t, n = !1;
            if (i >= this.duration) if (this.loop) {
                var r = i % this.duration;
                i = 0 == r ? this.duration : r;
            } else i = this.duration, n = !0;
            if (i === this._prevPos) return n;
            n && this.setPaused(!0);
            var o = this._prevPos;
            this.position = this._prevPos = i, this._prevPosition = t;
            var s = this._steps.length;
            if (0 < s) {
                for (var a = -1, c = 0; c < s; c++) {
                    if ("step" == (u = this._steps[c]).type && (a = c, i >= u.t && i <= u.t + u.d)) break;
                }
                for (c = 0; c < s; c++) {
                    var u;
                    if ("action" === (u = this._steps[c]).type) {
                        if (e) continue;
                        i < o ? (o !== this.duration && h(u, o, this.duration), h(u, 0, i, !0)) : h(u, o, i);
                    } else "step" == u.type && a === c && this._updateTargetProps(u, Math.min((this._stepPosition = i - u.t) / u.d, 1));
                }
            }
            return this.onChange && this.onChange(), n;
        }, o.prototype._updateTargetProps = function (t, e) {
            if (this.passive = !!t.v, !this.passive) {
                t.e && (e = t.e(e));
                var i, n, r = t.p0, o = t.p1;
                for (var s in this._initQueueProps) null == (i = r[s]) && (r[s] = i = this._initQueueProps[s]),
                    null == (n = o[s]) && (o[s] = n = i), this._target[s] = i == n || 0 == e || 1 == e || "number" != typeof i ? 1 == e ? n : i : i + (n - i) * e;
            }
        }, o.prototype.setPaused = function (t) {
            return this.paused == t || (this.paused = t, o._register(this, !t)), this;
        }, o.prototype._addStep = function (t, e, i, n, r) {
            return 0 < t && (this._steps.push({
                type: "step",
                t: this.duration,
                d: t,
                p0: e,
                p1: i,
                e: n,
                v: r
            }), this.duration += t), this;
        }, o.prototype._appendQueueProps = function (t) {
            for (var e in t) void 0 === this._initQueueProps[e] && (this._initQueueProps[e] = this._target[e]),
                this._curQueueProps[e] = t[e];
            return this._curQueueProps;
        }, o.prototype._addAction = function (t, e, i) {
            return this._steps.push({
                type: "action",
                t: this.duration,
                f: t,
                p: e,
                o: i
            }), this;
        }, o.prototype.wait = function (t, e) {
            if (!(0 < t)) return this;
            var i = a(this._curQueueProps);
            return this._addStep(t, i, i, void 0, e);
        }, o.prototype.to = function (t, e, i) {
            return 0 < e && this._addStep(e, a(this._curQueueProps), a(this._appendQueueProps(t)), i),
                this.set(t);
        }, o.prototype.call = function (t, e, i) {
            return void 0 === e && (e = this._target), void 0 === i && (i = []), this._addAction(t, i, e);
        }, o.prototype.set = function (t, e) {
            return void 0 === e && (e = this._target), this._appendQueueProps(t), this._addAction(r, [t, e]);
        }, o.prototype.play = function (t) {
            return void 0 === t && (t = this), this.call(t.setPaused, t, [!1]);
        }, o.prototype.pause = function (t) {
            return void 0 === t && (t = this), this.call(t.setPaused, t, [!0]);
        }, o.prototype.$tick = function (t) {
            this.paused || this.setPosition(this._prevPosition + t);
        }, o.prototype.isPaused = function () {
            return this.paused;
        }, o.prototype.toOwned = function (t) {
            return null;
        }, o._tweens = [];
    }();
    function h(t, e, i, n) {
        void 0 === n && (n = !1);
        var r = e, o = i;
        i < e && (r = i, o = e);
        var s = t.t;
        (s == o || r < s && s < o || n && s == e) && t.f.apply(t.o, t.p);
    }
    function r(t, e) {
        for (var i in t) e[i] = t[i];
    }
    function a(t) {
        var e = {};
        for (var i in t) e[i] = t[i];
        return e;
    }
}, function (t, e, i) {
    "use strict";
    var n;
    !function (e) {
        function t(e) {
            return function (t) {
                return Math.pow(t, e);
            };
        }
        function i(e) {
            return function (t) {
                return 1 - Math.pow(1 - t, e);
            };
        }
        function n(e) {
            return function (t) {
                return (t *= 2) < 1 ? .5 * Math.pow(t, e) : 1 - .5 * Math.abs(Math.pow(2 - t, e));
            };
        }
        function r(e) {
            return function (t) {
                return t * t * ((e + 1) * t - e);
            };
        }
        function o(e) {
            return function (t) {
                return --t * t * ((e + 1) * t + e) + 1;
            };
        }
        function s(e) {
            return e *= 1.525, function (t) {
                return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
            };
        }
        function a(i, n) {
            var r = 2 * Math.PI;
            return function (t) {
                if (0 == t || 1 == t) return t;
                var e = n / r * Math.asin(1 / i);
                return -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * r / n);
            };
        }
        function c(i, n) {
            var r = 2 * Math.PI;
            return function (t) {
                if (0 == t || 1 == t) return t;
                var e = n / r * Math.asin(1 / i);
                return i * Math.pow(2, -10 * t) * Math.sin((t - e) * r / n) + 1;
            };
        }
        function u(i, n) {
            var r = 2 * Math.PI;
            return function (t) {
                var e = n / r * Math.asin(1 / i);
                return (t *= 2) < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * r / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * r / n) * .5 + 1;
            };
        }
        e.get = function (e) {
            return e < -1 && (e = -1), 1 < e && (e = 1), function (t) {
                return 0 == e ? t : e < 0 ? t * (t * -e + 1 + e) : t * ((2 - t) * e + (1 - e));
            };
        }, e.getPowIn = t, e.getPowOut = i, e.getPowInOut = n, e.quadIn = t(2), e.quadOut = i(2),
            e.quadInOut = n(2), e.cubicIn = t(3), e.cubicOut = i(3), e.cubicInOut = n(3), e.quartIn = t(4),
            e.quartOut = i(4), e.quartInOut = n(4), e.quintIn = t(5), e.quintOut = i(5), e.quintInOut = n(5),
            e.sineIn = function (t) {
                return 1 - Math.cos(t * Math.PI / 2);
            }, e.sineOut = function (t) {
                return Math.sin(t * Math.PI / 2);
            }, e.sineInOut = function (t) {
                return -.5 * (Math.cos(Math.PI * t) - 1);
            }, e.getBackIn = r, e.backIn = r(1.7), e.getBackOut = o, e.backOut = o(1.7), e.getBackInOut = s,
            e.backInOut = s(1.7), e.circIn = function (t) {
                return -(Math.sqrt(1 - t * t) - 1);
            }, e.circOut = function (t) {
                return Math.sqrt(1 - --t * t);
            }, e.circInOut = function (t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            }, e.bounceIn = function (t) {
                return 1 - e.bounceOut(1 - t);
            }, e.bounceOut = function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
            }, e.bounceInOut = function (t) {
                return t < .5 ? .5 * e.bounceIn(2 * t) : .5 * e.bounceOut(2 * t - 1) + .5;
            }, e.getElasticIn = a, e.elasticIn = a(1, .3), e.getElasticOut = c, e.elasticOut = c(1, .3),
            e.getElasticInOut = u, e.elasticInOut = u(1, .3 * 1.5);
    }(n || (n = {}));
}, function (t, e) {
    var i;
    i = function () {
        return this;
    }();
    try {
        i = i || new Function("return this")();
    } catch (t) {
        "object" == typeof window && (i = window);
    }
    t.exports = i;
}, function (t, e) {
    var i, n, r = t.exports = {};
    function o() {
        throw new Error("setTimeout has not been defined");
    }
    function s() {
        throw new Error("clearTimeout has not been defined");
    }
    function a(e) {
        if (i === setTimeout) return setTimeout(e, 0);
        if ((i === o || !i) && setTimeout) return i = setTimeout, setTimeout(e, 0);
        try {
            return i(e, 0);
        } catch (t) {
            try {
                return i.call(null, e, 0);
            } catch (t) {
                return i.call(this, e, 0);
            }
        }
    }
    !function () {
        try {
            i = "function" == typeof setTimeout ? setTimeout : o;
        } catch (t) {
            i = o;
        }
        try {
            n = "function" == typeof clearTimeout ? clearTimeout : s;
        } catch (t) {
            n = s;
        }
    }();
    var c, u = [], h = !1, l = -1;
    function p() {
        h && c && (h = !1, c.length ? u = c.concat(u) : l = -1, u.length && d());
    }
    function d() {
        if (!h) {
            var t = a(p);
            h = !0;
            for (var e = u.length; e;) {
                for (c = u, u = []; ++l < e;) c && c[l].run();
                l = -1, e = u.length;
            }
            c = null, h = !1, function (e) {
                if (n === clearTimeout) return clearTimeout(e);
                if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                try {
                    n(e);
                } catch (t) {
                    try {
                        return n.call(null, e);
                    } catch (t) {
                        return n.call(this, e);
                    }
                }
            }(t);
        }
    }
    function f(t, e) {
        this.fun = t, this.array = e;
    }
    function y() { }
    r.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (1 < arguments.length) for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
        u.push(new f(t, e)), 1 !== u.length || h || a(d);
    }, f.prototype.run = function () {
        this.fun.apply(null, this.array);
    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "",
        r.versions = {}, r.on = y, r.addListener = y, r.once = y, r.off = y, r.removeListener = y,
        r.removeAllListeners = y, r.emit = y, r.prependListener = y, r.prependOnceListener = y,
        r.listeners = function (t) {
            return [];
        }, r.binding = function (t) {
            throw new Error("process.binding is not supported");
        }, r.cwd = function () {
            return "/";
        }, r.chdir = function (t) {
            throw new Error("process.chdir is not supported");
        }, r.umask = function () {
            return 0;
        };
}, function (t, e, i) {
    "use strict";
    i.r(e);
    var Q = i(0), m = i(2), l = i(1), a = "",
        c = "",//https://ver.i51game.com/football
        o = "football",
        r = 750,
        s = 1334,

        n = r / s,
        u = 750,
        p = u / r,
        h = s * p, d = 750,
        f = s * p, y = 180 / Math.PI,
        v = Math.PI / 180,

        g = (Math.PI,
            "ui/default_avatar.png"),


        b = 19, w = 18, _ = 5, S = ["", "一", "二", "三", "四", "五", "六", "七"], T = window.GameSet, x = new (function () {
            function t() {
                this.isInBattle = !1, this.lastRefreshRankPanelTime = 0;



            }
            return Object.defineProperty(t.prototype, "notInBattle", {
                get: function () {
                    return this.currentPanel && ("StartView" === this.currentPanel.name || "ResultView" === this.currentPanel.name);
                },
                enumerable: !0,
                configurable: !0
            }), Object(Q.c)([m.g.ref], t.prototype, "currentPanel", void 0), Object(Q.c)([m.g], t.prototype, "isInBattle", void 0),
                t;
        }())(), L = function () {
            function t(t) {
                void 0 === t && (t = !1), this.isTop = t, this.panelRefs = new Set(), this.openedPanelCount = 0,
                    this._stack = [];
            }
            return t.prototype.init = function () {
                var t = this, e = this.mask = new Laya.Sprite();
                e.graphics.drawRect(0, 0, d, f, 0), e.width = d, e.height = f, e.on(Laya.Event.CLICK, this, function () {
                    0 < t._stack.length && t._stack[t._stack.length - 1]();
                });
            }, t.prototype.setRoot = function (t) {
                this.root = t;
            }, t.prototype.addPanel = function (t) {

                this.isTop || (x.currentPanel = t),
                    DEVELOP && console.log("[panel] +", t.name)

                //跳转

                if (t.name == "SkinView")
                    YYGGames.gameBox.game1.visible = YYGGames.gameBox.game2.visible = !1
                if (t.name == "StartView")
                    YYGGames.gameBox.game1.visible = YYGGames.gameBox.game2.visible = !0,
                        YYGGames.gameBanner.visible = !1
                if (t.name == "DialView")
                    YYGGames.gameBox.game1.visible = YYGGames.gameBox.game2.visible = !1
                if (t.name == "MatchingView")
                    YYGGames.gameBox.game1.visible = YYGGames.gameBox.game2.visible = !1
                //
                if (t.name == "ResultView")
                    YYGGames.gameBanner.visible = !0

                this.panelRefs.add(t),
                    this.openedPanelCount = this.panelRefs.size, this.root.addChild(t);
                var e = this.root.numChildren - (this.mask.parent === this.root ? 2 : 1);
                this.mask.alpha = t.maskAlpha, this.root.addChildAt(this.mask, e);
            },

                t.prototype.removePanel = function (t) {
                    if (t.name == "StartView")
                        YYGGames.gameBox.game1.visible = YYGGames.gameBox.game2.visible = !1
                    if (this.panelRefs.delete(t))


                        if (DEVELOP && console.log("[panel] -", t.name),

                            this.openedPanelCount = this.panelRefs.size,
                            this.root.removeChild(t),
                            this.root.removeChild(this.mask), this.panelRefs.size) {
                            var e = this.root.numChildren - 1;
                            this.root.addChildAt(this.mask, e);
                            var i = this.root.getChildAt(1 + e);
                            this.mask.alpha = i.maskAlpha,
                                DEVELOP && console.log("[panel] >", i.name || i)

                            this.isTop || (x.currentPanel = i);
                            if (i.name == "StartView") {
                                YYGGames.gameBox.game1.visible = YYGGames.gameBox.game2.visible = !0
                                window.inSkinView = !1
                            }
                        }
                        else
                            this.isTop || (x.currentPanel = void 0),

                                DEVELOP && console.log("[panel] No Panel");
                    else DEVELOP && console.warn("remove panel fail:", t.name);
                }, t.prototype.findPanel = function (t) {
                    var e, i;
                    try {
                        for (var n = Object(Q.g)(this.panelRefs), r = n.next(); !r.done; r = n.next()) {
                            var o = r.value;
                            if (t(o)) return o;
                        }
                    } catch (t) {
                        e = {
                            error: t
                        };
                    } finally {
                        try {
                            r && !r.done && (i = n.return) && i.call(n);
                        } finally {
                            if (e) throw e.error;
                        }
                    }
                }, t.prototype.findPanelByName = function (e) {
                    return this.findPanel(function (t) {
                        return t.name == e;
                    });
                }, t.prototype.onTapMask = function (t) {
                    this.offTapMask(t), this._stack.push(t);
                }, t.prototype.offTapMask = function (t) {
                    var e = this._stack.indexOf(t);
                    0 <= e && this._stack.splice(e, 1);
                }, t.prototype.closeAll = function () {
                    var e, t;
                    try {
                        for (var i = Object(Q.g)(this.panelRefs), n = i.next(); !n.done; n = i.next()) {
                            n.value.close();
                        }
                    } catch (t) {
                        e = {
                            error: t
                        };
                    } finally {
                        try {
                            n && !n.done && (t = i.return) && t.call(i);
                        } finally {
                            if (e) throw e.error;
                        }
                    }
                    this._stack.length = 0;
                }, Object(Q.c)([m.g], t.prototype, "openedPanelCount", void 0), t;
        }(), k = new L(), O = new L(!0), I = {
            next: Math.random
        };
    function D(t, e, i) {
        return void 0 === e ? Math.floor(I.next() * t) : "number" == typeof e ? void 0 === i ? Math.floor(I.next() * (e - t)) + t : Math.floor(i.next() * (e - t)) + t : Math.floor(e.next() * t);
    }
    function C(t, e, i) {
        return void 0 === e ? I.next() * t : "number" == typeof e ? void 0 === i ? I.next() * (e - t) + t : i.next() * (e - t) + t : e.next() * t;
    }
    function E(t, e, i) {
        if (void 0 === e) {
            if (0 === t.length) return;
            return t[Math.floor(I.next() * t.length)];
        }
        if ("number" != typeof e) return t[Math.floor(e.next() * t.length)];
        if (void 0 === i && (i = I), e >= t.length) return t;
        for (var n = [], r = 0, o = t.length; r < o; r++) if (n.length < e) n.push(t[r]); else {
            var s = Math.floor(i.next() * r);
            s < e && (n[s] = t[r]);
        }
        return n;
    }
    function P(t, e) {
        void 0 === e && (e = I);
        for (var i = 0, n = t.map(function (t) {
            return i += t;
        }), r = e.next() * i, o = 0, s = n.length; o < s; ++o) if (r < n[o]) return o;
        return -1;
    }
    !function () {
        function t(t, e, i) {
            void 0 === i && (i = I), this.mean = t, this.deviation = e, this.randomSource = i;
        }
        t.prototype.next = function () {
            var t = 1 - this.randomSource.next(), e = 1 - this.randomSource.next();
            return Math.sqrt(-2 * Math.log(t)) * Math.cos(2 * Math.PI * e) * this.deviation + this.mean;
        };
    }();
    var B = wx.getSystemInfoSync();
    l.Logger.info("System Info:", B);
    var j, A, M = B.statusBarHeight,
        R = function () {
            // if (N()) {
            //     var t = B.model.toLowerCase();
            //     if (t.includes("iphone 4")) return !0;
            //     if (t.includes("iphone 5")) return !0;
            //     if (t.includes("iphone se")) return !0;
            //     if (t.includes("iphone 6")) return !0;
            // } else {
            if (window.devicePixelRatio <= 2) return !0;
            if (B.hasOwnProperty("benchmarkLevel")) return Number(B.benchmarkLevel) < 10;
            // }
            return !0;
        }();
    function N() {
        return void 0 === j && (j = B.system.includes("iOS")), j;
    }
    function V() {
        console.log("vvvvvvvvv", A)
        return void 0 === A && (A = "devtools" === B.brand), A;
    }
    var U = ["PBBM30", "PBAM00", "PBEM00"];
    function G() {
        // return B.model.includes("iPhone X") || "iPhone" === B.brand && 44 === B.statusBarHeight;
    }
    function z(t) {
        var e = [];
        for (var i in t) t.hasOwnProperty(i) && e.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
        return e.join("&");
    }
    var F = Object(Q.f)(B.SDKVersion.split(".").map(Number), 3),
        H = F[0],
        $ = F[1],
        K = F[2];
    function W(i) {
        return function (t) {
            for (var e in i) try {
                this[e] = i[e](t[e]);
            } catch (t) {
                DEVELOP && console.log("读取配置文件出错 " + e, t);
            }
        };
    }
    function X(e) {
        return void 0 !== e ? function (t) {
            return t ? Number(t) : e;
        } : Number;
    }
    var q, Y, J = function () {
        function t(t) {
            var e, i;
            this.map = {};
            try {
                for (var n = Object(Q.g)(t), r = n.next(); !r.done; r = n.next()) {
                    var o = r.value, s = new Z(o);
                    this.map[s.id] = s;
                }
            } catch (t) {
                e = {
                    error: t
                };
            } finally {
                try {
                    r && !r.done && (i = n.return) && i.call(n);
                } finally {
                    if (e) throw e.error;
                }
            }
        }
        return t.prototype.getDefById = function (t) {
            return this.map[t];
        }, t.prototype.getList = function () {
            var e = this;
            return Object.keys(this.map).map(function (t) {
                return e.map[t];
            });
        }, t;
    }(), Z = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return Object(Q.d)(e, t), e;
    }(W({
        id: X(0),
        name: Y ? function (t) {
            return t ? String(t) : Y;
        } : String,
        ownSkin: (q = "|", function (t) {
            return t ? t.split(q).map(Number) : void 0;
        }),
        cupNum: X(0),
        medal: X(0)
    }));
    var tt, et, it, nt = laya.utils.Browser;
    function rt() {
        (it = new Laya.Texture()).bitmap = new Laya.Texture2D(), void 0 !== tt && ((et = nt.window.sharedCanvas)._addReference || (et._addReference = function () { }));
    }
    "function" == typeof wx.getOpenDataContext && (tt = wx.getOpenDataContext());
    var ot, st, at = [];
    function ct() {
        return DEVELOP || V() || "api" !== $hostDef.api ? "-dev" : "";
    }
    st = "function" == typeof wx.setUserCloudStorage ? function (i, n) {
        return new Promise(function (t, e) {
            wx.setUserCloudStorage({
                KVDataList: [{
                    key: "" + i + ct(),
                    value: n
                }],
                success: t,
                fail: function (t) {
                    return e(t.errMsg);
                }
            });
        });
    } : function () {
        return Promise.resolve();
    };
    var ut, ht, lt, pt, dt, ft, yt, vt, gt, mt, bt, wt = function () {
        function t(t) {
            var e, i, n, r;
            this.maxGrad = 0, this._skinId = [], this._skinIndexes = {}, this.map = {}, this.list = [];
            var o = this.gradNeedCups = [];
            try {
                for (var s = Object(Q.g)(t), a = s.next(); !a.done; a = s.next()) {
                    var c = a.value, u = new St(c);
                    this.map[u.id] = u, this.list.push(u), u.id > this.maxGrad && (this.maxGrad = u.id),
                        o.push([u.cupNum, u.resource]);
                    try {
                        for (var h = (n = void 0, Object(Q.g)(u.unlockSkin)), l = h.next(); !l.done; l = h.next()) {
                            var p = l.value;
                            -1 === this._skinId.indexOf(p) && this._skinId.push(p);
                        }
                    } catch (t) {
                        n = {
                            error: t
                        };
                    } finally {
                        try {
                            l && !l.done && (r = h.return) && r.call(h);
                        } finally {
                            if (n) throw n.error;
                        }
                    }
                    this._skinIndexes[u.id] = this._skinId.length;
                }
            } catch (t) {
                e = {
                    error: t
                };
            } finally {
                try {
                    a && !a.done && (i = s.return) && i.call(s);
                } finally {
                    if (e) throw e.error;
                }
            }
            tt && tt.postMessage({
                type: "setGradData",
                gradData: o
            });
        }
        return t.prototype.getAllAvailableSkinId = function (t) {
            return this._skinId.slice(0, this._skinIndexes[t]);
        }, t.prototype.getDefById = function (t) {
            return this.map[t];
        }, t.prototype.getGradByCupNum = function (t) {
            for (var e = this.list[0], i = 0; i < this.list.length; i++) if (t < this.list[i].cupNum) {
                e = this.list[i];
                break;
            }
            return e;
        }, t.prototype.getGradResKeyByCupNum = function (t) {
            for (var e = this.gradNeedCups, i = 0, n = 0; n < e.length && t >= e[n][0]; n++) i = n;
            return e[i][1];
        }, t.prototype.getList = function () {
            return this.list;
        }, t;
    }(), _t = (ut = "|", ht = Number, function (t) {
        return t ? t.split(ut).map(ht) : [];
    }), St = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return Object(Q.d)(e, t), e;
    }(W({
        id: X(0),
        name: String,
        cupNum: X(0),
        resource: String,
        isReduceCup: function (t) {
            return "0" !== t;
        },
        isReduceGrad: function (t) {
            return "0" !== t;
        },
        unlockSkin: function (t) {
            return "0" !== t ? _t(t) : [];
        },
        putAi: function (t) {
            return t.split(",").map(function (t) {
                var e = Object(Q.f)(t.split(":"), 2), i = e[0], n = e[1];
                return [Number(i), n.split("-").map(Number)];
            });
        },
        propRandom: _t,
        propBonus: _t,
        reviveTime: _t
    })), Tt = function (t) {
        Object.assign(this, t);
        var h = t.goldResult, l = [], e = function (t) {
            var e = h[t];
            if (/^\d+$/.test(t)) {
                var i = Number(t);
                l.push(function (t) {
                    return t === i ? e : null;
                });
            } else if (/^\d+-\d+$/.test(t)) {
                var n = Object(Q.f)(t.split("-").map(Number), 2), r = n[0], o = n[1];
                l.push(function (t) {
                    return r <= t && t <= o ? e : null;
                });
            } else if (/^>=\d+$/.test(t)) {
                var s = Number(t.slice(2));
                l.push(function (t) {
                    return s <= t ? e : null;
                });
            } else if (/^<=\d+$/.test(t)) {
                var a = Number(t.slice(2));
                l.push(function (t) {
                    return t <= a ? e : null;
                });
            } else if (/^>\d+$/.test(t)) {
                var c = Number(t.slice(1));
                l.push(function (t) {
                    return c < t ? e : null;
                });
            } else if (/^<\d+$/.test(t)) {
                var u = Number(t.slice(1));
                l.push(function (t) {
                    return t < u ? e : null;
                });
            }
        };
        for (var i in h) e(i);
        this.getGoldResult = function (t) {
            var e, i;
            try {
                for (var n = Object(Q.g)(l), r = n.next(); !r.done; r = n.next()) {
                    var o = (0, r.value)(t);
                    if (null !== o) return o;
                }
            } catch (t) {
                e = {
                    error: t
                };
            } finally {
                try {
                    r && !r.done && (i = n.return) && i.call(n);
                } finally {
                    if (e) throw e.error;
                }
            }
            return 0;
        };
        var p = t.skinResult, d = [], n = function (t) {
            var e = p[t];
            if (/^\d+$/.test(t)) {
                var i = Number(t);
                d.push(function (t) {
                    return t === i ? e : null;
                });
            } else if (/^\d+-\d+$/.test(t)) {
                var n = Object(Q.f)(t.split("-").map(Number), 2), r = n[0], o = n[1];
                d.push(function (t) {
                    return r <= t && t <= o ? e : null;
                });
            } else if (/^>=\d+$/.test(t)) {
                var s = Number(t.slice(2));
                d.push(function (t) {
                    return s <= t ? e : null;
                });
            } else if (/^<=\d+$/.test(t)) {
                var a = Number(t.slice(2));
                d.push(function (t) {
                    return t <= a ? e : null;
                });
            } else if (/^>\d+$/.test(t)) {
                var c = Number(t.slice(1));
                d.push(function (t) {
                    return c < t ? e : null;
                });
            } else if (/^<\d+$/.test(t)) {
                var u = Number(t.slice(1));
                d.push(function (t) {
                    return t < u ? e : null;
                });
            }
        };
        for (var i in p) n(i);
        this.getSkinResult = function (t) {
            var e, i;
            try {
                for (var n = Object(Q.g)(d), r = n.next(); !r.done; r = n.next()) {
                    var o = (0, r.value)(t);
                    if (null !== o) return o;
                }
            } catch (t) {
                e = {
                    error: t
                };
            } finally {
                try {
                    r && !r.done && (i = n.return) && i.call(n);
                } finally {
                    if (e) throw e.error;
                }
            }
            return 0;
        };
    }, xt = function () {
        function t(t) {
            var e, i;
            this.map = {}, this.list = [];
            try {
                for (var n = Object(Q.g)(t), r = n.next(); !r.done; r = n.next()) {
                    var o = r.value, s = new Lt(o);
                    this.map[s.id] = s, this.list.push(s);
                }
            } catch (t) {
                e = {
                    error: t
                };
            } finally {
                try {
                    r && !r.done && (i = n.return) && i.call(n);
                } finally {
                    if (e) throw e.error;
                }
            }
        }
        return t.prototype.getDefById = function (t) {
            return this.map[t];
        }, t.prototype.getList = function () {
            return this.list;
        }, t;
    }(), Lt = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return Object(Q.d)(e, t), e;
    }(W({
        id: X(0),
        name: String,
        needFragCnt: X(0),
        getTips: String,
        skinShowExp: X(0),
        consumeGold: X(0),
        unlockRank: X(1 / 0),
        sort: X(0),
        model: function (t) {
            return t;
        },
        tex: String,
        try: X(0),
        showNeed: X(0),
        jumpTo: String,
        videoNeed: X(0)
    })), kt = function () {
        function t(t) {
            var e, i;
            this.map = {};
            try {
                for (var n = Object(Q.g)(t), r = n.next(); !r.done; r = n.next()) {
                    var o = r.value, s = new Ot(o);
                    this.map[s.id] = s;
                }
            } catch (t) {
                e = {
                    error: t
                };
            } finally {
                try {
                    r && !r.done && (i = n.return) && i.call(n);
                } finally {
                    if (e) throw e.error;
                }
            }
        }
        return t.prototype.getDefById = function (t) {
            return this.map[t];
        }, t.prototype.getList = function () {
            var e = this;
            return Object.keys(this.map).map(function (t) {
                return e.map[t];
            });
        }, t;
    }(), Ot = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return Object(Q.d)(e, t), e;
    }(W({
        id: X(),
        skinId: X(0),
        needCount: X(3)
    })), It = function () {
        function t(t) {
            var e, i;
            this.map = {}, this.list = [];
            try {
                for (var n = Object(Q.g)(t), r = n.next(); !r.done; r = n.next()) {
                    var o = r.value, s = new Dt(o);
                    this.map[s.id] = s, this.list.push(s);
                }
            } catch (t) {
                e = {
                    error: t
                };
            } finally {
                try {
                    r && !r.done && (i = n.return) && i.call(n);
                } finally {
                    if (e) throw e.error;
                }
            }
        }
        return t.prototype.getList = function () {
            return this.list;
        }, t;
    }(), Dt = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return Object(Q.d)(e, t), e;
    }(W({
        id: X(0),
        day: X(0),
        rewardType: X(0),
        rewardNum: X(0),
        specialSkinId: X(0)
    })), Ct = function () {
        function t(t, e) {
            var i, n, r, o;
            this.map = {};
            try {
                for (var s = Object(Q.g)(t), a = s.next(); !a.done; a = s.next()) {
                    var c = a.value, u = new Et(c);
                    this.map[u.propType] = u;
                }
            } catch (t) {
                i = {
                    error: t
                };
            } finally {
                try {
                    a && !a.done && (n = s.return) && n.call(s);
                } finally {
                    if (i) throw i.error;
                }
            }
            this.effectMap = {};
            try {
                for (var h = Object(Q.g)(e), l = h.next(); !l.done; l = h.next()) {
                    c = l.value, u = new Pt(c);
                    this.effectMap[u.value] = u;
                }
            } catch (t) {
                r = {
                    error: t
                };
            } finally {
                try {
                    l && !l.done && (o = h.return) && o.call(h);
                } finally {
                    if (r) throw r.error;
                }
            }
        }
        return t.prototype.getDefById = function (t) {
            return this.map[t];
        }, t.prototype.getRealSpeed = function (t) {
            var e = this.effectMap[t];
            return e ? e.moveSpeed : 0;
        }, t.prototype.getRealCrit = function (t) {
            var e = this.effectMap[t];
            return e ? e.critChance : 0;
        }, t.prototype.getPropEffect = function (t, e) {
            var i = this.map[t];
            return i.initValue + i.valueGrow * e;
        }, t;
    }(), Et = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return Object(Q.d)(e, t), e;
    }(W({
        id: X(0),
        propType: Number,
        needGold: X(0),
        goldGrow: X(0),
        initValue: X(0),
        valueGrow: X(0),
        lvMax: Number,
        name: String,
        desc: String
    })), Pt = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return Object(Q.d)(e, t), e;
    }(W({
        value: Number,
        moveSpeed: Number,
        critChance: Number
    })), Bt = function () {
        function t(t) {
            var e, i;
            this.map = {}, this.list = [];
            try {
                for (var n = Object(Q.g)(t), r = n.next(); !r.done; r = n.next()) {
                    var o = r.value;
                    if (o) {
                        var s = new jt(o);
                        this.map[s.id] = s, this.list.push(s);
                    }
                }
            } catch (t) {
                e = {
                    error: t
                };
            } finally {
                try {
                    r && !r.done && (i = n.return) && i.call(n);
                } finally {
                    if (e) throw e.error;
                }
            }
        }
        return t.prototype.getDefById = function (t) {
            return this.map[t];
        }, t.prototype.getList = function () {
            return this.list;
        }, t;
    }(), jt = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return Object(Q.d)(e, t), e;
    }(W({
        id: X(0),
        rewardType: String,
        rewardNum: X(0),
        skinId: X(0)
    })), At = function () {
        function t(t) {
            var e, i;
            this.map = {}, this.list = [];
            try {
                for (var n = Object(Q.g)(t), r = n.next(); !r.done; r = n.next()) {
                    var o = r.value, s = new Mt(o);
                    this.map[s.id] = s, this.list.push(s);
                }
            } catch (t) {
                e = {
                    error: t
                };
            } finally {
                try {
                    r && !r.done && (i = n.return) && i.call(n);
                } finally {
                    if (e) throw e.error;
                }
            }
        }
        return t.prototype.getDefById = function (t) {
            return this.map[t];
        }, t.prototype.getList = function () {
            return this.list;
        }, t;
    }(), Mt = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return Object(Q.d)(e, t), e;
    }(W({
        id: X(0),
        name: String,
        source: X(0),
        rewardId: X(0),
        initialRate: X(0),
        addRate: X(0),
        hitTime: X(0)
    }));
    var Rt, Nt = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._destroyBag = [], t;
        }
        return Object(Q.d)(t, e), Object.defineProperty(t.prototype, "addToDestroy", {
            set: function (t) {
                this._destroyBag.push(t);
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.destroy = function (t) {
            this._destroyBag.splice(0).forEach(function (t) {
                return t();
            }), e.prototype.destroy.call(this, t);
        }, t;
    }(Laya.View), Vt = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.maskAlpha = .6, t.isTop = !1, t._tapCallback = function () {
                t.close();
            }, t.canTapMaskClose = !1, t.width = d, t.height = f, t;
        }
        return Object(Q.d)(t, e), t.prototype.show = function () {
            this.isTop ? O.addPanel(this) : k.addPanel(this), this.canTapMaskClose && (this.mouseThrough = !0,
                k.onTapMask(this._tapCallback));
        }, t.prototype.close = function () {
            this.canTapMaskClose && k.offTapMask(this._tapCallback), this.isTop ? O.removePanel(this) : k.removePanel(this),
                this.destroy(!0);
        }, t;
    }(Nt),
        Ut = Laya.ClassUtils.regClass;



    !function (t) {
        var e = function (t) {

            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("BaseProgress");
            }, e;
        }(Vt);
        t.BaseProgressUI = e;




        var i = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("CountDownModelView");
            }, e;
        }(Vt);
        t.CountDownModelViewUI = i;




        var n = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("DialView");
            }, e;
        }(Vt);
        t.DialViewUI = n;




        var r = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("FavoriteView");
            }, e;
        }(Vt);
        t.FavoriteViewUI = r;



        var o = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("FootBallIconView");
            }, e;
        }(Vt);
        t.FootBallIconViewUI = o;




        var s = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t),
                e.prototype.createChildren = function () {
                    t.prototype.createChildren.call(this),
                        this.loadUI("ForceQuitView");
                }, e;
        }(Vt);


        t.ForceQuitViewUI = s;



        var a = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("FreeSkinItem");
            }, e;
        }(Vt);
        t.FreeSkinItemUI = a;
        var c = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("FreeSkinView");
            }, e;
        }(Vt);
        t.FreeSkinViewUI = c;
        var u = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("GameItemsView");
            }, e;
        }(Vt);
        t.GameItemsViewUI = u;
        var h = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("GiftPopup");
            }, e;
        }(Vt);
        t.GiftPopupUI = h;
        var l = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("GradLevelUp");
            }, e;
        }(Vt);
        t.GradLevelUpUI = l;
        var p = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("GradListItem");
            }, e;
        }(Vt);
        t.GradListItemUI = p;
        var d = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("GradView");
            }, e;
        }(Vt);
        t.GradViewUI = d;
        var f = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("GuideModelView");
            }, e;
        }(Vt);
        t.GuideModelViewUI = f;
        var y = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("HeadView");
            }, e;
        }(Vt);
        t.HeadViewUI = y;
        var v = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("HelpView");
            }, e;
        }(Vt);
        t.HelpViewUI = v;
        var g = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("IconView");
            }, e;
        }(Vt);
        t.IconViewUI = g;
        var m = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("LimitTimeSkinItem");
            }, e;
        }(Vt);
        t.LimitTimeSkinItemUI = m;
        var b = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("LimitTimeSkinView");
            }, e;
        }(Vt);
        t.LimitTimeSkinViewUI = b;
        var w = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t),

                e.prototype.createChildren = function () {
                    t.prototype.createChildren.call(this),
                        this.createView(e.uiView);
                },

                e.uiView = {
                    type: "View",
                    props: {
                        width: 750,
                        height: 1334
                    },
                    compId: 1,
                    child: [{
                        type: "Image",
                        props: {
                            var: "bg",
                            skin: "res/bg.jpg",
                            pivotY: 812,
                            pivotX: 375,
                            centerY: 0,
                            centerX: 0
                        },
                        compId: 21
                    }, {
                        type: "Image",
                        props: {
                            var: "logo",
                            skin: "res/logo.png",
                            mouseEnabled: !0,
                            centerY: -400,
                            centerX: 0
                        },
                        compId: 20
                    }, {
                        type: "Box",
                        props: {
                            centerY: 350,
                            centerX: 0
                        },
                        compId: 23,
                        child: [{
                            type: "Label",
                            props: {
                                var: "hintLabel",
                                text: "加载中...",
                                fontSize: 35,
                                font: "SimHei",
                                color: "#ffffff",
                                centerX: 0,
                                bold: !0
                            },
                            compId: 3
                        }, {
                            type: "Label",
                            props: {
                                y: 108,
                                width: 0,
                                var: "helpLabel",
                                rotation: 0,
                                height: 0,
                                fontSize: 30,
                                font: "SimHei",
                                color: "#ffffff",
                                centerX: -3,
                                bold: !0
                            },
                            compId: 4
                        }, {
                            type: "ProgressBar",
                            props: {
                                y: 56,
                                width: 626,
                                var: "progressBar",
                                skin: "res/progress1.png",
                                sizeGrid: "0,10,0,10",
                                centerX: 0
                            },
                            compId: 16
                        }, {
                            type: "Image",
                            props: {
                                y: 147,
                                x: 174,
                                var: "retryBtn",
                                skin: "res/btn_retry.png"
                            },
                            compId: 19
                        }]
                    }],
                    loadList: ["res/bg.jpg", "res/logo.png", "res/progress1.png", "res/btn_retry.png"],
                    loadList3D: []
                }, e;
        }(Vt);
        t.LoadingViewUI = w, Ut("ui.LoadingViewUI", w);
        var _ = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("MatchingIcon");
            }, e;
        }(Vt);
        t.MatchingIconUI = _;
        var S = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("MatchingView");
            }, e;
        }(Vt);
        t.MatchingViewUI = S;
        var T = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("OfflineGoldPopup");
            }, e;
        }(Vt);
        t.OfflineGoldPopupUI = T;
        var x = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("OtherGameBtn");
            }, e;
        }(Vt);
        t.OtherGameBtnUI = x;
        var L = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("OtherGameTaskItem");
            }, e;
        }(Vt);
        t.OtherGameTaskItemUI = L;
        var k = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("OtherGameTaskPanel");
            }, e;
        }(Vt);
        t.OtherGameTaskPanelUI = k;
        var O = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("PropIcon");
            }, e;
        }(Vt);
        t.PropIconUI = O;
        var I = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("PropList");
            }, e;
        }(Vt);
        t.PropListUI = I;
        var D = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("PropTabButton");
            }, e;
        }(Vt);
        t.PropTabButtonUI = D;
        var C = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("PuzzleSkinView");
            }, e;
        }(Vt);
        t.PuzzleSkinViewUI = C;
        var E = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("RankListItem");
            }, e;
        }(Vt);
        t.RankListItemUI = E;
        var P = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("RankView");
            }, e;
        }(Vt);
        t.RankViewUI = P;
        var B = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("RecommendView");
            }, e;
        }(Vt);
        t.RecommendViewUI = B;
        var j = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("ResultView");
            }, e;
        }(Vt);
        t.ResultViewUI = j;
        var A = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("SettingsView");
            }, e;
        }(Vt);
        t.SettingsViewUI = A;
        var M = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("SettleScoreHistoryItem");
            }, e;
        }(Vt);
        t.SettleScoreHistoryItemUI = M;
        var R = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("SettleView");
            }, e;
        }(Vt);
        t.SettleViewUI = R;
        var N = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("ShootShowView");
            }, e;
        }(Vt);
        t.ShootShowViewUI = N;
        var V = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("SignItemView");
            }, e;
        }(Vt);
        t.SignItemViewUI = V;
        var U = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("SignSpecialItemView");
            }, e;
        }(Vt);
        t.SignSpecialItemViewUI = U;
        var G = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("SignView");
            }, e;
        }(Vt);
        t.SignViewUI = G;
        var z = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("SkinClassicView");
            }, e;
        }(Vt);
        t.SkinClassicViewUI = z;
        var F = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("SkinDescView");
            }, e;
        }(Vt);
        t.SkinDescViewUI = F;
        var H = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("SkinGotView");
            }, e;
        }(Vt);
        t.SkinGotViewUI = H;
        var $ = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("SkinItemView");
            }, e;
        }(Vt);
        t.SkinItemViewUI = $;
        var K = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("SkinView");
            }, e;
        }(Vt);
        t.SkinViewUI = K;




        var W = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t),
                e.prototype.createChildren = function () {
                    t.prototype.createChildren.call(this),
                        this.loadUI("StartView");
                }, e;
        }(Vt);
        t.StartViewUI = W;




        var X = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("SuggestUpgradeView");
            }, e;
        }(Vt);
        t.SuggestUpgradeViewUI = X;
        var q = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("TestView");
            }, e;
        }(Vt);
        t.TestViewUI = q;
        var Y = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.createChildren = function () {
                t.prototype.createChildren.call(this), this.loadUI("WelfareBoxPopup");
            }, e;
        }(Vt);
        t.WelfareBoxPopupUI = Y;
    }(Rt || (Rt = {}));
    var Gt = new (function () {
        function t() {
            this.isShow = !1, this.isOffline = !1, this.gameInitialized = !1;
            // var t = wx.getLaunchOptionsSync();
            // l.Logger.info("Launch Option:", t), 
            // this.query = t.query || {},
            //  this.shareTicket = t.shareTicket, 
            // this.scene = t.scene;
        }
        return t.prototype.isFromFavoriteScene = function () {
            return 1103 == this.scene || 1104 == this.scene || 1089 == this.scene;
        }, Object(Q.c)([m.g], t.prototype, "isShow", void 0), Object(Q.c)([m.g], t.prototype, "gameInitialized", void 0),
            t;
    }())();
    function zt(t) {
        if (Gt.isShow && t) {
            t.scaleX = t.scaleY = .5, TWEEN.killTweensOf(t);
            var e = new TWEEN.Tween(t).to({
                scaleX: 1.1,
                scaleY: 1.1
            }, 100).easing(TWEEN.Easing.Cubic.Out), i = new TWEEN.Tween(t).to({
                scaleX: 1,
                scaleY: 1
            }, 100).easing(TWEEN.Easing.Cubic.In);
            e.chain(i), e.start();
        }
    }
    function Ft(t) {
        if (Gt.isShow && t) {
            t.scaleX = t.scaleY = 1, TWEEN.killTweensOf(t);
            var e = new TWEEN.Tween(t).to({
                scaleX: 1.15,
                scaleY: 1.15
            }, 150).easing(TWEEN.Easing.Cubic.Out), i = new TWEEN.Tween(t).to({
                scaleX: 1,
                scaleY: 1
            }, 250).easing(TWEEN.Easing.Elastic.Out);
            e.chain(i), e.start();
        }
    }
    var Ht, $t, Kt, Wt, Xt, qt, Yt, Qt, Jt = function () {
        function t() {
            this.gold = 0, this.coin = 0, this.skillPoint = 0;
        }
        return t.prototype.merge = function (t) {
            if (t.gold && this.addGold(t.gold), t.skinFrags && t.skinFrags.size) if (this.skinFrags) {
                var i = this.skinFrags;
                t.skinFrags.forEach(function (t, e) {
                    i.set(e, (i.get(e) || 0) + t);
                });
            } else this.skinFrags = new Map(t.skinFrags);
            if (t.completeSkins && t.completeSkins.size) if (this.completeSkins) {
                var e = this.completeSkins;
                t.completeSkins.forEach(function (t) {
                    e.add(t);
                });
            } else this.completeSkins = new Set(t.completeSkins);
        }, t.prototype.addGold = function (t) {
            console.log("胜利给钱", Number(Laya.LocalStorage.getItem("goldgold")))
            Laya.LocalStorage.setItem(Number(Laya.LocalStorage.getItem("goldgold") + t))
            // Laya.LocalStorage.setItem("goldgold", Number(Laya.LocalStorage.getItem("goldgold"))+t)
            // this.gold += t;
        }, t.prototype.addSkinFrag = function (t, e) {
            this.skinFrags || (this.skinFrags = new Map()), this.skinFrags.set(t, (this.skinFrags.get(t) || 0) + e);
        }, t.prototype.addCompleteSkin = function (t) {

            this.completeSkins || (this.completeSkins = new Set()), this.completeSkins.add(t);
        }, t;
    }();
    ($t = Ht || (Ht = {}))[$t.moveSpeed = 0] = "moveSpeed", $t[$t.power = 1] = "power",
        $t[$t.crit = 2] = "crit", $t[$t.offlineGold = 3] = "offlineGold", (Wt = Kt || (Kt = {}))[Wt.normal = 1] = "normal",
        Wt[Wt.skillPoint = 2] = "skillPoint", Wt[Wt.ticket = 3] = "ticket", Wt[Wt.newBox = 4] = "newBox",
        Wt[Wt.gradShow = 5] = "gradShow", Wt[Wt.shareSkin = 6] = "shareSkin", Wt[Wt.shareScore = 7] = "shareScore",
        Wt[Wt.freeSkin = 8] = "freeSkin", Wt[Wt.collectSkin = 9] = "collectSkin", Wt[Wt.addSpeedHome = 10] = "addSpeedHome",
        Wt[Wt.addSpeedResult = 11] = "addSpeedResult", Wt[Wt.sign = 12] = "sign", Wt[Wt.recoment = 13] = "recoment",
        Wt[Wt.puzzleSkin = 14] = "puzzleSkin", Wt[Wt.propUpgrade = 15] = "propUpgrade",
        Wt[Wt.offlineGold = 16] = "offlineGold", Wt[Wt.revive = 17] = "revive", (qt = Xt || (Xt = {}))[qt.gold = 1] = "gold",
        qt[qt.ticket = 2] = "ticket", qt[qt.videoToTicket = 3] = "videoToTicket", qt[qt.newBox = 4] = "newBox",
        (Qt = Yt || (Yt = {}))[Qt.skinBox = 1] = "skinBox", Qt[Qt.skillPoint = 2] = "skillPoint",
        Qt[Qt.quit = 3] = "quit", Qt[Qt.trySkin = 4] = "trySkin", Qt[Qt.offline = 5] = "offline",
        Qt[Qt.upgrade = 6] = "upgrade", Qt[Qt.sign = 7] = "sign", Qt[Qt.welfareBox = 8] = "welfareBox",
        Qt[Qt.turntable = 9] = "turntable", Qt[Qt.revive = 10] = "revive", Qt[Qt.suggestUpgrade = 11] = "suggestUpgrade",
        Qt[Qt.skin = 12] = "skin";
    var Zt = {
        1: "普通分享",
        2: "技能点分享",
        3: "转盘券分享",
        4: "新的礼物盒",
        5: "段位炫耀分享",
        6: "分享皮肤",
        7: "分享战绩",
        8: "免费皮肤分享",
        9: "典藏皮肤分享",
        10: "首页分享加移速",
        11: "结算分享加移速",
        12: "签到2倍奖励",
        13: "推荐游戏弹窗",
        14: "皮肤拼图分享",
        15: "属性升级分享",
        16: "离线收益分享",
        17: "复活分享"
    }, te = {
        1: "皮肤宝箱",
        2: "技能点强弹",
        3: "视频免处罚触达",
        4: "皮肤试用",
        5: "双倍离线收益",
        6: "升级属性",
        7: "签到视频",
        8: "福利宝箱",
        9: "转盘",
        10: "复活",
        11: "推荐升级属性",
        12: "视频皮肤{skinId}"
    };
    function ee(t, e) {
        return t.toDateString() === e.toDateString();
    }
    var ie = new (function () {
        function t() {
            this._serverTimeDiff = 0;
        }
        return t.prototype.syncServerTime = function (t) {
            this._serverTimeDiff = t - Date.now(), DEVELOP && console.log("curTime:", function (t, e) {
                e || (e = "yy-MM-dd hh:mm:ss");
                var i = {
                    "y+": t.getFullYear(),
                    "M+": t.getMonth() + 1,
                    "d+": t.getDate(),
                    "h+": t.getHours(),
                    "m+": t.getMinutes(),
                    "s+": t.getSeconds(),
                    "q+": Math.floor((t.getMonth() + 3) / 3),
                    "S+": t.getMilliseconds()
                };
                for (var n in i) if (new RegExp("(" + n + ")").test(e)) if ("y+" === n) e = e.replace(RegExp.$1, ("" + i[n]).substr(4 - RegExp.$1.length)); else if ("S+" === n) {
                    var r = RegExp.$1.length;
                    r = 1 === r ? 3 : r, e = e.replace(RegExp.$1, ("00" + i[n]).substr(("" + i[n]).length - 1, r));
                } else e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? i[n] : ("00" + i[n]).substr(("" + i[n]).length));
                return e;
            }(new Date(this.curTime)));
        }, Object.defineProperty(t.prototype, "curTime", {
            get: function () {
                return Date.now() + this._serverTimeDiff;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "curDay", {
            get: function () {
                return new Date(this.curTime).getDay();
            },
            enumerable: !0,
            configurable: !0
        }), t;
    }())(), ne = l.Logger.getLogger("统计");
    function re(t, e) {
        Object(l.sendAnalysis)("游戏流程-" + t, e);
    }
    function oe(t) {
        Object(l.sendAnalysis)("分享触达-" + t);
    }
    function se(t) {
        Object(l.sendAnalysis)("分享选择-" + t);
    }
    function ae(t) {
        Object(l.sendAnalysis)("分享完成-" + t);
    }
    function ce(t) {
        Object(l.sendAnalysis)("视频触达-" + t);
    }
    function ue(t) {
        Object(l.sendAnalysis)("免费转盘-" + t);
    }
    function he(t) {
        Object(l.sendAnalysis)("技能-" + t);
    }
    function le(t) {
        Object(l.sendAnalysis)("推荐游戏-" + t);
    }
    function pe(t) {
        Object(l.sendAnalysis)("分享图发送-" + t);
    }
    function de(t) {
        Object(l.sendAnalysis)("皮肤试玩-" + t);
    }
    function fe(t) {
        Object(l.sendAnalysis)("进入游戏-" + t);
    }
    function ye(t, e) {
        Pa.isNewPlayer && Object(l.sendAnalysis)("新手" + t + "-" + e + "-新客");
    }
    function ve(t, e) {
        Object(l.sendAnalysis)("属性养成-属性" + t + "用视频升级至" + e + "级");
    }
    function ge(t) {
        Object(l.sendAnalysis)("属性养成-属性" + t + "视频超出当天上限");
    }
    function me(t) {
        Object(l.sendAnalysis)("属性养成-属性" + t + "拉不到视频");
    }
    function be(t) {
        Object(l.sendAnalysis)("新手引导-" + t);
    }
    function we(t) {
        Object(l.sendAnalysis)("新手引导-引导局第" + t + "步开始");
    }
    function _e(t) {
        Object(l.sendAnalysis)("新手引导-引导局第" + t + "步结束");
    }
    function Se() {
        return lt.getAllAvailableSkinId(Pa.grad).filter(function (t) {
            if (1 === t) return !1;
            var e = ft.getDefById(t);
            if (!e) return !1;
            if (0 === e.needFragCnt || 999 <= e.needFragCnt) return !1;
            var i = Pa.getSkin(t);
            return !i || !(1 <= i.status) && i.frag < e.needFragCnt;
        });
    }
    function Te(t) {
        if (Pa.curSkin !== t) {
            var e = Pa.getSkin(t);
            e && 0 !== e.status ? Pa.setCurSkin(t) : console.log("您还没有解锁此皮肤");
        }
    }
    function xe(t) {
        Pa.skinVideos[t] ? Pa.skinVideos[t]++ : Pa.skinVideos[t] = 1, Pa.save("skinVideos");
        var e = ft.getDefById(t);
        if (Pa.skinVideos[t] >= e.videoNeed) {
            !function (t) {
                Object(l.sendAnalysis)("皮肤获得-看视频获得" + t);
            }(e.id);
            var i = new Jt();
            return Pa.completeSkin(t, i), i;
        }
    }
    var Le = function () {
        function t() {
            this._folderDir = {}, this._fileDir = {}, this._rootUrl = "", this._rootLen = 0,
                this._versionT = 0, this._code = "", this._ver = 0;
        }
        return Object.defineProperty(t.prototype, "rootUrl", {
            set: function (t) {
                this._rootUrl = t, this._rootLen = this._rootUrl.length;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.initVersionInfo = function (t) {
            this.readHeader(t);
            try {
                var e = t.body, i = e.folderObj, n = e.fileObj;
                this._folderDir = i, this._fileDir = n;
            } catch (t) {
                console.log(t);
            }
        }, t.prototype.getVersionNum = function (t) {
            var e = t.lastIndexOf("/"), i = t.substring(this._rootLen, e), n = t.substring(e + 1);
            return "/" === i && (i = ""), this._fileDir[this.getFolderIndex(i) + "/" + n];
        }, t.prototype.getVersionTime = function () {
            var t = new Date();
            return t.setTime(1e3 * this._versionT), t.getFullYear() + (t.getMonth() + 1 < 10 ? "0" : "") + (t.getMonth() + 1) + (t.getDate() < 10 ? "0" : "") + t.getDate() + t.toLocaleTimeString(void 0, {
                hour12: !1
            }).split(":").join("");
        }, t.prototype.getVersionT = function () {
            return this._versionT;
        }, t.prototype.readHeader = function (t) {
            this._code = t.code, this._ver = t.ver;
        }, t.prototype.getFolderIndex = function (t) {
            return this._folderDir[t];
        }, t;
    }();
    var ke = function () {
        return (ke = Object.assign || function (t) {
            for (var e, i = 1, n = arguments.length; i < n; i++) for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t;
        }).apply(this, arguments);
    };
    function Oe(t, s, a, c) {
        return new (a || (a = Promise))(function (e, i) {
            function n(t) {
                try {
                    o(c.next(t));
                } catch (t) {
                    i(t);
                }
            }
            function r(t) {
                try {
                    o(c.throw(t));
                } catch (t) {
                    i(t);
                }
            }
            function o(t) {
                t.done ? e(t.value) : function (e) {
                    return e instanceof a ? e : new a(function (t) {
                        t(e);
                    });
                }(t.value).then(n, r);
            }
            o((c = c.apply(t, s || [])).next());
        });
    }
    function Ie(i, n) {
        var r, o, s, t, a = {
            label: 0,
            sent: function () {
                if (1 & s[0]) throw s[1];
                return s[1];
            },
            trys: [],
            ops: []
        };
        return t = {
            next: e(0),
            throw: e(1),
            return: e(2)
        }, "function" == typeof Symbol && (t[Symbol.iterator] = function () {
            return this;
        }), t;
        function e(e) {
            return function (t) {
                return function (e) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (r = 1, o && (s = 2 & e[0] ? o.return : e[0] ? o.throw || ((s = o.return) && s.call(o),
                            0) : o.next) && !(s = s.call(o, e[1])).done) return s;
                        switch (o = 0, s && (e = [2 & e[0], s.value]), e[0]) {
                            case 0:
                            case 1:
                                s = e;
                                break;

                            case 4:
                                return a.label++, {
                                    value: e[1],
                                    done: !1
                                };

                            case 5:
                                a.label++, o = e[1], e = [0];
                                continue;

                            case 7:
                                e = a.ops.pop(), a.trys.pop();
                                continue;

                            default:
                                if (!(s = 0 < (s = a.trys).length && s[s.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                    a = 0;
                                    continue;
                                }
                                if (3 === e[0] && (!s || e[1] > s[0] && e[1] < s[3])) {
                                    a.label = e[1];
                                    break;
                                }
                                if (6 === e[0] && a.label < s[1]) {
                                    a.label = s[1], s = e;
                                    break;
                                }
                                if (s && a.label < s[2]) {
                                    a.label = s[2], a.ops.push(e);
                                    break;
                                }
                                s[2] && a.ops.pop(), a.trys.pop();
                                continue;
                        }
                        e = n.call(i, a);
                    } catch (t) {
                        e = [6, t], o = 0;
                    } finally {
                            r = s = 0;
                        }
                    if (5 & e[0]) throw e[1];
                    return {
                        value: e[0] ? e[1] : void 0,
                        done: !0
                    };
                }([e, t]);
            };
        }
    }
    Object.create;
    Object.create;
    var De = function () {
        function t() { }
        return t.init = function () {
            t._initialized ? l.Logger.getLogger("@h5/wxgame").warn("SpecialEvent.init() 不应该被多次调用!") : (t._initialized = !0,
                function () {
                    var t = this, n = Date.now(), r = 0;
                    function o(e) {
                        var i = n = Date.now();
                        Object(l.waitLogged)().then(function () {
                            var t = !!l.hostEnv.user.isNew;
                            ++r, Object(l.sendSpecialEvent)("#enter", ke(ke({}, Ce(e)), {
                                ne: t && 1 === r ? 1 : void 0,
                                st: r
                            }), i);
                        });
                    }
                    var s = !1;
                    // o(wx.getLaunchOptionsSync()
                    // ), 
                    // wx.onHide(function() {
                    //     return Oe(t, void 0, void 0, function() {
                    //         var e, i;
                    //         return Ie(this, function(t) {
                    //             switch (t.label) {
                    //               case 0:
                    //                 return function() {
                    //                     if (s) return;
                    //                     s = !0, wx.onShow(o);
                    //                 }(), e = Date.now(), i = e - n, l.hostEnv.logged ? [ 3, 2 ] : [ 4, Object(l.waitLogged)() ];

                    //               case 1:
                    //                 t.sent(), t.label = 2;

                    //               case 2:
                    //                 try {
                    //                     Object(l.sendSpecialEvent)("#hide", {
                    //                         st: i
                    //                     }, e), Object(l.flushAnalysis)();
                    //                 } catch (t) {}
                    //                 return [ 2 ];
                    //             }
                    //         });
                    //     });
                    // });
                }(), function () {
                    var t, n = ((t = {})["侧边栏"] = 1, t["猜你喜欢"] = 2, t["点击试玩"] = 3, t["试玩礼包"] = 4, t["直接跳转"] = 5,
                        t["假列表"] = 6, t["假邀请"] = 7, t["假红包"] = 8, t["假继续"] = 9, t);
                    l.hostEnv.emitter.on("navigateSuccess", function (t, e, i) {
                        Object(l.sendSpecialEventImmediately)("#jump", {
                            na: e,
                            tp: n[t],
                            to: i.appId
                        });
                    });
                }());
        }, t._initialized = !1, t;
    }();
    function Ce(t) {
        var e, i, n, r = t.scene, o = t.query, s = t.referrerInfo;
        return {
            fu: o.fuid,
            ss: null !== (i = null === (e = De.shareSourceConverter) || void 0 === e ? void 0 : e.call(De, o.shareSource)) && void 0 !== i ? i : o.shareSource,
            si: o.shareId,
            sc: r,
            lk: o.linkKey ? decodeURIComponent(o.linkKey) : void 0,
            ra: null == s ? void 0 : s.appId,
            ru: null === (n = null == s ? void 0 : s.extraData) || void 0 === n ? void 0 : n.uid
        };
    }
    var Ee = "undefined" != typeof wx ? wx.getSystemInfoSync() : {
        SDKVersion: "0.0.0"
    };
    l.Logger.info("System Info:", Ee);
    var Pe = Ee.SDKVersion.split(".").map(Number), Be = Pe[0], je = Pe[1], Ae = Pe[2];
    function Me(t, e, i) {
        return void 0 === e && (e = 0), void 0 === i && (i = 0), t < Be || !(Be < t) && (e < je || !(je < e) && i <= Ae);
    }
    var Re = "devtools" === Ee.brand;
    var Ne = 0, Ve = [], Ue = function () {
        function a(t) {
            this.option = t;
        }
        return a.prototype.send = function () {
            var s = this, t = this.option, a = t.url;
            return new Promise(function (r, o) {
                t.success = function (t) {
                    var e = t.data, i = t.statusCode;
                    t.header;
                    if (200 === (s.statusCode = i)) e ? r(e) : o("服务器未返回数据 (" + a + ")"); else {
                        var n = void 0;
                        switch (i) {
                            case 404:
                                n = "[404] Not Found (" + a + ")";
                                break;

                            case 500:
                                n = "[500] Internal Server Error (" + a + ")";
                                break;

                            case 502:
                                n = "[502] Bad Gateway (" + a + ")";
                                break;

                            case 504:
                                n = "[504] Gateway Timeout (" + a + ")";
                                break;

                            default:
                                n = "[" + i + "] " + JSON.stringify(e) + " (" + a + ")";
                        }
                        o(n);
                    }
                }, t.fail = function (t) {
                    "0" == t.errMsg ? (console.log("无法连接网络", a), o("无法连接网络")) : t.statusCode ? o("[" + t.statusCode + "] " + t.errMsg + " (" + a + ")") : o(t.errMsg + " (" + a + ")");
                },
                    t.complete = function () {
                        Ne--;
                        var t = Ve.shift();
                        t && t();
                    },
                    //  Ne < 5 ? 
                    (Ne++
                        // s.req = wx.request(t)
                    )
                // :
                //  Ve.push(function() {
                //     Ne++, 
                //     s.req = wx.request(t);
                // });
            });
        }, a.prototype.abort = function () {
            this.req && (this.req.abort(), this.req = void 0);
        }, a.getJSON = function (r, o, s) {
            return void 0 === s && (s = 1), Oe(this, void 0, void 0, function () {
                var e, i, n;
                return Ie(this, function (t) {
                    switch (t.label) {
                        case 0:
                            e = new a({
                                url: r,
                                data: o,
                                method: "GET",
                                dataType: "json"
                            }), t.label = 1;

                        case 1:
                            if (!s--) return [3, 7];
                            t.label = 2;

                        case 2:
                            return t.trys.push([2, 4, , 5]), [4, e.send()];

                        case 3:
                            return [2, t.sent()];

                        case 4:
                            return n = t.sent(), i = n, [3, 5];

                        case 5:
                            return [4, new Promise(function (t) {
                                return setTimeout(t, 500);
                            })];

                        case 6:
                            return t.sent(), [3, 1];

                        case 7:
                            throw i;
                    }
                });
            });
        }, a;
    }();
    var Ge = l.Logger.getLogger("update");
    var ze = {
        noShareBack: Me(2, 3, 0),
        hasMultiVideoAd: Me(2, 8, 0),
        resetInterstitialOnClose: !1
    };
    l.Logger.getLogger("share");
    var Fe, He, $e = l.Logger.getLogger("video"), Ke = function () {
        function n(t) {
            var i = this;
            this.adUnitId = t, this._isLoaded = !1, this.checkLoad = function (t) {
                i._checkLoadT && clearTimeout(i._checkLoadT), i._checkLoadT = setTimeout(function () {
                    i._isLoaded || ($e.log("视频加载超过" + t + "秒仍未完成，尝试重试。"), i.retry());
                }, 1e3 * t);
            }, this.retry = function () {
                var t;
                i._retryT && (clearTimeout(i._retryT), i._retryT = void 0), $e.log("重试视频加载...");
                var e = i._totalErrorCount;
                null === (t = i.ad) || void 0 === t || t.load().then(function () {
                    Object(l.sendAnalysis)("#videoRS", {
                        rc: e
                    }), $e.log("重试视频加载成功。");
                });
            }, this.onVideoLoad = function () {
                $e.log("广告已加载(onLoad)"), i._totalErrorCount = 0, i._isLoaded = !0, i._checkLoadT && (clearTimeout(i._checkLoadT),
                    i._checkLoadT = void 0), l.hostEnv.emitter.emit("videoLoaded", i.adUnitId);
            }, this._totalErrorCount = 0, this.onVideoError = function (t) {
                if (!(7 <= i._totalErrorCount)) {
                    var e = Math.pow(2, ++i._totalErrorCount + 2);
                    $e.error("广告出错(onError) " + e + "s后重试... (" + i.adUnitId + ")", t), l.hostEnv.emitter.emit("videoError", i.adUnitId, t),
                        i._retryT && clearTimeout(i._retryT), i._retryT = setTimeout(i.retry, 1e3 * e);
                }
            }, this.onVideoClose = function (t) {
                var e = i.callback;
                i.callback = void 0, e && (t && t.isEnded || void 0 === t ? e(!0) : e(!1));
            }, $e.info("创建视频广告 " + t);
            var e = this.ad = wx.createRewardedVideoAd({
                adUnitId: t,
                multiton: !0
            });
            e.onLoad(this.onVideoLoad), e.onError(this.onVideoError), e.onClose(this.onVideoClose),
                this.checkLoad(9);
        }
        return n.init = function (t, e) {
            if ("function" == typeof wx.createRewardedVideoAd) if (t && t.length) if (n._initialized) $e.error("VideoAd 已经初始化，请不要重复调用 init。"); else {
                n._initialized = !0, n.video30 = new n(Object(l.randomSelect)(t)), e && e.length && (ze.hasMultiVideoAd ? n.video15 = new n(Object(l.randomSelect)(e)) : $e.warn("当前平台或版本不支持多实例视频广告，忽略 VideoAd.init 的第二个参数。"));
                var i = Object(l.getHostEnv)().emitter;
                i.on("videoStart", function (t) {
                    Object(l.sendSpecialEvent)("#videoT", {
                        vt: t
                    });
                }), i.on("videoEnd", function (t, e) {
                    Object(l.sendSpecialEvent)("#videoE", {
                        vt: t,
                        ut: e
                    });
                }), i.on("videoLoaded", function (t) {
                    Object(l.sendSpecialEvent)("#videoL", {
                        ai: t
                    });
                }), i.on("videoError", function (t, e) {
                    Object(l.sendSpecialEvent)("#videoL", {
                        ai: t,
                        ec: e && e.errCode || 1
                    });
                });
            } else $e.error("VideoAd.init 没有传入广告ID，不做任何处理。"); else $e.warn("微信版本太低，无法创建视频广告。");
        }, n.play = function (t) {
            return n.video30 ? n.video30.tryPlay(t) : Promise.resolve(2);
        }, n.play15 = function (i) {
            return Oe(this, void 0, void 0, function () {
                var e;
                return Ie(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return n.video15 ? [4, n.video15.tryPlay(i)] : [3, 2];

                        case 1:
                            if (2 !== (e = t.sent())) return [2, e];
                            t.label = 2;

                        case 2:
                            return n.video30 ? [2, n.video30.tryPlay(i)] : [2, 2];
                    }
                });
            });
        }, n.canWatch = function () {
            return !!n.video30 && n.video30.isLoaded;
        }, Object.defineProperty(n.prototype, "isLoaded", {
            get: function () {
                return !!this.ad && this._isLoaded;
            },
            enumerable: !1,
            configurable: !0
        }), n.prototype.tryPlay = function (e) {
            return Oe(this, void 0, void 0, function () {
                return Ie(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (!this.isLoaded) return [3, 5];
                            t.label = 1;

                        case 1:
                            return t.trys.push([1, 3, , 4]), [4, this.play(e)];

                        case 2:
                            return [2, t.sent() ? 1 : 0];

                        case 3:
                            return t.sent(), [2, 2];

                        case 4:
                            return [3, 6];

                        case 5:
                            return [2, 2];

                        case 6:
                            return [2];
                    }
                });
            });
        }, n.prototype.play = function (c) {
            return Oe(this, void 0, void 0, function () {
                var e, i, n, r, o, s, a = this;
                return Ie(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (!this.ad) throw new Error("请先初始化视频广告");
                            e = Object(l.getHostEnv)().emitter, this._isLoaded = !1, t.label = 1;

                        case 1:
                            return t.trys.push([1, 3, , 4]), [4, this.ad.load()];

                        case 2:
                            return t.sent(), [3, 4];

                        case 3:
                            throw i = t.sent(), $e.warn("加载广告失败", i), i;

                        case 4:
                            n = Date.now(), e.emit("videoStart", c, this.adUnitId), r = new Promise(function (t) {
                                return a.callback = t;
                            }), t.label = 5;

                        case 5:
                            return t.trys.push([5, 7, , 8]), [4, this.ad.show()];

                        case 6:
                            return t.sent(), $e.log("已开始播放广告"), [3, 8];

                        case 7:
                            throw o = t.sent(), this.callback = void 0, $e.error("广告播放失败", o), o;

                        case 8:
                            return [4, r];

                        case 9:
                            return s = t.sent(), $e.log("广告播放结束 isEnd:", s), this.checkLoad(6), s ? e.emit("videoEnd", c, Date.now() - n, this.adUnitId) : e.emit("videoCancel", c, Date.now() - n, this.adUnitId),
                                [2, s];
                    }
                });
            });
        }, n.load = function () {
            return $e.error("VideoAd.load 接口已废弃"), Promise.resolve();
        }, n.reset = function (t) {
            $e.error("VideoAd.reset 接口已废弃，内部会处理重试逻辑，可以删除相关代码了。");
        }, n._initialized = !1, n;
    }(), We = l.Logger.getLogger("插屏"), Xe = function () {
        function r(t) {
            var i = this;
            if (this.loaded = !1, this.onLoad = function () {
                i.loaded = !0, l.hostEnv.emitter.emit("interstitialLoaded", i.adUnitId);
            }, this.onError = function (t) {
                var e = 1004 === t.errCode ? 50 : 25;
                We.warn("出错:", t.errCode, t.errMsg, e + "秒后重试"), l.hostEnv.emitter.emit("interstitialError", i.adUnitId, t.errCode, t.errMsg),
                    i._delayReset(1e3 * e);
            }, this.onClose = function () {
                l.hostEnv.emitter.emit("interstitialClose", i.adUnitId, i._lastSource), ze.resetInterstitialOnClose && i.reset();
            }, this.adUnitIdList = t, "function" != typeof wx.createInterstitialAd) throw new Error("版本太低, 无法创建插屏广告!");
            if (!t || !t.length) throw new TypeError("必须传入一个字符串数组!");
            var e = Object(l.randomSelect)(t);
            We.info("创建插屏广告 " + e), this.ad = this._createAd(e), this.adUnitId = e;
        }
        return Object.defineProperty(r, "lastShowT", {
            get: function () {
                return this._lastShowT;
            },
            set: function (t) {
                this._lastShowT = t, wx.setStorageSync("InterstitialAd-lastShowT", t);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r, "todayFinishCnt", {
            get: function () {
                return this._todayFinishCnt;
            },
            set: function (t) {
                this._todayFinishCnt = t, wx.setStorageSync("InterstitialAd-todayFinishCnt", t);
            },
            enumerable: !1,
            configurable: !0
        }), r.init = function (t, e) {
            if (r._option = e, "function" == typeof wx.createInterstitialAd) {
                if (r.instance) We.warn("不应该多次初始化 InterstitialAd! (默认将销毁之前的,重新创建一个)"), r.instance.destroy(); else {
                    var i = function (t) {
                        var e = wx.getStorageSync(t);
                        return "number" != typeof e || isNaN(e) ? 0 : e;
                    };
                    this._lastShowT = i("InterstitialAd-lastShowT"), this._todayFinishCnt = i("InterstitialAd-todayFinishCnt");
                }
                r._initT = l.hostEnv.time.now(), r.instance = new r(t);
                var n = Object(l.getHostEnv)().emitter;
                n.on("videoEnd", r._onVideoEnd), n.on("videoCancel", r._onVideoCancel), n.on("interstitialShow", r._onInterstitialShow),
                    n.on("interstitialClose", r._onInterstitialClose), n.on("interstitialLoaded", r._onInterstitialLoaded),
                    n.on("interstitialError", r._onInterstitialError);
            } else We.warn("版本太低, 无法创建插屏广告!");
        }, r._onVideoEnd = function () {
            r.lastEndTime = l.hostEnv.time.now();
        }, r._onVideoCancel = function () {
            r.lastEndTime = l.hostEnv.time.now();
        }, r._onInterstitialShow = function (t, e) {
            var i = r.lastShowT, n = r.lastShowT = l.hostEnv.time.now();
            Object(l.isSameDay)(new Date(i), new Date(n)) ? r.todayFinishCnt += 1 : r.todayFinishCnt = 1,
                Object(l.sendSpecialEvent)("#iAdS", {
                    ai: t,
                    vt: e
                }), Object(l.sendAnalysis)("插屏-当天第" + r.todayFinishCnt + "次完成"), Object(l.sendAnalysis)("插屏-总完成");
        }, r._onInterstitialClose = function (t, e) {
            r.lastEndTime = l.hostEnv.time.now(), Object(l.sendSpecialEvent)("#iAdC", {
                ai: t,
                vt: e,
                ut: l.hostEnv.time.now() - r.lastShowT
            }), Object(l.sendAnalysis)("插屏-当天第" + r.todayFinishCnt + "次关闭");
        }, r._onInterstitialLoaded = function (t) {
            Object(l.sendSpecialEvent)("#iAdL", {
                ai: t
            }), Object(l.sendAnalysis)("插屏-加载成功");
        }, r._onInterstitialError = function (t, e, i) {
            Object(l.sendSpecialEvent)("#iAdE", {
                ai: t,
                ec: e
            }), Object(l.sendAnalysis)("插屏-出错-" + e, {
                ec: e,
                em: i
            }), Object(l.sendAnalysis)("插屏-总出错", {
                ec: e,
                em: i
            });
        }, r.show = function (t) {
            if (r.instance) {
                var e = l.hostEnv.time.now();
                e - r._initT <= r._option.startLimit ? We.warn("小程序启动一定时间内不允许展示插屏广告", ((e - r._initT) / 1e3).toFixed(1) + "s < " + (r._option.startLimit / 1e3).toFixed(1) + "s") : e - r.lastEndTime <= r._option.minInterval ? We.warn("距离小程序插屏广告或者激励视频广告上次播放时间间隔不足，不允许展示插屏广告", ((e - r.lastEndTime) / 1e3).toFixed(1) + "s < " + (r._option.minInterval / 1e3).toFixed(1) + "s") : r.instance.show(t).catch(function (t) {
                    We.warn("show fail:", t);
                });
            } else l.hostEnv.DEBUG && We.warn("未初始化插屏广告!");
        }, r.$show = function (i) {
            return Oe(this, void 0, void 0, function () {
                var e;
                return Ie(this, function (t) {
                    if (!r.instance) throw l.hostEnv.DEBUG && We.warn("未初始化插屏广告!"), r.Error.NeedInit;
                    if ((e = l.hostEnv.time.now()) - r._initT <= r._option.startLimit) throw l.hostEnv.DEBUG && We.warn("小程序启动一定时间内不允许展示插屏广告", ((e - r._initT) / 1e3).toFixed(1) + "s < " + (r._option.startLimit / 1e3).toFixed(1) + "s"),
                        r.Error.StartLimit;
                    if (e - r.lastEndTime <= r._option.minInterval) throw l.hostEnv.DEBUG && We.warn("距离小程序插屏广告或者激励视频广告上次播放时间间隔不足，不允许展示插屏广告", ((e - r.lastEndTime) / 1e3).toFixed(1) + "s < " + (r._option.minInterval / 1e3).toFixed(1) + "s"),
                        r.Error.IntervalLimit;
                    return [2, r.instance.show(i)];
                });
            });
        }, r.prototype._createAd = function (t) {
            var e = wx.createInterstitialAd({
                adUnitId: t
            });
            return e && (e.onLoad(this.onLoad), e.onError(this.onError), e.onClose(this.onClose)),
                e;
        }, r.prototype.show = function (e) {
            return Oe(this, void 0, void 0, function () {
                return Ie(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.ad ? [4, this.ad.show()] : (We.error("插屏广告未创建成功!"), this._delayReset(24e3),
                                [2]);

                        case 1:
                            return t.sent(), this._lastSource = e, l.hostEnv.emitter.emit("interstitialShow", this.adUnitId, e),
                                this.loaded = !1, [2];
                    }
                });
            });
        }, r.prototype.reset = function () {
            var t, e;
            this._resetT && (clearTimeout(this._resetT), this._resetT = void 0), this.ad && (this.ad.offLoad(this.onLoad),
                this.ad.offError(this.onError), this.ad.offClose(this.onClose), null === (e = (t = this.ad).destroy) || void 0 === e || e.call(t));
            var i = Object(l.randomSelect)(this.adUnitIdList);
            We.info("创建插屏广告 " + i), this.ad = this._createAd(i), this.adUnitId = i;
        }, r.prototype._delayReset = function (t) {
            var e = this;
            this._resetT && clearTimeout(this._resetT), this._resetT = setTimeout(function () {
                e.reset();
            }, t);
        }, r.prototype.destroy = function () {
            var t, e;
            this.ad && (this.ad.offLoad(this.onLoad), this.ad.offError(this.onError), this.ad.offClose(this.onClose),
                null === (e = (t = this.ad).destroy) || void 0 === e || e.call(t), this.ad = void 0,
                this.adUnitId = "", this.show = function () {
                    return Promise.reject("插屏广告组件已被销毁, 不应该再调用 show !");
                });
        }, r.lastEndTime = 0, r._initT = 0, r._lastShowT = 0, r._todayFinishCnt = 0, r;
    }();
    Fe = Xe || (Xe = {}), (He = Fe.Error || (Fe.Error = {}))[He.NeedInit = 1] = "NeedInit",
        He[He.StartLimit = 2] = "StartLimit", He[He.IntervalLimit = 3] = "IntervalLimit";
    l.Logger.getLogger("跳转");
    new l.Logger("@h5/wxgame").log("3.33.27"),
        "undefined" != typeof wx && (Object(l.setHostEnv)("storage", {
            getItem: wx.getStorageSync,
            setItem: wx.setStorageSync,
            removeItem: wx.removeStorageSync
        }),
            Object(l.setHostEnv)("env", wx.getSystemInfoSync()),
            Object(l.setHostEnv)("getLaunchData", function () {
                return Ce(wx.getLaunchOptionsSync());
            })), Object(l.setHostEnv)("sendHttp", function (t) {
                return new Ue(t).send();
            }), Re && l.Analysis.close();
    var qe = l.Logger.getLogger("version");
    function Ye(t) {
        return Je.getUrl(t);
    }
    var Qe, Je = new (function () {
        function t(t, e) {
            void 0 === t && (t = "version"), void 0 === e && (e = "resm"), this.versionsDir = t,
                this.resMD5Dir = e, this.versionInfo = new Le(), this._loaded = !1, this.versionInfo.rootUrl = "";
        }
        return t.prototype.init = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e, i, n;
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            e = "version1637913883.json", t.label = 1;

                        case 1:
                            return t.trys.push([1, 3, , 4]), qe.log("loading... " + e), [4, Promise.resolve()];

                        case 2:
                            i = version1637913883;
                            console.log("i", i)
                            return [3, 4];

                        case 3:
                            return n = t.sent(), qe.error(n), [2];

                        case 4:
                            return this.versionInfo.initVersionInfo(version1637913883), qe.log("loaded 1637913883"), this._loaded = !0,
                                [2];
                    }
                });
            });
        },
            t.prototype.getUrl = function (t) {
                if (!t) return "";
                if (!this._loaded) return "resource/" + t;
                var e = t.split("?")[0], i = this.versionInfo.getVersionNum(e);
                if (!i) return "resource/" + t;
                var n = e.split("."), r = n[n.length - 1];
                // console.log("getUrl", this.resMD5Dir + "/" + i + "." + r)
                return this.resMD5Dir + "/" + i + "." + r;
            },
            t;
    }())();
    function Ze(t) {
        t %= 36e5;
        var e = Math.floor(t / 6e4), i = (e < 10 ? "0" : "") + e;
        t %= 6e4;
        var n = Math.floor(t / 1e3);
        return i + ":" + ((n < 10 ? "0" : "") + n);
    }
    function ti(f, y) {
        if (!f) return "";
        y || (y = {});
        for (var v = /{(\w+(?:\.\w+)*)(?::(\w+(?:,\w+)*))?}/, t = function () {
            var e, t, i = v.exec(f);
            if (!i) return "break";
            var n = Object(Q.f)(i, 3), r = n[0], o = n[1], s = n[2];
            s || (s = "echo");
            var a = s.split(","), c = o.split("."), u = y;
            try {
                for (var h = (e = void 0, Object(Q.g)(c)), l = h.next(); !l.done; l = h.next()) {
                    var p = l.value;
                    if (!u) break;
                    u = u[p];
                }
            } catch (t) {
                e = {
                    error: t
                };
            } finally {
                try {
                    l && !l.done && (t = h.return) && t.call(h);
                } finally {
                    if (e) throw e.error;
                }
            }
            var d = "";
            null != u && (d = a.reduce(function (t, e) {
                return ei ? ei(t) : t;
            }, u).toString()), f = f.replace(r, d);
        }; ;) {
            if ("break" === t()) break;
        }
        return f;
    }
    function ei(t) {
        return t;
    }
    var ii, ni = function () {
        function t(t) {
            this.json = t, DEVELOP && l.Logger.log("分享词:", t);
        }
        return t.prototype.getShareWords = function (t) {
            return this.json ? this.json[t] : [];
        }, t;
    }();
    function ri() {
        return Object(Q.b)(this, void 0, void 0, function () {
            var e;
            return Object(Q.e)(this, function (t) {
                switch (t.label) {
                    case 0:
                        return true ? [2]
                            :
                            (ii || (ii = Object(l.getShareWordsConfig)($hostDef.censor).catch(function (t) {
                                throw ii = void 0, t;
                            })

                            ),

                                e = ni.bind,
                                [4, ii]);

                    case 1:
                        return Qe = new (e.apply(ni, [void 0, t.sent()]))(), ii = void 0, [2];
                }
            });
        });
    }
    var oi, si, ai, ci = l.Logger.getLogger("share"), ui = (void (ai = 0) === (si = 3) && (si = 0),
        void 0 === ai && (ai = 0), (oi = 2) < H || !(H < oi) && (si < $ || !($ < si) && ai <= K));
    function hi(t, n, r, o) {
        t || (DEVELOP && ci.warn("invokeShare: 参数 title 为空"), t = ""), n || (DEVELOP && ci.warn("invokeShare: 参数 imageUrl 为空"),
            n = ""), r || (DEVELOP && ci.warn("invokeShare: 参数 queryData 为空"), r = {}), Object(l.analysisShareEvent)(r.shareSource, r.shareId),
            r.timeStamp = Date.now();
        var s = z(r);
        if (ui) {
            var a = Date.now();
            return ci.log("起调微信分享", a, s), new Promise(function (i, e) {
                wx.shareAppMessage({
                    title: t,
                    imageUrl: n,
                    query: s,
                    success: function (t) {
                        ci.log("收到分享回调 success", t), i(1);
                    },
                    fail: function (t) {
                        "shareAppMessage:fail cancel" === t.errMsg ? (ci.log("主动取消分享"), i(5)) : (ci.log("收到分享回调 fail", t),
                            e(t.errMsg));
                    },
                    complete: function () {
                        ci.log("收到分享回调 complete", arguments);
                    }
                }), wx.onShow(function t() {
                    wx.offShow(t);
                    var e = Date.now();
                    (N() ? 2600 : 2e3) < e - a ? (ci.log("分享之后 onShow", e), pe(r.shareId), i(6)) : (ci.log("分享之后 onShow", e, "时间太短"),
                        i(2));
                });
            }).catch(function (t) {
                return Sa("分享出错" + t), 4;
            });
        }
        return new Promise(function (e, i) {
            wx.shareAppMessage({
                title: t,
                imageUrl: n,
                query: s,
                success: function (t) {
                    pe(r.shareId), o ? t.shareTickets && t.shareTickets.length ? (ci.log("分享到群"), e(1)) : (ci.log("分享完成, 没有分享到群"),
                        e(3)) : (ci.log("分享完成"), e(1));
                },
                fail: function (t) {
                    "shareAppMessage:fail cancel" === t.errMsg ? (ci.log("主动取消分享"), e(5)) : i(t.errMsg);
                }
            });
        }).catch(function (t) {
            return Sa("分享出错" + t), 4;
        });
    }
    var li, pi, di, fi, yi = l.Logger.getLogger("share");
    function vi() {
        wx.showShareMenu({
            withShareTicket: !0
        }), wx.onShareAppMessage(function () {
            var t = wi("normalShare");
            return t.queryData.timeStamp = ie.curTime, t.queryData.shareSource = Kt.normal,
                function (t) {
                    Object(l.sendAnalysis)("默认分享-" + t);
                }("右上角内嵌分享"), {
                title: t.title,
                imageUrl: t.imageUrl,
                query: z(t.queryData)
            };
        });
    }
    function gi(t, e) {
        void 0 === e && (e = {});
        var i = wi("normalShare");
        return e = Object(Q.a)(Object(Q.a)(Object(Q.a)({}, i.queryData), {
            shareSource: t
        }), e), hi(i.title || "", i.imageUrl || "", e).then(function (t) {
            return 6 === t ? 1 : t;
        });
    }
    function mi(t, e, i, n) {
        var r = wi("normalShare"), o = r.title;
        return function (u, h, l, p) {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e, i, n, r, o, s, a, c;
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return e = wx.createImage(), i = new Promise(function (t) {
                                e.onload = function () {
                                    t();
                                };
                            }), e.src = Ye("bg/bg_settle.png"), n = wx.createImage(), r = new Promise(function (t) {
                                n.onload = function () {
                                    t();
                                };
                            }), u === g ? u = "res/opendata/default_avatar.png" : u.startsWith("res/") || 0 === u.indexOf("http") || (u = Ye(u)),
                                n.src = u, o = wx.createImage(), s = new Promise(function (t) {
                                    o.onload = function () {
                                        t();
                                    };
                                }), h === g ? h = "res/opendata/default_avatar.png" : h.startsWith("res/") || 0 === h.indexOf("http") || (h = Ye(h)),
                                o.src = h, [4, Promise.all([i, r, s])];

                        case 1:
                            return t.sent(), 50, 83, (a = wx.createCanvas()).width = e.width, a.height = e.height,
                                (c = a.getContext("2d")).drawImage(e, 0, 0), c.drawImage(n, 147, 234, 100, 100),
                                c.drawImage(o, 533, 234, 100, 100), c.fillStyle = "#0047ff", c.font = "50px simHei",
                                c.textAlign = "center", c.fillText(l, 388, 313), c.fillStyle = "#5C7379", c.font = "30px simHei",
                                c.fillText(p, 388, 398), [2, a.toTempFilePathSync({
                                    x: 0,
                                    y: 0,
                                    width: a.width,
                                    height: a.height
                                })];
                    }
                });
            });
        }(t, e, i, n).then(function (t) {
            return hi(o || "", t || "", Object(Q.a)(Object(Q.a)({}, r.queryData), {
                shareSource: Kt.shareScore
            }));
        });
    }
    function bi(t) {
        var e = ft.getDefById(t), i = wi("shareSkin"), n = ti(i.title, {
            skinName: e ? e.name : ""
        });
        return function (a, c, u) {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e, i, n, r, o, s;
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return e = wx.createImage(), i = new Promise(function (t) {
                                e.onload = function () {
                                    t();
                                };
                            }), e.src = a, n = wx.createImage(), r = new Promise(function (t) {
                                n.onload = function () {
                                    t();
                                };
                            }), n.src = c, [4, Promise.all([i, r])];

                        case 1:
                            return t.sent(), (o = wx.createCanvas()).width = e.width, o.height = e.height, (s = o.getContext("2d")).drawImage(e, 0, 0),
                                s.drawImage(n, 50, 170, 2 * n.width, 2 * n.height), s.fillStyle = "#000000", s.font = "60px simHei",
                                s.textAlign = "center", s.fillText(u, 550, 360), [2, o.toTempFilePathSync({
                                    x: 0,
                                    y: 0,
                                    width: o.width,
                                    height: o.height
                                })];
                    }
                });
            });
        }(i.imageUrl || "", Ye("icon/skin/icon_skin_" + t + ".png"), e.name).then(function (t) {
            return hi(n || "", t || "", Object(Q.a)(Object(Q.a)({}, i.queryData), {
                shareSource: Kt.shareSkin
            }));
        });
    }
    function wi(t) {
        var e;
        if (Qe ? e = Qe.getShareWords(t) : ri(), e && e.length) return function (t, e) {
            return {
                title: e.desc,
                imageUrl: e.image,
                queryData: _i(t, e.id)
            };
        }(t, E(e));
        if (yi.warn("找不到分享类型 " + t + " 的分享词"), "normalShare" === t) return {
            title: o,
            imageUrl: "",
            queryData: _i(t, 0)
        };
        var i = wi("normalShare");
        return i.queryData.shareType = t, i;
    }
    function _i(t, e) {
        var i = {
            fuid: Pa.uid,
            shareType: t,
            shareId: String(e)
        };
        Pa.chid && (i.chid = Pa.chid);
        var n = Object(l.getLinkKey)();
        return n && (i.linkKey = n), i;
    }
    fi = di = (N() ? G() : 0 <= U.indexOf(B.model) || 40 <= B.statusBarHeight) ? (li = (M || 44) * p,
        pi = 21 * p, 15) : (li = M && 20 !== M ? M * p : 15, pi = 15);
    var Si = u - di - fi, Ti = h - li - pi, xi = {
        top: li,
        bottom: pi,
        left: di,
        right: fi,
        width: Si,
        height: Ti,
        halfWidth: Si / 2,
        halfHeight: Ti / 2
    }, Li = function (i) {
        function t() {
            var t = i.call(this) || this;
            t.name = "SkinView", t.uiArea.x = 0, t.uiArea.y = xi.top, t.uiArea.width = u, t.uiArea.height = h - t.uiArea.y,
                t.closeBtn.on(Laya.Event.CLICK, t, t.close),
                t.goldBtn.on(Laya.Event.CLICK, t, function () {
                    new Bi().show();
                }), t.addToDestroy = Object(m.a)(function () {
                    t.goldLabel.changeText(Number(Laya.LocalStorage.getItem("goldgold")).toFixed());
                });
            Laya.timer.loop(100, this, () => {
                t.goldLabel.changeText(Number(Laya.LocalStorage.getItem("goldgold")).toFixed() + " ");
            })
            var e = t.skinList;
            return e.itemRender = Rs, e.vScrollBarSkin = "", e.scrollBar.hide = !0, e.scrollBar.elasticBackTime = 200,
                e.scrollBar.elasticDistance = 200, e.elasticEnabled = !0, e.renderHandler = new Laya.Handler(t, t.updateItem),
                t.refreshSkinList(), t.skinList.height = t.uiArea.height - t.skinList.y, t;
        }
        return Object(Q.d)(t, i),
            t.prototype.updateItem = function (t, e) {
                t.updateData(e);
            },
            t.prototype.refreshSkinList = function () {
                //here
                var t = ft.getList().filter(function (t) {
                    if (!$hostDef.skinShowNeed && 0 < t.showNeed) {
                        var e = Pa.getSkin(t.id);

                        return !!(e && 0 <= e.status);
                    }
                    return !0;
                }).sort(function (t, e) {
                    return t.sort - e.sort;
                });
                // console.log("皮肤数据：", e)
                this.skinList.array = t;
                window.inSkinView = !0
            },
            t;
    }(Rt.SkinViewUI),
        ki = new (function () {
            function t() {
                this.load("vibrate", !0), this.load("audio", !0);
            }
            return Object.defineProperty(t.prototype, "vibrate", {
                get: function () {
                    return this._vibrate;
                },
                set: function (t) {
                    this._vibrate = t, wx.setStorageSync("settings-vibrate", t), console.log("[Settings]", "vibrate:", t),
                        t && wx.vibrateShort();
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "audio", {
                get: function () {
                    return this._audio;
                },
                set: function (t) {
                    this._audio = t, wx.setStorageSync("settings-audio", t), console.log("[Settings]", "audio:", t),
                        t || Oi.stopAll();
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.load = function (t, e) {
                // var i = wx.getStorageSync("settings-" + t);
                // this["_" + t] = "boolean" == typeof i ? i : e, console.log("[Settings]", t + ":", this[t]);
            },
                Object(Q.c)([m.b], t.prototype, "vibrate", null), Object(Q.c)([m.g], t.prototype, "_vibrate", void 0),
                Object(Q.c)([m.b], t.prototype, "audio", null), Object(Q.c)([m.g], t.prototype, "_audio", void 0),
                t;
        }())(), Oi = laya.media.SoundManager;
    function Ii(t) {
        if (Laya.LocalStorage.getItem("soundsound") == 0
            || Laya.LocalStorage.getItem("soundsound") == null) {

            ki.audio && Oi.playSound("sound/" + t + ".mp3", 1);
        }
    }
    var Di = function (n) {
        function t(t) {
            var e = n.call(this) || this;
            e.name = "SkinGotView", e._skinId = t, e.isTop = !0, e.panel.y = f / 2;
            var i = ft.getDefById(t);
            return e.nameLabel.text = i.name, e.icon.skin = "icon/icon_skin_" + i.id + ".png",
                function (t) {
                    Object(l.sendAnalysis)("皮肤获得-" + t);
                }(t.toString()),
                e.closeBtn.on(Laya.Event.CLICK, e, e.close),
                e.useBtn.on(Laya.Event.CLICK, e, e.useHandle),
                e.shareBtn.on(Laya.Event.CLICK, e, function () {
                    se("获取皮肤炫耀"), bi(t).then(function (t) {
                        ae("获取皮肤炫耀"), k.findPanel(function (t) {
                            return "SkinView" == t.name;
                        }) || new Li().show();
                    }).catch(function (t) { }), e.close();
                }), e;
        }
        return Object(Q.d)(t, n),
            t.prototype.useHandle = function () {

                (Te(this._skinId),
                    Pa.curSkin == this._skinId) && (console.log("成功使用皮肤" + ft.getDefById(this._skinId).name),
                        this.close());
            }, t.prototype.show = function () {
                console.log("获取皮肤炫耀")
                // oe("获取皮肤炫耀"),
                n.prototype.show.call(this), zt(this.panel), Ii("unlockskin");
            }, t.prototype.close = function () {
                TWEEN.killTweensOf(this.panel), n.prototype.close.call(this);
            }, t;
    }(Rt.SkinGotViewUI);
    function Ci() {
        var t;
        Laya.timer.once(2.3e3, this, () => {
            window.tiptip2.visible = !0,

                Laya.timer.once(1500, this, () => {
                    window.tiptip2.visible = !1;
                })
        })
        if (Pa.turntableTotalCount == mt.getDefById(6).hitTime) Pa.turntableTotalCount++,

            t = 5; else {

            for (var e = [], i = void 0, n = 0; n < 5; n++) i = mt.getDefById(n + 1), e.push(i.initialRate + Pa.turntableGetNoFive * i.addRate);
            4 == (t = P(e)) ? Pa.turntableGetNoFive = 0 : Pa.turntableGetNoFive++, Pa.turntableTotalCount++;
        }
        return t;
    }
    function Ei(t, e) {
        var i = te[t];
        return e && (i = i.replace("{skinId}", e + "")), i;
    }
    var Pi = Rt.DialViewUI,
        Bi = function (c) {
            function t() {
                var e = c.call(this) || this;
                e._crtIndex = 0, e._forceStop = !1, e._isTurning = !1, e.timerId = -1, e.countDownTime = 0,
                    e.isVideo = !1, e.name = "DialView", e.isTop = !0, ue("弹窗触达"), e.videoBtn.on(Laya.Event.CLICK, e, e.onPlayVideo),
                    e.freeBtn.on(Laya.Event.CLICK, e, e.onFreeTurn),
                    e.closeBtn.on(Laya.Event.CLICK, e, e.onClose),
                    console.log("tipView", e.tipView),
                    window.tiptip2 = e.tipView,
                    e.videoBtn.visible = !$hostDef.censor, e.addToDestroy = Object(m.a)(function () {
                        e.freeBtn.visible = !e._isTurning && 0 < Pa.ticket, e.videoBtn.visible = !e._isTurning && !$hostDef.censor,
                            0 < Pa.ticket && 0 < e.countDownTime && (e.hideGroupTip(), e._isTurning || e.startTurn(!1));
                    }), e.addToDestroy = Object(m.a)(function () {
                        e.goldLabel.text = "" + Number(Laya.LocalStorage.getItem("goldgold"));
                        Laya.LocalStorage.setItem("goldgold", Number(Laya.LocalStorage.getItem("goldgold")))
                    }), e.addToDestroy = Object(m.a)(function () {
                        e.countDownTime > $hostDef.puzzle_count_down_time && (e.countDownTime = $hostDef.puzzle_count_down_time);
                        var t = e.countDownTime;
                        t <= 0 ? e.groupImage.visible = !1 : (e.groupImage.visible = !0, e.groupTip.text = "请在" + t + "秒内点击刚刚分享的微信群链接，即可免费转一次");
                    });
                for (var t = mt.getList(), i = 0, n = t.length; i < n; i++) {
                    var r = t[i], o = e["icon" + r.id],
                        s = e["label" + r.id],
                        a = gt.getDefById(r.rewardId);
                    console.log("转盘数据：", s)
                    a && "gold" == a.rewardType ? (s.text = "x" + a.rewardNum + " ", o.skin = "ui/icon_gold_" + (r.source + 1) + ".png") : (s.text = "Skin",
                        o.skin = "ui/sButton_gifts.png");
                }
                return e;
            }
            return Object(Q.d)(t, c), t.prototype.hideGroupTip = function () {
                0 < this.timerId && (clearInterval(this.timerId), this.timerId = -1), this.countDownTime = 0,
                    this.groupImage.visible = !1;
            },
                t.prototype.onClose = function () {
                    this._isTurning || this.close();


                }, t.prototype.show = function () {
                    return Object(Q.b)(this, void 0, void 0, function () {
                        var e = this;
                        // console.log("打开转盘")
                        return Object(Q.e)(this, function (t) {
                            return c.prototype.show.call(this), $hostDef.share_turntable_group && Pa.dailyTicketGroupCount < dt.dailyMaxGroupTicket && oe("群分享转盘"),
                                this.panel.centerY = 0, [2, new Promise(function (t) {
                                    e._resolve = t;
                                })];
                        });
                    });
                }, t.prototype.startTurn = function (t) {

                    var e = this;
                    this.isVideo = t, ue("转盘实际转动"), this.stopIndex = void 0, this._isTurning = !0;
                    var i = this._crtIndex + 4, n = 6 * Math.ceil(i / 6), r = n - i;
                    Laya.Tween.clearAll(this.tableImage), Laya.Tween.to(this.tableImage, {
                        rotation: 60 * i
                    }, 600, Laya.Ease.sineIn, Laya.Handler.create(this, function () {
                        Laya.Tween.to(e.tableImage, {
                            rotation: 60 * n
                        }, 80 * r, void 0, Laya.Handler.create(e, function () {
                            e.showCircleTween(),
                                e.getDialReward();
                        }));
                    }));
                }, t.prototype.showCircleTween = function () {
                    var t = this;
                    this.tableImage.rotation = 0, Laya.Tween.to(this.tableImage, {
                        rotation: 360
                    }, 480, void 0, Laya.Handler.create(this, function () {
                        t._forceStop ? t._isTurning = !1 : null == t.stopIndex ? t.showCircleTween() : t.stopTurn();
                    }));
                }, t.prototype.stopTurn = function () {
                    var e = this;
                    this.tableImage.rotation = 0;
                    var t = 12 - this.stopIndex;
                    Laya.Tween.to(this.tableImage, {
                        rotation: 60 * t
                    }, 150 * t, Laya.Ease.sineOut, Laya.Handler.create(this, function () {
                        e.tableImage.rotation = e.tableImage.rotation % 360, e._crtIndex = e.stopIndex;
                        var t = gt.getDefById(mt.getDefById(e.stopIndex + 1).rewardId);
                        "gold" == t.rewardType ? (function (t, e, i, n) {
                            void 0 === e && (e = "");
                            void 0 === i && (i = "");
                            void 0 === n && (n = 300);
                            if (!e && !i) return;
                            new ba().show(e, t, i, n);
                        }("ui/icon_gold.png", "恭喜获得:", "x" + t.rewardNum),
                            Laya.LocalStorage.setItem("goldgold", Number(Laya.LocalStorage.getItem("goldgold")) + t.rewardNum)
                        )

                            :
                            "skin" == t.rewardType && (Pa.completeSkin(t.skinId),
                                new Di(t.skinId).show()), e._isTurning = !1;
                    }));
                },




                t.prototype.onPlayVideo = function () {
                    YYGGames.showReward(() => {

                        console.log("转盘！！")
                        return Object(Q.b)(this, void 0, void 0, function () {
                            var e;
                            this.startTurn(!0)
                            return Object(Q.e)(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                    // return this.hideGroupTip(), 
                                    // Pa.videoToTicket >= dt.turntableVideoMax ? $hostDef.share_turntable_group && Pa.dailyTicketGroupCount < dt.dailyMaxGroupTicket ? (this.showDialShare(),
                                    //     [2]) : [2, Sa("今日转盘看视频次数已用完")] : [4, Ke.play(Ei(Yt.turntable))];

                                    case 1:
                                        if (0 === (e = t.sent()))
                                            return [2, Sa("完整看完视频才能领取奖励")];
                                        if (2 === e) return $hostDef.censor || !$hostDef.noVideoShare ? [2, Sa("抱歉，当前没有视频可看")] :
                                            $hostDef.share_turntable_group && Pa.dailyTicketGroupCount < dt.dailyMaxGroupTicket ?
                                                (this.showDialShare(),
                                                    [2]) : [2, Sa("抱歉，当前没有视频可看")];
                                        try {
                                            ue("视频转盘完成视频"),
                                                Pa.videoToTicket++,
                                                this.startTurn(!0);
                                        } catch (t) {
                                            DEVELOP && console.log(t), Sa(t);
                                        }
                                        return [2];
                                }
                            });
                        });
                    })



                },




                t.prototype.showDialShare = function () {
                    var e = this;
                    se("群分享转盘"), gi(Kt.ticket).then(function (t) {
                        1 === t && ae("群分享转盘"), Ta("请点击群链接进入游戏免费转一次", 1e3), e.hideGroupTip(), -1 === e.timerId && (e.countDownTime = $hostDef.puzzle_count_down_time,
                            e.timerId = setInterval(function () {
                                e.countDownTime -= 1, e.countDownTime <= 0 && (e.groupImage.visible = !1, clearInterval(e.timerId),
                                    e.timerId = -1);
                            }, 1e3));
                    });
                }, t.prototype.onFreeTurn = function () {
                    console.log("转盘！！")
                    return Object(Q.b)(this, void 0, void 0, function () {
                        return Object(Q.e)(this, function (t) {
                            return Pa.ticket <= 0 ? [2, Sa("免费次数已用完")] : (this._isTurning || this.startTurn(!1),

                                [2]);
                        });
                    });
                }, t.prototype.getDialReward = function () {




                    this.isVideo ? this.stopIndex = Ci()

                        :
                        this.stopIndex = Pa.ticket <= 0
                            ?
                            (Sa("转盘券不足"),
                                -1) :
                            (Pa.ticket--,
                                Ci());
                }, t.prototype.close = function () {
                    if (window.inSkinView) {

                    } else {

                        YYGGames.gameBox.game1.visible = YYGGames.gameBox.game2.visible = !0
                    }
                    this.hideGroupTip(), c.prototype.close.call(this), this._resolve && (this._resolve(),
                        this._resolve = void 0);
                }, Object(Q.c)([m.g], t.prototype, "_isTurning", void 0), Object(Q.c)([m.g], t.prototype, "countDownTime", void 0),
                t;
        }(Pi);
    var ji = Rt.PuzzleSkinViewUI, Ai = function (i) {
        function t() {
            var r = i.call(this) || this;
            r.timerId = -1, r.isChecked = !1, r.puzzleCountDownTime = 0, r.name = "PuzzleSkinView",
                r.canTapMaskClose = !1, r.addToDestroy = Object(m.a)(function () {
                    r.puzzleCountDownTime > $hostDef.puzzle_count_down_time && (r.puzzleCountDownTime = $hostDef.puzzle_count_down_time);
                    var t = r.puzzleCountDownTime;
                    t <= 0 ? r.boxTips.visible = !1 : (r.boxTips.visible = !0, r.lblCountDown.text = "" + t);
                });
            for (var t = 1; t <= 6; t++) {
                var e = r["imgChip" + t];
                e && (e.gray = !0);
            }
            return r.addToDestroy = Object(m.a)(function () {
                var t = Pa.puzzlePieces.length;
                r.btnGet.visible = 6 <= t, r.btnShare.visible = t < 6, (r.puzzleCountDownTime = 0) < r.timerId && (clearInterval(r.timerId),
                    r.timerId = -1);
                for (var e = 0; e < t; e++) {
                    var i = Pa.puzzlePieces[e], n = r["imgChip" + i];
                    n && n.gray && r.playFlipEffect(i);
                }
            }), r.addToDestroy = Object(m.h)(function () {
                return Pa.puzzlePieces.length;
            }, function (t) {
                !function (t) {
                    Object(l.sendAnalysis)("皮肤拼图-" + t);
                }("皮肤拼图碎片获得" + t + "个");
            }), r.addEvents(), r.btnPop.skin = "ui/check_today_0.png", r;
        }
        return Object(Q.d)(t, i), t.prototype.addEvents = function () {
            this.btnClose.on(Laya.Event.CLICK, this, this.close), this.btnShare.on(Laya.Event.CLICK, this, this.onShare),
                this.btnGet.on(Laya.Event.CLICK, this, this.onGet), this.btnPop.on(Laya.Event.CLICK, this, this.onSwitchPop);
        }, t.prototype.onSwitchPop = function () {
            this.isChecked = !this.isChecked, this.btnPop.skin = this.isChecked ? "ui/check_today_1.png" : "ui/check_today_0.png",
                !this.isChecked, this.close();
        }, t.prototype.onGet = function () {
            var t = function () {
                if (!(Pa.getSkin(13) || Pa.puzzlePieces.length < 6)) {
                    var t = new Jt();
                    return Pa.completeSkin(13, t), t;
                }
            }();
            t && (xa(t), this.close());
        }, t.prototype.onShare = function () {
            var e = this;
            se("皮肤拼图"), gi(Kt.puzzleSkin).then(function (t) {
                1 === t && ae("皮肤拼图"), Ta("请点击群链接进入游戏领取奖励", 2e3), -1 !== e.timerId && (clearInterval(e.timerId),
                    e.timerId = -1), -1 === e.timerId && (e.puzzleCountDownTime = $hostDef.puzzle_count_down_time,
                        e.timerId = setInterval(function () {
                            e.puzzleCountDownTime -= 1, e.puzzleCountDownTime <= 0 && (e.boxTips.visible = !1,
                                clearInterval(e.timerId), e.timerId = -1);
                        }, 1e3));
            });
        }, t.prototype.playFlipEffect = function (t) {
            var e = this["imgChip" + t];
            e && (e.gray = !0, Laya.Tween.to(e, {
                scaleX: 0
            }, 350, Laya.Ease.linearNone, new Laya.Handler(this, function () {
                e.gray = !1, Laya.Tween.to(e, {
                    scaleX: 1
                }, 350);
            })));
        }, t.prototype.close = function () {
            clearInterval(this.timerId), this.timerId = -1;
            for (var t = 1; t <= 6; t++) {
                var e = this["imgChip" + t];
                e && Laya.Tween.clearAll(e);
            }
            this.puzzleCountDownTime = 0, i.prototype.close.call(this);
        }, Object(Q.c)([m.g], t.prototype, "puzzleCountDownTime", void 0), t;
    }(ji);
    function Mi(e, i, n, r) {
        void 0 === r && (r = "分享失败，请不要频繁打扰同一个群！"), i.shareCount += 1;
        var t = wi("normalShare");
        return n = Object(Q.a)(Object(Q.a)(Object(Q.a)({}, t.queryData), {
            shareSource: e
        }), n), hi(t.title || o, t.imageUrl || "", n, !!r).then(function (t) {
            return function (t, e, i, n) {
                switch (t) {
                    case 6:
                        return e.shareCount <= 1 && Math.random() < (void 0 === $hostDef.shareTimeFailRate ? .3 : $hostDef.shareTimeFailRate) ? (DEVELOP && l.Logger.log("概率分享失败"),
                            wa("", "分享失败，请不要频繁打扰同一个群！", {
                                confirmText: "重新分享"
                            }).then(function (t) {
                                return !!t && n();
                            })) : (e.shareCount = 0, Promise.resolve(!0));

                    case 1:
                        return Promise.resolve(!0);

                    case 3:
                        return i ? wa("", i, {
                            confirmText: "重新分享"
                        }).then(function (t) {
                            return !!t && n();
                        }) : Promise.resolve(!0);

                    case 2:
                        return e.shareCount <= 1 ? wa("", "分享失败", {
                            confirmText: "重新分享"
                        }).then(function (t) {
                            return !!t && n();
                        }) : (Sa("分享失败，请不要频繁打扰同一个群！"), e.shareCount = 0, Promise.resolve(!1));

                    case 4:
                    case 5:
                        return Promise.resolve(!1);
                }
            }(t, i, r, function () {
                return Mi(e, i, n, r);
            });
        });
    }
    function Ri(t, r, o) {
        for (var e = t < 10 ? t : Math.min(30, Math.max(5, Math.floor(t / 50))), i = function (t) {
            var e = new Laya.Image("ui/icon_gold.png");
            e.anchorX = e.anchorY = .5, e.x = u / 2, e.y = h / 2, e.mouseEnabled = !1, ha.addChild(e);
            var i = new TWEEN.Tween(e).to({
                x: e.x + 250 * (Math.random() - .5),
                y: e.y + 250 * (Math.random() - .5)
            }, 300).easing(TWEEN.Easing.Linear.None), n = new TWEEN.Tween(e).delay(300).to({
                x: r,
                y: o,
                alpha: 0
            }, 500).easing(TWEEN.Easing.Quartic.Out).onComplete(function () {
                e.destroy(!0);
            });
            i.chain(n), i.start();
        }, n = 0; n < e; n++) i();
    }
    var Ni = function (i) {
        function t() {
            var t = i.call(this) || this;
            return t.name = "SignView", t.canTapMaskClose = !0, t.box.centerY = -20, t.box.y = (f - t.box.height) / 2,
                t.closeBtn.on(Laya.Event.CLICK, t, t.close), t.gotBtn.on(Laya.Event.CLICK, t, function () {
                    return Object(Q.b)(t, void 0, void 0, function () {
                        var e, i = this;
                        return Object(Q.e)(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return [4, Ke.play(Ei(Yt.sign))];

                                case 1:
                                    return 0 !== (e = t.sent()) ? [3, 2] : [2, Sa("观看完整视频才能获得奖励")];

                                case 2:
                                    return 2 !== e ? [3, 6] : !$hostDef.censor && $hostDef.noVideoShare ? [3, 3] : (Sa("抱歉，当前没有视频可看"),
                                        [3, 5]);

                                case 3:
                                    return [4, Mi(Kt.sign, {
                                        shareCount: 0
                                    }).then(function (t) {
                                        t && i.getReward(!0);
                                    })];

                                case 4:
                                    t.sent(), t.label = 5;

                                case 5:
                                    return [2];

                                case 6:
                                    return this.getReward(!0), [2];
                            }
                        });
                    });
                }), t.initData(), t;
        }
        return Object(Q.d)(t, i), t.prototype.checkRewardList = function () {
            var t, e = vt.getList();
            t = Pa.signLoginDay <= 7 ? e.slice(0, 7) : e.slice(7), this.rewardList = t;
        }, t.prototype.initData = function () {
            var t = this.rewardList;
            t || this.checkRewardList(), t = this.rewardList;
            for (var e = 0; e < 7; e++) {
                this["item" + (e + 1)].setData(t[e], e + 1);
            }
            this.checkBtn();
        }, t.prototype.checkBtn = function () {
            if (Pa.signLoginDay == Pa.signDay) return this.gotBtn.visible = !1, void (this.descLabel.visible = !0);
            this.descLabel.visible = !1;
        }, t.prototype.getReward = function (t) {
            if (!this.destroyed) {
                try {
                    var e = function (t) {
                        if (Pa.signDay !== Pa.signLoginDay) {
                            var e = Pa.signLoginDay <= 7 ? Pa.signLoginDay - 1 : (Pa.signLoginDay - 1) % 7 + 7, i = vt.getList()[e];
                            if (i) {
                                var n = new Jt();
                                if (1 == i.rewardType) {
                                    var r = i.rewardNum;
                                    t && (r *= 2),
                                        Laya.LocalStorage.setItem("goldgold", Number(Laya.LocalStorage.getItem("goldgold")) + r)
                                        ,

                                        n.addGold(r);
                                } else if (0 == i.rewardType) {
                                    var o = i.specialSkinId;
                                    Pa.completeSkin(o, n);
                                }
                                return Pa.signDay = Pa.signLoginDay, n;
                            }
                        }
                    }(t);
                    if (0 < e.gold) {
                        var i = k.findPanel(function (t) {

                            return "StartView" == t.name;
                        });
                        if (i) {
                            var n = i.propList.goldText.localToGlobal(new Laya.Point(0, 0));
                            n.x /= va, n.y /= va, Ri(e.gold, n.x, n.y);
                        } else Ri(e.gold, 50, 1e3);
                    } else xa(e);
                } catch (t) {
                    Sa("提示", t);
                }
                this.close();
            }
        }, t.prototype.show = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e = this;
                return Object(Q.e)(this, function (t) {
                    return i.prototype.show.call(this), this.box.centerY = 0, [2, new Promise(function (t) {
                        e.resolve = t;
                    })];
                });
            });
        }, t.prototype.close = function () {
            i.prototype.close.call(this), this.resolve && (this.resolve(), this.resolve = void 0);
        }, t.prototype.destroy = function (t) {
            i.prototype.destroy.call(this, t);
        }, t;
    }(Rt.SignViewUI);
    function Vi(t, e, i, n) {
        var r = t.numChildren;
        if (i < r) for (var o = r - 1; i <= o; --o) {
            (s = t.getChildAt(o)).destroy(!0);
        }
        for (o = 0; o < i; o++) {
            var s;
            (s = t.getChildAt(o)) || (s = t.addChild(new e())), n(s, o, t);
        }
    }
    function Ui() {
        for (var t = yt.getList(), e = 0; e < t.length; e++) {
            var i = t[e].skinId;
            if (!Pa.getSkin(i)) return t[e];
        }
    }
    var Gi = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.name = "LimitTimeSkinItem", t;
        }
        return Object(Q.d)(t, e), t.prototype.updateData = function (t) {
            this.image.skin = "icon/icon_skin_" + this.dataSource.skinId + ".png";
            var e = ft.getDefById(this.dataSource.skinId);
            this.nameLabel.text = e ? e.name : "";
        }, t.prototype.createChildren = function () {
            e.prototype.createChildren.call(this), this.loadUI("LimitTimeSkinItem");
        }, t;
    }(Nt), zi = Rt.LimitTimeSkinViewUI, Fi = function (r) {
        function t() {
            var t = r.call(this) || this;
            t.isMouseDown = !1, t._selectIndex = -1, t.name = "LimitTimeSkinView", t.canTapMaskClose = !0,
                t.panel.centerY = -20, t.closeBtn.on(Laya.Event.CLICK, t, t.close), t.btn.on(Laya.Event.CLICK, t, t.onShare),
                t.avatarContainer.mouseEnabled = !0, t.avatarContainer.on(Laya.Event.CLICK, t, t.onShare),
                t.getBtn.on(Laya.Event.CLICK, t, function () {
                    return Object(Q.b)(t, void 0, void 0, function () {
                        var e;
                        return Object(Q.e)(this, function (t) {
                            return Pa.groupUserList.length >= this.currentDef.needCount && (function (t) {
                                Object(l.sendAnalysis)("限时皮肤-" + t);
                            }("限时皮肤领取奖励"), (e = function (t) {
                                if (Pa.getSkin(t.skinId)) return Sa("你已经获得了该皮肤！");
                                var e = new Jt();
                                return Pa.groupUserList.length >= t.needCount && (Pa.completeSkin(t.skinId, e),
                                    Pa.groupUserList.length = 0), e;
                            }(this.currentDef)) && (xa(e), this.close())), [2];
                        });
                    });
                });
            var e = t.list;
            return e.itemRender = Gi, e.hScrollBarSkin = "", e.scrollBar.hide = !0, e.scrollBar.elasticBackTime = 200,
                e.scrollBar.elasticDistance = 200, e.elasticEnabled = !1, e.renderHandler = new Laya.Handler(t, t.updateItem),
                e.on(Laya.Event.MOUSE_DOWN, t, t.onListDown), e.on(Laya.Event.MOUSE_UP, t, t.onListUp),
                e.on(Laya.Event.MOUSE_OUT, t, t.onListUp), e.on(Laya.Event.MOUSE_MOVE, t, t.onListMove),
                t.defaultListX = e.x, t;
        }
        return Object(Q.d)(t, r), t.prototype.onListDown = function (t) {
            this.isMouseDown = !0, this.sx = t.stageX;
        }, t.prototype.onListUp = function (t) {
            var e = this;
            this.isMouseDown = !1;
            var i = this._selectIndex, n = 0;
            if (this.list.x > this.defaultListX) n = this.defaultListX, i = 0; else {
                var r = -(this.list.x - this.defaultListX);
                (i = Math.ceil((r - 129) / 308)) >= this.list.array.length && (i = this.list.array.length - 1),
                    n = this.defaultListX - 308 * i;
            }
            new TWEEN.Tween(this.list).to({
                x: n
            }, 200).easing(TWEEN.Easing.Linear.None).onComplete(function () {
                e.setSelectIndex(i);
            }).start();
        }, t.prototype.onListMove = function (t) {
            if (this.isMouseDown) {
                var e = t.stageX - this.sx;
                this.sx = t.stageX, this.list.x += e;
            }
        }, t.prototype.updateItem = function (t, e) {
            t.updateData(e);
        }, t.prototype.onShare = function () {
            se("限时皮肤"), gi(Kt.freeSkin).then(function (t) {
                1 === t && ae("限时皮肤");
            });
        }, t.prototype.show = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e, i, n = this;
                return Object(Q.e)(this, function (t) {
                    return r.prototype.show.call(this), oe("限时皮肤"), this.list.array = yt.getList(),
                        this.list.repeatX = this.list.array.length, this.currentDef = Ui(), e = yt.getList(),
                        i = e.indexOf(this.currentDef), this.setSelectIndex(i), [2, new Promise(function (t) {
                            n.resolve = t;
                        })];
                });
            });
        }, t.prototype.updateView = function (t) {
            var n = this;
            if (Pa.getSkin(t.skinId)) return this.descLabel.text = "已获得", void (this.avatarContainer.visible = !1);
            this.avatarContainer.visible = !0;
            var r = [], e = Ui();
            r = e && t === e ? Pa.groupUserList : [];
            var i = t.needCount, o = 4 < i ? 20 : 40;
            this.avatarContainer.removeChildren(), Vi(this.avatarContainer, Laya.Image, i, function (t, e, i) {
                n.destroyed || (e < r.length ? t.skin = r[e].image || g : t.skin = "ui/bg_add_friends.png",
                    t.width = 112, t.height = 112, t.x = (t.width + o) * e);
            });
        }, t.prototype.setSelectIndex = function (t) {
            this._selectIndex = t;
            var e = yt.getList(), i = e[t], n = i.needCount - Pa.groupUserList.length;
            this.getBtn.visible = n <= 0, this.btn.visible = !this.getBtn.visible, this.descLabel.text = n <= 0 ? "" : "还需邀请" + n + "名新玩家!",
                this.list.x = this.defaultListX - 308 * t;
            var r = t - 1;
            if (0 <= r) {
                var o = e[r];
                !!Pa.getSkin(o.skinId) || (this.descLabel.text = "需要先邀请获得前一个皮肤！", this.getBtn.visible = !1,
                    this.btn.visible = !0);
            }
            this.updateView(i);
        }, t.prototype.close = function () {
            r.prototype.close.call(this), this.resolve && (this.resolve(), this.resolve = void 0);
        }, t;
    }(zi), Hi = new (function () {
        function t() {
            this.currentPhase = 2;
        }
        return t.prototype.changePhase = function (t) {
            this.currentPhase = t;
        }, Object(Q.c)([m.g], t.prototype, "currentPhase", void 0), t;
    }())(), $i = function () {
        function t(t, e, i) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), this.x = t,
                this.y = e, this.z = i;
        }
        return t.prototype.fromColor = function (t) {
            this.x = (t >> 16 & 255) / 255, this.y = (t >> 8 & 255) / 255, this.z = (255 & t) / 255;
        }, t.prototype.scale = function (t) {
            this.x *= t, this.y *= t, this.z *= t;
        }, t.prototype.setLength = function (t) {
            this.normalize(), this.scale(t);
        }, t.prototype.negate = function () {
            this.x *= -1, this.y *= -1, this.z *= -1;
        }, t.prototype.setValue = function (t, e, i) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), this.x = t,
                this.y = e, this.z = i;
        }, t.prototype.copy = function (t) {
            this.x = t.x, this.y = t.y, this.z = t.z;
        }, t.prototype.clampMagnitude = function (t) {
            var e = this.x * this.x + this.y * this.y + this.z * this.z;
            if (t * t < e) {
                var i = t / Math.sqrt(e);
                this.x *= i, this.y *= i, this.z *= i;
            }
        }, t.prototype.distanceSquaredTo = function (t) {
            var e = this.x - t.x, i = this.y - t.y, n = this.z - t.z;
            return e * e + i * i + n * n;
        }, t.prototype.distanceTo = function (t) {
            var e = this.x - t.x, i = this.y - t.y, n = this.z - t.z;
            return Math.sqrt(e * e + i * i + n * n);
        }, t.prototype.dot = function (t) {
            return this.x * t.x + this.y * t.y + this.z * t.z;
        }, Object.defineProperty(t.prototype, "lengthSquare", {
            get: function () {
                return this.x * this.x + this.y * this.y + this.z * this.z;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "length", {
            get: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.normalize = function () {
            var t = this.x * this.x + this.y * this.y + this.z * this.z;
            if (0 != t) {
                var e = 1 / Math.sqrt(t);
                this.x *= e, this.y *= e, this.z *= e;
            }
        }, t.prototype.clone = function () {
            return new t(this.x, this.y, this.z);
        }, t;
    }(), Ki = 0, Wi = function () {
        function t() {
            this.x = 0, this.y = 0, this.z = 0, this.rotation = new $i(0, 0, 0), this._isDisposed = !1,
                this._scripts = [], this._enable = !0, this.scale = 1, this._destroyList = [], this.id = ++Ki,
                this.eventDispatch = new Laya.EventDispatcher();
        }
        return Object.defineProperty(t.prototype, "addToDestroy", {
            set: function (t) {
                this._destroyList.push(t);
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.on = function (t, e, i, n) {
            this.eventDispatch.on(t, e, i, n);
        }, t.prototype.once = function (t, e, i, n) {
            this.eventDispatch.once(t, e, i, n);
        }, t.prototype.off = function (t, e, i, n) {
            this.eventDispatch.off(t, e, i, n);
        }, t.prototype.event = function (t, e) {
            this.eventDispatch.event(t, e);
        }, Object.defineProperty(t.prototype, "enable", {
            get: function () {
                return this._enable;
            },
            set: function (t) {
                this._enable !== t && (this._enable = t, this.sprite3D && (this.sprite3D.active = t));
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.removeAllScripts = function () {
            for (var t = 0, e = this._scripts.length; t < e; t++) {
                var i = this._scripts[t];
                i && i.onDestroy();
            }
            this._scripts.length = 0;
        }, t.prototype.addScript = function (t) {
            return this._scripts.indexOf(t) < 0 && (t.owner = this, t.onAwake(), this._scripts.push(t)),
                t;
        }, t.prototype.getScript = function (t) {
            for (var e = 0, i = this._scripts.length; e < i; e++) {
                var n = this._scripts[e];
                if (n instanceof t) return n;
            }
        }, t.prototype.removeScript = function (t) {
            var e = this._scripts.indexOf(t);
            0 <= e && (t._destroy(), this._scripts.splice(e, 1));
        }, t.prototype.update = function (t) {
            if (!this._isDisposed && this._enable) {
                for (var e = 0, i = this._scripts.length; e < i; e++) this._scripts[e]._update(t);
                this.onUpdate(t);
            }
        }, t.prototype.onUpdate = function (t) { }, t.prototype.setPosition = function (t, e, i) {
            this.x === t && this.y === e && this.z === i || (this.x = t, this.y = e, this.z = i);
        }, t.prototype.setRotation = function (t, e, i) {
            this.rotation.x === t && this.rotation.y === e && this.rotation.z === i || this.rotation.setValue(t, e, i);
        }, t.prototype.dispose = function () {
            this._isDisposed || (this._isDisposed = !0, this._destroyList.splice(0).forEach(function (t) {
                return t();
            }), this.eventDispatch.offAll(), this.eventDispatch = null, this.removeAllScripts(),
                this.scene.removeEntity(this), this.onDispose(), this.sprite3D && this.sprite3D.destroy(!0));
        }, t.prototype.onDispose = function () { }, Object.defineProperty(t.prototype, "sprite3D", {
            get: function () {
                return null;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.refreshScale = function () {
            this.sprite3D && (this._layaScale || (this._layaScale = new Laya.Vector3(1, 1, 1)),
                this._layaScale.setValue(this.scale, this.scale, this.scale), this.sprite3D.transform.localScale = this._layaScale);
        }, t.prototype.refreshPosition = function () {
            this.sprite3D && (this._layaPos || (this._layaPos = new Laya.Vector3()), this._layaPos.setValue(this.x, this.y, this.z),
                this.sprite3D.transform.localPosition = this._layaPos);
        }, t.prototype.refreshRotation = function () {
            this.sprite3D && (this._layaRotation || (this._layaRotation = new Laya.Vector3()),
                this._layaRotation.setValue(this.rotation.x * y, this.rotation.y * y, this.rotation.z * y),
                this.sprite3D.transform.localRotationEuler = this._layaRotation);
        }, t.prototype.removeSelf = function () {
            this.sprite3D && this.sprite3D.removeSelf();
        }, t;
    }();
    function Xi(e) {
        return Object(Q.b)(this, void 0, void 0, function () {
            var n;
            return Object(Q.e)(this, function (t) {
                return n = "dlc/particle/" + e + "/" + e + ".lh", [2, new Promise(function (e, i) {
                    Laya.loader.load(n, new Laya.Handler(null, function (t) {
                        return t ? e(t.clone()) : i("load fail:" + n);
                    }, null, !0), null, Laya.Loader.HIERARCHY, 0);
                })];
            });
        });
    }
    function qi(n) {
        return Object(Q.b)(this, void 0, void 0, function () {
            return Object(Q.e)(this, function (t) {
                return [2, new Promise(function (e, i) {
                    Laya.Texture2D.load(n, Laya.Handler.create(null, function (t) {
                        t ? e(t) : i("load " + n + " error");
                    }, null, !0));
                })];
            });
        });
    }
    var Yi = {};
    function Qi(n) {
        return Object(Q.b)(this, void 0, void 0, function () {
            return Object(Q.e)(this, function (t) {
                return [2, new Promise(function (e, i) {
                    if (Yi[n]) return e();
                    Laya.loader.load("ui/" + n + ".atlas", Laya.Handler.create(null, function (t) {
                        t ? (Yi[n] = !0, e()) : i("load " + n + ".atlas fail");
                    }, null, !0), null, Laya.Loader.ATLAS, 0, !1, "atlas");
                })];
            });
        });
    }
    function Ji(t) {
        return "icon/skin/icon_skin_" + t + ".png";
    }
    var Zi = 313, tn = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t._stateMap = {}, t._curSkin = 0, t._material = new Laya.BlinnPhongMaterial(),
                t._material.specularColor = new Laya.Vector4(0, 0, 0, 1), t._material.shininess = 1,
                t;
        }
        return Object(Q.d)(t, e), Object.defineProperty(t.prototype, "curAction", {
            get: function () {
                return this._curAction;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.addState = function (t) {
            this._stateMap[t.name] = t, this._animator.addState(t);
        }, t.prototype.createState = function (t, e, i, n, r) {
            var o = new Laya.AnimatorState();
            o.name = t, o.clipStart = e / n, o.clipEnd = i / n, o.clip = r, this.addState(o);
        }, t.prototype.getState = function (t) {
            return this._stateMap[t];
        }, t.prototype.setSkin = function (t) {
            var e = this;
            this._curSkin !== t && (this._curSkin = t, this.skinDef = ft.getDefById(this._curSkin),
                this.skinDef || (this._curSkin = 1, this.skinDef = ft.getDefById(this._curSkin)),
                this.name = this.skinDef.model, this.loadTexture(), function (e) {
                    return Object(Q.b)(this, void 0, void 0, function () {
                        var n, r = this;
                        return Object(Q.e)(this, function (t) {
                            return n = "player/model/" + e + ".lh", [2, new Promise(function (e, i) {
                                Laya.loader.load(n, new Laya.Handler(r, function (t) {
                                    return t ? e(t.clone()) : i("load fail:" + n);
                                }), null, Laya.Loader.HIERARCHY, 0, !1);
                            })];
                        });
                    });
                }(this.skinDef.model).then(function (t) {
                    e._skinSprite && (e._skinSprite.removeSelf(), e._skinSprite.destroy(!0)), e._skinSprite = t,
                        e._skinSprite.name = e.skinDef.model + "_skin", e._skinSprite.transform.localRotationEuler = new Laya.Vector3(0, -90, 0),
                        e._skinSprite.transform.localScale = new Laya.Vector3(5, 5, 5), e.addChild(e._skinSprite),
                        e.ballPosition = e._skinSprite.getChildByName("ballPosition"), e.ballPosition.active = !1,
                        e.ballPosition.transform.localPositionX *= 1.2, e.ballPosition.transform.localPositionY *= 1.2,
                        e.ballPosition.transform.localPositionZ *= 1.2, e.initModel();
                }).catch(function (t) {
                    console.log("load Actor fail", t);
                }));
        }, t.prototype.loadTexture = function () {
            var e = this;
            qi("player/texture/" + this.skinDef.tex).then(function (t) {
                e._material && (e._material.albedoTexture = t);
            });
        }, t.prototype.initModel = function () {
            var t = this._skinSprite.getChildByName("model");
            if (t) {
                var e = t.getChildAt(0);
                if (e.skinnedMeshRenderer.castShadow = !0, e.skinnedMeshRenderer.material = this._material,
                    this._animator = t.getComponent(Laya.Animator), this._animator) {
                    var i = this._animator.getDefaultState().clip;
                    i.islooping = !0, this._stateMap = {}, this.createState("idle", 0, 30, Zi, i), this.createState("run", 40, 64, Zi, i),
                        this.createState("spring", 70, 89, Zi, i), this.createState("holder", 100, 124, Zi, i),
                        this.createState("hit", 130, 140, Zi, i), this.createState("shoot", 162, 175, Zi, i),
                        this.createState("dead", 176, 201, Zi, i), this.createState("ragdoll", 206, 220, Zi, i),
                        this.createState("backflip", 223, 285, Zi, i), this.createState("dance", 286, 313, Zi, i),
                        this._curAction ? this._animator && this._animator.play(this._curAction) : this.playAction("idle", !0);
                }
            }
        }, t.prototype.playAction = function (t, e, i) {
            if (void 0 === e && (e = !0), void 0 === i && (i = 1), this._curAction !== t) {
                var n = this.getState(t);
                n && (this._curAction = t, this._curState = n, this._curState.loop = e, this._curState.speed = i,
                    this._animator && this._animator.play(this._curAction));
            }
        }, t;
    }(Laya.Sprite3D);
    function en(e) {
        return new Promise(function (t) {
            return setTimeout(t, e);
        });
    }
    var nn = function () {
        function t() {
            this.configed = !1, this.width = 0, this.height = 0, this.halfWidth = 0, this.halfHeight = 0,
                this.minX = 0, this.minZ = 0, this.maxX = 0, this.maxZ = 0,
                this.innerHalfWidth = 0, this.innerHalfHeight = 0, this.innerMinX = 0,
                this.innerMinZ = 0, this.innerMaxX = 0, this.innerMaxZ = 0, this.spawns = [], this.goals = [],
                this.circleAreas = [], this.restrictedAreas = [];
        }
        return t.prototype.dispose = function () {
            this.scene && (this.scene.destroy(!0), this.scene = null);
        }, t.prototype.getRandomSpawn = function (t) {
            return E(this.spawns[t]);
        }, t.prototype.loadMapConfig = function (s) {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e, i, n, r, o;
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.configed ? [2] : [4, function (r, e) {
                                return Object(Q.b)(this, void 0, void 0, function () {
                                    var n;
                                    return Object(Q.e)(this, function (t) {
                                        return n = "dlc/scene/" + r + "/" + e + ".json", [2, new Promise(function (e, i) {
                                            Laya.loader.load(n, new Laya.Handler(null, function (t) {
                                                t ? e(t) : i("load fail" + n);
                                            }, null, !0), null, Laya.Loader.JSON, 0, !1, r);
                                        })];
                                    });
                                });
                            }(s, s)];

                        case 1:
                            if (e = t.sent()) {
                                for (this.configed = !0, this.width = e.width, this.height = e.height, this.halfWidth = this.width / 2,
                                    this.halfHeight = this.height / 2, this.minX = -this.halfWidth, this.maxX = this.halfWidth,
                                    this.minZ = -this.halfHeight, this.maxZ = this.halfHeight,
                                    this.innerWidth = window.innerWidth,
                                    this.innerHeight = window.innerHeight, this.innerHalfWidth = this.innerWidth / 2, this.innerHalfHeight = this.innerHeight / 2,
                                    this.innerMinX = -this.innerHalfWidth, this.innerMaxX = this.innerHalfWidth, this.innerMinZ = -this.innerHalfHeight,
                                    this.innerMaxZ = this.innerHalfHeight, this.spawns = [], this.spawns[1] = e.spawnsA,
                                    this.spawns[2] = e.spawnsB, i = e.areaInfos, n = {}, o = 0; o < i.length; o++) n[i[o].name] = i[o];
                                for (this.goals = [], this.goals[1] = n.goalA, this.goals[2] = n.goalB, this.restrictedAreas = [],
                                    this.restrictedAreas[1] = n.areaA, this.restrictedAreas[2] = n.areaB, r = {}, o = 0; o < e.circleInfos.length; o++) r[e.circleInfos[o].name] = e.circleInfos[o];
                                this.circleAreas = [], this.circleAreas[1] = r.circleA, this.circleAreas[2] = r.circleB;
                            }
                            return [2];
                    }
                });
            });
        }, t.prototype.loadMap = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e, i, n;
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return e = "scene2", [4, this.loadMapConfig(e)];

                        case 1:
                            return t.sent(), this.scene ? [3, 3] : [4, function (r) {
                                return Object(Q.b)(this, void 0, void 0, function () {
                                    var n;
                                    return Object(Q.e)(this, function (t) {
                                        return n = "dlc/scene/" + r + "/" + r + ".lh", [2, new Promise(function (e, i) {
                                            Laya.loader.load(n, new Laya.Handler(null, function (t) {
                                                return t ? e(t.clone()) : i("load fail:" + n);
                                            }, null, !0), null, Laya.Loader.HIERARCHY, 0, !1, r);
                                        })];
                                    });
                                });
                            }(e)];

                        case 2:
                            (i = t.sent()) && (this.scene = i.getChildByName(e), $n.scene.addChild(this.scene),
                                (n = this.scene.getChildByName("ground")) && (n.meshRenderer.receiveShadow = !0)),
                                t.label = 3;

                        case 3:
                            return [2];
                    }
                });
            });
        }, t.prototype.isCloseToRestrictedArea = function (t, e, i, n) {
            var r = this.restrictedAreas[t];
            return !!r && (1 === t ? r.z - r.halfHeight < i + n : r.z + r.halfHeight > i - n);
        }, t.prototype.getRestrictedArea = function (t) {
            return this.restrictedAreas[t];
        }, t.prototype.getGoalArea = function (t) {
            return this.goals[t];
        }, t.prototype.collisionRestrictedArea = function (t, e, i) {
            var n = this.circleAreas[i], r = n.x - t, o = n.z - e;
            if (r * r + o * o <= n.radius * n.radius) return !0;
            var s = this.restrictedAreas[i];
            return !!s && (!(t < s.x - s.halfWidth) && (!(s.x + s.halfWidth < t) && (!(e < s.z - s.halfHeight) && !(s.z + s.halfHeight < e))));
        }, t;
    }(), rn = function () {
        this.x = 0, this.y = 6, this.z = 6, this.offsetZ = .5;
    }, on = Laya.TrailFilter, sn = function (t) {
        function e() {
            return t.call(this) || this;
        }
        return Object(Q.d)(e, t), e.prototype.setSkin = function (t) {
            var e = this;
            this.name = "football" + t, function (e) {
                return Object(Q.b)(this, void 0, void 0, function () {
                    var n, r = this;
                    return Object(Q.e)(this, function (t) {
                        return n = "dlc/football/" + e + ".lh", [2, new Promise(function (e, i) {
                            Laya.loader.load(n, new Laya.Handler(r, function (t) {
                                return t ? e(t.clone()) : i("load fail:" + n);
                            }), null, Laya.Loader.HIERARCHY, 0, !1);
                        })];
                    });
                });
            }("football1").then(function (t) {
                e._skinSprite && (e._skinSprite.removeSelf(), e._skinSprite.destroy(!0)), e._skinSprite = t,
                    e._skinSprite.name = e.name + "_skin", e._skinSprite.transform.localScale = new Laya.Vector3(6, 6, 6),
                    e.addChild(e._skinSprite), e.initModel();
            }).catch(function (t) {
                console.log("loadFootBall fail", t);
            });
        }, e.prototype.initModel = function () {
            var t = this._skinSprite.getChildByName("model");
            t && (t.meshRenderer.castShadow = !0, t.meshRenderer.receiveShadow = !1, this.ball = t,
                this.trail = this._skinSprite.getChildByName("trail"), this.trail && (this.trail.trailFilter.alignment = on.ALIGNMENT_VIEW));
        }, e.prototype.hideTrail = function () {
            this.trail && (this.trail.active = !1);
        }, e.prototype.reset = function () {
            var t = this;
            this.trail && (this.trail.active = !1, setTimeout(function () {
                t.trail.active = !0;
            }, 50));
        }, e;
    }(Laya.Sprite3D);
    function an(t, e, i) {
        return t < e ? e : i < t ? i : t;
    }
    function cn(t, e, i) {
        return t + (e - t) * function (t) {
            return t < 0 ? 0 : 1 < t ? 1 : t;
        }(i);
    }
    function un(t) {
        return t[0] + (t[1] - t[0]) * Math.random();
    }
    var hn = function () {
        function i(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e;
        }
        return i.prototype.setValue = function (t, e) {
            this.x = t, this.y = e;
        }, i.prototype.copy = function (t) {
            this.x = t.x, this.y = t.y;
        }, i.prototype.normalize = function () {
            var t = this.x * this.x + this.y * this.y;
            return 0 !== t && (t = 1 / Math.sqrt(t), this.x *= t, this.y *= t), this;
        }, i.prototype.normalized = function () {
            var t = new i(this.x, this.y), e = t.x * t.x + t.y * t.y;
            return 0 !== e && (e = 1 / Math.sqrt(e), t.x *= e, t.y *= e), t;
        }, Object.defineProperty(i.prototype, "length", {
            get: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "lengthSquare", {
            get: function () {
                return this.x * this.x + this.y * this.y;
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.distanceTo = function (t) {
            var e = this.x - t.x, i = this.y - t.y;
            return Math.sqrt(e * e + i * i);
        }, i.prototype.scaleBy = function (t) {
            return this.x *= t, this.y *= t, this;
        }, i.prototype.plus = function (t) {
            return new i(this.x + t.x, this.y + t.y);
        }, i.prototype.subtract = function (t) {
            return new i(this.x - t.x, this.y - t.y);
        }, i.prototype.dot = function (t) {
            return this.x * t.x + this.y * t.y;
        }, i.prototype.scale = function (t) {
            return new i(this.x * t, this.y * t);
        }, i.prototype.angle = function (t) {
            var e = Math.sqrt(t.lengthSquare * this.lengthSquare);
            if (e < 1e-15) return 0;
            var i = an(this.dot(t) / e, -1, 1);
            return Math.acos(i) * y;
        }, i.prototype.clone = function () {
            return new i(this.x, this.y);
        }, i;
    }(), ln = new (function () {
        function t() {
            this.curTime = 0, this.delta = 0, this.unscaledDelta = 0, this._timeScale = 1;
        }
        return t.prototype.setCurTime = function (t) {
            this.curTime = t;
        }, Object.defineProperty(t.prototype, "timeScale", {
            get: function () {
                return this._timeScale;
            },
            set: function (t) {
                this._timeScale = t, Laya.timer.scale = t;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.update = function (t) {
            this.curTime += t, this.unscaledDelta = .001 * t, this.delta = this.unscaledDelta * this._timeScale;
        }, t;
    }())(), pn = wx.vibrateShort, dn = .15, fn = new hn(), yn = new Laya.Vector3(-.0192, 0, .0527), vn = new (function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.team = 0, t.direction = new hn(), t.desiredDirection = new hn(), t.speed = 1,
                t.desiredSpeed = 1, t.angularSpeed = 5, t.desiredAngularSpeed = 0, t.radius = .1,
                t.shootPos = new $i(), t.shootDir = new $i(), t.isInitialized = !1, t._isInRestrictedArea = !1,
                t._isShooting = !1, t._isInGoalArea = !1, t.yDelta = 0, t.ySpeed = 0, t.yAcceleration = 0,
                t.type = 2, t;
        }
        return Object(Q.d)(t, e), t.prototype.initialize = function () {
            var t = this;
            this.isInitialized || (this.isInitialized = !0, this.skin = new sn(), this.skin.setSkin(1),
                this.setPosition(0, dn, 0), this.refreshPosition(), Object(m.a)(function () {
                    t.onGamePhaseChanged(Hi.currentPhase);
                }));
        }, t.prototype.onGamePhaseChanged = function (t) {
            switch (this.enable = 1 <= t, t) {
                case 0:
                case 2:
                    this.reset();
            }
        }, t.prototype.shoot = function () {
            this._isShooting || (this._isShooting = !0, this.speed = 10, this.desiredSpeed = 100,
                this.angularSpeed = 15, Laya.Tween.to(ln, {
                    timeScale: .8
                }, 1500));
        }, Object.defineProperty(t.prototype, "sprite3D", {
            get: function () {
                return this.skin;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.isBallHolder = function (t) {
            return this.holder === t;
        }, Object.defineProperty(t.prototype, "holder", {
            get: function () {
                return this._holder;
            },
            set: function (t) {
                if (this._holder !== t) {
                    var e = this._holder;
                    if (this._holder = t, this.event("holderChange"), this._holder) this._holder.moveSystem.bumpBooster.reset(),
                        this.team = this._holder.team, this.yDelta = 0, this.ySpeed = 0, this.yAcceleration = 0,
                        this.y = dn, this.refreshPosition(), 1 === this._holder.playerType; else if (this.team = 0,
                            this.desiredSpeed = 0, e) {
                        var i = e.moveSystem.physicBody, n = Math.random() * Math.PI * 2;
                        this.direction.x = Math.sin(n), this.direction.y = Math.cos(n), this.direction.normalize(),
                            this.desiredDirection.copy(this.direction), this.speed = 1.5 * i.speed, this.angularSpeed = i.angularSpeed,
                            this.desiredAngularSpeed = 0, this.yDelta = 0, this.ySpeed = T.movement.ballSpeed * Math.max(.5, i.speed / i.maxSpeed),
                            this.yAcceleration = T.movement.ballAcceleration;
                    }
                }
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.resetSpeed = function () {
            this.angularSpeed = 0, this.desiredAngularSpeed = 0, this.speed = 0, this.desiredSpeed = 0;
        }, t.prototype.onUpdate = function (t) {
            if (6 !== Hi.currentPhase) if (this.checkLimit(), this.checkRestrictedArea(), this.checkGoalArea(),
                this.checkCollision(), this._holder) if (this._isShooting) {
                    var e = t * this.angularSpeed;
                    this.rotation.z += this.shootDir.x * e, this.rotation.x += this.shootDir.y * e,
                        this.rotation.y += this.shootDir.z * e, this.refreshRotation(), this.speed = cn(this.speed, this.desiredSpeed, t),
                        this.x += this.shootDir.x * this.speed * t, this.y += this.shootDir.y * this.speed * t,
                        this.z += this.shootDir.z * this.speed * t, this.y < dn && (this.y = dn), this.refreshPosition();
                } else {
                    var i = void 0;
                    i = this._holder.skin.ballPosition ? this._holder.skin.ballPosition.transform.position : yn,
                        this.x = i.x, this.z = i.z, this.refreshPosition();
                    var n = this._holder.moveSystem.physicBody, r = n.speed / n.maxSpeed * t * n.angularSpeed * .5;
                    this.rotation.z += n.direction.x * r, this.rotation.x += n.direction.y * r, this.refreshRotation();
                } else {
                this.angularSpeed = cn(this.angularSpeed, this.desiredAngularSpeed, t);
                var o = t * this.angularSpeed;
                this.rotation.z += this.direction.x * o, this.rotation.x += this.direction.y * o,
                    this.refreshRotation(), this.speed = cn(this.speed, this.desiredSpeed, t), this.x += this.direction.x * this.speed * t,
                    this.z += this.direction.y * this.speed * t, 0 < this.ySpeed && (this.yDelta += t,
                        this.y = dn + this.yDelta * (this.ySpeed - this.yAcceleration * this.yDelta * .5),
                        this.y < dn && (this.y = dn, this.yDelta = 0, this.ySpeed *= .5)), this.refreshPosition();
            }
        }, t.prototype.checkRestrictedArea = function () {
            if (2 === Hi.currentPhase && this._holder && !this._isInRestrictedArea) {
                var t = this._holder.team, e = 1 === t ? 2 : 1;
                if (1 === t || 2 === t) if ($n.gameMap.collisionRestrictedArea(this.x, this.z, e)) {
                    this._isInRestrictedArea = !0;
                    var i = 1 === t ? 2 : 1, n = $n.gameMap.getGoalArea(i);
                    this.shootPos.x = n.x + (Math.random() - .5) * n.halfWidth * .8, this.shootPos.z = n.z,
                        this.shootPos.y = dn + .6 * Math.random(), this.shootDir.x = this.shootPos.x - this.x,
                        this.shootDir.y = this.shootPos.y - this.y, this.shootDir.z = this.shootPos.z - this.z,
                        this.shootDir.normalize(), this.event("onTouchRestrictedArea", {
                            team: t,
                            holder: this._holder
                        });
                }
            }
        }, t.prototype.checkGoalArea = function () {
            if (4 == Hi.currentPhase && this._holder && this._isShooting && !this._isInGoalArea) {
                var t = this._holder.team, e = $n.gameMap.getGoalArea(1 === t ? 2 : 1);
                if (1 === t) {
                    if (this.z > e.z + e.halfHeight) return;
                } else if (this.z < e.z - e.halfHeight) return;
                this._isInGoalArea || (this._isInGoalArea = !0, this.event("onShootInGoalArea", {
                    team: t,
                    holder: this._holder
                }));
            }
        }, t.prototype.checkLimit = function () {
            if (this._isShooting && this._holder) {
                var t = this._holder.team, e = $n.gameMap.getGoalArea(1 === t ? 2 : 1), i = e.x - e.halfWidth, n = e.x + e.halfWidth;
                if (1 === t) {
                    if (this.x >= i && this.x < n && this.y >= dn && this.z >= e.z - e.halfHeight) return;
                } else if (this.x >= i && this.x < n && this.y >= dn && this.z <= e.z + e.halfHeight) return;
            } else if (!this._isInGoalArea) {
                var r = $n.gameMap;
                if (!(this.x >= r.innerMinX && this.x <= r.innerMaxX && this.z >= r.innerMinZ && this.z <= r.innerMaxZ)) {
                    if (this._holder) {
                        var o = this._holder;
                        this.holder = null, this.checkDropBall(o), o.moveState = 0;
                    }
                    fn.x = -this.x, fn.y = -this.z, fn.normalize(), this.y = .4, this.x += 2 * fn.x,
                        this.x < r.innerMinX && (this.x = r.innerMinX + 1), this.x > r.innerMaxX && (this.x = r.innerMaxX - 1),
                        this.z += 2 * fn.y, this.z < r.innerMinZ && (this.z = r.innerMinZ + 1), this.z > r.innerMaxZ && (this.z = r.innerMaxZ - 1),
                        this.refreshPosition(), this.speed = 5, this.desiredSpeed = 0, this.direction.copy(fn),
                        this.desiredDirection.copy(fn);
                }
            }
        }, t.prototype.checkDropBall = function (t) {
            3 <= Hi.currentPhase || this.holder === t && (this.holder = null);
        }, t.prototype.checkCollision = function () {
            if (!(this._holder || .3 < this.y)) for (var t = Ur.getPlayers(), e = 0, i = t.length; e < i; e++) {
                var n = t[e];
                if (3 !== n.moveState && 1 !== n.moveState && 2 !== n.moveState) {
                    var r = n.x - this.x, o = n.z - this.z, s = 1 === n.playerType ? .7 : n.moveSystem.physicBody.radius, a = this.radius + s;
                    if (r * r + o * o < a * a) {
                        (this.holder = n).moveState = 4;
                        break;
                    }
                }
            }
        }, t.prototype.reset = function () {
            this._isShooting = !1, this._isInRestrictedArea = !1, this._isInGoalArea = !1, this.x = this.z = 0,
                this.y = dn, this.refreshPosition(), this.yDelta = 0, this.ySpeed = 0, this.yAcceleration = 0,
                this.rotation.setValue(0, 0, 0), this.refreshRotation(), this.speed = 0, this.desiredSpeed = 0,
                this.angularSpeed = 0, this.desiredAngularSpeed = 0, this.holder = null, this.skin.reset();
        }, t.prototype.onDispose = function () { }, t;
    }(Wi))(), gn = 0;
    function mn() {
        ki.vibrate && (0 < ln.curTime && ln.curTime - gn < 100 || (gn = ln.curTime, wx.vibrateShort()));
    }
    var bn = new (function () {
        function t() {
            this.position = new $i();
        }
        return t.prototype.stopShake = function () {
            TWEEN.killTweensOf(this.position), this.position.setValue(0, 0, 0);
        }, t.prototype.shake = function () {
            var t = this;
            if (TWEEN.killTweensOf(this.position), !(3 <= Hi.currentPhase)) {
                mn();
                var e = new TWEEN.Tween(this.position).to({
                    x: .1,
                    y: 0,
                    z: 0
                }, 50).onUpdate(function () {
                    t.onUpdate();
                }), i = new TWEEN.Tween(this.position).to({
                    x: .1,
                    y: 0,
                    z: .1
                }, 50).onUpdate(function () {
                    t.onUpdate();
                }), n = new TWEEN.Tween(this.position).to({
                    x: 0,
                    y: 0,
                    z: .1
                }, 50).onUpdate(function () {
                    t.onUpdate();
                }), r = new TWEEN.Tween(this.position).to({
                    x: 0,
                    y: 0,
                    z: 0
                }, 50).onUpdate(function () {
                    t.onUpdate();
                });
                e.chain(i, n, r), e.start();
            }
        }, t.prototype.onUpdate = function () {
            $n.mainCamera.shakeVec3.copy(this.position);
        }, t;
    }())(), wn = Laya.Vector3, _n = function () {
        function t() {
            this._cameraPosition = new Laya.Vector3(), this._lookTarget = new wn(0, 0, 0), this._cameraSettings = [],
                this._cameraIndex = 0, this.shakeVec3 = new $i(0, 0, 0), this.shootVec3 = new $i(),
                this.camera = new Laya.Camera(n, .1, 1e3), this.camera.clearColor = new Laya.Vector4(0, 0, .8, 1),
                this.camera.useOcclusionCulling = !0, this.camera.clearFlag = Laya.BaseCamera.CLEARFLAG_SKY;
        }
        return t.prototype.initialize = function () {
            var t = this;
            this._cameraSettings = [], this._cameraSettings[0] = new rn(), this._cameraSettings[0].x = T.camera.default.x,
                this._cameraSettings[0].y = T.camera.default.y, this._cameraSettings[0].z = T.camera.default.z,
                this._cameraSettings[0].offsetZ = T.camera.default.offsetZ, this._cameraSettings[1] = new rn(),
                this._cameraSettings[1].x = T.camera.celebration.x, this._cameraSettings[1].y = T.camera.celebration.y,
                this._cameraSettings[1].z = T.camera.celebration.z, this._cameraSettings[1].offsetZ = T.camera.celebration.offsetZ,
                this._cameraSettings[2] = new rn(), this._cameraSettings[2].y = 1, this._cameraSettings[2].z = 0,
                this._cameraSettings[2].offsetZ = 0, this.setCameraIndex(0), this.lookAt(0, 0),
                this.refreshCameraPos(), Object(m.a)(function () {
                    t.onGamePhaseChanged(Hi.currentPhase);
                });
        }, t.prototype.lookAt = function (t, e) {
            this._lookTarget.x = t, this._lookTarget.z = e;
        }, t.prototype.refreshCameraPos = function () {
            this._cameraPosition.x = this._lookTarget.x + this._cameraData.x + this.shakeVec3.x,
                this._cameraPosition.y = this._cameraData.y + this.shakeVec3.y, this._cameraPosition.z = this._cameraData.z + this._lookTarget.z - this._cameraData.offsetZ + this.shakeVec3.z,
                this.camera.transform.localPosition = this._cameraPosition, this.camera.transform.lookAt(this._lookTarget, wn._UnitY);
        }, t.prototype.getCameraData = function (t) {
            return this._cameraSettings[t];
        }, t.prototype.setCameraIndex = function (t) {
            this._cameraIndex = t, this._cameraData = this._cameraSettings[t], this.refreshCameraPos();
        }, t.prototype.onGamePhaseChanged = function (t) {
            switch (t) {
                case 1:
                    this._lookTarget.y = 0, this.lookAt(0, 0), this.setCameraIndex(0);
                    break;

                case 2:
                    this.setCameraIndex(0);
                    break;

                case 3:
                    bn.stopShake();
                    break;

                case 4:
                    this.shootVec3.x = vn.x - vn.shootPos.x, this.shootVec3.y = vn.y - vn.shootPos.y,
                        this.shootVec3.z = vn.z - vn.shootPos.z, this.shootVec3.normalize();
                    var e = 1 === vn.holder.team ? T.camera.shootA : T.camera.shootB, i = this._cameraSettings[2];
                    i.x = this.shootVec3.x + e.x, i.y = this.shootVec3.y + e.y, i.z = this.shootVec3.z + e.z,
                        i.offsetZ = e.offsetZ, this.setCameraIndex(2);
                    break;

                case 6:
                    this.setCameraIndex(1);
            }
        }, t.prototype.refreshCamera = function () {
            if (2 === this._cameraIndex) {
                this.shootVec3.x = vn.x - vn.shootPos.x, this.shootVec3.y = vn.y - vn.shootPos.y,
                    this.shootVec3.z = vn.z - vn.shootPos.z, this.shootVec3.normalize();
                var t = 1 === vn.holder.team ? T.camera.shootA : T.camera.shootB, e = this._cameraSettings[this._cameraIndex];
                e.x = this.shootVec3.x + t.x, e.y = this.shootVec3.y + t.y, e.z = this.shootVec3.z + t.z,
                    e.offsetZ = t.offsetZ;
            }
            this.setCameraIndex(this._cameraIndex);
        }, t.prototype.update = function (t) {
            4 === Hi.currentPhase || 5 === Hi.currentPhase ? (this.shakeVec3.y = vn.y, this._lookTarget.y = vn.y,
                this.lookAt(vn.x, vn.z)) : 6 === Hi.currentPhase ? Ur.shootPlayer && this.lookAt(Ur.shootPlayer.x, Ur.shootPlayer.z) : Ur.hero && this.lookAt(Ur.hero.x, Ur.hero.z),
                this.refreshCameraPos();
        }, t;
    }(), Sn = laya.d3.shader.ShaderDefines, Tn = Laya.BaseMaterial, xn = function (r) {
        function e(t) {
            var e = r.call(this) || this;
            e.maxCount = t, e.setShaderName("ColorAtlasSpriteGroupShader");
            for (var i = [], n = e.renderMode = 0; n < e.maxCount; n++) i.push(0, 0, 0);
            e._offsets = new Float32Array(i), i = [];
            for (n = 0; n < e.maxCount; n++) i.push(1, 1);
            e._scales = new Float32Array(i), i = [];
            for (n = 0; n < e.maxCount; n++) i.push(0, 0, 0, 0);
            e._tilingOffsets = new Float32Array(i), i = [];
            for (n = 0; n < e.maxCount; n++) i.push(1, 1, 1);
            return e._colors = new Float32Array(i), e;
        }
        return Object(Q.d)(e, r), Object.defineProperty(e, "CULL", {
            get: function () {
                return Laya.Shader3D.propertyNameToID("s_Cull");
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "BLEND", {
            get: function () {
                return Laya.Shader3D.propertyNameToID("s_Blend");
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "BLEND_SRC", {
            get: function () {
                return Laya.Shader3D.propertyNameToID("s_BlendSrc");
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "BLEND_DST", {
            get: function () {
                return Laya.Shader3D.propertyNameToID("s_BlendDst");
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "DEPTH_TEST", {
            get: function () {
                return Laya.Shader3D.propertyNameToID("s_DepthTest");
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "DEPTH_WRITE", {
            get: function () {
                return Laya.Shader3D.propertyNameToID("s_DepthWrite");
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "depthWrite", {
            get: function () {
                return this._shaderValues.getBool(e.DEPTH_WRITE);
            },
            set: function (t) {
                this._shaderValues.setBool(e.DEPTH_WRITE, t);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "depthTest", {
            get: function () {
                return this._shaderValues.getInt(e.DEPTH_TEST);
            },
            set: function (t) {
                this._shaderValues.setInt(e.DEPTH_TEST, t);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "cull", {
            get: function () {
                return this._shaderValues.getInt(e.CULL);
            },
            set: function (t) {
                this._shaderValues.setInt(e.CULL, t);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "blend", {
            get: function () {
                return this._shaderValues.getInt(e.BLEND);
            },
            set: function (t) {
                this._shaderValues.setInt(e.BLEND, t);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "srcBlend", {
            get: function () {
                return this._shaderValues.getInt(e.BLEND_SRC);
            },
            set: function (t) {
                this._shaderValues.setInt(e.BLEND_SRC, t);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "dstBlend", {
            get: function () {
                return this._shaderValues.getInt(e.BLEND_DST);
            },
            set: function (t) {
                this._shaderValues.setInt(e.BLEND_DST, t);
            },
            enumerable: !0,
            configurable: !0
        }), e.__init__ = function () {
            this.shaderDefines = new Sn(Tn.shaderDefines);
        }, Object.defineProperty(e.prototype, "renderMode", {
            set: function (t) {
                switch (t) {
                    case 0:
                        this.alphaTest = !1, this.renderQueue = Laya.BaseMaterial.RENDERQUEUE_OPAQUE, this.depthWrite = !0,
                            this.cull = Laya.RenderState.CULL_BACK, this.blend = Laya.RenderState.BLEND_DISABLE,
                            this.depthTest = Laya.RenderState.DEPTHTEST_LESS;
                        break;

                    case 1:
                        this.renderQueue = Laya.BaseMaterial.RENDERQUEUE_ALPHATEST, this.alphaTest = !0,
                            this.depthWrite = !0, this.cull = Laya.RenderState.CULL_BACK, this.blend = Laya.RenderState.BLEND_DISABLE,
                            this.depthTest = Laya.RenderState.DEPTHTEST_LESS;
                        break;

                    case 2:
                        this.renderQueue = Laya.BaseMaterial.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1,
                            this.depthWrite = !1, this.cull = Laya.RenderState.CULL_BACK, this.blend = Laya.RenderState.BLEND_ENABLE_ALL,
                            this.srcBlend = Laya.RenderState.BLENDPARAM_SRC_ALPHA, this.dstBlend = Laya.RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA,
                            this.depthTest = Laya.RenderState.DEPTHTEST_LESS;
                        break;

                    default:
                        throw new Error("Material:renderMode value error.");
                }
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "diffuseTexture", {
            get: function () {
                return this._shaderValues.getTexture(e.DIFFUSETEXTURE);
            },
            set: function (t) {
                this._shaderValues.setTexture(e.DIFFUSETEXTURE, t);
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.setProps = function (t, e, i, n, r, o, s, a, c, u, h, l, p) {
            var d = 4 * t, f = 3 * t;
            this._offsets[f] = e, this._offsets[1 + f] = i, this._offsets[2 + f] = n, this._scales[2 * t] = o,
                this._scales[2 * t + 1] = r, this._tilingOffsets[d] = s, this._tilingOffsets[1 + d] = a,
                this._tilingOffsets[2 + d] = c, this._tilingOffsets[3 + d] = u, this._colors[f] = h,
                this._colors[1 + f] = l, this._colors[2 + f] = p;
        }, e.prototype.refreshAllProps = function () {
            this._shaderValues.setBuffer(e.POSITIONOFFSET, this._offsets), this._shaderValues.setBuffer(e.SCALEOFFSET, this._scales),
                this._shaderValues.setBuffer(e.TILINGOFFSET, this._tilingOffsets), this._shaderValues.setBuffer(e.COLOROFFSET, this._colors);
        }, e.prototype.resetProps = function () {
            this._offsets.fill(-1e4), this._scales.fill(0);
        }, e.prototype.cloneTo = function (t) {
            r.prototype.cloneTo.call(this, t);
        }, e.RENDERMODE_OPAQUE = 0, e.RENDERMODE_CUTOUT = 1, e.RENDERMODE_TRANSPARENT = 2,
            e.DIFFUSETEXTURE = Laya.Shader3D.propertyNameToID("u_Texture"), e.TILINGOFFSET = Laya.Shader3D.propertyNameToID("u_TilingOffsets"),
            e.POSITIONOFFSET = Laya.Shader3D.propertyNameToID("u_Offsets"), e.SCALEOFFSET = Laya.Shader3D.propertyNameToID("u_Scales"),
            e.COLOROFFSET = Laya.Shader3D.propertyNameToID("u_Colors"), e;
    }(Laya.BaseMaterial), Ln = function (i) {
        function t(t) {
            var e = i.call(this, t) || this;
            return e._enable = !0, e.maxCount = t.maxCount, e.meshRenderer._needRender = function (t) {
                return !0;
            }, e;
        }
        return Object(Q.d)(t, i), t.prototype.setEnable = function (t) {
            this._enable !== t && (this._enable = t, this.active = t);
        }, t.prototype.getEnable = function () {
            return this._enable;
        }, t.prototype.destroy = function (t) {
            i.prototype.destroy.call(this, t);
        }, t;
    }(Laya.MeshSprite3D), kn = function (i) {
        function t(t) {
            var e = i.call(this, t) || this;
            return e.sprites = [], e.needSort = !1, e._spriteCount = 0, e.name = "colorAtlasSpriteGroup",
                e.material = new xn(e.maxCount), e.material.renderMode = xn.RENDERMODE_TRANSPARENT,
                e.material.cull = Laya.RenderState.CULL_NONE, e.meshRenderer.material = e.material,
                e;
        }
        return Object(Q.d)(t, i), t.prototype.destroy = function (t) {
            this.material && (this.material.destroy(), this.material = null), this.atlasSpriteInfo = null,
                this.sprites.length = 0, this.sprites = null, this._spriteCount = 0, i.prototype.destroy.call(this, t);
        }, t.prototype.setSpriteAtlas = function (t) {
            this.atlasSpriteInfo = t;
        }, t.prototype.getTotalFrame = function (t) {
            return this.atlasSpriteInfo.getTotalFrame(t);
        }, Object.defineProperty(t.prototype, "isFull", {
            get: function () {
                return this._spriteCount >= this.maxCount;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "spriteCount", {
            get: function () {
                return this._spriteCount;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.removeAll = function () {
            this.sprites.length = 0, this._spriteCount = 0;
        }, t.prototype.addSprite = function (t) {
            this.sprites.indexOf(t) < 0 && (this.sprites.push(t), this._spriteCount++);
        }, t.prototype.removeSprite = function (t) {
            var e = this.sprites.indexOf(t);
            return 0 <= e && (this.sprites.splice(e, 1), this._spriteCount--, !0);
        }, t.prototype.update = function (t, e, i, n) {
            if (0 !== this._spriteCount) {
                this.setEnable(!0), this.needSort && this.sprites.sort(function (t, e) {
                    return t.z - e.z;
                });
                var r = this.atlasSpriteInfo.frameMaps;
                this.material.resetProps();
                for (var o = 0; o < this._spriteCount; o++) {
                    var s = this.sprites[o];
                    if (s && s.enable) {
                        var a = r[s.animation];
                        if (!a) continue;
                        var c = a[s.angle];
                        if (!c) continue;
                        var u = c[s.currentFrame];
                        if (u) {
                            var h = s.x - e, l = s.z - i;
                            h * h + l * l < n && this.material.setProps(o, s.x, s.y, s.z, s.alpha, s.scale, u.x, u.y, u.z, u.w, s.r, s.g, s.b);
                        }
                    }
                }
                this.material.refreshAllProps();
            } else this.setEnable(!1);
        }, t;
    }(Ln), On = function () {
        function t(t) {
            this.frameMaps = {}, this._animations = [], this._totalFrameMap = {}, this.name = t;
        }
        return t.prototype.setSpriteAtlas = function (t, e) {
            this.texture = e, this.width = t.meta.size.w, this.height = t.meta.size.h;
            var i = 1 / this.width, n = 1 / this.height;
            for (var r in this._animations = [], t.frames) {
                var o = r.indexOf(".png"), s = r.slice(0, o).split("_"), a = s[0], c = Number(s[1]), u = Number(s[2]);
                this._animations.indexOf(a) < 0 && this._animations.push(a);
                var h = this.frameMaps[a];
                h || (this.frameMaps[a] = h = []), h[c] || (h[c] = []);
                var l = t.frames[r];
                h[c][u] = {
                    x: l.frame.w * i,
                    y: l.frame.h * n,
                    z: l.frame.x * i,
                    w: (l.frame.y + l.frame.h) * n
                };
            }
            this._totalFrameMap = {};
            for (var p = 0; p < this._animations.length; p++) {
                a = this._animations[p];
                this._totalFrameMap[a] = this.frameMaps[a][0].length;
            }
        }, t.prototype.getTotalFrame = function (t) {
            return this._totalFrameMap[t];
        }, t;
    }(), In = {};
    function Dn(r) {
        return Object(Q.b)(this, void 0, void 0, function () {
            var e, i, n;
            return Object(Q.e)(this, function (t) {
                switch (t.label) {
                    case 0:
                        if (In[r]) return [2, In[r]];
                        e = new On(r), t.label = 1;

                    case 1:
                        return t.trys.push([1, 4, , 5]), [4, function (e) {
                            return Object(Q.b)(this, void 0, void 0, function () {
                                var n;
                                return Object(Q.e)(this, function (t) {
                                    return n = "dlc/textures/" + e + ".json", [2, new Promise(function (e, i) {
                                        Laya.loader.load(n, new Laya.Handler(null, function (t) {
                                            t ? e(t) : i("load fail" + n);
                                        }, null, !0), null, Laya.Loader.JSON, 0, !1);
                                    })];
                                });
                            });
                        }(r)];

                    case 2:
                        return i = t.sent(), [4, qi("dlc/textures/" + r + ".png")];

                    case 3:
                        return n = t.sent(), e.setSpriteAtlas(i, n), In[r] = e, [3, 5];

                    case 4:
                        return t.sent(), console.log("加载" + r + "失败,使用默认资源"), [3, 5];

                    case 5:
                        return [2, e];
                }
            });
        });
    }
    var Cn = function (t) {
        function e() {
            return t.call(this) || this;
        }
        return Object(Q.d)(e, t), e.prototype._createSubMesh = function (t, e, i) {
            var n = new Laya.SubMesh(this), r = new Laya.VertexBuffer3D(4 * t.length, Laya.WebGLContext.STATIC_DRAW, !0);
            r.vertexDeclaration = Laya.VertexMesh.getVertexDeclaration(i), r.setData(t), this._vertexBuffers.push(r),
                this._vertexCount += r.vertexCount;
            var o = new Laya.IndexBuffer3D(Laya.IndexBuffer3D.INDEXTYPE_USHORT, e.length, Laya.WebGLContext.STATIC_DRAW, !0);
            o.setData(e), this._indexBuffer = o, this._setBuffer([r], o), n._vertexBuffer = r,
                n._indexBuffer = o, n._indexStart = 0, n._indexCount = o.indexCount, n._indices = e;
            var s = n._subIndexBufferStart, a = n._subIndexBufferCount, c = n._boneIndicesList;
            s.length = 1, a.length = 1, c.length = 1, a[s[0] = 0] = o.indexCount;
            var u = [];
            u.push(n), this._setSubMeshes(u);
            var h = r._byteLength + o._byteLength;
            this._setCPUMemory(h), this._setGPUMemory(h);
        }, e;
    }(Laya.Mesh), En = function (s) {
        function t(t, e, i, n, r) {
            void 0 === n && (n = "center"), void 0 === r && (r = "center");
            var o = s.call(this) || this;
            return o.width = t, o.height = e, o.maxCount = i, o.vAlign = n, o.hAlign = r, o.createMesh(),
                o;
        }
        return Object(Q.d)(t, s), t.prototype.createMesh = function () {
            var t = this.height / 2, e = this.width / 2, i = 0, n = 0;
            switch (this.vAlign) {
                case "top":
                    n = -t;
                    break;

                case "bottom":
                    n = t;
            }
            switch (this.hAlign) {
                case "left":
                    i = -e;
                    break;

                case "right":
                    i = e;
            }
            for (var r = [], o = [], s = 0; s < this.maxCount; s++) {
                r.push(i - e, n - t, 0, s, 0, 0, 0, 1, i + e, n - t, 0, s, 0, 0, 1, 1, i + e, n + t, 0, s, 0, 0, 1, 0, i - e, n + t, 0, s, 0, 0, 0, 0);
                var a = 4 * s;
                o.push(2 + a, 1 + a, a, 3 + a, 2 + a, a);
            }
            var c = new Float32Array(r), u = new Uint16Array(o);
            this._createSubMesh(c, u, "POSITION,NORMAL,UV");
        }, t;
    }(Cn), Pn = laya.d3.shader.ShaderDefines, Bn = Laya.BaseMaterial, jn = Laya.Vector4, An = function (e) {
        function i() {
            var t = e.call(this) || this;
            return t.setShaderName("SpriteShader"), t.tilingOffset = new jn(1, 1, 0, 0), t.renderMode = 0,
                t.alpha = 1, t;
        }
        return Object(Q.d)(i, e), Object.defineProperty(i, "CULL", {
            get: function () {
                return Laya.Shader3D.propertyNameToID("s_Cull");
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i, "BLEND", {
            get: function () {
                return Laya.Shader3D.propertyNameToID("s_Blend");
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i, "BLEND_SRC", {
            get: function () {
                return Laya.Shader3D.propertyNameToID("s_BlendSrc");
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i, "BLEND_DST", {
            get: function () {
                return Laya.Shader3D.propertyNameToID("s_BlendDst");
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i, "DEPTH_TEST", {
            get: function () {
                return Laya.Shader3D.propertyNameToID("s_DepthTest");
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i, "DEPTH_WRITE", {
            get: function () {
                return Laya.Shader3D.propertyNameToID("s_DepthWrite");
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "depthWrite", {
            get: function () {
                return this._shaderValues.getBool(i.DEPTH_WRITE);
            },
            set: function (t) {
                this._shaderValues.setBool(i.DEPTH_WRITE, t);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "depthTest", {
            get: function () {
                return this._shaderValues.getInt(i.DEPTH_TEST);
            },
            set: function (t) {
                this._shaderValues.setInt(i.DEPTH_TEST, t);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "cull", {
            get: function () {
                return this._shaderValues.getInt(i.CULL);
            },
            set: function (t) {
                this._shaderValues.setInt(i.CULL, t);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "blend", {
            get: function () {
                return this._shaderValues.getInt(i.BLEND);
            },
            set: function (t) {
                this._shaderValues.setInt(i.BLEND, t);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "srcBlend", {
            get: function () {
                return this._shaderValues.getInt(i.BLEND_SRC);
            },
            set: function (t) {
                this._shaderValues.setInt(i.BLEND_SRC, t);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "dstBlend", {
            get: function () {
                return this._shaderValues.getInt(i.BLEND_DST);
            },
            set: function (t) {
                this._shaderValues.setInt(i.BLEND_DST, t);
            },
            enumerable: !0,
            configurable: !0
        }), i.__init__ = function () {
            this.shaderDefines = new Pn(Bn.shaderDefines), i.SHADERDEFINE_TILINGOFFSET = i.shaderDefines.registerDefine("TILINGOFFSET");
        }, Object.defineProperty(i.prototype, "renderMode", {
            set: function (t) {
                switch (t) {
                    case 0:
                        this.alphaTest = !1, this.renderQueue = Laya.BaseMaterial.RENDERQUEUE_OPAQUE, this.depthWrite = !0,
                            this.cull = Laya.RenderState.CULL_BACK, this.blend = Laya.RenderState.BLEND_DISABLE,
                            this.depthTest = Laya.RenderState.DEPTHTEST_LESS;
                        break;

                    case 1:
                        this.renderQueue = Laya.BaseMaterial.RENDERQUEUE_ALPHATEST, this.alphaTest = !0,
                            this.depthWrite = !0, this.cull = Laya.RenderState.CULL_BACK, this.blend = Laya.RenderState.BLEND_DISABLE,
                            this.depthTest = Laya.RenderState.DEPTHTEST_LESS;
                        break;

                    case 2:
                        this.renderQueue = Laya.BaseMaterial.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1,
                            this.depthWrite = !1, this.cull = Laya.RenderState.CULL_BACK, this.blend = Laya.RenderState.BLEND_ENABLE_ALL,
                            this.srcBlend = Laya.RenderState.BLENDPARAM_SRC_ALPHA, this.dstBlend = Laya.RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA,
                            this.depthTest = Laya.RenderState.DEPTHTEST_LESS;
                        break;

                    default:
                        throw new Error("Material:renderMode value error.");
                }
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "diffuseTexture", {
            get: function () {
                return this._shaderValues.getTexture(i.DIFFUSETEXTURE);
            },
            set: function (t) {
                this._shaderValues.setTexture(i.DIFFUSETEXTURE, t);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "tilingOffset", {
            get: function () {
                return this._shaderValues.getVector(i.TILINGOFFSET);
            },
            set: function (t) {
                t && (1 !== t.x || 1 !== t.y || 0 !== t.z || 0 !== t.w) ? this._defineDatas.add(i.SHADERDEFINE_TILINGOFFSET) : this._defineDatas.remove(i.SHADERDEFINE_TILINGOFFSET),
                    this._shaderValues.setVector(i.TILINGOFFSET, t);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "alpha", {
            get: function () {
                return this._shaderValues.getNumber(i.ALPHA);
            },
            set: function (t) {
                t < 0 && (t = 0), 1 < t && (t = 1), this._shaderValues.setNumber(i.ALPHA, t);
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.cloneTo = function (t) {
            e.prototype.cloneTo.call(this, t);
        }, i.RENDERMODE_OPAQUE = 0, i.RENDERMODE_CUTOUT = 1, i.RENDERMODE_TRANSPARENT = 2,
            i.DIFFUSETEXTURE = Laya.Shader3D.propertyNameToID("u_Texture"), i.TILINGOFFSET = Laya.Shader3D.propertyNameToID("u_TilingOffset"),
            i.ALPHA = Laya.Shader3D.propertyNameToID("u_Alpha"), i.SHADERDEFINE_TILINGOFFSET = 0,
            i;
    }(Laya.BaseMaterial), Mn = laya.d3.shader.ShaderDefines, Rn = Laya.BaseMaterial, Nn = function (r) {
        function e(t) {
            var e = r.call(this) || this;
            e.maxCount = t, e._color = new Laya.Vector4(1, 1, 1, 1), e.setShaderName("SimpleMeshGroupShader");
            for (var i = [], n = e.renderMode = 0; n < e.maxCount; n++) i.push(0, 0, 0);
            e._offsets = new Float32Array(i), i = [];
            for (n = 0; n < e.maxCount; n++) i.push(1, 1);
            return e._scales = new Float32Array(i), e._color.x = e._color.y = e._color.z = e._color.w = 1,
                e.color = e._color, e;
        }
        return Object(Q.d)(e, r), Object.defineProperty(e, "CULL", {
            get: function () {
                return Laya.Shader3D.propertyNameToID("s_Cull");
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "BLEND", {
            get: function () {
                return Laya.Shader3D.propertyNameToID("s_Blend");
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "BLEND_SRC", {
            get: function () {
                return Laya.Shader3D.propertyNameToID("s_BlendSrc");
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "BLEND_DST", {
            get: function () {
                return Laya.Shader3D.propertyNameToID("s_BlendDst");
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "DEPTH_TEST", {
            get: function () {
                return Laya.Shader3D.propertyNameToID("s_DepthTest");
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "DEPTH_WRITE", {
            get: function () {
                return Laya.Shader3D.propertyNameToID("s_DepthWrite");
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "depthWrite", {
            get: function () {
                return this._shaderValues.getBool(e.DEPTH_WRITE);
            },
            set: function (t) {
                this._shaderValues.setBool(e.DEPTH_WRITE, t);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "depthTest", {
            get: function () {
                return this._shaderValues.getInt(e.DEPTH_TEST);
            },
            set: function (t) {
                this._shaderValues.setInt(e.DEPTH_TEST, t);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "cull", {
            get: function () {
                return this._shaderValues.getInt(e.CULL);
            },
            set: function (t) {
                this._shaderValues.setInt(e.CULL, t);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "blend", {
            get: function () {
                return this._shaderValues.getInt(e.BLEND);
            },
            set: function (t) {
                this._shaderValues.setInt(e.BLEND, t);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "srcBlend", {
            get: function () {
                return this._shaderValues.getInt(e.BLEND_SRC);
            },
            set: function (t) {
                this._shaderValues.setInt(e.BLEND_SRC, t);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "dstBlend", {
            get: function () {
                return this._shaderValues.getInt(e.BLEND_DST);
            },
            set: function (t) {
                this._shaderValues.setInt(e.BLEND_DST, t);
            },
            enumerable: !0,
            configurable: !0
        }), e.__init__ = function () {
            this.shaderDefines = new Mn(Rn.shaderDefines);
        }, Object.defineProperty(e.prototype, "renderMode", {
            set: function (t) {
                switch (t) {
                    case 0:
                        this.alphaTest = !1, this.renderQueue = Laya.BaseMaterial.RENDERQUEUE_OPAQUE, this.depthWrite = !0,
                            this.cull = Laya.RenderState.CULL_BACK, this.blend = Laya.RenderState.BLEND_DISABLE,
                            this.depthTest = Laya.RenderState.DEPTHTEST_LESS;
                        break;

                    case 1:
                        this.renderQueue = Laya.BaseMaterial.RENDERQUEUE_ALPHATEST, this.alphaTest = !0,
                            this.depthWrite = !0, this.cull = Laya.RenderState.CULL_BACK, this.blend = Laya.RenderState.BLEND_DISABLE,
                            this.depthTest = Laya.RenderState.DEPTHTEST_LESS;
                        break;

                    case 2:
                        this.renderQueue = Laya.BaseMaterial.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1,
                            this.depthWrite = !1, this.cull = Laya.RenderState.CULL_BACK, this.blend = Laya.RenderState.BLEND_ENABLE_ALL,
                            this.srcBlend = Laya.RenderState.BLENDPARAM_SRC_ALPHA, this.dstBlend = Laya.RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA,
                            this.depthTest = Laya.RenderState.DEPTHTEST_LESS;
                        break;

                    default:
                        throw new Error("Material:renderMode value error.");
                }
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "color", {
            get: function () {
                return this._shaderValues.getVector(e.COLOROFFSET);
            },
            set: function (t) {
                this._shaderValues.setVector(e.COLOROFFSET, t);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "diffuseTexture", {
            get: function () {
                return this._shaderValues.getTexture(e.DIFFUSETEXTURE);
            },
            set: function (t) {
                this._shaderValues.setTexture(e.DIFFUSETEXTURE, t);
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.resetProps = function () {
            this._offsets.fill(-1e4), this._scales.fill(0);
        }, e.prototype.setProps = function (t, e, i, n, r, o) {
            var s = 3 * t, a = 2 * t;
            this._offsets[s] = e, this._offsets[1 + s] = i, this._offsets[2 + s] = n, this._scales[a] = r,
                this._scales[1 + a] = o;
        }, e.prototype.refreshProps = function () {
            this._shaderValues.setBuffer(e.POSITIONOFFSET, this._offsets), this._shaderValues.setBuffer(e.SCALEOFFSET, this._scales);
        }, e.prototype.cloneTo = function (t) {
            r.prototype.cloneTo.call(this, t);
        }, e.RENDERMODE_OPAQUE = 0, e.RENDERMODE_CUTOUT = 1, e.RENDERMODE_TRANSPARENT = 2,
            e.DIFFUSETEXTURE = Laya.Shader3D.propertyNameToID("u_Texture"), e.POSITIONOFFSET = Laya.Shader3D.propertyNameToID("u_Offsets"),
            e.SCALEOFFSET = Laya.Shader3D.propertyNameToID("u_Scales"), e.COLOROFFSET = Laya.Shader3D.propertyNameToID("u_Color"),
            e;
    }(Laya.BaseMaterial), Vn = Laya.Shader3D;
    function Un(t) {
        !function (t) {
            An.__init__();
            var e = {
                a_Position: Laya.VertexMesh.MESH_POSITION0,
                a_Normal: Laya.VertexMesh.MESH_NORMAL0,
                a_Texcoord: Laya.VertexMesh.MESH_TEXTURECOORDINATE0
            }, i = {
                u_MvpMatrix: Laya.Shader3D.PERIOD_SPRITE,
                u_Texture: Laya.Shader3D.PERIOD_MATERIAL,
                u_TilingOffset: Laya.Shader3D.PERIOD_MATERIAL,
                u_Alpha: Laya.Shader3D.PERIOD_MATERIAL
            }, n = {
                s_Cull: Vn.RENDER_STATE_CULL,
                s_Blend: Vn.RENDER_STATE_BLEND,
                s_BlendSrc: Vn.RENDER_STATE_BLEND_SRC,
                s_BlendDst: Vn.RENDER_STATE_BLEND_DST,
                s_DepthTest: Vn.RENDER_STATE_DEPTH_TEST,
                s_DepthWrite: Vn.RENDER_STATE_DEPTH_WRITE
            }, r = Laya.Shader3D.add("SpriteShader"), o = new Laya.SubShader(e, i, null, An.shaderDefines);
            o.addShaderPass("attribute vec3 a_Position;\n        attribute vec3 a_Normal;\n        attribute vec2 a_Texcoord;\n        uniform mat4 u_MvpMatrix;\n        varying vec2 v_TexCoord;\n        #ifdef TILINGOFFSET\n            uniform vec4 u_TilingOffset;\n        #endif\n        vec2 TransformUV(vec2 texcoord,vec4 tilingOffset) {\n\t        vec2 transTexcoord = vec2(texcoord.x,texcoord.y - 1.0) * tilingOffset.xy + vec2(tilingOffset.z,-tilingOffset.w);\n\t        transTexcoord.y += 1.0;\n\t        return transTexcoord;\n        }\n        vec4 remapGLPositionZ(vec4 position) {\n            position.z = position.z * 2.0 - position.w;\n            return position;\n        }\n        void main(){\n            gl_Position =  u_MvpMatrix * vec4( 0.0, 0.0, 0.0, 1.0 ) + vec4(a_Position.x, a_Position.y, 0.0, 0.0);\n            gl_Position = remapGLPositionZ(gl_Position);\n            #ifdef TILINGOFFSET\t\t\t\n                v_TexCoord = TransformUV(a_Texcoord,u_TilingOffset);\t\t\n            #else\n                v_TexCoord = a_Texcoord;\n            #endif\n        }", "#ifdef FSHIGHPRECISION\n        precision highp float;\n        #else\n        precision mediump float;\n        #endif\n        varying vec2 v_TexCoord;\n        uniform sampler2D u_Texture;\n        uniform float u_Alpha;\n        void main(){\n            vec4 color = texture2D(u_Texture,v_TexCoord);\n            color.w *= u_Alpha;\n            gl_FragColor = color;\n        }", n),
                r.addSubShader(o);
        }(), function (t) {
            Nn.__init__();
            var e = {
                a_Position: Laya.VertexMesh.MESH_POSITION0,
                a_Normal: Laya.VertexMesh.MESH_NORMAL0,
                a_Index: Laya.VertexMesh.MESH_COLOR0,
                a_Texcoord: Laya.VertexMesh.MESH_TEXTURECOORDINATE0
            }, i = {
                u_WorldMat: Laya.Shader3D.PERIOD_SPRITE,
                u_Projection: Laya.Shader3D.PERIOD_CAMERA,
                u_View: Laya.Shader3D.PERIOD_CAMERA,
                u_Texture: Laya.Shader3D.PERIOD_MATERIAL,
                u_Offsets: Laya.Shader3D.PERIOD_MATERIAL,
                u_Scales: Laya.Shader3D.PERIOD_MATERIAL,
                u_Color: Laya.Shader3D.PERIOD_MATERIAL
            }, n = Math.floor((t - 30) / 2);
            DEVELOP && console.log("support maxSimpleMeshGroupBatchCount", n);
            if (N()) Gn = R ? 120 : 200; else {
                var r = window.devicePixelRatio <= 2 ? 100 : 150;
                Gn = Math.min(n, r);
            }
            DEVELOP && console.log("real use maxSimpleMeshGroupBatchCount", Gn);
            var o = "attribute vec3 a_Position;\n        attribute vec3 a_Normal;\n        attribute vec4 a_Index;\n        attribute vec2 a_Texcoord;\n        uniform mat4 u_WorldMat;\n        uniform mat4 u_Projection;\n        uniform mat4 u_View;\n        const int c_MaxCount = " + Gn + ";\n        uniform vec3 u_Offsets[c_MaxCount];\n        uniform vec2 u_Scales[c_MaxCount];\n        varying vec3 v_TexCoord;\n        \n        vec4 remapGLPositionZ(vec4 position) {\n            position.z = position.z * 2.0 - position.w;\n            return position;\n        }\n        \n        mat4 getScaleMat(float scale) {\n            return mat4(\n                    scale,  0.0,    0.0,    0.0,\n                    0.0,    scale,  0.0,    0.0,\n                    0.0,\t0.0,    scale,  0.0,\n                    0.0,    0.0,\t0.0,\t1.0);\n        }\n\n        void main(){\n            mat4 worldMat = u_WorldMat;\n            int index = int(a_Index.x);\n            worldMat[3].xyz += u_Offsets[index].xyz;\n            worldMat = worldMat * getScaleMat(u_Scales[index].x);\n            gl_Position = u_Projection * u_View * worldMat * vec4(a_Position, 1.0 );\n            gl_Position = remapGLPositionZ(gl_Position);\n            v_TexCoord = vec3(a_Texcoord,u_Scales[index].y);\t\t\n        }", s = {
                s_Cull: Vn.RENDER_STATE_CULL,
                s_Blend: Vn.RENDER_STATE_BLEND,
                s_BlendSrc: Vn.RENDER_STATE_BLEND_SRC,
                s_BlendDst: Vn.RENDER_STATE_BLEND_DST,
                s_DepthTest: Vn.RENDER_STATE_DEPTH_TEST,
                s_DepthWrite: Vn.RENDER_STATE_DEPTH_WRITE
            }, a = Laya.Shader3D.add("SimpleMeshGroupShader"), c = new Laya.SubShader(e, i, Nn.shaderDefines, Nn.shaderDefines);
            c.addShaderPass(o, "#ifdef FSHIGHPRECISION\n        precision highp float;\n        #else\n        precision mediump float;\n        #endif\n        varying vec3 v_TexCoord;\n        uniform sampler2D u_Texture;\n        uniform vec4 u_Color;\n        void main(){\n            vec4 color = texture2D(u_Texture,v_TexCoord.xy);\n            color.w *= v_TexCoord.z;\n            gl_FragColor = color * u_Color;\n        }", s),
                a.addSubShader(c);
        }(t), function (t) {
            xn.__init__();
            var e = {
                a_Position: Laya.VertexMesh.MESH_POSITION0,
                a_Normal: Laya.VertexMesh.MESH_NORMAL0,
                a_Texcoord: Laya.VertexMesh.MESH_TEXTURECOORDINATE0
            }, i = {
                u_WorldMat: Laya.Shader3D.PERIOD_SPRITE,
                u_Projection: Laya.Shader3D.PERIOD_CAMERA,
                u_View: Laya.Shader3D.PERIOD_CAMERA,
                u_AlphaTestValue: Laya.Shader3D.PERIOD_MATERIAL,
                u_Texture: Laya.Shader3D.PERIOD_MATERIAL,
                u_TilingOffsets: Laya.Shader3D.PERIOD_MATERIAL,
                u_Offsets: Laya.Shader3D.PERIOD_MATERIAL,
                u_Scales: Laya.Shader3D.PERIOD_MATERIAL,
                u_Colors: Laya.Shader3D.PERIOD_MATERIAL
            }, n = Math.floor((t - 30) / 4);
            DEVELOP && console.log("support maxColorAtlasSpriteBatchCount", n);
            if (N()) zn = R ? 100 : 200; else {
                var r = window.devicePixelRatio <= 2 ? 100 : 200;
                zn = Math.min(n, r);
            }
            DEVELOP && console.log("real use maxColorAtlasSpriteBatchCount", zn);
            var o = "attribute vec3 a_Position;\n        attribute vec3 a_Normal;\n        attribute vec2 a_Texcoord;\n        uniform mat4 u_WorldMat;\n        uniform mat4 u_Projection;\n        uniform mat4 u_View;\n        const int c_MaxCount = " + zn + ";\n        uniform vec4 u_TilingOffsets[c_MaxCount];\n        uniform vec3 u_Offsets[c_MaxCount];\n        uniform vec2 u_Scales[c_MaxCount];\n        uniform vec3 u_Colors[c_MaxCount];\n        varying vec3 v_TexCoord;\n        varying vec3 v_Color;\n        \n        vec2 TransformUV(vec2 texcoord,vec4 tilingOffset){\n\t        vec2 transTexcoord = vec2(texcoord.x,texcoord.y - 1.0) * tilingOffset.xy + vec2(tilingOffset.z,tilingOffset.w);\n\t        transTexcoord.y += 1.0;\n\t        return transTexcoord;\n        }\n        vec4 remapGLPositionZ(vec4 position) {\n            position.z = position.z * 2.0 - position.w;\n            return position;\n        }\n        void main(){\n            mat4 worldMat = u_WorldMat;\n            int index = int(a_Normal.x);\n            worldMat[3].xyz += u_Offsets[index].xyz;\n            vec4 pos = u_Projection * u_View * worldMat * vec4( 0.0, 0.0, 0.0, 1.0 );\n            gl_Position = pos + vec4(a_Position.x * u_Scales[index].x, a_Position.y * u_Scales[index].x, 0.0, 0.0);\n            gl_Position = remapGLPositionZ(gl_Position);\n            v_TexCoord = vec3(TransformUV(a_Texcoord,u_TilingOffsets[index]),u_Scales[index].y);\n            v_Color = u_Colors[index];\t\t\t\n        }", s = {
                s_Cull: Vn.RENDER_STATE_CULL,
                s_Blend: Vn.RENDER_STATE_BLEND,
                s_BlendSrc: Vn.RENDER_STATE_BLEND_SRC,
                s_BlendDst: Vn.RENDER_STATE_BLEND_DST,
                s_DepthTest: Vn.RENDER_STATE_DEPTH_TEST,
                s_DepthWrite: Vn.RENDER_STATE_DEPTH_WRITE
            }, a = Laya.Shader3D.add("ColorAtlasSpriteGroupShader"), c = new Laya.SubShader(e, i, xn.shaderDefines, xn.shaderDefines);
            a.addSubShader(c), c.addShaderPass(o, "#ifdef FSHIGHPRECISION\n        precision highp float;\n        #else\n        precision mediump float;\n        #endif\n        varying vec3 v_TexCoord;\n        varying vec3 v_Color;\n        uniform sampler2D u_Texture;\n        void main(){\n            vec4 color = texture2D(u_Texture,v_TexCoord.xy);\n            color.w *= v_TexCoord.z;\n            if(color.w < 0.2)\n                discard;\n            color.xyz *= v_Color.xyz;\n            gl_FragColor = color;\n        }", s);
        }(t);
    }
    var Gn = 0;
    var zn = 0;
    var Fn = function (r) {
        function t(t, e, i) {
            var n = r.call(this) || this;
            return n.width = t, n.height = e, n.maxCount = i, n.createMesh(), n;
        }
        return Object(Q.d)(t, r), t.prototype.createMesh = function () {
            for (var t = this.height / 2, e = this.width / 2, i = [], n = [], r = 0; r < this.maxCount; r++) {
                i.push(-e, 0, -t, 0, 0, 1, r, 0, 0, 0, 0, 1, e, 0, -t, 0, 0, 1, r, 0, 0, 0, 1, 1, e, 0, t, 0, 0, 1, r, 0, 0, 0, 1, 0, -e, 0, t, 0, 0, 1, r, 0, 0, 0, 0, 0);
                var o = 4 * r;
                n.push(2 + o, 1 + o, o, 3 + o, 2 + o, o);
            }
            var s = new Float32Array(i), a = new Uint16Array(n);
            this._createSubMesh(s, a, "POSITION,NORMAL,COLOR,UV");
        }, t;
    }(Cn), Hn = function (i) {
        function t(t) {
            var e = i.call(this, t) || this;
            return e.sprites = [], e._spriteCount = 0, e.offset = new $i(0, 0, 0), e.useY = !0,
                e.scaleY = !1, e._minScale = 0, e._minScale1 = 1, e.name = "meshGroup", e.material = new Nn(e.maxCount),
                e.material.renderMode = Nn.RENDERMODE_OPAQUE, e.material.cull = Laya.RenderState.CULL_BACK,
                e.meshRenderer.material = e.material, e;
        }
        return Object(Q.d)(t, i), t.prototype.setMinScale = function (t) {
            this._minScale = t, this._minScale1 = 1 - this._minScale;
        }, t.prototype.destroy = function (t) {
            this.material && (this.material.destroy(), this.material = null), this.sprites.length = 0,
                this.sprites = null, this._spriteCount = 0, i.prototype.destroy.call(this, t);
        }, Object.defineProperty(t.prototype, "isFull", {
            get: function () {
                return this._spriteCount >= this.maxCount;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "spriteCount", {
            get: function () {
                return this._spriteCount;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.removeAll = function () {
            this.sprites.length = 0, this._spriteCount = 0;
        }, t.prototype.addSprite = function (t) {
            this.sprites.indexOf(t) < 0 && (this.sprites.push(t), this._spriteCount++);
        }, t.prototype.removeSprite = function (t) {
            var e = this.sprites.indexOf(t);
            return 0 <= e && (this.sprites.splice(e, 1), this._spriteCount--, !0);
        }, t.prototype.update = function (t, e, i, n) {
            if (0 !== this._spriteCount) {
                this.setEnable(!0), this.material.resetProps();
                for (var r = this.offset.x, o = this.offset.z, s = this.offset.y, a = 0; a < this._spriteCount; a++) {
                    var c = this.sprites[a];
                    if (c && c.enable) {
                        var u = c.x - e, h = c.z - i;
                        if (u * u + h * h < n) {
                            var l = c.y, p = this.useY ? l + s : s, d = this.scaleY ? c.scale * (this._minScale + this._minScale1 * (c.maxY - l) / c.maxY) : c.scale;
                            this.material.setProps(a, c.x + r, p, c.z + o, d, c.alpha);
                        }
                    }
                }
                this.material.refreshProps();
            } else this.setEnable(!1);
        }, t;
    }(Ln), $n = new (function () {
        function t() {
            this._entityMap = {}, this._entityTypes = {}, this._meshGroups = [], this._meshGroupMap = {},
                this._groupMeshMap = {}, this.visibleRadiusSquare = 100;
        }
        return t.prototype.initialize = function () {
            var t = this.scene = new Laya.Scene3D();
            t.enableLight = !0, t.ambientColor = new Laya.Vector3(.5, .5, .5), Laya.stage.addChildAt(this.scene, 0),
                this.mainCamera = new _n(), t.addChild(this.mainCamera.camera), this.mainCamera.initialize(),
                this.initLight(), this._entityTypes[1] = [], this._entityTypes[2] = [], this._entityTypes[3] = [],
                this._groupMeshMap.tip = new En(3, 3 * .304 * n, Math.min(20, zn), "center", "center"),
                this._groupMeshMap.shadow = new Fn(.5, .5, 20), this.gameMap = new nn();
        }, t.prototype.loadShadowTexture = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e;
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return R ? this.shadowTexture ? [2] : (e = this, [4, qi("dlc/textures/shadow.png")]) : [2];

                        case 1:
                            return e.shadowTexture = t.sent(), [2];
                    }
                });
            });
        }, t.prototype.initLight = function () {
            var t = new Laya.DirectionLight();
            t.color = new Laya.Vector3(.5, .5, .5), t.transform.lookAt(new Laya.Vector3(1, -1.5, -.5), new Laya.Vector3(0, 1, 0)),
                t.shadow = !R, t.shadowDistance = 20, t.shadowResolution = G() || !N() && 20 < B.benchmarkLevel ? 2048 : 1024,
                t.shadowPSSMCount = 1, t.shadowPCFType = 1, this.scene.addChild(t);
        }, t.prototype.initGameMap = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.gameMap.loadMap()];

                        case 1:
                            return t.sent(), [2];
                    }
                });
            });
        }, t.prototype.addShadowSprite = function (t) {
            this._shadowGroup || (this._shadowGroup = new Hn(this._groupMeshMap.shadow), this._shadowGroup.material.renderMode = Nn.RENDERMODE_TRANSPARENT,
                this._shadowGroup.material.cull = Laya.RenderState.CULL_NONE, this._shadowGroup.material.color = new Laya.Vector4(1, 1, 1, .3),
                this._shadowGroup.offset.setValue(0, .05, 0), this._shadowGroup.material.diffuseTexture = this.shadowTexture,
                this._shadowGroup.meshRenderer.sortingFudge = -100, this.addMeshGroup(this._shadowGroup)),
                this._shadowGroup.addSprite(t);
        }, t.prototype.removeShadowSprite = function (t) {
            this._shadowGroup && this._shadowGroup.removeSprite(t);
        }, t.prototype.addEffectSprite = function (t) {
            var e, i = this._meshGroupMap[t.meshGroupKey];
            if (i) {
                for (var n = 0, r = i.length; n < r; n++) if (!i[n].isFull) {
                    e = i[n];
                    break;
                }
            } else this._meshGroupMap[t.meshGroupKey] = [];
            if (!e) {
                var o = function (t) {
                    return In[t];
                }(t.atlas);
                (e = new kn(this._groupMeshMap[t.model])).setSpriteAtlas(o), e.material.renderMode = xn.RENDERMODE_TRANSPARENT,
                    e.material.cull = Laya.RenderState.CULL_NONE, e.material.diffuseTexture = o.texture,
                    this.addMeshGroup(e), this._meshGroupMap[t.meshGroupKey].push(e);
            }
            e.addSprite(t);
        }, t.prototype.removeEffectSprite = function (t) {
            var e = this._meshGroupMap[t.meshGroupKey];
            if (e) for (var i = 0, n = e.length; i < n && !e[i].removeSprite(t); i++);
        }, t.prototype.addMeshGroup = function (t) {
            this._meshGroups.push(t), t instanceof Laya.MeshSprite3D && this.scene.addChild(t);
        }, t.prototype.getEntitiesByType = function (t) {
            return this._entityTypes[t];
        }, t.prototype.getEntityById = function (t) {
            return this._entityMap[t];
        }, t.prototype.addEntity = function (t) {
            var e = this._entityTypes[t.type];
            if (!(0 <= e.indexOf(t))) switch (t.scene = this, t.sprite3D && this.scene.addChild(t.sprite3D),
                e.push(t), (this._entityMap[t.id] = t).type) {
                    case 3:
                        var i = t;
                        this.addEffectSprite(i);
                        break;

                    case 1:
                        R && this.addShadowSprite(t);
                }
        }, t.prototype.removeEntity = function (t) {
            var e = this._entityTypes[t.type], i = e.indexOf(t);
            if (0 <= i) switch (t.scene = null, e.splice(i, 1), delete this._entityMap[t.id],
                t.type) {
                    case 3:
                        var n = t;
                        this.removeEffectSprite(n);
                        break;

                    case 1:
                        R && this.removeShadowSprite(t);
                }
        }, t.prototype.update = function (t) {
            for (var e = this._entityTypes[1], i = e.length - 1; 0 <= i; i--) {
                e[i].update(t);
            }
            var n = this._entityTypes[2];
            for (i = n.length - 1; 0 <= i; i--) n[i].update(t);
            var r = this._entityTypes[3];
            for (i = r.length - 1; 0 <= i; i--) r[i].update(t);
            for (var o = Ur.hero ? Ur.hero.x : 0, s = Ur.hero ? Ur.hero.z : 0, a = (i = 0, this._meshGroups.length); i < a; i++) this._meshGroups[i].update(t, o, s, this.visibleRadiusSquare);
            this.mainCamera.update(t);
        }, t;
    }())(), Kn = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.isLeader = !1, t._moveState = 0, t.isGuide = !1, t.currentFrame = 0, t.animation = "run",
                t.angle = 0, t.alpha = 1, t.r = 1, t.g = 1, t.b = 1, t._celebration = !1, t.type = 1,
                t.skin = new tn(), t;
        }
        return Object(Q.d)(t, e), t.prototype.playAnimation = function (t) { }, t.prototype.setAiInfo = function (t) {
            this.aiInfo = t, this.skin.setSkin(this.aiInfo.skinId);
        }, Object.defineProperty(t.prototype, "isHuman", {
            get: function () {
                return 1 === this.playerType || 3 === this.playerType;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "moveState", {
            get: function () {
                return this._moveState;
            },
            set: function (t) {
                (4 != this._moveState || 5 != t && 6 != t) && (this.event("moveStateChange", t),
                    this._moveState != t && (this._moveState = t));
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.respawn = function () {
            this._celebration = !1;
            var t = this.moveSystem.physicBody;
            this.x = t.position.x = this.spawnPosition.x, this.y = 0, this.z = t.position.y = this.spawnPosition.z,
                this.refreshPosition(), this.rotation.x = 0, this.rotation.z = 0, this.refreshRotation();
        }, t.prototype.goalCelebration = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e, i;
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this._celebration = !0, e = $n.gameMap.getRestrictedArea(this.team), (i = new hn(e.x - this.x, e.z - this.z)).normalize(),
                                this.moveSystem.physicBody.desiredSpeed = this.moveSystem.physicBody.maxSpeed, this.moveSystem.physicBody.desiredDirection.setValue(i.x, i.y),
                                this.moveSystem.moveState = 8, [4, en(2e3)];

                        case 1:
                            return t.sent(), this._celebration ? (this.moveSystem.moveState = 9, [2]) : [2];
                    }
                });
            });
        }, Object.defineProperty(t.prototype, "sprite3D", {
            get: function () {
                return this.skin;
            },
            enumerable: !0,
            configurable: !0
        }), t;
    }(Wi), Wn = function () {
        function t() {
            this.enable = !0, this._destroyed = !1, this._started = !1, this.invokeArr = [],
                this.eventDispatch = new Laya.EventDispatcher();
        }
        return t.prototype.on = function (t, e, i, n) {
            return this.eventDispatch.on(t, e, i, n);
        }, t.prototype.once = function (t, e, i, n) {
            return this.eventDispatch.once(t, e, i, n);
        }, t.prototype.off = function (t, e, i, n) {
            return this.eventDispatch.off(t, e, i, n);
        }, t.prototype.event = function (t, e) {
            return this.eventDispatch.event(t, e);
        }, t.prototype.checkInvoke = function (t) {
            for (var e = 0, i = this.invokeArr.length; e < i;) {
                var n = this.invokeArr[e];
                n.remainingTime -= t, n.remainingTime <= 0 ? (this[n.key] && this[n.key](), this.invokeArr.splice(e, 1),
                    i--) : e++;
            }
        }, t.prototype.invoke = function (t, e) {
            this.cancelInvoke(t), this.invokeArr.push({
                key: t,
                remainingTime: e
            });
        }, t.prototype.cancelInvoke = function (e) {
            var t = this.invokeArr.findIndex(function (t) {
                return t.key == e;
            });
            0 <= t && this.invokeArr.splice(t, 1);
        }, t.prototype.cleanInvokes = function () {
            this.invokeArr.length = 0;
        }, Object.defineProperty(t.prototype, "destroyed", {
            get: function () {
                return this._destroyed;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.onAwake = function () { }, t.prototype.onDestroy = function () { },
            t.prototype.onStart = function () { }, t.prototype._update = function (t) {
                this._destroyed || (this._started || (this._started = !0, this.onStart()), this.checkInvoke(t),
                    this.onUpdate(t));
            }, t.prototype.onUpdate = function (t) { }, t.prototype._destroy = function () {
                this._destroyed || (this.onDestroy(), this.eventDispatch.offAll(), this.eventDispatch = null,
                    this.owner = null, this._destroyed = !0);
            }, t;
    }(), Xn = new (function (e) {
        function t() {
            var t = e.call(this) || this;
            return t._isMouseDown = !1, t.mouseX = 0, t.mouseY = 0, t.startX = 0, t.startY = 0,
                t;
        }
        return Object(Q.d)(t, e), t.prototype.addInputListeners = function (t) {
            this._sprite = t, this._sprite.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown),
                this._sprite.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
        }, t.prototype.removeInputListeners = function () {
            this._sprite && (this._sprite.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown),
                this._sprite.off(Laya.Event.MOUSE_UP, this, this.onMouseUp), this._sprite.off(Laya.Event.MOUSE_OUT, this, this.onMouseUp),
                this._sprite.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), this._sprite = null),
                this._isMouseDown = !1;
        }, Object.defineProperty(t.prototype, "isMouseDown", {
            get: function () {
                return this._isMouseDown;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.onMouseDown = function (t) {
            this._isMouseDown = !0, this.startX = t.stageX, this.startY = t.stageY, this.mouseX = t.stageX,
                this.mouseY = t.stageY, this._sprite.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove),
                this.event(t.type, t);
        }, t.prototype.onMouseUp = function (t) {
            this._isMouseDown = !1, this.startX = t.stageX, this.startY = t.stageY, this.mouseX = t.stageX,
                this.mouseY = t.stageY, this._sprite.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove),
                this.event(Laya.Event.MOUSE_UP, t);
        }, t.prototype.onMouseMove = function (t) {
            this.mouseX = t.stageX, this.mouseY = t.stageY;
        }, t;
    }(Laya.EventDispatcher))();
    var qn = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t._sqrDeadZone = 0, t._dir = new hn(), t._normalizedVec = new Laya.Vector3(),
                t;
        }
        return Object(Q.d)(t, e), t.prototype.onStart = function () {
            this._sqrDeadZone = Math.pow(.03 * u, 2), Xn.on(Laya.Event.MOUSE_UP, this, this.onInputUp);
        }, t.prototype.onInputUp = function () {
            this.event(Laya.Event.MOUSE_UP);
        }, t.prototype.getInputDirection = function () {
            if (Xn.isMouseDown) {
                var t = Xn.mouseX - Xn.startX, e = Xn.mouseY - Xn.startY;
                if (!(t * t + e * e < this._sqrDeadZone)) {
                    this._dir.x = t, this._dir.y = e, this._dir.normalize(), this._normalizedVec.x = this._dir.x,
                        this._normalizedVec.z = this._dir.y;
                    var i = function (t, e, i) {
                        var n = 2 * t.x, r = 2 * t.y, o = 2 * t.z, s = t.x * n, a = t.y * r, c = t.z * o, u = t.x * r, h = t.x * o, l = t.y * o, p = t.w * n, d = t.w * r, f = t.w * o;
                        return i || (i = new Laya.Vector3()), i.x = (1 - (a + c)) * e.x + (u - f) * e.y + (h + d) * e.z,
                            i.y = (u + f) * e.x + (1 - (s + c)) * e.y + (l - p) * e.z, i.z = (h - d) * e.x + (l + p) * e.y + (1 - (s + a)) * e.z,
                            i;
                    }($n.mainCamera.camera.transform.rotation, this._normalizedVec);
                    this.event(Laya.Event.MOUSE_MOVE, i);
                }
            }
        }, t.prototype.onUpdate = function (t) {
            this.getInputDirection();
        }, t.prototype.onDestroy = function () {
            Xn.off(Laya.Event.MOUSE_UP, this, this.onInputUp);
        }, t;
    }(Wn), Yn = function () {
        function t() { }
        return t.prototype.setAllyPlayers = function (t) {
            this._allyPlayers = t;
        }, t.prototype.setCaracsData = function (t) { }, t;
    }(), Qn = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t._dir = new hn(), t;
        }
        return Object(Q.d)(t, e), t.prototype.defineDirection = function () {
            return this._dir;
        }, t;
    }(Yn), Jn = function () {
        function t(t) {
            void 0 === t && (t = .5), this.lastDirection = new hn(0, 0), this.setUpdateDelay(t);
        }
        return t.prototype.setUpdateDelay = function (t) {
            void 0 === t && (t = .5), this.lastDirection.setValue(0, 0), this._updateDelay = 1e3 * t,
                this._lastUpdateTime = ln.curTime;
        }, Object.defineProperty(t.prototype, "isUpdateReady", {
            get: function () {
                return ln.curTime - this._lastUpdateTime > this._updateDelay;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.update = function () {
            return !!this.isUpdateReady && (this._lastUpdateTime = ln.curTime, !0);
        }, t;
    }(), Zn = new hn();
    function tr(t, e) {
        e ? e.setValue(0, 0) : e = new hn();
        for (var i = t.length, n = i - 1; 0 <= n; --n) {
            var r = t[n];
            e.x += r.x, e.y += r.y;
        }
        return 0 < i && (e.x = e.x / i, e.y = e.y / i), e;
    }
    function er(t, e, i) {
        return i || (i = new hn()), i.x = e.x - t.x, i.y = e.z - t.z, i.normalize(), i;
    }
    function ir(t, e) {
        e ? e.setValue(0, 0) : e = new hn();
        for (var i = function (t, e) {
            return or(t, e, t, t.team);
        }(t, 25), n = i.length, r = n - 1; 0 <= r; --r) Zn = nr(t, i[r], Zn), e.x += Zn.x,
            e.y += Zn.y;
        return 0 < n && (e.x = e.x / n, e.y = e.y / n), e;
    }
    function nr(t, e, i) {
        return i || (i = new hn()), i.x = t.x - e.x, i.y = t.z - e.z, i.normalize(), i;
    }
    function rr(t, e, i) {
        for (var n = null, r = 1 / 0, o = 0; o < t.length; o++) {
            var s = t[o], a = s.x - e, c = s.z - i, u = a * a + c * c;
            (!n || u < r) && (n = s, r = u);
        }
        return n;
    }
    function or(t, e, i, n, r) {
        r ? r.length = 0 : r = [];
        for (var o = Ur.getPlayersFrom(n), s = 0, a = o.length; s < a; s++) {
            var c = o[s];
            if (c !== i) {
                var u = c.x - t.x, h = c.z - t.z;
                u * u + h * h < e && r.push(c);
            }
        }
        return r;
    }
    var sr = function (n) {
        function t(t, e) {
            var i = n.call(this) || this;
            return i._delayer = new Jn(0), i.towardVec = new hn(), i.separation = new hn(),
                i._player = t, i._opponentPlayers = e, i;
        }
        return Object(Q.d)(t, n), t.prototype.setCaracsData = function (t) {
            this._delayer.setUpdateDelay(un(t.bumpNearestToBall.reactionTime));
        }, t.prototype.defineDirection = function () {
            if (this._delayer.update()) {
                var t = er(this._player, rr(this._opponentPlayers, vn.x, vn.z), this.towardVec), e = ir(this._player, this.separation);
                0 !== e.x && 0 !== e.y ? tr([t, e], this._delayer.lastDirection) : (this._delayer.lastDirection.copy(t),
                    this._delayer.lastDirection.normalize());
            }
            return this._delayer.lastDirection;
        }, t;
    }(Yn);
    function ar(t, e, i, n, r) {
        var o = new $i();
        o.x = n.x - t.x, o.y = n.y - t.y, o.z = n.z - t.z;
        var s = new $i();
        s.x = n.x - e.x, s.y = n.y - e.y, s.z = n.z - e.z;
        var a = function (t, e, i) {
            var n = i.lengthSquare;
            if (n < .001) return 0;
            var r = n - t * t;
            if (Math.abs(r) < .001) return Math.max(-e.lengthSquare / (2 * i.dot(e)), 0);
            var o = 2 * i.dot(e), s = e.lengthSquare, a = o * o - 4 * r * s;
            if (0 < a) {
                var c = (-o + Math.sqrt(a)) / (2 * r), u = (-o - Math.sqrt(a)) / (2 * r);
                return c <= 0 ? Math.max(u, 0) : 0 < u ? Math.min(c, u) : c;
            }
            return a < 0 ? 0 : Math.max(-o / (2 * r), 0);
        }(i, o, s), c = new $i();
        return c.x = n.x + a * s.x, c.y = n.y + a * s.y, c.z = n.z + a * s.z, c;
    }
    var cr = function (i) {
        function t(t) {
            var e = i.call(this) || this;
            return e._rushDistanceMin = 1, e._rushDistanceMax = 4, e._targetDistanceTolerance = 2,
                e._distanceArret = 5, e._ballDir = new hn(), e.playFlatVec = new $i(), e.velocity1Flat = new $i(),
                e.velocity2Flat = new $i(), e.footballFlat = new $i(), e.normalized = new $i(),
                e._player = t, e;
        }
        return Object(Q.d)(t, i), t.prototype.setCaracsData = function (t) {
            this._distanceArret = un(t.predictRushBallHolder.rushStopDistance);
        }, t.prototype.defineDirection = function () {
            var t = vn.x - this._player.x, e = vn.z - this._player.z, i = Math.sqrt(t * t + e * e);
            return i < this._rushDistanceMax && i > this._rushDistanceMin && !this._isRushing && (this._isRushing = !0,
                this._target = this.defineTarget()), this._isRushing ? this.isNextToTarget() ? (this._isRushing = !1,
                    this._ballDir.x = vn.x - this._player.x, this._ballDir.y = vn.z - this._player.z) : (this._ballDir.x = this._target.x - this._player.x,
                        this._ballDir.y = this._target.z - this._player.z) : (this._ballDir.x = vn.x - this._player.x,
                            this._ballDir.y = vn.z - this._player.z), this._ballDir.normalize(), this._ballDir;
        }, t.prototype.defineTarget = function () {
            var t = this._player.moveSystem.physicBody.velocity, e = vn.holder.moveSystem.physicBody.velocity;
            this.playFlatVec.setValue(this._player.x, 0, this._player.z), this.velocity1Flat.setValue(t.x, 0, t.y),
                this.velocity2Flat.setValue(e.x, 0, e.y), this.footballFlat.setValue(vn.x, 0, vn.z);
            var i = ar(this.playFlatVec, this.velocity1Flat, t.length, this.footballFlat, this.velocity2Flat);
            return this.normalized.x = i.x - this.playFlatVec.x, this.normalized.z = i.z - this.playFlatVec.z,
                this.normalized.normalize(), this.normalized.x = i.x + this.normalized.x * this._distanceArret,
                this.normalized.z = i.z + this.normalized.z * this._distanceArret, this.normalized;
        }, t.prototype.isNextToTarget = function () {
            var t = this._target.x - this._player.x, e = this._target.z - this._player.z;
            return t * t + e * e < this._targetDistanceTolerance * this._targetDistanceTolerance;
        }, t;
    }(Yn), ur = function (i) {
        function t(t) {
            var e = i.call(this) || this;
            return e._delayer = new Jn(0), e._players = [], e._areaPos = new $i(), e._targetDir = new hn(),
                e._player = t, e;
        }
        return Object(Q.d)(t, i), t.prototype.setCaracsData = function (t) {
            this._delayer.setUpdateDelay(un(t.dodgeNearestToSelf.reactionTime)), this._sqDetectionDistance = Math.pow(un(t.dodgeNearestToSelf.detectionDistance), 2);
        }, t.prototype.defineDirection = function () {
            var t = 1 === this._player.team ? 2 : 1, e = or(this._player, this._sqDetectionDistance, this._player, t, this._players);
            return e.length <= 0 ? er(this._player, function (t, e) {
                e || (e = new $i());
                var i = $n.gameMap.getRestrictedArea(1 === t.team ? 2 : 1);
                return e.x = i.x, 1 === t.team ? e.z = i.z - .5 * i.halfHeight : e.z = i.z + .5 * i.halfHeight,
                    e;
            }(this._player, this._areaPos), this._targetDir) : (this._delayer.update() && nr(this._player, rr(e, this._player.x, this._player.z), this._delayer.lastDirection),
                this._delayer.lastDirection);
        }, t;
    }(Yn), hr = function (i) {
        function t(t) {
            var e = i.call(this) || this;
            return e._delayer = new Jn(0), e._dir = new hn(), e._player = t, e;
        }
        return Object(Q.d)(t, i), t.prototype.setCaracsData = function (t) {
            this._delayer.setUpdateDelay(un(t.straightToBall.reactionTime));
        }, t.prototype.defineDirection = function () {
            if (this._delayer.update()) {
                var t = er(this._player, vn, this._dir);
                2 === this._player.team ? (this._delayer.lastDirection.x = t.x, this._delayer.lastDirection.y = t.y) : tr([t, ir(this._player)], this._delayer.lastDirection);
            }
            return this._delayer.lastDirection;
        }, t;
    }(Yn), lr = function (i) {
        function t(t) {
            var e = i.call(this) || this;
            return e._dir = new hn(), e._targetPos = new hn(), e._player = t, e;
        }
        return Object(Q.d)(t, i), t.prototype.defineDirection = function () {
            var t = $n.gameMap.getRestrictedArea(1 === this._player.team ? 2 : 1);
            return this._targetPos.x = t.x, 1 === this._player.team ? this._targetPos.y = t.z - .5 * t.halfHeight : this._targetPos.y = t.z + .5 * t.halfHeight,
                this._dir.x = this._targetPos.x - this._player.x, this._dir.y = this._targetPos.y - this._player.z,
                this._dir.normalize(), this._dir;
        }, t;
    }(Yn), pr = function (i) {
        function t(t) {
            var e = i.call(this) || this;
            return e._ballOffset = 5, e._touchDownOffset = 15, e._delayer = new Jn(0), e.normalized = new hn(),
                e._player = t, e;
        }
        return Object(Q.d)(t, i), t.prototype.setCaracsData = function (t) {
            var e = t.defendTouchDown;
            this._delayer.setUpdateDelay(un(e.reactionTime));
            var i = un(e.ballOffSetMin), n = un(e.ballOffSetMax), r = un(e.touchDownOffsetMin), o = un(e.touchDownOffsetMax);
            this._ballOffset = i + C(i, n), this._touchDownOffset = r + C(r, o);
        }, t.prototype.defineDirection = function () {
            return this._delayer.update() && (this.normalized.x = vn.x - this._player.x, this.normalized.y = vn.z - this._player.z,
                this.normalized.normalize(), this.isCloseToTouchdown(this._player.team) ? (this._delayer.lastDirection.x = this.normalized.x,
                    this._delayer.lastDirection.y = this.normalized.y) : this.isBetweenBallAndTouchdown(this._player.team) || (this._delayer.lastDirection.x = this.normalized.x,
                        this._delayer.lastDirection.y = 1 != this._player.team ? -1 : 1)), this._delayer.lastDirection;
        }, t.prototype.isCloseToTouchdown = function (t) {
            return $n.gameMap.isCloseToRestrictedArea(t, this._player.x, this._player.z, this._touchDownOffset);
        }, t.prototype.isBetweenBallAndTouchdown = function (t) {
            return 1 == t ? this._player.z > vn.z + this._ballOffset : this._player.z < vn.z - this._ballOffset;
        }, t;
    }(Yn), dr = function (i) {
        function t(t) {
            var e = i.call(this) || this;
            return e._protectionRadius = 0, e._protectionRadiusSquared = 0, e._protectionForward = 0,
                e.zero = new hn(), e.averageDir = new hn(), e.separationDir = new hn(), e._player = t,
                e._protectionForward = 2, e._protectionRadius = 2 + 2 * Math.random(), e._protectionRadiusSquared = e._protectionRadius * e._protectionRadius,
                e;
        }
        return Object(Q.d)(t, i), t.prototype.defineDirection = function () {
            var t = this._player.x - vn.x, e = this._player.z - vn.z, i = vn.holder.moveSystem.physicBody.direction;
            return t * t + e * e < this._protectionRadiusSquared ? (this.zero.x = i.x, this.zero.y = i.y) : (this.zero.x = i.x * this._protectionForward - t,
                this.zero.y = i.y * this._protectionForward - e, this.zero.normalize()), tr([ir(this._player, this.separationDir), this.zero], this.averageDir);
        }, t;
    }(Yn), fr = function (n) {
        function t(t, e) {
            var i = n.call(this) || this;
            i._opponentSqrtDistanceDetection = 25, i.dir = new hn(), i.normalized1 = new hn(),
                i.vector2 = new hn();
            return i._delayer = new Jn(.2), i._protectionRadius = 2 + 2 * Math.random(), i._protectionRadiusSquare = i._protectionRadius * i._protectionRadius,
                i._player = t, i._opponentPlayers = e, i;
        }
        return Object(Q.d)(t, n), t.prototype.defineDirection = function () {
            var t = this._player.moveSystem.physicBody;
            this.vector2.x = this._player.x + -3 * t.direction.x, this.vector2.y = this._player.z + -3 * t.direction.y;
            var e = rr(this._opponentPlayers, this.vector2.x, this.vector2.y), i = e.x - this.vector2.x, n = e.z - this.vector2.y;
            if (i * i + n * n < this._opponentSqrtDistanceDetection) return er(this._player, e, this.dir);
            if (i = vn.x - this.vector2.x, n = vn.z - this.vector2.y, this.normalized1.x = i,
                this.normalized1.y = n, this.normalized1.normalize(), i * i + n * n < this._protectionRadiusSquare && vn.holder) {
                var r = vn.holder.moveSystem.physicBody.direction;
                this.dir.x = -this.normalized1.x + r.x, this.dir.y = -this.normalized1.y + r.y,
                    this.dir.normalize();
            } else this.dir.x = this.normalized1.x, this.dir.y = this.normalized1.y;
            return this.dir;
        }, t;
    }(Yn), yr = function (n) {
        function t(t, e) {
            var i = n.call(this) || this;
            return i._delayer = new Jn(0), i._dir = new hn(), i._player = t, i;
        }
        return Object(Q.d)(t, n), t.prototype.setCaracsData = function (t) {
            this._delayer.setUpdateDelay(un(t.celebrationGoal.reactionTime));
        }, t.prototype.defineDirection = function () {
            if (this._delayer.update()) {
                var t = er(this._player, vn, this._dir);
                2 === this._player.team ? (this._delayer.lastDirection.x = t.x, this._delayer.lastDirection.y = t.y) : tr([t, ir(this._player)], this._delayer.lastDirection);
            }
            return this._delayer.lastDirection;
        }, t;
    }(Yn), vr = function (n) {
        function t(t, e) {
            var i = n.call(this) || this;
            return i._delayer = new Jn(0), i.towardVec = new hn(), i.separation = new hn(),
                i._player = t, i._opponentPlayers = e, i;
        }
        return Object(Q.d)(t, n), t.prototype.setCaracsData = function (t) {
            this._delayer.setUpdateDelay(un(t.bumpNearestToBall.reactionTime));
        }, t.prototype.defineDirection = function () {
            if (this._delayer.update()) {
                var t = this._opponentPlayers[0], e = er(this._player, rr(this._opponentPlayers, t.x, t.z), this.towardVec), i = ir(this._player, this.separation);
                0 !== i.x && 0 !== i.y ? tr([e, i], this._delayer.lastDirection) : (this._delayer.lastDirection.copy(e),
                    this._delayer.lastDirection.normalize());
            }
            return this._delayer.lastDirection;
        }, t;
    }(Yn), gr = function () {
        function t() {
            this.stateList = [], this.stateList[0] = new Qn(), this._currentState = this.stateList[0];
        }
        return Object.defineProperty(t.prototype, "currentState", {
            get: function () {
                return this._currentState;
            },
            set: function (t) {
                this._currentState = t;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.updateCaracsData = function (t) {
            for (var e = 0; e < this.stateList.length; ++e) this.stateList[e].setCaracsData(t);
        }, t.prototype.initialize = function (t, e) {
            var i = Ur.getPlayersFrom(t.team), n = Ur.getPlayersFrom(1 != t.team ? 1 : 2);
            this.stateList[1] = new sr(t, n), this.stateList[2] = new cr(t), this.stateList[3] = new ur(t),
                this.stateList[5] = new hr(t), this.stateList[4] = new lr(t), this.stateList[6] = new pr(t),
                this.stateList[7] = new dr(t), this.stateList[8] = new fr(t, n), this.stateList[9] = new yr(t, n),
                this.stateList[10] = new vr(t, n);
            for (var r = 0; r < this.stateList.length; ++r) this.stateList[r].setCaracsData(e),
                this.stateList[r].setAllyPlayers(i);
        }, t;
    }(), mr = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t._sqrDeadZone = 0, t;
        }
        return Object(Q.d)(t, e), t.prototype.updateData = function (t, e) {
            this._behaviourData = e, this._caracsData = t, this._behaviourFSM.updateCaracsData(t);
        }, t.prototype.initialize = function (t, e) {
            this._behaviourData = e, this._caracsData = t, this._behaviourFSM = new gr(), this._behaviourFSM.initialize(this.owner, this._caracsData);
        }, t.prototype.onAwake = function () {
            this._player = this.owner;
        }, t.prototype.onStart = function () {
            this._sqrDeadZone = Math.pow(.03 * u, 2);
        }, t.prototype.getInputDirection = function () {
            var t = function (t, e, i, n) {
                if (t.isGuide) return n.defenceBehaviour;
                return 0 == e ? n.neutralBehaviour : e !== t.team ? n.defenceBehaviour : i ? n.ballHolderBehaviour : n.supportHolderBehaviour;
            }(this._player, vn.team, vn.isBallHolder(this._player), this._behaviourData);
            this._behaviourFSM.currentState = this._behaviourFSM.stateList[t];
            var e = this._behaviourFSM.currentState.defineDirection();
            this.clampDirectionInBound(e), this.event(Laya.Event.MOUSE_MOVE, e);
        }, t.prototype.clampDirectionInBound = function (t) {
            var e = $n.gameMap;
            this._player.x + t.x > e.innerMaxX && (t.x = -1), this._player.x + t.x < e.innerMinX && (t.x = 1),
                this._player.z + t.y > e.innerMaxZ && (t.y = -1), this._player.z + t.y > e.innerMinZ || (t.y = 1);
        }, t.prototype.onUpdate = function (t) {
            this.getInputDirection();
        }, t.prototype.onDestroy = function () { }, t;
    }(Wn);
    var br, wr, _r = function () {
        function t() { }
        return Object.defineProperty(t.prototype, "isStateStronger", {
            get: function () {
                return this.thisPlayer.moveState > this.collidedPlayer.moveState;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "isStateEqual", {
            get: function () {
                return this.thisPlayer.moveState == this.collidedPlayer.moveState;
            },
            enumerable: !0,
            configurable: !0
        }), t;
    }(), Sr = function () { }, Tr = function () {
        function t(t, e, i, n) {
            this.direction = new hn(), this.bumpDirection = new hn(), this.speed = t, this.bumpSpeed = e,
                this.direction.copy(i), this.bumpDirection.copy(n);
        }
        return t.prototype.calDirection = function (t) {
            return t || (t = new hn()), t.x = (this.direction.x * this.speed + this.bumpDirection.x * this.bumpSpeed) * ln.delta,
                t.y = (this.direction.y * this.speed + this.bumpDirection.y * this.bumpSpeed) * ln.delta,
                t.normalize(), t;
        }, t;
    }(), xr = new hn(), Lr = function () {
        function r() { }
        return r.createCollisionData = function (t, e, i) {
            var n = new _r();
            return n.thisPlayer = r.savePlayerData(t, i), n.collidedPlayer = r.savePlayerData(e, i),
                n.isHumanCollision = 2 != t.player.playerType || 2 != e.player.playerType, n;
        }, r.savePlayerData = function (t, e) {
            var i = new Sr();
            return i.playerType = t.player.playerType, i.position = t.position, i.moveState = t.moveState,
                i.velocity = new Tr(t.speed, t.bumpSpeed, t.direction, t.bumpDirection), i.isBoosterActive = 1 === i.playerType && t.isBoosterActive,
                i.isFrontCollision = r.isFrontCollision(e, t), i.isPlayerAttacking = i.isBoosterActive || i.isFrontCollision,
                i.isBallHolder = t.ballHolder, i;
        }, r.isFrontCollision = function (t, e) {
            return xr.x = t.x - e.position.x, xr.y = t.y - e.position.y, xr.normalize(), -.5 < e.direction.dot(xr);
        }, r.rotate = function (t, e) {
            if (t.rotationActive) {
                var i = e * t.angularSpeed;
                t.direction.x += (t.desiredDirection.x - t.direction.x) * i, t.direction.y += (t.desiredDirection.y - t.direction.y) * i,
                    t.direction.normalize(), t.player.rotation.y = Math.atan2(t.direction.y, -t.direction.x),
                    t.player.refreshRotation();
            }
        }, r.move = function (t, e) {
            t.movementActive && (r.accelerate(t, e), 3 == t.moveState ? (t.position.x += t.bumpDirection.x * t.bumpSpeed * e,
                t.position.y += t.bumpDirection.y * t.bumpSpeed * e) : 1 == t.moveState ? (t.position.x += t.bumpDirection.x * t.speed * e,
                    t.position.y += t.bumpDirection.y * t.speed * e) : (t.position.x += (t.direction.x * t.speed + t.bumpDirection.x * t.bumpSpeed) * e,
                        t.position.y += (t.direction.y * t.speed + t.bumpDirection.y * t.bumpSpeed) * e),
                t.player.x = t.position.x, t.player.z = t.position.y, t.player.refreshPosition());
        }, r.accelerate = function (t, e) {
            var i = t.speed < t.desiredSpeed, n = i ? t.acceleration : t.deceleration;
            !i && t.speed < 1 && (t.speed = 0), t.speed = cn(t.speed, t.desiredSpeed, n * e);
        }, r;
    }(), kr = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.totalFrame = 0, t.animationSpeed = 1, t._currentTime = 0, t.currentFrame = 0,
                t.animation = "run", t.angle = 0, t.loop = !0, t.alpha = 1, t.r = 1, t.g = 1, t.b = 1,
                t.type = 3, t;
        }
        return Object(Q.d)(t, e), t.prototype.playAnimation = function (t) {
            this.animation = t, this.setTotalFrame(function (t, e) {
                var i = In[t];
                return i ? i.getTotalFrame(e) : 0;
            }(this.atlas, this.animation));
        }, t.prototype.setTotalFrame = function (t) {
            this.totalFrame = t, this._currentTime = 0, this.currentFrame = 0;
        }, t.prototype.onUpdate = function (t) {
            this._currentTime += this.animationSpeed * t, this.follow && (this.x = this.follow.x,
                this.z = this.follow.z), this.loop ? this.currentFrame = Math.floor(this._currentTime) % this.totalFrame : (this.currentFrame = Math.floor(this._currentTime),
                    this.currentFrame >= this.totalFrame && (this.currentFrame = this.totalFrame - 1,
                        this.release()));
        }, t.prototype.onDispose = function () {
            this.follow = null;
        }, t.prototype.release = function () {
            this.dispose();
        }, t;
    }(Wi), Or = [], Ir = 0;
    function Dr(t, e, i, n) {
        var r = function () {
            var t;
            return 0 < Ir ? (t = Or[Ir - 1], Or[--Ir] = null) : t = new Cr(), t;
        }();
        return n && (r.r = n.x, r.g = n.y, r.b = n.z), r.playAnimation(i), r.alpha = 1,
            r.speed = .01, r.x = t, r.y = 1.2, r.z = e, r;
    }
    (wr = br || (br = {})).dodge = "dodge", wr.nopower = "nopower";
    var Cr = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.speed = .01, t.atlas = "tip", t.model = "tip", t.meshGroupKey = "tip_tip",
                t.animationSpeed = 0, t;
        }
        return Object(Q.d)(t, e), t.prototype.onUpdate = function (t) {
            this.y += .3 * t, this.alpha -= this.speed, this.alpha <= 0 && (this.alpha = 0,
                this.release());
        }, t.prototype.release = function () {
            $n.removeEntity(this), this.alpha = 1, function (t) {
                100 < Ir ? t.dispose() : (Or[Ir] = t, Ir++);
            }(this);
        }, t;
    }(kr), Er = new hn(), Pr = new hn(), Br = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t._velocity = new hn(), t.collisionActive = !0, t.rotationActive = !0, t._movementActive = !0,
                t.speed = 0, t._desiredSpeed = 0, t._angularSpeed = 0, t.position = new hn(), t.radius = .5,
                t.direction = new hn(), t.desiredDirection = new hn(), t.bumpSpeed = 0, t.bumpDirection = new hn(),
                t.acceleration = 1, t.deceleration = 1, t.minSpeed = 0, t.maxSpeed = 1, t.overallMaxSpeed = 1,
                t.maxSpeedWithBall = 1, t.readOnlyMaxSpeed = 1, t.minAngularSpeed = 0, t.maxAngularSpeed = 10,
                t.dodge = 0, t.dodgeTime = 0, t.stamina = 0, t.bumpPower = 1, t.bumpScale = 1, t.defaultStamina = 0,
                t.lightBumpStrength = 1.2, t.strongBumpStrength = 2, t.ySpeed = 1, t.yAcceleration = 2,
                t.ragdollDelta = 0, t.ragdollSpeed = 5, t.ragdollMaxY = 0, t.shootSpeed = 0, t.extraPropLevels = [0, 0, 0, 0],
                t;
        }
        return Object(Q.d)(t, e), t.prototype.onAwake = function () {
            var t = this;
            e.prototype.onAwake.call(this), this.player = this.owner, this.position.x = this.player.x,
                this.position.y = this.player.z, Object(m.a)(function () {
                    t.onGamePhaseChanged(Hi.currentPhase);
                });
        }, t.prototype.setGuide = function () {
            this.bumpPower = 0, this.stamina = 0;
        }, t.prototype.resumeStamina = function () {
            this.stamina = this.defaultStamina, this.bumpScale = 1, this.dodgeTime = 0;
        }, t.prototype.toShootState = function () {
            Hi.changePhase(4);
        }, t.prototype.onGamePhaseChanged = function (t) {
            var e = this;
            if (vn.holder === this.player) switch (t) {
                case 3:
                    this.shootSpeed = this.speed, this.moveState = 0, this.movementActive = !1, this.collisionActive = !1,
                        this.rotationActive = !0, this.speed = 0, this.desiredSpeed = 0;
                    var i = vn.shootPos, n = i.x - this.position.x, r = i.z - this.position.y;
                    this.desiredDirection.x = n, this.desiredDirection.y = r, this.desiredDirection.normalize(),
                        this.angularSpeed = this.maxAngularSpeed;
                    var o = Math.atan2(this.desiredDirection.y, -this.desiredDirection.x), s = Math.min(300, 1e3 * Math.abs(o - this.player.rotation.x) / this.angularSpeed);
                    setTimeout(function () {
                        e.moveState = 7, e.invoke("toShootState", .22);
                    }, s);
                    break;

                case 4:
                    this.movementActive = !1, this.collisionActive = !1, this.direction.x = vn.shootPos.x - this.position.x,
                        this.direction.y = vn.shootPos.z - this.position.y, this.direction.normalize(),
                        this.player.rotation.y = Math.atan2(this.direction.y, -this.direction.x), this.player.refreshRotation(),
                        setTimeout(function () {
                            vn.shoot();
                        }, 380);
                    break;

                case 5:
                    this.movementActive = !1, this.collisionActive = !1;
            }
        }, t.prototype.updateData = function (t, e) {
            this._moveCaracs = t, this.minAngularSpeed = t.angularSpeedMin, this.maxAngularSpeed = t.angularSpeedMax,
                this.minSpeed = 0, this.deceleration = t.deceleration, this.lightBumpStrength = e.lightBumpStrength,
                this.strongBumpStrength = e.strongBumpStrength, this.refreshProps();
        }, t.prototype.refreshProps = function () {
            if (this.dodge = 0, this.maxSpeedWithBall = this._moveCaracs.maxSpeedWithBall, this.maxSpeed = this._moveCaracs.maxSpeed,
                this.player.aiInfo) {
                var t = bt.getRealSpeed(this.extraPropLevels[Ht.moveSpeed] + this.player.aiInfo.propLevels[Ht.moveSpeed]);
                0 < t && (this.maxSpeed *= 1 + t, this.maxSpeedWithBall *= 1 + t);
                var e = bt.getRealCrit(this.extraPropLevels[Ht.crit] + this.player.aiInfo.propLevels[Ht.crit]);
                0 < e && (this.dodge = e);
            }
            this.readOnlyMaxSpeed = this.maxSpeed, this.overallMaxSpeed = this.maxSpeed, 1 === this.player.playerType && (this.maxSpeedWithBall *= 1 + Ps.holdBallSpeedAdd);
            var i = this.getPowerLevel(), n = Ur.getPlayersFrom(1 === this.player.team ? 2 : 1)[0], r = 0;
            n.moveSystem && n.moveSystem.physicBody && (r = n.moveSystem.physicBody.getPowerLevel());
            var o = 0;
            if (i < r) o = 0; else for (var s = Math.abs(i - r), a = 0; a < dt.powerOffset.length; a++) if (s <= dt.powerOffset[a]) {
                o = a;
                break;
            }
            switch (Pa.fightCount <= 3 && (2 === this.player.team && (o = 0), 1 === this.player.team && o < 1 && (o = 1)),
            o) {
                case 2:
                    this.bumpPower = 3, this.stamina = 3;
                    break;

                case 1:
                    this.bumpPower = 2, this.stamina = 2;
                    break;

                default:
                    this.bumpPower = 1, this.stamina = 1;
            }
            1 === this.player.playerType && (this.bumpPower *= 1.2, this.stamina = 1 / 0), this.defaultStamina = this.stamina;
        }, t.prototype.getPowerLevel = function () {
            var t = this.extraPropLevels[Ht.power];
            return this.player.aiInfo && (t += this.player.aiInfo.propLevels[Ht.power]), 1 === this.player.team ? t += dt.powerInit : Pa.fightCount <= 3 && (t = dt.powerInitForNew),
                t;
        }, t.prototype.resetExtraPropLevels = function () {
            this.extraPropLevels = [0, 0, 0, 0];
        }, t.prototype.refreshExtraPropLevels = function (t) {
            for (var e = 0; e < this.extraPropLevels.length; e++) this.extraPropLevels[e] = t;
            this.refreshProps();
        }, t.prototype.initialize = function (t, e) {
            this.updateData(t, e), this.player.on("moveStateChange", this, this.onStateChanged);
        }, Object.defineProperty(t.prototype, "movementActive", {
            get: function () {
                return this._movementActive;
            },
            set: function (t) {
                this._movementActive = t, this.event("movementActive", t);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "velocity", {
            get: function () {
                return this._velocity.x = (this.direction.x * this.speed + this.bumpDirection.x * this.bumpSpeed) * ln.delta,
                    this._velocity.y = (this.direction.y * this.speed + this.bumpDirection.y * this.bumpSpeed) * ln.delta,
                    this._velocity;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "desiredSpeed", {
            get: function () {
                return this._desiredSpeed;
            },
            set: function (t) {
                this._desiredSpeed = an(t, this.minSpeed, this.maxSpeed);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "angularSpeed", {
            get: function () {
                return this._angularSpeed = an(this.maxAngularSpeed - (this.minAngularSpeed + this.speed * (this.maxAngularSpeed - this.minAngularSpeed) / (this.maxSpeed - this.minSpeed)), this.minAngularSpeed, this.maxAngularSpeed),
                    this._angularSpeed;
            },
            set: function (t) {
                this._angularSpeed = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "moveState", {
            get: function () {
                return this.player.moveState;
            },
            set: function (t) {
                this.player.moveState = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ballHolder", {
            get: function () {
                return vn.isBallHolder(this.player);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "canDodge", {
            get: function () {
                return this.dodge > Math.random();
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "isBoosterActive", {
            get: function () {
                return this.player.moveSystem.bumpBooster.isActive;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.onStateChanged = function (t) {
            if (this.moveState != t) switch (t) {
                case 0:
                    this.maxSpeed = this.readOnlyMaxSpeed, this.rotationActive = !0, this.collisionActive = !0,
                        this.movementActive = !0;
                    break;

                case 1:
                    this.collisionActive = !1, this.rotationActive = !1, this.movementActive = !0;
                    break;

                case 3:
                    this.rotationActive = !1, this.collisionActive = !1;
                    break;

                case 4:
                    this.rotationActive = !0, this.collisionActive = !0, this.minSpeed = 0, this.maxSpeed = this.maxSpeedWithBall,
                        this.acceleration = this._moveCaracs.accelerationWithBall, this.minAngularSpeed = this._moveCaracs.angularSpeedWithBall,
                        this.maxAngularSpeed = this._moveCaracs.angularSpeedWithBall, this.bumpSpeed = 0,
                        this.player.moveSystem.bumpBooster.isActive && this.player.moveSystem.bumpBooster.reset();
                    break;

                case 5:
                    this.rotationActive = !0, this.collisionActive = !0, this.maxSpeed = this.readOnlyMaxSpeed,
                        this.acceleration = this._moveCaracs.acceleration, this.angularSpeed = this._moveCaracs.angularSpeedMin,
                        this.maxAngularSpeed = this._moveCaracs.angularSpeedMax, this.bumpSpeed = 0;
                    break;

                case 6:
                    this.rotationActive = !0, this.collisionActive = !0, this.minSpeed = 0, this.maxSpeed = this.readOnlyMaxSpeed,
                        this.acceleration = this._moveCaracs.acceleration, this.minAngularSpeed = this._moveCaracs.angularSpeedMin,
                        this.maxAngularSpeed = this._moveCaracs.angularSpeedMax, this.bumpSpeed = 0;
                    break;

                case 7:
                    this.collisionActive = !1, this.rotationActive = !1, this.movementActive = !1;
                    break;

                default:
                    this.rotationActive = !1, this.collisionActive = !1, this.movementActive = !1;
            }
        }, t.prototype.onUpdate = function (t) {
            Hi.currentPhase < 3 && this.collisionDetection(t, this.radius, this._velocity.length),
                Lr.rotate(this, t), Lr.move(this, t), 1 === this.moveState || 2 === this.moveState ? (this.ragdollDelta += t,
                    this.player.y = this.ragdollDelta * (this.ySpeed - this.yAcceleration * this.ragdollDelta * .5),
                    this.player.y < 0 && (this.player.y = 0, this.ragdollSpeed = 0), this.player.refreshPosition(),
                    this.player.y > this.ragdollMaxY && (this.ragdollMaxY = this.player.y), 0 !== this.ragdollSpeed && (this.player.rotation.y += t * this.ragdollSpeed,
                        this.player.refreshRotation()), .1 < this.ragdollMaxY && this.player.y < .1 && 2 !== this.moveState && (this.moveState = 2)) : this.checkLimit();
        }, t.prototype.checkLimit = function () {
            var t = $n.gameMap;
            this.player.x < t.minX ? jr(this.player, {
                x: t.minX,
                z: this.player.z
            }, 10) : this.player.x > t.maxX && jr(this.player, {
                x: t.maxX,
                z: this.player.z
            }, 10), this.player.z < t.minZ ? jr(this.player, {
                z: t.minZ,
                x: this.player.x
            }, 10) : this.player.z > t.maxZ && jr(this.player, {
                z: t.maxZ,
                x: this.player.x
            }, 10);
        }, t.prototype.reset = function () {
            this.cleanInvokes(), this.speed = 0, this.desiredSpeed = 0, this.bumpSpeed = 0,
                this.bumpDirection.copy(this.direction), this.resumeStamina();
        }, t.prototype.collisionDetection = function (t, e, i) {
            if (this.collisionActive) for (var n = e + i, r = 2 * e + i, o = r * r, s = n * n, a = Ur.getPlayersFrom(1 === this.player.team ? 2 : 1), c = 0; c < a.length; ++c) {
                var u = a[c].moveSystem.physicBody;
                if (u && u.collisionActive) {
                    var h = u.position.x - this.position.x, l = u.position.y - this.position.y, p = h * h + l * l;
                    if (!(s < p)) {
                        var d = .5 * Math.sqrt(p);
                        e < d && (d = e), Er.x = h, Er.y = l;
                        var f = this.velocity;
                        if (p <= o || f.angle(Er) <= 30) {
                            Er.normalize(), Pr.x = this.position.x + Er.x * d, Pr.y = this.position.y + Er.y * d;
                            var y = Lr.createCollisionData(this, u, Pr), v = Lr.createCollisionData(u, this, Pr), g = !u.isDodge;
                            g && u.calStamina(this, v);
                            var m = !this.isDodge;
                            m && this.calStamina(u, y), g && u.onCollision(this, v), (1 === u.moveState || m) && this.onCollision(u, y),
                                this.checkFootBall(u);
                            break;
                        }
                    }
                }
            }
        }, Object.defineProperty(t.prototype, "isDodge", {
            get: function () {
                return 0 < this.dodgeTime && this.dodgeTime > ln.curTime;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "isHuman", {
            get: function () {
                return 1 === this.player.playerType || 3 === this.player.playerType;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.calStamina = function (t, e) {
            0 === this.bumpPower ? this.bumpScale = 1 : this.bumpScale = Math.max(.5, Math.min(1.5, 1.5 * t.bumpPower / this.bumpPower));
            var i = 0;
            i = t.isHuman && vn.holder === t.player ? .5 * t.bumpPower : t.isBoosterActive ? 10 : t.bumpPower,
                e.thisPlayer.isFrontCollision ? e.collidedPlayer.isFrontCollision || (i *= .8) : i *= 2,
                this.stamina -= i;
        }, t.prototype.checkFootBall = function (t) {
            this.isHuman ? vn.holder === t.player ? t.stamina <= 0 && this.setBallHolder() : vn.holder === this.player && (1 < t.stamina ? t.setBallHolder() : 0 < t.stamina && (vn.holder = null)) : vn.holder === t.player ? t.stamina <= 0 && 0 < this.stamina && this.setBallHolder() : vn.holder === this.player && 0 < t.stamina && this.stamina <= 0 && t.setBallHolder();
        }, t.prototype.setBallHolder = function () {
            vn.holder = this.player, this.player.moveSystem.bumpBooster.reset(), this.moveState = 4;
        }, t.prototype.onCollision = function (t, e) {
            if (this.onBumpFromAnyDirection(e), this.isHuman && this.isBoosterActive) this.onBumpFrontSuper(e); else {
                if (this.stamina <= 0) {
                    if (this.bumpPower < t.bumpPower) {
                        var i = Dr(this.position.x, this.position.y, br.nopower);
                        $n.addEntity(i);
                    }
                    return this.onBumpBack(e), void this.onBumpFailure(e);
                }
                t.stamina <= 0 ? this.onBumpFrontSuper(e) : t.isHuman ? this.onBumpFrontSuper(e) : (this.onBumpFrontInferior(e),
                    this.onBumpFailure(e));
            }
        }, t.prototype.onTackleResult = function (t, e) {
            this.event("onTackleResult", {
                collisionData: t,
                tackleResult: e
            });
        }, t.prototype.onBumpFromAnyDirection = function (t) {
            this.event("onCollisionAnyDirection", t), 1 == this.player.playerType && bn.shake();
        }, t.prototype.onBumpFrontSuper = function (t) {
            this.checkBallInterception(t, this.player.playerType);
        }, t.prototype.onBumpFrontInferior = function (t) {
            switch (this.player.playerType) {
                case 1:
                case 3:
                case 2:
                    this.onBump(this.lightBumpStrength, 3);
            }
            t.collidedPlayer.velocity.calDirection(this.bumpDirection);
        }, t.prototype.onBump = function (t, e) {
            if (this.canDodge) {
                this.dodgeTime = ln.curTime + 500;
                var i = Dr(this.position.x, this.position.y, br.dodge);
                $n.addEntity(i);
            } else this.bumpSpeed = t * this.bumpScale, this.moveState = e;
        }, t.prototype.onBumpBack = function (t) {
            switch (this.speed = 0, t.collidedPlayer.velocity.calDirection(this.bumpDirection),
            this.player.playerType) {
                case 1:
                case 3:
                    this.onBump(this.lightBumpStrength, 3);
                    break;

                case 2:
                    this.onBump(this.strongBumpStrength, 1);
            }
        }, t.prototype.onBumpSuccess = function (t, e) {
            this.onTackleResult(t, e);
        }, t.prototype.onBumpFailure = function (t) {
            this.onTackleResult(t, 3);
        }, t.prototype.checkBallInterception = function (t, e) {
            if (!(3 <= Hi.currentPhase)) return t.collidedPlayer.isBallHolder ? (0 < this.stamina && (this.event("onBallInterception", {
                collisionData: t,
                interceptorType: e
            }), this.onBumpSuccess(t, 1)), !0) : (this.onBumpSuccess(t, 1), !1);
        }, t.prototype.setUpRagDoll = function () {
            this.ragdollDelta = 0, this.ragdollMaxY = 0, this.ySpeed = T.movement.rogdollSpeed * Math.max(.5, this.speed / this.maxSpeed),
                this.yAcceleration = T.movement.rogdollAcceleration, this.ragdollSpeed = (Math.random() - .5) * this.ySpeed;
        }, t;
    }(Wn);
    function jr(t, e, i) {
        t.moveSystem.physicBody.bumpDirection.x = e.x - t.x, t.moveSystem.physicBody.bumpDirection.y = e.z - t.z,
            t.moveSystem.physicBody.bumpDirection.normalize(), t.moveSystem.physicBody.bumpSpeed = i,
            t.moveState = 3;
    }
    var Ar = function () {
        function t(t, e) {
            this.duration = 0, this.physicBody = t, this.boostSpeed = e;
        }
        return t.prototype.active = function (t) {
            this.duration = t, this.physicBody.speed = this.boostSpeed;
        }, t.prototype.update = function (t) {
            this.duration -= t, this.duration < 0 && (this.duration = 0);
        }, Object.defineProperty(t.prototype, "isActive", {
            get: function () {
                return 0 < this.duration;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.reset = function () {
            this.duration = 0;
        }, t;
    }(), Mr = function (e) {
        function t() {
            return e.call(this) || this;
        }
        return Object(Q.d)(t, e), t.prototype.onAwake = function () {
            this._player = this.owner, this.physicBody = this._player.getScript(Br), this._moveSystem = this._player.moveSystem;
        }, t.prototype.setBumpBooster = function (t) {
            this.bumpBoosterData = t;
        }, t.prototype.initialize = function (t) {
            this.bumpBoosterData = t, 1 === this._player.playerType ? this._controller = this._player.getScript(qn) : this._controller = this._player.getScript(mr),
                1 === this._player.playerType && (this._controller.on(Laya.Event.MOUSE_MOVE, this, this.onDirectionReceived),
                    this._controller.on(Laya.Event.MOUSE_UP, this, this.onInputUp)), this._player.on("moveStateChange", this, this.onStateChanged),
                this.physicBody.on("onCollisionAnyDirection", this, this.onCollisionFromAnyDirection),
                1 === this._player.playerType && this.initDirectionArrow(), this.initParticles();
        }, t.prototype.initParticles = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e, i, n, r;
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return R && 1 !== this._player.playerType && 3 !== this._player.playerType ? [3, 2] : (e = this,
                                [4, Xi("running")]);

                        case 1:
                            e._fxRunning = t.sent(), this._fxRunning.active = !1, this._player.skin.addChild(this._fxRunning),
                                t.label = 2;

                        case 2:
                            return R && 1 !== this._player.playerType && 3 !== this._player.playerType ? [3, 4] : (i = this,
                                [4, Xi("sprint")]);

                        case 3:
                            i._fxSprinting = t.sent(), this._fxSprinting.active = !1, this._player.skin.addChild(this._fxSprinting),
                                t.label = 4;

                        case 4:
                            return R ? [3, 6] : (n = this, [4, Xi("collision")]);

                        case 5:
                            n._fxCollision = t.sent(), this._fxCollision.active = !1, this._player.skin.addChild(this._fxCollision),
                                t.label = 6;

                        case 6:
                            return 1 !== this._player.playerType && 3 !== this._player.playerType ? [3, 8] : (r = this,
                                [4, Xi("overSpeed")]);

                        case 7:
                            r._fxBoosting = t.sent(), this._fxBoosting.active = !1, this._player.skin.addChild(this._fxBoosting),
                                t.label = 8;

                        case 8:
                            return [2];
                    }
                });
            });
        }, t.prototype.initDirectionArrow = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e, i, n, r, o, s, a, c;
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this._directionArrow = new Laya.Sprite3D(), this._player.skin.addChild(this._directionArrow),
                                [4, qi("dlc/textures/rond_2.png")];

                        case 1:
                            return e = t.sent(), (i = new Laya.BlinnPhongMaterial()).renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT,
                                i.albedoTexture = e, n = Laya.PrimitiveMesh.createQuad(1, 1), (r = new Laya.MeshSprite3D(n)).meshRenderer.material = i,
                                r.transform.localRotationEulerX = -90, r.transform.localPosition = new Laya.Vector3(0, .1, 0),
                                this._directionArrow.addChild(r), [4, qi("dlc/textures/fleche.png")];

                        case 2:
                            return o = t.sent(), (s = new Laya.BlinnPhongMaterial()).renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT,
                                s.albedoTexture = o, a = Laya.PrimitiveMesh.createQuad(.8, .8 * .53), (c = new Laya.MeshSprite3D(a)).meshRenderer.material = s,
                                c.transform.localRotationEulerX = -90, c.transform.localRotationEulerY = 90, c.transform.localPosition = new Laya.Vector3(-.7, .1, 0),
                                this._directionArrow.addChild(c), this._directionArrow.transform.localRotationEulerY = this._player.rotation.y,
                                [2];
                    }
                });
            });
        }, t.prototype.onInputUp = function () {
            this._directionArrow && (this._directionArrow.active = !1);
        }, t.prototype.onDirectionReceived = function (t) {
            2 == Hi.currentPhase && 1 == this._player.playerType && this.arrowRotation();
        }, t.prototype.onCollisionFromAnyDirection = function (t) {
            this.playCollision();
        }, t.prototype.hideCollision = function () {
            this._fxCollision && (this._fxCollision.active = !1);
        }, t.prototype.playCollision = function () {
            R || this._fxCollision && (this._fxCollision.active = !0, Laya.timer.clear(this, this.hideCollision),
                Laya.timer.once(500, this, this.hideCollision));
        }, t.prototype.hideRunning = function () {
            this._fxRunning && (this._fxRunning.active = !1);
        }, t.prototype.onStateChanged = function (t) {
            if (t != this._player.moveState) switch (t) {
                case 0:
                case 2:
                    this._fxRunning && (this._fxRunning.active = !1), this._fxSprinting && (this._fxSprinting.active = !1);
                    break;

                case 1:
                    this._fxRunning && (this._fxRunning.active = !0), this._fxSprinting && (this._fxSprinting.active = !1);
                    break;

                case 3:
                    this._fxRunning && (this._fxRunning.active = !1), this._fxSprinting && (this._fxSprinting.active = !1);
                    break;

                case 4:
                    this._fxRunning && (this._fxRunning.active = !0), this._fxSprinting && (this._fxSprinting.active = !0);
                    break;

                case 5:
                    this._fxRunning && (this._fxRunning.active = !0), this._fxSprinting && (this._fxSprinting.active = !1);
                    break;

                case 6:
                    this._fxRunning && (this._fxRunning.active = !0), this._fxSprinting && (this._fxSprinting.active = !0);
                    break;

                case 7:
                    this._fxRunning && (this._fxRunning.active = !1), this._fxSprinting && (this._fxSprinting.active = !1);
            }
        }, t.prototype.arrowRotation = function () {
            this._directionArrow && (this._directionArrow.active = !0, this._directionArrow.transform.localRotationEulerY = this._player.rotation.y);
        }, t.prototype.reset = function () {
            Laya.timer.clear(this, this.hideCollision), this._fxRunning && (this._fxRunning.active = !1),
                this._fxSprinting && (this._fxSprinting.active = !1), this._fxBoosting && (this._fxBoosting.active = !1),
                this._fxCollision && (this._fxCollision.active = !1);
        }, t.prototype.onUpdate = function (t) {
            e.prototype.onUpdate.call(this, t), this._fxBoosting && (this._fxBoosting.active = this._moveSystem.bumpBooster.isActive);
        }, t;
    }(Wn), Rr = function (e) {
        function t() {
            return e.call(this) || this;
        }
        return Object(Q.d)(t, e), t.prototype.onAwake = function () {
            this._player = this.owner, this._skin = this._player.skin, this._physicBody = this._player.getScript(Br);
        }, t.prototype.setStateTransitionData = function (t) {
            this._stateTransitionData = t, this._idleDuration = 0;
        }, t.prototype.onUpdate = function (t) {
            e.prototype.onUpdate.call(this, t), this.defineAnimation(t);
        }, t.prototype.defineAnimation = function (t) {
            switch (this._physicBody.moveState) {
                case 2:
                    if ("dead" !== this._skin.curAction) {
                        var e = this._player.getScript(Mr);
                        e && (e.hideRunning(), e.playCollision());
                    }
                    this.playAction("dead", !1);
                    break;

                case 1:
                    this.playAction("ragdoll", !0);
                    break;

                case 3:
                    this.playAction("hit", !1);
                    break;

                case 7:
                    this.playAction("shoot", !1);
                    break;

                case 8:
                    this.playAction("backflip", !1);
                    break;

                case 9:
                    this.playAction("dance", !0);
                    break;

                default:
                    var i = this._physicBody.ballHolder, n = void 0;
                    n = this._physicBody.speed > this._stateTransitionData.sprintSpeed && !i ? (this.playAction("spring", !0),
                        6) : this._physicBody.speed > this._stateTransitionData.idleSpeed ? (this.playAction(i ? "holder" : "run", !0, 1.2),
                            i ? 4 : 5) : (this.playAction("idle", !0), i ? 4 : 0), this._physicBody.moveState = n;
            }
        }, t.prototype.playAction = function (t, e, i) {
            void 0 === e && (e = !0), void 0 === i && (i = 1), this._skin.playAction(t, e, i);
        }, t;
    }(Wn), Nr = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.ragDollDuration = 0, t.sprintSpeed = 0, t;
        }
        return Object(Q.d)(t, e), Object.defineProperty(t.prototype, "moveState", {
            get: function () {
                return this._player.moveState;
            },
            set: function (t) {
                this._player.moveState = t;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.onDestroy = function () {
            e.prototype.onDestroy.call(this);
        }, t.prototype.onAwake = function () {
            this._player = this.owner, this.physicBody = this._player.getScript(Br), (this._player.moveSystem = this)._player.on("moveStateChange", this, this.onStateChanged),
                this.physicBody.on("onTackleResult", this, this.onTackleResult), this.physicBody.on("onBallInterception", this, this.onBallInterception);
        }, t.prototype.updateCharacterData = function (t) {
            this.stateDuration = t.stateDurationCaracs, this.ragDollDuration = this.stateDuration.ragDollDuration,
                this.sprintSpeed = t.stateTransitionCaracs.sprintSpeed, this.animatorController.setStateTransitionData(t.stateTransitionCaracs),
                this.physicBody.updateData(t.movementCaracs, t.bumpCaracs), this.bumpBooster.boostSpeed = t.bumpBoosterData.speed,
                this.fxController.setBumpBooster(t.bumpBoosterData), this.resetDirection();
        }, t.prototype.resetDirection = function () {
            1 === this._player.team ? this.physicBody.direction.setValue(0, -1) : this.physicBody.direction.setValue(0, 1),
                Lr.rotate(this.physicBody, 0);
        }, t.prototype.initialize = function (t, e) {
            this.stateDuration = e.stateDurationCaracs, this.ragDollDuration = this.stateDuration.ragDollDuration,
                this.animatorController = new Rr(), this._player.addScript(this.animatorController),
                this.animatorController.setStateTransitionData(e.stateTransitionCaracs), this.physicBody.movementActive = !1,
                this.physicBody.initialize(e.movementCaracs, e.bumpCaracs), this.bumpBooster = new Ar(this.physicBody, e.bumpBoosterData.speed),
                this.fxController = new Mr(), this._player.addScript(this.fxController), this.fxController.initialize(e.bumpBoosterData),
                this._controller = 1 === t ? this._player.getScript(qn) : this._player.getScript(mr),
                this._controller.on(Laya.Event.MOUSE_MOVE, this, this.onDirectionReceived), this._controller.on(Laya.Event.MOUSE_UP, this, this.onInputUp),
                this.resetDirection();
        }, t.prototype.onDirectionReceived = function (t) {
            2 == Hi.currentPhase && 3 !== this.moveState && 1 !== this.moveState && (this.physicBody.desiredSpeed = this.physicBody.maxSpeed,
                this.physicBody.desiredDirection.setValue(t.x, t.y));
        }, t.prototype.onInputUp = function () {
            this.physicBody.desiredDirection.setValue(0, 0), this.physicBody.desiredSpeed = 0;
        }, t.prototype.onBallInterception = function (t) {
            1 !== t.interceptorType && 3 !== t.interceptorType || this.event("onInterceptBall", this._player);
        }, t.prototype.onTackleResult = function (t) {
            1 != t.tackleResult && 0 != t.tackleResult || vn.holder !== this._player && this._player.isHuman && this.bumpBooster.active(dt.skillTime);
        }, t.prototype.onStateChanged = function (t) {
            if (!(3 <= Hi.currentPhase) && t != this.moveState) switch (t) {
                case 1:
                    if (vn.checkDropBall(this._player), this.physicBody.setUpRagDoll(), !this._player.isGuide) {
                        var e = lt.getDefById(Pa.grad), i = 1 === this._player.team ? e.reviveTime[0] : e.reviveTime[1], n = this.ragDollDuration * this.physicBody.bumpScale;
                        i = Math.max(i, n), this.invoke("resetAndReSpawn", i);
                    }
                    break;

                case 3:
                    vn.checkDropBall(this._player), this.invoke("reset", this.stateDuration.bumpDuration * this.physicBody.bumpScale);
            }
        }, t.prototype.resetAndReSpawn = function () {
            this.reset(), this._player.respawn();
        }, t.prototype.reset = function () {
            this.cleanInvokes(), this.physicBody.reset(), this.physicBody.movementActive = !0,
                this.physicBody.rotationActive = !0, this.physicBody.collisionActive = !0, 1 === this._player.team ? (this.physicBody.direction.setValue(0, -1),
                    this.physicBody.desiredDirection.setValue(0, -1)) : (this.physicBody.direction.setValue(0, 1),
                        this.physicBody.desiredDirection.setValue(0, 1)), this.bumpBooster.reset(), this.fxController.reset(),
                this._player.moveState = 0;
        }, t.prototype.onUpdate = function (t) {
            e.prototype.onUpdate.call(this, t), this.bumpBooster.update(t);
        }, t;
    }(Wn);
    function Vr(t, e) {
        return 0 != t ? 2 : 1 == e ? 1 : 2;
    }
    var Ur = new (function () {
        function t() {
            this._players = [], this._playerTeams = {}, this.isInitialized = !1;
        }
        return t.prototype.initialize = function () {
            var i = this;
            if (!this.isInitialized) {
                this.isInitialized = !0, Object(m.a)(function () {
                    i.onGamePhaseChanged(Hi.currentPhase);
                });
                var n = Pa.curSkin;
                Object(m.a)(function () {
                    if (n != Pa.curSkin) {
                        n = Pa.curSkin;
                        for (var t = i.getPlayersFrom(1), e = 0; e < t.length; ++e) t[e].skin.setSkin(n);
                    }
                });
            }
        }, t.prototype.removePlayers = function () {
            this._playerTeams = {};
            for (var t = 0; t < this._players.length; t++) {
                this._players[t].dispose();
            }
            this._players.length = 0;
        }, t.prototype.onGamePhaseChanged = function (t) {
            2 == t ? (this.shootPlayer = null, this.allowPlayersCollision(!0)) : 7 == t || 6 == t && this.setPlayersIdle();
        }, t.prototype.displayPlayers = function (t) {
            for (var e = 0; e < this._players.length; ++e) this._players[e].enable = t;
        }, t.prototype.allowPlayersCollision = function (t) {
            for (var e = 0; e < this._players.length; ++e) this._players[e].moveSystem.physicBody.collisionActive = t;
        }, t.prototype.allowPlayersMovement = function () {
            for (var t = 0; t < this._players.length; ++t) this._players[t].moveState = 0, this._players[t].moveSystem.physicBody.movementActive = !0;
        }, t.prototype.setPlayersIdle = function () {
            for (var t = 0; t < this._players.length; ++t) {
                var e = this._players[t];
                e.moveState = 0, e.moveSystem.physicBody.reset(), e.moveSystem.physicBody.movementActive = !1,
                    e.moveSystem.physicBody.rotationActive = !1, e.moveSystem.physicBody.collisionActive = !1,
                    e.y = 0, e.refreshPosition();
            }
        }, t.prototype.reset = function () {
            for (var t = 0; t < this._players.length; ++t) {
                var e = this._players[t];
                e.moveState = 0, e.respawn(), e.moveSystem.reset();
            }
        }, t.prototype.setupTeam = function (t, e) {
            this.createTeamWithTeamData(t), this.createTeamWithTeamData(e), this.addControllersWithTeamData(t),
                this.addControllersWithTeamData(e), this.hero = this.getPlayersFrom(1)[0];
        }, t.prototype.setupGuideTeam = function (t, e) {
            this.createGuideTeamWithTeamData(t), this.createGuideTeamWithTeamData(e), this.addControllersWithTeamData(t),
                this.addControllersWithTeamData(e), this.hero = this.getPlayersFrom(1)[0];
        }, t.prototype.updateTeams = function (t, e) {
            for (var i = this.getPlayersFrom(1), n = 0; n < i.length; ++n) {
                var r = i[n], o = t.players[n];
                if (r.setAiInfo(t.aiInfo), r.moveSystem.physicBody.resetExtraPropLevels(), r.moveSystem.updateCharacterData(o.moveCaracs),
                    1 !== r.playerType) r.getScript(mr).updateData(o.behaviourCaracs, o.behaviour);
            }
            i = this.getPlayersFrom(2);
            for (n = 0; n < i.length; ++n) {
                r = i[n], o = e.players[n];
                if (r.setAiInfo(e.aiInfo), r.moveSystem.physicBody.resetExtraPropLevels(), r.moveSystem.updateCharacterData(o.moveCaracs),
                    1 !== r.playerType) r.getScript(mr).updateData(o.behaviourCaracs, o.behaviour);
            }
        }, t.prototype.createGuideTeamWithTeamData = function (t) {
            this._playerTeams[t.team] = [];
            var e, i = $n.gameMap.spawns[t.team].concat();
            e = 1 === t.team ? i[2] : i[5];
            var n = Vr(0, t.team), r = this.createPlayerWithData(t, n, 0, e);
            2 === t.team && (r.enable = !1, r.isGuide = !0), this._players.push(r), this._playerTeams[t.team].push(r),
                $n.addEntity(r);
        }, t.prototype.createTeamWithTeamData = function (t) {
            this._playerTeams[t.team] = [];
            for (var e = $n.gameMap.spawns[t.team].concat(), i = t.players, n = 0; n < i.length; n++) {
                var r = void 0;
                r = 0 === n ? e[E([0, 1, 2, 3])] : E(e);
                var o = e.indexOf(r);
                0 <= o && e.splice(o, 1);
                var s = Vr(n, t.team), a = this.createPlayerWithData(t, s, n, r);
                this._players.push(a), this._playerTeams[t.team].push(a), $n.addEntity(a);
            }
        }, t.prototype.createPlayerWithData = function (t, e, i, n) {
            var r = this.setPlayer(t, e, i, n);
            return this.setHumanPlayer(r), r;
        }, t.prototype.setPlayer = function (t, e, i, n) {
            var r = new Kn();
            return r.aiInfo = t.aiInfo, r.team = t.team, r.playerType = e, r.isLeader = 0 === i,
                r.spawnPosition = n, r.setPosition(n.x, 0, n.z), r.refreshPosition(), r;
        }, t.prototype.setHumanPlayer = function (t) {
            1 == t.playerType && (this.hero = t, $n.mainCamera.player = this.hero);
        }, t.prototype.addControllersWithTeamData = function (t) {
            for (var e = this.getPlayersFrom(t.team), i = 0; i < e.length; ++i) this.addController(e[i], t.players[i]),
                this.addMoveSystem(e[i], t.players[i]);
        }, t.prototype.addController = function (t, e) {
            if (1 == t.playerType) t.addScript(new qn()); else {
                var i = new mr();
                t.addScript(i), i.initialize(e.behaviourCaracs, e.behaviour);
            }
        }, t.prototype.addMoveSystem = function (t, e) {
            var i = new Br();
            t.addScript(i);
            var n = new Nr();
            t.addScript(n), n.initialize(t.playerType, e.moveCaracs);
        }, t.prototype.getPlayersFrom = function (t) {
            return this._playerTeams[t];
        }, t.prototype.getPlayers = function () {
            return this._players;
        }, t;
    }())(), Gr = function () {
        this.defendTouchDown = T.behaviour.defendRestrictedArea, this.straightToBall = T.behaviour.straightToBall,
            this.bumpNearestToBall = T.behaviour.bumpNearestToBall, this.predictRushBallHolder = T.behaviour.predictRushBallHolder,
            this.dodgeNearestToSelf = T.behaviour.dodgeNearestToSelf, this.celebrationGoal = T.behaviour.celebrationGoal;
    }, zr = function () {
        this.bumpCaracs = T.bump, this.movementCaracs = T.movement, this.stateDurationCaracs = T.duration,
            this.stateTransitionCaracs = T.transition, this.bumpBoosterData = T.bumpBooster;
    }, Fr = function (t, e) {
        this.role = t, this.moveCaracs = new zr(), this.behaviourCaracs = new Gr(), this.behaviour = function (t, e) {
            return 1 === e ? {
                ballHolderBehaviour: 4,
                supportHolderBehaviour: 7,
                defenceBehaviour: 10,
                neutralBehaviour: 5,
                celebrationBehaviour: 9
            } : 1 === t ? {
                ballHolderBehaviour: E([4]),
                supportHolderBehaviour: E([7, 8]),
                defenceBehaviour: E([6]),
                neutralBehaviour: E([3]),
                celebrationBehaviour: E([9])
            } : {
                        ballHolderBehaviour: E([4]),
                        supportHolderBehaviour: E([7, 8]),
                        defenceBehaviour: E([1]),
                        neutralBehaviour: E([5]),
                        celebrationBehaviour: E([9])
                    };
        }(t, e);
    };
    var Hr = function () {
        function t(t, e) {
            this.attackers = [], this.defenders = [], this.team = t, this.aiInfo = e;
        }
        return t.prototype.initPlayers = function (t) {
            if (this.attackers = [], this.defenders = [], 1 === t) this.attackers[0] = new Fr(0, t); else for (var e = 0; e < 4; e++) this.attackers[e] = new Fr(0, t),
                this.defenders[e] = new Fr(1, t);
        }, Object.defineProperty(t.prototype, "players", {
            get: function () {
                return this.attackers.concat(this.defenders);
            },
            enumerable: !0,
            configurable: !0
        }), t;
    }(), $r = function () {
        function t() { }
        return t.prototype.start = function () { }, t.prototype.ready = function (t) { }, t.prototype.showReady = function () { },
            t.prototype.hideUI = function (t) { }, t.prototype.setDebug = function (t) { }, t.prototype.useSkill = function () { },
            t.prototype.revive = function () { }, t.prototype.onShoot = function (t) { }, t.prototype.onShootOver = function () { },
            t.prototype.onGameOver = function () { }, t.prototype.getResultInfo = function () {
                return null;
            }, t.prototype.forceQuit = function () { }, t.prototype.update = function (t) { }, t.prototype.destroy = function () { },
            t;
    }(), Kr = new (function () {
        function t() { }
        return t.prototype.initialize = function () {
            var t = this;
            Object(m.a)(function () {
                t.onGamePhaseChanged(Hi.currentPhase);
            });
        }, t.prototype.onGamePhaseChanged = function (t) {
            switch (Laya.Tween.clearAll(ln), t) {
                case 0:
                case 2:
                case 7:
                case 3:
                    ln.timeScale = 1;
                    break;

                case 4:
                    ln.timeScale = .07;
                    break;

                case 5:
                    break;

                case 6:
                    ln.timeScale = 1;
            }
        }, t;
    }())(), Wr = function () {
        function t() {
            this.interceptions = 0;
        }
        return t.prototype.reset = function () {
            this.interceptions = 0;
        }, t;
    }(), Xr = new (function () {
        function t() {
            this._isTracking = !1;
        }
        return t.prototype.initialize = function () {
            var t = this;
            this.playerTracking = new Wr(), this.aiPlayerTracking = new Wr(), this.teamATracking = new Wr(),
                this.teamBTracking = new Wr(), Object(m.a)(function () {
                    t.onGamePhaseChanged(Hi.currentPhase);
                });
        }, t.prototype.onGamePhaseChanged = function (t) {
            1 === t && (this.playerTracking.reset(), this.aiPlayerTracking.reset(), this.teamATracking.reset(),
                this.teamBTracking.reset(), this.trackPlayers());
        }, t.prototype.trackPlayers = function () {
            if (!this._isTracking) {
                this._isTracking = !0;
                for (var t = Ur.getPlayers(), e = 0; e < t.length; ++e) t[e].moveSystem.on("onInterceptBall", this, this.onInterceptBall);
            }
        }, t.prototype.getTeam = function (t) {
            return 1 == t ? this.teamATracking : this.teamBTracking;
        }, t.prototype.onInterceptBall = function (t) {
            this.getTeam(t.team).interceptions++, 1 === t.playerType ? this.playerTracking.interceptions++ : 3 === t.playerType && this.aiPlayerTracking.interceptions++;
        }, t;
    }())(), qr = Laya.WebGLContext, Yr = function () {
        function e() { }
        return e.checkGL = function () {
            var t = Laya.WebGL.mainContext;
            e.maxVertexUniformLength = t.getParameter(qr.MAX_VERTEX_UNIFORM_VECTORS), e.supportEct1 = !N() && null !== qr._getExtension(t, "WEBGL_compressed_texture_etc1"),
                e.supportPvrtc = N() && null !== qr._getExtension(t, "WEBGL_compressed_texture_pvrtc");
        }, e.maxVertexUniformLength = 128, e.supportEct1 = !1, e.supportPvrtc = !1, e;
    }(), Qr = new (function () {
        function t() {
            this._openDataInterval = 0, this.scoreTeamA = 0, this.scoreTeamB = 0, this.isStop = !1;
        }
        return t.prototype.initialize = function () {
            var e = this;
            Un(Yr.maxVertexUniformLength), ln.setCurTime(ie.curTime), $n.initialize(), Kr.initialize(),
                Io.initialize(), Xr.initialize(), vn.on("onTouchRestrictedArea", this, this.onTouchRestrictedArea),
                vn.on("onShootInGoalArea", this, this.onShooted), this._openDataInterval = R ? 4 : 2,
                this.maxDt = 50, this._updateBind = this.update.bind(this), requestAnimationFrame(function (t) {
                    e.last = t, requestAnimationFrame(e._updateBind);
                }), Object(m.a)(function () {
                    e.onGamePhaseChanged(Hi.currentPhase);
                }),
                //  wx.onShow(function() {
                //     e.isStop = !1;
                // }), 
                // wx.onHide(function() {
                //     e.isStop = !0;
                // }),
                $n.initGameMap();
        }, t.prototype.scoreShoot = function (t) {
            1 == t.team ? ++this.scoreTeamA : ++this.scoreTeamB, Io.gameMode.onShoot(t);
        }, t.prototype.resetScore = function () {
            this.scoreTeamA = 0, this.scoreTeamB = 0;
        }, t.prototype.resetScene = function () {
            vn.reset(), Ur.reset();
        }, t.prototype.onTouchRestrictedArea = function (t) {
            this.transitionTo(3);
        }, t.prototype.onShooted = function (t) {
            Ur.shootPlayer = t.holder, this.scoreShoot(t.holder), this.transitionTo(5);
        }, t.prototype.transitionTo = function (t) {
            switch (t) {
                case 3:
                    Hi.changePhase(3);
                    break;

                case 5:
                    Hi.changePhase(5);
            }
        }, t.prototype.loadKickOff = function (t) {
            void 0 === t && (t = !1), Ii("start"), vn.reset(), Ur.reset(), Hi.changePhase(2);
        }, t.prototype.onGamePhaseChanged = function (t) {
            switch (t) {
                case 1:
                    break;

                case 2:
                    Ur.allowPlayersMovement(), Io.gameMode && 1 !== Io.gameMode.mode && Ur.displayPlayers(!0);
                    break;

                case 7:
                    vn.resetSpeed(), Ur.setPlayersIdle();
            }
        }, t.prototype.update = function (t) {
            var e = t - this.last;
            e > this.maxDt && (e = this.maxDt), this.last = t, TWEEN.update(), this.isStop && (e = 0),
                ln.update(e);
            var i = ln.delta;
            $n.update(i), Io.update(i), this._openDataInterval--, this._openDataInterval <= 0 && (this._openDataInterval = R ? 4 : 2,
                ot && ot.update()), requestAnimationFrame(this._updateBind);
        }, Object(Q.c)([m.g], t.prototype, "scoreTeamA", void 0), Object(Q.c)([m.g], t.prototype, "scoreTeamB", void 0),
            t;
    }())(), Jr = function (i) {
        function t() {
            var t = i.call(this) || this;
            return t.name = "HelpView", t.canTapMaskClose = !0, t.closeBtn.on(Laya.Event.MOUSE_DOWN, t, t.close),
                Laya.stage.once(Laya.Event.MOUSE_DOWN, t, t.close), t;
        }
        return Object(Q.d)(t, i), t.prototype.show = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e = this;
                return Object(Q.e)(this, function (t) {
                    return i.prototype.show.call(this), zt(this.panel), [2, new Promise(function (t) {
                        e.resolve = t;
                    })];
                });
            });
        }, t.prototype.close = function () {
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.close), TWEEN.killTweensOf(this.panel),
                i.prototype.close.call(this), this.resolve && (this.resolve(), this.resolve = void 0);
        }, t;
    }(Rt.HelpViewUI), Zr = Laya.Templet, to = {};
    function eo(r) {
        if (to[r]) {
            var t = to[r];
            return Promise.resolve(t.buildArmature(1));
        }
        return new Promise(function (t, e) {
            var i = "db/" + r + ".sk", n = new Zr();
            n.on(Laya.Event.COMPLETE, void 0, function () {
                to[r] = n, t(n.buildArmature(1));
            }), n.on(Laya.Event.ERROR, void 0, function () {
                e();
            }), n.loadAni(i);
        });
    }
    var io, no, ro = function (o) {
        function t(t) {
            var e = o.call(this) || this;
            e.shootTeam = t, e.isRevive = !1, e.isLost = 3 <= Qr.scoreTeamB, e.maskAlpha = e.isLost ? .5 : 0,
                e.reviveBtn.on(Laya.Event.CLICK, e, e.onRevive), e.giveUpBtn.on(Laya.Event.CLICK, e, e.onGiveUp),
                e.reviveGroup.visible = !1, e.anyKey.visible = !1, e.restartTip.visible = !1;
            var i = Ur.getPlayersFrom(1)[0];
            e.myName.text = i.aiInfo.name, e.myIcon.skin = "" + i.aiInfo.image;
            var n = Ur.getPlayersFrom(2)[0];
            if (e.targetName.text = n.aiInfo.name, e.targetIcon.skin = "" + n.aiInfo.image,
                1 === t) {
                var r = Qr.scoreTeamA - 1;
                e.myFootball1.visible = 0 < r, e.myFootball2.visible = 1 < r, e.myFootball3.visible = 2 < r,
                    e.targetFootball1.visible = 0 < Qr.scoreTeamB, e.targetFootball2.visible = 1 < Qr.scoreTeamB,
                    e.targetFootball3.visible = 2 < Qr.scoreTeamB;
            } else {
                r = Qr.scoreTeamB - 1;
                e.targetFootball1.visible = 0 < r, e.targetFootball2.visible = 1 < r, e.targetFootball3.visible = 2 < r,
                    e.myFootball1.visible = 0 < Qr.scoreTeamA, e.myFootball2.visible = 1 < Qr.scoreTeamA,
                    e.myFootball3.visible = 2 < Qr.scoreTeamA;
            }
            return e;
        }
        return Object(Q.d)(t, o), t.prototype.addDelayClose = function (t) {
            void 0 === t && (t = 3e3), this.anyKey.visible = !0, this.on(Laya.Event.CLICK, this, this.tweenClose),
                Laya.timer.once(t, this, this.tweenClose);
        }, t.prototype.tweenClose = function () {
            this.off(Laya.Event.CLICK, this, this.tweenClose), Laya.Tween.to(this.panel, {
                y: -this.panel.height,
                alpha: 0
            }, 500, Laya.Ease.sineInOut, new Laya.Handler(this, this.close));
        }, t.prototype.onRevive = function () {
            //激励  复活
            YYGGames.showReward(()=>{
                    
                this.revive()
            })
            // return Object(Q.b)(this, void 0, void 0, function () {
            //     var e, i = this;
            //     return Object(Q.e)(this, function (t) {
            //         switch (t.label) {
            //             case 0:
            //                 this.reviveBtn.mouseEnabled = !1, t.label = 1;

            //             case 1:
            //                 return t.trys.push([1, , 3, 4]), [4, Ke.play(Ei(Yt.revive))];

            //             case 2:
            //                 return 0 === (e = t.sent()) ? [2, Sa("完整看完视频才能复活")] : 2 === e ? ($hostDef.censor || !$hostDef.noVideoShare ? Sa("抱歉，当前没有视频可看") : (se(Zt[Kt.revive]),
            //                     Mi(Kt.revive, {
            //                         shareCount: 0
            //                     }).then(function (t) {
            //                         t && (ae(Zt[Kt.revive]), i.revive());
            //                     })), [2]) : [3, 4];

            //             case 3:
            //                 return this.reviveBtn.mouseEnabled = !0, [7];

            //             case 4:
            //                 return this.revive(), [2];
            //         }
            //     });
            // });
        }, t.prototype.revive = function () {
            this.isRevive = !0, this.resultArmature && (this.resultArmature.visible = !1), this.restartTip.visible = !0,
                Ps.isRevive = !0, Qr.scoreTeamB = 0, Io.gameMode.revive(), this.targetFootball1.visible = !1,
                this.targetFootball2.visible = !1, this.targetFootball3.visible = !1, this.reviveGroup.visible = !1,
                this.addDelayClose(2e3);
        }, t.prototype.onGiveUp = function () {
            this.close();
        }, t.prototype.playFootballAnimation = function (n) {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e, i;
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.footballIcon = n, this.footballArmature && (this.footballArmature.destroy(!0),
                                this.footballArmature = void 0), i = this, [4, eo("football_effect")];

                        case 1:
                            return e = i.footballArmature = t.sent(), this.destroyed ? [2] : (e ? (e.x = this.footballIcon.x,
                                e.y = this.footballIcon.y, this.panel.addChild(e), e.play("animation", !1), e.on(Laya.Event.STOPPED, this, this.onFootAnimationComplete)) : this.footballIcon.visible = !0,
                                this.checkResultEffect(), 3 <= Qr.scoreTeamA ? Ii("victory") : Ii("surprise"), [2]);
                    }
                });
            });
        }, t.prototype.checkResultEffect = function () {
            var t;
            3 <= Qr.scoreTeamA ? t = "win_effect" : 3 <= Qr.scoreTeamB && (t = "fail_effect"),
                t ? this.playResultAnimation(t) : this.onResultStop();
        }, t.prototype.onFootAnimationComplete = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                return Object(Q.e)(this, function (t) {
                    return this.footballIcon.visible = !0, this.footballArmature.destroy(!0), this.footballArmature = null,
                        [2];
                });
            });
        }, t.prototype.playCrownAnimation = function (i, n) {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e;
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, eo(i)];

                        case 1:
                            return e = t.sent(), this.destroyed ? [2] : (e && (e.x = this.bg.width / 2, e.y = this.bg.height / 2,
                                this.panel.addChild(e), e.play("animation", n)), [2]);
                    }
                });
            });
        }, t.prototype.playResultAnimation = function (n) {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e, i;
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return i = this, [4, eo(n)];

                        case 1:
                            return e = i.resultArmature = t.sent(), this.destroyed ? [2] : (e ? (e.x = this.bg.width / 2,
                                e.y = -100, this.panel.addChild(e), e.play("animation", !1), e.on(Laya.Event.STOPPED, this, this.onResultStop)) : this.onResultStop(),
                                [2]);
                    }
                });
            });
        }, t.prototype.onResultStop = function () {
            3 <= Qr.scoreTeamB && !Ps.isRevive ? this.reviveGroup.visible = !0 : this.addDelayClose();
        }, t.prototype.show = function () {
            o.prototype.show.call(this), 3 <= Qr.scoreTeamB && !Ps.isRevive && ce(te[Yt.revive]),
                Ur.shootPlayer && Ur.shootPlayer.goalCelebration();
            var t = this.y = 0;
            t = this.isLost ? (h - this.panel.height) / 2 : xi.top + (3 <= Qr.scoreTeamA ? 250 : 150),
                this.panel.y = -this.panel.height, this.panel.alpha = .5, Laya.Tween.to(this.panel, {
                    y: t,
                    alpha: 1
                }, 500, Laya.Ease.sineInOut, new Laya.Handler(this, this.onTweenComplete));
        }, t.prototype.onTweenComplete = function () {
            var t;
            1 === this.shootTeam ? this.playFootballAnimation(this["myFootball" + Qr.scoreTeamA]) : this.playFootballAnimation(this["targetFootball" + Qr.scoreTeamB]);
            var e = !0;
            3 <= Qr.scoreTeamA ? e = !(t = "crown_left") : 3 <= Qr.scoreTeamB ? e = !(t = "crown_right") : t = "crown",
                this.playCrownAnimation(t, e);
        }, t.prototype.close = function () {
            o.prototype.close.call(this), 0 === Ps.fightCount && $hostDef.guideGame ? 1 <= Qr.scoreTeamA ? Io.gameMode.onShootOver() : Qr.loadKickOff(this.isRevive) : 3 <= Qr.scoreTeamA || 3 <= Qr.scoreTeamB ? Io.gameMode.onShootOver() : Qr.loadKickOff(this.isRevive);
        }, t.prototype.destroy = function (t) {
            Laya.timer.clearAll(this), o.prototype.destroy.call(this, t);
        }, t;
    }(Rt.ShootShowViewUI), oo = function (i) {
        function t() {
            var t = i.call(this) || this;
            return t.name = "SkinClassicView", t.canTapMaskClose = !0, t.closeBtn.on(Laya.Event.CLICK, t, t.close),
                t.btn.on(Laya.Event.CLICK, t, function () {
                    return Object(Q.b)(t, void 0, void 0, function () {
                        return Object(Q.e)(this, function (t) {
                            return gi(Kt.collectSkin).then(function (t) {
                                1 === t && ae("典藏皮肤链接");
                            }), [2];
                        });
                    });
                }), t.getBtn.on(Laya.Event.CLICK, t, function () {
                    return Object(Q.b)(t, void 0, void 0, function () {
                        return Object(Q.e)(this, function (t) {
                            if (Pa.collectSkinInvites.length >= _) {
                                try {
                                    xa(function () {
                                        if (Pa.getSkin(w)) Sa("你已拥有此皮肤"); else {
                                            if (!(Pa.collectSkinInvites.length < _)) {
                                                var t = new Jt();
                                                return Pa.completeSkin(w, t), t;
                                            }
                                            Sa("邀请人数不够");
                                        }
                                    }());
                                } catch (t) {
                                    return _a("领取奖励出错", t), [2];
                                }
                                this.close();
                            }
                            return [2];
                        });
                    });
                }), t._resetSkinShow(), t.descLabel.visible = !1, t;
        }
        return Object(Q.d)(t, i), t.prototype._resetSkinShow = function () {
            this.image.skin = "icon/icon_skin_" + w + ".png";
        }, t.prototype.show = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e = this;
                return Object(Q.e)(this, function (t) {
                    return i.prototype.show.call(this), 5, Vi(this.avatarContainer, Laya.Image, 5, function (t, e, i) {
                        e < Pa.collectSkinInvites.length ? t.skin = Pa.collectSkinInvites[e].avatar || g : t.skin = "ui/icon_unknown_skin.png",
                            t.width = 112, t.height = 112, t.x = (t.width + 5) * e, i.pivotX = (t.x + t.width) / 2;
                    }), this.getBtn.visible = 5 <= Pa.collectSkinInvites.length, this.btn.visible = Pa.collectSkinInvites.length < 5,
                        this.descLabel.visible = Pa.collectSkinInvites.length < 5, this._resetSkinShow(),
                        this.descLabel.text = "从群里邀请5个新老玩家点入即可领取", [2, new Promise(function (t) {
                            e.resolve = t;
                        })];
                });
            });
        }, t.prototype.destroy = function (t) {
            i.prototype.destroy.call(this, t);
        }, t.prototype.close = function () {
            i.prototype.close.call(this), this.resolve && (this.resolve(), this.resolve = void 0);
        }, t;
    }(Rt.SkinClassicViewUI),
        so = function (e) {
            function t() {
                var t = e.call(this) || this;
                return t.name = "TestView", t.canTapMaskClose = !0,
                    t.btn1.on(Laya.Event.CLICK, t, function () {
                        var t = lt.getDefById(Pa.grad + 1);
                        t && (Pa.cupNum = t.cupNum - 1);
                    }), t.allSkinBtn.on(Laya.Event.CLICK, t, function () {
                        for (var t = ft.getList(), e = 0; e < t.length; e++) {
                            var i = t[e];
                            Pa.completeSkin(i.id);
                        }
                    }), t.clearSkinBtn.on(Laya.Event.CLICK, t, function () {
                        Pa.curSkin = 1, Pa.skins = [{
                            id: 1,
                            frag: 0,
                            status: 2
                        }];
                    }), t.btn1_1.on(Laya.Event.CLICK, t, function () {
                        Pa.maxScore = 0, Pa.dailySkipTrySkin = 0, Pa.ticketLinkRecord = {}, Pa.ticketGroupRecord = {},
                            Pa.dailyTicketGroupCount = 0;
                    }), t.btn1_2.on(Laya.Event.CLICK, t, function () {
                        lt.getDefById(Pa.grad + 1) && (Pa.grad += 1);
                    }), t.clearBtn.on(Laya.Event.CLICK, t, function () {

                        // Pa.grad = 1, Pa.bestGrad = 1, Pa.cupNum = 0, Pa.bestCup = 0, Pa.todayGameCount = 0,
                        //     Pa.fightCount = 0, Pa.maxScore = 0, Pa.curSkin = 1, Pa.skins = [{
                        //         id: 1,
                        //         frag: 0,
                        //         status: 2
                        //     }],
                        //     // Number(Laya.LocalStorage.getItem("goldgold")) = 0,
                        //     Pa.videoToTicket = 0, Pa.ticket = 1, Pa.dailyTicketGroupCount = 0,
                        //     Pa.turntableTotalCount = 0, Pa.turntableGetNoFive = 0, Pa.lastLoginTime = 0, Pa.signLoginDay = 0,
                        //     Pa.signDay = 0, Pa.propLevels = [0, 0, 0, 0], Pa.dailySkipTrySkin = 0, Ps.setWinCount(0),
                        //     wx.setStorageSync("isFirstLogin_" + $hostDef.api, null);
                    }),
                    t.statBtn.on(Laya.Event.CLICK, t, function () {
                        Laya.Stat._show ? Laya.Stat.hide() : Laya.Stat.show();
                    }), t.ticketBtn1.on(Laya.Event.CLICK, t, function () {
                        Pa.ticket += 9;
                    }), t.goldBtn.on(Laya.Event.CLICK, t, function () {
                        console.log("测试:金币+2000000")
                        // Number(Laya.LocalStorage.getItem("goldgold")) += 2e6, Sa();
                        var t = k.findPanel(function (t) {

                            return "StartView" == t.name;
                        });
                        if (t) {
                            var e = t.propList.goldText.localToGlobal(new Laya.Point(0, 0));
                            e.x /= va, e.y /= va, Ri(5e4, e.x, e.y);
                        } else Ri(5e4, 50, 1e3);
                    }), t.hideBtn.on(Laya.Event.CLICK, t, function () {
                        Io.hideUI(!0);
                    }), t.winBtn.on(Laya.Event.CLICK, t, function () {
                        Ps.setWinCount(10);
                    }), t.loseBtn.on(Laya.Event.CLICK, t, function () {
                        Ps.setLoseCount(10);
                    }), t.gameTimeBtn.on(Laya.Event.CLICK, t, function () {
                        dt.raceTime = 10;
                    }), t.puzzleBtn.on(Laya.Event.CLICK, t, function () {
                        new Ai().show(), new oo().show();
                    }), t.cameraBtn.on(Laya.Event.CLICK, t, function () {
                        Io.gameMode && Io.gameMode.setDebug(!0);
                    }), t.offsetInput.on(Laya.Event.INPUT, t, function () {
                        Ps.forceAiLevel = Number(t.offsetInput.text);
                    }), t.closeBtn.on(Laya.Event.CLICK, t, t.close), t;
            }
            return Object(Q.d)(t, e), t;
        }(Rt.TestViewUI),
        ao = Rt.GuideModelViewUI, co = new Laya.Vector3(), uo = new Laya.Vector3(), ho = new Laya.Vector3(), lo = function (e) {
            function t() {
                var t = e.call(this) || this;
                return t._isEnd = !1, t.guideTips = [], t.lastTip = -100, t.isStart = !1, t.offsetY = 0,
                    t.moveSpeed = 120, t.guideHeight = .5, t.t = 0, t.countdownNum = 0, t.name = "GuideModelView",
                    t.addToDestroy = Object(m.a)(function () {
                        t.scoreA.value = 10 <= Qr.scoreTeamA ? Qr.scoreTeamA + "" : "0" + Qr.scoreTeamA,
                            t.scoreB.value = 10 <= Qr.scoreTeamB ? Qr.scoreTeamB + "" : "0" + Qr.scoreTeamB;
                    }), t.helpBtn.on(Laya.Event.CLICK, t, function () {
                        new Jr().show();
                    }), t.clickArea = new Laya.Sprite(), t.clickArea.graphics.drawRect(0, 0, u, h, 0),
                    t.clickArea.alpha = 0, t.clickArea.width = u, t.clickArea.height = 4 * h / 5, t.clickArea.mouseEnabled = !0,
                    t.clickArea.y = h / 5, t.gameGroup.addChildAt(t.clickArea, 0), t.rankGroup.y = t.rankGroup.y + xi.top,
                    t.helpBtn.y = t.helpBtn.y + xi.top, t.ballGuide.alpha = .8, ($hostDef.DEVELOP || V()) && (t.rankGroup.mouseEnabled = !0,
                        t.rankGroup.on(Laya.Event.CLICK, t, function () {
                            // new so().show();
                        })), t.guideTips = [t.guide0, t.guide1, t.guide2, t.guide3], t;
            }
            return Object(Q.d)(t, e), t.prototype.init = function () {
                this.isStart = !1, this._isEnd = !1, this.gameGroup.visible = !1, this.moveBox.visible = !1,
                    this.circleBox.visible = !1, this.clickArea.visible = !1, this.moveBox.mouseEnabled = !1,
                    this.circleBox.mouseEnabled = !1, this.showGuideTip(-1);
            }, t.prototype.showGuideTip = function (t) {
                if (this.lastTip !== t) {
                    this.lastTip = t;
                    for (var e = 0; e < this.guideTips.length; e++) this.guideTips[e].visible = e === t;
                    var i = this.guideTips[t];
                    i && (i.alpha = 0, new TWEEN.Tween(i).to({
                        alpha: 1
                    }, 200).start());
                }
            }, t.prototype.end = function () {
                this.hideCd(), this.hideMoveHand(), this._isEnd = !0, this.isStart = !1;
            }, t.prototype.start = function (t) {
                this.isStart = !0, 0 < t.length && (this.rankIconA.skin = t[0].image);//, this.rankIconB.skin = t[1].image
            }, t.prototype.setBallGuideTarget = function (t, e) {
                this.ballGuideTarget = t, this.guideHeight = e, this.ballGuide.visible = !!this.ballGuideTarget;
            }, t.prototype.update = function (t) {
                if (this.offsetY += t * this.moveSpeed, this.offsetY < 10 ? this.moveSpeed = 120 : 40 <= this.offsetY && (this.moveSpeed = -120),
                    this.ballGuide.visible) {
                    var e = $n.mainCamera.camera.projectionViewMatrix, i = $n.mainCamera.camera.viewport, n = 1 / va, r = Ur.hero;
                    co.setValue(this.ballGuideTarget.x, this.guideHeight, this.ballGuideTarget.z), i.project(co, e, uo),
                        co.setValue(r.x, this.guideHeight, r.z), i.project(co, e, ho);
                    var o = uo.x * n, s = uo.y * n, a = ho.x * n, c = ho.y * n, u = Math.atan2(this.ballGuideTarget.z - r.z, this.ballGuideTarget.x - r.x) * y;
                    this.ballGuide.x = o, this.ballGuide.y = s - this.offsetY;
                    var h = this.checkBallGuideBound(), l = o - a, p = s - c, d = Math.atan2(p, l) * y;
                    90 <= Math.abs(d - u) && (this.ballGuide.x = a + 1e3 * Math.cos(u * v), this.ballGuide.y = c + 1e3 * Math.sin(u * v),
                        h = this.checkBallGuideBound()), this.ballGuide.rotation = h ? u - 90 : 0;
                }
            }, t.prototype.showReady = function () {
                var e = this;
                return re("进入准备倒计时"), new Promise(function (t) {
                    e.resolve = t, e.showMoveHand(), e.showCountdown();
                });
            }, t.prototype.showBallGuide = function () {
                this.ballGuide.visible = !0;
            }, t.prototype.hideBallGuide = function () {
                this.ballGuide.visible = !1;
            }, t.prototype.checkBallGuideBound = function () {
                var t = !1;
                return this.ballGuide.x < 0 && (t = !(this.ballGuide.x = 0)), this.ballGuide.x > u && (this.ballGuide.x = u,
                    t = !0), this.ballGuide.y < this.ballGuide.height / 2 && (this.ballGuide.y = this.ballGuide.height / 2,
                        t = !0), this.ballGuide.y > h - this.ballGuide.height && (this.ballGuide.y = h - this.ballGuide.height,
                            t = !0), t;
            }, t.prototype.guideMove = function () {
                this.handImage.x = 100 * Math.sin(4 * this.t) + 333, this.handImage.y = 55 * Math.sin(8 * this.t) + 50,
                    this.t += Math.PI / 60 / 4, this.circleImage.rotation = 500 * this.t;
            }, t.prototype.showCountdown = function () {
                var t = this;
                this.circleBox.visible = !0, Ii("startcountdown"), this.countdownNum = 3, this.setSecond(this.countdownNum),
                    this.intervalKey = setInterval(function () {
                        t.countdownNum--, t.setSecond(t.countdownNum), t.countdownNum <= 0 && (clearInterval(t.intervalKey),
                            t.onCdDown());
                    }, 1e3);
            }, t.prototype.setSecond = function (t) {
                this.countdownLabel.text = t.toString(), this.countdownLabel.x = (261 - this.countdownLabel.width) / 2;
            }, t.prototype.onCdDown = function () {
                this.hideCd(), this.clickArea.visible = !0, this.resolve && (this.resolve(), this.resolve = void 0);
            }, t.prototype.hideCd = function () {
                this.intervalKey && (clearInterval(this.intervalKey), this.intervalKey = void 0),
                    this.circleBox.visible = !1;
            }, t.prototype.showMoveHand = function () {
                this.moveBox.visible || (TWEEN.killTweensOf(this.moveBox), this.moveBox.alpha = 0,
                    new TWEEN.Tween(this.moveBox).to({
                        alpha: 1
                    }, 200).start(), this.moveBox.visible = !0, this.t = 0, Laya.timer.clear(this, this.guideMove),
                    Laya.timer.loop(1e3 / 60, this, this.guideMove));
            }, t.prototype.hideMoveHand = function () {
                this.moveBox.visible = !1, Laya.timer.clear(this, this.guideMove);
            }, t;
        }(ao), po = function () {
            function t() { }
            return t.prototype.enter = function () { }, t.prototype.exit = function () { }, t.prototype.update = function (t) { },
                t;
        }(), fo = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.enter = function () {
                var t = Io.gameMode;
                t.modelView.setBallGuideTarget(vn, .5), t.showGuideTip(0), t.showGuideArrow(vn),
                    we(0);
            }, e.prototype.exit = function () {
                Io.gameMode.hideBallGuide(), _e(0);
            }, e.prototype.update = function (t) { }, e;
        }(po), yo = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.enter = function () {
                var t = Io.gameMode;
                t.showGuideTip(1), this.target = {
                    x: $n.gameMap.getGoalArea(2).x,
                    z: $n.gameMap.getGoalArea(2).z
                }, t.showGuideArrow(this.target), t.modelView.setBallGuideTarget(null, 0), this.enemyZ = $n.gameMap.spawns[2][0].z,
                    we(1);
            }, e.prototype.exit = function () {
                Io.gameMode.hideBallGuide(), _e(1);
            }, e.prototype.update = function (t) {
                if (Ur.hero.z <= this.enemyZ) {
                    var e = Ur.getPlayersFrom(2)[0];
                    e && !e.enable && (e.enable = !0);
                }
            }, e;
        }(po), vo = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.enter = function () {
                var t = Io.gameMode;
                t.showGuideTip(2), this.enemy = Ur.getPlayersFrom(2)[0], t.showGuideArrow(this.enemy),
                    t.modelView.setBallGuideTarget(this.enemy, 1.5), we(2);
            }, e.prototype.exit = function () {
                Io.gameMode.hideBallGuide(), _e(2);
            }, e.prototype.update = function (t) { }, e;
        }(po), go = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.enter = function () {
                var t = Io.gameMode;
                t.showGuideTip(3), this.target = {
                    x: $n.gameMap.getGoalArea(2).x,
                    z: $n.gameMap.getGoalArea(2).z
                }, t.showGuideArrow(this.target), t.hideBallGuide(), we(3);
            }, e.prototype.exit = function () {
                _e(3);
            }, e.prototype.update = function (t) { }, e;
        }(po), mo = function (t) {
            function e() {
                return t.call(this) || this;
            }
            return Object(Q.d)(e, t), e.prototype.enter = function () {
                var t = Io.gameMode;
                t.showGuideTip(-1), t.hideGuideArrow();
            }, e.prototype.exit = function () { }, e;
        }(po), bo = function () {
            function t() {
                this.stateList = [];
            }
            return Object.defineProperty(t.prototype, "currentState", {
                get: function () {
                    return this._currentState;
                },
                set: function (t) {
                    this._currentState = t;
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.initialize = function () {
                this.stateList[0] = new fo(), this.stateList[1] = new yo(), this.stateList[2] = new vo(),
                    this.stateList[3] = new go(), this.stateList[4] = new mo();
            }, t;
        }(), wo = function () {
            function t() {
                this._guideFSM = new bo();
            }
            return t.prototype.initialize = function () {
                this._guideFSM.initialize();
            }, t.prototype.checkCurGuideState = function () {
                if (3 <= Hi.currentPhase) return 4;
                if (!vn.holder) return 0;
                var t = Ur.getPlayersFrom(2)[0];
                return t.enable ? 1 === t.moveState || 2 === t.moveState ? 3 : 2 : 1;
            }, t.prototype.update = function (t) {
                var e = this.checkCurGuideState(), i = this._guideFSM.currentState;
                this._guideFSM.currentState = this._guideFSM.stateList[e], i !== this._guideFSM.currentState && (i && i.exit(),
                    this._guideFSM.currentState && this._guideFSM.currentState.enter()), this._guideFSM.currentState && this._guideFSM.currentState.update(t);
            }, t;
        }(), _o = function (e) {
            function t() {
                var t = e.call(this) || this;
                return t.leftTime = 0, t.duration = 0, t._isStarted = !1, t.lastTipIndex = -1, t.hookTime = 0,
                    t.ballUIPos = new Laya.Vector3(), t.heroUIPos = new Laya.Vector3(), t.tmpPos = new Laya.Vector3(),
                    t.refreshCount = 0, t.mode = 1, t;
            }
            return Object(Q.d)(t, e), t.prototype.destroy = function () {
                e.prototype.destroy.call(this), Xn.removeInputListeners(), this.modelView.clickArea.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown),
                    this.modelView.destroy(), this.modelView = null, this.guideArrow && (this.guideArrow.removeSelf(),
                        this.guideArrow.destroy(!0), this.guideArrow = null);
            }, t.prototype.showReady = function () {
                return Object(Q.b)(this, void 0, void 0, function () {
                    var e = this;
                    return Object(Q.e)(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return Pa.fightCount < 1 ? [4, new Jr().show()] : [3, 2];

                            case 1:
                                t.sent(), t.label = 2;

                            case 2:
                                return this.modelView.showReady().then(function () {
                                    e.startGame();
                                }), [2];
                        }
                    });
                });
            }, t.prototype.setDebug = function (t) { }, t.prototype.startGame = function () {
                Ii("start"), this.modelView.alpha = 1, this.modelView.gameGroup.visible = !0, this.modelView.start(this.aiInfos),
                    Xn.addInputListeners(this.modelView.clickArea), this.modelView.clickArea.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown),
                    Ur.getPlayersFrom(2)[0].moveSystem.physicBody.setGuide(), Hi.changePhase(2), this.duration = this.leftTime = dt.raceTime,
                    this._isStarted = !0;
            }, t.prototype.onMouseDown = function () {
                this.modelView.hideMoveHand(), this.modelView.showGuideTip(-1);
            }, t.prototype.showGuideTip = function (t, e) {
                void 0 === e && (e = !1), this.lastTipIndex = t, this.modelView.showGuideTip(this.lastTipIndex),
                    e && this.modelView.showMoveHand(), this.hookTime = 0;
            }, t.prototype.hideGuideTip = function () {
                this.modelView.showGuideTip(-1);
            }, t.prototype.hideUI = function (t) {
                this.modelView && (this.modelView.alpha = t ? 0 : 1);
            }, t.prototype.ready = function (t) {
                var e = this;
                this.aiInfos = t, this.guideArrow = new Laya.Sprite3D(), this.guideArrow.transform.localPosition = new Laya.Vector3(0, .12, 0),
                    function () {
                        return Object(Q.b)(this, void 0, void 0, function () {
                            var n, r = this;
                            return Object(Q.e)(this, function (t) {
                                return n = "dlc/guide_arrow/guide_arrow.lh", [2, new Promise(function (e, i) {
                                    Laya.loader.load(n, new Laya.Handler(r, function (t) {
                                        return t ? e(t.clone()) : i("load fail:" + n);
                                    }), null, Laya.Loader.HIERARCHY, 0, !1);
                                })];
                            });
                        });
                    }().then(function (t) {
                        e.guideArrow.addChild(t);
                    }), Ur.hero.skin.addChild(this.guideArrow), this.guideArrow.active = !1, Qr.resetScore(),
                    Qr.resetScene();
                var i = new Hr(1, t[0]), n = new Hr(2, t[1]);
                i.initPlayers(1), n.initPlayers(1), Ur.updateTeams(i, n), this._guideController = new wo(),
                    this._guideController.initialize(), Ur.getPlayersFrom(2)[0].enable = !1;
            }, t.prototype.start = function () {
                this._shootTimes = [], this._shootTimes[1] = [], this._shootTimes[2] = [], this.modelView || (this.modelView = new lo()),
                    this.modelView.init(), aa.addChild(this.modelView), this.showReady();
            }, t.prototype.hideView = function () {
                this.modelView && (this.modelView.end(), this.modelView.removeSelf());
            }, t.prototype.useSkill = function () {
                e.prototype.useSkill.call(this);
            }, t.prototype.forceQuit = function () {
                Ur.setPlayersIdle(), vn.reset(), this.onGameOver();
            }, t.prototype.onGameOver = function () {
                this._isStarted = !1, this.hideView(), Xn.removeInputListeners(), Hi.changePhase(7);
            }, t.prototype.getResultInfo = function () {
                return {
                    result: Qr.scoreTeamA > Qr.scoreTeamB ? 0 : Qr.scoreTeamA < Qr.scoreTeamB ? 2 : 1,
                    cup: 0,
                    cupChanged: 0,
                    players: [{
                        name: this.aiInfos[0].name,
                        score: Qr.scoreTeamA,
                        isSelf: !0,
                        image: this.aiInfos[0].image,
                        shootTimes: this._shootTimes[1].concat()
                    }, {
                        name: this.aiInfos[1].name,
                        score: Qr.scoreTeamB,
                        isSelf: !1,
                        image: this.aiInfos[1].image,
                        shootTimes: this._shootTimes[2].concat()
                    }]
                };
            }, t.prototype.onShootOver = function () {
                this.onGameOver(), Ps.onShootOver(this.getResultInfo());
            }, t.prototype.revive = function () {
                this._shootTimes[2].length = 0;
            }, t.prototype.onShoot = function (t) {
                e.prototype.onShoot.call(this, t), this._shootTimes[t.team].push({
                    time: this.duration - this.leftTime,
                    playerType: t.playerType
                }), setTimeout(function () {
                    Hi.changePhase(6), new ro(t.team).show();
                }, 100);
            }, t.prototype.showGuideArrow = function (t) {
                this.guideArrow.active = !0, this.guideArrowTarget = t;
            }, t.prototype.hideGuideArrow = function () {
                this.guideArrow.active = !1;
            }, t.prototype.hideBallGuide = function () {
                this.modelView.hideBallGuide();
            }, t.prototype.update = function (t) {
                if (this._isStarted) {
                    this._guideController.update(t);
                    var e = Ur.hero;
                    if (this.guideArrow.active) {
                        var i = Math.atan2(this.guideArrowTarget.x - e.x, this.guideArrowTarget.z - e.z);
                        this.guideArrow.transform.localRotationEulerY = (i - e.rotation.y) * y - 180;
                    }
                    6 !== Hi.currentPhase && (this.leftTime -= t, this.leftTime <= 0 && (this.leftTime = 0),
                        this.modelView.update(t)), Hi.currentPhase < 4 ? this.updateBallUI() : this.modelView.football.visible = !1,
                        0 === Ur.hero.moveSystem.physicBody.speed ? (this.hookTime += t, 2 < this.hookTime && (this.hookTime = 0) <= this.lastTipIndex && this.showGuideTip(this.lastTipIndex, !0)) : this.hookTime = 0;
                }
            }, t.prototype.updateBallUI = function () {
                if (this.refreshCount--, !(0 < this.refreshCount)) {
                    this.refreshCount = 2;
                    var t = $n.mainCamera.camera.projectionViewMatrix, e = $n.mainCamera.camera.viewport, i = 1 / va, n = this.modelView.football, r = Ur.hero;
                    this.tmpPos.setValue(vn.x, dn, vn.z), e.project(this.tmpPos, t, this.ballUIPos),
                        this.tmpPos.setValue(r.x, dn, r.z), e.project(this.tmpPos, t, this.heroUIPos);
                    var o = this.ballUIPos.x * i, s = this.ballUIPos.y * i;
                    n.setValue(o, s, Math.atan2(vn.z - r.z, vn.x - r.x) * y, this.heroUIPos.x * i, this.heroUIPos.y * i);
                }
            }, t;
        }($r);
    function So() {
        if (null == io) {
            var t = wx.getStorageSync("shareTimes" + $hostDef.api), e = wx.getStorageSync("todayRewardTimes" + $hostDef.api), i = wx.getStorageSync("lastShareTime" + $hostDef.api);
            DEVELOP && (console.log("lastShareTime storage", i), console.log("shareTimes storage:", t),
                console.log("todayRewardTimes storage:", e)), no = i || 0;
            var n = Date.now();
            xo(n, no) ? (io = t || 0, e || 0) : io = 0;
        }
        return io;
    }
    function To() {
        $hostDef.shareFloat && (function () {
            null == io && So();
            var t = Date.now();
            xo(t, no) || (io = 0), io += 1, no = t, wx.setStorageSync("shareTimes" + $hostDef.api, io),
                wx.setStorageSync("lastShareTime" + $hostDef.api, no);
        }(), So() <= 3 ? Ta("请发到微信群里哦，更容易获得点击", 300) : So() % 3 == 0 && Ta("请发到微信群里哦，更容易获得点击", 200));
    }
    function xo(t, e) {
        return new Date(t).toDateString() == new Date(e).toDateString();
    }
    var Lo = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.name = "ForceQuitView", t.closeBtn.on(Laya.Event.CLICK, t, t.close), t.exitBtn.on(Laya.Event.CLICK, t, t.onForceExit),
                t.videoBtn.on(Laya.Event.CLICK, t, t.onVideo), t.videoTip.visible = t.videoBtn.visible = Ke.canWatch(),
                t.lostCupLabel.text = Math.abs(dt.punish) + "", t;
        }
        return Object(Q.d)(t, e), t.prototype.onForceExit = function () {
            this.close(), Ps.forceEndFight(!1);
        }, t.prototype.onVideo = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e;
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            this.videoBtn.mouseEnabled = !1, t.label = 1;

                        case 1:
                            return t.trys.push([1, , 3, 4]), [4, Ke.play(Ei(Yt.quit))];

                        case 2:
                            return 0 === (e = t.sent()) ? [2, Sa("完整看完视频才能免处罚")] : 2 === e ? [2, Sa("抱歉，当前没有视频")] : [3, 4];

                        case 3:
                            return this.videoBtn.mouseEnabled = !0, [7];

                        case 4:
                            return this.close(), Ps.forceEndFight(!0), [2];
                    }
                });
            });
        }, t;
    }(Rt.ForceQuitViewUI), ko = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t._isEnd = !1, t._camerIndex = 0, t.counter = {
                shareCount: 0
            }, t.isStart = !1, t.updateCount = 0, t.effectSpeed = -2, t.isSkillGuiding = !1,
                t.t = 0, t.countdownNum = 0, t.name = "CountDownModelView", t.addToDestroy = Object(m.a)(function () {
                    t.scoreA.value = 10 <= Qr.scoreTeamA ? Qr.scoreTeamA + "" : "0" + Qr.scoreTeamA,
                        t.scoreB.value = 10 <= Qr.scoreTeamB ? Qr.scoreTeamB + "" : "0" + Qr.scoreTeamB;
                }), t.addToDestroy = Object(m.a)(function () {
                    0 < Pa.skillPoint ? (t.showSkillGuide(), t.skillTips.visible = !0, t.timesGroup.visible = !0,
                        t.goldGroup.visible = !1, t.shareGroup.visible = !1) : (t.endSkillGuide(), t.timesGroup.visible = !1,
                            t.shareGroup.visible = $hostDef.shareGetItem && !$hostDef.censor, t.goldGroup.visible = !t.shareGroup.visible,
                            t.skillTips.visible = !t.shareGroup.visible), t.skillPoint.value = "" + Pa.skillPoint;
                }), t.quitBtn.on(Laya.Event.CLICK, t, function () {
                    YYGGames.showInterstitial(() => {

                        Ps.forceEndFight(!1);
                    })
                    // new Lo().show();
                    // new ds().show()
                    //exit

                }),

                t.helpBtn.on(Laya.Event.CLICK, t, function () {
                    new Jr().show();
                }), t.skillInfoGroup.on(Laya.Event.CLICK, t, t.onSkill), t.clickArea = new Laya.Sprite(),
                t.clickArea.graphics.drawRect(0, 0, u, h, 0), t.clickArea.alpha = 0, t.clickArea.width = u,
                t.clickArea.height = 4 * h / 5, t.clickArea.mouseEnabled = !0, t.clickArea.y = h / 5,
                t.gameGroup.addChildAt(t.clickArea, 0), t.quitBtn.visible = !$hostDef.censor, t.skillInfoGroup.visible = !$hostDef.censor,
                t.skillCdGroup.visible = !1, t.rankGroup.y = t.rankGroup.y + xi.top, t.helpBtn.y = t.helpBtn.y + xi.top,
                t.goldCostLabel.text = dt.buySkillConsume + "", ($hostDef.DEVELOP || V()) && (t.rankGroup.mouseEnabled = !0,
                    t.rankGroup.on(Laya.Event.CLICK, t, function () {
                        // new so().show();
                    })), t;
        }
        return Object(Q.d)(t, e), t.prototype.onSkill = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e, i;
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (1 == (e = Ps.skillController.useSkill())) return Ps.useSkill(), [2];
                            if (!(e < 0)) return [3, 6];
                            if ($hostDef.censor || !$hostDef.shareGetItem) return [3, 5];
                            Qr.isStop = !0, t.label = 1;

                        case 1:
                            return t.trys.push([1, , 3, 4]), [4, Ke.play(Ei(Yt.skillPoint))];

                        case 2:
                            return 0 === (i = t.sent()) ? [2, Sa("完整看完视频才能获得")] : 2 === i ? [2, Sa("抱歉，当前没有视频")] : [3, 4];

                        case 3:
                            return Qr.isStop = !1, [7];

                        case 4:
                            return Pa.skillPoint = dt.maxSkillPoint, Qr.isStop = !1, [3, 6];

                        case 5:
                            !$hostDef.censor && $hostDef.shareGetItem ? (se("游戏内兴奋剂不足分享"), Mi(Kt.skillPoint, this.counter).then(function (t) {
                                if (DEVELOP && console.log("share success:", t), t) {
                                    ae("游戏内兴奋剂不足分享");
                                    var e = 1e3 * (Math.random() * dt.addItemDelay[0] + dt.addItemDelay[1]);
                                    console.log("游戏内兴奋剂分享成功:" + e);
                                    var i = setTimeout(function () {
                                        clearTimeout(i), Pa.skillPoint += 2;
                                    }, e);
                                    To();
                                }
                            })) : Number(Laya.LocalStorage.getItem("goldgold")) >= dt.buySkillConsume ? Ps.skillController.checkCD() && (he("技能购买"),

                                // Laya.LocalStorage.setItem("goldgold",)
                                Laya.LocalStorage.setItem("goldgold", Number(Laya.LocalStorage.getItem("goldgold")) - dt.buySkillConsume), Ps.useSkill())
                                    :
                                    $hostDef.censor ? Sa("金币不足")
                                        :
                                        Sa("金币不足，前往金币转盘拿海量金币！"),
                                t.label = 6;

                        case 6:
                            return [2];
                    }
                });
            });
        }, t.prototype.init = function () {
            this.isStart = !1, this._isEnd = !1, this.gameGroup.visible = !1, this.readyGroup.visible = !1,
                this.clickArea.visible = !1, this.debugGroup.visible = V(), this.quitBtn.mouseEnabled = !0;
        }, t.prototype.end = function () {
            this.readyGroup.visible && this.hideReady(), this._isEnd = !0, this.isStart = !1;
        }, t.prototype.start = function (t) {
            this.isStart = !0, 0 < t.length && (this.rankIconA.skin = t[0].image),//, this.rankIconB.skin = t[1].image
                this.debugGroup.visible = V();
        }, t.prototype.update = function (t) {
            if (this.skillEffect.rotation += this.effectSpeed, 0 < this.updateCount) this.updateCount--; else {
                this.updateCount = 30, this.remainingLabel.value = Ze(1e3 * t);
                var e = Ps.skillController.getCd();
                0 < e ? (this.skillCdGroup.visible = !this.shareGroup.visible, this.skillCdText.value = Ze(e),
                    this.skillTips.visible = !1) : (this.skillCdGroup.visible = !1, this.skillTips.visible = !this.shareGroup.visible);
            }
        }, t.prototype.showSkillGuide = function () {
            this.isSkillGuiding || (this.isSkillGuiding = !0, this.showUseSkill());
        }, t.prototype.endSkillGuide = function () {
            this.effectSpeed = 0, this.skillEffect.visible = !1, this.isSkillGuiding = !1;
        }, t.prototype.showUseSkill = function () {
            this.skillEffect.visible = !0, this.effectSpeed = -2;
        }, t.prototype.showReady = function () {
            var e = this;
            return this.readyGroup.visible = !0, re("进入准备倒计时"), new Promise(function (t) {
                e.resolve = t, e.showGuide(), e.showCountdown();
            });
        }, t.prototype.showGuide = function () {
            this.t = 0, Laya.timer.loop(1e3 / 60, this, this.guideMove);
        }, t.prototype.guideMove = function () {
            this.handImage.x = 100 * Math.sin(4 * this.t) + 333, this.handImage.y = 55 * Math.sin(8 * this.t) + 50,
                this.t += Math.PI / 60 / 4, this.circleImage.rotation = 500 * this.t;
        }, t.prototype.showCountdown = function () {
            var t = this;
            this.circleBox.visible = !0, this.title.visible = !0, Ii("startcountdown"), this.countdownNum = 3,
                this.setSecond(this.countdownNum), this.intervalKey = setInterval(function () {
                    t.countdownNum--, t.setSecond(t.countdownNum), t.countdownNum <= 0 && (clearInterval(t.intervalKey),
                        t.onCdDown());
                }, 1e3);
        }, t.prototype.setSecond = function (t) {
            this.countdownLabel.text = t.toString(), this.countdownLabel.x = (261 - this.countdownLabel.width) / 2;
        }, t.prototype.onCdDown = function () {
            this.intervalKey && (clearInterval(this.intervalKey), this.intervalKey = void 0),
                this.circleBox.visible = !1, this.title.visible = !1, this.clickArea.visible = !0,
                this.resolve && this.resolve();
        }, t.prototype.hideReady = function () {
            this.intervalKey && (clearInterval(this.intervalKey), this.intervalKey = void 0),
                Laya.timer.clear(this, this.guideMove), this.resolve = void 0, this.readyGroup.visible = !1;
        }, t;
    }(Rt.CountDownModelViewUI), Oo = function (s) {
        function t() {
            var t = s.call(this) || this;
            return t.leftTime = 0, t.duration = 0, t._isStarted = !1, t.ballUIPos = new Laya.Vector3(),
                t.heroUIPos = new Laya.Vector3(), t.tmpPos = new Laya.Vector3(), t.refreshCount = 0,
                t;
        }
        return Object(Q.d)(t, s), t.prototype.showReady = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e = this;
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return Pa.fightCount < 1 ? [4, new Jr().show()] : [3, 2];

                        case 1:
                            t.sent(), t.label = 2;

                        case 2:
                            return this.modelView.showReady().then(function () {
                                e.startGame();
                            }), [2];
                    }
                });
            });
        }, t.prototype.setDebug = function (t) {
            this.modelView.debugGroup.visible = t;
        }, t.prototype.startGame = function () {
            Ii("start"), this.modelView.hideReady(), this.modelView.alpha = 1, this.modelView.gameGroup.visible = !0,
                this.modelView.start(this.aiInfos), Xn.addInputListeners(this.modelView.clickArea),
                Hi.changePhase(2), this.duration = this.leftTime = dt.raceTime, this._isStarted = !0;
        }, t.prototype.hideUI = function (t) {
            this.modelView && (this.modelView.alpha = t ? 0 : 1);
        }, t.prototype.ready = function (t) {
            this.aiInfos = t, Qr.resetScore(), Qr.resetScene();
            var e = new Hr(1, t[0]), i = new Hr(2, t[1]);
            e.initPlayers(0), i.initPlayers(0), Ur.updateTeams(e, i);
        }, t.prototype.start = function () {
            this._shootTimes = [], this._shootTimes[1] = [], this._shootTimes[2] = [], this.modelView || (this.modelView = new ko()),
                this.modelView.init(), aa.addChild(this.modelView), this.showReady();
        }, t.prototype.hideView = function () {
            this.modelView && (this.modelView.end(), this.modelView.removeSelf());
        }, t.prototype.useSkill = function () {
            s.prototype.useSkill.call(this), Ii("unlockskin"), he("技能使用"), mn();
            var t = vn.holder === Ur.hero ? dt.skillTimeWithBall : dt.skillTime;
            Ur.hero.moveSystem.bumpBooster.active(t);
        }, t.prototype.forceQuit = function () {
            Ur.setPlayersIdle(), vn.reset(), this.onGameOver();
        }, t.prototype.onGameOver = function () {
            this._isStarted = !1, this.hideView(), Xn.removeInputListeners(), Hi.changePhase(7);
        }, t.prototype.getResultInfo = function () {
            return {
                result: Qr.scoreTeamA > Qr.scoreTeamB ? 0 : Qr.scoreTeamA < Qr.scoreTeamB ? 2 : 1,
                cup: 0,
                cupChanged: 0,
                players: [{
                    name: this.aiInfos[0].name,
                    score: Qr.scoreTeamA,
                    isSelf: !0,
                    image: this.aiInfos[0].image,
                    shootTimes: this._shootTimes[1].concat()
                }, {
                    name: this.aiInfos[1].name,
                    score: Qr.scoreTeamB,
                    isSelf: !1,
                    image: this.aiInfos[1].image,
                    shootTimes: this._shootTimes[2].concat()
                }]
            };
        }, t.prototype.onTimeOver = function () {
            4 !== Hi.currentPhase && (this.onGameOver(), Ps.onTimeOver(this.getResultInfo()));
        }, t.prototype.onShootOver = function () {
            this.onGameOver(), Ps.onShootOver(this.getResultInfo());
        }, t.prototype.revive = function () {
            this._shootTimes[2].length = 0;
        }, t.prototype.onShoot = function (t) {
            s.prototype.onShoot.call(this, t), this._shootTimes[t.team].push({
                time: this.duration - this.leftTime,
                playerType: t.playerType
            });
            var e = 1 === t.team ? Qr.scoreTeamA : Qr.scoreTeamB, i = lt.getDefById(Pa.grad), n = 0;
            e > i.propBonus.length ? n = i.propBonus[i.propBonus.length - 1] : 0 < e && (n = i.propBonus[e - 1]);
            for (var r = Ur.getPlayersFrom(1 === t.team ? 2 : 1), o = 0; o < r.length; o++) r[o].moveSystem.physicBody.refreshExtraPropLevels(n);
            Ps.isStart && setTimeout(function () {
                Ps.isStart && (Hi.changePhase(6), new ro(t.team).show());
            }, 100);
        }, t.prototype.update = function (t) {
            if (this._isStarted) {
                if (6 !== Hi.currentPhase) {
                    if (this.leftTime -= t, this.leftTime <= 0) return this.leftTime = 0, void this.onTimeOver();
                    this.modelView.update(this.leftTime);
                }
                Hi.currentPhase < 4 ? this.updateBallUI() : this.modelView.football.visible = !1;
            }
        }, t.prototype.updateBallUI = function () {
            if (this.refreshCount--, !(0 < this.refreshCount)) {
                this.refreshCount = 2;
                var t = $n.mainCamera.camera.projectionViewMatrix, e = $n.mainCamera.camera.viewport, i = 1 / va, n = this.modelView.football, r = Ur.hero;
                this.tmpPos.setValue(vn.x, dn, vn.z), e.project(this.tmpPos, t, this.ballUIPos),
                    this.tmpPos.setValue(r.x, dn, r.z), e.project(this.tmpPos, t, this.heroUIPos);
                var o = this.ballUIPos.x * i, s = this.ballUIPos.y * i;
                n.setValue(o, s, Math.atan2(vn.z - r.z, vn.x - r.x) * y, this.heroUIPos.x * i, this.heroUIPos.y * i);
            }
        }, t;
    }($r), Io = new (function () {
        function t() { }
        return Object.defineProperty(t.prototype, "gameMode", {
            get: function () {
                return this._curMode;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.initialize = function () { }, t.prototype.refreshPlayers = function (t, e) {
            var i = new Hr(1, e[0]), n = new Hr(2, e[1]);
            i.initPlayers(t), n.initPlayers(t), 1 === t ? Ur.setupGuideTeam(i, n) : Ur.setupTeam(i, n);
        }, t.prototype.initPlayerManager = function (t, e) {
            vn.isInitialized || (vn.initialize(), $n.addEntity(vn)), Ur.isInitialized || Ur.initialize();
        }, t.prototype.hideUI = function (t) {
            this._curMode && this._curMode.hideUI(t);
        }, t.prototype.ready = function (t, e) {
            var i = this._curMode;
            i && i.mode === t || (i && i.destroy(), this.initPlayerManager(t, e), Ur.removePlayers(),
                this.refreshPlayers(t, e), 0 === t ? this._curMode = new Oo() : 1 === t && (this._curMode = new _o())),
                this._curMode.ready(e);
        }, t.prototype.startFight = function () {
            this._curMode && this._curMode.start();
        }, t.prototype.useSkill = function () {
            this._curMode && this._curMode.useSkill();
        }, t.prototype.forceQuit = function () {
            this._curMode && this._curMode.forceQuit();
        }, t.prototype.update = function (t) {
            this._curMode && this._curMode.update(t);
        }, t;
    }())();
    function Do(t) {
        var e, i, n, r, o, s, a, c = new Jt();
        t.score > Pa.maxScore && (Pa.maxScore = t.score);
        var u, h = Pa.cupNum, l = -1;
        0 === t.result ? l = t.scoreDiff : 1 === t.result && (l = t.scoreDiff), 
        u = t.noReward ? t.isVideo ? 0 : dt.punish : 3 <= l ? dt.cupResult[0] : 2 === l ? dt.cupResult[1] : 1 === l ? dt.cupResult[2] : 0 === l ? dt.cupResult[3] : -1 === l ? dt.cupResult[4] : -2 === l ? dt.cupResult[5] : dt.cupResult[6];
        var p = lt.getDefById(Pa.grad);
        if (p) if (p.isReduceCup || (u = Math.max(0, u)), Pa.cupNum += u, 0 < u) {
            Pa.cupNum > Pa.bestCup && (Pa.bestCup = Pa.cupNum);
            var d = lt.getDefById(Pa.grad + 1);
            if (d && Pa.cupNum >= d.cupNum && (Pa.grad += 1, o = !0, Pa.grad > Pa.bestGrad && (s = !0,
                a = new Jt(), Pa.bestGrad = Pa.grad, 0 < d.unlockSkin.length))) try {
                    for (var f = Object(Q.g)(d.unlockSkin), y = f.next(); !y.done; y = f.next()) {
                        var v = y.value;
                        Pa.addSkinFrag(Number(v), 10, a);
                    }
                } catch (t) {
                    e = {
                        error: t
                    };
                } finally {
                    try {
                        y && !y.done && (i = f.return) && i.call(f);
                    } finally {
                        if (e) throw e.error;
                    }
                }
        } else u < 0 && (p.isReduceGrad ? Pa.cupNum < p.cupNum && lt.getDefById(Pa.grad - 1) && (Pa.grad -= 1) : Pa.cupNum < p.cupNum && (u += p.cupNum - Pa.cupNum,
            Pa.cupNum = p.cupNum));
        var g = Pa.cupNum - h;
        if (Pa.lastReduceCupNum = g < 0 ? -g : 0, !t.noReward) {
            if (0 <= l) {
                var m = dt.getGoldResult(l);

                Laya.LocalStorage.setItem("goldgold", Number(Laya.LocalStorage.getItem("goldgold")) + m)

                    , c.addGold(m),

                    console.log("结算奖励金币:" + m);
            }
            if (0 <= t.result && 0 < l) {
                var b = E(Se(), dt.getSkinResult(l));
                try {
                    for (var w = Object(Q.g)(b), _ = w.next(); !_.done; _ = w.next()) {
                        v = _.value;
                        Pa.addSkinFrag(Number(v), 1, c);
                    }
                } catch (t) {
                    n = {
                        error: t
                    };
                } finally {
                    try {
                        _ && !_.done && (r = w.return) && r.call(w);
                    } finally {
                        if (n) throw n.error;
                    }
                }
            }
        }
        return h !== Pa.cupNum && st("grad", Pa.cupNum + ""), Pa.fightCount++, {
            gift: c,
            cupChanged: u,
            gradUp: o,
            newBestGrad: s,
            newGradGift: a
        };
    }
    var Co = new (function () {
        function t() {
            this.showFreeSkin = !0;
        }
        return t.prototype.canShowFreeSkin = function () {
            return !$hostDef.censor && $hostDef.freeSkin && this.showFreeSkin && Pa.dailySkipTrySkin < 2 && 0 < this.getFreeSkinList().length;
        }, t.prototype.getFreeSkinList = function () {
            for (var t = ft.getList(), e = [], i = 0, n = t.length; i < n; i++) {
                var r = t[i];
                this.isFreeSkin(r.id) && e.push(r);
            }
            return e.length < 2 ? e : E(e, 2);
        }, t.prototype.clearFreeSkin = function () {
            this.freeSkinId = void 0;
        }, t.prototype.setFreeSkin = function (t) {
            this.freeSkinId = t;
        }, t.prototype.isFreeSkin = function (t) {
            var e = ft.getDefById(t);
            if (!e || e.try <= 0) return !1;
            var i = Pa.getSkin(t);
            return !i || 0 == i.status && i.frag < e.needFragCnt;
        }, t;
    }())(), Eo = function (o) {
        function t() {
            var t = o.call(this) || this;
            t.itemList = [], t._isChecked = !1, t.name = "FreeSkinView", t.panel.centerY = -20;
            for (var e = Co.getFreeSkinList(), i = 0; i < 2; i++) {
                var n = e[i], r = t["item" + i];
                n ? (r.visible = !0, r.setSkinDef(n, t), t.itemList.push(r)) : r.visible = !1;
            }
            return 1 === t.itemList.length && (t.itemList[0].x = 200), t.skipBtn.on(Laya.Event.MOUSE_DOWN, t, t.close),
                t.checkImage.on(Laya.Event.CLICK, t, t.onClickCheck), t.checkImage.skin = "ui/check_today_0.png",
                t;
        }
        return Object(Q.d)(t, o), t.prototype.onClickCheck = function () {
            this._isChecked = !this._isChecked, this.checkImage.skin = this._isChecked ? "ui/check_today_1.png" : "ui/check_today_0.png",
                Co.showFreeSkin = !this._isChecked, Pa.dailySkipTrySkin++, this.close();
        }, t.prototype.show = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e = this;
                return Object(Q.e)(this, function (t) {
                    return o.prototype.show.call(this), zt(this.panel), re("试用皮肤弹窗"), Ke.canWatch() && ce("皮肤试用"),
                        [2, new Promise(function (t) {
                            e.resolve = t;
                        })];
                });
            });
        }, t.prototype.destroy = function (t) {
            TWEEN.killTweensOf(this.panel), this.itemList.length = 0, o.prototype.destroy.call(this, t);
        }, t.prototype.close = function () {
            o.prototype.close.call(this), this.resolve && (this.resolve(), this.resolve = void 0);
        }, t;
    }(Rt.FreeSkinViewUI), Po = function (i) {
        function t() {
            var t = i.call(this) || this;
            return t._counter = {
                shareCount: 0
            }, t.willWatchVideo = !1, t.name = "GameItemsView", t.canTapMaskClose = !1, t.startBtn.on(Laya.Event.MOUSE_DOWN, t, t.close),
                t.getBtn.on(Laya.Event.CLICK, t, t.goVideo), t.closeBtn.on(Laya.Event.CLICK, t, t.close),
                t.addToDestroy = Object(m.a)(function () {
                    t.icon.setSkillPoint(Pa.skillPoint);
                }), t;
        }
        return Object(Q.d)(t, i), t.prototype.goVideo = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e, n = this;
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.willWatchVideo ? [4, Ke.play(Ei(Yt.skillPoint))] : (se("技能点不足强弹分享"),
                                Mi(Kt.skillPoint, this._counter).then(function (t) {
                                    if (DEVELOP && console.log("share success:", t), t) {
                                        ae("技能点不足强弹分享");
                                        var e = 1e3 * (Math.random() * dt.addItemDelay[0] + dt.addItemDelay[1]), i = setTimeout(function () {
                                            clearTimeout(i), n.onGetItems();
                                        }, e);
                                        To();
                                    }
                                    n.close();
                                }), [2]);

                        case 1:
                            return 0 === (e = t.sent()) ? [2, Sa("完整看完视频才能获得")] : (2 === e ? Sa("抱歉，当前没有视频可看") : (this.onGetItems(),
                                this.close()), [2]);
                    }
                });
            });
        }, t.prototype.onGetItems = function () {
            Pa.skillPoint = dt.maxSkillPoint, Ps.hasGameItems = !0;
        }, t.prototype.show = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e = this;
                return Object(Q.e)(this, function (t) {
                    return i.prototype.show.call(this), this.closeBtn.visible = !1, zt(this.panel),
                        this.willWatchVideo = !0, 2 == $hostDef.gameItemState && (this.willWatchVideo = 0 == P([$hostDef.video_share, 1])),
                        this.willWatchVideo ? ce("集结号强弹") : oe("游戏物品不足强弹分享"), this.startBtn.visible = !1,
                        this.timeKey = setTimeout(function () {
                            e.startBtn.visible = !0, e.timeKey && (clearTimeout(e.timeKey), e.timeKey = void 0);
                        }, 1e3), [2, new Promise(function (t) {
                            e.resolve = t;
                        })];
                });
            });
        }, t.prototype.close = function () {
            this.timeKey && (clearTimeout(this.timeKey), this.timeKey = void 0), TWEEN.killTweensOf(this.panel),
                i.prototype.close.call(this), this.resolve && (this.resolve(), this.resolve = void 0);
        }, t;
    }(Rt.GameItemsViewUI), Bo = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.name = "IconView", t.lockImg.visible = !1, t;
        }
        return Object(Q.d)(t, e), t.prototype.createChildren = function () {
            e.prototype.createChildren.call(this), this.loadUI("IconView");
        }, Object.defineProperty(t.prototype, "lock", {
            get: function () {
                return this.lockImg.visible;
            },
            set: function (t) {
                this.lockImg.visible = t;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.setUnknown = function () {
            this.bg.skin = "ui/bg_icon.png", this.bg.visible = !1, this.icon.skin = "ui/icon_unknown_skin.png",
                this.icon.width = 144, this.icon.height = 144, this.countGroup.visible = !1, this.skinTag.visible = !1,
                this.lockImg.visible = !1;
        }, t.prototype.hideCount = function () {
            this.countGroup.visible = !1;
        }, t.prototype.setGold = function (t) {
            this.icon.skin = "ui/icon_gold.png", this.countGroup.visible = !0, this.countLabel.changeText("X" + t + " "),
                this.skinTag.visible = !1, this.lockImg.visible = !1;
        }, t.prototype.setSkillPoint = function (t) {
            this.icon.skin = "ui/trumpet.png", this.icon.width = 150, this.icon.height = 150,
                this.countGroup.visible = !0, this.countLabel.changeText(t + "/" + dt.maxSkillPoint +" "),
                this.countLabel.color = t < dt.maxSkillPoint ? "#FF0000" : "#FFFFFF", this.skinTag.visible = !1,
                this.lockImg.visible = !1;
        }, t.prototype.setMoney = function (t, e) {
            switch (t) {
                case Xt.gold:
                    this.icon.skin = "ui/icon_gold.png";
            }
            this.countGroup.visible = !0, this.countLabel.changeText("X" + e + " "), this.skinTag.visible = !1,
                this.lockImg.visible = !1;
        }, t.prototype.setSkin = function (t, e) {
            this.bg.skin = "ui/bg_icon.png", this.icon.skin = "icon/icon_skin_" + t + ".png",
                this.icon.width = 120, this.icon.height = 144, "number" == typeof e ? (this.countGroup.visible = !0,
                    this.countLabel.changeText("X" + e + " "), this.skinTag.visible = !0, this.lockImg.visible = !1) : (this.countGroup.visible = !1,
                        this.skinTag.visible = !1);
        }, t.prototype.setIcon = function (t) {
            this.bg.skin = "ui/bg_icon.png", this.icon.skin = t, this.icon.width = 160, this.icon.height = 160,
                this.countGroup.visible = !1, this.skinTag.visible = !1;
        }, t;
    }(Nt), jo = function (c) {
        function t(t, e, i) {
            var n = c.call(this) || this;
            n.name = "GradLevelUp", Ii("gradup"), n.closeBtn.on(Laya.Event.CLICK, n, n.close),
                n.panel.y = f / 2;
            var r = lt.getDefById(t);
            n.gradIcon.skin = "icon/" + r.resource + ".png", n.gradNameLabel.changeText(r.name);
            var o = n.itemsContainer, s = [];
            if (i && (i.gold && s.push([0, i.gold]), i.skinFrags && i.skinFrags.forEach(function (t, e) {
                s.push([e, t]);
            })), e && 0 < s.length) n.shareBtn.visible = !0, n.shareBtn.on(Laya.Event.CLICK, n, function () {
                se("段位晋升弹窗【炫耀段位】"), gi(Kt.gradShow).then(function (t) {
                    1 === t && ae("段位晋升弹窗【炫耀段位】");
                }), xa(i), n.close();
            }), n.hintLabel.changeText("首次晋升奖励"), Vi(o, Bo, s.length, function (t, e, i) {
                t.x = (t.width + 10) * e;
                var n = Object(Q.f)(s[e], 2), r = n[0], o = n[1];
                0 === r ? t.setGold(o) : t.setSkin(r, o);
            }); else {
                var a = lt.getDefById(t).unlockSkin;
                0 === a.length ? n.hintLabel.changeText("") : n.hintLabel.changeText("成功\n解锁"),
                    Vi(o, Bo, a.length, function (t, e, i) {
                        t.x = (t.width + 10) * e, t.setSkin(a[e]);
                    }), n.shareBtn.visible = !0, n.shareBtn.on(Laya.Event.CLICK, n, function () {
                        se("段位晋升弹窗【炫耀段位】"), gi(Kt.gradShow).then(function (t) {
                            1 === t && ae("段位晋升弹窗【炫耀段位】");
                        }), n.close();
                    });
            }
            return n;
        }
        return Object(Q.d)(t, c), t.prototype.show = function () {
            var e = this;
            return oe("晋升段位炫耀"), c.prototype.show.call(this), zt(this.panel), new Promise(function (t) {
                e.resolve = t;
            });
        }, t.prototype.close = function () {
            TWEEN.killTweensOf(this.panel), c.prototype.close.call(this), this.resolve && (this.resolve(),
                this.resolve = void 0);
        }, t;
    }(Rt.GradLevelUpUI);
    var Ao = Rt.MatchingViewUI, Mo = Laya.Tween, Ro = function (r) {
        function t() {
            var t = r.call(this) || this;
            return t.name = "MatchingView", t.redBg.height = h / 2, t.greenBg.y = h / 2, t.greenBg.height = h / 2,
                t;
        }
        return Object(Q.d)(t, r), t.prototype.showMatch = function (n) {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e, i;
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            for (r.prototype.show.call(this), this._matchInfo = n[1], Pa.isNewPlayer && re("匹配界面"),
                                e = 0; e < 2; e++) (i = this["listItem" + e]) && i.updateData(n[e], 0 === e);
                            return this.vsImage.visible = !1, this.listItem0.scaleX = this.listItem0.scaleY = 3,
                                this.listItem0.alpha = 0, this.listItem1.scaleX = this.listItem1.scaleY = 3, this.listItem1.alpha = 0,
                                this.propBox0.alpha = 0, this.propBox1.alpha = 0, this.loadBar.visible = !1, this.titleLabel.visible = !1,
                                this.condition.visible = !1, this.gradIcon.skin = "icon/grad" + Pa.grad + ".png",
                                this.redBg.x = -u, this.greenBg.x = u, Mo.to(this.redBg, {
                                    x: 0
                                }, 300), Mo.to(this.greenBg, {
                                    x: 0
                                }, 300), this.matchingLabel.scaleX = this.matchingLabel.scaleY = 3, this.matchingLabel.alpha = 0,
                                Mo.to(this.matchingLabel, {
                                    scaleX: 1,
                                    scaleY: 1,
                                    alpha: 1
                                }, 300), [4, en(300)];

                        case 1:
                            return t.sent(), this.showRandomText(), this.loadBar.visible = !0, Mo.to(this.loadBar, {
                                value: .5
                            }, 300), this.listItem0.updateData(n[0], !0), this.listItem1.playRandom(n.slice(1, n.length - 1), 1500),
                                this.myProp1.setProp(Ht.power, Pa.propLevels[Ht.power], this._matchInfo.propLevels[Ht.power]),
                                this.myProp2.setProp(Ht.crit, Pa.propLevels[Ht.crit], this._matchInfo.propLevels[Ht.crit]),
                                this.myProp3.setProp(Ht.moveSpeed, Pa.propLevels[Ht.moveSpeed], this._matchInfo.propLevels[Ht.moveSpeed]),
                                this.condition.visible = !0, Mo.to(this.listItem0, {
                                    scaleX: 1,
                                    scaleY: 1,
                                    alpha: 1
                                }, 300), Mo.to(this.propBox0, {
                                    alpha: 1
                                }, 300), Mo.to(this.propBox1, {
                                    alpha: 1
                                }, 300), [4, en(300)];

                        case 2:
                            return t.sent(), this.targetProp1.setProp(Ht.power, this._matchInfo.propLevels[Ht.power], Pa.propLevels[Ht.power]),
                                this.targetProp2.setProp(Ht.crit, this._matchInfo.propLevels[Ht.crit], Pa.propLevels[Ht.crit]),
                                this.targetProp3.setProp(Ht.moveSpeed, this._matchInfo.propLevels[Ht.moveSpeed], Pa.propLevels[Ht.moveSpeed]),
                                Mo.to(this.listItem1, {
                                    scaleX: 1,
                                    scaleY: 1,
                                    alpha: 1
                                }, 300, null, null, 200), Mo.to(this.loadBar, {
                                    value: 1
                                }, 1500), [4, en(1800)];

                        case 3:
                            return t.sent(), [2];
                    }
                });
            });
        }, t.prototype.playVs = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.listItem1.stop(this._matchInfo), this.vsImage.scale(10, 10), this.vsImage.visible = !0,
                                this.vsImage.alpha = 0, Mo.to(this.vsImage, {
                                    scaleX: 1,
                                    scaleY: 1,
                                    alpha: 1
                                }, 300), [4, en(400)];

                        case 1:
                            return t.sent(), Mo.to(this.redBg, {
                                x: -u
                            }, 200, Laya.Ease.quadOut), Mo.to(this.greenBg, {
                                x: u
                            }, 200, Laya.Ease.quadOut), Mo.to(this.box, {
                                alpha: 0
                            }, 200), [4, en(300)];

                        case 2:
                            return t.sent(), [2];
                    }
                });
            });
        }, t.prototype.showRandomText = function () {
            this.titleLabel.visible = !0, Laya.timer.loop(1e3, this, this.randomAText);
        }, t.prototype.randomAText = function () {
            this.titleLabel.text = E(dt.matchingText);
        }, t.prototype.clearMatchText = function () {
            Laya.timer.clear(this, this.randomAText);
        }, t.prototype.destroy = function (t) {
            this.clearMatchText(), Mo.clearAll(this.loadBar), Laya.timer.clearAll(this), r.prototype.destroy.call(this, t);
        }, t;
    }(Ao);
    function No(t, e) {
        var i = bt.getDefById(t);
        if (!i) return Sa("no def"), !1;
        var n = Pa.propLevels[t];
        if (n || (n = 0), n >= i.lvMax) return Sa("属性已达最高等级"), !1;
        if (e) {
            var r = Math.floor(i.needGold * Math.pow(i.goldGrow, n + 1));
            if (r > Number(Laya.LocalStorage.getItem("goldgold"))) return console.log("金币不够", e),
                !1;
            console.log("？？？", Number(Laya.LocalStorage.getItem("goldgold")))
            let gg = Number(Laya.LocalStorage.getItem("goldgold"))
            gg -= r,
                Laya.LocalStorage.setItem("goldgold", gg)
            Pa.propLevels[t] = n + 1;
        } else {
            if (Pa.dailyPropVideoCount >= dt.maxVideoPropUpgrade) return Sa("看视频升级已达上限，请明天再来"),
                !1;
            Pa.dailyPropVideoCount++, Pa.propLevels[t] = n + 1;
        }
        return !0;
    }
    var Vo = [1, 2, 0, 3], Uo = 0,
        Go = function (n) {
            function t() {
                var t = n.call(this) || this;


                Laya.timer.loop(10, this, () => {
                    t.goldText.text = Number(Laya.LocalStorage.getItem("goldgold")).toString() + " "
                })
                t.selectedIndex = -1, t.tabList = [], t.name = "PropList", t.tabList = [t.tab0, t.tab1, t.tab2, t.tab3],
                    t.tab0.on(Laya.Event.CLICK, t, function () {
                        t.setSelectedTab(t.tab0), Pa.dailyPropVideoCount < dt.maxVideoPropUpgrade && !zo(Vo[0]) && ce("属性" + Vo[0]);
                    }), t.tab1.on(Laya.Event.CLICK, t, function () {
                        t.setSelectedTab(t.tab1), Pa.dailyPropVideoCount < dt.maxVideoPropUpgrade && !zo(Vo[1]) && ce("属性" + Vo[1]);
                    }), t.tab2.on(Laya.Event.CLICK, t, function () {
                        t.setSelectedTab(t.tab2), Pa.dailyPropVideoCount < dt.maxVideoPropUpgrade && !zo(Vo[2]) && ce("属性" + Vo[2]);
                    }), t.tab3.on(Laya.Event.CLICK, t, function () {
                        t.setSelectedTab(t.tab3), Pa.dailyPropVideoCount < dt.maxVideoPropUpgrade && !zo(Vo[3]) && ce("属性" + Vo[3]);
                    }), t.goldBtn.on(Laya.Event.CLICK, t, t.goldUpgrade),
                    t.videoBtn.on(Laya.Event.CLICK, t, t.videoUpgrade),
                    t.tab0.setTitle(bt.getDefById(Vo[0]).name), t.tab1.setTitle(bt.getDefById(Vo[1]).name),
                    t.tab2.setTitle(bt.getDefById(Vo[2]).name), t.tab3.setTitle(bt.getDefById(Vo[3]).name),
                    t.setSelectedTab(t.tab0);
                var e = Number(Laya.LocalStorage.getItem("goldgold")),
                    i = Pa.dailyPropVideoCount;
                return t.addToDestroy = Object(m.a)(function () {
                    e === Number(Laya.LocalStorage.getItem("goldgold")) && i === Pa.dailyPropVideoCount || (e = Number(Laya.LocalStorage.getItem("goldgold")), i = Pa.dailyPropVideoCount,
                        t.refreshContent(), t.checkUpgrade());
                }),
                    t.addToDestroy = Object(m.a)(function () {
                        console.log("存储2？", Number(Laya.LocalStorage.getItem("goldgold")))
                        if (Number(Laya.LocalStorage.getItem("goldgold")) < 0) {
                            Number(Laya.LocalStorage.setItem("goldgold", 0))
                        }
                        t.goldText.text = Number(Laya.LocalStorage.getItem("goldgold")) +" "//Number(Laya.LocalStorage.getItem("goldgold")) + "";
                        Laya.LocalStorage.setItem("goldgold", Number(Laya.LocalStorage.getItem("goldgold")))
                    }),
                    t.checkUpgrade(),
                    t.refreshContent(),
                    t;
            }
            return Object(Q.d)(t, n), t.prototype.setSelectedTab = function (t) {
                this.selectedTab && (this.selectedTab.selected = !1), this.selectedTab = t, this.selectedTab ? (this.selectedIndex = this.tabList.indexOf(t),
                    this.selectedTab.selected = !0) : this.selectedIndex = -1, this.refreshContent();
            }, t.prototype.checkUpgrade = function () {
                for (var t = !1, e = 0; e < 4; e++) {
                    var i = Vo[e];
                    this.tabList[e].upgradeIcon.visible = zo(i), this.tabList[e].upgradeIcon.visible && (t = !0);
                }
                if (!t && Pa.dailyPropVideoCount < dt.maxVideoPropUpgrade) for (e = 0; e < 4; e++) {
                    i = Vo[e];
                    this.tabList[e].upgradeIcon.visible = Pa.getPropLevel(i) < bt.getDefById(i).lvMax;
                }
            }, t.prototype.refreshContent = function () {

                //升级按钮
                if (!(this.selectedIndex < 0 || 4 <= this.selectedIndex)) {

                    var t = Vo[this.selectedIndex],
                        e = bt.getDefById(t),
                        i = Pa.getPropLevel(t),
                        n = Fo(i, e), r = i >= e.lvMax;
                    this.icon.skin = "ui/icon_prop" + e.propType + ".png";
                    var o = e.initValue + e.valueGrow * i,
                        s = e.desc;
                    s = (s = o !== Math.floor(o) ? s.replace("{0}", o.toFixed(1)) : s.replace("{0}", o + "")).replace("{0.percent}", (100 * o).toFixed(1) + "%"),
                        this.curDescText.text = s;
                    var a = e.initValue + e.valueGrow * n;

                    if (Laya.LocalStorage.getItem("upup" + e.name) == 0
                        || Laya.LocalStorage.getItem("upup" + e.name) == null) {
                        Laya.LocalStorage.setItem("upup" + e.name, e.initValue + e.valueGrow * n)
                    }
                    if (a > Number(Laya.LocalStorage.getItem("upup" + e.name))) {
                        Laya.LocalStorage.setItem("upup" + e.name, e.initValue + e.valueGrow * n)
                    }
                    console.log("upup", e)
                    if (e.desc.includes("{0.percent}") ?


                        this.nextDescText.text = "Next level:" + (100 * Number(Laya.LocalStorage.getItem("upup" + e.name))).toFixed(1) + "% " :
                        Number(Laya.LocalStorage.getItem("upup" + e.name)) !== Math.floor(Number(Laya.LocalStorage.getItem("upup" + e.name))) ?
                            this.nextDescText.text = "Next level:" + Number(Laya.LocalStorage.getItem("upup" + e.name)).toFixed(1) + " " :
                            this.nextDescText.text = "Next level:" + Number(Laya.LocalStorage.getItem("upup" + e.name)) + " ",


                        this.nextDescText.visible = !r,
                        this.videoBtn.visible = !r,
                        this.goldBtn.visible = !r,
                        this.goldGroup.visible = !1,
                        this.freeIcon.visible = r,
                        this.freeLabel.visible = !1,
                        !r) {
                        var c = Pa.dailyPropVideoCount < dt.maxVideoPropUpgrade,
                            u = Math.floor(e.needGold * Math.pow(e.goldGrow, n));
                        this.needGoldText.text = u + " ",

                            this.freeLabel.visible = this.videoBtn.visible = c && Number(Laya.LocalStorage.getItem("goldgold")) < u,
                            this.goldBtn.visible = Number(Laya.LocalStorage.getItem("goldgold")) >= u,
                            this.goldGroup.visible = !this.freeLabel.visible;
                    }
                    // window.tiptip.visible = !0

                }
            },
                t.prototype.goldUpgrade = function () {
                    return Object(Q.b)(this, void 0, void 0, function () {
                        var e, i;
                        return Object(Q.e)(this, function (t) {
                            return this.selectedIndex < 0 || (e = Vo[this.selectedIndex], i = Pa.propLevels[e],
                                function (t, e) {
                                    Object(l.sendAnalysis)("属性养成-属性" + t + "用金币升级至" + e + "级");
                                }(e, i), this.upgradeProp(e, !0), Uo = ie.curTime), [2];
                        });
                    });
                },
                t.prototype.upgradeProp = function (t, e) {
                    window.tiptip.visible = !0,

                        Laya.timer.once(1500, this, () => {
                            window.tiptip.visible = !1;
                        })
                    No(t, e) && (this.refreshContent(), Sa("升级成功"));
                },

                t.prototype.videoUpgrade = function () {
                    YYGGames.showReward(() => {

                        //激励
                        return Object(Q.b)(this, void 0, void 0, function () {

                            var e, i;
                            return Object(Q.e)(this, function (t) {

                                return this.selectedIndex < 0 || (e = Vo[this.selectedIndex], i = Pa.propLevels[e],
                                    function (t, e) {

                                        Object(l.sendAnalysis)("属性养成-属性" + t + "用金币升级至" + e + "级");
                                    }(e, i), this.upgradeProp(e, !1), Uo = ie.curTime), [2];
                            });
                        });
                    })




                }


                ,



                t.prototype.createChildren = function () {
                    n.prototype.createChildren.call(this), this.loadUI("PropList");
                }, t;
        }(Nt);
    function zo(t) {
        var e = bt.getDefById(t), i = Pa.getPropLevel(t), n = Fo(i, e), r = Math.floor(e.needGold * Math.pow(e.goldGrow, n));
        return i < e.lvMax && Number(Laya.LocalStorage.getItem("goldgold")) >= r;
    }
    function Fo(t, e) {
        var i;
        return t <= 0 ? i = 1 : (i = t + 1) > e.lvMax && (i = e.lvMax), i;
    }
    var Ho, $o, Ko = function () {
        function t(t) {
            this.gamesList = (t[1] || []).map(Wo), this.gamesIcon = t[2] || [], this.gamesBanner = t[3] || [],
                this.navigateReward = t[7] || [];
        }
        return t.prototype.getRandomItem = function (t) {
            return Object(l.getRandomMoreGameIconItem)(this.gamesIcon, t);
        }, t;
    }();
    function Wo(e) {
        return e.lastClick = wx.getStorageSync("more-games-" + e.name) || 0, Object.defineProperty(e, "isRed", {
            get: function () {
                return Date.now() - this.lastClick > 864e5 * this.redPoint;
            },
            configurable: !0,
            enumerable: !0
        }), e = Object(m.g)(e), Object(m.h)(function () {
            return e.lastClick;
        }, function (t) {
            wx.setStorageSync("more-games-" + e.name, t);
        }), e;
    }
    function Xo() {
        return Object(Q.b)(this, void 0, void 0, function () {
            var e;
            return Object(Q.e)(this, function (t) {
                switch (t.label) {
                    case 0:
                        return Ho ? [2, Ho] : ($o || ($o = Object(l.getMoreGamesConfig)()), e = Ko.bind,
                            [4, $o]);

                    case 1:
                        return Ho = new (e.apply(Ko, [void 0, t.sent()]))(), $o = void 0, [2, Ho];
                }
            });
        });
    }
    function qo(t) {
        var i = wx.createImage();
        i.onload = function () {
            var t = wx.createCanvas();
            t.width = i.width, t.height = i.height, t.getContext("2d").drawImage(i, 0, 0);
            var e = t.toTempFilePathSync({
                x: 0,
                y: 0,
                width: t.width,
                height: t.height
            });
            wx.previewImage({
                current: e,
                urls: [e],
                success: function (t) { },
                fail: function () { }
            });
        }, i.src = t;
    }
    function Yo(s, a, c) {
        return Object(Q.b)(this, void 0, void 0, function () {
            var r, o, e;
            return Object(Q.e)(this, function (t) {
                switch (t.label) {
                    case 0:
                        if (!s) return [2, -1];
                        if (Object(l.sendAnalysis)(a + "-" + s.name + "-点击"), "function" != typeof wx.navigateToMiniProgram) return Object(l.sendAnalysis)(a + "-" + s.name + "-出大图"),
                            qo(s.appCode), [2, 2];
                        r = s.appId, o = s.path, Object(l.sendApi)("gameTrialClick"), t.label = 1;

                    case 1:
                        return t.trys.push([1, 3, , 4]), [4, new Promise(function (e, i) {
                            l.Logger.log("navigateToMiniProgram: " + r + " " + o);
                            var n = new Promise(function (t) {
                                wx.onShow(t);
                            });
                            wx.navigateToMiniProgram({
                                appId: r,
                                path: o,
                                success: function () {
                                    Object(l.sendAnalysis)(a + "-" + s.name + "-成功");
                                    var t = Date.now();
                                    n.then(function () {
                                        Date.now() - t >= ("number" != typeof $hostDef.navigateBack || isNaN($hostDef.navigateBack) ? 1e4 : 1e3 * $hostDef.navigateBack) && Object(l.sendApi)("gameTrial");
                                    }), c && c(), e(1);
                                },
                                fail: function (t) {
                                    "navigateToMiniProgram:fail cancel" === t.errMsg ? (Object(l.sendAnalysis)(a + "-" + s.name + "-取消"),
                                        e(0)) : i(t.errMsg);
                                }
                            });
                        })];

                    case 2:
                        return [2, t.sent()];

                    case 3:
                        return e = t.sent(), l.Logger.warn("跳转出错:", e), Object(l.sendAnalysis)(a + "-" + s.name + "-出大图"),
                            qo(s.appCode), [3, 4];

                    case 4:
                        return [2, 2];
                }
            });
        });
    }
    var Qo = function (e) {
        function t() {
            var i = e.call(this) || this;
            i.isForward = !0, i.timerId = -1;
            var t = new Laya.Image("ui/more_games_recommend.png");
            t.sizeGrid = "50,0,0,190", t.width = 750, t.height = 203, i.addChild(t), i.pivot(t.width / 2, t.height);
            var n = i.iconList = new Laya.List();
            return n.hScrollBarSkin = "", n.scrollBar.hide = !0, n.scrollBar.elasticBackTime = 200,
                n.scrollBar.elasticDistance = 200, n.repeatY = 1, n.itemRender = Jo, n.renderHandler = new Laya.Handler(i, function (t) {
                    var e = t.dataSource;
                    t.skin = e ? e.icon : "";
                }), n.spaceX = 20, n.x = Laya.stage.width / 2, n.y = 70, i.addChild(n), n.on(Laya.Event.MOUSE_UP, i, function () {
                    5 < i.iconList.length && (i.stopRollAnimation(), -1 !== i.timerId && clearTimeout(i.timerId),
                        i.timerId = setTimeout(function () {
                            clearTimeout(i.timerId), i.timerId = -1, i.startRollAnimation();
                        }, 5e3));
                }), Xo().then(function (t) {
                    if (!i.destroyed && t.gamesBanner) {
                        var e = t.gamesBanner;
                        n.dataSource = e, n.repeatX = Math.min(e.length, 6), n.pivotX = (100 * n.repeatX + 20 * (n.repeatX - 1)) / 2,
                            n.x = u / 2, i.startRollAnimation();
                    }
                }), i;
        }
        return Object(Q.d)(t, e), t.prototype.startRollAnimation = function () {
            var i = this;
            if (!(this.iconList.length <= 6)) {
                var n = this.iconList.scrollBar;
                if (n) {
                    var r = n.min, o = n.max, s = 1500 * this.iconList.length, t = this.isForward ? 20 * (o - n.value) : 20 * (n.value - r), e = this.isForward ? o : r;
                    TWEEN.killTweensOf(n), new TWEEN.Tween(n).to({
                        value: e
                    }, t).delay(2e3).onComplete(function () {
                        i.isForward = !i.isForward;
                        var t = i.isForward ? o : r, e = i.isForward ? r : o;
                        new TWEEN.Tween(n).to({
                            value: t
                        }, s).delay(2e3).onComplete(function () {
                            i.isForward = !1, new TWEEN.Tween(n).to({
                                value: e
                            }, s).delay(2e3).onComplete(function () {
                                i.isForward = !0, i.startRollAnimation();
                            }).start();
                        }).start();
                    }).start();
                }
            }
        }, t.prototype.stopRollAnimation = function () {
            var t = this.iconList.scrollBar;
            t && TWEEN.killTweensOf(t);
        }, t.prototype.destroy = function (t) {
            void 0 === t && (t = !0), -1 !== this.timerId && clearTimeout(this.timerId), this.stopRollAnimation(),
                e.prototype.destroy.call(this, t);
        }, t;
    }(Laya.Sprite), Jo = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.width = 100, t.height = 100, t.x = t.pivotX = t.width / 2, t.y = t.pivotY = t.height / 2,
                t.on(Laya.Event.MOUSE_DOWN, t, t.scaleSmall), t.on(Laya.Event.MOUSE_UP, t, t.scaleBig),
                t.on(Laya.Event.MOUSE_OUT, t, t.scaleBig), t.on(Laya.Event.CLICK, t, t.onClick),
                t;
        }
        return Object(Q.d)(t, e), t.prototype.onClick = function () {
            Yo(this.dataSource, "猜你喜欢");
        }, t.prototype.scaleSmall = function () {
            this.scaleX = this.scaleY = .8;
        }, t.prototype.scaleBig = function () {
            this.scaleX = this.scaleY = 1;
        }, t;
    }(Laya.Image), Zo = function (i) {
        function t() {
            var e = i.call(this) || this, t = new Laya.Image("ui/sButton_more_games.png");
            return e.addChild(t), e.pivot(t.width / 2, t.height / 2), e.on(Laya.Event.CLICK, e, e.onTouch),
                e.startShake(), e.visible = !1, Xo().then(function (t) {
                    e.config = t, e.visible = !0, e.updateIcon();
                }), e;
        }
        return Object(Q.d)(t, i), t.prototype.updateIcon = function () {
            if (this.config) {
                var t = this.def && this.def.name, e = this.def = this.config.getRandomItem(t), i = this.icon;
                i || ((i = this.icon = new Laya.Image()).width = 80, i.height = 80, i.x = 12, i.y = 12,
                    this.addChild(i)), i.skin = e ? e.icon : "";
            }
        }, t.prototype.startShake = function () {
            var t = this;
            this.stopShake(), this.intervalKey = setInterval(function () {
                t.shake();
            }, 1500);
        }, t.prototype.shake = function () {
            var t = this;
            Laya.Tween.to(this, {
                rotation: 20
            }, 100, void 0, Laya.Handler.create(this, function () {
                Laya.Tween.to(t, {
                    rotation: -15
                }, 100, void 0, Laya.Handler.create(t, function () {
                    Laya.Tween.to(t, {
                        rotation: 10
                    }, 100, void 0, Laya.Handler.create(t, function () {
                        Laya.Tween.to(t, {
                            rotation: -5
                        }, 100, void 0, Laya.Handler.create(t, function () {
                            Laya.Tween.to(t, {
                                rotation: 0
                            }, 100);
                        }));
                    }));
                }));
            }));
        }, t.prototype.stopShake = function () {
            Laya.Tween.clearAll(this), this.intervalKey && (clearInterval(this.intervalKey),
                this.intervalKey = void 0);
        }, t.prototype.onTouch = function () {
            Yo(this.def, "点击试玩"), this.updateIcon();
        }, t.prototype.destroy = function (t) {
            i.prototype.destroy.call(this, t), this.stopShake();
        }, t;
    }(Laya.UIComponent), ts = !0;
    function es() {
        return ts;
    }
    function is(t, e, i) {
        if (void 0 !== wx.createFeedbackButton) {
            l.Logger.log("wx.createFeedbackButton...");
            var n = wx.createFeedbackButton({
                type: "image",
                image: "res/touch_button.png",
                style: i
            });
            t(Object(m.h)(e, function (t) {
                t ? (console.log("show Feedback"), n.show()) : (n.hide(), console.log("hide Feedback"));
            }, {
                fireImmediately: !0
            })), t(function () {
                n.hide(), n.destroy();
            });
        }
    }
    var ns = Laya.Tween, rs = Laya.Handler, os = function () {
        function t(t) {
            var e = this;
            this.view = t, this._destroyBag = [], this._swing = !1, this.view.visible = $hostDef.favoriteIcon,
                this._redPoint = this.view.getChildByName("redPoint"), this.addToDestroy = Object(m.a)(function () {
                    e._redPoint.visible = 0 == Pa.dailyFavoriteTimes;
                }), this._redPoint.visible = 0 == Pa.dailyFavoriteTimes, this.swingComplete();
        }
        return Object.defineProperty(t.prototype, "addToDestroy", {
            set: function (t) {
                this._destroyBag.push(t);
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.swingComplete = function () {
            ns.to(this.view, {
                rotation: this._swing ? 30 : -30
            }, 800, Laya.Ease.linearOut, rs.create(this, this.swingComplete)), this._swing = !this._swing;
        }, t.prototype.destroy = function () {
            this._destroyBag.splice(0).forEach(function (t) {
                return t();
            }), ns.clearAll(this.view), this.view = null;
        }, t;
    }(), ss = 500;
    var as = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.name = "FavoriteView", t.canTapMaskClose = !0, t.backBtn.on(Laya.Event.CLICK, t, t.close),
                t.rewardBtn.on(Laya.Event.CLICK, t, function () {
                    return Object(Q.b)(t, void 0, void 0, function () {
                        var e;
                        return Object(Q.e)(this, function (t) {
                            if (0 < Pa.dailyFavoriteTimes) return Sa("今日已领过了 "), [2];
                            if (0 == Gt.isFromFavoriteScene()) return Sa("从我的小程序进游戏，才可获得哦 "), [2];
                            try {
                                (e = function () {
                                    if (!(0 < Pa.dailyFavoriteTimes)) {
                                        var t = new Jt();

                                        return Laya.LocalStorage.setItem("goldgold", Number(Laya.LocalStorage.getItem("goldgold")) + ss), Pa.dailyFavoriteTimes += 1, t.addGold(ss), t;
                                    }
                                    Sa("今日已领取");
                                }()) && 0 < e.gold && Sa("恭喜，获得金币" + e.gold);
                            } catch (t) {
                                _a("提示", t);
                            }
                            return [2];
                        });
                    });
                }), t;
        }
        return Object(Q.d)(t, e), t.prototype.show = function () {
            e.prototype.show.call(this), zt(this.panel);
        }, t.prototype.close = function () {
            TWEEN.killTweensOf(this.panel), e.prototype.close.call(this);
        }, t;
    }(Rt.FavoriteViewUI), cs = function (s) {
        function t(t, e, i, n, r) {
            void 0 === n && (n = 720);
            var o = s.call(this, t) || this;
            return o.rankKey = i, o.height = n, o.shareTicket = r, o.width = 640, o.screenX = e.x / p,
                o.screenY = e.y / p, o.updateTexture(), o;
        }
        return Object(Q.d)(t, s), t.prototype.update = function () {
            this._dirty ? (this._dirty = !1, tt && tt.postMessage(this.getMessage())) : s.prototype.update.call(this);
        }, t.prototype.getMessage = function () {
            if (this.shareTicket) return {
                type: "groupRank",
                screenX: this.screenX,
                screenY: this.screenY,
                shareTicket: this.shareTicket,
                dataKey: this.rankKey
            };
            var t = void 0, e = Date.now();
            return 12e4 < e - x.lastRefreshRankPanelTime ? (t = !0, l.Logger.log("刷新排行榜", e - x.lastRefreshRankPanelTime),
                x.lastRefreshRankPanelTime = e) : t = !1, {
                type: "rank",
                screenX: this.screenX,
                screenY: this.screenY,
                refresh: t,
                dataKey: this.rankKey
            };
        }, t;
    }(function () {
        function t(t) {
            this.frequency = 1, this.i = 0, this.sprite = t, this.sprite.texture = it;
        }
        return t.prototype.update = function () {
            ++this.i >= this.frequency && (this.i = 0, this.updateTexture());
        }, t.prototype.updateTexture = function () {
            this.sprite && tt && it.bitmap.loadImageSource(et);
        }, t.prototype.save = function () {
            this.sprite && (this.sprite.visible = !1);
        }, t.prototype.restore = function () {
            this.sprite && (this.sprite.visible = !0);
        }, t.prototype.dispose = function () {
            this.sprite = null;
        }, t;
    }()), us = function (i) {
        function t() {
            var t = i.call(this) || this;
            t.tabIndex = 0, t.name = "RankView", t.canTapMaskClose = !0, t.closeBtn.on(Laya.Event.CLICK, t, t.close),
                t.tabFriend.on(Laya.Event.CLICK, t, t.onTabGrad), t.tabGroup.on(Laya.Event.CLICK, t, t.onTabGroup),
                t.tabGroup.visible = !$hostDef.censor, t.panel.centerY = -20;
            var e = t.rank = new Laya.Sprite();
            return t.rankContainer.addChild(e), t;
        }
        return Object(Q.d)(t, i), t.prototype.onTabGrad = function () {
            0 != this.tabIndex && (this.tabFriend.skin = "ui/tab_skin_active.png", this.tabGroup.skin = "ui/tab_skin_unactive.png",
                this.tabIndex = 0, this.checkRankList());
        }, t.prototype.onTabGroup = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                return Object(Q.e)(this, function (t) {
                    return gi(Kt.normal).then(function (t) {
                        Ta("点击群里的链接即可查看群排行！", 1500);
                    }), [2];
                });
            });
        }, t.prototype.checkRankList = function () {
            this.showOpenDataRank();
        }, t.prototype.show = function (t) {
            i.prototype.show.call(this), null != (this.shareTicket = t) && 0 < t.length && (this.tabFriend.skin = "ui/tab_skin_unactive.png",
                this.tabGroup.skin = "ui/tab_skin_active.png", this.tabIndex = 1), this.showOpenDataRank();
        }, t.prototype.showOpenDataRank = function () {
            var t = this.shareTicket;
            this.removeOpenDataRank(), this.rank.visible = !0;
            var e = this.opendata = new cs(this.rank, {
                x: this.rankContainer.x + this.panel.x,
                y: this.rankContainer.y + this.panel.y
            }, "grad", this.rankContainer.height, t);
            (t || 12e4 < Date.now() - x.lastRefreshRankPanelTime) && wx.showToast({
                title: "正在加载...",
                icon: "loading",
                duration: 300
            }), function (t) {
                ot && (ot.save(), at.push(ot)), et.width = t.width, et.height = t.height, tt && tt.postMessage(t.getMessage()),
                    ot = t;
            }(e);
        }, t.prototype.removeOpenDataRank = function () {
            this.opendata && (function (t) {
                if (ot === t) t.dispose(), (ot = at.pop()) ? (et.width = ot.width, et.height = ot.height,
                    tt && tt.postMessage(ot.getMessage(!0)), ot.restore()) : tt && tt.postMessage({
                        type: "hide"
                    }); else {
                    var e = at.indexOf(t);
                    -1 !== e && (t.dispose(), at.splice(e, 1));
                }
            }(this.opendata), this.opendata = void 0), this.rank.visible = !1;
        }, t.prototype.close = function () {
            this.removeOpenDataRank(), i.prototype.close.call(this);
        }, t;
    }(Rt.RankViewUI), hs = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.name = "SettingsView", t.canTapMaskClose = !0, t.closeBtn.on(Laya.Event.CLICK, t, t.close),
                t.panel.y = f / 2, t.addToDestroy = Object(m.a)(function () {
                    t.vibrateBtn.skin = ki.vibrate ? "ui/sButton_vibrate_on.png" : "ui/sButton_vibrate_off.png";
                }), t.addToDestroy = Object(m.a)(function () {
                    t.audioBtn.skin = ki.audio ? "ui/sButton_audio_on.png" : "ui/sButton_audio_off.png";
                }), t.audioBtn.on(Laya.Event.CLICK, t, function () {
                    ki.audio = !ki.audio;
                }), t.vibrateBtn.on(Laya.Event.CLICK, t, function () {
                    ki.vibrate = !ki.vibrate;
                }), t;
        }
        return Object(Q.d)(t, e), t.prototype.show = function () {
            e.prototype.show.call(this), zt(this.panel);
        }, t.prototype.close = function () {
            TWEEN.killTweensOf(this.panel), e.prototype.close.call(this);
        }, t;
    }(Rt.SettingsViewUI);
    var ls = function (i) {
        function t() {
            var t = i.call(this) || this;
            t.name = "GradView", t.backBtn.y = xi.top + t.backBtn.y, t.gradList.y = xi.top + t.gradList.y,
                t.gradList.height = h - t.gradList.y, t.backBtn.on(Laya.Event.CLICK, t, t.close);
            var e = t.gradList;
            return e.vScrollBarSkin = "", e.renderHandler = new Laya.Handler(t, function (t, e) {
                t.onRender(e);
            }), e.array = lt.getList(), e.scrollTo(Pa.grad - 1), t;
        }
        return Object(Q.d)(t, i), t;
    }(Rt.GradViewUI), ps = !1;
    var ds = function (e) {
        function t() {
            var c = e.call(this) || this;

            c.name = "StartView",
                c.maskAlpha = .2;
            c.content.y = xi.top + c.content.y - 15;
            c.content.height = h - c.content.y;
            c.maxEntityLabel.text = Pa.maxScore + "";
            c.startBtn.on(Laya.Event.CLICK, c, c.onStart);

            //声音
            if (Laya.LocalStorage.getItem("soundsound") == 0
                || Laya.LocalStorage.getItem("soundsound") == null) {
                this.issoundOff = false;
                Laya.SoundManager.playMusic("resource/new/bgm.mp3")
                c.onSoundBtn.skin = "new/on.png";
            }
            else {
                this.issoundOff = true;
                Laya.SoundManager.stopMusic("resource/new/bgm.mp3")
                c.onSoundBtn.skin = "new/off.png";
            };

            c.onSoundBtn.on(Laya.Event.CLICK, this, () => {
                this.issoundOff = !this.issoundOff;
                if (!this.issoundOff) {
                    Laya.LocalStorage.setItem("soundsound", 0);
                    Laya.SoundManager.playMusic("resource/new/bgm.mp3")
                    c.onSoundBtn.skin = "new/on.png";
                }
                else {
                    Laya.LocalStorage.setItem("soundsound", 1);
                    Laya.SoundManager.stopMusic("resource/new/bgm.mp3");
                    c.onSoundBtn.skin = "new/off.png";
                }
            });



            if (c.favoriteBtn.visible = !$hostDef.censor, $hostDef.censor || (c.favoriteBtn.y += xi.top,
                c._swingEffect = new os(c.favoriteBtn),
                c.favoriteBtn.on(Laya.Event.CLICK, c, function () {
                    new as().show();
                })),
                c.settingsBtn.on(Laya.Event.CLICK, c, function () {
                    new hs().show();
                }),
                $hostDef.censor ? c.activitySkinBtn.visible = !1 : c.addToDestroy = Object(m.a)(function () {
                    var t = Ui();
                    if (c.activitySkinBtn.visible = !!t, c.activityRed.visible = !1, t && !Pa.getSkin(t.skinId)) {
                        var e = t.needCount - Pa.groupUserList.length;
                        c.activityRed.visible = e <= 0;
                    }
                }),

                window.tiptip = c.tipView,


                c.activitySkinBtn.on(Laya.Event.CLICK, c, function () {
                    new Fi().show();
                }),








                c.addToDestroy = Object(m.a)(function () {
                    var t = Ui();
                    c.limitSkinIcon.skin = t ? "icon/icon_skin_" + t.skinId + ".png" : "";
                }), c.skinBtn.visible = !$hostDef.censor, c.skinBtn.on(Laya.Event.CLICK, c, function () {
                    YYGGames.showInterstitial(() => {

                        new Li().show();
                    })



                }),
                c.addToDestroy = Object(m.a)(function () {
                    c.skinRedPoint.visible = !1//Pa.hasUnusedSkin;
                }), c.dialBtn.on(Laya.Event.CLICK, c, function () {
                    new Bi().show();
                }), c.qIcon.visible = !$hostDef.censor, c.gradBg.on(Laya.Event.CLICK, c, function () {
                    $hostDef.censor || new ls().show();
                }), c.entityGroup.on(Laya.Event.CLICK, c, function () {
                    $hostDef.censor || new ls().show();
                }), c.rankBtn.on(Laya.Event.CLICK, c, function () {
                    new us().show();
                }), oe("首页带球速度+30%"),
                c.shareBtn.visible = !$hostDef.censor,
                c.shareBtn.on(Laya.Event.CLICK, c, function () {

                    $hostDef.shareStrong && V() ? Ps.holdBallSpeedAdd = Ds : (ye("002", "点分享恢复"), se("首页带球速度+30%"),
                        $hostDef.shareStrong && Ps.holdBallSpeedAdd <= 0 ? (1, Mi(Kt.addSpeedHome, {
                            shareCount: 0
                        }).then(function (t) {
                            t && (Ps.holdBallSpeedAdd = Ds, ae("首页带球速度+30%"));
                        })) : gi(Kt.addSpeedHome).then(function (t) {
                            1 === t && ae("首页带球速度+30%");
                        }));
                }), c.dialBtn.visible = !$hostDef.censor, c.addToDestroy = Object(m.a)(function () {

                    c.turntableRedPoint.visible = 0 < Pa.ticket;
                }), c.addToDestroy = Object(m.a)(function () {
                    c.tipsStart.visible = Boolean(!$hostDef.shareToVideo && 0 < Ps.holdBallSpeedAdd && $hostDef.shareStrong),
                        c.tipsStrong.visible = Boolean(!$hostDef.shareToVideo && Ps.holdBallSpeedAdd <= 0 && $hostDef.shareStrong);
                }), c.addToDestroy = Object(m.a)(function () {
                    var t = lt.getDefById(Pa.grad);
                    t && (c.gradIcon.skin = "icon/" + t.resource + ".png");
                    var e = lt.getDefById(Pa.grad + 1);
                    e ? (c.progress.value = Math.min(1, Pa.cupNum / e.cupNum), c.progressLabel.text = Pa.cupNum + "/" + e.cupNum) : (c.progressLabel.text = "",
                        c.progress.value = 1);
                }), u / h >= $hostDef.whScale && (c.bottomGroup.bottom = 0), c.otherGame.visible = !1,
                c.gameIcon.visible = !1, $hostDef.censor || function () {
                    return Object(Q.b)(this, void 0, void 0, function () {
                        var e, i, n;
                        return Object(Q.e)(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return 0 == (e = !$hostDef.censor && $hostDef.mgPanel) ? (ts = !1, [2]) : Object(l.isInBlackList)(Pa.nick) ? (ts = !1,
                                        [2]) : 0 < $hostDef.adblock ? [4, Object(l.amIFromBigCity)()] : [3, 2];

                                case 1:
                                    i = t.sent(), e = 0 == i, t.label = 2;

                                case 2:
                                    return 1 == $hostDef.adblock ? (ts = e, [2]) : 2 != $hostDef.adblock || 0 != e ? [3, 5] : Pa.grad >= $hostDef.checkGradLevel ? (ts = !0,
                                        [2]) : (n = wx.getLaunchOptionsSync().referrerInfo) && n.appId ? [4, Object(l.isOurApp)(n.appId)] : [3, 4];

                                case 3:
                                    return ts = !!t.sent(), [3, 5];

                                case 4:
                                    ts = !1, t.label = 5;

                                case 5:
                                    return [2];
                            }
                        });
                    });
                }().then(function () {
                    if (!1 !== $hostDef.mgIcon) {
                        var t = new Zo();
                        t.x = c.gameIcon.x, t.y = c.gameIcon.y, c.content.addChild(t);
                    }
                    if (es() && (c.otherGame.visible = !0), es() && u / h < $hostDef.whScale) {
                        var e = new Qo();
                        e.x = u / 2, e.y = f, c.addChild(e);
                    }
                }), !$hostDef.censor && "api-test" === $hostDef.api) {
                var t = !1;
                c.logo.on(Laya.Event.CLICK, c, function () {
                    // t ? (t = !1, new so().show()) : t = !0;
                });
            }
            return setTimeout(function () {
                if (!c.destroyed) {
                    if ("function" == typeof wx.createFeedbackButton) {
                        var t = c.serviceBtn;
                        is(function (t) {
                            return c.addToDestroy = t;
                        }, function () {
                            return 0 === O.openedPanelCount && 1 === k.openedPanelCount;
                        }, {
                            width: Math.ceil(t.width / p),
                            height: Math.ceil(t.height / p),
                            left: Math.floor(t.x / p),
                            top: Math.floor((t.y - t.height / 2) / p)
                        });
                    } else c.serviceBtn.visible = !1;
                    if (function () {
                        if (void 0 === wx.createUserInfoButton || ps) return !1;
                        if (Pa.isGuest) return !0;
                        var t = wx.getStorageSync("authorizeTime");
                        return !(!isNaN(t) && ee(new Date(t), new Date(ie.curTime)));
                    }()) {
                        var e = c.startBtn, i = e.width, n = e.height, r = c.startBtn.localToGlobal(new Laya.Point()), o = r.x, s = r.y, a = !1;
                        !function (t, e, i, n) {
                            if (void 0 !== wx.createUserInfoButton) {
                                l.Logger.log("wx.createUserInfoButton...");
                                var r = wx.createUserInfoButton({
                                    type: "image",
                                    image: "res/touch_button.png",
                                    style: i,
                                    withCredentials: !0
                                }), o = function (t) {
                                    t && t.encryptedData && t.iv ? (a(), n(t)) : n();
                                }, s = !1, a = function () {
                                    s || (s = !0, r.offTap(o), r.hide(), r.destroy());
                                };
                                r.onTap(o), r.show(), t(Object(m.h)(e, function (t) {
                                    t ? r.show() : r.hide();
                                }, {
                                    fireImmediately: !0
                                })), t(a);
                            }
                        }(function (t) {
                            return c.addToDestroy = t;
                        }, function () {
                            return 0 === O.openedPanelCount && 1 === k.openedPanelCount;
                        }, {
                            width: Math.ceil(i / p),
                            height: Math.ceil(n / p),
                            left: Math.floor(o / va / p),
                            top: Math.floor(s / va / p)
                        }, function (n) {
                            return Object(Q.b)(c, void 0, void 0, function () {
                                var e, i;
                                return Object(Q.e)(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return a ? [2] : (a = !0, Pa.syncGroupSkinUserList(), DEVELOP && l.Logger.log("updateAuthorizeTime"),
                                                ps = !0, wx.setStorageSync("authorizeTime", ie.curTime), n && n.userInfo ? (e = n.encryptedData,
                                                    i = n.iv, [4, Object(l.syncUserInfo)(e, i)]) : [3, 2]);

                                        case 1:
                                            t.sent(), Pa.isGuest = !1, Pa.avatar = n.userInfo.avatarUrl, Pa.syncGroupSkinUserList(),
                                                t.label = 2;

                                        case 2:
                                            return this.onStart(), n ? ye("003.1", "授权进游戏") : ye("003.2", "不授权进游戏"), [2];
                                    }
                                });
                            });
                        });
                    }
                }
            }, 0), c.tipsStrong.visible = Boolean(!$hostDef.shareToVideo && $hostDef.shareStrong),
                $hostDef.censor && (c.shareBtn.visible = !1), c;






        }
        return Object(Q.d)(t, e),
            t.prototype.onStart = function () {

                // YYGGames.showInterstitial(() => {

                    return Object(Q.b)(this, void 0, void 0, function () {
                        var e;
                        return Object(Q.e)(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    ye("003", "点开始游戏"), re("点击首页【开始游戏】"), this.visible = !1, t.label = 1;

                                case 1:
                                    return t.trys.push([1, 3, 4, 5]), [4, Ps.startFight()];

                                case 2:

                                    return t.sent(), this.close(), [3, 5];

                                case 3:
                                    return e = t.sent(), Ps.reset(), this.visible = !0, _a("开始游戏出错:", e), [3, 5];

                                case 4:
                                    return [7];

                                case 5:
                                    return [2];
                            }
                        });
                    });
                // })
            }, t.prototype.show = function () {
                e.prototype.show.call(this),
                    Hi.changePhase(0),
                    Laya.timer.once(1e3, this, Adapter.hideLoading),
                    YYGGames.gameBox.game1.visible = YYGGames.gameBox.game2.visible = !0
                Laya.timer.loop(1500, this, this.showBtn);
                if (Laya.LocalStorage.getItem("goldgold") == 0
                    || Laya.LocalStorage.getItem("goldgold") == null) {
                    Laya.LocalStorage.setItem("goldgold", 0)
                }
                pa.gold = Number(Laya.LocalStorage.getItem("goldgold"))
                console.log("存储？", pa.gold)



            }, t.prototype.showBtn = function () {
                Gt.isShow && Ft(this.startBtn);
            }, t.prototype.destroy = function (t) {
                TWEEN.killTweensOf(this.startBtn), Laya.timer.clearAll(this), this._swingEffect && (this._swingEffect.destroy(),
                    this._swingEffect = null), e.prototype.destroy.call(this, t);
            }, t.prototype.close = function () {
                e.prototype.close.call(this);
            }, t;
    }(Rt.StartViewUI),
        fs = function (c) {
            function t(t, e, i) {
                var s = c.call(this) || this;
                s.iconArr = [],
                    s.name = "ResultView",
                    s.maskAlpha = .5,

                    s.cupNumLabel.changeText(Pa.cupNum.toFixed()),
                    s.cupChangedLabel.changeText(Math.abs(e).toFixed());


                    if(t.result ===0 ){
                        s.resultIcon.getChildAt(0).visible = !0
                    }else{
                        s.resultIcon.getChildAt(0).visible = !1
                    }
                var n = lt.getDefById(Pa.grad);
                if (s.gradIcon.skin = "icon/" + n.resource + ".png", s.cupChangedLabel.color = 0 <= e ? "#3db83d" : "#ff0000",
                    s.arrowImage.skin = 0 <= e ? 
                    "ui/arrow_up.png" :
                     "ui/arrow_down.png", 
                     0 === t.result ? s.resultIcon.skin = "ui/icon_success.png" : 2 === t.result ?
                      s.resultIcon.skin = "ui/icon_fail.png" :
                       s.resultIcon.skin = "ui/icon_draw.png",
                    s.favoriteBtn.on(Laya.Event.CLICK, s, function () {
                        new as().show();
                    }), s.favoriteBtn.visible = !$hostDef.censor, $hostDef.censor || (s.favoriteBtn.y += xi.top,
                        s.swingEffect = new os(s.favoriteBtn), s.favoriteBtn.on(Laya.Event.CLICK, s, function () {
                            new as().show();
                        })), s.gradIcon.on(Laya.Event.CLICK, s, function () {
                            // $hostDef.censor || "api-test" !== $hostDef.api || new so().show();
                        }), s.dialBtn.visible = !$hostDef.censor, s.dialBtn.on(Laya.Event.CLICK, s, function () {
                            new Bi().show();
                        }), s.otherGame.visible = !1, s.gameIcon.visible = !1, !$hostDef.censor) {
                    if (!1 !== $hostDef.mgIcon) {
                        var r = new Zo();
                        r.x = s.gameIcon.x, r.y = s.gameIcon.y, s.panel.addChild(r);
                    }
                    if (es() && (s.otherGame.visible = !0), es() && u / h < $hostDef.whScale) {
                        var o = new Qo();
                        o.x = u / 2, o.y = f, s.addChild(o);
                    }
                }
                if (s.settingsBtn.on(Laya.Event.CLICK, s, function () {
                    new hs().show();
                }), s.restartBtn.on(Laya.Event.CLICK, s, function () {
                    re("点再来一局"),
                        s.tryNextGame();
                }), s.rankBtn.on(Laya.Event.CLICK, s, function () {
                    new us().show();
                }), $hostDef.censor ? s.activitySkinBtn.visible = !1 : s.addToDestroy = Object(m.a)(function () {
                    var t = Ui();
                    if (s.activitySkinBtn.visible = !!t, s.activityRed.visible = !1, t && !Pa.getSkin(t.skinId)) {
                        var e = t.needCount - Pa.groupUserList.length;
                        s.activityRed.visible = e <= 0;
                    }
                }), s.activitySkinBtn.on(Laya.Event.CLICK, s, function () {
                    new Fi().show();
                }), s.skinBtn.visible = !$hostDef.censor, s.skinBtn.on(Laya.Event.CLICK, s, function () {
                    new Li().show();
                }),
                    s.backBtn.on(Laya.Event.CLICK, s, function () {

                        YYGGames.showInterstitial(() => {

                            s.close(),
                                new ds().show();
                        })


                    })
                    ,
                    s.addToDestroy = Object(m.a)(function () {
                        s.skinRedPoint.visible = !1//Pa.hasUnusedSkin;
                    }), s.addToDestroy = Object(m.a)(function () {
                        s.tipsAddStrong.visible = Boolean(!$hostDef.shareToVideo && Ps.holdBallSpeedAdd <= 0 && $hostDef.shareStrong);
                    }), s.shareBtn.visible = !$hostDef.censor, oe("结算带球速度+30%"), s.shareBtn.on(Laya.Event.CLICK, s, function () {
                        se("结算带球速度+30%"), $hostDef.shareToVideo ? s.tryNextGame() : Mi(Kt.addSpeedResult, {
                            shareCount: 0
                        }).then(function (t) {
                            t && (ae("结算带球速度+30%"), $hostDef.shareStrong && (Ps.holdBallSpeedAdd = Ds)), s.tryNextGame();
                        });
                    }), s.addToDestroy = Object(m.a)(function () {
                        var t = Ui();
                        s.limitSkinIcon.skin = t ? "icon/icon_skin_" + t.skinId + ".png" : "";
                    }), u / h >= $hostDef.whScale && (s.bottomGroup.bottom = 0), s.rewardContainer.visible = !$hostDef.censor,
                    s.rewardLabel.visible = !$hostDef.censor, i) {
                    var a = [];
                    i.gold && a.push([0, i.gold]), i.skinFrags && i.skinFrags.forEach(function (t, e) {
                        a.push([e, t]);
                    }), i.completeSkins && i.completeSkins.forEach(function (t) {
                        a.push([-1, t]);
                    }), Vi(s.rewardContainer, Bo, a.length, function (t, e, i) {
                        t.x = (t.width + 25) * e + t.width / 2, t.y = t.width / 2, t.pivotX = t.width / 2,
                            t.pivotY = t.height / 2;
                        var n = Object(Q.f)(a[e], 2), r = n[0], o = n[1];
                        0 === r ? t.setGold(o) : t.setSkin(r, o), t.visible = !1, s.iconArr.push(t);
                    });
                }
                return s.callLater(function () {
                    s.destroyed || s._addFeedbackBtn();
                }), re("进入结算页"), s.tipsAddStrong.visible = Boolean(!$hostDef.shareToVideo && !$hostDef.censor && $hostDef.shareStrong),
                    Laya.timer.loop(1500, s, s.showBtn), s;
            }
            return Object(Q.d)(t, c), t.prototype.show = function () {
                return Object(Q.b)(this, void 0, void 0, function () {
                    var e, i, n;
                    return Object(Q.e)(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return c.prototype.show.call(this), this.resultIcon.scaleX = this.resultIcon.scaleY = 3,
                                    this.resultIcon.alpha = 0, Laya.Tween.to(this.resultIcon, {
                                        alpha: 1,
                                        scaleX: 1,
                                        scaleY: 1
                                    }, 500), [4, en(500)];

                            case 1:
                                t.sent(), e = 0, i = this.iconArr.length, t.label = 2;

                            case 2:
                                return e < i ? (n = this.iconArr[e], [4, this.showItem(n)]) : [3, 5];

                            case 3:
                                t.sent(), t.label = 4;

                            case 4:
                                return e++, [3, 2];

                            case 5:
                                return [2];
                        }
                    });
                });
            }, t.prototype.tryNextGame = function () {
                return Object(Q.b)(this, void 0, void 0, function () {
                    var e;
                    return Object(Q.e)(this, function (t) {
                        switch (t.label) {
                            case 0:
                                this.visible = !1, t.label = 1;

                            case 1:
                                return t.trys.push([1, 3, 4, 5]), [4, Ps.startFight()];

                            case 2:
                                return t.sent(), this.close(), [3, 5];

                            case 3:
                                return e = t.sent(), Ps.reset(), this.visible = !0, _a("重新开始游戏出错:", e), [3, 5];

                            case 4:
                                return [7];

                            case 5:
                                return [2];
                        }
                    });
                });
            }, t.prototype.destroy = function (t) {
                this.swingEffect && (this.swingEffect.destroy(), this.swingEffect = null), c.prototype.destroy.call(this, t);
            }, t.prototype.close = function () {
                TWEEN.killTweensOf(this.shareBtn), Laya.timer.clear(this, this.showBtn), c.prototype.close.call(this);
            }, t.prototype._addFeedbackBtn = function () {
                var e = this;
                if ("function" == typeof wx.createFeedbackButton) {
                    var t = this.serviceBtn;
                    is(function (t) {
                        return e.addToDestroy = t;
                    }, function () {
                        return 0 === O.openedPanelCount && 1 === k.openedPanelCount;
                    }, {
                        width: Math.ceil(t.width / p),
                        height: Math.ceil(t.height / p),
                        left: Math.floor(t.x / p),
                        top: Math.floor((t.y - t.height / 2) / p)
                    });
                } else this.serviceBtn.visible = !1;
            }, t.prototype.showItem = function (e) {
                var i = this;
                return e.visible = !0, e.alpha = .5, e.scaleX = 2, e.scaleY = 2, new Promise(function (t) {
                    return Laya.Tween.to(e, {
                        alpha: 1,
                        scaleX: 1,
                        scaleY: 1
                    }, 300, Laya.Ease.cubicIn, Laya.Handler.create(i, function () {
                        t();
                    }));
                });
            }, t.prototype.showBtn = function () {
                Gt.isShow && Ft(this.shareBtn);
            }, t;
        }(Rt.ResultViewUI), ys = function (e) {
            function t() {
                var t = e.call(this) || this;
                return t.name = "SettleScoreHistoryItem", t.bg.height = 50, t.width = 176, t.height = 50,
                    t;
            }
            return Object(Q.d)(t, e), t.prototype.createChildren = function () {
                e.prototype.createChildren.call(this), this.loadUI("SettleScoreHistoryItem");
            }, t.prototype.setData = function (t, e) {
                this.bg.skin = "settle/settle_score_bg" + t % 2 + ".png";
                var i = Math.floor(e / 60), n = Math.floor(e % 60);
                this.timeLabel.text = i + "'" + (n < 10 ? "0" + n : n) + "''";
            }, t;
        }(Nt), vs = Rt.SettleViewUI, gs = Laya.Rectangle, ms = Laya.Tween, bs = function (o) {
            function t(t) {
                var e = o.call(this) || this;
                if (e.result = t, e.maskAlpha = 0, e.name = "SettleView", e.historyA.scrollRect = new gs(0, 0, 176, 250),
                    e.historyB.scrollRect = new gs(0, 0, 176, 250), e.report.on(Laya.Event.CLICK, e, e.onShare),
                    !$hostDef.censor && 0 === Ps.fightCount && $hostDef.guideMask) {
                    e.guideMask = new Laya.Sprite(), e.guideMask.graphics.drawRect(0, 0, u, h, "#000000"),
                        e.guideMask.alpha = .5;
                    var i = e.getChildIndex(e.report);
                    e.addChildAt(e.guideMask, i), e.guideMask.width = u, e.guideMask.height = h, e.guideMask.mouseEnabled = !0,
                        e.guideMask.once(Laya.Event.MOUSE_DOWN, e, function () {
                            e.guideMask.removeSelf();
                        });
                }
                return e;
            }
            return Object(Q.d)(t, o), t.prototype.show = function () {
                return Object(Q.b)(this, void 0, void 0, function () {
                    var e, i, n, r = this;
                    return Object(Q.e)(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return o.prototype.show.call(this), this.anyTap.visible = !1, this.report.visible = !1,
                                    this.report.alpha = 0, this.report.scaleX = this.report.scaleY = 3, this.scoreA.value = 10 <= Qr.scoreTeamA ? Qr.scoreTeamA + "" : "0" + Qr.scoreTeamA,
                                    this.scoreB.value = 10 <= Qr.scoreTeamB ? Qr.scoreTeamB + "" : "0" + Qr.scoreTeamB,
                                    e = this.result.players, this.topIconA.skin = e[0].image, this.topIconB.skin = e[1].image,
                                    this.bottomIconA.skin = e[0].image, this.bottomIconB.skin = e[1].image, this.scoreText.text = function (t) {
                                        var e = t.players[0].score + ":" + t.players[1].score + "  ", i = t.players[0].score - t.players[1].score;
                                        e += 3 <= i ? "完胜" : 2 <= i ? "大胜" : 1 <= i ? "小胜" : 0 == i ? "战平" : -1 == i ? "小负" : -1 == i ? "惨败" : "完败";
                                        return e;
                                    }(this.result), this.scoreDesc.text = function (t) {
                                        var e = "当家球星", i = t.players[0].score;
                                        e += 3 <= i ? "上演帽子戏法" : 2 <= i ? "梅开二度" : 1 <= i ? "打进一球" : "表现平平";
                                        return e;
                                    }(this.result), this.shareBtn.visible = !$hostDef.censor, this.title.x = u, this.scoreContent.x = u,
                                    ms.to(this.title, {
                                        x: 0
                                    }, 300, Laya.Ease.bounceOut), [4, en(300)];

                            case 1:
                                for (t.sent(), ms.to(this.scoreContent, {
                                    x: 0
                                }, 300, null, null, 200), i = 0; i < e[0].shootTimes.length; i++) (n = new ys()).setData(i + 1, e[0].shootTimes[i].time),
                                    this.historyA.addChild(n), n.y = 50 * i, i < 5 && (n.x = -300, ms.to(n, {
                                        x: 0
                                    }, 200, null, null, 200 * i));
                                return 0 < e[0].shootTimes.length ? [4, en(Math.min(1e3, 200 * e[1].shootTimes.length))] : [3, 3];

                            case 2:
                                t.sent(), t.label = 3;

                            case 3:
                                for (i = 0; i < e[1].shootTimes.length; i++) (n = new ys()).setData(i + 1, e[1].shootTimes[i].time),
                                    this.historyB.addChild(n), n.y = 50 * i, i < 5 && (n.x = 300, ms.to(n, {
                                        x: 0
                                    }, 200, null, null, 200 * i));
                                return 0 < e[1].shootTimes.length ? [4, en(Math.min(1e3, 200 * e[1].shootTimes.length))] : [3, 5];

                            case 4:
                                t.sent(), t.label = 5;

                            case 5:
                                return this.report.visible = !0, ms.to(this.report, {
                                    scaleX: 1,
                                    scaleY: 1,
                                    alpha: 1
                                }, 300, null, null), Laya.timer.once(500, this, function () {
                                    r.destroyed || (Laya.timer.frameLoop(1, r, r.autoScroll), r.anyTap.visible = !0,
                                        Laya.stage.on(Laya.Event.CLICK, r, r.onStageClick));
                                }), [2, new Promise(function (t) {
                                    r.resolve = t;
                                })];
                        }
                    });
                });
            }, t.prototype.onShare = function () {
                this.guideMask && this.guideMask.removeSelf(), $hostDef.censor || mi(this.result.players[0].image, this.result.players[1].image, this.scoreText.text, this.scoreDesc.text);
            }, t.prototype.autoScroll = function () {
                var t, e = this.result.players;
                5 < e[0].shootTimes.length && ((t = this.historyA.scrollRect).y < 50 * e[0].shootTimes.length - 250 && (t.y++,
                    this.historyA.scrollRect = t));
                5 < e[1].shootTimes.length && ((t = this.historyB.scrollRect).y < 50 * e[1].shootTimes.length - 250 && (t.y++,
                    this.historyB.scrollRect = t));
            }, t.prototype.onStageClick = function (t) {
                ($hostDef.censor || t.target !== this.shareBtn && t.target !== this.report) && (Laya.stage.off(Laya.Event.CLICK, this, this.onStageClick),
                    this.close());
            }, t.prototype.close = function () {
                this.destroyed || (ms.clearAll(this.title), ms.clearAll(this.report), ms.clearAll(this),
                    Laya.stage.off(Laya.Event.CLICK, this, this.onStageClick), Laya.timer.clearAll(this),
                    o.prototype.close.call(this), this.resolve && (this.resolve(), this.resolve = void 0));
            }, t;
        }(vs);
    var ws = function (i) {
        function t(t) {
            var e = i.call(this) || this;
            return e.propType = t, e.videoBtn.on(Laya.Event.CLICK, e, e.videoUpgrade), e.closeBtn.on(Laya.Event.CLICK, e, e.close),
                e.refreshContent(), e;
        }
        return Object(Q.d)(t, i), t.prototype.videoUpgrade = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e, i;
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (Pa.dailyPropVideoCount >= dt.maxVideoPropUpgrade) return ge(this.propType),
                                Sa("看视频升级已达上限，请明天再来"), [2];
                            e = Pa.propLevels[this.propType], ve(this.propType, e), this.videoBtn.mouseEnabled = !1,
                                t.label = 1;

                        case 1:
                            return t.trys.push([1, , 3, 4]), [4, Ke.play(Ei(Yt.suggestUpgrade))];

                        case 2:
                            return 0 === (i = t.sent()) ? [2, Sa("完整看完视频才能免费升级")] : 2 === i ? (me(this.propType),
                                Sa("抱歉，当前没有视频可看"), [2]) : [3, 4];

                        case 3:
                            return this.videoBtn.mouseEnabled = !0, [7];

                        case 4:
                            return this.upgradeProp(this.propType), [2];
                    }
                });
            });
        }, t.prototype.upgradeProp = function (t) {
            No(t, !1) && (this.close(), Sa("升级成功"));
        }, t.prototype.refreshContent = function () {
            var t, e = this.propType, i = bt.getDefById(e), n = Pa.getPropLevel(e);
            n <= 0 ? t = 1 : (t = n + 1) > i.lvMax && (t = i.lvMax), this.icon.skin = "ui/icon_prop" + i.propType + ".png";
            var r = i.initValue + i.valueGrow * n, o = i.desc;
            o = (o = r !== Math.floor(r) ? o.replace("{0}", r.toFixed(1)) : o.replace("{0}", r + "")).replace("{0.percent}", (100 * r).toFixed(1) + "%"),
                this.curDescText.text = o;
            var s = i.initValue + i.valueGrow * t;
            i.desc.includes("{0.percent}") ? this.nextDescText.text = "下一级：" + (100 * s).toFixed(1) + "%" : s !== Math.floor(s) ? this.nextDescText.text = "下一级：" + s.toFixed(1) : this.nextDescText.text = "下一级：" + s;
        }, t.prototype.show = function () {
            var e = this;
            return i.prototype.show.call(this), ce(te[Yt.suggestUpgrade]), zt(this.panel), new Promise(function (t) {
                e.resolve = t;
            });
        }, t.prototype.close = function () {
            TWEEN.killTweensOf(this.panel), i.prototype.close.call(this), this.resolve && (this.resolve(),
                this.resolve = void 0);
        }, t;
    }(Rt.SuggestUpgradeViewUI),
        _s = function (i) {
            function t() {
                var t = i.call(this) || this;
                return t.name = "WelfareBoxPopup", t.isTop = !0, t.closeBtn.on(Laya.Event.CLICK, t, t.close),
                    t.panel.y = f / 2, t.getBtn.on(Laya.Event.CLICK, t, function () {
                        return Object(Q.b)(t, void 0, void 0, function () {
                            var e, i, n = this;
                            return Object(Q.e)(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        this.getBtn.mouseEnabled = !1, t.label = 1;

                                    case 1:
                                        return t.trys.push([1, , 3, 4]), [4, Ke.play(Ei(Yt.welfareBox))];

                                    case 2:
                                        return 0 === (e = t.sent()) ? [2, Sa("完整看完视频才能领取奖励")] : 2 === e ? [2, Sa("抱歉，当前没有视频")] : [3, 4];

                                    case 3:
                                        return this.getBtn.mouseEnabled = !0, [7];

                                    case 4:
                                        return this.showBoxOpen(), i = function () {
                                            var e, t, i = Se(), n = new Jt();
                                            try {
                                                for (var r = Object(Q.g)(E(i, 2)), o = r.next(); !o.done; o = r.next()) {
                                                    var s = o.value;
                                                    Pa.addSkinFrag(s, 1, n);
                                                }
                                            } catch (t) {
                                                e = {
                                                    error: t
                                                };
                                            } finally {
                                                try {
                                                    o && !o.done && (t = r.return) && t.call(r);
                                                } finally {
                                                    if (e) throw e.error;
                                                }
                                            }
                                            return n;
                                        }(), this.getBtn.mouseEnabled = !1, en(1500).then(function () {
                                            return Object(Q.b)(n, void 0, void 0, function () {
                                                return Object(Q.e)(this, function (t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return this.getBtn.mouseEnabled = !0, this.close(), [4, en(100)];

                                                        case 1:
                                                            return t.sent(), xa(i), [2];
                                                    }
                                                });
                                            });
                                        }), [2];
                                }
                            });
                        });
                    }), t.showBoxShake(), t;
            }
            return Object(Q.d)(t, i), t.prototype.show = function () {
                var e = this;
                return i.prototype.show.call(this), !$hostDef.censor && 0 === Ps.fightCount && $hostDef.guideMask ? Laya.timer.callLater(this, this.checkGuide) : zt(this.panel),
                    new Promise(function (t) {
                        e.resolve = t;
                    });
            }, t.prototype.showBoxShake = function () {
                return Object(Q.b)(this, void 0, void 0, function () {
                    var e, i;
                    return Object(Q.e)(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return this.crtArmature && (this.dbGroup.removeChild(this.crtArmature), this.crtArmature.stop(),
                                    this.crtArmature = void 0), i = this, [4, eo("boxNotOpen")];

                            case 1:
                                return e = i.crtArmature = t.sent(), this.dbGroup.addChild(e), e.play("shake", !0),
                                    [2];
                        }
                    });
                });
            }, t.prototype.showBoxOpen = function () {
                return Object(Q.b)(this, void 0, void 0, function () {
                    var e, i;
                    return Object(Q.e)(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return this.crtArmature && (this.dbGroup.removeChild(this.crtArmature), this.crtArmature.stop(),
                                    this.crtArmature = void 0), i = this, [4, eo("boxOpen")];

                            case 1:
                                return e = i.crtArmature = t.sent(), this.dbGroup.addChild(e), e.play("open", !1),
                                    [2];
                        }
                    });
                });
            }, t.prototype.checkGuide = function () {
                var t = this.getBtn.localToGlobal(new Laya.Point(0, 0), !0);
                t.x /= va, t.y /= va, this.guildSprite = new Laya.Sprite(), this.guildSprite.mouseEnabled = !1;
                var e = new Laya.Sprite();
                e.alpha = .7, e.mouseEnabled = !0, e.graphics.drawRect(0, 0, u, t.y, 0), e.width = u,
                    e.height = t.y, this.guildSprite.addChild(e);
                var i = h - (t.y + this.getBtn.height), n = new Laya.Sprite();
                n.alpha = .7, n.mouseEnabled = !0, n.y = t.y + this.getBtn.height, n.graphics.drawRect(0, 0, u, i, 0),
                    n.width = u, n.height = i, this.guildSprite.addChild(n);
                var r = new Laya.Sprite();
                r.alpha = .7, r.mouseEnabled = !0, r.y = t.y, r.graphics.drawRect(0, 0, t.x, this.getBtn.height, 0),
                    r.width = t.x, r.height = this.getBtn.height, this.guildSprite.addChild(r);
                var o = new Laya.Sprite();
                o.alpha = .7, o.mouseEnabled = !0, o.x = t.x + this.getBtn.width, o.y = t.y;
                var s = u - (t.x + this.getBtn.width);
                o.graphics.drawRect(0, 0, s, this.getBtn.height, 0), o.width = s, o.height = this.getBtn.height,
                    this.guildSprite.addChild(o), la.addChild(this.guildSprite);
                var a = this.guideArrow = new Laya.Image("ui/level_down.png");
                a.anchorY = 1, a.anchorX = .5, a.x = t.x + this.getBtn.width / 2, a.y = t.y - 20,
                    a.mouseEnabled = !1, this.guildSprite.addChild(a), this.arrowTween(a), Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onClickStage);
            }, t.prototype.arrowTween = function (t) {
                var e = this;
                Laya.Tween.to(t, {
                    y: t.y - 50
                }, 200, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(t, {
                        y: t.y + 50
                    }, 200, null, Laya.Handler.create(e, function () {
                        e.arrowTween(t);
                    }));
                }));
            }, t.prototype.onClickStage = function () {
                this.removeGuide();
            }, t.prototype.removeGuide = function () {
                Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onClickStage), this.guideArrow && Laya.Tween.clearAll(this.guideArrow),
                    this.guildSprite && (this.guildSprite.destroy(!0), this.guildSprite = null);
            }, t.prototype.destroy = function (t) {
                this.removeGuide(), this.crtArmature && (this.dbGroup.removeChild(this.crtArmature),
                    this.crtArmature.stop(), this.crtArmature = void 0), i.prototype.destroy.call(this, t);
            }, t.prototype.close = function () {
                TWEEN.killTweensOf(this.panel), i.prototype.close.call(this), this.resolve && (this.resolve(),
                    this.resolve = void 0);
            }, t;
        }(Rt.WelfareBoxPopupUI);
    function Ss(t, e) {
        var i = Pa.grad, n = lt.getDefById(i), r = dt.cupResult[e];
        return r ? n.isReduceCup ? r[t - 1] || 0 : Math.max(0, r[t - 1] || 0) : 0;
    }
    var Ts, xs = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.name = "RecommendView", t.canTapMaskClose = !0, le("弹窗触达"), t.goBtn.on(Laya.Event.CLICK, t, function () {
                return Object(Q.b)(t, void 0, void 0, function () {
                    var e;
                    return Object(Q.e)(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return se("推荐游戏弹窗"), le("点击【推荐给好友】"), this.close(), [4, gi(Kt.recoment)];

                            case 1:
                                return 1 != (e = t.sent()) && 3 != e || ae("推荐游戏弹窗"), [2];
                        }
                    });
                });
            }), t.closeBtn.on(Laya.Event.CLICK, t, function () {
                t.close();
            }), t;
        }
        return Object(Q.d)(t, e), t.prototype.show = function () {
            oe("推荐游戏弹窗"), e.prototype.show.call(this), zt(this.panel);
        }, t.prototype.close = function () {
            TWEEN.killTweensOf(this.panel), e.prototype.close.call(this);
        }, t;
    }(Rt.RecommendViewUI), Ls = [10, 30, 60], ks = !1;
    function Os() {
        if (!Ts) try {
            var t = wx.getStorageSync("gameNum_" + $hostDef.api);
            Ts = Number(t) || 0;
        } catch (t) {
            console.warn(t), Sa(t);
        }
        ++Ts, 0 <= Ls.indexOf(Ts), wx.setStorageSync("gameNum_" + $hostDef.api, Ts);
    }
    var Is = function () {
        function t() {
            this.maxPoint = 0, this._lastUseTime = 0, this.maxPoint = dt.maxSkillPoint, this._countDown = 1e3 * dt.skillCd;
        }
        return t.prototype.cleanUp = function () {
            this._lastUseTime = 0;
        }, t.prototype.useSkill = function () {
            if (Pa.skillPoint <= 0) return -1;
            var t = Date.now(), e = this._lastUseTime + this._countDown - t;
            return 0 < e ? (Sa(Math.round(e / 1e3) + "秒后可用"), 0) : (this._lastUseTime = t, Pa.skillPoint--,
                1);
        }, t.prototype.getCd = function () {
            var t = this._countDown - (Date.now() - this._lastUseTime);
            return t < 0 && (t = 0), t;
        }, t.prototype.checkCD = function () {
            var t = Date.now();
            return t - this._lastUseTime < this._countDown ? 0 : (this._lastUseTime = t, 1);
        }, t;
    }(), Ds = .2;
    var Cs, Es, Ps = new (function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.isStart = !1, t._isInited = !1, t.holdBallSpeedAdd = 0, t.gameNum = 0,
                t.isSendFightEnd = !1, t.hasGameItems = !1, t.isRevive = !1, t._useSkillCount = 0,
                t.winCount = 0, t.totalLostCount = 0, t.winTime = 0, t.forceAiLevel = 0, t.fightCount = 0,
                t;
        }
        return Object(Q.d)(t, e), t.prototype.init = function () {
            if (!this._isInited) {
                this._isInited = !0;
                var t = wx.getStorageSync("winTime"), e = wx.getStorageSync("winCount");
                e && !isNaN(e) && t && !isNaN(t) && (this.winCount = Number(e), this.winTime = Number(t));
                var i = wx.getStorageSync("totalLostCount");
                i && !isNaN(i) && (this.totalLostCount = i), console.info("winCount:" + this.winCount + ",totalLostCount:" + this.totalLostCount),
                    this.skillController = new Is();
            }
        }, t.prototype.saveWinResult = function (t) {
            0 === t ? (this.winCount++, this.totalLostCount = 0) : 2 === t && (this.winCount = 0,
                this.totalLostCount++), wx.setStorageSync("winCount", this.winCount), wx.setStorageSync("totalLostCount", this.totalLostCount),
                wx.setStorageSync("winTime", ie.curTime), console.info("winCount:" + this.winCount + ",totalLostCount:" + this.totalLostCount);
        }, t.prototype.setWinCount = function (t) {
            this.winCount = t, wx.setStorageSync("winCount", this.winCount), wx.setStorageSync("winTime", ie.curTime),
                console.info("winCount:" + this.winCount + ",totalLostCount:" + this.totalLostCount);
        }, t.prototype.setLoseCount = function (t) {
            this.winCount = 0, this.totalLostCount = t, wx.setStorageSync("totalLostCount", this.totalLostCount),
                wx.setStorageSync("winCount", this.winCount), wx.setStorageSync("winTime", ie.curTime),
                console.info("winCount:" + this.winCount + ",totalLostCount:" + this.totalLostCount);
        }, t.prototype.reset = function () {
            this.isStart = !1, this.isSendFightEnd = !1, this.isRevive = !1, this._useSkillCount = 0;
        },
        
        
        t.prototype.startFight = function () {


            YYGGames.showInterstitial(() => {
                return Object(Q.b)(this, void 0, void 0, function () {
                    var e, i, n, r, o, s, a, c;
                    return Object(Q.e)(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return this._isInited || this.init(), this.isStart ? [2] : (this.isStart = !0,
                                    this.isSendFightEnd = !1, this.isRevive = !1, this._useSkillCount = 0, this.fightCount = Pa.fightCount,
                                    0 < this.fightCount && Co.canShowFreeSkin() && Ke.canWatch() ? [4, new Eo().show()] : [3, 2]);
    
                            case 1:
                                t.sent(), t.label = 2;
    
                            case 2:
                                return [3, 4];
    
                            case 3:
                                t.sent(), t.label = 4;
    
                            case 4:
                                return x.isInBattle = !0, Hi.changePhase(1), [4, Object(l.randomUsers)(5)];
    
                            case 5:
                                i = [{}], r = new Ro(), t.label = 6;
    
                            case 6:
                                return t.trys.push([6, 8, , 9]), o = function (n) {
                                    var t = E(pt.getList(), n.length), r = -1;
                                    return t.map(function (t) {
                                        r++;
                                        var e = E(t.ownSkin), i = 0;
                                        return t.ownSkin.forEach(function (t) {
                                            var e = ft.getDefById(t);
                                            e && (i += e.skinShowExp);
                                        }), {
                                            name: n[r].nick || "",//游客
                                            image: V() ? "head/" + (Math.floor(200 * Math.random()) + 1) + ".jpg" : n[r].image,
                                            skinExp: i + 1,
                                            skinId: e,
                                            cupNum: t.cupNum,
                                            medal: t.medal,
                                            propLevels: [0, 0, 0, 0]
                                        };
                                    });
                                }(i), s = {
                                    name: Pa.nick || "",//游客
                                    image: Pa.avatar || g,
                                    skinId: Co.freeSkinId || Pa.curSkin || 1,
                                    cupNum: Pa.cupNum,
                                    propLevels: Pa.propLevels.slice(0, 4)
                                }, $hostDef.appealHead && (s.image = Ji(s.skinId)), n = [s].concat(o),
                                    (a = n[1]).skinId === n[0].skinId && (a.skinId = n[0].skinId - 1,
                                        a.skinId < 1 && (a.skinId = n[0].skinId + 1)), 0 === Pa.fightCount ? a.skinId = 11 : Pa.fightCount < 5 && (a.skinId = E([7, 8, 9, 10, 11, 15])),
                                    $hostDef.censor && (a.skinId = 11), DEVELOP && (console.log("targetInfo.skinId:", a.skinId),
                                        console.log("winCount:", this.winCount), console.log("lostCount:", this.totalLostCount)),
                                    0 !== this.forceAiLevel ? a.propLevels = function (t) {
                                        for (var e = [], i = 0; i < 4; i++) {
                                            var n = bt.getDefById(i), r = Pa.propLevels[i], o = r + t;
                                            (o = Math.ceil(o)) < 0 && (o = 0), o > n.lvMax && (o = n.lvMax), e[i] = o;
                                        }
                                        return e;
                                    }(this.forceAiLevel) : a.propLevels = function () {
                                        for (var t = lt.getDefById(Pa.grad), e = [], i = 0; i < 4; i++) {
                                            var n = bt.getDefById(i), r = Pa.propLevels[i], o = t.propRandom[0], s = t.propRandom[1], a = Ps.winCount;
                                            if (0 < a) {
                                                var c = r - o;
                                                0 < c && (a >= dt.straightPropRatio.length && (a = dt.straightPropRatio.length - 1),
                                                    o += c * dt.straightPropRatio[a], s += c * dt.straightPropRatio[a]);
                                            }
                                            var u = D(o, s);
                                            u < r - dt.propMaxMinus[i] && (u = r - dt.propMaxMinus[i]), (u = Math.ceil(u)) < 0 && (u = 0),
                                                u > n.lvMax && (u = n.lvMax), e[i] = u;
                                        }
                                        return e;
                                    }(), $hostDef.appealHead && n.forEach(function (t, e) {
                                        1 === e ? t.image = Ji(t.skinId) : 1 < e && (t.image = Ji(D(24) + 1));
                                    }), [4, Promise.all([r.showMatch(n.concat()), this.loadResource(n.concat())])];
    
                            case 7:
                                return t.sent(), [3, 9];
    
                            case 8:
                                throw c = t.sent(), this.isStart = !1, r.close(), c;
    
                            case 9:
                                return DEVELOP && (console.log("my propLevels:", n[0].propLevels), console.log("target propLevels:", n[1].propLevels)),
                                    wx.triggerGC(), $hostDef.guideGame && 0 === this.fightCount ? (be("进入引导局"), Io.ready(1, n)) : Io.ready(0, n),
                                    [4, r.playVs()];
    
                            case 10:
                                return t.sent(), r.close(), Io.startFight(), [2];
                        }
                    });
                });
            })


      
       
       
       
       
        }, 
        
        
        
        
        
        t.prototype.loadResource = function (s) {
            return Object(Q.b)(this, void 0, void 0, function () {
                var i, e, n, r, o = this;
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, $n.gameMap.loadMap()];

                        case 1:
                            return t.sent(), [4, Dn("tip")];

                        case 2:
                            return t.sent(), R ? [4, $n.loadShadowTexture()] : [3, 4];

                        case 3:
                            t.sent(), t.label = 4;

                        case 4:
                            for (i = [], e = 0; e < s.length; e++) n = s[e].skinId, (r = ft.getDefById(n)) && i.push("player/model/" + r.model + ".lh");
                            return i.push("dlc/particle/running/running.lh"), i.push("dlc/particle/overSpeed/overSpeed.lh"),
                                i.push("dlc/particle/sprint/sprint.lh"), R || i.push("dlc/particle/collision/collision.lh"),
                                [4, new Promise(function (e, t) {
                                    Laya.loader.load(i, new Laya.Handler(o, function (t) {
                                        return e();
                                    }), null, Laya.Loader.HIERARCHY, 0, !0);
                                })];

                        case 5:
                            return t.sent(), [2];
                    }
                });
            });
        }, t.prototype.useSkill = function () {
            this._useSkillCount++, Io.useSkill();
        }, t.prototype.onTimeOver = function (e) {
            return Object(Q.b)(this, void 0, void 0, function () {
                return Object(Q.e)(this, function (t) {
                    return re("游戏倒计时结束"), k.closeAll(), e.cupChanged = Ss(0, 2), this.endFight(e), [2];
                });
            });
        }, t.prototype.onShootOver = function (e) {
            return Object(Q.b)(this, void 0, void 0, function () {
                return Object(Q.e)(this, function (t) {
                    return re("游戏比分结束"), k.closeAll(), e.cupChanged = Ss(0, 2), this.endFight(e), [2];
                });
            });
        }, t.prototype.onFightEnd = function () {
            x.isInBattle = !1, this.forceAiLevel = 0, this.isStart = !1, Co.clearFreeSkin(),
                this.skillController.cleanUp(), Ps.holdBallSpeedAdd = 0, Pa.skillPoint = 0, this.hasGameItems = !1;
        }, t.prototype.forceEndFight = function (t) {
            this.isSendFightEnd ? t && function () {
                if (0 < Pa.lastReduceCupNum) {
                    Pa.cupNum += Pa.lastReduceCupNum, Pa.cupNum > Pa.bestCup && (Pa.bestCup = Pa.cupNum);
                    var t = lt.getDefById(Pa.grad + 1);
                    t && Pa.cupNum >= t.cupNum && (Pa.grad += 1), Pa.lastReduceCupNum = 0, st("grad", Pa.cupNum + "");
                }
            }() : (this.onFightEnd(), this.saveWinResult(2), Io.forceQuit(), k.closeAll(), Hi.changePhase(0),
                new ds().show(), Xe.show(), Do({
                    result: 2,
                    noReward: !0,
                    isVideo: t,
                    score: 0,
                    scoreDiff: 0
                }));
        }, t.prototype.endFight = function (y) {
            return Object(Q.b)(this, void 0, void 0, function () {
                var i, e, n, r, o, s, a, c, u, h, l, p, d, f;
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            for (k.closeAll(), this.onFightEnd(), i = [], p = 0; p < Pa.skins.length; p++) (d = Pa.skins[p]) && 1 <= d.status && i.push(d.id);
                            for (this.isSendFightEnd = !0, e = Do({
                                result: y.result,
                                noReward: !1,
                                score: y.players[0].score,
                                scoreDiff: y.players[0].score - y.players[1].score
                            }), 0 < this.fightCount && this.saveWinResult(y.result), this.gameNum++, ++Pa.todayGameCount,
                                n = [], r = function (t) {
                                    return n.push(t);
                                }, o = function (t) {
                                    var e = Pa.skins[t];
                                    e && 1 === e.status && i.indexOf(e.id) < 0 && r(function () {
                                        return new Di(e.id).show();
                                    });
                                }, p = 0; p < Pa.skins.length; p++) o(p);
                            return Pa.fightCount <= 5 && ye("00" + (Pa.fightCount + 3).toString(), "第" + Pa.fightCount + "局游戏以" + y.players[0].score + ":" + y.players[1].score + "结束"),
                                re("单局使用道具" + this._useSkillCount + "次"), re("在段位" + Pa.grad + "以" + y.players[0].score + ":" + y.players[1].score + "结束游戏"),
                                [4, Qi("settle")];

                        case 1:
                            return t.sent(), [4, new bs(y).show()];

                        case 2:
                            return t.sent(), [4, new fs(y, e.cupChanged, e.gift).show()];

                        case 3:
                            return t.sent(), !$hostDef.censor && 0 < this.fightCount ? e.gradUp ? [4, new jo(Pa.grad, e.newBestGrad, e.newGradGift).show()] : [3, 5] : [3, 19];

                        case 4:
                            return t.sent(), [3, 10];

                        case 5:
                            if (s = !1, a = void 0, Pa.dailyPropVideoCount < dt.maxVideoPropUpgrade && 2 === y.result && Ke.canWatch() && $hostDef.suggestUpgradePercent > Math.random()) {
                                for (c = Ur.getPlayersFrom(2)[0].aiInfo.propLevels, u = Ur.getPlayersFrom(1)[0].aiInfo.propLevels,
                                    h = [], l = [], p = Ht.moveSpeed; p <= Ht.offlineGold; p++) 5 < c[p] - u[p] && (h.push(p),
                                        zo(p) || l.push(p));
                                0 < l.length && (h = l), 0 < h.length && (s = !0, a = E(h));
                            }
                            return s ? [4, new ws(a).show()] : [3, 7];

                        case 6:
                            return t.sent(), [3, 10];

                        case 7:
                            return [3, 9];

                        case 8:
                            return t.sent(), [3, 10];

                        case 9:
                            !function () {
                                if (ks) Os(); else try {
                                    var t = wx.getStorageSync("recommend_" + $hostDef.api);
                                    !(ks = 1 == Number(t)) && 3 <= Ps.gameNum ? (ks = !0, wx.setStorageSync("recommend_" + $hostDef.api, 1)) : Os();
                                } catch (t) {
                                    console.warn(t), Sa(t);
                                }
                            }(), t.label = 10;

                        case 10:
                            return $hostDef.skinCollection ? (d = Pa.getSkin(w)) && 0 !== d.status ? [3, 15] : Pa.collectSkinInvites.length >= _ ? [4, new oo().show()] : [3, 12] : [3, 19];

                        case 11:
                            return t.sent(), [3, 14];

                        case 12:
                            return Pa.todayGameCount >= $hostDef.classicSkinNum && Math.random() < $hostDef.classicSkinProb ? [4, new oo().show()] : [3, 14];

                        case 13:
                            t.sent(), t.label = 14;

                        case 14:
                            return [3, 19];

                        case 15:
                            return $hostDef.puzzle ? (f = Pa.getSkin(b)) && 0 !== f.status ? [3, 19] : 6 <= Pa.puzzlePieces.length ? [4, new Ai().show()] : [3, 17] : [3, 19];

                        case 16:
                            return t.sent(), [3, 19];

                        case 17:
                            return Pa.todayGameCount >= $hostDef.classicSkinNum && Math.random() < $hostDef.classicSkinProb ? [4, new Ai().show()] : [3, 19];

                        case 18:
                            t.sent(), t.label = 19;

                        case 19:
                            return $hostDef.censor || 0 !== this.fightCount || !$hostDef.guideGame ? [3, 21] : (be("引导局结束"),
                                [3, 21]);

                        case 20:
                            t.sent(), t.label = 21;

                        case 21:
                            return n.forEach(function (t) {
                                return t();
                            }), 0 < this.fightCount && Xe.show(), [2];
                    }
                });
            });
        }, Object(Q.c)([m.g], t.prototype, "holdBallSpeedAdd", void 0), t;
    }(Laya.EventDispatcher))(), Bs = Rt.SkinDescViewUI, js = Laya.Event, As = 0, Ms = function (r) {
        function t(t) {
            // console.log("进度：", e.progressBar.value)
            var e = r.call(this) || this;
            e.name = "SkinDescView",
                e.canTapMaskClose = !0,
                e.closeBtn.on(Laya.Event.CLICK, e, e.close);
            var i = ft.getDefById(t.id);
            if (e.skinDef = i,
                e.titleLabel.text = i.name,
                e.nameLabel.text = i.name,
                e.icon.skin = "icon/icon_skin_" + t.id + ".png",
                e.useBtn.visible = !1, e.shareBtn.visible = !1,
                e.buyBtn.visible = !1, e.goBtn.visible = !1,
                e.videoBtn.visible = !1, e.videoProgress.visible = !1,
                e.activeBtn.visible = !1,
                window.tiptip3 = e.tipView,
                "undefined" !== i.getTips ? e.descLabel.changeText(i.getTips.replace("{num}", i.consumeGold.toString())) : e.descLabel.changeText(i.name),
                1 <= t.status)
                e.fragGroup.visible = !1,
                    e.lock.visible = !1,
                    e.useBtn.visible = Pa.curSkin !== i.id,

                    e.shareBtn.visible = !1;
            //  e.shareBtn.x = e.useBtn.visible ? 397 : 252;
            else if (t.frag >= i.needFragCnt) e.progressLabel.text = t.frag + "/" + i.needFragCnt,
                e.progressBar.value = Math.min(1, t.frag / i.needFragCnt),
                console.log("是否使用：", t.frag),
                e.activeBtn.visible = !0;
            else {
                if (e.lock.visible && (0 < i.videoNeed ? e.lockIcon.skin = "ui/icon_video.png" : 0 < i.consumeGold ? e.lockIcon.skin = "ui/icon_gold.png" : e.lockIcon.skin = "ui/tag_lock_2.png"),
                    e.gotGroup.visible = !1, 0 < i.videoNeed) {
                    console.log("是否使用：222222")
                    if (e.fragGroup.visible = !1, e.videoProgress.visible = e.videoBtn.visible = !0,
                        e.videoProgress.text = (Pa.skinVideos[i.id] || 0) + "/" + i.videoNeed, Ke.canWatch()) {

                        var n = te[Yt.skin];
                        ce(n = n.replace("{skinId}", i.id + ""));
                    }
                    0 < i.consumeGold && (e.buyBtn.visible = !0, e.goldText.text = "" + i.consumeGold + " ",
                        e.buyBtn.visible = !0);
                } else 0 < i.consumeGold ? (e.fragGroup.visible = !1, e.goldText.text = "" + i.consumeGold + " ",
                    e.buyBtn.visible = !0, e.buyBtn.y = 647) : "battle" == i.jumpTo ? (e.progressLabel.text = t.frag + "/" + i.needFragCnt,
                        e.progressBar.value = Math.min(1, t.frag / i.needFragCnt))
                        :
                        e.fragGroup.visible = !1;
                e.goBtn.visible = !e.videoBtn.visible && !e.buyBtn.visible;
            }
            return e.useBtn.on(js.CLICK, e, e.useHandle), e.shareBtn.on(js.CLICK, e, e.shareHandle),
                e.buyBtn.on(js.CLICK, e, e.buyHandle), e.goBtn.on(js.CLICK, e, e.goHandle), e.videoBtn.on(js.CLICK, e, e.videoUpgrade),
                e.activeBtn.on(js.CLICK, e, e.activeHandle), e;
        }
        return Object(Q.d)(t, r),
            t.prototype.useHandle = function () {
                Te(this.skinDef.id),
                    Pa.curSkin == this.skinDef.id && (console.log("成功使用皮肤22" + this.skinDef.name),
                        this.close());
            }, t.prototype.videoUpgrade = function () {

                return Pa.completeSkin(this.skinDef.id),
                    (e = k.findPanelByName("SkinView")) && e.refreshSkinList(),
                    this.close(),
                    new Di(this.skinDef.id).show()


                // Object(Q.b)(this, void 0, void 0, function () {
                //     var e, i, n;
                //     return Object(Q.e)(this, function (t) {
                //         switch (t.label) {
                //             case 0:
                //                 if ((e = Date.now() - As) < 2e4) return [2, Sa("无法频繁看视频，请" + (20 - Math.floor(e / 1e3)) + "秒后重试")];
                //                 this.videoBtn.mouseEnabled = !1, t.label = 1;

                //             case 1:
                //                 console.log("看视频");
                //                 return t.trys.push([1, , 3, 4]), 
                //                 [4, Ke.play(Ei(Yt.skin, this.skinDef.id))];

                //             case 2:
                //                 return 0 === (i = t.sent()) ? [2, Sa("完整看完视频才能解锁进度")] : 2 === i ? (Sa("抱歉，当前没有视频可看"),
                //                     [2]) : [3, 4];

                //             case 3:
                //                 return this.videoBtn.mouseEnabled = !0, [7];

                //             case 4:
                //                 return As = Date.now(), (n = xe(this.skinDef.id)) ? (this.close(), xa(n)) : 
                //                 (Sa("皮肤视频进度为" + Pa.skinVideos[this.skinDef.id] + "/" + this.skinDef.videoNeed),
                //                     this.videoProgress.text = (Pa.skinVideos[this.skinDef.id] || 0) + "/" + this.skinDef.videoNeed),
                //                     [2];
                //         }
                //     });
                // });
            }, t.prototype.shareHandle = function () {
                se("获取皮肤炫耀"), bi(this.skinDef.id).then(function (t) {
                    ae("获取皮肤炫耀");
                }).catch(function (t) { });
            }, t.prototype.buyHandle = function () {
                let gggg = Number(Laya.LocalStorage.getItem("goldgold"))

                return Object(Q.b)(this, void 0, void 0, function () {
                    var e;

                    return Object(Q.e)(this, function (t) {
                        // Number(Laya.LocalStorage.getItem("goldgold")) = 9999
                        //全局金币   购买按钮

                        switch (t.label) {
                            case 0:
                                return 0 < this.skinDef.consumeGold ? gggg >= this.skinDef.consumeGold ?

                                    (gggg -= this.skinDef.consumeGold,
                                        Laya.LocalStorage.setItem("goldgold", gggg),
                                        function (t) {
                                            Object(l.sendAnalysis)("皮肤获得-金币购买获得" + t);
                                        }(this.skinDef.id),
                                        Pa.completeSkin(this.skinDef.id),
                                        (e = k.findPanelByName("SkinView")) && e.refreshSkinList(),
                                        this.close(),
                                        new Di(this.skinDef.id).show(),
                                        [3, 5]) :
                                    [3, 1]
                                    : [3, 5];

                            case 1:
                                // if ($hostDef.censor) {
                                //     [3, 3]
                                // } else {


                                //     [4, console.log("金币不足"), window.tiptip3.visible = !0,

                                //         Laya.timer.once(1500, this, () => {
                                //             window.tiptip3.visible = !1;
                                //         })]
                                // }
                                return $hostDef.censor ? [3, 3] : [4, console.log("金币不足"), window.tiptip3.visible = !0,

                                    Laya.timer.once(1500, this, () => {
                                        window.tiptip3.visible = !1;
                                    })];

                            case 2:
                                return t.sent() && new Bi().show(), [3, 4];

                            case 3:
                                Sa("金币不足"), t.label = 4;

                            case 4:
                            case 5:
                                return [2];
                        }
                    });
                });
            }, t.prototype.activeHandle = function () {
                var t = Pa.getSkin(this.skinDef.id);
                if (t && 0 === t.status && t.frag >= this.skinDef.needFragCnt) {
                    var e = new Jt();
                    Pa.completeSkin(t.id, e),
                        xa(e),
                        this.close();
                }
            },
            t.prototype.goHandle = function () {
                return Object(Q.b)(this, void 0, void 0, function () {
                    var e, i, n, r;
                    //here
                    // if(this.skinDef.sort == 1){
                    //     Ps.startFight()
                    //     return;
                    // }
                    return Object(Q.e)(this, function (t) {

                        switch (t.label) {

                            case 0:
                                return "turntable" != this.skinDef.jumpTo ? [3, 1] : (new Bi().show(), [3, 11]);

                            case 1:
                                return "puzzle" != this.skinDef.jumpTo ? [3, 2] : (new Ai().show(), [3, 11]);

                            case 2:
                                return "check" != this.skinDef.jumpTo ? [3, 3] : (new Ni().show(), [3, 11]);

                            case 3:
                                return "invite" != this.skinDef.jumpTo ? [3, 4] : (new Fi().show(), [3, 11]);

                            case 4:
                                if ("battle" != this.skinDef.jumpTo) return [3, 10];
                                t.label = 5;

                            case 5:
                                return t.trys.push([5, 7, 8, 9]), [4, Ps.startFight()];

                            case 6:
                                return t.sent(), (e = k.findPanelByName("SkinView")) && e.close(), (i = k.findPanelByName("StartView")) && i.close(),
                                    (n = k.findPanelByName("ResultView")) && n.close(), this.close(), [3, 9];

                            case 7:
                                return r = t.sent(), Ps.reset(), this.visible = !0, _a("开始游戏出错:", r), [3, 9];

                            case 8:
                                return [7];

                            case 9:
                                return [3, 11];

                            case 10:

                                Sa(this.skinDef.getTips), t.label = 11;

                            case 11:
                                return [2];
                        }
                    });
                });
            }, t.prototype.show = function () {
                console.log("获得批复！！")
                r.prototype.show.call(this), zt(this.panel);
            }, t.prototype.close = function () {

                TWEEN.killTweensOf(this.panel), r.prototype.close.call(this);
            }, t;
    }(Bs);
    (Es = Cs || (Cs = {}))[Es.normal = 1] = "normal", Es[Es.using = 2] = "using", Es[Es.canActive = 3] = "canActive",
        Es[Es.fragLock = 4] = "fragLock", Es[Es.goldLock = 5] = "goldLock";
    var Rs = function (e) {
        function t() {
            var n = e.call(this) || this;
            return n._crtState = Cs.normal, n.skinId = 0, n.name = "SkinItemView", n.mouseEnabled = !0,
                n.on(Laya.Event.CLICK, n, n.onClick),
                n.addToDestroy = function () {
                    n.off(Laya.Event.CLICK, n, n.onClick);
                }, n.addToDestroy = Object(m.a)(function () {
                    if (0 != dn.skinI) {
                        var t = ft.getDefById(n.skinId);
                        if (t) {
                            var e,
                                i = Pa.getSkin(n.skinId);

                            // console.log("皮肤数据2：", i)
                            e = !!i &&
                                (1 <= i.status ? 1 === i.status : i.frag >= t.needFragCnt),
                                n.red.visible = !1 //e;
                        }
                    }
                }), n;
        }
        return Object(Q.d)(t, e),
            t.prototype.updateData = function (t) {
                var e = this;
                this.width = 200, this.height = 268;
                var i = this.dataSource;
                // console.log("皮肤数据3：", i)
                if (this._unWatch && (this._unWatch(), this._unWatch = void 0), i) {
                    switch (this.skinId = i.id,
                    this._base = Pa.getSkin(i.id),
                    this.nameLabel.text = i.name,
                    this.icon.skin = "icon/icon_skin_" + i.id + ".png", this.usingGroup.visible = !1,
                    this.lock.visible = !1,
                    this.bg.skin = "ui/bg_skin_item.png",
                    this._crtState = this.checkState()) {
                        case Cs.normal:
                            console.log("normal")
                            break;

                        case Cs.using:
                            this.usingGroup.visible = !0, this.bg.skin = "ui/bg_skin_item_cur.png";
                            break;

                        case Cs.canActive:
                            break;

                        case Cs.goldLock:
                        case Cs.fragLock:
                            this.lock.visible = !0;
                    }
                    this.lock.visible && (i.videoNeed ? this.lockIcon.skin = "ui/icon_video.png" : 0 < i.consumeGold ? this.lockIcon.skin = "ui/icon_gold.png" : this.lockIcon.skin = "ui/tag_lock_2.png"),
                        this._unWatch = Object(m.a)(function () {
                            Pa.curSkin != i.id && e._crtState == Cs.using && e.updateData(), Pa.curSkin == i.id && e._crtState != Cs.using && e.updateData();
                        });
                }
            }, t.prototype.checkState = function () {
                var t = this.dataSource,
                    e = this._base;
                return Pa.curSkin == t.id ? Cs.using : e && 1 <= e.status ? Cs.normal :
                    0 <= (dt.videoSkinId || []).indexOf(t.id) ? Cs.goldLock :
                        t.consumeGold ?
                            Cs.goldLock
                            :
                            e && e.frag >= t.needFragCnt ?
                                Cs.canActive
                                :
                                Cs.fragLock;
            },
            t.prototype.onClick = function () {
                new Ms(this._base || {
                    id: this.skinId,
                    frag: 0,
                    status: 0
                }).show();
            }, t.prototype.createChildren = function () {
                e.prototype.createChildren.call(this), this.loadUI("SkinItemView");
            }, t.prototype.destroy = function (t) {
                this._unWatch && (this._unWatch(), this._unWatch = void 0), e.prototype.destroy.call(this, t);
            }, Object(Q.c)([m.g], t.prototype, "skinId", void 0), t;
    }(Nt), Ns = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.name = "SignSpecialItemView", t;
        }
        return Object(Q.d)(t, e), t.prototype.createChildren = function () {
            e.prototype.createChildren.call(this), this.loadUI("SignSpecialItemView");
        }, t.prototype.setData = function (t, e) {
            var i = this;
            this.numLabel.visible = !1, 1 == t.rewardType ? (this.icon.skin = "ui/icon_gold.png",
                this.numLabel.visible = !0, this.numLabel.text = "x" + t.rewardNum) : 0 == t.rewardType && (this.icon.skin = "icon/icon_skin_" + t.specialSkinId + ".png"),
                this.addToDestroy = Object(m.a)(function () {
                    var t = (Pa.signDay - 1) % 7 + 1;
                    (Pa.signLoginDay - 1) % 7 + 1 < t && (t -= 7), i.gotTag.visible = e <= t;
                });
        }, t;
    }(Nt), Vs = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.name = "SignItemView", t;
        }
        return Object(Q.d)(t, e), t.prototype.setData = function (t, e) {
            var i = this;
            this.nameLabel.text = "Day " + S[e] + "", this.numLabel.visible = !1, 1 == t.rewardType ? (this.icon.skin = "ui/icon_gold.png",
                this.numLabel.visible = !0, this.numLabel.text = "x" + t.rewardNum) : 0 == t.rewardType && (this.icon.skin = "icon/icon_skin_" + t.specialSkinId + ".png"),
                this.addToDestroy = Object(m.a)(function () {
                    var t = (Pa.signDay - 1) % 7 + 1;
                    (Pa.signLoginDay - 1) % 7 + 1 < t && (t -= 7), i.gotTag.visible = e <= t, i.bg.skin = t <= 0 ? "ui/bg_sign_item" + (1 === e ? "_cur" : "") + ".png" : "ui/bg_sign_item" + (e === t + 1 ? "_cur" : "") + ".png";
                });
        }, t.prototype.createChildren = function () {
            e.prototype.createChildren.call(this), this.loadUI("SignItemView");
        }, t;
    }(Nt), Us = function (n) {
        function t(t, e) {
            void 0 === e && (e = "");
            var i = n.call(this, t, e) || this;
            return i.stateNum = 1, i;
        }
        return Object(Q.d)(t, n), t.prototype.createChildren = function () {
            n.prototype.createChildren.call(this), this.anchorX = .5, this.anchorY = .5, this.on(Laya.Event.MOUSE_DOWN, this, this.scaleSmall),
                this.on(Laya.Event.MOUSE_UP, this, this.scaleBig), this.on(Laya.Event.MOUSE_OUT, this, this.scaleBig);
        }, t.prototype.scaleSmall = function () {
            this.scaleX = this.scaleY = .8;
        }, t.prototype.scaleBig = function () {
            this.scaleX = this.scaleY = 1;
        }, t;
    }(laya.ui.Button), Gs = function (i) {
        function t() {
            var t = i.call(this) || this;
            t._startY = 0;
            var e = t.bg = new Laya.Image();
            return e.skin = "ui/boxGiftIcon.png", t.addChild(e), t.pivot(e.width / 2, e.height / 2),
                t.startY = t.y, t;
        }
        return Object(Q.d)(t, i), Object.defineProperty(t.prototype, "startY", {
            set: function (t) {
                this._startY = t, this.y = t;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.setSkin = function (t) {
            this.bg.skin = t;
        }, t.prototype.show = function () {
            var t = this, e = setTimeout(function () {
                clearTimeout(e), t.startShake();
            }, 1e3);
        }, t.prototype.startShake = function () {
            var t = this;
            this.stopShake(), this.shake().then(function () {
                return t.shake();
            }).then(function () {
                return t.shake();
            }).then(function () {
                return t.shake();
            }), this.intervalKey = setInterval(function () {
                t.shake().then(function () {
                    return t.shake();
                }).then(function () {
                    return t.shake();
                }).then(function () {
                    return t.shake();
                });
            }, 2500);
        }, t.prototype.shake = function () {
            var e = this;
            return new Promise(function (t) {
                Laya.Tween.to(e, {
                    rotation: 20
                }, 100, void 0, Laya.Handler.create(e, function () {
                    e || t(), Laya.Tween.to(e, {
                        rotation: -15
                    }, 100, void 0, Laya.Handler.create(e, function () {
                        e || t(), Laya.Tween.to(e, {
                            rotation: 10
                        }, 100, void 0, Laya.Handler.create(e, function () {
                            e || t(), Laya.Tween.to(e, {
                                rotation: -5
                            }, 100, void 0, Laya.Handler.create(e, function () {
                                e || t(), Laya.Tween.to(e, {
                                    rotation: 0
                                }, 100, void 0, Laya.Handler.create(e, function () {
                                    e || t(), t();
                                }));
                            }));
                        }));
                    }));
                }));
            });
        }, t.prototype.jump = function () {
            var e = this, i = this._startY;
            return new Promise(function (t) {
                Laya.Tween.to(e, {
                    y: i - 50
                }, 300, Laya.Ease.cubicOut, Laya.Handler.create(e, function () {
                    e || t(), Laya.Tween.to(e, {
                        y: i
                    }, 300, Laya.Ease.bounceOut, Laya.Handler.create(e, function () {
                        e || t(), t();
                    }));
                }));
            });
        }, t.prototype.stopShake = function () {
            Laya.Tween.clearAll(this), this.intervalKey && (clearInterval(this.intervalKey),
                this.intervalKey = void 0);
        }, t.prototype.hide = function () {
            this.stopShake();
        }, t.prototype.destroy = function (t) {
            i.prototype.destroy.call(this, t), this.stopShake();
        }, t;
    }(Laya.UIComponent), zs = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.name = "FootBallIcon", vn.on("holderChange", t, t.onHolderChange), t;
        }
        return Object(Q.d)(t, e), t.prototype.onHolderChange = function () {
            var t = vn.holder;
            t ? (this.circle.skin = 1 === t.team ? "ui/icon_football_a.png" : "ui/icon_football_b.png",
                this.flag.skin = 1 === t.team ? "ui/football_arrow_a.png" : "ui/football_arrow_b.png") : (this.circle.skin = "ui/icon_football.png",
                    this.flag.skin = "ui/football_arrow.png");
        }, t.prototype.createChildren = function () {
            e.prototype.createChildren.call(this), this.loadUI("FootBallIconView");
        }, t.prototype.setValue = function (t, e, i, n, r) {
            if (this.x = t - 49, this.y = e, !this.checkBound()) {
                this.y -= 200;
                var o = 90 * v;
                return this.flag.x = 49 + 52 * Math.cos(o), this.flag.y = 49 + 52 * Math.sin(o),
                    this.flag.rotation = 90, void (this.visible = !0);
            }
            var s = t - n, a = this.y - r, c = Math.atan2(a, s) * y;
            90 <= Math.abs(c - i) && (this.x = n + 1e3 * Math.cos(i * v), this.y = r + 1e3 * Math.sin(i * v),
                this.checkBound());
            var u = i * v;
            this.flag.x = 49 + 52 * Math.cos(u), this.flag.y = 49 + 52 * Math.sin(u), this.flag.rotation = i,
                this.visible = !0;
        }, t.prototype.checkBound = function () {
            var t = !1;
            return this.x < this.flag.width && (this.x = this.flag.width, t = !0), this.x > u - this.width && (this.x = u - this.width,
                t = !0), this.y < 100 && (this.y = 100, t = !0), this.y > h - this.height && (this.y = h - this.height,
                    t = !0), t;
        }, t.prototype.destroy = function (t) {
            vn.off("holderChange", this, this.onHolderChange), e.prototype.destroy.call(this, t);
        }, t;
    }(Nt), Fs = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.name = "GradListItem", t;
        }
        return Object(Q.d)(t, e), t.prototype.onRender = function (t) {
            var e = this.dataSource;
            this.gradNameLabel.changeText(e.name), this.gradIcon.skin = "icon/" + e.resource + ".png",
                this.cupNumLabel.changeText(e.cupNum.toString()), this.currentGradTag.visible = Pa.grad === e.id;
            var i = e.id > Pa.grad;
            this.currentGradTag.visible ? this.itemBg.skin = "bg/bg_grad_item.png" : this.itemBg.skin = i ? "bg/bg_grad_item_grey.png" : "bg/bg_grad_item.png";
            var n = this.iconContainer, r = e.unlockSkin.filter(function (t) {
                return 1 !== t;
            }), o = r.length;
            (Vi(n, Bo, o, function (t, e) {
                t.x = (t.width + 10) * e, t.setSkin(r[e]), t.lock = i, t.hideCount();
            }), 0 === o) && n.addChild(new Bo()).setUnknown();
        }, t.prototype.createChildren = function () {
            e.prototype.createChildren.call(this), this.loadUI("GradListItem");
        }, t;
    }(Nt), Hs = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.name = "BaseProgress", t;
        }
        return Object(Q.d)(t, e), Object.defineProperty(t.prototype, "value", {
            set: function (t) {
                t = Math.max(0, Math.min(1, t)), this.bar.width = this.width * t;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.setSize = function (t, e) {
            this.width = t, this.height = e;
        }, t.prototype.createChildren = function () {
            e.prototype.createChildren.call(this), this.loadUI("BaseProgress");
        }, t;
    }(Nt), $s = Laya.Image, Ks = Laya.Sprite, Ws = Laya.Rectangle, Xs = Laya.Tween, qs = function (i) {
        function t(t) {
            var e = i.call(this) || this;
            return e.imageSize = t, e._scroll = 0, e.image1 = new $s(), e.image1.width = e.image1.height = e.imageSize,
                e.addChild(e.image1), e.image2 = new $s(), e.image2.width = e.image2.height = e.imageSize,
                e.addChild(e.image2), e.image2.x = t, e._scroll = 0, e.scrollRect = e.rect = new Ws(0, 0, e.imageSize, e.imageSize),
                e;
        }
        return Object(Q.d)(t, i), t.prototype.play = function (t, e, i) {
            this.imageURLs = t, this.scroll = 0, Xs.to(this, {
                scroll: e * this.imageSize
            }, i);
        }, Object.defineProperty(t.prototype, "scroll", {
            get: function () {
                return this._scroll;
            },
            set: function (t) {
                // this._scroll = t, this.rect.x = t % this.imageSize, this.scrollRect = this.rect;
                // var e = Math.floor(t / this.imageSize);
                // this.image1.skin = this.imageURLs[e % this.imageURLs.length].image;
                // var i = e % this.imageURLs.length + 1;
                // i >= this.imageURLs.length && (i = 0), this.image2.skin = this.imageURLs[i].image;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.stop = function (t) {
            Xs.clearAll(this), this.rect.x = 0, this.scrollRect = this.rect, this.image1.skin = t.image;
        }, t.prototype.destroy = function (t) {
            Xs.clearAll(this), i.prototype.destroy.call(this, t);
        }, t;
    }(Ks), Ys = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.name = "MatchingIcon", t;
        }
        return Object(Q.d)(t, e), t.prototype.updateData = function (t, e) {
            (this._info = t) ? (this.visible = !0, e ? (this.head.visible = !0, this.head.skin = t.image) : this.head.visible = !1) : this.visible = !1;
        }, t.prototype.playRandom = function (t, e) {
            null == this.scrollImage && (this.scrollImage = new qs(this.head.width), this.addChild(this.scrollImage),
                this.scrollImage.pos(this.head.x, this.head.y)), this.scrollImage.play(t, Math.max(20, 5 * t.length), e);
        }, t.prototype.stop = function (t) {
            this.scrollImage && this.scrollImage.stop(t);
        }, t.prototype.createChildren = function () {
            e.prototype.createChildren.call(this), this.loadUI("MatchingIcon");
        }, t.prototype.destroy = function (t) {
            this._info = null, e.prototype.destroy.call(this, t), this.scrollImage && (this.scrollImage.destroy(t),
                this.scrollImage = null);
        }, t;
    }(Vt), Qs = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t._counter = {
                shareCount: 0
            }, t.name = "FreeSkinItem", t.videoBtn.on(Laya.Event.CLICK, t, t.onWatchVideo),
                t;
        }
        return Object(Q.d)(t, e), t.prototype.setSkinDef = function (t, e) {
            this.skinDef = t, this._fromPanel = e, this.nameLabel.text = t.name, this.icon.skin = "icon/icon_skin_" + t.id + ".png";
        }, t.prototype.onWatchVideo = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e;
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            this.videoBtn.mouseEnabled = !1, t.label = 1;

                        case 1:
                            return t.trys.push([1, , 3, 4]), [4, Ke.play(Ei(Yt.trySkin))];

                        case 2:
                            return 0 === (e = t.sent()) ? [2, Sa("观看完整视频才能试用皮肤")] : 2 === e ? ($hostDef.censor || !$hostDef.noVideoShare ? Sa("抱歉，当前没有视频可看") : (de("分享触达"),
                                Mi(Kt.freeSkin, this._counter).then(function (t) {
                                    t && de("分享完成");
                                })), [2]) : [3, 4];

                        case 3:
                            return this.videoBtn.mouseEnabled = !0, [7];

                        case 4:
                            return this.videoBtn.mouseEnabled = !0, Sa("成功使用【" + this.skinDef.name + "】皮肤"),
                                Co.setFreeSkin(this.skinDef.id), this._fromPanel && this._fromPanel.close(), [2];
                    }
                });
            });
        }, t.prototype.destroy = function (t) {
            e.prototype.destroy.call(this, t), this._fromPanel = null;
        }, t;
    }(Rt.FreeSkinItemUI), Js = "ui/sButton_more_games_toggle_open.png", Zs = "ui/tag_red_point.png", ta = (function (s) {
        function t() {
            var i = s.call(this) || this;
            i._isOpen = !1, i._destroyBag = [];
            var t = i.toggle = new Us(Js);
            t.anchorX = 0, t.y = -38, i.addChild(t), t.on(Laya.Event.CLICK, i, i.onToggle);
            var e = new Laya.Sprite(), n = new Laya.Image("bg/more_games_panel.png");
            n.width = 523, n.height = 540, e.addChild(n), e.pivot(n.width, .15 * n.height);
            var r = new Laya.List();
            r.repeatX = 4, r.repeatY = 3, r.itemRender = ta, r.spaceY = 5, r.x = 8, r.y = 40,
                e.addChild(r), i.addChild(e);
            var o = new Laya.Image(Zs);
            return o.anchorX = 1, o.x = t.width, o.y = t.y - t.height / 2, i.addChild(o), Xo().then(function (t) {
                var e = t.gamesList;
                i.destroyed || (r.dataSource = e, i.addToDestroy = Object(m.a)(function () {
                    o.visible = e.some(function (t) {
                        return t.isRed;
                    });
                }));
            }), i;
        }
        Object(Q.d)(t, s), t.prototype.onToggle = function () {
            this._isOpen ? (Laya.Tween.to(this, {
                x: 0
            }, 230, Laya.Ease.sineOut), this.toggle.skin = Js) : (Laya.Tween.to(this, {
                x: 523
            }, 230, Laya.Ease.sineOut), this.toggle.skin = "ui/sButton_more_games_toggle_close.png"),
                this._isOpen = !this._isOpen;
        }, t.prototype.toggleClose = function () {
            this._isOpen && (this._isOpen = !1, Laya.Tween.to(this, {
                x: 0
            }, 230, Laya.Ease.sineOut), this.toggle.skin = Js);
        }, Object.defineProperty(t.prototype, "addToDestroy", {
            set: function (t) {
                this._destroyBag.push(t);
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.destroy = function (t) {
            this._destroyBag.splice(0).forEach(function (t) {
                return t();
            }), s.prototype.destroy.call(this, t);
        };
    }(Laya.Sprite), function (o) {
        function t() {
            var e = o.call(this) || this;
            e._destroyBag = [], e.width = 126, e.x = e.pivotX = e.width / 2;
            var i = new Laya.Image();
            i.width = 100, i.height = 100, i.centerX = 0, e.addChild(i);
            var n = new Laya.Text();
            n.fontSize = 24, n.width = 6 * n.fontSize, n.x = (e.width - n.width) / 2, n.align = "center",
                n.color = "#3581bb", e.addChild(n);
            var r = new Laya.Image(Zs);
            return r.anchorX = 1, r.x = e.width, e.addChild(r), i.y = r.height / 2, n.y = i.y + i.height + 10,
                e.height = n.y + n.fontSize + 5, e.y = e.pivotY = (e.height - 5) / 2, e.addToDestroy = Object(m.a)(function () {
                    var t = e.dataSource;
                    t ? (i.skin = t.icon, n.text = t.name, r.visible = t.isRed) : (i.skin = "", n.text = "",
                        r.visible = !1);
                }), e.on(Laya.Event.MOUSE_DOWN, e, e.scaleSmall), e.on(Laya.Event.MOUSE_UP, e, e.scaleBig),
                e.on(Laya.Event.MOUSE_OUT, e, e.scaleBig), e.on(Laya.Event.CLICK, e, e.onClick),
                e;
        }
        return Object(Q.d)(t, o), t.prototype.onClick = function () {
            this.dataSource && (this.dataSource.lastClick = Date.now());
        }, t.prototype.scaleSmall = function () {
            this.scaleX = this.scaleY = .8;
        }, t.prototype.scaleBig = function () {
            this.scaleX = this.scaleY = 1;
        }, Object.defineProperty(t.prototype, "addToDestroy", {
            set: function (t) {
                this._destroyBag.push(t);
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.destroy = function (t) {
            this._destroyBag.splice(0).forEach(function (t) {
                return t();
            }), o.prototype.destroy.call(this, t);
        }, Object(Q.c)([m.g], t.prototype, "dataSource", void 0), t;
    }(Laya.UIComponent)), ea = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.name = "OtherGameTaskItem", t.getBtn.on(Laya.Event.CLICK, t, t.getTaskReward),
                t.goBtn.on(Laya.Event.CLICK, t, t.jumpToGame), t;
        }
        return Object(Q.d)(t, e), t.prototype.createChildren = function () {
            e.prototype.createChildren.call(this), this.loadUI("OtherGameTaskItem");
        }, t.prototype.updateData = function (t) {
            var e = this.dataSource;
            if (e) {
                var i = e.icon, n = e.name, r = e.rewardType, o = e.rewardCount;
                switch (this.gameIcon.skin = i, this.nameLabel.text = n, this.numLabel.text = "x" + (o || 0),
                r) {
                    case "coin":
                        this.rewardIcon.skin = "ui/icon_coin_small.png";
                        break;

                    case "gold":
                        this.rewardIcon.skin = "ui/icon_gold.png";
                        break;

                    case "skillPoint":
                        this.rewardIcon.skin = "ui/icon_skill_point.png";
                }
                this.checkButton();
            }
        }, t.prototype.checkButton = function () {
            var t = this.dataSource;
            if (t) {
                var e = function (t) {
                    var e = t.appId, i = t.path;
                    return "" + e + (void 0 === i ? "" : i);
                }(t), i = 0 <= Pa.moreGamesReward.indexOf(e), n = Pa.canRewardNavigate(t);
                i ? (this.gotTag.visible = !0, this.goBtn.visible = !0, this.getBtn.visible = !1) : n ? (this.gotTag.visible = !1,
                    this.goBtn.visible = !1, this.getBtn.visible = !0) : (this.gotTag.visible = !1,
                        this.goBtn.visible = !0, this.getBtn.visible = !1);
            }
        }, t.prototype.getTaskReward = function () {
            var t = this.dataSource;
            t && (Pa.getNavigateReward(t), this.checkButton());
        }, t.prototype.jumpToGame = function () {
            var e = this, i = this.dataSource;
            i && Va(i, "试玩礼包").then(function (t) {
                t && (Pa.setNavigated(i), e.checkButton());
            });
        }, Object(Q.c)([m.g.ref], t.prototype, "dataSource", void 0), t;
    }(Nt);
    var ia, na = Rt.OtherGameTaskPanelUI, ra = [], oa = function (e) {
        function t() {
            var n = e.call(this) || this;
            n.name = "OtherGameTaskPanel", n.canTapMaskClose = !0, n.panel.centerX = n.panel.centerY = 0,
                n.changeBtn.on(Laya.Event.MOUSE_DOWN, n, n._changeGameList), n.changeBtn.visible = !1;
            var o = n.taskList;
            o.itemRender = ea, o.vScrollBarSkin = "", o.renderHandler = new Laya.Handler(n, function (t, e) {
                t.updateData();
            });
            var r = n.iconList = new Laya.List();
            return r.repeatX = 4, r.repeatY = 3, r.itemRender = ta, r.spaceY = 6, r.spaceX = 20,
                r.x = 0, r.y = 0, n.iconGroup.addChild(r), r.mouseHandler = new Laya.Handler(n, function (t, e) {
                    if (t.type === Laya.Event.CLICK) {
                        var i = r.dataSource[e], n = o.dataSource.find(function (t) {
                            return t.name === i.name;
                        });
                        n && !Pa.isNavigateRewarded(n) ? Va(i, "侧边栏").then(function (t) {
                            t && (Pa.setNavigated(n), o.refresh());
                        }) : Yo(i, "侧边栏"), i.lastClick = Date.now(), r.refresh();
                    }
                }), Xo().then(function (t) {
                    var e = t.gamesList, i = t.navigateReward;
                    if (!n.destroyed) {
                        ra = e || [], n.changeBtn.visible = 12 < ra.length && ra.slice(0, 12).some(function (t) {
                            return !t.fixed;
                        }) && ra.slice(12).some(function (t) {
                            return !t.fixed;
                        }), ia || (ia = Object(l.buildRefreshingGameList)(ra)), n.refreshNewGameIcons();
                        var r = Pa.moreGamesReward;
                        o.dataSource = i.concat().sort(function (t, e) {
                            var i = 0 <= r.indexOf(sa(t)), n = 0 <= r.indexOf(sa(e));
                            return i !== n ? i ? 1 : -1 : (i = Pa.canRewardNavigate(t)) !== (n = Pa.canRewardNavigate(e)) ? i ? -1 : 1 : 0;
                        });
                    }
                }), n.closeBtn.on(Laya.Event.CLICK, n, function () {

                    n.close();
                }), n;
        }
        return Object(Q.d)(t, e), t.prototype._changeGameList = function () {
            this.refreshNewGameIcons();
        }, t.prototype.refreshNewGameIcons = function () {
            this.iconList.dataSource = ia.next().value, this.checkGameIcons();
        }, t.prototype.checkGameIcons = function () {
            12 < ra.length && (Laya.timer.clearAll(this), Laya.timer.loop(5e3, this, this.refreshNewGameIcons));
        }, t.prototype.destroy = function (t) {
            Laya.timer.clearAll(this), e.prototype.destroy.call(this, t);
        }, t;
    }(na);
    function sa(t) {
        var e = t.appId, i = t.path;
        return "" + e + (void 0 === i ? "" : i);
    }
    var aa, ca, ua, ha, la, pa, da = function (e) {
        function t() {
            var n = e.call(this) || this;
            return n.name = "OtherGameBtn", n.width = 101, n.height = 90, n.btn.on(Laya.Event.CLICK, n, function () {
                new oa().show();
            }), n.red.visible = !1, n.gift.visible = !1, Xo().then(function (t) {
                if (!n.destroyed) {
                    var e = t.gamesList;
                    n.addToDestroy = Object(m.a)(function () {
                        // n.red.visible = e.some(function (t) {
                        //     return t.isRed;
                        // });
                    });
                    var i = t.navigateReward;
                    n.addToDestroy = Object(m.a)(function () {
                        n.gift.visible = i.some(function (t) {
                            return !Pa.isNavigateRewarded(t);
                        });
                    });
                }
            }), n.startShake(), n;
        }
        return Object(Q.d)(t, e), t.prototype.createChildren = function () {
            e.prototype.createChildren.call(this), this.loadUI("OtherGameBtn");
        }, t.prototype.startShake = function () {
            var t = this;
            this.stopTween(), this.intervalKey = setInterval(function () {
                t.shake();
            }, 1500);
        }, t.prototype.shake = function () {
            var t = this;
            Laya.Tween.to(this.gift, {
                rotation: 20
            }, 100, void 0, Laya.Handler.create(this, function () {
                Laya.Tween.to(t.gift, {
                    rotation: -15
                }, 100, void 0, Laya.Handler.create(t, function () {
                    Laya.Tween.to(t.gift, {
                        rotation: 10
                    }, 100, void 0, Laya.Handler.create(t, function () {
                        Laya.Tween.to(t.gift, {
                            rotation: -5
                        }, 100, void 0, Laya.Handler.create(t, function () {
                            Laya.Tween.to(t.gift, {
                                rotation: 0
                            }, 100);
                        }));
                    }));
                }));
            }));
        }, t.prototype.stopTween = function () {
            Laya.Tween.clearTween(this.gift), this.intervalKey && (clearInterval(this.intervalKey),
                this.intervalKey = void 0);
        }, t.prototype.destroy = function (t) {
            this.stopTween(), e.prototype.destroy.call(this, t);
        }, t;
    }(Nt), fa = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t._selected = !1, t.name = "PropTabButton", t.upgradeIcon.visible = !1, t;
        }
        return Object(Q.d)(t, e), t.prototype.setTitle = function (t) {
            this.title.text = t;
        }, Object.defineProperty(t.prototype, "selected", {
            get: function () {
                return this._selected;
            },
            set: function (t) {
                this._selected = t, this.button.skin = t ? "ui/tab_active.png" : "ui/tab_unactive.png",
                    this.button.scaleX = this.button.scaleY = 1;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.createChildren = function () {
            e.prototype.createChildren.call(this), this.loadUI("PropTabButton");
        }, t;
    }(Nt), ya = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.name = "PropIcon", t;
        }
        return Object(Q.d)(t, e), t.prototype.setProp = function (t, e, i) {
            this.icon.skin = "ui/icon_prop" + t + ".png";
            var n = e - i;
            Math.abs(n) <= dt.powerOffset[0] ? (this.flag.skin = "ui/level_equal.png", this.flag.y = 28,
                this.flag.x = 79) : this.flag.skin = n < 0 ? Math.abs(n) <= dt.powerOffset[1] ? "ui/level_down.png" : "ui/level_down_2.png" : Math.abs(n) <= dt.powerOffset[1] ? "ui/level_up.png" : "ui/level_up_2.png";
        }, t.prototype.createChildren = function () {
            e.prototype.createChildren.call(this), this.loadUI("PropIcon");
        }, t.prototype.destroy = function (t) {
            e.prototype.destroy.call(this, t);
        }, t;
    }(Vt), va = 1;
    var ga = function (r) {
        function t() {
            var t = r.call(this) || this;
            t.width = 674, t.height = 89, t.x = (d - t.width) / 2;
            var e = new Laya.Box();
            e.x = e.y = 0, e.width = 674, e.height = 89, t.addChild(e);
            var i = new Laya.Image("ui/bg_float.png");
            i.centerX = 0, e.addChild(i);
            var n = t._label = new Laya.Label();
            return n.font = "SimHei", n.fontSize = 30, n.color = "white", n.centerX = 0, n.centerY = 0,
                t.addChild(n), t;
        }
        return Object(Q.d)(t, r), t.prototype.show = function (t, e) {
            var i = this;
            void 0 === e && (e = 750), this._label.changeText(t), pa.addChild(this);
            var n = B.fontSizeSetting * B.pixelRatio / p;
            this.y = (f - n) / 2 - 180;
            var r = this.y - 100, o = r - 50;
            Laya.Tween.to(this, {
                alpha: 1,
                y: r
            }, 600, void 0, Laya.Handler.create(this, function () {
                Laya.Tween.to(i, {
                    y: r
                }, e, Laya.Ease.cubicOut, Laya.Handler.create(i, function () {
                    Laya.Tween.to(i, {
                        alpha: 0,
                        y: o
                    }, 300, Laya.Ease.cubicOut, Laya.Handler.create(i, function () {
                        i.destroy(!0);
                    }));
                }));
            }));
        }, t.prototype.destroy = function (t) {
            Laya.Tween.clearAll(this), r.prototype.destroy.call(this, t);
        }, t;
    }(Laya.UIComponent), ma = function (i) {
        function t(t) {
            var e = i.call(this) || this;
            e.name = "GiftPopup", e.canTapMaskClose = !0, e.closeBtn.on(Laya.Event.CLICK, e, e.close),
                e.okBtn.on(Laya.Event.CLICK, e, e.close);
            var a = [];
            return t.gold && a.push([0, t.gold, Xt.gold]), t.skinFrags && t.skinFrags.forEach(function (t, e) {
                a.push([e, t]);
            }), t.completeSkins && t.completeSkins.forEach(function (t) {
                a.push([-1, t]);
            }), Vi(e.container, Bo, a.length, function (t, e, i) {
                t.x = (t.width + 20) * e, i.pivotX = (t.x + t.width) / 2;
                var n = Object(Q.f)(a[e], 3), r = n[0], o = n[1], s = n[2];
                0 === r ? t.setMoney(s, o) : -1 === r ? t.setSkin(o) : t.setSkin(r, o);
            }), e;
        }
        return Object(Q.d)(t, i), t.prototype.show = function () {
            var e = this;
            return i.prototype.show.call(this), zt(this.panel), new Promise(function (t) {
                e.resolve = t;
            });
        }, t.prototype.close = function () {
            TWEEN.killTweensOf(this.panel), i.prototype.close.call(this), this.resolve && (this.resolve(),
                this.resolve = void 0);
        }, t;
    }(Rt.GiftPopupUI), ba = function (r) {
        function t() {
            var t = r.call(this) || this;
            t.width = 674, t.height = 89, t.x = (d - t.width) / 2;
            var e = t._mainBox = new Laya.Box();
            e.x = e.y = 0, e.width = 674, e.height = 89, t.addChild(e);
            var i = new Laya.Image("ui/bg_float.png");
            i.centerX = 0, e.addChild(i);
            var n = t._label = new Laya.Label();
            return n.font = "SimHei", n.fontSize = 30, n.color = "white", n.centerX = 0, n.centerY = 0,
                t.addChild(n), t;
        }
        return Object(Q.d)(t, r), t.prototype.show = function (t, e, i, n) {
            var r = this;
            void 0 === n && (n = 300);
            var o = new Laya.Box();
            o.height = 89;
            var s = new Laya.Label();
            s.font = "SimHei", s.fontSize = 30, s.color = "white", o.addChild(s), s.text = t,
                s.centerY = 0;
            var a = new Laya.Image();
            a.width = a.height = 70, o.addChild(a), a.x = s.x + s.width + 10, a.centerY = 0,
                a.skin = e;
            var c = new Laya.Label();
            c.font = "SimHei", c.fontSize = 30, c.color = "white", o.addChild(c), c.text = i,
                c.x = a.x + a.width + 10, c.centerY = 0, this._mainBox.addChild(o), o.centerX = 0,
                pa.addChild(this);
            var u = B.fontSizeSetting * B.pixelRatio / p;
            this.y = (f - u) / 2 - 200;
            var h = this.y - 80, l = h - 50;
            Laya.Tween.to(this, {
                alpha: 1,
                y: h
            }, 300, Laya.Ease.cubicOut, Laya.Handler.create(this, function () {
                Laya.Tween.to(r, {
                    y: h
                }, n, Laya.Ease.cubicOut, Laya.Handler.create(r, function () {
                    Laya.Tween.to(r, {
                        alpha: 0,
                        y: l
                    }, 300, Laya.Ease.cubicOut, Laya.Handler.create(r, function () {
                        r.destroy(!0);
                    }));
                }));
            }));
        }, t.prototype.destroy = function (t) {
            Laya.Tween.clearAll(this), r.prototype.destroy.call(this, t);
        }, t;
    }(Laya.UIComponent);
    function wa(t, n, r) {
        return void 0 === r && (r = {}), new Promise(function (e, i) {
            wx.showModal({
                title: t,
                content: n,
                confirmText: r.confirmText || "确定",
                cancelText: r.cancelText || "取消",
                success: function (t) {
                    return e(t.confirm);
                },
                fail: function (t) {
                    return i(t.errMsg);
                }
            });
        });
    }
    function _a(t, e, i) {
        void 0 === e && (e = ""), void 0 === i && (i = {});
        var n = "";
        e && (n = "string" == typeof e ? e : e.errCode ? "number" == typeof e.errCode ? "错误码: " + e.errCode : "服务器错误: " + e.errCode : e.errMsg || String(e)),
            console.warn("showError", t, e), wx.showModal({
                title: String(t),
                content: String(n),
                confirmText: i.confirmText || "确定",
                showCancel: !1,
                success: i.success,
                fail: function (t) {
                    return console.log(t.errMsg);
                }
            });
    }
    function Sa(t, e) {
        void 0 === e && (e = 750), t && new ga().show(t, e);
    }
    function Ta(t, e) {
        void 0 === e && (e = 750), !$hostDef.censor && $hostDef.groupText && $hostDef.shareFloat && Sa(t, e);
    }
    function xa(t) {
        t && ((t.gold || t.skinFrags) && new ma(t).show(), t.completeSkins && t.completeSkins.forEach(function (t) {
            new Di(t).show();
        }));
    }
    function La(t, e) {
        return new Date(t).toDateString() == new Date(e).toDateString();
    }
    var ka = l.Logger.getLogger("save"), Oa = Symbol("LOCAL_STORAGE");
    var Ia = Symbol.for("user-savedKeyList"), Da = Symbol.for("user-dailyResetList"), Ca = l.Logger.getLogger("user"), Ea = new (function () {
        function t() {
            this.uid = "", this.nick = "", this.avatar = "", this.token = "", this.connectToken = "",
                this.createTime = 0, this.gender = 0, this.isGuest = !0, this.chid = null, this.isNewPlayer = !1,
                this.registerTime = 0,
                this.gold = 0,
                //初始金币
                this.skillPoint = 0, this.offlineGold = 0,
                this.lastHeartBeat = 0, this.ticket = 0, this.videoToTicket = 0, this.dailyTicketGroupCount = 0,
                this.turntableTotalCount = 0, this.turntableGetNoFive = 0, this.lastReduceCupNum = 0,
                this.grad = 1, this.bestGrad = 1, this.cupNum = 0, this.bestCup = 0, this.todayGameCount = 0,
                this.fightCount = 0, this.maxScore = 0, this.curSkin = 1

           window.skins =  this.skins = [],






                this.skinVideos = {},
                this.todayGotLoginRewardCount = 0, this.dailyFavoriteTimes = 0, this.moreGamesReward = [],
                this.propLevels = [0, 0, 0, 0], this.dailyPropVideoCount = 0, this.collectSkinInvites = [],
                this.dailySkipTrySkin = 0, this.signLoginDay = 0, this.signDay = 0, this.interstitialNew = 0,
                this.oldLastHeartBeat = 0, this._willSave = !1, this._willSendKeys = new Set(),
                this.navigateData = {},
                function (o, s) {
                    var e, t;
                    if (o[Oa]) {
                        var i = function (e) {
                            var t, i;
                            try {
                                var n = wx.getStorageSync(s + "-" + e);
                                n && (o[e] = JSON.parse(n));
                            } catch (t) {
                                return "continue";
                            }
                            if (!m.f(o, e)) {
                                var r = o[e];
                                delete o[e], m.c(o, ((t = {})[e] = r, t), ((i = {})[e] = m.g, i)), ka.log("@local 依赖于 @observable, 已自动向字段 " + e + " 添加了 @observable.");
                            }
                            m.h(function () {
                                var t = o[e];
                                return m.e(t) ? JSON.stringify(m.k(t)) : JSON.stringify(t);
                            }, function (t) {
                                wx.setStorageSync(s + "-" + e, t);
                            });
                        };
                        try {
                            for (var n = Object(Q.g)(o[Oa]), r = n.next(); !r.done; r = n.next()) i(r.value);
                        } catch (t) {
                            e = {
                                error: t
                            };
                        } finally {
                            try {
                                r && !r.done && (t = n.return) && t.call(n);
                            } finally {
                                if (e) throw e.error;
                            }
                        }
                    }
                }(this, "user"), null === this.chid && (this.chid = "" || null),
                Ca.log("chid:", this.chid);



            // var t = wx.getStorageSync("token"), 
            // e = wx.getStorageSync("distinctId");
            // if (e) this.distinctId = e;
            //  else if (!t) {
            //     var i = Date.now();
            //     this.distinctId = i + "_" + Math.floor(1e9 * Math.random())
            //     // , 
            //     // wx.setStorageSync("distinctId", this.distinctId);
            // }
            // Ca.log("distinctId:", this.distinctId);
        }
        return Object.defineProperty(t.prototype, "savedKeys", {
            get: function () {
                return (this[Ia] || []).map(function (t) {
                    return t[0];
                });
            },
            enumerable: !0,
            configurable: !0

        }), t.prototype.getPropLevel = function (t) {
            return t >= this.propLevels.length ? 0 : this.propLevels[t];
        }, t.prototype.createUser = function (t) {
            console.log("用户基本信息:" + t), this.uid = t.uid, this.token = t.token, this.isGuest = t.isGuest,
                this.nick = t.nick || "", this.avatar = t.image || "", Object(l.getHostEnv)().emitter.emit("logged");
        }, t.prototype.syncUserData = function (t) {
            var e, i, n, r, o = this;
            if (t) {
                var s = {};
                try {
                    for (var a = Object(Q.g)(t), c = a.next(); !c.done; c = a.next()) {
                        var u = c.value, h = u.key, l = u.value;
                        s[h] = l;
                    }
                } catch (t) {
                    e = {
                        error: t
                    };
                } finally {
                    try {
                        c && !c.done && (i = a.return) && i.call(a);
                    } finally {
                        if (e) throw e.error;
                    }
                }
                var p = function (e, t) {
                    var i = s[e];
                    d[e] = t(i), Object(m.h)(function () {
                        var t = o[e];
                        return m.e(t) ? JSON.stringify(m.k(t)) : JSON.stringify(t);
                    }, function (t) {
                        o.save(e);
                    });
                }, d = this;
                try {
                    for (var f = Object(Q.g)(this[Ia]), y = f.next(); !y.done; y = f.next()) {
                        var v = Object(Q.f)(y.value, 2);
                        p(h = v[0], v[1]);
                    }
                } catch (t) {
                    n = {
                        error: t
                    };
                } finally {
                    try {
                        y && !y.done && (r = f.return) && r.call(f);
                    } finally {
                        if (n) throw n.error;
                    }
                }
                for (var g = 0; g < t.length; g++) this.hasOwnProperty(t[g].key) && void 0 !== t[g].value && (this[t[g].key] = JSON.parse(t[g].value));
                0 == this.registerTime && (this.registerTime = Date.now(), this.interstitialNew = 1),
                    this.isNewPlayer = La(this.registerTime, Date.now()), this._checkLoginDays(ie.curTime),
                    this.oldLastHeartBeat = this.lastHeartBeat,
                    this._fixData();
            }
        }, Object.defineProperty(t.prototype, "hasUnusedSkin", {
            get: function () {
                let rr = JSON.parse(Laya.LocalStorage.getItem("skinskins"))


                for (var t = 0; t < rr.length; t++) {
                    var e = rr[t];
                    if (2 !== e.status) {
                        if (1 === e.status) return !0;
                        var i = ft.getDefById(e.id);
                        if (i && e.frag >= i.needFragCnt) return !0;
                    }
                }
                return !1;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.getSkin = function (t) {
            // this._fixData();
            // console.log("this.skins.length,",this.skins.length)

            0 === this.skins.length && this.skins.push({
                id: 1,
                frag: 0,
                status: 2
            });


            if (Laya.LocalStorage.getItem("skinskins") == 0
                || Laya.LocalStorage.getItem("skinskins") == null) {

                Laya.LocalStorage.setItem("skinskins", JSON.stringify(this.skins))
            }






            let rr = JSON.parse(Laya.LocalStorage.getItem("skinskins"))
            this.skins = rr

            for (var e = 0; e < rr.length; e++) {
                var i = rr[e];

                if (i.id === t) return i;
            }
            console.log("获得皮肤数量：", rr)
        }, t.prototype.hasEnoughSkinFrag = function (t, e) {
            var i = this.getSkin(t);
            if (!i) return !1;
            if (void 0 === e) {
                var n = ft.getDefById(t);
                if (!n) return !1;
                e = n.needFragCnt;
            }
            return i.frag >= e;
        }, t.prototype.addSkinFrag = function (t, e, i) {
            var n = this.getSkin(t);
            n ? 0 === n.status && (n.frag += e, i && i.addSkinFrag(t, e)) : (n = {
                id: t,
                frag: e,
                status: 0
            },
                this.skins.push(n),
                // Laya.LocalStorage.setItem("skinskins",JSON.stringify(this.skin)),
                i && i.addSkinFrag(t, e));
            var r = ft.getDefById(t);
            return r && 0 === n.status && n.frag >= r.needFragCnt && (n.status = 1), n;
        }, t.prototype.completeSkin = function (t, e) {
            var i = this.getSkin(t);

            i ? 0 === i.status && (i.status = 1, e && e.addCompleteSkin(t)) : (
                this.skins.push({
                    id: t,
                    frag: 0,
                    status: 1
                }),
                Laya.LocalStorage.setItem("skinskins", JSON.stringify(this.skins)),
                e &&
                e.addCompleteSkin(t));
        }, t.prototype.setCurSkin = function (t) {
            Ea.curSkin = t;
            var e = this.getSkin(t);
            2 !== e.status && (e.status = 2);
        }, 
        t.prototype._fixData = function () {
            console.log("_fixData")
            0 === this.skins.length && this.skins.push({
                id: 1,
                frag: 0,
                status: 2
            });

            var t = this.getSkin(1);
            t && 2 === t.status || (this.skins = [{
                id: 1,
                frag: 0,
                status: 2
            }], this.save("skins")), 7 <= this.signDay && !this.getSkin(16) && this.skins.push({
                id: 16,
                frag: 0,
                status: 1
            });
        }, t.prototype.checkOfflineGold = function () {
            Ea.offlineGold = function () {
                var t = Math.floor((ie.curTime - Pa.oldLastHeartBeat) / 6e4);
                if (t < 5) return 0;
                120 < t && (t = 120);
                var e = Pa.propLevels[Ht.offlineGold];
                e < 0 && (e = 0);
                var i = bt.getDefById(Ht.offlineGold), n = i.initValue + i.valueGrow * e;
                return Math.floor(n * t);
            }(), Ea.oldLastHeartBeat = ie.curTime;
        }, t.prototype._checkLoginDays = function (t) {
            var e, i, n = new Date(t), r = new Date(this.lastLoginTime);
            if (!La(t, this.lastLoginTime)) {
                ++this.loginDays, this.lastLoginTime = t, this.signLoginDay++, 0 === this.continuousLoginDays ? this.continuousLoginDays = 1 : Object(l.isNearDay)(n, r) && ++this.continuousLoginDays;
                var o = this[Da];
                if (null != o && 0 < o.length) try {
                    for (var s = Object(Q.g)(o), a = s.next(); !a.done; a = s.next()) {
                        var c = Object(Q.f)(a.value, 2), u = c[0], h = c[1];
                        this[u] = h(this[u]), "todayShareCountRecord" === u && this.save(u);
                    }
                } catch (t) {
                    e = {
                        error: t
                    };
                } finally {
                        try {
                            a && !a.done && (i = s.return) && i.call(s);
                        } finally {
                            if (e) throw e.error;
                        }
                    }
            }
        }, t.prototype.save = function (t) {
            console.log("save")
            this._willSendKeys.add(t), this._willSave || (this._willSave = !0, Laya.timer.callLater(this, this._doSaveUserData));
        }, t.prototype._doSaveUserData = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e, i, n = this;
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            this._willSave = !1, e = Array.from(this._willSendKeys), this._willSendKeys.clear(),
                                i = 1, t.label = 1;

                        case 1:
                            0, t.label = 2;

                        case 2:
                            return t.trys.push([2, 4, , 6]), [4, Object(l.setUserData)(e.map(function (t) {
                                return {
                                    key: t,
                                    value: JSON.stringify(n[t])
                                };
                            }))];

                        case 3:
                            return t.sent(), [3, 7];

                        case 4:
                            return t.sent(), [4, new Promise(function (t) {
                                return setTimeout(t, 1e3 * i);
                            })];

                        case 5:
                            return t.sent(), i *= 2, [3, 6];

                        case 6:
                            return [3, 1];

                        case 7:
                            return [2];
                    }
                });
            });
        }, t.prototype.syncGroupSkinUserList = function () {
            var e, t, i = this.pushUidList;
            if (0 < i.length) try {
                for (var n = Object(Q.g)(i), r = n.next(); !r.done; r = n.next()) {
                    var o = {
                        toUid: r.value,
                        key: "SyncGroupUserInfo",
                        type: "SyncGroupUserInfo",
                        message: JSON.stringify({
                            image: this.avatar,
                            nick: this.nick
                        })
                    };
                    Object(l.pushMessage)(o);
                }
            } catch (t) {
                e = {
                    error: t
                };
            } finally {
                    try {
                        r && !r.done && (t = n.return) && t.call(n);
                    } finally {
                        if (e) throw e.error;
                    }
                }
        }, t.prototype.setNavigated = function (t) {
            "string" != typeof t && (t = Ba(t)), m.j(this.navigateData, t, Date.now()), this.saveNavigateRewards();
        }, t.prototype.canRewardNavigate = function (t) {
            return m.d(this.navigateData, Ba(t));
        }, t.prototype.isNavigateRewarded = function (t) {
            return "string" != typeof t && (t = Ba(t)), -1 !== this.moreGamesReward.indexOf(t);
        }, t.prototype.getNavigateReward = function (t) {
            if (this.isNavigateRewarded(t)) Sa("奖励已领取"); else if (this.canRewardNavigate(t)) {
                var e = t.rewardType, i = t.rewardCount, n = new Jt();
                "gold" === e && 0 < i && i <= 200 && (this.gold += i, n.addGold(i)), this.moreGamesReward.push(Ba(t)),
                    m.i(this.navigateData, Ba(t)), this.saveNavigateRewards(), xa(n);
            } else Sa("请完整体验游戏后领取奖励");
        }, t.prototype.saveNavigateRewards = function () {
            wx.setStorageSync("navigate-rewards", JSON.stringify(this.navigateData));
        }, Object(Q.c)([m.g], t.prototype, "uid", void 0), Object(Q.c)([m.g], t.prototype, "nick", void 0),
            Object(Q.c)([m.g], t.prototype, "avatar", void 0), Object(Q.c)([m.g], t.prototype, "isGuest", void 0),
            Object(Q.c)([m.g, ja(Ma(0))], t.prototype, "registerTime", void 0), Object(Q.c)([m.g, ja(Ma(0))], t.prototype, "gold", void 0),
            Object(Q.c)([m.g], t.prototype, "skillPoint", void 0), Object(Q.c)([m.g, ja(Ma(0))], t.prototype, "lastHeartBeat", void 0),
            Object(Q.c)([m.g, ja(Ma(1)), Aa(function () {
                return 1;
            })], t.prototype, "ticket", void 0), Object(Q.c)([m.g, ja(Ma(0)), Aa(function () {
                return 0;
            })], t.prototype, "videoToTicket", void 0), Object(Q.c)([m.g, ja(Ma(0)), Aa(function () {
                return 0;
            })], t.prototype, "dailyTicketGroupCount", void 0), Object(Q.c)([m.g, ja(Ma(0))], t.prototype, "turntableTotalCount", void 0),
            Object(Q.c)([m.g, ja(Ma(0))], t.prototype, "turntableGetNoFive", void 0), Object(Q.c)([ja(Ra()), Aa(function () {
                return {};
            })], t.prototype, "ticketLinkRecord", void 0), Object(Q.c)([ja(Ra()), Aa(function () {
                return {};
            })], t.prototype, "ticketGroupRecord", void 0), Object(Q.c)([m.g, ja(Ma(1))], t.prototype, "grad", void 0),
            Object(Q.c)([m.g, ja(Ma(1))], t.prototype, "bestGrad", void 0), Object(Q.c)([m.g, ja(Ma(0))], t.prototype, "cupNum", void 0),
            Object(Q.c)([m.g, ja(Ma(0))], t.prototype, "bestCup", void 0), Object(Q.c)([m.g, ja(Ma(0)), Aa(function () {
                return 0;
            })], t.prototype, "todayGameCount", void 0), Object(Q.c)([m.g, ja(Ma(0))], t.prototype, "fightCount", void 0),
            Object(Q.c)([m.g, ja(Ma(0))], t.prototype, "maxScore", void 0), Object(Q.c)([m.g, ja(Ma(1))], t.prototype, "curSkin", void 0),
            Object(Q.c)([m.g, ja(function (t) {
                return void 0 === t ? [] : JSON.parse(t);
            })], t.prototype, "skins", void 0), Object(Q.c)([m.g, ja(Ra())], t.prototype, "skinVideos", void 0),
            Object(Q.c)([m.g, ja(Ma(0))], t.prototype, "loginDays", void 0), Object(Q.c)([m.g, ja(Ma(0))], t.prototype, "lastLoginTime", void 0),
            Object(Q.c)([m.g, ja(Ma(0))], t.prototype, "continuousLoginDays", void 0), Object(Q.c)([m.g, ja(Ma(0)), Aa(function () {
                return 0;
            })], t.prototype, "todayGotLoginRewardCount", void 0), Object(Q.c)([m.g, ja(function (t) {
                return void 0 === t ? [] : JSON.parse(t);
            })], t.prototype, "groupUserList", void 0), Object(Q.c)([m.g, ja(function (t) {
                return void 0 === t ? [] : JSON.parse(t);
            })], t.prototype, "puzzlePieces", void 0), Object(Q.c)([ja(Ra()), Aa(function () {
                return {};
            })], t.prototype, "puzzleLinkRecord", void 0), Object(Q.c)([ja(Ra())], t.prototype, "puzzleGroupRecord", void 0),
            Object(Q.c)([m.g, ja(Ma(0)), Aa(function () {
                return 0;
            })], t.prototype, "dailyFavoriteTimes", void 0), Object(Q.c)([m.g, ja(function (t) {
                return void 0 === t ? [] : JSON.parse(t);
            }), Aa(function () {
                return [];
            })], t.prototype, "moreGamesReward", void 0), Object(Q.c)([m.g, ja(function (t) {
                return void 0 === t ? [0, 0, 0, 0] : JSON.parse(t);
            })], t.prototype, "propLevels", void 0), Object(Q.c)([m.g, ja(Ma(0)), Aa(function () {
                return 0;
            })], t.prototype, "dailyPropVideoCount", void 0), Object(Q.c)([m.g, ja(function (t) {
                return void 0 === t ? [] : JSON.parse(t);
            })], t.prototype, "pushUidList", void 0), Object(Q.c)([m.g, ja(function (t) {
                return void 0 === t ? [] : JSON.parse(t);
            })], t.prototype, "collectSkinInvites", void 0), Object(Q.c)([m.g, ja(Ma(0)), Aa(function () {
                return 0;
            })], t.prototype, "dailySkipTrySkin", void 0), Object(Q.c)([m.g, ja(Ma(0))], t.prototype, "signLoginDay", void 0),
            Object(Q.c)([m.g, ja(Ma(0))], t.prototype, "signDay", void 0), Object(Q.c)([m.g, ja(Ma(0))], t.prototype, "interstitialNew", void 0),
            Object(Q.c)([m.b], t.prototype, "hasUnusedSkin", null), Object(Q.c)([m.g], t.prototype, "navigateData", void 0),
            t;
    }())(), Pa = Ea;
    function Ba(t) {
        var e = t.appId, i = t.path;
        return "" + e + (void 0 === i ? "" : i);
    }
    function ja(n) {
        return function (t, e) {
            var i = t[Ia];
            i || (i = t[Ia] = []), i.push([e, n]);
        };
    }
    function Aa(n) {
        return function (t, e) {
            var i = t[Da];
            i || (i = t[Da] = []), i.push([e, n]);
        };
    }
    function Ma(i) {
        return void 0 === i && (i = 0), function (t) {
            var e = Number(t);
            return isNaN(e) ? i : e;
        };
    }
    function Ra() {
        return function (t) {
            return void 0 === t ? {} : JSON.parse(t);
        };
    }
    var Na = new (function () {
        function t(t) {
            this.storageKey = t, this.map = {}, this.map = function (t) {
                try {
                    return JSON.parse(wx.getStorageSync(t));
                } catch (t) {
                    return {};
                }
            }(t);
        }
        return t.prototype.set = function (t, e) {
            this.map[t] = e, this.save();
        }, t.prototype.get = function (t) {
            return this.map[t];
        }, t.prototype.forEach = function (t) {
            for (var e in this.map) t(this.map[e], e);
        }, t.prototype.clear = function () {
            this.map = {}, wx.removeStorageSync(this.storageKey);
        }, t.prototype.del = function (t) {
            delete this.map[t], this.save();
        }, t.prototype.save = function () {
            wx.setStorageSync(this.storageKey, JSON.stringify(this.map));
        }, t;
    }())("navigate-start");
    function Va(n, r) {
        return Object(Q.b)(this, void 0, void 0, function () {
            var i;
            return Object(Q.e)(this, function (t) {
                return i = new Promise(function (t) {
                    wx.onShow(t);
                }), [2, new Promise(function (e) {
                    Yo(n, r, function () {
                        var t = Date.now();
                        Na.set(Ga(n), t), i.then(function () {
                            Na.del(Ga(n)), Date.now() - t > Ua() ? e(!0) : (Sa("请完整体验游戏~", 2e3), e(!1));
                        });
                    }).then(function (t) {
                        1 !== t && e(!1);
                    });
                })];
            });
        });
    }
    function Ua() {
        return "number" != typeof $hostDef.navigateBack || isNaN($hostDef.navigateBack) ? 1e4 : 1e3 * $hostDef.navigateBack;
    }
    function Ga(t) {
        var e = t.appId, i = t.path;
        return "" + e + (void 0 === i ? "" : i);
    }
    var za = Rt.LoadingViewUI,

        Fa = l.Logger.getLogger("loaded"),
        Ha = function (i) {
            function t(t) {
                var e = i.call(this) || this;
                return e.totalSteps = t, e._finishedStep = 0, e.name = "LoadingView", e.retryBtn.visible = !1,
                    e.progressBar.value = 0, e.logo.skin = "res/logo.png", e;
            }
            return Object(Q.d)(t, i),
                t.prototype.finishStep = function (t) {
                    ++this._finishedStep;
                    var e = Math.max(this._finishedStep, 1);
                    Laya.Tween.clearAll(this.progressBar), Laya.Tween.to(this.progressBar, {
                        value: e / this.totalSteps
                    }, 200), Fa.log(t, this._finishedStep + "/" + this.totalSteps);
                },
                t.prototype.setTitle = function (t) {
                    this.hintLabel.text = t;
                },
                t.prototype.withRetry = function (r) {
                    return Object(Q.b)(this, void 0, void 0, function () {
                        var e, i, n;
                        return Object(Q.e)(this, function (t) {
                            console.log("进游戏4：", t.label)
                            switch (t.label) {
                                case 0:
                                    e = !1, t.label = 1;

                                case 1:
                                    if (e) return [3, 7];
                                    t.label = 2;

                                case 2:
                                    console.log("进游戏2：", r);
                                    return t.trys.push([2, 4, , 6]), [4, r()];

                                case 3:
                                    return i = t.sent(),
                                        e = !0,
                                        [3, 6];

                                case 4:

                                    return n = t.sent(),
                                        console.log("进游戏5：", n),
                                        [4, this.showRetry(n)];

                                case 5:
                                    return t.sent(), [3, 6];

                                case 6:
                                    return [3, 1];

                                case 7:
                                    return [2, i];
                            }
                        });
                    });
                },
                t.prototype.showRetry = function (t) {
                    var e = this;
                    return this.hintLabel.text = t && t.errMsg || String(t), new Promise(function (t) {
                        e.retryBtn.visible = !0,
                            e.retryBtn.once(Laya.Event.CLICK, e, function () {
                                e.hintLabel.text = "登录中,请稍候...",
                                    e.retryBtn.visible = !1, e._finishedStep = 0, e.progressBar.value = 0,
                                    t();
                            });
                    });
                },
                t.prototype.destroy = function (t) {
                    Laya.Tween.clearAll(this.progressBar), i.prototype.destroy.call(this, t);
                },
                t;
        }(za), $a = !1;
    var Ka, Wa, Xa = function () {
        function t() {
            this.runningState = 0, this.instant = !0, this.priority = 0;
        }
        return t.prototype.execute = function (t) {
            if (3 === this.runningState || 1 === this.runningState) return this.runningState;
            var e;
            0 === this.runningState && (e = !0, this.onStart(t), this.runningState = 2), 2 === this.runningState && (this.runningState = this.onExecute(t));
            var i = this.runningState;
            if (2 !== i) {
                if (e && !this.instant) return 2;
                this.onEnd(t);
            }
            return i;
        }, t.prototype.$interrupt = function (t) {
            this.onEnd(t);
        }, t.prototype.resetRunningState = function () {
            this.runningState = 0;
        }, t.prototype.setName = function (t) {
            return this.name = t, this;
        }, t.prototype.enableDebug = function () {
            return this.debug = !0, this;
        }, t;
    }();
    (Wa = Ka || (Ka = {}))[Wa.inactive = 0] = "inactive", Wa[Wa.failure = 1] = "failure",
        Wa[Wa.running = 2] = "running", Wa[Wa.success = 3] = "success";
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */    var qa = function (t, e) {
        return (qa = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (t, e) {
            t.__proto__ = e;
        } || function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        })(t, e);
    };
    function Ya(t, e) {
        function i() {
            this.constructor = t;
        }
        qa(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i());
    }
    var Qa = {
        info: function () { },
        warn: function () { },
        error: function () { }
    };
    var Ja = function (o) {
        function t(t) {
            var e = o.call(this) || this;
            e._childNodes = [];
            for (var i = 0, n = t; i < n.length; i++) {
                var r = n[i];
                e.addChild(r);
            }
            return e;
        }
        return Ya(t, o), t.prototype.addChild = function (t, e) {
            void 0 === e ? this._childNodes.push(t) : this._childNodes.splice(e, 0, t), t.parent = this;
        }, t.prototype.removeChild = function (t) {
            var e = this._childNodes.indexOf(t);
            -1 !== e && (t.parent = void 0, this._childNodes.splice(e, 1));
        }, t.prototype.hasChild = function (t) {
            return -1 !== this._childNodes.indexOf(t);
        }, Object.defineProperty(t.prototype, "numChildren", {
            get: function () {
                return this._childNodes.length;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.dispose = function () {
            for (var t = 0, e = this._childNodes; t < e.length; t++) {
                e[t].dispose();
            }
            this._childNodes.length = 0;
        }, t;
    }(Xa), Za = function (s) {
        function t() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            for (var i = s.call(this, t) || this, n = t.length, r = i._runningStatus = new Array(n), o = 0; o < n; ++o) r[o] = 0;
            return i;
        }
        return Ya(t, s), t.prototype.onStart = function () {
            var t = this._childNodes.length;
            0 === t && Qa.warn(this.name + " 没有子节点");
            var e = this._runningStatus;
            e.length !== t && (e.length = t);
            for (var i = 0, n = e.length; i < n; ++i) e[i] = 0;
        }, t.prototype.onEnd = function (t) {
            for (var e = 0, i = this._childNodes.length; e < i; e++) 2 === this._runningStatus[e] && this._childNodes[e].$interrupt(t),
                this._childNodes[e].resetRunningState();
        }, t;
    }(Ja), tc = (function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.name = "Parallel", t;
        }
        Ya(t, e), t.prototype.onExecute = function (t) {
            for (var e = 0, i = this._childNodes.length; e < i; e++) if (0 !== this._runningStatus[e] && 2 !== this._runningStatus[e] || (this._runningStatus[e] = this._childNodes[e].execute(t)),
                1 === this._runningStatus[e]) return 1;
            for (var n = 0, r = this._runningStatus; n < r.length; n++) {
                if (2 === r[n]) return 2;
            }
            return 3;
        };
    }(Za), function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.name = "ParallelComplete", t;
        }
        Ya(t, e), t.prototype.onExecute = function (t) {
            for (var e = 0, i = this._childNodes.length; e < i; e++) {
                var n = this._runningStatus[e];
                if (0 !== n && 2 !== n || (n = this._runningStatus[e] = this._childNodes[e].execute(t)),
                    2 !== n) return n;
            }
            return 2;
        };
    }(Za), function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.name = "ParallelSelector", t;
        }
        Ya(t, e), t.prototype.onExecute = function (t) {
            for (var e = 0, i = this._childNodes.length; e < i; e++) if (0 !== this._runningStatus[e] && 2 !== this._runningStatus[e] || (this._runningStatus[e] = this._childNodes[e].execute(t)),
                3 === this._runningStatus[e]) return 3;
            for (var n = 0, r = this._runningStatus; n < r.length; n++) {
                if (2 === r[n]) return 2;
            }
            return 1;
        };
    }(Za), function (n) {
        function t() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var i = n.call(this, t) || this;
            return i.name = "Selector", i._currentIndex = -1, i;
        }
        return Ya(t, n), t.prototype.onStart = function () {
            0 === this._childNodes.length && Qa.warn(this.name + " 没有子节点"), this._currentIndex = 0;
        }, t.prototype.onExecute = function (t) {
            return 0 === this._childNodes.length ? 1 : this.isValidIndex(this._currentIndex) ? this.runChild(t) : (Qa.error(this.name + " 索引越界"),
                1);
        }, t.prototype.runChild = function (t) {
            var e = this._childNodes[this._currentIndex].execute(t);
            return 1 === e ? this.isValidIndex(++this._currentIndex) ? this.runChild(t) : 1 : e;
        }, t.prototype.isValidIndex = function (t) {
            return 0 <= t && t < this._childNodes.length;
        }, t.prototype.onEnd = function (t) {
            for (var e = 0, i = this._childNodes.length; e < i; e++) {
                var n = this._childNodes[e];
                e === this._currentIndex && n.$interrupt(t), n.resetRunningState();
            }
        }, t;
    }(Ja));
    !function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.name = "PrioritySelector", t;
        }
        Ya(t, e), t.prototype.onStart = function () {
            e.prototype.onStart.call(this), this._childNodes.sort(function (t, e) {
                return e.priority - t.priority;
            });
        };
    }(tc);
    function ec(t) {
        for (var e, i, n = t.length; 1 < n;) e = Math.floor(Math.random() * n--), i = t[n],
            t[n] = t[e], t[e] = i;
        return t;
    }
    (function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.name = "RandomSelector", t;
        }
        Ya(t, e), t.prototype.onStart = function () {
            e.prototype.onStart.call(this), ec(this._childNodes);
        };
    })(tc), function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.name = "RandomSequence", t;
        }
        Ya(t, e), t.prototype.onStart = function () {
            e.prototype.onStart.call(this), ec(this._childNodes);
        };
    }(function (n) {
        function t() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var i = n.call(this, t) || this;
            return i.name = "Sequence", i._currentIndex = -1, i;
        }
        return Ya(t, n), t.prototype.onStart = function () {
            0 === this._childNodes.length && Qa.warn(this.name + " 没有子节点"), this._currentIndex = 0;
        }, t.prototype.onExecute = function (t) {
            return 0 === this._childNodes.length ? 3 : this.isValidIndex(this._currentIndex) ? this.runChild(t) : (Qa.error(this.name + " 索引越界"),
                1);
        }, t.prototype.runChild = function (t) {
            var e = this._childNodes[this._currentIndex].execute(t);
            return 3 === e ? this.isValidIndex(++this._currentIndex) ? this.runChild(t) : 3 : e;
        }, t.prototype.isValidIndex = function (t) {
            return 0 <= t && t < this._childNodes.length;
        }, t.prototype.onEnd = function (t) {
            for (var e = 0, i = this._childNodes.length; e < i; e++) {
                var n = this._childNodes[e];
                e === this._currentIndex && n.$interrupt(t), n.resetRunningState();
            }
        }, t;
    }(Ja));
    var ic = function (i) {
        function t(t) {
            var e = i.call(this) || this;
            return e._childNode = t, e;
        }
        return Ya(t, i), t.prototype.setChildNode = function (t) {
            t !== this._childNode && (this._childNode.dispose(), this._childNode = t);
        }, t.prototype.hasChild = function (t) {
            return this._childNode === t;
        }, t.prototype.onStart = function (t) { }, t.prototype.onEnd = function (t) {
            2 === this._childNode.runningState && this._childNode.$interrupt(t), this._childNode.resetRunningState();
        }, t.prototype.dispose = function () {
            this._childNode.dispose(), this._childNode = null;
        }, t;
    }(Xa), nc = (function (n) {
        function t(t, e) {
            var i = n.call(this, e) || this;
            return i.name = "ConditionalEvaluator", i.reevaluate = !1, i.conditional = t, i;
        }
        Ya(t, n), t.prototype.onExecute = function (t) {
            return !this.reevaluate && 0 !== this.runningState || 3 === this.conditional.execute(t) ? this._childNode.execute(t) : 1;
        }, t.prototype.dispose = function () {
            this.conditional.dispose(), this.conditional = null, n.prototype.dispose.call(this);
        };
    }(ic), function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.name = "Interrupt", t;
        }
        Ya(t, e), t.prototype.doInterrupt = function (t) {
            this.interruptStatus = t;
        }, t.prototype.onExecute = function (t) {
            if (void 0 !== this.interruptStatus) return this.debug && Qa.info(this.name + " 被中断"),
                this.interruptStatus;
            var e = this._childNode.execute(t);
            return 2 !== e ? e : void 0 !== this.interruptStatus ? (this.debug && Qa.info(this.name + " 被中断"),
                this.interruptStatus) : 2;
        }, t.prototype.onStart = function (t) {
            this.interruptStatus = void 0;
        };
    }(ic), function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.name = "Inverter", t;
        }
        Ya(t, e), t.prototype.onExecute = function (t) {
            switch (this._childNode.execute(t)) {
                case 2:
                    return 2;

                case 1:
                    return 3;

                case 3:
                default:
                    return 1;
            }
        };
    }(ic), function (n) {
        function t(t, e) {
            var i = n.call(this, e) || this;
            return i.name = "Repeater", i.endOnFailure = !1, i._count = 0, i.limitCount = t,
                i;
        }
        Ya(t, n), t.prototype.onExecute = function (t) {
            var e = this._childNode.execute(t);
            return 2 === e ? 2 : (this._childNode.resetRunningState(), 1 === e && this.endOnFailure ? 1 : (++this._count,
                this._count >= this.limitCount ? e : 2));
        }, t.prototype.onEnd = function () {
            this._count = 0;
        };
    }(ic), function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.name = "ReturnFailure", t;
        }
        Ya(t, e), t.prototype.onExecute = function (t) {
            return 2 === this._childNode.execute(t) ? 2 : 1;
        };
    }(ic), function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.name = "ReturnSuccess", t;
        }
        Ya(t, e), t.prototype.onExecute = function (t) {
            return 2 === this._childNode.execute(t) ? 2 : 3;
        };
    }(ic), function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.name = "UntilFailure", t;
        }
        Ya(t, e), t.prototype.onExecute = function (t) {
            var e = this._childNode.execute(t);
            return 1 === e ? 3 : (3 === e && this._childNode.resetRunningState(), 2);
        };
    }(ic), function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.name = "UntilSuccess", t;
        }
        Ya(t, e), t.prototype.onExecute = function (t) {
            var e = this._childNode.execute(t);
            return 3 === e ? 3 : (1 === e && this._childNode.resetRunningState(), 2);
        };
    }(ic), function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return Ya(e, t), e.prototype.onStart = function (t) { }, e.prototype.onEnd = function (t) { },
            e.prototype.dispose = function () { }, e;
    }(Xa)), rc = (function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.name = "Idle", t;
        }
        Ya(t, e), t.prototype.onExecute = function (t) {
            return 2;
        };
    }(nc), function (n) {
        function t() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var i = n.call(this) || this;
            return i.name = "PerformInterruption", i.interruptSuccess = !1, i.interrupts = t,
                i;
        }
        Ya(t, n), t.prototype.onExecute = function (t) {
            for (var e = this.interruptSuccess ? 3 : 1, i = 0, n = this.interrupts; i < n.length; i++) {
                var r = n[i];
                r.doInterrupt(e), this.debug && Qa.info(this.name + " 向 " + r.name + " 发起中断");
            }
            return 3;
        };
    }(nc), function (i) {
        function t(t) {
            var e = i.call(this) || this;
            return e.probability = t, e.name = "RandomProbability", e;
        }
        Ya(t, i), t.prototype.onExecute = function (t) {
            return Math.random() < this.probability ? 3 : 1;
        };
    }(function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return Ya(e, t), e.prototype.execute = function (t) {
            this.onStart(t);
            var e = this.runningState = this.onExecute(t);
            return this.onEnd(t), this.runningState = 0, e;
        }, e.prototype.onStart = function (t) { }, e.prototype.onEnd = function (t) { }, e.prototype.dispose = function () { },
            e;
    }(Xa)), l.Logger.getLogger("login"));
    var oc = !1, sc = {
        beforeRelogin: function (e) {
            return Object(Q.b)(this, void 0, void 0, function () {
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return 10002 !== e ? [3, 1] : (Gt.isOffline = !0, rc.log("token 过期, 自动重登"), [3, 4]);

                        case 1:
                            return 10003 !== e ? [3, 4] : (Gt.isOffline = !0, oc ? [3, 4] : Gt.gameInitialized ? (oc = !0,
                                [4, new Promise(function (t) {
                                    !function (t, e) {
                                        void 0 === e && (e = "提示"), "string" == typeof t ? wx.showModal({
                                            title: e,
                                            content: t
                                        }) : wx.showModal(t);
                                    }({
                                        title: "",
                                        content: "登录已失效",
                                        confirmText: "重新登录",
                                        showCancel: !1,
                                        complete: function () {
                                            oc = !1, t();
                                        }
                                    });
                                })]) : [3, 3]);

                        case 2:
                            return t.sent(), rc.log("玩家确认, 开始重登"), [3, 4];

                        case 3:
                            rc.log("token 无效, 自动重登"), t.label = 4;

                        case 4:
                            return [2];
                    }
                });
            });
        },
        onReloginSuccess: function () {
            Gt.isOffline = !1;
        }
    };
    var ac = new (function () {
        function t() {
            this.isStart = !1;
        }
        return t.prototype.startBeat = function () {
            this.isStart || (this.isStart = !0, Laya.timer.loop(2e4, this, this.onHeartBeat));
        }, t.prototype.onHeartBeat = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                return Object(Q.e)(this, function (t) {
                    return Pa.lastHeartBeat = ie.curTime, [2];
                });
            });
        }, t.prototype.endBeat = function () {
            this.isStart && (this.isStart = !1, Laya.timer.clear(this, this.onHeartBeat));
        }, t;
    }())();
    function cc() {
        // wx.onShow(function(t) {
        //     console.log("onShow:", t), Gt.isShow = !0, Gt.shareTicket = t.shareTicket, Gt.scene = t.scene;
        //     var e = Gt.query = t.query || {};
        //     Gt.scene = t.scene;
        //     Object(l.setLinkKey)(e.linkKey), ac.startBeat(), (Gt.gameInitialized ? Promise.resolve() : Object(m.l)(function() {
        //         return Gt.gameInitialized;
        //     })).then(function() {
        //         !function(n) {
        //             Object(Q.b)(this, void 0, void 0, function() {
        //                 var e, i;
        //                 return Object(Q.e)(this, function(t) {
        //                     return (e = Gt.query) && e.fuid && (l.Logger.info("[fuid]", e.fuid), function(t) {
        //                         DEVELOP && ne.info(Zt[t] + "}-邀请成功"), Object(l.sendAnalysis)(Zt[t] + "}-邀请成功"), 
        //                         Pa.isNewPlayer && Object(l.sendAnalysis)(Zt[t] + "}-邀请新客");
        //                     }(i = Number(e.shareSource)), e.shareId && function(t) {
        //                         Object(l.sendAnalysis)("分享图进游戏-" + t);
        //                     }(e.shareId), function(t) {
        //                         var e = Number(t.query.shareSource);
        //                         if (t.query.fuid === Pa.uid) return;
        //                         switch (e) {
        //                           case Kt.freeSkin:
        //                             t && t.shareTicket && Pa.isNewPlayer && hc(t, "FreeSkin");
        //                             break;

        //                           case Kt.collectSkin:
        //                             t && t.shareTicket && hc(t, "CollectSkin");
        //                         }
        //                     }(n), e.fuid == Pa.uid && i === Kt.puzzleSkin && function(o) {
        //                         Object(Q.b)(this, void 0, void 0, function() {
        //                             var e, i, n, r;
        //                             return Object(Q.e)(this, function(t) {
        //                                 switch (t.label) {
        //                                   case 0:
        //                                     return Pa.getSkin(b) ? [ 2 ] : o && o.shareTicket ? (e = o.shareTicket, i = Number(o.query.timeStamp) / 1e3, 
        //                                     n = Math.floor(ie.curTime / 1e3), console.log(n, n - i), n - i >= $hostDef.puzzle_count_down_time ? (Sa("链接已经过期，请重新发送！"), 
        //                                     [ 2 ]) : [ 4, uc(e) ]) : [ 3, 2 ];

        //                                   case 1:
        //                                     return r = t.sent(), DEVELOP && console.log("openId:", r), function(t, e) {
        //                                         if (1 !== Pa.puzzleLinkRecord[t]) if (1 !== Pa.puzzleGroupRecord[e]) {
        //                                             Pa.puzzleLinkRecord[t] = 1, "" !== e && (Pa.puzzleGroupRecord[e] = 1), Object(l.setUserData)([ {
        //                                                 key: "puzzleLinkRecord",
        //                                                 value: JSON.stringify(Pa.puzzleLinkRecord)
        //                                             }, {
        //                                                 key: "puzzleGroupRecord",
        //                                                 value: JSON.stringify(Pa.puzzleGroupRecord)
        //                                             } ]);
        //                                             for (var i = [], n = 1; n <= 6; n++) i.push(n);
        //                                             if (0 < (i = i.filter(function(t) {
        //                                                 return -1 === Pa.puzzlePieces.indexOf(t);
        //                                             })).length) {
        //                                                 var r = E(i);
        //                                                 1 <= r && r <= 6 && -1 === Pa.puzzlePieces.indexOf(r) && (Pa.puzzlePieces.push(r), 
        //                                                 Sa("成功获得拼图碎片+1"));
        //                                             }
        //                                         } else Sa("不要频繁打扰同一个群，换个群试试看!"); else Sa("链接已经被你点击过咯，请重新发送！");
        //                                     }(i, r), [ 3, 3 ];

        //                                   case 2:
        //                                     Sa("请分享到群再试试哦!"), t.label = 3;

        //                                   case 3:
        //                                     return [ 2 ];
        //                                 }
        //                             });
        //                         });
        //                     }(n), e.fuid == Pa.uid && i === Kt.ticket && function(r, o) {
        //                         Object(Q.b)(this, void 0, void 0, function() {
        //                             var e, i, n;
        //                             return Object(Q.e)(this, function(t) {
        //                                 switch (t.label) {
        //                                   case 0:
        //                                     return DEVELOP && console.log("dealTurntableLink:", r), DEVELOP && console.log("shareTicket:", o), 
        //                                     r && o ? (e = Number(r.timeStamp), ie.curTime - e >= 1e3 * $hostDef.turntable_count_down_time ? ((i = O.findPanelByName("DialView")) && i.hideGroupTip(), 
        //                                     Sa("链接已经过期，请重新发送！", 2e3), [ 2 ]) : [ 4, uc(o) ]) : [ 3, 2 ];

        //                                   case 1:
        //                                     return n = t.sent(), DEVELOP && console.log("timestamp:", e), DEVELOP && console.log("openId:", n), 
        //                                     function(t, e) {
        //                                         if (Pa.dailyTicketGroupCount < dt.dailyMaxGroupTicket) {
        //                                             var i;
        //                                             if (Pa.ticketGroupRecord || (Pa.ticketGroupRecord = {}), Pa.ticketLinkRecord || (Pa.ticketLinkRecord = {}), 
        //                                             1 === Pa.ticketLinkRecord[t]) return (i = O.findPanelByName("DialView")) && i.hideGroupTip(), 
        //                                             Sa("链接已经被你点击过咯，请重新发送！");
        //                                             if (1 === Pa.ticketGroupRecord[e]) return (i = O.findPanelByName("DialView")) && i.hideGroupTip(), 
        //                                             Sa("不要频繁打扰同一个群，换个群试试看!");
        //                                             Pa.ticketLinkRecord[t] = 1, "" !== e && (Pa.ticketGroupRecord[e] = 1), Object(l.setUserData)([ {
        //                                                 key: "ticketLinkRecord",
        //                                                 value: JSON.stringify(Pa.ticketLinkRecord)
        //                                             }, {
        //                                                 key: "ticketGroupRecord",
        //                                                 value: JSON.stringify(Pa.ticketGroupRecord)
        //                                             } ]), Pa.ticket++, Pa.dailyTicketGroupCount++;
        //                                         }
        //                                     }(e, n), [ 3, 3 ];

        //                                   case 2:
        //                                     Ta("请分享到群再试试哦!"), t.label = 3;

        //                                   case 3:
        //                                     return [ 2 ];
        //                                 }
        //                             });
        //                         });
        //                     }(e, n.shareTicket)), [ 2 ];
        //                 });
        //             });
        //         }(t);
        //     });
        // }), wx.onHide(function(t) {
        //     Gt.isShow = !1, ac.endBeat(), DEVELOP && console.log("onHide:", t);
        // })



        // , wx.onError(function(t) {
        //     t && "gameThirdScriptError\nundefined\nundefined" === t.message || _a("提示", t.message ? String(t.message) : String(t));
        // }), wx.onMemoryWarning && wx.onMemoryWarning(function(t) {
        //     console.warn("warning:", t), wx.triggerGC();
        // });
    }
    function uc(r) {
        return Object(Q.b)(this, void 0, void 0, function () {
            var e, i, n;
            return Object(Q.e)(this, function (t) {
                switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]), [4, function (i) {
                            return new Promise(function (t, e) {
                                wx.getShareInfo({
                                    shareTicket: i,
                                    success: t,
                                    fail: function (t) {
                                        return e(t.errMsg);
                                    }
                                });
                            });
                        }(r)];

                    case 1:
                        return n = t.sent(), e = n.encryptedData, i = n.iv, [3, 3];

                    case 2:
                        return t.sent(), [2, ""];

                    case 3:
                        return [4, Object(l.getOpenGId)(e, i)];

                    case 4:
                        return [2, t.sent().openGId];
                }
            });
        });
    }
    function hc(t, e) {
        var i = t.query.fuid, n = {
            toUid: i,
            key: e,
            type: e,
            message: JSON.stringify({
                image: Pa.avatar,
                nick: Pa.nick,
                time: ie.curTime,
                type: 1
            })
        };
        -1 === Pa.pushUidList.indexOf(i) && Pa.pushUidList.push(i), Object(l.pushMessage)(n);
    }
    function lc() {
        return Object(Q.b)(this, void 0, void 0, function () {
            var e, i;
            return Object(Q.e)(this, function (t) {
                switch (t.label) {
                    case 0:
                        if (!Gt.isShow || Gt.isOffline) return [3, 6];
                        t.label = 1;

                    case 1:
                        return t.trys.push([1, 5, , 6]), [4, Object(l.getMessageCnt)({})];

                    case 2:
                        return 0 < (e = t.sent().cnt) ? [4, Object(l.getMessages)({})] : [3, 4];

                    case 3:
                        if (function (t) {
                            var e, i;
                            Object(l.delMessages)(t.map(function (t) {
                                return t.id;
                            }));
                            try {
                                for (var n = Object(Q.g)(t), r = n.next(); !r.done; r = n.next()) {
                                    var o = r.value;
                                    switch (o.type) {
                                        case "SyncGroupUserInfo":
                                            pc(o);
                                            break;

                                        case "FreeSkin":
                                            dc(o);
                                            break;

                                        case "CollectSkin":
                                            fc(o);
                                    }
                                }
                            } catch (t) {
                                e = {
                                    error: t
                                };
                            } finally {
                                try {
                                    r && !r.done && (i = n.return) && i.call(n);
                                } finally {
                                    if (e) throw e.error;
                                }
                            }
                        }(t.sent().messages), 20 < e) return lc(), [2];
                        t.label = 4;

                    case 4:
                        return [3, 6];

                    case 5:
                        return i = t.sent(), l.Logger.warn("pollMessage:", i && i.errMsg || i), [3, 6];

                    case 6:
                        return setTimeout(lc, 5e3), [2];
                }
            });
        });
    }
    function pc(t) {
        for (var e = t.fromUid, i = JSON.parse(t.message), n = 0, r = Pa.groupUserList.length; n < r; n++) {
            var o = Pa.groupUserList[n];
            if (o.uid === e) {
                o.image = i.image, o.nick = i.nick;
                break;
            }
        }
    }
    function dc(t) {
        var e = t.fromUid;
        if (0 === Pa.groupUserList.filter(function (t) {
            return t.uid === e;
        }).length) {
            var i = JSON.parse(t.message);
            Pa.groupUserList.push({
                uid: e,
                nick: i.nick,
                image: i.image,
                time: i.time,
                type: i.type
            });
        }
    }
    function fc(t) {
        if (!Pa.getSkin(w)) {
            var e = t.fromUid;
            if (0 === Pa.collectSkinInvites.filter(function (t) {
                return t.uid === e;
            }).length) {
                var i = JSON.parse(t.message);
                Pa.collectSkinInvites.push({
                    uid: e,
                    avatar: String(i.image)
                }), Pa.collectSkinInvites.length > _ && Pa.collectSkinInvites.shift();
            }
        }
    }
    var yc = function (r) {
        function t() {
            var t = r.call(this) || this;
            t.name = "OfflineGoldPopup", t.isTop = !0, t.gold = Pa.offlineGold, t.goldText.text = t.gold + " ";
            var e = bt.getDefById(Ht.offlineGold), i = e.initValue + e.valueGrow * Pa.propLevels[Ht.offlineGold], n = t.gold / i;
            return t.maxTip.visible = 110 < n, t.normalBtn.on(Laya.Event.CLICK, t, function () {
                return Object(Q.b)(t, void 0, void 0, function () {
                    return Object(Q.e)(this, function (t) {
                        return Object(l.sendAnalysis)("离线收益-普通领取"), this.getOfflineGold(!1), [2];
                    });
                });
            }), t.videoBtn.on(Laya.Event.CLICK, t, t.clickVideo), ce("双倍离线收益"), t;
        }
        return Object(Q.d)(t, r), t.prototype.clickVideo = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                var e, i = this;
                return Object(Q.e)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, Ke.play(Ei(Yt.offline))];

                        case 1:
                            return 0 === (e = t.sent()) ? (Sa("完整看完视频才能领取双倍离线收益"), [2]) : 2 === e ? ($hostDef.censor || !$hostDef.noVideoShare ? Sa("抱歉，当前没有视频可看") : (se("双倍离线收益"),
                                Mi(Kt.offlineGold, {
                                    shareCount: 0
                                }).then(function (t) {
                                    t && (ae("双倍离线收益"), i.getOfflineGold(!0));
                                })), [2]) : [4, this.getOfflineGold(!0)];

                        case 2:
                            return t.sent(), [2];
                    }
                });
            });
        }, t.prototype.getOfflineGold = function (t) {
            try {
                !function (t) {
                    var e = new Jt(), i = t ? 2 : 1, n = Pa.offlineGold;
                    0 < n && (e.addGold(i * n),
                        Laya.LocalStorage.setItem("goldgold", Number(Laya.LocalStorage.getItem("goldgold")) + n)
                        * i,
                        Pa.offlineGold = 0, Pa.lastHeartBeat = ie.curTime);
                }(t);
                var e = k.findPanel(function (t) {
                    return "StartView" == t.name;
                });
                if (e) {
                    var i = e.propList.goldText.localToGlobal(new Laya.Point(0, 0));
                    i.x /= va,
                        i.y /= va,
                        Ri(this.gold * (t ? 2 : 1), i.x, i.y);
                } else Ri(this.gold * (t ? 2 : 1), 50, 1e3);
                this.close();
            } catch (t) {
                !function (t, e) {
                    void 0 === e && (e = 1e3);
                    var i = "";
                    t && (i = "string" == typeof t ? t : t.errCode ? "number" == typeof t.errCode ? "错误码: " + t.errCode : "服务器错误: " + t.errCode : t.errMsg || String(t)),
                        DEVELOP && console.warn("showErrorFloat", t), new ga().show(i, e);
                }(t);
            }
        }, t.prototype.show = function () {
            var e = this;
            return r.prototype.show.call(this), zt(this.panel), new Promise(function (t) {
                e.resolve = t;
            });
        }, t.prototype.destroy = function (t) {
            r.prototype.destroy.call(this, t);
        }, t.prototype.close = function () {
            TWEEN.killTweensOf(this.panel), r.prototype.close.call(this), this.resolve && (this.resolve(),
                this.resolve = void 0);
        }, t;
    }(Rt.OfflineGoldPopupUI), vc = l.Logger.getLogger("配置");
    function gc() {
        return Object(Q.b)(this, void 0, void 0, function () {
            var e;
            return Object(Q.e)(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = window, [4, /**Object(l.getOperationConfig)()*/ Promise.resolve()];

                    case 1:
                        return e.$operation = {}, vc.log("$operation:", $operation), [2];
                }
            });
        });
    }
    var mc = l.Logger.getLogger("banner"), bc = 280, wc = .65;
    function _c() {
        return !(void 0 === wx.createBannerAd || !wx.createBannerAd) && (!(wc < d / f) && $hostDef.bannerAd);
    }
    var Sc, Tc = ["adunit-4eccb2e3439089eb", "adunit-eb832b2e91ce49ec"], xc = 0;
    function Lc() {
        _c() && (mc.info("---initBanners---"), Tc = function (t, e) {
            var i, n;
            void 0 === e && (e = I);
            for (var r = t.length; 1 < r;) i = Math.floor(e.next() * r--), n = t[r], t[r] = t[i],
                t[i] = n;
            return t;
        }(Tc), Object(m.h)(function () {
            var t = x.currentPanel;
            return t && ("SettingsView" === t.name || "RankView" === t.name || "FreeSkinView" === t.name || "LimitTimeSkinView" === t.name || "SignView" === t.name || "GameItemsView" === t.name) ? x.isInBattle ? "none" : "bottom" : "none";
        }, function (t) {
            switch (t) {
                case "bottom":
                    !function () {
                        if (!_c()) return;
                        DEVELOP && mc.info("showBanner");
                        Sc || function () {
                            if (!_c()) return;
                            Sc && (Sc.destroy(), Sc = void 0);
                            var t = Tc[xc];
                            ++xc >= Tc.length && (xc = 0);
                            var e = $hostDef.bannerScale || .8, i = bc / window.devicePixelRatio, n = wx.createBannerAd({
                                adUnitId: t,
                                adIntervals: 30,
                                style: {
                                    width: r * e,
                                    left: r * (1 - e) * .5,
                                    top: s - i
                                }
                            });
                            Sc = new kc(n, t), 0;
                        }();
                        if (Sc) Sc.show();
                    }();
                    break;

                case "none":
                    !function () {
                        if (!_c()) return;
                        DEVELOP && mc.info("hideBanner");
                        Sc && (Sc.destroy(), Sc = null);
                    }();
            }
        }));
    }
    var kc = function () {
        function t(t, e) {
            this.banner = t, this.adUnitId = e, this._isShow = !1, this._loaded = !1, this._destroyed = !1,
                this.isError = !1, DEVELOP && mc.info("banner create", this.adUnitId), this._errorBind = this.onBannerError.bind(this),
                this._resizeBind = this.onBannerResize.bind(this), this._loadedBind = this.onBannerLoaded.bind(this),
                this.banner.onError(this._errorBind), this.banner.onLoad(this._loadedBind), "function" == typeof t.onResize && this.banner.onResize(this._resizeBind);
        }
        return t.prototype.onBannerLoaded = function () {
            this._loaded = !0, this.banner && this._isShow && (DEVELOP && mc.info("banner onLoaded", this.adUnitId),
                this.banner.show());
        }, t.prototype.onBannerError = function (t) {
            DEVELOP && mc.info("banner error", t), this.isError = !0;
        }, t.prototype.onBannerResize = function (t) {
            var e = t.width, i = t.height;
            DEVELOP && mc.info("---banner.onResize---" + e + " , " + i), this.banner && (this.banner.style.left = (r - e) / 2,
                this.banner.style.top = s - i);
        }, t.prototype.show = function () {
            this._isShow = !0, this._loaded && this.banner.show();
        }, t.prototype.hide = function () {
            this._isShow = !1, this.banner.hide();
        }, Object.defineProperty(t.prototype, "destroyed", {
            get: function () {
                return this._destroyed;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.destroy = function () {
            this._destroyed = !0, this._isShow = !1, this.banner && (this.banner.offError(this._errorBind),
                this.banner.offResize(this._resizeBind), this.banner.offLoad(this._loadedBind),
                this.banner.hide(), this.banner.destroy(), this.banner = null), this._errorBind = null,
                this._resizeBind = null, this._loadedBind = null;
        }, t;
    }();
    function Oc() {
        return !wx.getStorageSync("isFirstLogin_" + $hostDef.api) && (wx.setStorageSync("isFirstLogin_" + $hostDef.api, !0),
            !0);
    }
    i.d(e, "isFirstLogin", function () {
        return Oc;
    }), new (function () {
        function t() {
            // console.info("VERSION: 1637913883"), 
            // De.init();

            var t = new Config3D();
            console.log("ttt", t)
            t.isAlpha = !1,
                t.isAntialias = !1,
                t.premultipliedAlpha = !0,
                Laya3D.init(750, 1334),
                // Laya.stage.useRetinalCanvas = !0
                Laya.stage.scaleMode = "showall",
                Laya.stage.alignV = "middle",
                Laya.stage.alignH = "center",
                // alert("屏幕："),
                Laya.stage.screenMode = "none";
            Laya.Text.defaultFont = "Arial";

            // ee.width = 750, ee.height = 1334, 
            // ee.scaleMode = "showall", ee.screenMode = "none",
            //     ee.alignV = "middle",
            //      ee.alignH = "center",
            //       ee.startScene = "views/login.scene",
            //     ee.sceneRoot = "",
            //      ee.debug = !1, 
            //      ee.stat = !1, 
            //     ee.physicsDebug = !1, 
            //     ee.exportSceneToJson = !0,





            window["showMetheAuthor"] = function () {
                const iframe = document.createElement("iframe");
                iframe.style.display = 'none';
                document.head.appendChild(iframe);
                const logger = iframe.contentWindow["console"];
                logger.log.apply(this, [
                    "%c %c %c YYGGAMES %c%s %c %c ",
                    "background: #fb8cb3",
                    "background: #d44a52",
                    "color: #ffffff; background: #871905",
                    "color: #ffffff;background: #871905;",
                    '116,104,101,32,103,97,109,101,32,105,115,32,112,111,119,101,114,101,100,32,98,121,32,121,121,103'
                        .split(",").map(iter => { return String.fromCharCode(~~iter) }).join(""),
                    "background: #d44a52",
                    "background: #fb8cb3"]);
            }


            // var i = Laya.MiniAdpter.getUrlEncode;
            // Laya.MiniAdpter.getUrlEncode = function(t, e) {
            //     return -1 !== t.indexOf(".json") ? "utf8" : i.apply(this, arguments);
            // }, 
            // htmlfs.saveui();
            Laya.URL.customFormat = function (t) {
                // console.log("ttttt", t)

                return t.startsWith("http") ? t : t.startsWith("res/") ? t : t.startsWith("dlc/") ? t : t.startsWith("wxfile:/") ? t : Ye(t);
            },
                Object(l.initClientLib)({
                    appId: o,
                    wxAppId: "wx7b967d7a2342e105",
                    user: Pa,
                    clientVersion: 1637913883
                }),
                cc(),
                function (t) {
                    if (Ge.log("policy: " + t), "function" == typeof wx.getUpdateManager) {
                        var e = wx.getUpdateManager();
                        switch (t) {
                            case "ask":
                                e.onUpdateReady(function () {
                                    wx.showModal({
                                        title: "可以更新了",
                                        content: "更新已经下载完毕",
                                        confirmText: "现在更新",
                                        showCancel: !0,
                                        cancelText: "下次再说",
                                        success: function (t) {
                                            t.confirm && e.applyUpdate();
                                        }
                                    });
                                });
                                break;

                            case "force":
                            default:
                                e.onCheckForUpdate(function (t) {
                                    t.hasUpdate ? (Ge.log("检查到更新可用"), wx.showLoading({
                                        title: "正在下载更新",
                                        mask: !0
                                    })) : Ge.log("当前已是最新版本");
                                }), e.onUpdateReady(function () {
                                    wx.hideLoading(), Ge.log("执行更新"), e.applyUpdate();
                                }), e.onUpdateFailed(function () {
                                    wx.hideLoading(), Ge.warn("更新下载失败");
                                });
                        }
                    } else Ge.warn("不支持 wx.getUpdateManager");
                }("ask"), rt(), function () {
                    Vt.regComponent("SkinItemView", Rs), Vt.regComponent("IconView", Bo), Vt.regComponent("SignItemView", Vs),
                        Vt.regComponent("SignSpecialItemView", Ns), Vt.regComponent("ScaleButton", Us),
                        Vt.regComponent("GiftBoxIcon", Gs), Vt.regComponent("FootBallIcon", zs), Vt.regComponent("GradListItem", Fs),
                        Vt.regComponent("BaseProgress", Hs), Vt.regComponent("MatchingIcon", Ys), Vt.regComponent("FreeSkinItem", Qs),
                        Vt.regComponent("OtherGameBtn", da), Vt.regComponent("OtherGameTaskItem", ea), Vt.regComponent("PropTabButton", fa),
                        Vt.regComponent("PropList", Go), Vt.regComponent("PropIcon", ya), Vt.regComponent("LimitTimeSkinItem", Gi),
                        aa = new Laya.Sprite(), Laya.stage.addChild(aa), ca = new Laya.Sprite(), Laya.stage.addChild(ca),
                        ua = new Laya.Sprite(), Laya.stage.addChild(ua), ha = new Laya.Sprite(), Laya.stage.addChild(ha),
                        la = new Laya.Sprite(), Laya.stage.addChild(la), (pa = new Laya.Sprite()).mouseEnabled = !1,
                        Laya.stage.addChild(pa);
                    var t = va = r * window.devicePixelRatio / d;
                    t = 1;
                    ca.scale(t, t), aa.scale(t, t), ua.scale(t, t), ha.scale(t, t), la.scale(t, t),
                        pa.scale(t, t), k.init(), k.setRoot(ca), O.init(), O.setRoot(ua);
                }()

            YYGGames.init("Super-Football-Fever", () => {
                //logo
                YYGGames.icon.scaleX = YYGGames.icon.scaleY = 0.7
                YYGGames.icon.top = 5
                YYGGames.icon.right = 5
                //logo 交叉推广
                YYGGames.gameBox.game1.visible = YYGGames.gameBox.game2.visible = false
                YYGGames.gameBox.game1.y = YYGGames.gameBox.game2.y = 1225
                YYGGames.gameBox.game1.x = 150
                YYGGames.gameBox.game2.x = 150
                YYGGames.gameBox.game2.x = 600
                YYGGames.gameBox.game1.visible = true
                YYGGames.gameBox.game2.visible = true
                //滚动条
                YYGGames.gameBanner.visible = false
                YYGGames.gameBanner.bottom = 10
                //加载游戏场景

                this.startLoad();
            });

            this.progressBar = new Laya.ProgressBar()
            this.progressBar.value = 0
            Laya.timer.loop(120, this, () => {
                if (this.progressBar.value >= 1)
                    // this.progressBar.value = 0,
                    Adapter.percent(100)
                else
                    this.progressBar.value += 0.01,
                        Adapter.percent(this.progressBar.value * 100)
            });





        }
        return t.prototype.startLoad = function () {
            return Object(Q.b)(this, void 0, void 0, function () {
                var n, r, e, i, o, s = this;
                return Object(Q.e)(this, function (t) {
                    console.log("进游戏2", t.label)
                    switch (t.label) {
                        case 0:
                            return (n = new Ha(8)).show(),
                                re("loading"),


                                console.log("进游戏3", n),
                                [4, n.withRetry(function () {
                                    return function (i) {
                                        return Object(Q.b)(this, void 0, void 0, function () {
                                            var e;
                                            return Object(Q.e)(this, function (t) {
                                                switch (t.label) {
                                                    case 0:
                                                        console.log("进游戏3")
                                                        return e = Date.now(),
                                                            window.$hostDef = {},
                                                            [4, Promise.resolve()


                                                                // Ue.getJSON("host.json").then(function (t) {
                                                                //     console.log("host.json",t)
                                                                //     var e = t.global, i = void 0 === e ? {} :
                                                                //         e, n = t.version,
                                                                //          r = void 0 === n ? {} 
                                                                //          : n, 
                                                                //          o = window.$hostDef = Object(Q.a)(Object(Q.a)({}, i), r[1637913883] || {});
                                                                //     l.Logger.log("host:", $hostDef),
                                                                //      window.DEVELOP = !0 === o.DEVELOP, DEVELOP
                                                                //      && console.log("DEVELOP:", DEVELOP),
                                                                //         $a = !0;
                                                                // }).catch(function (t) 
                                                                // {
                                                                //     l.Logger.warn("host.json 加载失败。", t), window.$hostDef = {
                                                                //         api: "api"
                                                                //     }, l.Logger.log("host:", $hostDef);
                                                                // })

                                                            ];

                                                    case 1:
                                                        return t.sent(), $hostDef.censor && ($hostDef.shareFloat = !1), $hostDef.videoAd && Ke.init(["adunit-c99504c8a3cc8b34", "adunit-e6f46e13831fd108", "adunit-c42f25d8699820ca"]),
                                                            $hostDef.bannerAd && Lc(), vi(), Object(l.sendSpecialEventImmediately)("#host", {
                                                                ut: Date.now() - e
                                                            }), i.finishStep("host"), [2];
                                                }
                                            });
                                        });
                                    }(n);
                                })];

                        case 1:
                            return t.sent(), null,
                                Object(l.initGameCenter),
                                // ("api" === $hostDef.api ? "https://game-center.i51game.com" : "https://game-center-test.i51game.com", 1065, sc), 

                                r = 0,
                                [4, n.withRetry(function () {
                                    return Object(Q.b)(s, void 0, void 0, function () {
                                        var e, i;
                                        return Object(Q.e)(this, function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    n.setTitle("正在登录..."), e = Date.now(), t.label = 1;

                                                case 1:
                                                    return t.trys.push([1, 4, , 5]), [4, Promise.resolve()];

                                                case 2:
                                                    return t.sent(), [4, function () {
                                                        return Object(Q.b)(this, void 0, void 0, function () {
                                                            var e, i, n;

                                                            return Object(Q.e)(this, function (t) {
                                                                console.log("t.label", t.label)
                                                                switch (t.label) {
                                                                    case 0:
                                                                        return rc.log("登录中..."), [4, Promise.resolve()];

                                                                    case 1:
                                                                        return t.sent() ? [3, 3] : (e = {}, [4, new Promise(function (e, i) {
                                                                            return e("123");
                                                                        })]);

                                                                    case 2:
                                                                        return i = t.sent(), Pa.createUser(i), re("登录游戏"), Pa.isNewPlayer && (fe("进入游戏新增用户"),
                                                                            e.fuid && fe("分享进入游戏新增用户")), [3, 5];

                                                                    case 3:
                                                                        return rc.log("Token 可用"), [4, Promise.resolve()];

                                                                    case 4:
                                                                        i = t.sent(), Pa.createUser(i), t.label = 5;

                                                                    case 5:
                                                                        return t.trys.push([5, 7, , 8]), [4, Promise.resolve()];

                                                                    case 6:
                                                                        return n = t.sent(),
                                                                            Pa.syncUserData(n.kvList),
                                                                            // rc.log("api/getUserData ok", n.kvList),
                                                                            [2, Promise.resolve()];

                                                                    case 7:
                                                                        return _a("获取数据出错", t.sent()), [2, []];

                                                                    case 8:
                                                                        return [2];
                                                                }
                                                            });
                                                        });
                                                    }()];

                                                case 3:
                                                    return t.sent(), n.finishStep("login"), Object(l.sendSpecialEventImmediately)("#login", {
                                                        ut: Date.now() - e,
                                                        re: r
                                                    }), [3, 5];

                                                case 4:
                                                    throw i = t.sent(), r += 1, i;

                                                case 5:
                                                    return [2];
                                            }
                                        });
                                    });
                                })];

                        case 2:
                            return t.sent(),
                                e = Date.now(),
                                [4, n.withRetry(function () {
                                    return Object(Q.b)(s, void 0, void 0, function () {
                                        return Object(Q.e)(this, function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    return n.setTitle("正在加载"), [4, function () {
                                                        return Object(Q.b)(this, void 0, void 0, function () {
                                                            return Object(Q.e)(this, function (t) {
                                                                return "function" != typeof wx.loadSubpackage ? [2, Promise.resolve()] : [2, new Promise(function (e, i) {
                                                                    wx.loadSubpackage({
                                                                        name: "dlc",
                                                                        success: function (t) {
                                                                            console.log("subPackage res:", t), e();
                                                                        },
                                                                        fail: function (t) {
                                                                            i(t);
                                                                        }
                                                                    });
                                                                })];
                                                            });
                                                        });
                                                    }()];

                                                case 1:
                                                    return t.sent(), n.finishStep("subPackage"), [2];
                                            }
                                        });
                                    });
                                })];

                        case 3:
                            return t.sent(),
                                [4, n.withRetry(function () {
                                    return Object(Q.b)(s, void 0, void 0, function () {
                                        return Object(Q.e)(this, function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    return n.setTitle("正在加载."), [4, Je.init()];

                                                case 1:
                                                    return t.sent(), n.finishStep("version"), [2];
                                            }
                                        });
                                    });
                                })];

                        case 4:
                            return t.sent(),
                                [4, n.withRetry(function () {
                                    return n.setTitle("正在加载.."),
                                        new Promise(function (e, i) {
                                            Laya.loader.load("configs/configs.json", Laya.Handler.create(null, function (t) {
                                                t ? (lt = new wt(t.grad), pt = new J(t.aiInfor), dt = new Tt(t.globalSet), ft = new xt(t.skin),
                                                    yt = new kt(t.skinLimit), vt = new It(t.daySign2), gt = new Bt(t.reward), mt = new At(t.turntable),
                                                    bt = new Ct(t.props, t.propEffect), e()) : i("load config fail");
                                            }), void 0, Laya.Loader.JSON);
                                        });
                                })];

                        case 5:
                            return t.sent(),
                                [4, n.withRetry(function () {
                                    return n.setTitle("正在加载.."), gc();
                                })];

                        case 6:
                            return t.sent(),
                                [4, n.withRetry(function () {
                                    return n.setTitle("正在加载..."), function (e) {
                                        return new Promise(function (t) {

                                            Laya.loader.load([{
                                                url: "ui/" + e + ".json",
                                                type: Laya.Loader.JSON
                                            }], Laya.Handler.create(null, function () {
                                                const tt = Laya.loader.getRes("ui/" + e + ".json");
                                                console.log("t", tt)
                                                t(tt);
                                            }));
                                        });
                                    }("ui").then(function (t) {
                                        Laya.View.uiMap = t, n.finishStep("ui-json");
                                    });
                                })];

                        case 7:
                            return t.sent(), [4, n.withRetry(function () {
                                return n.setTitle("正在加载...."), Qi("ui").then(function () {
                                    return n.finishStep("ui");
                                });
                            })];

                        case 8:
                            return t.sent(), [4, n.withRetry(function () {
                                return n.setTitle("正在加载....."), Qi("icon").then(function () {
                                    return n.finishStep("icon");
                                });
                            })];

                        case 9:
                            return t.sent(), Object(l.sendSpecialEventImmediately)("#res", {
                                ut: Date.now() - e
                            }), n.close(), tt && tt.postMessage({
                                type: "setRankKeySuffix",
                                key: ct()
                            }), Qr.initialize(), ri(), i = Pa.fightCount,
                                (false) ?
                                    Ps.startFight().catch(function (t) {
                                        Ps.reset(), _a("开始游戏出错:", t),
                                            new ds().show();
                                    }) :
                                    (re("进入首页",
                                        console.log("进入首页"), {
                                        // clientVersion: 1637913883,
                                        // wxVersion: B.version
                                    }), new ds().show())
                                ,
                                Na.forEach(function (t, e) {
                                    Date.now() - t > Ua() && !Pa.isNavigateRewarded(e) && Pa.setNavigated(e);
                                }), Na.clear(), Gt.gameInitialized = !0, ac.startBeat(), lc(), function () {
                                    if ($operation.interstitial) {
                                        var t = ["adunit-47d0e6600040bdd0", "adunit-cc6246f52f93e621", "adunit-658ebc488c4eb6fa"];
                                        Pa.interstitialNew ? Xe.init(t, {
                                            startLimit: $operation.interstitialStartLimitNew,
                                            minInterval: $operation.interstitialMinIntervalNew
                                        }) : $operation.interstitialOld && Xe.init(t, {
                                            startLimit: $operation.interstitialStartLimitOld,
                                            minInterval: $operation.interstitialMinIntervalOld
                                        });
                                    }
                                }(), Oc() || o || function () {
                                    Object(Q.b)(this, void 0, void 0, function () {
                                        var e, i;
                                        return Object(Q.e)(this, function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    return e = 0, Pa.checkOfflineGold(), (i = !Pa.isNewPlayer) && $hostDef.signPopUp && !$hostDef.censor && Pa.signLoginDay != Pa.signDay ? [4, new Ni().show()] : [3, 2];

                                                case 1:
                                                    t.sent(), e++, t.label = 2;

                                                case 2:
                                                    return i && 0 < Pa.offlineGold ? [4, new yc().show()] : [3, 4];

                                                case 3:
                                                    t.sent(), e++, t.label = 4;

                                                case 4:
                                                    return $hostDef.censor || !i ? [3, 8] : $hostDef.limitSkinPopUp && Ui() ? (e++,
                                                        [4, new Fi().show()]) : [3, 6];

                                                case 5:
                                                    t.sent(), t.label = 6;

                                                case 6:
                                                    return e < 2 && $hostDef.videoAd && $hostDef.turntablePopUp && (Pa.videoToTicket < dt.turntableVideoMax || 0 < Pa.ticket) ? [4, new Bi().show()] : [3, 8];

                                                case 7:
                                                    t.sent(), t.label = 8;

                                                case 8:
                                                    return [2];
                                            }
                                        });
                                    });
                                }(), [2];
                    }
                });
            });
        }, t;
    }())();
}]);