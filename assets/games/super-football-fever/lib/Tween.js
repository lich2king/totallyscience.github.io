var _Group = function() {
    this._tweens = {}, this._tweensAddedDuringUpdate = {};
};

_Group.prototype = {
    getAll: function() {
        return Object.keys(this._tweens).map(function(tweenId) {
            return this._tweens[tweenId];
        }.bind(this));
    },
    removeAll: function() {
        this._tweens = {};
    },
    killTweensOf: function(target) {
        for (var key in this._tweens) {
            var tween = this._tweens[key];
            tween && tween._object === target && this.remove(tween);
        }
    },
    add: function(tween) {
        this._tweens[tween._id] = tween, this._tweensAddedDuringUpdate[tween._id] = tween;
    },
    remove: function(tween) {
        delete this._tweens[tween._id], delete this._tweensAddedDuringUpdate[tween._id];
    },
    update: function(time, preserve) {
        var tweenIds = Object.keys(this._tweens);
        if (0 === tweenIds.length) return !1;
        for (time = void 0 !== time ? time : TWEEN.now(); 0 < tweenIds.length; ) {
            this._tweensAddedDuringUpdate = {};
            for (var i = 0; i < tweenIds.length; i++) {
                var tId = tweenIds[i], tween = this._tweens[tId];
                tween && !1 === tween.update(time) && (tween._isPlaying = !1, preserve || delete this._tweens[tId]);
            }
            tweenIds = Object.keys(this._tweensAddedDuringUpdate);
        }
        return !0;
    }
};

var TWEEN = new _Group();

