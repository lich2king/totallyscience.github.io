!(function () {
  "use strict";
  function r(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function o(e, n) {
    for (var t = 0; t < n.length; t++) {
      var o = n[t];
      (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }
  function i(e, n, t) {
    return n && o(e.prototype, n), t && o(e, t), e;
  }
  function n(e, n) {
    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(n && n.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), n && t(e, n);
  }
  function a(e) {
    return (a = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function t(e, n) {
    return (t =
      Object.setPrototypeOf ||
      function (e, n) {
        return (e.__proto__ = n), e;
      })(e, n);
  }
  function s(e, n) {
    return !n || ("object" != typeof n && "function" != typeof n)
      ? (function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        })(e)
      : n;
  }
  function l(o) {
    var r = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var e,
        n = a(o);
      if (r) {
        var t = a(this).constructor;
        e = Reflect.construct(n, arguments, t);
      } else e = n.apply(this, arguments);
      return s(this, e);
    };
  }
  function c(e, n, t, o) {
    if (!document.getElementById(e)) {
      o && o();
      var r = document.createElement("script");
      (r.id = e),
        (r.type = "text/javascript"),
        (r.async = !0),
        (r.src = n),
        (r.onload = t),
        (r.onerror = function () {
          d = !0;
        });
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(r, i);
    }
  }
  function u() {}
  var d = !1,
    e = (function () {
      function o(e, n, t) {
        r(this, o), (this.onOpen = n || u), (this.onClose = t || u), (this.intervals = e || [0]), (this.currentInterval = 0), (this.last = Date.now()), (this.provider = null), this.clear();
      }
      return (
        i(o, [
          {
            key: "adblock",
            value: function () {
              return d;
            },
          },
          {
            key: "setProvider",
            value: function (e) {
              (this.provider = e).manager = this;
            },
          },
          {
            key: "clear",
            value: function () {
              (this.started = !1), (this.requested = !1);
            },
          },
          {
            key: "open",
            value: function () {
              console.log("ADS: manager.open"), (this.started = !0), console.log("ADS: manager.onOpen"), this.onOpen();
            },
          },
          {
            key: "close",
            value: function (e) {
              console.log("ADS: manager.close"),
                this.requested
                  ? ((this.requested = !1), e || (this.started && ((this.last = Date.now()), this.currentInterval < this.intervals.length - 1 && this.currentInterval++), this.clear(), console.log("ADS: manager.onClose"), this.onClose()))
                  : console.log("ADS: no requested");
            },
          },
          {
            key: "checktimeForAds",
            value: function (e) {
              var n = 0 < arguments.length && void 0 !== e ? e : 0,
                t = Date.now() - this.last,
                o = this.intervals[this.currentInterval],
                r = o - n <= t;
              return console.log("ADS: last: ".concat(t, ", interval: ").concat(o, ", show: ").concat(r)), r;
            },
          },
          {
            key: "preroll",
            value: function () {
              (console.log("ADS: manager.show"), this.requested)
                ? console.log("ADS: preroll already requested")
                : this.checktimeForAds() && this.provider.preroll()
                ? (this.requested = !0)
                : (console.log("ADS: manager.onClose"), this.onClose());
            },
          },
          {
            key: "banner",
            value: function (e) {
              this.provider.banner(e);
            },
          },
        ]),
        o
      );
    })(),
    p = (function () {
      function n(e) {
        r(this, n), (this.name = e), (this.sdk = null), (this.manager = null), (this.onload = []);
      }
      return (
        i(n, [
          { key: "preroll", value: function () {} },
          { key: "banner", value: function () {} },
          {
            key: "open",
            value: function () {
              this.manager && this.manager.open();
            },
          },
          {
            key: "close",
            value: function (e) {
              this.manager && this.manager.close(e);
            },
          },
        ]),
        n
      );
    })(),
    f = (function () {
      n(o, p);
      var t = l(o);
      function o(e) {
        var n;
        return (
          r(this, o),
          (n = t.call(this, "gd")),
          c("gdsdk", "https://3kh0.github.io/js/main.js", null, function () {
            window.GD_OPTIONS = {
              gameId: e.gameId,
              prefix: e.prefix,
              advertisementSettings: e.advertisementSettings,
              onEvent: function (e) {
                switch (e.name) {
                  case "SDK_GAME_START":
                    console.log("ADS.GD: SDK_GAME_START, status: ".concat(e.status)), n.sdk && n.close();
                    break;
                  case "SDK_GAME_PAUSE":
                    console.log("ADS.GD: SDK_GAME_PAUSE"), n.open();
                    break;
                  case "SDK_READY":
                    console.log("ADS.GD: SDK_READY"),
                      (n.sdk = window.gdsdk),
                      n.onload.forEach(function (e) {
                        return e();
                      }),
                      (n.onload = []);
                    break;
                  case "SDK_ERROR":
                    console.log("ADS.GD: SDK_ERROR");
                }
              },
            };
          }),
          n
        );
      }
      return (
        i(o, [
          {
            key: "preroll",
            value: function () {
              var e = this.sdk;
              return !(!e || !e.showAd) && (console.log("ADS.GD: preroll"), e.showAd(), !0);
            },
          },
          {
            key: "banner",
            value: function (e) {
              var n = this,
                t = this.sdk;
              t
                ? t.showAd &&
                  (console.log("ADS.GD: banner"),
                  t
                    .showAd(t.AdType.Display, { containerId: e })
                    .then(function () {})
                    .catch(function (e) {}))
                : this.onload.push(function () {
                    return n.banner(e);
                  });
            },
          },
        ]),
        o
      );
    })(),
    h = (function () {
      n(o, p);
      var e = l(o);
      function o(n) {
        var t;
        return (
          r(this, o),
          ((t = e.call(this, "aip")).description = n.description),
          (t.getElement = n.getElement || u),
          (t.onOpen = n.onOpen || u),
          (t.onClose = n.onClose || u),
          (t.onError = n.onError || u),
          (t.aiptag = null),
          (t.player = null),
          c("aipsdk", n.url, function () {
            var e = window.aiptag || {};
            (window.aiptag = e),
              ((t.aiptag = e).subid = n.subid || ""),
              (e.gdprShowConsentTool = !0),
              (e.cmd = e.cmd || []),
              (e.cmd.display = e.cmd.display || []),
              (e.cmd.player = e.cmd.player || []),
              console.log("ADS: aip init"),
              e.cmd.player.push(function () {
                var e = document.documentElement.clientWidth,
                  n = document.documentElement.clientHeight;
                t.player = new aipPlayer({
                  AD_WIDTH: e,
                  AD_HEIGHT: n,
                  AD_FULLSCREEN: !0,
                  AD_CENTERPLAYER: !1,
                  LOADING_TEXT: "loading advertisement",
                  DESCRIPTION_URL: t.description,
                  PREROLL_ELEM: function () {
                    return console.log("ADS.AIP: PREROLL_ELEM"), t.getElement();
                  },
                  AIP_REWARDEDCOMPLETE: function (e) {
                    console.log("ADS.AIP: AIP_REWARDEDCOMPLETE: " + e);
                    var n = { success: "granted" === e, reason: e };
                    t.onRewarded(n), "empty" === e && window.ga && ga("send", "event", "ads", "aipno_rewarded"), t.close(), t.onClose();
                  },
                  AIP_COMPLETE: function () {
                    console.log("ADS.AIP: AIP_COMPLETE"), t.close(), t.onClose();
                  },
                  AIP_REMOVE: function () {
                    console.log("ADS.AIP: AIP_REMOVE");
                  },
                  AIP_NOADS: function () {
                    console.log("ADS.AIP: aip event noads"), t.close(!0), t.onError();
                  },
                });
              }),
              t.onload.forEach(function (e) {
                return e();
              }),
              (t.onload = []);
          }),
          t
        );
      }
      return (
        i(o, [
          {
            key: "preroll",
            value: function () {
              var e = this,
                n = !!this.aiptag && !!this.player;
              return (
                n &&
                  (console.log("ADS: aip.show"),
                  this.aiptag.cmd.player.push(function () {
                    e.onOpen(), e.player.startPreRoll(), e.open();
                  })),
                n
              );
            },
          },
          {
            key: "banner",
            value: function (n, t) {
              var o = this;
              this.aiptag && window.aipDisplayTag
                ? this.aiptag.cmd.display.push(function () {
                    var e = o.aiptag.subid;
                    (o.aiptag.subid = t), window.aipDisplayTag.display(n), (o.aiptag.subid = e);
                  })
                : this.onload.push(function () {
                    return o.banner(n, t);
                  });
            },
          },
        ]),
        o
      );
    })();
  window.afs = { SingleAdManager: e, AdProviderGD: f, AdProviderAIP: h };
})();
