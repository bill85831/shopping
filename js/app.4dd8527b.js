(function (t) {
  function n(n) {
    for (
      var c, u, i = n[0], a = n[1], l = n[2], f = 0, s = [];
      f < i.length;
      f++
    )
      (u = i[f]),
        Object.prototype.hasOwnProperty.call(o, u) && o[u] && s.push(o[u][0]),
        (o[u] = 0);
    for (c in a) Object.prototype.hasOwnProperty.call(a, c) && (t[c] = a[c]);
    b && b(n);
    while (s.length) s.shift()();
    return r.push.apply(r, l || []), e();
  }
  function e() {
    for (var t, n = 0; n < r.length; n++) {
      for (var e = r[n], c = !0, i = 1; i < e.length; i++) {
        var a = e[i];
        0 !== o[a] && (c = !1);
      }
      c && (r.splice(n--, 1), (t = u((u.s = e[0]))));
    }
    return t;
  }
  var c = {},
    o = { app: 0 },
    r = [];
  function u(n) {
    if (c[n]) return c[n].exports;
    var e = (c[n] = { i: n, l: !1, exports: {} });
    return t[n].call(e.exports, e, e.exports, u), (e.l = !0), e.exports;
  }
  (u.m = t),
    (u.c = c),
    (u.d = function (t, n, e) {
      u.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e });
    }),
    (u.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (u.t = function (t, n) {
      if ((1 & n && (t = u(t)), 8 & n)) return t;
      if (4 & n && "object" === typeof t && t && t.__esModule) return t;
      var e = Object.create(null);
      if (
        (u.r(e),
        Object.defineProperty(e, "default", { enumerable: !0, value: t }),
        2 & n && "string" != typeof t)
      )
        for (var c in t)
          u.d(
            e,
            c,
            function (n) {
              return t[n];
            }.bind(null, c)
          );
      return e;
    }),
    (u.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return u.d(n, "a", n), n;
    }),
    (u.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (u.p = "");
  var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    a = i.push.bind(i);
  (i.push = n), (i = i.slice());
  for (var l = 0; l < i.length; l++) n(i[l]);
  var b = a;
  r.push([0, "chunk-vendors"]), e();
})({
  0: function (t, n, e) {
    t.exports = e("56d7");
  },
  "12bf": function (t, n, e) {},
  4122: function (t, n, e) {},
  5516: function (t, n, e) {
    "use strict";
    e("a7ae");
  },
  "56d7": function (t, n, e) {
    "use strict";
    e.r(n);
    e("e260"), e("e6cf"), e("cca6"), e("a79d");
    var c = e("7a23"),
      o = { class: "main_content" },
      r = ["onClick"];
    function u(t, n, e, u, i, a) {
      return (
        Object(c["i"])(),
        Object(c["e"])("div", o, [
          (Object(c["i"])(!0),
          Object(c["e"])(
            c["a"],
            null,
            Object(c["l"])(i.tabs, function (t) {
              return (
                Object(c["i"])(),
                Object(c["e"])(
                  "div",
                  {
                    key: t,
                    class: Object(c["h"])([
                      "tab_title",
                      { active: i.currentTab === t },
                    ]),
                    onClick: function (n) {
                      return (i.currentTab = t);
                    },
                  },
                  Object(c["n"])(t),
                  11,
                  r
                )
              );
            }),
            128
          )),
          (Object(c["i"])(),
          Object(c["d"])(
            c["b"],
            null,
            [
              (Object(c["i"])(),
              Object(c["d"])(
                Object(c["m"])(i.currentTab),
                { "product-detail": i.products, "cart-detail": i.products },
                null,
                8,
                ["product-detail", "cart-detail"]
              )),
            ],
            1024
          )),
        ])
      );
    }
    e("b0c0");
    var i = function (t) {
        return (
          Object(c["k"])("data-v-d0212476"), (t = t()), Object(c["j"])(), t
        );
      },
      a = { class: "productContent" },
      l = { class: "infoBox" },
      b = ["src"],
      f = { class: "actionBox" },
      s = ["onClick"],
      d = ["onClick"],
      p = ["onClick"],
      O = i(function () {
        return Object(c["f"])(
          "svg",
          { class: "icon", viewBox: "0 0 100 100", width: "80", height: "80" },
          [
            Object(c["f"])("circle", {
              class: "circle",
              cx: "50",
              cy: "50",
              r: "48",
            }),
            Object(c["f"])("polyline", {
              class: "check",
              points: "28,53 42,66 74,34",
            }),
          ],
          -1
        );
      }),
      j = i(function () {
        return Object(c["f"])("p", null, "成功加入購物車", -1);
      }),
      h = [O, j];
    function m(t, n, e, o, r, u) {
      return (
        Object(c["i"])(),
        Object(c["e"])("div", a, [
          (Object(c["i"])(!0),
          Object(c["e"])(
            c["a"],
            null,
            Object(c["l"])(e.productDetail, function (t) {
              return (
                Object(c["i"])(),
                Object(c["e"])("div", { class: "product", key: t }, [
                  Object(c["f"])("div", l, [
                    Object(c["f"])("img", { src: t.thumb }, null, 8, b),
                    Object(c["f"])("div", null, [
                      Object(c["f"])("h2", null, Object(c["n"])(t.name), 1),
                      Object(c["f"])("p", null, Object(c["n"])(t.price), 1),
                    ]),
                  ]),
                  Object(c["f"])("div", f, [
                    Object(c["f"])("div", null, [
                      Object(c["f"])(
                        "button",
                        {
                          class: "leftQuantity",
                          onClick: function (n) {
                            return u.minusOne(t);
                          },
                        },
                        "-",
                        8,
                        s
                      ),
                      Object(c["f"])(
                        "span",
                        null,
                        Object(c["n"])(t.amountShow),
                        1
                      ),
                      Object(c["f"])(
                        "button",
                        {
                          class: "rightQuantity",
                          onClick: function (n) {
                            return u.addOne(t);
                          },
                        },
                        "+",
                        8,
                        d
                      ),
                    ]),
                    Object(c["f"])(
                      "button",
                      {
                        class: "addToCart",
                        onClick: function (n) {
                          return u.addToCart(t);
                        },
                      },
                      " add to cart ",
                      8,
                      p
                    ),
                  ]),
                  Object(c["f"])(
                    "div",
                    {
                      class: Object(c["h"])([
                        "iconContent",
                        { showing: t.showingIcon },
                      ]),
                    },
                    h,
                    2
                  ),
                ])
              );
            }),
            128
          )),
        ])
      );
    }
    var w = {
        props: { productDetail: { type: Object } },
        data: function () {
          return {};
        },
        methods: {
          minusOne: function (t) {
            t.amountShow--,
              (t.amountShow = t.amountShow < 1 ? 1 : t.amountShow);
          },
          addOne: function (t) {
            t.amountShow++,
              (t.amountShow = t.amountShow > 9 ? 9 : t.amountShow);
          },
          addToCart: function (t) {
            (t.amount += t.amountShow),
              (t.showingIcon = !0),
              setTimeout(function () {
                t.showingIcon = !1;
              }, 800);
          },
        },
      },
      v = (e("fd30"), e("6b0d")),
      g = e.n(v);
    const k = g()(w, [
      ["render", m],
      ["__scopeId", "data-v-d0212476"],
    ]);
    var y = k,
      S = function (t) {
        return (
          Object(c["k"])("data-v-50717918"), (t = t()), Object(c["j"])(), t
        );
      },
      C = { class: "cartContent" },
      x = S(function () {
        return Object(c["f"])(
          "thead",
          null,
          [
            Object(c["f"])("tr", null, [
              Object(c["f"])("th", { colspan: "5" }, "Order"),
            ]),
          ],
          -1
        );
      }),
      P = S(function () {
        return Object(c["f"])(
          "tr",
          { class: "tableTitle" },
          [
            Object(c["f"])("td", null, "品項"),
            Object(c["f"])("td", null, "數量"),
            Object(c["f"])("td", null, "單價"),
            Object(c["f"])("td", null, "小計"),
            Object(c["f"])("td"),
          ],
          -1
        );
      }),
      I = ["onClick"],
      _ = S(function () {
        return Object(c["f"])("td", { colspan: "3" }, null, -1);
      }),
      T = Object(c["g"])(" Total "),
      D = { class: "totalPrice" },
      B = S(function () {
        return Object(c["f"])("td", null, null, -1);
      }),
      M = S(function () {
        return Object(c["f"])("button", { class: "checkout" }, "前往付款", -1);
      });
    function A(t, n, e, o, r, u) {
      return (
        Object(c["i"])(),
        Object(c["e"])("div", C, [
          Object(c["f"])("table", null, [
            x,
            Object(c["f"])("tbody", null, [
              P,
              (Object(c["i"])(!0),
              Object(c["e"])(
                c["a"],
                null,
                Object(c["l"])(u.productsInCart, function (t) {
                  return (
                    Object(c["i"])(),
                    Object(c["e"])("tr", { class: "tableBody", key: t }, [
                      Object(c["f"])("td", null, Object(c["n"])(t.name), 1),
                      Object(c["f"])("td", null, Object(c["n"])(t.amount), 1),
                      Object(c["f"])("td", null, Object(c["n"])(t.price), 1),
                      Object(c["f"])("td", null, Object(c["n"])(t.sum), 1),
                      Object(c["f"])("td", null, [
                        Object(c["f"])(
                          "button",
                          {
                            class: "delProduct",
                            onClick: function (n) {
                              return u.remove(t);
                            },
                          },
                          "×",
                          8,
                          I
                        ),
                      ]),
                    ])
                  );
                }),
                128
              )),
            ]),
            Object(c["f"])("tfoot", null, [
              Object(c["f"])("tr", null, [
                _,
                Object(c["f"])("td", null, [
                  T,
                  Object(c["f"])("span", D, "$ " + Object(c["n"])(u.total), 1),
                ]),
                B,
              ]),
            ]),
          ]),
          M,
        ])
      );
    }
    e("d81d"), e("4de4");
    var J = {
      props: { cartDetail: { type: Object } },
      data: function () {
        return {};
      },
      methods: {
        remove: function (t) {
          t.amount = 0;
        },
      },
      computed: {
        productsInCart: function () {
          return this.cartDetail
            .filter(function (t) {
              return t.amount;
            })
            .map(function (t) {
              return (t.sum = t.amount * t.price), t;
            });
        },
        total: function () {
          return this.productsInCart.reduce(function (t, n) {
            return t + n.sum;
          }, 0);
        },
      },
    };
    e("97fa");
    const Q = g()(J, [
      ["render", A],
      ["__scopeId", "data-v-50717918"],
    ]);
    var $ = Q,
      q = {
        name: "App",
        components: { Product: y, ShoppingCart: $ },
        data: function () {
          return {
            currentTab: "Product",
            tabs: ["Product", "ShoppingCart"],
            products: [
              {
                id: "63",
                name: "凱西",
                price: 180,
                thumb:
                  "https://s1.52poke.wiki/wiki/thumb/6/62/063Abra.png/300px-063Abra.png",
                amount: 0,
                amountShow: 1,
                showingIcon: !1,
              },
              {
                id: "35",
                name: "皮皮",
                price: 500,
                thumb:
                  "https://s1.52poke.wiki/wiki/thumb/f/f4/035Clefairy.png/300px-035Clefairy.png",
                amount: 0,
                amountShow: 1,
                showingIcon: !1,
              },
              {
                id: "147",
                name: "迷你龍",
                price: 2800,
                thumb:
                  "https://s1.52poke.wiki/wiki/thumb/c/cc/147Dratini.png/300px-147Dratini.png",
                amount: 0,
                amountShow: 1,
                showingIcon: !1,
              },
              {
                id: "123",
                name: "飛天螳螂",
                price: 5500,
                thumb:
                  "https://s1.52poke.wiki/wiki/thumb/b/ba/123Scyther.png/300px-123Scyther.png",
                amount: 0,
                amountShow: 1,
                showingIcon: !1,
              },
              {
                id: "127",
                name: "凱羅斯",
                price: 6500,
                thumb:
                  "https://s1.52poke.wiki/wiki/thumb/7/71/127Pinsir.png/300px-127Pinsir.png",
                amount: 0,
                amountShow: 1,
                showingIcon: !1,
              },
              {
                id: "137",
                name: "多邊獸",
                price: 9999,
                thumb:
                  "https://s1.52poke.wiki/wiki/thumb/6/6b/137Porygon.png/300px-137Porygon.png",
                amount: 0,
                amountShow: 1,
                showingIcon: !1,
              },
            ],
          };
        },
      };
    e("5516");
    const z = g()(q, [
      ["render", u],
      ["__scopeId", "data-v-73af70e8"],
    ]);
    var E = z;
    Object(c["c"])(E).mount("#app");
  },
  "97fa": function (t, n, e) {
    "use strict";
    e("4122");
  },
  a7ae: function (t, n, e) {},
  fd30: function (t, n, e) {
    "use strict";
    e("12bf");
  },
});
//# sourceMappingURL=app.4dd8527b.js.map