TWEEN.Group = _Group, TWEEN._nextId = 0, TWEEN.nextId = function() {
    return TWEEN._nextId++;
}, TWEEN.now = Date.now, TWEEN.Tween = function(object, group) {
    this._object = object, this._valuesStart = {}, this._valuesEnd = {}, this._valuesStartRepeat = {}, 
    this._duration = 1e3, this._repeat = 0, this._repeatDelayTime = void 0, this._yoyo = !1, 
    this._isPlaying = !1, this._reversed = !1, this._delayTime = 0, this._startTime = null, 
    this._easingFunction = TWEEN.Easing.Linear.None, this._interpolationFunction = TWEEN.Interpolation.Linear, 
    this._chainedTweens = [], this._onStartCallback = null, this._onStartCallbackFired = !1, 
    this._onUpdateCallback = null, this._onCompleteCallback = null, this._onStopCallback = null, 
    this._group = group || TWEEN, this._id = TWEEN.nextId();
}, TWEEN.Tween.prototype = {
    getId: function() {
        return this._id;
    },
    isPlaying: function() {
        return this._isPlaying;
    },
    to: function(properties, duration) {
        return this._valuesEnd = properties, void 0 !== duration && (this._duration = duration), 
        this;
    },
    start: function(time) {
        for (var property in this._group.add(this), this._isPlaying = !0, this._onStartCallbackFired = !1, 
        this._startTime = void 0 !== time ? "string" == typeof time ? TWEEN.now() + parseFloat(time) : time : TWEEN.now(), 
        this._startTime += this._delayTime, this._valuesEnd) {
            if (this._valuesEnd[property] instanceof Array) {
                if (0 === this._valuesEnd[property].length) continue;
                this._valuesEnd[property] = [ this._object[property] ].concat(this._valuesEnd[property]);
            }
            void 0 !== this._object[property] && (this._valuesStart[property] = this._object[property], 
            this._valuesStart[property] instanceof Array == !1 && (this._valuesStart[property] *= 1), 
            this._valuesStartRepeat[property] = this._valuesStart[property] || 0);
        }
        return this;
    },
    stop: function() {
        return this._isPlaying && (this._group.remove(this), this._isPlaying = !1, null !== this._onStopCallback && this._onStopCallback(this._object), 
        this.stopChainedTweens()), this;
    },
    end: function() {
        return this.update(this._startTime + this._duration), this;
    },
    stopChainedTweens: function() {
        for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) this._chainedTweens[i].stop();
    },
    group: function(group) {
        return this._group = group, this;
    },
    delay: function(amount) {
        return this._delayTime = amount, this;
    },
    repeat: function(times) {
        return this._repeat = times, this;
    },
    repeatDelay: function(amount) {
        return this._repeatDelayTime = amount, this;
    },
    yoyo: function(yy) {
        return this._yoyo = yy, this;
    },
    easing: function(eas) {
        return this._easingFunction = eas, this;
    },
    interpolation: function(inter) {
        return this._interpolationFunction = inter, this;
    },
    chain: function() {
        return this._chainedTweens = arguments, this;
    },
    onStart: function(callback) {
        return this._onStartCallback = callback, this;
    },
    onUpdate: function(callback) {
        return this._onUpdateCallback = callback, this;
    },
    onComplete: function(callback) {
        return this._onCompleteCallback = callback, this;
    },
    onStop: function(callback) {
        return this._onStopCallback = callback, this;
    },
    update: function(time) {
        var property, elapsed, value;
        if (time < this._startTime) return !0;
        for (property in !1 === this._onStartCallbackFired && (null !== this._onStartCallback && this._onStartCallback(this._object), 
        this._onStartCallbackFired = !0), elapsed = (time - this._startTime) / this._duration, 
        elapsed = 0 === this._duration || 1 < elapsed ? 1 : elapsed, value = this._easingFunction(elapsed), 
        this._valuesEnd) if (void 0 !== this._valuesStart[property]) {
            var start = this._valuesStart[property] || 0, end = this._valuesEnd[property];
            end instanceof Array ? this._object[property] = this._interpolationFunction(end, value) : ("string" == typeof end && (end = "+" === end.charAt(0) || "-" === end.charAt(0) ? start + parseFloat(end) : parseFloat(end)), 
            "number" == typeof end && (this._object[property] = start + (end - start) * value));
        }
        if (null !== this._onUpdateCallback && this._onUpdateCallback(this._object), 1 === elapsed) {
            if (0 < this._repeat) {
                for (property in isFinite(this._repeat) && this._repeat--, this._valuesStartRepeat) {
                    if ("string" == typeof this._valuesEnd[property] && (this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property])), 
                    this._yoyo) {
                        var tmp = this._valuesStartRepeat[property];
                        this._valuesStartRepeat[property] = this._valuesEnd[property], this._valuesEnd[property] = tmp;
                    }
                    this._valuesStart[property] = this._valuesStartRepeat[property];
                }
                return this._yoyo && (this._reversed = !this._reversed), void 0 !== this._repeatDelayTime ? this._startTime = time + this._repeatDelayTime : this._startTime = time + this._delayTime, 
                !0;
            }
            null !== this._onCompleteCallback && this._onCompleteCallback(this._object);
            for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) this._chainedTweens[i].start(this._startTime + this._duration);
            return !1;
        }
        return !0;
    }
}, TWEEN.Easing = {
    Linear: {
        None: function(k) {
            return k;
        }
    },
    Quadratic: {
        In: function(k) {
            return k * k;
        },
        Out: function(k) {
            return k * (2 - k);
        },
        InOut: function(k) {
            return (k *= 2) < 1 ? .5 * k * k : -.5 * (--k * (k - 2) - 1);
        }
    },
    Cubic: {
        In: function(k) {
            return k * k * k;
        },
        Out: function(k) {
            return --k * k * k + 1;
        },
        InOut: function(k) {
            return (k *= 2) < 1 ? .5 * k * k * k : .5 * ((k -= 2) * k * k + 2);
        }
    },
    Quartic: {
        In: function(k) {
            return k * k * k * k;
        },
        Out: function(k) {
            return 1 - --k * k * k * k;
        },
        InOut: function(k) {
            return (k *= 2) < 1 ? .5 * k * k * k * k : -.5 * ((k -= 2) * k * k * k - 2);
        }
    },
    Quintic: {
        In: function(k) {
            return k * k * k * k * k;
        },
        Out: function(k) {
            return --k * k * k * k * k + 1;
        },
        InOut: function(k) {
            return (k *= 2) < 1 ? .5 * k * k * k * k * k : .5 * ((k -= 2) * k * k * k * k + 2);
        }
    },
    Sinusoidal: {
        In: function(k) {
            return 1 - Math.cos(k * Math.PI / 2);
        },
        Out: function(k) {
            return Math.sin(k * Math.PI / 2);
        },
        InOut: function(k) {
            return .5 * (1 - Math.cos(Math.PI * k));
        }
    },
    Exponential: {
        In: function(k) {
            return 0 === k ? 0 : Math.pow(1024, k - 1);
        },
        Out: function(k) {
            return 1 === k ? 1 : 1 - Math.pow(2, -10 * k);
        },
        InOut: function(k) {
            return 0 === k ? 0 : 1 === k ? 1 : (k *= 2) < 1 ? .5 * Math.pow(1024, k - 1) : .5 * (2 - Math.pow(2, -10 * (k - 1)));
        }
    },
    Circular: {
        In: function(k) {
            return 1 - Math.sqrt(1 - k * k);
        },
        Out: function(k) {
            return Math.sqrt(1 - --k * k);
        },
        InOut: function(k) {
            return (k *= 2) < 1 ? -.5 * (Math.sqrt(1 - k * k) - 1) : .5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
        }
    },
    Elastic: {
        In: function(k) {
            return 0 === k ? 0 : 1 === k ? 1 : -Math.pow(2, 10 * (k - 1)) * Math.sin(5 * (k - 1.1) * Math.PI);
        },
        Out: function(k) {
            return 0 === k ? 0 : 1 === k ? 1 : Math.pow(2, -10 * k) * Math.sin(5 * (k - .1) * Math.PI) + 1;
        },
        InOut: function(k) {
            return 0 === k ? 0 : 1 === k ? 1 : (k *= 2) < 1 ? -.5 * Math.pow(2, 10 * (k - 1)) * Math.sin(5 * (k - 1.1) * Math.PI) : .5 * Math.pow(2, -10 * (k - 1)) * Math.sin(5 * (k - 1.1) * Math.PI) + 1;
        }
    },
    Back: {
        In: function(k) {
            var s = 1.70158;
            return k * k * ((s + 1) * k - s);
        },
        Out: function(k) {
            var s = 1.70158;
            return --k * k * ((s + 1) * k + s) + 1;
        },
        InOut: function(k) {
            var s = 2.5949095;
            return (k *= 2) < 1 ? k * k * ((s + 1) * k - s) * .5 : .5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
        }
    },
    Bounce: {
        In: function(k) {
            return 1 - TWEEN.Easing.Bounce.Out(1 - k);
        },
        Out: function(k) {
            return k < 1 / 2.75 ? 7.5625 * k * k : k < 2 / 2.75 ? 7.5625 * (k -= 1.5 / 2.75) * k + .75 : k < 2.5 / 2.75 ? 7.5625 * (k -= 2.25 / 2.75) * k + .9375 : 7.5625 * (k -= 2.625 / 2.75) * k + .984375;
        },
        InOut: function(k) {
            return k < .5 ? .5 * TWEEN.Easing.Bounce.In(2 * k) : .5 * TWEEN.Easing.Bounce.Out(2 * k - 1) + .5;
        }
    }
}, TWEEN.Interpolation = {
    Linear: function(v, k) {
        var m = v.length - 1, f = m * k, i = Math.floor(f), fn = TWEEN.Interpolation.Utils.Linear;
        return k < 0 ? fn(v[0], v[1], f) : 1 < k ? fn(v[m], v[m - 1], m - f) : fn(v[i], v[m < i + 1 ? m : i + 1], f - i);
    },
    Bezier: function(v, k) {
        for (var b = 0, n = v.length - 1, pw = Math.pow, bn = TWEEN.Interpolation.Utils.Bernstein, i = 0; i <= n; i++) b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
        return b;
    },
    CatmullRom: function(v, k) {
        var m = v.length - 1, f = m * k, i = Math.floor(f), fn = TWEEN.Interpolation.Utils.CatmullRom;
        return v[0] === v[m] ? (k < 0 && (i = Math.floor(f = m * (1 + k))), fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i)) : k < 0 ? v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]) : 1 < k ? v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]) : fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
    },
    Utils: {
        Linear: function(p0, p1, t) {
            return (p1 - p0) * t + p0;
        },
        Bernstein: function(n, i) {
            var fc = TWEEN.Interpolation.Utils.Factorial;
            return fc(n) / fc(i) / fc(n - i);
        },
        Factorial: function() {
            var a = [ 1 ];
            return function(n) {
                var s = 1;
                if (a[n]) return a[n];
                for (var i = n; 1 < i; i--) s *= i;
                return a[n] = s;
            };
        }(),
        CatmullRom: function(p0, p1, p2, p3, t) {
            var v0 = .5 * (p2 - p0), v1 = .5 * (p3 - p1), t2 = t * t;
            return (2 * p1 - 2 * p2 + v0 + v1) * (t * t2) + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
        }
    }
}, function(root) {
    "function" == typeof define && define.amd ? define([], function() {
        return TWEEN;
    }) : "undefined" != typeof module && "object" == typeof exports ? gmodule.exports = TWEEN : void 0 !== root && (root.TWEEN = TWEEN);
}(this), window.TWEEN = TWEEN;