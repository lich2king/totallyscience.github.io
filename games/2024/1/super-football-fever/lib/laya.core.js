var Laya = window.Laya = function(t) {
    var e = {
        __internals: [],
        __packages: {},
        __classmap: {
            Object: Object,
            Function: Function,
            Array: Array,
            String: String
        },
        __sysClass: {
            object: "Object",
            array: "Array",
            string: "String",
            dictionary: "Dictionary"
        },
        __propun: {
            writable: !0,
            enumerable: !1,
            configurable: !0
        },
        __presubstr: String.prototype.substr,
        __substr: function(t, i) {
            return 1 == arguments.length ? e.__presubstr.call(this, t) : e.__presubstr.call(this, t, i > 0 ? i : this.length + i);
        },
        __init: function(t) {
            t.forEach(function(t) {
                t.__init$ && t.__init$();
            });
        },
        __isClass: function(t) {
            return t && (t.__isclass || t == Object || t == String || t == Array);
        },
        __newvec: function(t, e) {
            var i = [];
            i.length = t;
            for (var n = 0; t > n; n++) i[n] = e;
            return i;
        },
        __extend: function(t, i) {
            function n() {
                e.un(this, "constructor", t);
            }
            for (var s in i) if (i.hasOwnProperty(s)) {
                var r = Object.getOwnPropertyDescriptor(i, s), o = r.get, a = r.set;
                o || a ? o && a ? Object.defineProperty(t, s, r) : (o && Object.defineProperty(t, s, o), 
                a && Object.defineProperty(t, s, a)) : t[s] = i[s];
            }
            n.prototype = i.prototype, t.prototype = new n(), e.un(t.prototype, "__imps", e.__copy({}, i.prototype.__imps));
        },
        __copy: function(t, e) {
            if (!e) return null;
            t = t || {};
            for (var i in e) t[i] = e[i];
            return t;
        },
        __package: function(i, n) {
            if (!e.__packages[i]) {
                e.__packages[i] = !0;
                var s = t, r = i.split(".");
                if (r.length > 1) for (var o = 0, a = r.length - 1; a > o; o++) {
                    var h = s[r[o]];
                    s = h ? h : s[r[o]] = {};
                }
                s[r[r.length - 1]] || (s[r[r.length - 1]] = n || {});
            }
        },
        __hasOwnProperty: function(t, e) {
            function i(t, e) {
                if (Object.hasOwnProperty.call(e.prototype, t)) return !0;
                var n = e.prototype.__super;
                return null == n ? null : i(t, n);
            }
            return e = e || this, Object.hasOwnProperty.call(e, t) || i(t, e.__class);
        },
        __typeof: function(t, e) {
            if (!t || !e) return !1;
            if (e === String) return "string" == typeof t;
            if (e === Number) return "number" == typeof t;
            if (e.__interface__) e = e.__interface__; else if ("string" != typeof e) return t instanceof e;
            return t.__imps && t.__imps[e] || t.__class == e;
        },
        __as: function(t, e) {
            return this.__typeof(t, e) ? t : null;
        },
        __int: function(t) {
            return t ? parseInt(t) : 0;
        },
        interface: function(i, n) {
            e.__package(i, {});
            var s = e.__internals, r = s[i] = s[i] || {
                self: i
            };
            if (n) {
                var o = n.split(",");
                r.extend = [];
                for (var a = 0; a < o.length; a++) {
                    var h = o[a];
                    s[h] = s[h] || {
                        self: h
                    }, r.extend.push(s[h]);
                }
            }
            for (var l = t, u = i.split("."), a = 0; a < u.length - 1; a++) l = l[u[a]];
            l[u[u.length - 1]] = {
                __interface__: i
            };
        },
        class: function(i, n, s, r) {
            if (s && e.__extend(i, s), n) if (e.__package(n, i), e.__classmap[n] = i, n.indexOf(".") > 0) {
                if (0 == n.indexOf("laya.")) {
                    var o = n.split(".");
                    r = r || o[o.length - 1], e[r] && console.log("Warning!,this class[" + r + "] already exist:", e[r]), 
                    e[r] = i;
                }
            } else "Main" == n ? t.Main = i : (e[n] && console.log("Error!,this class[" + n + "] already exist:", e[n]), 
            e[n] = i);
            var a = e.un, h = i.prototype;
            a(h, "hasOwnProperty", e.__hasOwnProperty), a(h, "__class", i), a(h, "__super", s), 
            a(h, "__className", n), a(i, "__super", s), a(i, "__className", n), a(i, "__isclass", !0), 
            a(i, "super", function(t) {
                this.__super.call(t);
            });
        },
        imps: function(t, i) {
            function n(t) {
                var i, r;
                if ((i = e.__internals[t]) && (s[t] = !0, r = i.extend)) for (var o = 0; o < r.length; o++) n(r[o].self);
            }
            if (!i) return null;
            var s = t.__imps || e.un(t, "__imps", {});
            for (var r in i) n(r);
        },
        superSet: function(t, e, i, n) {
            var s = t.prototype["_$set_" + i];
            s && s.call(e, n);
        },
        superGet: function(t, e, i) {
            var n = t.prototype["_$get_" + i];
            return n ? n.call(e) : null;
        },
        getset: function(t, i, n, s, r) {
            t ? (s && (i["_$GET_" + n] = s), r && (i["_$SET_" + n] = r)) : (s && e.un(i, "_$get_" + n, s), 
            r && e.un(i, "_$set_" + n, r)), s && r ? Object.defineProperty(i, n, {
                get: s,
                set: r,
                enumerable: !1,
                configurable: !0
            }) : (s && Object.defineProperty(i, n, {
                get: s,
                enumerable: !1,
                configurable: !0
            }), r && Object.defineProperty(i, n, {
                set: r,
                enumerable: !1,
                configurable: !0
            }));
        },
        static: function(t, e) {
            function i() {
                var i = e[n], s = e[n + 1];
                Object.defineProperty(t, i, {
                    get: function() {
                        return delete this[i], this[i] = s.call(this);
                    },
                    set: function(t) {
                        delete this[i], this[i] = t;
                    },
                    enumerable: !0,
                    configurable: !0
                });
            }
            for (var n = 0, s = e.length; s > n; n += 2) "length" == e[n] ? t.length = e[n + 1].call(t) : i();
        },
        un: function(t, i, n) {
            return n || (n = t[i]), e.__propun.value = n, Object.defineProperty(t, i, e.__propun), 
            n;
        },
        uns: function(t, i) {
            i.forEach(function(i) {
                e.un(t, i);
            });
        }
    };
    return t.console = t.console || {
        log: function() {}
    }, t.trace = t.console.log, Error.prototype.throwError = function() {
        throw arguments;
    }, Object.defineProperty(Array.prototype, "fixed", {
        enumerable: !1
    }), e;
}(window, document);

!function(t, e, i) {
    i.un, i.uns, i.static, i.class, i.getset, i.__newvec;
}(window, document, Laya), function(t, e, i) {
    {
        var n = (i.un, i.uns, i.static), s = i.class, r = i.getset;
        i.__newvec;
    }
    i.interface("laya.runtime.IMarket"), i.interface("laya.filters.IFilter"), i.interface("laya.resource.IDispose"), 
    i.interface("laya.runtime.IPlatform"), i.interface("laya.resource.IDestroy"), i.interface("laya.runtime.ICPlatformClass"), 
    i.interface("laya.resource.ICreateResource"), i.interface("laya.runtime.IConchRenderObject"), 
    i.interface("laya.resource.ISingletonElement"), i.interface("laya.runtime.IPlatformClass", "IPlatform");
    var o = (function() {
        return r(1, i, "alertGlobalError", null, function(t) {
            var e = 0;
            I.window.onerror = t ? function(t, i, n, s, r) {
                e++ < 5 && r && alert("出错啦，请把此信息截图给研发商\n" + t + "\n" + r.stack);
            } : null;
        }), i.init = function(e, n) {
            for (var s = [], r = 2, o = arguments.length; o > r; r++) s.push(arguments[r]);
            if (!i._isinit) {
                i._isinit = !0, ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = i._arrayBufferSlice), 
                I.__init__(), fe.isConchApp || pe.__init__(), i.systemTimer = new ue(!1), i.startTimer = new ue(!1), 
                i.physicsTimer = new ue(!1), i.updateTimer = new ue(!1), i.lateTimer = new ue(!1), 
                i.timer = new ue(!1), i.loader = new ke(), Ce.__init__();
                for (var a = !1, r = 0, h = s.length; h > r; r++) s[r] && s[r].enable && (s[r].enable(), 
                "WebGL" == typeof s[r] && (a = !0));
                return fe.isConchApp && (a || laya.webgl.WebGL.enable(), re.enableNative()), g.beginCheck(), 
                i._currentStage = i.stage = new ti(), ne.rootPath = ne._basePath = i._getUrlPath(), 
                i.render = new fe(0, 0), i.stage.size(e, n), t.stage = i.stage, le.__init__(), De.__init__(), 
                Pe.instance.__init__(i.stage, fe.canvas), si.__init__(), oe.autoStopMusic = !0, 
                fe.canvas;
            }
        }, i._getUrlPath = function() {
            var t = I.window.location, e = t.pathname;
            return e = ":" == e.charAt(2) ? e.substring(1) : e, ne.getPath("file:" == t.protocol ? e : t.protocol + "//" + t.host + t.pathname);
        }, i._arrayBufferSlice = function(t, e) {
            var i = this, n = new Uint8Array(i, t, e - t), s = new Uint8Array(n.length);
            return s.set(n), s.buffer;
        }, i._runScript = function(t) {
            return I.window[i._evcode](t);
        }, i.enableDebugPanel = function(t) {
            if (void 0 === t && (t = "libs/laya.debugtool.js"), i.DebugPanel) i.DebugPanel.enable(); else {
                var e = I.createElement("script");
                e.onload = function() {
                    i.DebugPanel.enable();
                }, e.src = t, I.document.body.appendChild(e);
            }
        }, i.stage = null, i.systemTimer = null, i.startTimer = null, i.physicsTimer = null, 
        i.updateTimer = null, i.lateTimer = null, i.timer = null, i.loader = null, i.version = "2.0.2beta", 
        i.render = null, i._currentStage = null, i._isinit = !1, i.isWXOpenDataContext = !1, 
        i.isWXPosMsg = !1, n(i, [ "conchMarket", function() {
            return this.conchMarket = t.conch ? conchMarket : null;
        }, "PlatformClass", function() {
            return this.PlatformClass = t.PlatformClass;
        }, "_evcode", function() {
            return this._evcode = "eval";
        } ]), i;
    }(), function() {
        function t(e) {
            if (this.arrColor = [], null == e) return this.strColor = "#00000000", this.numColor = 0, 
            this.arrColor = [ 0, 0, 0, 0 ], void 0;
            var i = 0, n = 0, s = 0;
            if ("string" == typeof e) if (e.indexOf("rgba(") >= 0 || e.indexOf("rgb(") >= 0) {
                var r = e, o = 0, a = 0;
                for (o = r.indexOf("("), a = r.indexOf(")"), r = r.substring(o + 1, a), this.arrColor = r.split(","), 
                n = this.arrColor.length, i = 0; n > i; i++) this.arrColor[i] = parseFloat(this.arrColor[i]), 
                3 > i && (this.arrColor[i] = Math.round(this.arrColor[i]));
                s = 4 == this.arrColor.length ? 256 * (256 * (256 * this.arrColor[0] + this.arrColor[1]) + this.arrColor[2]) + Math.round(255 * this.arrColor[3]) : 256 * (256 * this.arrColor[0] + this.arrColor[1]) + this.arrColor[2], 
                this.strColor = e;
            } else {
                if (this.strColor = e, "#" === e.charAt(0) && (e = e.substr(1)), n = e.length, 3 === n || 4 === n) {
                    var h = "";
                    for (i = 0; n > i; i++) h += e[i] + e[i];
                    e = h;
                }
                s = parseInt(e, 16);
            } else s = e, this.strColor = x.toHexColor(s);
            this.strColor.indexOf("rgba") >= 0 || 9 === this.strColor.length ? (this.arrColor = [ ((4278190080 & s) >>> 24) / 255, ((16711680 & s) >> 16) / 255, ((65280 & s) >> 8) / 255, (255 & s) / 255 ], 
            this.numColor = (4278190080 & s) >>> 24 | (16711680 & s) >> 8 | (65280 & s) << 8 | (255 & s) << 24) : (this.arrColor = [ ((16711680 & s) >> 16) / 255, ((65280 & s) >> 8) / 255, (255 & s) / 255, 1 ], 
            this.numColor = 4278190080 | (16711680 & s) >> 16 | 65280 & s | (255 & s) << 16), 
            this.arrColor.__id = ++t._COLODID;
        }
        return s(t, "laya.utils.ColorUtils"), t._initDefault = function() {
            t._DEFAULT = {};
            for (var e in t._COLOR_MAP) t._SAVE[e] = t._DEFAULT[e] = new t(t._COLOR_MAP[e]);
            return t._DEFAULT;
        }, t._initSaveMap = function() {
            t._SAVE_SIZE = 0, t._SAVE = {};
            for (var e in t._DEFAULT) t._SAVE[e] = t._DEFAULT[e];
        }, t.create = function(e) {
            var i = e + "", n = t._SAVE[i];
            return null != n ? n : (t._SAVE_SIZE < 1e3 && t._initSaveMap(), t._SAVE[i] = new t(e));
        }, t._SAVE = {}, t._SAVE_SIZE = 0, t._COLOR_MAP = {
            purple: "#800080",
            orange: "#ffa500",
            white: "#FFFFFF",
            red: "#FF0000",
            green: "#00FF00",
            blue: "#0000FF",
            black: "#000000",
            yellow: "#FFFF00",
            gray: "#808080"
        }, t._DEFAULT = t._initDefault(), t._COLODID = 1, t;
    }()), a = function() {
        function t() {}
        return s(t, "laya.renders.LayaGLQuickRunner"), t.__init__ = function() {
            t.map[515] = t.alpha_transform_drawLayaGL, t.map[513] = t.alpha_drawLayaGL, t.map[514] = t.transform_drawLayaGL, 
            t.map[8194] = t.transform_drawNodes, t.map[259] = t.alpha_transform_drawTexture, 
            t.map[257] = t.alpha_drawTexture, t.map[258] = t.transform_drawTexture, t.map[8704] = t.drawLayaGL_drawNodes;
        }, t.transform_drawTexture = function(e, i, n, s) {
            var r = (e._style, e.texture);
            i.saveTransform(t.curMat), i.transformByMatrix(e.transform, n, s), i.drawTexture(r, -e.pivotX, -e.pivotY, e._width || r.width, e._height || r.height), 
            i.restoreTransform(t.curMat);
        }, t.alpha_drawTexture = function(t, e, i, n) {
            var s = t._style, r = 0 / 0, o = t.texture;
            if ((r = s.alpha) > .01 || t._needRepaint()) {
                var a = e.globalAlpha;
                e.globalAlpha *= r, e.drawTexture(o, i - s.pivotX + o.offsetX, n - s.pivotY + o.offsetY, t._width || o.width, t._height || o.height), 
                e.globalAlpha = a;
            }
        }, t.alpha_transform_drawTexture = function(e, i, n, s) {
            var r = e._style, o = 0 / 0, a = e.texture;
            if ((o = r.alpha) > .01 || e._needRepaint()) {
                var h = i.globalAlpha;
                i.globalAlpha *= o, i.saveTransform(t.curMat), i.transformByMatrix(e.transform, n, s), 
                i.drawTexture(a, -r.pivotX + a.offsetX, -r.pivotY + a.offsetY, e._width || a.width, e._height || a.height), 
                i.restoreTransform(t.curMat), i.globalAlpha = h;
            }
        }, t.alpha_transform_drawLayaGL = function(e, i, n, s) {
            var r = e._style, o = 0 / 0;
            if ((o = r.alpha) > .01 || e._needRepaint()) {
                var a = i.globalAlpha;
                i.globalAlpha *= o, i.saveTransform(t.curMat), i.transformByMatrix(e.transform, n, s), 
                e._graphics && e._graphics._render(e, i, -r.pivotX, -r.pivotY), i.restoreTransform(t.curMat), 
                i.globalAlpha = a;
            }
        }, t.alpha_drawLayaGL = function(t, e, i, n) {
            var s = t._style, r = 0 / 0;
            if ((r = s.alpha) > .01 || t._needRepaint()) {
                var o = e.globalAlpha;
                e.globalAlpha *= r, t._graphics && t._graphics._render(t, e, i - s.pivotX, n - s.pivotY), 
                e.globalAlpha = o;
            }
        }, t.transform_drawLayaGL = function(e, i, n, s) {
            var r = e._style;
            i.saveTransform(t.curMat), i.transformByMatrix(e.transform, n, s), e._graphics && e._graphics._render(e, i, -r.pivotX, -r.pivotY), 
            i.restoreTransform(t.curMat);
        }, t.transform_drawNodes = function(e, i, n, s) {
            var r = e._getBit(256) && i.drawCallOptimize(!0), o = e._style;
            i.saveTransform(t.curMat), i.transformByMatrix(e.transform, n, s), n = -o.pivotX, 
            s = -o.pivotY;
            var a, h = e._children, l = h.length;
            if (o.viewport) {
                var u = o.viewport, c = u.x, _ = u.y, d = u.right, f = u.bottom, p = 0 / 0, g = 0 / 0;
                for (m = 0; l > m; ++m) (a = h[m])._visible && (p = a._x) < d && p + a.width > c && (g = a._y) < f && g + a.height > _ && a.render(i, n, s);
            } else for (var m = 0; l > m; ++m) (a = h[m])._visible && a.render(i, n, s);
            i.restoreTransform(t.curMat), r && i.drawCallOptimize(!1);
        }, t.drawLayaGL_drawNodes = function(t, e, i, n) {
            var s = t._getBit(256) && e.drawCallOptimize(!0), r = t._style;
            i -= r.pivotX, n -= r.pivotY, t._graphics && t._graphics._render(t, e, i, n);
            var o, a = t._children, h = a.length;
            if (r.viewport) {
                var l = r.viewport, u = l.x, c = l.y, _ = l.right, d = l.bottom, f = 0 / 0, p = 0 / 0;
                for (g = 0; h > g; ++g) (o = a[g])._visible && (f = o._x) < _ && f + o.width > u && (p = o._y) < d && p + o.height > c && o.render(e, i, n);
            } else for (var g = 0; h > g; ++g) (o = a[g])._visible && o.render(e, i, n);
            s && e.drawCallOptimize(!1);
        }, t.map = {}, n(t, [ "curMat", function() {
            return this.curMat = new U();
        } ]), t;
    }(), h = function() {
        function t() {
            this.colorFlt = null;
        }
        s(t, "laya.display.cmd.DrawTextureCmd");
        var e = t.prototype;
        return e.recover = function() {
            this.texture._removeReference(), this.texture = null, this.matrix = null, ae.recover("DrawTextureCmd", this);
        }, e.run = function(t, e, i) {
            t.drawTextureWithTransform(this.texture, this.x, this.y, this.width, this.height, this.matrix, e, i, this.alpha, this.blendMode, this.colorFlt);
        }, r(0, e, "cmdID", function() {
            return "DrawTexture";
        }), t.create = function(e, i, n, s, r, o, a, h, l) {
            var u = ae.getItemByClass("DrawTextureCmd", t);
            return u.texture = e, e && e._addReference(), u.x = i, u.y = n, u.width = s, u.height = r, 
            u.matrix = o, u.alpha = a, u.color = h, u.blendMode = l, h && (u.colorFlt = new Xe(), 
            u.colorFlt.setColor(h)), u;
        }, t.ID = "DrawTexture", t;
    }(), l = function() {
        function t(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e;
        }
        s(t, "laya.maths.Point");
        var e = t.prototype;
        return e.setTo = function(t, e) {
            return this.x = t, this.y = e, this;
        }, e.reset = function() {
            return this.x = this.y = 0, this;
        }, e.recover = function() {
            ae.recover("Point", this.reset());
        }, e.distance = function(t, e) {
            return Math.sqrt((this.x - t) * (this.x - t) + (this.y - e) * (this.y - e));
        }, e.toString = function() {
            return this.x + "," + this.y;
        }, e.normalize = function() {
            var t = Math.sqrt(this.x * this.x + this.y * this.y);
            if (t > 0) {
                var e = 1 / t;
                this.x *= e, this.y *= e;
            }
        }, e.copy = function(t) {
            return this.setTo(t.x, t.y);
        }, t.create = function() {
            return ae.getItemByClass("Point", t);
        }, t.TEMP = new t(), t.EMPTY = new t(), t;
    }(), u = function() {
        function t() {
            this.data = null;
        }
        s(t, "laya.filters.ColorFilterAction");
        var e = t.prototype;
        return e.apply = function(t) {
            var e = t.canvas, i = e.context;
            if (0 == e.width || 0 == e.height) return e;
            for (var n, s = i.getImageData(0, 0, e.width, e.height), r = s.data, o = 0, a = r.length; a > o; o += 4) n = this.getColor(r[o], r[o + 1], r[o + 2], r[o + 3]), 
            0 != r[o + 3] && (r[o] = n[0], r[o + 1] = n[1], r[o + 2] = n[2], r[o + 3] = n[3]);
            return i.putImageData(s, 0, 0), t;
        }, e.getColor = function(t, e, i, n) {
            var s = [];
            if (this.data._mat && this.data._alpha) {
                var r = this.data._mat, o = this.data._alpha;
                s[0] = r[0] * t + r[1] * e + r[2] * i + r[3] * n + o[0], s[1] = r[4] * t + r[5] * e + r[6] * i + r[7] * n + o[1], 
                s[2] = r[8] * t + r[9] * e + r[10] * i + r[11] * n + o[2], s[3] = r[12] * t + r[13] * e + r[14] * i + r[15] * n + o[3];
            }
            return s;
        }, t;
    }(), c = function() {
        function t() {
            this._cacheBoundsType = !1;
        }
        s(t, "laya.display.GraphicsBounds");
        var e = t.prototype;
        return e.destroy = function() {
            this._graphics = null, this._cacheBoundsType = !1, this._temp && (this._temp.length = 0), 
            this._rstBoundPoints && (this._rstBoundPoints.length = 0), this._bounds && this._bounds.recover(), 
            this._bounds = null, ae.recover("GraphicsBounds", this);
        }, e.reset = function() {
            this._temp && (this._temp.length = 0);
        }, e.getBounds = function(t) {
            return void 0 === t && (t = !1), (!this._bounds || !this._temp || this._temp.length < 1 || t != this._cacheBoundsType) && (this._bounds = D._getWrapRec(this.getBoundPoints(t), this._bounds)), 
            this._cacheBoundsType = t, this._bounds;
        }, e.getBoundPoints = function(t) {
            return void 0 === t && (t = !1), (!this._temp || this._temp.length < 1 || t != this._cacheBoundsType) && (this._temp = this._getCmdPoints(t)), 
            this._cacheBoundsType = t, this._rstBoundPoints = x.copyArray(this._rstBoundPoints, this._temp);
        }, e._getCmdPoints = function(e) {
            void 0 === e && (e = !1);
            var i, n = (fe._context, this._graphics.cmds);
            if (i = this._temp || (this._temp = []), i.length = 0, n || null == this._graphics._one || (t._tempCmds.length = 0, 
            t._tempCmds.push(this._graphics._one), n = t._tempCmds), !n) return i;
            var s = t._tempMatrixArrays;
            s.length = 0;
            var r = t._initMatrix;
            r.identity();
            for (var o, a, h = t._tempMatrix, l = 0, u = n.length; u > l; l++) switch (o = n[l], 
            o.cmdID) {
              case "Alpha":
                s.push(r), r = r.clone();
                break;

              case "Restore":
                r = s.pop();
                break;

              case "Scale":
                h.identity(), h.translate(-o.pivotX, -o.pivotY), h.scale(o.scaleX, o.scaleY), h.translate(o.pivotX, o.pivotY), 
                this._switchMatrix(r, h);
                break;

              case "Rotate":
                h.identity(), h.translate(-o.pivotX, -o.pivotY), h.rotate(o.angle), h.translate(o.pivotX, o.pivotY), 
                this._switchMatrix(r, h);
                break;

              case "Translate":
                h.identity(), h.translate(o.tx, o.ty), this._switchMatrix(r, h);
                break;

              case "Transform":
                h.identity(), h.translate(-o.pivotX, -o.pivotY), h.concat(o.matrix), h.translate(o.pivotX, o.pivotY), 
                this._switchMatrix(r, h);
                break;

              case "DrawImage":
              case "FillTexture":
                t._addPointArrToRst(i, D._getBoundPointS(o.x, o.y, o.width, o.height), r);
                break;

              case "DrawTexture":
                r.copyTo(h), o.matrix && h.concat(o.matrix), t._addPointArrToRst(i, D._getBoundPointS(o.x, o.y, o.width, o.height), h);
                break;

              case "DrawImage":
                if (a = o.texture, e) o.width && o.height ? t._addPointArrToRst(i, D._getBoundPointS(o.x, o.y, o.width, o.height), r) : t._addPointArrToRst(i, D._getBoundPointS(o.x, o.y, a.width, a.height), r); else {
                    var c = (o.width || a.sourceWidth) / a.width, _ = (o.height || a.sourceHeight) / a.height, d = c * a.sourceWidth, f = _ * a.sourceHeight, p = a.offsetX > 0 ? a.offsetX : 0, g = a.offsetY > 0 ? a.offsetY : 0;
                    p *= c, g *= _, t._addPointArrToRst(i, D._getBoundPointS(o.x - p, o.y - g, d, f), r);
                }
                break;

              case "FillTexture":
                o.width && o.height ? t._addPointArrToRst(i, D._getBoundPointS(o.x, o.y, o.width, o.height), r) : (a = o.texture, 
                t._addPointArrToRst(i, D._getBoundPointS(o.x, o.y, a.width, a.height), r));
                break;

              case "DrawTexture":
                var m;
                o.matrix ? (r.copyTo(h), h.concat(o.matrix), m = h) : m = r, e ? o.width && o.height ? t._addPointArrToRst(i, D._getBoundPointS(o.x, o.y, o.width, o.height), m) : (a = o.texture, 
                t._addPointArrToRst(i, D._getBoundPointS(o.x, o.y, a.width, a.height), m)) : (a = o.texture, 
                c = (o.width || a.sourceWidth) / a.width, _ = (o.height || a.sourceHeight) / a.height, 
                d = c * a.sourceWidth, f = _ * a.sourceHeight, p = a.offsetX > 0 ? a.offsetX : 0, 
                g = a.offsetY > 0 ? a.offsetY : 0, p *= c, g *= _, t._addPointArrToRst(i, D._getBoundPointS(o.x - p, o.y - g, d, f), m));
                break;

              case "DrawRect":
                t._addPointArrToRst(i, D._getBoundPointS(o.x, o.y, o.width, o.height), r);
                break;

              case "DrawCircle":
                t._addPointArrToRst(i, D._getBoundPointS(o.x - o.radius, o.y - o.radius, o.radius + o.radius, o.radius + o.radius), r);
                break;

              case "DrawLine":
                t._tempPoints.length = 0;
                var v = 0 / 0;
                v = .5 * o.lineWidth, o.fromX == o.toX ? t._tempPoints.push(o.fromX + v, o.fromY, o.toX + v, o.toY, o.fromX - v, o.fromY, o.toX - v, o.toY) : o.fromY == o.toY ? t._tempPoints.push(o.fromX, o.fromY + v, o.toX, o.toY + v, o.fromX, o.fromY - v, o.toX, o.toY - v) : t._tempPoints.push(o.fromX, o.fromY, o.toX, o.toY), 
                t._addPointArrToRst(i, t._tempPoints, r);
                break;

              case "DrawCurves":
                t._addPointArrToRst(i, q.I.getBezierPoints(o.points), r, o.x, o.y);
                break;

              case "DrawLines":
              case "DrawPoly":
                t._addPointArrToRst(i, o.points, r, o.x, o.y);
                break;

              case "DrawPath":
                t._addPointArrToRst(i, this._getPathPoints(o.paths), r, o.x, o.y);
                break;

              case "DrawPie":
                t._addPointArrToRst(i, this._getPiePoints(o.x, o.y, o.radius, o.startAngle, o.endAngle), r);
            }
            return i.length > 200 ? i = x.copyArray(i, D._getWrapRec(i)._getBoundPoints()) : i.length > 8 && (i = ie.scanPList(i)), 
            i;
        }, e._switchMatrix = function(t, e) {
            e.concat(t), e.copyTo(t);
        }, e._getPiePoints = function(e, i, n, s, r) {
            var o = t._tempPoints;
            t._tempPoints.length = 0;
            var a = Math.PI / 180, h = r - s;
            if (h >= 360 || -360 >= h) return o.push(e - n, i - n), o.push(e + n, i - n), o.push(e + n, i + n), 
            o.push(e - n, i + n), o;
            o.push(e, i);
            var l = h % 360;
            0 > l && (l += 360);
            var u = s + l, c = s * a, _ = u * a;
            o.push(e + n * Math.cos(c), i + n * Math.sin(c)), o.push(e + n * Math.cos(_), i + n * Math.sin(_));
            for (var d = 90 * Math.ceil(s / 90), f = 90 * Math.floor(u / 90), p = d; f >= p; p += 90) {
                var g = p * a;
                o.push(e + n * Math.cos(g), i + n * Math.sin(g));
            }
            return o;
        }, e._getPathPoints = function(e) {
            var i = 0, n = 0, s = t._tempPoints;
            s.length = 0, n = e.length;
            var r;
            for (i = 0; n > i; i++) r = e[i], r.length > 1 && (s.push(r[1], r[2]), r.length > 3 && s.push(r[3], r[4]));
            return s;
        }, t.create = function() {
            return ae.getItemByClass("GraphicsBounds", t);
        }, t._addPointArrToRst = function(e, i, n, s, r) {
            void 0 === s && (s = 0), void 0 === r && (r = 0);
            var o = 0, a = 0;
            for (a = i.length, o = 0; a > o; o += 2) t._addPointToRst(e, i[o] + s, i[o + 1] + r, n);
        }, t._addPointToRst = function(t, e, i, n) {
            var s = l.TEMP;
            s.setTo(e ? e : 0, i ? i : 0), n.transformPoint(s), t.push(s.x, s.y);
        }, t._tempPoints = [], t._tempMatrixArrays = [], t._tempCmds = [], n(t, [ "_tempMatrix", function() {
            return this._tempMatrix = new U();
        }, "_initMatrix", function() {
            return this._initMatrix = new U();
        } ]), t;
    }(), _ = function() {
        function t() {
            this._$0__events = null;
        }
        var e;
        s(t, "laya.events.EventDispatcher");
        var i = t.prototype;
        return i.hasListener = function(t) {
            var e = this._$0__events && this._$0__events[t];
            return !!e;
        }, i.event = function(t, e) {
            if (!this._$0__events || !this._$0__events[t]) return !1;
            var i = this._$0__events[t];
            if (i.run) i.once && delete this._$0__events[t], null != e ? i.runWith(e) : i.run(); else {
                for (var n = 0, s = i.length; s > n; n++) {
                    var r = i[n];
                    r && (null != e ? r.runWith(e) : r.run()), (!r || r.once) && (i.splice(n, 1), n--, 
                    s--);
                }
                0 === i.length && this._$0__events && delete this._$0__events[t];
            }
            return !0;
        }, i.on = function(t, e, i, n) {
            return this._createListener(t, e, i, n, !1);
        }, i.once = function(t, e, i, n) {
            return this._createListener(t, e, i, n, !0);
        }, i._createListener = function(t, i, n, s, r, o) {
            void 0 === o && (o = !0), o && this.off(t, i, n, r);
            var a = e.create(i || this, n, s, r);
            this._$0__events || (this._$0__events = {});
            var h = this._$0__events;
            return h[t] ? h[t].run ? h[t] = [ h[t], a ] : h[t].push(a) : h[t] = a, this;
        }, i.off = function(t, e, i, n) {
            if (void 0 === n && (n = !1), !this._$0__events || !this._$0__events[t]) return this;
            var s = this._$0__events[t];
            if (null != s) if (s.run) e && s.caller !== e || null != i && s.method !== i || n && !s.once || (delete this._$0__events[t], 
            s.recover()); else {
                for (var r = 0, o = 0, a = s.length; a > o; o++) {
                    var h = s[o];
                    h ? !h || e && h.caller !== e || null != i && h.method !== i || n && !h.once || (r++, 
                    s[o] = null, h.recover()) : r++;
                }
                r === a && delete this._$0__events[t];
            }
            return this;
        }, i.offAll = function(t) {
            var e = this._$0__events;
            if (!e) return this;
            if (t) this._recoverHandlers(e[t]), delete e[t]; else {
                for (var i in e) this._recoverHandlers(e[i]);
                this._$0__events = null;
            }
            return this;
        }, i.offAllCaller = function(t) {
            if (t && this._$0__events) for (var e in this._$0__events) this.off(e, t, null);
            return this;
        }, i._recoverHandlers = function(t) {
            if (t) if (t.run) t.recover(); else for (var e = t.length - 1; e > -1; e--) t[e] && (t[e].recover(), 
            t[e] = null);
        }, i.isMouseEvent = function(e) {
            return t.MOUSE_EVENTS[e] || !1;
        }, t.MOUSE_EVENTS = {
            rightmousedown: !0,
            rightmouseup: !0,
            rightclick: !0,
            mousedown: !0,
            mouseup: !0,
            mousemove: !0,
            mouseover: !0,
            mouseout: !0,
            click: !0,
            doubleclick: !0
        }, t.__init$ = function() {
            Object.defineProperty(laya.events.EventDispatcher.prototype, "_events", {
                enumerable: !1,
                writable: !0
            }), e = function(t) {
                function e(t, i, n, s) {
                    e.__super.call(this, t, i, n, s);
                }
                s(e, "", t);
                var i = e.prototype;
                return i.recover = function() {
                    this._id > 0 && (this._id = 0, e._pool.push(this.clear()));
                }, e.create = function(t, i, n, s) {
                    return void 0 === s && (s = !0), e._pool.length ? e._pool.pop().setTo(t, i, n, s) : new e(t, i, n, s);
                }, e._pool = [], e;
            }(d);
        }, t;
    }(), d = function() {
        function t(t, e, i, n) {
            this.once = !1, this._id = 0, void 0 === n && (n = !1), this.setTo(t, e, i, n);
        }
        s(t, "laya.utils.Handler");
        var e = t.prototype;
        return e.setTo = function(e, i, n, s) {
            return this._id = t._gid++, this.caller = e, this.method = i, this.args = n, this.once = s, 
            this;
        }, e.run = function() {
            if (null == this.method) return null;
            var t = this._id, e = this.method.apply(this.caller, this.args);
            return this._id === t && this.once && this.recover(), e;
        }, e.runWith = function(t) {
            if (null == this.method) return null;
            var e = this._id;
            if (null == t) var i = this.method.apply(this.caller, this.args); else i = this.args || t.unshift ? this.args ? this.method.apply(this.caller, this.args.concat(t)) : this.method.apply(this.caller, t) : this.method.call(this.caller, t);
            return this._id === e && this.once && this.recover(), i;
        }, e.clear = function() {
            return this.caller = null, this.method = null, this.args = null, this;
        }, e.recover = function() {
            this._id > 0 && (this._id = 0, t._pool.push(this.clear()));
        }, t.create = function(e, i, n, s) {
            return void 0 === s && (s = !0), t._pool.length ? t._pool.pop().setTo(e, i, n, s) : new t(e, i, n, s);
        }, t._pool = [], t._gid = 1, t;
    }(), f = (function() {
        function t() {}
        return s(t, "laya.Const"), t.NOT_ACTIVE = 1, t.ACTIVE_INHIERARCHY = 2, t.AWAKED = 4, 
        t.NOT_READY = 8, t.DISPLAY = 16, t.HAS_ZORDER = 32, t.HAS_MOUSE = 64, t.DISPLAYED_INSTAGE = 128, 
        t.DRAWCALL_OPTIMIZE = 256, t;
    }(), function() {
        function t() {
            this._sp = null, this._one = null, this._cmds = null, this._vectorgraphArray = null, 
            this._graphicBounds = null, this.autoDestroy = !1, this._render = this._renderEmpty, 
            this._createData();
        }
        s(t, "laya.display.Graphics");
        var e = t.prototype;
        return e._createData = function() {}, e._clearData = function() {}, e._destroyData = function() {}, 
        e.destroy = function() {
            this.clear(!0), this._graphicBounds && this._graphicBounds.destroy(), this._graphicBounds = null, 
            this._vectorgraphArray = null, this._sp && (this._sp._renderType = 0, this._sp._setRenderType(0), 
            this._sp = null), this._destroyData();
        }, e.clear = function(t) {
            if (void 0 === t && (t = !0), t) {
                var e = this._one;
                if (this._cmds) {
                    var i = 0, n = this._cmds.length;
                    for (i = 0; n > i; i++) e = this._cmds[i], e.recover();
                    this._cmds.length = 0;
                } else e && e.recover();
            } else this._cmds = null;
            if (this._one = null, this._render = this._renderEmpty, this._clearData(), this._sp && (this._sp._renderType &= -513, 
            this._sp._setRenderType(this._sp._renderType)), this._repaint(), this._vectorgraphArray) {
                for (i = 0, n = this._vectorgraphArray.length; n > i; i++) L.getInstance().deleteShape(this._vectorgraphArray[i]);
                this._vectorgraphArray.length = 0;
            }
        }, e._clearBoundsCache = function() {
            this._graphicBounds && this._graphicBounds.reset();
        }, e._initGraphicBounds = function() {
            this._graphicBounds || (this._graphicBounds = c.create(), this._graphicBounds._graphics = this);
        }, e._repaint = function() {
            this._clearBoundsCache(), this._sp && this._sp.repaint();
        }, e._isOnlyOne = function() {
            return !this._cmds || 0 === this._cmds.length;
        }, e.getBounds = function(t) {
            return void 0 === t && (t = !1), this._initGraphicBounds(), this._graphicBounds.getBounds(t);
        }, e.getBoundPoints = function(t) {
            return void 0 === t && (t = !1), this._initGraphicBounds(), this._graphicBounds.getBoundPoints(t);
        }, e.drawImage = function(t, e, i, n, s) {
            if (void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === s && (s = 0), 
            !t) return null;
            if (n || (n = t.sourceWidth), s || (s = t.sourceHeight), t.getIsReady()) {
                var r = n / t.sourceWidth, o = s / t.sourceHeight;
                if (n = t.width * r, s = t.height * o, 0 >= n || 0 >= s) return null;
                e += t.offsetX * r, i += t.offsetY * o;
            }
            this._sp && (this._sp._renderType |= 512, this._sp._setRenderType(this._sp._renderType));
            var a = b.create.call(this, t, e, i, n, s);
            return null == this._one ? (this._one = a, this._render = this._renderOneImg) : this._saveToCmd(null, a), 
            this._repaint(), a;
        }, e.drawTexture = function(t, e, i, n, s, r, a, l, c) {
            if (void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === s && (s = 0), 
            void 0 === a && (a = 1), !t || .01 > a) return null;
            if (!t.getIsReady()) return null;
            if (n || (n = t.sourceWidth), s || (s = t.sourceHeight), t.getIsReady()) {
                var _ = !fe.isWebGL && (I.onFirefox || I.onEdge || I.onIE || I.onSafari) ? .5 : 0, d = n / t.sourceWidth, f = s / t.sourceHeight;
                if (n = t.width * d, s = t.height * f, 0 >= n || 0 >= s) return null;
                e += t.offsetX * d, i += t.offsetY * f, e -= _, i -= _, n += 2 * _, s += 2 * _;
            }
            if (this._sp && (this._sp._renderType |= 512, this._sp._setRenderType(this._sp._renderType)), 
            !fe.isWebGL && (c || l)) {
                var p = new qe();
                p.size(n, s);
                var g = p.getContext("2d");
                if (g.drawTexture(t, 0, 0, n, s), t = new Ue(p), l) {
                    var m = new u(), v = o.create(l).arrColor;
                    m.data = new Xe().color(255 * v[0], 255 * v[1], 255 * v[2]), m.apply({
                        canvas: p
                    });
                }
            }
            var y = h.create.call(this, t, e, i, n, s, r, a, l, c);
            return this._repaint(), this._saveToCmd(null, y);
        }, e.drawTextures = function(t, e) {
            return t ? this._saveToCmd(fe._context._drawTextures, me.create.call(this, t, e)) : null;
        }, e.drawTriangles = function(t, e, i, n, s, r, o, a, h, l) {
            return void 0 === a && (a = 1), this._saveToCmd(fe._context.drawTriangles, X.create.call(this, t, e, i, n, s, r, o, a, h, l));
        }, e.fillTexture = function(t, e, i, n, s, r, o) {
            return void 0 === n && (n = 0), void 0 === s && (s = 0), void 0 === r && (r = "repeat"), 
            t && t.getIsReady() ? this._saveToCmd(fe._context._fillTexture, _e.create.call(this, t, e, i, n, s, r, o || l.EMPTY, {})) : null;
        }, e._saveToCmd = function(t, e) {
            return this._sp && (this._sp._renderType |= 512, this._sp._setRenderType(this._sp._renderType)), 
            null == this._one ? (this._one = e, this._render = this._renderOne) : (this._render = this._renderAll, 
            0 === (this._cmds || (this._cmds = [])).length && this._cmds.push(this._one), this._cmds.push(e)), 
            this._repaint(), e;
        }, e.clipRect = function(t, e, i, n) {
            return this._saveToCmd(fe._context._clipRect, C.create.call(this, t, e, i, n));
        }, e.fillText = function(t, e, i, n, s, r) {
            return this._saveToCmd(fe._context._fillText, Te.create.call(this, t, e, i, n || Qe.defaultFontStr(), s, r));
        }, e.fillBorderText = function(t, e, i, n, s, r, o, a) {
            return this._saveToCmd(fe._context._fillBorderText, ce.create.call(this, t, e, i, n || Qe.defaultFontStr(), s, r, o, a));
        }, e.fillWords = function(t, e, i, n, s) {
            return this._saveToCmd(fe._context._fillWords, K.create.call(this, t, e, i, n || Qe.defaultFontStr(), s));
        }, e.fillBorderWords = function(t, e, i, n, s, r, o) {
            return this._saveToCmd(fe._context._fillBorderWords, de.create.call(this, t, e, i, n || Qe.defaultFontStr(), s, r, o));
        }, e.strokeText = function(t, e, i, n, s, r, o) {
            return this._saveToCmd(fe._context._strokeText, M.create.call(this, t, e, i, n || Qe.defaultFontStr(), s, r, o));
        }, e.alpha = function(t) {
            return this._saveToCmd(fe._context._alpha, P.create.call(this, t));
        }, e.transform = function(t, e, i) {
            return void 0 === e && (e = 0), void 0 === i && (i = 0), this._saveToCmd(fe._context._transform, $.create.call(this, t, e, i));
        }, e.rotate = function(t, e, i) {
            return void 0 === e && (e = 0), void 0 === i && (i = 0), this._saveToCmd(fe._context._rotate, R.create.call(this, t, e, i));
        }, e.scale = function(t, e, i, n) {
            return void 0 === i && (i = 0), void 0 === n && (n = 0), this._saveToCmd(fe._context._scale, A.create.call(this, t, e, i, n));
        }, e.translate = function(t, e) {
            return this._saveToCmd(fe._context._translate, ye.create.call(this, t, e));
        }, e.save = function() {
            return this._saveToCmd(fe._context._save, k.create.call(this));
        }, e.restore = function() {
            return this._saveToCmd(fe._context._restore, ee.create.call(this));
        }, e.replaceText = function(t) {
            this._repaint();
            var e = this._cmds;
            if (e) {
                for (var i = e.length - 1; i > -1; i--) if (this._isTextCmd(e[i])) return e[i].text = t, 
                !0;
            } else if (this._one && this._isTextCmd(this._one)) return this._one.text = t, !0;
            return !1;
        }, e._isTextCmd = function(t) {
            var e = t.cmdID;
            return "FillText" == e || "StrokeText" == e || "FillBorderText" == e;
        }, e.replaceTextColor = function(t) {
            this._repaint();
            var e = this._cmds;
            if (e) for (var i = e.length - 1; i > -1; i--) this._isTextCmd(e[i]) && this._setTextCmdColor(e[i], t); else this._one && this._isTextCmd(this._one) && this._setTextCmdColor(this._one, t);
        }, e._setTextCmdColor = function(t, e) {
            var i = t.cmdID;
            switch (i) {
              case "FillText":
              case "StrokeText":
                t.color = e;
                break;

              case "FillBorderText":
              case "FillBorderWords":
              case "FillBorderText":
                t.fillColor = e;
            }
        }, e.loadImage = function(t, e, i, n, s, r) {
            void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === s && (s = 0);
            var o = Ye.getRes(t);
            o ? o.getIsReady() ? this.drawImage(o, e, i, n, s) : o.once("ready", this, this.drawImage, [ o, e, i, n, s ]) : (o = new Ue(), 
            o.load(t), Ye.cacheRes(t, o), o.once("ready", this, this.drawImage, [ o, e, i, n, s ])), 
            null != r && (o.getIsReady() ? r.call(this._sp) : o.on("ready", this._sp, r));
        }, e._renderEmpty = function() {}, e._renderAll = function(t, e, i, n) {
            for (var s = this._cmds, r = 0, o = s.length; o > r; r++) s[r].run(e, i, n);
        }, e._renderOne = function(t, e, i, n) {
            this._one.run(e, i, n);
        }, e._renderOneImg = function(t, e, i, n) {
            this._one.run(e, i, n);
        }, e.drawLine = function(t, e, i, n, s, r) {
            void 0 === r && (r = 1);
            var o = 0;
            fe.isWebGL && (o = L.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), 
            this._vectorgraphArray.push(o));
            var a = 1 > r || r % 2 === 0 ? 0 : .5;
            return this._saveToCmd(fe._context._drawLine, W.create.call(this, t + a, e + a, i + a, n + a, s, r, o));
        }, e.drawLines = function(t, e, i, n, s) {
            void 0 === s && (s = 1);
            var r = 0;
            if (!i || i.length < 4) return null;
            fe.isWebGL && (r = L.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), 
            this._vectorgraphArray.push(r));
            var o = 1 > s || s % 2 === 0 ? 0 : .5;
            return this._saveToCmd(fe._context._drawLines, Le.create.call(this, t + o, e + o, i, n, s, r));
        }, e.drawCurves = function(t, e, i, n, s) {
            return void 0 === s && (s = 1), this._saveToCmd(fe._context._drawCurves, O.create.call(this, t, e, i, n, s));
        }, e.drawRect = function(t, e, i, n, s, r, o) {
            void 0 === o && (o = 1);
            var a = o >= 1 && r ? o / 2 : 0, h = r ? o : 0;
            return this._saveToCmd(fe._context.drawRect, B.create.call(this, t + a, e + a, i - h, n - h, s, r, o));
        }, e.drawCircle = function(t, e, i, n, s, r) {
            void 0 === r && (r = 1);
            var o = r >= 1 && s ? r / 2 : 0, a = 0;
            return fe.isWebGL && (a = L.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), 
            this._vectorgraphArray.push(a)), this._saveToCmd(fe._context._drawCircle, Ae.create.call(this, t, e, i - o, n, s, r, a));
        }, e.drawPie = function(t, e, i, n, s, r, o, a) {
            void 0 === a && (a = 1);
            var h = a >= 1 && o ? a / 2 : 0, l = o ? a : 0, u = 0;
            return fe.isWebGL && (u = L.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), 
            this._vectorgraphArray.push(u)), this._saveToCmd(fe._context._drawPie, j.create.call(this, t + h, e + h, i - l, x.toRadian(n), x.toRadian(s), r, o, a, u));
        }, e.drawPoly = function(t, e, i, n, s, r) {
            void 0 === r && (r = 1);
            var o = 0;
            if (fe.isWebGL) {
                o = L.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), 
                this._vectorgraphArray.push(o);
                var a = !1;
                a = i.length > 6 ? !1 : !0;
            }
            var h = r >= 1 && s ? r % 2 === 0 ? 0 : .5 : 0;
            return this._saveToCmd(fe._context._drawPoly, S.create.call(this, t + h, e + h, i, n, s, r, a, o));
        }, e.drawPath = function(t, e, i, n, s) {
            return this._saveToCmd(fe._context._drawPath, H.create.call(this, t, e, i, n, s));
        }, e.draw9Grid = function(t, e, i, n, s, r) {
            void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === s && (s = 0), 
            this._saveToCmd(null, p.create(t, e, i, n, s, r));
        }, r(0, e, "cmds", function() {
            return this._cmds;
        }, function(t) {
            this._sp && (this._sp._renderType |= 512, this._sp._setRenderType(this._sp._renderType)), 
            this._cmds = t, this._render = this._renderAll, this._repaint();
        }), t;
    }()), p = function() {
        function t() {}
        s(t, "laya.display.cmd.Draw9GridTexture");
        var e = t.prototype;
        return e.recover = function() {
            this.texture._removeReference(), ae.recover("Draw9GridTexture", this);
        }, e.run = function(t, e, i) {
            t.drawTextureWithSizeGrid(this.texture, this.x, this.y, this.width, this.height, this.sizeGrid, e, i);
        }, r(0, e, "cmdID", function() {
            return "Draw9GridTexture";
        }), t.create = function(e, i, n, s, r, o) {
            var a = ae.getItemByClass("Draw9GridTexture", t);
            return a.texture = e, e && e._addReference(), a.x = i, a.y = n, a.width = s, a.height = r, 
            a.sizeGrid = o, a;
        }, t.ID = "Draw9GridTexture", t;
    }(), g = function() {
        function t() {}
        return s(t, "laya.utils.CacheManger"), t.regCacheByFunction = function(e, i) {
            t.unRegCacheByFunction(e, i);
            var n;
            n = {
                tryDispose: e,
                getCacheList: i
            }, t._cacheList.push(n);
        }, t.unRegCacheByFunction = function(e, i) {
            var n = 0, s = 0;
            for (s = t._cacheList.length, n = 0; s > n; n++) if (t._cacheList[n].tryDispose == e && t._cacheList[n].getCacheList == i) return t._cacheList.splice(n, 1), 
            void 0;
        }, t.forceDispose = function() {
            var e = 0, i = t._cacheList.length;
            for (e = 0; i > e; e++) t._cacheList[e].tryDispose(!0);
        }, t.beginCheck = function(e) {
            void 0 === e && (e = 15e3), i.systemTimer.loop(e, null, t._checkLoop);
        }, t.stopCheck = function() {
            i.systemTimer.clear(null, t._checkLoop);
        }, t._checkLoop = function() {
            var e = t._cacheList;
            if (!(e.length < 1)) {
                var i = I.now(), n = 0, s = 0;
                for (s = n = e.length; n > 0 && (t._index++, t._index = t._index % s, e[t._index].tryDispose(!1), 
                !(I.now() - i > t.loopTimeLimit)); ) n--;
            }
        }, t.loopTimeLimit = 2, t._cacheList = [], t._index = 0, t;
    }(), m = function() {
        function t() {}
        s(t, "laya.events.Event");
        var e = t.prototype;
        return e.setTo = function(t, e, i) {
            return this.type = t, this.currentTarget = e, this.target = i, this;
        }, e.stopPropagation = function() {
            this._stoped = !0;
        }, r(0, e, "stageY", function() {
            return i.stage.mouseY;
        }), r(0, e, "charCode", function() {
            return this.nativeEvent.charCode;
        }), r(0, e, "touches", function() {
            if (!this.nativeEvent) return null;
            var t = this.nativeEvent.touches;
            if (t) for (var e = i.stage, n = 0, s = t.length; s > n; n++) {
                var r = t[n], o = l.TEMP;
                o.setTo(r.clientX, r.clientY), e._canvasTransform.invertTransformPoint(o), e.transform.invertTransformPoint(o), 
                r.stageX = o.x, r.stageY = o.y;
            }
            return t;
        }), r(0, e, "keyLocation", function() {
            return this.nativeEvent.location || this.nativeEvent.keyLocation;
        }), r(0, e, "ctrlKey", function() {
            return this.nativeEvent.ctrlKey;
        }), r(0, e, "altKey", function() {
            return this.nativeEvent.altKey;
        }), r(0, e, "shiftKey", function() {
            return this.nativeEvent.shiftKey;
        }), r(0, e, "stageX", function() {
            return i.stage.mouseX;
        }), t.EMPTY = new t(), t.MOUSE_DOWN = "mousedown", t.MOUSE_UP = "mouseup", t.CLICK = "click", 
        t.RIGHT_MOUSE_DOWN = "rightmousedown", t.RIGHT_MOUSE_UP = "rightmouseup", t.RIGHT_CLICK = "rightclick", 
        t.MOUSE_MOVE = "mousemove", t.MOUSE_OVER = "mouseover", t.MOUSE_OUT = "mouseout", 
        t.MOUSE_WHEEL = "mousewheel", t.ROLL_OVER = "mouseover", t.ROLL_OUT = "mouseout", 
        t.DOUBLE_CLICK = "doubleclick", t.CHANGE = "change", t.CHANGED = "changed", t.RESIZE = "resize", 
        t.ADDED = "added", t.REMOVED = "removed", t.DISPLAY = "display", t.UNDISPLAY = "undisplay", 
        t.ERROR = "error", t.COMPLETE = "complete", t.LOADED = "loaded", t.READY = "ready", 
        t.PROGRESS = "progress", t.INPUT = "input", t.RENDER = "render", t.OPEN = "open", 
        t.MESSAGE = "message", t.CLOSE = "close", t.KEY_DOWN = "keydown", t.KEY_PRESS = "keypress", 
        t.KEY_UP = "keyup", t.FRAME = "enterframe", t.DRAG_START = "dragstart", t.DRAG_MOVE = "dragmove", 
        t.DRAG_END = "dragend", t.ENTER = "enter", t.SELECT = "select", t.BLUR = "blur", 
        t.FOCUS = "focus", t.VISIBILITY_CHANGE = "visibilitychange", t.FOCUS_CHANGE = "focuschange", 
        t.PLAYED = "played", t.PAUSED = "paused", t.STOPPED = "stopped", t.START = "start", 
        t.END = "end", t.COMPONENT_ADDED = "componentadded", t.COMPONENT_REMOVED = "componentremoved", 
        t.RELEASED = "released", t.LINK = "link", t.LABEL = "label", t.FULL_SCREEN_CHANGE = "fullscreenchange", 
        t.DEVICE_LOST = "devicelost", t.TRANSFORM_CHANGED = "transformchanged", t.ANIMATION_CHANGED = "animationchanged", 
        t.TRAIL_FILTER_CHANGE = "trailfilterchange", t.TRIGGER_ENTER = "triggerenter", t.TRIGGER_STAY = "triggerstay", 
        t.TRIGGER_EXIT = "triggerexit", t;
    }(), v = (function() {
        function t() {}
        return s(t, "laya.display.SpriteConst"), t.POSRENDERTYPE = 0, t.POSBUFFERBEGIN = 1, 
        t.POSBUFFEREND = 2, t.POSFRAMECOUNT = 3, t.POSREPAINT = 4, t.POSVISIBLE_NATIVE = 5, 
        t.POSX = 6, t.POSY = 7, t.POSPIVOTX = 8, t.POSPIVOTY = 9, t.POSSCALEX = 10, t.POSSCALEY = 11, 
        t.POSSKEWX = 12, t.POSSKEWY = 13, t.POSROTATION = 14, t.POSTRANSFORM_FLAG = 15, 
        t.POSMATRIX = 16, t.POSCOLOR = 22, t.POSGRAPICS = 23, t.POSSIM_TEXTURE_ID = 24, 
        t.POSSIM_TEXTURE_DATA = 25, t.POSLAYAGL3D = 26, t.POSCUSTOM = 27, t.POSCLIP = 28, 
        t.POSCLIP_NEG_POS = 32, t.POSCOLORFILTER_COLOR = 34, t.POSCOLORFILTER_ALPHA = 50, 
        t.POSCALLBACK_OBJ_ID = 54, t.POSCUSTOM_CALLBACK_FUN_ID = 55, t.POSCANVAS_CALLBACK_FUN_ID = 56, 
        t.POSCANVAS_CALLBACK_END_FUN_ID = 57, t.POSCANVAS_BEGIN_CMD_ID = 58, t.POSCANVAS_END_CMD_ID = 59, 
        t.POSCANVAS_DRAW_TARGET_CMD_ID = 60, t.POSCANVAS_DRAW_TARGET_PARAM_ID = 61, t.POSLAYA3D_FUN_ID = 62, 
        t.POSCACHE_CANVAS_SKIP_PAINT_FLAG = 63, t.POSFILTER_BEGIN_CMD_ID = 64, t.POSFILTER_CALLBACK_FUN_ID = 65, 
        t.POSFILTER_END_CMD_ID = 66, t.POSFILTER_END_CALLBACK_FUN_ID = 67, t.POSGRAPHICS_CALLBACK_FUN_ID = 68, 
        t.POSMASK_CALLBACK_FUN_ID = 69, t.POSMASK_CMD_ID = 70, t.POSBLEND_SRC = 71, t.POSBLEND_DEST = 72, 
        t.POSSIM_RECT_FILL_CMD = 73, t.POSSIM_RECT_FILL_DATA = 74, t.POSSIM_RECT_STROKE_CMD = 75, 
        t.POSSIM_RECT_STROKE_DATA = 76, t.POSSIZE = 77, t.ALPHA = 1, t.TRANSFORM = 2, t.BLEND = 4, 
        t.CANVAS = 8, t.FILTERS = 16, t.MASK = 32, t.CLIP = 64, t.STYLE = 128, t.TEXTURE = 256, 
        t.GRAPHICS = 512, t.LAYAGL3D = 1024, t.CUSTOM = 2048, t.ONECHILD = 4096, t.CHILDS = 8192, 
        t.REPAINT_NONE = 0, t.REPAINT_NODE = 1, t.REPAINT_CACHE = 2, t.REPAINT_ALL = 3, 
        t;
    }(), function() {
        function t(t) {
            this._xd_ = !0, this._allocated_ = 8, this._pos_ = 0, this._length = 0, t ? (this._u8d_ = new Uint8Array(t), 
            this._d_ = new DataView(this._u8d_.buffer), this._length = this._d_.byteLength) : this._resizeBuffer(this._allocated_);
        }
        s(t, "laya.utils.Byte");
        var e = t.prototype;
        return e._resizeBuffer = function(t) {
            try {
                var e = new Uint8Array(t);
                null != this._u8d_ && (this._u8d_.length <= t ? e.set(this._u8d_) : e.set(this._u8d_.subarray(0, t))), 
                this._u8d_ = e, this._d_ = new DataView(e.buffer);
            } catch (i) {
                throw "Invalid typed array length:" + t;
            }
        }, e.getString = function() {
            return this.readString();
        }, e.readString = function() {
            return this._rUTF(this.getUint16());
        }, e.getFloat32Array = function(t, e) {
            return this.readFloat32Array(t, e);
        }, e.readFloat32Array = function(t, e) {
            var i = t + e;
            i = i > this._length ? this._length : i;
            var n = new Float32Array(this._d_.buffer.slice(t, i));
            return this._pos_ = i, n;
        }, e.getUint8Array = function(t, e) {
            return this.readUint8Array(t, e);
        }, e.readUint8Array = function(t, e) {
            var i = t + e;
            i = i > this._length ? this._length : i;
            var n = new Uint8Array(this._d_.buffer.slice(t, i));
            return this._pos_ = i, n;
        }, e.getInt16Array = function(t, e) {
            return this.readInt16Array(t, e);
        }, e.readInt16Array = function(t, e) {
            var i = t + e;
            i = i > this._length ? this._length : i;
            var n = new Int16Array(this._d_.buffer.slice(t, i));
            return this._pos_ = i, n;
        }, e.getFloat32 = function() {
            return this.readFloat32();
        }, e.readFloat32 = function() {
            if (this._pos_ + 4 > this._length) throw "getFloat32 error - Out of bounds";
            var t = this._d_.getFloat32(this._pos_, this._xd_);
            return this._pos_ += 4, t;
        }, e.getFloat64 = function() {
            return this.readFloat64();
        }, e.readFloat64 = function() {
            if (this._pos_ + 8 > this._length) throw "getFloat64 error - Out of bounds";
            var t = this._d_.getFloat64(this._pos_, this._xd_);
            return this._pos_ += 8, t;
        }, e.writeFloat32 = function(t) {
            this._ensureWrite(this._pos_ + 4), this._d_.setFloat32(this._pos_, t, this._xd_), 
            this._pos_ += 4;
        }, e.writeFloat64 = function(t) {
            this._ensureWrite(this._pos_ + 8), this._d_.setFloat64(this._pos_, t, this._xd_), 
            this._pos_ += 8;
        }, e.getInt32 = function() {
            return this.readInt32();
        }, e.readInt32 = function() {
            if (this._pos_ + 4 > this._length) throw "getInt32 error - Out of bounds";
            var t = this._d_.getInt32(this._pos_, this._xd_);
            return this._pos_ += 4, t;
        }, e.getUint32 = function() {
            return this.readUint32();
        }, e.readUint32 = function() {
            if (this._pos_ + 4 > this._length) throw "getUint32 error - Out of bounds";
            var t = this._d_.getUint32(this._pos_, this._xd_);
            return this._pos_ += 4, t;
        }, e.writeInt32 = function(t) {
            this._ensureWrite(this._pos_ + 4), this._d_.setInt32(this._pos_, t, this._xd_), 
            this._pos_ += 4;
        }, e.writeUint32 = function(t) {
            this._ensureWrite(this._pos_ + 4), this._d_.setUint32(this._pos_, t, this._xd_), 
            this._pos_ += 4;
        }, e.getInt16 = function() {
            return this.readInt16();
        }, e.readInt16 = function() {
            if (this._pos_ + 2 > this._length) throw "getInt16 error - Out of bounds";
            var t = this._d_.getInt16(this._pos_, this._xd_);
            return this._pos_ += 2, t;
        }, e.getUint16 = function() {
            return this.readUint16();
        }, e.readUint16 = function() {
            if (this._pos_ + 2 > this._length) throw "getUint16 error - Out of bounds";
            var t = this._d_.getUint16(this._pos_, this._xd_);
            return this._pos_ += 2, t;
        }, e.writeUint16 = function(t) {
            this._ensureWrite(this._pos_ + 2), this._d_.setUint16(this._pos_, t, this._xd_), 
            this._pos_ += 2;
        }, e.writeInt16 = function(t) {
            this._ensureWrite(this._pos_ + 2), this._d_.setInt16(this._pos_, t, this._xd_), 
            this._pos_ += 2;
        }, e.getUint8 = function() {
            return this.readUint8();
        }, e.readUint8 = function() {
            if (this._pos_ + 1 > this._length) throw "getUint8 error - Out of bounds";
            return this._u8d_[this._pos_++];
        }, e.writeUint8 = function(t) {
            this._ensureWrite(this._pos_ + 1), this._d_.setUint8(this._pos_, t), this._pos_++;
        }, e._getUInt8 = function(t) {
            return this._readUInt8(t);
        }, e._readUInt8 = function(t) {
            return this._d_.getUint8(t);
        }, e._getUint16 = function(t) {
            return this._readUint16(t);
        }, e._readUint16 = function(t) {
            return this._d_.getUint16(t, this._xd_);
        }, e._getMatrix = function() {
            return this._readMatrix();
        }, e._readMatrix = function() {
            var t = new U(this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32());
            return t;
        }, e._rUTF = function(t) {
            for (var e = "", i = this._pos_ + t, n = 0, s = 0, r = 0, o = String.fromCharCode, a = this._u8d_, h = 0; this._pos_ < i; ) n = a[this._pos_++], 
            128 > n ? 0 != n && (e += o(n)) : 224 > n ? e += o((63 & n) << 6 | 127 & a[this._pos_++]) : 240 > n ? (s = a[this._pos_++], 
            e += o((31 & n) << 12 | (127 & s) << 6 | 127 & a[this._pos_++])) : (s = a[this._pos_++], 
            r = a[this._pos_++], e += o((15 & n) << 18 | (127 & s) << 12 | r << 6 & 127 | 127 & a[this._pos_++])), 
            h++;
            return e;
        }, e.getCustomString = function(t) {
            return this.readCustomString(t);
        }, e.readCustomString = function(t) {
            for (var e = "", i = 0, n = 0, s = 0, r = String.fromCharCode, o = this._u8d_; t > 0; ) if (n = o[this._pos_], 
            128 > n) e += r(n), this._pos_++, t--; else for (i = n - 128, this._pos_++, t -= i; i > 0; ) n = o[this._pos_++], 
            s = o[this._pos_++], e += r(s << 8 | n), i--;
            return e;
        }, e.clear = function() {
            this._pos_ = 0, this.length = 0;
        }, e.__getBuffer = function() {
            return this._d_.buffer;
        }, e.writeUTFBytes = function(t) {
            t += "";
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t.charCodeAt(e);
                127 >= n ? this.writeByte(n) : 2047 >= n ? (this._ensureWrite(this._pos_ + 2), this._u8d_.set([ 192 | n >> 6, 128 | 63 & n ], this._pos_), 
                this._pos_ += 2) : 65535 >= n ? (this._ensureWrite(this._pos_ + 3), this._u8d_.set([ 224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n ], this._pos_), 
                this._pos_ += 3) : (this._ensureWrite(this._pos_ + 4), this._u8d_.set([ 240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n ], this._pos_), 
                this._pos_ += 4);
            }
        }, e.writeUTFString = function(t) {
            var e = this.pos;
            this.writeUint16(1), this.writeUTFBytes(t);
            var i = this.pos - e - 2;
            this._d_.setUint16(e, i, this._xd_);
        }, e.readUTFString = function() {
            return this.readUTFBytes(this.getUint16());
        }, e.getUTFString = function() {
            return this.readUTFString();
        }, e.readUTFBytes = function(t) {
            if (void 0 === t && (t = -1), 0 === t) return "";
            var e = this.bytesAvailable;
            if (t > e) throw "readUTFBytes error - Out of bounds";
            return t = t > 0 ? t : e, this._rUTF(t);
        }, e.getUTFBytes = function(t) {
            return void 0 === t && (t = -1), this.readUTFBytes(t);
        }, e.writeByte = function(t) {
            this._ensureWrite(this._pos_ + 1), this._d_.setInt8(this._pos_, t), this._pos_ += 1;
        }, e.readByte = function() {
            if (this._pos_ + 1 > this._length) throw "readByte error - Out of bounds";
            return this._d_.getInt8(this._pos_++);
        }, e.getByte = function() {
            return this.readByte();
        }, e._ensureWrite = function(t) {
            this._length < t && (this._length = t), this._allocated_ < t && (this.length = t);
        }, e.writeArrayBuffer = function(t, e, i) {
            if (void 0 === e && (e = 0), void 0 === i && (i = 0), 0 > e || 0 > i) throw "writeArrayBuffer error - Out of bounds";
            0 == i && (i = t.byteLength - e), this._ensureWrite(this._pos_ + i);
            var n = new Uint8Array(t);
            this._u8d_.set(n.subarray(e, e + i), this._pos_), this._pos_ += i;
        }, e.readArrayBuffer = function(t) {
            var e;
            return e = this._u8d_.buffer.slice(this._pos_, this._pos_ + t), this._pos_ = this._pos_ + t, 
            e;
        }, r(0, e, "buffer", function() {
            var t = this._d_.buffer;
            return t.byteLength === this._length ? t : t.slice(0, this._length);
        }), r(0, e, "endian", function() {
            return this._xd_ ? "littleEndian" : "bigEndian";
        }, function(t) {
            this._xd_ = "littleEndian" === t;
        }), r(0, e, "length", function() {
            return this._length;
        }, function(t) {
            this._allocated_ < t ? this._resizeBuffer(this._allocated_ = Math.floor(Math.max(t, 2 * this._allocated_))) : this._allocated_ > t && this._resizeBuffer(this._allocated_ = t), 
            this._length = t;
        }), r(0, e, "pos", function() {
            return this._pos_;
        }, function(t) {
            this._pos_ = t;
        }), r(0, e, "bytesAvailable", function() {
            return this._length - this._pos_;
        }), t.getSystemEndian = function() {
            if (!t._sysEndian) {
                var e = new ArrayBuffer(2);
                new DataView(e).setInt16(0, 256, !0), t._sysEndian = 256 === new Int16Array(e)[0] ? "littleEndian" : "bigEndian";
            }
            return t._sysEndian;
        }, t.BIG_ENDIAN = "bigEndian", t.LITTLE_ENDIAN = "littleEndian", t._sysEndian = null, 
        t;
    }()), y = function() {
        function t(e) {
            this._font = "14px Arial", this._family = "Arial", this._size = 14, this._italic = !1, 
            this._bold = !1, this._id = t._gfontID++, this.setFont(e || this._font);
        }
        s(t, "laya.utils.FontInfo");
        var e = t.prototype;
        return e.setFont = function(t) {
            this._font = t;
            var e = t.split(" "), i = e.length;
            if (2 > i) return 1 == i && e[0].indexOf("px") > 0 && (this._size = parseInt(e[0])), 
            void 0;
            for (var n = -1, s = 0; i > s; s++) if (e[s].indexOf("px") > 0 || e[s].indexOf("pt") > 0) {
                n = s, this._size = parseInt(e[s]), this._size <= 0 && (console.log("font parse error:" + t), 
                this._size = 14);
                break;
            }
            var r = n + 1, o = e[r];
            for (r++; i > r; r++) o += " " + e[r];
            this._family = o.split(",")[0], this._italic = e.indexOf("italic") >= 0, this._bold = e.indexOf("bold") >= 0;
        }, t.Parse = function(e) {
            if (e === t._lastFont) return t._lastFontInfo;
            var i = t._cache[e];
            return i || (i = t._cache[e] = new t(e)), t._lastFont = e, t._lastFontInfo = i, 
            i;
        }, t.EMPTY = new t(null), t._cache = {}, t._gfontID = 0, t._lastFont = "", t._lastFontInfo = null, 
        t;
    }(), x = (function() {
        function t() {}
        return s(t, "laya.utils.Mouse"), r(1, t, "cursor", function() {
            return t._style.cursor;
        }, function(e) {
            t._style.cursor = e;
        }), t.hide = function() {
            "none" != t.cursor && (t._preCursor = t.cursor, t.cursor = "none");
        }, t.show = function() {
            "none" == t.cursor && (t.cursor = t._preCursor ? t._preCursor : "auto");
        }, t._preCursor = null, n(t, [ "_style", function() {
            return this._style = I.document.body.style;
        } ]), t;
    }(), function() {
        function e() {}
        return s(e, "laya.utils.Utils"), e.toRadian = function(t) {
            return t * e._pi2;
        }, e.toAngle = function(t) {
            return t * e._pi;
        }, e.toHexColor = function(t) {
            if (0 > t || isNaN(t)) return null;
            for (var e = t.toString(16); e.length < 6; ) e = "0" + e;
            return "#" + e;
        }, e.getGID = function() {
            return e._gid++;
        }, e.concatArray = function(t, e) {
            if (!e) return t;
            if (!t) return e;
            var i = 0, n = e.length;
            for (i = 0; n > i; i++) t.push(e[i]);
            return t;
        }, e.clearArray = function(t) {
            return t ? (t.length = 0, t) : t;
        }, e.copyArray = function(t, e) {
            if (t || (t = []), !e) return t;
            t.length = e.length;
            var i = 0, n = e.length;
            for (i = 0; n > i; i++) t[i] = e[i];
            return t;
        }, e.getGlobalRecByPoints = function(t, e, i, n, s) {
            var r;
            r = l.create().setTo(e, i), r = t.localToGlobal(r);
            var o;
            o = l.create().setTo(n, s), o = t.localToGlobal(o);
            var a = D._getWrapRec([ r.x, r.y, o.x, o.y ]);
            return r.recover(), o.recover(), a;
        }, e.getGlobalPosAndScale = function(t) {
            return e.getGlobalRecByPoints(t, 0, 0, 1, 1);
        }, e.bind = function(t, e) {
            var i = t;
            return i = t.bind(e);
        }, e.measureText = function(t, e) {
            return re.measureText(t, e);
        }, e.updateOrder = function(t) {
            if (!t || t.length < 2) return !1;
            for (var e, i = 1, n = 0, s = t.length, r = 0 / 0; s > i; ) {
                for (n = i, e = t[n], r = t[n]._zOrder; --n > -1 && t[n]._zOrder > r; ) t[n + 1] = t[n];
                t[n + 1] = e, i++;
            }
            return !0;
        }, e.transPointList = function(t, e, i) {
            var n = 0, s = t.length;
            for (n = 0; s > n; n += 2) t[n] += e, t[n + 1] += i;
        }, e.parseInt = function(t, e) {
            void 0 === e && (e = 0);
            var i = I.window.parseInt(t, e);
            return isNaN(i) ? 0 : i;
        }, e.getFileExtension = function(t) {
            e._extReg.lastIndex = t.lastIndexOf(".");
            var i = e._extReg.exec(t);
            return i && i.length > 1 ? i[1].toLowerCase() : null;
        }, e.getTransformRelativeToWindow = function(t, e, n) {
            var s = i.stage, r = laya.utils.Utils.getGlobalPosAndScale(t), o = s._canvasTransform.clone(), a = o.tx, h = o.ty;
            o.rotate(-Math.PI / 180 * i.stage.canvasDegree), o.scale(i.stage.clientScaleX, i.stage.clientScaleY);
            var l = i.stage.canvasDegree % 180 != 0, u = 0 / 0, c = 0 / 0;
            l ? (u = n + r.y, c = e + r.x, u *= o.d, c *= o.a, 90 == i.stage.canvasDegree ? (u = a - u, 
            c += h) : (u += a, c = h - c)) : (u = e + r.x, c = n + r.y, u *= o.a, c *= o.d, 
            u += a, c += h), c += i.stage._safariOffsetY;
            var _ = 0 / 0, d = 0 / 0;
            return l ? (_ = o.d * r.height, d = o.a * r.width) : (_ = o.a * r.width, d = o.d * r.height), 
            {
                x: u,
                y: c,
                scaleX: _,
                scaleY: d
            };
        }, e.fitDOMElementInArea = function(t, n, s, r, o, a) {
            t._fitLayaAirInitialized || (t._fitLayaAirInitialized = !0, t.style.transformOrigin = t.style.webKittransformOrigin = "left top", 
            t.style.position = "absolute");
            var h = e.getTransformRelativeToWindow(n, s, r);
            t.style.transform = t.style.webkitTransform = "scale(" + h.scaleX + "," + h.scaleY + ") rotate(" + i.stage.canvasDegree + "deg)", 
            t.style.width = o + "px", t.style.height = a + "px", t.style.left = h.x + "px", 
            t.style.top = h.y + "px";
        }, e.isOkTextureList = function(t) {
            if (!t) return !1;
            var e, i = 0, n = t.length;
            for (i = 0; n > i; i++) if (e = t[i], !e || !e._getSource()) return !1;
            return !0;
        }, e.isOKCmdList = function(t) {
            if (!t) return !1;
            var e, i = 0, n = t.length;
            for (i = 0; n > i; i++) e = t[i];
            return !0;
        }, e.getQueryString = function(e) {
            if (I.onMiniGame) return null;
            if (!t.location || !t.location.search) return null;
            var i = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), n = t.location.search.substr(1).match(i);
            return null != n ? unescape(n[2]) : null;
        }, e._gid = 1, e._pi = 180 / Math.PI, e._pi2 = Math.PI / 180, e._extReg = /\.(\w+)\??/g, 
        e.parseXMLFromString = function(t) {
            var e;
            if (t = t.replace(/>\s+</g, "><"), e = new DOMParser().parseFromString(t, "text/xml"), 
            e.firstChild.textContent.indexOf("This page contains the following errors") > -1) throw new Error(e.firstChild.firstChild.textContent);
            return e;
        }, e;
    }()), w = function() {
        function t() {}
        return s(t, "laya.utils.Ease"), t.linearNone = function(t, e, i, n) {
            return i * t / n + e;
        }, t.linearIn = function(t, e, i, n) {
            return i * t / n + e;
        }, t.linearInOut = function(t, e, i, n) {
            return i * t / n + e;
        }, t.linearOut = function(t, e, i, n) {
            return i * t / n + e;
        }, t.bounceIn = function(e, i, n, s) {
            return n - t.bounceOut(s - e, 0, n, s) + i;
        }, t.bounceInOut = function(e, i, n, s) {
            return .5 * s > e ? .5 * t.bounceIn(2 * e, 0, n, s) + i : .5 * t.bounceOut(2 * e - s, 0, n, s) + .5 * n + i;
        }, t.bounceOut = function(t, e, i, n) {
            return (t /= n) < 1 / 2.75 ? 7.5625 * i * t * t + e : 2 / 2.75 > t ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : 2.5 / 2.75 > t ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e;
        }, t.backIn = function(t, e, i, n, s) {
            return void 0 === s && (s = 1.70158), i * (t /= n) * t * ((s + 1) * t - s) + e;
        }, t.backInOut = function(t, e, i, n, s) {
            return void 0 === s && (s = 1.70158), (t /= .5 * n) < 1 ? .5 * i * t * t * (((s *= 1.525) + 1) * t - s) + e : i / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + e;
        }, t.backOut = function(t, e, i, n, s) {
            return void 0 === s && (s = 1.70158), i * ((t = t / n - 1) * t * ((s + 1) * t + s) + 1) + e;
        }, t.elasticIn = function(e, i, n, s, r, o) {
            void 0 === r && (r = 0), void 0 === o && (o = 0);
            var a;
            return 0 == e ? i : 1 == (e /= s) ? i + n : (o || (o = .3 * s), !r || n > 0 && n > r || 0 > n && -n > r ? (r = n, 
            a = o / 4) : a = o / t.PI2 * Math.asin(n / r), -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * s - a) * t.PI2 / o)) + i);
        }, t.elasticInOut = function(e, i, n, s, r, o) {
            void 0 === r && (r = 0), void 0 === o && (o = 0);
            var a;
            return 0 == e ? i : 2 == (e /= .5 * s) ? i + n : (o || (o = .3 * s * 1.5), !r || n > 0 && n > r || 0 > n && -n > r ? (r = n, 
            a = o / 4) : a = o / t.PI2 * Math.asin(n / r), 1 > e ? -.5 * r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * s - a) * t.PI2 / o) + i : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * s - a) * t.PI2 / o) * .5 + n + i);
        }, t.elasticOut = function(e, i, n, s, r, o) {
            void 0 === r && (r = 0), void 0 === o && (o = 0);
            var a;
            return 0 == e ? i : 1 == (e /= s) ? i + n : (o || (o = .3 * s), !r || n > 0 && n > r || 0 > n && -n > r ? (r = n, 
            a = o / 4) : a = o / t.PI2 * Math.asin(n / r), r * Math.pow(2, -10 * e) * Math.sin((e * s - a) * t.PI2 / o) + n + i);
        }, t.strongIn = function(t, e, i, n) {
            return i * (t /= n) * t * t * t * t + e;
        }, t.strongInOut = function(t, e, i, n) {
            return (t /= .5 * n) < 1 ? .5 * i * t * t * t * t * t + e : .5 * i * ((t -= 2) * t * t * t * t + 2) + e;
        }, t.strongOut = function(t, e, i, n) {
            return i * ((t = t / n - 1) * t * t * t * t + 1) + e;
        }, t.sineInOut = function(t, e, i, n) {
            return .5 * -i * (Math.cos(Math.PI * t / n) - 1) + e;
        }, t.sineIn = function(e, i, n, s) {
            return -n * Math.cos(e / s * t.HALF_PI) + n + i;
        }, t.sineOut = function(e, i, n, s) {
            return n * Math.sin(e / s * t.HALF_PI) + i;
        }, t.quintIn = function(t, e, i, n) {
            return i * (t /= n) * t * t * t * t + e;
        }, t.quintInOut = function(t, e, i, n) {
            return (t /= .5 * n) < 1 ? .5 * i * t * t * t * t * t + e : .5 * i * ((t -= 2) * t * t * t * t + 2) + e;
        }, t.quintOut = function(t, e, i, n) {
            return i * ((t = t / n - 1) * t * t * t * t + 1) + e;
        }, t.quartIn = function(t, e, i, n) {
            return i * (t /= n) * t * t * t + e;
        }, t.quartInOut = function(t, e, i, n) {
            return (t /= .5 * n) < 1 ? .5 * i * t * t * t * t + e : .5 * -i * ((t -= 2) * t * t * t - 2) + e;
        }, t.quartOut = function(t, e, i, n) {
            return -i * ((t = t / n - 1) * t * t * t - 1) + e;
        }, t.cubicIn = function(t, e, i, n) {
            return i * (t /= n) * t * t + e;
        }, t.cubicInOut = function(t, e, i, n) {
            return (t /= .5 * n) < 1 ? .5 * i * t * t * t + e : .5 * i * ((t -= 2) * t * t + 2) + e;
        }, t.cubicOut = function(t, e, i, n) {
            return i * ((t = t / n - 1) * t * t + 1) + e;
        }, t.quadIn = function(t, e, i, n) {
            return i * (t /= n) * t + e;
        }, t.quadInOut = function(t, e, i, n) {
            return (t /= .5 * n) < 1 ? .5 * i * t * t + e : .5 * -i * (--t * (t - 2) - 1) + e;
        }, t.quadOut = function(t, e, i, n) {
            return -i * (t /= n) * (t - 2) + e;
        }, t.expoIn = function(t, e, i, n) {
            return 0 == t ? e : i * Math.pow(2, 10 * (t / n - 1)) + e - .001 * i;
        }, t.expoInOut = function(t, e, i, n) {
            return 0 == t ? e : t == n ? e + i : (t /= .5 * n) < 1 ? .5 * i * Math.pow(2, 10 * (t - 1)) + e : .5 * i * (-Math.pow(2, -10 * --t) + 2) + e;
        }, t.expoOut = function(t, e, i, n) {
            return t == n ? e + i : i * (-Math.pow(2, -10 * t / n) + 1) + e;
        }, t.circIn = function(t, e, i, n) {
            return -i * (Math.sqrt(1 - (t /= n) * t) - 1) + e;
        }, t.circInOut = function(t, e, i, n) {
            return (t /= .5 * n) < 1 ? .5 * -i * (Math.sqrt(1 - t * t) - 1) + e : .5 * i * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
        }, t.circOut = function(t, e, i, n) {
            return i * Math.sqrt(1 - (t = t / n - 1) * t) + e;
        }, t.HALF_PI = .5 * Math.PI, t.PI2 = 2 * Math.PI, t;
    }(), T = (function() {
        function t() {}
        return s(t, "laya.system.System"), t.changeDefinition = function(t, e) {
            i[t] = e;
            var n = t + "=classObj";
            i._runScript(n);
        }, t.__init__ = function() {}, t;
    }(), function() {
        function t() {
            this._action = null, this._glRender = null;
        }
        s(t, "laya.filters.Filter");
        var e = t.prototype;
        return i.imps(e, {
            "laya.filters.IFilter": !0
        }), r(0, e, "type", function() {
            return -1;
        }), t.BLUR = 16, t.COLOR = 32, t.GLOW = 8, t._filter = null, t._recycleScope = null, 
        t;
    }()), C = function() {
        function t() {}
        s(t, "laya.display.cmd.ClipRectCmd");
        var e = t.prototype;
        return e.recover = function() {
            ae.recover("ClipRectCmd", this);
        }, e.run = function(t, e, i) {
            t.clipRect(this.x + e, this.y + i, this.width, this.height);
        }, r(0, e, "cmdID", function() {
            return "ClipRect";
        }), t.create = function(e, i, n, s) {
            var r = ae.getItemByClass("ClipRectCmd", t);
            return r.x = e, r.y = i, r.width = n, r.height = s, r;
        }, t.ID = "ClipRect", t;
    }(), b = function() {
        function t() {}
        s(t, "laya.display.cmd.DrawImageCmd");
        var e = t.prototype;
        return e.recover = function() {
            this.texture._removeReference(), this.texture = null, ae.recover("DrawImageCmd", this);
        }, e.run = function(t, e, i) {
            t.drawTexture(this.texture, this.x + e, this.y + i, this.width, this.height);
        }, r(0, e, "cmdID", function() {
            return "DrawImage";
        }), t.create = function(e, i, n, s, r) {
            var o = ae.getItemByClass("DrawImageCmd", t);
            return o.texture = e, e && e._addReference(), o.x = i, o.y = n, o.width = s, o.height = r, 
            o;
        }, t.ID = "DrawImage", t;
    }(), S = function() {
        function t() {}
        s(t, "laya.display.cmd.DrawPolyCmd");
        var e = t.prototype;
        return e.recover = function() {
            this.points = null, this.fillColor = null, this.lineColor = null, ae.recover("DrawPolyCmd", this);
        }, e.run = function(t, e, i) {
            t._drawPoly(this.x + e, this.y + i, this.points, this.fillColor, this.lineColor, this.lineWidth, this.isConvexPolygon, this.vid);
        }, r(0, e, "cmdID", function() {
            return "DrawPoly";
        }), t.create = function(e, i, n, s, r, o, a, h) {
            var l = ae.getItemByClass("DrawPolyCmd", t);
            return l.x = e, l.y = i, l.points = n, l.fillColor = s, l.lineColor = r, l.lineWidth = o, 
            l.isConvexPolygon = a, l.vid = h, l;
        }, t.ID = "DrawPoly", t;
    }(), I = (function() {
        function t() {}
        return s(t, "laya.net.ResourceVersion"), t.enable = function(e, n, s) {
            void 0 === s && (s = 2), laya.net.ResourceVersion.type = s, i.loader.load(e, d.create(null, t.onManifestLoaded, [ n ]), null, "json"), 
            ne.customFormat = t.addVersionPrefix;
        }, t.onManifestLoaded = function(e, i) {
            t.manifest = i, e.run(), i || console.warn("资源版本清单文件不存在，不使用资源版本管理。忽略ERR_FILE_NOT_FOUND错误。");
        }, t.addVersionPrefix = function(e) {
            return e = ne.getAdptedFilePath(e), t.manifest && t.manifest[e] ? 2 == t.type ? t.manifest[e] : t.manifest[e] + "/" + e : e;
        }, t.FOLDER_VERSION = 1, t.FILENAME_VERSION = 2, t.manifest = null, t.type = 1, 
        t;
    }(), function() {
        function e() {}
        return s(e, "laya.utils.Browser"), 
        r(1, e, "pixelRatio", function() {
            if (e._pixelRatio < 0)
             if (e.__init__(), 
            e.userAgent.indexOf("Mozilla/6.0(Linux; Android 6.0; HUAWEI NXT-AL10 Build/HUAWEINXT-AL10)") > -1)
             e._pixelRatio = 2; 
             else {
                var t = e.context, 
                i = t.backingStorePixelRatio || 
                t.webkitBackingStorePixelRatio ||
                 t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio ||
                  t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
                e._pixelRatio = (e._window.devicePixelRatio || 1) / i, e._pixelRatio < 1 && (e._pixelRatio = 1);
            }
            return e._pixelRatio;
        }), r(1, e, "height", function() {
            return e.__init__(), (i.stage && i.stage.canvasRotation ? e.clientWidth : e.clientHeight) * e.pixelRatio;
        }), r(1, e, "clientWidth", function() {
            return e.__init__(), e._window.innerWidth || e._document.body.clientWidth;
        }), r(1, e, "window", function() {
            return e._window || e.__init__();
        }), r(1, e, "clientHeight", function() {
            return e.__init__(), e._window.innerHeight || e._document.body.clientHeight || e._document.documentElement.clientHeight;
        }), r(1, e, "width", function() {
            return e.__init__(), (i.stage && i.stage.canvasRotation ? e.clientHeight : e.clientWidth) * e.pixelRatio;
        }), r(1, e, "container", function() {
            return e._container || (e.__init__(), e._container = e.createElement("div"), e._container.id = "layaContainer", 
            e._document.body.appendChild(e._container)), e._container;
        }, function(t) {
            e._container = t;
        }), r(1, e, "document", function() {
            return e.__init__(), e._document;
        }), e.__init__ = function() {
            if (e._window) return e._window;
            var n = e._window = t, s = e._document = n.document, r = e.userAgent = n.navigator.userAgent, o = n._layalibs;
            if (o) {
                o.sort(function(t, e) {
                    return t.i > e.i;
                });
                for (var a = 0; a < o.length; a++) o[a].f(n, s, i);
            }
            r.indexOf("MiniGame") > -1 && e.window.hasOwnProperty("wx") && (i.MiniAdpter ? i.MiniAdpter.enable() : console.log("请先添加小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0")), 
            r.indexOf("SwanGame") > -1 && (i.BMiniAdapter ? i.BMiniAdapter.enable() : console.log("请先添加百度小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0")), 
            "function" == typeof getApp && (i.KGMiniAdapter ? i.KGMiniAdapter.enable() : console.log("请先添加小米小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0")), 
            r.indexOf("QGGame") > -1 && (i.QGMiniAdapter ? i.QGMiniAdapter.enable() : console.log("请先添加OPPO小游戏适配库")), 
            n.trace = console.log, n.requestAnimationFrame = n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || n.oRequestAnimationFrame || n.msRequestAnimationFrame || function(t) {
                return n.setTimeout(t, 1e3 / 60);
            };
            var h = s.body.style;
            h.margin = 0, h.overflow = "hidden", h["-webkit-user-select"] = "none", h["-webkit-tap-highlight-color"] = "rgba(200,200,200,0)";
            for (var l = s.getElementsByTagName("meta"), u = 0, c = !1, _ = "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"; u < l.length; ) {
                var d = l[u];
                if ("viewport" == d.name) {
                    d.content = _, c = !0;
                    break;
                }
                u++;
            }
            c || (d = s.createElement("meta"), d.name = "viewport", d.content = _, s.getElementsByTagName("head")[0].appendChild(d)), 
            e.onMobile = t.isConchApp ? !0 : r.indexOf("Mobile") > -1,
             e.onIOS = !!r.match(/\(i[^;]+;(U;)? CPU.+Mac OS X/), 

            e.onIPhone = r.indexOf("iPhone") > -1, e.onMac = r.indexOf("Mac OS X") > -1, e.onIPad = r.indexOf("iPad") > -1, 
            e.onAndroid = r.indexOf("Android") > -1 || r.indexOf("Adr") > -1, e.onWP = r.indexOf("Windows Phone") > -1, 
            e.onQQBrowser = r.indexOf("QQBrowser") > -1, e.onMQQBrowser = r.indexOf("MQQBrowser") > -1 || r.indexOf("Mobile") > -1 && r.indexOf("QQ") > -1, 
            e.onIE = !!n.ActiveXObject || "ActiveXObject" in n, e.onWeiXin = r.indexOf("MicroMessenger") > -1, 
            e.onSafari = r.indexOf("Safari") > -1, e.onPC = !e.onMobile, e.onMiniGame = r.indexOf("MiniGame") > -1, 
            e.onBDMiniGame = r.indexOf("SwanGame") > -1, e.onQGMiniGame = r.indexOf("QGGame") > -1, 
            e.onLimixiu = r.indexOf("limixiu") > -1, e.onKGMiniGame = r.indexOf("QuickGame") > -1, 
            e.supportLocalStorage = we.__init__(), e.supportWebAudio = oe.__init__(), fe._mainCanvas = new qe(!0);
            var f = fe._mainCanvas.source.style;
            f.position = "absolute", f.top = f.left = "0px", f.background = "#000000", e.canvas = new qe(!0), 
            e.context = e.canvas.getContext("2d");
            var p = new qe(!0);
            laya.utils.Browser.onQGMiniGame && (p = fe._mainCanvas);
            var g = [ "webgl", "experimental-webgl", "webkit-3d", "moz-webgl" ], m = null;
            for (u = 0; u < g.length; u++) {
                try {
                    m = p.source.getContext(g[u]);
                } catch (v) {}
                if (m) {
                    e._supportWebGL = !0;
                    break;
                }
            }
            return n;
        }, e.createElement = function(t) {
            return e.__init__(), e._document.createElement(t);
        }, e.getElementById = function(t) {
            return e.__init__(), e._document.getElementById(t);
        }, e.removeElement = function(t) {
            t && t.parentNode && t.parentNode.removeChild(t);
        }, e.now = function() {
            return Date.now();
        }, e.userAgent = null, e.onMobile = !1, e.onIOS = !1, e.onMac = !1, e.onIPhone = !1, 
        e.onIPad = !1, e.onAndroid = !1, e.onWP = !1, e.onQQBrowser = !1, e.onMQQBrowser = !1, 
        e.onSafari = !1, e.onIE = !1, e.onWeiXin = !1, e.onPC = !1, e.onMiniGame = !1, e.onBDMiniGame = !1, 
        e.onKGMiniGame = !1, e.onQGMiniGame = !1, e.onLimixiu = !1, e.onFirefox = !1, e.onEdge = !1, 
        e.supportWebAudio = !1, e.supportLocalStorage = !1, e.canvas = null, e.context = null, 
        e._window = null, e._document = null, e._container = null, e._pixelRatio = -1, e._supportWebGL = !1, 
        e;
    }()), M = function() {
        function t() {}
        s(t, "laya.display.cmd.StrokeTextCmd");
        var e = t.prototype;
        return e.recover = function() {
            ae.recover("StrokeTextCmd", this);
        }, e.run = function(t, e, i) {
            t.strokeWord(this.text, this.x + e, this.y + i, this.font, this.color, this.lineWidth, this.textAlign);
        }, r(0, e, "cmdID", function() {
            return "StrokeText";
        }), t.create = function(e, i, n, s, r, o, a) {
            var h = ae.getItemByClass("StrokeTextCmd", t);
            return h.text = e, h.x = i, h.y = n, h.font = s, h.color = r, h.lineWidth = o, h.textAlign = a, 
            h;
        }, t.ID = "StrokeText", t;
    }(), D = function() {
        function t(t, e, i, n) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), 
            this.x = t, this.y = e, this.width = i, this.height = n;
        }
        s(t, "laya.maths.Rectangle");
        var e = t.prototype;
        return e.setTo = function(t, e, i, n) {
            return this.x = t, this.y = e, this.width = i, this.height = n, this;
        }, e.reset = function() {
            return this.x = this.y = this.width = this.height = 0, this;
        }, e.recover = function() {
            return this == t.TEMP || this == t.EMPTY ? (console.log("recover Temp or Empty:", this), 
            void 0) : (ae.recover("Rectangle", this.reset()), void 0);
        }, e.copyFrom = function(t) {
            return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, 
            this;
        }, e.contains = function(t, e) {
            return this.width <= 0 || this.height <= 0 ? !1 : t >= this.x && t < this.right && e >= this.y && e < this.bottom ? !0 : !1;
        }, e.intersects = function(t) {
            return !(t.x > this.x + this.width || t.x + t.width < this.x || t.y > this.y + this.height || t.y + t.height < this.y);
        }, e.intersection = function(e, i) {
            return this.intersects(e) ? (i || (i = new t()), i.x = Math.max(this.x, e.x), i.y = Math.max(this.y, e.y), 
            i.width = Math.min(this.right, e.right) - i.x, i.height = Math.min(this.bottom, e.bottom) - i.y, 
            i) : null;
        }, e.union = function(e, i) {
            return i || (i = new t()), this.clone(i), e.width <= 0 || e.height <= 0 ? i : (i.addPoint(e.x, e.y), 
            i.addPoint(e.right, e.bottom), this);
        }, e.clone = function(e) {
            return e || (e = new t()), e.x = this.x, e.y = this.y, e.width = this.width, e.height = this.height, 
            e;
        }, e.toString = function() {
            return this.x + "," + this.y + "," + this.width + "," + this.height;
        }, e.equals = function(t) {
            return t && t.x === this.x && t.y === this.y && t.width === this.width && t.height === this.height ? !0 : !1;
        }, e.addPoint = function(t, e) {
            return this.x > t && (this.width += this.x - t, this.x = t), this.y > e && (this.height += this.y - e, 
            this.y = e), this.width < t - this.x && (this.width = t - this.x), this.height < e - this.y && (this.height = e - this.y), 
            this;
        }, e._getBoundPoints = function() {
            var e = t._temB;
            return e.length = 0, 0 == this.width || 0 == this.height ? e : (e.push(this.x, this.y, this.x + this.width, this.y, this.x, this.y + this.height, this.x + this.width, this.y + this.height), 
            e);
        }, e.isEmpty = function() {
            return this.width <= 0 || this.height <= 0 ? !0 : !1;
        }, r(0, e, "right", function() {
            return this.x + this.width;
        }), r(0, e, "bottom", function() {
            return this.y + this.height;
        }), t.create = function() {
            return ae.getItemByClass("Rectangle", t);
        }, t._getBoundPointS = function(e, i, n, s) {
            var r = t._temA;
            return r.length = 0, 0 == n || 0 == s ? r : (r.push(e, i, e + n, i, e, i + s, e + n, i + s), 
            r);
        }, t._getWrapRec = function(e, i) {
            if (!e || e.length < 1) return i ? i.setTo(0, 0, 0, 0) : t.TEMP.setTo(0, 0, 0, 0);
            i = i ? i : laya.maths.Rectangle.create();
            var n, s, r, o, a, h = e.length, u = l.TEMP;
            for (s = o = 99999, r = a = -s, n = 0; h > n; n += 2) u.x = e[n], u.y = e[n + 1], 
            s = s < u.x ? s : u.x, o = o < u.y ? o : u.y, r = r > u.x ? r : u.x, a = a > u.y ? a : u.y;
            return i.setTo(s, o, r - s, a - o);
        }, t.EMPTY = new t(), t.TEMP = new t(), t._temB = [], t._temA = [], t;
    }(), A = function() {
        function t() {}
        s(t, "laya.display.cmd.ScaleCmd");
        var e = t.prototype;
        return e.recover = function() {
            ae.recover("ScaleCmd", this);
        }, e.run = function(t, e, i) {
            t._scale(this.scaleX, this.scaleY, this.pivotX + e, this.pivotY + i);
        }, r(0, e, "cmdID", function() {
            return "Scale";
        }), t.create = function(e, i, n, s) {
            var r = ae.getItemByClass("ScaleCmd", t);
            return r.scaleX = e, r.scaleY = i, r.pivotX = n, r.pivotY = s, r;
        }, t.ID = "Scale", t;
    }(), P = function() {
        function t() {}
        s(t, "laya.display.cmd.AlphaCmd");
        var e = t.prototype;
        return e.recover = function() {
            ae.recover("AlphaCmd", this);
        }, e.run = function(t) {
            t.alpha(this.alpha);
        }, r(0, e, "cmdID", function() {
            return "Alpha";
        }), t.create = function(e) {
            var i = ae.getItemByClass("AlphaCmd", t);
            return i.alpha = e, i;
        }, t.ID = "Alpha", t;
    }(), L = function() {
        function t() {
            this.useDic = {}, this.shapeDic = {}, this.shapeLineDic = {}, this._id = 0, this._checkKey = !1, 
            this._freeIdArray = [], fe.isWebGL && g.regCacheByFunction(x.bind(this.startDispose, this), x.bind(this.getCacheList, this));
        }
        s(t, "laya.utils.VectorGraphManager");
        var e = t.prototype;
        return e.getId = function() {
            return this._id++;
        }, e.addShape = function(t, e) {
            this.shapeDic[t] = e, this.useDic[t] || (this.useDic[t] = !0);
        }, e.addLine = function(t, e) {
            this.shapeLineDic[t] = e, this.shapeLineDic[t] || (this.shapeLineDic[t] = !0);
        }, e.getShape = function(t) {
            this._checkKey && null != this.useDic[t] && (this.useDic[t] = !0);
        }, e.deleteShape = function(t) {
            this.shapeDic[t] && (this.shapeDic[t] = null, delete this.shapeDic[t]), this.shapeLineDic[t] && (this.shapeLineDic[t] = null, 
            delete this.shapeLineDic[t]), null != this.useDic[t] && delete this.useDic[t];
        }, e.getCacheList = function() {
            var t, e = [];
            for (t in this.shapeDic) e.push(this.shapeDic[t]);
            for (t in this.shapeLineDic) e.push(this.shapeLineDic[t]);
            return e;
        }, e.startDispose = function() {
            var t;
            for (t in this.useDic) this.useDic[t] = !1;
            this._checkKey = !0;
        }, e.endDispose = function() {
            if (this._checkKey) {
                var t;
                for (t in this.useDic) this.useDic[t] || this.deleteShape(t);
                this._checkKey = !1;
            }
        }, t.getInstance = function() {
            return t.instance = t.instance || new t();
        }, t.instance = null, t;
    }(), E = function() {
        function t() {
            this.id = 0 / 0, this.save = [], this.toUpperCase = null, this.changed = !1, this._text = null, 
            this.width = -1, this.pageChars = [], this.startID = 0, this.startIDStroke = 0, 
            this.lastGCCnt = 0, this.splitRender = !1;
        }
        s(t, "laya.utils.WordText");
        var e = t.prototype;
        return e.setText = function(t) {
            this.changed = !0, this._text = t, this.width = -1, this.pageChars = [];
        }, e.toString = function() {
            return this._text;
        }, e.charCodeAt = function(t) {
            return this._text ? this._text.charCodeAt(t) : 0 / 0;
        }, e.charAt = function(t) {
            return this._text ? this._text.charAt(t) : null;
        }, e.cleanCache = function() {
            this.pageChars = [], this.startID = 0;
        }, r(0, e, "length", function() {
            return this._text ? this._text.length : 0;
        }), t;
    }(), R = function() {
        function t() {}
        s(t, "laya.display.cmd.RotateCmd");
        var e = t.prototype;
        return e.recover = function() {
            ae.recover("RotateCmd", this);
        }, e.run = function(t, e, i) {
            t._rotate(this.angle, this.pivotX + e, this.pivotY + i);
        }, r(0, e, "cmdID", function() {
            return "Rotate";
        }), t.create = function(e, i, n) {
            var s = ae.getItemByClass("RotateCmd", t);
            return s.angle = e, s.pivotX = i, s.pivotY = n, s;
        }, t.ID = "Rotate", t;
    }(), B = function() {
        function t() {}
        s(t, "laya.display.cmd.DrawRectCmd");
        var e = t.prototype;
        return e.recover = function() {
            this.fillColor = null, this.lineColor = null, ae.recover("DrawRectCmd", this);
        }, e.run = function(t, e, i) {
            t.drawRect(this.x + e, this.y + i, this.width, this.height, this.fillColor, this.lineColor, this.lineWidth);
        }, r(0, e, "cmdID", function() {
            return "DrawRect";
        }), t.create = function(e, i, n, s, r, o, a) {
            var h = ae.getItemByClass("DrawRectCmd", t);
            return h.x = e, h.y = i, h.width = n, h.height = s, h.fillColor = r, h.lineColor = o, 
            h.lineWidth = a, h;
        }, t.ID = "DrawRect", t;
    }(), F = function() {
        function t() {}
        return s(t, "laya.maths.MathUtil"), t.subtractVector3 = function(t, e, i) {
            i[0] = t[0] - e[0], i[1] = t[1] - e[1], i[2] = t[2] - e[2];
        }, t.lerp = function(t, e, i) {
            return t * (1 - i) + e * i;
        }, t.scaleVector3 = function(t, e, i) {
            i[0] = t[0] * e, i[1] = t[1] * e, i[2] = t[2] * e;
        }, t.lerpVector3 = function(t, e, i, n) {
            var s = t[0], r = t[1], o = t[2];
            n[0] = s + i * (e[0] - s), n[1] = r + i * (e[1] - r), n[2] = o + i * (e[2] - o);
        }, t.lerpVector4 = function(t, e, i, n) {
            var s = t[0], r = t[1], o = t[2], a = t[3];
            n[0] = s + i * (e[0] - s), n[1] = r + i * (e[1] - r), n[2] = o + i * (e[2] - o), 
            n[3] = a + i * (e[3] - a);
        }, t.slerpQuaternionArray = function(t, e, i, n, s, r, o) {
            var a, h, l, u, c, _ = t[e + 0], d = t[e + 1], f = t[e + 2], p = t[e + 3], g = i[n + 0], m = i[n + 1], v = i[n + 2], y = i[n + 3];
            return h = _ * g + d * m + f * v + p * y, 0 > h && (h = -h, g = -g, m = -m, v = -v, 
            y = -y), 1 - h > 1e-6 ? (a = Math.acos(h), l = Math.sin(a), u = Math.sin((1 - s) * a) / l, 
            c = Math.sin(s * a) / l) : (u = 1 - s, c = s), r[o + 0] = u * _ + c * g, r[o + 1] = u * d + c * m, 
            r[o + 2] = u * f + c * v, r[o + 3] = u * p + c * y, r;
        }, t.getRotation = function(t, e, i, n) {
            return Math.atan2(n - e, i - t) / Math.PI * 180;
        }, t.sortBigFirst = function(t, e) {
            return t == e ? 0 : e > t ? 1 : -1;
        }, t.sortSmallFirst = function(t, e) {
            return t == e ? 0 : e > t ? -1 : 1;
        }, t.sortNumBigFirst = function(t, e) {
            return parseFloat(e) - parseFloat(t);
        }, t.sortNumSmallFirst = function(t, e) {
            return parseFloat(t) - parseFloat(e);
        }, t.sortByKey = function(e, i, n) {
            void 0 === i && (i = !1), void 0 === n && (n = !0);
            var s;
            return s = i ? n ? t.sortNumBigFirst : t.sortBigFirst : n ? t.sortNumSmallFirst : t.sortSmallFirst, 
            function(t, i) {
                return s(t[e], i[e]);
            };
        }, t;
    }(), O = function() {
        function t() {}
        s(t, "laya.display.cmd.DrawCurvesCmd");
        var e = t.prototype;
        return e.recover = function() {
            this.points = null, this.lineColor = null, ae.recover("DrawCurvesCmd", this);
        }, e.run = function(t, e, i) {
            t.drawCurves(this.x + e, this.y + i, this.points, this.lineColor, this.lineWidth);
        }, r(0, e, "cmdID", function() {
            return "DrawCurves";
        }), t.create = function(e, i, n, s, r) {
            var o = ae.getItemByClass("DrawCurvesCmd", t);
            return o.x = e, o.y = i, o.points = n, o.lineColor = s, o.lineWidth = r, o;
        }, t.ID = "DrawCurves", t;
    }(), k = function() {
        function t() {}
        s(t, "laya.display.cmd.SaveCmd");
        var e = t.prototype;
        return e.recover = function() {
            ae.recover("SaveCmd", this);
        }, e.run = function(t) {
            t.save();
        }, r(0, e, "cmdID", function() {
            return "Save";
        }), t.create = function() {
            var e = ae.getItemByClass("SaveCmd", t);
            return e;
        }, t.ID = "Save", t;
    }(), N = function() {
        function t() {
            this.reset();
        }
        s(t, "laya.display.css.SpriteStyle");
        var e = t.prototype;
        return e.reset = function() {
            return this.scaleX = this.scaleY = 1, this.skewX = this.skewY = 0, this.pivotX = this.pivotY = this.rotation = 0, 
            this.alpha = 1, this.scrollRect && this.scrollRect.recover(), this.scrollRect = null, 
            this.viewport && this.viewport.recover(), this.viewport = null, this.hitArea = null, 
            this.dragging = null, this.blendMode = null, this;
        }, e.recover = function() {
            this !== t.EMPTY && ae.recover("SpriteStyle", this.reset());
        }, t.create = function() {
            return ae.getItemByClass("SpriteStyle", t);
        }, t.EMPTY = new t(), t;
    }(), W = function() {
        function t() {}
        s(t, "laya.display.cmd.DrawLineCmd");
        var e = t.prototype;
        return e.recover = function() {
            ae.recover("DrawLineCmd", this);
        }, e.run = function(t, e, i) {
            t._drawLine(e, i, this.fromX, this.fromY, this.toX, this.toY, this.lineColor, this.lineWidth, this.vid);
        }, r(0, e, "cmdID", function() {
            return "DrawLine";
        }), t.create = function(e, i, n, s, r, o, a) {
            var h = ae.getItemByClass("DrawLineCmd", t);
            return h.fromX = e, h.fromY = i, h.toX = n, h.toY = s, h.lineColor = r, h.lineWidth = o, 
            h.vid = a, h;
        }, t.ID = "DrawLine", t;
    }(), U = function() {
        function t(e, i, n, s, r, o, a) {
            return this._bTransform = !1, void 0 === e && (e = 1), void 0 === i && (i = 0), 
            void 0 === n && (n = 0), void 0 === s && (s = 1), void 0 === r && (r = 0), void 0 === o && (o = 0), 
            void 0 === a && (a = 0), null != t._createFun ? t._createFun(e, i, n, s, r, o, a) : (this.a = e, 
            this.b = i, this.c = n, this.d = s, this.tx = r, this.ty = o, this._checkTransform(), 
            void 0);
        }
        s(t, "laya.maths.Matrix");
        var e = t.prototype;
        return e.identity = function() {
            return this.a = this.d = 1, this.b = this.tx = this.ty = this.c = 0, this._bTransform = !1, 
            this;
        }, e._checkTransform = function() {
            return this._bTransform = 1 !== this.a || 0 !== this.b || 0 !== this.c || 1 !== this.d;
        }, e.setTranslate = function(t, e) {
            return this.tx = t, this.ty = e, this;
        }, e.translate = function(t, e) {
            return this.tx += t, this.ty += e, this;
        }, e.scale = function(t, e) {
            return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, 
            this._bTransform = !0, this;
        }, e.rotate = function(t) {
            var e = Math.cos(t), i = Math.sin(t), n = this.a, s = this.c, r = this.tx;
            return this.a = n * e - this.b * i, this.b = n * i + this.b * e, this.c = s * e - this.d * i, 
            this.d = s * i + this.d * e, this.tx = r * e - this.ty * i, this.ty = r * i + this.ty * e, 
            this._bTransform = !0, this;
        }, e.skew = function(t, e) {
            var i = Math.tan(t), n = Math.tan(e), s = this.a, r = this.b;
            return this.a += n * this.c, this.b += n * this.d, this.c += i * s, this.d += i * r, 
            this;
        }, e.invertTransformPoint = function(t) {
            var e = this.a, i = this.b, n = this.c, s = this.d, r = this.tx, o = e * s - i * n, a = s / o, h = -i / o, l = -n / o, u = e / o, c = (n * this.ty - s * r) / o, _ = -(e * this.ty - i * r) / o;
            return t.setTo(a * t.x + l * t.y + c, h * t.x + u * t.y + _);
        }, e.transformPoint = function(t) {
            return t.setTo(this.a * t.x + this.c * t.y + this.tx, this.b * t.x + this.d * t.y + this.ty);
        }, e.transformPointN = function(t) {
            return t.setTo(this.a * t.x + this.c * t.y, this.b * t.x + this.d * t.y);
        }, e.getScaleX = function() {
            return 0 === this.b ? this.a : Math.sqrt(this.a * this.a + this.b * this.b);
        }, e.getScaleY = function() {
            return 0 === this.c ? this.d : Math.sqrt(this.c * this.c + this.d * this.d);
        }, e.invert = function() {
            var t = this.a, e = this.b, i = this.c, n = this.d, s = this.tx, r = t * n - e * i;
            return this.a = n / r, this.b = -e / r, this.c = -i / r, this.d = t / r, this.tx = (i * this.ty - n * s) / r, 
            this.ty = -(t * this.ty - e * s) / r, this;
        }, e.setTo = function(t, e, i, n, s, r) {
            return this.a = t, this.b = e, this.c = i, this.d = n, this.tx = s, this.ty = r, 
            this;
        }, e.concat = function(t) {
            var e = this.a, i = this.c, n = this.tx;
            return this.a = e * t.a + this.b * t.c, this.b = e * t.b + this.b * t.d, this.c = i * t.a + this.d * t.c, 
            this.d = i * t.b + this.d * t.d, this.tx = n * t.a + this.ty * t.c + t.tx, this.ty = n * t.b + this.ty * t.d + t.ty, 
            this;
        }, e.scaleEx = function(t, e) {
            var i = this.a, n = this.b, s = this.c, r = this.d;
            0 !== n || 0 !== s ? (this.a = t * i, this.b = t * n, this.c = e * s, this.d = e * r) : (this.a = t * i, 
            this.b = 0 * r, this.c = 0 * i, this.d = e * r), this._bTransform = !0;
        }, e.rotateEx = function(t) {
            var e = Math.cos(t), i = Math.sin(t), n = this.a, s = this.b, r = this.c, o = this.d;
            0 !== s || 0 !== r ? (this.a = e * n + i * r, this.b = e * s + i * o, this.c = -i * n + e * r, 
            this.d = -i * s + e * o) : (this.a = e * n, this.b = i * o, this.c = -i * n, this.d = e * o), 
            this._bTransform = !0;
        }, e.clone = function() {
            var e = t.create();
            return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, 
            e._bTransform = this._bTransform, e;
        }, e.copyTo = function(t) {
            return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, 
            t._bTransform = this._bTransform, t;
        }, e.toString = function() {
            return this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.tx + "," + this.ty;
        }, e.destroy = function() {
            this.recover();
        }, e.recover = function() {
            ae.recover("Matrix", this.identity());
        }, t.mul = function(t, e, i) {
            var n = t.a, s = t.b, r = t.c, o = t.d, a = t.tx, h = t.ty, l = e.a, u = e.b, c = e.c, _ = e.d, d = e.tx, f = e.ty;
            return 0 !== u || 0 !== c ? (i.a = n * l + s * c, i.b = n * u + s * _, i.c = r * l + o * c, 
            i.d = r * u + o * _, i.tx = l * a + c * h + d, i.ty = u * a + _ * h + f) : (i.a = n * l, 
            i.b = s * _, i.c = r * l, i.d = o * _, i.tx = l * a + d, i.ty = _ * h + f), i;
        }, t.mul16 = function(t, e, i) {
            var n = t.a, s = t.b, r = t.c, o = t.d, a = t.tx, h = t.ty, l = e.a, u = e.b, c = e.c, _ = e.d, d = e.tx, f = e.ty;
            return 0 !== u || 0 !== c ? (i[0] = n * l + s * c, i[1] = n * u + s * _, i[4] = r * l + o * c, 
            i[5] = r * u + o * _, i[12] = l * a + c * h + d, i[13] = u * a + _ * h + f) : (i[0] = n * l, 
            i[1] = s * _, i[4] = r * l, i[5] = o * _, i[12] = l * a + d, i[13] = _ * h + f), 
            i;
        }, t.create = function() {
            return ae.getItemByClass("Matrix", t);
        }, t.EMPTY = new t(), t.TEMP = new t(), t._createFun = null, t;
    }(), G = (function() {
        function t() {
            this._strsToID = {}, this._idToStrs = [], this._length = 0;
        }
        s(t, "laya.utils.StringKey");
        var e = t.prototype;
        return e.add = function(t) {
            var e = this._strsToID[t];
            return null != e ? e : (this._idToStrs[this._length] = t, this._strsToID[t] = this._length++);
        }, e.getID = function(t) {
            var e = this._strsToID[t];
            return null == e ? -1 : e;
        }, e.getName = function(t) {
            var e = this._idToStrs[t];
            return null == e ? void 0 : e;
        }, t;
    }(), function() {
        function t() {}
        return s(t, "laya.utils.Log"), t.enable = function() {
            t._logdiv || (t._logdiv = I.createElement("div"), t._logdiv.style.cssText = "border:white;padding:4px;overflow-y:auto;z-index:1000000;background:rgba(100,100,100,0.6);color:white;position: absolute;left:0px;top:0px;width:50%;height:50%;", 
            I.document.body.appendChild(t._logdiv), t._btn = I.createElement("button"), t._btn.innerText = "Hide", 
            t._btn.style.cssText = "z-index:1000001;position: absolute;left:10px;top:10px;", 
            t._btn.onclick = t.toggle, I.document.body.appendChild(t._btn));
        }, t.toggle = function() {
            var e = t._logdiv.style;
            "" === e.display ? (t._btn.innerText = "Show", e.display = "none") : (t._btn.innerText = "Hide", 
            e.display = "");
        }, t.print = function(e) {
            t._logdiv && (t._count >= t.maxCount && t.clear(), t._count++, t._logdiv.innerText += e + "\n", 
            t.autoScrollToBottom && t._logdiv.scrollHeight - t._logdiv.scrollTop - t._logdiv.clientHeight < 50 && (t._logdiv.scrollTop = t._logdiv.scrollHeight));
        }, t.clear = function() {
            t._logdiv.innerText = "", t._count = 0;
        }, t._logdiv = null, t._btn = null, t._count = 0, t.maxCount = 50, t.autoScrollToBottom = !0, 
        t;
    }(), function() {
        function t() {}
        return s(t, "laya.net.AtlasInfoManager"), t.enable = function(e, n) {
            i.loader.load(e, d.create(null, t._onInfoLoaded, [ n ]), null, "json");
        }, t._onInfoLoaded = function(e, i) {
            var n, s, r, o = 0, a = 0;
            for (n in i) for (r = i[n], s = r[0], r = r[1], a = r.length, o = 0; a > o; o++) t._fileLoadDic[s + r[o]] = n;
            e && e.run();
        }, t.getFileLoadPath = function(e) {
            return t._fileLoadDic[e] || e;
        }, t._fileLoadDic = {}, t;
    }()), Y = function() {
        function t() {
            this._pool = [], this._map = [], this._laters = [];
        }
        var e;
        s(t, "laya.utils.CallLater");
        var i = t.prototype;
        return i._update = function() {
            var t = this._laters, e = t.length;
            if (e > 0) {
                for (var i = 0, n = e - 1; n >= i; i++) {
                    var s = t[i];
                    this._map[s.key] = null, null !== s.method && (s.run(), s.clear()), this._pool.push(s), 
                    i === n && (n = t.length - 1);
                }
                t.length = 0;
            }
        }, i._getHandler = function(t, e) {
            var i = t ? t.$_GID || (t.$_GID = x.getGID()) : 0, n = e.$_TID || (e.$_TID = 1e5 * ue._mid++);
            return this._map[i + n];
        }, i.callLater = function(t, i, n) {
            if (null == this._getHandler(t, i)) {
                if (this._pool.length) var s = this._pool.pop(); else s = new e();
                s.caller = t, s.method = i, s.args = n;
                var r = t ? t.$_GID : 0, o = i.$_TID;
                s.key = r + o, this._map[s.key] = s, this._laters.push(s);
            }
        }, i.runCallLater = function(t, e) {
            var i = this._getHandler(t, e);
            i && null != i.method && (this._map[i.key] = null, i.run(), i.clear());
        }, t.I = new t(), t.__init$ = function() {
            e = function() {
                function t() {
                    this.key = 0, this.caller = null, this.method = null, this.args = null;
                }
                s(t, "");
                var e = t.prototype;
                return e.clear = function() {
                    this.caller = null, this.method = null, this.args = null;
                }, e.run = function() {
                    var t = this.caller;
                    if (t && t.destroyed) return this.clear();
                    var e = this.method, i = this.args;
                    null != e && (i ? e.apply(t, i) : e.call(t));
                }, t;
            }();
        }, t;
    }(), H = function() {
        function t() {}
        s(t, "laya.display.cmd.DrawPathCmd");
        var e = t.prototype;
        return e.recover = function() {
            this.paths = null, this.brush = null, this.pen = null, ae.recover("DrawPathCmd", this);
        }, e.run = function(t, e, i) {
            t._drawPath(this.x + e, this.y + i, this.paths, this.brush, this.pen);
        }, r(0, e, "cmdID", function() {
            return "DrawPath";
        }), t.create = function(e, i, n, s, r) {
            var o = ae.getItemByClass("DrawPathCmd", t);
            return o.x = e, o.y = i, o.paths = n, o.brush = s, o.pen = r, o;
        }, t.ID = "DrawPath", t;
    }(), X = function() {
        function t() {}
        s(t, "laya.display.cmd.DrawTrianglesCmd");
        var e = t.prototype;
        return e.recover = function() {
            this.texture = null, this.vertices = null, this.uvs = null, this.indices = null, 
            this.matrix = null, ae.recover("DrawTrianglesCmd", this);
        }, e.run = function(t, e, i) {
            t.drawTriangles(this.texture, this.x + e, this.y + i, this.vertices, this.uvs, this.indices, this.matrix, this.alpha, this.color, this.blendMode);
        }, r(0, e, "cmdID", function() {
            return "DrawTriangles";
        }), t.create = function(e, i, n, s, r, a, h, l, u, c) {
            var _ = ae.getItemByClass("DrawTrianglesCmd", t);
            if (_.texture = e, _.x = i, _.y = n, _.vertices = s, _.uvs = r, _.indices = a, _.matrix = h, 
            _.alpha = l, u) {
                _.color = new Xe();
                var d = o.create(u).arrColor;
                _.color.color(255 * d[0], 255 * d[1], 255 * d[2], 255 * d[3]);
            }
            return _.blendMode = c, _;
        }, t.ID = "DrawTriangles", t;
    }(), z = function() {
        function t() {}
        return s(t, "laya.utils.Stat"), r(1, t, "onclick", null, function(e) {
            t._sp && t._sp.on("click", t._sp, e), t._canvas && (t._canvas.source.onclick = e, 
            t._canvas.source.style.pointerEvents = "");
        }), t.show = function(e, i) {
            void 0 === e && (e = 0), void 0 === i && (i = 0), I.onMiniGame || I.onLimixiu || fe.isConchApp || I.onBDMiniGame || I.onKGMiniGame || I.onQGMiniGame || (t._useCanvas = !0), 
            t._show = !0, t._fpsData.length = 60, t._view[0] = {
                title: "FPS(Canvas)",
                value: "_fpsStr",
                color: "yellow",
                units: "int"
            }, t._view[1] = {
                title: "Sprite",
                value: "_spriteStr",
                color: "black",
                units: "int"
            }, t._view[2] = {
                title: "RBS",
                value: "renderBatches",
                color: "black",
                units: "int"
            }, t._view[3] = {
                title: "SRBS",
                value: "savedRenderBatches",
                color: "black",
                units: "int"
            }, t._view[4] = {
                title: "CPUMemory",
                value: "cpuMemory",
                color: "black",
                units: "M"
            }, t._view[5] = {
                title: "GPUMemory",
                value: "gpuMemory",
                color: "black",
                units: "M"
            }, fe.isWebGL && (t._view[6] = {
                title: "Shader",
                value: "shaderCall",
                color: "black",
                units: "int"
            }, fe.is3DMode ? (t._view[0].title = "FPS(3D)", t._view[7] = {
                title: "Faces",
                value: "trianglesFaces",
                color: "black",
                units: "int"
            }, t._view[8] = {
                title: "Cull",
                value: "frustumCulling",
                color: "black",
                units: "int"
            }, t._view[9] = {
                title: "OctCull",
                value: "octreeNodeCulling",
                color: "black",
                units: "int"
            }) : (t._view[0].title = "FPS(WebGL)", t._view[7] = {
                title: "Canvas",
                value: "_canvasStr",
                color: "black",
                units: "int"
            })), t._useCanvas ? t.createUIPre(e, i) : t.createUI(e, i), t.enable();
        }, t.createUIPre = function(e, i) {
            var n = I.pixelRatio;
            t._width = 180 * n, t._vx = 120 * n, t._height = n * (12 * t._view.length + 3 * n) + 4, 
            t._fontSize = 12 * n;
            for (var s = 0; s < t._view.length; s++) t._view[s].x = 4, t._view[s].y = s * t._fontSize + 2 * n;
            t._canvas || (t._canvas = new qe(!0), t._canvas.size(t._width, t._height), t._ctx = t._canvas.getContext("2d"), 
            t._ctx.textBaseline = "top", t._ctx.font = t._fontSize + "px Arial", t._canvas.source.style.cssText = "pointer-events:none;background:rgba(150,150,150,0.8);z-index:100000;position: absolute;direction:ltr;left:" + e + "px;top:" + i + "px;width:" + t._width / n + "px;height:" + t._height / n + "px;"), 
            I.onKGMiniGame || I.container.appendChild(t._canvas.source), t._first = !0, t.loop(), 
            t._first = !1;
        }, t.createUI = function(e, i) {
            var n = t._sp, s = I.pixelRatio;
            n || (n = new je(), t._leftText = new Qe(), t._leftText.pos(5, 5), t._leftText.color = "#ffffff", 
            n.addChild(t._leftText), t._txt = new Qe(), t._txt.pos(80 * s, 5), t._txt.color = "#ffffff", 
            n.addChild(t._txt), t._sp = n), n.pos(e, i);
            for (var r = "", o = 0; o < t._view.length; o++) {
                var a = t._view[o];
                r += a.title + "\n";
            }
            t._leftText.text = r;
            var h = 138 * s, l = s * (12 * t._view.length + 3 * s) + 4;
            t._txt.fontSize = t._fontSize * s, t._leftText.fontSize = t._fontSize * s, n.size(h, l), 
            n.graphics.clear(), n.graphics.alpha(.5), n.graphics.drawRect(0, 0, h, l, "#999999"), 
            n.graphics.alpha(2), t.loop();
        }, t.enable = function() {
            i.systemTimer.frameLoop(1, t, t.loop);
        }, t.hide = function() {
            t._show = !1, i.systemTimer.clear(t, t.loop), t._canvas && I.removeElement(t._canvas.source);
        }, t.clear = function() {
            t.trianglesFaces = t.renderBatches = t.savedRenderBatches = t.shaderCall = t.spriteRenderUseCacheCount = t.frustumCulling = t.octreeNodeCulling = t.canvasNormal = t.canvasBitmap = t.canvasReCache = 0;
        }, t.loop = function() {
            t._count++;
            var e = I.now();
            if (!(e - t._timer < 1e3)) {
                var i = t._count;
                if (t.FPS = Math.round(1e3 * i / (e - t._timer)), t._show) {
                    t.trianglesFaces = Math.round(t.trianglesFaces / i), t.renderBatches = t._useCanvas ? Math.round(t.renderBatches / i) : Math.round(t.renderBatches / i) - 1, 
                    t.savedRenderBatches = Math.round(t.savedRenderBatches / i), t.shaderCall = Math.round(t.shaderCall / i), 
                    t.spriteRenderUseCacheCount = Math.round(t.spriteRenderUseCacheCount / i), t.canvasNormal = Math.round(t.canvasNormal / i), 
                    t.canvasBitmap = Math.round(t.canvasBitmap / i), t.canvasReCache = Math.ceil(t.canvasReCache / i), 
                    t.frustumCulling = Math.round(t.frustumCulling / i), t.octreeNodeCulling = Math.round(t.octreeNodeCulling / i);
                    var n = t.FPS > 0 ? Math.floor(1e3 / t.FPS).toString() : " ";
                    t._fpsStr = t.FPS + (t.renderSlow ? " slow" : "") + " " + n, t._spriteStr = t._useCanvas ? t.spriteCount - 1 + (t.spriteRenderUseCacheCount ? "/" + t.spriteRenderUseCacheCount : "") : t.spriteCount - 4 + (t.spriteRenderUseCacheCount ? "/" + t.spriteRenderUseCacheCount : ""), 
                    t._canvasStr = t.canvasReCache + "/" + t.canvasNormal + "/" + t.canvasBitmap, t.cpuMemory = Ee.cpuMemory, 
                    t.gpuMemory = Ee.gpuMemory, t._useCanvas ? t.renderInfoPre() : t.renderInfo(), t.clear();
                }
                t._count = 0, t._timer = e;
            }
        }, t.renderInfoPre = function() {
            var e, i, n = 0;
            if (t._canvas) {
                var s = t._ctx;
                for (s.clearRect(t._first ? 0 : t._vx, 0, t._width, t._height), n = 0; n < t._view.length; n++) e = t._view[n], 
                t._first && (s.fillStyle = "white", s.fillText(e.title, e.x, e.y)), s.fillStyle = e.color, 
                i = t[e.value], "M" == e.units && (i = Math.floor(i / 1048576 * 100) / 100 + " M"), 
                s.fillText(i + "", e.x + t._vx, e.y);
            }
        }, t.renderInfo = function() {
            for (var e = "", i = 0; i < t._view.length; i++) {
                var n = t._view[i], s = t[n.value];
                "M" == n.units && (s = Math.floor(s / 1048576 * 100) / 100 + " M"), "K" == n.units && (s = Math.floor(s / 1024 * 100) / 100 + " K"), 
                e += s + "\n";
            }
            t._txt.text = e;
        }, t.FPS = 0, t.loopCount = 0, t.shaderCall = 0, t.renderBatches = 0, t.savedRenderBatches = 0, 
        t.trianglesFaces = 0, t.spriteCount = 0, t.spriteRenderUseCacheCount = 0, t.frustumCulling = 0, 
        t.octreeNodeCulling = 0, t.canvasNormal = 0, t.canvasBitmap = 0, t.canvasReCache = 0, 
        t.renderSlow = !1, t.gpuMemory = 0, t.cpuMemory = 0, t._fpsStr = null, t._canvasStr = null, 
        t._spriteStr = null, t._fpsData = [], t._timer = 0, t._count = 0, t._view = [], 
        t._fontSize = 12, t._txt = null, t._leftText = null, t._sp = null, t._titleSp = null, 
        t._bgSp = null, t._show = !1, t._useCanvas = !1, t._canvas = null, t._ctx = null, 
        t._first = !1, t._vx = 0 / 0, t._width = 0, t._height = 100, t;
    }(), V = function() {
        function t() {}
        s(t, "laya.display.css.BoundsStyle");
        var e = t.prototype;
        return e.reset = function() {
            return this.bounds && this.bounds.recover(), this.userBounds && this.userBounds.recover(), 
            this.bounds = null, this.userBounds = null, this.temBM = null, this;
        }, e.recover = function() {
            ae.recover("BoundsStyle", this.reset());
        }, t.create = function() {
            return ae.getItemByClass("BoundsStyle", t);
        }, t;
    }(), j = function() {
        function t() {}
        s(t, "laya.display.cmd.DrawPieCmd");
        var e = t.prototype;
        return e.recover = function() {
            this.fillColor = null, this.lineColor = null, ae.recover("DrawPieCmd", this);
        }, e.run = function(t, e, i) {
            t._drawPie(this.x + e, this.y + i, this.radius, this._startAngle, this._endAngle, this.fillColor, this.lineColor, this.lineWidth, this.vid);
        }, r(0, e, "startAngle", function() {
            return 180 * this._startAngle / Math.PI;
        }, function(t) {
            this._startAngle = t * Math.PI / 180;
        }), r(0, e, "cmdID", function() {
            return "DrawPie";
        }), r(0, e, "endAngle", function() {
            return 180 * this._endAngle / Math.PI;
        }, function(t) {
            this._endAngle = t * Math.PI / 180;
        }), t.create = function(e, i, n, s, r, o, a, h, l) {
            var u = ae.getItemByClass("DrawPieCmd", t);
            return u.x = e, u.y = i, u.radius = n, u._startAngle = s, u._endAngle = r, u.fillColor = o, 
            u.lineColor = a, u.lineWidth = h, u.vid = l, u;
        }, t.ID = "DrawPie", t;
    }(), K = (function() {
        function t() {}
        return s(t, "laya.events.KeyLocation"), t.STANDARD = 0, t.LEFT = 1, t.RIGHT = 2, 
        t.NUM_PAD = 3, t;
    }(), function() {
        function t() {
            this.sign = null, this.maxCount = 1e3;
        }
        s(t, "laya.utils.PoolCache");
        var e = t.prototype;
        return e.getCacheList = function() {
            return ae.getPoolBySign(this.sign);
        }, e.tryDispose = function() {
            var t;
            t = ae.getPoolBySign(this.sign), t.length > this.maxCount && t.splice(this.maxCount, t.length - this.maxCount);
        }, t.addPoolCacheManager = function(e, i) {
            void 0 === i && (i = 100);
            var n;
            n = new t(), n.sign = e, n.maxCount = i, g.regCacheByFunction(x.bind(n.tryDispose, n), x.bind(n.getCacheList, n));
        }, t;
    }(), function() {
        function t() {}
        s(t, "laya.display.cmd.FillWordsCmd");
        var e = t.prototype;
        return e.recover = function() {
            this.words = null, ae.recover("FillWordsCmd", this);
        }, e.run = function(t, e, i) {
            t.fillWords(this.words, this.x + e, this.y + i, this.font, this.color);
        }, r(0, e, "cmdID", function() {
            return "FillWords";
        }), t.create = function(e, i, n, s, r) {
            var o = ae.getItemByClass("FillWordsCmd", t);
            return o.words = e, o.x = i, o.y = n, o.font = s, o.color = r, o;
        }, t.ID = "FillWords", t;
    }()), $ = function() {
        function t() {}
        s(t, "laya.display.cmd.TransformCmd");
        var e = t.prototype;
        return e.recover = function() {
            this.matrix = null, ae.recover("TransformCmd", this);
        }, e.run = function(t, e, i) {
            t._transform(this.matrix, this.pivotX + e, this.pivotY + i);
        }, r(0, e, "cmdID", function() {
            return "Transform";
        }), t.create = function(e, i, n) {
            var s = ae.getItemByClass("TransformCmd", t);
            return s.matrix = e, s.pivotX = i, s.pivotY = n, s;
        }, t.ID = "Transform", t;
    }(), q = function() {
        function t() {
            this._controlPoints = [ new l(), new l(), new l() ], this._calFun = this.getPoint2;
        }
        s(t, "laya.maths.Bezier");
        var e = t.prototype;
        return e._switchPoint = function(t, e) {
            var i = this._controlPoints.shift();
            i.setTo(t, e), this._controlPoints.push(i);
        }, e.getPoint2 = function(t, e) {
            var i = this._controlPoints[0], n = this._controlPoints[1], s = this._controlPoints[2], r = Math.pow(1 - t, 2) * i.x + 2 * t * (1 - t) * n.x + Math.pow(t, 2) * s.x, o = Math.pow(1 - t, 2) * i.y + 2 * t * (1 - t) * n.y + Math.pow(t, 2) * s.y;
            e.push(r, o);
        }, e.getPoint3 = function(t, e) {
            var i = this._controlPoints[0], n = this._controlPoints[1], s = this._controlPoints[2], r = this._controlPoints[3], o = Math.pow(1 - t, 3) * i.x + 3 * n.x * t * (1 - t) * (1 - t) + 3 * s.x * t * t * (1 - t) + r.x * Math.pow(t, 3), a = Math.pow(1 - t, 3) * i.y + 3 * n.y * t * (1 - t) * (1 - t) + 3 * s.y * t * t * (1 - t) + r.y * Math.pow(t, 3);
            e.push(o, a);
        }, e.insertPoints = function(t, e) {
            var i = 0 / 0;
            t = t > 0 ? t : 5;
            var n = 0 / 0;
            for (n = 1 / t, i = 0; 1 >= i; i += n) this._calFun(i, e);
        }, e.getBezierPoints = function(t, e, i) {
            void 0 === e && (e = 5), void 0 === i && (i = 2);
            var n = 0, s = 0;
            if (s = t.length, 2 * (i + 1) > s) return [];
            var r = [];
            switch (i) {
              case 2:
                this._calFun = this.getPoint2;
                break;

              case 3:
                this._calFun = this.getPoint3;
                break;

              default:
                return [];
            }
            for (;this._controlPoints.length <= i; ) this._controlPoints.push(l.create());
            for (n = 0; 2 * i > n; n += 2) this._switchPoint(t[n], t[n + 1]);
            for (n = 2 * i; s > n; n += 2) this._switchPoint(t[n], t[n + 1]), n / 2 % i == 0 && this.insertPoints(e, r);
            return r;
        }, n(t, [ "I", function() {
            return this.I = new t();
        } ]), t;
    }(), Q = function() {
        function t(t, e, i, n) {
            this.id = 0, this.name = null, this.color = 0, this.scale = 1, this.datapos = 0, 
            this.datas = new Array(ei.DATANUM), this.id = t, this.color = e, this.name = i, 
            this.scale = n;
        }
        s(t, "laya.utils.PerfData");
        var e = t.prototype;
        return e.addData = function(t) {
            this.datas[this.datapos] = t, this.datapos++, this.datapos %= ei.DATANUM;
        }, t;
    }(), J = function() {
        function t() {
            this._id = x.getGID(), this._resetComp();
        }
        s(t, "laya.components.Component");
        var e = t.prototype;
        return i.imps(e, {
            "laya.resource.ISingletonElement": !0,
            "laya.resource.IDestroy": !0
        }), e._isScript = function() {
            return !1;
        }, e._resetComp = function() {
            this._indexInList = -1, this._enabled = !0, this._awaked = !1, this.owner = null;
        }, e._getIndexInList = function() {
            return this._indexInList;
        }, e._setIndexInList = function(t) {
            this._indexInList = t;
        }, e._onAdded = function() {}, e._onAwake = function() {}, e._onEnable = function() {}, 
        e._onDisable = function() {}, e._onEnableInScene = function() {}, e._onDisableInScene = function() {}, 
        e._onDestroy = function() {}, e.onReset = function() {}, e._parse = function() {}, 
        e._cloneTo = function() {}, e._setActive = function(t) {
            t ? (this._awaked || (this._awaked = !0, this._onAwake()), this._enabled && this._onEnable()) : this._enabled && this._onDisable();
        }, e._setActiveInScene = function(t) {
            t ? this._onEnableInScene() : this._onDisableInScene();
        }, e.destroy = function() {
            this.owner && this.owner._destroyComponent(this);
        }, e._destroy = function() {
            this.owner.activeInHierarchy && this._enabled && (this._setActive(!1), this._isScript() && this.onDisable()), 
            this.owner._scene && this._setActiveInScene(!1), this._onDestroy(), this._destroyed = !0, 
            this.onReset !== laya.components.Component.prototype.onReset ? (this.onReset(), 
            this._resetComp(), ae.recoverByClass(this)) : this._resetComp();
        }, r(0, e, "id", function() {
            return this._id;
        }), r(0, e, "enabled", function() {
            return this._enabled;
        }, function(t) {
            this._enabled = t, this.owner && (t ? this.owner.activeInHierarchy && this._onEnable() : this.owner.activeInHierarchy && this._onDisable());
        }), r(0, e, "isSingleton", function() {
            return !0;
        }), r(0, e, "destroyed", function() {
            return this._destroyed;
        }), t;
    }(), Z = function() {
        function t() {
            this._hit = null, this._unHit = null;
        }
        s(t, "laya.utils.HitArea");
        var e = t.prototype;
        return e.contains = function(e, i) {
            return t._isHitGraphic(e, i, this.hit) ? !t._isHitGraphic(e, i, this.unHit) : !1;
        }, r(0, e, "hit", function() {
            return this._hit || (this._hit = new f()), this._hit;
        }, function(t) {
            this._hit = t;
        }), r(0, e, "unHit", function() {
            return this._unHit || (this._unHit = new f()), this._unHit;
        }, function(t) {
            this._unHit = t;
        }), t._isHitGraphic = function(e, i, n) {
            if (!n) return !1;
            var s = n.cmds;
            if (!s && n._one && (s = t._cmds, s.length = 1, s[0] = n._one), !s) return !1;
            var r = 0, o = 0;
            o = s.length;
            var a;
            for (r = 0; o > r; r++) if (a = s[r]) {
                switch (a.cmdID) {
                  case "Translate":
                    e -= a.tx, i -= a.ty;
                }
                if (t._isHitCmd(e, i, a)) return !0;
            }
            return !1;
        }, t._isHitCmd = function(e, i, n) {
            if (!n) return !1;
            var s = !1;
            switch (n.cmdID) {
              case "DrawRect":
                t._rect.setTo(n.x, n.y, n.width, n.height), s = t._rect.contains(e, i);
                break;

              case "DrawCircle":
                var r = 0 / 0;
                e -= n.x, i -= n.y, r = e * e + i * i, s = r < n.radius * n.radius;
                break;

              case "DrawPoly":
                e -= n.x, i -= n.y, s = t._ptInPolygon(e, i, n.points);
            }
            return s;
        }, t._ptInPolygon = function(e, i, n) {
            var s = t._ptPoint;
            s.setTo(e, i);
            var r = 0, o = 0 / 0, a = 0 / 0, h = 0 / 0, l = 0 / 0, u = 0;
            u = n.length;
            for (var c = 0; u > c; c += 2) if (o = n[c], a = n[c + 1], h = n[(c + 2) % u], l = n[(c + 3) % u], 
            a != l && !(s.y < Math.min(a, l) || s.y >= Math.max(a, l))) {
                var _ = (s.y - a) * (h - o) / (l - a) + o;
                _ > s.x && r++;
            }
            return r % 2 == 1;
        }, t._cmds = [], n(t, [ "_rect", function() {
            return this._rect = new D();
        }, "_ptPoint", function() {
            return this._ptPoint = new l();
        } ]), t;
    }(), te = function() {
        function t() {}
        return s(t, "Config"), t.animationInterval = 50, t.isAntialias = !1, t.isAlpha = !1, 
        t.premultipliedAlpha = !0, t.isStencil = !0, t.preserveDrawingBuffer = !1, t.webGL2D_MeshAllocMaxMem = !0, 
        t.is2DPixelArtGame = !1, t.useWebGL2 = !1, t.useRetinalCanvas = !1, t;
    }(), ee = function() {
        function t() {}
        s(t, "laya.display.cmd.RestoreCmd");
        var e = t.prototype;
        return e.recover = function() {
            ae.recover("RestoreCmd", this);
        }, e.run = function(t) {
            t.restore();
        }, r(0, e, "cmdID", function() {
            return "Restore";
        }), t.create = function() {
            var e = ae.getItemByClass("RestoreCmd", t);
            return e;
        }, t.ID = "Restore", t;
    }(), ie = function() {
        function t() {}
        return s(t, "laya.maths.GrahamScan"), t.multiply = function(t, e, i) {
            return (t.x - i.x) * (e.y - i.y) - (e.x - i.x) * (t.y - i.y);
        }, t.dis = function(t, e) {
            return (t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y);
        }, t._getPoints = function(e, i, n) {
            for (void 0 === i && (i = !1), t._mPointList || (t._mPointList = []); t._mPointList.length < e; ) t._mPointList.push(new l());
            return n || (n = []), n.length = 0, i ? t.getFrom(n, t._mPointList, e) : t.getFromR(n, t._mPointList, e), 
            n;
        }, t.getFrom = function(t, e, i) {
            var n = 0;
            for (n = 0; i > n; n++) t.push(e[n]);
            return t;
        }, t.getFromR = function(t, e, i) {
            var n = 0;
            for (n = 0; i > n; n++) t.push(e.pop());
            return t;
        }, t.pListToPointList = function(e, i) {
            void 0 === i && (i = !1);
            var n = 0, s = e.length / 2, r = t._getPoints(s, i, t._tempPointList);
            for (n = 0; s > n; n++) r[n].setTo(e[n + n], e[n + n + 1]);
            return r;
        }, t.pointListToPlist = function(e) {
            var i, n = 0, s = e.length, r = t._temPList;
            for (r.length = 0, n = 0; s > n; n++) i = e[n], r.push(i.x, i.y);
            return r;
        }, t.scanPList = function(e) {
            return x.copyArray(e, t.pointListToPlist(t.scan(t.pListToPointList(e, !0))));
        }, t.scan = function(e) {
            var i, n, s, r = 0, o = 0, a = 0, h = e.length, l = {};
            for (n = t._temArr, n.length = 0, h = e.length, r = h - 1; r >= 0; r--) i = e[r], 
            s = i.x + "_" + i.y, l.hasOwnProperty(s) || (l[s] = !0, n.push(i));
            for (h = n.length, x.copyArray(e, n), r = 1; h > r; r++) (e[r].y < e[a].y || e[r].y == e[a].y && e[r].x < e[a].x) && (a = r);
            for (i = e[0], e[0] = e[a], e[a] = i, r = 1; h - 1 > r; r++) {
                for (a = r, o = r + 1; h > o; o++) (t.multiply(e[o], e[a], e[0]) > 0 || 0 == t.multiply(e[o], e[a], e[0]) && t.dis(e[0], e[o]) < t.dis(e[0], e[a])) && (a = o);
                i = e[r], e[r] = e[a], e[a] = i;
            }
            if (n = t._temArr, n.length = 0, e.length < 3) return x.copyArray(n, e);
            for (n.push(e[0], e[1], e[2]), r = 3; h > r; r++) {
                for (;n.length >= 2 && t.multiply(e[r], n[n.length - 1], n[n.length - 2]) >= 0; ) n.pop();
                e[r] && n.push(e[r]);
            }
            return n;
        }, t._mPointList = null, t._tempPointList = [], t._temPList = [], t._temArr = [], 
        t;
    }(),
    ne = function() {
        
        function t(e) {
            this._url = null, this._path = null, this._url = t.formatURL(e), this._path = t.getPath(e);
        }
        s(t, "laya.net.URL");
        var e = t.prototype;
        return r(0, e, "path", function() {

            return this._path;
        }), 
        r(0, e, "url", function() {
          
            return this._url;
        }), r(1, t, "basePath", function() {
           
            return t._basePath;
        }, function(e) {
            t._basePath = i._getUrlPath(),
            
             t._basePath = t.formatURL(e);
        }), 
        
       
        t.formatURL = function(e) {
           
            if (!e) return "null path";
            if (e.indexOf(":") > 0) return e;
            if (null != t.customFormat && (e = t.customFormat(e)), e.indexOf(":") > 0) return e;
            var i = e.charAt(0);
            if ("." === i) return t._formatRelativePath(t._basePath + e);
            if ("~" === i) return t.rootPath + e.substring(1);
            if ("d" === i) {
                if (0 === e.indexOf("data:image")) return e;
            } else if ("/" === i) return e;
           
            return t._basePath + e;
        }, t._formatRelativePath = function(t) {
            for (var e = t.split("/"), i = 0, n = e.length; n > i; i++) ".." == e[i] && (e.splice(i - 1, 2), 
            i -= 2);
            return e.join("/");
        }, t.getPath = function(t) {
            var e = t.lastIndexOf("/");
            return e > 0 ? t.substr(0, e + 1) : "";
        }, t.getFileName = function(t) {
            var e = t.lastIndexOf("/");
            return e > 0 ? t.substr(e + 1) : t;
        }, t.getAdptedFilePath = function(e) {
            if (!t.exportSceneToJson || !e) return e;
            var i = 0, n = 0;
            n = t._adpteTypeList.length;
            var s;
            for (i = 0; n > i; i++) s = t._adpteTypeList[i], e = e.replace(s[0], s[1]);
            return e;
        }, t.version = {}, t.exportSceneToJson = !1, t._basePath = "", t.rootPath = "", 
        t.customFormat = function(e) {
            var i = t.version[e];
            return !fe.isConchApp && i && (e += "?v=" + i), e;
        }, n(t, [ "_adpteTypeList", function() {
            return this._adpteTypeList = [ [ ".scene3d", ".json" ], [ ".scene", ".json" ], [ ".taa", ".json" ], [ ".prefab", ".json" ] ];
        } ]), t;
    }(), se = function() {
        function t() {
            this.gid = 0, this.repeat = 1, this._count = 0;
        }
        s(t, "laya.utils.Tween");
        var e = t.prototype;
        return e.to = function(t, e, i, n, s, r, o) {
            return void 0 === r && (r = 0), void 0 === o && (o = !1), this._create(t, e, i, n, s, r, o, !0, !1, !0);
        }, e.from = function(t, e, i, n, s, r, o) {
            return void 0 === r && (r = 0), void 0 === o && (o = !1), this._create(t, e, i, n, s, r, o, !1, !1, !0);
        }, e._create = function(e, n, s, r, o, a, h, l, u, c) {
            if (!e) throw new Error("Tween:target is null");
            this._target = e, this._duration = s, this._ease = r || n.ease || t.easeNone, this._complete = o || n.complete, 
            this._delay = a, this._props = [], this._usedTimer = 0, this._startTimer = I.now(), 
            this._usedPool = u, this._delayParam = null, this.update = n.update;
            var _ = e.$_GID || (e.$_GID = x.getGID());
            return t.tweenMap[_] ? (h && t.clearTween(e), t.tweenMap[_].push(this)) : t.tweenMap[_] = [ this ], 
            c ? 0 >= a ? this.firstStart(e, n, l) : (this._delayParam = [ e, n, l ], i.timer.once(a, this, this.firstStart, this._delayParam)) : this._initProps(e, n, l), 
            this;
        }, e.firstStart = function(t, e, i) {
            return this._delayParam = null, t.destroyed ? (this.clear(), void 0) : (this._initProps(t, e, i), 
            this._beginLoop(), void 0);
        }, e._initProps = function(t, e, i) {
            for (var n in e) if ("number" == typeof t[n]) {
                var s = i ? t[n] : e[n], r = i ? e[n] : t[n];
                this._props.push([ n, s, r - s ]), i || (t[n] = s);
            }
        }, e._beginLoop = function() {
            i.timer.frameLoop(1, this, this._doEase);
        }, e._doEase = function() {
            this._updateEase(I.now());
        }, e._updateEase = function(e) {
            var i = this._target;
            if (i) {
                if (i.destroyed) return t.clearTween(i);
                var n = this._usedTimer = e - this._startTimer - this._delay;
                if (!(0 > n)) {
                    if (n >= this._duration) return this.complete();
                    for (var s = n > 0 ? this._ease(n, 0, 1, this._duration) : 0, r = this._props, o = 0, a = r.length; a > o; o++) {
                        var h = r[o];
                        i[h[0]] = h[1] + s * h[2];
                    }
                    this.update && this.update.run();
                }
            }
        }, e.complete = function() {
            if (this._target) {
                i.timer.runTimer(this, this.firstStart);
                for (var t = this._target, e = this._props, n = this._complete, s = 0, r = e.length; r > s; s++) {
                    var o = e[s];
                    t[o[0]] = o[1] + o[2];
                }
                this.update && this.update.run(), this._count++, 0 != this.repeat && this._count >= this.repeat ? (this.clear(), 
                n && n.run()) : this.restart();
            }
        }, e.pause = function() {
            i.timer.clear(this, this._beginLoop), i.timer.clear(this, this._doEase), i.timer.clear(this, this.firstStart);
            var t = I.now(), e = 0 / 0;
            e = t - this._startTimer - this._delay, 0 > e && (this._usedTimer = e);
        }, e.setStartTime = function(t) {
            this._startTimer = t;
        }, e.clear = function() {
            this._target && (this._remove(), this._clear());
        }, e._clear = function() {
            this.pause(), i.timer.clear(this, this.firstStart), this._complete = null, this._target = null, 
            this._ease = null, this._props = null, this._delayParam = null, this._usedPool && (this.update = null, 
            ae.recover("tween", this));
        }, e.recover = function() {
            this._usedPool = !0, this._clear();
        }, e._remove = function() {
            var e = t.tweenMap[this._target.$_GID];
            if (e) for (var i = 0, n = e.length; n > i; i++) if (e[i] === this) {
                e.splice(i, 1);
                break;
            }
        }, e.restart = function() {
            if (this.pause(), this._usedTimer = 0, this._startTimer = I.now(), this._delayParam) return i.timer.once(this._delay, this, this.firstStart, this._delayParam), 
            void 0;
            for (var t = this._props, e = 0, n = t.length; n > e; e++) {
                var s = t[e];
                this._target[s[0]] = s[1];
            }
            i.timer.once(this._delay, this, this._beginLoop);
        }, e.resume = function() {
            this._usedTimer >= this._duration || (this._startTimer = I.now() - this._usedTimer - this._delay, 
            this._delayParam ? this._usedTimer < 0 ? i.timer.once(-this._usedTimer, this, this.firstStart, this._delayParam) : this.firstStart.apply(this, this._delayParam) : this._beginLoop());
        }, r(0, e, "progress", null, function(t) {
            var e = t * this._duration;
            this._startTimer = I.now() - this._delay - e;
        }), t.to = function(e, i, n, s, r, o, a, h) {
            return void 0 === o && (o = 0), void 0 === a && (a = !1), void 0 === h && (h = !0), 
            ae.getItemByClass("tween", t)._create(e, i, n, s, r, o, a, !0, h, !0);
        }, t.from = function(e, i, n, s, r, o, a, h) {
            return void 0 === o && (o = 0), void 0 === a && (a = !1), void 0 === h && (h = !0), 
            ae.getItemByClass("tween", t)._create(e, i, n, s, r, o, a, !1, h, !0);
        }, t.clearAll = function(e) {
            if (e && e.$_GID) {
                var i = t.tweenMap[e.$_GID];
                if (i) {
                    for (var n = 0, s = i.length; s > n; n++) i[n]._clear();
                    i.length = 0;
                }
            }
        }, t.clear = function(t) {
            t.clear();
        }, t.clearTween = function(e) {
            t.clearAll(e);
        }, t.easeNone = function(t, e, i, n) {
            return i * t / n + e;
        }, t.tweenMap = [], t;
    }(), re = function() {
        function t() {}
        return s(t, "laya.utils.RunDriver"), t.getIncludeStr = function() {
            return null;
        }, t.createShaderCondition = function(t) {
            var e = "(function() {return " + t + ";})";
            return i._runScript(e);
        }, t.fontMap = [], t.measureText = function(e, i) {
            var n = t.hanzi.test(e);
            if (n && t.fontMap[i]) return t.fontMap[i];
            var s = I.context;
            s.font = i;
            var r = s.measureText(e);
            return n && (t.fontMap[i] = r), r;
        }, t.drawToCanvas = function(t, e, i, n, s, r) {
            i |= 0, n |= 0, s |= 0, r |= 0;
            var o = new qe(), a = o.getContext("2d");
            return o.size(i, n), le.renders[e]._fun(t, a, s, r), o;
        }, t.initRender = function(t, e, i) {
            return fe._context = t.getContext("2d"), t.size(e, i), !0;
        }, t.createParticleTemplate2D = null, t.changeWebGLSize = function() {}, t.createRenderSprite = function(t, e) {
            return new le(t, e);
        }, t.clear = function() {
            fe._context.clear();
        }, t.getTexturePixels = function() {
            return null;
        }, t.skinAniSprite = function() {
            return null;
        }, t.cancelLoadByUrl = function() {}, t.enableNative = null, n(t, [ "hanzi", function() {
            return this.hanzi = new RegExp("^[一-龥]$");
        } ]), t;
    }(), oe = function() {
        function t() {}
        return s(t, "laya.media.SoundManager"), r(1, t, "useAudioMusic", function() {
            return t._useAudioMusic;
        }, function(e) {
            t._useAudioMusic = e, t._musicClass = e ? Fe : null;
        }), r(1, t, "autoStopMusic", function() {
            return t._autoStopMusic;
        }, function(e) {
            i.stage.off("blur", null, t._stageOnBlur), i.stage.off("focus", null, t._stageOnFocus), 
            i.stage.off("visibilitychange", null, t._visibilityChange), t._autoStopMusic = e, 
            e && (i.stage.on("blur", null, t._stageOnBlur), i.stage.on("focus", null, t._stageOnFocus), 
            i.stage.on("visibilitychange", null, t._visibilityChange));
        }), r(1, t, "muted", function() {
            return t._muted;
        }, function(e) {
            e != t._muted && (e && t.stopAllSound(), t.musicMuted = e, t._muted = e);
        }), r(1, t, "musicMuted", function() {
            return t._musicMuted;
        }, function(e) {
            e != t._musicMuted && (e ? (t._bgMusic ? t._musicChannel && !t._musicChannel.isStopped ? fe.isConchApp ? t._musicChannel._audio && (t._musicChannel._audio.muted = !0) : t._musicChannel.pause() : t._musicChannel = null : t._musicChannel = null, 
            t._musicMuted = e) : (t._musicMuted = e, t._bgMusic && t._musicChannel && (fe.isConchApp ? t._musicChannel._audio && (t._musicChannel._audio.muted = !1) : t._musicChannel.resume())));
        }), r(1, t, "soundMuted", function() {
            return t._soundMuted;
        }, function(e) {
            t._soundMuted = e;
        }), t.__init__ = function() {
            var e = I.window, i = e.AudioContext || e.webkitAudioContext || e.mozAudioContext ? !0 : !1;
            return i && He.initWebAudio(), t._soundClass = i ? He : Fe, Fe._initMusicAudio(), 
            t._musicClass = Fe, i;
        }, t.addChannel = function(e) {
            t._channels.indexOf(e) >= 0 || t._channels.push(e);
        }, t.removeChannel = function(e) {
            var i = 0;
            for (i = t._channels.length - 1; i >= 0; i--) t._channels[i] == e && t._channels.splice(i, 1);
        }, t.disposeSoundLater = function(e) {
            t._lastSoundUsedTimeDic[e] = I.now(), t._isCheckingDispose || (t._isCheckingDispose = !0, 
            i.timer.loop(5e3, null, t._checkDisposeSound));
        }, t._checkDisposeSound = function() {
            var e, n = I.now(), s = !1;
            for (e in t._lastSoundUsedTimeDic) n - t._lastSoundUsedTimeDic[e] > 3e4 ? (delete t._lastSoundUsedTimeDic[e], 
            t.disposeSoundIfNotUsed(e)) : s = !0;
            s || (t._isCheckingDispose = !1, i.timer.clear(null, t._checkDisposeSound));
        }, t.disposeSoundIfNotUsed = function(e) {
            var i = 0;
            for (i = t._channels.length - 1; i >= 0; i--) if (t._channels[i].url == e) return;
            t.destroySound(e);
        }, t._visibilityChange = function() {
            i.stage.isVisibility ? t._stageOnFocus() : t._stageOnBlur();
        }, t._stageOnBlur = function() {
            t._isActive = !1, t._musicChannel && (t._musicChannel.isStopped || (t._blurPaused = !0, 
            t._musicChannel.pause())), t.stopAllSound(), i.stage.once("mousedown", null, t._stageOnFocus);
        }, t._recoverWebAudio = function() {
            He.ctx && "running" != He.ctx.state && He.ctx.resume && He.ctx.resume();
        }, t._stageOnFocus = function() {
            t._isActive = !0, t._recoverWebAudio(), i.stage.off("mousedown", null, t._stageOnFocus), 
            t._blurPaused && t._musicChannel && t._musicChannel.isStopped && (t._blurPaused = !1, 
            t._musicChannel.resume());
        }, t.playSound = function(e, n, s, r, o) {
            if (void 0 === n && (n = 1), void 0 === o && (o = 0), !t._isActive || !e) return null;
            if (t._muted) return null;
            if (t._recoverWebAudio(), e = ne.formatURL(e), e == t._bgMusic) {
                if (t._musicMuted) return null;
            } else {
                if (fe.isConchApp) {
                    var a = x.getFileExtension(e);
                    if ("wav" != a && "ogg" != a) return alert("The sound only supports wav or ogg format,for optimal performance reason,please refer to the official website document."), 
                    null;
                }
                if (t._soundMuted) return null;
            }
            var h;
            I.onMiniGame || (h = i.loader.getRes(e)), r || (r = t._soundClass), h || (h = new r(), 
            h.load(e), I.onMiniGame || Ye.cacheRes(e, h));
            var l;
            return (l = h.play(o, n)) ? (l.url = e, l.volume = e == t._bgMusic ? t.musicVolume : t.soundVolume, 
            l.completeHandler = s, l) : null;
        }, t.destroySound = function(t) {
            var e = i.loader.getRes(t);
            e && (Ye.clearRes(t), e.dispose());
        }, t.playMusic = function(e, i, n, s) {
            return void 0 === i && (i = 0), void 0 === s && (s = 0), e = ne.formatURL(e), t._bgMusic = e, 
            t._musicChannel && t._musicChannel.stop(), t._musicChannel = t.playSound(e, i, n, t._musicClass, s);
        }, t.stopSound = function(e) {
            e = ne.formatURL(e);
            var i, n = 0;
            for (n = t._channels.length - 1; n >= 0; n--) i = t._channels[n], i.url == e && i.stop();
        }, t.stopAll = function() {
            t._bgMusic = null;
            var e, i = 0;
            for (i = t._channels.length - 1; i >= 0; i--) e = t._channels[i], e.stop();
        }, t.stopAllSound = function() {
            var e, i = 0;
            for (i = t._channels.length - 1; i >= 0; i--) e = t._channels[i], e.url != t._bgMusic && e.stop();
        }, t.stopMusic = function() {
            t._musicChannel && t._musicChannel.stop(), t._bgMusic = null;
        }, t.setSoundVolume = function(e, i) {
            if (i) i = ne.formatURL(i), t._setVolume(i, e); else {
                t.soundVolume = e;
                var n, s = 0;
                for (s = t._channels.length - 1; s >= 0; s--) n = t._channels[s], n.url != t._bgMusic && (n.volume = e);
            }
        }, t.setMusicVolume = function(e) {
            t.musicVolume = e, t._setVolume(t._bgMusic, e);
        }, t._setVolume = function(e, i) {
            e = ne.formatURL(e);
            var n, s = 0;
            for (s = t._channels.length - 1; s >= 0; s--) n = t._channels[s], n.url == e && (n.volume = i);
        }, t.musicVolume = 1, t.soundVolume = 1, t.playbackRate = 1, t._useAudioMusic = !0, 
        t._muted = !1, t._soundMuted = !1, t._musicMuted = !1, t._bgMusic = null, t._musicChannel = null, 
        t._channels = [], t._autoStopMusic = !1, t._blurPaused = !1, t._isActive = !0, t._soundClass = null, 
        t._musicClass = null, t._lastSoundUsedTimeDic = {}, t._isCheckingDispose = !1, t.autoReleaseSound = !0, 
        t;
    }(), ae = function() {
        function t() {}
        return s(t, "laya.utils.Pool"), t.getPoolBySign = function(e) {
            return t._poolDic[e] || (t._poolDic[e] = []);
        }, t.clearBySign = function(e) {
            t._poolDic[e] && (t._poolDic[e].length = 0);
        }, t.recover = function(e, i) {
            i.__InPool || (i.__InPool = !0, t.getPoolBySign(e).push(i));
        }, t.recoverByClass = function(e) {
            if (e) {
                var i = e.__className || e.constructor._$gid;
                i && t.recover(i, e);
            }
        }, t._getClassSign = function(t) {
            var e = t.__className || t._$gid;
            return e || (t._$gid = e = x.getGID() + ""), e;
        }, t.createByClass = function(e) {
            return t.getItemByClass(t._getClassSign(e), e);
        }, t.getItemByClass = function(e, i) {
            if (!t._poolDic[e]) return new i();
            var n = t.getPoolBySign(e);
            if (n.length) {
                var s = n.pop();
                s.__InPool = !1;
            } else s = new i();
            return s;
        }, t.getItemByCreateFun = function(e, i, n) {
            var s = t.getPoolBySign(e), r = s.length ? s.pop() : i.call(n);
            return r.__InPool = !1, r;
        }, t.getItem = function(e) {
            var i = t.getPoolBySign(e), n = i.length ? i.pop() : null;
            return n && (n.__InPool = !1), n;
        }, t.POOLSIGN = "__InPool", t._poolDic = {}, t;
    }(), he = function() {
        function t() {
            this.json = null;
        }
        s(t, "laya.components.Prefab");
        var e = t.prototype;
        return e.create = function() {
            return this.json ? ge.createByData(null, this.json) : null;
        }, t;
    }(), le = function() {
        function t(e, i) {
            if (a.map[e]) return this._fun = a.map[e], this._next = t.NORENDER, void 0;
            switch (this._next = i || t.NORENDER, e) {
              case 0:
                return this._fun = this._no, void 0;

              case 1:
                return this._fun = this._alpha, void 0;

              case 2:
                return this._fun = this._transform, void 0;

              case 4:
                return this._fun = this._blend, void 0;

              case 8:
                return this._fun = this._canvas, void 0;

              case 32:
                return this._fun = this._mask, void 0;

              case 64:
                return this._fun = this._clip, void 0;

              case 128:
                return this._fun = this._style, void 0;

              case 512:
                return this._fun = this._graphics, void 0;

              case 8192:
                return this._fun = this._children, void 0;

              case 2048:
                return this._fun = this._custom, void 0;

              case 256:
                return this._fun = this._texture, void 0;

              case 16:
                return this._fun = T._filter, void 0;

              case 69905:
                return this._fun = t._initRenderFun, void 0;
            }
            this.onCreate(e);
        }
        s(t, "laya.renders.RenderSprite");
        var e = t.prototype;
        return e.onCreate = function() {}, e._style = function(t, e, i, n) {
            var s = t._style;
            null != s.render && s.render(t, e, i, n);
            var r = this._next;
            r._fun.call(r, t, e, i, n);
        }, e._no = function() {}, e._custom = function(t, e, i, n) {
            t.customRender(e, i, n), this._next._fun.call(this._next, t, e, i - t.pivotX, n - t.pivotY);
        }, e._clip = function(e, i, n, s) {
            var r = this._next;
            if (r != t.NORENDER) {
                var o = e._style.scrollRect;
                i.save(), i.clipRect(n, s, o.width, o.height), r._fun.call(r, e, i, n - o.x, s - o.y), 
                i.restore();
            }
        }, e._blend = function(t, e, i, n) {
            var s = t._style;
            s.blendMode && (e.globalCompositeOperation = s.blendMode);
            var r = this._next;
            r._fun.call(r, t, e, i, n), e.globalCompositeOperation = "source-over";
        }, e._mask = function(t, e, i, n) {
            var s = this._next;
            s._fun.call(s, t, e, i, n);
            var r = t.mask;
            r && (e.globalCompositeOperation = "destination-in", (r.numChildren > 0 || !r.graphics._isOnlyOne()) && (r.cacheAs = "bitmap"), 
            r.render(e, i - t._style.pivotX, n - t._style.pivotY)), e.globalCompositeOperation = "source-over";
        }, e._texture = function(e, i, n, s) {
            var r = e.texture;
            r._getSource() && i.drawTexture(r, n - e.pivotX + r.offsetX, s - e.pivotY + r.offsetY, e._width || r.width, e._height || r.height);
            var o = this._next;
            o != t.NORENDER && o._fun.call(o, e, i, n, s);
        }, e._graphics = function(e, i, n, s) {
            var r = e._style, o = e._graphics;
            o && o._render(e, i, n - r.pivotX, s - r.pivotY);
            var a = this._next;
            a != t.NORENDER && a._fun.call(a, e, i, n, s);
        }, e._image = function(t, e, i, n) {
            var s = t._style;
            e.drawTexture2(i, n, s.pivotX, s.pivotY, t.transform, t._graphics._one);
        }, e._image2 = function(t, e, i, n) {
            var s = t._style;
            e.drawTexture2(i, n, s.pivotX, s.pivotY, t.transform, t._graphics._one);
        }, e._alpha = function(t, e, i, n) {
            var s, r = t._style;
            if ((s = r.alpha) > .01 || t._needRepaint()) {
                var o = e.globalAlpha;
                e.globalAlpha *= s;
                var a = this._next;
                a._fun.call(a, t, e, i, n), e.globalAlpha = o;
            }
        }, e._transform = function(e, i, n, s) {
            {
                var r = e.transform, o = this._next;
                e._style;
            }
            r && o != t.NORENDER ? (i.save(), i.transform(r.a, r.b, r.c, r.d, r.tx + n, r.ty + s), 
            o._fun.call(o, e, i, 0, 0), i.restore()) : o != t.NORENDER && o._fun.call(o, e, i, n, s);
        }, e._children = function(t, e, i, n) {
            var s, r = t._style, o = t._children, a = o.length;
            i -= t.pivotX, n -= t.pivotY;
            var h = t._getBit(256) && e.drawCallOptimize(!0);
            if (r.viewport) {
                var l = r.viewport, u = l.x, c = l.y, _ = l.right, d = l.bottom, f = 0 / 0, p = 0 / 0;
                for (g = 0; a > g; ++g) (s = o[g])._visible && (f = s._x) < _ && f + s.width > u && (p = s._y) < d && p + s.height > c && s.render(e, i, n);
            } else for (var g = 0; a > g; ++g) (s = o[g])._visible && s.render(e, i, n);
            h && e.drawCallOptimize(!1);
        }, e._canvas = function(t, e, n, s) {
            var r = t._cacheStyle, o = this._next;
            if (!r.enableCanvasRender) return o._fun.call(o, t, e, n, s), void 0;
            "bitmap" === r.cacheAs ? z.canvasBitmap++ : z.canvasNormal++;
            var a = !1, h = !1;
            if (fe.isWebGL && r.canvas) {
                var l = r.canvas, u = (l.context, l.touches);
                if (u) for (var c = 0; c < u.length; c++) if (u[c].deleted) {
                    h = !0;
                    break;
                }
                a = l.isCacheValid && !l.isCacheValid();
            }
            if (t._needRepaint() || !r.canvas || h || a || i.stage.isGlobalRepaint()) if (fe.isWebGL && "normal" === r.cacheAs) {
                if (e._targets) return o._fun.call(o, t, e, n, s), void 0;
                this._canvas_webgl_normal_repaint(t, e);
            } else this._canvas_repaint(t, e, n, s);
            var _ = r.cacheRect;
            e.drawCanvas(r.canvas, n + _.x, s + _.y, _.width, _.height);
        }, e._canvas_repaint = function(t, e, i, n) {
            var s, r, o, a, h, l, u, c, _, d = t._cacheStyle, f = this._next, p = d.canvas, g = d.cacheAs;
            if (_ = d._calculateCacheRect(t, g, i, n), u = _.x, c = _.y, a = d.cacheRect, h = a.width * u, 
            l = a.height * c, r = a.x, o = a.y, fe.isWebGL && "bitmap" === g && (h > 2048 || l > 2048)) return console.warn("cache bitmap size larger than 2048,cache ignored"), 
            d.releaseContext(), f._fun.call(f, t, e, i, n), void 0;
            if (p || (d.createContext(), p = d.canvas), s = p.context, s.sprite = t, (p.width != h || p.height != l) && p.size(h, l), 
            "bitmap" === g ? s.asBitmap = !0 : "normal" === g && (s.asBitmap = !1), s.clear(), 
            1 != u || 1 != c) {
                var m = s;
                m.save(), m.scale(u, c), f._fun.call(f, t, s, -r, -o), m.restore(), t._applyFilters();
            } else m = s, f._fun.call(f, t, s, -r, -o), t._applyFilters();
            d.staticCache && (d.reCache = !1), z.canvasReCache++;
        }, e._canvas_webgl_normal_repaint = function(t, e) {
            {
                var n = t._cacheStyle, s = this._next, r = n.canvas, o = n.cacheAs;
                n._calculateCacheRect(t, o, 0, 0);
            }
            r || (r = n.canvas = new i.WebGLCacheAsNormalCanvas(e, t));
            var a = r.context;
            r.startRec(), s._fun.call(s, t, a, t.pivotX, t.pivotY), t._applyFilters(), z.canvasReCache++, 
            r.endRec();
        }, t.__init__ = function() {
            a.__init__();
            var e, i = 0, n = 0;
            for (e = re.createRenderSprite(69905, null), n = t.renders.length = 16384, i = 0; n > i; i++) t.renders[i] = e;
            t.renders[0] = re.createRenderSprite(0, null);
        }, t._initRenderFun = function(e, i, n, s) {
            var r = e._renderType, o = t.renders[r] = t._getTypeRender(r);
            o._fun(e, i, n, s);
        }, t._getTypeRender = function(t) {
            if (a.map[t]) return re.createRenderSprite(t, null);
            for (var e = null, i = 8192; i > 0; ) i & t && (e = re.createRenderSprite(i, e)), 
            i >>= 1;
            return e;
        }, t.INIT = 69905, t.renders = [], t.NORENDER = new t(0, null), t;
    }(), ue = function() {
        function t(t) {
            this.scale = 1, this.currFrame = 0, this._delta = 0, this._map = [], this._handlers = [], 
            this._temp = [], this._count = 0, this.currTimer = I.now(), this._lastTimer = I.now(), 
            void 0 === t && (t = !0), t && i.systemTimer && i.systemTimer.frameLoop(1, this, this._update);
        }
        var e;
        s(t, "laya.utils.Timer");
        var n = t.prototype;
        return n._update = function() {
            if (this.scale <= 0) return this._lastTimer = I.now(), void 0;
            var t = this.currFrame = this.currFrame + this.scale, e = I.now();
            this._delta = (e - this._lastTimer) * this.scale;
            var i = this.currTimer = this.currTimer + this._delta;
            this._lastTimer = e;
            var n = this._handlers;
            this._count = 0;
            for (var s = 0, r = n.length; r > s; s++) {
                var o = n[s];
                if (null !== o.method) {
                    var a = o.userFrame ? t : i;
                    if (a >= o.exeTime) if (o.repeat) if (o.jumpFrame) for (;a >= o.exeTime; ) o.exeTime += o.delay, 
                    o.run(!1); else o.exeTime += o.delay, o.run(!1), a > o.exeTime && (o.exeTime += Math.ceil((a - o.exeTime) / o.delay) * o.delay); else o.run(!0);
                } else this._count++;
            }
            (this._count > 30 || t % 200 === 0) && this._clearHandlers();
        }, n._clearHandlers = function() {
            for (var t = this._handlers, e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                null !== n.method ? this._temp.push(n) : this._recoverHandler(n);
            }
            this._handlers = this._temp, t.length = 0, this._temp = t;
        }, n._recoverHandler = function(e) {
            this._map[e.key] == e && (this._map[e.key] = null), e.clear(), t._pool.push(e);
        }, n._create = function(i, n, s, r, o, a, h) {
            if (!s) return o.apply(r, a), null;
            if (h) {
                var l = this._getHandler(r, o);
                if (l) return l.repeat = n, l.userFrame = i, l.delay = s, l.caller = r, l.method = o, 
                l.args = a, l.exeTime = s + (i ? this.currFrame : this.currTimer + I.now() - this._lastTimer), 
                l;
            }
            return l = t._pool.length > 0 ? t._pool.pop() : new e(), l.repeat = n, l.userFrame = i, 
            l.delay = s, l.caller = r, l.method = o, l.args = a, l.exeTime = s + (i ? this.currFrame : this.currTimer + I.now() - this._lastTimer), 
            this._indexHandler(l), this._handlers.push(l), l;
        }, n._indexHandler = function(e) {
            var i = e.caller, n = e.method, s = i ? i.$_GID || (i.$_GID = x.getGID()) : 0, r = n.$_TID || (n.$_TID = 1e5 * t._mid++);
            e.key = s + r, this._map[e.key] = e;
        }, n.once = function(t, e, i, n, s) {
            void 0 === s && (s = !0), this._create(!1, !1, t, e, i, n, s);
        }, n.loop = function(t, e, i, n, s, r) {
            void 0 === s && (s = !0), void 0 === r && (r = !1);
            var o = this._create(!1, !0, t, e, i, n, s);
            o && (o.jumpFrame = r);
        }, n.frameOnce = function(t, e, i, n, s) {
            void 0 === s && (s = !0), this._create(!0, !1, t, e, i, n, s);
        }, n.frameLoop = function(t, e, i, n, s) {
            void 0 === s && (s = !0), this._create(!0, !0, t, e, i, n, s);
        }, n.toString = function() {
            return " handlers:" + this._handlers.length + " pool:" + t._pool.length;
        }, n.clear = function(t, e) {
            var i = this._getHandler(t, e);
            i && (this._map[i.key] = null, i.key = 0, i.clear());
        }, n.clearAll = function(t) {
            if (t) for (var e = 0, i = this._handlers.length; i > e; e++) {
                var n = this._handlers[e];
                n.caller === t && (this._map[n.key] = null, n.key = 0, n.clear());
            }
        }, n._getHandler = function(e, i) {
            var n = e ? e.$_GID || (e.$_GID = x.getGID()) : 0, s = i.$_TID || (i.$_TID = 1e5 * t._mid++);
            return this._map[n + s];
        }, n.callLater = function(t, e, i) {
            Y.I.callLater(t, e, i);
        }, n.runCallLater = function(t, e) {
            Y.I.runCallLater(t, e);
        }, n.runTimer = function(t, e) {
            var i = this._getHandler(t, e);
            i && null != i.method && (this._map[i.key] = null, i.run(!0));
        }, n.pause = function() {
            this.scale = 0;
        }, n.resume = function() {
            this.scale = 1;
        }, r(0, n, "delta", function() {
            return this._delta;
        }), t._pool = [], t._mid = 1, t.__init$ = function() {
            e = function() {
                function t() {
                    this.key = 0, this.repeat = !1, this.delay = 0, this.userFrame = !1, this.exeTime = 0, 
                    this.caller = null, this.method = null, this.args = null, this.jumpFrame = !1;
                }
                s(t, "");
                var e = t.prototype;
                return e.clear = function() {
                    this.caller = null, this.method = null, this.args = null;
                }, e.run = function(t) {
                    var e = this.caller;
                    if (e && e.destroyed) return this.clear();
                    var i = this.method, n = this.args;
                    t && this.clear(), null != i && (n ? i.apply(e, n) : i.call(e));
                }, t;
            }();
        }, t;
    }(), ce = function() {
        function t() {}
        s(t, "laya.display.cmd.FillBorderTextCmd");
        var e = t.prototype;
        return e.recover = function() {
            ae.recover("FillBorderTextCmd", this);
        }, e.run = function(t, e, i) {
            t.fillBorderText(this.text, this.x + e, this.y + i, this.font, this.fillColor, this.borderColor, this.lineWidth, this.textAlign);
        }, r(0, e, "cmdID", function() {
            return "FillBorderText";
        }), t.create = function(e, i, n, s, r, o, a, h) {
            var l = ae.getItemByClass("FillBorderTextCmd", t);
            return l.text = e, l.x = i, l.y = n, l.font = s, l.fillColor = r, l.borderColor = o, 
            l.lineWidth = a, l.textAlign = h, l;
        }, t.ID = "FillBorderText", t;
    }(), _e = function() {
        function t() {}
        s(t, "laya.display.cmd.FillTextureCmd");
        var e = t.prototype;
        return e.recover = function() {
            this.texture = null, this.offset = null, this.other = null, ae.recover("FillTextureCmd", this);
        }, e.run = function(t, e, i) {
            t.fillTexture(this.texture, this.x + e, this.y + i, this.width, this.height, this.type, this.offset, this.other);
        }, r(0, e, "cmdID", function() {
            return "FillTexture";
        }), t.create = function(e, i, n, s, r, o, a, h) {
            var l = ae.getItemByClass("FillTextureCmd", t);
            return l.texture = e, l.x = i, l.y = n, l.width = s, l.height = r, l.type = o, l.offset = a, 
            l.other = h, l;
        }, t.ID = "FillTexture", t;
    }(), de = function() {
        function t() {}
        s(t, "laya.display.cmd.FillBorderWordsCmd");
        var e = t.prototype;
        return e.recover = function() {
            this.words = null, ae.recover("FillBorderWordsCmd", this);
        }, e.run = function(t, e, i) {
            t.fillBorderWords(this.words, this.x + e, this.y + i, this.font, this.fillColor, this.borderColor, this.lineWidth);
        }, r(0, e, "cmdID", function() {
            return "FillBorderWords";
        }), t.create = function(e, i, n, s, r, o, a) {
            var h = ae.getItemByClass("FillBorderWordsCmd", t);
            return h.words = e, h.x = i, h.y = n, h.font = s, h.fillColor = r, h.borderColor = o, 
            h.lineWidth = a, h;
        }, t.ID = "FillBorderWords", t;
    }(), fe = function() {
        function e(t, n) {
            function s() {
                i.stage._loop(), I.window.requestAnimationFrame(s);
            }
            this._timeId = 0, e._mainCanvas.source.id = "layaCanvas", e._mainCanvas.source.width = t, 
            e._mainCanvas.source.height = n, laya.renders.Render.isConchApp ? I.document.body.appendChild(e._mainCanvas.source) : I.onKGMiniGame || I.container.appendChild(e._mainCanvas.source), 
            re.initRender(e._mainCanvas, t, n), I.window.requestAnimationFrame(s), i.stage.on("visibilitychange", this, this._onVisibilitychange);
        }
        s(e, "laya.renders.Render");
        var n = e.prototype;
        return n._onVisibilitychange = function() {
            i.stage.isVisibility ? 0 != this._timeId && I.window.clearInterval(this._timeId) : this._timeId = I.window.setInterval(this._enterFrame, 1e3);
        }, n._enterFrame = function() {
            i.stage._loop();
        }, r(1, e, "context", function() {
            return e._context;
        }), r(1, e, "canvas", function() {
            return e._mainCanvas.source;
        }), e._context = null, e._mainCanvas = null, e.supportWebGLPlusCulling = !1, e.supportWebGLPlusAnimation = !1, 
        e.supportWebGLPlusRendering = !1, e.isConchApp = !1, e.isWebGL = !1, e.is3DMode = !1, 
        e.__init$ = function() {
            e.isConchApp = null != t.conch, e.isConchApp && (e.supportWebGLPlusCulling = !0, 
            e.supportWebGLPlusAnimation = !0, e.supportWebGLPlusRendering = !0);
        }, e;
    }(), pe = (function() {
        function t() {
            this._graphicsCmdEncoder = null, this._index = 0, this._paramData = null, this.texture = null, 
            this.x = 0 / 0, this.y = 0 / 0, this.width = 0 / 0, this.height = 0 / 0;
        }
        s(t, "laya.display.cmd.DrawCanvasCmd");
        var e = t.prototype;
        return e.recover = function() {
            this._graphicsCmdEncoder = null, ae.recover("DrawCanvasCmd", this);
        }, r(0, e, "cmdID", function() {
            return "DrawCanvasCmd";
        }), t.create = function() {
            return null;
        }, t.ID = "DrawCanvasCmd", t._DRAW_IMAGE_CMD_ENCODER_ = null, t._PARAM_TEXTURE_POS_ = 2, 
        t._PARAM_VB_POS_ = 5, t;
    }(), function() {
        function t() {}
        s(t, "laya.resource.Context");
        var e = t.prototype;
        return e.drawCanvas = function(t, e, i, n, s) {
            z.renderBatches++, this.drawImage(t._source, e, i, n, s);
        }, e._drawRect = function(t, e, i, n, s) {
            z.renderBatches++, s && (this.fillStyle = s), this.fillRect(t, e, i, n);
        }, e.drawText = function(t, e, i, n, s, r) {
            z.renderBatches++, arguments.length > 3 && null != n && (this.font = n, this.fillStyle = s, 
            this.textAlign = r, this.textBaseline = "top"), this.fillText(t, e, i);
        }, e.fillBorderText = function(t, e, i, n, s, r, o, a) {
            z.renderBatches++, this.font = n, this.fillStyle = s, this.textBaseline = "top", 
            this.strokeStyle = r, this.lineWidth = o, this.textAlign = a, this.strokeText(t, e, i), 
            this.fillText(t, e, i);
        }, e.fillWords = function(t, e, i, n, s) {
            n && (this.font = n), s && (this.fillStyle = s), this.textBaseline = "top", this.textAlign = "left";
            for (var r = 0, o = t.length; o > r; r++) {
                var a = t[r];
                this.fillText(a.char, a.x + e, a.y + i);
            }
        }, e.fillBorderWords = function(t, e, i, n, s, r, o) {
            n && (this.font = n), s && (this.fillStyle = s), this.textBaseline = "top", this.lineWidth = o, 
            this.textAlign = "left", this.strokeStyle = r;
            for (var a = 0, h = t.length; h > a; a++) {
                var l = t[a];
                this.strokeText(l.char, l.x + e, l.y + i), this.fillText(l.char, l.x + e, l.y + i);
            }
        }, e.strokeWord = function(t, e, i, n, s, r, o) {
            z.renderBatches++, arguments.length > 3 && null != n && (this.font = n, this.strokeStyle = s, 
            this.lineWidth = r, this.textAlign = o, this.textBaseline = "top"), this.strokeText(t, e, i);
        }, e.setTransformByMatrix = function(t) {
            this.setTransform(t.a, t.b, t.c, t.d, t.tx, t.ty);
        }, e.clipRect = function(t, e, i, n) {
            z.renderBatches++, this.beginPath(), this.rect(t, e, i, n), this.clip();
        }, e.drawTextureWithTransform = function(t, e, i, n, s, r, o, a, h, l) {
            if (t._getSource()) {
                z.renderBatches++;
                var u = 1 !== h;
                if (u) {
                    var c = this.globalAlpha;
                    this.globalAlpha *= h;
                }
                l && (this.globalCompositeOperation = l);
                var _ = t.uv, d = t.bitmap._width, f = t.bitmap._height;
                r ? (this.save(), this.transform(r.a, r.b, r.c, r.d, r.tx + o, r.ty + a), this.drawImage(t.bitmap._source, _[0] * d, _[1] * f, (_[2] - _[0]) * d, (_[5] - _[3]) * f, e, i, n, s), 
                this.restore()) : this.drawImage(t.bitmap._source, _[0] * d, _[1] * f, (_[2] - _[0]) * d, (_[5] - _[3]) * f, o + e, a + i, n, s), 
                u && (this.globalAlpha = c), l && (this.globalCompositeOperation = "source-over");
            }
        }, e.drawTextureWithSizeGrid = function(t, e, i, n, s, r, o, a) {
            if (t._getSource()) {
                z.renderBatches++, e += o, i += a;
                var h = (t.uv, t.bitmap._width), l = t.bitmap._height, u = r[0], c = r[1], _ = r[2], d = r[3], f = (r[4], 
                !1);
                if (n == h && (d = c = 0), s == l && (u = _ = 0), d + c > n) {
                    var p = n;
                    f = !0, n = d + c, this.save(), this.clipRect(0 + e, 0 + i, p, s);
                }
                d && u && this.drawRect(0 + e, 0 + i, d, u, "#ff0000", null, 0), c && u && this.drawRect(n - c + e, 0 + i, c, u, "#ff0000", null, 0), 
                d && _ && this.drawRect(0 + e, s - _ + i, d, _, "#ff0000", null, 0), c && _ && this.drawRect(n - c + e, s - _ + i, c, _, "#ff0000", null, 0), 
                u && this.drawRect(d + e, 0 + i, n - d - c, u, "#ffff00", null, 0), _ && this.drawRect(d + e, s - _ + i, n - d - c, _, "#ffff00", null, 0), 
                d && this.drawRect(0 + e, u + i, d, s - u - _, "#ffff00", null, 0), c && this.drawRect(n - c + e, u + i, c, s - u - _, "#ffff00", null, 0), 
                this.drawRect(d + e, u + i, n - d - c, s - u - _, "#ff00ff", null, 0), f && this.restore();
            }
        }, e.drawTexture2 = function(t, e, i, n, s, r) {
            var o = r[0];
            z.renderBatches++;
            var a = o.uv, h = o.bitmap._width, l = o.bitmap._height;
            s ? (this.save(), this.transform(s.a, s.b, s.c, s.d, s.tx + t, s.ty + e), this.drawImage(o.bitmap._source, a[0] * h, a[1] * l, (a[2] - a[0]) * h, (a[5] - a[3]) * l, r[1] - i, r[2] - n, r[3], r[4]), 
            this.restore()) : this.drawImage(o.bitmap._source, a[0] * h, a[1] * l, (a[2] - a[0]) * h, (a[5] - a[3]) * l, r[1] - i + t, r[2] - n + e, r[3], r[4]);
        }, e.fillTexture = function(t, e, i, n, s, r, o, a) {
            if (!a.pat) {
                if (t.uv != Ue.DEF_UV) {
                    var h = new qe();
                    h.getContext("2d"), h.size(t.width, t.height), h.context.drawTexture(t, 0, 0, t.width, t.height), 
                    t = new Ue(h);
                }
                a.pat = this.createPattern(t.bitmap._source, r);
            }
            var l = e, u = i, c = 0, _ = 0;
            o && (l += o.x % t.width, u += o.y % t.height, c -= o.x % t.width, _ -= o.y % t.height), 
            this.translate(l, u), this._drawRect(c, _, n, s, a.pat), this.translate(-l, -u);
        }, e.flush = function() {
            return 0;
        }, e.destroy = function() {
            this.canvas.width = this.canvas.height = 0;
        }, e.clear = function() {
            this.clearRect(0, 0, fe._mainCanvas.width, fe._mainCanvas.height);
        }, e.drawTriangle = function(t, e, i, n, s, r, o, a) {
            var h = t.bitmap, l = h._getSource(), u = t.width, c = t.height, _ = h.width, d = h.height, f = i[n] * _, p = i[s] * _, g = i[r] * _, m = i[n + 1] * d, v = i[s + 1] * d, y = i[r + 1] * d, x = e[n], w = e[s], T = e[r], C = e[n + 1], b = e[s + 1], S = e[r + 1];
            if (a) {
                var I = 1, M = 1, D = (x + w + T) / 3, A = (C + b + S) / 3, P = x - D, L = C - A, E = Math.sqrt(P * P + L * L);
                x = D + P / E * (E + I), C = A + L / E * (E + M), P = w - D, L = b - A, E = Math.sqrt(P * P + L * L), 
                w = D + P / E * (E + I), b = A + L / E * (E + M), P = T - D, L = S - A, E = Math.sqrt(P * P + L * L), 
                T = D + P / E * (E + I), S = A + L / E * (E + M);
            }
            this.save(), o && this.transform(o.a, o.b, o.c, o.d, o.tx, o.ty), this.beginPath(), 
            this.moveTo(x, C), this.lineTo(w, b), this.lineTo(T, S), this.closePath(), this.clip();
            var R = f * v + m * g + p * y - v * g - m * p - f * y, B = 1 / R, F = x * v + m * T + w * y - v * T - m * w - x * y, O = f * w + x * g + p * T - w * g - x * p - f * T, k = f * v * T + m * w * g + x * p * y - x * v * g - m * p * T - f * w * y, N = C * v + m * S + b * y - v * S - m * b - C * y, W = f * b + C * g + p * S - b * g - C * p - f * S, U = f * v * S + m * b * g + C * p * y - C * v * g - m * p * S - f * b * y;
            this.transform(F * B, N * B, O * B, W * B, k * B, U * B), this.drawImage(l, t.uv[0] * _, t.uv[1] * d, u, c, t.uv[0] * _, t.uv[1] * d, u, c), 
            this.restore();
        }, e.transformByMatrix = function(t, e, i) {
            this.transform(t.a, t.b, t.c, t.d, t.tx + e, t.ty + i);
        }, e.saveTransform = function() {
            this.save();
        }, e.restoreTransform = function() {
            this.restore();
        }, e.drawRect = function(t, e, i, n, s, r, o) {
            var a = this;
            null != s && (a.fillStyle = s, a.fillRect(t, e, i, n)), null != r && (a.strokeStyle = r, 
            a.lineWidth = o, a.strokeRect(t, e, i, n));
        }, e.drawTexture = function(t, e, i, n, s) {
            var r = t._getSource();
            if (r) {
                z.renderBatches++;
                var o = t.uv, a = t.bitmap.width, h = t.bitmap.height;
                this.drawImage(r, o[0] * a, o[1] * h, (o[2] - o[0]) * a, (o[5] - o[3]) * h, e, i, n, s);
            }
        }, e.drawTextures = function(t, e, i, n) {
            z.renderBatches += e.length / 2;
            for (var s = t.width, r = t.height, o = 0, a = e.length; a > o; o += 2) this.drawTexture(t, e[o] + i, e[o + 1] + n, s, r);
        }, e.drawTriangles = function(t, e, i, n, s, r, o) {
            var a = 0, h = r.length;
            for (this.translate(e, i), a = 0; h > a; a += 3) {
                var l = 2 * r[a], u = 2 * r[a + 1], c = 2 * r[a + 2];
                this.drawTriangle(t, n, s, l, u, c, o, !0);
            }
            this.translate(-e, -i);
        }, e.alpha = function(t) {
            this.globalAlpha *= t;
        }, e._transform = function(t, e, i) {
            this.translate(e, i), this.transform(t.a, t.b, t.c, t.d, t.tx, t.ty), this.translate(-e, -i);
        }, e._rotate = function(t, e, i) {
            this.translate(e, i), this.rotate(t), this.translate(-e, -i);
        }, e._scale = function(t, e, i, n) {
            this.translate(i, n), this.scale(t, e), this.translate(-i, -n);
        }, e._drawLine = function(t, e, i, n, s, r, o, a) {
            this.beginPath(), this.strokeStyle = o, this.lineWidth = a, this.moveTo(t + i, e + n), 
            this.lineTo(t + s, e + r), this.stroke();
        }, e._drawLines = function(t, e, i, n, s, r) {
            fe.isWebGL && this.setPathId(r), this.beginPath(), this.strokeStyle = n, this.lineWidth = s;
            var o = 2, a = i.length;
            if (fe.isWebGL) this.addPath(i.slice(), !1, !1, t, e); else for (this.moveTo(t + i[0], e + i[1]); a > o; ) this.lineTo(t + i[o++], e + i[o++]);
            this.stroke();
        }, e.drawCurves = function(t, e, i, n, s) {
            this.beginPath(), this.strokeStyle = n, this.lineWidth = s, this.moveTo(t + i[0], e + i[1]);
            for (var r = 2, o = i.length; o > r; ) this.quadraticCurveTo(t + i[r++], e + i[r++], t + i[r++], e + i[r++]);
            this.stroke();
        }, e._fillAndStroke = function(t, e, i, n) {
            void 0 === n && (n = !1), null != t && (this.fillStyle = t, this.fill()), null != e && i > 0 && (this.strokeStyle = e, 
            this.lineWidth = i, this.stroke());
        }, e._drawCircle = function(e, i, n, s, r, o) {
            z.renderBatches++, fe.isWebGL ? this.beginPath(!0) : this.beginPath(), this.arc(e, i, n, 0, t.PI2), 
            this.closePath(), this._fillAndStroke(s, r, o);
        }, e._drawPie = function(t, e, i, n, s, r, o, a) {
            this.beginPath(), this.moveTo(t, e), this.arc(t, e, i, n, s), this.closePath(), 
            this._fillAndStroke(r, o, a);
        }, e._drawPoly = function(t, e, i, n, s, r, o, a) {
            var h = 2, l = i.length;
            if (this.beginPath(), fe.isWebGL) this.setPathId(a), this.addPath(i.slice(), !0, o, t, e); else for (this.moveTo(t + i[0], e + i[1]); l > h; ) this.lineTo(t + i[h++], e + i[h++]);
            this.closePath(), this._fillAndStroke(n, s, r, o);
        }, e._drawPath = function(t, e, i, n, s) {
            this.beginPath();
            for (var r = 0, o = i.length; o > r; r++) {
                var a = i[r];
                switch (a[0]) {
                  case "moveTo":
                    this.moveTo(t + a[1], e + a[2]);
                    break;

                  case "lineTo":
                    this.lineTo(t + a[1], e + a[2]);
                    break;

                  case "arcTo":
                    this.arcTo(t + a[1], e + a[2], t + a[3], e + a[4], a[5]);
                    break;

                  case "closePath":
                    this.closePath();
                }
            }
            null != n && (this.fillStyle = n.fillStyle, this.fill()), null != s && (this.strokeStyle = s.strokeStyle, 
            this.lineWidth = s.lineWidth || 1, this.lineJoin = s.lineJoin, this.lineCap = s.lineCap, 
            this.miterLimit = s.miterLimit, this.stroke());
        }, e.drawParticle = function() {}, t.__init__ = function(t) {
            var e = laya.resource.Context.prototype;
            if (t = t || CanvasRenderingContext2D.prototype, !t.init2d) {
                t.init2d = !0;
                var i = [ "saveTransform", "restoreTransform", "transformByMatrix", "drawTriangles", "drawTriangle", "drawTextures", "fillWords", "fillBorderWords", "drawRect", "strokeWord", "drawText", "fillTexture", "setTransformByMatrix", "clipRect", "drawTexture", "drawTexture2", "drawTextureWithTransform", "drawTextureWithSizeGrid", "flush", "clear", "destroy", "drawCanvas", "fillBorderText", "drawCurves", "_drawRect", "alpha", "_transform", "_rotate", "_scale", "_drawLine", "_drawLines", "_drawCircle", "_fillAndStroke", "_drawPie", "_drawPoly", "_drawPath", "drawTextureWithTransform" ];
                i.forEach(function(i) {
                    t[i] = e[i];
                });
            }
        }, t.ENUM_TEXTALIGN_DEFAULT = 0, t.ENUM_TEXTALIGN_CENTER = 1, t.ENUM_TEXTALIGN_RIGHT = 2, 
        t.PI2 = 2 * Math.PI, t;
    }()), ge = function() {
        function t() {}
        var e, r;
        return s(t, "laya.utils.SceneUtils"), t.getBindFun = function(e) {
            var n = t._funMap.get(e);
            if (null == n) {
                var s = '"' + e + '"';
                s = s.replace(/^"\${|}"$/g, "").replace(/\${/g, '"+').replace(/}/g, '+"');
                var r = "(function(data){if(data==null)return;with(data){try{\nreturn " + s + "\n}catch(e){}}})";
                n = i._runScript(r), t._funMap.set(e, n);
            }
            return n;
        }, t.createByData = function(e, i) {
            var n = r.create();
            if (e = t.createComp(i, e, e, null, n), e._setBit(8, !0), e.hasOwnProperty("_idMap") && (e._idMap = n._idMap), 
            i.animations) {
                var s, o, a = [], h = i.animations, l = 0, u = h.length;
                for (l = 0; u > l; l++) {
                    switch (s = new ni(), o = h[l], s._setUp(n._idMap, o), e[o.name] = s, s._setControlNode(e), 
                    o.action) {
                      case 1:
                        s.play(0, !1);
                        break;

                      case 2:
                        s.play(0, !0);
                    }
                    a.push(s);
                }
                e._aniList = a;
            }
            return "Scene" === e._$componentType && e._width > 0 && null == i.props.hitTestPrior && !e.mouseThrough && (e.hitTestPrior = !0), 
            n.beginLoad(e), e;
        }, t.createInitTool = function() {
            return r.create();
        }, t.createComp = function(e, n, s, r, o) {
            if ("Scene3D" == e.type || "Sprite3D" == e.type) {
                var a = [], h = i.Utils3D._createSceneByJsonForMaker(e, a, o);
                return "Sprite3D" == e.type ? i.StaticBatchManager.combine(h, a) : i.StaticBatchManager.combine(null, a), 
                h;
            }
            if (n = n || t.getCompInstance(e), !n) return e.props && e.props.runtime ? console.warn("runtime not found:" + e.props.runtime) : console.warn("can not create:" + e.type), 
            null;
            var l = e.child;
            if (l) for (var u = "List" == n._$componentType, c = 0, _ = l.length; _ > c; c++) {
                var d = l[c];
                if (!n.hasOwnProperty("itemRender") || "render" != d.props.name && "render" !== d.props.renderType) if ("Graphic" == d.type) Me._addGraphicsToSprite(d, n); else if (Me._isDrawType(d.type)) Me._addGraphicToSprite(d, n, !0); else {
                    if (u) {
                        var f = [], p = t.createComp(d, null, s, f, o);
                        f.length && (p._$bindData = f);
                    } else p = t.createComp(d, null, s, r, o);
                    "Script" == d.type ? p instanceof laya.components.Component ? n._addComponentInstance(p) : "owner" in p ? p.owner = n : "target" in p && (p.target = n) : "mask" == d.props.renderType || "mask" == d.props.name ? n.mask = p : p instanceof laya.display.Node && n.addChild(p);
                } else n.itemRender = d;
            }
            var g = e.props;
            for (var m in g) {
                var v = g[m];
                "string" == typeof v && (v.indexOf("@node:") >= 0 || v.indexOf("@Prefab:") >= 0) ? o && o.addNodeRef(n, m, v) : t.setCompValue(n, m, v, s, r);
            }
            return n._afterInited && n._afterInited(), e.compId && o && o._idMap && (o._idMap[e.compId] = n), 
            n;
        }, t.setCompValue = function(i, n, s, r, o) {
            if ("string" == typeof s && s.indexOf("${") > -1) {
                if (t._sheet || (t._sheet = Me.getClass("laya.data.Table")), !t._sheet) return console.warn("Can not find class Sheet"), 
                void 0;
                if (o) o.push(i, n, s); else if (r) {
                    -1 == s.indexOf("].") && (s = s.replace(".", "[0]."));
                    var a = new e(i, n, s);
                    a.exe(r);
                    for (var h, l, u = s.replace(/\[.*?\]\./g, "."); null != (h = t._parseWatchData.exec(u)); ) {
                        for (var c = h[1]; null != (l = t._parseKeyWord.exec(c)); ) {
                            var _ = l[0], d = r._watchMap[_] || (r._watchMap[_] = []);
                            d.push(a), t._sheet.I.notifer.on(_, r, r.changeData, [ _ ]);
                        }
                        d = r._watchMap[c] || (r._watchMap[c] = []), d.push(a), t._sheet.I.notifer.on(c, r, r.changeData, [ c ]);
                    }
                }
            } else "var" === n && r ? r[s] = i : i[n] = "true" === s ? !0 : "false" === s ? !1 : s;
        }, t.getCompInstance = function(e) {
            if ("UIView" == e.type && e.props && e.props.pageData) return t.createByData(null, e.props.pageData);
            var i = e.props && e.props.runtime || e.type, n = Me.getClass(i);
            if (!n) throw "Can not find class " + i;
            if ("Script" === e.type && n.prototype._doAwake) {
                var s = ae.createByClass(n);
                return s._destroyed = !1, s;
            }
            return e.props && e.props.hasOwnProperty("renderType") && "instance" == e.props.renderType ? (n.instance || (n.instance = new n()), 
            n.instance) : new n();
        }, t._sheet = null, n(t, [ "_funMap", function() {
            return this._funMap = new Ce();
        }, "_parseWatchData", function() {
            return this._parseWatchData = /\${(.*?)}/g;
        }, "_parseKeyWord", function() {
            return this._parseKeyWord = /[a-zA-Z_][a-zA-Z0-9_]*(?:(?:\.[a-zA-Z_][a-zA-Z0-9_]*)+)/g;
        } ]), t.__init$ = function() {
            e = function() {
                function e(t, e, i) {
                    this.comp = null, this.prop = null, this.value = null, this.comp = t, this.prop = e, 
                    this.value = i;
                }
                s(e, "");
                var i = e.prototype;
                return i.exe = function(e) {
                    var i = t.getBindFun(this.value);
                    this.comp[this.prop] = i.call(this, e);
                }, e;
            }(), r = function() {
                function t() {
                    this._nodeRefList = null, this._initList = null, this._loadList = null, this._idMap = null, 
                    this._scene = null;
                }
                s(t, "");
                var e = t.prototype;
                return e.reset = function() {
                    this._nodeRefList = null, this._initList = null, this._idMap = null, this._loadList = null, 
                    this._scene = null;
                }, e.recover = function() {
                    this.reset(), ae.recover("InitTool", this);
                }, e.addLoadRes = function(t, e) {
                    this._loadList || (this._loadList = []), e ? this._loadList.push({
                        url: t,
                        type: e
                    }) : this._loadList.push(t);
                }, e.addNodeRef = function(t, e, i) {
                    this._nodeRefList || (this._nodeRefList = []), this._nodeRefList.push([ t, e, i ]), 
                    i.indexOf("@Prefab:") >= 0 && this.addLoadRes(i.replace("@Prefab:", ""), "prefab");
                }, e.setNodeRef = function() {
                    if (this._nodeRefList) {
                        if (!this._idMap) return this._nodeRefList = null, void 0;
                        var t = 0, e = 0;
                        e = this._nodeRefList.length;
                        var i;
                        for (t = 0; e > t; t++) i = this._nodeRefList[t], i[0][i[1]] = this.getReferData(i[2]);
                        this._nodeRefList = null;
                    }
                }, e.getReferData = function(t) {
                    if (t.indexOf("@Prefab:") >= 0) {
                        var e;
                        return e = Ye.getRes(t.replace("@Prefab:", ""));
                    }
                    if (t.indexOf("@arr:") >= 0) {
                        t = t.replace("@arr:", "");
                        var i;
                        i = t.split(",");
                        var n, s = 0, r = 0;
                        for (r = i.length, s = 0; r > s; s++) n = i[s], i[s] = n ? this._idMap[n.replace("@node:", "")] : null;
                        return i;
                    }
                    return this._idMap[t.replace("@node:", "")];
                }, e.addInitItem = function(t) {
                    this._initList || (this._initList = []), this._initList.push(t);
                }, e.doInits = function() {
                    this._initList && (this._initList = null);
                }, e.finish = function() {
                    this.setNodeRef(), this.doInits(), this._scene._setBit(8, !1), this._scene.parent && this._scene.parent.activeInHierarchy && this._scene.active && this._scene._processActive(), 
                    this._scene.event("onViewCreated"), this.recover();
                }, e.beginLoad = function(t) {
                    this._scene = t, !this._loadList || this._loadList.length < 1 ? this.finish() : i.loader.load(this._loadList, d.create(this, this.finish));
                }, t.create = function() {
                    var e = ae.getItemByClass("InitTool", t);
                    return e._idMap = [], e;
                }, t;
            }();
        }, t;
    }(), me = function() {
        function t() {}
        s(t, "laya.display.cmd.DrawTexturesCmd");
        var e = t.prototype;
        return e.recover = function() {
            this.texture._removeReference(), this.texture = null, this.pos = null, ae.recover("DrawTexturesCmd", this);
        }, e.run = function(t, e, i) {
            t.drawTextures(this.texture, this.pos, e, i);
        }, r(0, e, "cmdID", function() {
            return "DrawTextures";
        }), t.create = function(e, i) {
            var n = ae.getItemByClass("DrawTexturesCmd", t);
            return n.texture = e, e._addReference(), n.pos = i, n;
        }, t.ID = "DrawTextures", t;
    }(), ve = function() {
        function t() {
            this.reset();
        }
        s(t, "laya.display.css.CacheStyle");
        var e = t.prototype;
        return e.needBitmapCache = function() {
            return this.cacheForFilters || !!this.mask;
        }, e.needEnableCanvasRender = function() {
            return "none" != this.userSetCache || this.cacheForFilters || !!this.mask;
        }, e.releaseContext = function() {
            this.canvas && this.canvas.size && (ae.recover("CacheCanvas", this.canvas), this.canvas.size(0, 0)), 
            this.canvas = null;
        }, e.createContext = function() {
            if (!this.canvas) {
                this.canvas = ae.getItem("CacheCanvas") || new qe(!fe.isWebGL);
                var t = this.canvas.context;
                t || (t = this.canvas.getContext("2d"));
            }
        }, e.releaseFilterCache = function() {
            var t = this.filterCache;
            t && (t.destroy(), t.recycle(), this.filterCache = null);
        }, e.recover = function() {
            this !== t.EMPTY && ae.recover("SpriteCache", this.reset());
        }, e.reset = function() {
            return this.releaseContext(), this.releaseFilterCache(), this.cacheAs = "none", 
            this.enableCanvasRender = !1, this.userSetCache = "none", this.cacheForFilters = !1, 
            this.staticCache = !1, this.reCache = !0, this.mask = null, this.maskParent = null, 
            this.filterCache = null, this.filters = null, this.hasGlowFilter = !1, this.cacheRect && this.cacheRect.recover(), 
            this.cacheRect = null, this;
        }, e._calculateCacheRect = function(e, n, s, r) {
            var o = !1;
            fe.isWebGL && (o = !0);
            var a = e._cacheStyle;
            a.cacheRect || (a.cacheRect = D.create());
            var h;
            o && "bitmap" !== n ? a.cacheRect.setTo(-e._style.pivotX, -e._style.pivotY, 1, 1) : (h = e.getSelfBounds(), 
            h.width = h.width + 32, h.height = h.height + 32, h.x = h.x - e.pivotX, h.y = h.y - e.pivotY, 
            h.x = h.x - 16, h.y = h.y - 16, h.x = Math.floor(h.x + s) - s, h.y = Math.floor(h.y + r) - r, 
            h.width = Math.floor(h.width), h.height = Math.floor(h.height), a.cacheRect.copyFrom(h)), 
            h = a.cacheRect;
            var l = o ? 1 : I.pixelRatio * i.stage.clientScaleX, u = o ? 1 : I.pixelRatio * i.stage.clientScaleY;
            if (!o) {
                var c, _ = 1, d = 1;
                for (c = e; c && c != i.stage; ) _ *= c.scaleX, d *= c.scaleY, c = c.parent;
                _ > 1 && (l *= _), d > 1 && (u *= d);
            }
            if (e._style.scrollRect) {
                var f = e._style.scrollRect;
                h.x -= f.x, h.y -= f.y;
            }
            return t._scaleInfo.setTo(l, u), t._scaleInfo;
        }, t.create = function() {
            return ae.getItemByClass("SpriteCache", t);
        }, t.EMPTY = new t(), t.CANVAS_EXTEND_EDGE = 16, n(t, [ "_scaleInfo", function() {
            return this._scaleInfo = new l();
        } ]), t;
    }(), ye = function() {
        function t() {}
        s(t, "laya.display.cmd.TranslateCmd");
        var e = t.prototype;
        return e.recover = function() {
            ae.recover("TranslateCmd", this);
        }, e.run = function(t) {
            t.translate(this.tx, this.ty);
        }, r(0, e, "cmdID", function() {
            return "Translate";
        }), t.create = function(e, i) {
            var n = ae.getItemByClass("TranslateCmd", t);
            return n.tx = e, n.ty = i, n;
        }, t.ID = "Translate", t;
    }(), xe = function() {
        function t() {
            this.ratio = .92, this.maxOffset = 60, this._dragging = !1, this._clickOnly = !0;
        }
        s(t, "laya.utils.Dragging");
        var e = t.prototype;
        return e.start = function(t, e, n, s, r, o, a, h) {
            void 0 === h && (h = .92), this.clearTimer(), this.target = t, this.area = e, this.hasInertia = n, 
            this.elasticDistance = e ? s : 0, this.elasticBackTime = r, this.data = o, this._disableMouseEvent = a, 
            this.ratio = h, this._parent = t.parent, this._clickOnly = !0, this._dragging = !0, 
            this._elasticRateX = this._elasticRateY = 1, this._lastX = this._parent.mouseX, 
            this._lastY = this._parent.mouseY, i.stage.on("mouseup", this, this.onStageMouseUp), 
            i.stage.on("mouseout", this, this.onStageMouseUp), i.systemTimer.frameLoop(1, this, this.loop);
        }, e.clearTimer = function() {
            i.systemTimer.clear(this, this.loop), i.systemTimer.clear(this, this.tweenMove), 
            this._tween && (this._tween.recover(), this._tween = null);
        }, e.stop = function() {
            this._dragging && (Pe.instance.disableMouseEvent = !1, i.stage.off("mouseup", this, this.onStageMouseUp), 
            i.stage.off("mouseout", this, this.onStageMouseUp), this._dragging = !1, this.target && this.area && this.backToArea(), 
            this.clear());
        }, e.loop = function() {
            var t = this._parent.getMousePoint(), e = t.x, n = t.y, s = e - this._lastX, r = n - this._lastY;
            if (this._clickOnly) {
                if (!(Math.abs(s * i.stage._canvasTransform.getScaleX()) > 1 || Math.abs(r * i.stage._canvasTransform.getScaleY()) > 1)) return;
                this._clickOnly = !1, this._offsets || (this._offsets = []), this._offsets.length = 0, 
                this.target.event("dragstart", this.data), Pe.instance.disableMouseEvent = this._disableMouseEvent;
            } else this._offsets.push(s, r);
            (0 !== s || 0 !== r) && (this._lastX = e, this._lastY = n, this.target.x += s * this._elasticRateX, 
            this.target.y += r * this._elasticRateY, this.area && this.checkArea(), this.target.event("dragmove", this.data));
        }, e.checkArea = function() {
            if (this.elasticDistance <= 0) this.backToArea(); else {
                if (this.target._x < this.area.x) var t = this.area.x - this.target._x; else t = this.target._x > this.area.x + this.area.width ? this.target._x - this.area.x - this.area.width : 0;
                if (this._elasticRateX = Math.max(0, 1 - t / this.elasticDistance), this.target._y < this.area.y) var e = this.area.y - this.target.y; else e = this.target._y > this.area.y + this.area.height ? this.target._y - this.area.y - this.area.height : 0;
                this._elasticRateY = Math.max(0, 1 - e / this.elasticDistance);
            }
        }, e.backToArea = function() {
            this.target.x = Math.min(Math.max(this.target._x, this.area.x), this.area.x + this.area.width), 
            this.target.y = Math.min(Math.max(this.target._y, this.area.y), this.area.y + this.area.height);
        }, e.onStageMouseUp = function() {
            if (Pe.instance.disableMouseEvent = !1, i.stage.off("mouseup", this, this.onStageMouseUp), 
            i.stage.off("mouseout", this, this.onStageMouseUp), i.systemTimer.clear(this, this.loop), 
            !this._clickOnly && this.target) if (this.hasInertia) {
                this._offsets.length < 1 && this._offsets.push(this._parent.mouseX - this._lastX, this._parent.mouseY - this._lastY), 
                this._offsetX = this._offsetY = 0;
                for (var t = this._offsets.length, e = Math.min(t, 6), n = this._offsets.length - e, s = t - 1; s > n; s--) this._offsetY += this._offsets[s--], 
                this._offsetX += this._offsets[s];
                this._offsetX = this._offsetX / e * 2, this._offsetY = this._offsetY / e * 2, Math.abs(this._offsetX) > this.maxOffset && (this._offsetX = this._offsetX > 0 ? this.maxOffset : -this.maxOffset), 
                Math.abs(this._offsetY) > this.maxOffset && (this._offsetY = this._offsetY > 0 ? this.maxOffset : -this.maxOffset), 
                i.systemTimer.frameLoop(1, this, this.tweenMove);
            } else this.elasticDistance > 0 ? this.checkElastic() : this.clear();
        }, e.checkElastic = function() {
            var t = 0 / 0, e = 0 / 0;
            if (this.target.x < this.area.x ? t = this.area.x : this.target._x > this.area.x + this.area.width && (t = this.area.x + this.area.width), 
            this.target.y < this.area.y ? e = this.area.y : this.target._y > this.area.y + this.area.height && (e = this.area.y + this.area.height), 
            isNaN(t) && isNaN(e)) this.clear(); else {
                var i = {};
                isNaN(t) || (i.x = t), isNaN(e) || (i.y = e), this._tween = se.to(this.target, i, this.elasticBackTime, w.sineOut, d.create(this, this.clear), 0, !1, !1);
            }
        }, e.tweenMove = function() {
            this._offsetX *= this.ratio * this._elasticRateX, this._offsetY *= this.ratio * this._elasticRateY, 
            this.target.x += this._offsetX, this.target.y += this._offsetY, this.area && this.checkArea(), 
            this.target.event("dragmove", this.data), (Math.abs(this._offsetX) < 1 && Math.abs(this._offsetY) < 1 || this._elasticRateX < .5 || this._elasticRateY < .5) && (i.systemTimer.clear(this, this.tweenMove), 
            this.elasticDistance > 0 ? this.checkElastic() : this.clear());
        }, e.clear = function() {
            if (this.target) {
                this.clearTimer();
                var t = this.target;
                this.target = null, this._parent = null, t.event("dragend", this.data);
            }
        }, t;
    }(), we = function() {
        function e() {}
        var i;
        return s(e, "laya.net.LocalStorage"), e.__init__ = function() {
            return e._baseClass || (e._baseClass = i, i.init()), e.items = e._baseClass.items, 
            e.support = e._baseClass.support, e.support;
        }, e.setItem = function(t, i) {
            e._baseClass.setItem(t, i);
        }, e.getItem = function(t) {
            return e._baseClass.getItem(t);
        }, e.setJSON = function(t, i) {
            e._baseClass.setJSON(t, i);
        }, e.getJSON = function(t) {
            return e._baseClass.getJSON(t);
        }, e.removeItem = function(t) {
            e._baseClass.removeItem(t);
        }, e.clear = function() {
            e._baseClass.clear();
        }, e._baseClass = null, e.items = null, e.support = !1, e.__init$ = function() {
            i = function() {
                function e() {}
                return s(e, ""), e.init = function() {
                    try {
                        e.support = !0, e.items = t.localStorage, e.setItem("laya", "1"), e.removeItem("laya");
                    } catch (i) {
                        e.support = !1;
                    }
                    e.support || console.log("LocalStorage is not supprot or browser is private mode.");
                }, e.setItem = function(t, i) {
                    try {
                        e.support && e.items.setItem(t, i);
                    } catch (n) {
                        console.warn("set localStorage failed", n);
                    }
                }, e.getItem = function(t) {
                    return e.support ? e.items.getItem(t) : null;
                }, e.setJSON = function(t, i) {
                    try {
                        e.support && e.items.setItem(t, JSON.stringify(i));
                    } catch (n) {
                        console.warn("set localStorage failed", n);
                    }
                }, e.getJSON = function(t) {
                    return JSON.parse(e.support ? e.items.getItem(t) : null);
                }, e.removeItem = function(t) {
                    e.support && e.items.removeItem(t);
                }, e.clear = function() {
                    e.support && e.items.clear();
                }, e.items = null, e.support = !1, e;
            }();
        }, e;
    }(), Te = function() {
        function t() {
            this._textIsWorldText = !1, this._fontColor = 4294967295, this._strokeColor = 0, 
            this._nTexAlign = 0, this._fontObj = t._defFontObj;
        }
        s(t, "laya.display.cmd.FillTextCmd");
        var e = t.prototype;
        return e.recover = function() {
            ae.recover("FillTextCmd", this);
        }, e.run = function(t, e, n) {
            i.stage.isGlobalRepaint() && this._textIsWorldText && this._text.cleanCache(), this._textIsWorldText && t._fast_filltext ? t._fast_filltext(this._text, this.x + e, this.y + n, this._fontObj, this._color, null, 0, this._nTexAlign, 0) : t.drawText(this._text, this.x + e, this.y + n, this._font, this._color, this._textAlign);
        }, r(0, e, "text", function() {
            return this._text;
        }, function(t) {
            this._text = t, this._textIsWorldText = t instanceof laya.utils.WordText, this._textIsWorldText && this._text.cleanCache();
        }), r(0, e, "cmdID", function() {
            return "FillText";
        }), r(0, e, "color", function() {
            return this._color;
        }, function(t) {
            this._color = t, this._fontColor = o.create(t).numColor, this._textIsWorldText && this._text.cleanCache();
        }), r(0, e, "font", function() {
            return this._font;
        }, function(t) {
            this._font = t, fe.isWebGL && (this._fontObj = y.Parse(t)), this._textIsWorldText && this._text.cleanCache();
        }), r(0, e, "textAlign", function() {
            return this._textAlign;
        }, function(t) {
            switch (this._textAlign = t, t) {
              case "center":
                this._nTexAlign = pe.ENUM_TEXTALIGN_CENTER;
                break;

              case "right":
                this._nTexAlign = pe.ENUM_TEXTALIGN_RIGHT;
                break;

              default:
                this._nTexAlign = pe.ENUM_TEXTALIGN_DEFAULT;
            }
            this._textIsWorldText && this._text.cleanCache();
        }), t.create = function(e, i, n, s, r, o) {
            var a = ae.getItemByClass("FillTextCmd", t);
            return a.text = e, a._textIsWorldText = e instanceof laya.utils.WordText, a.x = i, 
            a.y = n, a.font = s, a.color = r, a.textAlign = o, a;
        }, t.ID = "FillText", n(t, [ "_defFontObj", function() {
            return this._defFontObj = new y(null);
        } ]), t;
    }(), Ce = function() {
        function t() {
            this._obj = null, this._obj = t.supportWeakMap ? new I.window.WeakMap() : {}, t.supportWeakMap || t._maps.push(this);
        }
        s(t, "laya.utils.WeakObject");
        var e = t.prototype;
        return e.set = function(e, i) {
            if (null != e) if (t.supportWeakMap) {
                var n = e;
                ("string" == typeof e || "number" == typeof e) && (n = t._keys[e], n || (n = t._keys[e] = {
                    k: e
                })), this._obj.set(n, i);
            } else "string" == typeof e || "number" == typeof e ? this._obj[e] = i : (e.$_GID || (e.$_GID = x.getGID()), 
            this._obj[e.$_GID] = i);
        }, e.get = function(e) {
            if (null == e) return null;
            if (t.supportWeakMap) {
                var i = "string" == typeof e || "number" == typeof e ? t._keys[e] : e;
                return i ? this._obj.get(i) : null;
            }
            return "string" == typeof e || "number" == typeof e ? this._obj[e] : this._obj[e.$_GID];
        }, e.del = function(e) {
            if (null != e) if (t.supportWeakMap) {
                var i = "string" == typeof e || "number" == typeof e ? t._keys[e] : e;
                if (!i) return;
                this._obj.delete(i);
            } else "string" == typeof e || "number" == typeof e ? delete this._obj[e] : delete this._obj[this._obj.$_GID];
        }, e.has = function(e) {
            if (null == e) return !1;
            if (t.supportWeakMap) {
                var i = "string" == typeof e || "number" == typeof e ? t._keys[e] : e;
                return this._obj.has(i);
            }
            return "string" == typeof e || "number" == typeof e ? null != this._obj[e] : null != this._obj[this._obj.$_GID];
        }, t.__init__ = function() {
            t.supportWeakMap = null != I.window.WeakMap, t.supportWeakMap || i.systemTimer.loop(t.delInterval, null, t.clearCache);
        }, t.clearCache = function() {
            for (var e = 0, i = t._maps.length; i > e; e++) {
                var n = t._maps[e];
                n._obj = {};
            }
        }, t.supportWeakMap = !1, t.delInterval = 6e5, t._keys = {}, t._maps = [], n(t, [ "I", function() {
            return this.I = new t();
        } ]), t;
    }(), be = function() {
        function t() {
            this.preOvers = [], this.preDowns = [], this.preRightDowns = [], this.enable = !0, 
            this._lastClickTime = 0, this._event = new m();
        }
        s(t, "laya.events.TouchManager");
        var e = t.prototype;
        return e._clearTempArrs = function() {
            t._oldArr.length = 0, t._newArr.length = 0, t._tEleArr.length = 0;
        }, e.getTouchFromArr = function(t, e) {
            var i = 0, n = 0;
            n = e.length;
            var s;
            for (i = 0; n > i; i++) if (s = e[i], s.id == t) return s;
            return null;
        }, e.removeTouchFromArr = function(t, e) {
            var i = 0;
            for (i = e.length - 1; i >= 0; i--) e[i].id == t && e.splice(i, 1);
        }, e.createTouchO = function(t, e) {
            var i;
            return i = ae.getItem("TouchData") || {}, i.id = e, i.tar = t, i;
        }, e.onMouseDown = function(e, i, n) {
            if (void 0 === n && (n = !1), this.enable) {
                var s, r, o;
                s = this.getTouchFromArr(i, this.preOvers), o = this.getEles(e, null, t._tEleArr), 
                s ? s.tar = e : (r = this.createTouchO(e, i), this.preOvers.push(r)), I.onMobile && this.sendEvents(o, "mouseover");
                var a;
                a = n ? this.preDowns : this.preRightDowns, s = this.getTouchFromArr(i, a), s ? s.tar = e : (r = this.createTouchO(e, i), 
                a.push(r)), this.sendEvents(o, n ? "mousedown" : "rightmousedown"), this._clearTempArrs();
            }
        }, e.sendEvents = function(t, e) {
            var i = 0, n = 0;
            n = t.length, this._event._stoped = !1;
            var s;
            s = t[0];
            var r;
            for (i = 0; n > i; i++) {
                if (r = t[i], r.destroyed) return;
                if (r.event(e, this._event.setTo(e, r, s)), this._event._stoped) break;
            }
        }, e.getEles = function(t, e, i) {
            for (i ? i.length = 0 : i = []; t && t != e; ) i.push(t), t = t.parent;
            return i;
        }, e.checkMouseOutAndOverOfMove = function(e, i, n) {
            if (void 0 === n && (n = 0), i != e) {
                var s, r, o = 0, a = 0;
                if (i.contains(e)) r = this.getEles(e, i, t._tEleArr), this.sendEvents(r, "mouseover"); else if (e.contains(i)) r = this.getEles(i, e, t._tEleArr), 
                this.sendEvents(r, "mouseout"); else {
                    r = t._tEleArr, r.length = 0;
                    var h;
                    h = this.getEles(i, null, t._oldArr);
                    var l;
                    l = this.getEles(e, null, t._newArr), a = h.length;
                    var u = 0;
                    for (o = 0; a > o; o++) {
                        if (s = h[o], u = l.indexOf(s), u >= 0) {
                            l.splice(u, l.length - u);
                            break;
                        }
                        r.push(s);
                    }
                    r.length > 0 && this.sendEvents(r, "mouseout"), l.length > 0 && this.sendEvents(l, "mouseover");
                }
            }
        }, e.onMouseMove = function(e, i) {
            if (this.enable) {
                var n;
                n = this.getTouchFromArr(i, this.preOvers);
                var s;
                n ? (this.checkMouseOutAndOverOfMove(e, n.tar), n.tar = e, s = this.getEles(e, null, t._tEleArr)) : (s = this.getEles(e, null, t._tEleArr), 
                this.sendEvents(s, "mouseover"), this.preOvers.push(this.createTouchO(e, i))), this.sendEvents(s, "mousemove"), 
                this._clearTempArrs();
            }
        }, e.getLastOvers = function() {
            return t._tEleArr.length = 0, this.preOvers.length > 0 && this.preOvers[0].tar ? this.getEles(this.preOvers[0].tar, null, t._tEleArr) : (t._tEleArr.push(i.stage), 
            t._tEleArr);
        }, e.stageMouseOut = function() {
            var t;
            t = this.getLastOvers(), this.preOvers.length = 0, this.sendEvents(t, "mouseout");
        }, e.onMouseUp = function(e, i, n) {
            if (void 0 === n && (n = !1), this.enable) {
                var s, r, o, a, h, l = 0, u = 0, c = I.onMobile;
                r = this.getEles(e, null, t._tEleArr), this.sendEvents(r, n ? "mouseup" : "rightmouseup");
                var _;
                if (_ = n ? this.preDowns : this.preRightDowns, s = this.getTouchFromArr(i, _)) {
                    var d = !1, f = I.now();
                    if (d = f - this._lastClickTime < 300, this._lastClickTime = f, e == s.tar) h = r; else for (o = this.getEles(s.tar, null, t._oldArr), 
                    h = t._newArr, h.length = 0, u = o.length, l = 0; u > l; l++) a = o[l], r.indexOf(a) >= 0 && h.push(a);
                    h.length > 0 && this.sendEvents(h, n ? "click" : "rightclick"), n && d && this.sendEvents(h, "doubleclick"), 
                    this.removeTouchFromArr(i, _), s.tar = null, ae.recover("TouchData", s);
                } else ;
                s = this.getTouchFromArr(i, this.preOvers), s && c && (h = this.getEles(s.tar, null, h), 
                h && h.length > 0 && this.sendEvents(h, "mouseout"), this.removeTouchFromArr(i, this.preOvers), 
                s.tar = null, ae.recover("TouchData", s)), this._clearTempArrs();
            }
        }, t._oldArr = [], t._newArr = [], t._tEleArr = [], n(t, [ "I", function() {
            return this.I = new t();
        } ]), t;
    }(), Se = function() {
        function t() {
            this.fontName = null, this.complete = null, this.err = null, this._fontTxt = null, 
            this._url = null, this._div = null, this._txtWidth = 0 / 0, this._http = null;
        }
        s(t, "laya.net.TTFLoader");
        var e = t.prototype;
        return e.load = function(t) {
            this._url = t;
            var e = t.split(".ttf")[0].split("/");
            this.fontName = e[e.length - 1], fe.isConchApp ? this._loadConch() : I.window.FontFace ? this._loadWithFontFace() : this._loadWithCSS();
        }, e._loadConch = function() {
            this._http = new Be(), this._http.on("error", this, this._onErr), this._http.on("complete", this, this._onHttpLoaded), 
            this._http.send(this._url, null, "get", "arraybuffer");
        }, e._onHttpLoaded = function(t) {
            I.window.conchTextCanvas.setFontFaceFromBuffer(this.fontName, t), this._clearHttp(), 
            this._complete();
        }, e._clearHttp = function() {
            this._http && (this._http.off("error", this, this._onErr), this._http.off("complete", this, this._onHttpLoaded), 
            this._http = null);
        }, e._onErr = function() {
            this._clearHttp(), this.err && (this.err.runWith("fail:" + this._url), this.err = null);
        }, e._complete = function() {
            i.systemTimer.clear(this, this._complete), i.systemTimer.clear(this, this._checkComplete), 
            this._div && this._div.parentNode && (this._div.parentNode.removeChild(this._div), 
            this._div = null), this.complete && (this.complete.runWith(this), this.complete = null);
        }, e._checkComplete = function() {
            re.measureText("LayaTTFFont", this._fontTxt).width != this._txtWidth && this._complete();
        }, e._loadWithFontFace = function() {
            var t = new I.window.FontFace(this.fontName, "url('" + this._url + "')");
            I.window.document.fonts.add(t);
            var e = this;
            t.loaded.then(function() {
                e._complete();
            }), t.load();
        }, e._createDiv = function() {
            this._div = I.createElement("div"), this._div.innerHTML = "laya";
            var t = this._div.style;
            t.fontFamily = this.fontName, t.position = "absolute", t.left = "-100px", t.top = "-100px", 
            I.document.body.appendChild(this._div);
        }, e._loadWithCSS = function() {
            var t = this, e = I.createElement("style");
            e.type = "text/css", I.document.body.appendChild(e), e.textContent = "@font-face { font-family:'" + this.fontName + "'; src:url('" + this._url + "');}", 
            this._fontTxt = "40px " + this.fontName, this._txtWidth = re.measureText("LayaTTFFont", this._fontTxt).width;
            var n = this;
            e.onload = function() {
                i.systemTimer.once(1e4, n, t._complete);
            }, i.systemTimer.loop(20, this, this._checkComplete), this._createDiv();
        }, t._testString = "LayaTTFFont", t;
    }(), Ie = function() {
        function t() {
            this._texture = null, this._fontCharDic = {}, this._fontWidthMap = {}, this._complete = null, 
            this._path = null, this._maxWidth = 0, this._spaceWidth = 10, this._padding = null, 
            this.fontSize = 12, this.autoScaleSize = !1, this.letterSpacing = 0;
        }
        s(t, "laya.display.BitmapFont");
        var e = t.prototype;
        return e.loadFont = function(t, e) {
            return this._path = t, this._complete = e, t && -1 !== t.indexOf(".fnt") ? (i.loader.load([ {
                url: t,
                type: "xml"
            }, {
                url: t.replace(".fnt", ".png"),
                type: "image"
               
            } ], d.create(this, this._onLoaded)), void 0) : (console.log('Bitmap font configuration information must be a ".fnt" file'), 
            void 0);
        }, e._onLoaded = function() {
            this.parseFont(Ye.getRes(this._path), Ye.getRes(this._path.replace(".fnt", ".png"))), 
            this._complete && this._complete.run();
        }, e.parseFont = function(t, e) {
            if (null != t && null != e) {
                this._texture = e;
                var i = 1, n = t.getElementsByTagName("info");
                if (!n[0].getAttributeNode) return this.parseFont2(t, e);
                this.fontSize = parseInt(n[0].getAttributeNode("size").nodeValue);
                var s = n[0].getAttributeNode("padding").nodeValue, r = s.split(",");
                this._padding = [ parseInt(r[0]), parseInt(r[1]), parseInt(r[2]), parseInt(r[3]) ];
                var o;
                o = t.getElementsByTagName("char");
                var a = 0;
                for (a = 0; a < o.length; a++) {
                    var h = o[a], l = parseInt(h.getAttributeNode("id").nodeValue), u = parseInt(h.getAttributeNode("xoffset").nodeValue) / i, c = parseInt(h.getAttributeNode("yoffset").nodeValue) / i, _ = parseInt(h.getAttributeNode("xadvance").nodeValue) / i, d = new D();
                    d.x = parseInt(h.getAttributeNode("x").nodeValue), d.y = parseInt(h.getAttributeNode("y").nodeValue), 
                    d.width = parseInt(h.getAttributeNode("width").nodeValue), d.height = parseInt(h.getAttributeNode("height").nodeValue);
                    var f = Ue.create(e, d.x, d.y, d.width, d.height, u, c);
                    this._maxWidth = Math.max(this._maxWidth, _ + this.letterSpacing), this._fontCharDic[l] = f, 
                    this._fontWidthMap[l] = _;
                }
            }
        }, e.parseFont2 = function(t, e) {
            if (null != t && null != e) {
                this._texture = e;
                var i = 1, n = t.getElementsByTagName("info");
                this.fontSize = parseInt(n[0].attributes.size.nodeValue);
                var s = n[0].attributes.padding.nodeValue, r = s.split(",");
                this._padding = [ parseInt(r[0]), parseInt(r[1]), parseInt(r[2]), parseInt(r[3]) ];
                var o = t.getElementsByTagName("char"), a = 0;
                for (a = 0; a < o.length; a++) {
                    var h = o[a].attributes, l = parseInt(h.id.nodeValue), u = parseInt(h.xoffset.nodeValue) / i, c = parseInt(h.yoffset.nodeValue) / i, _ = parseInt(h.xadvance.nodeValue) / i, d = new D();
                    d.x = parseInt(h.x.nodeValue), d.y = parseInt(h.y.nodeValue), d.width = parseInt(h.width.nodeValue), 
                    d.height = parseInt(h.height.nodeValue);
                    var f = Ue.create(e, d.x, d.y, d.width, d.height, u, c);
                    this._maxWidth = Math.max(this._maxWidth, _ + this.letterSpacing), this._fontCharDic[l] = f, 
                    this._fontWidthMap[l] = _;
                }
            }
        }, e.getCharTexture = function(t) {
            return this._fontCharDic[t.charCodeAt(0)];
        }, e.destroy = function() {
            if (this._texture) {
                for (var t in this._fontCharDic) {
                    var e = this._fontCharDic[t];
                    e && e.destroy();
                }
                this._texture.destroy(), this._fontCharDic = null, this._fontWidthMap = null, this._texture = null, 
                this._complete = null, this._padding = null;
            }
        }, e.setSpaceWidth = function(t) {
            this._spaceWidth = t;
        }, e.getCharWidth = function(t) {
            var e = t.charCodeAt(0);
            return this._fontWidthMap[e] ? this._fontWidthMap[e] + this.letterSpacing : " " === t ? this._spaceWidth + this.letterSpacing : 0;
        }, e.getTextWidth = function(t) {
            for (var e = 0, i = 0, n = t.length; n > i; i++) e += this.getCharWidth(t.charAt(i));
            return e;
        }, e.getMaxWidth = function() {
            return this._maxWidth;
        }, e.getMaxHeight = function() {
            return this.fontSize;
        }, e._drawText = function(t, e, i, n, s, r) {
            var o, a = this.getTextWidth(t), h = 0;
            "center" === s && (h = (r - a) / 2), "right" === s && (h = r - a);
            for (var l = 0, u = 0, c = t.length; c > u; u++) o = this.getCharTexture(t.charAt(u)), 
            o && (e.graphics.drawImage(o, i + l + h, n), l += this.getCharWidth(t.charAt(u)));
        }, t;
    }(), Me = function() {
        function t() {}
        return s(t, "laya.utils.ClassUtils"), t.regClass = function(e, i) {
            t._classMap[e] = i;
        }, t.regShortClassName = function(e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i], s = n.name;
                t._classMap[s] = n;
            }
        }, t.getRegClass = function(e) {
            return t._classMap[e];
        }, t.getClass = function(e) {
            var n = t._classMap[e] || e;
            return "string" == typeof n ? i.__classmap[n] || i[e] : n;
        }, t.getInstance = function(e) {
            var i = t.getClass(e);
            return i ? new i() : (console.warn("[error] Undefined class:", e), null);
        }, t.createByJson = function(e, i, n, s, r) {
            "string" == typeof e && (e = JSON.parse(e));
            var o = e.props;
            if (!i && (i = r ? r.runWith(e) : t.getInstance(o.runtime || e.type), !i)) return null;
            var a = e.child;
            if (a) for (var h = 0, l = a.length; l > h; h++) {
                var u = a[h];
                if ("render" !== u.props.name && "render" !== u.props.renderType || !i._$set_itemRender) if ("Graphic" == u.type) t._addGraphicsToSprite(u, i); else if (t._isDrawType(u.type)) t._addGraphicToSprite(u, i, !0); else {
                    var c = t.createByJson(u, null, n, s, r);
                    "Script" === u.type ? c.hasOwnProperty("owner") ? c.owner = i : c.hasOwnProperty("target") && (c.target = i) : "mask" == u.props.renderType ? i.mask = c : i.addChild(c);
                } else i.itemRender = u;
            }
            if (o) for (var _ in o) {
                var d = o[_];
                "var" === _ && n ? n[d] = i : d instanceof Array && "function" == typeof i[_] ? i[_].apply(i, d) : i[_] = d;
            }
            return s && e.customProps && s.runWith([ i, e ]), i.created && i.created(), i;
        }, t._addGraphicsToSprite = function(e, i) {
            var n = e.child;
            if (n && !(n.length < 1)) {
                var s = t._getGraphicsFromSprite(e, i), r = 0, o = 0;
                e.props && (r = t._getObjVar(e.props, "x", 0), o = t._getObjVar(e.props, "y", 0)), 
                0 != r && 0 != o && s.translate(r, o);
                var a = 0, h = 0;
                for (h = n.length, a = 0; h > a; a++) t._addGraphicToGraphics(n[a], s);
                0 != r && 0 != o && s.translate(-r, -o);
            }
        }, t._addGraphicToSprite = function(e, i, n) {
            void 0 === n && (n = !1);
            var s = n ? t._getGraphicsFromSprite(e, i) : i.graphics;
            t._addGraphicToGraphics(e, s);
        }, t._getGraphicsFromSprite = function(t, e) {
            if (!t || !t.props) return e.graphics;
            var i = t.props.renderType;
            if ("hit" === i || "unHit" === i) {
                var n = e._style.hitArea || (e.hitArea = new Z());
                n[i] || (n[i] = new f());
                var s = n[i];
            }
            return s || (s = e.graphics), s;
        }, t._getTransformData = function(e) {
            var i;
            (e.hasOwnProperty("pivotX") || e.hasOwnProperty("pivotY")) && (i = i || new U(), 
            i.translate(-t._getObjVar(e, "pivotX", 0), -t._getObjVar(e, "pivotY", 0)));
            {
                var n = t._getObjVar(e, "scaleX", 1), s = t._getObjVar(e, "scaleY", 1), r = t._getObjVar(e, "rotation", 0);
                t._getObjVar(e, "skewX", 0), t._getObjVar(e, "skewY", 0);
            }
            return (1 != n || 1 != s || 0 != r) && (i = i || new U(), i.scale(n, s), i.rotate(.0174532922222222 * r)), 
            i;
        }, t._addGraphicToGraphics = function(e, i) {
            var n;
            if (n = e.props) {
                var s;
                if (s = t.DrawTypeDic[e.type]) {
                    var r = i, o = t._getParams(n, s[1], s[2], s[3]), a = t._tM;
                    (a || 1 != t._alpha) && (r.save(), a && r.transform(a), 1 != t._alpha && r.alpha(t._alpha)), 
                    r[s[0]].apply(r, o), (a || 1 != t._alpha) && r.restore();
                }
            }
        }, t._adptLineData = function(t) {
            return t[2] = parseFloat(t[0]) + parseFloat(t[2]), t[3] = parseFloat(t[1]) + parseFloat(t[3]), 
            t;
        }, t._adptTextureData = function(t) {
            return t[0] = Ye.getRes(t[0]), t;
        }, t._adptLinesData = function(e) {
            return e[2] = t._getPointListByStr(e[2]), e;
        }, t._isDrawType = function(e) {
            return "Image" === e ? !1 : t.DrawTypeDic.hasOwnProperty(e);
        }, t._getParams = function(e, i, n, s) {
            void 0 === n && (n = 0);
            var r = t._temParam;
            r.length = i.length;
            var o = 0, a = 0;
            for (a = i.length, o = 0; a > o; o++) r[o] = t._getObjVar(e, i[o][0], i[o][1]);
            t._alpha = t._getObjVar(e, "alpha", 1);
            var h;
            return h = t._getTransformData(e), h ? (n || (n = 0), h.translate(r[n], r[n + 1]), 
            r[n] = r[n + 1] = 0, t._tM = h) : t._tM = null, s && t[s] && (r = t[s](r)), r;
        }, t._getPointListByStr = function(t) {
            var e = t.split(","), i = 0, n = 0;
            for (n = e.length, i = 0; n > i; i++) e[i] = parseFloat(e[i]);
            return e;
        }, t._getObjVar = function(t, e, i) {
            return t.hasOwnProperty(e) ? t[e] : i;
        }, t._temParam = [], t._classMap = {
            Sprite: je,
            Scene: ii,
            Text: Qe,
            Animation: "laya.display.Animation",
            Skeleton: "laya.ani.bone.Skeleton",
            Particle2D: "laya.particle.Particle2D",
            div: "laya.html.dom.HTMLDivParser",
            p: "laya.html.dom.HTMLElement",
            img: "laya.html.dom.HTMLImageElement",
            span: "laya.html.dom.HTMLElement",
            br: "laya.html.dom.HTMLBrElement",
            style: "laya.html.dom.HTMLStyleElement",
            font: "laya.html.dom.HTMLElement",
            a: "laya.html.dom.HTMLElement",
            "#text": "laya.html.dom.HTMLElement",
            link: "laya.html.dom.HTMLLinkElement"
        }, t._tM = null, t._alpha = 0 / 0, n(t, [ "DrawTypeDic", function() {
            return this.DrawTypeDic = {
                Rect: [ "drawRect", [ [ "x", 0 ], [ "y", 0 ], [ "width", 0 ], [ "height", 0 ], [ "fillColor", null ], [ "lineColor", null ], [ "lineWidth", 1 ] ] ],
                Circle: [ "drawCircle", [ [ "x", 0 ], [ "y", 0 ], [ "radius", 0 ], [ "fillColor", null ], [ "lineColor", null ], [ "lineWidth", 1 ] ] ],
                Pie: [ "drawPie", [ [ "x", 0 ], [ "y", 0 ], [ "radius", 0 ], [ "startAngle", 0 ], [ "endAngle", 0 ], [ "fillColor", null ], [ "lineColor", null ], [ "lineWidth", 1 ] ] ],
                Image: [ "drawTexture", [ [ "x", 0 ], [ "y", 0 ], [ "width", 0 ], [ "height", 0 ] ] ],
                Texture: [ "drawTexture", [ [ "skin", null ], [ "x", 0 ], [ "y", 0 ], [ "width", 0 ], [ "height", 0 ] ], 1, "_adptTextureData" ],
                FillTexture: [ "fillTexture", [ [ "skin", null ], [ "x", 0 ], [ "y", 0 ], [ "width", 0 ], [ "height", 0 ], [ "repeat", null ] ], 1, "_adptTextureData" ],
                FillText: [ "fillText", [ [ "text", "" ], [ "x", 0 ], [ "y", 0 ], [ "font", null ], [ "color", null ], [ "textAlign", null ] ], 1 ],
                Line: [ "drawLine", [ [ "x", 0 ], [ "y", 0 ], [ "toX", 0 ], [ "toY", 0 ], [ "lineColor", null ], [ "lineWidth", 0 ] ], 0, "_adptLineData" ],
                Lines: [ "drawLines", [ [ "x", 0 ], [ "y", 0 ], [ "points", "" ], [ "lineColor", null ], [ "lineWidth", 0 ] ], 0, "_adptLinesData" ],
                Curves: [ "drawCurves", [ [ "x", 0 ], [ "y", 0 ], [ "points", "" ], [ "lineColor", null ], [ "lineWidth", 0 ] ], 0, "_adptLinesData" ],
                Poly: [ "drawPoly", [ [ "x", 0 ], [ "y", 0 ], [ "points", "" ], [ "fillColor", null ], [ "lineColor", null ], [ "lineWidth", 1 ] ], 0, "_adptLinesData" ]
            };
        } ]), t;
    }(), De = (function() {
        function t() {
            this.reset();
        }
        s(t, "laya.utils.HTMLChar");
        var e = t.prototype;
        return e.setData = function(e, i, n, s) {
            return this.char = e, this.charNum = e.charCodeAt(0), this.x = this.y = 0, this.width = i, 
            this.height = n, this.style = s, this.isWord = !t._isWordRegExp.test(e), this;
        }, e.reset = function() {
            return this.x = this.y = this.width = this.height = 0, this.isWord = !1, this.char = null, 
            this.charNum = 0, this.style = null, this;
        }, e.recover = function() {
            ae.recover("HTMLChar", this.reset());
        }, e._isChar = function() {
            return !0;
        }, e._getCSSStyle = function() {
            return this.style;
        }, t.create = function() {
            return ae.getItemByClass("HTMLChar", t);
        }, t._isWordRegExp = new RegExp("[\\w.]", ""), t;
    }(), function() {
        function t() {}
        s(t, "laya.display.cmd.DrawParticleCmd");
        var e = t.prototype;
        return e.recover = function() {
            this._templ = null, ae.recover("DrawParticleCmd", this);
        }, e.run = function(t, e, i) {
            t.drawParticle(e, i, this._templ);
        }, r(0, e, "cmdID", function() {
            return "DrawParticleCmd";
        }), t.create = function(e) {
            var i = ae.getItemByClass("DrawParticleCmd", t);
            return i._templ = e, i;
        }, t.ID = "DrawParticleCmd", t;
    }(), function() {
        function t() {}
        return s(t, "laya.events.KeyBoardManager"), t.__init__ = function() {
            t._addEvent("keydown"), t._addEvent("keypress"), t._addEvent("keyup");
        }, t._addEvent = function(t) {
            I.document.addEventListener(t, function(e) {
                laya.events.KeyBoardManager._dispatch(e, t);
            }, !0);
        }, t._dispatch = function(e, n) {
            if (t.enabled) {
                t._event._stoped = !1, t._event.nativeEvent = e, t._event.keyCode = e.keyCode || e.which || e.charCode, 
                "keydown" === n ? t._pressKeys[t._event.keyCode] = !0 : "keyup" === n && (t._pressKeys[t._event.keyCode] = null);
                for (var s = i.stage.focus && null != i.stage.focus.event && i.stage.focus.displayedInStage ? i.stage.focus : i.stage, r = s; r; ) r.event(n, t._event.setTo(n, r, s)), 
                r = r.parent;
            }
        }, t.hasKeyDown = function(e) {
            return t._pressKeys[e];
        }, t._pressKeys = {}, t.enabled = !0, n(t, [ "_event", function() {
            return this._event = new m();
        } ]), t;
    }()), Ae = (function() {
        function t() {}
        return s(t, "laya.events.Keyboard"), t.NUMBER_0 = 48, t.NUMBER_1 = 49, t.NUMBER_2 = 50, 
        t.NUMBER_3 = 51, t.NUMBER_4 = 52, t.NUMBER_5 = 53, t.NUMBER_6 = 54, t.NUMBER_7 = 55, 
        t.NUMBER_8 = 56, t.NUMBER_9 = 57, t.A = 65, t.B = 66, t.C = 67, t.D = 68, t.E = 69, 
        t.F = 70, t.G = 71, t.H = 72, t.I = 73, t.J = 74, t.K = 75, t.L = 76, t.M = 77, 
        t.N = 78, t.O = 79, t.P = 80, t.Q = 81, t.R = 82, t.S = 83, t.T = 84, t.U = 85, 
        t.V = 86, t.W = 87, t.X = 88, t.Y = 89, t.Z = 90, t.F1 = 112, t.F2 = 113, t.F3 = 114, 
        t.F4 = 115, t.F5 = 116, t.F6 = 117, t.F7 = 118, t.F8 = 119, t.F9 = 120, t.F10 = 121, 
        t.F11 = 122, t.F12 = 123, t.F13 = 124, t.F14 = 125, t.F15 = 126, t.NUMPAD = 21, 
        t.NUMPAD_0 = 96, t.NUMPAD_1 = 97, t.NUMPAD_2 = 98, t.NUMPAD_3 = 99, t.NUMPAD_4 = 100, 
        t.NUMPAD_5 = 101, t.NUMPAD_6 = 102, t.NUMPAD_7 = 103, t.NUMPAD_8 = 104, t.NUMPAD_9 = 105, 
        t.NUMPAD_ADD = 107, t.NUMPAD_DECIMAL = 110, t.NUMPAD_DIVIDE = 111, t.NUMPAD_ENTER = 108, 
        t.NUMPAD_MULTIPLY = 106, t.NUMPAD_SUBTRACT = 109, t.SEMICOLON = 186, t.EQUAL = 187, 
        t.COMMA = 188, t.MINUS = 189, t.PERIOD = 190, t.SLASH = 191, t.BACKQUOTE = 192, 
        t.LEFTBRACKET = 219, t.BACKSLASH = 220, t.RIGHTBRACKET = 221, t.QUOTE = 222, t.ALTERNATE = 18, 
        t.BACKSPACE = 8, t.CAPS_LOCK = 20, t.COMMAND = 15, t.CONTROL = 17, t.DELETE = 46, 
        t.ENTER = 13, t.ESCAPE = 27, t.PAGE_UP = 33, t.PAGE_DOWN = 34, t.END = 35, t.HOME = 36, 
        t.LEFT = 37, t.UP = 38, t.RIGHT = 39, t.DOWN = 40, t.SHIFT = 16, t.SPACE = 32, t.TAB = 9, 
        t.INSERT = 45, t;
    }(), function() {
        function t() {}
        s(t, "laya.display.cmd.DrawCircleCmd");
        var e = t.prototype;
        return e.recover = function() {
            this.fillColor = null, this.lineColor = null, ae.recover("DrawCircleCmd", this);
        }, e.run = function(t, e, i) {
            t._drawCircle(this.x + e, this.y + i, this.radius, this.fillColor, this.lineColor, this.lineWidth, this.vid);
        }, r(0, e, "cmdID", function() {
            return "DrawCircle";
        }), t.create = function(e, i, n, s, r, o, a) {
            var h = ae.getItemByClass("DrawCircleCmd", t);
            return h.x = e, h.y = i, h.radius = n, h.fillColor = s, h.lineColor = r, h.lineWidth = o, 
            h.vid = a, h;
        }, t.ID = "DrawCircle", t;
    }()), Pe = function() {
        function t() {
            this.mouseX = 0, this.mouseY = 0, this.disableMouseEvent = !1, this.mouseDownTime = 0, 
            this.mouseMoveAccuracy = 2, this._stage = null, this._captureSp = null, this._captureExlusiveMode = !1, 
            this._hitCaputreSp = !1, this._target = null, this._lastMoveTimer = 0, this._isLeftMouse = !1, 
            this._touchIDs = {}, this._id = 1, this._tTouchID = 0, this._event = new m(), this._captureChain = [], 
            this._matrix = new U(), this._point = new l(), this._rect = new D(), this._prePoint = new l(), 
            this._curTouchID = 0 / 0;
        }
        s(t, "laya.events.MouseManager");
        var e = t.prototype;
        return e.__init__ = function(e, i) {
            var n = this;
            this._stage = e;
            var s = this;
            i.oncontextmenu = function() {
                return t.enabled ? !1 : void 0;
            }, i.addEventListener("mousedown", function(e) {
                t.enabled && (I.onIE || e.preventDefault(), s.mouseDownTime = I.now(), n.runEvent(e));
            }), i.addEventListener("mouseup", function(e) {
                t.enabled && (e.preventDefault(), s.mouseDownTime = -I.now(), n.runEvent(e));
            }, !0), i.addEventListener("mousemove", function(e) {
                if (t.enabled) {
                    e.preventDefault();
                    var i = I.now();
                    if (i - s._lastMoveTimer < 10) return;
                    s._lastMoveTimer = i, n.runEvent(e);
                }
            }, !0), i.addEventListener("mouseout", function(e) {
                t.enabled && n.runEvent(e);
            }), i.addEventListener("mouseover", function(e) {
                t.enabled && n.runEvent(e);
            }), i.addEventListener("touchstart", function(e) {
                t.enabled && (t._isFirstTouch || si.isInputting || e.preventDefault(), s.mouseDownTime = I.now(), 
                n.runEvent(e));
            }), i.addEventListener("touchend", function(e) {
                t.enabled ? (t._isFirstTouch || si.isInputting || e.preventDefault(), t._isFirstTouch = !1, 
                s.mouseDownTime = -I.now(), n.runEvent(e)) : n._curTouchID = 0 / 0;
            }, !0), i.addEventListener("touchmove", function(e) {
                t.enabled && (e.preventDefault(), n.runEvent(e));
            }, !0), i.addEventListener("touchcancel", function(e) {
                t.enabled ? (e.preventDefault(), n.runEvent(e)) : n._curTouchID = 0 / 0;
            }, !0), i.addEventListener("mousewheel", function(e) {
                t.enabled && n.runEvent(e);
            }), i.addEventListener("DOMMouseScroll", function(e) {
                t.enabled && n.runEvent(e);
            });
        }, e.initEvent = function(t, e) {
            var i = this;
            i._event._stoped = !1, i._event.nativeEvent = e || t, i._target = null, this._point.setTo(t.pageX || t.clientX, t.pageY || t.clientY), 
            this._stage._canvasTransform && (this._stage._canvasTransform.invertTransformPoint(this._point), 
            i.mouseX = this._point.x, i.mouseY = this._point.y), i._event.touchId = t.identifier || 0, 
            this._tTouchID = i._event.touchId;
            var n;
            n = be.I._event, n._stoped = !1, n.nativeEvent = i._event.nativeEvent, n.touchId = i._event.touchId;
        }, e.checkMouseWheel = function(t) {
            this._event.delta = t.wheelDelta ? .025 * t.wheelDelta : -t.detail;
            for (var e = be.I.getLastOvers(), i = 0, n = e.length; n > i; i++) {
                var s = e[i];
                s.event("mousewheel", this._event.setTo("mousewheel", s, this._target));
            }
        }, e.onMouseMove = function(t) {
            be.I.onMouseMove(t, this._tTouchID);
        }, e.onMouseDown = function(t) {
            if (si.isInputting && i.stage.focus && i.stage.focus.focus && !i.stage.focus.contains(this._target)) {
                var e = i.stage.focus._tf || i.stage.focus, n = t._tf || t;
                n instanceof laya.display.Input && n.multiline == e.multiline ? e._focusOut() : e.focus = !1;
            }
            be.I.onMouseDown(t, this._tTouchID, this._isLeftMouse);
        }, e.onMouseUp = function(t) {
            be.I.onMouseUp(t, this._tTouchID, this._isLeftMouse);
        }, e.check = function(t, e, i, n) {
            this._point.setTo(e, i), t.fromParentPoint(this._point), e = this._point.x, i = this._point.y;
            var s = t._style.scrollRect;
            if (s && (this._rect.setTo(s.x, s.y, s.width, s.height), !this._rect.contains(e, i))) return !1;
            if (!this.disableMouseEvent) {
                if (t.hitTestPrior && !t.mouseThrough && !this.hitTest(t, e, i)) return !1;
                for (var r = t._children.length - 1; r > -1; r--) {
                    var o = t._children[r];
                    if (!o.destroyed && o._mouseState > 1 && o._visible && this.check(o, e, i, n)) return !0;
                }
                for (r = t._extUIChild.length - 1; r >= 0; r--) {
                    var a = t._extUIChild[r];
                    if (!a.destroyed && a._mouseState > 1 && a._visible && this.check(a, e, i, n)) return !0;
                }
            }
            var h = !t.hitTestPrior || t.mouseThrough || this.disableMouseEvent ? this.hitTest(t, e, i) : !0;
            return h ? (this._target = t, n.call(this, t), this._target == this._hitCaputreSp && (this._hitCaputreSp = !0)) : n === this.onMouseUp && t === this._stage && (this._target = this._stage, 
            n.call(this, this._target)), h;
        }, e.hitTest = function(t, e, i) {
            var n = !1;
            t.scrollRect && (e -= t._style.scrollRect.x, i -= t._style.scrollRect.y);
            var s = t._style.hitArea;
            return s && s._hit ? s.contains(e, i) : ((t.width > 0 && t.height > 0 || t.mouseThrough || s) && (n = t.mouseThrough ? t.getGraphicBounds().contains(e, i) : (s ? s : this._rect.setTo(0, 0, t.width, t.height)).contains(e, i)), 
            n);
        }, e._checkAllBaseUI = function(t, e, i) {
            var n = this.handleExclusiveCapture(this.mouseX, this.mouseY, i);
            return n ? !0 : (n = this.check(this._stage, this.mouseX, this.mouseY, i), this.handleCapture(this.mouseX, this.mouseY, i) || n);
        }, e.check3DUI = function(t, e, i) {
            for (var n = this._stage._3dUI, s = 0, r = !1; s < n.length; s++) {
                var o = n[s];
                this._stage._curUIBase = o, !o.destroyed && o._mouseState > 1 && o._visible && (r = r || this.check(o, this.mouseX, this.mouseY, i));
            }
            return this._stage._curUIBase = this._stage, r;
        }, e.handleExclusiveCapture = function(t, e, i) {
            if (this._captureExlusiveMode && this._captureSp && this._captureChain.length > 0) {
                var n;
                this._point.setTo(t, e);
                for (var s = 0; s < this._captureChain.length; s++) n = this._captureChain[s], n.fromParentPoint(this._point);
                return this._target = n, i.call(this, n), !0;
            }
            return !1;
        }, e.handleCapture = function(t, e, i) {
            if (!this._hitCaputreSp && this._captureSp && this._captureChain.length > 0) {
                var n;
                this._point.setTo(t, e);
                for (var s = 0; s < this._captureChain.length; s++) n = this._captureChain[s], n.fromParentPoint(this._point);
                return this._target = n, i.call(this, n), !0;
            }
            return !1;
        }, e.runEvent = function(e) {
            var i, n = 0, s = 0;
            switch ("mousemove" !== e.type && (this._prePoint.x = this._prePoint.y = -1e6), 
            e.type) {
              case "mousedown":
                this._touchIDs[0] = this._id++, t._isTouchRespond ? t._isTouchRespond = !1 : (this._isLeftMouse = 0 === e.button, 
                this.initEvent(e), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseDown));
                break;

              case "mouseup":
                this._isLeftMouse = 0 === e.button, this.initEvent(e), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseUp);
                break;

              case "mousemove":
                Math.abs(this._prePoint.x - e.clientX) + Math.abs(this._prePoint.y - e.clientY) >= this.mouseMoveAccuracy && (this._prePoint.x = e.clientX, 
                this._prePoint.y = e.clientY, this.initEvent(e), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseMove));
                break;

              case "touchstart":
                t._isTouchRespond = !0, this._isLeftMouse = !0;
                var r = e.changedTouches;
                for (n = 0, s = r.length; s > n; n++) i = r[n], (t.multiTouchEnabled || isNaN(this._curTouchID)) && (this._curTouchID = i.identifier, 
                this._id % 200 === 0 && (this._touchIDs = {}), this._touchIDs[i.identifier] = this._id++, 
                this.initEvent(i, e), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseDown));
                break;

              case "touchend":
              case "touchcancel":
                t._isTouchRespond = !0, this._isLeftMouse = !0;
                var o = e.changedTouches;
                for (n = 0, s = o.length; s > n; n++) if (i = o[n], t.multiTouchEnabled || i.identifier == this._curTouchID) {
                    this._curTouchID = 0 / 0, this.initEvent(i, e);
                    var a = !1;
                    a = this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseUp), a || this.onMouseUp(null);
                }
                break;

              case "touchmove":
                var h = e.changedTouches;
                for (n = 0, s = h.length; s > n; n++) i = h[n], (t.multiTouchEnabled || i.identifier == this._curTouchID) && (this.initEvent(i, e), 
                this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseMove));
                break;

              case "wheel":
              case "mousewheel":
              case "DOMMouseScroll":
                this.checkMouseWheel(e);
                break;

              case "mouseout":
                be.I.stageMouseOut();
                break;

              case "mouseover":
                this._stage.event("mouseover", this._event.setTo("mouseover", this._stage, this._stage));
            }
        }, e.setCapture = function(t, e) {
            void 0 === e && (e = !1), this._captureSp = t, this._captureExlusiveMode = e, this._captureChain.length = 0, 
            this._captureChain.push(t);
            for (var n = t; ;) {
                if (n == i.stage) break;
                if (n == i.stage._curUIBase) break;
                if (n = n.parent, !n) break;
                this._captureChain.splice(0, 0, n);
            }
        }, e.releaseCapture = function() {
            console.log("release capture"), this._captureSp = null;
        }, t.enabled = !0, t.multiTouchEnabled = !0, t._isTouchRespond = !1, t._isFirstTouch = !0, 
        n(t, [ "instance", function() {
            return this.instance = new t();
        } ]), t;
    }(), Le = function() {
        function t() {}
        s(t, "laya.display.cmd.DrawLinesCmd");
        var e = t.prototype;
        return e.recover = function() {
            this.points = null, this.lineColor = null, ae.recover("DrawLinesCmd", this);
        }, e.run = function(t, e, i) {
            t._drawLines(this.x + e, this.y + i, this.points, this.lineColor, this.lineWidth, this.vid);
        }, r(0, e, "cmdID", function() {
            return "DrawLines";
        }), t.create = function(e, i, n, s, r, o) {
            var a = ae.getItemByClass("DrawLinesCmd", t);
            return a.x = e, a.y = i, a.points = n, a.lineColor = s, a.lineWidth = r, a.vid = o, 
            a;
        }, t.ID = "DrawLines", t;
    }(), Ee = function(t) {
        function e() {
            this._id = 0, this._url = null, this._cpuMemory = 0, this._gpuMemory = 0, this._destroyed = !1, 
            this._referenceCount = 0, this.lock = !1, this.name = null, e.__super.call(this), 
            this._id = ++e._uniqueIDCounter, this._destroyed = !1, this._referenceCount = 0, 
            e._idResourcesMap[this.id] = this, this.lock = !1;
        }
        s(e, "laya.resource.Resource", t);
        var n = e.prototype;
        return i.imps(n, {
            "laya.resource.ICreateResource": !0,
            "laya.resource.IDestroy": !0
        }), n._setCPUMemory = function(t) {
            var i = t - this._cpuMemory;
            this._cpuMemory = t, e._addCPUMemory(i);
        }, n._setGPUMemory = function(t) {
            var i = t - this._gpuMemory;
            this._gpuMemory = t, e._addGPUMemory(i);
        }, n._setCreateURL = function(t) {
            if (t = ne.formatURL(t), this._url !== t) {
                var i;
                this._url && (i = e._urlResourcesMap[this._url], i.splice(i.indexOf(this), 1), 0 === i.length && delete e._urlResourcesMap[this._url]), 
                t && (i = e._urlResourcesMap[t], i || (e._urlResourcesMap[t] = i = []), i.push(this)), 
                this._url = t;
            }
        }, n._addReference = function(t) {
            void 0 === t && (t = 1), this._referenceCount += t;
        }, n._removeReference = function(t) {
            void 0 === t && (t = 1), this._referenceCount -= t;
        }, n._clearReference = function() {
            this._referenceCount = 0;
        }, n._recoverResource = function() {}, n._disposeResource = function() {}, n._activeResource = function() {}, 
        n.destroy = function() {
            if (!this._destroyed) {
                this._destroyed = !0, this.lock = !1, this._disposeResource(), delete e._idResourcesMap[this.id];
                var t;
                if (this._url) {
                    t = e._urlResourcesMap[this._url], t && (t.splice(t.indexOf(this), 1), 0 === t.length && delete e._urlResourcesMap[this._url]);
                    var i = Ye.getRes(this._url);
                    i == this && delete Ye.loadedMap[this._url];
                }
            }
        }, r(0, n, "id", function() {
            return this._id;
        }), r(0, n, "gpuMemory", function() {
            return this._gpuMemory;
        }), r(0, n, "url", function() {
            return this._url;
        }), r(0, n, "cpuMemory", function() {
            return this._cpuMemory;
        }), r(0, n, "destroyed", function() {
            return this._destroyed;
        }), r(0, n, "referenceCount", function() {
            return this._referenceCount;
        }), r(1, e, "cpuMemory", function() {
            return this._cpuMemory;
        }, laya.events.EventDispatcher._$SET_cpuMemory), r(1, e, "gpuMemory", function() {
            return this._gpuMemory;
        }, laya.events.EventDispatcher._$SET_gpuMemory), e._addCPUMemory = function(t) {
            this._cpuMemory += t;
        }, e._addGPUMemory = function(t) {
            this._gpuMemory += t;
        }, e._addMemory = function(t, e) {
            this._cpuMemory += t, this._gpuMemory += e;
        }, e.getResourceByID = function(t) {
            return e._idResourcesMap[t];
        }, e.getResourceByURL = function(t, i) {
            return void 0 === i && (i = 0), e._urlResourcesMap[t][i];
        }, e.destroyUnusedResources = function() {
            for (var t in e._idResourcesMap) {
                var i = e._idResourcesMap[t];
                i.lock || 0 !== i._referenceCount || i.destroy();
            }
        }, e._uniqueIDCounter = 0, e._idResourcesMap = {}, e._urlResourcesMap = {}, e._cpuMemory = 0, 
        e._gpuMemory = 0, e;
    }(_), Re = function(t) {
        function e() {
            this._bits = 0, this._parent = null, this.name = "", this.destroyed = !1, this._conchData = null, 
            this._components = null, this._activeChangeScripts = null, this._scene = null, e.__super.call(this), 
            this._children = e.ARRAY_EMPTY, this._extUIChild = e.ARRAY_EMPTY, this.createGLBuffer();
        }
        s(e, "laya.display.Node", t);
        var n = e.prototype;
        return n.createGLBuffer = function() {}, n._setBit = function(t, e) {
            if (16 === t) {
                var i = this._getBit(t);
                i != e && this._updateDisplayedInstage();
            }
            e ? this._bits |= t : this._bits &= ~t;
        }, n._getBit = function(t) {
            return 0 != (this._bits & t);
        }, n._setUpNoticeChain = function() {
            this._getBit(16) && this._setBitUp(16);
        }, n._setBitUp = function(t) {
            var e = this;
            for (e._setBit(t, !0), e = e._parent; e; ) {
                if (e._getBit(t)) return;
                e._setBit(t, !0), e = e._parent;
            }
        }, n.on = function(t, e, i, n) {
            return ("display" === t || "undisplay" === t) && (this._getBit(16) || this._setBitUp(16)), 
            this._createListener(t, e, i, n, !1);
        }, n.once = function(t, e, i, n) {
            return ("display" === t || "undisplay" === t) && (this._getBit(16) || this._setBitUp(16)), 
            this._createListener(t, e, i, n, !0);
        }, n.destroy = function(t) {
            void 0 === t && (t = !0), this.destroyed = !0, this._destroyAllComponent(), this._parent && this._parent.removeChild(this), 
            this._children && (t ? this.destroyChildren() : this.removeChildren()), this.onDestroy(), 
            this._children = null, this.offAll();
        }, n.onDestroy = function() {}, n.destroyChildren = function() {
            if (this._children) for (var t = 0, e = this._children.length; e > t; t++) this._children[0].destroy(!0);
        }, n.addChild = function(t) {
            if (!t || this.destroyed || t === this) return t;
            if (t._zOrder && this._setBit(32, !0), t._parent === this) {
                var i = this.getChildIndex(t);
                i !== this._children.length - 1 && (this._children.splice(i, 1), this._children.push(t), 
                this._childChanged());
            } else t._parent && t._parent.removeChild(t), this._children === e.ARRAY_EMPTY && (this._children = []), 
            this._children.push(t), t._setParent(this), this._childChanged();
            return t;
        }, n.addInputChild = function(t) {
            if (this._extUIChild == e.ARRAY_EMPTY) this._extUIChild = [ t ]; else {
                if (this._extUIChild.indexOf(t) >= 0) return null;
                this._extUIChild.push(t);
            }
            return null;
        }, n.removeInputChild = function(t) {
            var e = this._extUIChild.indexOf(t);
            e >= 0 && this._extUIChild.splice(e, 1);
        }, n.addChildren = function() {
            for (var t = arguments, e = 0, i = t.length; i > e; ) this.addChild(t[e++]);
        }, n.addChildAt = function(t, i) {
            if (!t || this.destroyed || t === this) return t;
            if (t._zOrder && this._setBit(32, !0), i >= 0 && i <= this._children.length) {
                if (t._parent === this) {
                    var n = this.getChildIndex(t);
                    this._children.splice(n, 1), this._children.splice(i, 0, t), this._childChanged();
                } else t._parent && t._parent.removeChild(t), this._children === e.ARRAY_EMPTY && (this._children = []), 
                this._children.splice(i, 0, t), t._setParent(this);
                return t;
            }
            throw new Error("appendChildAt:The index is out of bounds");
        }, n.getChildIndex = function(t) {
            return this._children.indexOf(t);
        }, n.getChildByName = function(t) {
            var e = this._children;
            if (e) for (var i = 0, n = e.length; n > i; i++) {
                var s = e[i];
                if (s.name === t) return s;
            }
            return null;
        }, n.getChildAt = function(t) {
            return this._children[t] || null;
        }, n.setChildIndex = function(t, e) {
            var i = this._children;
            if (0 > e || e >= i.length) throw new Error("setChildIndex:The index is out of bounds.");
            var n = this.getChildIndex(t);
            if (0 > n) throw new Error("setChildIndex:node is must child of this object.");
            return i.splice(n, 1), i.splice(e, 0, t), this._childChanged(), t;
        }, n._childChanged = function() {}, n.removeChild = function(t) {
            if (!this._children) return t;
            var e = this._children.indexOf(t);
            return this.removeChildAt(e);
        }, n.removeSelf = function() {
            return this._parent && this._parent.removeChild(this), this;
        }, n.removeChildByName = function(t) {
            var e = this.getChildByName(t);
            return e && this.removeChild(e), e;
        }, n.removeChildAt = function(t) {
            var e = this.getChildAt(t);
            return e && (this._children.splice(t, 1), e._setParent(null)), e;
        }, n.removeChildren = function(t, i) {
            if (void 0 === t && (t = 0), void 0 === i && (i = 2147483647), this._children && this._children.length > 0) {
                var n = this._children;
                if (0 === t && i >= n.length - 1) {
                    var s = n;
                    this._children = e.ARRAY_EMPTY;
                } else s = n.splice(t, i - t);
                for (var r = 0, o = s.length; o > r; r++) s[r]._setParent(null);
            }
            return this;
        }, n.replaceChild = function(t, e) {
            var i = this._children.indexOf(e);
            return i > -1 ? (this._children.splice(i, 1, t), e._setParent(null), t._setParent(this), 
            t) : null;
        }, n._setParent = function(t) {
            this._parent !== t && (t ? (this._parent = t, this._onAdded(), this.event("added"), 
            this._getBit(16) && (this._setUpNoticeChain(), t.displayedInStage && this._displayChild(this, !0)), 
            t._childChanged(this)) : (this._onRemoved(), this.event("removed"), this._parent._childChanged(), 
            this._getBit(16) && this._displayChild(this, !1), this._parent = t));
        }, n._updateDisplayedInstage = function() {
            var t;
            t = this;
            for (var e = i.stage, n = !1; t; ) {
                if (t._getBit(16)) {
                    n = t._getBit(128);
                    break;
                }
                if (t === e || t._getBit(128)) {
                    n = !0;
                    break;
                }
                t = t._parent;
            }
            this._setBit(128, n);
        }, n._setDisplay = function(t) {
            this._getBit(128) !== t && (this._setBit(128, t), t ? this.event("display") : this.event("undisplay"));
        }, n._displayChild = function(t, e) {
            var i = t._children;
            if (i) for (var n = 0, s = i.length; s > n; n++) {
                var r = i[n];
                r._getBit(16) && (r._children.length > 0 ? this._displayChild(r, e) : r._setDisplay(e));
            }
            t._setDisplay(e);
        }, n.contains = function(t) {
            if (t === this) return !0;
            for (;t; ) {
                if (t._parent === this) return !0;
                t = t._parent;
            }
            return !1;
        }, n.timerLoop = function(t, e, n, s, r, o) {
            void 0 === r && (r = !0), void 0 === o && (o = !1);
            var a = this.scene ? this.scene.timer : i.timer;
            a.loop(t, e, n, s, r, o);
        }, n.timerOnce = function(t, e, n, s, r) {
            void 0 === r && (r = !0);
            var o = this.scene ? this.scene.timer : i.timer;
            o._create(!1, !1, t, e, n, s, r);
        }, n.frameLoop = function(t, e, n, s, r) {
            void 0 === r && (r = !0);
            var o = this.scene ? this.scene.timer : i.timer;
            o._create(!0, !0, t, e, n, s, r);
        }, n.frameOnce = function(t, e, n, s, r) {
            void 0 === r && (r = !0);
            var o = this.scene ? this.scene.timer : i.timer;
            o._create(!0, !1, t, e, n, s, r);
        }, n.clearTimer = function(t, e) {
            var n = this.scene ? this.scene.timer : i.timer;
            n.clear(t, e);
        }, n.callLater = function(t, e) {
            var n = this.scene ? this.scene.timer : i.timer;
            n.callLater(this, t, e);
        }, n.runCallLater = function(t) {
            var e = this.scene ? this.scene.timer : i.timer;
            e.runCallLater(this, t);
        }, n._onActive = function() {
            z.spriteCount++;
        }, n._onInActive = function() {
            z.spriteCount--;
        }, n._onActiveInScene = function() {}, n._onInActiveInScene = function() {}, n._parse = function() {}, 
        n._setBelongScene = function(t) {
            if (!this._scene) {
                if (this._scene = t, this._components) for (var e = 0, i = this._components.length; i > e; e++) this._components[e]._setActiveInScene(!0);
                for (this._onActiveInScene(), e = 0, i = this._children.length; i > e; e++) this._children[e]._setBelongScene(t);
            }
        }, n._setUnBelongScene = function() {
            if (this._scene !== this) {
                if (this._onInActiveInScene(), this._components) for (var t = 0, e = this._components.length; e > t; t++) this._components[t]._setActiveInScene(!1);
                for (this._scene = null, t = 0, e = this._children.length; e > t; t++) this._children[t]._setUnBelongScene();
            }
        }, n.onAwake = function() {}, n.onEnable = function() {}, n._processActive = function() {
            this._activeChangeScripts || (this._activeChangeScripts = []), this._activeHierarchy(this._activeChangeScripts), 
            this._activeScripts();
        }, n._activeHierarchy = function(t) {
            if (this._setBit(2, !0), this._components) for (var e = 0, i = this._components.length; i > e; e++) {
                var n = this._components[e];
                n._setActive(!0), n._isScript() && n._enabled && t.push(n);
            }
            for (this._onActive(), e = 0, i = this._children.length; i > e; e++) {
                var s = this._children[e];
                !s._getBit(1) && s._activeHierarchy(t);
            }
            this._getBit(4) || (this._setBit(4, !0), this.onAwake()), this.onEnable();
        }, n._activeScripts = function() {
            for (var t = 0, e = this._activeChangeScripts.length; e > t; t++) this._activeChangeScripts[t].onEnable();
            this._activeChangeScripts.length = 0;
        }, n._processInActive = function() {
            this._activeChangeScripts || (this._activeChangeScripts = []), this._inActiveHierarchy(this._activeChangeScripts), 
            this._inActiveScripts();
        }, n._inActiveHierarchy = function(t) {
            if (this._onInActive(), this._components) for (var e = 0, i = this._components.length; i > e; e++) {
                var n = this._components[e];
                n._setActive(!1), n._isScript() && n._enabled && t.push(n);
            }
            for (this._setBit(2, !1), e = 0, i = this._children.length; i > e; e++) {
                var s = this._children[e];
                s && !s._getBit(1) && s._inActiveHierarchy(t);
            }
            this.onDisable();
        }, n._inActiveScripts = function() {
            for (var t = 0, e = this._activeChangeScripts.length; e > t; t++) this._activeChangeScripts[t].onDisable();
            this._activeChangeScripts.length = 0;
        }, n.onDisable = function() {}, n._onAdded = function() {
            if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length) throw "Node: can't set the main inActive node active in hierarchy,if the operate is in main inActive node or it's children script's onDisable Event.";
            var t = this._parent.scene;
            t && this._setBelongScene(t), this._parent.activeInHierarchy && this.active && this._processActive();
        }, n._onRemoved = function() {
            if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length) throw "Node: can't set the main active node inActive in hierarchy,if the operate is in main active node or it's children script's onEnable Event.";
            this._parent.activeInHierarchy && this.active && this._processInActive(), this._parent.scene && this._setUnBelongScene();
        }, n._addComponentInstance = function(t) {
            this._components = this._components || [], this._components.push(t), t.owner = this, 
            t._onAdded(), this.activeInHierarchy && (t._setActive(!0), t._isScript() && t._enabled && t.onEnable()), 
            this._scene && t._setActiveInScene(!0);
        }, n._destroyComponent = function(t) {
            if (this._components) for (var e = 0, i = this._components.length; i > e; e++) {
                var n = this._components[e];
                if (n === t) {
                    n._destroy(), this._components.splice(e, 1);
                    break;
                }
            }
        }, n._destroyAllComponent = function() {
            if (this._components) {
                for (var t = 0, e = this._components.length; e > t; t++) {
                    var i = this._components[t];
                    i._destroy();
                }
                this._components.length = 0;
            }
        }, n._cloneTo = function(t) {
            var e = t;
            if (this._components) for (var i = 0, n = this._components.length; n > i; i++) {
                var s = e.addComponent(this._components[i].constructor);
                this._components[i]._cloneTo(s);
            }
        }, n.addComponentIntance = function(t) {
            if (t.owner) throw "Node:the component has belong to other node.";
            if (t.isSingleton && this.getComponent(t.constructor)) throw "Node:the component is singleton,can't add the second one.";
            return this._addComponentInstance(t), t;
        }, n.addComponent = function(t) {
            var e = ae.createByClass(t);
            if (e._destroyed = !1, e.isSingleton && this.getComponent(t)) throw "无法实例" + t + "组件，" + t + "组件已存在！";
            return this._addComponentInstance(e), e;
        }, n.getComponent = function(t) {
            if (this._components) for (var e = 0, n = this._components.length; n > e; e++) {
                var s = this._components[e];
                if (i.__typeof(s, t)) return s;
            }
            return null;
        }, n.getComponents = function(t) {
            var e;
            if (this._components) for (var n = 0, s = this._components.length; s > n; n++) {
                var r = this._components[n];
                i.__typeof(r, t) && (e = e || [], e.push(r));
            }
            return e;
        }, r(0, n, "numChildren", function() {
            return this._children.length;
        }), r(0, n, "parent", function() {
            return this._parent;
        }), r(0, n, "activeInHierarchy", function() {
            return this._getBit(2);
        }), r(0, n, "active", function() {
            return !this._getBit(8) && !this._getBit(1);
        }, function(t) {
            if (t = !!t, !this._getBit(1) !== t) {
                if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length) throw t ? "Node: can't set the main inActive node active in hierarchy,if the operate is in main inActive node or it's children script's onDisable Event." : "Node: can't set the main active node inActive in hierarchy,if the operate is in main active node or it's children script's onEnable Event.";
                this._setBit(1, !t), this._parent && this._parent.activeInHierarchy && (t ? this._processActive() : this._processInActive());
            }
        }), r(0, n, "displayedInStage", function() {
            return this._getBit(16) ? this._getBit(128) : (this._setBitUp(16), this._getBit(128));
        }), r(0, n, "scene", function() {
            return this._scene;
        }), r(0, n, "timer", function() {
            return this.scene ? this.scene.timer : i.timer;
        }), e.ARRAY_EMPTY = [], e;
    }(_), Be = function(t) {
        function e() {
            this._responseType = null, this._data = null, this._url = null, e.__super.call(this), 
            this._http = new I.window.XMLHttpRequest();
        }
        s(e, "laya.net.HttpRequest", t);
        var i = e.prototype;
        return i.send = function(t, e, i, n, s) {
            void 0 === i && (i = "get"), void 0 === n && (n = "text"), this._responseType = n, 
            this._data = null, this._url = t;
            var r = this, o = this._http;
            if (t = ne.getAdptedFilePath(t), o.open(i, t, !0), s) for (var a = 0; a < s.length; a++) o.setRequestHeader(s[a++], s[a]); else fe.isConchApp || (e && "string" != typeof e ? o.setRequestHeader("Content-Type", "application/json") : o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"));
            o.responseType = "arraybuffer" !== n ? "text" : "arraybuffer", o.onerror = function(t) {
                r._onError(t);
            }, o.onabort = function(t) {
                r._onAbort(t);
            }, o.onprogress = function(t) {
                r._onProgress(t);
            }, o.onload = function(t) {
                r._onLoad(t);
            }, o.send(e);
        }, i._onProgress = function(t) {
            t && t.lengthComputable && this.event("progress", t.loaded / t.total);
        }, i._onAbort = function() {
            this.error("Request was aborted by user");
        }, i._onError = function() {
            this.error("Request failed Status:" + this._http.status + " text:" + this._http.statusText);
        }, i._onLoad = function() {
            var t = this._http, e = void 0 !== t.status ? t.status : 200;
            200 === e || 204 === e || 0 === e ? this.complete() : this.error("[" + t.status + "]" + t.statusText + ":" + t.responseURL);
        }, i.error = function(t) {
            this.clear(), console.warn(this.url, t), this.event("error", t);
        }, i.complete = function() {
            this.clear();
            var t = !0;
            try {
                this._data = "json" === this._responseType ? JSON.parse(this._http.responseText) : "xml" === this._responseType ? x.parseXMLFromString(this._http.responseText) : this._http.response || this._http.responseText;
            } catch (e) {
                t = !1, this.error(e.message);
            }
            t && this.event("complete", this._data instanceof Array ? [ this._data ] : this._data);
        }, i.clear = function() {
            var t = this._http;
            t.onerror = t.onabort = t.onprogress = t.onload = null;
        }, r(0, i, "url", function() {
            return this._url;
        }), r(0, i, "http", function() {
            return this._http;
        }), r(0, i, "data", function() {
            return this._data;
        }), e;
    }(_), Fe = function(t) {
        function e() {
            this.url = null, this.audio = null, this.loaded = !1, e.__super.call(this);
        }
        s(e, "laya.media.h5audio.AudioSound", t);
        var i = e.prototype;
        return i.dispose = function() {
            var t = e._audioCache[this.url];
            ae.clearBySign("audio:" + this.url), t && (fe.isConchApp || (t.src = ""), delete e._audioCache[this.url]);
        }, i.load = function(t) {
            function i() {
                s(), o.loaded = !0, o.event("complete");
            }
            function n() {
                r.load = null, s(), o.event("error");
            }
            function s() {
                r.removeEventListener("canplaythrough", i), r.removeEventListener("error", n);
            }
            t = ne.formatURL(t), this.url = t;
            var r;
            if (t == oe._bgMusic ? (e._initMusicAudio(), r = e._musicAudio, r.src != t && (e._audioCache[r.src] = null, 
            r = null)) : r = e._audioCache[t], r && r.readyState >= 2) return this.event("complete"), 
            void 0;
            r || (t == oe._bgMusic ? (e._initMusicAudio(), r = e._musicAudio) : r = I.createElement("audio"), 
            e._audioCache[t] = r, r.src = t), r.addEventListener("canplaythrough", i), r.addEventListener("error", n);
            var o = this;
            this.audio = r, r.load ? r.load() : n();
        }, i.play = function(t, i) {
            if (void 0 === t && (t = 0), void 0 === i && (i = 0), !this.url) return null;
            var n;
            if (n = this.url == oe._bgMusic ? e._musicAudio : e._audioCache[this.url], !n) return null;
            var s;
            s = ae.getItem("audio:" + this.url), fe.isConchApp ? s || (s = I.createElement("audio"), 
            s.src = this.url) : this.url == oe._bgMusic ? (e._initMusicAudio(), s = e._musicAudio, 
            s.src = this.url) : s = s ? s : n.cloneNode(!0);
            var r = new Ke(s);
            return r.url = this.url, r.loops = i, r.startTime = t, r.play(), oe.addChannel(r), 
            r;
        }, r(0, i, "duration", function() {
            var t;
            return t = e._audioCache[this.url], t ? t.duration : 0;
        }), e._initMusicAudio = function() {
            e._musicAudio || (e._musicAudio || (e._musicAudio = I.createElement("audio")), fe.isConchApp || I.document.addEventListener("mousedown", e._makeMusicOK));
        }, e._makeMusicOK = function() {
            I.document.removeEventListener("mousedown", e._makeMusicOK), e._musicAudio.src ? e._musicAudio.play() : (e._musicAudio.src = "", 
            e._musicAudio.load());
        }, e._audioCache = {}, e._musicAudio = null, e;
    }(_), Oe = function(t) {
        function e() {
            this.worker = null, this._useWorkerLoader = !1, e.__super.call(this);
            var t = this;
            this.worker = new I.window.Worker(e.workerPath), this.worker.onmessage = function(e) {
                t.workerMessage(e.data);
            };
        }
        s(e, "laya.net.WorkerLoader", t);
        var i = e.prototype;
        return i.workerMessage = function(t) {
            if (t) switch (t.type) {
              case "Image":
                this.imageLoaded(t);
                break;

              case "Disable":
                e.enable = !1;
            }
        }, i.imageLoaded = function(t) {
            if (!t.dataType || "imageBitmap" != t.dataType) return this.event(t.url, null), 
            void 0;
            var e = new qe(!0), i = e.source.getContext("2d");
            switch (t.dataType) {
              case "imageBitmap":
                var n = t.imageBitmap;
                e.size(n.width, n.height), i.drawImage(n, 0, 0);
            }
            if (console.log("load:", t.url), fe.isWebGL) {
                e._setGPUMemory(0);
                var s = new laya.webgl.resource.Texture2D();
                s.loadImageSource(e), e = s;
            }
            this.event(t.url, e);
        }, i.loadImage = function(t) {
            this.worker.postMessage(t);
        }, i._loadImage = function(t) {
            function i() {
                laya.net.WorkerLoader.I.off(t, n, s);
            }
            var n = this;
            if (!this._useWorkerLoader || !e._enable) return e._preLoadFun.call(n, t), void 0;
            t = ne.formatURL(t);
            var s = function(s) {
                i(), s ? n.onLoaded(s) : e._preLoadFun.call(n, t);
            };
            laya.net.WorkerLoader.I.on(t, n, s), laya.net.WorkerLoader.I.loadImage(t);
        }, r(1, e, "enable", function() {
            return e._enable;
        }, function(t) {
            e._enable != t && (e._enable = t, t && null == e._preLoadFun && (e._enable = e.__init__()));
        }), e.__init__ = function() {
            return null != e._preLoadFun ? !1 : I.window.Worker ? (e._preLoadFun = Ye.prototype._loadImage, 
            Ye.prototype._loadImage = e.prototype._loadImage, e.I || (e.I = new e()), !0) : !1;
        }, e.workerSupported = function() {
            return I.window.Worker ? !0 : !1;
        }, e.enableWorkerLoader = function() {
            e._tryEnabled || (e.enable = !0, e._tryEnabled = !0);
        }, e.I = null, e.workerPath = "libs/workerloader.js", e._preLoadFun = null, e._enable = !1, 
        e._tryEnabled = !1, e;
    }(_), ke = function(t) {
        function e() {
            this.retryNum = 1, this.retryDelay = 0, this.maxLoader = 5, this._loaders = [], 
            this._loaderCount = 0, this._resInfos = [], this._infoPool = [], this._maxPriority = 5, 
            this._failRes = {}, this._statInfo = {
                count: 1,
                loaded: 1
            }, e.__super.call(this);
            for (var t = 0; t < this._maxPriority; t++) this._resInfos[t] = [];
        }
        var rzh=[]
        var r;
        s(e, "laya.net.LoaderManager", t);
        var o = e.prototype;
        return o.getProgress = function() {
            return this._statInfo.loaded / this._statInfo.count;
        }, o.resetProgress = function() {
            this._statInfo.count = this._statInfo.loaded = 1;
        }, o.create = function(t, e, i, n, s, r, o, a, h) {
            void 0 === o && (o = 1), void 0 === a && (a = !0), this._create(t, !0, e, i, n, s, r, o, a, h);
        }, o._create = function(t, e, i, n, s, r, o, a, h, l) {
            function u(t, e) {
                g++, t.progress = 1, e || (_ = !1), g === p && i && i.runWith(_);
            }
            function c(t, e) {
                t.progress = e;
                for (var i = 0, n = 0; p > n; n++) {
                    var s = f[n];
                    i += s.progress;
                }
                var r = i / p;
                m.runWith(r);
            }
            if (void 0 === a && (a = 1), void 0 === h && (h = !0), t instanceof Array) {
                var _ = !0, f = t, p = f.length, g = 0;
                if (n) var m = d.create(n.caller, n.method, n.args, !1);
                for (var v = 0; p > v; v++) {
                    var y = f[v];
                    "string" == typeof y && (y = f[v] = {
                        url: y
                    }), y.progress = 0;
                }
                for (v = 0; p > v; v++) {
                    y = f[v];
                    var x = n ? d.create(null, c, [ y ], !1) : null, w = n || i ? d.create(null, u, [ y ]) : null;
                    this._createOne(y.url, e, w, x, y.type || s, y.constructParams || r, y.propertyParams || o, y.priority || a, h, l);
                }
            } else this._createOne(t, e, i, n, s, r, o, a, h, l);
        }, o._createOne = function(t, n, s, r, o, a, h, l, u, c) {
            function _(e) {
                e && (!n && e instanceof laya.resource.Resource && e._addReference(), e._setCreateURL(t)), 
                s && s.runWith(e), i.loader.event(t);
            }
            void 0 === l && (l = 1), void 0 === u && (u = !0);
            var f = this.getRes(t);
            if (f) !n && f instanceof laya.resource.Resource && f._addReference(), r && r.runWith(1), 
            s && s.runWith(f); else {
                var p = x.getFileExtension(t);
                if (o || (o = e.createMap[p] ? e.createMap[p][0] : null), !o) return this.load(t, s, r, o, l, u), 
                void 0;
                var g = Ye.parserMap;
                if (!g[o]) return this.load(t, s, r, o, l, u), void 0;
                this._createLoad(t, d.create(null, _), r, o, a, h, l, u, !0, c);
            }
        }, o.load = function(t, n, s, o, a, h, l, u, c) {
            var _ = this;
            if (void 0 === a && (a = 1), void 0 === h && (h = !0), void 0 === u && (u = !1), 
            void 0 === c && (c = !1), t instanceof Array) return this._loadAssets(t, n, s, o, a, h, l);
            var d = Ye.getRes(t);
            if (u || null == d) {
                var f;
                f = t, t = G.getFileLoadPath(t), t != f && "nativeimage" !== o ? o = "atlas" : f = null;
                var p = e._resMap[ne.formatURL(t)];
                p ? (n && (f ? n && p._createListener("complete", this, this._resInfoLoaded, [ f, n ], !1, !1) : n && p._createListener("complete", n.caller, n.method, n.args, !1, !1)), 
                s && p._createListener("progress", s.caller, s.method, s.args, !1, !1)) : (p = this._infoPool.length ? this._infoPool.pop() : new r(), 
                p.url = t, p.type = o, p.cache = h, p.group = l, p.ignoreCache = u, p.useWorkerLoader = c, 
                p.originalUrl = f, n && p.on("complete", n.caller, n.method, n.args), s && p.on("progress", s.caller, s.method, s.args), 
                e._resMap[ne.formatURL(t)] = p, a = a < this._maxPriority ? a : this._maxPriority - 1, 
                this._resInfos[a].push(p), this._statInfo.count++, this.event("progress", this.getProgress()), 
                this._next());
            } else i.systemTimer.frameOnce(1, null, function() {
                s && s.runWith(1), n && n.runWith(d instanceof Array ? [ d ] : d), _._loaderCount || _.event("complete");
            });
            return this;
        }, o._resInfoLoaded = function(t, e) {
            e.runWith(Ye.getRes(t));
        }, o._createLoad = function(t, n, s, o, a, h, l, u, c, _) {
            var d = this;
            if (void 0 === l && (l = 1), void 0 === u && (u = !0), void 0 === c && (c = !1), 
            t instanceof Array) return this._loadAssets(t, n, s, o, l, u);
            var f = Ye.getRes(t);
            if (null != f) i.systemTimer.frameOnce(1, null, function() {
                s && s.runWith(1), n && n.runWith(f), d._loaderCount || d.event("complete");
            }); else {
                var p = e._resMap[ne.formatURL(t)];
                p ? (n && p._createListener("complete", n.caller, n.method, n.args, !1, !1), s && p._createListener("progress", s.caller, s.method, s.args, !1, !1)) : (p = this._infoPool.length ? this._infoPool.pop() : new r(), 
                p.url = t, p.type = o, p.cache = !1, p.ignoreCache = c, p.originalUrl = null, p.createCache = u, 
                p.createConstructParams = a, p.createPropertyParams = h, p.group = _, n && p.on("complete", n.caller, n.method, n.args), 
                s && p.on("progress", s.caller, s.method, s.args), e._resMap[ne.formatURL(t)] = p, 
                l = l < this._maxPriority ? l : this._maxPriority - 1, this._resInfos[l].push(p), 
                this._statInfo.count++, this.event("progress", this.getProgress()), this._next());
            }
            return this;
        }, o._next = function() {
            if (!(this._loaderCount >= this.maxLoader)) {
                for (var t = 0; t < this._maxPriority; t++) for (var e = this._resInfos[t]; e.length > 0; ) {
                    var i = e.shift();
                    if (i) return this._doLoad(i);
                }
                this._loaderCount || this.event("complete");
            }
        }, o._doLoad = function(t) {
            function e(e) {
                i.offAll(), i._data = null, i._customParse = !1, n._loaders.push(i), n._endLoad(t, e instanceof Array ? [ e ] : e), 
                n._loaderCount--, n._next();
            }
            this._loaderCount++;
            var i = this._loaders.length ? this._loaders.pop() : new Ye();
            i.on("complete", null, e), i.on("progress", null, function(e) {
                t.event("progress", e);
            }), i.on("error", null, function() {
                e(null);
            });
            var n = this;
            i._constructParams = t.createConstructParams, i._propertyParams = t.createPropertyParams, 
            i._createCache = t.createCache, i.load(t.url, t.type, t.cache, t.group, t.ignoreCache, t.useWorkerLoader);
        }, 
        
        o._endLoad = function(t, n) {
            var s = t.url;
            if (null == n) {
                var r = this._failRes[s] || 0;
                if (r < this.retryNum) 
                return console.warn("[warn]Retry to load:", s), 
                rzh.push(s),
                console.log("url:",rzh),
                this._failRes[s] = r + 1, 
                i.systemTimer.once(this.retryDelay, this, this._addReTry, [ t ], !1), void 0;
                Ye.clearRes(s), console.warn("[error]Failed to load:", s), this.event("error", s);
            }
            this._failRes[s] && (this._failRes[s] = 0), delete e._resMap[ne.formatURL(s)], t.originalUrl && (n = Ye.getRes(t.originalUrl)), 
            t.event("complete", n), t.offAll(), this._infoPool.push(t), this._statInfo.loaded++, 
            this.event("progress", this.getProgress());
        }, o._addReTry = function(t) {
            this._resInfos[this._maxPriority - 1].push(t), this._next();
        }, o.clearRes = function(t) {
            Ye.clearRes(t);
        }, o.clearTextureRes = function(t) {
            Ye.clearTextureRes(t);
        }, o.getRes = function(t) {
            return Ye.getRes(t);
        }, o.cacheRes = function(t, e) {
            Ye.cacheRes(t, e);
        }, o.setGroup = function(t, e) {
            Ye.setGroup(t, e);
        }, o.clearResByGroup = function(t) {
            Ye.clearResByGroup(t);
        }, o.clearUnLoaded = function() {
            for (var t = 0; t < this._maxPriority; t++) {
                for (var i = this._resInfos[t], n = i.length - 1; n > -1; n--) {
                    var s = i[n];
                    s && (s.offAll(), this._infoPool.push(s));
                }
                i.length = 0;
            }
            this._loaderCount = 0, e._resMap = {};
        }, o.cancelLoadByUrls = function(t) {
            if (t) for (var e = 0, i = t.length; i > e; e++) this.cancelLoadByUrl(t[e]);
        }, o.cancelLoadByUrl = function(t) {
            for (var i = 0; i < this._maxPriority; i++) for (var n = this._resInfos[i], s = n.length - 1; s > -1; s--) {
                var r = n[s];
                r && r.url === t && (n[s] = null, r.offAll(), this._infoPool.push(r));
            }
            e._resMap[ne.formatURL(t)] && delete e._resMap[ne.formatURL(t)];
        }, o._loadAssets = function(t, e, i, n, s, r, o) {
            function a(t, i) {
                u++, t.progress = 1, i || (f = !1), u === l && e && e.runWith(f);
            }
            function h(t, e) {
                if (null != i) {
                    t.progress = e;
                    for (var n = 0, s = 0; s < _.length; s++) {
                        var r = _[s];
                        n += r.size * r.progress;
                    }
                    var o = n / c;
                    i.runWith(o);
                }
            }
            void 0 === s && (s = 1), void 0 === r && (r = !0);
            for (var l = t.length, u = 0, c = 0, _ = [], f = !0, p = 0; l > p; p++) {
                var g = t[p];
                "string" == typeof g && (g = {
                    url: g,
                    type: n,
                    size: 1,
                    priority: s
                }), g.size || (g.size = 1), g.progress = 0, c += g.size, _.push(g);
                var m = i ? d.create(null, h, [ g ], !1) : null, v = e || i ? d.create(null, a, [ g ]) : null;
                this.load(g.url, v, m, g.type, g.priority || 1, r, g.group || o, !1, g.useWorkerLoader);
            }
            return this;
        }, o.decodeBitmaps = function(t) {
            var e, i = 0, n = t.length;
            for (e = fe._context, i = 0; n > i; i++) {
                var s;
                if (s = Ye.getAtlas(t[i])) this._decodeTexture(s[0], e); else {
                    var r;
                    r = this.getRes(t[i]), r && r instanceof laya.resource.Texture && this._decodeTexture(r, e);
                }
            }
        }, o._decodeTexture = function(t, e) {
            var n = t.bitmap;
            if (t && n) {
                var s = n.source || n.image;
                if (s && i.__typeof(s, I.window.HTMLImageElement)) {
                    e.drawImage(s, 0, 0, 1, 1);
                    {
                        e.getImageData(0, 0, 1, 1);
                    }
                }
            }
        }, e.cacheRes = function(t, e) {
            Ye.cacheRes(t, e);
        }, e._resMap = {}, n(e, [ "createMap", function() {
            return this.createMap = {
                atlas: [ null, "atlas" ]
            };
        } ]), e.__init$ = function() {
            r = function(t) {
                function e() {
                    this.url = null, this.type = null, this.cache = !1, this.group = null, this.ignoreCache = !1, 
                    this.useWorkerLoader = !1, this.originalUrl = null, this.createCache = !1, this.createConstructParams = null, 
                    this.createPropertyParams = null, e.__super.call(this);
                }
                return s(e, "", t), e;
            }(_);
        }, e;
    }(_), Ne = (function(t) {
        function e() {
            e.__super.call(this);
        }
        s(e, "laya.media.Sound", t);
        var i = e.prototype;
        return i.load = function() {}, i.play = function(t, e) {
            return void 0 === t && (t = 0), void 0 === e && (e = 0), null;
        }, i.dispose = function() {}, r(0, i, "duration", function() {
            return 0;
        }), e;
    }(_), function(t) {
        function e() {
            this._labelDic = null, this._tweenDic = {}, this._tweenDataList = [], this._endTweenDataList = null, 
            this._currTime = 0, this._lastTime = 0, this._startTime = 0, this._index = 0, this._gidIndex = 0, 
            this._firstTweenDic = {}, this._startTimeSort = !1, this._endTimeSort = !1, this._loopKey = !1, 
            this.scale = 1, this._frameRate = 60, this._frameIndex = 0, this._total = 0, e.__super.call(this);
        }
        var n;
        s(e, "laya.utils.TimeLine", t);
        var o = e.prototype;
        return o.to = function(t, e, i, n, s) {
            return void 0 === s && (s = 0), this._create(t, e, i, n, s, !0);
        }, o.from = function(t, e, i, n, s) {
            return void 0 === s && (s = 0), this._create(t, e, i, n, s, !1);
        }, o._create = function(t, e, i, s, r, o) {
            var a = ae.getItemByClass("tweenData", n);
            return a.isTo = o, a.type = 0, a.target = t, a.duration = i, a.data = e, a.startTime = this._startTime + r, 
            a.endTime = a.startTime + a.duration, a.ease = s, this._startTime = Math.max(a.endTime, this._startTime), 
            this._tweenDataList.push(a), this._startTimeSort = !0, this._endTimeSort = !0, this;
        }, o.addLabel = function(t, e) {
            var i = ae.getItemByClass("tweenData", n);
            return i.type = 1, i.data = t, i.endTime = i.startTime = this._startTime + e, this._labelDic || (this._labelDic = {}), 
            this._labelDic[t] = i, this._tweenDataList.push(i), this;
        }, o.removeLabel = function(t) {
            if (this._labelDic && this._labelDic[t]) {
                var e = this._labelDic[t];
                if (e) {
                    var i = this._tweenDataList.indexOf(e);
                    i > -1 && this._tweenDataList.splice(i, 1);
                }
                delete this._labelDic[t];
            }
        }, o.gotoTime = function(t) {
            function e(t, e) {
                return t.endTime > e.endTime ? 1 : t.endTime < e.endTime ? -1 : 0;
            }
            if (null != this._tweenDataList && 0 != this._tweenDataList.length) {
                var i, n;
                for (var s in this._firstTweenDic) if (n = this._firstTweenDic[s]) for (var r in n) n.diyTarget.hasOwnProperty(r) && (n.diyTarget[r] = n[r]);
                for (s in this._tweenDic) i = this._tweenDic[s], i.clear(), delete this._tweenDic[s];
                this._index = 0, this._gidIndex = 0, this._currTime = t, this._lastTime = I.now();
                var o;
                null == this._endTweenDataList || this._endTimeSort ? (this._endTimeSort = !1, this._endTweenDataList = o = this._tweenDataList.concat(), 
                o.sort(e)) : o = this._endTweenDataList;
                for (var a, h = 0, l = o.length; l > h; h++) if (a = o[h], 0 == a.type) {
                    if (!(t >= a.endTime)) break;
                    this._index = Math.max(this._index, h + 1);
                    var u = a.data;
                    if (a.isTo) for (var c in u) a.target[c] = u[c];
                }
                for (h = 0, l = this._tweenDataList.length; l > h; h++) a = this._tweenDataList[h], 
                0 == a.type && t >= a.startTime && t < a.endTime && (this._index = Math.max(this._index, h + 1), 
                this._gidIndex++, i = ae.getItemByClass("tween", se), i._create(a.target, a.data, a.duration, a.ease, d.create(this, this._animComplete, [ this._gidIndex ]), 0, !1, a.isTo, !0, !1), 
                i.setStartTime(this._currTime - (t - a.startTime)), i._updateEase(this._currTime), 
                i.gid = this._gidIndex, this._tweenDic[this._gidIndex] = i);
            }
        }, o.gotoLabel = function(t) {
            if (null != this._labelDic) {
                var e = this._labelDic[t];
                e && this.gotoTime(e.startTime);
            }
        }, o.pause = function() {
            i.timer.clear(this, this._update);
        }, o.resume = function() {
            this.play(this._currTime, this._loopKey);
        }, o.play = function(t, e) {
            function n(t, e) {
                return t.startTime > e.startTime ? 1 : t.startTime < e.startTime ? -1 : 0;
            }
            if (void 0 === t && (t = 0), void 0 === e && (e = !1), this._tweenDataList) {
                if (this._startTimeSort) {
                    this._startTimeSort = !1, this._tweenDataList.sort(n);
                    for (var s = 0, r = this._tweenDataList.length; r > s; s++) {
                        var o = this._tweenDataList[s];
                        if (null != o && 0 == o.type) {
                            var a = o.target, h = a.$_GID || (a.$_GID = x.getGID()), l = null;
                            null == this._firstTweenDic[h] ? (l = {}, l.diyTarget = a, this._firstTweenDic[h] = l) : l = this._firstTweenDic[h];
                            for (var u in o.data) null == l[u] && (l[u] = a[u]);
                        }
                    }
                }
                "string" == typeof t ? this.gotoLabel(t) : this.gotoTime(t), this._loopKey = e, 
                this._lastTime = I.now(), i.timer.frameLoop(1, this, this._update);
            }
        }, o._update = function() {
            if (this._currTime >= this._startTime) {
                if (!this._loopKey) {
                    for (var t in this._tweenDic) s = this._tweenDic[t], s.complete();
                    return this._complete(), this.pause(), void 0;
                }
                if (this._complete(), !this._tweenDataList) return;
                this.gotoTime(0);
            }
            var e = I.now(), i = e - this._lastTime, n = this._currTime += i * this.scale;
            this._lastTime = e;
            for (t in this._tweenDic) s = this._tweenDic[t], s._updateEase(n);
            var s;
            if (0 != this._tweenDataList.length && this._index < this._tweenDataList.length) {
                var r = this._tweenDataList[this._index];
                n >= r.startTime && (this._index++, 0 == r.type ? (this._gidIndex++, s = ae.getItemByClass("tween", se), 
                s._create(r.target, r.data, r.duration, r.ease, d.create(this, this._animComplete, [ this._gidIndex ]), 0, !1, r.isTo, !0, !1), 
                s.setStartTime(n), s.gid = this._gidIndex, this._tweenDic[this._gidIndex] = s, s._updateEase(n)) : this.event("label", r.data));
            }
        }, o._animComplete = function(t) {
            var e = this._tweenDic[t];
            e && delete this._tweenDic[t];
        }, o._complete = function() {
            this.event("complete");
        }, o.reset = function() {
            var t;
            if (this._labelDic) for (t in this._labelDic) delete this._labelDic[t];
            var e;
            for (t in this._tweenDic) e = this._tweenDic[t], e.clear(), delete this._tweenDic[t];
            for (t in this._firstTweenDic) delete this._firstTweenDic[t];
            if (this._endTweenDataList = null, this._tweenDataList && this._tweenDataList.length) {
                var n = 0, s = 0;
                for (s = this._tweenDataList.length, n = 0; s > n; n++) this._tweenDataList[n] && this._tweenDataList[n].destroy();
            }
            this._tweenDataList.length = 0, this._currTime = 0, this._lastTime = 0, this._startTime = 0, 
            this._index = 0, this._gidIndex = 0, this.scale = 1, i.timer.clear(this, this._update);
        }, o.destroy = function() {
            this.reset(), this._labelDic = null, this._tweenDic = null, this._tweenDataList = null, 
            this._firstTweenDic = null;
        }, r(0, o, "index", function() {
            return this._frameIndex;
        }, function(t) {
            this._frameIndex = t, this.gotoTime(this._frameIndex / this._frameRate * 1e3);
        }), r(0, o, "total", function() {
            return this._total = Math.floor(this._startTime / 1e3 * this._frameRate), this._total;
        }), e.to = function(t, i, n, s, r) {
            return void 0 === r && (r = 0), new e().to(t, i, n, s, r);
        }, e.from = function(t, i, n, s, r) {
            return void 0 === r && (r = 0), new e().from(t, i, n, s, r);
        }, e.__init$ = function() {
            n = function() {
                function t() {
                    this.type = 0, this.isTo = !0, this.startTime = 0 / 0, this.endTime = 0 / 0, this.target = null, 
                    this.duration = 0 / 0, this.ease = null, this.data = null;
                }
                s(t, "");
                var e = t.prototype;
                return e.destroy = function() {
                    this.target = null, this.ease = null, this.data = null, this.isTo = !0, this.type = 0, 
                    ae.recover("tweenData", this);
                }, t;
            }();
        }, e;
    }(_)), We = function(t) {
        function e() {
            this.url = null, this.loops = 0, this.startTime = 0 / 0, this.isStopped = !1, this.completeHandler = null, 
            e.__super.call(this);
        }
        s(e, "laya.media.SoundChannel", t);
        var i = e.prototype;
        return i.play = function() {}, i.stop = function() {}, i.pause = function() {}, 
        i.resume = function() {}, i.__runComplete = function(t) {
            t && t.run();
        }, r(0, i, "volume", function() {
            return 1;
        }, function() {}), r(0, i, "position", function() {
            return 0;
        }), r(0, i, "duration", function() {
            return 0;
        }), e;
    }(_), Ue = function(t) {
        function e(t, i, n, s) {
            this.uvrect = [ 0, 0, 1, 1 ], this._w = 0, this._h = 0, this._destroyed = !1, this._referenceCount = 0, 
            this.$_GID = 0, this.offsetX = 0, this.offsetY = 0, this.sourceWidth = 0, this.sourceHeight = 0, 
            this.url = null, this.scaleRate = 1, e.__super.call(this), void 0 === n && (n = 0), 
            void 0 === s && (s = 0), this.setTo(t, i, n, s);
        }
        s(e, "laya.resource.Texture", t);
        var n = e.prototype;
        return n._addReference = function() {
            this._bitmap && this._bitmap._addReference(), this._referenceCount++;
        }, n._removeReference = function() {
            this._bitmap && this._bitmap._removeReference(), this._referenceCount--;
        }, n._getSource = function() {
            return this._destroyed || !this._bitmap ? null : (this.recoverBitmap(), this._bitmap.destroyed ? null : this.bitmap._getSource());
        }, n._onLoaded = function(t, i) {
            if (i) if (i == this) ; else if (i instanceof laya.resource.Texture) {
                var n = i;
                e._create(i, 0, 0, n.width, n.height, 0, 0, n.sourceWidth, n.sourceHeight, this);
            } else this.bitmap = i, this.sourceWidth = this._w = i.width, this.sourceHeight = this._h = i.height; else ;
            t && t.run(), this.event("ready", this);
        }, n.getIsReady = function() {
            return this._destroyed ? !1 : this._bitmap ? !0 : !1;
        }, n.setTo = function(t, i, n, s) {
            if (void 0 === n && (n = 0), void 0 === s && (s = 0), this.bitmap = t, this.sourceWidth = n, 
            this.sourceHeight = s, t) {
                this._w = t.width, this._h = t.height, this.sourceWidth = this.sourceWidth || this._w, 
                this.sourceHeight = this.sourceHeight || this._h;
            }
            this.uv = i || e.DEF_UV;
        }, n.load = function(t, e) {
            this._destroyed || i.loader.load(t, d.create(this, this._onLoaded, [ e ]), null, "htmlimage", 1, !1, null, !0);
        }, n.getPixels = function(t, e, i, n) {
            if (fe.isWebGL) return re.getTexturePixels(this, t, e, i, n);
            if (fe.isConchApp) return this._nativeObj.getImageData(t, e, i, n);
            var s = this.width, r = this.height;
            if (t + i > s && (i -= t + i - s), e + n > r && (n -= e + n - r), 0 >= i || 0 >= n) return null;
            I.canvas.size(i, n), I.canvas.clear(), I.context.drawImage(this.bitmap._source, t, e, i, n, 0, 0, i, n);
            var o = I.context.getImageData(0, 0, i, n);
            return o.data;
        }, n.recoverBitmap = function() {
            var t = this, e = this._bitmap.url;
            this._destroyed || this._bitmap && !this._bitmap.destroyed || !e || i.loader.load(e, d.create(this, function(e) {
                t.bitmap = e;
            }), null, "htmlimage", 1, !1, null, !0);
        }, n.disposeBitmap = function() {
            !this._destroyed && this._bitmap && this._bitmap.destroy();
        }, n.destroy = function(t) {
            if (void 0 === t && (t = !1), !this._destroyed) {
                this._destroyed = !0;
                var e = this._bitmap;
                e && (e._removeReference(this._referenceCount), (0 === e.referenceCount || t) && e.destroy(), 
                e = null), this.url && this === i.loader.getRes(this.url) && i.loader.clearRes(this.url);
            }
        }, r(0, n, "height", function() {
            return this._h ? this._h : this.bitmap ? this.uv && this.uv !== e.DEF_UV ? (this.uv[5] - this.uv[1]) * this.bitmap.height : this.bitmap.height : 0;
        }, function(t) {
            this._h = t, this.sourceHeight || (this.sourceHeight = t);
        }), r(0, n, "uv", function() {
            return this._uv;
        }, function(t) {
            this.uvrect[0] = Math.min(t[0], t[2], t[4], t[6]), this.uvrect[1] = Math.min(t[1], t[3], t[5], t[7]), 
            this.uvrect[2] = Math.max(t[0], t[2], t[4], t[6]) - this.uvrect[0], this.uvrect[3] = Math.max(t[1], t[3], t[5], t[7]) - this.uvrect[1], 
            this._uv = t;
        }), r(0, n, "width", function() {
            return this._w ? this._w : this.bitmap ? this.uv && this.uv !== e.DEF_UV ? (this.uv[2] - this.uv[0]) * this.bitmap.width : this.bitmap.width : 0;
        }, function(t) {
            this._w = t, this.sourceWidth || (this.sourceWidth = t);
        }), r(0, n, "bitmap", function() {
            return this._bitmap;
        }, function(t) {
            this._bitmap && this._bitmap._removeReference(this._referenceCount), this._bitmap = t, 
            t && t._addReference(this._referenceCount);
        }), r(0, n, "destroyed", function() {
            return this._destroyed;
        }), e.moveUV = function(t, e, i) {
            for (var n = 0; 8 > n; n += 2) i[n] += t, i[n + 1] += e;
            return i;
        }, e.create = function(t, i, n, s, r, o, a, h, l) {
            return void 0 === o && (o = 0), void 0 === a && (a = 0), void 0 === h && (h = 0), 
            void 0 === l && (l = 0), e._create(t, i, n, s, r, o, a, h, l);
        }, e._create = function(t, i, n, s, r, o, a, h, l, u) {
            void 0 === o && (o = 0), void 0 === a && (a = 0), void 0 === h && (h = 0), void 0 === l && (l = 0);
            var c = t instanceof laya.resource.Texture, _ = c ? t.uv : e.DEF_UV, d = c ? t.bitmap : t;
            d.width && i + s > d.width && (s = d.width - i), d.height && n + r > d.height && (r = d.height - n);
            var f;
            u ? (f = u, f.setTo(d, null, h || s, l || r)) : f = new e(d, null, h || s, l || r), 
            f.width = s, f.height = r, f.offsetX = o, f.offsetY = a;
            var p = 1 / d.width, g = 1 / d.height;
            i *= p, n *= g, s *= p, r *= g;
            var m = f.uv[0], v = f.uv[1], y = f.uv[4], x = f.uv[5], w = y - m, T = x - v, C = e.moveUV(_[0], _[1], [ i, n, i + s, n, i + s, n + r, i, n + r ]);
            f.uv = new Float32Array([ m + C[0] * w, v + C[1] * T, y - (1 - C[2]) * w, v + C[3] * T, y - (1 - C[4]) * w, x - (1 - C[5]) * T, m + C[6] * w, x - (1 - C[7]) * T ]);
            var b = d.scaleRate;
            return b && 1 != b ? (f.sourceWidth /= b, f.sourceHeight /= b, f.width /= b, f.height /= b, 
            f.scaleRate = b) : f.scaleRate = 1, f;
        }, e.createFromTexture = function(t, i, n, s, r) {
            var o = t.scaleRate;
            1 != o && (i *= o, n *= o, s *= o, r *= o);
            var a = D.TEMP.setTo(i - t.offsetX, n - t.offsetY, s, r), h = a.intersection(e._rect1.setTo(0, 0, t.width, t.height), e._rect2);
            if (!h) return null;
            var l = e.create(t, h.x, h.y, h.width, h.height, h.x - a.x, h.y - a.y, s, r);
            return l;
        }, e.DEF_UV = new Float32Array([ 0, 0, 1, 0, 1, 1, 0, 1 ]), e.NO_UV = new Float32Array([ 0, 0, 0, 0, 0, 0, 0, 0 ]), 
        e.INV_UV = new Float32Array([ 0, 1, 1, 1, 1, 0, 0, 0 ]), e._rect1 = new D(), e._rect2 = new D(), 
        e;
    }(_), Ge = function(t) {
        function e() {
            this.totalCount = 0, this._completeHandler = null, this._toLoadList = null, this._isLoading = !1, 
            this._curUrl = null, e.__super.call(this), this._completeHandler = new d(this, this.onOneLoadComplete), 
            this.reset();
        }
        s(e, "laya.net.SceneLoader", t);
        var o = e.prototype;
        return o.reset = function() {
            this._toLoadList = [], this._isLoading = !1, this.totalCount = 0;
        }, o.load = function(t, e, i) {
            if (void 0 === e && (e = !1), void 0 === i && (i = !0), t instanceof Array) {
                var n = 0, s = 0;
                for (s = t.length, n = 0; s > n; n++) this._addToLoadList(t[n], e);
            } else this._addToLoadList(t, e);
            i && this._checkNext();
        }, o._addToLoadList = function(t, e) {
            void 0 === e && (e = !1), this._toLoadList.indexOf(t) >= 0 || Ye.getRes(t) || (e ? this._toLoadList.push({
                url: t
            }) : this._toLoadList.push(t), this.totalCount++);
        }, o._checkNext = function() {
            if (!this._isLoading) {
                if (0 == this._toLoadList.length) return this.event("complete"), void 0;
                var t;
                t = this._toLoadList.pop(), "string" == typeof t ? this.loadOne(t) : this.loadOne(t.url, !0);
            }
        }, o.loadOne = function(t, n) {
            void 0 === n && (n = !1), this._curUrl = t;
            var s = x.getFileExtension(this._curUrl);
            n ? i.loader.create(t, this._completeHandler) : e.LoadableExtensions[s] ? i.loader.load(t, this._completeHandler, null, e.LoadableExtensions[s]) : t != G.getFileLoadPath(t) || e.No3dLoadTypes[s] || !ke.createMap[s] ? i.loader.load(t, this._completeHandler) : i.loader.create(t, this._completeHandler);
        }, o.onOneLoadComplete = function() {
            this._isLoading = !1, Ye.getRes(this._curUrl) || console.log("Fail to load:", this._curUrl);
            var t = x.getFileExtension(this._curUrl);
            if (e.LoadableExtensions[t]) {
                var i;
                i = Ye.getRes(this._curUrl), i && i instanceof laya.components.Prefab && (i = i.json), 
                i && (i.loadList && this.load(i.loadList, !1, !1), i.loadList3D && this.load(i.loadList3D, !0, !1));
            }
            "sk" == t && this.load(this._curUrl.replace(".sk", ".png"), !1, !1), this.event("progress", this.getProgress()), 
            this._checkNext();
        }, o.getProgress = function() {
            return this.loadedCount / this.totalCount;
        }, r(0, o, "loadedCount", function() {
            return this.totalCount - this.leftCount;
        }), r(0, o, "leftCount", function() {
            return this._isLoading ? this._toLoadList.length + 1 : this._toLoadList.length;
        }), n(e, [ "LoadableExtensions", function() {
            return this.LoadableExtensions = {
                scene: "json",
                scene3d: "json",
                ani: "json",
                ui: "json",
                prefab: "prefab"
            };
        }, "No3dLoadTypes", function() {
            return this.No3dLoadTypes = {
                png: !0,
                jpg: !0,
                txt: !0
            };
        } ]), e;
    }(_), Ye = function(t) {
        function e() {
            this._data = null, this._url = null, this._type = null, this._cache = !1, this._http = null, 
            this._useWorkerLoader = !1, this._customParse = !1, this._constructParams = null, 
            this._propertyParams = null, this._createCache = !1, e.__super.call(this);
        }
        s(e, "laya.net.Loader", t);
        var n = e.prototype;
        return n.load = function(t, i, n, s, r, o) {
            if (void 0 === n && (n = !0), void 0 === r && (r = !1), void 0 === o && (o = !1), 
            !t) return this.onLoaded(null), void 0;
            if (e.setGroup(t, "666"), this._url = t, 0 === t.indexOf("data:image") ? i = "image" : t = ne.formatURL(t), 
            this._type = i || (i = e.getTypeFromUrl(this._url)), this._cache = n, this._useWorkerLoader = o, 
            this._data = null, o && Oe.enableWorkerLoader(), !r && e.loadedMap[t]) return this._data = e.loadedMap[t], 
            this.event("progress", 1), this.event("complete", this._data), void 0;
            if (s && e.setGroup(t, s), null != e.parserMap[i]) return this._customParse = !0, 
            e.parserMap[i] instanceof laya.utils.Handler ? e.parserMap[i].runWith(this) : e.parserMap[i].call(null, this), 
            void 0;
            if ("image" === i || "htmlimage" === i || "nativeimage" === i) return this._loadImage(t);
            if ("sound" === i) return this._loadSound(t);
            if ("ttf" === i) return this._loadTTF(t);
            var a;
            switch (i) {
              case "atlas":
              case "prefab":
              case "plf":
                a = "json";
                break;

              case "font":
                a = "xml";
                break;

              case "plfb":
                a = "arraybuffer";
                break;

              default:
                a = i;
            }
            e.preLoadedMap[t] ? this.onLoaded(e.preLoadedMap[t]) : (this._http || (this._http = new Be(), 
            this._http.on("progress", this, this.onProgress), this._http.on("error", this, this.onError), 
            this._http.on("complete", this, this.onLoaded)), this._http.send(t, null, "get", a));
        }, n._loadTTF = function(t) {
            t = ne.formatURL(t);
            var e = new Se();
            e.complete = d.create(this, this.onLoaded), e.load(t);
        }, n._loadImage = function(t) {
            function i() {
                var i = n;
                i && (i.onload = null, i.onerror = null, delete e._imgCache[t]);
            }
            t = ne.formatURL(t);
            var n, s = this, r = function() {
                i(), s.event("error", "Load image failed");
            };
            if ("nativeimage" === this._type) {
                var o = function() {
                    i(), s.onLoaded(n);
                };
                n = new I.window.Image(), n.crossOrigin = "", n.onload = o, n.onerror = r, n.src = t, 
                e._imgCache[t] = n;
            } else {
                var a = x.getFileExtension(t);
                if ("ktx" === a || "pvr" === a) {
                    o = function(e) {
                        var r = 0;
                        switch (a) {
                          case "ktx":
                            r = 5;
                            break;

                          case "pvr":
                            r = 12;
                        }
                        n = Je.create(0, 0, r), n.setCompressData(e), n._setCreateURL(t), i(), s.onLoaded(n);
                    };
                    var h;
                    h = new Be(), h.on("error", null, r), h.on("complete", null, o), h.send(t, null, "get", "arraybuffer");
                } else {
                    var l = new I.window.Image();
                    o = function() {
                        n = Je.create(l.width, l.height, 1), n.loadImageSource(l, !0), n._setCreateURL(t), 
                        i(), s.onLoaded(n);
                    }, l.crossOrigin = "", l.onload = o, l.onerror = r, l.src = t, n = l, e._imgCache[t] = l;
                }
            }
        }, n._loadSound = function(t) {
            function e() {
                n(), r.onLoaded(s);
            }
            function i() {
                n(), s.dispose(), r.event("error", "Load sound failed");
            }
            function n() {
                s.offAll();
            }
            var s = new oe._soundClass(), r = this;
            s.on("complete", this, e), s.on("error", this, i), s.load(t);
        }, n.onProgress = function(t) {
            "atlas" === this._type ? this.event("progress", .3 * t) : this.event("progress", t);
        }, n.onError = function(t) {
            this.event("error", t);
        }, n.onLoaded = function(t) {
            var i = this._type;
            if ("plfb" == i) this.parsePLFBData(t), this.complete(t); else if ("plf" == i) this.parsePLFData(t), 
            this.complete(t); else if ("image" === i) {
                var n = new Ue(t);
                n.url = this._url, this.complete(n);
            } else if ("sound" === i || "htmlimage" === i || "nativeimage" === i) this.complete(t); else if ("atlas" === i) {
                if (!t.url && !t._setContext) {
                    if (!this._data) {
                        if (this._data = t, t.meta && t.meta.image) {
                            var s, r = t.meta.image.split(","), o = this._url.indexOf("/") >= 0 ? "/" : "\\", a = this._url.lastIndexOf(o), h = a >= 0 ? this._url.substr(0, a + 1) : "";
                            I.onAndroid && t.meta.compressTextureAndroid && (s = ".ktx"), I.onIOS && t.meta.compressTextureIOS && (s = ".pvr");
                            for (var l = 0, u = r.length; u > l; l++) r[l] = s ? h + r[l].replace(".png", s) : h + r[l];
                        } else r = [ this._url.replace(".json", ".png") ];
                        r.reverse(), t.toLoads = r, t.pics = [];
                    }
                    return this.event("progress", .3 + 1 / r.length * .6), this._loadImage(r.pop());
                }
                if (this._data.pics.push(t), this._data.toLoads.length > 0) return this.event("progress", .3 + 1 / this._data.toLoads.length * .6), 
                this._loadImage(this._data.toLoads.pop());
                var c = this._data.frames, _ = this._url.split("?")[0], d = this._data.meta && this._data.meta.prefix ? this._data.meta.prefix : _.substring(0, _.lastIndexOf(".")) + "/", f = this._data.pics, p = ne.formatURL(this._url), g = e.atlasMap[p] || (e.atlasMap[p] = []);
                g.dir = d;
                var m = 1;
                if (this._data.meta && this._data.meta.scale && 1 != this._data.meta.scale) {
                    m = parseFloat(this._data.meta.scale);
                    for (var v in c) {
                        var y = c[v], x = f[y.frame.idx ? y.frame.idx : 0], w = ne.formatURL(d + v);
                        x.scaleRate = m;
                        var T;
                        T = Ue._create(x, y.frame.x, y.frame.y, y.frame.w, y.frame.h, y.spriteSourceSize.x, y.spriteSourceSize.y, y.sourceSize.w, y.sourceSize.h, laya.net.Loader.getRes(w)), 
                        e.cacheRes(w, T), T.url = w, g.push(w);
                    }
                } else for (v in c) y = c[v], x = f[y.frame.idx ? y.frame.idx : 0], w = ne.formatURL(d + v), 
                T = Ue._create(x, y.frame.x, y.frame.y, y.frame.w, y.frame.h, y.spriteSourceSize.x, y.spriteSourceSize.y, y.sourceSize.w, y.sourceSize.h, laya.net.Loader.getRes(w)), 
                e.cacheRes(w, T), T.url = w, g.push(w);
                delete this._data.pics, this.complete(this._data);
            } else if ("font" === i) {
                if (!t._source) return this._data = t, this.event("progress", .5), this._loadImage(this._url.replace(".fnt", ".png"));
                var C = new Ie();
                C.parseFont(this._data, new Ue(t));
                var b = this._url.split(".fnt")[0].split("/"), S = b[b.length - 1];
                Qe.registerBitmapFont(S, C), this._data = C, this.complete(this._data);
            } else if ("prefab" === i) {
                var M = new he();
                M.json = t, this.complete(M);
            } else this.complete(t);
        }, n.parsePLFData = function(t) {
            var i, n, s;
            for (i in t) switch (s = t[i], i) {
              case "json":
              case "text":
                for (n in s) e.preLoadedMap[ne.formatURL(n)] = s[n];
                break;

              default:
                for (n in s) e.preLoadedMap[ne.formatURL(n)] = s[n];
            }
        }, n.parsePLFBData = function(t) {
            var e;
            e = new v(t);
            var i = 0, n = 0;
            for (n = e.getInt32(), i = 0; n > i; i++) this.parseOnePLFBFile(e);
        }, n.parseOnePLFBFile = function(t) {
            var i, n, s = 0;
            i = t.getUTFString(), s = t.getInt32(), n = t.readArrayBuffer(s), e.preLoadedMap[ne.formatURL(i)] = n;
        }, n.complete = function(t) {
            this._data = t, this._customParse ? this.event("loaded", t instanceof Array ? [ t ] : t) : (e._loaders.push(this), 
            e._isWorking || e.checkNext());
        }, n.endLoad = function(t) {
            t && (this._data = t), this._cache && e.cacheRes(this._url, this._data), this.event("progress", 1), 
            this.event("complete", this.data instanceof Array ? [ this.data ] : this.data);
        }, r(0, n, "url", function() {
            return this._url;
        }), r(0, n, "data", function() {
            return this._data;
        }), r(0, n, "cache", function() {
            return this._cache;
        }), r(0, n, "type", function() {
            return this._type;
        }), e.getTypeFromUrl = function(t) {
            var i = x.getFileExtension(t);
            return i ? e.typeMap[i] : (console.warn("Not recognize the resources suffix", t), 
            "text");
        }, e.checkNext = function() {
            e._isWorking = !0;
            for (var t = I.now(), n = t; e._startIndex < e._loaders.length; ) if (n = I.now(), 
            e._loaders[e._startIndex].endLoad(), e._startIndex++, n - t > e.maxTimeOut) return console.warn("loader callback cost a long time:" + (n - t) + " url=" + e._loaders[e._startIndex - 1].url), 
            i.systemTimer.frameOnce(1, null, e.checkNext), void 0;
            e._loaders.length = 0, e._startIndex = 0, e._isWorking = !1;
        }, e.clearRes = function(t) {
            t = ne.formatURL(t);
            var i = e.getAtlas(t);
            if (i) {
                for (var n = 0, s = i.length; s > n; n++) {
                    var r = i[n], o = e.getRes(r);
                    delete e.loadedMap[r], o && o.destroy();
                }
                i.length = 0, delete e.atlasMap[t], delete e.loadedMap[t];
            } else {
                var a = e.loadedMap[t];
                a && (delete e.loadedMap[t], a instanceof laya.resource.Texture && a.bitmap && a.destroy());
            }
        }, e.clearTextureRes = function(t) {
            t = ne.formatURL(t);
            var e = laya.net.Loader.getAtlas(t), i = e && e.length > 0 ? laya.net.Loader.getRes(e[0]) : laya.net.Loader.getRes(t);
            i instanceof laya.resource.Texture && i.disposeBitmap();
        }, e.getRes = function(t) {
            return e.loadedMap[ne.formatURL(t)];
        }, e.getAtlas = function(t) {
            return e.atlasMap[ne.formatURL(t)];
        }, e.cacheRes = function(t, i) {
            t = ne.formatURL(t), null != e.loadedMap[t] ? console.warn("Resources already exist,is repeated loading:", t) : e.loadedMap[t] = i;
        }, e.setGroup = function(t, i) {
            e.groupMap[i] || (e.groupMap[i] = []), e.groupMap[i].push(t);
        }, e.clearResByGroup = function(t) {
            if (e.groupMap[t]) {
                var i = e.groupMap[t], n = 0, s = i.length;
                for (n = 0; s > n; n++) e.clearRes(i[n]);
                i.length = 0;
            }
        }, e.TEXT = "text", e.JSON = "json", e.PREFAB = "prefab", e.XML = "xml", e.BUFFER = "arraybuffer", 
        e.IMAGE = "image", e.SOUND = "sound", e.ATLAS = "atlas", e.FONT = "font", e.TTF = "ttf", 
        e.PLF = "plf", e.PLFB = "plfb", e.HIERARCHY = "HIERARCHY", e.MESH = "MESH", e.MATERIAL = "MATERIAL", 
        e.TEXTURE2D = "TEXTURE2D", e.TEXTURECUBE = "TEXTURECUBE", e.ANIMATIONCLIP = "ANIMATIONCLIP", 
        e.AVATAR = "AVATAR", e.TERRAINHEIGHTDATA = "TERRAINHEIGHTDATA", e.TERRAINRES = "TERRAIN", 
        e.typeMap = {
            ttf: "ttf",
            png: "image",
            jpg: "image",
            jpeg: "image",
            ktx: "image",
            pvr: "image",
            txt: "text",
            json: "json",
            prefab: "prefab",
            xml: "xml",
            als: "atlas",
            atlas: "atlas",
            mp3: "sound",
            ogg: "sound",
            wav: "sound",
            part: "json",
            fnt: "font",
            plf: "plf",
            plfb: "plfb",
            scene: "json",
            ani: "json",
            sk: "arraybuffer"
        }, e.parserMap = {}, e.maxTimeOut = 100, e.groupMap = {}, e.loadedMap = {}, e.atlasMap = {}, 
        e.preLoadedMap = {}, e._imgCache = {}, e._loaders = [], e._isWorking = !1, e._startIndex = 0, 
        e;
    }(_), He = (function(t) {
        function e(t, i, n, s) {
            this._endian = null, this._socket = null, this._connected = !1, this._addInputPosition = 0, 
            this._input = null, this._output = null, this.disableInput = !1, this._byteClass = null, 
            this.protocols = [], e.__super.call(this), void 0 === i && (i = 0), this._byteClass = n ? n : v, 
            this.protocols = s, this.endian = "bigEndian", t && i > 0 && 65535 > i && this.connect(t, i);
        }
        s(e, "laya.net.Socket", t);
        var i = e.prototype;
        return i.connect = function(t, e) {
            var i = "ws://" + t + ":" + e;
            this.connectByUrl(i);
        }, i.connectByUrl = function(t) {
            var e = this;
            null != this._socket && this.close(), this._socket && this.cleanSocket(), this._socket = this.protocols && 0 != this.protocols.length ? new I.window.WebSocket(t, this.protocols) : new I.window.WebSocket(t), 
            this._socket.binaryType = "arraybuffer", this._output = new this._byteClass(), this._output.endian = this.endian, 
            this._input = new this._byteClass(), this._input.endian = this.endian, this._addInputPosition = 0, 
            this._socket.onopen = function(t) {
                e._onOpen(t);
            }, this._socket.onmessage = function(t) {
                e._onMessage(t);
            }, this._socket.onclose = function(t) {
                e._onClose(t);
            }, this._socket.onerror = function(t) {
                e._onError(t);
            };
        }, i.cleanSocket = function() {
            this.close(), this._connected = !1, this._socket.onopen = null, this._socket.onmessage = null, 
            this._socket.onclose = null, this._socket.onerror = null, this._socket = null;
        }, i.close = function() {
            if (null != this._socket) try {
                this._socket.close();
            } catch (t) {}
        }, i._onOpen = function(t) {
            this._connected = !0, this.event("open", t);
        }, i._onMessage = function(t) {
            if (t && t.data) {
                var e = t.data;
                if (this.disableInput && e) return this.event("message", e), void 0;
                this._input.length > 0 && this._input.bytesAvailable < 1 && (this._input.clear(), 
                this._addInputPosition = 0);
                var i = this._input.pos;
                !this._addInputPosition && (this._addInputPosition = 0), this._input.pos = this._addInputPosition, 
                e && ("string" == typeof e ? this._input.writeUTFBytes(e) : this._input.writeArrayBuffer(e), 
                this._addInputPosition = this._input.pos, this._input.pos = i), this.event("message", e);
            }
        }, i._onClose = function(t) {
            this._connected = !1, this.event("close", t);
        }, i._onError = function(t) {
            this.event("error", t);
        }, i.send = function(t) {
            this._socket.send(t);
        }, i.flush = function() {
            if (this._output && this._output.length > 0) {
                var t;
                try {
                    this._socket && this._socket.send(this._output.__getBuffer().slice(0, this._output.length));
                } catch (e) {
                    t = e;
                }
                this._output.endian = this.endian, this._output.clear(), t && this.event("error", t);
            }
        }, r(0, i, "input", function() {
            return this._input;
        }), r(0, i, "output", function() {
            return this._output;
        }), r(0, i, "connected", function() {
            return this._connected;
        }), r(0, i, "endian", function() {
            return this._endian;
        }, function(t) {
            this._endian = t, null != this._input && (this._input.endian = t), null != this._output && (this._output.endian = t);
        }), e.LITTLE_ENDIAN = "littleEndian", e.BIG_ENDIAN = "bigEndian", e;
    }(_), function(t) {
        function e() {
            this.url = null, this.loaded = !1, this.data = null, this.audioBuffer = null, this.__toPlays = null, 
            this._disposed = !1, e.__super.call(this);
        }
        s(e, "laya.media.webaudio.WebAudioSound", t);
        var i = e.prototype;
        return i.load = function(t) {
            var i = this;
            if (t = ne.formatURL(t), this.url = t, this.audioBuffer = e._dataCache[t], this.audioBuffer) return this._loaded(this.audioBuffer), 
            void 0;
            if (e.e.on("loaded:" + t, this, this._loaded), e.e.on("err:" + t, this, this._err), 
            !e.__loadingSound[t]) {
                e.__loadingSound[t] = !0;
                var n = new I.window.XMLHttpRequest();
                n.open("GET", t, !0), n.responseType = "arraybuffer", n.onload = function() {
                    return i._disposed ? (i._removeLoadEvents(), void 0) : (i.data = n.response, e.buffs.push({
                        buffer: i.data,
                        url: i.url
                    }), e.decode(), void 0);
                }, n.onerror = function() {
                    i._err();
                }, n.send();
            }
        }, i._err = function() {
            this._removeLoadEvents(), e.__loadingSound[this.url] = !1, this.event("error");
        }, i._loaded = function(t) {
            this._removeLoadEvents(), this._disposed || (this.audioBuffer = t, e._dataCache[this.url] = this.audioBuffer, 
            this.loaded = !0, this.event("complete"));
        }, i._removeLoadEvents = function() {
            e.e.off("loaded:" + this.url, this, this._loaded), e.e.off("err:" + this.url, this, this._err);
        }, i.__playAfterLoaded = function() {
            if (this.__toPlays) {
                var t, e = 0, i = 0;
                t = this.__toPlays, i = t.length;
                var n;
                for (e = 0; i > e; e++) n = t[e], n[2] && !n[2].isStopped && this.play(n[0], n[1], n[2]);
                this.__toPlays.length = 0;
            }
        }, i.play = function(t, e, i) {
            return void 0 === t && (t = 0), void 0 === e && (e = 0), i = i ? i : new $e(), this.audioBuffer || this.url && (this.__toPlays || (this.__toPlays = []), 
            this.__toPlays.push([ t, e, i ]), this.once("complete", this, this.__playAfterLoaded), 
            this.load(this.url)), i.url = this.url, i.loops = e, i.audioBuffer = this.audioBuffer, 
            i.startTime = t, i.play(), oe.addChannel(i), i;
        }, i.dispose = function() {
            this._disposed = !0, delete e._dataCache[this.url], delete e.__loadingSound[this.url], 
            this.audioBuffer = null, this.data = null, this.__toPlays = [];
        }, r(0, i, "duration", function() {
            return this.audioBuffer ? this.audioBuffer.duration : 0;
        }), e.decode = function() {
            e.buffs.length <= 0 || e.isDecoding || (e.isDecoding = !0, e.tInfo = e.buffs.shift(), 
            e.ctx.decodeAudioData(e.tInfo.buffer, e._done, e._fail));
        }, e._done = function(t) {
            e.e.event("loaded:" + e.tInfo.url, t), e.isDecoding = !1, e.decode();
        }, e._fail = function() {
            e.e.event("err:" + e.tInfo.url, null), e.isDecoding = !1, e.decode();
        }, e._playEmptySound = function() {
            if (null != e.ctx) {
                var t = e.ctx.createBufferSource();
                t.buffer = e._miniBuffer, t.connect(e.ctx.destination), t.start(0, 0, 0);
            }
        }, e._unlock = function() {
            e._unlocked || (e._playEmptySound(), "running" == e.ctx.state && (I.document.removeEventListener("mousedown", e._unlock, !0), 
            I.document.removeEventListener("touchend", e._unlock, !0), I.document.removeEventListener("touchstart", e._unlock, !0), 
            e._unlocked = !0));
        }, e.initWebAudio = function() {
            "running" != e.ctx.state && (e._unlock(), I.document.addEventListener("mousedown", e._unlock, !0), 
            I.document.addEventListener("touchend", e._unlock, !0), I.document.addEventListener("touchstart", e._unlock, !0));
        }, e._dataCache = {}, e.buffs = [], e.isDecoding = !1, e._unlocked = !1, e.tInfo = null, 
        e.__loadingSound = {}, n(e, [ "window", function() {
            return this.window = I.window;
        }, "webAudioEnabled", function() {
            return this.webAudioEnabled = e.window.AudioContext || e.window.webkitAudioContext || e.window.mozAudioContext;
        }, "ctx", function() {
            return this.ctx = e.webAudioEnabled ? new (e.window.AudioContext || e.window.webkitAudioContext || e.window.mozAudioContext)() : void 0;
        }, "_miniBuffer", function() {
            return this._miniBuffer = e.ctx.createBuffer(1, 1, 22050);
        }, "e", function() {
            return this.e = new _();
        } ]), e;
    }(_)), Xe = function(t) {
        function e(t) {
            e.__super.call(this), t || (t = this._copyMatrix(e.IDENTITY_MATRIX)), this._mat = new Float32Array(16), 
            this._alpha = new Float32Array(4), this.setByMatrix(t), this._action = new u(), 
            this._action.data = this;
        }
        s(e, "laya.filters.ColorFilter", t);
        var a = e.prototype;
        return i.imps(a, {
            "laya.filters.IFilter": !0
        }), a.gray = function() {
            return this.setByMatrix(e.GRAY_MATRIX);
        }, a.color = function(t, e, i, n) {
            return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), 
            void 0 === n && (n = 1), this.setByMatrix([ 1, 0, 0, 0, t, 0, 1, 0, 0, e, 0, 0, 1, 0, i, 0, 0, 0, 1, n ]);
        }, a.setColor = function(t) {
            var e = o.create(t).arrColor, i = [ 0, 0, 0, 0, 256 * e[0], 0, 0, 0, 0, 256 * e[1], 0, 0, 0, 0, 256 * e[2], 0, 0, 0, 1, 0 ];
            return this.setByMatrix(i);
        }, a.setByMatrix = function(t) {
            this._matrix != t && this._copyMatrix(t);
            for (var e = 0, i = 0, n = 0; 20 > n; n++) n % 5 != 4 ? this._mat[e++] = t[n] : this._alpha[i++] = t[n];
            return this;
        }, a.adjustColor = function(t, e, i, n) {
            return this.adjustHue(n), this.adjustContrast(e), this.adjustBrightness(t), this.adjustSaturation(i), 
            this;
        }, a.adjustBrightness = function(t) {
            return t = this._clampValue(t, 100), 0 == t || isNaN(t) ? this : this._multiplyMatrix([ 1, 0, 0, 0, t, 0, 1, 0, 0, t, 0, 0, 1, 0, t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 ]);
        }, a.adjustContrast = function(t) {
            if (t = this._clampValue(t, 100), 0 == t || isNaN(t)) return this;
            var i = 0 / 0;
            0 > t ? i = 127 + t / 100 * 127 : (i = t % 1, i = 0 == i ? e.DELTA_INDEX[t] : e.DELTA_INDEX[t << 0] * (1 - i) + e.DELTA_INDEX[(t << 0) + 1] * i, 
            i = 127 * i + 127);
            var n = i / 127, s = .5 * (127 - i);
            return this._multiplyMatrix([ n, 0, 0, 0, s, 0, n, 0, 0, s, 0, 0, n, 0, s, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 ]);
        }, a.adjustSaturation = function(t) {
            if (t = this._clampValue(t, 100), 0 == t || isNaN(t)) return this;
            var e = 1 + (t > 0 ? 3 * t / 100 : t / 100), i = 1 - e, n = .3086 * i, s = .6094 * i, r = .082 * i;
            return this._multiplyMatrix([ n + e, s, r, 0, 0, n, s + e, r, 0, 0, n, s, r + e, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 ]);
        }, a.adjustHue = function(t) {
            if (t = this._clampValue(t, 180) / 180 * Math.PI, 0 == t || isNaN(t)) return this;
            var e = Math.cos(t), i = Math.sin(t), n = .213, s = .715, r = .072;
            return this._multiplyMatrix([ n + e * (1 - n) + i * -n, s + e * -s + i * -s, r + e * -r + i * (1 - r), 0, 0, n + e * -n + .143 * i, s + e * (1 - s) + .14 * i, r + e * -r + i * -.283, 0, 0, n + e * -n + i * -(1 - n), s + e * -s + i * s, r + e * (1 - r) + i * r, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 ]);
        }, a.reset = function() {
            return this.setByMatrix(this._copyMatrix(e.IDENTITY_MATRIX));
        }, a._multiplyMatrix = function(t) {
            var e = [];
            this._matrix = this._fixMatrix(this._matrix);
            for (var i = 0; 5 > i; i++) {
                for (var n = 0; 5 > n; n++) e[n] = this._matrix[n + 5 * i];
                for (n = 0; 5 > n; n++) {
                    for (var s = 0, r = 0; 5 > r; r++) s += t[n + 5 * r] * e[r];
                    this._matrix[n + 5 * i] = s;
                }
            }
            return this.setByMatrix(this._matrix);
        }, a._clampValue = function(t, e) {
            return Math.min(e, Math.max(-e, t));
        }, a._fixMatrix = function(t) {
            return null == t ? e.IDENTITY_MATRIX : (t.length < 25 ? t = t.slice(0, t.length).concat(e.IDENTITY_MATRIX.slice(t.length, 25)) : t.length > 25 && (t = t.slice(0, 25)), 
            t);
        }, a._copyMatrix = function(t) {
            var e = 25;
            this._matrix || (this._matrix = []);
            for (var i = 0; e > i; i++) this._matrix[i] = t[i];
            return this._matrix;
        }, r(0, a, "type", function() {
            return 32;
        }), e.LENGTH = 25, n(e, [ "DELTA_INDEX", function() {
            return this.DELTA_INDEX = [ 0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10 ];
        }, "GRAY_MATRIX", function() {
            return this.GRAY_MATRIX = [ .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0 ];
        }, "IDENTITY_MATRIX", function() {
            return this.IDENTITY_MATRIX = [ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 ];
        } ]), e;
    }(T), ze = (function(t) {
        function e() {
            e.__super.call(this);
        }
        s(e, "laya.components.CommonScript", t);
        var i = e.prototype;
        return i.onAwake = function() {}, i.onEnable = function() {}, i.onStart = function() {}, 
        i.onUpdate = function() {}, i.onLateUpdate = function() {}, i.onDisable = function() {}, 
        i.onDestroy = function() {}, r(0, i, "isSingleton", function() {
            return !1;
        }), e;
    }(J), function(t) {
        function e() {
            this.italic = !1, e.__super.call(this);
        }
        s(e, "laya.display.css.TextStyle", t);
        var i = e.prototype;
        return i.reset = function() {
            return t.prototype.reset.call(this), this.italic = !1, this.align = "left", this.wordWrap = !1, 
            this.leading = 0, this.padding = [ 0, 0, 0, 0 ], this.bgColor = null, this.borderColor = null, 
            this.asPassword = !1, this.stroke = 0, this.strokeColor = "#000000", this.bold = !1, 
            this.underline = !1, this.underlineColor = null, this.currBitmapFont = null, this;
        }, i.recover = function() {
            this !== e.EMPTY && ae.recover("TextStyle", this.reset());
        }, i.render = function(t, e, i, n) {
            (this.bgColor || this.borderColor) && e.drawRect(i, n, t.width, t.height, this.bgColor, this.borderColor, 1);
        }, e.create = function() {
            return ae.getItemByClass("TextStyle", e);
        }, e.EMPTY = new e(), e;
    }(N)), Ve = (function(t) {
        function e() {
            e.__super.call(this);
        }
        s(e, "laya.components.Script", t);
        var n = e.prototype;
        return n._onAwake = function() {
            this.onAwake(), this.onStart !== laya.components.Script.prototype.onStart && i.startTimer.callLater(this, this.onStart);
        }, n._onEnable = function() {
            var t = laya.components.Script.prototype;
            this.onTriggerEnter !== t.onTriggerEnter && this.owner.on("triggerenter", this, this.onTriggerEnter), 
            this.onTriggerStay !== t.onTriggerStay && this.owner.on("triggerstay", this, this.onTriggerStay), 
            this.onTriggerExit !== t.onTriggerExit && this.owner.on("triggerexit", this, this.onTriggerExit), 
            this.onMouseDown !== t.onMouseDown && this.owner.on("mousedown", this, this.onMouseDown), 
            this.onMouseUp !== t.onMouseUp && this.owner.on("mouseup", this, this.onMouseUp), 
            this.onClick !== t.onClick && this.owner.on("click", this, this.onClick), this.onStageMouseDown !== t.onStageMouseDown && i.stage.on("mousedown", this, this.onStageMouseDown), 
            this.onStageMouseUp !== t.onStageMouseUp && i.stage.on("mouseup", this, this.onStageMouseUp), 
            this.onStageClick !== t.onStageClick && i.stage.on("click", this, this.onStageClick), 
            this.onStageMouseMove !== t.onStageMouseMove && i.stage.on("mousemove", this, this.onStageMouseMove), 
            this.onDoubleClick !== t.onDoubleClick && this.owner.on("doubleclick", this, this.onDoubleClick), 
            this.onRightClick !== t.onRightClick && this.owner.on("rightclick", this, this.onRightClick), 
            this.onMouseMove !== t.onMouseMove && this.owner.on("mousemove", this, this.onMouseMove), 
            this.onMouseOver !== t.onMouseOver && this.owner.on("mouseover", this, this.onMouseOver), 
            this.onMouseOut !== t.onMouseOut && this.owner.on("mouseout", this, this.onMouseOut), 
            this.onKeyDown !== t.onKeyDown && i.stage.on("keydown", this, this.onKeyDown), this.onKeyPress !== t.onKeyPress && i.stage.on("keypress", this, this.onKeyPress), 
            this.onKeyUp !== t.onKeyUp && i.stage.on("keyup", this, this.onKeyUp), this.onUpdate !== t.onUpdate && i.updateTimer.frameLoop(1, this, this.onUpdate), 
            this.onLateUpdate !== t.onLateUpdate && i.lateTimer.frameLoop(1, this, this.onLateUpdate), 
            this.onPreRender !== t.onPreRender && i.lateTimer.frameLoop(1, this, this.onPreRender);
        }, n._onDisable = function() {
            this.owner.offAllCaller(this), i.stage.offAllCaller(this), i.startTimer.clearAll(this), 
            i.updateTimer.clearAll(this), i.lateTimer.clearAll(this);
        }, n._isScript = function() {
            return !0;
        }, n._onDestroy = function() {
            this.onDestroy();
        }, n.onAwake = function() {}, n.onEnable = function() {}, n.onStart = function() {}, 
        n.onTriggerEnter = function() {}, n.onTriggerStay = function() {}, n.onTriggerExit = function() {}, 
        n.onMouseDown = function() {}, n.onMouseUp = function() {}, n.onClick = function() {}, 
        n.onStageMouseDown = function() {}, n.onStageMouseUp = function() {}, n.onStageClick = function() {}, 
        n.onStageMouseMove = function() {}, n.onDoubleClick = function() {}, n.onRightClick = function() {}, 
        n.onMouseMove = function() {}, n.onMouseOver = function() {}, n.onMouseOut = function() {}, 
        n.onKeyDown = function() {}, n.onKeyPress = function() {}, n.onKeyUp = function() {}, 
        n.onUpdate = function() {}, n.onLateUpdate = function() {}, n.onPreRender = function() {}, 
        n.onPostRender = function() {}, n.onDisable = function() {}, n.onDestroy = function() {}, 
        r(0, n, "isSingleton", function() {
            return !1;
        }), e;
    }(J), function(t) {
        function e() {
            e.__super.call(this), this._width = -1, this._height = -1;
        }
        s(e, "laya.resource.Bitmap", t);
        var i = e.prototype;
        return i._getSource = function() {
            throw "Bitmap: must override it.";
        }, r(0, i, "width", function() {
            return this._width;
        }), r(0, i, "height", function() {
            return this._height;
        }), e;
    }(Ee)), je = function(t) {
        function e() {
            this._x = 0, this._y = 0, this._width = 0, this._height = 0, this._visible = !0, 
            this._mouseState = 0, this._zOrder = 0, this._renderType = 0, this._transform = null, 
            this._tfChanged = !1, this._texture = null, this._boundStyle = null, this._graphics = null, 
            this.mouseThrough = !1, this.autoSize = !1, this.hitTestPrior = !1, e.__super.call(this), 
            this._repaint = 0, this._style = N.EMPTY, this._cacheStyle = ve.EMPTY;
        }
        s(e, "laya.display.Sprite", t);
        var n = e.prototype;
        return n.destroy = function(e) {
            void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._style && this._style.recover(), 
            this._cacheStyle && this._cacheStyle.recover(), this._boundStyle && this._boundStyle.recover(), 
            this._style = null, this._cacheStyle = null, this._boundStyle = null, this._transform = null, 
            this._graphics && this._graphics.autoDestroy && this._graphics.destroy(), this._graphics = null, 
            this.texture = null;
        }, n.updateZOrder = function() {
            x.updateOrder(this._children) && this.repaint();
        }, n._getBoundsStyle = function() {
            return this._boundStyle || (this._boundStyle = V.create()), this._boundStyle;
        }, n._setCustomRender = function() {}, n._setCacheAs = function() {}, n._checkCanvasEnable = function() {
            var t = this._cacheStyle.needEnableCanvasRender();
            this._getCacheStyle().enableCanvasRender = t, t ? (this._cacheStyle.cacheAs = this._cacheStyle.needBitmapCache() ? "bitmap" : this._cacheStyle.userSetCache, 
            this._cacheStyle.reCache = !0, this._renderType |= 8) : (this._cacheStyle.cacheAs = "none", 
            this._cacheStyle.releaseContext(), this._renderType &= -9), this._setCacheAs(this._cacheStyle.cacheAs), 
            this._setRenderType(this._renderType);
        }, n.reCache = function() {
            this._cacheStyle.reCache = !0, this._repaint |= 2;
        }, n.getRepaint = function() {
            return this._repaint;
        }, n._setX = function(t) {
            this._x = t;
        }, n._setY = function(t) {
            this._y = t;
        }, n._setWidth = function() {}, n._setHeight = function() {}, n.setSelfBounds = function(t) {
            this._getBoundsStyle().userBounds = t;
        }, n.getBounds = function() {
            return this._getBoundsStyle().bounds = D._getWrapRec(this._boundPointsToParent());
        }, n.getSelfBounds = function() {
            return this._boundStyle && this._boundStyle.userBounds ? this._boundStyle.userBounds : this._graphics || 0 !== this._children.length || this._texture ? this._getBoundsStyle().bounds = D._getWrapRec(this._getBoundPointsM(!1)) : D.TEMP.setTo(0, 0, 0, 0);
        }, n._boundPointsToParent = function(t) {
            void 0 === t && (t = !1);
            var e = 0, i = 0;
            this._style && (e = this.pivotX, i = this.pivotY, t = t || 0 !== this._style.rotation, 
            this._style.scrollRect && (e += this._style.scrollRect.x, i += this._style.scrollRect.y));
            var n = this._getBoundPointsM(t);
            if (!n || n.length < 1) return n;
            if (8 != n.length && (n = t ? ie.scanPList(n) : D._getWrapRec(n, D.TEMP)._getBoundPoints()), 
            !this.transform) return x.transPointList(n, this._x - e, this._y - i), n;
            var s = l.TEMP, r = 0, o = n.length;
            for (r = 0; o > r; r += 2) s.x = n[r], s.y = n[r + 1], this.toParentPoint(s), n[r] = s.x, 
            n[r + 1] = s.y;
            return n;
        }, n.getGraphicBounds = function(t) {
            return void 0 === t && (t = !1), this._graphics ? this._graphics.getBounds(t) : D.TEMP.setTo(0, 0, 0, 0);
        }, n._getBoundPointsM = function(t) {
            if (void 0 === t && (t = !1), this._boundStyle && this._boundStyle.userBounds) return this._boundStyle.userBounds._getBoundPoints();
            if (this._boundStyle || this._getBoundsStyle(), this._boundStyle.temBM || (this._boundStyle.temBM = []), 
            this._style.scrollRect) {
                var e = x.clearArray(this._boundStyle.temBM), i = D.TEMP;
                return i.copyFrom(this._style.scrollRect), x.concatArray(e, i._getBoundPoints()), 
                e;
            }
            var n;
            this._graphics ? n = this._graphics.getBoundPoints() : (n = x.clearArray(this._boundStyle.temBM), 
            this._texture && (i = D.TEMP, i.setTo(0, 0, this.width || this._texture.width, this.height || this._texture.height), 
            x.concatArray(n, i._getBoundPoints())));
            var s, r, o;
            o = this._children;
            for (var a = 0, h = o.length; h > a; a++) s = o[a], s instanceof laya.display.Sprite && s._visible === !0 && (r = s._boundPointsToParent(t), 
            r && (n = n ? x.concatArray(n, r) : r));
            return n;
        }, n._getCacheStyle = function() {
            return this._cacheStyle === ve.EMPTY && (this._cacheStyle = ve.create()), this._cacheStyle;
        }, n.getStyle = function() {
            return this._style === N.EMPTY && (this._style = N.create()), this._style;
        }, n.setStyle = function(t) {
            this._style = t;
        }, n._setScaleX = function(t) {
            this._style.scaleX = t;
        }, n._setScaleY = function(t) {
            this._style.scaleY = t;
        }, n._setRotation = function(t) {
            this._style.rotation = t;
        }, n._setSkewX = function(t) {
            this._style.skewX = t;
        }, n._setSkewY = function(t) {
            this._style.skewY = t;
        }, n._createTransform = function() {
            return U.create();
        }, n._adjustTransform = function() {
            this._tfChanged = !1;
            var t = this._style, e = t.scaleX, i = t.scaleY, n = t.skewX, s = t.skewY, r = t.rotation, o = this._transform || (this._transform = this._createTransform());
            if (r || 1 !== e || 1 !== i || 0 !== n || 0 !== s) {
                o._bTransform = !0;
                var a = .0174532922222222 * (r - n), h = .0174532922222222 * (r + s), l = Math.cos(h), u = Math.sin(h), c = Math.sin(a), _ = Math.cos(a);
                o.a = e * l, o.b = e * u, o.c = -i * c, o.d = i * _, o.tx = o.ty = 0;
            } else o.identity(), this._renderType &= -3, this._setRenderType(this._renderType);
            return o;
        }, n._setTransform = function() {}, n._setPivotX = function(t) {
            var e = this.getStyle();
            e.pivotX = t;
        }, n._getPivotX = function() {
            return this._style.pivotX;
        }, n._setPivotY = function(t) {
            var e = this.getStyle();
            e.pivotY = t;
        }, n._getPivotY = function() {
            return this._style.pivotY;
        }, n._setAlpha = function(t) {
            if (this._style.alpha !== t) {
                var e = this.getStyle();
                e.alpha = t, 1 !== t ? this._renderType |= 1 : this._renderType &= -2, this._setRenderType(this._renderType), 
                this.parentRepaint();
            }
        }, n._getAlpha = function() {
            return this._style.alpha;
        }, n._setBlendMode = function() {}, n._setGraphics = function() {}, n._setGraphicsCallBack = function() {}, 
        n._setScrollRect = function() {}, n.pos = function(t, e, i) {
            if (void 0 === i && (i = !1), this._x !== t || this._y !== e) {
                if (this.destroyed) return this;
                if (i) {
                    this._setX(t), this._setY(e), this.parentRepaint(2);
                    var n = this._cacheStyle.maskParent;
                    n && n.repaint(2);
                } else this.x = t, this.y = e;
            }
            return this;
        }, n.pivot = function(t, e) {
            return this.pivotX = t, this.pivotY = e, this;
        }, n.size = function(t, e) {
            return this.width = t, this.height = e, this;
        }, n.scale = function(t, e, i) {
            void 0 === i && (i = !1);
            var n = this.getStyle();
            if (n.scaleX != t || n.scaleY != e) {
                if (this.destroyed) return this;
                i ? (this._setScaleX(t), this._setScaleY(e), this._setTranformChange()) : (this.scaleX = t, 
                this.scaleY = e);
            }
            return this;
        }, n.skew = function(t, e) {
            return this.skewX = t, this.skewY = e, this;
        }, n.render = function(t, e, i) {
            le.renders[this._renderType]._fun(this, t, e + this._x, i + this._y), this._repaint = 0;
        }, n.drawToCanvas = function(t, e, i, n) {
            return re.drawToCanvas(this, this._renderType, t, e, i, n);
        }, n.customRender = function() {
            this._repaint = 3;
        }, n._applyFilters = function() {
            if (!fe.isWebGL) {
                var t;
                if (t = this._cacheStyle.filters, t && !(t.length < 1)) for (var e = 0, i = t.length; i > e; e++) t[e]._action && t[e]._action.apply(this._cacheStyle);
            }
        }, n._setColorFilter = function() {}, n._isHaveGlowFilter = function() {
            var t = 0, e = 0;
            if (this.filters) for (t = 0; t < this.filters.length; t++) if (8 == this.filters[t].type) return !0;
            for (t = 0, e = this._children.length; e > t; t++) if (this._children[t]._isHaveGlowFilter()) return !0;
            return !1;
        }, n.localToGlobal = function(t, e, n) {
            void 0 === e && (e = !1), e === !0 && (t = new l(t.x, t.y));
            var s = this;
            for (n = n || i.stage; s && !s.destroyed && s != n; ) t = s.toParentPoint(t), s = s.parent;
            return t;
        }, n.globalToLocal = function(t, e, n) {
            void 0 === e && (e = !1), e && (t = new l(t.x, t.y));
            var s = this, r = [];
            for (n = n || i.stage; s && !s.destroyed && s != n; ) r.push(s), s = s.parent;
            for (var o = r.length - 1; o >= 0; ) s = r[o], t = s.fromParentPoint(t), o--;
            return t;
        }, n.toParentPoint = function(t) {
            if (!t) return t;
            t.x -= this.pivotX, t.y -= this.pivotY, this.transform && this._transform.transformPoint(t), 
            t.x += this._x, t.y += this._y;
            var e = this._style.scrollRect;
            return e && (t.x -= e.x, t.y -= e.y), t;
        }, n.fromParentPoint = function(t) {
            if (!t) return t;
            t.x -= this._x, t.y -= this._y;
            var e = this._style.scrollRect;
            return e && (t.x += e.x, t.y += e.y), this.transform && this._transform.invertTransformPoint(t), 
            t.x += this.pivotX, t.y += this.pivotY, t;
        }, n.fromStagePoint = function(t) {
            return t;
        }, n.on = function(e, i, n, s) {
            return 1 !== this._mouseState && this.isMouseEvent(e) ? (this.mouseEnabled = !0, 
            this._setBit(64, !0), this._parent && this._$2__onDisplay(), this._createListener(e, i, n, s, !1)) : t.prototype.on.call(this, e, i, n, s);
        }, n.once = function(e, i, n, s) {
            return 1 !== this._mouseState && this.isMouseEvent(e) ? (this.mouseEnabled = !0, 
            this._setBit(64, !0), this._parent && this._$2__onDisplay(), this._createListener(e, i, n, s, !0)) : t.prototype.once.call(this, e, i, n, s);
        }, n._$2__onDisplay = function() {
            if (1 !== this._mouseState) {
                var t = this;
                for (t = t.parent; t && 1 !== t._mouseState && !t._getBit(64); ) t.mouseEnabled = !0, 
                t._setBit(64, !0), t = t.parent;
            }
        }, n._setParent = function(e) {
            t.prototype._setParent.call(this, e), e && this._getBit(64) && this._$2__onDisplay();
        }, n.loadImage = function(t, e) {
            function i() {
                n.repaint(3), e && e.run();
            }
            var n = this;
            if (null == t) this.texture = null, i(); else {
                var s = Ye.getRes(t);
                s || (s = new Ue(), s.load(t), Ye.cacheRes(t, s)), this.texture = s, s.getIsReady() ? i() : s.once("ready", null, i);
            }
            return this;
        }, n.repaint = function(t) {
            void 0 === t && (t = 2), this._repaint & t || (this._repaint |= t, this.parentRepaint(t)), 
            this._cacheStyle && this._cacheStyle.maskParent && this._cacheStyle.maskParent.repaint(t);
        }, n._needRepaint = function() {
            return 2 & this._repaint && this._cacheStyle.enableCanvasRender && this._cacheStyle.reCache;
        }, n._childChanged = function(t) {
            this._children.length ? this._renderType |= 8192 : this._renderType &= -8193, this._setRenderType(this._renderType), 
            t && this._getBit(32) && i.systemTimer.callLater(this, this.updateZOrder), this.repaint(3);
        }, n.parentRepaint = function(t) {
            void 0 === t && (t = 2);
            var e = this._parent;
            !e || e._repaint & t || (e._repaint |= t, e.parentRepaint(t));
        }, n._setMask = function() {}, n.startDrag = function(t, e, i, n, s, r, o) {
            void 0 === e && (e = !1), void 0 === i && (i = 0), void 0 === n && (n = 300), void 0 === r && (r = !1), 
            void 0 === o && (o = .92), this._style.dragging || (this.getStyle().dragging = new xe()), 
            this._style.dragging.start(this, t, e, i, n, s, r, o);
        }, n.stopDrag = function() {
            this._style.dragging && this._style.dragging.stop();
        }, n._setDisplay = function(e) {
            e || this._cacheStyle && (this._cacheStyle.releaseContext(), this._cacheStyle.releaseFilterCache(), 
            this._cacheStyle.hasGlowFilter && (this._cacheStyle.hasGlowFilter = !1)), t.prototype._setDisplay.call(this, e);
        }, n.hitTestPoint = function(t, e) {
            var i = this.globalToLocal(l.TEMP.setTo(t, e));
            t = i.x, e = i.y;
            var n = this._style.hitArea ? this._style.hitArea : this._width > 0 && this._height > 0 ? D.TEMP.setTo(0, 0, this._width, this._height) : this.getSelfBounds();
            return n.contains(t, e);
        }, n.getMousePoint = function() {
            return this.globalToLocal(l.TEMP.setTo(i.stage.mouseX, i.stage.mouseY));
        }, n._setTexture = function() {}, n._setRenderType = function() {}, n._setTranformChange = function() {
            this._tfChanged = !0, this._renderType |= 2, this.parentRepaint(2);
        }, n._setBgStyleColor = function() {}, n._setBorderStyleColor = function() {}, n.captureMouseEvent = function(t) {
            Pe.instance.setCapture(this, t);
        }, n.releaseMouseEvent = function() {
            Pe.instance.releaseCapture();
        }, r(0, n, "customRenderEnable", null, function(t) {
            t && (this._renderType |= 2048, this._setRenderType(this._renderType), this._setCustomRender());
        }), r(0, n, "cacheAs", function() {
            return this._cacheStyle.cacheAs;
        }, function(t) {
            t !== this._cacheStyle.userSetCache && (this.mask && "normal" === t || (this._setCacheAs(t), 
            this._getCacheStyle().userSetCache = t, this._checkCanvasEnable(), this.repaint()));
        }), r(0, n, "globalScaleY", function() {
            for (var t = 1, e = this; e && e !== i.stage; ) t *= e.scaleY, e = e.parent;
            return t;
        }), r(0, n, "hitArea", function() {
            return this._style.hitArea;
        }, function(t) {
            this.getStyle().hitArea = t;
        }), r(0, n, "staticCache", function() {
            return this._cacheStyle.staticCache;
        }, function(t) {
            this._getCacheStyle().staticCache = t, t || this.reCache();
        }), r(0, n, "displayWidth", function() {
            return this.width * this.scaleX;
        }), r(0, n, "zOrder", function() {
            return this._zOrder;
        }, function(t) {
            this._zOrder != t && (this._zOrder = t, this._parent && (t && this._parent._setBit(32, !0), 
            i.systemTimer.callLater(this._parent, this.updateZOrder)));
        }), r(0, n, "rotation", function() {
            return this._style.rotation;
        }, function(t) {
            var e = this.getStyle();
            e.rotation !== t && (this._setRotation(t), this._setTranformChange());
        }), r(0, n, "width", function() {
            return this.autoSize ? this.texture ? this.texture.width : this._graphics || 0 !== this._children.length ? this.getSelfBounds().width : 0 : this._width || (this.texture ? this.texture.width : 0);
        }, function(t) {
            this._width !== t && (this._width = t, this._setWidth(this.texture, t), this._setTranformChange());
        }), r(0, n, "x", function() {
            return this._x;
        }, function(t) {
            if (!this.destroyed && this._x !== t) {
                this._setX(t), this.parentRepaint(2);
                var e = this._cacheStyle.maskParent;
                e && e.repaint(2);
            }
        }), r(0, n, "drawCallOptimize", function() {
            return this._getBit(256);
        }, function(t) {
            this._setBit(256, t);
        }), r(0, n, "texture", function() {
            return this._texture;
        }, function(t) {
            "string" == typeof t ? this.loadImage(t) : this._texture != t && (this._texture && this._texture._removeReference(), 
            this._texture = t, t && t._addReference(), this._setTexture(t), this._setWidth(this._texture, this.width), 
            this._setHeight(this._texture, this.height), t ? this._renderType |= 256 : this._renderType &= -257, 
            this._setRenderType(this._renderType), this.repaint());
        }), r(0, n, "globalRotation", function() {
            for (var t = 0, e = this; e && e !== i.stage; ) t += e.rotation, e = e.parent;
            return t;
        }), r(0, n, "y", function() {
            return this._y;
        }, function(t) {
            if (!this.destroyed && this._y !== t) {
                this._setY(t), this.parentRepaint(2);
                var e = this._cacheStyle.maskParent;
                e && e.repaint(2);
            }
        }), r(0, n, "displayHeight", function() {
            return this.height * this.scaleY;
        }), r(0, n, "height", function() {
            return this.autoSize ? this.texture ? this.texture.height : this._graphics || 0 !== this._children.length ? this.getSelfBounds().height : 0 : this._height || (this.texture ? this.texture.height : 0);
        }, function(t) {
            this._height !== t && (this._height = t, this._setHeight(this.texture, t), this._setTranformChange());
        }), r(0, n, "blendMode", function() {
            return this._style.blendMode;
        }, function(t) {
            this._setBlendMode(t), this.getStyle().blendMode = t, t && "source-over" != t ? this._renderType |= 4 : this._renderType &= -5, 
            this._setRenderType(this._renderType), this.parentRepaint();
        }), r(0, n, "scaleX", function() {
            return this._style.scaleX;
        }, function(t) {
            var e = this.getStyle();
            e.scaleX !== t && (this._setScaleX(t), this._setTranformChange());
        }), r(0, n, "scaleY", function() {
            return this._style.scaleY;
        }, function(t) {
            var e = this.getStyle();
            e.scaleY !== t && (this._setScaleY(t), this._setTranformChange());
        }), r(0, n, "stage", function() {
            return i.stage;
        }), r(0, n, "skewX", function() {
            return this._style.skewX;
        }, function(t) {
            var e = this.getStyle();
            e.skewX !== t && (this._setSkewX(t), this._setTranformChange());
        }), r(0, n, "scrollRect", function() {
            return this._style.scrollRect;
        }, function(t) {
            this.getStyle().scrollRect = t, this._setScrollRect(t), this.repaint(), t ? this._renderType |= 64 : this._renderType &= -65, 
            this._setRenderType(this._renderType);
        }), r(0, n, "skewY", function() {
            return this._style.skewY;
        }, function(t) {
            var e = this.getStyle();
            e.skewY !== t && (this._setSkewY(t), this._setTranformChange());
        }), r(0, n, "transform", function() {
            return this._tfChanged ? this._adjustTransform() : this._transform;
        }, function(t) {
            this._tfChanged = !1;
            var e = this._transform || (this._transform = this._createTransform());
            t.copyTo(e), this._setTransform(e), t && (this._x = e.tx, this._y = e.ty, e.tx = e.ty = 0), 
            t ? this._renderType |= 2 : this._renderType &= -3, this._setRenderType(this._renderType), 
            this.parentRepaint();
        }), r(0, n, "pivotX", function() {
            return this._getPivotX();
        }, function(t) {
            this._setPivotX(t), this.repaint();
        }), r(0, n, "pivotY", function() {
            return this._getPivotY();
        }, function(t) {
            this._setPivotY(t), this.repaint();
        }), r(0, n, "alpha", function() {
            return this._getAlpha();
        }, function(t) {
            t = 0 > t ? 0 : t > 1 ? 1 : t, this._setAlpha(t);
        }), r(0, n, "visible", function() {
            return this._visible;
        }, function(t) {
            this._visible !== t && (this._visible = t, this.parentRepaint(3));
        }), r(0, n, "graphics", function() {
            return this._graphics || (this.graphics = new f(), this._graphics.autoDestroy = !0), 
            this._graphics;
        }, function(t) {
            this._graphics && (this._graphics._sp = null), this._graphics = t, t ? (this._setGraphics(t), 
            this._renderType |= 512, t._sp = this) : this._renderType &= -513, this._setRenderType(this._renderType), 
            this.repaint();
        }), r(0, n, "filters", function() {
            return this._cacheStyle.filters;
        }, function(t) {
            t && 0 === t.length && (t = null), this._cacheStyle.filters != t && (this._getCacheStyle().filters = t ? t.slice() : null, 
            fe.isWebGL && (t && t.length ? (this._setColorFilter(t[0]), this._renderType |= 16) : (this._setColorFilter(null), 
            this._renderType &= -17), this._setRenderType(this._renderType)), t && t.length > 0 ? (this._getBit(16) || this._setBitUp(16), 
            fe.isWebGL && 1 == t.length && t[0] instanceof laya.filters.ColorFilter || (this._getCacheStyle().cacheForFilters = !0, 
            this._checkCanvasEnable())) : this._cacheStyle.cacheForFilters && (this._cacheStyle.cacheForFilters = !1, 
            this._checkCanvasEnable()), this._getCacheStyle().hasGlowFilter = this._isHaveGlowFilter(), 
            this.repaint());
        }), r(0, n, "mask", function() {
            return this._cacheStyle.mask;
        }, function(t) {
            t && this.mask && this.mask._cacheStyle.maskParent || (this._getCacheStyle().mask = t, 
            this._setMask(t), this._checkCanvasEnable(), t ? t._getCacheStyle().maskParent = this : this.mask && (this.mask._getCacheStyle().maskParent = null), 
            this._renderType |= 32, this._setRenderType(this._renderType), this.parentRepaint(3));
        }), r(0, n, "mouseEnabled", function() {
            return this._mouseState > 1;
        }, function(t) {
            this._mouseState = t ? 2 : 1;
        }), r(0, n, "globalScaleX", function() {
            for (var t = 1, e = this; e && e !== i.stage; ) t *= e.scaleX, e = e.parent;
            return t;
        }), r(0, n, "mouseX", function() {
            return this.getMousePoint().x;
        }), r(0, n, "mouseY", function() {
            return this.getMousePoint().y;
        }), r(0, n, "viewport", function() {
            return this._style.viewport;
        }, function(t) {
            if ("string" == typeof t) {
                var e;
                e = t.split(","), e.length > 3 && (t = new D(parseFloat(e[0]), parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3])));
            }
            this.getStyle().viewport = t;
        }), e.fromImage = function(t) {
            return new e().loadImage(t);
        }, e;
    }(Re), Ke = function(t) {
        function e(t) {
            this._audio = null, this._onEnd = null, this._resumePlay = null, e.__super.call(this), 
            this._onEnd = x.bind(this.__onEnd, this), this._resumePlay = x.bind(this.__resumePlay, this), 
            t.addEventListener("ended", this._onEnd), this._audio = t;
        }
        s(e, "laya.media.h5audio.AudioSoundChannel", t);
        var n = e.prototype;
        return n.__onEnd = function() {
            return 1 == this.loops ? (this.completeHandler && (i.systemTimer.once(10, this, this.__runComplete, [ this.completeHandler ], !1), 
            this.completeHandler = null), this.stop(), this.event("complete"), void 0) : (this.loops > 0 && this.loops--, 
            this.startTime = 0, this.play(), void 0);
        }, n.__resumePlay = function() {
            if (this._audio && this._audio.removeEventListener("canplay", this._resumePlay), 
            !this.isStopped) try {
                this._audio.currentTime = this.startTime, I.container.appendChild(this._audio), 
                this._audio.play();
            } catch (t) {
                this.event("error");
            }
        }, n.play = function() {
            this.isStopped = !1;
            try {
                this._audio.playbackRate = oe.playbackRate, this._audio.currentTime = this.startTime;
            } catch (t) {
                return this._audio.addEventListener("canplay", this._resumePlay), void 0;
            }
            oe.addChannel(this), I.container.appendChild(this._audio), "play" in this._audio && this._audio.play();
        }, n.stop = function() {
            this.isStopped = !0, oe.removeChannel(this), this.completeHandler = null, this._audio && ("pause" in this._audio && fe.isConchApp && this._audio.stop(), 
            this._audio.pause(), this._audio.removeEventListener("ended", this._onEnd), this._audio.removeEventListener("canplay", this._resumePlay), 
            I.onIE || this._audio != Fe._musicAudio && ae.recover("audio:" + this.url, this._audio), 
            I.removeElement(this._audio), this._audio = null);
        }, n.pause = function() {
            this.isStopped = !0, oe.removeChannel(this), "pause" in this._audio && this._audio.pause();
        }, n.resume = function() {
            this._audio && (this.isStopped = !1, oe.addChannel(this), "play" in this._audio && this._audio.play());
        }, r(0, n, "position", function() {
            return this._audio ? this._audio.currentTime : 0;
        }), r(0, n, "duration", function() {
            return this._audio ? this._audio.duration : 0;
        }), r(0, n, "volume", function() {
            return this._audio ? this._audio.volume : 1;
        }, function(t) {
            this._audio && (this._audio.volume = t);
        }), e;
    }(We), $e = function(t) {
        function e() {
            this.audioBuffer = null, this.gain = null, this.bufferSource = null, this._currentTime = 0, 
            this._volume = 1, this._startTime = 0, this._pauseTime = 0, this._onPlayEnd = null, 
            this.context = He.ctx, e.__super.call(this), this._onPlayEnd = x.bind(this.__onPlayEnd, this), 
            this.gain = this.context.createGain ? this.context.createGain() : this.context.createGainNode();
        }
        s(e, "laya.media.webaudio.WebAudioSoundChannel", t);
        var n = e.prototype;
        return n.play = function() {
            if (oe.addChannel(this), this.isStopped = !1, this._clearBufferSource(), this.audioBuffer) {
                var t = this.context, e = this.gain, i = t.createBufferSource();
                this.bufferSource = i, i.buffer = this.audioBuffer, i.connect(e), e && e.disconnect(), 
                e.connect(t.destination), i.onended = this._onPlayEnd, this.startTime >= this.duration && (this.startTime = 0), 
                this._startTime = I.now(), this.gain.gain.setTargetAtTime ? this.gain.gain.setTargetAtTime(this._volume, this.context.currentTime, .001) : this.gain.gain.value = this._volume, 
                0 == this.loops && (i.loop = !0), i.playbackRate.setTargetAtTime ? i.playbackRate.setTargetAtTime(oe.playbackRate, this.context.currentTime, .001) : i.playbackRate.value = oe.playbackRate, 
                i.start(0, this.startTime), this._currentTime = 0;
            }
        }, n.__onPlayEnd = function() {
            return 1 == this.loops ? (this.completeHandler && (i.timer.once(10, this, this.__runComplete, [ this.completeHandler ], !1), 
            this.completeHandler = null), this.stop(), this.event("complete"), void 0) : (this.loops > 0 && this.loops--, 
            this.startTime = 0, this.play(), void 0);
        }, n._clearBufferSource = function() {
            if (this.bufferSource) {
                var t = this.bufferSource;
                t.stop ? t.stop(0) : t.noteOff(0), t.disconnect(0), t.onended = null, e._tryCleanFailed || this._tryClearBuffer(t), 
                this.bufferSource = null;
            }
        }, n._tryClearBuffer = function(t) {
            if (I.onMac) try {
                t.buffer = He._miniBuffer;
            } catch (i) {
                e._tryCleanFailed = !0;
            } else try {
                t.buffer = null;
            } catch (i) {
                e._tryCleanFailed = !0;
            }
        }, n.stop = function() {
            this._clearBufferSource(), this.audioBuffer = null, this.gain && this.gain.disconnect(), 
            this.isStopped = !0, oe.removeChannel(this), this.completeHandler = null, oe.autoReleaseSound && oe.disposeSoundLater(this.url);
        }, n.pause = function() {
            this.isStopped || (this._pauseTime = this.position), this._clearBufferSource(), 
            this.gain && this.gain.disconnect(), this.isStopped = !0, oe.removeChannel(this), 
            oe.autoReleaseSound && oe.disposeSoundLater(this.url);
        }, n.resume = function() {
            this.startTime = this._pauseTime, this.play();
        }, r(0, n, "position", function() {
            return this.bufferSource ? (I.now() - this._startTime) / 1e3 + this.startTime : 0;
        }), r(0, n, "duration", function() {
            return this.audioBuffer ? this.audioBuffer.duration : 0;
        }), r(0, n, "volume", function() {
            return this._volume;
        }, function(t) {
            this.isStopped || (this._volume = t, this.gain.gain.setTargetAtTime ? this.gain.gain.setTargetAtTime(t, this.context.currentTime, .001) : this.gain.gain.value = t);
        }), e._tryCleanFailed = !1, e.SetTargetDelay = .001, e;
    }(We), qe = function(t) {
        function e(t) {
            e.__super.call(this), void 0 === t && (t = !1), this._source = t || !fe.isWebGL ? I.createElement("canvas") : this, 
            this.lock = !0;
        }
        s(e, "laya.resource.HTMLCanvas", t);
        var i = e.prototype;
        return i._getSource = function() {
            return this._source;
        }, i.clear = function() {
            this._ctx && this._ctx.clear(), this._texture && (this._texture.destroy(), this._texture = null);
        }, i.destroy = function() {
            laya.resource.Resource.prototype.destroy.call(this), this._setCPUMemory(0), this._ctx && this._ctx.destroy(), 
            this._ctx = null;
        }, i.release = function() {}, i._setContext = function(t) {
            this._ctx = t;
        }, i.getContext = function() {
            return this.context;
        }, i.getMemSize = function() {
            return 0;
        }, i.size = function(t, e) {
            (this._width != t || this._height != e || this._source && (this._source.width != t || this._source.height != e)) && (this._width = t, 
            this._height = e, this._setCPUMemory(t * e * 4), this._ctx && this._ctx.size && this._ctx.size(t, e), 
            this._source && (this._source.height = e, this._source.width = t), this._texture && (this._texture.destroy(), 
            this._texture = null));
        }, i.getTexture = function() {
            return this._texture || (this._texture = new Ue(this, Ue.DEF_UV)), this._texture;
        }, i.toBase64 = function(t, e) {
            if (this._source) {
                if (fe.isConchApp) {
                    if (2 == conchConfig.threadMode) throw "native 2 thread mode use toBase64Async";
                    var i = this._ctx._targets.sourceWidth, n = this._ctx._targets.sourceHeight, s = this._ctx._targets.getData(0, 0, i, n);
                    return conchToBase64(t, e, s.buffer, i, n);
                }
                return this._source.toDataURL(t, e);
            }
            return null;
        }, i.toBase64Async = function(t, e, i) {
            var n = this._ctx._targets.sourceWidth, s = this._ctx._targets.sourceHeight;
            this._ctx._targets.getDataAsync(0, 0, n, s, function(r) {
                var o = conchToBase64(t, e, r.buffer, n, s);
                i(o);
            });
        }, r(0, i, "source", function() {
            return this._source;
        }), r(0, i, "context", function() {
            return this._ctx ? this._ctx : (this._ctx = fe.isWebGL && this._source == this ? new laya.webgl.canvas.WebGLContext2D() : this._source.getContext(fe.isConchApp ? "layagl" : "2d"), 
            this._ctx._canvas = this, this._ctx);
        }), e;
    }(Ve), Qe = function(e) {
        function o() {
            this._clipPoint = null, this._text = null, this._isChanged = !1, this._textWidth = 0, 
            this._textHeight = 0, this._lines = [], this._lineWidths = [], this._startX = 0, 
            this._startY = 0, this._words = null, this._charSize = {}, this._valign = "top", 
            this._color = "#000000", this._singleCharRender = !1, o.__super.call(this), this._fontSize = o.defaultFontSize, 
            this._font = o.defaultFont, this.overflow = "visible", this._style = ze.EMPTY;
        }
        s(o, "laya.display.Text", e);
        var a = o.prototype;
        return a.getStyle = function() {
            return this._style === ze.EMPTY && (this._style = ze.create()), this._style;
        }, a._getTextStyle = function() {
            return this._style === ze.EMPTY && (this._style = ze.create()), this._style;
        }, a.destroy = function(t) {
            void 0 === t && (t = !0), e.prototype.destroy.call(this, t), this._clipPoint = null, 
            this._lines = null, this._lineWidths = null, this._words = null, this._charSize = null;
        }, a._getBoundPointsM = function(t) {
            void 0 === t && (t = !1);
            var e = D.TEMP;
            return e.setTo(0, 0, this.width, this.height), e._getBoundPoints();
        }, a.getGraphicBounds = function(t) {
            void 0 === t && (t = !1);
            var e = D.TEMP;
            return e.setTo(0, 0, this.width, this.height), e;
        }, a._getCSSStyle = function() {
            return this._style;
        }, a.lang = function(t) {
            if (t = o.langPacks && o.langPacks[t] ? o.langPacks[t] : t, arguments.length < 2) this._text = t; else {
                for (var e = 0, i = arguments.length; i > e; e++) t = t.replace("{" + e + "}", arguments[e + 1]);
                this._text = t;
            }
        }, a._getContextFont = function() {
            return (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + (I.onIPhone ? laya.display.Text.fontFamilyMap[this.font] || this.font : this.font);
        }, a._isPassWordMode = function() {
            var t = this._style, e = t.asPassword;
            return "prompt" in this && this.prompt == this._text && (e = !1), e;
        }, a._getPassWordTxt = function(t) {
            var e, i = t.length;
            e = "";
            for (var n = i; n > 0; n--) e += "●";
            return e;
        }, a._renderText = function() {
            var t = this.padding, e = this._lines.length;
            "visible" != this.overflow && (e = Math.min(e, Math.floor((this.height - t[0] - t[2]) / (this.leading + this._charSize.height)) + 1));
            var i = this.scrollY / (this._charSize.height + this.leading) | 0, n = this.graphics;
            n.clear(!0);
            var s = this._getContextFont();
            I.context.font = s;
            var r = t[3], o = "left", a = this._lines, h = this.leading + this._charSize.height, l = this._style.currBitmapFont;
            l && (h = this.leading + l.getMaxHeight());
            var u = t[0];
            if (!l && this._width > 0 && this._textWidth <= this._width && ("right" == this.align ? (o = "right", 
            r = this._width - t[1]) : "center" == this.align && (o = "center", r = .5 * this._width + t[3] - t[1])), 
            this._height > 0) {
                var c = this._textHeight > this._height ? "top" : this.valign;
                "middle" === c ? u = .5 * (this._height - e * h) + t[0] - t[2] : "bottom" === c && (u = this._height - e * h - t[2]);
            }
            var _ = this._style;
            if (l && l.autoScaleSize) var d = l.fontSize / this.fontSize;
            if (this._clipPoint) {
                if (n.save(), l && l.autoScaleSize) {
                    var f = 0, p = 0;
                    f = this._width ? this._width - t[3] - t[1] : this._textWidth, p = this._height ? this._height - t[0] - t[2] : this._textHeight, 
                    f *= d, p *= d, n.clipRect(t[3], t[0], f, p);
                } else n.clipRect(t[3], t[0], this._width ? this._width - t[3] - t[1] : this._textWidth, this._height ? this._height - t[0] - t[2] : this._textHeight);
                this.repaint();
            }
            var g = _.asPassword;
            "prompt" in this && this.prompt == this._text && (g = !1);
            for (var m = 0, v = 0, y = Math.min(this._lines.length, e + i) || 1, x = i; y > x; x++) {
                var w, T = a[x];
                if (g) {
                    var C = T.length;
                    T = "";
                    for (var b = C; b > 0; b--) T += "●";
                }
                if (null == T && (T = ""), m = r - (this._clipPoint ? this._clipPoint.x : 0), v = u + h * x - (this._clipPoint ? this._clipPoint.y : 0), 
                this.underline && this._drawUnderline(o, m, v, x), l) {
                    var S = this.width;
                    l.autoScaleSize && (S = this.width * d), l._drawText(T, this, m, v, this.align, S);
                } else fe.isWebGL ? (this._words || (this._words = []), w = this._words.length > x - i ? this._words[x - i] : new E(), 
                w.setText(T), w.splitRender = this._singleCharRender) : w = T, _.stroke ? n.fillBorderText(w, m, v, s, this.color, _.strokeColor, _.stroke, o) : n.fillText(w, m, v, s, this.color, o);
            }
            if (l && l.autoScaleSize) {
                var M = 1 / d;
                this.scale(M, M);
            }
            this._clipPoint && n.restore(), this._startX = r, this._startY = u;
        }, a._drawUnderline = function(t, e, i, n) {
            var s = this._lineWidths[n];
            switch (t) {
              case "center":
                e -= s / 2;
                break;

              case "right":
                e -= s;
                break;

              case "left":
            }
            i += this._charSize.height, this._graphics.drawLine(e, i, e + s, i, this.underlineColor || this.color, 1);
        }, a.typeset = function() {
            return this._isChanged = !1, this._text ? (fe.isConchApp ? t.conchTextCanvas.font = this._getContextFont() : I.context.font = this._getContextFont(), 
            this._lines.length = 0, this._lineWidths.length = 0, this._isPassWordMode() ? this._parseLines(this._getPassWordTxt(this._text)) : this._parseLines(this._text), 
            this._evalTextSize(), this._checkEnabledViewportOrNot() ? this._clipPoint || (this._clipPoint = new l(0, 0)) : this._clipPoint = null, 
            this._renderText(), void 0) : (this._clipPoint = null, this._textWidth = this._textHeight = 0, 
            this.graphics.clear(!0), void 0);
        }, a._evalTextSize = function() {
            var t = 0 / 0, e = 0 / 0;
            t = Math.max.apply(this, this._lineWidths), e = this._style.currBitmapFont ? this._lines.length * (this._style.currBitmapFont.getMaxHeight() + this.leading) + this.padding[0] + this.padding[2] : this._lines.length * (this._charSize.height + this.leading) + this.padding[0] + this.padding[2], 
            (t != this._textWidth || e != this._textHeight) && (this._textWidth = t, this._textHeight = e);
        }, a._checkEnabledViewportOrNot = function() {
            return "scroll" == this.overflow && (this._width > 0 && this._textWidth > this._width || this._height > 0 && this._textHeight > this._height);
        }, a.changeText = function(t) {
            this._text !== t && (this.lang(t + ""), this._graphics && this._graphics.replaceText(this._text) || this.typeset());
        }, a._parseLines = function(e) {
            var i = this.wordWrap || "hidden" == this.overflow;
            if (i) var n = this._getWordWrapWidth();
            var s = this._style.currBitmapFont;
            if (s) this._charSize.width = s.getMaxWidth(), this._charSize.height = s.getMaxHeight(); else {
                var r = null;
                r = fe.isConchApp ? t.conchTextCanvas.measureText(this._testWord) : I.context.measureText(o._testWord), 
                r || (r = {
                    width: 100
                }), this._charSize.width = r.width, this._charSize.height = r.height || this.fontSize;
            }
            for (var a = e.replace(/\r\n/g, "\n").split("\n"), h = 0, l = a.length; l > h; h++) {
                var u = a[h];
                i ? this._parseLine(u, n) : (this._lineWidths.push(this._getTextWidth(u)), this._lines.push(u));
            }
        }, a._parseLine = function(t, e) {
            var i, n = (I.context, this._lines), s = 0, r = 0 / 0, o = 0 / 0, a = 0;
            if (r = this._getTextWidth(t), e >= r) return n.push(t), this._lineWidths.push(r), 
            void 0;
            r = this._charSize.width, s = Math.floor(e / r), 0 == s && (s = 1), r = this._getTextWidth(t.substring(0, s)), 
            o = r;
            for (var h = s, l = t.length; l > h; h++) if (r = this._getTextWidth(t.charAt(h)), 
            o += r, o > e) if (this.wordWrap) {
                var u = t.substring(a, h);
                if (u.charCodeAt(u.length - 1) < 255 && (i = /(?:\w|-)+$/.exec(u), i && (h = i.index + a, 
                0 == i.index ? h += u.length : u = t.substring(a, h))), n.push(u), this._lineWidths.push(o - r), 
                a = h, !(l > h + s)) {
                    n.push(t.substring(a, l)), this._lineWidths.push(this._getTextWidth(n[n.length - 1])), 
                    a = -1;
                    break;
                }
                h += s, r = this._getTextWidth(t.substring(a, h)), o = r, h--;
            } else if ("hidden" == this.overflow) return n.push(t.substring(0, h)), this._lineWidths.push(this._getTextWidth(n[n.length - 1])), 
            void 0;
            this.wordWrap && -1 != a && (n.push(t.substring(a, l)), this._lineWidths.push(this._getTextWidth(n[n.length - 1])));
        }, a._getTextWidth = function(e) {
            var i = this._style.currBitmapFont;
            if (i) return i.getTextWidth(e);
            if (fe.isConchApp) return t.conchTextCanvas.measureText(e).width;
            var n = I.context.measureText(e);
            return n ? n.width : 100;
        }, a._getWordWrapWidth = function() {
            var t = this.padding, e = 0 / 0, i = this._style.currBitmapFont;
            return e = i && i.autoScaleSize ? this._width * (i.fontSize / this.fontSize) : this._width, 
            0 >= e && (e = this.wordWrap ? 100 : I.width), 0 >= e && (e = 100), e - t[3] - t[1];
        }, a.getCharPoint = function(t, e) {
            this._isChanged && i.systemTimer.runCallLater(this, this.typeset);
            for (var n = 0, s = this._lines, r = 0, o = 0, a = s.length; a > o; o++) {
                if (n += s[o].length, n > t) {
                    var h = o;
                    break;
                }
                r = n;
            }
            var u = (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + this.font;
            I.context.font = u;
            var c = this._getTextWidth(this._text.substring(r, t)), _ = e || new l();
            return _.setTo(this._startX + c - (this._clipPoint ? this._clipPoint.x : 0), this._startY + h * (this._charSize.height + this.leading) - (this._clipPoint ? this._clipPoint.y : 0));
        }, r(0, a, "width", function() {
            return this._width ? this._width : this.textWidth + this.padding[1] + this.padding[3];
        }, function(t) {
            t != this._width && (i.superSet(je, this, "width", t), this.isChanged = !0, this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1));
        }), r(0, a, "textWidth", function() {
            return this._isChanged && i.systemTimer.runCallLater(this, this.typeset), this._textWidth;
        }), r(0, a, "height", function() {
            return this._height ? this._height : this.textHeight;
        }, function(t) {
            t != this._height && (i.superSet(je, this, "height", t), this.isChanged = !0, this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1));
        }), r(0, a, "textHeight", function() {
            return this._isChanged && i.systemTimer.runCallLater(this, this.typeset), this._textHeight;
        }), r(0, a, "padding", function() {
            return this._style.padding;
        }, function(t) {
            if ("string" == typeof t) {
                var e;
                e = t.split(",");
                var i = 0, n = 0;
                for (n = e.length; e.length < 4; ) e.push(0);
                for (i = 0; n > i; i++) e[i] = parseFloat(e[i]) || 0;
                t = e;
            }
            this._getTextStyle().padding = t, this.isChanged = !0;
        }), r(0, a, "bold", function() {
            return this._style.bold;
        }, function(t) {
            this._getTextStyle().bold = t, this.isChanged = !0;
        }), r(0, a, "text", function() {
            return this._text || "";
        }, function(t) {
            this._text !== t && (this.lang(t + ""), this.isChanged = !0, this.event("change"), 
            this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1));
        }), r(0, a, "color", function() {
            return this._color;
        }, function(t) {
            this._color != t && (this._color = t, !this._isChanged && this._graphics ? this._graphics.replaceTextColor(this.color) : this.isChanged = !0);
        }), r(0, a, "font", function() {
            return this._font;
        }, function(t) {
            this._style.currBitmapFont && (this._getTextStyle().currBitmapFont = null, this.scale(1, 1)), 
            o._bitmapFonts && o._bitmapFonts[t] && (this._getTextStyle().currBitmapFont = o._bitmapFonts[t]), 
            this._font = t, this.isChanged = !0;
        }), r(0, a, "fontSize", function() {
            return this._fontSize;
        }, function(t) {
            this._fontSize != t && (this._fontSize = t, this.isChanged = !0);
        }), r(0, a, "italic", function() {
            return this._style.italic;
        }, function(t) {
            this._getTextStyle().italic = t, this.isChanged = !0;
        }), r(0, a, "align", function() {
            return this._style.align;
        }, function(t) {
            this._getTextStyle().align = t, this.isChanged = !0;
        }), r(0, a, "valign", function() {
            return this._valign;
        }, function(t) {
            this._valign = t, this.isChanged = !0;
        }), r(0, a, "wordWrap", function() {
            return this._style.wordWrap;
        }, function(t) {
            this._getTextStyle().wordWrap = t, this.isChanged = !0;
        }), r(0, a, "singleCharRender", function() {
            return this._singleCharRender;
        }, function(t) {
            this._singleCharRender = t;
        }), r(0, a, "leading", function() {
            return this._style.leading;
        }, function(t) {
            this._getTextStyle().leading = t, this.isChanged = !0;
        }), r(0, a, "bgColor", function() {
            return this._style.bgColor;
        }, function(t) {
            this._getTextStyle().bgColor = t, this._renderType |= 128, this._setBgStyleColor(0, 0, this.width, this.height, t), 
            this._setRenderType(this._renderType), this.isChanged = !0;
        }), r(0, a, "borderColor", function() {
            return this._style.borderColor;
        }, function(t) {
            this._getTextStyle().borderColor = t, this._renderType |= 128, this._setBorderStyleColor(0, 0, this.width, this.height, t, 1), 
            this._setRenderType(this._renderType), this.isChanged = !0;
        }), r(0, a, "stroke", function() {
            return this._style.stroke;
        }, function(t) {
            this._getTextStyle().stroke = t, this.isChanged = !0;
        }), r(0, a, "strokeColor", function() {
            return this._style.strokeColor;
        }, function(t) {
            this._getTextStyle().strokeColor = t, this.isChanged = !0;
        }), r(0, a, "isChanged", null, function(t) {
            this._isChanged !== t && (this._isChanged = t, t && i.systemTimer.callLater(this, this.typeset));
        }), r(0, a, "scrollX", function() {
            return this._clipPoint ? this._clipPoint.x : 0;
        }, function(t) {
            if (!("scroll" != this.overflow || this.textWidth < this._width) && this._clipPoint) {
                t = t < this.padding[3] ? this.padding[3] : t;
                var e = this._textWidth - this._width;
                t = t > e ? e : t, this._clipPoint.x = t, this._renderText();
            }
        }), r(0, a, "scrollY", function() {
            return this._clipPoint ? this._clipPoint.y : 0;
        }, function(t) {
            if (!("scroll" != this.overflow || this.textHeight < this._height) && this._clipPoint) {
                t = t < this.padding[0] ? this.padding[0] : t;
                var e = this._textHeight - this._height;
                t = t > e ? e : t, this._clipPoint.y = t, this._renderText();
            }
        }), r(0, a, "maxScrollX", function() {
            return this.textWidth < this._width ? 0 : this._textWidth - this._width;
        }), r(0, a, "maxScrollY", function() {
            return this.textHeight < this._height ? 0 : this._textHeight - this._height;
        }), r(0, a, "lines", function() {
            return this._isChanged && this.typeset(), this._lines;
        }), r(0, a, "underlineColor", function() {
            return this._style.underlineColor;
        }, function(t) {
            this._getTextStyle().underlineColor = t, this._isChanged || this._renderText();
        }), r(0, a, "underline", function() {
            return this._style.underline;
        }, function(t) {
            this._getTextStyle().underline = t;
        }), o.defaultFontStr = function() {
            return o.defaultFontSize + "px " + o.defaultFont;
        }, o.registerBitmapFont = function(t, e) {
            o._bitmapFonts || (o._bitmapFonts = {}), o._bitmapFonts[t] = e;
        }, o.unregisterBitmapFont = function(t, e) {
            if (void 0 === e && (e = !0), o._bitmapFonts && o._bitmapFonts[t]) {
                var i = o._bitmapFonts[t];
                e && i.destroy(), delete o._bitmapFonts[t];
            }
        }, o.VISIBLE = "visible", o.SCROLL = "scroll", o.HIDDEN = "hidden", o.defaultFontSize = 12, 
        o.defaultFont = "Arial", o.langPacks = null, o.isComplexText = !1, o._testWord = "游", 
        o._bitmapFonts = null, o.CharacterCache = !0, o.RightToLeft = !1, n(o, [ "fontFamilyMap", function() {
            return this.fontFamilyMap = {
                "报隶": "报隶-简",
                "黑体": "黑体-简",
                "楷体": "楷体-简",
                "兰亭黑": "兰亭黑-简",
                "隶变": "隶变-简",
                "凌慧体": "凌慧体-简",
                "翩翩体": "翩翩体-简",
                "苹方": "苹方-简",
                "手札体": "手札体-简",
                "宋体": "宋体-简",
                "娃娃体": "娃娃体-简",
                "魏碑": "魏碑-简",
                "行楷": "行楷-简",
                "雅痞": "雅痞-简",
                "圆体": "圆体-简"
            };
        } ]), o;
    }(je), Je = function(t) {
        function e() {
            e.__super.call(this);
        }
        s(e, "laya.resource.HTMLImage", t);
        var i = e.prototype;
        return i.loadImageSource = function(t) {
            var e = t.width, i = t.height;
            if (0 >= e || 0 >= i) throw new Error("HTMLImage:width or height must large than 0.");
            this._width = e, this._height = i, this._source = t, this._setGPUMemory(e * i * 4), 
            this._activeResource();
        }, i._disposeResource = function() {
            this._source && (this._source = null, this._setGPUMemory(0));
        }, i._getSource = function() {
            return this._source;
        }, e.create = function() {
            return new e();
        }, e;
    }(Ve), Ze = (function(t) {
        function e() {
            this.url = null, this._channel = null, this._tar = null, this._playEvents = null, 
            this._stopEvents = null, e.__super.call(this), this.visible = !1, this.on("added", this, this._onParentChange), 
            this.on("removed", this, this._onParentChange);
        }
        s(e, "laya.media.SoundNode", t);
        var i = e.prototype;
        return i._onParentChange = function() {
            this.target = this.parent;
        }, i.play = function(t, e) {
            void 0 === t && (t = 1), isNaN(t) && (t = 1), this.url && (this.stop(), this._channel = oe.playSound(this.url, t, e));
        }, i.stop = function() {
            this._channel && !this._channel.isStopped && this._channel.stop(), this._channel = null;
        }, i._setPlayAction = function(t, e, i, n) {
            void 0 === n && (n = !0), this[i] && t && (n ? t.on(e, this, this[i]) : t.off(e, this, this[i]));
        }, i._setPlayActions = function(t, e, i, n) {
            if (void 0 === n && (n = !0), t && e) {
                var s = e.split(","), r = 0, o = 0;
                for (o = s.length, r = 0; o > r; r++) this._setPlayAction(t, s[r], i, n);
            }
        }, r(0, i, "playEvent", null, function(t) {
            this._playEvents = t, t && this._tar && this._setPlayActions(this._tar, t, "play");
        }), r(0, i, "target", null, function(t) {
            this._tar && (this._setPlayActions(this._tar, this._playEvents, "play", !1), this._setPlayActions(this._tar, this._stopEvents, "stop", !1)), 
            this._tar = t, this._tar && (this._setPlayActions(this._tar, this._playEvents, "play", !0), 
            this._setPlayActions(this._tar, this._stopEvents, "stop", !0));
        }), r(0, i, "stopEvent", null, function(t) {
            this._stopEvents = t, t && this._tar && this._setPlayActions(this._tar, t, "stop");
        }), e;
    }(je), function(t) {
        function e() {
            this.loop = !1, this.wrapMode = 0, this._index = 0, this._count = 0, this._isPlaying = !1, 
            this._labels = null, this._isReverse = !1, this._frameRateChanged = !1, this._actionName = null, 
            this._controlNode = null, e.__super.call(this), this._interval = te.animationInterval, 
            this._setBitUp(16);
        }
        s(e, "laya.display.AnimationBase", t);
        var i = e.prototype;
        return i.play = function(t, e, i) {
            void 0 === t && (t = 0), void 0 === e && (e = !0), void 0 === i && (i = ""), this._isPlaying = !0, 
            this._actionName = i, this.index = "string" == typeof t ? this._getFrameByLabel(t) : t, 
            this.loop = e, this._isReverse = 1 === this.wrapMode, 0 == this.index && this._isReverse && (this.index = this.count - 1), 
            this.interval > 0 && this.timerLoop(this.interval, this, this._frameLoop, null, !0, !0);
        }, i._getFrameByLabel = function(t) {
            for (var e = 0; e < this._count; e++) {
                var i = this._labels[e];
                if (i && i.indexOf(t) > -1) return e;
            }
            return 0;
        }, i._frameLoop = function() {
            if (this._isReverse) {
                if (this._index--, this._index < 0) {
                    if (!this.loop) return this._index = 0, this.stop(), this.event("complete"), void 0;
                    2 == this.wrapMode ? (this._index = this._count > 0 ? 1 : 0, this._isReverse = !1) : this._index = this._count - 1, 
                    this.event("complete");
                }
            } else if (this._index++, this._index >= this._count) {
                if (!this.loop) return this._index--, this.stop(), this.event("complete"), void 0;
                2 == this.wrapMode ? (this._index = this._count - 2 >= 0 ? this._count - 2 : 0, 
                this._isReverse = !0) : this._index = 0, this.event("complete");
            }
            this.index = this._index;
        }, i._setControlNode = function(t) {
            this._controlNode && (this._controlNode.off("display", this, this._resumePlay), 
            this._controlNode.off("undisplay", this, this._resumePlay)), this._controlNode = t, 
            t && t != this && (t.on("display", this, this._resumePlay), t.on("undisplay", this, this._resumePlay));
        }, i._setDisplay = function(e) {
            t.prototype._setDisplay.call(this, e), this._resumePlay();
        }, i._resumePlay = function() {
            this._isPlaying && (this._controlNode.displayedInStage ? this.play(this._index, this.loop, this._actionName) : this.clearTimer(this, this._frameLoop));
        }, i.stop = function() {
            this._isPlaying = !1, this.clearTimer(this, this._frameLoop);
        }, i.addLabel = function(t, e) {
            this._labels || (this._labels = {}), this._labels[e] || (this._labels[e] = []), 
            this._labels[e].push(t);
        }, i.removeLabel = function(t) {
            if (t) {
                if (this._labels) for (var e in this._labels) this._removeLabelFromList(this._labels[e], t);
            } else this._labels = null;
        }, i._removeLabelFromList = function(t, e) {
            if (t) for (var i = t.length - 1; i >= 0; i--) t[i] == e && t.splice(i, 1);
        }, i.gotoAndStop = function(t) {
            this.index = "string" == typeof t ? this._getFrameByLabel(t) : t, this.stop();
        }, i._displayToIndex = function() {}, i.clear = function() {
            return this.stop(), this._labels = null, this;
        }, r(0, i, "interval", function() {
            return this._interval;
        }, function(t) {
            this._interval != t && (this._frameRateChanged = !0, this._interval = t, this._isPlaying && t > 0 && this.timerLoop(t, this, this._frameLoop, null, !0, !0));
        }), r(0, i, "isPlaying", function() {
            return this._isPlaying;
        }), r(0, i, "index", function() {
            return this._index;
        }, function(t) {
            if (this._index = t, this._displayToIndex(t), this._labels && this._labels[t]) for (var e = this._labels[t], i = 0, n = e.length; n > i; i++) this.event("label", e[i]);
        }), r(0, i, "count", function() {
            return this._count;
        }), e.WRAP_POSITIVE = 0, e.WRAP_REVERSE = 1, e.WRAP_PINGPONG = 2, e;
    }(je)), ti = function(e) {
        function a() {
            function t() {
                "hidden" == I.document[s] ? (e._isVisibility = !1, n._isInputting() && (si.inputElement.target.focus = !1)) : e._isVisibility = !0, 
                e.renderingEnabled = e._isVisibility, n.event("visibilitychange");
            }
            this.focus = null, this._frameRate = "fast", this.designWidth = 0, this.designHeight = 0, 
            this.canvasRotation = !1, this.canvasDegree = 0, this.renderingEnabled = !0, this.screenAdaptationEnabled = !0, 
            this._screenMode = "none", this._scaleMode = "showall", this._alignV = "middle", this._alignH = "center", 
            this._bgColor = "black", this._mouseMoveTime = 0, this._renderCount = 0, this._safariOffsetY = 0, 
            this._frameStartTime = 0, this._isFocused = !1, this._isVisibility = !1, this._wgColor = [ 0, 0, 0, 1 ], 
            this._scene3Ds = [], this._globalRepaintSet = !1, this._globalRepaintGet = !1, this._curUIBase = null, 
            this.useRetinalCanvas = !0, a.__super.call(this), this.offset = new l(), this._canvasTransform = new U(), 
            this._previousOrientation = I.window.orientation, this._3dUI = [];
            var e = this;
            this.transform = U.create(), this.mouseEnabled = !0, this.hitTestPrior = !0, this.autoSize = !1, 
            this._setBit(128, !0), this._setBit(2, !0), this._isFocused = !0, this._isVisibility = !0, 
            this.useRetinalCanvas = te.useRetinalCanvas;
            var i = I.window, n = this;
            i.addEventListener("focus", function() {
                e._isFocused = !0, n.event("focus"), n.event("focuschange");
            }), i.addEventListener("blur", function() {
                e._isFocused = !1, n.event("blur"), n.event("focuschange"), n._isInputting() && (si.inputElement.target.focus = !1);
            });
            var s = "visibilityState", r = "visibilitychange", o = i.document;
            "undefined" != typeof o.hidden ? (r = "visibilitychange", s = "visibilityState") : "undefined" != typeof o.mozHidden ? (r = "mozvisibilitychange", 
            s = "mozVisibilityState") : "undefined" != typeof o.msHidden ? (r = "msvisibilitychange", 
            s = "msVisibilityState") : "undefined" != typeof o.webkitHidden && (r = "webkitvisibilitychange", 
            s = "webkitVisibilityState"), i.document.addEventListener(r, t), 
            
            window.addEventListener("resize", () => {
                                        var orientation = Laya.Browser.window.orientation;
                                        if (orientation != null && orientation != this._previousOrientation && this._isInputting()) {
                                            Input["inputElement"].target.focus = false;
                                        }
                                        this._previousOrientation = orientation;
                                        if (this._isInputting())
                                            return;
                                        if (Laya.Browser.onSafari) {
                                            this._safariOffsetY = (Laya.Browser.window.__innerHeight || Laya.Browser.document.body.clientHeight ||
                                                Laya.Browser.document.documentElement.clientHeight) - Laya.Browser.window.innerHeight;
                                            this._safariOffsetY = Math.max(0, this._safariOffsetY);
                                        }
                
                                        this._resetCanvas();
                                    }), window.addEventListener("orientationchange", (e) => {
                                        if (Laya.Browser.onSafari) {
                                            clearTimeout(this._timeoutId);
                                            this._timeoutId = setTimeout(() => {
                                                this._safariOffsetY = (Laya.Browser.window.__innerHeight || Laya.Browser.document.body.clientHeight ||
                                                    Laya.Browser.document.documentElement.clientHeight) - Laya.Browser.window.innerHeight;
                                                this._safariOffsetY = Math.max(0, this._safariOffsetY);
                                                this._resetCanvas();
                
                                            }, 0.5e3);
                                        } else {
                                            this._resetCanvas();
                                        }
                                    }), 
            
            
            this.on("mousemove", this, this._onmouseMove), I.onMobile && this.on("mousedown", this, this._onmouseMove);
        }
        s(a, "laya.display.Stage", e);
        var h = a.prototype;
        return h._isInputting = function() {
            return I.onMobile && si.isInputting;
        }, h._changeCanvasSize = function() {
            this.setScreenSize(I.clientWidth * I.pixelRatio, I.clientHeight * I.pixelRatio);
        }, h._resetCanvas = function() {
            this.screenAdaptationEnabled && this._changeCanvasSize();
        }, h.setScreenSize = function(t, e) {
            var i = !1;
            if ("none" !== this._screenMode) {
                var n = 1 > t / e ? "vertical" : "horizontal";
                if (i = n !== this._screenMode) {
                    var s = e;
                    e = t, t = s;
                }
            }
            this.canvasRotation = i;
            var r = fe._mainCanvas, o = r.source.style, a = this._canvasTransform.identity(), h = this._scaleMode, l = t / this.designWidth, u = e / this.designHeight, c = this.useRetinalCanvas ? t : this.designWidth, _ = this.useRetinalCanvas ? e : this.designHeight, d = t, f = e, p = I.pixelRatio;
            switch (this._width = this.designWidth, this._height = this.designHeight, h) {
              case "noscale":
                l = u = 1, d = this.designWidth, f = this.designHeight;
                break;

              case "showall":
                l = u = Math.min(l, u), c = d = Math.round(this.designWidth * l), _ = f = Math.round(this.designHeight * u);
                break;

              case "noborder":
                l = u = Math.max(l, u), d = Math.round(this.designWidth * l), f = Math.round(this.designHeight * u);
                break;

              case "full":
                l = u = 1, this._width = c = t, this._height = _ = e;
                break;

              case "fixedwidth":
                u = l, this._height = _ = Math.round(e / l);
                break;

              case "fixedheight":
                l = u, this._width = c = Math.round(t / u);
                break;

              case "fixedauto":
                t / e < this.designWidth / this.designHeight ? (u = l, this._height = _ = Math.round(e / l)) : (l = u, 
                this._width = c = Math.round(t / u));
            }
            this.useRetinalCanvas && (c = t, _ = e), l *= this.scaleX, u *= this.scaleY, 1 === l && 1 === u ? this.transform.identity() : (this.transform.a = this._formatData(l / (d / c)), 
            this.transform.d = this._formatData(u / (f / _))), r.size(c, _), re.changeWebGLSize(c, _), 
            a.scale(d / c / p, f / _ / p), this.offset.x = "left" === this._alignH ? 0 : "right" === this._alignH ? t - d : .5 * (t - d) / p, 
            this.offset.y = "top" === this._alignV ? 0 : "bottom" === this._alignV ? e - f : .5 * (e - f) / p, 
            this.offset.x = Math.round(this.offset.x), this.offset.y = Math.round(this.offset.y), 
            a.translate(this.offset.x, this.offset.y), this._safariOffsetY && a.translate(0, this._safariOffsetY), 
            this.canvasDegree = 0, i && ("horizontal" === this._screenMode ? (a.rotate(Math.PI / 2), 
            a.translate(e / p, 0), this.canvasDegree = 90) : (a.rotate(-Math.PI / 2), a.translate(0, t / p), 
            this.canvasDegree = -90)), a.a = this._formatData(a.a), a.d = this._formatData(a.d), 
            a.tx = this._formatData(a.tx), a.ty = this._formatData(a.ty), this.transform = this.transform, 
            o.transformOrigin = o.webkitTransformOrigin = o.msTransformOrigin = o.mozTransformOrigin = o.oTransformOrigin = "0px 0px 0px", 
            o.transform = o.webkitTransform = o.msTransform = o.mozTransform = o.oTransform = "matrix(" + a.toString() + ")", 
            this._safariOffsetY && a.translate(0, -this._safariOffsetY), a.translate(parseInt(o.left) || 0, parseInt(o.top) || 0), 
            this.visible = !0, this._repaint |= 2, this.event("resize");
        }, h._formatData = function(t) {
            return Math.abs(t) < 1e-6 ? 0 : Math.abs(1 - t) < .001 ? t > 0 ? 1 : -1 : t;
        }, h.getMousePoint = function() {
            return l.TEMP.setTo(this.mouseX, this.mouseY);
        }, h.repaint = function(t) {
            void 0 === t && (t = 2), this._repaint |= t;
        }, h.parentRepaint = function(t) {
            void 0 === t && (t = 2);
        }, h._loop = function() {
            return this._globalRepaintGet = this._globalRepaintSet, this._globalRepaintSet = !1, 
            this.render(fe._context, 0, 0), !0;
        }, h.getFrameTm = function() {
            return this._frameStartTime;
        }, h._onmouseMove = function() {
            this._mouseMoveTime = I.now();
        }, h.getTimeFromFrameStart = function() {
            return I.now() - this._frameStartTime;
        }, h.render = function(t, i, n) {
            if (a._dbgSprite.graphics.clear(), "sleep" === this._frameRate) {
                var s = I.now();
                if (!(s - this._frameStartTime >= 1e3)) return;
                this._frameStartTime = s;
            } else {
                if (!this._visible) return this._renderCount++, this._renderCount % 5 === 0 && (Y.I._update(), 
                z.loopCount++, this._updateTimers()), void 0;
                this._frameStartTime = I.now();
            }
            this._renderCount++;
            var r = "mouse" === this._frameRate ? this._frameStartTime - this._mouseMoveTime < 2e3 ? "fast" : "slow" : this._frameRate, o = "slow" !== r, h = this._renderCount % 2 === 0;
            if (z.renderSlow = !o, (o || h) && (Y.I._update(), z.loopCount++, fe.isWebGL && this.renderingEnabled)) {
                for (var l = 0, u = this._scene3Ds.length; u > l; l++) this._scene3Ds[l]._update();
                t.clear(), e.prototype.render.call(this, t, i, n), z._show && z._sp && z._sp.render(t, i, n);
            }
            a._dbgSprite.render(t, 0, 0), (o || !h) && (this.renderingEnabled && (fe.isWebGL ? (re.clear(this._bgColor), 
            t.flush(), L.instance && L.getInstance().endDispose()) : (re.clear(this._bgColor), 
            e.prototype.render.call(this, t, i, n), z._show && z._sp && z._sp.render(t, i, n))), 
            this._updateTimers());
        }, h.renderToNative = function(t, i, n) {
            if (this._renderCount++, !this._visible) return this._renderCount % 5 === 0 && (Y.I._update(), 
            z.loopCount++, this._updateTimers()), void 0;
            if (Y.I._update(), z.loopCount++, fe.isWebGL && this.renderingEnabled) {
                for (var s = 0, r = this._scene3Ds.length; r > s; s++) this._scene3Ds[s]._update();
                t.clear(), e.prototype.render.call(this, t, i, n), z._show && z._sp && z._sp.render(t, i, n);
            }
            this.renderingEnabled && (re.clear(this._bgColor), t.flush(), L.instance && L.getInstance().endDispose()), 
            this._updateTimers();
        }, h._updateTimers = function() {
            i.systemTimer._update(), i.startTimer._update(), i.physicsTimer._update(), i.updateTimer._update(), 
            i.lateTimer._update(), i.timer._update();
        }, h._requestFullscreen = function() {
            var t = I.document.documentElement;
            t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen();
        }, h._fullScreenChanged = function() {
            i.stage.event("fullscreenchange");
        }, h.exitFullscreen = function() {
            var t = I.document;
            t.exitFullscreen ? t.exitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.webkitExitFullscreen && t.webkitExitFullscreen();
        }, h.isGlobalRepaint = function() {
            return this._globalRepaintGet;
        }, h.setGlobalRepaint = function() {
            this._globalRepaintSet = !0;
        }, h.add3DUI = function(t) {
            var e = t.rootView;
            this._3dUI.indexOf(e) >= 0 || this._3dUI.push(e);
        }, h.remove3DUI = function(t) {
            var e = t.rootView, i = this._3dUI.indexOf(e);
            return i >= 0 ? (this._3dUI.splice(i, 1), !0) : !1;
        }, r(0, h, "clientScaleY", function() {
            return this._transform ? this._transform.getScaleY() : 1;
        }), r(0, h, "width", e.prototype._$get_width, function(t) {
            this.designWidth = t, i.superSet(je, this, "width", t), i.systemTimer.callLater(this, this._changeCanvasSize);
        }), r(0, h, "isFocused", function() {
            return this._isFocused;
        }), r(0, h, "alignH", function() {
            return this._alignH;
        }, function(t) {
            this._alignH = t, i.systemTimer.callLater(this, this._changeCanvasSize);
        }), r(0, h, "height", e.prototype._$get_height, function(t) {
            this.designHeight = t, i.superSet(je, this, "height", t), i.systemTimer.callLater(this, this._changeCanvasSize);
        }), r(0, h, "transform", function() {
            return this._tfChanged && this._adjustTransform(), this._transform = this._transform || this._createTransform();
        }, e.prototype._$set_transform), r(0, h, "isVisibility", function() {
            return this._isVisibility;
        }), r(0, h, "scaleMode", function() {
            return this._scaleMode;
        }, function(t) {
            this._scaleMode = t, i.systemTimer.callLater(this, this._changeCanvasSize);
        }), r(0, h, "alignV", function() {
            return this._alignV;
        }, function(t) {
            this._alignV = t, i.systemTimer.callLater(this, this._changeCanvasSize);
        }), r(0, h, "bgColor", function() {
            return this._bgColor;
        }, function(t) {
            this._bgColor = t, fe.isWebGL && (this._wgColor = t ? o.create(t).arrColor : null), 
            I.onLimixiu ? this._wgColor = o.create(t).arrColor : fe.canvas.style.background = t ? t : "none";
        }), r(0, h, "mouseX", function() {
            return Math.round(Pe.instance.mouseX / this.clientScaleX);
        }), r(0, h, "mouseY", function() {
            return Math.round(Pe.instance.mouseY / this.clientScaleY);
        }), r(0, h, "clientScaleX", function() {
            return this._transform ? this._transform.getScaleX() : 1;
        }), r(0, h, "screenMode", function() {
            return this._screenMode;
        }, function(t) {
            this._screenMode = t;
        }), r(0, h, "visible", e.prototype._$get_visible, function(t) {
            if (this.visible !== t) {
                i.superSet(je, this, "visible", t);
                var e = fe._mainCanvas.source.style;
                e.visibility = t ? "visible" : "hidden";
            }
        }), r(0, h, "fullScreenEnabled", null, function(t) {
            var e = I.document, i = fe.canvas;
            t ? (i.addEventListener("mousedown", this._requestFullscreen), i.addEventListener("touchstart", this._requestFullscreen), 
            e.addEventListener("fullscreenchange", this._fullScreenChanged), e.addEventListener("mozfullscreenchange", this._fullScreenChanged), 
            e.addEventListener("webkitfullscreenchange", this._fullScreenChanged), e.addEventListener("msfullscreenchange", this._fullScreenChanged)) : (i.removeEventListener("mousedown", this._requestFullscreen), 
            i.removeEventListener("touchstart", this._requestFullscreen), e.removeEventListener("fullscreenchange", this._fullScreenChanged), 
            e.removeEventListener("mozfullscreenchange", this._fullScreenChanged), e.removeEventListener("webkitfullscreenchange", this._fullScreenChanged), 
            e.removeEventListener("msfullscreenchange", this._fullScreenChanged));
        }), r(0, h, "frameRate", function() {
            return fe.isConchApp ? this._frameRateNative : this._frameRate;
        }, function(e) {
            if (fe.isConchApp) {
                switch (e) {
                  case "fast":
                    t.conch.config.setLimitFPS(60);
                    break;

                  case "mouse":
                    t.conch.config.setMouseFrame(2e3);
                    break;

                  case "slow":
                    t.conch.config.setSlowFrame(!0);
                    break;

                  case "sleep":
                    t.conch.config.setLimitFPS(1);
                }
                this._frameRateNative = e;
            } else this._frameRate = e;
        }), a.SCALE_NOSCALE = "noscale", a.SCALE_EXACTFIT = "exactfit", a.SCALE_SHOWALL = "showall", 
        a.SCALE_NOBORDER = "noborder", a.SCALE_FULL = "full", a.SCALE_FIXED_WIDTH = "fixedwidth", 
        a.SCALE_FIXED_HEIGHT = "fixedheight", a.SCALE_FIXED_AUTO = "fixedauto", a.ALIGN_LEFT = "left", 
        a.ALIGN_RIGHT = "right", a.ALIGN_CENTER = "center", a.ALIGN_TOP = "top", a.ALIGN_MIDDLE = "middle", 
        a.ALIGN_BOTTOM = "bottom", a.SCREEN_NONE = "none", a.SCREEN_HORIZONTAL = "horizontal", 
        a.SCREEN_VERTICAL = "vertical", a.FRAME_FAST = "fast", a.FRAME_SLOW = "slow", a.FRAME_MOUSE = "mouse", 
        a.FRAME_SLEEP = "sleep", n(a, [ "_dbgSprite", function() {
            return this._dbgSprite = new je();
        } ]), a;
    }(je), ei = function(t) {
        function e() {
            this.datas = [], this.hud_width = 800, this.hud_height = 200, this.gMinV = 0, this.gMaxV = 100, 
            this.textSpace = 40, this._now = null, this.sttm = 0, e.__super.call(this), this.xdata = new Array(e.DATANUM), 
            this.ydata = new Array(e.DATANUM), e.inst = this, this._renderType |= 2048, this._setRenderType(this._renderType), 
            this._setCustomRender(), this.addDataDef(0, 16777215, "frame", 1), this.addDataDef(1, 65280, "update", 1), 
            this.addDataDef(2, 16711680, "flush", 1), this._now = performance ? performance.now.bind(performance) : Date.now;
        }
        s(e, "laya.utils.PerfHUD", t);
        var i = e.prototype;
        return i.now = function() {
            return this._now();
        }, i.start = function() {
            this.sttm = this._now();
        }, i.end = function(t) {
            var e = this._now() - this.sttm;
            this.updateValue(t, e);
        }, i.config = function(t, e) {
            this.hud_width = t, this.hud_height = e;
        }, i.addDataDef = function(t, e, i, n) {
            this.datas[t] = new Q(t, e, i, n);
        }, i.updateValue = function(t, e) {
            this.datas[t].addData(e);
        }, i.v2y = function(t) {
            this._y + this.hud_height * (1 - (t - this.gMinV) / this.gMaxV);
            return this._y + this.hud_height * (1 - (t - this.gMinV) / this.gMaxV);
        }, i.drawHLine = function(t, e, i, n) {
            var s = this._x, r = (this._x + this.hud_width, this.v2y(e));
            t.fillText(n, s, r - 6, null, "green"), s += this.textSpace, t.fillStyle = i, t.fillRect(s, r, this._x + this.hud_width, 1);
        }, i.customRender = function(t) {
            var i = performance.now();
            e._lastTm <= 0 && (e._lastTm = i), this.updateValue(0, i - e._lastTm), e._lastTm = i, 
            t.save(), t.fillRect(this._x, this._y, this.hud_width, this.hud_height + 4, "#000000cc"), 
            t.globalAlpha = .9, this.drawHLine(t, 0, "green", "    0"), this.drawHLine(t, 10, "green", "  10"), 
            this.drawHLine(t, 16.667, "red", " "), this.drawHLine(t, 20, "green", "50|20"), 
            this.drawHLine(t, 33.334, "yellow", ""), this.drawHLine(t, 16.667 * 3, "yellow", ""), 
            this.drawHLine(t, 66.668, "yellow", ""), this.drawHLine(t, 50, "green", "20|50"), 
            this.drawHLine(t, 100, "green", "10|100");
            for (var n = 0, s = this.datas.length; s > n; n++) {
                var r = this.datas[n];
                if (r) {
                    var o = r.datas.length, a = (this.hud_width - this.textSpace) / o, h = r.datapos, l = this._x + this.textSpace;
                    t.fillStyle = r.color;
                    for (var u = o; u > h; h++) {
                        var c = this.v2y(r.datas[h] * r.scale);
                        t.fillRect(l, c, a, this.hud_height + this._y - c), l += a;
                    }
                    for (h = 0; h < r.datapos; h++) c = this.v2y(r.datas[h] * r.scale), t.fillRect(l, c, a, this.hud_height + this._y - c), 
                    l += a;
                }
            }
            t.restore();
        }, e._lastTm = 0, e._now = 0, e.DATANUM = 300, e.inst = null, e.drawTexTm = 0, e;
    }(je), ii = function(t) {
        function e() {
            this.autoDestroyAtClosed = !1, this.url = null, this._timer = null, this._viewCreated = !1, 
            this._idMap = null, this._$componentType = "Scene", e.__super.call(this), this._setBit(8, !0), 
            e.unDestroyedScenes.push(this), this._scene = this, this.createChildren();
        }
        s(e, "laya.display.Scene", t);
        var n = e.prototype;
        return n.createChildren = function() {}, n.loadScene = function(t) {
            var e = t.indexOf(".") > -1 ? t : t + ".scene", n = i.loader.getRes(e);
            if (n) this.createView(n); else {
                i.loader.resetProgress();
                var s = new Ge();
                s.on("complete", this, this._onSceneLoaded, [ e ]), s.load(e);
            }
        }, n._onSceneLoaded = function(t) {
            this.createView(Ye.getRes(t));
        }, n.createView = function(t) {
            t && !this._viewCreated && (this._viewCreated = !0, ge.createByData(this, t));
        }, n.getNodeByID = function(t) {
            return this._idMap ? this._idMap[t] : null;
        }, n.open = function(t, i) {
            void 0 === t && (t = !0), t && e.closeAll(), e.root.addChild(this), this.onOpened(i);
        }, n.onOpened = function() {}, n.close = function(t) {
            this.onClosed(t), this.autoDestroyAtClosed ? this.destroy() : this.removeSelf();
        }, n.onClosed = function() {}, n.destroy = function(e) {
            void 0 === e && (e = !0), this._idMap = null, t.prototype.destroy.call(this, e);
            for (var i = laya.display.Scene.unDestroyedScenes, n = i.length - 1; n > -1; n--) if (i[n] === this) return i.splice(n, 1), 
            void 0;
        }, n._sizeChanged = function() {
            this.event("resize");
        }, r(0, n, "scaleX", t.prototype._$get_scaleX, function(t) {
            i.superGet(je, this, "scaleX") != t && (i.superSet(je, this, "scaleX", t), this.event("resize"));
        }), r(0, n, "scaleY", t.prototype._$get_scaleY, function(t) {
            i.superGet(je, this, "scaleY") != t && (i.superSet(je, this, "scaleY", t), this.event("resize"));
        }), r(0, n, "width", function() {
            if (this._width) return this._width;
            for (var t = 0, e = this.numChildren - 1; e > -1; e--) {
                var i = this.getChildAt(e);
                i._visible && (t = Math.max(i._x + i.width * i.scaleX, t));
            }
            return t;
        }, function(t) {
            i.superGet(je, this, "width") != t && (i.superSet(je, this, "width", t), this.callLater(this._sizeChanged));
        }), r(0, n, "timer", function() {
            return this._timer || i.timer;
        }, function(t) {
            this._timer = t;
        }), r(0, n, "height", function() {
            if (this._height) return this._height;
            for (var t = 0, e = this.numChildren - 1; e > -1; e--) {
                var i = this.getChildAt(e);
                i._visible && (t = Math.max(i._y + i.height * i.scaleY, t));
            }
            return t;
        }, function(t) {
            i.superGet(je, this, "height") != t && (i.superSet(je, this, "height", t), this.callLater(this._sizeChanged));
        }), r(1, e, "root", function() {
            function t() {
                e._root.size(i.stage.width, i.stage.height), e._root.event("resize");
            }
            return e._root || (e._root = i.stage.addChild(new je()), e._root.name = "root", 
            i.stage.on("resize", null, t), t()), e._root;
        }, laya.display.Sprite._$SET_root), e.load = function(t, n, s) {
            function r(t) {
                e._loadPage && e._loadPage.event("progress", t), s && s.runWith(t);
            }
            function o() {
                a.off("progress", null, r);
                var i = Ye.getRes(t);
                if (!i) throw "Can not find scene:" + t;
                if (!i.props) throw "Scene data is error:" + t;
                var s = i.props.runtime ? i.props.runtime : i.type, o = Me.getClass(s);
                if ("instance" == i.props.renderType) var h = o.instance || (o.instance = new o()); else h = new o();
                if (!(h && h instanceof laya.display.Node)) throw "Can not find scene:" + s;
                h.url = t, h._getBit(8) ? (h.on("onViewCreated", null, function() {
                    n && n.runWith(h);
                }), h.createView(i)) : n && n.runWith(h), e.hideLoadingPage();
            }
            i.loader.resetProgress();
            var a = new Ge();
            a.on("progress", null, r), a.once("complete", null, o), a.load(t);
        }, e.open = function(t, i, n, s, r) {
            if (void 0 === i && (i = !0), n instanceof laya.utils.Handler) {
                var o = s;
                s = n, n = o;
            }
            e.showLoadingPage(), e.load(t, d.create(null, this._onSceneLoaded, [ i, s, n ]), r);
        }, e._onSceneLoaded = function(t, e, i, n) {
            n.open(t, i), e && e.runWith(n);
        }, e.close = function(t, e) {
            void 0 === e && (e = "");
            for (var i = !1, n = laya.display.Scene.unDestroyedScenes, s = 0, r = n.length; r > s; s++) {
                var o = n[s];
                o && o.parent && o.url === t && o.name == e && (o.close(), i = !0);
            }
            return i;
        }, e.closeAll = function() {
            for (var t = laya.display.Scene.root, e = 0, i = t.numChildren; i > e; e++) {
                var n = t.getChildAt(0);
                n instanceof laya.display.Scene ? n.close() : n.removeSelf();
            }
        }, e.destroy = function(t, e) {
            void 0 === e && (e = "");
            for (var i = !1, n = laya.display.Scene.unDestroyedScenes, s = 0, r = n.length; r > s; s++) {
                var o = n[s];
                o.url === t && o.name == e && (o.destroy(), i = !0);
            }
            return i;
        }, e.gc = function() {
            Ee.destroyUnusedResources();
        }, e.setLoadingPage = function(t) {
            e._loadPage != t && (e._loadPage = t);
        }, e.showLoadingPage = function(t, n) {
            void 0 === n && (n = 500), e._loadPage && (i.systemTimer.clear(null, e._showLoading), 
            i.systemTimer.clear(null, e._hideLoading), i.systemTimer.once(n, null, e._showLoading, [ t ], !1));
        }, e._showLoading = function(t) {
            i.stage.addChild(e._loadPage), e._loadPage.onOpened(t);
        }, e._hideLoading = function() {
            e._loadPage.close();
        }, e.hideLoadingPage = function(t) {
            void 0 === t && (t = 500), e._loadPage && (i.systemTimer.clear(null, e._showLoading), 
            i.systemTimer.clear(null, e._hideLoading), i.systemTimer.once(t, null, e._hideLoading));
        }, e.unDestroyedScenes = [], e._root = null, e._loadPage = null, e;
    }(je), ni = function(t) {
        function e() {
            this._targetDic = null, this._animationData = null, this._usedFrames = null, e.__super.call(this), 
            null === e._sortIndexFun && (e._sortIndexFun = F.sortByKey("index", !1, !0));
        }
        s(e, "laya.display.FrameAnimation", t);
        var i = e.prototype;
        return i._setUp = function(t, e) {
            this._targetDic = t, this._animationData = e, this.interval = 1e3 / e.frameRate, 
            e.parsed ? (this._count = e.count, this._labels = e.labels, this._usedFrames = e.animationNewFrames) : (this._usedFrames = [], 
            this._calculateDatas(), e.parsed = !0, e.labels = this._labels, e.count = this._count, 
            e.animationNewFrames = this._usedFrames);
        }, i.clear = function() {
            return t.prototype.clear.call(this), this._targetDic = null, this._animationData = null, 
            this;
        }, i._displayToIndex = function(t) {
            if (this._animationData) {
                0 > t && (t = 0), t > this._count && (t = this._count);
                var e = this._animationData.nodes, i = 0, n = e.length;
                for (i = 0; n > i; i++) this._displayNodeToFrame(e[i], t);
            }
        }, i._displayNodeToFrame = function(t, e, i) {
            i || (i = this._targetDic);
            var n = i[t.target];
            if (n) {
                var s, r, o, a = t.frames, h = t.keys, l = 0, u = h.length;
                for (l = 0; u > l; l++) s = h[l], r = a[s], o = r.length > e ? r[e] : r[r.length - 1], 
                n[s] = o;
                var c = t.funkeys;
                u = c.length;
                var _;
                if (0 != u) for (l = 0; u > l; l++) s = c[l], _ = a[s], void 0 !== _[e] && n[s] && n[s].apply(n, _[e]);
            }
        }, i._calculateDatas = function() {
            if (this._animationData) {
                var t, e = this._animationData.nodes, i = 0, n = e.length;
                for (this._count = 0, i = 0; n > i; i++) t = e[i], this._calculateKeyFrames(t);
                this._count += 1;
            }
        }, i._calculateKeyFrames = function(t) {
            var i, n, s = t.keyframes, r = t.target;
            t.frames || (t.frames = {}), t.keys ? t.keys.length = 0 : t.keys = [], t.funkeys ? t.funkeys.length = 0 : t.funkeys = [], 
            t.initValues || (t.initValues = {});
            for (i in s) {
                var o = -1 != i.indexOf("()");
                if (n = s[i], o && (i = i.substr(0, i.length - 2)), t.frames[i] || (t.frames[i] = []), 
                o) {
                    t.funkeys.push(i);
                    for (var a = t.frames[i], h = 0; h < n.length; h++) {
                        var l = n[h];
                        a[l.index] = l.value, l.index > this._count && (this._count = l.index);
                    }
                } else this._targetDic && this._targetDic[r] && (t.initValues[i] = this._targetDic[r][i]), 
                n.sort(e._sortIndexFun), t.keys.push(i), this._calculateNodePropFrames(n, t.frames[i], i, r);
            }
        }, i.resetNodes = function() {
            if (this._targetDic && this._animationData) {
                var t, e, i = this._animationData.nodes, n = 0, s = i.length;
                for (n = 0; s > n; n++) if (t = i[n], e = t.initValues) {
                    var r = this._targetDic[t.target];
                    if (r) {
                        var o;
                        for (o in e) r[o] = e[o];
                    }
                }
            }
        }, i._calculateNodePropFrames = function(t, e) {
            var i = 0, n = t.length - 1;
            for (e.length = t[n].index + 1, i = 0; n > i; i++) this._dealKeyFrame(t[i]), this._calculateFrameValues(t[i], t[i + 1], e);
            0 == n && (e[0] = t[0].value, this._usedFrames && (this._usedFrames[t[0].index] = !0)), 
            this._dealKeyFrame(t[i]);
        }, i._dealKeyFrame = function(t) {
            t.label && "" != t.label && this.addLabel(t.label, t.index);
        }, i._calculateFrameValues = function(t, e, i) {
            var n, s = 0, r = t.index, o = e.index, a = t.value, h = e.value - t.value, l = o - r, u = this._usedFrames;
            if (o > this._count && (this._count = o), t.tween) for (n = w[t.tweenMethod], null == n && (n = w.linearNone), 
            s = r; o > s; s++) i[s] = n(s - r, a, h, l), u && (u[s] = !0); else for (s = r; o > s; s++) i[s] = a;
            u && (u[t.index] = !0, u[e.index] = !0), i[e.index] = e.value;
        }, e._sortIndexFun = null, e;
    }(Ze), si = function(t) {
        function e() {
            this._focus = !1, this._multiline = !1, this._editable = !0, this._restrictPattern = null, 
            this._type = "text", this._prompt = "", this._promptColor = "#A9A9A9", this._originColor = "#000000", 
            this._content = "", e.__super.call(this), this._maxChars = 1e5, this._width = 100, 
            this._height = 20, this.multiline = !1, this.overflow = "scroll", this.on("mousedown", this, this._onMouseDown), 
            this.on("undisplay", this, this._onUnDisplay);
        }
        s(e, "laya.display.Input", t);
        var o = e.prototype;
        return o.setSelection = function(t, e) {
            this.focus = !0, laya.display.Input.inputElement.selectionStart = t, laya.display.Input.inputElement.selectionEnd = e;
        }, o._onUnDisplay = function() {
            this.focus = !1;
        }, o._onMouseDown = function() {
            this.focus = !0;
        }, o._syncInputTransform = function() {
            var t = this.nativeInput, n = x.getTransformRelativeToWindow(this, this.padding[3], this.padding[0]), s = this._width - this.padding[1] - this.padding[3], r = this._height - this.padding[0] - this.padding[2];
            fe.isConchApp ? (t.setScale(n.scaleX, n.scaleY), t.setSize(s, r), t.setPos(n.x, n.y)) : (e.inputContainer.style.transform = e.inputContainer.style.webkitTransform = "scale(" + n.scaleX + "," + n.scaleY + ") rotate(" + i.stage.canvasDegree + "deg)", 
            t.style.width = s + "px", t.style.height = r + "px", e.inputContainer.style.left = n.x + "px", 
            e.inputContainer.style.top = n.y + "px");
        }, o.select = function() {
            this.nativeInput.select();
        }, o._setInputMethod = function() {
            e.input.parentElement && e.inputContainer.removeChild(e.input), e.area.parentElement && e.inputContainer.removeChild(e.area), 
            e.inputElement = this._multiline ? e.area : e.input, e.inputContainer.appendChild(e.inputElement), 
            Qe.RightToLeft && (e.inputElement.style.direction = "rtl");
        }, o._focusIn = function() {
            laya.display.Input.isInputting = !0;
            var t = this.nativeInput;
            this._focus = !0;
            var e = t.style;
            e.whiteSpace = this.wordWrap ? "pre-wrap" : "nowrap", this._setPromptColor(), t.readOnly = !this._editable, 
            fe.isConchApp && (t.setType(this._type), t.setForbidEdit(!this._editable)), t.maxLength = this._maxChars;
            this.padding;
            if (t.type = this._type, t.value = this._content, t.placeholder = this._prompt, 
            i.stage.off("keydown", this, this._onKeyDown), i.stage.on("keydown", this, this._onKeyDown), 
            i.stage.focus = this, this.event("focus"), I.onPC && t.focus(), !I.onMiniGame && !I.onBDMiniGame) {
                {
                    this._text;
                }
                this._text = null;
            }
            this.typeset(), t.setColor(this._originColor), t.setFontSize(this.fontSize), t.setFontFace(I.onIPhone ? Qe.fontFamilyMap[this.font] || this.font : this.font), 
            fe.isConchApp && t.setMultiAble && t.setMultiAble(this._multiline), e.lineHeight = this.leading + this.fontSize + "px", 
            e.fontStyle = this.italic ? "italic" : "normal", e.fontWeight = this.bold ? "bold" : "normal", 
            e.textAlign = this.align, e.padding = "0 0", this._syncInputTransform(), !fe.isConchApp && I.onPC && i.systemTimer.frameLoop(1, this, this._syncInputTransform);
        }, o._setPromptColor = function() {
            e.promptStyleDOM = I.getElementById("promptStyle"), e.promptStyleDOM || (e.promptStyleDOM = I.createElement("style"), 
            e.promptStyleDOM.setAttribute("id", "promptStyle"), I.document.head.appendChild(e.promptStyleDOM)), 
            e.promptStyleDOM.innerText = "input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {color:" + this._promptColor + "}input:-moz-placeholder, textarea:-moz-placeholder {color:" + this._promptColor + "}input::-moz-placeholder, textarea::-moz-placeholder {color:" + this._promptColor + "}input:-ms-input-placeholder, textarea:-ms-input-placeholder {color:" + this._promptColor + "}";
        }, o._focusOut = function() {
            laya.display.Input.isInputting = !1, this._focus = !1, this._text = null, this._content = this.nativeInput.value, 
            this._content ? (i.superSet(Qe, this, "text", this._content), i.superSet(Qe, this, "color", this._originColor)) : (i.superSet(Qe, this, "text", this._prompt), 
            i.superSet(Qe, this, "color", this._promptColor)), i.stage.off("keydown", this, this._onKeyDown), 
            i.stage.focus = null, this.event("blur"), this.event("change"), fe.isConchApp && this.nativeInput.blur(), 
            I.onPC && i.systemTimer.clear(this, this._syncInputTransform);
        }, o._onKeyDown = function(t) {
            13 === t.keyCode && (I.onMobile && !this._multiline && (this.focus = !1), this.event("enter"));
        }, o.changeText = function(e) {
            this._content = e, this._focus ? (this.nativeInput.value = e || "", this.event("change")) : t.prototype.changeText.call(this, e);
        }, r(0, o, "color", t.prototype._$get_color, function(t) {
            this._focus && this.nativeInput.setColor(t), i.superSet(Qe, this, "color", this._content ? t : this._promptColor), 
            this._originColor = t;
        }), r(0, o, "multiline", function() {
            return this._multiline;
        }, function(t) {
            this._multiline = t, this.valign = t ? "top" : "middle";
        }), r(0, o, "maxChars", function() {
            return this._maxChars;
        }, function(t) {
            0 >= t && (t = 1e5), this._maxChars = t;
        }), r(0, o, "text", function() {
            return this._focus ? this.nativeInput.value : this._content || "";
        }, function(t) {
            i.superSet(Qe, this, "color", this._originColor), t += "", this._focus ? (this.nativeInput.value = t || "", 
            this.event("change")) : (this._multiline || (t = t.replace(/\r?\n/g, "")), this._content = t, 
            t ? i.superSet(Qe, this, "text", t) : (i.superSet(Qe, this, "text", this._prompt), 
            i.superSet(Qe, this, "color", this.promptColor)));
        }), r(0, o, "nativeInput", function() {
            return this._multiline ? e.area : e.input;
        }), r(0, o, "focus", function() {
            return this._focus;
        }, function(t) {
            var i = this.nativeInput;
            this._focus !== t && (t ? (i.target ? i.target._focusOut() : this._setInputMethod(), 
            i.target = this, this._focusIn()) : (i.target = null, this._focusOut(), I.document.body.scrollTop = 0, 
            i.blur(), fe.isConchApp ? i.setPos(-1e4, -1e4) : e.inputContainer.contains(i) && e.inputContainer.removeChild(i)));
        }), r(0, o, "editable", function() {
            return this._editable;
        }, function(t) {
            this._editable = t, fe.isConchApp && e.input.setForbidEdit(!t);
        }), r(0, o, "bgColor", t.prototype._$get_bgColor, function(t) {
            i.superSet(Qe, this, "bgColor", t), fe.isConchApp && this.nativeInput.setBgColor(t);
        }), r(0, o, "restrict", function() {
            return this._restrictPattern ? this._restrictPattern.source : "";
        }, function(t) {
            t ? (t = "[^" + t + "]", t.indexOf("^^") > -1 && (t = t.replace("^^", "")), this._restrictPattern = new RegExp(t, "g")) : this._restrictPattern = null;
        }), r(0, o, "prompt", function() {
            return this._prompt;
        }, function(t) {
            !this._text && t && i.superSet(Qe, this, "color", this._promptColor), this.promptColor = this._promptColor, 
            this._text ? i.superSet(Qe, this, "text", this._text == this._prompt ? t : this._text) : i.superSet(Qe, this, "text", t), 
            this._prompt = Qe.langPacks && Qe.langPacks[t] ? Qe.langPacks[t] : t;
        }), r(0, o, "promptColor", function() {
            return this._promptColor;
        }, function(t) {
            this._promptColor = t, this._content || i.superSet(Qe, this, "color", t);
        }), r(0, o, "type", function() {
            return this._type;
        }, function(t) {
            this._getTextStyle().asPassword = "password" === t ? !0 : !1, this._type = t;
        }), e.__init__ = function() {
            if (e._createInputElement(), I.onMobile) {
                var t = !1;
                (I.onMiniGame || I.onBDMiniGame) && (t = !0), fe.canvas.addEventListener(e.IOS_IFRAME ? t ? "touchend" : "click" : "touchend", e._popupInputMethod);
            }
        }, e._popupInputMethod = function() {
            if (laya.display.Input.isInputting) {
                var t = laya.display.Input.inputElement;
                t.focus();
            }
        }, e._createInputElement = function() {
            e._initInput(e.area = I.createElement("textarea")), e._initInput(e.input = I.createElement("input")), 
            e.inputContainer = I.createElement("div"), e.inputContainer.style.position = "absolute", 
            e.inputContainer.style.zIndex = 1e5, I.container.appendChild(e.inputContainer), 
            e.inputContainer.setPos = function(t, i) {
                e.inputContainer.style.left = t + "px", e.inputContainer.style.top = i + "px";
            };
        }, e._initInput = function(t) {
            var i = t.style;
            i.cssText = "position:absolute;overflow:hidden;resize:none;transform-origin:0 0;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;", 
            i.resize = "none", i.backgroundColor = "transparent", i.border = "none", i.outline = "none", 
            i.zIndex = 1, t.addEventListener("input", e._processInputting), t.addEventListener("mousemove", e._stopEvent), 
            t.addEventListener("mousedown", e._stopEvent), t.addEventListener("touchmove", e._stopEvent), 
            t.setFontFace = function(e) {
                t.style.fontFamily = e;
            }, fe.isConchApp || (t.setColor = function(e) {
                t.style.color = e;
            }, t.setFontSize = function(e) {
                t.style.fontSize = e + "px";
            });
        }, e._processInputting = function() {
            var t = laya.display.Input.inputElement.target;
            if (t) {
                var e = laya.display.Input.inputElement.value;
                t._restrictPattern && (e = e.replace(/\u2006|\x27/g, ""), t._restrictPattern.test(e) && (e = e.replace(t._restrictPattern, ""), 
                laya.display.Input.inputElement.value = e)), t._text = e, t.event("input");
            }
        }, e._stopEvent = function(t) {
            "touchmove" == t.type && t.preventDefault(), t.stopPropagation && t.stopPropagation();
        }, e.TYPE_TEXT = "text", e.TYPE_PASSWORD = "password", e.TYPE_EMAIL = "email", e.TYPE_URL = "url", 
        e.TYPE_NUMBER = "number", e.TYPE_RANGE = "range", e.TYPE_DATE = "date", e.TYPE_MONTH = "month", 
        e.TYPE_WEEK = "week", e.TYPE_TIME = "time", e.TYPE_DATE_TIME = "datetime", e.TYPE_DATE_TIME_LOCAL = "datetime-local", 
        e.TYPE_SEARCH = "search", e.input = null, e.area = null, e.inputElement = null, 
        e.inputContainer = null, e.confirmButton = null, e.promptStyleDOM = null, e.inputHeight = 45, 
        e.isInputting = !1, e.stageMatrix = null, n(e, [ "IOS_IFRAME", function() {
            return this.IOS_IFRAME = I.onIOS && I.window.top != I.window.self;
        } ]), e;
    }(Qe), ri = (function(t) {
        function e() {
            this._frames = null, this._url = null, e.__super.call(this), this._setControlNode(this);
        }
        s(e, "laya.display.Animation", t);
        var n = e.prototype;
        return n.destroy = function(t) {
            void 0 === t && (t = !0), this.stop(), laya.display.Sprite.prototype.destroy.call(this, t), 
            this._frames = null, this._labels = null;
        }, n.play = function(e, i, n) {
            void 0 === e && (e = 0), void 0 === i && (i = !0), void 0 === n && (n = ""), n && this._setFramesFromCache(n, !0), 
            t.prototype.play.call(this, e, i, n);
        }, n._setFramesFromCache = function(t, i) {
            if (void 0 === i && (i = !1), this._url && (t = this._url + "#" + t), t && e.framesMap[t]) {
                var n = e.framesMap[t];
                return n instanceof Array ? (this._frames = e.framesMap[t], this._count = this._frames.length) : (n.nodeRoot && (e.framesMap[t] = ri.parseAnimationByData(n), 
                n = e.framesMap[t]), this._frames = n.frames, this._count = this._frames.length, 
                this._frameRateChanged || (this._interval = n.interval), this._labels = this._copyLabels(n.labels)), 
                !0;
            }
            return i && console.log("ani not found:", t), !1;
        }, n._copyLabels = function(t) {
            if (!t) return null;
            var e;
            e = {};
            var i;
            for (i in t) e[i] = x.copyArray([], t[i]);
            return e;
        }, n._frameLoop = function() {
            this._visible && this._style.alpha > .01 && this._frames && t.prototype._frameLoop.call(this);
        }, n._displayToIndex = function(t) {
            this._frames && (this.graphics = this._frames[t]);
        }, n.clear = function() {
            return t.prototype.clear.call(this), this.stop(), this.graphics = null, this._frames = null, 
            this._labels = null, this;
        }, n.loadImages = function(t, i) {
            return void 0 === i && (i = ""), this._url = "", this._setFramesFromCache(i) || (this.frames = e.framesMap[i] ? e.framesMap[i] : e.createFrames(t, i)), 
            this;
        }, n.loadAtlas = function(t, n, s) {
            function r(i) {
                t === i && (o.frames = e.framesMap[s] ? e.framesMap[s] : e.createFrames(t, s), n && n.run());
            }
            void 0 === s && (s = ""), this._url = "";
            var o = this;
            return o._setFramesFromCache(s) || (Ye.getAtlas(t) ? r(t) : i.loader.load(t, d.create(null, r, [ t ]), null, "atlas")), 
            this;
        }, n.loadAnimation = function(t, e, n) {
            this._url = t;
            var s = this;
            return this._actionName || (this._actionName = ""), s._setFramesFromCache(this._actionName) ? (s._setFramesFromCache(this._actionName, !0), 
            this.index = 0, e && e.run()) : !n || Ye.getAtlas(n) ? this._loadAnimationData(t, e, n) : i.loader.load(n, d.create(this, this._loadAnimationData, [ t, e, n ]), null, "atlas"), 
            this;
        }, n._loadAnimationData = function(t, n, s) {
            function r(i) {
                if (Ye.getRes(i)) {
                    if (t === i) {
                        var s;
                        if (e.framesMap[t + "#"]) a._setFramesFromCache(o._actionName, !0), o.index = 0, 
                        o._resumePlay(); else {
                            var r = ri.parseAnimationData(Ye.getRes(t));
                            if (!r) return;
                            var h, l = r.animationList, u = 0, c = l.length;
                            for (u = 0; c > u; u++) s = l[u], e.framesMap[t + "#" + s.name] = s, h || (h = s);
                            h && (e.framesMap[t + "#"] = h, a._setFramesFromCache(o._actionName, !0), o.index = 0), 
                            o._resumePlay();
                        }
                        n && n.run();
                    }
                    Ye.clearRes(t);
                }
            }
            var o = this;
            if (s && !Ye.getAtlas(s)) return console.warn("atlas load fail:" + s), void 0;
            var a = this;
            Ye.getRes(t) ? r(t) : i.loader.load(t, d.create(null, r, [ t ]), null, "json");
        }, r(0, n, "frames", function() {
            return this._frames;
        }, function(t) {
            this._frames = t, t && (this._count = t.length, this._actionName && this._setFramesFromCache(this._actionName, !0), 
            this.index = this._index);
        }), r(0, n, "autoPlay", null, function(t) {
            t ? this.play() : this.stop();
        }), r(0, n, "source", null, function(t) {
            t.indexOf(".ani") > -1 ? this.loadAnimation(t) : t.indexOf(".json") > -1 || t.indexOf("als") > -1 || t.indexOf("atlas") > -1 ? this.loadAtlas(t) : this.loadImages(t.split(","));
        }), r(0, n, "autoAnimation", null, function(t) {
            this.play(0, !0, t);
        }), e.createFrames = function(t, i) {
            var n;
            if ("string" == typeof t) {
                var s = Ye.getAtlas(t);
                if (s && s.length) {
                    n = [];
                    for (var r = 0, o = s.length; o > r; r++) {
                        var a = new f();
                        a.drawImage(Ye.getRes(s[r]), 0, 0), n.push(a);
                    }
                }
            } else if (t instanceof Array) for (n = [], r = 0, o = t.length; o > r; r++) a = new f(), 
            a.loadImage(t[r], 0, 0), n.push(a);
            return i && (e.framesMap[i] = n), n;
        }, e.clearCache = function(t) {
            var i, n = e.framesMap, s = t + "#";
            for (i in n) (i === t || 0 === i.indexOf(s)) && delete e.framesMap[i];
        }, e.framesMap = {}, e;
    }(Ze), function(t) {
        function e() {
            this._target = null, this._playEvent = null, this._initData = {}, this._aniKeys = null, 
            this._effectClass = null, e.__super.call(this);
        }
        s(e, "laya.display.EffectAnimation", t);
        var i = e.prototype;
        return i._onOtherBegin = function(t) {
            t !== this && this.stop();
        }, i._addEvent = function() {
            this._target && this._playEvent && (this._setControlNode(this._target), this._target.on(this._playEvent, this, this._onPlayAction));
        }, i._onPlayAction = function() {
            this.play(0, !1);
        }, i.play = function(t, e, i) {
            void 0 === t && (t = 0), void 0 === e && (e = !0), void 0 === i && (i = ""), this._target && (this._target.event("effectbegin", [ this ]), 
            this._recordInitData(), laya.display.AnimationBase.prototype.play.call(this, t, e, i));
        }, i._recordInitData = function() {
            if (this._aniKeys) {
                var t = 0, e = 0;
                e = this._aniKeys.length;
                var i;
                for (t = 0; e > t; t++) i = this._aniKeys[t], this._initData[i] = this._target[i];
            }
        }, i._displayToIndex = function(t) {
            if (this._animationData) {
                0 > t && (t = 0), t > this._count && (t = this._count);
                var e = this._animationData.nodes, i = 0, n = e.length;
                for (n = n > 1 ? 1 : n, i = 0; n > i; i++) this._displayNodeToFrame(e[i], t);
            }
        }, i._displayNodeToFrame = function(t, e) {
            if (this._target) {
                var i, n, s, r, o, a, h, l = this._target, u = t.frames, c = t.keys, _ = 0, d = c.length, f = t.secondFrames, p = 0;
                for (_ = 0; d > _; _++) i = c[_], n = u[i], p = f[i], -1 == p ? s = this._initData[i] : p > e ? (o = t.keyframes[i], 
                a = o[0], a.tween ? (r = w[a.tweenMethod], null == r && (r = w.linearNone), h = o[1], 
                s = r(e, this._initData[i], h.value - this._initData[i], h.index)) : s = this._initData[i]) : s = n.length > e ? n[e] : n[n.length - 1], 
                l[i] = s;
            }
        }, i._calculateKeyFrames = function(e) {
            t.prototype._calculateKeyFrames.call(this, e);
            var i, n, s = e.keyframes, r = (e.target, {});
            e.secondFrames = r;
            for (i in s) n = s[i], r[i] = n.length <= 1 ? -1 : n[1].index;
        }, r(0, i, "target", function() {
            return this._target;
        }, function(t) {
            this._target && this._target.off("effectbegin", this, this._onOtherBegin), this._target = t, 
            this._target && this._target.on("effectbegin", this, this._onOtherBegin), this._addEvent();
        }), r(0, i, "playEvent", null, function(t) {
            this._playEvent = t, t && this._addEvent();
        }), r(0, i, "effectData", null, function(t) {
            if (t) {
                var e = t.animations;
                if (e && e[0]) {
                    var i = e[0];
                    this._setUp({}, i), i.nodes && i.nodes[0] && (this._aniKeys = i.nodes[0].keys);
                }
            }
        }), r(0, i, "effectClass", null, function(t) {
            if (this._effectClass = Me.getClass(t), this._effectClass) {
                var e = this._effectClass.uiView;
                if (e) {
                    var i = e.animations;
                    if (i && i[0]) {
                        var n = i[0];
                        this._setUp({}, n), n.nodes && n.nodes[0] && (this._aniKeys = n.nodes[0].keys);
                    }
                }
            }
        }), e.EFFECT_BEGIN = "effectbegin", e;
    }(ni), function(t) {
        function e() {
            this.animationList = null, this.animationDic = null, this._nodeList = null, this._nodeDefaultProps = null, 
            this._gList = null, this._nodeIDAniDic = {}, this._rootNode = null, this._nodeGDic = null, 
            e.__super.call(this);
        }
        var i;
        s(e, "laya.utils.GraphicAnimation", t);
        var r = e.prototype;
        return r._parseNodeList = function(t) {
            this._nodeList || (this._nodeList = []), this._nodeDefaultProps[t.compId] = t.props, 
            t.compId && this._nodeList.push(t.compId);
            var e = t.child;
            if (e) {
                var i = 0, n = e.length;
                for (i = 0; n > i; i++) this._parseNodeList(e[i]);
            }
        }, r._calGraphicData = function(t) {
            if (this._setUp(null, t), this._createGraphicData(), this._nodeIDAniDic) {
                var e;
                for (e in this._nodeIDAniDic) this._nodeIDAniDic[e] = null;
            }
        }, r._createGraphicData = function() {
            var t = [], e = 0, i = this.count, n = this._usedFrames;
            n || (n = []);
            var s;
            for (e = 0; i > e; e++) (n[e] || !s) && (s = this._createFrameGraphic(e)), t.push(s);
            this._gList = t;
        }, r._createFrameGraphic = function(t) {
            var i = new f();
            return e._rootMatrix || (e._rootMatrix = new U()), this._updateNodeGraphic(this._rootNode, t, e._rootMatrix, i), 
            i;
        }, r._updateNodeGraphic = function(t, e, i, n, s) {
            void 0 === s && (s = 1);
            var r;
            r = this._nodeGDic[t.compId] = this._getNodeGraphicData(t.compId, e, this._nodeGDic[t.compId]), 
            r.resultTransform || (r.resultTransform = new U());
            var o;
            o = r.resultTransform, U.mul(r.transform, i, o);
            var a, h = r.alpha * s;
            if (!(.01 > h)) {
                r.skin && (a = this._getTextureByUrl(r.skin), a && (o._checkTransform() ? (n.drawTexture(a, 0, 0, r.width, r.height, o, h), 
                r.resultTransform = null) : n.drawTexture(a, o.tx, o.ty, r.width, r.height, null, h)));
                var l = t.child;
                if (l) {
                    var u = 0, c = 0;
                    for (c = l.length, u = 0; c > u; u++) this._updateNodeGraphic(l[u], e, o, n, h);
                }
            }
        }, r._updateNoChilds = function(t, e) {
            if (t.skin) {
                var i = this._getTextureByUrl(t.skin);
                if (i) {
                    var n = t.transform;
                    n._checkTransform();
                    var s = !1;
                    s = !n._bTransform, s ? e.drawTexture(i, n.tx, n.ty, t.width, t.height, null, t.alpha) : e.drawTexture(i, 0, 0, t.width, t.height, n.clone(), t.alpha);
                }
            }
        }, r._updateNodeGraphic2 = function(t, e, i) {
            var n;
            if (n = this._nodeGDic[t.compId] = this._getNodeGraphicData(t.compId, e, this._nodeGDic[t.compId]), 
            !t.child) return this._updateNoChilds(n, i), void 0;
            var s = n.transform;
            s._checkTransform();
            var r = !1;
            r = !s._bTransform;
            var o = !1;
            o = r && (0 != s.tx || 0 != s.ty);
            var a = !1;
            a = s._bTransform || 1 != n.alpha, a && i.save(), 1 != n.alpha && i.alpha(n.alpha), 
            r ? o && i.translate(s.tx, s.ty) : i.transform(s.clone());
            var h, l = t.child;
            if (n.skin && (h = this._getTextureByUrl(n.skin), h && i.drawImage(h, 0, 0, n.width, n.height)), 
            l) {
                var u = 0, c = 0;
                for (c = l.length, u = 0; c > u; u++) this._updateNodeGraphic2(l[u], e, i);
            }
            a ? i.restore() : r ? o && i.translate(-s.tx, -s.ty) : i.transform(s.clone().invert());
        }, r._calculateKeyFrames = function(e) {
            t.prototype._calculateKeyFrames.call(this, e), this._nodeIDAniDic[e.target] = e;
        }, r.getNodeDataByID = function(t) {
            return this._nodeIDAniDic[t];
        }, r._getParams = function(t, i, n, s) {
            var r = e._temParam;
            r.length = i.length;
            var o = 0, a = i.length;
            for (o = 0; a > o; o++) r[o] = this._getObjVar(t, i[o][0], n, i[o][1], s);
            return r;
        }, r._getObjVar = function(t, e, i, n, s) {
            if (t.hasOwnProperty(e)) {
                var r = t[e];
                return i >= r.length && (i = r.length - 1), t[e][i];
            }
            return s.hasOwnProperty(e) ? s[e] : n;
        }, r._getNodeGraphicData = function(t, n, s) {
            s || (s = new i()), s.transform ? s.transform.identity() : s.transform = new U();
            var r = this.getNodeDataByID(t);
            if (!r) return s;
            var o = r.frames, a = this._getParams(o, e._drawTextureCmd, n, this._nodeDefaultProps[t]), h = a[0], l = 0 / 0, u = 0 / 0, c = a[5], _ = a[6], d = a[13], f = a[14], p = a[7], g = a[8], m = a[9], v = a[11], y = a[12];
            l = a[3], u = a[4], (0 == l || 0 == u) && (h = null), -1 == l && (l = 0), -1 == u && (u = 0);
            var x;
            s.skin = h, s.width = l, s.height = u, h && (x = this._getTextureByUrl(h), x ? (l || (l = x.sourceWidth), 
            u || (u = x.sourceHeight)) : console.warn("lost skin:", h, ",you may load pics first")), 
            s.alpha = a[10];
            var w = s.transform;
            0 != d && (c = d * l), 0 != f && (_ = f * u), (0 != c || 0 != _) && w.translate(-c, -_);
            var T = null;
            if (m || 1 !== p || 1 !== g || v || y) {
                T = e._tempMt, T.identity(), T._bTransform = !0;
                var C = .0174532922222222 * (m - v), b = .0174532922222222 * (m + y), S = Math.cos(b), I = Math.sin(b), M = Math.sin(C), D = Math.cos(C);
                T.a = p * S, T.b = p * I, T.c = -g * M, T.d = g * D, T.tx = T.ty = 0;
            }
            return T && (w = U.mul(w, T, w)), w.translate(a[1], a[2]), s;
        }, r._getTextureByUrl = function(t) {
            return Ye.getRes(t);
        }, r.setAniData = function(t, i) {
            if (t.animations) {
                this._nodeDefaultProps = {}, this._nodeGDic = {}, this._nodeList && (this._nodeList.length = 0), 
                this._rootNode = t, this._parseNodeList(t);
                var n, s = {}, r = [], o = t.animations, a = 0, h = o.length;
                for (a = 0; h > a; a++) if (n = o[a], this._labels = null, (!i || i == n.name) && n) {
                    try {
                        this._calGraphicData(n);
                    } catch (l) {
                        console.warn("parse animation fail:" + n.name + ",empty animation created"), this._gList = [];
                    }
                    var u = {};
                    u.interval = 1e3 / n.frameRate, u.frames = this._gList, u.labels = this._labels, 
                    u.name = n.name, r.push(u), s[n.name] = u;
                }
                this.animationList = r, this.animationDic = s;
            }
            e._temParam.length = 0;
        }, r.parseByData = function(t) {
            var e, i;
            e = t.nodeRoot, i = t.aniO, delete t.nodeRoot, delete t.aniO, this._nodeDefaultProps = {}, 
            this._nodeGDic = {}, this._nodeList && (this._nodeList.length = 0), this._rootNode = e, 
            this._parseNodeList(e), this._labels = null;
            try {
                this._calGraphicData(i);
            } catch (n) {
                console.warn("parse animation fail:" + i.name + ",empty animation created"), this._gList = [];
            }
            var s = t;
            return s.interval = 1e3 / i.frameRate, s.frames = this._gList, s.labels = this._labels, 
            s.name = i.name, s;
        }, r.setUpAniData = function(t) {
            if (t.animations) {
                var e, i = {}, n = [], s = t.animations, r = 0, o = s.length;
                for (r = 0; o > r; r++) if (e = s[r]) {
                    var a = {};
                    a.name = e.name, a.aniO = e, a.nodeRoot = t, n.push(a), i[e.name] = a;
                }
                this.animationList = n, this.animationDic = i;
            }
        }, r._clear = function() {
            this.animationList = null, this.animationDic = null, this._gList = null, this._nodeGDic = null;
        }, e.parseAnimationByData = function(t) {
            e._I || (e._I = new e());
            var i;
            return i = e._I.parseByData(t), e._I._clear(), i;
        }, e.parseAnimationData = function(t) {
            e._I || (e._I = new e()), e._I.setUpAniData(t);
            var i;
            return i = {}, i.animationList = e._I.animationList, i.animationDic = e._I.animationDic, 
            e._I._clear(), i;
        }, e._temParam = [], e._I = null, e._rootMatrix = null, n(e, [ "_drawTextureCmd", function() {
            return this._drawTextureCmd = [ [ "skin", null ], [ "x", 0 ], [ "y", 0 ], [ "width", -1 ], [ "height", -1 ], [ "pivotX", 0 ], [ "pivotY", 0 ], [ "scaleX", 1 ], [ "scaleY", 1 ], [ "rotation", 0 ], [ "alpha", 1 ], [ "skewX", 0 ], [ "skewY", 0 ], [ "anchorX", 0 ], [ "anchorY", 0 ] ];
        }, "_tempMt", function() {
            return this._tempMt = new U();
        } ]), e.__init$ = function() {
            i = function() {
                function t() {
                    this.skin = null, this.transform = null, this.resultTransform = null, this.width = 0 / 0, 
                    this.height = 0 / 0, this.alpha = 1;
                }
                return s(t, ""), t;
            }();
        }, e;
    }(ni));
    i.__init([ _, ke, ri, ge, fe, ue, Y, we, Ne ]);
}(window, document, Laya), function(t, e, i) {
    var n = (i.un, i.uns, i.static, i.class), s = (i.getset, i.__newvec, function() {
        function t() {}
        return n(t, "LayaMain"), t;
    }());
    new s();
}(window, document, Laya);