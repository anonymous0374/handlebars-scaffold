webpackJsonp([0],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(329);

__webpack_require__(330);

__webpack_require__(331);

var _debug = __webpack_require__(332);

var _debug2 = _interopRequireDefault(_debug);

__webpack_require__(89);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// execute this js file first

console.log('hello world!');

// hot module is only enabled in development workflow, see
// webpack.config.development.js
if (true) {
    module.hot.accept(125, function () {
        console.log('main.js has been changed!');
    });
}

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 330:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscolumns-customelements-flexbox-history-picture-pointerevents-postmessage-sizes-srcset-webgl-websockets-webworkers-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles !*/
!function (e, t, n) {
  function r(e, t) {
    return (typeof e === "undefined" ? "undefined" : _typeof(e)) === t;
  }function o() {
    var e, t, n, o, i, s, a;for (var l in C) {
      if (C.hasOwnProperty(l)) {
        if (e = [], t = C[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) {
          e.push(t.options.aliases[n].toLowerCase());
        }for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) {
          s = e[i], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), w.push((o ? "" : "no-") + a.join("-"));
        }
      }
    }
  }function i(e) {
    var t = S.className,
        n = Modernizr._config.classPrefix || "";if (x && (t = t.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");t = t.replace(r, "$1" + n + "js$2");
    }Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), x ? S.className.baseVal = t : S.className = t);
  }function s(e, t) {
    if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) for (var n in e) {
      P(e, n) && s(n, e[n]);
    } else {
      e = e.toLowerCase();var r = e.split("."),
          o = Modernizr[r[0]];if (2 == r.length && (o = o[r[1]]), "undefined" != typeof o) return Modernizr;t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), i([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t);
    }return Modernizr;
  }function a() {
    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : x ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
  }function l() {
    var e = t.body;return e || (e = a(x ? "svg" : "body"), e.fake = !0), e;
  }function u(e, n, r, o) {
    var i,
        s,
        u,
        f,
        d = "modernizr",
        c = a("div"),
        p = l();if (parseInt(r, 10)) for (; r--;) {
      u = a("div"), u.id = o ? o[r] : d + (r + 1), c.appendChild(u);
    }return i = a("style"), i.type = "text/css", i.id = "s" + d, (p.fake ? p : c).appendChild(i), p.appendChild(c), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), c.id = d, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = S.style.overflow, S.style.overflow = "hidden", S.appendChild(p)), s = n(c, e), p.fake ? (p.parentNode.removeChild(p), S.style.overflow = f, S.offsetHeight) : c.parentNode.removeChild(c), !!s;
  }function f(e, t) {
    return !!~("" + e).indexOf(t);
  }function d(e) {
    return e.replace(/([A-Z])/g, function (e, t) {
      return "-" + t.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }function c(t, n, r) {
    var o;if ("getComputedStyle" in e) {
      o = getComputedStyle.call(e, t, n);var i = e.console;if (null !== o) r && (o = o.getPropertyValue(r));else if (i) {
        var s = i.error ? "error" : "log";i[s].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
      }
    } else o = !n && t.currentStyle && t.currentStyle[r];return o;
  }function p(t, r) {
    var o = t.length;if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;) {
        if (e.CSS.supports(d(t[o]), r)) return !0;
      }return !1;
    }if ("CSSSupportsRule" in e) {
      for (var i = []; o--;) {
        i.push("(" + d(t[o]) + ":" + r + ")");
      }return i = i.join(" or "), u("@supports (" + i + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == c(e, null, "position");
      });
    }return n;
  }function m(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
      return t + n.toUpperCase();
    }).replace(/^-/, "");
  }function h(e, t, o, i) {
    function s() {
      u && (delete N.style, delete N.modElem);
    }if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) {
      var l = p(e, o);if (!r(l, "undefined")) return l;
    }for (var u, d, c, h, v, A = ["modernizr", "tspan", "samp"]; !N.style && A.length;) {
      u = !0, N.modElem = a(A.shift()), N.style = N.modElem.style;
    }for (c = e.length, d = 0; c > d; d++) {
      if (h = e[d], v = N.style[h], f(h, "-") && (h = m(h)), N.style[h] !== n) {
        if (i || r(o, "undefined")) return s(), "pfx" == t ? h : !0;try {
          N.style[h] = o;
        } catch (g) {}if (N.style[h] != v) return s(), "pfx" == t ? h : !0;
      }
    }return s(), !1;
  }function v(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }function A(e, t, n) {
    var o;for (var i in e) {
      if (e[i] in t) return n === !1 ? e[i] : (o = t[e[i]], r(o, "function") ? v(o, n || t) : o);
    }return !1;
  }function g(e, t, n, o, i) {
    var s = e.charAt(0).toUpperCase() + e.slice(1),
        a = (e + " " + O.join(s + " ") + s).split(" ");return r(t, "string") || r(t, "undefined") ? h(a, t, o, i) : (a = (e + " " + T.join(s + " ") + s).split(" "), A(a, t, n));
  }function y(e, t, r) {
    return g(e, n, n, t, r);
  }var C = [],
      b = { _version: "3.5.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function on(e, t) {
      var n = this;setTimeout(function () {
        t(n[e]);
      }, 0);
    }, addTest: function addTest(e, t, n) {
      C.push({ name: e, fn: t, options: n });
    }, addAsyncTest: function addAsyncTest(e) {
      C.push({ name: null, fn: e });
    } },
      Modernizr = function Modernizr() {};Modernizr.prototype = b, Modernizr = new Modernizr();var w = [],
      S = t.documentElement,
      x = "svg" === S.nodeName.toLowerCase(),
      _ = "Moz O ms Webkit",
      T = b._config.usePrefixes ? _.toLowerCase().split(" ") : [];b._domPrefixes = T;var E = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];b._prefixes = E;var P;!function () {
    var e = {}.hasOwnProperty;P = r(e, "undefined") || r(e.call, "undefined") ? function (e, t) {
      return t in e && r(e.constructor.prototype[t], "undefined");
    } : function (t, n) {
      return e.call(t, n);
    };
  }(), b._l = {}, b.on = function (e, t) {
    this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function () {
      Modernizr._trigger(e, Modernizr[e]);
    }, 0);
  }, b._trigger = function (e, t) {
    if (this._l[e]) {
      var n = this._l[e];setTimeout(function () {
        var e, r;for (e = 0; e < n.length; e++) {
          (r = n[e])(t);
        }
      }, 0), delete this._l[e];
    }
  }, Modernizr._q.push(function () {
    b.addTest = s;
  });var k = function () {
    function e(e, t) {
      var o;return e ? (t && "string" != typeof t || (t = a(t || "div")), e = "on" + e, o = e in t, !o && r && (t.setAttribute || (t = a("div")), t.setAttribute(e, ""), o = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), o) : !1;
    }var r = !("onblur" in t.documentElement);return e;
  }();b.hasEvent = k;var z = function () {
    var t = e.matchMedia || e.msMatchMedia;return t ? function (e) {
      var n = t(e);return n && n.matches || !1;
    } : function (t) {
      var n = !1;return u("@media " + t + " { #modernizr { position: absolute; } }", function (t) {
        n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position;
      }), n;
    };
  }();b.mq = z;var B = function B(e, t) {
    var n = !1,
        r = a("div"),
        o = r.style;if (e in o) {
      var i = T.length;for (o[e] = t, n = o[e]; i-- && !n;) {
        o[e] = "-" + T[i] + "-" + t, n = o[e];
      }
    }return "" === n && (n = !1), n;
  };b.prefixedCSSValue = B;var O = b._config.usePrefixes ? _.split(" ") : [];b._cssomPrefixes = O;var L = { elem: a("modernizr") };Modernizr._q.push(function () {
    delete L.elem;
  });var N = { style: L.elem.style };Modernizr._q.unshift(function () {
    delete N.style;
  }), b.testAllProps = g, b.testAllProps = y;b.testProp = function (e, t, r) {
    return h([e], n, t, r);
  }, b.testStyles = u;Modernizr.addTest("customelements", "customElements" in e), Modernizr.addTest("history", function () {
    var t = navigator.userAgent;return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") || "file:" === location.protocol ? e.history && "pushState" in e.history : !1;
  }), Modernizr.addTest("pointerevents", function () {
    var e = !1,
        t = T.length;for (e = Modernizr.hasEvent("pointerdown"); t-- && !e;) {
      k(T[t] + "pointerdown") && (e = !0);
    }return e;
  }), Modernizr.addTest("postmessage", "postMessage" in e), Modernizr.addTest("webgl", function () {
    var t = a("canvas"),
        n = "probablySupportsContext" in t ? "probablySupportsContext" : "supportsContext";return n in t ? t[n]("webgl") || t[n]("experimental-webgl") : "WebGLRenderingContext" in e;
  });var R = !1;try {
    R = "WebSocket" in e && 2 === e.WebSocket.CLOSING;
  } catch (j) {}Modernizr.addTest("websockets", R), Modernizr.addTest("cssanimations", y("animationName", "a", !0)), function () {
    Modernizr.addTest("csscolumns", function () {
      var e = !1,
          t = y("columnCount");try {
        e = !!t, e && (e = new Boolean(e));
      } catch (n) {}return e;
    });for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++) {
      e = n[r].toLowerCase(), t = y("column" + n[r]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || y(n[r])), Modernizr.addTest("csscolumns." + e, t);
    }
  }(), Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)), Modernizr.addTest("picture", "HTMLPictureElement" in e), Modernizr.addAsyncTest(function () {
    var e,
        t,
        n,
        r = a("img"),
        o = "sizes" in r;!o && "srcset" in r ? (t = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==", e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", n = function n() {
      s("sizes", 2 == r.width);
    }, r.onload = n, r.onerror = n, r.setAttribute("sizes", "9px"), r.srcset = e + " 1w," + t + " 8w", r.src = e) : s("sizes", o);
  }), Modernizr.addTest("srcset", "srcset" in a("img")), Modernizr.addTest("webworkers", "Worker" in e), o(), i(w), delete b.addTest, delete b.addAsyncTest;for (var M = 0; M < Modernizr._q.length; M++) {
    Modernizr._q[M]();
  }e.Modernizr = Modernizr;
}(window, document);

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(334);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(333)))

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(335);

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ 335:
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ })

},[125]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL2pzL3ZlbmRvci9tb2Rlcm5penItMy41LjAubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJtb2R1bGUiLCJob3QiLCJhY2NlcHQiLCJlIiwidCIsIm4iLCJyIiwibyIsImkiLCJzIiwiYSIsImwiLCJDIiwiaGFzT3duUHJvcGVydHkiLCJuYW1lIiwicHVzaCIsInRvTG93ZXJDYXNlIiwib3B0aW9ucyIsImFsaWFzZXMiLCJsZW5ndGgiLCJmbiIsInNwbGl0IiwiTW9kZXJuaXpyIiwiQm9vbGVhbiIsInciLCJqb2luIiwiUyIsImNsYXNzTmFtZSIsIl9jb25maWciLCJjbGFzc1ByZWZpeCIsIngiLCJiYXNlVmFsIiwiZW5hYmxlSlNDbGFzcyIsIlJlZ0V4cCIsInJlcGxhY2UiLCJlbmFibGVDbGFzc2VzIiwiUCIsIl90cmlnZ2VyIiwiY3JlYXRlRWxlbWVudCIsImFyZ3VtZW50cyIsImNyZWF0ZUVsZW1lbnROUyIsImNhbGwiLCJhcHBseSIsImJvZHkiLCJmYWtlIiwidSIsImYiLCJkIiwiYyIsInAiLCJwYXJzZUludCIsImlkIiwiYXBwZW5kQ2hpbGQiLCJ0eXBlIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjcmVhdGVUZXh0Tm9kZSIsInN0eWxlIiwiYmFja2dyb3VuZCIsIm92ZXJmbG93IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwib2Zmc2V0SGVpZ2h0IiwiaW5kZXhPZiIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZXJyb3IiLCJjdXJyZW50U3R5bGUiLCJDU1MiLCJzdXBwb3J0cyIsIm0iLCJ0b1VwcGVyQ2FzZSIsImgiLCJOIiwibW9kRWxlbSIsInYiLCJBIiwic2hpZnQiLCJnIiwiY2hhckF0Iiwic2xpY2UiLCJPIiwiVCIsInkiLCJiIiwiX3ZlcnNpb24iLCJ1c2VQcmVmaXhlcyIsIl9xIiwib24iLCJzZXRUaW1lb3V0IiwiYWRkVGVzdCIsImFkZEFzeW5jVGVzdCIsInByb3RvdHlwZSIsImRvY3VtZW50RWxlbWVudCIsIm5vZGVOYW1lIiwiXyIsIl9kb21QcmVmaXhlcyIsIkUiLCJfcHJlZml4ZXMiLCJjb25zdHJ1Y3RvciIsIl9sIiwiayIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImhhc0V2ZW50IiwieiIsIm1hdGNoTWVkaWEiLCJtc01hdGNoTWVkaWEiLCJtYXRjaGVzIiwicG9zaXRpb24iLCJtcSIsIkIiLCJwcmVmaXhlZENTU1ZhbHVlIiwiX2Nzc29tUHJlZml4ZXMiLCJMIiwiZWxlbSIsInVuc2hpZnQiLCJ0ZXN0QWxsUHJvcHMiLCJ0ZXN0UHJvcCIsInRlc3RTdHlsZXMiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaGlzdG9yeSIsIlIiLCJXZWJTb2NrZXQiLCJDTE9TSU5HIiwiaiIsIndpZHRoIiwib25sb2FkIiwib25lcnJvciIsInNyY3NldCIsInNyYyIsIk0iLCJ3aW5kb3ciLCJkb2N1bWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBSDBDOztBQUsxQ0EsUUFBUUMsR0FBUjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxJQUFKLEVBQWdCO0FBQ1pDLFdBQU9DLEdBQVAsQ0FBV0Ms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QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7OztBQ2xNQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9jc3MvbWFpbi5jc3MnO1xuaW1wb3J0ICcuLi9jc3Mvbm9ybWFsaXplLmNzcyc7XG5pbXBvcnQgJy4vdmVuZG9yL21vZGVybml6ci0zLjUuMC5taW4uanMnOyAvLyBleGVjdXRlIHRoaXMganMgZmlsZSBmaXJzdFxuXG5pbXBvcnQgZGVidWcgZnJvbSAnZGVidWcnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cbmNvbnNvbGUubG9nKGBoZWxsbyB3b3JsZCFgKTtcblxuLy8gaG90IG1vZHVsZSBpcyBvbmx5IGVuYWJsZWQgaW4gZGV2ZWxvcG1lbnQgd29ya2Zsb3csIHNlZVxuLy8gd2VicGFjay5jb25maWcuZGV2ZWxvcG1lbnQuanNcbmlmIChtb2R1bGUuaG90KSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vbWFpbi5qcycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgbWFpbi5qcyBoYXMgYmVlbiBjaGFuZ2VkIWApO1xuICAgIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wdWJsaWMvanMvbWFpbi5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcHVibGljL2Nzcy9tYWluLmNzc1xuLy8gbW9kdWxlIGlkID0gMzI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcHVibGljL2Nzcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSAzMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohIG1vZGVybml6ciAzLjUuMCAoQ3VzdG9tIEJ1aWxkKSB8IE1JVCAqXG4gKiBodHRwczovL21vZGVybml6ci5jb20vZG93bmxvYWQvPy1jc3NhbmltYXRpb25zLWNzc2NvbHVtbnMtY3VzdG9tZWxlbWVudHMtZmxleGJveC1oaXN0b3J5LXBpY3R1cmUtcG9pbnRlcmV2ZW50cy1wb3N0bWVzc2FnZS1zaXplcy1zcmNzZXQtd2ViZ2wtd2Vic29ja2V0cy13ZWJ3b3JrZXJzLWFkZHRlc3QtZG9tcHJlZml4ZXMtaGFzZXZlbnQtbXEtcHJlZml4ZWRjc3N2YWx1ZS1wcmVmaXhlcy1zZXRjbGFzc2VzLXRlc3RhbGxwcm9wcy10ZXN0cHJvcC10ZXN0c3R5bGVzICEqL1xuIWZ1bmN0aW9uKGUsdCxuKXtmdW5jdGlvbiByKGUsdCl7cmV0dXJuIHR5cGVvZiBlPT09dH1mdW5jdGlvbiBvKCl7dmFyIGUsdCxuLG8saSxzLGE7Zm9yKHZhciBsIGluIEMpaWYoQy5oYXNPd25Qcm9wZXJ0eShsKSl7aWYoZT1bXSx0PUNbbF0sdC5uYW1lJiYoZS5wdXNoKHQubmFtZS50b0xvd2VyQ2FzZSgpKSx0Lm9wdGlvbnMmJnQub3B0aW9ucy5hbGlhc2VzJiZ0Lm9wdGlvbnMuYWxpYXNlcy5sZW5ndGgpKWZvcihuPTA7bjx0Lm9wdGlvbnMuYWxpYXNlcy5sZW5ndGg7bisrKWUucHVzaCh0Lm9wdGlvbnMuYWxpYXNlc1tuXS50b0xvd2VyQ2FzZSgpKTtmb3Iobz1yKHQuZm4sXCJmdW5jdGlvblwiKT90LmZuKCk6dC5mbixpPTA7aTxlLmxlbmd0aDtpKyspcz1lW2ldLGE9cy5zcGxpdChcIi5cIiksMT09PWEubGVuZ3RoP01vZGVybml6clthWzBdXT1vOighTW9kZXJuaXpyW2FbMF1dfHxNb2Rlcm5penJbYVswXV1pbnN0YW5jZW9mIEJvb2xlYW58fChNb2Rlcm5penJbYVswXV09bmV3IEJvb2xlYW4oTW9kZXJuaXpyW2FbMF1dKSksTW9kZXJuaXpyW2FbMF1dW2FbMV1dPW8pLHcucHVzaCgobz9cIlwiOlwibm8tXCIpK2Euam9pbihcIi1cIikpfX1mdW5jdGlvbiBpKGUpe3ZhciB0PVMuY2xhc3NOYW1lLG49TW9kZXJuaXpyLl9jb25maWcuY2xhc3NQcmVmaXh8fFwiXCI7aWYoeCYmKHQ9dC5iYXNlVmFsKSxNb2Rlcm5penIuX2NvbmZpZy5lbmFibGVKU0NsYXNzKXt2YXIgcj1uZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIrbitcIm5vLWpzKFxcXFxzfCQpXCIpO3Q9dC5yZXBsYWNlKHIsXCIkMVwiK24rXCJqcyQyXCIpfU1vZGVybml6ci5fY29uZmlnLmVuYWJsZUNsYXNzZXMmJih0Kz1cIiBcIituK2Uuam9pbihcIiBcIituKSx4P1MuY2xhc3NOYW1lLmJhc2VWYWw9dDpTLmNsYXNzTmFtZT10KX1mdW5jdGlvbiBzKGUsdCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpZm9yKHZhciBuIGluIGUpUChlLG4pJiZzKG4sZVtuXSk7ZWxzZXtlPWUudG9Mb3dlckNhc2UoKTt2YXIgcj1lLnNwbGl0KFwiLlwiKSxvPU1vZGVybml6cltyWzBdXTtpZigyPT1yLmxlbmd0aCYmKG89b1tyWzFdXSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG8pcmV0dXJuIE1vZGVybml6cjt0PVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dCgpOnQsMT09ci5sZW5ndGg/TW9kZXJuaXpyW3JbMF1dPXQ6KCFNb2Rlcm5penJbclswXV18fE1vZGVybml6cltyWzBdXWluc3RhbmNlb2YgQm9vbGVhbnx8KE1vZGVybml6cltyWzBdXT1uZXcgQm9vbGVhbihNb2Rlcm5penJbclswXV0pKSxNb2Rlcm5penJbclswXV1bclsxXV09dCksaShbKHQmJjAhPXQ/XCJcIjpcIm5vLVwiKStyLmpvaW4oXCItXCIpXSksTW9kZXJuaXpyLl90cmlnZ2VyKGUsdCl9cmV0dXJuIE1vZGVybml6cn1mdW5jdGlvbiBhKCl7cmV0dXJuXCJmdW5jdGlvblwiIT10eXBlb2YgdC5jcmVhdGVFbGVtZW50P3QuY3JlYXRlRWxlbWVudChhcmd1bWVudHNbMF0pOng/dC5jcmVhdGVFbGVtZW50TlMuY2FsbCh0LFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixhcmd1bWVudHNbMF0pOnQuY3JlYXRlRWxlbWVudC5hcHBseSh0LGFyZ3VtZW50cyl9ZnVuY3Rpb24gbCgpe3ZhciBlPXQuYm9keTtyZXR1cm4gZXx8KGU9YSh4P1wic3ZnXCI6XCJib2R5XCIpLGUuZmFrZT0hMCksZX1mdW5jdGlvbiB1KGUsbixyLG8pe3ZhciBpLHMsdSxmLGQ9XCJtb2Rlcm5penJcIixjPWEoXCJkaXZcIikscD1sKCk7aWYocGFyc2VJbnQociwxMCkpZm9yKDtyLS07KXU9YShcImRpdlwiKSx1LmlkPW8/b1tyXTpkKyhyKzEpLGMuYXBwZW5kQ2hpbGQodSk7cmV0dXJuIGk9YShcInN0eWxlXCIpLGkudHlwZT1cInRleHQvY3NzXCIsaS5pZD1cInNcIitkLChwLmZha2U/cDpjKS5hcHBlbmRDaGlsZChpKSxwLmFwcGVuZENoaWxkKGMpLGkuc3R5bGVTaGVldD9pLnN0eWxlU2hlZXQuY3NzVGV4dD1lOmkuYXBwZW5kQ2hpbGQodC5jcmVhdGVUZXh0Tm9kZShlKSksYy5pZD1kLHAuZmFrZSYmKHAuc3R5bGUuYmFja2dyb3VuZD1cIlwiLHAuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIixmPVMuc3R5bGUub3ZlcmZsb3csUy5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiLFMuYXBwZW5kQ2hpbGQocCkpLHM9bihjLGUpLHAuZmFrZT8ocC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHApLFMuc3R5bGUub3ZlcmZsb3c9ZixTLm9mZnNldEhlaWdodCk6Yy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpLCEhc31mdW5jdGlvbiBmKGUsdCl7cmV0dXJuISF+KFwiXCIrZSkuaW5kZXhPZih0KX1mdW5jdGlvbiBkKGUpe3JldHVybiBlLnJlcGxhY2UoLyhbQS1aXSkvZyxmdW5jdGlvbihlLHQpe3JldHVyblwiLVwiK3QudG9Mb3dlckNhc2UoKX0pLnJlcGxhY2UoL15tcy0vLFwiLW1zLVwiKX1mdW5jdGlvbiBjKHQsbixyKXt2YXIgbztpZihcImdldENvbXB1dGVkU3R5bGVcImluIGUpe289Z2V0Q29tcHV0ZWRTdHlsZS5jYWxsKGUsdCxuKTt2YXIgaT1lLmNvbnNvbGU7aWYobnVsbCE9PW8pciYmKG89by5nZXRQcm9wZXJ0eVZhbHVlKHIpKTtlbHNlIGlmKGkpe3ZhciBzPWkuZXJyb3I/XCJlcnJvclwiOlwibG9nXCI7aVtzXS5jYWxsKGksXCJnZXRDb21wdXRlZFN0eWxlIHJldHVybmluZyBudWxsLCBpdHMgcG9zc2libGUgbW9kZXJuaXpyIHRlc3QgcmVzdWx0cyBhcmUgaW5hY2N1cmF0ZVwiKX19ZWxzZSBvPSFuJiZ0LmN1cnJlbnRTdHlsZSYmdC5jdXJyZW50U3R5bGVbcl07cmV0dXJuIG99ZnVuY3Rpb24gcCh0LHIpe3ZhciBvPXQubGVuZ3RoO2lmKFwiQ1NTXCJpbiBlJiZcInN1cHBvcnRzXCJpbiBlLkNTUyl7Zm9yKDtvLS07KWlmKGUuQ1NTLnN1cHBvcnRzKGQodFtvXSkscikpcmV0dXJuITA7cmV0dXJuITF9aWYoXCJDU1NTdXBwb3J0c1J1bGVcImluIGUpe2Zvcih2YXIgaT1bXTtvLS07KWkucHVzaChcIihcIitkKHRbb10pK1wiOlwiK3IrXCIpXCIpO3JldHVybiBpPWkuam9pbihcIiBvciBcIiksdShcIkBzdXBwb3J0cyAoXCIraStcIikgeyAjbW9kZXJuaXpyIHsgcG9zaXRpb246IGFic29sdXRlOyB9IH1cIixmdW5jdGlvbihlKXtyZXR1cm5cImFic29sdXRlXCI9PWMoZSxudWxsLFwicG9zaXRpb25cIil9KX1yZXR1cm4gbn1mdW5jdGlvbiBtKGUpe3JldHVybiBlLnJlcGxhY2UoLyhbYS16XSktKFthLXpdKS9nLGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdCtuLnRvVXBwZXJDYXNlKCl9KS5yZXBsYWNlKC9eLS8sXCJcIil9ZnVuY3Rpb24gaChlLHQsbyxpKXtmdW5jdGlvbiBzKCl7dSYmKGRlbGV0ZSBOLnN0eWxlLGRlbGV0ZSBOLm1vZEVsZW0pfWlmKGk9cihpLFwidW5kZWZpbmVkXCIpPyExOmksIXIobyxcInVuZGVmaW5lZFwiKSl7dmFyIGw9cChlLG8pO2lmKCFyKGwsXCJ1bmRlZmluZWRcIikpcmV0dXJuIGx9Zm9yKHZhciB1LGQsYyxoLHYsQT1bXCJtb2Rlcm5penJcIixcInRzcGFuXCIsXCJzYW1wXCJdOyFOLnN0eWxlJiZBLmxlbmd0aDspdT0hMCxOLm1vZEVsZW09YShBLnNoaWZ0KCkpLE4uc3R5bGU9Ti5tb2RFbGVtLnN0eWxlO2ZvcihjPWUubGVuZ3RoLGQ9MDtjPmQ7ZCsrKWlmKGg9ZVtkXSx2PU4uc3R5bGVbaF0sZihoLFwiLVwiKSYmKGg9bShoKSksTi5zdHlsZVtoXSE9PW4pe2lmKGl8fHIobyxcInVuZGVmaW5lZFwiKSlyZXR1cm4gcygpLFwicGZ4XCI9PXQ/aDohMDt0cnl7Ti5zdHlsZVtoXT1vfWNhdGNoKGcpe31pZihOLnN0eWxlW2hdIT12KXJldHVybiBzKCksXCJwZnhcIj09dD9oOiEwfXJldHVybiBzKCksITF9ZnVuY3Rpb24gdihlLHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBlLmFwcGx5KHQsYXJndW1lbnRzKX19ZnVuY3Rpb24gQShlLHQsbil7dmFyIG87Zm9yKHZhciBpIGluIGUpaWYoZVtpXWluIHQpcmV0dXJuIG49PT0hMT9lW2ldOihvPXRbZVtpXV0scihvLFwiZnVuY3Rpb25cIik/dihvLG58fHQpOm8pO3JldHVybiExfWZ1bmN0aW9uIGcoZSx0LG4sbyxpKXt2YXIgcz1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSksYT0oZStcIiBcIitPLmpvaW4ocytcIiBcIikrcykuc3BsaXQoXCIgXCIpO3JldHVybiByKHQsXCJzdHJpbmdcIil8fHIodCxcInVuZGVmaW5lZFwiKT9oKGEsdCxvLGkpOihhPShlK1wiIFwiK1Quam9pbihzK1wiIFwiKStzKS5zcGxpdChcIiBcIiksQShhLHQsbikpfWZ1bmN0aW9uIHkoZSx0LHIpe3JldHVybiBnKGUsbixuLHQscil9dmFyIEM9W10sYj17X3ZlcnNpb246XCIzLjUuMFwiLF9jb25maWc6e2NsYXNzUHJlZml4OlwiXCIsZW5hYmxlQ2xhc3NlczohMCxlbmFibGVKU0NsYXNzOiEwLHVzZVByZWZpeGVzOiEwfSxfcTpbXSxvbjpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7c2V0VGltZW91dChmdW5jdGlvbigpe3QobltlXSl9LDApfSxhZGRUZXN0OmZ1bmN0aW9uKGUsdCxuKXtDLnB1c2goe25hbWU6ZSxmbjp0LG9wdGlvbnM6bn0pfSxhZGRBc3luY1Rlc3Q6ZnVuY3Rpb24oZSl7Qy5wdXNoKHtuYW1lOm51bGwsZm46ZX0pfX0sTW9kZXJuaXpyPWZ1bmN0aW9uKCl7fTtNb2Rlcm5penIucHJvdG90eXBlPWIsTW9kZXJuaXpyPW5ldyBNb2Rlcm5penI7dmFyIHc9W10sUz10LmRvY3VtZW50RWxlbWVudCx4PVwic3ZnXCI9PT1TLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksXz1cIk1veiBPIG1zIFdlYmtpdFwiLFQ9Yi5fY29uZmlnLnVzZVByZWZpeGVzP18udG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIik6W107Yi5fZG9tUHJlZml4ZXM9VDt2YXIgRT1iLl9jb25maWcudXNlUHJlZml4ZXM/XCIgLXdlYmtpdC0gLW1vei0gLW8tIC1tcy0gXCIuc3BsaXQoXCIgXCIpOltcIlwiLFwiXCJdO2IuX3ByZWZpeGVzPUU7dmFyIFA7IWZ1bmN0aW9uKCl7dmFyIGU9e30uaGFzT3duUHJvcGVydHk7UD1yKGUsXCJ1bmRlZmluZWRcIil8fHIoZS5jYWxsLFwidW5kZWZpbmVkXCIpP2Z1bmN0aW9uKGUsdCl7cmV0dXJuIHQgaW4gZSYmcihlLmNvbnN0cnVjdG9yLnByb3RvdHlwZVt0XSxcInVuZGVmaW5lZFwiKX06ZnVuY3Rpb24odCxuKXtyZXR1cm4gZS5jYWxsKHQsbil9fSgpLGIuX2w9e30sYi5vbj1mdW5jdGlvbihlLHQpe3RoaXMuX2xbZV18fCh0aGlzLl9sW2VdPVtdKSx0aGlzLl9sW2VdLnB1c2godCksTW9kZXJuaXpyLmhhc093blByb3BlcnR5KGUpJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7TW9kZXJuaXpyLl90cmlnZ2VyKGUsTW9kZXJuaXpyW2VdKX0sMCl9LGIuX3RyaWdnZXI9ZnVuY3Rpb24oZSx0KXtpZih0aGlzLl9sW2VdKXt2YXIgbj10aGlzLl9sW2VdO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgZSxyO2ZvcihlPTA7ZTxuLmxlbmd0aDtlKyspKHI9bltlXSkodCl9LDApLGRlbGV0ZSB0aGlzLl9sW2VdfX0sTW9kZXJuaXpyLl9xLnB1c2goZnVuY3Rpb24oKXtiLmFkZFRlc3Q9c30pO3ZhciBrPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe3ZhciBvO3JldHVybiBlPyh0JiZcInN0cmluZ1wiIT10eXBlb2YgdHx8KHQ9YSh0fHxcImRpdlwiKSksZT1cIm9uXCIrZSxvPWUgaW4gdCwhbyYmciYmKHQuc2V0QXR0cmlidXRlfHwodD1hKFwiZGl2XCIpKSx0LnNldEF0dHJpYnV0ZShlLFwiXCIpLG89XCJmdW5jdGlvblwiPT10eXBlb2YgdFtlXSx0W2VdIT09biYmKHRbZV09biksdC5yZW1vdmVBdHRyaWJ1dGUoZSkpLG8pOiExfXZhciByPSEoXCJvbmJsdXJcImluIHQuZG9jdW1lbnRFbGVtZW50KTtyZXR1cm4gZX0oKTtiLmhhc0V2ZW50PWs7dmFyIHo9ZnVuY3Rpb24oKXt2YXIgdD1lLm1hdGNoTWVkaWF8fGUubXNNYXRjaE1lZGlhO3JldHVybiB0P2Z1bmN0aW9uKGUpe3ZhciBuPXQoZSk7cmV0dXJuIG4mJm4ubWF0Y2hlc3x8ITF9OmZ1bmN0aW9uKHQpe3ZhciBuPSExO3JldHVybiB1KFwiQG1lZGlhIFwiK3QrXCIgeyAjbW9kZXJuaXpyIHsgcG9zaXRpb246IGFic29sdXRlOyB9IH1cIixmdW5jdGlvbih0KXtuPVwiYWJzb2x1dGVcIj09KGUuZ2V0Q29tcHV0ZWRTdHlsZT9lLmdldENvbXB1dGVkU3R5bGUodCxudWxsKTp0LmN1cnJlbnRTdHlsZSkucG9zaXRpb259KSxufX0oKTtiLm1xPXo7dmFyIEI9ZnVuY3Rpb24oZSx0KXt2YXIgbj0hMSxyPWEoXCJkaXZcIiksbz1yLnN0eWxlO2lmKGUgaW4gbyl7dmFyIGk9VC5sZW5ndGg7Zm9yKG9bZV09dCxuPW9bZV07aS0tJiYhbjspb1tlXT1cIi1cIitUW2ldK1wiLVwiK3Qsbj1vW2VdfXJldHVyblwiXCI9PT1uJiYobj0hMSksbn07Yi5wcmVmaXhlZENTU1ZhbHVlPUI7dmFyIE89Yi5fY29uZmlnLnVzZVByZWZpeGVzP18uc3BsaXQoXCIgXCIpOltdO2IuX2Nzc29tUHJlZml4ZXM9Tzt2YXIgTD17ZWxlbTphKFwibW9kZXJuaXpyXCIpfTtNb2Rlcm5penIuX3EucHVzaChmdW5jdGlvbigpe2RlbGV0ZSBMLmVsZW19KTt2YXIgTj17c3R5bGU6TC5lbGVtLnN0eWxlfTtNb2Rlcm5penIuX3EudW5zaGlmdChmdW5jdGlvbigpe2RlbGV0ZSBOLnN0eWxlfSksYi50ZXN0QWxsUHJvcHM9ZyxiLnRlc3RBbGxQcm9wcz15O2IudGVzdFByb3A9ZnVuY3Rpb24oZSx0LHIpe3JldHVybiBoKFtlXSxuLHQscil9LGIudGVzdFN0eWxlcz11O01vZGVybml6ci5hZGRUZXN0KFwiY3VzdG9tZWxlbWVudHNcIixcImN1c3RvbUVsZW1lbnRzXCJpbiBlKSxNb2Rlcm5penIuYWRkVGVzdChcImhpc3RvcnlcIixmdW5jdGlvbigpe3ZhciB0PW5hdmlnYXRvci51c2VyQWdlbnQ7cmV0dXJuLTE9PT10LmluZGV4T2YoXCJBbmRyb2lkIDIuXCIpJiYtMT09PXQuaW5kZXhPZihcIkFuZHJvaWQgNC4wXCIpfHwtMT09PXQuaW5kZXhPZihcIk1vYmlsZSBTYWZhcmlcIil8fC0xIT09dC5pbmRleE9mKFwiQ2hyb21lXCIpfHwtMSE9PXQuaW5kZXhPZihcIldpbmRvd3MgUGhvbmVcIil8fFwiZmlsZTpcIj09PWxvY2F0aW9uLnByb3RvY29sP2UuaGlzdG9yeSYmXCJwdXNoU3RhdGVcImluIGUuaGlzdG9yeTohMX0pLE1vZGVybml6ci5hZGRUZXN0KFwicG9pbnRlcmV2ZW50c1wiLGZ1bmN0aW9uKCl7dmFyIGU9ITEsdD1ULmxlbmd0aDtmb3IoZT1Nb2Rlcm5penIuaGFzRXZlbnQoXCJwb2ludGVyZG93blwiKTt0LS0mJiFlOylrKFRbdF0rXCJwb2ludGVyZG93blwiKSYmKGU9ITApO3JldHVybiBlfSksTW9kZXJuaXpyLmFkZFRlc3QoXCJwb3N0bWVzc2FnZVwiLFwicG9zdE1lc3NhZ2VcImluIGUpLE1vZGVybml6ci5hZGRUZXN0KFwid2ViZ2xcIixmdW5jdGlvbigpe3ZhciB0PWEoXCJjYW52YXNcIiksbj1cInByb2JhYmx5U3VwcG9ydHNDb250ZXh0XCJpbiB0P1wicHJvYmFibHlTdXBwb3J0c0NvbnRleHRcIjpcInN1cHBvcnRzQ29udGV4dFwiO3JldHVybiBuIGluIHQ/dFtuXShcIndlYmdsXCIpfHx0W25dKFwiZXhwZXJpbWVudGFsLXdlYmdsXCIpOlwiV2ViR0xSZW5kZXJpbmdDb250ZXh0XCJpbiBlfSk7dmFyIFI9ITE7dHJ5e1I9XCJXZWJTb2NrZXRcImluIGUmJjI9PT1lLldlYlNvY2tldC5DTE9TSU5HfWNhdGNoKGope31Nb2Rlcm5penIuYWRkVGVzdChcIndlYnNvY2tldHNcIixSKSxNb2Rlcm5penIuYWRkVGVzdChcImNzc2FuaW1hdGlvbnNcIix5KFwiYW5pbWF0aW9uTmFtZVwiLFwiYVwiLCEwKSksZnVuY3Rpb24oKXtNb2Rlcm5penIuYWRkVGVzdChcImNzc2NvbHVtbnNcIixmdW5jdGlvbigpe3ZhciBlPSExLHQ9eShcImNvbHVtbkNvdW50XCIpO3RyeXtlPSEhdCxlJiYoZT1uZXcgQm9vbGVhbihlKSl9Y2F0Y2gobil7fXJldHVybiBlfSk7Zm9yKHZhciBlLHQsbj1bXCJXaWR0aFwiLFwiU3BhblwiLFwiRmlsbFwiLFwiR2FwXCIsXCJSdWxlXCIsXCJSdWxlQ29sb3JcIixcIlJ1bGVTdHlsZVwiLFwiUnVsZVdpZHRoXCIsXCJCcmVha0JlZm9yZVwiLFwiQnJlYWtBZnRlclwiLFwiQnJlYWtJbnNpZGVcIl0scj0wO3I8bi5sZW5ndGg7cisrKWU9bltyXS50b0xvd2VyQ2FzZSgpLHQ9eShcImNvbHVtblwiK25bcl0pLChcImJyZWFrYmVmb3JlXCI9PT1lfHxcImJyZWFrYWZ0ZXJcIj09PWV8fFwiYnJlYWtpbnNpZGVcIj09ZSkmJih0PXR8fHkobltyXSkpLE1vZGVybml6ci5hZGRUZXN0KFwiY3NzY29sdW1ucy5cIitlLHQpfSgpLE1vZGVybml6ci5hZGRUZXN0KFwiZmxleGJveFwiLHkoXCJmbGV4QmFzaXNcIixcIjFweFwiLCEwKSksTW9kZXJuaXpyLmFkZFRlc3QoXCJwaWN0dXJlXCIsXCJIVE1MUGljdHVyZUVsZW1lbnRcImluIGUpLE1vZGVybml6ci5hZGRBc3luY1Rlc3QoZnVuY3Rpb24oKXt2YXIgZSx0LG4scj1hKFwiaW1nXCIpLG89XCJzaXplc1wiaW4gcjshbyYmXCJzcmNzZXRcImluIHI/KHQ9XCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBZ0FCQVBBQUFQLy8vd0FBQUNINUJBQUFBQUFBTEFBQUFBQUNBQUVBQUFJQ0JBb0FPdz09XCIsZT1cImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBQUFBQUNINUJBRUtBQUVBTEFBQUFBQUJBQUVBQUFJQ1RBRUFPdz09XCIsbj1mdW5jdGlvbigpe3MoXCJzaXplc1wiLDI9PXIud2lkdGgpfSxyLm9ubG9hZD1uLHIub25lcnJvcj1uLHIuc2V0QXR0cmlidXRlKFwic2l6ZXNcIixcIjlweFwiKSxyLnNyY3NldD1lK1wiIDF3LFwiK3QrXCIgOHdcIixyLnNyYz1lKTpzKFwic2l6ZXNcIixvKX0pLE1vZGVybml6ci5hZGRUZXN0KFwic3Jjc2V0XCIsXCJzcmNzZXRcImluIGEoXCJpbWdcIikpLE1vZGVybml6ci5hZGRUZXN0KFwid2Vid29ya2Vyc1wiLFwiV29ya2VyXCJpbiBlKSxvKCksaSh3KSxkZWxldGUgYi5hZGRUZXN0LGRlbGV0ZSBiLmFkZEFzeW5jVGVzdDtmb3IodmFyIE09MDtNPE1vZGVybml6ci5fcS5sZW5ndGg7TSsrKU1vZGVybml6ci5fcVtNXSgpO2UuTW9kZXJuaXpyPU1vZGVybml6cn0od2luZG93LGRvY3VtZW50KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHVibGljL2pzL3ZlbmRvci9tb2Rlcm5penItMy41LjAubWluLmpzIiwiLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGVidWcnKTtcbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lXG4gICAgICAgICAgICAgICAmJiAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lLnN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgID8gY2hyb21lLnN0b3JhZ2UubG9jYWxcbiAgICAgICAgICAgICAgICAgIDogbG9jYWxzdG9yYWdlKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuICAnIzAwMDBDQycsICcjMDAwMEZGJywgJyMwMDMzQ0MnLCAnIzAwMzNGRicsICcjMDA2NkNDJywgJyMwMDY2RkYnLCAnIzAwOTlDQycsXG4gICcjMDA5OUZGJywgJyMwMENDMDAnLCAnIzAwQ0MzMycsICcjMDBDQzY2JywgJyMwMENDOTknLCAnIzAwQ0NDQycsICcjMDBDQ0ZGJyxcbiAgJyMzMzAwQ0MnLCAnIzMzMDBGRicsICcjMzMzM0NDJywgJyMzMzMzRkYnLCAnIzMzNjZDQycsICcjMzM2NkZGJywgJyMzMzk5Q0MnLFxuICAnIzMzOTlGRicsICcjMzNDQzAwJywgJyMzM0NDMzMnLCAnIzMzQ0M2NicsICcjMzNDQzk5JywgJyMzM0NDQ0MnLCAnIzMzQ0NGRicsXG4gICcjNjYwMENDJywgJyM2NjAwRkYnLCAnIzY2MzNDQycsICcjNjYzM0ZGJywgJyM2NkNDMDAnLCAnIzY2Q0MzMycsICcjOTkwMENDJyxcbiAgJyM5OTAwRkYnLCAnIzk5MzNDQycsICcjOTkzM0ZGJywgJyM5OUNDMDAnLCAnIzk5Q0MzMycsICcjQ0MwMDAwJywgJyNDQzAwMzMnLFxuICAnI0NDMDA2NicsICcjQ0MwMDk5JywgJyNDQzAwQ0MnLCAnI0NDMDBGRicsICcjQ0MzMzAwJywgJyNDQzMzMzMnLCAnI0NDMzM2NicsXG4gICcjQ0MzMzk5JywgJyNDQzMzQ0MnLCAnI0NDMzNGRicsICcjQ0M2NjAwJywgJyNDQzY2MzMnLCAnI0NDOTkwMCcsICcjQ0M5OTMzJyxcbiAgJyNDQ0NDMDAnLCAnI0NDQ0MzMycsICcjRkYwMDAwJywgJyNGRjAwMzMnLCAnI0ZGMDA2NicsICcjRkYwMDk5JywgJyNGRjAwQ0MnLFxuICAnI0ZGMDBGRicsICcjRkYzMzAwJywgJyNGRjMzMzMnLCAnI0ZGMzM2NicsICcjRkYzMzk5JywgJyNGRjMzQ0MnLCAnI0ZGMzNGRicsXG4gICcjRkY2NjAwJywgJyNGRjY2MzMnLCAnI0ZGOTkwMCcsICcjRkY5OTMzJywgJyNGRkNDMDAnLCAnI0ZGQ0MzMydcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuICAvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG4gIC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG4gIC8vIGV4cGxpY2l0bHlcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmIHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gaXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcbiAgLy8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcbiAgcmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG4gICAgLy8gaXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG4gICAgLy8gaXMgZmlyZWZveCA+PSB2MzE/XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG4gICAgLy8gZG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24odikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVyci5tZXNzYWdlO1xuICB9XG59O1xuXG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG4gIHZhciB1c2VDb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcblxuICBhcmdzWzBdID0gKHVzZUNvbG9ycyA/ICclYycgOiAnJylcbiAgICArIHRoaXMubmFtZXNwYWNlXG4gICAgKyAodXNlQ29sb3JzID8gJyAlYycgOiAnICcpXG4gICAgKyBhcmdzWzBdXG4gICAgKyAodXNlQ29sb3JzID8gJyVjICcgOiAnICcpXG4gICAgKyAnKycgKyBleHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cbiAgaWYgKCF1c2VDb2xvcnMpIHJldHVybjtcblxuICB2YXIgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG4gIGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpXG5cbiAgLy8gdGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcbiAgLy8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuICAvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxhc3RDID0gMDtcbiAgYXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgaWYgKCclJScgPT09IG1hdGNoKSByZXR1cm47XG4gICAgaW5kZXgrKztcbiAgICBpZiAoJyVjJyA9PT0gbWF0Y2gpIHtcbiAgICAgIC8vIHdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuICAgICAgLy8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcbiAgICAgIGxhc3RDID0gaW5kZXg7XG4gICAgfVxuICB9KTtcblxuICBhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5sb2coKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmxvZ2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gbG9nKCkge1xuICAvLyB0aGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOC85LCB3aGVyZVxuICAvLyB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbiBkb2Vzbid0IGhhdmUgJ2FwcGx5J1xuICByZXR1cm4gJ29iamVjdCcgPT09IHR5cGVvZiBjb25zb2xlXG4gICAgJiYgY29uc29sZS5sb2dcbiAgICAmJiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlLmxvZywgY29uc29sZSwgYXJndW1lbnRzKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG4gIHRyeSB7XG4gICAgaWYgKG51bGwgPT0gbmFtZXNwYWNlcykge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZyA9IG5hbWVzcGFjZXM7XG4gICAgfVxuICB9IGNhdGNoKGUpIHt9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgdmFyIHI7XG4gIHRyeSB7XG4gICAgciA9IGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZztcbiAgfSBjYXRjaChlKSB7fVxuXG4gIC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcbiAgaWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG4gICAgciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuICB9XG5cbiAgcmV0dXJuIHI7XG59XG5cbi8qKlxuICogRW5hYmxlIG5hbWVzcGFjZXMgbGlzdGVkIGluIGBsb2NhbFN0b3JhZ2UuZGVidWdgIGluaXRpYWxseS5cbiAqL1xuXG5leHBvcnRzLmVuYWJsZShsb2FkKCkpO1xuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgfSBjYXRjaCAoZSkge31cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAzMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMzMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnWydkZWZhdWx0J10gPSBjcmVhdGVEZWJ1ZztcbmV4cG9ydHMuY29lcmNlID0gY29lcmNlO1xuZXhwb3J0cy5kaXNhYmxlID0gZGlzYWJsZTtcbmV4cG9ydHMuZW5hYmxlID0gZW5hYmxlO1xuZXhwb3J0cy5lbmFibGVkID0gZW5hYmxlZDtcbmV4cG9ydHMuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXG4vKipcbiAqIEFjdGl2ZSBgZGVidWdgIGluc3RhbmNlcy5cbiAqL1xuZXhwb3J0cy5pbnN0YW5jZXMgPSBbXTtcblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cbiAqL1xuXG5leHBvcnRzLm5hbWVzID0gW107XG5leHBvcnRzLnNraXBzID0gW107XG5cbi8qKlxuICogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuICpcbiAqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMgPSB7fTtcblxuLyoqXG4gKiBTZWxlY3QgYSBjb2xvci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuICB2YXIgaGFzaCA9IDAsIGk7XG5cbiAgZm9yIChpIGluIG5hbWVzcGFjZSkge1xuICAgIGhhc2ggID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcbiAgICBoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICB9XG5cbiAgcmV0dXJuIGV4cG9ydHMuY29sb3JzW01hdGguYWJzKGhhc2gpICUgZXhwb3J0cy5jb2xvcnMubGVuZ3RoXTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cbiAgdmFyIHByZXZUaW1lO1xuXG4gIGZ1bmN0aW9uIGRlYnVnKCkge1xuICAgIC8vIGRpc2FibGVkP1xuICAgIGlmICghZGVidWcuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgdmFyIHNlbGYgPSBkZWJ1ZztcblxuICAgIC8vIHNldCBgZGlmZmAgdGltZXN0YW1wXG4gICAgdmFyIGN1cnIgPSArbmV3IERhdGUoKTtcbiAgICB2YXIgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuICAgIHNlbGYuZGlmZiA9IG1zO1xuICAgIHNlbGYucHJldiA9IHByZXZUaW1lO1xuICAgIHNlbGYuY3VyciA9IGN1cnI7XG4gICAgcHJldlRpbWUgPSBjdXJyO1xuXG4gICAgLy8gdHVybiB0aGUgYGFyZ3VtZW50c2AgaW50byBhIHByb3BlciBBcnJheVxuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBhcmdzWzBdID0gZXhwb3J0cy5jb2VyY2UoYXJnc1swXSk7XG5cbiAgICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBhcmdzWzBdKSB7XG4gICAgICAvLyBhbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuICAgICAgYXJncy51bnNoaWZ0KCclTycpO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgZnVuY3Rpb24obWF0Y2gsIGZvcm1hdCkge1xuICAgICAgLy8gaWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuICAgICAgaWYgKG1hdGNoID09PSAnJSUnKSByZXR1cm4gbWF0Y2g7XG4gICAgICBpbmRleCsrO1xuICAgICAgdmFyIGZvcm1hdHRlciA9IGV4cG9ydHMuZm9ybWF0dGVyc1tmb3JtYXRdO1xuICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBmb3JtYXR0ZXIpIHtcbiAgICAgICAgdmFyIHZhbCA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICBtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cbiAgICAgICAgLy8gbm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuICAgICAgICBhcmdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGluZGV4LS07XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG5cbiAgICAvLyBhcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuICAgIGV4cG9ydHMuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG4gICAgdmFyIGxvZ0ZuID0gZGVidWcubG9nIHx8IGV4cG9ydHMubG9nIHx8IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7XG4gICAgbG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gIH1cblxuICBkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gIGRlYnVnLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQobmFtZXNwYWNlKTtcbiAgZGVidWcudXNlQ29sb3JzID0gZXhwb3J0cy51c2VDb2xvcnMoKTtcbiAgZGVidWcuY29sb3IgPSBzZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuICBkZWJ1Zy5kZXN0cm95ID0gZGVzdHJveTtcblxuICAvLyBlbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGV4cG9ydHMuaW5pdCkge1xuICAgIGV4cG9ydHMuaW5pdChkZWJ1Zyk7XG4gIH1cblxuICBleHBvcnRzLmluc3RhbmNlcy5wdXNoKGRlYnVnKTtcblxuICByZXR1cm4gZGVidWc7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICB2YXIgaW5kZXggPSBleHBvcnRzLmluc3RhbmNlcy5pbmRleE9mKHRoaXMpO1xuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgZXhwb3J0cy5pbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG4gKiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG4gIGV4cG9ydHMuc2F2ZShuYW1lc3BhY2VzKTtcblxuICBleHBvcnRzLm5hbWVzID0gW107XG4gIGV4cG9ydHMuc2tpcHMgPSBbXTtcblxuICB2YXIgaTtcbiAgdmFyIHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcbiAgdmFyIGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIXNwbGl0W2ldKSBjb250aW51ZTsgLy8gaWdub3JlIGVtcHR5IHN0cmluZ3NcbiAgICBuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcbiAgICBpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG4gICAgICBleHBvcnRzLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGV4cG9ydHMuaW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGluc3RhbmNlID0gZXhwb3J0cy5pbnN0YW5jZXNbaV07XG4gICAgaW5zdGFuY2UuZW5hYmxlZCA9IGV4cG9ydHMuZW5hYmxlZChpbnN0YW5jZS5uYW1lc3BhY2UpO1xuICB9XG59XG5cbi8qKlxuICogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBkaXNhYmxlKCkge1xuICBleHBvcnRzLmVuYWJsZSgnJyk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcbiAgaWYgKG5hbWVbbmFtZS5sZW5ndGggLSAxXSA9PT0gJyonKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ29lcmNlIGB2YWxgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcbiAgcmV0dXJuIHZhbDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9kZWJ1Zy5qc1xuLy8gbW9kdWxlIGlkID0gMzM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgeSA9IGQgKiAzNjUuMjU7XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbCkgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/IGZtdExvbmcodmFsKSA6IGZtdFNob3J0KHZhbCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIHZhbGlkIG51bWJlci4gdmFsPScgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkodmFsKVxuICApO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAoc3RyLmxlbmd0aCA+IDEwMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbWF0Y2ggPSAvXigoPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkO1xuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdocnMnOlxuICAgIGNhc2UgJ2hyJzpcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBuICogaDtcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnMnOlxuICAgIGNhc2UgJ21pbic6XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gbiAqIG07XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzO1xuICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgIGNhc2UgJ21zZWNzJzpcbiAgICBjYXNlICdtc2VjJzpcbiAgICBjYXNlICdtcyc6XG4gICAgICByZXR1cm4gbjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIGlmIChtcyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtcyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICByZXR1cm4gcGx1cmFsKG1zLCBkLCAnZGF5JykgfHxcbiAgICBwbHVyYWwobXMsIGgsICdob3VyJykgfHxcbiAgICBwbHVyYWwobXMsIG0sICdtaW51dGUnKSB8fFxuICAgIHBsdXJhbChtcywgcywgJ3NlY29uZCcpIHx8XG4gICAgbXMgKyAnIG1zJztcbn1cblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqL1xuXG5mdW5jdGlvbiBwbHVyYWwobXMsIG4sIG5hbWUpIHtcbiAgaWYgKG1zIDwgbikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobXMgPCBuICogMS41KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IobXMgLyBuKSArICcgJyArIG5hbWU7XG4gIH1cbiAgcmV0dXJuIE1hdGguY2VpbChtcyAvIG4pICsgJyAnICsgbmFtZSArICdzJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==