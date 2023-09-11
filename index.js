var tr = Object.create;
var O = Object.defineProperty;
var nr = Object.getOwnPropertyDescriptor;
var ur = Object.getOwnPropertyNames;
var ir = Object.getPrototypeOf,
  sr = Object.prototype.hasOwnProperty;
var S = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports),
  or = (e, r) => {
    for (var t in r) O(e, t, { get: r[t], enumerable: !0 });
  },
  re = (e, r, t, n) => {
    if ((r && typeof r == "object") || typeof r == "function")
      for (let u of ur(r))
        !sr.call(e, u) &&
          u !== t &&
          O(e, u, {
            get: () => r[u],
            enumerable: !(n = nr(r, u)) || n.enumerable,
          });
    return e;
  };
var cr = (e, r, t) => (
    (t = e != null ? tr(ir(e)) : {}),
    re(
      r || !e || !e.__esModule
        ? O(t, "default", { value: e, enumerable: !0 })
        : t,
      e
    )
  ),
  lr = (e) => re(O({}, "__esModule", { value: !0 }), e);
var ve = S((s) => {
  "use strict";
  var C = Symbol.for("react.element"),
    hr = Symbol.for("react.portal"),
    dr = Symbol.for("react.fragment"),
    gr = Symbol.for("react.strict_mode"),
    vr = Symbol.for("react.profiler"),
    yr = Symbol.for("react.provider"),
    mr = Symbol.for("react.context"),
    _r = Symbol.for("react.forward_ref"),
    wr = Symbol.for("react.suspense"),
    jr = Symbol.for("react.memo"),
    br = Symbol.for("react.lazy"),
    se = Symbol.iterator;
  function Cr(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (se && e[se]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var le = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    fe = Object.assign,
    ae = {};
  function m(e, r, t) {
    (this.props = e),
      (this.context = r),
      (this.refs = ae),
      (this.updater = t || le);
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
  function pe() {}
  pe.prototype = m.prototype;
  function U(e, r, t) {
    (this.props = e),
      (this.context = r),
      (this.refs = ae),
      (this.updater = t || le);
  }
  var J = (U.prototype = new pe());
  J.constructor = U;
  fe(J, m.prototype);
  J.isPureReactComponent = !0;
  var oe = Array.isArray,
    he = Object.prototype.hasOwnProperty,
    q = { current: null },
    de = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ge(e, r, t) {
    var n,
      u = {},
      i = null,
      o = null;
    if (r != null)
      for (n in (r.ref !== void 0 && (o = r.ref),
      r.key !== void 0 && (i = "" + r.key),
      r))
        he.call(r, n) && !de.hasOwnProperty(n) && (u[n] = r[n]);
    var c = arguments.length - 2;
    if (c === 1) u.children = t;
    else if (1 < c) {
      for (var l = Array(c), f = 0; f < c; f++) l[f] = arguments[f + 2];
      u.children = l;
    }
    if (e && e.defaultProps)
      for (n in ((c = e.defaultProps), c)) u[n] === void 0 && (u[n] = c[n]);
    return {
      $$typeof: C,
      type: e,
      key: i,
      ref: o,
      props: u,
      _owner: q.current,
    };
  }
  function xr(e, r) {
    return {
      $$typeof: C,
      type: e.type,
      key: r,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function W(e) {
    return typeof e == "object" && e !== null && e.$$typeof === C;
  }
  function Er(e) {
    var r = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (t) {
        return r[t];
      })
    );
  }
  var ce = /\/+/g;
  function L(e, r) {
    return typeof e == "object" && e !== null && e.key != null
      ? Er("" + e.key)
      : r.toString(36);
  }
  function R(e, r, t, n, u) {
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
            case C:
            case hr:
              o = !0;
          }
      }
    if (o)
      return (
        (o = e),
        (u = u(o)),
        (e = n === "" ? "." + L(o, 0) : n),
        oe(u)
          ? ((t = ""),
            e != null && (t = e.replace(ce, "$&/") + "/"),
            R(u, r, t, "", function (f) {
              return f;
            }))
          : u != null &&
            (W(u) &&
              (u = xr(
                u,
                t +
                  (!u.key || (o && o.key === u.key)
                    ? ""
                    : ("" + u.key).replace(ce, "$&/") + "/") +
                  e
              )),
            r.push(u)),
        1
      );
    if (((o = 0), (n = n === "" ? "." : n + ":"), oe(e)))
      for (var c = 0; c < e.length; c++) {
        i = e[c];
        var l = n + L(i, c);
        o += R(i, r, t, l, u);
      }
    else if (((l = Cr(e)), typeof l == "function"))
      for (e = l.call(e), c = 0; !(i = e.next()).done; )
        (i = i.value), (l = n + L(i, c++)), (o += R(i, r, t, l, u));
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
  function N(e, r, t) {
    if (e == null) return e;
    var n = [],
      u = 0;
    return (
      R(e, n, "", "", function (i) {
        return r.call(t, i, u++);
      }),
      n
    );
  }
  function kr(e) {
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
    T = { transition: null },
    Or = {
      ReactCurrentDispatcher: a,
      ReactCurrentBatchConfig: T,
      ReactCurrentOwner: q,
    };
  s.Children = {
    map: N,
    forEach: function (e, r, t) {
      N(
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
        N(e, function () {
          r++;
        }),
        r
      );
    },
    toArray: function (e) {
      return (
        N(e, function (r) {
          return r;
        }) || []
      );
    },
    only: function (e) {
      if (!W(e))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return e;
    },
  };
  s.Component = m;
  s.Fragment = dr;
  s.Profiler = vr;
  s.PureComponent = U;
  s.StrictMode = gr;
  s.Suspense = wr;
  s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Or;
  s.cloneElement = function (e, r, t) {
    if (e == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          "."
      );
    var n = fe({}, e.props),
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
        he.call(r, l) &&
          !de.hasOwnProperty(l) &&
          (n[l] = r[l] === void 0 && c !== void 0 ? c[l] : r[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) n.children = t;
    else if (1 < l) {
      c = Array(l);
      for (var f = 0; f < l; f++) c[f] = arguments[f + 2];
      n.children = c;
    }
    return { $$typeof: C, type: e.type, key: u, ref: i, props: n, _owner: o };
  };
  s.createContext = function (e) {
    return (
      (e = {
        $$typeof: mr,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: yr, _context: e }),
      (e.Consumer = e)
    );
  };
  s.createElement = ge;
  s.createFactory = function (e) {
    var r = ge.bind(null, e);
    return (r.type = e), r;
  };
  s.createRef = function () {
    return { current: null };
  };
  s.forwardRef = function (e) {
    return { $$typeof: _r, render: e };
  };
  s.isValidElement = W;
  s.lazy = function (e) {
    return { $$typeof: br, _payload: { _status: -1, _result: e }, _init: kr };
  };
  s.memo = function (e, r) {
    return { $$typeof: jr, type: e, compare: r === void 0 ? null : r };
  };
  s.startTransition = function (e) {
    var r = T.transition;
    T.transition = {};
    try {
      e();
    } finally {
      T.transition = r;
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
var me = S((Zr, ye) => {
  "use strict";
  ye.exports = ve();
});
var we = S(($) => {
  "use strict";
  var Sr = me(),
    Nr = Symbol.for("react.element"),
    Rr = Symbol.for("react.fragment"),
    Tr = Object.prototype.hasOwnProperty,
    $r =
      Sr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Br = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _e(e, r, t) {
    var n,
      u = {},
      i = null,
      o = null;
    t !== void 0 && (i = "" + t),
      r.key !== void 0 && (i = "" + r.key),
      r.ref !== void 0 && (o = r.ref);
    for (n in r) Tr.call(r, n) && !Br.hasOwnProperty(n) && (u[n] = r[n]);
    if (e && e.defaultProps)
      for (n in ((r = e.defaultProps), r)) u[n] === void 0 && (u[n] = r[n]);
    return {
      $$typeof: Nr,
      type: e,
      key: i,
      ref: o,
      props: u,
      _owner: $r.current,
    };
  }
  $.Fragment = Rr;
  $.jsx = _e;
  $.jsxs = _e;
});
var be = S((Gr, je) => {
  "use strict";
  je.exports = we();
});
var Ur = {};
or(Ur, { Button: () => Lr });
module.exports = lr(Ur);
function P(e, r, t) {
  for (var n = new Array(t), u = 0, i = r; u < t; )
    (n[u] = e[i]), (u = (u + 1) | 0), (i = (i + 1) | 0);
  return n;
}
function te(e, r) {
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
        return function (x) {
          return te(l, f.concat([x]));
        };
      })(n, t);
    (r = P(t, i, -c | 0)), (e = n.apply(null, P(t, 0, i)));
  }
}
function ne(e, r) {
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
      return te(e, [r]);
  }
}
function M(e) {
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
function A(e, r) {
  if (r in e) return M(e[r]);
}
function ie(e) {
  for (var r = {}, t = e.length, n = 0; n < t; ++n) {
    var u = e[n];
    r[u[0]] = u[1];
  }
  return r;
}
function V(e, r) {
  return e !== void 0 ? y(e) : r;
}
var d = cr(be(), 1),
  Dr = ie([
    ["value", "1"],
    ["color", "NoBadge"],
  ]);
function Ir(e, r, t, n) {
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
function Pr(e, r, t, n) {
  return Ir(e, r, t, void 0);
}
function Mr(e, r, t, n) {
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
function Fr(e, r, t, n) {
  return Mr(e, r, t, void 0);
}
function Ar(e) {
  var r = e.ellipsisOnly,
    t = e.badge,
    n = e.allowButtonTextMinWidth,
    u = e.onClick,
    i = e.onEnterPress,
    o = e.flattenTop,
    c = e.flattenBottom,
    l = e.type_,
    f = e.rightIcon,
    x = e.leftIcon,
    z = e.buttonSize,
    Z = e.buttonVariant,
    H = e.btnBgVariant,
    G = e.buttonType,
    B = e.text,
    K = e.buttonState,
    X = e.loadingText,
    xe = X !== void 0 ? X : "Loading..",
    Ee = K !== void 0 ? K : "Normal",
    ke = G !== void 0 ? G : "Primary",
    Oe = H !== void 0 ? H : "Solid",
    Se = Z !== void 0 ? Z : "Fit",
    Ne = z !== void 0 ? z : "Large",
    Re = l !== void 0 ? l : "button",
    Te = c !== void 0 ? c : !1,
    $e = o !== void 0 ? o : !1,
    Be = i !== void 0 ? i : !0,
    De = n !== void 0 ? n : !0,
    Y = t !== void 0 ? y(t) : Dr,
    Q = r !== void 0 ? r : !1,
    h;
  switch (Ee) {
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
  switch (ke) {
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
  switch (Oe) {
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
  switch (Se) {
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
  switch (Ne) {
    case "Medium":
      p = 1;
      break;
    case "Small":
      p = 2;
      break;
    default:
      p = 0;
  }
  var Ie = V(A(Y, "color"), "NoBadge"),
    ee = Ie === "BadgeBlue" ? 0 : 1,
    Pe = V(A(Y, "value"), "1"),
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
  var D;
  if (h >= 2) D = "bg-slate-300";
  else {
    var Me = ee;
    D = Me ? "hidden" : "bg-jp-2-light-primary-600 font-medium";
  }
  var Fe = "text-white",
    E;
  switch (p) {
    case 0:
      E = "h-12";
      break;
    case 1:
      E = "h-10";
      break;
    case 2:
      E = "h-8";
      break;
  }
  var k;
  switch (h) {
    case 0:
      k = "cursor-pointer";
      break;
    case 1:
      k = "cursor-wait";
      break;
    case 2:
      k = "cursor-not-allowed";
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
  var Ae = p >= 2 ? "text-fs-12" : "text-fs-14",
    Ve = Q ? "truncate" : "",
    Le = Q ? "max-w-[250px] md:max-w-xs" : "",
    I = p >= 2 ? "w-3.5 h-3.5" : "w-5 h-5",
    Ue = p !== 0 ? "px-2 mr-0.5" : "px-2 mb-1 mr-0.5",
    Je = p !== 0 ? "text-sm" : "text-base",
    qe = Pr(g, h, _, void 0),
    We = Fr(g, h, _, void 0),
    ze = Te ? "rounded-b-none" : "",
    Ze = $e ? "rounded-t-none" : "",
    He = p >= 2 ? "rounded-md" : "rounded-lg",
    Ge = "" + He + " " + ze + " " + Ze,
    Ke = h !== 0,
    Xe = function (b) {
      if (u !== void 0) return ne(u, b);
    },
    Ye = g === 1 && h === 2 ? "font-medium" : "font-semibold",
    Qe = (De ? "min-w-min" : "") + " " + qe + " " + Ge,
    er = p >= 2 ? "gap-1.5" : "gap-2",
    rr = ee;
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
              className: I,
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
            }),
            className: "flex items-center mx-2 animate-spin",
          })
        : x !== void 0
        ? d.jsx("div", { children: y(x), className: I })
        : null,
      B !== void 0 && B !== ""
        ? d.jsx("div", {
            children: d.jsx("div", {
              children: h === 1 ? xe : B,
              className: "" + Ae + " " + Ye + " " + Ve + " whitespace-pre",
            }),
            className: Le,
          })
        : null,
      rr
        ? null
        : d.jsx("span", {
            children: Pe,
            className:
              "flex items-center " +
              D +
              " " +
              Fe +
              " " +
              Ue +
              " " +
              Je +
              "  rounded-full",
          }),
      f !== void 0 ? d.jsx("div", { children: y(f), className: I }) : null,
    ],
    className:
      "flex justify-center " +
      E +
      " " +
      er +
      " " +
      Qe +
      " items-center  " +
      We +
      " " +
      k +
      " " +
      j +
      " " +
      w +
      " overflow-hidden",
    disabled: Ke,
    type: Re,
    onKeyPress: function (b) {
      if (!Be) {
        b.preventDefault();
        return;
      }
    },
    onKeyUp: function (b) {
      b.preventDefault();
    },
    onClick: Xe,
  });
}
var Ce = Ar;
var Lr = Ce;
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
