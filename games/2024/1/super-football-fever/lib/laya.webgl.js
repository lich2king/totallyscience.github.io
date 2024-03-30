!function(t, e, i) {
    {
        var r = (i.un, i.uns, i.static), n = i.class, a = i.getset, s = (i.__newvec, laya.maths.Bezier), h = laya.resource.Bitmap, o = laya.utils.Browser, l = (laya.filters.ColorFilter, 
        laya.utils.ColorUtils), u = i.Config, c = laya.resource.Context, _ = (laya.display.cmd.DrawImageCmd, 
        laya.events.Event, laya.display.cmd.FillTextCmd, laya.filters.Filter), f = laya.utils.FontInfo, d = laya.resource.HTMLCanvas, p = (laya.utils.HTMLChar, 
        laya.resource.HTMLImage), m = (laya.utils.Handler, laya.net.Loader, laya.maths.Matrix), x = laya.maths.Point, v = laya.maths.Rectangle, T = laya.renders.Render, g = laya.renders.RenderSprite, b = laya.resource.Resource, y = (laya.display.cmd.RestoreCmd, 
        laya.display.cmd.RotateCmd, laya.utils.RunDriver), A = (laya.display.cmd.SaveCmd, 
        laya.display.cmd.ScaleCmd, laya.display.Sprite), E = (laya.display.SpriteConst, 
        laya.display.css.SpriteStyle, laya.display.Stage), R = laya.utils.Stat, S = laya.utils.StringKey, M = laya.system.System, w = (laya.display.Text, 
        laya.resource.Texture), C = (laya.display.cmd.TransformCmd, laya.display.cmd.TranslateCmd, 
        laya.utils.VectorGraphManager);
        laya.utils.WordText;
    }
    i.interface("laya.webgl.submit.ISubmit"), i.interface("laya.webgl.canvas.save.ISaveData");
    var I = function() {
        function t() {}
        n(t, "laya.webgl.canvas.save.SaveBase");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.canvas.save.ISaveData": !0
        }), e.isSaveMark = function() {
            return !1;
        }, e.restore = function(e) {
            this._dataObj[this._valueName] = this._value, t.POOL[t.POOL._length++] = this, this._newSubmit && (e._curSubmit = q.RENDERBASE);
        }, t._createArray = function() {
            var t = [];
            return t._length = 0, t;
        }, t._init = function() {
            var e = t._namemap = {};
            return e[1] = "ALPHA", e[2] = "fillStyle", e[8] = "font", e[256] = "lineWidth", 
            e[512] = "strokeStyle", e[8192] = "_mergeID", e[1024] = e[2048] = e[4096] = [], 
            e[16384] = "textBaseline", e[32768] = "textAlign", e[65536] = "_nBlendType", e[1048576] = "shader", 
            e[2097152] = "filters", e[8388608] = "_colorFiler", e;
        }, t.save = function(e, i, r, n) {
            if ((e._saveMark._saveuse & i) !== i) {
                e._saveMark._saveuse |= i;
                var a = t.POOL, s = a._length > 0 ? a[--a._length] : new t();
                s._value = r[s._valueName = t._namemap[i]], s._dataObj = r, s._newSubmit = n;
                var h = e._save;
                h[h._length++] = s;
            }
        }, t.POOL = laya.webgl.canvas.save.SaveBase._createArray(), t._namemap = t._init(), 
        t;
    }(), P = function() {
        function t(e, i) {
            this.size = [ 0, 0 ], this.alpha = 1, this.ALPHA = 1, this.subID = 0, this.ref = 1, 
            this._cacheID = 0, this.clipMatDir = [ 99999999, 0, 0, 99999999 ], this.clipMatPos = [ 0, 0 ], 
            this.clipOff = [ 0, 0 ], this.defines = new Ae(), this.mainID = e, this.subID = i, 
            this.textureHost = null, this.texture = null, this.color = null, this.colorAdd = null, 
            this.u_mmat2 = null, this._cacheID = e | i, this._inClassCache = t._cache[this._cacheID], 
            e > 0 && !this._inClassCache && (this._inClassCache = t._cache[this._cacheID] = [], 
            this._inClassCache._length = 0), this.clear();
        }
        n(t, "laya.webgl.shader.d2.value.Value2D");
        var e = t.prototype;
        return e.setValue = function() {}, e._ShaderWithCompile = function() {
            var t = Le.withCompile2D(0, this.mainID, this.defines.toNameDic(), this.mainID | this.defines._value, Ue.create, this._attribLocation);
            return t;
        }, e.upload = function() {
            var t = ce;
            ce.worldMatrix4 === ce.TEMPMAT4_ARRAY || this.defines.addInt(128), this.mmat = t.worldMatrix4, 
            ce.matWVP && (this.defines.addInt(2048), this.u_MvpMatrix = ce.matWVP.elements);
            var e = Le.sharders[this.mainID | this.defines._value] || this._ShaderWithCompile();
            e._shaderValueWidth !== t.width || e._shaderValueHeight !== t.height ? (this.size[0] = t.width, 
            this.size[1] = t.height, e._shaderValueWidth = t.width, e._shaderValueHeight = t.height, 
            e.upload(this, null)) : e.upload(this, e._params2dQuick2 || e._make2dQuick2());
        }, e.setFilters = function(t) {
            if (this.filters = t, t) for (var e, i = t.length, r = 0; i > r; r++) e = t[r], 
            e && (this.defines.add(e.type), e.action.setValue(this));
        }, e.clear = function() {
            this.defines._value = this.subID + (J.shaderHighPrecision ? 1024 : 0), this.clipOff[0] = 0;
        }, e.release = function() {
            --this.ref < 1 && (this._inClassCache && (this._inClassCache[this._inClassCache._length++] = this), 
            this.clear(), this.filters = null, this.ref = 1, this.clipOff[0] = 0);
        }, t._initone = function(e, i) {
            t._typeClass[e] = i, t._cache[e] = [], t._cache[e]._length = 0;
        }, t.__init__ = function() {
            t._initone(4, Te), t._initone(512, xe), t._initone(1, ve), t._initone(9, ve);
        }, t.create = function(e, i) {
            var r = t._cache[e | i];
            return r._length ? r[--r._length] : new t._typeClass[e | i](i);
        }, t._cache = [], t._typeClass = [], t.TEMPMAT4_ARRAY = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], 
        t;
    }(), B = function() {
        function t() {
            this.ib = null, this.vb = null;
            J.mainContext;
            this.ib = Be.create(35048), this.vb = De.create(8);
        }
        n(t, "laya.webgl.shader.d2.skinAnishader.SkinMeshBuffer");
        var e = t.prototype;
        return e.addSkinMesh = function(t) {
            t.getData2(this.vb, this.ib, this.vb._byteLength / 32);
        }, e.reset = function() {
            this.vb.clear(), this.ib.clear();
        }, t.getInstance = function() {
            return t.instance = t.instance || new t();
        }, t.instance = null, t;
    }(), D = function() {
        function t() {
            this._clipInfoID = -1, this._globalClipMatrix = new m(), this._clipRect = new v();
        }
        n(t, "laya.webgl.canvas.save.SaveClipRect");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.canvas.save.ISaveData": !0
        }), e.isSaveMark = function() {
            return !1;
        }, e.restore = function(e) {
            this._globalClipMatrix.copyTo(e._globalClipMatrix), this._clipRect.clone(e._clipRect), 
            e._clipInfoID = this._clipInfoID, t.POOL[t.POOL._length++] = this;
        }, t.save = function(e) {
            if (131072 != (131072 & e._saveMark._saveuse)) {
                e._saveMark._saveuse |= 131072;
                var i = t.POOL, r = i._length > 0 ? i[--i._length] : new t();
                e._globalClipMatrix.copyTo(r._globalClipMatrix), e._clipRect.clone(r._clipRect), 
                r._clipInfoID = e._clipInfoID;
                var n = e._save;
                n[n._length++] = r;
            }
        }, t.POOL = I._createArray(), t;
    }(), O = function() {
        function t() {}
        n(t, "laya.layagl.LayaGL");
        var e = t.prototype;
        return e.createCommandEncoder = function(t, e, i) {
            return void 0 === t && (t = 128), void 0 === e && (e = 64), void 0 === i && (i = !1), 
            new ae(this, t, e, i);
        }, e.beginCommandEncoding = function() {}, e.endCommandEncoding = function() {}, 
        e.matrix4x4Multiply = function() {}, e.evaluateClipDatasRealTime = function() {}, 
        t.getFrameCount = function() {
            return 0;
        }, t.syncBufferToRenderThread = function(t, e) {
            void 0 === e && (e = 0);
        }, t.createArrayBufferRef = function() {}, t.createArrayBufferRefs = function() {}, 
        t.EXECUTE_JS_THREAD_BUFFER = 0, t.EXECUTE_RENDER_THREAD_BUFFER = 1, t.EXECUTE_COPY_TO_RENDER = 2, 
        t.EXECUTE_COPY_TO_RENDER3D = 3, t.ARRAY_BUFFER_TYPE_DATA = 0, t.ARRAY_BUFFER_TYPE_CMD = 1, 
        t.ARRAY_BUFFER_REF_REFERENCE = 0, t.ARRAY_BUFFER_REF_COPY = 1, t.UPLOAD_SHADER_UNIFORM_TYPE_ID = 0, 
        t.UPLOAD_SHADER_UNIFORM_TYPE_DATA = 1, t.instance = null, t;
    }(), L = function() {
        function t(t, e, i) {
            this.atlasID = 0, this._width = 0, this._height = 0, this._texCount = 0, this._rowInfo = null, 
            this._cells = null, this._used = 0, void 0 === t && (t = 0), void 0 === e && (e = 0), 
            void 0 === i && (i = 0), this._cells = null, this._rowInfo = null, this.atlasID = i, 
            this._init(t, e);
        }
        n(t, "laya.webgl.text.AtlasGrid");
        var e = t.prototype;
        return e.addRect = function(t, e, i, r) {
            return this._get(e, i, r) ? (this._fill(r.x, r.y, e, i, t), this._texCount++, !0) : !1;
        }, e._release = function() {
            this._cells = null, this._rowInfo = null;
        }, e._init = function(t, e) {
            return this._width = t, this._height = e, this._release(), 0 == this._width ? !1 : (this._cells = new Uint8Array(this._width * this._height * 3), 
            this._rowInfo = new Uint8Array(this._height), this._used = 0, this._clear(), !0);
        }, e._get = function(t, e, i) {
            if (t > this._width || e > this._height) return !1;
            for (var r = -1, n = -1, a = this._width, s = this._height, h = this._cells, o = 0; s > o; o++) if (!(this._rowInfo[o] < t)) for (var l = 0; a > l; ) {
                var u = 3 * (o * a + l);
                if (0 != h[u] || h[u + 1] < t || h[u + 2] < e) l += h[u + 1]; else {
                    r = l, n = o;
                    for (var c = 0; t > c; c++) if (h[3 * c + u + 2] < e) {
                        r = -1;
                        break;
                    }
                    if (!(0 > r)) return i.x = r, i.y = n, !0;
                    l += h[u + 1];
                }
            }
            return !1;
        }, e._fill = function(t, e, i, r, n) {
            var a = this._width, s = this._height;
            this._check(a >= t + i && s >= e + r);
            for (var h = e; r + e > h; ++h) {
                this._check(this._rowInfo[h] >= i), this._rowInfo[h] -= i;
                for (var o = 0; i > o; o++) {
                    var l = 3 * (t + h * a + o);
                    this._check(0 == this._cells[l]), this._cells[l] = n, this._cells[l + 1] = i, this._cells[l + 2] = r;
                }
            }
            if (t > 0) for (h = 0; r > h; ++h) {
                var u = 0;
                for (o = t - 1; o >= 0 && 0 == this._cells[3 * ((e + h) * a + o)]; --o, ++u) ;
                for (o = u; o > 0; --o) this._cells[3 * ((e + h) * a + t - o) + 1] = o, this._check(o > 0);
            }
            if (e > 0) for (o = t; t + i > o; ++o) {
                for (u = 0, h = e - 1; h >= 0 && 0 == this._cells[3 * (o + h * a)]; --h, u++) ;
                for (h = u; h > 0; --h) this._cells[3 * (o + (e - h) * a) + 2] = h, this._check(h > 0);
            }
            this._used += i * r / (this._width * this._height);
        }, e._check = function(t) {
            0 == t && console.log("xtexMerger 错误啦");
        }, e._clear = function() {
            this._texCount = 0;
            for (var t = 0; t < this._height; t++) this._rowInfo[t] = this._width;
            for (var e = 0; e < this._height; e++) for (var i = 0; i < this._width; i++) {
                var r = 3 * (e * this._width + i);
                this._cells[r] = 0, this._cells[r + 1] = this._width - i, this._cells[r + 2] = this._width - e;
            }
        }, t;
    }(), F = function() {
        function t(t, e, i) {
            this._stride = 0, this.vertNum = 0, this.indexNum = 0, this._applied = !1, this._vb = null, 
            this._ib = null, this._vao = null, this._attribInfo = null, this._quadNum = 0, this.canReuse = !1, 
            this._stride = t, this._vb = new De(t, 35048), e ? this._vb._resizeBuffer(e, !1) : u.webGL2D_MeshAllocMaxMem && this._vb._resizeBuffer(65536 * t, !1), 
            this._ib = new Be(), i && this._ib._resizeBuffer(i, !1);
        }
        n(t, "laya.webgl.utils.Mesh2D");
        var e = t.prototype;
        return e.cloneWithNewVB = function() {
            var e = new t(this._stride, 0, 0);
            return e._ib = this._ib, e._quadNum = this._quadNum, e._attribInfo = this._attribInfo, 
            e;
        }, e.cloneWithNewVBIB = function() {
            var e = new t(this._stride, 0, 0);
            return e._attribInfo = this._attribInfo, e;
        }, e.getVBW = function() {
            return this._vb.setNeedUpload(), this._vb;
        }, e.getVBR = function() {
            return this._vb;
        }, e.getIBR = function() {
            return this._ib;
        }, e.getIBW = function() {
            return this._ib.setNeedUpload(), this._ib;
        }, e.createQuadIB = function(t) {
            this._quadNum = t, this._ib._resizeBuffer(6 * t * 2, !1), this._ib.byteLength = this._ib.bufferLength;
            for (var e = this._ib.getUint16Array(), i = 0, r = 0, n = 0; t > n; n++) e[i++] = r, 
            e[i++] = r + 2, e[i++] = r + 1, e[i++] = r, e[i++] = r + 3, e[i++] = r + 2, r += 4;
            this._ib.setNeedUpload();
        }, e.setAttributes = function(t) {
            if (this._attribInfo = t, this._attribInfo.length % 3 != 0) throw "Mesh2D setAttributes error!";
        }, e.configVAO = function(t) {
            if (!this._applied) {
                this._applied = !0, this._vao || (this._vao = new Re()), this._vao.bind(), this._vb._bindForVAO(), 
                this._ib.setNeedUpload(), this._ib._bind_uploadForVAO();
                for (var e = this._attribInfo.length / 3, i = 0, r = 0; e > r; r++) {
                    var n = this._attribInfo[i + 1], a = this._attribInfo[i], s = this._attribInfo[i + 2];
                    t.enableVertexAttribArray(r), t.vertexAttribPointer(r, n, a, !1, this._stride, s), 
                    i += 3;
                }
                this._vao.unBind();
            }
        }, e.useMesh = function(t) {
            this._applied || this.configVAO(t), this._vao.bind(), this._vb.bind(), this._ib._bind_upload() || this._ib.bind(), 
            this._vb._bind_upload() || this._vb.bind();
        }, e.getEleNum = function() {
            return this._ib.getBuffer().byteLength / 2;
        }, e.releaseMesh = function() {}, e.destroy = function() {}, e.clearVB = function() {
            this._vb.clear();
        }, t._gvaoid = 0, t;
    }(), N = function() {
        function t(t) {
            this._color = null, this.setValue(t);
        }
        n(t, "laya.webgl.canvas.DrawStyle");
        var e = t.prototype;
        return e.setValue = function(t) {
            this._color = t ? t instanceof laya.utils.ColorUtils ? t : l.create(t) : l.create("#000000");
        }, e.reset = function() {
            this._color = l.create("#000000");
        }, e.toInt = function() {
            return this._color.numColor;
        }, e.equal = function(t) {
            return "string" == typeof t ? this._color.strColor === t : t instanceof laya.utils.ColorUtils ? this._color.numColor === t.numColor : !1;
        }, e.toColorStr = function() {
            return this._color.strColor;
        }, t.create = function(e) {
            if (e) {
                var i = e instanceof laya.utils.ColorUtils ? e : l.create(e);
                return i._drawStyle || (i._drawStyle = new t(e));
            }
            return t.DEFAULT;
        }, r(t, [ "DEFAULT", function() {
            return this.DEFAULT = new t("#000000");
        } ]), t;
    }(), U = function() {
        function t() {
            this.fontSizeInfo = {}, this.charRender = null, this.mapFont = {}, this.fontID = 0, 
            this.mapColor = [], this.colorID = 0, this.fontScaleX = 1, this.fontScaleY = 1, 
            this._curStrPos = 0, this.bmpData32 = null, this.lastFont = null, this.fontSizeW = 0, 
            this.fontSizeH = 0, this.fontSizeOffX = 0, this.fontSizeOffY = 0, this.renderPerChar = !0, 
            this.textureMem = 0, this.fontStr = null, this.textAtlases = [], this.isoTextures = [], 
            this.tmpAtlasPos = new x();
            var e = !1, r = i.MiniAdpter;
            r && r.systemInfo && r.systemInfo.system && (e = "ios 10.1.1" === r.systemInfo.system.toLowerCase()), 
            o.onMiniGame && !e && (t.isWan1Wan = !0), o.onLimixiu && (t.isWan1Wan = !0), this.charRender = T.isConchApp ? new Se() : new Ee(t.atlasWidth, t.atlasWidth, t.scaleFontWithCtx, !t.isWan1Wan, !1), 
            t.textRenderInst = this, i.textRender = this, t.atlasWidth2 = t.atlasWidth * t.atlasWidth;
        }
        n(t, "laya.webgl.text.TextRender");
        var e = t.prototype;
        return e.setFont = function(e) {
            if (this.lastFont != e) {
                this.lastFont = e;
                var i = this.getFontSizeInfo(e._family), r = i >> 24, n = i >> 16 & 255, a = i >> 8 & 255, s = 255 & i, h = e._size / t.standardFontSize;
                this.fontSizeOffX = Math.ceil(r * h), this.fontSizeOffY = Math.ceil(n * h), this.fontSizeW = Math.ceil(a * h), 
                this.fontSizeH = Math.ceil(s * h), this.fontStr = e._font.replace("italic", "");
            }
        }, e.getNextChar = function(t) {
            var e = t.length, i = this._curStrPos;
            if (i >= e) return null;
            for (var r = i, n = 0; e > r; r++) {
                var a = t.charCodeAt(r);
                if (a >>> 11 == 27) {
                    if (1 == n) break;
                    n = 1, r++;
                } else if (65038 === a || 65039 === a) ; else if (8205 == a) n = 2; else if (0 == n) n = 1; else if (1 == n) break;
            }
            return this._curStrPos = r, t.substring(i, r);
        }, e.filltext = function(t, e, i, r, n, a, s, h, o, l) {
            if (void 0 === l && (l = 0), !(e.length <= 0)) {
                var u = f.Parse(n), _ = 0;
                switch (o) {
                  case "center":
                    _ = c.ENUM_TEXTALIGN_CENTER;
                    break;

                  case "right":
                    _ = c.ENUM_TEXTALIGN_RIGHT;
                }
                this._fast_filltext(t, e, null, i, r, u, a, s, h, _, l);
            }
        }, e.fillWords = function(t, e, i, r, n, a, s, h) {
            if (e && !(e.length <= 0)) {
                var o = f.Parse(n);
                this._fast_filltext(t, null, e, i, r, o, a, s, h, 0, 0);
            }
        }, e._fast_filltext = function(e, i, r, n, a, s, h, o, l, u, _) {
            if (void 0 === _ && (_ = 0), !(i && i.length < 1 || r && r.length < 1)) {
                if (0 > l && (l = 0), this.setFont(s), this.fontScaleX = this.fontScaleY = 1, !T.isConchApp && t.scaleFontWithCtx) {
                    var f = 1, d = 1;
                    if (T.isConchApp ? (f = e._curMat.getScaleX(), d = e._curMat.getScaleY()) : (f = e.getMatScaleX(), 
                    d = e.getMatScaleY()), 1e-4 > f || .1 > d) return;
                    f > 1 && (this.fontScaleX = f), d > 1 && (this.fontScaleY = d);
                }
                s._italic && (e._italicDeg = 13);
                var p = i, m = !r && i instanceof laya.utils.WordText, x = i, v = !!r, g = m ? p.pageChars : [], b = 0;
                switch (m ? (x = p._text, b = p.width, 0 > b && (b = p.width = this.charRender.getWidth(this.fontStr, x))) : b = x ? this.charRender.getWidth(this.fontStr, x) : 0, 
                u) {
                  case c.ENUM_TEXTALIGN_CENTER:
                    n -= b / 2;
                    break;

                  case c.ENUM_TEXTALIGN_RIGHT:
                    n -= b;
                }
                p && g && this.hasFreedText(g) && (g = p.pageChars = []);
                var y = null, A = (m || t.forceWholeRender, this.renderPerChar = !m || t.forceSplitRender || v || m && p.splitRender);
                if (!g || g.length < 1) if (A) {
                    var E = 0, R = 0;
                    this._curStrPos = 0;
                    for (var S; ;) {
                        if (v) {
                            var M = r[this._curStrPos++];
                            M ? (S = M.char, E = M.x, R = M.y) : S = null;
                        } else S = this.getNextChar(x);
                        if (!S) break;
                        if (y = this.getCharRenderInfo(S, s, h, o, l, !1), !y) break;
                        if (y.isSpace) ; else {
                            var w = g[y.tex.id];
                            w || (g[y.tex.id] = w = []), T.isConchApp ? w.push({
                                ri: y,
                                x: E,
                                y: R,
                                w: y.bmpWidth / this.fontScaleX,
                                h: y.bmpHeight / this.fontScaleY
                            }) : w.push({
                                ri: y,
                                x: E + 1 / this.fontScaleX,
                                y: R,
                                w: (y.bmpWidth - 2) / this.fontScaleX,
                                h: (y.bmpHeight - 1) / this.fontScaleY
                            }), E += y.width;
                        }
                    }
                } else {
                    var C = t.noAtlas || b * this.fontScaleX > t.atlasWidth;
                    y = this.getCharRenderInfo(x, s, h, o, l, C), g[0] = T.isConchApp ? [ {
                        ri: y,
                        x: 0,
                        y: 0,
                        w: y.bmpWidth / this.fontScaleX,
                        h: y.bmpHeight / this.fontScaleY
                    } ] : [ {
                        ri: y,
                        x: 1 / this.fontScaleX,
                        y: 0 / this.fontScaleY,
                        w: (y.bmpWidth - 2) / this.fontScaleX,
                        h: (y.bmpHeight - 1) / this.fontScaleY
                    } ];
                }
                this._drawResortedWords(e, n, a, g), e._italicDeg = 0;
            }
        }, e._drawResortedWords = function(t, e, i, r) {
            var n = t._charSubmitCache && t._charSubmitCache._enbale, a = t._curMat;
            for (var s in r) {
                var h = r[s], o = h.length;
                if (!(0 >= o)) for (var l = 0; o > l; l++) {
                    var u = h[l], c = u.ri;
                    c.isSpace || (c.touch(), t.drawTexAlign = !0, T.isConchApp ? t._drawTextureM(c.tex.texture, e + u.x - c.orix, i + u.y - c.oriy, u.w, u.h, null, 1, c.uv) : t._inner_drawTexture(c.tex.texture, c.tex.texture.bitmap.id, e + u.x - c.orix, i + u.y - c.oriy, u.w, u.h, a, c.uv, 1, n), 
                    t.touches && t.touches.push(c));
                }
            }
        }, e.hasFreedText = function(t) {
            for (var e in t) for (var i = t[e], r = 0, n = i.length; n > r; r++) {
                var a = i[r].ri;
                if (a.deleted || a.tex.__destroyed) return !0;
            }
            return !1;
        }, e.getCharRenderInfo = function(e, i, r, n, a, s) {
            void 0 === s && (s = !1);
            var h = this.mapFont[i._family];
            void 0 == h && (this.mapFont[i._family] = h = this.fontID++);
            var o = e + "_" + h + "_" + i._size + "_" + r;
            a > 0 && (o += "_" + n + a), i._bold && (o += "P"), (1 != this.fontScaleX || 1 != this.fontScaleY) && (o += (20 * this.fontScaleX | 0) + "_" + (20 * this.fontScaleY | 0));
            var l = 0, u = this.textAtlases.length, c = null, _ = null;
            if (!s) for (l = 0; u > l; l++) if (_ = this.textAtlases[l], c = _.charMaps[o]) return c.touch(), 
            c;
            c = new j(), this.charRender.scale(this.fontScaleX, this.fontScaleY), c.char = e, 
            c.height = i._size;
            var f = i._size / 3 | 0, d = null, p = Math.ceil(this.charRender.getWidth(this.fontStr, e) * this.fontScaleX);
            if (p > this.charRender.canvasWidth && (this.charRender.canvasWidth = Math.min(2048, p + 2 * f)), 
            s) {
                d = this.charRender.getCharBmp(e, this.fontStr, a, r, n, c, f, f, f, f, null);
                var m = Pe.getTextTexture(d.width, d.height);
                m.addChar(d, 0, 0, c.uv), c.tex = m, c.orix = f, c.oriy = f, m.ri = c, this.isoTextures.push(m);
            } else {
                var x = e.length, v = 1 * a, T = Math.ceil((this.fontSizeW + 2 * v) * this.fontScaleX), g = Math.ceil((this.fontSizeH + 2 * v) * this.fontScaleY);
                t.imgdtRect[0] = (f - this.fontSizeOffX - v) * this.fontScaleX | 0, t.imgdtRect[1] = (f - this.fontSizeOffY - v) * this.fontScaleY | 0, 
                this.renderPerChar || 1 == x ? (t.imgdtRect[2] = Math.max(p, T), t.imgdtRect[3] = Math.max(p, g)) : (t.imgdtRect[2] = -1, 
                t.imgdtRect[3] = g), d = this.charRender.getCharBmp(e, this.fontStr, a, r, n, c, f, f, f, f, t.imgdtRect), 
                _ = this.addBmpData(d, c), t.isWan1Wan ? (c.orix = f, c.oriy = f) : (c.orix = this.fontSizeOffX + v, 
                c.oriy = this.fontSizeOffY + v), _.charMaps[o] = c;
            }
            return c;
        }, e.addBmpData = function(t, e) {
            for (var i = t.width, r = t.height, n = this.textAtlases.length, a = null, s = !1, h = 0; n > h && (a = this.textAtlases[h], 
            !(s = a.getAEmpty(i, r, this.tmpAtlasPos))); h++) ;
            if (!s) {
                if (a = new de(), this.textAtlases.push(a), s = a.getAEmpty(i, r, this.tmpAtlasPos), 
                !s) throw "err1";
                this.cleanAtlases();
            }
            return s && (a.texture.addChar(t, this.tmpAtlasPos.x, this.tmpAtlasPos.y, e.uv), 
            e.tex = a.texture), a;
        }, e.GC = function() {
            for (var e = 0, i = this.textAtlases.length, r = 0, n = t.destroyAtlasDt, a = 0, s = 0, h = -1, o = 0, l = null, u = null; i > e; e++) {
                if (u = this.textAtlases[e], l = u.texture) {
                    a += l.curUsedCovRate, s += l.curUsedCovRateAtlas;
                    var c = u.usedRate - l.curUsedCovRateAtlas;
                    c > o && (o = c, h = e);
                }
                r = R.loopCount - u.texture.lastTouchTm, r > n && (t.showLog && console.log(u.texture.id), 
                u.destroy(), this.textAtlases[e] = this.textAtlases[i - 1], i--, e--);
            }
            for (this.textAtlases.length = i, i = this.isoTextures.length, e = 0; i > e; e++) l = this.isoTextures[e], 
            r = R.loopCount - l.lastTouchTm, r > t.destroyUnusedTextureDt && (l.ri.deleted = !0, 
            l.ri.tex = null, l.destroy(), this.isoTextures[e] = this.isoTextures[i - 1], i--, 
            e--);
            var _ = this.textAtlases.length > 1 && this.textAtlases.length - s >= 2;
            (t.atlasWidth * t.atlasWidth * 4 * this.textAtlases.length > t.cleanMem || _ || t.simClean) && (t.simClean = !1, 
            t.showLog && console.log("清理使用率低的贴图。总使用率:", s, ":", this.textAtlases.length, "最差贴图:" + h), 
            h >= 0 && (u = this.textAtlases[h], u.destroy(), this.textAtlases[h] = this.textAtlases[this.textAtlases.length - 1], 
            this.textAtlases.length = this.textAtlases.length - 1)), Pe.clean();
        }, e.cleanAtlases = function() {}, e.getCharBmp = function() {}, e.checkBmpLine = function(t, e, i, r) {
            this.bmpData32.buffer != t.data.buffer && (this.bmpData32 = new Uint32Array(t.data.buffer));
            for (var n = t.width * e + i, a = i; r > a; a++) if (0 != this.bmpData32[n++]) return !0;
            return !1;
        }, e.updateBbx = function(t, e, i) {
            void 0 === i && (i = !1);
            var r = t.width, n = t.height, a = 0, s = e[1], h = 0, o = s;
            if (this.checkBmpLine(t, s, 0, r)) for (;;) {
                if (o = (s + h) / 2 | 0, o + 1 >= s) {
                    e[1] = o;
                    break;
                }
                this.checkBmpLine(t, o, 0, r) ? s = o : h = o;
            }
            if (e[3] > n) e[3] = n; else if (o = s = e[3], h = n, this.checkBmpLine(t, s, 0, r)) for (;;) {
                if (o = (s + h) / 2 | 0, s >= o - 1) {
                    e[3] = o;
                    break;
                }
                this.checkBmpLine(t, o, 0, r) ? s = o : h = o;
            }
            if (!i) {
                var l = e[0], u = r * e[1];
                for (o = e[1]; o < e[3]; o++) {
                    for (a = 0; l > a; a++) if (0 != this.bmpData32[u + a]) {
                        l = a;
                        break;
                    }
                    u += r;
                }
                e[0] = l;
                var c = e[2];
                for (u = r * e[1], o = e[1]; o < e[3]; o++) {
                    for (a = c; r > a; a++) if (0 != this.bmpData32[u + a]) {
                        c = a;
                        break;
                    }
                    u += r;
                }
                e[2] = c;
            }
        }, e.getFontSizeInfo = function(e) {
            var i = this.fontSizeInfo[e];
            if (void 0 != i) return i;
            var r = "bold " + t.standardFontSize + "px " + e;
            if (t.isWan1Wan) {
                this.fontSizeW = 1.5 * this.charRender.getWidth(r, "有"), this.fontSizeH = 1.5 * t.standardFontSize;
                var n = this.fontSizeW << 8 | this.fontSizeH;
                return this.fontSizeInfo[e] = n, n;
            }
            t.pixelBBX[0] = t.standardFontSize / 2, t.pixelBBX[1] = t.standardFontSize / 2, 
            t.pixelBBX[2] = t.standardFontSize, t.pixelBBX[3] = t.standardFontSize;
            var a = 16, s = 16, h = 16, o = 16;
            this.charRender.scale(1, 1), t.tmpRI.height = t.standardFontSize;
            var l = this.charRender.getCharBmp("g", r, 0, "red", null, t.tmpRI, a, s, h, o);
            T.isConchApp && (l.data = new Uint8ClampedArray(l.data)), this.bmpData32 = new Uint32Array(l.data.buffer), 
            this.updateBbx(l, t.pixelBBX, !1), l = this.charRender.getCharBmp("有", r, 0, "red", null, t.tmpRI, s, s, h, o), 
            T.isConchApp && (l.data = new Uint8ClampedArray(l.data)), this.bmpData32 = new Uint32Array(l.data.buffer), 
            t.pixelBBX[2] < a + t.tmpRI.width && (t.pixelBBX[2] = a + t.tmpRI.width), this.updateBbx(l, t.pixelBBX, !1), 
            T.isConchApp && (a = 0, s = 0);
            var u = Math.max(a - t.pixelBBX[0], 0), c = Math.max(s - t.pixelBBX[1], 0), _ = t.pixelBBX[2] - t.pixelBBX[0], f = t.pixelBBX[3] - t.pixelBBX[1], d = u << 24 | c << 16 | _ << 8 | f;
            return this.fontSizeInfo[e] = d, d;
        }, e.printDbgInfo = function() {
            console.log("图集个数:" + this.textAtlases.length + ",每个图集大小:" + t.atlasWidth + "x" + t.atlasWidth, " 用canvas:", t.isWan1Wan), 
            console.log("图集占用空间:" + t.atlasWidth * t.atlasWidth * 4 / 1024 / 1024 * this.textAtlases.length + "M"), 
            console.log("缓存用到的字体:");
            for (var e in this.mapFont) {
                var i = this.getFontSizeInfo(e), r = i >> 24, n = i >> 16 & 255, a = i >> 8 & 255, s = 255 & i;
                console.log("    " + e, " off:", r, n, " size:", a, s);
            }
            var h = 0;
            console.log("缓存数据:");
            var o = 0, l = 0;
            this.textAtlases.forEach(function(e) {
                var i = e.texture.id, r = R.loopCount - e.texture.lastTouchTm, n = r > 0 ? "" + r + "帧以前" : "当前帧";
                o += e.texture.curUsedCovRate, l += e.texture.curUsedCovRateAtlas, console.log("--图集(id:" + i + ",当前使用率:" + (1e3 * e.texture.curUsedCovRate | 0) + "‰", "当前图集使用率:", (100 * e.texture.curUsedCovRateAtlas | 0) + "%", "图集使用率:", 100 * e.usedRate | 0, "%, 使用于:" + n + ")--:");
                for (var a in e.charMaps) {
                    var s = e.charMaps[a];
                    console.log("     off:", s.orix, s.oriy, " bmp宽高:", s.bmpWidth, s.bmpHeight, "无效:", s.deleted, "touchdt:", R.loopCount - s.touchTick, "位置:", s.uv[0] * t.atlasWidth | 0, s.uv[1] * t.atlasWidth | 0, "字符:", s.char, "key:", a), 
                    h++;
                }
            }), console.log("独立贴图文字(" + this.isoTextures.length + "个):"), this.isoTextures.forEach(function(t) {
                console.log("    size:", t._texW, t._texH, "touch间隔:", R.loopCount - t.lastTouchTm, "char:", t.ri.char);
            }), console.log("总缓存:", h, "总使用率:", o, "总当前图集使用率:", l);
        }, e.showAtlas = function(e, r, n, a, s, h) {
            if (!this.textAtlases[e]) return console.log("没有这个图集"), null;
            var o = new A(), l = this.textAtlases[e].texture, u = {
                width: t.atlasWidth,
                height: t.atlasWidth,
                sourceWidth: t.atlasWidth,
                sourceHeight: t.atlasWidth,
                offsetX: 0,
                offsetY: 0,
                getIsReady: function() {
                    return !0;
                },
                _addReference: function() {},
                _removeReference: function() {},
                _getSource: function() {
                    return l._getSource();
                },
                bitmap: {
                    id: l.id
                },
                _uv: w.DEF_UV
            };
            return o.size = function(t, e) {
                return this.width = t, this.height = e, o.graphics.clear(), o.graphics.drawRect(0, 0, o.width, o.height, r), 
                o.graphics.drawTexture(u, 0, 0, o.width, o.height), this;
            }, o.graphics.drawRect(0, 0, s, h, r), o.graphics.drawTexture(u, 0, 0, s, h), o.pos(n, a), 
            i.stage.addChild(o), o;
        }, e.filltext_native = function(t, e, i, r, n, a, s, h, o, l, u) {
            if (void 0 === u && (u = 0), !(e && e.length <= 0 || i && i.length < 1)) {
                var _ = f.Parse(a), d = 0;
                switch (l) {
                  case "center":
                    d = c.ENUM_TEXTALIGN_CENTER;
                    break;

                  case "right":
                    d = c.ENUM_TEXTALIGN_RIGHT;
                }
                return this._fast_filltext(t, e, i, r, n, _, s, h, o, d, u);
            }
        }, t.useOldCharBook = !1, t.atlasWidth = 2048, t.noAtlas = !1, t.forceSplitRender = !1, 
        t.forceWholeRender = !1, t.scaleFontWithCtx = !0, t.standardFontSize = 32, t.destroyAtlasDt = 10, 
        t.checkCleanTextureDt = 2e3, t.destroyUnusedTextureDt = 3e3, t.cleanMem = 104857600, 
        t.isWan1Wan = !1, t.showLog = !1, t.debugUV = !1, t.atlasWidth2 = 4194304, t.textRenderInst = null, 
        t.simClean = !1, r(t, [ "tmpRI", function() {
            return this.tmpRI = new j();
        }, "pixelBBX", function() {
            return this.pixelBBX = [ 0, 0, 0, 0 ];
        }, "imgdtRect", function() {
            return this.imgdtRect = [ 0, 0, 0, 0 ];
        } ]), t;
    }(), V = (function() {
        function t() {}
        return n(t, "laya.webgl.utils.MatirxArray"), t.ArrayMul = function(e, i, r) {
            if (!e) return t.copyArray(i, r), void 0;
            if (!i) return t.copyArray(e, r), void 0;
            for (var n = 0 / 0, a = 0 / 0, s = 0 / 0, h = 0 / 0, o = 0; 4 > o; o++) n = e[o], 
            a = e[o + 4], s = e[o + 8], h = e[o + 12], r[o] = n * i[0] + a * i[1] + s * i[2] + h * i[3], 
            r[o + 4] = n * i[4] + a * i[5] + s * i[6] + h * i[7], r[o + 8] = n * i[8] + a * i[9] + s * i[10] + h * i[11], 
            r[o + 12] = n * i[12] + a * i[13] + s * i[14] + h * i[15];
        }, t.copyArray = function(t, e) {
            if (t && e) for (var i = 0; i < t.length; i++) e[i] = t[i];
        }, t;
    }(), function() {
        function t() {}
        return n(t, "laya.webgl.VertexArrayObject"), t;
    }()(function() {
        function e(e) {
            t.console && t.console.error && t.console.error(e);
        }
        function i(e) {
            t.console && t.console.log && t.console.log(e);
        }
        function r(t, i) {
            a[t] = !0, void 0 !== i && e(i);
        }
        function n(t) {
            var e = t.getError;
            t.getError = function() {
                var i;
                do {
                    i = e.apply(t), i != t.NO_ERROR && (a[i] = !0);
                } while (i != t.NO_ERROR);
                for (var i in a) if (a[i]) return delete a[i], parseInt(i);
                return t.NO_ERROR;
            };
        }
        var a = {}, s = function o(t) {
            var e = t.gl;
            this.ext = t, this.isAlive = !0, this.hasBeenBound = !1, this.elementArrayBuffer = null, 
            this.attribs = new Array(t.maxVertexAttribs);
            for (var i = 0; i < this.attribs.length; i++) {
                var r = new o.VertexAttrib(e);
                this.attribs[i] = r;
            }
            this.maxAttrib = 0;
        };
        s.VertexAttrib = function(t) {
            this.enabled = !1, this.buffer = null, this.size = 4, this.type = t.FLOAT, this.normalized = !1, 
            this.stride = 16, this.offset = 0, this.cached = "", this.recache();
        }, s.VertexAttrib.prototype.recache = function() {
            this.cached = [ this.size, this.type, this.normalized, this.stride, this.offset ].join(":");
        };
        var h = function(t) {
            var e = this;
            this.gl = t, n(t);
            var r = this.original = {
                getParameter: t.getParameter,
                enableVertexAttribArray: t.enableVertexAttribArray,
                disableVertexAttribArray: t.disableVertexAttribArray,
                bindBuffer: t.bindBuffer,
                getVertexAttrib: t.getVertexAttrib,
                vertexAttribPointer: t.vertexAttribPointer
            };
            t.getParameter = function(t) {
                return t == e.VERTEX_ARRAY_BINDING_OES ? e.currentVertexArrayObject == e.defaultVertexArrayObject ? null : e.currentVertexArrayObject : r.getParameter.apply(this, arguments);
            }, t.enableVertexAttribArray = function(t) {
                var i = e.currentVertexArrayObject;
                i.maxAttrib = Math.max(i.maxAttrib, t);
                var n = i.attribs[t];
                return n.enabled = !0, r.enableVertexAttribArray.apply(this, arguments);
            }, t.disableVertexAttribArray = function(t) {
                var i = e.currentVertexArrayObject;
                i.maxAttrib = Math.max(i.maxAttrib, t);
                var n = i.attribs[t];
                return n.enabled = !1, r.disableVertexAttribArray.apply(this, arguments);
            }, t.bindBuffer = function(i, n) {
                switch (i) {
                  case t.ARRAY_BUFFER:
                    e.currentArrayBuffer = n;
                    break;

                  case t.ELEMENT_ARRAY_BUFFER:
                    e.currentVertexArrayObject.elementArrayBuffer = n;
                }
                return r.bindBuffer.apply(this, arguments);
            }, t.getVertexAttrib = function(i, n) {
                var a = e.currentVertexArrayObject, s = a.attribs[i];
                switch (n) {
                  case t.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:
                    return s.buffer;

                  case t.VERTEX_ATTRIB_ARRAY_ENABLED:
                    return s.enabled;

                  case t.VERTEX_ATTRIB_ARRAY_SIZE:
                    return s.size;

                  case t.VERTEX_ATTRIB_ARRAY_STRIDE:
                    return s.stride;

                  case t.VERTEX_ATTRIB_ARRAY_TYPE:
                    return s.type;

                  case t.VERTEX_ATTRIB_ARRAY_NORMALIZED:
                    return s.normalized;

                  default:
                    return r.getVertexAttrib.apply(this, arguments);
                }
            }, t.vertexAttribPointer = function(t, i, n, a, s, h) {
                var o = e.currentVertexArrayObject;
                o.maxAttrib = Math.max(o.maxAttrib, t);
                var l = o.attribs[t];
                return l.buffer = e.currentArrayBuffer, l.size = i, l.type = n, l.normalized = a, 
                l.stride = s, l.offset = h, l.recache(), r.vertexAttribPointer.apply(this, arguments);
            }, t.instrumentExtension && t.instrumentExtension(this, "OES_vertex_array_object"), 
            t.canvas && t.canvas.addEventListener && t.canvas.addEventListener("webglcontextrestored", function() {
                i("OESVertexArrayObject emulation library context restored"), e.reset_();
            }, !0), this.reset_();
        };
        h.prototype.VERTEX_ARRAY_BINDING_OES = 34229, h.prototype.reset_ = function() {
            var t = void 0 !== this.vertexArrayObjects;
            if (t) for (var e = 0; e < this.vertexArrayObjects.length; ++e) this.vertexArrayObjects.isAlive = !1;
            var i = this.gl;
            this.maxVertexAttribs = i.getParameter(i.MAX_VERTEX_ATTRIBS), this.defaultVertexArrayObject = new s(this), 
            this.currentVertexArrayObject = null, this.currentArrayBuffer = null, this.vertexArrayObjects = [ this.defaultVertexArrayObject ], 
            this.bindVertexArrayOES(null);
        }, h.prototype.createVertexArrayOES = function() {
            var t = new s(this);
            return this.vertexArrayObjects.push(t), t;
        }, h.prototype.deleteVertexArrayOES = function(t) {
            t.isAlive = !1, this.vertexArrayObjects.splice(this.vertexArrayObjects.indexOf(t), 1), 
            this.currentVertexArrayObject == t && this.bindVertexArrayOES(null);
        }, h.prototype.isVertexArrayOES = function(t) {
            return t && t instanceof s && t.hasBeenBound && t.ext == this ? !0 : !1;
        }, h.prototype.bindVertexArrayOES = function(t) {
            var e = this.gl;
            if (t && !t.isAlive) return r(e.INVALID_OPERATION, "bindVertexArrayOES: attempt to bind deleted arrayObject"), 
            void 0;
            var i = this.original, n = this.currentVertexArrayObject;
            this.currentVertexArrayObject = t || this.defaultVertexArrayObject, this.currentVertexArrayObject.hasBeenBound = !0;
            var a = this.currentVertexArrayObject;
            if (n != a) {
                n && a.elementArrayBuffer == n.elementArrayBuffer || i.bindBuffer.call(e, e.ELEMENT_ARRAY_BUFFER, a.elementArrayBuffer);
                for (var s = this.currentArrayBuffer, h = Math.max(n ? n.maxAttrib : 0, a.maxAttrib), o = 0; h >= o; o++) {
                    var l = a.attribs[o], u = n ? n.attribs[o] : null;
                    if (n && l.enabled == u.enabled || (l.enabled ? i.enableVertexAttribArray.call(e, o) : i.disableVertexAttribArray.call(e, o)), 
                    l.enabled) {
                        var c = !1;
                        n && l.buffer == u.buffer || (s != l.buffer && (i.bindBuffer.call(e, e.ARRAY_BUFFER, l.buffer), 
                        s = l.buffer), c = !0), (c || l.cached != u.cached) && i.vertexAttribPointer.call(e, o, l.size, l.type, l.normalized, l.stride, l.offset);
                    }
                }
                this.currentArrayBuffer != s && i.bindBuffer.call(e, e.ARRAY_BUFFER, this.currentArrayBuffer);
            }
        }, t._setupVertexArrayObject = function(t) {
            var e = t.getSupportedExtensions;
            t.getSupportedExtensions = function() {
                var t = e.call(this) || [];
                return t.indexOf("OES_vertex_array_object") < 0 && t.push("OES_vertex_array_object"), 
                t;
            };
            var i = t.getExtension;
            t.getExtension = function(t) {
                var e = i.call(this, t);
                return e ? e : "OES_vertex_array_object" !== t ? null : (this.__OESVertexArrayObject || (console.log("Setup OES_vertex_array_object polyfill"), 
                this.__OESVertexArrayObject = new h(this)), this.__OESVertexArrayObject);
            };
        }, t._forceSetupVertexArrayObject = function(t) {
            var e = t.getSupportedExtensions;
            t.getSupportedExtensions = function() {
                var t = e.call(this) || [];
                return t.indexOf("OES_vertex_array_object") < 0 && t.push("OES_vertex_array_object"), 
                t;
            };
            var i = t.getExtension;
            t.getExtension = function(t) {
                if ("OES_vertex_array_object" === t) return this.__OESVertexArrayObject || (console.log("Setup OES_vertex_array_object polyfill"), 
                this.__OESVertexArrayObject = new h(this)), this.__OESVertexArrayObject;
                var e = i.call(this, t);
                return e ? e : null;
            };
        };
    }()), function() {
        function t() {}
        n(t, "laya.webgl.text.ArabicReshaper");
        var e = t.prototype;
        return e.characterMapContains = function(e) {
            for (var i = 0; i < t.charsMap.length; ++i) if (t.charsMap[i][0] === e) return !0;
            return !1;
        }, e.getCharRep = function(e) {
            for (var i = 0; i < t.charsMap.length; ++i) if (t.charsMap[i][0] === e) return t.charsMap[i];
            return !1;
        }, e.getCombCharRep = function(e, i) {
            for (var r = 0; r < t.combCharsMap.length; ++r) if (t.combCharsMap[r][0][0] === e && t.combCharsMap[r][0][1] === i) return t.combCharsMap[r];
            return !1;
        }, e.isTransparent = function(e) {
            for (var i = 0; i < t.transChars.length; ++i) if (t.transChars[i] === e) return !0;
            return !1;
        }, e.getOriginalCharsFromCode = function(e) {
            var i = 0;
            for (i = 0; i < t.charsMap.length; ++i) if (t.charsMap[i].indexOf(e) > -1) return String.fromCharCode(t.charsMap[i][0]);
            for (i = 0; i < t.combCharsMap.length; ++i) if (t.combCharsMap[i].indexOf(e) > -1) return String.fromCharCode(t.combCharsMap[i][0][0]) + String.fromCharCode(t.combCharsMap[i][0][1]);
            return String.fromCharCode(e);
        }, e.convertArabic = function(t) {
            for (var e, i, r = "", n = 0; n < t.length; ++n) {
                var a = t.charCodeAt(n);
                if (this.characterMapContains(a)) {
                    for (var s = null, h = null, o = n - 1, l = n + 1; o >= 0 && this.isTransparent(t.charCodeAt(o)); --o) ;
                    for (s = o >= 0 ? t.charCodeAt(o) : null, e = s ? this.getCharRep(s) : !1, (!e || null == e[2] && null == e[3]) && (s = null); l < t.length && this.isTransparent(t.charCodeAt(l)); ++l) ;
                    if (h = l < t.length ? t.charCodeAt(l) : null, e = h ? this.getCharRep(h) : !1, 
                    (!e || null == e[3] && null == e[4]) && (h = null), 1604 === a && null != h && (1570 === h || 1571 === h || 1573 === h || 1575 === h)) {
                        i = this.getCombCharRep(a, h), r += null != s ? String.fromCharCode(i[4]) : String.fromCharCode(i[1]), 
                        ++n;
                        continue;
                    }
                    if (e = this.getCharRep(a), null != s && null != h && null != e[3]) {
                        r += String.fromCharCode(e[3]);
                        continue;
                    }
                    if (null != s && null != e[4]) {
                        r += String.fromCharCode(e[4]);
                        continue;
                    }
                    if (null != h && null != e[2]) {
                        r += String.fromCharCode(e[2]);
                        continue;
                    }
                    r += String.fromCharCode(e[1]);
                } else r += String.fromCharCode(a);
            }
            return r;
        }, e.convertArabicBack = function(t) {
            var e = "", i = 0, r = 0;
            for (r = 0; r < t.length; ++r) i = t.charCodeAt(r), e += this.getOriginalCharsFromCode(i);
            return e;
        }, r(t, [ "charsMap", function() {
            return this.charsMap = [ [ 1569, 65152, null, null, null ], [ 1570, 65153, null, null, 65154 ], [ 1571, 65155, null, null, 65156 ], [ 1572, 65157, null, null, 65158 ], [ 1573, 65159, null, null, 65160 ], [ 1574, 65161, 65163, 65164, 65162 ], [ 1575, 65165, null, null, 65166 ], [ 1576, 65167, 65169, 65170, 65168 ], [ 1577, 65171, null, null, 65172 ], [ 1578, 65173, 65175, 65176, 65174 ], [ 1579, 65177, 65179, 65180, 65178 ], [ 1580, 65181, 65183, 65184, 65182 ], [ 1581, 65185, 65187, 65188, 65186 ], [ 1582, 65189, 65191, 65192, 65190 ], [ 1583, 65193, null, null, 65194 ], [ 1584, 65195, null, null, 65196 ], [ 1585, 65197, null, null, 65198 ], [ 1586, 65199, null, null, 65200 ], [ 1587, 65201, 65203, 65204, 65202 ], [ 1588, 65205, 65207, 65208, 65206 ], [ 1589, 65209, 65211, 65212, 65210 ], [ 1590, 65213, 65215, 65216, 65214 ], [ 1591, 65217, 65219, 65220, 65218 ], [ 1592, 65221, 65223, 65224, 65222 ], [ 1593, 65225, 65227, 65228, 65226 ], [ 1594, 65229, 65231, 65232, 65230 ], [ 1600, 1600, 1600, 1600, 1600 ], [ 1601, 65233, 65235, 65236, 65234 ], [ 1602, 65237, 65239, 65240, 65238 ], [ 1603, 65241, 65243, 65244, 65242 ], [ 1604, 65245, 65247, 65248, 65246 ], [ 1605, 65249, 65251, 65252, 65250 ], [ 1606, 65253, 65255, 65256, 65254 ], [ 1607, 65257, 65259, 65260, 65258 ], [ 1608, 65261, null, null, 65262 ], [ 1609, 65263, null, null, 65264 ], [ 1610, 65265, 65267, 65268, 65266 ], [ 1662, 64342, 64344, 64345, 64343 ], [ 1740, 64508, 64510, 64511, 64509 ], [ 1670, 64378, 64380, 64381, 64379 ], [ 1705, 64398, 64400, 64401, 64399 ], [ 1711, 64402, 64404, 64405, 64403 ], [ 1688, 64394, null, null, 64395 ] ];
        }, "combCharsMap", function() {
            return this.combCharsMap = [ [ [ 1604, 1570 ], 65269, null, null, 65270 ], [ [ 1604, 1571 ], 65271, null, null, 65272 ], [ [ 1604, 1573 ], 65273, null, null, 65274 ], [ [ 1604, 1575 ], 65275, null, null, 65276 ] ];
        }, "transChars", function() {
            return this.transChars = [ 1552, 1554, 1555, 1556, 1557, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1648, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1759, 1760, 1761, 1762, 1763, 1764, 1767, 1768, 1770, 1771, 1772, 1773 ];
        } ]), t;
    }(), function() {
        function t() {
            this._saveuse = 0;
        }
        n(t, "laya.webgl.canvas.save.SaveMark");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.canvas.save.ISaveData": !0
        }), e.isSaveMark = function() {
            return !0;
        }, e.restore = function(e) {
            e._saveMark = this._preSaveMark, t.POOL[t.POOL._length++] = this;
        }, t.Create = function(e) {
            var i = t.POOL, r = i._length > 0 ? i[--i._length] : new t();
            return r._saveuse = 0, r._preSaveMark = e._saveMark, e._saveMark = r, r;
        }, t.POOL = I._createArray(), t;
    }()), k = function() {
        function t(t, e, i) {
            this._value = 0, this._name2int = t, this._int2name = e, this._int2nameMap = i;
        }
        n(t, "laya.webgl.shader.ShaderDefinesBase");
        var e = t.prototype;
        return e.add = function(t) {
            return "string" == typeof t && (t = this._name2int[t]), this._value |= t, this._value;
        }, e.addInt = function(t) {
            return this._value |= t, this._value;
        }, e.remove = function(t) {
            return "string" == typeof t && (t = this._name2int[t]), this._value &= ~t, this._value;
        }, e.isDefine = function(t) {
            return (this._value & t) === t;
        }, e.getValue = function() {
            return this._value;
        }, e.setValue = function(t) {
            this._value = t;
        }, e.toNameDic = function() {
            var e = this._int2nameMap[this._value];
            return e ? e : t._toText(this._value, this._int2name, this._int2nameMap);
        }, t._reg = function(t, e, i, r) {
            i[t] = e, r[e] = t;
        }, t._toText = function(t, e, i) {
            var r = i[t];
            if (r) return r;
            for (var n = {}, a = 1, s = 0; 32 > s && (a = 1 << s, !(a > t)); s++) if (t & a) {
                var h = e[a];
                h && (n[h] = "");
            }
            return i[t] = n, n;
        }, t._toInt = function(t, e) {
            for (var i = t.split("."), r = 0, n = 0, a = i.length; a > n; n++) {
                var s = e[i[n]];
                if (!s) throw new Error("Defines to int err:" + t + "/" + i[n]);
                r |= s;
            }
            return r;
        }, t;
    }(), W = function() {
        function t(t) {
            this.childs = [], this.text = "", this.parent = null, this.name = null, this.noCompile = !1, 
            this.includefiles = null, this.condition = null, this.conditionType = 0, this.useFuns = "", 
            this.z = 0, this.src = null, this.includefiles = t;
        }
        n(t, "laya.webgl.utils.ShaderNode");
        var e = t.prototype;
        return e.setParent = function(t) {
            t.childs.push(this), this.z = t.z + 1, this.parent = t;
        }, e.setCondition = function(t, e) {
            t && (this.conditionType = e, t = t.replace(/(\s*$)/g, ""), this.condition = function() {
                return this[t];
            }, this.condition.__condition = t);
        }, e.toscript = function(e, i) {
            return this._toscript(e, i, ++t.__id);
        }, e._toscript = function(t, e, i) {
            if (this.childs.length < 1 && !this.text) return e;
            e.length;
            if (this.condition) {
                var r = !!this.condition.call(t);
                if (2 === this.conditionType && (r = !r), !r) return e;
            }
            if (this.text && e.push(this.text), this.childs.length > 0 && this.childs.forEach(function(r) {
                r._toscript(t, e, i);
            }), this.includefiles.length > 0 && this.useFuns.length > 0) for (var n, a = 0, s = this.includefiles.length; s > a; a++) this.includefiles[a].curUseID != i && (n = this.includefiles[a].file.getFunsScript(this.useFuns), 
            n.length > 0 && (this.includefiles[a].curUseID = i, e[0] = n + e[0]));
            return e;
        }, t.__id = 1, t;
    }(), X = (function() {
        function t() {}
        return n(t, "laya.webgl.shader.ShaderValue"), t;
    }(), function() {
        function t() {}
        n(t, "laya.webgl.resource.ICharRender");
        var e = t.prototype;
        return e.getWidth = function() {
            return 0;
        }, e.scale = function() {}, e.getCharBmp = function() {
            return null;
        }, a(0, e, "canvasWidth", function() {
            return 0;
        }, function() {}), t;
    }()), G = function() {
        function t() {}
        return n(t, "laya.layagl.LayaGLRunner"), t.uploadShaderUniforms = function(t, e, i, r) {
            for (var n = i._data, a = e.getArrayData(), s = 0, h = 0, o = a.length; o > h; h++) {
                var l = a[h];
                if (r || -1 !== l.textureID) {
                    var u = n[l.dataOffset];
                    null != u && (s += l.fun.call(l.caller, l, u));
                }
            }
            return s;
        }, t.uploadCustomUniform = function(t, e, i, r) {
            var n = 0, a = e[i];
            return a && null != r && (n += a.fun.call(a.caller, a, r)), n;
        }, t.uploadShaderUniformsForNative = function(t, e, i) {
            var r = 0;
            i._runtimeCopyValues.length > 0 && (r = 1);
            var n = i._data;
            return t.uploadShaderUniforms(e, n, r);
        }, t;
    }(), H = function() {
        function t() {
            this._nativeVertexArrayObject = null, this._bindedIndexBuffer = null, this._nativeVertexArrayObject = O.instance.createVertexArray();
        }
        n(t, "laya.webgl.BufferStateBase");
        var e = t.prototype;
        return e.bind = function() {
            t._curBindedBufferState !== this && (O.instance.bindVertexArray(this._nativeVertexArrayObject), 
            t._curBindedBufferState = this);
        }, e.unBind = function() {
            if (t._curBindedBufferState !== this) throw "BufferState: must call bind() function first.";
            O.instance.bindVertexArray(null), t._curBindedBufferState = null;
        }, e.bindForNative = function() {
            O.instance.bindVertexArray(this._nativeVertexArrayObject), t._curBindedBufferState = this;
        }, e.unBindForNative = function() {
            O.instance.bindVertexArray(null), t._curBindedBufferState = null;
        }, e.destroy = function() {
            O.instance.deleteVertexArray(this._nativeVertexArrayObject);
        }, t._curBindedBufferState = null, t;
    }(), z = function() {
        function t(t, e, i, r) {
            function n(t) {
                t = t.replace(a._clearCR, "");
                var e = [], i = new W(e);
                return a._compileToTree(i, t.split("\n"), 0, e, r), i;
            }
            this._clearCR = new RegExp("\r", "g");
            var a = this, s = o.now();
            this._VS = n(t), this._PS = n(e), this._nameMap = i, o.now() - s > 2 && console.log("ShaderCompile use time:" + (o.now() - s) + "  size:" + t.length + "/" + e.length);
        }
        n(t, "laya.webgl.utils.ShaderCompile");
        var e = t.prototype;
        return e._compileToTree = function(e, i, r, n, a) {
            var s, h, o, l, u, c, _, f = 0, d = 0, p = 0, m = 0;
            for (d = r; d < i.length; d++) if (o = i[d], !(o.length < 1) && (f = o.indexOf("//"), 
            0 !== f)) {
                if (f >= 0 && (o = o.substr(0, f)), s = _ || new W(n), _ = null, s.text = o, s.noCompile = !0, 
                (f = o.indexOf("#")) >= 0) {
                    for (l = "#", m = f + 1, p = o.length; p > m; m++) {
                        var x = o.charAt(m);
                        if (" " === x || "\t" === x || "?" === x) break;
                        l += x;
                    }
                    switch (s.name = l, l) {
                      case "#ifdef":
                      case "#ifndef":
                        if (s.src = o, s.noCompile = null != o.match(/[!&|()=<>]/), s.noCompile ? console.log("function():Boolean{return " + o.substr(f + s.name.length) + "}") : (c = o.replace(/^\s*/, "").split(/\s+/), 
                        s.setCondition(c[1], "#ifdef" === l ? 1 : 2), s.text = "//" + s.text), s.setParent(e), 
                        e = s, a) for (c = o.substr(m).split(t._splitToWordExps3), m = 0; m < c.length; m++) o = c[m], 
                        o.length && (a[o] = !0);
                        continue;

                      case "#if":
                        if (s.src = o, s.noCompile = !0, s.setParent(e), e = s, a) for (c = o.substr(m).split(t._splitToWordExps3), 
                        m = 0; m < c.length; m++) o = c[m], o.length && "defined" != o && (a[o] = !0);
                        continue;

                      case "#else":
                        s.src = o, e = e.parent, h = e.childs[e.childs.length - 1], s.noCompile = h.noCompile, 
                        s.noCompile || (s.condition = h.condition, s.conditionType = 1 == h.conditionType ? 2 : 1, 
                        s.text = "//" + s.text + " " + h.text + " " + s.conditionType), s.setParent(e), 
                        e = s;
                        continue;

                      case "#endif":
                        e = e.parent, h = e.childs[e.childs.length - 1], s.noCompile = h.noCompile, s.noCompile || (s.text = "//" + s.text), 
                        s.setParent(e);
                        continue;

                      case "#include":
                        c = t.splitToWords(o, null);
                        var v = t.includes[c[1]];
                        if (!v) throw "ShaderCompile error no this include file:" + c[1];
                        if ((f = c[0].indexOf("?")) < 0) {
                            s.setParent(e), o = v.getWith("with" == c[2] ? c[3] : null), this._compileToTree(s, o.split("\n"), 0, n, a), 
                            s.text = "";
                            continue;
                        }
                        s.setCondition(c[0].substr(f + 1), 1), s.text = v.getWith("with" == c[2] ? c[3] : null);
                        break;

                      case "#import":
                        c = t.splitToWords(o, null), u = c[1], n.push({
                            node: s,
                            file: t.includes[u],
                            ofs: s.text.length
                        });
                        continue;
                    }
                } else {
                    if (h = e.childs[e.childs.length - 1], h && !h.name) {
                        n.length > 0 && t.splitToWords(o, h), _ = s, h.text += "\n" + o;
                        continue;
                    }
                    n.length > 0 && t.splitToWords(o, s);
                }
                s.setParent(e);
            }
        }, e.createShader = function(t, e, i, r) {
            var n = {}, a = "";
            if (t) for (var s in t) a += "#define " + s + "\n", n[s] = !0;
            var h = this._VS.toscript(n, []), o = this._PS.toscript(n, []);
            return (i || Le.create)(a + h.join("\n"), a + o.join("\n"), e, this._nameMap, r);
        }, t._parseOne = function(e, i, r, n, a, s) {
            var h = {
                type: t.shaderParamsMap[r[n + 1]],
                name: r[n + 2],
                size: isNaN(parseInt(r[n + 3])) ? 1 : parseInt(r[n + 3])
            };
            return s && ("attribute" == a ? e.push(h) : i.push(h)), ":" == r[n + 3] && (h.type = r[n + 4], 
            n += 2), n += 2;
        }, t.addInclude = function(e, i) {
            if (!i || 0 === i.length) throw new Error("add shader include file err:" + e);
            if (t.includes[e]) throw new Error("add shader include file err, has add:" + e);
            t.includes[e] = new se(i);
        }, t.preGetParams = function(e, i) {
            var r = [ e, i ], n = {}, a = [], s = [], h = {}, o = [];
            n.attributes = a, n.uniforms = s, n.defines = h;
            for (var l = 0, u = 0, c = 0; 2 > c; c++) {
                r[c] = r[c].replace(t._removeAnnotation, "");
                var _, f = r[c].match(t._reg);
                for (l = 0, u = f.length; u > l; l++) {
                    var d = f[l];
                    if ("attribute" == d || "uniform" == d) l = t._parseOne(a, s, f, l, d, !0); else {
                        if ("#define" == d) {
                            d = f[++l], o[d] = 1;
                            continue;
                        }
                        if ("#ifdef" == d) {
                            _ = f[++l];
                            {
                                h[_] = h[_] || [];
                            }
                            for (l++; u > l; l++) if (d = f[l], "attribute" == d || "uniform" == d) l = t._parseOne(a, s, f, l, d, o[_]); else if ("#else" == d) for (l++; u > l; l++) if (d = f[l], 
                            "attribute" == d || "uniform" == d) l = t._parseOne(a, s, f, l, d, !o[_]); else if ("#endif" == d) break;
                        }
                    }
                }
            }
            return n;
        }, t.splitToWords = function(t, e) {
            for (var i, r, n = [], a = -1, s = 0, h = t.length; h > s; s++) if (i = t.charAt(s), 
            " \t=+-*/&%!<>()'\",;".indexOf(i) >= 0) {
                if (a >= 0 && s - a > 1 && (r = t.substr(a, s - a), n.push(r)), '"' == i || "'" == i) {
                    var o = t.indexOf(i, s + 1);
                    if (0 > o) throw "Sharder err:" + t;
                    n.push(t.substr(s + 1, o - s - 1)), s = o, a = -1;
                    continue;
                }
                "(" == i && e && n.length > 0 && (r = n[n.length - 1] + ";", "vec4;main;".indexOf(r) < 0 && (e.useFuns += r)), 
                a = -1;
            } else 0 > a && (a = s);
            return h > a && h - a > 1 && (r = t.substr(a, h - a), n.push(r)), n;
        }, t.IFDEF_NO = 0, t.IFDEF_YES = 1, t.IFDEF_ELSE = 2, t.IFDEF_PARENT = 3, t._removeAnnotation = new RegExp("(/\\*([^*]|[\\r\\\n]|(\\*+([^*/]|[\\r\\n])))*\\*+/)|(//.*)", "g"), 
        t._reg = new RegExp("(\".*\")|('.*')|([#\\w\\*-\\.+/()=<>{}\\\\]+)|([,;:\\\\])", "g"), 
        t._splitToWordExps = new RegExp("[(\".*\")]+|[('.*')]+|([ \\t=\\+\\-*/&%!<>!%(),;])", "g"), 
        t.includes = {}, r(t, [ "shaderParamsMap", function() {
            return this.shaderParamsMap = {
                float: 5126,
                int: 5124,
                bool: 35670,
                vec2: 35664,
                vec3: 35665,
                vec4: 35666,
                ivec2: 35667,
                ivec3: 35668,
                ivec4: 35669,
                bvec2: 35671,
                bvec3: 35672,
                bvec4: 35673,
                mat2: 35674,
                mat3: 35675,
                mat4: 35676,
                sampler2D: 35678,
                samplerCube: 35680
            };
        }, "_splitToWordExps3", function() {
            return this._splitToWordExps3 = new RegExp("[ \\t=\\+\\-*/&%!<>!%(),;\\|]", "g");
        } ]), t;
    }(), Y = function() {
        function e() {}
        n(e, "laya.webgl.WebGLContext");
        var i = e.prototype;
        return i.getContextAttributes = function() {
            return null;
        }, i.isContextLost = function() {}, i.getSupportedExtensions = function() {
            return null;
        }, i.getExtension = function() {
            return null;
        }, i.activeTexture = function() {}, i.attachShader = function() {}, i.bindAttribLocation = function() {}, 
        i.bindBuffer = function() {}, i.bindFramebuffer = function() {}, i.bindRenderbuffer = function() {}, 
        i.bindTexture = function() {}, i.useTexture = function() {}, i.blendColor = function() {}, 
        i.blendEquation = function() {}, i.blendEquationSeparate = function() {}, i.blendFunc = function() {}, 
        i.blendFuncSeparate = function() {}, i.bufferData = function() {}, i.bufferSubData = function() {}, 
        i.checkFramebufferStatus = function() {
            return null;
        }, i.clear = function() {}, i.clearColor = function() {}, i.clearDepth = function() {}, 
        i.clearStencil = function() {}, i.colorMask = function() {}, i.compileShader = function() {}, 
        i.copyTexImage2D = function() {}, i.copyTexSubImage2D = function() {}, i.createBuffer = function() {}, 
        i.createFramebuffer = function() {}, i.createProgram = function() {}, i.createRenderbuffer = function() {}, 
        i.createShader = function() {}, i.createTexture = function() {
            return null;
        }, i.cullFace = function() {}, i.deleteBuffer = function() {}, i.deleteFramebuffer = function() {}, 
        i.deleteProgram = function() {}, i.deleteRenderbuffer = function() {}, i.deleteShader = function() {}, 
        i.deleteTexture = function() {}, i.depthFunc = function() {}, i.depthMask = function() {}, 
        i.depthRange = function() {}, i.detachShader = function() {}, i.disable = function() {}, 
        i.disableVertexAttribArray = function() {}, i.drawArrays = function() {}, i.drawElements = function() {}, 
        i.enable = function() {}, i.enableVertexAttribArray = function() {}, i.finish = function() {}, 
        i.flush = function() {}, i.framebufferRenderbuffer = function() {}, i.framebufferTexture2D = function() {}, 
        i.frontFace = function() {
            return null;
        }, i.generateMipmap = function() {
            return null;
        }, i.getActiveAttrib = function() {
            return null;
        }, i.getActiveUniform = function() {
            return null;
        }, i.getAttribLocation = function() {
            return 0;
        }, i.getParameter = function() {
            return null;
        }, i.getBufferParameter = function() {
            return null;
        }, i.getError = function() {
            return null;
        }, i.getFramebufferAttachmentParameter = function() {}, i.getProgramParameter = function() {
            return 0;
        }, i.getProgramInfoLog = function() {
            return null;
        }, i.getRenderbufferParameter = function() {
            return null;
        }, i.getShaderPrecisionFormat = function() {
            return null;
        }, i.getShaderParameter = function() {}, i.getShaderInfoLog = function() {
            return null;
        }, i.getShaderSource = function() {
            return null;
        }, i.getTexParameter = function() {}, i.getUniform = function() {}, i.getUniformLocation = function() {
            return null;
        }, i.getVertexAttrib = function() {
            return null;
        }, i.getVertexAttribOffset = function() {
            return null;
        }, i.hint = function() {}, i.isBuffer = function() {}, i.isEnabled = function() {}, 
        i.isFramebuffer = function() {}, i.isProgram = function() {}, i.isRenderbuffer = function() {}, 
        i.isShader = function() {}, i.isTexture = function() {}, i.lineWidth = function() {}, 
        i.linkProgram = function() {}, i.pixelStorei = function() {}, i.polygonOffset = function() {}, 
        i.readPixels = function() {}, i.renderbufferStorage = function() {}, i.sampleCoverage = function() {}, 
        i.scissor = function() {}, i.shaderSource = function() {}, i.stencilFunc = function() {}, 
        i.stencilFuncSeparate = function() {}, i.stencilMask = function() {}, i.stencilMaskSeparate = function() {}, 
        i.stencilOp = function() {}, i.stencilOpSeparate = function() {}, i.texImage2D = function() {}, 
        i.texParameterf = function() {}, i.texParameteri = function() {}, i.texSubImage2D = function() {}, 
        i.uniform1f = function() {}, i.uniform1fv = function() {}, i.uniform1i = function() {}, 
        i.uniform1iv = function() {}, i.uniform2f = function() {}, i.uniform2fv = function() {}, 
        i.uniform2i = function() {}, i.uniform2iv = function() {}, i.uniform3f = function() {}, 
        i.uniform3fv = function() {}, i.uniform3i = function() {}, i.uniform3iv = function() {}, 
        i.uniform4f = function() {}, i.uniform4fv = function() {}, i.uniform4i = function() {}, 
        i.uniform4iv = function() {}, i.uniformMatrix2fv = function() {}, i.uniformMatrix3fv = function() {}, 
        i.uniformMatrix4fv = function() {}, i.useProgram = function() {}, i.validateProgram = function() {}, 
        i.vertexAttrib1f = function() {}, i.vertexAttrib1fv = function() {}, i.vertexAttrib2f = function() {}, 
        i.vertexAttrib2fv = function() {}, i.vertexAttrib3f = function() {}, i.vertexAttrib3fv = function() {}, 
        i.vertexAttrib4f = function() {}, i.vertexAttrib4fv = function() {}, i.vertexAttribPointer = function() {}, 
        i.viewport = function() {}, i.configureBackBuffer = function(t, e, i, r, n) {
            void 0 === r && (r = !0), void 0 === n && (n = !1);
        }, i.compressedTexImage2D = function() {}, i.createVertexArray = function() {
            throw "not implemented";
        }, i.bindVertexArray = function() {
            throw "not implemented";
        }, i.deleteVertexArray = function() {
            throw "not implemented";
        }, i.isVertexArray = function() {
            throw "not implemented";
        }, e.__init__ = function(e) {
            if (laya.webgl.WebGLContext._checkExtensions(e), !J._isWebGL2 && !T.isConchApp) {
                t._setupVertexArrayObject && (o.onMiniGame && o.onIOS || o.onBDMiniGame || o.onLimixiu ? t._forceSetupVertexArrayObject(e) : t._setupVertexArrayObject(e));
                var i = (e.rawgl || e).getExtension("OES_vertex_array_object");
                if (i) {
                    console.log("EXT:webgl support OES_vertex_array_object！");
                    var r = e;
                    r.createVertexArray = function() {
                        return i.createVertexArrayOES();
                    }, r.bindVertexArray = function(t) {
                        i.bindVertexArrayOES(t);
                    }, r.deleteVertexArray = function(t) {
                        i.deleteVertexArrayOES(t);
                    }, r.isVertexArray = function(t) {
                        i.isVertexArrayOES(t);
                    };
                }
            }
        }, e._getExtension = function(t, i) {
            var r = e._extentionVendorPrefixes;
            for (var n in r) {
                var a = t.getExtension(r[n] + i);
                if (a) return a;
            }
            return null;
        }, e._checkExtensions = function(t) {
            e._extTextureFilterAnisotropic = e._getExtension(t, "EXT_texture_filter_anisotropic"), 
            e._compressedTextureS3tc = e._getExtension(t, "WEBGL_compressed_texture_s3tc"), 
            e._compressedTexturePvrtc = e._getExtension(t, "WEBGL_compressed_texture_pvrtc"), 
            e._compressedTextureEtc1 = e._getExtension(t, "WEBGL_compressed_texture_etc1"), 
            e._angleInstancedArrays = null;
        }, e.__init_native = function() {
            if (T.supportWebGLPlusRendering) {
                var t = e;
                t.activeTexture = t.activeTextureForNative, t.bindTexture = t.bindTextureForNative;
            }
        }, e.useProgram = function(t, i) {
            return e._useProgram === i ? !1 : (t.useProgram(i), e._useProgram = i, !0);
        }, e.setDepthTest = function(t, i) {
            i !== e._depthTest && (e._depthTest = i, i ? t.enable(2929) : t.disable(2929));
        }, e.setDepthMask = function(t, i) {
            i !== e._depthMask && (e._depthMask = i, t.depthMask(i));
        }, e.setDepthFunc = function(t, i) {
            i !== e._depthFunc && (e._depthFunc = i, t.depthFunc(i));
        }, e.setBlend = function(t, i) {
            i !== e._blend && (e._blend = i, i ? t.enable(3042) : t.disable(3042));
        }, e.setBlendFunc = function(t, i, r) {
            (i !== e._sFactor || r !== e._dFactor) && (e._sFactor = e._srcAlpha = i, e._dFactor = e._dstAlpha = r, 
            t.blendFunc(i, r));
        }, e.setBlendFuncSeperate = function(t, i, r, n, a) {
            (i !== e._sFactor || r !== e._dFactor || n !== e._srcAlpha || a !== e._dstAlpha) && (e._sFactor = i, 
            e._dFactor = r, e._srcAlpha = n, e._dstAlpha = a, t.blendFuncSeparate(i, r, n, a));
        }, e.setCullFace = function(t, i) {
            i !== e._cullFace && (e._cullFace = i, i ? t.enable(2884) : t.disable(2884));
        }, e.setFrontFace = function(t, i) {
            i !== e._frontFace && (e._frontFace = i, t.frontFace(i));
        }, e.activeTexture = function(t, i) {
            e._activedTextureID !== i && (t.activeTexture(i), e._activedTextureID = i);
        }, e.bindTexture = function(t, i, r) {
            e._activeTextures[e._activedTextureID - 33984] !== r && (t.bindTexture(i, r), e._activeTextures[e._activedTextureID - 33984] = r);
        }, e.useProgramForNative = function(t, e) {
            return t.useProgram(e), !0;
        }, e.setDepthTestForNative = function(t, e) {
            e ? t.enable(2929) : t.disable(2929);
        }, e.setDepthMaskForNative = function(t, e) {
            t.depthMask(e);
        }, e.setDepthFuncForNative = function(t, e) {
            t.depthFunc(e);
        }, e.setBlendForNative = function(t, e) {
            e ? t.enable(3042) : t.disable(3042);
        }, e.setBlendFuncForNative = function(t, e, i) {
            t.blendFunc(e, i);
        }, e.setCullFaceForNative = function(t, e) {
            e ? t.enable(2884) : t.disable(2884);
        }, e.setFrontFaceForNative = function(t, e) {
            t.frontFace(e);
        }, e.activeTextureForNative = function(t, e) {
            t.activeTexture(e);
        }, e.bindTextureForNative = function(t, e, i) {
            t.bindTexture(e, i);
        }, e.bindVertexArrayForNative = function(t, e) {
            t.bindVertexArray(e);
        }, e.DEPTH_BUFFER_BIT = 256, e.STENCIL_BUFFER_BIT = 1024, e.COLOR_BUFFER_BIT = 16384, 
        e.POINTS = 0, e.LINES = 1, e.LINE_LOOP = 2, e.LINE_STRIP = 3, e.TRIANGLES = 4, e.TRIANGLE_STRIP = 5, 
        e.TRIANGLE_FAN = 6, e.ZERO = 0, e.ONE = 1, e.SRC_COLOR = 768, e.ONE_MINUS_SRC_COLOR = 769, 
        e.SRC_ALPHA = 770, e.ONE_MINUS_SRC_ALPHA = 771, e.DST_ALPHA = 772, e.ONE_MINUS_DST_ALPHA = 773, 
        e.DST_COLOR = 774, e.ONE_MINUS_DST_COLOR = 775, e.SRC_ALPHA_SATURATE = 776, e.FUNC_ADD = 32774, 
        e.BLEND_EQUATION = 32777, e.BLEND_EQUATION_RGB = 32777, e.BLEND_EQUATION_ALPHA = 34877, 
        e.FUNC_SUBTRACT = 32778, e.FUNC_REVERSE_SUBTRACT = 32779, e.BLEND_DST_RGB = 32968, 
        e.BLEND_SRC_RGB = 32969, e.BLEND_DST_ALPHA = 32970, e.BLEND_SRC_ALPHA = 32971, e.CONSTANT_COLOR = 32769, 
        e.ONE_MINUS_CONSTANT_COLOR = 32770, e.CONSTANT_ALPHA = 32771, e.ONE_MINUS_CONSTANT_ALPHA = 32772, 
        e.BLEND_COLOR = 32773, e.ARRAY_BUFFER = 34962, e.ELEMENT_ARRAY_BUFFER = 34963, e.ARRAY_BUFFER_BINDING = 34964, 
        e.ELEMENT_ARRAY_BUFFER_BINDING = 34965, e.STREAM_DRAW = 35040, e.STATIC_DRAW = 35044, 
        e.DYNAMIC_DRAW = 35048, e.BUFFER_SIZE = 34660, e.BUFFER_USAGE = 34661, e.CURRENT_VERTEX_ATTRIB = 34342, 
        e.FRONT = 1028, e.BACK = 1029, e.CULL_FACE = 2884, e.FRONT_AND_BACK = 1032, e.BLEND = 3042, 
        e.DITHER = 3024, e.STENCIL_TEST = 2960, e.DEPTH_TEST = 2929, e.SCISSOR_TEST = 3089, 
        e.POLYGON_OFFSET_FILL = 32823, e.SAMPLE_ALPHA_TO_COVERAGE = 32926, e.SAMPLE_COVERAGE = 32928, 
        e.NO_ERROR = 0, e.INVALID_ENUM = 1280, e.INVALID_VALUE = 1281, e.INVALID_OPERATION = 1282, 
        e.OUT_OF_MEMORY = 1285, e.CW = 2304, e.CCW = 2305, e.LINE_WIDTH = 2849, e.ALIASED_POINT_SIZE_RANGE = 33901, 
        e.ALIASED_LINE_WIDTH_RANGE = 33902, e.CULL_FACE_MODE = 2885, e.FRONT_FACE = 2886, 
        e.DEPTH_RANGE = 2928, e.DEPTH_WRITEMASK = 2930, e.DEPTH_CLEAR_VALUE = 2931, e.DEPTH_FUNC = 2932, 
        e.STENCIL_CLEAR_VALUE = 2961, e.STENCIL_FUNC = 2962, e.STENCIL_FAIL = 2964, e.STENCIL_PASS_DEPTH_FAIL = 2965, 
        e.STENCIL_PASS_DEPTH_PASS = 2966, e.STENCIL_REF = 2967, e.STENCIL_VALUE_MASK = 2963, 
        e.STENCIL_WRITEMASK = 2968, e.STENCIL_BACK_FUNC = 34816, e.STENCIL_BACK_FAIL = 34817, 
        e.STENCIL_BACK_PASS_DEPTH_FAIL = 34818, e.STENCIL_BACK_PASS_DEPTH_PASS = 34819, 
        e.STENCIL_BACK_REF = 36003, e.STENCIL_BACK_VALUE_MASK = 36004, e.STENCIL_BACK_WRITEMASK = 36005, 
        e.VIEWPORT = 2978, e.SCISSOR_BOX = 3088, e.COLOR_CLEAR_VALUE = 3106, e.COLOR_WRITEMASK = 3107, 
        e.UNPACK_ALIGNMENT = 3317, e.PACK_ALIGNMENT = 3333, e.MAX_TEXTURE_SIZE = 3379, e.MAX_VIEWPORT_DIMS = 3386, 
        e.SUBPIXEL_BITS = 3408, e.RED_BITS = 3410, e.GREEN_BITS = 3411, e.BLUE_BITS = 3412, 
        e.ALPHA_BITS = 3413, e.DEPTH_BITS = 3414, e.STENCIL_BITS = 3415, e.POLYGON_OFFSET_UNITS = 10752, 
        e.POLYGON_OFFSET_FACTOR = 32824, e.TEXTURE_BINDING_2D = 32873, e.SAMPLE_BUFFERS = 32936, 
        e.SAMPLES = 32937, e.SAMPLE_COVERAGE_VALUE = 32938, e.SAMPLE_COVERAGE_INVERT = 32939, 
        e.NUM_COMPRESSED_TEXTURE_FORMATS = 34466, e.COMPRESSED_TEXTURE_FORMATS = 34467, 
        e.DONT_CARE = 4352, e.FASTEST = 4353, e.NICEST = 4354, e.GENERATE_MIPMAP_HINT = 33170, 
        e.BYTE = 5120, e.UNSIGNED_BYTE = 5121, e.SHORT = 5122, e.UNSIGNED_SHORT = 5123, 
        e.INT = 5124, e.UNSIGNED_INT = 5125, e.FLOAT = 5126, e.DEPTH_COMPONENT = 6402, e.ALPHA = 6406, 
        e.RGB = 6407, e.RGBA = 6408, e.LUMINANCE = 6409, e.LUMINANCE_ALPHA = 6410, e.UNSIGNED_SHORT_4_4_4_4 = 32819, 
        e.UNSIGNED_SHORT_5_5_5_1 = 32820, e.UNSIGNED_SHORT_5_6_5 = 33635, e.FRAGMENT_SHADER = 35632, 
        e.VERTEX_SHADER = 35633, e.MAX_VERTEX_ATTRIBS = 34921, e.MAX_VERTEX_UNIFORM_VECTORS = 36347, 
        e.MAX_VARYING_VECTORS = 36348, e.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661, e.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660, 
        e.MAX_TEXTURE_IMAGE_UNITS = 34930, e.MAX_FRAGMENT_UNIFORM_VECTORS = 36349, e.SHADER_TYPE = 35663, 
        e.DELETE_STATUS = 35712, e.LINK_STATUS = 35714, e.VALIDATE_STATUS = 35715, e.ATTACHED_SHADERS = 35717, 
        e.ACTIVE_UNIFORMS = 35718, e.ACTIVE_ATTRIBUTES = 35721, e.SHADING_LANGUAGE_VERSION = 35724, 
        e.CURRENT_PROGRAM = 35725, e.NEVER = 512, e.LESS = 513, e.EQUAL = 514, e.LEQUAL = 515, 
        e.GREATER = 516, e.NOTEQUAL = 517, e.GEQUAL = 518, e.ALWAYS = 519, e.KEEP = 7680, 
        e.REPLACE = 7681, e.INCR = 7682, e.DECR = 7683, e.INVERT = 5386, e.INCR_WRAP = 34055, 
        e.DECR_WRAP = 34056, e.VENDOR = 7936, e.RENDERER = 7937, e.VERSION = 7938, e.NEAREST = 9728, 
        e.LINEAR = 9729, e.NEAREST_MIPMAP_NEAREST = 9984, e.LINEAR_MIPMAP_NEAREST = 9985, 
        e.NEAREST_MIPMAP_LINEAR = 9986, e.LINEAR_MIPMAP_LINEAR = 9987, e.TEXTURE_MAG_FILTER = 10240, 
        e.TEXTURE_MIN_FILTER = 10241, e.TEXTURE_WRAP_S = 10242, e.TEXTURE_WRAP_T = 10243, 
        e.TEXTURE_2D = 3553, e.TEXTURE_3D = 32879, e.TEXTURE = 5890, e.TEXTURE_CUBE_MAP = 34067, 
        e.TEXTURE_BINDING_CUBE_MAP = 34068, e.TEXTURE_CUBE_MAP_POSITIVE_X = 34069, e.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070, 
        e.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071, e.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072, e.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073, 
        e.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074, e.MAX_CUBE_MAP_TEXTURE_SIZE = 34076, e.TEXTURE0 = 33984, 
        e.TEXTURE1 = 33985, e.TEXTURE2 = 33986, e.TEXTURE3 = 33987, e.TEXTURE4 = 33988, 
        e.TEXTURE5 = 33989, e.TEXTURE6 = 33990, e.TEXTURE7 = 33991, e.TEXTURE8 = 33992, 
        e.TEXTURE9 = 33993, e.TEXTURE10 = 33994, e.TEXTURE11 = 33995, e.TEXTURE12 = 33996, 
        e.TEXTURE13 = 33997, e.TEXTURE14 = 33998, e.TEXTURE15 = 33999, e.TEXTURE16 = 34e3, 
        e.TEXTURE17 = 34001, e.TEXTURE18 = 34002, e.TEXTURE19 = 34003, e.TEXTURE20 = 34004, 
        e.TEXTURE21 = 34005, e.TEXTURE22 = 34006, e.TEXTURE23 = 34007, e.TEXTURE24 = 34008, 
        e.TEXTURE25 = 34009, e.TEXTURE26 = 34010, e.TEXTURE27 = 34011, e.TEXTURE28 = 34012, 
        e.TEXTURE29 = 34013, e.TEXTURE30 = 34014, e.TEXTURE31 = 34015, e.ACTIVE_TEXTURE = 34016, 
        e.REPEAT = 10497, e.CLAMP_TO_EDGE = 33071, e.MIRRORED_REPEAT = 33648, e.FLOAT_VEC2 = 35664, 
        e.FLOAT_VEC3 = 35665, e.FLOAT_VEC4 = 35666, e.INT_VEC2 = 35667, e.INT_VEC3 = 35668, 
        e.INT_VEC4 = 35669, e.BOOL = 35670, e.BOOL_VEC2 = 35671, e.BOOL_VEC3 = 35672, e.BOOL_VEC4 = 35673, 
        e.FLOAT_MAT2 = 35674, e.FLOAT_MAT3 = 35675, e.FLOAT_MAT4 = 35676, e.SAMPLER_2D = 35678, 
        e.SAMPLER_CUBE = 35680, e.VERTEX_ATTRIB_ARRAY_ENABLED = 34338, e.VERTEX_ATTRIB_ARRAY_SIZE = 34339, 
        e.VERTEX_ATTRIB_ARRAY_STRIDE = 34340, e.VERTEX_ATTRIB_ARRAY_TYPE = 34341, e.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922, 
        e.VERTEX_ATTRIB_ARRAY_POINTER = 34373, e.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975, 
        e.COMPILE_STATUS = 35713, e.LOW_FLOAT = 36336, e.MEDIUM_FLOAT = 36337, e.HIGH_FLOAT = 36338, 
        e.LOW_INT = 36339, e.MEDIUM_INT = 36340, e.HIGH_INT = 36341, e.FRAMEBUFFER = 36160, 
        e.RENDERBUFFER = 36161, e.RGBA4 = 32854, e.RGB5_A1 = 32855, e.RGB565 = 36194, e.DEPTH_COMPONENT16 = 33189, 
        e.STENCIL_INDEX = 6401, e.STENCIL_INDEX8 = 36168, e.DEPTH_STENCIL = 34041, e.RENDERBUFFER_WIDTH = 36162, 
        e.RENDERBUFFER_HEIGHT = 36163, e.RENDERBUFFER_INTERNAL_FORMAT = 36164, e.RENDERBUFFER_RED_SIZE = 36176, 
        e.RENDERBUFFER_GREEN_SIZE = 36177, e.RENDERBUFFER_BLUE_SIZE = 36178, e.RENDERBUFFER_ALPHA_SIZE = 36179, 
        e.RENDERBUFFER_DEPTH_SIZE = 36180, e.RENDERBUFFER_STENCIL_SIZE = 36181, e.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048, 
        e.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049, e.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050, 
        e.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051, e.COLOR_ATTACHMENT0 = 36064, 
        e.DEPTH_ATTACHMENT = 36096, e.STENCIL_ATTACHMENT = 36128, e.DEPTH_STENCIL_ATTACHMENT = 33306, 
        e.NONE = 0, e.FRAMEBUFFER_COMPLETE = 36053, e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054, 
        e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055, e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057, 
        e.FRAMEBUFFER_UNSUPPORTED = 36061, e.FRAMEBUFFER_BINDING = 36006, e.RENDERBUFFER_BINDING = 36007, 
        e.MAX_RENDERBUFFER_SIZE = 34024, e.INVALID_FRAMEBUFFER_OPERATION = 1286, e.UNPACK_FLIP_Y_WEBGL = 37440, 
        e.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441, e.CONTEXT_LOST_WEBGL = 37442, e.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443, 
        e.BROWSER_DEFAULT_WEBGL = 37444, e._extTextureFilterAnisotropic = null, e._compressedTextureS3tc = null, 
        e._compressedTexturePvrtc = null, e._compressedTextureEtc1 = null, e._angleInstancedArrays = null, 
        e._glTextureIDs = [ 33984, 33985, 33986, 33987, 33988, 33989, 33990, 33991 ], e._useProgram = null, 
        e._depthTest = !0, e._depthMask = !0, e._blend = !1, e._cullFace = !1, e._activedTextureID = 33984, 
        r(e, [ "_extentionVendorPrefixes", function() {
            return this._extentionVendorPrefixes = [ "", "WEBKIT_", "MOZ_" ];
        }, "_activeTextures", function() {
            return this._activeTextures = new Array(8);
        }, "_depthFunc", function() {
            return this._depthFunc = 513;
        }, "_sFactor", function() {
            return this._sFactor = 1;
        }, "_dFactor", function() {
            return this._dFactor = 0;
        }, "_srcAlpha", function() {
            return this._srcAlpha = 1;
        }, "_dstAlpha", function() {
            return this._dstAlpha = 0;
        }, "_frontFace", function() {
            return this._frontFace = 2305;
        } ]), e;
    }(), j = function() {
        function t() {
            this.char = "", this.tex = null, this.deleted = !1, this.pos = 0, this.width = 0, 
            this.height = 0, this.bmpWidth = 0, this.bmpHeight = 0, this.orix = 0, this.oriy = 0, 
            this.touchTick = 0, this.isSpace = !1, this.uv = new Array(8);
        }
        n(t, "laya.webgl.resource.CharRenderInfo");
        var e = t.prototype;
        return e.touch = function() {
            var t = R.loopCount;
            this.touchTick != t && this.tex.touchRect(this, t), this.touchTick = t;
        }, t;
    }(), K = function() {
        function t() {
            this._mat = new m();
        }
        n(t, "laya.webgl.canvas.save.SaveTranslate");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.canvas.save.ISaveData": !0
        }), e.isSaveMark = function() {
            return !1;
        }, e.restore = function(e) {
            this._mat.copyTo(e._curMat), t.POOL[t.POOL._length++] = this;
        }, t.save = function(e) {
            var i = t.POOL, r = i._length > 0 ? i[--i._length] : new t();
            e._curMat.copyTo(r._mat);
            var n = e._save;
            n[n._length++] = r;
        }, t.POOL = I._createArray(), t;
    }(), Z = function() {
        function t() {
            this._mesh = null, this._startIdx = 0, this._numEle = 0, this.shaderValue = null, 
            this.blendType = 0, this._ref = 1, this.srcRT = null, this._key = new _e();
        }
        n(t, "laya.webgl.submit.SubmitTarget");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.submit.ISubmit": !0
        }), e.renderSubmit = function() {
            var t = J.mainContext;
            this._mesh.useMesh(t);
            var e = this.srcRT;
            return e && (this.shaderValue.texture = e._getSource(), this.shaderValue.upload(), 
            this.blend(), R.renderBatches++, R.trianglesFaces += this._numEle / 3, J.mainContext.drawElements(4, this._numEle, 5123, this._startIdx)), 
            1;
        }, e.blend = function() {
            if (te.activeBlendFunction !== te.fns[this.blendType]) {
                var t = J.mainContext;
                t.enable(3042), te.fns[this.blendType](t), te.activeBlendFunction = te.fns[this.blendType];
            }
        }, e.getRenderType = function() {
            return 0;
        }, e.releaseRender = function() {
            if (--this._ref < 1) {
                var e = t.POOL;
                e[e._length++] = this;
            }
        }, e.reUse = function(t, e) {
            return this._startIdx = e, this._ref++, e;
        }, t.create = function(e, i, r, n) {
            var a = t.POOL._length ? t.POOL[--t.POOL._length] : new t();
            if (a._mesh = i, a.srcRT = n, a._startIdx = i.indexNum * $.BYTES_PIDX, a._ref = 1, 
            a._key.clear(), a._numEle = 0, a.blendType = e._nBlendType, a._key.blendShader = a.blendType, 
            a.shaderValue = r, a.shaderValue.setValue(e._shader2D), e._colorFiler) {
                var s = e._colorFiler;
                r.defines.add(s.type), r.colorMat = s._mat, r.colorAlpha = s._alpha;
            }
            return a;
        }, t.POOL = (t.POOL = [], t.POOL._length = 0, t.POOL), t;
    }(), Q = function() {
        function t() {}
        return n(t, "laya.webgl.shapes.Earcut"), t.earcut = function(e, i, r) {
            r = r || 2;
            var n = i && i.length, a = n ? i[0] * r : e.length, s = t.linkedList(e, 0, a, r, !0), h = [];
            if (!s) return h;
            var o, l, u, c, _, f, d;
            if (n && (s = t.eliminateHoles(e, i, s, r)), e.length > 80 * r) {
                o = u = e[0], l = c = e[1];
                for (var p = r; a > p; p += r) _ = e[p], f = e[p + 1], o > _ && (o = _), l > f && (l = f), 
                _ > u && (u = _), f > c && (c = f);
                d = Math.max(u - o, c - l), d = 0 !== d ? 1 / d : 0;
            }
            return t.earcutLinked(s, h, r, o, l, d), h;
        }, t.linkedList = function(e, i, r, n, a) {
            var s, h;
            if (a === t.signedArea(e, i, r, n) > 0) for (s = i; r > s; s += n) h = t.insertNode(s, e[s], e[s + 1], h); else for (s = r - n; s >= i; s -= n) h = t.insertNode(s, e[s], e[s + 1], h);
            return h && t.equals(h, h.next) && (t.removeNode(h), h = h.next), h;
        }, t.filterPoints = function(e, i) {
            if (!e) return e;
            i || (i = e);
            var r, n = e;
            do {
                if (r = !1, n.steiner || !t.equals(n, n.next) && 0 !== t.area(n.prev, n, n.next)) n = n.next; else {
                    if (t.removeNode(n), n = i = n.prev, n === n.next) break;
                    r = !0;
                }
            } while (r || n !== i);
            return i;
        }, t.earcutLinked = function(e, i, r, n, a, s, h) {
            if (e) {
                !h && s && t.indexCurve(e, n, a, s);
                for (var o, l, u = e; e.prev !== e.next; ) if (o = e.prev, l = e.next, s ? t.isEarHashed(e, n, a, s) : t.isEar(e)) i.push(o.i / r), 
                i.push(e.i / r), i.push(l.i / r), t.removeNode(e), e = l.next, u = l.next; else if (e = l, 
                e === u) {
                    h ? 1 === h ? (e = t.cureLocalIntersections(e, i, r), t.earcutLinked(e, i, r, n, a, s, 2)) : 2 === h && t.splitEarcut(e, i, r, n, a, s) : t.earcutLinked(t.filterPoints(e, null), i, r, n, a, s, 1);
                    break;
                }
            }
        }, t.isEar = function(e) {
            var i = e.prev, r = e, n = e.next;
            if (t.area(i, r, n) >= 0) return !1;
            for (var a = e.next.next; a !== e.prev; ) {
                if (t.pointInTriangle(i.x, i.y, r.x, r.y, n.x, n.y, a.x, a.y) && t.area(a.prev, a, a.next) >= 0) return !1;
                a = a.next;
            }
            return !0;
        }, t.isEarHashed = function(e, i, r, n) {
            var a = e.prev, s = e, h = e.next;
            if (t.area(a, s, h) >= 0) return !1;
            for (var o = a.x < s.x ? a.x < h.x ? a.x : h.x : s.x < h.x ? s.x : h.x, l = a.y < s.y ? a.y < h.y ? a.y : h.y : s.y < h.y ? s.y : h.y, u = a.x > s.x ? a.x > h.x ? a.x : h.x : s.x > h.x ? s.x : h.x, c = a.y > s.y ? a.y > h.y ? a.y : h.y : s.y > h.y ? s.y : h.y, _ = t.zOrder(o, l, i, r, n), f = t.zOrder(u, c, i, r, n), d = e.nextZ; d && d.z <= f; ) {
                if (d !== e.prev && d !== e.next && t.pointInTriangle(a.x, a.y, s.x, s.y, h.x, h.y, d.x, d.y) && t.area(d.prev, d, d.next) >= 0) return !1;
                d = d.nextZ;
            }
            for (d = e.prevZ; d && d.z >= _; ) {
                if (d !== e.prev && d !== e.next && t.pointInTriangle(a.x, a.y, s.x, s.y, h.x, h.y, d.x, d.y) && t.area(d.prev, d, d.next) >= 0) return !1;
                d = d.prevZ;
            }
            return !0;
        }, t.cureLocalIntersections = function(e, i, r) {
            var n = e;
            do {
                var a = n.prev, s = n.next.next;
                !t.equals(a, s) && t.intersects(a, n, n.next, s) && t.locallyInside(a, s) && t.locallyInside(s, a) && (i.push(a.i / r), 
                i.push(n.i / r), i.push(s.i / r), t.removeNode(n), t.removeNode(n.next), n = e = s), 
                n = n.next;
            } while (n !== e);
            return n;
        }, t.splitEarcut = function(e, i, r, n, a, s) {
            var h = e;
            do {
                for (var o = h.next.next; o !== h.prev; ) {
                    if (h.i !== o.i && t.isValidDiagonal(h, o)) {
                        var l = t.splitPolygon(h, o);
                        return h = t.filterPoints(h, h.next), l = t.filterPoints(l, l.next), t.earcutLinked(h, i, r, n, a, s), 
                        t.earcutLinked(l, i, r, n, a, s), void 0;
                    }
                    o = o.next;
                }
                h = h.next;
            } while (h !== e);
        }, t.eliminateHoles = function(e, i, r, n) {
            var a, s, h, o, l, u = [];
            for (a = 0, s = i.length; s > a; a++) h = i[a] * n, o = s - 1 > a ? i[a + 1] * n : e.length, 
            l = t.linkedList(e, h, o, n, !1), l === l.next && (l.steiner = !0), u.push(t.getLeftmost(l));
            for (u.sort(t.compareX), a = 0; a < u.length; a++) t.eliminateHole(u[a], r), r = t.filterPoints(r, r.next);
            return r;
        }, t.compareX = function(t, e) {
            return t.x - e.x;
        }, t.eliminateHole = function(e, i) {
            if (i = t.findHoleBridge(e, i)) {
                var r = t.splitPolygon(i, e);
                t.filterPoints(r, r.next);
            }
        }, t.findHoleBridge = function(e, i) {
            var r, n = i, a = e.x, s = e.y, h = -1 / 0;
            do {
                if (s <= n.y && s >= n.next.y && n.next.y !== n.y) {
                    var o = n.x + (s - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                    if (a >= o && o > h) {
                        if (h = o, o === a) {
                            if (s === n.y) return n;
                            if (s === n.next.y) return n.next;
                        }
                        r = n.x < n.next.x ? n : n.next;
                    }
                }
                n = n.next;
            } while (n !== i);
            if (!r) return null;
            if (a === h) return r.prev;
            var l, u = r, c = r.x, _ = r.y, f = 1 / 0;
            for (n = r.next; n !== u; ) a >= n.x && n.x >= c && a !== n.x && t.pointInTriangle(_ > s ? a : h, s, c, _, _ > s ? h : a, s, n.x, n.y) && (l = Math.abs(s - n.y) / (a - n.x), 
            (f > l || l === f && n.x > r.x) && t.locallyInside(n, e) && (r = n, f = l)), n = n.next;
            return r;
        }, t.indexCurve = function(e, i, r, n) {
            var a = e;
            do {
                null === a.z && (a.z = t.zOrder(a.x, a.y, i, r, n)), a.prevZ = a.prev, a.nextZ = a.next, 
                a = a.next;
            } while (a !== e);
            a.prevZ.nextZ = null, a.prevZ = null, t.sortLinked(a);
        }, t.sortLinked = function(t) {
            var e, i, r, n, a, s, h, o, l = 1;
            do {
                for (i = t, t = null, a = null, s = 0; i; ) {
                    for (s++, r = i, h = 0, e = 0; l > e && (h++, r = r.nextZ, r); e++) ;
                    for (o = l; h > 0 || o > 0 && r; ) 0 !== h && (0 === o || !r || i.z <= r.z) ? (n = i, 
                    i = i.nextZ, h--) : (n = r, r = r.nextZ, o--), a ? a.nextZ = n : t = n, n.prevZ = a, 
                    a = n;
                    i = r;
                }
                a.nextZ = null, l *= 2;
            } while (s > 1);
            return t;
        }, t.zOrder = function(t, e, i, r, n) {
            return t = 32767 * (t - i) * n, e = 32767 * (e - r) * n, t = 16711935 & (t | t << 8), 
            t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), 
            e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), 
            e = 1431655765 & (e | e << 1), t | e << 1;
        }, t.getLeftmost = function(t) {
            var e = t, i = t;
            do {
                e.x < i.x && (i = e), e = e.next;
            } while (e !== t);
            return i;
        }, t.pointInTriangle = function(t, e, i, r, n, a, s, h) {
            return (n - s) * (e - h) - (t - s) * (a - h) >= 0 && (t - s) * (r - h) - (i - s) * (e - h) >= 0 && (i - s) * (a - h) - (n - s) * (r - h) >= 0;
        }, t.isValidDiagonal = function(e, i) {
            return e.next.i !== i.i && e.prev.i !== i.i && !t.intersectsPolygon(e, i) && t.locallyInside(e, i) && t.locallyInside(i, e) && t.middleInside(e, i);
        }, t.area = function(t, e, i) {
            return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y);
        }, t.equals = function(t, e) {
            return t.x === e.x && t.y === e.y;
        }, t.intersects = function(e, i, r, n) {
            return t.equals(e, i) && t.equals(r, n) || t.equals(e, n) && t.equals(r, i) ? !0 : t.area(e, i, r) > 0 != t.area(e, i, n) > 0 && t.area(r, n, e) > 0 != t.area(r, n, i) > 0;
        }, t.intersectsPolygon = function(e, i) {
            var r = e;
            do {
                if (r.i !== e.i && r.next.i !== e.i && r.i !== i.i && r.next.i !== i.i && t.intersects(r, r.next, e, i)) return !0;
                r = r.next;
            } while (r !== e);
            return !1;
        }, t.locallyInside = function(e, i) {
            return t.area(e.prev, e, e.next) < 0 ? t.area(e, i, e.next) >= 0 && t.area(e, e.prev, i) >= 0 : t.area(e, i, e.prev) < 0 || t.area(e, e.next, i) < 0;
        }, t.middleInside = function(t, e) {
            var i = t, r = !1, n = (t.x + e.x) / 2, a = (t.y + e.y) / 2;
            do {
                i.y > a != i.next.y > a && i.next.y !== i.y && n < (i.next.x - i.x) * (a - i.y) / (i.next.y - i.y) + i.x && (r = !r), 
                i = i.next;
            } while (i !== t);
            return r;
        }, t.splitPolygon = function(t, e) {
            var i = new he(t.i, t.x, t.y), r = new he(e.i, e.x, e.y), n = t.next, a = e.prev;
            return t.next = e, e.prev = t, i.next = n, n.prev = i, r.next = i, i.prev = r, a.next = r, 
            r.prev = a, r;
        }, t.insertNode = function(t, e, i, r) {
            var n = new he(t, e, i);
            return r ? (n.next = r.next, n.prev = r, r.next.prev = n, r.next = n) : (n.prev = n, 
            n.next = n), n;
        }, t.removeNode = function(t) {
            t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), 
            t.nextZ && (t.nextZ.prevZ = t.prevZ);
        }, t.signedArea = function(t, e, i, r) {
            for (var n = 0, a = e, s = i - r; i > a; a += r) n += (t[s] - t[a]) * (t[a + 1] + t[s + 1]), 
            s = a;
            return n;
        }, t;
    }(), q = function() {
        function t(e) {
            this.clipInfoID = -1, this._mesh = null, this._blendFn = null, this._id = 0, this._renderType = 0, 
            this._parent = null, this._startIdx = 0, this._numEle = 0, this._ref = 1, this.shaderValue = null, 
            this._key = new _e(), void 0 === e && (e = 1e4), this._renderType = e, this._id = ++t.ID;
        }
        n(t, "laya.webgl.submit.Submit");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.submit.ISubmit": !0
        }), e.getID = function() {
            return this._id;
        }, e.releaseRender = function() {
            t.RENDERBASE != this && --this._ref < 1 && (t.POOL[t._poolSize++] = this, this.shaderValue.release(), 
            this.shaderValue = null, this._mesh = null, this._parent && (this._parent.releaseRender(), 
            this._parent = null));
        }, e.getRenderType = function() {
            return this._renderType;
        }, e.renderSubmit = function() {
            if (0 === this._numEle || !this._mesh || 0 == this._numEle) return 1;
            var t = this.shaderValue.textureHost;
            if (t) {
                var e = t._getSource();
                if (!e) return 1;
                this.shaderValue.texture = e;
            }
            var i = J.mainContext;
            return this._mesh.useMesh(i), this.shaderValue.upload(), te.activeBlendFunction !== this._blendFn && (Y.setBlend(i, !0), 
            this._blendFn(i), te.activeBlendFunction = this._blendFn), i.drawElements(4, this._numEle, 5123, this._startIdx), 
            R.renderBatches++, R.trianglesFaces += this._numEle / 3, 1;
        }, e._cloneInit = function(t, e, i, r) {
            t._ref = 1, t._mesh = i, t._id = this._id, t._key.copyFrom(this._key), t._parent = this, 
            t._blendFn = this._blendFn, t._renderType = this._renderType, t._startIdx = r * $.BYTES_PIDX, 
            t._numEle = this._numEle, t.shaderValue = this.shaderValue, this.shaderValue.ref++, 
            this._ref++;
        }, e.clone = function() {
            return null;
        }, e.reUse = function() {
            return 0;
        }, e.toString = function() {
            return "ibindex:" + this._startIdx + " num:" + this._numEle + " key=" + this._key;
        }, t.__init__ = function() {
            var e = t.RENDERBASE = new t(-1);
            e.shaderValue = new P(0, 0), e.shaderValue.ALPHA = 1, e._ref = 4294967295;
        }, t.create = function(e, i, r) {
            var n = t._poolSize ? t.POOL[--t._poolSize] : new t();
            n._ref = 1, n._mesh = i, n._key.clear(), n._startIdx = i.indexNum * $.BYTES_PIDX, 
            n._numEle = 0;
            var a = e._nBlendType;
            n._blendFn = e._targets ? te.targetFns[a] : te.fns[a], n.shaderValue = r, n.shaderValue.setValue(e._shader2D);
            var s = e._shader2D.filters;
            return s && n.shaderValue.setFilters(s), n;
        }, t.createShape = function(e, i, r, n) {
            var a = t._poolSize ? t.POOL[--t._poolSize] : new t();
            a._mesh = i, a._numEle = r, a._startIdx = 2 * i.indexNum, a._ref = 1, a.shaderValue = n, 
            a.shaderValue.setValue(e._shader2D);
            var s = e._nBlendType;
            return a._key.blendShader = s, a._blendFn = e._targets ? te.targetFns[s] : te.fns[s], 
            a;
        }, t.TYPE_2D = 1e4, t.TYPE_CANVAS = 10003, t.TYPE_CMDSETRT = 10004, t.TYPE_CUSTOM = 10005, 
        t.TYPE_BLURRT = 10006, t.TYPE_CMDDESTORYPRERT = 10007, t.TYPE_DISABLESTENCIL = 10008, 
        t.TYPE_OTHERIBVB = 10009, t.TYPE_PRIMITIVE = 10010, t.TYPE_RT = 10011, t.TYPE_BLUR_RT = 10012, 
        t.TYPE_TARGET = 10013, t.TYPE_CHANGE_VALUE = 10014, t.TYPE_SHAPE = 10015, t.TYPE_TEXTURE = 10016, 
        t.TYPE_FILLTEXTURE = 10017, t.KEY_ONCE = -1, t.KEY_FILLRECT = 1, t.KEY_DRAWTEXTURE = 2, 
        t.KEY_VG = 3, t.KEY_TRIANGLES = 4, t.RENDERBASE = null, t.ID = 1, t.preRender = null, 
        t._poolSize = 0, t.POOL = [], t;
    }(), $ = function() {
        function t() {}
        return n(t, "laya.webgl.utils.CONST3D2D"), t.BYTES_PE = 4, t.BYTES_PIDX = 2, t.defaultMatrix4 = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], 
        t.defaultMinusYMatrix4 = [ 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], t.uniformMatrix3 = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0 ], 
        t._TMPARRAY = [], t._OFFSETX = 0, t._OFFSETY = 0, t;
    }(), J = function() {
        function e() {}
        return n(e, "laya.webgl.WebGL"), e._uint8ArraySlice = function() {
            for (var t = this, e = t.length, i = new Uint8Array(t.length), r = 0; e > r; r++) i[r] = t[r];
            return i;
        }, e._float32ArraySlice = function() {
            for (var t = this, e = t.length, i = new Float32Array(t.length), r = 0; e > r; r++) i[r] = t[r];
            return i;
        }, e._uint16ArraySlice = function() {
            var t, e = arguments, i = this, r = 0, n = 0;
            if (0 === e.length) for (r = i.length, t = new Uint16Array(r), n = 0; r > n; n++) t[n] = i[n]; else if (2 === e.length) {
                var a = e[0], s = e[1];
                if (s > a) for (r = s - a, t = new Uint16Array(r), n = a; s > n; n++) t[n - a] = i[n]; else t = new Uint16Array(0);
            }
            return t;
        }, e._nativeRender_enable = function() {
            e.isNativeRender_enable || (e.isNativeRender_enable = !0, p.create = function(t, e) {
                var i = new Ne(t, e, 1, !1, !1);
                return i.wrapModeU = 1, i.wrapModeV = 1, i;
            }, Y.__init_native(), Le.prototype.uploadTexture2D = function(t) {
                var e = Y;
                e.bindTexture(laya.webgl.WebGL.mainContext, e.TEXTURE_2D, t);
            }, ce.width = o.window.innerWidth, ce.height = o.window.innerHeight, y.measureText = function(e, i) {
                return t.conchTextCanvas.font = i, t.conchTextCanvas.measureText(e);
            }, y.enableNative = function() {
                T.supportWebGLPlusRendering && (G.uploadShaderUniforms = G.uploadShaderUniformsForNative, 
                ae = t.GLCommandEncoder, O = t.LayaGLContext);
                var e = E;
                e.prototype.render = e.prototype.renderToNative;
            }, y.clear = function(t) {
                me.set2DRenderConfig();
                var e = l.create(t).arrColor, i = O.instance;
                e && i.clearColor(e[0], e[1], e[2], e[3]), i.clear(17664), ce.clear();
            }, y.drawToCanvas = function(t, e, i, r, n, a) {
                n -= t.x, a -= t.y, n |= 0, a |= 0, i |= 0, r |= 0;
                var s = new d(!1), h = s.getContext("2d");
                return s.size(i, r), h.asBitmap = !0, h._targets.start(), g.renders[e]._fun(t, h, n, a), 
                h.flush(), h._targets.end(), h._targets.restore(), s;
            }, Fe.prototype._uv = Fe.flipyuv, Object.defineProperty(Fe.prototype, "uv", {
                get: function() {
                    return this._uv;
                },
                set: function(t) {
                    this._uv = t;
                }
            }), d.prototype.getTexture = function() {
                return this._texture || (this._texture = this.context._targets, this._texture.uv = Fe.flipyuv, 
                this._texture.bitmap = this._texture), this._texture;
            });
        }, e._webglRender_enable = function() {
            T.isWebGL || (T.isWebGL = !0, y.initRender = function(t, i, r) {
                function n(t) {
                    var e, i = [ "webgl2", "webgl", "experimental-webgl", "webkit-3d", "moz-webgl" ];
                    u.useWebGL2 || i.shift();
                    for (var r = 0; r < i.length; r++) {
                        try {
                            e = t.getContext(i[r], {
                                stencil: u.isStencil,
                                alpha: u.isAlpha,
                                antialias: u.isAntialias,
                                premultipliedAlpha: u.premultipliedAlpha,
                                preserveDrawingBuffer: u.preserveDrawingBuffer
                            });
                        } catch (n) {}
                        if (e) return "webgl2" === i[r] && (laya.webgl.WebGL._isWebGL2 = !0), new O(), e;
                    }
                    return null;
                }
                var a = O.instance = laya.webgl.WebGL.mainContext = n(T._mainCanvas.source);
                if (!a) return !1;
                t.size(i, r), Y.__init__(a), me.__init__(), q.__init__();
                var s = new me();
                T._context = s, t._setContext(s), laya.webgl.WebGL.shaderHighPrecision = !1;
                try {
                    var h = a.getShaderPrecisionFormat(35632, 36338);
                    e.shaderHighPrecision = h.precision ? !0 : !1;
                } catch (o) {}
                return O.instance = a, M.__init__(), Ae.__init__(), P.__init__(), ne.__init__(), 
                we.__int__(a), te._init_(a), !0;
            }, p.create = function(t, e, i) {
                var r = new Ne(t, e, i, !1, !1);
                return r.wrapModeU = 1, r.wrapModeV = 1, r;
            }, y.createRenderSprite = function(t, e) {
                return new pe(t, e);
            }, y.changeWebGLSize = function(t, e) {
                laya.webgl.WebGL.onStageResize(t, e);
            }, y.clear = function(t) {
                me.set2DRenderConfig(), ce.worldScissorTest && laya.webgl.WebGL.mainContext.disable(3089);
                var e = T.context, r = 0 == e._submits._length || u.preserveDrawingBuffer ? l.create(t).arrColor : i.stage._wgColor;
                r ? e.clearBG(r[0], r[1], r[2], r[3]) : e.clearBG(0, 0, 0, 0), ce.clear();
            }, y.drawToCanvas = function(t, e, i, r, n, a) {
                n -= t.x, a -= t.y, n |= 0, a |= 0, i |= 0, r |= 0;
                var s = new me();
                s.size(i, r), s.asBitmap = !0, s._targets.start(), g.renders[e]._fun(t, s, n, a), 
                s.flush(), s._targets.end(), s._targets.restore();
                var h = s._targets.getData(0, 0, i, r);
                s.destroy();
                for (var o = new ImageData(i, r), l = 4 * i, u = (new Uint8Array(l), o.data), c = r - 1, _ = c * l, f = 0; c >= 0; c--) u.set(h.subarray(f, f + l), _), 
                _ -= l, f += l;
                var p = new d(!0);
                p.size(i, r);
                var m = p.getContext("2d");
                return m.putImageData(o, 0, 0), p;
            }, y.getTexturePixels = function(t, e, i, r, n) {
                var a = 0, s = 0, h = 0, o = t.bitmap, l = o.width, u = o.height;
                if (e + r > l && (r -= e + r - l), i + n > u && (n -= i + n - u), 0 >= r || 0 >= n) return null;
                var c = 4 * r, _ = null;
                try {
                    _ = o.getPixels();
                } catch (f) {}
                if (_) {
                    if (0 == e && 0 == i && r == l && n == u) return _;
                    var d = new Uint8Array(r * n * 4);
                    for (c = 4 * l, a = 4 * e, s = (i + n - 1) * c + 4 * e, h = n - 1; h >= 0; h--) d.set(A.slice(s, s + 4 * r), a), 
                    a += c, s -= c;
                    return d;
                }
                var p = new me();
                p.size(r, n), p.asBitmap = !0;
                var m = null;
                if (0 != e || 0 != i || r != l || n != u) {
                    m = t.uv.concat();
                    var x = m[0], v = m[1], T = m[2] - x, g = m[7] - v, b = T / l, y = g / u;
                    m = [ x + e * b, v + i * y, x + (e + r) * b, v + i * y, x + (e + r) * b, v + (i + n) * y, x + e * b, v + (i + n) * y ];
                }
                p._drawTextureM(t, 0, 0, r, n, null, 1, m), p._targets.start(), p.flush(), p._targets.end(), 
                p._targets.restore();
                var A = p._targets.getData(0, 0, r, n);
                for (p.destroy(), d = new Uint8Array(r * n * 4), a = 0, s = (n - 1) * c, h = n - 1; h >= 0; h--) d.set(A.slice(s, s + c), a), 
                a += c, s -= c;
                return d;
            }, _._filter = function(t, e, i, r) {
                var n = e, a = this._next;
                if (a) {
                    var s = t.filters, h = s.length;
                    if (1 == h && 32 == s[0].type) return e.save(), e.setColorFilter(s[0]), a._fun.call(a, t, e, i, r), 
                    e.restore(), void 0;
                    var o, l = P.create(1, 0), u = x.TEMP, c = n._curMat, _ = m.create();
                    c.copyTo(_);
                    var f = 0, d = 0, p = !1, T = null, g = t._cacheStyle.filterCache || null;
                    if (g && 0 == t.getRepaint()) {
                        if (p = t._cacheStyle.hasGlowFilter || !1, p && (f = 50, d = 25), o = t.getBounds(), 
                        o.width <= 0 || o.height <= 0) return;
                        o.width += f, o.height += f, u.x = o.x * _.a + o.y * _.c, u.y = o.y * _.d + o.x * _.b, 
                        o.x = u.x, o.y = u.y, u.x = o.width * _.a + o.height * _.c, u.y = o.height * _.d + o.width * _.b, 
                        o.width = u.x, o.height = u.y;
                    } else {
                        p = t._isHaveGlowFilter(), p && (f = 50, d = 25), o = new v(), o.copyFrom(t.getSelfBounds()), 
                        o.x += t.x, o.y += t.y, o.x -= t.pivotX + 4, o.y -= t.pivotY + 4;
                        var b = o.x, y = o.y;
                        if (o.width += f + 8, o.height += f + 8, u.x = o.x * _.a + o.y * _.c, u.y = o.y * _.d + o.x * _.b, 
                        o.x = u.x, o.y = u.y, u.x = o.width * _.a + o.height * _.c, u.y = o.height * _.d + o.width * _.b, 
                        o.width = u.x, o.height = u.y, o.width <= 0 || o.height <= 0) return;
                        g && ue.releaseRT(g), T = ue.getRT(o.width, o.height);
                        var A = g = ue.getRT(o.width, o.height);
                        t._getCacheStyle().filterCache = g, n.pushRT(), n.useRT(T);
                        var E = t.x - b + d, R = t.y - y + d;
                        a._fun.call(a, t, e, E, R), n.useRT(A);
                        for (var S = 0; h > S; S++) {
                            0 != S && (n.useRT(T), n.drawTarget(A, 0, 0, o.width, o.height, m.TEMP.identity(), l, null, te.TOINT.overlay), 
                            n.useRT(A));
                            var M = s[S];
                            switch (M.type) {
                              case 16:
                                M._glRender && M._glRender.render(T, e, o.width, o.height, M);
                                break;

                              case 8:
                                M._glRender && M._glRender.render(T, e, o.width, o.height, M);
                                break;

                              case 32:
                                n.setColorFilter(M), n.drawTarget(T, 0, 0, o.width, o.height, m.EMPTY.identity(), P.create(1, 0)), 
                                n.setColorFilter(null);
                            }
                        }
                        n.popRT();
                    }
                    if (i = i - d - t.x, r = r - d - t.y, u.setTo(i, r), _.transformPoint(u), i = u.x + o.x, 
                    r = u.y + o.y, n._drawRenderTexture(g, i, r, o.width, o.height, m.TEMP.identity(), 1, Fe.defuv), 
                    T) {
                        var w = fe.create([ T ], function(t) {
                            t.destroy();
                        }, this);
                        T = null, e.addRenderObject(w);
                    }
                    _.destroy();
                }
            }, d.prototype.getTexture = function() {
                if (!this._texture) {
                    var t = new Ne();
                    t.loadImageSource(this.source), this._texture = new w(t);
                }
                return this._texture;
            }, Float32Array.prototype.slice || (Float32Array.prototype.slice = e._float32ArraySlice), 
            Uint16Array.prototype.slice || (Uint16Array.prototype.slice = e._uint16ArraySlice), 
            Uint8Array.prototype.slice || (Uint8Array.prototype.slice = e._uint8ArraySlice));
        }, e.enable = function() {
            return o.__init__(), o._supportWebGL ? (e._webglRender_enable(), T.isConchApp && e._nativeRender_enable(), 
            !0) : !1;
        }, e.onStageResize = function(t, i) {
            null != e.mainContext && (e.mainContext.viewport(0, 0, t, i), ce.width = t, ce.height = i);
        }, e.mainContext = null, e.shaderHighPrecision = !1, e._isWebGL2 = !1, e.isNativeRender_enable = !1, 
        e;
    }(), te = function() {
        function t() {}
        return n(t, "laya.webgl.canvas.BlendMode"), t._init_ = function() {
            t.fns = [ t.BlendNormal, t.BlendAdd, t.BlendMultiply, t.BlendScreen, t.BlendOverlay, t.BlendLight, t.BlendMask, t.BlendDestinationOut ], 
            t.targetFns = [ t.BlendNormalTarget, t.BlendAddTarget, t.BlendMultiplyTarget, t.BlendScreenTarget, t.BlendOverlayTarget, t.BlendLightTarget, t.BlendMask, t.BlendDestinationOut ];
        }, t.BlendNormal = function(t) {
            Y.setBlendFunc(t, 1, 771);
        }, t.BlendAdd = function(t) {
            Y.setBlendFunc(t, 1, 772);
        }, t.BlendMultiply = function(t) {
            Y.setBlendFunc(t, 774, 771);
        }, t.BlendScreen = function(t) {
            Y.setBlendFunc(t, 1, 1);
        }, t.BlendOverlay = function(t) {
            Y.setBlendFunc(t, 1, 769);
        }, t.BlendLight = function(t) {
            Y.setBlendFunc(t, 1, 1);
        }, t.BlendNormalTarget = function(t) {
            Y.setBlendFunc(t, 1, 771);
        }, t.BlendAddTarget = function(t) {
            Y.setBlendFunc(t, 1, 772);
        }, t.BlendMultiplyTarget = function(t) {
            Y.setBlendFunc(t, 774, 771);
        }, t.BlendScreenTarget = function(t) {
            Y.setBlendFunc(t, 1, 1);
        }, t.BlendOverlayTarget = function(t) {
            Y.setBlendFunc(t, 1, 769);
        }, t.BlendLightTarget = function(t) {
            Y.setBlendFunc(t, 1, 1);
        }, t.BlendMask = function(t) {
            Y.setBlendFunc(t, 0, 770);
        }, t.BlendDestinationOut = function(t) {
            Y.setBlendFunc(t, 0, 0);
        }, t.activeBlendFunction = null, t.NAMES = [ "normal", "add", "multiply", "screen", "overlay", "light", "mask", "destination-out" ], 
        t.TOINT = {
            normal: 0,
            add: 1,
            multiply: 2,
            screen: 3,
            overlay: 4,
            light: 5,
            mask: 6,
            "destination-out": 7,
            lighter: 1
        }, t.NORMAL = "normal", t.ADD = "add", t.MULTIPLY = "multiply", t.SCREEN = "screen", 
        t.OVERLAY = "overlay", t.LIGHT = "light", t.MASK = "mask", t.DESTINATIONOUT = "destination-out", 
        t.LIGHTER = "lighter", t.fns = [], t.targetFns = [], t;
    }(), ee = function() {
        function t() {
            this._lastOriX = 0, this._lastOriY = 0, this.paths = [], this._curPath = null;
        }
        var e;
        n(t, "laya.webgl.canvas.Path");
        var i = t.prototype;
        return i.beginPath = function(t) {
            this.paths.length = 1, this._curPath = this.paths[0] = new e(), this._curPath.convex = t;
        }, i.closePath = function() {
            this._curPath.loop = !0;
        }, i.newPath = function() {
            this._curPath = new e(), this.paths.push(this._curPath);
        }, i.addPoint = function(t, e) {
            this._curPath.path.push(t, e);
        }, i.push = function(t, i) {
            this._curPath ? this._curPath.path.length > 0 && (this._curPath = new e(), this.paths.push(this._curPath)) : (this._curPath = new e(), 
            this.paths.push(this._curPath));
            var r = this._curPath;
            r.path = t.slice(), r.convex = i;
        }, i.reset = function() {
            this.paths.length = 0;
        }, t.__init$ = function() {
            e = function() {
                function t() {
                    this.path = [], this.loop = !1, this.convex = !1;
                }
                return n(t, ""), t;
            }();
        }, t;
    }(), ie = function() {
        function t() {
            this._glBuffer = null, this._buffer = null, this._bufferType = 0, this._bufferUsage = 0, 
            this._byteLength = 0, this._glBuffer = O.instance.createBuffer();
        }
        n(t, "laya.webgl.utils.Buffer");
        var e = t.prototype;
        return e._bindForVAO = function() {}, e.bind = function() {
            return !1;
        }, e.destroy = function() {
            this._glBuffer && (O.instance.deleteBuffer(this._glBuffer), this._glBuffer = null);
        }, a(0, e, "bufferUsage", function() {
            return this._bufferUsage;
        }), t._bindedVertexBuffer = null, t._bindedIndexBuffer = null, t;
    }(), re = function() {
        function t() {
            this._matrix = new m();
        }
        n(t, "laya.webgl.canvas.save.SaveTransform");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.canvas.save.ISaveData": !0
        }), e.isSaveMark = function() {
            return !1;
        }, e.restore = function(e) {
            e._curMat = this._savematrix, t.POOL[t.POOL._length++] = this;
        }, t.save = function(e) {
            var i = e._saveMark;
            if (2048 !== (2048 & i._saveuse)) {
                i._saveuse |= 2048;
                var r = t.POOL, n = r._length > 0 ? r[--r._length] : new t();
                n._savematrix = e._curMat, e._curMat = e._curMat.copyTo(n._matrix);
                var a = e._save;
                a[a._length++] = n;
            }
        }, t.POOL = I._createArray(), t;
    }(), ne = function() {
        function t() {
            this.ALPHA = 1, this.shaderType = 0, this.defines = new Ae(), this.fillStyle = N.DEFAULT, 
            this.strokeStyle = N.DEFAULT;
        }
        n(t, "laya.webgl.shader.d2.Shader2D");
        var e = t.prototype;
        return e.destroy = function() {
            this.defines = null, this.filters = null;
        }, t.__init__ = function() {
            var t, e;
            t = "/*\n\ttexture和fillrect使用的。\n*/\nattribute vec4 posuv;\nattribute vec4 attribColor;\nattribute vec4 attribFlags;\n//attribute vec4 clipDir;\n//attribute vec2 clipRect;\nuniform vec4 clipMatDir;\nuniform vec2 clipMatPos;\t\t// 这个是全局的，不用再应用矩阵了。\nvarying vec2 cliped;\nuniform vec2 size;\nuniform vec2 clipOff;\t\t\t// 使用要把clip偏移。cacheas normal用. 只用了[0]\n#ifdef WORLDMAT\n\tuniform mat4 mmat;\n#endif\n#ifdef MVP3D\n\tuniform mat4 u_MvpMatrix;\n#endif\nvarying vec4 v_texcoordAlpha;\nvarying vec4 v_color;\nvarying float v_useTex;\n\nvoid main() {\n\n\tvec4 pos = vec4(posuv.xy,0.,1.);\n#ifdef WORLDMAT\n\tpos=mmat*pos;\n#endif\n\tvec4 pos1  =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,0.,1.0);\n#ifdef MVP3D\n\tgl_Position=u_MvpMatrix*pos1;\n#else\n\tgl_Position=pos1;\n#endif\n\tv_texcoordAlpha.xy = posuv.zw;\n\t//v_texcoordAlpha.z = attribColor.a/255.0;\n\tv_color = attribColor/255.0;\n\tv_color.xyz*=v_color.w;//反正后面也要预乘\n\t\n\tv_useTex = attribFlags.r/255.0;\n\tfloat clipw = length(clipMatDir.xy);\n\tfloat cliph = length(clipMatDir.zw);\n\t\n\tvec2 clpos = clipMatPos.xy;\n\t#ifdef WORLDMAT\n\t\t// 如果有mmat，需要修改clipMatPos,因为 这是cacheas normal （如果不是就错了）， clipMatPos被去掉了偏移\n\t\tif(clipOff[0]>0.0){\n\t\t\tclpos.x+=mmat[3].x;\t//tx\t最简单处理\n\t\t\tclpos.y+=mmat[3].y;\t//ty\n\t\t}\n\t#endif\n\tvec2 clippos = pos.xy - clpos;\t//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\n\tif(clipw>20000. && cliph>20000.)\n\t\tcliped = vec2(0.5,0.5);\n\telse {\n\t\t//转成0到1之间。/clipw/clipw 表示clippos与normalize之后的clip朝向点积之后，再除以clipw\n\t\tcliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\n\t}\n\n}", 
            e = "/*\n\ttexture和fillrect使用的。\n*/\n\nprecision mediump float;\n//precision highp float;\nvarying vec4 v_texcoordAlpha;\nvarying vec4 v_color;\nvarying float v_useTex;\nuniform sampler2D texture;\nvarying vec2 cliped;\n\n#ifdef BLUR_FILTER\nuniform vec4 strength_sig2_2sig2_gauss1;\nuniform vec2 blurInfo;\n\n#define PI 3.141593\n\nfloat getGaussian(float x, float y){\n    return strength_sig2_2sig2_gauss1.w*exp(-(x*x+y*y)/strength_sig2_2sig2_gauss1.z);\n}\n\nvec4 blur(){\n    const float blurw = 9.0;\n    vec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\n    vec2 halfsz=vec2(blurw,blurw)/2.0/blurInfo;    \n    vec2 startpos=v_texcoordAlpha.xy-halfsz;\n    vec2 ctexcoord = startpos;\n    vec2 step = 1.0/blurInfo;  //每个像素      \n    \n    for(float y = 0.0;y<=blurw; ++y){\n        ctexcoord.x=startpos.x;\n        for(float x = 0.0;x<=blurw; ++x){\n            //TODO 纹理坐标的固定偏移应该在vs中处理\n            vec4Color += texture2D(texture, ctexcoord)*getGaussian(x-blurw/2.0,y-blurw/2.0);\n            ctexcoord.x+=step.x;\n        }\n        ctexcoord.y+=step.y;\n    }\n    return vec4Color;\n}\n#endif\n\n#ifdef COLOR_FILTER\nuniform vec4 colorAlpha;\nuniform mat4 colorMat;\n#endif\n\n#ifdef GLOW_FILTER\nuniform vec4 u_color;\nuniform vec4 u_blurInfo1;\nuniform vec4 u_blurInfo2;\n#endif\n\n#ifdef COLOR_ADD\nuniform vec4 colorAdd;\n#endif\n\n#ifdef FILLTEXTURE\t\nuniform vec4 u_TexRange;//startu,startv,urange, vrange\n#endif\nvoid main() {\n\tif(cliped.x<0.) discard;\n\tif(cliped.x>1.) discard;\n\tif(cliped.y<0.) discard;\n\tif(cliped.y>1.) discard;\n\t\n#ifdef FILLTEXTURE\t\n   vec4 color= texture2D(texture, fract(v_texcoordAlpha.xy)*u_TexRange.zw + u_TexRange.xy);\n#else\n   vec4 color= texture2D(texture, v_texcoordAlpha.xy);\n#endif\n\n   if(v_useTex<=0.)color = vec4(1.,1.,1.,1.);\n   color.a*=v_color.w;\n   //color.rgb*=v_color.w;\n   color.rgb*=v_color.rgb;\n   gl_FragColor=color;\n   \n   #ifdef COLOR_ADD\n\tgl_FragColor = vec4(colorAdd.rgb,colorAdd.a*gl_FragColor.a);\n\tgl_FragColor.xyz *= colorAdd.a;\n   #endif\n   \n   #ifdef BLUR_FILTER\n\tgl_FragColor =   blur();\n\tgl_FragColor.w*=v_color.w;   \n   #endif\n   \n   #ifdef COLOR_FILTER\n\tmat4 alphaMat =colorMat;\n\n\talphaMat[0][3] *= gl_FragColor.a;\n\talphaMat[1][3] *= gl_FragColor.a;\n\talphaMat[2][3] *= gl_FragColor.a;\n\n\tgl_FragColor = gl_FragColor * alphaMat;\n\tgl_FragColor += colorAlpha/255.0*gl_FragColor.a;\n   #endif\n   \n   #ifdef GLOW_FILTER\n\tconst float c_IterationTime = 10.0;\n\tfloat floatIterationTotalTime = c_IterationTime * c_IterationTime;\n\tvec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\n\tvec2 vec2FilterDir = vec2(-(u_blurInfo1.z)/u_blurInfo2.x,-(u_blurInfo1.w)/u_blurInfo2.y);\n\tvec2 vec2FilterOff = vec2(u_blurInfo1.x/u_blurInfo2.x/c_IterationTime * 2.0,u_blurInfo1.y/u_blurInfo2.y/c_IterationTime * 2.0);\n\tfloat maxNum = u_blurInfo1.x * u_blurInfo1.y;\n\tvec2 vec2Off = vec2(0.0,0.0);\n\tfloat floatOff = c_IterationTime/2.0;\n\tfor(float i = 0.0;i<=c_IterationTime; ++i){\n\t\tfor(float j = 0.0;j<=c_IterationTime; ++j){\n\t\t\tvec2Off = vec2(vec2FilterOff.x * (i - floatOff),vec2FilterOff.y * (j - floatOff));\n\t\t\tvec4Color += texture2D(texture, v_texcoordAlpha.xy + vec2FilterDir + vec2Off)/floatIterationTotalTime;\n\t\t}\n\t}\n\tgl_FragColor = vec4(u_color.rgb,vec4Color.a * u_blurInfo2.z);\n\tgl_FragColor.rgb *= gl_FragColor.a;   \n   #endif\n   \n}", 
            Le.preCompile2D(0, 1, t, e, null), t = "attribute vec4 position;\nattribute vec4 attribColor;\n//attribute vec4 clipDir;\n//attribute vec2 clipRect;\nuniform vec4 clipMatDir;\nuniform vec2 clipMatPos;\n#ifdef WORLDMAT\n\tuniform mat4 mmat;\n#endif\nuniform mat4 u_mmat2;\n//uniform vec2 u_pos;\nuniform vec2 size;\nvarying vec4 color;\n//vec4 dirxy=vec4(0.9,0.1, -0.1,0.9);\n//vec4 clip=vec4(100.,30.,300.,600.);\nvarying vec2 cliped;\nvoid main(){\n\t\n#ifdef WORLDMAT\n\tvec4 pos=mmat*vec4(position.xy,0.,1.);\n\tgl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n#else\n\tgl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\n#endif\t\n\tfloat clipw = length(clipMatDir.xy);\n\tfloat cliph = length(clipMatDir.zw);\n\tvec2 clippos = position.xy - clipMatPos.xy;\t//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\n\tif(clipw>20000. && cliph>20000.)\n\t\tcliped = vec2(0.5,0.5);\n\telse {\n\t\t//clipdir是带缩放的方向，由于上面clippos是在缩放后的空间计算的，所以需要把方向先normalize一下\n\t\tcliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\n\t}\n  //pos2d.x = dot(clippos,dirx);\n  color=attribColor/255.;\n}", 
            e = "precision mediump float;\n//precision mediump float;\nvarying vec4 color;\n//uniform float alpha;\nvarying vec2 cliped;\nvoid main(){\n\t//vec4 a=vec4(color.r, color.g, color.b, 1);\n\t//a.a*=alpha;\n    gl_FragColor= color;// vec4(color.r, color.g, color.b, alpha);\n\tgl_FragColor.rgb*=color.a;\n\tif(cliped.x<0.) discard;\n\tif(cliped.x>1.) discard;\n\tif(cliped.y<0.) discard;\n\tif(cliped.y>1.) discard;\n}", 
            Le.preCompile2D(0, 4, t, e, null), t = "attribute vec2 position;\nattribute vec2 texcoord;\nattribute vec4 color;\nuniform vec2 size;\nuniform float offsetX;\nuniform float offsetY;\nuniform mat4 mmat;\nuniform mat4 u_mmat2;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nvoid main() {\n  vec4 pos=mmat*u_mmat2*vec4(offsetX+position.x,offsetY+position.y,0,1 );\n  gl_Position = vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  v_color = color;\n  v_color.rgb *= v_color.a;\n  v_texcoord = texcoord;  \n}", 
            e = "precision mediump float;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nuniform sampler2D texture;\nuniform float alpha;\nvoid main() {\n\tvec4 t_color = texture2D(texture, v_texcoord);\n\tgl_FragColor = t_color.rgba * v_color;\n\tgl_FragColor *= alpha;\n}", 
            Le.preCompile2D(0, 512, t, e, null);
        }, t;
    }(), ae = function() {
        function t() {
            this._idata = [];
        }
        n(t, "laya.layagl.CommandEncoder");
        var e = t.prototype;
        return e.getArrayData = function() {
            return this._idata;
        }, e.getPtrID = function() {
            return 0;
        }, e.beginEncoding = function() {}, e.endEncoding = function() {}, e.clearEncoding = function() {
            this._idata.length = 0;
        }, e.getCount = function() {
            return this._idata.length;
        }, e.add_ShaderValue = function(t) {
            this._idata.push(t);
        }, e.addShaderUniform = function(t) {
            this.add_ShaderValue(t);
        }, t;
    }(), se = function() {
        function t(t) {
            this.script = null, this.codes = {}, this.funs = {}, this.curUseID = -1, this.funnames = "", 
            this.script = t;
            for (var e = 0, i = 0, r = 0; ;) {
                if (e = t.indexOf("#begin", e), 0 > e) break;
                for (r = e + 5; ;) {
                    if (r = t.indexOf("#end", r), 0 > r) break;
                    if ("i" !== t.charAt(r + 4)) break;
                    r += 5;
                }
                if (0 > r) throw "add include err,no #end:" + t;
                i = t.indexOf("\n", e);
                var n = z.splitToWords(t.substr(e, i - e), null);
                "code" == n[1] ? this.codes[n[2]] = t.substr(i + 1, r - i - 1) : "function" == n[1] && (i = t.indexOf("function", e), 
                i += "function".length, this.funs[n[3]] = t.substr(i + 1, r - i - 1), this.funnames += n[3] + ";"), 
                e = r + 1;
            }
        }
        n(t, "laya.webgl.utils.InlcudeFile");
        var e = t.prototype;
        return e.getWith = function(t) {
            var e = t ? this.codes[t] : this.script;
            if (!e) throw "get with error:" + t;
            return e;
        }, e.getFunsScript = function(t) {
            var e = "";
            for (var i in this.funs) t.indexOf(i + ";") >= 0 && (e += this.funs[i]);
            return e;
        }, t;
    }(), he = (function() {
        function t(t, e) {
            this.submitStartPos = 0, this.submitEndPos = 0, this.context = null, this.touches = [], 
            this.submits = [], this.sprite = null, this._mesh = null, this._pathMesh = null, 
            this._triangleMesh = null, this.meshlist = [], this._oldMesh = null, this._oldPathMesh = null, 
            this._oldTriMesh = null, this._oldMeshList = null, this.oldTx = 0, this.oldTy = 0, 
            this.cachedClipInfo = new m(), this.invMat = new m(), this.context = t, this.sprite = e, 
            t._globalClipMatrix.copyTo(this.cachedClipInfo);
        }
        n(t, "laya.webgl.canvas.WebGLCacheAsNormalCanvas");
        var e = t.prototype;
        return e.startRec = function() {
            this.context._charSubmitCache._enbale && (this.context._charSubmitCache.enable(!1, this.context), 
            this.context._charSubmitCache.enable(!0, this.context)), this.context._incache = !0, 
            this.touches.length = 0, this.context.touches = this.touches, this.context._globalClipMatrix.copyTo(this.cachedClipInfo), 
            this.submits.length = 0, this.submitStartPos = this.context._submits._length;
            for (var t = 0, e = this.meshlist.length; e > t; t++) {
                var i = this.meshlist[t];
                i.canReuse ? i.releaseMesh() : i.destroy();
            }
            this.meshlist.length = 0, this._mesh = ge.getAMesh(), this._pathMesh = be.getAMesh(), 
            this._triangleMesh = ye.getAMesh(), this.meshlist.push(this._mesh), this.meshlist.push(this._pathMesh), 
            this.meshlist.push(this._triangleMesh), this.context._curSubmit = q.RENDERBASE, 
            this._oldMesh = this.context._mesh, this._oldPathMesh = this.context._pathMesh, 
            this._oldTriMesh = this.context._triangleMesh, this._oldMeshList = this.context.meshlist, 
            this.context._mesh = this._mesh, this.context._pathMesh = this._pathMesh, this.context._triangleMesh = this._triangleMesh, 
            this.context.meshlist = this.meshlist, this.oldTx = this.context._curMat.tx, this.oldTy = this.context._curMat.ty, 
            this.context._curMat.tx = 0, this.context._curMat.ty = 0, this.context._curMat.copyTo(this.invMat), 
            this.invMat.invert();
        }, e.endRec = function() {
            this.context._charSubmitCache._enbale && (this.context._charSubmitCache.enable(!1, this.context), 
            this.context._charSubmitCache.enable(!0, this.context));
            var t = this.context._submits;
            this.submitEndPos = t._length;
            for (var e = this.submitEndPos - this.submitStartPos, i = 0; e > i; i++) this.submits.push(t[this.submitStartPos + i]);
            t._length -= e, this.context._mesh = this._oldMesh, this.context._pathMesh = this._oldPathMesh, 
            this.context._triangleMesh = this._oldTriMesh, this.context.meshlist = this._oldMeshList, 
            this.context._curSubmit = q.RENDERBASE, this.context._curMat.tx = this.oldTx, this.context._curMat.ty = this.oldTy, 
            this.context.touches = null, this.context._incache = !1;
        }, e.isCacheValid = function() {
            var t = this.context._globalClipMatrix;
            return t.a != this.cachedClipInfo.a || t.b != this.cachedClipInfo.b || t.c != this.cachedClipInfo.c || t.d != this.cachedClipInfo.d || t.tx != this.cachedClipInfo.tx || t.ty != this.cachedClipInfo.ty ? !1 : !0;
        }, e.flushsubmit = function() {
            var t = q.RENDERBASE;
            this.submits.forEach(function(e) {
                e != q.RENDERBASE && (q.preRender = t, t = e, e.renderSubmit());
            });
        }, e.releaseMem = function() {}, r(t, [ "matI", function() {
            return this.matI = new m();
        } ]), t;
    }(), function() {
        function t(t, e, i) {
            this.i = null, this.x = null, this.y = null, this.prev = null, this.next = null, 
            this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = null, this.i = t, 
            this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, 
            this.nextZ = null, this.steiner = !1;
        }
        return n(t, "laya.webgl.shapes.EarcutNode"), t;
    }()), oe = function() {
        function t() {}
        return n(t, "laya.webgl.shapes.BasePoly"), t.createLine2 = function(e, i, r, n, a, s) {
            if (e.length < 4) return null;
            var h = t.tempData.length > e.length + 2 ? t.tempData : new Array(e.length + 2);
            h[0] = e[0], h[1] = e[1];
            var o = 2, l = 0, u = e.length;
            for (l = 2; u > l; l += 2) Math.abs(e[l] - e[l - 2]) + Math.abs(e[l + 1] - e[l - 1]) > .01 && (h[o++] = e[l], 
            h[o++] = e[l + 1]);
            s && Math.abs(e[0] - h[o - 2]) + Math.abs(e[1] - h[o - 1]) > .01 && (h[o++] = e[0], 
            h[o++] = e[1]);
            var c = a;
            u = o / 2;
            var _, f, d, p, m, x, v, T, g, b, y, A, E, R, S, M, w, C, I, P, B, D = r / 2;
            d = h[0], p = h[1], m = h[2], x = h[3], g = -(p - x), b = d - m, B = Math.sqrt(g * g + b * b), 
            g = g / B * D, b = b / B * D;
            for (c.push(d - g, p - b, d + g, p + b), l = 1; u - 1 > l; l++) d = h[2 * (l - 1)], 
            p = h[2 * (l - 1) + 1], m = h[2 * l], x = h[2 * l + 1], v = h[2 * (l + 1)], T = h[2 * (l + 1) + 1], 
            g = -(p - x), b = d - m, B = Math.sqrt(g * g + b * b), g = g / B * D, b = b / B * D, 
            y = -(x - T), A = m - v, B = Math.sqrt(y * y + A * A), y = y / B * D, A = A / B * D, 
            E = -b + p - (-b + x), R = -g + m - (-g + d), S = (-g + d) * (-b + x) - (-g + m) * (-b + p), 
            M = -A + T - (-A + x), w = -y + m - (-y + v), C = (-y + v) * (-A + x) - (-y + m) * (-A + T), 
            I = E * w - M * R, Math.abs(I) < .1 ? (I += 10.1, c.push(m - g, x - b, m + g, x + b)) : (_ = (R * C - w * S) / I, 
            f = (M * S - E * C) / I, P = (_ - m) * (_ - m) + (f - x) + (f - x), c.push(_, f, m - (_ - m), x - (f - x)));
            for (d = h[o - 4], p = h[o - 3], m = h[o - 2], x = h[o - 1], g = -(p - x), b = d - m, 
            B = Math.sqrt(g * g + b * b), g = g / B * D, b = b / B * D, c.push(m - g, x - b, m + g, x + b), 
            l = 1; u > l; l++) i.push(n + 2 * (l - 1), n + 2 * (l - 1) + 1, n + 2 * l + 1, n + 2 * l + 1, n + 2 * l, n + 2 * (l - 1));
            return c;
        }, t.createLineTriangle = function(t, e, i, r) {
            var n = t.slice(), a = n.length, s = n[0], h = n[1], o = n[2], l = n[2], u = 0, c = 0, _ = 0, f = 0, d = a / 2;
            if (!(1 >= d) && 2 != d) {
                for (var p = new Array(4 * d), m = 0, x = 0, v = 0; d - 1 > v; v++) s = n[x++], 
                h = n[x++], o = n[x++], l = n[x++], _ = o - s, f = l - h, 0 != _ && 0 != f && (u = Math.sqrt(_ * _ + f * f), 
                u > .001 && (c = 4 * m, p[c] = s, p[c + 1] = h, p[c + 2] = _ / u, p[c + 3] = f / u, 
                m++));
                for (r ? (s = n[a - 2], h = n[a - 1], o = n[0], l = n[1], _ = o - s, f = l - h, 
                0 != _ && 0 != f && (u = Math.sqrt(_ * _ + f * f), u > .001 && (c = 4 * m, p[c] = s, 
                p[c + 1] = h, p[c + 2] = _ / u, p[c + 3] = f / u, m++))) : (c = 4 * m, p[c] = s, 
                p[c + 1] = h, p[c + 2] = _ / u, p[c + 3] = f / u, m++), x = 0, v = 0; d > v; v++) {
                    s = n[x], h = n[x + 1], o = n[x + 2], l = n[x + 3];
                    {
                        n[x + 4], n[x + 5];
                    }
                }
            }
        }, r(t, [ "tempData", function() {
            return this.tempData = new Array(256);
        } ]), t;
    }(), le = function() {
        function t() {
            this._data = [], this._ndata = 0, this._tex = null, this._imgId = 0, this._clipid = -1, 
            this._enbale = !1, this._colorFiler = null, this._clipMatrix = new m();
        }
        n(t, "laya.webgl.text.CharSubmitCache");
        var e = t.prototype;
        return e.clear = function() {
            this._tex = null, this._imgId = -1, this._ndata = 0, this._enbale = !1, this._colorFiler = null;
        }, e.destroy = function() {
            this.clear(), this._data.length = 0, this._data = null;
        }, e.add = function(t, e, i, r, n, a) {
            this._ndata > 0 && (this._tex != e || this._imgId != i || this._clipid >= 0 && this._clipid != t._clipInfoID) && this.submit(t), 
            this._clipid = t._clipInfoID, t._globalClipMatrix.copyTo(this._clipMatrix), this._tex = e, 
            this._imgId = i, this._colorFiler = t._colorFiler, this._data[this._ndata] = r, 
            this._data[this._ndata + 1] = n, this._data[this._ndata + 2] = a, this._ndata += 3;
        }, e.getPos = function() {
            return 0 == t.__nPosPool ? new Array(8) : t.__posPool[--t.__nPosPool];
        }, e.enable = function(t, e) {
            t !== this._enbale && (this._enbale = t, this._enbale || this.submit(e));
        }, e.submit = function(e) {
            var i = this._ndata;
            if (i) {
                var r = e._mesh, n = e._colorFiler;
                e._colorFiler = this._colorFiler;
                var a = Ce.create(e, r, P.create(1, 0));
                e._submits[e._submits._length++] = e._curSubmit = a, a.shaderValue.textureHost = this._tex, 
                a._key.other = this._imgId, e._colorFiler = n, e._copyClipInfo(a, this._clipMatrix), 
                a.clipInfoID = this._clipid;
                for (var s = 0; i > s; s += 3) r.addQuad(this._data[s], this._data[s + 1], this._data[s + 2], !0), 
                t.__posPool[t.__nPosPool++] = this._data[s];
                i /= 3, a._numEle += 6 * i, r.indexNum += 6 * i, r.vertNum += 4 * i, e._drawCount += i, 
                this._ndata = 0, R.loopCount % 100 == 0 && (this._data.length = 0);
            }
        }, t.__posPool = [], t.__nPosPool = 0, t;
    }(), ue = function() {
        function t() {}
        return n(t, "laya.webgl.resource.WebGLRTMgr"), t.getRT = function(e, i) {
            e = 0 | e, i = 0 | i, e >= 1e4 && console.error("getRT error! w too big");
            var r, n = 1e4 * i + e, a = t.dict[n];
            return a && a.length > 0 ? (r = a.pop(), r._mgrKey = n, r) : (r = new Fe(e, i, 1, -1), 
            r._mgrKey = n, r);
        }, t.releaseRT = function(e) {
            if (!(e._mgrKey <= 0)) {
                var i = t.dict[e._mgrKey];
                !i && (i = [], t.dict[e._mgrKey] = i), e._mgrKey = 0, i.push(e);
            }
        }, t.dict = {}, t;
    }(), ce = function() {
        function t() {}
        return n(t, "laya.webgl.utils.RenderState2D"), t.mat2MatArray = function(e, i) {
            var r = e, n = i;
            return n[0] = r.a, n[1] = r.b, n[2] = t.EMPTYMAT4_ARRAY[2], n[3] = t.EMPTYMAT4_ARRAY[3], 
            n[4] = r.c, n[5] = r.d, n[6] = t.EMPTYMAT4_ARRAY[6], n[7] = t.EMPTYMAT4_ARRAY[7], 
            n[8] = t.EMPTYMAT4_ARRAY[8], n[9] = t.EMPTYMAT4_ARRAY[9], n[10] = t.EMPTYMAT4_ARRAY[10], 
            n[11] = t.EMPTYMAT4_ARRAY[11], n[12] = r.tx, n[13] = r.ty, n[14] = t.EMPTYMAT4_ARRAY[14], 
            n[15] = t.EMPTYMAT4_ARRAY[15], i;
        }, t.restoreTempArray = function() {
            t.TEMPMAT4_ARRAY[0] = 1, t.TEMPMAT4_ARRAY[1] = 0, t.TEMPMAT4_ARRAY[4] = 0, t.TEMPMAT4_ARRAY[5] = 1, 
            t.TEMPMAT4_ARRAY[12] = 0, t.TEMPMAT4_ARRAY[13] = 0;
        }, t.clear = function() {
            t.worldScissorTest = !1, t.worldAlpha = 1;
        }, t._MAXSIZE = 99999999, t.EMPTYMAT4_ARRAY = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], 
        t.TEMPMAT4_ARRAY = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], t.worldMatrix4 = t.TEMPMAT4_ARRAY, 
        t.matWVP = null, t.worldAlpha = 1, t.worldScissorTest = !1, t.worldShaderDefines = null, 
        t.worldFilters = null, t.width = 0, t.height = 0, r(t, [ "worldMatrix", function() {
            return this.worldMatrix = new m();
        } ]), t;
    }(), _e = (function() {
        function t() {
            this._renderType = 0, this._repaint = 0, this._x = 0 / 0, this._y = 0 / 0;
        }
        n(t, "laya.layagl.QuickTestTool");
        var e = t.prototype;
        return e.render = function(e, i, r) {
            t._addType(this._renderType), t.showRenderTypeInfo(this._renderType), g.renders[this._renderType]._fun(this, e, i + this._x, r + this._y), 
            this._repaint = 0;
        }, e._stageRender = function(e, r, n) {
            t._countStart(), t._PreStageRender.call(i.stage, e, r, n), t._countEnd();
        }, t.getMCDName = function(e) {
            return t._typeToNameDic[e];
        }, t.showRenderTypeInfo = function(e, i) {
            if (void 0 === i && (i = !1), i || !t.showedDic[e]) {
                if (t.showedDic[e] = !0, !t._rendertypeToStrDic[e]) {
                    var r = [], n = 0;
                    for (n = 1; e >= n; ) n & e && r.push(t.getMCDName(n & e)), n <<= 1;
                    t._rendertypeToStrDic[e] = r.join(",");
                }
                console.log("cmd:", t._rendertypeToStrDic[e]);
            }
        }, t.__init__ = function() {
            t._typeToNameDic[1] = "ALPHA", t._typeToNameDic[2] = "TRANSFORM", t._typeToNameDic[256] = "TEXTURE", 
            t._typeToNameDic[512] = "GRAPHICS", t._typeToNameDic[4096] = "ONECHILD", t._typeToNameDic[8192] = "CHILDS", 
            t._typeToNameDic[3] = "TRANSFORM|ALPHA", t._typeToNameDic[8] = "CANVAS", t._typeToNameDic[4] = "BLEND", 
            t._typeToNameDic[16] = "FILTERS", t._typeToNameDic[32] = "MASK", t._typeToNameDic[64] = "CLIP", 
            t._typeToNameDic[1024] = "LAYAGL3D";
        }, t._countStart = function() {
            var e;
            for (e in t._countDic) t._countDic[e] = 0;
        }, t._countEnd = function() {
            t._i++, t._i > 60 && (t.showCountInfo(), t._i = 0);
        }, t._addType = function(e) {
            t._countDic[e] ? t._countDic[e] += 1 : t._countDic[e] = 1;
        }, t.showCountInfo = function() {
            console.log("===================");
            var e;
            for (e in t._countDic) console.log("count:" + t._countDic[e]), t.showRenderTypeInfo(e, !0);
        }, t.enableQuickTest = function() {
            t.__init__(), A.prototype.render = t.prototype.render, t._PreStageRender = E.prototype.render, 
            E.prototype.render = t.prototype._stageRender;
        }, t.showedDic = {}, t._rendertypeToStrDic = {}, t._typeToNameDic = {}, t._PreStageRender = null, 
        t._countDic = {}, t._i = 0, t;
    }(), function() {
        function t() {
            this.blendShader = 0, this.submitType = 0, this.other = 0, this.clear();
        }
        n(t, "laya.webgl.submit.SubmitKey");
        var e = t.prototype;
        return e.clear = function() {
            this.submitType = -1, this.blendShader = this.other = 0;
        }, e.copyFrom = function(t) {
            this.other = t.other, this.blendShader = t.blendShader, this.submitType = t.submitType;
        }, e.copyFrom2 = function(t, e, i) {
            this.other = i, this.submitType = e;
        }, e.equal3_2 = function(t, e, i) {
            return this.submitType === e && this.other === i && this.blendShader === t.blendShader;
        }, e.equal4_2 = function(t, e, i) {
            return this.submitType === e && this.other === i && this.blendShader === t.blendShader;
        }, e.equal_3 = function(t) {
            return this.submitType === t.submitType && this.blendShader === t.blendShader;
        }, e.equal = function(t) {
            return this.other === t.other && this.submitType === t.submitType && this.blendShader === t.blendShader;
        }, t;
    }()), fe = (function() {
        function t(t) {
            this._par = null, this._loaded = !0, this.bitmap = {}, this.bitmap.id = t.id, this._par = t;
        }
        n(t, "laya.webgl.resource.CharInternalTexture");
        var e = t.prototype;
        return e._getSource = function() {
            return this._par._source;
        }, t;
    }(), function() {
        function t() {
            this.fun = null, this._this = null, this.args = null, this._ref = 1, this._key = new _e();
        }
        n(t, "laya.webgl.submit.SubmitCMD");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.submit.ISubmit": !0
        }), e.renderSubmit = function() {
            return this.fun.apply(this._this, this.args), 1;
        }, e.getRenderType = function() {
            return 0;
        }, e.reUse = function(t, e) {
            return this._ref++, e;
        }, e.releaseRender = function() {
            if (--this._ref < 1) {
                var e = t.POOL;
                e[e._length++] = this;
            }
        }, e.clone = function() {
            return null;
        }, t.create = function(e, i, r) {
            var n = t.POOL._length ? t.POOL[--t.POOL._length] : new t();
            return n.fun = i, n.args = e, n._this = r, n._ref = 1, n._key.clear(), n;
        }, t.POOL = (t.POOL = [], t.POOL._length = 0, t.POOL), t;
    }()), de = function() {
        function t() {
            this.texWidth = 1024, this.texHeight = 1024, this.atlasgrid = null, this.protectDist = 1, 
            this.texture = null, this.charMaps = {}, this.texHeight = this.texWidth = U.atlasWidth, 
            this.texture = Pe.getTextTexture(this.texWidth, this.texHeight), this.texWidth / t.atlasGridW > 256 && (t.atlasGridW = Math.ceil(this.texWidth / 256)), 
            this.atlasgrid = new L(this.texWidth / t.atlasGridW, this.texHeight / t.atlasGridW, this.texture.id);
        }
        n(t, "laya.webgl.text.TextAtlas");
        var e = t.prototype;
        return e.setProtecteDist = function(t) {
            this.protectDist = t;
        }, e.getAEmpty = function(e, i, r) {
            var n = this.atlasgrid.addRect(1, Math.ceil(e / t.atlasGridW), Math.ceil(i / t.atlasGridW), r);
            return n && (r.x *= t.atlasGridW, r.y *= t.atlasGridW), n;
        }, e.destroy = function() {
            for (var t in this.charMaps) {
                var e = this.charMaps[t];
                e.deleted = !0;
            }
            this.texture.discard();
        }, e.printDebugInfo = function() {}, a(0, e, "usedRate", function() {
            return this.atlasgrid._used;
        }), t.atlasGridW = 16, t;
    }(), pe = function(t) {
        function e(t, i) {
            e.__super.call(this, t, i);
        }
        n(e, "laya.webgl.utils.RenderSprite3D", t);
        var i = e.prototype;
        return i.onCreate = function(t) {
            switch (t) {
              case 4:
                return this._fun = this._blend, void 0;
            }
        }, i._mask = function(t, e, i, r) {
            var n = this._next, a = t.mask, s = e;
            if (a) {
                s.save();
                var h = s.globalCompositeOperation, o = new v();
                if (o.copyFrom(a.getBounds()), o.width = Math.round(o.width), o.height = Math.round(o.height), 
                o.x = Math.round(o.x), o.y = Math.round(o.y), o.width > 0 && o.height > 0) {
                    var l = o.width, u = o.height, c = ue.getRT(l, u);
                    s.breakNextMerge(), s.pushRT(), s.addRenderObject(fe.create([ s, c, l, u ], laya.webgl.utils.RenderSprite3D.tmpTarget, this)), 
                    a.render(s, -o.x, -o.y), s.breakNextMerge(), s.popRT(), s.save(), s.clipRect(i + o.x - t.getStyle().pivotX, r + o.y - t.getStyle().pivotY, l, u), 
                    n._fun.call(n, t, s, i, r), s.restore(), h = s.globalCompositeOperation, s.addRenderObject(fe.create([ "mask" ], laya.webgl.utils.RenderSprite3D.setBlendMode, this));
                    var _ = P.create(1, 0), f = w.INV_UV;
                    s.drawTarget(c, i + o.x - t.getStyle().pivotX, r + o.y - t.getStyle().pivotY, l, u, m.TEMP.identity(), _, f, 6), 
                    s.addRenderObject(fe.create([ c ], laya.webgl.utils.RenderSprite3D.recycleTarget, this)), 
                    s.addRenderObject(fe.create([ h ], laya.webgl.utils.RenderSprite3D.setBlendMode, this));
                }
                s.restore();
            } else n._fun.call(n, t, e, i, r);
        }, i._blend = function(t, e, i, r) {
            var n = t._style, a = this._next;
            n.blendMode ? (e.save(), e.globalCompositeOperation = n.blendMode, a._fun.call(a, t, e, i, r), 
            e.restore()) : a._fun.call(a, t, e, i, r);
        }, e.tmpTarget = function(t, e) {
            e.start(), e.clear(0, 0, 0, 0);
        }, e.recycleTarget = function(t) {
            ue.releaseRT(t);
        }, e.setBlendMode = function(t) {
            var e = J.mainContext;
            te.targetFns[te.TOINT[t]](e);
        }, r(e, [ "tempUV", function() {
            return this.tempUV = new Array(8);
        } ]), e;
    }(g), me = function(t) {
        function e() {
            if (this._drawTriUseAbsMatrix = !1, this._id = ++e._COUNT, this._other = null, this._renderNextSubmitIndex = 0, 
            this._path = null, this._drawCount = 1, this._renderCount = 0, this._isConvexCmd = !0, 
            this._submits = null, this._curSubmit = null, this._mesh = null, this._pathMesh = null, 
            this._triangleMesh = null, this.meshlist = [], this._clipInCache = !1, this._clipInfoID = 0, 
            this._curMat = null, this._lastMatScaleX = 1, this._lastMatScaleY = 1, this._lastMat_a = 1, 
            this._lastMat_b = 0, this._lastMat_c = 0, this._lastMat_d = 1, this._nBlendType = 0, 
            this._save = null, this._targets = null, this._charSubmitCache = null, this._saveMark = null, 
            this.sprite = null, this._drawTextureUseColor = !1, this._italicDeg = 0, this._lastTex = null, 
            this._fillColor = 0, this._flushCnt = 0, this._colorFiler = null, this.drawTexAlign = !1, 
            this._incache = !1, this.mId = -1, this.mHaveKey = !1, this.mHaveLineKey = !1, e.__super.call(this), 
            this._tmpMatrix = new m(), this._drawTexToDrawTri_Vert = new Float32Array(8), this._drawTexToDrawTri_Index = new Uint16Array([ 0, 1, 2, 0, 2, 3 ]), 
            this._tempUV = new Float32Array(8), this._width = 99999999, this._height = 99999999, 
            this._submitKey = new _e(), this._transedPoints = new Array(8), this._temp4Points = new Array(8), 
            this._clipRect = e.MAXCLIPRECT, this._globalClipMatrix = new m(99999999, 0, 0, 99999999, 0, 0), 
            this._shader2D = new ne(), this.mOutPoint, e._contextcount++, !e.defTexture) {
                var t = new Ne(2, 2);
                t.setPixels(new Uint8Array(16)), t.lock = !0, e.defTexture = new w(t);
            }
            this._lastTex = e.defTexture, this.clear();
        }
        var h;
        n(e, "laya.webgl.canvas.WebGLContext2D", t);
        var o = e.prototype;
        return o.clearBG = function(t, e, i, r) {
            var n = J.mainContext;
            n.clearColor(t, e, i, r), n.clear(16384);
        }, o._getSubmits = function() {
            return this._submits;
        }, o._releaseMem = function() {
            if (this._submits) {
                this._curMat.destroy(), this._curMat = null, this._shader2D.destroy(), this._shader2D = null, 
                this._charSubmitCache.clear();
                for (var t = 0, e = this._submits._length; e > t; t++) this._submits[t].releaseRender();
                this._submits.length = 0, this._submits._length = 0, this._submits = null, this._curSubmit = null, 
                this._path = null, this._save = null;
                var i = 0;
                for (t = 0, i = this.meshlist.length; i > t; t++) {
                    var r = this.meshlist[t];
                    r.destroy();
                }
                this.meshlist.length = 0, this.sprite = null, this._targets && this._targets.destroy(), 
                this._targets = null;
            }
        }, o.destroy = function() {
            --e._contextcount, this.sprite = null, this._releaseMem(), this._charSubmitCache.destroy(), 
            this._targets && this._targets.destroy(), this._targets = null, this._mesh.destroy();
        }, o.clear = function() {
            this._submits || (this._other = h.DEFAULT, this._curMat = m.create(), this._charSubmitCache = new le(), 
            this._mesh = ge.getAMesh(), this.meshlist.push(this._mesh), this._pathMesh = be.getAMesh(), 
            this.meshlist.push(this._pathMesh), this._triangleMesh = ye.getAMesh(), this.meshlist.push(this._triangleMesh), 
            this._submits = [], this._save = [ V.Create(this) ], this._save.length = 10, this._shader2D = new ne()), 
            this._submitKey.clear(), this._mesh.clearVB(), this._renderCount++, this._drawCount = 1, 
            this._other = h.DEFAULT, this._other.lineWidth = this._shader2D.ALPHA = 1, this._nBlendType = 0, 
            this._clipRect = e.MAXCLIPRECT, this._curSubmit = q.RENDERBASE, q.RENDERBASE._ref = 16777215, 
            q.RENDERBASE._numEle = 0, this._shader2D.fillStyle = this._shader2D.strokeStyle = N.DEFAULT;
            for (var t = 0, i = this._submits._length; i > t; t++) this._submits[t].releaseRender();
            this._submits._length = 0, this._curMat.identity(), this._other.clear(), this._saveMark = this._save[0], 
            this._save._length = 1;
        }, o.size = function(t, e) {
            (this._width != t || this._height != e) && (this._width = t, this._height = e, this._targets && (this._targets.destroy(), 
            this._targets = new Fe(t, e, 1, -1)), T._context == this && (J.mainContext.viewport(0, 0, t, e), 
            ce.width = t, ce.height = e)), 0 === t && 0 === e && this._releaseMem();
        }, o.getMatScaleX = function() {
            return this._lastMat_a == this._curMat.a && this._lastMat_b == this._curMat.b ? this._lastMatScaleX : (this._lastMatScaleX = this._curMat.getScaleX(), 
            this._lastMat_a = this._curMat.a, this._lastMat_b = this._curMat.b, this._lastMatScaleX);
        }, o.getMatScaleY = function() {
            return this._lastMat_c == this._curMat.c && this._lastMat_d == this._curMat.d ? this._lastMatScaleY : (this._lastMatScaleY = this._curMat.getScaleY(), 
            this._lastMat_c = this._curMat.c, this._lastMat_d = this._curMat.d, this._lastMatScaleY);
        }, o.setFillColor = function(t) {
            this._fillColor = t;
        }, o.getFillColor = function() {
            return this._fillColor;
        }, o.translate = function(t, e) {
            (0 !== t || 0 !== e) && (K.save(this), this._curMat._bTransform ? (re.save(this), 
            this._curMat.tx += t * this._curMat.a + e * this._curMat.c, this._curMat.ty += t * this._curMat.b + e * this._curMat.d) : (this._curMat.tx = t, 
            this._curMat.ty = e));
        }, o.save = function() {
            this._save[this._save._length++] = V.Create(this);
        }, o.restore = function() {
            var t = this._save._length, e = this._nBlendType;
            if (!(1 > t)) {
                for (var i = t - 1; i >= 0; i--) {
                    var r = this._save[i];
                    if (r.restore(this), r.isSaveMark()) return this._save._length = i, void 0;
                }
                e != this._nBlendType && (this._curSubmit = q.RENDERBASE);
            }
        }, o.fillText = function(t, e, i, r, n) {
            this._fillText(t, null, e, i, r, n, null, 0, null);
        }, o._fillText = function(t, i, r, n, a, s, h, o, l, u) {
            void 0 === u && (u = 0), t ? e._textRender.filltext(this, t, r, n, a, s, h, o, l, u) : i && e._textRender.fillWords(this, i, r, n, a, s, h, o);
        }, o._fast_filltext = function(t, i, r, n, a, s, h, o, l) {
            void 0 === l && (l = 0), e._textRender._fast_filltext(this, t, null, i, r, n, a, s, h, o, l);
        }, o.fillWords = function(t, e, i, r, n) {
            this._fillText(null, t, e, i, r, n, null, -1, null, 0);
        }, o.fillBorderWords = function(t, e, i, r, n, a, s) {
            this._fillBorderText(null, t, e, i, r, n, a, s, null);
        }, o.drawText = function(t, e, i, r, n, a) {
            this._fillText(t, null, e, i, r, l.create(n).strColor, null, -1, a);
        }, o.strokeWord = function(t, e, i, r, n, a, s) {
            this._fillText(t, null, e, i, r, null, l.create(n).strColor, a || 1, s);
        }, o.fillBorderText = function(t, e, i, r, n, a, s, h) {
            this._fillBorderText(t, null, e, i, r, l.create(n).strColor, l.create(a).strColor, s, h);
        }, o._fillBorderText = function(t, e, i, r, n, a, s, h, o) {
            this._fillText(t, e, i, r, n, a, s, h || 1, o);
        }, o._fillRect = function(t, e, i, r, n) {
            var a = this._curSubmit, s = a && 2 === a._key.submitType && a._key.blendShader === this._nBlendType;
            this._mesh.vertNum + 4 > 65535 && (this._mesh = ge.getAMesh(), this.meshlist.push(this._mesh), 
            s = !1), s && (s = s && this.isSameClipInfo(a)), this.transformQuad(t, e, i, r, 0, this._curMat, this._transedPoints), 
            this.clipedOff(this._transedPoints) || (this._mesh.addQuad(this._transedPoints, w.NO_UV, n, !1), 
            s || (a = this._curSubmit = Ce.create(this, this._mesh, P.create(1, 0)), this._submits[this._submits._length++] = a, 
            this._copyClipInfo(a, this._globalClipMatrix), a.shaderValue.textureHost = this._lastTex, 
            a._key.other = this._lastTex && this._lastTex.bitmap ? this._lastTex.bitmap.id : -1, 
            a._renderType = 10016), this._curSubmit._numEle += 6, this._mesh.indexNum += 6, 
            this._mesh.vertNum += 4);
        }, o.fillRect = function(t, e, i, r, n) {
            var a = n ? N.create(n) : this._shader2D.fillStyle, s = this.mixRGBandAlpha(a.toInt());
            this._fillRect(t, e, i, r, s);
        }, o.fillTexture = function(t, e, r, n, a, s, h) {
            return t._getSource() ? (this._fillTexture(t, t.width, t.height, t.uvrect, e, r, n, a, s, h.x, h.y), 
            void 0) : (this.sprite && i.systemTimer.callLater(this, this._repaintSprite), void 0);
        }, o._fillTexture = function(t, e, i, r, n, a, s, h, o, l, u) {
            var c = this._curSubmit, _ = !1;
            this._mesh.vertNum + 4 > 65535 && (this._mesh = ge.getAMesh(), this.meshlist.push(this._mesh), 
            _ = !1);
            var f = !0, d = !0;
            switch (o) {
              case "repeat":
                break;

              case "repeat-x":
                d = !1;
                break;

              case "repeat-y":
                f = !1;
                break;

              case "no-repeat":
                f = d = !1;
            }
            var p = this._temp4Points, m = 0, x = 0, v = 0, T = 0, g = 0, b = 0;
            if (0 > l ? (v = n, m = -l % e / e) : v = n + l, 0 > u ? (T = a, x = -u % i / i) : T = a + u, 
            g = n + s, b = a + h, !f && (g = Math.min(g, n + l + e)), !d && (b = Math.min(b, a + u + i)), 
            !(n > g || a > b || v > g || T > b)) {
                var y = (g - n - l) / e, A = (b - a - u) / i;
                if (this.transformQuad(v, T, g - v, b - T, 0, this._curMat, this._transedPoints), 
                p[0] = m, p[1] = x, p[2] = y, p[3] = x, p[4] = y, p[5] = A, p[6] = m, p[7] = A, 
                !this.clipedOff(this._transedPoints)) {
                    var E = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA);
                    this._mesh.addQuad(this._transedPoints, p, E, !0);
                    var R = P.create(1, 0);
                    R.defines.add(256), R.u_TexRange = r, c = this._curSubmit = Ce.create(this, this._mesh, R), 
                    this._submits[this._submits._length++] = c, this._copyClipInfo(c, this._globalClipMatrix), 
                    c.shaderValue.textureHost = t, c._renderType = 10016, this._curSubmit._numEle += 6, 
                    this._mesh.indexNum += 6, this._mesh.vertNum += 4;
                }
                this.breakNextMerge();
            }
        }, o.setColorFilter = function(t) {
            I.save(this, 8388608, this, !0), this._colorFiler = t, this._curSubmit = q.RENDERBASE;
        }, o.drawTexture = function(t, e, i, r, n) {
            this._drawTextureM(t, e, i, r, n, null, 1, null);
        }, o.drawTextures = function(t, e, r, n) {
            if (!t._getSource()) return this.sprite && i.systemTimer.callLater(this, this._repaintSprite), 
            void 0;
            for (var a = e.length / 2, s = 0, h = t.bitmap.id, o = 0; a > o; o++) this._inner_drawTexture(t, h, e[s++] + r, e[s++] + n, 0, 0, null, null, 1, !1);
        }, o._drawTextureAddSubmit = function(t, e) {
            var i = null;
            i = Ce.create(this, this._mesh, P.create(1, 0)), this._submits[this._submits._length++] = i, 
            i.shaderValue.textureHost = e, i._key.other = t, i._renderType = 10016, this._curSubmit = i;
        }, o._drawTextureM = function(t, e, r, n, a, s, h, o) {
            return t._getSource() ? this._inner_drawTexture(t, t.bitmap.id, e, r, n, a, s, o, h, !1) : (this.sprite && i.systemTimer.callLater(this, this._repaintSprite), 
            !1);
        }, o._drawRenderTexture = function(t, e, i, r, n, a, s, h) {
            return this._inner_drawTexture(t, -1, e, i, r, n, a, h, 1, !1);
        }, o.submitDebugger = function() {
            this._submits[this._submits._length++] = fe.create([], function() {}, this);
        }, o._copyClipInfo = function(t, e) {
            var i = t.shaderValue.clipMatDir;
            i[0] = e.a, i[1] = e.b, i[2] = e.c, i[3] = e.d;
            var r = t.shaderValue.clipMatPos;
            r[0] = e.tx, r[1] = e.ty, t.clipInfoID = this._clipInfoID, this._clipInCache && (t.shaderValue.clipOff[0] = 1);
        }, o.isSameClipInfo = function(t) {
            return t.clipInfoID === this._clipInfoID;
        }, o._useNewTex2DSubmit = function(t, e) {
            this._mesh.vertNum + e > 65535 && (this._mesh = ge.getAMesh(), this.meshlist.push(this._mesh));
            var i = Ce.create(this, this._mesh, P.create(1, 0));
            this._submits[this._submits._length++] = this._curSubmit = i, i.shaderValue.textureHost = t, 
            this._copyClipInfo(i, this._globalClipMatrix);
        }, o._drawTexRect = function(t, e, i, r, n) {
            this.transformQuad(t, e, i, r, this._italicDeg, this._curMat, this._transedPoints);
            var a = this._transedPoints;
            a[0] = a[0] + .5 | 0, a[1] = a[1] + .5 | 0, a[2] = a[2] + .5 | 0, a[3] = a[3] + .5 | 0, 
            a[4] = a[4] + .5 | 0, a[5] = a[5] + .5 | 0, a[6] = a[6] + .5 | 0, a[7] = a[7] + .5 | 0, 
            this.clipedOff(this._transedPoints) || (this._mesh.addQuad(this._transedPoints, n, this._fillColor, !0), 
            this._curSubmit._numEle += 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4);
        }, o.drawCallOptimize = function(t) {
            return this._charSubmitCache.enable(t, this), t;
        }, o._inner_drawTexture = function(t, e, i, r, n, a, s, h, o, l) {
            var u = this._curSubmit._key;
            if (h = h || t._uv, 4 === u.submitType && u.other === e) {
                var c = this._drawTexToDrawTri_Vert;
                c[0] = i, c[1] = r, c[2] = i + n, c[3] = r, c[4] = i + n, c[5] = r + a, c[6] = i, 
                c[7] = r + a, this._drawTriUseAbsMatrix = !0;
                var _ = this._tempUV;
                return _[0] = h[0], _[1] = h[1], _[2] = h[2], _[3] = h[3], _[4] = h[4], _[5] = h[5], 
                _[6] = h[6], _[7] = h[7], this.drawTriangles(t, 0, 0, c, _, this._drawTexToDrawTri_Index, s, o, null, null), 
                this._drawTriUseAbsMatrix = !1, !0;
            }
            var f = this._mesh, d = this._curSubmit, p = l ? this._charSubmitCache.getPos() : this._transedPoints;
            if (this.transformQuad(i, r, n || t.width, a || t.height, this._italicDeg, s || this._curMat, p), 
            this.drawTexAlign) {
                var m = Math.round;
                p[0] = m(p[0]), p[1] = m(p[1]), p[2] = m(p[2]), p[3] = m(p[3]), p[4] = m(p[4]), 
                p[5] = m(p[5]), p[6] = m(p[6]), p[7] = m(p[7]), this.drawTexAlign = !1;
            }
            var x = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA * o);
            if (l) return this._charSubmitCache.add(this, t, e, p, h, x), !0;
            this._drawCount++;
            var v = e >= 0 && 2 === u.submitType && u.other === e;
            return v && (v = v && this.isSameClipInfo(d)), this._lastTex = t, f.vertNum + 4 > 65535 && (f = this._mesh = ge.getAMesh(), 
            this.meshlist.push(f), v = !1), f.addQuad(p, h, x, !0), v || (this._submits[this._submits._length++] = this._curSubmit = d = Ce.create(this, f, P.create(1, 0)), 
            d.shaderValue.textureHost = t, d._key.other = e, this._copyClipInfo(d, this._globalClipMatrix)), 
            d._numEle += 6, f.indexNum += 6, f.vertNum += 4, !0;
        }, o.transform4Points = function(t, e, i) {
            var r = e.tx, n = e.ty, a = e.a, s = e.b, h = e.c, o = e.d, l = t[0], u = t[1], c = t[2], _ = t[3], f = t[4], d = t[5], p = t[6], m = t[7];
            e._bTransform ? (i[0] = l * a + u * h + r, i[1] = l * s + u * o + n, i[2] = c * a + _ * h + r, 
            i[3] = c * s + _ * o + n, i[4] = f * a + d * h + r, i[5] = f * s + d * o + n, i[6] = p * a + m * h + r, 
            i[7] = p * s + m * o + n) : (i[0] = l + r, i[1] = u + n, i[2] = c + r, i[3] = _ + n, 
            i[4] = f + r, i[5] = d + n, i[6] = p + r, i[7] = m + n);
        }, o.clipedOff = function() {
            return this._clipRect.width <= 0 || this._clipRect.height <= 0 ? !0 : !1;
        }, o.transformQuad = function(t, e, i, r, n, a, s) {
            var h = 0;
            0 != n && (h = Math.tan(n * Math.PI / 180) * r);
            var o = t + i, l = e + r, u = a.tx, c = a.ty, _ = a.a, f = a.b, d = a.c, p = a.d, m = t + h, x = e, v = o + h, T = e, g = o, b = l, y = t, A = l;
            a._bTransform ? (s[0] = m * _ + x * d + u, s[1] = m * f + x * p + c, s[2] = v * _ + T * d + u, 
            s[3] = v * f + T * p + c, s[4] = g * _ + b * d + u, s[5] = g * f + b * p + c, s[6] = y * _ + A * d + u, 
            s[7] = y * f + A * p + c) : (s[0] = m + u, s[1] = x + c, s[2] = v + u, s[3] = T + c, 
            s[4] = g + u, s[5] = b + c, s[6] = y + u, s[7] = A + c);
        }, o.pushRT = function() {
            this.addRenderObject(fe.create(null, Fe.pushRT, this));
        }, o.popRT = function() {
            this.addRenderObject(fe.create(null, Fe.popRT, this)), this.breakNextMerge();
        }, o.useRT = function(t) {
            function e(t) {
                if (!t) throw "error useRT";
                t.start(), t.clear(0, 0, 0, 0);
            }
            this.addRenderObject(fe.create([ t ], e, this)), this.breakNextMerge();
        }, o.RTRestore = function(t) {
            function e(t) {
                t.restore();
            }
            this.addRenderObject(fe.create([ t ], e, this)), this.breakNextMerge();
        }, o.breakNextMerge = function() {
            this._curSubmit = q.RENDERBASE;
        }, o._repaintSprite = function() {
            this.sprite && this.sprite.repaint();
        }, o.drawTextureWithTransform = function(t, e, i, r, n, a, s, h, o, l, u) {
            var c = null, _ = this._curMat;
            l && (c = this.globalCompositeOperation, this.globalCompositeOperation = l);
            var f = this._colorFiler;
            if (u && this.setColorFilter(u), !a) return this._drawTextureM(t, e + s, i + h, r, n, _, o, null), 
            l && (this.globalCompositeOperation = c), u && this.setColorFilter(f), void 0;
            var d = this._tmpMatrix;
            d.a = a.a, d.b = a.b, d.c = a.c, d.d = a.d, d.tx = a.tx + s, d.ty = a.ty + h, d._bTransform = a._bTransform, 
            a && _._bTransform ? (m.mul(d, _, d), a = d, a._bTransform = !0) : a = d, this._drawTextureM(t, e, i, r, n, a, o, null), 
            l && (this.globalCompositeOperation = c), u && this.setColorFilter(f);
        }, o._flushToTarget = function(t, e) {
            ce.worldScissorTest = !1, J.mainContext.disable(3089);
            {
                var i = ce.worldAlpha, r = ce.worldMatrix4, n = ce.worldMatrix;
                ce.worldShaderDefines;
            }
            ce.worldMatrix = m.EMPTY, ce.restoreTempArray(), ce.worldMatrix4 = ce.TEMPMAT4_ARRAY, 
            ce.worldAlpha = 1, Ie.activeShader = null, e.start(), t._submits._length > 0 && e.clear(0, 0, 0, 0), 
            t._curSubmit = q.RENDERBASE, t.flush(), t.clear(), e.restore(), t._curSubmit = q.RENDERBASE, 
            Ie.activeShader = null, ce.worldAlpha = i, ce.worldMatrix4 = r, ce.worldMatrix = n;
        }, o.drawCanvas = function(t, e, i, r, n) {
            if (t) {
                var a, s = t.context;
                if (s._targets) s._submits._length > 0 && (a = fe.create([ s, s._targets ], this._flushToTarget, this), 
                this._submits[this._submits._length++] = a), this._drawRenderTexture(s._targets, e, i, r, n, null, 1, Fe.flipyuv), 
                this._curSubmit = q.RENDERBASE; else {
                    var h = t;
                    h.touches && h.touches.forEach(function(t) {
                        t.touch();
                    }), a = Me.create(t, this._shader2D.ALPHA, this._shader2D.filters), this._submits[this._submits._length++] = a, 
                    a._key.clear();
                    var o = a._matrix;
                    this._curMat.copyTo(o);
                    var l = o.tx, u = o.ty;
                    o.tx = o.ty = 0, o.transformPoint(x.TEMP.setTo(e, i)), o.translate(x.TEMP.x + l, x.TEMP.y + u), 
                    m.mul(h.invMat, o, o), this._curSubmit = q.RENDERBASE;
                }
            }
        }, o.drawTarget = function(t, e, i, r, n, a, s, h, o) {
            void 0 === o && (o = -1), this._drawCount++;
            this.mixRGBandAlpha(this._drawTextureUseColor ? this.fillStyle ? this.fillStyle.toInt() : 0 : 4294967295);
            if (this._mesh.vertNum + 4 > 65535 && (this._mesh = ge.getAMesh(), this.meshlist.push(this._mesh)), 
            this.transformQuad(e, i, r, n, 0, a || this._curMat, this._transedPoints), !this.clipedOff(this._transedPoints)) {
                this._mesh.addQuad(this._transedPoints, h || w.DEF_UV, 4294967295, !0);
                var l = this._curSubmit = Z.create(this, this._mesh, s, t);
                return l.blendType = -1 == o ? this._nBlendType : o, this._copyClipInfo(l, this._globalClipMatrix), 
                l._numEle = 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4, this._submits[this._submits._length++] = l, 
                this._curSubmit = q.RENDERBASE, !0;
            }
            return this._curSubmit = q.RENDERBASE, !1;
        }, o.drawTriangles = function(t, e, r, n, a, s, h, o, l) {
            if (!t._getSource()) return this.sprite && i.systemTimer.callLater(this, this._repaintSprite), 
            void 0;
            this._drawCount++;
            var u = this._tmpMatrix, c = this._triangleMesh, _ = null, f = !1;
            l && (_ = this._colorFiler, this._colorFiler = l, this._curSubmit = q.RENDERBASE, 
            f = _ != l);
            var d = t.bitmap, p = this._curSubmit._key, x = 4 === p.submitType && p.other === d.id && p.blendShader == this._nBlendType;
            if (c.vertNum + n.length / 2 > 65535 && (c = this._triangleMesh = ye.getAMesh(), 
            this.meshlist.push(c), x = !1), !x) {
                var v = this._curSubmit = Ce.create(this, c, P.create(1, 0));
                v.shaderValue.textureHost = t, v._renderType = 10016, v._key.submitType = 4, v._key.other = d.id, 
                this._copyClipInfo(v, this._globalClipMatrix), this._submits[this._submits._length++] = v;
            }
            var T = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA * o);
            this._drawTriUseAbsMatrix ? c.addData(n, a, s, h, T) : (h ? (u.a = h.a, u.b = h.b, 
            u.c = h.c, u.d = h.d, u.tx = h.tx + e, u.ty = h.ty + r) : (u.a = 1, u.b = 0, u.c = 0, 
            u.d = 1, u.tx = e, u.ty = r), m.mul(u, this._curMat, u), c.addData(n, a, s, u, T)), 
            this._curSubmit._numEle += s.length, f && (this._colorFiler = _, this._curSubmit = q.RENDERBASE);
        }, o.transform = function(t, e, i, r, n, a) {
            re.save(this), m.mul(m.TEMP.setTo(t, e, i, r, n, a), this._curMat, this._curMat), 
            this._curMat._checkTransform();
        }, o._transformByMatrix = function(t, e, i) {
            t.setTranslate(e, i), m.mul(t, this._curMat, this._curMat), t.setTranslate(0, 0), 
            this._curMat._bTransform = !0;
        }, o.setTransformByMatrix = function(t) {
            t.copyTo(this._curMat);
        }, o.rotate = function(t) {
            re.save(this), this._curMat.rotateEx(t);
        }, o.scale = function(t, e) {
            re.save(this), this._curMat.scaleEx(t, e);
        }, o.clipRect = function(t, i, r, n) {
            D.save(this), this._clipRect == e.MAXCLIPRECT ? this._clipRect = new v(t, i, r, n) : (this._clipRect.width = r, 
            this._clipRect.height = n, this._clipRect.x = t, this._clipRect.y = i), e._clipID_Gen++, 
            e._clipID_Gen %= 1e4, this._clipInfoID = e._clipID_Gen;
            var a = this._globalClipMatrix, s = a.tx, h = a.ty, o = s + a.a, l = h + a.d;
            if (this._clipRect.width >= 99999999 ? (a.a = a.d = 99999999, a.b = a.c = a.tx = a.ty = 0) : (this._curMat._bTransform ? (a.tx = this._clipRect.x * this._curMat.a + this._clipRect.y * this._curMat.c + this._curMat.tx, 
            a.ty = this._clipRect.x * this._curMat.b + this._clipRect.y * this._curMat.d + this._curMat.ty, 
            a.a = this._clipRect.width * this._curMat.a, a.b = this._clipRect.width * this._curMat.b, 
            a.c = this._clipRect.height * this._curMat.c, a.d = this._clipRect.height * this._curMat.d) : (a.tx = this._clipRect.x + this._curMat.tx, 
            a.ty = this._clipRect.y + this._curMat.ty, a.a = this._clipRect.width, a.b = a.c = 0, 
            a.d = this._clipRect.height), this._incache && (this._clipInCache = !0)), a.a > 0 && a.d > 0) {
                var u = a.tx + a.a, c = a.ty + a.d;
                s >= u || h >= c || a.tx >= o || a.ty >= l ? (a.a = -.1, a.d = -.1) : (a.tx < s && (a.a -= s - a.tx, 
                a.tx = s), u > o && (a.a -= u - o), a.ty < h && (a.d -= h - a.ty, a.ty = h), c > l && (a.d -= c - l), 
                a.a <= 0 && (a.a = -.1), a.d <= 0 && (a.d = -.1));
            }
        }, o.drawMesh = function(t, e, i, r, n, a, s, h, o) {
            void 0 === o && (o = 0);
        }, o.addRenderObject = function(t) {
            this._submits[this._submits._length++] = t;
        }, o.submitElement = function(t, e) {
            var i = (T._context === this, this._submits), r = i._length;
            0 > e && (e = i._length);
            for (var n = q.RENDERBASE; e > t; ) this._renderNextSubmitIndex = t + 1, i[t] !== q.RENDERBASE ? (q.preRender = n, 
            n = i[t], t += n.renderSubmit()) : t++;
            return r;
        }, o.flush = function() {
            var t = this.submitElement(0, this._submits._length);
            this._path && this._path.reset(), B.instance && B.getInstance().reset(), this._curSubmit = q.RENDERBASE;
            for (var e = 0, r = this.meshlist.length; r > e; e++) {
                var n = this.meshlist[e];
                n.canReuse ? n.releaseMesh() : n.destroy();
            }
            if (this.meshlist.length = 0, this._mesh = ge.getAMesh(), this._pathMesh = be.getAMesh(), 
            this._triangleMesh = ye.getAMesh(), this.meshlist.push(this._mesh, this._pathMesh, this._triangleMesh), 
            this._flushCnt++, this._flushCnt % 60 == 0 && T._context == this) {
                var a = i.textRender;
                a && a.GC(!1);
            }
            return t;
        }, o.setPathId = function(t) {
            if (this.mId = t, -1 != this.mId) {
                this.mHaveKey = !1;
                var e = C.getInstance();
                e.shapeDic[this.mId] && (this.mHaveKey = !0), this.mHaveLineKey = !1, e.shapeLineDic[this.mId] && (this.mHaveLineKey = !0);
            }
        }, o.beginPath = function(t) {
            void 0 === t && (t = !1);
            var e = this._getPath();
            e.beginPath(t);
        }, o.closePath = function() {
            this._path.closePath();
        }, o.addPath = function(t, e, i, r, n) {
            for (var a = 0, s = 0, h = t.length / 2; h > s; s++) {
                var o = t[a] + r, l = t[a + 1] + n;
                t[a] = o, t[a + 1] = l, a += 2;
            }
            this._getPath().push(t, i);
        }, o.fill = function() {
            var t = this._curMat, e = this._getPath(), i = this._curSubmit, r = 3 === i._key.submitType && i._key.blendShader === this._nBlendType;
            r && (r = r && this.isSameClipInfo(i)), r || (this._curSubmit = this.addVGSubmit(this._pathMesh));
            for (var n, a = this.mixRGBandAlpha(this.fillStyle.toInt()), s = 0, h = 0, o = e.paths.length; o > h; h++) {
                var l = e.paths[h], u = l.path.length / 2;
                if (!(3 > u || 3 == u && !l.convex)) {
                    var c = l.path.concat(), _ = 0, f = 0, d = 0, p = 0 / 0, m = 0 / 0;
                    if (t._bTransform) for (_ = 0; u > _; _++) f = _ << 1, d = f + 1, p = c[f], m = c[d], 
                    c[f] = t.a * p + t.c * m + t.tx, c[d] = t.b * p + t.d * m + t.ty; else for (_ = 0; u > _; _++) f = _ << 1, 
                    d = f + 1, p = c[f], m = c[d], c[f] = p + t.tx, c[d] = m + t.ty;
                    this._pathMesh.vertNum + u > 65535 && (this._curSubmit._numEle += s, s = 0, this._pathMesh = be.getAMesh(), 
                    this._curSubmit = this.addVGSubmit(this._pathMesh));
                    var x = this._pathMesh.vertNum;
                    if (l.convex) {
                        var v = u - 2;
                        n = new Array(3 * v);
                        for (var T = 0, g = 0; v > g; g++) n[T++] = x, n[T++] = g + 1 + x, n[T++] = g + 2 + x;
                    } else if (n = Q.earcut(c, null, 2), x > 0) for (var b = 0; b < n.length; b++) n[b] += x;
                    this._pathMesh.addVertAndIBToMesh(this, c, a, n), s += n.length;
                }
            }
            this._curSubmit._numEle += s;
        }, o.addVGSubmit = function(t) {
            var e = q.createShape(this, t, 0, P.create(4, 0));
            return e._key.submitType = 3, this._submits[this._submits._length++] = e, this._copyClipInfo(e, this._globalClipMatrix), 
            e;
        }, o.stroke = function() {
            if (this.lineWidth > 0) {
                var t = this.mixRGBandAlpha(this.strokeStyle._color.numColor), e = this._getPath(), i = this._curSubmit, r = 3 === i._key.submitType && i._key.blendShader === this._nBlendType;
                r && (r = r && this.isSameClipInfo(i)), r || (this._curSubmit = this.addVGSubmit(this._pathMesh));
                for (var n = 0, a = 0, s = e.paths.length; s > a; a++) {
                    var h = e.paths[a];
                    if (!(h.path.length <= 0)) {
                        var o = [], l = [], u = 2 * h.path.length;
                        if (!(2 > u)) {
                            this._pathMesh.vertNum + u > 65535 && (this._curSubmit._numEle += n, n = 0, this._pathMesh = be.getAMesh(), 
                            this.meshlist.push(this._pathMesh), this._curSubmit = this.addVGSubmit(this._pathMesh)), 
                            oe.createLine2(h.path, o, this.lineWidth, this._pathMesh.vertNum, l, h.loop);
                            var c = l.length / 2, _ = this._curMat, f = 0, d = 0, p = 0, m = 0 / 0, x = 0 / 0;
                            if (_._bTransform) for (f = 0; c > f; f++) d = f << 1, p = d + 1, m = l[d], x = l[p], 
                            l[d] = _.a * m + _.c * x + _.tx, l[p] = _.b * m + _.d * x + _.ty; else for (f = 0; c > f; f++) d = f << 1, 
                            p = d + 1, m = l[d], x = l[p], l[d] = m + _.tx, l[p] = x + _.ty;
                            this._pathMesh.addVertAndIBToMesh(this, l, t, o), n += o.length;
                        }
                    }
                }
                this._curSubmit._numEle += n;
            }
        }, o.moveTo = function(t, e) {
            var i = this._getPath();
            i.newPath(), i._lastOriX = t, i._lastOriY = e, i.addPoint(t, e);
        }, o.lineTo = function(t, e) {
            var i = this._getPath();
            Math.abs(t - i._lastOriX) < .001 && Math.abs(e - i._lastOriY) < .001 || (i._lastOriX = t, 
            i._lastOriY = e, i.addPoint(t, e));
        }, o.arcTo = function(t, i, r, n, a) {
            var s = 0, h = 0, o = 0, l = this._path._lastOriX - t, u = this._path._lastOriY - i, c = Math.sqrt(l * l + u * u);
            if (!(1e-6 >= c)) {
                var _ = l / c, f = u / c, d = r - t, p = n - i, m = d * d + p * p, x = Math.sqrt(m);
                if (!(1e-6 >= x)) {
                    var v = d / x, T = p / x, g = _ + v, b = f + T, y = Math.sqrt(g * g + b * b);
                    if (!(1e-6 >= y)) {
                        var A = g / y, E = b / y, R = Math.acos(A * _ + E * f), S = Math.PI / 2 - R;
                        c = a / Math.tan(S);
                        var M = c * _ + t, w = c * f + i, C = Math.sqrt(c * c + a * a), I = t + A * C, P = i + E * C, B = _ * T - f * v, D = 0, O = 0, L = 0;
                        if (B >= 0) {
                            D = 2 * S;
                            var F = D / e.SEGNUM;
                            O = Math.sin(F), L = Math.cos(F);
                        } else D = 2 * -S, F = D / e.SEGNUM, O = Math.sin(F), L = Math.cos(F);
                        var N = this._path._lastOriX, U = this._path._lastOriY, V = M, k = w;
                        (Math.abs(V - this._path._lastOriX) > .1 || Math.abs(k - this._path._lastOriY) > .1) && (h = V, 
                        o = k, N = V, U = k, this._path.addPoint(h, o));
                        var W = M - I, X = w - P;
                        for (s = 0; s < e.SEGNUM; s++) {
                            var G = W * L + X * O, H = -W * O + X * L;
                            h = G + I, o = H + P, (Math.abs(N - h) > .1 || Math.abs(U - o) > .1) && (this._path.addPoint(h, o), 
                            N = h, U = o), W = G, X = H;
                        }
                    }
                }
            }
        }, o.arc = function(t, e, i, r, n, a, s) {
            void 0 === a && (a = !1), void 0 === s && (s = !0);
            var h = 0, o = 0, l = 0, u = 0, c = 0, _ = 0, f = 0, d = 0, p = 0, m = 0, x = 0;
            if (o = n - r, a) if (Math.abs(o) >= 2 * Math.PI) o = 2 * -Math.PI; else for (;o > 0; ) o -= 2 * Math.PI; else if (Math.abs(o) >= 2 * Math.PI) o = 2 * Math.PI; else for (;0 > o; ) o += 2 * Math.PI;
            var v = this.getMatScaleX(), T = this.getMatScaleY(), g = i * (v > T ? v : T), b = 2 * Math.PI * g;
            m = 0 | Math.max(b / 10, 10), l = o / m / 2, u = Math.abs(4 / 3 * (1 - Math.cos(l)) / Math.sin(l)), 
            a && (u = -u), x = 0;
            var y = this._getPath();
            for (p = 0; m >= p; p++) h = r + o * (p / m), c = Math.cos(h), _ = Math.sin(h), 
            f = t + c * i, d = e + _ * i, (f != this._path._lastOriX || d != this._path._lastOriY) && y.addPoint(f, d);
            c = Math.cos(n), _ = Math.sin(n), f = t + c * i, d = e + _ * i, (f != this._path._lastOriX || d != this._path._lastOriY) && y.addPoint(f, d);
        }, o.quadraticCurveTo = function(t, e, i, r) {
            for (var n = s.I, a = n.getBezierPoints([ this._path._lastOriX, this._path._lastOriY, t, e, i, r ], 30, 2), h = 0, o = a.length / 2; o > h; h++) this.lineTo(a[2 * h], a[2 * h + 1]);
            this.lineTo(i, r);
        }, o.rect = function(t, e, i, r) {
            this._other = this._other.make(), this._other.path || (this._other.path = new ee()), 
            this._other.path.rect(t, e, i, r);
        }, o.mixRGBandAlpha = function(t) {
            return this._mixRGBandAlpha(t, this._shader2D.ALPHA);
        }, o._mixRGBandAlpha = function(t, e) {
            if (e >= 1) return t;
            var i = (4278190080 & t) >>> 24;
            return 0 != i ? i *= e : i = 255 * e, 16777215 & t | i << 24;
        }, o.strokeRect = function(t, e, i, r, n) {
            if (this.lineWidth > 0) {
                var a = this.mixRGBandAlpha(this.strokeStyle._color.numColor), s = this.lineWidth / 2;
                this._fillRect(t - s, e - s, i + this.lineWidth, this.lineWidth, a), this._fillRect(t - s, e - s + r, i + this.lineWidth, this.lineWidth, a), 
                this._fillRect(t - s, e + s, this.lineWidth, r - this.lineWidth, a), this._fillRect(t - s + i, e + s, this.lineWidth, r - this.lineWidth, a);
            }
        }, o.clip = function() {}, o.drawParticle = function(t, e, i) {
            i.x = t, i.y = e, this._submits[this._submits._length++] = i;
        }, o._getPath = function() {
            return this._path || (this._path = new ee());
        }, o._fillTexture_h = function(t, i, r, n, a, s, h, o) {
            for (var l = s, u = Math.floor(o / n), c = o % n, _ = 0; u > _; _++) this._inner_drawTexture(t, i, l, h, n, a, this._curMat, r, 1, !1), 
            l += n;
            if (c > 0) {
                var f = r[2] - r[0], d = r[0] + f * (c / n), p = e.tmpuv1;
                p[0] = r[0], p[1] = r[1], p[2] = d, p[3] = r[3], p[4] = d, p[5] = r[5], p[6] = r[6], 
                p[7] = r[7], this._inner_drawTexture(t, i, l, h, c, a, this._curMat, p, 1, !1);
            }
        }, o._fillTexture_v = function(t, i, r, n, a, s, h, o) {
            for (var l = h, u = Math.floor(o / a), c = o % a, _ = 0; u > _; _++) this._inner_drawTexture(t, i, s, l, n, a, this._curMat, r, 1, !1), 
            l += a;
            if (c > 0) {
                var f = r[7] - r[1], d = r[1] + f * (c / a), p = e.tmpuv1;
                p[0] = r[0], p[1] = r[1], p[2] = r[2], p[3] = r[3], p[4] = r[4], p[5] = d, p[6] = r[6], 
                p[7] = d, this._inner_drawTexture(t, i, s, l, n, c, this._curMat, p, 1, !1);
            }
        }, o.drawTextureWithSizeGrid = function(t, i, r, n, a, s, h, o) {
            if (t._getSource()) {
                i += h, r += o;
                var l = t.uv, u = t.bitmap._width, c = t.bitmap._height, _ = s[0], f = s[3], d = _ / c, p = f / u, m = s[1], x = s[2], v = m / u, T = x / c, g = s[4], b = !1;
                if (n == u && (f = m = 0), a == c && (_ = x = 0), f + m > n) {
                    var y = n;
                    b = !0, n = f + m, this.save(), this.clipRect(0 + i, 0 + r, y, a);
                }
                var A = t.bitmap.id, E = this._curMat, R = this._tempUV, S = l[0], M = l[1], w = l[4], C = l[5], I = S, P = M, B = w, D = C;
                if (f && _ && (B = S + p, D = M + d, R[0] = S, R[1] = M, R[2] = B, R[3] = M, R[4] = B, 
                R[5] = D, R[6] = S, R[7] = D, this._inner_drawTexture(t, A, i, r, f, _, E, R, 1, !1)), 
                m && _ && (I = w - v, P = M, B = w, D = M + d, R[0] = I, R[1] = P, R[2] = B, R[3] = P, 
                R[4] = B, R[5] = D, R[6] = I, R[7] = D, this._inner_drawTexture(t, A, n - m + i, 0 + r, m, _, E, R, 1, !1)), 
                f && x && (I = S, P = C - T, B = S + p, D = C, R[0] = I, R[1] = P, R[2] = B, R[3] = P, 
                R[4] = B, R[5] = D, R[6] = I, R[7] = D, this._inner_drawTexture(t, A, 0 + i, a - x + r, f, x, E, R, 1, !1)), 
                m && x && (I = w - v, P = C - T, B = w, D = C, R[0] = I, R[1] = P, R[2] = B, R[3] = P, 
                R[4] = B, R[5] = D, R[6] = I, R[7] = D, this._inner_drawTexture(t, A, n - m + i, a - x + r, m, x, E, R, 1, !1)), 
                _ && (I = S + p, P = M, B = w - v, D = M + d, R[0] = I, R[1] = P, R[2] = B, R[3] = P, 
                R[4] = B, R[5] = D, R[6] = I, R[7] = D, g ? this._fillTexture_h(t, A, R, t.width - f - m, _, f + i, r, n - f - m) : this._inner_drawTexture(t, A, f + i, r, n - f - m, _, E, R, 1, !1)), 
                x && (I = S + p, P = C - T, B = w - v, D = C, R[0] = I, R[1] = P, R[2] = B, R[3] = P, 
                R[4] = B, R[5] = D, R[6] = I, R[7] = D, g ? this._fillTexture_h(t, A, R, t.width - f - m, x, f + i, a - x + r, n - f - m) : this._inner_drawTexture(t, A, f + i, a - x + r, n - f - m, x, E, R, 1, !1)), 
                f && (I = S, P = M + d, B = S + p, D = C - T, R[0] = I, R[1] = P, R[2] = B, R[3] = P, 
                R[4] = B, R[5] = D, R[6] = I, R[7] = D, g ? this._fillTexture_v(t, A, R, f, t.height - _ - x, i, _ + r, a - _ - x) : this._inner_drawTexture(t, A, i, _ + r, f, a - _ - x, E, R, 1, !1)), 
                m && (I = w - v, P = M + d, B = w, D = C - T, R[0] = I, R[1] = P, R[2] = B, R[3] = P, 
                R[4] = B, R[5] = D, R[6] = I, R[7] = D, g ? this._fillTexture_v(t, A, R, m, t.height - _ - x, n - m + i, _ + r, a - _ - x) : this._inner_drawTexture(t, A, n - m + i, _ + r, m, a - _ - x, E, R, 1, !1)), 
                I = S + p, P = M + d, B = w - v, D = C - T, R[0] = I, R[1] = P, R[2] = B, R[3] = P, 
                R[4] = B, R[5] = D, R[6] = I, R[7] = D, g) {
                    var O = e.tmpUVRect;
                    O[0] = I, O[1] = P, O[2] = B - I, O[3] = D - P, this._fillTexture(t, t.width - f - m, t.height - _ - x, O, f + i, _ + r, n - f - m, a - _ - x, "repeat", 0, 0);
                } else this._inner_drawTexture(t, A, f + i, _ + r, n - f - m, a - _ - x, E, R, 1, !1);
                b && this.restore();
            }
        }, a(0, o, "globalCompositeOperation", function() {
            return te.NAMES[this._nBlendType];
        }, function(t) {
            var e = te.TOINT[t];
            null == e || this._nBlendType === e || (I.save(this, 65536, this, !0), this._curSubmit = q.RENDERBASE, 
            this._nBlendType = e);
        }), a(0, o, "strokeStyle", function() {
            return this._shader2D.strokeStyle;
        }, function(t) {
            this._shader2D.strokeStyle.equal(t) || (I.save(this, 512, this._shader2D, !1), this._shader2D.strokeStyle = N.create(t), 
            this._submitKey.other = -this._shader2D.strokeStyle.toInt());
        }), a(0, o, "globalAlpha", function() {
            return this._shader2D.ALPHA;
        }, function(t) {
            t = Math.floor(1e3 * t) / 1e3, t != this._shader2D.ALPHA && (I.save(this, 1, this._shader2D, !1), 
            this._shader2D.ALPHA = t);
        }), a(0, o, "asBitmap", null, function(t) {
            if (t) {
                if (this._targets || (this._targets = new Fe(this._width, this._height, 1, -1)), 
                !this._width || !this._height) throw Error("asBitmap no size!");
            } else this._targets && this._targets.destroy(), this._targets = null;
        }), a(0, o, "fillStyle", function() {
            return this._shader2D.fillStyle;
        }, function(t) {
            this._shader2D.fillStyle.equal(t) || (I.save(this, 2, this._shader2D, !1), this._shader2D.fillStyle = N.create(t), 
            this._submitKey.other = -this._shader2D.fillStyle.toInt());
        }), a(0, o, "textAlign", function() {
            return this._other.textAlign;
        }, function(t) {
            this._other.textAlign === t || (this._other = this._other.make(), I.save(this, 32768, this._other, !1), 
            this._other.textAlign = t);
        }), a(0, o, "lineWidth", function() {
            return this._other.lineWidth;
        }, function(t) {
            this._other.lineWidth === t || (this._other = this._other.make(), I.save(this, 256, this._other, !1), 
            this._other.lineWidth = t);
        }), a(0, o, "textBaseline", function() {
            return this._other.textBaseline;
        }, function(t) {
            this._other.textBaseline === t || (this._other = this._other.make(), I.save(this, 16384, this._other, !1), 
            this._other.textBaseline = t);
        }), a(0, o, "font", null, function() {
            this._other = this._other.make(), I.save(this, 8, this._other, !1);
        }), a(0, o, "canvas", function() {
            return this._canvas;
        }), e.__init__ = function() {
            h.DEFAULT = new h();
        }, e.set2DRenderConfig = function() {
            var t = O.instance;
            Y.setBlend(t, !0), Y.setBlendFunc(t, 1, 771), Y.setDepthTest(t, !1), Y.setCullFace(t, !1), 
            Y.setDepthMask(t, !0), Y.setFrontFace(t, 2305), T.isConchApp || t.viewport(0, 0, ce.width, ce.height);
        }, e._SUBMITVBSIZE = 32e3, e._MAXSIZE = 99999999, e._MAXVERTNUM = 65535, e.MAXCLIPRECT = new v(0, 0, 99999999, 99999999), 
        e._COUNT = 0, e.SEGNUM = 32, e._contextcount = 0, e._clipID_Gen = 0, e.defTexture = null, 
        r(e, [ "_textRender", function() {
            return this._textRender = new U();
        }, "tmpuv1", function() {
            return this.tmpuv1 = [ 0, 0, 0, 0, 0, 0, 0, 0 ];
        }, "tmpUV", function() {
            return this.tmpUV = [ 0, 0, 0, 0, 0, 0, 0, 0 ];
        }, "tmpUVRect", function() {
            return this.tmpUVRect = [ 0, 0, 0, 0 ];
        } ]), e.__init$ = function() {
            h = function() {
                function t() {
                    this.lineWidth = 1, this.path = null, this.textAlign = null, this.textBaseline = null;
                }
                n(t, "");
                var e = t.prototype;
                return e.clear = function() {
                    this.lineWidth = 1, this.path && this.path.clear(), this.textAlign = this.textBaseline = null;
                }, e.make = function() {
                    return this === t.DEFAULT ? new t() : this;
                }, t.DEFAULT = null, t;
            }();
        }, e;
    }(c), xe = function(t) {
        function e() {
            this.texcoord = null, this.position = null, this.offsetX = 300, this.offsetY = 0, 
            e.__super.call(this, 512, 0);
            var t = 8 * $.BYTES_PE;
            this.position = [ 2, 5126, !1, t, 0 ], this.texcoord = [ 2, 5126, !1, t, 2 * $.BYTES_PE ], 
            this.color = [ 4, 5126, !1, t, 4 * $.BYTES_PE ];
        }
        return n(e, "laya.webgl.shader.d2.skinAnishader.SkinSV", t), e;
    }(P), ve = function(t) {
        function e(t) {
            this.u_colorMatrix = null, this.strength = 0, this.blurInfo = null, this.colorMat = null, 
            this.colorAlpha = null, void 0 === t && (t = 0), e.__super.call(this, 1, t), this._attribLocation = [ "posuv", 0, "attribColor", 1, "attribFlags", 2 ];
        }
        n(e, "laya.webgl.shader.d2.value.TextureSV", t);
        var i = e.prototype;
        return i.clear = function() {
            this.texture = null, this.shader = null, this.defines._value = this.subID + (J.shaderHighPrecision ? 1024 : 0);
        }, e;
    }(P), Te = function(t) {
        function e() {
            e.__super.call(this, 4, 0), this._attribLocation = [ "position", 0, "attribColor", 1 ];
        }
        return n(e, "laya.webgl.shader.d2.value.PrimitiveSV", t), e;
    }(P), ge = function(t) {
        function e() {
            e.__super.call(this, 24, 4, 4), this.canReuse = !0, this.setAttributes(laya.webgl.utils.MeshQuadTexture._fixattriInfo), 
            laya.webgl.utils.MeshQuadTexture._fixib ? (this._ib = laya.webgl.utils.MeshQuadTexture._fixib, 
            this._quadNum = e._maxIB) : (this.createQuadIB(e._maxIB), laya.webgl.utils.MeshQuadTexture._fixib = this._ib);
        }
        n(e, "laya.webgl.utils.MeshQuadTexture", t);
        var i = e.prototype;
        return i.releaseMesh = function() {
            this._vb.setByteLength(0), this.vertNum = 0, this.indexNum = 0, laya.webgl.utils.MeshQuadTexture._POOL.push(this);
        }, i.destroy = function() {
            this._vb.destroy(), this._vb.deleteBuffer();
        }, i.addQuad = function(t, e, i, r) {
            var n = this._vb, a = n._byteLength >> 2;
            n.setByteLength(a + 24 << 2);
            var s = n._floatArray32 || n.getFloat32Array(), h = n._uint32Array, o = a, l = r ? 255 : 0;
            s[o++] = t[0], s[o++] = t[1], s[o++] = e[0], s[o++] = e[1], h[o++] = i, h[o++] = l, 
            s[o++] = t[2], s[o++] = t[3], s[o++] = e[2], s[o++] = e[3], h[o++] = i, h[o++] = l, 
            s[o++] = t[4], s[o++] = t[5], s[o++] = e[4], s[o++] = e[5], h[o++] = i, h[o++] = l, 
            s[o++] = t[6], s[o++] = t[7], s[o++] = e[6], s[o++] = e[7], h[o++] = i, h[o++] = l, 
            n._upload = !0;
        }, e.getAMesh = function() {
            var t = null;
            return t = laya.webgl.utils.MeshQuadTexture._POOL.length ? laya.webgl.utils.MeshQuadTexture._POOL.pop() : new e(), 
            t._vb._resizeBuffer(1572864, !1), t;
        }, e.const_stride = 24, e._fixib = null, e._maxIB = 16384, e._POOL = [], r(e, [ "_fixattriInfo", function() {
            return this._fixattriInfo = [ 5126, 4, 0, 5121, 4, 16, 5121, 4, 20 ];
        } ]), e;
    }(F), be = function(t) {
        function e() {
            e.__super.call(this, 12, 4, 4), this.canReuse = !0, this.setAttributes(laya.webgl.utils.MeshVG._fixattriInfo);
        }
        n(e, "laya.webgl.utils.MeshVG", t);
        var i = e.prototype;
        return i.addVertAndIBToMesh = function(t, e, i, r) {
            for (var n = this._vb.needSize(e.length / 2 * 12), a = n >> 2, s = this._vb._floatArray32 || this._vb.getFloat32Array(), h = this._vb._uint32Array, o = 0, l = e.length / 2, u = 0; l > u; u++) s[a++] = e[o], 
            s[a++] = e[o + 1], o += 2, h[a++] = i;
            this._vb.setNeedUpload(), this._ib.append(new Uint16Array(r)), this._ib.setNeedUpload(), 
            this.vertNum += l, this.indexNum += r.length;
        }, i.releaseMesh = function() {
            this._vb.setByteLength(0), this._ib.setByteLength(0), this.vertNum = 0, this.indexNum = 0, 
            laya.webgl.utils.MeshVG._POOL.push(this);
        }, i.destroy = function() {
            this._ib.destroy(), this._vb.destroy(), this._ib.disposeResource(), this._vb.deleteBuffer();
        }, e.getAMesh = function() {
            var t;
            return t = laya.webgl.utils.MeshVG._POOL.length ? laya.webgl.utils.MeshVG._POOL.pop() : new e(), 
            t._vb._resizeBuffer(786432, !1), t;
        }, e.const_stride = 12, e._POOL = [], r(e, [ "_fixattriInfo", function() {
            return this._fixattriInfo = [ 5126, 2, 0, 5121, 4, 8 ];
        } ]), e;
    }(F), ye = function(t) {
        function e() {
            e.__super.call(this, 24, 4, 4), this.canReuse = !0, this.setAttributes(laya.webgl.utils.MeshTexture._fixattriInfo);
        }
        n(e, "laya.webgl.utils.MeshTexture", t);
        var i = e.prototype;
        return i.addData = function(t, e, i, r, n) {
            var a = this._vb, s = this._ib, h = t.length >> 1, o = a.needSize(24 * h), l = o >> 2, u = a._floatArray32 || a.getFloat32Array(), c = a._uint32Array, _ = 0, f = r.a, d = r.b, p = r.c, m = r.d, x = r.tx, v = r.ty, T = 0;
            for (T = 0; h > T; T++) {
                var g = t[_], b = t[_ + 1];
                u[l] = g * f + b * p + x, u[l + 1] = g * d + b * m + v, u[l + 2] = e[_], u[l + 3] = e[_ + 1], 
                c[l + 4] = n, c[l + 5] = 255, l += 6, _ += 2;
            }
            a.setNeedUpload();
            var y = this.vertNum, A = i.length, E = s.needSize(i.byteLength), R = s.getUint16Array(), S = E >> 1;
            if (y > 0) {
                var M = S + A, w = 0;
                for (T = S; M > T; T++, w++) R[T] = i[w] + y;
            } else R.set(i, S);
            s.setNeedUpload(), this.vertNum += h, this.indexNum += i.length;
        }, i.releaseMesh = function() {
            this._vb.setByteLength(0), this._ib.setByteLength(0), this.vertNum = 0, this.indexNum = 0, 
            laya.webgl.utils.MeshTexture._POOL.push(this);
        }, i.destroy = function() {
            this._ib.destroy(), this._vb.destroy(), this._ib.disposeResource(), this._vb.deleteBuffer();
        }, e.getAMesh = function() {
            var t;
            return t = laya.webgl.utils.MeshTexture._POOL.length ? laya.webgl.utils.MeshTexture._POOL.pop() : new e(), 
            t._vb._resizeBuffer(1572864, !1), t;
        }, e.const_stride = 24, e._POOL = [], r(e, [ "_fixattriInfo", function() {
            return this._fixattriInfo = [ 5126, 4, 0, 5121, 4, 16, 5121, 4, 20 ];
        } ]), e;
    }(F), Ae = function(t) {
        function e() {
            e.__super.call(this, e.__name2int, e.__int2name, e.__int2nameMap);
        }
        return n(e, "laya.webgl.shader.d2.ShaderDefines2D", t), e.__init__ = function() {
            e.reg("TEXTURE2D", 1), e.reg("PRIMITIVE", 4), e.reg("GLOW_FILTER", 8), e.reg("BLUR_FILTER", 16), 
            e.reg("COLOR_FILTER", 32), e.reg("COLOR_ADD", 64), e.reg("WORLDMAT", 128), e.reg("FILLTEXTURE", 256), 
            e.reg("FSHIGHPRECISION", 1024), e.reg("MVP3D", 2048);
        }, e.reg = function(t, i) {
            k._reg(t, i, e.__name2int, e.__int2name);
        }, e.toText = function(t, e, i) {
            return k._toText(t, e, i);
        }, e.toInt = function(t) {
            return k._toInt(t, e.__name2int);
        }, e.TEXTURE2D = 1, e.PRIMITIVE = 4, e.FILTERGLOW = 8, e.FILTERBLUR = 16, e.FILTERCOLOR = 32, 
        e.COLORADD = 64, e.WORLDMAT = 128, e.FILLTEXTURE = 256, e.SKINMESH = 512, e.SHADERDEFINE_FSHIGHPRECISION = 1024, 
        e.MVP3D = 2048, e.NOOPTMASK = 312, e.__name2int = {}, e.__int2name = [], e.__int2nameMap = [], 
        e;
    }(k), Ee = function(i) {
        function r(i, n, a, s, h) {
            this.ctx = null, this.lastScaleX = 1, this.lastScaleY = 1, this.needResetScale = !1, 
            this.maxTexW = 0, this.maxTexH = 0, this.scaleFontSize = !0, this.showDbgInfo = !1, 
            this.supportImageData = !0, r.__super.call(this), void 0 === a && (a = !0), void 0 === s && (s = !0), 
            void 0 === h && (h = !1), this.maxTexW = i, this.maxTexH = n, this.scaleFontSize = a, 
            this.supportImageData = s, this.showDbgInfo = h, r.canvas || (r.canvas = t.document.createElement("canvas"), 
            r.canvas.width = 1024, r.canvas.height = 512, r.canvas.style.left = "-10000px", 
            r.canvas.style.position = "absolute", e.body.appendChild(r.canvas), this.ctx = r.canvas.getContext("2d"));
        }
        n(r, "laya.webgl.resource.CharRender_Canvas", i);
        var s = r.prototype;
        return s.getWidth = function(t, e) {
            if (!this.ctx) return 0;
            this.ctx._lastFont != t && (this.ctx.font = t, this.ctx._lastFont = t);
            var i = this.ctx.measureText(e);
            return i ? i.width : 100;
        }, s.scale = function(t, e) {
            return this.supportImageData ? ((this.lastScaleX != t || this.lastScaleY != e) && (this.ctx.setTransform(t, 0, 0, e, 0, 0), 
            this.lastScaleX = t, this.lastScaleY = e), void 0) : (this.lastScaleX = t, this.lastScaleY = e, 
            void 0);
        }, s.getCharBmp = function(t, e, i, r, n, a, s, h, o, l, u) {
            if (!this.supportImageData) return this.getCharCanvas(t, e, i, r, n, a, s, h, o, l);
            var c = this.ctx;
            c.font != e && (c.font = e, c._lastFont = e);
            var _ = c.measureText(t);
            a.width = _ ? _.width : 50;
            var f = a.width * this.lastScaleX, d = a.height * this.lastScaleY;
            f += (s + o) * this.lastScaleX, d += (h + l) * this.lastScaleY, f = Math.ceil(f), 
            d = Math.ceil(d), f = Math.min(f, laya.webgl.resource.CharRender_Canvas.canvas.width), 
            d = Math.min(d, laya.webgl.resource.CharRender_Canvas.canvas.height);
            var p = f + 2 * i + 1, m = d + 2 * i + 1;
            u && (p = Math.max(p, u[0] + u[2] + 1), m = Math.max(m, u[1] + u[3] + 1)), c.clearRect(0, 0, p, m), 
            c.save(), c.textBaseline = "top", i > 0 && (c.strokeStyle = n, c.lineWidth = i, 
            c.strokeText(t, s, h)), c.fillStyle = r, c.fillText(t, s, h), this.showDbgInfo && (c.strokeStyle = "#ff0000", 
            c.strokeRect(0, 0, f, d), c.strokeStyle = "#00ff00", c.strokeRect(s, h, a.width, a.height)), 
            u && -1 == u[2] && (u[2] = Math.ceil((a.width + 2 * i) * this.lastScaleX));
            var x = u ? c.getImageData(u[0], u[1], u[2], u[3]) : c.getImageData(0, 0, f, d);
            return c.restore(), a.bmpWidth = x.width, a.bmpHeight = x.height, x;
        }, s.getCharCanvas = function(t, e, i, n, a, s, h, o, l, u) {
            var c = this.ctx;
            c.font != e && (c.font = e, c._lastFont = e);
            var _ = c.measureText(t);
            s.width = _ ? _.width : 50;
            var f = s.width * this.lastScaleX, d = s.height * this.lastScaleY;
            return f += (h + l) * this.lastScaleX, d += (o + u) * this.lastScaleY + 1, f = Math.min(f, this.maxTexW), 
            d = Math.min(d, this.maxTexH), r.canvas.width = Math.min(f + 1, this.maxTexW), r.canvas.height = Math.min(d + 1, this.maxTexH), 
            c.font = e, c.clearRect(0, 0, f + 1 + i, d + 1 + i), c.setTransform(1, 0, 0, 1, 0, 0), 
            c.save(), this.scaleFontSize && c.scale(this.lastScaleX, this.lastScaleY), c.translate(h, o), 
            c.textAlign = "left", c.textBaseline = "top", i > 0 ? (c.strokeStyle = a, c.fillStyle = n, 
            c.lineWidth = i, c.fillAndStrokeText ? c.fillAndStrokeText(t, 0, 0) : (c.strokeText(t, 0, 0), 
            c.fillText(t, 0, 0))) : (c.fillStyle = n, c.fillText(t, 0, 0)), this.showDbgInfo && (c.strokeStyle = "#ff0000", 
            c.strokeRect(0, 0, f, d), c.strokeStyle = "#00ff00", c.strokeRect(0, 0, s.width, s.height)), 
            c.restore(), s.bmpWidth = r.canvas.width, s.bmpHeight = r.canvas.height, r.canvas;
        }, a(0, s, "canvasWidth", function() {
            return r.canvas.width;
        }, function(t) {
            r.canvas.width != t && (r.canvas.width = t, t > 2048 && console.warn("画文字设置的宽度太大，超过2048了"), 
            this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.scale(this.lastScaleX, this.lastScaleY));
        }), r.canvas = null, r;
    }(X), Re = function(t) {
        function e() {
            e.__super.call(this);
        }
        return n(e, "laya.webgl.BufferState2D", t), e;
    }(H), Se = function(e) {
        function i() {
            this.lastFont = "", i.__super.call(this);
        }
        n(i, "laya.webgl.resource.CharRender_Native", e);
        var r = i.prototype;
        return r.getWidth = function(e, i) {
            return t.conchTextCanvas ? (t.conchTextCanvas.font = e, this.lastFont = e, t.conchTextCanvas.measureText(i).width) : 0;
        }, r.scale = function() {}, r.getCharBmp = function(e, i, r, n, a, s, h, o, u, c) {
            if (!t.conchTextCanvas) return null;
            t.conchTextCanvas.font = i, this.lastFont = i;
            var _ = s.width = t.conchTextCanvas.measureText(e).width, f = s.height;
            _ += h + u, f += o + c;
            var d = l.create(a), p = d.numColor, m = l.create(n), x = m.numColor, v = t.conchTextCanvas.getTextBitmapData(e, x, r > 2 ? 2 : r, p);
            return s.bmpWidth = v.width, s.bmpHeight = v.height, v;
        }, i;
    }(X), Me = (function(t) {
        function e(t) {
            e.__super.call(this, 116, 4 * t * 116, 4), this.canReuse = !0, this.setAttributes(laya.webgl.utils.MeshParticle2D._fixattriInfo), 
            this.createQuadIB(t), this._quadNum = t;
        }
        n(e, "laya.webgl.utils.MeshParticle2D", t);
        var i = e.prototype;
        return i.setMaxParticleNum = function(t) {
            this._vb._resizeBuffer(4 * t * 116, !1), this.createQuadIB(t);
        }, i.releaseMesh = function() {
            this._vb.setByteLength(0), this.vertNum = 0, this.indexNum = 0, laya.webgl.utils.MeshParticle2D._POOL.push(this);
        }, i.destroy = function() {
            this._ib.destroy(), this._vb.destroy(), this._vb.deleteBuffer();
        }, e.getAMesh = function(t) {
            if (laya.webgl.utils.MeshParticle2D._POOL.length) {
                var i = laya.webgl.utils.MeshParticle2D._POOL.pop();
                return i.setMaxParticleNum(t), i;
            }
            return new e(t);
        }, e.const_stride = 116, e._POOL = [], r(e, [ "_fixattriInfo", function() {
            return this._fixattriInfo = [ 5126, 4, 0, 5126, 3, 16, 5126, 3, 28, 5126, 4, 40, 5126, 4, 56, 5126, 3, 72, 5126, 2, 84, 5126, 4, 92, 5126, 1, 108, 5126, 1, 112 ];
        } ]), e;
    }(F), function(t) {
        function e() {
            this._matrix = new m(), this._matrix4 = $.defaultMatrix4.concat(), e.__super.call(this, 1e4), 
            this.shaderValue = new P(0, 0);
        }
        n(e, "laya.webgl.submit.SubmitCanvas", t);
        var i = e.prototype;
        return i.renderSubmit = function() {
            var t = ce.worldAlpha, e = ce.worldMatrix4, i = ce.worldMatrix, r = ce.worldFilters, n = ce.worldShaderDefines, a = this.shaderValue, s = this._matrix, h = this._matrix4, o = m.TEMP;
            return m.mul(s, i, o), h[0] = o.a, h[1] = o.b, h[4] = o.c, h[5] = o.d, h[12] = o.tx, 
            h[13] = o.ty, ce.worldMatrix = o.clone(), ce.worldMatrix4 = h, ce.worldAlpha = ce.worldAlpha * a.alpha, 
            a.filters && a.filters.length && (ce.worldFilters = a.filters, ce.worldShaderDefines = a.defines), 
            this.canv.flushsubmit(), ce.worldAlpha = t, ce.worldMatrix4 = e, ce.worldMatrix.destroy(), 
            ce.worldMatrix = i, ce.worldFilters = r, ce.worldShaderDefines = n, 1;
        }, i.releaseRender = function() {
            if (--this._ref < 1) {
                var t = e.POOL;
                this._mesh = null, t[t._length++] = this;
            }
        }, i.clone = function() {
            return null;
        }, i.getRenderType = function() {
            return 10003;
        }, e.create = function(t, i, r) {
            var n = e.POOL._length ? e.POOL[--e.POOL._length] : new e();
            n.canv = t, n._ref = 1, n._numEle = 0;
            var a = n.shaderValue;
            return a.alpha = i, a.defines.setValue(0), r && r.length && a.setFilters(r), n;
        }, e.POOL = (e.POOL = [], e.POOL._length = 0, e.POOL), e;
    }(q)), we = function(t) {
        function e() {
            this._maxsize = 0, this._upload = !0, this._uploadSize = 0, this._bufferSize = 0, 
            this._u8Array = null, e.__super.call(this);
        }
        n(e, "laya.webgl.utils.Buffer2D", t);
        var i = e.prototype;
        return i.setByteLength = function(t) {
            this._byteLength !== t && (t <= this._bufferSize || this._resizeBuffer(2 * t + 256, !0), 
            this._byteLength = t);
        }, i.needSize = function(t) {
            var e = this._byteLength;
            if (t) {
                var i = this._byteLength + t;
                i <= this._bufferSize || this._resizeBuffer(i << 1, !0), this._byteLength = i;
            }
            return e;
        }, i._bufferData = function() {
            this._maxsize = Math.max(this._maxsize, this._byteLength), R.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this._buffer = this._buffer.slice(0, this._maxsize + 64), 
            this._bufferSize = this._buffer.byteLength, this._checkArrayUse()), this._maxsize = this._byteLength), 
            this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength, 
            O.instance.bufferData(this._bufferType, this._uploadSize, this._bufferUsage)), O.instance.bufferSubData(this._bufferType, 0, this._buffer);
        }, i._bufferSubData = function(t, e, i) {
            if (void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), this._maxsize = Math.max(this._maxsize, this._byteLength), 
            R.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this._buffer = this._buffer.slice(0, this._maxsize + 64), 
            this._bufferSize = this._buffer.byteLength, this._checkArrayUse()), this._maxsize = this._byteLength), 
            this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength, 
            O.instance.bufferData(this._bufferType, this._uploadSize, this._bufferUsage)), e || i) {
                var r = this._buffer.slice(e, i);
                O.instance.bufferSubData(this._bufferType, t, r);
            } else O.instance.bufferSubData(this._bufferType, t, this._buffer);
        }, i._checkArrayUse = function() {}, i._bind_uploadForVAO = function() {
            return this._upload ? (this._upload = !1, this._bindForVAO(), this._bufferData(), 
            !0) : !1;
        }, i._bind_upload = function() {
            return this._upload ? (this._upload = !1, this.bind(), this._bufferData(), !0) : !1;
        }, i._bind_subUpload = function(t, e, i) {
            return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), 
            this._upload ? (this._upload = !1, this.bind(), this._bufferSubData(t, e, i), !0) : !1;
        }, i._resizeBuffer = function(t, e) {
            var i = this._buffer;
            if (t <= i.byteLength) return this;
            var r = this._u8Array;
            if (e && i && i.byteLength > 0) {
                var n = new ArrayBuffer(t), a = r && r.buffer == i ? r : new Uint8Array(i);
                r = this._u8Array = new Uint8Array(n), r.set(a, 0), i = this._buffer = n;
            } else i = this._buffer = new ArrayBuffer(t), this._u8Array = null;
            return this._checkArrayUse(), this._upload = !0, this._bufferSize = i.byteLength, 
            this;
        }, i.append = function(t) {
            this._upload = !0;
            var e, i = 0;
            i = t.byteLength, t instanceof Uint8Array ? (this._resizeBuffer(this._byteLength + i, !0), 
            e = new Uint8Array(this._buffer, this._byteLength)) : t instanceof Uint16Array ? (this._resizeBuffer(this._byteLength + i, !0), 
            e = new Uint16Array(this._buffer, this._byteLength)) : t instanceof Float32Array && (this._resizeBuffer(this._byteLength + i, !0), 
            e = new Float32Array(this._buffer, this._byteLength)), e.set(t, 0), this._byteLength += i, 
            this._checkArrayUse();
        }, i.appendU16Array = function(t, e) {
            this._resizeBuffer(this._byteLength + 2 * e, !0);
            var i = new Uint16Array(this._buffer, this._byteLength, e);
            if (6 == e) i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], i[4] = t[4], i[5] = t[5]; else if (e >= 100) i.set(new Uint16Array(t.buffer, 0, e)); else for (var r = 0; e > r; r++) i[r] = t[r];
            this._byteLength += 2 * e, this._checkArrayUse();
        }, i.appendEx = function(t, e) {
            this._upload = !0;
            var i, r = 0;
            r = t.byteLength, this._resizeBuffer(this._byteLength + r, !0), i = new e(this._buffer, this._byteLength), 
            i.set(t, 0), this._byteLength += r, this._checkArrayUse();
        }, i.appendEx2 = function(t, e, i, r) {
            void 0 === r && (r = 1), this._upload = !0;
            var n, a = 0;
            a = i * r, this._resizeBuffer(this._byteLength + a, !0), n = new e(this._buffer, this._byteLength);
            var s = 0;
            for (s = 0; i > s; s++) n[s] = t[s];
            this._byteLength += a, this._checkArrayUse();
        }, i.getBuffer = function() {
            return this._buffer;
        }, i.setNeedUpload = function() {
            this._upload = !0;
        }, i.getNeedUpload = function() {
            return this._upload;
        }, i.upload = function() {
            var t = this._bind_upload();
            return O.instance.bindBuffer(this._bufferType, null), 34962 == this._bufferType && (ie._bindedVertexBuffer = null), 
            34963 == this._bufferType && (ie._bindedIndexBuffer = null), Ie.activeShader = null, 
            t;
        }, i.subUpload = function(t, e, i) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0);
            var r = this._bind_subUpload();
            return O.instance.bindBuffer(this._bufferType, null), 34962 == this._bufferType && (ie._bindedVertexBuffer = null), 
            34963 == this._bufferType && (ie._bindedIndexBuffer = null), Ie.activeShader = null, 
            r;
        }, i._disposeResource = function() {
            this._upload = !0, this._uploadSize = 0;
        }, i.clear = function() {
            this._byteLength = 0, this._upload = !0;
        }, a(0, i, "bufferLength", function() {
            return this._buffer.byteLength;
        }), a(0, i, "byteLength", null, function(t) {
            this.setByteLength(t);
        }), e.__int__ = function() {}, e.FLOAT32 = 4, e.SHORT = 2, e;
    }(ie), Ce = function(t) {
        function e(t) {
            void 0 === t && (t = 1e4), e.__super.call(this, t);
        }
        n(e, "laya.webgl.submit.SubmitTexture", t);
        var i = e.prototype;
        return i.clone = function(t, i, r) {
            var n = e._poolSize ? e.POOL[--e._poolSize] : new e();
            return this._cloneInit(n, t, i, r), n;
        }, i.releaseRender = function() {
            --this._ref < 1 && (e.POOL[e._poolSize++] = this, this.shaderValue.release(), this._mesh = null, 
            this._parent && (this._parent.releaseRender(), this._parent = null));
        }, i.renderSubmit = function() {
            if (0 === this._numEle) return 1;
            var t = this.shaderValue.textureHost;
            if (t) {
                var e = t ? t._getSource() : null;
                if (!e) return 1;
            }
            var i = J.mainContext;
            this._mesh.useMesh(i);
            var r = q.preRender, n = q.preRender._key;
            return 0 === this._key.blendShader && this._key.submitType === n.submitType && this._key.blendShader === n.blendShader && Ie.activeShader && q.preRender.clipInfoID == this.clipInfoID && r.shaderValue.defines._value === this.shaderValue.defines._value && 0 == (this.shaderValue.defines._value & Ae.NOOPTMASK) ? Ie.activeShader.uploadTexture2D(e) : (te.activeBlendFunction !== this._blendFn && (Y.setBlend(i, !0), 
            this._blendFn(i), te.activeBlendFunction = this._blendFn), this.shaderValue.texture = e, 
            this.shaderValue.upload()), i.drawElements(4, this._numEle, 5123, this._startIdx), 
            R.renderBatches++, R.trianglesFaces += this._numEle / 3, 1;
        }, e.create = function(t, i, r) {
            var n = e._poolSize ? e.POOL[--e._poolSize] : new e(10016);
            n._mesh = i, n._key.clear(), n._key.submitType = 2, n._ref = 1, n._startIdx = i.indexNum * $.BYTES_PIDX, 
            n._numEle = 0;
            var a = t._nBlendType;
            if (n._key.blendShader = a, n._blendFn = t._targets ? te.targetFns[a] : te.fns[a], 
            n.shaderValue = r, t._colorFiler) {
                var s = t._colorFiler;
                r.defines.add(s.type), r.colorMat = s._mat, r.colorAlpha = s._alpha;
            }
            return n;
        }, e._poolSize = 0, e.POOL = [], e;
    }(q), Ie = function(t) {
        function e() {
            e.__super.call(this);
        }
        return n(e, "laya.webgl.shader.BaseShader", t), e.activeShader = null, e.bindShader = null, 
        e;
    }(b), Pe = function(t) {
        function e(t, i) {
            this._source = null, this._texW = 0, this._texH = 0, this.__destroyed = !1, this._discardTm = 0, 
            this.genID = 0, this.bitmap = {
                id: 0,
                _glTexture: null
            }, this.curUsedCovRate = 0, this.curUsedCovRateAtlas = 0, this.lastTouchTm = 0, 
            this.ri = null, e.__super.call(this), this._texW = t || U.atlasWidth, this._texH = i || U.atlasWidth, 
            this.bitmap.id = this.id, this.lock = !0;
        }
        n(e, "laya.webgl.text.TextTexture", t);
        var s = e.prototype;
        return s.recreateResource = function() {
            if (!this._source) {
                var t = T.isConchApp ? O.instance.getDefaultCommandEncoder() : J.mainContext, e = this._source = t.createTexture();
                this.bitmap._glTexture = e, Y.bindTexture(t, 3553, e), t.texImage2D(3553, 0, 6408, this._texW, this._texH, 0, 6408, 5121, null), 
                t.texParameteri(3553, 10241, 9729), t.texParameteri(3553, 10240, 9729), t.texParameteri(3553, 10242, 33071), 
                t.texParameteri(3553, 10243, 33071), U.debugUV && this.fillWhite();
            }
        }, s.addChar = function(t, e, i, r) {
            if (U.isWan1Wan) return this.addCharCanvas(t, e, i, r);
            !this._source && this.recreateResource();
            var n = T.isConchApp ? O.instance.getDefaultCommandEncoder() : J.mainContext;
            Y.bindTexture(n, 3553, this._source), !T.isConchApp && n.pixelStorei(37441, !0);
            var a = t.data;
            t.data instanceof Uint8ClampedArray && (a = new Uint8Array(a.buffer)), n.texSubImage2D(3553, 0, e, i, t.width, t.height, 6408, 5121, a), 
            !T.isConchApp && n.pixelStorei(37441, !1);
            var s = 0 / 0, h = 0 / 0, o = 0 / 0, l = 0 / 0;
            return T.isConchApp ? (s = e / this._texW, h = i / this._texH, o = (e + t.width) / this._texW, 
            l = (i + t.height) / this._texH) : (s = (e + 1) / this._texW, h = i / this._texH, 
            o = (e + t.width - 1) / this._texW, l = (i + t.height - 1) / this._texH), r = r || new Array(8), 
            r[0] = s, r[1] = h, r[2] = o, r[3] = h, r[4] = o, r[5] = l, r[6] = s, r[7] = l, 
            r;
        }, s.addCharCanvas = function(t, e, i, r) {
            !this._source && this.recreateResource();
            var n = T.isConchApp ? O.instance.getDefaultCommandEncoder() : J.mainContext;
            Y.bindTexture(n, 3553, this._source), !T.isConchApp && n.pixelStorei(37441, !0), 
            n.texSubImage2D(3553, 0, e, i, 6408, 5121, t), !T.isConchApp && n.pixelStorei(37441, !1);
            var a = 0 / 0, s = 0 / 0, h = 0 / 0, o = 0 / 0;
            return T.isConchApp ? (a = e / this._texW, s = i / this._texH, h = (e + t.width) / this._texW, 
            o = (i + t.height) / this._texH) : (a = (e + 1) / this._texW, s = (i + 1) / this._texH, 
            h = (e + t.width - 1) / this._texW, o = (i + t.height - 1) / this._texH), r = r || new Array(8), 
            r[0] = a, r[1] = s, r[2] = h, r[3] = s, r[4] = h, r[5] = o, r[6] = a, r[7] = o, 
            r;
        }, s.fillWhite = function() {
            !this._source && this.recreateResource();
            var t = T.isConchApp ? O.instance.getDefaultCommandEncoder() : J.mainContext, e = new Uint8Array(this._texW * this._texH * 4);
            e.fill(255), t.texSubImage2D(3553, 0, 0, 0, this._texW, this._texH, 6408, 5121, e);
        }, s.discard = function() {
            return this._texW != U.atlasWidth || this._texH != U.atlasWidth ? (this.destroy(), 
            void 0) : (this.genID++, e.poolLen >= e.pool.length && (e.pool = e.pool.concat(new Array(10))), 
            this._discardTm = i.stage.getFrameTm(), e.pool[e.poolLen++] = this, void 0);
        }, s.destroy = function() {
            this.__destroyed = !0;
            var t = T.isConchApp ? O.instance.getDefaultCommandEncoder() : J.mainContext;
            this._source && t.deleteTexture(this._source), this._source = null;
        }, s.touchRect = function(t, e) {
            this.lastTouchTm != e && (this.curUsedCovRate = 0, this.curUsedCovRateAtlas = 0, 
            this.lastTouchTm = e);
            var i = U.atlasWidth * U.atlasWidth, r = de.atlasGridW * de.atlasGridW;
            this.curUsedCovRate += t.bmpWidth * t.bmpHeight / i, this.curUsedCovRateAtlas += Math.ceil(t.bmpWidth / de.atlasGridW) * Math.ceil(t.bmpHeight / de.atlasGridW) / (i / r);
        }, s._getSource = function() {
            return this._source;
        }, s.drawOnScreen = function() {}, a(0, s, "texture", function() {
            return this;
        }), e.getTextTexture = function(t, i) {
            if (t != U.atlasWidth || t != U.atlasWidth) return new e(t, i);
            if (e.poolLen > 0) {
                var r = e.pool[--e.poolLen];
                return e.poolLen > 0 && e.clean(), r;
            }
            return new e(t, i);
        }, e.clean = function() {
            var t = i.stage.getFrameTm();
            if (0 === e.cleanTm && (e.cleanTm = t), t - e.cleanTm >= U.checkCleanTextureDt) {
                for (var r = 0; r < e.poolLen; r++) {
                    var n = e.pool[r];
                    t - n._discardTm >= U.destroyUnusedTextureDt && (n.destroy(), e.pool[r] = e.pool[e.poolLen - 1], 
                    e.poolLen--, r--);
                }
                e.cleanTm = t;
            }
        }, e.poolLen = 0, e.cleanTm = 0, r(e, [ "pool", function() {
            return this.pool = new Array(10);
        } ]), e;
    }(b), Be = function(t) {
        function e(t) {
            this._uint16Array = null, void 0 === t && (t = 35044), e.__super.call(this), this._bufferUsage = t, 
            this._bufferType = 34963, this._buffer = new ArrayBuffer(8);
        }
        n(e, "laya.webgl.utils.IndexBuffer2D", t);
        var i = e.prototype;
        return i._checkArrayUse = function() {
            this._uint16Array && (this._uint16Array = new Uint16Array(this._buffer));
        }, i.getUint16Array = function() {
            return this._uint16Array || (this._uint16Array = new Uint16Array(this._buffer));
        }, i._bindForVAO = function() {
            O.instance.bindBuffer(34963, this._glBuffer);
        }, i.bind = function() {
            return ie._bindedIndexBuffer !== this._glBuffer ? (O.instance.bindBuffer(34963, this._glBuffer), 
            ie._bindedIndexBuffer = this._glBuffer, !0) : !1;
        }, i.destory = function() {
            this._uint16Array = null, this._buffer = null;
        }, i.disposeResource = function() {
            this._disposeResource();
        }, e.create = function(t) {
            return void 0 === t && (t = 35044), new e(t);
        }, e;
    }(we), De = function(t) {
        function e(t, i) {
            this._floatArray32 = null, this._uint32Array = null, this._vertexStride = 0, e.__super.call(this), 
            this._vertexStride = t, this._bufferUsage = i, this._bufferType = 34962, this._buffer = new ArrayBuffer(8), 
            this._floatArray32 = new Float32Array(this._buffer), this._uint32Array = new Uint32Array(this._buffer);
        }
        n(e, "laya.webgl.utils.VertexBuffer2D", t);
        var i = e.prototype;
        return i.getFloat32Array = function() {
            return this._floatArray32;
        }, i.appendArray = function(t) {
            var e = this._byteLength >> 2;
            this.setByteLength(this._byteLength + 4 * t.length);
            var i = this.getFloat32Array();
            i.set(t, e), this._upload = !0;
        }, i._checkArrayUse = function() {
            this._floatArray32 && (this._floatArray32 = new Float32Array(this._buffer)), this._uint32Array && (this._uint32Array = new Uint32Array(this._buffer));
        }, i.deleteBuffer = function() {
            this._disposeResource();
        }, i._bindForVAO = function() {
            O.instance.bindBuffer(34962, this._glBuffer);
        }, i.bind = function() {
            return ie._bindedVertexBuffer !== this._glBuffer ? (O.instance.bindBuffer(34962, this._glBuffer), 
            ie._bindedVertexBuffer = this._glBuffer, !0) : !1;
        }, i.destroy = function() {
            laya.webgl.utils.Buffer.prototype.destroy.call(this), this._byteLength = 0, this._upload = !0, 
            this._buffer = null, this._floatArray32 = null;
        }, a(0, i, "vertexStride", function() {
            return this._vertexStride;
        }), e.create = function(t, i) {
            return void 0 === i && (i = 35048), new e(t, i);
        }, e;
    }(we), Oe = function(t) {
        function e(t, i) {
            e.__super.call(this), this._wrapModeU = 0, this._wrapModeV = 0, this._filterMode = 1, 
            this._readyed = !1, this._width = -1, this._height = -1, this._format = t, this._mipmap = i, 
            this._anisoLevel = 1, this._glTexture = O.instance.createTexture();
        }
        n(e, "laya.webgl.resource.BaseTexture", t);
        var i = e.prototype;
        return i._isPot = function(t) {
            return 0 === (t & t - 1);
        }, i._getGLFormat = function() {
            var t = 0;
            switch (this._format) {
              case 0:
                t = 6407;
                break;

              case 1:
                t = 6408;
                break;

              case 2:
                t = 6406;
                break;

              case 3:
                if (!Y._compressedTextureS3tc) throw "BaseTexture: not support DXT1 format.";
                t = Y._compressedTextureS3tc.COMPRESSED_RGB_S3TC_DXT1_EXT;
                break;

              case 4:
                if (!Y._compressedTextureS3tc) throw "BaseTexture: not support DXT5 format.";
                t = Y._compressedTextureS3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                break;

              case 5:
                if (!Y._compressedTextureEtc1) throw "BaseTexture: not support ETC1RGB format.";
                t = Y._compressedTextureEtc1.COMPRESSED_RGB_ETC1_WEBGL;
                break;

              case 9:
                if (!Y._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGB_2BPPV format.";
                t = Y._compressedTexturePvrtc.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                break;

              case 10:
                if (!Y._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGBA_2BPPV format.";
                t = Y._compressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                break;

              case 11:
                if (!Y._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGB_4BPPV format.";
                t = Y._compressedTexturePvrtc.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                break;

              case 12:
                if (!Y._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGBA_4BPPV format.";
                t = Y._compressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                break;

              default:
                throw "BaseTexture: unknown texture format.";
            }
            return t;
        }, i._setFilterMode = function(t) {
            var e = O.instance;
            switch (Y.bindTexture(e, this._glTextureType, this._glTexture), t) {
              case 0:
                this._mipmap ? e.texParameteri(this._glTextureType, 10241, 9984) : e.texParameteri(this._glTextureType, 10241, 9728), 
                e.texParameteri(this._glTextureType, 10240, 9728);
                break;

              case 1:
                this._mipmap ? e.texParameteri(this._glTextureType, 10241, 9985) : e.texParameteri(this._glTextureType, 10241, 9729), 
                e.texParameteri(this._glTextureType, 10240, 9729);
                break;

              case 2:
                this._mipmap ? e.texParameteri(this._glTextureType, 10241, 9987) : e.texParameteri(this._glTextureType, 10241, 9729), 
                e.texParameteri(this._glTextureType, 10240, 9729);
                break;

              default:
                throw new Error("BaseTexture:unknown filterMode value.");
            }
        }, i._setWarpMode = function(t, e) {
            var i = O.instance;
            if (Y.bindTexture(i, this._glTextureType, this._glTexture), this._isPot(this._width) && this._isPot(this._height)) switch (e) {
              case 0:
                i.texParameteri(this._glTextureType, t, 10497);
                break;

              case 1:
                i.texParameteri(this._glTextureType, t, 33071);
            } else i.texParameteri(this._glTextureType, t, 33071);
        }, i._setAnisotropy = function(t) {
            var e = Y._extTextureFilterAnisotropic;
            if (e && !o.onLimixiu) {
                t = Math.max(t, 1);
                var i = O.instance;
                Y.bindTexture(i, this._glTextureType, this._glTexture), t = Math.min(i.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT), t), 
                i.texParameterf(this._glTextureType, e.TEXTURE_MAX_ANISOTROPY_EXT, t);
            }
        }, i._disposeResource = function() {
            this._glTexture && (O.instance.deleteTexture(this._glTexture), this._glTexture = null, 
            this._setGPUMemory(0));
        }, i._getSource = function() {
            return this._readyed ? this._glTexture : null;
        }, i.generateMipmap = function() {
            this._isPot(this.width) && this._isPot(this.height) && O.instance.generateMipmap(this._glTextureType);
        }, a(0, i, "wrapModeU", function() {
            return this._wrapModeU;
        }, function(t) {
            this._wrapModeU !== t && (this._wrapModeU = t, -1 !== this._width && this._setWarpMode(10242, t));
        }), a(0, i, "mipmap", function() {
            return this._mipmap;
        }), a(0, i, "format", function() {
            return this._format;
        }), a(0, i, "wrapModeV", function() {
            return this._wrapModeV;
        }, function(t) {
            this._wrapModeV !== t && (this._wrapModeV = t, -1 !== this._height && this._setWarpMode(10243, t));
        }), a(0, i, "defaulteTexture", function() {
            throw "BaseTexture:must override it.";
        }), a(0, i, "filterMode", function() {
            return this._filterMode;
        }, function(t) {
            t !== this._filterMode && (this._filterMode = t, -1 !== this._width && -1 !== this._height && this._setFilterMode(t));
        }), a(0, i, "anisoLevel", function() {
            return this._anisoLevel;
        }, function(t) {
            t !== this._anisoLevel && (this._anisoLevel = Math.max(1, Math.min(16, t)), -1 !== this._width && -1 !== this._height && this._setAnisotropy(t));
        }), e.WARPMODE_REPEAT = 0, e.WARPMODE_CLAMP = 1, e.FILTERMODE_POINT = 0, e.FILTERMODE_BILINEAR = 1, 
        e.FILTERMODE_TRILINEAR = 2, e.FORMAT_R8G8B8 = 0, e.FORMAT_R8G8B8A8 = 1, e.FORMAT_ALPHA8 = 2, 
        e.FORMAT_DXT1 = 3, e.FORMAT_DXT5 = 4, e.FORMAT_ETC1RGB = 5, e.FORMAT_PVRTCRGB_2BPPV = 9, 
        e.FORMAT_PVRTCRGBA_2BPPV = 10, e.FORMAT_PVRTCRGB_4BPPV = 11, e.FORMAT_PVRTCRGBA_4BPPV = 12, 
        e.FORMAT_DEPTH_16 = 0, e.FORMAT_STENCIL_8 = 1, e.FORMAT_DEPTHSTENCIL_16_8 = 2, e.FORMAT_DEPTHSTENCIL_NONE = 3, 
        e;
    }(h), Le = function(t) {
        function e(t, i, r, n, a) {
            if (this._attribInfo = null, this.customCompile = !1, this._curActTexIndex = 0, 
            this.tag = {}, this._program = null, this._params = null, this._paramsMap = {}, 
            e.__super.call(this), !t || !i) throw "Shader Error";
            this._attribInfo = a, this._id = ++e._count, this._vs = t, this._ps = i, this._nameMap = n ? n : {}, 
            null != r && (e.sharders[r] = this), this.recreateResource(), this.lock = !0;
        }
        n(e, "laya.webgl.shader.Shader", t);
        var i = e.prototype;
        return i.recreateResource = function() {
            this._compile(), this._setGPUMemory(0);
        }, i._disposeResource = function() {
            J.mainContext.deleteShader(this._vshader), J.mainContext.deleteShader(this._pshader), 
            J.mainContext.deleteProgram(this._program), this._vshader = this._pshader = this._program = null, 
            this._params = null, this._paramsMap = {}, this._setGPUMemory(0), this._curActTexIndex = 0;
        }, i._compile = function() {
            if (this._vs && this._ps && !this._params) {
                this._reCompile = !0, this._params = [];
                var t;
                this.customCompile && (t = z.preGetParams(this._vs, this._ps));
                var i = J.mainContext;
                this._program = i.createProgram(), this._vshader = e._createShader(i, this._vs, 35633), 
                this._pshader = e._createShader(i, this._ps, 35632), i.attachShader(this._program, this._vshader), 
                i.attachShader(this._program, this._pshader);
                var r, n, a = 0, s = 0, h = this._attribInfo ? this._attribInfo.length : 0;
                for (a = 0; h > a; a += 2) i.bindAttribLocation(this._program, this._attribInfo[a + 1], this._attribInfo[a]);
                if (i.linkProgram(this._program), !this.customCompile && !i.getProgramParameter(this._program, 35714)) throw i.getProgramInfoLog(this._program);
                var o = this.customCompile ? t.uniforms.length : i.getProgramParameter(this._program, 35718);
                for (a = 0; o > a; a++) {
                    var l = this.customCompile ? t.uniforms[a] : i.getActiveUniform(this._program, a);
                    n = i.getUniformLocation(this._program, l.name), r = {
                        vartype: "uniform",
                        glfun: null,
                        ivartype: 1,
                        location: n,
                        name: l.name,
                        type: l.type,
                        isArray: !1,
                        isSame: !1,
                        preValue: null,
                        indexOfParams: 0
                    }, r.name.indexOf("[0]") > 0 && (r.name = r.name.substr(0, r.name.length - 3), r.isArray = !0, 
                    r.location = i.getUniformLocation(this._program, r.name)), this._params.push(r);
                }
                for (a = 0, s = this._params.length; s > a; a++) switch (r = this._params[a], r.indexOfParams = a, 
                r.index = 1, r.value = [ r.location, null ], r.codename = r.name, r.name = this._nameMap[r.codename] ? this._nameMap[r.codename] : r.codename, 
                this._paramsMap[r.name] = r, r._this = this, r.uploadedValue = [], r.type) {
                  case 5124:
                    r.fun = r.isArray ? this._uniform1iv : this._uniform1i;
                    break;

                  case 5126:
                    r.fun = r.isArray ? this._uniform1fv : this._uniform1f;
                    break;

                  case 35664:
                    r.fun = r.isArray ? this._uniform_vec2v : this._uniform_vec2;
                    break;

                  case 35665:
                    r.fun = r.isArray ? this._uniform_vec3v : this._uniform_vec3;
                    break;

                  case 35666:
                    r.fun = r.isArray ? this._uniform_vec4v : this._uniform_vec4;
                    break;

                  case 35678:
                    r.fun = this._uniform_sampler2D;
                    break;

                  case 35680:
                    r.fun = this._uniform_samplerCube;
                    break;

                  case 35676:
                    r.glfun = i.uniformMatrix4fv, r.fun = this._uniformMatrix4fv;
                    break;

                  case 35670:
                    r.fun = this._uniform1i;
                    break;

                  case 35674:
                  case 35675:
                    throw new Error("compile shader err!");

                  default:
                    throw new Error("compile shader err!");
                }
            }
        }, i.getUniform = function(t) {
            return this._paramsMap[t];
        }, i._uniform1f = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e ? (J.mainContext.uniform1f(t.location, i[0] = e), 1) : 0;
        }, i._uniform1fv = function(t, e) {
            if (e.length < 4) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (J.mainContext.uniform1fv(t.location, e), 
                i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], 1) : 0;
            }
            return J.mainContext.uniform1fv(t.location, e), 1;
        }, i._uniform_vec2 = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] ? (J.mainContext.uniform2f(t.location, i[0] = e[0], i[1] = e[1]), 
            1) : 0;
        }, i._uniform_vec2v = function(t, e) {
            if (e.length < 2) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (J.mainContext.uniform2fv(t.location, e), 
                i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], 1) : 0;
            }
            return J.mainContext.uniform2fv(t.location, e), 1;
        }, i._uniform_vec3 = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] ? (J.mainContext.uniform3f(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2]), 
            1) : 0;
        }, i._uniform_vec3v = function(t, e) {
            return J.mainContext.uniform3fv(t.location, e), 1;
        }, i._uniform_vec4 = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (J.mainContext.uniform4f(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3]), 
            1) : 0;
        }, i._uniform_vec4v = function(t, e) {
            return J.mainContext.uniform4fv(t.location, e), 1;
        }, i._uniformMatrix2fv = function(t, e) {
            return J.mainContext.uniformMatrix2fv(t.location, !1, e), 1;
        }, i._uniformMatrix3fv = function(t, e) {
            return J.mainContext.uniformMatrix3fv(t.location, !1, e), 1;
        }, i._uniformMatrix4fv = function(t, e) {
            return J.mainContext.uniformMatrix4fv(t.location, !1, e), 1;
        }, i._uniform1i = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e ? (J.mainContext.uniform1i(t.location, i[0] = e), 1) : 0;
        }, i._uniform1iv = function(t, e) {
            return J.mainContext.uniform1iv(t.location, e), 1;
        }, i._uniform_ivec2 = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] ? (J.mainContext.uniform2i(t.location, i[0] = e[0], i[1] = e[1]), 
            1) : 0;
        }, i._uniform_ivec2v = function(t, e) {
            return J.mainContext.uniform2iv(t.location, e), 1;
        }, i._uniform_vec3i = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] ? (J.mainContext.uniform3i(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2]), 
            1) : 0;
        }, i._uniform_vec3vi = function(t, e) {
            return J.mainContext.uniform3iv(t.location, e), 1;
        }, i._uniform_vec4i = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (J.mainContext.uniform4i(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3]), 
            1) : 0;
        }, i._uniform_vec4vi = function(t, e) {
            return J.mainContext.uniform4iv(t.location, e), 1;
        }, i._uniform_sampler2D = function(t, e) {
            var i = J.mainContext, r = t.uploadedValue;
            return null == r[0] ? (r[0] = this._curActTexIndex, i.uniform1i(t.location, this._curActTexIndex), 
            Y.activeTexture(i, 33984 + this._curActTexIndex), Y.bindTexture(i, 3553, e), this._curActTexIndex++, 
            1) : (Y.activeTexture(i, 33984 + r[0]), Y.bindTexture(i, 3553, e), 0);
        }, i._uniform_samplerCube = function(t, e) {
            var i = J.mainContext, r = t.uploadedValue;
            return null == r[0] ? (r[0] = this._curActTexIndex, i.uniform1i(t.location, this._curActTexIndex), 
            Y.activeTexture(i, 33984 + this._curActTexIndex), Y.bindTexture(i, 34067, e), this._curActTexIndex++, 
            1) : (Y.activeTexture(i, 33984 + r[0]), Y.bindTexture(i, 34067, e), 0);
        }, i._noSetValue = function(t) {
            console.log("no....:" + t.name);
        }, i.uploadOne = function(t, e) {
            Y.useProgram(J.mainContext, this._program);
            var i = this._paramsMap[t];
            i.fun.call(this, i, e);
        }, i.uploadTexture2D = function(t) {
            var e = Y;
            e._activeTextures[0] !== t && (e.bindTexture(J.mainContext, e.TEXTURE_2D, t), e._activeTextures[0] = t);
        }, i.upload = function(t, e) {
            Ie.activeShader = Ie.bindShader = this;
            var i = J.mainContext;
            Y.useProgram(i, this._program), this._reCompile ? (e = this._params, this._reCompile = !1) : e = e || this._params;
            for (var r, n, a = e.length, s = 0, h = 0; a > h; h++) r = e[h], null !== (n = t[r.name]) && (s += r.fun.call(this, r, n));
            R.shaderCall += s;
        }, i.uploadArray = function(t, e, i) {
            Ie.activeShader = this, Ie.bindShader = this, Y.useProgram(J.mainContext, this._program);
            for (var r, n, a = (this._params, 0), s = e - 2; s >= 0; s -= 2) n = this._paramsMap[t[s]], 
            n && (r = t[s + 1], null != r && (i && i[n.name] && i[n.name].bind(), a += n.fun.call(this, n, r)));
            R.shaderCall += a;
        }, i.getParams = function() {
            return this._params;
        }, i.setAttributesLocation = function(t) {
            this._attribInfo = t;
        }, e.getShader = function(t) {
            return e.sharders[t];
        }, e.create = function(t, i, r, n, a) {
            return new e(t, i, r, n, a);
        }, e.withCompile = function(t, i, r, n) {
            if (r && e.sharders[r]) return e.sharders[r];
            var a = e._preCompileShader[2e-4 * t];
            if (!a) throw new Error("withCompile shader err!" + t);
            return a.createShader(i, r, n, null);
        }, e.withCompile2D = function(t, i, r, n, a, s) {
            if (n && e.sharders[n]) return e.sharders[n];
            var h = e._preCompileShader[2e-4 * t + i];
            if (!h) throw new Error("withCompile shader err!" + t + " " + i);
            return h.createShader(r, n, a, s);
        }, e.addInclude = function(t, e) {
            z.addInclude(t, e);
        }, e.preCompile = function(t, i, r, n) {
            var a = 2e-4 * t;
            e._preCompileShader[a] = new z(i, r, n);
        }, e.preCompile2D = function(t, i, r, n, a) {
            var s = 2e-4 * t + i;
            e._preCompileShader[s] = new z(r, n, a);
        }, e._createShader = function(t, e, i) {
            var r = t.createShader(i);
            return t.shaderSource(r, e), t.compileShader(r), t.getShaderParameter(r, 35713) ? r : (console.log(t.getShaderInfoLog(r)), 
            null);
        }, e._count = 0, e._preCompileShader = {}, e.SHADERNAME2ID = 2e-4, e.sharders = new Array(32), 
        r(e, [ "nameKey", function() {
            return this.nameKey = new S();
        } ]), e;
    }(Ie), Fe = function(t) {
        function e(t, i, r, n) {
            this._mgrKey = 0, void 0 === r && (r = 0), void 0 === n && (n = 0), e.__super.call(this, r, !1), 
            this._glTextureType = 3553, this._width = t, this._height = i, this._depthStencilFormat = n, 
            this._create(t, i), this.lock = !0;
        }
        n(e, "laya.webgl.resource.RenderTexture2D", t);
        var i = e.prototype;
        return i.getIsReady = function() {
            return !0;
        }, i._create = function(t, e) {
            var i = O.instance;
            this._frameBuffer = i.createFramebuffer(), Y.bindTexture(i, this._glTextureType, this._glTexture);
            var r = this._getGLFormat();
            if (i.texImage2D(this._glTextureType, 0, r, t, e, 0, r, 5121, null), this._setGPUMemory(t * e * 4), 
            i.bindFramebuffer(36160, this._frameBuffer), i.framebufferTexture2D(36160, 36064, 3553, this._glTexture, 0), 
            3 !== this._depthStencilFormat) switch (this._depthStencilBuffer = i.createRenderbuffer(), 
            i.bindRenderbuffer(36161, this._depthStencilBuffer), this._depthStencilFormat) {
              case 0:
                i.renderbufferStorage(36161, 33189, t, e), i.framebufferRenderbuffer(36160, 36096, 36161, this._depthStencilBuffer);
                break;

              case 1:
                i.renderbufferStorage(36161, 36168, t, e), i.framebufferRenderbuffer(36160, 36128, 36161, this._depthStencilBuffer);
                break;

              case 2:
                i.renderbufferStorage(36161, 34041, t, e), i.framebufferRenderbuffer(36160, 33306, 36161, this._depthStencilBuffer);
            }
            i.bindFramebuffer(36160, null), i.bindRenderbuffer(36161, null), this._setWarpMode(10242, this._wrapModeU), 
            this._setWarpMode(10243, this._wrapModeV), this._setFilterMode(this._filterMode), 
            this._setAnisotropy(this._anisoLevel), this._readyed = !0, this._activeResource();
        }, i.generateMipmap = function() {
            this._isPot(this.width) && this._isPot(this.height) ? (this._mipmap = !0, O.instance.generateMipmap(this._glTextureType), 
            this._setFilterMode(this._filterMode), this._setGPUMemory(this.width * this.height * 4 * (1 + 1 / 3))) : (this._mipmap = !1, 
            this._setGPUMemory(this.width * this.height * 4));
        }, i.start = function() {
            var t = O.instance;
            O.instance.bindFramebuffer(36160, this._frameBuffer), this._lastRT = e._currentActive, 
            e._currentActive = this, this._readyed = !0, t.viewport(0, 0, this._width, this._height), 
            this._lastWidth = ce.width, this._lastHeight = ce.height, ce.width = this._width, 
            ce.height = this._height, Ie.activeShader = null;
        }, i.end = function() {
            O.instance.bindFramebuffer(36160, null), e._currentActive = null, this._readyed = !0;
        }, i.restore = function() {
            var t = O.instance;
            this._lastRT != e._currentActive && (O.instance.bindFramebuffer(36160, this._lastRT ? this._lastRT._frameBuffer : null), 
            e._currentActive = this._lastRT), this._readyed = !0, t.viewport(0, 0, this._lastWidth, this._lastHeight), 
            ce.width = this._lastWidth, ce.height = this._lastHeight, Ie.activeShader = null;
        }, i.clear = function(t, e, i, r) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 1);
            var n = O.instance;
            n.clearColor(t, e, i, r);
            var a = 16384;
            switch (this._depthStencilFormat) {
              case 33189:
                a |= 256;
                break;

              case 36168:
                a |= 1024;
                break;

              case 34041:
                a |= 256, a |= 1024;
            }
            n.clear(a);
        }, i.getData = function(t, e, i, r) {
            if (T.isConchApp && 2 == conchConfig.threadMode) throw "native 2 thread mode use getDataAsync";
            var n = O.instance;
            n.bindFramebuffer(36160, this._frameBuffer);
            var a = 36053 === n.checkFramebufferStatus(36160);
            if (!a) return n.bindFramebuffer(36160, null), null;
            var s = new Uint8Array(this._width * this._height * 4), h = this._getGLFormat();
            return n.readPixels(t, e, i, r, h, 5121, s), n.bindFramebuffer(36160, null), s;
        }, i.getDataAsync = function(t, e, i, r, n) {
            var a = O.instance;
            a.bindFramebuffer(36160, this._frameBuffer), a.readPixelsAsync(t, e, i, r, 6408, 5121, function(t) {
                n(new Uint8Array(t));
            }), a.bindFramebuffer(36160, null);
        }, i.recycle = function() {}, i._disposeResource = function() {
            if (this._frameBuffer) {
                var t = O.instance;
                t.deleteTexture(this._glTexture), t.deleteFramebuffer(this._frameBuffer), t.deleteRenderbuffer(this._depthStencilBuffer), 
                this._glTexture = null, this._frameBuffer = null, this._depthStencilBuffer = null, 
                this._setGPUMemory(0);
            }
        }, a(0, i, "depthStencilFormat", function() {
            return this._depthStencilFormat;
        }), a(0, i, "defaulteTexture", function() {
            return Ne.grayTexture;
        }), a(0, i, "sourceWidth", function() {
            return this._width;
        }), a(0, i, "sourceHeight", function() {
            return this._height;
        }), a(0, i, "offsetX", function() {
            return 0;
        }), a(0, i, "offsetY", function() {
            return 0;
        }), a(1, e, "currentActive", function() {
            return e._currentActive;
        }, laya.webgl.resource.BaseTexture._$SET_currentActive), e.pushRT = function() {
            e.rtStack.push({
                rt: e._currentActive,
                w: ce.width,
                h: ce.height
            });
        }, e.popRT = function() {
            var t = O.instance, i = e.rtStack.pop();
            i && (e._currentActive != i.rt && (O.instance.bindFramebuffer(36160, i.rt ? i.rt._frameBuffer : null), 
            e._currentActive = i.rt), t.viewport(0, 0, i.w, i.h), ce.width = i.w, ce.height = i.h);
        }, e._currentActive = null, e.rtStack = [], r(e, [ "defuv", function() {
            return this.defuv = [ 0, 0, 1, 0, 1, 1, 0, 1 ];
        }, "flipyuv", function() {
            return this.flipyuv = [ 0, 1, 1, 1, 1, 0, 0, 0 ];
        } ]), e;
    }(Oe), Ne = function(t) {
        function e(t, i, r, n, a) {
            if (void 0 === t && (t = 0), void 0 === i && (i = 0), void 0 === r && (r = 1), void 0 === n && (n = !0), 
            void 0 === a && (a = !1), e.__super.call(this, r, n), this._glTextureType = 3553, 
            this._width = t, this._height = i, this._canRead = a, this._setWarpMode(10242, this._wrapModeU), 
            this._setWarpMode(10243, this._wrapModeV), this._setFilterMode(this._filterMode), 
            this._setAnisotropy(this._anisoLevel), this._mipmap) {
                this._mipmapCount = Math.max(Math.ceil(Math.log2(t)) + 1, Math.ceil(Math.log2(2)) + 1);
                for (var s = 0; s < this._mipmapCount; s++) this._setPixels(null, s, Math.max(t >> s, 1), Math.max(i >> s, 1));
                this._setGPUMemory(t * i * 4 * (1 + 1 / 3));
            } else this._mipmapCount = 1, this._setGPUMemory(t * i * 4);
        }
        n(e, "laya.webgl.resource.Texture2D", t);
        var r = e.prototype;
        return r._getFormatByteCount = function() {
            switch (this._format) {
              case 0:
                return 3;

              case 1:
                return 4;

              case 2:
                return 1;

              default:
                throw "Texture2D: unknown format.";
            }
        }, r._setPixels = function(t, e, i, r) {
            var n = O.instance, a = this._glTextureType, s = this._getGLFormat();
            Y.bindTexture(n, a, this._glTexture), 0 === this.format ? (n.pixelStorei(3317, 1), 
            n.texImage2D(a, e, s, i, r, 0, s, 5121, t), n.pixelStorei(3317, 4)) : n.texImage2D(a, e, s, i, r, 0, s, 5121, t);
        }, r._calcualatesCompressedDataSize = function(t, e, i) {
            switch (t) {
              case 3:
              case 5:
                return (e + 3 >> 2) * (i + 3 >> 2) * 8;

              case 4:
                return (e + 3 >> 2) * (i + 3 >> 2) * 16;

              case 11:
              case 12:
                return Math.floor((Math.max(e, 8) * Math.max(i, 8) * 4 + 7) / 8);

              case 9:
              case 10:
                return Math.floor((Math.max(e, 16) * Math.max(i, 8) * 2 + 7) / 8);

              default:
                return 0;
            }
        }, r._pharseDDS = function(t) {
            var e = 827611204, i = 894720068, r = 4, n = 131072, a = 542327876, s = 31, h = 0, o = 1, l = 2, u = 3, c = 4, _ = 7, f = 20, d = 21, p = new Int32Array(t, 0, s);
            if (p[h] != a) throw "Invalid magic number in DDS header";
            if (!(p[f] & r)) throw "Unsupported format, must contain a FourCC code";
            var m = p[d];
            switch (this._format) {
              case 3:
                if (m !== e) throw "the FourCC code is not same with texture format.";
                break;

              case 4:
                if (m !== i) throw "the FourCC code is not same with texture format.";
                break;

              default:
                throw "unknown texture format.";
            }
            var x = 1;
            if (p[l] & n) {
                if (x = Math.max(1, p[_]), !this._mipmap) throw "the mipmap is not same with Texture2D.";
            } else if (this._mipmap) throw "the mipmap is not same with Texture2D.";
            var v = p[c], T = p[u];
            this._width = v, this._height = T;
            var g = p[o] + 4;
            this._upLoadCompressedTexImage2D(t, v, T, x, g, 0);
        }, r._pharseKTX = function(t) {
            var e = 13, i = 4, r = 7, n = 6, a = 11, s = 12, h = new Uint8Array(t, 0, 12);
            if (171 != h[0] || 75 != h[1] || 84 != h[2] || 88 != h[3] || 32 != h[4] || 49 != h[5] || 49 != h[6] || 187 != h[7] || 13 != h[8] || 10 != h[9] || 26 != h[10] || 10 != h[11]) throw "Invalid fileIdentifier in KTX header";
            var o = new Int32Array(h.buffer, h.length, e), l = o[i];
            switch (l) {
              case Y._compressedTextureEtc1.COMPRESSED_RGB_ETC1_WEBGL:
                this._format = 5;
                break;

              default:
                throw "unknown texture format.";
            }
            var u = o[a], c = o[n], _ = o[r];
            this._width = c, this._height = _;
            var f = 64 + o[s];
            this._upLoadCompressedTexImage2D(t, c, _, u, f, 4);
        }, r._pharsePVR = function(t) {
            var e = 0, i = 1, r = 2, n = 3, a = 55727696, s = 13, h = 0, o = 2, l = 6, u = 7, c = 11, _ = 12, f = new Int32Array(t, 0, s);
            if (f[h] != a) throw "Invalid magic number in PVR header";
            var d = f[o];
            switch (d) {
              case e:
                this._format = 9;
                break;

              case r:
                this._format = 11;
                break;

              case i:
                this._format = 10;
                break;

              case n:
                this._format = 12;
                break;

              default:
                throw "Texture2D:unknown PVR format.";
            }
            var p = f[c], m = f[u], x = f[l];
            this._width = m, this._height = x;
            var v = f[_] + 52;
            this._upLoadCompressedTexImage2D(t, m, x, p, v, 0);
        }, r._upLoadCompressedTexImage2D = function(t, e, i, r, n, a) {
            var s = O.instance, h = this._glTextureType;
            Y.bindTexture(s, h, this._glTexture);
            for (var o = this._getGLFormat(), l = n, u = 0; r > u; u++) {
                l += a;
                var c = this._calcualatesCompressedDataSize(this._format, e, i), _ = new Uint8Array(t, l, c);
                s.compressedTexImage2D(h, u, o, e, i, 0, _), e = Math.max(e >> 1, 1), i = Math.max(i >> 1, 1), 
                l += c;
            }
            var f = l;
            this._setGPUMemory(f), this._readyed = !0, this._activeResource();
        }, r.loadImageSource = function(t, e) {
            void 0 === e && (e = !1);
            var i = t.width, r = t.height;
            this._width = i, this._height = r, this._isPot(i) && this._isPot(r) || (this._mipmap = !1), 
            this._setWarpMode(10242, this._wrapModeU), this._setWarpMode(10243, this._wrapModeV), 
            this._setFilterMode(this._filterMode);
            var n = O.instance;
            Y.bindTexture(n, this._glTextureType, this._glTexture);
            var a = this._getGLFormat();
            T.isConchApp ? t instanceof laya.resource.HTMLCanvas ? n.texImage2D(this._glTextureType, 0, 6408, 6408, 5121, t) : (t.setPremultiplyAlpha(e), 
            n.texImage2D(this._glTextureType, 0, 6408, 6408, 5121, t)) : (e && n.pixelStorei(37441, !0), 
            n.texImage2D(this._glTextureType, 0, a, a, 5121, t), e && n.pixelStorei(37441, !1)), 
            this._mipmap ? (n.generateMipmap(this._glTextureType), this._setGPUMemory(i * r * 4 * (1 + 1 / 3))) : this._setGPUMemory(i * r * 4), 
            this._canRead && (T.isConchApp ? this._pixels = new Uint8Array(t._nativeObj.getImageData(0, 0, i, r)) : (o.canvas.size(i, r), 
            o.canvas.clear(), o.context.drawImage(t, 0, 0, i, r), this._pixels = new Uint8Array(o.context.getImageData(0, 0, i, r).data.buffer))), 
            this._readyed = !0, this._activeResource();
        }, r.setPixels = function(t, e) {
            if (void 0 === e && (e = 0), !t) throw "Texture2D:pixels can't be null.";
            var i = Math.max(this._width >> e, 1), r = Math.max(this._height >> e, 1), n = i * r * this._getFormatByteCount();
            if (t.length < n) throw "Texture2D:pixels length should at least " + n + ".";
            this._setPixels(t, e, i, r), this._canRead && (this._pixels = t), this._readyed = !0, 
            this._activeResource();
        }, r.setSubPixels = function(t, e, i, r, n, a) {
            if (void 0 === a && (a = 0), !n) throw "Texture2D:pixels can't be null.";
            var s = O.instance, h = this._glTextureType;
            Y.bindTexture(s, h, this._glTexture);
            var o = this._getGLFormat();
            0 === this._format ? (s.pixelStorei(3317, 1), s.texSubImage2D(h, a, t, e, i, r, o, 5121, n), 
            s.pixelStorei(3317, 4)) : s.texSubImage2D(h, a, t, e, i, r, o, 5121, n), this._readyed = !0, 
            this._activeResource();
        }, r.setCompressData = function(t) {
            switch (this._format) {
              case 3:
              case 4:
                this._pharseDDS(t);
                break;

              case 5:
                this._pharseKTX(t);
                break;

              case 9:
              case 10:
              case 11:
              case 12:
                this._pharsePVR(t);
                break;

              default:
                throw "Texture2D:unkonwn format.";
            }
        }, r._recoverResource = function() {}, r.getPixels = function() {
            if (this._canRead) return this._pixels;
            throw new Error("Texture2D: must set texture canRead is true.");
        }, a(0, r, "mipmapCount", function() {
            return this._mipmapCount;
        }), a(0, r, "defaulteTexture", function() {
            return laya.webgl.resource.Texture2D.grayTexture;
        }), e.__init__ = function() {
            var t = new Uint8Array(3);
            t[0] = 128, t[1] = 128, t[2] = 128, e.grayTexture = new e(1, 1, 0, !1, !1), e.grayTexture.setPixels(t), 
            e.grayTexture.lock = !0;
        }, e._parse = function(t, i, r) {
            var n = r ? new e(r[0], r[1], r[2], r[3], r[4]) : new e(0, 0);
            switch (i && (n.wrapModeU = i.wrapModeU, n.wrapModeV = i.wrapModeV, n.filterMode = i.filterMode, 
            n.anisoLevel = i.anisoLevel), n._format) {
              case 0:
              case 1:
                n.loadImageSource(t);
                break;

              case 3:
              case 4:
              case 5:
              case 9:
              case 10:
              case 11:
              case 12:
                n.setCompressData(t);
                break;

              default:
                throw "Texture2D:unkonwn format.";
            }
            return n;
        }, e.load = function(t, e) {
            i.loader.create(t, e, null, "TEXTURE2D");
        }, e.grayTexture = null, e;
    }(Oe), Ue = function(t) {
        function e(t, i, r, n, a) {
            this._params2dQuick2 = null, this._shaderValueWidth = 0, this._shaderValueHeight = 0, 
            e.__super.call(this, t, i, r, n, a);
        }
        n(e, "laya.webgl.shader.d2.Shader2X", t);
        var i = e.prototype;
        return i._disposeResource = function() {
            t.prototype._disposeResource.call(this), this._params2dQuick2 = null;
        }, i.upload2dQuick2 = function(t) {
            this.upload(t, this._params2dQuick2 || this._make2dQuick2());
        }, i._make2dQuick2 = function() {
            if (!this._params2dQuick2) {
                this._params2dQuick2 = [];
                for (var t, e = this._params, i = 0, r = e.length; r > i; i++) t = e[i], "size" !== t.name && this._params2dQuick2.push(t);
            }
            return this._params2dQuick2;
        }, e.create = function(t, i, r, n, a) {
            return new e(t, i, r, n, a);
        }, e;
    }(Le);
    i.__init([ ee, me ]);
}(window, document, Laya);