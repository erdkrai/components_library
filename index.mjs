var nr = Object.create;
var re = Object.defineProperty;
var ur = Object.getOwnPropertyDescriptor;
var ir = Object.getOwnPropertyNames;
var sr = Object.getPrototypeOf,
  or = Object.prototype.hasOwnProperty;
var C = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var cr = (e, r, t, n) => {
  if ((r && typeof r == "object") || typeof r == "function")
    for (let u of ir(r))
      !or.call(e, u) &&
        u !== t &&
        re(e, u, {
          get: () => r[u],
          enumerable: !(n = ur(r, u)) || n.enumerable,
        });
  return e;
};
var te = (e, r, t) => (
  (t = e != null ? nr(sr(e)) : {}),
  cr(
    r || !e || !e.__esModule
      ? re(t, "default", { value: e, enumerable: !0 })
      : t,
    e
  )
);
var ye = C((s) => {
  "use strict";
  var x = Symbol.for("react.element"),
    pr = Symbol.for("react.portal"),
    hr = Symbol.for("react.fragment"),
    dr = Symbol.for("react.strict_mode"),
    gr = Symbol.for("react.profiler"),
    vr = Symbol.for("react.provider"),
    yr = Symbol.for("react.context"),
    mr = Symbol.for("react.forward_ref"),
    _r = Symbol.for("react.suspense"),
    wr = Symbol.for("react.memo"),
    jr = Symbol.for("react.lazy"),
    oe = Symbol.iterator;
  function br(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (oe && e[oe]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var fe = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ae = Object.assign,
    pe = {};
  function m(e, r, t) {
    (this.props = e),
      (this.context = r),
      (this.refs = pe),
      (this.updater = t || fe);
  }
  m.prototype.isReactComponent = {};
  m.prototype.setState = function (e, r) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, e, r, "setState");
  };
  m.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function he() {}
  he.prototype = m.prototype;
  function L(e, r, t) {
    (this.props = e),
      (this.context = r),
      (this.refs = pe),
      (this.updater = t || fe);
  }
  var U = (L.prototype = new he());
  U.constructor = L;
  ae(U, m.prototype);
  U.isPureReactComponent = !0;
  var ce = Array.isArray,
    de = Object.prototype.hasOwnProperty,
    q = { current: null },
    ge = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ve(e, r, t) {
    var n,
      u = {},
      i = null,
      o = null;
    if (r != null)
      for (n in (r.ref !== void 0 && (o = r.ref),
      r.key !== void 0 && (i = "" + r.key),
      r))
        de.call(r, n) && !ge.hasOwnProperty(n) && (u[n] = r[n]);
    var c = arguments.length - 2;
    if (c === 1) u.children = t;
    else if (1 < c) {
      for (var l = Array(c), f = 0; f < c; f++) l[f] = arguments[f + 2];
      u.children = l;
    }
    if (e && e.defaultProps)
      for (n in ((c = e.defaultProps), c)) u[n] === void 0 && (u[n] = c[n]);
    return {
      $$typeof: x,
      type: e,
      key: i,
      ref: o,
      props: u,
      _owner: q.current,
    };
  }
  function Cr(e, r) {
    return {
      $$typeof: x,
      type: e.type,
      key: r,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function J(e) {
    return typeof e == "object" && e !== null && e.$$typeof === x;
  }
  function xr(e) {
    var r = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (t) {
        return r[t];
      })
    );
  }
  var le = /\/+/g;
  function V(e, r) {
    return typeof e == "object" && e !== null && e.key != null
      ? xr("" + e.key)
      : r.toString(36);
  }
  function N(e, r, t, n, u) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else
      switch (i) {
        case "string":
        case "number":
          o = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case x:
            case pr:
              o = !0;
          }
      }
    if (o)
      return (
        (o = e),
        (u = u(o)),
        (e = n === "" ? "." + V(o, 0) : n),
        ce(u)
          ? ((t = ""),
            e != null && (t = e.replace(le, "$&/") + "/"),
            N(u, r, t, "", function (f) {
              return f;
            }))
          : u != null &&
            (J(u) &&
              (u = Cr(
                u,
                t +
                  (!u.key || (o && o.key === u.key)
                    ? ""
                    : ("" + u.key).replace(le, "$&/") + "/") +
                  e
              )),
            r.push(u)),
        1
      );
    if (((o = 0), (n = n === "" ? "." : n + ":"), ce(e)))
      for (var c = 0; c < e.length; c++) {
        i = e[c];
        var l = n + V(i, c);
        o += N(i, r, t, l, u);
      }
    else if (((l = br(e)), typeof l == "function"))
      for (e = l.call(e), c = 0; !(i = e.next()).done; )
        (i = i.value), (l = n + V(i, c++)), (o += N(i, r, t, l, u));
    else if (i === "object")
      throw (
        ((r = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (r === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : r) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return o;
  }
  function S(e, r, t) {
    if (e == null) return e;
    var n = [],
      u = 0;
    return (
      N(e, n, "", "", function (i) {
        return r.call(t, i, u++);
      }),
      n
    );
  }
  function Er(e) {
    if (e._status === -1) {
      var r = e._result;
      (r = r()),
        r.then(
          function (t) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = t));
          },
          function (t) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = t));
          }
        ),
        e._status === -1 && ((e._status = 0), (e._result = r));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var a = { current: null },
    R = { transition: null },
    kr = {
      ReactCurrentDispatcher: a,
      ReactCurrentBatchConfig: R,
      ReactCurrentOwner: q,
    };
  s.Children = {
    map: S,
    forEach: function (e, r, t) {
      S(
        e,
        function () {
          r.apply(this, arguments);
        },
        t
      );
    },
    count: function (e) {
      var r = 0;
      return (
        S(e, function () {
          r++;
        }),
        r
      );
    },
    toArray: function (e) {
      return (
        S(e, function (r) {
          return r;
        }) || []
      );
    },
    only: function (e) {
      if (!J(e))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return e;
    },
  };
  s.Component = m;
  s.Fragment = hr;
  s.Profiler = gr;
  s.PureComponent = L;
  s.StrictMode = dr;
  s.Suspense = _r;
  s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kr;
  s.cloneElement = function (e, r, t) {
    if (e == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          "."
      );
    var n = ae({}, e.props),
      u = e.key,
      i = e.ref,
      o = e._owner;
    if (r != null) {
      if (
        (r.ref !== void 0 && ((i = r.ref), (o = q.current)),
        r.key !== void 0 && (u = "" + r.key),
        e.type && e.type.defaultProps)
      )
        var c = e.type.defaultProps;
      for (l in r)
        de.call(r, l) &&
          !ge.hasOwnProperty(l) &&
          (n[l] = r[l] === void 0 && c !== void 0 ? c[l] : r[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) n.children = t;
    else if (1 < l) {
      c = Array(l);
      for (var f = 0; f < l; f++) c[f] = arguments[f + 2];
      n.children = c;
    }
    return { $$typeof: x, type: e.type, key: u, ref: i, props: n, _owner: o };
  };
  s.createContext = function (e) {
    return (
      (e = {
        $$typeof: yr,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: vr, _context: e }),
      (e.Consumer = e)
    );
  };
  s.createElement = ve;
  s.createFactory = function (e) {
    var r = ve.bind(null, e);
    return (r.type = e), r;
  };
  s.createRef = function () {
    return { current: null };
  };
  s.forwardRef = function (e) {
    return { $$typeof: mr, render: e };
  };
  s.isValidElement = J;
  s.lazy = function (e) {
    return { $$typeof: jr, _payload: { _status: -1, _result: e }, _init: Er };
  };
  s.memo = function (e, r) {
    return { $$typeof: wr, type: e, compare: r === void 0 ? null : r };
  };
  s.startTransition = function (e) {
    var r = R.transition;
    R.transition = {};
    try {
      e();
    } finally {
      R.transition = r;
    }
  };
  s.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
  };
  s.useCallback = function (e, r) {
    return a.current.useCallback(e, r);
  };
  s.useContext = function (e) {
    return a.current.useContext(e);
  };
  s.useDebugValue = function () {};
  s.useDeferredValue = function (e) {
    return a.current.useDeferredValue(e);
  };
  s.useEffect = function (e, r) {
    return a.current.useEffect(e, r);
  };
  s.useId = function () {
    return a.current.useId();
  };
  s.useImperativeHandle = function (e, r, t) {
    return a.current.useImperativeHandle(e, r, t);
  };
  s.useInsertionEffect = function (e, r) {
    return a.current.useInsertionEffect(e, r);
  };
  s.useLayoutEffect = function (e, r) {
    return a.current.useLayoutEffect(e, r);
  };
  s.useMemo = function (e, r) {
    return a.current.useMemo(e, r);
  };
  s.useReducer = function (e, r, t) {
    return a.current.useReducer(e, r, t);
  };
  s.useRef = function (e) {
    return a.current.useRef(e);
  };
  s.useState = function (e) {
    return a.current.useState(e);
  };
  s.useSyncExternalStore = function (e, r, t) {
    return a.current.useSyncExternalStore(e, r, t);
  };
  s.useTransition = function () {
    return a.current.useTransition();
  };
  s.version = "18.2.0";
});
var _e = C((Wr, me) => {
  "use strict";
  me.exports = ye();
});
var je = C((T) => {
  "use strict";
  var Or = _e(),
    Sr = Symbol.for("react.element"),
    Nr = Symbol.for("react.fragment"),
    Rr = Object.prototype.hasOwnProperty,
    Tr =
      Or.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    $r = { key: !0, ref: !0, __self: !0, __source: !0 };
  function we(e, r, t) {
    var n,
      u = {},
      i = null,
      o = null;
    t !== void 0 && (i = "" + t),
      r.key !== void 0 && (i = "" + r.key),
      r.ref !== void 0 && (o = r.ref);
    for (n in r) Rr.call(r, n) && !$r.hasOwnProperty(n) && (u[n] = r[n]);
    if (e && e.defaultProps)
      for (n in ((r = e.defaultProps), r)) u[n] === void 0 && (u[n] = r[n]);
    return {
      $$typeof: Sr,
      type: e,
      key: i,
      ref: o,
      props: u,
      _owner: Tr.current,
    };
  }
  T.Fragment = Nr;
  T.jsx = we;
  T.jsxs = we;
});
var Ce = C((Zr, be) => {
  "use strict";
  be.exports = je();
});
var W = C((Hr, Vr) => {
  Vr.exports = {};
});
function I(e, r, t) {
  for (var n = new Array(t), u = 0, i = r; u < t; )
    (n[u] = e[i]), (u = (u + 1) | 0), (i = (i + 1) | 0);
  return n;
}
function ne(e, r) {
  for (;;) {
    var t = r,
      n = e,
      u = n.length,
      i = u === 0 ? 1 : u,
      o = t.length,
      c = (i - o) | 0;
    if (c === 0) return n.apply(null, t);
    if (c >= 0)
      return (function (l, f) {
        return function (E) {
          return ne(l, f.concat([E]));
        };
      })(n, t);
    (r = I(t, i, -c | 0)), (e = n.apply(null, I(t, 0, i)));
  }
}
function ue(e, r) {
  var t = e.length;
  if (t === 1) return e(r);
  switch (t) {
    case 1:
      return e(r);
    case 2:
      return function (n) {
        return e(r, n);
      };
    case 3:
      return function (n, u) {
        return e(r, n, u);
      };
    case 4:
      return function (n, u, i) {
        return e(r, n, u, i);
      };
    case 5:
      return function (n, u, i, o) {
        return e(r, n, u, i, o);
      };
    case 6:
      return function (n, u, i, o, c) {
        return e(r, n, u, i, o, c);
      };
    case 7:
      return function (n, u, i, o, c, l) {
        return e(r, n, u, i, o, c, l);
      };
    default:
      return ne(e, [r]);
  }
}
function P(e) {
  return e === void 0
    ? { BS_PRIVATE_NESTED_SOME_NONE: 0 }
    : e !== null && e.BS_PRIVATE_NESTED_SOME_NONE !== void 0
    ? { BS_PRIVATE_NESTED_SOME_NONE: (e.BS_PRIVATE_NESTED_SOME_NONE + 1) | 0 }
    : e;
}
function y(e) {
  if (!(e !== null && e.BS_PRIVATE_NESTED_SOME_NONE !== void 0)) return e;
  var r = e.BS_PRIVATE_NESTED_SOME_NONE;
  if (r !== 0) return { BS_PRIVATE_NESTED_SOME_NONE: (r - 1) | 0 };
}
function F(e, r) {
  if (r in e) return P(e[r]);
}
function se(e) {
  for (var r = {}, t = e.length, n = 0; n < t; ++n) {
    var u = e[n];
    r[u[0]] = u[1];
  }
  return r;
}
function A(e, r) {
  return e !== void 0 ? y(e) : r;
}
var d = te(Ce(), 1),
  Br = se([
    ["value", "1"],
    ["color", "NoBadge"],
  ]);
