(() => {
    "use strict";
    var e = {
        37: (e, r, n) => {
            Object.defineProperty(r, "__esModule", { value: !0 }),
                (r.IFrameWorker = void 0);
            var t = n(354),
                o = (function () {
                    function e(e, r) {
                        var n = this;
                        if (
                            ((this.url = e),
                                (this.onerror = null),
                                (this.onmessage = null),
                                (this.onmessageerror = null),
                                (this.handleMessage = function (e) {
                                    e.source === n.worker &&
                                        (e.stopImmediatePropagation(),
                                            n.dispatchEvent(
                                                new MessageEvent("message", { data: e.data })
                                            ),
                                            n.onmessage && n.onmessage(e));
                                }),
                                (this.handleError = function (e, r, t, o, i) {
                                    if (r === n.url.toString()) {
                                        var s = new ErrorEvent("error", {
                                            message: e,
                                            filename: r,
                                            lineno: t,
                                            colno: o,
                                            error: i,
                                        });
                                        n.dispatchEvent(s), n.onerror && n.onerror(s);
                                    }
                                }),
                                void 0 !== r)
                        )
                            throw new TypeError(
                                "Options are not supported for iframe workers"
                            );
                        var o,
                            i = new EventTarget();
                        (this.addEventListener = i.addEventListener.bind(i)),
                            (this.removeEventListener = i.removeEventListener.bind(i)),
                            (this.dispatchEvent = i.dispatchEvent.bind(i)),
                            document.body.appendChild(
                                (this.iframe =
                                    (((o = document.createElement("iframe")).width =
                                        o.height =
                                        o.frameBorder =
                                        "0"),
                                        o))
                            ),
                            this.worker.document.open(),
                            this.worker.document.write(
                                "\n      <html>\n        <body>\n          <script>\n            postMessage = " +
                                t.postMessage +
                                "\n            importScripts = " +
                                t.importScripts +
                                '\n            addEventListener("error", function(ev) {\n              parent.dispatchEvent(new ErrorEvent("error", {\n                filename: "' +
                                e +
                                '",\n                error: ev.error\n              }))\n            })\n          </script>\n          <script src="' +
                                e +
                                "?" +
                                +Date.now() +
                                '"></script>\n        </body>\n      </html>\n    '
                            ),
                            this.worker.document.close(),
                            window.addEventListener("message", this.handleMessage),
                            (window.onerror = this.handleError),
                            (this.ready = new Promise(function (e, r) {
                                (n.worker.onload = e), (n.worker.onerror = r);
                            }));
                    }
                    return (
                        (e.prototype.terminate = function () {
                            document.body.removeChild(this.iframe),
                                window.removeEventListener("message", this.handleMessage),
                                (window.onerror = null);
                        }),
                        (e.prototype.postMessage = function (e) {
                            var r = this;
                            this.ready.catch().then(function () {
                                r.worker.dispatchEvent(
                                    new MessageEvent("message", { data: e })
                                );
                            });
                        }),
                        Object.defineProperty(e.prototype, "worker", {
                            get: function () {
                                if (!this.iframe.contentWindow)
                                    throw new ReferenceError(
                                        "Invalid iframe: expected window to be present"
                                    );
                                return this.iframe.contentWindow;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        e
                    );
                })();
            r.IFrameWorker = o;
        },
        354: (e, r) => {
            Object.defineProperty(r, "__esModule", { value: !0 }),
                (r.importScripts = r.postMessage = void 0),
                (r.postMessage = function (e, r) {
                    parent.postMessage(e, r || "*");
                }),
                (r.importScripts = function () {
                    for (var e = [], r = 0; r < arguments.length; r++)
                        e[r] = arguments[r];
                    return e.reduce(function (e, r) {
                        return e.then(function () {
                            return new Promise(function (e) {
                                var n = document.createElement("script");
                                (n.src = r),
                                    n.addEventListener("load", function () {
                                        return e();
                                    }),
                                    document.body.appendChild(n);
                            });
                        });
                    }, Promise.resolve());
                });
        },
    },
        r = {};
    function n(t) {
        var o = r[t];
        if (void 0 !== o) return o.exports;
        var i = (r[t] = { exports: {} });
        return e[t](i, i.exports, n), i.exports;
    }
    var t = {};
    (() => {
        var e = t;
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(37);
        (window.IFrameWorker = r.IFrameWorker),
            "file:" === location.protocol && (window.Worker = r.IFrameWorker);
    })();
    var o = window;
    for (var i in t) o[i] = t[i];
    t.__esModule && Object.defineProperty(o, "__esModule", { value: !0 });
})();
1;