function Dr(e, r, t, n) {
  switch (e) {
    case 0:
      switch (t) {
        case 0:
          switch (r) {
            case 0:
              return "bg-jp-2-light-primary-600 hover:bg-jp-2-light-primary-700 focus:outline-none shadow-jp-2-xs focus:shadow-jp-2-sm-primary-focus";
            case 1:
              return "bg-jp-2-light-primary-600";
            case 2:
              return "bg-jp-2-light-primary-300 shadow-jp-2-xs";
          }
        case 1:
          switch (r) {
            case 0:
              return "bg-jp-2-light-primary-200 hover:bg-jp-2-light-primary-300 focus:outline-none focus:shadow-jp-2-sm-primary-focus";
            case 1:
              return "bg-jp-2-light-primary-200";
            case 2:
              return "bg-jp-2-light-primary-100";
          }
        case 2:
          switch (r) {
            case 0:
              return "hover:bg-jp-2-light-primary-200 focus:outline-none focus:shadow-jp-2-sm-primary-focus";
            case 1:
              return "bg-jp-2-light-primary-200";
            case 2:
              return "";
          }
      }
    case 1:
      switch (t) {
        case 0:
          switch (r) {
            case 0:
              return "bg-white hover:bg-jp-2-light-gray-100 focus:outline-none shadow-jp-2-xs focus:shadow-jp-2-sm-gray-focus border border-jp-2-light-gray-600";
            case 1:
              return "bg-white border border-jp-2-light-gray-600 shadow-jp-2-xs";
            case 2:
              return "bg-jp-2-light-gray-300 shadow-jp-2-xs border border-jp-2-light-gray-400";
          }
        case 1:
          switch (r) {
            case 0:
              return "bg-jp-2-light-gray-200 hover:bg-jp-2-light-gray-300 focus:outline-none focus:shadow-jp-2-sm-gray-focus";
            case 1:
              return "bg-jp-2-light-gray-200";
            case 2:
              return "bg-jp-2-light-gray-300 shadow-jp-2-xs";
          }
        case 2:
          switch (r) {
            case 0:
              return "hover:bg-jp-2-light-gray-200 focus:outline-none focus:shadow-jp-2-sm-gray-focus";
            case 1:
              return "bg-jp-2-light-gray-200";
            case 2:
              return "";
          }
      }
    case 2:
      switch (t) {
        case 0:
          switch (r) {
            case 0:
              return "bg-jp-2-light-red-600 hover:bg-jp-2-light-red-700 focus:outline-none shadow-jp-2-xs focus:shadow-jp-2-sm-error-focus";
            case 1:
              return "bg-jp-2-light-red-600";
            case 2:
              return "bg-jp-2-light-red-300 shadow-jp-2-xs";
          }
        case 1:
          switch (r) {
            case 0:
              return "bg-jp-2-light-red-200 hover:bg-jp-2-light-red-300 focus:outline-none focus:shadow-jp-2-sm-error-focus";
            case 1:
              return "bg-jp-2-light-red-200";
            case 2:
              return "bg-jp-2-light-red-100";
          }
        case 2:
          switch (r) {
            case 0:
              return "hover:bg-jp-2-light-red-200 focus:outline-none focus:shadow-jp-2-sm-error-focus";
            case 1:
              return "bg-jp-2-light-red-200";
            case 2:
              return "";
          }
      }
    case 3:
      switch (t) {
        case 0:
          switch (r) {
            case 0:
              return "bg-jp-2-light-green-600 hover:bg-jp-2-light-green-700 focus:outline-none shadow-jp-2-xs focus:shadow-jp-2-sm-error-focus";
            case 1:
              return "bg-jp-2-light-green-600";
            case 2:
              return "bg-jp-2-light-green-300 shadow-jp-2-xs";
          }
        case 1:
          switch (r) {
            case 0:
              return "bg-jp-2-light-green-200 hover:bg-jp-2-light-green-300 focus:outline-none focus:shadow-jp-2-sm-error-focus";
            case 1:
              return "bg-jp-2-light-green-200";
            case 2:
              return "bg-jp-2-light-green-100";
          }
        case 2:
          switch (r) {
            case 0:
              return "hover:bg-jp-2-light-green-200 focus:outline-none focus:shadow-jp-2-sm-error-focus";
            case 1:
              return "bg-jp-2-light-green-200";
            case 2:
              return "";
          }
      }
  }
}
function Ir(e, r, t, n) {
  return Dr(e, r, t, void 0);
}
function Pr(e, r, t, n) {
  switch (e) {
    case 0:
      switch (t) {
        case 0:
          switch (r) {
            case 0:
            case 1:
            case 2:
              return "text-white fill-white";
          }
        case 1:
          switch (r) {
            case 0:
            case 1:
              return "text-jp-2-light-primary-600 fill-jp-2-light-primary-600";
            case 2:
              return "text-jp-2-light-primary-300 fill-jp-2-light-primary-300";
          }
        case 2:
          switch (r) {
            case 0:
            case 1:
              return "text-jp-2-light-primary-600 fill-jp-2-light-primary-600";
            case 2:
              return "text-jp-2-light-primary-300 fill-jp-2-light-primary-300";
          }
      }
    case 1:
      switch (t) {
        case 0:
          switch (r) {
            case 0:
              return "text-jp-2-light-gray-1500 hover:text-jp-2-light-gray-2000 fill-jp-2-light-gray-1500 hover:fill-jp-2-light-gray-2000";
            case 1:
              return "text-jp-2-light-gray-1500 fill-jp-2-light-gray-1500";
            case 2:
              return "text-jp-2-light-gray-600 fill-jp-2-light-gray-600";
          }
        case 1:
          switch (r) {
            case 0:
              return "text-jp-2-light-gray-1500 hover:text-jp-2-light-gray-2000 fill-jp-2-light-gray-1500 hover:fill-jp-2-light-gray-2000";
            case 1:
              return "text-jp-2-light-gray-1500 fill-jp-2-light-gray-1500";
            case 2:
              return "text-jp-2-light-gray-600 fill-jp-2-light-gray-600";
          }
        case 2:
          switch (r) {
            case 0:
              return "text-jp-2-light-gray-1500 hover:text-jp-2-light-gray-2000 fill-jp-2-light-gray-1500 hover:fill-jp-2-light-gray-2000";
            case 1:
              return "text-jp-2-light-gray-1500 fill-jp-2-light-gray-1500";
            case 2:
              return "text-jp-2-light-gray-600 fill-jp-2-light-gray-600";
          }
      }
    case 2:
      switch (t) {
        case 0:
          switch (r) {
            case 0:
            case 1:
            case 2:
              return "text-white fill-white";
          }
        case 1:
          switch (r) {
            case 0:
            case 1:
              return "text-jp-2-light-red-600 fill-jp-2-light-red-600";
            case 2:
              return "text-jp-2-light-red-300 fill-jp-2-light-red-300";
          }
        case 2:
          switch (r) {
            case 0:
            case 1:
              return "text-jp-2-light-red-600 fill-jp-2-light-red-600";
            case 2:
              return "text-jp-2-light-red-300 fill-jp-2-light-red-300";
          }
      }
    case 3:
      switch (t) {
        case 0:
          switch (r) {
            case 0:
            case 1:
            case 2:
              return "text-white fill-white";
          }
        case 1:
          switch (r) {
            case 0:
            case 1:
              return "text-jp-2-light-green-600 fill-jp-2-light-green-600";
            case 2:
              return "text-jp-2-light-green-300 fill-jp-2-light-green-300";
          }
        case 2:
          switch (r) {
            case 0:
            case 1:
              return "text-jp-2-light-green-600 fill-jp-2-light-green-600";
            case 2:
              return "text-jp-2-light-green-300 fill-jp-2-light-green-300";
          }
      }
  }
}
function Mr(e, r, t, n) {
  return Pr(e, r, t, void 0);
}
function Fr(e) {
  var r = e.ellipsisOnly,
    t = e.badge,
    n = e.allowButtonTextMinWidth,
    u = e.onClick,
    i = e.onEnterPress,
    o = e.flattenTop,
    c = e.flattenBottom,
    l = e.type_,
    f = e.rightIcon,
    E = e.leftIcon,
    z = e.buttonSize,
    Z = e.buttonVariant,
    H = e.btnBgVariant,
    G = e.buttonType,
    $ = e.text,
    K = e.buttonState,
    X = e.loadingText,
    Ee = X !== void 0 ? X : "Loading..",
    ke = K !== void 0 ? K : "Normal",
    Oe = G !== void 0 ? G : "Primary",
    Se = H !== void 0 ? H : "Solid",
    Ne = Z !== void 0 ? Z : "Fit",
    Re = z !== void 0 ? z : "Large",
    Te = l !== void 0 ? l : "button",
    $e = c !== void 0 ? c : !1,
    Be = o !== void 0 ? o : !1,
    De = i !== void 0 ? i : !0,
    Ie = n !== void 0 ? n : !0,
    Y = t !== void 0 ? y(t) : Br,
    Q = r !== void 0 ? r : !1,
    h;
  switch (ke) {
    case "Disabled":
      h = 2;
      break;
    case "Loading":
      h = 1;
      break;
    default:
      h = 0;
  }
  var g;
  switch (Oe) {
    case "Delete":
      g = 2;
      break;
    case "Secondary":
      g = 1;
      break;
    case "Success":
      g = 3;
      break;
    default:
      g = 0;
  }
  var _;
  switch (Se) {
    case "NoFill":
      _ = 2;
      break;
    case "Subtle":
      _ = 1;
      break;
    default:
      _ = 0;
  }
  var v;
  switch (Ne) {
    case "Full":
      v = 2;
      break;
    case "Long":
      v = 1;
      break;
    case "Rounded":
      v = 3;
      break;
    default:
      v = 0;
  }
  var p;
  switch (Re) {
    case "Medium":
      p = 1;
      break;
    case "Small":
      p = 2;
      break;
    default:
      p = 0;
  }
  var Pe = A(F(Y, "color"), "NoBadge"),
    ee = Pe === "BadgeBlue" ? 0 : 1,
    Me = A(F(Y, "value"), "1"),
    w;
  switch (v) {
    case 0:
      w = "";
      break;
    case 1:
      w = "w-92.5";
      break;
    case 2:
      w = "w-full";
      break;
    case 3:
      w = p === 0 ? "w-12" : "w-10";
      break;
  }
  var B;
  if (h >= 2) B = "bg-slate-300";
  else {
    var Fe = ee;
    B = Fe ? "hidden" : "bg-jp-2-light-primary-600 font-medium";
  }
  var Ae = "text-white",
    k;
  switch (p) {
    case 0:
      k = "h-12";
      break;
    case 1:
      k = "h-10";
      break;
    case 2:
      k = "h-8";
      break;
  }
  var O;
  switch (h) {
    case 0:
      O = "cursor-pointer";
      break;
    case 1:
      O = "cursor-wait";
      break;
    case 2:
      O = "cursor-not-allowed";
      break;
  }
  var j;
  if (v === 3) j = "";
  else
    switch (p) {
      case 0:
        j = "px-5 py-4";
        break;
      case 1:
        j = "px-4 py-2.5";
        break;
      case 2:
        j = "px-4 py-1.75";
        break;
    }
  var Ve = p >= 2 ? "text-fs-12" : "text-fs-14",
    Le = Q ? "truncate" : "",
    Ue = Q ? "max-w-[250px] md:max-w-xs" : "",
    D = p >= 2 ? "w-3.5 h-3.5" : "w-5 h-5",
    qe = p !== 0 ? "px-2 mr-0.5" : "px-2 mb-1 mr-0.5",
    Je = p !== 0 ? "text-sm" : "text-base",
    We = Ir(g, h, _, void 0),
    ze = Mr(g, h, _, void 0),
    Ze = $e ? "rounded-b-none" : "",
    He = Be ? "rounded-t-none" : "",
    Ge = p >= 2 ? "rounded-md" : "rounded-lg",
    Ke = "" + Ge + " " + Ze + " " + He,
    Xe = h !== 0,
    Ye = function (b) {
      if (u !== void 0) return ue(u, b);
    },
    Qe = g === 1 && h === 2 ? "font-medium" : "font-semibold",
    er = (Ie ? "min-w-min" : "") + " " + We + " " + Ke,
    rr = p >= 2 ? "gap-1.5" : "gap-2",
    tr = ee;
  return d.jsxs("button", {
    children: [
      h === 1
        ? d.jsx("span", {
            children: d.jsx("svg", {
              children: d.jsx("path", {
                clipRule: "evenodd",
                d: "M12 1C12.5523 1 13 1.44772 13 2V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V2C11 1.44772 11.4477 1 12 1ZM4.21447 4.29283C4.60499 3.90231 5.23815 3.90231 5.62868 4.29283L8.45711 7.12126C8.84763 7.51179 8.84763 8.14495 8.45711 8.53548C8.06658 8.926 7.43342 8.926 7.04289 8.53548L4.21447 5.70705C3.82394 5.31652 3.82394 4.68336 4.21447 4.29283ZM19.7855 4.29283C20.1761 4.68336 20.1761 5.31652 19.7855 5.70705L16.9571 8.53548C16.5666 8.926 15.9334 8.926 15.5429 8.53548C15.1524 8.14495 15.1524 7.51179 15.5429 7.12126L18.3713 4.29284C18.7618 3.90231 19.395 3.90231 19.7855 4.29283ZM1 12C1 11.4477 1.44772 11 2 11H6C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13H2C1.44772 13 1 12.5523 1 12ZM17 12C17 11.4477 17.4477 11 18 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H18C17.4477 13 17 12.5523 17 12ZM8.45711 15.5429C8.84763 15.9334 8.84763 16.5666 8.45711 16.9571L5.62868 19.7855C5.23815 20.1761 4.60499 20.1761 4.21447 19.7855C3.82394 19.395 3.82394 18.7618 4.21447 18.3713L7.04289 15.5429C7.43342 15.1524 8.06658 15.1524 8.45711 15.5429ZM15.5429 15.5429C15.9334 15.1524 16.5666 15.1524 16.9571 15.5429L19.7855 18.3713C20.1761 18.7618 20.1761 19.395 19.7855 19.7855C19.395 20.1761 18.7618 20.1761 18.3713 19.7855L15.5429 16.9571C15.1524 16.5666 15.1524 15.9334 15.5429 15.5429ZM12 17C12.5523 17 13 17.4477 13 18V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V18C11 17.4477 11.4477 17 12 17Z",
                fillRule: "evenodd",
              }),
              className: D,
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
            }),
            className: "flex items-center mx-2 animate-spin",
          })
        : E !== void 0
        ? d.jsx("div", { children: y(E), className: D })
        : null,
      $ !== void 0 && $ !== ""
        ? d.jsx("div", {
            children: d.jsx("div", {
              children: h === 1 ? Ee : $,
              className: "" + Ve + " " + Qe + " " + Le + " whitespace-pre",
            }),
            className: Ue,
          })
        : null,
      tr
        ? null
        : d.jsx("span", {
            children: Me,
            className:
              "flex items-center " +
              B +
              " " +
              Ae +
              " " +
              qe +
              " " +
              Je +
              "  rounded-full",
          }),
      f !== void 0 ? d.jsx("div", { children: y(f), className: D }) : null,
    ],
    className:
      "flex justify-center " +
      k +
      " " +
      rr +
      " " +
      er +
      " items-center  " +
      ze +
      " " +
      O +
      " " +
      j +
      " " +
      w +
      " overflow-hidden",
    disabled: Xe,
    type: Te,
    onKeyPress: function (b) {
      if (!De) {
        b.preventDefault();
        return;
      }
    },
    onKeyUp: function (b) {
      b.preventDefault();
    },
    onClick: Ye,
  });
}
var xe = Fr;
var Xr = te(W(), 1);
W();
var Qr = xe;
export { Qr as Button };
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
